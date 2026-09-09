# Waluipedia — The Vigilance Terminal

**START HERE.** This is the readme for the readmes. If you are an AI agent, a
new contributor, or returning after a break, read this page to the end before
touching anything. It says what the project is, how the work is done, and
which document owns each topic.

---

## Once you've read this — open a pull request

**Finished reading? Do not work on `gh-pages` directly.** Create a branch, do
the work, then open a PR into `gh-pages` with the purpose stated up front. The
PR *is* the run report's cover letter: a future reader (human or agent) should
understand what changed and why without opening a single file.

### PR guidelines

1. **Purpose in the title.** `feat:`, `fix:`, `docs:`, `remaster:` — then the
   change in one line. *"feat: Waluigi Chat joins the RNN late slot"* beats
   *"updates"* the way a filed article beats a rumour.
2. **One purpose per PR.** A PR that fixes the exhibit checker *and* adds a
   broadcast *and* renames portraits cannot be reviewed, reverted, or cited.
   Split it.
3. **Description template — fill all four:**
   - **Purpose** — why this change exists, in-world and out-of-world.
   - **What changed** — every file, grouped: hand-written vs generated.
   - **Verification** — the commands you ran (`build-rnn-broadcast.py --check`,
     `check-exhibits.py`, audits) and their results. Unverified = unmerged.
   - **Run report** — link or paste the report per `docs/RUN_REPORT_FORMAT.md`.
4. **Never hand-edit generated files in a PR.** Edit the generator, run it, and
   commit both together (`rnn-broadcasts.js` and the `RNN:LAST-WEEK` README
   blocks are *outputs*). A PR whose generated files don't match its sources
   is a broken PR.
5. **Generated art and big media:** new assets must be referenced by something
   in the same PR. Unreferenced uploads rot. Follow `docs/ASSET_MAP.md` for
   where things live.
6. **Remaster, don't rewrite.** PRs that delete working context to impose a
   "cleaner" structure will be asked to justify every deletion (see the
   philosophy below — especially rules 3 and 4).
7. **Small diffs, matched indentation.** Never reformat a whole data file to
   add one entry. Match the file's existing style exactly.

---

## Rule zero — `mike` is a GM name, not a character

**The single most important thing on this page.**

Session transcripts are recorded at a real table, and the name **`mike`** in
them is the **GM** — the person running the game. It is not a character. It is
not canon. It is not a person in the world.

```
Wherever you see `mike`, ignore it.
Never write `mike` into new narrative prose.
Never treat `mike` as a person who was in the room, in-world.
```

A `mike` entry exists in `Reputation-Matrix2/data/characters.json` because the
name was once mistakenly filed as a character. **That entry stays** — deleting
it would break links from older filings — but it is a historical artifact, not
a precedent. The Mount Ebot narrative, where it first appeared, has been
rewritten without it; his actions in that expedition are now carried by named
in-world characters.

The general form of this rule: **table names are not character names.** GM
names, player names, and Discord handles never become people in the fiction.
If a transcript hands you one, invent an in-world name or leave the character
unnamed and refer to them by role — *the hire*, *the charter pilot*, *the boy*.
Unnamed is always safe; it invents no canon and can be named later without a
retcon. Full rule:
[`docs/STORY_FORMAT_GUIDE.md` → Naming rule](docs/STORY_FORMAT_GUIDE.md#naming-rule--table-names-are-not-character-names).

---

## What this project is

An in-world encyclopedia, campaign chronicle and faction-simulation terminal
for the Waluipedia tabletop campaign. `index.html` is the encyclopedia shell;
`Reputation-Matrix2/` is the systems layer (factions, reputation, maps, laws,
newspapers, standalone pages); `tools/` holds the Python generators that keep
the two in sync.

It is a **static site** — no build step for the pages themselves, no framework.
The Python tools generate data and splice HTML; they are not a pipeline you must
run to view the site.

### Running it — `python3 start.py`

```bash
python3 start.py                                      # serve + open the browser
python3 start.py --route "#/article/the_belly_of_the_beast"
python3 start.py --no-browser --host 0.0.0.0 --port 9000
```

`start.py` sits in the repository root, serves the archive over HTTP and opens
the home page for you. **Use it rather than double-clicking `index.html`.**
Opening the file directly still renders the shell, but the browser blocks
`fetch()` on `file://`, so `Reputation-Matrix2/data/*.json` never loads and
events, characters, exhibits and investigations silently come up empty. The
script also sends `Cache-Control: no-store`, which kills the "I filed it but the
page shows the old version" problem. Ctrl-C to stop; it writes nothing and
builds nothing.

## Intake first — decide what the data becomes

Do not start by writing an event just because the user pasted campaign data.
First decide which archive object the data actually calls for. The dedicated
guide is:

**→ [`docs/INTAKE_DECISION_GUIDE.md`](docs/INTAKE_DECISION_GUIDE.md)** — when
to create an event, battle, exhibit, investigation update, article analysis,
shop item, XP award, character/location/faction record, annotation, RNN
episode, or nothing yet.

Then, if the answer is a session filing, follow
[`docs/SESSION_FILING_PROCESS.md`](docs/SESSION_FILING_PROCESS.md) in order.
The short rule remains:

```text
classify the input → locations → characters → XP → event prose
→ exhibits → investigation → index/home → artifacts/RNN → run report
```

### README maintenance standard

Keep README files as routing documents, not crowded changelogs. A README
should answer three things quickly: **what this area owns, where the source of
truth lives, and which checks prove it works.** Put long decision trees in
`docs/`, then link them from the README.

When adding a system, document:

1. source of truth;
2. generated outputs, if any;
3. reader/player surface;
4. canon boundaries;
5. verification commands;
6. what must not be hand-edited.

Do not paste a giant recent-PR matrix into the root README. If a change needs
that much explanation, it needs its own guide.

## The philosophy

Seven habits explain nearly every decision in this repository:

1. **It is written from inside the world.** Articles are filed by in-world
   authors — chiefly Waluigi, who is opinionated, petty, and frequently right.
   Nothing is written in the neutral voice of a rulebook.
2. **A story with a commentator, not a report with scenes attached.** The
   difference between a filing that works and one that does not is almost
   always physical detail: quoted speech, named objects, sounds. Commentary is
   the second layer, never the first. **If Waluigi was in the room, the
   commentator is a witness:** asides say *I said*, *I heard*, *I told him*.
   He files names he caught. He does not write "the record missed it" about a
   roll call he stood through — that is in
   [`docs/STORY_FORMAT_GUIDE.md` §7](docs/STORY_FORMAT_GUIDE.md#7-voice-and-point-of-view).
3. **Remaster, don't rewrite.** What exists, stays. Improve it, extend it,
   navigate it better. Wholesale replacement destroys context that took
   sessions to accumulate. When a remaster is proposed and the page's owner
   prefers the original, the original wins — see
   [`docs/AUDIT_SCRIPTS.md` → Readability audit](docs/AUDIT_SCRIPTS.md#readability-audit)
   for how a failed remaster gets recorded rather than repeated.
4. **Never cut for the sake of cutting.** Length is not a defect. If prose
   cannot be trimmed without sounding worse, do not trim it. Story-critical
   content is never removed to satisfy a word band — the bands are aim, not
   target. Improve instead of cutting.
5. **Process before prose.** Locations, characters and XP are settled *before*
   the event is written. The event is written last. See the filing process.
6. **If the prose says a document exists, the reader can open it.** Invoices,
   wires, demands and addendums are filed as exhibits in `props.json`, written
   in the issuing body's voice. A filing that only describes its paper is a
   summary of an archive.
7. **Generated files are never hand-edited.** Edit the generator, then run it.

---

## Every readme, and what it owns

**Start with intake. Once you know the data should become a session filing, the filing process is the spine.**

### How the work is done

| Document | Owns | Read when |
|---|---|---|
| **[`docs/INTAKE_DECISION_GUIDE.md`](docs/INTAKE_DECISION_GUIDE.md)** | **What to create from supplied data.** Event vs battle vs exhibit vs investigation vs shop item vs XP vs character/location/faction vs annotation vs nothing yet | **First. Before deciding the task shape** |
| **[`docs/NPC_FOLDER_SORT.md`](docs/NPC_FOLDER_SORT.md)** | **How the npc/ drop box was sorted.** 271 unsorted files → portraits/props/scenes; how updated sprites were matched to existing portraits by perceptual hash and confirmed by eye; what was deleted (first-party rips, soundtrack audio, a 403 page saved as .jpg) and why | Adding art, or wondering where an npc/ file went |
| **[`docs/FILING_HUB_GUIDE.md`](docs/FILING_HUB_GUIDE.md)** | **The filing desk.** The menu shown before a record that has been filed more than one way: Story / Analysis / Commentary / Investigation / XP, why Arc was dropped in favour of XP, the ≥2-doors gate, and how to add a sixth door | Adding a new way to read a filing, or wondering why a record skipped the menu |
| **[`docs/README-COMMENTARY-MODE.md`](docs/README-COMMENTARY-MODE.md)** | **Waluigi's Cut — start here.** What the mode is, why it exists, the three rules, the data shape, the enforced voice floors, and how to write one | First time filing a commentary |
| **[`docs/COMMENTARY_MODE_GUIDE.md`](docs/COMMENTARY_MODE_GUIDE.md)** | **Waluigi's Cut — the comedy commentary track.** Retell the whole story with the opinions cut in every second or third sentence, never at the end; no invented facts; voice floors enforced by `tools/check-commentaries.py` | Filing a commentary, or when an article reads flat |
| **[`docs/DATE_FILING_GUIDE.md`](docs/DATE_FILING_GUIDE.md)** | **How to date new and backfilled articles.** Tense before dates; walk backward to the prior solid date, then forward through the chain; repair vague earlier dates when touched. Includes the mandatory **time filing code** (`TC:1040-08-30T23:50/SHD`) enforced by `tools/check-timecodes.py` | Before setting any event date |

> **Date warning:** a missing timestamp is not permission to use the current clock. Resolve relative clues such as “a week ago” first; seven days before 5 Aethel is 28 Harvestide. If the clue and the chain disagree, stop and mark the date inferred or ask rather than silently filing at “now.”

> **Canon warning:** read the referenced character and source articles before dating from a name. Princess Peach is deceased, assassinated on Highsun 1, 955 BF; a Peach keepsake in a later scene is not a recent Peach action.
| **[`docs/SESSION_FILING_PROCESS.md`](docs/SESSION_FILING_PROCESS.md)** | **The ordered process.** Locations → characters → XP → *then* the event → exhibits → the investigation file → index → artifacts | After intake says "this is a session/event filing" |
| **[`docs/INVESTIGATIONS.md`](docs/INVESTIGATIONS.md)** | **The investigations system** that replaced the quest board. One accreting case file per arc; exhibits, layered analysis behind d6+1 rolls, XP, leads | Adding a session's paper to an arc |
| **[`docs/PROVINCE_CENSUS_GUIDE.md`](docs/PROVINCE_CENSUS_GUIDE.md)** | **The province census.** POIs merged into provinces, the controller each area's filed faction data crowns, borders drawn from that census, the shortlist that helps a player pick a pin, and how Power Projection reads the same numbers | Reading the atlas or the map, filing a province, or arguing about who holds what |
| [`docs/ARTICLE_ANALYSES.md`](docs/ARTICLE_ANALYSES.md) | Waluigi's **opinionated 20/80 companion analysis** for a filed article; canonical schema, voice, canon boundaries, and the **"Waluigi is at a desk"** grounding rule (20/80 is about evidence, not prose — the argument still has to happen in a room) | Writing or editing a dedicated analysis |
| [`docs/article-analyses/README.md`](docs/article-analyses/README.md) | The implemented analysis section: discovery, renderer lifecycle, research persistence, CSS scopes, validation, troubleshooting | Maintaining or extending the analysis feature |
| [`docs/ARTICLE_REVISIONS.md`](docs/ARTICLE_REVISIONS.md) | **Revisions on one record** — `revisions[]`, the `.vhistory` bar, when to amend instead of re-file or duplicate | Amending, expanding or correcting a filing |
| [`docs/STORY_FORMAT_GUIDE.md`](docs/STORY_FORMAT_GUIDE.md) | Craft standard for **canon session events** — prose, asides, apparatus, exhibits, battle pages | Writing an event |
| [`docs/WHATIF_FORMAT_GUIDE.md`](docs/WHATIF_FORMAT_GUIDE.md) | Craft standard for **non-canon What-Ifs** — decision engine, ledger, findings, verdict | Writing a What-If |
| [`docs/RNN_BROADCAST_GUIDE.md`](docs/RNN_BROADCAST_GUIDE.md) | The news broadcast. **One episode per ~10 events**, the pending list, the voice | Cutting an episode |
| [`docs/BATTLES_GUIDE.md`](docs/BATTLES_GUIDE.md) | **Battle records** — `data/battles.json` + `data/majorBattles.json`: what earns a record, schema, ledger-truth rules, the home feed item | Filing a battle |
| [`docs/BATTLE_STORY_FORMAT_GUIDE.md`](docs/BATTLE_STORY_FORMAT_GUIDE.md) | **Battle craft** — the six-part war-report shape, mechanics→consequences translation, pacing tells | Writing a battle article |
| [`docs/ARTICLE_QA.md`](docs/ARTICLE_QA.md) | **Content QA** — the six checks over every article before it ships; the Hanging-Tree exemplar | Reviewing any article |
| [`docs/CROSS_SYSTEM_UPDATES.md`](docs/CROSS_SYSTEM_UPDATES.md) | **Cross-system triggers** — Pond Patrol, dynasties, POIs, bros attacks, currencies, WAHwire, songs, books: what every filing must also touch | After any filing |
| [`docs/IMAGE_GENERATION_GUIDE.md`](docs/IMAGE_GENERATION_GUIDE.md) | **Prompt sheet before generating.** Art direction from the prose, when text belongs in an image, editing over rerolling. New substantial articles ship with images. **A known character is always pulled from `portraits/` as a reference — never described from scratch** | Illustrating any filing |
| [`docs/CSS_STYLE_GUIDE.md`](docs/CSS_STYLE_GUIDE.md) | **CSS without breaking the archive.** Scoped selectors, fluid layouts, long Waluigi assessments, reputation panels, theme checks | Changing site styles |
| [`docs/VERIFICATION_AND_ORGANIZATION.md`](docs/VERIFICATION_AND_ORGANIZATION.md) | Checks that catch breakage; rules that prevent bloat; where files go | Before calling a run done |
| [`docs/RUN_REPORT_FORMAT.md`](docs/RUN_REPORT_FORMAT.md) | How to report at the end of a run — every file, every event, every XP award | End of every run |
| [`docs/AUDIT_SCRIPTS.md`](docs/AUDIT_SCRIPTS.md) | The craft-audit scripts — event, what-if and readability (advisory); exhibits, investigations, rolls (pass/fail) | Checking a draft's numbers |
| [`docs/INJURY_TABLE_GUIDE.md`](docs/INJURY_TABLE_GUIDE.md) | The permanent injury d100 desk, character references, spinner, and assignment tool | Rolling or healing a lasting injury |
| [`docs/ARCHIVE_RANKING.md`](docs/ARCHIVE_RANKING.md) | Which filings set the standard and why | Arguing about standards |

### How the code and data are built

| Document | Owns |
|---|---|
| [`Reputation-Matrix2/gemini.md`](Reputation-Matrix2/gemini.md) | **Engineering conventions** — architecture, data contracts, house style. Canonical copy |
| [`Reputation-Matrix2/README.md`](Reputation-Matrix2/README.md) | The systems layer: factions, reputation, maps, laws, standalone pages. Canonical copy |
| [`docs/PROJECT_STRUCTURE.md`](docs/PROJECT_STRUCTURE.md) | Directory-by-directory map of the repository |
| [`docs/ASSET_MAP.md`](docs/ASSET_MAP.md) | Where images, sprites and media live |
| [`docs/ARCHITECTURE_AUDIT.md`](docs/ARCHITECTURE_AUDIT.md), [`docs/FINAL_STRUCTURE_AUDIT.md`](docs/FINAL_STRUCTURE_AUDIT.md) | Point-in-time audits. Historical record |
| [`docs/LEGACY_FILES.md`](docs/LEGACY_FILES.md) | What is dead, and why it has not been deleted |

### Sub-project readmes

| Document | Owns |
|---|---|
| [`wahsim/README.md`](wahsim/README.md) | The Wahsim simulator — its own tool, its own docs |
| [`Reputation-Matrix2/tools/hub/README.md`](Reputation-Matrix2/tools/hub/README.md) | The tools hub |
| [`Reputation-Matrix2/tools/item sheet examples/README.md`](Reputation-Matrix2/tools/item%20sheet%20examples/README.md) | Foundry item-sheet examples |
| [`timeline/README.md`](timeline/README.md) | Bundled sidecar React timeline app. Separate subject/data pipeline; keep changes isolated and do not treat it as Waluipedia canon |

---

<!-- RNN:LAST-WEEK:START -->
## 📺 Last Week on the Rakasha News Network

> **EP 004 — Ten Unaired Nights, and Wario Takes the Chair**  
> Hunt Day AETHEL 5, 1040 BF · covering ten unaired nights, oldest first — 872 BF to 1045 BF, aired Aethel 5 with the desk’s apologies for the backlog · runtime 6:34  
> **Whisper-in-Wind**, Death Speaker, Spirit-Walker Clan · **Waluigi**, Host, Waluigi Chat · encyclopaedist of the unthanked · **Wario**, Guest — drove the fraud, reversed into it, billed nobody · **Bowser**, Caller — billing the longhouse for one (1) wall

**▶ [Watch the broadcast](Reputation-Matrix2/app/pages/standalone/rakasha-news-network.html)** — the jungle bulletin first, then the late slot: WALUIGI CHAT, composited live from `animation_frames/` and `portraits/player/sprite-sheets/`.

| Segment | Story | Cold open line |
|---|---|---|
| **COLD OPEN** | Rakasha News Network | Iron rusts. Flesh rots. Maps lie. Only the Hunt remains. |
| **THE JUNGLE SEES ALL** | Ten Nights, Oldest First | In the house with no exits, one hundred sixty-eight years cold: a soldier walked in on orders hi… |
| **WALUIGI CHAT** | The Brother Who Drove the Fraud | Good Aethel, late slot. This is Waluigi Chat, and tonight’s guest drove a fraud through a guarde… |
| **THE CALLER** | The Bill for One (1) Wall | We have a caller — the shell-phone lit up like a fire alarm. State your name for the minutes, ca… |
| **SIGN OFF** | Sign Off | The longhouse is returned. Ten nights aired, none of them behaved, and the yellow one is still i… |

*Cadence: **one episode per ~10 filed events, not one per event.** File the session, add the event id to `tools/rnn-scripts/pending-news-articles.json`, and when the list reaches ten write the next script in `tools/rnn-scripts/` and run `python3 tools/build-rnn-broadcast.py`. Full rules: [`docs/RNN_BROADCAST_GUIDE.md`](docs/RNN_BROADCAST_GUIDE.md). The newest episode always sits here.*

<!-- RNN:LAST-WEEK:END -->

---

## Where things live

| Path | What it is |
|---|---|
| `index.html` | The Waluipedia shell: router, article renderer, home feed, operator toolkit |
| `Reputation-Matrix2/data/` | Canonical data — `events.json`, `characters.json`, books, clans, broadcasts |
| `Reputation-Matrix2/app/pages/standalone/` | Self-contained pages (field journal, simulator, RNN broadcast) |
| `Reputation-Matrix2/app/core/` | Shared renderers, including `rakasha-news.js` (The Blood-Echo broadsheet) |
| `Reputation-Matrix2/animation_frames/` | Rakasha News Network anchor sprites and title card |
| `tools/` | Python build scripts and audits (`update-index-home.py`, `build-rnn-broadcast.py`, `check-readability.py`, …) |
| `tools/rnn-scripts/` | Episode scripts + `pending-news-articles.json` (events awaiting a broadcast) |
| `docs/` | Process, craft guides, structure maps, audits |

## Routine jobs

- **File a session** → follow
  [`docs/SESSION_FILING_PROCESS.md`](docs/SESSION_FILING_PROCESS.md) in order.
  Locations, characters and XP come **before** the prose; exhibits, the
  investigation file, the home feed and the RNN pending list come after.
- **File the paper a story mentions** → add it to
  `Reputation-Matrix2/data/props.json`, wire it with `[[prop:id|text]]`, then
  `python3 tools/check-exhibits.py`. Craft standard:
  [`docs/STORY_FORMAT_GUIDE.md` §9B](docs/STORY_FORMAT_GUIDE.md#9b-exhibits--the-documents-the-story-names).
- **Add a session to an arc's investigation** → new `sessions[]` row, two or
  three exhibits with three analysis layers each, any leads the session created,
  in `Reputation-Matrix2/data/investigations.json`. No JS, no CSS.
  [`docs/INVESTIGATIONS.md`](docs/INVESTIGATIONS.md).
- **Show a new session on the home page** → append it to
  `Reputation-Matrix2/data/events.json` (last = newest filing), then set
  `mainPage.json` `latestUpdate` / `featuredArticle` and prepend
  `SITE_UPDATES` in `index.html`. **Do not paste a card into the Recent
  Adventures HTML.** `view_home()` builds that list from `events.json` via
  `homeRecentAdventuresHtml()`. Prove it:
  `python3 tools/check-home-feed.py` and
  `node tools/tests/test-home-feed-render.mjs`.
  `python3 tools/update-index-home.py` is a no-op on the live feed.
- **Cut the news** → only when ~10 events are pending;
  `python3 tools/build-rnn-broadcast.py` (see the cadence rule above).
- **Check what the news owes** → `python3 tools/build-rnn-broadcast.py --unaired`.
- **Check what the map owes the locations** → `node tools/check-location-map-coverage.mjs`
  (which location articles show a tactical-map pin, which are still unplotted; the
  survey queue and the clue that placed every pin live in
  `docs/worklists/LOCATION_MAP_COVERAGE.md`).
- **Re-file the province census** → `node tools/build-province-census.mjs`
  (provinces merged from the POIs + `PROVINCE_POLITICS`, borders, and the realm
  roll-up), then `node tools/check-province-census.mjs` to prove no pin was lost,
  every border closes inside the sheet, and the filed snapshot still matches
  `map-provinces.js`. **Never hand-edit `data/provinceCensus.json`.** The atlas
  and the Cartography Desk compute the same census live from that module, so the
  table and the borders cannot drift apart. Full rules:
  [`docs/PROVINCE_CENSUS_GUIDE.md`](docs/PROVINCE_CENSUS_GUIDE.md).
- **Audit references site-wide** → `python3 tools/check-references.py`
  (dangling ids, missing art; `--strict` to fail on legacy links).
- **Run the routine checker set** → `python3 tools/check-all.py` (local paths,
  references, exhibits, investigations, rolls, battles, background blurbs,
  home feed contract, RNN check, Bros sync/test).
- **Check a draft's readability** → `python3 tools/check-readability.py` with
  `--event <id>` / `--whatif <id>` / `--analysis <id>` / `--file draft.md`
  before filing. Advisory only — it surfaces machine-gun rhythm and aphorism
  density that grade scores can't see; a flag starts an argument, and a flag
  can be closed as intentional voice
  ([`docs/AUDIT_SCRIPTS.md`](docs/AUDIT_SCRIPTS.md#readability-audit)).
- **Mages Guild Codex emoji spam** → `python3 tools/gen-mages-guild-code.py --check-emoji`
  (also filters new pages on every generate).
- **Refresh update stamps** → `node generate-updates.js`.
- **Check system freshness** → `python3 tools/check-freshness.py`
  (stalest-first lag report for every living system vs `currentDate.json`;
  registry: `docs/system-freshness.json`; the standing order that makes the
  stalest system the next filing lives in
  [`Reputation-Matrix2/gemini.md`](Reputation-Matrix2/gemini.md)).

## Never do these

```
· Never write `mike` into narrative prose — it is the GM's name (rule zero)
· Never hand-edit a generated file — edit the generator and run it
  (rnn-broadcasts.js · the RNN:LAST-WEEK README blocks)
· Never paste a session card into the home Recent Adventures HTML —
  the feed is rendered from events.json. Update mainPage.latestUpdate.
· Never date a filing by the clock before placing the story in time —
  tense first, then the chain (docs/DATE_FILING_GUIDE.md)
· Never cut story-critical content to hit a word count
· Never reformat a whole data file to add one entry — match its indentation
· Never invent a CSS class; only .prose blockquote, .prose h2, .wiki-lead, .wnote
· Never put raw <div> in prose — mdToHtml() escapes it and it renders as text
· Never describe a known character in an image from scratch — pull the
  portrait from portraits/ and pass it as a reference
  (docs/IMAGE_GENERATION_GUIDE.md → Characters)
· Never finish a run without a run report
```

## The calendar — date every filing in-world

The world runs on the **Regal Empire Standard Calendar**, and it is data, not
vibes: `Reputation-Matrix2/data/calendarMonths.json` (the months),
`calendarWeekdays.json`, `calendarSeasons.json`, `calendarHolidays.json`,
`calendarMeta.json` (the rules) — and **`currentDate.json` is the world
clock**. Check it before dating anything.

- **12 months, 30 days each** — except **Deepwinter, which has 35** (365
  total). There is no "Harvestide 31." After day 30 comes the 1st of the next
  month.
- **Month order:** Firstlight · Chillwind · Veridia · Bloom · Floria ·
  Efferd · Highsun · **Harvestide** · **Aethel** · Darkmoon · Frostfall ·
  Deepwinter. Aethel comes *after* Harvestide — check the order, don't assume
  it from the name.
- **7 weekdays**; Venerias and Saturias are rest days.
- **BF counts UP.** 722 BF is the oldest dated record, 1040 BF is the
  present. A larger year is closer to now — it is a chronicle page number,
  not a countdown.

Rules:

```
· Tense before dates. A filing can sit in the world's past, its present,
  or after its present. Decide from the story which one it is — then date
  it there. A recovered record, a backfilled arc, or a history page takes
  the date its events happened, however far that sits from the clock; a
  correct date in 955 BF beats a wrong date near 1040 BF. Only a session
  played at the table now belongs near currentDate.json, and even then
  the clock is a check, not the answer.
· To date a filing in the present: chain back through the prior filings
  to the last solid date and work forward. Never copy currentDate.json
  blindly — confirm the chain first, then check the clock against it.
· Every date in every filing is a calendar date. Real-world / table-side
  dates never appear in-world (a provenance note in prose is the exception).
· "Harvestside" and "Harvestnoon" appear in ~20 legacy filings; the
  canonical months are Harvestide and Aethel. Do not introduce new
  non-canonical month names; normalize them only when their record is
  next touched.
· Every NEW filing also carries a time code beside its prose date:
    "date":     "30 Harvestide, 1040 BF — continuing the same storm-night"
    "timeCode": "TC:1040-08-30T23:50/SHD"
  year-month-day, optional Thh:mm, and the clock (MAT/SHD/FEY/SUBJ).
  Leave the hour off if the record never established one. Do not invent it.
  Checked by tools/check-timecodes.py, which runs inside check-all.py.
· Full procedure: docs/DATE_FILING_GUIDE.md.
```

### Planar timekeeping — there are three clocks, and none of them agree

`currentDate.json` is the **Material Plane's** clock. It is not the world's
only clock, and treating it as universal has misdated filings before.
(Snapshot below goes stale; the file is the truth — read it, don't quote this
line.)

| Clock | Where it applies | State |
|---|---|---|
| **Material (imperial)** | the default; `currentDate.json` | Aethel 5, 1040 BF |
| **Shadowfell** | Shadowfell-side filings (Tymnas's cottage, the Estate) | Imperial reckoning, but *drifting* — a month-plus has passed there since the planar fracture; Shadowfell dates carry the drift forward |
| **Feyward** | everything inside the Feyward | **Its own year entirely: 922 BF by its own count** — over a century behind the Material, and it is not catching up. "Feyward-relative" filings borrow imperial month names for readability, but the year is the Feyward's own |

Rules for planar dates:

```
· Feyward filings: "<month> <day>, 922 BF (Feyward clock)" — the Material's
  date goes in a parenthetical only if the prose needs the comparison.
· Never synchronize the clocks in data. The disagreement is canon; a
  filing that makes 922 and 1040 agree has made an error, not a repair.
· Cross-plane causality ("this happened while that was happening") is
  prose, not dates — hedge it in the text, not in the date field.
```
