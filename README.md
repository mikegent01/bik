# Waluipedia — The Vigilance Terminal


**START HERE.** This is the readme for the readmes. If you are an AI agent, a
new contributor, or returning after a break, read this page to the end before
touching anything. It says what the project is, how the work is done, and which
document owns each topic.

---

## Once you've read this — open a pull request

**Finished reading? Do not work on `gh-pages` directly.** Create a branch,
do the work, then open a PR into `gh-pages` with the purpose stated up front.
The PR *is* the run report's cover letter: a future reader (human or agent)
should understand what changed and why without opening a single file.

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
   "cleaner" structure will be asked to justify every deletion
   (see the philosophy below — especially rules 3 and 4).
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

An in-world encyclopedia, campaign chronicle and faction-simulation terminal for the
Waluipedia tabletop campaign. `index.html` is the encyclopedia shell; `Reputation-Matrix2/`
is the systems layer (factions, reputation, maps, laws, newspapers, standalone pages);
`tools/` holds the Python generators that keep the two in sync.

It is a **static site** — no build step for the pages themselves, no framework,
no server. Open `index.html` and it runs. The Python tools generate data and
splice HTML; they are not a pipeline you must run to view the site.

## Intake first — decide what the data becomes

Do not start by writing an event just because the user pasted campaign data.
First decide which archive object the data actually calls for. The dedicated
guide is:

**→ [`docs/INTAKE_DECISION_GUIDE.md`](docs/INTAKE_DECISION_GUIDE.md)** — when
to create an event, battle, exhibit, investigation update, article analysis,
shop item, XP award, character/location/faction record, annotation, RNN episode,
or nothing yet.

Then, if the answer is a session filing, follow
[`docs/SESSION_FILING_PROCESS.md`](docs/SESSION_FILING_PROCESS.md) in order.
The short rule remains:

```text
classify the input → locations → characters → XP → event prose
→ exhibits → investigation → index/home → artifacts/RNN → run report
```

### README maintenance standard

Keep README files as routing documents, not crowded changelogs. A README should
answer three things quickly: **what this area owns, where the source of truth
lives, and which checks prove it works.** Put long decision trees in `docs/`,
then link them from the README.

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

Six things that explain nearly every decision in this repository:

1. **It is written from inside the world.** Articles are filed by in-world
   authors — chiefly Waluigi, who is opinionated, petty, and frequently right.
   Nothing is written in the neutral voice of a rulebook.
2. **A story with a commentator, not a report with scenes attached.** The
   difference between a filing that works and one that does not is almost
   always physical detail: quoted speech, named objects, sounds. Commentary is
   the second layer, never the first.
3. **Remaster, don’t rewrite.** What exists, stays. Improve it, extend it,
   navigate it better. Wholesale replacement destroys context that took
   sessions to accumulate.
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
| **[`docs/DATE_FILING_GUIDE.md`](docs/DATE_FILING_GUIDE.md)** | **How to date new and backfilled articles.** Walk backward to the prior solid date, then forward through the chain; repair vague earlier dates when touched | Before setting any event date |
| **[`docs/SESSION_FILING_PROCESS.md`](docs/SESSION_FILING_PROCESS.md)** | **The ordered process.** Locations → characters → XP → *then* the event → exhibits → the investigation file → index → artifacts | After intake says “this is a session/event filing” |
| **[`docs/INVESTIGATIONS.md`](docs/INVESTIGATIONS.md)** | **The investigations system** that replaced the quest board. One accreting case file per arc; exhibits, layered analysis behind d6+1 rolls, XP, leads | Adding a session's paper to an arc |
| [`docs/ARTICLE_ANALYSES.md`](docs/ARTICLE_ANALYSES.md) | Waluigi's **opinionated 20/80 companion analysis** for a filed article; canonical schema, voice, and canon boundaries | Writing or editing a dedicated analysis |
| [`docs/article-analyses/README.md`](docs/article-analyses/README.md) | The implemented analysis section: discovery, renderer lifecycle, research persistence, CSS scopes, validation, troubleshooting | Maintaining or extending the analysis feature |
| [`docs/STORY_FORMAT_GUIDE.md`](docs/STORY_FORMAT_GUIDE.md) | Craft standard for **canon session events** — prose, asides, apparatus, exhibits, battle pages | Writing an event |
| [`docs/WHATIF_FORMAT_GUIDE.md`](docs/WHATIF_FORMAT_GUIDE.md) | Craft standard for **non-canon What-Ifs** — decision engine, ledger, findings, verdict | Writing a What-If |
| [`docs/RNN_BROADCAST_GUIDE.md`](docs/RNN_BROADCAST_GUIDE.md) | The news broadcast. **One episode per ~10 events**, the pending list, the voice | Cutting an episode |
| [`docs/BATTLES_GUIDE.md`](docs/BATTLES_GUIDE.md) | **Battle records** — `data/battles.json` + `data/majorBattles.json`: what earns a record, schema, ledger-truth rules, the home feed item | Filing a battle |
| [`docs/BATTLE_STORY_FORMAT_GUIDE.md`](docs/BATTLE_STORY_FORMAT_GUIDE.md) | **Battle craft** — the six-part war-report shape, mechanics→consequences translation, pacing tells | Writing a battle article |
| [`docs/ARTICLE_QA.md`](docs/ARTICLE_QA.md) | **Content QA** — the six checks over every article before it ships; the Hanging-Tree exemplar | Reviewing any article |
| [`docs/CROSS_SYSTEM_UPDATES.md`](docs/CROSS_SYSTEM_UPDATES.md) | **Cross-system triggers** — Pond Patrol, dynasties, POIs, bros attacks, currencies, WAHwire, songs, books: what every filing must also touch | After any filing |
| [`docs/IMAGE_GENERATION_GUIDE.md`](docs/IMAGE_GENERATION_GUIDE.md) | **Prompt sheet before generating.** Art direction from the prose, when text belongs in an image, editing over rerolling. New substantial articles ship with images | Illustrating any filing |
| [`docs/CSS_STYLE_GUIDE.md`](docs/CSS_STYLE_GUIDE.md) | **CSS without breaking the archive.** Scoped selectors, fluid layouts, long Waluigi assessments, reputation panels, theme checks | Changing site styles |
| [`docs/VERIFICATION_AND_ORGANIZATION.md`](docs/VERIFICATION_AND_ORGANIZATION.md) | Checks that catch breakage; rules that prevent bloat; where files go | Before calling a run done |
| [`docs/RUN_REPORT_FORMAT.md`](docs/RUN_REPORT_FORMAT.md) | How to report at the end of a run — every file, every event, every XP award | End of every run |
| [`docs/AUDIT_SCRIPTS.md`](docs/AUDIT_SCRIPTS.md) | The craft-audit scripts — event, what-if (advisory) and exhibits (pass/fail) | Checking a draft’s numbers |
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

> **EP 003 — The Lease — and the First Night of Waluigi Chat**  
> Hunt Day AETHEL 4, 1040 BF · covering the night of Harvestide 30, 1040 BF — released four days into Aethel, plus the signing of the lease · runtime 6:21  
> **Whisper-in-Wind**, Death Speaker, Spirit-Walker Clan · **Waluigi**, Host, Waluigi Chat · encyclopaedist of the unthanked · **Remi Akamatsu**, Guest — wrong-way scout, mirror-recovery planner · **Wario**, Caller — acquired, not for sale

**▶ [Watch the broadcast](Reputation-Matrix2/app/pages/standalone/rakasha-news-network.html)** — the jungle bulletin first, then the late slot: WALUIGI CHAT, composited live from `animation_frames/` and `portraits/player/sprite-sheets/`.

| Segment | Story | Cold open line |
|---|---|---|
| **COLD OPEN** | Rakasha News Network | Iron rusts. Flesh rots. Maps lie. Only the Hunt remains. |
| **THE JUNGLE SEES ALL** | The Mirror, the Sentence, and the Storm on a Leash | A file from the last night of Harvestide reached this desk four days into Aethel. The desk reads… |
| **THE HANDOVER** | The Lease | Tonight the network leases its late slot. The tenant paid in paper — four hundred entries of com… |
| **WALUIGI CHAT** | The Scout Who Cannot Name Her Home | Good Aethel, late slot. This is Waluigi Chat, broadcast from a longhouse I am contractually perm… |
| **THE CALLER** | A Voice Through the Window | We have a caller. On the shell-phone. Nobody told me the shell-phone worked. Go ahead, caller. S… |
| **SIGN OFF** | Sign Off | The longhouse is returned. The lease stands. The jungle saw all of that, and the jungle has no c… |

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
| `tools/` | Python build scripts (`update-index-home.py`, `build-rnn-broadcast.py`, …) |
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
- **Refresh the home feed** → `python3 tools/update-index-home.py`.
- **Cut the news** → only when ~10 events are pending;
  `python3 tools/build-rnn-broadcast.py` (see the cadence rule above).
- **Check what the news owes** → `python3 tools/build-rnn-broadcast.py --unaired`.
- **Audit references site-wide** → `python3 tools/check-references.py` (dangling ids, missing art; `--strict` to fail on legacy links).
- **Run the routine checker set** → `python3 tools/check-all.py` (local paths, references, exhibits, investigations, rolls, battles, background blurbs, RNN check, Bros sync/test).
- **Refresh update stamps** → `node generate-updates.js`.

## Never do these

```
· Never write `mike` into narrative prose — it is the GM’s name (rule zero)
· Never hand-edit a generated file — edit the generator and run it
  (rnn-broadcasts.js · the RNN:LAST-WEEK README blocks · the home timeline feed)
· Never cut story-critical content to hit a word count
· Never reformat a whole data file to add one entry — match its indentation
· Never invent a CSS class; only .prose blockquote, .prose h2, .wiki-lead, .wnote
· Never put raw <div> in prose — mdToHtml() escapes it and it renders as text
· Never finish a run without a run report
```

## The calendar — date every filing in-world

The world runs on the **Regal Empire Standard Calendar**, and it is data, not
vibes: `Reputation-Matrix2/data/calendarMonths.json` (the months),
`calendarWeekdays.json`, `calendarSeasons.json`, `calendarHolidays.json`,
`calendarMeta.json` (the rules) — and **`currentDate.json` is the world
clock**. Check it before dating anything.

- **12 months, 30 days each** — except **Deepwinter, which has 35** (365 total).
  There is no "Harvestide 31." After day 30 comes the 1st of the next month.
- **Month order:** Firstlight · Chillwind · Veridia · Bloom · Floria ·
  Efferd · Highsun · **Harvestide** · **Aethel** · Darkmoon · Frostfall ·
  Deepwinter. Aethel comes *after* Harvestide — check the order, don't
  assume it from the name.
- **7 weekdays**; Venerias and Saturias are rest days.
- **BF counts UP.** 722 BF is the oldest dated record, 1040 BF is the
  present. A larger year is closer to now — it is a chronicle page number,
  not a countdown.

Rules:

```
· Every date in every filing is a calendar date. Real-world / table-side
  dates never appear in-world (a provenance note in prose is the exception).
· To date a new session: chain back through the prior filings to the last
  solid date and work forward. Never copy currentDate.json blindly —
  confirm the chain first, then check the clock against it.
· "Harvestside" and "Harvestnoon" appear in ~20 legacy filings; the
  canonical months are Harvestide and Aethel. Do not introduce new
  non-canonical month names; normalize them only when their record is
  next touched.
```

### Planar timekeeping — there are three clocks, and none of them agree

`currentDate.json` is the **Material Plane's** clock. It is not the world's
only clock, and treating it as universal has misdated filings before.

| Clock | Where it applies | State |
|---|---|---|
| **Material (imperial)** | the default; `currentDate.json` | Aethel 4, 1040 BF |
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
