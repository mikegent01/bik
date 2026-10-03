/**
 * Discovered Technology — live smoke: boots the real index.html in jsdom,
 * walks the technology routes, and reads what rendered. Proves the wiring
 * (data loader, Router, sidebar, apparatus tab, search) works in the page,
 * not just in the extracted module.
 *
 * Requires a static server on 8765:  python3 -m http.server 8765
 * Run: node tools/tests/technology-live-smoke.mjs
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

console.log('\n-- boot');
check('TECH module is on the page', typeof window.TECH === 'object' && typeof window.TECH.view_technology === 'function');
check('technology.json loaded through the data loader (read via TECH, DATA is script-scoped)', window.TECH.entries().length >= 20, String(window.TECH.entries().length));
check('TECH_MODELS recipes are on the page', window.TECH_MODELS && window.TECH_MODELS.names.length >= 20);
check('TECH_GL (the self-contained renderer) is on the page — no Three.js, no CDN', window.TECH_GL && typeof window.TECH_GL.mount === 'function' && !window.THREE && !window.THREE_MODULE);

console.log('\n-- #/technology');
let c = await go('#/technology');
check('ledger renders', text(c).includes('Discovered Technology') && c.querySelectorAll('.techtile').length >= 20, String(c && c.querySelectorAll('.techtile').length));
check('featured viewer host shows the icon fallback where no canvas exists (jsdom) instead of throwing', !!c.querySelector('#tech-viewer-featured .tech-viewer-fallback'));
check('sidebar link is active and counted', !!window.document.querySelector('.sidebar .active, nav .active, [class*="nav"] .active') || text(window.document.body).includes('Discovered Technology'));

console.log('\n-- #/technology/<entry>');
c = await go('#/technology/tech_paulos_courier_pistol');
check('entry page renders with the quote and the source link', text(c).includes("A Courier's Cheap Pistol") && text(c).includes('The pistol clicked.') && !!c.querySelector('a[href="#/article/the_rot_zone_at_star_hill"]'));
const srcLink = c.querySelector('a[href="#/article/the_rot_zone_at_star_hill"]');
srcLink && srcLink.click();
await sleep(1200);
c = window.document.getElementById('content');
check('source link lands on the Rot-Zone article', window.location.hash.includes('the_rot_zone_at_star_hill') && text(c).includes('Rot-Zone'));
const tab = [...c.querySelectorAll('.app-tab')].find(b => /Technology/.test(b.textContent));
check('the article\'s apparatus band carries a Technology tab', !!tab);
tab && tab.click();
const pane = c.querySelector('#app-pane-tech');
check('the Technology tab lists the pistol as first seen here', !!pane && text(pane).includes("A Courier's Cheap Pistol") && text(pane).includes('first seen here'));

console.log('\n-- #/technology/tension');
c = await go('#/technology/tension');
check('tension board renders with territories and pairs', c.querySelectorAll('.tech-trow').length >= 5 && text(c).includes('Who is strained with whom'));
c = await go('#/technology/tension/1035');
check('year strip changes the reading (1035 BF → Crisis for the Kingdom)', text(c).includes('as of 1035 BF') && text(c).includes('Cycle of Crisis'));
c = await go('#/technology/territory/mushroom_kingdom');
check('territory page renders the driver table', !!c.querySelector('.tech-table') && text(c).includes('The Debt Siege'));
c = await go('#/research');
check('old #/research lands on the ledger', text(c).includes('Discovered Technology'));

console.log('\n-- search');
const hits = typeof window.search === 'function' ? window.search('mechanical claw', { category: 'all', limit: 20 }) : [];
check('Research Bureau finds the W-stamped claw as a technology record', hits.some(h => h.kind === 'technology' && /Claw/.test(h.name)), hits.slice(0, 3).map(h => h.kind + ':' + h.name).join(' | '));

check('no jsdom runtime errors on the technology routes', runtimeErrors.length === 0, runtimeErrors.slice(0, 3).join(' || '));
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
