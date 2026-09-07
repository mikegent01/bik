# Run report — The Belly of the Beast (Scorncrow round two → the Skittering Grove)

**Date of run:** 2026-09-07 · **Branch:** `arena/01a0799f-bik`
**Filing:** one session event, continuing directly from `the_scorncrow_skirmish`.
**Process:** `docs/SESSION_FILING_PROCESS.md`, steps 1–9 in order.

---

## 1. Files created or edited

```
CREATED
  tools/scratch/beats-skittering-grove.md          beat list, 45 numbered beats + new-canon marks
  docs/run-reports/2026-09-07-belly-of-the-beast.md this file

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

## 6. Not done / open

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
- **No new images.** The event reuses the existing scorncrow-skirmish battlefield
  image with a caption that states it is from the earlier record. The Skittering
  Grove interior has **no** filed image. Per `docs/ASSET_MAP.md` an unreferenced
  upload rots, and the reverse case — a caption implying an interior view exists
  — would be worse. Interior art is owed.
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
