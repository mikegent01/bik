#!/usr/bin/env python3
"""Command-line access to everything the hub GUI can do.

    python tools/hub/hub_cli.py list                      # every tool + function
    python tools/hub/hub_cli.py list --data               # data files instead
    python tools/hub/hub_cli.py piles --preview           # who bought what
    python tools/hub/hub_cli.py piles                     # write the item piles
    python tools/hub/hub_cli.py character --from tymnas --level 3
    python tools/hub/hub_cli.py character --from waluigi --model --save
    python tools/hub/hub_cli.py doctor                    # environment check
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from hubcore import creator, dataio, llm, paths, piles, registry  # noqa: E402


def cmd_list(args: argparse.Namespace) -> int:
    if args.data:
        for entry in registry.data_files():
            print(f"{entry['group']:>18} │ {entry['name']:<38} {entry['shape']}")
        return 0
    for entry in registry.scripts():
        print(f"\n\033[1m{entry['id']}\033[0m — {entry['summary']}")
        for flag in entry["flags"]:
            print(f"    {', '.join(flag['flags']):<24} {flag['help']}")
        if args.functions:
            for function in entry["functions"]:
                if function["isPublic"]:
                    print(f"      def {function['name']}({', '.join(function['args'])})")
    return 0


def cmd_piles(args: argparse.Namespace) -> int:
    players = args.player or None
    if args.preview:
        data = piles.preview(players=players, include_faction=not args.no_faction)
        print(json.dumps(data["stats"], indent=2))
        for player in data["players"]:
            print(f"\n{player['displayName']} ({player['playerKey']}) — "
                  f"{player['itemCount']} items, {player['totalGold']:,} gold")
            for item in player["items"]:
                flag = "  [rebuilt from receipt]" if item["missing"] else ""
                print(f"    {item['quantity']}x {item['name']}{flag}")
        return 0
    manifest = piles.build_all(players=players, include_faction=not args.no_faction)
    for pile in manifest["piles"]:
        print(f"{pile['displayName']:<24} {pile['items']:>3} items  →  {pile['relativeFile']}")
    print(f"\nManifest: {paths.relative(paths.PILES_DIR / 'manifest.json')}")
    return 0


def cmd_character(args: argparse.Namespace) -> int:
    result = creator.build_character(
        name=args.name,
        character_id=getattr(args, "from"),
        event_ids=args.event or [],
        faction_id=args.faction,
        class_name=args.class_name,
        race_name=args.race,
        level=args.level,
        gear_count=args.gear,
        include_gear=args.gear > 0,
        use_model=args.model,
    )
    report = result["report"]
    print(json.dumps(report, indent=2, ensure_ascii=False))
    if args.model and not report["modelUsed"]:
        print("\nLM Studio was unreachable; built-in flavor text was used instead.", file=sys.stderr)
    if args.save:
        print(f"\nSaved: {paths.relative(Path(creator.save_character(result)))}")
    return 0


def cmd_doctor(_: argparse.Namespace) -> int:
    print(f"repo root     : {paths.SITE_ROOT}")
    print(f"tools         : {paths.TOOLS_DIR}")
    print(f"output        : {paths.OUT_DIR}")
    print(f"python        : {sys.version.split()[0]}")

    try:
        catalog = dataio.export_shop_catalog()
        print(f"shop catalog  : {len(catalog['items'])} items, {len(catalog['vendors'])} vendors")
        for failure in catalog.get("failed", []):
            print(f"  ! {failure['file']}: {failure['error'][:100]}")
    except Exception as error:                                  # noqa: BLE001
        print(f"shop catalog  : FAILED — {error}")

    print(f"purchases     : {len(dataio.purchases())} receipts")
    print(f"characters    : {len(dataio.characters())}")
    print(f"events        : {len(dataio.events())}")
    status = llm.available()
    print(f"LM Studio     : {'online — ' + ', '.join(status['models'][:3]) if status['online'] else 'offline (optional)'}")

    resolved = piles.resolve_purchases()
    if resolved["stats"]["missingFromCatalog"]:
        print(f"\nNote: {resolved['stats']['missingFromCatalog']} receipt line(s) name items that are no "
              f"longer in the catalog. They are rebuilt from the receipt so nothing is lost.")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    subparsers = parser.add_subparsers(dest="command", required=True)

    listing = subparsers.add_parser("list", help="List tools, functions, or data files")
    listing.add_argument("--data", action="store_true", help="List data files instead of scripts")
    listing.add_argument("--functions", action="store_true", help="Include each script's functions")
    listing.set_defaults(func=cmd_list)

    pile = subparsers.add_parser("piles", help="Build Foundry item piles from shop purchases")
    pile.add_argument("--preview", action="store_true", help="Show what would be built, write nothing")
    pile.add_argument("--player", action="append", help="Limit to a player key; repeatable")
    pile.add_argument("--no-faction", action="store_true", help="Skip faction purchases")
    pile.set_defaults(func=cmd_piles)

    character = subparsers.add_parser("character", help="Create a character actor from lore")
    character.add_argument("--from", help="Existing character id from data/characters.json")
    character.add_argument("--name", help="Override the character name")
    character.add_argument("--event", action="append", help="Link an event id; repeatable")
    character.add_argument("--faction", help="Faction id")
    character.add_argument("--class", dest="class_name", help="Force a class")
    character.add_argument("--race", help="Force a race")
    character.add_argument("--level", type=int, default=1, help="Character level (1-20)")
    character.add_argument("--gear", type=int, default=6, help="How many starting items (0 for none)")
    character.add_argument("--model", action="store_true", help="Use LM Studio for flavor text")
    character.add_argument("--save", action="store_true", help="Write the actor JSON")
    character.set_defaults(func=cmd_character)

    doctor = subparsers.add_parser("doctor", help="Check data sources and the environment")
    doctor.set_defaults(func=cmd_doctor)

    args = parser.parse_args()
    return args.func(args)


if __name__ == "__main__":
    raise SystemExit(main())
