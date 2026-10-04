/**
 * Character Sheets — live smoke: boots the real index.html in jsdom, walks
 * the sheet routes with debug mode off and on, and reads what rendered.
 * Proves the wiring (data loader, Router, sidebar, article panel, settings
 * row, search, debug toggle) works in the page, not just in the module.
 *
 * Requires a static server on 8765:  python3 -m http.server 8765
 * Run: node tools/tests/sheets-live-smoke.mjs
 */
import { JSDOM, VirtualConsole } from 'jsdom';

const BASE = 'http://127.0.0.1:8765/';
let pass = 0, fail = 0;
const check = (name, cond, extra = '') => {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name} ${extra}`); }
};
process.on('unhandledRejection', e => {
  const msg = String(e && e.message || e);
  if (msg.includes('ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING')) return;
});
const runtimeErrors = [];
const vc = new VirtualConsole();
vc.on('jsdomError', err => {
  const m = String(err && (err.detail && (err.detail.stack || err.detail.message) || err.message) || err);
  if (/Could not parse CSS|Could not load img|Could not load script|canvas|ERR_VM_DYNAMIC_IMPORT|TLS|ECONNRESET|socket|ENOTFOUND|getaddrinfo/i.test(m)) return;
  runtimeErrors.push(m.slice(0, 240));
});

const dom = await JSDOM.fromURL(BASE, {
  runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true, virtualConsole: vc,
  beforeParse(win) {
    win.scrollTo = () => {};
    win.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
    win.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
    win.fetch = async (url, opts) => {
      const abs = new URL(String(url), BASE).href;
      const res = await globalThis.fetch(abs, opts);
      return { ok: res.ok, status: res.status, json: () => res.json(), text: () => res.text() };
    };
  },
});
const { window } = dom;
const sleep = ms => new Promise(r => setTimeout(r, ms));
await sleep(9000);
const go = async (hash) => { window.location.hash = hash; await sleep(900); return window.document.getElementById('content'); };
const text = el => (el && el.textContent) || '';
const CS = window.CAST_SHEETS;

console.log('\n-- boot');
check('CAST_SHEETS module is on the page (SHEETS stays the reading desk)', typeof CS === 'object' && typeof CS.view_sheets === 'function' && Array.isArray(window.SHEETS) === false || typeof window.SHEETS !== 'object' || window.SHEETS !== CS);
check('sheets.json loaded through the data loader', CS.all().length >= 180, String(CS.all().length));
window.localStorage.removeItem('waluipedia-debug-v1');
check('debug mode is off', CS.debugOn() === false);
const party = CS.all().filter(e => e.party).length;

console.log('\n-- debug off');
let c = await go('#/sheets');
check('list renders only Disaster Inc. sheets', c.querySelectorAll('.cs-card').length === party && !c.querySelector('.cs-card[href="#/sheets/mario"]') && !!c.querySelector('.cs-card[href="#/sheets/bowser"]'), String(c.querySelectorAll('.cs-card').length));
check('no debug banner', !c.querySelector('.cs-debug-banner'));
const side = window.document.querySelector('.sidebar, nav, aside') || window.document.body;
check('sidebar carries the Character Sheets link with the public count', text(side).includes('Character Sheets') && text(side).includes(String(party)));
c = await go('#/sheets/mario');
check('Mario sheet is locked', !!c.querySelector('.cs-locked') && !c.querySelector('#cs-sheet-body'));
c = await go('#/article/mario');
check('Mario article shows no sheet panel', !c.querySelector('.cs-panel'));
c = await go('#/article/bowser');
check('Bowser article shows the sheet panel with mini stats', !!c.querySelector('.cs-panel') && !!c.querySelector('.cs-mini') && !c.querySelector('.cs-debug-ribbon'));
c = await go('#/sheets/bowser');
await sleep(1500);
check('Bowser sheet renders the PC summary after fetch', !!c.querySelector('.cs-block--pc') && text(c).includes('Hit Points'));
c = await go('#/sheets/waluigi');
await sleep(1500);
check('Waluigi (live world export) renders as a PC summary', !!c.querySelector('.cs-block--pc') && text(c).includes('Waluigi'));
c = await go('#/sheets/bowser/955-bf');
await sleep(1500);
check('Bowser (955 BF) — a public past self — renders with the version strip and Fire Breath', !!c.querySelector('.cs-versions') && !!c.querySelector('.cs-version.is-active') && text(c).includes('Bowser (955 BF)') && text(c).includes('Fire Breath') && /Level\s*8\s*Fighter/.test(text(c)));
c = await go('#/sheets/mario/955-bf');
check('Mario (955 BF) is locked in public like his present self', !!c.querySelector('.cs-locked') && !c.querySelector('#cs-sheet-body'));
let hits = typeof window.search === 'function' ? window.search('mario sheet', { category: 'all', limit: 30 }) : [];
check('Research Bureau does not surface restricted sheets', !hits.some(h => h.kind === 'sheet' && h.id === 'mario'));
hits = typeof window.search === 'function' ? window.search('bowser sheet', { category: 'all', limit: 30 }) : [];
check('Research Bureau surfaces Disaster Inc. sheets', hits.some(h => h.kind === 'sheet' && h.id === 'bowser'), hits.slice(0, 3).map(h => h.kind + ':' + h.id).join(' | '));
c = await go('#/settings');
check('Settings carries the Character sheets row with the restricted count', text(c).includes('Character sheets') && text(c).includes(String(CS.restrictedCount())));

console.log('\n-- debug on');
if (typeof window.toggleDebug === 'function') window.toggleDebug(); else window.localStorage.setItem('waluipedia-debug-v1', '1');
await sleep(600);
check('debug mode is on', CS.debugOn() === true);
c = await go('#/sheets');
check('list renders every sheet under a debug banner', c.querySelectorAll('.cs-card').length === CS.all().length && !!c.querySelector('.cs-debug-banner') && !!c.querySelector('.cs-card[href="#/sheets/mario"]'), String(c.querySelectorAll('.cs-card').length));
c = await go('#/sheets/mario');
await sleep(1500);
check('Mario character sheet renders (Level 5 Monk, Stomp, Extra Attack) under the banner', !!c.querySelector('.cs-debug-banner') && !!c.querySelector('.cs-block--pc') && text(c).includes('Stomp') && /Level\s*5\s*Monk/.test(text(c)) && text(c).includes('Extra Attack') && text(c).includes('Evidence'));
c = await go('#/sheets/luigi');
await sleep(1500);
check('Luigi character sheet renders as a level 5 Ranger', !!c.querySelector('.cs-block--pc') && text(c).includes('Luigi') && /Level\s*5\s*Ranger/.test(text(c)));
c = await go('#/article/mario');
check('Mario article now shows the ribboned sheet panel', !!c.querySelector('.cs-panel--restricted') && !!c.querySelector('.cs-debug-ribbon'));
const open = c.querySelector('.cs-panel .cs-btn');
open && open.click();
await sleep(900);
check('"Open the sheet" lands on #/sheets/mario', window.location.hash === '#/sheets/mario');
hits = typeof window.search === 'function' ? window.search('mario sheet', { category: 'all', limit: 30 }) : [];
check('Research Bureau now surfaces the Mario sheet', hits.some(h => h.kind === 'sheet' && h.id === 'mario'), hits.slice(0, 3).map(h => h.kind + ':' + h.id).join(' | '));
c = await go('#/sheets/mike');
check('the GM has no sheet, on purpose', text(c).includes('No sheet') && text(c).includes('GM'));

if (typeof window.toggleDebug === 'function') window.toggleDebug(); else window.localStorage.removeItem('waluipedia-debug-v1');
await sleep(300);
c = await go('#/sheets');
check('debug off again: the list is back to the party', c.querySelectorAll('.cs-card').length === party);

check('no jsdom runtime errors on the sheet routes', runtimeErrors.length === 0, runtimeErrors.slice(0, 3).join(' || '));
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
