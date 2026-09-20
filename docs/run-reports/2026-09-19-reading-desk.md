# Run report — the Bone-Line commentary, and the Reading Desk

**Filed:** run dated 2026-09-19
**Branch:** `arena/01a0b2a2-bik`

---

## 1. The missing commentary track

`snowdin_bone_line_registry_commentary` — 7 sections, 3,171 words, **0.92× the
source**, Waluigi/1k 20.2, CAPS/1k 27.1. All above the strict floors. The
archive now has 11.

It leads on the joke buried in the provenance: Waluigi got into a sealed
civilisation through a permissions form that specified a duration, a monitor and
a revocation condition, and **forgot to specify a recipient** — then spent that
hard-won monitored hour asking a lazy skeleton about his aunts.

It drops the voice twice, as the guide requires. Once on **entry #472** — Times
New Roman logging Sans's puns and saying *no permission required, this is an
archival initiative*, which is a sentence Waluigi has said, in that register, to
people who asked why they were in this encyclopedia. And once in a new closing
section on **Papyrus**, who is the subject of both verified quotations, was forty
feet away holding a sock, and was never put on the call. That omission is filed
as Waluigi's own rather than as a scheduling problem.

Also new: the observation that the twenty-eight are not a bloodline but a
**household that keeps admitting people** — a rock, a human in a striped shirt,
and someone who claims he was adopted for cheering at the sky. A family like
that does not need a registry to be true. It needs one to be *administered*.

## 2. Field plates saved as cookies — the Reading Desk

Rather than a bare cookie, this is a small system that makes saving plates
*mean* something, since you asked for the daily reward in the same breath.

**How it works.** Reading a filing stamps it. Stamp **3 in a day** and the day is
filed: the streak advances and the **field plates from what you actually read**
are kept in a persistent gallery. Plates come from each filing's own
`image`/`imageCaption` — reuse, never a new render, per the image rule.

**Where it lives.** One `localStorage` key (`waluipedia-reading-desk-v1`),
clearable in one action, capped at 60 plates so it cannot grow without bound. It
hooks the *existing* `dashNoteRead()` tracker rather than adding a second one.

**Surfaces.** A progress band on the home page under the deadline banner; a
`#/desk` page with today's reading, the streak figures and the plate gallery; a
sidebar link; and a toast when the day completes.

**The hard constraint I kept.** This is reader-local and **never writes to
canon** — the same rule the WAHwire design doc sets for reader drafts. The copy
says so plainly on the page: *it is your record, not the archive's*.

## 3. Verification

* Desk logic exercised against real data before shipping: re-reading one filing
  **does not double-count**, plates **de-duplicate**, a consecutive day
  **increments** the streak, a gap **resets it to 1**, and the best streak
  **survives** the reset.
* `test-appearance-chronology.mjs` **106 passed, 0 failed** — thirteen new
  assertions covering all of the above plus route, sidebar and the canon-safety
  check.
* `check-commentaries.py --strict` passes at 11 filed.
* `check-all.py` **59/61** — only the two known jsdom environment failures.

## 4. What is left

* **Papyrus has still never been interviewed**, and the commentary now says so
  in Waluigi's own voice. It is the strongest open lead in the Ebott arc.
* The desk target is 3/day and the cap is 60 plates. Both are one-line constants
  (`DESK_DAILY_TARGET`, `DESK_MAX_PLATES`) if they feel wrong in use.
* The desk does not award XP. XP is canon and comes from the ledger; a reader's
  browser should not be able to mint it.
