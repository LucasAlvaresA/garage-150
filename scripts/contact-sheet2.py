import io, os, urllib.request
from PIL import Image, ImageDraw, ImageFont

os.makedirs("tmp/img", exist_ok=True)

ids = [
 "photo-1542362567-b07e54358753","photo-1583121274602-3e2820c69888","photo-1492144534655-ae79c964c9d7",
 "photo-1489824904134-891ab64532f1","photo-1549317661-bd32c8ce0db2","photo-1549399542-7e3f8b79c341",
 "photo-1553440569-bcc63803a83d","photo-1580273916550-e323be2ae537","photo-1605559424843-9e4c228bf1c2",
 "photo-1616422285623-13ff0162193c","photo-1619767886558-efdc259cde1a","photo-1603584173870-7f23fdae1b7a",
 "photo-1606664515524-ed2f786a0bd6","photo-1618843479313-40f8afb4b4d8","photo-1592198084033-aade902d1aae",
 "photo-1511919884226-fd3cad34687c","photo-1519641471654-76ce0107ad1b","photo-1541899481282-d53bffe3c35d",
 "photo-1520031441872-265e4ff70366","photo-1603386329225-868f9b1ee6c9","photo-1617469767053-d3b523a0b982",
 "photo-1621007947382-bb3c3994e3fb","photo-1609521263047-f8f205293f24","photo-1503736334956-4c8f8e92946d",
 "photo-1552519507-da3b142c6e3d","photo-1555215695-3004980ad54e","photo-1568605117036-5fe5e7bab0b7"
]
pexels = [170811,116675,120049,112460,210019,358070,164634,244206,305070,1592384,3802510,1149831,1035108,1545743,39501,63294,2199293,2365572,337909,2127733,1719646,3989087,3729464,116675,305070]

items = {}
for i, pid in enumerate(ids):
    items[f"u{i}"] = f"https://images.unsplash.com/{pid}?w=900&q=65"
for pid in pexels:
    items[f"p{pid}"] = f"https://images.pexels.com/photos/{pid}/pexels-photo-{pid}.jpeg?auto=compress&cs=tinysrgb&w=900"

def fetch(name, url):
    path = f"tmp/img/{name}.jpg"
    if os.path.exists(path):
        return path
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        data = urllib.request.urlopen(req, timeout=45).read()
        if len(data) < 5000:
            return None
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

thumb_w, thumb_h = 300, 200
cols = 6
rows = (len(paths) + cols - 1) // cols
label_h = 24
sheet = Image.new("RGB", (cols * thumb_w, rows * (thumb_h + label_h)), "#111")
draw = ImageDraw.Draw(sheet)
try:
    font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 15)
except Exception:
    font = ImageFont.load_default()

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
    draw.text((x + 6, y + thumb_h + 3), name, fill="white", font=font)

sheet.save("tmp/contact-sheet2.jpg", quality=85)
print("saved", len(paths), "images", sheet.size)
