# Run report — Character Sheets: a Foundry sheet behind every character, Disaster Inc. in public, the whole cast in debug mode

**Date:** 2026-10-03 · **Branch:** `arena/01a0feea-bik` → PR #89 · **Asked:** "we need sheets for mario and luigi and other people main cast — make sheets for all remaining people that don't have sheets — use the characters tab — we can make that a new system called sheets — maybe they only show for disaster inc members though but if debug mode in settings is enabled it displays them."

## What shipped

### 1. The sheets — `Reputation-Matrix2/actors/cast/` (152 actors + `import.json`)

Every one of the 190 character articles now resolves to a Foundry dnd5e actor or a stated reason it does not:

| Source | Count | Where |
| --- | --- | --- |
| live world export | 26 | `actors/worlds/midlands/` (unchanged) |
| PC intake | 4 | `actors/fvtt-Actor-*.json` (unchanged; Bowser's PC sheet stays his primary, `-NO-SPECIES` copies are not indexed) |
| 955 BF era | 2 | `actors/peachs-castle-955/` (unchanged) |
| **generated** | **152** | **`actors/cast/`, new** |
| skipped | 6 | `mike` (the GM), the four collectives, the Cosmic Jester — each with a reason in the index |

`tools/build-character-sheets.py` (new, deterministic, `--check` round-trips) builds the 152 from the article text and the XP ledger, reusing the 955 builder's `attack()`/`feat()`/`sid()` and the bridge's `combine()`. Rules it keeps: `type:"npc"`, unlinked tokens, no race/class/subclass/background items, no invented magic items, icons verified against the image library, **CR never above the ledger level** (Mario L5 → CR 5, Luigi L5 → CR 4, Kamek L2 → CR 2, Toriel L1 → CR 1). 34 main-cast sheets are hand-authored (`BESPOKE`: Mario, Luigi, Daisy, Kamek, King Boo, Kirby, Dedede, Meta Knight, E. Gadd, Mr. L, Bryan, Mystic Morel, Chief Thornpaw, Captain Toadette, Chancellor Toadsworth, Dan, Bones, Orangus Cornelius, Vivian Corvinarus, Sans, Papyrus, Toriel, Asgore, Flowey, King K. Rool, Captain Syrup, Speaker L, Evil Mario, Director Mario, Fawthful, Mimbus, Paulo, the Archivist, Marcus Ashford); the other 118 are archetype templates (soldier / officer / rogue / caster / priest / healer / scholar / noble / civilian / student / brute / monster / spirit / beast / hero) with weapons and features matched from the words.

**Evidence rule.** Every generated feature — bespoke or templated — records the article sentence it came from (`flags["waluipedia-sheets"].evidence`, mirrored in the index). The sheet page prints the list; `tools/check-sheets.py` re-finds every quote and fails if an article edit breaks one.

### 2. The site system — `assets/sheets/sheets.js` + `sheets.css` (global `CAST_SHEETS`), `Reputation-Matrix2/data/sheets.json`

* **Visibility** — `visible = entry.party === true || debugOn()`. `party` is derived by the builder from the XP ledger faction (`disaster_inc`, `disaster_inc_allies`) and the article's `affiliation`; 17 sheets qualify (Archie, Bones, Bowser, Dan the Toad, Eager, Green T, Hjumpik, Markop, Mossy, Remi, Roger, Ryan, Smoking J, Toad Lee, Usk, Waluigi, Wario). The checker fails if the committed flag disagrees with the rule.
* **Characters tab** — every public character's article gets a *Character sheet* panel (AC / HP / speed / abilities, open / download / all sheets, provenance line). Restricted characters get **nothing** in public — no stub, no lock. In debug mode every article gets the panel, restricted ones with a ribbon; skipped characters get a one-line *No sheet on purpose*.
* **`#/sheets`** — hero with counts, search, group chips, cards by faction; public shows the 17 and says how many more exist; debug shows all 184 under a striped **DEBUG MODE** banner.
* **`#/sheets/<id>`** — portrait, badges, *Download Foundry JSON* / *View raw* / **Mass Import URL**, then the actor file fetched and rendered as a classic stat block (NPC) or PC summary (class line, attacks, features behind *Show all*, spells by level, inventory), then *Evidence* and *Other sheets for this character*.
* **Wiring in `index.html`** — stylesheet + script tags, `'sheets'` in `DATA_FILES`, `#/sheets` Router branch (the reading desk's singular `#/sheet/<id>` is untouched — `SHEETS` was already its global, hence `CAST_SHEETS`), sidebar *📜 Character Sheets* with the visible count, the article panel next to `tokenSheetPanel`, Research Bureau kind `sheet` (public only; `toggleDebug()` now calls `CAST_SHEETS.refreshSearch()` so records follow the toggle), Settings → Developer *Character sheets* row, one `SITE_UPDATES` card.

### 3. Checks, tests, docs

* `tools/check-sheets.py` (coverage, files, NPC rules, CR ≤ level, verbatim quotes, party rule, packet, wiring, fresh build) — registered in `check-all` with `foundry-bridge.py check actors/cast` and `tools/tests/test-sheets-page.mjs` (60 checks, stub window, every indexed actor rendered). `tools/tests/sheets-live-smoke.mjs` (24 checks) boots the real `index.html` in jsdom and walks the routes with debug off and on.
* Docs: `docs/SHEETS_SYSTEM.md` (new), `actors/cast/README.md` (new), `actors/README.md`, `CROSS_SYSTEM_UPDATES.md` trigger row, `SESSION_FILING_PROCESS.md` (Step 3 checklist + Step 9 list + one-screen summary), root README docs table.
* Two slips from the previous run fixed on the way: `check-all` ran the 955 `combine --check` without `--world peachs-castle-955` (always stale), and `check-technology.py` / `test-technology-page.mjs` pinned `DATA_FILES` ending in `'technology']`.

## Verification

| Command | Result |
| --- | --- |
| `python3 tools/build-character-sheets.py --check` | ok (184 sheets, 152 generated, 17 party, 6 skipped) |
| `python3 tools/check-sheets.py` | ok |
| `python3 tools/foundry-bridge.py check Reputation-Matrix2/actors/cast` | 152 actors, 0 errors, 0 warnings |
| `python3 tools/sanitize-foundry-actor.py --check Reputation-Matrix2/actors/cast/fvtt-Actor-*.json` | clean |
| `WMI_EXPORT=Reputation-Matrix2/actors/cast/import.json node tools/tests/test-mass-import-module.mjs` | passes (the packet imports through the module's upsert path) |
| `node tools/tests/test-sheets-page.mjs` | 60 passed |
| `node tools/tests/sheets-live-smoke.mjs` (server on :8765) | 24 passed, no runtime errors |
| `node tools/tests/technology-live-smoke.mjs`, `test-technology-page.mjs`, `test-characters-page.mjs`, `test-hub-pages.mjs`, `test-nav-collapse.mjs`, `test-search-quality.mjs`, `test-sheet-live.mjs`, `test-appearance-chronology.mjs` | pass |
| `node tools/tests/test-search-live.mjs` | 33/34 — the 1 failure (`"wario head fight"` promo rank) is pre-existing, reproduced with the sheet changes stashed |
| `python3 tools/check-all.py` | only the pre-existing *judgement in the grove* FAIL remains |

## Honest limits

* **118 of the 152 are templated.** They are honest D&D stat blocks at the right CR with weapons and features keyed to real sentences, but the keying is keyword matching on whole words and phrases, not reading. The `--list` table is the review surface; a wrong archetype is one `ROLE_OVERRIDES` line.
* **"Disaster Inc. members" is read from the data.** Roger, Ryan and Smoking J are public because their `affiliation` says Disaster Inc. (situational / separated); if that is wrong the fix is the article's affiliation, not the sheet.
* **Restricted ≠ secret.** The files are plain JSON in a public repository; the restriction is what the site shows at the table. The list page states the total count on purpose so the system is discoverable.
* **Existing sheets were not touched** — the known ledger mismatches on live/intake sheets (Green T L12 vs ledger 5, Hjumpik L6 vs 7, Wario L7 vs 6, Lady Aurelian CR 8 vs L3) stand, as before.
* No screenshots: the sandbox has no browser. Rendering was verified by jsdom text dumps and the two test suites.
