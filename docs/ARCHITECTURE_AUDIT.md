# Waluipedia Architecture Audit

**Date:** 2026-08-05  
**Branch:** `arena/019fcf0d-bik`

## Executive summary

The repository is now organized around a usable three-layer model:

```text
Reputation-Matrix2/
├── app/
│   ├── components/       reusable UI pieces
│   ├── pages/            page-level UI, HTML, and page assets
│   └── systems/          cross-page game systems
├── data/                 thematic data and aggregators
├── assets/               grouped media
└── tools/                authoring/build utilities
```

The migration has materially improved navigation: there are now **42 grouped page directories**, **10 system modules under `app/systems/`**, and the major feature families are no longer mixed together at the application root.

The root of `Reputation-Matrix2` still contains approximately 171 JavaScript files. That is expected at this stage: many are shared data modules, legacy adapters, generated records, or cross-system dependencies. They should not be moved automatically merely to make the directory look smaller.

## Systems that fit Waluipedia especially well

These systems reinforce Waluipedia's core identity: an in-world archive that records history, relationships, evidence, consequences, and evolving world state.

### 1. Archive and story systems — keep and expand

- Events and chronicles
- Timeline and archive prose
- WAHwire / Assembly records
- Newspaper and intelligence reports
- Books and library
- Field journal
- Rumors and intel

These systems work because they turn play into a persistent historical record. They should share a common article renderer, metadata schema, Markdown formatter, backlinks, people/location chips, and “what changed” panels.

### 2. Quest and consequence systems — keep and deepen

- Quest ledger
- Quest arcs
- Mission Control
- Personal quests
- Faction requests
- Quest consequence records

These are a strong fit because Waluipedia can be both encyclopedia and campaign control room. The next improvement should be a shared `QuestRecord` schema with:

- arc and prerequisite links
- current state
- decision/outcome records
- faction and character effects
- deadlines
- evidence links
- next recommended actions

### 3. Faction, reputation, and politics — keep and integrate

- Faction directory
- Reputation matrix
- Alliances
- Politics
- Treaties
- Societal values
- Laws and legal systems
- Imperial/Legion pressure systems

These systems make the archive feel alive. They should converge on one faction identity registry rather than maintaining multiple overlapping faction records.

### 4. World-state systems — keep, but centralize

- Calendar
- Maps and map analysis
- Battlefield
- Plagues
- Species/population
- Research and technology
- Currency and commerce

These are useful when their changes feed back into articles, quests, factions, and the timeline. They should emit a small set of durable world-state events instead of each system inventing its own update format.

### 5. Character and relationship systems — keep

- Profiles
- Family tree
- Relations
- Character special systems
- Party portraits and dossiers

These are valuable because they let readers navigate from a story to the people involved and then back to their history, factions, quests, and relationships.

## Systems to review before expanding

These should not be deleted, but they need ownership and an explicit reason to exist.

| Area | Review question |
|---|---|
| Multiple common/shared files | Which one is authoritative: `common.js`, `common-1.js`, or system-specific helpers? |
| Multiple shop generations | Is the active commerce implementation separate from backups and compatibility pages? |
| Duplicate character portraits | Which portrait root is canonical, and which copies are legacy? |
| Multiple faction registries | Can all faction pages consume one registry and one image resolver? |
| Old standalone pages | Is each page a live route, redirect, historical artifact, or unused prototype? |
| Generated JSON/cache output | Is it source data, generated data, or disposable build output? |
| Legacy map adapters | Can old map pages consume the current map grouping system? |
| Duplicate event/assembly data | Which data file is authoritative and which files are import adapters? |
| `quests-data-1.js` and suffixed files | Are these old snapshots or still-used content? |
| Large inline `index.html` | Which route renderer should be extracted next? |

## Candidates to retire or isolate

Do not delete these without a final reference scan, but they are likely candidates for `legacy/`, `archive/`, or removal:

- Backup files such as `shop-data_backup.js` and `currency.js.bak`
- Generated Hub output under `tools/hub/.hub-out/`
- Vite cache under `timeline/.vite/`
- Old standalone redirect pages after public URL compatibility is confirmed
- Suffixed data snapshots such as `quests-data-1.js`
- Duplicate root portrait mirrors after hashes and references are compared
- Abandoned prototype systems with no route, import, or HTML entrypoint

## Future systems worth adding

### Archive infrastructure

- Unified article schema validator
- Cross-reference/backlink graph
- “Updated because of” change ledger
- Source/evidence panel
- Archive confidence and canon status
- Search facets for date, faction, location, character, and event

### Quest infrastructure

- Decision history
- Quest recommendations
- Branch visibility and locked outcomes
- Deadline consequences
- Character fatigue and assignment suitability
- Faction reaction previews
- Automatic timeline/news updates after resolution

### World simulation

- Daily world-state tick
- Faction action queue
- Market price changes driven by events
- Regional plague/weather/economic effects
- Map changes generated from battle and political outcomes

### Reader experience

- “Read this story first” guided paths
- Campaign recap generator
- Character relationship graph
- Faction dossier comparison
- Timeline playback
- Session/event digest
- Mobile archive layout
- Print/export view for a complete campaign dossier

## Systems that should not become Waluipedia core

These can remain as optional subsystems, but they should not dictate the main architecture:

- Purely transactional shop mechanics
- Experimental mini-games without archive consequences
- One-off prototype pages
- Duplicate standalone visualizers
- Generated caches
- Systems that never produce a record, relationship, state change, or useful reader-facing article

The shop can remain integrated as a supporting economy layer, but Waluipedia should not become primarily a storefront. Its strongest identity is a living archive with game-state consequences.

## Recommended next architectural priorities

1. Extract route rendering from the monolithic root `index.html`.
2. Create a shared article renderer for events, books, newspaper entries, journals, and faction records.
3. Create one faction registry and one canonical asset resolver.
4. Create one quest record/outcome schema.
5. Add a path/reference audit to CI or a repository utility command.
6. Audit and isolate backups, caches, and generated outputs.
7. Deduplicate root and `Reputation-Matrix2/portraits/` after hash comparison.
8. Add a small smoke-test matrix for the highest-value routes.

## Integrity checks performed for this audit

- Confirmed the grouped page layer exists under `app/pages/`.
- Confirmed the system layer exists under `app/systems/`.
- Confirmed data and assets have thematic subdirectories.
- Ran JavaScript syntax checks during the preceding migration batches.
- Used repository-wide reference scans to repair moved module and asset paths.

## Definition of “finished”

The cleanup should be considered complete when:

- Root application files are limited to the shell, compatibility entrypoints, and clearly documented shared modules.
- Every active page belongs to a page directory.
- Every major system has one owner and one public entrypoint.
- Data aggregators are separate from UI renderers.
- Assets are categorized and have no unexplained duplicate roots.
- Backups and generated output are isolated.
- A path audit returns zero missing local references, excluding documented dynamic templates.
- The main archive, quest, faction, map, commerce, and library routes pass smoke tests.
