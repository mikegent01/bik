#!/usr/bin/env python3
"""Find asset paths in sub-page JS/HTML that resolve to nothing on disk.

Written after a console full of 404s that nothing in the test suite could
see: the newspaper page asked for six images under an `assets/` tree that
does not exist at that depth (the files were real, three directories up),
and index.html imported `map-data.js` from the Reputation-Matrix2 root when
it lives in `data/maps/`. Both failed silently -- a missing <img> is a blank
space and a failed dynamic import was swallowed by a catch that fell back to
an empty object.

Relative paths only. Absolute URLs, data: URIs and template-interpolated
paths (anything containing ${) are skipped, because they cannot be resolved
statically.
"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCAN_DIRS = ['Reputation-Matrix2/app/pages']
EXT = ('.js', '.html')
PATTERNS = [
    re.compile(r'''image:\s*["']([^"'${}]+)["']'''),
    re.compile(r'''<img[^>]+src=["']([^"'${}]+)["']'''),
    re.compile(r'''icon:\s*["']([^"'${}]+\.(?:png|jpg|jpeg|webp|svg))["']'''),
]
SKIP = ('http://', 'https://', 'data:', '//', '#')

def main():
    strict = '--strict' in sys.argv
    bad, checked = [], 0
    for d in SCAN_DIRS:
        base = os.path.join(ROOT, d)
        for dirpath, _, files in os.walk(base):
            for fn in files:
                if not fn.endswith(EXT):
                    continue
                path = os.path.join(dirpath, fn)
                try:
                    text = open(path, encoding='utf-8', errors='ignore').read()
                except OSError:
                    continue
                for pat in PATTERNS:
                    for m in pat.finditer(text):
                        ref = m.group(1).strip()
                        if not ref or ref.startswith(SKIP):
                            continue
                        checked += 1
                        target = os.path.normpath(os.path.join(dirpath, ref))
                        if not os.path.exists(target):
                            line = text[:m.start()].count('\n') + 1
                            bad.append((os.path.relpath(path, ROOT), line, ref))

    for f, line, ref in bad:
        print(f"  {'FAIL' if strict else '·  (advisory)'} {f}:{line} -> {ref} does not exist")
    print(f"  result           : {'FAIL' if (bad and strict) else 'PASS'} "
          f"{checked} asset refs checked, {len(bad)} broken")
    return 1 if (bad and strict) else 0

if __name__ == '__main__':
    sys.exit(main())
