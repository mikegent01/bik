// jsdom smoke test for the atlas renderer lenses: journey-only mounting,
// per-mode pin colors, the wiki-only filter, and the filed detail extras.
// Mounts the REAL atlas-map-v2.js renderer and drives it like a reader.
//
// Needs jsdom resolvable from the repo root (temporary install, not
// committed):  npm install jsdom@26.1.0 --no-save
//
//   node tools/tests/atlas-modes-smoke.mjs
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
  host.querySelector('[data-map-art]').dispatchEvent(new dom.window.Event('load'));
}
function markerIds(host) {
  return [...host.querySelectorAll('[data-poi]')].flatMap(b => (b.dataset.ids || b.dataset.poi).split(','));
}
function mount(mapId, opts) {
  const host = dom.window.document.createElement('div');
  dom.window.document.body.appendChild(host);
  const handle = mountAtlasMapV2(host, mapId, opts);
  fireImgLoad(host);
  return { host, handle };
}

/* ---- survey baseline: lockerwood renders every pin ---- */
const survey = mount('lockerwood');
check('survey mount returns a handle', !!survey.handle);
const surveyIds = markerIds(survey.host);
check('survey shows the full sheet', surveyIds.length === 16, `${surveyIds.length} markers`);

/* ---- journey-only: only the stops that connect ---- */
const TRAIL = [
  { poiId: 'poi_lw_bloodmoon_manor', n: 1, eventId: 'e1', name: 'Bloodmoon', date: 'd1', plane: 'material' },
  { poiId: 'poi_lw_battle_of_ravencreek', n: 2, eventId: 'e2', name: 'Ravencreek', date: 'd2', plane: 'material' },
];
const trail = mount('lockerwood', { journey: TRAIL, journeyOnly: true });
const trailIds = markerIds(trail.host).sort();
check('journey-only hides every non-stop pin',
  trailIds.length === 2 && trailIds[0] === 'poi_lw_battle_of_ravencreek' && trailIds[1] === 'poi_lw_bloodmoon_manor',
  trailIds.join(','));
check('journey-only header says trail-only', (trail.host.textContent || '').includes('journey stops'));
check('journey-only keeps the path', !!trail.host.querySelector('.atlas-v2-path polyline'));
const empty = mount('lockerwood', { journey: [], journeyOnly: true });
check('empty trail falls back to the full survey', markerIds(empty.host).length === 16);

/* ---- stat lenses: four modes, four colors ---- */
const lensHost = survey.host;
const markerColor = () => lensHost.querySelector('[data-poi]').style.getPropertyValue('--marker').trim();
check('population pins read green', markerColor() === '#4ade80', markerColor());
lensHost.querySelector('[data-mode="military"]').click();
check('military pins read red', markerColor() === '#f87171', markerColor());
check('legend names the lens', (lensHost.querySelector('[data-legend-lens]').textContent || '').includes('pin size = Military'));
check('military total carries its unit', (lensHost.querySelector('[data-mode-total]').textContent || '').includes('garrison'));
lensHost.querySelector('[data-mode="economy"]').click();
check('economy pins read gold', markerColor() === '#fbbf24', markerColor());
lensHost.querySelector('[data-mode="influence"]').click();
check('influence pins read violet', markerColor() === '#a78bfa', markerColor());

/* ---- lens weight: log-scaled sizes, ringed giants ---- */
lensHost.querySelector('[data-mode="population"]').click();
const markerFor = id => lensHost.querySelector(`[data-ids*="${id}"]`);
const diam = id => parseFloat(markerFor(id).style.width);
check('pins size by value on a log ladder', diam('poi_lw_oakhaven') > diam('poi_lw_battle_of_ravencreek'),
  `oakhaven ${diam('poi_lw_oakhaven')}px vs battlefield ${diam('poi_lw_battle_of_ravencreek')}px`);
check('the sheet giant earns the major ring', markerFor('poi_lw_oakhaven').classList.contains('atlas-v2-major'));
const majors = [...lensHost.querySelectorAll('[data-poi].atlas-v2-major')];
check('at most five pins ringed', majors.length > 0 && majors.length <= 5, `${majors.length} ringed`);
const legend = lensHost.querySelector('[data-legend-lens]').textContent || '';
check('legend shows the value range', /0 – 12,000 residents/.test(legend), legend.slice(0, 60));
check('legend explains size + rings', legend.includes('pin size = Population') && legend.includes('top 5'));

/* ---- wiki-only filter ---- */
const wikiBtn = lensHost.querySelector('[data-action="wiki"]');
check('wiki toggle exists', !!wikiBtn);
wikiBtn.click();
const hidden = id => lensHost.querySelector(`[data-poi="${id}"]`).hidden;
check('wiki-only hides pins without articles', hidden('poi_lw_bloodmoon_manor') === true);
check('wiki-only keeps the ravencreek pin', hidden('poi_lw_battle_of_ravencreek') === false);
wikiBtn.click();
check('wiki toggle switches back off', hidden('poi_lw_bloodmoon_manor') === false);

/* ---- filed detail extras ---- */
survey.handle.select('poi_lw_bloodmoon_manor');
const blood = survey.host.querySelector('.atlas-v2-sidebar').innerHTML;
check('detail shows unrest /10', blood.includes('Unrest') && blood.includes('6/10'));
check('detail shows antiquity /10', blood.includes('Antiquity') && blood.includes('7/10'));
check('detail shows numeric intel clearance', blood.includes('Intel req.') && blood.includes('clearance 50'));
const mid = mount('midlands_full');
mid.handle.select('poi_mid_capital_district');
const cap = mid.host.querySelector('.atlas-v2-sidebar').innerHTML;
check('detail shows posted intel faction + level', cap.includes('clearance 5') && cap.includes('Regal Empire'), cap.match(/clearance[^<]*/)?.[0] || '');
mid.handle.select('poi_mid_grand_library');
const lib = mid.host.querySelector('.atlas-v2-sidebar').innerHTML;
check('detail shows the filed library note', lib.includes('atlas-v2-library') && lib.includes('largest public library'));

errors.forEach(e => fail.push(e));
console.log(`\n${ok.length} passed, ${fail.length} failed`);
ok.forEach(l => console.log('  ok   ' + l));
fail.forEach(l => console.log('  FAIL ' + l));
process.exit(fail.length ? 1 : 0);
