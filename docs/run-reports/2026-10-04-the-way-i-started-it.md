# Run report — The Way I Started It

**Filed:** run dated 2026-10-04
**Branch:** `arena/01a0feea-bik`

---

## 1. The filing

`the_way_i_started_it` — `TC:1040-09-01T02:00/SHD`, straight on from
[you said leave no one behind](2026-09-27-you-said-leave-no-one-behind.md).
1,772 words, 24 notable features, 8 participants, **1,460 XP** across five
recipients, one battle record (`the_grove_floor_battle`), one injury assigned.
Filed in the mandated order: beat list → locations (`skittering_grove`
amended) → characters (all resolved) → XP → prose → investigation → index →
systems.

## 2. What the session was

The recap's spine: Archie runs deeper in and Eager follows and **kills the
giant green spider**; Dan (one arm) drops the longsword for the one-handed
shield; Markop watches the whole party run away from the stump the plan was
built around and stays at it, revving the motorbike; Salam fires from the bike;
Markop leaves an ettercap in the dust; **Dan is webbed and falls, Archie
screams**; Eager wrestles the ettercap and throws Dan to Archie, who misses the
catch; Archie holds the body, thinks about running, puts it down and faces the
ettercaps — "I'll end this journey the way I started it, with my signature
spell" — and **whispers Fireball**; two left, Archie out of spells; Eager's
final stand takes one; the eight lines at the stump ("Hello." … "I don— don't
disagree"); Salam puts the bow down and heals Dan; Eager survives on Markop's
healing with **two hit points**; Eager takes the electric sphere; **Markop
pushes Eager aside and kills the last ettercap with his fist**; "what about
Remi, we can't rest now" loses to the Toads — back to the stump; the table's
own post-mortem (Archie spent every crowd-control spell and everyone left);
the Permanent Injury Table for the one who fell: **59 — Sprained Thumb**.

## 3. The judgement calls

**The battle is concluded, and the archive says so in four places.** The
event `status` opens "Concluded —"; the new battle record carries `status`
and `result`; `skittering_grove.status` moves from "Active hazard — the party
is inside it" to "Fought through"; the investigation closes
`lead_green_spider`. Earlier grove events keep their own statuses — they were
true when filed.

**The scream is filed as the pact's signal, fired for the wrong reason.** The
previous filing closed on "nobody has screamed yet." Archie's scream for the
fallen Dan is filed as that sound made on schedule and meaning something else,
and a low-priority lead retires the pact as a signal.

**Dan's arm.** The character description contains one line claiming Feyward
Dan is *not* the one-armed Dan; eleven other filings, the battle rosters and
the sheet ("One-Armed Blade") say he is. The recap says "dan having one arm."
Filed as one-armed, consistent with the bulk of the canon, and the arm is what
decides the shield beat.

**The injury is filed as chance and as a joke the grove told itself.** Row 59
forbids two-weapon fighting and two-handed versatile attacks — for a man with
one arm. The prose says so plainly; the analysis has a section on it; the
assignment on the character is enriched with `event`, `date`, `rolledFor`,
`note`. The thumb is still real: splinted on the new plate, one week on the
rule.

**The eight lines are attributed by sense.** "Hello" is the man walked into
(Markop); "I thought you left me for dead" is Eager; "I was talking to you" is
Markop; "I'm healthier than the other guys" is Eager (he is bleeding); the
stammered "I don— don't disagree" is Markop. The recap does not label
speakers; the prose presents the lines as a block so the attribution is the
reader's as much as the archive's.

**"The Toads" voted.** The recap has "the toads say no, we're going back to
the stump." The record does not show when the three who ran upward came back
down or whether these are they; the participant row and two amended leads say
exactly that rather than inventing a return.

**The Iron Legion is filed as absent.** Not one Legion body appears in the
recap. The participant row says so; `thread_what_the_legion_ran_from` is
amended (the dead ettercaps are a candidate, not an answer) and stays open.

**The electric sphere has no prior page.** The recap says it was powered
during the giant battle by Archie's electric magic; nothing in the archive
shows it. Filed on the technology ledger with the gap stated and a lead opened.

**A wrong link corrected in the predecessor.** `you_said_leave_no_one_behind`
linked the word "ettercap" to `embercap`, who is a Toad field commander of the
Peach Loyalists. The link is now plain text in both filings and `embercap` is
out of both `relatedArticles`.

**No exhibits.** No paper was named this session. Skipped on purpose.

## 4. Also filed

* **Battle** — `the_grove_floor_battle` (battles.json, 70 total): engagement,
  belligerents, seven key moments, `status` Concluded, imaged with plate 04.
* **Investigation** — `shadeward_feyward_ruined`: session row
  `s_the_way_i_started_it`, `lastFiled` bumped, `thread_disputed_casualty` and
  `thread_what_the_legion_ran_from` amended, new thread
  `thread_remi_after_the_grove`, `lead_green_spider` closed,
  `lead_toads_disengagement` / `lead_tree_route` amended, three new leads
  (`lead_electric_sphere`, `lead_the_week_at_the_stump`, `lead_the_scream_pact`).
* **Analysis** — `the_way_i_started_it_stump_reading` (28 analyses): five
  sections, verdict, two research-desk rolls.
* **WAHwire** — two native posts, orders 212–213: `ww_twisi_archie`,
  `ww_twisi_eager`, each with a Waluigi top reply and one party comment.
* **Characters** — status + keyEvents for `markop`, `eager`, `archie_miser`,
  `salam`, `dan_the_toad`; Dan's `image` → `portraits/dan_grove_splinted.png`
  (old plate kept in `imageAlternates`), new `eventStates` row, and
  `injuries[]` row 59 written by `tools/generate-injury-table.py --result 59
  --character dan_the_toad` then enriched.
* **Location** — `skittering_grove`: status, a notable feature for the stump,
  relatedArticles.
* **Technology** — `tech_warios_motorbike` (vehicle; first seen the Scorncrow
  skirmish, three sightings) and `tech_grove_electric_sphere` (magitek); two
  new recipes in `assets/technology/tech-models.js` (`motorbike`,
  `charged_sphere`). 30 entries, 53 verified quotes.
* **Index** — `mainPage.latestUpdate` / `featuredArticle`; `SITE_UPDATES`
  prepended with the technology route kept at index 1; campaign fronts
  rebuilt (`--write`, Shadeward front = this filing).
* **Ledgers** — `filing-updates.json` pass 18; RNN pending list = 1
  (`the_way_i_started_it`; threshold 10, no broadcast owed);
  `sheets.json` rebuilt (Dan's portrait).
* **Plates** — `Reputation-Matrix2/assets/images/events/the-way-i-started-it/`
  `twisi-01-fireball-whispered.jpg` (lead), `-02-shield-and-web`,
  `-03-hello`, `-04-the-fist`; `Reputation-Matrix2/portraits/dan_grove_splinted.png`
  (512 px; one arm, the shield, the splinted thumb, the web in the cap).
* **Not filed** — no commentary track (optional; the chronology test notes
  it); no props; no dossier-assessment movement (the Legion did not act).

## 5. XP (preview until the table confirms)

| xpKey | article | cat | XP | for |
|---|---|---|---:|---|
| `eager` | eager | combat | 360 | the green spider, the ettercap off Dan, the final stand, two hit points |
| `archie` | archie_miser | magic | 320 | the body down, the whispered Fireball |
| `markop` | markop | combat | 300 | the stump held, the bike, Eager's healing, the fist |
| `feywarddan` | dan_the_toad | loyalty | 260 | the shield for the sword; fell for it; came back |
| `salam` | salam | loyalty | 220 | fired from the bike, then the bow down and hands on Dan |

Total 1,460. `feywarddan` and `archie` resolve on the XP page
(`app/pages/standalone/xp.html`), not in `XP_SUMMARY`.

## 6. Verification

`check-all.py`: all PASS except the pre-existing *judgement in the grove*
failure. `check-technology.py` 0/0 · `test-technology-page.mjs` 58/0 ·
`test-appearance-chronology.mjs` 220/0 · `check-battles.py` PASS ·
`check-investigations.py` 0 errors · `check-event-art.py` every filing has a
plate · `check-home-feed.py` OK · `check-timecodes.py` PASS ·
`check-exhibits.py` 0 errors · `check-references.py` PASS ·
`build-campaign-fronts.py --check` current · `track-filing-updates.py --check`
current (pass 18) · `check-sheets.py` ok · `build-rnn-broadcast.py --check` ok
· `check-story-growth.py the_way_i_started_it` reviewed (arc peers left
alone; the predecessor's wrong link fixed).
