# Agent brief — Waluipedia

Read this. Do **not** paste `README.md` or `Reputation-Matrix2/gemini.md` into
the thread. Open the heading you need.

## Rule zero

`mike` in a transcript is the **GM**, not a character. Never write him in.

## Token gate — the transfer

The filing stores are **sharded**. Edit a shard, not the bundle.

```
Reputation-Matrix2/data/stores/events/<world>/<year>.json
Reputation-Matrix2/data/stores/characters/
Reputation-Matrix2/data/stores/locations/
Reputation-Matrix2/data/stores/battles/
Reputation-Matrix2/data/stores/investigations/<id>.json
Reputation-Matrix2/data/stores/commentaries/<id>.json
Reputation-Matrix2/data/stores/articleAnalyses/<id>.json
```

Bundles under `data/*.json` are **generated**. Never hand-edit them.
After a shard edit:

```bash
python3 tools/build-json-stores.py --build --check
```

Pull one record instead of a store:

```bash
python3 tools/filing-context.py packet <event-id>
python3 tools/filing-context.py get events <id>
python3 tools/filing-context.py stub characters waluigi
```

World folders: `material` (real world), `feyward`, `shadeward`, `mirror`,
`unsorted`. Year in the filename; month only when that year is fat
(`1040-harvestide.json`). No year/month/day nesting.

Still never Read whole: Foundry dumps, shop catalogs, `index.html`.
Skills: `.claude/skills/session-filing`, `.claude/skills/json-stores`.

New chat per filing. `/clear` between jobs. Opus for prose; Sonnet/Haiku for
JSON splices and `check-all`.

## How work ships

Branch off `gh-pages`, one purpose per PR. Template: Purpose / What changed /
Verification / Run report. Unverified = unmerged. Generated files: edit the
generator, run it, commit both.

Filing order (`docs/SESSION_FILING_PROCESS.md`): locations → characters → XP
→ **then** the event → exhibits → investigation → index → artifacts.

Images: local ComfyUI / `tools/npc-forge.py` / archive reuse first. Prompt
sheet before generating (`docs/IMAGE_GENERATION_GUIDE.md`).

Full map: `README.md`. Standing orders: `Reputation-Matrix2/gemini.md`.
