// Province border topology: shared arcs, smoothing and the pin guard, over the
// REAL archive for every full realm. A frontier must be one arc walked by both
// neighbours, smoothing must keep junctions fixed, and no pin may change side.
//
//   node tools/tests/test-map-province-arcs.mjs
import { MAP_DATA } from '../../Reputation-Matrix2/data/maps/map-data.js';
import { PROVINCE_POLITICS } from '../../Reputation-Matrix2/data/support/politics-data.js';
import { buildProvinceCensus } from '../../Reputation-Matrix2/app/pages/maps/map-provinces.js';
import { buildProvinceOutlines, polylineD, ringsD } from '../../Reputation-Matrix2/app/pages/maps/map-province-arcs.js';

const fail = [], ok = [];
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));

const signed = poly => {
  let a = 0;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) a += (poly[j][0] + poly[i][0]) * (poly[j][1] - poly[i][1]);
  return a / 2;
};
const insideRings = (pt, rings) => {
  let hit = false;
  for (const ring of rings) {
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [xi, yi] = ring[i], [xj, yj] = ring[j];
      if ((yi > pt[1]) !== (yj > pt[1]) && pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi) hit = !hit;
    }
  }
  return hit;
};

/* Proper crossings only: segments that merely share an end point are neighbours. */
function crossings(segs) {
  const orient = (a, b, c) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  const same = (a, b) => Math.abs(a[0] - b[0]) < 1e-6 && Math.abs(a[1] - b[1]) < 1e-6;
  const buckets = new Map();
  segs.forEach((s, i) => {
    const x0 = Math.floor(Math.min(s.a[0], s.b[0]) / 5), x1 = Math.floor(Math.max(s.a[0], s.b[0]) / 5);
    const y0 = Math.floor(Math.min(s.a[1], s.b[1]) / 5), y1 = Math.floor(Math.max(s.a[1], s.b[1]) / 5);
    for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) {
      const k = x + ',' + y;
      if (!buckets.has(k)) buckets.set(k, []);
      buckets.get(k).push(i);
    }
  });
  const seen = new Set();
  let n = 0;
  buckets.forEach(list => {
    for (let p = 0; p < list.length; p++) {
      for (let q = p + 1; q < list.length; q++) {
        const i = list[p], j = list[q];
        const key = i < j ? i + '_' + j : j + '_' + i;
        if (seen.has(key)) continue;
        seen.add(key);
        const s = segs[i], t = segs[j];
        if (same(s.a, t.a) || same(s.a, t.b) || same(s.b, t.a) || same(s.b, t.b)) continue;
        const d1 = orient(s.a, s.b, t.a), d2 = orient(s.a, s.b, t.b);
        const d3 = orient(t.a, t.b, s.a), d4 = orient(t.a, t.b, s.b);
        if (d1 * d2 < 0 && d3 * d4 < 0) n++;
      }
    }
  });
  return n;
}

const sharpCorners = pts => {
  let n = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const ax = pts[i][0] - pts[i - 1][0], ay = pts[i][1] - pts[i - 1][1];
    const bx = pts[i + 1][0] - pts[i][0], by = pts[i + 1][1] - pts[i][1];
    const la = Math.hypot(ax, ay), lb = Math.hypot(bx, by);
    if (!la || !lb) continue;
    if ((ax * bx + ay * by) / (la * lb) < Math.cos(Math.PI / 4)) n++;
  }
  return n;
};

const realms = Object.keys(MAP_DATA).filter(id => /_full$/.test(id));
let arcTotal = 0, sharedTotal = 0, pulledBack = 0, rawCorners = 0, smoothCorners = 0;
const problems = { oneSided: [], area: [], pinned: [], pins: [], crossing: [], nondet: [], rings: [], islands: [] };
let absorbedTotal = 0;
const RAW = { levels: [{ simplify: 0, chaikin: 0 }], guardArcs: 0 };

for (const mapId of realms) {
  const census = buildProvinceCensus(MAP_DATA[mapId], MAP_DATA, { politics: PROVINCE_POLITICS });
  const solid = census.provinces.filter(p => !p.vacant && p.cells && p.cells.length);
  if (!solid.length) continue;
  absorbedTotal += (census.absorbed || []).length;
  /* After absorption the only island left may be a hand-filed province's one
     and only piece (it keeps its identity). */
  buildProvinceOutlines(solid).islands.forEach(isl => {
    const prov = solid.find(p => p.id === isl.province);
    const whole = (buildProvinceOutlines(solid).rings.get(isl.province) || []).length === 1;
    if (!(prov && prov.kind !== 'merged' && whole)) problems.islands.push(`${mapId}/${isl.province} inside ${isl.host}`);
  });
  const raw = buildProvinceOutlines(solid, RAW);
  const out = buildProvinceOutlines(solid);
  const again = buildProvinceOutlines(solid);
  arcTotal += out.arcs.length;
  pulledBack += out.stats.pulledBack;

  if (JSON.stringify(out.arcs.map(a => a.points)) !== JSON.stringify(again.arcs.map(a => a.points))) problems.nondet.push(mapId);

  out.arcs.forEach(a => {
    if (a.rim) return;
    sharedTotal++;
    if (a.sides.length !== 2 || a.sides[0] === null || a.sides[1] === null || a.sides[0] === a.sides[1]) problems.oneSided.push(`${mapId}/${a.id}`);
  });

  /* Junctions stay put: every smoothed arc starts and ends where its raw arc does. */
  out.arcs.forEach((a, i) => {
    const r = raw.arcs[i];
    if (!r) return;
    rawCorners += sharpCorners(r.points);
    smoothCorners += sharpCorners(a.points);
    if (a.closed) return; // a loop with no junction has no end point to pin
    const s0 = a.points[0], s1 = a.points[a.points.length - 1];
    const r0 = r.points[0], r1 = r.points[r.points.length - 1];
    if (Math.hypot(s0[0] - r0[0], s0[1] - r0[1]) > 1e-9 || Math.hypot(s1[0] - r1[0], s1[1] - r1[1]) > 1e-9) problems.pinned.push(`${mapId}/${a.id}`);
  });

  /* Raw outlines rebuilt from arcs must equal the cells they came from. */
  solid.forEach(prov => {
    const cellArea = prov.cells.reduce((n, c) => n + Math.abs(signed(c)), 0);
    const rawRing = raw.rings.get(prov.id) || [];
    const ringArea = rawRing.reduce((n, r) => n + signed(r), 0);
    if (!rawRing.length || Math.abs(Math.abs(ringArea) - cellArea) > Math.max(0.05, cellArea * 0.002)) {
      problems.rings.push(`${mapId}/${prov.name} cells ${cellArea.toFixed(2)} vs rings ${Math.abs(ringArea).toFixed(2)}`);
    }
  });

  /* Sheet is conserved: what one province loses to smoothing a neighbour gains. */
  const totalRaw = solid.reduce((n, p) => n + (raw.rings.get(p.id) || []).reduce((m, r) => m + signed(r), 0), 0);
  const totalOut = solid.reduce((n, p) => n + (out.rings.get(p.id) || []).reduce((m, r) => m + signed(r), 0), 0);
  if (Math.abs(totalRaw - totalOut) > 0.05) problems.area.push(`${mapId} ${totalRaw.toFixed(2)} → ${totalOut.toFixed(2)}`);

  /* No pin changes province, and none ends up in two. */
  const moved = [];
  solid.forEach(prov => {
    const rawHome = raw.rings.get(prov.id) || [];
    (prov.pois || []).forEach(poi => {
      if (!Number.isFinite(Number(poi.x)) || !Number.isFinite(Number(poi.y))) return;
      const pt = [Number(poi.x), Number(poi.y)];
      if (!insideRings(pt, rawHome)) return; // already outside the raw cells: not smoothing's doing
      if (!insideRings(pt, out.rings.get(prov.id) || [])) moved.push(`${prov.name}:${poi.id}`);
    });
  });
  if (moved.length) problems.pins.push(`${mapId} ${moved.slice(0, 3).join(', ')} (+${moved.length})`);

  const segs = [];
  out.arcs.forEach(a => { for (let i = 0; i < a.points.length - 1; i++) segs.push({ a: a.points[i], b: a.points[i + 1] }); });
  const x = crossings(segs);
  if (x) problems.crossing.push(`${mapId} ${x} crossing(s)`);
}

check('every full realm produced arcs', realms.length > 0 && arcTotal > 100, `${arcTotal} arcs over ${realms.length} realms`);
check('every frontier arc has two different provinces', problems.oneSided.length === 0, problems.oneSided.slice(0, 4).join(', '));
check('raw outlines rebuilt from arcs match the cells', problems.rings.length === 0, problems.rings.slice(0, 3).join(' · '));
check('smoothing keeps every junction (open-arc end point) fixed', problems.pinned.length === 0, problems.pinned.slice(0, 4).join(', '));
check('the sheet area is conserved under smoothing (no gap, no overlap)', problems.area.length === 0, problems.area.slice(0, 3).join(' · '));
check('no pin changes province', problems.pins.length === 0, problems.pins.slice(0, 3).join(' · '));
check('no smoothed arcs cross one another', problems.crossing.length === 0, problems.crossing.slice(0, 3).join(' · '));
check('no detached island is left inside another province', problems.islands.length === 0, problems.islands.slice(0, 4).join(', '));
check('islands were absorbed into their surrounding province', absorbedTotal > 0, `${absorbedTotal} pins absorbed`);
check('the build is deterministic', problems.nondet.length === 0, problems.nondet.join(', '));
check('smoothing removes sharp corners', smoothCorners < rawCorners * 0.5, `${rawCorners} → ${smoothCorners} corners over 45°`);

const tiny = buildProvinceOutlines([
  { id: 'a', name: 'A', cells: [[[0, 0], [50, 0], [50, 100], [0, 100]]], pois: [{ id: 'pa', x: 10, y: 50 }] },
  { id: 'b', name: 'B', cells: [[[50, 0], [100, 0], [100, 100], [50, 100]]], pois: [{ id: 'pb', x: 90, y: 50 }] },
]);
check('two squares share exactly one frontier arc', tiny.arcs.filter(a => !a.rim).length === 1, `${tiny.arcs.length} arcs`);
check('the empty census draws nothing', buildProvinceOutlines([]).arcs.length === 0);
check('path helpers emit M/L/Z only', /^M [\d. -]+( L [\d. -]+)+ Z$/.test(ringsD([[[0, 0], [1, 0], [1, 1]]])) && polylineD([[0, 0]]) === '');

console.log(`\n${ok.length} passed, ${fail.length} failed — ${arcTotal} arcs (${sharedTotal} shared), ${pulledBack} guard pull-backs`);
ok.forEach(l => console.log('  ok   ' + l));
fail.forEach(l => console.log('  FAIL ' + l));
process.exit(fail.length ? 1 : 0);
