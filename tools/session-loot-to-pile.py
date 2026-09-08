#!/usr/bin/env python3
"""Build Foundry item piles from the session loot log.

Post-session step, run as part of the event-making process once the recap
exists: filter the loot log by event (or session), group by character, and
write one importable item-pile actor per character next to the hub's piles.
The DM imports the pile in Foundry and each player loots their own gains.

Usage:
    python3 tools/session-loot-to-pile.py --event shadow_estate_12
    python3 tools/session-loot-to-pile.py --session "Shadow Estate 12" --preview
    python3 tools/session-loot-to-pile.py --event shadow_estate_12 --character waluigi
"""
from __future__ import annotations

import argparse
import json
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "Reputation-Matrix2" / "tools" / "hub"))

from hubcore import foundry, loot, paths, piles  # noqa: E402


def collect(*, event: str | None, session: str | None,
            characters: list[str] | None) -> dict[str, list[dict]]:
    entries = loot.load()
    if event:
        entries = [e for e in entries if (e.get("eventId") or "") == event]
    if session:
        entries = [e for e in entries if (e.get("session") or "") == session]
    if characters:
        want = set(characters)
        entries = [e for e in entries if e.get("characterId") in want]
    grouped: dict[str, list[dict]] = defaultdict(list)
    for entry in entries:
        grouped[entry.get("characterId") or "unknown"].append(entry)
    return grouped


def to_player(key: str, entries: list[dict], label: str) -> dict:
    display = next((e.get("characterName") or "" for e in entries if e.get("characterName")), "") or key
    lines: dict[str, dict] = {}
    for entry in entries:
        name = (entry.get("item") or "Unknown Item").strip()
        slot = lines.setdefault(name, {"item": None, "receipts": [], "quantity": 0})
        slot["quantity"] += int(entry.get("qty") or 1)
        slot["receipts"].append({
            "orderId": entry.get("id"),
            "approvedAt": entry.get("at"),
            "approvedBy": "DM",
            "price": 0,
        })
        note = (entry.get("note") or "").strip()
        record: dict = {"id": "loot-%s-%s" % (label, entry.get("id")),
                        "name": name, "category": "loot"}
        if note:
            record["effects"] = [note]
        if entry.get("session"):
            record["effectDetails"] = [{"title": "Session", "rules": entry["session"]}]
        slot["item"] = record
    flat = list(lines.values())
    return {"playerKey": key, "displayName": display, "lines": flat,
            "itemCount": sum(l["quantity"] for l in flat), "uniqueItems": len(flat),
            "totalGold": 0}


def _relabel(node):
    # build_pile_actor narrates "approved purchases"; session loot is found,
    # not bought, so relabel the pile copy.
    if isinstance(node, dict):
        return {k: _relabel(v) for k, v in node.items()}
    if isinstance(node, list):
        return [_relabel(v) for v in node]
    if isinstance(node, str):
        return node.replace("approved purchases", "session loot")
    return node


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Build Foundry piles from session loot.")
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--event", help="Event id to pile")
    group.add_argument("--session", help="Session label to pile")
    parser.add_argument("--character", action="append", help="Limit to a sheet slug; repeatable")
    parser.add_argument("--preview", action="store_true", help="Show what would be built, write nothing")
    parser.add_argument("--out", help="Output directory (default: the hub piles dir)")
    args = parser.parse_args(argv)

    label = args.event or args.session
    grouped = collect(event=args.event, session=args.session, characters=args.character)
    if not grouped:
        print("no loot entries match")
        return 1
    outdir = Path(args.out) if args.out else paths.PILES_DIR
    if args.preview:
        for key, entries in sorted(grouped.items()):
            print(f"\n{key} — {len(entries)} entries")
            for entry in entries:
                print(f"    {entry.get('qty', 1)}x {entry.get('item')} [{entry.get('source')}]")
        print(f"\n{sum(len(v) for v in grouped.values())} entries across {len(grouped)} characters (preview only)")
        return 0
    paths.ensure_out_dirs()
    outdir.mkdir(parents=True, exist_ok=True)
    for key, entries in sorted(grouped.items()):
        player = to_player(key, entries, foundry.safe_filename(label))
        actor = _relabel(piles.build_pile_actor(player, pile_name=f"{label} — Session Loot"))
        filename = f"fvtt-Actor-{foundry.safe_filename(label)}-{foundry.safe_filename(key)}-loot.json"
        target = outdir / filename
        target.write_text(json.dumps(actor, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        print(f"{key:<12} {len(entries):>3} entries  →  {target}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
