import os
from PIL import Image, ImageDraw, ImageFilter
from rembg import remove, new_session

os.makedirs("tmp/test", exist_ok=True)


def make_studio(cut, out, size=(1600, 1000), flip=False, position=0.5, scale=0.92):
    W, H = size
    if flip:
        cut = cut.transpose(Image.FLIP_LEFT_RIGHT)

    bbox = cut.getbbox()
    if bbox:
        cut = cut.crop(bbox)

    bg = Image.new("RGB", (W, H), "#101114")
    d = ImageDraw.Draw(bg)
    for y in range(H):
        t = y / H
        r = int(14 + 14 * t)
        g = int(15 + 15 * t)
        b = int(18 + 19 * t)
        d.line([(0, y), (W, y)], fill=(r, g, b))

    glow = Image.new("RGB", (W, H), "#000000")
    gd = ImageDraw.Draw(glow)
    gd.ellipse([W * 0.1, H * 0.15, W * 1.05, H * 1.15], fill=(46, 49, 56))
    glow = glow.filter(ImageFilter.GaussianBlur(150))
    bg = Image.blend(bg, glow, 0.55)

    red = Image.new("RGB", (W, H), "#000000")
    rd = ImageDraw.Draw(red)
    rd.ellipse([W * 0.45, H * 0.72, W * 1.05, H * 1.35], fill=(118, 18, 24))
    red = red.filter(ImageFilter.GaussianBlur(120))
    bg = Image.blend(bg, red, 0.22)

    d = ImageDraw.Draw(bg, "RGBA")
    d.line([(0, int(H * 0.8)), (W, int(H * 0.8))], fill=(255, 255, 255, 8))

    max_w = int(W * scale)
    max_h = int(H * 0.66)
    ratio = min(max_w / cut.width, max_h / cut.height)
    car = cut.resize((max(1, int(cut.width * ratio)), max(1, int(cut.height * ratio))), Image.LANCZOS)
    x = int((W - car.width) * position)
    baseline = int(H * 0.82)
    y = baseline - car.height

    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    shadow_w = car.width * 0.86
    sd.ellipse(
        [x + (car.width - shadow_w) / 2, baseline - car.height * 0.035, x + (car.width + shadow_w) / 2, baseline + car.height * 0.055],
        fill=(0, 0, 0, 220),
    )
    shadow = shadow.filter(ImageFilter.GaussianBlur(26))
    bg = Image.alpha_composite(bg.convert("RGBA"), shadow)

    refl = car.transpose(Image.FLIP_TOP_BOTTOM)
    refl = refl.resize((car.width, max(1, int(car.height * 0.34))), Image.LANCZOS)
    fade = Image.new("L", refl.size, 0)
    fd = ImageDraw.Draw(fade)
    for yy in range(refl.height):
        alpha = int(70 * (1 - yy / refl.height) ** 1.7)
        fd.line([(0, yy), (refl.width, yy)], fill=alpha)
    refl.putalpha(Image.composite(fade, Image.new("L", refl.size, 0), refl.getchannel("A")))
    refl = refl.filter(ImageFilter.GaussianBlur(3))
    bg.alpha_composite(refl, (x, baseline))
    bg.alpha_composite(car, (x, y))

    bg.convert("RGB").save(out, quality=92)
    print("wrote", out)


sources = {
    "corolla": "corolla_23xei",
    "cruze": "cruze_6",
}

session = new_session("u2net")

for key, src in sources.items():
    cut_path = f"tmp/cut/{src}_rebuild.png"
    if os.path.exists(cut_path):
        cut = Image.open(cut_path).convert("RGBA")
    else:
        with open(f"tmp/img/{src}.jpg", "rb") as f:
            out = remove(
                f.read(),
                session=session,
                alpha_matting=True,
                alpha_matting_foreground_threshold=260,
                alpha_matting_background_threshold=20,
                alpha_matting_erode_size=8,
            )
        with open(cut_path, "wb") as f:
            f.write(out)
        cut = Image.open(cut_path).convert("RGBA")
    make_studio(cut, f"tmp/test/{key}.jpg", scale=0.86)
