# Run report — ATB inline timer, no active-turn popup

Date: 2026-09-11
Branch: `arena/01a08916-bik`

## 1. Files created or edited

CREATED

- `docs/run-reports/2026-09-11-atb-inline-timer-no-popup.md` — this report.

EDITED

- `Reputation-Matrix2/Foundry/active_time_battle/scripts/active-time-battle.js`
  - Removed the active-turn `Dialog` popup path completely.
  - Adds an inline active-turn timer in the Combat Tracker ATB panel.
  - Adds a small client-side display ticker so the remaining time counts down visibly even while player-turn gauge pause is active.
  - Keeps the existing active turn timeout logic; only the presentation changed from popup to timer.
- `Reputation-Matrix2/Foundry/active_time_battle/styles/active-time-battle.css`
  - Adds styling for the inline active-turn countdown, remaining-time display, player/NPC state, and panel End ATB Turn button.
  - Removes the old active-dialog styling.
- `Reputation-Matrix2/Foundry/active_time_battle/module.json`
  - Bumps the module version to `1.1.1`.
- `Reputation-Matrix2/Foundry/active_time_battle/README.md`
  - Documents that active turns now use the inline countdown timer and no modal turn popup.
- `tools/tests/test-active-time-battle-module.mjs`
  - Adds smoke coverage proving active turns render through the inline timer path and the ATB script no longer contains `new Dialog`, `showActivePrompt`, or the old `atb-active-dialog` markup.

GENERATED

- None.

## 2. Combat behavior changed

- Starting an ATB turn no longer opens the blocking popup shown in the screenshot.
- The active combatant, remaining time, gauge-pause state, countdown bar, and End ATB Turn button now live in the Combat Tracker panel.
- Player-owned turns still get the five-minute timer and pause other gauges by default.
- NPC/default turns still use the shorter NPC timer and keep gauges moving unless Wait mode is enabled.

## 3. Events filed

No story event filed this run.

## 4. XP awarded

No XP awarded this run.

## 5. Verification

| Command | Result |
|---|---|
| `node tools/tests/test-active-time-battle-module.mjs` | PASS — 55 passed, 0 failed |
| `git diff --check` | PASS |
| `python3 tools/check-all.py` | PASS — all requested checks passed |

## 6. Not done / open

- Not live-tested inside Foundry. This is static/smoke checked; a live world should verify the tracker countdown placement with the user's exact sidebar layout.
- The private/temp `combat/` source remains absent from this branch and was not reintroduced.
