from PIL import Image, ImageDraw, ImageFont
import os
names = ["civic","jetta","corolla","cruze","compass","tcross","hrv","creta"]
tw, th, lh = 480, 300, 28
cols = 4
sheet = Image.new("RGB", (cols*tw, 2*(th+lh)), "#0b0b0d")
font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 18)
for i, n in enumerate(names):
    img = Image.open(f"tmp/cut/{n}_card.jpg").convert("RGB")
    img.thumbnail((tw, th))
    x = (i % cols)*tw
    y = (i // cols)*(th+lh)
    sheet.paste(img, (x, y))
    d = ImageDraw.Draw(sheet)
    d.text((x+8, y+th+4), n, fill="white", font=font)
sheet.save("tmp/vehicles-sheet.jpg", quality=88)
print("ok")
