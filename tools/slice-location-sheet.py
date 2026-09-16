#!/usr/bin/env python3
"""Slice a 3x3 contact sheet of location plates into individual files.

Why 3x3 and not bigger
----------------------
The ask was 10x10. It does not work, and the arithmetic is the whole reason:
the generator returns a ~1254px canvas, so a 10x10 grid yields 125px cells.
Location plates render at 1200px wide in articleLead(), so a 125px cell would
be upscaled ~10x into a blurry smear. 3x3 on the same canvas gives 418px
cells, which downscale to a real 1200px-wide plate only after the model has
drawn them at usable size.

Coherence fails before resolution does, too: past attempts at dense grids had
neighbouring cells bleed motifs into each other.

What the grid DOES buy is the thing that matters -- nine locations for one
generation instead of nine, and they come back stylistically consistent
*because they were painted together*. Eight sheets covers the whole 64-record
backlog instead of eight turns of singles.

The model draws its own gutters and they drift a few pixels, so cells are cut
on even thirds and then inset to drop the gutter edge.

Usage
-----
  python3 tools/slice-location-sheet.py \
      --sheet Reputation-Matrix2/assets/images/locations/_sheets/raventree-cluster.png \
      --names shadow_estate overgrown_manor feyward_grove \
              deep_mirror mazebound_grove silent_grove \
              orange_deer_shrine tymnas_cottage_and_hedge_maze shadow_estate_gardens

Pass --skip <name> to drop a cell that came back unusable; the slot is still
consumed so the remaining names stay aligned to their cells.
"""
import argparse, os, sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow required: pip install pillow --break-system-packages --user")

OUT_DIR = 'Reputation-Matrix2/assets/images/locations'
INSET = 0.012      # trim 1.2% off each edge to drop the drawn gutter
WIDTH = 1200       # final plate width, matches articleLead()
QUALITY = 86


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--sheet', required=True)
    ap.add_argument('--names', nargs='+', required=True)
    ap.add_argument('--skip', nargs='*', default=[])
    ap.add_argument('--grid', type=int, default=3)
    args = ap.parse_args()

    g = args.grid
    if len(args.names) != g * g:
        sys.exit(f"expected {g*g} names for a {g}x{g} sheet, got {len(args.names)}")

    im = Image.open(args.sheet).convert('RGB')
    W, H = im.size
    cw, ch = W / g, H / g
    dx, dy = cw * INSET, ch * INSET
    os.makedirs(OUT_DIR, exist_ok=True)

    written = 0
    for idx, name in enumerate(args.names):
        if name in args.skip:
            print(f"  skipped {name}")
            continue
        r, c = divmod(idx, g)
        box = (int(c * cw + dx), int(r * ch + dy),
               int((c + 1) * cw - dx), int((r + 1) * ch - dy))
        cell = im.crop(box)
        h = int(cell.height * (WIDTH / cell.width))
        cell = cell.resize((WIDTH, h), Image.LANCZOS)
        out = os.path.join(OUT_DIR, f"{name}.jpg")
        cell.save(out, 'JPEG', quality=QUALITY, optimize=True, progressive=True)
        written += 1
        print(f"  {os.path.basename(out):42} {cell.size[0]}x{cell.size[1]}  "
              f"{os.path.getsize(out)//1024} KB")
    print(f"\n  {written} plates written to {OUT_DIR}")
    return 0


if __name__ == '__main__':
    sys.exit(main())
