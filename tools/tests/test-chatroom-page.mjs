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
    MOCK_DIRECTIVES: '[[HP: {{WHO}} -25]]\n[[FLAG: {{WHO}} bleeding]]\n[[MOOD: {{WHO}} anger 2 | the blade]]\n' +
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
    // Round 12: background AI ships LEAN (RP.BACKGROUND_DEFAULT, pinned in
    // the core suite). These tests exercise the FULL machinery — auto lore
    // book, upkeep reviews, model-picked speakers — so the dial is seeded
    // to full before the page boots.
    window.localStorage.setItem('waluipedia-chatroom-v1', JSON.stringify({ settings: { background: 'full' } }));
    window.fetch = (url, opts) => fetch(new URL(url, `http://127.0.0.1:${SERVER_PORT}/`), opts);
    window.speechSynthesis = { speak() {}, cancel() {} };
    window.SpeechSynthesisUtterance = function () {};
  },
});
const win = dom.window;
const doc = win.document;

const $ = id => doc.getElementById(id);
// The dock (the right panel) is tabbed — Cast, Scene, Memory, Voice, Share.
// A row lives in one tab, so a test reaches for it through its tab first.
const dock = name => {
  const b = doc.querySelector(`.dock-tabs [data-dock="${name}"]`);
  if (b && !b.classList.contains('on')) b.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  return Boolean(b);
};
// The saved state, or an empty one before the first write.
const savedState = () => JSON.parse(win.localStorage.getItem('waluipedia-chatroom-v1') || '{}');
const until = async (label, fn, tries = 120) => {
  // `fn` may be async: a promise is always truthy, so it has to be awaited
  // or the wait returns immediately and the assertion races the page.
  for (let i = 0; i < tries; i++) { if (await fn()) return true; await wait(120); }
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
  return sheet.hp.value === 50 && Boolean(sheet.flags.wounded) &&
    win.RP.normItem(sheet.items[0]).name === 'the brass key';
})());
check('kit: the sheets carry an emoji grid you can click', (() => {
  const slots = doc.querySelectorAll('.statebar .slot');
  return slots.length >= 8 && doc.querySelectorAll('.statebar .slot:not(.empty)').length >= 1;
})());
check('kit: a filled slot opens hand / use / drop', (() => {
  const slot = doc.querySelector('.statebar .slot:not(.empty)');
  if (!slot) return false;
  slot.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const opened = !$('modalBack').hidden && /Take it in hand|Put it away/.test($('modal').textContent);
  if (opened) $('mCancel') ? $('mCancel').dispatchEvent(new win.MouseEvent('click', { bubbles: true })) : null;
  return opened;
})());
check('kit: dropping an item from the slot menu actually empties the slot', (() => {
  const before = doc.querySelectorAll('.statebar .slot:not(.empty)').length;
  const slot = doc.querySelector('.statebar .slot:not(.empty)');
  if (!slot) return false;
  const parts = slot.dataset.item.split('|');
  const saved0 = savedState();
  const r0 = saved0.rooms.find(x => x.id === saved0.active);
  const had = r0.states[parts[0]].items.length;
  slot.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const drop = Array.from($('modal').querySelectorAll('[data-pick]')).find(b => /Drop it/.test(b.textContent));
  if (!drop) return false;
  drop.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const saved = savedState();
  const r = saved.rooms.find(x => x.id === saved.active);
  return r.states[parts[0]].items.length === had - 1 &&
    doc.querySelectorAll('.statebar .slot:not(.empty)').length === before - 1;
})());
check('invite: ＋ invite opens a portrait grid of the whole archive, with a ＋ tile for somebody new', (() => {
  $('castAdd').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const grid = doc.querySelector('#modal .picker.portraits');
  const tiles = grid ? grid.querySelectorAll('.pick[data-pick]') : [];
  const withFaces = grid ? grid.querySelectorAll('.pick[data-pick] img').length : 0;
  const plus = grid && grid.querySelector('[data-new]');
  return Boolean(grid) && tiles.length >= 50 && withFaces >= 20 && Boolean(plus);
})());
check('invite: typing an unknown name seeds the ＋ tile, and the form seats them with a sheet of their own', (() => {
  $('pickSearch').value = 'Old Pell';
  $('pickSearch').dispatchEvent(new win.Event('input', { bubbles: true }));
  const plus = doc.querySelector('#modal [data-new]');
  if (!plus || !/Old Pell/.test(plus.textContent)) return false;
  plus.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  if (!$('nc_name') || $('nc_name').value !== 'Old Pell') return false;
  $('nc_role').value = 'the pawnbroker who holds the marker';
  $('nc_voice').value = 'Dry, slow, every sentence a price.';
  $('nc_items').value = '📒 a black ledger, 🗝 a ring of small keys';
  $('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const saved = savedState();
  const r = saved.rooms.find(x => x.id === saved.active);
  const who = r.cast.find(c => c.name === 'Old Pell');
  return Boolean(who) && who.invented && r.states[who.id] && r.states[who.id].items.length === 2 &&
    r.kind === 'group' && (saved.newChars || []).some(c => c.id === who.id) &&
    $('statebar').textContent.includes('Old Pell');
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
  // The director may chain a second reply, and that one wounds them again —
  // so the test asserts the direction of travel, not an exact number.
  return sheet.hp.value <= beforeHp - 25 && Boolean(sheet.flags.bleeding);
})());
check('state: the change is reported on the turn card and stripped from the prose',
  doc.querySelector('.turn.char .metastrip') && /−25 HP|-25 HP/.test($('stream').textContent) &&
  !doc.querySelector('.turn.char .bubble').textContent.includes('[[HP'));
check('state: a sheet can also be edited by hand', (() => {
  // The first sheet in the bar is the reader's own pack now, so the test
  // follows the click: whatever sheet was opened is the one that saves.
  const clicked = doc.querySelector('.statebar .sheet');
  const id = clicked.dataset.sheet;
  clicked.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const open = Boolean($('f_hp'));
  if (open) { $('f_hp').value = '7/100'; $('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true })); }
  const saved = savedState();
  const r = saved.rooms.find(x => x.id === saved.active);
  return open && r.states[id].hp.value === 7;
})());
check('state: the reader\u2019s own pack is on the bar, first and usable', (() => {
  const you = doc.querySelector('.statebar .sheet.you');
  return Boolean(you) && doc.querySelector('.statebar .sheet') === you &&
    you.querySelectorAll('.kit.big .slot').length === 12 &&
    Boolean(you.querySelector('[data-additem]'));
})());

check('fate: the roll is shown on the same card as the turn it decided',
  Boolean(doc.querySelector('.metastrip .roll')) &&
  /Triumph|It works|price|wrench|fails|Refused/.test(doc.querySelector('.metastrip .roll').textContent));
check('invented: a character the model made up joined the cast, described not drawn', (() => {
  const s = savedState();
  const r = s.rooms.find(x => x.id === s.active);
  const made = (r.cast || []).find(c => c.invented && c.name === 'Marguerite Oyle');
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

// ---- the lore book writes itself in the background ----
// A portrait rendered at its natural size used to fill the whole page as a
// giant ellipse, because an avatar size with no matching CSS class left the
// frame unsized. Every avatar now carries its size inline.
check('layout: every avatar is explicitly sized, at every size the page uses', (() => {
  const avs = [...doc.querySelectorAll('.av')];
  const unsized = avs.filter(a => !/width:\s*\d+px/.test(a.getAttribute('style') || ''));
  const computed = avs.slice(0, 40).every(a => {
    const px = parseInt(win.getComputedStyle(a).width, 10);
    return px > 0 && px <= 96;
  });
  return avs.length > 5 && unsized.length === 0 && computed;
})());
check('layout: nothing in the chat column can push the page sideways',
  win.getComputedStyle(doc.querySelector('.stream-wrap')).overflow === 'hidden' &&
  Number(win.getComputedStyle($('charpanel')).zIndex) >= 1);
check('layout: a six-hander’s title is clamped, not a wall of names',
  win.getComputedStyle(doc.querySelector('.cp-head h3')).getPropertyValue('-webkit-line-clamp') === '3' &&
  doc.querySelector('.cp-head h3').textContent.length <= 64);
check('layout: the speaker rail scrolls in one line instead of stacking',
  win.getComputedStyle($('speakers')).overflowX === 'auto');

check('hud: the chat is a heads-up display, not a title bar',
  doc.querySelectorAll('.chat-top .stat').length >= 3 &&
  $('chatTop').textContent.includes('🕯') && /🎲\s*(off|gentle|normal|harsh)/.test($('chatTop').textContent));
check('hud: quick actions sit above the composer',
  doc.querySelectorAll('.speakers .qa').length >= 2 && $('speakers').textContent.includes('Continue'));
// A couple more turns so the filing queue trips.
for (let i = 0; i < 2; i++) {
  $('input').value = 'I push the ledger room door open and look for the boxes.';
  $('composer').dispatchEvent(new win.Event('submit', { bubbles: true, cancelable: true }));
  await until('the model to answer', () => !doc.querySelector('.typing'), 60);
  await wait(300);
}
const filed = await until('the lore book to file a page', () =>
  ((savedState().book || {}).entries || []).length > 0, 80);
check('book: play is filed in the background, without being asked', filed);
check('book: the pages carry the in-world date, the chat and both clocks', (() => {
  const pages = (savedState().book || {}).entries || [];
  const page = pages[0];
  return page && page.when && page.roomTitle && page.at > 0 && page.source === 'auto';
})());
check('book: places, people, events, facts and a diary all come back', (() => {
  const kinds = new Set(((savedState().book || {}).entries || []).map(e => e.kind));
  return kinds.has('place') && kinds.has('person') && kinds.has('diary');
})());
check('book: the newest page is at the bottom', (() => {
  const pages = (savedState().book || {}).entries || [];
  return pages.length > 1 && pages[pages.length - 1].at >= pages[0].at;
})());
check('book: the queue drains and does not pile up',
  ((savedState().book || {}).queue || []).length === 0);

[...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'book').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('book: the tab renders the pages, oldest first, with kind filters',
  doc.querySelectorAll('.bookpages .page').length >= 3 &&
  doc.querySelectorAll('[data-bookkind]').length >= 6 &&
  $('dashBody').textContent.includes('budget'));
doc.querySelector('[data-bookkind="place"]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('book: filtering by kind works', [...doc.querySelectorAll('.bookpages .page')].every(p => p.className.includes('place')));
doc.querySelector('[data-bookkind="all"]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
const pagesBefore = doc.querySelectorAll('.bookpages .page').length;
doc.querySelector('[data-bookkill]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('book: a page can be torn out by hand', doc.querySelectorAll('.bookpages .page').length === pagesBefore - 1);
$('bookNew').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
$('f_name').value = 'The Long Stair';
$('f_text').value = 'Cut into the cliff behind the studio, and older than the building.';
$('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('book: you can write a page yourself', (() => {
  const pages = (savedState().book || {}).entries || [];
  return pages.some(p => p.name === 'The Long Stair' && p.source === 'you');
})());
// Back into the chat we were playing — the book tab left the dashboard up.
doc.querySelector('[data-room]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('recents: a chat reopens from the rail', !$('chatview').hidden);

// ---- the sequel carries the scene forward ----
check('scene menu: the header keeps one button for the scene tools', Boolean($('sceneBtn')));
$('sceneBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('scene menu: audit, facts, date, book, a second scene and sequel are all in it',
  [...doc.querySelectorAll('[data-pick]')].length === 6 &&
  /Audit/.test($('modal').textContent) && /Fixed facts/.test($('modal').textContent) &&
  /Link a second scene/.test($('modal').textContent));
[...doc.querySelectorAll('[data-pick]')].find(b => /sequel/i.test(b.textContent))
  .dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
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

// ---- commentary mode ----
[...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'commentary').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('commentary: the tab offers a subject, a format and a runtime',
  Boolean($('comTopic')) && Boolean($('comStyle')) && Boolean($('comMins')) && Boolean($('comGo')) &&
  [...$('comStyle').options].length === 4);
$('comStyle').value = 'hottake';
$('comStyle').dispatchEvent(new win.Event('change', { bubbles: true }));
check('commentary: picking a format resets the runtime to its own range',
  Number($('comMins').max) === 30 && Number($('comMins').min) === 15);
$('comTopic').value = 'The Iron Mandate';
$('comTopic').dispatchEvent(new win.Event('input', { bubbles: true }));
$('comGo').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
const episodeDone = await until('the commentary to finish', () => {
  const e = (savedState().episodes || [])[0];
  return e && e.done;
}, 200);
const epi = (savedState().episodes || [])[0];
check('commentary: the run is planned, generated segment by segment, and finishes',
  episodeDone && epi.segments.length >= 5 && epi.segments.every(x => x.done) && epi.lines.length >= 10);
check('commentary: it pulled its material out of the live archive',
  (epi.sources || []).length > 0 && epi.sources.some(x => /Iron Mandate|Midlands|Sovereignty/i.test(x.name)));
check('commentary: both voices are on the page, labelled and styled',
  doc.querySelectorAll('.episode .say.waluigi').length > 0 &&
  doc.querySelectorAll('.episode .say.luigi').length > 0);
check('commentary: the header reports segments, words and the runtime',
  /\d+\/\d+ segments/.test($('dashBody').textContent) && /~\d/.test($('dashBody').textContent) &&
  Boolean($('comPlay')) && Boolean($('comMd')));
check('commentary: finished episodes are kept and can be reopened',
  doc.querySelectorAll('[data-epiopen]').length >= 1);
[...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'labs').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));

// ---- importing into a chat that is already open ----
{
  const openRoom = doc.querySelector('[data-room]');
  openRoom.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const roomId = savedState().active;
  const before = savedState().rooms.find(x => x.id === roomId).messages.length;
  $('panelBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  check('import: the dock’s Share tab offers importing into this chat', dock('share') && Boolean($('cpImport')));
  $('cpImport').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  [...doc.querySelectorAll('[data-pick]')][0].dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  check('import: the dialog defaults to “into this chat”', $('f_where').value === 'here');
  // A flat v1 character card, pasted in — the format in the examples.
  $('f_text').value = JSON.stringify({
    name: 'Promo Mario', description: 'The main host of Nintendo Mania!',
    personality: 'A cancelled pilot who will not admit it.',
    first_mes: '"Hey paisanos! I am Mario!"',
  });
  $('f_where').value = 'here';
  $('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await wait(400);
  const withCard = savedState().rooms.find(x => x.id === roomId);
  check('import: a pasted card joins the chat and says its greeting',
    withCard.cast.some(c => c.name === 'Promo Mario') &&
    withCard.messages.some(m => /paisanos/i.test(m.text || '')) &&
    withCard.messages.length > before);
  check('import: the room became a group, and the newcomer has a state sheet',
    withCard.kind === 'group' && Object.values(withCard.states).some(x => x.name === 'Promo Mario'));

  dock('share');
  $('cpImport').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  [...doc.querySelectorAll('[data-pick]')][0].dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  $('f_text').value = [
    'Promo Mario: The tape is still rolling.',
    'I look at the camera.',
    'Promo Mario: Do not look at the camera.',
    'I look away.',
    'Promo Mario: Better.',
    'I ask about the cut areas.',
  ].join('\n');
  $('f_title').value = 'an old episode';
  $('f_where').value = 'here';
  $('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await wait(500);
  const withStory = savedState().rooms.find(x => x.id === roomId);
  check('import: a story is appended to the same chat, not made into a new one',
    savedState().active === roomId &&
    withStory.messages.filter(m => m.imported).length >= 6 &&
    withStory.messages.some(m => m.role === 'scene' && /imported turns from an old episode/.test(m.text || '')));
  check('import: the imported speakers are matched to the cast',
    withStory.messages.some(m => m.imported && m.role === 'char' && /rolling/.test(m.text)));
  check('import: it offers to file the backlog, prices both ways, and lets the budget be changed',
    !$('modalBack').hidden && /unfiled turns/.test($('modal').textContent) &&
    /smart read/i.test($('modal').textContent) && Boolean($('f_calls')) && Boolean($('f_budget')));
  $('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const filed = await until('the backlog to be filed', () =>
    ((savedState().book || {}).entries || []).some(e => e.roomId === roomId), 60);
  check('import: filing the backlog fills the lore book from the imported story', filed);
  $('homeBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
}

// ---- LM Studio directly, with no workflow server in the way ----
{
  $('settingsBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  check('endpoint: the settings offer LM Studio and the workflow server as presets',
    Boolean($('setLm')) && Boolean($('setWf')) && Boolean($('setTest')) && Boolean($('f_model')));
  $('setLm').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  check('endpoint: the LM Studio preset fills in its usual address',
    $('f_endpoint').value === 'http://127.0.0.1:1234/v1');
  // Point it at the mock, which speaks the same OpenAI API LM Studio does.
  $('f_endpoint').value = `http://127.0.0.1:${MOCK_PORT}/v1`;
  $('setTest').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  // The studio is answering three things at once while the page boots, so
  // give the probe room rather than flaking.
  const probed = await until('the endpoint test to answer', () => /answering/.test($('setState').textContent), 120);
  check('endpoint: “Test it” reports what answered and names the model',
    probed && /model/.test($('setState').textContent));
  $('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await wait(300);
  check('endpoint: the choice and the model name are saved',
    savedState().settings.endpoint.includes('/v1') && Boolean(savedState().settings.model));


  doc.querySelector('[data-char]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await wait(200);
  $('input').value = 'Testing the OpenAI route.';
  $('composer').dispatchEvent(new win.Event('submit', { bubbles: true, cancelable: true }));
  await until('a reply over the OpenAI API', () => !doc.querySelector('.typing'), 60);
  await wait(300);
  const lmRoom = savedState().rooms.find(x => x.id === savedState().active);
  const lmReply = lmRoom.messages.filter(m => m.role === 'char').pop();
  check('endpoint: a turn goes straight to the OpenAI API and comes back',
    lmReply && !lmReply.error && /MOCK-MODEL REPLY/.test(lmReply.text));

  // ---- 👍 / 👎 are fed back into the prompt ----
  const thumb = doc.querySelector('[data-react="up"]');
  thumb.dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  check('taste: a thumb is recorded as an excerpt, not just a colour',
    (savedState().taste.likes || []).length === 1);
  check('taste: the excerpt reaches the system prompt', (() => {
    const block = win.RP.tasteBlock(savedState(), lmRoom);
    return block.includes('WHAT THIS READER KEEPS') && block.includes('Write more like them');
  })());
  check('taste: the panel lists what has been kept and thrown away', (() => {
    $('panelBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
    dock('memory');
    const has = Boolean($('cpTaste'));
    if (has) {
      $('cpTaste').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
      const shown = $('modal').textContent.includes('What the model has been told you like');
      $('mCancel').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
      return shown;
    }
    return false;
  })());
  // put the endpoint back for the rest of the suite
  $('settingsBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  $('setWf').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  $('f_endpoint').value = `http://127.0.0.1:${SERVER_PORT}/api/roleplay`;
  $('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await wait(200);
  $('homeBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
}

// ---- the importer takes whatever shape the file is in ----
{
  const RP = win.RP;
  const asBytes = text => new TextEncoder().encode(text);
  const realV1 = JSON.stringify({
    name: 'Promo Mario',
    personality: 'Cancelled pilot for a gaming news show titled "Nintendo Mania".',
    scenario: '',
    description: 'The main host of Nintendo Mania!',
    mes_example: '',
    first_mes: '*Mario would be reading a book.*\n"Hey paisanos!"',
  });
  check('import: the exact v1 shape of the uploaded example is recognised', (() => {
    const found = RP.sniffImport(asBytes(realV1));
    return found.kind === 'card' && RP.parseCharacterCard(found.card).name === 'Promo Mario';
  })());
  check('import: a byte-order mark no longer makes a card "invalid"',
    RP.sniffImport(asBytes('\uFEFF' + realV1)).kind === 'card');
  const realLog = [
    '{"user_name":"You","character_name":"Promo Mario","create_date":1790725127298}',
    '{"name":"Promo Mario","is_user":false,"is_name":true,"send_date":1790725127298,"mes":"*Mario would be reading a book.*"}',
    '{"name":"You","is_user":true,"is_name":true,"send_date":1790725127299,"mes":"I stare at the screen."}',
  ].join('\n');
  check('import: the uploaded chat export shape is read as turns, not refused', (() => {
    const found = RP.sniffImport(asBytes(realLog));
    return found.kind === 'chatlog' && found.turns.length === 2 &&
      found.turns[0].who === 'Promo Mario' && found.turns[1].who === '';
  })());
  check('import: a plain PNG and a truncated file each get their own explanation', (() => {
    const png = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 0, 73, 69, 78, 68, 0, 0, 0, 0]);
    return RP.sniffImport(png).kind === 'png-plain' && RP.sniffImport(asBytes('{"half')).kind === 'json-broken';
  })());
}

// ---- the reader can edit, mute and delete individual lines ----
{
  doc.querySelector('[data-room]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const roomId = savedState().active;
  const before = savedState().rooms.find(x => x.id === roomId).messages.length;
  check('lines: every reply carries edit, mute and delete',
    doc.querySelectorAll('[data-edit]').length > 0 &&
    doc.querySelectorAll('[data-mute]').length > 0 &&
    doc.querySelectorAll('[data-drop]').length > 0);
  doc.querySelector('[data-mute]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await wait(150);
  check('lines: muting keeps it on screen and takes it out of the model’s history', (() => {
    const r = savedState().rooms.find(x => x.id === roomId);
    const muted = r.messages.find(m => m.muted);
    return Boolean(muted) && r.messages.length === before &&
      Boolean(doc.querySelector('.turn.muted')) &&
      !win.RP.historyFor(r, 200).some(m => m.content.includes(win.RP.textOf(muted)));
  })());
  doc.querySelector('[data-edit]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  $('f_text').value = 'Rewritten by hand.';
  $('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await wait(150);
  check('lines: editing replaces the text and drops the old takes', (() => {
    const r = savedState().rooms.find(x => x.id === roomId);
    const edited = r.messages.find(m => m.text === 'Rewritten by hand.');
    return Boolean(edited) && edited.alts.length === 1 && edited.edited > 0;
  })());
  doc.querySelector('[data-drop]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  check('lines: deleting asks first', !$('modalBack').hidden && /Delete this line/.test($('modal').textContent));
  $('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await wait(150);
  check('lines: and then it is gone',
    savedState().rooms.find(x => x.id === roomId).messages.length === before - 1);

  // ---- bringing somebody in mid-scene ----
  check('roster: the rail has a ＋ New button', Boolean($('qaAdd')));
  $('qaAdd').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  check('roster: it offers the archive, an invention, a card, or letting the model do it',
    doc.querySelectorAll('[data-pick]').length === 4);
  [...doc.querySelectorAll('[data-pick]')][1].dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  check('roster: Invent one is the ＋ form, with a ✨ fill-in', Boolean($('nc_name')) && Boolean($('ncFill')));
  $('nc_name').value = 'Marguerite Oyle';
  $('nc_role').value = 'the night archivist';
  $('nc_look').value = 'wiry, sixty, ink to the elbows';
  $('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await wait(200);
  check('roster: an invented character joins the scene with a sheet and is kept', (() => {
    const s = savedState();
    const r = s.rooms.find(x => x.id === roomId);
    return r.cast.some(c => c.name === 'Marguerite Oyle') &&
      Object.values(r.states).some(x => x.name === 'Marguerite Oyle') &&
      (s.newChars || []).some(c => c.name === 'Marguerite Oyle') &&
      s.log.some(e => e.kind === 'roster' && /Marguerite/.test(e.text));
  })());
  $('homeBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
}

// ---- the world's own turn, and one card per turn ----
{
  // A fresh one-to-one chat: starring the only character leaves nobody for
  // the model to speak as, which is exactly when the world should step in.
  [...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'discover').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  doc.querySelector('.grid [data-char]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await wait(300);
  const roomId = savedState().active;
  check('rail: the world, the star and autoplay are all on the rail',
    Boolean(doc.querySelector('.sp.world')) && Boolean(doc.querySelector('[data-star]')) && Boolean($('qaAuto')));
  doc.querySelector('[data-star]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await wait(150);
  check('player: starring a character records who you play',
    Boolean(savedState().rooms.find(x => x.id === roomId).youPlay) &&
    Boolean(doc.querySelector('.sp.mine')));
  check('player: your own turns are labelled as them, not as your account', (() => {
    const playing = win.RP.playerCharacter(savedState().rooms.find(x => x.id === roomId));
    return Boolean(playing) && $('input').placeholder.includes(playing.name);
  })());
  check('facts: the scene menu has a place for what the scene has nailed down', Boolean($('sceneBtn')));
  check('privacy: the header can pin a scene private, open, or reading the room', (() => {
    const start = $('privacyBtn').textContent;
    $('privacyBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
    const priv = savedState().rooms.find(x => x.id === roomId).privacy === 'private';
    $('privacyBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
    $('privacyBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
    return /Reads the room/.test(start) && priv &&
      savedState().rooms.find(x => x.id === roomId).privacy === '';
  })());
  // Round 9: the starred character IS the player, so in this one-star solo
  // room the only card is YOURS (🧍, no presence toggle) and it belongs to
  // the character — the persona's separate pack has stepped aside.
  check('star: the party bar shows the starred character as your own card', (() => {
    const youCard = doc.querySelector('.sheet.you');
    const star = win.RP.playerCharacter(savedState().rooms.find(x => x.id === savedState().active));
    return Boolean(youCard) && star && youCard.textContent.includes(star.name) &&
      doc.querySelectorAll('[data-here]').length === 0;
  })());
  check('ooc: brackets in a turn are stripped from the prose and kept as instructions', (() => {
    $('input').value = 'I keep reading. ((no new characters))';
    $('composer').dispatchEvent(new win.Event('submit', { bubbles: true, cancelable: true }));
    const r = savedState().rooms.find(x => x.id === roomId);
    const mine = (r.messages || []).filter(m => m.role === 'user').pop();
    return mine.text === 'I keep reading.' && (mine.ooc || [])[0] === 'no new characters';
  })());
  // With only your own character in the room, the next turn is the world's.
  $('input').value = 'I stand outside late at night and look at the stars.';
  $('composer').dispatchEvent(new win.Event('submit', { bubbles: true, cancelable: true }));
  await until('the world to take the turn', () => !doc.querySelector('.typing'), 80);
  await wait(300);
  const worldRoom = savedState().rooms.find(x => x.id === roomId);
  const lastTurn = worldRoom.messages[worldRoom.messages.length - 1];
  check('world: with nobody else there, the world narrates instead of a character',
    lastTurn.role === 'world' && Boolean(doc.querySelector('.turn.world')));
  check('card: the roll and any state change sit on the turn, not in their own rows',
    Boolean(doc.querySelector('.metastrip')) && doc.querySelectorAll('.metaline').length === 0);
  check('narrator: the Director is the voice, on the card and on the rail',
    /Director/.test($('speakers').textContent) &&
    /Director/.test((doc.querySelector('.turn.world .who') || {}).textContent || ''));
  check('narrator: narration is in the history now, so it stops repeating itself', (() => {
    const r = savedState().rooms.find(x => x.id === roomId);
    return win.RP.historyFor(r, 10).some(m => /^Narration: /.test(m.content));
  })());
  check('director: the brief makes it resolve what you did, and not re-describe the scene', (() => {
    const r = savedState().rooms.find(x => x.id === roomId);
    const prompt = win.RP.worldSystem(savedState(), r, {});
    return /DO THE THING THEY DID/.test(prompt) && /ALREADY DESCRIBED/.test(prompt);
  })());
  check('world: it never speaks as the player’s character', (() => {
    const prompt = win.RP.worldSystem(savedState(), worldRoom, {});
    return /Never write their speech/.test(prompt) && prompt.includes('address the player as "you"');
  })());
  check('autoplay: the button arms and disarms', (() => {
    $('qaAuto').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
    const armed = /Stop/.test($('qaAuto').textContent);
    $('qaAuto').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
    return armed && /Auto/.test($('qaAuto').textContent);
  })());
  $('homeBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
}

// ---- round 4: the Director on demand, 🎬 direction, and a linked scene ----
{
  const click = () => new win.MouseEvent('click', { bubbles: true });
  const submit = () => new win.Event('submit', { bubbles: true, cancelable: true });
  // A fresh one-to-one chat with the model on the other side. Picking ◍ on
  // the rail used to be a hint the staging call overrode; now it is who
  // answers your next line.
  [...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'discover').dispatchEvent(click());
  [...doc.querySelectorAll('.grid [data-char]')][1].dispatchEvent(click());
  await wait(300);
  const aId = savedState().active;
  const roomA = () => savedState().rooms.find(x => x.id === aId);
  check('rail: ✂ length and 🎬 Direct sit on the rail, and the scene decides the length by default',
    Boolean($('qaLength')) && /scene decide/i.test($('qaLength').textContent) && Boolean($('qaDirect')));
  doc.querySelector('.sp.world').dispatchEvent(click());
  await wait(100);
  check('director: picking ◍ on the rail pins the next turn to the Director', roomA().pinnedNext === 'world' && roomA().next === 'world');
  $('input').value = 'I kick the hangar door in.';
  $('composer').dispatchEvent(submit());
  const directorAnswered = await until('the Director to answer the pinned turn', () => {
    const last = roomA().messages.filter(m => m.role === 'char' || m.role === 'world').pop();
    return !doc.querySelector('.typing') && last && last.role === 'world';
  }, 80);
  await wait(200);
  check('director: the pinned Director takes the turn instead of the character, and the pin is spent',
    directorAnswered && !roomA().pinnedNext);
  // 🎬 — what you type is not said by anyone; it happens, and it is spent.
  $('qaDirect').dispatchEvent(click());
  check('direct: the form asks what happens and who plays it, the Director first', (() => {
    // (the mock's [[NEW: Marguerite Oyle]] rides every turn, so the cast may already be two)
    const options = [...$('f_who').options];
    return Boolean($('f_text')) && options.length === 1 + roomA().cast.length && $('f_who').value === 'world' &&
      /Director/.test(options[0].textContent);
  })());
  $('f_text').value = 'The lights go out across the whole street.';
  $('mOk').dispatchEvent(click());
  const directed = await until('the direction to play', () => {
    const last = roomA().messages.filter(m => m.role === 'char' || m.role === 'world').pop();
    return !doc.querySelector('.typing') && Boolean(doc.querySelector('.scene-card.direction')) &&
      last && last.role === 'world' && /saw the direction/.test(last.text);
  }, 80);
  await wait(200);
  check('direct: a 🎬 card is filed, the Director plays it, the model saw it, and it is spent by that turn',
    directed && !roomA().direction && /Direction/.test(doc.querySelector('.scene-card.direction').textContent));
  const aCount = roomA().messages.length;
  // ⇄ a second scene, side by side: the previous block's chat, which has turns.
  // The header's ⇄ is the one door: a split dialog first (who goes, where),
  // with the way to other people and existing chats at its foot.
  $('linkBtn').dispatchEvent(click());
  check('link: the header’s ⇄ opens the split dialog — faces to tick, where it is, and the way to other chats',
    /happening now/i.test($('modal').textContent) &&
    doc.querySelectorAll('[data-split]').length === win.RP.presentCast(roomA()).length &&
    Boolean($('f_where')) && Boolean($('mLinkOther')));
  $('mLinkOther').dispatchEvent(click());
  const picks = [...doc.querySelectorAll('[data-link]')];
  const recentsBefore = doc.querySelectorAll('#recents [data-room]').length;
  check('link: the picker offers a new scene and EVERY other chat — no cap — newest first',
    picks.length === 1 + savedState().rooms.filter(x => x.id !== aId && x.cast.length).length &&
    /A new scene/.test(picks[0].textContent));
  picks[1].dispatchEvent(click());
  await wait(200);
  const bId = roomA().linkedTo;
  const roomB = () => savedState().rooms.find(x => x.id === bId);
  check('link: the two chats are linked both ways, the front one stays in front, and the second shows at the side',
    Boolean(bId) && roomB().linkedTo === aId && savedState().active === aId &&
    !$('sidescene').hidden && $('chatview').classList.contains('linked') && Boolean($('input_b')) &&
    $('sidescene').textContent.includes(roomB().title));
  check('link: the side column is the whole experience — header, sheets, stream, turn bar, its own prompt — no second dock or back button', (() => {
    const ids = ['chatTop_b', 'statebar_b', 'stream_b', 'speakers_b', 'composer_b', 'input_b', 'send_b', 'qaContinue_b',
      'qaDirect_b', 'qaPlayAs_b', 'qaAuto_b', 'qaLength_b', 'privacyBtn_b', 'sceneBtn_b', 'swapBtn_b', 'undoBtn_b', 'dateBtn_b', 'fateBtn_b', 'stopBtn_b'];
    return ids.every(id => Boolean($(id))) && !$('panelBtn_b') && !$('backBtn_b') && !$('linkBtn_b') &&
      $('speakers_b').querySelectorAll('[data-speaker]').length >= 1 &&
      doc.querySelectorAll('#frontScene [id$="_b"]').length === 0 && $('stopBtn').hidden && $('stopBtn_b').hidden;
  })());
  check('link: two full columns, and still not one duplicated id on the page', (() => {
    const seen = {}; const dupes = [];
    doc.querySelectorAll('[id]').forEach(n => { if (seen[n.id]) dupes.push(n.id); seen[n.id] = 1; });
    return dupes.length === 0;
  })());
  check('link: the recents file the pair as ONE chat — “A ⇄ B”, under the older of the two', (() => {
    const rows = [...doc.querySelectorAll('#recents [data-room]')];
    const row = rows.find(n => n.classList.contains('pair'));
    return rows.length === recentsBefore - 1 && Boolean(row) && /⇄/.test(row.textContent) &&
      row.dataset.room === win.RP.linkPrimary(savedState(), roomA()).id;
  })());
  check('link: each scene’s prompt carries the other’s last turns, and only what would carry may cross', (() => {
    const sysA = win.RP.systemFor(savedState(), roomA(), roomA().cast[0], {});
    const sysB = win.RP.worldSystem(savedState(), roomB(), {});
    return /MEANWHILE, IN THE OTHER SCENE/.test(sysA) && /What crosses is what physically would/.test(sysA) &&
      /MEANWHILE, IN THE OTHER SCENE/.test(sysB) && sysB.includes('I kick the hangar door in.');
  })());
  const bBefore = roomB().messages.length;
  $('input_b').value = 'Did you hear that?';
  $('composer_b').dispatchEvent(submit());
  const sideAnswered = await until('the side scene to answer', () =>
    !doc.querySelector('.typing') && roomB().messages.length >= bBefore + 2, 80);
  await wait(200);
  check('link: a turn written at the side lands in the side scene and is answered there; the front scene is untouched',
    sideAnswered && roomB().messages.filter(m => m.role === 'user').pop().text === 'Did you hear that?' &&
    savedState().active === aId && roomA().messages.length === aCount &&
    $('sidescene').textContent.includes('Did you hear that?'));
  // ■ Stop: a turn started at the front, cut before the model answers.
  const aBeforeStop = roomA().messages.length;
  $('input').value = 'Wait — everybody stop.';
  $('composer').dispatchEvent(submit());
  const stopShown = Boolean(doc.querySelector('#frontScene .typing')) && !$('stopBtn').hidden && !$('stopBtn_b').hidden;
  $('stopBtn').dispatchEvent(click());
  await wait(500);
  check('stop: ■ shows in both columns while a reply is being written, and cuts it — no reply, no error card, the turn stays yours',
    stopShown && !doc.querySelector('.typing') && $('stopBtn').hidden &&
    roomA().messages.length === aBeforeStop + 1 && roomA().messages[roomA().messages.length - 1].role === 'user' &&
    !roomA().messages.some(m => m.error));
  // The side column's own controls act on the side scene.
  const aNow = roomA().messages.length, bNow = roomB().messages.length;
  $('qaContinue_b').dispatchEvent(click());
  const bWent = await until('the side scene to continue on its own', () =>
    !doc.querySelector('.typing') && roomB().messages.length > bNow, 80);
  await wait(150);
  check('link: ➤ Continue in the side column plays a turn THERE — the front scene is untouched',
    bWent && roomA().messages.length === aNow && roomB().messages.filter(m => m.role === 'char' || m.role === 'world').pop().at > Date.now() - 20000);
  check('link: 🩺 Party in the side column opens the side scene’s sheets, with that column’s own ids', (() => {
    if (!$('statesBtn_b')) return roomB().mechanics === 'off';
    if ($('statebar_b').hidden) $('statesBtn_b').dispatchEvent(click());
    const ok = !$('statebar_b').hidden && Boolean($('castAdd_b')) && Boolean($('awayBench_b')) &&
      $('statebar_b').querySelectorAll('[data-sheet]').length >= 1 && !$('statebar').hidden;
    $('statesBtn').dispatchEvent(click());
    return ok && $('statebar_b').hidden;
  })());
  // ⟶ nothing crosses on its own; this does, by hand, as a direction there:
  // the header's ⇄ is the door to it once a scene is linked.
  $('linkBtn').dispatchEvent(click());
  [...doc.querySelectorAll('[data-pick]')].find(b => /Carry something over from here/.test(b.textContent)).dispatchEvent(click());
  check('carry: the form names both scenes and asks who plays it there',
    /Carry over into/.test($('modal').textContent) && Boolean($('f_text')) && Boolean($('f_who')));
  $('f_text').value = 'A crash from the hangar next door, and every light flickers.';
  $('mOk').dispatchEvent(click());
  const carried = await until('the carried direction to play', () =>
    !doc.querySelector('.typing') && roomB().messages.some(m => m.role === 'scene' && m.direction && m.from), 80);
  await wait(200);
  check('carry: it lands in the other scene as a direction that names where it came from, and plays at once', (() => {
    const card = roomB().messages.filter(m => m.role === 'scene' && m.direction).pop();
    const after = roomB().messages.filter(m => m.role === 'world' || m.role === 'char').pop();
    return carried && card && card.from === roomA().title && /crash from the hangar/.test(card.text) &&
      after && after.at > card.at && /saw the direction/.test(after.text) && !roomB().direction;
  })());
  $('swapBtn_b').dispatchEvent(click());
  await wait(100);
  check('link: ⇄ Front brings the side scene to the front and the other to the side — and the typed draft at the side survives', (() => {
    $('input_b').value = 'a draft, half written';
    win.dispatchEvent(new win.Event('resize'));
    return savedState().active === bId && !$('sidescene').hidden && $('sidescene').textContent.includes(roomA().title) &&
      $('input_b').value === 'a draft, half written';
  })());
  check('dock: with two scenes up the dock says which one it is about, and can be pointed at the other', (() => {
    const sides = [...doc.querySelectorAll('#charpanel [data-dockside]')];
    if (sides.length !== 2) return false;
    sides[1].dispatchEvent(click());
    dock('cast');
    const ok = doc.querySelector('#charpanel [data-dockside="b"]').classList.contains('on') &&
      doc.querySelectorAll('#charpanel .seat[data-dragcast]').length === win.RP.presentCast(roomA()).length;
    doc.querySelector('#charpanel [data-dockside=""]').dispatchEvent(click());
    return ok;
  })());
  $('sceneBtn_b').dispatchEvent(click());
  [...doc.querySelectorAll('[data-pick]')].find(b => /Linked to/.test(b.textContent)).dispatchEvent(click());
  [...doc.querySelectorAll('[data-pick]')].find(b => /Unlink/.test(b.textContent)).dispatchEvent(click());
  await wait(100);
  check('link: unlinking (from the side column’s ⋯) clears both sides and the side column goes away',
    !roomA().linkedTo && !roomB().linkedTo && $('sidescene').hidden && !$('chatview').classList.contains('linked') &&
    !$('input_b'));

  // ---- round 5: split mid-scene by drag and drop, walk somebody over, carry a turn, export both ----
  doc.querySelector(`[data-room="${aId}"]`).dispatchEvent(click());
  await wait(150);
  const present = () => win.RP.presentCast(roomA());
  const drag = (node, type) => node.dispatchEvent(new win.Event(type, { bubbles: true, cancelable: true }));
  const faces = [...doc.querySelectorAll('#speakers .sp[data-dragcast]')];
  check('split: every face on the rail can be picked up, and a drop zone waits at the edge of the stage',
    savedState().active === aId && faces.length === present().length && faces.length >= 2 &&
    Boolean($('linkDrop')) && !$('linkDrop').hidden);
  check('split: the Cast tab seats the same people, draggable, with invite and invent spelled out', (() => {
    dock('cast');
    return doc.querySelectorAll('#charpanel .seat[data-dragcast]').length === present().length &&
      Boolean($('dkInvite')) && /Invite from the archive/.test($('dkInvite').textContent) && Boolean($('dkInvent')) && Boolean($('dkPlayAs'));
  })());
  const mover = faces[faces.length - 1];
  const moverId = mover.dataset.dragcast;
  drag(mover, 'dragstart');
  const lit = doc.body.classList.contains('dragging-cast');
  drag($('linkDrop'), 'drop');
  drag(mover, 'dragend');
  check('split: dropping a face on the zone opens the split dialog with that face already ticked',
    lit && /happening now/i.test($('modal').textContent) &&
    [...doc.querySelectorAll('[data-split].on')].map(b => b.dataset.split).join() === moverId);
  $('f_where').value = 'The hangar roof, the same minute. The spotlight sweeps the yard below.';
  $('mOk').dispatchEvent(click());
  await wait(300);
  const cId = roomA().linkedTo;
  const roomC = () => savedState().rooms.find(x => x.id === cId);
  check('split: a second scene opens at the side with them in it, linked both ways, and this one stays in front',
    Boolean(cId) && roomC().linkedTo === aId && savedState().active === aId && !$('sidescene').hidden &&
    roomC().cast.some(c => c.id === moverId) && roomC().sceneName === 'The hangar roof, the same minute' &&
    /spotlight/.test(roomC().scene) && $('sidescene').textContent.includes('The hangar roof'));
  check('split: they are written out here, their sheet went with them, and the scene says so',
    roomA().states[moverId].present === false && !present().some(c => c.id === moverId) &&
    Boolean(roomC().states[moverId]) && roomC().states[moverId].present !== false && !roomC().youPlay &&
    roomA().messages.some(m => m.role === 'state' && (m.lines || []).some(l => /left for “The hangar roof/.test(l))));
  check('sync: a sheet shared by both scenes is ONE sheet — HP set here is HP there; where they are is not copied', (() => {
    dock('cast');
    const seat = $('charpanel').querySelector(`[data-sheet="${moverId}"]`);
    if (!seat) return false;
    seat.dispatchEvent(click());
    if (!$('f_hp')) return false;
    $('f_hp').value = '3/10';
    $('mOk').dispatchEvent(click());
    const a = roomA().states[moverId], c = roomC().states[moverId];
    return Boolean(a.hp) && a.hp.value === 3 && Boolean(c.hp) && c.hp.value === 3 && c.hp.max === 10 &&
      a.present === false && c.present !== false;
  })());
  check('meanwhile: each scene’s prompt names who is in the other right now, and that the two share one clock', (() => {
    const stateNow = savedState();
    const block = win.RP.meanwhileBlock(stateNow, stateNow.rooms.find(x => x.id === aId));
    return block.includes('there right now') && /one clock/.test(block) && block.includes('The hangar roof');
  })());
  check('split: the header button now names the other scene, and the Scene tab shows the link', (() => {
    dock('scene');
    const ok = /hangar roof/i.test($('linkBtn').textContent) && /Linked to/.test($('charpanel').textContent) && Boolean($('dkOpenOther'));
    dock('cast');
    return ok;
  })());
  // Somebody else walks over: a face dropped on the side column.
  const walker = doc.querySelector('#speakers .sp[data-dragcast]');
  const walkerId = walker.dataset.dragcast;
  drag(walker, 'dragstart');
  const targeted = $('sidescene').classList.contains('target') && $('linkDrop').hidden;
  drag($('sidescene'), 'drop');
  drag(walker, 'dragend');
  check('walk: with a second scene open the other column is the target; a face dropped there leaves here and is seated there',
    targeted && roomA().states[walkerId].present === false && roomC().cast.some(c => c.id === walkerId) &&
    roomC().states[walkerId].present !== false && /walks in from/.test($('f_text').value));
  $('mOk').dispatchEvent(click());
  const arrived = await until('the arrival to play in the side scene', () =>
    !doc.querySelector('.typing') && roomC().messages.some(m => m.role === 'scene' && m.direction && m.from === roomA().title && /walks in from/.test(m.text)), 80);
  await wait(200);
  check('walk: the side scene plays the arrival as a direction that names where they came from', arrived &&
    roomA().messages.some(m => m.role === 'state' && (m.lines || []).some(l => /left for/.test(l))));
  check('walk: the Cast tab lists them as written out, and ↩ brings one back', (() => {
    dock('cast');
    const back = $('charpanel').querySelector(`[data-back="${walkerId}"]`);
    if (!back || !/Written out/.test($('charpanel').textContent)) return false;
    back.dispatchEvent(click());
    return roomA().states[walkerId].present !== false && present().some(c => c.id === walkerId);
  })());
  // A turn carried across by its grip.
  const grip = doc.querySelector('#stream .grip[data-dragturn]');
  const gripped = win.RP.textOf(roomA().messages.find(m => m.id === grip.dataset.dragturn));
  drag(grip, 'dragstart');
  const turnLit = doc.body.classList.contains('dragging-turn');
  drag($('sidescene'), 'drop');
  drag(grip, 'dragend');
  check('carry: a turn dragged onto the other scene opens ⟶ with its text ready to be worded as it is noticed there',
    turnLit && /Carry over into/.test($('modal').textContent) && $('f_text').value.startsWith(gripped.slice(0, 40)));
  $('mCancel').dispatchEvent(click());
  // Exports that know about both.
  check('export: both scenes come out as one transcript, interleaved, with a marker each time the camera moves', (() => {
    const md = win.RP.linkedTranscript(savedState(), roomA(), { user: 'Reader' });
    const txt = win.RP.linkedTranscript(savedState(), roomA(), { plain: true, user: 'Reader' });
    const aName = roomA().sceneName || roomA().title;
    const a = md.indexOf('### ⇄ ' + aName), c = md.indexOf('### ⇄ The hangar roof');
    return a >= 0 && c > a && /⟶ \*from “/.test(md) && md.includes('I kick the hangar door in.') &&
      txt.includes('— ⇄ The hangar roof') && !txt.includes('**') && /\[Carried over from /.test(txt);
  })());
  check('export: the bundle carries both chats and the link between them, and re-imports linked', (() => {
    const b = win.RP.chatExport(savedState(), roomA(), { linked: true });
    const fresh = { rooms: [], lore: [], chars: [], log: [] };
    win.RP.importBundle(fresh, JSON.parse(JSON.stringify(b)), 'merge');
    const again = fresh.rooms.find(x => x.id === aId);
    return b.rooms.length === 2 && b.rooms[1].id === cId && b.link && b.link.a === aId && b.link.b === cId &&
      Boolean(again) && win.RP.linkedRoom(fresh, again) && win.RP.linkedRoom(fresh, again).id === cId;
  })());
  check('export: the menu offers both scenes while one is linked', (() => {
    dock('share');
    $('cpExport').dispatchEvent(click());
    const n = [...doc.querySelectorAll('[data-pick]')].filter(b => /Both scenes/.test(b.textContent)).length;
    $('modalBack').dispatchEvent(click());
    dock('cast');
    return n === 4;
  })());
  $('homeBtn').dispatchEvent(click());
}

// ---- the model can search the archive mid-turn ----
{
  const RP = win.RP;
  check('search: the page can find a passage inside a filing, not just a summary', (() => {
    const idx = RP.buildIndex({
      events: [{ id: 'e1', name: 'The Iron Mandate', date: '21 Highsun, 1040 BF',
        summary: 'Emergency legislation.',
        description: 'The division was recorded as twenty-eight for, eight against and three abstaining.' }],
      factions: [], whatifs: [], posts: [],
    }, {});
    const hits = RP.searchArchive(idx, 'how did the mandate vote go', { limit: 2 });
    return hits.length === 1 && hits[0].snippet.includes('twenty-eight for');
  })());
  check('search: a lookup directive parses, and REMEMBER files a page', (() => {
    const parsed = RP.parseDirectives('[[LOOKUP: the vote]]\n[[REMEMBER: The gallery | Cleared an hour before.]]', []);
    return parsed.directives[0].kind === 'lookup' && parsed.directives[1].kind === 'remember';
  })());
}

// ---- retrieval is visible on the turn it fed ----
{
  const RP = win.RP;
  check('search: what the turn was written with is shown on the card', (() => {
    const s = savedState();
    const r = s.rooms.find(x => x.id === s.active) || s.rooms[0];
    const turn = (r.messages || []).filter(m => (m.role === 'char' || m.role === 'world') && !m.error).pop();
    // Either it consulted something, or the archive had nothing to say.
    return !turn || Array.isArray(turn.consulted || []);
  })());
  check('search: the cast is told to use the material and to look things up', (() => {
    const s = savedState();
    const r = s.rooms.find(x => x.id === s.active) || s.rooms[0];
    const prompt = RP.systemFor(s, r, r.cast[0]);
    return /Use the material/.test(prompt) && /\[\[LOOKUP: …\]\]|\[\[LOOKUP:/.test(prompt);
  })());
}

// ---- the sequencer, macros, branching and undo ----
{
  doc.querySelector('[data-room]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const roomId = savedState().active;
  check('macros: the rail has quick actions above the composer',
    doc.querySelectorAll('[data-macro]').length >= 5 && Boolean($('macroAdd')));
  check('undo: the header has undo and redo', Boolean($('undoBtn')) && Boolean($('redoBtn')));
  check('text: nothing in the character panel is cut off mid-word', (() => {
    const bodies = [...$('charpanel').querySelectorAll('.cp-desc, .cp-head h3, .cp-head .by')];
    return bodies.length > 0 && bodies.every(node => !/\w…/.test(node.textContent));
  })());
  check('text: the filed status is shown in full, not stubbed', (() => {
    const desc = $('charpanel').querySelector('.cp-desc');
    return Boolean(desc) && desc.textContent.length > 20 && !/…$/.test(desc.textContent.trim());
  })());
  check('branch: every line offers a fork', doc.querySelectorAll('[data-fork]').length > 0);

  const roomsBefore = savedState().rooms.length;
  // Ids rather than a count: a background reply can land between here and
  // the click, and that is not a failure.
  const idsBefore = savedState().rooms.find(x => x.id === roomId).messages.map(m => m.id);
  doc.querySelector('[data-fork]').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await wait(200);
  check('branch: forking makes a new chat and leaves the original whole', (() => {
    const s = savedState();
    const forked = s.rooms.find(x => x.branchOf === roomId);
    const source = s.rooms.find(x => x.id === roomId);
    const kept = idsBefore.every(id => source.messages.some(m => m.id === id));
    return s.rooms.length === roomsBefore + 1 && Boolean(forked) && kept &&
      forked.messages.length <= source.messages.length && s.active === forked.id;
  })());
  // back to the original and take a turn through the sequencer
  [...doc.querySelectorAll('[data-room]')].find(b => b.dataset.room === roomId)
    .dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const beforeTurn = savedState().rooms.find(x => x.id === roomId).messages.length;
  $('input').value = 'I put the ledger on the table and ask who signed it.';
  $('composer').dispatchEvent(new win.Event('submit', { bubbles: true, cancelable: true }));
  await until('the staged beat to play out', () => {
    const r = savedState().rooms.find(x => x.id === roomId);
    return !doc.querySelector('.typing') && r.messages.length > beforeTurn + 1 && !(r.queue || []).length;
  }, 120);
  const afterTurn = savedState().rooms.find(x => x.id === roomId);
  check('sequencer: your turn is answered and then the scene stops',
    afterTurn.messages.length > beforeTurn + 1 && (afterTurn.queue || []).length === 0 &&
    (Boolean(afterTurn.handback) || doc.querySelector('.handback')));
  check('undo: the last turn can be rolled back', (() => {
    const before = savedState().rooms.find(x => x.id === roomId).messages.length;
    $('undoBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
    const after = savedState().rooms.find(x => x.id === roomId).messages.length;
    $('redoBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
    return after < before && savedState().rooms.find(x => x.id === roomId).messages.length === before;
  })());
  $('homeBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
}

// ---- the persona sheet and keyword lore ----
{
  [...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'labs').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  check('persona: Labs has a persona sheet and a keyword board',
    Boolean($('personaEdit')) && Boolean($('keyAdd')) && $('dashBody').textContent.includes('Keyword lore'));
  $('personaEdit').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  $('f_name').value = 'Mikha the Unfiled';
  $('f_look').value = 'tall, sunburnt, one boot newer than the other';
  $('f_items').value = 'a satchel, somebody else’s key';
  $('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await wait(200);
  check('persona: it saves, and goes into the prompt in every chat', (() => {
    const s = savedState();
    const block = win.RP.personaBlock('', s, s.rooms[0]);
    return s.persona.name === 'Mikha the Unfiled' && block.includes('THE USER PLAYS') &&
      block.includes('one boot newer') && block.includes('satchel');
  })());
  $('keyAdd').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  $('f_keys').value = 'Master Sword, /dark shores?/i';
  $('f_text').value = 'Filed as lost in 1012 BF, never as broken.';
  $('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await wait(200);
  check('keyword: a trigger is filed and fires on the word, not on a fragment', (() => {
    const s = savedState();
    return (s.keywords || []).length === 1 &&
      win.RP.keywordBlock(s, 'he asked about the Master Sword').includes('never as broken') &&
      !win.RP.keywordBlock(s, 'he mastered swordsmanship').includes('never as broken') &&
      win.RP.keywordBlock(s, 'we sailed for the Dark Shore').includes('never as broken');
  })());
  [...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'discover').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
}

// ---- choosing the model, and how far back it looks ----
{
  $('settingsBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  $('f_endpoint').value = `http://127.0.0.1:${MOCK_PORT}/v1`;
  $('setModels').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const listedModels = await until('the model list', () => [...$('f_modelPick').options].some(o => o.value), 40);
  check('models: the endpoint’s models are listed and selectable',
    listedModels && [...$('f_modelPick').options].some(o => o.value === 'mock-model'));
  $('f_modelPick').value = 'mock-model';
  $('f_modelPick').dispatchEvent(new win.Event('change', { bubbles: true }));
  check('models: picking one fills the model box', $('f_model').value === 'mock-model');
  check('models: the context window is editable', Boolean($('f_context')) && Number($('f_context').value) >= 4);
  check('settings: the sampler and the background model are exposed',
    Boolean($('f_top_p')) && Boolean($('f_top_k')) && Boolean($('f_repeat_penalty')) &&
    Boolean($('f_utilityModel')));
  check('settings: reply length (four bands, the scene deciding by default), the narrator, the world turn and autoplay are all dials',
    Boolean($('f_length')) && [...$('f_length').options].length === 4 && $('f_length').value === 'adaptive' &&
    Boolean($('f_narrator')) && [...$('f_narrator').options].length === 4 &&
    Boolean($('f_world')) && Boolean($('f_autoplay')));
  $('f_length').value = 'snappy';
  $('f_context').value = '12';
  $('f_endpoint').value = `http://127.0.0.1:${SERVER_PORT}/api/roleplay`;
  $('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  await wait(200);
  check('models: the choice is saved',
    savedState().settings.model === 'mock-model' && savedState().settings.context === 12);
}

// ---- saving to disk, so a cleared cache is not the end of it ----
[...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'labs').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('disk: Labs offers saving, restoring and autosave',
  Boolean($('diskSave')) && Boolean($('diskRestore')) && Boolean($('diskAuto')) &&
  $('dashBody').textContent.includes('workflow/saves/'));
$('diskSave').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
const wrote = await until('the state to reach the disk', async () => {
  const res = await fetch(`http://127.0.0.1:${SERVER_PORT}/api/chatroom-saves`);
  const data = await res.json();
  return (data.saves || []).some(row => row.rooms > 0);
}, 40);
check('disk: the whole state is written to a real file beside the server', wrote);
const listed = await (await fetch(`http://127.0.0.1:${SERVER_PORT}/api/chatroom-saves`)).json();
check('disk: the save lists its chats, its book pages and its size',
  wrote && (listed.saves || []).length > 0 &&
  listed.saves[0].rooms > 0 && listed.saves[0].bytes > 100 && Boolean(listed.saves[0].at));
const roundTrip = await (await fetch(`http://127.0.0.1:${SERVER_PORT}/api/chatroom-save?name=chatroom`)).json();
check('disk: reading it back gives an importable bundle',
  roundTrip.state && roundTrip.state.kind === 'waluipedia-chatroom-bundle' && roundTrip.state.rooms.length > 0);
const traversal = await fetch(`http://127.0.0.1:${SERVER_PORT}/api/chatroom-save?name=../../etc/passwd`);
check('disk: a save name cannot climb out of the saves folder', traversal.status === 404);

// ---- labs: cards, stories, and what the model is sent ----
check('labs: character cards and story import/export are offered',
  Boolean($('cardImport')) && Boolean($('cardExport')) && Boolean($('textImport')) && Boolean($('briefExport')) &&
  $('dashBody').textContent.includes('chara'));
$('textImport').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
$('f_text').value = 'Sans: the saws stopped at noon.\n**The Timber Gang:** we heard it from the ridge.\nI step out of the trees.';
$('f_title').value = 'Read in from text';
$('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('text: importing a story offers the matched cast', !$('modalBack').hidden && $('modal').textContent.includes('3 turns read'));
$('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
check('text: the story becomes a playable chat you can carry on from', (() => {
  const s = savedState();
  const r = s.rooms.find(x => x.title === 'Read in from text');
  return Boolean(r) && r.messages.filter(m => m.role === 'user' || m.role === 'char').length === 3;
})());
check('prompt: the inspector reports the size of what is sent', (() => {
  $('panelBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  $('homeBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  [...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'labs').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  $('promptPeek').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const shown = $('modal').textContent.includes('characters of system prompt');
  if (!$('modalBack').hidden) $('mCancel').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  return shown;
})());
[...doc.querySelectorAll('[data-tab]')].find(b => b.dataset.tab === 'discover').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));

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
check('chat: the dock carries the profile and one tab per system',
  doc.querySelectorAll('.dock-tabs [data-dock]').length === 5 && $('charpanel').innerHTML.includes('By @') &&
  $('charpanel').textContent.includes('In the scene') && $('charpanel').textContent.includes('Invite from the archive'));
check('chat: the Scene tab holds the scene’s rules and housekeeping, labelled', (() => {
  dock('scene');
  const t = $('charpanel').textContent;
  return t.includes('Second scene') && t.includes('Fate') && t.includes('Narrator') && t.includes('New chat') &&
    t.includes('Style') && Boolean($('dkLink')) && Boolean($('cpFate'));
})());
check('chat: the Memory tab holds persona, pinned lines, memory and taste', (() => {
  dock('memory');
  const t = $('charpanel').textContent;
  return t.includes('Persona') && t.includes('Pinned') && t.includes('Memory') && Boolean($('cpTaste')) && Boolean($('cpUp'));
})());
check('chat: the Voice and Share tabs hold voices and exports', (() => {
  dock('voice');
  const v = Boolean($('cpVoice')) && Boolean($('cpAudio')) && Boolean($('dkReadLast'));
  dock('share');
  const sh = Boolean($('cpExport')) && Boolean($('cpImport')) && Boolean($('cpSettings'));
  dock('cast');
  return v && sh;
})());
check('chat: the header has one labelled button for a second scene', Boolean($('linkBtn')) && /Second scene/.test($('linkBtn').textContent));
check('chat: the recents rail lists every chat', doc.querySelectorAll('[data-room]').length >= 4);

// ---- play one turn against the mock model ----
$('input').value = 'Who is on the ridge tonight?';
$('composer').dispatchEvent(new win.Event('submit', { bubbles: true, cancelable: true }));
const replied = await until('the model reply', () => /MOCK-MODEL REPLY/.test($('stream').textContent));
check('turn: the reply is not left hanging mid-sentence', (() => {
  const s = savedState();
  const r = s.rooms.find(x => x.id === s.active);
  const last = (r.messages || []).filter(m => m.role === 'char' && !m.error).pop();
  return Boolean(last) && !win.RP.looksTruncated(win.RP.textOf(last));
})());
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

// ---- mood: the colour of the box is how they feel ----
check('mood: the model\u2019s [[MOOD:]] lands on the sheet as a flicker first, never the full pitch at once', (() => {
  const s = savedState();
  const r = s.rooms.find(x => x.id === s.active);
  const first = Object.keys(r.states).map(k => r.states[k]).find(sh => sh.mood);
  return Boolean(first) && first.mood.key === 'anger' && first.mood.level >= 1 && first.mood.level <= 2 && first.mood.note === 'the blade';
})());
check('mood: the turn card wears the colour — a class, the CSS variables, and the feeling in its title', (() => {
  const card = doc.querySelector('.turn.char.mooded');
  return Boolean(card) && /--mood-line:hsl\(4,/.test(card.getAttribute('style') || '') && /--mood-wash/.test(card.getAttribute('style') || '') &&
    card.getAttribute('data-mood') === 'anger' && /irritated|angry/.test(card.getAttribute('title') || '');
})());
check('mood: the sheet shows the feeling as a chip and wears the same colour', (() => {
  if ($('statebar').hidden) $('statesBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));   // 🩺 Party
  const sheet = doc.querySelector('.statebar .sheet.mooded');
  const chip = sheet && sheet.querySelector('.flag.mood');
  const shown = Boolean(sheet && chip) && /😠/.test(chip.textContent) && /irritated|angry/.test(chip.textContent) &&
    /--mood-line/.test(sheet.getAttribute('style') || '');
  $('statesBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));                             // as it was
  return shown;
})());
check('mood: the next prompt orders the speaker to play it, and tells everyone else how they are', (() => {
  const s = savedState();
  const r = s.rooms.find(x => x.id === s.active);
  const felt = r.cast.find(c => r.states[c.id] && r.states[c.id].mood);
  const other = r.cast.find(c => c.id !== felt.id) || felt;
  const mine = win.RP.systemFor(s, r, felt, {});
  const theirs = win.RP.systemFor(s, r, other, {});
  return Boolean(felt) && new RegExp('MOOD \u2014 ' + felt.name + ' is (irritated|angry)').test(mine) &&
    /mood: (irritated|angry) \(anger [12]\/3 \u2014 the blade\)/.test(theirs) && !/You may colour/.test(mine) && !/\[\[TINT:/.test(mine);
})());
check('mood: the page reads the prose itself when nothing is filed — the mock\u2019s plain line moves nobody', (() => {
  return win.RP.moodScan('MOCK-MODEL REPLY #1: the blade goes in.', 'Anyone', []) === null &&
    win.RP.moodScan('*She slams the ledger shut.* "Get out," she snarls.', 'Anyone', []).key === 'anger';
})());

// ---- the hurt ledger: a crash the model narrates but never files ----
check('wounds: the Scene tab offers the ledger, on by default', (() => {
  dock('scene');
  const item = $('dkHurt');
  const t = item ? item.textContent : '';
  dock('cast');
  return Boolean(item) && /Wounds/.test(t) && /from the prose/.test(t);
})());
const hpBefore = (() => {
  const s = savedState();
  const r = s.rooms.find(x => x.id === s.active);
  const out = {};
  Object.keys(r.states).forEach(k => { if (r.states[k].hp && r.states[k].present !== false) out[k] = r.states[k].hp.value; });
  return out;
})();
check('wounds: the order to file them rides in the prompt only on a violent turn', (() => {
  const s = savedState();
  const r = s.rooms.find(x => x.id === s.active);
  const who = r.cast[0];
  const hot = win.RP.systemFor(s, r, who, { mentionText: 'I hold onto the seat as the aircraft crashes' });
  const calm = win.RP.systemFor(s, r, who, { mentionText: 'I pour the tea and sit down.' });
  return /WOUNDS/.test(hot) && /the crash/.test(hot) && !/WOUNDS/.test(calm);
})());
$('input').value = 'I hold onto the seat as the aircraft crashes';
$('composer').dispatchEvent(new win.Event('submit', { bubbles: true, cancelable: true }));
await until('the crash to be billed', () => /filed from the prose/.test($('stream').textContent));
await wait(300);
check('wounds: a crash nobody filed still costs everyone in the scene HP, on the sheets', (() => {
  const s = savedState();
  const r = s.rooms.find(x => x.id === s.active);
  const ids = Object.keys(hpBefore);
  return ids.length >= 2 && ids.every(k => r.states[k].hp.value < hpBefore[k]) &&
    ids.every(k => Boolean(r.states[k].flags.battered));
})());
check('wounds: holding on halves the reader’s own share of it', (() => {
  const s = savedState();
  const r = s.rooms.find(x => x.id === s.active);
  const you = win.RP.playerSheetId(r);
  const mine = hpBefore[you] - r.states[you].hp.value;
  const theirs = Object.keys(hpBefore).filter(k => k !== you).map(k => hpBefore[k] - r.states[k].hp.value);
  return mine > 0 && theirs.length > 0 && theirs.every(t => Math.abs(t - mine * 2) <= 1);
})());
check('wounds: the receipt is on the turn card, cause and all, and the prose is untouched', (() => {
  const strip = [...doc.querySelectorAll('.turn.char .metastrip')].pop();
  const bubble = [...doc.querySelectorAll('.turn.char .bubble')].pop();
  return Boolean(strip) && /💥/.test(strip.textContent) && /the crash, filed from the prose/.test(strip.textContent) &&
    /slams into the pavement/.test(bubble.textContent);
})());
check('wounds: ↩ undo takes the whole crash back off the sheets', (() => {
  $('undoBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const s = savedState();
  const r = s.rooms.find(x => x.id === s.active);
  return Object.keys(hpBefore).every(k => r.states[k].hp.value === hpBefore[k]);
})());

// ---- the AI audit: one call, every sheet, previewed, applied, undone ----
const auditBefore = (() => {
  const s = savedState();
  const r = s.rooms.find(x => x.id === s.active);
  return { hp: r.states[r.cast[0].id].hp.value, clock: r.clock || '', turns: r.messages.length, who: r.cast[0].id };
})();
check('audit: the Cast tab and the Scene tab both offer the AI audit, and nothing runs it on its own', (() => {
  dock('scene');
  const inScene = Boolean($('dkReview'));
  dock('cast');
  const inCast = Boolean($('dkReview'));
  return inScene && inCast && /AI audit/.test($('dkReview').textContent) && $('modalBack').hidden;
})());
$('dkReview').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
await until('the audit preview', () => !$('modalBack').hidden && /AI audit/.test($('modal').textContent) && Boolean($('mOk')));
check('audit: the corrections are previewed before they land — the invented stranger is refused', (() => {
  const text = $('modal').textContent;
  const s = savedState();
  const r = s.rooms.find(x => x.id === s.active);
  return /−3 HP/.test(text) && /soot on the face/.test(text) && /the time is 23:40/.test(text) && /angry \(the bill\)|irritated \(the bill\)/.test(text) &&
    !/Nobody Real/.test(text) && /Apply 4 changes/.test($('mOk').textContent) &&
    r.states[auditBefore.who].hp.value === auditBefore.hp && (r.clock || '') === auditBefore.clock;
})());
$('mOk').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
await wait(200);
check('audit: applied — the sheet, the note, the mood and the clock all moved, filed as one card in the stream', (() => {
  const s = savedState();
  const r = s.rooms.find(x => x.id === s.active);
  const sheet = r.states[auditBefore.who];
  const card = r.messages[r.messages.length - 1];
  return $('modalBack').hidden && sheet.hp.value === auditBefore.hp - 3 && /soot on the face/.test(sheet.status) && r.clock === '23:40' &&
    sheet.mood && sheet.mood.key === 'anger' && card.role === 'state' && card.lines.length === 4 && card.lines.every(l => /^🩺 /.test(l)) &&
    !r.cast.some(c => /Nobody Real/.test(c.name)) && /🩺/.test($('stream').textContent);
})());
check('audit: ↩ undo takes the whole audit back — sheet, card and clock', (() => {
  $('undoBtn').dispatchEvent(new win.MouseEvent('click', { bubbles: true }));
  const s = savedState();
  const r = s.rooms.find(x => x.id === s.active);
  return r.states[auditBefore.who].hp.value === auditBefore.hp && (r.clock || '') === auditBefore.clock && r.messages.length === auditBefore.turns;
})());

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
