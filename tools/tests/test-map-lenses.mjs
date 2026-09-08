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

errors.forEach(e => fail.push(e));
console.log(`\n${ok.length} passed, ${fail.length} failed`);
ok.forEach(l => console.log('  ok   ' + l));
fail.forEach(l => console.log('  FAIL ' + l));
process.exit(fail.length ? 1 : 0);
