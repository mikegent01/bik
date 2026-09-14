#!/usr/bin/env python3
"""Report event art coverage and suggest the next contact sheet.

Event art is the "field plate" a reader recovers by reading a filing, so an
event with no image is a filing with no reward at the end of it. This reports
how far coverage has got and, because generation budget is the real
constraint, proposes the next sheet: nine imageless events that share cast, so
one generation can serve all nine.

Note `image` may be present but EMPTY - 26 events carried `"image": ""`, which
counts as no art, not as art.

Usage:
    python3 tools/check-event-art.py             # coverage + next sheet
    python3 tools/check-event-art.py --check     # fail if a filing regressed
"""
import argparse
import collections
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
PORTRAITS = ROOT / "portraits"
SHEET = 9


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()

    doc = json.loads((DATA / "events.json").read_text(encoding="utf-8"))
    evs = doc["events"] if isinstance(doc, dict) else doc

    have = [e for e in evs if e.get("image")]
    missing = [e for e in evs if not e.get("image")]
    broken = [e for e in have
              if not (ROOT / "Reputation-Matrix2" / e["image"]).exists()]

    print(f"event art: {len(have)}/{len(evs)} filings illustrated "
          f"({len(have)*100//max(1,len(evs))}%), {len(missing)} without")

    if broken:
        print("\nBROKEN image paths:")
        for e in broken:
            print(f"  {e['id']} -> {e['image']}")

    if args.check:
        # Only broken paths are a failure. An unillustrated backlog is a known
        # state being worked down, not a regression to block commits on.
        return 1 if broken else 0

    if not missing:
        print("\nEvery filing has a plate.")
        return 0

    ports = {p.stem for p in PORTRAITS.iterdir()
             if p.suffix.lower() in (".png", ".webp", ".jpg", ".jpeg")}

    # Cast a filing shares with the portrait library, so a sheet can be
    # grouped around references that actually exist.
    cast = {}
    for e in missing:
        ids = [p.get("id") for p in (e.get("participants") or [])
               if isinstance(p, dict)]
        cast[e["id"]] = [i for i in ids if i in ports]

    freq = collections.Counter()
    for ids in cast.values():
        freq.update(set(ids))

    if not freq:
        print("\nNo imageless filing has a portrait-backed participant.")
        return 0

    # Greedily take the most common available face and fill a sheet from the
    # filings that feature it, topping up with other portrait-backed ones.
    lead, _ = freq.most_common(1)[0]
    picked = [eid for eid, ids in cast.items() if lead in ids][:SHEET]
    if len(picked) < SHEET:
        for eid, ids in cast.items():
            if eid not in picked and ids:
                picked.append(eid)
            if len(picked) == SHEET:
                break

    refs = sorted({i for eid in picked for i in cast[eid]})[:4]
    print(f"\nNext sheet (3x3, lead face: {lead}):")
    for eid in picked:
        print(f"  {eid}")
    print("\nreferences: " + " ".join(f"portraits/{r}.png" for r in refs))
    print("\nthen: python3 tools/slice-event-sheet.py tools/sheets/SHEET.png \\")
    print(f"        --cols 3 --rows 3 --ids {','.join(picked)} \\")
    print("        --out-dir Reputation-Matrix2/assets/images/events/"
          "archive-sheets --write")
    return 0


if __name__ == "__main__":
    sys.exit(main())
