# The Filing Process — What Happens Before the Event Is Written

**This is the order of operations for turning a session transcript into canon.**
Read it before you write a single sentence of prose.

The most common failure in this archive is not bad writing. It is writing the
event **first** and then discovering that the location does not exist, the
character has no page, the XP contradicts the ledger, and three of the ids in
`participants[]` resolve to nothing. Every one of those is a rewrite. None of
them is a writing problem.

> **The event is written LAST.**
> Locations first. Characters second. XP third. Prose fourth.
> Broadcast, home feed, and every other artifact come after the prose.

Nothing here is about style. Style lives in
[`STORY_FORMAT_GUIDE.md`](STORY_FORMAT_GUIDE.md) (events) and
[`WHATIF_FORMAT_GUIDE.md`](WHATIF_FORMAT_GUIDE.md) (what-ifs). This document is
about **sequence**, and the sequence is not optional.

---

## The seven steps

| # | Step | Output | Why it is here and not later |
|---:|---|---|---|
| 1 | **Read the transcript. Build the beat list.** | A numbered list of what happened | You cannot tell what is new canon until you have the whole session in front of you |
| 2 | **Locations first.** | `locations.json` entries created or amended | The event's `location` field must resolve. Writing the scene teaches you what the place is; filing the place first stops you inventing it twice |
| 3 | **Characters second.** | `characters.json` entries created or amended | `participants[]` must resolve. Names get decided here, under the naming rule — not mid-paragraph |
| 4 | **XP determined third.** | The `xpAwards[]` rows, written out before the prose | XP is a judgement about what the session was worth. Make it while the beats are still a list. Written after the prose, it becomes a reward for whichever scene you enjoyed writing |
| 5 | **THEN write the event.** | `events.json` entry | Everything it points at already exists |
| 6 | **Update the main index page.** | `index.html` home feed + `SITE_UPDATES` | An event nobody can find from the front page is not filed |
| 7 | **Artifacts last.** | RNN pending list, broadcast if owed, any images or pages | These are downstream of the filing and cheap to redo. The filing is not |

---

## Step 1 — Read the transcript, build the beat list

Before deciding anything, produce a plain numbered list of session beats in
order. No prose, no voice, no jokes. Roughly one line per thing that happened.

```
1. villa, morning — treasure maps on the table, garlic bread
2. Wario produces the Heartstone journal from his private museum
3. pitch: summer solstice alignment, satellite images
4. fake IDs issued — two names
5. Antonio the chef, breakfast, the swiped item
...
```

This list is the source of truth for the next six steps. It is also how you
catch the thing everyone gets wrong: **the opening**. Sessions rarely start at
the exciting part. The villa, the briefing, the packing, the argument about
lunch — that material is where the characters are most themselves, and it is
the first thing a hurried filing drops.

> **Do not drop the opening because the middle is louder.** If a beat was in
> the session, it is a candidate for the filing. Cut it only because it is
> genuinely inert, never because you are trying to be brief.

Mark each beat as **new canon** (a place, person, object, or fact the archive
does not have yet) or **existing canon**. The new-canon marks become steps 2–4.

---

## Step 2 — Locations first

Every location named in the beat list gets checked against
`Reputation-Matrix2/data/locations.json` **before** the prose starts.

```
□ Does this place already have an entry? (search by name AND by likely id)
□ If yes — does the session change anything about it? Amend, don't duplicate.
□ If no  — create the entry now, in the schema the neighbouring entries use.
□ Does the event's `location` field point at an id that now exists?
```

Copy the shape of an existing nearby entry rather than inventing fields.
`alpine_mountain_inn` and `mount_ebott` are good schema templates.

**Match the file's existing indentation.** `locations.json` is written with
one-space indent; re-serialising it with a default pretty-printer reformats
four thousand lines and buries your change in the diff. Same rule for every
data file: read how it is formatted, write it back the same way.

---

## Step 3 — Characters second

Same discipline, against `Reputation-Matrix2/data/characters.json`.

```
□ Does this person already exist under another id or spelling?
□ New character → full entry (id, name, title, type, race, status,
  affiliation, summary, description) before the event references them.
□ Existing character → amend status / affiliation if the session moved them.
□ Every id you intend to put in participants[] resolves.
```

### The naming gate

Session transcripts are full of **table names** — the GM, the players, the
handles they answer to. Run every name through the naming rule in
[`STORY_FORMAT_GUIDE.md`](STORY_FORMAT_GUIDE.md#rule-table-names-are-not-character-names)
before it enters `characters.json`. Unnamed is always safe. *The hire*, *the
charter pilot*, *the boy* invent no canon and can be named later without a
retcon.

**`mike` is a GM name.** See the rule in the [entry README](../README.md). It
exists in `characters.json` as a historical artifact; it is not a pattern to
copy and it should not appear in new narrative prose.

---

## Step 4 — XP determined third, before the prose

Decide the awards while the session is still a list of beats. Write them out in
full — as data, not as an intention — and only then start writing.

**Canonical field: `xpAwards[]` on the event record.** The renderer reads it
(`xpAwardsForEvent()` in `index.html`, which merges `XP_EVENT_AWARDS` with the
event's own `xpAwards[]`). Two other shapes exist in the data —
`xpRewards[]` and a bare `xpTotal`/`xpNote` pair — because they were tried once
and never removed. **Do not add new instances of either.**

```json
{
  "xpKey": "waluigi",
  "articleId": "waluigi",
  "name": "Waluigi",
  "cat": "survival",
  "xp": 320,
  "title": "Event — The Mount Ebot Expedition — Survival",
  "desc": "One sentence naming what earned it.",
  "date": "17 Aethel, 1040 BF",
  "dateSort": 10401700
}
```

| Field | Rule |
|---|---|
| `xpKey` | Must match the key used by `xp.html#/player/<xpKey>`. Check `XP_SUMMARY` in `index.html` — it is often **not** the same string as `articleId` (`toad_lee` → `toadlee`, `dan` → `originaldan`) |
| `articleId` | The `characters.json` id, so the award links to the page |
| `cat` | One of: `combat`, `exploration`, `social`, `survival`, `discovery`, `chaos`, `stealth`, `faith`, `magic`, `technique`, `loyalty`, `sabotage` (`CATEGORIES_LABELS`) |
| `xp` | A number. Not a range, not a string |
| `desc` | Recommended. One sentence, concrete, naming the action |
| `dateSort` | Sortable integer form of the in-world date |

**Do not silently mutate the authoritative ledger.** Awards filed on an event
are a preview until the table confirms them. Say so in the run report (step 7)
rather than editing player totals by hand.

---

## Step 5 — Then write the event

Only now. Locations resolve, characters resolve, XP is decided, and the beat
list is complete.

Craft standard: [`STORY_FORMAT_GUIDE.md`](STORY_FORMAT_GUIDE.md). Apparatus
checklist lives there too. Two process rules that are not style rules:

1. **Write from the beat list, not from memory of the transcript.** If a beat
   is on the list and does not make the filing, that is a decision you make
   deliberately, once, and can defend.
2. **Length is not a failure.** The bands in the format guide are aim, not
   target. A session that ran long produces a filing that runs long. Do not
   trim story-critical material to land inside a band — improve it instead.

Append the event to `Reputation-Matrix2/data/events.json`. Match the file's
existing indentation. Validate the JSON parses before moving on.

---

## Step 6 — Update the main index page

**A filing that is not on the front page is not finished.** Three places, all
in `index.html`, and they are easy to half-do:

| What | Where | How |
|---|---|---|
| **Recent Adventures feed** | `view_home()` timeline block | Run `python3 tools/update-index-home.py` after adding the new item to the script's `timeline_html`, or edit the block between the `<!-- 4. RECENT CAMPAIGN ADVENTURES & CHRONICLE FEED -->` markers |
| **`SITE_UPDATES`** | `let SITE_UPDATES=[…]` — one declaration, near the top | Prepend `{id, kind:"event", label:"Latest Event", title, summary, tags[]}`. Newest first |
| **`mainPage.json`** | `Reputation-Matrix2/data/mainPage.json` | Update `latestUpdate` / `featuredArticle` if this filing is the new headline |

```
□ New event appears in the Recent Adventures feed, newest at the top
□ Its onclick routes to #/article/<event_id> and the route resolves
□ The participant chips link to real character pages
□ SITE_UPDATES has a new entry at the front
□ The previous "Latest Session" chrome has been demoted
```

---

## Step 7 — Artifacts last

In this order:

1. **Add the event id to the RNN pending list**
   (`tools/rnn-scripts/pending-news-articles.json`). Every filed event goes on
   the list. This is one line and it is the step people skip.
2. **Check whether a broadcast is owed.** The rule is now **batching, not
   one-per-event** — see [`RNN_BROADCAST_GUIDE.md`](RNN_BROADCAST_GUIDE.md).
   Ten pending events, or a run of events too significant to hold, buys an
   episode. One event does not.
3. **Any other artifact** — images, standalone pages, map entries, book
   entries. All downstream, all cheap to redo.
4. **Write the run report.** Format:
   [`RUN_REPORT_FORMAT.md`](RUN_REPORT_FORMAT.md). Every JSON touched, every
   event filed, every XP award, in one block at the end of the run.

---

## The whole thing on one screen

```
1  TRANSCRIPT  → numbered beat list, new-canon marks, opening included
2  LOCATIONS   → locations.json entries exist before prose
3  CHARACTERS  → characters.json entries exist; names pass the naming gate
4  XP          → xpAwards[] rows written out, xpKey verified against XP_SUMMARY
5  EVENT       → now write it. events.json. STORY_FORMAT_GUIDE.md
6  INDEX       → Recent Adventures feed + SITE_UPDATES + mainPage.json
7  ARTIFACTS   → pending-news-articles.json → broadcast if owed → run report

The event is written last. The news is written after that.
Never trim story-critical material to hit a number.
```
