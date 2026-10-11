---
name: json-stores
description: Shard layout and rebuild for the filing JSON stores. Use when editing events, characters, locations, battles, investigations, commentaries, or analyses.
---

# JSON stores

Source of truth: `Reputation-Matrix2/data/stores/<kind>/…`

| Kind | Layout |
|---|---|
| events, battles | `<world>/<year>.json` — month in the filename only if the year would exceed ~250 KB |
| characters, locations | `<world>.json` (then `-b`, `-c`) |
| investigations, commentaries, articleAnalyses | one file per id |

Bundles at `data/<kind>.json` are generated for `index.html`. Do not hand-edit them.

```bash
python3 tools/build-json-stores.py --build --check
python3 tools/filing-context.py get events <id>
python3 tools/filing-context.py sizes
```

Never Read `midlands-all-actors.json`, `Players.json`, shop dumps, or `index.html` whole.
