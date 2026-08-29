# Permanent Injury Desk

The injury desk is a d100 consequence table for lasting injuries, recovery, scars,
mental trauma, and survivability twists.

## Source of truth

`Reputation-Matrix2/data/injuries.json` contains exactly 100 ordered **temporary** entries. Each entry has a stable roll, category, injury type, effect, lowest listed cure, duration, optional notes, and `temporary: true`. These rows are placeholders for a future AI-generated replacement; do not silently replace them or remove the temporary marker. Do not duplicate the rules text in a character.

## Player surface

Open `Reputation-Matrix2/app/pages/standalone/injury-desk.html`. The desk provides:

- a random d100 spinner;
- searchable and category-filtered rows;
- a result card with effect, cure, duration, and notes;
- copyable result text;
- character links using the normal `#/article/<character-id>` route;
- a canonical assignment command for attaching the result to a character.

The page loads the JSON source at runtime, so changing a table entry does not
require rebuilding a generated HTML data bundle.

## Character integration

The table's contract remains 100 rows, but rolling is not capped at one roll or at a single d100 pass. The CLI accepts `d100`, `2d100`, `100d100`, and any `NdM` (up to 10,000 rolls); results wrap safely onto the available d100 table. After 100d100, run another batch or increase `N`—there is no artificial “stop at 100” batch boundary.

A character may carry an `injuries` array. Each item is a small reference:

```json
{
  "table": "permanent_injury_d100",
  "roll": 15,
  "injuryId": "injury_015",
  "status": "active"
}
```

Assign one from the command line:

```bash
python3 tools/generate-injury-table.py --result 15 --character luigi
```

Use `--roll --character <id>` for a random result. The command validates the
whole table before writing and updates `data/characters.json`; it never copies
the effect text into the character record. A later healing pass can change the
reference's `status` to `healed` without losing the original roll.

## Python tool functions

`load_table()` validates the file, metadata, all required fields, the 1–100 order,
and every temporary marker. `entry_for_roll()` rejects values outside 1–100.
`choose_roll()` uses an explicitly supplied result or a cryptographically secure
random d100. `assign()` resolves the character, builds only a compact reference,
and supports `dry_run` so a test cannot modify the character file. `main()` exposes
these operations through `--check`, `--roll`, `--result`, `--character`, and
`--dry-run`.

## Overnight orchestration

`gen-mages-guild-code.py --overnight` is a finite Codex generation mode; it is
not itself a forever daemon, and it does not currently repair injury entries.
The single unattended entry point is `tools/overnight-run.py`. It validates the
temporary injury contract, runs the Mages' Guild Codex generator, then validates
the injury contract again. This keeps a future AI injury replacement as an
explicit stage instead of silently mixing two generators.

```bash
python3 tools/overnight-run.py --plan
python3 tools/overnight-run.py --base-url http://127.0.0.1:1234/v1 --target 400
```

Use `--skip-mages` to validate only the injury table. The future replacement
stage should change `status` only after review and should preserve the d100,
character-reference, cure, and duration contracts.

## Verification

```bash
python3 tools/generate-injury-table.py --check
python3 tools/generate-injury-table.py --dice 2d100
python3 tools/generate-injury-table.py --dice 100d100 --dry-run
python3 tools/overnight-run.py --plan
python3 -m json.tool Reputation-Matrix2/data/injuries.json >/dev/null
python3 -m json.tool Reputation-Matrix2/data/characters.json >/dev/null
```

The image supplied for the feature is a visual reference for the table's shape;
it is not treated as a generated site asset. The table is intentionally a game
instrument, not medical advice, and the GM should override a result when the
fiction or player safety requires it.


## Other overnight candidates

The repository has two separate Python tool areas. The safest additional opt-in
candidate is the validated all-systems runner:

```sh
python3 Reputation-Matrix2/tools/generate_all.py --inventory
python3 tools/overnight-run.py --systems reputation,faction_dossiers --system-limit 40
```

`generate_all.py` cycles the registered GenKit systems (WAHwire, shop-item
validation, abilities, reputation, faction dossiers, crafting, and Bros
attacks). It uses checkpoints, provenance stamps, atomic writes, and per-system
validators. Use `--systems` explicitly rather than turning every system on by
accident; start with the inventory and choose a bounded `--system-limit`.

Other candidates found during the tool audit:

- `tools/gen-mages-forms.py`: validated missing Codex forms; good follow-up,
  but not yet included in the unified runner because its own `--generate --all`
  semantics should be made resumable first.
- `tools/expand-waluipedia.py`: can add stubs, books, past foreign events, and
  forms, but its broad `--all --overnight` mode mixes several live writers and
  should remain an explicit separate run until child-process failures are
  promoted to hard failures.
- `Reputation-Matrix2/tools/generate_shop_context.py`: useful context snapshot;
  its `--watch --generate-items` mode writes live shop stock repeatedly, so it
  is not silently chained into the archive runner.
- `Reputation-Matrix2/tools/generate_abilities.py --mode review --review-only`:
  useful audit mode; its `--infinite` create mode is intentionally not an
  unattended default.

The Mages generator does not use a duplicated lore blob. It retrieves bounded
cards and source snippets from the live archive for each prompt, including
searchable event and battle descriptions. Do not add a replacement static
canon block to an overnight script.


## Recommended staged overnight sequence

For a broad but controlled run, select the validated systems explicitly. The
all-systems stage must finish before the next stage begins; then the runner
starts the past-event writer:

```sh
python3 tools/overnight-run.py --inventory
python3 tools/overnight-run.py \
  --systems wahwire-author,shop_items,reputation,faction-dossiers,crafting,abilities \
  --system-limit 0 \
  --past-events 12 --past-max-attempts 132 \
  --target 400 --parallel 2
```

`--past-events N` is deliberately opt-in and runs only after the selected
systems return success. It calls `expand-waluipedia.py --past-events`—never
`--all`—so it cannot add stubs, books, or Codex pages during this stage.

Past-event safety rules are enforced before each write: choose the least-covered
foreign nation using nation-plus-event detail coverage; require the model to
return that exact nation; reject Mushroom Kingdom/Midlands locations; require a
known calendar date from 722–1039 BF; reject duplicate titles; require 500–1200
words; reject emoji spam, repeated long phrases, and repeated-line spam; and
write `proposed: true`. A bounded retry ceiling prevents an exhausted or
unparseable model from looping forever. The writer follows `README.md` and
`docs/STORY_FORMAT_GUIDE.md` through its story-with-commentator prompt.
