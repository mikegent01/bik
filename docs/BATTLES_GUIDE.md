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

A regular encounter does not get a record. It lives in its session event.

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
| `belligerents` | – | **New records: the structured shape** — `{attackers:{name, factionId?, commander?, combatants:[{name, note}]}, defenders:{…}}`. This is what powers ⚔️ Waluigi's Order of Battle. A flat id list still validates and still renders the article, but it renders no VS panel |
| `aftermath` | – | The field after the whistle; what is still owed |
| `relatedArticles` | ✓ | ids that **must resolve** (battle, majorBattle, event, character, location, faction). Cross-link the sibling battle and the arc's events |
| `image` / `imageCaption` | – | Path relative to `Reputation-Matrix2/`. One art call max per record, prompt-sheeted first per [`IMAGE_GENERATION_GUIDE.md`](IMAGE_GENERATION_GUIDE.md); `Text in image: NONE` unless the prose names an inscription |
| `reputationChanges` / `effects` / `reputationNotes` | – | Faction reputation deltas. Leave `{}` when hand-filing. **Never add a `_generatedReputation` marker for work `tools/genkit` did not do** — that marker is provenance, not decoration |
| `xpAwards` | – | XP the ledger should read off this battle. Without a table approved at the table, write none |
| `engagement` | – | `{combatants, ledgerWindow, scale}` — the engagement stat chips on the dossier |
| `casualtySheet` | – | `{attackers, defenders}` — the full per-side casualty sheet for the dossier (the flat `casualties` string stays for the sidebar rail and the VS bar) |
| `keyMoments` | – | The ledger, verbatim: `[{time, who, act, roll, result}, …]` — renders as the "From the combat record" table. Crits/fumbles/routs get gold-highlighted rows |
| `waluigiAssessment` | – | The closer, in its own field — the article renders it as a dedicated **Waluigi's Assessment** section. Do not bury it in `description` |

**Legacy warning.** The ten oldest records carry a parallel field set
(`title`, `participants`, `outcome`, `notableFeatures`, `audio*`,
`customCss`, …). They are historical. Do not extend that dialect; new
records use the fields above.

### The extraction map — what renders where

The article page extracts, in order: sidebar rail (`date, location, type,
result, casualties`) → lead → participants/XP panel → **⚔️ Waluigi's Order
of Battle** (the VS infographic — requires structured
`belligerents {attackers, defenders}` with optional `factionId`,
`commander`, `combatants` counts) → **🏹 Battle Dossier** (engagement stats,
full `combatants` rosters with notes, `casualtySheet`, the `keyMoments`
ledger table) → `description` prose (**`##` headings become article sections
and feed the Contents** — write the battle in Parts) → `aftermath` →
`waluigiAssessment` → related chips. Every one of those is a reason to
fill the field instead of compressing the fight into `summary`.

---

## Writing rules

1. **The ledger is ground truth.** Every number in the prose — armor
   classes, damage, hit-point strings, morale states (`BOLD`, `SHAKEN`,
   `ROUT`) — is quoted from the combat record and stays exactly as rolled.
   If you cannot point at the line, you cannot say the number.
2. **Rule zero applies** (see the root `README.md`): table names and GM
   names never become people in the prose. Ledger bookkeeping entries
   (hit-point updates, resource refunds) belong to the table, not the world.
3. **Unnamed is safe.** Combatants the ledger names only by role stay
   unnamed unless a character filing exists to promote them.
4. **Gaps are findings.** When the ledger goes silent (pursuits, cut
   recordings), say so in the prose — the silence is part of the record.
   Never narrate the gap; never fill it.
5. **Waluigi's register.** The encyclopedia's author files battle records
   even when he wasn't there; he says so, quotes the ledger twice, and
   closes with the assessment nobody thanked him for. Commentary is the
   second layer, never the first (root README, philosophy #2).
6. **The casualties sheet rounds honestly.** Deaths, structural damage,
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
