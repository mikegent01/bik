# Run report — two real portraits, and the missing tracks

**Filed:** run dated 2026-09-20
**Branch:** `arena/01a0b2a2-bik`

---

## 1. Portraits: the gap was two characters, not the folder

I audited all 576 files in `portraits/` against the 179 character records
before changing anything. **Exactly two characters had no portrait**, and both
were ones I filed in the last two sessions: `orange_t` and `pierce_anamatar`.

There *was* an `orange_t.png` already on disk, but it was wrong — a winged,
moss-and-flowers fey Toad, not the orange healer from the sanctum. It was never
wired to the record, which is why nobody noticed.

**Both new portraits were generated from existing art as reference**, not from a
blank prompt:

* **Orange T** — referenced `green_t.png`, so he matches the house Toad style:
  soft painted finish, transparent background, full-body three-quarter. Orange
  cap, healer's satchel with rolled bandages, plain wooden staff held low, the
  watchful non-expression the record describes.
* **Pierce Anamatar** — referenced `tymnas.jpg`, the humanoid portrait style:
  painted bust, dark vignette, muted palette. Composed, faintly amused, dressed
  as somebody who commands knights rather than fights beside them.

**Every character now has a portrait, and every local portrait path resolves.**

## 2. The missing tracks

**Commentary** — `the_airlift_that_never_came_commentary`. 6 sections, 2,657
words (1.01× source), Waluigi/1k 18.4, CAPS/1k 44.0. It leads on the thing I
could not resolve while filing the event: the guard who carried Eager off was
rude, unilateral, overrode the patient's own objection — and was *not obviously
wrong*, because the evidence for his assessment was lying on the floor around
him.

**Analysis** — `the_airlift_that_never_came_custody_analysis`. One thesis:
**the alliance did not fail, it completed.** Everyone argued about whether the
guard was rude; nobody argued about where Eager would wake up. The Legion left
the field holding two party members, walking them toward the same building
already named as the venue for Archie's arrest — and not one person went after
them, because everybody present had an urgent smaller problem.

## 3. Bugs caught while working

* **A `%`-formatting mistake** silently stripped emphasis from the whole
  commentary: `sec(...) % {...}` applied the substitution to the function's
  return value, not the string. Caught because CAPS/1k came back at **4.1**
  against a floor of 25.
* **Two of my own new tests were too strict** and I corrected the tests, not the
  data: some portraits are legitimate external URLs, and analyses may read
  **battles** as well as events.

## 4. A real pre-existing gap, now surfaced

Three analyses point at filings that **do not exist anywhere in the archive**:
`undercity_grotto_seclusion_incident`, `ruin_recovery_1023_bf`, and
`frostfall_moonlit_mysteries`. Each also has a matching investigation with an
empty `relatedEvents`.

The readings exist; the sessions were never written. Rather than silence that, it
is **reported by the test and pinned at 3**, so a fourth cannot appear quietly.

## 5. Verification

* `test-appearance-chronology.mjs` **144 passed, 0 failed** — six new
  assertions covering portrait coverage, portrait paths, analysis targets and
  companion tracks.
* `check-commentaries.py --strict` passes at 12 filed.
* `check-all.py` **59/61** — only the two known jsdom environment failures.
* All links in both new tracks resolve; both portraits serve 200.

## 6. What is left

* **Do any existing character images need changing?** On the audit, no — every
  other record already has art and it resolves. The only wrong one was
  `orange_t.png`, and it is replaced rather than deleted in case that fey Toad
  turns out to be somebody.
* The three orphan analyses are a real filing opportunity: three readings
  already written, waiting for their sessions.
