# Map routes and Mushroom Kingdom POI review

**Status:** implementation complete on `arena/01a0dc1e-bik` (PR #82)

This work adds a reader-facing transport overlay to the Cartography Desk and
cleans up the Mushroom Kingdom survey without changing the painted map's
coordinates. Routes are deliberately derived from stable POI fields and kept
separate from the province census: a route is a travel suggestion, not a
political border.

## Acceptance checks

- [x] Open `#/maps/mushroom_kingdom_full` without a console error.
- [x] Toggle transport routes without changing POI selection, zoom, or province
      borders.
- [x] Route mode is deterministic and bounded; no route generation may grow
      with every render or timer tick.
- [x] Industrial hubs can show rail, ports can show water routes, and ordinary
      connections can show roads or trails.
- [x] Every Mushroom Kingdom POI has a stable id, name, type, coordinates,
      faction, and numeric map lens values.
- [x] No duplicate POIs or dangling location article ids remain in the
      Mushroom Kingdom survey.
- [x] Raventree Manor is filed on the Midlands sheet and its location record
      does not describe it as part of the Mushroom Kingdom.
- [x] Province census and build checks remain green after the cleanup.

## Source of truth

- POIs: `Reputation-Matrix2/map-data/*-pois.js`
- Map catalogue: `Reputation-Matrix2/data/maps/map-data.js`
- Location records: `Reputation-Matrix2/data/locations.json`
- Province census: `Reputation-Matrix2/app/pages/maps/map-provinces.js` and
  `Reputation-Matrix2/data/support/politics-data.js`
- Transport rules and explicit links: `Reputation-Matrix2/data/maps/map-routes.js`

Generated province snapshots must be regenerated with
`node tools/build-province-census.mjs`; they are never hand-edited.

## Validation run

```bash
node tools/check-map-integrity.mjs
node tools/tests/test-map-routes.mjs
node tools/tests/atlas-routes-smoke.mjs
node tools/tests/test-map-census.mjs
node tools/check-province-census.mjs
npm run build --prefix Reputation-Matrix2
```

The all-catalogue integrity mode remains advisory for legacy records outside
this review; the default command is strict for the Mushroom Kingdom region
maps.
