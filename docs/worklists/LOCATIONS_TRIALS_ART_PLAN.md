# Locations & Trials art pass — plan

Status: **plan only, not executed.** Written before generating anything because
this is the largest remaining art gap and the wrong batching decision is
expensive to undo.

## The gap

| Set | Records | With art | Missing |
|-----|---------|----------|---------|
| `locations.json` | 71 | 6 | **65** |
| `trials.json` | 7 | 0 | **7** |

Conflicts are done (10/11 — `koopa_resistance` deliberately skipped, see below).
Nations are done (31 crests). This is the last big set of records that opens as
a wall of text.

## What already works — do not rebuild it

`articleLead()` (index.html ~5511) already renders `item.image` as a lead figure
for **any** record type, and `locationThumb()` already prefers a real image over
generated art. So the entire delivery mechanism exists. **Adding art is a data
change: set `image` on the record and it appears.** No new render path is
needed for either set.

Trials have no bespoke thumb function and fall through `cardVisual` to
`autoArt`, which is fine for cards; the lead figure is what matters.

## Constraint that shapes everything: repo weight

`.git` is already **~1 GB**. The conflict plates cost 3.1 MB for 10 at 1600px
JPEG q86 (avg 306 KB) — but they were 38.3 MB as raw PNG. At that raw rate, 72
more images would add ~275 MB to history permanently.

**Rules for this pass:**
1. Generate, downscale, and **delete the PNG in the same step** (as with the
   conflicts). Never commit a raw generation.
2. Locations get **1200px** (not 1600) — they render as lead figures and cards,
   not hero banners. Target ≤180 KB each.
3. Budget: **65 locations ≈ 11 MB, 7 trials ≈ 2 MB.** Acceptable. Anything
   trending past ~20 MB total means the quality/size dial is set wrong — stop
   and re-tune rather than pushing.

## Why this cannot be one batch

`generate_image` caps at ~9–10 per turn (recorded in earlier sessions). 72
images is **8+ turns minimum**. Attempting it in one pass will fail partway and
leave the data half-wired, which is worse than not starting.

So: **ship in themed batches, each one complete and committed.** Every batch is
independently valuable and the site is never in a broken intermediate state.

## Batching

`type` and `region` are free text and almost entirely unique per record (65
distinct type strings across 71 locations), so they cannot drive grouping.
Grouping is therefore **thematic**, by what the image actually has to depict —
which is also what keeps a batch's prompts consistent.

| # | Batch | Count | Notes |
|---|-------|-------|-------|
| 1 | **Trials** | 7 | Highest value per image: 7 records, 0 art, each a named courtroom drama with defendant and verdict. Do these first. |
| 2 | Raventree Manor & its reflections | ~9 | Shadowfell / Feywild / Mirror variants of one manor — must look like *the same building* across planes. Consistency matters more here than anywhere else. |
| 3 | Regal Empire & Mighdural | ~10 | Capital, fortresses, border walls, mountain passes. |
| 4 | Mushroom Kingdom | ~10 | Central territory, ruins, guild district, Star Hill. |
| 5 | Monster Underground & Mount Ebott | ~8 | Caves, Snowdin, barrier approaches. |
| 6 | Planar & extradimensional | ~9 | Astral Sea, Deep Mirror, Star Haven, sanctums. |
| 7 | Remaining / one-offs | ~19 | Coastal provinces, Isle Delfino, vehicles, clinics, banks. |

Order is deliberate: trials first (best value), Raventree second (hardest
consistency requirement — worth doing while attention is fresh), then the
large geographic blocks, one-offs last.

## Per-batch procedure

1. Read the records' `summary`, `description` and `notableFeatures` — the
   prompt comes from the filed text, not invention.
2. Generate ≤9 images.
3. Downscale to 1200px JPEG q86, delete PNGs, report before/after totals.
4. Write `image` onto each record; assert the file exists before saving JSON.
5. `check-all.py` + `check-page-assets.py`, then commit that batch alone.

## Deliberate exclusions

- **`koopa_resistance`** (in `conflicts.json`) stays without a plate. It reads
  as a faction record misfiled among the conflicts; giving it a battle scene
  would hide a data problem behind good art. Flag it for the GM instead.
- Records whose `region` says the position is unfiled or unconfirmed still get
  art — the *place* exists even when the map position does not.

## Open question for the GM

Several locations are Feywild/Shadowfell/Mirror reflections of the same site.
Two options: (a) one image reused across the set, or (b) a distinct plate per
plane, same architecture, different palette. **(b) is the recommendation** —
the reflections are narratively distinct and the palette shift is exactly the
kind of thing art conveys faster than prose — but it is 4× the images for one
building, so it is worth confirming before spending the budget.
