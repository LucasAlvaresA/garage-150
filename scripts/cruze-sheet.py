import urllib.request, os
from PIL import Image, ImageDraw, ImageFont
os.makedirs("tmp/img", exist_ok=True)
items = {
 "cruze_4": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Chevrolet_Cruze_Turbo_LTZ_D2LC_Modern_Black_%284%29.jpg/1920px-Chevrolet_Cruze_Turbo_LTZ_D2LC_Modern_Black_%284%29.jpg",
 "cruze_8": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Chevrolet_Cruze_Turbo_LTZ_D2LC_Modern_Black_%288%29.jpg/1920px-Chevrolet_Cruze_Turbo_LTZ_D2LC_Modern_Black_%288%29.jpg",
 "cruze_24": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Chevrolet_Cruze_Turbo_LTZ_D2LC_Modern_Black_%2824%29.jpg/1920px-Chevrolet_Cruze_Turbo_LTZ_D2LC_Modern_Black_%2824%29.jpg",
}
for n,u in items.items():
    p=f"tmp/img/{n}.jpg"
    if not os.path.exists(p):
        req=urllib.request.Request(u, headers={"User-Agent":"Mozilla/5.0"})
        open(p,"wb").write(urllib.request.urlopen(req, timeout=60).read())
tw,th=520,340
sheet=Image.new("RGB",(tw*3,th+30),"#111")
font=ImageFont.truetype("C:/Windows/Fonts/arial.ttf",18)
for i,(n,p) in enumerate([(n,f"tmp/img/{n}.jpg") for n in items]):
    img=Image.open(p).convert("RGB"); img.thumbnail((tw,th))
    sheet.paste(img,(i*tw,0)); ImageDraw.Draw(sheet).text((i*tw+8,th+4),n,fill="white",font=font)
sheet.save("tmp/cruze-sheet.jpg",quality=88)
print("ok")
