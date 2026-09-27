# Timeline — The Day, Reconstructed

**This is the format guide for the `timeline` field on session filings.**

XP answers *"what did the session pay?"* Some sessions pay nothing — foreign
protagonists, historical filings, one-shot worlds — and for those the XP
section of the article was dead weight: a greyed-out door reading *No XP was
banked against this record.* The timeline answers the question the ledger
never asks: **what was the day actually like?** What time was it when the
button got pressed. How long the song ran. What the weather was doing in
every world the filing crosses — and how the archive knows.

The first timeline was filed on
`the_cut_and_the_puppet_master` (5 Aethel, 1040 BF), a session with two
humans from another province, no party, and no XP to award. Everything below
is measured off that filing.

---

## Where it lives

A `timeline` object on the **event record** in `data/events.json`:

```json
"timeline": {
  "day": "5 Aethel, 1040 BF",
  "note": "Reconstructed, not witnessed — Waluigi was not in the building…",
  "method": "Duration anchors: one complete performance of Plumber Man —
             three minutes forty-one seconds by the archive's own copy,
             timed twice…",
  "worlds": [
    {
      "id": "main",
      "label": "The main world — where the archive keeps its desk",
      "short": "The main world",
      "timeOfDay": "Morning through night: a three-filing day…",
      "weather": "Low grey cloud all morning; a dry east wind…",
      "source": "Waluigi went looking for what the sky was doing… three
                 newsstands and one argument with a print vendor later…"
    },
    {
      "id": "studio",
      "label": "The Nintendo Mania studio — the promo world",
      "short": "The studio",
      "timeOfDay": "Morning by the archive's clock…",
      "weather": "No weather on record, and the archive means that as a
                  FINDING…",
      "source": "The account itself. The archive has no correspondent in
                 that world…"
    }
  ],
  "entries": [
    {
      "time": "Late morning — the collapsing set",
      "span": "one complete performance — 3:41 by the archive's copy",
      "beat": "Plumber Man",
      "detail": "The studio turns the music on and the actor fights to the
                 beat…"
    },
    {
      "time": "Night — the archive",
      "span": "one long night, and the song, timed twice",
      "beat": "This filing, and this timeline",
      "detail": "…",
      "world": "main"
    }
  ]
}
```

| Field | Required | Rule |
|---|---|---|
| `day` | yes | The in-world date, matching the event's `date` |
| `note` | yes | The honesty line: reconstructed how, and why the archive trusts it |
| `method` | recommended | The duration anchors the reconstruction is built on |
| `worlds[]` | yes (≥1) | One card per world the filing crosses — even a single-world filing carries one, or the weather has nowhere to live |
| `worlds[].label` / `short` | yes / optional | `short` is the chip shown on cross-world entries (falls back to the text before ` — `) |
| `worlds[].timeOfDay` | recommended | What the clock was doing there |
| `worlds[].weather` | yes | Conditions. *"No weather on record"* **is a valid filing** — but it must be filed, as a finding |
| `worlds[].source` | yes | **The honesty rule.** Weather is a claim about a day; claims need provenance |
| `entries[]` | yes (≥4) | The day, in order |
| `entries[].time` / `beat` / `detail` | yes | When / what / one or two sentences of it |
| `entries[].span` | strongly recommended | How long it took — the field that makes a timeline a timeline |
| `entries[].world` | optional | Only when the entry belongs to a world other than the primary one; must match a `worlds[].id` |

## When a filing needs one

* **No XP awarded** (foreign protagonists, historical sessions, one-shot
  worlds): the timeline takes the systems slot XP would have occupied.
  Determined at Step 4 of the filing process, where XP is decided.
* **Party sessions:** optional but welcome — XP and the timeline answer
  different questions and can coexist on the same record.
* **Backfill:** gradual, on demand. The renderer is silent on records without
  a `timeline`, so nothing breaks and nothing is owed. Do not mass-file
  timelines for old events in one pass; file them when a filing is next
  touched, or when a reader would actually ask what the day was like.

## The three honesty rules

These are the difference between a timeline and a lie with a clock on it.

**1. Reconstructed, not witnessed.** Waluigi was (almost certainly) not
there. The `note` says so in plain words, and times are "the archive's, laid
over the account in order." If the source world has no clock the archive
would trust — a studio whose wall clocks are PROPS — say that, and say which
calendar the times are imposed from.

**2. Durations anchor to countable things.** Never invent minute counts from
nothing. Anchor to what the account or the world can actually count: *one
complete performance of Plumber Man — 3:41 by the archive's own copy, timed
twice*; *two minutes of surveillance — the account counts them*; *the length
of one echo*; *as long as a man takes to pass close enough to touch*. A span
may be a joke, but it must be a joke with a unit.

**3. Weather is sourced in-world — the hunt is content.** This is the rule
the mode exists for. The main world's weather comes from somewhere the
archive can name: the RNN morning bulletin, back issues dug out of the WAH
Media Collective's boxes, a newsstand argument, a witness's umbrella. The
`source` field is written in Waluigi's voice and is allowed to be the best
paragraph in the filing. A world with no observable weather files **"no
weather on record"** as a finding — and explains why (no correspondent, the
windows were not talking, the applause track is the closest thing to weather
the building has).

## Voice

The entries are scannable, not prose-blocked — `beat` is a headline,
`detail` is one or two sentences. The Waluigi voice lives in the connective
tissue: `note`, `method`, every `source`, and the dry machinery of the
`span`s. CAPS where it earns its keep. At least one WAH per timeline is not
enforced by the checker but has never once failed to happen on its own.

## What renders

* **Article page** — a `🕰️ Timeline — the Day, Reconstructed` section on the
  event article, between *Waluigi's Assessment* and the *Field Plates*,
  with a Contents entry (`timelinePanel()` in `index.html`).
* **Filing hub** — a Timeline door (🕰️) appears on the record's hub **only
  when the record carries a timeline**; it navigates to the article and
  scrolls to the section, using the same anchor trick as the XP door.
* **Nothing on records without one.** No grey tile, no empty panel.

## Checker

```
python3 tools/check-timelines.py        # also runs inside check-all.py
```

Errors: missing `day`, no worlds, a world without weather or without a
source, an entry missing `time`/`beat`/`detail`, fewer than 4 entries, an
entry tagging a `world` that has no card. Warnings: fewer than 6 entries, a
missing `span`, duplicate time/beat pairs.
