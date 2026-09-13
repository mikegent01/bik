#!/usr/bin/env node
/* Smoke test for the location → tactical-map preview panel.

   index.html is a browser app, but the preview is pure string building over
   MAP_DATA, so the resolver and renderer can be lifted out of the page and run
   against the real data here. Catches: resolver regressions (a location losing
   its pin), template breakage, and deep-link routes that no longer parse.

   Usage: node tools/tests/test-location-map-preview.mjs
*/
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { MAP_DATA } from '../../Reputation-Matrix2/data/maps/map-data.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(resolve(HERE, '../../index.html'), 'utf8');
const LOCATIONS = JSON.parse(readFileSync(resolve(HERE, '../../Reputation-Matrix2/data/locations.json'), 'utf8'));

const START = '/* ===== Location articles ↔ map pins';
const END = 'function atlasViewBoxFor';
const a = html.indexOf(START);
const b = html.indexOf(END);
if (a < 0 || b < 0 || b < a) {
  console.error('FAIL  could not locate the location-pin block in index.html');
  process.exit(1);
}
const src = html.slice(a, b);

const esc = v => String(v ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
const assetPath = s => 'Reputation-Matrix2/' + String(s || '').replace(/^\.\//, '');
const byId = new Map(LOCATIONS.map(l => [l.id, l]));
const displayName = item => item?.name || item?.title || '';

const api = new Function('ATLAS_MAPS', 'DATA', 'esc', 'assetPath', 'displayName',
  `${src}\nreturn { buildLocPinIndex, locPinsFor, locationMapPreview, nationForMapId, locMapAtlasRoute, LOC_PIN_SPECIALS };`
)(MAP_DATA, { locations: LOCATIONS }, esc, assetPath, displayName);

let pass = 0, fail = 0;
const ok = (cond, label) => { if (cond) { pass++; console.log('  ok   ' + label); } else { fail++; console.log('  FAIL ' + label); } };

console.log('location map preview — resolver');
api.buildLocPinIndex();
ok(api.locPinsFor('shadow_estate').length === 1, 'shadow_estate resolves to exactly one pin');
ok(api.locPinsFor('shadow_estate')[0].mapId === 'midlands_full', 'shadow_estate sits on the Midlands sheet');
ok(api.locPinsFor('peachs_castle')[0].poi.id === 'poi_mk_castle', 'legacy special still resolves peachs_castle');
ok(api.locPinsFor('ruins_of_the_mushroom_kingdom_capitol').length === 1, 'duplicate-capitol pair shares one pin');
ok(api.locPinsFor('mount_ebott').length === 0, 'mount_ebott honestly reports no pin');
ok(api.locPinsFor('the_core_underground').length === 0, 'no fuzzy match resurrects the quantum-core false positive');
ok(api.locPinsFor('overgrown_library').length === 0, 'overgrown_library has no separate overland pin');

console.log('location map preview — rendered panel');
const plotted = api.locationMapPreview(byId.get('shadow_estate'), 'locations');
ok(plotted.includes('class="locmap"'), 'plotted location renders the preview shell');
ok(plotted.includes('data-map="midlands_full"'), 'panel carries its sheet id');
/* 72.31, not 72.9: the estate was filed in the middle of Aona's Scorn and was
   moved ashore by tools/fix-poi-placement.py. Read the coordinate from the
   data rather than restating it, so the next placement fix does not fail a
   test that is only meant to prove the panel carries the pin through. */
const estatePin = api.locPinsFor('shadow_estate')[0].poi;
ok(plotted.includes(`data-x="${estatePin.x}"`), 'panel carries the pin coordinate');
ok(plotted.includes('The Shadow Estate'), 'panel labels the pin');
ok(plotted.includes('#/atlas/regal_empire/midlands_full/'), 'deep link routes into the regal atlas with sheet + pin');
ok(api.locationMapPreview(byId.get('mount_ebott'), 'locations').includes('Not on the tactical map yet'), 'unplotted location gets the honest dashed panel');
ok(api.locationMapPreview(byId.get('mount_ebott'), 'locations').includes('The Old World'), 'unplotted panel quotes the filed region');
const libraryPreview = api.locationMapPreview(byId.get('overgrown_library'), 'locations');
ok(libraryPreview.includes('inside The Overgrown Manor') && libraryPreview.includes('parent pin, not a separate overland marker'), 'interior sublocations inherit their parent map pin');
ok(api.locationMapPreview(byId.get('mario') || { id: 'mario', name: 'Mario' }, 'characters') === '', 'non-location articles render nothing');

console.log('location map preview — deep links');
for (const id of ['shadow_estate', 'star_fountain', 'ruins_of_rohan_hillfort', 'block_farm_village_connectopia']) {
  const pin = api.locPinsFor(id)[0];
  ok(!!pin && !!MAP_DATA[pin.mapId], `${id}: pinned sheet exists in MAP_DATA`);
  if (pin) {
    const route = api.locMapAtlasRoute(pin);
    const parts = route.replace('#/atlas/', '').split('/');
    ok(parts.length === 3 && !!MAP_DATA[parts[1]], `${id}: route #/atlas/nation/map/poi parses (${route})`);
    ok((MAP_DATA[parts[1]].pointsOfInterest || []).some(p => p.id === parts[2]), `${id}: routed pin id exists on that sheet`);
  }
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
