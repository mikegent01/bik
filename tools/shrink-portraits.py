#!/usr/bin/env python3
"""Downscale and re-encode the portrait library in place.

Some portraits were 5632x3072 and 20 MB for records that display at a few
hundred pixels. This resizes to a sane maximum and re-encodes, keeping the
.png filename in every case because hundreds of data records and hardcoded
strings reference "portraits/<name>.png" -- renaming to .jpg would mean
rewriting all of them and would break any reference we failed to find.

Browsers dispatch on content sniffing, not extension, so a JPEG payload in a
.png file renders correctly everywhere. That is deliberate, and it is why the
saving is 90%+ rather than the ~50% an optimised PNG gives.

BUT: 169 of the portraits have real transparency, and JPEG has no alpha
channel. Those are detected and kept as optimised PNG -- flattening them onto
a background would put a white box behind every cut-out portrait on the site.

Usage:
  python3 tools/shrink-portraits.py --dry-run
  python3 tools/shrink-portraits.py --apply
"""
import io, os, sys, glob

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow required: pip install pillow --break-system-packages --user")

Image.MAX_IMAGE_PIXELS = None
MAX_EDGE = 1024
JPEG_Q = 85
TARGET = 'Reputation-Matrix2/portraits'


def has_alpha(im):
    if im.mode in ('RGBA', 'LA'):
        return im.convert('RGBA').getextrema()[3][0] < 255
    if im.mode == 'P' and 'transparency' in im.info:
        return im.convert('RGBA').getextrema()[3][0] < 255
    return False


def main():
    apply = '--apply' in sys.argv
    if not apply and '--dry-run' not in sys.argv:
        sys.exit(__doc__)

    files = sorted(glob.glob(os.path.join(TARGET, '*.png')) +
                   glob.glob(os.path.join(TARGET, '*.jpg')) +
                   glob.glob(os.path.join(TARGET, '*.webp')))
    before = after = 0
    changed = kept_png = skipped = 0

    for p in files:
        s = os.path.getsize(p)
        before += s
        try:
            im = Image.open(p)
            im.load()
        except Exception as e:
            after += s
            skipped += 1
            print(f"  skip (unreadable): {os.path.basename(p)} — {e}")
            continue

        w, h = im.size
        scale = min(1.0, MAX_EDGE / max(w, h))
        nw, nh = max(1, int(w * scale)), max(1, int(h * scale))
        alpha = has_alpha(im)

        buf = io.BytesIO()
        if alpha:
            im.convert('RGBA').resize((nw, nh), Image.LANCZOS).save(buf, 'PNG', optimize=True)
        else:
            im.convert('RGB').resize((nw, nh), Image.LANCZOS).save(
                buf, 'JPEG', quality=JPEG_Q, optimize=True, progressive=True)

        # Never make a file bigger than it already was.
        if buf.tell() >= s:
            after += s
            skipped += 1
            continue

        after += buf.tell()
        changed += 1
        if alpha:
            kept_png += 1
        if apply:
            with open(p, 'wb') as f:
                f.write(buf.getvalue())

    print(f"\n  {'APPLIED' if apply else 'DRY RUN'}")
    print(f"  files            : {len(files)}")
    print(f"  re-encoded       : {changed}  (transparent kept as PNG: {kept_png})")
    print(f"  left alone       : {skipped}")
    print(f"  before           : {before/1048576:.0f} MB")
    print(f"  after            : {after/1048576:.0f} MB")
    print(f"  saved            : {(before-after)/1048576:.0f} MB "
          f"({100*(before-after)/before:.0f}%)")
    return 0


if __name__ == '__main__':
    sys.exit(main())
