# Search remake (round 2) — run report

**Date:** 2026-09-07
**Branch:** `arena/01a07d38-bik`
**Model:** Arena.ai Agent Mode

## Purpose

Follow-up to the 2026-09-04 findability report. The request this time: remake
search, more refined, so that "Mario's disappearance" finds everything
related — including the Luigi/car record (the_eastern_passage), the rest of
the disappearance thread, and the "Heroes Who Vanished" collection.

## What was actually wrong

Four defects, each measured in a full-boot jsdom probe before changing code.

### 1. The typo rescue never fired when it mattered

`search()` only tried corrected spellings when BOTH the strict pass and the
loose OR pass came back empty. For "marios disapearance" the strict pass was
empty but the OR pass was not (the stem `mario` matches half the archive), so
the correction was skipped, no banner was shown, and the_eastern_passage and
charred_note_at_waluigis_door missed the top 8.

Worse, the correction could not even have fired: the vocabulary was built from
name/people/summary words only, and the literal word "disappearance" appears
in descriptions — so `correctTerm("disapearance")` returned null.

### 2. Short terms matched substrings

"luigi car" ranked a cargo manifest first (score 353) because `includes("car")`
matches cargo/cards/scared, and the eastern passage — the actual Luigi/car
record — did not appear at all.

### 3. Possessives became a junk term

"mario's" tokenised to `[mario, s, disappearance]`; the one-letter term `s`
matched nearly everything and diluted the ranking.

### 4. Collections were unreachable

Collections were loaded into DATA but never indexed: no INDEX entries, no
search documents, `#/list/collections` redirected home, and opening one by id
rendered "Article not found". The Mario Brothers collection could not surface
no matter what was typed. (The list filters, grouping labels, and tile art for
collections were already wired — only the indexing was missing.)

## What changed (index.html, +111/-23)

- Query parsing strips English possessives and drops stray one-letter terms
  when longer terms remain (`stripPossessives`, pure, tested).
- Short query words (3 chars or fewer) match whole words only; longer terms
  keep substring semantics (`wordHit`/`startsWord`/`boundaryWord`, pure,
  tested). "car" no longer hits cargo.
- The typo rescue now runs BEFORE the loose-OR fallback in smart mode, via a
  shared `runCorrected()` helper, and the vocabulary is built from the hay
  too (3+ letters), so "disapearance" corrects to "disappearance".
- New intent groups: disappearance/vanish/missing/lost and car/drive/vehicle.
- Strong strict matches (top 5, score ≥ 100) pull their thread: related links
  follow as trailing rows marked with a `via <record>` chip (`expandRelated`,
  capped at 12, skipped for exact and flooded-OR searches, honours the
  category filter).
- Collections are indexed into INDEX (still no nav entry): they resolve,
  render (article page, shelf, type labels all have fallbacks), and surface
  in search, with `members[]`/`articles[]` roster ids added to the hay.

## Proof

Full-boot jsdom probe, top 8, before → after:

- "marios disapearance": `mario, promo` + flood, no eastern/charred →
  `mario, COLLECTION, promo, dread, eastern, star_reunion, charred, baldi`
  with a "Showing results for mario disappearance" banner.
- "mario disappearance": eastern/star at #6–7 near the cutoff →
  `mario, promo, COLLECTION, dread, charred, waiting, eastern, star`,
  followed by `via` rows including the_arrangement and star_fountain.
- "luigi car": cargo manifest #1 (353), no eastern →
  `embassy_ambush, clockwork_spire, EASTERN #3`, cargo gone.

Regression: "mazebound fight" still tops skirmish_mazebound (429);
"aurelian possessed" is byte-identical to before (two long terms touch none
of the changed code paths). `tools/check-all.py` green, search-quality suite 56/56 (18 new checks:
whole-word, possessive, and thread coverage).
