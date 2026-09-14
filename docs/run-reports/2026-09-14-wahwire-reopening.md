# Run report — WAHwire, the grand reopening

**Date:** 14 Sep 2026
**Branch:** `arena/01a09e47-bik`
**Purpose:** the previous pass gave the store a reader. The user's verdict was
that 23 throwaway one-liners is not a platform — it needs a redesign, a
reopening, and posts that are actually funny, meaningful and worth reading.
This is that pass.

---

## 1. What was measured before changing anything

Read all 23 posts end to end. Four problems, in order of damage:

```
1. EVERY POST IS THE SAME OBJECT
   no `type` field · 23 identical text cards
   quote-posts 0 · threads 0 · polls 0 · exhibits 0 · images 0
   the wire has no formats, so it cannot converse with itself

2. THE NEWEST POSTS LOOK DEAD
   likes: 0 on 8 / 23 — and they are the 8 most recent hand-authored posts
   the Scorncrow correction, the biggest reveal of the arc, had fewer
   likes than a Toad complaining about rent

3. WALUIGI WAS 52% OF THE FEED
   and the funny posts were nearly all his, so every other voice read as filler

4. REPLIES WERE FLAT AND BURIED
   20 replies, never nested, none louder than its parent — and the single
   funniest line in the store was hidden as a child node
```

What was already good and had to survive: the voice (*"The library is FINE.
The library is ANGRY. These are different conditions."*), 27/27 resolving
links, 25 reaction tones, 31 profiles with `followReasons`.

**So: a remaster, not a rewrite.** Nothing deleted, no existing wording changed.

---

## 2. Files created or edited

```
CREATED
  tools/wahwire-reopening.py                        new, 690 lines — the content pass
  docs/notes/WAHWIRE_REDESIGN.md                    the brief + what shipped
  docs/run-reports/2026-09-14-wahwire-reopening.md  this file

EDITED
  Reputation-Matrix2/data/wahwire/posts.json        23 -> 54 posts
  index.html                                        + ~120 lines: wwPostBody(),
                                                    wwPropRecord(), WW_TYPE_BADGE,
                                                    top-reply lift, format filters,
                                                    trending tags, assetPath on images
  Reputation-Matrix2/app/styles/wahwire.css         + 86 lines, appended only
  tools/audit-wahwire.py                            renderer detector fixed

DELETED
  nothing — no post removed, no wording altered
```

---

## 3. Posts become formats

A `type` field, defaulting to `text`, so all 23 legacy posts stay valid.

| Type | n | Renders from |
|---|---:|---|
| `text` | 38 | the baseline |
| `exhibit` | 4 | `props.json` — 148 in-world documents the wire never showed |
| `quote` | 3 | another post, quoted with commentary |
| `poll` | 2 | in-world vote shares |
| `thread` | 2 | numbered multi-part argument |
| `ledger` | 2 | a tally — the archive's house style, as a post |
| `correction` | 2 | retyped from existing posts; Waluigi already wrote these |
| `image` | 1 | a record's own art via `assetPath()` |

Each maps onto data the archive already holds. None invents a source.

### Engagement got a model, not a sprinkle

Likes are canon data so they cannot be made up — but `0` is also a claim, and
for a filed post it is the wrong one. `engagement(author, weight, landed)` in
the script: account reach × how much of the archive cares × whether the line
lands. Coarse on purpose — the goal is a defensible ordering, and it is
re-runnable and arguable rather than a matter of taste.

### Replies became first-class

Own like counts, and a `topReply` flag that lifts the best one out next to the
post. **31 of 54 posts now show a lifted top reply** — including
`generic_toad`'s *"you can just SAY an invitation out loud and it works?? asking
for a friend who owns a house"*, previously buried.

### Voice balance

```
Waluigi   52%  ->  31%      distinct voices  9 -> 33
```

New accounts with real records: Luigi, Peach, Bowser, Fawful, Sans, Dr Toad,
Toad Lee, Mystic Morel, Green T, Eager, Mossy, Bones, Captain Toadette, Orangus
Cornelius, The Oracle, Liam, Mona, Dan.

---

## 4. XP awarded

**No XP awarded this run.** No ledger, event, battle or reputation record was
touched.

---

## 5. Verification

```
python3 tools/wahwire-reopening.py --check   validates; writes nothing
python3 tools/wahwire-reopening.py           23 typed, 8 revived, 31 added -> 54
   re-run                                    0 typed, 0 revived, 0 added (idempotent)
node --check, all 3 inline script blocks     OK (1.75 MB block)
CSS brace balance                            127/127
python3 tools/check-all.py                   alliance cache + map lenses only
                                             = unchanged from baseline on 2daad95
python3 tools/audit-wahwire.py               now reports "read by: index.html"
```

**Rendered all 54 posts through the real card functions** in a Node `vm` with
real `posts.json`, `profiles.json`, `reactions.json`, `props.json` and an
`INDEX` built from five record files:

- **54/54 render · 0 dead link chips · 0 formats failed to emit their body**
- **31 posts show a lifted top reply**
- the script's own validator rejects a post whose `links`, `exhibit` or
  `quoteOf` does not resolve, and **it caught two of my mistakes**: I guessed
  at post ids for `quoteOf` instead of reading them, and used
  `connectopia_pioneers_guild`, which is in `LORE_FACTIONS` but not
  `factions.json` and so is not linkable. Both fixed before anything was
  written.
- an image-path bug was caught in review: data image paths are relative to
  `Reputation-Matrix2/`, so a bare `<img src>` would have 404'd. Now routed
  through the site's own `assetPath()` with an `onerror` that removes the
  figure.

---

## 6. What is not done / open

· **Coverage is still low against the standing order.** 24/247 filings have a
  post (9.7%); events specifically are 20/120. The reopening raised quality and
  format variety, not coverage. Filling 223 owed posts is a `genkit` job.

· **`genkit` does not know about the new formats.** It writes `text` only.
  `QUALITY_MARK` is untouched and no `_generated` marker was written by this
  script — these 31 are hand-written exemplars precisely so the generator has
  something to learn the formats from. Teaching it is a separate piece of work.

· **Only 2 of 54 posts are vetted `wahwire-v2`.** The new ones are hand-written
  and carry no quality mark, because the mark is the generator's provenance
  signal and stamping hand work with it would be a lie.

· **Poll vote counts are invented in-world numbers.** They are presented as
  in-world engagement, the same category as like counts. No reader can vote;
  the poll is a rendered result, not an input.

· **The `image` format has exactly one post.** 120/120 events have art, so this
  is the format with the most obvious headroom. Left thin deliberately — one
  worked example is enough to prove the shape before bulk-filing.

· **No headless browser in the sandbox.** Verification is function-level and
  markup-level; the eight formats were previewed as static HTML with the real
  CSS and reviewed, then the preview was deleted rather than committed.

· **Reader drafts still cannot become canon**, unchanged and deliberate. The
  composer writes `localStorage` and exports in store shape; promotion stays a
  filing decision.
