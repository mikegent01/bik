# Run report — Feyward refile, a real countdown, and the commentary track

**Filed:** run dated 2026-09-19
**Branch:** `arena/01a0b2a2-bik`
**Purpose:** four corrections to the Shepherd's Garden filing.

---

## 1. One Toad, not two — my error

You caught a real mistake. I filed the basement scene with **two** Toads in it,
Purple T and Orange T, on the theory that your notes named both. They didn't:
Purple T **is** Mystic Morel, and there was one Toad in that cellar.

What that cost and what was fixed:

* The event now names **Mystic Morel (Purple T)** throughout — summary, outcome,
  description, notable features, participants, and the section formerly titled
  "Two Toads, Which Is Not One Toad" (now "The Toad Who Was Already Behind Him").
* Orange T was **removed** from `participants[]`, `relatedArticles[]` and the
  XP table. His 140 XP is gone; the session total drops 1,260 → 1,120.
* His **article was rewritten**. I had given him the basement scene, the bowl of
  blood and the "not an enemy" line — all of which belong to Morel. His record
  now covers only what he actually did: the sanctum library, treating Bones, and
  the banishment of both Dans. It carries an explicit "not to be confused with
  Mystic Morel" note so this cannot recur.
* The location record now credits the bowl to Morel.

The underlying trap is the same one that bit the first pass on this campaign:
**this archive has several similarly-named Toads and they are different people.**
Orange T, Green T, Purple T/Mystic Morel, Toad Lee, the God Toad. I asked about
that ambiguity last turn and still got it wrong in the other direction.

## 2. Feyward, not Shadeward — also my error

You were right, and the rule is unambiguous: README says the Feyward clock covers
**"everything inside the Feyward."** The session's second half is in the Feyward
basement, so it is a Feyward filing.

* `timeCode` `TC:1040-09-05/SHD` → **`TC:0922-09-03/FEY`**, chained forward from
  the previous Feyward session (2 Aethel, 922) rather than converted from the
  Material date, per the pocket-clock rule.
* The `date` string now leads with the Feyward reckoning and notes the Material
  standing in the same line, which is the documented format.
* Current fronts recomputed: **Feyward** now shows this session and
  **Shadeward** correctly returns to *Judgement in the Grove*.

## 3. The countdown is now hh:mm:ss and falls on its own

Two changes.

**It is prominent.** A banner sits near the top of the home page, directly under
the hero — large tabular digits, the consequence spelled out, click-through to
the calendar. It turns red inside the final third.

**It decreases per Feyward session, automatically.** This is the important part.
The remaining time is **derived**, never stored: the site finds the newest filed
session on the deadline's own clock, reads its in-world timecode, and subtracts.
So filing the next Feyward session *is* what moves the clock. There is no counter
to remember to decrement and the timer can never disagree with the filings.

Verified by simulation against synthetic future sessions:

| Next Feyward filing | Shows |
|---|---|
| 3 Aethel 922 (now) | `504:00:00` — 21 days |
| 4 Aethel, 06:00 | `474:00:00` — hours count |
| 13 Aethel | `264:00:00` — 11 days |
| 23 Aethel | `024:00:00` — 1 day |
| 24 Aethel | `00:00:00` — THE TERM HAS EXPIRED |
| 28 Aethel | `00:00:00` — clamped, never negative |

A session on a **different** clock does not move it. That is asserted in the test.

Seconds always read `00`: the archive's timecodes carry hours and minutes but no
seconds, so a live-ticking seconds field would be inventing precision the records
do not have. The slot is displayed because you asked for hh:mm:ss.

## 4. The commentary track

`the_shepherds_garden_and_the_three_week_clock_commentary` — 9 sections, 5,323
words, **Waluigi/1k 19.9 · CAPS/1k 26.5 · 0.95x the source**, all above the
strict thresholds in `check-commentaries.py`. The archive now has 10.

It retells the whole session — the story survives without the source article, per
house rule 1 — and drops the voice exactly twice, as the guide requires: once on
the cruelty of telling a man his grief was a diagnostic *after* taking the
reading, and once to flag that the Regency trafficking claim is uncorroborated.

## 5. Verification

* `check-all.py` **58/60** — only the two known jsdom environment failures.
* `check-commentaries.py --strict` passes with 10 filed.
* `check-timecodes.py` passes; `build-judgement-in-the-grove.py --check` passes
  now that the Shadeward front has returned to it.
* `test-appearance-chronology.mjs` extended to **59 passed, 0 failed**, including
  six simulations proving the countdown falls, honours hours, hits zero exactly
  at term, clamps, and ignores other clocks — plus a guard that the deadline
  record stores **no** `elapsedDays`, so nobody reintroduces a drifting counter.
* A new test asserts **the newest filing always has a commentary track**, which is
  the check that would have caught this one missing.

## 6. What is left

* **The 722/922 contradiction still stands** and now matters more: this is filed
  on the Feyward clock at 922, while a goblin in the room insists it is 722. If
  722 is right, Bowser is not in the same year as Hjumpik and the rendezvous the
  countdown depends on does not work.
* **The Oracle's Peach disclosure is still unintegrated** into the investigation
  file.
* RNN: 3 pending against a threshold of 10.
