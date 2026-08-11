#!/usr/bin/env python3
"""
Fixes all Foundry VTT character JSON files in Reputation-Matrix2/tools/item sheet examples/.
Fixes:
  1. system.details.race ID references -> points to the actual race/species item _id in the items list.
  2. system.details.background ID references -> points to the actual background item _id in the items list.
  3. "attunement": "NaN" string values -> converts to "".
  4. Stale flags (enhancedcombathud, bg3-inspired-hotbar, fvtt-paper-doll-ui) with old actor UUIDs -> cleared.
"""

import json
import glob
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SHEETS_DIR = os.path.join(ROOT, 'Reputation-Matrix2', 'tools', 'item sheet examples')

def fix_character_json(fpath):
    with open(fpath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    modified = False
    details = data.get('system', {}).get('details', {})
    items = data.get('items', [])
    flags = data.get('flags', {})

    # 1. Find actual race/species item _id
    actual_race = next((it for it in items if it.get('type') in ['race', 'species']), None)
    if actual_race and actual_race.get('_id'):
        race_id = actual_race['_id']
        if details.get('race') != race_id:
            print(f"  [{os.path.basename(fpath)}] Fixed race ID: {details.get('race')} -> {race_id} ({actual_race.get('name')})")
            details['race'] = race_id
            modified = True

    # 2. Find actual background item _id
    actual_bg = next((it for it in items if it.get('type') == 'background'), None)
    if actual_bg and actual_bg.get('_id'):
        bg_id = actual_bg['_id']
        if details.get('background') != bg_id:
            print(f"  [{os.path.basename(fpath)}] Fixed background ID: {details.get('background')} -> {bg_id} ({actual_bg.get('name')})")
            details['background'] = bg_id
            modified = True

    # 3. Fix "attunement": "NaN"
    nan_count = 0
    for it in items:
        if it.get('system', {}).get('attunement') == 'NaN':
            it['system']['attunement'] = ""
            nan_count += 1
            modified = True
    if nan_count:
        print(f"  [{os.path.basename(fpath)}] Fixed {nan_count} items with attunement='NaN' -> ''")

    # 4. Clear stale flags
    for k in ['enhancedcombathud', 'bg3-inspired-hotbar', 'fvtt-paper-doll-ui']:
        if k in flags and flags[k]:
            flags[k] = {}
            modified = True
            print(f"  [{os.path.basename(fpath)}] Cleared stale flag: {k}")

    if modified:
        with open(fpath, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"  [{os.path.basename(fpath)}] Saved changes.")
    else:
        print(f"  [{os.path.basename(fpath)}] No changes needed.")

def main():
    files = glob.glob(os.path.join(SHEETS_DIR, '*.json'))
    print(f"Found {len(files)} character JSON files to process:")
    for fpath in sorted(files):
        fix_character_json(fpath)

if __name__ == '__main__':
    main()
