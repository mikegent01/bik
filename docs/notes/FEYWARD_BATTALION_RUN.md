# Run report — the Battalion of Six

**Branch:** `arena/01a036d8-bik` · **Filed:** `feyward_battalion_of_six_and_the_bait_plan`
**Process:** `docs/SESSION_FILING_PROCESS.md`, steps 1–9, in order.

---

## 1. Files created or edited — every one

### CREATED

```
tools/build-feyward-battalion-event.py       builder; runs steps 2–9 in order (~640 lines)
tools/feyward_battalion_sections.py          the prose: DESCRIPTION + 15 sections (~1,050 lines)
tools/tests/test-feyward-battalion-render.mjs  jsdom render test, 43 assertions
docs/notes/FEYWARD_BATTALION_RUN.md          this report
```

### EDITED

```
Reputation-Matrix2/data/characters.json      + 6 new entries (Hank, Timmy, Wyatt, Brad, Randall,
                                               Piktor Deldkur the Third); ~ hjumpik + toad_lee status
                                               rewritten, + waluigi/hjumpik/toad_lee relatedArticles  (+115 lines)
Reputation-Matrix2/data/events.json          + feyward_battalion_of_six_and_the_bait_plan
                                               (15 sections, 7,068 story words)                    (+286 lines)
Reputation-Matrix2/data/locations.json       ~ overgrown_manor: +4 notableFeatures, +2 relatedArticles (+10 lines)
Reputation-Matrix2/data/props.json           + 3 exhibits (commission, evacuation order, wahbook leaf) (+114 lines)
Reputation-Matrix2/data/investigations.json  ~ shadeward_feyward_ruined: +1 session, +3 exhibits,
                                               +4 leads, lastFiled bumped                        (+138 lines)
Reputation-Matrix2/data/mainPage.json        ~ latestUpdate + featuredArticle repointed             (~12 lines)
Reputation-Matrix2/data/wahwire/posts.json   + wahwire_battalion_of_six (order 10)                (+24 lines)
Reputation-Matrix2/data/liberated-toads/toadslist-data.js
                                             ~ 05_toad_lee roleNote + lore (Feyward assignment)   (~4 lines)
index.html                                   ~ SITE_UPDATES prepended; home-feed card spliced in   (+25 lines)
tools/update-index-home.py                   ~ new feed card at the top of timeline_html;
                                               "Latest File"/"Latest Session" chrome demoted      (+23 lines)
tools/rnn-scripts/pending-news-articles.json ~ +1 pending id                                       (+5 lines)
.gitignore                                   + node_modules/ (jsdom, installed for the render test)
```

### GENERATED (do not hand-edit)

```
index.html — the block between the
  <!-- 4. RECENT CAMPAIGN ADVENTURES & CHRONICLE FEED --> and
  <!-- 5. OPERATOR TOOLKIT --> markers, rewritten by tools/update-index-home.py
```

### NOT TOUCHED

No generated RNN output was rebuilt (`rnn-broadcasts.js`, the `RNN:LAST-WEEK`
README blocks) — no episode was owed by this filing's own pending entry. See §4.

---

## 2. Event filed

```
EVENT  feyward_battalion_of_six_and_the_bait_plan
  title    The Feyward Session Where Hjumpik Was Handed Six People at Breakfast, …
  date     1 Aethel, 922 BF (Feyward clock) — morning, through the wood coming
           through the wall; Material stood in 1040 BF; concurrent with the
           cutting-lane engagement filed as feyward_woodfellow_vs_the_treant
  location overgrown_manor (amended, not duplicated) — war room, wall walk,
           service hall, kitchen, mushroom coat room, breached corridor
  parties  9 participant ids, all resolve:
           hjumpik · waluigi · toad_lee · the_oracle · timmy_the_house_guard ·
           hank_the_goblin_butler · wyatt_the_white_haired_goblin ·
           brad_the_waiter · randall_the_house_guard
  related  16 ids, all resolve (incl. the lane battle record + piktor_deldkur_the_third)
  length   15 sections / 7,068 story words / 490 words of waluigi_note /
           1,190 words of apparatus  =  8,748 words rendered on the page
  ratio    79% story / 21% inline analysis (event audit)
  craft    sensory 9.8/1k (guide floor 8) · abstract 0.2/1k · dialogue 34.1/1k
           16 asides, all matched by isWaluigiAside() · 1 section runs clean
  status   UNRESOLVED — outcome + notableFeatures + aftermath + assessment
           (assessment written because the filing is long, per §9)
  route    #/article/feyward_battalion_of_six_and_the_bait_plan
```

**Date chain.** Previous filing in the arc: `feyward_chop_bros_soul_ring_and_the_guard_with_no_name`
(23–24 Harvestide, 1040 BF, Feyward-relative), which ended at the heir's map
table. This session opens at that map the next morning. The concurrent outdoor
engagement `feyward_woodfellow_vs_the_treant` is dated `1 Aethel, 922 BF
(Feyward clock)`, and this filing uses the same clock per
`docs/DATE_FILING_GUIDE.md` → *Planar and realm clocks*. The two earlier
Feyward filings still say "Harvestide, 1040 BF (Feyward-relative)"; they were
not redrafted (guide: do not redraft unrelated prose just to fix a date). The
clock disagreement is stated in the filing note in `description`.

---

## 3. XP awarded

| Character | `xpKey` | Category | XP | For |
|---|---|---|---:|---|
| Hjumpik | `hjumpik` | social | 320 | Took command of six at breakfast, named them, kept four alive through four engagements |
| Hjumpik | `hjumpik` | combat | 260 | Came back into the corridor for the mound; refused the Oracle's shortcut to the Revel |
| Waluigi | `waluigi` | magic | 240 | Named three options with costs, then put an ice lance the length of a hallway into a thirsty tree |
| Waluigi | `waluigi` | survival | 140 | Was in a bathroom with a locking door while the corridor was decided |
| Toad Lee | `toadlee` | social | 220 | Raised a Toad squad of five — the only unit in the manor to arrive in formation |
| Toad Lee | `toadlee` | combat | 180 | Held the corridor line with Wyatt until the mound was overwhelmed |
| **Total** | | | **1,360** | across 3 characters, 6 awards |

**Filed on the event only** (`xpAwards[]` on the record). The authoritative
ledger (`XP_SUMMARY` in `index.html`) was **not** mutated — these are preview
awards pending the table's confirmation, per `SESSION_FILING_PROCESS.md` step 4.
Every `xpKey` was verified against `XP_SUMMARY`: `waluigi`, `hjumpik`,
`toadlee` (note: `toadlee`, not `toad_lee`).

---

## 4. What is not done / open

**Pre-existing failures, not introduced by this run.** `python3 tools/check-all.py`
was run before any edit and again after; the failure set is identical:

```
FAIL exhibits         1 error  — events.json references [[prop:prop_remi_stormwatch_receipt]],
                                 which does not exist in props.json (Green T / Remi arc)
FAIL investigations   2 errors — shadeward_feyward_ruined/ex_green_t_parley → prop_green_t_threshold_parley
                                 shadeward_feyward_ruined/ex_stormwatch_receipt → prop_remi_stormwatch_receipt
FAIL background       2 errors + 1 warn — mount_ebot_one_t_file and mario_charred_note_file blurbs
```

All five are in other arcs and predate this filing. They were **left alone on
purpose**: the README's PR rule is *one purpose per PR*, and inventing two props
for the Green T / Remi thread from inside a Feyward filing is exactly the kind
of cross-arc invention that should not ride along. The fix is two props keyed
`prop_green_t_threshold_parley` and `prop_remi_stormwatch_receipt`, wired to
`green_t_at_the_door_and_the_scorncrow_underfoot` — the investigation exhibits
already describe both papers in enough detail to write them.

**Nothing new failed.** `check-references.py` PASS with no new non-legacy
warning mentioning any id created here; `check-rolls.py` 0/0; `check-battles.py`
PASS; `check-duplicates.py` PASS.

**RNN — an episode is owed, but not by this filing.** The pending list is at
**4/10**, so this filing alone owes nothing. However `python3
tools/build-rnn-broadcast.py --unaired` lists **12 events that have never
aired** (the file and the script disagree; the README says `--unaired` is
ground truth). That debt predates this run by 11 events. No episode was cut —
cutting one is a separate purpose and a separate PR.

**No `battles.json` record created.** The four interior engagements are
small-unit actions inside the session and live in the event, per
`docs/BATTLES_GUIDE.md` → *A regular encounter does not get a record*. The
outdoor engagement already has one (`feyward_woodfellow_vs_the_treant`) and is
cross-linked from `relatedArticles`, which renders.

**Renderer gap found, not fixed.** `keyBattles[]` on an *event* is read by
`index.html` only as a list of ids (five call sites, all `typeof r==='string'?r:r&&r.id`).
The object-shaped `{name, description, outcome}` rows used by this filing — and
by `the_feyward_revel_crisis_poison_plants_and_frozen_diplomacy` before it —
**render nowhere**. 326 words of tactical data are filed but invisible. Kept
for arc consistency rather than silently diverging; the fix is either a
renderer branch or converting the older filings to battle ids, and it should be
its own PR.

**Deliberate omissions from the transcript.**

- The roll call's `Gaurd / ecxt / Uiok` line was treated as table noise; one
  unnamed guard is recorded as "the guard after him had a name the record did
  not catch." No name was invented for him.
- "Brandon" and "Brad" are both in the log for the same waiter. Brad is canon;
  "Brandon" is kept as Hjumpik's error, which is the better detail.
- The book Waluigi reads aloud is **not** filed in `books.json`. The volume is
  unnamed in the transcript, and naming it would invent canon. Its line is
  quoted in prose and attributed to the book, not to any author.
- The battered fairy taken as bait is **unnamed** on purpose — the transcript
  gives him no name. He is a lead, not a character record.
- The second of the two dead at the roll call has no name in the log and was
  not given one.

**Assumptions flagged.**

- "The Map Master" is filed as a *role*, not a person — the transcript says
  only "the map master, O.C.'s map master." No name invented; the question of
  whether the office is a person is now lead `lead_map_master`.
- "The Ravenous Host" (busiest combatant, third engagement) is named as the
  tally names it and is explicitly **not** classified; it is lead
  `lead_ravenous_host`.
- The session is dated to the morning after the map. The transcript says
  "let's glorify the morning" but gives no date; the chain is map scene → next
  morning → concurrent lane battle.

**Not done at all.**

- No images generated (`docs/IMAGE_GENERATION_GUIDE.md` says new substantial
  articles ship with images). Deferred: art direction should come off the
  prose, and this run was already at the edge of one PR's purpose.
- No Pond Patrol docket *action* row — only Toad Lee's roster `roleNote`/`lore`
  were updated in `toadslist-data.js`. He is off-plane and under no docket
  question; if the table wants a formal action item, that is a follow-up.
- No PR opened. Work is committed to `arena/01a036d8-bik` only.

---

## 5. Verification — commands run, results

```
python3 tools/build-feyward-battalion-event.py --check   dry run, counts confirmed
python3 tools/build-feyward-battalion-event.py           wrote all nine steps
python3 tools/update-index-home.py                       index.html updated successfully
python3 tools/check-all.py                               PASS ×8 / FAIL ×3 — identical to the
                                                         pre-edit baseline (see §4)
python3 tools/check-exhibits.py                          1 error (pre-existing); 121 props,
                                                         3 new kinds validated, 0 new errors
python3 tools/check-investigations.py                    2 errors (pre-existing); 74 exhibits,
                                                         0 new errors
python3 tools/check-rolls.py                             0 errors, 0 warnings (53 rolls / 24 targets)
python3 tools/check-references.py                        PASS; no new dangling id
python3 tools/build-rnn-broadcast.py --unaired           12 never aired (see §4)
node tools/tests/test-feyward-battalion-render.mjs       ALL PASS (43 passed, 0 failed)
```

**What the render test actually executed.** It boots the real `index.html` in
jsdom with Node's `fetch` injected (jsdom has none, which is why the page will
not otherwise boot), waits for the 42 data stores to land, then calls the
page's own `Router.go('#/article/feyward_battalion_of_six_and_the_bait_plan')`
and asserts against `#content`. Confirmed through the real code path: all 15
section names rendered by the article renderer; 17 elements carrying
`.walu-aside` (i.e. `isWaluigiAside()` matched every aside); 17 `Waluigi's
Note:` blocks; 8 `.proplink` anchors; 6 `.award-row` XP rows including
`+320 XP` and `+180 XP`; no `[[prop:`, `[[roll:` or `&lt;div` leaked into the
rendered article; and each of the three exhibits opened through the page's own
`openProp()` with a styled `.pd-head`. Run it with:

```
python3 -m http.server 8765 --bind 0.0.0.0 &
node tools/tests/test-feyward-battalion-render.mjs
```

**Event craft audit** (`docs/AUDIT_SCRIPTS.md` → Event audit), run against the
filed record: `8203 words — 78% story / 22% analysis · sensory 9.8/1k ·
abstract 0.2/1k · ratio 60:1` → *Nothing flagged.*
