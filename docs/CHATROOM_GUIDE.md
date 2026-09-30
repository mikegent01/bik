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

## Where the model lives — LM Studio, or the workflow server

The page speaks **both** dialects and picks the right one from the URL:

| Endpoint | How it is called |
|---|---|
| `http://127.0.0.1:1234/v1` (LM Studio, llama.cpp, Ollama's OpenAI shim) | `POST …/v1/chat/completions`, OpenAI shape, system prompt as the first message |
| `http://127.0.0.1:8787/api/roleplay` (the workflow server) | `POST {system, messages}` |

⚙ **Settings** has one-click presets for both, a **Test it** button that says
what answered and how many models it has, and a model box that fills itself in
from `/v1/models`. If nothing is configured and the workflow server is not
answering, the page **looks for LM Studio on 1234 by itself** and switches to
it, saying so.

LM Studio needs its server started and **Enable CORS** switched on in the
Developer tab — the page is served from a different port, so without it the
browser blocks the request and you get `Failed to fetch`. The error notice in
the chat now says exactly that, and points at the preset.

You do not need the workflow server to play. You do need it for the archive
routes (`/api/characters`, `/api/archive`, …) and the disk saves — the static
`chatroom.html` reads the archive JSON directly, so with LM Studio alone that
build is fully usable.

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

## Continuations — pick the record up where it stops

Three different kinds of "and then?", kept apart on purpose:

| | Where it starts | What it writes |
|---|---|---|
| **Backfill** | a hole in the past | the filing nobody wrote |
| **Sequel** | the chat you just played | the next scene of *your* story |
| **Continuation** | the last filed event of a saga | **new canon** — hours nobody has filed |

**Continue the story** (rail tab, and a row on the dashboard) groups the filed
events by their own era line — "1040 BF — Mario disappearance file" is the
archive's idea of a storyline — and offers the newest event of each saga as a
starting point. The brief carries *where the record stops*, *how the last
filing ended*, *what it left behind* (the `aftermath`), the last beats on the
record, and the saga so far. The beats, unusually, are **forward pressures**
rather than filed facts: the first unwritten hour, word travelling, a face the
record has never named, the cost landing on the wrong person, the saga moving
somewhere the archive will have to write a new filing about.

The room is marked `canon: 'continuation'`, which adds `RP.continuationBlock`
to the prompt: everything above is filed and may not be contradicted,
everything after it is to be invented — including people.

**Invented characters.** No art exists for anyone new, so the description *is*
the portrait:

```
[[NEW: Marguerite Oyle | the studio night archivist | wiry, sixty, ink to the
       elbows, a stopwatch on a bootlace round her neck]]
```

They join the cast, get a state sheet, appear on the state bar, are printed in
the character panel under **Described, not drawn**, are kept in
`state.newChars` so they can be played again, and travel in the lore export.

## Fate — the model does not owe you a yes

Left alone, a small local model agrees with everything the player writes. So
before each reply to an *attempt*, the page rolls (`RP.rollFate`) and hands the
result to the model as an order it must carry out — never as a suggestion, and
never narrated as dice:

| Roll | What the model is told |
|---|---|
| ⚅ Triumph | it works, better than expected, and opens a door they did not ask for |
| ⚄ It works | plainly, no complication bolted on |
| ⚃ Works, at a price | it works and costs something specific — a wound, a noise, somebody's trust — filed with a stage direction |
| ⚂ A wrench | something unplanned cuts across it *now*; the situation changes under the attempt |
| ⚁ It fails | the attempt **fails** and leaves them worse off. "Never soften it into a partial success" |
| ⚀ Refused | the character does not do what they were asked, for a reason that fits who they are |

Difficulty (character panel → **🎲 Fate**): `off` (whatever you write works),
`gentle`, `normal` (default), `harsh`. **Being hurt shifts the odds**: low HP
and stacked conditions push weight out of *triumph/success* and into
*setback/wrench*. The roll is shown to the reader as a pill above the turn it
decided, so a refusal never looks like the model being broken.

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

## The calendar — what the cast is allowed to know

Every room has an in-world date (🕯 in the chat header, editable). It comes
from the scenario, then from `currentDate.json` — the archive's own world
clock. `RP.parseWahDate` reads the Regal Empire Standard Calendar out of
anything the archive writes: *5 Aethel, 1040 BF*, *the 21st of Highsun*, a
bare *955 BF*, a time code `TC:1040-08-30T23:50/SHD`, and the legacy
*Harvestside* spellings. Months run Firstlight → Deepwinter (thirty days each,
Deepwinter thirty-five) and **BF counts up**.

`RP.knowledgeBlock` then sorts every filing attached to the cast into two
lists in the prompt:

```
ALREADY HISTORY — these have happened and the cast may refer to them by name
- The Highsun Vote (21 Highsun, 1040 BF) — 44 days before this scene …

HAS NOT HAPPENED YET — do not mention, foreshadow knowingly, or remember any of this
- The Darkmoon Reckoning (30 Darkmoon, 1040 BF) — 55 days AFTER this scene …
  If a character would guess at one of these, they guess — they do not know.
```

That is also what stops a character reminiscing about their own future.

## Characters play like their filing

`normChar` keeps the **filed description** (up to 900 characters), the
affiliation, faction, faith, status, standing and power level — and
`RP.card` puts the description in the prompt under *"play this, not a generic
version of the name"*. `RP.roleFor` adds a behaviour line inferred from the
record itself (an archivist *cites the record and corrects your facts*; a
commander *answers threats before questions*; the wounded *are hurt, and it
shows*). In a group turn every other character is listed with their own
summary, so the speaker knows who they are talking to.

## Browsing the cast

189 names is a library, not a list. The cast section has:

- **Sort** — A–Z, most played by you, recently played, best known (`fameScore`),
  most dangerous (`powerLevel`), remembers the most, most filed about.
- **Group** — A–Z, race, affiliation, status, standing, or nothing at all.
- **Facets** — race and affiliation dropdowns, built from the live archive and
  only offering values more than one character shares.
- **Views** — everyone / played / never played / has a portrait / invented in
  play, plus ✕ Reset.
- Search reads the **whole dossier**, so *ice mage* and *Dark Shores* find
  people whose names say neither.

The card's second line follows the sort: standing, power, filings, memory
count or when you last played them.

## The lore book — written while you play

Roleplay invents faster than anyone files it: a tavern gets a name, a courier
gets a face, a debt gets agreed. **📓 The lore book** catches it in the
background.

- Every few played turns (`settings.bookEvery`, default 3) the last stretch of
  the scene is **queued**.
- A worker runs **one job at a time**, never beside a roleplay turn, with a
  1.5-second gap between jobs and a hard session budget
  (`settings.bookBudget`, default 40 calls). The queue itself is capped at six
  and is never saved — unfinished background work does not come back to life
  on reload.
- Each job is its own **small, separate prompt** (`RP.extractPrompt`) that
  files in a fixed format:

```
PLACE: name | what it is            PERSON: name | who they are and what they want
EVENT: name | what happened         THING: name | what it is and who has it
FACT:  the thing that is now true   DIARY: how this stretch went
NONE                                (when nothing new was established)
```

Pages append at the **bottom** — the book reads forward — and filing the same
name twice updates that page instead of duplicating it. Every page carries the
in-world date, the chat it came from, and both clocks. The whole book (the
pages nearest this cast and this room first) is handed back to the model as
*"everything below was established in play and is TRUE"*, with the diary as a
separate run of days.

The **Lore book** tab filters by kind, lets you write or edit pages yourself,
shows the queue and the remaining budget, and exports with the lore bundle.
`⚙ Filing` turns it off, changes the interval, or resizes the budget.

## Citing the archive — only when the date allows

`RP.buildIndex` indexes everything loaded — events, factions, characters, the
wire — with its parsed date. Before each turn the page searches that index
with the last few turns as the query and hands the model:

```
FILES YOU MAY CITE — real records, and the dates check out against this scene
- [event:the_iron_mandate] The Iron Mandate (21 Highsun, 1040 BF, 44 days before this scene) — …
Refer to these by name when it is natural. Never invent a filing, a date or a quotation.

FILED, BUT NOT YET — these exist in the archive and are dated AFTER this scene.
Nobody here can know them: …
```

People and bodies are **standing records** and always citable; a filing dated
after the scene is named in the forbidden list instead; non-canon What-Ifs are
never offered as a source.

### What the model is sent

**Labs → 🔍 What the model is sent** shows the live system prompt for the most
recent scene: its total size against the budget, the ten largest blocks with
their character counts, the full text, and a save button. It is the fastest
way to see why a small model is struggling.

### The prompt is budgeted

All of this competes for one context window, so `RP.fitPrompt` assembles the
prompt under `RP.PROMPT_BUDGET` (11,000 characters — the server refuses 16k).
Reference blocks are halved in a fixed order (citations → lore book → world
log → lore → history → script → filed descriptions) and then dropped
back-to-front, while the character card at the head and the instructions at
the tail — scene state, stage directions, the fate roll — are **never**
sacrificed.

## 👍 / 👎 — ratings are training data

A thumb is not decoration. Every rating keeps a short excerpt of the reply,
and the excerpts go back into the prompt for later turns:

```
WHAT THIS READER KEEPS AND WHAT THEY THROW AWAY — this is feedback on YOUR writing, act on it
They marked these GOOD. Write more like them — the same rhythm, register and level of detail:
  + “He says it in four words and leaves.”
They marked these BAD. Do not write like this again:
  - “A long, flowery paragraph that says the same thing five times over…”
Their kept replies run about 34 words. Aim for that. The ones they threw away were much longer — do not pad.
```

Ten excerpts are kept per side, newest first, with the people in the current
room taking the places. Length is derived from what you kept, because that is
the signal a small model can actually act on. The character panel's thumbs
rate the last thing that was said, **👍 What I like** lists everything the
model has been told (with *Forget this* per excerpt), and it all travels in
the lore bundle.

## Memory — three layers

1. **The world log** (`Feed`). Every chat opening, every fired beat, every
   pinned or 🧠-remembered line — each stamped with **two clocks**: the
   in-world date it happened on (🕯) and how long ago you played it. The feed
   filters by kind and by search, and a line dated after the current scene is
   handed to the model marked *they cannot know it*. Entries about a character are handed to every
   *other* chat that character appears in, under
   `WHAT HAS ALREADY HAPPENED (other chats, same world)`. A chat is never told
   its own log lines — it already has them as history.
2. **Character memory** (`Labs → Character memory`, or **Memory** in the
   character panel). Per character: the lines they said and heard — each with
   its in-world date, the chat it came from and a jump back to it — facts you
   taught them, a mood, and a relationship score with everyone they have
   shared a room with.
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

## 🎙 Commentary mode — Waluigi and Luigi, at length

Point them at anything — a filed event, a faction, a chat you played, a page
out of the lore book, or a phrase — and they talk about it for as long as you
asked for.

| Format | Runs | What it is |
|---|---|---|
| **Podcast** | 15–60 min | Two hosts, one subject, digressions allowed |
| **Debate** | 15–60 min | Two positions taken seriously, neither wins cleanly |
| **Deep dive** | **30 min – 2 hours** | Chronological, exhaustive, footnoted out loud |
| **Hot take** | 15–30 min | Short, loud, over before either calms down |

**How a two-hour episode gets written by a 7B model.** It does not, in one
call. `RP.commentaryPlan` turns the runtime into words (150 wpm — a 2-hour
deep dive is 18,000 words) and splits it into **~600-word segments** against
the format's own shape (cold open → background → the first disagreement →
the material nobody quotes → … → sign-off). The runner then makes **one call
per segment, one at a time**, handing each one the outline, its own focus,
the last thing said, and the list of what has already been covered so it does
not double back. You can stop mid-run and press **▶ Carry on** later; a failed
segment keeps everything written up to that point.

**The material is real.** `RP.commentarySources` searches the same index the
citations use and hands over the matching events, factions, characters and
wire posts with their ids and dates. The prompt's standing rule is *never
invent a filing, a date, a quotation or a number — if the material does not
say, say that it does not say.*

**The voices.** Waluigi: vain, precise, allergic to being corrected and
constantly being corrected. Luigi: decent, anxious, better read than he lets
on, worried about the people rather than the record. No stage directions, no
asterisks, no narration — it is commentary, not a scene.

**🔊 Read it aloud** sends the episode through the local **Qwen3-TTS Enhanced
Studio** (the same Gradio bridge the main site uses — see
[`QWEN_TTS_BRIDGE.md`](QWEN_TTS_BRIDGE.md)), one voice profile per speaker
(`Waluigi` and `Luigi` by default, read from `waluipedia-tts`), synthesizing
the next line while the current one plays. With no studio running it falls
back to the browser's own voices rather than doing nothing.

Episodes are saved (newest first), export as a markdown script or plain text,
and travel in the lore bundle.

## Character cards — the format everybody else uses

Cards are read and written in the standard shape, so the chatroom is not an
island:

| | |
|---|---|
| **PNG in / out** | the card JSON, base64'd into a `tEXt` chunk named `chara` — SillyTavern, Chub, Agnai |
| **JSON in / out** | `chara_card_v2` (`spec_version: 2.0`) with the v1 flat fields alongside, so old tools still read it |

Exporting an archive character writes the card **into their own filed
portrait**, so the file is a picture and a card at once (the PNG writer adds a
correctly-CRC'd chunk before `IEND`, leaving the image intact). Most archive
portraits are JPEGs, so anything that is not already a PNG is **redrawn as
one** through a canvas rather than falling back to JSON, and any existing
`chara` chunk is **removed first** — a re-exported card carries exactly one
card, so other tools cannot read the old one by mistake. The archive's
own fields — id, race, affiliation, status, standing, key events — ride along
under `extensions.waluipedia`, and an imported card joins the cast as a guest,
described rather than drawn, with its scenario filed into the lore book.

**Labs → Character cards & stories** has all of it: import a card, export a
character, import a story, write a brief.

## What the importer accepts

One file picker, one paste box, and everything goes through `RP.sniffImport`,
which works out what the file *is* before trying to read it:

| The file | What happens |
|---|---|
| **v1 card** (flat `{name, description, personality, first_mes, …}`) | imported as a character |
| **v2 card** (`spec: chara_card_v2`, fields under `data`) | imported as a character |
| **PNG card** (the JSON base64'd into a `chara` tEXt chunk) | imported, and the picture becomes the portrait |
| **JSONL chat log** (one message per line, SillyTavern-style) | imported as turns |
| **JSON chat log** (`{messages: […]}`, `{chat: […]}`, or a bare array) | imported as turns |
| **Chatroom bundle** (`waluipedia-chatroom-bundle`) | imported as chats, with memory and lore |
| **Plain transcript** (`Name: line`, `**Name:** line`, prose) | imported as turns |

Byte-order marks are stripped before parsing, bytes and text are both
accepted, and a card chunk that was written unencoded (some exporters do) is
read as well as a base64 one.

**When it refuses, it says why** — not "unsupported":

- *"That PNG is just a picture — there is no character card stored inside
  it."*
- *"That PNG has a card chunk, but it could not be decoded. The .json version
  of the same card will work."*
- *"That file starts like JSON but does not parse — something truncated it."*
- *"That is JSON, but not a character card, a chat log or a chatroom bundle."*

## Importing into a chat that is already running

An import does not have to start a new chat. **Character panel → 📥 Import
into this chat** takes:

- **A story** — pasted, or a `.txt` / `.md` / `.json` file. The turns are
  **appended** to the chat you have open, speakers matched to the cast, a
  divider filed in the stream saying where the seam is (`— 6 imported turns
  from an old episode —`), and play carries on from the bottom.
- **A character card** — `.png` or `.json`. They join the cast of *this*
  chat, get a state sheet, and say their `first_mes` greeting as their first
  line. **The card's own picture becomes their portrait** (a PNG card is
  cropped square and shrunk to 256px so a 200 KB face does not fill the
  browser's storage).
- **The backlog** — see below.

A pasted `waluipedia-chatroom-bundle` is recognised too and imported as
chats, so a whole exported conversation can be dropped straight back in.

## How long a turn is

A local model left alone writes six paragraphs of weather. ⚙ **Settings →
reply length** sets the dial, and it goes into the prompt *and* into
`max_tokens`:

| | | |
|---|---|---|
| **Snappy** (default) | **2–4 sentences** | one or two beats, no scene-setting, no weather |
| **Normal** | **4–7 sentences** | one moment, played properly |
| **Rich** | **8–14 sentences** | two or three short paragraphs |

Sentences, not words: a count a small model can actually hold while it
writes. The token cap is a **safety net** (420 / 700 / 1,200), deliberately
larger than the band needs, so the limit is never the thing that ends a
turn.

**The world gets one band more room than the characters** — describing a
place is the one job that needs the words, and dialogue is the job that does
not.

## A turn always finishes its sentence

`max_tokens` used to end a reply wherever it happened to land — *"your voice
a low rasp that barely carries past your own face: \"The patterns are"*.
Three things now stop that:

1. **Every length band ends with an instruction to land it** — *"THE LAST
   SENTENCE MUST BE A WHOLE SENTENCE. Count as you go, and when you reach the
   last one, finish it and stop… it is better to write one sentence fewer and
   land it."*
2. **The page notices.** `RP.looksTruncated` flags a reply that ends without
   terminal punctuation, on a comma or conjunction, or with an odd number of
   quote marks — somebody is still speaking. When it fires, the model is
   asked to **continue from exactly where it stopped** ("do not start again,
   do not repeat a word of it, bring it to a proper stop") and the two halves
   are stitched, with the repeated seam removed. Up to two continuations.
3. **Last resort:** if it still trails off, `RP.trimDangling` cuts back to
   the last full stop, so a dangling fragment never reaches the page.

The caps are generous on purpose — 420 / 700 / 1,200 tokens against bands of
2–4, 4–7 and 8–14 sentences — and up to **three** continuations are allowed,
the last one asking for "one or two sentences at most" to close it off.

## ◍ The Director — who narrates, and how

The narrator has a voice, chosen in ⚙:

| | | |
|---|---|---|
| **◍ The Director** (default) | rich | Cinematic, deadpan, neo-noir. Sensory focus, sound used to build, dramatic irony, and it treats the archive's silliest names with complete seriousness |
| **◍ The world** | normal | Neutral: what is there, what changes, nothing louder |
| **▫ The room** | snappy | Two sentences. What happened, what is different |
| **§ The archive** | normal | Filed narration — dated, named, dry asides |

**It does what you told it.** The rule that makes narration useful is in
every narrator's prompt:

> *DO THE THING THEY DID. If they read something, invent and show what it
> actually says — the real words, quoted, specific, relevant. If they search,
> say what is found, or plainly not found. Never replace their action with
> weather. You may make it cost them, go wrong, or turn up something they did
> not want — **but you may not skip it**.*

So reading your notes aloud produces the notes. Whether the night then goes
well is the **Fate roll's** business, not the narrator's — that is the
"does what I tell it, but not every time" split.

**It stops repeating itself.** Two things were wrong before: narration was
never put into the model's history (so every turn re-established the same
cloak and the same moon, and the place quietly changed from an outpost to a
cabin), and nothing told it what was already set. Now narration is in the
history as `Narration: …`, it is remembered like any other turn, and
`RP.continuityBlock` lists the last narration turns under:

> *ALREADY DESCRIBED — do not describe any of it again, do not rename the
> place, do not re-dress the player, do not re-hang the moon. Spend this turn
> on what is NEW.*

**📍 Fixed facts.** The first time narration names where you are, what you
are wearing or what time it is, it files it:

```
[[SET: place = the stone patio of the outpost]]
[[SET: wearing = a heavy fur-lined travelling cloak]]
[[TIME: a little after midnight]]
```

Those go back into every later prompt under **FIXED FACTS — established in
this scene and NOT open to revision**, so an outpost cannot quietly become a
clinic on Star Hill two turns later. The 📍 button in the chat header lists
them, lets you add or forget one, and the clock shows as 🕰 beside the date.
Changing a fact is allowed, but it is reported as a change rather than done
silently.

**No stray brackets.** Anything in double brackets that is not a real
directive — `[[MOOD: spooky]]`, `[[TIME: 23:00]]` in the middle of a
sentence — is stripped before the reader sees it. A model inventing its own
syntax is not the reader's problem.

**It answers what you asked.** A player turn containing questions — *what am
I wearing, where am I* — is pulled out and listed, to be answered concretely
once, in prose, and then left alone.

## The world's own turn

A scene where nobody else is present used to sit there waiting. Now the
**world** takes the turn: it describes the place, the hour, what moves and
what changes, in the present tense, addressing you as **you** — and it never
writes your character's speech, thoughts or decisions.

- **★ Star a character** in the speaker rail to say *you play them*. The
  model stops speaking as them, and with nobody else in the room the world
  narrates around you instead.
- The world is on the rail as **◍ The world** — press it to hand it the next
  turn deliberately.
- The **director** may also choose it: `WORLD` is one of its three answers
  (a character / the world / back to you), so a scene that has run out of
  dialogue moves rather than stalling.
- ⚙ turns it off entirely.

It carries the same scene, lore book, citations, script, state sheets and
stage directions a character gets — so the world can wound somebody, walk
someone in, or fire a beat.

## The sequencer — you write, the scene answers, the scene stops

A director that picks one speaker at a time turns a six-hander into a queue.
The **sequencer** stages the whole beat instead: after you write, one small
planning call answers

```
ORDER: The Timber Gang, WORLD          ← who reacts, in the order they react
NOBODY                                 ← when the scene is waiting on you
```

and the page plays exactly that — one turn at a time, each with its own roll
and stage directions — then **hands back to you**. If the answer is `NOBODY`,
**the world takes the turn instead** and plays out what you just wrote: a
scene never simply stops with "nobody had to answer that". Only with the
world switched off does the turn come straight back. Silence is a real answer:
the prompt says *"only people who have a REASON to speak right now… two is
usually plenty, one is common"*. A rambling answer is not mistaken for
silence; one character answers and play continues. The chain ceiling and the
Fate settings still apply, and the character you ★ play is never staged.

## Branching and undo

- **🌿 Branch from here** on any line copies the chat up to that point into a
  new one. The original is untouched — *what if he had lived* costs nothing.
- **↩ / ↪** in the header, or **Ctrl/⌘+Z** and **Ctrl/⌘+Shift+Z**, roll the
  last turn back and forward again. Snapshots cover the messages, the cast
  **and** the state sheets, twelve deep.

## Your persona

**Labs → Your persona** is one sheet — name, a line about who you are, what
you look like, what you are carrying, anything else — and it goes into every
chat under `THE USER PLAYS`. It is separate from the archive: ★ starring a
character in a scene says *I am playing them tonight*, and the persona is
still you underneath.

## Keyword lore — exact facts, injected on sight

**Labs → Keyword lore**. Give a fact some trigger words and, the moment one
of them turns up in the recent turns, the fact goes into the prompt word for
word:

```
Master Sword, blade of evil   →  Filed as lost in 1012 BF, never as broken.
/dark shores?/i               →  A province, not a beach: Darian rules it.
(always on)                   →  The archive never uses real-world dates.
```

Plain words match whole words only (*mastered swordsmanship* does not fire
it); anything wrapped in slashes is a regular expression. This is the cheap,
certain half of retrieval — the citations system does the dated, searchable
half.

## Macros — one click instead of a sentence

Above the composer: **🗡 Attack · ✦ Cast · 🛡 Guard · 💬 Talk down · 🌑 Slip
away · 🔍 Look closer**, plus **＋** for your own. A macro picks a target when
the scene has more than one, spends the MP it costs, writes the attempt, and
lets the Fate roll decide whether it lands.

## Sampling and model routing

⚙ Settings exposes **temperature, top_p, top_k, repetition penalty and
min_p** (blank means "let the model decide"), and a **background model**: the
sequencer, the lore book, hooks and commentary can be sent to a small fast
model on its own endpoint while the roleplay itself goes to the big one.

## The script knows when to stop

A chat started from a Scene card carries that filing's beats. If you jump the
clock — *"3 days later"*, *"later that night"*, *"the next morning"* — the
script no longer lines up with the scene, so it **pauses itself** and says
so. The header chip reads `⏩ paused 2/7`, and pressing it fires the next
beat deliberately. No more *beat 3 — he sat in front of a VHS tape* landing
in the middle of a different night.

## You are the character you starred

★ starring somebody means your turns are **theirs**: the label on your
messages, the avatar beside them and the composer's placeholder all say so
(*"Write as Lord Darian Marsh…"*) rather than showing your account name.

## ▶ Auto

Next to Continue: plays the scene by itself for a few turns (six by default,
set in ⚙), one at a time, stopping when you press ■ **or the moment you type**.

## One card per turn

The fate roll, any state changes and a beat that fired are folded into the
bottom of the turn they belong to as a quiet strip of chips, instead of
three separate cards in the stream:

```
Waluigi   …prose…
          ⚄ It works   Sans −10 HP (38/100)   ⏩ Two days after the studio
```

## Nothing is cut off mid-word

Filed text is shown and sent **whole**. `RP.clip` cuts at the last sentence
that fits, then at the last whole word, and only marks the cut when something
was really dropped — so a status line reads *"…the only witness who has seen
the Director's remote"* rather than *"the only witness w…"*. The fields that
carry the most meaning were given room to say it (status 480, summary 600,
description 1,400, the dossier in the prompt 1,400), the character panel
shows the whole filed status and scrolls, and the short labels in the panel
menu are shortened by **CSS**, with the full value on hover, rather than by
cutting the string.

## Editing what has already been said

Every line in a chat carries its own controls, next to 👍 👎 📌 🧠 ↻:

| | |
|---|---|
| ✏️ **Edit** | rewrite the line. The edit replaces it everywhere — on screen, in the model's history, in exports — and the old swipe takes are dropped, because they are no longer true |
| 👁 / 🙈 **Mute** | keep it on screen, take it out of the model's head. Muted turns are greyed and excluded from the history the model is sent |
| 🗑 **Delete** | gone, after a confirm |

The chat's **context window** — how many recent turns the model may see — is
in ⚙ Settings (default 24) and can be overridden per room. That, plus muting,
is how you stop an imported 300-turn story from dragging on every reply.

## Bringing somebody in mid-scene

**＋ New** on the speaker rail:

- **From the archive** — pick who walks in; they join the cast with a state
  sheet of their own.
- **Invent one** — a name, a job, a face. Kept in `state.newChars`, playable
  again later, described rather than drawn.
- **From a character card** — `.png` or `.json`, and they say their greeting.
- **Let the model choose** — files a scene note and asks for the next turn;
  the model has `[[NEW: …]]` and `[[ENTER: …]]` for exactly this, so it names
  them, describes them, and they stay in the scene.

## Catching the lore book up on an import

A long import is a lot of unread turns. Reading every three-turn stretch of a
300-turn story would be a hundred calls, so the default is the **smart read**:

- **bigger stretches** — the chunk size is worked out from the backlog and
  the budget (30 turns a call rather than 3),
- **the end of the chat is always read**, because that is what the next turn
  follows on from,
- **the rest of the budget goes on the parts that establish something** —
  names, places, numbers, things said out loud, verbs like *signed*, *named*,
  *burned* — and ordinary back-and-forth is skipped.

313 turns: 104 calls the naive way, **6** the smart way (covering the densest
163 turns plus the live end), or 12 to cover every single turn. The dialog
prices both, and the number of calls **and the session budget are editable
right there**:

```
There are 42 unfiled turns in this chat. Reading them for places, people,
events and a diary would take about 14 small calls — one at a time, never
alongside a turn you are playing. You have 38 left in this session's budget.

            [ Not now ]  [ Read everything (104) ]  [ Smart read ]
```

The jobs go through the same queue as live filing (one at a time, capped,
budgeted), overlapping by a turn so nothing falls between two stretches.
Skipping costs nothing — the chat still plays, and new turns are filed as
usual.

## Keeping it — saves that outlive the browser cache

`localStorage` is one cleared cache from gone, so **Labs → Keeping it**:

| | |
|---|---|
| 💾 **Save to disk** | writes the whole state — chats, memory, lore book, cards, episodes — to `workflow/saves/chatroom.json` beside the server, keeping the last ten timestamped backups |
| 📂 **Restore from disk** | lists what is on disk with its date, chat count and size; restores by **merge** or **replace** |
| ⏱ **Autosave** | the same save, quietly, at most once a minute |
| ⬇ **Download a backup** | the same bundle as a file, if you would rather hold it yourself |

Routes: `POST /api/chatroom-save` (12 MB cap), `GET /api/chatroom-save?name=`,
`GET /api/chatroom-saves`. Save names are filenames, not paths — a name that
tries to climb out of the folder is refused. `workflow/saves/` is gitignored:
it is your play, not the archive's.

## Text in, text out

`RP.parseTranscript` reads a pasted or uploaded transcript — `Name: line`,
`**Name:** line`, or plain prose — matches the speakers to the cast, treats
anything unattributed as your own turns, and opens it as a playable chat you
can carry on from the bottom. Every chat exports as plain text as well.

## Exports, for four different readers

**Character panel → ⬇** offers:

| | |
|---|---|
| ✍️ **Story brief** | trimmed for a writing model: who, when, the situation, the beats that fired, the turns, where everyone ended up, what the scene established — and **nothing else**. No ids, no swipe alternatives, no error notices, no state pills, no settings. A long chat is cut in the middle rather than truncated at the end, so the ending survives |
| 📦 **Full chat** | a `waluipedia-chatroom-bundle` another chatroom imports: the room, its memory, lore, book pages and invented characters |
| 📄 **Transcript** | markdown, for filing into the wiki |
| 📝 **Plain text** | just the turns |
| 📇 **Character card** | PNG or JSON, as above |

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

## The chat screen

A heads-up display rather than a title bar:

- **🕯 the in-world date** (click to change it), **⏩ beat *n*/*m*** with a
  progress meter, **🎲 the fate level** (colour-coded, click to change),
  the turn counter, and a **📓 badge** when the lore book is queued or writing.
- **🩺 Party** — the state sheets as cards with HP/MP bars and condition chips.
- Quick actions above the composer: **➤ Continue**, **⏩ Next beat**, and
  **🎲 Attempt…**, which writes your action as an *attempt* and lets the roll
  decide whether it works.
- **📓 Book**, **📖 Sequel** and the character panel sit on the same bar.

## Quality of life

| | |
|---|---|
| `Esc` | close a dialog, or leave the chat |
| `Ctrl`/`⌘` + `Enter` | send your turn |
| `/` | jump to search |
| `n` | let the next character speak |
| `?` | the shortcut list |

Chats can be renamed and deleted from the character panel (deleting a chat
keeps the memories it filed, because other chats depend on them), the world
log filters by kind, and the archive's own sidebar now links the chatroom
(`index.html` → World → 💬 Chatroom).

## What must not be hand-edited

- `chatroom.html`
- `workflow/roleplay.html`

Both carry a generated-file banner. `tools/build-chatroom.py --check` is the
gate; a PR whose pages do not match their sources is a broken PR.
