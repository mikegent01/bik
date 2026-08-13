# The Investigations System — Authoring Guide

**What replaced the quest board, why, and exactly how to add to it.**

The quest board carried **73 entries**. Twenty-five of them had no description
at all — a title, a location, a notional reward, and nothing else. Several more
were of the form *a farmer has lost a screw*, filed on the same page as the
destruction of a bloodline. The board answered the question *what could we do
next*, and the party has never once been short of things to do next.

The question the party is short of is **what is happening to us**. That question
is not answered by a list. It is answered by paper.

> **One investigation per arc. It accretes.**
> Sessions add exhibits. Exhibits carry layered analysis behind dice rolls.
> Rolling pays XP. Objectives that survive become **leads** inside the file.

| | Old | New |
|---|---|---|
| Unit | A quest | An investigation (one per arc) |
| Growth | New quests are appended forever | The same file gets new exhibits |
| Reward | A flat listed reward | XP, paid per analysis layer, once |
| Reader action | Read a description | **Roll d6+1 against a DC and read further** |
| Balance | Story summary | **Heavy Waluigi analysis, light story prose** |
| Route | `#/quests` | `#/investigations` |

---

## Files

| Path | What it is |
|---|---|
| `Reputation-Matrix2/data/investigations.json` | The data. `{ _README, investigations[] }` |
| `Reputation-Matrix2/app/styles/systems/investigations.css` | **Only** the examination accordion, dice, pips and inline rolls. Everything else is site-standard classes — see [Presentation](#presentation) |
| `index.html` — section marked `INVESTIGATIONS SYSTEM` | The engine: views, dice, storage, connected panel |
| `Reputation-Matrix2/data/props.json` | The physical documents exhibits render |
| `Reputation-Matrix2/data/quests.json` | **Retained read-only** as the historical log at `#/quest-log`. Nothing was deleted from it |

The engine sits directly above `applyCustomCss()` in `index.html`. It reads
`DATA.investigations`, which is loaded because `'investigations'` is listed in
the `DATA_FILES` array. Adding an investigation, an exhibit or a lead needs
**no JavaScript and no CSS change** — it is a JSON edit.

---

## Routes

| Route | Behaviour |
|---|---|
| `#/investigations` | The index: one card per file |
| `#/investigation/<id>` | The case file: exhibits, brief, leads, threads |
| `#/quests`, `#/quest/<id>` | **Redirect.** A promoted quest id lands on the file that absorbed it; everything else lands on the index |
| `#/quest-log`, `#/quest-log/<id>` | The old board, read-only, kept as campaign history |

The redirect reads `_README.quest_migration.promoted_to_leads`, so old links in
old articles keep working. If you promote another quest later, add it to that
map and its link starts resolving to the right file.

---

## The shape of a record

```jsonc
{
  "id": "shadeward_feyward_ruined",
  "codename": "SHADEWARD FEYWARD RUINED",   // the file's shouty label
  "title": "Three Houses, One Method",       // what the file argues
  "subtitle": "…",
  "status": "active",                        // active | stub | closed
  "classification": "Open — accreting",
  "arcIds": ["shadowfell_estate", "…"],      // matches quests.json arcId values
  "opened": "23 Harvestide, 1040 BF",
  "lastFiled": "24 Harvestide, 1040 BF",
  "archivist": "Waluigi, Auditor-General",
  "icon": "🏚️",
  "accent": "#8a4bff",                       // inline border-left on the tile + file header
  "hook": "one sentence for the index card",
  "brief": "markdown-ish prose; ## makes a heading",
  "sessions": [ { "id":"…", "label":"…", "date":"…", "event":"<events.json id>" } ],
  "threads":  [ { "id":"th_anchor", "title":"…", "text":"…" } ],
  "leads":    [ … ],
  "exhibits": [ … ],
  "relatedEvents": ["<events.json id>", …]
}
```

### Exhibit

```jsonc
{
  "id": "ex_key_thrown",
  "propId": "morel_key_note",        // MUST exist in props.json
  "itemId": "morel_feyward_key",     // optional; must exist in INVENTORY_SYSTEM.items
  "session": "s23_amnesia",          // must match a sessions[].id
  "icon": "🗝️",
  "kind": "note",
  "title": "The key Morel threw",
  "secured": "Recovered 23 Harvestide, Feyward attic corridor",
  "custody": "Party — Toad Lee",
  "onRecord": "What anyone can see without rolling.",
  "layers": [ … ],
  "links": { "events": [], "items": [], "characters": [] }
}
```

`links` ids must resolve — events against `events.json`, characters against
`characters.json`, items against `INVENTORY_SYSTEM.items`. Anything that does
not resolve is silently dropped from the cross-reference chips, which is worse
than an error because you will not notice.

### Layer

```jsonc
{ "dc": 5, "xp": 70, "category": "discovery", "title": "…", "text": "…" }
```

- Layers are **ordered**. Layer *n+1* is sealed until layer *n* is unlocked.
- `category` is one of `discovery`, `magic`, `stealth`, `loyalty` — the same
  four the XP leaderboard colours.
- `text` is the analysis. This is where the writing lives.

### Lead

```jsonc
{
  "id": "lead_verify_ring",
  "title": "…",
  "state": "open",
  "priority": "critical",            // critical | high | medium | low
  "objective": "What the party would physically do.",
  "why": "Why this is a lead and not an errand.",
  "fromQuest": "dinner_party_aftermath",   // migration hook; optional
  "xp": 200,
  "exhibits": ["ex_soul_ring"]
}
```

The `why` field is the whole point of the redesign and it is **not optional**.
If you cannot write a sentence explaining why this objective changes what the
file can prove, it is not a lead. Put it in the log and move on.

---

## Dice

Examination is **d6 + 1 against the layer DC**, matching the roll in
`archiecourtcase/dice.js`, which is where this interaction came from.

- Failure is **not a locked door**. Nothing is consumed. The button says
  Examine again and the paper is still on the table tomorrow.
- XP is awarded **once per layer, on first unlock**.
- Standard ladders: `3 / 5 / 7` for an ordinary document, `4 / 6 / 8` for one
  that is actively resisting being read (redactions, ciphers, sealed wax).
- **The study bonus.** A bare `d6 + 1` tops out at 7, so a DC 8 layer would be
  unreachable on its own. Every *failed* reading of a layer leaves a permanent
  **+1 study bonus** on that layer, capped at **+3**, persisted alongside the
  unlock state. So DC 8 is not a wall — it is two failed readings and a third
  attempt. The failed pill shows `+N study` and the button changes to
  *Examine again*. This is why the DCs were left alone rather than lowered:
  documents that resist being read should take more than one sitting.
- Progress lives in `localStorage` under `waluipedia-investigations-v1`.
  Nothing is written back to JSON. Reset from the file header.

There is **no dice audio asset in this repository**. `archiecourtcase/dice.js`
references a `/dice noise.mp3` that does not exist. Rather than ship a binary,
`invDiceSound()` synthesises the roll with the WebAudio API — a filtered noise
burst plus two clacks — and is wrapped in a `try/catch` that swallows
everything. Audio is decoration; it must never be able to break a roll. If a
real asset is added later, replace the body of `invDiceSound()` and nothing
else changes.

### Inline rolls inside prose

Any layer `text` may contain:

```
[[roll:5|the phrase the reader clicks|what a success says|what a failure says]]
```

It renders as a dashed underline; clicking rolls a plain d6 against the DC and
prints the result in place. One roll per span, no XP. Use it for a judgement
call the archive genuinely cannot settle, not for decoration.

---

## Presentation

An investigation page is **an ordinary Waluipedia page**. It is built out of
the same components as every other index and article in the archive, and it
should be indistinguishable from them at a glance. The first version of this
system shipped a parallel design language (`.inv-hero`, `.inv-grid`,
`.inv-card`, `.inv-tabs`, `.inv-modal`, …) and read like a different website
bolted onto this one. That was removed.

**Rule one: a case file is one continuous document.**

Read it top to bottom — the hook, the brief, the threads, the evidence locker,
the leads, the records behind them — with a sidebar table of contents to jump
around. This is exactly how `view_trial()` renders a court case, and it is how
`archiecourtcase/` renders the Miser trial: summary of allegations first, then
you scroll into the evidence locker.

An intermediate version of this page put those sections behind tabs. That was
wrong for a reason worth writing down: **a case file is an argument, and an
argument that is split across four pages you have to click between is not an
argument any more, it is four fragments.** The reader cannot see the brief and
the exhibit that supports it at the same time, cannot Ctrl-F the file, cannot
print it, and cannot tell how much there is. Tabs are for *filtering a list of
peers* — which is why the index page still has them. They are not for
*sectioning one document*. Do not reintroduce them here.

**Rule two: if the site already has a class for it, use the site's class.**

| Thing on the page | Class to use | Do not invent |
|---|---|---|
| Page/section container | `.card`, `.card.animate-fade-in` | `.inv-hero`, `.inv-file-head` |
| Section header with a right-hand action | `.home-section-head` | a bespoke header row |
| Grid of clickable things | `.artgrid` + `.arttile` (`.tt` `.tsub` `.tsum` `.tmeta`) | `.inv-grid`, `.inv-ex-grid` |
| Detail page skeleton | `.breadcrumb` + `.article-layout` + `.art-kicker`/`.art-title`/`.art-subtitle`/`.metabar` | a bespoke file header |
| Filters on the index | `.chips` + `.chip` (`.active`) | `.inv-tabs` |
| Small status badge | `.pill` (+ a colour-only modifier) | a new badge component |
| Big number readout | `.species-stats` + `.species-stat` | `.inv-stat` |
| Progress meter | `.xpbar` | `.inv-bar` |
| Sidebar facts | `.infobox` with `.row`/`.k`/`.v` | `.inv-meta` |
| Sidebar navigation | `.cross-page-panel` + `.cross-page-links` | a bespoke link list |
| Aside in Waluigi's voice | `.wnote` | `.inv-brief` |
| Long-form analysis | `.prose` | `.inv-analysis` |
| Chip linking to another record | `.rel-chip` (with a `.rt` kicker) | `.inv-c-row` |
| Reading a physical document full-screen | the prop overlay from `exhibits.css`: `.exhibit-overlay` → `.exhibit-frame` → `.exhibit-bar` / `.exhibit-stage` / `.exhibit-foot` | `.inv-modal` |
| The document itself | `propDocumentHtml(propId)` → `.pd` and the `.pd-*` family | re-render the prop by hand |

Four things are genuinely new to this system and therefore *do* live in
`investigations.css`:

1. `.inv-layer` — the examination accordion (head, body, `.open`, `.unlocked`,
   `.locked`).
2. `.inv-roll-out` and `.inv-die` — the roll readout and the tumbling die.
3. `.inv-pips` / `.pip.on` — the "how much of this exhibit has been read"
   strip, which sits inside an ordinary `.arttile .tmeta` row.
4. `.inv-inline-roll` / `.inv-inline-out` — the clickable spans inside prose.
5. `.inv-session-head` — the dashed divider inside the evidence locker that
   says "these exhibits came out of that session". An `<h3>`, so it stays in
   the article's heading rhythm instead of becoming a card.
6. `.inv-lead` — a lead as a bordered block in the run of the document, the way
   charges read on a trial page. Not a card; cards would break the scroll into
   a stack of boxes.

Plus two colour-only modifiers that ride on `.pill` and set nothing but
`color` and `border-color`: `.inv-status--*` (active / stub / closed) and
`.inv-pri--*` (critical / high / medium / low).

If you are about to add a rule to `investigations.css` that sets `padding`,
`border-radius`, `display:grid`, or a background gradient, stop — you are
rebuilding a component the site already has, and that is the exact mistake
this section exists to prevent.

### Section order on a case file

| # | Section | Anchor | Shown when |
|---|---|---|---|
| — | Header: kicker, title, subtitle, metabar, **The Hook** in an `.article-lead-card`, progress | — | always |
| 1 | Waluigi's Brief | `sec-brief` | `brief` is set |
| 2 | Open Threads | `sec-threads` | `threads[]` is non-empty |
| 3 | Evidence Locker | `sec-exhibits` | `exhibits[]` is non-empty |
| 4 | Live Leads | `sec-leads` | `leads[]` is non-empty |
| 5 | Session Records Behind This File | `sec-records` | at least one `relatedEvents` id resolves |

The order is deliberate and matches the court document: **you are told what the
file argues before you are handed the paper.** Sections push their own entry
into the table of contents as they render, so the TOC never lists a section
that is not on the page.

Two conventions inherited from the rest of `index.html`:

- **Optional panels return `''` when they have nothing to show.** See
  `renderConnectedInvestigationsPanel()`, and `renderConnectedQuestsPanel()`
  before it. Never render an empty box.
- **Accent colour comes in as an inline `border-left`**, matching
  `renderConnectedQuestsPanel()` and the event cards, rather than through a
  custom property the stylesheet has to know about.

---

## Tone

**Heavy Waluigi analysis, light story prose.** This is the inversion that
defines the system.

The story is in `events.json`. It is already written, at length, with scenes and
dialogue. An investigation must not retell it. An investigation is the
**archivist arguing about it** — and Waluigi is an interested party, which is
exactly why every claim has to be pinned to a document.

Working rules:

1. **Name the exhibit before you make the claim.** "The bag held seven
   unlabelled keys" beats "Morel is clearly hoarding keys."
2. **Prefer the boring document.** An ammunition sheet, an unpaid invoice, a
   salvage return with the values struck out. People lie in testimony and tell
   the truth in accounting.
3. **Write the uncomfortable reading down.** Do not save it. The third layer is
   where it belongs, and it is worth the most XP because it costs the most to
   look at.
4. **File both readings.** When a document can be read two ways, the archive
   files both and marks which one it prefers. Kamek read a dedication as a
   personal address and wrote *for me* on it in charcoal. Waluigi is not immune
   to this; Waluigi simply writes the preference down where it can be checked.
5. **No summary of the scene.** If a sentence would fit unchanged in the event
   article, cut it from the layer.

---

## Process — adding a session's worth to a file

Do these in order. This is the same discipline as
[`SESSION_FILING_PROCESS.md`](SESSION_FILING_PROCESS.md) and it exists for the
same reason: everything out of order becomes a rewrite.

1. **File the event first.** The session must exist in `events.json` before it
   can be cited. Follow the eight steps in the filing process, including
   **Step 6 — Exhibits**, which is where the props are created.
2. **Add the session row.** Append to `sessions[]`:
   `{ id, label, date, event }`. The `event` id must resolve or the "session
   record" link will not render.
3. **Pick the paper, not the moments.** Go back through the beat list and ask
   what physical object the session produced. Two or three per session is
   plenty. Twelve exhibits carried an entire arc.
4. **Create the prop.** Every exhibit's `propId` must exist in `props.json`
   with a real `body`. The prop is the artefact; the exhibit is the archive's
   handling of it. Do not create an exhibit with no document behind it.
5. **Write `onRecord`.** What is visible without rolling. One or two sentences,
   flat and factual. This is the part that has to be *true* rather than
   *argued*.
6. **Write three layers.** Surface reading → the thing a careful reader would
   catch → the reading that changes what the file is about. DC and XP ascend
   together.
7. **Attach it to a thread.** If the exhibit does not touch an existing entry in
   `threads[]`, either it belongs in a different file or you have discovered a
   new thread. Add the thread deliberately; do not let them breed.
8. **Convert consequences into leads.** If the session ended with the party
   owing somebody an answer, that is a lead. Write the `why` first. If the `why`
   is weak, do not write the lead.
9. **Bump `lastFiled`.** In-world date.
10. **Run the checks.**

```bash
python3 -c "import json; json.load(open('Reputation-Matrix2/data/investigations.json')); print('valid json')"
python3 tools/check-exhibits.py     # every propId you referenced must pass this
```

Then open `#/investigation/<id>` and roll every new layer once. A layer whose
`text` reads like an event summary will be obvious the moment it is behind a
die.

---

## Starting a new file

Do not start one per session, per villain, or per location. Start one when an
**arc** has produced paper that argues with other paper.

A new file needs, minimally: `id`, `codename`, `title`, `status: "stub"`,
`arcIds`, `icon`, `accent`, `hook`, a `brief` that states what the file will
argue, one thread, and two leads. Stubs render correctly with no exhibits and
no sessions — the evidence locker section is simply absent, and the file opens
on the brief. Every section on the page follows that rule: it renders or it is
not there, and it never appears empty.

Four stubs already exist and are waiting for their first exhibits:

| Codename | File | Arc |
|---|---|---|
| `THE REGENCY LEDGERS` 🏛️ | `capital_intrigue_file` | Capital intrigue |
| `THE GOD-TOAD QUESTION` 🍄 | `mushroom_civil_war_file` | Mushroom civil war |
| `SOMEWHERE TO PUT THEM` 🏠 | `toad_liberation_file` | Toad liberation |
| `THE FESTIVAL PACT` 🐯 | `rakasha_alliance_file` | Rakasha alliance |

---

## The quest triage, on the record

`_README.quest_migration` records what happened to all 73 entries, by id, so
that the decision is auditable rather than remembered.

| Bucket | Count | Meaning |
|---|---:|---|
| `promoted_to_leads` | 16 | Story-bearing. Now leads inside a file. Old links redirect |
| `culled_filler` | 27 | The 25 empty `request_*` stubs plus two duplicates. Not surfaced anywhere |
| `retired_to_log` | 30 | Real content, resolved or dormant. Readable at `#/quest-log`, not presented as live |

**Nothing was deleted from `quests.json`.** The triage is a presentation
decision, not a data deletion, and it can be revised by editing the map.

---

## Common mistakes

| Mistake | What happens | Fix |
|---|---|---|
| Exhibit with a `propId` that is not in `props.json` | The document area renders empty | Create the prop first; run `tools/check-exhibits.py` |
| `session` id that matches no `sessions[]` entry | The exhibit renders in an untitled group at the bottom | Add the session row |
| Layers out of DC order | Reader hits the hardest wall first and stops | Ascend: 3/5/7 or 4/6/8 |
| A layer that summarises the scene | Reader paid a roll for something they already read | Cut it; write the argument instead |
| A lead with no `why` | It is a quest again | Delete it or justify it |
| Unresolvable ids in `links` | Chips silently vanish | Check against `events.json`, `characters.json`, `INVENTORY_SYSTEM.items` |
| Reusing an `id` inside one investigation | The second one is unreachable | Ids are unique per file |
| Adding a new `.inv-*` layout class | The page drifts away from the rest of the site again | Use the site class — see [Presentation](#presentation) |
