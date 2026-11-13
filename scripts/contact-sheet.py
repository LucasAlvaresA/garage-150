import io, os, urllib.request
from PIL import Image, ImageDraw, ImageFont

os.makedirs("tmp/img", exist_ok=True)

items = {
    # Wikimedia candidates
    "civic_a": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Honda_Civic_Sedan_%2851241465219%29.jpg/1920px-Honda_Civic_Sedan_%2851241465219%29.jpg",
    "civic_b": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/2020_Honda_Civic_sedan_au_SIAM_2020.jpg/1920px-2020_Honda_Civic_sedan_au_SIAM_2020.jpg",
    "jetta_a": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Volkswagen_Jetta_VII_GLI_IMG_3138.jpg/1920px-Volkswagen_Jetta_VII_GLI_IMG_3138.jpg",
    "jetta_b": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Volkswagen_Jetta_CL.jpg/1920px-Volkswagen_Jetta_CL.jpg",
    "corolla_a": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/2021_Toyota_Corolla_LE%2C_front_right%2C_07-13-2024.jpg/1920px-2021_Toyota_Corolla_LE%2C_front_right%2C_07-13-2024.jpg",
    "corolla_b": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/TOYOTA_COROLLA_SEDAN_%28E210%29_China_%287%29.jpg/1920px-TOYOTA_COROLLA_SEDAN_%28E210%29_China_%287%29.jpg",
    "cruze_a": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Chevrolet_Cruze_%28third_generation%29_1X7A0417.jpg/1920px-Chevrolet_Cruze_%28third_generation%29_1X7A0417.jpg",
    "cruze_b": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/0_Chevrolet_Cruze_%28second_generation%29_1.jpg/1920px-0_Chevrolet_Cruze_%28second_generation%29_1.jpg",
    "compass_a": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/2021_Jeep_Compass_Nighteagle_Multiair_4x2.jpg/1920px-2021_Jeep_Compass_Nighteagle_Multiair_4x2.jpg",
    "compass_b": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/2021_Jeep_Compass_Limited_4WD_in_Billet_Silver_Metallic%2C_front_left.jpg/1920px-2021_Jeep_Compass_Limited_4WD_in_Billet_Silver_Metallic%2C_front_left.jpg",
    "tcross_a": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Volkswagen_T-Cross_1X7A0363.jpg/1920px-Volkswagen_T-Cross_1X7A0363.jpg",
    "tcross_b": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Volkswagen_T-Cross_170_TSi_Trendline_2022.jpg/1920px-Volkswagen_T-Cross_170_TSi_Trendline_2022.jpg",
    "hrv_a": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/2021_Honda_HR-V_1.8_EX_2WD_CVT.jpg/1920px-2021_Honda_HR-V_1.8_EX_2WD_CVT.jpg",
    "hrv_b": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/2021_Honda_HR-V_Touring_in_Aegean_Blue_Metallic%2C_front_left%2C_2024-05-27.jpg/1920px-2021_Honda_HR-V_Touring_in_Aegean_Blue_Metallic%2C_front_left%2C_2024-05-27.jpg",
    "creta_a": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/2022_Hyundai_Creta_1.6_Plus.jpg/1920px-2022_Hyundai_Creta_1.6_Plus.jpg",
    "creta_b": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Hyundai_Creta_1.6_Plus_2022.jpg/1920px-Hyundai_Creta_1.6_Plus_2022.jpg",
    # Unsplash candidates
    "un_hero1": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=70",
    "un_hero2": "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=1200&q=70",
    "un_hero3": "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=70",
    "un_hero4": "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=70",
    "un_hero5": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=70",
    "un_hero6": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=70",
    "un_hero7": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=70",
    "un_about1": "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1200&q=70",
    "un_about2": "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=1200&q=70",
    "un_pickup1": "https://images.unsplash.com/photo-1551830820-330a71b99659?w=1200&q=70",
    "un_pickup2": "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=1200&q=70",
}

def fetch(name, url):
    path = f"tmp/img/{name}.jpg"
    if os.path.exists(path):
        return path
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        data = urllib.request.urlopen(req, timeout=45).read()
        with open(path, "wb") as f:
            f.write(data)
        return path
    except Exception as e:
        print("FAIL", name, e)
        return None

paths = []
for name, url in items.items():
    p = fetch(name, url)
    if p:
        paths.append((name, p))

thumb_w, thumb_h = 420, 270
cols = 4
rows = (len(paths) + cols - 1) // cols
label_h = 28
sheet = Image.new("RGB", (cols * thumb_w, rows * (thumb_h + label_h)), "#111")
draw = ImageDraw.Draw(sheet)
try:
    font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 18)
except Exception:
    font = ImageFont.load_default()

for i, (name, path) in enumerate(paths):
    img = Image.open(path).convert("RGB")
    # cover crop
    ratio = max(thumb_w / img.width, thumb_h / img.height)
    nw, nh = int(img.width * ratio), int(img.height * ratio)
    img = img.resize((nw, nh))
    left = (nw - thumb_w) // 2
    top = (nh - thumb_h) // 2
    img = img.crop((left, top, left + thumb_w, top + thumb_h))
    x = (i % cols) * thumb_w
    y = (i // cols) * (thumb_h + label_h)
    sheet.paste(img, (x, y))
    draw.text((x + 8, y + thumb_h + 4), name, fill="white", font=font)

sheet.save("tmp/contact-sheet.jpg", quality=85)
print("saved", len(paths), "images", sheet.size)

