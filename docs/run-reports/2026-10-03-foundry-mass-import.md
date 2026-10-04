# Run report — Foundry mass import / export, the Python bridge, and backgrounds off the 955 art

**Date:** 2026-10-03 · **Branch:** `arena/01a0feea-bik` → PR #89 · **Asked:** "remove the backgrounds" on the Peach's Castle 955 art, and "is there a way to import these fast — maybe a Foundry module called *mass import*", with the loop described as: export all actors with a macro → upload the JSON to GitHub each session → a Python bridge splits it, connects images, applies changes/states/items → combine → import back into the game, with folders.

## What shipped

### 1. Backgrounds

Everything that was still opaque in the 955 packet is now transparent, except the raw sources:

| Before | Now |
| --- | --- |
| 3 square plates (`peach-plate.png`, `toadsworth-elder-plate.png`, `guard-captain-plate.png`) kept their studio backdrop | matted out — same framing, alpha background |
| 5 contact sheets opaque | each also exists as `*-nobg.png` (same grid, every cell matted) |
| 36 tokens + 32 cutouts | already transparent (unchanged) |
| 3 `*-base.png` sources | still opaque on purpose — they are the generation references |

`tools/splice-sheet-cutouts.py` grew `tile_alpha()` (U²-Net + guided matte per cell), a transparent `plate_crop()`, and `nobg_sheet()`; the README lists the new files.

### 2. Foundry module — `Reputation-Matrix2/Foundry/mass_import/` (`waluipedia-mass-import`)

* Actors sidebar buttons (GM only): **Export all** (whole world or a folder subtree, optional type filter) and **Import** (file / URL / Data path, options dialog, report).
* Export format `waluipedia-actors/1`: `{format, exportedFrom, system, systemVersion, coreVersion, exportedAt, folders[], actors[]}`; every actor carries `flags["waluipedia-mass-import"].folderPath` — the one thing `toObject()` loses.
* Import: folders recreated from paths, upsert by `_id` (`keepId`), name+type fallback that never merges two actors from the same batch, items/effects synced (update / create / delete), flags merged, ownership kept, `_stats` dropped, HEAD-check of every image path with optional placeholder fix, `rootFolder` prefix, modes `upsert / create / update`, dry run, skip-PCs.
* Accepts four shapes: the module export, the old macro export, a bare array (`Players.json`), a single actor file.
* **Old macro export safety:** a `folder` id with no name is *unknown*, not "root" — existing actors keep their folder, new ones use the id if the world has it. Without this a re-import of `midlands-all-actors.json` would have flattened every folder in the world.
* Install via manifest URL `https://mikegent01.github.io/bik/Reputation-Matrix2/Foundry/mass_import/module.json` (zip built by `tools/build-foundry-module-zip.py`, `.gitignore` now un-ignores `Reputation-Matrix2/Foundry/*.zip`) or by copying the folder. Core v12–v14.
* Macros: `export-all-actors.js` (falls back to inline code with folder paths when the module is off), `import-all-actors.js`, `import-peachs-castle-955.js`.

### 3. Python bridge — `tools/foundry-bridge.py` (stdlib)

`split` (export → one file per actor, directories = folders, `manifest.json`, `--prune`), `combine` (directory → one import packet, synthetic stable folder ids, `--folder` prefix, `--check`), `link-images` (characters.json portraits → `portraits/<slug>.*` → image library; only placeholder/missing by default, `--replace-unknown` for GM uploads), `apply` (`changes.json`: match by `_id`/`name`/`type`/`nameContains`; `set`/`unset`/`rename`/`folderPath`/`addItems` (inline or `{fromFile, item}`)/`removeItems`/`addEffects`/`removeEffects`/`delete`), `check` (ids, duplicates, flag shape, NPC race/class items, image status), `install-images` (copy referenced repo images into Foundry Data).

### 4. Data

* `Reputation-Matrix2/actors/peachs-castle-955/`: 30 actors rebuilt with deterministic `_id`s and folder paths (*Peach's Castle 955 BF / The Court*, */ Bowser's Incursion*); `import.json` (688 KB) is the one-click packet, served from GitHub raw.
* `Reputation-Matrix2/actors/worlds/midlands/`: the user's real export (`midlands-all-actors.json`, 136 actors — 10 PCs, 126 NPCs, 15 MB) split into 136 files + manifest. 0 errors; 13 image warnings (GM uploads the repo cannot see). Round trip split → combine reproduces every actor byte-for-byte apart from the added flag.

## Verification

| Check | Result |
| --- | --- |
| `node tools/tests/test-mass-import-module.mjs` (fake Foundry) | 58 ok |
| `WMI_EXPORT=midlands-all-actors.json node tools/tests/test-mass-import-module.mjs` | 62 ok — 136 import, re-import = 136 updated / 0 created, embedded sync no-op |
| `python3 tools/tests/test-foundry-bridge.py` | 51 ok |
| `python3 tools/build-peachs-castle-955-actors.py --check` | 30 files current |
| `python3 tools/foundry-bridge.py combine … --check` (955 `import.json`) | current |
| `python3 tools/build-foundry-module-zip.py --check` | 7 files current |
| `python3 tools/foundry-bridge.py check Reputation-Matrix2/actors/worlds` | 136 actors, 0 errors |
| `python3 tools/check-all.py` | all new checks PASS; the 3 pre-existing failures (judgement in the grove, alliance cache, map lenses) unchanged |

## Honest limits

* The module has been exercised against a fake Foundry and the real export, not a running Foundry server — the first live import should be a **Dry run** (tick the box) and then a real one on a backed-up world.
* Updating replaces system data wholesale (`recursive: false`); export before you edit.
* `link-images` cannot verify `npc/…` / `player/…` uploads; the module's HEAD check does that in Foundry.
* Folder names for `midlands` arrive with the first module/macro export; until then the mirror is flat and the module leaves actors in their folders.
