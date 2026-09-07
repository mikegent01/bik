# Run report — Planar map layers (Feyward/Shadeward toggle) + cartography desk + journey mode

**Date of run:** 2026-09-07 · **Branch:** `arena/01a07d38-bik`
**Purpose:** one map, four layers — tag the Raventree cluster POIs with their
plane, classify every location article against those tags (LM Studio for the
ambiguous ones), ship a dedicated `#/maps` page with the layer toggle and a
"journey so far" events mode, and flag unplaceable locations for review.
**Process:** README PR rules + `docs/PLANAR_MAPS.md` §5–6 (new).

---

## 1. Files created or edited

```
CREATED — hand-written
  tools/classify-location-planes.py                600 lines  region-anchored plane classifier +
                                                             POI/plane auditor + journey coverage +
                                                             LM Studio second opinions (--llm)
  tools/tests/test-planar-map.mjs                  32 assertions: POI tags, lifted JS resolver,
                                                             journey build/sort/layer/filter
  docs/PLANAR_MAPS.md                              new system doc (6-point README standard)
  docs/run-reports/2026-09-07-planar-maps-and-cartography-desk.md  this file

EDITED — hand-written
  Reputation-Matrix2/map-data/midlands-pois.js     + plane tags on 14 Raventree-cluster pins
                                                     (3 material / 6 shadow / 3 fey / 3 mirror…
                                                     counting the new pin: 6 shadow)
                                                     + poi_mid_skittering_grove (74.9, 10.7,
                                                     shadow, articleId skittering_grove)
                                                     + convention comment block
  Reputation-Matrix2/map-data/mushroom-kingdom-pois.js  + plane: 'material' on
                                                     poi_si_overgrown_cottage (classifier-caught)
  Reputation-Matrix2/app/pages/maps/atlas-map-v2.js  + opts.plane filter, opts.journey stops +
                                                     path polyline, stop banner, opts.focus,
                                                     control handle {focus,center,select,
                                                     getPois,getStops}; cluster radius 0.3 on
                                                     filtered layers; old callers unchanged
  Reputation-Matrix2/app/pages/maps/atlas-map-v2.css + journey badge/path/banner styles
  index.html                                       + maps-desk CSS (~40 rules)
                                                     + maps-desk JS block (~230 lines:
                                                       resolver mirror, buildJourney, view_maps,
                                                       stepper/play, mount)
                                                     + route #/maps (+ #/cartography alias)
                                                     + sidebar link, home toolkit tile,
                                                       home category entry, atlas chip
  tools/check-all.py                               + planar layers advisory + planar test
  docs/worklists/LOCATION_MAP_COVERAGE.md          + planar-layers pass section (46/62)

GENERATED (by tools/classify-location-planes.py --apply; do not hand-edit)
  Reputation-Matrix2/data/locations.json           + plane/planeConfidence/planeClue on all 62
                                                     (49 material / 6 shadow / 3 fey / 4 mirror)
                                                     + needsReview+reviewNote on astral_altar
                                                     and the_undercity_grotto
                                                     diff purely additive (252+/62 comma-only -);
                                                     second --apply run: 0 changes (idempotent)
```

No files deleted. No narrative prose touched (rule zero: no `mike` anywhere near this run).

## 2. Events filed

No events filed this run (systems PR, not a session filing).

Journey-mode data outcome, for the record: 40/115 events resolve to a
pinned location (33 of them on `midlands_full`), 11 resolve to unpinned
locations, 64 resolve nowhere — all three buckets render openly on the
desk, with off-sheet stops linking to their sheet.

## 3. XP awarded

No XP awarded this run.

## 4. What is not done / open

```
NOT DONE / OPEN
  · LM Studio live call never ran here (no model in the sandbox) — the --llm
    path is wired (same --base-url convention as expand-waluipedia.py),
    --dry-run lists exactly the 2 ambiguous articles, and rules stand on any
    LLM failure; but no second opinion was actually collected this run.
  · astral_altar + the_undercity_grotto stay needsReview by design (genuine
    ambiguity: extraplanar-without-a-layer, region-claim-without-prose).
  · 16 locations still unpinned (Ebott sheet-less cluster etc.) — unchanged
    queue, now printed by --check instead of hand-counted.
  · No browser in the sandbox: verification is node extraction tests (32/32),
    a jsdom mount smoke test (markers/badges/path/banner/stepper/fallbacks —
    PASS), served-file checks over start.py, and index.html inline-JS syntax.
    A human should still open #/maps/midlands_full/shadow/journey once.
  · Interpretation call: "not in either → mark for review" was scoped to
    genuinely unplaceable articles (2), not every Material location (49) —
    flagging Ironhold for review would be noise, not signal.
  · Feyward-clock stops (922 BF) sort before Material 1040 BF stops by filed
    year; the desk labels this as canon clock disagreement, not a bug.
```

## Verification log

```
python3 tools/classify-location-planes.py --check            exit 0 (2 review flags, honest)
python3 tools/classify-location-planes.py --check --strict   exit 1 (same 2 gaps — correct)
python3 tools/classify-location-planes.py --llm --dry-run    2 targets, no calls
python3 tools/classify-location-planes.py --json             valid, 62 verdicts
node tools/tests/test-planar-map.mjs                         32 passed, 0 failed
node tools/check-location-map-coverage.mjs                   46/62 (tool agrees exactly)
python3 tools/check-all.py                                   all 31 checks PASS (incl. 2 new)
node --check atlas-map-v2.js + index.html inline JS          OK
jsdom smoke: renderer mount + view_maps                      PASS (33 stops, badges, path,
                                                             banner, stepper, fallbacks, timers)
Python↔JS resolver parity over all 115 events                115/115
start.py served-file check                                   200s on page/module/css/data
```
