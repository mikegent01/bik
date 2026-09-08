# Session loot + character sheets — 2026-09-08

## What shipped
The live bridge between sessions and the wiki, without replacing any item
system: one loot log feeds the site instantly and Foundry post-session.

- **Character-sheet viewer** (`#/sheet/<slug>`, roster at `#/sheet`): live
  renders of the 7 party actor JSONs (waluigi, dan, hjumpik, toad-lee,
  aurelian, azure, motorbike) — HP/AC/speed, abilities, currency, gear
  grouped by type, spells, features. Files are cache-busted on every view,
  so a session edit shows on refresh. Character articles with a sheet gain
  an "Open character sheet" chip.
- **Session loot log** (`data/session-loot.json`): `{id, at, session,
  eventId, characterId, characterName, item, qty, source, note}`. Filed
  mid-session via `hub_cli.py loot`, `POST /api/loot/add`, or direct JSON
  edit; the sheet's loot panel polls it every 30s (self-cleaning timer).
  Writes are atomic, so the site never reads a partial log.
- **Post-session piles** (`tools/session-loot-to-pile.py --event|--session`):
  groups the log by character and writes one Foundry item-pile actor each
  (type guessing + receipts preserved, copy relabeled "session loot").
  Run as part of the event-making process; DM imports, players loot live.
- **Inventory extraction**: the 127KB `INVENTORY_SYSTEM` blob moved from
  `index.html` to `data/inventory.json`, loaded through `DATA_FILES` and
  merged at boot. Byte-faithful to the committed blob; all 22 read sites
  untouched.

## Verification
- `test-session-loot.py` (NEW, 37 checks, in check-all): loot validation,
  append round-trip + id sequencing, pile adapter shape, real pile build,
  inventory structure + referential integrity, index.html wiring needles,
  actor-file existence for all 7 slugs.
- `test-sheet-live.mjs` (NEW, 11 checks, needs :8765): boots the real page,
  opens roster + waluigi sheet + waluigi article; proves the viewer renders
  and the extraction kept inventory panels working.
- Full `check-all` green; search-live boot 34/34.

## Files
- `index.html`: DATA_FILES += inventory/session-loot, boot merge, `#/sheet`
  route, `view_sheet` + live loot panel, article sheet chip.
- `Reputation-Matrix2/data/inventory.json` (NEW, extracted),
  `Reputation-Matrix2/data/session-loot.json` (NEW, `[]`).
- `Reputation-Matrix2/tools/hub/hubcore/loot.py` (NEW),
  `hubcore/paths.py` (+LOOT_PATH), `server.py` (+loot/add),
  `hub_cli.py` (+loot), `hub/README.md` (endpoint + CLI docs).
- `tools/session-loot-to-pile.py` (NEW), the two tests, `check-all.py` entry.

## Notes
- Foundry cannot watch files, so nothing pushes into a live session: the
  site updates in real time from JSON, Foundry receives piles post-session.
  No dnd5e or shop mechanics were replaced.
- The older `lady-aurelian-corvinarus-ADE...` export is superseded by the
  `-PC` file and is not in the viewer roster.
