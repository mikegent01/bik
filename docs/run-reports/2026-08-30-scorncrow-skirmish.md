# Run report — 2026-08-30 · The Scorncrow Skirmish

Completed the `the_scorncrow_skirmish` stub per `docs/SESSION_FILING_PROCESS.md`
(intake → locations → characters → XP → event → exhibits → investigation →
index → RNN → cross-system → run report).

## Files created or edited

**CREATED**
- `Reputation-Matrix2/assets/images/events/scorncrow-skirmish/` — 4 JPEGs
  (`scorncrow-01-battlefield.jpg` lead, `-02-swing-bats.jpg`,
  `-03-eager-pin.jpg`, `-04-dan-guard.jpg`), each generated with a canon
  portrait from `portraits/` as the reference, compressed to 178–256 KB
- `docs/run-reports/2026-08-30-scorncrow-skirmish.md` — this report

**EDITED**
- `Reputation-Matrix2/data/events.json` — stub → full event (6 sections,
  ~2,250 words), last object in array, ids resolve
- `Reputation-Matrix2/data/battles.json` — + `the_scorncrow_skirmish_battle`
  (61 records), later + 14 `xpAwards[]` rows (party 2,550 XP)
- `Reputation-Matrix2/data/props.json` — + `prop_wario_elixir_warning_label`
  (127 props), wired inline via `[[prop:…]]`
- `Reputation-Matrix2/data/investigations.json` — `shadeward_feyward_ruined`:
  + `s_h30_scorncrow_skirmish` session row, + related event
- `Reputation-Matrix2/data/wahwire/posts.json` — + `wahwire_scorncrow_skirmish`
  (order 11, author wario, status posted); later linked to the battle id too so
  the post renders on the battle page feed
- `Reputation-Matrix2/data/mainPage.json` — `latestUpdate` +
  `featuredArticle` → `the_scorncrow_skirmish`
- `index.html` — prepended `SITE_UPDATES` entry; later: strengthened
  `#battle-article-layout-fix` (full-width, higher specificity) and added
  `#article-data-panels-skin` — proper styles for the on-page WAHwire feed
  panel (`wahwire.css` was never loaded on the article shell, so the feed
  rendered unstyled) plus a wider Participants/XP grid
- `tools/rnn-scripts/pending-news-articles.json` — appended event id (7/10)
- `README.md` + `docs/IMAGE_GENERATION_GUIDE.md` — added the portrait-reference
  rule (a known character in a generation MUST be pulled from `portraits/` as
  a reference, never described from scratch)

**Round 3 (layout, WAHwire fix, analysis page)**
- `index.html` + `Reputation-Matrix2/app/pages/wahwire/wahwire.js` — **WAHwire
  status filter fix**: both loaders accepted only `status:'canon'` or
  `_quality.validator:'wahwire-v2'`, but every post in `posts.json` carries the
  documented authored statuses `posted`/`generated`
  (`docs/CROSS_SYSTEM_UPDATES.md`), so **0 of 11 posts survived the filter and
  no article page anywhere showed a WAHwire panel**. Both filters now accept
  `canon`/`posted`/`generated`/wahwire-v2 (verified: 11/11 pass; the event,
  battle, and hanging-tree ids all index to their posts)
- `index.html` — **side panel removed on event + battle articles**: the
  `#battle-article-layout-fix` hack is replaced by `#record-article-layout`
  (`.article-layout.record-wide-layout`): full-width single column, no rail.
  The infobox + Contents now render inside the main column as a
  `.record-summary` band (`recordSummaryBand()`), and the archive toolboxes
  (Law & Culture, Link Graph, Connected Systems, Reader Controls) follow the
  exhibits as a `.rail-band` grid via `articleRail(..., {wide:true})` — nothing
  is lost, it just stops being a side panel. Other article types keep the rail
- `Reputation-Matrix2/data/articleAnalyses.json` — **+ Waluigi analysis page**
  `scorncrow_skirmish_waluigi_analysis` (6th record), per
  `docs/ARTICLE_ANALYSES.md` + `docs/article-analyses/README.md`: thesis
  ("the skirmish was an auction of attention the grove won by waiting"), 7
  claim-headed sections each with a grounded `sourceAnchor` (elixir label,
  three fanfares, Archie's unaudited return, deforestation as category error,
  the second swing offer — cross-filed against `the_tree_of_woe_engagement` —
  Eager's pin, the observation tower), signed verdict with recommendations,
  3-roll after-hours research desk (DC 3/4/5), 11 resolving `relatedArticles`.
  ~2,974 core words; discovery is data-driven via the event's
  **Investigate this further** panel; route
  `#/article-analysis/scorncrow_skirmish_waluigi_analysis`

**Round 4 (XP on Participants, checker repairs)**
- `index.html` — **XP now renders in the 👥 Participants section**: every
  participant card carries a `✦ +N XP this session` chip (per-person session
  total), and `xpAwardsForEvent()` gained a guarded join so a record with no
  XP of its own inherits a linked record's awards — the **event page** now
  shows the battle-filed Session XP block (+2,550 · 8 people) instead of an
  empty Participants-only panel. The join only fires when the page's own
  record/registry entry has no awards, so legacy events (e.g. the Tree of Woe,
  +1,840) can never double-count a co-filed battle set
- `Reputation-Matrix2/data/injuries.json` — **injury-table check repaired**
  (failure pre-existing at the base commit): rows 104–106, 118–119, 124–125,
  127–128 and 131–132 were transposed — a pure permutation, all 132 values
  present, no duplicates. Entries were sorted by `d100` as byte-exact block
  moves (no row content touched; file size unchanged);
  `generate-injury-table.py --check` passes
- `Reputation-Matrix2/tools/genkit/webui_template.html` — **local-paths check
  repaired** (pre-existing at base): the 6 fetch targets (`/state`, `/start`,
  `/stop`, `/overnight/start`, `/overnight/stop`, `/run-aux`) made
  page-relative — the gui.py dashboard is served at the server root, so they
  resolve to identical URLs; `check-local-paths.py` passes

## Events filed

```
EVENT  the_scorncrow_skirmish — "The Scorncrow Skirmish: Deforestation,
       Garlic Weapons, and Wario's Stalled Motorbike"
  date      30 Harvestide, 1040 BF — the overgrown grove, the night of the
            threshold storm (date chain walked from the prior event; not the
            world clock)
  location  The overgrown grove battlefield, Shadow Estate (Shadowfell)
  parties   markop, green_t, remi_akamatsu_full_backstory, wario,
            archie_miser, dan, eager, mossy, rattles, liberated_toads,
            scorncrow  (all ids resolve; 11 participants)
  length    6 sections / ~2,250 words · lead image + 3 section figures
  status    ongoing · aftermath + waluigiAssessment + reputationNotes present
  route     #/article/the_scorncrow_skirmish
```

## XP

Calculated from the transcript's beats and filed as `xpAwards[]` on the
**battle record** (`the_scorncrow_skirmish_battle`), so the XP block renders on
the battle page. Party total **2,550 XP across 8 people**:

| Character | `xpKey` | Cat | XP | For |
|---|---|---:|---:|---|
| Markop | `markop` | combat | 300 | Sole vanguard, bonked the Scorncrow when nobody else could take a hit |
| Markop | `markop` | survival | 200 | Survived as the only absorbent member |
| Remi | `remi` | combat | 250 | Declined the impaling swing, shot the tree, pulled the bat swarm |
| Remi | `remi` | survival | 180 | Waited out the quake, read the swing as the trap |
| Eager | `eager` | combat | 280 | Critical shortbow shot aimed at the roots to pin it |
| Green T | `greent` | survival | 200 | Giant-form observation tower, lifted Remi |
| Green T | `greent` | technique | 150 | Turned the giant form into an observation platform |
| Archie | `archie` | combat | 220 | Head-on engagement, literal deforestation, flew to Markop |
| Archie | `archie` | magic | 180 | Fire-armour barrier |
| Archie | `archie` | social | 120 | Reconciliation with Markop after presumed death |
| Dan | `originaldan` | combat | 150 | Guarded Archie from the bush |
| Dan | `originaldan` | loyalty | 100 | Held the guard post unasked |
| Mossy | `mossy` | combat | 120 | Silent advance on the tree |
| Wario | `wario` | social | 100 | Declared command, stalled the motorbike |

Rattles (kept off the line by plan) and the Liberated Toads (marched in song)
received none. Filed on the **battle** so it surfaces on the battle page; the
event page's XP block is fed from the same `xpAwardsForEvent()` lookup, so the
total shows in both.

## Index / RNN / cross-system

- **Index:** `latestUpdate` + `featuredArticle` ✓ · `SITE_UPDATES` prepended ✓
- **RNN:** pending list now 7/10 — no episode owed yet ✓
- **XSYS wahwire** — Wario post `wahwire_scorncrow_skirmish` (order 11),
  in-voice reaction, not a summary ✓
- **XSYS songs** — n/a — "We Are the Toads" already archived
  (`song_we_are_the_toads`, single `sourceId` preserved to its original event);
  the on-march lyric this session was a variation, no new entry
- **XSYS pond_patrol** — n/a — no docket-named Toad changed status/witness;
  Dan guarded Archie, the Toads marched and sang, no docket evidence or
  accountability event. Roster untouched
- **XSYS territory / POIs / currencies / books / bros / dynasties** — n/a —
  the grove remained contested (no lasting territory change); no currency,
  book, or dynasty involved

## Verification

- `python3 tools/check-all.py` — **ALL CHECKS PASS**, including the two
  formerly-failing ones repaired in round 4 (`local paths`, `injury table` —
  both failures were verified pre-existing at the base commit `a511bfc`)
- `python3 tools/check-exhibits.py` — 0 errors / 0 warnings
- `python3 tools/check-investigations.py` — 0 errors / 0 warnings
- `python3 tools/generate-injury-table.py --check` — OK: 132 temporary injury
  entries; roll sequence intact
- `articleAnalyses.json` — parses; identity checks pass (no duplicate analysis
  id, no duplicate `sourceArticle`, unique section ids, DCs 2–6, all
  `relatedArticles` resolve)
- `python3 tools/check-readability.py --analysis scorncrow_skirmish_waluigi_analysis`
  — **nothing flagged** (FRE 65.1, FK grade 8.6, longest drumbeat 3 fragments,
  healthy sentence-length mix)
- WAHwire filter simulated against real `posts.json` in Node: old filter kept
  0/11, new keeps 11/11; both `the_scorncrow_skirmish` and
  `the_scorncrow_skirmish_battle` index to the Wario post
- **Headless DOM run of the live app** (scripts executed against the served
  site): zero console/page errors on home, the event, the battle, the
  analysis, Markop's dossier, the events list, and the XP hub; the event page
  renders the Session XP block (+2,550 · 8 people) and 8 per-participant chips
  (500+350+430+100+520+250+280+120 = 2,550 ✓); the Tree of Woe page still
  shows only its own legacy +1,840 (no XP leak through the join)
- Inline `<script>` blocks in `index.html` pass syntax checks
- Preview served and assets return HTTP 200.

## Not done / open

- **Layout rework needs user eyes** — event and battle pages are now
  full-width with no side rail, the infobox/Contents moved into the main
  column, and the toolboxes sit in a bottom band. Verify on the preview:
  `#/article/the_scorncrow_skirmish` (WAHwire panel under the XP block,
  analysis link in **Investigate this further**) and
  `#/article/the_scorncrow_skirmish_battle` (Session XP 2,550, same wire
  panel). `#/article-analysis/scorncrow_skirmish_waluigi_analysis` for the new
  analysis page.
- **XP values** are a judgement (per `SESSION_FILING_PROCESS` step 4) drawn
  from the transcript beats — they were not stated by the GM, so the specific
  numbers are inferred and should be sanity-checked against the table's own
  award scale. Wired to the battle record, not the authoritative ledger.
- **Four generated images** could not be visually verified in this
  environment (no vision). They were built from the prompt sheet at
  `docs/IMAGE_GENERATION_GUIDE.md` process with a canon portrait per figure
  and are compressed, but the user should eyeball `scorncrow-01…04` on the
  live preview before considering the art final. Defects are to be fixed by
  **editing** the existing files (pass `images:[...]`), not rerolling.
- **Date** — resolved by walking the chain to the prior event (30 Harvestide
  night, same night as the threshold storm). The world clock is Aethel 5,
  1040 BF, which was deliberately not used verbatim.
- **RNN episode** — not owed (7/10 pending).
