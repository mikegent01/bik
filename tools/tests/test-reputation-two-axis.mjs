// Verify the two-axis reputation engine: a faction that wants you dead can no
// longer read as Warm, and record-level `effects` are no longer sprayed onto
// every participant as if they were personal deltas.
//
//   python3 -m http.server 8765 &   # from the repo root
//   node tools/tests/test-reputation-two-axis.mjs
import { JSDOM, VirtualConsole } from 'jsdom';

const BASE = process.env.BASE || 'http://127.0.0.1:8765/';
const vc = new VirtualConsole();
const errors = [];
vc.on('jsdomError', (e) => {
  const m = e.detail ? (e.detail.stack || e.detail.message) : e.message;
  if (/chart\.js|Could not parse CSS|scrollTo|Could not load script|IntersectionObserver|dynamic import callback/i.test(m)) return;
  errors.push('jsdomError: ' + m);
});
vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ').slice(0, 300)));

const indexHtml = await (await fetch(BASE + 'index.html')).text();
const dom = new JSDOM(indexHtml, {
  url: BASE + 'index.html', runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc,
  beforeParse(w) {
    w.fetch = (i, o) => fetch((typeof i === 'string' ? i : i.url).startsWith('http') ? i : new URL(i, BASE).href, o);
    w.scrollTo = () => {};
    w.IntersectionObserver = class { observe(){} unobserve(){} disconnect(){} };
  },
});
const { window } = dom;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const ev = (c) => { try { return window.eval(c); } catch (e) { return '__ERR ' + e.message; } };
await sleep(12000);
process.on('unhandledRejection', (e) => { if (String(e && e.code) === 'ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING') return; throw e; });

const fail = [], ok = [];
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));

check('page booted clean', errors.length === 0, errors.slice(0, 2).join(' | '));
check('engine present', ev("typeof calculateOperatorStanding==='function' && typeof calculateOperatorPressure==='function' && typeof _recordDeltaSources==='function'") === true);

// --- the reported defect -----------------------------------------------------
const ironFists = ev("JSON.stringify((()=>{const s=calculateOperatorStanding('archie_miser','iron_fists');return {t:s.total,l:s.label,p:s.pressure.score,pb:s.pressure.band,cap:s.cappedFrom,sum:s.summary};})())");
const IF = JSON.parse(ironFists);
check('Iron Fists no longer read as Warm/positive toward Archie', IF.t <= -20, `total ${IF.t} · ${IF.l}`);
check('Iron Fists hostility was actually detected (cap applied)', IF.cap !== null && IF.cap !== undefined, `uncapped was ${IF.cap}`);
check('Iron Fists pressure is high, not standing', IF.p >= 25, `pressure ${IF.p} · ${IF.pb}`);
check('Iron Fists relationship reads as a hunt', /hunting|against them/i.test(IF.sum), IF.sum);

// House Corvinarus is NOT fixed by the engine, and this test records why.
// Their two scored records for Archie are +20 and +15 in the source data — the
// larger being "The Bullet That Broke the Shadowfell", i.e. shooting their lord.
// That is root cause #1 (notoriety authored as approval) living in the DATA, not
// the engine. Pressure correctly reports the relationship as heavy; standing
// cannot honestly go negative until those records are re-scored. Tracked as a
// known data defect rather than papered over with a rule that invents hostility.
const corv = ev("JSON.stringify((()=>{const s=calculateOperatorStanding('archie_miser','corvinarus_family');return {t:s.total,l:s.label,p:s.pressure.score,cap:s.cappedFrom};})())");
const CV = JSON.parse(corv);
check('House Corvinarus registers as a heavy relationship (pressure)', CV.p >= 50, `pressure ${CV.p}`);
check('KNOWN DATA DEFECT: Corvinarus standing is positive because the data says so', CV.t > 0,
  `total ${CV.t} — source records score +20/+15 toward Archie; needs an editorial re-score, not an engine rule`);

// The over-correction regression: factions that LIKE Archie must not be capped.
const friendlies = ev(`JSON.stringify(['ratchet_raiders','the_unchained','cosmic_jesters'].map(f=>{const s=calculateOperatorStanding('archie_miser',f);return [f,s.total,s.cappedFrom];}))`);
const FR = JSON.parse(friendlies);
check('factions that like Archie are not capped by mere bloc rivalry',
  FR.every(([f,t,c]) => t > 0 && c == null), JSON.stringify(FR));

// --- pressure axis invariants ------------------------------------------------
check('pressure is never negative', ev(`(()=>{let bad=0;REPUTATION_OPERATORS.forEach(o=>Object.keys(LORE_FACTIONS).forEach(f=>{const p=calculateOperatorStanding(o.id,f).pressure.score;if(p<0||p>100)bad++;}));return bad;})()`) === 0);
check('standing stays within -100..100', ev(`(()=>{let bad=0;REPUTATION_OPERATORS.forEach(o=>Object.keys(LORE_FACTIONS).forEach(f=>{const t=calculateOperatorStanding(o.id,f).total;if(t<-100||t>100)bad++;}));return bad;})()`) === 0);

// The core guarantee: no declared-hostile pair may present as friendly.
const violations = ev(`(()=>{const out=[];REPUTATION_OPERATORS.forEach(o=>Object.keys(LORE_FACTIONS).forEach(f=>{const s=calculateOperatorStanding(o.id,f);if(s.pressure.hostile&&s.total>-20)out.push(o.id+'/'+f+'='+s.total);}));return out.join(', ');})()`);
check('NO directly-hostile faction presents as better than Cold', violations === '', violations.slice(0, 200));
// Capping must stay rare and evidence-based, not a blanket sweep.
const capCount = ev(`(()=>{let n=0;REPUTATION_OPERATORS.forEach(o=>Object.keys(LORE_FACTIONS).forEach(f=>{if(calculateOperatorStanding(o.id,f).cappedFrom!=null)n++;}));return n;})()`);
check('hostility cap is applied sparingly', capCount > 0 && capCount < 20, `${capCount} of 1024 pairs capped`);

// --- the effects-spray bug ---------------------------------------------------
// crown_v_miser_4739 has effects:{iron_fists:-15}. Under the old engine that was
// copied verbatim onto every participant. Now it is a weighted shared signal and
// must never override an authored personal delta.
const spray = ev(`(()=>{const r=(DATA.trials||[]).find(x=>x.id==='crown_v_miser_4739');if(!r)return 'no record';const d=_recordDeltaSources(r);return JSON.stringify({perOpArchie:d.perOp.archie_miser&&d.perOp.archie_miser.iron_fists,recLevel:d.recordLevel.iron_fists,appliedArchie:d.deltas.archie_miser&&d.deltas.archie_miser.iron_fists});})()`);
const SP = JSON.parse(spray);
check('record-level effects are parsed separately from per-operator deltas', SP.recLevel === -15, 'recordLevel ' + SP.recLevel);
check('an authored personal delta is not overwritten by the record-level one', SP.appliedArchie === SP.perOpArchie, `applied ${SP.appliedArchie} vs authored ${SP.perOpArchie}`);
// Somewhere in the corpus a record must carry a faction-level outcome and reach
// a participant it did not score personally — otherwise `effects` is dead data.
check('record-level effects still reach un-scored participants somewhere in the corpus',
  ev(`(()=>{let n=0;['events','battles','majorBattles','trials'].forEach(k=>(DATA[k]||[]).forEach(r=>{const d=_recordDeltaSources(r);if(!Object.keys(d.recordLevel).length)return;if(Object.keys(d.deltas).some(op=>!d.perOp[op]))n++;}));return n;})()`) > 0);
// ...and that shared signal must be weaker than an authored personal delta.
check('shared record-level signal is damped, not applied at full strength',
  ev("EFFECTS_SHARED_WEIGHT > 0 && EFFECTS_SHARED_WEIGHT < 1") === true);

// --- UI reflects the engine --------------------------------------------------
ev("currentRepTab='player'; currentRepSelectedOp='archie_miser';");
ev("Router.go('#/reputation')"); await sleep(800);
ev("currentRepTab='player'; currentRepSelectedOp='archie_miser'; view_reputation();"); await sleep(800);
const html = window.document.getElementById('content').innerHTML;
const text = window.document.getElementById('content').textContent.replace(/\s+/g, ' ');
check('operator standings view renders', text.length > 3000, text.length + ' chars');
check('pressure badge is shown in the UI', /rep-pressure-badge/.test(html));
// The wall-of-zeroes complaint: no-contact factions collapse into one roster.
check('factions with no relationship are collapsed, not listed as +0 cards', /rep-dormant/.test(html));
check('collapsed roster actually removes most of the noise',
  ev(`(()=>{let d=0;Object.keys(LORE_FACTIONS).forEach(f=>{const s=calculateOperatorStanding('archie_miser',f);
   if(s.total===0&&!(s.contributions||[]).length&&!s.pressure.score)d++;});return d;})()`) > 50);
// The Purple Legion description is 12,595 chars. Its opening words legitimately
// survive truncation, so assert on LENGTH: no single card may carry an essay.
check('faction essays are truncated in cards, not dumped whole',
  ev(`(()=>{const els=[...document.querySelectorAll('.rep-fc-desc')];
    const worst=Math.max(0,...els.map(e=>e.textContent.length));return worst;})()`) < 300);
check('the standings page is no longer a wall of text',
  text.length < 60000, `${text.length} chars (was ~266,000)`);
check('the hostility cap is disclosed, not silent', /hostility ceiling|Capped/.test(text));
check('UI no longer prints "+35 · Warm" for the Iron Fists', !/\+35 · Warm/.test(text));

console.log('--- PASS ---'); ok.forEach((l) => console.log('  ok   ' + l));
if (fail.length) { console.log('--- FAIL ---'); fail.forEach((l) => console.log('  FAIL ' + l)); }
console.log(`\n${fail.length ? 'FAILED' : 'ALL PASS'} (${ok.length} passed, ${fail.length} failed)`);
dom.window.close();
process.exit(fail.length ? 1 : 0);
