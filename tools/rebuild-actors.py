#!/usr/bin/env python3
"""Regenerate every actor export in Reputation-Matrix2/actors/.

Deterministic, stdlib only, no AI. One command rebuilds the whole folder from
the untouched `original-*.json` exports, so nothing in it is a hand-edited
artefact nobody can reproduce.

For each `original-fvtt-Actor-NAME.json` it writes:

  fvtt-Actor-NAME.json               repaired, import-ready
  fvtt-Actor-NAME-NO-SPECIES.json    same, minus the species (characters only)

The NO-SPECIES variant exists because "Only a single Species can be added to a
Player Character" is not a file defect: dnd5e refuses a second species, and
Plutonium reports the refusal as a count mismatch. Import the NO-SPECIES file
when you intend to add a species through Plutonium.

Per-actor overrides live in OVERRIDES below, so a decision like "Feyward Dan
keeps the second species because it carries the mechanics" is recorded in code
rather than in someone's memory.

Usage:
    python3 tools/rebuild-actors.py
    python3 tools/rebuild-actors.py --check     # verify, write nothing
"""

import argparse
import glob
import json
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ACTORS = os.path.join(ROOT, "Reputation-Matrix2", "actors")
SANITIZER = os.path.join(ROOT, "tools", "sanitize-foundry-actor.py")
BUILD_AURELIAN = os.path.join(ROOT, "tools", "build-aurelian-pc.py")
BUILD_WALUIGI = os.path.join(ROOT, "tools", "build-waluigi-pc.py")

# Extra sanitizer flags per source file.
OVERRIDES = {
    # Dan carries two species: "Toad - Feyward Variant" (0 advancements) and
    # "Grung" (3 advancements, climb speed, full description). Keep-first
    # would discard the mechanics, so keep the later one.
    "original-fvtt-Actor-feyward-dan-YDfvgm2dGArNeEsE.json": ["--keep-species", "last"],
}

# Generated rather than sanitized from an original.
GENERATED = {
    "fvtt-Actor-lady-aurelian-corvinarus-PC.json": [sys.executable, BUILD_AURELIAN],
    "fvtt-Actor-waluigi-PC.json": [sys.executable, BUILD_WALUIGI],
}


def run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true",
                    help="verify the folder is clean; write nothing")
    args = ap.parse_args()

    if not os.path.isdir(ACTORS):
        print("FATAL: %s not found" % ACTORS)
        return 2

    originals = sorted(glob.glob(os.path.join(ACTORS, "original-fvtt-Actor-*.json")))
    if not originals:
        print("FATAL: no original-*.json exports found")
        return 2

    written = []
    failures = []

    if not args.check:
        # 1. generated actors first (Aurelian's PC build)
        for out, cmd in sorted(GENERATED.items()):
            res = run(cmd)
            if res.returncode != 0:
                failures.append("%s: %s" % (out, res.stdout.strip().splitlines()[-1:]))
            else:
                written.append(out)

        # 2. repair every original
        for src in originals:
            base = os.path.basename(src)
            out = base[len("original-"):]
            cmd = [sys.executable, SANITIZER, src]
            cmd += OVERRIDES.get(base, [])
            cmd += ["--write", os.path.join(ACTORS, out)]
            res = run(cmd)
            if res.returncode not in (0, 1):
                failures.append("%s: sanitizer exit %d" % (out, res.returncode))
            else:
                written.append(out)

        # 3. NO-SPECIES variant for every character that has a species
        for path in sorted(glob.glob(os.path.join(ACTORS, "fvtt-Actor-*.json"))):
            if "NO-SPECIES" in path:
                continue
            with open(path, encoding="utf-8") as fh:
                doc = json.load(fh)
            if doc.get("type") != "character":
                continue
            if not [i for i in doc.get("items") or [] if i.get("type") == "race"]:
                continue
            base = os.path.basename(path)
            src = os.path.join(ACTORS, "original-" + base)
            if not os.path.isfile(src):
                src = path          # generated actors have no original
            out = base.replace(".json", "-NO-SPECIES.json")
            cmd = [sys.executable, SANITIZER, src]
            cmd += OVERRIDES.get("original-" + base, [])
            cmd += ["--clear-species", "--write", os.path.join(ACTORS, out)]
            res = run(cmd)
            if res.returncode not in (0, 1):
                failures.append("%s: sanitizer exit %d" % (out, res.returncode))
            else:
                written.append(out)

    # ---- verify ----------------------------------------------------------
    print("%-54s %-10s %6s  %s" % ("file", "type", "items", "species"))
    print("-" * 88)
    problems = list(failures)
    for path in sorted(glob.glob(os.path.join(ACTORS, "fvtt-Actor-*.json"))):
        base = os.path.basename(path)
        with open(path, encoding="utf-8") as fh:
            doc = json.load(fh)
        items = doc.get("items") or []
        ids = {i.get("_id") for i in items}
        races = [i["name"] for i in items if i.get("type") == "race"]
        det = (doc.get("system") or {}).get("details") or {}
        ptr = det.get("race")

        note = ", ".join(races) if races else "-"
        print("%-54s %-10s %6d  %s" % (base[11:], doc.get("type"), len(items), note))

        if doc.get("type") == "character" and len(races) > 1:
            problems.append("%s: %d species on a character" % (base, len(races)))
        if "NO-SPECIES" in base:
            if races:
                problems.append("%s: still has a species item" % base)
            if ptr is not None:
                problems.append("%s: details.race is %r, expected None" % (base, ptr))
        if ptr and len(str(ptr)) == 16 and str(ptr).isalnum() and ptr not in ids:
            problems.append("%s: details.race points at missing %s" % (base, ptr))
        dupes = len(ids) != len(items)
        if dupes:
            problems.append("%s: duplicate item ids" % base)

    # every shipped file must pass the sanitizer clean
    res = run([sys.executable, SANITIZER,
               os.path.join(ACTORS, "fvtt-Actor-*.json"), "--check"])
    if res.returncode != 0:
        problems.append("sanitizer --check exited %d" % res.returncode)

    print()
    if problems:
        print("FAILED:")
        for p in problems:
            print("  - %s" % p)
        return 1
    print("all actor exports clean (sanitizer --check exit 0)")
    if written:
        print("regenerated %d files" % len(written))
    return 0


if __name__ == "__main__":
    sys.exit(main())
