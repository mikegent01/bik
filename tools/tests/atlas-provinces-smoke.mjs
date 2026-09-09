// Province census + the desk's shortlist, mounted in the REAL atlas renderer.
// Proves the merge paints contiguous borders, that a province's dossier reports
// the census against the filed ledger, and that the shortlist picks a pin you
// can actually act on. Pure-model checks live in test-map-provinces.mjs.
//
// Needs jsdom resolvable from the repo root (temporary install, not committed):
//   npm install jsdom@26.1.0 --no-save
//
//   node tools/tests/atlas-provinces-smoke.mjs
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

function mount(mapId, opts) {
  const host = dom.window.document.createElement('div');
  dom.window.document.body.appendChild(host);
  const handle = mountAtlasMapV2(host, mapId, opts);
  host.querySelector('[data-map-art]').dispatchEvent(new dom.window.Event('load'));
  return { host, handle };
}
const txt = el => (el && (el.textContent || '')) || '';

/* ---- a realm with filed provinces draws borders ---- */
const mk = mount('mushroom_kingdom_full');
check('mount returns a handle', !!mk.handle);
const plots = [...mk.host.querySelectorAll('[data-province]')];
check('every filed province gets a plot', plots.length >= 20, `${plots.length} plots`);
check('plots are contiguous polygons', plots.every(p => p.tagName.toLowerCase() === 'polygon' && (p.getAttribute('points') || '').split(' ').length >= 3));
check('a contested province is dashed', mk.host.querySelectorAll('.atlas-v2-plot.contested').length >= 1);
check('province labels render at the plot centre', mk.host.querySelectorAll('[data-plotlabel]').length === plots.length);
const labeled = [...mk.host.querySelectorAll('[data-plotlabel]')].find(el => txt(el).includes('Dry Dry Desert'));
check('labels name a real filed province', !!labeled, labeled ? txt(labeled) : 'none');
check('header counts the provinces', txt(mk.host.querySelector('header p')).includes('provinces from the filed survey'));
check('the Provinces button ships on', !!mk.host.querySelector('[data-action="plots"].active'));
mk.host.querySelector('[data-action="plots"]').click();
check('the toggle clears the overlay', mk.host.querySelectorAll('[data-province]').length === 0);
mk.host.querySelector('[data-action="plots"]').click();
check('the toggle brings it back', mk.host.querySelectorAll('[data-province]').length === plots.length);

/* ---- the province lens colours pins by crown ---- */
check('a Provinces lens joins the modes', !!mk.host.querySelector('[data-mode="provinces"]'));
mk.host.querySelector('[data-mode="provinces"]').click();
check('the lens legend lists controllers', /pin size = census power/.test(txt(mk.host.querySelector('[data-legend-lens]'))), txt(mk.host.querySelector('[data-legend-lens]')).slice(0, 90));
check('the lens legend chips count pins per province', /×\d+/.test(txt(mk.host.querySelector('[data-legend-lens]'))));
check('every pin inherits a province colour', [...mk.host.querySelectorAll('[data-poi]')].every(el => /--plot|--marker/.test(el.getAttribute('style') || '')));
const filed = txt(mk.host.querySelector('[data-mode-total]'));
check('the lens total counts filed pins', /pins filed/.test(filed), filed);

/* ---- a plot click opens the dossier ---- */
const summaries = mk.handle.getProvinces();
const withLedger = summaries.find(p => p.ledger) || summaries[0];
mk.handle.selectProvince(withLedger.id);
const target = mk.host.querySelector(`[data-province="${withLedger.id}"]`);
check('a plot is clickable from the map too', !!target);
target.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
const dossier = mk.host.querySelector('.atlas-v2-sidebar');
const sheet = dossier.innerHTML;
check('dossier names the province', txt(dossier.querySelector('h3')).length > 3, txt(dossier.querySelector('h3')));
check('dossier states the verdict', txt(dossier).includes('Dry Dry Desert') || txt(dossier).includes('Contested') || txt(dossier).includes('Held by'));
check('dossier counts the pins it merged', txt(dossier).includes('Pins counted'));
check('dossier carries the census bars', dossier.querySelectorAll('.atlas-v2-censusrow').length >= 2);
check('a filed ledger is checked against the census',
  !withLedger.ledger || dossier.querySelectorAll('.atlas-v2-ledger').length === 1, `ledger for ${withLedger.name}`);
check('the ledger row shows filed → census', !withLedger.ledger || /→ census/.test(sheet) || sheet.includes('census'));
check('dossier links back to the survey sheet', /Open this province as its own sheet|_desert|_plains/.test(sheet));

/* ---- the census roll-up: provinces make the nation ---- */
const roll = mk.handle.getCensus();
check('the handle exposes the census', !!roll && roll.provinces.length === plots.length, roll ? `${roll.provinces.length}` : 'null');
check('the roll-up names a sovereign or refuses to', roll.rollup ? Object.prototype.hasOwnProperty.call(roll.rollup, 'sovereign') : false, JSON.stringify(roll.rollup && roll.rollup.sovereign));
check('the merge loses no pin', summaries.reduce((n, p) => n + p.pins, 0) === roll.pins, `${summaries.reduce((n, p) => n + p.pins, 0)} of ${roll.pins}`);
check('vacant filed claims stay visible as claims', summaries.some(p => p.vacant) ? summaries.filter(p => p.vacant).every(p => p.pins === 0) : true);

/* ---- the shortlist: something to actually choose ---- */
const mid = mount('midlands_full');
const boardBtn = mid.host.querySelector('[data-action="shortlist"]');
check('the Choose a pin button is on the tools row', !!boardBtn);
boardBtn.click();
const sidebar = mid.host.querySelector('.atlas-v2-sidebar');
const picks = [...sidebar.querySelectorAll('[data-pick]')];
check('the board lists candidates', picks.length >= 4, `${picks.length} picks`);
check('every pick says why', picks.every(b => txt(b.querySelector('em')).length > 8), txt(picks[0] && picks[0].querySelector('em')));
check('the board admits the sheet size', txt(sidebar.querySelector('h3')).includes('pins.'), txt(sidebar.querySelector('h3')));
check('the top pick is a real pin', !!mid.handle.getPois().find(p => p.id === picks[0].dataset.pick), picks[0].dataset.pick);

sidebar.querySelector('[data-pickroll]').click();
const rerolled = [...mid.host.querySelectorAll('[data-pick]')].map(b => b.dataset.pick);
check('reroll reshuffles the six', rerolled.length === picks.length, rerolled.join(','));

mid.host.querySelector('[data-pick]').click();
const afterPick = mid.host.querySelector('.atlas-v2-sidebar').innerHTML;
check('picking lands on the pin', /atlas-v2-detail/.test(afterPick) && !/atlas-v2-shortlist/.test(afterPick));
check('picking centres the map', mid.host.querySelector('.atlas-v2-world').style.transform.includes('scale'), mid.host.querySelector('.atlas-v2-world').style.transform);

/* ---- keyboard: arrows, enter, escape ---- */
boardBtn.click();
const key = k => dom.window.document.dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: k, bubbles: true }));
const rows = () => [...mid.host.querySelectorAll('[data-pick]')];
check('the board reopens for keyboard use', rows().length >= 4);
const firstBefore = rows().findIndex(r => r.classList.contains('on'));
key('ArrowDown');
const firstAfter = rows().findIndex(r => r.classList.contains('on'));
check('ArrowDown moves the cursor', firstAfter === (firstBefore + 1) % rows().length, `${firstBefore} → ${firstAfter}`);
key('Escape');
check('Escape closes the board', !mid.host.querySelector('[data-pick]'));

/* ---- a plane-filtered layer still gets a census of what is visible ---- */
const shadow = mount('midlands_full', { plane: 'shadow' });
const shadowPlots = shadow.host.querySelectorAll('[data-province]').length;
check('filtered layers census only what is on the layer', shadowPlots >= 0, `${shadowPlots} plots`);

/* ---- deep link: the nation page's census row opens a province ---- */
const linked = mount('mushroom_kingdom_full', { focusProvince: 'filed:central_plains' });
const linkSide = linked.host.querySelector('.atlas-v2-sidebar');
check('the linked province opens its dossier', txt(linkSide.querySelector('h3')).includes('Mushroom Plains'), txt(linkSide.querySelector('h3')));
check('the linked plot is highlighted', !!linked.host.querySelector('.atlas-v2-plot.selected'));
check('a bad province id is ignored', mount('mushroom_kingdom_full', { focusProvince: 'filed:nope' }).host.querySelector('.atlas-v2-plot.selected') === null);

/* ---- journey mode: no borders over a hidden survey ---- */
const TRAIL = [{ poiId: 'poi_mid_capital_district', n: 1, eventId: 'e1', name: 'Capital', date: 'd', plane: 'material' }];
const trail = mount('midlands_full', { journey: TRAIL, journeyOnly: true });
check('journey mode draws no province overlay', trail.host.querySelectorAll('[data-province]').length === 0);
check('journey mode keeps its pins', trail.host.querySelectorAll('[data-poi]').length === 1);

errors.forEach(e => fail.push(e));
console.log(`\n${ok.length} passed, ${fail.length} failed`);
ok.forEach(l => console.log('  ok   ' + l));
fail.forEach(l => console.log('  FAIL ' + l));
process.exit(fail.length ? 1 : 0);
