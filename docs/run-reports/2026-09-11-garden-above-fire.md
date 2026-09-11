# Run report — The Garden Above the Fire

Date: 2026-09-11
Branch: `arena/01a08916-bik`

## Files

CREATED
  Reputation-Matrix2/assets/images/events/garden-above-fire/garden-above-fire-01-superstars.jpg — generated symbolic event art: Luigi's cap, bandages, the folded note, Star Hill clinic aftermath; referenced by the event and home page.
  docs/run-reports/2026-09-11-garden-above-fire.md — this run report.

EDITED
  Reputation-Matrix2/data/events.json — appended `the_garden_above_the_fire`, a sequel/arc-close session event to `the_lava_bridge_ambush_and_the_blue_luigi`; 9 sections, 11 participants, 3 event-only XP awards.
  Reputation-Matrix2/data/characters.json — added `kat`, `ana`, and `dr_toad` so all named new witnesses/caregivers resolve.
  Reputation-Matrix2/data/locations.json — added `dr_toads_star_hill_clinic` as the Star Hill treatment location.
  Reputation-Matrix2/data/props.json — added `prop_courier_note_garden_above_fire` and `prop_dr_toad_luigi_burn_chart` for the recovered note text and Dr. Toad's chart.
  Reputation-Matrix2/data/investigations.json — amended `mario_charred_note_file`: added session `s_garden_above_fire`, exhibits `ex_garden_above_fire_note` / `ex_dr_toad_clinic_chart`, thread `th_garden_above_fire`, closed the old recover-the-reader lead by proxy, and opened `lead_find_garden_above_fire`.
  Reputation-Matrix2/data/mainPage.json — set the new event as `featuredArticle` and `latestUpdate`, updated the Mario campaign cover, and prepended the new image to the field gallery.
  Reputation-Matrix2/data/wahwire/posts.json — added `wahwire_garden_above_fire_superstars` in Waluigi's voice.
  index.html — prepended the new `SITE_UPDATES` entry for `the_garden_above_the_fire`.
  tools/rnn-scripts/pending-news-articles.json — appended the new event to the RNN pending list.
  tools/tests/test-planar-map.mjs — updated the Disaster Inc. party-event bucket expectation from 74 to 75 because the new Waluigi/Wario rescue filing now belongs to that filtered journey set.

GENERATED
  Reputation-Matrix2/assets/images/events/garden-above-fire/garden-above-fire-01-superstars.jpg — generated with the image tool, then referenced by `events.json` and `mainPage.json`; do not hand-edit.

## Events filed

EVENT  `the_garden_above_the_fire` — "The Garden Above the Fire: Luigi Recovered, the Superstars Answer, and Dr. Toad's Clinic"
  date      18 Harvestide, 1035 BF — night, immediately after the lava-bridge ambush and blue-Luigi interrogation
  timeCode  TC:1035-08-18/MAT
  location  `bowsers_mushroom_compound` vicinity + `dr_toads_star_hill_clinic` (new)
  parties   `waluigi`, `luigi`, `wario`, `mona`, `ashley`, `jimmy_t`, `kat`, `ana`, `dr_toad`, `mario` as absent center, plus unnamed blue-Luigi impostor
  length    9 sections / 2,944 readability-audit words
  status    resolved rescue / open next-arc lead
  route     `#/article/the_garden_above_the_fire`

Critical quote preserved in the filing:

> "We are still superstars," Waluigi whispered. "...We're still superstars."

## XP awarded

These are filed on the event only. I did not mutate the authoritative XP ledger totals.

| Character | `xpKey` | Category | XP | For |
|---|---|---|---:|---|
| Waluigi | `waluigi` | loyalty | 250 | Chose the live lead despite the impostor's unreliability, found Luigi, and answered the superstars question when Mario was absent. |
| Luigi | `luigi` | survival | 200 | Survived the lava-falls aftermath long enough to guide the rescue and recall the courier note's key line. |
| Wario | `wario` | loyalty | 150 | Kept the crew skeptical but moving, physically carried Luigi to treatment, and forced the clinic-room truth without grandstanding. |
| **Total** | | | **600** | across 3 characters |

## Index / home / RNN

- Home feed: DONE — `events.json` last-appended event is `the_garden_above_the_fire`.
- `mainPage.json`: DONE — latest and featured article point to `the_garden_above_the_fire`.
- `SITE_UPDATES`: DONE — new entry prepended in `index.html`.
- WAHwire: DONE — `wahwire_garden_above_fire_superstars` posted.
- RNN pending: DONE — pending list is 1/10 after appending this event.
- RNN episode: NOT CUT — cadence is batching; `python3 tools/build-rnn-broadcast.py --unaired` reports a broader unaired backlog, but this run only adds one pending event.

## Cross-system pass

| Trigger | Result |
|---|---|
| Exhibits / paper named in prose | DONE — note addendum and clinic chart filed as props and wired into prose/investigation. |
| Investigation | DONE — `mario_charred_note_file` amended with new session, exhibits, thread, and lead. |
| WAHwire | DONE — one post added. |
| RNN pending | DONE — one pending entry added; no broadcast cut. |
| Location / map | DEFERRED — new clinic location filed, but no tactical map POI added in this pass; Star Hill placement can be handled in a future map pass. |
| Pond Patrol / Regal Diet / dynasties / territory | n/a — no roster, Diet, succession, or territorial-control change. |
| Bros attacks | n/a — no new cooperative technique named. |
| Songs archive | n/a — the Mario/Luigi hallway lines and superstars line are filed as testimony/dialogue, not as a named performed song. |
| Books / currency / shop logistics | n/a — no book, currency, or shop artifact changed. |
| Dossier assessments | n/a — no faction standing wording moved in this filing. |

## Verification

| Command | Result |
|---|---|
| JSON parse check for touched data files | PASS |
| `python3 tools/check-exhibits.py` | PASS — 0 errors, 1 existing inventory-parser warning |
| `python3 tools/check-investigations.py` | PASS — 0 errors, 4 existing warnings for old active-with-no-exhibit stubs |
| `python3 tools/check-rolls.py` | PASS — 0 errors, 12 existing item-parser warnings |
| `python3 tools/check-timecodes.py --strict` | PASS |
| `python3 tools/check-home-feed.py` | PASS — latestUpdate and last-appended event both `the_garden_above_the_fire` |
| `node tools/tests/test-home-feed-render.mjs` | PASS — 15 passed, 0 failed (local server on port 8765) |
| `python3 tools/check-readability.py --event the_garden_above_the_fire` | PASS/advisory — nothing flagged; machine-gun rhythm noted in several short emotional sections intentionally |
| `python3 tools/check-references.py` | PASS — 406 legacy warnings, no new missing image/reference errors |
| `node tools/tests/test-planar-map.mjs` | PASS — 49 passed, 0 failed |
| `python3 tools/check-all.py` | PASS — all requested checks passed |
| `git diff --check` | PASS |

## Not done / open

- The physical courier note remains unrecovered; only Luigi's remembered wording is now filed.
- The next arc lead is open: identify and search "the garden above the fire."
- The blue-Luigi impostor is still unnamed and still needs a custody/name follow-up.
- I did not add a Star Hill clinic tactical-map POI in this pass.
- I did not cut a new RNN episode; this filing only moves the pending list to 1/10.
- I did not run a live browser article click-through beyond the home-feed render test.
