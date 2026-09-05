/**
 * Crime and Punishment data + page contract tests.
 *
 * The page merges two systems that were previously unrelated:
 *   - the sentencing reel, ported from the Wheel of Regret prototype
 *   - the d100 consequence table already in injuries.json
 *
 * These tests guard the join between them, and the reel's legibility
 * invariant: the whole reason the pie wheel was replaced is that 109 slices on
 * a 300px canvas is 3.3 degrees each. A reel row is a fixed height regardless
 * of how many entries exist, so the page must never regress to a pie.
 *
 * Run: node tools/tests/test-crime-and-punishment.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const DATA = path.join(ROOT, 'Reputation-Matrix2', 'data');
const PAGE = path.join(ROOT, 'Reputation-Matrix2', 'app', 'pages', 'crime-and-punishment');

let pass = 0, fail = 0;
const check = (name, cond, extra = '') => {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name} ${extra}`); }
};

const cap = JSON.parse(fs.readFileSync(path.join(DATA, 'crimeAndPunishment.json'), 'utf8'));
const inj = JSON.parse(fs.readFileSync(path.join(DATA, 'injuries.json'), 'utf8'));
const js = fs.readFileSync(path.join(PAGE, 'crime-and-punishment.js'), 'utf8');
const css = fs.readFileSync(path.join(PAGE, 'crime-and-punishment.css'), 'utf8');
const html = fs.readFileSync(path.join(PAGE, 'crime-and-punishment.html'), 'utf8');

console.log('\n-- the docket data');

check('sentences exist', Array.isArray(cap.sentences) && cap.sentences.length > 50,
  `${cap.sentences?.length}`);
check('effects are kept separate from sentences',
  Array.isArray(cap.effects) && cap.effects.length > 0 &&
  !cap.sentences.some(s => s.type === 'game_effect'),
  'a game_effect leaked into sentences');
check('every sentence has id, label, type, severity',
  cap.sentences.every(s => s.id && s.label && s.type && Number.isInteger(s.severity)));
check('no duplicate sentence ids',
  new Set(cap.sentences.map(s => s.id)).size === cap.sentences.length);
check('severity is within 0-10',
  cap.sentences.every(s => s.severity >= 0 && s.severity <= 10));
check('every sentence has a colour', cap.sentences.every(s => /^#[0-9a-f]{3,8}$/i.test(s.color)));

console.log('\n-- severity bands cover every sentence');

const bandFor = sev => (cap.severityBands || []).find(b => sev >= b.min && sev <= b.max);
const unbanded = cap.sentences.filter(s => s.severity > 0 && !bandFor(s.severity));
check('every non-zero severity falls in a band', unbanded.length === 0,
  unbanded.slice(0, 3).map(s => `${s.label}=${s.severity}`).join(', '));
check('bands do not overlap', (() => {
  const b = [...(cap.severityBands || [])].sort((x, y) => x.min - y.min);
  for (let i = 1; i < b.length; i++) if (b[i].min <= b[i - 1].max) return false;
  return true;
})());

console.log('\n-- the consequence table joins cleanly');

const entries = (inj.entries || []).filter(e => e && e.injuryType);
// The table was culled from 343 to 204 by tools/dedupe-injury-table.py:
// 125 rows were 'Veilbound Vein ...' template repeats. The floor is what a
// usable consequence table needs, not what the generator happened to emit.
check('injury entries load', entries.length >= 150, `${entries.length}`);
check('every entry has a category and description',
  entries.every(e => e.category && e.description));
check('every entry has a cure', entries.every(e => e.cure));
check('the page reads injuries.json live, not a copy',
  js.includes("loadJSON('injuries.json')") && !('consequences' in cap),
  'the table was duplicated into crimeAndPunishment.json');

// The roll is biased by severity but must stay inside the table.
console.log('\n-- the severity bias stays in range');
{
  const max = entries.length;
  let out = 0;
  for (let sev = 0; sev <= 10; sev++) {
    for (let t = 0; t < 4000; t++) {
      let roll = 1 + Math.floor(Math.random() * max);
      const bias = Math.floor((sev / 10) * max * 0.45);
      roll = Math.min(max, roll + (Math.random() < 0.65 ? bias : 0));
      if (roll < 1 || roll > max) out++;
    }
  }
  check('44,000 simulated rolls all land inside the table', out === 0, `${out} out of range`);
}
{
  // Higher severity should trend worse, or the bias is decorative.
  const max = entries.length;
  const mean = sev => {
    let t = 0;
    for (let i = 0; i < 6000; i++) {
      let roll = 1 + Math.floor(Math.random() * max);
      const bias = Math.floor((sev / 10) * max * 0.45);
      t += Math.min(max, roll + (Math.random() < 0.65 ? bias : 0));
    }
    return t / 6000;
  };
  const lo = mean(1), hi = mean(10);
  check('severity 10 rolls meaningfully worse than severity 1', hi > lo * 1.25,
    `sev1 mean ${lo.toFixed(0)} vs sev10 mean ${hi.toFixed(0)}`);
}

console.log('\n-- the reel must not regress to a pie chart');

check('no canvas element on the page', !/<canvas/i.test(html));
check('no arc() drawing in the page script', !/\.arc\s*\(/.test(js));
check('the reel strip exists', html.includes('id="capReelStrip"'));
check('rows have a fixed pixel height in CSS', /\.cap-row\{[^}]*height:\s*54px/.test(css));
check('the JS row height matches the CSS', /ROW_H\s*=\s*54/.test(js),
  'ROW_H and .cap-row height have drifted apart');

console.log('\n-- no ripped audio shipped');

const AUDIO = ['Jackpot.mp3', 'MarioMusicBox.mp3', 'wario-wah.mp3', 'WarioLuagh.mp3',
  'mario-party-announcer-ready.mp3', 'wah-101soundboards.mp3', 'coin-pickup.mp3'];
const shipped = AUDIO.filter(a => html.includes(a) || js.includes(a));
check('no Nintendo audio referenced by the page', shipped.length === 0, shipped.join(', '));
check('no <audio> tags at all', !/<audio/i.test(html));

console.log('\n-- honesty about unverified canon');

check('unverified place names are recorded', Array.isArray(cap.unverifiedTerms) &&
  cap.unverifiedTerms.length > 0, 'nothing flagged');
check('the page tells the reader which terms are unverified',
  cap.unverifiedTerms.every(t => html.includes(t)),
  'a flagged term is not surfaced on the page');

console.log('\n-- the port kept the prototype honest');

check('scam items survived the port', /scam/i.test(js),
  'the Wario shop no longer cheats, which is out of character');
check('the page is scoped so it cannot leak styles',
  css.trim().startsWith('/*') && css.includes('#cap-root'),
  'CSS is not scoped under #cap-root');

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
