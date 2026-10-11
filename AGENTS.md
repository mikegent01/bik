# Agent brief

Same rules as [`CLAUDE.md`](CLAUDE.md). Read that file, not the whole README.

Never Read the filing bundles whole — they are generated. Edit a shard
under `Reputation-Matrix2/data/stores/` (events, characters, locations,
battles, investigations, commentaries, articleAnalyses), then
`python3 tools/build-json-stores.py --build --check`.
Use `python3 tools/filing-context.py` to pull one record.
