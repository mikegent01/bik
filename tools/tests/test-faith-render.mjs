// Verify the faith system renders: the faith index, a faith page, the per-article
// faith panel, computed doctrinal friction, and the alternating lead-art rotator.
//
//   python3 -m http.server 8765 &   # from the repo root
//   node tools/tests/test-faith-render.mjs
//
// jsdom cannot resolve the app's dynamic import() calls, so this harness imports
// religion-data.js itself and assigns it the way the browser's loadReligionSystem()
// would, then rebuilds the indexes. Everything after that is the real app code.
import { JSDOM, VirtualConsole } from 'jsdom';

const BASE = process.env.BASE || 'http://127.0.0.1:8765/';

const vc = new VirtualConsole();
const errors = [];
vc.on('jsdomError', (e) => {
  const m = e.detail ? (e.detail.stack || e.detail.message) : e.message;
  // Known jsdom limitations, not app faults.
  if (/chart\.js|Could not parse CSS|scrollTo|Could not load script|IntersectionObserver|dynamic import callback/i.test(m)) return;
  errors.push('jsdomError: ' + m);
});
vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ').slice(0, 300)));

const indexHtml = await (await fetch(BASE + 'index.html')).text();
// Node's ESM loader will not fetch over http, so read the module from disk.
const RELIGION_URL = new URL('../../Reputation-Matrix2/data/support/religion-data.js', import.meta.url);
const { RELIGION_DATA } = await import(RELIGION_URL.href);

const dom = new JSDOM(indexHtml, {
  url: BASE + 'index.html',
  runScripts: 'dangerously',
  pretendToBeVisual: true,
  virtualConsole: vc,
  beforeParse(window) {
    window.fetch = (input, init) => {
      const u = typeof input === 'string' ? input : input.url;
      return fetch(u.startsWith('http') ? u : new URL(u, BASE).href, init);
    };
    window.scrollTo = () => {};
    window.IntersectionObserver = class { observe(){} unobserve(){} disconnect(){} };
  },
});
const { window } = dom;
const D = window.document;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const ev = (code) => { try { return window.eval(code); } catch (e) { return '__ERR ' + e.message; } };
await sleep(12000);

// jsdom's vm has no dynamic-import callback, so the faction power panel (which
// import()s global-map-analysis.js) rejects and would kill the process. That is a
// harness limitation, not an app fault: neuter it and keep the rest of the app real.
process.on('unhandledRejection', (e) => {
  if (String(e && e.code) === 'ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING') return;
  throw e;
});
window.eval('renderFactionPowerProjection = async function(){};');

// Stand in for the dynamic import jsdom cannot perform.
window.eval('(function(m){ RELIGION = m; buildIndexes(); })')(RELIGION_DATA);

const fail = [], ok = [];
const check = (label, cond, extra = '') =>
  (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));

const go = async (hash) => { ev("Router.go('#/home')"); await sleep(150); ev(`Router.go(${JSON.stringify(hash)})`); await sleep(700); return D.getElementById('content'); };

check('page booted with no real js errors', errors.length === 0, errors.slice(0, 2).join(' | '));
check('religion register loaded', Object.keys(RELIGION_DATA.denominations).length >= 50,
  Object.keys(RELIGION_DATA.denominations).length + ' denominations');
check('faith helpers exist', ev("typeof faithPanel==='function' && typeof faithTension==='function'") === true);
check('faiths are in the search index', ev("SEARCH_DOCS.filter(d=>d.kind==='faith').length") >= 50,
  String(ev("SEARCH_DOCS.filter(d=>d.kind==='faith').length")));
check('faiths are in the auto-link registry', ev("Object.values(LINK_PREVIEW).filter(p=>p.kind==='faith').length") >= 50,
  String(ev("Object.values(LINK_PREVIEW).filter(p=>p.kind==='faith').length")));

// --- faith index -----------------------------------------------------------
let c = await go('#/faiths');
check('#/faiths renders', /Faiths & Doctrinal Tension/.test(c.textContent), c.textContent.length + ' chars');
check('#/faiths lists every denomination', c.querySelectorAll('.faith-card').length >= 50,
  c.querySelectorAll('.faith-card').length + ' cards');
check('#/faiths draws the compatibility matrix', c.querySelectorAll('table tr').length === 5,
  c.querySelectorAll('table tr').length + ' rows');

// --- a single faith --------------------------------------------------------
c = await go('#/faith/silver_flame_faith');
check('#/faith/<id> renders the faith', /The Silver Flame/.test(c.querySelector('h1').textContent));
check('faith page shows the standing edict', /Edict of Purification/.test(c.textContent));
check('faith page lists the records that declare it', /Vellanet Rise/.test(c.textContent));

// --- per-article faith panels + computed friction --------------------------
const cases = [
  ['#/article/vellanet_rise', 2, 'Doctrinal friction 25/100 — Minor Friction'],
  ['#/article/miser_family', 2, 'Doctrinal friction 25/100 — Minor Friction'],
  ['#/article/jack_melvus_miser', 2, 'Doctrinal friction 0/100 — Harmonious Integration'],
  ['#/article/order_of_jack', 1, null],
];
for (const [hash, cards, tension] of cases) {
  c = await go(hash);
  const txt = c.textContent.replace(/\s+/g, ' ');
  check(hash + ' renders', !/Article not found/.test(txt), txt.length + ' chars');
  check(hash + ' declares ' + cards + ' faith(s)', c.querySelectorAll('.faith-card').length === cards,
    c.querySelectorAll('.faith-card').length + ' cards');
  if (tension) check(hash + ' friction is computed, not asserted', txt.includes(tension), tension);
  else check(hash + ' single faith shows no friction block', !c.querySelector('.faith-tension'));
}

// The friction numbers on the page must equal the register's own matrix.
check('25 is what the register actually says (celestial vs primal)',
  RELIGION_DATA.compatibility_matrix.celestial_order.primal_forces === 25);

// --- alternating lead art --------------------------------------------------
c = await go('#/article/vellanet_rise');
const fig = c.querySelector('.lead-rotator');
check('vellanet_rise has a lead rotator', !!fig);
check('rotator has 2 frames and 2 dots',
  fig && fig.querySelectorAll('.lead-frame').length === 2 && fig.querySelectorAll('.lead-dot').length === 2);
const frame0 = fig && fig.querySelector('.lead-frame.on').getAttribute('src');
check('frame 0 is the canon plate, not the alternate',
  /assets\/illustrations\/vellanet_rise\.png$/.test(frame0 || ''), String(frame0));
ev(`leadRotate('${fig.id}',1)`);
const frame1 = D.querySelector('.lead-frame.on').getAttribute('src');
check('next frame is the alternate render', /portraits\/alternates\//.test(frame1), String(frame1));
check('caption follows the frame', /costume study/.test(D.querySelector('.lead-cap').textContent));
ev(`leadRotate('${fig.id}',1)`);
check('rotator wraps back to the canon plate',
  D.querySelector('.lead-frame.on').getAttribute('src') === frame0);

c = await go('#/article/jack_melvus_miser');
check('jack still leads with the hand-drawn crop',
  /portraits\/jack_melvus_miser\.png$/.test(c.querySelector('.lead-frame.on').getAttribute('src')));

// --- bespoke faith notes across the character roster ----------------------
// The panel prefers `note` over the denomination's generic description, so a
// declaration without prose is worse than no declaration at all.
{
  const chars = await (await fetch(BASE + 'Reputation-Matrix2/data/characters.json')).json();
  const declared = chars.filter((x) => (x.faiths || []).length);
  const EXCLUDED = ['archie_miser', 'markop', 'hjumpik', 'remi_akamatsu_full_backstory'];
  const entries = declared.flatMap((x) => (x.faiths || []).map((f) => ({ who: x.id, ...f })));
  const denoms = RELIGION_DATA.denominations;

  check('at least 50 characters declare a faith', declared.length >= 50, declared.length + ' characters');
  check('the Disaster Inc. principals are left alone',
    EXCLUDED.every((id) => !(chars.find((x) => x.id === id) || {}).faiths),
    EXCLUDED.filter((id) => (chars.find((x) => x.id === id) || {}).faiths).join(', ') || 'all four clean');
  check('every declared faith id resolves in the register',
    entries.every((e) => denoms[e.id]),
    entries.filter((e) => !denoms[e.id]).map((e) => e.who + '/' + e.id).join(', ') || 'all resolve');
  check('every declaration carries a role and a note',
    entries.every((e) => e.role && e.note && e.note.length > 120),
    entries.filter((e) => !(e.role && e.note && e.note.length > 120)).map((e) => e.who).join(', ') || 'all present');
  check('no note is a copy of the denomination boilerplate',
    entries.every((e) => e.note.trim() !== (denoms[e.id].description || '').trim()));
  check('notes are bespoke, not reused between records',
    new Set(entries.map((e) => e.note)).size === entries.length,
    new Set(entries.map((e) => e.note)).size + ' unique / ' + entries.length);

  // Spot-render three of the new records rather than trusting the data alone.
  for (const id of ['thornbury', 'general_ironhand', 'quantity']) {
    const el = await go('#/article/' + id);
    const card = el.querySelector('.faith-panel .faith-card');
    const rec = chars.find((x) => x.id === id);
    check('#/article/' + id + ' renders its custom faith note',
      !!card && card.textContent.includes(rec.faiths[0].note.slice(0, 40)),
      card ? card.querySelector('.faith-name a').textContent : 'no panel');
  }
}

console.log('--- PASS ---');
ok.forEach((l) => console.log('  ok   ' + l));
if (fail.length) { console.log('--- FAIL ---'); fail.forEach((l) => console.log('  FAIL ' + l)); }
console.log(`\n${fail.length ? 'FAILED' : 'ALL PASS'} (${ok.length} passed, ${fail.length} failed)`);
process.exit(fail.length ? 1 : 0);
