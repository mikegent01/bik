#!/usr/bin/env python3
"""
Fixes duplicate races, duplicate backgrounds, and orphaned features in character JSONs.
Specifically fixes dan.json / fvtt-Actor-feyward-dan-level-3-player.json by removing
the extra 'Grung' race item and its 4 features.
"""

import json
import glob
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SHEETS_DIR = os.path.join(ROOT, 'Reputation-Matrix2', 'tools', 'item sheet examples')

def clean_character_file(fpath):
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    modified = False
    items = data.get('items', [])
    details = data.get('system', {}).get('details', {})

    # 1. Handle Dan: remove Grung race and Grung features
    if 'dan' in fname.lower():
        before_count = len(items)
        items = [
            it for it in items
            if not (it.get('name') == 'Grung' and it.get('type') in ['race', 'species'])
            and not (it.get('system', {}).get('requirements') == 'Grung')
        ]
        if len(items) != before_count:
            print(f"  [{fname}] Removed Grung race and 4 Grung features ({before_count - len(items)} items removed)")
            modified = True

    # 2. Handle Bones: remove duplicate 'Infiltrator Background' if 'Liberated Toads Field Infiltrator' exists
    if 'bones' in fname.lower():
        bgs = [it for it in items if it.get('type') == 'background']
        if len(bgs) > 1:
            items = [
                it for it in items
                if not (it.get('name') == 'Infiltrator Background' and it.get('_id') == '0f946c82723c46d9')
            ]
            print(f"  [{fname}] Removed duplicate 'Infiltrator Background'")
            modified = True

    # 3. Ensure details.race and details.background match remaining single items
    actual_races = [it for it in items if it.get('type') in ['race', 'species']]
    actual_bgs = [it for it in items if it.get('type') == 'background']

    if len(actual_races) == 1 and actual_races[0].get('_id'):
        target_race_id = actual_races[0]['_id']
        if details.get('race') != target_race_id:
            details['race'] = target_race_id
            print(f"  [{fname}] Fixed details.race -> {target_race_id} ({actual_races[0].get('name')})")
            modified = True

    if len(actual_bgs) == 1 and actual_bgs[0].get('_id'):
        target_bg_id = actual_bgs[0]['_id']
        if details.get('background') != target_bg_id:
            details['background'] = target_bg_id
            print(f"  [{fname}] Fixed details.background -> {target_bg_id} ({actual_bgs[0].get('name')})")
            modified = True

    data['items'] = items

    if modified:
        with open(fpath, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"  [{fname}] Saved cleaned file.")
    else:
        print(f"  [{fname}] No duplicate race/bg changes needed.")

def main():
    files = sorted(glob.glob(os.path.join(SHEETS_DIR, '*.json')))
    print(f"Cleaning duplicate races/bgs in {len(files)} JSON files:")
    for fpath in files:
        clean_character_file(fpath)

if __name__ == '__main__':
    main()
