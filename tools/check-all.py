#!/usr/bin/env python3
"""Run the repo's routine verification checks in one command.

This is a wrapper, not a replacement for the individual tools. It exists so a
run report can say "check-all passed" and still show exactly which underlying
checks ran. Legacy warnings remain visible in each tool's own output; this
wrapper only fails when an underlying command exits nonzero.

Usage:
    python3 tools/check-all.py
    python3 tools/check-all.py --with-build   # also run npm build if possible
"""
from __future__ import annotations

import argparse
import os
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RM = ROOT / "Reputation-Matrix2"


def run(label: str, cmd: list[str], cwd: Path = ROOT) -> bool:
    print(f"\n=== {label} ===", flush=True)
    print("$", " ".join(cmd), flush=True)
    proc = subprocess.run(cmd, cwd=str(cwd))
    print(f"--- {label}: {'PASS' if proc.returncode == 0 else 'FAIL'} ({proc.returncode})", flush=True)
    return proc.returncode == 0


def main() -> int:
    ap = argparse.ArgumentParser(description="Run routine Waluipedia verification checks")
    ap.add_argument("--with-build", action="store_true", help="also run npm run build in Reputation-Matrix2 if npm is installed")
    args = ap.parse_args()

    py = sys.executable or "python3"
    checks: list[tuple[str, list[str], Path]] = [
        ("local paths", [py, "tools/check-local-paths.py"], ROOT),
        ("injury table", [py, "tools/generate-injury-table.py", "--check"], ROOT),
        ("injury repeats", [py, "tools/dedupe-injury-table.py", "--check"], ROOT),
        ("wahbabel data", [py, "tools/build-wahbabel.py", "--check"], ROOT),
        ("duplicate records", [py, "tools/check-duplicates.py"], ROOT),
        ("references", [py, "tools/check-references.py"], ROOT),
        ("exhibits", [py, "tools/check-exhibits.py"], ROOT),
        ("investigations", [py, "tools/check-investigations.py"], ROOT),
        ("roll registry", [py, "tools/check-rolls.py"], ROOT),
        ("battles", [py, "tools/check-battles.py"], ROOT),
        ("time codes", [py, "tools/check-timecodes.py", "--strict"], ROOT),
        ("commentaries", [py, "tools/check-commentaries.py", "--strict"], ROOT),
        ("annotation variety", [py, "tools/check-annotation-variety.py"], ROOT),
        ("boot refs", [py, "tools/check-boot-refs.py"], ROOT),
        ("wah notes", [py, "tools/check-wahnotes.py"], ROOT),
        ("freshness", [py, "tools/check-freshness.py"], ROOT),
        ("background blurbs", [py, "tools/check-background.py"], ROOT),
        ("dossier assessments", [py, "tools/check-assessments.py"], ROOT),
        ("home feed contract", [py, "tools/check-home-feed.py"], ROOT),
        ("cover gallery", [py, "tools/check-covers.py"], ROOT),
        ("RNN broadcast data", [py, "tools/build-rnn-broadcast.py", "--check"], ROOT),
        ("Bros Attack sync", [py, "tools/sync_bros_attacks.py", "--check"], RM),
        ("Foundry sanitizer", [py, "tools/tests/test-sanitize-foundry-actor.py"], ROOT),
        ("session loot", [py, "tools/tests/test-session-loot.py"], ROOT),
        ("players split", [py, "tools/tests/test-players-split.py"], ROOT),
        ("actor exports", [py, "tools/rebuild-actors.py", "--check"], ROOT),
        # A pin's x/y is a percent of the painting, so the painting is the
        # authority on what is at that coordinate. This caught the whole
        # Raventree Manor district floating in Aona's Scorn.
        ("POI placement", [py, "tools/check-poi-placement.py", "--check"], ROOT),
    ]

    if shutil.which("node"):
        checks.append(("Bros discovery test", ["node", "tools/tests/test_bros_discovery.mjs"], RM))
        checks.append(("Foundry ATB module", ["node", "tools/tests/test-active-time-battle-module.mjs"], ROOT))
        # Search quality: pure functions extracted from index.html, run against
        # the real data. No server needed, unlike the live jsdom counterpart
        # (tools/tests/test-search-live.mjs, which needs :8765).
        checks.append(("search quality", ["node", "tools/tests/test-search-quality.mjs"], ROOT))
        checks.append(("session nav", ["node", "tools/tests/test-session-nav.mjs"], ROOT))
        # Location articles show a map-pin preview; this prints what the map owes.
        checks.append(("location map coverage", ["node", "tools/check-location-map-coverage.mjs"], ROOT))
        checks.append(("location map preview", ["node", "tools/tests/test-location-map-preview.mjs"], ROOT))
        # Planar map layers (Feyward/Shadeward toggle + journey mode data).
        checks.append(("planar map layers", [py, "tools/classify-location-planes.py", "--check"], ROOT))
        checks.append(("planar map test", ["node", "tools/tests/test-planar-map.mjs"], ROOT))
        # Categorical atlas lenses (species/religion/culture/factions) + census.
        checks.append(("map lenses", ["node", "tools/tests/test-map-lenses.mjs"], ROOT))
        checks.append(("map census", ["node", "tools/tests/test-map-census.mjs"], ROOT))
        # Settlement tiering: co-located pins grouped under City/Town/Village,
        # and the hyper-zoom window that keeps every member clickable.
        checks.append(("map tiers", ["node", "tools/tests/test-map-tiers.mjs"], ROOT))
        # Dot colour: every filed POI type resolves to a legible family.
        checks.append(("map poi types", ["node", "tools/tests/test-map-poi-types.mjs"], ROOT))
        # Province census: POIs merged into provinces, borders, and the filed
        # snapshot that proves the atlas, the desk and power projection agree.
        checks.append(("province census model", ["node", "tools/tests/test-map-provinces.mjs"], ROOT))
        checks.append(("province census snapshot", ["node", "tools/build-province-census.mjs", "--check"], ROOT))
        checks.append(("province census", ["node", "tools/check-province-census.mjs"], ROOT))
        checks.append(("province census card", ["node", "tools/tests/test-atlas-province-card.mjs"], ROOT))
        # Sidebar drawers: the 0fr collapse needs exactly one .navbody child.
        checks.append(("sidebar collapse", ["node", "tools/tests/test-nav-collapse.mjs"], ROOT))
        checks.append(("crime and punishment", ["node", "tools/tests/test-crime-and-punishment.mjs"], ROOT))
        checks.append(("hub pages", ["node", "tools/tests/test-hub-pages.mjs"], ROOT))
        checks.append(("wahbabel", ["node", "tools/tests/test-wahbabel.mjs"], ROOT))
        # search relevance needs a static server on 8765; run it manually.
    else:
        print("\n=== Bros discovery test ===\nSKIP: node is not on PATH")

    if args.with_build:
        if shutil.which("npm"):
            checks.append(("Reputation-Matrix2 build", ["npm", "run", "build"], RM))
        else:
            print("\n=== Reputation-Matrix2 build ===\nSKIP: npm is not on PATH")

    results = [(label, run(label, cmd, cwd)) for label, cmd, cwd in checks]
    failed = [label for label, ok in results if not ok]
    print("\n=== SUMMARY ===")
    for label, ok in results:
        print(f"{'PASS' if ok else 'FAIL'}  {label}")
    if failed:
        print("\nFailed checks:", ", ".join(failed))
        return 1
    print("\nAll requested checks passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
