#!/usr/bin/env node
/**
 * The Waluigi Site Playlist (waluipedia-ambient.js) is the ONE instrument on
 * the site: the 15 library tracks plus the 9 Reading Desk cues, gated by the
 * desk's own localStorage. This harness boots the real module under a stub
 * DOM/localStorage (no AudioContext, so nothing ever actually sounds or
 * schedules — selection logic only) and proves:
 *
 *   · the desk cues are real tracks in the engine (24 total)
 *   · the gate mirrors the desk rules (unlock days, ownedTracks, debug)
 *   · playDeskTrack can never start a locked cue
 *   · the rotation never lands on a locked cue
 *   · every READING_TRACKS id in index.html exists as a desk cue
 */
import {readFileSync} from 'fs';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const ambientSrc = readFileSync(join(root, 'Reputation-Matrix2/app/styles/waluipedia-ambient.js'), 'utf8');
const indexSrc = readFileSync(join(root, 'index.html'), 'utf8');

let failures = 0;
function check(name, cond, detail) {
  if (cond) { console.log(`  ok   ${name}`); }
  else { failures++; console.log(`  FAIL ${name}${detail ? ' — ' + detail : ''}`); }
}

/* ---------- stub browser ---------- */
const store = new Map();
const localStorage = {
  getItem: k => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => { store.set(k, String(v)); },
  removeItem: k => { store.delete(k); }
};
function stubEl() {
  return {
    textContent: '', innerHTML: '', hidden: false, style: {},
    classList: { add() {}, remove() {}, toggle() { return false; }, contains() { return false; } },
    setAttribute() {}, removeAttribute() {}, appendChild() {}, addEventListener() {}, remove() {}, focus() {},
    querySelector: () => null, querySelectorAll: () => [],
    getBoundingClientRect: () => ({ top: 0, left: 0, right: 0, bottom: 0 }),
    offsetWidth: 0, offsetHeight: 0, dataset: {}
  };
}
const document_ = {
  body: { appendChild() {} }, head: { appendChild() {} },
  createElement: stubEl,
  querySelector: () => null, querySelectorAll: () => [], getElementById: () => null,
  addEventListener() {}, removeEventListener() {}, readyState: 'complete',
  documentElement: { classList: { toggle() {} } }
};
const windowStub = {
  location: { pathname: '/index.html' },
  innerWidth: 1280, innerHeight: 800,
  addEventListener() {},
  AudioContext: undefined, webkitAudioContext: undefined // no sound in tests: selection logic only
};

/* ---------- boot the real module ---------- */
let A = null;
try {
  new Function('window', 'document', 'localStorage', 'location', 'innerWidth', 'innerHeight',
    'requestAnimationFrame', ambientSrc)
    (windowStub, document_, localStorage, windowStub.location, 1280, 800, () => 0);
  A = windowStub.WaluipediaAmbient;
} catch (e) {
  console.log('  FAIL the ambient module boots under a stub DOM — ' + e.message);
  process.exit(1);
}
check('the ambient module boots and exposes its API', !!(A && A.__v5 && A.playDeskTrack));

console.log('\n-- the desk cues are real playlist tracks');
const list = A.listTracks();
check('the playlist holds the 15 library tracks plus the 9 desk cues',
      list.length === 24, `got ${list.length}`);
const deskIdsInAmbient = list.filter(t => t.desk).map(t => t.desk);
const readingTrackIds = [...indexSrc.matchAll(/\{id:'(desk-[a-z0-9-]+)'/g)].map(m => m[1]);
check('every desk cue id comes from index.html READING_TRACKS',
      deskIdsInAmbient.slice().sort().join() === readingTrackIds.slice().sort().join(),
      deskIdsInAmbient.join(',') + ' vs ' + readingTrackIds.join(','));
check('each desk cue carries a full engine body',
      readingTrackIds.every(id => {
        const re = new RegExp(`desk: \\{ id: '${id}'[\\s\\S]*?melody: \\[[^\\]]+\\][\\s\\S]*?bass: \\[[^\\]]+\\]`);
        const m = ambientSrc.match(re);
        return m && (m[0].match(/'/g) || []).length > 40;
      }));
const libBeforeDesk = list.findIndex(t => t.desk) === 15;
check('desk cues sit after the library, never in front of it', libBeforeDesk);

console.log('\n-- the gate mirrors the desk rules');
check('a filed-day cue is locked for a brand-new reader',
      !A.deskTrackUnlocked('desk-grovefire'));
check('the locked hint names the requirement',
      /filed days/.test(A.deskTrackHint('desk-grovefire')),
      A.deskTrackHint('desk-grovefire'));
check('the Exchange cue hints at its price',
      /25 tokens/.test(A.deskTrackHint('desk-snowfall-wire')),
      A.deskTrackHint('desk-snowfall-wire'));
check('the free desk cue is open for everyone',
      A.deskTrackUnlocked('desk-quiet-ink'));

localStorage.setItem('waluipedia-reading-desk-v1', JSON.stringify({ daysComplete: 5 }));
check('five filed days open the two- and five-day cues',
      A.deskTrackUnlocked('desk-grovefire') && A.deskTrackUnlocked('desk-planar-glass') &&
      !A.deskTrackUnlocked('desk-legion-brass'));

localStorage.setItem('waluipedia-reading-desk-v1',
  JSON.stringify({ daysComplete: 0, ownedTracks: ['desk-snowfall-wire'] }));
check('a bought Exchange cue opens at zero filed days',
      A.deskTrackUnlocked('desk-snowfall-wire') && !A.deskTrackUnlocked('desk-grovefire'));

localStorage.removeItem('waluipedia-reading-desk-v1');
localStorage.setItem('waluipedia-debug-v1', '1');
check('debug mode opens every cue, matching the desk itself',
      A.deskTrackUnlocked('desk-wahwire-static') && A.deskTrackUnlocked('desk-oracle-interval'));
localStorage.removeItem('waluipedia-debug-v1');

console.log('\n-- the engine refuses locked music everywhere it selects');
localStorage.setItem('waluipedia-reading-desk-v1', JSON.stringify({ daysComplete: 0 }));
check('playDeskTrack refuses a locked cue outright', !A.playDeskTrack('desk-wahwire-static'));
check('currentDeskId stays honest after a refused play', A.currentDeskId() !== 'desk-wahwire-static');
check('playDeskTrack starts an open cue and names it',
      A.playDeskTrack('desk-quiet-ink') === true && A.currentDeskId() === 'desk-quiet-ink');
/* From the last desk cue (index 15) the next open slot wraps past the eight
   locked cues (16..23) onto the library again (0). */
const before = A.index;
A.nextTrack();
check('the rotation never lands on a locked cue',
      A.index === 0, `advanced to index ${A.index}`);
check('nextTrack really moved', A.index !== before);
check('the header state follows the wrap', A.track === 'Waluigi Reading Room');

/* updateUi must offer the desk its mirror hook without requiring it */
check('the ambient module notifies desk listeners from updateUi',
      /WaluipediaDeskNowPlaying/.test(ambientSrc));

/* persistence of the ambient track index must not resurrect a locked cue on
   the user's next visit: start() re-checks the gate before scheduling. */
check('start() re-checks the gate instead of trusting the saved index',
      /function start\(\)[\s\S]*trackLocked\(trackIndex\)/.test(ambientSrc));

console.log(failures ? `\n${failures} FAILURES` : '\nall ambient playlist checks pass');
process.exit(failures ? 1 : 0);
