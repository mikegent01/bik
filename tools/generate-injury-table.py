#!/usr/bin/env python3
"""Validate, roll, list and assign the Permanent Injury Table.

`Reputation-Matrix2/data/injuries.json` is hand-authored and locked: exactly
one hundred d100 rows, worst at 1 and best at 100, in declared category bands.
The old machine-generated table (343 rows of template repeats, later culled to
204) was wiped on 2026-10-04; the genkit `injury-table` generator is retired
and refuses to write a locked table. This tool is the contract's keeper.

  python3 tools/generate-injury-table.py --check              # validate the whole table
  python3 tools/generate-injury-table.py --list [--band "Major injury"]
  python3 tools/generate-injury-table.py --roll [--survived]  # one d100 (--survived skips row 1)
  python3 tools/generate-injury-table.py --result 15
  python3 tools/generate-injury-table.py --dice 3d100
  python3 tools/generate-injury-table.py --result 15 --character luigi [--dry-run]
"""
from __future__ import annotations

import argparse
import json
import re
import secrets
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TABLE = ROOT / "Reputation-Matrix2/data/injuries.json"
CHARS = ROOT / "Reputation-Matrix2/data/characters.json"

ROWS = 100
FIELDS = ("d100", "category", "injuryType", "description", "cure", "duration", "notes")
TOP_LEVEL = ("schemaVersion", "title", "description", "status", "locked", "rules", "bands", "cureLadder", "entries")
# Leftovers of the generated era. Their presence means somebody ran the old pipeline.
FORBIDDEN_KEYS = ("temporary", "_generated", "_repair", "replacement")
# A family is the name with any trailing roman numeral removed; the generator
# once numbered its way out of collisions ("Veilbound Vein Anomaly XIV").
ROMAN_SUFFIX = re.compile(r"\s+[IVXLCDM]{1,7}$")
FAMILY_CAP = 2
PREFIX_CAP = 12
GM_NAME = re.compile(r"\bmike\b", re.IGNORECASE)
CROSS_REF = re.compile(r"\((\d{2})\)")


class TableError(SystemExit):
    pass


def _fail(msg: str) -> None:
    raise TableError(f"injury table: {msg}")


def load_table() -> dict:
    """Load and validate the authored table; return its data."""
    try:
        data = json.loads(TABLE.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        _fail(f"could not read {TABLE.name}: {exc}")
    if not isinstance(data, dict):
        _fail("top level must be an object")
    for key in TOP_LEVEL:
        if key not in data:
            _fail(f"missing top-level key {key!r}")
    if data["schemaVersion"] != 2:
        _fail(f"schemaVersion must be 2, got {data['schemaVersion']!r}")
    if data["status"] != "authored" or data["locked"] is not True:
        _fail("the table must be status='authored' and locked=true — a temporary/generated table is not accepted any more")
    for key in FORBIDDEN_KEYS:
        if key in data:
            _fail(f"top-level {key!r} is a generated-era field and must not come back")
    if not isinstance(data["rules"], list) or not data["rules"]:
        _fail("rules must be a non-empty list")

    bands = data["bands"]
    if not isinstance(bands, list) or not bands:
        _fail("bands must be a non-empty list")
    expect = 1
    band_of: dict[int, str] = {}
    for band in bands:
        try:
            cat, lo, hi = band["category"], int(band["from"]), int(band["to"])
        except (KeyError, TypeError, ValueError):
            _fail(f"malformed band {band!r}")
        if lo != expect or hi < lo:
            _fail(f"bands must tile 1..{ROWS} in order; band {cat!r} runs {lo}-{hi}, expected to start at {expect}")
        if band.get("rows") not in (None, hi - lo + 1):
            _fail(f"band {cat!r} says rows={band.get('rows')} but spans {hi - lo + 1}")
        for n in range(lo, hi + 1):
            band_of[n] = cat
        expect = hi + 1
    if expect != ROWS + 1:
        _fail(f"bands cover 1..{expect - 1}, must cover 1..{ROWS}")
    if bands[0]["category"] != "Death" or bands[0]["to"] != 1:
        _fail("row 1 must be the single Death row — the survival handoff skips it by category")
    if any(b["category"] == "Death" for b in bands[1:]):
        _fail("only one Death band is allowed")

    entries = data["entries"]
    if not isinstance(entries, list) or len(entries) != ROWS:
        _fail(f"expected exactly {ROWS} entries, got {len(entries) if isinstance(entries, list) else 'non-list'}")
    names: list[str] = []
    for i, entry in enumerate(entries, start=1):
        if not isinstance(entry, dict):
            _fail(f"row {i} is not an object")
        if tuple(entry.keys()) != FIELDS:
            extra = sorted(set(entry) - set(FIELDS))
            missing = sorted(set(FIELDS) - set(entry))
            _fail(f"row {i} fields must be exactly {list(FIELDS)} in order (extra {extra}, missing {missing})")
        if entry["d100"] != i:
            _fail(f"row {i} carries d100={entry['d100']!r}; rows must run 1..{ROWS} in order")
        if entry["category"] != band_of[i]:
            _fail(f"row {i} is {entry['category']!r} but sits in the {band_of[i]!r} band")
        for key in ("injuryType", "description", "cure", "duration"):
            if not isinstance(entry[key], str) or not entry[key].strip():
                _fail(f"row {i} has an empty {key}")
        if not isinstance(entry["notes"], str):
            _fail(f"row {i} notes must be a string (use '' for none)")
        name = entry["injuryType"].strip()
        if not 3 <= len(name) <= 48:
            _fail(f"row {i} name length out of range: {name!r}")
        if ROMAN_SUFFIX.search(name) and len(name.split()) > 1:
            _fail(f"row {i} name carries a roll numeral: {name!r}")
        if not 20 <= len(entry["description"]) <= 400:
            _fail(f"row {i} description must be 20-400 characters, is {len(entry['description'])}")
        blob = " ".join(str(entry[k]) for k in FIELDS[1:])
        if GM_NAME.search(blob):
            _fail(f"row {i} names the GM")
        for ref in CROSS_REF.findall(entry["description"] + " " + entry["notes"]):
            if not 1 <= int(ref) <= ROWS:
                _fail(f"row {i} cross-references row {ref}, which does not exist")
        names.append(name.lower())

    dupes = [n for n, c in Counter(names).items() if c > 1]
    if dupes:
        _fail(f"duplicate injury names: {dupes}")
    fam = Counter(ROMAN_SUFFIX.sub("", n) for n in names)
    worst = fam.most_common(1)[0]
    if worst[1] > FAMILY_CAP:
        _fail(f"name family {worst[0]!r} appears {worst[1]} times (cap {FAMILY_CAP})")
    pre = Counter(" ".join(n.split()[:2]) for n in names)
    worst = pre.most_common(1)[0]
    if worst[1] > PREFIX_CAP:
        _fail(f"two-word prefix {worst[0]!r} appears {worst[1]} times (cap {PREFIX_CAP})")
    return data


def entry_for_roll(data: dict, roll: int) -> dict:
    """Return one validated row for an integer d100 result."""
    if not isinstance(roll, int) or not 1 <= roll <= ROWS:
        raise ValueError(f"roll must be an integer from 1 to {ROWS}")
    return data["entries"][roll - 1]


def choose_roll(data: dict, requested: int | None = None, survived: bool = False) -> int:
    """Use a requested result, or a cryptographic d100.

    `survived` is the death-save handoff: the saves already decided whether the
    character lives, so row 1 (Death) is skipped and the d100 runs 2..100.
    """
    if requested is not None:
        return requested
    if survived:
        return secrets.randbelow(ROWS - 1) + 2
    return secrets.randbelow(ROWS) + 1


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


def roll_dice(data: dict, spec: str) -> list[int]:
    """Return count rolls; any die size wraps onto the 100-row table."""
    count, sides = parse_dice(spec)
    return [(secrets.randbelow(sides) % ROWS) + 1 for _ in range(count)]


def assign(character_id: str, entry: dict, dry_run: bool = False) -> tuple[dict, dict]:
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


def summary(data: dict) -> str:
    lines = [f"OK: {ROWS} authored injury rows, locked; bands in order"]
    for band in data["bands"]:
        lines.append(f"  {band['from']:>3}-{band['to']:<3} {band['category']:<22} {band['to'] - band['from'] + 1:>2} rows")
    return "\n".join(lines)


def listing(data: dict, band: str | None = None) -> str:
    rows = data["entries"]
    if band:
        rows = [e for e in rows if e["category"].lower() == band.lower()]
        if not rows:
            raise SystemExit(f"no band called {band!r}; bands: {', '.join(b['category'] for b in data['bands'])}")
    width = max(len(e["injuryType"]) for e in rows)
    return "\n".join(f"{e['d100']:>3}  {e['category']:<22} {e['injuryType']:<{width}}  {e['cure']}" for e in rows)


def main() -> None:
    parser = argparse.ArgumentParser(description="Permanent Injury Table — validate, roll, list, assign")
    parser.add_argument("--check", action="store_true", help="validate the whole table and print the band summary")
    parser.add_argument("--list", action="store_true", help="print every row (d100, category, name, lowest cure)")
    parser.add_argument("--band", help="with --list: only this category")
    parser.add_argument("--roll", action="store_true", help="generate one random d100 result")
    parser.add_argument("--survived", action="store_true", help="with --roll: the death-save handoff, which skips row 1")
    parser.add_argument("--dice", help="generate repeated rolls: d100, 2d100, 100d100, or any NdM")
    parser.add_argument("--result", type=int, help="use a chosen result (1 to 100)")
    parser.add_argument("--character", help="character id to receive the result reference")
    parser.add_argument("--dry-run", action="store_true", help="show an assignment without writing characters.json")
    args = parser.parse_args()
    data = load_table()
    acting = args.roll or args.result or args.dice or args.list
    if args.check or not acting:
        print(summary(data))
    if args.list:
        print(listing(data, args.band))
    if args.dice and (args.roll or args.result):
        raise SystemExit("use only one of --dice, --roll, or --result")
    if args.dice:
        rolls = roll_dice(data, args.dice)
        entries = [entry_for_roll(data, roll) for roll in rolls]
        print(json.dumps({"dice": args.dice, "rolls": rolls, "entries": entries}, ensure_ascii=False, indent=2))
        if args.character:
            for entry in entries:
                assign(args.character, entry, dry_run=args.dry_run)
            print(f"{'would assign' if args.dry_run else 'assigned'} {len(entries)} injuries to {args.character}")
    elif args.roll or args.result:
        roll = choose_roll(data, args.result, survived=args.survived)
        try:
            entry = entry_for_roll(data, roll)
        except ValueError as exc:
            raise SystemExit(str(exc)) from exc
        print(json.dumps(entry, ensure_ascii=False, indent=2))
        if args.character:
            character, ref = assign(args.character, entry, dry_run=args.dry_run)
            print(f"{'would assign' if args.dry_run else 'assigned'} {character['id']}: {ref['injuryId']} — {entry['injuryType']}")


if __name__ == "__main__":
    main()
