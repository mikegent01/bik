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

Source-backed character creation is explicit and staged. A request naming a
person, a profile, and a source record resolves the source and participant,
shows a grounded draft, and waits for `approve` before adding one object to
`characters.json`. For example, Freddy plus `The Seven Nights at Fazbear: A
Complete Record` resolves to the source participant `gabriel_freddy`; it does
not ask for a random file path or search every catalog. The request works as
one message or as several, and permission lines such as “you may edit files”
are understood without triggering a clarification.

A clarification is never asked twice in a row. If the user resends the same
message or replies “i just told you,” the assistant states what it already has
(the character, the source) and asks for only the missing piece; sending just
that piece starts the profile flow immediately.

## API

The fresh page uses only:

- `GET /api/health`
- `POST /api/chat`
- `GET /api/agent/status?job=...`
- `POST /api/agent/cancel`

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
chat turns emit no repository action.
