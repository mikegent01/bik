#!/usr/bin/env python3
"""Settle the Midgrual / Mighdural spelling split on one canonical form.

GM ruling: they are the same place. `Mighdural` is canonical.

Why that direction, given `Midgrual` appeared in plenty of prose: the two forms
are not equal weight. `Mighdural` already owns machine-readable identifiers --
`port_of_mighdural`, `mighdural_dungeon_cell_damp`, `mighdural_clock_tower_
winder_high`, `mighdural_kitchen_duty_onions`,
`sharpen_every_sword_in_mighdural_barracks_ouch` -- while every occurrence of
`Midgrual` is display prose. Standardising on `Mighdural` therefore renames no
ids, breaks no lookups, and needs no redirect; the reverse direction would have
had to rewrite five ids and everything referencing them.

Case is preserved: Midgrual -> Mighdural, MIDGRUAL -> MIGHDURAL,
Midgruals -> Mighdurals.

Docs under docs/audits/ and docs/run-reports/ are left alone on purpose: they
are dated records of what was true when they were written, and rewriting the
audit that *reported* the split would erase the finding.

Usage:
    python3 tools/unify-mighdural-spelling.py --check
    python3 tools/unify-mighdural-spelling.py --write
"""
import argparse
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

SUFFIXES = {".js", ".json", ".html", ".md", ".py"}
SKIP_DIRS = {".git", "node_modules", "__pycache__"}
# Dated records of a past state - see the docstring.
SKIP_PREFIXES = ("docs/audits/", "docs/run-reports/", "docs/legacy/")

REPLACEMENTS = [("MIDGRUAL", "MIGHDURAL"), ("Midgrual", "Mighdural"),
                ("midgrual", "mighdural")]


def candidates():
    for path in sorted(ROOT.rglob("*")):
        if not path.is_file() or path.suffix not in SUFFIXES:
            continue
        rel = path.relative_to(ROOT).as_posix()
        if any(part in SKIP_DIRS for part in path.parts):
            continue
        if rel.startswith(SKIP_PREFIXES):
            continue
        # This script and the audit-fix script both *discuss* the split in
        # their prose; rewriting them would corrupt the explanation.
        if path.name in (Path(__file__).name, "fix-regal-empire-pois.py"):
            continue
        yield path, rel


def convert(text):
    n = 0
    for old, new in REPLACEMENTS:
        n += text.count(old)
        text = text.replace(old, new)
    return text, n


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true")
    ap.add_argument("--write", action="store_true")
    args = ap.parse_args()

    hits = []
    for path, rel in candidates():
        try:
            text = path.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError):
            continue
        new, n = convert(text)
        if n:
            hits.append((path, rel, new, n))

    if args.check:
        if hits:
            print("mighdural spelling: the non-canonical form is still filed:")
            for _, rel, _, n in hits:
                print(f"  {n:>3}  {rel}")
            print("  run: python3 tools/unify-mighdural-spelling.py --write")
            return 1
        print("mighdural spelling: one canonical spelling in use.")
        return 0

    if not args.write:
        for _, rel, _, n in hits:
            print(f"{n:>3}  {rel}")
        print(f"\n{sum(h[3] for h in hits)} occurrence(s) in {len(hits)} file(s). "
              "Re-run with --write.")
        return 0

    for path, rel, new, n in hits:
        path.write_text(new, encoding="utf-8")
        print(f"{n:>3}  {rel}")
    print(f"\nrewrote {sum(h[3] for h in hits)} occurrence(s) in {len(hits)} file(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
