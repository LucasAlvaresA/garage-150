from PIL import Image
from studio_util import make_studio

cut = Image.open("tmp/cut/cruze_23_rebuild.png").convert("RGBA")
make_studio(cut, "tmp/test/cruze23_studio.jpg", scale=0.88)
