#!/usr/bin/env python3
"""crop-portrait.py — cut the square site portrait out of a wide scene plate.

Why this exists
---------------
A character needs two pictures and they are the same picture:

1. **The Foundry sheet** — full body, head to feet (or hooves), plain field,
   no scenery. Lives in `Reputation-Matrix2/portraits/player/fullbody/`.
2. **The site portrait** — the square that the article card and the sidebar
   show, *with* its background.

Generating those separately gets you two characters who look like cousins. So
the scene plate is generated once, and the square is **cropped out of it**.
Same brushwork, same light, same face, one generation.

What it does
------------
Crops a square from a wide plate around a focus point, then resizes. The focus
point is given in fractions of the image so it reads the same at any output
size: `--focus 0.62,0.40` means 62% across, 40% down. Default is dead centre.

    python3 tools/crop-portrait.py \
        --src  Reputation-Matrix2/assets/images/portraits-scene/remi-scene.png \
        --dest Reputation-Matrix2/portraits/remi_akamatsu_full_backstory.png \
        --focus 0.62,0.42 --zoom 1.0 --size 512

`--zoom` shrinks the crop box below the full image height (1.0 = the tallest
square that fits; 0.7 = tighter on the subject). The box is always clamped
inside the source, so a focus near an edge slides in rather than padding.

Verify by eye. This tool cannot tell you whether it cut the head off.
"""

import argparse
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:  # pragma: no cover
    sys.exit("Pillow is required:  pip install --break-system-packages pillow")

ROOT = Path(__file__).resolve().parent.parent


def parse_focus(text: str):
    try:
        x, y = (float(p) for p in text.split(","))
    except ValueError:
        raise argparse.ArgumentTypeError("--focus wants two numbers, e.g. 0.62,0.40")
    if not (0.0 <= x <= 1.0 and 0.0 <= y <= 1.0):
        raise argparse.ArgumentTypeError("--focus values are fractions between 0 and 1")
    return x, y


def crop_square(src: Path, dest: Path, focus, zoom: float, size: int) -> None:
    img = Image.open(src)
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGBA")
    w, h = img.size

    side = int(min(w, h) * max(0.05, min(zoom, 1.0)))
    fx, fy = focus
    left = int(w * fx - side / 2)
    top = int(h * fy - side / 2)

    # Slide the box back inside the frame rather than padding with dead space.
    left = max(0, min(left, w - side))
    top = max(0, min(top, h - side))

    out = img.crop((left, top, left + side, top + side))
    if size:
        out = out.resize((size, size), Image.LANCZOS)

    dest.parent.mkdir(parents=True, exist_ok=True)
    save_args = {"optimize": True}
    if dest.suffix.lower() in (".jpg", ".jpeg"):
        out = out.convert("RGB")
        save_args["quality"] = 92
    out.save(dest, **save_args)

    print(f"{src.relative_to(ROOT) if src.is_relative_to(ROOT) else src}"
          f"  {w}x{h}"
          f"  →  crop {side}x{side} at ({left},{top})"
          f"  →  {dest.relative_to(ROOT) if dest.is_relative_to(ROOT) else dest} {out.size[0]}x{out.size[1]}")


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--src", required=True, type=Path, help="wide scene plate to cut from")
    ap.add_argument("--dest", required=True, type=Path, help="square portrait to write")
    ap.add_argument("--focus", default="0.5,0.5", type=parse_focus,
                    help="subject position as fractions, e.g. 0.62,0.40 (default centre)")
    ap.add_argument("--zoom", default=1.0, type=float,
                    help="crop box as a fraction of the short edge; 1.0 = widest square (default)")
    ap.add_argument("--size", default=512, type=int, help="output edge in pixels (default 512)")
    args = ap.parse_args()

    src = args.src if args.src.is_absolute() else ROOT / args.src
    dest = args.dest if args.dest.is_absolute() else ROOT / args.dest
    if not src.exists():
        sys.exit(f"no such source plate: {src}")

    crop_square(src, dest, args.focus, args.zoom, args.size)
    return 0


if __name__ == "__main__":
    sys.exit(main())
