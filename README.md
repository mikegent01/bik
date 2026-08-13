# Waluipedia — The Vigilance Terminal


**START HERE.** This is the readme for the readmes. If you are an AI agent, a
new contributor, or returning after a break, read this page to the end before
touching anything. It says what the project is, how the work is done, and which
document owns each topic.

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
6. **Generated files are never hand-edited.** Edit the generator, then run it.

---

## Every readme, and what it owns

**Start with the filing process. It is the spine; everything else hangs off it.**

### How the work is done

| Document | Owns | Read when |
|---|---|---|
| **[`docs/SESSION_FILING_PROCESS.md`](docs/SESSION_FILING_PROCESS.md)** | **The ordered process.** Locations → characters → XP → *then* the event → index → artifacts | **Always. Before any filing** |
| [`docs/STORY_FORMAT_GUIDE.md`](docs/STORY_FORMAT_GUIDE.md) | Craft standard for **canon session events** — prose, asides, apparatus, battle pages | Writing an event |
| [`docs/WHATIF_FORMAT_GUIDE.md`](docs/WHATIF_FORMAT_GUIDE.md) | Craft standard for **non-canon What-Ifs** — decision engine, ledger, findings, verdict | Writing a What-If |
| [`docs/RNN_BROADCAST_GUIDE.md`](docs/RNN_BROADCAST_GUIDE.md) | The news broadcast. **One episode per ~10 events**, the pending list, the voice | Cutting an episode |
| [`docs/VERIFICATION_AND_ORGANIZATION.md`](docs/VERIFICATION_AND_ORGANIZATION.md) | Checks that catch breakage; rules that prevent bloat; where files go | Before calling a run done |
| [`docs/RUN_REPORT_FORMAT.md`](docs/RUN_REPORT_FORMAT.md) | How to report at the end of a run — every file, every event, every XP award | End of every run |
| [`docs/AUDIT_SCRIPTS.md`](docs/AUDIT_SCRIPTS.md) | The two craft-audit scripts (advisory) | Checking a draft’s numbers |
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
| `timeline/README.md` | Boilerplate for a bundled third-party React app. **Not ours — leave it alone** |

---

<!-- RNN:LAST-WEEK:START -->
## 📺 Last Week on the Rakasha News Network

> **EP 002 — The File From Eight Years Ago and the God Who Runs the Place**  
> Hunt Day AETHEL 18, 1040 BF · covering Aethel 1 – 17, 1040 BF — plus one recovered file dated 17 Aethel, 1032 BF · runtime 7:37  
> Anchor: **Whisper-in-Wind**, Death Speaker, Spirit-Walker Clan · Field: **Acolyte Dan**, Runner of the Cold Roads

**▶ [Watch the broadcast](Reputation-Matrix2/app/pages/standalone/rakasha-news-network.html)** — the Rakasha desk reads back everything the party survived last week, composited live from `Reputation-Matrix2/animation_frames/`.

| Segment | Story | Cold open line |
|---|---|---|
| **COLD OPEN** | Rakasha News Network | Iron rusts. Flesh rots. Maps lie. Only the Hunt remains. |
| **LEAD STORY** | The File That Sat in a Crate for Eight Years | Our first story is not from this week. It is from eight years ago, and it was released three day… |
| **THE INTERVIEW** | The Host With the Crown | To this week, then. Six nights ago the same two brothers walked into an office because a strange… |
| **THE MANOR** | Ghosts, a Warrant, and an Alliance Nobody Trusts | Aethel opened at the ruined manor. The green plumber found a broken travelling circle and took t… |
| **THE HEALER'S DEBT** | The Medicine Came Back Out | A Spark-Weaver calling himself Parson Pellinost healed the one called Archie without being asked… |
| **THE VATS** | What Is Under the Star-Lit Library | Fleeing the Iron-Hides, the Oracle moved Archie and the comatose Bones to the place he calls the… |
| **THE ANCHOR** | He Stood in the Candles and Said No to a God | Archie Miser then demanded to be sent to Shadeward for his friends. He was told a month had alre… |
| **FIELD REPORT** | The Slope With the Seams, Eight Years Later | Whisper-in-Wind, I read that old file and I went and stood on it! I am on the wrong mountain and… |
| **WIND WHISPERS** | Whispers on the Breeze | Heard in a waiting room: the green plumber went under the knife near death, and a surgeon he cal… |
| **SIGN OFF** | Sign Off | That is the week, and eight years ago as well. Check your map before you climb. Check who drew i… |

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
  Locations, characters and XP come **before** the prose; the home feed and the
  RNN pending list come after.
- **Refresh the home feed** → `python3 tools/update-index-home.py`.
- **Cut the news** → only when ~10 events are pending;
  `python3 tools/build-rnn-broadcast.py` (see the cadence rule above).
- **Check what the news owes** → `python3 tools/build-rnn-broadcast.py --unaired`.
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
