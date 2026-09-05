# Sanitized actor exports

Import-ready copies of the five actor exports in the parent folder, produced by
`tools/sanitize-foundry-actor.py` (deterministic, no AI). **Import from here.**

The originals next door are kept unmodified as the regression corpus — do not
delete them, and do not import them.

Regenerate:

```bash
cd "Reputation-Matrix2/tools/item sheet examples"
for f in fvtt-Actor-*.json; do
  python3 ../../../tools/sanitize-foundry-actor.py "$f" --write "sanitized/$f"
done
# Feyward Dan is the one exception, see below:
python3 ../../../tools/sanitize-foundry-actor.py \
  fvtt-Actor-feyward-dan-YDfvgm2dGArNeEsE.json --keep-species last \
  --write sanitized/fvtt-Actor-feyward-dan-YDfvgm2dGArNeEsE.json
```

## What was repaired

| Actor | Repairs |
|---|---|
| Azure (Feywild Theater State) | 2 unresolvable icons → typed placeholders |
| Feyward Dan | duplicate species (kept **Grung**, see below); 62 items |
| Hjumpik Deldkur | 10 dangling advancement grants, 11 orphan container refs, 3 foreign effect origins, 4 dead icons |
| Lady Aurelian Corvinarus | already clean, copied unchanged |
| Toad Lee | 1 orphan container ref |

Every file: item count preserved (except Dan's duplicate species), `system`
stat block byte-identical, second pass reports nothing.

## Feyward Dan — a judgement call

Dan carried two `race` items: `Toad — Feyward Variant` (first, 0 advancements,
136-char description) and `Grung` (second, 3 advancements, climb speed,
766-char description). Default `--keep-species first` would have kept the
near-empty one, so this file is built with `--keep-species last` to preserve
the mechanics. **If `Toad — Feyward Variant` is the intended species,
regenerate without that flag and re-add the traits by hand.**

## Known remaining 404s (not fixable here)

`hjumpik` referenced four assets that exist in no install:
`1709761629520545.jpg`, `321.webp`,
`modules/plutonium/media/icon/image(2).webp`,
`modules/dnd5e-spellpoints/img/mana-icon.webp`. These are now typed
`icons/svg/*` placeholders. The spell-points icon returns if that module is
installed — reinstall it and re-export rather than patching the JSON.
