# Run report — cross-referencing the commentary against the archive

**Filed:** run dated 2026-09-19
**Branch:** `arena/01a0b2a2-bik`
**Purpose:** read other articles, cross-reference them into the Shepherd's
Garden commentary, and label what turns up.

---

## What this found

I went through the archive line by line against each thread in the session.
Three findings were large enough to get their own labelled sections, and one of
them genuinely reorganises the file.

### 1. Mystic Morel was at the print shop in 955 BF

The Toad who appears behind Bowser in the cellar — Purple T — is recorded in
[`highsun_1_955_bf_the_day_of`] as the purple toad who passed Toadsworth and
Thornpaw in the doorway of the print shop **as the 575 Fawful pamphlets were
being run off**. That is the first and only account of the assassination that
existed before the Bowser Narrative replaced it and every copy was destroyed.

Waluigi's own note in that filing: *"Waluigi is not going to leave this detail
ambiguous. The purple toad was Mystic Morel."*

The same being turns up 85 years later in a Feyward cellar with a bowl of blood
he declines to explain. That is now labelled as what it is.

### 2. The Oracle's assassination account — two corroborations, one contradiction, one new fact

Checked claim by claim against the Day Of record:

| Claim | Status |
|---|---|
| She knew / wanted to die | **Corroborated.** The record already says Peach *"chose this death and left evidence for others to find"* — filed long before this session, from a different direction |
| The room was untouched | **Corroborated.** The record says the body was moved within hours and the room *scrubbed*, Guild-processed before investigators arrived |
| A comb in her hand | **New.** The comb appears nowhere else in the archive. Notable beside the standing question of how Fawful got a strand of her hair as a biometric vault key |
| The responding guards all died | **Contradicted.** The record says three guard witnesses were alive on Day 1 — two dead within two weeks, one vanished. Removals over days, not deaths in the room |

The contradiction is flagged rather than smoothed.

### 3. The Oracle warns and then lets it happen — three prior instances

*I warned her* is his documented operating procedure, not a new posture. From his
own dossier: he warned the party about time dilation (ignored), warned that the
ritual mirror would interrogate their truths, and warned Archie he was absorbing
too much power **and then allowed the ritual to proceed** — which the archive
already filed as a suspected controlled experiment.

### 4. The satyr's "secret" is the party's own intelligence

Bowser pays two hands of cards for news that the Orange Heir is raising
tree-cutters. Hjumpik stood at that heir's table-sized tactical map — pins for
the **sixth and seventh divisions**, barrel tallies in the margin — several
sessions ago. The tree-cutters formed during the Revel Crisis, where the filed
assessment was that the overgrowth outpaces the cutting.

Also caught: the stairwell statue reads **ARULEAN'S FIRST KNIGHT**. Arulean is
Lady Aurelian Corvinarus, whose manor this is. Bowser made a joke about interior
decorating and walked past it.

### 5. Trafficking was already circling the file

The word appears in the Wario Method interview, the Disaster Inc. naming dispute,
Archie's Frog God dream and the Glazed Congress founding. What the goblin adds is
the *mechanism*. That makes the walk-away worse, not better — Bowser recognised
something the archive had been chasing and shut the door anyway.

## How it was filed

Three new sections, explicitly headed **CROSS-REFERENCE**, placed directly after
the scenes they bear on: `xref-the-room`, `xref-print-shop`, `xref-upstairs`.
Shorter callbacks were woven into the existing `the-test` and `the-cages`
sections. Every claim carries an inline link to the filing it came from.

Commentary grew 9 sections / 5,323 words → **12 sections / 7,318 words**
(1.30× the source), still inside every strict threshold: Waluigi/1k 19.3,
CAPS/1k 26.4, sections 399–899w. `relatedArticles` went 11 → 23.

## Verification

* **Every factual claim was verified against the source record before writing** —
  18 string checks against `events.json` and the Oracle's dossier, all present.
  No invented facts; this is a voice change, not a licence to embellish.
* All **18 inline links resolve**, and all 23 `relatedArticles`.
* New test: *every cross-reference in every commentary resolves*. It immediately
  flagged `spider_grove_battle` in an older cut — which turned out to be a real
  battle record my test wasn't loading, so I fixed the **test**, not the data.
* `check-commentaries.py --strict` passes at 10 filed.
* `test-appearance-chronology.mjs` **61 passed, 0 failed**.
* `check-all.py` **59/61** — only the two known jsdom environment failures.

## What is left

* **The guard discrepancy needs a ruling.** Did the responding guards die in the
  room (Oracle) or get removed over the following fortnight (archive)? Both
  cannot be true, and it is the kind of thing a later session could settle.
* **The comb and the hair.** The archive has never answered who told Fawful that
  a strand of Peach's hair would open the Royal Vaults. A comb in her hand at the
  moment of death is suggestive and is filed as suggestive, not asserted.
* The other nine commentaries have **no cross-reference passes**. This technique
  would pay off most on the Telescope and Judgement cuts.
