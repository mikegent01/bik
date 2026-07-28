#!/usr/bin/env python3
"""Reconcile abilityShop.json's `types` registry with the types actually in use.

Found while building generate_abilities.py: the registry lists arcane/martial/passive,
but the 84 live abilities use combat/leadership/magic/support — four type ids that have
no icon, label, or accent entry. Every one of those 50 abilities silently falls back to
the same grey (#7a8a99), so half the catalog renders colourless and the type filter has
nothing to key on.

This registers the missing types (keeping the colours already implied by the catalog's
own palette), backfills each ability's `accent`/`typeLabel` from the registry, and leaves
the unused legacy ids in place so nothing that references them breaks.

  python tools/fix_ability_types.py --dry-run
  python tools/fix_ability_types.py
"""
from __future__ import annotations

import argparse
import json
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SHOP_PATH = ROOT / "data" / "abilityShop.json"

# Colours chosen to match the existing registry's palette and to stay distinct from
# each other under both site themes.
MISSING_TYPES = {
    "combat":     {"icon": "⚔️", "label": "Combat",     "accent": "#c94a4a"},
    "magic":      {"icon": "🔮", "label": "Magic",      "accent": "#8a4bff"},
    "leadership": {"icon": "🎖️", "label": "Leadership", "accent": "#e0b400"},
    "support":    {"icon": "🩹", "label": "Support",    "accent": "#4a9c6d"},
}


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dry-run", action="store_true", help="report without writing")
    args = parser.parse_args()

    shop = json.loads(SHOP_PATH.read_text(encoding="utf-8"))
    types = shop.setdefault("types", {})
    abilities = shop.get("abilities", [])

    used = Counter(a.get("type") for a in abilities)
    added = [t for t in MISSING_TYPES if t not in types]
    for type_id in added:
        types[type_id] = dict(MISSING_TYPES[type_id])

    retinted = 0
    relabelled = 0
    for ability in abilities:
        meta = types.get(ability.get("type"))
        if not meta:
            continue
        if ability.get("accent") != meta["accent"]:
            ability["accent"] = meta["accent"]
            retinted += 1
        if ability.get("typeLabel") != meta["label"]:
            ability["typeLabel"] = meta["label"]
            relabelled += 1

    print(f"types in use      : {dict(sorted(used.items()))}")
    print(f"registered types  : {sorted(types)}")
    print(f"newly registered  : {added or 'none'}")
    print(f"accents corrected : {retinted}")
    print(f"labels corrected  : {relabelled}")

    unresolved = sorted({a.get("type") for a in abilities if a.get("type") not in types})
    if unresolved:
        print(f"WARNING: still unregistered: {unresolved}")

    if args.dry_run:
        print("\n--dry-run: nothing written.")
        return 0

    temporary = SHOP_PATH.with_suffix(".tmp")
    temporary.write_text(json.dumps(shop, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temporary.replace(SHOP_PATH)
    print(f"\nWrote {SHOP_PATH.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
