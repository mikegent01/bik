# Writing Battle Records

Battles are first-class citizens of the wiki. A fight big enough to escape
its session filing gets its own record in
`Reputation-Matrix2/data/battles.json` — a narrative battlefield article
that renders at `#/article/<id>`, appears in the **Battles** search category,
feeds the atlas index, and can carry `xpAwards` that the XP ledger already
knows how to read.

**A battle record is written from the record.** The dice log is ground
truth; the prose dramatizes it and invents nothing the dice did not say.

---

## Three homes for a fight — pick the right one

| Store | What it is | Use it when |
|---|---|---|
| `data/events.json` | Session filing, the full chronicle | The fight happened *in a session you are filing*. File the event first; link the battle from it |
| `data/battles.json` | **Narrative battle article** (this guide) | The fight is big, weird, or pivotal enough to own a page: 15+ combatants, a named duel, an arc-turning engagement — even if the only source is a combat ledger |
| `data/majorBattles.json` | Structured conflict index (sides, factions, commanders, date objects) consumed by the conflict tooling | The fight belongs to a *named conflict* the site models faction-side (wars, campaigns, crises). Structured, not narrative |

The three link together through `relatedArticles` and faction ids. A
world-historical war gets a majorBattles entry; the night the party's
cutting crew met a treant gets a battles.json record; the session that
contained it (if any) gets an event.

---

## What earns a battle record

- **Scale:** ~15+ combatants on the field, or a named duel between two
  principals (see `archie_vs_scorncrow`-class matchups).
- **Consequence:** the fight changed an arc (the Feyward lane opening,
  a faction broken, a retreat turned).
- **Character:** the fight has a story the event summary cannot hold —
  friendly fire, weather that switched sides, a librarian with books.

A regular encounter does not get a record. It lives in its session event — as
an object-shaped `keyBattles[]` row, which renders as an **⚔️ Engagements in
this filing** panel on that event's page (see
[`STORY_FORMAT_GUIDE.md` §10](STORY_FORMAT_GUIDE.md#10-battle-and-campaign-pages)).

---

## The record

Splice into `data/battles.json` (list order is chronological; match the
file's 2-space indentation — never reformat the file to add an entry).
Model new records on the newest same-arc record, not on the legacy tail.

| Field | Required | What it is |
|---|---|---|
| `id` | ✓ | slug: `snake_case`, arc-prefixed (`feyward_…`). Unique |
| `name` | ✓ | Display title. The house style allows one parenthetical joke |
| `date` | ✓ | In-world date + a hedge when time is unreliable ("Feyward-relative"). Ledger-side provenance goes here too |
| `location` | ✓ | Free text. If no location id is registered, **say so** — never invent one |
| `type` | ✓ | Slash-separated engagement taxonomy ("Field Battle / Pursuit") |
| `result` | ✓ | Who won, in one breath, with the cost |
| `summary` | ✓ | 2–4 sentences, the feed voice |
| `description` | ✓ | The article. Flowing paragraphs, Waluigi's editorial register |
| `casualties` | – | The casualty sheet, ledger-derived. Witty is allowed; wrong is not |
| `belligerents` | – | **New records: the structured shape** — `{attackers:{name, factionId?, commander?, combatants:[{name, role?, fate?, fateNote?, leader?}]}, defenders:{…}}`. Powers ⚔️ Waluigi's Order of Battle **and** the muster roster with per-combatant fate. A flat id list still validates, but renders no VS panel and no roster |
| `aftermath` | – | The field after the whistle; what is still owed |
| `relatedArticles` | ✓ | ids that **must resolve** (battle, majorBattle, event, character, location, faction). Cross-link the sibling battle and the arc's events |
| `image` / `imageCaption` | – | Path relative to `Reputation-Matrix2/`. One art call max per record, prompt-sheeted first per [`IMAGE_GENERATION_GUIDE.md`](IMAGE_GENERATION_GUIDE.md); `Text in image: NONE` unless the prose names an inscription |
| `reputationChanges` / `effects` / `reputationNotes` | – | Faction reputation deltas. Leave `{}` when hand-filing. **Never add a `_generatedReputation` marker for work `tools/genkit` did not do** — that marker is provenance, not decoration |
| `xpAwards` | – | XP the ledger should read off this battle. Without a table approved at the table, write none |
| `engagement` | – | `{combatants, ledgerWindow, scale}` — the engagement stat chips on the dossier |
| `fate` / `fateNote` / `leader` | – | Per combatant, inside `belligerents.*.combatants[]`. `fate` from the fixed vocabulary below (drives the roster status line and the VS side tallies); `fateNote` adds the one-line how; `leader: true` draws the ⚔ badge. The old `casualtySheet` paragraphs are retired — losses render per individual, not as prose blocks |
| `keyMoments` | – | The tally, as a tactical timeline: `[{time, who, act, result, decisive?}, …]` — renders as the **engagement timeline** (a vertical rail, not a table): decisive rows glow gold, and rows timed `"the gap"` render as *silence* — a dashed, muted band for the parts of a battle no account covers. No mechanics — watches, actions, consequences |
| `waluigiAssessment` | – | The closer, in its own field — the article renders it as a dedicated **Waluigi's Assessment** section. Do not bury it in `description` |

### The fate vocabulary

Every combatant on the roster carries a `fate`, and every fate renders as a
symbol + word on the roster and as a tally chip on the VS panel:

| Fate | Symbol | Meaning |
|---|---|---|
| `stood` | · | walked off the field |
| `wounded` | ✚ | fought on, hurt |
| `carried` | ✚ | left the field on shoulders — fate deferred, not dead |
| `fell` | † | destroyed / killed |
| `slept` | ☾ | the sand took them; marked, not struck |
| `turned` | ↻ | changed sides mid-engagement |
| `fled` | ➤ | broke and ran (the keeper's word is enough) |
| `withdrew` | ➤ | left the field in good order |
| `observed` | ○ | present, never engaged |

`leader: true` marks field leadership (⚔, gold). A record with no leader is
a record that honestly has none — say so in prose instead of inventing one.

### Naming the nameless

The Feyward's own filings already give minor creatures names — Boundy,
Morel, Steely, the guard with no name — and a battle record may do the
same: **a battle of nameless things is a weather report.** When the ledger
lists combatants only by role, the record may promote them:

- Name them in the local naming culture (the awakened wood's sprites take
  plant names — Gorse, Yew, Comfrey, Nightshade; the dryad is Linden).
- Introduce them in prose as *the shrub called Gall* — never pretend the
  ledger spoke a name it did not.
- The promotion lives in the battle record only, until a character filing
  claims it. Fate and role are reconstruction; counts are canon.

**Legacy warning.** The ten oldest records carry a parallel field set
(`title`, `participants`, `outcome`, `notableFeatures`, `audio*`,
`customCss`, …). They are historical. Do not extend that dialect; new
records use the fields above.

### Dossier discipline — never three stacked lists

The dossier is one meta line, one board, one timeline. Stats fold into the
header (`24 combatants · the night watches of 1 Aethel, 922 BF`); the roster
is a **muster board** of fate-token pills, not a table of rows; the tally is
a **timeline** with gaps shown as gaps. If a future record seems to need a
third or fourth stacked list, it does not need another list — it needs a
better idea (a map, an exhibit, a diagram) or it needs the prose to carry it.

### The extraction map — what renders where

The article page extracts, in order: sidebar rail (`date, location, type,
result, casualties`) → lead → participants/XP panel → **⚔️ Waluigi's Order
of Battle** (the VS infographic — requires structured
`belligerents {attackers, defenders}` with optional `factionId`,
`commander`, `combatants` counts) → **🏹 Battle Dossier** (engagement stats,
the **muster board** — the `combatants` as fate-token pills (leaders crowned gold, hover for role and fate) — and the `keyMoments` engagement
ledger table) → `description` prose (**`##` headings become article sections
and feed the Contents** — write the battle in Parts) → `aftermath` →
`waluigiAssessment` → related chips. Every one of those is a reason to
fill the field instead of compressing the fight into `summary`.

---

## Writing rules

1. **The ledger is ground truth.** Counts in the prose — combatants,
   casualties, equipment expended, watches and durations — come from the
   tally and stay exactly as counted. If you cannot point at the mark, you
   cannot say the number.
2. **No game mechanics in-world.** Rolls, armor classes, damage arithmetic,
   initiative order and morale scores never appear in a record. Translate
   every mechanic into its consequence: a perfect strike, a glanced blow, a
   broken formation, a man carried from the field. The table may know the
   dice; the encyclopedia knows the war.
3. **Dates are calendar dates.** The record's `date` and `engagement` fields
   use the Regal Empire Standard Calendar only — never a real-world or
   table-side date (see the root `README.md` calendar section). To date a
   battle: chain back through the filings to the last solid date and work
   forward; `currentDate.json` is the clock, not the guess.
4. **Rule zero applies** (see the root `README.md`): table names and GM
   names never become people in the prose. Ledger bookkeeping entries
   (hit-point updates, resource refunds) belong to the table, not the world.
5. **Unnamed is safe; named is a promotion.** Combatants the ledger names
   only by role may stay unnamed, or be promoted per *Naming the nameless*
   below — introduced as "called," never passed off as canon names.
6. **Gaps are findings.** When the ledger goes silent (pursuits, cut
   recordings), say so in the prose — the silence is part of the record.
   Never narrate the gap; never fill it.
7. **Waluigi's register.** The encyclopedia's author files battle records
   even when he wasn't there; he says so, quotes the ledger twice, and
   closes with the assessment nobody thanked him for. Commentary is the
   second layer, never the first (root README, philosophy #2).
8. **The casualties sheet rounds honestly.** Deaths, structural damage,
   furniture, dignity. If a combatant ended the night at zero with an
   unclear fate, the fate is "deferred," not "dead."

---

## The home feed — a battle this big goes on the front page

A major battle filing earns an item in the
**📜 RECENT ADVENTURES — WHAT WE'VE BEEN THROUGH** feed on the wiki home
page. That feed is *generated*:

```
edit tools/update-index-home.py   (the timeline_html block — battle chip red #e5484d)
python3 tools/update-index-home.py
```

**Never hand-edit `index.html`'s feed block** — the next tool run will
erase it (root README, "Never do these"). New items go at the top of
`timeline_html`, modeled on the items around them: date chip, title, actor
spans, a 3–5 sentence ledger-true summary, and chips linking the battle
record plus its nearest related articles.

---

## Exhibits — Documents behind this record

The exhibit system (`Reputation-Matrix2/data/props.json`) is not events-only.
A battle article grows a **"🗂️ Documents behind this record — The paperwork
this account is built on"** section the moment a prop lists the battle id in
its `articles[]` — the article renderer already calls it for every type. The
problem was never the plumbing; it was that nobody had filed battle paper.

**Every battle record worth writing names paper worth filing.** A combat
ledger becomes a tally sheet kept by the lowest-ranking survivor. A pursuit
becomes a quartermaster's count of expended cutlery. A rout becomes a morale
report nobody signed.

How to wire one:

1. Add the prop to `props.json` — `kind` is normally one the CSS styles
   (`ledger`, `note`, `letter`, `invoice`, `order`, `contract`, `telegram`,
   `map`, `passport`, `addendum`), `body` uses the canonical `.pd-*`
   classes, `stamps[]` from the fixed vocabulary (`evidence`, `sealed`,
   `void`, `overdue`, `paid`, `noaction`). **A new kind may be created for
   a specific article when the paper demands it** — a requisition form, a
   cairn rubbing, a signal-flag card: add the `.pd--<kind>` styling via the
   *article's* `customCss` field (the renderer injects it per record), keep
   the body classes canonical, and make it recognizably *paper* — a novel
   kind is a new form of document, never a layout.
2. Set `"articles": ["<battle_id>"]` — that is the entire wiring.
3. Reference it from the record's prose with `[[prop:<id>|text]]` so the
   reader can open it mid-sentence.
4. `python3 tools/check-exhibits.py` — classes, stamps, links, markers.

The worked example: **`prop_cutting_lane_tally`** on
`feyward_woodfellow_vs_the_treant` — the goblin staff's last-page tally of
the cutting lane (the treant 138→0, eleven pieces of cutlery for four hits,
two zeros carried, sprites "see weather report"), modelled on
*The Plank at the Cairn — Four Names* (`prop_ebot_summit_plank`). Craft
standard for the paper itself:
[`STORY_FORMAT_GUIDE.md` → §9B](STORY_FORMAT_GUIDE.md#9b-exhibits--the-documents-the-story-names).

---

## Verify before shipping

```bash
python3 tools/check-battles.py            # structure, ids, links, images
python3 tools/check-battles.py --strict   # same, but unresolved links FAIL
```

Unresolved `relatedArticles` in the legacy tail report as
`(legacy link)` warnings — record them, fix them when their record is next
touched, do not bulk-edit old records to silence the checker.

```
□ battles.json parses; record count +1; ids unique
□ Every relatedArticles id resolves
□ Image path exists on disk (or is an external URL) and has a caption
□ Every number in the prose is traceable to the ledger
□ No _generatedReputation marker on hand-filed records
□ Home feed item added via tools/update-index-home.py and the tool re-run
□ Cleanup / follow-up filings referenced as owed, not written speculatively
```

A battle record is a promise: everything on it happened on the dice.
Keep the promise.
