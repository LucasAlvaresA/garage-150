import os, urllib.request
from PIL import Image, ImageDraw, ImageFont

os.makedirs("tmp/img", exist_ok=True)

items = {
 "hero_panamera": ("u", "photo-1503376780353-7e6692767b70"),
 "hero_gtr": ("u", "photo-1568605117036-5fe5e7bab0b7"),
 "hero_road1": ("u", "photo-1493238792000-8113da705763"),
 "hero_road2": ("u", "photo-1533106418989-88406c7cc8ca"),
 "hero_audi": ("u", "photo-1603584173870-7f23fdae1b7a"),
 "hero_bmw": ("u", "photo-1553440569-bcc63803a83d"),
 "cat_sedan": ("u", "photo-1603584173870-7f23fdae1b7a"),
 "cat_suv": ("u", "photo-1519641471654-76ce0107ad1b"),
 "cat_hatch": ("u", "photo-1592198084033-aade902d1aae"),
 "about_garage1": ("u", "photo-1487754180451-c456f719a1fc"),
 "about_garage2": ("u", "photo-1530046339160-ce3e530c7d2f"),
 "about_garage3": ("u", "photo-1625047509168-a7026f36de04"),
 "about_garage4": ("u", "photo-1613214150384-4f7a2b2f0e4b"),
 "about_garage5": ("u", "photo-1599256872237-5dcc0fbe9668"),
 "about_garage6": ("u", "photo-1504222490345-c075b6008014"),
 "about_garage7": ("u", "photo-1520340356584-f9917d1eea6f"),
 "about_garage8": ("u", "photo-1558618666-fcd25c85cd64"),
 "cat_suv2": ("u", "photo-1533473359331-0135ef1b58bf"),
 "cat_hatch2": ("u", "photo-1541899481282-d53bffe3c35d"),
}

def fetch(name, kind, pid):
    path = f"tmp/img/{name}.jpg"
    if os.path.exists(path) and os.path.getsize(path) > 5000:
        return path
    url = f"https://images.unsplash.com/{pid}?w=1600&q=70"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        data = urllib.request.urlopen(req, timeout=60).read()
        open(path, "wb").write(data)
        return path
    except Exception as e:
        print("FAIL", name, e)
        return None

paths=[]
for name,(kind,pid) in items.items():
    p=fetch(name,kind,pid)
    if p: paths.append((name,p))

tw,th,lh=400,250,24
cols=4
rows=(len(paths)+cols-1)//cols
sheet=Image.new("RGB",(cols*tw,rows*(th+lh)),"#111")
font=ImageFont.truetype("C:/Windows/Fonts/arial.ttf",16)
for i,(n,p) in enumerate(paths):
    img=Image.open(p).convert("RGB")
    ratio=max(tw/img.width,th/img.height)
    img=img.resize((int(img.width*ratio),int(img.height*ratio)))
    l=(img.width-tw)//2; t=(img.height-th)//2
    img=img.crop((l,t,l+tw,t+th))
    x=(i%cols)*tw; y=(i//cols)*(th+lh)
    sheet.paste(img,(x,y))
    ImageDraw.Draw(sheet).text((x+6,y+th+3),n,fill="white",font=font)
sheet.save("tmp/hero-sheet.jpg",quality=86)
print("saved",len(paths))
