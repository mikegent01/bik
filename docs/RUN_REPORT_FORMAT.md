# The Run Report — how to report at the end of a run

**Every run ends with a report.** Not a summary of what you thought about, not
a paragraph of narrative — a structured account of what actually changed on
disk and what it means for the campaign.

The reason is simple: the user cannot see the diff while you work, and a filing
touches five or six files across three directories. If the report is vague, the
only way to find out what happened is to read the whole repository. That is not
a report; that is homework.

> **The test:** could the user, reading only your report, reconstruct exactly
> what changed and check any of it in under a minute? If not, the report is
> incomplete.

---

## The four required blocks

### 1. Files created or edited — **every one**

Every JSON, every script, every page. No exceptions for "small" edits, no
"and some minor fixes." Group by directory, one line each, with what changed
and how big.

```
CREATED
  Reputation-Matrix2/data/locations.json   + mount_ebot (new entry, 41 lines)
  docs/RNN_BROADCAST_GUIDE.md              new, 1,200 words

EDITED
  Reputation-Matrix2/data/events.json      + the_mount_ebot_expedition (13 sections, 5,936 words)
  Reputation-Matrix2/data/characters.json  ~ 3 entries amended (status/affiliation)
  index.html                               ~ SITE_UPDATES + home timeline card
  tools/rnn-scripts/pending-news-articles.json  ~ 1 id appended

GENERATED (do not hand-edit)
  Reputation-Matrix2/data/rnn-broadcasts.js     rebuilt by build-rnn-broadcast.py
```

Mark generated output as generated, and name the generator. It is the
difference between "the agent edited a build artifact" and "the agent ran the
build."

### 2. Events filed

One entry per event, with everything needed to find and judge it.

```
EVENT  the_mount_ebot_expedition — "The Mount Ebot Expedition"
  date      17 Aethel, 1040 BF
  location  mount_ebot (new)
  parties   waluigi, wario, toad_lee, +4  (all ids resolve)
  length    13 sections / 5,936 words
  status    resolved · aftermath + waluigiAssessment present
  route     #/article/the_mount_ebot_expedition
```

### 3. XP awarded

**A table, always.** XP is the thing the user most needs to check, because it
is the thing that touches the actual game.

| Character | `xpKey` | Category | XP | For |
|---|---|---|---:|---|
| Waluigi | `waluigi` | survival | 320 | Roped the descent after the scalp wound |
| Wario | `wario` | discovery | 280 | Identified the wrong-mountain error |
| **Total** | | | **600** | across 2 characters |

State plainly whether these are **filed on the event only** or have been
reconciled with the authoritative ledger. Never imply a total changed that
did not.

If no XP was awarded, say **"No XP awarded this run"** — do not omit the block.

### 4. What is not done

The block that makes the report trustworthy. Anything deferred, uncertain,
assumed, or owed:

```
NOT DONE / OPEN
  · RNN pending list at 3/10 — no episode owed yet
  · Two transcript beats omitted deliberately (repeated lunch argument);
    say so rather than letting them vanish silently
  · The `bulky` character id does not exist; referred to by role instead
  · Assumed the expedition date follows survey part 7 — unconfirmed
```

An empty version of this block is suspicious. There is nearly always something.

---

## Rules

1. **Exhaustive on files, brief on prose.** List every file. Do not narrate the
   story back to the user — they know the story; they were there.
2. **Names and ids, not descriptions.** `the_mount_ebot_expedition`, not
   "the mountain event."
3. **Numbers where numbers exist.** Word counts, section counts, XP totals,
   pending-list count. "Substantial" is not a number.
4. **Flag every guess.** Anything inferred rather than sourced from the
   transcript goes in block 4.
5. **Report deletions loudly.** If anything was removed, say what and why, in
   its own line. Removal is the one change the user cannot spot by browsing.
6. **Never report work you did not do.** If a step was skipped, it goes in
   block 4 — even if the reason is good.

---

## Minimal shape to copy

```markdown
## Run report

**Files** — created: … · edited: … · generated: …
**Events filed** — <id> — <title>, <n> sections / <n> words, ids resolve
**XP** — <table, or "No XP awarded this run">
**Index** — home feed ✓ · SITE_UPDATES ✓ · mainPage.json ✓
**RNN** — pending N/10 · episode cut? yes/no
**Not done / open** — …
```
