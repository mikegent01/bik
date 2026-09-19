# Run report — the Oracle as an unreliable witness, and an honest half-hour

**Filed:** run dated 2026-09-19
**Branch:** `arena/01a0b2a2-bik`

---

## 1. The clock: 30 minutes, not two hours

You were right that I padded it. Two hours was time added to add it.

What Bowser actually does in that basement is one short sequence: step off the
altar, cross a hall, fail a lockpick, open cold storage, one conversation with
Mystic Morel, the cargo exchange, two hands of cards, two punches at a chest.
That is half an hour of wall-clock.

The goblin's "maybe like 2 am" lands **midway** through it — after the cold
storage and Morel, before the satyr. So arrival is placed at **01:30**, and the
countdown reads **503:30:00**. Thirty minutes burned, which is what the scene
supports and no more.

## 2. The Oracle could be lying — and the archive says he probably is

This is the bigger correction, and you were right to push on it. I had treated
his account as *testimony*. I should have asked the question first:

**Was the Oracle ever in that room?**

### He appears in none of the assassination records

Checked all six: The Day Of, The First Month, the Toadsmith Incident, The
Arrangement, the Fawthful Narrative Failure, the Pony Halo Concordant.
**Not once.** The Day Of record names fourteen people in and around that palace.
He is not among them.

### And the scene he describes had already been erased

The decisive find. When Toadsworth and Thornpaw force past a Guild operative
into the chambers, the record says:

> **The bedroom was clean. Too clean. Scrubbed recently. No body.**

The Guild moved her and cleaned the room **within hours**, and the archive is
explicit that they did not respond to the assassination — they were *positioned*
for it, with operatives in the vault during the killing.

So the tableau the Oracle describes existed only in the window between the
killing and the cleaners. The only people who could have seen it are **the
killer, the Guild, or someone in the palace before Toadsworth**. The Oracle
implicitly claims to be one of those three and never says which.

### Every element is recoverable without being there

- broken mages' locks → Guild involvement is the most documented fact in the file
- blood on the floor → Bloomia's bloody handprint on the hatch, recorded nowhere official
- dying guards → "guards dead at their posts" when Mario arrived, plus three
  witnesses liquidated over the following fortnight

**The comb is the only element with no source anywhere in the archive.** That
cuts both ways and the filing refuses to pick: it is either the detail only a
true witness would know, or the specific invented object a fabricated scene needs
to feel real.

### The contradiction is a tell, not a discrepancy

I previously called the guard problem "compression" and filed it generously. I
withdrew that — it was charity with no evidence behind it. *The guards came in,
they all died* is exactly how someone who read the casualty list afterwards would
summarise a fortnight of administrative murder they had not witnessed.

### The ruling

The Oracle's own dossier already said *"The Oracle is not lying… but provides it
on a schedule."* The commentary now amends that in public: **"not lying" was too
kind.** He has never been caught in a *falsifiable* lie, which is a different
claim and exactly what you would expect from someone careful.

Right about the checkable things, wrong about the one checkable thing here, and
unverifiable about the rest. **That is a source, not a witness.** And he chose
the moment, the audience, and an audience who could not check — immediately after
an hour spent establishing that Bowser would not swing at him.

## 3. How it was filed

`xref-the-room` was rewritten and split into two: the evidentiary check, and
`xref-the-ruling`. The `the-assassination` section now plants the doubt flag
*before* the reader gets comfortable, and the earlier "two independent sources"
framing was tempered, because it overstated what corroboration was available.

13 sections, 7,790 words (1.38× source). Waluigi/1k 20.2, CAPS/1k 27.3 — inside
every strict threshold.

## 4. Verification

* Every new factual claim checked verbatim against `highsun_1_955_bf_the_day_of`
  before writing — "The bedroom was clean", "Scrubbed recently", "No body",
  "The Guild was POSITIONED for it", "operatives in the vault during the
  killing", "guards dead at their posts", "bloody handprint", "Three guard
  witnesses alive on Day 1". All present.
* All 20 inline links resolve.
* `check-commentaries.py --strict` passes at 10 filed.
* `test-appearance-chronology.mjs` **62 passed, 0 failed**. One test failed
  correctly when the start time moved — it hardcoded a midnight term end. Fixed
  to *derive* the end from `startedOn` including its hour, so refining the start
  never falsely fails again, plus a new assertion that one day out reads exactly
  1440 minutes.
* `check-all.py` **59/61** — only the two known jsdom environment failures.

## 5. What is left

* **The real question is now open and worth a session:** if the Oracle was in
  that palace in 955, he is not a custodian who heard about it — he is a party to
  it. If he was not, he built a scene for a grieving man out of leaked material.
  The archive currently cannot distinguish these, and says so.
* The comb remains the one unsourced detail in either direction.
