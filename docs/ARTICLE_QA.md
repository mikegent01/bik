# Article QA — checking an article over before it ships

Structure is what the checkers catch (`check-battles.py`, `check-exhibits.py`,
`build-rnn-broadcast.py --check`). **Content is what this page catches.**
Run it on every event, battle, and standalone article before calling a
filing finished — especially AI-drafted ones, which pass every structural
check while being hollow.

**The exemplar:** *The Hanging-Tree Apple, the Mirror Theft, and the Invited
Vampire* (`the_hanging_tree_apple_mirror_theft_and_invited_vampire`). Every
check below is annotated with how it passes there.

---

## The six checks

### 1. The physical-detail chain
Every cause has an object. Not "they fought a vampire" — *an imp crouched in
a broom closet, was thrown through a window, and shouted permission as it
crossed the sill.* If a paragraph contains no noun you could draw, it is a
summary wearing an article's clothes.
*Exemplar: the sack, the sky-machine, the plank, the gloves, the tail.*

### 2. People remain people
Every named actor wants something in the scene, and the smallest roles get
one humanizing beat (the guard asleep at his post; Eager "already looking
for another bowl"). Background radiation — characters who exist only to be
mentioned — fails this check.

### 3. The paper is real
Anything the prose names as a document exists in `props.json` and links
back. An invoice described but not filed is a promise the archive broke.
*Exemplar: the threshold sentence and the custody chit, both openable.*

### 4. The dates survive the calendar
In-world dates only (`README.md` → The calendar), chained to the last solid
date, on the correct plane's clock. A real-world date anywhere in prose or
data is an automatic fail.
*Exemplar: 30 Harvestide, night — chained off the Box Guardian filing.*

### 5. The article can be entered
A reader who has never heard of the arc can open the page and orient in one
screen: who, where, what went wrong, links outward. Check the lead, the
INFOBOX rail, and the related chips — are they populated, or is the reader
expected to already know?
*Exemplar: Remi, the mirror, the vampire — all introduced, none assumed.*

### 6. The voice is somebody's
Neutral encyclopedia tone is a bug here. The author (usually Waluigi) has
opinions, files asides, and is occasionally wrong on purpose. If three
paragraphs could be pasted into any other wiki without editing, the article
has no voice and needs one pass for register, not for facts.

---

## Procedure

1. Read the article **cold** — no notes, no diff. Mark every place you were
   bored, confused, or told instead of shown. Those are the findings.
2. Run the six checks. Each fails or passes with a quoted line.
3. Cross-system sweep: `CROSS_SYSTEM_UPDATES.md` — did this filing trigger
   Pond Patrol, dynasties, POIs, currencies, a WAHwire post?
4. Verify the exemplar-standard: could this article's best paragraph sit in
   the Hanging-Tree filing without embarrassment? If not, name the gap
   rather than vaguely "making it better."

## Findings format

Report content findings like audit findings, in the run report:

```
QA  the_hanging_tree_…  PASS 1,3,4,5 · WARN 2 (Rattles appears 4×, wants nothing)
                  WARN 6 (Parts IV–VI are neutral; one aside pass needed)
```

An article ships with warnings when the warnings are *named*. It does not
ship with unexamined checks.
