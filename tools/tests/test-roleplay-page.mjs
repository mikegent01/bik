// Headless test of the roleplay page's pure logic (the #rp-logic script in
// workflow/roleplay.html). No DOM: the block is extracted and run with a
// fake localStorage. The contract being pinned:
//
//   prompts    solo and group system prompts carry the character card, the
//              in-character rules, the chosen style, persona, and (group)
//              the "speak ONLY as" speaker rule
//   history    user/char turns map to API messages, group turns get the
//              speaker's name, scene openers and errors never reach the model
//   rotation   group speaker order rotates after each reply and honors an
//              explicit pick
//   narration  *actions* italic, **bold**, quotes styled, HTML escaped
//   rooms      create solo/group/scene rooms, message counting, export
//              transcript format, recents buckets, storage round-trip
//
//   node tools/tests/test-roleplay-page.mjs
import { readFileSync } from 'node:fs';

const repoRoot = new URL('../../', import.meta.url);
const html = readFileSync(new URL('workflow/roleplay.html', repoRoot), 'utf8');
const start = html.indexOf('<script id="rp-logic">');
const end = html.indexOf('</script>', start);
if (start < 0 || end < 0) { console.error('rp-logic block not found'); process.exit(1); }
const block = html.slice(start + '<script id="rp-logic">'.length, end);

// fake browser surface for the logic block
const window = {};
const crypto = { randomUUID: () => 'id-' + Math.random().toString(36).slice(2, 10) };
const RP = new Function('window', 'crypto', block + '\nreturn window.RP;')(window, crypto);

let ok = true;
const check = (name, cond) => { console.log((cond ? 'OK  ' : 'FAIL'), name); if (!cond) ok = false; };

// ---------- narration markdown ----------
check('md: *actions* render as italics', RP.md('He *walks* away').includes('<em>walks</em>'));
check('md: **bold** renders', RP.md('**Note** this').includes('<b>Note</b>'));
check('md: "speech" is styled as a quote span', RP.md('He said "hello" once').includes('class="q"'));
check('md: HTML in prose is escaped', !RP.md('<img src=x onerror=alert(1)>').includes('<img'));
check('md: escaped entities survive the em pass', RP.md('*a & b*').includes('<em>a &amp; b</em>'));

// ---------- prompts ----------
const sans = RP.normChar({ id: 'sans', name: 'Sans', title: 'Judge of the Last Corridor', summary: 'A skeleton who knows exactly how much nothing matters.' });
const promo = RP.normChar({ id: 'promo_mario', name: 'Promo Mario', title: 'The main host of Nintendo Mania!', summary: 'Always on camera, always selling.' });
const solo = RP.soloPrompt(sans, { style: 'novel' });
check('solo prompt: carries name, title, and card', solo.includes('You are Sans') && solo.includes('Judge of the Last Corridor') && solo.includes('skeleton'));
check('solo prompt: in-character rules and style direction', solo.includes('never mention being an AI') && RP.STYLES.novel.dir.split(' ').slice(0, 4).join(' ').length > 0 && solo.includes('asterisks'));
check('solo prompt: styles differ', RP.soloPrompt(sans, { style: 'script' }) !== RP.soloPrompt(sans, { style: 'casual' }) && RP.soloPrompt(sans, { style: 'script' }).includes('screenplay'));
const grp = RP.groupPrompt([sans, promo], promo, { style: 'novel', scene: 'The studio at night.' });
check('group prompt: lists the whole cast', grp.includes('- Sans') && grp.includes('- Promo Mario'));
check('group prompt: speak-ONLY-as the current speaker', grp.includes('ONLY as Promo Mario'));
check('group prompt: scene context included', grp.includes('The studio at night.'));
check('persona block: set vs empty', RP.personaBlock('a stagehand').includes('a stagehand') && RP.personaBlock('') === '');

// ---------- rooms + history ----------
const room = RP.newRoom([promo], {});
check('room: solo by cast size, titled after the character', room.kind === 'solo' && room.title === 'Promo Mario');
room.messages.push({ id: 'm1', role: 'user', text: 'You there?' });
room.messages.push({ id: 'm2', role: 'char', charId: 'promo_mario', text: '*adjusts mic* Always.' });
let hist = RP.historyFor(room);
check('history: user/char turns map to roles', hist.length === 2 && hist[0].role === 'user' && hist[1].role === 'assistant' && hist[1].content.includes('adjusts mic'));
const group = RP.newRoom([sans, promo], { scene: 'The studio.', opener: 'Cameras everywhere.' });
group.messages.push({ id: 'g0', role: 'scene', text: 'Cameras everywhere.' });
group.messages.push({ id: 'g1', role: 'user', text: 'Who is running this place?' });
group.messages.push({ id: 'g2', role: 'char', charId: 'sans', text: 'nobody, and that is the joke' });
group.messages.push({ id: 'g3', role: 'char', charId: 'promo_mario', text: 'ME! *points at self*', error: true });
hist = RP.historyFor(group);
check('history: group assistant turns carry the speaker name', hist.length === 2 && hist[1].content.startsWith('Sans:'));
check('history: scene openers and errors never reach the model', !hist.some(m => m.content.includes('Cameras')) && !hist.some(m => m.content.includes('points at self')));
check('counter: counts visible turns only', RP.counter(group) === 2);

// ---------- rotation ----------
check('rotation: next after sans is promo', RP.rotationAfter([sans, promo], 'sans').id === 'promo_mario');
check('rotation: wraps around the cast', RP.rotationAfter([sans, promo], 'promo_mario').id === 'sans');
const g2 = RP.newRoom([sans, promo, { id: 'alistair', name: 'Alistair' }], {});
g2.messages.push({ id: 'x', role: 'char', charId: 'sans', text: '...' });
check('next speaker: follows rotation from the last reply', RP.nextSpeaker(g2).id === 'promo_mario');
g2.next = 'alistair';
check('next speaker: an explicit pick wins', RP.nextSpeaker(g2).id === 'alistair');
g2.next = '';
check('next speaker: unknown pick falls back to rotation', RP.nextSpeaker(g2, 'nobody-here').id === 'promo_mario');

// ---------- speaker stripping + voice ----------
check('strip: a leading "Name:" is removed from model output', RP.stripSpeaker('Sans: *shrugs* maybe', 'Sans') === '*shrugs* maybe' && RP.stripSpeaker('Promo Mario: *points at self*', 'Promo Mario') === '*points at self*');
check('strip: prose without a prefix is untouched', RP.stripSpeaker('Just a line: with a colon later') === 'Just a line: with a colon later');
const v1 = RP.voiceFor(sans), v2 = RP.voiceFor(promo);
check('voice: per-character rate/pitch, in range', v1.rate >= 0.95 && v1.rate <= 1.15 && v2.pitch >= 0.7 && v2.pitch <= 1.4);

// ---------- transcripts ----------
const md = RP.transcript(group);
check('transcript: title, cast, scene quote, turns', md.startsWith('# Group: Sans + Promo Mario') && md.includes('**Cast:**') && md.includes('> Cameras everywhere.') && md.includes('**Sans:**'));
check('transcript: user turns labeled', RP.transcript(room).includes('**You:** You there?'));
check('transcript: errors excluded, export footer present', !md.includes('points at self') && md.includes('Exported from Waluipedia Roleplay'));

// ---------- storage ----------
const store = { map: {}, getItem(k) { return this.map[k] ?? null; }, setItem(k, v) { this.map[k] = String(v); }, removeItem(k) { delete this.map[k]; } };
let state = RP.loadState(store);
check('load: empty storage yields a clean state', state.rooms.length === 0 && state.chars.length === 0);
state.rooms.push(group, room);
state.active = room.id;
RP.saveState(store, state);
const back = RP.loadState(store);
check('save/load: rooms round-trip whole', back.rooms.length === 2 && back.rooms.find(r => r.kind === 'group').cast.length === 2 && back.active === room.id);
const many = { rooms: Array.from({ length: 40 }, (_, i) => ({ id: 'r' + i, title: 'r' + i, cast: [], messages: [], updated: i })), chars: [], active: '' };
RP.saveState(store, many);
check('save: capped at 30 most-recent rooms', RP.loadState(store).rooms.length === 30 && RP.loadState(store).rooms[0].id === 'r39');

// ---------- recents buckets ----------
const midnight = new Date(new Date().toDateString()).getTime();   // deterministic against the local clock
const buckets = RP.groupBuckets([
  { title: 'today', updated: midnight + 3600e3 },
  { title: 'yesterday', updated: midnight - 3600e3 },
  { title: 'month', updated: midnight - 5 * 864e5 },
  { title: 'old', updated: midnight - 40 * 864e5 },
]);
check('buckets: today / yesterday / month / older', buckets.today.length === 1 && buckets.yesterday.length === 1 && buckets.month.length === 1 && buckets.older.length === 1);

// ---------- room counting + scene rooms ----------
const sceneRoom = RP.newRoom([sans, promo], { scene: 'The Feyward.', opener: 'The door is stuck.' });
check('scene room: opener stored as a scene message, kind group', sceneRoom.messages[0].role === 'scene' && sceneRoom.kind === 'group' && sceneRoom.scene === 'The Feyward.');
check('room count: chats per character counted across rooms', RP.roomCountFor([room, group, sceneRoom], 'sans') === 2);

// ---------- letter dividers ----------
check('letters: first letter or # for digits/symbols', RP.letterFor('Azure (Rakasha)') === 'A' && RP.letterFor('Baby Bones') === 'B' && RP.letterFor('7th Toad') === '#' && RP.letterFor('') === '#');
const grouped = RP.groupByLetter([{ name: 'Black' }, { name: 'Azure' }, { name: 'Baby Bones' }, { name: '9-Volt' }]);
check('letters: grouped A/B/# in order, members inside', grouped.map(g => g.letter).join('') === 'AB#' && grouped[0].chars[0].name === 'Azure' && grouped[1].chars.length === 2 && grouped[2].chars[0].name === '9-Volt');

// ---------- scripted scenes ----------
const beatRoom = RP.newRoom([{ id: 'markop', name: 'Markop' }, { id: 'alistair', name: 'Alistair' }], {
  scene: 'The studio at night. The remote changes hands.', sceneName: 'The Cut and the Puppet Master',
  beats: [
    { time: 'Early morning', beat: 'The fall onto the pilot set', detail: 'Two strangers drop out of their own sky.' },
    { time: 'Mid-morning', beat: 'The product demonstration', detail: 'The tape plays.' },
    { time: 'Late', beat: 'The Director says CUT', detail: 'The floor opens.' },
  ],
  opener: 'Scene — the studio at night.',
});
check('scene room: beats stored, none fired yet', beatRoom.beats.length === 3 && beatRoom.beatIndex === 0 && beatRoom.autoBeats === true);
let script = RP.scriptBlock(beatRoom);
check('script block: names the filed session and the perspective rule', script.includes('The Cut and the Puppet Master') && script.includes('DIFFERENT perspective') && script.includes('stays on script'));
check('script block: the next beat is scheduled in', script.includes('Scheduled to happen next') && script.includes('The fall onto the pilot set'));
check('script block: nothing fired yet means no "so far" list', !script.includes('Main event so far'));
const firstBeat = RP.fireBeat(beatRoom);
check('fireBeat: advances the index and files a scene message', firstBeat && firstBeat.beat === 'The fall onto the pilot set' && beatRoom.beatIndex === 1 && beatRoom.messages.some(m => m.beat && m.text.includes('Early morning')));
script = RP.scriptBlock(beatRoom);
check('script block: fired beats become the "so far" list', script.includes('Main event so far') && script.includes('The fall onto the pilot set') && script.includes('Scheduled to happen next') && script.includes('The product demonstration'));
check('beats never reach the model as chat history', RP.historyFor(beatRoom).every(m => !m.content.includes('pilot set')));
check('turnsSinceBeat: counts only visible turns after the last beat', RP.turnsSinceBeat(beatRoom) === 0);
beatRoom.messages.push({ id: 't1', role: 'user', text: 'we do other stuff' });
beatRoom.messages.push({ id: 't2', role: 'char', charId: 'markop', text: '*nods*' });
check('autoAdvance: fires once two turns pass with beats remaining', RP.turnsSinceBeat(beatRoom) === 2 && RP.autoAdvance(beatRoom) === true);
RP.fireBeat(beatRoom);
check('progress: two of three fired, one remaining', (p => p.at === 2 && p.total === 3 && p.remaining === 1)(RP.beatProgress(beatRoom)));
beatRoom.messages.push({ id: 't3', role: 'user', text: 'more' }, { id: 't4', role: 'char', charId: 'alistair', text: '*also more*' });
check('autoAdvance: off switch respected', (beatRoom.autoBeats = false, RP.autoAdvance(beatRoom) === false));
beatRoom.autoBeats = true;
RP.fireBeat(beatRoom);
check('fireBeat: past the end returns null, script says aftermath', RP.fireBeat(beatRoom) === null && RP.scriptBlock(beatRoom).includes('aftermath is yours to play'));
check('autoAdvance: no beats left means never', RP.autoAdvance(beatRoom) === false);

console.log(ok ? 'ALL ROLEPLAY LOGIC TESTS PASS' : 'ROLEPLAY LOGIC TESTS FAILED');
process.exit(ok ? 0 : 1);
