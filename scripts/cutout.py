import os
from PIL import Image, ImageDraw, ImageFilter
from rembg import remove, new_session

os.makedirs("tmp/cut", exist_ok=True)
session = new_session("u2net")

names = ["civic_24touring", "hrv_21ex", "jetta_22cl", "corolla_22xei", "cruze_1", "compass_18", "tcross_22", "creta_22sel"]

def studio(cut, out, size=(1200, 760)):
    W, H = size
    # background gradient
    bg = Image.new("RGB", (W, H), "#141518")
    d = ImageDraw.Draw(bg)
    for y in range(H):
        t = y / H
        r = int(18 + 8 * (1 - t))
        g = int(19 + 9 * (1 - t))
        b = int(23 + 12 * (1 - t))
        d.line([(0, y), (W, y)], fill=(r, g, b))
    # red glow back
    glow = Image.new("RGB", (W, H), "#000000")
    gd = ImageDraw.Draw(glow)
    gd.ellipse([W*0.2, H*0.35, W*1.05, H*1.3], fill=(120, 16, 20))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    bg = Image.blend(bg, glow, 0.28)

    # fit car
    cut = cut.copy()
    margin_x = int(W * 0.06)
    margin_top = int(H * 0.12)
    max_w = W - margin_x * 2
    max_h = int(H * 0.8)
    ratio = min(max_w / cut.width, max_h / cut.height)
    car = cut.resize((int(cut.width * ratio), int(cut.height * ratio)), Image.LANCZOS)
    x = (W - car.width) // 2
    y = int(H * 0.9) - car.height

    # shadow
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.ellipse([x + car.width*0.06, y + car.height*0.82, x + car.width*0.94, y + car.height*1.02], fill=(0,0,0,190))
    shadow = shadow.filter(ImageFilter.GaussianBlur(38))
    bg = Image.alpha_composite(bg.convert("RGBA"), shadow)
    bg.alpha_composite(car, (x, y))
    bg.convert("RGB").save(out, quality=90)
    print("wrote", out)

for n in names:
    src = f"tmp/img/{n}.jpg"
    if not os.path.exists(src):
        print("missing", src)
        continue
    cut_path = f"tmp/cut/{n}.png"
    if not os.path.exists(cut_path):
        with open(src, "rb") as f:
            out = remove(f.read(), session=session, alpha_matting=True, alpha_matting_foreground_threshold=260, alpha_matting_background_threshold=20, alpha_matting_erode_size=8)
        with open(cut_path, "wb") as f:
            f.write(out)
    cut = Image.open(cut_path).convert("RGBA")
    studio(cut, f"tmp/cut/{n}_studio.jpg")
