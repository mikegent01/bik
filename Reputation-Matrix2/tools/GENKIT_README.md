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
item → post → ability → reputation impact → faction dossier → crafting school → item → …
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

## Registered systems

The authoritative counts are live — run `python3 tools/generate_all.py --inventory`
rather than copying a total from this document. The cycle currently includes:

| stage | id | what it does |
|---|---|---|
| 0 | `wahwire-prune` | QC inherited posts, repair dead links, mark canon or retired |
| 0 | `faction-dossiers` | review reputation-minted faction stubs from their source and linked articles; write a quoted 500–1,000 word dossier or remove a misfile |
| 1 | `shop_items` | Warizon stock against the rarity deficit, common→godly |
| 1 | `crafting` | classify recipes the Forge filter cannot see |
| 1 | `abilities` | fill the emptiest class/level cells above level 1 |
| 1 | `reputation` | backfill impacts on records that have none |
| 1 | `wahwire-author` | write feed reactions for records nobody posted about |
| off | `wahwire-discuss` | **disabled:** generated replies remained generic and out of character |
| 1 | `wahwire-profile` | complete account biographies and follow graphs |

The Bros Attack adapter remains registered but disabled by design: techniques
are discovered at the table, not bulk-generated from event prose.

## Adding another system

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

**A minted faction stub is a queue item, not a dossier.** `faction-dossiers`
finds the record named by `_generated.sourceRecord`, follows its explicit
`relatedArticles`, and requires 500–1,000 words of source-bound Waluigi prose
plus three verbatim excerpts that the validator finds in both the source and
the dossier. It does **not** ask a local model to fit all of that into one
completion: one short call classifies and files metadata, then three separate
175–325 word calls write Identity, Recorded Operations, and Assessment. The
sections are independently checked and assembled before the normal whole-record
validator runs. It first classifies the label: people, places, events and aggregate
buckets are removed instead of being padded into fictional institutions or
replaced by low-value “retired after review” paragraphs. A justified alias
redirect repairs the generated reputation keys; otherwise the invalid key is
removed. Full dossiers carry `_generatedDossier` and the exact source article
IDs used.

Run just this pass with:

```bash
python3 tools/generate_all.py --only faction-dossiers
```

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

The panel inherits whatever the command line asked for, so
`--endpoint`/`--model`/`--workers` pre-fill the form and are used by a run
started from it. `--host 0.0.0.0` binds beyond loopback to reach the panel from
another machine (this also implies `--web`, since a native window cannot serve
one). Alongside `produced` and `failed` it reports **`retried`** — records that
were rejected once and recovered rather than lost.

## Safety

- **Atomic writes.** Everything goes through a temp file and `os.replace`, so
  an interrupted run cannot truncate `crafting.json`.
- **Checkpoints.** `tools/.genkit/checkpoint-<system>.json` records real writes
  for diagnostics and interrupted-run reporting; the directory is disposable.
  The data files remain authoritative. If `next_tasks()` offers a supposedly
  completed key, the runner automatically reopens that stale checkpoint instead
  of skipping pending work.
- **Repair before rejection.** A wrong answer is usually a *nearly right*
  answer in the wrong vocabulary, so the validators resolve before they refuse:
  `ALCHEMY` → `TRANSMUTATION`, `gadgets` → `curiosities`, `Original Dan` →
  `dan`, `hjumpick` → `hjumpik`. A faction the archive has never heard of is
  **minted** rather than dropped; a near-miss is merged into the existing one.
  When the model files a *faction* in an *operator* slot — a common and
  perfectly sensible confusion — the row is salvaged into `effects` instead of
  costing the whole record. Only placeholders (`tbd`, `nope`, `unaffiliated`)
  and genuine nonsense are refused.
- **Rejections are retried, not discarded.** A `ValidationError` is a verdict
  on one attempt, not on the record. The task is put back at the *front* of its
  system's queue carrying the reason, and the next prompt opens with
  `YOUR PREVIOUS ATTEMPT WAS REJECTED: …` so the model is told what to fix.
  `Runner.MAX_ATTEMPTS = 3` bounds it. Unexpected exceptions are retryable too,
  since they are usually one malformed reply hitting an unguarded path.
- **Hard validation, still.** Repair never invents content: it only maps a
  label onto the vocabulary the archive actually uses. Anything unsalvageable
  is refused with a message naming the legal values.
- **Category discipline.** `normalizeItem()` silently dumps unknown categories
  into `curiosities`; the validator resolves them properly or rejects loudly.
- **Dry run.** `--dry-run` exercises prompt → validate and writes nothing —
  including no checkpoint. Before this rule, a successful dry run marked a task
  complete without changing its data, so every later real run skipped it and
  the pending count never moved. Existing stale checkpoints self-heal when the
  source offers those tasks again.

## WAHwire authoring rules

- **Author cooldown.** After a character posts, that account must sit out the
  next `AUTHOR_COOLDOWN = 3` posts. Prompt guidance alone was not enough — with
  13 voices offered, the models still returned `waluigi` four times out of four
  — so `recent_authors()` names the blocked accounts in the prompt *and*
  `_author_validate` refuses a repeat.
- **18 reactions**, not 6: `cheer, rage, grief, smug, alarm, deadpan, mourning,
  defiant, gloating, fear, awe, disgust, relief, suspicion, resolve, mockery,
  pride, despair`. The tuple in `systems/wahwire.py` and the `REACTIONS` map in
  `app/pages/wahwire/wahwire.js` **must stay in step** — `tools/test_genkit.py`
  fails if a reaction exists in Python but not in the page.
- **Comments and replies.** A post may carry up to 6 comments, each
  `{id, author, content, likes, reaction, replyTo}`. The post's own author may
  not comment on it, `replyTo` is only honoured when that account already
  appears earlier in the thread, and a malformed comment is dropped on its own
  rather than failing the post. Threads render in a modal drawer on the feed
  page, not inline: `.ww-post` is a fixed 168 px row matched to `ROW_HEIGHT`,
  and variable-height content would break the virtualiser's scroll maths.

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

Against a deliberately *misbehaving* mock that rejects roughly three replies in
four (wrong vocabulary, duplicate names, missing numbers, prose where a map
belongs):

- **115 failures → 8** once repair and requeue were in place, then to 6 with
  the mock emitting valid post bodies; the survivors are genuine refusals
- 8 posts authored by 6 different accounts with **zero cooldown violations**,
  6 distinct reactions and 15 comments including reply chains
- the control panel reported `produced 24, failed 6, recovered 23 retry(ies)`
  with a per-system ok/fail/retry breakdown

Unit tests: `python3 tools/test_genkit.py` — 50 checks covering operator and
faction repair, school and category resolution, the cooldown, comment
validation, reaction parity with the front end, and scheduler requeue.
Front-end: `/tmp/wahwire_threadtest.js` — 36 checks over the thread drawer
against real generated data.
