# Regal Empire POI Audit

**Scope:** every POI in the map data carrying `factionId: 'regal_empire'`.
**Count:** 37 POIs across 8 region files.
**Method:** each file parsed and evaluated against four questions — (1) should this
exist or be merged, (2) does it belong here or should it move, (3) is the data
sound, (4) next.

> **Status: partially applied.** The findings that needed no canon ruling have
> since been applied by `tools/fix-regal-empire-pois.py` (run `--check`; it is
> registered in `check-all.py` as `regal empire POIs`):
> the 18 bare `intelReq` numbers, the six retypes, and the Road Warden's Spire
> description. Everything still marked as needing a ruling below — the
> Midgrual/Mighdural spelling, the three-way `capital_city` collision including
> Ironhold, the two merge candidates, and the two cross-faction intel gates —
> remains **untouched and open**.
>
> **Correction to this audit:** the count of bare `intelReq` values was 18, not
> 17, and the total Empire POI count is **38, not 37**. This document surveyed
> eight region files and missed `poi_bf_regal_observation` ("Imperial
> Observation Post") in `battlefield-ravencreek-pois.js`, which carries
> `factionId: 'regal_empire'`. Scoping the sweep to `*-pois.js` by content
> rather than by a hand-listed set of regions is what surfaced it.

---

## Inventory

| File | Count |
|---|---|
| `midlands-pois.js` | 18 |
| `yal-belanor-pois.js` | 6 |
| `vemillia-pois.js` | 5 |
| `baldora-plains-pois.js` | 2 |
| `ironwood-pois.js` | 2 |
| `lockerwood-pois.js` | 2 |
| `mushroom-city-pois.js` | 1 |
| `northern-lands-pois.js` | 1 |

---

## Cross-cutting findings

These affect many POIs at once and are worth settling before the per-POI calls.

### A. `intelReq` is filed in two incompatible shapes — 17 of 37 wrong

20 POIs use the object form `{ faction: 'regal_empire', level: 40 }`. **17 use a
bare number** (`intelReq: 20`). The renderer
(`atlas-map-v2.js` L319–325) tolerates both — a bare number renders as
`clearance 20` with no faction — so this is **not breaking**, but it silently
drops the faction from the tooltip on nearly half the Empire's POIs.

Bare-number POIs: `poi_bp_trade_road`, `poi_bp_imperial_villa`,
`poi_iw_logging_camp`, `poi_iw_isle_of_burbary`, `poi_lw_great_granary`,
`poi_lw_crimson_wing_aerie`, `poi_mid_alpine_bank_raventree`,
`poi_mid_alpine_bank`, `poi_mid_alpine_bank_chambers`, `poi_mid_vellanet_rise`,
`poi_mc_regal_embassy`, `poi_nl_frost_quarry`, `poi_vm_vemia_city`,
`poi_vm_road_wardens_spire`, `poi_vm_salt_mines`,
`poi_vm_silent_service_archive`, `poi_vm_scribes_guildhall`.

**Recommend:** normalise all 17 to the object form. Low risk, mechanical.

### B. The capital's name is spelled two different ways — 41 vs 30 uses

`Midgrual` appears 41 times, `Mighdural` 30 times, across both map data and
`data/`. Both are in active use for the same place. Two POIs carry the
`Mighdural` spelling in their display names (`Imperial District of Mighdural`,
`Grand Library of Mighdural`) while the surrounding prose in the same file says
`Midgrual`.

**This needs your ruling — I am not guessing at canon.** Which spelling is
correct? Once decided it is a global find-and-replace.

### C. Two POIs gate on the wrong faction

- `poi_mid_great_orrery` — `factionId: regal_empire` but `intelReq.faction: mages_guild`
- `poi_yb_knightly_academy` — `factionId: regal_empire` but `intelReq.faction: iron_legion`

Both are defensible on the fiction (the Orrery is arcane; the Academy is
military) but they are the only two of 37 that do it. **Flagging as
"confirm intentional"** rather than recommending a change — if the Orrery is
genuinely Mages' Guild-run under Imperial ownership, that is interesting and
should stay.

### D. Only 4 of 37 POIs link to an article

`poi_mid_imperial_diet`, `poi_mid_alpine_bank`,
`poi_mid_alpine_bank_raventree`, `poi_mid_alpine_bank_chambers`,
`poi_mid_vellanet_rise` carry `articleId` and resolve against
`locations.json`. The other 32 are map-only — clicking them gives the
description and nothing else. Not a bug, but it is the single biggest
opportunity: the Empire's *capital* has no article behind any of its districts.

---

## Region 1 — Midlands (`midlands-pois.js`, 18 POIs)

This is the capital cluster and it holds the most significant structural
problem in the whole dataset.

### The core problem: there is no Imperial capital *city* POI

The 18 Midlands POIs span x 70.6–92.5, y 2–13.5. Within that box we have
`Imperial District of Mighdural` (`capital_city`), `The Imperial Palace`,
`The Imperial Diet` (**also typed `capital_city`**), `The Gilded Quarter`,
`Imperial Herald's Plaza`, `The Obsidian Spire`, and nine more — all of which
read as **districts and buildings inside one city**, none of which is the city.

Compounding it: `poi_mid_ironhold` at x 80.6 y 5.4 is typed `capital_city`,
named "Ironhold", described as **"Capital of the Regal Empire"** — and is filed
`factionId: iron_legion`, so it did not appear in this audit's 37 until I
checked the neighbours. **The Empire's capital is currently owned by the Iron
Legion in the data, and sits 1.5 units from the Imperial District.**

So three POIs within a 4-unit radius are all typed `capital_city`:
Imperial District (81.28, 4.29), Imperial Diet (82.5, 2), Ironhold (80.6, 5.4).

**This is the one decision I need from you before touching anything.** Three
readings are possible and they imply very different fixes:

1. **Ironhold *is* the capital city**, and the Imperial District / Diet /
   Palace / Gilded Quarter are districts within it. Then: retype the districts
   off `capital_city`, and settle whether Ironhold is `iron_legion` or
   `regal_empire` (or dual).
2. **Mighdural is the capital**, Ironhold is the Legion's separate fortress-city.
   Then: Ironhold's description ("Capital of the Regal Empire") is wrong, and a
   Mighdural city POI needs to exist as the parent.
3. **They are the same place under two names** — which would tie directly into
   finding B above.

I have not guessed. Everything below assumes the districts stay as they are.

### Per-POI

| POI | (1) Exist/merge | (2) Belongs here | (3) Data |
|---|---|---|---|
| `poi_mid_capital_district` Imperial District | **Keep**, but see capital ruling | Yes | `capital_city` type is contested; pol 10 / pop 25000 sane |
| `poi_mid_imperial_palace` | **Keep** — distinct, high value | Yes | Sound. intel 70 appropriate |
| `poi_mid_imperial_diet` | **Keep** — has article + loc entry | Yes | **Retype:** `capital_city` is wrong for a parliament building. Should be `landmark` or `town` |
| `poi_mid_noble_district` Gilded Quarter | **Keep** | Yes | Sound |
| `poi_mid_heralds_plaza` | **Merge candidate** — 2.0 from the Diet, and a proclamation plaza is plausibly the Diet's forecourt | Yes | pol 6 / eco 2 fine |
| `poi_mid_silent_service_hq` Obsidian Spire | **Keep** — flagship location | Yes | **Retype:** `prison` is wrong for an intelligence HQ. `tower` or `landmark` fits |
| `poi_mid_great_orrery` | **Keep** | Yes | See finding C (mages_guild gate) |
| `poi_mid_imperial_university` | **Keep** | Yes | Sound |
| `poi_mid_grand_library` | **Keep** — has `libraryStockKey`, wired to library system | Yes | Sound. Name carries contested spelling |
| `poi_mid_magitek_foundries` | **Keep** | Yes | Sound. eco 10 / pop 8000 consistent |
| `poi_mid_imperial_mint` | **Keep** | Yes | Sound |
| `poi_mid_diplomatic_quarter` | **Keep** | Yes | **Retype:** `village` is wrong for a walled capital district. `town` fits |
| `poi_mid_artificers_guild` | **Keep** — described as semi-independent | Yes | **Query:** if it "maintains independence", is `regal_empire` the right owner? |
| `poi_mid_imperial_menagerie` | **Keep** | Yes | Sound |
| `poi_mid_alpine_bank` | **Keep** — article-backed | Yes | Bare `intelReq` |
| `poi_mid_alpine_bank_chambers` | **Keep separate** — 0.5 away but a hidden sublevel with its own article; the separation is the point | Yes | Bare `intelReq` |
| `poi_mid_alpine_bank_raventree` | **Keep** — different branch, 8 units away | Yes | Bare `intelReq`; pop 18 |
| `poi_mid_vellanet_rise` | **Keep** — PC holding, article-backed | Yes | Sound. Only POI with an in-world extent ("eleven miles") |

**Closest pairs:** Alpine Bank ↔ Chambers 0.50 · Orrery ↔ Chambers 0.64 ·
Orrery ↔ Alpine Bank 0.82 · Diet ↔ Herald's Plaza 2.00.

The Orrery sitting 0.64 from the bank's secret sublevel is almost certainly
**coordinate drift, not intent** — an observatory and a vault basement have no
reason to be co-located. Recommend nudging the Orrery.

---

## Region 2 — Yal Belanor (`yal-belanor-pois.js`, 6 POIs)

The most internally coherent group in the set. Every POI reinforces one theme
(noble privilege codified as the Provincial Edicts) and each one references that
code from a different angle.

| POI | (1) Exist/merge | (2) Belongs here | (3) Data |
|---|---|---|---|
| `poi_yb_belanor_city` | **Keep** — provincial capital | Yes | Sound. pol 9 / pop 45000 |
| `poi_yb_provincial_archives` | **Keep** — wired to library system (`provincial_archives` stock key) | Yes | Sound |
| `poi_yb_knightly_academy` | **Keep** | Yes | See finding C (iron_legion gate) |
| `poi_yb_veridia_estate` | **Keep** — named NPC seat (Lady Elara Veridia, Speaker of the Diet) | Yes | **Retype:** `village` is wrong for an estate. No better type exists — `town` or `castle` are the nearest |
| `poi_yb_sunstone_vineyards` | **Keep** | Yes | Sound |
| `poi_yb_griffon_roost` | **Keep** | Yes | **pop 0** on a `lair` is correct (no settlement); flagging only for consistency with the other pop-0 case |

**Note:** `poi_yb_veridia_estate` is the seat of the Diet's Speaker, and
`poi_mid_imperial_diet` is the Diet itself, in a different region file, with no
link between them. Worth a cross-reference.

---

## Region 3 — Vemilia (`vemillia-pois.js`, 5 POIs)

| POI | (1) Exist/merge | (2) Belongs here | (3) Data |
|---|---|---|---|
| `poi_vm_vemia_city` | **Keep** — regional hub | Yes | Sound. eco 10 / pop 60000 — **largest Empire settlement in the data**, bigger than the capital district |
| `poi_vm_scribes_guildhall` | **Merge candidate** — 2.5 from Vemia City, and its description says it *is* "the public library for Vemia City" | Yes | Wired to library system. If kept, it is a building inside the city |
| `poi_vm_salt_mines` | **Keep** | Yes | Sound. Links to The Unchained (indentured labour) |
| `poi_vm_silent_service_archive` | **Keep** — good hidden-site design | Yes | **Retype:** `prison` is wrong for a disguised warehouse archive. Same mistype as the Obsidian Spire |
| `poi_vm_road_wardens_spire` | **Keep** | Yes | **Description contradicts itself:** "A massive, magically-powered watchtower... *It also serves as a watchtower* for the Imperial Guard." Redundant clause, reads like an editing artifact |

**Population flag:** Vemia City at 60,000 exceeds the Imperial District at
25,000 and Ironhold at 42,000. Defensible if Vemia is the Empire's commercial
centre vs. its administrative one — but worth confirming that is deliberate,
because currently the Empire's biggest city is a provincial trade town.

---

## Region 4 — Baldora Plains (`baldora-plains-pois.js`, 2 POIs)

| POI | (1) Exist/merge | (2) Belongs here | (3) Data |
|---|---|---|---|
| `poi_bp_trade_road` The Great Imperial Road | **Keep, but reconsider the form** — a *road* as a point marker is odd; it is linear infrastructure rendered as one dot | Yes | **pop 0** correct for a road. Bare `intelReq`. Description says "patrolled by the Iron Legion" but owner is `regal_empire` — fine, but the Legion connection is unmodelled |
| `poi_bp_imperial_villa` Governor's Villa | **Keep** | Yes | **Retype:** `village` for a villa estate — same mistype as Veridia Estate. pop 200 |

The road is the only POI of its kind in the set. If the map ever gains polyline
support this is the first candidate; until then a point is an acceptable
compromise.

---

## Region 5 — Ironwood (`ironwood-pois.js`, 2 POIs)

| POI | (1) Exist/merge | (2) Belongs here | (3) Data |
|---|---|---|---|
| `poi_iw_logging_camp` | **Keep** — good conflict hook (clear-cutting vs. local Rakasha) | Yes | Sound. eco 9 / pop 1500. Has `crime_rate` + `age_of_antiquity` |
| `poi_iw_isle_of_burbary` | **Keep** | **Query** — the province is named "Ironwood **& Isle of Burbary**" in `provinces.js`, so it belongs; but at (21, 10) it is 23 units from the logging camp, by far the most isolated Empire POI | `prison` type **correct** here (penal colony). Sound otherwise |

Burbary is the only correct use of `prison` in the entire Empire dataset — the
other two (`Obsidian Spire`, `Silent Service Archive`) are mistyped.

---

## Region 6 — Lockerwood (`lockerwood-pois.js`, 2 POIs)

| POI | (1) Exist/merge | (2) Belongs here | (3) Data |
|---|---|---|---|
| `poi_lw_great_granary` | **Keep** | Yes | Sound. eco 10 justified for a provincial grain reserve |
| `poi_lw_crimson_wing_aerie` | **Keep** | Yes | **Retype:** `port` for an *airship* dock. Understandable (no `airship_dock` type exists) but `port`'s ⚓ icon will read as naval on the map. Either add an air-dock type or accept |

---

## Region 7 — Mushroom City (`mushroom-city-pois.js`, 1 POI)

| POI | (1) Exist/merge | (2) Belongs here | (3) Data |
|---|---|---|---|
| `poi_mc_regal_embassy` | **Keep** | **Yes — and this is the correct pattern.** An Empire-owned POI sitting in foreign territory is exactly right for an embassy; it should *not* be moved to Empire lands | Bare `intelReq`. Sound otherwise |

Note the symmetry: the Midlands hosts the Mushroom Kingdom Embassy, Middle-Earth
Embassy, Onyx Embassy and two Internet Embassies. The reciprocal arrangement is
consistent.

**Duplicate flag, outside Empire scope:** `midlands-pois.js` contains
**two** POIs named "The Internet Embassy" (87,10 and 92,10), both
`internet_federation`. Not an Empire POI so out of scope for this audit, but
it looks like an accidental duplicate and is worth a separate look.

---

## Region 8 — Northern Lands (`northern-lands-pois.js`, 1 POI)

| POI | (1) Exist/merge | (2) Belongs here | (3) Data |
|---|---|---|---|
| `poi_nl_frost_quarry` | **Keep** — strong hook (forced labour, conquered clans, feeds the magitek engines) | Yes — an extraction site in conquered territory should sit in that territory | Bare `intelReq`. `quarry` type correct. Sound |

Good design: it explicitly feeds `poi_mid_magitek_foundries`, so two POIs in
different regions form a supply chain. This is the only such chain in the set
and more of it would be welcome.

---

## Summary of recommendations

**Merge candidates (2)** — both need your call, neither is clear-cut:
- `poi_mid_heralds_plaza` into `poi_mid_imperial_diet` (d=2.0)
- `poi_vm_scribes_guildhall` into `poi_vm_vemia_city` (d=2.5, and its own
  description says it is the city's public library)

My inclination is **keep both separate** — the Plaza is a distinct propaganda
function, and the Guildhall is wired into the library system with its own stock
key. Merging would cost more than it saves.

**Moves: none.** Every POI is in a defensible region, including the embassy
(correctly abroad) and the Frost-Spire Quarry (correctly in conquered land).
The only sited oddity is the Great Orrery at 0.64 from a bank basement, which is
drift rather than a wrong region.

**Retypes (6), highest-confidence changes in the audit:**

| POI | Now | Should be |
|---|---|---|
| `poi_mid_silent_service_hq` | `prison` | `tower` / `landmark` |
| `poi_vm_silent_service_archive` | `prison` | `landmark` / `trade_post` |
| `poi_mid_imperial_diet` | `capital_city` | `landmark` |
| `poi_mid_diplomatic_quarter` | `village` | `town` |
| `poi_bp_imperial_villa` | `village` | `town` / `castle` |
| `poi_yb_veridia_estate` | `village` | `town` / `castle` |

**Data hygiene:**
- Normalise 17 bare `intelReq` numbers to object form
- Resolve the Midgrual / Mighdural spelling split
- Fix the self-contradicting `poi_vm_road_wardens_spire` description
- Confirm the two cross-faction intel gates are intentional

**Blocking question:** the three-way `capital_city` collision between
Imperial District, Imperial Diet and Ironhold — including Ironhold being
described as the Empire's capital while owned by `iron_legion`.
