# genkit — the all-systems generator

One entry point that fills gaps across every generatable system in the
archive, using the method proven in `generate_abilities.py`: LM Studio over
the local HTTP API, resumable checkpoints, atomic writes, and validation
strict enough that a bad record never reaches `data/`.

```bash
python3 tools/generate_all.py --inventory          # what is missing, per system
python3 tools/generate_all.py --dry-run --limit 6  # call the model, write nothing
python3 tools/generate_all.py --workers 2          # the real thing
python3 tools/generate_all.py --gui                # control panel
```

## Popcorn order

The generator never drains one system. Each turn it picks a system at random
from those with work, takes **one** record, and moves on:

```
item → post → ability → reputation impact → crafting school → item → …
```

Two reasons. The output reads better — 40 shop items in a row come out in the
same voice, drifting the same direction, because the model never changes
subject. And the archive grows evenly, so stopping halfway leaves every
system improved rather than one finished and five untouched.

Measured over a 60-record stage-1 run: **0 back-to-back repeats**.

Two rules bend the randomness:

- **Stages gate.** A stage-0 system blocks every higher stage until it runs
  out of work. This is how "quality-check the 19 existing posts before writing
  any new ones" became a scheduling property instead of a promise.
- **Recency penalty.** A system just served is weighted down 0.15, so two of
  a kind rarely land together even when only two systems remain live.

## The six systems

| stage | id | what it does | pending |
|---|---|---|---|
| 0 | `wahwire-prune` | QC the 19 legacy posts, repair dead links, mark canon or retired | 19 |
| 1 | `shop_items` | Warizon stock against the rarity deficit, common→godly | 1850 |
| 1 | `crafting` | classify the recipes the Forge filter cannot see | 831 |
| 1 | `abilities` | fill the emptiest class/level cells above level 1 | 421 |
| 1 | `reputation` | backfill impacts on records that have none | 209 |
| 1 | `wahwire-author` | write feed reactions for records nobody posted about | 98 |

**Total: 3,428 records of pending work.**

## Adding a seventh system

One file and one list entry. A system is anything that answers five
questions, which is the whole of `SystemSpec`:

```python
SPEC = SystemSpec(
    id="badges", title="…", summary="…", stage=1,
    next_tasks=next_tasks,      # (count) -> [Task]      what is one unit of work?
    build_prompt=build_prompt,  # (task)  -> (sys, user) what do I ask for it?
    validate=validate,          # (task, raw) -> record  is the answer acceptable?
    apply=apply,                # (task, record) -> res  where does it go?
    pending=pending,            # () -> int              how much is left?
)
```

Then add it to `all_systems()` in `systems/__init__.py`. The runner, the
scheduler, the GUI, the checkpoints and the CLI all pick it up with no further
changes.

## Provenance

Every generated record is distinguishable from hand-written canon, always.

Records the tool **authors** (shop items, posts, abilities) carry the full
stamp — `status: "generated"` plus `_generated {by, system, model, at}`.

Records the tool only **augments** get a scoped stamp instead:
`_generatedReputation` / `_generatedSchool`, each naming the exact fields
added. This matters: those are hand-written canon records, and their `status`
field already holds real prose (`"Class-9 Silence (Imperial Decree)"`).
Applying the full stamp would destroy canon to record a provenance detail.

**Reputation is gap-only.** A record that already has `reputationChanges` is
never revisited, and the check is re-run at write time in case another worker
filled it first. Verified: the 3 hand-written records are byte-identical after
a 45-record run.

## Two workers, scalable to four

`--workers 2` is the default: two concurrent LM Studio conversations, which is
what one machine comfortably serves. The pool has no hard ceiling — `--workers
4` starts four. Each system serialises its own writes behind a lock it owns,
so workers share nothing but a stateless HTTP client.

The scheduler tracks issued keys (`_issued`), because every adapter computes
its queue from what is on disk and nothing in flight is written yet. Without
that bookkeeping two workers prune the same post simultaneously.

## The GUI

`--gui` opens a control panel with live per-system counters, a log, and
worker/limit/temperature controls.

Two backends, chosen automatically: **tkinter** when the interpreter has it,
and a **local web dashboard** served from the standard library when it does
not. The fallback is not a consolation prize — plenty of Python builds ship
without tkinter (including this sandbox's), and a browser page also works over
SSH, where a native window does not. `--web` forces the dashboard.

## Safety

- **Atomic writes.** Everything goes through a temp file and `os.replace`, so
  an interrupted run cannot truncate `crafting.json`.
- **Checkpoints.** `tools/.genkit/checkpoint-<system>.json` records every key.
  Re-running skips completed work; the directory is disposable.
- **Hard validation.** Rejections are specific and logged, never silently
  patched. A run against a deliberately wrong mock produced
  `price 480000 outside the common band 10-200`, `unknown category 'armor'`,
  `apCost not an integer` — all correctly refused.
- **Category discipline.** `normalizeItem()` silently dumps unknown categories
  into `curiosities`; the validator rejects them loudly instead.
- **Dry run.** `--dry-run` exercises prompt → validate → checkpoint and writes
  nothing.

## Verified end to end

Against a mock LM Studio (`/tmp/mock_lmstudio.py`, not committed) serving
schema-valid replies:

- 45 records across all five stage-1 systems, **0 failures**
- stage 0 correctly exclusive — all 19 posts pruned before any stage-1 task
- generated items **render on the real storefront**: searchable, priced in
  faction currency, detail page showing `effectDetails`, mechanics numbers,
  usage activation and warning; add-to-cart increments the badge
- `sync_bros_attacks.py --check` and all four `check-*.py` audits pass
- no pre-existing field modified in `events.json` (diffed against HEAD)
