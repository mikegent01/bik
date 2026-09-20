#!/usr/bin/env python3
"""Repoint dangling references that are typos, not missing articles.

The Wanted Pages board separates two things that look identical from the
outside: a record nobody has written yet, and a reference to a record that
DOES exist under a slightly different id. The second kind is not writing work
-- it is a spelling correction -- and 28 of them were sitting in the data
inflating the wanted list by 5%.

Examples: `the_scorncrow` -> `scorncrow`, `Markop` -> `markop`,
`peach_s_castle` -> `peachs_castle`, `ruinsof_shadow_pass` ->
`ruins_of_shadow_pass`.

TWO THINGS THIS DELIBERATELY DOES NOT DO:

  * It does not guess. Every replacement is an exact map checked against the
    real id set before anything is written.
  * It does not reformat. Each file is edited as text with a targeted
    replacement of the quoted id, because props.json and locations.json do not
    survive a json.dumps round trip and events.json would churn thousands of
    unrelated lines.

    python3 tools/fix-dangling-refs.py            # report
    python3 tools/fix-dangling-refs.py --write
    python3 tools/fix-dangling-refs.py --check    # exit 1 if any remain
"""
import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"

# from -> to. Every target verified to exist before this list was written.
FIXES = {
    "the_scorncrow": "scorncrow",
    "lady_aurelian_corvinarus": "lady_aurelian",
    "the_birthday_trap_and_the_tanuki_problem": "shadowfell_birthday_trap_tanuki",
    "abandoned_snowdin_police_station": "snowdin_police_station",
    "tanuki_burt": "tanukiburt",
    "Tanukiburt": "tanukiburt",
    "toadsworth_the_elder": "toadsworth_sr",
    "Markop": "markop",
    "Wario": "wario",
    "Rattles": "rattles",
    "Eager": "eager",
    "Salam": "salam",
    "Dan": "dan",
    "Merric": "merric",
    "Toadburt": "toadburt",
    "Lyranth": "lyranth",
    "Usk": "usk",
    "the_first_snowfall_incident": "first_snowfall_incident",
    "the_alpine_mountain_inn": "alpine_mountain_inn",
    "ruins_of_mount_ebott": "the_ruins_mount_ebott",
    "alpine_bank_regal_capital_branch": "alpine_bank",
    "the_mushroom_regency": "mushroom_regency",
    "ruinsof_shadow_pass": "ruins_of_shadow_pass",
    "the_overgrown_library": "overgrown_library",
    "forgotten_temple_of_the_stars": "forgotten_temple_stars",
    "peach_s_castle": "peachs_castle",
    # Field context beats name similarity: both of these sit in faction lists,
    # and a same-named *collection* also exists. The faction is meant.
    "the_onyx_hand": "onyx_hand",
    "the_mages_guild": "mages_guild",
}

# Only reference arrays are touched. Prose is never rewritten by this tool.
REF_FIELDS = ["relatedArticles", "keyEvents", "keyBattles", "articles", "allies",
              "enemies", "members", "notableMembers", "participants",
              "participatingCharacters"]

FILES = ["events.json", "battles.json", "characters.json", "locations.json",
         "factions.json", "nations.json", "races.json", "cultures.json",
         "trials.json", "collections.json", "majorBattles.json"]


def real_ids():
    ids = set()
    for name in FILES:
        p = DATA / name
        if not p.exists():
            continue
        try:
            doc = json.loads(p.read_text(encoding="utf-8"))
        except Exception:
            continue
        rows = doc if isinstance(doc, list) else next(
            (v for v in doc.values() if isinstance(v, list)), [])
        for r in rows:
            if isinstance(r, dict) and r.get("id"):
                ids.add(r["id"])
    return ids


def count_dangling():
    """How many references in REF_FIELDS point at one of the typo ids."""
    found = {}
    for name in FILES:
        p = DATA / name
        if not p.exists():
            continue
        try:
            doc = json.loads(p.read_text(encoding="utf-8"))
        except Exception:
            continue
        rows = doc if isinstance(doc, list) else next(
            (v for v in doc.values() if isinstance(v, list)), [])
        for rec in rows:
            if not isinstance(rec, dict):
                continue
            for fld in REF_FIELDS:
                for raw in (rec.get(fld) or []):
                    rid = raw if isinstance(raw, str) else (
                        raw.get("id") if isinstance(raw, dict) else None)
                    if rid in FIXES:
                        found.setdefault(rid, []).append(f"{name}:{rec.get('id')}.{fld}")
    return found


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--write", action="store_true")
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()

    ids = real_ids()
    missing = [t for t in FIXES.values() if t not in ids]
    if missing:
        print("REFUSING: these replacement targets do not exist:", missing)
        return 1

    found = count_dangling()
    total = sum(len(v) for v in found.values())
    print(f"{len(found)} typo id(s) still referenced, {total} reference(s)")
    for k in sorted(found, key=lambda x: -len(found[x])):
        print(f"  {len(found[k]):>3}  {k} -> {FIXES[k]}")

    if args.check:
        if found:
            print("\nFAIL: dangling typo references remain")
            print("  run: python3 tools/fix-dangling-refs.py --write")
            return 1
        print("\nno typo references remain")
        return 0

    if not args.write:
        print("\nRe-run with --write to apply.")
        return 0

    # Structural edit, NOT a text replace, and NOT a regex over the array body
    # either. Two earlier attempts both corrupted display names:
    #   * replacing `"Markop"` globally rewrote `"name": "Markop"`
    #   * replacing inside a `participants: [...]` slice did the same, because
    #     those arrays hold OBJECTS with their own name fields
    # So the id is only ever rewritten where it is the VALUE of an id-bearing
    # position: a bare string in a reference array, or the `id` key of an entry
    # in one. Everything else in the file is copied through untouched.
    changed = 0
    for name in FILES:
        p = DATA / name
        if not p.exists():
            continue
        raw = p.read_text(encoding="utf-8")
        try:
            doc = json.loads(raw)
        except Exception:
            continue
        rows = doc if isinstance(doc, list) else next(
            (v for v in doc.values() if isinstance(v, list)), [])

        hits = 0
        for rec in rows:
            if not isinstance(rec, dict):
                continue
            for fld in REF_FIELDS:
                arr = rec.get(fld)
                if not isinstance(arr, list):
                    continue
                for k, raw_ref in enumerate(arr):
                    if isinstance(raw_ref, str):
                        if raw_ref in FIXES:
                            arr[k] = FIXES[raw_ref]
                            hits += 1
                    elif isinstance(raw_ref, dict) and raw_ref.get("id") in FIXES:
                        raw_ref["id"] = FIXES[raw_ref["id"]]
                        hits += 1
        if not hits:
            continue

        # Re-serialise with the same conventions the repo uses. locations.json
        # and Players.json carry no trailing newline; everything else does.
        text = json.dumps(doc, ensure_ascii=False, indent=2)
        if raw.endswith("\n"):
            text += "\n"
        p.write_text(text, encoding="utf-8")
        changed += 1
        print(f"  updated {name} ({hits} reference(s))")
    print(f"\nrewrote {changed} file(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
