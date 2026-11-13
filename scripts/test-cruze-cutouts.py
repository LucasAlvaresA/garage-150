import os
from PIL import Image
from rembg import remove, new_session

os.makedirs("tmp/test", exist_ok=True)
session = new_session("u2net")

for src in ["cruze_24", "cruze_23"]:
    cut_path = f"tmp/cut/{src}_rebuild.png"
    if not os.path.exists(cut_path):
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
    bbox = cut.getbbox()
    print(src, "bbox", bbox)
    # preview the raw cutout on a neutral background
    bg = Image.new("RGBA", cut.size, (40, 40, 44, 255))
    bg.alpha_composite(cut)
    bg.convert("RGB").save(f"tmp/test/{src}_raw.jpg", quality=85)
