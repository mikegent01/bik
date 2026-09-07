#!/usr/bin/env node
/* Planar map layers + cartography desk test.
 *
 * Covers three things: (1) every POI `plane` tag in the repo is a known
 * layer and the Raventree cluster tags are exactly right; (2) the #/maps
 * journey resolver in index.html (lifted out like test-location-map-preview
 * does) resolves the documented vectors — including the earliest-mention
 * tie-break; (3) buildJourney sorts, numbers, and layers stops correctly.
 *
 * Usage: node tools/tests/test-planar-map.mjs
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { MAP_DATA } from '../../Reputation-Matrix2/data/maps/map-data.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(resolve(HERE, '../../index.html'), 'utf8');
const LOCATIONS = JSON.parse(readFileSync(resolve(HERE, '../../Reputation-Matrix2/data/locations.json'), 'utf8'));
const EVENTS = JSON.parse(readFileSync(resolve(HERE, '../../Reputation-Matrix2/data/events.json'), 'utf8'));
const MONTHS = JSON.parse(readFileSync(resolve(HERE, '../../Reputation-Matrix2/data/calendarMonths.json'), 'utf8'));

let pass = 0, fail = 0;
const ok = (cond, label) => { if (cond) { pass++; console.log('  ok   ' + label); } else { fail++; console.log('  FAIL ' + label); } };

/* ---- 1. POI plane tags, straight from the map catalogue ---- */
console.log('planar layers — POI tags');
const PLANES = new Set(['material', 'shadow', 'fey', 'mirror']);
let tagged = 0, badEnum = [];
for (const [mapId, rec] of Object.entries(MAP_DATA)) {
  for (const poi of rec.pointsOfInterest || []) {
    if (poi.plane === undefined) continue;
    tagged++;
    if (!PLANES.has(poi.plane)) badEnum.push(`${mapId}:${poi.id}=${poi.plane}`);
  }
}
ok(badEnum.length === 0, `every plane tag is a known layer (${tagged} tagged pins)${badEnum.length ? ': ' + badEnum.join(', ') : ''}`);

const midlands = MAP_DATA.midlands_full.pointsOfInterest;
const planeOf = id => { const p = midlands.find(q => q.id === id); return p ? (p.plane || 'material') : null; };
const expectLayer = (ids, plane) => ids.every(id => planeOf(id) === plane);
ok(expectLayer(['poi_mid_shadow_estate', 'poi_mid_shadow_estate_gardens', 'poi_mid_mazebound_grove',
  'poi_mid_orange_deer_shrine', 'poi_mid_tymnas_cottage', 'poi_mid_skittering_grove'], 'shadow'),
  'the six Shadeward pins sit on the shadow layer');
ok(expectLayer(['poi_mid_overgrown_manor', 'poi_mid_overgrown_library', 'poi_mid_dreaming_tree_grove'], 'fey'),
  'the three Feyward pins sit on the fey layer');
ok(expectLayer(['poi_mid_deep_mirror', 'poi_mid_darius_sanctum', 'poi_mid_planar_sanctum_belfry'], 'mirror'),
  'the three Deep Mirror pins sit on the mirror layer');
ok(expectLayer(['poi_mid_raventree_manor', 'poi_mid_silent_grove', 'poi_mid_alpine_bank_raventree'], 'material'),
  'the Material anchor pins stay on the material layer');
const skit = midlands.find(p => p.id === 'poi_mid_skittering_grove');
ok(skit && skit.articleId === 'skittering_grove' && Number.isFinite(skit.x), 'skittering_grove pin filed with articleId + coordinates');

/* Every tagged non-material pin must point at a real location whose own
   filed plane agrees (locations.json carries the classifier verdicts). */
const locById = new Map(LOCATIONS.map(l => [l.id, l]));
let agree = 0, disagree = [];
for (const rec of Object.values(MAP_DATA)) {
  for (const poi of rec.pointsOfInterest || []) {
    const want = poi.plane || 'material';
    if (want === 'material') continue;
    const aids = [].concat(poi.articleId || [], poi.locationId || []);
    for (const aid of aids) {
      const loc = locById.get(aid);
      if (loc && loc.plane === want) agree++;
      else disagree.push(`${poi.id} [${want}] -> ${aid}${loc ? ' (article: ' + loc.plane + ')' : ' (no such location)'}`);
    }
  }
}
ok(disagree.length === 0 && agree > 0, `non-material pins agree with their articles (${agree} checked)${disagree.length ? ': ' + disagree.join('; ') : ''}`);

/* ---- 2. lift the resolver + journey code out of index.html ---- */
console.log('cartography desk — lifted resolver');
const PIN_START = '/* ===== Location articles ↔ map pins';
const MAPS_END = '/* ===== end tactical cartography desk ===== */';
const a = html.indexOf(PIN_START);
const b = html.indexOf(MAPS_END);
if (a < 0 || b < 0 || b < a) {
  console.error('FAIL  could not locate the maps-desk block in index.html');
  process.exit(1);
}
const src = html.slice(a, b);

/* parseYear/parseMonth/parseDay live outside the block; lift them too. */
const pa = html.indexOf('function parseYear(');
const pb = html.indexOf('function monthName(');
if (pa < 0 || pb < 0 || pb < pa) {
  console.error('FAIL  could not locate the date parsers in index.html');
  process.exit(1);
}
const parseSrc = html.slice(pa, pb);
const MONTH_ORD = {};
MONTHS.forEach(x => { if (x && x.name) MONTH_ORD[x.name.toLowerCase()] = x.ordinal; });
Object.assign(MONTH_ORD, { harvestside: 8, bloomtide: 4, faystyl: 5, frostmere: 11, snowfall: 12 });
const parseApi = new Function('MONTH_ORD', `${parseSrc}\nreturn { parseYear, parseMonth, parseDay };`)(MONTH_ORD);

const esc = v => String(v ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
const assetPath = s => 'x';
const displayName = item => item?.name || item?.title || '';
const DATA = { locations: LOCATIONS, events: EVENTS };

const api = new Function(
  'ATLAS_MAPS', 'DATA', 'esc', 'assetPath', 'displayName', 'parseYear', 'parseMonth', 'parseDay',
  `${src}\nreturn { mapsPoiPlane, mapsPlanesOnSheet, mapsMatchKey, mapsLocationIndex, resolveEventLocationId, mapsEventSortKey, buildJourney, MAPS_PLANES };`
)(MAP_DATA, DATA, esc, assetPath, displayName, parseApi.parseYear, parseApi.parseMonth, parseApi.parseDay);

const idx = api.mapsLocationIndex(LOCATIONS);
const R = field => api.resolveEventLocationId(field, idx);
ok(R('shadow_estate') === 'shadow_estate', 'rule 1: whole field is an id');
ok(R('mount_ebott / legion_embassy_old_world / gamma_high_command_spire') === 'mount_ebott', 'rule 2: first id token wins');
ok(R('Mushroom Kingdom — primarily Toad Town, Dimble Wood, Bowser\'s Castle, Peach\'s Castle') === 'toad_town',
  'earliest mention beats an exactly-tokenized later place (blorbs -> toad_town)');
ok(R('The overgrown grove beyond Tymnas\'s cottage, and the Skittering Grove inside the Scorncrow') === 'skittering_grove',
  'rule 5: full name standing in the field');
ok(R('Tymnas\'s Cottage / Hedge Maze') === 'tymnas_cottage_and_hedge_maze', 'rule 6: token is a full-word prefix of the name');
ok(R('The Vigilance; carried into Aegis Command by a prisoner') === 'vigilance', 'earliest of two in-field names wins');
ok(R('Ruins of Shadow Pass, within the borders of Mordor') === 'ruins_of_shadow_pass', 'compound names resolve whole');
ok(R('The False Meadow / Color-Tile Grid, Mount Ebott Underground') === 'mount_ebott', 'ebott matches; ebot stays out on the word boundary');
ok(R('Mount Ebot') === 'mount_ebot', 'the wrong mountain still resolves to itself');
ok(R('quantum computing core') === '', 'no fuzzy match on prose that merely sounds close');
ok(R('Dragon Mountain') === 'dragon_mountain', 'newly filed records resolve (dragon mountain)');
ok(R('Darkland') === 'bowsers_castle', 'alias tier: darkland routes to the castle seat');
ok(R('Snowdin') === 'snowdin_town', 'alias tier: snowdin routes to snowdin town');
ok(R('Shadow Estate Dining Hall') === 'shadow_estate', 'alias tier: dining hall routes to the estate');
ok(R('') === '' && R(null) === '', 'empty fields resolve nowhere');

/* ---- 3. journey building ---- */
console.log('cartography desk — journey');
const layers = api.mapsPlanesOnSheet('midlands_full', MAP_DATA);
ok(layers.length === 4, 'midlands sheet exposes all four layers');
ok(layers.find(l => l.id === 'shadow').count === 6, 'shadow layer counts its six pins');
ok(api.mapsPlanesOnSheet('mushroom_kingdom_full', MAP_DATA).map(l => l.id).join(',') === 'material',
  'sheets without planar pins expose material only (toggle hides)');

const cmpKey = (x, y) => x.key[0] - y.key[0] || x.key[1] - y.key[1] || x.key[2] - y.key[2] || x.key[3] - y.key[3];
const j = api.buildJourney('midlands_full', 'all', DATA, MAP_DATA);
ok(j.stops.length >= 50, `midlands journey plots a real trail (${j.stops.length} stops)`);
ok(j.stops.every((s, i) => s.n === i + 1), 'stop numbers run 1..N in order');
ok(j.stops.every((s, i, arr) => i === 0 || cmpKey(arr[i - 1], s) <= 0), 'stops sort by date, filing order breaking ties');
const belly = j.stops.find(s => s.eventId === 'the_belly_of_the_beast');
ok(belly && belly.poiId === 'poi_mid_skittering_grove' && belly.plane === 'shadow', 'belly of the beast lands on the skittering grove shadow pin');
const fracture = j.stops.find(s => s.eventId === 'planar_fracture');
ok(fracture && fracture.poiId === 'poi_mid_raventree_manor' && fracture.plane === 'material', 'planar fracture lands on the material anchor');
const blorbs = j.unpinned.find(u => u.eventId === 'the_blorbs_crisis');
ok(blorbs && blorbs.otherMap === 'mushroom_kingdom_full', 'off-sheet stops name the sheet that holds them');
const bucketed = [...j.stops, ...j.unpinned, ...j.unresolved].map(x => x.eventId);
ok(bucketed.length === EVENTS.length && new Set(bucketed).size === EVENTS.length,
  'every event lands in exactly one journey bucket');

const sh = api.buildJourney('midlands_full', 'shadow', DATA, MAP_DATA);
ok(sh.stops.length > 0 && sh.stops.every(s => s.plane === 'shadow'), 'shadow layer journey holds shadow stops only');
ok(sh.unpinned.some(u => u.eventId === 'planar_fracture' && /layer/.test(u.reason || '')), 'material stops on a filtered layer say which layer holds them');

const bogus = api.buildJourney('no_such_sheet', 'all', DATA, MAP_DATA);
ok(bogus.stops.length === 0 && bogus.unpinned.length + bogus.unresolved.length === EVENTS.length, 'unknown sheet degrades to lists, never a crash');

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
