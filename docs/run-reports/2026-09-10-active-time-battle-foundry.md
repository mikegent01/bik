# Run report — Foundry Active Time Battle module

Date: 2026-09-10
Branch: `arena/01a08916-bik`

## Files

CREATED
  Reputation-Matrix2/Foundry/active_time_battle/module.json — new Foundry module manifest for `active-time-battle`, v1.0.0, Foundry v12–v13 compatibility, script/style/lang wiring.
  Reputation-Matrix2/Foundry/active_time_battle/scripts/active-time-battle.js — new ATB runtime: real-time gauges, initiative-based opening readiness and fill speed, READY queue, GM-authoritative sockets, combat tracker controls, auto-activation, spotlight timers, idle delay/guard handling, and ATB lap round advancement.
  Reputation-Matrix2/Foundry/active_time_battle/styles/active-time-battle.css — new combat-tracker panel, ATB meters, ready/active/waiting combatant states, and control styling.
  Reputation-Matrix2/Foundry/active_time_battle/lang/en.json — English labels for tracker controls.
  Reputation-Matrix2/Foundry/active_time_battle/README.md — install guide, table rule, inactivity solution, recommended settings, tracker controls, and Foundry/system notes.
  tools/tests/test-active-time-battle-module.mjs — static smoke test for the module manifest, script syntax, settings, socket controls, initiative mechanics, idle timeout mechanics, CSS meters, and README explanation.
  docs/run-reports/2026-09-10-active-time-battle-foundry.md — this run report.

EDITED
  tools/check-all.py — added the Foundry ATB module smoke test to the Node check bundle.

GENERATED
  None.

## Events filed

No events filed this run.

## XP awarded

No XP awarded this run.

## Verification

| Command | Result |
|---|---|
| `node --check Reputation-Matrix2/Foundry/active_time_battle/scripts/active-time-battle.js` | PASS |
| `node tools/tests/test-active-time-battle-module.mjs` | PASS — 30 passed, 0 failed |
| `python3 tools/check-all.py` | PASS — all requested checks passed, including new Foundry ATB module check |
| `git diff --check` | PASS |

## What changed for the table

- Combatants now have ATB gauges from 0 to 100.
- Initiative matters twice: high initiative starts closer to READY and fills faster relative to the encounter average.
- READY actors can be auto-activated, or their owners/GM can click Activate.
- Active turns have a configurable spotlight timer.
- Idle actors do not stop the fight: timeout policy can delay them, guard/dodge them, or escalate from delay to guard after repeated idle strikes.
- Other gauges keep filling during turns by default, so people are still watching their own timers instead of waiting through a fixed queue.
- Ready overflow is capped so a player cannot leave for ten minutes and return with infinite priority.

## Not done / open

- This is a Foundry module implementation and static repository smoke test; I did not run it inside a live Foundry world in this sandbox.
- The timeout Guard / Dodge result is announced and advances ATB state, but it does not apply a system-specific dodge effect because the module is system-agnostic.
- I did not remove or replace the existing `team-initiative` module; this ships as a separate ATB module so the GM can choose which initiative style to enable.
