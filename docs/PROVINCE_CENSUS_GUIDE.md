# The Province Census — merging POIs into provinces with real borders

The atlas had the opposite problem of an empty map: 2,582 pins across fifteen
realms, and no way to read them. A pin is a *place*; a campaign needs a
*possession*. This is the system that turns the first into the second — the
merge, the census that crowns a holder for each province, the borders that
prove it on the painted sheet, and the shortlist that tells a player which pin
to actually pick.

It is derived, never filed by hand. `PROVINCE_POLITICS` and the sub-region
sheets already named provinces; the census does their arithmetic and says out
loud where the archive's numbers and the archive's pins disagree.

## 1. Source of truth

- **`Reputation-Matrix2/app/pages/maps/map-provinces.js`** — the model. Pure:
  zero DOM, zero imports, zero randomness, so the browser, the generator and the
  tests all derive the identical province from the identical pins.
- **The POI files** (`Reputation-Matrix2/map-data/*-pois.js`, assembled into
  `data/maps/map-data.js`) — every pin's `factionId`, `population`,
  `military_strength`, `economic_value`, `political_influence`. This is the
  evidence; nothing else is consulted for who holds what.
- **`Reputation-Matrix2/data/support/politics-data.js` → `PROVINCE_POLITICS`** —
  the hand-filed province ledger: a name, a seed point, and control shares per
  full map. Read as a *claim*, and checked against the pins.
- **The sub-region sheets in `MAP_DATA`** — a sibling map painted on the same
  artwork is a survey of a province, because its POI list is that province's
  pins. Twenty-one sub-region sheets are painted on the Mushroom Kingdom's
  artwork, twenty-eight on Equestria's — the archive files twenty-nine Equestria
  sheets in all, because `equestria_full` is the realm and the other twenty-eight
  are its provinces, one sheet each. These are the provinces "already defined":
  the merge seeds from them before it invents anything, so every Equestrian
  province on the atlas is a sheet somebody already filed — including the one
  that came out empty, its pins all absorbed by a smaller survey next door, and
  which is drawn as a vacant claim rather than quietly deleted.

### The rules, in the order they are applied

```
1. Seeding   a sibling sheet on the same artwork files its pins as one province
             (a sibling covering ≥90% of the target is another overview, not a
             province; a sibling with fewer than 3 pins on the sheet is a stray,
             not a territory). A PROVINCE_POLITICS row naming the same place is
             merged into that survey — one province, both kinds of evidence.
2. Attaching a pin claimed by two sheets goes to the SMALLER survey: the archive
             that filed fewer places was the one looking at it.
3. Merging   pins nobody filed join the nearest province within 13 percent of the
             sheet whose flag they agree with (same flag, or an unaligned pin, or
             within 5.5 of the centre, or allied when the caller supplies an
             `allied` hook). A pin with no compatible neighbour opens a province
             of its own, capped at 40 pins so one realm cannot eat the map.
4. Counting  each pin contributes political×2 + military×1.5 + economic×1 +
             log10(population)×1.2 to whoever flies its flag — the three pillars
             the canon dossier `national_power_projection` files, with population
             logged so a city cannot outvote the citadel that commands it.
5. Crowning  a flag is the province's controller at ≥12% of the census AND
             either ≥45% of it or a lead of ≥28 points, and never with a rival
             within 14 points. Below that it is a MARCH: several flags, dashed
             border, no crown. A province with flags but no readable leader is
             unclaimed, not quietly given to the biggest pile.
6. Bordering every province takes the ground it is the strongest claim on — a
             power-weighted (Laguerre) Voronoi cell, so a hegemon's edge bulges.
             A province whose surveyed pins cover under 55% of that tile is
             clipped back to its own hull instead, and the gap left behind is
             no-man's-land, drawn rather than hidden.
7. Rolling   provinces roll into the realm: who holds how many, what share of the
             area and the people that is, and where the weight sits (the capital
             province). `nationRollup()` is the only place "the nation" is decided.
```

## 2. Generated outputs

- **`Reputation-Matrix2/data/provinceCensus.json`** — the census as filed: every
  `*_full` realm, its provinces with control shares, border polygons, seat, the
  filed-ledger diff, and the nation roll-up. Written only by
  `node tools/build-province-census.mjs`. It exists so the census is a document a
  reader can cite when nobody has the map open — not so the atlas can read it:
  the atlas computes live from the same module.
- Only `*_full` sheets are counted, the same convention
  `data/support/population-state.js` uses, because every sub-region pin already
  sits inside its full map. Counting both doubles the realm and its people.

## 3. Reader / player surface

- **The World Atlas** (`#/atlas` → a realm) — `atlas-map-v2.js` now draws the
  census under the pins: filled plots coloured by the crown, dashed for a march,
  outline-only for a vacant filed claim, and a label at each province's centre.
  The **🗺️ Provinces** button in the tools row toggles the layer; the **Provinces**
  lens re-colours the pins by their province's crown so the census reads across
  the sheet instead of one pin at a time.
- **Clicking a plot** (or its label, or a census row) opens the province dossier:
  verdict, pins counted, residents, the three pillars, the census bars, the
  province's own pins with the seat first, and — where `PROVINCE_POLITICS` files
  a ledger for that ground — the diff: *filed 40% → census 22%*, plus whether
  the same hand still holds it. A province surveyed on its own sheet links
  straight to that sheet.
- **`🎯 Choose a pin`** — the desk's shortlist. The answer to seven hundred pins
  is not more pins, it is six worth acting on, each with its reasons checked
  against the sheet: *top of the sheet by population · seat of Capital Province ·
  wiki article filed*. It ranks what the current filters left visible, follows
  whichever lens is open, and takes **⚄ Reroll the six** if the reader hates all six.
  Arrow keys or `j`/`k` move, `Enter` picks, `Esc` drops it; picking selects the
  pin and flies the map to it. `openShortlist()` is on the mount handle, so any
  page can open it directly.
- **The Cartography Desk** (`#/maps/<sheet>`) mounts the same renderer, so
  borders, the lens and the shortlist arrive there too — except in journey mode,
  where pins are hidden and therefore borders are not drawn over them.
- **Power Projection** (`#/power`) now reads the census as well as the count:
  `app/systems/global-map-analysis.js` puts `provinceCount`,
  `contestedProvinces` and `censusSovereign` on every region, counts
  `controlledProvinces` per faction, and shows a "Provinces Held" stat on each
  faction card. The long-standing rule — a faction with >35 pins on a sheet
  controls the realm — still wins whenever it can name a hand. When it cannot
  (which, for most realms, it could not: everything read `unaligned`) the region
  is crowned from the province roll-up and labelled `crowned by the province
  census`, so the reader can see which rule spoke.
- **A faction's article** carries `getDetailedFactionStats().provinces`: which
  provinces the census crowns to that faction, realm by realm.

## 4. Canon boundaries

- **The census is arithmetic, not lore.** It never invents a faction, a place, or
  a war. A province is contested because the pins filed for it disagree, and the
  dossier says which pins, not what that means.
- **A filed ledger that the census overturns is not rewritten.** `agrees:false`
  and a drift number are shown; `politics-data.js` is left alone. Amending the
  ledger is a filing decision for whoever owns that realm, and the run report
  for that change says so.
- **Vacant claims stay on the map.** A `PROVINCE_POLITICS` row whose seed sits
  far from any pin is drawn as an unfilled claim: the archive filed it, the
  survey has nothing to back it, and both facts belong on the sheet.
- **Plane filters census the plane.** A Shadeward or Feyward layer gets
  provinces from the pins on that layer, because a reflection's borders are not
  the Material's.
- **Nothing is dated.** The census is a live read of the archive; it carries no
  in-world `asOf`, and `check-freshness.py` does not track it. Freshness is
  mechanical: the snapshot either matches the model or the checker fails.

## 5. Verification commands

```bash
node tools/tests/test-map-provinces.mjs        # the model: 69 checks over real data
node tools/build-province-census.mjs           # re-file the snapshot
node tools/build-province-census.mjs --check    # snapshot matches the model
node tools/check-province-census.mjs           # no pin lost or double-governed,
                                               # borders close, ledger ids exist
node tools/tests/test-atlas-province-card.mjs  # the nation page's card, the real
                                               # function extracted from index.html
node tools/tests/atlas-provinces-smoke.mjs     # jsdom: mounts the real renderer,
                                               # drives borders + the shortlist
                                               # (needs npm install jsdom --no-save)
python3 tools/check-all.py                     # the first four run in the routine set
```

A full run, on the archive as filed: **15 realms · 2,582 pins · 220 provinces ·
45 contested marches · 108 unclaimed · 11 vacant filed claims · 4,652,935
residents counted · 58 filed ledgers checked, 22 of which the census puts in a
different hand.** The realm with the most argument is the Mushroom Kingdom: 271
pins, 24 provinces, 13 of them marches no single flag holds.

## 6. What must not be hand-edited

- **`data/provinceCensus.json`** — generated. Edit `map-provinces.js` (the model)
  or the POI files / `politics-data.js` (the evidence), then re-run the
  generator.
- **Never hand-place a province border.** Borders come from pins and seeds. A
  border that needs to move means a pin is in the wrong place, and that is a POI
  filing, fixed in its `map-data/*-pois.js` file.
- **Do not copy the merge into another surface.** Call
  `buildProvinceCensus()` (or `getProvinceCensus()` from
  `app/systems/global-map-analysis.js`, which caches it). A second
  implementation is how two maps of the same realm start disagreeing.

## Filing a new province, or fixing one

1. **Prefer the survey.** Add the pin to its sub-region sheet
   (`map-data/<region>-pois.js`) with its `factionId` and pillars; the province,
   its holder and its border all follow from that. No new file, no new table.
2. **Add a ledger row only for a named province the atlas should carry** — a
   realm-level division the sheets do not draw. File `name`, `x`, `y`, and
   `control` in `PROVINCE_POLITICS` under the full-map id. Keep the file's
   existing one-line-per-province formatting; do not reformat it.
3. **Re-run** `node tools/build-province-census.mjs`, then
   `node tools/check-province-census.mjs`.
4. **If the checker reports a drift you did not intend**, the pins and the ledger
   are arguing. Decide which is right in-world, fix that source, and let the
   other follow. Never edit the snapshot to close the gap.
