# Search round 3: complex queries + Advanced filters — run report

**Date:** 2026-09-07
**Branch:** `arena/01a07d38-bik`
**Model:** Arena.ai Agent Mode

## Purpose

The owner challenged the search two ways: (1) scope it — "search within the
arc only", plus advanced filters "like by location", because broad search
finds nothing useful; (2) survive vague multi-word input — "wario head
fight" should link Promo Mario.

## What was actually wrong

- **No arcs file exists.** Quest `arcId`s are vestigial (2 quests, no
  definitions). The only real story-arc groupings are the collections —
  the code has always called them "event arcs" — so arc search is built
  on them. The Mario Brothers shelf only listed 5 records and omitted
  half the disappearance thread, including the promo itself.
- **The biggest clue was unindexed.** Promo Mario's Revision 2 (37,288
  chars, the full amended account) was invisible: `revisions[]` bodies
  were never added to the hay. It holds wario×39, head×20, fight×1 —
  every word of the challenge query.
- **Mentioning beat being about.** Scoring is binary per term, so 65
  records genuinely containing wario+head+fight outranked the promo on
  name/people bonuses for passing mentions.
- **No field filters.** Prefix syntax only knew categories (`@events`,
  `type:`). Nothing could say "set in Hollywood" or "Wario was in it".

## What changed

- `revisions[]` bodies join the hay (index + test mirror). One record
  carries them today, but the version bar already treats revision text
  as the article, so the index agrees with the reader.
- Aboutness: `countOcc()` (pure, tested) counts occurrences per matched
  term — whole-word for short terms, substring otherwise — and repeats
  add up to +24 per term. Saying it ten times now beats saying it once.
- Advanced search: a ⚙ row under the search box (Arc dropdown with all
  19 shelves, At-place and With-person inputs) plus `arc:` / `at:` /
  `with:` query syntax. `scopeMatches()` gates scoring and thread
  expansion; the result header names the active scope; unknown arcs
  fall back to searching the words. `resolveArc()` forgives fragments
  ("mario" finds the shelf).
- The Mario Brothers roster gains the thread filings (promo, eastern
  passage, charred note, waiting room, dread incursion) so the
  disappearance arc is real. No canon invented: every addition is
  already linked by the records' own relatedArticles.
- Thread expansion also follows `sourceArticle` (commentary → source).

## Proof (full-boot jsdom)

- "wario head fight": promo absent before → rank 36 of 65 strict
  matches now (front page; the 35 above genuinely contain all three
  words, led by the Wario Bros faction).
- "wario head fight at:hollywood": promo is the ONLY result.
- "arc:mario wario head fight": 7 results, all in-arc, promo #2.
- Regressions steady: mazebound/aurelian/typo orders unchanged;
  "mario disappearance" keeps all 8 thread records (scores up);
  two adjacent-pair swaps in long tails (maglev/eastern,
  eastern/star) from the repeat bonus — acceptance ("in the top 8")
  holds everywhere.

## Tests

Pure suite 70/70 (14 new: countOcc, revisions, arc resolve/members,
complex-query reach). Live suite 34/34 (8 new round-3 checks + 3 edge
cases), run manually against :8765. `check-all` green.
