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

## Roleplay — characters, scenes, and group chats

`http://127.0.0.1:8787/roleplay` (linked from the assistant's sidebar) is a
separate page styled like a modern character-chat app: light theme, a sidebar
of recent chats, a **Discover** grid of character cards, and a chat page with
a right-hand character panel (New chat / Voice / History / Pinned / Persona /
Style / Export).

- **The cast is the archive itself.** `/api/characters` serves every character
  in `characters.json` (portraits included, via `/rm/…` static routes), and
  `/api/scenes` turns the newest filed events into scene starters — open a
  roleplay inside a story the wiki already holds, then take it anywhere.
- **Group chats.** The **👥 Group chat** button (or any scene card) opens a
  cast picker for 2–6 characters. Characters take turns; click an avatar in
  the chat to choose who speaks next. Each reply is generated as that
  character only — the prompt forbids writing the others' lines.
- **Adding onto stories.** **➤ Continue** moves the scene forward without
  your input, **Persona** sets who you play, **Style** switches narration
  (novel / script / casual / archivist), and **⬇ Export transcript** downloads
  the whole scene as markdown for filing back into the wiki.
- **Voice** reads messages aloud with the browser's speech synthesis, a
  stable per-character pitch.
- Roleplay turns go straight to the model through `POST /api/roleplay` — no
  agent loop, no repository tools, nothing written. Rooms live in this
  browser's `localStorage` (capped at 30), same as assistant chats.

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
- `GET /rm/<path>` — static files under `Reputation-Matrix2/` (portraits,
  event plates; path traversal refused)
- `POST /api/roleplay` — one plain chat completion (system + messages +
  temperature + max_tokens); no tools, no writes

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
