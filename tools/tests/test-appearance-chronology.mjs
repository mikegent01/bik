/**
 * Appearance chronology contract tests — "first seen in" / "last seen in".
 *
 * The panel answers two questions from data that has no single sort key
 * (standing gap: three dateSort schemes). Ordering is derived at render time,
 * so these tests guard the derivation rather than a stored field.
 *
 * The invariants that matter, and why each one exists:
 *   1. Clocks are never mixed. The Feyward keeps its own year — 922 BF by its
 *      own count — so sorting it against a Material 1040 would file this
 *      year's Feyward session as ancient history.
 *   2. Records dated past the world clock are held out of the sequence.
 *      `collapse_of_blackfen_pass` is dated 2374 BF while its era reads "The
 *      Old World"; under "BF counts UP" that is the far future. It must not
 *      become the "last seen in" of the six characters it names.
 *   3. Undated records are reported as undated, never given a fabricated slot.
 *   4. KIV parses. It was registered in the Python checkers but not in
 *      index.html, so the Trinity filing's timecode pill silently vanished.
 *
 * Run: node tools/tests/test-appearance-chronology.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const DATA_DIR = path.join(ROOT, 'Reputation-Matrix2', 'data');

let pass = 0, fail = 0;
const check = (name, cond, extra = '') => {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name} ${extra}`); }
};

const src = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const events = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'events.json'), 'utf8'));
const battles = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'battles.json'), 'utf8'));
const chars = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'characters.json'), 'utf8'));
const currentDate = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'currentDate.json'), 'utf8'));

// Lift the real implementations out of index.html so the test cannot drift
// from the shipped code by copying it.
function grab(name) {
  const i = src.indexOf('function ' + name + '(');
  if (i < 0) throw new Error('function not found in index.html: ' + name);
  let depth = 0;
  const start = src.indexOf('{', i);
  for (let k = start; k < src.length; k++) {
    if (src[k] === '{') depth++;
    else if (src[k] === '}') { depth--; if (!depth) return src.slice(i, k + 1); }
  }
  throw new Error('unbalanced: ' + name);
}

const TC_MONTHS = ['Firstlight','Chillwind','Veridia','Bloom','Floria','Efferd',
                   'Highsun','Harvestide','Aethel','Darkmoon','Frostfall','Deepwinter'];
const TC_CLOCKS = {MAT:'Material clock',SHD:'Shadowfell clock',FEY:'Feyward clock',
                   KIV:'Kivotos academy clock',SUBJ:'Subjective'};
const APPEAR_MONTHS = {};
TC_MONTHS.forEach((m, i) => { APPEAR_MONTHS[m.toLowerCase()] = i + 1; });
const INDEX = {};
events.forEach(e => { if (e && e.id) INDEX[e.id] = { typeKey: 'events', item: e }; });
battles.forEach(e => { if (e && e.id) INDEX[e.id] = { typeKey: 'battles', item: e }; });
const DATA = { events, battles, currentDate };
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const displayName = o => o && (o.name || o.title || o.id);

const body = ['parseTimeCode','eventClock','eventTimeKey','timeKeyValue','timeKeyLabel',
              'appearanceTimeline','appearancePanel'].map(grab).join('\n');
const api = new Function('TC_MONTHS','TC_CLOCKS','APPEAR_MONTHS','INDEX','DATA','esc','displayName',
  body + ';return {parseTimeCode,eventClock,eventTimeKey,timeKeyValue,timeKeyLabel,appearanceTimeline,appearancePanel};'
)(TC_MONTHS, TC_CLOCKS, APPEAR_MONTHS, INDEX, DATA, esc, displayName);

console.log('\n-- timecode parsing');
check('KIV clock parses (was missing from index.html)',
      !!api.parseTimeCode('TC:1040-09-05T09:00/KIV'));
check('every timeCode in events.json parses',
      events.filter(e => e.timeCode).every(e => api.parseTimeCode(e.timeCode)),
      String(events.filter(e => e.timeCode && !api.parseTimeCode(e.timeCode)).map(e => e.timeCode)));
check('a malformed timecode is rejected', api.parseTimeCode('TC:nonsense/MAT') === null);

console.log('\n-- date coverage');
const parsed = events.filter(e => api.eventTimeKey(e)).length;
check('most event records yield a sortable key', parsed >= events.length - 8,
      `${parsed}/${events.length}`);
check('records with no usable date return null, not a guess',
      api.eventTimeKey({ id: 'x', date: 'Unknown — sometime' }) === null);

console.log('\n-- clock separation');
check('a Feyward filing is tagged FEY, not Material',
      api.eventClock({ date: '2 Aethel, 922 BF (Feyward clock)' }) === 'FEY');
check('Feyward years are labelled with their clock',
      api.timeKeyLabel(api.eventTimeKey({ date: '2 Aethel, 922 BF (Feyward clock)' })).includes('FEY'));
const feyChar = chars.find(c => {
  const t = api.appearanceTimeline(c);
  return Object.keys(t.byClock).length > 1;
});
check('at least one entity spans multiple clocks (grouping is exercised)', !!feyChar);
if (feyChar) {
  const t = api.appearanceTimeline(feyChar);
  check('each clock group holds only its own clock',
        Object.entries(t.byClock).every(([c, rows]) => rows.every(r => (r.key.clock || 'MAT') === c)));
}

console.log('\n-- the 2374 BF contradiction');
const blackfen = events.find(e => e.id === 'collapse_of_blackfen_pass');
check('the contradictory record still exists (test is still relevant)', !!blackfen);
if (blackfen) {
  const named = (blackfen.participants || []).map(p => p && p.id).filter(Boolean);
  const affected = chars.filter(c => named.includes(c.id));
  check('it names characters whose timeline it would otherwise end', affected.length > 0);
  for (const c of affected) {
    const t = api.appearanceTimeline(c);
    const inSeq = t.dated.some(o => o.id === 'collapse_of_blackfen_pass');
    check(`${c.id}: future-dated record is held out of the sequence`, !inSeq);
    check(`${c.id}: it is surfaced as a flagged contradiction instead`,
          t.beyond.some(o => o.id === 'collapse_of_blackfen_pass'));
  }
}

console.log('\n-- ordering');
const wario = chars.find(c => c.id === 'wario');
if (wario) {
  const t = api.appearanceTimeline(wario);
  const run = t.byClock.MAT || [];
  const vals = run.map(o => api.timeKeyValue(o.key));
  check('the main-clock run is sorted oldest first',
        vals.every((v, i) => i === 0 || vals[i - 1] <= v));
  check("Wario's last Material appearance is within the campaign present",
        run[run.length - 1].key.y <= (currentDate.year || 1040) + 12,
        String(run[run.length - 1].key.y));
}

console.log('\n-- rendered output');
const html = api.appearancePanel(wario, 'characters');
check('panel renders for a character', html.includes('appear-panel'));
check('panel names both ends', html.includes('First seen in') && html.includes('Last seen in'));
check('no undefined/NaN leaks into the markup', !/undefined|NaN/.test(html));
check('panel is empty for types that do not get one', api.appearancePanel(wario, 'locations') === '');
const lone = { id: '__t', keyEvents: [events.find(e => api.eventTimeKey(e)).id] };
check('a single appearance reads "Only appearance"',
      api.appearancePanel(lone, 'characters').includes('Only appearance'));

let covered = 0;
for (const c of chars) if (api.appearancePanel(c, 'characters')) covered++;
check('the panel covers most of the cast', covered >= 150, `${covered}/${chars.length}`);

console.log('\n-- metabar field split');
const META_PILL_MAX = 72;
const metaBody = [grab('metaLead'), grab('splitMetaFields')].join('\n');
const INFOBOX = {
  events:[['title','Title'],['date','Date'],['era','Era'],['type','Type'],
          ['location','Location'],['status','Status'],['outcome','Outcome']],
  characters:[['title','Title'],['race','Race'],['status','Status'],['affiliation','Affiliation']],
};
const META_LEAD_FIELDS = {date:1,era:1,location:1,type:1,result:1,jurisdiction:1};
const meta = new Function('INFOBOX','esc','META_PILL_MAX','META_LEAD_FIELDS',
  metaBody + ';return splitMetaFields;')(INFOBOX, esc, META_PILL_MAX, META_LEAD_FIELDS);

const longEvent = events.find(e => String(e.outcome || '').length > 400);
check('the archive still has an event with a very long outcome', !!longEvent,
      'nothing to guard against');
if (longEvent) {
  const { metaPills, metaFacts } = meta(longEvent, 'events');
  check('a long outcome never becomes a pill', !metaPills.includes('Outcome'));
  check('the long outcome is still shown, as a row', metaFacts.includes('Outcome'));
  const unesc = t => String(t).replace(/&amp;/g,'&').replace(/&lt;/g,'<')
    .replace(/&gt;/g,'>').replace(/&quot;/g,'"');
  const pillTexts = [...metaPills.matchAll(/<\/strong>\s*([^<]*)/g)].map(m => unesc(m[1].trim()));
  check('every pill body is short enough to scan',
        pillTexts.every(t => t.length <= META_PILL_MAX + 1),
        String(pillTexts.filter(t => t.length > META_PILL_MAX + 1)));
  check('title is not duplicated into the pill bar', !metaPills.includes('>Title<'));
  if (longEvent.date && longEvent.date.length > META_PILL_MAX) {
    check('a long date still gets a short scannable pill', metaPills.includes('Date'));
    check('and keeps its full text in a row', metaFacts.includes('Date'));
  }
}
const shortChar = chars.find(c => c.race && c.race.length < 40);
if (shortChar) {
  const { metaPills } = meta(shortChar, 'characters');
  check('short scalar fields stay as pills', metaPills.includes('Race'));
}
// Measured on VISIBLE text: "&" is stored as "&amp;" in the markup, which is
// 4 characters wider than what a reader sees.
const unescAll = t => String(t).replace(/&amp;/g,'&').replace(/&lt;/g,'<')
  .replace(/&gt;/g,'>').replace(/&quot;/g,'"');
const oversized = [];
for (const e of events) {
  for (const m of meta(e, 'events').metaPills.matchAll(/<strong>([^<]+)<\/strong>\s*([^<]*)/g)) {
    const seen = unescAll(m[2].trim());
    if (seen.length > META_PILL_MAX + 1) oversized.push(`${e.id}:${m[1]}=${seen.length}`);
  }
}
check('no event produces an oversized pill anywhere in the archive',
      oversized.length === 0, oversized.join(', '));

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
