// Border-geometry invariants over the REAL mounted renderer, every full realm:
// each drawn frontier/inner edge must have exactly one province on each side,
// and each rim edge exactly one owner — sampled slightly off the edge's
// midpoint so boundary ambiguity cannot lie. This is the guard for the display
// layer's edge pairing (collinear-overlap matching in atlas-map-v2.js): the
// census model itself is checked by test-map-provinces.mjs.
//
// Needs jsdom resolvable from the repo root (temporary install, not committed):
//   npm install jsdom@26.1.0 --no-save
//
//   node tools/tests/atlas-borders-geometry.mjs
import { JSDOM, VirtualConsole } from 'jsdom';

const vc = new VirtualConsole();
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://127.0.0.1/',
  pretendToBeVisual: true,
  virtualConsole: vc,
});
globalThis.window = dom.window;
globalThis.document = dom.window.document;

const { mountAtlasMapV2 } = await import('../../Reputation-Matrix2/app/pages/maps/atlas-map-v2.js');
const { MAP_DATA } = await import('../../Reputation-Matrix2/data/maps/map-data.js');

const fail = [], ok = [];
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));

function inside(pt, poly) {
  let hit = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > pt[1]) !== (yj > pt[1]) && pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
}

let totalEdges = 0, totalShared = 0, totalRim = 0, totalClaims = 0;
const realms = Object.keys(MAP_DATA).filter(id => /_full$/.test(id));
for (const mapId of realms) {
  const host = dom.window.document.createElement('div');
  dom.window.document.body.appendChild(host);
  mountAtlasMapV2(host, mapId, {});
  host.querySelector('[data-map-art]').dispatchEvent(new dom.window.Event('load'));
  const lines = [...host.querySelectorAll('.atlas-v2-edge')];
  /* Province paths are polylines and may be compound ("M … Z M … Z"): an outer
     loop plus one loop per enclave. Side sampling is even-odd over the subpaths,
     which is also the fill rule the renderer sets. */
  const pathPolys = d => String(d || '').match(/M [^Z]+Z/g)?.map(part => part
    .replace(/^M\s*/, '').replace(/\s*Z$/, '').split(/\s+L\s+/)
    .map(pair => pair.trim().split(/\s+/).slice(0, 2).map(Number))
    .filter(pt => Number.isFinite(pt[0]) && Number.isFinite(pt[1]))
  ).filter(poly => poly.length >= 3) || [];
  const polys = [...host.querySelectorAll('[data-province]')].map(el => ({
    id: el.dataset.province,
    polys: pathPolys(el.getAttribute('d')),
    vacant: el.classList.contains('vacant'),
  }));
  /* A vacant claim is filed over ground the survey gave to somebody else — its
     polygon intentionally overlaps the holder's, so claims are exempt from the
     one-owner-per-side rule and counted separately. */
  const solid = polys.filter(p => !p.vacant);
  const badHere = [];
  /* Edges are now one <path> per shared arc (plus <line> claim boxes). Test every
     segment of every path, sampled off its midpoint, exactly as a line was. */
  const segmentsOf = el => {
    if (el.tagName.toLowerCase() === 'line') {
      return [[+el.getAttribute('x1'), +el.getAttribute('y1'), +el.getAttribute('x2'), +el.getAttribute('y2')]];
    }
    const pts = String(el.getAttribute('d') || '').replace(/[MZ]/g, ' ').split('L')
      .map(pair => pair.trim().split(/\s+/).map(Number)).filter(pt => pt.length >= 2 && pt.every(Number.isFinite));
    const out = [];
    for (let i = 0; i < pts.length - 1; i++) out.push([pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]]);
    return out;
  };
  lines.forEach(l => {
    const cls = l.getAttribute('class');
    if (cls.includes('vacant')) { totalClaims++; totalEdges++; return; }
    segmentsOf(l).forEach(([x1, y1, x2, y2]) => {
      totalEdges++;
      const len = Math.hypot(x2 - x1, y2 - y1) || 1;
      if (len < 0.25) return; /* sub-visible slivers are rim ink, not borders */
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      const nx = -(y2 - y1) / len * 0.08, ny = (x2 - x1) / len * 0.08;
      const side = (sx, sy) => solid.filter(p => p.polys.filter(poly => inside([sx, sy], poly)).length % 2 === 1).map(p => p.id);
      const left = side(mx + nx, my + ny), right = side(mx - nx, my - ny);
      if (cls.includes('rim')) {
        totalRim++;
        if (left.length + right.length !== 1) badHere.push(`rim (${x1.toFixed(1)},${y1.toFixed(1)}) sides [${left}] | [${right}]`);
      } else {
        totalShared++;
        if (left.length !== 1 || right.length !== 1 || left[0] === right[0]) badHere.push(`${cls} (${x1.toFixed(1)},${y1.toFixed(1)}) sides [${left}] | [${right}]`);
      }
    });
  });
  check(`${mapId}: every border has the provinces it claims on each side`, badHere.length === 0, badHere.slice(0, 2).join(' · '));
  host.remove();
}

check('every full realm mounts a border layer', totalEdges > 300, `${totalEdges} edges over ${realms.length} realms`);
check('shared borders were actually paired', totalShared > 300, `${totalShared} shared`);
check('rims were actually drawn', totalRim > 100, `${totalRim} rim`);
check('vacant claims stay inked as claims', totalClaims > 0, `${totalClaims} claim edges`);

console.log(`\n${ok.length} passed, ${fail.length} failed — ${totalEdges} edges over ${realms.length} realms (${totalShared} shared, ${totalRim} rim, ${totalClaims} claim)`);
ok.forEach(l => console.log('  ok   ' + l));
fail.forEach(l => console.log('  FAIL ' + l));
process.exit(fail.length ? 1 : 0);
