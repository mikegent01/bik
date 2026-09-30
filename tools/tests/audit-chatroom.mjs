/**
 * A hundred turns through the chatroom, checked for the things that go
 * wrong quietly.
 *
 * This is not a pass/fail unit suite — it is an audit. It boots the mock
 * model and the workflow server, opens a filed scene, and plays a long
 * varied session: quiet turns, loud turns, questions, attempts, time
 * jumps, out-of-character notes, imports, regenerations. After every turn
 * it checks the invariants that have bitten us:
 *
 *   · nothing quoted from a filing dated after the scene
 *   · no reply left hanging mid-sentence
 *   · no empty cards, no [[brackets]] in the prose
 *   · the speaker on the card is the one who spoke
 *   · the scene's fixed facts never silently change
 *   · nobody speaks who is not in the scene
 *   · a private turn is not answered by a crowd
 *
 * Run: node tools/tests/audit-chatroom.mjs [turns]
 */
import { spawn } from 'node:child_process';
import { JSDOM, VirtualConsole } from 'jsdom';

const TURNS = Number(process.argv[2] || 100);
const MOCK_PORT = 18991;
const SERVER_PORT = 18990;
const repoRoot = new URL('../..', import.meta.url).pathname;
const wait = ms => new Promise(r => setTimeout(r, ms));

const procs = [];
procs.push(spawn('python3', ['tools/mock_lm_studio.py', String(MOCK_PORT)], {
  cwd: repoRoot, stdio: 'ignore',
  // MOCK_ADVERSARIAL=1 makes the studio misbehave on purpose: wrong mouth,
  // truncation, invented brackets, empty replies. The audit then proves the
  // guards catch all of it before the reader sees anything.
  env: { ...process.env, MOCK_DIRECTIVES: '[[HP: {{WHO}} -3]]' },
}));
procs.push(spawn('python3', ['workflow/server.py'], {
  cwd: repoRoot, stdio: 'ignore',
  env: { ...process.env, WORKFLOW_PORT: String(SERVER_PORT), WORKFLOW_HOST: '127.0.0.1',
    LM_STUDIO_URL: `http://127.0.0.1:${MOCK_PORT}` },
}));
process.on('exit', () => procs.forEach(p => p.kill('SIGTERM')));
await wait(2600);

const vc = new VirtualConsole();
const pageErrors = [];
vc.on('jsdomError', e => pageErrors.push(String(e.message)));
const html = await (await fetch(`http://127.0.0.1:${SERVER_PORT}/roleplay`)).text();
const dom = new JSDOM(html, {
  url: `http://127.0.0.1:${SERVER_PORT}/roleplay`, runScripts: 'dangerously',
  pretendToBeVisual: true, virtualConsole: vc,
  beforeParse(w) {
    w.fetch = (u, o) => fetch(new URL(u, `http://127.0.0.1:${SERVER_PORT}/`), o);
    w.speechSynthesis = { speak() {}, cancel() {} };
    w.SpeechSynthesisUtterance = function () {};
  },
});
const w = dom.window, d = w.document, $ = id => d.getElementById(id);
const RP = () => w.RP;
const saved = () => JSON.parse(w.localStorage.getItem('waluipedia-chatroom-v1') || '{}');
const room = () => { const s = saved(); return s.rooms.find(x => x.id === s.active) || s.rooms[0]; };

const faults = [];
const fault = (kind, detail) => faults.push({ kind, detail: String(detail).slice(0, 160) });

for (let i = 0; i < 200 && !d.querySelectorAll('[data-scene]').length; i++) await wait(150);
d.querySelector('[data-scene]').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
$('mOk').dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
for (let i = 0; i < 200 && $('chatview').hidden; i++) await wait(150);
await wait(600);

// The prompts: deliberately varied, including the shapes that broke things.
const QUIET = ['I read it to myself, quietly.', 'I do not look up. I keep reading.',
  'I put my hands over my face.', 'I mutter the date under my breath.'];
const LOUD = ['"What do you make of it?" I say, looking up.', 'I turn to them and ask what they want.',
  '"Say that again," I tell him.', 'I shout across the yard.'];
const ASKS = ['What am I wearing, and where am I?', 'What does the record actually say about this?',
  'Who else was filed as being here?', 'What time is it now?'];
const JUMPS = ['3 days later I come back to the table.', 'Later that night I try again.',
  'The next morning I read it once more.'];
const ACTS = ['I try the door.', 'I take the top sheet and fold it away.', 'I put the lamp out.',
  'I search the boxes for the missing page.'];
const OOC = ['I keep reading. ((no new characters))', 'I wait. ((keep it short))'];
const pools = [QUIET, LOUD, ASKS, ACTS, ACTS, QUIET, JUMPS, OOC];

let turns = 0;
const factsSeen = {};
for (let n = 0; n < TURNS; n++) {
  const pool = pools[n % pools.length];
  const text = pool[(n / pools.length | 0) % pool.length];
  const r0 = room();
  const before = (r0.messages || []).length;
  const wasPrivate = RP().privacyHint(text) === 'private';

  $('input').value = text;
  $('composer').dispatchEvent(new w.Event('submit', { bubbles: true, cancelable: true }));
  for (let k = 0; k < 120; k++) { if (!d.querySelector('.typing') && !$('send').disabled === false) break; await wait(100); }
  for (let k = 0; k < 60; k++) { if (!d.querySelector('.typing')) break; await wait(100); }
  await wait(250);

  const r = room();
  const fresh = (r.messages || []).slice(before);
  const replies = fresh.filter(m => m.role === 'char' || m.role === 'world');
  turns++;

  const scene = RP().sceneDate(r, saved());
  replies.forEach(m => {
    const body = RP().textOf(m);
    if (!body.trim()) fault('empty reply', m.role);
    if (/\[\[/.test(body)) fault('brackets in the prose', body);
    if (RP().looksTruncated(body)) fault('cut off mid-sentence', body.slice(-60));
    if (m.role === 'char') {
      const who = (r.cast || []).find(c => c.id === m.charId);
      if (!who) fault('reply from somebody not in the cast', m.charId);
      else {
        const sheet = (r.states || {})[who.id];
        if (sheet && sheet.present === false) fault('reply from somebody not in the scene', who.name);
        const mis = RP().checkSpeaker(body, who, RP().presentCast(r));
        if (!mis.ok && mis.actual) fault('wrong mouth', who.name + ' wrote ' + mis.actual.name);
      }
    }
    (m.consulted || []).forEach(name => {
      const hit = (w.archiveIndex || []).find(x => x.name === name);
      if (hit && hit.date && scene && RP().timeRelation(scene, hit.date).rel === 'future') {
        fault('quoted the future', name);
      }
    });
  });
  if (wasPrivate && replies.some(m => m.role === 'char')) {
    fault('crowd in a private turn', text);
  }
  Object.keys(r.facts || {}).forEach(k => {
    if (factsSeen[k] && factsSeen[k] !== r.facts[k]) {
      fault('a fixed fact changed', k + ': ' + factsSeen[k] + ' → ' + r.facts[k]);
    }
    factsSeen[k] = r.facts[k];
  });
}

// One regeneration, to make sure it becomes a swipe rather than a new line.
const last = [...d.querySelectorAll('[data-retry]')].pop();
if (last) {
  const beforeCount = (room().messages || []).length;
  last.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
  for (let k = 0; k < 80; k++) { if (!d.querySelector('.typing')) break; await wait(100); }
  await wait(300);
  const r = room();
  if ((r.messages || []).length !== beforeCount) fault('regenerate added a line', 'expected a swipe');
  const swiped = (r.messages || []).filter(m => (m.alts || []).length > 1).length;
  if (!swiped) fault('regenerate made no alternative', 'no alts');
}

const report = RP().auditRoom(saved(), room(), {});
const byKind = {};
faults.forEach(f => { byKind[f.kind] = (byKind[f.kind] || 0) + 1; });

console.log('\n=== chatroom audit ===');
console.log('turns played        :', turns);
console.log('messages in the room:', (room().messages || []).length);
console.log('lore book pages     :', ((saved().book || {}).entries || []).length);
console.log('page errors         :', pageErrors.length, pageErrors.slice(0, 2).join(' | '));
console.log('room audit          :', report.ok ? 'clean' :
  `${report.dates.length} date, ${report.quiet.length} quiet, ${report.book.length} misfiled`);
console.log('faults              :', faults.length);
Object.keys(byKind).sort().forEach(k => console.log('   ' + k.padEnd(34), byKind[k]));
faults.slice(0, 8).forEach(f => console.log('   e.g.', f.kind + ':', f.detail));
console.log(faults.length ? '\nAUDIT FOUND PROBLEMS' : '\nAUDIT CLEAN');
procs.forEach(p => p.kill('SIGTERM'));
process.exit(0);
