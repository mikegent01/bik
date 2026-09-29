# Run report — Waluipedia Chat replay desk

**Filed:** 2026-09-29
**Branch:** `arena/01a0eb1a-bik`

## Files created or edited

### Created

- `chatroom.html` — standalone, accessible three-pane Waluipedia Chat shell:
  canonical-character picker, local conversation log, replay picker, memory
  panel, lore notebook, and import/export controls.
- `chatroom.css` — responsive `.cr-*`-scoped light chat surface, with a
  drawer layout on small screens and no styles shared with archive pages.
- `chatroom.mjs` — page controller: canonical-data loading, local threads,
  source-grounded draft replies, character/global memory, replay orchestration,
  lore-note CRUD, and JSON backup/merge UI.
- `chatroom-data.mjs` — DOM-free archive/state helpers, bounded import
  normalisation, merge semantics, participant extraction, and canonical data
  loaders.
- `docs/CHATROOM_GUIDE.md` — source-of-truth map, canon boundary, local
  storage/import contract, and verification/manual smoke procedure.
- `tools/tests/chatroom-state.mjs` — regression test for state normalisation,
  cross-chat memory scoping, newest-record import merging, and replay
  perspective extraction.

### Edited

- `index.html` — adds **Waluipedia Chat** to Tools & Account so the standalone
  desk is discoverable from the archive shell.
- `README.md` — routes contributors to the new guide and maps `chatroom.html`
  in the project structure.
- `Reputation-Matrix2/README.md` — adds the Chat desk to the systems
  source-of-truth table; canonical records remain read-only and local data has
  no generated/canonical output.

## Events filed

No campaign event, battle, investigation, character state, canonical lore, or
props were filed or changed. The replay picker reads existing records only.
Its default cutting-lane entry is the existing battle
`feyward_woodfellow_vs_the_treant` (*Woodfellow vs. the Treant*).

## XP awarded

No XP awarded this run.

## What changed for readers

- Character profiles in the picker are loaded from the actual canonical
  `characters.json` registry rather than recreated placeholder accounts.
- Conversations, memories, and lore notes stay browser-local under
  `waluipedia.chatroom.v1`; **Export archive** downloads the entire local
  archive and **Import archive** validates and merges it by stable id.
- `remember:` in a message saves a fact to the active character/perspective;
  it then appears in compatible future threads. The inspector also supports
  explicit create/delete memory actions.
- Replays retain a source filing and a named perspective. They visibly warn
  that a replay is non-canon and link back to its article/battle record. The
  replay picker derives character/side perspectives from existing participants,
  belligerents, and related records, including **The Cutting Expedition**.
- Local replies are transparently labeled *local lore drafts*. They use filed
  profile/source context but do not represent a live person, a third-party
  account, or a new canonical outcome.

## Verification

| Command / check | Result |
|---|---|
| `node --check chatroom.mjs` | PASS |
| `node --check chatroom-data.mjs` | PASS |
| `node tools/tests/chatroom-state.mjs` | PASS — normalisation, scoped memory, merge, perspectives |
| Static server + HTTP headers for `chatroom.html`, `chatroom.mjs`, `chatroom-data.mjs` | PASS — 200 with `text/html` / `text/javascript` |
| Archive JSON loader check | PASS — `characters.json` returned 189 canonical profiles |
| `python3 tools/check-freshness.py` | PASS — current RNN/Diet; pre-existing 40-day Iron Legion stale advisory |
| `python3 tools/check-all.py` | FAIL — no Chat-specific error; 4 existing-suite failures: `judgement in the grove`, `alliance cache`, `map lenses`, and `appearance chronology`. The latter three include the environment's missing `jsdom`; appearance chronology reports an existing newest-filing analysis-track condition. |

## Not done / open

- The desk is intentionally local-only; it does **not** offer real-time
  multi-user delivery, server-side login, external account integration, or a
  way to alter canonical data from a chat.
- No browser automation package is installed in this sandbox, so the supplied
  mobile/visual smoke checklist remains for a browser review. The page is served
  through the live preview/static server and its resources were HTTP-verified.
- Imported files merge rather than overwrite by design. A reader who wants to
  erase the desk entirely must clear the browser's site data after exporting a
  backup.
