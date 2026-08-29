# Permanent Injury Desk

The injury desk is a d100 consequence table for lasting injuries, recovery, scars,
mental trauma, and survivability twists.

## Source of truth

`Reputation-Matrix2/data/injuries.json` contains exactly 100 ordered entries. Each
entry has a stable roll, category, injury type, effect, lowest listed cure,
duration, and optional notes. Do not duplicate the rules text in a character.

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

## Verification

```bash
python3 tools/generate-injury-table.py --check
python3 -m json.tool Reputation-Matrix2/data/injuries.json >/dev/null
python3 -m json.tool Reputation-Matrix2/data/characters.json >/dev/null
```

The image supplied for the feature is a visual reference for the table's shape;
it is not treated as a generated site asset. The table is intentionally a game
instrument, not medical advice, and the GM should override a result when the
fiction or player safety requires it.
