# Run report — fill the last 11 scored records that moved nothing

**Date:** 14 Sep 2026
**Branch:** `arena/01a09e47-bik`
**Purpose:** close the record gap found by the coverage audit in PR #75. Eleven
scored records carried neither `reputationChanges` nor `effects`, so eleven
sessions happened and no faction noticed. No renderer, engine, index, RNN or
prose change is in this run.

---

## 1. Files created or edited

```
CREATED
  tools/fill-missing-reputation.py            new, 240 lines — one-shot, idempotent
  docs/run-reports/2026-09-14-fill-missing-reputation.md   this file

EDITED (hand-authored data)
  Reputation-Matrix2/data/events.json         + reputation on 6 records, +150 lines, pure insertion
  Reputation-Matrix2/data/battles.json        + reputation on 2 records,  +21 lines, pure insertion

EDITED (generators — the source, not the output)
  tools/build-tape-and-files-session.py       + reputation block on EVENT, +23 lines
  tools/build-judgement-in-the-grove.py       + reputation block on event_record() and
                                                battle_record(), +55 lines

REGENERATED (do not hand-edit; rebuilt by the two generators above)
  Reputation-Matrix2/data/events.json         ~ the_tape_and_the_wario_files,
                                                judgement_in_the_grove
  Reputation-Matrix2/data/battles.json        ~ judgement_in_the_grove_battle

DELETED
  nothing
```

No `_generatedReputation` marker was written anywhere. All eleven are
hand-authored; the marker is provenance for `tools/genkit` output, and
`docs/BATTLES_GUIDE.md` is explicit that it must not be applied to hand work.

### The generator correction, reported loudly

The first pass wrote all eleven records straight into `events.json` and
`battles.json`. `tools/check-all.py` then failed two checks that had been
passing — `tape session` and `judgement in the grove`. Three of the eleven are
**generator-owned**, and the filed JSON is diffed against the generator output.

That was my error and it is the useful finding of the run: the eleven were not
eleven records of one kind. The fix was to revert those three from the data,
author their reputation inside `build-tape-and-files-session.py` and
`build-judgement-in-the-grove.py`, and re-run the generators — which is the
root README's rule, edit the thing that generates the file. Both checks pass
again.

One cosmetic consequence is worth naming: `build-tape-and-files-session.py`
writes with `ensure_ascii=True`, so re-running it re-escapes eight emoji in
`events.json` as `\uXXXX` and reflows `articleAnalyses.json` and
`commentaries.json` by ~300 lines. Same parsed values, pure noise in the diff.
I reverted the two analysis files and re-normalised `events.json` back to
literal emoji; both generator `--check` runs still pass. **The generator's
`ensure_ascii` inconsistency is pre-existing and is left alone** — fixing it is
a separate purpose and does not belong in this PR.

---

## 2. Records filed

Eleven records, all previously empty. `reputationChanges` is operator-keyed;
`effects` is the record-level factional outcome, which the engine applies to
participants at `EFFECTS_SHARED_WEIGHT = 0.25` and never lets overwrite an
authored personal delta.

| Record | Type | Operator deltas | `effects` | Headline cause |
|---|---|---:|---|---|
| `the_dread_mansion_incursion` | event | 1 | `dgk −12` | Level 5 director and Central Command in open contradiction on a recorded line |
| `feyward_library_reclamation_and_the_kitchen` | event | 2 | `connectopia_pioneers_guild +6` | First room in the manor defended as a room, not as a route |
| `promo_mario_newspaper` | event | — | — | **Deliberate abstention** (see below) |
| `the_belly_of_the_beast` | event | 8 | `disaster_inc +8`, `iron_legion −4` | Scorncrow unmasked; the only exit sealed from inside |
| `the_garden_above_the_fire` | event | 3 | `mushroom_regency +6`, `wario_enterprise +5` | Luigi recovered alive and burned rather than lost over the falls |
| `feyward_i_cant_afford_not_to_care` | event | 3 | `color_division −6`, `mages_guild −8` | Aegis Magi contract declared failed; two of Hjumpik's people taken as leverage |
| `the_tape_and_the_wario_files` | event *(gen)* | 2 | `wario_enterprise +5` | No combat; the asset gained was a primary source and a changed premise |
| `judgement_in_the_grove` | event *(gen)* | 5 ops / 12 rows | `iron_legion −8`, `disaster_inc +6` | Execution of a kneeling, unmasked, mercy-asking prisoner |
| `battle_of_the_mistral_farmstead` | battle | — | — | **Deliberate abstention** (see below) |
| `the_skittering_grove_descent_battle` | battle | — | `disaster_inc +6`, `iron_legion −3` | Record-level only; personal deltas live on its event |
| `judgement_in_the_grove_battle` | battle *(gen)* | — | `iron_legion −6`, `disaster_inc +5` | Record-level only; personal deltas live on its event |

### Three authoring decisions worth checking

**Paired records do not both carry personal deltas.** `_buildRepEventCache()`
walks events and battles alike and sums whatever it finds. `the_belly_of_the_beast`
and `judgement_in_the_grove` each have a paired battle record; authoring the
same operator deltas on both halves of one session would count every operator
twice into their standing. The event owns the personal deltas; the battle
carries `effects` only, and its `reputationNotes._record` says so in the data
itself. 22 existing pairs in canon already carry reputation on both halves —
worth an audit later, but not this PR's purpose.

**The Iron Legion is authored negative at Judgement in the Grove, despite the
alliance.** The Legion called for pest control, retreated, accepted the party's
help, and used the alliance to serve a warrant on Archie Miser mid-battle. The
relationship ends worse than it started. Heavy engagement is *Pressure*, not
*Standing* — authoring it positive is exactly the notoriety-as-approval trap
the two-axis rework was built to close.

**Two records abstain on purpose, and say so.** `promo_mario_newspaper` is a
review of an abridged clipping, amended by an account Waluigi explicitly did
not witness, describing an undated and unverified encounter — no faction can be
said to have changed its opinion of anyone on that evidence.
`battle_of_the_mistral_farmstead` is dated 722 BF, three centuries before any
filed operator existed, between two groups that hold no record in any faction
registry. Both carry an explanatory `reputationNotes._record` so the next pass
reads the gap as a decision rather than as unfinished work. The coverage audit
will keep reporting "2 scored records move nothing" — that is now correct and
intended.

---

## 3. XP awarded

**No XP awarded this run.** This run files reputation only. No `xpAwards`
array was created, extended or altered on any record, and no calculated total
was touched anywhere.

---

## 4. Verification

```
python3 tools/fill-missing-reputation.py     8 written, 0 skipped (re-run: 0 written, 8 skipped)
python3 tools/build-judgement-in-the-grove.py --check   event, battle, front page and Salam all match
python3 tools/build-tape-and-files-session.py --check   event, analysis and commentary all match
python3 tools/check-all.py                   fails only: alliance cache, map lenses
                                             — identical to the pre-edit baseline on 2e2eb08
python3 tools/audit-reputation-coverage.py   record gap 11 -> 2, both intentional abstentions
json.load on events.json and battles.json    parse clean
git diff --stat on both data files           pure insertion, 0 deletions
```

**Engine-level check.** Rather than trusting the shape, I extracted
`LORE_FACTIONS`, `REPUTATION_OPERATORS`, `OP_ALIAS`, `_recordOperators`,
`_recordDeltaSources`, `_recordYear`, `_isMemorable` and `_decayFactor` out of
`index.html` and ran the real functions over the eleven records in a Node `vm`
context. Every faction id resolves, every record that should produce a panel
produces one, and the two abstentions correctly produce none.

That check also caught two things I would otherwise have shipped blind, both
recorded in block 5.

---

## 5. What is not done / open

· **The decay model erases most of what was just filed.** `_decayFactor()` uses
  a one-year half-life against `CUR.year = 1040`, so anything off the current
  year is crushed to the 5% floor and `Math.round()` takes it to **zero on
  screen**. Verified against the live engine: of the eleven, only
  `the_belly_of_the_beast`, `judgement_in_the_grove` and the two 1040 battles
  display a non-zero number. `the_garden_above_the_fire` shows `+5 → 0`;
  `the_tape_and_the_wario_files` shows `+6 → 0`; both Feyward records show
  every row as `0`. Across all canon this affects **13 of 178** records whose
  every authored delta rounds to zero — the Feyward arc runs on a 922 BF clock
  and is therefore almost entirely invisible.
  The data filed here is correct and the raw values are right; the **renderer**
  is wrong, and this is a direct second cause of the user's "I can't tell what
  is impacted" complaint. It is a pre-existing engine bug, not a regression
  from this run, and fixing it is a separate purpose — it belongs with the
  visual-reputation PR, and should be added to
  `docs/notes/REPUTATION_ON_ARTICLES_PLAN.md` as a new item.

· **`color_division` and `dgk` are not in `LORE_FACTIONS`.** They exist in
  `factions.json`, so the deltas are legitimate, but
  `renderReputationImpactPanel` falls back to `prettyId(fid)` and the row links
  to a faction page that will not resolve. Three rows across two records are
  affected. This is plan item C in `REPUTATION_ON_ARTICLES_PLAN.md` and is not
  fixed here.

· **`wario` and `eager` are not registered operators.** `REPUTATION_OPERATORS`
  holds exactly eight ids. Both keys render on the article panel but contribute
  to no standings sheet. I used them anyway because the prose supports the
  attribution and because canon already does this — baseline had `wario` ×2 and
  `eager` ×1, plus `gamma_agent`, `dracule_mihawk`, `sans` and others. This run
  takes `wario` to 5 and `eager` to 2. Either promote them to operators or
  strip the convention; it should not stay ambiguous.

· **`aegis_magi`, `skittering_grove` and `embercap` were wanted and not used.**
  None exists in any faction registry. The prose for
  `feyward_i_cant_afford_not_to_care` turns on the Aegis Magi contract failing,
  so that record is filed against `mages_guild` — the parent body — which is
  accurate but coarser than the story. Creating factions was out of scope.

· **22 existing event/battle pairs carry reputation on both halves** and may be
  double-counting operators into their standings. Found while establishing the
  convention for this run; not audited, not touched.

· **`build-tape-and-files-session.py` writes `ensure_ascii=True`** while every
  other writer in the repo uses `ensure_ascii=False`, so running it churns
  ~300 lines of unrelated diff. Worked around, not fixed.

· No index, `SITE_UPDATES`, `mainPage.json`, RNN or WAHwire change in this run.
  Nothing was regenerated except the three generator-owned records named above.
