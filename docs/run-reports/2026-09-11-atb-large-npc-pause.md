# Run report — ATB large initiatives, Foundry pause, and NPC-turn pause

Date: 2026-09-11
Branch: `arena/01a08916-bik`

## 1. Files created or edited

CREATED

- `docs/run-reports/2026-09-11-atb-large-npc-pause.md` — this report.

EDITED

- `Reputation-Matrix2/Foundry/active_time_battle/scripts/active-time-battle.js`
  - Adds Foundry global-pause awareness. When `game.paused` is true, ATB gauges, active timers, warnings, and elapsed-time accounting stop instead of jumping ahead on resume.
  - Changes default turn-pause behavior: NPC/GM-controlled active turns now pause other gauges and hold the NPC timer; player-owned active turns stay live by default so players feel time pressure.
  - Tracks active-turn elapsed time in an `activeElapsed` combat flag so manual ATB pause, Foundry pause, and NPC-turn pause do not consume timer time.
  - Adds `pauseOnNpcTurns` setting, default `true`.
  - Flips `pauseOnPlayerTurns` default to `false`; the setting remains available as an optional strict/old-style mode.
  - Adds large-encounter helpers and automatic Compact tracker mode at the configured threshold.
  - Coalesces tracker refreshes with `requestAnimationFrame` and suppresses full Foundry tracker renders during tick updates for better 50+ combatant handling.
  - Adds queue overflow text (`+N more in initiative`) instead of flooding the ATB panel.
- `Reputation-Matrix2/Foundry/active_time_battle/styles/active-time-battle.css`
  - Adds visual states for NPC-turn pause, Foundry pause, held timers, large encounters, and queue overflow.
- `Reputation-Matrix2/Foundry/active_time_battle/README.md`
  - Documents the new table rule: NPC turns pause/hold; player turns stay live; Foundry/ATB pause freezes everything.
  - Documents 50+ initiative support and the large encounter compact threshold.
- `Reputation-Matrix2/Foundry/active_time_battle/module.json`
  - Bumps the module version to `1.1.2` and updates the description.
- `tools/tests/test-active-time-battle-module.mjs`
  - Updates static smoke tests for NPC-turn pause, Foundry pause anchoring, 50+ compact-mode support, and the new README expectations.

GENERATED

- None.

## 2. Behavior changed

- Default NPC/GM turns now pause ATB gauge progression while the GM resolves the NPC.
- Default NPC/GM turns also hold the NPC timer; NPCs are not racing the clock unless the GM disables **Pause ATB on NPC turns**.
- Default player-owned turns remain live: the five-minute player timer counts down, and other gauges keep filling unless **Wait mode** or optional **Pause ATB on player turns** is enabled.
- Foundry's global pause now freezes the ATB clock and active timers, not just visual updates.
- Initiatives with about 50 or more combatants automatically compact the tracker and summarize overflow while keeping per-combatant gauges available.

## 3. Events filed

No story event filed this run.

## 4. XP awarded

No XP awarded this run.

## 5. Verification

| Command | Result |
|---|---|
| `node tools/tests/test-active-time-battle-module.mjs` | PASS — 60 passed, 0 failed |
| `git diff --check` | PASS |
| `python3 tools/check-all.py` | PASS — all requested checks passed |

## 6. Not done / open

- Not live-tested inside Foundry with an actual 50+ combatant combat. The implementation is static/smoke checked and written to reduce per-tick tracker rendering, but a live Foundry world should still confirm performance with the user's installed modules and browser.
- The private/temp `combat/` source remains absent and was not reintroduced.
