#!/usr/bin/env python3
"""Slice a 3x3 contact sheet of faction banners into individual square files.

Why this exists
---------------
Generating banners one at a time burns the per-turn image budget almost
immediately -- 22 factions is 22 generations. Asking the model for a 3x3
contact sheet gets nine emblems for one generation, and they come back
stylistically consistent with each other *because they were drawn together*,
which is worth more for a set of heraldry than any single image is.

The grid is not pixel-perfect: the model draws its own gutters and they drift
by a few pixels. So rather than trusting an even split, this finds the real
cell boundaries by looking for the dark gutter rows/columns, then trims each
cell inward to drop the residual gutter edge.

Bigger grids were tried and rejected. At a ~1024px canvas a 9x9 sheet gives
each banner 113px -- unusable -- and coherence collapses well before that;
emblems start bleeding motifs into their neighbours. 3x3 yields ~340px per
cell, which is a real asset.

Usage
-----
  python3 tools/slice-banner-sheet.py \
      --sheet Reputation-Matrix2/banners/_sheets/banner-sheet-a.png \
      --names iron_legion koopa_troop liberated_toads \
              mages_guild onyx_hand corvinarus_family \
              order_of_jack purple_legion wario_enterprise

Pass `--skip <name>` to drop a cell that came back unusable; the slot is still
consumed in reading order so the remaining names stay aligned.
"""
import argparse
import os
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow is required:  pip install --break-system-packages pillow")

READING_ORDER = "left to right, top row first"


def gutter_runs(darkness, threshold, min_run):
    """Return (start, end) spans where the sheet is dark enough to be a gutter."""
    runs, start = [], None
    for i, v in enumerate(darkness):
        if v <= threshold:
            if start is None:
                start = i
        else:
            if start is not None and i - start >= min_run:
                runs.append((start, i))
            start = None
    if start is not None and len(darkness) - start >= min_run:
        runs.append((start, len(darkness)))
    return runs


def find_cuts(img, axis, n):
    """Find n-1 interior cut positions along an axis, or fall back to even split."""
    w, h = img.size
    gray = img.convert("L")
    px = gray.load()
    length = w if axis == "x" else h
    other = h if axis == "x" else w

    # Mean brightness of each line perpendicular to the axis.
    means = []
    step = max(1, other // 160)  # sample, don't read every pixel
    for i in range(length):
        acc = cnt = 0
        for j in range(0, other, step):
            acc += px[i, j] if axis == "x" else px[j, i]
            cnt += 1
        means.append(acc / cnt)

    lo = min(means)
    threshold = lo + (sum(means) / len(means) - lo) * 0.22
    runs = gutter_runs(means, threshold, max(2, length // 200))

    # Drop runs touching the border -- those are the outer margin, not gutters.
    interior = [r for r in runs if r[0] > length * 0.04 and r[1] < length * 0.96]

    if len(interior) >= n - 1:
        # Keep the widest n-1 runs, then order them by position.
        interior.sort(key=lambda r: r[1] - r[0], reverse=True)
        interior = sorted(interior[: n - 1])
        return [((a + b) // 2) for a, b in interior], True

    return [round(length * k / n) for k in range(1, n)], False


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sheet", required=True)
    ap.add_argument("--names", nargs="+", required=True,
                    help=f"cell names in {READING_ORDER}")
    ap.add_argument("--skip", nargs="*", default=[],
                    help="names to slice but not write")
    ap.add_argument("--dest", default="Reputation-Matrix2/banners")
    ap.add_argument("--grid", type=int, default=3)
    ap.add_argument("--size", type=int, default=512, help="output edge in px")
    ap.add_argument("--inset", type=float, default=0.018,
                    help="fraction trimmed off each cell edge to drop the gutter")
    args = ap.parse_args()

    n = args.grid
    if len(args.names) != n * n:
        sys.exit(f"expected {n*n} names for a {n}x{n} grid, got {len(args.names)}")

    img = Image.open(args.sheet).convert("RGB")
    w, h = img.size
    xs, x_found = find_cuts(img, "x", n)
    ys, y_found = find_cuts(img, "y", n)
    print(f"{os.path.basename(args.sheet)}  {w}x{h}  "
          f"columns={'detected' if x_found else 'EVEN SPLIT'} "
          f"rows={'detected' if y_found else 'EVEN SPLIT'}")

    xb = [0] + xs + [w]
    yb = [0] + ys + [h]
    os.makedirs(args.dest, exist_ok=True)

    written = 0
    for r in range(n):
        for c in range(n):
            name = args.names[r * n + c]
            left, right = xb[c], xb[c + 1]
            top, bottom = yb[r], yb[r + 1]
            dx = int((right - left) * args.inset)
            dy = int((bottom - top) * args.inset)
            box = (left + dx, top + dy, right - dx, bottom - dy)

            if name in args.skip:
                print(f"  skip  {name}")
                continue

            cell = img.crop(box)
            # Square it off from the centre before resizing, so nothing squashes.
            cw, ch = cell.size
            edge = min(cw, ch)
            cell = cell.crop(((cw - edge) // 2, (ch - edge) // 2,
                              (cw - edge) // 2 + edge, (ch - edge) // 2 + edge))
            cell = cell.resize((args.size, args.size), Image.LANCZOS)
            out = os.path.join(args.dest, f"{name}.png")
            cell.save(out, "PNG", optimize=True)
            print(f"  wrote {out}  ({edge}px source)")
            written += 1

    print(f"{written} banner(s) written to {args.dest}")


if __name__ == "__main__":
    main()
