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
> Exhibits, broadcast, home feed, and every other artifact come after the prose.

Nothing here is about style. Style lives in
[`STORY_FORMAT_GUIDE.md`](STORY_FORMAT_GUIDE.md) (events) and
[`WHATIF_FORMAT_GUIDE.md`](WHATIF_FORMAT_GUIDE.md) (what-ifs). This document is
about **sequence**, and the sequence is not optional.

---

## The nine steps

| # | Step | Output | Why it is here and not later |
|---:|---|---|---|
| 1 | **Read the transcript. Build the beat list.** | A numbered list of what happened | You cannot tell what is new canon until you have the whole session in front of you |
| 2 | **Locations first.** | `locations.json` entries created or amended | The event's `location` field must resolve. Writing the scene teaches you what the place is; filing the place first stops you inventing it twice |
| 3 | **Characters second.** | `characters.json` entries created or amended | `participants[]` must resolve. Names get decided here, under the naming rule — not mid-paragraph |
| 4 | **XP determined third.** | The `xpAwards[]` rows, written out before the prose | XP is a judgement about what the session was worth. Make it while the beats are still a list. Written after the prose, it becomes a reward for whichever scene you enjoyed writing |
| 5 | **THEN write the event.** | `events.json` entry | Everything it points at already exists |
| 6 | **Exhibits — file the paper the story mentions.** | `data/props.json` entries + `[[prop:…]]` triggers in the prose | The prose decides which documents exist. Written before the prose, you invent paperwork nobody needed; written after, you file exactly what the scene already promised the reader |
| 7 | **File the session into the investigation.** | A `sessions[]` row, new exhibits and leads in `investigations.json` | The arc file is where the paper is *argued about*. It can only cite exhibits that already exist, so it comes after Step 6 — and before the front page, because the front page links to it |
| 8 | **Update the main index page.** | `index.html` home feed + `SITE_UPDATES` | An event nobody can find from the front page is not filed |
| 9 | **Artifacts last.** | RNN pending list, broadcast if owed, any images or pages | These are downstream of the filing and cheap to redo. The filing is not |

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
[`STORY_FORMAT_GUIDE.md`](STORY_FORMAT_GUIDE.md#naming-rule--table-names-are-not-character-names)
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
  "date": "17 Aethel, 1032 BF",
  "dateSort": 10321700
}
```

| Field | Rule |
|---|---|
| `xpKey` | Must match the key used by `xp.html#/player/<xpKey>`. Check `XP_SUMMARY` in `index.html` — it is often **not** the same string as `articleId` (`toad_lee` → `toadlee`, `dan` → `originaldan`) |
| `articleId` | The `characters.json` id, so the award links to the page |
| `cat` | One of: `combat`, `exploration`, `social`, `survival`, `discovery`, `chaos`, `stealth`, `faith`, `magic`, `technique`, `loyalty`, `sabotage` (`CATEGORIES_LABELS`) |
| `xp` | A number. Not a range, not a string |
| `desc` | Recommended. One sentence, concrete, naming the action |
| `dateSort` | Sortable integer form of the in-world date: `YYYYDDHH`. `17 Aethel, 1032 BF` at 17:00 → `10321700`. Change the year here whenever you change the year in `date`, or the award sorts into the wrong decade |

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

## Step 6 — Exhibits: file the paper the story mentions

**If the prose says a document exists, the reader must be able to open it.**
An invoice, a contract, a ledger page, a wire, a summit plank, an addendum —
the story names it, so the archive holds it. That is the whole rule.

This step is here, immediately after the prose, for a reason. Do it earlier and
you invent paperwork the scene never needed. Do it later — or never — and the
filing keeps making promises it does not keep: *"the demand was filed"*, and
nothing to read.

Exhibits live in `Reputation-Matrix2/data/props.json` and render as full
custom-CSS paper in a modal. **No JS and no CSS changes are needed to add one.**
The craft standard — how the paper should be *written* — is
[`STORY_FORMAT_GUIDE.md` §9B](STORY_FORMAT_GUIDE.md#9b-exhibits--the-documents-the-story-names).
The field reference is
[`Reputation-Matrix2/README.md` → Attaching exhibits](../Reputation-Matrix2/README.md#attaching-exhibits-clickable-in-world-documents).

### 6a — List the documents the prose already promised

Re-read the finished event and write down every piece of paper it mentions.

```bash
python3 - <<'EOF' | sort | uniq -c | sort -rn
import json, re
EVENT = "the_mount_ebot_expedition"          # <- the event you just filed
ev = next(e for e in json.load(open("Reputation-Matrix2/data/events.json"))
          if e["id"] == EVENT)
print("\n".join(re.findall(
    r"(?i)\b(invoice|receipt|ledger|contract|writ|order|telegram|wire|deed|"
    r"permit|passport|manifest|affidavit|addendum|demand|plaque|plank)s?\b",
    json.dumps(ev))))
EOF
```

Then triage. **Not every mention earns a prop.** File the ones where seeing the
document changes what the reader knows:

```
□ Does the paper contain a fact the prose only summarises?
   ("the demand was ignored" → the demand itself, with the clerk's initials)
□ Is it evidence — something a later filing will need to point at?
□ Is it funnier, colder, or more damning in institutional voice than in prose?
□ Would a reader want to look at it? A named object beats a category.

If it is only scenery, leave it in the prose. A prop nobody opens is bloat.
```

**Every `## Addendum:` heading is automatic.** An addendum is the archive going
back to a closed file, so it gets filed as a separate `addendum` slip rather
than being buried mid-article. Find any that are still buried with:

```bash
grep -in "addendum" Reputation-Matrix2/data/events.json | head
python3 tools/check-exhibits.py    # warns on every uncovered ## Addendum:
```

### 6b — Write each prop

Add an object under `props`, keyed `prop_<subject>_<kind>`:

```json
"prop_sheet41_correction_demand": {
  "kind": "order",
  "icon": "📐",
  "title": "Correction Demand — Survey Series IV, Sheet 41",
  "subtitle": "Office of the Auditor-General",
  "items": [],
  "articles": ["the_mount_ebot_expedition"],
  "note": "Filed. Acknowledged by a clerk. Unanswered.",
  "body": "<div class=\"pd-head\">…</div>",
  "stamps": ["noaction"]
}
```

| Field | Rule |
|---|---|
| `kind` | One of the styled forms: `invoice` `ledger` `letter` `telegram` `map` `passport` `contract` `note` `order` `addendum`. The kind sets the paper stock, so pick the one the issuing body would have used |
| `items` / `articles` | **The wiring.** Item keys from `INVENTORY_SYSTEM`, article ids from the data files. A tile grid appears automatically on every page listed, and the modal links back. A prop wired to nothing can never be opened |
| `body` | HTML built **only** from the `.pd-*` classes in `app/styles/systems/exhibits.css`. Never an inline style, never an invented class — both render as unstyled text. Need something new? Add the class to the stylesheet first |
| `stamps` | Optional: `overdue` `paid` `void` `sealed` `noaction` `evidence` |
| `note` | The archive's one-line docket for the tile. Waluigi's voice belongs here and in `.pd-margin` — **nowhere else on the paper** |

**Write the paper as the issuing organisation would.** A quartermaster's wire is
clipped and repeats itself. A bank is polite and ruinous. A memorial plank is
four names and no adjectives. The document's job is to be *in character for
whoever typed it*; Waluigi's opinion goes in the margin aside, where the reader
can see him disagreeing with the page he is showing them.

### 6c — Wire it into the prose

A tile grid at the foot of the article is the floor, not the goal. Put the
trigger on the sentence that mentions the document:

```
the demand was [[prop:prop_sheet41_correction_demand|filed and never answered]]
```

`[[prop:id|visible text]]` renders as a clickable `.proplink`. It works in any
field that goes through `mdToHtml` — `description`, `sections[].overview`,
`aftermath`, `waluigiAssessment`. One trigger per document is usually right;
the tiles catch the rest.

### 6d — Verify

```bash
python3 tools/check-exhibits.py
```

It fails the run on: a broken `props.json`, an unstyled `kind` or stamp, an
invented `.pd-*` class, an inline style, an `items` / `articles` id that
resolves to nothing, a prop linked to nothing, and a `[[prop:…]]` marker
pointing at a prop that does not exist. It warns on any `## Addendum:` heading
with no addendum slip filed against it.

```
□ check-exhibits.py is clean
□ Every document the prose names is either filed or deliberately skipped
□ Every ## Addendum: heading has an addendum prop
□ Opened each new prop in the browser — the paper renders, backlinks work
□ No raw [[prop: text visible in the rendered article
```

---

## Step 7 — File the session into the investigation

**Every arc has exactly one open investigation, and it accretes.** The session
just filed did not start a new quest; it added paper to a file that already
exists. Full authoring guide: [`INVESTIGATIONS.md`](INVESTIGATIONS.md).

This step is after exhibits because an investigation may only cite props that
exist, and before the index page because the front page links to the file.

Edit `Reputation-Matrix2/data/investigations.json`. No JS, no CSS.

| Do | Where | Note |
|---|---|---|
| **Find the arc's file** | match the arc against `arcIds[]` | If no file exists and the arc is genuinely new, start a **stub** — see INVESTIGATIONS.md → *Starting a new file* |
| **Add the session row** | `sessions[]` | `{ id, label, date, event }`. `event` must be the id of the event you just filed |
| **Add exhibits** | `exhibits[]` | Two or three per session. Each needs a `propId` that exists in `props.json` from Step 6, a `session` matching the row above, `onRecord`, and **three layers** |
| **Attach to a thread** | `threads[]` | If the exhibit touches no existing thread, either it belongs in another file or you have found a new thread. Add threads deliberately |
| **Convert consequences to leads** | `leads[]` | Write the `why` first. Weak `why` → not a lead |
| **Bump `lastFiled`** | header | In-world date |

**Layers, not summaries.** DC/XP ascend together — `3/5/7` for ordinary paper,
`4/6/8` for paper that resists being read. Roll is d6+1; failure costs nothing
and the layer may be re-examined. XP pays once, on first unlock.

The tone rule is the inversion the system exists for: **a lot of Waluigi
analysis, less story.** The story is already in `events.json`. If a sentence in
a layer would sit unchanged inside the event article, cut it and write the
argument instead.

**Do not write CSS for this step.** An investigation page is assembled from the
site's ordinary components; the data you add here renders through them
automatically. If something looks wrong, it is a data problem, not a styling
one — see [`INVESTIGATIONS.md` § Presentation](INVESTIGATIONS.md#presentation).

```bash
python3 tools/check-investigations.py
python3 tools/check-exhibits.py
```

`check-investigations.py` catches most of the list below mechanically —
unresolved event ids, missing props, non-ascending or unreachable DCs, leads
with no `why`, and broken links. The two items it cannot check are the two that
matter most: whether a layer is an argument or a summary, and whether a lead is
worth pursuing. Read those yourself.

```
□ tools/check-investigations.py exits clean
□ No layer retells the scene            (the script cannot see this)
□ Every new lead is worth pursuing      (the script cannot see this either)
□ Opened #/investigation/<id> and rolled every new layer once
□ lastFiled bumped
```

---

## Step 8 — Update the main index page

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

## Step 9 — Artifacts last

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
6  EXHIBITS    → props.json for the paper the prose named + [[prop:]] triggers
                 every ## Addendum: gets a slip · python3 tools/check-exhibits.py
7  INVESTIGATION → the arc file gets the session row, its exhibits, its leads
                 investigations.json · three layers each · analysis, not summary
8  INDEX       → Recent Adventures feed + SITE_UPDATES + mainPage.json
9  ARTIFACTS   → pending-news-articles.json → broadcast if owed → run report

The event is written last. The paper it mentions is filed right after.
The news is written after that.
Never trim story-critical material to hit a number.
```
