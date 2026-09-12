# Run report — ATB player pause and NPC combat automation bridge

Date: 2026-09-11
Branch: `arena/01a08916-bik`

## 1. Files created or edited

CREATED

- `docs/run-reports/2026-09-11-atb-combat-bridge-player-pause.md` — this report.

EDITED

- `Reputation-Matrix2/Foundry/active_time_battle/scripts/active-time-battle.js`
  - Adds separate NPC and player turn timers.
  - Defaults player-owned turns to `300` seconds / five minutes instead of the old shared `90` second spotlight.
  - Adds `pauseOnPlayerTurns`, so active player-owned turns pause other ATB gauges while NPC/default turns keep the clock moving.
  - Exposes `isRunning` and `activeId` through the ATB API so outside combat automation can hand completed NPC turns back to ATB safely.
  - Rejects API `endTurn` calls for a non-active combatant, preventing a bridge from ending the wrong turn.
- `Reputation-Matrix2/Foundry/active_time_battle/styles/active-time-battle.css`
  - Adds a visible player-pause panel state and “gauges paused” label.
- `Reputation-Matrix2/Foundry/active_time_battle/module.json`
  - Bumps the module to `1.1.0` and updates the description for the Baldur-style player pause behavior.
- `Reputation-Matrix2/Foundry/active_time_battle/README.md`
  - Documents the five-minute player decision window, NPC/default `90` second spotlight, player-turn gauge pause, and optional bridge to the temp `combat/` NPC automation module.
- `combat/scripts/automation.js`
  - When Active Time Battle owns initiative, completed automated NPC turns now call `game.modules.get("active-time-battle").api.endTurn(...)` instead of native `nextTurn()`, keeping ATB gauges/laps/idle strikes/player pauses synchronized.
  - If ATB is disabled or absent, the old native `nextTurn()` fallback remains.
- `combat/scripts/main.js`
  - When ATB is running, non-primary GM clients defer the NPC automation handoff to ATB's elected primary GM so multi-GM sessions do not double-run a called-over NPC.
- `tools/tests/test-active-time-battle-module.mjs`
  - Extends the static smoke test to cover player five-minute turns, player-pause gauge behavior, exported bridge API, and the optional temp-combat bridge when that folder is present.

GENERATED

- None.

## 2. Combat behavior changed

- Initiative still drives ATB readiness and speed.
- NPC/default turns keep the active-time clock moving and use a `90` second spotlight by default.
- Player-owned turns are called over automatically with the existing auto-activate flow, but now get `300` seconds by default.
- While a player-owned combatant is active, other ATB gauges pause by default. The active player's timer still counts down, so the table is fair without freezing forever.
- The temp `combat/` automation system can now run NPC turns under ATB control: ATB activates the NPC, the combat automation module performs the NPC turn, then hands control back to ATB's `endTurn()` API.
- If the temp `combat/` folder is removed later, ATB does not depend on it and continues operating through its own tracker controls.

## 3. Events filed

No story event filed this run.

## 4. XP awarded

No XP awarded this run.

## 5. Verification

| Command | Result |
|---|---|
| `node --check Reputation-Matrix2/Foundry/active_time_battle/scripts/active-time-battle.js` | PASS |
| `for f in combat/scripts/*.js; do node --check "$f" || exit 1; done` | PASS |
| `node tools/tests/test-active-time-battle-module.mjs` | PASS — 55 passed, 0 failed |
| `git diff --check` | PASS |
| `python3 tools/check-all.py` | PASS — all requested checks passed |

Note: `npm install jsdom@26.1.0 --no-save` was needed locally before `check-all.py`, because the map-lens test imports `jsdom` and this sandbox did not have it installed after reset.

## 6. Not done / open

- Not live-tested inside Foundry. The checks are static/smoke coverage; final feel still needs a live Foundry world with one GM client and at least one player-owned combatant.
- The `combat/` folder is treated as temporary reference/integration code. ATB now degrades safely if that folder or module is removed.
