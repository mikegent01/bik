#!/usr/bin/env python3
"""Verify faction banner wiring.

Three ways this can rot, all of which have happened:

1. A banner file is added to banners/ but never registered in
   FACTION_BANNERS, so nothing renders it. A file that exists and is never
   rendered is indistinguishable from a missing one.
2. An id is registered but the file is absent, so the page shows a broken
   image frame.
3. Code points at a banners/<name>.png that does not exist. profile-themes.js
   has referenced a pile of these for a long time; they are reported as a
   separate advisory rather than a failure, because fixing them means
   designing art, not editing a path.

Exit 1 on (1) or (2). (3) is advisory unless --strict.
"""
import os, re, sys, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BDIR = os.path.join(ROOT, 'Reputation-Matrix2', 'banners')
INDEX = os.path.join(ROOT, 'index.html')

def main():
    strict = '--strict' in sys.argv
    files = {f[:-4] for f in os.listdir(BDIR) if f.endswith('.png')}

    src = open(INDEX, encoding='utf-8').read()
    m = re.search(r'const FACTION_BANNERS=new Set\(\[(.*?)\]\);', src, re.S)
    if not m:
        print('FAIL  FACTION_BANNERS registry not found in index.html')
        return 1
    registered = set(re.findall(r"'([a-z0-9_]+)'", m.group(1)))

    fail = 0

    missing_file = sorted(registered - files)
    if missing_file:
        print(f'FAIL  {len(missing_file)} registered id(s) have no banner file:')
        for i in missing_file:
            print(f'        {i}.png')
        fail = 1

    unregistered = sorted(files - registered)
    if unregistered:
        print(f'FAIL  {len(unregistered)} banner file(s) exist but are not registered,')
        print('      so nothing will ever render them:')
        for i in unregistered:
            print(f'        {i}.png')
        fail = 1

    # Advisory: code paths pointing at banner files that do not exist.
    referenced = set()
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames
                       if d not in ('node_modules', '.git', '_sheets')]
        for fn in filenames:
            if not fn.endswith(('.js', '.html', '.json', '.css')):
                continue
            try:
                t = open(os.path.join(dirpath, fn), encoding='utf-8', errors='ignore').read()
            except OSError:
                continue
            referenced |= set(re.findall(r'banners/([a-z0-9_]+)\.png', t))

    dangling = sorted(referenced - files)
    if dangling:
        print(f'\nADVISORY  {len(dangling)} banner path(s) referenced in code with no file.')
        print('          Mostly legacy profile-theme names that never shipped art.')
        print('          Not a wiring bug — these need designs, not path edits.')
        for i in dangling:
            print(f'            banners/{i}.png')
        if strict:
            fail = 1

    if not fail:
        print(f'PASS  {len(registered)} banners registered, all present, none orphaned'
              + (f' ({len(dangling)} advisory)' if dangling else ''))
    return fail

if __name__ == '__main__':
    sys.exit(main())
