"""Generate on-brand placeholder JPEGs for G.Jeddah website.

Run: python scripts/generate_placeholders.py
Overwrite any file with a real photo (same filename) to replace it.
"""

import math
import os

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "images")

INK = (20, 20, 20)
ACCENT = (168, 134, 43)
BG_TOP = (24, 24, 26)
BG_BOTTOM = (44, 44, 48)
MUTED = (170, 170, 175)

FONT_BOLD = r"C:\Windows\Fonts\arialbd.ttf"
FONT_REG = r"C:\Windows\Fonts\arial.ttf"


def font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except OSError:
        return ImageFont.load_default()


def gradient(w, h):
    img = Image.new("RGB", (w, h))
    px = img.load()
    for y in range(h):
        t = y / max(h - 1, 1)
        c = tuple(int(BG_TOP[i] + (BG_BOTTOM[i] - BG_TOP[i]) * t) for i in range(3))
        for x in range(w):
            px[x, y] = c
    return img


def material_pattern(draw, kind, w, h):
    if kind == "aluminium":
        step = w // 8
        for x in range(0, w, step):
            draw.line([(x, 0), (x, h)], fill=(60, 60, 66), width=3)
        for y in range(0, h, h // 5):
            draw.line([(0, y), (w, y)], fill=(60, 60, 66), width=3)
        for x in range(0, w, step):
            draw.line([(x + 3, 0), (x + 3, h)], fill=(100, 100, 108), width=1)
    elif kind == "glass":
        for i in range(-h, w, 90):
            draw.line([(i, h), (i + h, 0)], fill=(70, 85, 100), width=10)
        for i in range(-h, w, 90):
            draw.line([(i + 40, h), (i + 40 + h, 0)], fill=(95, 115, 135), width=3)
    elif kind == "wood":
        for y in range(0, h, 6):
            amp = 6 * math.sin(y / 40.0)
            pts = [(x, y + amp * math.sin(x / 70.0)) for x in range(0, w, 12)]
            if len(pts) > 1:
                draw.line(pts, fill=(78, 60, 40), width=2)
        for y in range(0, h, h // 4):
            draw.line([(0, y), (w, y)], fill=(50, 38, 26), width=4)
    elif kind == "steel":
        for y in range(h // 4, h, h // 4):
            draw.line([(0, y), (w, y)], fill=(90, 90, 95), width=8)
            draw.line([(0, y - 6), (w, y - 6)], fill=(130, 130, 136), width=2)
        for x in range(0, w, w // 6):
            draw.line([(x, 0), (x, h)], fill=(80, 80, 86), width=6)


def label(draw, w, h, title, subtitle):
    f_title = font(FONT_BOLD, max(28, w // 24))
    f_sub = font(FONT_REG, max(18, w // 44))
    tw = draw.textlength(title, font=f_title)
    box_w = min(tw + 80, w - 60)
    box_h = 110
    x0 = (w - box_w) / 2
    y0 = (h - box_h) / 2
    draw.rounded_rectangle([x0, y0, x0 + box_w, y0 + box_h], radius=8,
                           fill=(10, 10, 10, 0) if False else (12, 12, 12),
                           outline=ACCENT, width=2)
    draw.text((w / 2, y0 + 34), title, font=f_title, fill=(255, 255, 255), anchor="mt")
    draw.text((w / 2, y0 + 76), subtitle, font=f_sub, fill=ACCENT, anchor="mt")


def make(path, w, h, kind, title, subtitle="Photo placeholder — replace with real image"):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img = gradient(w, h).convert("RGBA")
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    material_pattern(d, kind, w, h)
    img = Image.alpha_composite(img, overlay)
    # dim pattern
    dim = Image.new("RGBA", (w, h), (18, 18, 20, 150))
    img = Image.alpha_composite(img, dim)
    d = ImageDraw.Draw(img)
    # gold frame
    d.rectangle([24, 24, w - 25, h - 25], outline=ACCENT, width=2)
    label(d, w, h, title, subtitle)
    img.convert("RGB").save(path, "JPEG", quality=86)
    print("wrote", path)


def main():
    make(os.path.join(ROOT, "hero-1.jpg"), 1920, 1080, "aluminium",
         "Aluminium Windows & Glass Facade", "Hero image — replace with real photo")
    make(os.path.join(ROOT, "hero-2.jpg"), 1920, 1080, "glass",
         "Glass Shopfront & Partitions", "Hero image — replace with real photo")
    make(os.path.join(ROOT, "about-workshop.jpg"), 1600, 1000, "wood",
         "Our Workshop", "About image — replace with real photo")
    make(os.path.join(ROOT, "service-aluminium.jpg"), 1200, 900, "aluminium",
         "Aluminium Windows & Doors")
    make(os.path.join(ROOT, "service-glass.jpg"), 1200, 900, "glass",
         "Glass Work")
    make(os.path.join(ROOT, "service-wood.jpg"), 1200, 900, "wood",
         "Wood Interior & Cabinets")
    make(os.path.join(ROOT, "service-steel.jpg"), 1200, 900, "steel",
         "Steel & Railings")
    for kind in ("aluminium", "glass", "wood", "steel"):
        for i in range(1, 4):
            make(os.path.join(ROOT, "gallery", f"{kind}-0{i}.jpg"), 1200, 900, kind,
                 f"{kind.title()} Project 0{i}")


if __name__ == "__main__":
    main()
