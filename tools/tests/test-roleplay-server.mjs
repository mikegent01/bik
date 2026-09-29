// Integration test for the roleplay additions to workflow/server.py. Boots
// the mock LM Studio, then the real server pointed at it, and exercises
// every new route: the page, the archive cast, the scene starters, the
// static portraits, and one full roleplay turn through the mock model.
//
//   node tools/tests/test-roleplay-server.mjs
import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';

const repoRoot = new URL('../../', import.meta.url);
const MOCK_PORT = 18791;
const SERVER_PORT = 18790;

const wait = ms => new Promise(r => setTimeout(r, ms));
async function ready(port, tries = 60) {
  for (let i = 0; i < tries; i++) {
    try { await fetch(`http://127.0.0.1:${port}/v1/models`); return true; } catch { await wait(250); }
  }
  return false;
}

const procs = [];
const cleanup = () => { for (const p of procs) { try { p.kill('SIGTERM'); } catch {} } };
process.on('exit', cleanup); process.on('SIGINT', () => { cleanup(); process.exit(1); });

let ok = true;
const check = (name, cond) => { console.log((cond ? 'OK  ' : 'FAIL'), name); if (!cond) ok = false; };

const mock = spawn('python3', ['tools/mock_lm_studio.py', String(MOCK_PORT)], { cwd: repoRoot, stdio: 'ignore' });
procs.push(mock);
if (!await ready(MOCK_PORT)) { console.error('FAIL mock LM Studio never came up'); process.exit(1); }

const server = spawn('python3', ['workflow/server.py'], {
  cwd: repoRoot,
  env: { ...process.env, WORKFLOW_PORT: String(SERVER_PORT), WORKFLOW_HOST: '127.0.0.1', LM_STUDIO_URL: `http://127.0.0.1:${MOCK_PORT}` },
  stdio: 'ignore',
});
procs.push(server);
let up = false;
for (let i = 0; i < 60 && !up; i++) { try { const r = await fetch(`http://127.0.0.1:${SERVER_PORT}/api/health`); up = r.ok; } catch { await wait(250); } }
if (!up) { console.error('FAIL workflow server never came up'); cleanup(); process.exit(1); }

// ---- the page ----
const page = await (await fetch(`http://127.0.0.1:${SERVER_PORT}/roleplay`)).text();
check('GET /roleplay serves the roleplay page', page.includes('Waluipedia Roleplay') && page.includes('Group chat'));
check('page: the logic block and the wiring block both present', page.includes('id="rp-logic"') && page.includes('id="rp-app"'));
const home = await (await fetch(`http://127.0.0.1:${SERVER_PORT}/`)).text();
check('the assistant page links to the roleplay page', home.includes('/roleplay'));

// ---- the archive cast ----
const cast = await (await fetch(`http://127.0.0.1:${SERVER_PORT}/api/characters`)).json();
check('GET /api/characters serves the whole archive cast', cast.characters.length >= 180);
const one = cast.characters[0];
check('cast: image URLs point at the static route', one.image.startsWith('/rm/portraits/'));
const portrait = await fetch(`http://127.0.0.1:${SERVER_PORT}${one.image}`);
check('static: the portrait actually serves as an image', portrait.ok && (portrait.headers.get('content-type') || '').startsWith('image/'));

// ---- the scenes ----
const scenes = await (await fetch(`http://127.0.0.1:${SERVER_PORT}/api/scenes`)).json();
check('GET /api/scenes serves scene starters', scenes.scenes.length === 12 && scenes.scenes[0].name && scenes.scenes[0].image.startsWith('/rm/assets/'));
const plate = await fetch(`http://127.0.0.1:${SERVER_PORT}${scenes.scenes[0].image}`);
check('static: the scene plate serves', plate.ok && (plate.headers.get('content-type') || '').startsWith('image/'));

// ---- traversal guard ----
const bad = await fetch(`http://127.0.0.1:${SERVER_PORT}/rm/../workflow/server.py`);
check('static: path traversal is refused', bad.status === 404 || bad.status === 400);

// ---- one full roleplay turn through the mock model ----
const reply = await fetch(`http://127.0.0.1:${SERVER_PORT}/api/roleplay`, {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ system: 'You are Sans.', messages: [{ role: 'user', content: 'who are you' }], temperature: 0.9, max_tokens: 300 }),
});
const replyJson = await reply.json();
check('POST /api/roleplay answers from the model', reply.ok && /^MOCK-MODEL REPLY #/.test(replyJson.text || ''));

// ---- validation ----
const badPayload = await fetch(`http://127.0.0.1:${SERVER_PORT}/api/roleplay`, {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ messages: [] }),
});
check('POST /api/roleplay rejects empty messages with 400', badPayload.status === 400 && (await badPayload.json()).error);

cleanup();
console.log(ok ? 'ALL ROLEPLAY SERVER TESTS PASS' : 'ROLEPLAY SERVER TESTS FAILED');
process.exit(ok ? 0 : 1);
