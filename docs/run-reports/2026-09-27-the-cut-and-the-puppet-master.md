# Run report — CUT!: The Cut and the Puppet Master

**Filed:** run dated 2026-09-27
**Branch:** `arena/01a0e111-bik`

---

## 1. The filing

`the_cut_and_the_puppet_master` — `TC:1040-09-05/MAT`, continuing
[the promo account](2026-09-27-you-said-leave-no-one-behind.md)'s world without
a break (same day, same night, same two humans). 2,837 words of description,
3,792 story words total, 30 notable features, 8 participants. No faction standing moved — the studio
is not a faction, its paratroopas take no orders the archive can bill, and
the only institution on the stage answers to a man the archive met four
paragraphs from the end; the reason is recorded in `reputationNotes`,
mirroring the promo filing. **XP was awarded later by editor's ruling**
(1,040 across the two protagonists — see the event's `xpAwards[]`): the
filing originally paid nothing on the foreign-nobility precedent, and the
editor overruled it.

## 2. What the session was

The transcript's spine: Darian presses an **EMERGENCY EXIT button that makes
coffee**; the scalding steam pops a ceiling vent open — the exit was the
appliance's fault; armed with a rolling pin and a broken coffee-pot handle,
the lord and his steward climb; in the ducts, a rat, one catastrophic rolling
pin clang, and Alistair's whisper (*careful — noise might draw attention*);
under a blue light, **Luigi — alive, alone**, running security feeds and notes
headed *Wario's corruption*; Darian's rolling-pin ambush is stopped by
Alistair's hand and answered with a flashlight; Evil Mario comes through the
door off its hinges and is put through a computer desk by a lord shouting
**"A king cannot let his subjects fall!"**; the pixelated feather cape is the
power source; the floor collapses into a **paratroopa rescue squad** that
flies the party *at* the actor while the studio plays **Plumber Man** — the
real Mario's own song — and the copy fights to the beat; at the final note
the real Mario appears; a gust hurls Alistair down a hallway; **a king orders
a V formation** and Luigi yanks the cape off in the dive; a tanuki leaf, a
second Wario head, and Alistair's return through a window with a flaming pipe
("really stupid," says his lord, accurately); fire, a belly-crawl fire alarm,
sprinklers, ice — *"this must be all an act"* — the ice smirks; **Darian says
CUT and the building obeys**; curtains, reset break room; Wario walks in to
applause from an **empty house**; behind everyone, **Director Mario** — Wario
calls him Boss and goes through a wall for ruining his show; Evil Mario points
at the Director's exit; and in a dark hallway Darian, hidden in an alcove,
watches the Director pass carrying **a folder and a small wired remote**.

## 3. The judgement calls

**The word is filed as a production command, not a spell.** CUT works because
the studio is a stage that cannot bear to be told the take is over. The event
re-shelves the question accordingly: not "how do you beat Evil Mario" but
"who is afraid of the word CUT, and why."

**The arc's main-canon characters stay untouched.** Mario, Luigi, Wario and
Waluigi are participants, but their dossiers were not amended and no keyEvents
were added — the studio arc is filed as contested evidence inside the Mario
disappearance file (the promo filing set this precedent), and the main
dossiers still say what they said before. Growth lands on the four new
dossiers (Darian, Alistair, Evil Mario, Director Mario), each created with
`keyEvents: [the_cut_and_the_puppet_master]`.

**The remote is filed as an object, not a theory.** The investigation gets a
critical lead (`lead_get_the_remote`), a thread for the Director, a thread for
the device itself, and the assessment is explicit: if it runs Evil Mario it
explains the costume rack; if it runs the studio it explains the applause.
Either way the case finally has something to hunt.

**Luigi's notes are filed as an exhibit, not a recovered prop.** The best
evidence in the case was read over a man's shoulder through a ceiling vent;
nobody has it. The prop is stamped `noaction` (the styled stamp closest to
"unrecovered" — the stylesheet has no such rule), with a lead open to go back
for it.

**The censored quote stays censored.** The Director's cigar-snap line is
reproduced exactly as the account gives it, asterisks included. The archive
is a family establishment with a walrus-grade filing system.

## 4. Also filed

* **Commentary track** — `the_cut_and_the_puppet_master_commentary`: 12
  sections, 5,612 words (1.48× the 3,792-word source), Waluigi/1k 19.1,
  CAPS/1k 33.9, 5 WAHs, sections 376–599 words. Passes
  `check-commentaries.py --strict`. The prior promo commentary's teaser
  mistake is carried forward as a running apology.
* **Art — six plates, all generated from portrait bases per the user's
  instruction** (the first from-scratch attempt at the lead plate was deleted
  and regenerated): `pmc-01-cut.jpg` (event lead + Darian dossier; bases:
  mario, koopa_paratrooper), `pmc-02-steam-vent.jpg` (Alistair; chained off
  pmc-01 for the humans' designs), `pmc-03-luigi-monitors.jpg` (location;
  base: luigi), `pmc-04-cape-yank.jpg` (Evil Mario; bases: mario, luigi,
  koopa_paratrooper), `pmc-05-director.jpg` (Director Mario; bases: mario +
  pmc-01), `pmc-06-empty-house.jpg` (gallery-only; bases: wario, mario).
  Darian and Alistair have no portraits — their look is chained through the
  lead plate, which is itself anchored on the canon portraits. **Caveat:** no
  vision available in this environment; the plates should be eyeballed before
  republishing. The event gallery carries five plates ({src, alt, caption}).
* **Investigation** — `mario_charred_note_file`: session row `s_studio_cut`,
  threads `th_the_director` / `th_the_remote`, leads `lead_get_the_remote`
  (critical), `lead_director_who_for`, `lead_luigi_notes`,
  `lead_evil_marios_point`; exhibit `ex_luigi_studio_notes` (dc 4, roll-4
  link, analysis); prop `prop_luigi_studio_notes`.
* **New records** — characters `lord_darian_marsh`, `alistair_marshkeeper`,
  `evil_mario`, `director_mario`; location `nintendo_mania_studio`; song
  `song_plumber_man` (lyrics verbatim, 24 songs); `promo_mario_newspaper`
  status amended to point at the sequel.
* **Wire** — two native posts (orders 207–208): Darian's first WAHwire post
  ("There is a man here with a remote. We are going to get it.") and
  Waluigi's third filing of the day; comments from waluigi, alistair, luigi
  and darian. Two new wire profiles (`lord_darian_marsh`,
  `alistair_marshkeeper`, both status `filed`) so the new voices link back.
* **Systems** — front page (`latestUpdate`), campaign fronts (Mario front →
  this filing), `SITE_UPDATES`, RNN pending list (7 pending; threshold 10 —
  no episode owed), `filing-updates.json` ledger **pass 14**.

## 5. Cross-system triggers reviewed

| Trigger | Result |
|---|---|
| Dossier assessments | Reviewed, deliberately unchanged — no faction standing exists to move inside the studio arc |
| XP ledger | No award — consistent with the promo filing (the humans are foreign nobility, not party members) |
| WAHwire | Two posts (every filing posts) |
| RNN pending list | Appended (7 pending; threshold 10 — no episode owed) |
| Pond Patrol / Regal Diet / Legion politics | No trigger — no docket roster member, no law, vote, or mandate |
| Dynasty, maps, currencies, Bros, books | No trigger; one song filed (`song_plumber_man`) with lyrics as sung |

## 6. Verification

* `check-event-art.py --check` **128/128, 0 broken paths** ·
  `check-home-feed.py` OK (latestUpdate = last-appended = this filing) ·
  `build-campaign-fronts.py --check` 5 fronts current ·
  `check-duplicates.py` 0 issues · `check-investigations.py` 0 errors
  (8 pre-existing warnings) · `check-rolls.py` 0 errors ·
  `check-exhibits.py` 0 errors · `check-timecodes.py` PASS (world clock
  unchanged at 5 Aethel, 1040 BF — same-day continuation) ·
  `check-commentaries.py --strict` PASS (14 filed) ·
  `audit-wahwire.py` advisory only, no new illegal tones (the one 'anger'
  reaction is pre-existing) · `node --check` on songs-data.js OK ·
  local-agent unittests **42/42**.
* `check-all.py`: 4 failures (judgement in the grove, alliance cache, map
  lenses, appearance chronology) — **verified pre-existing on clean HEAD
  `70fa98a`** via a scratch worktree; not caused by this filing.
* Every prose link, participant, relatedArticle, gallery src, commentary
  relatedArticle, and wire link target resolves.

## 7. What is left

* **The plates have not been eyeballed** (no vision in this environment) —
  all six were generated from the portrait bases at
  `Reputation-Matrix2/portraits/`, so the canon cast should be on-model, but
  a human should confirm before republishing.
* **Open leads:** the remote (critical); who Director Mario answers to; the
  folder's contents; whether the paratroopas take orders from the remote or
  the Director; what Evil Mario wants; Luigi's notes still on a terminal in a
  self-resetting building.
* **Continuity for the next session:** same day, `currentDate` stays
  1040-09-05; the Director does not know the remote was seen; Wario is
  unconscious; the applause track is still playing to nobody.
