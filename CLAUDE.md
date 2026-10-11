# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Waluipedia ("The Vigilance Terminal"): an in-world encyclopedia, campaign
chronicle and faction-simulation site for a tabletop campaign. It is a
**static site served from the `gh-pages` branch** — no framework and no build
step for the pages. Most work here is *filing* (writing campaign content into
JSON data) rather than programming; the Python/Node tools generate data,
splice HTML and verify the result.

`README.md` is the index of every guide and `Reputation-Matrix2/gemini.md`
holds the standing orders. Both are long: open the heading you need rather
than reading them whole.

**Keep token use low — there are limits.** Read one shard or one record, not
a store; Grep before Read; don't paste guides into the thread. Skills:
`.claude/skills/session-filing` (filing a session) and
`.claude/skills/json-stores` (shard layout and rebuild).

## Rule zero

`mike` in a session transcript is the **GM**, not a character. Never write the
name into narrative prose. The same goes for any player name or Discord
handle: invent an in-world name or refer to the person by role. The `mike`
record in the characters store is a historical artifact — leave it, don't
copy it.

## Commands

```bash
python3 start.py                 # serve the site + control panel at http://localhost:8765/panel
python3 start.py --no-gui        # plain server, no panel window (add --no-sheets / --no-tts to skip services)
python3 start.py --route "#/article/<event-id>"

python3 tools/check-<name>.py    # one check, run from the repo root — the normal way to verify
python3 tools/check-all.py       # ~100 checks, slow and noisy: do NOT run unless the user asks
python3 tools/tests/test-<name>.py
node tools/tests/test-<name>.mjs

python3 tools/build-json-stores.py --build --check   # after editing any shard
python3 tools/filing-context.py packet <event-id>    # one event plus its related records
python3 tools/filing-context.py get|search|index|schema|stub <store> [arg]
```

- Serve through `start.py`, never by opening `index.html` directly: `fetch()`
  is blocked on `file://`, so every data-driven view silently comes up empty.
- Verify with the few checks that cover what you touched, not everything.
  `check-all.py` is only a wrapper: its list is the menu of standalone
  commands to pick from. After a filing that usually means
  `build-json-stores.py --check`, `check-references.py`, `check-exhibits.py`,
  `check-timecodes.py --strict`, `check-home-feed.py`, plus the checker for
  any system you changed. Pipe long output through a tail. Many generators
  take `--check` as a read-only "is the committed output current" mode.
- Some Node tests need jsdom, which is not committed:
  `npm install jsdom@26.1.0 --no-save`. The `*-live-smoke.mjs` and
  `test-search-live/relevance` tests need the server running on 8765.
- The token-plate and actor-image checks only run when Pillow, numpy and scipy
  are installed; `check-all.py` skips them otherwise.
- `Reputation-Matrix2/package.json` has a Vite config (`npm run dev|build`),
  but the site does not depend on it; `check-all.py --with-build` runs it.

## Architecture

**Shell and systems layer.** Root `index.html` (~2 MB, single file) is the
encyclopedia: hash router, article renderer (`mdToHtml()`), home feed,
operator toolkit. It fetches JSON from `Reputation-Matrix2/data/` at runtime.
`Reputation-Matrix2/` is the systems layer: `app/` (`core/`, `systems/`,
`pages/standalone/` for self-contained pages, `styles/`), `data/`, `actors/`
(Foundry VTT sheets), `Foundry/` (modules), and its own `tools/` (shop and
ability generators, `genkit` for LM Studio-driven drafts). JS modules there
are kept under roughly 500–600 lines, with data split into thematic files
aggregated by an index module.

**Sharded stores → generated bundles.** The seven filing stores — `events`,
`characters`, `locations`, `battles`, `investigations`, `commentaries`,
`articleAnalyses` — are edited as shards and compiled into the bundles the
site fetches:

```
Reputation-Matrix2/data/stores/events/<world>/<year>.json      # also battles/
Reputation-Matrix2/data/stores/characters/  locations/         # one file per world
Reputation-Matrix2/data/stores/investigations/<id>.json        # also commentaries/, articleAnalyses/
Reputation-Matrix2/data/stores/manifest.json                   # generated: id → shard, original order
        ↓  tools/build-json-stores.py --build
Reputation-Matrix2/data/<store>.json                           # generated bundle — never hand-edit
```

Worlds are `material` (the real world), `feyward`, `shadeward`, `mirror`,
`unsorted`. The year is the filename; a month appears only when a year is too
fat (`1040-harvestide.json`). Other files in `data/` (`props.json`,
`mainPage.json`, `inventory.json`, …) are edited directly.

**Never Read whole:** the bundles above, `index.html`, `bowser.json`,
`midlands-all-actors.json`, the shop catalogs, `provinceCensus.json`,
`crafting.json` (see `.claudeignore`). Use `filing-context.py`, Grep, or a
single shard.

**Generators own their outputs.** Besides the bundles: `rnn-broadcasts.js`
and the `RNN:LAST-WEEK` block in `README.md` (`tools/build-rnn-broadcast.py`),
`chatroom.html` and `workflow/roleplay.html` (`tools/build-chatroom.py` from
`assets/chatroom/`), `data/provinceCensus.json`
(`node tools/build-province-census.mjs`), `data/sheets.json` and the Foundry
import packets (`tools/sheets-suite.py`), and the per-session actor packets
(`tools/build-*-actors.py`). Edit the generator or its source, run it, and
commit both.

**Home page is derived.** Recent Adventures renders from the events store in
order (last record = newest filing); don't paste cards into the HTML. A new
session also needs `mainPage.json` `latestUpdate` / `featuredArticle` /
`campaignCovers` (one cover per campaign — replace, don't stack) and a
prepended `SITE_UPDATES` entry in `index.html`. Verify with
`tools/check-home-feed.py` and `tools/check-covers.py`.

**Foundry loop.** `tools/sheets-suite.py --watch` (started by `start.py`)
splits the GM's Foundry export into `Reputation-Matrix2/actors/worlds/<world>/`,
keeps player characters on character sheets with XP pinned to the ledger,
applies `actors/changes/`, and rebuilds the import packets. The player roster
is one list: `actors/folders.json` → `players.roster`. Details:
`docs/SHEETS_SYSTEM.md`.

**Separate sub-projects:** `timeline/` (bundled React app, not Waluipedia
canon), `wahsim/` (simulator with its own docs), `workflow/` (chat/save
server run by `start.py --workflow`).

## Filing content

1. Decide what the supplied data should become first:
   `docs/INTAKE_DECISION_GUIDE.md`.
2. For a session, follow `docs/SESSION_FILING_PROCESS.md` in order:
   locations → characters → XP → **then** the event → exhibits →
   investigation → index/home → artifacts.
3. Date it in-world before writing (`docs/DATE_FILING_GUIDE.md`): tense first,
   then walk the chain of prior dates. A missing timestamp is not permission
   to use the current clock. Every event carries a time filing code
   (`TC:1040-08-30T23:50/SHD`), enforced by `tools/check-timecodes.py`.
4. After filing, touch the dependent systems (`docs/CROSS_SYSTEM_UPDATES.md`)
   and add the event id to `tools/rnn-scripts/pending-news-articles.json`.
   A broadcast is cut per ~10 pending events, not per event.

Prose constraints the renderer and checkers enforce:

- No raw `<div>` in prose — `mdToHtml()` escapes it and it renders as text.
- Don't invent CSS classes; prose may use only `.prose blockquote`,
  `.prose h2`, `.wiki-lead`, `.wnote`.
- Exhibits are `data/props.json` entries wired with `[[prop:id|text]]`
  (`tools/check-exhibits.py`).
- Never reformat a data file to add one entry; match its indentation exactly.
- Don't cut story-critical content to hit a word count.

Images: reuse the archive or local ComfyUI / `tools/npc-forge.py` first, and
write a prompt sheet before generating (`docs/IMAGE_GENERATION_GUIDE.md`). A
known character is always passed as a reference from `portraits/`, never
described from scratch; never pass a scene or location image as a reference.

## Shipping

- Don't work on `gh-pages` directly. Branch off it and open a PR back into
  `gh-pages`, one purpose per PR, titled `feat:` / `fix:` / `docs:` /
  `remaster:`.
- PR description has four parts: **Purpose**, **What changed** (hand-written
  vs generated), **Verification** (commands run and results), **Run report**
  (`docs/RUN_REPORT_FORMAT.md`). Every run ends with a run report.
- New assets must be referenced by something in the same PR
  (`docs/ASSET_MAP.md`).
- Remaster, don't rewrite: deleting working context to impose a cleaner
  structure needs a justification per deletion.
