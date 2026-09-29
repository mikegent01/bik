// Headless render test of the CHARACTERS CAST WALL (chr-*), extracted
// straight from index.html and run against stubbed data. The contract:
//
//   portrait-first cards (image + initial fallback + status dot + spine)
//   status chips with live counts, race dropdown, and real sorts
//   search / status / race filters and the clear button
//   the status classifier (active / dead / unknown / retired)
//
//   node tools/tests/test-characters-page.mjs
import { readFileSync } from 'node:fs';

const repoRoot = new URL('../../', import.meta.url);
const html = readFileSync(new URL('index.html', repoRoot), 'utf8');
const start = html.indexOf('/* ===================== CHARACTERS — THE CAST WALL');
const end = html.indexOf('let ATLAS_INDEX={};');
if (start < 0 || end < 0) { console.error('characters block not found'); process.exit(1); }
const block = html.slice(start, end);

// ---------- stubs ----------
const esc = s => (s == null ? '' : String(s)).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const content = { innerHTML: '' };
const el = id => (id === 'content' ? content : { innerHTML: '' });
const Router = { last: null, go(r) { this.last = r; } };
const window = { scrollTo() {} };
const renderSidebar = () => {};
const TYPE_BY_KEY = { characters: { emoji: '👤', label: 'Characters' } };
const displayName = i => (i && (i.name || i.title)) || (i && i.id) || '';
const assetPath = p => 'assets/' + String(p || '');
const openId = () => {};
const factionColor = id => ({ iron_legion: '#cccccc' }[id] || '#8a4bff');

const DATA = {
  characters: [
    { id: 'waluigi', name: 'Waluigi', title: 'The Archivist', race: 'Human (Midlands)', status: 'Active — filing everything', affiliation: 'Independent', image: 'portraits/waluigi.png', relatedArticles: ['a', 'b', 'c', 'd', 'e', 'f'], keyEvents: ['e1', 'e2', 'e3'], faction: 'iron_legion' },
    { id: 'sans', name: 'Sans', title: 'Judge of the Last Corridor', race: 'Skeleton / Bone-Line Kin', status: 'Active — survived the corridor night', affiliation: 'Snowdin', image: 'portraits/sans.png', relatedArticles: ['a', 'b'], keyEvents: ['e1'] },
    { id: 'vivian', name: 'Vivian Corvinarus', title: 'The Maker of Mazes', race: 'Vampire', status: 'Deceased — corridor collapse', affiliation: 'Corvinarus Family', image: 'portraits/vivian.jpg', relatedArticles: ['a', 'b', 'c'], keyEvents: ['e1', 'e2'] },
    { id: 'mystery', name: 'The Grey Courier', title: 'Who Knows', race: 'Unknown', status: 'Unknown — last confirmed public appearance 1038', affiliation: 'Unknown', image: 'portraits/courier.jpg', relatedArticles: ['a'] },
    { id: 'old_king', name: 'The Old King', title: 'Retired', race: 'Toad', status: 'Retired — abdicated', affiliation: 'Midlands Court', image: 'portraits/king.jpg', relatedArticles: ['a', 'b'] },
    { id: 'toad_a', name: 'Amber Toadstool', race: 'Toad', status: 'Active — council record', affiliation: 'Liberated Toads', image: 'portraits/amber.png', relatedArticles: ['a'], keyEvents: ['e1'] },
  ],
};
const listState = {};
const loader = new Function('DATA', 'listState', 'el', 'esc', 'Router', 'window', 'renderSidebar', 'TYPE_BY_KEY', 'displayName', 'assetPath', 'openId', 'factionColor',
  block + '\nreturn {view_characters, chrStatusMeta};');
const V = loader(DATA, listState, el, esc, Router, window, renderSidebar, TYPE_BY_KEY, displayName, assetPath, openId, factionColor);

let ok = true;
const check = (name, cond) => { console.log((cond ? 'OK  ' : 'FAIL'), name); if (!cond) ok = false; };

V.view_characters();
let out = content.innerHTML;
check('band: counts the cast and their standing', /6 characters on file — 3 active, 1 dead, 1 whereabouts unknown, 1 retired/.test(out));
check('wall: every character renders a portrait card', (out.match(/class="chr-card"/g) || []).length === 6);
check('cards: portraits are the card — image, top-anchored, with fallback initial behind', (out.match(/class="chr-art"/g) || []).length === 6 && (out.match(/assets\/portraits\//g) || []).length === 6 && /class="chr-init"/.test(out));
check('cards: the status dot sits on every face', (out.match(/class="chr-dot chr-dot--/g) || []).length === 6);
check('cards: faction members carry their colour spine', /--chr-spine:#cccccc/.test(out));
check('cards: titles, race, links and appearances surface', /Judge of the Last Corridor/.test(out) && /Skeleton \/ Bone-Line Kin/.test(out) && /🔗 6/.test(out) && /📜 3/.test(out));
check('chips: status filters carry live counts', /\(6\)/.test(out) && /Active \(3\)/.test(out) && /Dead \(1\)/.test(out) && /Unknown \(1\)/.test(out) && /Retired \(1\)/.test(out));
check('race: dropdown orders by headcount', out.indexOf('Toad (2)') < out.indexOf('Human (1)') && /Skeleton \/ Bone-Line Kin \(1\)/.test(out));
check('default: A→Z ordering', out.indexOf('Amber Toadstool') < out.indexOf('Sans') && out.indexOf('Sans') < out.indexOf('The Grey Courier'));

listState.characters.sort = 'record';
V.view_characters();
out = content.innerHTML;
check('sort: most-on-record leads with Waluigi (6 links)', out.indexOf('Waluigi') < out.indexOf('Amber Toadstool') && out.indexOf('Waluigi') < out.indexOf('Sans'));
listState.characters.sort = 'dead';
V.view_characters();
check('sort: the dead come first', content.innerHTML.indexOf('Vivian Corvinarus') < content.innerHTML.indexOf('Waluigi'));
listState.characters.sort = 'az';

listState.characters.status = 'dead';
V.view_characters();
out = content.innerHTML;
check('filter: Dead keeps only the deceased', (out.match(/class="chr-card"/g) || []).length === 1 && /Vivian Corvinarus/.test(out));
listState.characters.status = 'unknown';
V.view_characters();
check('filter: Unknown keeps the whereabouts-unknown', (content.innerHTML.match(/class="chr-card"/g) || []).length === 1 && /The Grey Courier/.test(content.innerHTML));
listState.characters.status = 'All';
listState.characters.race = 'Toad';
V.view_characters();
out = content.innerHTML;
check('filter: race keeps every Toad', (out.match(/class="chr-card"/g) || []).length === 2 && /Amber Toadstool/.test(out) && !/Sans/.test(out));
listState.characters.race = 'All';
listState.characters.query = 'corridor';
V.view_characters();
out = content.innerHTML;
check('search: matches name, title, and status prose', (out.match(/class="chr-card"/g) || []).length === 2 && /Sans/.test(out) && /Vivian Corvinarus/.test(out));
check('clear: the button resets every control', /onclick="listState.characters.query='';listState.characters.status='All';listState.characters.race='All';listState.characters.sort='az';view_characters\(\)"/.test(out));
listState.characters.query = '';

V.view_characters();
check('click: every card routes to its article', (content.innerHTML.match(/onclick="openId\('/g) || []).length === 6);

check('classifier: dead / unknown / retired / active read from status prose',
  V.chrStatusMeta('Deceased — killed at the siege').cls === 'dead' &&
  V.chrStatusMeta('Unknown — last confirmed public appearance 1038').cls === 'unknown' &&
  V.chrStatusMeta('Retired — abdicated').cls === 'retired' &&
  V.chrStatusMeta('Active — filing everything').cls === 'active');

console.log(ok ? 'ALL CHARACTERS TESTS PASS' : 'CHARACTERS TESTS FAILED');
process.exit(ok ? 0 : 1);
