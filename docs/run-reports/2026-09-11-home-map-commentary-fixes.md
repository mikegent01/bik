# Run report — home boot guard, crowded-map insets, and Garden commentary

Date: 2026-09-11
Branch: `arena/01a08916-bik`

## Files

CREATED
  docs/run-reports/2026-09-11-home-map-commentary-fixes.md — this run report for the follow-up bug fix, map UI idea, and latest-event commentary.

EDITED
  index.html — initialized `DATA`, `FCOLORS`, `MONTHS`, and `CUR` with safe defaults and added `safeCurrentDate()` so `view_home()` can never crash on `CUR.day` while data is still loading or if `currentDate.json` is missing/malformed.
  Reputation-Matrix2/app/pages/maps/atlas-map-v2.js — added crowded-cluster local insets: clicking a smart cluster now zooms the main map and opens a city/town/village/local inset in the sidebar with the cluster's POIs spread into individual pickable pins.
  Reputation-Matrix2/app/pages/maps/atlas-map-v2.css — styled the local inset magnifier, numbered inset pins, type chips, and inset list controls.
  tools/tests/atlas-modes-smoke.mjs — added regression coverage proving dense clusters open a local inset, expose pickable controls, and zoom the main map.
  docs/PROVINCE_CENSUS_GUIDE.md — documented the new cluster-click city/town/village local inset behavior and clarified that it is a reader magnifier, not new geography.
  Reputation-Matrix2/data/commentaries.json — added `the_garden_above_the_fire_commentary`, a 9-section Waluigi's Cut for the latest event.

GENERATED
  None.

## Events filed

No new event filed this run.

Commentary filed instead:

COMMENTARY  `the_garden_above_the_fire_commentary` — "The Garden Above the Fire"
  source    `the_garden_above_the_fire`
  route     `#/commentary/the_garden_above_the_fire_commentary`
  length    9 sections / 3,386 words
  checker   Waluigi/1k 38.4 · CAPS/1k 26.0 · WAH 4 · source ratio 0.92x
  focus     fake-Luigi interrogation, yellow-cape lead, Kat/Ana witness beat, Luigi's recovery, the superstars answer, Dr. Toad's chart, and why the rescue arc closes while the next lead remains open

## XP awarded

No XP awarded this run.

## Index / home / RNN

- Home crash: FIXED — `CUR` now has a safe fallback before/after boot, and the rendered home feed passes the local-server JSDOM regression.
- Home/latest event data: unchanged — still points to `the_garden_above_the_fire` from the prior filing.
- SITE_UPDATES: unchanged — no new site-update item added for the commentary-only follow-up.
- RNN pending: unchanged — no event/broadcast cadence change.

## Map behavior

- Dense sheets still default to Smart POIs.
- Clicking a crowded cluster now:
  1. centers and zooms the main map on that cluster;
  2. opens a sidebar inset labelled City/Town/Village/Local based on the POI types;
  3. spreads the crowded POIs apart in a magnifier view;
  4. lets the reader click any inset pin/list row to select the real POI on the main map;
  5. offers an "Unroll all POIs here" escape hatch.
- The inset is explicitly a reader magnifier, not new geography or a new province survey.

## Verification

| Command | Result |
|---|---|
| `node --check Reputation-Matrix2/app/pages/maps/atlas-map-v2.js` | PASS |
| `node tools/tests/atlas-modes-smoke.mjs` | PASS — 33 passed, 0 failed |
| `python3 tools/check-commentaries.py --strict` | PASS — 5 filed; new commentary is 3,386 words / 0.92x source; one pre-existing related-article warning remains on the previous lava-bridge commentary |
| `node tools/tests/test-home-feed-render.mjs` | PASS — 15 passed, 0 failed, local server on port 8765 |
| `git diff --check` | PASS |
| `python3 tools/check-all.py` | PASS — all requested checks passed |

## Not done / open

- I did not add new city/town/village sub-map data files; the new behavior is a live inset generated from existing POI coordinates.
- Exact-coordinate pins are easiest through Smart-cluster click/inset; All POIs mode still unrolls every marker onto the original map coordinate.
- I did not add a new RNN item or episode for the commentary.
- I did not add a separate SITE_UPDATES item for the commentary because the latest event itself is already the active home filing.
