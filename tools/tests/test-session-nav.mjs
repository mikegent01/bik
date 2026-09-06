/**
 * Session navigation tests.
 *
 * Articles filed into an investigation arc get previous/next session links.
 * The tricky part is that a big arc braids several storylines together --
 * `shadeward_feyward_ruined` holds the Feyward manor thread, the Shadow Estate
 * storm chain and the Shadowfell ritual in one sessions[] array -- so walking
 * the raw array sends a reader from a Feyward corridor to a different
 * continent. The nav prefers the nearest neighbour on the same storyline,
 * identified by the leading segment of `era`.
 *
 * These are pure-data tests: they reimplement nothing, they extract the real
 * functions out of index.html and run them against the real JSON.
 *
 * Run: node tools/tests/test-session-nav.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const DATA = path.join(ROOT, 'Reputation-Matrix2', 'data');

let pass = 0, fail = 0;
const check = (name, cond, extra = '') => {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name} ${extra}`); }
};

// ---------------------------------------------------------------- harness
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const main = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)]
  .map(m => m[1]).sort((a, b) => b.length - a.length)[0];

function extract(sig) {
  const i = main.indexOf(sig);
  if (i < 0) throw new Error(`not found in index.html: ${sig}`);
  let depth = 0, started = false;
  for (let j = i; j < main.length; j++) {
    const c = main[j];
    if (c === '{') { depth++; started = true; }
    else if (c === '}') { depth--; if (started && depth === 0) return main.slice(i, j + 1); }
  }
  throw new Error(`unbalanced: ${sig}`);
}

const load = n => JSON.parse(fs.readFileSync(path.join(DATA, `${n}.json`), 'utf8'));
const events = load('events').filter(e => e && e.id);
const investigations = load('investigations').investigations;

// Minimal globals the extracted function closes over.
const sandbox = {
  INDEX: Object.fromEntries(events.map(e => [e.id, { typeKey: 'events', item: e }])),
  DATA: { investigations: { investigations } },
};
const src = [extract('function normalizeSearchText'), extract('function sessionNeighbours')].join('\n');
// eslint-disable-next-line no-new-func
new Function('INDEX', 'DATA', `${src}; this.sessionNeighbours=sessionNeighbours;`)
  .call(sandbox, sandbox.INDEX, sandbox.DATA);
const { sessionNeighbours } = sandbox;

const nameOf = id => {
  const e = sandbox.INDEX[id];
  return (e && (e.item.name || e.item.title)) || id;
};

console.log(`\n${events.length} events, ${investigations.length} arcs\n`);

// ------------------------------------------------------ the Feyward chain
console.log('-- the Feyward manor thread reads in order');

const CHAIN = [
  'feyward_dark_rooms_and_balcony_planning',
  'feyward_amnesia_vines_morel_steely',
  'feyward_chop_bros_soul_ring_and_the_guard_with_no_name',
  'feyward_battalion_of_six_and_the_bait_plan',
  'feyward_library_reclamation_and_the_kitchen',
];

for (let i = 0; i < CHAIN.length - 1; i++) {
  const here = CHAIN[i], after = CHAIN[i + 1];
  const n = sessionNeighbours(here);
  check(`${nameOf(here).slice(0, 34)} -> next is ${nameOf(after).slice(0, 30)}`,
    !!n && !!n.next && n.next.event === after,
    n && n.next ? `got ${n.next.event}` : 'no next');
}
for (let i = 1; i < CHAIN.length; i++) {
  const here = CHAIN[i], before = CHAIN[i - 1];
  const n = sessionNeighbours(here);
  check(`${nameOf(here).slice(0, 34)} -> prev is ${nameOf(before).slice(0, 30)}`,
    !!n && !!n.prev && n.prev.event === before,
    n && n.prev ? `got ${n.prev.event}` : 'no prev');
}

// The regression that prompted the thread logic: the library's previous
// session must not be the Shadow Estate skirmish sitting next to it in the
// raw array.
const lib = sessionNeighbours('feyward_library_reclamation_and_the_kitchen');
check('library does not link back to a Shadow Estate session',
  !!lib && lib.prev && lib.prev.event !== 'the_scorncrow_skirmish',
  lib && lib.prev ? lib.prev.event : 'no prev');

// ------------------------------------------------------------ invariants
console.log('\n-- invariants');

let checked = 0, selfLink = 0, dead = 0, crossThread = 0;
const threadOf = id => {
  const e = sandbox.INDEX[id];
  const era = String((e && e.item.era) || '');
  return era.split('/')[0].replace(/[\u2010-\u2015]/g, ' ').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
};

for (const arc of investigations) {
  for (const row of (arc.sessions || [])) {
    if (!row || !row.event || !sandbox.INDEX[row.event]) continue;
    const n = sessionNeighbours(row.event);
    if (!n) continue;
    checked++;
    for (const side of ['prev', 'next']) {
      const r = n[side];
      if (!r) continue;
      if (r.event === row.event) selfLink++;
      if (!sandbox.INDEX[r.event]) dead++;
      const a = threadOf(row.event), b = threadOf(r.event);
      if (a && b && a !== b) crossThread++;
    }
  }
}

check('every session row resolves to an arc', checked > 30, `${checked}`);
check('no session links to itself', selfLink === 0, `${selfLink}`);
check('no session links to a missing event', dead === 0, `${dead}`);
console.log(`  note cross-thread links remaining: ${crossThread} (allowed fallback when a thread has no neighbour)`);

// ------------------------------------------------------------- edge cases
console.log('\n-- edge cases');

check('an unknown id returns null', sessionNeighbours('no_such_event_xyz') === null);
check('a character id returns null', sessionNeighbours('hjumpik') === null);
check('an empty id returns null', sessionNeighbours('') === null);

const single = investigations.find(a => (a.sessions || []).length === 1);
if (single) {
  const only = single.sessions[0].event;
  if (sandbox.INDEX[only]) {
    const n = sessionNeighbours(only);
    check('a one-session arc offers no neighbours', !!n && !n.prev && !n.next,
      n ? `prev=${!!n.prev} next=${!!n.next}` : 'null');
  }
}

check('index reports position and total',
  !!lib && Number.isInteger(lib.idx) && lib.total > 1,
  lib ? `idx=${lib.idx} total=${lib.total}` : 'null');

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
