# Run report — You Said Leave No One Behind, Right?

**Filed:** run dated 2026-09-27
**Branch:** `arena/01a0e111-bik`

---

## 1. The filing

`you_said_leave_no_one_behind` — `TC:1040-09-01T01:40/SHD`, minutes after
[the airlift that never came](2026-09-20-airlift-that-never-came.md). 1,917
words, 28 notable features, 8 participants, **1,420 XP** across five
recipients. Filed in the mandated order: beat list → locations (none new) →
characters (all resolved) → XP → prose → investigation → index → systems.

## 2. What the session was

The transcript's spine: Markop's first motorbike ride ends in the trees and
then in Salam; **the Legion code that took Salam unconscious is returned by
Markop — "you said leave no one behind, right?" — and it works**; Salam wakes,
is ordered to rest, and is posted as sentry on the bike with a Legion guard
beside him; the retreat is back through the tree of the grove with a scream
for a signal; the three Toads plan to run up and disengage; an Iron Legion man
runs past Markop in open panic (cause unrecorded); Archie has mana for one
spell; Eager clears his way and is bitten and slashed; Dan shields Archie and
the green spider bites through it; a guard grabs at Salam ("stand still, you
worm" — "No!"); the Legion heals Eager with a syringe.

## 3. The judgement calls

**The code is filed as symmetric, not as won.** Last filing the guard's code
took Salam and the archive declined to call the guard wrong. This filing
declines to call Markop's use of the same words a victory either — the syringe
and the release are recorded as the institution processing in both directions.
The refusal ("stand still, you worm" / "No!") is filed as Salam's, the one
objection he was awake to make.

**The "you might end up with these guards" exchange is attributed carefully.**
The transcript does not name every speaker across the sentry negotiation. The
filing names Markop and Salam where the record supports it and leaves the
hedges unattributed rather than guessing.

**The spear into the ettercap is filed as unattributed.** The record does not
say whose. The prose says so, and Waluigi "files his suspicion nowhere."

**The HP report is remastered, not pasted.** "dan health status HP report /
markop = 16 …" is table scaffolding; the filing converts it to "the arithmetic
called across the grove like a ledger being read out." The numbers themselves
are quoted exactly.

**No exhibits.** The prose deliberately names no paper this session — the
scream pact is a signal, not a document. Skipped on purpose per
STORY_FORMAT_GUIDE §9B ("a prop nobody opens is bloat").

## 4. Also filed

* **Investigation** — `shadeward_feyward_ruined`: session row
  `s_you_said_leave_no_one_behind`, `lastFiled` bumped, `thread_disputed_casualty`
  amended (custody closed, authority still open), new thread
  `thread_what_the_legion_ran_from`, four leads (the running man, the tree
  route, the Toads' disengagement, a file for the giant green spider).
* **Art** — four plates, generated per IMAGE_GENERATION_GUIDE from
  event-state portrait bases (`markop-grove-wounded`, `salam-grove-scarred`,
  `archie-grove-spent`, `dan-grove-vanguard`, `eager-grove-concussed`,
  `iron_legion_guard`): the release at the bike (lead), the sentry shot, the
  green spider bite, the syringe. **Caveat:** the guide's step 4 (look at every
  image) could not be performed in this environment — no vision available. The
  plates were generated with the cast locked to references and the prompt
  sheet at `/tmp/ylnb-prompts.md`; they should be eyeballed before the site is
  republished.
* **Wire** — two native posts (Markop: the code returned; Salam: "I said no"),
  orders 205–206, comments from waluigi/salam/eager.
* **Growth** — five character records amended (status + keyEvents): markop,
  salam, archie_miser, dan_the_toad, eager. Salam's status was two filings
  stale ("Fallen and unrecovered") — now "Awake and posted."
* Front page (`latestUpdate`), campaign fronts (Shadeward → this filing),
  `SITE_UPDATES`, `filing-updates.json` ledger (pass 13), RNN pending list.
* **Dossier assessments: deliberately unchanged** — the Legion's institutional
  opinion of Markop did not flip (they granted the code, then called Salam a
  worm); no warrant, kill-order, or defection moved.

## 5. Cross-system triggers reviewed

| Trigger | Result |
|---|---|
| Pond Patrol docket | No trigger — no docket roster member appears in the docket data |
| Regal Diet / Legion politics | No trigger — field actions only, no law, vote, or mandate |
| Dynasty, maps, currencies, Bros, songs, books | No trigger |
| WAHwire | Two posts (every filing posts) |
| RNN pending list | Appended (6 pending; threshold is 10 — no episode owed) |
| Dossier assessments | Reviewed, unchanged |

## 6. Verification

* `check-event-art.py` **127/127** · `check-home-feed.py` OK (latestUpdate =
  last-appended = this filing) · `build-campaign-fronts.py --check` 5 fronts
  current · `check-duplicates.py` 0 issues · `check-investigations.py` 0
  errors (8 pre-existing warnings) · `check-rolls.py` 0 errors ·
  `check-exhibits.py` 0 errors · `check-timecodes.py` PASS ·
  `audit-wahwire.py` no new illegal tones (the one 'anger' reaction is a
  pre-existing post) · `track-filing-updates.py --check` current at pass 13.
* Every prose link, participant, relatedArticle, and xpKey resolves.
* Event audit: 2,003 story / 321 analysis words; sentence sd 9.9; no raw
  `<div>`; no banned commentary words.

## 7. What is left

* **The plates have not been eyeballed** (no vision in this environment).
* **Ledger note:** pass 13 also stamped the two Bowser historical events as
  changed — that is inherited drift from the 2026-09-24 canon correction run,
  which never stamped the ledger; recording it is honest, not a new edit by
  this filing.
* **Open leads:** what the running Legion man saw; where the tree lets out;
  whether the Toads disengaged; the giant green spider's file.
* **Sandbox note:** this session's clone started at the branch point
  `144928bd`; the branch was re-pointed to `origin/arena/01a0e111-bik`
  (`8f98437c`) with the working tree intact before committing.
