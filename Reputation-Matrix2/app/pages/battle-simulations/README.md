# Battle Simulations

Standalone, direct-linked action-command encounters that convert a playable opening scene into starting damage and conditions for a tabletop battle.

## Routes

- Hub: `app/pages/battle-simulations/index.html`
- Encounter 01: `app/pages/battle-simulations/archie-vs-scorncrow.html`

Both pages load directly and do not require the Waluipedia SPA route to initialize.

## Files

| File | Role |
|---|---|
| `index.html` | Player-link hub and saved-result summary |
| `hub.js` | Link copying and local last-result restoration |
| `archie-vs-scorncrow.html` | Encounter-specific accessible shell and HUD |
| `archie-vs-scorncrow.js` | Combatants, sprite groups, seven challenge definitions, effects, and result tiers |
| `battle-engine.js` | Reusable QTE lifecycle, input normalization, timing, state, pause/mute, persistence, and results |
| `battle-simulations.css` | Shared hub, arena, QTE, responsive control, result, and reduced-motion presentation |

## Input contract

The engine normalizes all supported controls into five tokens:

```text
up · down · left · right · action
```

- Keyboard: arrows/WASD plus Space/Enter.
- Pointer: movement inside the arena pilots the player sprite; click/tap produces `action`; drag/swipe produces a direction.
- Touch: drag to pilot, swipe for directional prompts, or use the persistent d-pad and ACT button.

Pause uses P or Escape. Browser visibility loss pauses an active run.

## Challenge types

The shared engine currently supports:

- `direction` — one accepted directional gesture;
- `pilot` — free movement through ordered gates with collision hazards;
- `sequence` — an ordered direction/action chain with a mistake limit;
- `timing` — one action against a moving success zone;
- `charge` — hold and release inside a configured charge band, with overcharge failure;
- `reaction` — a short direction window that can fail immediately on a wrong response.

Each challenge supplies duration, copy, animation groups, success/failure effects, and recovery timing. Effects can be plain objects or functions of challenge detail and battle state.

```js
{
  id: 'example-command',
  type: 'direction',
  title: 'Fly upward!',
  instruction: 'Swipe up or press Up Arrow / W.',
  accept: ['up'],
  duration: 2200,
  success: { scornDamage: 12 },
  failure: { archieDamage: 8, nimbusDamage: 15 }
}
```

## Battle state

The first encounter tracks:

- Archie HP;
- Scorncrow HP;
- Storm Nimbus stability;
- successful commands;
- missed commands;
- per-challenge outcomes;
- mounted/fallen state;
- knockout state.

Nimbus reaching zero ends the opening in a dedicated falling branch. Archie HP reaching zero ends it in a knockout branch. Otherwise, the encounter configuration maps performance and damage to advantage, contested, or enemy-advantage results.

The result card reports exact starting damage and status for both combatants plus Nimbus stability. A copy button formats those values for the GM.

## Persistence

The current encounter writes its last result to browser-local storage:

```text
waluipedia:battle-sim:archie-vs-scorncrow:last-result:v1
```

The hub reads that record to show the latest local outcome. No battle state is sent to a server.

## Sprite animation

Encounter configuration maps semantic animation names to split pose files in:

```text
portraits/player/sprite-sheets/poses/<character>/
```

The engine only knows semantic names such as `mounted`, `charge`, `attack`, or `thorn`. A new encounter can use different characters and poses without changing the animation loop.

## Adding an encounter

1. Create a direct-load HTML shell using the existing `data-*` engine hooks.
2. Add an encounter module that imports `BattleSimulation`.
3. Define combatant maxima, starting position, animation groups, challenges, a unique storage key, and `resultFor(state)`.
4. Instantiate the engine on the battle root.
5. Add a card and direct-copy button to the hub.
6. Test keyboard, pointer, touch/swipe, pause, mute, reduced motion, restart, success, partial, fall, and KO paths.
7. Confirm every relative sprite/media path from the new HTML URL.

Keep encounter prose and balance in the encounter module. Add input mechanics or lifecycle behavior to `battle-engine.js` only when they are reusable.

## Validation

From `Reputation-Matrix2/`:

```bash
node --check app/pages/battle-simulations/battle-engine.js
node --check app/pages/battle-simulations/archie-vs-scorncrow.js
node --check app/pages/battle-simulations/hub.js
npm run build
```

The broader Vite dependency scan currently reports an unrelated pre-existing `const dayOfWeek` assignment in `app/pages/religion/religion.js` during dev-server optimization. The battle modules themselves parse and load independently.
