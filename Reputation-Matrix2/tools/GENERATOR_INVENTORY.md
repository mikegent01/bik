# Generatable systems — inventory

Counted from the data files on 15 Aug 2026, before any generation ran. This is
the report the runner is not allowed to skip: nothing gets generated until the
list of what *can* be generated has been looked at by a person.

Every number below came from the files, not from memory.

---

## 1. Systems with data, ready to extend

| System | Source | Now | Shape of the gap |
|---|---|---|---|
| Training Wing abilities | `data/abilityShop.json` | 895 across 11 classes | Level 1 holds 271; levels 2–20 average ~33. Thinnest classes: spy 68, gunslinger 72, artisan 73, rogue 75, militia 78, wizard 81. |
| Crafting Forge recipes | `data/crafting.json` | 1,038 recipes, 372 materials, 8 schools | **831 of 1,038 recipes have no school.** That is the real gap here — not volume, classification. |
| Shop / Warizon items | `data/shop-items/items_*.js` (84 files) | 7,732 with a rarity | Skewed: rare 3,273, uncommon 1,723, epic 859, **common 661**, legendary 653, godly 320, mythic 207. Plus strays: cosmic 15, junk 11, very_rare 6, forbidden 2, unique 2. |
| Bros attacks | `data/brosAttacks.json` | 2 attacks, 5 schools | 3 schools (lift_carry, shieldwork, misdirection) are named but empty. |
| Badges | `data/shop-items/items_badges.js` | 10 | Each must commemorate something already recorded elsewhere. |
| Bros kits | `data/shop-items/items_bros.js` | 4 | One teaching kit per technique, plus blanks. |

### Rarity walk

The runner walks `common -> uncommon -> rare -> epic -> legendary -> mythic ->
godly` and generates against the *deficit*, so a run naturally fills common
(661) long before it adds another rare (3,273). The four stray rarities
(`very_rare`, `cosmic`, `junk`, `unique`, `forbidden` — 36 items total) are
left alone; they look deliberate.

---

## 2. Systems that are empty or missing

| System | State | Consequence |
|---|---|---|
| **WAHwire posts** | **19 posts total, all in `data/events/scheduled-posts.js`.** `WAHWIRE_POSTS`, `WAHWIRE_POST_CHUNKS`, `VIRAL_POSTS` and `RUMOR_CHATTER_DATA` are all empty arrays. Six of the seven files in `data/events/` are **zero bytes**. | See the WAHwire section below — this changes the order of operations you asked for. |
| Vendors | No `data/vendors.json`. `data/shop-items/vendors.js` exports zero vendors. | `tools/enrich_vendors.py` exists but has nothing to enrich. |
| Item shards | `items_101`–`items_105`, `items_night_special.js`, `categories.js` are empty; `items_051/052/054/057/059/063/068/075/084` hold 7–52 items against a ~100 norm. | Natural targets for the item generator. |

---

## 3. Generated faction dossiers — the second half of reputation generation

The reputation backfill may encounter an organised group that is absent from
the canonical faction registry. It preserves the score by minting a stub in
`data/factionsGenerated.json`. The current file contains **67** generated
entries; **64** still carry the literal “No dossier has been written yet”
placeholder and the remaining three have only 11–21 words. None is a finished
dossier.

This queue cannot be solved by blindly expanding every label. Older generation
also treated named people, locations and aggregate output labels as factions.
The `faction-dossiers` system therefore reads the named source record and its
`relatedArticles` first. Real groups receive roughly 500–1,000 words of
source-bound in-world prose and must quote three verifiable excerpts from those
articles. Misfiled labels are removed rather than replaced by “not a faction”
filler, with reputation redirected only when the evidence supports a canonical
target. This cleanup runs at stage 0 so unrelated bulk generation cannot bury
it in the diff.

---

## 4. Reputation impact — the backfill target

`getRecordReputationImpact()` (index.html L13119) reads `rec.reputationChanges`
first, falls back to `rec.effects` x operators, and only then auto-derives.
Almost everything is landing on the last branch, which is why standing feels
static:

| File | Records | Have `reputationChanges` | Missing |
|---|---|---|---|
| `data/events.json` | 98 | 3 | **95** |
| `data/battles.json` | 56 | 0 | **56** |
| `data/majorBattles.json` | 51 | 0 | **51** |
| `data/trials.json` | 7 | 0 | **7** |
| **Total** | **212** | **3** | **209** |

`effects` is present on **zero** records across all four files.

Per your instruction the backfill is **gap-only**: a record that already has
`reputationChanges` is never revisited. The three that have them stay exactly
as written.

---

## 5. The WAHwire problem — read this before the cycler runs

You asked for the WAHwire pass to be ordered: **quality-check and prune the
existing posts one at a time, and only after a full clean pass start writing
posts for new events.**

The prune pass has almost nothing to prune. The archive holds **19 posts**, all
scheduled war-declaration beats in `data/events/scheduled-posts.js`, and the
renderer in `app/pages/assembly/assembly.js` (~3,000 lines, with dedupe,
compare-modal and export-cleaned tooling already built) is running against
empty arrays for everything else.

`data/assembly/assembly-events-data.js` is worse than empty — it is **broken**.
It opens with `let allEvents = [...BASE_EVENTS];` and `BASE_EVENTS` is never
defined or imported anywhere in the repo. Its import of
`./data/world/calendar.js` resolves to a path that does not exist. The module
throws on import.

So there are three ways to read your instruction, and they lead to different
work. See the question put to you alongside this report.

---

## 6. What the runner does with all this

`tools/genkit/` is the shared machinery — LM Studio client, atomic writes,
per-system checkpoints, worker pool, popcorn scheduler. Systems declare
themselves as `SystemSpec` objects and the runner treats them identically, so
system number seven is one new file rather than five hand-edits.

Scheduling honours two rules on top of the randomness:

* **Stages gate.** A stage-0 system blocks every higher stage until it runs
  out of work. "Prune before you author" is therefore enforced by the
  scheduler, not by anyone remembering to do it in order.
* **Recency penalty.** A system just served is unlikely to come up again
  immediately, so the output does not arrive in same-voice runs.

Every generated record carries `status` plus a `_generated` stamp naming the
tool, the system, the model and the timestamp.
