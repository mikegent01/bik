#!/usr/bin/env python3
"""Cut a magenta-backed 4x4 sprite sheet into normalized 256px pose frames."""
import sys, os
from PIL import Image

def is_key(px, tol=90):
    r, g, b = px[0], px[1], px[2]
    # magenta: high R, low G, high B
    return r > 140 and g < 100 and b > 140 and (r - g) > tol and (b - g) > tol

def chroma(img):
    img = img.convert('RGBA')
    px = img.load()
    w, h = img.size
    keyed = 0
    for y in range(h):
        for x in range(w):
            p = px[x, y]
            if is_key(p):
                px[x, y] = (0, 0, 0, 0)
                keyed += 1
    return img, keyed / (w * h)

def content_bbox(img, thresh=16):
    bbox = img.getbbox()  # non-zero (incl. alpha)
    if not bbox:
        return None
    # use alpha channel specifically
    alpha = img.split()[3]
    bbox = alpha.getbbox()
    return bbox

def normalize_frame(cell, size=256, max_h=232, max_w=214, bottom_pad=6):
    """Trim to content, scale to consistent size, bottom-center on canvas."""
    bbox = content_bbox(cell)
    if not bbox or (bbox[2]-bbox[0]) < 8 or (bbox[3]-bbox[1]) < 8:
        return None
    crop = cell.crop(bbox)
    w, h = crop.size
    scale = min(max_w / w, max_h / h)
    nw, nh = max(1, int(w * scale)), max(1, int(h * scale))
    crop = crop.resize((nw, nh), Image.NEAREST)
    canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    x = (size - nw) // 2
    y = size - nh - bottom_pad
    canvas.paste(crop, (x, y), crop)
    return canvas

def detect_grid(img, cols=4, rows=4):
    """Find gutters: rows/cols where nearly all pixels are transparent after keying."""
    alpha = img.split()[3]
    w, h = img.size
    px = alpha.load()
    col_empty = []
    for x in range(w):
        n = sum(1 for y in range(0, h, 4) if px[x, y] < 20)
        col_empty.append(n > (h // 4) * 0.97)
    row_empty = []
    for y in range(h):
        n = sum(1 for x in range(0, w, 4) if px[x, y] < 20)
        row_empty.append(n > (w // 4) * 0.97)
    def boundaries(flags, n, want):
        # find contiguous empty runs, pick their centers as boundaries
        bounds, run = [], None
        for i, f in enumerate(flags):
            if f and run is None:
                run = i
            elif not f and run is not None:
                bounds.append((run + i - 1) // 2)
                run = None
        if run is not None:
            bounds.append((run + len(flags) - 1) // 2)
        return bounds
    cb = boundaries(col_empty, w, cols)
    rb = boundaries(row_empty, h, rows)
    ok = len(cb) >= cols - 1 and len(rb) >= rows - 1
    return ok, cb, rb

def cut_cells(img, cb, rb, cols=4, rows=4):
    w, h = img.size
    # build cut lines: 0..w split by boundaries; fall back to even quarters
    def lines(bounds, total, n):
        cuts = [0] + sorted(bounds[:n-1]) + [total]
        # ensure sane spacing
        out = [0]
        for b in sorted(bounds):
            if b - out[-1] > total // (n * 2) and total - b > total // (n * 4):
                out.append(b)
        while len(out) < n:
            out.append(total)
        return out[:n] + [total]
    cl = lines(cb, w, cols)
    rl = lines(rb, h, rows)
    cells = []
    for r in range(rows):
        for c in range(cols):
            cells.append(img.crop((cl[c], rl[r], cl[c+1], rl[r+1])))
    return cells

def main():
    src, outdir, name, poses = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4].split(',')
    raw = Image.open(src)
    print('%s raw size: %s mode %s' % (name, raw.size, raw.mode))
    img, keyfrac = chroma(raw)
    print('  keyed fraction: %.2f' % keyfrac)
    if keyfrac < 0.25:
        print('  WARNING: little magenta found; sheet may have a different bg')
    ok, cb, rb = detect_grid(img)
    print('  grid detect: %s cols-bounds=%s rows-bounds=%s' % (ok, cb, rb))
    if ok:
        cells = cut_cells(img, cb, rb)
    else:
        w, h = img.size
        cells = [img.crop(((c*w)//4, (r*h)//4, ((c+1)*w)//4, ((r+1)*h)//4)) for r in range(4) for c in range(4)]
    os.makedirs(os.path.join(outdir, name), exist_ok=True)
    good = 0
    final_cells = []
    for i, cell in enumerate(cells):
        norm = normalize_frame(cell)
        if norm is None:
            print('  CELL %02d EMPTY/BAD -> will need fallback' % (i + 1))
            final_cells.append(None)
        else:
            final_cells.append(norm)
            good += 1
    # fallback: reuse first good cell (idle-front) for bad cells
    fb = next((c for c in final_cells if c), None)
    for i, c in enumerate(final_cells):
        if c is None:
            final_cells[i] = fb.copy() if fb else Image.new('RGBA', (256, 256), (0, 0, 0, 0))
    # save poses
    for i, pose in enumerate(poses):
        p = '%02d-%s.png' % (i + 1, pose)
        final_cells[i].save(os.path.join(outdir, name, p))
    # reassemble clean sheet (guarantees canonical 1024x1024 4x4)
    sheet = Image.new('RGBA', (1024, 1024), (0, 0, 0, 0))
    for i, c in enumerate(final_cells):
        r, col = divmod(i, 4)
        sheet.paste(c, (col * 256, r * 256))
    sheet.save(os.path.join(outdir, '%s-sprite-sheet.png' % name))
    print('  saved %d/16 good poses -> %s/ and sheet' % (good, name))

if __name__ == '__main__':
    main()
