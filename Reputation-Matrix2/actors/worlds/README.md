# Live world mirrors

One directory per Foundry world, produced by `tools/foundry-bridge.py split`
from the end-of-session **Export all** file. One JSON per actor, directories
mirroring the world's Actor folders, plus a `manifest.json` (source file,
export time, counts, folder list). These are the files you edit between
sessions; `combine` turns a directory back into one `import.json` for the
[Waluipedia Mass Import module](../../Foundry/mass_import/README.md).

| World | Source export | Actors | Notes |
| --- | --- | --- | --- |
| [`midlands/`](midlands/manifest.json) | `midlands-all-actors.json` (repo root) | 151 — 12 player characters (+ Wario's Motorbike), 138 NPCs | Exported 2026-10-04 17:21Z with the module, so the tree has the world's folder names: `Players/`, `Important/`, `Creatures/`, `Flower/`, `Iron Legion/`, `A House Divided/<manor>…`, and the GM's loose actors at the top level. Three players sat in it as NPC statblocks (Bowser's GM copy, Wario, Salam); `tools/promote-player-sheets.py` rewrote them as `character` sheets under their live ids and the manifest rows follow — see [`../README.md`](../README.md#player-characters-carry-character-sheets-toolspromote-player-sheetspy). Spoils applied from [`../changes/`](../changes/). The suite (`tools/sheets-suite.py`) re-splits automatically when a newer export lands. |

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
to Foundry straight from GitHub). `tools/sheets-suite.py` builds it on every
pass as **the one packet the module syncs**: the mirror, then the generated
cast (`actors/cast/import.json`), then the 955 BF court
(`actors/peachs-castle-955/import.json`) — a name already in the world is
not brought in twice (`omitted[]`) — plus a `players-import.json` of the
Players folder alone for hand-offs. Both are git-ignored, published into
`<Foundry Data>/npc/waluipedia/<world>/` and served by `start.py` at
`http://127.0.0.1:8765/Reputation-Matrix2/actors/worlds/<world>/…`; the
module (1.5) picks the packet up by itself when the world loads.

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
