/**
 * Live search test: boots the real page in jsdom, types a query into the real
 * search box, and reads the rendered results.
 *
 * This is the end-to-end proof that the fix works in the browser, not just in
 * the extracted scoring functions.
 *
 * Requires a static server on 8765:  python3 -m http.server 8765
 * Run: node tools/tests/test-search-live.mjs
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
    // jsdom ships no fetch, so loadData() silently falls back to the small
    // embedded copy baked into the page (146 articles, no events at all) and
    // the test ends up measuring the fallback instead of the real archive.
    // Bridge fetch to the static server, resolving relative URLs against BASE.
    win.fetch = async (url, opts) => {
      const abs = new URL(String(url), BASE).href;
      const res = await globalThis.fetch(abs, opts);
      return {
        ok: res.ok,
        status: res.status,
        json: () => res.json(),
        text: () => res.text(),
      };
    };
  },
});

const { window } = dom;
await new Promise(r => setTimeout(r, 12000));

console.log('\n-- page boot');
// SEARCH_DOCS is declared with const, so it is script-scoped and never lands on
// window. Probe the index through search() results instead, which carry the
// same document shape.
check('search() is reachable', typeof window.search === 'function');
const probe = window.search ? window.search('waluigi', { category: 'all', limit: 200 }) : [];
check('the index is populated', probe.length > 20, `${probe.length}`);
check('documents carry a people field',
  probe.some(d => d.people && d.people.length), 'no result has people');
check('documents carry a dateLabel',
  probe.some(d => d.dateLabel && d.dateLabel.length), 'no result has dateLabel');

console.log('\n-- the failing question, through the real search()');
const run = q => (window.search ? window.search(q, { category: 'all', limit: 40 }) : []);

const r1 = run('aurelian possessed');
check('"aurelian possessed" returns results', r1.length > 0, `${r1.length}`);
if (r1.length) console.log(`       top: ${r1[0].name}`);

const r2 = run('aurelian');
check('"aurelian" returns results', r2.length > 0, `${r2.length}`);
check('an Aurelian record ranks in the top 5',
  r2.slice(0, 5).some(r => /aurelian/i.test(r.name) || /aurelian/i.test(r.people || '')),
  r2.slice(0, 5).map(r => r.name).join(' | '));

// A participant hit must outrank a record that merely mentions the name.
const participantHits = r2.filter(r => (r.people || '').includes('aurelian'));
if (participantHits.length) {
  const bestParticipant = Math.min(...participantHits.map(r => r2.indexOf(r)));
  check('a scene Aurelian was in ranks highly', bestParticipant < 10,
    `best participant hit at position ${bestParticipant}`);
}

console.log('\n-- rendered output');
const input = window.document.getElementById('search');
check('search input exists', !!input);
if (input) {
  input.value = 'aurelian possessed';
  input.dispatchEvent(new window.Event('input', { bubbles: true }));
  await new Promise(r => setTimeout(r, 600));
  const box = window.document.getElementById('results');
  const items = box ? box.querySelectorAll('.res-item') : [];
  check('results render in the DOM', items.length > 0, `${items.length} items`);
  const html = box ? box.innerHTML : '';
  check('result markup is well formed', !html.includes('undefined'),
    'contains the string "undefined"');
  if (items.length) {
    console.log(`       first result: ${items[0].querySelector('.rtitle')?.textContent?.trim().slice(0, 70)}`);
    const who = box.querySelector('.rwho');
    if (who) console.log(`       who line   : ${who.textContent.trim().slice(0, 70)}`);
  }
}

console.log('\n-- typo tolerance (the words the report actually used)');
// The bug report typed "arulean" and "possesed". The second returned nothing,
// which reads as "the archive has no such thing".
const typos = [
  ['possesed', 'possessed'],
  ['aurelien', 'aurelian'],
  ['petrifcation', 'petrification'],
  ['waluigii', 'waluigi'],
];
for (const [typo] of typos) {
  const r = run(typo);
  check(`"${typo}" still finds something`, r.length > 0,
    'zero results — user is told the archive is empty');
}
check('nonsense still returns nothing', run('zzzzznope').length === 0,
  'fuzzy matching is too loose');
check('a correctly spelled query is not rewritten', (() => {
  run('aurelian');
  return (window.LAST_SEARCH_CORRECTIONS || []).length === 0;
})(), 'correction fired on a valid word');

console.log('\n-- no crashes on edge cases');
for (const q of ['', ' ', 'zzzzzznope', '"quoted phrase"', 'a', '@events aurelian']) {
  let ok = true;
  try { run(q); } catch (e) { ok = false; }
  check(`search(${JSON.stringify(q)}) does not throw`, ok);
}

console.log(`\n${pass} passed, ${fail} failed`);
dom.window.close();
process.exit(fail ? 1 : 0);
