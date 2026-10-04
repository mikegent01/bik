# Waluipedia Mass Import / Export (Foundry VTT module)

One click exports **every actor in the world, with folders** — to one JSON
file, or **into your Foundry Data folder as a tree** (one file per actor,
subfolders = your Actors folders, plus `import.json`). One click imports back
from a file, a URL, a repo packet, **or a whole directory inside Data**
(subfolders detected and used as the folders) — a **review table** first
(untick, rename, move folders), then folders created, missing actors created,
existing ones updated in place (same `_id`), every image path checked, and a
report. Together with `tools/foundry-bridge.py` this turns "add characters to
the game" into a loop of *export → edit in the repo → import*.

Module id: `waluipedia-mass-import`, version 1.1. Core v12–v14, any game
system (built and tested against dnd5e 5.x on core v14).

## Where the import-all files are

The repo ships ready-made packets. In the Import dialog they are in the
**Repo packet** dropdown; pasting the raw URL does the same thing.

| Packet | File in the repo | Raw URL (paste into *URL / Data path*) |
| --- | --- | --- |
| **Waluipedia Cast** — every generated character sheet (152: 118 NPCs and 34 main-cast player characters, plus the past selves under *<group> / 955 BF*; folders *Waluipedia Cast / <group>*) | `Reputation-Matrix2/actors/cast/import.json` | `https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/cast/import.json` |
| **Peach's Castle 955 BF** — the court + Bowser's incursion (30) | `Reputation-Matrix2/actors/peachs-castle-955/import.json` | `https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/peachs-castle-955/import.json` |
| **Your live world** (`midlands`) — split one file per actor | `Reputation-Matrix2/actors/worlds/midlands/` (a directory, no single file) | import it **as a directory**: link the repo into Data with `python3 tools/foundry-studio.py link` and give the dialog `npc/waluipedia/actors/worlds/midlands` |
| One character | any `fvtt-Actor-*.json` — also the *Download Foundry JSON* button on `#/sheets/<id>` | the sheet page prints its own *Mass Import URL* |

A single file is still the easiest hand-off (one URL, one click), but it is no
longer the only way in: **any directory of actor files works**, and the
Export dialog can write such a directory for you.

## Install

**Manifest URL** (Foundry → Add-on Modules → Install Module → paste at the bottom):

```
https://mikegent01.github.io/bik/Reputation-Matrix2/Foundry/mass_import/module.json
```

The zip it points to is `Reputation-Matrix2/Foundry/mass_import.zip`, rebuilt by
`python3 tools/build-foundry-module-zip.py` whenever the module sources change
(`check-all.py` fails if it is stale). Offline alternative: copy the
`mass_import/` folder to `<FoundryData>/Data/modules/waluipedia-mass-import/`.

Enable it in **Game Settings → Manage Modules**. Only GMs see or can use it.

## Buttons

In the **Actors** sidebar header, next to "Create Actor":

| Button | What it does |
| --- | --- |
| **Mass export** | Dialog: optional folder subtree, optional type filter (character/npc/vehicle/group), and a **destination**: *Download one JSON* (`<world>-all-actors.json`) or *Write into the Foundry Data folder* — a tree under `npc/waluipedia/<world>/` with one file per actor in subfolders mirroring your Actors sidebar, plus `import.json` with everything. |
| **Mass import** | Dialog: source = **JSON file** from disk, a **repo packet** from the dropdown, a **URL** (GitHub raw works — CORS is open there), or **a path inside your Foundry Data folder** — either one `.json` or **a directory** (📁 button browses; every `.json` under it is read, **subfolders are detected** and become the Actors folders). Then the **review table**. Options below. Prints a report afterwards and logs the full result object to the console. |

### The review table (the visualizer)

With *review first* ticked (default) nothing changes until you have seen the
list: one row per actor with a checkbox, an editable **name**, the type, an
editable **folder** (`A / B` nests) and what will happen — **new** or
**update** (the existing actor's name is shown when it differs). Tools above
the table act on the visible rows: a filter box, *all* / *none* / *only new* /
*only updates*, and a folder box with **set folder** (replace the ticked rows'
folders) and **prefix** (put the ticked rows' folders under it). Files that are
not actors (`manifest.json`, notes) are listed as ignored. *Import ticked*
imports exactly what the table shows.

### Directories and folders

When the source is a directory, **Directory folders** decides what the folder
of each actor is:

| Setting | Rule |
| --- | --- |
| *subfolders are the Actors folders* (default) | the subdirectory chain under the directory you chose **is** the folder path — move a file to another subdirectory and the actor moves folder on the next import. A combined `import.json` sitting inside a subdirectory keeps its own paths **under** that subdirectory. |
| *trust each file's own folder path* | the file's `flags.waluipedia-mass-import.folderPath` wins; the subdirectory only fills in when a file has none (the rule `tools/foundry-bridge.py combine` uses). |

Either way *Put everything under* prefixes the result, and the review table
lets you override any row.

The import source box is pre-filled from the world setting **Default import
source** (Configure Settings → Module Settings), so a recurring import is
"Import → Run".

### Import options

| Option | Default | Meaning |
| --- | --- | --- |
| Mode | upsert | `upsert` creates missing actors and updates existing ones; `create` never touches existing actors; `update` never creates. |
| Keep ids | on | New actors are created with the `_id` from the file, so the next import finds them again. Turn off only if you *want* duplicates. |
| Match by name + type | on | Actors without an id (or whose id is not in the world) are matched by `name` + `type` before being created — but never to an actor that is itself part of the same import, so two different "Guard" statblocks in one export stay two actors. |
| Replace embedded | on | Items and active effects are synced to the file: same `_id` → update, new → create, missing from the file → **deleted**. Off = only create/update, never delete. |
| Overwrite ownership | off | Keep the world's permission settings on existing actors. |
| Skip player characters | off | Leave `type: character` actors alone (handy when a packet of NPCs happens to include PCs). |
| Check images | on | `HEAD`-requests every `img` / token / item image path and lists the ones the server does not have. |
| Fix missing images | off | Replace missing image paths with Foundry's placeholders (`icons/svg/mystery-man.svg` / `icons/svg/item-bag.svg`) instead of importing broken links. |
| Root folder | empty | Prefix for every folder path, e.g. `Imports / Session 42` → `Imports / Session 42 / Peach's Castle 955 BF / The Court`. |
| Review first | on | Show the review table before importing (see above). Off = import straight away, as 1.0 did. |
| Dry run | off | Compute and report everything, change nothing. |

### Folders

Foundry's `toObject()` only stores a folder **id**, which means nothing in another
world. This module stores the **path** instead, in
`flags["waluipedia-mass-import"].folderPath` (an array of names, e.g.
`["Peach's Castle 955 BF", "The Court"]`), and also ships a `folders` list in the
export. On import the chain is created on demand (existing folders with the same
name under the same parent are reused). Old exports that only have `folder` ids
still work: with a matching `folders` list the path is resolved; without one
(the old macro export) the folder is *unknown*, so an existing actor **keeps
the folder it is in**, and a new actor goes into that folder if this world has
it (same-world re-import) or into the root / "Root folder" otherwise. Nothing is
ever moved to the root just because the file did not say where it belongs.

## Accepted import shapes

1. This module's export: `{ format: "waluipedia-actors/1", exportedFrom, system, folders, actors }`
2. The old macro export: `{ exportedFrom, system, exportedAt, actors }`
3. A bare array of actors (what `Players.json` in the repo is)
4. A single actor JSON (a `fvtt-Actor-*.json` file)

## Update semantics (read this once)

Updating an existing actor sends the whole document with `recursive: false`, so
**system data is replaced wholesale** by what is in the file — that is the point
(the repo is the source of truth) but it also means a hit-point change made in
Foundry after the export is lost if the file still has the old value. Export
first, edit, import. Exceptions: `flags` are merged (other modules' flags
survive), `ownership` is kept unless "Overwrite ownership" is ticked, `_stats`
is never written.

## Export into the Data folder, import it back

```
Mass export → destination “Write into the Foundry Data folder”
   Data/npc/waluipedia/<world>/
      import.json                                  everything, one file
      Peach's Castle 955 BF/The Court/fvtt-Actor-castle-page-<id>.json
      Disaster Inc./fvtt-Actor-remi-<id>.json
      fvtt-Actor-loose-npc-<id>.json               (root of the sidebar)

Mass import → URL / Data path = npc/waluipedia/<world>   (📁 picks it)
   every .json under it is read; the subdirectories are the folders again
```

The tree is plain files on your disk, so you can reorganise it in Explorer
(move a file = move the actor), hand it to `tools/foundry-bridge.py check /
combine / link-images`, or point `tools/foundry-studio.py` at it. Writing uses
Foundry's own upload API (`.json` is an allowed upload type), one request per
file; 150 actors take a few seconds.

## API

```js
const api = game.modules.get("waluipedia-mass-import").api;  // also globalThis.waluipedia_mass_import
await api.exportAllActors({ download: true, folderId: null, types: null });
await api.exportToDataFolder({ dir: "npc/waluipedia/midlands", tree: true, combined: true, folderId: null, types: [] });
await api.importFile(file, options);
await api.importFromUrl("https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/cast/import.json", options);
await api.importFromDataPath("npc/waluipedia/cast", { folderMode: "dirs", ...options });   // a .json or a directory
await api.importPayload(jsonObject, options);           // the workhorse
api.openImportDialog({ url: "npc/waluipedia/cast" });     // pre-filled dialog (review table included)
api.KNOWN_PACKETS;                                        // the repo packets the dropdown lists
// pure helpers, unit-tested: api.assembleDirectory(files, {base, folderMode}), api.buildPlan(raw, {actors, rootFolder}),
// api.applyPlanEdits(raw, plan, edits), api.exportTree(payload, {dir, combined, tree}), api.loadDataPath(path)
```

The result object: `{ created, updated, skipped, failed, foldersCreated, missingImages, dryRun, meta, source, files, ignored }`.

Macros (ready to paste into a script macro) live in `macros/`:
`export-all-actors.js` (works even without the module — falls back to inline
code that still records folder paths), `export-to-data-folder.js`,
`import-all-actors.js`, `import-from-data-folder.js`,
`import-peachs-castle-955.js`.

## The session loop with `tools/foundry-bridge.py`

```
Foundry  --Export all-->  <world>-all-actors.json
                            │
                            ▼  python3 tools/foundry-bridge.py split <world>-all-actors.json --out Reputation-Matrix2/actors/worlds/<world> --prune
                       one file per actor, directories = folders, manifest.json
                            │
                            ▼  edit JSON by hand / python3 tools/foundry-bridge.py apply changes.json <dir> --write
                            ▼  python3 tools/foundry-bridge.py link-images <dir> --write      (portraits from the repo)
                            ▼  python3 tools/foundry-bridge.py check <dir>
                            │
                            ▼  python3 tools/foundry-bridge.py combine <dir> --out <dir>/import.json --world <world>
                            ▼  python3 tools/foundry-bridge.py install-images <dir> --foundry-data <FoundryData>   (copies the PNGs)
                            │
Foundry  <--Import--------  import.json  (file, GitHub raw URL, Data path)
                            — or the split directory itself, linked into Data by
                              python3 tools/foundry-studio.py link  (subfolders → folders)
```

Commit the split tree at the end of every session; the next import finds every
actor by `_id` and updates it in place. The live mirrors live under
[`Reputation-Matrix2/actors/worlds/`](../../actors/worlds/README.md) — the
`midlands` world is already split there (136 actors). `link-images` touches
only placeholder images and missing `portraits/…` paths; GM uploads it cannot
see (`npc/…`, `player/…`) are listed and left alone unless `--replace-unknown`.

Tested against a fake Foundry (including a fake Data folder with
`FilePicker.browse / createDirectory / upload`) by
`tools/tests/test-mass-import-module.mjs`;
point it at a real export to exercise the whole thing:
`WMI_EXPORT=midlands-all-actors.json node tools/tests/test-mass-import-module.mjs`
(136 actors import, re-import updates all 136 and creates nothing).
