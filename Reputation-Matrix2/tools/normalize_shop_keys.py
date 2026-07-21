#!/usr/bin/env python3
"""Remove accidental leading/trailing spaces from split shop object keys."""
from __future__ import annotations
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from enrich_shop_items import ITEMS_DIR, run_node_export, write_chunk

changed = 0
for source in sorted(ITEMS_DIR.glob('items_[0-9][0-9][0-9].js')):
    items = run_node_export(source)
    if any(item['_sourceKey'] != item['_sourceKey'].strip() for item in items):
        # write_chunk uses source keys. Give it clean, collision-safe keys.
        seen: set[str] = set()
        for item in items:
            key = item['_sourceKey'].strip() or item['id'].strip()
            base, suffix = key, 2
            while key in seen:
                key = f'{base}__duplicate_{suffix}'; suffix += 1
            item['_sourceKey'] = key; seen.add(key)
        write_chunk(source, items); changed += 1
print(f'Normalized object keys in {changed} shop chunks.')
