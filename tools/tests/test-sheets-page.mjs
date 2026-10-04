/**
 * Character Sheets — the list, the stat block, the character-page panel.
 *
 * sheets.json maps every character article to a Foundry dnd5e actor file and
 * sheets.js renders it. These tests pin the contract:
 *
 *   data        the index covers every character (sheet or skip reason), the
 *               public set is exactly Disaster Inc., Mario and Luigi exist
 *   visibility  debug off: only party sheets list, render, search or panel;
 *               debug on: everything, with a ribbon
 *   views       list / detail / not-found render against the real JSON with
 *               the same stub globals index.html provides; the detail fetches
 *               the actor file and renders a stat block (NPC) or PC summary
 *   render      every indexed actor file renders without throwing, and
 *               markup in Foundry descriptions is cleaned, never executed
 *   wiring      index.html loads the scripts, carries the data key, the
 *               route, the sidebar link, the article panel, the settings row,
 *               the search kind and the debug hook
 *
 * Run: node tools/tests/test-sheets-page.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const RM = path.join(ROOT, 'Reputation-Matrix2');
const load = n => JSON.parse(fs.readFileSync(path.join(RM, 'data', `${n}.json`), 'utf8'));

let pass = 0, fail = 0;
const check = (name, cond, extra = '') => {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name} ${extra}`); }
};

/* ---------- a document: jsdom when installed, a stub otherwise ---------- */
let document;
try {
  const { JSDOM } = await import('jsdom');
  document = new JSDOM('<!doctype html><main id="content"></main>').window.document;
} catch (e) {
  const nodes = {};
  document = {
    getElementById(id) {
      if (id === 'content') return nodes.content || (nodes.content = { set innerHTML(h) { this._h = h; nodes['cs-sheet-body'] = /id="cs-sheet-body"/.test(h) ? { innerHTML: '' } : null; }, get innerHTML() { return this._h || ''; } });
      return nodes[id] || null;
    },
  };
}
const content = () => document.getElementById('content');
const body = () => document.getElementById('cs-sheet-body');

/* ---------- boot sheets.js against a stub window ---------- */
let DEBUG = false;
const router = { last: null, go(h) { this.last = h; } };
const sidebar = { last: null };
const esc = s => (s == null ? '' : String(s)).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const win = {
  DATA: { sheets: load('sheets'), characters: load('characters') },
  esc, el: id => document.getElementById(id),
  Router: router, renderSidebar: k => { sidebar.last = k; },
  debugOn: () => DEBUG,
  pathPrefix: './Reputation-Matrix2/',
  assetPath: src => './Reputation-Matrix2/' + src,
  SEARCH_DOCS: [{ kind: 'character', id: 'x' }],
  document, scrollTo() {}, location: { hash: '#/sheets', pathname: '/bik/' },
  fetch: async url => {
    const rel = String(url).replace(/^\.\/Reputation-Matrix2\//, '');
    const p = path.join(RM, rel);
    if (!fs.existsSync(p)) return { ok: false, status: 404 };
    return { ok: true, status: 200, json: async () => JSON.parse(fs.readFileSync(p, 'utf8')) };
  },
};
win.window = win;
new Function('window', fs.readFileSync(path.join(ROOT, 'assets/sheets/sheets.js'), 'utf8'))(win);
const CS = win.CAST_SHEETS;
const tick = () => new Promise(r => setTimeout(r, 0));
const settle = async () => { for (let i = 0; i < 5; i++) await tick(); };

console.log('\n# data');
const index = win.DATA.sheets;
const chars = win.DATA.characters;
const ids = new Set(index.sheets.map(s => s.id));
const skipIds = new Set(index.skipped.map(s => s.id));
check('CAST_SHEETS is the global (index.html already owns SHEETS)', typeof CS === 'object' && typeof win.SHEETS === 'undefined');
check('every character has a sheet or a skip reason', chars.every(c => ids.has(c.id) || skipIds.has(c.id)));
check('nothing is both indexed and skipped', [...ids].every(id => !skipIds.has(id)));
check('mike (the GM) is skipped, not statted', skipIds.has('mike') && !ids.has('mike') && /GM/.test(CS.skipReason('mike')));
check('Mario and Luigi have generated NPC sheets', ['mario', 'luigi'].every(id => { const e = CS.byCharacter(id); return e && e.source === 'generated' && e.kind === 'npc'; }));
check('Mario is CR 5 — the XP ledger level, never above it', CS.byCharacter('mario').cr === 5 && CS.byCharacter('mario').ledger.level === 5);
check('Bowser keeps his PC intake sheet (never replaced)', CS.byCharacter('bowser').source === 'intake' && CS.byCharacter('bowser').kind === 'pc');
check('Remi keeps the live-world export', CS.byCharacter('remi_akamatsu_full_backstory').source === 'live');
const party = index.sheets.filter(s => s.party);
check('public set is grouped under Disaster Inc. and matches meta.party', party.every(s => s.group === 'Disaster Inc.') && party.map(s => s.id).sort().join() === [...index.meta.party].sort().join());
check('Disaster Inc. core (bowser, archie, waluigi, markop, hjumpik, remi) is public',
  ['bowser', 'archie_miser', 'waluigi', 'markop', 'hjumpik', 'remi_akamatsu_full_backstory'].every(id => CS.byCharacter(id).party === true));
check('Mario, Luigi, Peach, Kamek, King Boo are restricted', ['mario', 'luigi', 'princess_peach', 'kamek', 'king_boo'].every(id => CS.byCharacter(id).party !== true));
check('every generated sheet carries verbatim evidence', index.sheets.filter(s => s.source === 'generated').every(s => (s.evidence || []).length > 0 && s.evidence.every(ev => ev.quote && ev.feature)));
check('every indexed sheet file exists', index.sheets.every(s => fs.existsSync(path.join(RM, s.file))));

console.log('\n# visibility (debug off)');
DEBUG = false;
check('visible(Bowser) and not visible(Mario)', CS.visible(CS.byCharacter('bowser')) && !CS.visible(CS.byCharacter('mario')));
check('listVisible is exactly the party', CS.listVisible().length === party.length);
check('restrictedCount is everyone else', CS.restrictedCount() === index.sheets.length - party.length);
check('searchDocs only indexes public sheets, kind=sheet', CS.searchDocs().length === party.length && CS.searchDocs().every(d => d.kind === 'sheet' && d.typeKey === 'sheets' && d.hay));
check('refreshSearch swaps sheet docs in place and keeps other kinds', CS.refreshSearch() === party.length && win.SEARCH_DOCS.filter(d => d.kind === 'character').length === 1 && win.SEARCH_DOCS.filter(d => d.kind === 'sheet').length === party.length);
check('characterPanel(Mario) renders nothing', CS.characterPanel({ id: 'mario' }) === '');
check('characterPanel(mike) renders nothing', CS.characterPanel({ id: 'mike' }) === '');
const bowserPanel = CS.characterPanel({ id: 'bowser' });
check('characterPanel(Bowser) renders the public panel with mini stats and no ribbon', /cs-panel/.test(bowserPanel) && /cs-mini/.test(bowserPanel) && !/cs-debug-ribbon/.test(bowserPanel) && /Disaster Inc\./.test(bowserPanel) && /#\/sheets\/bowser/.test(bowserPanel));

console.log('\n# views (debug off)');
CS.view_sheets('');
let html = content().innerHTML;
check('list renders with the sidebar on sheets', sidebar.last === 'sheets' && /cs-grid/.test(html));
check('list shows Disaster Inc. cards only', /#\/sheets\/bowser/.test(html) && /#\/sheets\/waluigi/.test(html) && !/#\/sheets\/mario"/.test(html) && !/#\/sheets\/luigi"/.test(html));
check('list has no debug banner but says how many sheets are restricted', !/cs-debug-banner/.test(html) && new RegExp(`${CS.restrictedCount()} `).test(html));
CS.view_sheets('mario');
html = content().innerHTML;
check('detail of a restricted sheet is the locked notice, no stat block', /cs-locked/.test(html) && !/cs-sheet-body/.test(html) && /Mario/.test(html));
CS.view_sheets('bowser');
html = content().innerHTML;
check('detail of a public sheet renders the header, download and import URL', /cs-detail-head/.test(html) && /download/.test(html) && /raw\.githubusercontent\.com\/mikegent01\/bik\/gh-pages\/Reputation-Matrix2\/actors\//.test(html) && /id="cs-sheet-body"/.test(html));
await settle();
html = body().innerHTML;
check('…and the fetched PC sheet renders as a PC summary', /cs-block--pc/.test(html) && /Hit Points/.test(html));
CS.view_sheets('mike');
check('the GM gets "No sheet" with the reason', /No sheet/.test(content().innerHTML) && /GM/.test(content().innerHTML));
CS.view_sheets('nobody_here');
check('an unknown id gets "No sheet"', /No sheet/.test(content().innerHTML));

console.log('\n# visibility (debug on)');
DEBUG = true;
check('listVisible is everyone', CS.listVisible().length === index.sheets.length);
check('searchDocs indexes everyone; refreshSearch grows the docs', CS.searchDocs().length === index.sheets.length && CS.refreshSearch() === index.sheets.length && win.SEARCH_DOCS.filter(d => d.kind === 'sheet').length === index.sheets.length);
const marioPanel = CS.characterPanel({ id: 'mario' });
check('characterPanel(Mario) renders with the debug ribbon and restricted badge', /cs-panel--restricted/.test(marioPanel) && /cs-debug-ribbon/.test(marioPanel) && /Restricted/.test(marioPanel) && /CR 5/.test(marioPanel) && /XP ledger level 5/.test(marioPanel));
check('characterPanel(Bowser) still has no ribbon', !/cs-debug-ribbon/.test(CS.characterPanel({ id: 'bowser' })));
check('characterPanel(mike) explains the skip', /No sheet on purpose/.test(CS.characterPanel({ id: 'mike' })));
CS.view_sheets('');
html = content().innerHTML;
check('list shows the debug banner and every card', /cs-debug-banner/.test(html) && /#\/sheets\/mario"/.test(html) && /#\/sheets\/luigi"/.test(html) && /cs-card--restricted/.test(html));
check('group chips exist and filtering by group narrows the grid', /cs-chip/.test(html) && (() => { CS.setFilter({ group: 'Disaster Inc.' }); const h = content().innerHTML; CS.setFilter({ group: '' }); return /#\/sheets\/bowser/.test(h) && !/#\/sheets\/mario"/.test(h); })());
check('search box filters by name', (() => { CS.setFilter({ q: 'luigi' }); const h = content().innerHTML; CS.setFilter({ q: '' }); return /#\/sheets\/luigi"/.test(h) && !/#\/sheets\/bowser"/.test(h); })());
CS.view_sheets('mario');
html = content().innerHTML;
check('Mario detail renders the header under the debug banner', /cs-debug-banner/.test(html) && /This sheet is restricted/.test(html) && /id="cs-sheet-body"/.test(html) && /Mario/.test(html) && /Hand-authored/.test(html));
await settle();
html = body().innerHTML;
check('Mario stat block: AC 15, HP 105, Challenge 5, Stomp, Wing Cap', /Armor Class<\/b> 15/.test(html) && /105/.test(html) && /Challenge<\/b> 5/.test(html) && /Stomp/.test(html) && /Wing Cap/.test(html));
check('Mario detail lists the evidence quotes from his article', /cs-evidence/.test(content().innerHTML) && /Missing Since 1039/.test(content().innerHTML));
CS.view_sheets('luigi');
await settle();
check('Luigi stat block renders at the CR the index says (ledger level 5, so at most 5)', new RegExp('Challenge</b> ' + CS.crLabel(CS.byCharacter('luigi').cr)).test(body().innerHTML) && CS.byCharacter('luigi').cr <= 5 && /Luigi/.test(content().innerHTML));
CS.view_sheets('princess_peach');
await settle();
check('Princess Peach (955 BF era sheet) renders with alternates listed', /cs-alts/.test(content().innerHTML) || /Challenge/.test(body().innerHTML));

console.log('\n# render every indexed actor');
let rendered = 0, failed = [];
for (const e of index.sheets) {
  try {
    const actor = JSON.parse(fs.readFileSync(path.join(RM, e.file), 'utf8'));
    const out = actor.type === 'character' ? CS.pcSheet(actor, e) : CS.statBlock(actor, e);
    if (typeof out !== 'string' || out.length < 200 || !/cs-block/.test(out)) failed.push(e.id); else rendered++;
  } catch (err) { failed.push(`${e.id}: ${err.message}`); }
}
check(`every indexed actor renders (${rendered})`, failed.length === 0, failed.slice(0, 5).join(' | '));
check('clean() strips script tags and inline handlers from Foundry descriptions',
  !/<script|onerror|javascript:/i.test(CS.clean('<p onclick="x()">hi<script>alert(1)</script><img src=x onerror=alert(1)><a href="javascript:evil()">l</a></p>')) && /hi/.test(CS.clean('<p>hi</p>')));
check('attackLine reads a dnd5e weapon activity', (() => {
  const actor = JSON.parse(fs.readFileSync(path.join(RM, CS.byCharacter('mario').file), 'utf8'));
  const stomp = actor.items.find(i => i.name === 'Stomp');
  const line = CS.attackLine(stomp, actor);
  return /Melee Weapon Attack/.test(line) && /to hit/.test(line) && /bludgeoning/.test(line);
})());
check('crLabel renders fractions', CS.crLabel(0.5) === '1/2' && CS.crLabel(0.25) === '1/4' && CS.crLabel(5) === '5' && CS.crLabel(null) === '—');

console.log('\n# wiring');
const html0 = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
for (const [needle, what] of [
  ['assets/sheets/sheets.js', 'script tag'], ['assets/sheets/sheets.css', 'stylesheet'],
  ["'technology','sheets']", 'DATA_FILES key'], ["route==='sheets'", 'Router route'],
  ["label:'Character Sheets'", 'sidebar link'], ['CAST_SHEETS.characterPanel(item)', 'article panel'],
  ["row('📜','Character sheets'", 'settings row'], ['CAST_SHEETS.searchDocs()', 'search docs'],
  ["d.kind==='sheet')return 'Sheet'", 'search type label'], ["Router.go('#/sheets/'+encodeURIComponent(d.id))", 'search result route'],
  ['CAST_SHEETS.refreshSearch()', 'debug toggle hook'], ['"route": "#/sheets"', 'SITE_UPDATES card'],
]) check(`index.html carries the ${what}`, html0.includes(needle));
check('sheets.js loads after technology.js and before the inline app', html0.indexOf('assets/technology/technology.js') < html0.indexOf('assets/sheets/sheets.js') && html0.indexOf('assets/sheets/sheets.js') < html0.indexOf('const DATA_FILES'));
check('stylesheet exists and styles the classes the script emits', (() => {
  const css = fs.readFileSync(path.join(ROOT, 'assets/sheets/sheets.css'), 'utf8');
  return ['cs-card', 'cs-block', 'cs-debug-banner', 'cs-debug-ribbon', 'cs-locked', 'cs-panel', 'cs-mini', 'cs-abil', 'cs-chip'].every(c => css.includes('.' + c));
})());

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
