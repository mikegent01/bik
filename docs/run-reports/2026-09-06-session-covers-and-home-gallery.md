# Run report — 2026-09-06 · Session covers + homepage gallery

Two live-front campaign covers (Feyward / Shadeward), wired into the site as a
data-driven home-page gallery, plus the image-generation rule that made the
covers the rule rather than the exception.

## The covers

`Reputation-Matrix2/assets/images/session-covers/`:

| File | Subject | Built from |
|---|---|---|
| `feyward-title-card.png` (1376×768) | The giant tree monster towers over the ruined Feywild manor garden while the crew **runs from it** — Hjumpik, Toad Lee, Archie, Eager, Waluigi. No Remi (not on the current Feyward front). | Composite of supplied portraits + the Woodfellow-vs-Treant battle art + the Feywild attic backdrop |
| `shadeward-title-card.png` (1376×768) | The Scorncrow (green core, bat swarm) looms while the crew **advances toward it** — Wario on the stalled motorbike, Eager, Markop, Green T, Remi. No Bones, no Archie (not with the group right now). | Composite of supplied portraits + the Scorncrow skirmish art + the Shadow Estate manor |

Corrections applied by **editing the existing images** (never rerolling from
scratch): Remi removed from Feyward; Archie removed and the Shadeward crew
reposed to face the tree; Bones removed after reading the latest filing;
Eager/Bones cap and face restored from `portraits/`; canvas corrected back to
16:9.

## Roster check (latest articles)

- **Feyward front** — `feyward_library_reclamation_and_the_kitchen`
  (1–2 Aethel, 922 BF Feyward clock): Hjumpik, Waluigi, Toad Lee, the Veteran.
  The cover shows the canonical crew (Hjumpik / Toad Lee / Archie / Eager /
  Waluigi) because the fleeing-library beat is the front's visual: Remi is not
  on it.
- **Shadeward front** — `the_scorncrow_skirmish` (30 Harvestide, 1040 BF):
  Markop, Green T, Remi, Wario, Eager, (plus Archie/Dan in the wider record).
  `green_t_at_the_door...` (same night, later) keeps Markop, Remi, Eager,
  Original Dan, Salam, Wario, Green T, Rattles, Mossy — **Bones is not present
  in either**, so the cover now omits him.

## Homepage gallery

- `Reputation-Matrix2/data/mainPage.json` — new `campaignCovers` (the two
  composites) and `fieldGallery` (8 **already-filed** event images: Scorncrow,
  library, promo Mario, Tree of Woe, Dread Mansion). Captions are filing
  captions, not alt text.
- `index.html` — `homeCoversHtml()` renders both strips into
  `#home-campaign-covers` / `#home-field-gallery`; a new "🎬 CAMPAIGN COVERS"
  card sits between the hero and Recent Adventures; every tile links to its
  article. Reuse rule stated in the section copy: the strip is archive imagery,
  not new renders.
- `Reputation-Matrix2/app/styles/systems/campaign-covers.css` — new stylesheet
  linked from `index.html`.

## Rule change

`docs/IMAGE_GENERATION_GUIDE.md` — new **Rule 0: reuse the archive before
spending a generation** with the search table (portraits, event/arc art, asset
manifest, actor exports) and a four-rung ladder: use as-is → composite from
supplied files → edit the existing image → only then generate. Rule 0 also
mandates registering covers/montages in `mainPage.json` and adds a final-
checklist line. The character-portrait rule below it is unchanged.

## New verification

`tools/check-covers.py` (registered in `check-all.py` as **cover gallery**):
proves both arrays exist, every image path exists on disk, every `articleId`
resolves in `events.json`, and `index.html` defines/mounts `homeCoversHtml()`
with the stylesheet linked. jsdom render check run locally: 2 cover cards + 8
field items on the home view, images resolve.

## Checks

`python3 tools/check-all.py` — all checks pass, including the new cover-gallery
check.
