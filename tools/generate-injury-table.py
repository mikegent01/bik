#!/usr/bin/env python3
"""Validate, roll, and optionally assign entries from the permanent injury table.

Source of truth: Reputation-Matrix2/data/injuries.json. Character injuries are
references, not copied rules text, so the desk and character records stay in sync.
"""
import argparse, json, random
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TABLE = ROOT / "Reputation-Matrix2/data/injuries.json"
CHARS = ROOT / "Reputation-Matrix2/data/characters.json"

def load():
    data = json.loads(TABLE.read_text(encoding="utf-8"))
    entries = data.get("entries", [])
    assert len(entries) == 100, f"expected 100 entries, got {len(entries)}"
    assert [e["d100"] for e in entries] == list(range(1, 101)), "d100 rows must be 1..100"
    required = {"d100", "category", "injuryType", "description", "cure", "duration", "notes"}
    for e in entries:
        missing = required - e.keys()
        assert not missing, f"row {e.get('d100')} missing {sorted(missing)}"
    return data

def assign(character_id, roll):
    characters = json.loads(CHARS.read_text(encoding="utf-8"))
    character = next((c for c in characters if c.get("id") == character_id), None)
    if not character:
        raise SystemExit(f"unknown character id: {character_id}")
    entry = next(e for e in load()["entries"] if e["d100"] == roll)
    injuries = character.setdefault("injuries", [])
    ref = {"table": "permanent_injury_d100", "roll": roll, "injuryId": f"injury_{roll:03d}", "status": "active"}
    injuries.append(ref)
    CHARS.write_text(json.dumps(characters, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"assigned {character_id}: d100={roll} — {entry['injuryType']}")

def main():
    ap = argparse.ArgumentParser(description="Permanent injury d100 desk")
    ap.add_argument("--check", action="store_true", help="validate all 100 rows")
    ap.add_argument("--roll", action="store_true", help="roll and print one result")
    ap.add_argument("--character", help="character id to receive the result")
    ap.add_argument("--result", type=int, choices=range(1, 101), help="use a chosen d100 result")
    args = ap.parse_args()
    data = load()
    if args.check or not (args.roll or args.result):
        print(f"OK: {len(data['entries'])} injury entries; d100 sequence intact")
    if args.roll or args.result:
        roll = args.result or random.randint(1, 100)
        entry = next(e for e in data["entries"] if e["d100"] == roll)
        print(json.dumps(entry, ensure_ascii=False, indent=2))
        if args.character:
            assign(args.character, roll)

if __name__ == "__main__":
    main()
