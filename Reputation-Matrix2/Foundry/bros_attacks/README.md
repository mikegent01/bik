# Bros. Attacks Combo System

A Foundry VTT v14 module for the cooperative techniques recorded in the
Waluipedia archive. A Bros Attack is not a spell button and not a shop coupon:
it is a table-proven maneuver between two named partners, backed by a source
filing, a short timing drill, a small shared resource, and ordinary dnd5e rolls
after the drill succeeds.

Drop this folder into `FoundryVTT/Data/modules/bros_attacks/`, enable **Bros.
Attacks Combo System**, and a **🤝 BROS** launcher appears in the lower-left
corner. The module is local-only static content; it does not call Waluipedia at
runtime and it does not edit the archive.

---

## The rule in one paragraph

Two named partners select a technique and clear a four-step timing drill. A
failed drill spends no energy, consumes no kit, makes no rolls, and closes
cleanly. After a successful drill, the module pays the cost: it consumes a
matching bros kit if either partner carries one; otherwise it spends Bros Energy
from both partners according to the selected difficulty. Then the GM resolves
the normal attack/check/damage consequences described by the archive record,
adding the difficulty bonus to the combined result where the technique calls for
a combined roll.

Discovery is separate from use. A pair learns a technique through filed table
play: log failures with reasons, then log the attempt that finally lands and the
name the players give it. Kits can make an attempt free or safer; they do not
silently teach a technique just by being in inventory.

---

## Canon and data authority

`Reputation-Matrix2/data/brosAttacks.json` is the source of truth. It owns the
technique ID, school, participants, source event, lore text, risks, status, and
`drill` steps. The Foundry module reads generated JavaScript:

```text
data/brosAttacks.json
        ↓  cd Reputation-Matrix2 && python3 tools/sync_bros_attacks.py
Foundry/bros_attacks/bros-definitions.js      # generated; module runtime
 data/brosAttacks.schools.json                # generated; shop/training-yard summary
```

Do **not** add, rename, or edit a technique directly in `bros-definitions.js`.
The banner at the top of that file is literal. If a technique is not present in
`data/brosAttacks.json`, it does not exist for the archive and must not be added
to Foundry as a one-off.

### Current playable techniques

The README previously listed only the first two techniques. The current synced
module exposes all playable records with a `drill` block:

| id | name | school | partners | source event |
|---|---|---|---|---|
| `support_fire_bros_attack` | Support Fire Bros Attack | Support Fire | Green T + Remi | `shadowfell_birthday_trap_tanuki` |
| `chop_bros_attack` | Chop Bros | Clearing | Hjumpik Deldkur + Toad Lee | `feyward_chop_bros_soul_ring_and_the_guard_with_no_name` |
| `goblin_alchemy_bros_attack` | Goblin Alchemy Bros Attack | Clearing | Markop + Archie Miser | `session_2_ravencreek_to_swiftsoul` |
| `astral_portal_creation_bros_attack` | Astral Portal Creation Bros Attack | Lift and Carry | Archie Miser + The Oracle | `the_shadeward_ritual` |
| `held_line_bros_attack` | Held Line | Shieldwork | Waluigi + Hjumpik | `the_feyward_revel_crisis_poison_plants_and_frozen_diplomacy` |
| `split_attention_bros_attack` | Split Attention | Misdirection | Waluigi + Wario | `session_1_dragon_mountain` |

The partner display names are resolved by `tools/sync_bros_attacks.py` from
`data/characters.json` plus a small manual table for legitimate non-page IDs.
That prevents raw slugs such as `remi_akamatsu_full_backstory` from appearing
in the module.

---

## Installation and update procedure

1. Copy `Reputation-Matrix2/Foundry/bros_attacks/` to the Foundry user data
   folder under `Data/modules/bros_attacks/`.
2. Start or restart Foundry.
3. Enable **Bros. Attacks Combo System** in the world.
4. Confirm the module description shows version `3.0.0` and Foundry v14
   compatibility.
5. Open a scene with the relevant actors and use the **🤝 BROS** launcher.

When the archive changes:

```bash
cd Reputation-Matrix2
python3 tools/sync_bros_attacks.py --check   # fails if generated files are stale
python3 tools/sync_bros_attacks.py           # rewrites generated consumers
node tools/tests/test_bros_discovery.mjs     # regression test for discovery/badges
```

If `--check` fails, regenerate and commit the data source and generated files
together. Do not commit a generated diff with no source-data change unless the
sync script itself changed.

---

## Difficulty tiers

Difficulty is a world setting. The GM can set it in **Configure Settings →
Bros. Attacks → Bros Attack difficulty**, or from the buttons at the top of the
🤝 BROS window. Players can see the selected tier; they can change it only if
**Players may pick the difficulty** is enabled.

| tier | energy each | bonus to combined total | seconds per step | mistakes allowed | design note |
|---|---:|---:|---:|---:|---|
| 🟢 Easy | 1 | +0 | 10 | 3 | The original drill. Wide zones, forgiving timing, safest for first table use. |
| 🟡 Medium | 1 | +2 | 8 | 2 | Same energy price, tighter execution, small payoff. |
| 🔴 Hard | 2 | +5 | 6 | 1 | Spends the whole personal pool. One hard attempt per short rest unless a kit pays. |

The code derives Medium and Hard from the Easy baseline: zone widths shrink,
sweeps accelerate, tap windows shorten, and charge bands tighten. Hard clamps at
minimum playable values: no target zone below 5%, no tap window below 180ms,
and no impossible charge band.

Difficulty does not rewrite the fiction. Chop Bros is still a lift and chop;
Support Fire is still a sightline and call. Difficulty changes cost, timing,
and payoff only.

---

## Bros Energy and payment

Each actor has `flags.bros_attacks.energy`, defaulting to `2` when absent. A
successful paid attempt spends the selected tier's energy cost from **each**
named participant. The module listens for Foundry's dnd5e rest hook and restores
Bros Energy on a short rest.

Payment order:

1. If either partner carries an item with `flags.waluipedia.brosAttack` matching
   the technique ID and `system.quantity > 0`, the module consumes that item.
2. If no matching item exists, the module spends Bros Energy.
3. If a partner lacks enough energy for the selected difficulty, the module
   warns and the attempt does not begin.

A kit covers the attempt at any difficulty. That is deliberate: the purchased
object buys the prepared performance, while the chosen difficulty still makes
the drill harder and changes the bonus.

### GM item controls

| API / setting | Use |
|---|---|
| `game.brosAttacks.setItemCount(actor, attackId, qty)` | Set the quantity of a matching kit already on an actor. `0` deletes it; returns `null` if the actor has no such kit. |
| `game.brosAttacks.difficulties` | Inspect the live tier table for macros or debugging. |
| **Players can see Bros items** | When disabled, non-GMs see no kit rows, quantities, or cost hints. The attack card only shows the energy cost. |

Items are authored in `data/shop-items/items_bros.js` and converted by the hub
or Foundry exporters. A kit should carry the technique ID in `brosAttack` so the
exporter can stamp `flags.waluipedia.brosAttack` without guessing from the name.

---

## Discovery ledger and badges

The discovery layer is implemented by `bros-discovery.js`; badges are handled by
`bros-badges.js`. Discovery is pair-specific and order-insensitive: Hjumpik +
Toad Lee is the same pair as Toad Lee + Hjumpik.

The intended rhythm is:

1. The pair tries the idea and fails for a concrete reason.
2. The GM logs the failure.
3. The pair tries again and fails differently.
4. The GM logs the second failure.
5. The pair lands it, names the move, and the GM logs discovery.
6. Both actors receive the learned flag for that technique.
7. Badge hooks award achievements such as first discovery or hard-way discovery.

Useful console helpers:

```js
game.brosAttacks.discovery.logFailure(actorAId, actorBId, attackId, "what went wrong")
game.brosAttacks.discovery.logDiscovery(actorAId, actorBId, attackId, "the name players gave it")
game.brosAttacks.discovery.pairKnows(actorAId, actorBId, attackId)
game.brosAttacks.discovery.strikesAgainst(actorAId, actorBId, attackId)
game.brosAttacks.discovery.undoLastAttempt(actorAId, actorBId, attackId)
```

A discovery with no meaningful prior failures is refused. A failure with no
stated reason is refused. This keeps the feature from becoming a toggle the GM
flips because the UI wants content.

---

## Drill input model

The module intentionally uses simple keys and clicks. The difficulty is in the
timing, not in interpreting physical gestures through a browser canvas.

| gesture | keys | challenge type | typical fiction |
|---|---|---|---|
| `up` | `↑` or `W` | moving target zone | lift, raise, start motion |
| `down` | `↓` or `S` | moving target zone | chop, brace, settle |
| `right` | `→` or `D` | moving target zone | advance, call timing, shift line |
| `aim` | `Space` | charge meter | steady, hold, align |
| `tap` | `Enter` | reaction window | fire, release, confirm |

While the overlay is open, those keys are blocked from Foundry's own hotkeys so
arrow keys and WASD do not move a token underneath the drill. Every step has a
countdown. A timeout counts as one mistake. Failure closes automatically rather
than trapping players in a dead overlay.

---

## File layout

| file | purpose | edit policy |
|---|---|---|
| `module.json` | Foundry manifest, load order, v14 compatibility | hand-edit when module metadata changes |
| `bros-attacks.js` | runtime window, payment, difficulty, drill scoring, public API | hand-edit carefully; run the discovery test after changes |
| `bros-definitions.js` | generated `BROS_SCHOOLS` and `BROS_DEFINITIONS` | **do not hand-edit** |
| `bros-discovery.js` | pair-specific discovery ledger and helper API | hand-edit carefully; covered by `test_bros_discovery.mjs` |
| `bros-badges.js` | badge hooks and awards | hand-edit with discovery tests |
| `bros-attacks.css` | CSS not injected by the app class | hand-edit; keep selectors module-scoped |
| `templates/` | legacy / support Handlebars templates | edit only when a renderer still consumes them |
| `lang/en.json` | localizable strings | hand-edit strings only |

---

## Adding a new technique

1. Confirm the table actually produced the cooperative technique. Merely having
two people in the same event is not enough.
2. Add one record to `data/brosAttacks.json` with a stable `id`, school,
participants, source event, description, risks, status, Waluigi note, and a
`drill` block.
3. Every drill step needs: `actor` (`A` or `B`), `title`, `instruction`,
`gesture` (`up`, `down`, `right`, `aim`, `tap`), and `icon`.
4. Run `python3 tools/sync_bros_attacks.py --check`; if it fails because the
outputs are stale, run the sync script without `--check`.
5. Run `node tools/tests/test_bros_discovery.mjs`.
6. If the technique has a purchasable kit, add or update a shop item in
`data/shop-items/items_bros.js` and ensure the item's `brosAttack` matches the
technique ID exactly.
7. If a static Foundry feat export is required, update
`tools/foundry/bros-attacks/` from the same source. Do not let the feat export
become a second source of truth.
8. In the PR, list the source event and the command outputs.

---

## Troubleshooting

### The BROS button does not appear

Confirm the folder name is exactly `bros_attacks`, the module is enabled for the
world, and Foundry has been restarted after copying files. Check the browser
console for a manifest/load-order error.

### A technique is in the archive but not in Foundry

Only attacks with a valid `drill` block are emitted to `bros-definitions.js`.
Run `cd Reputation-Matrix2 && python3 tools/sync_bros_attacks.py --check`. If it
reports stale output, regenerate. If it reports validation problems, fix the
source record rather than the generated file.

### An actor cannot pay

Check the selected difficulty, `flags.bros_attacks.energy`, and whether a
matching kit exists with `flags.waluipedia.brosAttack === attackId`. Hard costs
2 energy each, so a character at 1 energy cannot start a hard attempt without a
kit.

### A kit exists but players should not know

Disable **Players can see Bros items**. GMs still see item rows and quantities;
players see only the energy economy until the GM reveals or uses the kit.

### Discovery did not stick

Use `pairKnows()` in the console. If it is false, verify the actor IDs, the
attack ID, and that two meaningful failures were logged before discovery. The
helper refuses empty reasons and premature successes by design.

### The drill catches movement keys

That is intentional while the overlay is focused. It prevents Foundry token
movement or map panning from firing under the mini-game.

---

## Related systems

- `Reputation-Matrix2/data/brosAttacks.json` — canon source of truth
- `Reputation-Matrix2/tools/sync_bros_attacks.py` — generated consumers and stale-output check
- `Reputation-Matrix2/data/brosAttacks.schools.json` — generated shop/training-yard summary
- `Reputation-Matrix2/data/shop-items/items_bros.js` — purchasable kits and support items
- `Reputation-Matrix2/tools/generate_bros_items.py` — quarantined draft generator, not canon output
- `Reputation-Matrix2/tools/tests/test_bros_discovery.mjs` — discovery/badge regression test
- `Reputation-Matrix2/tools/foundry/bros-attacks/` — static feat exports for import
- `Reputation-Matrix2/tools/hub/hubcore/foundry.py` — writes `flags.waluipedia` consumed by this module
