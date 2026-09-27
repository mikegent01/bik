#!/usr/bin/env python3
"""Validate session timelines (the `timeline` field on events).

The timeline exists because XP answers "what did the session pay" and some
filings pay nothing — foreign protagonists, historical sessions, one-shot
worlds. The timeline answers the question the XP ledger cannot: what was the
DAY like. What time it was, how long things took, what the weather was doing
in each world the filing crosses.

Three rules this checker enforces (full reasoning in TIMELINE_GUIDE.md):

  HONESTY  every world must carry a `source` — weather is a claim about a
           day, and claims need provenance. The hunt for the source is part
           of the filing, not a footnote to it.
  SCANNABLE  every entry needs `time`, `beat`, and `detail`; `span` (how
           long it took) is the field that makes a timeline a timeline, so
           its absence is a warning.
  PROPORTION  a timeline with fewer than 4 entries is a beat list wearing
           a clock; warn under 6.

Usage:
    python3 tools/check-timelines.py
"""

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"

MIN_ENTRIES_WARN = 6
MIN_ENTRIES_FAIL = 4


def main():
    doc = json.loads((DATA / "events.json").read_text(encoding="utf-8"))
    evs = doc["events"] if isinstance(doc, dict) and "events" in doc else doc

    errs, warns = [], []
    filed = 0
    for ev in evs:
        tl = ev.get("timeline")
        if not tl:
            continue
        filed += 1
        eid = ev.get("id", "<no id>")

        if not str(tl.get("day") or "").strip():
            errs.append(f"{eid}: no day")

        worlds = tl.get("worlds") or []
        if not worlds:
            errs.append(f"{eid}: no worlds — even a single-world filing "
                        f"carries one card, or the weather has nowhere to live")
        for w in worlds:
            if not (w.get("label") or w.get("id")):
                errs.append(f"{eid}: a world card has no label")
            if not str(w.get("weather") or "").strip():
                errs.append(f"{eid}: world {w.get('id', '?')} has no weather/"
                            f"conditions line — 'no weather on record' IS a "
                            f"valid filing, but it must be filed")
            if not str(w.get("source") or "").strip():
                errs.append(f"{eid}: world {w.get('id', '?')} has no source — "
                            f"the honesty rule: how does the archive know?")

        entries = tl.get("entries") or []
        if len(entries) < MIN_ENTRIES_FAIL:
            errs.append(f"{eid}: {len(entries)} entries — too few to be a day")
        elif len(entries) < MIN_ENTRIES_WARN:
            warns.append(f"{eid}: only {len(entries)} entries — thin for a "
                         f"session filing")
        seen_times = set()
        for en in entries:
            n = en.get("time") or ""
            if not str(n).strip():
                errs.append(f"{eid}: an entry has no time")
            key = (str(n).strip(), str(en.get("beat") or "").strip())
            if key in seen_times:
                warns.append(f"{eid}: duplicate time/beat '{n}'")
            seen_times.add(key)
            for field in ("beat", "detail"):
                if not str(en.get(field) or "").strip():
                    errs.append(f"{eid}: an entry ({n or 'no time'}) has no {field}")
            if not str(en.get("span") or "").strip():
                warns.append(f"{eid}: entry '{n}' has no span — how long did "
                             f"it take? That is the field that makes a "
                             f"timeline a timeline")

        wids = {w.get("id") for w in worlds}
        for en in entries:
            if en.get("world") and en["world"] not in wids:
                errs.append(f"{eid}: entry '{en.get('time', '?')}' tags world "
                            f"'{en['world']}' but no world card has that id")

        print(f"{eid}")
        print(f"  {len(entries)} entries · {len(worlds)} world(s) · "
              f"day: {tl.get('day', '?')}")

    if not filed:
        print("no timelines filed yet (see docs/TIMELINE_GUIDE.md)")

    for e in errs:
        print(f"  ERROR  {e}")
    for w in warns:
        print(f"  warn   {w}")
    if errs:
        print(f"FAIL  timelines ({filed} filed, {len(errs)} errors)")
        return 1
    print(f"PASS  timelines ({filed} filed)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
