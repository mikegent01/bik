# Actor exports (in use)

Live Foundry VTT actor exports for the campaign. **Import the plain
`fvtt-Actor-*.json` files here** — they have been repaired by
`tools/sanitize-foundry-actor.py` (deterministic, no AI).

| File | Use |
|---|---|
| `fvtt-Actor-*.json` | Repaired, import-ready. Use these. |
| `original-fvtt-Actor-*.json` | Untouched exports, kept as the regression corpus. Do not import. |
| `fvtt-Actor-hjumpik-deldkur-NO-SPECIES.json` | Hjumpik with his species stripped — see below. |

Regenerate any of them:

```bash
cd Reputation-Matrix2/actors
python3 ../../tools/sanitize-foundry-actor.py original-fvtt-Actor-NAME.json \
  --write fvtt-Actor-NAME.json
```

## What was repaired

| Actor | Repairs |
|---|---|
| Azure (Feywild Theater State) | 2 unresolvable icons → typed placeholders |
| Feyward Dan | duplicate species (kept **Grung**, see below) |
| Hjumpik Deldkur | 10 dangling advancement grants, 11 orphan container refs, 3 foreign effect origins, 4 dead icons |
| Lady Aurelian Corvinarus | already clean, copied unchanged |
| Toad Lee | 1 orphan container ref |

Item counts preserved, `system` stat blocks byte-identical, second pass clean.

## "Only a single Species can be added to a Player Character"

**This is not a defect in the file and no amount of sanitizing fixes it.**

Hjumpik already has a species (`Mountain Dwarf`). dnd5e's `Race._preCreate`
refuses to create a second one, Plutonium's task still expects every requested
document back, and the shortfall surfaces as
`Number of returned items did not match number of input items!` — a misleading
message for a plain refusal.

To import PHB'24 Dwarf onto him, the existing species has to be gone **first**.
Either delete `Mountain Dwarf` on the sheet and re-run the Plutonium import, or
import `fvtt-Actor-hjumpik-deldkur-NO-SPECIES.json`, which has the species and
its racial features already removed:

```bash
python3 ../../tools/sanitize-foundry-actor.py \
  original-fvtt-Actor-hjumpik-deldkur-6eBoDhCt0i3e3qZ4.json \
  --clear-species --write fvtt-Actor-hjumpik-deldkur-NO-SPECIES.json
```

That file drops `Mountain Dwarf` plus the `type: race` copies of
`Dwarven Resilience` and `Stonecunning` (101 → 98 items). It leaves the
**untyped** duplicates of `Stonecunning`, `Dwarven Resilience` and `Darkvision`
in place: an untyped feat can just as easily be a class ability, so deleting by
name would risk real content. The PHB'24 Dwarf import will re-add its own
copies — delete the untyped leftovers by hand if they stack.

## Feyward Dan — a judgement call

Dan carried two `race` items: `Toad — Feyward Variant` (0 advancements,
136-char description) and `Grung` (3 advancements, climb speed, 766 chars).
Default keep-first would have kept the near-empty one, so this file is built
with `--keep-species last`. **If Toad is the intended species, regenerate
without that flag and re-add the traits by hand.**

## Known remaining 404s (not fixable here)

`hjumpik` referenced four assets that exist in no install:
`1709761629520545.jpg`, `321.webp`,
`modules/plutonium/media/icon/image(2).webp`,
`modules/dnd5e-spellpoints/img/mana-icon.webp` — now typed `icons/svg/*`
placeholders. The spell-points icon returns if that module is reinstalled;
re-export rather than patching the JSON.
