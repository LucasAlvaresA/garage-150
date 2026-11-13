import os, urllib.request
from PIL import Image, ImageDraw, ImageFont

os.makedirs("tmp/img", exist_ok=True)

items = {
 "civic_br2017": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Brazilian_Honda_Civic_touring_2017.jpg/1920px-Brazilian_Honda_Civic_touring_2017.jpg",
 "civic_24touring": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/24_Honda_Civic_Touring.jpg/1920px-24_Honda_Civic_Touring.jpg",
 "jetta_22cl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/2022_Volkswagen_Jetta_Comfortline_Sport_in_Platinum_Grey_Metallic%2C_Front_Right%2C_04-24-2022.jpg/1920px-2022_Volkswagen_Jetta_Comfortline_Sport_in_Platinum_Grey_Metallic%2C_Front_Right%2C_04-24-2022.jpg",
 "corolla_22xei": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Toyota_Corolla_2.0_XEi_2022.jpg/1920px-Toyota_Corolla_2.0_XEi_2022.jpg",
 "corolla_21hyb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Toyota_Corolla_1.8_Hybrid_SE-G_2021.jpg/1920px-Toyota_Corolla_1.8_Hybrid_SE-G_2021.jpg",
 "corolla_23xei": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/2023_Toyota_Corolla_2.0_XEi_%28Brazil%29.jpg/1920px-2023_Toyota_Corolla_2.0_XEi_%28Brazil%29.jpg",
 "cruze_1": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Chevrolet_Cruze_Turbo_LTZ_D2LC_Modern_Black_%281%29.jpg/1920px-Chevrolet_Cruze_Turbo_LTZ_D2LC_Modern_Black_%281%29.jpg",
 "cruze_6": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Chevrolet_Cruze_Turbo_LTZ_D2LC_Modern_Black_%286%29.jpg/1920px-Chevrolet_Cruze_Turbo_LTZ_D2LC_Modern_Black_%286%29.jpg",
 "cruze_23": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Chevrolet_Cruze_Turbo_LTZ_D2LC_Modern_Black_%2823%29.jpg/1920px-Chevrolet_Cruze_Turbo_LTZ_D2LC_Modern_Black_%2823%29.jpg",
 "compass_18": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Jeep_Compass_2.4_Longitude_4x4_2018.jpg/1920px-Jeep_Compass_2.4_Longitude_4x4_2018.jpg",
 "compass_night": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/2021_Jeep_Compass_Nighteagle_Multiair_4x2.jpg/1920px-2021_Jeep_Compass_Nighteagle_Multiair_4x2.jpg",
 "tcross_22": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Volkswagen_T-Cross_170_TSi_Trendline_2022.jpg/1920px-Volkswagen_T-Cross_170_TSi_Trendline_2022.jpg",
 "tcross_1x": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Volkswagen_T-Cross_1X7A0363.jpg/1920px-Volkswagen_T-Cross_1X7A0363.jpg",
 "hrv_16exl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Honda_HR-V_1.8_EXL_AWD_2016_%2823902370293%29.jpg/1920px-Honda_HR-V_1.8_EXL_AWD_2016_%2823902370293%29.jpg",
 "hrv_21ex": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/2021_Honda_HR-V_1.8_EX_2WD_CVT.jpg/1920px-2021_Honda_HR-V_1.8_EX_2WD_CVT.jpg",
 "creta_22plus": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/2022_Hyundai_Creta_1.6_Plus.jpg/1920px-2022_Hyundai_Creta_1.6_Plus.jpg",
 "creta_22sel": "https://upload.wikimedia.org/wikipedia/commons/9/9e/2022_Hyundai_Creta_SEL.jpg",
}

def fetch(name, url):
    path = f"tmp/img/{name}.jpg"
    if os.path.exists(path) and os.path.getsize(path) > 5000:
        return path
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        data = urllib.request.urlopen(req, timeout=60).read()
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

thumb_w, thumb_h = 440, 290
cols = 4
rows = (len(paths) + cols - 1) // cols
label_h = 26
sheet = Image.new("RGB", (cols * thumb_w, rows * (thumb_h + label_h)), "#111")
draw = ImageDraw.Draw(sheet)
font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 17)

for i, (name, path) in enumerate(paths):
    img = Image.open(path).convert("RGB")
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

sheet.save("tmp/contact-sheet3.jpg", quality=85)
print("saved", len(paths), "images", sheet.size)
