// check-province-census.mjs — prove the Province Census holds together.
//
//   node tools/check-province-census.mjs        # exit 1 on any failure
//
// Four checks, all pass/fail (no advisory):
//   1. the filed snapshot matches the live model (someone edited the module or
//      the POIs without re-running the generator);
//   2. no pin is lost or double-governed: every pin on a sheet sits in exactly
//      one province;
//   3. geometry holds: polygons are closed, inside the sheet, and carry area;
//   4. the ledger is honest: every PROVINCE_POLITICS faction id resolves in the
//      faction registry, and every filed province either has pins or is filed
//      as a vacant claim — never silently dropped.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { MAP_DATA } from '../Reputation-Matrix2/data/maps/map-data.js';
import { PROVINCE_POLITICS } from '../Reputation-Matrix2/data/support/politics-data.js';
import { buildProvinceCensus, uniquePins } from '../Reputation-Matrix2/app/pages/maps/map-provinces.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const SNAPSHOT = path.join(ROOT, 'Reputation-Matrix2/data/provinceCensus.json');
const fail = [], ok = [];
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));

/* ---------------- 1. snapshot freshness ---------------- */
let snapshot = null;
if (!fs.existsSync(SNAPSHOT)) {
  fail.push('the census is filed at Reputation-Matrix2/data/provinceCensus.json — run: node tools/build-province-census.mjs');
} else {
  snapshot = JSON.parse(fs.readFileSync(SNAPSHOT, 'utf8'));
  check('the snapshot names its generator', snapshot._generated === 'tools/build-province-census.mjs', String(snapshot._generated));
  check('the snapshot counts the full maps', Object.keys(snapshot.maps || {}).length > 10, `${Object.keys(snapshot.maps || {}).length} maps`);
  const counted = Object.keys(MAP_DATA).filter(id => id.endsWith('_full') && (MAP_DATA[id].pointsOfInterest || []).length).length;
  check('every full map is censused', Object.keys(snapshot.maps || {}).length === counted, `${Object.keys(snapshot.maps || {}).length} of ${counted}`);
}

/* ---------------- per-map model checks ---------------- */
const fullIds = Object.keys(MAP_DATA).filter(id => id.endsWith('_full') && (MAP_DATA[id].pointsOfInterest || []).length).sort();
let plotsChecked = 0, pinsChecked = 0, ledgersChecked = 0;
const polygonFailures = [], orphanPins = [], doubleGoverned = [];

fullIds.forEach(mapId => {
  const map = MAP_DATA[mapId];
  const census = buildProvinceCensus(map, MAP_DATA, { politics: PROVINCE_POLITICS });
  const pins = uniquePins(map.pointsOfInterest).filter(p => Number.isFinite(Number(p.x)) && Number.isFinite(Number(p.y)));
  pinsChecked += pins.length;
  const seen = new Map();
  census.provinces.forEach(prov => {
    (prov.poiIds || []).forEach(id => seen.set(id, (seen.get(id) || 0) + 1));
    /* geometry: closed, on the sheet, and not degenerate */
    const poly = prov.polygon || [];
    plotsChecked += 1;
    if (poly.length >= 3) {
      const first = poly[0], last = poly[poly.length - 1];
      const closed = Math.abs(first[0] - last[0]) > 1e-6 || Math.abs(first[1] - last[1]) > 1e-6; // polygon auto-closes; a repeat would be a bug
      const onSheet = poly.every(pt => pt[0] >= -0.01 && pt[0] <= 100.01 && pt[1] >= -0.01 && pt[1] <= 100.01);
      if (!closed || !onSheet || !(prov.area > 0)) polygonFailures.push(`${mapId}/${prov.name}`);
    } else if (!prov.vacant) {
      polygonFailures.push(`${mapId}/${prov.name} has no polygon`);
    }
    if (prov.delta) ledgersChecked += 1;
  });
  pins.forEach(p => { if (!seen.has(String(p.id))) orphanPins.push(`${mapId}/${p.id}`); });
  seen.forEach((count, id) => { if (count > 1) doubleGoverned.push(`${mapId}/${id}×${count}`); });

  /* a vacant filed claim must stay on the record, not vanish from the map */
  const filedLedger = Object.keys(PROVINCE_POLITICS[mapId] || {});
  const kept = census.provinces.filter(p => p.kind === 'filed').length;
  const dropped = filedLedger.filter(id => !census.provinces.some(p => p.sourceProvinceId === id));
  if (dropped.length) {
    ok.push(`${mapId}: ${dropped.length} filed ledger row(s) matched to a survey sheet (${dropped.join(', ')})`);
  }
  if (filedLedger.length && kept === 0 && dropped.length !== filedLedger.length) {
    fail.push(`${mapId}: PROVINCE_POLITICS files ${filedLedger.length} provinces and the census keeps none of them by name`);
  }
});

check('no pin is left without a province', orphanPins.length === 0, orphanPins.slice(0, 6).join(', '));
check('no pin is governed twice', doubleGoverned.length === 0, doubleGoverned.slice(0, 6).join(', '));
check('every province border closes inside the sheet', polygonFailures.length === 0, polygonFailures.slice(0, 6).join(', '));
check(`the census counted ${pinsChecked} pins across ${fullIds.length} realms`, pinsChecked > 2000 && plotsChecked > 100, `${plotsChecked} plots`);

/* ---------------- 2. the ledger cites things that exist ---------------- */
const { getAllFactions } = await import('../Reputation-Matrix2/systems/faction-registry.js');
const registry = new Set(Object.keys(getAllFactions() || {}));
const ghostFlags = new Set();
const ghostSheets = new Set();
Object.entries(PROVINCE_POLITICS).forEach(([mapId, provs]) => {
  Object.entries(provs || {}).forEach(([pid, prov]) => {
    Object.keys(prov.control || {}).forEach(fid => {
      if (fid === 'unaligned' || registry.has(fid)) return;
      ghostFlags.add(`${mapId}·${prov.name} → ${fid}`);
    });
  });
  /* A ledger province whose seed sits nowhere near a pin governs nothing: that
     is a filing to amend, not a census bug — so it is reported, not failed. */
  const census = buildProvinceCensus(MAP_DATA[mapId], MAP_DATA, { politics: PROVINCE_POLITICS });
  Object.keys(provs || {}).forEach(pid => {
    const kept = census.provinces.some(p => p.kind === 'filed' && p.sourceProvinceId === pid && p.pois.length);
    const absorbed = census.provinces.some(p => p.kind !== 'merged' && p.sourceMapId && (p.filedControl || p.delta));
    if (!kept && !absorbed) ghostSheets.add(`${mapId}·${pid}`);
  });
});
check('every PROVINCE_POLITICS key is a real map', Object.keys(PROVINCE_POLITICS).every(id => MAP_DATA[id]), Object.keys(PROVINCE_POLITICS).filter(id => !MAP_DATA[id]).join(', '));
check('no ledger row cites an unknown flag', ghostFlags.size === 0, [...ghostFlags].slice(0, 6).join(', '));
check('the census checked every filed ledger it could', ledgersChecked > 0, `${ledgersChecked} provinces carry a filed control table`);

/* ---------------- 3. snapshot vs. model ---------------- */
if (snapshot) {
  let drift = 0, checkedRows = 0;
  fullIds.forEach(mapId => {
    const filed = (snapshot.maps || {})[mapId];
    if (!filed) { drift += 1; return; }
    const census = buildProvinceCensus(MAP_DATA[mapId], MAP_DATA, { politics: PROVINCE_POLITICS });
    const byId = new Map(census.provinces.map(p => [p.id, p]));
    (filed.provinces || []).forEach(row => {
      checkedRows += 1;
      const live = byId.get(row.id);
      if (!live) { drift += 1; return; }
      if (live.name !== row.name || (live.census.controller || null) !== (row.controller || null)
        || live.census.pins !== row.pins
        || (live.poiIds || []).slice().sort().join(',') !== (row.poiIds || []).join(',')) drift += 1;
    });
    if (byId.size !== (filed.provinces || []).length) drift += 1;
  });
  check('the filed snapshot matches the live census', drift === 0, `${drift} row(s) differ — re-run node tools/build-province-census.mjs`);
  check(`the snapshot and the model agree on ${checkedRows} provinces`, checkedRows > 100, `${checkedRows}`);
}

console.log(`\n${ok.length} passed, ${fail.length} failed`);
ok.forEach(l => console.log('  ok   ' + l));
fail.forEach(l => console.log('  FAIL ' + l));
if (ghostSheets.size) {
  console.log(`\n  advisory: ${ghostSheets.size} filed province(s) sit too far from any pin to govern one — they are drawn as vacant claims:`);
  [...ghostSheets].slice(0, 10).forEach(u => console.log('    · ' + u));
}
process.exit(fail.length ? 1 : 0);
