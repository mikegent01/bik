# Training Wing ability generation

`generate_abilities.py` is the abilities counterpart to `enrich_shop_items.py`. It uses the
same local LM Studio server, the same resumable/atomic write discipline, and the same
"validate before it ever touches source" rule.

Start LM Studio's **OpenAI-compatible local server** before running anything here.

## Two modes

```bash
# REVIEW (default) — improve abilities already in data/abilityShop.json
python tools/generate_abilities.py --limit 5

# CREATE — invent new abilities for one class
python tools/generate_abilities.py --mode create --class rogue --count 4
```

Preview without writing anything:

```bash
python tools/generate_abilities.py --review-only --limit 3
```

Desktop UI (same shape as `shop_studio.py`):

```bash
python tools/generate_abilities.py --gui
```

## Options

| Flag | Meaning |
|---|---|
| `--mode review\|create` | improve existing abilities, or invent new ones |
| `--class <id>` | restrict to one class (`rogue`, `wizard`, `paladin`, …) |
| `--count N` | create mode: how many to invent |
| `--limit N` | stop after N successes |
| `--review-only` | checkpoint results, never write source |
| `--review-mode unchecked\|stale\|all` | which existing abilities to spend requests on |
| `--stale-days 30` | age threshold for `stale` |
| `--endpoint` / `--model` | override LM Studio URL / model id |

`LM_STUDIO_URL` and `LM_STUDIO_MODEL` work as environment defaults, same as the shop tool.

## What the model must return

`tools/ability-response-template.json` is sent as an explicit fill-in template. As with the
shop tool, OpenAI's `response_format` option is **not** sent, because several LM Studio
builds reject it with HTTP 400.

Required fields: `name`, `icon`, `description`, `type`, `level`, `levelReason`,
`rules{activation,range,duration,uses,effect,drawback}`, `apCost`, `apReason`, `warioNote`.

## Validation — why bad output cannot reach the catalog

A reply is rejected (and retried with feedback, up to 5 times) if any of these fail:

- fields are missing or extra
- `type` is not one of the eight in use
- `level` is outside 1–20
- **`apCost` does not match the level tier** (1–4 → 1 AP, 5–8 → 2, 9–12 → 3, 13+ → 4).
  The tier rule lives in one constant so the model cannot invent its own economy.
- `description` is outside 20–200 chars or contains filler ("ask your DM", "a powerful
  ability", "mysterious", …)
- `rules.effect` is under 40 characters, i.e. not actually a rule
- `rules.drawback` is missing or trivial — every ability must cost something
- the text claims unlimited uses/damage, auto-success, guaranteed crits, cannot-fail,
  cannot-be-hit, or permanent immunity
- the name duplicates any existing ability (or one generated earlier in the same run)
- the name is prefixed with its class
- a *review* renamed the ability into something unrelated to the original

## Safety

- Every validated result is checkpointed to `tools/.ability-generation/` **before** source
  is written, so an interrupted overnight run resumes without losing work.
- Source writes go through a temp file plus a retrying replace, which survives Windows
  editors, antivirus, and read-only flags.
- `--review-only` is genuinely read-only; verified that it leaves `abilityShop.json`
  byte-identical.
- Create mode appends and bumps the class `count`; it never rewrites existing records.
- Generated records carry `"generated": true` and an `aiReviewedAt` timestamp.

## Related fix: `fix_ability_types.py`

Found while building the generator. `abilityShop.json` registered the types
`arcane/martial/passive`, but the live abilities use `combat/leadership/magic/support` —
four ids with no icon, label, or accent. **54 of 84 abilities** were falling back to the
same grey `#7a8a99`, so most of the catalog rendered colourless and the type filter had
nothing to key on.

```bash
python tools/fix_ability_types.py --dry-run   # report
python tools/fix_ability_types.py             # apply
```

It registers the four missing types with palette-consistent colours, backfills every
ability's `accent`/`typeLabel` from the registry, and leaves the unused legacy ids alone.
