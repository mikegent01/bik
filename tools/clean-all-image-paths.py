#!/usr/bin/env python3
"""
Cleans and standardizes all image paths across all character JSON files in
Reputation-Matrix2/tools/item sheet examples/.

Replaces 404s, external URLs (d20.io, 5e.tools), broken local relative paths (npc/ai/...),
and missing module paths with standard Foundry VTT core icons (icons/...).
"""

import json
import glob
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SHEETS_DIR = os.path.join(ROOT, 'Reputation-Matrix2', 'tools', 'item sheet examples')

STANDARD_FALLBACK = "icons/sundries/documents/document-sealed-red.webp"

DEFAULT_ICON_MAP = {
    "weapon": "icons/weapons/swords/sword-gold-holy.webp",
    "equipment": "icons/equipment/chest/breastplate-layered-steel-pink.webp",
    "consumable": "icons/sundries/documents/document-sealed-red.webp",
    "loot": "icons/commodities/gems/pearl-purple-dark.webp",
    "tool": "icons/tools/crafting/pincers-steel.webp",
    "container": "icons/containers/bags/pouch-leather-tan.webp",
    "class": "icons/svg/book.svg",
    "subclass": "icons/svg/book.svg",
    "race": "icons/svg/mystery-man.svg",
    "species": "icons/svg/mystery-man.svg",
    "background": "icons/sundries/documents/document-bound-tan.webp",
    "feat": "icons/skills/social/intimidation-impersonate.webp",
    "spell": "icons/magic/light/beam-strike-yellow-blue.webp"
}

def is_valid_foundry_path(path):
    if not path or not isinstance(path, str):
        return False
    if path.startswith('icons/') or path.startswith('systems/') or path.startswith('assets/portraits/') or path.startswith('portraits/'):
        return True
    return False

def get_clean_icon(item):
    itype = item.get('type', '')
    iname = (item.get('name') or '').lower()

    if 'sword' in iname:
        return "icons/weapons/swords/sword-gold-holy.webp"
    if 'bow' in iname:
        return "icons/weapons/bows/shortbow-recurve.webp"
    if 'dagger' in iname or 'knife' in iname:
        return "icons/weapons/daggers/dagger-straight-blue.webp"
    if 'potion' in iname or 'wine' in iname or 'drink' in iname:
        return "icons/consumables/drinks/potion-bottle-corked-red.webp"
    if 'scroll' in iname or 'book' in iname or 'ledger' in iname or 'document' in iname or 'paper' in iname or 'card' in iname or 'coupon' in iname or 'recipe' in iname:
        return "icons/sundries/documents/document-bound-tan.webp"
    if 'ring' in iname or 'amulet' in iname or 'pendant' in iname or 'crystal' in iname or 'egg' in iname:
        return "icons/commodities/gems/pearl-purple-dark.webp"
    if 'shield' in iname:
        return "icons/equipment/shield/heater-steel-gold.webp"
    if 'armor' in iname or 'breastplate' in iname or 'coat' in iname or 'robe' in iname:
        return "icons/equipment/chest/breastplate-layered-steel-pink.webp"

    return DEFAULT_ICON_MAP.get(itype, STANDARD_FALLBACK)

def clean_file(fpath):
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    modified = False

    # Check actor img
    actor_img = data.get('img', '')
    if not is_valid_foundry_path(actor_img):
        clean_actor_img = "icons/svg/mystery-man.svg"
        data['img'] = clean_actor_img
        if 'prototypeToken' in data and 'texture' in data['prototypeToken']:
            data['prototypeToken']['texture']['src'] = clean_actor_img
        modified = True

    # Check prototype token img
    proto_img = data.get('prototypeToken', {}).get('texture', {}).get('src', '')
    if proto_img and not is_valid_foundry_path(proto_img):
        clean_token_img = data.get('img', 'icons/svg/mystery-man.svg')
        data['prototypeToken']['texture']['src'] = clean_token_img
        modified = True

    # Check items
    items = data.get('items', [])
    for it in items:
        img = it.get('img', '')
        if not is_valid_foundry_path(img):
            clean_img = get_clean_icon(it)
            it['img'] = clean_img
            modified = True

    if modified:
        with open(fpath, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)

def main():
    files = sorted(glob.glob(os.path.join(SHEETS_DIR, '*.json')))
    print(f"Auditing {len(files)} JSON files for image paths:")
    for fpath in files:
        clean_file(fpath)
    print("Clean complete.")

if __name__ == '__main__':
    main()
