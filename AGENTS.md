# Agent brief

Same rules as [`CLAUDE.md`](CLAUDE.md). Read that file, not the whole README.

Never Read `events.json` / `characters.json` / `locations.json` /
`battles.json` whole — they are generated. Edit a shard under
`Reputation-Matrix2/data/stores/`, then
`python3 tools/build-json-stores.py --build --check`.
Use `python3 tools/filing-context.py` to pull one record.
