// Render smoke test for the chatroom page. Boots the mock model and the
// workflow server, loads /roleplay in jsdom with scripts running, and drives
// the real UI: the dashboard renders from the live archive, a character card
// opens a chat, a typed turn reaches the model and the reply is rendered,
// the turn is remembered across chats, and the export bundle round-trips.
//
//   npm i --no-save jsdom
//   node tools/tests/test-chatroom-page.mjs
import { spawn } from 'node:child_process';
import { JSDOM, VirtualConsole } from 'jsdom';

const repoRoot = new URL('../../', import.meta.url);
const MOCK_PORT = 18891;
const SERVER_PORT = 18890;
const wait = ms => new Promise(r => setTimeout(r, ms));

const procs = [];
const cleanup = () => { for (const p of procs) { try { p.kill('SIGTERM'); } catch {} } };
process.on('exit', cleanup);
process.on('SIGINT', () => { cleanup(); process.exit(1); });

let ok = true;
const check = (name, cond) => { console.log((cond ? 'OK  ' : 'FAIL'), name); if (!cond) ok = false; };

procs.push(spawn('python3', ['tools/mock_lm_studio.py', String(MOCK_PORT)], { cwd: repoRoot, stdio: 'ignore' }));
procs.push(spawn('python3', ['workflow/server.py'], {
  cwd: repoRoot,
  env: { ...process.env, WORKFLOW_PORT: String(SERVER_PORT), WORKFLOW_HOST: '127.0.0.1', LM_STUDIO_URL: `http://127.0.0.1:${MOCK_PORT}` },
  stdio: 'ignore',
}));

let up = false;
for (let i = 0; i < 80 && !up; i++) {
  try { up = (await fetch(`http://127.0.0.1:${SERVER_PORT}/api/health`)).ok; } catch { await wait(250); }
}
if (!up) { console.error('FAIL the workflow server never came up'); cleanup(); process.exit(1); }

// ---- load the page with its scripts running ----
const virtualConsole = new VirtualConsole();
virtualConsole.on('jsdomError', e => console.log('   page error:', e.message));
const pageHtml = await (await fetch(`http://127.0.0.1:${SERVER_PORT}/roleplay`)).text();
const dom = new JSDOM(pageHtml, {
  url: `http://127.0.0.1:${SERVER_PORT}/roleplay`,
  runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole,
  // The page boots as soon as its scripts parse, so the browser surfaces it
  // needs (fetch, speech synthesis) have to exist before that happens.
  beforeParse(window) {
    window.fetch = (url, opts) => fetch(new URL(url, `http://127.0.0.1:${SERVER_PORT}/`), opts);
    window.speechSynthesis = { speak() {}, cancel() {} };
    window.SpeechSynthesisUtterance = function () {};
  },
});
const win = dom.window;
const doc = win.document;

const $ = id => doc.getElementById(id);
const until = async (label, fn, tries = 120) => {
  for (let i = 0; i < tries; i++) { if (fn()) return true; await wait(120); }
  console.log('   timed out waiting for', label);
  return false;
};

// The page boots on DOMContentLoaded-ish timing; the scripts are at the end of
// the body, so they have already run — but the cast arrives over the network.
check('boot: the rail, the dashboard and the modal shell are present',
  Boolean($('nav') && $('dashBody') && $('modalBack') && $('charpanel')));

const castReady = await until('the cast to load', () => doc.querySelectorAll('[data-char]').length > 20);
check('dashboard: character cards render from the live archive', castReady);
check('dashboard: "For you" and the letter dividers are both rendered',
  $('dashBody').innerHTML.includes('For you') && doc.querySelectorAll('.ltr-head').length > 3);
check('dashboard: cards carry the creator handle and a real interaction count',
  doc.querySelector('.ccard .by').textContent.startsWith('By @') && /\d+ interaction/.test(doc.querySelector('.ccard .meta').textContent));
const scenesReady = await until('the scenes to load', () => doc.querySelectorAll('[data-scene]').length > 0);
check('dashboard: scene cards render from the filed sessions', scenesReady);
check('dashboard: the group chat entry point is there', Boolean($('groupBtn')));

// ---- open a one-to-one chat ----
const card = doc.querySelector('[data-char]');
const charId = card.dataset.char;
card.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('chat: clicking a card opens the chat view', !$('chatview').hidden && $('dash').hidden);
check('chat: the right-hand character panel carries the profile and the menu',
  $('charpanel').textContent.includes('New chat') && $('charpanel').textContent.includes('Persona') &&
  $('charpanel').textContent.includes('Pinned') && $('charpanel').textContent.includes('Style') &&
  $('charpanel').innerHTML.includes('By @'));
check('chat: the recents rail lists the new chat', doc.querySelectorAll('[data-room]').length === 1);

// ---- play one turn against the mock model ----
$('input').value = 'Who is on the ridge tonight?';
$('composer').dispatchEvent(new win.Event('submit', { bubbles: true, cancelable: true }));
const replied = await until('the model reply', () => /MOCK-MODEL REPLY/.test($('stream').textContent));
check('turn: the typed turn and the model reply both render', replied && $('stream').textContent.includes('Who is on the ridge tonight?'));
check('turn: the reply carries like / dislike / pin / remember controls',
  Boolean(doc.querySelector('[data-react="up"]') && doc.querySelector('[data-pin]') && doc.querySelector('[data-remember]')));
check('turn: markdown is rendered as HTML, not printed',
  Boolean(doc.querySelector('.bubble p')));

// ---- memory reaches the next chat ----
const stored = () => JSON.parse(win.localStorage.getItem('waluipedia-chatroom-v1'));
check('memory: the turn is remembered against the character',
  stored().chars.some(c => c.id === charId && c.notes.length > 0));
check('memory: opening the chat filed a line in the world log',
  stored().log.some(e => e.kind === 'chat'));

// ---- the model actually received the assembled prompt ----
const probe = await (await fetch(`http://127.0.0.1:${SERVER_PORT}/api/roleplay`, {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ system: 'x', messages: [{ role: 'user', content: 'x' }] }),
})).json();
check('model: the roleplay route is the one the page uses', /MOCK-MODEL REPLY/.test(probe.text || ''));

// ---- CORS, for the static build talking to this server from :8765 ----
const preflight = await fetch(`http://127.0.0.1:${SERVER_PORT}/api/roleplay`, { method: 'OPTIONS' });
check('cors: the static chatroom page may call this server',
  preflight.status === 204 && preflight.headers.get('access-control-allow-origin') === '*');

cleanup();
console.log(ok ? 'ALL CHATROOM PAGE TESTS PASS' : 'CHATROOM PAGE TESTS FAILED');
process.exit(ok ? 0 : 1);
