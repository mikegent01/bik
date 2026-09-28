// Headless render test of the redesigned World Atlas (atlx-*). The code is
// extracted straight from index.html and run against a stubbed ATLAS_INDEX.
// The contract being pinned:
//
//   worlds     realms are grouped under their world, headers carry counts
//   numbers    every realm card shows its filed-records badge, stat row,
//              power bar scaled to its world, map-sheet count, latest filing
//   the board  realms ranked by filed records as segmented bars (top 12
//              default, all on toggle), re-sortable by battles/locations
//   search     a query collapses the sections into a flat matches card
//
//   node tools/tests/test-atlas-page.mjs
import { readFileSync } from 'node:fs';

const repoRoot = new URL('../../', import.meta.url);
const html = readFileSync(new URL('index.html', repoRoot), 'utf8');
const start = html.indexOf('/* ===================== WORLD ATLAS REDESIGN');
const end = html.indexOf('function atlasChips(');
if (start < 0 || end < 0) { console.error('atlas block not found'); process.exit(1); }
const block = html.slice(start, end);

// ---------- stubs ----------
const esc = s => (s == null ? '' : String(s)).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const content = { innerHTML: '' };
const el = id => (id === 'content' ? content : { innerHTML: '' });
const listState = {};
const Router = { last: null, go(r) { this.last = r; } };
const mk = (id, name, wid, counts, opts = {}) => ({
  nation: { id, name, type: opts.type || 'Realm', status: opts.status, summary: opts.summary || (name + ' summary.'), atlasType: opts.atlasType, controllingFaction: opts.ctrl, region: opts.region },
  locations: Array(counts.loc).fill({ id: id + '_l' }),
  events: (opts.events || []).map((e, i) => ({ id: id + '_e' + i, name: e.name, date: e.date })),
  battles: Array(counts.bt).fill({ id: id + '_b' }),
  trials: Array(counts.tr).fill({ id: id + '_t' }),
  factions: Array(counts.fa).fill({ id: id + '_f' }),
  species: [],
  _wid: wid, _maps: opts.maps != null ? opts.maps : 2,
});
const ATLAS_INDEX = {
  mushroom_kingdom: mk('mushroom_kingdom', 'The Mushroom Kingdom', 'mk', { loc: 10, ev: 8, bt: 6, tr: 2, fa: 5 }, { events: [{ name: 'The Newest Trouble', date: '5 Aethel, 1040 BF' }, { name: 'Old Business', date: '955 BF' }], ctrl: 'Fragmented', maps: 9 }),
  koopa_dominion: mk('koopa_dominion', 'Koopa Dominion', 'mk', { loc: 3, ev: 1, bt: 3, tr: 0, fa: 2 }, { maps: 0 }),
  sarasaland: mk('sarasaland', 'Sarasaland', 'mk', { loc: 2, ev: 1, bt: 0, tr: 0, fa: 1 }, { maps: 1, events: [{ name: 'The Sarasaland Incident', date: '1033 BF' }] }),
  regal_empire: mk('regal_empire', 'The Regal Empire', 're', { loc: 12, ev: 40, bt: 20, tr: 4, fa: 6 }, { events: [{ name: 'The Doorway', date: '2 Aethel, 1040 BF' }], maps: 5 }),
  monster_underground: mk('monster_underground', 'Monster Underground', 're', { loc: 4, ev: 2, bt: 1, tr: 0, fa: 1 }, { maps: 0 }),
  middle_earth: mk('middle_earth', 'Middle-earth', 'me', { loc: 1, ev: 0, bt: 1, tr: 0, fa: 0 }, { maps: 3 }),
  faerun: mk('faerun', 'Faerûn', 'or', { loc: 0, ev: 0, bt: 0, tr: 0, fa: 0 }, { maps: 1 }),
};
const buildAtlasIndex = () => {};
const renderSidebar = () => {};
const displayName = i => (i && (i.name || i.title)) || (i && i.id) || '';
const previewText = (it, m) => String((it && (it.summary || it.description)) || '').slice(0, m || 200);
const nationThumb = () => '<span class="atlx-crest-stub">🛡️</span>';
const atlasMapsFor = id => {
  const x = Object.values(ATLAS_INDEX).find(v => v.nation.id === id);
  const n = (x && x._maps) || 0;
  return { maps: Array.from({ length: n }, (_, i) => ({ id: id + '_m' + i, name: id + ' sheet ' + i })), activeId: n ? id + '_m0' : '', group: n ? 'Group of ' + id : '', valid: n > 0 };
};
const parseYear = s => { const m = String(s || '').match(/(\d{3,4})\s*BF/); return m ? parseInt(m[1], 10) : null; };

const loader = new Function('ATLAS_INDEX', 'listState', 'el', 'esc', 'Router', 'window',
  'buildAtlasIndex', 'renderSidebar', 'displayName', 'previewText', 'nationThumb', 'atlasMapsFor', 'parseYear',
  'let ATLAS_MOUNT_FOCUS=null;\n' + block + '\nreturn {view_atlas, WORLD_OF_REALM, WORLD_META};');
const A = loader(ATLAS_INDEX, listState, el, esc, Router, { scrollTo() {} },
  buildAtlasIndex, renderSidebar, displayName, previewText, nationThumb, atlasMapsFor, parseYear);

let ok = true;
const check = (name, cond) => { console.log((cond ? 'OK  ' : 'FAIL'), name); if (!cond) ok = false; };

// ---------- render ----------
A.view_atlas();
const html2 = content.innerHTML;
const realmCount = Object.keys(ATLAS_INDEX).length;
check('hero: totals line counts realms, worlds, and map sheets', new RegExp(realmCount + ' realms across 4 worlds').test(html2) && /map sheets/.test(html2));
check('board: bars render for realms with records only (6 of 7)', /atlx-bar/.test(html2) && (html2.match(/atlx-bar"/g) || []).length === 6);
check('board: empty realms fold into the quiet line, not blank bars', /1 more realm charted with nothing filed/.test(html2) && !/atlx-bar-n">0</.test(html2));
check('board: default order is filed-desc (Regal Empire first)', html2.indexOf('The Regal Empire') < html2.indexOf('The Mushroom Kingdom'));
check('board: bars are segmented by record kind', /atlx-bar-track/.test(html2) && html2.includes('background:#e5484d'));
check('worlds: sections render with headers and counts', /atlx-world-head/.test(html2) && /The Mushroom Kingdom Sphere/.test(html2) && /The Outer Realms/.test(html2));
check('worlds: every realm appears exactly once in the sections', (html2.match(/class="atlx-realm"/g) || []).length === realmCount);
check('cards: stat row + power bar + filed badge on every card', (html2.match(/atlx-stats/g) || []).length === realmCount && (html2.match(/atlx-power/g) || []).length === realmCount && (html2.match(/atlx-filed/g) || []).length === realmCount);
check('cards: map-sheet counts where maps exist, honest none where they do not', /🗺️ 9 map sheets/.test(html2) && /no map filed/.test(html2));
check('cards: latest filing with year where events exist', /The Newest Trouble/.test(html2) && /1040 BF/.test(html2));
check('cards: controlling faction surfaces when held', /held by Fragmented/.test(html2));
check('crest: the flag is still there, just smaller', /atlx-crest-stub/.test(html2));

// ---------- sorting the board ----------
listState.atlas.sort = 'battles';
A.view_atlas();
check('board: battles sort puts the most-battled realm first', content.innerHTML.indexOf('The Regal Empire') < content.innerHTML.indexOf('The Mushroom Kingdom'));
listState.atlas.sort = 'locations';
A.view_atlas();
check('board: locations sort puts the most-located realm first', content.innerHTML.indexOf('The Regal Empire') < content.innerHTML.indexOf('The Mushroom Kingdom'));
listState.atlas.sort = 'filed';

// ---------- search collapses sections into a matches card ----------
listState.atlas.query = 'sarasaland';
A.view_atlas();
const cardHtml = content.innerHTML.slice(content.innerHTML.indexOf('atlx-searchcard'));
check('search: flat matches card instead of world sections', /atlx-searchcard/.test(content.innerHTML) && !/atlx-world-head/.test(content.innerHTML));
check('search: exactly the matching realm renders in the card', /Sarasaland/.test(cardHtml) && (cardHtml.match(/class="atlx-realm"/g) || []).length === 1);
listState.atlas.query = '';
A.view_atlas();
check('clearing search restores the world sections', /atlx-world-head/.test(content.innerHTML) && !/atlx-searchcard/.test(content.innerHTML));

// ---------- show-all toggle ----------
listState.atlas.showAll = true;
A.view_atlas();
check('board: show-all keeps every active realm on the board', (content.innerHTML.match(/atlx-bar"/g) || []).length === 6);
listState.atlas.showAll = false;

// ---------- world membership sanity ----------
check('worlds: membership map covers every realm id', Object.keys(A.WORLD_OF_REALM).length >= realmCount && ['mk', 'me', 'or'].every(w => Object.values(A.WORLD_OF_REALM).includes(w)));

console.log(ok ? 'ALL ATLAS TESTS PASS' : 'ATLAS TESTS FAILED');
process.exit(ok ? 0 : 1);
