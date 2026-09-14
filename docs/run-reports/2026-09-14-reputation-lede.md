# Run report — make reputation visible on the article

**Date:** 14 Sep 2026
**Branch:** `arena/01a09e47-bik`
**Purpose:** the user's actual complaint — *"on the latest articles I can't tell
what is impacted."* This fixes the reading surface. No canon data, no deltas,
no prose changed in this run.

---

## The diagnosis, which turned out not to be the one in the plan

`REPUTATION_ON_ARTICLES_PLAN.md` assumed the problem was coverage and registry
gaps. Measuring the render path found a blunter cause:

**The Reputation Impact panel was returned from `eventPeopleAndXpPanel()`,
which puts it inside the `Session` tab of the apparatus band. The band opens on
the `Case file` tab whenever a record has an analysis or a commentary.**

```
LATEST 12 events — is the reputation panel behind a NON-default tab?
  strange_moonlight_incident                  rep=Y  opens on Session tab
  shadow_maze_encounter                       rep=Y  opens on Session tab
  ruins_of_the_battlefield_blight             rep=Y  opens on Session tab
  first_snowfall_incident                     rep=Y  HIDDEN (opens on Case file)
  feyward_library_reclamation_and_the_kitchen rep=Y  HIDDEN (opens on Case file)
  promo_mario_newspaper                       rep=n  HIDDEN (opens on Case file)
  the_belly_of_the_beast                      rep=Y  HIDDEN (opens on Case file)
  the_lava_bridge_ambush_and_the_blue_luigi   rep=Y  HIDDEN (opens on Case file)
  the_garden_above_the_fire                   rep=Y  HIDDEN (opens on Case file)
  feyward_i_cant_afford_not_to_care           rep=Y  HIDDEN (opens on Case file)
  the_tape_and_the_wario_files                rep=Y  HIDDEN (opens on Case file)
  judgement_in_the_grove                      rep=Y  HIDDEN (opens on Case file)
```

**Nine of the twelve most recent filings — and every one of the last nine —
hid their reputation behind a tab the reader had to know to click.** The
complaint was precisely accurate, and it was about *the latest* articles
because those are the ones that have companion readings. Filing more data would
never have fixed it.

Two further bugs compounded it, both verified against the live engine.

---

## 1. Files created or edited

```
EDITED
  index.html                                       ~ 148 lines (+134/-14)
    · recordReputationLede()                         new function, renders above the prose
    · repFactionMeta()                               new helper, resolves names from either registry
    · renderReputationImpactPanel()                  raw-first rows, off-roster + no-link honesty
    · renderArticleFactionReputation()               falls back to factions.json
    · eventPeopleAndXpPanel()                        no longer returns the panel (moved, not deleted)
    · view_article()                                 renders the lede before <div class="prose">
    · <link> cache-buster                            ?v=rep-impact2 -> ?v=rep-lede1

  Reputation-Matrix2/app/styles/commerce-event-fixes.css   + 43 lines, appended only

CREATED
  docs/run-reports/2026-09-14-reputation-lede.md    this file

DELETED
  nothing
```

No data file was touched. No generator was run.

---

## 2. The four changes

### A. The reputation lede — placement, not a new system

Same panel, same numbers, same `renderReputationImpactPanel()`. It now renders
**above the prose**, so the reader meets it before reading rather than after
hunting. Above it sits a one-line summary — verdict + faction chips + a count —
so the impact is legible without expanding anything. The full per-operator
breakdown is collapsed behind *Show the full breakdown*.

Nothing was deleted and nothing lost its anchor: the apparatus band keeps its
tabs, `#xp-session` still resolves, and `revealApparatusAnchor()` is untouched.

### B. Lead with `raw`, not `decayed` — the disappearing-number bug

`_decayFactor()` applies a one-year half-life against `CUR.year = 1040`, and
`Math.round()` then took the display to **zero**. The panel was showing `0` for
filings that had plainly moved a faction.

The fix is editorial, not arithmetic. **The engine is left completely alone** —
standings, decay and the half-life all compute exactly as before. Only the
*display* changes: the row now leads with `raw` (what this filing did, which is
the question the reader is asking on an article page) and shows `carries +N now`
beside it only when the two differ.

| Record | Before | After |
|---|---|---|
| `the_garden_above_the_fire` | `0` | `+5` · *carries +0 now* |
| `the_tape_and_the_wario_files` | `0` | `+6` · *carries +0 now* |
| `feyward_i_cant_afford_not_to_care` | every row `0` | `−10` / `−8` · *carries 0 now* |
| `judgement_in_the_grove` | `−12` | `−12` (unchanged — current year) |

This affected **13 of 178** records across all canon; the entire Feyward arc
(922 BF clock) displayed as zeroes.

### C. Factions filed but not registered now render

`renderArticleFactionReputation()` returned `''` when `LORE_FACTIONS` had no
entry, so six filed factions had no standings panel at all. It now falls back
to the `factions.json` record via the existing `factionRecord()`. Plan item C,
fixed at the cause rather than by adding six entries.

```
color_division      -> The Colour Division
dgk                 -> Directorate Global Operations (DGK)
order_of_jack       -> The Order of Jack
midlands_diet       -> The Midlands Diet
council_of_seven    -> The Council of Seven
undertale_monsters  -> The Monster Underground
```

Impact rows for these now show the real name and are rendered as a non-link
with a `no standings page` tag, because the standings route genuinely does not
resolve yet. **Honest, rather than a link that goes nowhere.**

### D. Off-roster operators are labelled

`wario`, `eager` and seven others render on the panel but are never summed into
a standings sheet. Their header now reads `recorded only` instead of offering a
`standings →` link into a page that will not have them. This surfaces the open
question rather than answering it — promotion is still an editorial decision.

---

## 3. XP awarded

**No XP awarded this run.** No ledger, total or award array was touched.

---

## 4. Verification

```
node --check on all 3 inline <script> blocks    OK (1.73 MB block parses)
CSS brace balance                               65/65
python3 tools/check-all.py                      fails only alliance cache, map lenses
                                                — identical to the baseline on 42a619d
python3 start.py + curl                         index 200, events.json 200, css 200
```

**Rendered the real functions, not a mock.** `recordReputationLede`,
`renderReputationImpactPanel`, `repFactionMeta`, `getRecordReputationImpact`
and the decay chain were extracted from `index.html` into a Node `vm` with the
real `events.json`, `battles.json` and `factions.json`, and the output HTML
inspected:

- `judgement_in_the_grove` → *Gained ground and lost it* · Disaster Inc. +16,
  Liberated Toads +7, Iron Legion −19, Oathbound Judges −9 · 4 factions, 6 people
- `feyward_i_cant_afford_not_to_care` → *Lost ground* · Colour Division −13,
  Mages' Guild −12 — **previously displayed nothing at all**
- `promo_mario_newspaper` → *Nothing — on purpose*, with the abstention note
- `battle_of_the_mistral_farmstead` → *Nothing — on purpose*
- happy path unchanged: `iron_legion`, `disaster_inc`, `mages_guild` all still
  `linkable:true` with identical names
- unknown id degrades safely to `prettyId()` with `linkable:false`

---

## 5. What is not done / open

· **The abstention card renders only where the record declares the keys.** It
  keys off `reputationChanges !== undefined || effects !== undefined` plus a
  `reputationNotes._record`. A record that is simply unfiled still shows
  nothing, which is correct — but it means the two abstentions look identical
  to a filed record with no movement. Acceptable; worth revisiting if more
  abstentions appear.

· **The six fallback factions still have no standings *page*.** The impact row
  is now honest about that rather than fixed. Giving them a real
  `#/reputation/faction/<id>` route means teaching the reputation matrix to
  read `factions.json` — a larger change, and a different purpose.

· **Off-roster operators are labelled, not resolved.** `wario` (5 uses) and
  `eager` (2) still reach no standings sheet. Promote or re-key — still an open
  editorial decision, now at least visible in the UI.

· **The decay model itself is untouched.** A one-year half-life with a 5% floor
  means a 1035 BF filing contributes ~0 to a 1040 standing. I changed only what
  the article *displays*, because changing the curve would silently restate
  every standing in the archive — that needs its own PR and its own argument.

· **No headless browser in the sandbox**, so verification is function-level and
  markup-level rather than a screenshot diff. A local preview was rendered and
  reviewed, then deleted rather than committed.

· `majorBattles`, `trials` and `conflicts` have their own view functions that
  call `renderReputationImpactPanel()` directly and were **not** given the
  lede. They were never affected by the tab bug. Deliberately out of scope;
  worth a follow-up for consistency.
