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

console.log('\n-- running deadlines');
const calMeta = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'calendarMeta.json'), 'utf8'));
const deadlines = Array.isArray(calMeta.deadlines) ? calMeta.deadlines : [];
check('calendarMeta declares at least one deadline', deadlines.length > 0);
for (const d of deadlines) {
  check(`${d.id}: has a length in days`, Number(d.lengthDays) > 0);
  check(`${d.id}: names the consequence of hitting zero`, !!d.consequence);
  check(`${d.id}: declares which clock it runs on`, !!d.clock);
  check(`${d.id}: stores no elapsed counter (remaining must be derived)`,
        !('elapsedDays' in d), 'elapsedDays is stored and will drift');
  if (d.startedBy) {
    check(`${d.id}: the session that started it is a real event`,
          events.some(e => e.id === d.startedBy), d.startedBy);
  }
}

// The countdown is DERIVED from the newest filing on the deadline's own clock,
// so it has to fall by itself as sessions are filed. These build synthetic
// event lists to prove that, rather than trusting a stored number.
const dlCode = ['deadlineDayNumber','tcDayNumber','newestOnClock','deadlineRemaining',
                'pad2','deadlinePanel','deadlineBannerHtml'].map(grab).join('\n');
const mkDl = (evs, meta) => new Function('DATA','INDEX','esc','displayName','Router',
  [grab('parseTimeCode'), dlCode].join('\n') +
  ';return {deadlineRemaining,deadlinePanel,deadlineBannerHtml,newestOnClock};'
)({events: evs, calendarMeta: meta === undefined ? calMeta : meta},
  INDEX, esc, displayName, {go(){}});

if (deadlines.length) {
  const dl = deadlines[0];
  const api0 = mkDl(events);
  const r0 = api0.deadlineRemaining(dl);
  check('remaining is anchored to a real filing on its own clock',
        !!r0.anchor && String(r0.anchor.timeCode || '').endsWith('/' + dl.clock),
        String(r0.anchor && r0.anchor.timeCode));
  // Time has already passed inside the session that started the timer, so the
  // clock must NOT read the full term — that was the bug. It should sit at or
  // below the term, and above zero while the term is live.
  const fullTermHours = Number(dl.lengthDays) * 24;
  check('the countdown has already begun to burn (never reads the full term)',
        r0.hh < fullTermHours, `${r0.hh}h of ${fullTermHours}h`);
  check('but it has not overrun the term either',
        r0.hh > 0 && r0.hh <= fullTermHours, `${r0.hh}h`);

  const bump = tc => mkDl(events.concat([{id:'__sim', timeCode: tc}])).deadlineRemaining(dl);
  check('filing a later session on the clock reduces the remaining time',
        bump('TC:0922-09-13/FEY').leftMin < r0.leftMin);
  check('hours honour the in-world hour, not just the day',
        bump('TC:0922-09-04T06:00/FEY').leftMin < bump('TC:0922-09-04T00:00/FEY').leftMin);
  // The term ends lengthDays after startedOn — including its HOUR, which is not
  // midnight. Compute the end instead of hardcoding a date, so moving the start
  // time (as the record is refined) does not falsely fail this.
  const st = dl.startedOn || {};
  const endDay = (Number(st.day) || 0) + Number(dl.lengthDays);
  const pad = n => String(n).padStart(2, '0');
  const endTc = `TC:0${st.year}-${pad(Number(st.monthIndex) + 1)}-${pad(endDay)}`
              + `T${pad(Number(st.hour) || 0)}:${pad(Number(st.minute) || 0)}/${dl.clock}`;
  const atTerm = bump(endTc);
  check('the countdown reaches zero exactly at the end of the term',
        atTerm.leftMin === 0 && atTerm.expired, endTc);
  const justBefore = bump(`TC:0${st.year}-${pad(Number(st.monthIndex) + 1)}-${pad(endDay - 1)}`
                        + `T${pad(Number(st.hour) || 0)}:${pad(Number(st.minute) || 0)}/${dl.clock}`);
  check('one day before the end it still has exactly a day left',
        justBefore.leftMin === 1440, String(justBefore.leftMin));
  check('it never goes negative past the term',
        bump(`TC:0${st.year}-${pad(Number(st.monthIndex) + 1)}-${pad(endDay + 4)}/${dl.clock}`).leftMin === 0);
  check('a session on a DIFFERENT clock does not move this countdown',
        bump('TC:1040-09-20/SHD').leftMin === r0.leftMin);

  const dlHtml = api0.deadlinePanel();
  check('deadline panel renders when a deadline exists', dlHtml.includes('dline'));
  check('deadline panel shows an hours:minutes:seconds clock',
        (dlHtml.match(/dline-seg/g) || []).length >= 3);
  check('deadline panel leaks no undefined/NaN', !/undefined|NaN/.test(dlHtml));
  const banner = api0.deadlineBannerHtml();
  check('home banner renders the countdown prominently', banner.includes('dline-banner'));
  check('home banner leaks no undefined/NaN', !/undefined|NaN/.test(banner));
  check('deadline panel is empty when nothing is running',
        mkDl(events, {}).deadlinePanel() === '');
}

console.log('\n-- commentary track');
const commDoc = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'commentaries.json'), 'utf8'));
const comms = commDoc.commentaries || [];
const evIds = new Set(events.map(e => e.id));
check('every commentary points at a real filing',
      comms.every(c => evIds.has(c.sourceArticle) || !c.sourceArticle),
      String(comms.filter(c => c.sourceArticle && !evIds.has(c.sourceArticle)).map(c => c.id)));
// A commentary is owed for the newest filing, but it is a separate writing
// job that can legitimately land a commit later — so this reports rather than
// fails. What must never break is a cut pointing at a filing that does not
// exist, which is asserted below.
const newest = events[events.length - 1];
if (!comms.some(c => c.sourceArticle === newest.id)) {
  console.log(`  note the newest filing has no commentary track yet: ${newest.id}`);
} else {
  check('the newest filing has a commentary track', true);
}

// A commentary that cross-references other filings is only worth anything if
// the references resolve. Every inline #/article/<id> link in every cut is
// checked against the real id set — a dead link in a cross-reference is worse
// than no cross-reference, because it looks like corroboration and isn't.
const allIds = new Set();
for (const f of ['events','battles','characters','locations','factions','nations','races','trials','cultures']) {
  const p = path.join(DATA_DIR, f + '.json');
  if (!fs.existsSync(p)) continue;
  const rows = JSON.parse(fs.readFileSync(p, 'utf8'));
  (Array.isArray(rows) ? rows : []).forEach(r => { if (r && r.id) allIds.add(r.id); });
}
const deadLinks = [];
for (const c of comms) {
  const body = (c.sections || []).map(x => x.body || '').join(' ');
  for (const m of body.matchAll(/#\/article\/([a-z0-9_]+)\)/g)) {
    if (!allIds.has(m[1])) deadLinks.push(`${c.id} -> ${m[1]}`);
  }
  for (const rid of c.relatedArticles || []) {
    if (!allIds.has(rid)) deadLinks.push(`${c.id} relatedArticles -> ${rid}`);
  }
}
check('every cross-reference in every commentary resolves',
      deadLinks.length === 0, deadLinks.slice(0, 5).join(', '));

console.log('\n-- wanted pages');
// The wanted list is only actionable if it distinguishes "nobody wrote this"
// from "somebody typed the id wrong". These assert the classification exists
// and that the near-miss detector actually resolves to real records.
const wantedSrc = ['buildWantedPages'].map(grab).join('\n');
check('wanted pages classifies by referencing field',
      wantedSrc.includes('WANTED_FIELD_TYPE') || src.includes('WANTED_FIELD_TYPE'));
check('wanted pages flags near-miss ids separately', wantedSrc.includes('nearMiss'));
check('the wanted view groups instead of one flat table',
      grab('view_wanted').includes('wanted-group'));
check('the wanted view is reachable from the sidebar',
      src.includes("label:'Wanted Pages'"));

// Rebuild the near-miss detection here and assert every flagged target is real.
const normId = x => String(x).toLowerCase().replace(/[^a-z0-9]/g, '');
const realIds = new Set();
for (const f of ['events','battles','characters','locations','factions','nations','races','cultures','trials']) {
  const p = path.join(DATA_DIR, f + '.json');
  if (!fs.existsSync(p)) continue;
  const rows = JSON.parse(fs.readFileSync(p, 'utf8'));
  (Array.isArray(rows) ? rows : []).forEach(r => { if (r && r.id) realIds.add(r.id); });
}
const keyed = new Map();
for (const id of realIds) if (!keyed.has(normId(id))) keyed.set(normId(id), id);
const refFields = ['relatedArticles','keyEvents','keyBattles','articles','allies','enemies',
                   'members','notableMembers','participants','participatingCharacters'];
let dangling = 0, nearMisses = 0;
for (const f of ['events','characters','locations','factions']) {
  const p = path.join(DATA_DIR, f + '.json');
  if (!fs.existsSync(p)) continue;
  for (const rec of JSON.parse(fs.readFileSync(p, 'utf8'))) {
    if (!rec || !rec.id) continue;
    for (const fld of refFields) {
      for (const raw of (rec[fld] || [])) {
        const id = typeof raw === 'string' ? raw : (raw && raw.id);
        if (!id || typeof id !== 'string' || realIds.has(id)) continue;
        if (!/^[a-z0-9][a-z0-9_-]{2,}$/i.test(id)) continue;
        dangling++;
        if (keyed.has(normId(id))) nearMisses++;
      }
    }
  }
}
check('the archive still has dangling references to surface', dangling > 0, String(dangling));
// Inverted deliberately: the 28 near-misses were fixed, so the archive should
// now hold NO reference that merely misspells a record which exists. A typo
// left in the data inflates the wanted list and hides real gaps.
check('no dangling ref is just a misspelling of a real record',
      nearMisses === 0, `${nearMisses} left — run tools/fix-dangling-refs.py --write`);
check('near-miss targets all resolve to real records',
      [...keyed.values()].every(v => realIds.has(v)));

console.log('\n-- arc clocks');
// The Mount Ebott arc was briefly filed as /MAT, which maps to the Mario
// campaign on the home page. A clock suffix is not decoration — it decides
// which front an event takes, so a wrong one silently evicts another campaign.
const clockOf = ev => {
  const m = /\/([A-Z]+)$/.exec(String(ev.timeCode || ''));
  return m ? m[1] : null;
};
const KNOWN_CLOCKS = new Set(['MAT', 'SHD', 'FEY', 'KIV', 'EBO', 'SUBJ']);
const badClock = events.filter(e => e.timeCode && !KNOWN_CLOCKS.has(clockOf(e)));
check('every timeCode uses a registered clock', badClock.length === 0,
      badClock.map(e => e.id + ':' + clockOf(e)).join(', '));

// A clock has to be registered in all three places or it half-works: the
// renderer drops the pill, or the fronts builder cannot label the campaign.
for (const clock of ['KIV', 'EBO']) {
  check(`${clock} is registered in index.html`, src.includes(clock),
        'renderer will not parse it');
  const tc = fs.readFileSync(path.join(ROOT, 'tools', 'check-timecodes.py'), 'utf8');
  check(`${clock} is registered in check-timecodes.py`, tc.includes(clock));
  const cf = fs.readFileSync(path.join(ROOT, 'tools', 'build-campaign-fronts.py'), 'utf8');
  check(`${clock} is registered in build-campaign-fronts.py`, cf.includes(clock));
}

// Mount Ebott is its own arc and must never ride the Mario front again.
const ebott = events.filter(e => /ebott|snowdin/i.test(e.id) && e.timeCode);
check('no Mount Ebott filing is on the Mario clock',
      ebott.every(e => clockOf(e) !== 'MAT'),
      ebott.filter(e => clockOf(e) === 'MAT').map(e => e.id).join(', '));

console.log('\n-- discussion systems (one store, three views)');
// The site grew three comment surfaces and two of them were the same data:
// the Discussion drawer and the "From the margins" box both read
// annotations.json, so every passage comment rendered twice on one page.
// Annotations are now mirrored into the wire with a `quote` anchor, and the
// margins box shows only NON-anchored posts. These guard that split.
const wireStore = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'wahwire', 'posts.json'), 'utf8'));
const wirePosts = wireStore.posts || [];
const annStore = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'annotations.json'), 'utf8'));

const mirrored = wirePosts.filter(p => p.mirroredFrom === 'annotations.json');
const annWithComments = annStore.filter(a => (a.comments || []).length && a.articleId && a.quote);
check('every annotated passage is mirrored onto the wire',
      mirrored.length === annWithComments.length,
      `${mirrored.length} mirrored vs ${annWithComments.length} passages`);
check('every mirrored post carries a quote anchor',
      mirrored.every(p => p.quote && p.anchorArticle));
check('mirrored post ids are unique',
      new Set(mirrored.map(p => p.id)).size === mirrored.length);

// THE BUG: a margins entry whose text also appears in that article's drawer.
const byArticle = new Map();
for (const a of annStore) {
  if (!byArticle.has(a.articleId)) byArticle.set(a.articleId, new Set());
  (a.comments || []).forEach(c => byArticle.get(a.articleId).add(c.text));
}
let overlap = 0, worstArticle = '';
for (const [aid, drawerTexts] of byArticle) {
  const margins = wirePosts.filter(p =>
    !p.quote && (p.anchorArticle === aid || (p.links || []).some(l => l && l.id === aid)));
  const dupes = margins.filter(p => drawerTexts.has(p.content)).length;
  if (dupes > overlap) { overlap = dupes; worstArticle = aid; }
}
check('no passage comment is replayed in the margins box',
      overlap === 0, `${overlap} duplicated on ${worstArticle}`);

// The renderer must read the wire, not annotations, or the bug comes back.
check('wahNotesFor sources the wire rather than annotations.json',
      grab('wahNotesFor').includes('wahWirePostsFor'));
check('wahNotesFor excludes passage-anchored posts',
      /filter\(p\s*=>\s*!p\.quote\)/.test(grab('wahNotesFor')));

// Authored annotations remain the source of truth and must not be lost.
check('annotations.json is still the authored source',
      annStore.length > 0 && annStore.every(a => a.articleId && (a.comments || []).length >= 0));

// The merge is only finished if the surfaces stop LOOKING like three systems.
check('the drawer uses the wire portrait resolver, not a coloured initial',
      src.includes('wwAvatar(wwAuthor(c.authorId)'));
check('routed notes are labelled as standing remarks, not reactions to this filing',
      src.includes('wah-note-routed'));
check('the Chatter Hub redirects to the wire instead of being a rival feed',
      /route==='annotations'\|\|route==='chatter'\)Router\.go\('#\/wahwire'\)/.test(src));
check('the Chatter Hub sidebar link is gone', !src.includes("label:'Chatter Hub'"));

// A mirrored post with no `order` sinks to 999 and never appears in Recent.
check('every mirrored post carries a sort order',
      mirrored.every(p => typeof p.order === 'number'),
      String(mirrored.filter(p => typeof p.order !== 'number').length));
const feedOrder = [...wirePosts].sort((a, b) => Number(a.order || 999) - Number(b.order || 999));
check('mirrored posts are reachable in the Recent feed',
      feedOrder.slice(0, 90).some(p => p.mirroredFrom));

// Placeholder timestamps read as filing notes, not in-world dates.
const vagueTs = annStore.flatMap(a => (a.comments || [])
  .filter(c => /filed with|filed in response/i.test(c.timestamp || '')));
check('no placeholder timestamps remain in annotations', vagueTs.length === 0,
      String(vagueTs.length));

// The newest filings owe a native wire post, not just mirrored margin comments.
for (const id of events.slice(-2).map(e => e.id)) {
  const n = wirePosts.filter(p => !p.mirroredFrom &&
    (p.links || []).some(l => l && l.id === id)).length;
  check(`the recent filing ${id.slice(0, 34)} has a native wire post`, n > 0);
}

console.log('\n-- the reading desk');
// A daily rota that rewards reading with the art from what was read. It is a
// reader-local record, so the thing to guard is that it never touches canon
// and that its arithmetic cannot be gamed by re-reading one page.
const deskConsts = src.slice(src.indexOf('const DESK_KEY='), src.indexOf('function deskToday('));
const deskCode = [deskConsts, 'deskToday','deskLoad','deskSave','deskYesterday',
                  'deskPlateFor','readingDeskRecord'].map((n,i)=>i?grab(n):n).join('\n');
let deskStore = {};
const fakeLS = { getItem: k => deskStore[k] ?? null,
                 setItem: (k,v) => { deskStore[k] = String(v); },
                 removeItem: k => { delete deskStore[k]; } };
const deskIndex = {};
events.forEach(e => { if (e && e.id) deskIndex[e.id] = { typeKey: 'events', item: e }; });
// readingDeskRecord consults debugOn() to pause the rota; the desk harness
// runs with debug off, which is the normal-play path these tests cover.
const desk = new Function('localStorage','INDEX','displayName','deskToast','document','debugOn',
  deskCode + ';return {readingDeskRecord,deskLoad,DESK_DAILY_TARGET};'
)(fakeLS, deskIndex, o => o && (o.name || o.id), () => {},
  { createElement: () => ({ classList: { add(){} }, remove(){}, style:{} }), body: { appendChild(){} } },
  () => false);

const arted = events.filter(e => e.image).slice(-6).map(e => e.id);
check('the archive has illustrated filings to earn plates from', arted.length >= 4);

let st;
for (const id of arted.slice(0, desk.DESK_DAILY_TARGET)) st = desk.readingDeskRecord(id);
check('reading the daily target completes the day', st.daysComplete === 1, JSON.stringify(st.daysComplete));
check('completing a day starts a streak', st.streak === 1);
check('completing a day keeps plates from what was read', st.plates.length > 0);

const beforeTotal = st.totalRead;
st = desk.readingDeskRecord(arted[0]);
check('re-reading the same filing does not double-count', st.totalRead === beforeTotal,
      `${beforeTotal} -> ${st.totalRead}`);
check('plates are de-duplicated',
      new Set(st.plates.map(p => p.id)).size === st.plates.length);

// Consecutive day continues the streak; a gap resets it but keeps the best.
const bump = (lastComplete) => {
  const o = JSON.parse(deskStore['waluipedia-reading-desk-v1']);
  o.day = '1999-01-01'; o.readToday = []; o.lastComplete = lastComplete;
  deskStore['waluipedia-reading-desk-v1'] = JSON.stringify(o);
  let r; for (const id of arted.slice(0, desk.DESK_DAILY_TARGET)) r = desk.readingDeskRecord(id);
  return r;
};
const y = new Date(); y.setDate(y.getDate() - 1);
const ymd = d => d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
const day2 = bump(ymd(y));
check('a consecutive day increments the streak', day2.streak === 2, String(day2.streak));
const afterGap = bump('2000-01-01');
check('a gap resets the streak to 1', afterGap.streak === 1, String(afterGap.streak));
check('the best streak survives a reset', afterGap.best >= 2, String(afterGap.best));

check('the desk is reader-local and never written to canon',
      src.includes('DESK_KEY') && !src.includes("DESK_KEY,JSON.stringify(DATA"));
check('the reading desk route is registered',
      /route==='reading-desk'/.test(src));
check('the desk is reachable from the sidebar', src.includes("label:'Reading Desk'"));
check('reading an article stamps the desk', grab('dashNoteRead').includes('readingDeskRecord'));

console.log('\n-- skins & the pull system');
const skinConsts = src.slice(src.indexOf('const SKINS=['), src.indexOf('function skinRarityRoll('));
const gacha = new Function('localStorage','applySkin',
  [skinConsts, grab('skinRarityRoll'), grab('skinPull')].join('\n') +
  ';return {SKINS,SKIN_BY_ID,PULL_PITY,RARITY_ODDS,skinRarityRoll,skinPull};'
)({ getItem: () => null, setItem(){} }, () => {});

const cssSkins = fs.readFileSync(
  path.join(ROOT, 'Reputation-Matrix2', 'app', 'styles', 'waluipedia.css'), 'utf8');

check('there are skins to unlock', gacha.SKINS.length >= 6);
check('exactly one skin is free by default',
      gacha.SKINS.filter(s => s.free).length === 1);
// A skin with no CSS rule is a reward that does nothing when equipped.
const missingCss = gacha.SKINS.filter(s => s.id !== 'default' &&
  !cssSkins.includes(`html[data-skin="${s.id}"]`));
check('every skin has a CSS palette behind it', missingCss.length === 0,
      missingCss.map(s => s.id).join(', '));
const missingSwatch = gacha.SKINS.filter(s =>
  !cssSkins.includes(`[data-skin-preview="${s.id}"]`));
check('every skin has a preview swatch', missingSwatch.length === 0,
      missingSwatch.map(s => s.id).join(', '));

let pityOk = true;
for (let i = 0; i < 1000; i++) {
  if (gacha.skinRarityRoll(gacha.PULL_PITY - 1) < 4) { pityOk = false; break; }
}
check(`the ${gacha.PULL_PITY}th pull is guaranteed 4-star or better`, pityOk);

let owned = ['default'], pity = 0, pulls = 0;
while (owned.length < gacha.SKINS.length && pulls < 2000) {
  const r = gacha.skinPull(owned, pity);
  pulls++;
  pity = r.rarity >= 4 ? 0 : pity + 1;
  if (r.skin && !owned.includes(r.skin.id)) owned.push(r.skin.id);
}
check('every skin is reachable by pulling', owned.length === gacha.SKINS.length,
      `${owned.length}/${gacha.SKINS.length} after ${pulls} pulls`);

check('the desk exposes a debug unlock', src.includes('window.waluipediaDesk=') &&
      src.includes('unlockAll()'));
check('a saved skin is re-applied on load',
      src.includes('applySkin(localStorage.getItem(SKIN_KEY)'));
check('skins do not clobber the dark/light mode',
      grab('applySkin').includes("setAttribute('data-skin'") &&
      !grab('applySkin').includes("setAttribute('data-theme'"));
check('duplicate pulls refund their key', grab('deskPull').includes('o.keys+=1'));
check('the save code merges rather than overwrites',
      grab('deskImport').includes('Math.max') && grab('deskImport').includes('new Set'));
check('the desk still writes nothing to canon',
      !grab('deskPull').includes('DATA.') && !grab('deskImport').includes('DATA.'));

console.log('\n-- router: no shadowed routes');
// #/desk was already an alias for view_hub, so a later `route==='desk'` branch
// could never fire and the page rendered "Article not found". Any duplicated
// route token is dead code by definition — the first branch always wins.
// Only the dispatch chain counts. `route==='maps'` also appears in a CSS class
// toggle and in guards outside the router; those are not competing branches and
// flagging them would train everyone to ignore this check.
const dispatch = [...src.matchAll(/else if\(([^)]*route===[^)]*)\)/g)].map(m => m[1]);
const routeTokens = [...src.matchAll(/route===\s*'([a-z0-9-]+)'/g)].map(m => m[1]);
const seenRoute = new Map();
const shadowed = [];
dispatch.forEach((cond, i) => {
  [...cond.matchAll(/route===\s*'([a-z0-9-]+)'/g)].map(m => m[1]).forEach(t => {
    if (seenRoute.has(t)) { if (!shadowed.includes(t)) shadowed.push(t); }
    else seenRoute.set(t, i);
  });
});
check('no route token is declared twice', shadowed.length === 0,
      shadowed.join(', ') + ' — a later branch can never fire');

// Every in-page link must resolve to a route that exists.
const linked = [...src.matchAll(/Router\.go\('#\/([a-z0-9-]+)'/g)].map(m => m[1]);
const deadRoutes = [...new Set(linked)].filter(r => !routeTokens.includes(r) &&
  !['home','article','wahwire','wanted','power','atlas','xp','books','artifacts',
    'annotations','battlefield','cultures','maps','calendar','reputation'].includes(r));
check('every Router.go target has a route', deadRoutes.length === 0, deadRoutes.join(', '));

console.log('\n-- debug mode');
const dbgConsts = src.slice(src.indexOf('const DEBUG_KEY='), src.indexOf('function debugOn('));
let dbgStore = {};
const dbgLS = { getItem: k => dbgStore[k] ?? null,
                setItem: (k,v) => { dbgStore[k] = String(v); },
                removeItem: k => { delete dbgStore[k]; } };
const dbgDoc = { documentElement: { classList: { toggle(){}, add(){} } },
                 createElement: () => ({ classList:{add(){}}, remove(){}, style:{} }),
                 body: { appendChild(){} } };
const dbg = new Function('localStorage','INDEX','displayName','deskToast','document',
  'applySkin','deskFlash','deskShowPulls','view_desk','location',
  [skinConsts, grab('skinRarityRoll'), grab('skinPull'), dbgConsts, grab('debugOn'),
   grab('setDebug'), deskConsts, grab('deskToday'), grab('deskLoad'), grab('deskSave'),
   grab('deskYesterday'), grab('deskPlateFor'), grab('readingDeskRecord'),
   grab('deskPull')].join('\n') +
  ';return {debugOn,setDebug,readingDeskRecord,deskPull,deskLoad,SKINS};'
)(dbgLS, deskIndex, o => o && (o.name || o.id), () => {}, dbgDoc,
  () => {}, () => {}, () => {}, () => {}, { hash: '' });

check('debug mode is off by default', dbg.debugOn() === false);

const dbgArted = events.filter(e => e.image).map(e => e.id);
for (const id of dbgArted.slice(0, 3)) dbg.readingDeskRecord(id);
const normal = dbg.deskLoad();
check('the rota advances with debug off', normal.streak === 1 && normal.keys === 1);

dbg.setDebug(true);
const unlocked = dbg.deskLoad();
check('debug unlocks every skin',
      unlocked.owned.length === dbg.SKINS.length,
      `${unlocked.owned.length}/${dbg.SKINS.length}`);

for (const id of dbgArted.slice(3, 9)) dbg.readingDeskRecord(id);
const paused = dbg.deskLoad();
check('debug pauses the daily rota',
      paused.streak === normal.streak && paused.keys === normal.keys,
      `streak ${paused.streak}, keys ${paused.keys}`);

const keysBefore = paused.keys;
dbg.deskPull(5);
const afterPull = dbg.deskLoad();
// A free pull that hits a duplicate must not refund, or debug mints currency.
check('debug pulls are free and never mint keys',
      afterPull.keys === keysBefore, `${keysBefore} -> ${afterPull.keys}`);

dbg.setDebug(false);
check('debug can be switched back off', dbg.debugOn() === false);

check('the settings page exposes the switch',
      src.includes('🛠️ Developer') && src.includes('onclick="toggleDebug()"'));
check('debug writes nothing to canon',
      !grab('setDebug').includes('DATA.') && !grab('toggleDebug').includes('DATA.'));
check('debug still grants no XP',
      !grab('setDebug').includes('xp') && !grab('setDebug').includes('XP'));

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
