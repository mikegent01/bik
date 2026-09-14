#!/usr/bin/env python3
"""Drop the bare calendar date off the front of event titles.

Some filings were named for the day they happened - "12 Harvestside - The
Ghost, the Gallery, the Gas, and the Climb". On a card that reads badly: the
kicker line already prints the date directly above the title, so the card says
the date twice and the first thing the eye lands on is a number rather than
what the session was about.

The date is not lost. It stays in `date`, in `timeCode`, and in the card
kicker - this only removes the duplicate from the display title.

Two shapes are handled:
  "12 Harvestside — The Ghost, ..."             -> "The Ghost, ..."
  "14 Harvestside (Continued) — The Hidden Hall" -> "The Hidden Hall ... (Continued)"

The "(Continued)" marker is real information, so it is preserved and moved to
the end rather than dropped with the date.

Titles where the date IS the subject are deliberately left alone
(e.g. "Highsun 1, 955 BF - The Day Of" - the day is the point of that filing).

Usage:
    python3 tools/retitle-date-prefixed-events.py          # dry run
    python3 tools/retitle-date-prefixed-events.py --write
    python3 tools/retitle-date-prefixed-events.py --check
"""
import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
EVENTS = DATA / "events.json"

# "<day> <Month>" optionally "(Continued)", then an em/en dash separator.
PREFIX = re.compile(
    r"""^\s*\d{1,2}(?:st|nd|rd|th)?\s+
        (?P<month>[A-Z][a-z]+)\s*
        (?P<cont>\(\s*Continued\s*\))?\s*
        [—–-]\s*""",
    re.X)

# Filings where the date is the subject, not a prefix. Left untouched.
KEEP = {"highsun_1_955_bf_the_day_of"}


def load():
    with EVENTS.open(encoding="utf-8") as fh:
        return json.load(fh)


def retitle(name):
    """-> new name, or None if this title needs no change."""
    m = PREFIX.match(name or "")
    if not m:
        return None
    rest = name[m.end():].strip()
    if not rest:
        return None
    if m.group("cont"):
        rest = f"{rest} (Continued)"
    return rest


def plan(events):
    out = []
    for e in events:
        if e.get("id") in KEEP:
            continue
        for field in ("name", "title"):
            cur = e.get(field)
            if not isinstance(cur, str):
                continue
            new = retitle(cur)
            if new and new != cur:
                out.append((e, field, cur, new))
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--write", action="store_true")
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()

    doc = load()
    events = doc["events"] if isinstance(doc, dict) else doc
    changes = plan(events)

    if args.check:
        if changes:
            print("event titles: these still lead with a bare calendar date:")
            for e, f, cur, new in changes:
                print(f"  {e['id']}.{f}: {cur!r}")
            print("  run: python3 tools/retitle-date-prefixed-events.py --write")
            return 1
        print("event titles: no filing leads with a bare calendar date.")
        return 0

    if not changes:
        print("Nothing to retitle.")
        return 0

    for e, f, cur, new in changes:
        print(f"  {e['id']}.{f}")
        print(f"      {cur}")
        print(f"   -> {new}")

    if not args.write:
        print(f"\n{len(changes)} change(s). Re-run with --write.")
        return 0

    for e, f, cur, new in changes:
        e[f] = new
    EVENTS.write_text(json.dumps(doc, ensure_ascii=False, indent=2) + "\n",
                      encoding="utf-8")
    print(f"\nretitled {len(changes)} field(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
