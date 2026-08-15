# Bros. Attacks Combo System

A Foundry VTT module for the cooperative techniques recorded in the archive.
Two characters perform a short timing drill together; if they keep the rhythm,
the technique resolves and both partners roll.

Drop the folder in `Data/modules/` and enable it. A **🤝 BROS** button appears
bottom-left.

## The two techniques

`BROS_DEFINITIONS` at the top of `bros-attacks.js` holds them, and it matches
`Reputation-Matrix2/data/brosAttacks.json` exactly:

| id | partners | source |
|---|---|---|
| `chop_bros_attack` | Hjumpik Deldkur + Toad Lee | `feyward_chop_bros_soul_ring_and_the_guard_with_no_name` |
| `support_fire_bros_attack` | Green T + Remi | `shadowfell_birthday_trap_tanuki` |

**Do not add a technique here that is not in `brosAttacks.json`.** The archive
is the record; a technique that never happened at the table does not exist.
Add it to the data file from a real session first, then mirror it here.

## Paying for an attack

Two ways, and the module picks automatically:

**Bros Energy (default).** Each named partner spends 1 from a personal maximum
of 2. Energy returns on a short rest, via the `dnd5e.restCompleted` hook.
Stored per-actor as `flags.bros_attacks.energy`.

**A bros item, if a partner is carrying one.** Items bought from the shop
export with `flags.waluipedia.brosAttack` naming the technique they perform.
When one is present it is **spent instead of the energy** — the item is
consumed (or its quantity decremented), and no energy is deducted.

That substitution is the balance rule, not a discount. A stack of kits is not
a stack of free attacks, because each use destroys one. Items flagged
`teachesTechnique` also mark both partners as having **learned** the technique
(`flags.bros_attacks.learned`), after which it reverts to the normal economy
for good. A second copy therefore buys one more free use and nothing else —
no stacking bonus, no larger pool.

The technique card shows which cost currently applies, so the sheet never
claims "1 each" while an item is about to be spent instead.

## Files

| file | what it is |
|---|---|
| `bros-attacks.js` | definitions, energy/item payment, the timing drill, resolution |
| `bros-attacks.css` | the small amount not inlined by `styles()` |
| `module.json` | manifest — Foundry v14 |
| `lang/en.json` | strings |
| `templates/` | Handlebars templates |

## Related

- `Reputation-Matrix2/data/brosAttacks.json` — the canon record, source of truth
- `Reputation-Matrix2/data/shop-items/items_bros.js` — the purchasable items
- `Reputation-Matrix2/tools/foundry/bros-attacks/` — exported feat JSON for import
- `Reputation-Matrix2/tools/hub/hubcore/foundry.py` — writes the `waluipedia` flags this module reads
