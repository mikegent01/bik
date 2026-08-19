# Prompt sheet — Liberated Toads contact sheets A / B / C

**Date:** 2026-08-19  
**Rule:** write this before generating. Source: `Toadslist.xlsx` Sheet1 (weapon, affiliation) + `data/races.json` → Toads (cap colour is lineage, not a separate race).

These sheets are **design stock**, not roster art. Toads the user has not filed stay `unknown` / `???` on the page until a portrait is accepted.

**Must NOT appear (all slots):** lettering, numbers, watermarks, extra characters, photoreal humans, merged cells, a white picture-frame around the grid.

**Text in image:** NONE.

---

## Shared medium

Cartoon video-game Toad (mushroom-cap head, short body, vest, shoes). Contact sheet, **cells flush to every edge of the image** — no outer margin, no paper border. Thin light-grey grid only. One full-body character per cell, centred, plain white cell background. Distinct cap lineages (red-spot, green, blue, yellow, purple, earth, star, forest). Consistent scale.

---

## Slot A — sheet 6×6, 36 cells

**Source:** roster #7–#58 excluding already-filed user art (Dan, Salam, Lucky T, Creek, Bearr, Spoky, Bion, Axie, Freaza, Rivers, Naners, Rawra, Regan, Bluey, Slinat, Swig).

**Must appear:** 36 equal squares; weapons as listed (crossbow, musket, unarmed vest, megaphone, staff, fishing spear, ball-and-chain, rock sword, gavel, spore gas, flower blades, scholar shield, fire, glasses, portal, translucent toad, skull glow, vial, bricks, healing breath, rifle, lily sniper, ink bottle, quills, gears, hammer, vine spears, riot shield, aroma, long tongue, smoke grenade, spiked tail, four spore *creatures* not Toads).

**Prompt:** (see generation call)

---

## Slot B — sheet 6×6, 36 cells

**Source:** Lillypads (colour-coded vigilantes) + remaining Speaker L / River followers + extras.

**Must appear:** yellow lightning, green vines, black shadow, pink gas, white light, gold Midas, silver lead, eye-beams, knives, water, hooded spore ???, fangs, baker, bug spray, fox tail, bug jar, calculator *held by a Toad*, then unused cells as generic silhouettes (not named).

---

## Slot C — remainder / makeup

Only if A or B leaves named roster cells unusable after visual check. Same medium. Do not invent extra named toads.

---

## After generation

1. `read_file` each sheet.  
2. Reject if: outer white frame, uneven cells, all-red-cap clones, text.  
3. Crop only if the inner grid is even.  
4. Do not wire a cell to the roster until it is accepted. Unfiled stay `???`.
