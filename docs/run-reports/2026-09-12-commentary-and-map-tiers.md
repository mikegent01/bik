# Run report — 2026-09-12 — Waluigi's Cut for the doorway, and tiered map groups

Two jobs in one run, both follow-ons to the doorway filing (PR #74):

1. A commentary track for `feyward_i_cant_afford_not_to_care`.
2. Settlement tiering on the atlas, so POIs that sit on top of each other
   group into one readable marker with its own zoomed sheet.

---

## 1. Files created or edited

```
CREATED
  Reputation-Matrix2/app/pages/maps/map-tiers.js    new module, 270 lines
  tools/tests/test-map-tiers.mjs                    new test, 47 checks
  docs/run-reports/2026-09-12-commentary-and-map-tiers.md   this file

EDITED
  Reputation-Matrix2/data/commentaries.json         + feyward_i_cant_afford_not_to_care_commentary (+116 lines)
  Reputation-Matrix2/app/pages/maps/map-renderer.js + tier import, tiered grouping,
                                                      tiered marker styling, group-zoom
                                                      overlay, rewritten cluster legend (+160/-8)
  Reputation-Matrix2/app/pages/maps/maps.css        + tier ring colours, group-zoom sheet (+171)
  tools/check-all.py                                + "map tiers" check (+3)
```

No generated file was hand-edited. No canon JSON was reformatted wholesale —
`commentaries.json` was appended to by splice, leaving the other five records
byte-identical.

---

## 2. The commentary

`#/commentary/feyward_i_cant_afford_not_to_care_commentary`
(also `#/waluigis-cut/…` and `#/cut/…`; the source article auto-links it.)

| | |
|---|---|
| Sections | 15 |
| Words | 7,141 |
| Source story | 6,597 words → **1.08×** (floor is 0.90×) |
| Waluigi / 1k | 30.1 (floor 18.0) |
| CAPS / 1k | 40.1 (floor 25.0) |
| WAH | 10 (floor 1) |
| Section lengths | 370–666 words (band is 260–900) |

Sections, in order: `four-seconds`, `unreadable`, `not-an-ambush`,
`the-argument`, `theatrical`, `fire`, `theatrics`, `sword-slashes`, `red`,
`colour-division`, `five-months`, `leverage`, `carnivorous`, `show`, `ledger`.

The through-line is the one the session actually earned: the Revel is not
treacherous and was not mind-controlled — on three full rounds of evidence it
simply **cannot be predicted to attack the enemy**, which is worse for planning
than a conspiracy would be. The `ledger` section closes on that, and explicitly
refuses to read domination into a targeting table, because no compulsion was
named, cast, or saved against anywhere in the log.

---

## 3. Map tiering — what changed and why

**The problem.** `midlands_full` files 205 pins and 61 pairs of them sit within
1.5% of each other. The Imperial Palace, Aegis Command, the Magitek Foundries
and the Artificers' Guild are effectively one place at overland scale, so the
sheet drew four overlapping circles and the reader could not tell what was
there. The old flat-distance clustering did not fix it, because it ranked a
capital city and a roadside shrine identically and anchored whichever it
happened to meet first — which also meant the map redrew differently whenever a
new POI was appended.

**The model** — `map-tiers.js`, pure functions, no DOM, no imports:

| Tier | Icon | Rank | Catchment |
|---|---|---|---|
| City | 🏙️ | 4 | 3.2% |
| Town | 🏡 | 3 | 2.1% |
| Village | 🏘️ | 2 | 1.3% |
| Site | 📍 | 1 | 0.9% |

A POI's tier comes from an explicitly filed `tier` first, then its building
type (`capital_city`/`major_city` → City, `town` → Town, `hamlet` → Village),
then seat-of-power types (castle, fortress, academy, mage's tower, port), then
population bands (20,000 / 4,000 / 250). Everything else is a Site.

Three rules make it readable and stable:

- **The highest tier anchors.** A group takes the name, coordinate and
  catchment of the biggest settlement in it. A capital gathers its district; a
  village gathers only what is practically on top of it.
- **Peers are never swallowed.** Only a strictly lower tier joins a group, so
  two neighbouring cities stay two pins rather than collapsing into one.
- **Nothing is dropped.** Every filed pin ends up in exactly one group, and the
  test asserts that against every sheet in the atlas.

Grouping is order-independent (sorted by rank, then filed weight, then id), so
appending a POI no longer reshuffles the map. Duplicate pin ids — Middle-earth
files 187 of them — are collapsed first, mirroring `map-provinces.uniquePins`.

**The hyper-zoom.** Clicking a group opens `openGroupZoom`: the same base map
image, CSS-cropped to the group's padded bounding box and magnified (the
Midlands palace district lands around 45×), with members laid out by a
deterministic relaxation pass so co-located pins are pushed apart far enough to
click. A "Zoom further" button steps 1× → 1.8× → 3× on top of that. Below the
sheet is a list of the members, biggest place first. Clicking any pin or row
opens the normal POI detail panel. Escape or a click on the backdrop closes it.

**Effect on the real atlas**, at default zoom:

```
midlands_full           205 pins → 172 markers   (8 city, 3 town, 1 village groups)
earth_land_full         744 pins → 275 markers   (60 city, 18 town, 13 village)
mushroom_kingdom_full   271 pins → 234 markers
equestria_full          346 pins → 272 markers
whole atlas           5,084 pins → 3,558 markers  (1,526 pins tucked into groups)
```

Zooming in loosens the catchment and unrolls groups in place — the Midlands
goes 172 → 196 markers at 2× — so the grouping is a legibility aid at overland
scale, not a wall between the reader and the data.

---

## 4. Verification

```
python3 tools/check-commentaries.py --strict     PASS (6 filed)
node tools/tests/test-map-tiers.mjs              47 passed, 0 failed
python3 tools/check-all.py                       all PASS except "map lenses"
```

`map lenses` is a **pre-existing environment failure**, not a regression: it
needs `jsdom`, which is not installed here. This was proved earlier in the
session by stashing every change and watching it fail identically at the clean
branch point `d8dcea3`. It is also the reason the new grouping logic was built
as a DOM-free module with its own node test — the map's own DOM test cannot run
in this environment, so the model had to be testable without it.

Also checked by hand against a live server on :8765: `map-tiers.js`,
`map-renderer.js` and `maps.css` all serve 200, and `map-renderer.js` parses
clean as a module.

One known warning, pre-existing and untouched:
`the_lava_bridge_ambush_and_the_blue_luigi_commentary` has a `relatedArticles`
entry `mages_guild` that does not resolve.

---

## 5. What this does not do

- No canon was changed. No event, character, location, faction, prop or
  investigation record was touched in this run — the commentary is a reading of
  the filing, not an addition to it, and the tiering is presentation only.
- No POI coordinates were moved. If two places are filed at the same spot, they
  are still filed at the same spot; they are now merely legible.
- No `tier` field was written into any POI. The ladder is derived from what is
  already filed. The field is supported if a future filing wants to override
  the guess for a specific place, and `tierOf` prefers it when present.
