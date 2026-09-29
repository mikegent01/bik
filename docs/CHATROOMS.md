# Waluipedia Chatrooms

`chatroom.html` is a **reader-local discussion workspace** for the archive. It
uses the real character profiles and filed event/battle records already in this
repository; it is not an external social network, does not scrape an external
service, and does not require an account, token, or sign-in.

Open it through the archive server so its source data can load:

```bash
python3 start.py --no-browser --host 0.0.0.0 --port 9000
# then open http://localhost:9000/chatroom.html
```

## What it does

- **Rooms** hold a private transcript, a chosen archive filing, and a cast of
  existing profiles or named, filed battle roles.
- **Archive-guided replies** are deliberately source-bounded: they assemble a
  response from the selected account's profile, the room's filing, and its
  filed replay beats. They do not call an AI service or manufacture canon.
- **Replay deck** steps through `keyMoments` when the source supplies them,
  otherwise through the filing's summary/result/aftermath. “View through”
  changes the selected account and emphasis, never the source facts. The
  default room demonstrates the Cutting Expedition versus the Awakened Wood in
  `feyward_woodfellow_vs_the_treant`.
- **Cross-chat memory** is a reader note connected to one or more room
  accounts. It is available in any local room that shares those accounts. It
  is not written back to `characters.json`, `events.json`, `battles.json`, or
  any other canon data.
- **Import/export** lets a reader take the local workspace to another browser
  as a versioned JSON file. Import replaces the current browser workspace only
  after a confirmation.

## Sources of truth

| Surface | Reads | Writes |
|---|---|---|
| Character account picker | `Reputation-Matrix2/data/characters.json` | nothing |
| Event replay library | `Reputation-Matrix2/data/events.json` | nothing |
| Battle replay library | `Reputation-Matrix2/data/battles.json`, `data/majorBattles.json` | nothing |
| Rooms, messages, selected cast, replay position, memories | browser `localStorage` key `waluipedia-chatrooms-v1` | that same browser key only |
| Export file | current local workspace | downloaded JSON only |

The page has a small built-in fallback so its shell remains usable if a static
server cannot load data, but that fallback is only a resilience measure. It is
not a second canonical registry.

## Import/export shape

Exports use this envelope:

```json
{
  "schema": "waluipedia-chatrooms-export",
  "version": 1,
  "exportedAt": "2026-09-29T00:00:00.000Z",
  "payload": {
    "activeRoomId": "room-…",
    "rooms": [],
    "memories": []
  }
}
```

The importer accepts only that schema, limits imported room/message/memory
counts, truncates oversized user text, and asks before replacing local state.
Treat exports as private reader notes: they may contain a user's own messages
and memories.

## Canon boundary

A chat transcript is not an event filing. Do not copy its messages into a
canonical data file as though they were table evidence. If an actual session
produces a new event, follow `docs/INTAKE_DECISION_GUIDE.md` and the normal
filing process; the event is authored, evidenced, dated, and validated there.

## Maintenance and verification

The standalone page is intentionally split into a short root shell and scoped
assets:

```text
chatroom.html
Reputation-Matrix2/app/pages/chatroom/chatroom.css
Reputation-Matrix2/app/pages/chatroom/chatroom.js
```

After changing it:

```bash
node --check Reputation-Matrix2/app/pages/chatroom/chatroom.js
python3 tools/check-chatroom.py
python3 tools/check-all.py
```

Also load `/chatroom.html` over `start.py`, create a room, send a message, save
one memory, switch to a second room containing that account, advance a replay,
and export/import a scratch workspace. Check the layout below 760px: the room
rail becomes a menu and the conversation must remain usable without the right
inspector.
