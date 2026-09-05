# The Reclamation of the Library — run report

**Date:** 2026-09-05
**Branch:** `arena/01a069d5-bik`
**Model:** Arena.ai Agent Mode

## Purpose

File the session that follows
[`feyward_battalion_of_six_and_the_bait_plan`](https://mikegent01.github.io/bik/index.html#/article/feyward_battalion_of_six_and_the_bait_plan):
Hjumpik reads his own Waluipedia dossier, sees a shambling mound eating the
library, abandons the upstairs plan to take the room back, and the session ends
in an open doorway with Waluigi saying he can no longer afford not to care.

## Process followed

`docs/SESSION_FILING_PROCESS.md`, in order. The beat list came first
(`tools/scratch/beats-library-reclamation.md`, 68 beats), then locations,
characters, XP, and only then the prose.

### Step 1 — beat list
68 numbered beats, each marked new-canon or existing-canon.

### Step 2 — locations
Both amended, not created; neither was reformatted.

- `overgrown_library` — added **The Reclamation**. The library already had a
  sentient tree head librarian on record, which is what makes "not my library"
  land: the mound was eating a colleague's collection.
- `overgrown_manor` — added the mushroom room's real effect, the kitchen
  operation, and the shortcut door.

### Step 3 — characters
Three new records, all pure insertions.

| id | who |
|---|---|
| `the_veteran_fairy` | The bait fairy from last session — the one Hjumpik said reminded him of his grandfather. He survived and now volunteers for point. |
| `red_the_kitchen_commander` | The kitchen commander. Not defending the kitchen — using it. |
| `the_mushroom_room_guard` | Insists he is unaffected. Eyes bloodshot. "Field observations." |

**On Red.** You asked me to check whether she had been mentioned before. I
searched every data file for kitchen/chef/cook/commander references and for
`Red` as a standalone name. **She has no prior record.** The only prior kitchen
material is the *Kitchen Horror* timeline entry (23 Harvestide 1040 BF), where
Hjumpik saw the Revel being fed corpses — which is a different thing in the same
room. The `Red` hits in the archive are all *Red Hjumpik*, the mirror duplicate
from Raventree. So she is filed as new, and her record says plainly that Red is
a colour rather than a name and that the terrified description the guards gave
does not match the woman found cooking. Easy to amend when she gives a longer
name.

### Step 4 — XP
Six awards, written before the prose. `dateSort` 9220209, `toadlee` key per the
existing convention.

### Step 5 — the event
`feyward_library_reclamation_and_the_kitchen`, built by
`tools/scratch/build_library_event.py` — deterministic, stdlib, with the format
bands asserted in code:

```
sections   : 14   (guide 10-14)
body words : 4817 (guide 4,500-6,500)
unresolved participants: none
```

The generator refuses to write if a band fails or a participant does not
resolve. It caught one real bug on first run — see below.

### Steps 6–8
- **Battles:** `library_reclamation` and `the_bathroom_door_impostor`. The first
  records the overkill honestly: the mound was already most of the way dead.
- **Investigation:** session row 12 appended to `shadeward_feyward_ruined`.
- **Home feed:** `SITE_UPDATES` index 2. **Not index 0** —
  `check-home-feed.py` requires `SITE_UPDATES[0].id` to equal `mainPage.json`
  `latestUpdate.id`, which is still `the_scorncrow_skirmish`.

## Decisions worth flagging

**The heir is not a participant.** He is referred to throughout ("did orange guy
send you?") but is not in a single scene. My generator's check found that the
previous filing used a dangling `the_orange_heir` id that resolves to no
character record. I did not repeat it and did not invent a page to make the
reference valid — a mention is not a participant. **The dangling id in
`feyward_battalion_of_six_and_the_bait_plan` is still there and should be fixed
separately.**

**"Hjumpik Danger Deltor"** — per your ruling, played as an obvious bluff.
Canon surname Deldkur is used; Waluigi's aside certifies in writing that there
is no Danger on any document and asks whether the dwarf is funny on purpose.

**Barckelhaven** is recorded as a claim, not a place. The Veteran says he fought
wars there and that nobody died. The archive holds no other reference, so his
character record says the name is pending a second source. No invented history.

**Toad Lee's third missing-time instance** is flagged in the event, the aside,
the assessment, and the aftermath — tied back to Morel's anchor warning and "I
swung out of instinct."

**The corridor description** you supplied verbatim is used verbatim, and the
section built around it argues the thing it implies: the staff are still
polishing marble in a house being eaten.

## Verification

| check | result |
|---|---|
| `check-all.py` | **16/18** — `injury table` and `investigations` fail identically on a clean stash (verified) |
| `check-home-feed.py` | OK · `latestUpdate=the_scorncrow_skirmish` · events=113 |
| `index.html` JS parse | OK |
| all touched JSON | parse OK; encoding contracts respected |
| search quality | 38/38 |
| sanitizer | 92/92 |

Diffs are insert-only where they should be: characters `+49/-0`, events
`+249/-0`, battles `+91/-0`, investigations `+6/-0`, locations `+9/-4`.

Live render in jsdom: 27 headings, all 14 sections present, participants, XP and
investigate panels wired. Findable by search — `"barckelhaven"`, `"violet
fungus"`, `"red kitchen"` and `"veteran fairy"` all return the new records,
which is the search work from the previous session paying off.

## Second pass — images and exhibits

Both gaps from the first pass are now closed.

### Images (4 plates + 1 portrait)

Prompt sheet written and reviewed **before** any generation, per the guide's
step 1: `tools/scratch/library-reclamation-prompts.md`. Every "Must appear"
item is quoted from the prose above it.

| slot | file | cast |
|---|---|---|
| lead | `lib-01-mound-eating-books.jpg` | place plate — the room and the threat |
| §4 On Three | `lib-02-on-three.jpg` | Hjumpik + Waluigi + Toad Lee, from `portraits/` |
| §7 The Hallways | `lib-03-polished-hallway.jpg` | place plate, deliberately empty |
| §10 We're Here to Cook | `lib-04-red-kitchen.jpg` | Red + Hjumpik, from `portraits/` |

**All three party portraits were passed as references** to the ambush plate
(`hjumpik.png`, `waluigi.png`, `toad_lee.png`) — the guide forbids describing a
known character in words when a portrait exists. They came back on-model: the
wolf-pelt hood and red beard, the purple cap and yellow inverted-L, the
red-ringed cap and mushroom-boss shield.

**One portrait commissioned** (ladder rung 2): Red is central to this filing and
had no portrait, so `portraits/red_the_kitchen_commander.png` was generated
first, viewed, then used as the reference for the kitchen plate. Mirrored to
both `portraits/` and `Reputation-Matrix2/portraits/`, which are identical
trees. The Veteran stays a backlit silhouette (rung 3) — he is incidental in the
only slot he appears in, and inventing a face for him would be inventing canon.

Slot 3 is the one deliberate empty room. The section's whole argument is that
nobody is there and the marble is still polished, so people in frame would
contradict the point.

Every image was viewed with `read_file` before wiring. All are under 300 KB
(the lead needed a recompress from 303 KB → 281 KB; the portrait went 2.3 MB →
177 KB at 500×500 palette PNG, the house standard).

### Exhibits

Two documents, because the prose promised paper twice:

- **`prop_red_dinner_service_sheet`** — the kitchen's four-course running sheet.
  Three courses priced to the copper; the third, the one that goes to the
  overgrowth only, has **no cost entered**. Exhibit `ex_red_dinner_service`,
  DC 3, two inline insight rolls.
- **`prop_mushroom_guard_three_credentials`** — the three reasons, in the order
  he offered them. Exhibit `ex_mushroom_guard_credentials`, DC 4, two rolls.

Both wired into the prose with `[[prop:…]]` triggers and verified to resolve
through `getProp()` and render as `<a class="proplink">`.

**A new lead:** `lead_red_authorisation` — the dinner sheet is unsigned and
Red's first question was *did orange guy send you*, which is not the question of
someone acting under orders. Either the heir is keeping a kill order off paper,
or the manor's only working counter-attack is running without command knowing.

`props.json` was spliced **textually**, never re-serialised — it is the one file
in the archive with mixed encoding, and re-dumping it would rewrite the whole
file.

### A check caught me

My first draft of both exhibits failed `check-investigations.py`: `dc` was a
string, and the inline rolls had three pipe-separated fields instead of four.
Error count went 25 → 29. The correct shape is
`[[roll:DC|observation|what it proves|the counter-reading]]` — the fourth field
is the honest alternative explanation, which is the point of the system. Fixed,
and the count is back to the 25 pre-existing errors.

## Verification (second pass)

| check | result |
|---|---|
| `check-all.py` | **16/18** — unchanged, same two pre-existing failures |
| `check-investigations.py` | 25 errors — **identical to baseline**, none mine |
| `check-exhibits.py` | 0 errors, 0 warnings |
| `check-rolls.py` | 53 rolls / 24 targets, 0 errors |
| assets over HTTP | all 6 return 200 |
| live render | 4 images + 4 captions in the DOM; both prop links resolve to anchors |

**Note on the jsdom probe:** raw `[[prop:` tokens appear as literal text in the
harness. This is **pre-existing site-wide behaviour**, not caused by this
filing — an untouched article (`the_neighbor_incident`) shows 21 of them in the
same harness. The renderer itself is correct: `proplinkHtml()` returns a proper
anchor for both new props.

## Third pass — a canon correction, a portrait fix, and session navigation

### The correction (this one mattered)

The user flagged that **Waluigi opened the final door and Hjumpik tried to stop
him** — I had written it the other way round. Checking the transcript against
the filing, I had misattributed **six consecutive lines**. The speakers
alternate strictly through that argument and I lost the alternation halfway:

| transcript line | correct speaker | I had written |
|---|---|---|
| "thinking lead us so far… but if we dont act" | Waluigi | Hjumpik |
| "no no no we cant fight every battle" | **Hjumpik** | Waluigi |
| "i one shot that shrub almost 10 mineuts ago" | **Waluigi** | Hjumpik |
| "remember the goblins stabbed it and it died" | **Hjumpik** | Waluigi |
| "than if there that weak than we should take them on" | **Waluigi** | Hjumpik |
| **opens the door** | **Waluigi** | Hjumpik |

This inverted the meaning of the ending. In the real session **Hjumpik is the
one counselling restraint** — *we can't fight every battle* — and **Waluigi is
the one who escalates and forces the fight**, reaching past the dwarf's hand to
open the door. That is what makes *"Since when did you care?"* land: it is not
an idle question, it is a man asking why his cautious archivist just behaved
completely out of character. My version had Hjumpik doing the reckless thing,
which made the closing line a non-sequitur.

Rewritten: the section prose, its aside, the event `summary`, the `outcome`,
assessment points 1 and 6, three `notableFeatures`, and two XP award
descriptions. Waluigi now records the door in the active voice and owns it.

The bathroom-door references were checked and left alone — Hjumpik does knock
and open *that* door in the transcript. Different door.

### Hjumpik's likeness

The user said he looked like a random dwarf. Correct: comparing the plate to
`portraits/hjumpik.png`, the portrait is a younger human-proportioned man with
a **short trimmed dark-brown beard**, and my prompt had said *"stocky
red-bearded dwarf"* — I described him in words instead of letting the reference
lead, which is the exact failure the guide warns about. Fixed by **editing**
both affected plates rather than rerolling, preserving composition and lighting.
`lib-02` and `lib-04` now carry the right face. (One edit was blocked by
moderation on the first attempt and succeeded on a reworded retry.)

### Previous / next session navigation

New `sessionNavHtml()` / `sessionNeighbours()` in `index.html`, rendered under
Related Articles on any article filed into an investigation arc. Shows the arc
name, "session N of M", and prev/next cards with title and date.

**The interesting problem:** a big arc braids storylines together.
`shadeward_feyward_ruined` holds the Feyward manor thread, the Shadow Estate
storm chain and the Shadowfell ritual in one 12-row `sessions[]` array, so plain
array order sent a reader from a Feyward corridor to a different continent —
the library's "previous" was the Scorncrow Skirmish. The nav now prefers the
nearest neighbour **on the same storyline**, keyed off the leading segment of
`era`, and only falls back to raw arc order when a thread has no neighbour.

Two bugs found and fixed while building it:
- `DATA.investigations` is `{_README, investigations:[…]}` — the list is nested
  one level down. My first version assumed a bare array and threw.
- Dash characters are inconsistent across filings (`-` vs `—`), and
  `normalizeSearchText` does not strip unicode dashes, so two Feyward filings
  had non-matching thread keys. The comparison now normalises `\u2010-\u2015`,
  and this event's `era` was corrected to the archive's em-dash convention.

`tools/tests/test-session-nav.mjs` — **17 assertions**, wired into
`check-all.py`. It walks the whole Feyward chain in both directions, asserts the
library never links back to a Shadow Estate session, and checks the invariants
(no self-links, no links to missing events, null for non-session pages).

## Verification (third pass)

| check | result |
|---|---|
| `check-all.py` | **17/19** — same two pre-existing failures |
| session nav | 17/17 |
| search quality / live | 38/38 · 23/23 |
| faith / reputation / home feed | 40/40 · 25/25 · 11/11 |
| sanitizer | 92/92 |
| `check-investigations.py` | 25 errors — still the baseline |
| `index.html` JS parse | OK |

## Still not done

- **The dangling `the_orange_heir` id** in the previous filing is untouched.
- No RNN episode; the pending list is not yet at the ~10-event threshold.
