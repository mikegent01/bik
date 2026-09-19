# Run report — The Shepherd's Garden and the Three-Week Clock

**Filed:** run dated 2026-09-19
**Branch:** `arena/01a0b2a2-bik`
**Purpose:** file the new session (Planar Sanctum → Feyward basement), and give
the campaign a real countdown.

---

## 1. Verifying the prior session

You asked me to confirm the linked article was the right predecessor. **It was.**
`the_telescope_and_the_tennis_match` ends exactly where this session opens:
Bowser and the Oracle in the sanctum after the telescope, with Orange T having
just banished both Dans. Nothing else in 121 events fits that seam.

## 2. Four things I asked about rather than guessed

| Question | Your call | Why it mattered |
|---|---|---|
| Purple T or Orange T? | **Both — two Toads** | Canon already has `mystic_morel` = "Purple T". Your notes used both names; guessing would have merged two characters. |
| Feyward year 922 or 722? | **File the contradiction** | Oracle says 922, goblin says 722, calendar says the Feyward is stuck at 722 with later readings at 922. |
| Countdown length? | **Hard three weeks**, edit when time is up | Clean to track. |
| Is "Larry" a Koopaling? | **No — Bowser was joking**, all cages held Goombas | Would have invented a character and a family relationship. |

Filed accordingly: two distinct Toads in the prose, both year-readings recorded
as unresolved, a hard 21-day timer, and no Larry.

## 3. What was filed, in the mandated order

**Locations first.** `feyward_manor_basement` — the teleport circle, the bowl of
blood, the untouched lever, five labelled honeys, the knight's statue, the
satyr's cellar, the cages.

**Characters second.** `orange_t` finally has an article. This closes standing
gap (8): he had XP, a wallet, quests, props, 32 event mentions and an actor
sheet, but no wiki page. Mystic Morel already existed and was linked, not
duplicated.

**XP third**, before any prose: Bowser 520 (social), the Oracle 420 (social),
Mystic Morel 180 (social), Orange T 140 (discovery). Total 1,260.

**Then the event** — `the_shepherds_garden_and_the_three_week_clock`,
`TC:1040-09-05/SHD`, nine sections, two plates.

## 4. The countdown is a system, not a sentence

You asked for "an actual countdown for my sake and the players' sake." A deadline
buried in prose is a deadline that gets forgotten, so it is now **data**:
`calendarMeta.deadlines[]`, rendered by `deadlinePanel()` on the calendar page
beside the existing pocket clocks.

It shows **21 days remaining**, a progress bar, what happens at zero, what
Bowser was promised if he makes it, and which session started it. Advancing it is
a one-number edit (`elapsedDays`); the arithmetic is derived, never stored. It
turns red in the final third.

## 5. Judgement calls worth flagging

- **Campaign front.** I first filed this as `MAT`, which fronted it as "Mario" —
  wrong, this is the Raventree thread. Corrected to `SHD`. It then displaced
  *Judgement in the Grove* from the Shadeward front, which is your "newest
  replaces, never stacks" rule working — but `build-judgement-in-the-grove.py`
  asserted its own event holds that front **forever**, so it failed. Its own
  comment said the front stays "until another Shadeward session replaces it", so
  I made the assertion match the comment.
- **The cages get the moral weight, not a gloss.** Bowser identified a Regency
  trafficking pipeline, called it intolerable, said he misses his Koopas and
  calls them his children — and left nine of them in crates because being
  captured embarrasses his kingdom. All true in the same hour. The prose and the
  assessment both hold those together rather than resolving them.
- **The Regency trafficking claim is labelled uncorroborated** in
  `reputationNotes._record`. It comes from a hostile goblin under no obligation
  to be accurate. It is specific and names a mechanism, so it is filed — flagged,
  not asserted.

## 6. Verification

* `check-all.py` **58/60** — only the two known environmental jsdom failures.
* `check-timecodes.py` passes; 12 records now carry a timecode.
* `check-references.py`, `check-event-art.py`, `check-covers.py` all clean —
  every id resolves, both plates resolve on disk.
* `check-all.py` caught two real mistakes mid-run: the images were written to a
  top-level `assets/` instead of under `Reputation-Matrix2/`, and the filing
  ledger was stale. Both fixed; the stray directory was removed.
* `test-appearance-chronology.mjs` extended to **48 passed, 0 failed** — ten new
  assertions covering deadline integrity and the panel.
* Home feed needed no edit: it renders from `events.json`. `update-index-home.py`
  is obsolete here (its anchors no longer exist) and was correctly not forced.

## 7. What is left

* **The 722/922 contradiction is unresolved by design.** If Bowser is in 722 he is
  *not* in the same year as Hjumpik's party, which breaks the rendezvous the whole
  deal depends on. Worth deciding before the next Feyward session.
* **RNN: 3 pending against a threshold of 10.** No episode owed yet.
* **The Oracle's Peach disclosure is unintegrated.** It is the biggest assassination
  lead in the archive and is currently only in this event — it likely belongs in
  the investigation file.
* Standing gaps unchanged: `dateSort` three schemes; 7 duplicate character ids;
  Iron Legion dossier stale.
