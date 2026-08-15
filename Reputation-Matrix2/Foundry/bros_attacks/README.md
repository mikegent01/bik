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

## Difficulty

Three tiers, chosen by the GM in **Configure Settings → Bros. Attacks → Bros Attack
difficulty**, or from the buttons at the top of the 🤝 BROS window. Difficulty
is a world setting, so the whole table plays at the same tier.

| tier | energy each | bonus to the combined total | seconds per step | mistakes allowed |
|---|---|---|---|---|
| 🟢 Easy | 1 | +0 | 10 | 3 |
| 🟡 Medium | 1 | +2 | 8 | 2 |
| 🔴 Hard | 2 | +5 | 6 | 1 |

**Easy is the original drill, unchanged.** The two shipped techniques were
built and tested at these numbers; the tier exists so that baseline has a name.
Medium and Hard derive from it by multiplier — narrower zones, faster sweeps,
a shorter tap window, a tighter charge band — and pay the pair back with a flat
bonus when the technique resolves.

Hard costs 2 energy each, which is the whole pool: one hard attempt per short
rest, and a failed drill still spends nothing but the clock. Tiers never go
below a 5% zone, a 180ms tap window, or a charge band that cannot be reached.

By default players cannot change the tier; the buttons render disabled with the
current one marked. Turn on **Players may pick the difficulty** to hand it over.

Items ignore difficulty when paying: a kit is spent instead of energy at any
tier. The kit buys the performance, so Hard makes the drill harder and the
bonus bigger without making the kit cost more.

## GM controls

| control | where | what it does |
|---|---|---|
| Bros Attack difficulty | settings / window buttons | the tier above |
| Players may pick the difficulty | settings | lets non-GMs press the tier buttons |
| Players can see Bros items | settings | when off, non-GMs see no item rows, quantities, or item cost hints — the card just shows the energy cost |
| `game.brosAttacks.setItemCount(actor, attackId, qty)` | console/macro | sets the quantity of that technique's kit on an actor; `0` deletes it; returns `null` if the actor has no such kit |

`game.brosAttacks.difficulties` exposes the tier table if you want to build a
macro around it.

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
