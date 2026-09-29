# Waluipedia Chat — local conversation, memory, and replay desk

`chatroom.html` is a standalone, **local-first** reader/player surface for
exploring the archive. It is deliberately not a second canon database, a
networked messenger, or a live third-party-account client.

## Source of truth

| Reader-facing thing | Source of truth | Rule |
|---|---|---|
| Character cards and persona context | `Reputation-Matrix2/data/characters.json` | Read at page load; never copied into a second character registry. |
| Event and battle replay picker | `Reputation-Matrix2/data/events.json`, `data/battles.json`, `data/majorBattles.json` | Read at page load; a replay always preserves its source id and link. |
| Local chats, memories, and notebook notes | Browser `localStorage`, key `waluipedia.chatroom.v1` | Private to that browser until the reader exports JSON. Not canon. |
| Page UI | `chatroom.html`, `chatroom.css`, `chatroom.mjs`, `chatroom-data.mjs` | Standalone files, scoped with `.cr-*` styles. |

The page's named accounts come from the archive's actual character records.
They are labeled **Archive** / **Replay** rather than presented as a live,
verified, or external account. The desk must not scrape, copy, or impersonate
an account from another service.

## What the desk does

- starts a local thread from a canonical character profile;
- carries saved, character-scoped (or global) memory into future local threads;
- keeps a searchable conversation log in the sidebar;
- opens a filed event or battle as a replay, then offers perspectives from its
  named participants, belligerents, and related character records;
- prioritizes `feyward_woodfellow_vs_the_treant` — the Cutting Expedition versus
  the awakened wood — so the cutting-lane / Revel-adjacent replay has a truthful
  source record from the start;
- saves local lore notes with tags and source ids;
- exports the whole local archive as JSON and validates + merges an imported
  archive without writing to campaign data.

The reply surface is intentionally called a **local lore draft**. It is a
source-grounded continuity prompt, not a claim that a character, a player, or
an external AI service authored a response.

## Canon boundary

A replay is a way to test a scene from another lens, not a retcon engine. It
must say which source filing it uses and retain the filed outcome, location,
and link. No typed message, generated draft, memory, or lore note may edit
`characters.json`, an event, a battle, an investigation, or any other canonical
store. A confirmed new table outcome is filed through the ordinary intake and
session process; copying a local note into an event is a deliberate human
filing step, never an automatic sync.

## Import / export contract

Use **Export archive** to download a complete JSON backup. Import accepts that
shape, bounds all text and collection sizes, and merges by stable item id. For
the same id, the newest `updatedAt` / `createdAt` wins. Imported text is always
inserted with DOM text nodes, never interpreted as page HTML.

The import is a merge rather than an overwrite so a reader does not silently
lose an active browser's chats. Clearing browser storage clears the local desk;
export before clearing site data or moving to another device.

## Run and verify

Serve the repository; direct `file://` browsing blocks the archive JSON fetches:

```bash
python3 start.py --no-browser --host 0.0.0.0 --port 8765
# open http://localhost:8765/chatroom.html

node --check chatroom.mjs
node --check chatroom-data.mjs
node tools/tests/chatroom-state.mjs
```

Manual smoke test:

1. open a character from the canonical picker and send a message;
2. save a memory, make a new thread for that character, and confirm it appears
   in the right-hand memory panel;
3. replay *Woodfellow vs. the Treant* as **The Cutting Expedition**; confirm the
   replay boundary and source link appear;
4. save a lore note; export; import the exported file; confirm the merge retains
   the chat, memory, and note;
5. narrow the viewport below 760px and check the chat drawer and composer.
