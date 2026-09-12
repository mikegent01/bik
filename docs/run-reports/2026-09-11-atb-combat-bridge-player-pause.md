# Run report — ATB player pause and external automation bridge

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
  - Documents the five-minute player decision window, NPC/default `90` second spotlight, player-turn gauge pause, and generic external automation API contract.
- `tools/tests/test-active-time-battle-module.mjs`
  - Extends the static smoke test to cover player five-minute turns, player-pause gauge behavior, and exported external automation bridge API.

GENERATED

- None.

## 2. Combat behavior changed

- Initiative still drives ATB readiness and speed.
- NPC/default turns keep the active-time clock moving and use a `90` second spotlight by default.
- Player-owned turns are called over automatically with the existing auto-activate flow, but now get `300` seconds by default.
- While a player-owned combatant is active, other ATB gauges pause by default. The active player's timer still counts down, so the table is fair without freezing forever.
- ATB now exposes the stable API needed by a private/local automation module: `isRunning`, `activeId`, `isPrimaryGM`, and `endTurn`.
- External automation should let ATB own initiative, resolve the NPC's actions, then call ATB's `endTurn()` API instead of native `nextTurn()`.
- No private automation source folder is committed; ATB continues operating through its own tracker controls when no external automation is installed.

## 3. Events filed

No story event filed this run.

## 4. XP awarded

No XP awarded this run.

## 5. Verification

| Command | Result |
|---|---|
| `node --check Reputation-Matrix2/Foundry/active_time_battle/scripts/active-time-battle.js` | PASS |
| `node tools/tests/test-active-time-battle-module.mjs` | PASS — 53 passed, 0 failed |
| `git diff --check` | PASS |
| `python3 tools/check-all.py` | PASS — all requested checks passed |

Note: `npm install jsdom@26.1.0 --no-save` was needed locally before `check-all.py`, because the map-lens test imports `jsdom` and this sandbox did not have it installed after reset.

## 6. Not done / open

- Not live-tested inside Foundry. The checks are static/smoke coverage; final feel still needs a live Foundry world with one GM client and at least one player-owned combatant.
- Direct edits to the private/temp automation folder were scrubbed before the branch was force-pushed; that source is not part of this git history.
- Not live-tested with a private external automation module after the scrub. The public ATB API is in place for that integration.
