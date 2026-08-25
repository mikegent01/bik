// Render test for the Battalion of Six filing.
//
//   node tools/tests/test-feyward-battalion-render.mjs
//
// Boots the real index.html in jsdom (Node's fetch injected — jsdom has none),
// drives the real Router to #/article/<id>, and asserts the filing rendered:
// all 15 sections, asides, Waluigi's Notes, prop triggers, XP rows, and that
// each exhibit's paper opens through openProp().
//
// Two things about this page that will bite you:
//   · the app declares `const Router` at script top level, so it lives in the
//     global lexical scope but is NOT a window property — reach it via window.eval
//   · body.innerHTML contains <script> source, whose comments legitimately
//     mention [[prop: and [[roll: — so scope assertions to the view container
import { JSDOM, VirtualConsole } from 'jsdom';

const BASE = process.env.BASE || 'http://127.0.0.1:8765/';
const EVENT_ID = 'feyward_battalion_of_six_and_the_bait_plan';

const SECTIONS = [
  "Who Needs the Most Directive", "The Dwarf Way", "Guard the Window", "The Door Full of Thirst",
  "With My Brawn and Your Brains", "Technically", "Randall, Brad, Timmy, Hank, Wyatt",
  "First Order — The Leaves", "Your Job Isn't Over", "Above Our Paygrade",
  "Toad Lee and Wyatt Hold the Line", "A Glass of Wine, a Roast Chestnut", "Order of the Revel",
  "Stretched Thin", "The Bait",
];
const PROPS = [
  'prop_feyward_sixth_detachment_commission',
  'prop_revel_evacuation_order',
  'prop_wahbook_command_dispute',
];

const vc = new VirtualConsole();
const errors = [];
vc.on('jsdomError', (e) => {
  const m = e.detail ? (e.detail.stack || e.detail.message) : e.message;
  if (/chart\.js|Could not parse CSS|scrollTo|Could not load script/.test(m)) return;
  errors.push('jsdomError: ' + m);
});
vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ').slice(0, 300)));

const indexHtml = await (await fetch(BASE + 'index.html')).text();
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
  },
});
const { window } = dom;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const ev = (code) => { try { return window.eval(code); } catch (e) { return '__ERR ' + e.message; } };
await sleep(12000);

const fail = [], ok = [];
const check = (label, cond, extra = '') =>
  (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));

check('page booted with no real js errors', errors.length === 0, errors.slice(0, 2).join(' | '));
check('app data loaded', ev("typeof DATA!=='undefined' && Object.keys(DATA).length>10"),
  ev("typeof DATA==='undefined'?'DATA undefined':Object.keys(DATA).length+' stores'"));
check('the new event is in DATA.events', ev(`DATA.events.some(e=>e.id==='${EVENT_ID}')`) === true);
check('the three new props resolve through getProp()',
  ev(`[${PROPS.map((p) => `'${p}'`).join(',')}].every(k=>!!getProp(k))`) === true);

ev(`Router.go('#/article/${EVENT_ID}')`);
await sleep(3000);

// the router renders into <main id="content"> (index.html:422)
const host = ev("document.getElementById('content')");
check('view container found', !!host && host.innerHTML.length > 5000,
  host ? host.innerHTML.length + ' bytes' : 'missing');
const html = host.innerHTML;
const text = host.textContent;
const n = (re) => (html.match(re) || []).length;

SECTIONS.forEach((nm) => check('section rendered: ' + nm, text.includes(nm)));
check('15 section subtitles + article hero', n(/art-subtitle/g) === 16, n(/art-subtitle/g) + ' subtitles');
check('article H1 rendered', html.includes('SIX NAMES, ONE HAMMER'));
check('filing note rendered', text.includes('continues directly from'));
check('Piktor Deldkur the Third in page', text.includes('Piktor Deldkur the Third'));
check('Waluigi asides styled .walu-aside', n(/walu-aside/g) >= 14, n(/walu-aside/g) + ' asides');
check("Waluigi's Note blocks rendered", n(/Waluigi(&#039;|')s Note:/g) >= 9,
  n(/Waluigi(&#039;|')s Note:/g) + ' notes');
check('prop triggers rendered as links', n(/proplink/g) >= 3, n(/proplink/g) + ' proplinks');
PROPS.forEach((p) => check('prop trigger wired: ' + p.slice(5, 24), html.includes(p)));
check('no unrendered [[prop: in the article', !text.includes('[[prop:'));
check('no unrendered [[roll: in the article', !text.includes('[[roll:'));
check('no raw <div> leaked as text', !text.includes('&lt;div'));
check('blockquotes rendered', n(/<blockquote/g) >= 2, n(/<blockquote/g) + ' blockquotes');
check('XP award rows rendered (6 awards)', n(/award-row/g) >= 6, n(/award-row/g) + ' rows');
check('XP amounts rendered', text.includes('+320 XP') && text.includes('+180 XP'));
check('assessment rendered', text.includes('RECOMMENDATION'));
check('participant chips rendered', text.includes('Timmy') && text.includes('Hank') && text.includes('Wyatt'));
// keyBattles[] on an event is read by the renderer as an id list, so the
// object-shaped engagements do not render — pre-existing behaviour shared with
// the earlier Feyward filings. The cross-link that DOES render is the lane
// battle record, carried in relatedArticles.
check('lane battle cross-link renders', text.includes('Woodfellow'));
check('related filing cross-link renders', text.includes('Guard With No Name') || text.includes('Chop Bros'));

for (const pid of PROPS) {
  ev(`openProp('${pid}')`);
  await sleep(600);
  const modal = window.document.body.innerHTML;
  check('prop paper opens: ' + pid.slice(5, 26), modal.includes('pd-head') && modal.includes(pid),
    modal.includes('pd-head') ? 'pd-head present' : 'no pd-head');
}

console.log('--- PASS ---');
ok.forEach((l) => console.log('  ok   ' + l));
if (fail.length) { console.log('--- FAIL ---'); fail.forEach((l) => console.log('  FAIL ' + l)); }
console.log(`\n${fail.length ? 'FAILED' : 'ALL PASS'} (${ok.length} passed, ${fail.length} failed)`);
process.exit(fail.length ? 1 : 0);
