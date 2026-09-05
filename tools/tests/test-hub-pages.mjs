/**
 * Hub pages: Injury Desk, live Collections, RNN newsdesk.
 *
 * Three systems that existed as data but had no working surface:
 *   - injuries.json had 343 entries, NO route, and its own rules text
 *     referenced an "Injury Desk" page that did not exist.
 *   - collections were static rosters; nothing on the page changed as the
 *     campaign moved, so there was no reason to open one.
 *   - the RNN had covered 17 of 113 events and nothing showed the backlog or
 *     told a reader an article had been on air.
 *
 * Pure-data tests: the real functions are extracted from index.html and run
 * against the real JSON, so they cannot drift from what ships.
 *
 * Run: node tools/tests/test-hub-pages.mjs
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

const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const main = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)]
  .map(m => m[1]).sort((a, b) => b.length - a.length)[0];

function extract(sig) {
  const i = main.indexOf(sig);
  if (i < 0) throw new Error(`not found: ${sig}`);
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
const injuries = load('injuries');
const collections = load('collections');
const collList = Array.isArray(collections) ? collections : (collections.collections || []);

// RNN episodes live in a .js file assigning window.RNN_BROADCASTS
const rnnSrc = fs.readFileSync(path.join(DATA, 'rnn-broadcasts.js'), 'utf8');
const rnn = JSON.parse(rnnSrc.slice(rnnSrc.indexOf('=') + 1).trim().replace(/;$/, ''));

const sandbox = {
  DATA: { events, collections: collList, injuries },
  INDEX: Object.fromEntries(events.map(e => [e.id, { typeKey: 'events', item: e }])),
  window: {},
  prettyId: s => String(s),
  esc: s => String(s == null ? '' : s),
};
sandbox.window.RNN_BROADCASTS = rnn;

const src = [
  extract('function normalizeSearchText'),
  extract('function yearOf'),
  extract('function shortDateOf'),
  extract('function collectionMemberIds'),
  extract('function collectionTimeline'),
  extract('function collectionStats'),
  extract('function collectionNeighbours'),
  extract('function rnnEpisodes'),
  extract('function rnnAiredMap'),
  extract('function rnnPending'),
].join('\n');

new Function('DATA', 'INDEX', 'window', 'prettyId', 'esc', `
  ${src};
  this.collectionStats=collectionStats;
  this.collectionTimeline=collectionTimeline;
  this.collectionNeighbours=collectionNeighbours;
  this.rnnAiredMap=rnnAiredMap;
  this.rnnPending=rnnPending;
`).call(sandbox, sandbox.DATA, sandbox.INDEX, sandbox.window, sandbox.prettyId, sandbox.esc);

const { collectionStats, collectionTimeline, collectionNeighbours, rnnAiredMap, rnnPending } = sandbox;

console.log(`\n${events.length} events · ${collList.length} collections · ${rnn.episodes.length} episodes\n`);

// ------------------------------------------------------------ injury desk
console.log('-- injury desk');

const entries = (injuries.entries || []).filter(e => e && e.injuryType);
check('the table has entries', entries.length >= 150, `${entries.length}`);
check('the Injury Desk has a route', /route==='injuries'/.test(main),
  'injuries.json still has no page');
check('death saves are implemented', /function rollDeathSave/.test(main));
check('the table is reachable from the sidebar', /label:'Injury Desk'/.test(main));
check('Crime & Punishment is in the sidebar', /label:'Crime & Punishment'/.test(main));

// 5e death save rules, asserted against the implementation text
const saveFn = extract('function rollDeathSave');
check('a natural 1 costs two failures', /r===1[\s\S]{0,60}fail\+=2/.test(saveFn));
check('a natural 20 revives', /r===20[\s\S]{0,80}revived/.test(saveFn));
check('10 or higher succeeds', /r>=10/.test(saveFn));
check('three successes stabilise', /succ>=3/.test(saveFn));
check('three failures kill', /fail>=3/.test(saveFn));

// Regression guard: the generator once collapsed onto one noun phrase and
// numbered its way out with roman numerals (125 rows of 'Veilbound Vein').
{
  const stem = n => String(n).replace(/\s+[IVXLCDM]{1,7}$/, '').trim();
  const fam = {}; const pre = {};
  for (const e of entries) {
    const n = e.injuryType || '';
    fam[stem(n)] = (fam[stem(n)] || 0) + 1;
    const p = n.split(/\s+/).slice(0, 2).join(' ');
    pre[p] = (pre[p] || 0) + 1;
  }
  const worstFam = Object.entries(fam).sort((a, b) => b[1] - a[1])[0] || ['', 0];
  const worstPre = Object.entries(pre).sort((a, b) => b[1] - a[1])[0] || ['', 0];
  check('no injury name family dominates the table', worstFam[1] <= 2,
    `${worstFam[0]} x${worstFam[1]}`);
  check('no two-word prefix dominates the table', worstPre[1] <= 12,
    `${worstPre[0]} x${worstPre[1]}`);
  const romans = entries.filter(e => /\s[IVXLCDM]{2,}$/.test(e.injuryType || '')).length;
  check('roman-numeral variants are rare', romans <= 10, `${romans}`);
  check('every injury name is unique',
    new Set(entries.map(e => e.injuryType)).size === entries.length);
}

check('provisional entries are flagged to the reader',
  injuries.status !== 'temporary' || /inj-warn/.test(main),
  'table is marked temporary but the page does not say so');

// ------------------------------------------------------------ collections
console.log('\n-- collections are computed, not static');

const big = collList.find(c => c.id === 'core_disaster_inc_members') || collList[0];
const st = collectionStats(big);
check('a collection reports member count', st.members > 0, `${st.members}`);
check('a collection computes shared appearances', st.events > 0, `${st.events}`);
check('a collection computes XP', st.xp >= 0);
check('the timeline is derived from participants[]',
  collectionTimeline(big).length === st.events);

let withEvents = 0, unlinked = 0;
for (const c of collList) {
  const s = collectionStats(c);
  if (s.events > 0) withEvents++;
  unlinked += s.missing;
}
check('most collections resolve to real appearances', withEvents >= collList.length / 2,
  `${withEvents}/${collList.length}`);
console.log(`  note unlinked member ids across all collections: ${unlinked}`);

check('overlapping collections are found', collectionNeighbours(big).length > 0);
check('a collection never lists itself as a neighbour',
  collList.every(c => collectionNeighbours(c).every(n => n.c.id !== c.id)));
check('timeline entries all resolve to real events',
  collectionTimeline(big).every(e => sandbox.INDEX[e.id]));

// ------------------------------------------------------------------- rnn
console.log('\n-- rnn newsdesk');

const aired = rnnAiredMap();
const airedIds = Object.keys(aired);
const pending = rnnPending();

check('episodes declare their source events', airedIds.length > 0, `${airedIds.length}`);
check('aired + pending accounts for every event',
  airedIds.filter(id => sandbox.INDEX[id]).length + pending.length === events.length,
  `${airedIds.length} aired + ${pending.length} pending vs ${events.length}`);
check('the backlog is real and surfaced', pending.length > 0 && /rnnNewsdeskPanel/.test(main),
  'no newsdesk panel');
check('articles show when they were on air', /rnnCoveragePanel/.test(main));
check('no pending item is also marked aired',
  pending.every(p => !aired[p.id]));
check('every aired id resolves to a real event',
  airedIds.every(id => sandbox.INDEX[id]),
  airedIds.filter(id => !sandbox.INDEX[id]).slice(0, 3).join(', '));

const pct = Math.round(((events.length - pending.length) / events.length) * 100);
console.log(`  note coverage: ${events.length - pending.length}/${events.length} events aired (${pct}%)`);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
