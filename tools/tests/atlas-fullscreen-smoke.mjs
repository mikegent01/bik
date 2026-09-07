// jsdom smoke test for the tactical map full-screen toggle.
// Mounts the REAL atlas-map-v2.js renderer on midlands_full, fires the image
// load jsdom never sends, and drives the ⛶ button: host overlay class, page
// scroll lock, button label flip, toggle-off, Escape exit, and the
// route-change cleanup that must never leave the page scroll-locked.
//
// Needs jsdom resolvable from the repo root (temporary install, not
// committed):  npm install jsdom@26.1.0 --no-save
//
//   node tools/tests/atlas-fullscreen-smoke.mjs
import { JSDOM, VirtualConsole } from 'jsdom';

const vc = new VirtualConsole();
const errors = [];
vc.on('jsdomError', (e) => {
  const m = e.detail ? (e.detail.stack || e.detail.message) : e.message;
  if (/Could not parse CSS|Could not load img|Could not load script/i.test(String(m))) return;
  errors.push('jsdomError: ' + String(m).slice(0, 300));
});

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://127.0.0.1/',
  pretendToBeVisual: true,
  virtualConsole: vc,
});
globalThis.window = dom.window;
globalThis.document = dom.window.document;

const { mountAtlasMapV2 } = await import('../../Reputation-Matrix2/app/pages/maps/atlas-map-v2.js');

const fail = [], ok = [];
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));

function fireImgLoad(host) {
  const img = host.querySelector('[data-map-art]');
  img.dispatchEvent(new dom.window.Event('load'));
}
function pressEscape() {
  dom.window.document.dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
}

// --- mount + baseline ---
const host = dom.window.document.createElement('div');
host.id = 'atlas-map-host';
dom.window.document.body.appendChild(host);
mountAtlasMapV2(host, 'midlands_full', {});
const expandBtn = () => host.querySelector('[data-action="expand"]');
check('renderer mounts with a full-screen button', !!expandBtn());
check('button starts labelled Full screen', expandBtn() && expandBtn().textContent === '⛶ Full screen',
  String(expandBtn() && expandBtn().textContent));
fireImgLoad(host);
const markers = host.querySelectorAll('[data-poi]').length;
check('pins render after image load', markers > 50, `${markers} markers`);

// --- expand ---
expandBtn().click();
check('expanding adds the overlay class to the host', host.classList.contains('atlas-v2-full'));
check('expanding locks the page scroll', dom.window.document.body.style.overflow === 'hidden');
check('button flips to Exit + active', expandBtn().textContent === '✕ Exit full screen' && expandBtn().classList.contains('active'),
  String(expandBtn().textContent));
check('pins survive the expand re-layout', host.querySelectorAll('[data-poi]').length === markers);

// --- toggle off ---
expandBtn().click();
check('second click removes the overlay class', !host.classList.contains('atlas-v2-full'));
check('second click restores the page scroll', dom.window.document.body.style.overflow === '');
check('button label restores', expandBtn().textContent === '⛶ Full screen');

// --- Escape exit ---
expandBtn().click();
pressEscape();
check('Escape exits full screen', !host.classList.contains('atlas-v2-full'));
check('Escape restores the page scroll', dom.window.document.body.style.overflow === '');

// --- re-mount (region switch) keeps one global wiring, Escape still works ---
mountAtlasMapV2(host, 'midlands_full', {});
fireImgLoad(host);
check('chrome listeners wired exactly once', dom.window.__atlasV2ChromeWired === true);
host.querySelector('[data-action="expand"]').click();
pressEscape();
check('Escape works after a re-mount', !host.classList.contains('atlas-v2-full'));

// --- route change while expanded must not strand the scroll lock ---
host.querySelector('[data-action="expand"]').click();
host.remove(); // Router wipes #content on navigation
dom.window.dispatchEvent(new dom.window.Event('hashchange'));
check('hashchange with no overlay clears the scroll lock', dom.window.document.body.style.overflow === '');

check('no jsdom errors', errors.length === 0, errors.slice(0, 2).join(' | '));

console.log('atlas fullscreen smoke');
ok.forEach(l => console.log('  ok   ' + l));
fail.forEach(l => console.log('  FAIL ' + l));
console.log(`\n${ok.length} passed, ${fail.length} failed`);
process.exit(fail.length ? 1 : 0);
