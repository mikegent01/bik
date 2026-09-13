// Regression: the Factions/Political map mode used to freeze the page.
//
// The bug had two layers, both in the alliance solve that political mode needs
// to decide who controls a territory:
//
//   1. generateFactionValuesWithSeed() compiled one RegExp per keyword in
//      KEYWORD_VALUE_MODIFIERS on EVERY call, and getFactionValues() did no
//      memoising. calculateAllAlliances() asks for those values across an
//      O(n^2) compatibility matrix over ~143 factions, so the regex table was
//      rebuilt tens of thousands of times per render.
//   2. calculateAllAlliances() itself was never cached across calls, and
//      renderTerritories() calls into it repeatedly while drawing markers.
//
// Together that was ~2.9s of blocking main-thread work every time the reader
// opened a political submode — long enough to read as a hang.
//
// This test pins the two invariants that make it fast: generated faction
// values are memoised and identical across calls, and the alliance solve is
// returned from cache on the second call rather than re-derived.
//
//   node tools/tests/test-alliance-cache.mjs

import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>',
  { url: 'http://127.0.0.1/', pretendToBeVisual: true });
globalThis.window = dom.window;
globalThis.document = dom.window.document;
globalThis.requestAnimationFrame = (cb) => setTimeout(cb, 0);
globalThis.localStorage = {
  _d: {},
  getItem(k) { return this._d[k] ?? null; },
  setItem(k, v) { this._d[k] = String(v); },
  removeItem(k) { delete this._d[k]; },
  clear() { this._d = {}; },
};
globalThis.sessionStorage = globalThis.localStorage;
globalThis.HTMLElement = dom.window.HTMLElement;
globalThis.Element = dom.window.Element;
globalThis.Node = dom.window.Node;
globalThis.SVGElement = dom.window.SVGElement;
globalThis.getComputedStyle = dom.window.getComputedStyle.bind(dom.window);
globalThis.fetch = async () => ({ ok: false, status: 404, json: async () => ({}), text: async () => '' });

const fail = [], ok = [];
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));

const sv = await import('../../Reputation-Matrix2/app/pages/societal-values/societal-values.js');
const al = await import('../../Reputation-Matrix2/app/systems/alliances-page.js');
const fr = await import('../../Reputation-Matrix2/systems/faction-registry.js');

const ids = Object.keys(fr.getAllFactions());
check('the registry has factions to solve over', ids.length > 50, `${ids.length} factions`);

/* ---- 1. faction values are memoised and stable ---- */
const first = sv.getFactionValues(ids[0]);
const second = sv.getFactionValues(ids[0]);
check('getFactionValues returns the same object from cache', first === second);
check('faction values carry the value axes', Object.keys(first).length > 0, `${Object.keys(first).length} axes`);

/* Values are seeded, so a different faction must not collapse onto the same
   object — memoising must be per-id, not a single shared result. */
const other = sv.getFactionValues(ids[1]);
check('memoising is per faction, not global', other !== first);

/* ---- 2. compatibility is cheap once values are warm ---- */
sv.calculateFactionCompatibility(ids[0], ids[1]);   // warm
const tCompat = Date.now();
const N = 5000;
for (let i = 0; i < N; i++) sv.calculateFactionCompatibility(ids[i % ids.length], ids[(i + 1) % ids.length]);
const perCompat = (Date.now() - tCompat) / N;
/* Pre-fix this sat around 0.46ms, which is ~4.7s across the full matrix.
   0.05ms is a generous ceiling that still catches a regression of that size. */
check('calculateFactionCompatibility stays sub-0.05ms', perCompat < 0.05, `${perCompat.toFixed(4)}ms per call`);

/* ---- 3. the alliance solve is cached across calls ---- */
const tCold = Date.now();
const solveA = al.calculateAllAlliances();
const cold = Date.now() - tCold;

const tWarm = Date.now();
const solveB = al.calculateAllAlliances();
const warm = Date.now() - tWarm;

check('the alliance solve returns a result', !!solveA && Array.isArray(solveA.alliances), `${solveA.alliances.length} alliances`);
check('the second solve is served from cache', solveB === solveA, `cold ${cold}ms, warm ${warm}ms`);
check('the cached solve is effectively free', warm <= 5, `${warm}ms`);
/* The whole point: political mode calls this while drawing every territory
   marker, so the cold solve must not be paid more than once. */
check('repeat solves do not re-derive the matrix', al.calculateAllAlliances() === solveA);

/* ---- 4. the solve is still correct, not just fast ---- */
check('alliances map factions to memberships', Object.keys(solveA.factionToAlliance || {}).length > 0,
  `${Object.keys(solveA.factionToAlliance || {}).length} mapped`);
check('the compatibility matrix is populated', Object.keys(solveA.compatMatrix || {}).length > 0);

console.log(ok.map(s => '  ok   ' + s).join('\n'));
if (fail.length) console.log(fail.map(s => '  FAIL ' + s).join('\n'));
console.log(`\n${ok.length} passed, ${fail.length} failed`);
process.exit(fail.length ? 1 : 0);
