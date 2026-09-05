# Search findability — run report

**Date:** 2026-09-04
**Branch:** `arena/01a069d5-bik`
**Model:** Arena.ai Agent Mode

## Purpose

A report from an actual session: a player asked what happened in the battle
where Lady Aurelian was possessed. The archive contained the answer, but search
could not surface it. The group found the article by browsing manually.

The words the player typed were `arulean` and `possesed`.

## What was actually wrong

Three separate defects, each measured before anything was changed.

### 1. The richest field in the archive was not indexed

`buildIndexes()` built its haystack from flat string fields only:

```
name title summary description history lore bio type affiliation
race leader era location region defendant prosecutor
```

Anything that was an array or an object was skipped, because the old code
concatenated values directly and a non-string contributed nothing useful.

`participants` is present on **99 of 112 events** and holds
`{id, name, role}` for every character in the scene. It was invisible to
search. So "who was in this battle" — the single most natural question to ask a
campaign archive — could not be answered, even though the data was right there.

Also skipped: `outcome` (96), `effects` (90), `notableFeatures` (101),
`keyBattles` (32), `aftermath` (16), `sections` (14), `status` (104).

### 2. Dates were unreadable

`date` is free prose on **60 of 112** events — median 44 characters, longest
647:

```
~17 Harvestside, 1040 BF (Feyward-relative — temporal synchronization with
the Material Plane remains unreliable — Waluigi notes that time in the
Feyward has never behaved correctly …)
```

No record had a machine-sortable date field (0/112). Results showed no date at
all, so a list of hits gave no sense of when anything happened.

### 3. A single typo returned zero results

Measured against the live index:

| query        | results before |
|--------------|----------------|
| `possesed`   | **0**          |
| `aurelien`   | 0              |
| `petrifcation` | 0            |

Zero results reads as "the archive has nothing", not "you missed a letter".
This is the failure the group hit.

## What changed

**`index.html`**

- `buildIndexes()` — added a depth-limited `flat()` that walks arrays and
  objects, and folded the rich fields above into the haystack.
- `peopleOf(item, namesOnly)` — collects participants. The matching form
  includes ids and roles (so "chief negotiator" and `toad_lee` both hit); the
  display form is names only.
- `yearOf(item)` / `shortDateOf(item)` — pull a BF year out of prose and
  produce a short label for the result row.
- `scoreDoc()` — a query term matching a listed participant scores +90 on a
  word boundary, +45 otherwise. Someone who was *in* the scene now outranks a
  passing mention in prose.
- Typo tolerance — a vocabulary of every indexed token plus bounded
  Levenshtein. It runs **only when a query returns nothing**, so correctly
  spelled queries are never rewritten. Words under 5 characters are left alone,
  and the first letter must match; both guards exist because loose fuzzy
  matching produces confident nonsense.
- `renderResults()` — result rows now carry a date badge and a `👥` line naming
  the matched participants, plus a banner when a correction was applied.

**`Reputation-Matrix2/app/styles/waluipedia.css`** — styles for `.rdate`,
`.rwho`, `.search-corrected`.

## Verification

| query | before | after |
|-------|--------|-------|
| `possesed` | 0 | 5 (banner: *Showing results for possessed*) |
| `aurelien` | 0 | 5 |
| `petrifcation` | 0 | 5 → *The Petrification of Remi* |
| `aurelian possessed` | 1 | *The Petrification of Remi* — 1-2 Harvestide, 1040 BF |
| `zzzzznope` | 0 | 0 (fuzzy matching correctly declines) |

Rendered row, `aurelian corvinarus`:

```
3. Chop Bros, the OC Soul Ring, and the Guard With No Name
   🗓 23–24 Harvestide, 1040 BF
   👥 Lady Aurelian Corvinarus
```

### Tests

- `tools/tests/test-search-quality.mjs` — **38 assertions**. Extracts the real
  functions out of `index.html` and runs them against the real data files, so
  the tests cannot drift from what ships. Wired into `check-all.py`.
- `tools/tests/test-search-live.mjs` — **23 assertions**. Boots the real page in
  jsdom, types into the real search box, reads the rendered DOM. Needs a static
  server on 8765.

### Suites

| suite | result |
|-------|--------|
| `check-all.py` | 16/18 (`injury table`, `investigations` fail on `gh-pages` too) |
| sanitizer | 92/92 |
| search quality | 38/38 |
| search live | 23/23 |
| faith / reputation / home feed | 40/40 · 25/25 · 11/11 |

## Notes for whoever picks this up

**jsdom has no `fetch`.** Without a bridge, `loadData()` silently falls back to
the small embedded copy baked into the page — 146 character articles, zero
events — and a test run measures the fallback rather than the archive. The
first version of the live test did exactly this and reported false failures.
`test-search-live.mjs` now bridges `window.fetch` to the static server.

**Not fixed.** No record has a sortable date field, so results still cannot be
ordered chronologically or filtered by year. `yearOf()` extracts a year for
107/112 events and 62/65 battles and is stored on each document as `year`,
ready for a date filter, but nothing consumes it yet. That is the natural next
step for browsing the archive as a history rather than searching it.
