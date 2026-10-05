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
        ("injury table tiers", [py, "tools/tests/test-injury-tables.py"], ROOT),
        ("wahbabel data", [py, "tools/build-wahbabel.py", "--check"], ROOT),
        ("duplicate records", [py, "tools/check-duplicates.py"], ROOT),
        ("references", [py, "tools/check-references.py"], ROOT),
        ("exhibits", [py, "tools/check-exhibits.py"], ROOT),
        ("investigations", [py, "tools/check-investigations.py"], ROOT),
        # the technology ledger cites articles by quote; a quote the article lacks fails here.
        ("technology ledger", [py, "tools/check-technology.py"], ROOT),
        ("roll registry", [py, "tools/check-rolls.py"], ROOT),
        ("battles", [py, "tools/check-battles.py"], ROOT),
        ("time codes", [py, "tools/check-timecodes.py", "--strict"], ROOT),
        ("timelines", [py, "tools/check-timelines.py"], ROOT),
        ("commentaries", [py, "tools/check-commentaries.py", "--strict"], ROOT),
        ("annotation variety", [py, "tools/check-annotation-variety.py"], ROOT),
        ("boot refs", [py, "tools/check-boot-refs.py"], ROOT),
        ("wah notes", [py, "tools/check-wahnotes.py"], ROOT),
        ("freshness", [py, "tools/check-freshness.py"], ROOT),
        ("background blurbs", [py, "tools/check-background.py"], ROOT),
        ("dossier assessments", [py, "tools/check-assessments.py"], ROOT),
        ("home feed contract", [py, "tools/check-home-feed.py"], ROOT),
        ("cover gallery", [py, "tools/check-covers.py"], ROOT),
        ("faction banners", [py, "tools/check-banners.py"], ROOT),
        ("css coverage", [py, "tools/check-css-coverage.py"], ROOT),
        ("page assets", [py, "tools/check-page-assets.py"], ROOT),
        ("commerce joins", [py, "tools/check-commerce-joins.py"], ROOT),
        ("campaign fronts", [py, "tools/build-campaign-fronts.py", "--check"], ROOT),
        ("filing updates", [py, "tools/track-filing-updates.py", "--check"], ROOT),
        # calendar.js hard-codes the world clock for 210 sync call sites; it drifted 17 days.
        ("world clock", [py, "tools/check-world-clock.py"], ROOT),
        # typo references inflate the wanted list and hide real gaps.
        ("dangling refs", [py, "tools/fix-dangling-refs.py", "--check"], ROOT),
        # annotations mirror into the wire; a stale mirror re-splits the systems.
        ("discussion mirror",
         [py, "tools/merge-discussion-systems.py", "--check"], ROOT),
        ("event art", [py, "tools/check-event-art.py", "--check"], ROOT),
        ("event titles", [py, "tools/retitle-date-prefixed-events.py", "--check"], ROOT),
        ("pond patrol docket", [py, "tools/migrate-pond-patrol-to-characters.py", "--check"], ROOT),
        ("mighdural spelling", [py, "tools/unify-mighdural-spelling.py", "--check"], ROOT),
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
        # The VHS-tape session: event + line-by-line analysis + commentary all
        # come out of one generator, so none of them can drift from the others.
        ("tape session", [py, "tools/build-tape-and-files-session.py", "--check"], ROOT),
        # Green T's playable Foundry sheet is generated, not hand-edited; this
        # also re-validates every icon path against the image-path library.
        ("green t actor", [py, "tools/build-green-t-actor.py", "--check"], ROOT),
        # Peach's Castle 955 BF: thirty era NPC sheets (court + Bowser's
        # incursion force) come out of one deterministic generator; icons are
        # re-validated against the image-path library and tokens against the
        # installed cutouts.
        ("peachs castle 955 actors", [py, "tools/build-peachs-castle-955-actors.py", "--check"], ROOT),
        # Foundry mass import: the Python bridge (split/combine/link-images/
        # apply/check/install-images), the one-file import packet for the 955
        # roster, and the module zip that the manifest URL downloads.
        ("foundry bridge", [py, "tools/tests/test-foundry-bridge.py"], ROOT),
        ("peachs castle 955 import.json", [py, "tools/foundry-bridge.py", "combine",
                                           "Reputation-Matrix2/actors/peachs-castle-955",
                                           "--out", "Reputation-Matrix2/actors/peachs-castle-955/import.json",
                                           "--world", "peachs-castle-955", "--check"], ROOT),
        ("foundry module zip", [py, "tools/build-foundry-module-zip.py", "--check"], ROOT),
        # Foundry++ studio: sorting the art folder, the manifest, the Data
        # folder links, the version/era helpers — exercised on a throwaway
        # library shaped like the real mess.
        ("foundry studio", [py, "tools/tests/test-foundry-studio.py"], ROOT),
        # Live world mirrors (split from the end-of-session export) stay importable.
        ("foundry world mirrors", [py, "tools/foundry-bridge.py", "check", "Reputation-Matrix2/actors/worlds"], ROOT),
        # Character Sheets: every character article maps to a Foundry actor
        # (live export, PC intake, 955 era sheet, or one generated from the
        # article's own words); the index, the quotes, the CR-vs-ledger rule,
        # the party visibility set and the index.html wiring are all proved.
        ("character sheets", [py, "tools/check-sheets.py"], ROOT),
        ("character sheets cast packet", [py, "tools/foundry-bridge.py", "check", "Reputation-Matrix2/actors/cast"], ROOT),
        # The live-world loop: player characters carry character sheets (never
        # NPC statblocks) at ledger XP, the spoils files are scoped to their
        # export, the suite start.py runs passes its read-only check.
        ("player sheets promoted + ledger XP", [py, "tools/promote-player-sheets.py", "--check"], ROOT),
        # The mirror is sorted the way the website organizes its cast (folders
        # from actors/folders.json, tags + colours on every actor) and the
        # organizer's rules, the identifier hygiene and the folder colours hold.
        ("actors organized like the website", [py, "tools/organize-actors.py", "--check", "--quiet"], ROOT),
        ("organize actors", [py, "tools/tests/test-organize-actors.py"], ROOT),
        ("character sheet suite", [py, "tools/tests/test-sheets-suite.py"], ROOT),
        # Spoils: every object data/inventory.json says a party character holds
        # is on the Foundry sheet (generated changes/spoils-<world>.json is
        # current, aliases never double an item, declined items stay declined).
        ("spoils to changes", [py, "tools/spoils-to-changes.py", "--check", "--quiet"], ROOT),
        # Every Liberated Toad on the Command page roster has an article (and
        # so a sheet + token); the roster is the source, the filer is idempotent.
        ("roster toads filed", [py, "tools/file-roster-toads.py", "--check", "--quiet"], ROOT),
        ("duplicate images", [py, "tools/dedupe-images.py", "--check", "--quiet"], ROOT),
        ("duplicate images tests", [py, "tools/tests/test-dedupe-images.py"], ROOT),
        ("spoils to changes tests", [py, "tools/tests/test-spoils-to-changes.py"], ROOT),
        # Judgement in the Grove: the event, its battle, and the front-page
        # wiring (latestUpdate/featured/Current fronts/SITE_UPDATES) all come
        # out of one generator, because the previous session was filed and
        # never reached the front page.
        ("judgement in the grove", [py, "tools/build-judgement-in-the-grove.py", "--check"], ROOT),
        ("judgement commentary", [py, "tools/build-judgement-commentary.py", "--check"], ROOT),
        ("regal empire POIs", [py, "tools/fix-regal-empire-pois.py", "--check"], ROOT),
    ]

    try:  # token plates: the keyer, heal, and the ComfyUI render loop against a fake server (needs Pillow + numpy + scipy)
        import PIL, numpy, scipy  # noqa: F401
        checks.append(("token plates", [py, "tools/tests/test-make-token-plates.py"], ROOT))
        checks.append(("token plate studio", [py, "tools/tests/test-token-plate-studio.py"], ROOT))
    except ImportError:
        pass

    if shutil.which("node"):
        checks.append(("Bros discovery test", ["node", "tools/tests/test_bros_discovery.mjs"], RM))
        checks.append(("Foundry ATB module", ["node", "tools/tests/test-active-time-battle-module.mjs"], ROOT))
        checks.append(("Foundry mass import module", ["node", "tools/tests/test-mass-import-module.mjs"], ROOT))
        checks.append(("character sheets page", ["node", "tools/tests/test-sheets-page.mjs"], ROOT))
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
        # The alliance solve behind political/factions map mode. It used to be
        # recomputed per render and froze the page; these pin the caches.
        checks.append(("alliance cache", ["node", "tools/tests/test-alliance-cache.mjs"], ROOT))
        # Categorical atlas lenses (species/religion/culture/factions) + census.
        checks.append(("map lenses", ["node", "tools/tests/test-map-lenses.mjs"], ROOT))
        checks.append(("map census", ["node", "tools/tests/test-map-census.mjs"], ROOT))
        # Settlement tiering: co-located pins grouped under City/Town/Village,
        # and the hyper-zoom window that keeps every member clickable.
        checks.append(("map tiers", ["node", "tools/tests/test-map-tiers.mjs"], ROOT))
        # Transit, industrialization & train networks connecting settlements.
        checks.append(("map transit", ["node", "tools/tests/test-map-transit.mjs"], ROOT))
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
        # first-seen/last-seen chronology: clock separation + the 2374 BF flag.
        checks.append(("appearance chronology",
                       ["node", "tools/tests/test-appearance-chronology.mjs"], ROOT))
        # The one site instrument: the ambient playlist owns ALL music,
        # Reading Desk cues included, gated by the desk's own keys.
        checks.append(("ambient playlist",
                       ["node", "tools/tests/test-waluipedia-ambient.mjs"], ROOT))
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
