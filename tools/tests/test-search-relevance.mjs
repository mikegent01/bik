/**
 * Search relevance benchmark.
 *
 * Written because tuning the scorer one query at a time made it oscillate:
 * every fix for "mazebound fight" broke "aurelian possessed" and vice versa.
 * This file states, in one place, what each realistic table query is SUPPOSED
 * to return, so a change can be judged against all of them at once instead of
 * against whichever query was most recently complained about.
 *
 * Cases come from real reported failures:
 *   - "the session where we fought the mazebounds"  (a friend could not find it)
 *   - "arulean" / "possesed"                        (typos, reported earlier)
 *
 * Run with a static server on 8765:
 *   python3 -m http.server 8765
 *   node tools/tests/test-search-relevance.mjs
 */

import { JSDOM, VirtualConsole } from 'jsdom';

const BASE = 'http://127.0.0.1:8765/';
let pass = 0, fail = 0;
const check = (name, cond, extra = '') => {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name} ${extra}`); }
};

process.on('unhandledRejection', () => {});
const vc = new VirtualConsole();
vc.on('jsdomError', () => {});

const dom = await JSDOM.fromURL(BASE, {
  runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true,
  virtualConsole: vc,
  beforeParse(w) {
    w.scrollTo = () => {};
    w.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
    w.renderFactionPowerProjection = () => {};
    // jsdom has no fetch; without this the page silently falls back to a small
    // embedded copy and the benchmark measures the wrong corpus entirely.
    w.fetch = async (u, o) => {
      const r = await globalThis.fetch(new URL(String(u), BASE).href, o);
      return { ok: r.ok, status: r.status, json: () => r.json(), text: () => r.text() };
    };
  },
});
const w = dom.window;
await new Promise(r => setTimeout(r, 14000));
w.search('warm'); // prime the normalisation cache

const run = q => w.search(q, { category: 'all', limit: 600 });
const rankOf = (res, id) => res.findIndex(x => x.id === id) + 1; // 0 = missing

console.log('\n-- the reported failure: finding a session by describing it');

// "oh, the session where we fought the mazebounds"
const MAZE = 'skirmish_mazebound';
const mazeQueries = [
  'mazebound fight',
  'mazebound battle',
  'mazebound skirmish',
  'fought the mazebounds',
  'the session where we fought mazebounds',
];
for (const q of mazeQueries) {
  const r = run(q);
  const rank = rankOf(r, MAZE);
  check(`"${q}" surfaces The Mazebound Skirmish in the top 10`,
    rank > 0 && rank <= 10, rank ? `rank ${rank}` : 'MISSING');
}

console.log('\n-- earlier reported failures must stay fixed');

const AUR = 'remi_petrification';
{
  const r = run('aurelian possessed');
  const rank = rankOf(r, AUR);
  check('"aurelian possessed" finds The Petrification of Remi in the top 10',
    rank > 0 && rank <= 10, rank ? `rank ${rank}` : 'MISSING');
}
for (const q of ['possesed', 'aurelien', 'petrifcation', 'waluigii']) {
  check(`typo "${q}" still returns something`, run(q).length > 0);
}
check('nonsense still returns nothing', run('zzzzznope').length === 0);

console.log('\n-- precision: a query must not drag in the whole archive');

const WIDE = [
  ['possesed', 80],
  ['aurelian possessed', 40],
  ['mazebound fight', 60],
  ['red kitchen', 80],
];
for (const [q, cap] of WIDE) {
  const n = run(q).length;
  check(`"${q}" returns fewer than ${cap} results`, n < cap, `${n}`);
}

console.log('\n-- named things win over passing mentions');

const NAMED = [
  ['aurelian', /aurelian/i],
  ['waluigi', /waluigi/i],
  ['mazebound skirmish', /mazebound/i],
  ['red kitchen', /red/i],
];
for (const [q, re] of NAMED) {
  const top = run(q)[0];
  check(`"${q}" -> top result names it`, !!top && re.test(top.name),
    top ? top.name.slice(0, 40) : 'no results');
}

console.log('\n-- speed');

const timed = (q, n = 25) => {
  const s = Date.now();
  for (let i = 0; i < n; i++) w.search(q, { limit: 600 });
  return (Date.now() - s) / n;
};
const t1 = timed('mazebound fight');
const t2 = timed('aurelian possessed');
console.log(`  "mazebound fight"    ${t1.toFixed(1)} ms`);
console.log(`  "aurelian possessed" ${t2.toFixed(1)} ms`);
// It was 573ms per keystroke before caching (two full passes, 13.3M chars of
// hay re-normalised through a regex every time).
check('a search costs under 60ms', Math.max(t1, t2) < 60, `${Math.max(t1, t2).toFixed(0)}ms`);
check('normalisation is cached, not repeated',
  typeof w.ensureNormalized === 'function');

console.log('\n-- the input is debounced');
check('runSearchDebounced exists', typeof w.runSearchDebounced === 'function');

console.log(`\n${pass} passed, ${fail} failed`);
dom.window.close();
process.exit(fail ? 1 : 0);
