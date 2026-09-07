# Planar Map Layers & the Cartography Desk

One painted sheet, four worlds. The Raventree cluster on the Midlands sheet
exists on four planes at once — the Material grounds, the Shadeward
(Shadowfell) reflection, the Feyward (Feywild) reflection, and the Deep
Mirror — and the `#/maps` cartography desk lets the reader flip between
those layers on the same map, then walk the campaign's own trail across it
in journey mode.

## 1. Source of truth

- **POI `plane` tags** in `Reputation-Matrix2/map-data/*-pois.js` — the only
  thing the toggle reads. Values: `material`, `shadow`, `fey`, `mirror`.
  A pin *without* the tag is Material by convention, so the ~180 older
  sheets need no edits; only pins in the planar cluster carry explicit tags.
- **Location `plane` / `planeConfidence` / `planeClue`** in
  `Reputation-Matrix2/data/locations.json` — the classifier's verdict per
  article, used for journey stop labels and the review queue. Written only
  by `tools/classify-location-planes.py --apply`.
- **Event `location` strings** in `Reputation-Matrix2/data/events.json` —
  journey mode resolves these to locations at render time (no stored links).

## 2. Generated outputs

- The `plane*` fields (and the two `needsReview` flags they produced) in
  `locations.json` are generator output: `classify-location-planes.py`
  wrote them, and re-running `--apply` must be a no-op unless an article
  changed. The run report names the generator; the diff stays purely
  additive (new trailing keys only).

## 3. Reader / player surface

- **`#/maps`** (also `#/cartography`) — the Tactical Cartography Desk:
  sheet selector, Survey / Journey mode toggle, and the Feyward–Shadeward
  layer toggle (visible only on sheets that file planar pins — today, the
  Midlands sheet). Routes are bookmarkable:
  `#/maps/<mapId>/<all|material|shadow|fey|mirror>/<survey|journey>[/<party>][/<sort>]`
  — e.g. `#/maps/midlands_full/all/journey/disaster_inc/newest`.
- **Journey mode** — every event that resolves to a pin on the current
  sheet and layer, in date order (filing order breaks ties), with numbered
  stop badges, a path polyline, a stepper, and play mode. Events that
  resolve elsewhere link to their sheet; events that resolve nowhere are
  listed honestly under "not on this sheet."
- **Whose journey** — the party picker (All parties + every faction with
  events, each labeled with its plotted stop count on this sheet). An
  event belongs to a party's journey when the faction participates
  directly, a roster member participates (`character.faction` plus the
  hand-filed crew lists), or `reputationChanges` touches it. A party with
  no stops on this sheet degrades to the unplotted list with "open that
  sheet" chips — e.g. the Peach Loyalists' three events live on the
  Mushroom and warp-junction sheets, not the Midlands.
- **Stop order** — oldest first (default), newest first (the chronology
  rewound — the stepper plays it backwards), A–Z by event, or grouped by
  location. Stops renumber 1..N in display order; the trail-only map, the
  stepper, and play mode all follow.
- The World Atlas (`#/atlas`) links to the desk but is otherwise unchanged;
  the desk reuses the atlas renderer (`atlas-map-v2.js`), so atlas behavior
  with no `opts.plane`/`opts.journey` is byte-identical to before.

## 4. Canon boundaries

- **The three clocks disagree and the desk does not reconcile them.**
  Feyward-clock dates (922 BF) sort by their own year, before Material 1040
  BF filings they may causally follow. The journey panel says so on screen.
- **No fuzzy matching, ever.** The event→location resolver (six rules,
  shared rule-for-rule between the Python tool and the page) uses exact ids,
  exact names, full-name-in-field at word boundaries, and full-word prefix —
  on the closed location set only. Pins always come from filed `articleId`
  links, never from name similarity.
- **Material is the default layer**, stated as such (`planeClue: "no planar
  markers — Material by default"`), not a guess. Region-anchored verdicts:
  the region field rules; prose contests but never silently overturns.
- Articles the clues cannot place (`astral_altar`, `the_undercity_grotto`)
  carry `needsReview: true` + `reviewNote` instead of a guessed layer.

## 5. Verification commands

```bash
python3 tools/classify-location-planes.py --check          # advisory report
python3 tools/classify-location-planes.py --check --strict # fails while gaps remain
python3 tools/classify-location-planes.py --llm --dry-run  # LM Studio targets, no calls
node tools/tests/test-planar-map.mjs                       # 49 assertions: tags, resolver, journey, parties, sorts
python3 tools/check-all.py                                 # both registered here (advisory + test)
```

Python↔JS resolver parity is 115/115 events (verified by running both
against every event; the committed test pins the documented vectors
including the earliest-mention tie-break). Renderer + page mounts were
additionally smoke-tested in jsdom (markers, badges, path, banner,
stepper, fallback sheet, timer hygiene) — see the run report.

## 6. What must not be hand-edited

- The `plane*` / `needsReview` / `reviewNote` fields in `locations.json`
  for planar verdicts — re-run the classifier (`--apply`, with `--llm` for
  second opinions on ambiguous articles) instead.
- Journey stop order or contents — derived at render time from event dates
  and filed pins. To move a stop, fix the event's `location` string or file
  the missing pin (procedure in `docs/worklists/LOCATION_MAP_COVERAGE.md`).
- The resolver: `resolve_event_location()` and `resolveEventLocationId()`
  must stay rule-for-rule identical. Change one, change the other, and
  extend `test-planar-map.mjs` with the vector that forced it.

## Filing a new planar pin

1. Add the POI to the sheet's `map-data` file with `articleId` + explicit
   `plane`, matching indentation (see the Raventree cluster block in
   `midlands-pois.js` for the convention comment).
2. `python3 tools/classify-location-planes.py --check` — the pin must not
   appear under mismatches or untagged.
3. `node tools/tests/test-planar-map.mjs` — extends the layer-count
   assertions if you added a new layer member.
4. Open `#/maps/<sheet>/<layer>/journey` — the pin's events should gain
   stops (or an honest "not on this sheet" row elsewhere).
