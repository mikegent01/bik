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

// MOCK_DIRECTIVES makes the mock append stage directions to any roleplay
// turn, so the whole path — parse, apply, strip, render — is exercised.
procs.push(spawn('python3', ['tools/mock_lm_studio.py', String(MOCK_PORT)], {
  cwd: repoRoot, stdio: 'ignore',
  env: {
    ...process.env,
    MOCK_DIRECTIVES: '[[HP: {{WHO}} -25]]\n[[FLAG: {{WHO}} bleeding]]\n' +
      '[[NEW: Marguerite Oyle | the studio night archivist | wiry, sixty, ink to the elbows, a stopwatch on a bootlace]]',
  },
}));
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
// The saved state, or an empty one before the first write.
const savedState = () => JSON.parse(win.localStorage.getItem('waluipedia-chatroom-v1') || '{}');
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
// (A character summary may contain the word "advertisement" — the check is
// structural: no ad slot, no ad heading, no hide-ads control, anywhere.)
check('dashboard: the advertisement slot is gone',
  !doc.querySelector('.adslot') && !/Hide ads/.test(pageHtml) && !/adslot/.test(pageHtml) &&
  ![...doc.querySelectorAll('.sec-head h2')].some(h => /^advertisement$/i.test(h.textContent.trim())));
// The white bar: .modal-back sets display:grid, which used to beat [hidden].
check('layout: the hidden modal and the hidden chat view really are hidden',
  win.getComputedStyle($('modalBack')).display === 'none' && win.getComputedStyle($('chatview')).display === 'none');

// ---- the What-If board, where the ads used to be ----
const boardReady = await until('the What-If board', () => doc.querySelectorAll('.ifcard').length >= 3, 200);
check('what-if: a few long scenarios render where the advertisement was', boardReady);
check('what-if: every card carries a real premise, a cast and a beat count',
  [...doc.querySelectorAll('.ifcard')].every(card =>
    card.querySelector('.premise').textContent.length > 120 &&
    card.querySelectorAll('.faces .av').length >= 2 &&
    /\d+ beats/.test(card.querySelector('.len').textContent)));
check('what-if: the board mixes its engines instead of repeating one',
  new Set([...doc.querySelectorAll('.ifcard .kind')].map(k => k.textContent.split('·')[0].trim())).size >= 3);
check('what-if: the wanted-pages engine offers people the archive never wrote up',
  $('dashBody').textContent.includes('finally met') || $('dashBody').textContent.includes('Wanted page'));

doc.querySelector('[data-ifread]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('what-if: the brief opens in full, with the script and the questions',
  !$('modalBack').hidden && doc.querySelector('.modal .brief').textContent.length > 900 &&
  doc.querySelectorAll('.modal .stack .item').length >= 3);
$('mCancel').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));

// ---- the opener is written by the model, from the filed material ----
const hookCard = doc.querySelector('[data-ifhook]');
const hookId = hookCard.dataset.ifhook;
hookCard.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
await until('the model to write an opener', () => (savedState().hooks || {})[hookId]);
const hooked = (savedState().hooks || {})[hookId];
check('hook: the card asks the model for an opener and keeps it', Boolean(hooked && hooked.open.length > 10));
check('hook: the forged opener replaces the generic premise on the card',
  [...doc.querySelectorAll('.ifcard .premise.hooked')].length >= 1);

// ---- play it, with a starting state ----
[...doc.querySelectorAll('[data-ifplay]')].find(b => b.dataset.ifplay === hookId)
  .dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('what-if: playing one preselects its own cast', doc.querySelectorAll('.pick.on').length >= 2);
check('setup: the cast picker offers a starting state', Boolean($('pickSetup')));
$('pickSetup').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('setup: every picked character gets a row', doc.querySelectorAll('.setuprow').length >= 2);
const firstRow = doc.querySelector('.setuprow');
const firstName = firstRow.querySelector('b').textContent;
firstRow.querySelector('[data-k=hpPct]').value = '50';
firstRow.querySelector('[data-k=flags]').value = 'wounded';
firstRow.querySelector('[data-k=items]').value = 'the brass key';
$('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
await until('the scenario room to open', () => !$('chatview').hidden);
check('what-if: the room opens on the scenario, with its beats loaded', (() => {
  const saved = savedState();
  const r = saved.rooms.find(x => x.id === saved.active);
  return r.beats.length >= 3 && r.sceneName && saved.log.some(e => e.kind === 'whatif');
})());
check('state: the scenario starts the named character at half health, wounded, carrying', (() => {
  const saved = savedState();
  const r = saved.rooms.find(x => x.id === saved.active);
  const sheet = Object.values(r.states).find(x => x.name === firstName);
  return sheet.hp.value === 50 && sheet.flags.wounded && sheet.items[0] === 'the brass key';
})());
check('state: the sheets are visible in the chat, with bars and conditions',
  !$('statebar').hidden && doc.querySelectorAll('.statebar .sheet').length >= 2 &&
  doc.querySelector('.statebar .pool .num').textContent.includes('HP') &&
  $('statebar').textContent.includes('wounded'));

// ---- a turn, with stage directions coming back from the model ----
const beforeHp = (() => {
  const saved = savedState();
  const r = saved.rooms.find(x => x.id === saved.active);
  return Object.values(r.states).find(x => x.name === firstName).hp.value;
})();
win.MOCK_TARGET = firstName;
$('input').value = 'I go at them with the broken blade.';
$('composer').dispatchEvent(new win.Event('submit', { bubbles: true, cancelable: true }));
await until('the model to answer the state turn', () => doc.querySelectorAll('.turn.char').length >= 1);
await wait(300);
check('state: the model’s stage directions changed the sheet', (() => {
  const saved = savedState();
  const r = saved.rooms.find(x => x.id === saved.active);
  const sheet = Object.values(r.states).find(x => x.name === firstName);
  return sheet.hp.value === Math.max(0, beforeHp - 25) && sheet.flags.bleeding === true;
})());
check('state: the change is reported in the stream and stripped from the prose',
  doc.querySelector('.statelog:not(.fate)') && /−25 HP|-25 HP/.test(doc.querySelector('.statelog:not(.fate)').textContent) &&
  !doc.querySelector('.turn.char .bubble').textContent.includes('[[HP'));
check('state: a sheet can also be edited by hand', (() => {
  doc.querySelector('.statebar .sheet').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const open = Boolean($('f_hp'));
  if (open) { $('f_hp').value = '7/100'; $('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true })); }
  const saved = savedState();
  const r = saved.rooms.find(x => x.id === saved.active);
  return open && Object.values(r.states)[0].hp.value === 7;
})());

check('fate: the roll is shown to the reader and the model was told the outcome',
  Boolean(doc.querySelector('.statelog.fate .roll')) &&
  /Triumph|It works|price|wrench|fails|Refused/.test(doc.querySelector('.statelog.fate .roll').textContent));
check('invented: a character the model made up joined the cast, described not drawn', (() => {
  const s = savedState();
  const r = s.rooms.find(x => x.id === s.active);
  const made = (r.cast || []).find(c => c.invented);
  return Boolean(made) && made.look.includes('stopwatch') && !made.image && Boolean(r.states[made.id]) &&
    (s.newChars || []).some(c => c.id === made.id);
})());
check('invented: the panel prints the description in place of a portrait',
  $('charpanel').textContent.includes('Described, not drawn') && $('charpanel').textContent.includes('Marguerite Oyle'));
check('invented: they are on the state bar like everyone else', $('statebar').textContent.includes('Marguerite Oyle'));

check('chat: the in-world date of the scene is shown and editable',
  Boolean($('dateBtn')) && /BF|undated/.test($('dateBtn').textContent));
check('memory: the room stamps its memories with that date', (() => {
  const s = savedState();
  const r = s.rooms.find(x => x.id === s.active);
  const mem = (s.chars || []).find(c => (c.notes || []).length);
  return Boolean(mem) && mem.notes.some(n => typeof n.when === 'string');
})());

// ---- the sequel carries the scene forward ----
check('sequel: the chat offers one', Boolean($('seqBtn')));
$('seqBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
$('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
const sequelReady = await until('the sequel to be composed', () =>
  (savedState().scenarios || [])
    .some(x => x.kind === 'sequel'));
check('sequel: it is composed from the played scene and carries the sheets', (() => {
  const saved = savedState();
  const seq = (saved.scenarios || []).find(x => x.kind === 'sequel');
  return sequelReady && seq.brief.includes('How it ended') && seq.states &&
    Object.values(seq.states).some(x => x.flags && x.flags.bleeding);
})());
if (!$('modalBack').hidden) $('mCancel').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
$('homeBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));

// ---- continuations ----
[...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'continue').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('continuation: the saga board picks the record up where it stops',
  doc.querySelectorAll('.ifcard').length >= 1 && $('dashBody').textContent.includes('Continue the story') &&
  [...doc.querySelectorAll('.ifcard h3')].some(h => /Continue —/.test(h.textContent)));
doc.querySelector('[data-ifread]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('continuation: the brief says where the record stops and what it left behind',
  doc.querySelector('.modal .brief').textContent.includes('Where the record stops') &&
  /How the last filing ended|What it left behind/.test(doc.querySelector('.modal .brief').textContent));
$('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
$('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
await until('the continuation room', () => !$('chatview').hidden);
check('continuation: the room is told it is writing new canon, and may invent people', (() => {
  const s = savedState();
  const r = s.rooms.find(x => x.id === s.active);
  return r.canon === 'continuation' && r.beats.length >= 4;
})());
$('homeBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));

// ---- backfills ----
[...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'backfills').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('backfill: the board lists unwritten events with full briefs',
  doc.querySelectorAll('.ifcard').length >= 3 &&
  [...doc.querySelectorAll('.ifcard')].every(c => c.querySelector('.premise').textContent.length > 120) &&
  $('dashBody').textContent.includes('Most Used Backfills'));
[...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'discover').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('backfill: the dashboard carries the section too', $('dashBody').textContent.includes('Most Used Backfills'));

// ---- write your own, composed by the page (no model call) ----
$('makeIf').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
$('f_text').value = 'What if the Pond Patrol raided the Midlands Diet during the Iron Mandate vote and Waluigi was in the gallery? Who gets arrested first?';
$('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
await wait(200);
const composed = (savedState().scenarios || []).find(x => x.kind === 'custom');
check('create: describing a scenario composes a full brief from the archive',
  Boolean(composed) && composed.brief.length > 700 && composed.brief.includes('Midlands Diet') &&
  composed.beats.length >= 3);
check('create: the written scenario is saved and joins the board',
  (savedState().scenarios || []).some(x => x.kind === 'custom'));
$('mCancel').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
$('homeBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
[...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'wire').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));

// ---- the WAHwire tab keeps the sorting and the unused view ----
const wireReady = await until('the wire to load', () => doc.querySelectorAll('[data-post]').length > 0);
check('wire: the Wire tab lists the filed posts', wireReady && $('dashBody').innerHTML.includes('WAHwire'));
check('wire: sorting and the used/unused views are offered',
  Boolean($('wireSort')) && Boolean(doc.querySelector('[data-wireview="unused"]')) && Boolean(doc.querySelector('[data-wireview="used"]')));
check('wire: the default order is newest first', $('wireSort').value === 'newest');
check('wire: unused posts are marked, with a count', doc.querySelector('.wcard .new').textContent === 'unused' &&
  /Unused \(\d+\)/.test($('dashBody').textContent));
const firstPost = doc.querySelector('[data-post]').dataset.post;
doc.querySelector('[data-wireview="used"]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('wire: the "already played" view is empty before anything is played',
  $('dashBody').textContent.includes('No posts match this view'));
doc.querySelector('[data-wireview="all"]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
const sortNode = $('wireSort');
sortNode.value = 'oldest';
sortNode.dispatchEvent(new win.Event('change', { bubbles: true }));
check('wire: changing the sort reorders the cards', doc.querySelector('[data-post]').dataset.post !== firstPost);

// ---- browsing the cast ----
[...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'discover').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('cast browser: sort, grouping and facet controls are all offered',
  Boolean($('castSort')) && Boolean($('castGroup')) && Boolean($('castRace')) && Boolean($('castAffil')) &&
  doc.querySelectorAll('[data-castview]').length >= 4);
check('cast browser: the facets are built from the live archive',
  $('castRace').options.length > 3 && $('castAffil').options.length > 3);
const firstByName = doc.querySelector('.grid [data-char]').dataset.char;
$('castSort').value = 'fame';
$('castSort').dispatchEvent(new win.Event('change', { bubbles: true }));
check('cast browser: sorting by standing reorders the cast and relabels the cards',
  doc.querySelector('.grid [data-char]').dataset.char !== firstByName &&
  /★|power|filings|remembered/.test($('dashBody').textContent));
$('castGroup').value = 'race';
$('castGroup').dispatchEvent(new win.Event('change', { bubbles: true }));
const raceHeads = [...doc.querySelectorAll('.ltr-head')].map(h => h.textContent);
check('cast browser: grouping by race replaces the A–Z dividers',
  raceHeads.length > 2 && !raceHeads.every(h => /^[A-Z#]\s/.test(h)));
doc.querySelector('[data-castview="unplayed"]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
const unplayedCount = doc.querySelectorAll('.grid [data-char]').length;
doc.querySelector('[data-castview="played"]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('cast browser: played / never-played views split the archive by what you have done',
  doc.querySelectorAll('.grid [data-char]').length < unplayedCount);
$('castReset').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('cast browser: reset puts it back to A–Z',
  $('castSort').value === 'name' && $('castGroup').value === 'letter' && !$('castReset'));

// ---- the feed is dated twice ----
[...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'feed').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('feed: every line carries the in-world date and how long ago you played it',
  doc.querySelector('.item .when .inworld') && /ago|just now|\d{4}/.test(doc.querySelector('.item .when').textContent));
check('feed: the log can be filtered by kind', doc.querySelectorAll('[data-logkind]').length > 5);
doc.querySelector('[data-logkind="whatif"]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('feed: filtering by kind narrows it', $('dashBody').textContent.includes('whatif'));
doc.querySelector('[data-logkind="all"]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));

// ---- collections ----
[...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'collections').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('collections: the archive’s own groupings offer a cast in one click',
  doc.querySelectorAll('[data-collection]').length > 3 && $('dashBody').textContent.includes('Open as a group chat'));
[...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'wire').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));

// ---- playing a wire post marks it used ----
doc.querySelector('[data-post]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('wire: opening a post offers its own cast, preselected',
  !$('modalBack').hidden && doc.querySelectorAll('.pick.on').length > 0);
// Make sure the room is a group, so the director has someone to hand to.
for (const pick of [...doc.querySelectorAll('.pick:not(.on)')].slice(0, 2)) {
  pick.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
}
check('wire: the cast picker adds to the suggested cast', doc.querySelectorAll('.pick.on').length >= 2);
$('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('wire: the post opens a group chat with the post as the scene',
  !$('chatview').hidden && doc.querySelector('.scene-card').textContent.includes('WAHwire'));
check('wire: playing the post marks it used and files it in the log',
  Object.keys(savedState().usedPosts).length >= 1 &&
  savedState().log.some(e => e.kind === 'wire'));

// ---- the director hands the scene back instead of looping ----
$('input').value = 'What happened to the second saw?';
$('composer').dispatchEvent(new win.Event('submit', { bubbles: true, cancelable: true }));
const handback = await until('the director to hand back', () => doc.querySelector('.handback'));
check('director: after the reply chain the scene comes back to the player',
  Boolean(handback) && doc.querySelector('.handback').textContent.includes('Your turn'));
const played = savedState().rooms.find(r => r.id === savedState().active);
check('director: the chain stops at the ceiling, never runs away',
  played.messages.filter(m => m.role === 'char' && !m.error).length <= 4);

// back to the dashboard for the remaining checks
$('homeBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));

// ---- open a one-to-one chat ----
[...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'discover').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
const card = doc.querySelector('[data-char]');
const charId = card.dataset.char;
card.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('chat: clicking a card opens the chat view', !$('chatview').hidden && $('dash').hidden);
check('chat: the right-hand character panel carries the profile and the menu',
  $('charpanel').textContent.includes('New chat') && $('charpanel').textContent.includes('Persona') &&
  $('charpanel').textContent.includes('Pinned') && $('charpanel').textContent.includes('Style') &&
  $('charpanel').innerHTML.includes('By @'));
check('chat: the recents rail lists every chat', doc.querySelectorAll('[data-room]').length >= 3);

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
const stored = () => savedState();
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

// ---- the routes the wire and the collections use ----
const wireJson = await (await fetch(`http://127.0.0.1:${SERVER_PORT}/api/wahwire`)).json();
check('GET /api/wahwire serves the filed posts and the author profiles',
  wireJson.posts.length > 100 && wireJson.posts[0].content && Object.keys(wireJson.profiles).length > 10);
const collectionsJson = await (await fetch(`http://127.0.0.1:${SERVER_PORT}/api/collections`)).json();
check('GET /api/collections serves collections with resolvable members',
  collectionsJson.collections.length > 5 && collectionsJson.collections[0].members[0].id);

// ---- CORS, for the static build talking to this server from :8765 ----
const preflight = await fetch(`http://127.0.0.1:${SERVER_PORT}/api/roleplay`, { method: 'OPTIONS' });
check('cors: the static chatroom page may call this server',
  preflight.status === 204 && preflight.headers.get('access-control-allow-origin') === '*');

cleanup();
console.log(ok ? 'ALL CHATROOM PAGE TESTS PASS' : 'CHATROOM PAGE TESTS FAILED');
process.exit(ok ? 0 : 1);
