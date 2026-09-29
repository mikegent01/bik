// Headless test of the chatroom's new systems — the ones the roleplay page
// did not have: cross-chat memory, character memory, world lore, perspective
// dynamic replay, and import/export bundles. Same trick as
// test-roleplay-page.mjs: the pure-logic source is run with a fake window,
// a fake crypto and a fake localStorage. No DOM, no network.
//
// The source of truth is assets/chatroom/chatroom-core.js; both generated
// pages inline or link that exact file, and this test also checks that the
// generated pages are not stale.
//
//   node tools/tests/test-chatroom-core.mjs
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const repoRoot = new URL('../../', import.meta.url);
const source = readFileSync(new URL('assets/chatroom/chatroom-core.js', repoRoot), 'utf8');

const window = {};
let n = 0;
const crypto = { randomUUID: () => 'id-' + (++n) };
const RP = new Function('window', 'crypto', source + '\nreturn window.RP;')(window, crypto);

let ok = true;
const check = (name, cond) => { console.log((cond ? 'OK  ' : 'FAIL'), name); if (!cond) ok = false; };

const cutters = RP.normChar({ id: 'timber_gang', name: 'The Timber Gang', title: 'Cutters on the ridge' });
const rebel = RP.normChar({ id: 'rebel_scout', name: 'Rebel Scout', title: 'First through the treeline' });
const sans = RP.normChar({ id: 'sans', name: 'Sans', summary: 'A skeleton.' });

// ---------- state shape ----------
const store = { map: {}, getItem(k) { return this.map[k] ?? null; }, setItem(k, v) { this.map[k] = String(v); }, removeItem(k) { delete this.map[k]; } };
const state = RP.loadState(store);
check('state: a clean state carries user, lore, log and settings', !!state.user && Array.isArray(state.lore) && Array.isArray(state.log) && !!state.settings);

// ---------- character memory ----------
const room = RP.newRoom([sans, cutters], { scene: 'The ridge, before dawn.' });
state.rooms.push(room);
const userMsg = { id: 'u1', role: 'user', text: 'The rebels are coming up the logging road.', at: 1 };
const charMsg = { id: 'c1', role: 'char', charId: 'sans', text: '*shrugs* "we could move the saws."', at: 2 };
room.messages.push(userMsg, charMsg);
RP.rememberTurn(state, room, userMsg);
RP.rememberTurn(state, room, charMsg);
const sansMem = RP.charMemory(state, sans);
check('memory: what the player says is remembered by everyone present', state.chars.length === 2 && sansMem.notes.some(nn => nn.text.includes('logging road')));
check('memory: a character remembers their own line, actions stripped', sansMem.notes.some(nn => nn.text.includes('we could move the saws') && !nn.text.includes('shrugs')));
check('memory: being in the room builds a relationship', (sansMem.relations.timber_gang || {}).score === 1);
RP.setMood(state, sans, 'tired of the noise');
RP.teach(state, sans, 'The ridge road floods after rain.');
check('memory: mood and taught facts stick', RP.charMemory(state, sans).mood === 'tired of the noise' && RP.charMemory(state, sans).knowledge.length === 1);

// ---------- the cross-chat log ----------
RP.logEvent(state, { kind: 'note', roomId: 'other-room', roomTitle: 'The first cut', chars: ['sans'], text: 'A saw was left running all night.' });
RP.logEvent(state, { kind: 'note', roomId: 'other-room', roomTitle: 'Elsewhere', chars: ['nobody_here'], text: 'Unrelated business in another province.' });
const mem = RP.memoryBlock(state, room.cast, room);
check('cross-chat: another chat’s events reach this one', mem.includes('A saw was left running all night'));
check('cross-chat: events about nobody in this cast are left out', !mem.includes('Unrelated business'));
check('cross-chat: this chat’s own log lines are not repeated back', (() => {
  RP.logEvent(state, { kind: 'note', roomId: room.id, roomTitle: room.title, chars: ['sans'], text: 'Said inside this very room.' });
  return !RP.memoryBlock(state, room.cast, room).includes('Said inside this very room');
})());
check('cross-chat: the block carries mood, knowledge and relationships', mem.includes('tired of the noise') && mem.includes('floods after rain') && mem.includes('The Timber Gang'));

// ---------- world lore ----------
RP.addLore(state, { title: 'The Ridge Concession', text: 'Every tree on the ridge belongs to the Concession, on paper.', tags: ['ridge'] });
RP.addLore(state, { title: 'Sans-only node', text: 'Only relevant with the skeleton.', chars: ['sans'] });
RP.addLore(state, { title: 'Far away', text: 'Nothing to do with any of this.', tags: ['seafloor'] });
const lore = RP.loreBlock(state, room.cast, room);
check('lore: character-matched nodes are handed over', lore.includes('Sans-only node'));
check('lore: unmatched tagged nodes stay out', !lore.includes('Far away'));
RP.addLore(state, { id: 'the_ridge_concession', title: 'The Ridge Concession', text: 'Rewritten.', tags: ['ridge'] });
check('lore: re-filing the same id updates in place', state.lore.filter(x => x.id === 'the_ridge_concession').length === 1 && state.lore.find(x => x.id === 'the_ridge_concession').text === 'Rewritten.');
RP.removeLore(state, 'far_away');
check('lore: nodes can be removed', !state.lore.some(x => x.id === 'far_away'));

// ---------- the assembled prompt ----------
const system = RP.systemFor(state, room, sans);
check('prompt: one turn carries character, lore and memory together', system.includes('You are Sans') === false ? system.includes('YOU ARE Sans') : true);
check('prompt: group turn speaks only as the picked character', system.includes('ONLY as Sans'));
check('prompt: lore and memory blocks are both in the system prompt', system.includes('WORLD LORE') && system.includes('WHAT HAS ALREADY HAPPENED'));

// ---------- perspective dynamic replay ----------
const battle = RP.newRoom([rebel], { scene: 'The rebels break the treeline.', sceneName: 'The Logging Road Ambush' });
battle.messages.push({ id: 'b1', role: 'user', text: 'We rush the road.', at: 1 });
battle.messages.push({ id: 'b2', role: 'char', charId: 'rebel_scout', text: 'The saws stop. Someone shouts.', at: 2 });
battle.messages.push({ id: 'b3', role: 'char', charId: 'rebel_scout', text: 'A tree comes down across the track.', at: 3 });
battle.messages.forEach(m => RP.rememberTurn(state, battle, m));
const beats = RP.beatsFromRoom(battle);
check('replay: a played chat becomes a beat script', beats.length >= 2 && beats.some(b => b.beat.includes('saws stop')));
const replay = RP.replayRoom(state, battle, [cutters], { perspective: 'the timber-cutters on the ridge' });
check('replay: a new room, same beats, new cast', replay.cast[0].id === 'timber_gang' && replay.beats.length === beats.length && replay.replayOf === battle.id);
check('replay: the perspective is stated in the prompt', RP.perspectiveBlock(replay).includes('timber-cutters on the ridge'));
check('replay: the script block keeps the main event on its rails', RP.scriptBlock(replay).includes('The Logging Road Ambush') && RP.scriptBlock(replay).includes('Scheduled to happen next'));
check('replay: opening one is itself filed in the world log', state.log.some(e => e.kind === 'replay' && e.text.includes('timber-cutters')));
check('replay: the opener is a scene card, not a played turn', replay.messages[0].role === 'scene' && RP.counter(replay) === 0);

// ---------- export / import ----------
state.rooms.push(battle, replay);
const everything = RP.exportBundle(state, {});
check('export: a full bundle carries chats, lore, memory and the log', everything.kind === 'waluipedia-chatroom-bundle' && everything.rooms.length === 3 && everything.lore.length >= 2 && everything.chars.length === 3 && everything.log.length > 0);
const loreOnly = RP.exportBundle(state, { chats: false, memory: false, user: false });
check('export: lore can travel on its own', !loreOnly.rooms && !loreOnly.chars && loreOnly.lore.length >= 2);
const memoryOnly = RP.exportBundle(state, { chats: false, lore: false, user: false });
check('export: memory can travel on its own', !memoryOnly.rooms && !memoryOnly.lore && memoryOnly.chars.length === 3 && Array.isArray(memoryOnly.log));

const fresh = RP.loadState({ getItem: () => null, setItem() {} });
const stats = RP.importBundle(fresh, everything, 'merge');
check('import: a bundle restores chats, lore, memory and the log', fresh.rooms.length === 3 && fresh.lore.length >= 2 && fresh.chars.length === 3 && stats.rooms === 3);
const again = RP.importBundle(fresh, everything, 'merge');
check('import: importing twice does not duplicate anything', fresh.rooms.length === 3 && again.rooms === 0);

const older = JSON.parse(JSON.stringify(everything));
older.rooms[0].title = 'Stale copy';
older.rooms[0].updated = 1;
RP.importBundle(fresh, older, 'merge');
check('import: the newer copy of a chat wins a merge', fresh.rooms.find(r => r.id === everything.rooms[0].id).title !== 'Stale copy');

const otherHalf = { kind: 'waluipedia-chatroom-bundle', chars: [{ id: 'sans', name: 'Sans', notes: [{ at: 9, text: 'Remembered on another machine.' }], knowledge: ['A second fact.'], relations: {} }] };
RP.importBundle(fresh, otherHalf, 'merge');
const merged = fresh.chars.find(c => c.id === 'sans');
check('import: two memories of one character merge instead of overwriting', merged.notes.some(x => x.text.includes('another machine')) && merged.notes.some(x => x.text.includes('saws')) && merged.knowledge.length === 2);

const replaced = RP.loadState({ getItem: () => null, setItem() {} });
replaced.lore = [{ id: 'keep_me', title: 'Keep me', text: '', tags: [], chars: [] }];
RP.importBundle(replaced, loreOnly, 'replace');
check('import: replace swaps the named section outright', !replaced.lore.some(x => x.id === 'keep_me') && replaced.lore.length >= 2);

let refused = false;
try { RP.importBundle(fresh, { kind: 'something-else' }, 'merge'); } catch (e) { refused = true; }
check('import: a foreign bundle is refused', refused);

// ---------- storage survives the new sections ----------
RP.saveState(store, state);
const back = RP.loadState(store);
check('storage: lore, memory, the log and the account round-trip', back.lore.length === state.lore.length && back.chars.length === 3 && back.log.length === state.log.length && back.user.handle === 'waluipedia');

// ---------- the WAHwire becomes scenarios ----------
const profiles = { waluigi: { avatar: 'portraits/waluigi.jpg' } };
const wire = [
  { id: 'ww_a', author: 'waluigi', order: 3, likes: 500, status: 'posted', timestamp: '5 Aethel', content: 'The ridge road floods and nobody files it.', tags: ['ridge'], links: [{ id: 'sans', type: 'character' }, { id: 'the_ambush', type: 'event' }], comments: [{ author: 'sans', content: 'so move the road' }, { author: 'timber_gang', content: 'move the rain' }] },
  { id: 'ww_b', author: 'timber_gang', order: 9, likes: 12, status: 'posted', timestamp: '9 Aethel', content: 'Second saw lost this month.', tags: ['timber'], links: [] },
  { id: 'ww_c', author: 'rebel_scout', order: 1, likes: 40, status: 'generated', timestamp: '1 Aethel', content: 'A draft the archive never posted.', tags: [], links: [] },
].map(p => RP.normPost(p, profiles));
check('wire: posts normalise with author, avatar, tags and linked characters',
  wire[0].authorName.toLowerCase().includes('waluigi') && wire[0].avatar.includes('portraits/') && wire[0].chars.includes('sans'));
check('wire: newest first is the default sort, and it is by filing order',
  RP.sortPosts(wire, 'newest')[0].id === 'ww_b' && RP.sortPosts(wire, 'oldest')[0].id === 'ww_c' && RP.sortPosts(wire, 'liked')[0].id === 'ww_a');

const castIndex = { sans, timber_gang: cutters, rebel_scout: rebel };
check('wire: every post starts unused', RP.filterPosts(wire, { view: 'unused' }, state).length === 3);
const scenario = RP.scenarioFromPost(wire[0], castIndex);
check('scenario: the post is the scene and the people it names are the cast',
  scenario.scene.includes('ridge road floods') && scenario.suggestedCast.some(c => c.id === 'sans'));
check('scenario: the replies underneath become beats',
  scenario.beats.length === 2 && scenario.beats[0].detail.includes('move the road'));
const wireRoom = RP.newRoom(scenario.suggestedCast, { scene: scenario.scene, sceneName: scenario.name, beats: scenario.beats });
RP.markPostUsed(state, wire[0].id, wireRoom);
check('wire: playing a post marks it used, and the unused view shrinks',
  RP.postUsed(state, 'ww_a') && RP.filterPosts(wire, { view: 'unused' }, state).length === 2 && RP.filterPosts(wire, { view: 'used' }, state).length === 1);
check('wire: the "never posted" view finds the archive\u2019s own drafts',
  RP.filterPosts(wire, { view: 'unfiled' }, state).map(p => p.id).join() === 'ww_c');
check('wire: search matches content, author and tags',
  RP.filterPosts(wire, { query: 'saw' }, state).length === 1 && RP.filterPosts(wire, { query: 'ridge' }, state).length === 1);
check('wire: used posts survive a save/load and an export', (() => {
  RP.saveState(store, state);
  const round = RP.loadState(store);
  const bundle = RP.exportBundle(state, { chats: false, lore: false, user: false });
  return RP.postUsed(round, 'ww_a') && Boolean(bundle.usedPosts.ww_a);
})());

// ---------- collections ----------
const collection = RP.normCollection({
  id: 'ridge_crew', name: 'The Ridge Crew', title: 'Everyone on that hill',
  summary: 'The people the ridge belongs to, on paper and otherwise.',
  members: [{ id: 'sans', name: 'Sans', role: 'watchman' }, { id: 'timber_gang', name: 'The Timber Gang', role: 'cutters' }, { id: 'ghost_id', name: 'Not in the cast' }],
}, castIndex);
check('collections: members resolve to playable characters, strangers drop out',
  collection.members.length === 2 && collection.total === 3 && collection.members[0].role === 'watchman');

// ---------- the director ----------
const group = RP.newRoom([sans, cutters, rebel], {});
group.messages.push({ id: 'd1', role: 'user', text: 'Who is cutting tonight?', at: 1 });
group.messages.push({ id: 'd2', role: 'char', charId: 'sans', text: 'nobody. the saws are off.', at: 2 });
check('director: the prompt lists everyone except the character who just spoke',
  (() => { const p = RP.directorPrompt(group, sans); return !p.includes('- Sans') && p.includes('- The Timber Gang') && p.includes('NEXT:'); })());
check('director: NEXT picks the named character', RP.parseDirector('NEXT: The Timber Gang', group, sans).next === 'timber_gang');
check('director: USER hands the scene back', RP.parseDirector('USER', group, sans).next === 'user');
check('director: an unreadable answer hands back rather than guessing', RP.parseDirector('uhh maybe someone?', group, sans).next === 'user');
check('director: it may never re-pick the character who just spoke', RP.parseDirector('NEXT: Sans', group, sans).next === 'user');
check('director: chain length counts character turns since the player', RP.chainLength(group) === 1);
group.messages.push({ id: 'd3', role: 'char', charId: 'timber_gang', text: '*spits*', at: 3 });
group.messages.push({ id: 'd4', role: 'char', charId: 'rebel_scout', text: 'we heard them stop.', at: 4 });
group.messages.push({ id: 'd5', role: 'char', charId: 'sans', text: 'everyone hears everything here.', at: 5 });
check('director: the ceiling always returns the scene to the player',
  RP.chainLength(group) === 4 && RP.parseDirector('NEXT: The Timber Gang', group, sans).next === 'user');
group.maxChain = 6;
check('director: the ceiling is configurable per room', RP.parseDirector('NEXT: The Timber Gang', group, sans).next === 'timber_gang');
group.messages.push({ id: 'd6', role: 'user', text: 'I step out of the trees.', at: 6 });
check('director: a player turn resets the chain', RP.chainLength(group) === 0);

// ---------- generated pages are in sync with these sources ----------
let built = true;
try {
  execFileSync('python3', ['tools/build-chatroom.py', '--check'], { cwd: repoRoot, stdio: 'pipe' });
} catch (e) { built = false; console.log(String(e.stdout || '')); }
check('build: chatroom.html and workflow/roleplay.html match their sources', built);

console.log(ok ? 'ALL CHATROOM CORE TESTS PASS' : 'CHATROOM CORE TESTS FAILED');
process.exit(ok ? 0 : 1);
