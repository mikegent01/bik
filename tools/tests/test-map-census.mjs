// Map census: the REAL wahCensusByPoi extracted from index.html, run over REAL
// data (MAP_DATA + jsons + RELIGION_DATA). Covers the faith-group enrichment
// and the culture bridges behind the Religion and Culture lenses.
//
//   node tools/tests/test-map-census.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { MAP_DATA } from '../../Reputation-Matrix2/data/maps/map-data.js';
import { RELIGION_DATA } from '../../Reputation-Matrix2/data/support/religion-data.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const main = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)]
  .map(m => m[1]).sort((a, b) => b.length - a.length)[0];

function extractBlock(sig, open, close) {
  const i = main.indexOf(sig);
  if (i < 0) throw new Error(`not found: ${sig}`);
  let depth = 0, started = false;
  for (let j = i; j < main.length; j++) {
    const c = main[j];
    if (c === open) { depth++; started = true; }
    else if (c === close) { depth--; if (started && depth === 0) return main.slice(i, j + 1); }
  }
  throw new Error(`unbalanced: ${sig}`);
}

const load = n => JSON.parse(fs.readFileSync(path.join(ROOT, 'Reputation-Matrix2/data', `${n}.json`), 'utf8'));
const sandbox = {
  ATLAS_MAPS: MAP_DATA,
  DATA: {
    characters: load('characters'), events: load('events'), battles: load('battles'),
    locations: load('locations'), cultures: load('cultures'),
  },
  RELIGION: RELIGION_DATA,
};
const src = [
  extractBlock('const MAPS_LOCATION_ALIASES=', '[', ']'),
  extractBlock('const LOC_PIN_SPECIALS=', '{', '}'),
  extractBlock('function mapsMatchKey', '{', '}'),
  extractBlock('function mapsLocationIndex', '{', '}'),
  extractBlock('function resolveEventLocationId', '{', '}'),
  extractBlock('function wahPinIndex', '{', '}'),
  extractBlock('function wahFaithName', '{', '}'),
  extractBlock('function faithRec', '{', '}'),
  extractBlock('function faithGroup', '{', '}'),
  extractBlock('function wahCensusByPoi', '{', '}'),
].join('\n');
new Function('ATLAS_MAPS', 'DATA', 'RELIGION', `${src}; this.wahCensusByPoi=wahCensusByPoi;`)
  .call(sandbox, sandbox.ATLAS_MAPS, sandbox.DATA, sandbox.RELIGION);
const { wahCensusByPoi } = sandbox;

const fail = [], ok = [];
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));
const keys = o => Object.keys(o || {});
const norm = s => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');

/* ---------------- shape + safety ---------------- */
const empty = wahCensusByPoi('no_such_map');
check('unknown maps return three empty sections',
  ['species', 'faiths', 'cultures'].every(k => empty[k] && keys(empty[k].counts).length === 0 && keys(empty[k].top).length === 0));

const mid = wahCensusByPoi('midlands_full');
const mk = wahCensusByPoi('mushroom_kingdom_full');
check('midlands census has all three sections', !!(mid.species && mid.faiths && mid.cultures));
check('mushroom census has all three sections', !!(mk.species && mk.faiths && mk.cultures));
check('counts and tops agree',
  ['species', 'faiths', 'cultures'].every(k =>
    keys(mid[k].counts).sort().join(',') === keys(mid[k].top).sort().join(',')));
check('the census is deterministic',
  JSON.stringify(wahCensusByPoi('midlands_full')) === JSON.stringify(mid));

const diag = (name, c) => console.log(`  ${name}: species ${keys(c.species.top).length} · faiths ${keys(c.faiths.top).length} · cultures ${keys(c.cultures.top).length} pins filed`);
console.log('');
diag('midlands_full       ', mid);
diag('mushroom_kingdom_full', mk);

/* ---------------- faith groups ---------------- */
const groupIds = new Set(Object.keys(RELIGION_DATA.groups || {}));
const denomByName = {};
Object.values(RELIGION_DATA.denominations || {}).forEach(d => { if (d && d.name && !denomByName[d.name]) denomByName[d.name] = d; });
let badGroup = 0, badSum = 0, ungrouped = 0, groupMismatch = 0;
Object.entries(mid.faiths.top).forEach(([pid, t]) => {
  if (!t.group) { ungrouped++; return; }
  if (!groupIds.has(t.group.id) || !t.group.color || !t.group.icon) badGroup++;
  if (!(t.groupN >= t.n)) badSum++;
  const denom = denomByName[t.label];
  if (denom && denom.group !== t.group.id) groupMismatch++;
});
check('every filed group is a real group with color + icon', badGroup === 0, `${badGroup} bad`);
check('group adherents sum at least the top denomination', badSum === 0, `${badSum} bad`);
check('top denominations agree with their group', groupMismatch === 0, `${groupMismatch} mismatched`);
console.log(`  midlands faiths: ${ungrouped} ungrouped (Other faiths bucket)`);
Object.values(mid.faiths.top).forEach(t => {
  if (t.list.length > 4) badGroup++;
});
check('faith lists cap at four', badGroup === 0);

/* ---------------- cultures: filed links only ---------------- */
const cultures = sandbox.DATA.cultures;
const cultureByName = {};
cultures.forEach(c => { cultureByName[c.name] = c; cultureByName[c.id] = c; });
const locById = {};
sandbox.DATA.locations.forEach(l => { if (l && l.id) locById[l.id] = l; });
const poiById = {};
Object.values(MAP_DATA).forEach(m => (m.pointsOfInterest || []).forEach(p => { poiById[p.id] = p; }));
function bridgesToCulture(poi, culture) {
  const loc = (poi && locById[poi.articleId]) || null;
  const region = loc && loc.region ? `_${norm(loc.region)}_` : '';
  return (culture.relatedArticles || []).some(r => {
    if (!r) return false;
    if (r === poi.factionId || r === poi.articleId) return true;
    return !!(region && region.includes(`_${r}_`));
  });
}
let badCulture = 0, longList = 0;
Object.entries(mid.cultures.top).forEach(([pid, t]) => {
  const poi = poiById[pid], culture = cultureByName[t.label];
  if (!poi || !culture || !bridgesToCulture(poi, culture)) badCulture++;
  if (t.list.length > 4 || mid.cultures.counts[pid] !== t.n) longList++;
});
check('every cultured pin traces to a filed link', badCulture === 0, `${badCulture} unlinked`);
check('culture counts agree with tops', longList === 0);
const cultureSpread = {};
Object.values(mid.cultures.top).forEach(t => { cultureSpread[t.label] = (cultureSpread[t.label] || 0) + 1; });
console.log('  midlands cultures:', Object.entries(cultureSpread).map(([k, v]) => `${k} ×${v}`).join(' · ') || 'none');

/* ---------------- coverage floors ---------------- */
check('midlands files species pins', keys(mid.species.top).length >= 14, `${keys(mid.species.top).length}`);
check('midlands files faith pins', keys(mid.faiths.top).length >= 12, `${keys(mid.faiths.top).length}`);
check('midlands files culture pins', keys(mid.cultures.top).length >= 75, `${keys(mid.cultures.top).length}`);
check('mushroom kingdom files species pins', keys(mk.species.top).length >= 7, `${keys(mk.species.top).length}`);
check('mushroom kingdom files faith pins', keys(mk.faiths.top).length >= 6, `${keys(mk.faiths.top).length}`);
check('mushroom kingdom files culture pins', keys(mk.cultures.top).length >= 35, `${keys(mk.cultures.top).length}`);

console.log(`\n${ok.length} passed, ${fail.length} failed`);
ok.forEach(l => console.log('  ok   ' + l));
fail.forEach(l => console.log('  FAIL ' + l));
process.exit(fail.length ? 1 : 0);
