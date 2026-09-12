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
  /* Province paths are straight and may be compound: "M x y L x y … Z M …".
     Parse every subpath so side sampling sees the same tiled cells the browser
     fills. */
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
  lines.forEach(l => {
    totalEdges++;
    const cls = l.getAttribute('class');
    const x1 = +l.getAttribute('x1'), y1 = +l.getAttribute('y1');
    const x2 = +l.getAttribute('x2'), y2 = +l.getAttribute('y2');
    const len = Math.hypot(x2 - x1, y2 - y1) || 1;
    if (cls.includes('vacant')) { totalClaims++; return; }
    if (len < 0.4) return; /* sub-visible slivers are rim ink, not borders */
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    const nx = -(y2 - y1) / len * 0.15, ny = (x2 - x1) / len * 0.15;
    const side = (sx, sy) => solid.filter(p => p.polys.some(poly => inside([sx, sy], poly))).map(p => p.id);
    const left = side(mx + nx, my + ny), right = side(mx - nx, my - ny);
    if (cls.includes('rim')) {
      totalRim++;
      if (left.length + right.length !== 1) badHere.push(`rim (${x1.toFixed(1)},${y1.toFixed(1)}) sides [${left}] | [${right}]`);
    } else {
      totalShared++;
      if (left.length !== 1 || right.length !== 1 || left[0] === right[0]) badHere.push(`${cls} sides [${left}] | [${right}]`);
    }
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
