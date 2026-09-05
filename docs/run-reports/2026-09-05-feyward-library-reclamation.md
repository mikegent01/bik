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

## Not done

- **No images.** The image guide wants substantial new articles to ship with
  art. This filing has none yet; the obvious plates are the book-eating mound in
  the library, the polished lantern-lit corridor, and Red's kitchen.
- **No exhibit props.** Nothing in the prose promises a document the reader
  should be able to open — closest is the violet fungus, which is an object
  rather than paper.
- **The dangling `the_orange_heir` id** in the previous filing is untouched.
