# Waluipedia chat-first assistant

This is a small local chat page for an LM Studio model. It is intentionally
chat-first: ordinary conversation, roleplay, and drafting go directly to the
model. The assistant does not begin by searching the repository, planning a
write, or inventing a tool result.

## Start

From the checkout root:

```bash
python workflow/server.py
```

Open `http://127.0.0.1:8787/`. The server binds to `0.0.0.0` for the sandbox
preview. Set `WORKFLOW_HOST`, `WORKFLOW_PORT`, and `LM_STUDIO_URL` if needed.

## Model endpoint and timeouts

The assistant talks to LM Studio's local server. If it is not at the default
address, it is found automatically: the server probes `127.0.0.1` and
`localhost` on ports `1234`, `1235`, `8000`, and `8080`, and uses the first one
that answers `/v1/models` (results cached 15 seconds; refresh forces a new
probe). The header shows which endpoint is in use, and **⚙** lets you set the
URL by hand — it is stored in the browser and overrides detection. Setting the
`LM_STUDIO_URL` environment variable overrides detection for the whole server.

A slow model is not an offline one. Requests default to a 90-second budget
(`LM_STUDIO_TIMEOUT_SECONDS`), and one automatic retry with a doubled budget
runs before anything is reported. Transient HTTP errors from LM Studio (model
backend channel errors, reloading models) are retried once too.

The model never sees the assistant's own failure notices: they are marked in the
chat page and excluded from the next request, and the server strips them from
any history they reach. The current message is sent once, not twice. While a
profile draft is pending, your notes (“make it sound good, waluigi tone”,
“this is the leader of it i guess”) revise the draft instead of dropping into
plain chat, and the model writes the profile prose itself from the quoted
evidence. Timeouts say so plainly ("did not finish in
time — the server is reachable but slow or busy"); only a refused connection
says offline, and that message names the endpoint it tried. Reply phrasing
keeps its prompt small (short history, small token budget) so slow local
models answer faster.

Note for the hosted preview: the sandbox cannot reach `127.0.0.1` on *your*
machine. Run `python workflow/server.py` locally (next to LM Studio), or point
⚙ at a reachable URL.

## Managing chats

Each chat in the sidebar has **✎ rename** and **✕ delete** buttons (visible on
hover). Renaming sets a permanent title — the automatic first-message title
never overwrites it. Deleting asks for confirmation, switches to the next chat
(or creates a new one), and cannot be undone. Both are blocked while a reply is
in flight. Chats live in `localStorage`, capped at the 30 most recent.

## Roleplay — the chatroom

`http://127.0.0.1:8787/roleplay` (linked from the assistant's sidebar) is a
separate page styled like a modern character-chat app: light theme, a left
rail with **Create / Discover / Feed / Charms / Labs**, search, dated recents
(Today / Yesterday / This Month / Older), a dashboard of character cards and
scene covers, and a chat page with a right-hand character panel (New chat /
Voice / History / Customize / Pinned / Persona / Style / Memory / Replay /
Script / Export).

**The page is generated.** `workflow/roleplay.html` and the repository-root
`chatroom.html` are both built from `assets/chatroom/` by
`python3 tools/build-chatroom.py`. Never hand-edit either page; edit the
source and rebuild (`--check` fails when they are stale). The whole system —
memory, lore, replay, backups — is documented in
[`docs/CHATROOM_GUIDE.md`](../docs/CHATROOM_GUIDE.md).

- **The cast is the archive itself.** `/api/characters` serves every character
  in `characters.json` (portraits included, via `/rm/…` static routes), browsed
  under alphabetical letter dividers. The account row links to the actual site
  (`WALUIPEDIA_URL`, default `http://127.0.0.1:8765/`), and both the account
  and the interaction counts on the cards are real: your display name, your
  handle, your own played turns — nothing invented.
- **Scenes from the sessions, from other perspectives.** `/api/scenes` turns
  the newest filed sessions into scene starters. The filed event **runs on
  its own script** — beats taken from its filed timeline fire on schedule
  (auto-advance every two turns, or **⏩ Next beat** manually) while you play
  *other* characters doing their own things around it. Each scene card shows
  its **suggested cast** (the event's own participants, resolved to playable
  characters) and **✨ Suggest a cast** lets the model pick an interesting
  combination instead.
- **Group chats, with a director.** The **👥 Group chat** button (or any scene
  card, wire post or collection) opens a cast picker. Each reply is generated
  as one character only — the prompt forbids writing the others' lines — and
  after every reply the model is asked who speaks next: another character, or
  **you**. It hands back on its own, and always at the ceiling
  (`max chain`, default 4 character turns), so a multi-bot room is never a
  loop. Switch it off in the character panel → **Director**.
- **Openers written from the lore.** A scenario's opening is not a template:
  the model is handed the brief, the character cards, the script and what
  these characters did in the reader's other chats, and asked for a title, a
  90–150 word second-person opener that starts mid-action with filed details
  in it, and the stakes. Generic answers ("you find yourself", no filed names,
  too short) are rejected and asked again; with no model at all the page falls
  back to its own cold open.
- **Continue the story.** Filed events grouped into sagas by their era line;
  the newest filing of each is offered as a starting point, and the room picks
  up in the minutes after the last filed line. Everything filed is canon and
  cannot be contradicted; everything after is invented in play — including
  characters, introduced with `[[NEW: Name | role | what they look like]]`.
  Nobody has drawn them, so the description is the portrait: it shows in the
  character panel under *Described, not drawn*, and they are kept for later.
- **Fate — the model does not owe you a yes.** Before each reply to something
  you attempted, the page rolls: it works, it works at a price, something cuts
  across it, it fails outright, or the character refuses you. The result is
  handed to the model as an order ("never soften it into a partial success"),
  the dice are never narrated, and being wounded shifts the odds against you.
  Off / gentle / normal / harsh in the character panel → 🎲 Fate.
- **Most Used Backfills.** The events every filing points at and nobody ever
  wrote — scanned out of the `keyEvents` lists — ranked by how often they have
  been played here. Playing one produces the missing account.
- **Sequels.** 📖 Sequel in any chat carries the cast, the sheets, the pinned
  lines and the unfired beats into the next scene, and opens in the middle.
- **Character state.** Every room keeps HP, MP, conditions, counters and
  inventory per character, shown under 🩺 States and editable by hand. Scenario
  setup decides what everyone walks in carrying (a battle at 50% HP with
  `wounded` set), and the model updates the sheets itself with stage
  directions — `[[HP: Name -12]]`, `[[FLAG: Name bleeding]]`, `[[ITEM: …]]` —
  which are stripped from the prose and applied to the record. It may also
  `[[ENTER:]]` and `[[EXIT:]]` characters as the story demands.
- **The What If board.** A dozen long scenarios, composed by the page from
  filed records — the archive's own What-Ifs, the 🚧 **wanted pages** (people
  named in filings nobody has written up, playable at last), filed sessions
  turned at their hinge, the chambers (Midlands Diet, Pond Patrol, Council of
  Seven, Glazed Congress) and the loudest posts on the wire. Each card carries
  a full brief, a cast with reasons, and a five-to-eight beat script; anything
  thin is dropped rather than padded. **✍️ Create a scenario** composes the
  same thing from your own description by matching archive records — no model
  call. Served by `/api/archive`.
- **The wire.** `/api/wahwire` serves the 196 filed posts; the **Wire** tab
  sorts them **newest first**, most liked or most argued over, and filters to
  **Unused** — the posts nobody has played yet — or the drafts the archive
  never posted. Any post plays as a scenario on its own.
- **Collections.** `/api/collections` serves the archive's own groupings; one
  click preselects the whole table in the cast picker.
- **No advertisements.** The dashboard has no ad slot and the page contains no
  ad code.
- **📓 The lore book.** Written in the background while you play: every few
  turns the last stretch of the scene is queued, and a separate small call
  files what is new — places, people, events, things, facts and a diary entry
  — appending each page at the bottom. One job at a time, never beside a
  roleplay turn, with a queue cap and a session budget so a local model on a
  laptop is never asked to do two things at once. The whole book is handed
  back to the model as established truth.
- **Citations.** Everything loaded is indexed with its date; before each turn
  the page offers the model the filings that are actually relevant *and* whose
  dates have already passed in this scene, with their ids, and names the ones
  dated later as unknowable. The prompt is budgeted so the reference material
  is trimmed before the scene's own instructions ever are.
- **The calendar.** Every room has an in-world date (from the scenario, or
  `currentDate.json`). Filings attached to the cast are sorted into *already
  history* and *has not happened yet*, so nobody reminisces about their own
  future, and every memory is filed with both clocks — the in-world date and
  when you played it.
- **Characters play like their filing.** The full filed description goes into
  the prompt with a behaviour line inferred from it, plus affiliation, faith,
  status and standing.
- **A browsable cast.** Sort by name, play count, recency, standing, power,
  memory or filings; group by A–Z, race, affiliation, status or standing;
  filter by race, affiliation, played/never-played/has-a-portrait/invented;
  search the whole dossier.
- **Memory that crosses chats.** Every opening, fired beat, pin and 🧠
  *remember* is filed in a world log; characters carry their own memory
  (lines said and heard, taught facts, a mood, relationship scores). Both are
  handed to the model in later chats, so the cast knows what happened in the
  other room. **Charms** holds world lore nodes, treated as established truth
  and matched to the cast or the scene.
- **Perspective dynamic replay.** **Labs → Perspective dynamic replay** (or
  **Replay** in the character panel) re-runs a played chat or a filed session
  from another vantage point: the same beats on the same schedule, a new cast,
  and a prompt block that limits them to what they could see from where they
  stood.
- **Character cards.** PNG cards (the JSON base64'd into a `chara` tEXt
  chunk — SillyTavern, Chub, Agnai) and JSON cards (`chara_card_v2` with v1
  fields alongside) are both read and written. Exporting an archive character
  writes the card into their own filed portrait, so the file is a picture and
  a card at once; the archive's fields ride along under
  `extensions.waluipedia`.
- **Stories in and out.** Paste or open a transcript — `Name: line`,
  `**Name:** line`, or prose — and it becomes a playable chat with the
  speakers matched to the cast.
- **Two kinds of export.** A ✍️ **story brief** trimmed for a writing model
  (who, when, the situation, the beats, the turns, the end state, what was
  established — no ids, no swipes, no error notices) and a 📦 **full bundle**
  another chatroom can import, plus markdown and plain text.
- **🔍 What the model is sent.** Labs shows the live system prompt, its size
  against the budget, and its ten largest blocks.
- **Import / export.** Chats, lore and memory export as JSON together or
  separately, and import by merge or replace; a single chat also exports as a
  markdown transcript for filing back into the wiki.
- **Adding onto stories.** **➤ Continue** moves the scene forward without
  your input, **Persona** sets who you play, **Style** switches narration
  (novel / script / casual / archivist), **⏱ Script** toggles beat
  auto-advance.
- **Voice** reads messages aloud with the browser's speech synthesis, a
  stable per-character pitch.
- Roleplay turns go straight to the model through `POST /api/roleplay` — no
  agent loop, no repository tools, nothing written. Everything the reader
  makes lives in this browser's `localStorage` (chats capped at 30).

## Routing rules

The runtime makes a deterministic decision before contacting repository tools:

- **Chat:** normal questions, greetings, opinions, roleplay, brainstorming, and
  prose drafts. One normal chat completion; zero repository/image calls.
- **Clarify:** vague creation requests or wording that could be either a
  conversation or an archive operation. One question; zero repository calls.
- **Read:** only an explicit request such as “read the article,” “find Freddy in
  the repository,” or “what does this source say.” One focused read/search,
  then a grounded answer.
- **Write:** only an explicit canonical/file change. The target is read first;
  the runtime never silently writes a file.
- **Image:** a concrete image request. A vague image request asks for a subject
  instead of searching unrelated files.

A mention of “character,” “article,” “file,” or a canon name by itself is not a
tool request. If LM Studio is offline, the page says so plainly; it does not
pretend a search happened or produce a fake archive answer.

Source-backed character creation is explicit but unstaged: a request naming a
person, a profile, and a source record resolves the source and participant,
lets the model write the profile prose from the quoted evidence, and **writes
it to `characters.json` immediately** — the archive lives in git, version
control is the undo, and there is no approval step. Re-running a profile
updates the record in place, and later notes (“make it sound good, waluigi
tone”, “write it better, flesh out the description”) revise and rewrite it the
same way. For example, Freddy plus `The Seven Nights at Fazbear: A Complete
Record` resolves to the source participant `gabriel_freddy`, and Cosmic Jester
plus `the factions json` resolves to the Cosmic Jester material in the Disaster
Inc. faction record. The request works as one message or as several, and
permission lines such as “you may edit files” are understood without triggering
a clarification.

The archive's own generator tools are connected too: “generate a battle”,
“make some events”, or “run the generator for reputation” reads the live
inventory, runs one bounded generation with the chat's model endpoint, and
reports the result in the model's own words.

And the chat works the archive itself: “can you add a Noki race” goes to a
reasoning loop where the model searches for Noki (finding the Isle Delfino
nation without being told), reads `races.json`'s own format, writes the record
in that format, and reports back — deciding each step itself, with the runtime
bounding every tool call. Lookups, edits, and follow-ups (“really try again”)
run through the same loop.

**There are no canned responses.** Every user-facing reply — clarifying
questions, file-lookup answers, drafts, failures — is written by the local
model from grounded context the runtime provides; only the offline notice
(when LM Studio is unreachable) is fixed text. When the user repeats a request
or says “i just told you”, the model is told about the repeat and its own
previous reply, so it asks for only the missing piece instead of looping the
same question; sending just that piece starts the flow on the next turn.

## API

The fresh page uses only:

- `GET /api/health`
- `POST /api/chat`
- `GET /api/agent/status?job=...`
- `POST /api/agent/cancel`

The roleplay page adds:

- `GET /roleplay` — the page itself
- `GET /api/characters` — the archive cast, with portrait URLs
- `GET /api/scenes` — the newest filed events as scene starters
- `GET /api/wahwire` — every filed wire post, with author profiles
- `GET /api/collections` — the archive's character collections
- `GET /api/archive` — the trimmed records the What-If board is composed from
  (filed What-Ifs, events with timelines, factions, the Congress)
- `GET /rm/<path>` — static files under `Reputation-Matrix2/` (portraits,
  event plates; path traversal refused)
- `POST /api/roleplay` — one plain chat completion (system + messages +
  temperature + max_tokens); no tools, no writes
- `POST /api/suggest-cast` — the model picks a cast for a scene from a
  candidate list; it may only choose names from that list

JSON routes answer `OPTIONS` and send `Access-Control-Allow-Origin: *` so the
static `chatroom.html` (served from the repository root on another port) can
use the same model endpoint.

The model never receives shell access. Repository helpers remain bounded to the
checkout and are called only by the explicit read/write/image branches.

## Tests

Run the routing tests with:

```bash
python -m unittest discover -s Reputation-Matrix2/tools/local-agent -p 'test_*.py' -v
python -m py_compile Reputation-Matrix2/tools/local-agent/*.py workflow/server.py
```

The tests include normal conversation, drafting, ambiguous character-file
requests, explicit archive lookups, and creation-room greetings. They assert that
chat turns emit no repository action, that every user-facing reply comes from
the model, and that no canned reply text exists in the runtime source.

To exercise the full chat server without a real LM Studio, run the mock model
server in another terminal first:

```bash
python tools/mock_lm_studio.py   # serves a fake /v1/chat/completions on :1234
python tools/mock_lm_studio.py 8000   # any port; MOCK_DELAY_SECONDS=3 simulates a slow model
python workflow/server.py
```

The chatroom has its own checks — they boot the mock model themselves:

```bash
python3 tools/build-chatroom.py --check    # the pages match assets/chatroom/
node tools/tests/test-roleplay-page.mjs    # the pure logic contract
node tools/tests/test-chatroom-core.mjs    # memory, lore, replay, bundles
node tools/tests/test-roleplay-server.mjs  # the routes
npm i --no-save jsdom && node tools/tests/test-chatroom-page.mjs   # the real UI
```
