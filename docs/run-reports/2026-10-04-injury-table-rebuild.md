# Run report — The Permanent Injury Table, wiped and rewritten

**Filed:** run dated 2026-10-04
**Branch:** `arena/01a0feea-bik` (PR #89 into `gh-pages`)
**Source:** the user: "the injury table is flooded with trash pretty much and
bad injuries — can we wipe the slate clean and remake it from scratch."

## 1. What was wrong

`Reputation-Matrix2/data/injuries.json` held 204 rows (the guide promised 100).
They were the output of a 7B model run through the genkit `injury-table`
system, whose floor was set to **10,000 rows**: it had reached 343 before a
deterministic cull removed 125 "Veilbound Vein …" template repeats
(roman-numeral suffixes and all). What survived was still a flood: nine
"Veil"-themed rows in the last ten alone, durations of "Instant" on permanent
wounds, "DC 30 Medicine" and "Psychology check" cures, and no structure — a
d100 that could not be read as a table. No character carried an `injuries`
reference, so nothing depended on the old row numbers.

## 2. What was done

| What | Where |
|---|---|
| New table, 100 hand-authored rows | `Reputation-Matrix2/data/injuries.json` — schema 2, `status: "authored"`, `locked: true`, 16 bands in order, worst at 1 (Death) and best at 100 (The 1-Up); `_README`, `rules`, `bands`, `cureLadder` |
| Validator rewritten | `tools/generate-injury-table.py` — `--check` enforces the whole contract (schema, lock, no generated-era fields, bands tiling 1–100 with the single Death band at row 1, exactly 100 rows with exactly seven fields in order, categories matching bands, unique names with no roll numerals / family cap 2 / prefix cap 12, description bounds, cross-references resolving, no GM name); `--list [--band]`, `--roll [--survived]`, `--dice`, `--result`, `--character`, `--dry-run` |
| Generator retired | `Reputation-Matrix2/tools/genkit/systems/desk.py` — `INJURY_FLOOR` 10,000 → 100; `injury_table_locked()`; pending 0 / no tasks / `apply` refuses on a locked table; `INJURY_SPEC` disabled with an explaining title. `test_genkit.py` expectations updated |
| Repair tool removed | `tools/dedupe-injury-table.py` deleted; its guards live in the validator; `tools/check-all.py` and `tools/overnight-run.py` no longer call it (the overnight run still validates the contract before and after) |
| Casino | `crime-and-punishment.js` — severity now drags the consequence roll **down** (the table is worst-first; the old bias added and sent grave sentences toward the boons); a ward survivor's roll skips row 1, matching the wiki's Injury Desk. Page copy and `crimeAndPunishment.json` README updated (100 rows, low is worse) |
| Wiki | `index.html` — Injury Desk comment and an "authored" provenance card instead of the provisional warning (the warning still renders if anyone ever flips the status back) |
| Standalone desk | `app/pages/standalone/injury-desk.html` — lede rewritten; every band has a colour |
| GenKit dashboard | `genkit/gui.py` card, `webui_template.html` hint and editor defaults (no more `temporary: true` on add/renumber), `GENKIT_README.md`, `GENERATOR_INVENTORY.md` |
| Docs | `docs/INJURY_TABLE_GUIDE.md` injury sections rewritten (bands, ladder, surfaces, validator, editing rules, history); unrelated Codex/overnight sections kept |
| Tests | `tools/tests/test-crime-and-punishment.mjs` (37: exactly 100 rows, authored+locked, row 1 Death / row 100 survivor, bias subtracts, ward skips Death), `tools/tests/test-hub-pages.mjs` (35) |

### The table's shape

1 Death · 2–4 Quicker death · 5–10 Lose a limb · 11–22 Severe injury ·
23–38 Major injury · 39–56 Injury · 57–70 Minor injury · 71–75 Facial scarring ·
76–78 Memorable scars · 79–80 Severe mental trauma · 81–86 Mental trauma ·
87–88 Flavour effect · 89–92 Special effect · 93–97 Minor boon ·
98 Survivability · 99–100 Survivability+.

Mechanics are fifth-edition vocabulary (advantage/disadvantage, exhaustion,
Dash, death saves, hit point maximum, Medicine DCs). `cure` is the **lowest**
rung that removes the row: Rest → Treatment → Lesser Restoration → Remove
Curse → Greater Restoration → Heal → Regenerate → Raise Dead / Resurrection /
1-Up. Notes point only at filed canon (Dr. Toad's Star Hill Clinic, the
Menders, the Mages' Guild, Toadstool Tonic, the 1-Up Mushroom).

## 3. Files

```
REWRITTEN
  Reputation-Matrix2/data/injuries.json                     100 rows (was 204 generated)
  tools/generate-injury-table.py                            validator / roller / assigner
  docs/INJURY_TABLE_GUIDE.md                                injury sections
DELETED
  tools/dedupe-injury-table.py
EDITED
  Reputation-Matrix2/tools/genkit/systems/desk.py          generator retired
  Reputation-Matrix2/tools/test_genkit.py                   expectations for the retired system
  Reputation-Matrix2/tools/genkit/gui.py, genkit/webui_template.html
  Reputation-Matrix2/tools/GENKIT_README.md, GENERATOR_INVENTORY.md
  Reputation-Matrix2/app/pages/crime-and-punishment/crime-and-punishment.{html,js}
  Reputation-Matrix2/app/pages/standalone/injury-desk.html
  Reputation-Matrix2/data/crimeAndPunishment.json           README line only
  index.html                                                Injury Desk comment + provenance card
  tools/check-all.py, tools/overnight-run.py
  tools/tests/test-crime-and-punishment.mjs, tools/tests/test-hub-pages.mjs
CREATED
  docs/run-reports/2026-10-04-injury-table-rebuild.md       this report
```

## 4. Events filed / XP awarded

None — this is a systems rebuild, not a session filing. No character record
changed.

## 5. What is not done

- **`Reputation-Matrix2/tools/test_genkit.py` cannot run to completion on this
  branch** for a reason unrelated to this work: it reads
  `app/pages/wahwire/wahwire.js`, which does not exist here, and crashes at
  line 397 before the desk section. The retired-generator behaviour was
  verified directly (sandboxed copy: `locked`, pending 0, no tasks, `apply`
  refused, file byte-identical) and the test expectations were updated so they
  hold when the suite runs again.
- The table is authored, not play-tested. The band widths (56% of the table is
  a real cost, 14% a bad week, 22% marks/trauma/oddities, 8% luck) are a
  judgement call for a level 4–8 campaign; narrow or widen bands by editing
  `bands` and moving rows, then `--check`.
- No character carries an injury yet; the first assignment will exercise
  `injuryPanel` in `index.html` live.
