// Verify the home Recent Adventures feed is built from events.json.
//
//   node tools/tests/test-home-feed-render.mjs
//
// Fails if the latest filing is missing from #/home. Do not push a session
// filing until this exits 0.
import { JSDOM, VirtualConsole } from 'jsdom';

const BASE = process.env.BASE || 'http://127.0.0.1:8765/';

const vc = new VirtualConsole();
const errors = [];
vc.on('jsdomError', (e) => {
  const m = e.detail ? (e.detail.stack || e.detail.message) : e.message;
  if (/chart\.js|Could not parse CSS|scrollTo|Could not load script/.test(m)) return;
  errors.push('jsdomError: ' + m);
});
vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ').slice(0, 300)));

const indexHtml = await (await fetch(BASE + 'index.html')).text();
const events = await (await fetch(BASE + 'Reputation-Matrix2/data/events.json')).json();
const mainPage = await (await fetch(BASE + 'Reputation-Matrix2/data/mainPage.json')).json();
const latestId = mainPage.latestUpdate && mainPage.latestUpdate.id;
const lastFiled = events[events.length - 1];

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
check('DATA.events loaded', ev('Array.isArray(DATA.events) && DATA.events.length>0') === true,
  String(ev('typeof DATA==="undefined"?"no DATA": (DATA.events||[]).length+" events"')));
check('homeRecentAdventuresHtml is a function', ev("typeof homeRecentAdventuresHtml==='function'") === true,
  String(ev("typeof homeRecentAdventuresHtml")));

ev("Router.go('#/home')");
await sleep(1500);
const host = ev("document.getElementById('content')");
const html = host && host.innerHTML || '';
const text = host && host.textContent || '';
const cards = ev("document.querySelectorAll('#content .campaign-timeline-item').length");

check('view container rendered', html.length > 2000, html.length + ' bytes');
check('at least 8 session cards', Number(cards) >= 8, String(cards) + ' cards');
check('latestUpdate id is in DATA.events', ev(`DATA.events.some(e=>e.id===${JSON.stringify(latestId)})`) === true, latestId);
check('latest filing card is on home', html.includes(latestId), latestId);
check('latest filing name/title is on home',
  text.includes(lastFiled.name) || text.includes((lastFiled.title || '').slice(0, 40)),
  lastFiled.name);
check('last-appended event is on home', html.includes(lastFiled.id), lastFiled.id);
check('feed is not the old static Charred-Note-as-Latest-File block',
  !/BEFORE DAWN · LATEST FILE/i.test(text));
check('no "No sessions filed" empty state', !text.includes('No sessions filed.'));

console.log('--- PASS ---');
ok.forEach((l) => console.log('  ok   ' + l));
if (fail.length) { console.log('--- FAIL ---'); fail.forEach((l) => console.log('  FAIL ' + l)); }
console.log(`\n${fail.length ? 'FAILED' : 'ALL PASS'} (${ok.length} passed, ${fail.length} failed)`);
process.exit(fail.length ? 1 : 0);
