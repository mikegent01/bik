# Run report — location articles get their pin on the map; the Regal Diet stops being transparent

**Date:** 6 September 2026
**Branch:** `arena/01a074f3-bik`
**World clock:** 5 Aethel, 1040 BF

---

## Purpose

Three things the owner asked for, in their words:

1. "have loaction pages articles link to show a mini preiview of the actual loaction
   on the map"
2. "if its not on the map we have to plot it can you make a list of which ones we need
   and do some already if you can using context clues"
3. "the regal diet CSS is broken its transparent when it is not meant to"

Plus the standing instruction from the README: open a pull request for the work.

---

## 1. Files created or edited

```
CREATED
  tools/check-location-map-coverage.mjs        new audit: location articles ↔ map pins, advisory + --strict + --json
  tools/tests/test-location-map-preview.mjs    new smoke test: lifts the resolver/renderer out of index.html, runs it on real data
  docs/worklists/LOCATION_MAP_COVERAGE.md      new survey queue: the clue behind every plotted pin, and the 16 the map still owes
  docs/run-reports/2026-09-06-location-map-previews-and-diet-css.md   this report

EDITED — reader surface
  index.html                                   + location-pin resolver (buildLocPinIndex / locPinsFor), the .locmap preview
                                               panel + mountLocationMapPreview(), hooked into view_article();
                                               + atlas deep link #/atlas/<nation>/<mapId>/<poiId> (Router, view_atlasNation,
                                               atlasMapApplet, mountAtlasMap); + scoped CSS: the Diet variable bridge and
                                               the .locmap panel styles

EDITED — map data (hand-written data, not generated)
  Reputation-Matrix2/map-data/midlands-pois.js          + 22 pins (Raventree/planar cluster, Midgruals, capital, Vellanet Rise),
                                                        articleId backfilled on poi_mid_raventree_manor + poi_mid_aegis_command
  Reputation-Matrix2/map-data/mushroom-kingdom-pois.js  + 5 pins (Star Fountain, capitol ruins, Koopa barracks ruins,
                                                        Delfino cottage, Forgotten Coastal Cove); capitol pin serves both
                                                        capitol articles via an articleId array
  Reputation-Matrix2/map-data/middle-earth/Rohan.js     + 4 pins (Rohan hillforts / Shadow Pass); + fogOfWar key
  Reputation-Matrix2/map-data/middle-earth-pois.js      ~ Rohan wired in at last (import + 2 spreads) — Rohan had a full
                                                        POI file that no sheet ever spread
  Reputation-Matrix2/map-data/internet/surface-web.js   + 1 pin (Mushroom Regency Hall of Records)
  Reputation-Matrix2/map-data/connectopia-pois.js       first pin on a sheet that had zero (Block Farm Village)
  Reputation-Matrix2/map-data/grand-country-pois.js     first pin on a sheet that had zero (Eldridge Hillfort)
  Reputation-Matrix2/map-data/baldora-plains-pois.js    articleId backfill: poi_bp_vigilance → vigilance
  Reputation-Matrix2/map-data/mountain-enclave-pois.js  articleId backfill: poi_me_rogueport → rogueport_bay
  Reputation-Matrix2/map-data/mushroom-city-pois.js     articleId backfill: poi_mc_regency_parliament → mushroom_regency

EDITED — the atlas applet
  Reputation-Matrix2/app/pages/maps/atlas-map-v2.js     mountAtlasMapV2(host, mapId, opts) — opts.focusPoi selects and
                                                        centres a pin on load (the deep-link target); bump to ?v=map4

EDITED — routing docs
  tools/check-all.py                           + "location map coverage" and "location map preview" checks
  README.md                                    + routine job: check what the map owes the locations
  docs/CROSS_SYSTEM_UPDATES.md                 ~ POI section: articleId is what links a location article to its pin

GENERATED
  (none — no generated file was touched)
```

## 2. Events filed

None. This run is systems and cartography, not a session filing.

## 3. XP awarded

None. No session transcript was processed.

---

## What the feature does

A location article now opens with an **"On the map"** panel: a 16:9 crop of the
painted tactical sheet, letterbox-correct, centred on that location's own pin, with
a pulsing marker, the pin's name, its coordinates, the three nearest surveyed
neighbours in miles, and chips for *Open in the World Atlas* / *Wider view* /
*Closer look*. The atlas chip routes `#/atlas/<nation>/<mapId>/<poiId>`; the atlas
mounts that sheet with the pin already selected and centred, so the reader goes
from article to map and back without hunting.

The link is **explicit**: a POI carries `articleId`. No fuzzy name matching — the
old substring heuristic paired *The CORE (Underground)* with a quantum computing
core on the Internet sheet and *Darius's Planar Sanctum* with a generic "Sanctum"
in Earth Land. A confident wrong pin is worse than an honest gap, so a location
with no pin gets a dashed **"Not on the tactical map yet"** panel that names its
filed region and points at the survey queue instead of guessing a coordinate.

Coverage moved from **14/61** (five of them only via a hard-coded specials table) to
**45/61** location articles showing a pin.

## The Regal Diet transparency, diagnosed

`regal-parliament.css` was authored against `app/styles/global.css`
(`--sidebar-bg`, `--main-bg`, `--border-color`, `--text-color`, `--text-secondary`,
`--font-display`, `--font-mono`). The standalone system page loads global.css; the
Waluipedia shell loads `waluipedia.css`, which defines none of those names. Every
`background: var(--sidebar-bg)` in the Diet therefore computed to *nothing*: vote
card, coalition blocks, tally bar, planar cards and the seat modal all floated
transparent over the page with no borders and inherited text colour.
`.unique-system-container` and `.loading-state` were in the same boat — their rules
live in `faction-systems-base.css` / `components.css`, which the shell never loads.

The fix is a **scoped bridge**, not a rewrite: `#regal-diet-app` now defines the
names the Diet expects, mapped onto this site's theme tokens (`--panel2`,
`--border`, `--text`, `--muted`, `--accent2`), so the chamber is opaque in both the
dark and light themes and the standalone page keeps its own global.css values
untouched. Two container rules (`.unique-system-container`, `.loading-state`) and a
`.blink` keyframe complete it. Nothing outside `#regal-diet-app` can inherit any of
it, per `docs/CSS_STYLE_GUIDE.md`.

## Verification

```
$ python3 tools/check-all.py            → all checks PASS, including the two new ones
$ node tools/check-location-map-coverage.mjs
    Location ↔ map-pin coverage — 45/61 location articles show a pin
    UNPLOTTED — 16 (all queued with reasons in docs/worklists/LOCATION_MAP_COVERAGE.md)
    no dangling articleId
$ node tools/tests/test-location-map-preview.mjs   → 26 passed, 0 failed
$ node --check on every inline index.html script block and atlas-map-v2.js → clean
$ static server on :8765 — /, index.html, fullmap.png, atlas-map-v2.js?v=map4, map-data.js → HTTP 200
```

## NOT DONE (and why)

- **16 location articles still unplotted.** Nine of them (the whole Mount Ebott /
  Monster Underground cluster plus the Old World embassy pair) have *no painted
  sheet at all*; inventing coordinates on someone else's artwork would put Snowdin
  in the Warhammer ocean. Dreamland, Star Haven, the Astral Sea and Animatopia's
  Undercity are sheet-less too. `the_dread_mansion` is unmapped *by canon*
  ("Unconfirmed; isolated grounds"), `wariocopter` is a vehicle, and
  `forgotten_temple_stars` has a conflicting candidate pin that needs a reading of
  the Prison Island filings before either choice is honest. All of it is in
  `docs/worklists/LOCATION_MAP_COVERAGE.md` with the unblock condition per entry.
- **Two suspected duplicate location records** (`ruins_of_the_mushroom_capitol` /
  `…_kingdom_capitol`, `legion_embassy_old_world` / `iron_legion_old_world_embassy`)
  were not merged — remaster, don't rewrite. The capitol pair shares one pin via an
  `articleId` array until the merge is decided.
- **No browser in this sandbox**, so the Diet bridge and the preview crop were
  verified by lifted-function tests, syntax checks and asset 200s rather than a
  screenshot. The live preview on :8765 is the place to eyeball both.
