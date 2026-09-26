#!/usr/bin/env node
/* Atlas transport overlay smoke test.
 *
 * Needs jsdom resolvable from the repo root (temporary install, not committed):
 *   npm install jsdom@26.1.0 --no-save
 */
import { JSDOM, VirtualConsole } from 'jsdom';

const virtualConsole = new VirtualConsole();
const errors = [];
virtualConsole.on('jsdomError', error => {
  const message = error.detail ? (error.detail.stack || error.detail.message) : error.message;
  if (!/Could not parse CSS|Could not load img|Could not load script/i.test(String(message))) {
    errors.push(String(message).slice(0, 300));
  }
});
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://127.0.0.1/',
  pretendToBeVisual: true,
  virtualConsole,
});
globalThis.window = dom.window;
globalThis.document = dom.window.document;

const { mountAtlasMapV2 } = await import('../../Reputation-Matrix2/app/pages/maps/atlas-map-v2.js');
const host = dom.window.document.createElement('div');
dom.window.document.body.appendChild(host);
const handle = mountAtlasMapV2(host, 'mushroom_kingdom_full');
host.querySelector('[data-map-art]').dispatchEvent(new dom.window.Event('load'));

let pass = 0;
let fail = 0;
const ok = (condition, label) => {
  if (condition) { pass += 1; console.log(`  ok   ${label}`); }
  else { fail += 1; console.log(`  FAIL ${label}`); }
};

console.log('atlas transport overlay');
ok(!!handle, 'Mushroom Kingdom atlas mounts');
ok(handle.getPois().length === 174, `cleaned sheet holds 174 Mushroom Kingdom pins (${handle.getPois().length})`);
ok(!handle.getPois().some(poi => /^poi_(nbc|iio|si)_/.test(poi.id)), 'outer-realm POIs do not leak into the full sheet');
ok(host.querySelectorAll('.atlas-v2-route').length >= 10, `routes connect visible endpoints (${host.querySelectorAll('.atlas-v2-route').length})`);
ok(host.querySelectorAll('.atlas-v2-route-rail').length > 0, 'rail styling renders');
ok(host.querySelectorAll('.atlas-v2-route-boat').length > 0, 'boat styling renders');
ok(host.querySelectorAll('.atlas-v2-route-road, .atlas-v2-route-trail').length > 0, 'road or trail styling renders');
ok((host.querySelector('.atlas-v2-legend')?.textContent || '').includes('Train'), 'route legend names the train mode');
ok((host.querySelector('.atlas-v2-legend')?.textContent || '').includes('Boat'), 'route legend names the boat mode');

const toggle = host.querySelector('[data-action="routes"]');
ok(!!toggle && toggle.classList.contains('active'), 'Routes toggle starts active');
toggle?.click();
ok(host.querySelectorAll('.atlas-v2-route').length === 0, 'Routes toggle hides route geometry');
toggle?.click();
ok(host.querySelectorAll('.atlas-v2-route').length >= 10, 'Routes toggle restores route geometry');

const journeyHost = dom.window.document.createElement('div');
dom.window.document.body.appendChild(journeyHost);
mountAtlasMapV2(journeyHost, 'mushroom_kingdom_full', {
  journey: [{ poiId: 'poi_mk_toadtown', n: 1 }],
  journeyOnly: true,
});
journeyHost.querySelector('[data-map-art]').dispatchEvent(new dom.window.Event('load'));
ok(journeyHost.querySelectorAll('.atlas-v2-route').length === 0, 'journey mode keeps transport separate');
ok(errors.length === 0, 'no jsdom runtime errors');

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
