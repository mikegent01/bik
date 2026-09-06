/**
 * Search quality regression tests.
 *
 * Born from a real failure: at the table, a player asked which battle Lady
 * Aurelian was possessed in. The archive had the answer, but search could not
 * surface it because the index only ever read flat metadata fields -- so
 * `participants[]`, present on 99 of 112 events and listing every character in
 * every scene, was invisible to it.
 *
 * These tests extract the real scoring code out of index.html and run it
 * against the real data files. No mocks, no jsdom boot -- the functions under
 * test are pure.
 *
 * Run: node tools/tests/test-search-quality.mjs
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
// Pull the real implementations out of index.html so the tests cannot drift
// away from what actually ships.
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)]
  .map(m => m[1]).sort((a, b) => b.length - a.length);
const main = scripts[0];

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

const sandbox = {};
const src = [
  extract('function normalizeSearchText'),
  extract('function peopleOf'),
  extract('function yearOf'),
  extract('function shortDateOf'),
].join('\n');
// eslint-disable-next-line no-new-func
new Function(`${src}; this.normalizeSearchText=normalizeSearchText; this.peopleOf=peopleOf; this.yearOf=yearOf; this.shortDateOf=shortDateOf;`).call(sandbox);
const { normalizeSearchText, peopleOf, yearOf, shortDateOf } = sandbox;

// ------------------------------------------------------------------ data
function load(name) {
  const p = path.join(DATA, `${name}.json`);
  if (!fs.existsSync(p)) return [];
  const raw = JSON.parse(fs.readFileSync(p, 'utf8'));
  let items = Array.isArray(raw) ? raw : (raw[name] || raw.characters || raw.events || []);
  if (!Array.isArray(items)) items = Object.values(items);
  return items.filter(x => x && typeof x === 'object' && x.id);
}

const flat = (v, depth = 0) => {
  if (v == null) return '';
  if (typeof v === 'string') return v;
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (depth > 4) return '';
  if (Array.isArray(v)) return v.map(x => flat(x, depth + 1)).join(' ');
  if (typeof v === 'object') return Object.values(v).map(x => flat(x, depth + 1)).join(' ');
  return '';
};

// Mirrors the hay construction in buildIndexes().
function makeDoc(item, kind) {
  const hay = [item.name, item.title, item.summary, item.description, item.history,
    item.lore, item.bio, item.type, item.affiliation, item.race, item.leader,
    item.era, item.location, item.region, item.defendant, item.prosecutor,
    flat(item.participants), flat(item.outcome), flat(item.aftermath), flat(item.sections),
    flat(item.keyBattles), flat(item.notableFeatures), flat(item.effects), flat(item.status),
    flat(item.waluigiAssessment), flat(item.openThreads), flat(item.tags), flat(item.aliases),
    flat(item.keyMoments), flat(item.keyEvents), flat(item.date),
  ].filter(Boolean).join(' ').toLowerCase();
  return {
    kind, id: item.id, name: item.name || item.title || item.id,
    summary: String(item.summary || ''), hay,
    people: peopleOf(item).join(' ').toLowerCase(),
    dateLabel: shortDateOf(item), year: yearOf(item),
  };
}

const DOCS = [];
for (const k of ['events', 'characters', 'locations', 'factions', 'battles', 'investigations']) {
  for (const it of load(k)) DOCS.push(makeDoc(it, k));
}

// The legacy index, for before/after comparison.
function legacyHay(item) {
  return [item.name, item.title, item.summary, item.description, item.history, item.lore,
    item.bio, item.type, item.affiliation, item.race, item.leader, item.era,
    item.location, item.region, item.defendant, item.prosecutor]
    .filter(Boolean).join(' ').toLowerCase();
}
const LEGACY = [];
for (const k of ['events', 'characters', 'locations', 'factions', 'battles', 'investigations']) {
  for (const it of load(k)) {
    LEGACY.push({ id: it.id, name: it.name || it.title || it.id, hay: legacyHay(it) });
  }
}

function find(docs, q, field = 'hay') {
  const terms = normalizeSearchText(q).split(/\s+/).filter(Boolean);
  return docs.filter(d => {
    const blob = `${normalizeSearchText(d.name)} ${d[field] || ''} ${d.people || ''}`;
    return terms.every(t => blob.includes(t));
  });
}

console.log(`\nindexed ${DOCS.length} records from ${DATA}\n`);

// ------------------------------------------------------- the real failure
console.log('-- the question that failed at the table');

const possessed = find(DOCS, 'aurelian possessed');
check('"aurelian possessed" returns results', possessed.length > 0, `${possessed.length}`);

const legacyPossessed = find(LEGACY, 'aurelian possessed');
check('improved index finds at least as much as the old one',
  possessed.length >= legacyPossessed.length,
  `new ${possessed.length} vs old ${legacyPossessed.length}`);

// ------------------------------------------------------------- people
console.log('\n-- participants are indexed');

const events = load('events');
const withPeople = events.filter(e => peopleOf(e).length > 0);
check('most events expose participants', withPeople.length > 80,
  `${withPeople.length}/${events.length}`);

const aurelianEvents = DOCS.filter(d => (d.people || '').includes('aurelian'));
check('Aurelian is findable as a participant', aurelianEvents.length > 0,
  `${aurelianEvents.length}`);

check('participant names reach the hay',
  DOCS.some(d => d.kind === 'events' && d.hay.includes('aurelian')),
  'no event hay mentions aurelian');

// peopleOf handles all the shapes present in the data
check('peopleOf reads [{id,name,role}]',
  peopleOf({ participants: [{ id: 'a_b', name: 'Lady X', role: 'Host' }] })
    .join('|').includes('Lady X'));
check('peopleOf reads plain strings',
  peopleOf({ participants: ['Waluigi', 'Wario'] }).length === 2);
check('peopleOf on an empty record is empty', peopleOf({}).length === 0);
check('peopleOf ignores nulls', peopleOf({ participants: null }).length === 0);

// ---------------------------------------------------------------- dates
console.log('\n-- dates are usable');

check('yearOf reads a BF year', yearOf({ date: '~17 Harvestside, 1040 BF (unreliable)' }) === 1040);
check('yearOf reads a bare year', yearOf({ date: 'Highsun 1, 955' }) === 955);
check('yearOf falls back to era', yearOf({ date: '', era: 'Something 872 BF' }) === 872);
check('yearOf returns null when hopeless', yearOf({ date: 'sometime later' }) === null);

// Only dated record types can yield a year. Characters, locations and
// investigations carry no date field at all, so measuring them here would be
// testing the data model rather than the parser.
const datable = DOCS.filter(d => d.kind === 'events' || d.kind === 'battles');
const dated = datable.filter(d => d.year != null);
check('nearly every dated record yields a year',
  dated.length > datable.length * 0.9,
  `${dated.length}/${datable.length}`);
check('undated record types are not forced to invent a year',
  DOCS.filter(d => d.kind === 'characters').every(d => d.year == null));

check('shortDateOf truncates prose dates',
  shortDateOf({ date: '~17 Harvestside, 1040 BF (Feyward-relative — temporal synchronization with the Material Plane remains unreliable)' }).length <= 48);
check('shortDateOf keeps a short date whole',
  shortDateOf({ date: '19 Harvestside, 1040 BF' }) === '19 Harvestside, 1040 BF');
check('shortDateOf on empty is empty', shortDateOf({}) === '');
check('shortDateOf cuts at the first separator',
  !shortDateOf({ date: '12 Aethel, 1040 | era Something Else' }).includes('era'));

// --------------------------------------------------------- no regressions
console.log('\n-- nothing got worse');

const QUERIES = ['aurelian', 'waluigi', 'wario', 'remi', 'feyward', 'blackfen',
  'petrification', 'manor', 'congress', 'toad'];
let improved = 0, worse = 0;
for (const q of QUERIES) {
  const now = find(DOCS, q).length;
  const before = find(LEGACY, q).length;
  if (now > before) improved++;
  if (now < before) worse++;
}
check('no query returns fewer results than before', worse === 0, `${worse} regressed`);
check('several queries return more', improved >= 3, `${improved} improved`);

for (const q of QUERIES) {
  check(`"${q}" returns something`, find(DOCS, q).length > 0);
}

// ------------------------------------------------------------- integrity
console.log('\n-- index integrity');

check('every doc has an id', DOCS.every(d => d.id));
check('every doc has a name', DOCS.every(d => d.name));
check('no doc has an undefined hay', DOCS.every(d => typeof d.hay === 'string'));
check('no doc has an undefined people', DOCS.every(d => typeof d.people === 'string'));
check('hay is lowercase', DOCS.every(d => d.hay === d.hay.toLowerCase()));

const huge = DOCS.filter(d => d.hay.length > 400000);
check('no runaway hay from deep recursion', huge.length === 0, `${huge.length} oversized`);

check('normalizeSearchText strips punctuation',
  normalizeSearchText("Aurelian's, Manor!") === 'aurelian s manor');

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
