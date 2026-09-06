// One-off jsdom smoke test for the revision-history feature on
// #/article/promo_mario_newspaper. Run with a static server on :8765.
//
//   python3 -m http.server 8765 --bind 0.0.0.0   # one terminal
//   node tools/tests/revision-history-smoke.mjs    # another
//
// Needs jsdom resolvable from the repo root (temporary install, not
// committed):  npm install jsdom@26.1.0 --no-save
import { JSDOM, VirtualConsole } from 'jsdom';

const BASE = 'http://127.0.0.1:8765/';
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
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));

check('booted with no real js errors', errors.length === 0, errors.slice(0, 2).join(' | '));

ev("Router.go('#/article/promo_mario_newspaper')");
await sleep(1500);
let host = ev("document.getElementById('content')");
let html = host && host.innerHTML || '';
let text = host && host.textContent || '';

check('article renders', html.length > 2000, html.length + ' bytes');
check('version bar present', ev("!!document.querySelector('.vhistory')") === true);
check('bar lists two revisions', ev("document.querySelectorAll('.vhistory-tab').length") === 2,
  String(ev("document.querySelectorAll('.vhistory-tab').length")));
check('Rev 2 active by default', ev("document.querySelector('.vhistory-tab.is-active')") !== null,
  String(ev("document.querySelector('.vhistory-tab.is-active') && document.querySelector('.vhistory-tab.is-active').dataset.version")));

const activeRev = ev("document.querySelector('.vhistory-tab.is-active') ? document.querySelector('.vhistory-tab.is-active').dataset.version : null");
check('current body is the full account', activeRev === 'rev-2' && text.includes('Part Nineteen'));
check('Wario song cycle present', text.includes('When you see the Wario head') && text.includes('Greed is good') && text.includes('Have a rotten day'));
check('Doughnut World / Fallen Maris beat present', text.includes('Fallen Maris') && text.includes('Doughnut World'));

// switch to Rev 1
ev("pickRevision('promo_mario_newspaper','rev-1')");
await sleep(800);
host = ev("document.getElementById('content')");
text = host && host.textContent || '';
check('Rev 1 active after pick', ev("document.querySelector('.vhistory-tab.is-active') && document.querySelector('.vhistory-tab.is-active').dataset.version") === 'rev-1', String(ev("document.querySelector('.vhistory-tab.is-active') && document.querySelector('.vhistory-tab.is-active').dataset.version")));
check('Rev 1 body is original short review', text.includes('What Waluigi can actually file'));
check('Rev 1 body has no full account', !text.includes('Part Nineteen'));

// back to Rev 2, open the prop
ev("pickRevision('promo_mario_newspaper','rev-2')");
await sleep(800);
ev("openProp('prop_promo_mario_full_account')");
await sleep(400);
const modal = ev("document.getElementById('exhibitOverlay')");
const modalText = modal && modal.textContent || '';
check('full-account prop opens', ev("!!document.getElementById('exhibitOverlay')") === true);
check('prop shows THE FULL ACCOUNT', modalText.includes('THE FULL ACCOUNT'));
check('prop backlink to article', modalText.includes('Promo Mario'));

// close, then open each rule-6 prop and confirm its document text
ev("closeExhibit && closeExhibit()");
await sleep(300);
const props = [
  ['prop_wario_inc_tablet', 'WARIO INC. TABLET', 'WARNING — INCONSISTENT REALITY DETECTED'],
  ['prop_tape_955_bf', 'ONE DATE ON THE LABEL: 955 BF', 'a black question mark inside a circle'],
  ['prop_studio_security_footage', 'CAMERA THREE', 'two hollow black eyes'],
];
for (const [pid, title, beat] of props) {
  ev(`openProp(${JSON.stringify(pid)})`);
  await sleep(400);
  const t = ev("document.getElementById('exhibitOverlay')") && ev("document.getElementById('exhibitOverlay').textContent") || '';
  check(pid + ' opens', t.includes(title), title);
  check(pid + ' beat present', t.includes(beat), beat);
  ev("closeExhibit && closeExhibit()");
  await sleep(200);
}

console.log('--- PASS ---');
ok.forEach((l) => console.log('  ok   ' + l));
if (fail.length) { console.log('--- FAIL ---'); fail.forEach((l) => console.log('  FAIL ' + l)); }
console.log(`\n${fail.length ? 'FAILED' : 'ALL PASS'} (${ok.length} passed, ${fail.length} failed)`);
process.exit(fail.length ? 1 : 0);
