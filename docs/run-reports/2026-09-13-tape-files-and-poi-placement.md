# Run report — 2026-09-13 — the VHS session, the water audit, and pins that hold still

Three unrelated requests in one run, kept in separate commits because they are
separate purposes.

---

## 1. Files created or edited

### Map rendering (commit `7e8a826`)

| File | Change | Size |
|---|---|---|
| `Reputation-Matrix2/app/pages/maps/atlas-map-v2.css` | Removed every `scale` from marker/dot/token `:hover` and `.selected`; hover now signals with `outline` + `opacity` only | ~6 lines |
| `index.html` | Cache key `map18` → `map19`, four sites | 4 lines |

### POI placement audit (commit `7e8a826`)

| File | Change | Size |
|---|---|---|
| `tools/check-poi-placement.py` | **New.** Samples `fullmap.png` under every pin, reports land POIs standing in open water | 195 lines |
| `tools/fix-poi-placement.py` | **New.** Spiral-searches outward from each wet pin for the nearest unoccupied dry coordinate and rewrites the source module | 215 lines |
| `Reputation-Matrix2/map-data/midlands-pois.js` | 11 pins moved ashore | 22 lines |
| `Reputation-Matrix2/map-data/jungle-of-thorns-pois.js` | 4 pins moved | 8 lines |
| `…/northern-lands-pois.js`, `…/ironwood-pois.js`, `…/lockerwood-pois.js`, `…/yal-belanor-pois.js`, `…/autumnwood-pois.js` | 1 pin each | 2 lines each |
| `Reputation-Matrix2/data/provinceCensus.json` | Regenerated for the moved pins | generated |
| `tools/check-all.py` | Registered `POI placement` | 4 lines |
| `tools/tests/test-map-lenses.mjs` | Added 2 checks: no marker resizes on hover; hover still speaks in ink | 12 lines |
| `tools/tests/test-location-map-preview.mjs` | Reads the estate's coordinate from data instead of restating `72.9` | 6 lines |

### The VHS session (this commit)

| File | Change | Size |
|---|---|---|
| `tools/build-tape-and-files-session.py` | **New.** Single generator owning all three articles + the front page | 1,010 lines |
| `Reputation-Matrix2/data/events.json` | `the_tape_and_the_wario_files` — 7 sections | +171 lines, 0 deletions |
| `Reputation-Matrix2/data/articleAnalyses.json` | `the_brothers_argument_line_by_line` — 7 sections + 3 research-desk rolls | +105, 0 deletions |
| `Reputation-Matrix2/data/commentaries.json` | `the_tape_and_the_wario_files_commentary` — 8 sections | +58, 0 deletions |
| `Reputation-Matrix2/data/mainPage.json` | `featuredArticle` + `latestUpdate` → the new event | 6 lines |
| `Reputation-Matrix2/assets/images/events/the-tape-and-the-files/` | **New.** 5 images | 5 files |
| `tools/check-all.py` | Registered `tape session` | 4 lines |
| `tools/tests/test-planar-map.mjs` | De-hardcoded a party-bucket count that fires on every new filing | 7 lines |

---

## 2. What it means

### The pins were in a lake

Nobody had ever checked whether a POI's coordinate lands on something
sensible. A pin's x/y is a percent of the painted artwork, which makes the
painting the authority — so the audit samples the painting.

The whole **Raventree Manor district** was floating in Aona's Scorn: the manor,
the Shadow Estate and its gardens, the Artificer's Guildhall, Tymna's Cottage,
three groves, the Undercroft, the Magitek Foundries. Twenty pins across the
sheet in total. The manor's own filed description places it "in the misty woods
southwest of the capital", so the prose was right and the coordinates were
wrong.

Both tools are deliberately narrow, and the narrowness was earned: a first
draft audited every sheet and produced **358 findings**, nearly all noise,
because several maps share generic illustration art whose coastlines the pins
were never registered against (`earth_land.png` is a world that genuinely is
mostly ocean). Scoped to real cartography, with water-typed POIs exempt, it
finds 20 and all 20 are real. The Sunken Temple of the Moon and the Kraken's
Trench correctly stayed where they were.

### Dots hold still

Hover may change ink; it may not change geometry. A marker that swells under
the cursor shoves the thing you were aiming at out from under the pointer.

### One session, three documents

The transcript contains three different *kinds* of document, so it is filed as
three articles rather than one overstuffed one:

- **The event** — what happened in the room over two days.
- **The analysis** — the tape's argument read one line at a time. This matters
  because the archive has carried that argument for two filings on the word of
  a blue-painted impostor who was not in the room. There is now a primary
  source.
- **The commentary** — Waluigi's Cut, the whole thing retold loudly.

The analysis reaches a reading I want flagged for the table, because it changes
a character: **this is not a corruption story.** Luigi never once asks Mario to
atone for a crime; he asks nine different ways to be *acknowledged*, and Mario
answers every one of them with the bond instead of the grievance. Luigi's
unprompted "I'm-a not-a jealous" is him answering a charge nobody made out
loud. Two items went to the open file: a witness at the window who has never
been interviewed, and an **editor** — somebody cut this tape into silhouette for
one passage and chose where it ends.

### Images

Per `IMAGE_GENERATION_GUIDE.md` Rule 0 and the user's explicit instruction, no
character was generated from scratch. All three figures were composited from
`portraits/waluigi.png`, `portraits/wario.png` and
`portraits/luigi_operative.webp` passed as references. The one image with no
characters in it (the evidence table) was generated free, since there was no
likeness to protect.

---

## 3. Verification

```
python3 tools/check-all.py                        → All requested checks passed
python3 tools/check-poi-placement.py              → no land pins adrift (205 checked)
python3 tools/build-tape-and-files-session.py --check
                                                  → event, analysis and commentary match
node tools/tests/test-map-lenses.mjs              → 79 passed, 0 failed
node tools/tests/test-planar-map.mjs              → 50 passed, 0 failed
node tools/tests/test-location-map-preview.mjs    → 28 passed, 0 failed
python3 tools/check-commentaries.py               → PASS (7 filed)
```

Commentary voice metrics, against the house targets (`≥18` Waluigi/1k,
`≥25` CAPS/1k, `≥0.9×` source length):

```
the_tape_and_the_wario_files_commentary
  8 sections · 2585 words · Waluigi/1k 46.8 · CAPS/1k 55.7 · 0.91x source
```

Live-server spot check on `:8765` — all three data files and all five images
return `200`.

Three failures were found and fixed during the run, all of them tests that had
frozen a value which legitimately changes:

- `test-location-map-preview.mjs` asserted `data-x="72.9"` for the Shadow
  Estate, which moved ashore. Now reads the coordinate from the data.
- `test-planar-map.mjs` asserted a party-event bucket total of exactly `76`,
  which increments whenever any session is filed. Now asserts the *partition*
  (every touched event in exactly one bucket) rather than the total.
- `provinceCensus.json` needed regenerating for the moved pins.

---

## 4. What is still open

- **`fix-poi-placement.py` is a nudge tool, not a cartographer.** It refuses to
  move a pin more than 10% of the sheet and reports anything it cannot place.
  Nothing hit that limit this run.
- **Only `fullmap.png` is audited.** Adding a sheet to `CARTOGRAPHIC` is a
  one-line change, but each one needs a human to confirm its pins were ever
  registered against its painted coastlines.
- **The coin.** Somebody with Star Festival fund access knew Waluigi had won
  nothing and knew which bed was his. Filed as an open case for the first time.
- **The editor and the watcher.** Both went to the analysis's open file with
  research-desk rolls attached; neither is resolved.
