# Run report — The Belly of the Beast (Scorncrow round two → the Skittering Grove)

**Date of run:** 2026-09-07 · **Branch:** `arena/01a0799f-bik`
**Filing:** one session event, continuing directly from `the_scorncrow_skirmish`.
**Process:** `docs/SESSION_FILING_PROCESS.md`, steps 1–9 in order.

---

## 1. Files created or edited

```
CREATED
  start.py                                         local webserver + browser launcher (root)
  tools/scratch/beats-skittering-grove.md          beat list, 45 numbered beats + new-canon marks
  tools/scratch/belly-of-the-beast-prompts.md      image prompt sheet + what was actually generated
  docs/run-reports/2026-09-07-belly-of-the-beast.md this file

CREATED — images (Reputation-Matrix2/assets/images/events/belly-of-the-beast/)
  belly-01-the-mask.jpg          210 KB  lead + §III  the mask in flight, human face beneath
  belly-02-jaws-and-rope.jpg     230 KB  §VIII        jaws pried open, Markop's rope, Remi's torch
  belly-03-archie-all-in.jpg     247 KB  §VI          Archie's all-in cast, eyes burning
  belly-04-wario-rides-in.jpg    235 KB  §V           Wario riding into the tree's mouth
  belly-05-skittering-grove.jpg  278 KB  §IX + loc    the grove inside the tree
                                 1.2 MB total

EDITED — data (hand-written)
  Reputation-Matrix2/data/locations.json           + skittering_grove (new entry, 31 lines)
  Reputation-Matrix2/data/characters.json          + scorncrow (new entry); ~ 7 statuses amended
                                                     (dan_the_toad, salam, eager, archie_miser,
                                                      markop, remi_akamatsu_full_backstory, wario)
  Reputation-Matrix2/data/events.json              + the_belly_of_the_beast (9 sections / 2,739 words,
                                                     10 xpAwards rows, 3 [[prop:]] triggers)
  Reputation-Matrix2/data/battles.json             + the_skittering_grove_descent_battle (173 lines)
  Reputation-Matrix2/data/props.json               + 3 exhibits (prop_belly_marching_order,
                                                     prop_belly_torch_test,
                                                     prop_scorncrow_unmasking_note)
  Reputation-Matrix2/data/investigations.json      ~ shadeward_feyward_ruined:
                                                     + sessions[] row s_h30_belly_of_the_beast
                                                     + thread th_inside
                                                     + 3 exhibits (6 inline [[roll:]] checks)
                                                     + 3 leads
                                                     ~ lastFiled bumped, relatedEvents +1
  Reputation-Matrix2/data/mainPage.json            ~ featuredArticle + latestUpdate → the_belly_of_the_beast;
                                                     didYouKnow[0] replaced; editorialDirective rewritten;
                                                     onThisDay + 1 line (list held at 6)
  Reputation-Matrix2/data/wahwire/posts.json       + 3 posts (orders 19–21: waluigi ×2, wario ×1)
  index.html                                       ~ SITE_UPDATES: 1 entry prepended
  tools/rnn-scripts/pending-news-articles.json     ~ 1 id appended
  README.md                                        ~ "Running it — python3 start.py" section added

EDITED — image wiring (second pass)
  events.json      ~ event.image/imageCaption + 5 section image/imageCaption pairs
  battles.json     ~ the_skittering_grove_descent_battle.image
  locations.json   ~ skittering_grove.image
  characters.json  ~ scorncrow.image
  mainPage.json    ~ fieldGallery +2 entries (now 10)

GENERATED (do not hand-edit)
  none — no broadcast was owed, so build-rnn-broadcast.py was not run in write mode.

DELETED
  nothing.
```

No file was reformatted. Every JSON was written back in its own existing style
(`ensure_ascii` and indent matched per file; `events.json` and `props.json` were
appended textually to keep the diff to the new block only).

## 2. Events filed

```
EVENT  the_belly_of_the_beast — "The Belly of the Beast: Human Blood Under the
       Scarecrow, a Door Burned Shut, and the Skittering Grove Inside the Tree"
  date      30 Harvestide, 1040 BF — continuous with the_scorncrow_skirmish, same night
  location  the overgrown grove + skittering_grove (new)
  parties   remi_akamatsu_full_backstory, archie_miser, markop, wario, dan_the_toad,
            salam, eager, mossy, green_t, scorncrow (new)  — all 10 ids resolve
  length    9 sections / 2,739 words of overview prose + aftermath + waluigiAssessment
  status    unresolved — party sealed inside, split, out of magic
  route     #/article/the_belly_of_the_beast

BATTLE the_skittering_grove_descent_battle — 14 combatants, 6 keyMoments,
       interior combat log transcribed (Murder of Crows ×4, Shadow Jump, ettercap
       Web/Web Strand/Reel, morale BOLD 81–84, guard's spear for 5)
```

## 3. XP awarded

Filed **on the event record only** (`xpAwards[]`). The authoritative ledger
(`XP_SUMMARY`) was **not** touched — these are a preview until the table confirms.

| Character | `xpKey` | Category | XP | For |
|---|---|---|---:|---|
| Remi | `remi` | combat | 340 | Point-blank musket into the Scorncrow's face — the shot that found human blood |
| Remi | `remi` | discovery | 260 | Heard and reported the voices answering the torch test |
| Archie Miser | `archie` | magic | 380 | Emptied every reserve into one weakened fire cast; owned the sealed exit |
| Archie Miser | `archie` | chaos | 180 | Slammed the Scorncrow out of the air knowing who it would land on |
| Markop | `markop` | technique | 300 | Jaws open and shut, marching order with reasons, the descent rope |
| Wario | `wario` | combat | 240 | Freed the motorbike under swarm, dusted two servants, rode the mouth |
| Feyward Dan | `feywarddan` | faith | 280 | Went down to the crows, self-healed at the cost of all his magic, took the front |
| Salam | `salam` | loyalty | 220 | Crossed open ground to stabilise the paladin |
| Eager | `eager` | combat | 200 | Shadow Blade on the downed Scorncrow — and broke off rather than hit Remi |
| Mossy | `mossy` | survival | 90 | Descended without a word |
| **Total** | | | **2,490** | across 9 characters |

`xpKey` values verified against `XP_SUMMARY` in `index.html` (note the
non-obvious ones used here: `dan_the_toad` → `feywarddan`, `archie_miser` →
`archie`, `remi_akamatsu_full_backstory` → `remi`).

## 4. Verification

```
python3 tools/check-all.py        → 26/26 PASS, "All requested checks passed."
  · check-exhibits.py             0 errors, 0 warnings (props now 138 → 141)
  · check-investigations.py       0 errors, 4 warnings (all pre-existing stub warnings)
  · check-rolls.py                0 errors, 0 warnings
  · check-battles.py              PASS (68 records)
  · check-references.py           PASS (413 legacy warnings, all pre-existing)
  · check-home-feed.py            OK · latestUpdate = the_belly_of_the_beast
  · check-covers.py               OK
python3 tools/build-rnn-broadcast.py --unaired  → the_belly_of_the_beast listed unaired
node tools/tests/test-session-nav.mjs           → 17 passed, 0 failed
Static server on :8765, event JSON served and parsed clean.
```

## 5. Cross-system pass (`docs/CROSS_SYSTEM_UPDATES.md`)

| Trigger | Action |
|---|---|
| **WAHwire** (every filing) | ✅ 3 posts added — Waluigi's public correction, Wario on the horn, Waluigi on the pit |
| **Map / territory** | no change — the engagement moved no territory; the Skittering Grove is interior to an existing grove POI |
| **Pond Patrol / Liberated Toads** | **not done** — see below |
| **Regal Diet / Regal Empire** | **not done** — see below |
| Dynasty, currency, Bros attacks, songs, books | no trigger fired |
| Dossier assessments | no faction changed its opinion of an operator; `check-assessments.py` PASS unchanged |

## 5b. Prose remaster (third pass)

The first draft of the nine section bodies failed the craft standard in
`STORY_FORMAT_GUIDE.md` §1–3, and the event audit in `AUDIT_SCRIPTS.md` proves
it numerically. Reported by the user against section I; confirmed archive-wide.

| Metric | Before | After | Imp reference |
|---|---:|---:|---:|
| Sensory words / 1k | **1.8** | **9.0** | ~12 |
| Story ratio | **58%** | **78%** | 83% |
| Analysis ratio | **42%** | **22%** | 17% |
| Dialogue / 1k | 12.9 | 9.8 | ~12 |
| Banned words in story prose | 1 | **0** | 0 |

**What was wrong.** The guide's §1 reject example is prose that reports a beat
instead of showing it, and section I opened with exactly that: *"The Scorncrow's
answer to a party that had held the field was to stop fighting people and start
fighting one person"* — a thesis sentence, no room, no bodies. It was followed by
*"there is no elegant way to describe what a murder of crows does to a man"*,
which is the narrator announcing he will not do the one job the section has. At
1.8 sensory words per 1,000 against a target of 8+, the whole filing was minutes
with quotes pasted in.

**What changed.** All nine `overview` bodies rewritten against the seven
techniques in §2 — sound it, name the object, body over mood, one concrete
anchor per paragraph. The crows now arrive as *"a dry, leathery clatter, a
thousand playing cards shuffled at speed"* and land as *"the noise of hail on a
tin roof — beaks on steel"*; Dan's gauntlet comes off; the burlap mask lands
*"face-up in the mud six feet away with its painted stitched grin pointing at
the sky."* Every `waluigi_note` was cut to the 40–70 band (was 55–117), which is
what moved 20 points of ratio from analysis back to story.

**What did not change:** every quoted line of table dialogue, every beat, all
three `[[prop:]]` triggers, all five section images, the apparatus
(`aftermath`, `waluigiAssessment`, `xpAwards`), and every id. Section lengths
316–425 words, all inside the 350–450 aim or its tolerance. Diff is 18 lines
changed — prose only.

## 6. Local server

`start.py` (repository root) serves the archive over HTTP and opens it:

```bash
python3 start.py                                       # 127.0.0.1:8765 + browser
python3 start.py --route "#/article/the_belly_of_the_beast"
python3 start.py --no-browser --host 0.0.0.0 --port 9000
```

It exists because opening `index.html` off the filesystem blocks `fetch()` on
`file://`, so the whole `data/*.json` layer silently fails to load. It also sends
`Cache-Control: no-store` so a freshly filed event is never masked by a cached
`events.json`, forces correct MIME types for `.js`/`.mjs`/`.json`, steps to the
next free port if 8765 is busy, quietens per-asset logging to errors only, and
refuses to run if it is not sitting next to `index.html`. Verified: `index.html`,
`events.json` and portraits all return 200 with the no-store header, and all five
new images serve.

## 7. Not done / open

- **Pond Patrol docket not updated.** Salam and Feyward Dan are roster-adjacent
  Toads and both had a status event (Salam performed a field stabilisation under
  fire; Feyward Dan was downed and self-healed to zero reserves). Their
  `characters.json` statuses were amended, but no docket row was added. Deferred
  deliberately: the docket data lives in
  `app/pages/liberated-toads-system/`, this is a mid-arc combat filing with no
  governance consequence, and the party is still inside the grove — the docket
  entry is better written when they come out. Flagging rather than skipping.
- **Regal Diet not updated, and this is the uncomfortable one.** There are Iron
  Legion soldiers inside the Skittering Grove and the transcript offers no
  explanation for how they got there. That is potentially a Legion-action trigger,
  but nothing in the session establishes a political justification, order, or
  authority. Filed as investigation lead `lead_second_mouth` instead of invented
  as Diet activity.
- **No RNN episode cut.** Pending list now **9/10**. One more filing buys the
  next episode.
- **`tools/tests/test-home-feed-render.mjs` not run** — `jsdom` is not installed
  in this sandbox (`ERR_MODULE_NOT_FOUND`). The static contract check
  (`check-home-feed.py`) passed, and the feed is data-driven from `events.json`,
  which is last-appended correctly.
- **Image slot 1 was re-framed by a safety filter, and the change matters.**
  The prompt sheet's lead called for Remi pinned beneath the Scorncrow, firing
  upward, human blood visible. Three variants were refused by the image model
  (a child plus a levelled firearm plus blood). The shipped image is the instant
  *after*: the scarecrow reeling, the burlap mask tumbling away, the plain human
  face beneath it — no weapon, no blood, and **Remi is not in the frame**. The
  filing's thesis survives; the point-blank staging does not. Recorded in
  `tools/scratch/belly-of-the-beast-prompts.md`.
- **Every character in the images comes from an existing portrait file**, passed
  to the generator as a reference under Rule 0 of `IMAGE_GENERATION_GUIDE.md`
  (`portraits/remi.png`, `markop.png`, `archie.png`, `wario.png`), with
  `scorncrow-01-battlefield.jpg` and `scorncrow-04-dan-guard.jpg` as style plates
  and the source of the reused motorbike. No new character designs were invented.
  Worth noting: Wario's canon design is the purple-and-gold flame armour, not
  overalls — a first draft had it wrong and the portrait file corrected it.
- **Feyward Dan, Eager, Salam and Mossy do not appear in any image.** The
  marching-order shot frames the rope and the pit rather than the five figures on
  it. A group shot of the descent is owed if the arc wants one.
- **The guard is unnamed on purpose.** The combat log names a "Guard" who is
  webbed, reeled, and lands the only friendly hit inside. Per the naming gate,
  no name was invented and no `characters.json` entry was created; he is *the
  guard* in prose and in the battle record. If the table has a name, it can be
  filed later without a retcon.
- **The Ettercap and the Giant Green Spiders got no character entries** — they
  are statblock monsters, recorded in the battle's `belligerents` and in the new
  location's description. Only the Scorncrow was promoted to a character page,
  because it now carries an unresolved identity question.
- **Inferred, not sourced:** (a) that the descent and the interior combat log are
  the *same* interior — the transcript interleaves them, and this filing presents
  the log as Wario and Remi's half of the split before the rope descent; (b) that
  Green T's absence is unexplained rather than departure — the transcript only
  says he is gone and Wario says he has his own agenda; (c) the "50 mile radius"
  figure is Archie's in-character estimate, filed as his estimate, not as fact.
- **Nothing was deleted or overwritten** in any existing record except the seven
  `status` strings listed above and the `mainPage.json` fields, all of which are
  by-design rolling fields.

## 5c. Prose remaster — Promo Mario analysis filing

Same defect as the event filing, in the analysis form: the argument was rigorous
but disembodied. `promo_mario_newspaper_waluigi_analysis` in
`Reputation-Matrix2/data/articleAnalyses.json` had **zero** `*WAH!*` asides
inside body paragraphs, no cold open (the thesis began on a finding, "I want to
be precise about what the tablet proves"), every section leading with its own
conclusion, and one section (`more-sources-mean-more-suspicion`) scoring a flat
**0.0 sensory/1k**. The first person was entirely analytical — *I want to be
precise / I will grant / I am refusing* — with no physical `I` anywhere.

Note the form's ratio target differs from an event filing. `docs/ARTICLE_ANALYSES.md`
sets the reverse ratio (≈20% source / 80% Waluigi), so the fix was **not** to add
story. It was to give the existing argument a body: the analyst handling the
objects he is already analyzing.

| Metric | Before | After |
|---|---:|---:|
| Words | 2,494 | 3,216 |
| Sensory / 1k | 5.6 | **16.5** |
| `*WAH!*` asides in body prose | 0 | **8** |
| Sections below 5 sensory/1k | 3 | **0** |
| Worst section (`more-sources…`) | 0.0/1k | **20.0/1k** |

### What changed
- **Thesis** — cold open: the clipping squared to the blotter at a quarter past
  midnight, cold tea, the thumb-smudge on the column about the weeping man.
- **01 Tablet** — the clipping goes up to the lamp before the analysis starts.
- **02 Crying** — the transcript is read aloud to an empty office first; the
  "costs nothing to rehearse" claim now lands second, as a conclusion.
- **03 Three Dates** — the tape label is described before the count begins; the
  pencil tick in the margin makes the self-criticism an object.
- **04 Second Source** — Waluigi crosses to the second shelf, pulls the
  eastern-passage file by the spine, and lays the two documents touching.
- **05 Luigi** — now **leads** with the Camera Three description (wrong green,
  too tall, too still, flickering edges), and Alistair's line is promoted from
  citation to rendered dialogue on its own line: *"That thing isn't him."*
- **06 Documents** — the "four layers" is built as a physical stack, a quarter
  of an inch tall, with the thing he actually wants weighing nothing on top.
- **07 Flashlight** — arrival beat: squares the stack, drinks the cold tea, and
  writes **ASK HIM THE ROUTE** on the blotter in block capitals.
- **Verdict** — closes on a physical residual: lamp on, stack squared, the
  thumb-smudge gone from grey to nearly black.

### What did not change
All 7 section ids, headings, icons and `sourceAnchor` fields; the 3
`researchDesk` rolls; all 7 `relatedArticles`; the verdict's findings and
recommendations; every quotation already in the source event. No canon facts,
dates, custody or outcomes were altered — the diff is prose only
(9 insertions / 9 deletions, one file).

`tools/check-all.py` → **54 PASS**, all requested checks passed.
