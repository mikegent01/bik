#!/usr/bin/env python3
"""Apply the approved fixes from the Regal Empire POI audit.

Source of truth: docs/audits/2026-09-13-regal-empire-poi-audit.md

This script only applies the findings that need no canon ruling:

  1. Normalise bare `intelReq: <n>` to `{ faction: 'regal_empire', level: <n> }`
     on regal_empire POIs. The renderer (atlas-map-v2.js L319-325) tolerates
     both forms, but a bare number silently drops the faction from the tooltip.
  2. Retype six POIs whose `type` contradicts their own description.
  3. Fix the self-contradicting Road Warden's Spire description.

It deliberately does NOT touch:
  * the Midgrual / Mighdural spelling split (needs a canon ruling)
  * the three-way capital_city collision incl. Ironhold (needs a canon ruling)
  * the two merge candidates (Herald's Plaza, Scribes' Guildhall)
  * the two cross-faction intel gates (flagged "confirm intentional")

Usage:
    python3 tools/fix-regal-empire-pois.py --check
    python3 tools/fix-regal-empire-pois.py --write
"""
import argparse
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MAPDATA = ROOT / "Reputation-Matrix2" / "map-data"

# Retypes: poi id -> (from, to). Each is justified in the audit's retype table.
RETYPES = {
    # An intelligence headquarters is not a prison.
    "poi_mid_silent_service_hq": ("prison", "tower"),
    # A disguised warehouse archive is not a prison either.
    "poi_vm_silent_service_archive": ("prison", "landmark"),
    # A parliament building is not a capital city. This also clears one of the
    # three colliding capital_city markers in the Midlands.
    "poi_mid_imperial_diet": ("capital_city", "landmark"),
    # A walled district of the capital is not a village.
    "poi_mid_diplomatic_quarter": ("village", "town"),
    # Estates and villas are not villages.
    "poi_bp_imperial_villa": ("village", "town"),
    "poi_yb_veridia_estate": ("village", "town"),
}

# The description repeats "watchtower" twice, the second time as a redundant
# clause that reads like an editing artifact.
SPIRE_OLD = ("A massive, magically-powered watchtower that overlooks the great Imperial roads. "
             "It also serves as a watchtower for the Imperial Guard, monitoring the roads for "
             "bandits.")
SPIRE_NEW = ("A massive, magically-powered watchtower that overlooks the great Imperial roads, "
             "manned by the Imperial Guard and monitoring the highways for bandits.")

ID_RE = re.compile(r"""id:\s*['"]poi_[A-Za-z0-9_]+['"]""")


def poi_blocks(text):
    """Yield (start, end, block) for each POI object literal.

    Brace-matched rather than regex-delimited: a POI may contain a nested
    object (``intelReq: { ... }``), and a non-nesting pattern silently cuts the
    block short at the inner brace, which is how four retypes were missed on
    the first run.
    """
    for m in ID_RE.finditer(text):
        start = text.rfind("{", 0, m.start())
        if start < 0:
            continue
        depth = 0
        for i in range(start, len(text)):
            if text[i] == "{":
                depth += 1
            elif text[i] == "}":
                depth -= 1
                if depth == 0:
                    yield start, i + 1, text[start:i + 1]
                    break


def block_id(blk):
    m = re.search(r"""id:\s*['"](poi_[A-Za-z0-9_]+)['"]""", blk)
    return m.group(1) if m else None


def apply_to_text(text):
    """Return (new_text, changes[])."""
    changes = []
    out = []
    last = 0
    for start, end, blk in poi_blocks(text):
        pid = block_id(blk)
        new = blk

        # 1. intelReq normalisation - regal_empire POIs only.
        if "regal_empire" in new:
            m = re.search(r"intelReq:\s*(\d+)\s*,", new)
            if m:
                new = new.replace(
                    m.group(0),
                    f"intelReq: {{ faction: 'regal_empire', level: {m.group(1)} }},", 1)
                changes.append(f"{pid}: intelReq {m.group(1)} -> object form")

        # 2. Retypes.
        if pid in RETYPES:
            was, should = RETYPES[pid]
            m = re.search(r"""type:\s*['"]([a-z_]+)['"]""", new)
            if m and m.group(1) == was:
                new = new[:m.start()] + f"type: '{should}'" + new[m.end():]
                changes.append(f"{pid}: type {was} -> {should}")

        out.append(text[last:start])
        out.append(new)
        last = end
    out.append(text[last:])
    text = "".join(out)

    # 3. The Road Warden's Spire description.
    if SPIRE_OLD in text:
        text = text.replace(SPIRE_OLD, SPIRE_NEW, 1)
        changes.append("poi_vm_road_wardens_spire: removed the duplicated watchtower clause")

    return text, changes


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true")
    ap.add_argument("--write", action="store_true")
    args = ap.parse_args()

    all_changes = []
    pending = []
    for path in sorted(MAPDATA.glob("*-pois.js")):
        text = path.read_text(encoding="utf-8")
        new, changes = apply_to_text(text)
        if changes:
            all_changes += [f"{path.name}  {c}" for c in changes]
            pending.append((path, new))

    if args.check:
        if all_changes:
            print("regal empire POIs: audit fixes are not applied:")
            for c in all_changes:
                print("  -", c)
            print("  run: python3 tools/fix-regal-empire-pois.py --write")
            return 1
        print("regal empire POIs: audit fixes applied (intelReq form, types, description).")
        return 0

    if not args.write:
        for c in all_changes:
            print(c)
        print(f"\n{len(all_changes)} change(s) pending. Re-run with --write to apply.")
        return 0

    for path, new in pending:
        path.write_text(new, encoding="utf-8")
    for c in all_changes:
        print(c)
    print(f"\napplied {len(all_changes)} change(s) across {len(pending)} file(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
