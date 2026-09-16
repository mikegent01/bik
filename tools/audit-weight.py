#!/usr/bin/env python3
"""Report what is actually taking up space, and what can be recovered.

Written after the repo hit ~1 GB. The question was whether combining images
into 3x3 sheets would shrink things (it does not -- see the note below), so
this measures where the weight really is instead of guessing.

JPEG compresses each 8x8 block independently. Stitching nine images into one
sheet and slicing them in the browser produces a file the same size as the
nine separate files, to within a rounding error -- there is no cross-image
redundancy for the encoder to exploit. Sheets cost you HTTP requests saved,
nothing more, and they lose lazy-loading and per-image caching. The levers
that actually work are pixel dimensions and quality.

Usage:
  python3 tools/audit-weight.py            # summary
  python3 tools/audit-weight.py --top 40   # biggest files
  python3 tools/audit-weight.py --dupes    # byte-identical duplicates
"""
import hashlib, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKIP_DIRS = {'.git', 'node_modules', '__pycache__', '.venv'}
IMG_EXT = ('.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp')


def walk():
    for dirpath, dirnames, files in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for fn in files:
            p = os.path.join(dirpath, fn)
            try:
                yield p, os.path.getsize(p)
            except OSError:
                pass


def human(n):
    return f"{n/1048576:.1f} MB" if n >= 1048576 else f"{n/1024:.0f} KB"


def main():
    args = sys.argv[1:]
    files = list(walk())
    total = sum(s for _, s in files)

    if '--dupes' in args:
        by_size = {}
        for p, s in files:
            if s > 65536:
                by_size.setdefault(s, []).append(p)
        groups, waste = 0, 0
        for s, ps in sorted(by_size.items(), reverse=True):
            if len(ps) < 2:
                continue
            seen = {}
            for p in ps:
                h = hashlib.md5(open(p, 'rb').read()).hexdigest()
                seen.setdefault(h, []).append(p)
            for h, dup in seen.items():
                if len(dup) > 1:
                    groups += 1
                    waste += s * (len(dup) - 1)
                    if groups <= 25:
                        print(f"  {human(s)} x{len(dup)}")
                        for d in dup:
                            print(f"      {os.path.relpath(d, ROOT)}")
        print(f"\n  {groups} duplicate groups, {human(waste)} recoverable")
        return 0

    if '--top' in args:
        n = int(args[args.index('--top') + 1]) if len(args) > args.index('--top') + 1 else 25
        for p, s in sorted(files, key=lambda x: -x[1])[:n]:
            print(f"  {human(s):>10}  {os.path.relpath(p, ROOT)}")
        return 0

    by_dir, by_ext = {}, {}
    oversized = []
    for p, s in files:
        top = os.path.relpath(p, ROOT).split(os.sep)[0]
        by_dir[top] = by_dir.get(top, 0) + s
        ext = os.path.splitext(p)[1].lower()
        by_ext[ext] = by_ext.get(ext, 0) + s
        if ext in IMG_EXT and s > 1_000_000:
            oversized.append((p, s))

    print(f"\n  working tree: {human(total)} in {len(files)} files\n")
    print("  by top-level directory:")
    for d, s in sorted(by_dir.items(), key=lambda x: -x[1])[:10]:
        print(f"    {human(s):>10}  {d}")
    print("\n  by extension:")
    for e, s in sorted(by_ext.items(), key=lambda x: -x[1])[:8]:
        print(f"    {human(s):>10}  {e or '(none)'}")
    img_total = sum(s for _, s in oversized)
    print(f"\n  images over 1 MB: {len(oversized)} files, {human(img_total)}")
    print("  (resize/re-encode these; sheets do NOT help -- see module docstring)")
    return 0


if __name__ == '__main__':
    sys.exit(main())
