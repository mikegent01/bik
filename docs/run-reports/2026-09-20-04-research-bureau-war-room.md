# Run report — the Research Bureau, the War-Room Wall, and the Dossier Spread (2026-09-20)

Directive from the front office: the search system and the event and battle
pages are "boring arrays" — overhaul them, custom CSS, new AI-generated
images, new features, substantially different. Delivered as three named
renovations, all presentation-side, no canon writes.

## The plan as filed (then executed, same turn)

1. **Search → the Research Bureau.** Flat result stream becomes filing-tray
   groups (drawers) by category, each row carrying a 48px art thumbnail;
   header band gets the generated reading-room plate; new features: recent
   queries (reader-local key) and the 🎲 Lucky filing that opens the top
   result. Engine untouched — the twelve pure functions
   `test-search-quality.mjs` extracts by signature never moved.
2. **Battlefield → the War-Room Wall.** Conflict cards become war boards:
   status ribbon wars, faction-combatant strips, major phases as a numbered
   front-line instead of bare rows, per-conflict outcome tallies, and the
   generated war-table banner with counters. Battle tiles and the battle
   detail page become after-action reports: outcome banners clipped like
   campaign ribbons (house `win/pyrrhic/draw/loss/open` vocabulary),
   casualties as a red-ink ledger, tactical notes as a pinned field note.
3. **Event pages → the Dossier Spread.** Filing-room masthead band (v filing
   number derived from the date, era, spread, plate count, wax-seal stamp),
   turn-the-page ribbon to the older/newer filing at top AND bottom, and a
   scoped `.dossier-event` spread: drop cap on the first paragraph,
   chapter rules on h2s, blockquotes as pinned notes. Rotators, Field
   Plates and Waluigi's Cut mounts untouched.

## CREATED

- `Reputation-Matrix2/assets/images/branding/research-bureau.jpg` —
  GENERATED with AI. Reading-room card-catalog desk; the search panel's
  header band.
- `Reputation-Matrix2/assets/images/branding/war-room.jpg` —
  GENERATED with AI. The war-table with pinned map; the battlefield wall's
  masthead.
- `Reputation-Matrix2/assets/images/branding/dossier-ribbon.jpg` —
  GENERATED with AI. Manila folder edge + wax seal; the event-page band.
- `docs/run-reports/2026-09-20-04-research-bureau-war-room.md` — this report.

All three plates are referenced by the CSS in this same PR (image rule);
the chronology suite now hard-asserts both files and references.

## EDITED

- `index.html` —
  - search: `searchResultThumb()`, `SEARCH_RECENTS_KEY` +
    read/save recents, `renderResults()` now emits `search-tray` drawers
    (flat `data-i` order preserved for keyboard nav) + 🎲 Lucky filing,
    `renderSearchHelp()` gains recents, `bindSearchChips()` binds recent
    and lucky click targets, `runSearch()` persists the query.
  - events: `eventFilingNo()`, `eventFilingNav()`, `eventDossierBand()`;
    main article template inserts band + top nav for `typeKey==='events'`
    and adds the `dossier-event` scope class; bottom nav after
    `sessionNavHtml`.
  - battlefield: `view_battlefield()` rewritten into war boards + tally
    chips + war-count band; `view_mbattle()` becomes the after-action
    report (`.war-ledger`, `.war-note`, `.war-outcome` ribbon aligned to
    `BATTLE_OUTCOMES` classes).
- `Reputation-Matrix2/app/styles/waluipedia.css` — the three-block bureau/
  dossier/war-room section appended at end: `.search-tray*`, `.res-thumb*`,
  `.search-recents`, `.search-lucky`, `.dossier-*`, `.war-band`,
  `.war-board`, `.war-front*`, `.war-outcome`, `.war-ledger`, `.war-note`,
  `.after-action`, plus a mobile squeeze at 720px. All colors ride the
  active skin's vars; image backgrounds sit under gradients so dark,
  light and campaign skins all keep reading.
- `tools/tests/test-appearance-chronology.mjs` — 22 new contracts
  (renderer emits trays/thumbs/dossier/war boards; recents key is
  reader-local; CSS covers the new furniture; brand plates exist on disk
  and are referenced). 200 → 222 checks.

## GENERATED (regenerated)

- None. `track-filing-updates.py --write`: nothing changed (no filing
  prose moved).

## Tests

- inline scripts parse OK.
- `test-appearance-chronology.mjs` — 222 ok / 0 fail.
- `test-search-quality.mjs` — 70 ok / 0 fail (engine signatures intact).
- `test-session-nav.mjs` — 17 ok / 0 fail. `test-hub-pages.mjs` — 34 ok.
- `check-battles.py` — PASS (the one legacy `canoloth` link is the known
  dangling ref, unchanged).
- `python3 tools/check-all.py` — **75 PASS / 0 FAIL**.

Infra note: `jsdom` vanished from `node_modules` between long runs twice
this turn (suite headers pin `npm install --no-save jsdom@26.1.0`;
reinstall restored `alliance cache` + `map lenses` immediately). Nothing
in the diff implicates it.

## Events filed / XP awarded

None (renovation round — no new filings, no XP minted).

## MP cost

0.

## Worked example

`tabletop-reference.html` GM TOOLS — unchanged this round.

## Known leftovers / next session

- The search dropdown still caps drawn rows at 60 per keystroke by design;
  the trays inherit that. A "show all in tray" expansion could arrive with
  the Lucky filing's sibling (the filing cabinet drawer pull).
- The dossier masthead stamps a *display* filing number; a real filing
  register (sequential numbers in `events.json`) is a data decision for
  the filing room, not a renderer decision.
- `atlas-modes-smoke` density-unroll flake is pre-existing, unrelated to
  this round (fails at base tree too), and outside the check-all gate.
