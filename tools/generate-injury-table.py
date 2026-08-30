#!/usr/bin/env python3
"""Validate, roll, and assign the temporary permanent-injury d100 table.

The JSON table is intentionally marked temporary. A future AI replacement must
preserve the stable d100/character-reference contract and pass --check before
it replaces these entries.
"""
import argparse
import json
import secrets
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TABLE = ROOT / "Reputation-Matrix2/data/injuries.json"
CHARS = ROOT / "Reputation-Matrix2/data/characters.json"
REQUIRED = {"d100", "category", "injuryType", "description", "cure", "duration", "notes", "temporary"}


def load_table():
    """Load and validate the complete temporary table; return its data."""
    try:
        data = json.loads(TABLE.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        raise SystemExit(f"could not read injury table: {exc}") from exc
    entries = data.get("entries")
    if data.get("status") != "temporary":
        raise SystemExit("injury table must remain marked status=temporary until an AI replacement is reviewed")
    if not isinstance(entries, list) or len(entries) < 1:
        raise SystemExit(f"expected at least 1 injury entry, got {len(entries) if isinstance(entries, list) else 'invalid'}")
    rolls = [e.get("d100") for e in entries if isinstance(e, dict)]
    if rolls != list(range(1, len(entries) + 1)):
        raise SystemExit(f"injury entries must be ordered consecutively from 1 to {len(entries)}")
    for entry in entries:
        missing = REQUIRED - entry.keys()
        if missing:
            raise SystemExit(f"row {entry.get('d100')} missing {sorted(missing)}")
        if entry["temporary"] is not True:
            raise SystemExit(f"row {entry['d100']} is not marked temporary")
    return data


def entry_for_roll(data, roll):
    """Return one validated row for an integer d100 result."""
    if not isinstance(roll, int) or not 1 <= roll <= len(data["entries"]):
        raise ValueError(f"roll must be an integer from 1 to {len(data['entries'])}")
    return data["entries"][roll - 1]


def choose_roll(data, requested=None):
    """Use a requested result, or generate an unpredictable cryptographic d100."""
    return requested if requested is not None else secrets.randbelow(len(data["entries"])) + 1


def parse_dice(spec: str) -> tuple[int, int]:
    """Parse NdM for repeated independent table rolls (the table stays d100)."""
    match = re.fullmatch(r"(\d+)?d(\d+)", (spec or "").strip().lower())
    if not match:
        raise ValueError("dice must look like d100, 2d100, or 100d100")
    count = int(match.group(1) or 1)
    sides = int(match.group(2))
    if count < 1 or count > 10000 or sides < 1:
        raise ValueError("dice count must be 1..10000 and sides must be positive")
    return count, sides


def roll_dice(data, spec: str) -> list[int]:
    """Return count rolls; map any die size onto the available table safely."""
    count, sides = parse_dice(spec)
    return [((secrets.randbelow(sides) + 1 - 1) % len(data["entries"])) + 1 for _ in range(count)]


def assign(character_id, entry, dry_run=False):
    """Append a compact injury reference to a character, unless --dry-run is used."""
    try:
        characters = json.loads(CHARS.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        raise SystemExit(f"could not read characters.json: {exc}") from exc
    character = next((c for c in characters if c.get("id") == character_id), None)
    if not character:
        raise SystemExit(f"unknown character id: {character_id}")
    ref = {"table": "permanent_injury_d100", "roll": entry["d100"], "injuryId": f"injury_{entry['d100']:03d}", "status": "active"}
    if not dry_run:
        character.setdefault("injuries", []).append(ref)
        CHARS.write_text(json.dumps(characters, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return character, ref


def main():
    parser = argparse.ArgumentParser(description="Temporary permanent-injury d100 desk")
    parser.add_argument("--check", action="store_true", help="validate all 100 rows and temporary markers")
    parser.add_argument("--roll", action="store_true", help="generate one random d100 result")
    parser.add_argument("--dice", help="generate repeated rolls: d100, 2d100, 100d100, or any NdM")
    parser.add_argument("--result", type=int, help="use a chosen result (1 to N)")
    parser.add_argument("--character", help="character id to receive the result reference")
    parser.add_argument("--dry-run", action="store_true", help="show an assignment without writing characters.json")
    args = parser.parse_args()
    data = load_table()
    if args.check or not (args.roll or args.result or args.dice):
        print(f"OK: {len(data['entries'])} temporary injury entries; roll sequence intact")
    if args.dice and (args.roll or args.result):
        raise SystemExit("use only one of --dice, --roll, or --result")
    if args.dice:
        rolls = roll_dice(data, args.dice)
        entries = [entry_for_roll(data, roll) for roll in rolls]
        print(json.dumps({"dice": args.dice, "rolls": rolls, "entries": entries}, ensure_ascii=False, indent=2))
        if args.character:
            for entry in entries:
                character, ref = assign(args.character, entry, dry_run=args.dry_run)
            mode = "would assign" if args.dry_run else "assigned"
            print(f"{mode} {len(entries)} injuries to {args.character}")
    elif args.roll or args.result:
        roll = choose_roll(data, args.result)
        entry = entry_for_roll(data, roll)
        print(json.dumps(entry, ensure_ascii=False, indent=2))
        if args.character:
            character, ref = assign(args.character, entry, dry_run=args.dry_run)
            mode = "would assign" if args.dry_run else "assigned"
            print(f"{mode} {character['id']}: {ref['injuryId']} — {entry['injuryType']}")


if __name__ == "__main__":
    main()
