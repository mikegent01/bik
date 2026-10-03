# Run report — The Rot-Zone at Star Hill

**Filed:** run dated 2026-10-03
**Branch:** `arena/01a0feea-bik` (PR #89 into `gh-pages`)
**Source:** the pasted roleplay session — the helicopter leg from Waluigi's
Outpost to Star Hill, continuing straight out of the Debt Siege, plus the
linked "STAR HILL CLINIC OUTSIDE" scene.

## 1. The filing

| What | Id / path |
|---|---|
| Event | `the_rot_zone_at_star_hill` — events.json, appended (130th) |
| Date / clock | 2 Aethel, 1035 BF, night · `TC:1035-09-02/MAT` · same evening as the siege, no gap |
| Commentary | `the_rot_zone_at_star_hill_commentary` — 11 sections, 7,762 words (source 7,042 → 1.10×) |
| Analysis | `the_rot_zone_at_star_hill_custody_reading` — 6 sections + verdict + 2 desk rolls (dc 4, dc 3) |
| Props | `prop_wario_pilot_termination_notice` (order), `prop_notebook_scrap_thorn` (note), `prop_notebook_custody_slip` (ledger) |
| Investigation | `mario_charred_note_file` — session `s_rot_zone_star_hill`, 3 exhibits, 2 threads, 3 new leads, `lead_star_hill_lockdown` amended |
| Characters | NEW `paulo` (+ `portraits/paulo.jpg`); `mr_l`, `luigi`, `wario`, `waluigi`, `dr_toad` amended |
| Location | `dr_toads_star_hill_clinic` — status, dated paragraph, four features |
| Art | `assets/images/events/rot-zone-star-hill/rot-01-roof-wreck.jpg` (lead), `rot-02-mouth-in-the-road.jpg` (§IV), `rot-03-purple-boy.jpg` (§X) |
| Home | `mainPage.latestUpdate` + `featuredArticle`; `SITE_UPDATES` head; campaign front (Mario) rebuilt; filing-updates pass 16 |
| Wire | `ww_who_took_my_notebook` (order 210, Wario reply) |
| Broadcast | pending-news rows for this event **and** the Debt Siege (both unaired per `--unaired`) |

## 2. What the session was

Two scenes, played back to back. The first is the helicopter: Wario has
already fired the pilot ("FIRED HIM. HE'S IN THE BACK.") by a bulldog-clipped
termination notice for saying a hospital is not a landing pad; the pilot is in
the rear hold behind a latched gate; the informant's radio report is upgraded
to "private wing, high security, consciousness fluxing"; Waluigi's working
notebook nearly leaves by the open side door. The second is the street outside
the clinic, seen first from the air and then from the ground: a man in Luigi's
clothes reciting verse at a courier (bridge, brother, debt), the courier
shooting him, the man lengthening, a mouth with an eye opening in the road, the
courier going through the clinic's front window. Then the crash on the
storehouse roof next door, Wario dragging Waluigi out under fire, a steel-door
bar knocking Wario cold, two slaps, a pistol in Waluigi's face on the stairs,
the "one per cent of my capacity" bluff made with no MP, three copies of Mr. L
on the staircase, two jams, a building that gets longer, the fire-ladder
retreat ("We are giving up on the Star-a Clinic"), and the street: "this
rot-zone", "coordinates", "purple boy", the notebook held up as a shield, the
shot off the rotor blade, Wario throwing the book, Paulo walking away reading
it. Waluigi wakes mid-verse; Wario finds a scrap in the thorn; "WHO TOOK MY-A
NOTEBOOK!"

## 3. The judgement calls

**One event, not two.** The helicopter leg and the clinic street are one
continuous night with no scene break in the fiction; the "OUTSIDE" scene is
simply the same night from the ground. Filed as one event with eleven
sections; the siege gets a one-sentence sequel pointer in its aftermath and a
reciprocal link, nothing more (ARTICLE_REVISIONS: pointer, not rewrite).

**Luigi is a participant in name only.** He was never seen. The informant's
three phrases are filed as *unverified* everywhere they appear — event status,
lead amendment, character status — and the lead keeps its old name
(`lead_star_hill_lockdown`) rather than pretending the night learned something
about him. It learned something about the hill.

**Mr. L's verses are not filed as a song.** The pieces heard (bridge, brother,
debt) are quoted as heard; their provenance is unknown and the archive does not
invent a title or a complete text. The line "every page turned is a debt
incurred in blood" is filed where the transcript puts it — inside Waluigi's
concussion, not spoken aloud.

**The thing in the road came out of the ground, not out of him.** The
transcript is specific; the event, the Mr. L amendment and the analysis all
keep it that way, because it moves the question off the man and onto the
hill.

**The pilot's fate is left unresolved and filed as the archive's omission.**
Nobody went back. The termination notice is filed as an exhibit reconstructed
from memory (the original is on the roof); the lead `lead_pilot_in_the_hold`
is critical and first in the verdict's recommendations.

**The scrap's contents are withheld in the prose and printed on the prop.**
Three partial lines from the back of the book — about water and a man who did
not knock, not about Luigi — so the exhibit carries what the story refuses to
say aloud. The notebook itself was never a logged exhibit (by its author's
rule); the custody slip exists because the rule now cuts the other way.

**Paulo gets a page.** He is named, armed, has a route and an issued word, and
is now the holder of the arc's most-cited object. Portrait generated to the
site's comic style; status "at large".

**The analysis argues custody, not rescue.** Thesis: nothing about Luigi
moved; what moved was paper, in one direction, toward a route with an owner.
Two desk rolls check the tear direction (dc 4) and whether "rot-zone" appears
in any paper the desk holds (dc 3); neither invents canon on a success.

**`mike` is the GM.** Never a character; nothing of his entered prose.

## 4. Also filed

- **Siege cleanup.** The Debt Siege filing had left the campaign front, the
  filing-updates ledger, `SITE_UPDATES` and pending-news without entries. The
  two `--write` tools picked up both events; a Debt Siege `SITE_UPDATES` entry
  is inserted directly after the new one so the changelog has no hole; a
  pending-news row is added because `build-rnn-broadcast.py --unaired` lists
  it.
- **Investigation threads render fix.** The Cut's two threads (`th_the_director`,
  `th_the_remote`) were filed with `status`/`note`; the renderer reads
  `state`/`text`, so they rendered as headings with no body. `text` and
  `state` are now mirrored onto them (the original keys are left in place).
  `relatedEvents` on the file also gains the Cut, the siege and this event.
- **Garden reciprocal link.** `the_garden_above_the_fire` (where Luigi was
  carried into the clinic) links forward to this event — a reader on the
  rest-order page should be able to follow the clinic to what it became.

## 5. Cross-system triggers reviewed

| Trigger | Action |
|---|---|
| New named NPC | `paulo` character + portrait |
| Object changed custody | `prop_notebook_custody_slip` + exhibit, dc 5 |
| New vocabulary from an NPC | thread `th_rot_zone`, lead `lead_paulos_route` (critical) |
| Canon character sighted | `mr_l` status + dated paragraph; thread `th_mr_l_at_star_hill`; lead `lead_who_mr_l_waited_for` |
| Location changed state | clinic status "Unreached", new features, dated paragraph |
| Reputation | Waluigi +2 Wario Enterprise; Wario −3 Wario Enterprise (crashed the company helicopter, fired the pilot), −2 Regency |
| XP | Waluigi survival 250 / social 150; Wario chaos 200 / loyalty 250 — `xpAwards[]` only |
| WAHwire | Waluigi post (rage) with Wario's "thirty per cent mine" reply |
| Broadcast | pending-news now 9 rows; threshold 10 — the next filing trips an RNN episode |

## 6. Verification

```
check-duplicates.py                 0 issues (349 records)
check-exhibits.py                   0 errors (164 props)
check-investigations.py             0 errors
check-rolls.py                      0 errors (56 rolls / 27 targets)
check-timecodes.py --strict         PASS
check-commentaries.py --strict      PASS — 11 sections · 7762w · Waluigi/1k 23.7 · CAPS/1k 28.7 · WAH 4
check-home-feed.py                  OK — latestUpdate = last-appended = the_rot_zone_at_star_hill
build-campaign-fronts.py --check    5 fronts current
track-filing-updates.py --check     ledger current (pass 16)
check-event-art.py --check          130/130 illustrated
check-readability.py --analysis …   nothing flagged
check-story-growth.py <id>          review queue worked (see §4)
audit-wahwire.py                    advisory only; no new dangling links
check-all.py                        the three pre-existing failures only (judgement in the grove, alliance cache, map lenses)
```

Banned analytic vocabulary scanned out of the event prose; kept for the
assessment and the analysis.

## 7. What is left

- The pilot. Somebody has to go back to the roof; the lead is critical.
- Paulo's route / depot — who issues "rot-zone" and named a notebook to a
  courier. The notebook with the Luigi notes is being read as he walks.
- Whether the private wing exists, and who Mr. L was waiting for outside it.
- Image notes: the generator refused a gun being fired at a person and the
  flesh-mouth close-up; plate 2 is the eye in the cracked road beside the
  lengthened figure, plate 3 is Paulo walking away reading with the pistol
  lowered. Both captions describe what is shown.
- Pending-news sits at 9/10; the next event filed should write `rnn-005`.
