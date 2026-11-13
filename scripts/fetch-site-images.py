import os, urllib.request
from PIL import Image

os.makedirs("public/images/categories", exist_ok=True)

downloads = {
    "public/images/hero.jpg": ("https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=2600&q=85", (2600, 1733)),
    "public/images/categories/sedans.jpg": ("https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80", None),
    "public/images/categories/suvs.jpg": ("https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1600&q=80", None),
    "public/images/categories/hatchbacks.jpg": ("https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1600&q=80", None),
    "public/images/categories/pickups.jpg": ("https://images.unsplash.com/photo-1551830820-330a71b99659?w=1600&q=80", None),
    "public/images/about.jpg": ("https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1600&q=82", None),
}

for path, (url, _) in downloads.items():
    if os.path.exists(path) and os.path.getsize(path) > 20000:
        print("exists", path)
        continue
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    data = urllib.request.urlopen(req, timeout=90).read()
    with open(path, "wb") as f:
        f.write(data)
    im = Image.open(path)
    print("saved", path, im.size, len(data))
