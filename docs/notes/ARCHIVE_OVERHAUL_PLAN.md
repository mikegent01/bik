# Archive overhaul — plan before changes

Written in response to a single long brief covering battles, factions, the
homepage, the map, the sidebar and several merges. Investigated first, then
planned, because several of the asks turn out to rest on wrong assumptions and
one of them should be answered "no".

Status key: **DO** = doing it, **DO (scoped)** = doing a defensible subset,
**NO** = recommending against with a reason, **LATER** = right idea, wrong turn
to start it.

---

## 1. Does `majorBattles` need images? — **NO, and don't merge either**

Decision: **`majorBattles.json` does NOT get an art pass.**

The brief itself says "not everything needs an image", and this is the case
that proves it. Reasons, from the data rather than taste:

- **Only 3 of 51 ids overlap `battles.json`.** These are not duplicates.
- **The schemas are genuinely different.** `majorBattles` carries `conflict`
  (51/51), `arc`, `commanders`, `outcomeDetail`, `strategicValue`,
  `tacticalNotes`, `participatingCharacters`. `battles.json` carries
  `participants`, `keyMoments`, `engagement`, `aftermath`, `result`,
  `xpAwards`, `image`, audio. Only 2 of 69 `battles` have a `conflict`.
- **They answer different questions.** `battles.json` is *what happened in a
  session*. `majorBattles.json` is *the strategic order of battle for a
  conflict* — it exists to be grouped under `#/conflict/<name>` and read as a
  campaign map, and it is what feeds the Battlefield index.

So a `majorBattles` record is a **strategic summary**, and giving all 51 a
bespoke illustrated plate would be 9 more sheets of art for records a reader
reaches through a conflict listing, not a story page. The archive already has
its illustrated battle store.

**What it gets instead:** the field is supported (already true after the
`battleThumb` fix), the coverage bar reports it, and a `majorBattles` record
that shares an id with an illustrated `battles` record **reuses that plate**.
That is 3 records, zero generations.

**Why not merge the two stores:** merging means either flattening two schemas
into one (losing the conflict/arc grouping that the Battlefield page is built
on) or carrying every field on every record (a 120-record store where half the
fields are null). The honest fix is not a merge, it is **cross-linking**: a
`majorBattles` record that has a session-level counterpart should link to it
and vice versa. Cheap, reversible, no data loss.

---

## 2. Battle cards render as the VS placeholder — **DO** (bug)

Confirmed at `index.html` line ~9447:

```js
const visual = (key==='events' && i.image) ? <real <img>> : cardVisual(i,key);
```

The illustrated-card treatment is hard-coded to `key==='events'`. Battles fall
through to `cardVisual()` → `battleThumb(i,'tile')`. `battleThumb` was *also*
ignoring `image` until the previous commit, so battle tiles showed the
red/green VS gradient even though 69 plates are filed.

Fix: generalise the condition to any record type carrying `image`, so battles
(and anything else that gains art later) get the illustrated card for free.
This is the single highest-value change in the whole brief — it makes work
already done visible.

---

## 3. Multi-view system for battles and factions — **DO (scoped)**

The events page pattern the brief points at (Story / Analysis / Commentary /
Investigation / XP, each with a state and a count) is a **view router over one
record**. It is good, and it generalises.

Scope for this pass: build it as a **shared component** and light it up for
**battles** first, because battles already have the data to fill it — prose,
reputation impact, XP awards, participants, related records. Factions get the
same component in the same pass **only if** the data supports real tiles;
otherwise a faction shows the tiles it can fill and says "nothing filed" for
the rest, exactly as events already do.

The rule the existing design gets right and must be preserved: **a tile that
has nothing says so and is not clickable.** No empty pages behind confident
buttons.

---

## 4. Field plates on the homepage for battles and factions — **DO (scoped)**

The homepage "Current fronts" strip already reads `mainPage.campaignCovers` and
`mainPage.fieldGallery`. Battles now have 69 plates. Adding a battle strip is
data wiring, not new art.

Factions: **LATER.** Factions have no plates, and generating ~30 faction
banners is its own art pass with its own style question (a banner/heraldry
register, not the drawn scene register). Do not start it inside this pass.

---

## 5. Update banner naming the release — **DO**

Pull the name from the most recent `docs/run-reports/` entry (the repo's own
changelog convention) rather than inventing one, and show it as a dismissible
banner. Ties into item 6.

---

## 6. "Latest updates" should highlight what changed — **DO**

Already half-built: `filing-updates.json` fingerprints readable fields per pass
and `filingIsUpdated()` / `filingBadge()` exist. The previous commit made the
home tile report revisions instead of lying "All caught up".

What is missing is the brief's actual ask: **show the reader what changed so
they don't reread the article.** `filing-updates.json` stores a hash, not a
diff, so a true inline diff is not available from the current data. Two honest
options:

- **(a)** Extend `tools/track-filing-updates.py` to record *which fields*
  changed, and surface "Overview and Aftermath were revised" on the article.
- **(b)** Fake it with a full text diff at render time — rejected, the baseline
  text is not stored.

Going with **(a)**, scoped to field-level granularity. That is a real,
truthful improvement and it is cheap. Sentence-level highlighting would need
the tracker to store prior text, which is a bigger change to a generated file.

---

## 7. `(full)` map for every region that supports it — **DO**

Seven groups have no `_full` aggregate:

| group | regions | note |
|---|---|---|
| Divine Kingdoms | 7 | 233 POI total — clearly deserves one |
| Earth Continents | 6 | 30 POI, 3 regions empty |
| Islands & Outer Realms | 9 | 95 POI |
| Lost Continents & Myths | 7 | — |
| Norse Realms | 3 | 87 POI |
| Oceanic & Islands | 7 | — |
| Outer Realms | 8 | 150 POI |

A `_full` entry is mechanical: same `imageSrc`, `order: 0`, the group's POIs
concatenated, `fogOfWar: []`. The one judgement call is the background image,
since these groups have no single shared plate — use the highest-POI member's
image, which is what the existing `_full` entries effectively do.

**Caveat to verify before writing:** `mushroom_kingdom_full` and
`animatopia_full` reuse *one region's* POI array, not a concatenation. Need to
confirm whether `_full` means "everything" or "the main region" before
generating seven of them. Will check and follow whichever the renderer expects.

---

## 8. Midlands → Mushroom Kingdom zoom — **LATER**

Genuinely good idea. It needs a per-map hotspot table (polygon → target map id)
that does not exist yet, plus a transition. That is a feature, not a fix, and
it should not be started in a pass that already has nine other items.

---

## 9. Phone mode redesign / settings cog for music — **DO (scoped)**

The docket player controls are opaque glyphs. Replace the phone-mode toggle
with a **settings cog** exposing music controls and the existing display
toggles. Scoped to the control surface; not rebuilding the player.

---

## 10. Merges — **DO** for three, each as a tabbed hub

- **XP Leaderboard + Reputation Matrix** → one "Standing" hub. Both are
  per-operator scoreboards; a reader comparing XP to standing currently
  navigates twice.
- **Commerce + Wario's Shop**, and **Bank + Currency** → one "Economy" hub.
  Note `Wario's Shop` is a separate `shop.html` page, not a router view, so
  this is a link-level merge plus a shared landing tab, not a code merge.

Sidebar shrinks by three entries, which also helps item 11.

---

## 11. Wahbabel (7 entries) and Bros Attacks (6) look thin — **DO (scoped)**

The brief is right that "just adding stuff" is not the fix. The problem is a
full-width page rendering a handful of rows. Fix presentation: give both a
denser card grid with the count stated up front, so a small store reads as
*complete and small* rather than *empty and broken*.

---

## 12. Investigations overhaul — **DO (scoped)**

"Hard to read and barely makes sense." Investigations render raw case-file
structures. Scope: readable hierarchy (case → leads → evidence → status),
plain-language status labels, and drop fields that render as noise. Not a
data rewrite.

---

## Order of work

1. Battle card renderer (item 2) — unblocks everything visible.
2. `majorBattles` decision recorded + 3 shared-id plates reused (item 1).
3. Map `_full` entries (item 7) — mechanical, self-contained.
4. Field-level update tracking + banner (items 5, 6).
5. Homepage battle plates (item 4).
6. Multi-view component for battles (item 3).
7. Merges (item 10) + sidebar density (item 11).
8. Investigations (item 12), phone/settings (item 9).

Each step commits separately with checks green.


---

# Outcome log

Written after the work. What shipped, what changed from the plan, and what was
deliberately left.

| # | Item | Result |
|---|------|--------|
| 1 | majorBattles images | **Declined.** 3 shared ids reuse existing plates; 0 generations. |
| 1b | Merge the two battle stores | **Declined.** Different schemas, different jobs. |
| 2 | Battle cards showed VS placeholder | **Fixed.** Two bugs: `battleThumb()` ignored `image`, and the illustrated card was gated on `key==='events'`. |
| 3 | Multi-view hub for battles | **Shipped**, with battle-specific doors. |
| 4 | Homepage field plates | **Shipped** for battles (15 → 27 strip items). Factions deferred. |
| 5 | Release banner | **Shipped**, named from `SITE_UPDATES[0]`. |
| 6 | Highlight what changed | **Shipped** at field level. |
| 7 | `(full)` for every region | **Shipped.** 7 groups added, all 24 now have one. |
| 8 | Midlands → Mushroom Kingdom zoom | **Deferred.** Needs a hotspot table that does not exist. |
| 9 | Phone mode / settings cog | **Shipped.** Secondary controls behind a cog. |
| 10 | Merges | **Shipped.** XP+Reputation, Commerce+Bank+Shop. |
| 11 | Thin Wahbabel / Bros Attacks | **Wahbabel shipped.** Bros Attacks left alone — already grids correctly. |
| 12 | Investigations overhaul | **Shipped** as an ordering fix. |

## Things worth knowing next time

- **The battle art was invisible for two separate reasons.** Both were
  renderer gates, not data problems. This is exactly what Rule 00 in the image
  guide now exists to catch.
- **Checking before building changed three answers.** majorBattles looked like
  a duplicate store and is not. Bros Attacks looked thin and is correctly
  built. The generic hub looked reusable for battles and would have produced
  five greyed tiles out of six.
- **`plainSummary` already existed on all 17 investigations.** The fix was
  moving it above the dense part, not writing anything.
- **Two generated files were rebuilt with their own tools**, never hand-edited:
  `provinceCensus.json` (after the new full maps widened it from 15 to 22 maps)
  and `filing-updates.json` (field-print backfill).

## Still open

- Faction field plates — needs a heraldry/banner art register decision first.
- Map-to-map zoom hotspots.
- Sentence-level change highlighting — needs the tracker to store prior text.
