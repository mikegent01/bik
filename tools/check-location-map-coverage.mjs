#!/usr/bin/env node
/* Location ↔ map-pin coverage audit.

   Every location article in data/locations.json should be able to show its reader
   where the place sits on a painted tactical sheet. The link is explicit: a POI in
   Reputation-Matrix2/map-data/*-pois.js carries `articleId` (or the legacy
   `locationId`). This tool mirrors the resolver index.html builds at runtime
   (buildLocPinIndex) and prints what the map still owes the archive.

   Usage:
     node tools/check-location-map-coverage.mjs            # advisory table, exit 0
     node tools/check-location-map-coverage.mjs --strict   # exit 1 while anything is unplotted
     node tools/check-location-map-coverage.mjs --json     # machine-readable

   Advisory by design: an unplotted location is a worklist entry, not a broken build
   (see docs/worklists/LOCATION_MAP_COVERAGE.md). --strict exists for the day the
   queue is empty.
*/
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { MAP_DATA } from '../Reputation-Matrix2/data/maps/map-data.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const LOCATIONS = resolve(HERE, '../Reputation-Matrix2/data/locations.json');

const SPECIALS = {
  poi_mk_castle: 'peachs_castle',
  poi_mk_toadtown: 'toad_town',
  poi_mk_bramblehaven: 'bramblehaven',
  poi_mk_fawful_lab: 'fawful_fortress',
  poi_mp_warp_pipe_junction: 'warp_pipe_junction',
};

const locations = JSON.parse(readFileSync(LOCATIONS, 'utf8'));

/* articleId -> [{mapId, mapName, group, poiId, poiName, x, y}] */
const pins = new Map();
const dangling = new Set();
const knownIds = new Set(locations.map(l => l.id));

for (const [mapId, rec] of Object.entries(MAP_DATA)) {
  for (const poi of rec.pointsOfInterest || []) {
    if (!Number.isFinite(poi?.x) || !Number.isFinite(poi?.y)) continue;
    const ids = [...new Set([].concat(poi.articleId || [], poi.locationId || [], SPECIALS[poi.id] || []))];
    for (const id of ids) {
      if (!knownIds.has(id)) { dangling.add(`${mapId}:${poi.id} -> ${id}`); continue; }
      const key = id;
      const list = pins.get(key) || [];
      if (!list.some(e => e.poiId === poi.id)) {
        list.push({ mapId, mapName: rec.name || mapId, group: rec.group || '', poiId: poi.id, poiName: poi.name || '', x: poi.x, y: poi.y });
      }
      pins.set(key, list);
    }
  }
}

const plotted = [];
const unplotted = [];
for (const loc of locations) {
  const hits = pins.get(loc.id);
  if (hits && hits.length) plotted.push({ id: loc.id, name: loc.name, region: loc.region || '', pins: hits });
  else unplotted.push({ id: loc.id, name: loc.name, region: loc.region || '' });
}

const args = process.argv.slice(2);
if (args.includes('--json')) {
  console.log(JSON.stringify({ total: locations.length, plotted: plotted.length, unplotted: unplotted.length, dangling: [...dangling], plotted, unplotted }, null, 2));
} else {
  console.log(`Location ↔ map-pin coverage — ${plotted.length}/${locations.length} location articles show a pin\n`);
  console.log('PLOTTED');
  for (const p of plotted.sort((a, b) => a.name.localeCompare(b.name))) {
    const first = p.pins[0];
    const more = p.pins.length > 1 ? ` (+${p.pins.length - 1} sheet${p.pins.length > 2 ? 's' : ''})` : '';
    console.log(`  ${p.id.padEnd(42)} ${first.mapName.padEnd(26)} ${first.poiName.padEnd(42)} @${first.x},${first.y}${more}`);
  }
  console.log(`\nUNPLOTTED — the map owes these ${unplotted.length} articles a pin (see docs/worklists/LOCATION_MAP_COVERAGE.md)`);
  for (const u of unplotted.sort((a, b) => a.id.localeCompare(b.id))) {
    console.log(`  ${u.id.padEnd(42)} ${String(u.name).padEnd(44)} ${String(u.region).slice(0, 62)}`);
  }
  if (dangling.size) {
    console.log(`\nDANGLING articleId (POI points at an id with no location record) — fix the POI or file the record:`);
    for (const d of [...dangling].sort()) console.log('  ' + d);
  }
}

if (args.includes('--strict') && (unplotted.length || dangling.size)) process.exit(1);
