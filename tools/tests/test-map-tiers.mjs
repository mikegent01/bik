// Settlement tiering and proximity grouping, model-level: the tier ladder, the
// anchor rule, determinism, the "nothing is lost" guarantee, and the zoom
// window. Runs against REAL map data, so a filing that would bury a pin under
// another pin fails here rather than in the browser.
//
//   node tools/tests/test-map-tiers.mjs
import { MAP_DATA } from '../../Reputation-Matrix2/data/maps/map-data.js';
import {
  TIERS, tierOf, tierRank, poiWeight, groupPois, groupLabel, groupBreakdown,
  groupWindow, windowScale, windowLayout, sortedMembers, uniquePins,
} from '../../Reputation-Matrix2/app/pages/maps/map-tiers.js';

const fail = [], ok = [];
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));

/* ---------------- the tier ladder ---------------- */

check('four tiers, ranked high to low', TIERS.length === 4 && TIERS.every((t, i) => i === 0 || TIERS[i - 1].rank > t.rank));
check('a bigger tier reaches further', TIERS.every((t, i) => i === 0 || TIERS[i - 1].radius > t.radius));
check('a capital is a City', tierOf({ type: 'capital_city' }).key === 'city');
check('a major city is a City', tierOf({ type: 'major_city' }).key === 'city');
check('a filed town is a Town', tierOf({ type: 'town', population: 10 }).key === 'town');
check('a hamlet is a Village', tierOf({ type: 'hamlet' }).key === 'village');
check('a shrine with nobody in it is a Site', tierOf({ type: 'shrine' }).key === 'site');
check('population promotes an untyped pin to City', tierOf({ type: 'landmark', population: 40000 }).key === 'city');
check('population promotes an untyped pin to Town', tierOf({ type: 'landmark', population: 9000 }).key === 'town');
check('population promotes an untyped pin to Village', tierOf({ type: 'landmark', population: 900 }).key === 'village');
check('a palace is a seat, not a shack', tierRank({ type: 'castle', population: 5000 }) > tierRank({ type: 'shrine', population: 5 }));
check('an explicitly filed tier wins over the guess', tierOf({ tier: 'village', type: 'capital_city' }).key === 'village');
check('a nonsense filed tier falls back to the guess', tierOf({ tier: 'metropolis', type: 'capital_city' }).key === 'city');
check('a missing poi degrades to Site', tierOf(null).key === 'site');
check('weight counts the three pillars and logged population',
  Math.abs(poiWeight({ political_influence: 2, military_strength: 3, economic_value: 4, population: 1000 }) - 12) < 1e-9,
  String(poiWeight({ political_influence: 2, military_strength: 3, economic_value: 4, population: 1000 })));

/* ---------------- the anchor rule ---------------- */

const pile = [
  { id: 'cap', x: 50, y: 50, type: 'capital_city', population: 30000, political_influence: 10 },
  { id: 'shrine', x: 50.3, y: 50.2, type: 'shrine' },
  { id: 'barracks', x: 51.0, y: 50.4, type: 'barracks' },
  { id: 'hamlet', x: 50.8, y: 49.6, type: 'hamlet' },
  { id: 'faraway', x: 80, y: 20, type: 'village', population: 400 },
];
const piled = groupPois(pile);
const capGroup = piled.find(g => g.anchor.id === 'cap');
check('a pile collapses under its biggest settlement', capGroup && capGroup.members.length === 4, capGroup ? `${capGroup.members.length} members` : 'no group');
check('the anchor is the capital, not whichever was met first', capGroup && capGroup.anchor.id === 'cap');
check('the group takes the anchor tier', capGroup && capGroup.tier === 'city');
check('the group sits on the anchor coordinate', capGroup && capGroup.x === 50 && capGroup.y === 50);
check('a distant village is left alone', piled.some(g => g.anchor.id === 'faraway' && !g.isGroup));
check('every filed pin survives grouping', piled.reduce((n, g) => n + g.members.length, 0) === pile.length);
check('no pin is filed into two groups', new Set(piled.flatMap(g => g.members.map(m => m.id))).size === pile.length);

const twoCities = groupPois([
  { id: 'a', x: 50, y: 50, type: 'capital_city', population: 30000 },
  { id: 'b', x: 51, y: 50, type: 'major_city', population: 25000 },
]);
check('a peer city is never swallowed by its neighbour', twoCities.length === 2, `${twoCities.length} markers`);

const villagePair = groupPois([
  { id: 'v', x: 10, y: 10, type: 'village', population: 500 },
  { id: 's1', x: 10.2, y: 10.1, type: 'shrine' },
  { id: 's2', x: 12.5, y: 10.0, type: 'shrine' },
]);
const vGroup = villagePair.find(g => g.anchor.id === 'v');
check('a village reaches only as far as a village should', vGroup && vGroup.members.length === 2, vGroup ? `${vGroup.members.length} members` : 'no group');
check('the shrine outside the village catchment stands alone', villagePair.some(g => g.anchor.id === 's2' && !g.isGroup));

check('scale tightens the catchment as the reader zooms in',
  groupPois(pile, { scale: 0.2 }).length > groupPois(pile, { scale: 1 }).length);
check('a group is capped at its member ceiling',
  groupPois(Array.from({ length: 30 }, (_, i) => ({ id: `p${i}`, x: 50 + i * 0.01, y: 50, type: i ? 'shrine' : 'capital_city', population: i ? 0 : 30000 })), { max: 5 })
    .every(g => g.members.length <= 5));
check('a lone pin is a pin, never a group of one', groupPois([{ id: 'solo', x: 1, y: 1, type: 'shrine' }])[0].isGroup === false);

/* determinism: the filed order must not change the map */
const shuffled = [...pile].reverse();
const a = groupPois(pile).map(g => `${g.id}:${g.members.map(m => m.id).sort().join(',')}`).join('|');
const b = groupPois(shuffled).map(g => `${g.id}:${g.members.map(m => m.id).sort().join(',')}`).join('|');
check('grouping is order-independent', a === b, a === b ? '' : `${a}\n   vs ${b}`);
check('empty input groups to nothing', groupPois([]).length === 0);
check('a pin filed twice is counted once', uniquePins([{ id: 'x' }, { id: 'x' }, { id: 'y' }]).length === 2);
check('unfiled rows stay separate', uniquePins([{ name: 'a' }, { name: 'b' }]).length === 2);
check('a duplicate pin never doubles a group', groupPois([{ id: 'd', x: 5, y: 5, type: 'shrine' }, { id: 'd', x: 5, y: 5, type: 'shrine' }]).length === 1);

/* ---------------- labels ---------------- */

check('a group label counts what is hidden behind the anchor',
  groupLabel({ isGroup: true, anchor: { name: 'Mighdural' }, members: [1, 2, 3] }) === 'Mighdural +2');
check('a lone pin label is just the name', groupLabel({ isGroup: false, anchor: { name: 'Lone Shrine' }, members: [1] }) === 'Lone Shrine');
check('the breakdown reads highest tier first', groupBreakdown(capGroup) === '1 City · 1 Village · 2 Sites', groupBreakdown(capGroup));
check('members scan biggest place first', sortedMembers(capGroup)[0].id === 'cap');

/* ---------------- the hyper-zoom window ---------------- */

const win = groupWindow(capGroup);
check('the window contains every member', capGroup.members.every(p => p.x >= win.x0 && p.x <= win.x1 && p.y >= win.y0 && p.y <= win.y1));
check('the window has area', win.width > 0 && win.height > 0);
check('the window magnifies the sheet', windowScale(win) > 1, `${windowScale(win).toFixed(1)}x`);

const stacked = groupPois([
  { id: 'c', x: 50, y: 50, type: 'capital_city', population: 30000 },
  { id: 'x', x: 50, y: 50, type: 'shrine' },
  { id: 'y', x: 50, y: 50, type: 'shrine' },
])[0];
const stackedWin = groupWindow(stacked);
check('pins at the identical coordinate still get a window', stackedWin.width > 0 && stackedWin.height > 0);

const layout = windowLayout(stacked, stackedWin);
check('the layout places every member', layout.length === 3);
check('co-located pins are nudged apart so all stay clickable', (() => {
  for (let i = 0; i < layout.length; i++) for (let j = i + 1; j < layout.length; j++) {
    if (Math.hypot(layout[i].x - layout[j].x, layout[i].y - layout[j].y) < 6) return false;
  }
  return true;
})());
check('the layout stays inside the window', layout.every(p => p.x >= 0 && p.x <= 100 && p.y >= 0 && p.y <= 100));
check('the layout is stable between renders',
  JSON.stringify(windowLayout(stacked, stackedWin).map(p => [p.id, p.x.toFixed(4), p.y.toFixed(4)]))
  === JSON.stringify(layout.map(p => [p.id, p.x.toFixed(4), p.y.toFixed(4)])));

const edgeWin = groupWindow({ members: [{ x: 0, y: 0 }, { x: 0.1, y: 0.1 }] });
check('a window at the sheet corner slides back on', edgeWin.x0 >= 0 && edgeWin.y0 >= 0 && edgeWin.x1 <= 100 && edgeWin.y1 <= 100);

/* ---------------- against the real atlas ---------------- */

const realIds = Object.keys(MAP_DATA).filter(id => (MAP_DATA[id]?.pointsOfInterest || []).length > 0);
let totalPins = 0, totalMarkers = 0, worstOverlap = 0, biggest = null;
realIds.forEach(id => {
  const pois = uniquePins(MAP_DATA[id].pointsOfInterest);
  const groups = groupPois(pois);
  const kept = groups.reduce((n, g) => n + g.members.length, 0);
  if (kept !== pois.length) fail.push(`${id}: grouping lost a pin (${pois.length} → ${kept})`);
  const ids = new Set(groups.flatMap(g => g.members.map(m => m.id)));
  if (ids.size !== new Set(pois.map(p => p.id)).size) fail.push(`${id}: a pin was filed into two groups`);
  totalPins += pois.length;
  totalMarkers += groups.length;
  groups.forEach(g => {
    if (!biggest || g.members.length > biggest.members.length) biggest = g;
    const w = groupWindow(g);
    const lay = windowLayout(g, w);
    for (let i = 0; i < lay.length; i++) for (let j = i + 1; j < lay.length; j++) {
      const d = Math.hypot(lay[i].x - lay[j].x, lay[i].y - lay[j].y);
      if (d < 6) worstOverlap++;
    }
  });
});
check(`the whole atlas groups clean (${totalPins} pins → ${totalMarkers} markers)`, fail.length === 0);
check('grouping actually thins the pile', totalMarkers < totalPins, `${totalPins - totalMarkers} pins tucked into groups`);
check('no zoom window leaves two pins on top of each other', worstOverlap === 0, `${worstOverlap} overlaps`);
check('the Midlands capital district collapses into one readable marker', (() => {
  const g = groupPois(MAP_DATA.midlands_full.pointsOfInterest).find(x => x.members.some(m => m.id === 'poi_mid_imperial_palace'));
  return g && g.members.length > 1;
})());
check('the biggest group is still a group, not the whole sheet', biggest && biggest.members.length <= 12, biggest ? `${biggest.members.length} members in ${biggest.id}` : '');

console.log(`\n${ok.length} passed, ${fail.length} failed`);
ok.forEach(l => console.log('  ok   ' + l));
fail.forEach(l => console.log('  FAIL ' + l));
process.exit(fail.length ? 1 : 0);
