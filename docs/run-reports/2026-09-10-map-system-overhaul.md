# Run report — Map system overhaul

Date: 2026-09-10
Branch: `arena/01a08916-bik`

## Files

CREATED
  docs/run-reports/2026-09-10-map-system-overhaul.md — this run report.

EDITED
  Reputation-Matrix2/app/pages/maps/atlas-map-v2.js — replaced fixed POI clustering with zoom-aware smart clustering, added the Smart / Key / All POI density control, cluster-to-zoom behavior, filtered rerendering, province-focused pin dimming, live visible-marker counts, compound province paths, straight border rendering, selected-border highlighting without internal cell seams, no hatch overlay, and province-aware clustering so selected province POIs do not light markers across borders.
  Reputation-Matrix2/app/pages/maps/atlas-map-v2.css — enlarged the default map viewport, added cluster/density/focus styling, softened province fills, removed hatched/dashed border styling from the province layer, and adjusted full-screen sizing.
  Reputation-Matrix2/app/pages/maps/map-provinces.js — changed province geometry from one center-weighted cell per province to POI-anchor compound cells that tile the sheet, attach blank space to the nearest province, and keep assigned pins inside their visible region.
  index.html — made `#/maps` an immersive full-canvas map route by toggling `body.maps-route`, hiding the wiki side rail/footer on that route, rebuilding the Cartography Desk shell, adding an atlas-card “Open full map desk” escape hatch, and bumping atlas-map-v2 cache keys to `map13` / `map14`.
  docs/PROVINCE_CENSUS_GUIDE.md — documented smart POI density, province-focused dimming, and the full-canvas Cartography Desk route.
  tools/tests/atlas-modes-smoke.mjs — updated the wiki-filter assertion for rerendered pins and added coverage proving dense sheets smart-cluster by default, Key mode tucks most pins, and All mode unrolls the raw survey.
  tools/tests/atlas-provinces-smoke.mjs — updated province-overlay smoke coverage for plain contested fills with no hatch pattern.
  tools/tests/atlas-borders-geometry.mjs — updated border-side checks to parse straight compound province paths.
  tools/tests/test-map-provinces.mjs — added model coverage that POI-anchor province cells tile the sheet and assigned pins land inside their visible province cells.
  tools/check-province-census.mjs — added generated-census validation that visible province cells contain their assigned pins.
  tools/build-province-census.mjs — filed compound province cells into the generated census snapshot.

GENERATED
  `Reputation-Matrix2/data/provinceCensus.json` — regenerated with `node tools/build-province-census.mjs` after the province geometry algorithm changed; not hand-edited.

## Events filed

No events filed this run.

## XP awarded

No XP awarded this run.

## Verification

| Command | Result |
|---|---|
| `node --check Reputation-Matrix2/app/pages/maps/map-provinces.js` | PASS |
| `node --check Reputation-Matrix2/app/pages/maps/atlas-map-v2.js` | PASS |
| `node --check tools/build-province-census.mjs` | PASS |
| `node --check tools/check-province-census.mjs` | PASS |
| index inline script syntax check via `node --check` on extracted scripts | PASS — 3 scripts checked, 0 failed |
| `node tools/tests/atlas-modes-smoke.mjs` | PASS — 30 passed, 0 failed |
| `node tools/tests/test-map-lenses.mjs` | PASS — 40 passed, 0 failed |
| `node tools/tests/atlas-fullscreen-smoke.mjs` | PASS — 16 passed, 0 failed |
| `node tools/tests/atlas-provinces-smoke.mjs` | PASS — 69 passed, 0 failed |
| `node tools/tests/atlas-borders-geometry.mjs` | PASS — 22 passed, 0 failed |
| `node tools/tests/test-map-provinces.mjs` | PASS — 70 passed, 0 failed |
| `node tools/check-province-census.mjs` | PASS — 14 passed, 0 failed; snapshot matches live census |
| `node tools/build-province-census.mjs --check` | PASS — filed snapshot matches the model (15 maps, 220 provinces) |
| `python3 tools/check-all.py` | PASS — all requested checks passed |
| `python3 start.py --no-browser --host 0.0.0.0 --port 9000` | PASS — preview server started on port 9000 |

## What changed for readers

- `#/maps` is no longer a normal wiki document with a small embedded map. It becomes a full-canvas Cartography Desk route: no left wiki rail, no footer, and the map renderer owns the viewport under the top bar.
- Dense realms now open in Smart POIs mode. Example under test: `earth_land_full` renders 744 unique POIs as 89 clustered markers by default.
- The density button cycles:
  - `✨ Smart POIs` — automatic clusters that break apart with zoom.
  - `◆ Key only` — province seats, article-linked pins, journey stops, chatter pins, and top lens values.
  - `• All POIs` — every filed pin unrolled for raw inspection.
- Clicking a cluster zooms into it instead of dumping a cluttered stack immediately.
- Selecting a province brightens its real border segments and keeps its dossier visible while dimming unrelated POIs; clusters are now grouped by province so a selected province does not light a marker that represents another border region.
- Province borders are straight compound cells anchored on the actual POIs, with no hatch overlay, no dashed border squiggles, and no empty holes between neighbouring shapes.

## Not done / open

- I did not redraw the underlying painted map art; this pass overhauls the renderer and route shell only.
- The PR is already open from this branch; this follow-up updates that PR rather than opening a second one.
