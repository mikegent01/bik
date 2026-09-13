// Categorical atlas lenses: pure-helper unit checks plus a REAL renderer mount
// (lockerwood + canned census) proving Species / Religion / Culture / Factions
// paint pins, legends, totals, and the detail panel.
//
//   node tools/tests/test-map-lenses.mjs
import { JSDOM, VirtualConsole } from 'jsdom';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { hashColor, initial, isSafeLogo, topCats, legendChips } from '../../Reputation-Matrix2/app/pages/maps/map-lenses.js';
import { MAP_DATA } from '../../Reputation-Matrix2/data/maps/map-data.js';
import { getFaction, getFactionColor } from '../../Reputation-Matrix2/systems/faction-registry.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const fail = [], ok = [];
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));

/* ---------------- pure helpers ---------------- */
check('hashColor is deterministic', hashColor('Toad') === hashColor('Toad'));
check('hashColor spreads categories', hashColor('Toad') !== hashColor('Human'), `${hashColor('Toad')} vs ${hashColor('Human')}`);
check('hashColor returns hsl', /^hsl\(\d+ 62% 58%\)$/.test(hashColor('x')));
check('initial takes the first letter', initial('Imperial Heartland') === 'I');
check('initial skips leading punctuation', initial('"Old Night"') === 'O');
check('initial falls back to a dot', initial('') === '●' && initial('!!!') === '●');
check('isSafeLogo accepts filed art', isSafeLogo('assets/factions/faction_regal_empire.png'));
check('isSafeLogo rejects climbing paths', !isSafeLogo('assets/factions/../../index.html'));
check('isSafeLogo rejects schemes + scripts', !isSafeLogo('https://x/y.png') && !isSafeLogo('assets/factions/x.js'));
check('isSafeLogo rejects extensionless paths', !isSafeLogo('assets/icons/navigation/world_assembly'));

const cats = topCats(
  [{ c: 'a' }, { c: 'b' }, { c: 'a' }, { c: null }, { c: 'c' }],
  it => (it.c ? { key: it.c, label: it.c.toUpperCase(), color: '#fff' } : null),
  2,
);
check('topCats groups + sorts', cats.cats.length === 2 && cats.cats[0].key === 'a' && cats.cats[0].pins === 2, JSON.stringify(cats.cats));
check('topCats reports the hidden tail', cats.more === 1);
check('topCats tolerates empty input', topCats([], () => null).cats.length === 0);
check('legendChips is honest when empty', legendChips([]) === 'no pins filed yet');
check('legendChips shows icons + counts', legendChips([{ label: 'The Celestial Order', color: '#FFD700', icon: '☀️', pins: 12 }]).includes('☀️ The Celestial Order ×12'));
check('legendChips swatches letter glyphs', legendChips([{ label: 'Toad', color: '#123456', icon: 'T', pins: 3 }]).includes('<i style="background:#123456"></i>'));
check('legendChips appends the tail', legendChips([{ label: 'A', color: '#fff', pins: 1 }], 2).endsWith('+2 more'));
check('legendChips escapes labels', !legendChips([{ label: '<img src=x>', color: '#fff', pins: 1 }]).includes('<img src=x>'));

/* ---------------- renderer mount ---------------- */
const vc = new VirtualConsole();
const errors = [];
vc.on('jsdomError', (e) => {
  const m = e.detail ? (e.detail.stack || e.detail.message) : e.message;
  if (/Could not parse CSS|Could not load img|Could not load script/i.test(String(m))) return;
  errors.push('jsdomError: ' + String(m).slice(0, 300));
});
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://127.0.0.1/', pretendToBeVisual: true, virtualConsole: vc,
});
globalThis.window = dom.window;
globalThis.document = dom.window.document;
const { mountAtlasMapV2 } = await import('../../Reputation-Matrix2/app/pages/maps/atlas-map-v2.js');

const CENSUS = {
  species: { counts: {}, top: {
    poi_lw_oakhaven: { label: 'Toad', n: 9, list: ['Toad (9)', 'Human (2)'] },
    poi_lw_bloodmoon_manor: { label: 'Human', n: 4, list: ['Human (4)'] },
  } },
  faiths: { counts: {}, top: {
    poi_lw_oakhaven: { label: 'Veneration of the Stars', n: 6, list: ['Veneration of the Stars (6)'],
      group: { id: 'celestial_order', name: 'The Celestial Order', color: '#FFD700', icon: '☀️' }, groupN: 7 },
    poi_lw_bloodmoon_manor: { label: 'Old Night', n: 2, list: ['Old Night (2)'], group: null, groupN: 2 },
  } },
  cultures: { counts: {}, top: {
    poi_lw_oakhaven: { label: 'Imperial Heartland', n: 1, list: ['Imperial Heartland'] },
  } },
};

const host = dom.window.document.createElement('div');
dom.window.document.body.appendChild(host);
const handle = mountAtlasMapV2(host, 'lockerwood', { census: CENSUS });
host.querySelector('[data-map-art]').dispatchEvent(new dom.window.Event('load'));

const markerFor = id => host.querySelector(`[data-poi="${id}"]`);
const markerColor = id => (markerFor(id).style.getPropertyValue('--marker') || '').trim();
const clickMode = id => host.querySelector(`[data-mode="${id}"]`).click();
const legend = () => host.querySelector('[data-legend-lens]').textContent || '';
const total = () => host.querySelector('[data-mode-total]').textContent || '';

check('all eight lenses mount in order',
  [...host.querySelectorAll('[data-mode]')].map(b => b.dataset.mode).join(',') ===
  'population,military,economy,influence,species,religion,culture,factions');

clickMode('religion');
check('religion pins read the group color', markerColor('poi_lw_oakhaven') === '#FFD700', markerColor('poi_lw_oakhaven'));
check('ungrouped faiths bucket honestly', markerColor('poi_lw_bloodmoon_manor') === '#8a94a6', markerColor('poi_lw_bloodmoon_manor'));
check('unfiled pins dim grey', markerColor('poi_lw_battle_of_ravencreek') === '#5b6b8a', markerColor('poi_lw_battle_of_ravencreek'));
check('religion legend names groups + counts', legend().includes('☀️ The Celestial Order ×1') && legend().includes('Other faiths ×1'), legend().slice(0, 120));
check('religion legend keeps size language', legend().includes('pin size = filed adherents'));
check('religion total counts filed pins', total() === '2 of 16 pins filed', total());

clickMode('species');
check('species pins read the hashed color', markerColor('poi_lw_oakhaven') === hashColor('species:Toad'), markerColor('poi_lw_oakhaven'));
check('species pins glyph the initial', markerFor('poi_lw_oakhaven').querySelector('span').textContent === 'T');
check('species total counts filed pins', total() === '2 of 16 pins filed', total());

clickMode('culture');
check('culture pins glyph the initial', markerFor('poi_lw_oakhaven').querySelector('span').textContent === 'I');
check('culture legend names the culture', legend().includes('Imperial Heartland ×1'), legend().slice(0, 100));
check('culture total counts filed pins', total() === '1 of 16 pins filed', total());

clickMode('factions');
const flagged = handle.getPois().find(p => p.factionId && markerFor(p.id));
check('factions mode finds a flagged pin', !!flagged);
if (flagged) {
  const meta = getFaction(flagged.factionId) || {};
  check('faction pins read the registry color', markerColor(flagged.id) === getFactionColor(flagged.factionId),
    `${markerColor(flagged.id)} vs ${getFactionColor(flagged.factionId)}`);
  const logo = meta.logo;
  const logoFiled = logo && isSafeLogo(logo) && fs.existsSync(path.join(ROOT, 'Reputation-Matrix2', logo));
  const img = markerFor(flagged.id).querySelector('img.atlas-v2-glyph');
  if (logoFiled) {
    check('faction pins carry logo art', !!img && (img.getAttribute('src') || '').includes(path.basename(logo)), img ? img.getAttribute('src').slice(-50) : 'no img');
  } else {
    check('logo-less factions fall back to initials', !img && markerFor(flagged.id).querySelector('span').textContent === initial(meta.name || flagged.factionId));
  }
  check('faction legend names the flag', legend().includes(meta.name || flagged.factionId), legend().slice(0, 140));
}
check('factions file every pin', total() === '16 of 16 pins filed', total());

clickMode('military');
check('numeric lenses keep their language', legend().includes('pin size = Military') && total().includes('garrison'));

handle.select('poi_lw_oakhaven');
const side = host.querySelector('.atlas-v2-sidebar').innerHTML;
check('detail keeps the species + faith lists', side.includes('Toad (9)') && side.includes('Veneration of the Stars (6)'));
check('detail adds the culture line', side.includes('🏛️') && side.includes('Imperial Heartland'));
const oakFaction = (MAP_DATA.lockerwood.pointsOfInterest.find(p => p.id === 'poi_lw_oakhaven') || {}).factionId;
if (oakFaction) check('detail names the registry faction', host.querySelector('.atlas-v2-sidebar').textContent.includes((getFaction(oakFaction) || {}).name || oakFaction));

/* ---------------- crowded-sheet legibility (regression) ----------------
   The bug: cluster radius was measured in map-PERCENT while markers are drawn
   in PIXELS, so the two only agreed at one viewport size. On the Midlands at
   rest that left ~51 markers piled around the Capital Province and 130
   overlapping pairs — a smudge, not a map. dynamicClusterRadius now derives
   the radius from the marker footprint, so this asserts the sheet is actually
   readable rather than that some code ran. */

const ART_W = 900, ART_H = 558;
const proto = dom.window.HTMLElement.prototype;
const owned = (o, k) => Object.getOwnPropertyDescriptor(o, k);
const savedW = owned(proto, 'clientWidth'), savedH = owned(proto, 'clientHeight');
const savedRect = proto.getBoundingClientRect;
Object.defineProperty(proto, 'clientWidth', { configurable: true, get() { return ART_W; } });
Object.defineProperty(proto, 'clientHeight', { configurable: true, get() { return ART_H; } });
proto.getBoundingClientRect = function () {
  return { width: ART_W, height: ART_H, top: 0, left: 0, right: ART_W, bottom: ART_H, x: 0, y: 0 };
};

const denseHost = dom.window.document.createElement('div');
dom.window.document.body.appendChild(denseHost);
mountAtlasMapV2(denseHost, 'midlands_full', { pinDensity: 'smart' });
denseHost.querySelector('[data-map-art]').dispatchEvent(new dom.window.Event('load'));

const denseMarkers = [...denseHost.querySelectorAll('.atlas-v2-marker')];
const drillHostTypeKey = () => (denseHost.querySelector('[data-typekey]') || {}).textContent || '';
const densePois = MAP_DATA.midlands_full.pointsOfInterest.filter(Boolean);

const seenIds = new Set();
denseMarkers.forEach(m => (m.dataset.ids || '').split(',').filter(Boolean).forEach(i => seenIds.add(i)));
const uniquePoiIds = new Set(densePois.map(p => p.id));

check('a crowded sheet gathers its pins',
  denseMarkers.length > 0 && denseMarkers.length < uniquePoiIds.size * 0.75,
  `${uniquePoiIds.size} pois -> ${denseMarkers.length} markers`);
check('gathering reaches every filed pin',
  seenIds.size === uniquePoiIds.size, `${seenIds.size} of ${uniquePoiIds.size} reachable`);

/* Overlap measured the way the eye sees it: drawn diameters in screen px. */
const placed = denseMarkers.map(m => ({
  x: parseFloat(m.style.left), y: parseFloat(m.style.top), d: parseFloat(m.style.width) || 18,
}));
let touching = 0;
for (let i = 0; i < placed.length; i++) {
  for (let j = i + 1; j < placed.length; j++) {
    const dx = (placed[i].x - placed[j].x) / 100 * ART_W;
    const dy = (placed[i].y - placed[j].y) / 100 * ART_H;
    if (Math.hypot(dx, dy) < (placed[i].d + placed[j].d) / 2) touching++;
  }
}
/* Dots are 4-6px, so a handful may grace each other on a 205-pin sheet without
   the map becoming unreadable; what must never return is the pile. */
check('a crowded sheet is not a pile of overlapping markers',
  touching <= placed.length * 0.06, `${touching} overlapping of ${placed.length} markers`);

/* ---------------- dots ----------------
   A lone location renders as a plain coloured point: no glyph, no ring, no
   label. Colour is the only channel it has, so it must carry the building
   family, and hover must supply the name. */
const dotEls = denseMarkers.filter(m => m.classList.contains('atlas-v2-dot'));
check('lone pins render as dots', dotEls.length > 0, `${dotEls.length} dots of ${denseMarkers.length} markers`);
check('a dot carries no glyph', dotEls.every(d => !d.textContent.trim()));
check('a dot is only a few pixels across',
  dotEls.every(d => { const w = parseFloat(d.style.width); return w > 0 && w <= 8; }),
  [...new Set(dotEls.map(d => d.style.width))].sort().join(', '));
check('a dot names itself and its kind on hover',
  dotEls.every(d => /\S+.* · .+/.test(d.getAttribute('title') || '')),
  JSON.stringify(dotEls[0] && dotEls[0].getAttribute('title')));
check('dot colour is the building family, not the lens', (() => {
  const lensColour = '#4ade80'; // population lens
  const tints = new Set(dotEls.map(d => (/--marker:\s*([^;]+)/.exec(d.getAttribute('style') || '') || [])[1]));
  return tints.size > 1 || !tints.has(lensColour);
})(), `${new Set(dotEls.map(d => (/--marker:\s*([^;]+)/.exec(d.getAttribute('style') || '') || [])[1])).size} distinct dot colours`);
check('clusters stay badges, not dots',
  denseMarkers.filter(m => m.classList.contains('atlas-v2-cluster'))
    .every(m => !m.classList.contains('atlas-v2-dot')));
check('a type key is offered for the dot colours',
  (drillHostTypeKey() || '').toLowerCase().includes('dot colour'), drillHostTypeKey());

const nearCapital = placed.filter(p => Math.hypot(p.x - 81, p.y - 8) < 12).length;
check('the Capital Province reads as a few markers, not a smudge',
  nearCapital <= 18, `${nearCapital} markers within 12% of (81, 8)`);

/* ---------------- the default sheet does not cluster ----------------
   Fat cluster badges sat on top of the province plots and made the map hard
   to click. The default is now every location as its own dot, and markers
   must cover only a small fraction of the sheet so the plots underneath stay
   reachable. */
const plainHost = dom.window.document.createElement('div');
dom.window.document.body.appendChild(plainHost);
mountAtlasMapV2(plainHost, 'midlands_full', {});
plainHost.querySelector('[data-map-art]').dispatchEvent(new dom.window.Event('load'));

const plainMarkers = [...plainHost.querySelectorAll('.atlas-v2-marker')];
check('the default sheet clusters nothing',
  plainMarkers.every(m => !m.classList.contains('atlas-v2-cluster')),
  `${plainMarkers.filter(m => m.classList.contains('atlas-v2-cluster')).length} clusters`);
check('the default sheet draws every filed location',
  plainMarkers.length === new Set(MAP_DATA.midlands_full.pointsOfInterest.filter(Boolean).map(p => p.id)).size,
  `${plainMarkers.length} markers`);

/* The real complaint: markers were eating the map. Hit area must stay small. */
const blocked = plainMarkers.reduce((n, m) => {
  const d = parseFloat(m.style.width) || 5;
  const r = d / 2 + (m.classList.contains('atlas-v2-dot') ? 3 : 0);
  return n + Math.PI * r * r;
}, 0);
check('markers leave the map clickable underneath',
  blocked / (ART_W * ART_H) < 0.06, `${(blocked / (ART_W * ART_H) * 100).toFixed(1)}% of the sheet covered`);

check('a big-dot toggle is offered for fatter targets',
  !!plainHost.querySelector('[data-action="bigpins"]'));
check('big dots are off unless asked for',
  !plainHost.classList.contains('atlas-v2-bigpins'));
plainHost.querySelector('[data-action="bigpins"]').dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
check('the big-dot toggle enlarges the targets',
  plainHost.classList.contains('atlas-v2-bigpins'));

/* A sparse sheet must NOT be gathered — clustering there only hides detail. */
const sparseHost = dom.window.document.createElement('div');
dom.window.document.body.appendChild(sparseHost);
mountAtlasMapV2(sparseHost, 'lockerwood', {});
sparseHost.querySelector('[data-map-art]').dispatchEvent(new dom.window.Event('load'));
const sparseCount = sparseHost.querySelectorAll('.atlas-v2-marker').length;
const sparsePois = new Set(MAP_DATA.lockerwood.pointsOfInterest.filter(Boolean).map(p => p.id)).size;
check('a sparse sheet is left unrolled', sparseCount === sparsePois, `${sparseCount} of ${sparsePois}`);

/* ---------------- drill-down navigation ----------------
   Clicking a cluster must step INTO it — reframe on that group, hide the rest,
   leave a breadcrumb — so the reader walks continent -> region -> town rather
   than staring at one flat pile. */

const MouseEvt = dom.window.MouseEvent;
const drillHost = dom.window.document.createElement('div');
dom.window.document.body.appendChild(drillHost);
/* Clustering is opt-in now (the default 'all' draws every location as its own
   dot), so ask for it explicitly before testing what clicking a cluster does. */
mountAtlasMapV2(drillHost, 'midlands_full', { pinDensity: 'smart' });
drillHost.querySelector('[data-map-art]').dispatchEvent(new dom.window.Event('load'));

const markersNow = () => [...drillHost.querySelectorAll('.atlas-v2-marker')];
const clustersNow = () => markersNow().filter(m => m.classList.contains('atlas-v2-cluster'))
  .sort((a, b) => (b.dataset.ids || '').split(',').length - (a.dataset.ids || '').split(',').length);
const crumbs = () => [...drillHost.querySelectorAll('[data-drill-to]')];

check('a fresh sheet shows no drill trail', crumbs().length === 0);

const beforeCount = markersNow().length;
const firstCluster = clustersNow()[0];
const firstSize = (firstCluster.dataset.ids || '').split(',').filter(Boolean).length;
firstCluster.dispatchEvent(new MouseEvt('click', { bubbles: true }));

const afterCount = markersNow().length;
check('clicking a cluster drills into it', afterCount < beforeCount && afterCount > 0,
  `${beforeCount} -> ${afterCount} markers`);
check('a drilled view shows only that group',
  afterCount <= firstSize, `${afterCount} markers for a group of ${firstSize}`);
check('drilling leaves a breadcrumb trail', crumbs().length >= 2, `${crumbs().length} crumbs`);

/* Keep drilling: each step must strictly narrow, and must terminate. */
const drillPath = [beforeCount, afterCount];
let guard = 0, terminated = false;
while (guard++ < 12) {
  const cl = clustersNow();
  if (!cl.length) { terminated = true; break; }
  const before = crumbs().length;
  cl[0].dispatchEvent(new MouseEvt('click', { bubbles: true }));
  if (crumbs().length === before) { terminated = true; break; }
  drillPath.push(markersNow().length);
}
check('drilling terminates instead of looping forever', terminated, `path ${drillPath.join(' -> ')}`);
check('each drill step narrows the view',
  drillPath.every((n, i) => i === 0 || n <= drillPath[i - 1]), drillPath.join(' -> '));
/* The end of a drill is a view with nothing left to open — individual dots,
   however many of them the group held. */
const endedOnDots = [...drillHost.querySelectorAll('.atlas-v2-marker')]
  .every(m => !m.classList.contains('atlas-v2-cluster'));
check('drilling bottoms out on individual pins', endedOnDots,
  `ended at ${drillPath[drillPath.length - 1]} markers`);

/* And the way back out. */
const rootCrumb = drillHost.querySelector('[data-drill-to="0"]');
rootCrumb.dispatchEvent(new MouseEvt('click', { bubbles: true }));
check('the trail walks back out to the whole sheet',
  markersNow().length === beforeCount && crumbs().length === 0,
  `${markersNow().length} markers, ${crumbs().length} crumbs`);

if (savedW) Object.defineProperty(proto, 'clientWidth', savedW); else delete proto.clientWidth;
if (savedH) Object.defineProperty(proto, 'clientHeight', savedH); else delete proto.clientHeight;
proto.getBoundingClientRect = savedRect;

errors.forEach(e => fail.push(e));
console.log(`\n${ok.length} passed, ${fail.length} failed`);
ok.forEach(l => console.log('  ok   ' + l));
fail.forEach(l => console.log('  FAIL ' + l));
process.exit(fail.length ? 1 : 0);
