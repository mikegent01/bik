# Intake Note — `Toadslist.xlsx` → Liberated Toads Command

**Date:** 2026-08-19
**Source:** `Reputation-Matrix2/Liberated Toads work/Toadslist.xlsx` (3 sheets)
**Scope:** the Liberated Toads Command page (`Reputation-Matrix2/app/pages/liberated-toads-system/`) and the canon record `data/liberatedToadsSystem.json`.

## What the workbook carries

| Sheet | Contents |
|---|---|
| `Sheet1` | The roster: 75 named toads with affiliation, weapon, seen-by-players flag, roster number |
| `Cohort List` | Research threads per affiliation (Barrel Toads, Siege of Raventree, Vigilance, Aegis prison break) + notes on Spore 5 ("5 powerful spore creatures, not toads") and the Lillypads ("like Power Rangers, but vigilantes") |
| `Leadership Positions` | The seven-position structure and the six voting rules |

## What shipped

1. **Roster replaced.** The page no longer generates a fake 150+ toad roster with invented cohorts (Chroniclers/Crafters/Wardens/Menders/Scouts). The roster is the 75 named toads, grouped by their workbook affiliation. The 150-freed / 158-escaped figures survive only as battle-record context in the timeline and lore.
2. **Voting rebuilt to the workbook's rules.** Governance tab renders the seven positions with their appointment/election flows; Voting tab renders the six rules verbatim, the electorate math (tiers 6+7 = 40 of 75), a table-exercise vote simulator using bloc weights, and a Record of Votes. Vote tallies appear only where a repo source carries them (`data/factions.json`, `data/liberatedToadsSystem.json` → recentVotes/activeVotes); where the record is silent the card says "no tally recorded" rather than inventing numbers.
3. **Portraits.** Every toad has a portrait:
   - 22 individual PNGs — 17 from the user's `Liberated Toads work/` art box (danm, tpoadlee, salam, luckytt, cree, bearr, Spoky, bio, Axie, frea, speakerrivers, na, Rawra, reag, Bluey, Slinat, Swig) + 5 legacy pieces from `toads/` (eager, roger, ryan, bones, dewdrop).
   - The remaining 53 toads are sliced from two AI-generated 6×6 sprite sheets (`assets/images/toads/roster/sheet_a.png`, `sheet_b.png`) generated in the style of the user's own portraits. Slicing is CSS-percentage based (6×6 grid, no image processing), in `roster-menu.js` → `toadPortraitStyle()`.
4. **Canon record updated.** `data/liberatedToadsSystem.json` gains a `toadslistIntake` section carrying the roster, affiliation counts, the seven positions, the six voting rules and the cohort-list notes.
5. **Old page preserved where it was right.** The Accountability Docket and the days-5–21 timeline were canon (cited in `docs/notes/TOAD_CASE_REBUILD_PLAN.md`) and moved verbatim into `legacy-toads-data.js`. The stale hardcoded "Active Vote" overview block and the duplicated vote IDs (two different votes both numbered V-2021-002) are gone; the state of the vote is now derived from the record.

## Known open items

- **Three unmapped art files.** `lyio.png`, `six.png`, `sniop.png` in the work folder could not be confidently matched to roster names (no vision on the intake side; names don't match roster entries phonetically). If one of them is Kyo / Mechal / Oiqie / Somkin J (or any other toad currently on a sprite sheet), swap that toad's entry in `data/liberated-toads/toadslist-data.js` from `{ kind: 'sheet', ... }` to `{ kind: 'file', file: '...' }` and copy the PNG into `assets/images/toads/roster/`.
- **Sprite-sheet cell drift.** The AI sheets were generated to per-cell weapon specifications, but cells were not visually verified. If a toad's portrait doesn't match its weapon, adjust the `cell` index (row-major, 0–35) in the same data file — one line per fix.
- **Sheet B filler.** Cells 17–35 of `sheet_b.png` are generic cohort extras, intentionally unmapped.
- **Teachers tier.** The Teachers affiliation is not placed in the workbook's seven-position table; it is rendered as "outside the structure (and outside the electorate)" pending a ruling. If Teachers belong in tier 7, change `tier: null` to `tier: 7` in `AFFILIATION_META` — the electorate count then moves 40 → 41 automatically.

## File map

| File | Role |
|---|---|
| `data/liberated-toads/toadslist-data.js` | Single source of truth: roster, affiliations, positions, rules, vote records, portrait map |
| `app/pages/liberated-toads-system/roster-menu.js` | The Cohort Menu (cards, filters, detail drawer, sprite slicing) |
| `app/pages/liberated-toads-system/governance-voting.js` | Seven-position ladder, voting rules, electorate, simulator, vote records |
| `app/pages/liberated-toads-system/legacy-toads-data.js` | Docket + timeline, preserved verbatim |
| `app/pages/liberated-toads-system/liberated-toads-system.js` | Orchestrator: stats from real roster, docket/timeline renderers, shop.js compatibility exports |
| `assets/images/toads/roster/` | Portraits, sprite sheets, scene banner |
