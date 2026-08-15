#!/usr/bin/env python3
"""Build data/shop-departments.json — the JSON that backs the Warizon
sidebar "Department" facet, the search scope dropdown, and the icon row.

Source: Reputation-Matrix2/shop-data.js (SHOP_ITEMS) — the same data the
storefront renders, so counts in the sidebar can never disagree with the
catalog. Run this after item files change:

    python3 tools/build_shop_departments.py

The storefront (warizon-shop.js) fetches this file lazily and falls back to
built-in metadata if the fetch fails, so the shop keeps working without it.
"""
import json
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'data' / 'shop-departments.json'

# Display metadata per category id (shop-items/categories.js SHOP_CATEGORIES).
# Warizon uses Amazon-style department names; `label` is what shoppers see.
DEPARTMENTS = {
    'consumables': {
        'label': 'Garlic & Groceries',
        'icon': '🧄',
        'tagline': 'Potions, snacks, and things Wario definitely did not lick.',
    },
    'equipment': {
        'label': 'Weapons & Equipment',
        'icon': '⚔️',
        'tagline': 'Arm yourself. Wario insures nothing.',
    },
    'curiosities': {
        'label': 'Curiosities & Oddities',
        'icon': '🔮',
        'tagline': 'Strange relics of questionable origin. No refunds.',
    },
    'services': {
        'label': 'Services & Favors',
        'icon': '🤝',
        'tagline': 'Hire a professional. Or Wario, who is nearby and cheap.',
    },
    'faction': {
        'label': 'Faction Supply Depot',
        'icon': '🚩',
        'tagline': 'Quartermaster-grade gear for banner-carriers.',
    },
    'forbidden': {
        'label': 'The Forbidden Aisle',
        'icon': '☠️',
        'tagline': 'You did not see this aisle. This aisle does not exist.',
    },
    'premium': {
        'label': 'WahPrime Exclusives',
        'icon': '👑',
        'tagline': 'For customers whose pockets jingle loud enough.',
    },
    'badges': {
        'label': 'Badges & Commendations',
        'icon': '🎖️',
        'tagline': 'Earned, awarded, or quietly acquired. Wario asks no questions.',
    },
}


def load_item_categories() -> Counter:
    """Count items per category by scanning the generated item files."""
    counts: Counter = Counter()
    items_dir = ROOT / 'data' / 'shop-items'
    for path in sorted(items_dir.glob('items_*.js')):
        text = path.read_text(encoding='utf-8')
        counts.update(re.findall(r'"category":\s*"([^"]+)"', text))
    return counts


def main() -> int:
    counts = load_item_categories()
    total = sum(counts.values())
    departments = []
    for key, meta in DEPARTMENTS.items():
        departments.append({
            'id': key,
            'label': meta['label'],
            'icon': meta['icon'],
            'tagline': meta['tagline'],
            'count': counts.get(key, 0),
        })
    unknown = sorted(k for k in counts if k not in DEPARTMENTS)
    payload = {
        '_README': 'Sidebar Department data for warizon-shop.js. Regenerate with tools/build_shop_departments.py after item files change.',
        'totalItems': total,
        'departments': departments,
        'unmappedCategories': unknown,
    }
    OUT.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
    print(f'wrote {OUT} ({total} items across {len(departments)} departments)')
    if unknown:
        print('WARNING unmapped categories:', unknown, file=sys.stderr)
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
