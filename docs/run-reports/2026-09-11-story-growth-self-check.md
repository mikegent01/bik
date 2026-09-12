# Run report — living story growth self-check

Date: 2026-09-11
Branch: `arena/01a08916-bik`

## Files

CREATED
  tools/check-story-growth.py — advisory checker for a newly filed article id; inspects direct related pages, participants, same-era arc peers and investigation files, then prints a useful-edit review queue.
  docs/run-reports/2026-09-11-story-growth-self-check.md — this run report.

EDITED
  docs/STORY_FORMAT_GUIDE.md — added §9F, "Living-article growth self-check," plus quick-reference and pre-flight entries requiring the checker before a filing is called done.
  docs/SESSION_FILING_PROCESS.md — added the growth self-check to the final systems/artifacts pass before the run report.
  docs/AUDIT_SCRIPTS.md — documented `tools/check-story-growth.py` as a committed advisory checker and described good/bad uses.

GENERATED
  None.

## Events filed

No new event filed this run.

## XP awarded

No XP awarded this run.

## What the checker does

Command:

```bash
python3 tools/check-story-growth.py <new_event_or_article_id>
python3 tools/check-story-growth.py --latest
```

The checker:

- loads the website data stores;
- finds the source article;
- checks direct ids from `participants[]`, `relatedArticles[]`, `keyBattles[]`, and source links;
- finds investigation/arc files whose sessions or related events contain the source;
- adds same-era arc peers only when they share people/places/links;
- reports unresolved direct ids as errors;
- prints a review queue for useful old-page growth edits.

It does **not** auto-edit old pages. That is intentional: the useful edit is a story judgment. The docs now require the agent to review the queue and either make a specific useful edit — status, key event, revision/addendum, investigation lead, custody note, reader-helpful backlink — or deliberately skip it. The goal is living articles, not reciprocal-link spam.

## Verification

| Command | Result |
|---|---|
| `python3 -m py_compile tools/check-story-growth.py` | PASS |
| `python3 tools/check-story-growth.py --latest --max-rows 12` | PASS/advisory — checked `the_garden_above_the_fire`, found `mario_charred_note_file` as the active arc file, and printed related/arc review prompts |
| `git diff --check` | PASS |
| `python3 tools/check-all.py` | PASS — all requested checks passed |

## Not done / open

- I did not add `tools/check-story-growth.py` to `tools/check-all.py`; the checker is article-specific and needs a source id, so it belongs in the filing process rather than the global routine suite.
- I did not auto-apply the queue to existing articles in this run. The new docs explicitly say to make only useful edits after reviewing the queue.
