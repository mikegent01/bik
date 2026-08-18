# Waluipedia Hub

One place to open and run every tool, data file, and generator in this repo —
plus two new generators that turn the wiki's own data into Foundry VTT content.

```
python tools/hub/server.py
```

It opens `http://127.0.0.1:8777` in your browser. Windows users can double-click
**`Waluipedia Hub.bat`**; macOS/Linux can run **`waluipedia-hub.sh`**. It is also
the first button in `tools/shop_studio.py`.

Requirements: Python 3.10+ and Node.js (Node reads the ES-module shop catalog).
No pip installs, no build step. LM Studio is optional.

---

## What this README owns

This is the operating manual for the **local tools hub**, not for the public
static site. It explains how the browser dashboard discovers scripts and data,
how the command-line wrapper mirrors the GUI, where generated Foundry artifacts
land, which files are allowed to be absolute paths, and how to diagnose the
silent-empty failure mode that caused the latest hub repairs.

If you change any of these, update this README in the same PR:

- `hubcore/paths.py` constants or repo-root detection;
- the AST registry that discovers tools, functions, data, and pages;
- item-pile or character-actor generation;
- LM Studio request/fallback behavior;
- `.hub-out/` layout, caching, or promotion workflow;
- server API endpoints under `/api/`;
- CLI commands or flags in `hub_cli.py`.

The hub is intentionally a **local operator console**. It should make repository
work safer and faster; it should not become a public API, a cloud service, or a
second source of truth for campaign data.

---

## Quick start — GUI, CLI, and doctor

From `Reputation-Matrix2/`:

```bash
python tools/hub/server.py
python tools/hub/hub_cli.py doctor
```

From the repository root, prefix the path:

```bash
python Reputation-Matrix2/tools/hub/server.py
python Reputation-Matrix2/tools/hub/hub_cli.py doctor
```

A healthy doctor run should show nonzero counts for the live campaign data,
especially receipts and events. **Zero is suspicious.** The hub's loaders degrade
gracefully when a file is missing, so a bad path can look like an empty data set
instead of a crash. Check `hubcore/paths.py` first when the dashboard says there
are no purchases, no events, no characters, or no shop items.

For Arena/live-preview work, the server binds to `127.0.0.1` by design and is
not meant to be exposed. Do not loosen that binding unless you are deliberately
turning the hub into a networked tool and have added authentication, host
checks, and a new threat model.

---

## Mental model

The hub has four layers:

1. **Paths** (`hubcore/paths.py`) decide what the repository root is and where
   canonical data/output/cache files live.
2. **Readers** (`hubcore/dataio.py`, `registry.py`) load JSON, ask Node to
   evaluate ES-module shop files, and enumerate scripts without importing them.
3. **Builders** (`foundry.py`, `piles.py`, `creator.py`) transform lore,
   receipts, wallets, events, factions, and shop items into Foundry-shaped JSON.
4. **Surfaces** (`server.py`, `hub_cli.py`, `web/`) present the same operations
   through a browser UI or command-line interface.

When a bug appears in generated output, find the layer before patching the
symptom. A bad path belongs in `paths.py`; a missing shop item belongs in the
catalog or Node export; a malformed Foundry item belongs in `foundry.py`; a UI
button that calls the wrong option belongs in `web/hub.js` or `server.py`.

---

## What's in it

### Dashboard
Live counts of tools, functions, data files, and site pages, an LM Studio
online/offline badge, and a shop-catalog health check that flags receipts
referencing items that no longer exist.

### Tools
Every `.py` under `tools/` — 23 scripts, 76 functions — with its docstring,
its `argparse` flags, its function signatures, and its source. Run any of them
from the browser with extra arguments and see stdout/stderr inline.

The catalog is built with `ast`, so **listing a tool never imports or executes
it**. Only scripts already in the registry can be launched.

### Item Piles — shop purchases → Foundry
Reads `shop-purchases.json`, resolves every approved receipt against the live
shop catalog (7,700+ items), groups them by `playerKey`, and writes one
importable **item-pile actor per character**.

* Buying the same item twice becomes `quantity: 2`, not two entries.
* Shop categories map to real Foundry item types — a "Sword of X" imports as a
  weapon, a potion as a consumable, a bag as a container.
* Effect rules, usage, vendor, shipping, and level gates are rendered into the
  item description **and** preserved under `flags.waluipedia` so nothing is lost.
* Order ids ride along on every item, so a pile is auditable back to its receipt.
* Items missing from the catalog (older faction upgrades) are **rebuilt from the
  receipt** rather than dropped — the player still gets what they paid for.
* The actor carries the `item-piles` module flags copied from your reference
  export, so it behaves as a lootable pile on import.

### Character Creator — lore → Foundry actor
Builds a full dnd5e character actor out of `characters.json`, `events.json`,
and `factions.json`.

* Picking an existing character auto-selects the events their `keyEvents`
  already reference.
* Class is inferred from the lore text; the ability spread uses the 5e standard
  array with the class's primary/secondary first. HP, AC, saves, and skill
  proficiencies follow from there.
* Each linked event becomes a "Witness: …" background feat carrying that
  event's summary, so the lore is on the sheet.
* Starting gear is drawn from the **real shop catalog**, round-robin across the
  class kit so a rogue gets a dagger *and* tools *and* a cloak, filtered to
  affordable items.
* Everything is deterministic — the same inputs always produce the same
  character.
* With LM Studio running, tick **Use LM Studio** to have it write the biography,
  ideal/bond/flaw, and alignment. The mechanical skeleton is never replaced, and
  if the model is unreachable the built-in writing is used and the UI says so.

> **Schema & authoring guide:** for the `characters.json` record schema, the
> Foundry actor/item-document fields, and the recipes to make a new PC, NPC, or
> loot pile, read
> [`tools/item sheet examples/README.md`](../item%20sheet%20examples/README.md).

### Data Browser
All 402 JSON/JS data files with shape summaries and previews.

### Output
Everything written, newest first. Files land in `tools/hub/.hub-out/`
(git-ignored) under `item-piles/` and `actors/`.

---

## Web API surface

The GUI is a static page talking to a small stdlib server. Endpoints are kept
plain so they can be inspected from a browser console during a run.

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/overview` | GET | Dashboard counts, registry summaries, health snippets |
| `/api/llm` | GET | LM Studio availability and loaded-model check |
| `/api/script?path=...` | GET | Source/metadata for a registered script |
| `/api/file?path=...` | GET | Preview for a registered data/output file |
| `/api/purchases` | GET | Resolved shop receipts and pile preview data |
| `/api/lore` | GET | Character lore choices and linked-event context |
| `/api/outputs` | GET | Newest files under `.hub-out/` |
| `/api/runs` | GET | Recent tool runs launched through the hub |
| `/api/piles/build` | POST | Build item-pile actors |
| `/api/character/preview` | POST | Preview a character actor plan |
| `/api/character/build` | POST | Write a character actor JSON |
| `/api/run` | POST | Execute a registry-approved script with extra args |
| `/api/refresh` | POST | Clear/rebuild cached registry and catalog state |

Only paths already known to the registry should be opened or executed. Do not
add an endpoint that accepts an arbitrary filesystem path or shell command. The
whole point of the registry layer is that browsing a tool is inert, and running
a tool is constrained to files this repository already recognizes.

---

## Command line

Every GUI feature also works headlessly:

```bash
python tools/hub/hub_cli.py doctor                 # environment + data health
python tools/hub/hub_cli.py list --functions       # all tools and functions
python tools/hub/hub_cli.py list --data            # all data files
python tools/hub/hub_cli.py piles --preview        # who bought what
python tools/hub/hub_cli.py piles                  # write the item piles
python tools/hub/hub_cli.py character --from tymnas --level 3
python tools/hub/hub_cli.py character --from waluigi --model --save
```

---

## Importing into Foundry

In Foundry: **Actors → Create Actor → Import Data**, pick a file from
`tools/hub/.hub-out/`. Item piles need the *Item Piles* module enabled; their
flags are already set.

---

## Layout

```
tools/hub/
  server.py            local web server + JSON API
  hub_cli.py           same features from the terminal
  web/                 index.html, hub.css, hub.js (no dependencies)
  hubcore/
    paths.py           filesystem locations
    dataio.py          cached JSON + Node ES-module catalog loader
    registry.py        ast-based tool/data/page discovery
    foundry.py         dnd5e actor + item document builders
    piles.py           purchases  -> item-pile actors
    creator.py         lore       -> character actors
    llm.py             optional LM Studio client
  .hub-out/            generated output (git-ignored; regenerates on demand)
```

## Verification checklist for hub PRs

Run the smallest set that exercises the layer you touched, then paste the
results into the PR:

```bash
python tools/hub/hub_cli.py doctor
python tools/hub/hub_cli.py list --functions
python tools/hub/hub_cli.py list --data
python tools/hub/hub_cli.py piles --preview
python tools/hub/hub_cli.py character --from waluigi --level 3
```

Also test the GUI path when changing `server.py` or `web/`:

1. Start `python tools/hub/server.py`.
2. Press **Refresh data**.
3. Open a data file preview.
4. Run a harmless listed script with no extra args or `--help`.
5. Preview item piles.
6. Preview a character, then build one to `.hub-out/actors/`.
7. Confirm `.hub-out/` is not staged by Git unless you intentionally promoted a
   finished export.

A path portability change should be checked from two different checkout paths
when possible. The committed manifest or generated actor should never contain a
sandbox home directory, a Windows user directory, or a machine-specific absolute
path except in a diagnostic field whose job is explicitly to display the local
root.

## Notes

* The server binds to `127.0.0.1` only and refuses any path outside the repo.
  It is a local dev tool — don't expose it to a network.
* **Paths in generated files are repo-relative** (`./Reputation-Matrix2/…`,
  always forward slashes). Use `paths.relative()` for anything written into a
  file or returned to the UI; a raw `str(path)` bakes one machine's home
  directory into the output, which is meaningless to everyone else. The two
  deliberate exceptions are `doctor` and the header's **root** readout, which
  exist to tell you where the hub is actually running.
* The shop catalog is cached to `.hub-out/cache/`, keyed on the newest file
  mtime in `data/shop-items`, so edits invalidate it automatically. **Refresh
  data** in the top bar forces a re-export.
* `data/shop-items/items_night_special.js` imports `STOCK_TYPES` correctly. The
  loader still shims that symbol as a belt-and-braces measure so a future edit
  that drops the import cannot fail the whole export.
* The **legacy** `shop-items/` copy of that file had a stale relative import
  (`../shop-stock.js`) and was the one failing to load. It now points at
  `../app/pages/commerce/shop-stock.js`, so `doctor` reports zero failed files.

## Fixed — August 2026

Three `hubcore/paths.py` constants were built with `../../../data/...` segments
that climbed above the repository root, so they silently pointed at paths that
did not exist:

| Constant | Resolved to (broken) | Now |
| --- | --- | --- |
| `PURCHASES_PATH` | `/home/data/commerce/shop-purchases.json` | `data/commerce/shop-purchases.json` |
| `WALLETS_PATH` | `/home/user/data/commerce/wallets.json` | `data/commerce/wallets.json` |
| `EVENTS_PATH` | `/home/user/data/events/events.json` | `data/events.json` |

Because the loaders degrade gracefully on a missing file, nothing raised — the
hub just reported **0 receipts** and **0 events** and built empty item piles.
`hub_cli.py doctor` now reports 20 receipts and 98 events.

Separately, `POST /api/piles/build` returned a 500 (`build_all() got an
unexpected keyword argument 'include_abilities'`) whenever the web UI's
*include abilities* toggle was set: `build_pile_actor` accepted
`include_abilities`/`character_level` but `build_all` neither accepted nor
forwarded them. It does now.

**If the hub ever shows zero of something, check `paths.py` first** — a wrong
path there looks exactly like an empty data set.
