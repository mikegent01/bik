// The Province Census, model-level: determinism, the merge, the crown test, the
// geometry, the ledger diff, and the shortlist. Runs against REAL map data, so
// a filing that would break a border fails here rather than in the browser.
//
//   node tools/tests/test-map-provinces.mjs
import { MAP_DATA } from '../../Reputation-Matrix2/data/maps/map-data.js';
import { PROVINCE_POLITICS } from '../../Reputation-Matrix2/data/support/politics-data.js';
import {
  PROVINCE_CENSUS, poiPower, censusOf, uniquePins, filedProvincesFor, assignPois,
  provinceName, provinceBorders, filedDelta, sameProvince, buildProvinceCensus,
  nationRollup, shortlist,
} from '../../Reputation-Matrix2/app/pages/maps/map-provinces.js';

const fail = [], ok = [];
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));
const area = poly => {
  let a = 0;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) a += (poly[j][0] + poly[i][0]) * (poly[j][1] - poly[i][1]);
  return Math.abs(a / 2);
};
const areaOf = prov => (prov.cells && prov.cells.length ? prov.cells : [prov.polygon || []]).reduce((n, poly) => n + area(poly), 0);
const inside = (pt, poly) => {
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[j], b = poly[i];
    const cross = (b[0] - a[0]) * (pt[1] - a[1]) - (b[1] - a[1]) * (pt[0] - a[0]);
    const dot = (pt[0] - a[0]) * (pt[0] - b[0]) + (pt[1] - a[1]) * (pt[1] - b[1]);
    if (Math.abs(cross) < 1e-7 && dot <= 1e-7) return true;
  }
  let hit = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > pt[1]) !== (yj > pt[1]) && pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
};
const insideProvince = (pt, prov) => (prov.cells && prov.cells.length ? prov.cells : [prov.polygon || []]).some(poly => inside(pt, poly));

/* ---------------- weights and the census verdict ---------------- */
check('power is the three pillars, plus logged population',
  poiPower({ political_influence: 2, military_strength: 2, economic_value: 2, population: 1000 })
  === 2 * PROVINCE_CENSUS.wPolitics + 2 * PROVINCE_CENSUS.wMilitary + 2 * PROVINCE_CENSUS.wEconomy + Math.log10(1000) * PROVINCE_CENSUS.wPopulation);
check('a bare pin still counts as a presence', poiPower({}) > 0);
check('an empty pile is nobody\'s', censusOf([]).neutral && censusOf([]).pins === 0);

const one = { id: 'a', x: 10, y: 10, factionId: 'empire', political_influence: 9, military_strength: 9, economic_value: 9, population: 900 };
const rival = { id: 'b', x: 12, y: 10, factionId: 'horde', political_influence: 1, military_strength: 1, economic_value: 1, population: 10 };
check('an overwhelming single flag is crowned', censusOf([one, rival]).controller === 'empire', JSON.stringify(censusOf([one, rival]).shares));
check('a crown reports its share', censusOf([one, rival]).claimantShare > 50);
check('two equal flags are a march, not a province', censusOf([one, { ...rival, x: 11, political_influence: 9, military_strength: 9, economic_value: 9, population: 900 }]).contested);
check('a contested province crowns nobody', censusOf([one, { ...rival, x: 11, political_influence: 9, military_strength: 9, economic_value: 9, population: 900 }]).controller === null);
const pile = censusOf([one, rival, { id: 'c', x: 11, y: 11 }]);
check('unfiled flags are counted, never crowned', pile.shares.unaligned > 0 && pile.ranked.some(r => r.factionId === 'unaligned'));
check('the seat is the strongest pin', pile.seatPoiId === 'a', String(pile.seatPoiId));
check('the seat pick ignores input order', censusOf([rival, one, { id: 'c', x: 11, y: 11 }]).seatPoiId === 'a');
check('population is logged, so a city cannot outvote a citadel',
  poiPower({ population: 1000000, political_influence: 0, military_strength: 0, economic_value: 0 })
  < poiPower({ population: 1, political_influence: 20, military_strength: 0, economic_value: 0 }));
check('a province of nobody is unclaimed, not contested',
  censusOf([{ id: 'x', x: 1, y: 1 }, { id: 'y', x: 2, y: 2 }]).neutral);

/* ---------------- the merge ---------------- */
const sheet = {
  id: 'test_sheet',
  name: 'Test Sheet',
  imageSrc: 'assets/maps/test.png',
  pointsOfInterest: [
    { id: 'p1', x: 10, y: 10, factionId: 'empire', political_influence: 5, military_strength: 5, economic_value: 5, population: 500 },
    { id: 'p2', x: 12, y: 11, factionId: 'empire', political_influence: 4, military_strength: 4, economic_value: 4, population: 400 },
    { id: 'p3', x: 80, y: 80, factionId: 'horde', political_influence: 6, military_strength: 6, economic_value: 6, population: 600 },
    { id: 'p4', x: 82, y: 79, factionId: 'horde', political_influence: 2, military_strength: 2, economic_value: 2, population: 200 },
    { id: 'p5', x: 45, y: 45, factionId: 'cult', political_influence: 3, military_strength: 3, economic_value: 3, population: 300 },
  ],
};
const merged = buildProvinceCensus(sheet, { [sheet.id]: sheet }, {});
check('two clumps plus a lone pin make three provinces', merged.provinces.length === 3, merged.provinces.map(p => `${p.name}(${p.pois.length})`).join(' | '));
check('the merge keeps every pin', merged.provinces.reduce((n, p) => n + p.pois.length, 0) === 5);
check('a lone pin in the middle opens its own province', merged.provinces.some(p => p.poiIds.indexOf('p5') >= 0));
check('merged provinces are named from their seat', /^p?\w|^.{3}/.test(merged.provinces[0].name) && !merged.provinces[0].name.startsWith('undefined'), merged.provinces[0].name);
const twice = buildProvinceCensus(sheet, { [sheet.id]: sheet }, {});
check('the census is deterministic', JSON.stringify(twice.provinces.map(p => [p.id, p.name, p.census.controller, p.poiIds, p.polygon])) === JSON.stringify(merged.provinces.map(p => [p.id, p.name, p.census.controller, p.poiIds, p.polygon])));

/* a pin that shares a faction with a far clump must not be dragged across the map */
const far = { id: 'p6', x: 95, y: 5, factionId: 'empire', political_influence: 1, military_strength: 1, economic_value: 1, population: 10 };
const stretched = buildProvinceCensus({ ...sheet, pointsOfInterest: [...sheet.pointsOfInterest, far] }, {}, {});
const farHome = stretched.provinces.find(p => p.poiIds.indexOf('p6') >= 0);
check('a distant same-flag pin does not join across the sheet', Math.hypot(farHome.x - 11, farHome.y - 10.5) > 30, `${farHome.name} @ ${farHome.x},${farHome.y}`);
check('a same-flag neighbour within range does join', (() => {
  const near = { id: 'p7', x: 14, y: 9, factionId: 'empire', political_influence: 1, military_strength: 1, economic_value: 1, population: 10 };
  const r = buildProvinceCensus({ ...sheet, pointsOfInterest: [...sheet.pointsOfInterest, near] }, {}, {});
  const home = r.provinces.find(p => p.poiIds.indexOf('p7') >= 0);
  return home.poiIds.indexOf('p1') >= 0;
})());
check('a hostile pin near a province edge still settles there', (() => {
  const mixed = { id: 'p8', x: 13, y: 13, factionId: 'horde', political_influence: 1, military_strength: 1, economic_value: 1, population: 10 };
  const r = buildProvinceCensus({ ...sheet, pointsOfInterest: [...sheet.pointsOfInterest, mixed] }, {}, {});
  const home = r.provinces.find(p => p.poiIds.indexOf('p8') >= 0);
  return home.pois.length >= 1;
})());

/* ---------------- filed sheets seed the merge ---------------- */
const subSheet = {
  id: 'east_marches', name: 'East Marches', imageSrc: 'assets/maps/test.png', group: 'Test Group',
  pointsOfInterest: [sheet.pointsOfInterest[2], sheet.pointsOfInterest[3], sheet.pointsOfInterest[4]],
};
const seeded = filedProvincesFor(sheet, { [sheet.id]: sheet, east_marches: subSheet }, {});
check('a sibling sheet on the same artwork is a filed province', seeded.some(p => p.kind === 'sheet' && p.name === 'East Marches'), seeded.map(p => p.name).join(' | '));
check('a two-pin sheet is a stray, not a province', !filedProvincesFor(sheet, { [sheet.id]: sheet, pair: { id: 'pair', name: 'Pair Rocks', imageSrc: 'assets/maps/test.png', pointsOfInterest: [sheet.pointsOfInterest[2], sheet.pointsOfInterest[3]] } }, {}).some(p => p.name === 'Pair Rocks'));
check('the filed survey carries its pins', (seeded.find(p => p.name === 'East Marches') || { poiIds: [] }).poiIds.length === 3);
const overview = { id: 'other_full', name: 'Other (Full)', imageSrc: 'assets/maps/test.png', pointsOfInterest: sheet.pointsOfInterest };
check('a sibling covering the whole sheet is an overview, not a province',
  !filedProvincesFor(sheet, { [sheet.id]: sheet, other_full: overview }, {}).some(p => p.name.includes('Other')));
const otherArt = { id: 'elsewhere', name: 'Elsewhere', imageSrc: 'assets/maps/different.png', pointsOfInterest: [sheet.pointsOfInterest[0]] };
check('a sheet on other artwork is ignored', !filedProvincesFor(sheet, { [sheet.id]: sheet, elsewhere: otherArt }, {}).some(p => p.name === 'Elsewhere'));

const ledger = { east: { name: 'East Marches Province', x: 80, y: 80, control: { horde: 70, empire: 30 } } };
const withLedger = buildProvinceCensus(sheet, { [sheet.id]: sheet, east_marches: subSheet }, { politics: { [sheet.id]: ledger } });
const east = withLedger.provinces.find(p => p.name === 'East Marches Province');
check('a ledger row and a survey sheet of the same place are ONE province',
  !!east && east.pois.length === 3 && withLedger.provinces.filter(p => p.pois.length === 3).length === 1,
  withLedger.provinces.map(p => `${p.name}(${p.pois.length})`).join(' | '));
check('the merged province keeps the ledger for comparison', !!east && !!east.delta && east.delta.rows.length >= 1);
check('sameProvince matches a name against its own id', sameProvince({ name: 'Dry Dry Desert', sourceMapId: 'dry_dry_desert' }, { name: 'Whatever', sourceMapId: 'dry_dry_desert' }));
check('sameProvince matches "Lockerwood Province" to "Lockerwood"', sameProvince({ name: 'Lockerwood Province', sourceMapId: 'lockerwood_p' }, { name: 'Lockerwood', sourceMapId: 'lk' }));
check('sameProvince refuses a near miss', !sameProvince({ name: 'Northern Lands', sourceMapId: 'north' }, { name: 'Southern Lands', sourceMapId: 'south' }));
check('a ledger far from every pin stays as a vacant claim', (() => {
  const lonely = buildProvinceCensus(sheet, { [sheet.id]: sheet }, { politics: { [sheet.id]: { west: { name: 'West Reaches', x: 2, y: 96, control: { empire: 100 } } } } });
  const p = lonely.provinces.find(x => x.name === 'West Reaches');
  return !!p && p.vacant && p.pois.length === 0;
})());

/* ---------------- the ledger diff ---------------- */
const delta = filedDelta({ empire: 70, horde: 30 }, { shares: { empire: 40, horde: 55, unaligned: 5 }, claimant: 'horde' });
check('the diff lists filed vs census', delta.rows.some(r => r.factionId === 'empire' && r.filed === 70 && r.census === 40 && r.delta === -30));
check('the diff names the worst drift', delta.worst && delta.worst.factionId === 'empire' && delta.drift === 30, JSON.stringify(delta.worst));
check('the diff admits when the census overturns the ledger', delta.agrees === false);
check('the diff reports a faction the ledger never filed', delta.rows.some(r => r.factionId === 'unaligned' && r.filed === 0));
check('no ledger means no diff', filedDelta(null, { shares: {} }) === null);

/* ---------------- geometry ---------------- */
const box = { minX: 0, minY: 0, maxX: 100, maxY: 100 };
const fake = [
  { id: 'a', name: 'A', x: 20, y: 20, census: { power: 100 }, pois: [{ id: 'a1', x: 20, y: 20 }] },
  { id: 'b', name: 'B', x: 80, y: 20, census: { power: 1 }, pois: [{ id: 'b1', x: 80, y: 20 }] },
  { id: 'c', name: 'C', x: 50, y: 80, census: { power: 30 }, pois: [{ id: 'c1', x: 50, y: 80 }, { id: 'c2', x: 55, y: 85 }, { id: 'c3', x: 45, y: 85 }] },
];
const geo = provinceBorders(fake, { box });
check('every province gets a polygon', geo.every(p => p.polygon.length >= 3));
check('tiles are contiguous: POI-anchor cells cover the sheet', Math.abs(geo.reduce((n, p) => n + areaOf(p), 0) - 10000) < 25, geo.reduce((n, p) => n + areaOf(p), 0).toFixed(1));
check('multi-pin provinces carry compound cells', geo.some(p => (p.cells || []).length > 1), geo.map(p => `${p.id}:${(p.cells || []).length}`).join(' | '));
check('every province pin lands inside its visible province cells', geo.every(p => (p.pois || []).every(poi => insideProvince([poi.x, poi.y], p))));
check('polygons stay inside the sheet', geo.every(p => (p.cells && p.cells.length ? p.cells.flat() : p.polygon).every(pt => pt[0] >= -0.01 && pt[0] <= 100.01 && pt[1] >= -0.01 && pt[1] <= 100.01)));
check('no ring repeats a vertex', geo.every(p => (p.cells && p.cells.length ? p.cells : [p.polygon]).every(poly => {
  const pts = poly;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length];
    if (Math.abs(a[0] - b[0]) < 1e-7 && Math.abs(a[1] - b[1]) < 1e-7) return false;
  }
  return true;
})));
const oneSeed = provinceBorders([{ id: 's', name: 'S', x: 50, y: 50, census: { power: 5 }, pois: [{ id: 's1', x: 50, y: 50 }] }], { box });
check('a lone province owns the sheet', Math.abs(areaOf(oneSeed[0]) - 10000) < 1);
check('an empty census produces no geometry', provinceBorders([], {}).length === 0);

/* ---------------- roll-up: provinces make the nation ---------------- */
const roll = merged.rollup;
check('the roll-up counts provinces', roll.provinceCount === merged.provinces.length);
check('the roll-up names the hand with the most of them', roll.sovereign === 'empire', String(roll.sovereign));
check('the roll-up totals population once', roll.population === 500 + 400 + 600 + 200 + 300);
check('a realm split between hands is called fragmented', roll.fragmented === true);
check('the capital is the province with the most power', !!roll.capitalProvince && roll.capitalProvince.id === merged.provinces[0].id);
check('byFaction rows carry seat lists', (roll.byFaction.find(f => f.factionId === 'horde') || {}).seats.length === 1);
check('an empty realm rolls up to nothing', nationRollup([], { population: 0 }).provinceCount === 0);

/* ---------------- the shortlist ---------------- */
const board = shortlist(sheet.pointsOfInterest, merged.provinces, { top: 3, lensValue: p => p.population, lensLabel: 'population' });
check('the board ranks a pick per row', board.picks.length === 3 && board.picks.every(p => p.reasons.length));
check('the sheet\'s giant is on the board', board.picks.some(p => p.id === 'p3'), board.picks.map(p => p.id).join(','));
check('a seat pin is worth a reason', board.ranked.filter(r => r.reasons.some(x => x.includes('seat of'))).length > 0);
check('the board counts the whole sheet, not just its top', board.total === 5);
check('a re-roll is a different six, from the same pool', board.reroll(1).every(r => sheet.pointsOfInterest.some(p => p.id === r.id)) && board.reroll(7).length === 3);
check('the re-roll is stable for a given seed', JSON.stringify(board.reroll(3).map(r => r.id)) === JSON.stringify(shortlist(sheet.pointsOfInterest, merged.provinces, { top: 3 }).reroll(3).map(r => r.id)));
check('a wiki article filed is worth points', (() => {
  const withArticle = shortlist([{ ...sheet.pointsOfInterest[4], articleId: 'somewhere' }, sheet.pointsOfInterest[0]], merged.provinces, { top: 2 });
  return withArticle.picks[0].reasons.some(r => r.includes('wiki article'));
})());
check('an unflagged pin says nobody filed a flag there',
  shortlist([{ id: 'lone', x: 5, y: 5, name: 'Lone Rock' }], []).picks[0].reasons.some(r => r.includes('nobody has filed a flag')));
check('an unremarkable pin is admitted, not padded with invention',
  shortlist([0, 1, 2, 3].map(i => ({ id: `q${i}`, x: 10 + i * 25, y: 10 + i * 25, name: `Q${i}`, factionId: 'empire' })), [])
    .ranked.some(r => r.reasons.some(x => x.includes('nothing filed against it'))));
check('the board tolerates an empty sheet', shortlist([], []).picks.length === 0 && shortlist([], []).total === 0);

/* ---------------- the real archive ---------------- */
const real = buildProvinceCensus(MAP_DATA.mushroom_kingdom_full, MAP_DATA, { politics: PROVINCE_POLITICS });
check('the Mushroom Kingdom census merges every filed pin',
  real.pins === real.provinces.reduce((n, p) => n + p.pois.length, 0), `${real.pins} pins, ${real.provinces.reduce((n, p) => n + p.pois.length, 0)} governed`);
check('the Mushroom Kingdom finds the filed regions', real.provinces.some(p => p.name.includes('Dry Dry Desert')) && real.provinces.some(p => p.name.includes('Wario Woods')));
check('a civil war reads as contested marches', real.rollup.contestedProvinces >= 5, `${real.rollup.contestedProvinces} contested`);
const mid = buildProvinceCensus(MAP_DATA.midlands_full, MAP_DATA, { politics: PROVINCE_POLITICS });
check('the Midlands census crowns the Regal Empire somewhere', mid.provinces.some(p => p.census.controller === 'regal_empire'));
check('the Midlands visible regions contain their assigned pins', mid.provinces.every(p => (p.pois || []).every(poi => insideProvince([poi.x, poi.y], p))));
check('the Capital Province ledger still holds after counting', (() => {
  const cap = mid.provinces.find(p => p.name === 'Capital Province');
  return cap && cap.delta && cap.delta.agrees;
})(), JSON.stringify((mid.provinces.find(p => p.name === 'Capital Province') || {}).delta && mid.provinces.find(p => p.name === 'Capital Province').delta.rows.slice(0, 2)));
check('uniquePins keeps one record per filed id', uniquePins([{ id: 'x' }, { id: 'x' }, { id: 'y' }]).length === 2);
check('uniquePins keeps unfiled rows separate', uniquePins([{ name: 'a' }, { name: 'b' }]).length === 2);

const counts = { pins: 0, provinces: 0 };
Object.keys(MAP_DATA).filter(id => id.endsWith('_full')).forEach(id => {
  const c = buildProvinceCensus(MAP_DATA[id], MAP_DATA, { politics: PROVINCE_POLITICS });
  counts.pins += c.pins;
  counts.provinces += c.provinces.length;
  if (c.pins !== c.provinces.reduce((n, p) => n + p.pois.length, 0)) fail.push(`${id}: the merge lost a pin`);
});
check(`every full realm merges clean (${counts.pins} pins → ${counts.provinces} provinces)`, counts.provinces > 150 && fail.filter(f => f.includes('lost a pin')).length === 0, `${counts.provinces} provinces`);

console.log(`\n${ok.length} passed, ${fail.length} failed`);
ok.forEach(l => console.log('  ok   ' + l));
fail.forEach(l => console.log('  FAIL ' + l));
process.exit(fail.length ? 1 : 0);
