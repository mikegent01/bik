// POI type -> dot colour. The atlas draws plain dots, so colour is the only
// thing a marker can say. This proves every filed type across every sheet
// resolves to a family, that the palette is actually distinguishable, and that
// the legend describes the sheet in front of the reader.
//
//   node tools/tests/test-map-poi-types.mjs
import { MAP_DATA } from '../../Reputation-Matrix2/data/maps/map-data.js';
import {
  POI_FAMILIES, familyOf, typeColor, typeLabel, familiesPresent,
} from '../../Reputation-Matrix2/app/pages/maps/map-poi-types.js';

const fail = [], ok = [];
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));

/* ---------------- the palette ---------------- */

check('families are filed with key, label and colour',
  POI_FAMILIES.every(f => f.key && f.label && /^#[0-9a-f]{6}$/i.test(f.color)));
check('family keys are unique', new Set(POI_FAMILIES.map(f => f.key)).size === POI_FAMILIES.length);
check('family colours are unique', new Set(POI_FAMILIES.map(f => f.color)).size === POI_FAMILIES.length);
check('there is an "other" bucket to fall through to', POI_FAMILIES.some(f => f.key === 'other'));
check('the palette stays small enough to tell apart', POI_FAMILIES.length <= 12, `${POI_FAMILIES.length} families`);

/* Colours must be far enough apart to read as different dots. */
const hex = c => [1, 3, 5].map(i => parseInt(c.slice(i, i + 2), 16));
let closest = Infinity, closestPair = '';
for (let i = 0; i < POI_FAMILIES.length; i++) {
  for (let j = i + 1; j < POI_FAMILIES.length; j++) {
    const a = hex(POI_FAMILIES[i].color), b = hex(POI_FAMILIES[j].color);
    const d = Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
    if (d < closest) { closest = d; closestPair = `${POI_FAMILIES[i].key}/${POI_FAMILIES[j].key}`; }
  }
}
check('no two family colours are near-identical', closest > 40, `closest ${closestPair} at ${closest.toFixed(0)}`);

/* ---------------- classification ---------------- */

check('a capital is a settlement', familyOf({ type: 'capital_city' }).key === 'settlement');
check('a fortress is military', familyOf({ type: 'fortress' }).key === 'military');
check('a port is trade', familyOf({ type: 'port' }).key === 'economic');
check('a ley line is arcane', familyOf({ type: 'ley_line' }).key === 'arcane');
check('a temple is sacred', familyOf({ type: 'temple' }).key === 'sacred');
check('a library is knowledge', familyOf({ type: 'library' }).key === 'learning');
check('ruins are ruins', familyOf({ type: 'ruins' }).key === 'ruin');
check('a forest is natural', familyOf({ type: 'forest' }).key === 'nature');
check('a nebula is cosmic', familyOf({ type: 'nebula' }).key === 'cosmic');
check('an embassy is civic', familyOf({ type: 'embassy' }).key === 'civic');

check('a bare string classifies like a poi', familyOf('fortress').key === 'military');
check('an unknown type falls through to other', familyOf({ type: 'zzz_not_a_type' }).key === 'other');
check('a missing type falls through to other', familyOf({}).key === 'other');
check('null degrades instead of throwing', familyOf(null).key === 'other');
check('case does not change the answer', familyOf({ type: 'FORTRESS' }).key === 'military');
check('typeColor returns the family colour', typeColor({ type: 'temple' }) === familyOf({ type: 'temple' }).color);

check('typeLabel humanizes a filed type', typeLabel('mountain_pass') === 'Mountain Pass');
check('typeLabel names the unfiled honestly', typeLabel('') === 'Location' && typeLabel(null) === 'Location');

/* ---------------- against the real atlas ---------------- */

const allTypes = new Map();
Object.values(MAP_DATA).forEach(sheet => (sheet.pointsOfInterest || []).forEach(poi => {
  if (!poi) return;
  const t = poi.type || '(none)';
  allTypes.set(t, (allTypes.get(t) || 0) + 1);
}));

const unclassified = [...allTypes.entries()]
  .filter(([t]) => t !== '(none)' && familyOf({ type: t }).key === 'other')
  .sort((a, b) => b[1] - a[1]);

/* 'other' is a legitimate filed type; anything else landing there is a gap in
   the table, and a busy one is worth naming in the failure. */
const realGaps = unclassified.filter(([t]) => t !== 'other');
check('every filed type across the atlas has a family',
  realGaps.length === 0,
  realGaps.length ? realGaps.slice(0, 8).map(([t, n]) => `${t}×${n}`).join(', ') : '');

const totalPins = [...allTypes.values()].reduce((a, b) => a + b, 0);
const otherPins = [...allTypes.entries()]
  .filter(([t]) => familyOf({ type: t }).key === 'other')
  .reduce((n, [, c]) => n + c, 0);
check('the grey bucket stays a rounding error',
  otherPins / totalPins < 0.05, `${otherPins} of ${totalPins} pins grey`);

check(`the atlas spreads across the palette (${allTypes.size} types)`,
  new Set([...allTypes.keys()].map(t => familyOf({ type: t }).key)).size >= 8);

/* ---------------- the legend ---------------- */

const mid = MAP_DATA.midlands_full.pointsOfInterest;
const present = familiesPresent(mid);
check('the legend only lists families actually on the sheet',
  present.every(f => f.count > 0));
check('the legend counts every pin exactly once',
  present.reduce((n, f) => n + f.count, 0) === mid.length,
  `${present.reduce((n, f) => n + f.count, 0)} vs ${mid.length}`);
check('the legend reads in palette order', (() => {
  const order = POI_FAMILIES.map(f => f.key);
  const got = present.map(f => f.key);
  return got.every((k, i) => i === 0 || order.indexOf(k) > order.indexOf(got[i - 1]));
})());
check('an empty sheet has an empty legend', familiesPresent([]).length === 0);

console.log(`\n${ok.length} passed, ${fail.length} failed`);
ok.forEach(l => console.log('  ok   ' + l));
fail.forEach(l => console.log('  FAIL ' + l));
process.exit(fail.length ? 1 : 0);
