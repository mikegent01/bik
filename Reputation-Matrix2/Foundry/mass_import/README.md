# Waluipedia Mass Import / Export (Foundry VTT module)

One click exports **every actor in the world, with folders**, to one JSON file.
One click imports such a file back — creating folders, creating missing actors,
updating existing ones in place (same `_id`), checking that every image path
exists on the server, and reporting what it did. Together with
`tools/foundry-bridge.py` this turns "add characters to the game" into a loop of
*export → edit in the repo → import*.

Module id: `waluipedia-mass-import`. Core v12–v14, any game system (built and
tested against dnd5e 5.x on core v14).

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
| **Export all** | Dialog: optional folder subtree, optional type filter (character/npc/vehicle/group). Downloads `<world>-all-actors.json`. |
| **Import** | Dialog: source = **file upload**, **URL** (GitHub raw works — CORS is open there) or **a path inside your Foundry Data folder** (e.g. `imports/peachs-castle-955/import.json`). Options below. Prints a report afterwards and logs the full result object to the console. |

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

## API

```js
const api = game.modules.get("waluipedia-mass-import").api;  // also globalThis.waluipedia_mass_import
await api.exportAllActors({ download: true, folderId: null, types: null });
await api.importFile(file, options);
await api.importFromUrl("https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/peachs-castle-955/import.json", options);
await api.importFromDataPath("imports/peachs-castle-955/import.json", options);
await api.importPayload(jsonObject, options);           // the workhorse
api.openImportDialog({ url: "https://…" });               // pre-filled dialog
```

The result object: `{ created, updated, skipped, failed, foldersCreated, missingImages, dryRun, meta }`.

Macros (ready to paste into a script macro) live in `macros/`:
`export-all-actors.js` (works even without the module — falls back to inline
code that still records folder paths), `import-all-actors.js`,
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
Foundry  <--Import--------  import.json  (file, GitHub raw URL, or Data path)
```

Commit the split tree at the end of every session; the next import finds every
actor by `_id` and updates it in place. The live mirrors live under
[`Reputation-Matrix2/actors/worlds/`](../../actors/worlds/README.md) — the
`midlands` world is already split there (136 actors). `link-images` touches
only placeholder images and missing `portraits/…` paths; GM uploads it cannot
see (`npc/…`, `player/…`) are listed and left alone unless `--replace-unknown`.

Tested against a fake Foundry by `tools/tests/test-mass-import-module.mjs`;
point it at a real export to exercise the whole thing:
`WMI_EXPORT=midlands-all-actors.json node tools/tests/test-mass-import-module.mjs`
(136 actors import, re-import updates all 136 and creates nothing).
