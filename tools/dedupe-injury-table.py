#!/usr/bin/env python3
"""Repair the temporary injury table: renumber it, and cull template repeats.

Two defects, both measured before anything is changed.

1. NUMBERING. `d100` runs 1..345 across 343 rows, so the sequence has gaps and
   `generate-injury-table.py --check` fails on
   "entries must be ordered consecutively". That check has been red for weeks.

2. REPETITION. The generator collapsed onto one noun phrase and then numbered
   its way out of the collision with roman numerals:

       125 of 343 rows begin "Veilbound Vein"   (36% of the table)
       134 of 343 rows begin "Veilbound"        (39%)
       102 rows carry a roman numeral suffix
        18 rows are "Veilbound Vein Anomaly I..XVIII"

   A d100 table whose results are mostly the same three words is not a table,
   it is one entry rolled repeatedly. The user reported this as
   "Veilbound Vein Anomaly XXXIV".

This tool is deterministic and uses NO AI. It does not invent replacement
prose: culling removes rows, it never rewrites them. What remains is the
first-seen member of each over-used family plus everything already distinct,
renumbered into a clean sequence.

  python3 tools/dedupe-injury-table.py --report        # measure only
  python3 tools/dedupe-injury-table.py --check         # exit 1 if repeats remain
  python3 tools/dedupe-injury-table.py --write         # renumber + cull
  python3 tools/dedupe-injury-table.py --write --renumber-only
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from collections import Counter, OrderedDict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TABLE = ROOT / "Reputation-Matrix2/data/injuries.json"

# A family is the injury name with any trailing roman numeral removed, so
# "Veilbound Vein Anomaly XIV" and "Veilbound Vein Anomaly" are one family.
ROMAN_SUFFIX = re.compile(r"\s+[IVXLCDM]{1,7}$")

# How many rows any single family may keep. Two lets a genuine pair survive
# (a mild and a severe version of the same wound) without letting a template
# take over the table.
FAMILY_CAP = 2
# How many rows may share a two-word prefix, e.g. "Veilbound Vein".
PREFIX_CAP = 12


def family_of(name: str) -> str:
    return ROMAN_SUFFIX.sub("", str(name or "")).strip()


def prefix_of(name: str) -> str:
    return " ".join(str(name or "").split()[:2])


def load() -> dict:
    return json.loads(TABLE.read_text(encoding="utf-8"))


def measure(entries: list) -> dict:
    names = [e.get("injuryType", "") for e in entries]
    fam = Counter(family_of(n) for n in names)
    pre = Counter(prefix_of(n) for n in names)
    romans = [n for n in names if ROMAN_SUFFIX.search(n)]
    exact = Counter(names)
    rolls = [e.get("d100") for e in entries]
    consecutive = rolls == list(range(1, len(entries) + 1))
    return {
        "count": len(entries),
        "consecutive": consecutive,
        "d100_max": max(rolls) if rolls else 0,
        "families_over_cap": sorted(
            ((n, f) for f, n in fam.items() if n > FAMILY_CAP), reverse=True),
        "prefixes_over_cap": sorted(
            ((n, p) for p, n in pre.items() if n > PREFIX_CAP), reverse=True),
        "roman_rows": len(romans),
        "exact_duplicates": sorted(((n, k) for k, n in exact.items() if n > 1), reverse=True),
        "distinct_names": len(exact),
    }


def report(entries: list) -> None:
    m = measure(entries)
    print(f"entries                : {m['count']}")
    print(f"d100 consecutive 1..N  : {m['consecutive']}  (max seen {m['d100_max']})")
    print(f"distinct injury names  : {m['distinct_names']}")
    print(f"rows with roman numeral: {m['roman_rows']}")
    print(f"exact duplicate names  : {len(m['exact_duplicates'])}")
    for n, k in m["exact_duplicates"][:6]:
        print(f"    x{n}  {k}")
    print(f"\nfamilies over the cap of {FAMILY_CAP}: {len(m['families_over_cap'])}")
    for n, f in m["families_over_cap"][:14]:
        print(f"    x{n:<3} {f}")
    print(f"\ntwo-word prefixes over the cap of {PREFIX_CAP}: {len(m['prefixes_over_cap'])}")
    for n, p in m["prefixes_over_cap"][:8]:
        pct = round(100 * n / max(1, m["count"]))
        print(f"    x{n:<4} {p}   ({pct}% of the table)")


def cull(entries: list) -> tuple[list, list]:
    """Keep the first-seen rows; drop the surplus of any over-used family.

    Order is preserved, so the survivors keep their relative sequence and the
    lowest-numbered member of each family is the one retained.
    """
    kept, dropped = [], []
    fam_seen: Counter = Counter()
    pre_seen: Counter = Counter()
    names_seen: set = set()

    for e in entries:
        name = e.get("injuryType", "")
        fam = family_of(name)
        pre = prefix_of(name)

        if name in names_seen:
            dropped.append((e, "exact duplicate name"))
            continue
        if fam_seen[fam] >= FAMILY_CAP:
            dropped.append((e, f"family '{fam}' already has {FAMILY_CAP}"))
            continue
        if pre_seen[pre] >= PREFIX_CAP:
            dropped.append((e, f"prefix '{pre}' already has {PREFIX_CAP}"))
            continue

        names_seen.add(name)
        fam_seen[fam] += 1
        pre_seen[pre] += 1
        kept.append(e)

    return kept, dropped


def renumber(entries: list) -> list:
    for i, e in enumerate(entries, start=1):
        e["d100"] = i
    return entries


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--report", action="store_true", help="measure the table and exit")
    ap.add_argument("--check", action="store_true",
                    help="exit 1 if the table is unnumbered or has template repeats")
    ap.add_argument("--write", action="store_true", help="apply the repair")
    ap.add_argument("--renumber-only", action="store_true",
                    help="fix the d100 sequence but keep every row")
    args = ap.parse_args()

    data = load()
    entries = data.get("entries") or []

    if args.report or not (args.check or args.write):
        report(entries)
        if not args.write:
            return 0

    if args.check:
        m = measure(entries)
        problems = []
        if not m["consecutive"]:
            problems.append(f"d100 is not consecutive 1..{m['count']}")
        if m["families_over_cap"]:
            worst = m["families_over_cap"][0]
            problems.append(f"{len(m['families_over_cap'])} name families exceed {FAMILY_CAP} "
                            f"(worst: {worst[1]} x{worst[0]})")
        if m["prefixes_over_cap"]:
            worst = m["prefixes_over_cap"][0]
            problems.append(f"{len(m['prefixes_over_cap'])} prefixes exceed {PREFIX_CAP} "
                            f"(worst: {worst[1]} x{worst[0]})")
        if m["exact_duplicates"]:
            problems.append(f"{len(m['exact_duplicates'])} duplicate names")
        for p in problems:
            print(f"  FAIL {p}")
        if problems:
            return 1
        print(f"  ok   injury table: {m['count']} rows, consecutive, no template repeats")
        return 0

    before = measure(entries)
    if args.renumber_only:
        kept, dropped = entries, []
    else:
        kept, dropped = cull(entries)
    kept = renumber(kept)

    data["entries"] = kept
    data["_repair"] = {
        "tool": "tools/dedupe-injury-table.py",
        "no_ai": True,
        "removed": len(dropped),
        "familyCap": FAMILY_CAP,
        "prefixCap": PREFIX_CAP,
        "note": ("Rows were removed, never rewritten. The generator had collapsed onto one "
                 "noun phrase and disambiguated with roman numerals; the surplus members of "
                 "each over-used family were culled and the sequence renumbered."),
    }
    TABLE.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    after = measure(kept)
    print(f"removed {len(dropped)} rows: {before['count']} -> {after['count']}")
    print(f"roman-numeral rows : {before['roman_rows']} -> {after['roman_rows']}")
    print(f"distinct names     : {before['distinct_names']} -> {after['distinct_names']}")
    print(f"consecutive d100   : {after['consecutive']}")
    reasons = Counter(r for _, r in dropped)
    for r, n in reasons.most_common(6):
        print(f"   {n:>4}  {r}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
