# Run report — Reputation and WAHwire: audit and preparation

**Date:** 14 September 2026
**Branch:** `arena/01a09e47-bik`
**Scope:** preparation only. No canon data was edited, no renderer was changed,
no post was written.

## Purpose

The task was to read every readme and prepare for two pieces of work: adding
reputation to articles, and fleshing out WAHwire. Rather than guess at scope
from the prose, this run measures both systems and writes down what the
measurements imply, so the actual work can be argued about before it is done.

Out-of-world: two advisory audit scripts and two plans.
In-world: nothing. The archive is unchanged.

## Files

```
CREATED
  tools/audit-reputation-coverage.py          new, 280 lines — advisory
  tools/audit-wahwire.py                      new, 250 lines — advisory
  docs/notes/REPUTATION_ON_ARTICLES_PLAN.md   new, ~200 lines
  docs/notes/WAHWIRE_PLAN.md                  new, ~200 lines
  docs/run-reports/2026-09-14-reputation-and-wahwire-prep.md   this file

EDITED
  none

GENERATED
  none
```

Both scripts are advisory by design and are **not** wired into
`check-all.py`. Wiring the WAHwire audit in today would fail the suite at 7.3%
coverage on the first run, which teaches everyone to ignore it.

## What the audits found

### Reputation — the data is nearly done; the surface is not

Record coverage is **96%**: 11 of 247 scored records carry no deltas (8 events,
3 battles, all recent filings). This kills the obvious reading of the task —
events and battles do not need a reputation pass.

The real gaps are elsewhere:

- **158 of 166 characters have no reputation surface at all.** The operator
  panel is hard-coded to the 8-strong `REPUTATION_OPERATORS` roster.
- **6 filed factions render no standings panel** — `color_division`,
  `council_of_seven`, `dgk`, `midlands_diet`, `order_of_jack`,
  `undertale_monsters` — because `renderArticleFactionReputation()` reads
  `LORE_FACTIONS`, which new filings do not write to.
- **9 operator keys are authored but silently discarded** (`eager`, `wario`,
  `dracule_mihawk`, `sans`, `flowey`, `gamma_agent`, `daniel_gamma_command`,
  `jamesly`, `koffin_k`). They render in the impact panel and score nothing.
  All 68 faction keys, by contrast, resolve cleanly.

### WAHwire — the store is write-only

**WAHwire has no reader.** `data/wahwire/*.json` is fetched by nothing in the
runtime; `app/pages/wahwire/wahwire.html` does not exist. `index.html` records
the replacement at line 10178 ("WAH NOTES … Wahwire's replacement") and a
"wahwire prune" at line 11042.

Four readmes still describe it as live and mandatory
(`CROSS_SYSTEM_UPDATES.md`, `STORY_FORMAT_GUIDE.md` §9D,
`Reputation-Matrix2/README.md`, `INTAKE_DECISION_GUIDE.md`), and `ARTICLE_QA.md`
asks reviewers to check for posts. The ~2,000-line generator still works and
will keep writing into the void.

Supporting measurements: 7.3% coverage (229 filings owe a post), 2 of 23 posts
vetted, Waluigi at 52% of the feed, 18 of 31 profiles have never posted, one
illegal reaction tone, and a dead `WAHWIRE_POSTS = []` export with two live
importers.

Because of this, the WAHwire plan opens with a decision (retire / restore /
merge) rather than a work list. Recommendation is **restore the reader first**,
on the grounds that writing 229 posts into an unrendered file is the largest
piece of wasted work available in this repository.

## Events filed

None.

## XP

No XP awarded this run.

## Index / RNN

Not applicable — no filing was added, so the home feed and the RNN pending list
are untouched.

## Cross-system sweep

```
XSYS  wahwire      n/a — no filing this run; the wire's own state is the subject
XSYS  pond_patrol  n/a — no docket names involved
XSYS  regal_diet   n/a — no Diet vote or Imperial law
XSYS  all others   n/a — documentation and tooling only
```

## Verification

```
python3 -m py_compile tools/audit-reputation-coverage.py tools/audit-wahwire.py   OK
python3 tools/audit-reputation-coverage.py            OK (human + --json + --list-missing)
python3 tools/audit-wahwire.py                        OK (human + --json + --list-uncovered)
python3 tools/check-references.py                     PASS (409 legacy warnings, unchanged)
python3 tools/check-all.py                            unchanged — 2 pre-existing failures
                                                      (alliance cache, map lenses), both
                                                      present on the base commit before
                                                      any edit in this run
```

Two audit defects were found and fixed during the run, which is worth recording
because both would have put wrong numbers in the plans:

1. The reputation audit reported 22/22 factions renderable by checking
   `factions.json` against itself. Corrected to check against the runtime
   registries (`LORE_FACTIONS` + `factionsGenerated.json`), which is what the
   renderer actually reads: 16/22.
2. The WAHwire audit reported 4 dangling links. Those ids resolve as
   characters, locations and factions — valid targets for a hand-written post,
   just broader than the generator's own `link_targets()`. They are now
   reported separately instead of as defects.

## Not done / open

- **Nothing proposed in either plan has been implemented.** Both documents are
  marked PROPOSAL.
- **Three questions block the reputation work:** whether `eager` and `wario`
  become operators; whether an explicit abstention convention is wanted for
  records that deliberately move nobody; what the non-operator character panel
  should be called so it does not read as a score.
- **One question blocks all WAHwire work:** retire, restore, or merge. The
  supporting question is whether the prune was deliberate — line 11042 says a
  loader was "swept up by mistake", which implies the prune was intended but
  imprecise.
- **The prune is still undocumented** in `docs/LEGACY_FILES.md`, and the four
  readmes still describe WAHwire as live. Not fixed here because the fix
  depends on which option is chosen.
- `tools/browser-tests/wahwire-voices.test.cjs` still points at a page that
  does not exist. Left alone for the same reason.
