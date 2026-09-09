// build-province-census.mjs — file the Province Census snapshot.
//
//   node tools/build-province-census.mjs           # write data/provinceCensus.json
//   node tools/build-province-census.mjs --check    # report drift, write nothing
//
// The atlas paints provinces live from map-provinces.js; this generator files
// the same computation as an archive document, so a census exists on the record
// even when nobody has the map open — and so `check-province-census.mjs` can
// prove the filed snapshot and the live module still say the same thing.
//
// Scope follows the population engine's convention: only `*_full` sheets are
// counted, because every sub-region's pins are already inside their full map.
// Counting both would double the realm and its people.
//
// NEVER hand-edit data/provinceCensus.json. Edit map-provinces.js (the model)
// or politics-data.js / the POI files (the evidence), then re-run this.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { MAP_DATA } from '../Reputation-Matrix2/data/maps/map-data.js';
import { PROVINCE_POLITICS } from '../Reputation-Matrix2/data/support/politics-data.js';
import { buildProvinceCensus } from '../Reputation-Matrix2/app/pages/maps/map-provinces.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'Reputation-Matrix2/data/provinceCensus.json');
const CHECK = process.argv.includes('--check');

const round = (n, d = 2) => {
  const p = 10 ** d;
  return Math.round((Number(n) || 0) * p) / p;
};

/** A snapshot row keeps the verdict and the pins that produced it — not prose. */
function provinceRow(p) {
  const c = p.census || {};
  return {
    id: p.id,
    name: p.name,
    origin: p.origin,
    kind: p.kind,
    sourceMapId: p.sourceMapId || null,
    vacant: !!p.vacant,
    shape: p.shape || 'tile',
    center: [round(p.x), round(p.y)],
    polygon: (p.polygon || []).map(pt => [round(pt[0]), round(pt[1])]),
    area: round(p.area, 3),
    controller: c.controller || null,
    claimant: c.claimant || 'unaligned',
    share: c.claimantShare || 0,
    margin: c.margin || 0,
    contested: !!c.contested,
    unreadable: !!c.noLead,
    neutral: !!c.neutral,
    pins: c.pins || 0,
    population: c.population || 0,
    military: c.military || 0,
    economic: c.economic || 0,
    political: c.political || 0,
    power: c.power || 0,
    seatPoiId: c.seatPoiId || null,
    poiIds: (p.poiIds || []).sort(),
    ledger: p.delta
      ? {
        agrees: !!p.delta.agrees,
        filedController: p.delta.filedController || null,
        filedShare: p.delta.filedShare || 0,
        drift: p.delta.drift || 0,
        rows: p.delta.rows.map(r => ({ factionId: r.factionId, filed: r.filed, census: r.census, delta: r.delta })),
      }
      : null,
  };
}

function buildSnapshot() {
  const maps = {};
  let totalProvinces = 0, contested = 0, unclaimed = 0, vacant = 0, population = 0, ledgered = 0, broken = 0;

  Object.keys(MAP_DATA)
    .filter(id => id.endsWith('_full'))
    .sort()
    .forEach(mapId => {
      const map = MAP_DATA[mapId];
      if (!map || !Array.isArray(map.pointsOfInterest) || !map.pointsOfInterest.length) return;
      const census = buildProvinceCensus(map, MAP_DATA, { politics: PROVINCE_POLITICS });
      const rows = census.provinces.map(provinceRow);
      maps[mapId] = {
        name: census.mapName,
        group: census.group,
        pins: census.pins,
        duplicatePins: census.duplicatePins || 0,
        censusPower: round(census.census.power),
        population: census.census.population,
        rollup: {
          ...census.rollup,
          /* byFaction rows carry seat lists; keep the roll-up to counts. */
          byFaction: census.rollup.byFaction.map(f => ({
            factionId: f.factionId,
            provinces: f.provinces,
            shareOfProvinces: f.shareOfProvinces,
            shareOfArea: f.shareOfArea,
            shareOfPopulation: f.shareOfPopulation,
            population: f.population,
            power: f.power,
            pins: f.pins,
            seats: f.seats,
          })),
        },
        provinces: rows,
      };
      totalProvinces += rows.length;
      population += census.census.population || 0;
      contested += rows.filter(r => r.contested).length;
      unclaimed += rows.filter(r => !r.controller).length;
      vacant += rows.filter(r => r.vacant).length;
      ledgered += rows.filter(r => r.ledger).length;
      broken += rows.filter(r => r.ledger && !r.ledger.agrees).length;
    });

  return {
    _generated: 'tools/build-province-census.mjs',
    _authority: 'Reputation-Matrix2/app/pages/maps/map-provinces.js',
    _evidence: ['Reputation-Matrix2/data/maps/map-data.js', 'Reputation-Matrix2/data/support/politics-data.js'],
    _note: 'The Province Census as filed: POIs merged into provinces, each province crowned from the three power-projection pillars (military, economic, political) with population logged, and the provinces rolled up into the realm. Only *_full sheets are counted, because every sub-region pin already sits inside its full map. Recompute with `node tools/build-province-census.mjs`; check it with `node tools/check-province-census.mjs`.',
    world: {
      maps: Object.keys(maps).length,
      provinces: totalProvinces,
      contestedProvinces: contested,
      unclaimedProvinces: unclaimed,
      vacantClaims: vacant,
      ledgersFiled: ledgered,
      ledgersOverturned: broken,
      population,
    },
    maps,
  };
}

const snapshot = buildSnapshot();
const json = JSON.stringify(snapshot, null, 2) + '\n';

if (CHECK) {
  if (!fs.existsSync(OUT)) {
    console.error('provinceCensus.json is missing — run: node tools/build-province-census.mjs');
    process.exit(1);
  }
  const current = fs.readFileSync(OUT, 'utf8');
  if (current === json) {
    console.log(`province census: filed snapshot matches the model (${snapshot.world.maps} maps, ${snapshot.world.provinces} provinces)`);
    process.exit(0);
  }
  console.error('province census: the filed snapshot no longer matches map-provinces.js.');
  console.error('  re-run: node tools/build-province-census.mjs');
  process.exit(1);
}

fs.writeFileSync(OUT, json, 'utf8');
const kb = (Buffer.byteLength(json) / 1024).toFixed(0);
console.log(`wrote Reputation-Matrix2/data/provinceCensus.json — ${kb} KB`);
console.log(`  ${snapshot.world.maps} full maps · ${snapshot.world.provinces} provinces · ${snapshot.world.contestedProvinces} contested · ${snapshot.world.unclaimedProvinces} unclaimed · ${snapshot.world.vacantClaims} vacant claims`);
console.log(`  filed ledgers: ${snapshot.world.ledgersFiled} checked, ${snapshot.world.ledgersOverturned} where the census puts a different hand on it`);
