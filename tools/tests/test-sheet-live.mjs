/**
 * Live sheet test: boots the real page in jsdom, opens the character-sheet
 * viewer and a character article, and reads the rendered output.
 *
 * Requires a static server on 8765:  python3 -m http.server 8765
 * Run: node tools/tests/test-sheet-live.mjs
 */
import { JSDOM, VirtualConsole } from 'jsdom';

const BASE = 'http://127.0.0.1:8765/';
let pass = 0;
const fail = [];
const check = (name, cond, extra = '') => {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail.push(name); console.log(`  FAIL ${name} ${extra}`); }
};

process.on('unhandledRejection', e => {
  const msg = String(e && e.message || e);
  if (msg.includes('ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING')) return;
});

const vc = new VirtualConsole();
vc.on('jsdomError', () => {});

const dom = await JSDOM.fromURL(BASE, {
  runScripts: 'dangerously',
  resources: 'usable',
  pretendToBeVisual: true,
  virtualConsole: vc,
  beforeParse(win) {
    win.scrollTo = () => {};
    win.IntersectionObserver = class {
      observe() {} unobserve() {} disconnect() {}
    };
    win.fetch = async (url, opts) => {
      const abs = new URL(String(url), BASE).href;
      const res = await globalThis.fetch(abs, opts);
      return { ok: res.ok, status: res.status, json: () => res.json(), text: () => res.text() };
    };
  },
});

const { window } = dom;
await new Promise(r => setTimeout(r, 12000));
const content = () => window.document.getElementById('content').textContent || '';
const go = async hash => {
  window.eval(`Router.go('${hash}')`);
  await new Promise(r => setTimeout(r, 2500));
};

console.log('\n-- sheet roster');
await go('#/sheet');
check('roster renders', content().includes('Character Sheets'));
check('roster lists the party sheets', content().includes('waluigi') && content().includes('toad-lee'));
check('roster shows the loot section', content().includes('Latest session loot'));

console.log('\n-- waluigi sheet');
await go('#/sheet/waluigi');
const sheet = content();
check('sheet names the actor', sheet.includes('Waluigi'));
check('sheet shows HP + AC', sheet.includes('HP') && sheet.includes('AC'));
check('sheet shows abilities', sheet.includes('STR') && sheet.includes('CHA'));
check('sheet groups gear', sheet.includes('Features') && sheet.includes('Spells'));
check('sheet links the wiki article', sheet.includes('Wiki article'));
check('sheet carries the live loot panel', sheet.includes('Session loot'));

console.log('\n-- extraction parity on the article');
await go('#/article/waluigi');
const article = content();
check('article still renders the inventory panel', article.includes('Public Inventory'));
check('article links the character sheet', article.includes('Open character sheet'));

console.log(`\n${pass} passed, ${fail.length} failed`);
process.exit(fail.length ? 1 : 0);
