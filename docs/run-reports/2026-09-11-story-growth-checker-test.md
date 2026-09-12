# Run report — story-growth checker test on The Garden Above the Fire

Date: 2026-09-11
Branch: `arena/01a08916-bik`

## 1. Files created or edited

CREATED

- `docs/run-reports/2026-09-11-story-growth-checker-test.md` — this report.

EDITED

- `Reputation-Matrix2/data/events.json` — amended `the_lava_bridge_ambush_and_the_blue_luigi` with sequel status, Garden backlink, resolved-search aftermath, notable feature, and Waluigi addendum.
- `Reputation-Matrix2/data/characters.json` — amended eight Garden-connected character pages: `luigi`, `mario`, `waluigi`, `wario`, `mona`, `ashley`, `jimmy_t`; added useful Garden summaries/sections/reader paths where the rescue changed status, witness role, or emotional context.
- `Reputation-Matrix2/data/locations.json` — amended `bowsers_mushroom_compound` as both ambush and rescue site; added missing reader paths from `dr_toads_star_hill_clinic` to `dr_toad`, `kat`, and `ana`.

GENERATED

- None.

## 2. Checker test and amendments

SOURCE EVENT

- `the_garden_above_the_fire` — "The Garden Above the Fire"
- Checker command: `python3 tools/check-story-growth.py --latest --max-rows 30`
- Result: PASS/advisory. It found the active investigation `mario_charred_note_file` and correctly queued older connected pages, led by `the_lava_bridge_ambush_and_the_blue_luigi`, plus Garden participants and locations.

MANUAL AMENDMENTS APPLIED

- `the_lava_bridge_ambush_and_the_blue_luigi` — no longer leaves Luigi as wholly missing without sequel context; now points to the Garden rescue while keeping Mario, courier, and physical-note questions open.
- `luigi` — status now reflects recovery alive, clinic treatment, and the two-week rest order; summary and section preserve the remembered note line and the superstars moment.
- `mario` — adds the Garden as an absence beat, not a return: Luigi's "are we still superstars?" question belongs on Mario's page because Mario did not answer it.
- `waluigi` — adds first-person witness consequence: Waluigi asked for the note line and answered "We are still superstars."
- `wario` — records the practical rescue work: following the lead, lifting Luigi out, and carrying him to clinic.
- `mona`, `ashley`, `jimmy_t` — extend their compound-night pages from fraud/interrogation roles into rescue logistics and treatment routing.
- `bowsers_mushroom_compound` — reclassified as an ambush site that also preserved the rescue path through its outflow/tunnels.
- `dr_toads_star_hill_clinic` — added missing reader paths to Garden-connected clinic participants.

## 3. Events filed

No new event filed this run. Existing event `the_garden_above_the_fire` remained the latest source article for the checker test.

## 4. XP awarded

No XP awarded this run.

## 5. Verification

| Command | Result |
|---|---|
| `python3 tools/check-story-growth.py --latest --max-rows 30` | PASS/advisory; expected review queue surfaced and confirmed the checker catches older connected pages |
| `python3 -m json.tool Reputation-Matrix2/data/events.json >/dev/null` | PASS |
| `python3 -m json.tool Reputation-Matrix2/data/characters.json >/dev/null` | PASS |
| `python3 -m json.tool Reputation-Matrix2/data/locations.json >/dev/null` | PASS |
| `git diff --check` | PASS |
| `python3 tools/check-all.py` | PASS — all requested checks passed |

## 6. Not done / open

- The checker remains advisory. It still lists broad or already-updated connected pages when their text contains words such as "missing" or "disappearance" in legitimate arc context.
- No blind reciprocal-link sweep was performed. Broader pages such as `bowser`, `bowsers_castle`, `mr_l`, `promo_mario_newspaper`, `charred_note_at_waluigis_door`, and arc peers were deliberately left alone unless the Garden filing changed what that page knows.
