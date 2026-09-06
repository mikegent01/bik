// One-off jsdom smoke test for the article image additions:
//  - promo_mario_newspaper lead rotator (image + 3 alternates)
//  - the_scorncrow_skirmish section II image + markdown reference-sheet figure
//  - analysis page inherits the source lead image
// Run with a static server on :8765.
//
//   python3 -m http.server 8765 --bind 0.0.0.0   # one terminal
//   node tools/tests/article-image-smoke.mjs      # another
//
// Needs jsdom resolvable from the repo root (temporary install, not
// committed):  npm install jsdom@26.1.0 --no-save
import { JSDOM, VirtualConsole } from 'jsdom';

const BASE = 'http://127.0.0.1:8765/';
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
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const ev = (code) => { try { return window.eval(code); } catch (e) { return '__ERR ' + e.message; } };
await sleep(12000);
process.on('unhandledRejection', (e) => {
  if (String(e && e.code) === 'ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING') return;
  throw e;
});

const fail = [], ok = [];
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));

check('booted with no real js errors', errors.length === 0, errors.slice(0, 2).join(' | '));

// --- promo article: lead rotator ---
ev("Router.go('#/article/promo_mario_newspaper')");
await sleep(1500);
let host = ev("document.getElementById('content')");
let html = host && host.innerHTML || '';
check('promo article renders', (host && host.innerHTML.length || 0) > 2000, String(host && host.innerHTML.length));
check('lead rotator renders', ev("!!document.querySelector('.lead-rotator')") === true);
check('rotator has 4 frames', ev("document.querySelectorAll('.lead-rotator .lead-frame').length") === 4,
  String(ev("document.querySelectorAll('.lead-rotator .lead-frame').length")));
check('rotator has 4 dots', ev("document.querySelectorAll('.lead-rotator .lead-dot').length") === 4);
const src0 = ev("document.querySelector('.lead-rotator .lead-frame[data-i=0]').getAttribute('src')");
check('frame 0 is the set image', src0 && src0.includes('promo-01-main-stage.jpg'), String(src0));
check('frame 3 is the TV Mario image', ev("document.querySelector('.lead-rotator .lead-frame[data-i=3]').getAttribute('src')").includes('promo-04-tv-mario.jpg'));
// rotate to frame 1
ev("leadRotateTo('lead-promo_mario_newspaper',1)");
await sleep(200);
check('rotate shows tablet frame', ev("document.querySelector('.lead-rotator .lead-frame[data-i=1]').classList.contains('on')") === true);
check('caption switches to tablet beat', ev("document.querySelector('.lead-cap-text').textContent").includes('Part Seven'));

// --- scorncrow article: section II image + sheet figure ---
ev("Router.go('#/article/the_scorncrow_skirmish')");
await sleep(1500);
host = ev("document.getElementById('content')");
html = host && host.innerHTML || '';
check('scorncrow article renders', (host && host.innerHTML.length || 0) > 3000, String(host && host.innerHTML.length));
const sec2img = ev("(()=>{const h=[...document.querySelectorAll('h2')].find(x=>x.textContent.includes('Stalled Motorbike'));if(!h)return null;let n=h.nextElementSibling;while(n && n.tagName!=='FIGURE')n=n.nextElementSibling;return n&&n.querySelector('img')?n.querySelector('img').getAttribute('src'):null})()");
check('section II figure renders stall image', sec2img && sec2img.includes('scorncrow-06-motorbike-stall.jpg'), String(sec2img));
check('section II figure caption filed', ev("(()=>{const h=[...document.querySelectorAll('h2')].find(x=>x.textContent.includes('Stalled Motorbike'));if(!h)return '';let n=h.nextElementSibling;while(n && n.tagName!=='FIGURE')n=n.nextElementSibling;return n?n.textContent:''})()").includes('moment of command'));
const sheetImg = ev("(()=>{const imgs=[...document.querySelectorAll('img')].filter(i=>i.getAttribute('src')&&i.getAttribute('src').includes('scorncrow-05-motorbike-sheet.jpg'));return imgs.length?imgs[0].getAttribute('src'):null})()");
check('reference sheet markdown figure renders', !!sheetImg && sheetImg.includes('scorncrow-05-motorbike-sheet.jpg'), String(sheetImg));
check('sheet alt text notes non-canon study', ev("(()=>{const imgs=[...document.querySelectorAll('img')].filter(i=>i.getAttribute('src')&&i.getAttribute('src').includes('scorncrow-05-motorbike-sheet.jpg'));return imgs.length?imgs[0].getAttribute('alt'):''})()").includes('Non-canon study'));
check('sheet figure sits in section II prose', ev("(()=>{const figs=[...document.querySelectorAll('figure.md-figure')];const f=figs.find(x=>x.querySelector('img[src*=scorncrow-05]'));if(!f)return false;const s=f.closest('.prose')||f.parentElement;const secs=s?[s].concat([...s.querySelectorAll('h2')]):[];const h=[...document.querySelectorAll('h2')].find(x=>x.textContent.includes('Stalled Motorbike'));const i3=[...document.querySelectorAll('h2')].findIndex(x=>x.textContent.includes('Who Was Not Dead'));const def=[...document.querySelectorAll('h2')].findIndex(x=>x.textContent.includes('Stalled Motorbike'));return def>=0 && i3>=0 && def<i3})()") === true);

// --- analysis page inherits source lead image ---
ev("Router.go('#/article-analysis/promo_mario_newspaper_waluigi_analysis')");
await sleep(1500);
host = ev("document.getElementById('content')");
html = host && host.innerHTML || '';
check('analysis page renders', (host && host.innerHTML.length || 0) > 4000, String(host && host.innerHTML.length));
check('analysis lead reuses source image', ev("(()=>{const i=document.querySelector('.analysis-lead img, .article-lead-img img');return i?i.getAttribute('src'):''})()").includes('promo-01-main-stage.jpg'));

console.log('\n=== ARTICLE IMAGE SMOKE ===');
for (const k of ok) console.log('  ok  ' + k);
for (const k of fail) console.log('  FAIL ' + k);
console.log(`\n${ok.length} passed, ${fail.length} failed`);
if (fail.length) process.exitCode = 1;
