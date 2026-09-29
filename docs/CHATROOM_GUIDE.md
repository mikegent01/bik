# The chatroom — roleplay with the archive's own cast

Two pages, one program. `chatroom.html` (repository root, served by
`python3 start.py`) and `workflow/roleplay.html` (served by
`python workflow/server.py` at `/roleplay`) are **generated from the same
sources** and behave identically; only where they get their data differs.

```text
assets/chatroom/chatroom.shell.html   markup            ── hand-written
assets/chatroom/chatroom.css          skin              ── hand-written
assets/chatroom/chatroom-core.js      pure logic (RP)   ── hand-written
assets/chatroom/chatroom-app.js       page wiring       ── hand-written
        │
        └── tools/build-chatroom.py ──┬── chatroom.html            (GENERATED)
                                      └── workflow/roleplay.html   (GENERATED)
```

**Never hand-edit the two pages.** Edit a source, then run:

```bash
python3 tools/build-chatroom.py          # write both pages
python3 tools/build-chatroom.py --check  # fail if they are stale
```

---

## Source of truth

| Thing | Where it lives | Who owns it |
|---|---|---|
| The cast | `Reputation-Matrix2/data/characters.json` | the archive |
| The scenes | `Reputation-Matrix2/data/events.json` (newest filings with a plate) | the archive |
| The scenarios | `whatifs.json`, `events.json`, `factions.json`, `congress.json`, `wahwire/posts.json` | the archive |
| The collections | `Reputation-Matrix2/data/collections.json` | the archive |
| Portraits and plates | `Reputation-Matrix2/…`, served raw (static) or under `/rm/` (server) | the archive |
| Chats, memory, lore, the world log | the reader's `localStorage`, key `waluipedia-chatroom-v1` | the reader |
| Replies | a local model, `POST /api/roleplay` on the workflow server | the reader's machine |

Nothing the page does writes to the repository. The archive is read-only here:
if a chat produces something worth keeping, export it and file it properly
through [`docs/SESSION_FILING_PROCESS.md`](SESSION_FILING_PROCESS.md).

## The two runtimes

| | `chatroom.html` (static) | `workflow/roleplay.html` (server) |
|---|---|---|
| Served by | `python3 start.py` → `http://127.0.0.1:8765/chatroom.html` | `python workflow/server.py` → `http://127.0.0.1:8787/roleplay` |
| Cast / scenes | the archive JSON, read directly | `/api/characters`, `/api/scenes` |
| Wire / collections | the archive JSON, read directly | `/api/wahwire`, `/api/collections` |
| What-If sources | `whatifs`/`factions`/`congress` JSON, read directly | `/api/archive` (one trimmed bundle) |
| Model | `http://127.0.0.1:8787/api/roleplay` by default, or whatever ⚙ is set to | `/api/roleplay`, same origin |
| Cast suggestions | needs the workflow server | built in |

The static page calls the workflow server across origins, so the workflow
server answers `OPTIONS` and sends `Access-Control-Allow-Origin: *` on its JSON
routes. Both are local, unauthenticated and write nothing.

## The screen

- **Left rail** — `＋ Create`, the tabs (Discover / Feed / Charms / Labs),
  search, and recents bucketed **Today / Yesterday / This Month / Older**;
  the archive link and the signed-in account sit at the bottom.
- **Discover** — a **For you** row (whoever *you* actually play, first — the
  interaction counts are your own turns, not invented popularity), the
  **What If** board, **Collections**, **Scenes** cover cards built from filed
  sessions, then the whole cast under **letter dividers**. There is no
  advertisement slot and no ad code anywhere in the page.
- **What If** — the whole board (below).
- **Wire** — the whole wire, sortable and filterable (below).
- **Collections** — the archive's own groupings, each one a cast in a click.
- **The chat** — the stream, avatars, names, markdown-rendered turns
  (`*action*`, `**bold**`, `"speech"`, `- lists`), and per-message controls:
  👍 👎, 📌 pin, 🧠 remember, ↻ another take, and `‹ 2 / 3 ›` swipes between takes.
- **Character panel (right)** — portrait, name, `By @handle`, interaction count,
  and the menu: **New chat, Voice, History, Customize, Pinned, Persona, Style,
  Memory, Replay, Script**.

## What If — a few long scenarios, composed by the page

The board is the centre of the dashboard, and it is deliberately **small and
long** rather than large and thin: a dozen briefs you could run a session from,
not two hundred one-line prompts. Every one of them is assembled from filed
records by `RP.buildWhatIfs`, and every one carries the same shape:

```
premise      the divergence in two or three sentences
brief        the divergence · what the archive already filed · the room ·
             who is standing in it and why · what is at stake
script       5–8 beats with real detail, fired on their own schedule
questions    what the table is supposed to settle
```

**Five engines feed it:**

| Engine | Source | What it makes |
|---|---|---|
| 📕 Filed What-If | `whatifs.json` | The archive's own non-canon branches, chapter by chapter |
| 🚧 Wanted page | the wanted-pages scan | *What if we finally met X?* — people named in filings who have no dossier. The unwritten person is playable; the filing they walked through is the script |
| 🔀 Turned at the hinge | `events.json` | A filed session turned at the middle beat of its own timeline (or the middle paragraph of its prose) |
| 🏛 The chamber | `factions.json` + `congress.json` | The Midlands Diet, the Pond Patrol, the Council of Seven, the Glazed Congress — the vote, replayed live |
| 📡 Wire flashpoint | `wahwire/posts.json` | The loudest posts, in the branch where the post was right |

**The wanted-pages scan** (`RP.wantedFrom`) recomputes the archive's own
🚧 Wanted Pages board from participant lists and faction rosters: ids that are
referenced but have no record. Bodies (Legion, Guild, Diet, Empire…) and filed
records are excluded — they are links, not missing people.

**Quality gate.** `RP.scenarioQuality` drops anything with a brief under
`WHATIF_MIN_BRIEF` (900 characters), fewer than three beats, or fewer than two
people. The survivors are scored and then dealt round-robin by engine, so one
source cannot own the page.

**⚡ The opener is written by the model, from the lore.** A card starts with
its composed premise; pressing **Forge the opener** (or playing it) sends
`RP.hookPrompt` — the brief, the character cards, the script, and whatever
these characters did in *your* other chats — and asks for three things:

```
TITLE:   concrete. A place, an object, a line. Never a rhetorical question.
OPEN:    90–150 words, present tense, second person, starting mid-action,
         with at least three filed details, ending on something you must
         answer right now.
STAKES:  one sentence naming what is lost in the next few minutes.
```

Banned in the prompt, by name: summarising what happened before, *you find
yourself*, *little did you know*, *the air is thick*, explaining the premise
back to the reader, and "any sentence that could open a different scene".
`RP.hookIsWeak` checks the answer — too short, a banned phrase, or fewer than
two proper nouns out of the filed material — and asks once more, telling the
model exactly what was wrong. If there is no model at all, `RP.coldOpen`
builds an in-the-moment opener out of the hinge beat instead.

**✍️ Create a scenario.** Describe it in a sentence or a page. The page matches
the names in your text against the cast, the events and the factions
(whole-word matching, so *Luigi* does not match *Waluigi*), pulls what the
archive already has on each of them into the brief, seats the matched
participants and leadership as the cast, and takes the script from the matched
filing's own timeline — falling back to its prose, then to your sentences, then
to a three-beat spine. **No model call is made.** The composed scenario is
saved, joins the board, and exports with your lore.

## Backfills — the lore nobody wrote

**Most Used Backfills** (its own rail tab, and a row on the dashboard) is the
other half of the wanted-pages idea: not people, but *events*. `RP.backfillsFrom`
scans every `keyEvents` list in the events, the cast and the factions for ids
that nothing answers to — the off-screen battle, the airlift that never came,
the session between two sessions — and ranks them by **how many times you have
played one** (the "most used" part, kept in `state.backfillUses`) and then by
how many filings are waiting on it.

Each becomes a full scenario: what points at it, who the referencing records
put there, a script made of the references that depend on it, and the standing
instruction that the scene has to arrive where the archive already believes it
arrived — the how, the cost and the order are yours. Export the transcript and
the hole has a first-hand account.

`relatedArticles` is deliberately **not** scanned: it points at locations,
items and laws as well as events, and including it turns the board into noise.

## Sequels — carrying a scene forward

**📖 Sequel** in any chat composes the next scene from the one you just
played: the same cast, the same sheets (HP, MP, conditions, inventory — or
fresh, your choice), the pinned lines, the last turns, and any beats that never
fired. The brief says *Previously* and *How it ended*; the opener does not
recap, because you were there.

## Character state — HP, MP, flags, counters, inventory

Every room carries a sheet per character (`room.states`), visible in the chat
under **🩺 States** and editable by clicking one.

| Preset | What it gives |
|---|---|
| Story | no numbers at all — flags and notes only |
| Stakes | HP only |
| RPG | HP and MP (the default) |

**Scenario settings.** The cast picker's **⚔ Starting state** step sets what
everyone walks in carrying: HP %, MP %, conditions (`wounded, hunted`),
inventory, and a physical note. A What-If battle can start at 50% HP with
`wounded` already true, and the model reads exactly that before its first line.

**The model writes to the sheets.** `RP.DIRECTIVES` is in every system prompt
with mechanics on:

```
[[HP: Name -12]]                damage, healing (+), or an exact value (= 30)
[[MP: Name -5]]                 spent or recovered power
[[FLAG: Name wounded]]          set a condition · "= false" clears it
[[COUNT: Name arrows -1]]       any counter
[[ITEM: Name + the brass key]]  gained · "-" lost
[[STATUS: Name bleeding badly]] a short physical note
[[ENTER: Name — why they arrive]]   bring someone into the scene
[[EXIT: Name — why they leave]]     write someone out
```

`RP.parseDirectives` strips them from the prose before the reader sees it and
`RP.applyDirectives` applies them: pools clamp at 0 and at max, names are
matched longest-first against the people actually in the room (so *Lord Darian
Marsh bleeding* is one person and a condition), **ENTER** resolves against the
whole archive — inventing a card only when the archive has never heard of them
— and **EXIT** marks the sheet absent rather than deleting it. Every change is
reported to the reader as a pill under the turn, and roster changes are filed
in the world log.

## The wire — post browsing

`Reputation-Matrix2/data/wahwire/posts.json` holds 196 filed posts. The **Wire**
tab browses all of them, and any one can be played directly (the loudest ones
also feed the What-If board as flashpoints):

- the **post is the situation** (author, timestamp and text go into the scene),
- the **people it links to are the suggested cast** (plus the author),
- the **replies underneath are the beats**, so the argument arrives on its own
  schedule while you play the hours around it.

**Sorting** — `Newest first` (the wire's own filing order, the default),
`Oldest first`, `Most liked`, `Most argued over`.

**Views** — `All posts`, `Unused` (never played here; the count is in the chip,
and this is how you find the corners of the wire nobody has touched),
`Already played`, and `Never posted` (drafts the archive generated but never
filed). Playing a post marks it used; the mark lives in `state.usedPosts`,
survives a reload, and travels in the memory half of an export.

## Collections

`collections.json` already groups the cast — Core Disaster Inc., the Koopa
Troop, the Mario Brothers Mystery, the planar crisis, the dynasties. A
collection card opens the cast picker with its members preselected (members the
archive lists but has no character record for are dropped), so a full table is
one click rather than nineteen.

## The director — multi-bot chats that come back to you

A group chat with three bots and no director is a loop. After **every**
character reply the model is asked one short question (`RP.directorPrompt`):
given the last turns, does a character have to answer — and which one — or is
the scene waiting on the player?

- `NEXT: <name>` → that character answers next, automatically, one turn at a
  time. It may never pick whoever just spoke.
- `USER`, an unreadable answer, or an unreachable model → the scene hands back,
  and the stream shows **Your turn.** with the reason.
- **The ceiling always wins.** `settings.maxChain` (default 4) is the most
  character turns that can pass without you; at the ceiling the director is
  not even consulted. A player turn resets the chain.

Turn it off (one reply per turn, the old behaviour) or change the ceiling in
the character panel → **Director**.

## Memory — three layers

1. **The world log** (`Feed`). Every chat opening, every fired beat, every
   pinned or 🧠-remembered line. Entries about a character are handed to every
   *other* chat that character appears in, under
   `WHAT HAS ALREADY HAPPENED (other chats, same world)`. A chat is never told
   its own log lines — it already has them as history.
2. **Character memory** (`Labs → Character memory`). Per character: the lines
   they said and heard, facts you taught them, a mood, and a relationship score
   with everyone they have shared a room with.
3. **World lore** (`Charms`). Nodes treated as established truth. A node with
   no tags and no characters is world-wide; tagged nodes match the scene, and
   character-bound nodes match the cast.

The order in the system prompt is fixed by `RP.systemFor`: character card →
persona → scene → perspective → script → lore → memory. Change it there, once.

## Scenes and the script

A scene card starts a group chat whose **beats come from the filed event's own
timeline**. The beats fire on their own schedule — every two played turns, or
manually with **⏩ Next beat** — and the prompt tells the model the main event
*stays on script* and must be reacted to, not retold. Beats never enter the
chat history the model sees; they are scene cards and a prompt block.

## Perspective dynamic replay

`Labs → Perspective dynamic replay`, or **Replay** in the character panel.
Pick a played chat or a filed session, write whose perspective this is
("the timber-cutters on the ridge"), then pick who is standing there. The
replay room keeps the original beats, adds a `PERSPECTIVE REPLAY` block, and
plays the same hours from the new vantage — the cutters hearing the saws stop,
not the rebels coming out of the treeline. Opening a replay is itself filed in
the world log, so the two accounts know about each other.

## Import / export

| Button | File | Contents |
|---|---|---|
| Labs → Export → Everything | `waluipedia-chatroom.json` | chats + lore + memory + log + account |
| Labs → Export → Chats only | `waluipedia-chats.json` | rooms only |
| Charms / Labs → Export lore | `waluipedia-lore.json` | lore nodes only |
| Labs → Export memory | `waluipedia-memory.json` | character memory + world log + which wire posts are played |
| Character panel → ⬇ | `<chat>.md` | the transcript, as markdown, for filing |

Import is **merge** (keep what is here, add what is missing, the newer copy of
a chat wins, two memories of one character join) or **replace** (swap the
sections present in the file). Bundles carry
`kind: "waluipedia-chatroom-bundle"`; anything else is refused.

## Verification

```bash
python3 tools/build-chatroom.py --check        # the pages match their sources
node tools/tests/test-chatroom-core.mjs        # memory, lore, replay, bundles
node tools/tests/test-roleplay-page.mjs        # the original logic contract
node tools/tests/test-roleplay-server.mjs      # the server routes, with the mock model
npm i --no-save jsdom
node tools/tests/test-chatroom-page.mjs        # the real UI, driven in jsdom
```

The last one boots `tools/mock_lm_studio.py` and `workflow/server.py`, loads
the page with its scripts running, clicks a character card, sends a turn and
checks the reply renders and is remembered.

## What must not be hand-edited

- `chatroom.html`
- `workflow/roleplay.html`

Both carry a generated-file banner. `tools/build-chatroom.py --check` is the
gate; a PR whose pages do not match their sources is a broken PR.
