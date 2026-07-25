#!/usr/bin/env python3
"""Build data/shop-effect-details-slim.json from data/shop-effect-details.json.

The full AI review catalog duplicates every entry twice (once under the item
id, once under `name:<lowercase name>`) and is pretty-printed, landing at
~9.9 MB. The storefront (warizon-shop.js) only needs id-keyed rules, so this
strips the duplicate keys, drops review timestamps, omits empty fields, and
writes compact JSON — roughly 60% smaller, one fetch, browser-cacheable.

Usage:
    python3 tools/build_shop_effects_slim.py
"""

import json
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(BASE, 'data', 'shop-effect-details.json')
DST = os.path.join(BASE, 'data', 'shop-effect-details-slim.json')

KEEP_USAGE = ('activation', 'duration', 'endsWhen', 'charges')


def slim(item: dict) -> dict:
    out = {
        'name': item.get('name', ''),
        'effects': item.get('effects') or [],
        'effectDetails': [
            {'title': d.get('title', ''), 'rules': d.get('rules', '')}
            for d in (item.get('effectDetails') or [])
            if d.get('title') or d.get('rules')
        ],
    }
    usage = item.get('usage') or {}
    usage = {k: v for k, v in usage.items() if k in KEEP_USAGE and v}
    if usage:
        out['usage'] = usage
    if item.get('warning'):
        out['warning'] = item['warning']
    return out


def main() -> None:
    with open(SRC, encoding='utf-8') as fh:
        catalog = json.load(fh)

    slim_catalog = {}
    for key, item in catalog.items():
        # skip the `name:` duplicate keys; keep canonical id-keyed rows only
        if key.startswith('name:') or not isinstance(item, dict):
            continue
        row = slim(item)
        if row['effectDetails'] or row['effects']:
            slim_catalog[key] = row

    with open(DST, 'w', encoding='utf-8') as fh:
        json.dump(slim_catalog, fh, ensure_ascii=False, separators=(',', ':'))

    src_mb = os.path.getsize(SRC) / 1e6
    dst_mb = os.path.getsize(DST) / 1e6
    print(f'{SRC}  ({src_mb:.2f} MB)')
    print(f'{DST}  ({dst_mb:.2f} MB, {len(slim_catalog)} items, '
          f'{100 * (1 - dst_mb / src_mb):.0f}% smaller)')


if __name__ == '__main__':
    main()
