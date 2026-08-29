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
python3 tools/overnight-run.py --plan
python3 -m json.tool Reputation-Matrix2/data/injuries.json >/dev/null
python3 -m json.tool Reputation-Matrix2/data/characters.json >/dev/null
```

The image supplied for the feature is a visual reference for the table's shape;
it is not treated as a generated site asset. The table is intentionally a game
instrument, not medical advice, and the GM should override a result when the
fiction or player safety requires it.
