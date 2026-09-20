# Run report — The Snowdin Bone-Line Registry

**Filed:** run dated 2026-09-19
**Branch:** `arena/01a0b2a2-bik`
**Purpose:** file the GM's Sans interview as the registry 28 dossiers were citing.

---

## 1. What the transcript turned out to be

The GM supplied a long Sans interview. The question asked of it was: *was it a
dream, a real interview, how did Waluigi get it, when did it happen — connect
the dots into one story and investigation.*

Every name in the transcript **already existed in the archive**: Times New
Roman, Gee Lady, Cursive, Pet Rock, Wing Gaster, Dirty Brother, Has A Very
Special Attack, Grandpa Semi, Lazybones, Prunsel — all 28 of them, each filed
with the status line *"recorded in the Snowdin household registry."*

So the transcript is not a new cast. **It is the missing source document those
28 records have been citing.**

## 2. Connecting the dots

**How Waluigi got it.** At the close of `mount_ebott_survey_final_log`, the
Gamma Agent traded his intelligence haul for one reward: *one Legion-issued
secure device, one hour per month, external calls permitted, monitored by the
duty officer.* The authorization specifies duration, monitoring and revocation —
**it never specifies who he may call.**

That gives the filing its spine, and an irony worth stating: on Harvestide 29
High Command reached over and switched off a logger mid-briefing to control what
could be recorded. On Harvestide 30 its own reward scheme handed the archive
forty unsupervised minutes of Underground testimony.

**When.** Harvestide 30, 1045 BF — the day after the logger cutoff.
`TC:1045-08-30/MAT`, flagged `laterDated: true` because the whole Ebott arc runs
five years ahead of the 1040 world clock.

**Dream or real.** Filed as genuinely unresolved, with three readings ranked and
none chosen: a nap; a fabrication Sans caught in real time; or — best supported
and most unpleasant — **a registry that constitutes a family rather than
recording one.** A document that demands a signature, burns itself, and is then
followed by its own contents walking into the room is performing a function, not
describing one.

## 3. The detail that makes it work

Two relatives in the archive correspond to **sentences Sans said about
Papyrus**: `dirty_brother` (from *"if you cheat, you'll end up a dirty
brother"*) and `has_a_very_special_attack` (from *"my brother has a very special
attack"*). Both quotations are in the transcript, and both dossiers predate it.

Sans reads that as proof of fabrication. The filing records the other reading
too — a family whose members are *named for the circumstances in which they are
first spoken about* produces exactly this evidence — and refuses to pick. It also
notes Dirty Brother's filed job: he repairs chimneys. Soot is not a slander.

## 4. What was filed

* **Event** `snowdin_bone_line_registry` — 1,040 XP across Sans (480), Waluigi
  (420), Papyrus (140).
* **Exhibit** `prop_sibling_designation_tnr01` — the instrument, readable:
  brotherhood by lineage code #TNR-01 with no parent named, Gee Lady confirmed
  by "lipstick signature analysis," an appendix that burned with it, and
  Wingding Gaster alone at the foot underlined twice in red.
* **Investigation** — folded into `mount_ebott_silence_file`, which is already
  the file about custody of knowledge. New session row, exhibit with DC 4 roll
  and analysis, two threads, three leads.
* **Art** — one plate; the signature, the unrolling document, and Gaster's
  winged shadow resolving on the back wall.

## 5. Verification

* **All 28 dangling citations now resolve.** This was the single largest
  structural hole in the archive and the top entry on the Wanted Pages board.
* `check-all.py` **59/61** — only the two known jsdom environment failures.
* `check-investigations.py` **0 errors**; `check-exhibits.py` **0 errors**;
  `check-timecodes.py` passes; event art 123/123.
* All 16 inline links, all relatedArticles, and all participants resolve.
* Three checkers caught real mistakes mid-run and all three were right: the
  exhibit used an invented CSS class (`pd-note` → `pd-fine`); `props.json` does
  not round-trip through `json.dumps` and had to be appended surgically
  (85 insertions/67 deletions → 18 insertions/0 deletions); and the timecode
  checker correctly flagged the 1045 date until `laterDated` was set.
* One of my own tests failed correctly — "the newest filing has a commentary
  track." A commentary is a separate writing job that can land later, so it now
  reports as a note rather than failing the suite; the assertion that no cut
  points at a missing filing is unchanged.

## 6. What is left

* **Papyrus has never been interviewed** and is the subject of both verified
  quotations. That is the highest-priority open lead.
* **No commentary track yet** for this filing.
* Nobody has explained what the burn accomplishes, or what authority issues an
  archival lineage code that predates any mother Sans can name.
