#!/usr/bin/env python3
"""The world clock must agree with itself.

`data/currentDate.json` is the source of truth for the in-world date. But
`data/world/calendar.js` also exports CURRENT_GAME_DATE, a synchronous literal
imported by 210 call sites, and a synchronous export cannot fetch JSON at load
time. So the literal is seeded by hand and patched at runtime.

A hand-seeded literal drifts. It did: the file sat at Harvestide 18 (monthIndex
7) while currentDate.json had moved on to Aethel 5 (monthIndex 8), so every page
reading the calendar module showed a date seventeen days in the past.

This check asserts the seeded literal still matches the JSON, which is the only
thing standing between "one source of truth" and "two dates that disagree".

    python3 tools/check-world-clock.py
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
CAL = DATA / "world" / "calendar.js"
CUR = DATA / "currentDate.json"

LITERAL = re.compile(
    r"export\s+const\s+CURRENT_GAME_DATE\s*=\s*\{\s*"
    r"year\s*:\s*(\d+)\s*,\s*monthIndex\s*:\s*(\d+)\s*,\s*day\s*:\s*(\d+)"
)


def main() -> int:
    truth = json.loads(CUR.read_text(encoding="utf-8"))
    src = CAL.read_text(encoding="utf-8")

    m = LITERAL.search(src)
    if not m:
        print("world clock: could not find the CURRENT_GAME_DATE literal in "
              "data/world/calendar.js — did its shape change?")
        return 1

    seeded = {"year": int(m.group(1)), "monthIndex": int(m.group(2)), "day": int(m.group(3))}
    want = {k: truth.get(k) for k in ("year", "monthIndex", "day")}

    if seeded != want:
        print("world clock: calendar.js disagrees with currentDate.json")
        print(f"  currentDate.json : {want}")
        print(f"  calendar.js      : {seeded}")
        print("  fix: update the CURRENT_GAME_DATE literal to match, in the same "
              "commit that moves the world clock.")
        return 1

    # The runtime patch is what keeps late readers honest; losing it silently
    # would turn this back into a hand-maintained constant.
    if "currentDate.json" not in src:
        print("world clock: calendar.js no longer reads currentDate.json at "
              "runtime — the literal is hand-maintained again and will drift.")
        return 1

    months = json.loads((DATA / "calendarMonths.json").read_text(encoding="utf-8"))
    name = months[want["monthIndex"]]["name"] if want["monthIndex"] < len(months) else "?"
    print(f"world clock: calendar.js matches currentDate.json "
          f"({want['day']} {name}, {want['year']} BF)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
