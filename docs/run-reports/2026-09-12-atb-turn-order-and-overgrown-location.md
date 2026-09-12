# Run report — ATB turn-order bridge and Overgrown Library parent pin

Date: 2026-09-12
Branch: `arena/01a08916-bik`

## 1. Files created or edited

CREATED

- `docs/run-reports/2026-09-12-atb-turn-order-and-overgrown-location.md` — this report.

EDITED

- `Reputation-Matrix2/Foundry/active_time_battle/scripts/active-time-battle.js`
  - Keeps player active-turn timers live, but defaults **Pause gauges on player turns** back on so a slow player choice does not load every combatant to READY in the background.
  - Keeps **Pause ATB on NPC turns** on by default so NPC/GM-controlled turns do not race the timer.
  - Adds `nativeNpcTurnEndBridge`, default on: if an automation advances Foundry's native turn during an active NPC turn, ATB translates that native next-turn attempt into **End ATB Turn** for the active NPC.
  - Adds Foundry turn-order tie-breaks to READY sorting and queue sorting, so automation sees the active NPC in the normal Foundry turn pointer and ATB resolves ties in a way that matches the tracker order.
- `Reputation-Matrix2/Foundry/active_time_battle/README.md`
  - Documents the refined timing rule: players worry about their live timer, but other gauges do not pile up behind them; NPCs do not worry about timer pressure.
  - Documents the native NPC next-turn bridge for automation modules.
- `Reputation-Matrix2/Foundry/active_time_battle/module.json`
  - Bumps the module version to `1.1.3`.
- `tools/tests/test-active-time-battle-module.mjs`
  - Adds smoke coverage for live player timers with paused background gauges, native NPC next-turn bridging, and Foundry turn-order tie-breaks.
- `Reputation-Matrix2/data/locations.json`
  - Reclassifies `overgrown_library` as an interior sublocation of `overgrown_manor` instead of a separate overland destination.
  - Adds `parentLocation: "overgrown_manor"` and clarifies in the summary/prose why the article remains separate while the map location is shared.
- `Reputation-Matrix2/map-data/midlands-pois.js`
  - Removes the duplicate overland POI for `overgrown_library`; the library now inherits the Overgrown Manor pin.
- `index.html`
  - Makes location map previews inherit a parent location pin when a sublocation has `parentLocation` but no direct pin.
  - Labels inherited previews as parent pins rather than pretending they are separate overland markers.
- `tools/check-location-map-coverage.mjs`
  - Counts and reports parent-pin inheritance for sublocations.
- `tools/tests/test-location-map-preview.mjs`
  - Verifies `overgrown_library` has no separate overland pin and inherits the Overgrown Manor map pin.
- `tools/tests/test-planar-map.mjs`
  - Updates the Feyward pin expectations so the library is not treated as a separate overland POI.
- `docs/worklists/LOCATION_MAP_COVERAGE.md`
  - Updates the Overgrown Library map note to say it uses the Overgrown Manor parent pin.
- `Reputation-Matrix2/data/provinceCensus.json`
  - Regenerated with `node tools/build-province-census.mjs` after removing the duplicate map POI.

GENERATED

- `Reputation-Matrix2/data/provinceCensus.json` — regenerated snapshot from the map/province model.

## 2. Behavior changed

- Player turns: the active player's five-minute timer keeps counting down, but other gauges pause by default. This prevents the "one slow player makes everyone loaded at once" burst.
- NPC turns: ATB progression and the NPC timer are held by default while the GM or automation resolves the NPC. NPCs do not have to worry about the clock.
- Automation bridge: an automated NPC module that calls Foundry's native next-turn while an NPC is active now ends that NPC's ATB turn instead of fighting the ATB guardrail.
- Turn order: ATB still owns activation, but READY/queue tie-breaks now respect Foundry's displayed turn order after ATB/initiative sorting, and activation still points Foundry's active `combat.turn` at the active combatant.
- Overgrown Library: remains a useful article because enough happened there, but it is now explicitly an interior sublocation of the Overgrown Manor and no longer has its own separate world-map marker.

## 3. Events filed

No story event filed this run.

## 4. XP awarded

No XP awarded this run.

## 5. Verification

| Command | Result |
|---|---|
| `node tools/tests/test-active-time-battle-module.mjs` | PASS — 64 passed, 0 failed |
| `node tools/tests/test-location-map-preview.mjs` | PASS — 28 passed, 0 failed |
| `node tools/tests/test-planar-map.mjs` | PASS — 50 passed, 0 failed |
| `node tools/build-province-census.mjs --check` | PASS — filed snapshot matches model |
| `node tools/check-province-census.mjs` | PASS — 14 passed, 0 failed |
| `git diff --check` | PASS |
| `python3 tools/check-all.py` | PASS — all requested checks passed |

Note: `jsdom` was installed with `npm install jsdom@26.1.0 --no-save` so the existing map-lenses test could run; `node_modules/` is ignored and not committed.

## 6. Not done / open

- Not live-tested inside Foundry with the user's actual automation module. The bridge is static/smoke checked: native next-turn during an active NPC schedules ATB `endActiveTurn()` and blocks the raw native turn jump so gauges/laps stay coherent.
- The private/temp root `combat/` source remains absent and was not reintroduced.
