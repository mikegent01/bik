# Run report — 2026-09-09 · The province census, real borders, and the shortlist

Turned the atlas from 2,582 unreadable pins into 220 provinces with computed
borders, a census that crowns a holder for each one from the POI data already
filed, a per-province dossier on both map surfaces, and a shortlist that tells a
player which pin to actually pick. Power Projection now reads the same roll-up
where its own pin-count rule names nobody.

No canon was invented: the census is arithmetic over `pointsOfInterest` and
`PROVINCE_POLITICS`, and where the two disagree the atlas says so rather than
quietly picking a side.

## Files created or edited

**CREATED — the model**
- `Reputation-Matrix2/app/pages/maps/map-provinces.js` (806 lines, hand-written)
  — the whole census as a pure module: `poiPower`, `censusOf`,
  `buildProvinceCensus`, `filedProvincesFor`, `provinceBorders` (power-weighted
  Laguerre cells clipped to the surveyed box, then to the inflated hull),
  `convexHull`/`polygonArea`/`clipHalfPlane`/`intersectConvex`/`rectPolygon`,
  `sameProvince`/`uniquePins`/`assignPois`/`provinceName`, `filedDelta`,
  `nationRollup`, `shortlist`, `hash32`. No DOM, no imports, no `Math.random`.
- `docs/PROVINCE_CENSUS_GUIDE.md` (185 lines) — the seven rules in order, what
  is generated vs filed, the reader surface, the canon boundaries, the
  verification commands, and "Filing a new province, or fixing one".

**GENERATED (do not hand-edit)**
- `Reputation-Matrix2/data/provinceCensus.json` (471,752 bytes) — the filed
  snapshot of every `*_full` realm: 220 provinces with border polygons, control
  shares, seat pin, pillars, ledger drift, and the nation roll-up. Written by
  `node tools/build-province-census.mjs`; header records the byte length, the
  input file names and the note that this is derived data. Nothing reads it into
  the atlas — the atlas computes live from the same module, so the snapshot can
  only ever lag, never disagree.
- `tools/build-province-census.mjs` (161 lines) — the generator; `--check`
  compares bytes and fails if the snapshot is stale.
- `tools/check-province-census.mjs` (139 lines) — the invariants: no pin lost,
  no pin governed twice, every border ring closed and inside the sheet, ledger
  faction ids resolve against `systems/faction-registry.js`, snapshot
  freshness, plus an advisory list of filed provinces sitting far from any pin.

**CREATED — tests**
- `tools/tests/test-map-provinces.mjs` (218 lines) — the model over the real
  Mushroom Kingdom and Midlands data: 69 checks, including that the province
  tiles sum to the sheet's area, that every ring is convex and free of duplicate
  vertices, and that a reroll of `buildProvinceCensus` is byte-identical.
- `tools/tests/test-atlas-province-card.mjs` (95 lines) — extracts
  `prettyId`, `atlasProvinceShareBar` and `atlasProvinceCensusHtml` out of
  `index.html` and renders them against the real census; asserts an injected XSS
  attempt comes back escaped, and greps for the wiring (panel in
  `view_atlasNation`, recount on `atlasSwitchMap`, `__atlasMapHandle`,
  `focusProvince`, the corrected `global-map-analysis` import path).
- `tools/tests/atlas-provinces-smoke.mjs` (148 lines) — jsdom, mounts the real
  `atlas-map-v2.js`: 44 checks over borders rendering, the Provinces lens,
  click-to-open, `focusProvince`, and the shortlist (reroll determinism,
  keyboard nav, `Enter` selecting a pin). Not in `check-all.py`, because jsdom
  is not committed — same standing as `atlas-modes-smoke.mjs`.

**EDITED**
- `Reputation-Matrix2/app/pages/maps/atlas-map-v2.js` +324/−9 — census computed
  before the mode block and deduped with `uniquePins`; `modes.provinces` lens;
  `bordersSvg` + province labels; click-a-plot selection with a drag guard; the
  province dossier; the shortlist board with ⚄ reroll and keyboard control;
  `handle.getProvinces / getCensus / selectProvince / openShortlist`.
- `Reputation-Matrix2/app/pages/maps/atlas-map-v2.css` +54 — the `.atlas-v2-*`
  rules for the border layer, the board and the dossier (appended; no existing
  rule touched).
- `Reputation-Matrix2/app/systems/global-map-analysis.js` +123 —
  `getProvinceCensus` (cached), `getProvinceSummary`, `provinceCount` /
  `contestedProvinces` / `censusSovereign` per region, `controlledProvinces` per
  faction, and `controllerSource: 'province-census'` set only when the legacy
  >35-pins rule could not name a hand.
- `Reputation-Matrix2/app/systems/global-war.js` +7/−1 — a "Provinces Held" stat
  on the faction card and a territory-census line, both from the same roll-up.
- `index.html` +71/−4 — `atlasProvinceCensusHtml` / `atlasProvinceShareBar` and
  the panel in `view_atlasNation`; recount on `atlasSwitchMap`; `prettyId`
  helper; `focusProvince` + `pendingPlot` so a province link can fly the map and
  open its dossier; the `global-map-analysis` import path corrected (it pointed
  at `app/systems/…` twice from two call sites, one of which was wrong);
  `map-provinces.js`/`atlas-map-v2.js` `?v=` bumps; one new `SITE_UPDATES` entry
  (`province_census_opens`, `kind:"route"` → `#/atlas`).
- `tools/check-all.py` +6 — four new checks in the Node block: province census
  model, snapshot freshness, census invariants, nation-page card.
- `README.md` +9 — docs-table row for the guide, and a **Re-file the province
  census** routine job.
- `Reputation-Matrix2/README.md` +20 — "The Province Census: every pin is also a
  vote", under Contributing Map Data, next to the POI field rules it depends on.
- `docs/VERIFICATION_AND_ORGANIZATION.md` +2/−1 — the wrapper paragraph now
  names the province census checks.

**DELETED** — nothing. No file, field, rule or render path was removed.

## Events filed

None — this is a systems run; no canon event, article, battle or exhibit was
authored, and `events.json` is untouched.

## XP awarded

No XP awarded this run.

## Numbers, as filed

`15 realms · 2,582 pins · 220 provinces · 45 contested marches · 108 unclaimed
· 11 vacant filed claims · 4,652,935 residents · 58 filed PROVINCE_POLITICS
ledgers checked, 22 of which the census puts in a different hand.`

Per realm (pins → provinces, contested): Earth Land 744 → 35 (1) · Equestria 346
→ 28 (3) · Mushroom Kingdom 271 → 24 (13) · Middle-earth 233 → 8 (2) · Midlands
206 → 15 (11) · Pokémon 179 → 7 (3) · warhammer 155 → 17 (1) · Doughnut Hole 149
→ 5 (0) · Kivotos 105 → 14 (4) · Internet 87 → 11 (5) · Animatopia 34 → 9 (2) ·
The Edge 50 → 30 (0) · Almost Edge 21 → 15 (0) · Connectopia 1 → 1 · Grand
Country 1 → 1. Equestria's 28 provinces are its 28 sub-region sheets one-for-one;
the Mushroom Kingdom's 24 are 21 sheets plus 8 ledger rows, five of which
described a sheet that was already filed (merged, not doubled) and three of which
have no pins near them (left on the map as vacant claims).

## Verification

All commands run from the repo root.

| Command | Result |
|---|---|
| `python3 tools/check-all.py` | **exit 0 — all 42 checks PASS**, including the four new ones |
| `node tools/tests/test-map-provinces.mjs` | 69 passed, 0 failed |
| `node tools/check-province-census.mjs` | 12 passed, 0 failed |
| `node tools/tests/test-atlas-province-card.mjs` | 24 passed, 0 failed |
| `node tools/build-province-census.mjs --check` | snapshot matches the model byte-for-byte |
| `node tools/tests/atlas-provinces-smoke.mjs` | 44 passed, 0 failed |
| `node tools/tests/atlas-modes-smoke.mjs` | 26 passed, 0 failed |
| `node tools/tests/atlas-fullscreen-smoke.mjs` | 16 passed, 0 failed |
| `node tools/tests/test-map-lenses.mjs` / `test-map-census.mjs` / `test-planar-map.mjs` | 40 / 17 / 49 passed, 0 failed |
| inline `index.html` scripts, parsed with `new Function` | 3 blocks, 0 failures |

Two real bugs were caught by these tests, not by eyeballing, and both were fixed
in the model (not in the expectations):

- `filedProvincesFor` guarded against overview sheets with
  `own.length >= onSheet.length * 0.9` — a `Set` has no `.length`, so the
  comparison was `NaN >= …` and never fired. Every duplicate `*_full` sheet was
  being counted as a province, inflating every realm. Now `onSheet.size`.
- `poiPower` scored a bare pin (no `political_influence`) at 0, so unfiled pins
  cast no vote and a province could never read `unaligned`. Now
  `(Number(poi.political_influence) || 1) * wPolitics`, the Cartography Desk's own
  convention.

A third defect was found by `check-province-census.mjs` rather than a test: the
clipper's winding normal and the half-plane emit order were both wrong, which
made provinces collapse to slivers and self-crossing rings cancel to zero area.
Fixed and pinned by the coverage assertion (tile area == sheet area) so it cannot
quietly return.

## Not done / open

- **Browser verification is the extract-and-render pattern, not a real browser.**
  No chromium/firefox is installed and jsdom cannot run `import()`, so the whole
  atlas applet is unbootable in jsdom's page context. `test-atlas-province-card.mjs`
  therefore pulls the named functions out of `index.html` and runs them; a human
  should still open `#/atlas` once and click a province.
- **`politics-data.js` was not amended.** 22 of 58 ledgers disagree with the
  pins; the census shows the diff and leaves the ledger alone. Deciding which
  side is canon is a filing decision for whoever owns each realm, and each fix
  needs its own run report. Equestria and the Edge have no `PROVINCE_POLITICS`
  key at all — they read provinces purely from their sheets, which is why
  Equestria shows zero ledger rows checked.
- **Small realms are coarse by construction.** `connectopia_full` and
  `grand_country_full` have one pin and therefore one province. `the_edge_full`
  has 30 provinces for 50 pins, because each sparse pin seeds its own; it reads
  as a frontier, which is arguably honest, but a `minPinsPerProvince` for that
  sheet is a possible refinement, not a fix I made.
- **No `docs/system-freshness.json` entry.** That registry wants an in-world
  `asOf` date; the census is derived data with no in-world date, and its staleness
  is proven mechanically by `build-province-census.mjs --check`. The guide says so
  under "Canon boundaries" so the omission is deliberate on the record.
- **`mainPage.json` untouched.** `latestUpdate`/`featuredArticle` track the
  latest session filing (the lava-bridge ambush), not systems work — matching the
  precedent set by `pond-diet-motion-refresh`, which appears in `SITE_UPDATES`
  only.
- **Assumed** that the legacy `count > 35` rule should keep priority over the
  census rather than be replaced by it. Removing it would silently re-crown half
  the realms; the census only speaks where that rule names nobody. Flag for a
  ruling.
- README references `tools/check-doc-counts.py` and `docs/DOC_COUNTS.json`, which
  do not exist on this branch. Not created here — pre-existing doc drift,
  unrelated to this change.
