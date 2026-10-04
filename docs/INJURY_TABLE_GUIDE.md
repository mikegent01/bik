# Permanent Injury Table

The Permanent Injury Table is a hand-authored d100 consequence table for
injuries that outlast the fight: lost limbs, the body never being the same,
bad weeks, scars, trauma, oddities, and — at the top end — the luck of the
survivor. It is **low is worse**: 1 is death, 100 is the 1-Up.

## Source of truth

`Reputation-Matrix2/data/injuries.json` — `schemaVersion` 2, `status`
`"authored"`, `locked: true`, and **exactly 100 rows** in declared bands:

| d100 | Band | Rows | What it means |
|---|---|---|---|
| 1 | Death | 1 | the blow was more than the body |
| 2–4 | Quicker death | 3 | permanent fragilities around death saves |
| 5–10 | Lose a limb | 6 | arm, hand, leg, foot, fingers — Regenerate territory |
| 11–22 | Severe injury | 12 | eye, throat, lung, spine, hip, skull; hit-point-maximum losses |
| 23–38 | Major injury | 16 | breaks that take weeks, nerve damage, the weakened heart |
| 39–56 | Injury | 18 | two to four weeks of disadvantage; infections |
| 57–70 | Minor injury | 14 | a bad week; 70 is "A Scratch" |
| 71–75 | Facial scarring | 5 | distinguishing marks with social mechanics |
| 76–78 | Memorable scars | 3 | the story on the skin |
| 79–80 | Severe mental trauma | 2 | Shattered Nerve, Night Terrors |
| 81–86 | Mental trauma | 6 | the Flinch, Phobia, Survivor's Silence, Hypervigilance, Battle Shakes, Short Fuse |
| 87–88 | Flavour effect | 2 | Weather Knee, White Streak |
| 89–92 | Special effect | 4 | the Scar Remembers, Starlight in the Wound, Arcane Tinnitus, Iron Splinter |
| 93–97 | Minor boon | 5 | small permanent upsides |
| 98 | Survivability | 1 | Hard to Kill (death saves succeed on 9+) |
| 99–100 | Survivability+ | 2 | Relentless, The 1-Up |

Every row has exactly these fields, in this order: `d100`, `category`,
`injuryType`, `description`, `cure`, `duration`, `notes`. The field names are
read live by `index.html` (`#/injuries` and the character injury panel),
Wario's Casino, the standalone desk and the validator — do not rename them.

**Mechanics** use fifth-edition vocabulary: advantage/disadvantage, exhaustion
levels, the Dash action, death saving throws, hit point maximum, Wisdom
(Medicine) DCs. **`cure` is the lowest rung of the ladder that removes the
row**; anything stronger works too. The ladder is in the file as
`cureLadder`: Rest → Treatment (a healer and a DC) → Lesser Restoration →
Remove Curse → Greater Restoration → Heal → Regenerate → Raise Dead /
Resurrection / a 1-Up Mushroom. Setting hooks in `notes` point only at filed
canon (Dr. Toad's Star Hill Clinic, the Menders, the Mages' Guild, Toadstool
Tonic, the 1-Up Mushroom). Rows that say "treat as" another row borrow that
row's mechanics, never its cure.

### History

The first table was machine-generated (a 7B model through `genkit`): 343 rows
of which 125 began "Veilbound Vein", disambiguated with roman numerals, with
contradictory durations and cures. A deterministic cull got it to 204. On
2026-10-04 the slate was wiped and the hundred rows above were written by hand.
The genkit `injury-table` system is **retired**: it stays registered (so the
id still resolves and the dashboard card explains itself) but is disabled,
reports zero pending work for a locked table, and refuses to write one. The
old `tools/dedupe-injury-table.py` repair tool is gone; its repeat guards
(no duplicate names, no roll numerals, no name family more than twice) live in
the validator now.

## Tiers — one table per kind of harm

"Roll on the injury table" meant one table until 2026-10-04. Now there is a
**registry**, `Reputation-Matrix2/data/injuryTables.json`, and each entry on
it is a full, hand-authored d100 table keyed to the *source* of the harm. The
Permanent Injury Table stays the default — the generic blade, claw and fall —
and the tiers sit beside it, not above it:

| id | file | tier | icon | roll it when |
|---|---|---|---|---|
| `permanent_injury_d100` | `injuries.json` | Steel & Claw | 🩹 | anything not covered below — the default |
| `venom_and_web_d100` | `injury-tables/venom-and-web.json` | Venom & Web | 🕷️ | bites, stings, spit, poison, cocoons, anything that dropped you with venom in it (the Skittering Grove) |
| `fire_and_blast_d100` | `injury-tables/fire-and-blast.json` | Fire & Blast | 🔥 | fire, lava, Bob-omb and powder blasts, lightning spheres, steam, anything that cooked you or threw you |

`planned[]` on the registry lists tiers that are named but **not written**
(Arcane Backlash & Planar; Falls, Crush & Machines; Mind, Fey & Dread). Nothing
rolls on a plan; a planned tier becomes real only when its 100 rows exist and
pass the check.

**What every tier shares with the default**: the same seven fields in the same
order, the same sixteen bands tiling 1–100, low is worse, row 1 is Death
(skipped by the handoffs exactly like the default's), row 100 is that tier's
1-Up analogue ("The Spider's Share", "Phoenix Step"), and the cure ladder —
tiers carry `"cureLadder": {"inherits": "permanent_injury_d100"}` rather than
a copy. **What differs** is every row: a tier is not the default with the
nouns swapped. Venom & Web is about what poison does over time (the itch, the
numb hand, the cocoon that never quite left the lungs) and what a web does to
a body that fought it; Fire & Blast is about cauterised stumps, flash-blind
eyes, blast-deaf ears, the lungful of steam and the shrapnel that stayed.

### How duplicates are stopped

`tools/generate-injury-table.py --check` validates the registry and *every*
table on it, then runs the **cross-table duplicate guard** over all rows of
all tables together. It fails the whole check when:

1. an `injuryType` repeats across two tables (case- and punctuation-blind) —
   the default already owns "Lost Eye", "Scorched Eyes", "Burned Hands",
   "Infected Bite" and the like, so a tier has to name its version
   differently *and* mean something different by it;
2. two rows have identical description text; or
3. two rows share a mechanic fingerprint — the description with stop-words
   removed — at a Jaccard overlap of 0.75 or more (rows with fewer than six
   content words are too short to compare and are skipped). A row that is
   another row's mechanic with the nouns swapped is a duplicate; rewrite it
   so it *does* something different, do not just rename it.

The guard also runs within a single table, which is how the default's own
"Wrenched Knee" was caught repeating "Crushed Toes" and rewritten.
`tools/tests/test-injury-tables.py` plants each kind of duplicate in an
in-memory copy and proves the guard reports it, and
`tools/tests/injury-tiers-live-smoke.mjs` (needs the 8765 static server)
boots the three readers in jsdom and switches tiers.

### Adding a tier

1. Write `Reputation-Matrix2/data/injury-tables/<slug>.json` by hand: copy the
   top-level shape of an existing tier (`id` is `<slug>_d100`, `schemaVersion`
   2, `status: "authored"`, `locked: true`, `bands` identical to the default,
   `cureLadder: {"inherits": "permanent_injury_d100"}`) and author **exactly
   100 rows** in band order. Death at 1, the 1-Up analogue at 100.
2. Add it to `tables[]` in `injuryTables.json` with `id`, `file`, `title`,
   `tier`, `icon`, `when` (one sentence a GM reads to decide whether this is
   the table). Remove it from `planned[]` if it was there. The default must
   stay first.
3. `python3 tools/generate-injury-table.py --check`. Fix every pair the guard
   names by rewriting the newer row's mechanic.
4. No reader needs code: `index.html`, the standalone desk and the Casino all
   read the registry at runtime and add a chip/option per table.

### Rolling and assigning on a tier

```bash
python3 tools/generate-injury-table.py --roll --survived --table venom_and_web_d100
python3 tools/generate-injury-table.py --result 59 --table venom_and_web_d100 --character dan_the_toad
python3 tools/generate-injury-table.py --list --table fire_and_blast_d100 --band "Lose a limb"
```

A reference written from a tier names it and uses the tier's slug in its id —
`{"table": "venom_and_web_d100", "roll": 59, "injuryId": "venom_and_web_059"}`
— while default-table references keep `injury_NNN`. `injuryPanel` in
`index.html` resolves the row on whichever table the reference names (lazy-
loading the tier files the first time one is needed) and tags the entry with
the tier title.

## Player surfaces

- **Wario's Casino** — `Reputation-Matrix2/app/pages/crime-and-punishment/crime-and-punishment.html`.
  The consequence drum rolls the table after a sentence; severity drags the
  roll towards the low (dangerous) end, never guaranteeing anything. The ward
  tab runs death saves; a survivor rolls the table **minus row 1**, because
  the saves already decided they live. The searchable table lives here too.
  A **Tier** select in the drum label swaps the rows under the same drum;
  the default is always loaded first and the registry is optional.
- **`#/injuries`** in `index.html` — the Injury Desk route: death saves, the
  survival handoff (also skips row 1), the full table, and the moved-to-Casino
  notice for old links. The tier chips ("What did the harm?") sit above the
  die and on the table tab; the handoff button and the rolled card name the
  tier when it is not the default. The registry is fetched lazily — it is not
  in `DATA_FILES`, so a missing registry costs nothing on boot.
- **Standalone desk** — `Reputation-Matrix2/app/pages/standalone/injury-desk.html`:
  spinner, search, category filter, copyable result, and the assignment
  command (which carries `--table` on a tier). `#table=<id>` in the URL opens
  that tier; character pages link to it. All three read the JSON at runtime;
  no rebuild is needed after an edit.

## Character integration

A character may carry an `injuries` array of compact references; the effect
text lives in the table, once:

```json
{
  "table": "permanent_injury_d100",
  "roll": 15,
  "injuryId": "injury_015",
  "status": "active"
}
```

```bash
python3 tools/generate-injury-table.py --result 15 --character luigi            # a chosen row
python3 tools/generate-injury-table.py --roll --survived --character luigi      # death-save handoff (skips row 1)
python3 tools/generate-injury-table.py --result 15 --character luigi --dry-run  # show, do not write
```

The command validates the whole table before writing and never copies the
effect text into the character record. A healing pass changes the reference's
`status` to `healed` without losing the original roll. The character page
renders the panel from the reference (`injuryPanel` in `index.html`).

## The validator

`tools/generate-injury-table.py` is the contract's keeper and runs in
`tools/check-all.py` and at both ends of `tools/overnight-run.py`:

```bash
python3 tools/generate-injury-table.py --check                 # registry + every table + the duplicate guard
python3 tools/generate-injury-table.py --table <id> ...          # any of the below on a tier (default: the registry default)
python3 tools/generate-injury-table.py --list [--band "Injury"] # d100, category, name, lowest cure
python3 tools/generate-injury-table.py --roll [--survived]
python3 tools/generate-injury-table.py --dice 3d100             # repeated rolls; any NdM wraps onto 1-100
```

`--check` enforces: schema 2, `status: "authored"`, `locked: true`, no
generated-era fields (`temporary`, `_generated`, `_repair`, `replacement`),
bands that tile 1–100 in order with the single Death band at row 1, exactly
100 rows with exactly the seven fields in order, `d100` consecutive, each
row's category matching its band, non-empty name/description/cure/duration,
names unique (case-insensitive) with no roll numerals and no family more than
twice, descriptions 20–400 characters, cross-references like "(07)"
resolving, and no row naming the GM — per table — and then the cross-table
duplicate guard described under *Tiers*. `cureLadder` may be the ladder
itself (the default) or `{"inherits": "permanent_injury_d100"}` (a tier).

## Editing the table

Edit `injuries.json` (or a tier file) by hand, keep a row's slot (its `d100` is its identity
everywhere in the app and in character references), keep the band order, and
run `--check`. If a row must move bands, update `bands` too. Do not add a
101st row: the Casino drum, the desk, the tests and the character references
all assume d100 1–100. The GM overrides any row the fiction or a player's
comfort requires; the table is a game instrument, not medical advice.

## Overnight orchestration

`tools/overnight-run.py` validates the injury contract before and after every
run so an unattended pass can never be the thing that quietly changed the
table. No generator owns the table any more; `--only injury-table` is a no-op
by design.

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
known calendar date from 2–1039 BF; reject duplicate titles; require 500–1200
words; reject emoji spam, repeated long phrases, and repeated-line spam; and
write `proposed: true`. A bounded retry ceiling prevents an exhausted or
unparseable model from looping forever. The writer follows `README.md` and
`docs/STORY_FORMAT_GUIDE.md` through its story-with-commentator prompt.


## Windows save-lock recovery

The Codex generator now retries atomic replacement for up to 30 seconds when
Windows reports `WinError 5` from an editor, antivirus scanner, or watcher. It
then attempts a complete direct write from the finished temporary JSON. If the
target is still locked, it fails loudly with the exact recovery instruction
rather than continuing with unsaved pages. The retry window can be adjusted
with `MAGES_SAVE_RETRY_SECONDS`.

Regression tests:

```sh
python3 -m unittest tools/tests/test_mages_save.py -v
```

On Windows, close any editor or process holding
`Reputation-Matrix2/data/laws/mages-guild-code.json` before retrying. A browser
fetch normally does not lock the file; file watchers and editors are the usual
causes.


## Codex GUI

The Codex generator has a detailed Tk control panel:

```sh
python3 tools/gen-mages-guild-code.py --gui
```

It exposes the endpoint, model, target/count, section floor, parallel workers,
delay, timeout, failure ceiling, log path, shuffle mode, cleanup controls, and
separate buttons for resume/run, prompt preview, status, initialization, cite
validation, cleanup, short-draft clearing, and emoji audit. The Run button
launches the same CLI process in the background so the window remains
responsive and all existing validators and save-lock handling remain active.


## Infinite all-systems mode

For an unattended run that keeps working until stopped, use the explicit
infinite flag:

```sh
python3 Reputation-Matrix2/tools/generate_all.py --infinite --workers 1
```

The runner retries validation failures up to its normal attempt budget, then
abandons only that task for the current run and continues with the next system.
The source record is not deleted and remains eligible for a later run. An
infinite run prints a successful-record counter instead of pretending it has a
finite ETA. Events remain an explicit `--past-events N` stage for finite runs;
this prevents an endless process from silently generating an unbounded event
stream.
