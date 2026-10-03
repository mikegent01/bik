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
| How the cast talks | `Reputation-Matrix2/data/voices.json` — a voice sheet per character | the archive |
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
- **The chat** is a **stage** and a **dock**. The stage holds one scene,
  or **two full scene columns** when one is linked — each with the whole
  header, sheets, stream, turn bar and its own prompt; the dock on the
  right is one tab per system and serves whichever scene you point it at.
  Nothing lives only behind an icon: every control has a word on it, and
  anything that can be done to a person or a line can also be done by
  dragging it.
  - **Header** — `‹`, the scene's name and cast, then the HUD: 🕯 the
    in-world date, 🕰 the clock, ⏩ the script's progress, 🎲 how hard
    fate pushes, 💬 turns. On the right: **■ Stop** (only while something
    runs — a reply, the autopilot, a reading, an audio render; Esc too),
    **⇄ Second scene** (the other scene's name once there is one), **🩺
    Party** sheets, who answers you (👂 / 🔒 / 🔓), ↩ ↪, ⋯ (the same scene
    tools as the dock's Scene tab) and ☰ for the dock on a narrow screen;
    the second scene's column has **⇄ Front** in its place.
  - **The stream** — avatars, names, markdown-rendered turns (`*action*`,
    `**bold**`, `"speech"`, `- lists`) with per-line controls: 👍 👎, 📌
    pin, 🧠 remember, ↻ another take, `‹ 2 / 3 ›` swipes, ✏️ 👁 🗑 🌿 — and
    a **⠿ grip** that drags the line into the other scene.
  - **The turn bar**, two rows above the composer. *Who is up*: 🎭 Play
    as / ★ You, then **Next:** the Director and every face in the scene
    (click one and they speak next; drag one across the stage). *What you
    do*: **🎬 Direct… · 🎲 Attempt… · ➤ Continue · ▶ Auto · ⏩ Next beat
    · ＋ Bring in…**, and quietly to the right your macros, ✂ reply
    length and 🧹 notes.
  - **The dock** — portrait, name, `By @handle`, interaction count, then
    the tabs:
    - **👥 Cast** — who you play, every seat in the scene (drag to move,
      ☆ to play them, 🚪 to write them out, click to edit the sheet), the
      written-out bench with ↩ and ✖, **＋ Invite from the archive**,
      **✨ Invent someone**, **🩺 Party sheets**, and the filing of whoever
      the chat is about.
    - **🎬 Scene** — the scene text (click to rewrite), 🕯 When, 🕰 the
      clock, 📍 Fixed facts, ⏱ the script; the **Second scene** card;
      *how the scene runs*: 🎲 Fate, ✂ reply length, 🎬 Director, the
      narrator, who answers you, 👥 audience murmurs, ✨ Style, 🖌
      Customize, 📝 special instructions; *housekeeping*: 🧾 Audit, 🎭
      Replay, 📖 the sequel, ✎ New chat, ✏️ Rename, 🗑 Delete.
    - **🧠 Memory** — Memory, Pinned, Persona, the lore book, History,
      👍 👎 and *What I like*.
    - **🔊 Voice** — the voice settings, ▶ read the last reply, 💾 the chat
      as audio (both scenes, when linked), 🛠 Fix chat.
    - **⬇ Share** — Export (both scenes too), the character card, Import
      into this chat, ⚙ all settings.

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
`gentle`, `normal` (default), `harsh`. The difficulty picks the table; a
**tilt** then slides the weights along it (`RP.fateTilt`, ±3 pips, every
pip listed on the pill so the arithmetic is never a mystery):

- the stat your attempt leans on (`RP.actionStat` reads the wording — *heave*
  is might, *bribe* is sway, *disarm* is wits, *shoot* is luck): score 0 is
  −1, 1 is even, 2 is +1, 3 is +2;
- **your own body**: HP at or under 35% is −1, down is −2, conditions are
  −½ each up to −1. Only *your* sheet counts — an enemy bleeding out used to
  make *your* attempt harder, which was backwards;
- a thin-air claim is −2 (see below).

The roll is shown to the reader as a pill on the turn it decided — *⚃ Works
— at a price · ⚔ might 2 (+1) · 🩸 badly hurt (−1)* — and the model is told
the lean in words (*"the attempt leaned on might (2 of 3), and they are
badly hurt — let that show in HOW it goes, never as numbers"*), so a refusal
never looks like the model being broken and a strong stat is visible in the
prose, not just the odds.

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
| Story | no numbers at all — conditions and notes only |
| Stakes | HP only |
| RPG | HP and MP (the default) |

**Scenario settings.** The cast picker's **⚔ Starting state** step sets what
everyone walks in carrying: HP %, MP %, conditions (`wounded, hunted`),
inventory, and a physical note. A What-If battle can start at 50% HP with
`wounded` already true, and the model reads exactly that before its first line.

**Conditions and kit have substance.** A condition is a name, a note and —
if it passes — a count of turns that ticks down on its own
(`sleepless (three nights of it) [2 turns left]`, and then *"no longer
sleepless"*). An item is a name, a note about it, a quantity and whether it is
**in hand**: `holding a worn notepad · carrying a brass key ×2 — bent, from
the ledger room`. Both are editable by hand in the party bar, one per line.

**The model writes to the sheets.** `RP.DIRECTIVES` is in every system prompt
with mechanics on:

```
[[HP: Name -12]]                damage, healing (+), or an exact value (= 30)
[[MP: Name -5]]                 spent or recovered power
[[COND: Name bleeding 3 -2hp | a deep cut across the palm]]   a condition: turns it lasts, cost a turn, what it is
[[CURE: Name bleeding]]                                   ends one
[[COUNT: Name arrows -1]]                                 any counter
[[ITEM: Name + the brass key | bent, from the ledger room]]   gained, with a note · "-" lost
[[EQUIP: Name brass key]] / [[STOW: Name brass key]]      in hand, or put away
[[STATUS: Name bleeding badly]] a short physical note
[[MOOD: Name anger 2 | why]]    how they feel now, 1–3 — see 🎨 Colour is emotion
[[ENTER: Name — why they arrive]]   bring someone into the scene
[[EXIT: Name — why they leave]]     write someone out
```

The **player's own sheet answers to their name** for all of these — `[[HP:
Marlow -4]]`, `[[ITEM: Marlow + 🪙 a cut purse]]`, `[[COND: Marlow poisoned 3
-1hp | pale wine]]` — and `the player` works when the model forgets the name.
The two things it can never do to the reader are **ENTER/EXIT** them and
decide what they say.

`RP.parseDirectives` strips them from the prose before the reader sees it and
`RP.applyDirectives` applies them: pools clamp at 0 and at max, names are
matched longest-first against the people actually in the room (so *Lord Darian
Marsh bleeding* is one person and a condition), **ENTER** resolves against the
whole archive — inventing a card only when the archive has never heard of them
— and **EXIT** marks the sheet absent rather than deleting it. Every change is
reported to the reader as a pill under the turn, and roster changes are filed
in the world log.

**And when the model forgets the paperwork**, the page bills the wound
itself: a crash, a blade or a blast in the prose costs a share of max HP
with no second call — see **💥 The hurt ledger** below.

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
affiliation, faction, faith (as one line — *"silph corporate policy
(Founder-adjacent)"*, never the raw objects), status, standing and power
level — and `RP.card` puts the description in the prompt as **a biography
written by Waluigi ABOUT the character**: use it for facts, history and
relationships, do *not* borrow its narrator's tone. (Waluigi's own card is
the exception: there the description *is* his voice.) In a group turn every
other character is listed with their own summary, so the speaker knows who
they are talking to.

### Voice sheets — how they actually talk

A dossier tells the model what a character *did*; it does not tell it how
they *sound*, which is why every mouth used to come out as the same polite
narrator. `Reputation-Matrix2/data/voices.json` holds a **voice sheet** per
character, and `RP.voiceBlock` puts it in the prompt under `VOICE`, straight
after the card:

```json
"wario": {
  "register": "Loud, greedy, delighted with himself, and never once sorry. First person, in short punchy bursts…",
  "sounds":   ["'Wah-ha-ha!' when a plan is working", "nicknames instead of names: 'string bean' (Waluigi), 'kid', 'scout'", "…"],
  "never":    ["apologises, reflects, or explains how he feels", "does anything for free", "…"],
  "lines":    ["I don't do chairs for free. This chair owes me money. The cushion owes me money. …", "…"]
}
```

- **register** — one paragraph: the attitude, the person, the rhythm.
- **sounds** — the tics: catchphrases, nicknames, what they keep coming back
  to. Rendered as one *Sounds like:* line.
- **never** — the anti-generic guard, rendered as one *Never:* line.
- **lines** — real quotes from the filings (the broadcasts are the best
  source), given to the model as *"lines in their own mouth — do not repeat
  them; write NEW ones that could sit beside them."* Up to five are sent.

A sheet replaces the behaviour line `RP.roleFor` used to infer from the
record (that inference still covers anyone without one, now on word
boundaries — *price* no longer makes somebody an ice mage). An **imported
card** gets a sheet of its own from its `mes_example` / `system_prompt`, so a
character.ai or SillyTavern export plays with its examples. The sheet is a
data file: writing one for a character who sounds flat is a JSON edit, not a
code change — and `voices.json` is checked by `test-chatroom-core.mjs` (every
id must exist in `characters.json`, every sheet needs all four parts).

The prompt ends on the character too: after the stage directions and the
length, the last thing the model reads is `NOW ANSWER AS WARIO — first
person, in their own voice from VOICE above…`, so two thousand characters of
mechanics are no longer the final word before it writes.

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
prompt under a budget: `RP.PROMPT_BUDGET` (11,000 characters) by default,
raisable in **Settings → System prompt budget** up to 30,000 for a model
with a real window (the server's hard wall behind it is 32k). Reference
blocks are halved in a fixed order (citations → lore book → world log →
lore → history → script → filed descriptions), the halving repeating before
anything is dropped outright — a block cut to a quarter still cites
something, a block deleted cites nothing — while the character card at the
head and the instructions at the tail — who you play, scene state, stage
directions, the fate roll — are **never** sacrificed. In the base prompt only
the *filed description* paragraph is halved, never the voice or the rules.
When the card and the instructions alone overflow (a seven-person group with
mechanics on, at the default budget), the head is **squeezed** rather than
the tail sliced: the others' summaries go first, then the voice's *Never*
and *Sounds like* lines and one sample line at a time, and the register
paragraph is the floor. Turning mechanics off for a
pure conversation gives the voice sheet nearly five thousand characters
back; so does a bigger budget.

The chat history is budgeted the same way. On top of the turn-count setting
(up to 240 turns), `RP.packHistory` packs the turns newest-first into a
character budget (**Settings → History budget**, default 9,000) and clips
any single turn at `RP.TURN_CLIP` (1,600 characters) — so one pasted-in
monologue cannot evict ten normal turns or slow the model to a crawl, and a
long chat costs *turns*, not paragraphs.

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

## 🔊 Voices — every mouth through the Qwen studio

**How a turn is cut for the studio** (Voice tab → 🔊 Voice): **by turn**,
the default, reads the whole reply in the speaker's voice — a character's
card in theirs, the world's in the narrator's — as a few sentence-sized
requests (`RP.ttsChunks`, 450 characters, a 170-character lead so the
voice starts early). **By quote** is the old attribution: every quote in
its speaker's voice and the narration between them in the narrator's,
which is one studio request per quote and crawled on a line with six
short quotes — that was the "hang". `RP.speechParts(text, names,
speaker, player, { mode })` is the switch.

**■ Stop.** The header grows a red **■ Stop** (both columns, when two
scenes are up; **Esc** does the same) the moment anything is running:
the reply being written, the chain and the autopilot behind it, a line
being read aloud, or **💾 Chat as audio** rendering a long chat. It cuts
all of it — every request in flight is aborted (`stopAll`), nothing
half-written is filed (a cut turn leaves no error card and no undo
entry; a cut render writes no file and says how far it got), and the
chores and the chain behind the turn do not start.

Every ▶ on a message — and every reply, when voice is set to auto — speaks
through your **local Qwen3-TTS Enhanced Studio**, the same bridge as the
site's 🔊 Read aloud (`docs/QWEN_TTS_BRIDGE.md`). The endpoint and model
come from the reader's ⚙️ settings, saved once per browser.

**A speaker is linked to a saved voice profile by first name, on its own.**
When Wario talks, the studio's `Wario` profile reads the line; when Sans
talks, it asks for `Sans`. Save a profile under a character's first name in
the studio's Voice Studio and they have their own voice — nothing to
configure on this side.

The 🔊 **Voice** menu holds the rest:

- **Auto or on tap** — read every reply as it lands, or only on ▶.
- **Fallback voice** (default `Waluigi`) — reads narration, world turns,
  and any speaker whose profile the studio doesn't have. A missing profile
  is remembered for the session, so it fails over once, not every line.
- **Voice map** — for the exceptions: `sans = Freeman`, one per line
  (`narrator = …` picks who reads the world's turns). Full names beat
  first names.

**The studio's own library is the authority — and the speller.** Before
speaking, the chat reads the studio's app config: the voice dropdown's
`choices` there are exactly what the API will accept, case-sensitively.
Every voice sent — matched name, map entry, or fallback — is corrected to
the studio's own casing (`wario` goes out as `Wario`), and a name not in
the list goes straight to the fallback instead of erroring. If the config
can't be read the refresh-library endpoint is tried, then the first-name
guess.

**A failed line is read for *why* before anybody is blamed.** The studio's
error stream is parsed (`RP.studioError`): *"Value: Wario is not in the
list of choices"* is the profile being **turned away**; *CUDA out of
memory*, a timeout or an empty render is the **synthesis** falling over.
Both used to be treated as "the studio refused Wario" and Wario spoke in
Waluigi's voice until a page reload. Now, the first time a voice fails in a
session, the page **refreshes the studio's own library** (the same thing
as its Refresh Library button — a profile saved while the studio runs is
not accepted by its API until then) and **asks once more**. Only a voice
turned away *twice* is remembered as missing, with a toast that says what
to do (save the profile under that name, Refresh Library or restart the
studio, ▶ again). A render that fell over gives that one line to the
fallback and asks for the real voice again on the next one. **A manual ▶
always starts fresh** — misses, retries and the cached library are all
forgotten — so saving a new profile and pressing play again picks it up
immediately.

**Every voice in the turn.** A turn is not one mouth: narration is read by
the narrator's voice, and each quoted line is spoken by whoever the prose
says is speaking — `"nah," Sans says` is Sans, `Wario snarls, "…"` is
Wario, `Sans: "…"` is Sans. A quote the prose does not attribute belongs
to whoever is talking this turn; on a world or director turn that is
nobody, so the narrator (Waluigi by default) reads it.

**“…,” you say is YOUR line, in YOUR voice.** When the model writes the
player's dialogue inside another character's card — *"it's my latest
revision," you say* on a Wario turn — the reader follows the prose, not
the nameplate: second-person attribution (`you say`, `you reply`, `You
mutter,` …) sends that quote to the character you play. A character who
only listens gets no voice at all; the surrounding narration reads in
the narrator's voice. And remember the stacking trap: a speaker with
**no studio profile** falls back to the default profile (usually
Waluigi) — if a whole card sounds like Waluigi, press 🛠 Fix chat and
read the receipt; it names exactly who the studio is missing.

**💾 Chat as audio — one portable file.** Chat menu → *Chat as audio*
renders the entire chat through the studio — every turn in its own
voice, the same attribution rules as ▶ — then stitches the WAV chunks
losslessly (`RP.wavJoin`) into **one `.wav` download** named after the
chat. No encoder, no dependency, plays on anything with a speaker
(phones included). Long chats take a chunk per paragraph; progress
arrives as toasts, and a failed chunk names itself. The article pages
have the same power: **⬇ Save audio** next to 🔊 Read aloud, and a ⬇
button on the reading bar. (Why `.wav`, not `.mp3`: the studio speaks
WAV, and joining WAVs is lossless with zero dependencies — an MP3
encoder would mean vendoring a library. If size ever matters, any
phone or player converts a WAV in one tap.)

**The voice starts now, not after the whole turn is rendered.** The first
chunk of any reading is short (~170 chars — the opening line or two), so
playback begins almost immediately; the rest of a long turn is cut into
~450-char sentence-aware chunks that synthesize behind the one you are
hearing — one take, no synth-pause. No studio running at all? The
browser's own voice steps in and the toast says so. Tints speak their
words; the markdown furniture stays silent.

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

A local model left alone writes six paragraphs of weather. The dial is on
the **✂ button under the chat** and in ⚙ **Settings → reply length**, and it
goes into the prompt *and* into `max_tokens`:

| | | |
|---|---|---|
| **Let the scene decide** (default) | **2 sentences to 2 paragraphs** | the model sizes the turn to the moment: a retort stays 2–3 sentences, a move / reveal / new place gets a paragraph, two at most |
| **Snappy** | **2–4 sentences** | one or two beats, no scene-setting, no weather |
| **Normal** | **4–7 sentences** | one moment, played properly |
| **Rich** | **8–14 sentences** | two or three short paragraphs |

Sentences, not words: a count a small model can actually hold while it
writes. The token cap is a **safety net** (1,000 / 420 / 700 / 1,200),
deliberately larger than the band needs, so the limit is never the thing
that ends a turn.

**Let the scene decide** is the old snappy voice at the small end with room
at the big one — the answer to "the replies are good but short" without
turning every retort into a paragraph. It replaced Snappy as the default
once (`RP.migrateLength`, a toast says so); a length you pin afterwards
stays pinned.

**Whatever the band, the turn has to move.** `RP.MOVE_RULE` rides in the
length block of every prompt: *answer the specific thing just said or done,
and leave one concrete thing changed — a decision, a door, a price, a name
given up. A quip, a shout or a reaction on its own is not a turn.* Twenty
turns of characters shouting back at each other while nothing in the room
changed is what this is for.

**The world gets one band more room than the characters** when a band is
pinned — describing a place is the one job that needs the words. With the
scene deciding, the Director sizes to the moment too; ▫ The room stays two
sentences, because that is its whole point.

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
- **🎭 Play as…** on the same rail seats you as *anyone in the archive*,
  not just somebody already in the room — Waluigi, Wario, Bowser and Luigi
  are pinned to the top of the picker. They join the cast if they were not
  in it, the ★ moves to them, the composer, your avatar and the bottom-left
  account all show them, and the prompt tells the model who it is talking
  to (`THE USER PLAYS … they ARE Waluigi`). Tick **Open every new chat as
  them** and every new room seats you automatically (`state.user.playAs`);
  press the button again to switch, hand the seat back, or change the
  default.
- The world is on the rail as **◍ The world** — press it to hand it the next
  turn deliberately.
- The **director** may also choose it: `WORLD` is one of its three answers
  (a character / the world / back to you), so a scene that has run out of
  dialogue moves rather than stalling.
- ⚙ turns it off entirely.

It carries the same scene, lore book, citations, script, state sheets and
stage directions a character gets — so the world can wound somebody, walk
someone in, or fire a beat.

## 🧾 The audit — what does not add up

The **⋯** button in the chat header holds the scene's tools, and carries a
count when something is wrong. **Audit** checks three things and fixes them
in one press:

- **The date.** A scene played out of a filing is dated *by that filing* —
  *The Tape and the Wario Files* is 20 Harvestide **1035** BF, not today.
  If the room says otherwise, the audit says so and corrects it.
- **Who is actually here.** Anyone who has not spoken, and has not been
  mentioned, for six turns is offered to be written out of the scene. They
  stay in the cast; they stop being staged, stop appearing on the rail, and
  stop appearing in the party bar (which shows `◌ 2 not here` instead, one
  click to bring somebody back).
- **Pages filed in the future.** Lore-book pages stamped after the scene's
  own date are re-stamped.

Everything the audit does is one `↩` away — undo restores the messages, the
cast **and** the sheets together.

## Nothing reads tomorrow's filing

`searchArchive` takes the scene's date and **excludes anything filed after
it**. A chat set in 1035 BF cannot quote a 1040 BF reckoning, however well it
matches the words. (The dated citation list already did this; the search did
not, which is how future material was getting in.)

## 🔎 Search — the cast can look things up

Nothing reads a whole filing. `RP.searchArchive` scores a query against every
record the page has loaded, finds **the passage inside the winners that
actually matched**, and hands over only that:

```
FROM THE ARCHIVE — searched just now for "the Iron Mandate vote"
These are real passages out of real filings. Quote them, date them, argue with
them — but do not invent around them, and do not pretend to know more of the
file than is here.
- [event:the_iron_mandate] The Iron Mandate (21 Highsun, 1040 BF)
    “The division was recorded as twenty-eight for, eight against and three
     abstaining, and the three abstentions have never been printed…”
```

Two ways it fires:

- **Every turn, automatically.** The query is what was just said **plus**
  what this scene is (its filing, its name) **plus** the filings the speaking
  character is attached to — so a quiet turn still pulls the material it
  belongs to. The passages ride along beside the dated citations, and the
  turn card shows a **🔎 chip per filing it read**, so you can see it
  working. The in-character rules also now say: *"Use the material… quote it,
  argue with it, get it slightly wrong in character if that is truer. A scene
  that could have happened in any story is a wasted turn."*
- **On demand, by the model.** `[[LOOKUP: what you want to know]]` is a real
  tool. The page runs the search, **files the results into the lore book**,
  shows you `🔎 looked up "…" — 3 passages filed`, and then has the model
  write the turn again with the passages in hand. One extra call, once per
  turn. `[[REMEMBER: name | the fact]]` lets it file something itself for
  quick recall in every later scene.

The stage directions tell it plainly: *use it when you need a fact you do not
have — a date, a name, what a filing actually says — instead of inventing
one.* If the search finds nothing, it is told to say so in character rather
than making a filing up.

## What this session actually is

A chat started from a Scene card, a What-If, a continuation or a backfill now
remembers **which filing it came out of** (`room.sourceId`), and that filing's
dossier goes into every prompt:

```
WHAT THIS SESSION IS — the filed record this scene comes out of. Everybody here
lived it; use the names, the dates and the details, and never contradict them.
Filing: The Cut and the Puppet Master (5 Aethel, 1040 BF …)
Where: The Nintendo Mania studio — the break room, the ceiling ducts …
What happened: …        How it ended: …        What it left behind: …
Who was in it:  - Lord Darian Marsh — pressed the button, took the rolling pin …
How it ran:     - late morning — Fire, and the alarm. …
```

Before this the cast only ever had the event's one-line summary, which is why
nobody could "pull from" the material — it was not in the prompt.

## The audit harness — a hundred turns, on purpose

`node tools/tests/audit-chatroom.mjs 100` plays a hundred varied turns —
quiet ones, loud ones, questions, attempts, time jumps, out-of-character
notes, a regeneration — and checks the invariants after every single one:
nothing quoted from after the scene, nothing cut off mid-sentence, no empty
cards, no stray brackets in the prose, the speaker on the card is the one who
spoke, fixed facts never change silently, nobody speaks who is not in the
scene, and a private turn is not answered by a crowd.

`MOCK_ADVERSARIAL=1` makes the stand-in model **misbehave on purpose** — it
writes the wrong character, stops mid-sentence, invents its own bracket
syntax, and returns nothing at all, in rotation. The audit then proves the
guards catch all of it before anything reaches the page. Both runs are clean
at a hundred turns; the adversarial one found a real hole the first time
(the model writing the *player's* character), which is now taken back and
asked for again rather than filed under somebody.

## The right mouth, and never an empty card

Two things a small model does with a six-hander:

- **It writes somebody else's line.** `RP.checkSpeaker` looks at whose name
  opens the reply ("Wario growls…", "Wario:") and, if it is plainly not the
  staged speaker, the card is **filed under the person who actually spoke**
  rather than lying about it, with a toast saying so. The group prompt also
  now insists: *"START WITH ⟨NAME⟩. The first sentence must be ⟨name⟩ doing
  or saying something… If they genuinely have nothing to add, have them do
  one small physical thing and stop — but they must be the one doing it."*
- **It returns nothing at all.** An empty reply is asked for again, plainly;
  if it is still empty the page says *"⟨name⟩ had nothing to say — press ↻,
  or write your turn"* instead of filing a blank card under their name.

## Keeping a moment private

Three things stop a quiet turn turning into a town meeting.

**It reads the room.** The sequencer is told: *"A private moment is not an
invitation. If the player is reading to themselves, muttering, thinking,
grieving, hiding, or plainly alone with something, the answer is NOBODY or
WORLD — do not have somebody materialise to comment on it. Only stage a
character who is ALREADY in the scene and close enough to hear; nobody walks
in from off-stage to deliver a line."* Turns containing *to myself*, *under
my breath*, *quietly*, *without looking up*, *mutter*, *whisper* are flagged
private automatically; *shout*, *call out*, *turn to*, *announce* are flagged
open.

**You can pin it.** The header button cycles **👂 Reads the room → 🔒 Alone →
🔓 Open**. Pinned private means nobody but the narrator speaks until you
unpin it.

**Presence is real.** Each sheet in the party bar has a ◉ / ◌ dot: somebody
marked absent is in the cast but *not in the scene*, and cannot be staged,
rotated to, or made to answer. `[[EXIT:]]` sets it, the dot toggles it, and
`[[ENTER:]]` brings them back.

## Talking to the model, not to the scene

Anything in **((double brackets))**, after **`/ooc`**, or in `[[OOC: …]]` is
stripped out of what your character said and handed to the model as an
instruction:

```
I keep reading. ((no new characters — keep this between me and the page))
```

The prose keeps *"I keep reading."*, and the instruction goes into the prompt
under **"INSTRUCTIONS FROM THE PLAYER (out of character) — these outrank
everything else in this prompt. They are not spoken aloud, nobody in the
scene hears them, and you never refer to them."** It shows on your turn as a
small `(( … ))` chip so you can see what you asked for.

**📝 Special instructions** in the character panel is the standing version:
one note for this chat, one for every chat — *"Luigi is lying about the
tape"*, *"short replies tonight"*, *"no new characters"*. Both ride with
every turn and are never trimmed to fit.

## The sequencer — you write, the scene answers, the scene stops

**A pick on the rail is an order.** `Next: ◍ The Director · Wario · …`
under the composer is not only a readout: click a face (or the Director)
and whatever you write next is **theirs to answer** — the staging call is
skipped for that one turn (`room.pinnedNext`, spent by the turn it chose).
It used to be a hint the sequencer overrode, which is how "I picked the
Director and Wario answered for the fifth time" happened. The pick also
works with ➤ Continue.

**🎬 Direct… — the reader as director.** What you type into the composer
is said by your character, and a small model answers the words — "the
ceiling comes down" becomes Wario arguing about ceilings. **🎬 Direct…**
on the rail is the other channel: what happens next, written as a fact,
and who plays it landing (the Director narrates it, or a cast member
reacts to it in character). It is filed on the room (`RP.setDirection`),
rides the **protected tail** of the next prompt as *THE READER DIRECTS
THIS TURN — it HAPPENS, now, as written, in full; never call it a
direction*, shows as a 🎬 card for you, and is **spent by the turn that
lands** (a failed or re-asked turn still has it). `((double brackets))`
inside your own turn remain the quieter version — a note, not an event.
*＋ New → Let the model choose* uses the same channel now; before, that
request was a card only you could see.

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

The kit is written one item per line (`🗝 a brass key | bent` — same syntax
as everywhere else) and **seeds your pack**: the grid on your own sheet, in
every room that keeps mechanics on. Once a room has that sheet, the
`Carrying:` line under `THE USER PLAYS` reads from it live — the prompt can
never claim you still carry the key you handed over three turns ago.

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
The star only reaches people already in the room; **🎭 Play as…** on the
rail reaches the whole archive (see *The world*, above) and can be made the
default for every new chat.

## Style — In character is the default

**Style** in the character panel picks how a turn is written. The default is
**In character** (`RP.DEFAULT_STYLE = 'voice'`): first person, to the person
in front of them, mostly dialogue, small actions between *asterisks* on the
same line, no narrating yourself from the outside. **Novel** (third-person
prose, a paragraph or three), **Script**, **Casual** and **Archivist** are
still one click away. Rooms that were created on the old Novel default are
moved to In character **once** (`RP.migrateStyle`, flag
`settings.styleMigrated`) — a room set to Novel after that stays Novel.

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

## 🎒 The kit is a grid

Each sheet in the party bar carries an **eight-slot grid**: one emoji per
thing, what is in hand lit gold, a small count in the corner when there is
more than one, the note on hover. Clicking a slot offers **take it in hand /
put it away / use it / drop it** — using it writes the attempt and lets the
Fate roll decide.

The sheet answers to the names people actually write. `RP.findItem` tries
the exact name, then the name with articles and possessives stripped, then
one inside the other, then any solid word the two share — so the model's
`[[ITEM: Archivist - brass key]]`, `[[USE: the scroll]]` and `[[EQUIP: my
blue potion]]` find *🗝 a brass key | bent*, *📜 a scroll* and *🧪 blue
potion*. (They used to need the exact string and silently did nothing: the
prose said the key was handed over and the sheet kept it — the "inventory
is broken" bug.) Dropping one of a stack now drops **one** (*loses a purse (1
left)*), not the whole stack.

The emoji comes from what the thing is called (`🗝` for a key, `📼` for a
tape, `📄` for papers, `🏮` for a lantern, `📦` for anything unrecognised),
and the model can set one itself:

```
[[ITEM: Name + 🗝 a brass key | bent, from the ledger room]]
[[USE:  Name the brass key]]       spends one — the last of them disappears
```

The sheet the model reads lists them the same way — *holding 🗝 a brass key ·
carrying 📄 a worn notepad; 🏮 a lantern ×2* — with the standing rule that
**they may only use what is on the sheet**, and the standing manner that they
reach for it **only when the moment calls** — the kit is never inventoried in
prose.

### 👘 The wardrobe — the profile decides the kit

A character whose setup names no kit does not walk in empty-handed: the
filed record dresses them. `RP.kitFor` reads the title, status, summary and
description the same way `roleFor` reads behaviour — a soldier draws from
the soldier bucket, an archivist from the records bucket — with a
hash-stable pick inside each bucket, so two soldiers carry different blades
but the same character carries the same kit in every browser. Two to four
things, one always a pocket item with no power in it. **No model call is
spent on any of this.** A hand-written setup kit always wins, and
`kit: 'off'` on a room turns the wardrobe off entirely.

The profile also sizes the pack: `RP.packSizeFor` gives 6 slots by default,
more to merchants and couriers, fewer to nobles and none-to-speak-of to
ghosts and beasts (3), twelve to you. **A full pack refuses** — `[[ITEM: +]]`
into a full pack comes back as *"Grix's pack is full (6 slots) — the crown
has nowhere to go"*, on the record, and the model plays the refusal like any
other change line. Slots are editable per sheet.

### 👥 Audience mode — nobody freezes while two people talk

The classic group-chat failure: two characters lock into a
conversation and everyone else becomes furniture — time stops for the
rest of the room. Audience mode fixes it **inside the same model
call**: when present cast members aren't speaking this turn, one block
(`RP.audienceBlock`, ~120 tokens, only when an audience exists) rides
the prompt and licenses **at most one short beat** from the room — a
glance, a muttered half-line, a shifted weight. The rules are strict
so the spotlight survives: a murmur never a speech, no decisions, no
directives, never answering a question aimed at somebody else, and
silence is explicitly a valid reaction. No extra requests, ever — the
one-call-per-turn contract holds. A duel has no audience (two people
present = no block), solo rooms never see it, and Settings → *Audience
murmurs* turns it off entirely.

So: **nothing shows in a two-hander, by design** — you as Waluigi opposite
Wario has nobody watching. It appears the moment a third person is in the
cast and not speaking. For *other people doing things at the same time*,
rather than reacting in the margin, that is a second scene — see
**⇄ Linked scenes** below.

### ⇄ Linked scenes — one chat, two scenes, the same hour

Plot A is Wario and Waluigi in the plane; plot B is the two people on the
ground who are about to see its spotlight. They are **one chat with two
scenes**, not two chats: one line in the recents (*The plane ⇄ The yard*),
one world, one clock, and both columns are the full experience. **⇄ Second
scene** in the header (also the Scene tab, also ⋯) is the one door, and it
is built for the moment the split happens *mid-scene*:

- **✂ Split the scene** — the dialog shows every face in the scene. Tick
  who goes, write where they are and what is happening there ("the hangar
  roof, the same minute — Wario has the engine open"), and the page writes
  them out of this scene (↩ on the bench brings them back), opens the new
  one **with their sheets and kit, the date and the clock carried**,
  links the two, and keeps the camera here. If you play one of the people
  who go, you go with them and the new scene comes to the front; if you
  play nobody, *I go with them* leaves this scene to run on ➤ Continue.
- **Drag a face** — from the rail, the Cast tab or a sheet card — and a
  **drop zone** appears at the edge of the stage: *⇄ Drop here to start a
  second scene with them*. Drop, and the split dialog opens with that
  face already ticked.
- **Other people, or an existing chat…** at the foot of the dialog is the
  picker: a brand-new scene from the portrait grid, or **any chat you
  have** — every one of them, newest first, with a find box once there are
  more than six. A chat already paired elsewhere can be taken (the page
  asks first; it leaves that pair).

On a wide screen the second scene renders **at the side of the first as a
whole column** — the same header (date, clock, fate, 🩺 Party, 👂, ↩ ↪, ⋯),
the same sheet cards with their kits, the same stream with every per-turn
control, the same two-row turn bar (🎭 Play as, Next:, 🎬 Direct, 🎲
Attempt, ➤ Continue, ▶ Auto, ＋ Bring in, the macros, ✂) and **its own
prompt**. Only the text boxes are separate: a turn written in a column
goes to that scene. The two differ in one button — the front has ‹ and ☰,
the side has **⇄ Front**, which swaps them. The dock serves whichever
scene you point it at (a two-way switch at its top names them) and steps
behind ☰ while two scenes are up unless the window is very wide. Once two
scenes are up, **the other column is a drop target**:

- **A face dropped on the other scene walks over** — written out here,
  seated there with their sheet, and the other scene is handed a 🎬
  direction, *"Wario walks in from the plane."*, worded by you before it
  plays. The side column's own faces drag back the same way.
- **A turn dropped on the other scene is carried over** — ⟶ opens with the
  line's text, for you to reword as it is noticed there.

What the two share, without a button:

- **One world, one clock.** Anyone with a sheet in both scenes has **one
  sheet**: HP lost in the hangar is gone on the cockpit's copy before the
  next line is written; a key handed over there is in the pack here.
  Where they are (◉/◌) and who plays them stay per scene — the same
  person cannot stand in both places. The clock and the date are one too.
  (`syncLinked`, run on every save: the side that changed since the last
  save wins; a tie goes to the busier scene.)
- **Each scene knows the other** (`RP.meanwhileBlock`, in the reference
  material of both the character and the Director prompt): who is there
  right now, who you play there, where it is, and its last **eight**
  turns — *MEANWHILE, IN THE OTHER SCENE OF THIS SAME HOUR … Both scenes
  are one story, one world, one clock: what is established there is true
  here too. Its people are THERE, not here, and its lines are not yours to
  retell or answer. What crosses is what physically would, judged by how
  close the two places are — light, sound, smoke, a tremor, a radio,
  shouting, somebody walking from there to here.* Before the other scene
  has a turn, the block still names it (*nothing has happened there yet*),
  so a scene never plays as if it were alone. **🙈** in the link menu makes
  the two blind to each other.
- **⟶ Carry over…** is the by-hand version, for the thing you want to be
  certain lands: you write what reaches the other scene *as it is noticed
  there* — "a crash from the hangar next door, every light flickers" — and
  it lands in the other scene as a 🎬 direction that names where it came
  from, and plays at once.

One turn is generated at a time, in whichever scene you asked (the typing
indicator shows in that column), and a chain staged in one scene keeps
running there while you type in the other. `room.linkedTo` is mutual;
**⨯ Unlink** makes them two chats again; deleting the pair deletes both
(unlink first to keep one); a 🌿 branch is its own hour and is never linked.

**Exports know about both.** While a scene is linked, ⬇ Export offers,
under the single-chat choices, **⇄ Both scenes**: a markdown transcript
and a plain-text one that **interleave the two chats by the clock**, with
a `### ⇄ scene name` marker every time the camera moves and the 🎬
directions and ⟶ carried-over lines kept in place (`RP.linkedTranscript`);
a story brief that runs the two briefs back to back; and a JSON bundle
that carries **both chats and the link** (`RP.chatExport(state, room,
{ linked: true })` — both rooms keep their ids and `linkedTo`, so an
import on another machine re-links them). 🔊 Voice → **Both scenes as
audio** reads the interleaved turns into one file.

### 🎛 User control — the table is yours

Round 23 put the cast under your fingers:

- **＋ invite** (end of the party bar) lists the archive's roster —
  minus whoever is already seated — and adds your pick with a sheet,
  an outfit, and a 🚪 line in the stream.
- **The bench**: absent characters sit visibly at the end of the bar.
  **Drag** a card onto the bench to write somebody out; drag back (or
  ↩) to re-enter; **✖ removes their seat entirely** (confirm first —
  the archive record is untouched, only this chat forgets them;
  `RP.castRemove` also clears the star and the next-up slot if they
  held either).
- **🧹 Hide notes** (speaker rail) collapses the system rows — fate
  pills, 🛠 receipts, 🔎 filings, error notices — for a clean reading
  stream. They stay out of the model's context either way; the toggle
  only changes what *you* see.
- **🛠 runs itself every turn** now: the deterministic half of Fix
  chat (cast re-read, sheets mended, star rules, false-arrival purge)
  costs nothing when there is nothing to fix, so it no longer waits
  for a button. A real fix announces itself in a toast. The 🛠 menu
  button remains for the full version with the studio voice probe.

### 🧍 Your pack

**Starred somebody? Their sheet IS your pack.** When you ☆ a character
(`room.youPlay`), that character's sheet becomes yours — first card in the
bar, `(THE PLAYER)` in the prompts, twelve slots, the works — and the
persona's separate pack steps out of the statbar and the prompts until the
star comes off. You play Waluigi, you carry what Waluigi carries.

With nobody starred, the first card in the party bar is the persona's: a
twelve-slot grid (`RP.PLAYER_ID`, the `__you__` sheet), created the first
time a scene with mechanics needs it and **seeded from the persona's kit**
— each persona entry seeds once per room, so an item you drop in play does
not creep back, and an item written into the persona mid-scene still
arrives. Empty slots are `+`
buttons; full slots offer everything a cast slot does plus **🎁 hand it to
somebody**, which moves the thing sheet-to-sheet so the model sees the
handover. The prompt marks the sheet `(THE PLAYER)` and tells the model it
may wound it, cost it and hand it things by name — never speak for it. When
you ★ star a cast member, *their* sheet is you and no second body is made.

### 🔎 The sheets answer when their things are named

When the latest player turn names something that is really on a sheet — *"I
give him the brass key"*, *"how bad is the bleeding?"* — the prompt gets a
`NAMED JUST NOW` block resolving the words to the filed thing: whose it is,
in hand or stowed, the count, the note, the turns a condition has left. The
model is told to treat them exactly as filed rather than inventing a second
key. Pure logic: `RP.mentionBlock(room, text)`.

### 🚫 Out of thin air — you cannot just pull out a bazooka

When your turn *claims* a thing — strong draw verbs (*pull out, draw,
unsheathe, brandish, wield…*) with any article, weak verbs (*use, grab,
fire, swing…*) only with *my* — `RP.conjureCheck` looks at your own sheet,
locally, before anything is sent:

- **It is there** → it is quietly taken in hand, with a pill on your turn
  (*🗝 a brass key — on your sheet, in hand*).
- **It is not** → the pill says so (*🚫 "a bazooka" is not on your sheet —
  the world will answer*), the fate roll tilts −2 against the bluff, and
  **the same roll settles it on the page** (`RP.resolveConjure`) before the
  model is asked anything: ⚅ ⚄ ⚃ mean it was within reach after all — it
  lands on your sheet, in hand, with a change line on the turn (*🎒 a
  bazooka — it was within reach after all; on the sheet, in hand*); ⚂ ⚁ ⚀
  mean the hand comes up empty (*🚫 a bazooka — reached for, not there*).
  The **one-off** `OUT OF THIN AIR` block then tells the model which
  happened and how to play it — show where the thing came from in a clause,
  or write the grab at nothing — never scold. With fate `off` there is no
  roll, and the old wording (hand it over with `[[ITEM: …]]` if the scene
  put one in reach, otherwise the claim fails in the fiction) stands.

Scenery is not policed (*grab the railing*, *use the door* pass), the block
costs zero prompt space until it fires, and it fires once per claim.

### 🎲 Pseudo-stats — four numbers that lean on the dice

Every sheet carries **⚔ might, 🧠 wits, 🗣 sway, 🍀 luck** (0 poor – 3
sharp), read out of the filed record by `RP.statsFor` — same regex-plus-hash
trick as the wardrobe, so they are stable, free, and *"a nervous scribe"*
really does lose a point of sway. Yours come from the persona's own words
and re-derive when you rewrite it; a hand-edited value (sheet editor, `2 1
1 0`) is never re-derived.

They are spent in exactly **one place**: the fate roll. `RP.actionStat`
reads your attempt's wording — *smash, heave, pin* lean on might, *persuade,
bribe, taunt* on sway, *decipher, disarm, look closer* on wits, *sneak,
shoot, chance it* on luck — and the score becomes a pip of tilt, shown on
the roll pill (*⚄ It works · ⚔ might 2 (+1)*). The prompt only ever carries
the fourteen-character chip line per sheet, with the order to **play the 0s
and the 3s, not recite them** — accuracy without bloat, since the verdict
the stats produced already reaches the model as the fate order, with the
lean named in one line.

### 🧾 The quartermaster — the sheets keep themselves

The model edits the sheets the same way it always has — ledger directives in
its own turns (`[[ITEM:]]`, `[[HP:]]`, `[[COND:]]` and the rest). But small
models forget the paperwork, so two nets run behind the play:

- **The grant scan** — free, every turn. When a reply plainly hands the
  player something — *"she hands you the lantern"*, *"he presses a brass key
  into your palm"* — and no directive filed it, the item lands in your pack
  on the spot, marked `🎒 … — filed from the prose`. Offers don't count
  ("she offers you the crown" is not yours yet), scenery doesn't count, and
  it never runs on **your** messages — that door stays guarded by the
  thin-air check.
- **The review** — one small background call every **6 played turns**
  (Settings → 🧾 Sheet upkeep; `0` turns it off). The quartermaster reads
  the recent prose against the sheets and answers with ledger directives
  only — or exactly `IN ORDER` if nothing is missing. It may touch HP, MP,
  items, gear, conditions, flags and counters; it can never make anyone
  enter or exit, tint the record, or invent events. What it files shows up
  as a `🧾` state card in the stream. It spends from the same session
  budget as the lore book, so a long night still costs what one setting
  says it costs.

Both nets are off when mechanics are off.

### 💥 The hurt ledger — a crash costs HP whether or not the model says so

A helicopter went into the pavement, fate said *works — at a price*, and
nobody lost a point: the model narrated the crash and filed no `[[HP:]]`.
The review would have caught it six turns later, for the price of a second
call. The hurt ledger catches it on the turn, for nothing — it is the third
free net, in the same family as the grant scan and the doorman.

**What it reads.** Every reply (never your own turn — fate decides whether
your attempt lands; the reply's narration is what is canon). Quoted speech
is stripped first, so Wario shouting *"CRASHING IS JUST AN UNEXPECTED
DOWNWARD INVESTMENT!"* is noise and *"the helicopter slams into the
pavement"* is the hit. Then sentence by sentence, three tiers:

| tier | what it is | share of **max** HP |
| --- | --- | --- |
| grave | a crash, a blast, a collapse — reaches **everyone in the scene**; a fall from height, thrown from the wreck — the one it happens to | 25–45% |
| heavy | a blade, a bullet, a beating, thrown through the glass, a broken arm, crushed, mauled, fire | 12–22% |
| light | a punch, a kick, a slap, a bite, a scald, a cut hand, a hard fall | 4–9% |

Shares, not points: a 10-HP sheet and a 100-HP one bleed alike. The roll
inside the band is random; the 🎲 Fate level scales the whole thing
(gentle ×0.6, harsh ×1.3, off ×0.5). A grave hit also files `battered` for
two turns, which tilts fate against whoever carries it.

**Who it lands on.** A blow lands on the one named or pointed at *after*
the verb (*Wario punches Sans*, *punches him*, *the blade opens your
sleeve*) — never on whoever is swinging. *You/your* is your sheet, *I/me*
is the card's speaker, *he/she* is the last person named. *"Wario punches
the wall"* hurts nobody. Each person takes one hit per turn — the worst.

**What is not a hit.** A near miss (*nearly, dodges, unharmed*), a threat
(*about to, threatens to*), a memory (*years ago, had crashed*), something
far off (*in the distance, on the radio*), a figure of speech (*crash
course, crashes onto the sofa*). The scan is deliberately verb-shaped —
*"the blade"* in a sentence is nothing; *"the blade opens his sleeve"* is —
and the crash tier wants a vehicle in the sentence, so a slammed door or a
wave crashing on the rocks is not a helicopter. A person who *crashes
through a window* takes a heavy hit alone; a *helicopter* that does takes
the cabin with it.

**Holding on helps.** If your own turn braced for it — *"I hold onto the
seat as the aircraft crashes"*, *strapped in*, *behind cover*, *roll with
it* — your share is halved. The same words in the reply's sentence halve
everyone in it.

**The model still wins.** Anyone the reply already filed `[[HP:]]` for is
left to the model's number; the page only bills the ones it forgot. And
on a turn where there is violence to begin with, a ~90-token `WOUNDS`
order rides in the prompt (`RP.hurtBlock`) telling the model the rates
and that the page will file from its prose if it does not. On a quiet
turn that block is not sent at all.

Everything it files shows on the turn card as `💥 Wario −35 HP (65/100) —
the crash, filed from the prose`, and `↩` undoes the whole turn, wounds
included. Scene tab → **💥 Wounds** turns the ledger off (`settings.hurt`),
leaving only what the model files. Off when mechanics are off.

### 🩺 The AI audit — every sheet, every scene, one call, by hand

The quartermaster is a small net on a timer. The **AI audit** is the same
reader with the whole table in front of it, and it only runs when you
press it: Cast tab → **🧾 AI audit**, or Scene tab → Housekeeping →
**🩺 AI audit of the sheets**. One utility call (`RP.sheetAuditPrompt`,
`tokens: 420`) carries **every sheet** — the whole cast, the player's
pack, who is written out and waiting at the door — and the last fourteen
turns of play; with ⇄ linked scenes it carries **both** rooms, each
labelled, as one story on one clock. The model answers in stage
directions: the quartermaster's kinds plus `[[MOOD:]]`, `[[STATUS:]]`,
`[[TIME:]]`, `[[EXIT:]]` for somebody plainly gone and `[[ENTER:]]` only
for somebody at that scene's door — never `[[NEW:]]`, `[[SET:]]` or
`[[REMEMBER:]]` (`RP.AUDIT_KINDS`), and never the player's mood. Or
exactly `IN ORDER`.

Nothing lands unseen: the reply is first applied to **copies** of the
rooms and shown as a list — *Bowser −7 HP (93/100)*, *the time is
23:40*, *😠 Wario — angry (the bill)* — with **Apply N changes** or
**Leave it**. On apply, each line goes to the first scene that knows the
name (`RP.applySheetAudit`; shared sheets are synced by the page as
usual), the clock moves in both, a 🩺 card is filed in each scene's
stream, and one `↩` takes the whole audit back — the sheets, the card
**and the clock**, which the undo snapshot now carries. It never runs in
the background and never counts against the lean-mode contract.

### 🚪 The doorman — nobody slips in or out unfiled

The model is told to use `[[ENTER:]]`, `[[NEW:]]` and `[[EXIT:]]`, and when
it does, the newcomer gets the full treatment on arrival: a sheet, HP, slots
sized from their profile, an auto-kit dressed for the part, pseudo-stats.
But a small model will happily write *"Brad pushes through the door"* and
move on — leaving Brad a ghost with no sheet whose lines get misfiled. So a
free, deterministic scan watches every reply:

- **A never-seen name who arrives on a strong verb** (*enters, bursts in,
  pushes through the door*) **or speaks an actual quoted line** (*Brad:
  "Anyone here?"*) is filed as an ENTER on the spot — full sheet, kit and
  all, marked `🚪 Brad enters — walked in from the prose`. Mere mentions
  don't count (*"they talk about Brad"* brings nobody in), sentence-starters
  like *Suddenly* and *Meanwhile* are not people, and `mike` is a GM, never
  a character.
- **An unambiguous walk-out** (*storms out, turns and leaves, is gone*) is
  filed as an EXIT. *"Brad leaves the knife on the table"* is not leaving.
  The player's character can never be walked out by prose.

And leaving is not deletion: whoever exits is remembered at the door
(`room.away`). If they come back — by directive or by prose — they return
with **the same sheet**, still carrying whatever they walked out with. The
card reads `returns` instead of `enters`.

### 🍽 The prompt diet — sized for a local model

A six-character room used to send six full sheets and a novel of history
every turn; a local model spends that entirely on prefill, and the reply
crawls. The prompt is now sized to the turn:

- **Sheets follow the spotlight.** Only the acting character and the
  player ride in full (kit, stats, everything). Anyone wounded or under a
  condition gets one short line; the untouched are one roll call —
  *"Untouched right now: Mona, Luigi"* — and their full sheets still
  answer to directives by name. World turns carry the player in full.
  The background reviewer always sees everything.
- **History is tiered.** The newest six turns arrive whole (up to 1,600
  chars); older ones are clipped to ~450 — a Director monologue from ten
  turns ago earns a paragraph, not sixteen hundred characters of prefill
  forever. The default history budget is 6,500 chars (Settings can raise
  it).
- **The story folds sooner.** The rolling recap now takes over at ~27
  turns instead of 36: recent turns verbatim, the older story carried as
  a summary. That is the chunking — the model never re-reads the whole
  night.

### 🍃 Lean background AI — one model call per turn, out of the box

Settings → **Background AI** ships on **lean**: the model writes the
story and *nothing else*. Speakers rotate deterministically (no
who-speaks-next call), the auto lore book and the upkeep reviewer wait
for **full** mode, and the rolling recap still runs — budgeted — because
it is what keeps prompts small. Everything deterministic stays free and
local either way: the grant scan, the hurt ledger, the thin-air check,
conditions, arrivals and departures. On a machine where a call costs minutes, the
pickers were costing more than the prose; flip the dial to **full** on a
box that can afford model-picked speakers and automatic filing.

Two more hard-won rules from real logs:

- **The recap request is budgeted** (`RP.RECAP_FOLD`): a grandfathered
  room owing hundreds of unfolded turns once sent 14,557 tokens into an
  8,192-token window and got an HTTP 400 instead of a summary. Now the
  newest of the stretch rides, the oldest drop with a note, and
  `recapAt` advances so it never recurs.
- **Thinking is off for everything the app does.** Replies, staging,
  filing and summaries are simple text tasks, so every request — from
  the page and from `workflow/server.py` alike — carries
  `chat_template_kwargs: { enable_thinking: false }`, with the Qwen3
  `/no_think` soft switch riding as backstop. Servers that don't know
  the parameter ignore it. **Prove it took**: Settings → *Test it* now
  fires one tiny completion and reports `thinking off ✓` — or warns
  `⚠ this model still THINKS (N reasoning tokens)`, in which case the
  switch didn't take and the fix is an *instruct* build
  (`qwen2.5-7b-instruct-1m`). There is no safe "thinking budget" over
  this API: `max_tokens` covers thinking *plus* the answer, so a
  420-token cap with 420 tokens of deliberation leaves nothing — which
  is exactly what the logs showed. If a reply still comes back all
  reasoning and no prose, the error says so out loud.
- **Leaked reasoning never reaches the page.** Any `<think>…</think>`
  block (paired, unopened or unclosed) is stripped at the door
  (`RP.stripThink`) on both routes — never displayed, never filed,
  never re-sent in later prompts to bloat the context.

### 🚀 Making the local model fast — what the page does, and what LM Studio should

What the page already avoids (read from a real session's server logs):

- **No double Director.** The world never follows the world — two
  narration turns in a row was ~100 seconds of prefill to set a scene that
  was already set. After a world turn, the scene comes back to you.
- **No pointless picker calls.** With only one character who could
  possibly answer, "who speaks next" is not a question — the ~20-second
  model call is skipped and the answer used directly.
- **No navel-gazing lookups.** `[[LOOKUP: current location and attire]]`
  was a full-price second call for facts already in the prompt; lookups
  about the current scene are dropped on the floor, and the directives
  say so.
- **The Director speaks in scenes, not monologues** — 4–7 sentences,
  ~700 max tokens (was 1200: at 1.2 tok/s that single cap was worth five
  minutes).

What only LM Studio can fix — the logs showed **1.2 tokens/sec
generation**, which means most of the model was running on CPU:

1. **Generation speed is VRAM.** A 12B Q4 model plus a BF16 mmproj did
   not fit; use a **text-only GGUF** (the chatroom never sends images) or
   a smaller model — the 7B/9B options in the same list will feel three
   times faster at identical quality-per-prompt.
2. **Slots defeat the cache.** Four server slots × 8192 context meant
   every request landed on a cold slot ("selected slot by LRU") and paid
   full prefill. Set **1–2 slots**; a repeated system prompt then reuses
   its KV prefix instead of re-processing ~3,000 tokens for 70–120s.
3. **Context 8192 is enough** — the page keeps prompts near ~3.5k tokens
   by design (see the prompt diet); bigger context just spends VRAM that
   generation needs.
4. **Set a utility model** (Settings → utility model) — the speaker
   picker, upkeep, recaps and the lore book then run on a small fast
   model and never queue behind the big one.

### 🛠 Fix chat — the grandfather clause

Chats made before a feature existed don't get it retroactively — their
cast is a snapshot from the day the room opened, their sheets predate
newer fields, and the voice caches can hold a stale answer from before a
studio profile existed. **Chat menu → 🛠 Fix chat** brings an old room
up to date in one press and files a receipt in the stream:

- **Cast re-read from the archive** — current profiles replace the
  frozen copies (play state — HP, items, history — is untouched).
- **Sheets mended** to the current shape; **star rules re-run** (the
  starred character is your pack).
- **Voice caches dropped and the studio asked again right now** — the
  receipt lists exactly what the studio's boot list offers, and names
  any cast member missing from it. **The boot list can lie**: Gradio's
  `/config` is a snapshot from when the studio started, so a profile
  saved while it runs (the studio's own library table shows it!) never
  appears there until a restart. That is why a missing name is *not*
  silenced: their lines ask the studio by name anyway, and only a
  genuinely refused voice falls back — one fast error, a toast, and
  the fallback reads from that line on.

Even without the button, a stale miss no longer sticks all session: the
speaker-missed list expires whenever a fresh library arrives (at most a
minute), so fixing the studio fixes the voice on the next turn.

### 📋 The AI's toolbox — audited

Every tool the model has, what triggers it, and the suite check that
proves it. The "toolbox" block in `test-chatroom-core.mjs` fires every
directive in one reply and asserts each lands.

| Tool | What it does | Proven by |
|---|---|---|
| `[[HP/MP: Name -N]]` | damage, healing, spent power on the sheets | state + toolbox checks |
| `[[COND: Name x 3 -2hp \| note]]` / `[[CURE]]` | conditions with duration and per-turn cost | conditions + toolbox |
| `[[COUNT: Name arrows -1]]` | arbitrary counters | toolbox |
| `[[ITEM: Name + 🗝 x \| note]]` / `-` / `[[USE]]` / `[[EQUIP]]` / `[[STOW]]` | the pack: gain, lose, spend, hand, stow | wardrobe + toolbox |
| `[[STATUS: Name …]]` | a short physical note | toolbox |
| `[[MOOD: Name anger 2 \| why]]` | how somebody feels, damped and fading — the colour of their box | mood checks |
| `[[TINT]]` / `{colour\|words}` inline | legacy: no longer asked for; still parsed and rendered for old chats | tints + toolbox |
| `[[SET: fact = value]]` / `[[TIME: …]]` | nailed-down scene facts and the clock | toolbox |
| `[[REMEMBER: name \| fact]]` | files into the lore book | toolbox |
| `[[LOOKUP: question]]` | mid-turn archive search (never about the current scene) | round-9 checks |
| `[[ENTER/NEW/EXIT: Name — why]]` | cast walks in, is invented, walks out | arrivals/departures checks |
| fate dice, stats, conjure check, grant scan | free local nets — no model call | rounds 2–3 checks |

**Why tints are legacy.** Round 17 fixed the parsing and
the palette, and the colour tools still went unused in play — a small
model does not decorate on request. The prompt no longer asks for
them (the palette rule, the flourish and the TINT lines are gone, which
is a net saving); the parser and the renderer keep them so old chats
still read as they did. Colour now has one meaning: **the box is the
colour of the feeling** — see 🎨 Colour is emotion.

### 📣 The encouragement system — and naming a filing out loud

Two round-18 rules about how the model meets the archive:

**Name a filing, get THAT filing.** The fuzzy scorer ranks on term
breadth, so *"I read the paper titled The Tape and the Wario Files"*
once returned three lookalikes — and the model, asked to read a paper
it had never seen, invented one. Now any archive title that appears
verbatim in the recent prose (two words or longer) is **pinned** to the
top of the retrieval with the filing's own opening text (`RP.pinNamed`),
starred ★ in the FROM THE ARCHIVE block, with an explicit rule: *when
the player reads from it, read from THIS text — never invent its
contents.* The verdict on "does it apply what it reads": yes, within
arm's reach — a passage in this turn's prompt lands in this turn's
prose; that is exactly why the named filing must actually BE there.

**The encouragement system** (`RP.encourage`) is data-driven and free:
`applyDirectives` stamps when each tool family last fired
(`room.toolAt`), and when one has sat unused past its threshold —
stakes 18 turns, moods 14, lore-book filings 24 — **one conditional
line** rides the prompt: *"DIRECTOR'S NOTE: nothing has cost anyone
anything for a long stretch… If it truly is a quiet scene, carry on."*
Never more than one line, never twice in eight turns, silenced the
moment the model complies, and never in young or mechanics-off rooms.
Zero extra model calls — the lean-mode contract holds.

### 🎭 Steering a stubborn character

A character who will not drop a theme — Wario and the 14,783-gold
ledger, say — is usually **working as written**: his card mandates the
greed, the retrieval keeps surfacing his Enterprise filings, and the
last six turns of debt-shouting echo forward (recent history is the
strongest signal a model has). You have four steering wheels, in
escalating order:

1. **Say it out of character** — double parentheses ride to the model
   as instructions, not dialogue: `((Wario accepts the gold and moves
   on — the next scene is about finding Mario))`. This is the big one.
2. **Edit the sheet** — open his card and set the status field: *"paid
   tonight; the debt can wait — worried about Luigi."* The sheets ride
   every prompt; a status line outweighs a bio paragraph.
3. **↻ and swipes** — a retry at temperature 0.85 often breaks a loop
   all by itself; the ‹ › arrows keep every take.
4. **Edit his turn** (✏️) — rewrite one reply so the *history* says he
   calmed down; the echo then works for you instead of against you.

What is NOT a steering problem: the model recalling the exact debt
figure is the archive working. The fix for a loop is never "more
model" — it is changing what the next prompt says happened.

## 🩸 Conditions that bite

A condition can carry a **cost per turn**, and it is taken automatically for
as long as it lasts:

```
[[COND: Name bleeding 3 -2hp | a deep cut across the palm]]
   → bleeding (a deep cut across the palm) [3 turns left, -2hp a turn]
   → “Sans −2 HP (98/100) — bleeding”  …three times, then it passes
```

Conditions with a cost are marked in red in the party bar. A condition with
no number never expires on its own; one with no cost is still narrative
weight the model is told about.

The same syntax now works **everywhere a condition is written**, not only in
the model's directions: the scenario setup field and the sheet editor both
parse `bleeding 3 -2hp | a deep cut` through `RP.parseCondition`, so a scene
can *open* with a wound that is already costing somebody. Each condition
carries an icon by what it is called (`🩸` bleeding, `☠️` poisoned, `🔥`
burning, `⛓️` bound, `⚠️` anything unrecognised — `RP.condIcon`), and the
prompt gathers everything active into a `CONDITIONS IN PLAY` block with the
order that *each one must shape what its bearer does this turn* — a bleeding
character speaks and moves like one, or cures it on the record.

## 🎨 Colour is emotion

The colour of a turn's box is **how its speaker feels**, and the sheet in
the 🩺 Party bar wears the same colour with a chip — *😠 angry*. Ten
feelings, each with a hue, and calm, which is no colour at all:

| | | | | |
|---|---|---|---|---|
| 😠 anger — red | 😨 fear — violet | 😄 joy — gold | 😢 grief — blue | 😳 shame — mauve |
| 🤢 disgust — green | 😲 surprise — orange | 🥰 affection — pink | 🤨 suspicion — teal | 😏 pride — amber |

Each has three pitches — **1** a flicker (*irritated*), **2** the plain
thing (*angry*), **3** overwhelming (*furious*) — and the pitch is the
depth of the wash on the box (`RP.moodStyle`: a firm edge in the hue and
a tint that deepens 10 → 20 → 32 %).

**It does not swing.** `RP.moodShift` is deliberately damped, so a mood
is a weather system and not a light switch:

- a new feeling starts at **1**, whatever was filed; the same feeling
  filed again climbs **one step a turn**, to 3 at most;
- a *different* feeling has to **wear the standing one down** first — it
  takes a step off, and only when that is spent does the new one take
  the room, at 1;
- a **shock** (a 3 filed, or a grave hit) replaces the feeling at once,
  at 2 — never straight to 3;
- *calm* takes a step off; nothing fed for **two turns** takes a step
  off (`RP.tickMoods`, with the conditions); at 0 they settle and the
  card says so once: *😶 Wario settles — the anger is spent*.

So anger 3 lasts six quiet turns before Wario is himself again, and one
sarcastic line cannot flip terror into joy.

**Three ways a feeling moves**, cheapest first:

1. **The model files it** — `[[MOOD: Wario anger 2 | the landing bill]]`,
   or just `[[MOOD: Wario furious]]` (the word carries its pitch:
   *furious* is anger 3, *uneasy* fear 1 — `RP.moodWord`). The MOOD line
   in STAGE DIRECTIONS replaced the TINT lines, so the prompt did not
   grow; the director's note nudges for it after fourteen flat turns.
2. **The page reads the prose** when the model files nothing for the
   speaker — `RP.moodScan`, zero tokens: a lexicon of cues per feeling
   (*bellows, slams his fist, through gritted teeth* → anger; *trembles,
   backs away, swallows hard* → fear; *sobs, voice breaks* → grief…).
   Two cues, or one strong word, move the speaker **one step**; a
   sentence about somebody else in the scene is skipped, so *Sans looks
   terrified* is not Wario afraid. Only the speaker's own sheet, never
   the narrator's turns.
3. **A grave hit** from the hurt ledger adds a flicker of fear to whoever
   it landed on, unless the model said how they took it.

**Your mood is yours.** The model's MOOD for the player's sheet is
dropped; click your sheet to set it by hand (*"anger 2 | the bill"*, or
*calm*), and your own turns wear that colour.

**It drives the writing.** Every sheet line in CHARACTER STATE carries
`mood: furious (anger 3/3 — the landing bill)`, so the others play off
it; and the speaker gets a short order in the protected tail
(`RP.moodBlock`, ~60 tokens, nothing when they are calm): *MOOD — Wario
is furious (anger 3/3: the landing bill). It colours this whole turn —
short hard sentences, interrupts, no jokes land, acts before thinking —
and at this pitch it decides what they do, not just how they say it. It
does not switch off because the subject changes.* Each feeling has its
own tell: fear hedges and watches the exits, grief trails off, shame
deflects, suspicion answers little and watches hands, pride lists wins.

The old `{colour|words}` and `[[TINT:]]` machinery is no longer asked
for, but old chats still render as they did.

## 📜 Long chats stay cheap

A hundred-turn chat does not mean a hundred-turn prompt. When the history
outgrows the context window, the older turns are **folded into a recap** by
the background model:

```
THE STORY SO FAR — everything before the turns below, folded up.
Treat it as having happened.
```

The recap keeps who did what, what was decided, what was learned, what
changed hands and what anybody is still angry about, and explicitly drops
weather and repetition. The turns themselves are never deleted — they stay
on screen, in exports and in the lore book; only the *prompt* gets shorter.
It runs once, on the utility model, and says so: *📜 Folded 28 older turns
into the story so far.*

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

**＋ invite** on the state bar opens a **portrait grid of the whole archive**
— every character with their picture, searchable by name or title, anyone
invented in play before included, several at once — and a dashed **＋** tile
for somebody the archive has never filed (type a name that matches nobody
and the tile becomes *New: that name*). **＋ New** on the speaker rail offers
the same grid plus:

- **Invent one** — the ＋ form. A name is enough: **✨ Fill it in** asks the
  model (`RP.inventPrompt`, one utility call, a fixed line-per-field
  template) for the role, the look, how they talk, three sample lines, what
  they would never say and what they carry; whatever you typed yourself is
  kept. Saving (`RP.inventCharacter`) seats them with a real sheet, the kit
  on it, and a **voice sheet of their own** — so they sound like somebody
  from the first line. Kept in `state.newChars`, invitable again later,
  described rather than drawn.
- **From a character card** — `.png` or `.json`, and they say their greeting.
- **Let the model choose** — files a scene note and asks for the next turn;
  the model has `[[NEW: …]]` and `[[ENTER: …]]` for exactly this, so it names
  them, describes them, and they stay in the scene.

Whichever door they come through, two things now hold. A name in an
`[[ENTER:]]` is resolved against the archive **whole-word, longest name
first**, punctuation and titles aside (*Lord Verity of Trinity* finds Lord
Verity; *Anastasia* no longer finds Ana, which the old substring test did),
and against the people invented in play, so a return is a return — same
voice, same kit. A name nobody knows is made on the spot like a `[[NEW:]]`
(sheet, seat, kept for later) instead of a bare record. And a one-to-one
chat somebody walks into **becomes a group chat** the moment the cast is
two: named turns in the history, the rotation, the ensemble prompt — the
solo card ("You are Sans") used to stay on for every speaker.

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

**Dock → ⬇ Share → Export** offers:

| | |
|---|---|
| ✍️ **Story brief** | trimmed for a writing model: who, when, the situation, the beats that fired, the turns, where everyone ended up, what the scene established — and **nothing else**. No ids, no swipe alternatives, no error notices, no state pills, no settings. A long chat is cut in the middle rather than truncated at the end, so the ending survives |
| 📦 **Full chat** | a `waluipedia-chatroom-bundle` another chatroom imports: the room, its memory, lore, book pages and invented characters |
| 📄 **Transcript** | markdown, for filing into the wiki |
| 📝 **Plain text** | just the turns |
| 📇 **Character card** | PNG or JSON, as above |
| ⇄ **Both scenes** (only while a second scene is linked) | the same transcript, plain text and brief for **the two chats together**, interleaved by the clock with a marker each time the camera moves — and a bundle carrying both rooms and the link, which re-imports linked |

## Import / export

| Button | File | Contents |
|---|---|---|
| Labs → Export → Everything | `waluipedia-chatroom.json` | chats + lore + memory + log + account |
| Labs → Export → Chats only | `waluipedia-chats.json` | rooms only |
| Charms / Labs → Export lore | `waluipedia-lore.json` | lore nodes only |
| Labs → Export memory | `waluipedia-memory.json` | character memory + world log + which wire posts are played |
| Dock → ⬇ Share → Export | `<chat>.md` | the transcript, as markdown, for filing |
| Dock → ⬇ Share → Export → ⇄ Both scenes | `<chat>+<other>.md` / `.txt` / `.brief.md` / `.chat.json` | two linked scenes, interleaved; the bundle carries both and the link |

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
