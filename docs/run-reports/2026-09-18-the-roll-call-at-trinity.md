# Run report — The Roll Call at Trinity

**Filed:** 5 Aethel, 1040 BF (in-world) · run dated 2026-09-18
**Branch:** `arena/01a0b2a2-bik`
**Purpose:** file the Kivotos intake session — a new campaign's first filing — as an
event, eleven characters, two locations, a commentary track, and art.

---

## 1. What was asked

File an event commentary and character files for a pasted transcript: a Blue
Archive / Kivotos session at Trinity General School, Classroom 2-B, covering roll
call through the Sectors 7–12 deployment briefing. Explicit instructions:

* **"you have to go over this"** — review and normalise the transcript, do not
  transcribe it raw.
* **Images may be generated in grids** rather than as individual plates.
* **Ignore the real-world date stamps** in the paste (Sept 15–17 2026); date the
  filing by the in-world chaining rule.

This sat ahead of two standing gaps the user had already queued (Scorncrow status —
now closed — and the two filings that belong to no investigation).

## 2. What was done

**Registered a new campaign clock.** Kivotos had no timecode suffix. Without one, a
Kivotos filing's `timeCode` would have fallen through to `MAT` and hijacked the
Mario campaign front. Added `KIV` to `tools/check-timecodes.py` (`CLOCKS` +
`CODE_RE`) and `tools/build-campaign-fronts.py` (suffix→campaign map). Both are
hand-maintained source, not generated files. KIV validates against the Regal
calendar like MAT, because Kivotos keeps imperial months and years — established by
Remi Akamatsu's birth date already in the archive.

**Locations (2).** `trinity_general_school`, `kivotos`. Full schema including
`plane`/`planeConfidence`/`planeClue`. Clean append, 57 insertions, no reformat.

**Characters (11).** `sensei`, `kurimura_airi`, `iochi_mari`, `misono_mika`,
`shirasu_azusa`, `ibaragi_yoshimi`, `asagao_hanae`, `kenzaki_tsurugi`, `asa_hanko`,
`lord_verity`, `shaggy`. All eleven were new — a grep confirmed zero prior matches
for any of them.

**Event.** `the_roll_call_at_trinity`, `TC:1040-09-05T09:00/KIV`, six sections,
eleven participants, eleven XP awards.

**Commentary.** `the_roll_call_at_trinity_commentary`, eight sections, 5,993 words
(1.05× source). Passes `check-commentaries.py --strict`.

**Art — generated as grids, per instruction.** Two sheets, not fifteen plates:
a 2×2 scene sheet sliced to four event images, and a 3×4 portrait sheet sliced to
eleven portraits. Prompt sheet written to `/tmp/trinity-roll-call-prompts.md` first;
both sheets eyeballed before slicing.

**Front page.** `build-campaign-fronts.py --write` produced a fourth cover slot —
Kivotos — leaving Shadeward, Mario and Feyward untouched. `latestUpdate` and the
head of `SITE_UPDATES` moved to the new filing.

**WAHwire.** Post `order: 77`. Minted a new reaction, `unanswered`, rather than
flattening to `deadpan`; added a `sensei` profile.

## 3. Two checker failures fixed (neither was mine to ignore)

`check-all.py` went from 53/57 to 55/57. Two genuine failures surfaced:

* **`track-filing-updates.py`** — ledger was behind the data. Ran `--write`; now
  pass 3, 121 filings.
* **`build-judgement-in-the-grove.py --check`** — this one is a real bug and worth
  flagging. The grove generator asserted that *it* owns `mainPage.latestUpdate`,
  `featuredArticle` and the head of `SITE_UPDATES`. Those assertions were true the
  day it was written and become false the moment anything is filed after it — so
  the generator was guaranteed to fail on the next session, whatever that session
  was. Made the three front-page assertions conditional on the grove still being
  the newest event, and kept the campaign-cover assertion unconditional, because
  the Shadeward front *does* stay the grove's until another Shadeward session
  replaces it. Edited the generator, not its output.

## 4. Verification

| check | result |
|---|---|
| `check-all.py` | 55/57 — only `alliance cache` / `map lenses` fail |
| `check-timecodes.py` | PASS · 11/190 coded · KIV recognised |
| `check-commentaries.py --strict` | PASS · Waluigi/1k 18.2 · CAPS/1k 27.2 · WAH 4 · 1.05× |
| `check-references.py` | PASS (408 pre-existing legacy warnings) |
| `check-event-art.py` | 121/121 filings illustrated |
| `check-home-feed.py` | OK · latestUpdate = `the_roll_call_at_trinity` |
| `build-campaign-fronts.py --check` | 4 fronts, one per campaign, all current |
| `build-judgement-in-the-grove.py --check` | PASS (after fix) |
| `track-filing-updates.py --check` | PASS · pass 3 · 121 tracked |
| `check-readability.py` | nothing flagged |
| HTTP spot-check on :8765 | all 5 data files + 4 scene plates + 11 portraits → 200 |

`alliance cache` and `map lenses` fail on `ERR_MODULE_NOT_FOUND: jsdom`, which is
not installed in this sandbox. They failed identically before this run. Not repo
breakage, and `tools/tests/test-home-feed-render.mjs` could not be run for the same
reason — substituted the HTTP spot-check above.

## 5. XP awarded

| character | cat | xp | for |
|---|---|---|---|
| Asa Hanko | discovery | 260 | Asked what SCHALE was and would not let it pass |
| Asa Hanko | social | 180 | Drew the admission on the Equestrian liaison breach |
| Iochi Mari | social | 300 | Restored order that had ignored two rounds of shouting |
| Kenzaki Tsurugi | loyalty | 240 | Argued against arming the class; demanded the plan |
| Asagao Hanae | discovery | 220 | Cross-referenced the briefing, found documentation gaps |
| Shirasu Azusa | discovery | 200 | Caught the need-to-know contradiction |
| Kurimura Airi | social | 200 | Crossed the room twice to the two students left alone |
| Shaggy | social | 160 | Disclosed that nobody had ever explained SCHALE |
| Ibaragi Yoshimi | discovery | 140 | The only student who had read the pamphlet |
| Lord Verity | social | 140 | Stood down; asked who SCHALE actually covers |
| Misono Mika | social | 120 | Took the front of the room and held it |
| | **total** | **2,160** | |

## 6. Guesses, flagged

* **The date.** Per instruction the paste timestamps were ignored. The world clock
  reads 5 Aethel 1040 BF and nothing in the transcript places the session before or
  after it, so it is filed *at* the clock rather than chained back. If the session
  is meant to sit earlier, only `timeCode`, `date` and `timeWindow` need moving.
* **`KIV` is not in `calendarMeta.json` `pocketClocks[]`.** Kivotos has its own
  registered calendar (`kivotos_academic`), so it reads as a calendar-bearing realm
  rather than a pocket clock. Left out deliberately; say the word and it goes in.
* **Shaggy.** Enrolled at Trinity, no halo, no explanation of how he got to Kivotos.
  Recorded as observed rather than reconciled.
* **Portrait style.** Kivotos is rendered as bright anime cel art matching
  `portraits/remi.jpg`, not the grimy register used for the Mushroom cast, because
  portrait style in this archive is per-character and Remi is the Kivotan anchor.
* **Unnamed by design.** The previous advisor of Classroom 2-B is referenced only as
  having "mysteriously disappeared" — left unnamed, as the record leaves it.
* Rule zero observed: no table, player or Discord names entered in-world prose.

## 7. Left open, deliberately

Three threads are recorded in the filing as open rather than resolved: what happened
to the previous advisor; the Equestrian liaison breach, under internal query with no
stated deadline; and the two questions asked aloud and not answered — whether SCHALE
does anything for students classified supplementary, and whether any of it amounts
to purpose. The advisor's one-line characterisation of the Resistance is filed as
*his characterisation*, attributed and dated, not as a finding.

**Not done, next in the queue:** the investigation gap — `judgement_in_the_grove`
and `the_tape_and_the_wario_files` still belong to no investigation file, so neither
page can offer *Investigate this further*. That was the user's step 2 and is
untouched by this run.

---

# Addendum — second pass (same day)

User feedback after review: the art was too anime and too dark/gritty in the
wrong way, reference images were supplied for the cast, the crops were bad, and
`portraits/mossy_toad.png` was the wrong character. Plus: file the investigations
and analyses for the other pages.

## 1. Art regenerated in the house style

The first sheets were bright anime cel art. Wrong register — the archive's own
house style is the gritty inked comic look of `portraits/wario.jpg`. Both sheets
were regenerated as inked comic illustration: heavy linework, cross-hatching,
muted desaturated palette, grainy paper, semi-realistic proportions.

Likenesses were corrected against the supplied references. Several were badly
wrong in v1: Mari is a fox-eared redhead (was dark-haired), Yoshimi is blonde
with twin-tails (was dark-haired), Azusa is silver-haired and winged (was
dark-haired), Hanae is a purple-haired nurse (was a bespectacled schoolgirl),
Sensei is a young manga type, and **Lord Verity has a yellow smiley-face head**,
not a human one. All eleven were re-cut from the new sheet.

## 2. The crop bug, fixed properly

The v1 slicer used a fixed 8px inset against evenly divided cells. The generated
sheets do not have perfectly even cells, so several portraits carried a slice of
the neighbouring cell — `kenzaki_tsurugi.png` had a strip of the cell above it.

Fix: detect the real gutters instead of assuming them. `/tmp/grid2.py` computes a
per-column and per-row **maximum** brightness profile (a true gutter is dark
across its entire length, whereas a mean profile is fooled by dark artwork) and
reports exact gutter spans. Cells are then cut between measured boundaries. Every
crop was re-checked by eye afterwards.

## 3. Mossy

`portraits/mossy_toad.png` showed a mushroom fairy. Mossy is a **Mages' Guild
steel-defender construct** that "clamps mechanical jaws onto giant spider legs".
Regenerated as an armoured quadruped construct with moss in its plate seams,
saved as `portraits/mossy.png`; the character record was repointed and the wrong
file deleted.

## 4. Investigations — the standing gap, closed

| filing | investigation | added |
|---|---|---|
| `judgement_in_the_grove` | `shadeward_feyward_ruined` (existing arc) | session, 2 exhibits, thread, critical lead |
| `the_tape_and_the_wario_files` | `mario_charred_note_file` (existing arc) | session, 1 exhibit, thread, lead |
| `the_roll_call_at_trinity` | **`trinity_schale_file`** (new) | 4 threads, 4 leads, 3 exhibits |

Standing gap #2 is now closed: all three filings can show *Investigate this
further*. Six new props back the exhibits; `props.json` was edited by surgical
string insertion since it does not round-trip.

## 5. Article analyses

Three new, all 20/80 and embodied at the desk per `docs/ARTICLE_ANALYSES.md`:

* `the_roll_call_at_trinity_waluigi_analysis` — 7 sections
* `judgement_in_the_grove_waluigi_analysis` — 5 sections
* `the_tape_and_the_wario_files_provenance_analysis` — 5 sections

The grove analysis argues the kill was defensible *and* the timing catastrophic,
and does not let those two findings collapse into each other. The tape analysis
deliberately does **not** reopen the existing line-by-line reading — it firewalls
it — and instead files the provenance gap nobody had asked about.

## 6. Verification (second pass)

`check-all.py` **55/57**, unchanged — still only the two jsdom failures.
`check-investigations.py`: **0 errors** (18 files, 101 exhibits, 315 insight
rolls); the 7 warnings all pre-date this work. `check-exhibits.py`: **0 errors**,
154 props. HTTP spot-check: all 12 portraits, 4 scene plates and 5 data files
200; the deleted `mossy_toad.png` correctly 404s.

## 7. Notes

* The reference images were visible in conversation but not written to the
  sandbox, so they could not be passed as generation references. Likenesses were
  transcribed into detailed prompt descriptions instead — worth re-checking by eye.
* "Add a new front" was confirmed as the Kivotos front already added in pass one;
  its cover art is now the re-cut classroom plate.
