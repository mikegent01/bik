# Run report — Mount Ebott becomes its own arc; the registry expands; analyses, investigation and comments

**Filed:** run dated 2026-09-19
**Branch:** `arena/01a0b2a2-bik`

---

## 1. The arc was wrong, and it was my error

I filed the Bone-Line Registry as `TC:1045-08-30/MAT`. **`MAT` maps to the
Mario campaign** in `build-campaign-fronts.py`, so Snowdin took the Mario front
and evicted *The Tape and the Wario Files*. The four genuine `MAT` events are
all Mario/Luigi 1035 investigations; Ebott has nothing to do with them.

You were right that it wants a new arc. **`EBO` — Mount Ebott / Monster
Underground** is now registered in all three places a clock must exist:

* `tools/check-timecodes.py` (validator + clock table)
* `tools/build-campaign-fronts.py` (campaign label)
* `index.html` (parse regex + `TC_CLOCKS`)

Registering in fewer than three is the KIV bug from earlier in this PR, where a
clock validated fine but rendered nothing. There is now a test asserting all
three for every clock.

Current fronts read **Mount Ebott · Feyward · Kivotos · Shadeward · Mario** —
five campaigns, Mario restored. `laterDated` was dropped: it existed only
because a Material filing was being measured against the 1040 world clock, and
`EBO` is its own arc clock running ~1045.

The README clock table gained a Mount Ebott row stating plainly that it is not
the Mario campaign and must never be filed as `MAT`.

## 2. The article was short because I had the short transcript

The fuller transcript carries a lot the first pass never saw. Expanded
**1,329 → 2,543 words**, 24 → 39 notable features. What is new:

* **The parents.** Sans volunteers that mom and dad are "not around anymore,"
  and that Toriel raised him "after everything happened with dad."
* **The full denial run** — Garbage Brother, Will, Quantity, Pretty Soon,
  Cursive, Helvetica, Baby Bones, Grandpa Semi, each rejected in turn.
* **Bonefull vs Boneless.** Shown the double-L spelling he concedes it is
  "actually not terrible" and almost majestic — the only thing on the document
  he likes.
* **Lazy Bones circled in red**, conceded with the taxes anecdote.
* **Pet Rock as "little buddy"** — Toriel watered it, Asgore tried magic on it.
* **An entire sequence I had missed:** wing dings on screen with chimes; the
  power cutting; *"dark... darker... yet darker..."* arriving not through the
  speakers; two silhouettes with the second blurred; and **the rewind** — the
  same footage replayed with the lights on, the blurred figure gone and Gee Lady
  standing in its place. Nobody explained it. That is the best question in the
  filing.
* **The gallery** — Cursive's cane, the unnamed robed figure Sans reads as
  "quiet powerful," the floating eyeball he was posed beside.
* **The pun log** — title card, entry #472, "no permission required, this is an
  archival initiative," and "affirmative" as a reunion.

## 3. Analyses (one thesis each, per the guide)

**`snowdin_bone_line_registry_authorship_analysis`** — *who authors a family.*
Argues from entry #472 that Times New Roman's method is indistinguishable from
mine, and that the only difference is effect: my records do not summon anybody.
Ends by conceding I have declined to run the experiment that would settle it.

**`shepherds_garden_disclosure_analysis`** — *the timing was the deliverable.*
Argues the four escalating probes were a fitness check on an **audience**, not a
character test: will he swing, will he leave, can he verify. No, no, no — and
the assassination account followed within minutes.

## 4. Investigation

Folded into `shadeward_feyward_ruined` (the Feywild/Raventree file), not a new
one: session row, a DC-5 exhibit for the Oracle's account with roll and
analysis, two threads, three leads. The exhibit is filed **uncorroborated**, and
the highest lead is warning the Feyward party that the route out has a
twenty-one-day timer none of them know about.

## 5. Comments

Four threads, all multi-voice:

* Papyrus discovering he is **#TNR-02** — "you just told my brother he's number
  two. in writing. with a footnote."
* Cursive and Gee Lady reframing the registry as a **correspondence list** and a
  **guest list** — "the only census I have ever kept, and it has never once been
  wrong about who was missing."
* Toadsworth and Thornpaw disagreeing about the Oracle's standing, with Thornpaw
  conceding the room was clean before either of them reached it.
* **Toadette Sr. to Bowser on the cages** — "I printed five hundred and seventy-
  five pamphlets in one night with a baby on the way. Do not talk to me about
  ORDER."

## 6. Verification

* `check-all.py` **59/61** — only the two known jsdom environment failures.
* `test-appearance-chronology.mjs` **76 passed, 0 failed**, including eight new
  arc-clock assertions.
* `check-investigations.py` 0 errors. It caught a real mistake: exhibit `visual`
  is **inline-styles-only** — the inverse of prop `body`, which is
  classes-only. Converted.
* All 19 event links, both analyses, and every `relatedArticles` resolve.
* Annotation variety passes at 103 passages.

## 7. What is left

* **No commentary track** for the registry yet.
* **Papyrus has still never been interviewed**, and is the subject of both
  verified quotations.
* The rewind — same footage, different occupant — has no explanation anywhere in
  the archive.
