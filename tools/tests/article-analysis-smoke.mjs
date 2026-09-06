// One-off jsdom smoke test for the promo_mario_newspaper article analysis.
// Verifies the Investiage panel advertises the analysis on the source page,
// the #/article-analysis/<id> route renders, research desk rolls once and
// persists, and related chips resolve. Run with a static server on :8765.
//
//   python3 -m http.server 8765 --bind 0.0.0.0   # one terminal
//   node tools/tests/article-analysis-smoke.mjs    # another
//
// Needs jsdom resolvable from the repo root (temporary install, not
// committed):  npm install jsdom@26.1.0 --no-save
import { JSDOM, VirtualConsole } from 'jsdom';

const BASE = 'http://127.0.0.1:8765/';
const AID = 'promo_mario_newspaper_waluigi_analysis';
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
check('analysis record loaded by app', ev(`articleAnalysisGet('${AID}') !== null`) === true,
  String(ev(`articleAnalysisGet('${AID}') !== null`)));

// --- source page panel ---
ev("Router.go('#/article/promo_mario_newspaper')");
await sleep(1500);
let host = ev("document.getElementById('content')");
let text = host && host.textContent || '';
check('source article renders', (host && host.innerHTML.length || 0) > 2000,
  String(host && host.innerHTML.length));
check('analysis panel present', text.includes("Waluigi's Article Analysis"));
check('analysis link uses source title', text.includes('Promo Mario — A Sighting or a Sales Pitch?') || text.includes('Promo Mario'));
check('summary preview shown', text.includes('I recognize my own article on the Wario Inc. tablet'));
check('research pill reports 3 checks', /3 optional after-hours checks/.test(text), '');
const panelHref = ev("(()=>{const a=[...document.querySelectorAll('a[href*=\"article-analysis\"]')][0];return a?a.getAttribute('href'):null})()");
check('panel link targets analysis id', panelHref === '#/article-analysis/' + AID, String(panelHref));

// --- analysis route ---
ev("Router.go('#/article-analysis/" + AID + "')");
await sleep(1500);
host = ev("document.getElementById('content')");
text = host && host.textContent || '';
const html = host && host.innerHTML || '';
check('analysis renders', (host && host.innerHTML.length || 0) > 4000, String(host && host.innerHTML.length));
check('title rendered', text.includes('Promo Mario — A Sighting or a Sales Pitch?'));
check('kicker rendered', text.includes("Waluigi's Article Analysis"));
check('subtitle rendered', text.includes("I found my own sentences on a stranger's tablet"));
check('thesis section present', text.includes('My Thesis'));
check('all 7 section headings render', (() => {
  const ids = ['the-tablet-proves-readership','crying-is-not-corroboration','one-date-three-voices','more-sources-mean-more-suspicion','the-luigi-that-was-not-luigi','descriptions-are-not-documents','test-the-brother-not-the-hero'];
  return ids.every(id => ev(`!!document.getElementById('analysis-${id}')`) === true);
})());
check('verdict section present', text.includes("Waluigi's Verdict"));
check('verdict carries the signed position', text.includes('unverified and highly suspicious'));
check('research desk present', text.includes("Waluigi's After-Hours Research Desk"));
check('3 research cards', ev("document.querySelectorAll('.analysis-research-card').length") === 3,
  String(ev("document.querySelectorAll('.analysis-research-card').length")));
check('related chips resolve (7)', ev("document.querySelectorAll('.analysis-related .rel-chip').length") >= 5,
  String(ev("document.querySelectorAll('.analysis-related .rel-chip').length")));
check('source return link present', text.includes('Return to the account this argument is anchored to'));

// --- research roll: once, persists ---
const before = ev(`analysisResearchResult('${AID}','memory-test')`);
check('roll starts empty', before === null, String(before));
ev(`analysisResearchRoll(document.querySelector('[data-research="memory-test"]'))`);
await sleep(600);
const after = ev(`analysisResearchResult('${AID}','memory-test')`);
check('roll filed after click', !!after, JSON.stringify(after));
check('card disabled after roll', ev("document.querySelector('[data-research=memory-test]').disabled") === true);
const outcomeShown = ev("document.querySelector('[data-research=memory-test]').closest('.analysis-research-card').textContent");
check('outcome text visible', /Breakthrough|Useful limit/.test(outcomeShown), outcomeShown.slice(0, 60));

// reload route -> result persisted via localStorage
ev("Router.go('#/article/promo_mario_newspaper')");
await sleep(600);
ev("Router.go('#/article-analysis/" + AID + "')");
await sleep(1200);
check('result persists after route reload', ev(`analysisResearchResult('${AID}','memory-test')`) !== null);
check('card re-filed after reload', ev("document.querySelector('[data-research=memory-test]') && document.querySelector('[data-research=memory-test]').disabled") === true);

// --- 20/80 sanity: every section has a non-empty anchor that came from source ---
check('every section has sourceAnchor', ev(`articleAnalysisGet('${AID}').sections.every(s=>s.sourceAnchor && s.sourceAnchor.length>10)`));

// --- not in global index (no duplicate article) ---
check('analysis id absent from global INDEX', ev(`INDEX['${AID}'] === undefined`) === true);

console.log('\n=== ARTICLE ANALYSIS SMOKE ===');
for (const k of ok) console.log('  ok  ' + k);
for (const k of fail) console.log('  FAIL ' + k);
console.log(`\n${ok.length} passed, ${fail.length} failed`);
if (fail.length) process.exitCode = 1;
