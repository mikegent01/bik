# Live world mirrors

One directory per Foundry world, produced by `tools/foundry-bridge.py split`
from the end-of-session **Export all** file. One JSON per actor, directories
mirroring the world's Actor folders, plus a `manifest.json` (source file,
export time, counts, folder list). These are the files you edit between
sessions; `combine` turns a directory back into one `import.json` for the
[Waluipedia Mass Import module](../../Foundry/mass_import/README.md).

| World | Source export | Actors | Notes |
| --- | --- | --- | --- |
| [`midlands/`](midlands/manifest.json) | `midlands-all-actors.json` (repo root) | 136 — 10 player characters, 126 NPCs | Exported 2026-10-04 with the old macro, so it has folder **ids** but no folder names: every file sits at the top level and keeps its `folder` id, and the module leaves those actors where they are on import. The first export made with the module (or `macros/export-all-actors.js`) carries the names — re-run `split --prune` and the tree sorts itself into named directories. |

The flat `Reputation-Matrix2/actors/` files are the *repaired* intake copies
(sanitized from `Players.json`, see the README there); a world mirror is the
*raw* state of the live world. Both can exist for the same character — the
mirror is what you import back, the flat file is the reference repair.

## Session loop

```bash
# after the session: drop <world>-all-actors.json in the repo, then
python3 tools/foundry-bridge.py split <world>-all-actors.json --out Reputation-Matrix2/actors/worlds/<world> --prune
python3 tools/foundry-bridge.py check Reputation-Matrix2/actors/worlds/<world>

# between sessions: edit files, or describe the edits once
python3 tools/foundry-bridge.py apply changes.json Reputation-Matrix2/actors/worlds/<world> --write
python3 tools/foundry-bridge.py link-images Reputation-Matrix2/actors/worlds/<world> --write   # placeholders → repo portraits

# before the session: one packet, images copied, import in Foundry
python3 tools/foundry-bridge.py combine Reputation-Matrix2/actors/worlds/<world> --out /tmp/<world>-import.json --world <world>
python3 tools/foundry-bridge.py install-images Reputation-Matrix2/actors/worlds/<world> --foundry-data "<Foundry Data>"
```

`import.json` for a whole world is a 15 MB build artifact — regenerate it,
don't commit it (the 955 packet commits its small one because it is served
to Foundry straight from GitHub).

`link-images` only rewrites **placeholder** images and **missing** repo paths
(`portraits/…` the repo does not have). Paths it cannot see — `npc/…`,
`player/…`, `assets/…` uploads that live in your Foundry Data folder — are
listed as *unknown* and left alone unless you pass `--replace-unknown`; the
module's import-time image check is what verifies those against the server.

Adding a new actor to a world is adding a file (any `fvtt-Actor-*.json`, with
or without an `_id`) to the directory it belongs in — `combine` derives the
folder from the directory when the file has no `folderPath` flag.
`check-all` runs `check` over every mirror here (errors fail, image warnings
don't).
