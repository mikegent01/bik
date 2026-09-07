# Location ↔ Map Coverage — the survey queue

**Owner:** the World Atlas (`Reputation-Matrix2/data/maps/map-data.js` + `map-data/*-pois.js`).
**Reader surface:** every location article in `index.html` (`#/article/<id>`), which now
opens with an **"On the map"** panel — a crop of the painted tactical sheet centred on
the location's own pin, with a deep link into the atlas
(`#/atlas/<nation>/<mapId>/<poiId>`, which mounts the sheet with the pin selected).
**Check:** `node tools/check-location-map-coverage.mjs` (advisory; `--strict` fails while
the queue below is non-empty).

## How a location earns its pin

1. The pin is **explicit**: a POI in `map-data/*-pois.js` carries `articleId:
   '<location id>'` (arrays allowed when two articles describe one place). The legacy
   `locationId` and the hard-coded `WIKI_IDS`/`LOC_PIN_SPECIALS` tables still count.
2. **No fuzzy name matching.** The resolver pairs on `articleId` only. Substring pairing
   once joined *The CORE (Underground)* to a quantum computing core on the Internet
   sheet and *Darius's Planar Sanctum* to a generic "Sanctum" in Earth Land; a confident
   wrong pin is worse than an honest gap.
3. Coordinates are **percent of the painted artwork**, placed from context clues: the
   nearest already-surveyed anchor, the region field, and the prose. When a place is a
   planar reflection of a Material anchor, it sits at the anchor, offset just enough
   that pins do not stack into one dot, and the pin's description says so.
4. If no painted sheet exists for the realm, **no pin is invented**. The location stays
   in the queue below and the article shows the dashed "Not on the tactical map yet"
   panel instead of a guessed coordinate.

Coverage at filing: **45 / 61 location articles plotted** (was 14 by honest matching,
5 of those only through the hard-coded specials table).

## Plotted this pass — and the clue that placed each pin

### The Midlands sheet (`midlands_full`) — Raventree cluster & planar reflections

| Location | Pin | Clue |
|---|---|---|
| `shadow_estate` | 72.9, 13.1 | "Shadowfell reflection of Raventree Manor" → the Manor's pin (73.5, 12), offset SW |
| `shadow_estate_gardens` | 73.1, 12.5 | gardens of the same estate |
| `mazebound_grove` | 72.2, 13.4 | "Shadow Estate grounds" |
| `orange_deer_shrine` | 71.9, 12.6 | "deep within the grove of the Shadow Estate" |
| `tymnas_cottage_and_hedge_maze` | 74.4, 11.2 | "at the edge of Raventree Manor … entropic perimeter" |
| `silent_grove` | 72.7, 11.4 | "on Raventree Manor's grounds" (Material plane) |
| `overgrown_manor` | 74.1, 13.0 | "Raventree Manor's Feywild reflection" |
| `overgrown_library` | 74.5, 13.3 | "the Feywild reflection of Raventree Manor's library" |
| `feyward_grove` | 74.6, 12.2 | "reflection of the Raventree grounds" (Feyward) |
| `deep_mirror` | 73.5, 13.7 | Mirror-Dimension reflection of the same manor |
| `darius_sanctum` | 73.3, 14.0 | "Deep Mirror layer" above the reflection |
| `planar_sanctum_belfry_and_atrium` | 73.7, 14.0 | same sanctum, belfry & central chamber |
| `alpine_bank_raventree_outskirts` | 74.9, 12.8 | "just outside the sprawling grounds of Raventree Manor" |

### The Midlands sheet — Regal capital, Midgruals & periphery

| Location | Pin | Clue |
|---|---|---|
| `ironhold` | 80.6, 5.4 | "capital of the Regal Empire … heart of Iron Legion power", beside the Imperial District (81.28, 4.29) and Aegis Command (78.5, 2.5) |
| `alpine_bank` | 82.2, 6.2 | "built high in the mountains near Midgrual, the Regal Capital" |
| `alpine_bank_subterranean_chambers` | 82.5, 6.6 | "deep within the Alpine Bank's Regal Capital Branch" |
| `alpine_mountain_inn` | 79.2, 8.6 | "freezing slopes outside the Regal Capital" |
| `arunedeal_goblin_camp` | 78.3, 7.1 | "between the Alpine Mountain Inn and the … Checkpoint Wall" |
| `legion_wall_checkpoint` | 77.4, 5.5 | "cutting entirely across the Midgrual Mountain pass", north border |
| `gamma_high_command_spire` | 85.9, 5.1 | "High Command airspace" east of the palace; approach classified, pin approximate |
| `alpine_bay_ranch` | 75.5, 10.5 | "edge of a vast grassland … Regal Capital Outskirts" |
| `vellanet_rise` | 70.6, 9.2 | "Midlands periphery, upriver of the Midgrual foothill roads", west of the Sunstone Gate |
| `raventree_manor` | 73.5, 12 | backfilled `articleId` on the existing pin |
| `aegis_command` | 78.5, 2.5 | backfilled `articleId` on the existing pin |
| `vigilance` | 81.0, 4 | backfilled `articleId` on *The 'Vigilance' Airship* pin (mobile landmark; pin is its last filed position) |

### Mushroom Kingdom sheet (`mushroom_kingdom_full`) & region sheets

| Location | Pin | Clue |
|---|---|---|
| `star_fountain` | 63, 26 | "Star Road waypoint … near former Eastern Marches" → east of Star Hill Shrine (55.09, 24.76) |
| `ruins_of_the_mushroom_capitol` + `ruins_of_the_mushroom_kingdom_capitol` | 49.5, 33 | one pin, two ids — see *suspected duplicates* below |
| `ruins_of_the_koopa_troop_barracks` | 66, 42 | "Coastal Provinces / Eastern Periphery … crumbling into the sea" |
| `isle_delfino_overgrown_cottage` | 20, 5 | Isle Delfino cluster (Delfino Plaza 18, 7) |
| `forgotten_coastal_cove` | 41, 15 | Kongo Bongo coast, by the Kongo Jungle Treehouse (44, 18) |
| `rogueport_bay` | 29, 24 | backfilled `articleId` on the existing *Rogueport* pin |
| `mushroom_regency` | 60, 5.5 (Mushroom City) | backfilled `articleId` on the *Regency Parliament* pin — the Regency's seat |
| `peachs_castle`, `toad_town`, `bramblehaven`, `fawful_fortress`, `warp_pipe_junction` | existing | previously only the hard-coded specials table knew these; now explicit |

### Middle-earth (`middle_earth_full`) — Rohan finally wired in

`map-data/middle-earth/Rohan.js` existed with a full POI set but was **never spread into
`middle-earth-pois.js`**, so Rohan had no pins on any sheet. Wiring it in (import + two
spreads) put Edoras, Helm's Deep, Isengard and these on the map:

| Location | Pin | Clue |
|---|---|---|
| `ruins_of_rohan_hillfort` | 45, 66 | downs east of Edoras (43, 68) |
| `overgrown_rider_camp` | 48, 65 | "plains beyond" — rider resting site east of Fangorn (46, 63) |
| `ruins_of_shadow_pass` | 40.5, 64 | pass above the Gap of Rohan, by the Fords of Isen (41, 65) |
| `overgrown_hillfort_shadow_pass` | 40.0, 63.2 | same pass, opposite shoulder |

### Sheets that had zero pins

`connectopia_full` and `grand_country_full` existed as painted sheets with empty POI
arrays. First pins filed: `block_farm_village_connectopia` (50, 50) and
`grand_country_eldridge_hillfort` (50, 30 — "guarded the northern approaches").

### The Internet sheet

| Location | Pin | Clue |
|---|---|---|
| `the_mushroom_regency_hall_of_records` | 14.5, 39.5 (surface web) | beside the Regency Embassy Spore-Node (12.5, 37) |

## The queue — 16 articles the map still owes

### A. No painted sheet exists for the realm (needs artwork before pins)

The Monster Underground / Mount Ebott cluster has **no sheet at all** — the atlas config
for `monster_underground` currently borrows the Midlands sheet, which shows the wrong
world. Until an Ebott sheet is painted and filed in `map-data.js`, these stay unplotted:

- `mount_ebott`, `the_ruins_mount_ebott` — surface & barrier approach
- `snowdin_town`, `snowdin_police_station` — the Core
- `hotland_portals`, `the_core_underground` — barrier exit routes / the CORE
- `legion_embassy_old_world`, `iron_legion_old_world_embassy` — Old World surface corridor
  (suspected duplicate pair, see below; one pin will serve both)
- `mount_ebot` — the wrong mountain, "four hundred miles west of Mount Ebott"; needs the
  same Old World sheet, or the Warhammer theatre sheet if the GM rules it in-world there

Also sheet-less:

- `fountain_of_dreams`, `star_rod` — Dreamland / Star Haven have no sheet
- `astral_altar` — the Astral Sea has no sheet
- `the_undercity_grotto` — Animatopia sheets exist but nothing paints the Undercity

### B. Intentionally unmapped by canon

- `the_dread_mansion` — "Unconfirmed; isolated grounds outside ordinary communications".
  Plotting it would contradict the filing. Revisit only if a session confirms grounds.
- `wariocopter` — a vehicle in transit, not a place. It belongs to event pages, not the
  map; if it ever needs a marker it should ride its event's battle-map unit positions.

### C. Confirm before linking (do not guess)

- `forgotten_temple_stars` — region says *Prison Island (Underground)*, but a pin named
  "Forgotten Temple of the Stars" sits on L'Eclaire Isle (`poi_li_forgotten_temple`,
  90, 60). Same temple moved, two temples, or a misfiled region? Read the article and the
  Prison Island filings, then either backfill `articleId` on the Ludor pin or file a new
  underground one.

### D. Suspected duplicates — merge decision before any second pin

- `ruins_of_the_mushroom_capitol` / `ruins_of_the_mushroom_kingdom_capitol` — near-identical
  summaries ("historical central region" vs "former Eastern Marches"). One pin currently
  serves both via an `articleId` array. Decide: merge the records, or split the pins.
- `legion_embassy_old_world` / `iron_legion_old_world_embassy` — same embassy, two records
  (event-side vs faction-side). One pin when the Ebott sheet exists.

## Planar layers (2026-09-07 pass)

The Raventree cluster pins on `midlands_full` now carry explicit `plane`
tags (`material` / `shadow` / `fey` / `mirror`; absent = material), and the
new `#/maps` cartography desk filters the sheet by them. The tags are kept
honest by `tools/classify-location-planes.py` (region-anchored verdicts per
location article, LM Studio second opinions for ambiguous ones) — full
convention in `docs/PLANAR_MAPS.md`.

This pass also filed the one pin the classifier found missing:
`skittering_grove` → `poi_mid_skittering_grove` (74.9, 10.7, shadow), just
beyond Tymnas's cottage per the region field. Coverage is now **46 / 62**;
the 16 remaining are the same queue as before (Ebott sheet-less cluster,
Dreamland/Star Haven/Astral, Undercity, Dread Mansion, Wariocopter,
Forgotten Temple) — the tool's `--check` output replaces the hand-counted
list above it going forward.

## Journey-cartography pass (2026-09-07)

The `#/maps` journey mode only plotted events whose filed location string
matched a record verbatim, so whole arcs (Dragon Mountain sessions, the
Feyward/Shadeward manor arcs, the Ebott survey, the Mushroom capital
records) fell into "not on this sheet". This pass closed that gap three ways:

1. **7 new location records** (`dragon_mountain`, `ravencreek`,
   `imperial_diet`, `ferngrove_manor`, `thornwood_ruined_manor`,
   `bowsers_castle`, `gadd_science_laboratory`) — 62 → **69 articles**,
   all classifier-verdict `material` / medium confidence or better.
2. **4 pins linked** via `articleId` (Imperial Diet 82.5,2; Ravencreek
   battlefield 34,44; Bowser's Castle 63.5,60; Gadd's lab 62,47) —
   46 → **50 / 69 plotted**.
3. **Filed-name alias tier** (tier 5.5, 26 entries, earliest-position):
   "Darkland" → the castle seat, "Snowdin" → Snowdin Town, "Shadow Estate
   Dining Hall" → the estate, and the rest. `MAPS_LOCATION_ALIASES` in
   `index.html` MUST mirror `LOCATION_ALIASES` in
   `tools/classify-location-planes.py` — parity is verified 115/115 events,
   grow-only vs baseline (37 newly resolved, 0 lost).

Journey coverage is now **69 pinned / 19 unpinned / 27 unresolved** (was
40 / 11 / 64); the Midlands trail runs **55 stops**. The remaining queue is
19, headed by the Ebott sheet-less cluster (`mount_ebott`, `snowdin_town`,
`mount_ebot`, `the_ruins_mount_ebott`, `snowdin_police_station`,
`the_core_underground`) — those need a painted Ebott sheet, not more records.

Renderer lenses shipped in the same pass (`atlas-map-v2.js?v=map7`): journey
mode mounts trail-only, the four stat modes tint pins/buttons per lens
(green/red/gold/violet), the detail panel surfaces filed extras (unrest and
antiquity /10, intel clearance incl. `{faction, level}` postings, library
notes, non-material plane tags), and a 📖 toggle filters to wiki-linked pins.

**Which tool finishes the queue?** There is no one-shot filer — x/y needs
eyes on the painted sheet. The loop is `node
tools/check-location-map-coverage.mjs` (the queue) plus `python3
tools/classify-location-planes.py --check` (journey impact per missing pin),
then the filing procedure below.

## Filing a new pin (the procedure this pass followed)

```text
1. Read the location record: region + summary are the coordinate clues.
2. Find the nearest surveyed anchor on the target sheet
   (node -e "import('./Reputation-Matrix2/data/maps/map-data.js')…").
3. Add the POI to that sheet's map-data file, matching its indentation, with
   articleId: '<location id>' and a description in the archive's flat voice.
4. node tools/check-location-map-coverage.mjs   → the article moves to PLOTTED.
5. Open the article in the shell: the preview crop must land on land, not sea.
6. Run report notes the pin and the clue that placed it.
```

Never hand-edit a painted sheet's existing coordinates to make a new pin fit — the
region sheets crop to their POI hull, so moving an old pin moves a whole region window.
