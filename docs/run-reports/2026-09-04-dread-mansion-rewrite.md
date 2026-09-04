# Run report — The Dread Mansion Incursion, rewritten from the transcript

**Date:** 2026-09-04 · **Branch:** `arena/01a069d5-bik` · **PR:** #66 → `gh-pages`
**Model:** Arena.ai Agent Mode

The user supplied the source roleplay in full and reported the existing record
was "wildly off" and had no images. The images shipped in the previous commit
(`f969665`); this run is the prose and everything downstream of it.

---

## 1. Files created or edited

```
EDITED
  Reputation-Matrix2/data/events.json           ~ the_dread_mansion_incursion rebuilt
                                                  8 → 14 sections, 1,747 → 8,863 words
  Reputation-Matrix2/data/props.json            + 3 exhibits (prop_dgk_retrieval_order,
                                                  prop_vale_clearance_badge,
                                                  prop_bowser_painting_note)
                                                ~ prop_spirit_residue_dgk_call articles[] +3
  Reputation-Matrix2/data/investigations.json   ~ dread_mansion_file: +3 exhibits, +2 threads,
                                                  +2 leads, plainSummary 3 → 6, hook + lastFiled
  Reputation-Matrix2/data/characters.json       + riba (new entry, named in prose, had none)
                                                ~ alice / liam / director_vale relatedArticles
  Reputation-Matrix2/data/locations.json        ~ the_dread_mansion: image + caption (was empty),
                                                  controllingFaction, +3 notableFeatures,
                                                  +5 relatedArticles
  Reputation-Matrix2/data/wahwire/posts.json    + wahwire_dread_mansion_unsigned_order (order 16)
  index.html                                    ~ SITE_UPDATES entry for the event refreshed

DELETED (from the event record — see §5)
  reputationChanges · effects · reputationNotes · _generatedReputation
```

No generated artifacts were rebuilt this run.

---

## 2. Events filed

```
EVENT  the_dread_mansion_incursion — "The Dread Mansion Incursion:
       The Order Nobody Signed and the Face That Followed"
  date      ~872 BF (one week after Peach gave Luigi the handkerchief)
  era       Inter-Crisis Period — the older haunted-estate records   (was "Current Crisis")
  location  the_dread_mansion (existing; now carries an image)
  parties   liam, luigi, mario, alice, director_vale, wario, waluigi  (all 7 resolve)
  length    14 sections / 8,863 words / 6 plates / 14 asides / 14 waluigi_notes
  status    open — Mario unrecovered, diary unopened, order unattributed
  route     #/article/the_dread_mansion_incursion
```

**Craft numbers** (event audit, `AUDIT_SCRIPTS.md`): 72% story / 28% analysis ·
sensory 9.8/1k · abstract 0.0/1k · dialogue 16.6/1k · sentence sd 10.5 (floor ~6)
· fragments 35% · aphorisms 8.7/1k (ceiling ~25). **Nothing flagged.**

Sections run 387–649 words; asides 50–63 words; notes 77–98 words; aftermath 187
(band 150–250); assessment 443 (band 300–500); summary 77 (band 40–80);
notableFeatures 8 (band 5–8). Section XIV runs clean with no aside — the
guide's "~1 section in 6 carries no commentary," landing on the callback object.

### Transcript beats restored (were missing entirely)

Alice betrayed by the mansion's owner **Riba** · Mario possessed **because he
read the diary and pitied her** · the **Bowser note** (Power Stars sealed in
paintings, Peach taken) and the blank canvases in the lower hall · Luigi
withholding it for a day out of fear · **Wario and Waluigi** crossing the back
lawn in modified DGK uniforms with a sack · the **trust confrontation** over
Luigi's DGK slip · the **childhood photograph** inscribed *"To my brave boys.
Always protect each other."* · the doppelgänger's **mid-fight position swaps** ·
the eight-name contact roll call · the boot-pressure charging of the vial.

Waluigi was on the grounds but not in the rooms, so asides are third-person
ringside **except** section XIII, which is his own testimony in first person
("I was in the garden") per the guide's witness rule.

---

## 3. XP awarded

Filed on the event record only. **Not** reconciled with the authoritative
ledger — treat as preview until the table confirms.

| Character | `xpKey` | Category | XP | For |
|---|---|---|---:|---|
| Luigi | `luigi` | social | 180 | Produced three workable options under fire; answered an accusation with the photograph |
| Luigi | `luigi` | combat | 140 | Candlestick to Vale's shoulder, not his head; tackled the duplicate off a killing strike |
| Luigi | `luigi` | survival | 120 | Broke the sealed door, crossed the looping grounds twice, refused to split the party |
| **Total** | | | **440** | across 1 character |

Only Luigi is awarded. `liam`, `alice` and `director_vale` have no `XP_SUMMARY`
key, so awarding them would file rows that never render — see §5.

---

## 4. Verification

```
python3 tools/check-all.py            12/14 — injury table + investigations
                                      (both PRE-EXISTING, unchanged by this run)
python3 tools/check-exhibits.py       0 errors, 0 warnings   (130 props)
python3 tools/check-investigations.py 25 errors — all pre-existing, on unrelated
                                      auto-generated aftermath files; zero on dread_mansion_file
python3 tools/check-rolls.py          0 errors  (53 rolls / 24 targets)
python3 tools/check-home-feed.py      OK
python3 tools/check-readability.py --event the_dread_mansion_incursion
                                      1 advisory (drumbeat inside clipped phone dialogue — intentional)

node tools/tests/test-home-feed-render.mjs     11/11
node tools/tests/test-faith-render.mjs         40/40
node tools/tests/test-reputation-two-axis.mjs  25/25
```

**Render verification** (throwaway jsdom harnesses, deleted after use): 14
section headings render · 14 asides styled as `em.walu-aside` · all 6 plates in
the article and HTTP 200 · 3 inline `[[prop:]]` triggers resolve to `.proplink`
· no raw markers or leaked `<div>` · exhibit tiles present · no
`_generatedReputation` text · investigation page shows 3 new exhibits and 4
leads · `riba` article resolves · mansion location shows its image · portraits
render on `liam` / `alice` / `director_vale`.

**Index** — home feed ✓ (dynamic, reads `events.json`) · SITE_UPDATES ✓
(refreshed in place) · `mainPage.json` **deliberately not re-pinned** — see §5.

**RNN** — pending 7/10, `the_dread_mansion_incursion` already listed. No
episode owed.

---

## 5. Not done / open

- **`mainPage.json` was not re-pinned to this event.** `the_scorncrow_skirmish`
  is the genuinely-latest session; this is a rewrite of an old filing, so the
  SITE_UPDATES entry was refreshed in place instead of promoting a ~872 BF
  record to Latest Filing. Reverse it if you'd rather lead with the rewrite.
- **The whole reputation layer was deleted from this record, not corrected.**
  The `_generatedReputation` block (qwen2.5-7b) had written a `reputationNotes.waluigi`
  attributing **Liam's doppelgänger to Waluigi** — factually wrong — plus
  `reputationChanges` on `wario_enterprise`/`koopa_troop` and `effects` on
  `koopa_troop`/`mushroom_regency` that nothing in the transcript supports. No
  replacement deltas were authored: no faction's standing plausibly moved at
  ~872 BF on this evidence. Deleting beats inventing.
- **No XP for Liam, Alice or Director Vale** — none has an `XP_SUMMARY` key, so
  rows would file but never render. Add the keys first if they should be scored.
- **No dossier assessments touched.** §9E keys are `archie/markop/hjumpik/bowser/remi`;
  no operator in this filing appears there, and no faction's opinion demonstrably moved.
- **`riba` is a stub built entirely from Luigi's secondhand testimony.** No
  independent source confirms he existed; the entry says so.
- **Slot 4 of the original image sheet (a study interior) was never generated.**
  The set is 6 plates, not the 7 the prompt sheet numbered; section XI ("The
  Study with the Cracked Blue Handle") therefore runs without a plate.
- **The era conflict is resolved by moving this record, not the other.** It now
  reads "Inter-Crisis Period — the older haunted-estate records," aligning with
  `luigis_mansion_incident` at the same ~872 BF. If that grouping is wrong, both
  records need to move together.
- **Alice's link to the Luigi's Mansion haunting remains unasserted.** The
  transcript does not support it and the filing does not claim it.
- The two `check-all.py` failures (`injury table` missing entries 170–171;
  `investigations` 25 errors on auto-generated battle-aftermath files) are
  **pre-existing** and untouched by this run.
