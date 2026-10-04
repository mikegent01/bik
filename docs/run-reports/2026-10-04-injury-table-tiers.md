# Run report — Injury table tiers: Venom & Web, Fire & Blast, and the duplicate guard

**Filed:** run dated 2026-10-04
**Branch:** `arena/01a0feea-bik` (PR #89 into `gh-pages`)
**Source:** the user: "maybe we need tiers of injury table all 100 each, how to
stop duplicates … I want a lot of injury table rolls over 100 but not generic."

## 1. The problem

One d100 table has to cover a sword in the ribs and a spider's venom and a
Bob-omb going off at arm's length with the same hundred rows, so it either
stays generic or runs out of room. More than a hundred rolls means more than
one table — but a second table written as "the first one with the nouns
swapped" is worse than none, and nothing stopped that from happening.

## 2. What was done

**Tiers keyed to the source of harm, not to severity.** Each table is a full
hundred — the same sixteen bands tiling 1–100, low is worse, Death at 1 and a
1-Up analogue at 100 — so every surface that knew how to read the Permanent
Injury Table reads a tier unchanged. What differs is every row, because a
spider bite and a blast leave different things behind.

| Table | id | Rows | Roll it when |
|---|---|---|---|
| Permanent Injury Table (default) | `permanent_injury_d100` | 100 (untouched save one row, below) | blades, claws, blunt force — anything not pinned on a kind of harm |
| **Venom & Web** 🕷️ | `venom_and_web_d100` | 100 new | spiders, ettercaps, snakes, poisoned blades, stings, fey toxins, cocoons |
| **Fire & Blast** 🔥 | `fire_and_blast_d100` | 100 new | fireballs, grenades, muskets at arm's length, lightning, steam, explosions |

Venom & Web runs from "The Venom Wins" through black limbs taken to save the
rest, web-scarred lungs, the numb hand, the itch, two small holes that need
cleaning daily, fang marks, clinical arachnophobia, Spider Sense, Antibodies,
Venom-Proof, and "The Spider's Share" (you stand up at 1 and the thing that
dropped you takes its own venom). Fire & Blast runs from "Ash" (no body to
raise) through cauterised stumps, flash-blind eyes, the lungful of steam,
blast-concussion, blistered feet, hair gone, the shrapnel constellation,
pyrophobia, Ember Blood, Thick Skin, Fireproof, and "Phoenix Step" (you stand
up at 1 and every flame within 30 feet goes out).

**A registry.** `Reputation-Matrix2/data/injuryTables.json` lists the tables —
default first — with `id`, `file`, `title`, `tier`, `icon` and a one-sentence
`when`. Three further tiers are named under `planned[]` (Arcane Backlash &
Planar; Falls, Crush & Machines; Mind, Fey & Dread) with no file and no rows:
nothing rolls on a plan. Tiers inherit the cure ladder
(`"cureLadder": {"inherits": "permanent_injury_d100"}`) instead of copying it.

**The duplicate guard.** `tools/generate-injury-table.py --check` now
validates the registry, every table on it (the full per-table contract from
the rebuild), and then all 300 rows *together*: a repeated `injuryType`
across tables (case- and punctuation-blind), identical description text, or a
mechanic fingerprint — the description minus stop-words — overlapping at
Jaccard ≥ 0.75 fails the whole check. It is a real guard: it caught the
default table's own **Wrenched Knee** (row 53) repeating Crushed Toes (row 47)
word for word but for the duration, and it caught the first draft of Fire &
Blast's **Fingers to the Fuse** repeating Venom & Web's Fingers to the Fang.
Both were rewritten to *do* something different, not renamed.

**Readers.** No surface needed a new data file on its boot path:

- `index.html` Injury Desk — tier chips ("What did the harm?") above the die
  and on the table tab; the handoff button and the rolled card name the tier
  when it is not the default; the registry and tier files are fetched lazily
  the first time the desk (or an injured character's page) needs them, never
  through `DATA_FILES`. `injuryPanel` resolves a reference on whichever table
  it names and tags it with the tier title.
- Standalone desk — a tier strip under the header, `#table=<id>` deep links,
  and the assignment command carries `--table` on a tier.
- Wario's Casino — a **Tier** select inside the consequence drum label swaps
  the rows under the same drum (search, filter, bias and the ward handoff all
  read the same array); the registry is optional, `injuries.json` loads first.

**Assignment.** `--table <id>` on `--roll`, `--result`, `--list` and `--dice`.
A reference from a tier is `{"table": "venom_and_web_d100", "roll": 59,
"injuryId": "venom_and_web_059"}`; default references keep `injury_NNN`.

## 3. Files

```
CREATED
  Reputation-Matrix2/data/injuryTables.json                 the registry (3 authored, 3 planned)
  Reputation-Matrix2/data/injury-tables/venom-and-web.json  100 rows, hand-authored
  Reputation-Matrix2/data/injury-tables/fire-and-blast.json 100 rows, hand-authored
  tools/tests/test-injury-tables.py                         25 checks; plants duplicates and proves the guard catches them (in check-all)
  tools/tests/injury-tiers-live-smoke.mjs                   14 jsdom checks across the three readers (needs the 8765 server)
  docs/run-reports/2026-10-04-injury-table-tiers.md         this report
EDITED
  Reputation-Matrix2/data/injuries.json                     row 53 Wrenched Knee — new mechanic (was a Crushed Toes duplicate)
  tools/generate-injury-table.py                            registry loader, --table, check_all(), cross_table_guard(), injury_ref_id()
  index.html                                                Injury Desk tiers, lazy loader, injuryPanel by ref.table, provenance card
  Reputation-Matrix2/app/styles/waluipedia.css              .inj-tierpick / .inj-tiers
  Reputation-Matrix2/app/pages/standalone/injury-desk.html  tier strip, #table= hash, --table in the command
  Reputation-Matrix2/app/pages/crime-and-punishment/crime-and-punishment.{html,js,css}  Tier select
  Reputation-Matrix2/data/crimeAndPunishment.json           README line only
  Reputation-Matrix2/tools/GENERATOR_INVENTORY.md           injury-table row
  docs/INJURY_TABLE_GUIDE.md                                "Tiers" section: registry, guard, adding a tier, rolling on one
  tools/check-all.py                                        runs test-injury-tables.py after the table check
```

## 4. Events filed / XP awarded

None — systems work. Dan the Toad's filed injury (default row 59, Sprained
Thumb, from *The Way I Started It*) is unchanged and still resolves; the
Venom & Web tier exists for the next time the Grove bites someone.

## 5. What is not done

- The three planned tiers are names, not tables. Each is a day's authoring
  and the check will refuse any of their rows that leans on the 300 already
  written.
- The guard measures mechanic overlap, not theme; a GM can still write a dull
  row. It stops the same row appearing twice, which is what was asked.
- The tiers are authored, not play-tested; band widths are inherited from the
  default table's judgement call.
