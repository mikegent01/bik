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
  { id: 'ww_a', author: 'waluigi', order: 3, likes: 500, status: 'posted', timestamp: '5 Aethel', content: 'The ridge road floods every autumn, the concession knows it floods, and the filing that would say so out loud has been sitting unwritten for two seasons while the crews keep being sent up it in the dark.', tags: ['ridge'], links: [{ id: 'sans', type: 'character' }, { id: 'timber_gang', type: 'character' }, { id: 'the_ambush', type: 'event' }], comments: [{ author: 'sans', content: 'so move the road, or move the season, or admit the concession would rather replace a crew than a culvert' }, { author: 'timber_gang', content: 'move the rain while you are at it. we have asked four times and been told it is a drainage question for next year, every year' }, { author: 'rebel_scout', content: 'the road floods because of what was cut above it, which is a sentence nobody in that office will write down' }] },
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
  scenario.beats.length === 3 && scenario.beats[0].detail.includes('move the road'));
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

// ---------- What Ifs: long scenarios composed from filed records ----------
const archive = {
  whatifs: [{
    id: 'wf_bank', title: 'What If Wario Owned the Abstract Bank?',
    premise: 'A metaphysical bank lets you withdraw abstract concepts and sell them for gold. Once sold, the concept stops existing — everywhere, for everyone, permanently. The account belongs to one man, he is given three resets, and the filing exists because he needed four.',
    summary: 'An eyewitness audit of the afternoon the account was opened: gravity goes first, then the law of equivalent exchange, then time, then the idea of a limit. Each withdrawal is cleverer than the one before it and each one fails worse, which is the whole argument of the filing rather than an accident of the telling.',
    divergence: 'The banker assigns full, unsupervised ownership of a metaphysical concept account to a sole proprietor with no oversight, no ceiling and no reading habit.',
    epigraph: 'It is not a scam. A scam has a ceiling.',
    outcome: 'Four withdrawals, three resets, one afternoon, and a reserve that left through the roof it had been standing under.',
    subject: 'Sans', tags: ['Sans', 'Promo Mario', 'Economics'], wordCount: 9000, resetsTotal: 3,
    verdict: { body: 'He was never buying money; he already had money, obscenely, before the courier arrived. What he bought, four times, was the removal of a limit — and limits are the only thing holding the ceiling up. The finding is not that he was greedy. The finding is that he was consistent.' },
    findings: [{ t: 'The concept he resents is never the concept he is selling.' }],
    chapters: Array.from({ length: 6 }, (_, i) => ({
      heading: 'Chapter ' + (i + 1), phase: 'phase ' + (i + 1),
      body: 'A long paragraph of filed prose for chapter ' + (i + 1) + '. It runs for several sentences so the beat carries real detail rather than a label. Somebody signs a document they have not read, out loud, in front of a witness who says nothing. The floor of the room disagrees with the signature about four seconds later, and the disagreement is filed as an accident.',
    })),
  }],
  events: [{
    id: 'the_ridge_ambush', name: 'The Logging Road Ambush',
    summary: 'Rebels came out of the treeline at the logging road and the saws stopped. Nobody filed what the cutters did next, which is the part that mattered.',
    outcome: 'The road held, the concession lost a season, and two names went into the record without dossiers.',
    date: '9 Aethel, 1040 BF', location: 'The ridge road above the concession', era: '1040 BF', type: 'Skirmish',
    image: 'assets/images/events/ridge.jpg',
    participants: [
      { id: 'sans', name: 'Sans', role: 'watched the road' },
      { id: 'timber_gang', name: 'The Timber Gang', role: 'cutting when it started' },
      { id: 'gregir_fendelsohn', name: 'Gregir Fendelsohn', role: 'called the retreat and was never written up' },
    ],
    timeline: { entries: [
      { time: 'before dawn', beat: 'The saws start', detail: 'Two crews on the ridge, working the top of the road in the dark because the concession pays by the trunk.' },
      { time: 'first light', beat: 'The treeline moves', detail: 'Something crosses the gap between the stumps, twice, and nobody agrees afterwards how many there were.' },
      { time: 'mid-morning', beat: 'The saws stop', detail: 'One crew downs tools and the silence carries further than the noise ever did.' },
      { time: 'noon', beat: 'The road holds', detail: 'A tree comes down across the track and the rebels take the long way round, which costs them the day.' },
      { time: 'dusk', beat: 'The count', detail: 'Two names are written into the filing and neither of them is ever given a page.' },
    ] },
  }],
  factions: [{
    id: 'midlands_diet', name: 'The Midlands Diet', type: 'Legislature', region: 'The Midlands',
    summary: 'A 39-seat chamber that passed two emergency measures inside three days.',
    description: 'Waluigi files the Midlands Diet under institutions that did their job exactly as designed, which is the worst thing that can be said about a parliament.\n\nThirty-nine seats, twenty-eight of them aligned before the session opened, and a public gallery that was cleared at nine in the morning for reasons the minutes do not record.\n\nThe vote itself took four minutes. The argument about whether it had been a vote at all has taken considerably longer and is still going.',
    leadership: [{ id: 'sans', name: 'Sans', role: 'Sitting member, resigned in protest' }],
  }],
  congress: { sessions: [{ name: 'The First Glazed Congress', date: '14th Bloomtide, 1026', year: 1026, summary: 'The founding session, convened in the shadow of a crisis nobody wanted named.' }] },
  posts: wire,
};
const seatCast = { sans: sans, timber_gang: cutters, rebel_scout: rebel };

const filed = RP.whatIfFromFiled(archive.whatifs[0], seatCast);
check('what-if (filed): the archive’s own branch becomes a playable scenario',
  filed.kind === 'filed' && filed.beats.length === 6 && filed.brief.includes('The divergence') && filed.brief.includes('The verdict on record'));
check('what-if (filed): the brief is long enough to run a session from', filed.brief.length > RP.WHATIF_MIN_BRIEF);

const turned = RP.whatIfFromEvent(archive.events[0], seatCast);
check('what-if (divergence): a filed session is turned at its own hinge',
  turned.kind === 'divergence' && /had gone the other way/.test(turned.name) && turned.brief.includes('What actually happened'));
check('what-if (divergence): the beats after the hinge are the script',
  turned.beats.length >= 3 && turned.beats[0].detail.includes('does not go the way the record says'));

const gaps = RP.wantedFrom(archive.events, archive.factions, seatCast, 5);
check('wanted pages: people named in filings with no record of their own',
  gaps.length === 1 && gaps[0].id === 'gregir_fendelsohn');
check('wanted pages: bodies and filed records are not counted as missing people',
  !gaps.some(g => /timber|diet|ambush/i.test(g.id)));
const gap = RP.whatIfFromGap(gaps[0], seatCast);
check('what-if (gap): the unwritten person is playable, with witnesses beside them',
  gap.suggestedCast[0].id === 'gregir_fendelsohn' && gap.suggestedCast.length >= 3 &&
  gap.suggestedCast[0].title.includes('Unwritten'));
check('what-if (gap): the filing they walked through becomes the script',
  gap.beats.length >= 4 && gap.beats.some(b => b.beat.includes('The saws stop')));
check('what-if (gap): singular grammar when a name is referenced once', gap.brief.includes('referenced once'));

const chamber = RP.whatIfFromBody(archive.factions[0], [sans, cutters, RP.normChar({ id: 'x', name: 'X', affiliation: 'The Midlands Diet' })], archive.congress);
check('what-if (chamber): a body seats itself from the cast’s affiliations',
  chamber && chamber.kind === 'chamber' && chamber.suggestedCast.length >= 2 && chamber.brief.includes('On the record'));

const flash = RP.whatIfFromPost(wire[0], seatCast);
check('what-if (flashpoint): a loud wire post becomes a branch where it was right',
  flash && flash.kind === 'flashpoint' && flash.brief.includes('The post') && flash.beats.length === 3);

const board = RP.buildWhatIfs(archive, seatCast, { limit: 8 });
check('board: every scenario on it clears the quality floor',
  board.length > 0 && board.every(s => RP.scenarioQuality(s) > 0 && s.brief.length >= RP.WHATIF_MIN_BRIEF && s.beats.length >= RP.WHATIF_MIN_BEATS && s.suggestedCast.length >= 2));
check('board: the engines are mixed rather than one owning the page',
  new Set(board.map(s => s.kind)).size >= 3);
check('board: a thin scenario is dropped, not padded',
  RP.scenarioQuality(RP.whatIfFromPost({ id: 'x', authorName: 'A', content: 'short', comments: [{ author: 'sans', content: 'ok' }], chars: ['sans'], tags: [], likes: 1, timestamp: 'now' }, seatCast) || null) === 0);

// ---- written by the reader, composed by the page ----
const mine = RP.composeScenario({
  text: 'What if The Logging Road Ambush had been reported honestly and The Midlands Diet had to read it out loud? Who resigns?',
}, archive, seatCast);
check('create: the page matches the records you named',
  mine.brief.includes('The Logging Road Ambush') && mine.brief.includes('Midlands Diet'));
check('create: the matched filing’s own timeline becomes the script',
  mine.beats.length >= 3 && mine.beats.some(b => b.beat.includes('saws')));
check('create: the cast comes from the records, not from thin air',
  mine.suggestedCast.length >= 2 && mine.suggestedCast.some(c => c.id === 'sans'));
check('create: your question is kept as the question the table answers',
  mine.questions.some(q => /resigns/.test(q)));
check('create: "What if" is not doubled up in the title', !/what if what if/i.test(mine.name));
check('create: a bare one-liner still gets a three-beat spine',
  RP.composeScenario({ text: 'The concession burns.' }, archive, seatCast).beats.length >= 3);
check('create: written scenarios round-trip through storage and bundles', (() => {
  state.scenarios = [mine];
  RP.saveState(store, state);
  const round = RP.loadState(store);
  const bundle = RP.exportBundle(state, { chats: false, memory: false, user: false });
  const target = RP.loadState({ getItem: () => null, setItem() {} });
  const st = RP.importBundle(target, bundle, 'merge');
  return round.scenarios.length === 1 && bundle.scenarios.length === 1 && st.scenarios === 1;
})());
check('play: a scenario hands the room a scene, a name and its beats', (() => {
  const opts = RP.scenarioRoomOpts(turned);
  const built = RP.newRoom(turned.suggestedCast, opts);
  return built.beats.length === turned.beats.length && built.sceneName === turned.name &&
    built.messages[0].role === 'scene' && built.scene.includes('What actually happened');
})());

// ---------- character state: sheets, directives, roster ----------
const fight = RP.newRoom([sans, cutters], {
  statePreset: 'rpg',
  setup: { sans: { hpPct: 50, flags: 'wounded, hunted', items: 'brass key', status: 'one arm useless' } },
});
check('state: a scenario can start someone at half health, wounded and carrying',
  fight.states.sans.hp.value === 50 && fight.states.sans.hp.max === 100 &&
  fight.states.sans.flags.wounded && fight.states.sans.flags.hunted &&
  fight.states.sans.items[0] === 'brass key' && fight.states.sans.status === 'one arm useless');
check('state: everyone else starts whole', fight.states.timber_gang.hp.value === 100 && fight.states.timber_gang.mp.value === 50);
check('state: the story preset carries no numbers at all', (() => {
  const quiet = RP.newRoom([sans, cutters], { statePreset: 'story' });
  return !quiet.states.sans.hp && !quiet.states.sans.mp;
})());

const names = fight.cast.map(c => c.name);
const staged = RP.parseDirectives(
  'The saw comes down and he does not get his arm clear in time.\n' +
  '[[HP: Sans -35]]\n[[MP: Sans -10]]\n[[FLAG: Sans bleeding]]\n[[FLAG: Sans hunted = false]]\n' +
  '[[COUNT: The Timber Gang saws -1]]\n[[ITEM: The Timber Gang + the broken blade]]\n' +
  '[[STATUS: The Timber Gang blood to the elbow]]\n[[ENTER: The Rebel Scout — comes out of the treeline]]', names);
check('directives: the stage directions are stripped from what the reader sees',
  staged.clean === 'The saw comes down and he does not get his arm clear in time.' && staged.directives.length === 8);
check('directives: a multi-word name is one character, not two words',
  staged.directives.some(d => d.kind === 'counter' && d.who === 'The Timber Gang' && d.name === 'saws'));
const applied = RP.applyDirectives(state, fight, staged.directives, () => rebel);
check('state: damage subtracts rather than sets', fight.states.sans.hp.value === 15);
check('state: spending power is tracked too', fight.states.sans.mp.value === 40);
check('state: a flag can be set and another cleared in the same turn',
  fight.states.sans.flags.bleeding === true && fight.states.sans.flags.hunted === undefined);
check('state: counters, inventory and physical notes all land',
  fight.states.timber_gang.counters.saws === -1 &&
  fight.states.timber_gang.items[0] === 'the broken blade' &&
  fight.states.timber_gang.status === 'blood to the elbow');
check('roster: the model can walk a character into the scene',
  fight.cast.some(c => c.id === 'rebel_scout') && fight.states.rebel_scout &&
  applied.entered.length === 1 && state.log.some(e => e.kind === 'roster'));
check('state: every change is reported to the reader as a line',
  applied.lines.length >= 6 && applied.lines[0].includes('Sans') && applied.lines[0].includes('15/100'));
const out = RP.applyDirectives(state, fight, RP.parseDirectives('[[EXIT: The Timber Gang — carried off the ridge]]', fight.cast.map(c => c.name)).directives, () => null);
check('roster: the model can write a character out again',
  out.exited.length === 1 && !fight.cast.some(c => c.id === 'timber_gang') && fight.states.timber_gang.present === false);
check('state: the prompt tells the model exactly what is true right now', (() => {
  const block = RP.stateBlock(fight);
  return block.includes('HP 15/100 (badly hurt)') && block.includes('bleeding') && !block.includes('The Timber Gang');
})());
check('state: the rules for changing it are in the system prompt', (() => {
  const system = RP.systemFor(state, fight, sans);
  return system.includes('CHARACTER STATE') && system.includes('[[HP: Name -12]]') && system.includes('[[ENTER:');
})());
check('state: mechanics can be switched off entirely', (() => {
  const quiet = RP.newRoom([sans, cutters], { mechanics: 'off' });
  return !RP.systemFor(state, quiet, sans).includes('STAGE DIRECTIONS');
})());
check('state: a hit that would kill floors at zero, not below',
  RP.applyChange(fight.states.sans, { kind: 'hp', op: '-', value: 500 }).includes('down') && fight.states.sans.hp.value === 0);
check('state: sheets survive a save and load', (() => {
  state.rooms = [fight];
  RP.saveState(store, state);
  const round = RP.loadState(store);
  return round.rooms[0].states.sans.hp.value === 0 && round.rooms[0].states.sans.flags.bleeding;
})());

// ---------- hooks: strong openers, weak ones rejected ----------
const hookScenario = board.find(s => s.kind === 'divergence') || board[0];
const hookSystem = RP.hookPrompt(hookScenario, RP.hookContext(state, hookScenario));
check('hook: the prompt hands over the filed material and the cast',
  hookSystem.includes(hookScenario.name) && hookSystem.includes('THE FILED MATERIAL') && hookSystem.includes('THE PEOPLE IN IT'));
check('hook: the prompt bans the generic openers by name',
  /you find yourself/i.test(hookSystem) && /BANNED/.test(hookSystem) && /second person/i.test(hookSystem));
check('hook: it demands a title, an opener and the stakes',
  /TITLE:/.test(hookSystem) && /OPEN:/.test(hookSystem) && /STAKES:/.test(hookSystem));
const goodHook = RP.parseHook([
  'TITLE: The Saws Stop On The Ridge Road',
  'OPEN: ' + 'Sans has the road in his sights and The Timber Gang are still cutting, forty feet up the ridge, ' +
    'because nobody told them the treeline moved. The rain is doing what it does every autumn to the logging road. ' +
    'You are close enough to hear the second saw bite and close enough to be blamed for what happens next. ' +
    'Somebody has to shout, and there are about four seconds left in which shouting still helps anyone.',
  'STAKES: If the crews keep cutting, the concession loses the season and somebody loses an arm.',
].join('\n'), hookScenario);
check('hook: a well-formed answer parses into title, opener and stakes',
  goodHook.title.includes('Saws Stop') && goodHook.open.includes('treeline') && goodHook.stakes.includes('concession'));
check('hook: a strong, specific opener is accepted', !RP.hookIsWeak(goodHook, { suggestedCast: [sans, cutters], brief: 'ridge road' }));
check('hook: "you find yourself" is rejected on sight',
  RP.hookIsWeak(RP.parseHook('OPEN: You find yourself in a place where things are happening and the air is thick with tension and possibility, and you wonder what you should do about any of it, as one does in these moments of quiet before something begins.', hookScenario), hookScenario));
check('hook: an opener with none of the filed names in it is rejected',
  RP.hookIsWeak(RP.parseHook('OPEN: ' + 'The door opens. Somebody walks through it carrying something heavy, and the room goes quiet in the way rooms do. '.repeat(4), hookScenario), hookScenario));
check('hook: an unformatted reply is used rather than thrown away',
  RP.parseHook('Just prose, no labels at all, but usable prose.', hookScenario).open.startsWith('Just prose'));
check('hook: with no model at all the cold open is still in the moment', (() => {
  const cold = RP.coldOpen(hookScenario);
  return cold.length > 120 && /What do you do\?$/.test(cold.trim());
})());

// ---------- backfills ----------
const backfillArchive = {
  events: [
    { id: 'the_ridge_ambush', name: 'The Logging Road Ambush', summary: archive.events[0].summary, keyEvents: ['the_vigilance_crisis', 'the_second_summit'], participants: archive.events[0].participants },
    { id: 'the_audit', name: 'The Midnight Audit', summary: 'The audit that everyone dates from, which refers back to the Vigilance Crisis twice on its first page.', keyEvents: ['the_vigilance_crisis'], participants: [{ id: 'sans', name: 'Sans', role: 'signed it' }] },
  ],
  factions: [{ id: 'crew', name: 'The Crew', summary: 'A body that lists the crisis among its key events.', keyEvents: ['the_vigilance_crisis'] }],
  knownIds: ['the_ridge_ambush', 'the_audit'],
};
const gapsFound = RP.backfillsFrom(backfillArchive, seatCast, state, 5);
check('backfill: events everything points at and nobody wrote are found',
  gapsFound.length === 1 && gapsFound[0].id === 'the_vigilance_crisis' && gapsFound[0].count === 3);
check('backfill: filed records are never mistaken for holes',
  !gapsFound.some(g => g.id === 'the_ridge_ambush' || g.id === 'the_audit'));
const backfill = RP.whatIfFromBackfill(gapsFound[0], seatCast);
check('backfill: the hole becomes a full scenario with a brief and a script',
  backfill.kind === 'backfill' && backfill.brief.includes('The hole') && backfill.beats.length >= 3 &&
  RP.scenarioQuality(backfill) > 0);
check('backfill: "most used" counts the times this reader has played one', (() => {
  RP.noteBackfillUse(state, 'backfill:the_vigilance_crisis');
  RP.noteBackfillUse(state, 'backfill:the_vigilance_crisis');
  const ranked = RP.backfillsFrom(backfillArchive, seatCast, state, 5);
  return state.backfillUses.the_vigilance_crisis === 2 && ranked[0].uses === 2;
})());

// ---------- sequels ----------
const played = RP.newRoom([sans, cutters], { sceneName: 'The Saws Stop', scene: 'The ridge road, at first light.', beats: turned.beats });
RP.ensureSheets(played);
played.states.sans.hp.value = 40;
played.states.sans.flags.bleeding = true;
played.messages.push({ id: 'p1', role: 'user', text: 'I take the long way round the stumps.', at: 1 });
played.messages.push({ id: 'p2', role: 'char', charId: 'sans', text: 'nobody uses that path twice.', at: 2, pinned: true });
const sequel = RP.sequelFrom(played, state, {});
check('sequel: it opens on the unfinished business, not on a recap',
  sequel.kind === 'sequel' && sequel.brief.includes('How it ended') && sequel.brief.includes('long way round'));
check('sequel: the wounds come with you', sequel.brief.includes('HP 40/100') && sequel.brief.includes('bleeding') && sequel.states.sans.hp.value === 40);
check('sequel: pinned lines are carried in as what mattered', sequel.brief.includes('nobody uses that path twice'));
check('sequel: beats that never fired fire here instead', sequel.beats.length >= 3);
check('sequel: opening it starts a room already in that state', (() => {
  const next = RP.newRoom(sequel.suggestedCast, RP.scenarioRoomOpts(sequel));
  return next.states.sans.hp.value === 40 && next.states.sans.flags.bleeding === true;
})());

// ---------- continuations: carry the filed record forward ----------
const sagaEvents = [
  { id: 'saga_one', name: 'The Promo Account', era: '1040 BF — the studio file', date: '4 Aethel, 1040 BF',
    summary: 'The first filing of the studio: a tour, a product demonstration and a tape that should not exist.',
    participants: [{ id: 'sans', name: 'Sans', role: 'was filming' }] },
  { id: 'saga_two', name: 'The Cut', era: '1040 BF — the studio file', date: '5 Aethel, 1040 BF',
    summary: 'The second filing: the exits lie, the applause is recorded, and one word stops the whole production. The record of the studio ends here, mid-raid, with the director walking out of the building carrying a folder and a small wired remote.',
    outcome: 'The escape became a raid on the show itself. Nobody has filed what happened after the director left the corridor.',
    aftermath: '**The show has a director.** He outranks everyone in the building, and the seats were empty the entire time.',
    location: 'The Nintendo Mania studio', image: 'plate.jpg',
    participants: [{ id: 'sans', name: 'Sans', role: 'said the word' }, { id: 'timber_gang', name: 'The Timber Gang', role: 'crewed the set' }],
    timeline: { entries: [
      { time: 'late morning', beat: 'Fire, and the alarm', detail: 'The actor erupts and the alarm is on the far wall.' },
      { time: 'noon', beat: 'CUT', detail: 'One production command stops everything in the building.' },
      { time: 'after', beat: 'The director leaves', detail: 'A folder, a cigar snapped in half, and a small wired remote carried like a habit.' },
    ] } },
  { id: 'other_saga', name: 'A Different File', era: '1035 BF — the coup chain', date: '1035 BF',
    summary: 'An unrelated filing from another era entirely, long enough to count as a saga head of its own.',
    participants: [{ id: 'rebel_scout', name: 'The Rebel Scout', role: 'was there' }] },
];
const sagas = RP.sagasFrom(sagaEvents);
const studio = sagas.find(x => x.era.includes('studio file'));
check('continuation: the archive’s own era lines are the sagas, newest first',
  sagas.length === 2 && studio.length === 2 && studio.head.id === 'saga_two' && sagas[0].head.id === 'other_saga');
const carry = RP.whatIfFromContinuation(studio, seatCast);
check('continuation: it picks up after the last filed line, not before it',
  carry.kind === 'continuation' && carry.brief.includes('Where the record stops') &&
  carry.brief.includes('The director leaves') && carry.premise.includes('minutes after'));
check('continuation: what the filing left behind comes with it',
  carry.brief.includes('How the last filing ended') && carry.brief.includes('What it left behind') &&
  carry.brief.includes('The saga so far'));
check('continuation: the beats push forward instead of replaying the record',
  carry.beats.length >= 4 && carry.beats.some(b => /never been filed|never named/i.test(b.detail)) &&
  !carry.beats.some(b => b.beat === 'CUT'));
check('continuation: it clears the quality floor like any other scenario', RP.scenarioQuality(carry) > 0);
check('continuation: the room is marked as writing new canon', (() => {
  const roomOpts = RP.scenarioRoomOpts(carry);
  const built = RP.newRoom(carry.suggestedCast, roomOpts);
  const system = RP.systemFor(state, built, carry.suggestedCast[0]);
  return built.canon === 'continuation' && system.includes('THIS IS A CONTINUATION') &&
    system.includes('[[NEW:') && system.includes('the description IS the portrait');
})());
check('continuation: a chat room is not told it is writing canon',
  !RP.systemFor(state, RP.newRoom([sans, cutters], {}), sans).includes('THIS IS A CONTINUATION'));

// ---------- invented characters ----------
const inventRoom = RP.newRoom(carry.suggestedCast, RP.scenarioRoomOpts(carry));
const invented = RP.parseDirectives(
  'The door opens before anyone reaches it.\n' +
  '[[NEW: Marguerite Oyle | the studio’s night archivist | wiry, sixty, ink to the elbows, a stopwatch on a bootlace round her neck]]',
  inventRoom.cast.map(c => c.name));
check('directives: a brand-new character parses into name, role and look',
  invented.directives[0].kind === 'new' && invented.directives[0].name === 'Marguerite Oyle' &&
  invented.directives[0].look.includes('stopwatch'));
const madeResult = RP.applyDirectives(state, inventRoom, invented.directives, () => null);
const made = inventRoom.cast.filter(c => c.invented)[0];
check('invented: they join the cast with a sheet of their own',
  made && made.name === 'Marguerite Oyle' && inventRoom.states[made.id] && inventRoom.states[made.id].hp);
check('invented: with no portrait anywhere, the description stands in for one',
  made.look.includes('ink to the elbows') && !made.image && made.summary.includes('night archivist'));
check('invented: they are kept, so they can be played again later',
  (state.newChars || []).some(c => c.id === made.id) && madeResult.lines[0].includes('New character'));
check('invented: they survive a save, a load and an export', (() => {
  RP.saveState(store, state);
  const bundle = RP.exportBundle(state, { chats: false, memory: false, user: false });
  return RP.loadState(store).newChars.some(c => c.look) && bundle.newChars.length >= 1;
})());
check('invented: the model reads them like anybody else', RP.stateBlock(inventRoom).includes('Marguerite Oyle'));

// ---------- fate: the world pushes back ----------
const fateRoom = RP.newRoom([sans, cutters], {});
check('fate: the table covers success, cost, a wrench, failure and refusal',
  ['triumph', 'success', 'cost', 'wrench', 'setback', 'refusal'].every(k => RP.FATE[k] && RP.FATE[k].dir.length > 60));
check('fate: a failure is told to stay failed', /FAILS/.test(RP.FATE.setback.dir) && /Never soften it/.test(RP.FATE.setback.dir));
check('fate: a refusal keeps the character in character', /does NOT do what they were asked/.test(RP.FATE.refusal.dir));
check('fate: off means the page never rolls at all',
  RP.rollFate({ settings: { fate: 'off' } }, fateRoom, {}) === null);
check('fate: rooms with mechanics off are never rolled for either',
  RP.rollFate({ settings: { fate: 'harsh' } }, RP.newRoom([sans], { mechanics: 'off' }), {}) === null);
check('fate: the roll lands somewhere in the table',
  ['triumph', 'success', 'cost', 'wrench', 'setback', 'refusal'].indexOf(RP.rollFate(state, fateRoom, { roll: 0.5 }).key) >= 0);
check('fate: harsh fails far more often than gentle', (() => {
  let gentleBad = 0, harshBad = 0;
  for (let i = 0; i < 200; i++) {
    const roll = i / 200;
    if (['setback', 'refusal', 'wrench'].includes(RP.rollFate({ settings: { fate: 'gentle' } }, fateRoom, { roll }).key)) gentleBad++;
    if (['setback', 'refusal', 'wrench'].includes(RP.rollFate({ settings: { fate: 'harsh' } }, fateRoom, { roll }).key)) harshBad++;
  }
  return harshBad > gentleBad * 1.5;
})());
check('fate: being hurt shifts the odds against you', (() => {
  const hurt = RP.newRoom([sans, cutters], { setup: { sans: { hpPct: 10, flags: 'wounded, hunted' } } });
  const whole = RP.newRoom([sans, cutters], {});
  let hurtBad = 0, wholeBad = 0;
  for (let i = 0; i < 200; i++) {
    const roll = i / 200;
    if (['setback', 'wrench'].includes(RP.rollFate({ settings: { fate: 'normal' } }, hurt, { roll }).key)) hurtBad++;
    if (['setback', 'wrench'].includes(RP.rollFate({ settings: { fate: 'normal' } }, whole, { roll }).key)) wholeBad++;
  }
  return hurtBad > wholeBad;
})());
check('fate: the model is ordered, not asked, and told not to narrate the dice', (() => {
  const block = RP.fateBlock(RP.rollFate(state, fateRoom, { force: 'setback' }));
  return block.includes('this is decided already') && block.includes('Do not narrate the dice') &&
    block.includes('you do not owe them a yes');
})());
check('fate: the instruction reaches the system prompt for that turn only', (() => {
  const withFate = RP.systemFor(state, fateRoom, sans, { fate: RP.rollFate(state, fateRoom, { force: 'refusal' }) });
  return withFate.includes('HOW THIS TURN RESOLVES') && !RP.systemFor(state, fateRoom, sans).includes('HOW THIS TURN RESOLVES');
})());

// ---------- the calendar: is this already history, or not yet? ----------
check('calendar: the archive’s own month order is the one used',
  RP.MONTHS[7] === 'Harvestide' && RP.MONTHS[8] === 'Aethel' && RP.MONTHS.length === 12);
check('calendar: a filed date parses', (() => {
  const d = RP.parseWahDate('5 Aethel, 1040 BF — continuing the studio encounter');
  return d.year === 1040 && d.month === 8 && d.day === 5 && d.exact;
})());
check('calendar: "the 21st of Highsun" parses too', (() => {
  const d = RP.parseWahDate('the 21st of Highsun, 1040 BF');
  return d.year === 1040 && d.month === 6 && d.day === 21;
})());
check('calendar: a time code is read in preference to prose', (() => {
  const d = RP.parseWahDate('TC:1040-08-30T23:50/SHD');
  return d.year === 1040 && d.month === 7 && d.day === 30;
})());
check('calendar: a bare year still gives something to compare',
  RP.parseWahDate('955 BF').year === 955 && !RP.parseWahDate('955 BF').exact);
check('calendar: legacy month spellings are not thrown away', RP.parseWahDate('4 Harvestside, 1040 BF').month === 7);
check('calendar: BF counts up, so a bigger year is later',
  RP.timeRelation('5 Aethel, 1040 BF', '1035 BF').rel === 'past' &&
  RP.timeRelation('1035 BF', '5 Aethel, 1040 BF').rel === 'future');
check('calendar: days between two dates in the same year are counted properly',
  RP.timeRelation('5 Aethel, 1040 BF', '21 Highsun, 1040 BF').days === -44);
check('calendar: an unknown date is flagged rather than guessed',
  RP.timeRelation('5 Aethel, 1040 BF', 'some time ago').rel === 'unknown');
check('calendar: the world clock is the fallback for "now"',
  RP.formatWahDate(RP.worldNow({ year: 1040, monthIndex: 8, day: 5 })) === '5 Aethel, 1040 BF');

const timedRoom = RP.newRoom([sans, cutters], { date: '5 Aethel, 1040 BF' });
const timedArchive = {
  events: [
    { id: 'past_one', name: 'The Highsun Vote', date: '21 Highsun, 1040 BF', summary: 'The vote that everybody dates from.',
      participants: [{ id: 'sans', name: 'Sans' }] },
    { id: 'future_one', name: 'The Darkmoon Reckoning', date: '30 Darkmoon, 1040 BF', summary: 'What the ridge road costs, eventually.',
      participants: [{ id: 'sans', name: 'Sans' }] },
  ],
};
const known = RP.knowledgeBlock(state, timedRoom, timedArchive);
check('knowledge: filings before the scene are offered as history',
  known.includes('ALREADY HISTORY') && known.includes('The Highsun Vote') && known.includes('before this scene'));
check('knowledge: filings after the scene are forbidden, by name',
  known.includes('HAS NOT HAPPENED YET') && known.includes('The Darkmoon Reckoning') &&
  known.includes('do not mention'));
check('knowledge: the scene is told what date it is and how the calendar runs',
  known.includes('5 Aethel, 1040 BF') && known.includes('the year counts UP'));
check('knowledge: it reaches the system prompt',
  RP.systemFor(state, timedRoom, sans, { archive: timedArchive }).includes('HAS NOT HAPPENED YET'));

// ---------- the filed description drives the performance ----------
const described = RP.normChar({
  id: 'archivist_x', name: 'Scribe Dewdrop', title: 'The Ledger of the Grove',
  race: 'Toad', affiliation: 'The Mages Guild', faction: 'Autumnwood Accords Desk',
  status: 'Active — injured, still filing', fameTier: 'Regionally known', powerLevel: 12,
  summary: 'The scribe who dates everything and forgives nothing.',
  description: 'A guild archivist who will not let a wrong date stand, cites the record mid-argument, and is quietly terrified of the arcane work going on two floors down.',
  keyEvents: ['a', 'b'], relatedArticles: ['c'],
});
check('cast: the filed description survives loading', described.description.includes('will not let a wrong date stand'));
check('cast: the affiliation, faction and standing survive too',
  described.affiliation === 'The Mages Guild' && described.faction === 'Autumnwood Accords Desk' &&
  described.fameTier === 'Regionally known' && described.powerLevel === 12);
const dossier = RP.card(described);
check('prompt: the card hands the model the description, not just a summary',
  dossier.includes('Filed description') && dossier.includes('cites the record mid-argument') &&
  dossier.includes('Affiliation: The Mages Guild'));
check('prompt: a behaviour line is inferred from what the archive already says',
  /cites the record/.test(RP.roleFor(described)) && /arcane/.test(RP.roleFor(described)));
check('prompt: the behaviour line follows the character, not a template',
  RP.roleFor(RP.normChar({ name: 'A Captain', description: 'A soldier and commander of the legion.' }))
    !== RP.roleFor(described));
check('prompt: a group turn shows the rest of the cast with their own summaries',
  RP.groupPrompt([described, sans], sans, {}).includes('The Mages Guild'));

// ---------- memory is dated, twice ----------
const datedRoom = RP.newRoom([sans], { date: '5 Aethel, 1040 BF', title: 'The ridge road' });
RP.rememberTurn(state, datedRoom, { id: 'm1', role: 'char', charId: 'sans', text: 'the saws stopped at noon.', at: Date.now() });
const datedMem = RP.charMemory(state, sans);
check('memory: a remembered line carries the in-world date and the chat it came from', (() => {
  const note = datedMem.notes[datedMem.notes.length - 1];
  return note.when === '5 Aethel, 1040 BF' && note.roomTitle === 'The ridge road' && note.at > 0;
})());
RP.logEvent(state, { kind: 'chat', roomId: 'other', roomTitle: 'Another room', when: '30 Darkmoon, 1040 BF', chars: ['sans'], text: 'Sans is told how it ends.' });
const recall = RP.memoryBlock(state, [sans], timedRoom);
check('memory: the world log prints the in-world date of every line', recall.includes('30 Darkmoon, 1040 BF'));
check('memory: a log line from after this scene is marked unknowable',
  recall.includes('AFTER this scene — they cannot know it'));
check('memory: what a character remembers says when and where they said it',
  recall.includes('5 Aethel, 1040 BF') && recall.includes('The ridge road'));

// ---------- browsing 189 characters ----------
const browse = [
  RP.normChar({ id: 'p1', name: 'Alpha', race: 'Toad', affiliation: 'The Guild', fameScore: 10, powerLevel: 2, keyEvents: ['a'] }),
  RP.normChar({ id: 'p2', name: 'Beta', race: 'Toad', affiliation: 'The Guild', fameScore: 90, powerLevel: 40, keyEvents: ['a', 'b', 'c'] }),
  RP.normChar({ id: 'p3', name: 'Gamma', race: 'Koopa', affiliation: 'The Legion', fameScore: 50, powerLevel: 9, summary: 'An ice mage of the Dark Shores.' }),
];
const browseState = { rooms: [{ id: 'r', updated: 200, cast: [browse[1]], messages: [{ role: 'char', charId: 'p2' }, { role: 'char', charId: 'p2' }] }], chars: [{ id: 'p3', notes: [1, 2, 3], knowledge: [] }] };
const ctx = RP.castContext(browseState);
check('cast browser: sort by name, fame, power, filings and play count all differ',
  RP.sortCast(browse, 'name', ctx)[0].id === 'p1' &&
  RP.sortCast(browse, 'fame', ctx)[0].id === 'p2' &&
  RP.sortCast(browse, 'power', ctx)[0].id === 'p2' &&
  RP.sortCast(browse, 'filings', ctx)[0].id === 'p2' &&
  RP.sortCast(browse, 'played', ctx)[0].id === 'p2' &&
  RP.sortCast(browse, 'remember', ctx)[0].id === 'p3');
check('cast browser: search reads the whole dossier, not just the name',
  RP.filterCast(browse, { query: 'ice mage' }, ctx).length === 1 &&
  RP.filterCast(browse, { query: 'dark shores' }, ctx)[0].id === 'p3');
check('cast browser: facets filter by race and affiliation',
  RP.filterCast(browse, { race: 'Toad' }, ctx).length === 2 &&
  RP.filterCast(browse, { affiliation: 'The Legion' }, ctx).length === 1);
check('cast browser: played / never-played views work off your own chats',
  RP.filterCast(browse, { view: 'played' }, ctx).length === 1 &&
  RP.filterCast(browse, { view: 'unplayed' }, ctx).length === 2);
check('cast browser: grouping by race, affiliation or nothing at all',
  RP.groupCast(browse, 'race', ctx).length === 2 &&
  RP.groupCast(browse, 'affiliation', ctx)[0].chars.length === 2 &&
  RP.groupCast(browse, 'none', ctx).length === 1 &&
  RP.groupCast(browse, 'letter', ctx).length === 3);
check('cast browser: facets only offer values shared by more than one person',
  RP.castFacets(browse).race.length === 1 && RP.castFacets(browse).race[0].value === 'Toad');

// ---------- the lore book ----------
const bookState = RP.blankState();
bookState.settings.bookBudget = 3;
const bookRoom = RP.newRoom([sans, cutters], { title: 'The ledger room', date: '5 Aethel, 1040 BF' });
check('book: a page files at the bottom, with both clocks', (() => {
  const page = RP.bookAdd(bookState, { kind: 'place', name: 'The Ledger Room', text: 'A back office off the corridor.', when: '5 Aethel, 1040 BF', roomId: bookRoom.id, roomTitle: bookRoom.title });
  const b = RP.bookState(bookState);
  return b.entries.length === 1 && b.entries[b.entries.length - 1].id === page.id && page.when === '5 Aethel, 1040 BF' && page.at > 0;
})());
check('book: the newest page is always last', (() => {
  RP.bookAdd(bookState, { kind: 'person', name: 'Marguerite Oyle', text: 'The night archivist.' });
  const b = RP.bookState(bookState);
  return b.entries[b.entries.length - 1].name === 'Marguerite Oyle';
})());
check('book: filing the same thing twice updates the page instead of duplicating it', (() => {
  RP.bookAdd(bookState, { kind: 'place', name: 'the ledger room', text: 'The door does not lock from inside.' });
  const b = RP.bookState(bookState);
  const page = b.entries.filter(e => e.kind === 'place')[0];
  return b.entries.length === 2 && page.seen === 2 && page.text.includes('does not lock');
})());
check('book: a diary page needs no name', Boolean(RP.bookAdd(bookState, { kind: 'diary', text: 'They went looking for a ledger and somebody had been there first.', when: '5 Aethel, 1040 BF' })));
check('book: the model is handed the book as established truth', (() => {
  const block = RP.bookBlock(bookState, bookRoom);
  return block.includes('THE LORE BOOK') && block.includes('established in play and is TRUE') &&
    block.includes('The Ledger Room') && block.includes('THE DIARY');
})());
check('book: it reaches the system prompt', RP.systemFor(bookState, bookRoom, sans).includes('THE LORE BOOK'));
check('book: a page can be torn out', (() => {
  const id = RP.bookState(bookState).entries[1].id;
  RP.bookRemove(bookState, id);
  return !RP.bookState(bookState).entries.some(e => e.id === id);
})());
check('book: it survives a save, and rides along with the lore export', (() => {
  RP.saveState(store, bookState);
  const round = RP.loadState(store);
  const bundle = RP.exportBundle(bookState, { chats: false, memory: false, user: false });
  return RP.bookState(round).entries.length === 2 && bundle.book.length === 2;
})());
check('book: importing a book merges rather than replaces by default', (() => {
  const target = RP.blankState();
  RP.bookAdd(target, { kind: 'fact', name: 'Something else', text: 'Already known here.' });
  RP.importBundle(target, RP.exportBundle(bookState, { chats: false, memory: false, user: false }), 'merge');
  return RP.bookState(target).entries.length === 3;
})());

// ---- the queue ----
check('queue: work is queued, one key only once', (() => {
  RP.queuePush(bookState, { key: 'r:3', roomId: bookRoom.id, turns: [] });
  const dup = RP.queuePush(bookState, { key: 'r:3', roomId: bookRoom.id, turns: [] });
  return RP.bookState(bookState).queue.length === 1 && dup === null;
})());
check('queue: it refuses to grow without limit', (() => {
  for (let i = 0; i < 20; i++) RP.queuePush(bookState, { key: 'k' + i, roomId: bookRoom.id, turns: [] });
  return RP.bookState(bookState).queue.length === RP.QUEUE_MAX;
})());
check('queue: jobs come out oldest first and count against the budget', (() => {
  const first = RP.queueNext(bookState);
  RP.queueDone(bookState, first.id, true);
  return first.key === 'r:3' && RP.bookState(bookState).spent === 1 && RP.bookBudgetLeft(bookState) === 2;
})());
check('queue: when the budget runs out, filing stops', (() => {
  RP.queueDone(bookState, RP.queueNext(bookState).id, true);
  RP.queueDone(bookState, RP.queueNext(bookState).id, true);
  return RP.bookBudgetLeft(bookState) === 0;
})());
check('queue: the queue is never saved — unfinished work does not come back', (() => {
  RP.saveState(store, bookState);
  return RP.bookState(RP.loadState(store)).queue.length === 0;
})());

// ---- the extraction call is its own small prompt ----
const exPrompt = RP.extractPrompt(bookRoom, [{ who: 'You', text: 'I push the door.' }], ['The Ledger Room']);
check('extract: the archivist prompt is separate, formatted and bounded',
  exPrompt.includes('You are the archivist') && exPrompt.includes('PLACE: name |') &&
  exPrompt.includes('do not file these again') && exPrompt.includes('At most six lines'));
check('extract: a well-formed answer parses into pages', (() => {
  const got = RP.parseExtract([
    'PLACE: The Ledger Room | a back office lined with unfiled boxes',
    'PERSON: Marguerite Oyle | the night archivist, wants the ledger back',
    'FACT: the ledger room door does not lock from the inside',
    'DIARY: They went looking for a ledger and somebody had been there first.',
  ].join('\n'));
  return got.length === 4 && got[0].kind === 'place' && got[1].name === 'Marguerite Oyle' &&
    got[2].kind === 'fact' && got[3].kind === 'diary';
})());
check('extract: NONE and malformed lines file nothing',
  RP.parseExtract('NONE').length === 0 && RP.parseExtract('I think maybe a place happened?').length === 0);

// ---------- citing the archive, only when the date allows ----------
const citeIndex = RP.buildIndex({
  events: [
    { id: 'past_vote', name: 'The Highsun Vote', date: '21 Highsun, 1040 BF', summary: 'The ledger vote that everyone dates from.' },
    { id: 'later', name: 'The Darkmoon Reckoning', date: '30 Darkmoon, 1040 BF', summary: 'What the ledger costs, eventually.' },
    { id: 'undated', name: 'An Undated Filing', summary: 'A ledger filing with no date at all.' },
  ],
  factions: [{ id: 'guild', name: 'The Mages Guild', summary: 'Keeps the ledger of canal decrees.' }],
  whatifs: [{ id: 'wf', title: 'What If The Ledger Burned?', summary: 'A non-canon branch about the ledger.' }],
  posts: [],
}, { sans: sans });
check('index: events, bodies, people and what-ifs are all indexed',
  citeIndex.length === 6 && citeIndex.some(r => r.kind === 'faction') &&
  citeIndex.some(r => r.kind === 'character') && citeIndex.some(r => r.kind === 'event' && !r.date));
const cited = RP.citableFor(citeIndex, bookRoom, bookState, { query: 'the ledger and the vote' });
check('cite: filings dated before the scene are offered, with their ids',
  cited.citable.some(x => x.r.id === 'past_vote') &&
  RP.citationBlock(cited).includes('[event:past_vote]'));
check('cite: a filing dated after the scene is blocked and named as unknowable',
  cited.blocked.some(x => x.r.id === 'later') &&
  RP.citationBlock(cited).includes('FILED, BUT NOT YET') &&
  !cited.citable.some(x => x.r.id === 'later'));
check('cite: standing records — people and bodies — are always citable',
  cited.citable.some(x => x.r.kind === 'faction'));
check('cite: a non-canon What-If is never offered as a source',
  !cited.citable.some(x => x.r.kind === 'what-if') && !cited.blocked.some(x => x.r.kind === 'what-if'));
check('cite: the model is told not to invent filings',
  RP.citationBlock(cited).includes('Never invent a filing, a date or a quotation'));
check('cite: irrelevant records are left out — only the people in the room survive a blank query', (() => {
  const none = RP.citableFor(citeIndex, bookRoom, bookState, { query: 'zzzz qqqq wwww' });
  return none.citable.every(x => x.r.kind === 'character');
})());
check('cite: it reaches the system prompt when supplied',
  RP.systemFor(bookState, bookRoom, sans, { citations: RP.citationBlock(cited) }).includes('FILES YOU MAY CITE'));

// ---------- character cards: PNG and JSON, in and out ----------
const cardChar = RP.normChar({
  id: 'sans', name: 'Sans', title: 'The watchman on the ridge', race: 'Skeleton',
  affiliation: 'The concession', status: 'Active — tired',
  description: 'Watches the logging road, says little, and is never quite where you left him.',
  summary: 'The watchman on the ridge road.', image: 'portraits/sans.png', keyEvents: ['the_ridge_ambush'],
});
const v2 = RP.toCharacterCard(cardChar, { date: '5 Aethel, 1040 BF' });
check('card: exports as chara_card_v2 with the v1 fields alongside',
  v2.spec === 'chara_card_v2' && v2.spec_version === '2.0' && v2.data.name === 'Sans' && v2.name === 'Sans' &&
  v2.description === v2.data.description);
check('card: the filed dossier becomes the description and the personality',
  v2.data.description.includes('never quite where you left him') && v2.data.personality.length > 0 &&
  v2.data.scenario.includes('5 Aethel, 1040 BF'));
check('card: the archive’s own fields ride along in extensions',
  v2.data.extensions.waluipedia.id === 'sans' && v2.data.extensions.waluipedia.race === 'Skeleton' &&
  v2.data.extensions.waluipedia.keyEvents[0] === 'the_ridge_ambush');
const v1Read = RP.parseCharacterCard({ name: 'Seraphina', description: 'A tall knight in dented plate.', personality: 'stoic', first_mes: 'You are late.' });
check('card: a v1 card reads back as a playable guest',
  v1Read.name === 'Seraphina' && v1Read.invented === true && v1Read.card.first_mes === 'You are late.' &&
  v1Read.description.includes('dented plate'));
const v2Read = RP.parseCharacterCard(v2);
check('card: our own v2 export reads back as the same character',
  v2Read.name === 'Sans' && v2Read.description.includes('never quite where you left him'));
check('card: a card with no name is refused', RP.parseCharacterCard({ description: 'nobody' }) === null);

// A 1×1 PNG, as bytes.
const PNG_1PX = Uint8Array.from(Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64'));
check('png: a PNG is recognised, and other bytes are not',
  RP.isPng(PNG_1PX) && !RP.isPng(Uint8Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9])));
const carded = RP.cardToPng(PNG_1PX, cardChar, { date: '5 Aethel, 1040 BF' });
check('png: the card is written into the portrait, and the PNG still starts as a PNG',
  carded.length > PNG_1PX.length && RP.isPng(carded));
check('png: the chunk is a valid tEXt chunk called chara', (() => {
  const text = RP.pngText(carded);
  return Boolean(text.chara) && JSON.parse(RP.b64decode(text.chara)).data.name === 'Sans';
})());
check('png: the IEND chunk is still last, so viewers can still open it', (() => {
  const tail = Array.from(carded.slice(-8, -4)).map(b => String.fromCharCode(b)).join('');
  return tail === 'IEND';
})());
check('png: reading the card back gives the character', (() => {
  const back = RP.cardFromPng(carded);
  return back && back.name === 'Sans' && back.description.includes('logging road');
})());
check('png: a PNG with no card in it yields nothing rather than guessing', RP.cardFromPng(PNG_1PX) === null);

// ---------- text in, text out ----------
const readIn = RP.parseTranscript([
  'Sans: the saws stopped at noon.',
  '**The Timber Gang:** we heard it from the ridge.',
  'it came from the treeline.',
  'I step out of the trees with my hands up.',
].join('\n'));
check('text: "Name:" and "**Name:**" both parse, and continuation lines join the turn',
  readIn.length === 3 && readIn[0].who === 'Sans' && readIn[1].who === 'The Timber Gang' &&
  readIn[1].text.includes('treeline'));
check('text: an unattributed line is the player', readIn[2].who === '' && readIn[2].text.includes('hands up'));
const imported = RP.roomFromTranscript(readIn, [sans, cutters], { title: 'Read in' });
check('text: the turns become a room, matched to the cast',
  imported.messages.filter(m => m.role === 'char').length === 2 &&
  imported.messages.filter(m => m.role === 'user').length === 1 &&
  imported.messages[0].charId === 'sans');

// ---------- exports for a writing model ----------
const briefRoom = RP.newRoom([sans, cutters], {
  title: 'The saws stop', sceneName: 'The saws stop', date: '5 Aethel, 1040 BF',
  scene: 'The ridge road above the concession, first light.',
  beats: [{ time: 'dawn', beat: 'The saws start' }, { time: 'noon', beat: 'The saws stop' }],
});
briefRoom.beatIndex = 1;
briefRoom.states.sans.hp.value = 40;
briefRoom.states.sans.flags.bleeding = true;
briefRoom.messages.push({ id: 'b1', role: 'user', text: 'I take the long way round the stumps.', at: 1 });
briefRoom.messages.push({ id: 'b2', role: 'char', charId: 'sans', text: 'nobody uses that path twice.', at: 2, alts: ['nobody uses that path twice.', 'a discarded alternative take'], alt: 0 });
briefRoom.messages.push({ id: 'b3', role: 'char', charId: 'sans', error: true, text: 'The model did not answer', at: 3 });
briefRoom.messages.push({ id: 'b4', role: 'state', lines: ['Sans −10 HP'], at: 4 });
state.book = { entries: [{ id: 'p', kind: 'place', name: 'The Stump Path', text: 'A cut-through nobody admits to using.', roomId: briefRoom.id, at: 1 }], queue: [], spent: 0 };
const brief = RP.storyBrief(state, briefRoom, {});
check('brief: it opens with who, when and the situation',
  brief.includes('# The saws stop') && brief.includes('5 Aethel, 1040 BF') && brief.includes('**Sans**') &&
  brief.includes('The ridge road above the concession'));
check('brief: the fluff is cut — no ids, no swipes, no error notices, no state pills',
  !brief.includes('b1') && !brief.includes('discarded alternative take') &&
  !brief.includes('The model did not answer') && !brief.includes('−10 HP'));
check('brief: it keeps the played turns, the fired beats, the end state and what was established',
  brief.includes('nobody uses that path twice') && brief.includes('The saws start') &&
  brief.includes('HP 40/100') && brief.includes('The Stump Path'));
check('brief: it ends by telling the writer what the material is for',
  /Write this up as prose/.test(brief));
check('brief: a long chat is cut in the middle, not truncated at the end', (() => {
  const big = RP.newRoom([sans], { title: 'Long' });
  for (let i = 0; i < 300; i++) big.messages.push({ id: 'x' + i, role: 'user', text: 'A turn of text number ' + i + '. '.repeat(10), at: i });
  const cut = RP.storyBrief(state, big, { budget: 4000 });
  return cut.length <= 4200 && cut.includes('cut for length') && cut.includes('Write this up as prose');
})());
const full = RP.chatExport(state, briefRoom);
check('full export: it is an importable bundle carrying the room, its memory, lore and book',
  full.kind === 'waluipedia-chatroom-bundle' && full.rooms[0].id === briefRoom.id &&
  Array.isArray(full.book) && Array.isArray(full.newChars));
check('full export: importing it elsewhere restores the chat', (() => {
  const target = RP.blankState();
  const stats = RP.importBundle(target, full, 'merge');
  return stats.rooms === 1 && target.rooms[0].title === 'The saws stop';
})());

// ---------- the prompt stays inside the window ----------
check('prompt: a heavy scene still fits the budget, keeping the instructions', (() => {
  const heavy = RP.newRoom([sans, cutters, rebel], { date: '5 Aethel, 1040 BF', scene: 'z'.repeat(2000) });
  const fat = RP.blankState();
  for (let i = 0; i < 60; i++) RP.bookAdd(fat, { kind: 'place', name: 'Place ' + i, text: 'x'.repeat(400) });
  const system = RP.systemFor(fat, heavy, sans, {
    citations: 'FILES YOU MAY CITE\n' + Array.from({ length: 40 }, (_, i) => '- [event:e' + i + '] ' + 'q'.repeat(200)).join('\n'),
    fate: RP.rollFate(fat, heavy, { force: 'setback' }),
  });
  return system.length <= RP.PROMPT_BUDGET && system.includes('STAGE DIRECTIONS') &&
    system.includes('CHARACTER STATE') && system.includes('HOW THIS TURN RESOLVES') && system.includes('trimmed to fit');
})());

// ---------- commentary mode ----------
check('commentary: four formats, each with its own clock',
  ['podcast', 'debate', 'deepdive', 'hottake'].every(k => RP.COMMENTARY_STYLES[k].dir.length > 80) &&
  RP.COMMENTARY_STYLES.podcast.min === 15 && RP.COMMENTARY_STYLES.podcast.max === 60 &&
  RP.COMMENTARY_STYLES.deepdive.min === 30 && RP.COMMENTARY_STYLES.deepdive.max === 120);
const podPlan = RP.commentaryPlan({ style: 'podcast', topic: 'The Iron Mandate', minutes: 30 });
check('commentary: a run is planned into segments a local model can finish',
  podPlan.words === 30 * RP.WPM && podPlan.segments.length >= 8 &&
  podPlan.segments.every(seg => seg.words <= 650 && seg.focus));
check('commentary: the requested length is honoured, and clamped to the format',
  RP.commentaryPlan({ style: 'hottake', minutes: 90 }).minutes === 30 &&
  RP.commentaryPlan({ style: 'deepdive', minutes: 10 }).minutes === 30 &&
  RP.commentaryPlan({ style: 'deepdive', minutes: 120 }).words === 120 * RP.WPM);
check('commentary: a two-hour deep dive is dozens of calls, not one impossible one', (() => {
  const deep = RP.commentaryPlan({ style: 'deepdive', minutes: 120 });
  return deep.segments.length >= 25 && deep.segments.length <= 40;
})());
const comSources = RP.commentarySources(citeIndex, 'the ledger vote', 5);
check('commentary: the subject pulls its material out of the filed record',
  comSources.length > 0 && comSources.every(src => src.id && src.name) &&
  comSources.some(src => src.date));
const podEpisode = Object.assign({}, podPlan, { sources: comSources });
const seg1 = RP.commentaryPrompt(podEpisode, podEpisode.segments[0], {});
check('commentary: the prompt names both speakers and forbids the usual failures',
  seg1.includes('WALUIGI:') && seg1.includes('LUIGI:') &&
  seg1.includes('Never invent a filing') && /no stage directions/i.test(seg1));
check('commentary: each call is told its own slice, not the whole episode',
  seg1.includes('part 1 of ' + podEpisode.segments.length) && seg1.includes('do not write the rest of the episode') &&
  seg1.includes(podEpisode.segments[0].focus));
check('commentary: the material is handed over with its ids and dates',
  seg1.includes('THE FILED MATERIAL') && seg1.includes('[' + comSources[0].kind + ':' + comSources[0].id + ']'));
const seg3 = RP.commentaryPrompt(podEpisode, podEpisode.segments[2], {
  previous: 'LUIGI: who were the three abstentions?', covered: ['cold open', 'the background'],
});
check('commentary: later segments are handed what came before and what is spent',
  seg3.includes('who were the three abstentions?') && seg3.includes('ALREADY COVERED') &&
  seg3.includes('do not go over these again'));
check('commentary: the last segment is told to land it, not to summarise',
  RP.commentaryPrompt(podEpisode, podEpisode.segments[podEpisode.segments.length - 1], {})
    .includes('No summary of the episode'));
const spoken = RP.parseCommentary([
  'WALUIGI: Twenty-eight for, eight against, three abstaining.',
  '**LUIGI:** And nobody has ever printed the three.',
  'Which is its own answer.',
  'Some stray narration with no speaker at all.',
].join('\n'));
check('commentary: labelled lines parse, and stray lines join the speaker above',
  spoken.length === 2 && spoken[0].who === 'waluigi' && spoken[1].who === 'luigi' &&
  spoken[1].text.includes('its own answer') && spoken[1].text.includes('stray narration'));
check('commentary: the clock is words at a speaking pace', (() => {
  const stats = RP.commentaryStats([{ who: 'waluigi', text: 'word '.repeat(RP.WPM * 3) }]);
  return stats.minutes === 3 && stats.words === RP.WPM * 3;
})());
const finished = Object.assign({}, podEpisode, { lines: spoken, at: Date.now() });
const script = RP.commentaryScript(finished);
check('commentary: the script exports with its runtime and its sources',
  script.includes('# The Iron Mandate') && script.includes('**WALUIGI:**') && script.includes('**LUIGI:**') &&
  script.includes('minutes') && script.includes('Sources:'));
check('commentary: episodes are kept, newest first, and survive a save', (() => {
  const keep = RP.blankState();
  RP.saveEpisode(keep, finished);
  RP.saveEpisode(keep, Object.assign({}, finished, { id: 'second', topic: 'Something else' }));
  RP.saveState(store, keep);
  const round = RP.loadState(store);
  return round.episodes.length === 2 && round.episodes[0].topic === 'Something else';
})());
check('commentary: episodes ride along in the lore export', (() => {
  const keep = RP.blankState();
  RP.saveEpisode(keep, finished);
  const bundle = RP.exportBundle(keep, { chats: false, memory: false, user: false });
  const target = RP.blankState();
  RP.importBundle(target, bundle, 'merge');
  return bundle.episodes.length === 1 && target.episodes.length === 1;
})());

// ---------- importing into a chat that is already running ----------
const v1Card = {
  name: 'Promo Mario',
  description: 'The main host of Nintendo Mania!',
  personality: 'Cancelled pilot for a gaming news show. The pilot was cancelled after test audiences reacted negatively.',
  scenario: '',
  mes_example: '',
  first_mes: '*Mario would be reading a book, before noticing you watching him.*\n"Oh!- Uh- Hey paisanos!"',
};
const promo = RP.parseCharacterCard(Object.assign({ __image: 'data:image/png;base64,AAAA' }, v1Card));
check('import: a flat v1 card (the format the examples use) reads in whole',
  promo.name === 'Promo Mario' && promo.description.includes('Nintendo Mania') &&
  promo.description.includes('test audiences'));
check('import: the card’s own picture becomes the portrait',
  promo.image === 'data:image/png;base64,AAAA');
check('import: the greeting is kept and offered as the opening line',
  RP.cardGreeting(promo).includes('paisanos') && RP.cardGreeting(promo) === promo.card.first_mes);

const running = RP.newRoom([sans], { title: 'Already going', date: '5 Aethel, 1040 BF' });
running.messages.push({ id: 'r1', role: 'user', text: 'I was here first.', at: 1 });
check('import: a character can walk into a chat that is already running', (() => {
  RP.addToRoom(running, promo);
  return running.cast.length === 2 && running.kind === 'group' && Boolean(running.states[promo.id]);
})());
check('import: adding the same person twice does nothing', RP.addToRoom(running, promo) === null && running.cast.length === 2);
const appended = RP.appendTranscript(running, RP.parseTranscript([
  'Promo Mario: The tape is still rolling.',
  'I look at the camera.',
  'Promo Mario: Do not look at the camera.',
].join('\n')), { divider: true, source: 'an old episode' });
check('import: the story is appended to the chat, not made into a new one',
  appended === 3 && running.messages.filter(m => RP.visible(m)).length === 4 &&
  running.messages[running.messages.length - 1].text.includes('Do not look'));
check('import: imported turns are matched to the cast and marked as imported',
  running.messages.filter(m => m.imported && m.role === 'char').every(m => m.charId === promo.id) &&
  running.messages.filter(m => m.imported && m.role === 'user').length === 1);
check('import: a divider says where the seam is',
  running.messages.some(m => m.role === 'scene' && /3 imported turns from an old episode/.test(m.text)));
check('import: the original turn is still first, so play reads in order',
  RP.historyFor(running, 10)[0].content.includes('I was here first'));

// ---------- the backlog the lore book has not read yet ----------
const backlog = RP.backlogFor(running, 3);
check('backlog: it counts what has not been filed, and what that costs',
  backlog.turns === 4 && backlog.filed === 0 && backlog.pending === 4 && backlog.calls === 1 && backlog.step === 3);
check('backlog: the jobs cover the chat in order, with one turn of overlap', (() => {
  const long = RP.newRoom([sans], {});
  for (let i = 0; i < 12; i++) long.messages.push({ id: 'm' + i, role: i % 2 ? 'char' : 'user', charId: 'sans', text: 'turn ' + i, at: i });
  const jobs = RP.backlogJobs(long, 3, 20);
  return jobs.length === 4 && jobs[0].from === 0 && jobs[1].from === 3 &&
    jobs[1].turns.length === 4 && jobs[3].to === 12;
})());
check('backlog: an already-filed chat asks for nothing', (() => {
  const filed = RP.newRoom([sans], {});
  for (let i = 0; i < 6; i++) filed.messages.push({ id: 'f' + i, role: 'user', text: 'x', at: i });
  filed.bookAt = 6;
  return RP.backlogFor(filed, 3).calls === 0 && RP.backlogJobs(filed, 3, 10).length === 0;
})());
check('backlog: the queue cap still applies to a huge import', (() => {
  const st = RP.blankState();
  const huge = RP.newRoom([sans], {});
  for (let i = 0; i < 90; i++) huge.messages.push({ id: 'h' + i, role: 'user', text: 'x', at: i });
  RP.backlogJobs(huge, 3, 40).forEach(job => RP.queuePush(st, { key: job.key, roomId: huge.id, turns: job.turns }));
  return RP.bookState(st).queue.length === RP.QUEUE_MAX;
})());

// ---------- one importer, every shape a file arrives in ----------
const v1Text = JSON.stringify(v1Card);
check('sniff: a flat v1 card is recognised', (() => {
  const found = RP.sniffImport(v1Text);
  return found.kind === 'card' && found.why.includes('v1') && found.card.name === 'Promo Mario';
})());
check('sniff: a v2 card is recognised', (() => {
  const found = RP.sniffImport(JSON.stringify(RP.toCharacterCard(promo, {})));
  return found.kind === 'card' && found.why.includes('v2');
})());
check('sniff: a byte-order mark does not make a card "invalid"',
  RP.sniffImport('\uFEFF' + v1Text).kind === 'card');
check('sniff: bytes work as well as text', (() => {
  const bytes = new TextEncoder().encode(v1Text);
  return RP.sniffImport(bytes).kind === 'card';
})());
check('sniff: a PNG card is read out of its chunk', (() => {
  const carded = RP.cardToPng(PNG_1PX, promo, {});
  const found = RP.sniffImport(carded);
  return found.kind === 'card' && found.why.includes('PNG');
})());
check('sniff: a plain PNG says so instead of failing vaguely', (() => {
  const found = RP.sniffImport(PNG_1PX);
  return found.kind === 'png-plain' && /no character card/.test(found.why);
})());
check('sniff: a JSONL chat log becomes turns', (() => {
  const found = RP.sniffImport([
    '{"user_name":"You","character_name":"Promo Mario","create_date":"2026-01-01"}',
    '{"name":"Promo Mario","is_user":false,"mes":"Hey paisanos!"}',
    '{"name":"You","is_user":true,"mes":"I stare at the screen."}',
  ].join('\n'));
  return found.kind === 'chatlog' && found.turns.length === 2 &&
    found.turns[0].who === 'Promo Mario' && found.turns[1].who === '';
})());
check('sniff: a JSON chat log in one document works too', (() => {
  const found = RP.sniffImport(JSON.stringify({
    messages: [{ name: 'Promo Mario', mes: 'Rolling.' }, { name: 'You', is_user: true, mes: 'I nod.' }],
  }));
  return found.kind === 'chatlog' && found.turns.length === 2;
})());
check('sniff: a chatroom bundle is recognised', (() => {
  const bundle = RP.chatExport(state, briefRoom);
  return RP.sniffImport(JSON.stringify(bundle)).kind === 'bundle';
})());
check('sniff: a transcript is recognised', RP.sniffImport('Sans: the saws stopped.\nI wait.').kind === 'transcript');
check('sniff: a truncated file is named as truncated, not "unsupported"', (() => {
  const found = RP.sniffImport('{"name":"Half a car');
  return found.kind === 'json-broken' && /does not parse/.test(found.why);
})());
check('sniff: JSON that is nothing we know says that plainly',
  RP.sniffImport('{"totally":"different"}').kind === 'json-unknown');
check('sniff: an empty file is not a mystery', RP.sniffImport('   ').kind === 'empty');

// ---- exporting a card that other tools will actually take ----
check('png card: re-exporting an imported card leaves exactly one chara chunk', (() => {
  const first = RP.cardToPng(PNG_1PX, promo, {});
  const again = RP.cardToPng(first, cardChar, {});
  const chunks = RP.pngText(again);
  return Object.keys(chunks).length === 1 && RP.cardFromPng(again).name === 'Sans';
})());
check('png card: the old card is gone, not buried behind the new one',
  RP.cardFromPng(RP.cardToPng(RP.cardToPng(PNG_1PX, promo, {}), cardChar, {})).name !== 'Promo Mario');
check('json card: every v2 field is present and typed, so a strict reader takes it', (() => {
  const data = RP.toCharacterCard(promo, {}).data;
  const strings = ['name', 'description', 'personality', 'scenario', 'first_mes', 'mes_example',
    'creator_notes', 'system_prompt', 'post_history_instructions', 'creator', 'character_version'];
  return strings.every(k => typeof data[k] === 'string') &&
    Array.isArray(data.alternate_greetings) && Array.isArray(data.tags) &&
    data.extensions && typeof data.extensions === 'object';
})());
check('json card: nothing is undefined, so JSON.stringify cannot drop a required field', (() => {
  const round = JSON.parse(JSON.stringify(RP.toCharacterCard(promo, {})));
  return Object.keys(round.data).length === Object.keys(RP.toCharacterCard(promo, {}).data).length;
})());

// ---------- 👍 / 👎 steer what comes next ----------
const tasteState = RP.blankState();
const tasteRoom = RP.newRoom([sans, cutters], {});
const kept = { id: 'k1', role: 'char', charId: 'sans', text: 'He says it in four words and leaves.', at: 1 };
const binned = { id: 'b1', role: 'char', charId: 'sans', text: 'A long, flowery paragraph that says the same thing five times over, with adjectives stacked upon adjectives, and no actual event in it anywhere at all.', at: 2 };
tasteRoom.messages.push(kept, binned);
check('taste: a rating is recorded on the message and kept as an excerpt', (() => {
  RP.rate(tasteState, tasteRoom, kept, 'up');
  RP.rate(tasteState, tasteRoom, binned, 'down');
  const t = RP.tasteState(tasteState);
  return kept.react === 'up' && binned.react === 'down' && t.likes.length === 1 && t.dislikes.length === 1 &&
    t.likes[0].text.includes('four words');
})());
check('taste: rating the same message again clears it',
  RP.rate(tasteState, tasteRoom, kept, 'up') === '' && RP.tasteState(tasteState).likes.length === 0);
check('taste: a thumb can be moved from one side to the other', (() => {
  RP.rate(tasteState, tasteRoom, kept, 'up');
  RP.rate(tasteState, tasteRoom, kept, 'down');
  const t = RP.tasteState(tasteState);
  return t.likes.length === 0 && t.dislikes.some(x => x.id === 'k1');
})());
check('taste: per-character counts are kept for the panel', (() => {
  const score = RP.tasteFor(tasteState, 'sans');
  return score.up >= 1 && score.down >= 1;
})());
RP.rate(tasteState, tasteRoom, kept, 'up');
const tasteText = RP.tasteBlock(tasteState, tasteRoom);
check('taste: the model is shown both piles, as instructions about its own writing',
  tasteText.includes('WHAT THIS READER KEEPS') && tasteText.includes('Write more like them') &&
  tasteText.includes('Do not write like this again') && tasteText.includes('four words'));
check('taste: the length signal is derived from what was kept',
  /run about \d+ words/.test(tasteText) && /do not pad/i.test(tasteText));
check('taste: it reaches the system prompt', RP.systemFor(tasteState, tasteRoom, sans).includes('WHAT THIS READER KEEPS'));
check('taste: an unrated reader gets no block at all', RP.tasteBlock(RP.blankState(), tasteRoom) === '');
check('taste: only the last ten of each side are kept', (() => {
  for (let i = 0; i < 20; i++) {
    RP.rate(tasteState, tasteRoom, { id: 'x' + i, role: 'char', charId: 'sans', text: 'turn ' + i }, 'up');
  }
  return RP.tasteState(tasteState).likes.length === RP.TASTE_KEEP;
})());
check('taste: it survives a save and travels in the bundle', (() => {
  RP.saveState(store, tasteState);
  const round = RP.loadState(store);
  const bundle = RP.exportBundle(tasteState, { chats: false, memory: false, user: false });
  const target = RP.blankState();
  RP.importBundle(target, bundle, 'merge');
  return RP.tasteState(round).likes.length > 0 && bundle.taste && RP.tasteState(target).likes.length > 0;
})());
check('taste: excerpts from the people in this room come first', (() => {
  const other = RP.newRoom([rebel], {});
  RP.rate(tasteState, other, { id: 'r1', role: 'char', charId: 'rebel_scout', text: 'A line from somebody else entirely.' }, 'up');
  const block = RP.tasteBlock(tasteState, other, 2);
  return block.includes('somebody else entirely');
})());

// ---------- editing what has already been said ----------
const editRoom = RP.newRoom([sans, cutters], {});
editRoom.messages.push(
  { id: 'e1', role: 'user', text: 'I say the first thing.', at: 1 },
  { id: 'e2', role: 'char', charId: 'sans', text: 'A reply I will regret.', at: 2, alts: ['A reply I will regret.', 'another take'], alt: 0 },
  { id: 'e3', role: 'char', charId: 'timber_gang', text: 'And a third.', at: 3 });
check('edit: a line can be rewritten, and the old takes go with it', (() => {
  RP.editMessage(editRoom, 'e2', 'A reply I stand behind.');
  const msg = RP.findMessage(editRoom, 'e2');
  return msg.text === 'A reply I stand behind.' && msg.alts.length === 1 && msg.edited > 0 &&
    RP.textOf(msg) === 'A reply I stand behind.';
})());
check('mute: a muted line stays on screen and leaves the model’s history', (() => {
  RP.muteMessage(editRoom, 'e2', true);
  const history = RP.historyFor(editRoom, 20);
  return RP.findMessage(editRoom, 'e2').muted === true &&
    editRoom.messages.length === 3 &&
    !history.some(m => /stand behind/.test(m.content)) &&
    history.some(m => /first thing/.test(m.content));
})());
check('mute: unmuting puts it back', (() => {
  RP.muteMessage(editRoom, 'e2', false);
  return RP.historyFor(editRoom, 20).some(m => /stand behind/.test(m.content));
})());
check('delete: one line at a time', RP.deleteMessage(editRoom, 'e3') === 1 && editRoom.messages.length === 2);
check('delete: a whole import can be taken back out', (() => {
  const undo = RP.newRoom([sans], {});
  undo.messages.push({ id: 'k', role: 'user', text: 'mine', at: 1 });
  RP.appendTranscript(undo, [{ who: 'Sans', text: 'imported one' }, { who: '', text: 'imported two' }], { divider: true });
  undo.bookAt = 3;
  const dropped = RP.deleteMessages(undo, m => m.imported);
  return dropped === 3 && undo.messages.length === 1 && undo.bookAt <= 1;
})());
check('context: a room can be told how far back the model may look', (() => {
  const long = RP.newRoom([sans], { contextLimit: 6 });
  for (let i = 0; i < 30; i++) long.messages.push({ id: 'c' + i, role: i % 2 ? 'char' : 'user', charId: 'sans', text: 'turn ' + i, at: i });
  return RP.contextLimit(long) === 6 && RP.contextLimit(RP.newRoom([sans], {}), 24) === 24 &&
    RP.historyFor(long, RP.contextLimit(long)).length === 6;
})());

// ---------- the smart budget ----------
const bigRoom = RP.newRoom([sans], {});
const bigTurns = [];
for (let i = 0; i < 300; i++) {
  bigTurns.push(i % 40 === 0
    ? { who: 'Sans', text: 'They named the place Ledger Row, signed the paper at 28 past, and burned the copy.' }
    : { who: i % 2 ? 'Sans' : '', text: 'A line of ordinary back and forth, number ' + i + '.' });
}
RP.appendTranscript(bigRoom, bigTurns, {});
check('smart: a 300-turn import is not 100 calls', (() => {
  const plan = RP.smartBacklog(bigRoom, { maxCalls: 6 });
  return plan.jobs.length === 6 && plan.chunk >= 20 && plan.covered > 100;
})());
check('smart: it always reads the end of the chat, because that is what play follows', (() => {
  const plan = RP.smartBacklog(bigRoom, { maxCalls: 4 });
  const last = plan.jobs[plan.jobs.length - 1];
  return last.from + last.turns.length >= 299;
})());
check('smart: the stretches it keeps are the ones that establish things', (() => {
  const plan = RP.smartBacklog(bigRoom, { maxCalls: 4 });
  const dense = plan.jobs.filter(job => job.turns.some(t => /Ledger Row/.test(t.text)));
  return dense.length >= 1;
})());
check('smart: the jobs come back in order, so the diary reads forwards', (() => {
  const plan = RP.smartBacklog(bigRoom, { maxCalls: 6 });
  return plan.jobs.every((job, i) => i === 0 || job.from > plan.jobs[i - 1].from);
})());
check('smart: a bigger budget covers everything', (() => {
  const plan = RP.smartBacklog(bigRoom, { maxCalls: 20 });
  return plan.skipped === 0 && plan.covered === plan.pending;
})());
check('smart: an already-filed chat plans nothing', (() => {
  bigRoom.bookAt = bigRoom.messages.filter(RP.visible).length;
  return RP.smartBacklog(bigRoom, { maxCalls: 6 }).jobs.length === 0;
})());

// ---------- how long a turn should be ----------
check('length: three bands, counted in sentences, and snappy is genuinely short',
  RP.LENGTHS.snappy.tokens < RP.LENGTHS.normal.tokens && RP.LENGTHS.normal.tokens < RP.LENGTHS.rich.tokens &&
  /2 to 4 SENTENCES/.test(RP.LENGTHS.snappy.dir) && /no scene-setting/i.test(RP.LENGTHS.snappy.dir) &&
  RP.LENGTHS.snappy.sentences[1] === 4 && RP.LENGTHS.rich.sentences[0] === 8);
check('length: the world gets one band more room than the characters', (() => {
  const forChar = RP.lengthBlock('snappy', false);
  const forWorld = RP.lengthBlock('snappy', true);
  return forChar.key === 'snappy' && forWorld.key === 'normal' && forWorld.tokens > forChar.tokens;
})());
check('length: rich does not overflow past the top band', RP.lengthBlock('rich', true).key === 'rich');
check('length: the instruction is in every character prompt', (() => {
  const short = RP.blankState();
  const room = RP.newRoom([sans, cutters], {});
  const prompt = RP.systemFor(short, room, sans);
  return prompt.includes('LENGTH') && prompt.includes('2 to 4 SENTENCES');
})());
check('length: sentences are counted, so the page can tell when it overran',
  RP.sentenceCount('One. Two! Three? Four') === 4 && RP.sentenceCount('') === 0);
check('length: the cap is a safety net, not the thing that ends a turn', (() => {
  // Room for the whole band plus a wrap-up: ~14 sentences fits inside 1200.
  return RP.LENGTHS.rich.tokens >= 1000 && RP.LENGTHS.snappy.tokens >= 400;
})());

// ---------- the world takes a turn when nobody else can ----------
const soloState = RP.blankState();
const soloRoom = RP.newRoom([sans], { youPlay: 'sans', scene: 'The ridge road, after midnight.' });
check('player: starring a character takes them off the model’s list',
  RP.playerCharacter(soloRoom).id === 'sans' && RP.speakableCast(soloRoom).length === 0);
check('player: the star toggles back off', (() => {
  RP.markPlayer(soloRoom, 'sans');
  const off = RP.speakableCast(soloRoom).length === 1;
  RP.markPlayer(soloRoom, 'sans');
  return off && RP.speakableCast(soloRoom).length === 0;
})());
check('world: with nobody else in the room, the world speaks', RP.worldShouldSpeak(soloState, soloRoom) === true);
check('world: switching it off leaves the scene to the player',
  RP.worldShouldSpeak({ settings: { world: 'off' } }, soloRoom) === false);
check('world: a room with somebody else in it does not need narration', (() => {
  const two = RP.newRoom([sans, cutters], { youPlay: 'sans' });
  return RP.worldShouldSpeak(soloState, two) === false && RP.speakableCast(two).length === 1;
})());
const worldSystem = RP.worldSystem(soloState, soloRoom, {});
check('world: it is a camera, in the present tense, addressing you as you',
  /THE DIRECTOR|THE WORLD/.test(worldSystem) && /PRESENT TENSE/i.test(worldSystem) &&
  worldSystem.includes('address the player as "you"'));
check('world: it is forbidden from speaking for the player, by name',
  worldSystem.includes('Sans') && /Never write their speech, their thoughts or their decisions/.test(worldSystem));
check('world: it is told to leave something changed and not to ask what you do',
  /Something should be different by the end of the turn/.test(worldSystem) && /never ask/i.test(worldSystem));
check('world: it still gets the scene, the state sheets and the stage directions',
  worldSystem.includes('THE SCENE') && worldSystem.includes('CHARACTER STATE') && worldSystem.includes('STAGE DIRECTIONS'));
check('world: and its own length band', worldSystem.includes('LENGTH') && worldSystem.includes('8 to 14 SENTENCES'));
check('director: WORLD is an answer it may give', (() => {
  const group = RP.newRoom([sans, cutters, rebel], {});
  group.messages.push({ id: 'w1', role: 'user', text: 'I wait.', at: 1 });
  const prompt = RP.directorPrompt(group, sans);
  return prompt.includes('WORLD') && /the place itself doing something/.test(prompt) &&
    RP.parseDirector('WORLD', group, sans).next === 'world' &&
    RP.parseDirector('NEXT: WORLD', group, sans).next === 'world';
})());

// ---------- the sequencer ----------
const seqState = RP.blankState();
const seqRoom = RP.newRoom([sans, cutters, rebel], { youPlay: 'sans' });
seqRoom.messages.push({ id: 's1', role: 'user', text: 'I put the ledger on the table.', at: 1 });
const seqPrompt = RP.sequencePrompt(seqRoom, seqState, {});
check('sequencer: it asks for an order, not a single name',
  /ORDER: Name, Name/.test(seqPrompt) && /NOBODY/.test(seqPrompt) && /at most \d/.test(seqPrompt));
check('sequencer: the character you play is never staged',
  seqPrompt.includes('Never put them in the order') && !/- Sans/.test(seqPrompt));
check('sequencer: silence is offered as a real answer',
  /Silence is a choice/.test(seqPrompt) && /only people who have a REASON/.test(seqPrompt));
check('sequencer: an order parses into ids, in order, without repeats', (() => {
  const got = RP.parseSequence('ORDER: The Timber Gang, The Rebel Scout, The Timber Gang', seqRoom, seqState);
  return got.order.join(',') === 'timber_gang,rebel_scout';
})());
check('sequencer: the world can be staged too',
  RP.parseSequence('ORDER: The Timber Gang, WORLD', seqRoom, seqState).order.join(',') === 'timber_gang,world');
check('sequencer: with the world off it is dropped from the order',
  RP.parseSequence('ORDER: WORLD, The Timber Gang', seqRoom, { settings: { world: 'off' } }).order.join(',') === 'timber_gang');
check('sequencer: NOBODY means nobody, and says so', (() => {
  const got = RP.parseSequence('NOBODY', seqRoom, seqState);
  return got.order.length === 0 && got.silent === true;
})());
check('sequencer: a rambling answer is not mistaken for silence', (() => {
  const got = RP.parseSequence('Well, I think perhaps the timber gang might want to respond here.', seqRoom, seqState);
  return got.order.length === 0 && got.unparsed === true;
})());
check('sequencer: it never stages more than the cap',
  RP.parseSequence('ORDER: The Timber Gang, The Rebel Scout, WORLD, The Timber Gang, The Rebel Scout', seqRoom, seqState)
    .order.length <= RP.SEQUENCE_MAX);

// ---------- branching and undo ----------
const forkState = RP.blankState();
const original = RP.newRoom([sans], { title: 'The original' });
original.messages.push(
  { id: 'f1', role: 'user', text: 'one', at: 1 },
  { id: 'f2', role: 'char', charId: 'sans', text: 'two', at: 2 },
  { id: 'f3', role: 'user', text: 'three', at: 3 });
forkState.rooms = [original];
const branch = RP.forkRoom(forkState, original, 'f2', {});
check('branch: a fork keeps everything up to that line and nothing after',
  branch.messages.length === 2 && branch.messages.map(m => m.text).join(',') === 'one,two');
check('branch: the original is untouched, and the fork is a separate chat',
  original.messages.length === 3 && branch.id !== original.id && branch.branchOf === original.id &&
  forkState.rooms.length === 2 && forkState.rooms[0].id === branch.id);
check('branch: the copy is deep — editing it does not touch the original', (() => {
  RP.editMessage(branch, branch.messages[1].id, 'changed in the branch');
  return original.messages[1].text === 'two';
})());
check('undo: a snapshot rolls the chat back, and redo puts it forward again', (() => {
  const room = RP.newRoom([sans], {});
  room.messages.push({ id: 'u1', role: 'user', text: 'first', at: 1 });
  RP.pushUndo(room, 'the second line');
  room.messages.push({ id: 'u2', role: 'char', charId: 'sans', text: 'second', at: 2 });
  const undone = RP.undo(room);
  const rolledBack = room.messages.length === 1;
  const redone = RP.redo(room);
  return undone === 'the second line' && rolledBack && redone && room.messages.length === 2;
})());
check('undo: it restores the state sheets too, not just the words', (() => {
  const room = RP.newRoom([sans], {});
  room.states.sans.hp.value = 100;
  RP.pushUndo(room, 'the wound');
  room.states.sans.hp.value = 20;
  RP.undo(room);
  return room.states.sans.hp.value === 100;
})());
check('undo: the stack has a floor and a ceiling', (() => {
  const room = RP.newRoom([sans], {});
  for (let i = 0; i < 40; i++) RP.pushUndo(room, 'x' + i);
  return room.undo.length === RP.UNDO_DEPTH && RP.undo(RP.newRoom([sans], {})) === null;
})());

// ---------- the player's own persona ----------
const meState = RP.blankState();
const me = RP.personaSheet(meState);
me.name = 'Mikha the Unfiled';
me.voice = 'a courier who reads the post';
me.look = 'tall, sunburnt, one boot newer than the other';
me.items = ['a satchel', 'somebody else’s key'];
check('persona: one sheet, and it reaches the prompt', (() => {
  const block = RP.personaBlock('', meState, RP.newRoom([sans], {}));
  return block.includes('THE USER PLAYS') && block.includes('Mikha the Unfiled') &&
    block.includes('one boot newer') && block.includes('somebody else’s key');
})());
check('persona: starring an archive character says so, without losing you', (() => {
  const room = RP.newRoom([sans], { youPlay: 'sans' });
  const block = RP.personaBlock('', meState, room);
  return block.includes('Mikha the Unfiled') && block.includes('playing Sans');
})());
check('persona: it survives a save and comes back', (() => {
  RP.saveState(store, meState);
  return RP.personaSheet(RP.loadState(store)).name === 'Mikha the Unfiled';
})());

// ---------- keyword-triggered lore ----------
const keyState = RP.blankState();
RP.addKeyword(keyState, { keys: 'Master Sword, blade of evil', text: 'Filed as lost in 1012 BF, never as broken.' });
RP.addKeyword(keyState, { keys: '/dark shores?/i', text: 'A province, not a beach: Darian rules it and calls himself king.' });
RP.addKeyword(keyState, { always: true, text: 'The archive never uses real-world dates.' });
check('keyword: a plain word triggers on a whole-word match',
  RP.keywordBlock(keyState, 'he asked about the Master Sword again').includes('never as broken'));
check('keyword: it does not fire on a fragment',
  !RP.keywordBlock(keyState, 'he mastered swordsmanship').includes('never as broken'));
check('keyword: a regular expression trigger works',
  RP.keywordBlock(keyState, 'we sailed for the Dark Shore').includes('A province, not a beach'));
check('keyword: an always-on entry is always there',
  RP.keywordBlock(keyState, 'nothing in particular').includes('never uses real-world dates'));
check('keyword: the block tells the model to use it exactly',
  /use these exactly, do not invent around them/.test(RP.keywordBlock(keyState, 'Master Sword')));
check('keyword: it reaches the system prompt', (() => {
  const room = RP.newRoom([sans], {});
  return RP.systemFor(keyState, room, sans, { recent: 'about the Master Sword' }).includes('never as broken');
})());
check('keyword: entries can be removed, and survive a save', (() => {
  RP.saveState(store, keyState);
  const round = RP.loadState(store);
  const first = round.keywords[0].id;
  RP.removeKeyword(round, first);
  return round.keywords.length === 2 && !round.keywords.some(k => k.id === first);
})());

// ---------- nothing is cut off mid-word, and nothing stalls ----------
check('clip: a word is never left half-written', (() => {
  // The kept text must end exactly where a word ends in the original.
  const source = 'supercalifragilistic expialidocious antidisestablishmentarianism';
  const cut = RP.clip(source, 30).replace(/…$/, '');
  const after = source.charAt(cut.length);
  return cut.length > 0 && source.indexOf(cut) === 0 && (after === '' || after === ' ');
})());
check('clip: it prefers the last sentence that fits',
  RP.clip('One sentence here. A second that would overflow the limit and then some.', 60) ===
  'One sentence here. A second that would overflow the limit…');
check('clip: short text is returned untouched, with no mark',
  RP.clip('short enough', 50) === 'short enough' && !/…/.test(RP.clip('short enough', 50)));
check('clip: a trailing comma or dash is not left dangling before the mark',
  !/[,;:—-]…$/.test(RP.clip('a long clause, and then another clause that runs past the limit', 30)));
check('fields: a filed status is not amputated at 120 characters', (() => {
  const long = 'Active — escaped the break room through the ceiling, said the word that stopped the show, and is now the only witness who has seen the Director’s remote';
  const char = RP.normChar({ id: 'd', name: 'Darian', status: long });
  return char.status === long && char.status.includes('Director’s remote');
})());
check('fields: descriptions and summaries have room too', (() => {
  const body = 'A sentence about somebody. '.repeat(40);
  const char = RP.normChar({ id: 'x', name: 'X', description: body, summary: body });
  return char.description.length > 900 && char.summary.length > 320;
})());
check('fallback: when nobody has to answer, the world picks it up', (() => {
  const room = RP.newRoom([sans, cutters], {});
  return RP.fallbackTurn(RP.blankState(), room) === 'world';
})());
check('fallback: with the world switched off, the turn comes back to you',
  RP.fallbackTurn({ settings: { world: 'off' } }, RP.newRoom([sans], {})) === '');
check('world: it is told to play the player’s line out, not dodge it', (() => {
  const prompt = RP.worldPrompt(RP.blankState(), RP.newRoom([sans], { youPlay: 'sans' }), {});
  return /DO THE THING THEY DID/.test(prompt) && /Never replace their action with weather/.test(prompt) &&
    /invent and show what it actually says/.test(prompt);
})());

// ---------- the narrator: the Director, and no repeating itself ----------
const dirState = RP.blankState();
const dirRoom = RP.newRoom([sans], { youPlay: 'sans', scene: 'The patio, after midnight.' });
dirRoom.messages.push(
  { id: 'n1', role: 'user', text: 'I look down at my sheets and read them aloud. What am I wearing, and where am I?', at: 1 },
  { id: 'n2', role: 'world', text: 'The air is thin and biting. You stand on the stone patio of an isolated outpost, wrapped in a fur-lined cloak.', at: 2 });
check('narrator: the Director is the default voice',
  RP.narrator(dirState) === 'director' && RP.NARRATORS.director.name === 'The Director');
check('narrator: four voices, each with its own length band',
  Object.keys(RP.NARRATORS).length === 4 && RP.NARRATORS.director.length === 'rich' &&
  RP.NARRATORS.terse.length === 'snappy');
const dirPrompt = RP.worldSystem(dirState, dirRoom, {});
check('director: the cinematic brief is in the prompt, without film words',
  dirPrompt.includes('THE DIRECTOR') && /no "cut to"/.test(dirPrompt) &&
  /SENSORY FOCUS/.test(dirPrompt) && /DRAMATIC IRONY/.test(dirPrompt));
check('director: it must resolve what the player actually did',
  /DO THE THING THEY DID/.test(dirPrompt) &&
  /invent and show what it actually says/.test(dirPrompt) &&
  /Never replace their action with weather/.test(dirPrompt));
check('director: it may make it go wrong, but not skip it',
  /may make it cost them, go wrong/.test(dirPrompt) && /may not skip it/.test(dirPrompt));
check('continuity: what was already described is named and forbidden',
  /ALREADY DESCRIBED/.test(dirPrompt) && dirPrompt.includes('isolated outpost') &&
  /do not re-dress the player/.test(dirPrompt));
check('continuity: the questions the player asked are answered once',
  /THE PLAYER ASKED THESE DIRECTLY/.test(dirPrompt) && /What am I wearing/i.test(dirPrompt));
check('narration: it is in the history now, labelled, so it cannot repeat itself', (() => {
  const history = RP.historyFor(dirRoom, 10);
  return history.length === 2 && /^Narration: /.test(history[1].content);
})());
check('narration: it counts as a played turn', RP.counter(dirRoom) === 2);
check('narrator: the terse voice is two sentences, the Director gets room', (() => {
  const terse = { settings: { narrator: 'terse' } };
  return /Two sentences at most/.test(RP.worldPrompt(terse, dirRoom, {})) &&
    /8 to 14 SENTENCES/.test(dirPrompt);
})());
check('narrator: an unknown voice falls back to the Director',
  RP.narrator({ settings: { narrator: 'nonsense' } }) === 'director');

// ---------- fixed facts, stray directives, and a script that knows to stop ----
const factRoom = RP.newRoom([sans], { youPlay: 'sans' });
const strayed = RP.parseDirectives(
  'The wind drops out of the courtyard.\n' +
  '[[TIME: a little after midnight]]\n' +
  '[[SET: place = the stone patio of the outpost]]\n' +
  '[[SET: wearing = a heavy fur-lined travelling cloak]]\n' +
  '[[MOOD: ominous]]\n' +
  '[[whatever this is]]', []);
check('directives: a model’s invented brackets never reach the reader',
  strayed.clean === 'The wind drops out of the courtyard.' &&
  !/\[\[/.test(strayed.clean));
check('directives: TIME and SET are real, MOOD is discarded',
  strayed.directives.map(d => d.kind).join(',') === 'time,set,set');
const factLines = RP.applyDirectives(RP.blankState(), factRoom, strayed.directives, () => null).lines;
check('facts: the place, the clothes and the clock are filed on the room',
  factRoom.clock === 'a little after midnight' &&
  factRoom.facts.place === 'the stone patio of the outpost' &&
  factRoom.facts.wearing.includes('fur-lined') && factLines.length === 3);
const fixed = RP.factsBlock(factRoom);
check('facts: they go back to the model as unrevisable',
  /FIXED FACTS/.test(fixed) && /NOT open to revision/.test(fixed) &&
  fixed.includes('stone patio') && fixed.includes('fur-lined') && fixed.includes('after midnight'));
check('facts: the narrator is told to file what it names', (() => {
  const prompt = RP.worldPrompt(RP.blankState(), factRoom, {});
  return /FILE WHAT YOU NAME/.test(prompt) && /\[\[SET: place =/.test(prompt) &&
    /Never write any other double-bracketed text/.test(prompt);
})());
check('facts: a character turn sees them too',
  RP.systemFor(RP.blankState(), factRoom, sans).includes('FIXED FACTS'));
check('facts: changing one is reported as a change, not a silent rename', (() => {
  const again = RP.parseDirectives('[[SET: place = the balcony of the Star Hill clinic]]', []);
  const lines = RP.applyDirectives(RP.blankState(), factRoom, again.directives, () => null).lines;
  return /place is now/.test(lines[0]) && factRoom.facts.place.includes('Star Hill');
})());

check('script: a jump in time is recognised', (() => {
  return RP.isTimeJump('3 days later I stand outside looking at the stars') &&
    RP.isTimeJump('Later that night, I go back down') &&
    RP.isTimeJump('The next morning I check the table') &&
    !RP.isTimeJump('I look down at my sheets and read them aloud');
})());
check('script: a paused script fires nothing', (() => {
  const scripted = RP.newRoom([sans], { beats: [
    { time: 'one', beat: 'The first beat' }, { time: 'two', beat: 'The second beat' },
  ] });
  scripted.beatsPaused = true;
  return RP.fireBeat(scripted) === null && scripted.beatIndex === 0;
})());
check('script: un-pausing lets it carry on where it was', (() => {
  const scripted = RP.newRoom([sans], { beats: [{ time: 'one', beat: 'The first beat' }] });
  scripted.beatsPaused = true;
  RP.fireBeat(scripted);
  scripted.beatsPaused = false;
  return Boolean(RP.fireBeat(scripted)) && scripted.beatIndex === 1;
})());

// ---------- a turn finishes its sentence ----------
check('truncation: a reply that stops mid-sentence is spotted',
  RP.looksTruncated('your voice a low rasp that barely carries: "The patterns are') &&
  RP.looksTruncated('He turns, and then,') &&
  RP.looksTruncated('the shape of it was the'));
check('truncation: a finished reply is left alone',
  !RP.looksTruncated('He stops. The wind drops.') &&
  !RP.looksTruncated('She said, "stop."') &&
  !RP.looksTruncated('*He shrugs.*'));
check('truncation: an open quote counts as unfinished even with punctuation at the end',
  RP.looksTruncated('He read it out: "The patterns are wrong.'));
check('stitch: the continuation is joined without repeating the seam', (() => {
  const head = 'your voice a low rasp: "The patterns are';
  const joined = RP.stitch(head, '"The patterns are wrong," you say.');
  return joined.endsWith('wrong," you say.') && (joined.match(/The patterns are/g) || []).length === 1;
})());
check('stitch: an empty continuation changes nothing',
  RP.stitch('A finished line.', '') === 'A finished line.');
check('nudge: the model is told where it stopped and not to start again', (() => {
  const nudge = RP.continueNudge('…and the door is');
  return /cut off at/.test(nudge) && /do not repeat a word of it/.test(nudge) && /bring it to a proper stop/.test(nudge);
})());
check('trim: as a last resort it cuts back to the last full stop',
  RP.trimDangling('He crossed the yard. He put his hand on the latch and then the') === 'He crossed the yard.');
check('length: every band demands a whole last sentence, and has room for one', (() => {
  const band = RP.lengthBlock('rich', false);
  return /THE LAST SENTENCE MUST BE A WHOLE SENTENCE/.test(band.text) &&
    /better to write one sentence fewer and land it/.test(band.text) &&
    band.tokens >= 1000 && RP.lengthBlock('snappy').tokens >= 400;
})());

// ---------- privacy, presence, and talking to the model directly ----------
const quietRoom = RP.newRoom([sans, cutters, rebel], { youPlay: 'sans' });
check('privacy: a quiet turn reads as private, a loud one does not',
  RP.privacyHint('I do not look up, I just read to myself') === 'private' &&
  RP.privacyHint('I mutter it under my breath') === 'private' &&
  RP.privacyHint('I turn to Wario and shout') === 'open' &&
  RP.privacyHint('I walk over to the table') === '');
check('privacy: the room can be pinned either way, and the pin wins',
  RP.isPrivate({ privacy: 'private' }, 'I shout across the yard') === true &&
  RP.isPrivate({ privacy: 'open' }, 'I whisper to myself') === false &&
  RP.isPrivate({}, 'I whisper to myself') === true);
check('sequencer: it is told to read the room and not to import a crowd', (() => {
  quietRoom.messages.push({ id: 'q1', role: 'user', text: 'I read the page to myself.', at: 1 });
  const prompt = RP.sequencePrompt(quietRoom, RP.blankState(), {});
  return /READ THE ROOM/.test(prompt) && /A private moment is not an invitation/.test(prompt) &&
    /nobody walks in from off-stage/.test(prompt) &&
    /This turn reads as private/.test(prompt);
})());

check('presence: somebody written out of the scene cannot be staged', (() => {
  RP.ensureSheets(quietRoom);
  RP.setPresent(quietRoom, 'timber_gang', false);
  return RP.presentCast(quietRoom).length === 2 &&
    !RP.speakableCast(quietRoom).some(c => c.id === 'timber_gang') &&
    RP.speakableCast(quietRoom).length === 1;
})());
check('presence: and can be brought back', (() => {
  RP.setPresent(quietRoom, 'timber_gang', true);
  return RP.speakableCast(quietRoom).length === 2;
})());
check('presence: the character you play is never staged either',
  !RP.speakableCast(quietRoom).some(c => c.id === 'sans'));

check('ooc: ((brackets)), /ooc and [[OOC:]] are pulled out of the prose', (() => {
  const got = RP.parseOoc('I keep reading. ((no new characters)) \n/ooc keep it short\n[[OOC: Luigi is lying]]');
  return got.clean === 'I keep reading.' && got.notes.length === 3 &&
    got.notes[0] === 'no new characters' && got.notes[2] === 'Luigi is lying';
})());
check('ooc: a turn with no brackets is left exactly as written',
  RP.parseOoc('I read the page aloud.').clean === 'I read the page aloud.' &&
  RP.parseOoc('I read the page aloud.').notes.length === 0);
check('ooc: instructions outrank the prompt and are never spoken', (() => {
  const block = RP.oocBlock({ settings: { note: 'never kill anybody off-screen' } },
    { note: 'this scene is a funeral' }, ['no new characters']);
  return /these outrank everything else/.test(block) && /nobody in the scene hears them/.test(block) &&
    block.includes('never kill anybody off-screen') && block.includes('funeral') &&
    block.includes('no new characters');
})());
check('ooc: with nothing said, nothing is added', RP.oocBlock(RP.blankState(), {}, []) === '');
check('ooc: it reaches both the character prompt and the narrator', (() => {
  const st = RP.blankState();
  const room = RP.newRoom([sans], { note: 'keep this private' });
  return RP.systemFor(st, room, sans, { notes: ['short please'] }).includes('keep this private') &&
    RP.worldSystem(st, room, { notes: ['short please'] }).includes('short please');
})());

// ---------- generated pages are in sync with these sources ----------
let built = true;
try {
  execFileSync('python3', ['tools/build-chatroom.py', '--check'], { cwd: repoRoot, stdio: 'pipe' });
} catch (e) { built = false; console.log(String(e.stdout || '')); }
check('build: chatroom.html and workflow/roleplay.html match their sources', built);

console.log(ok ? 'ALL CHATROOM CORE TESTS PASS' : 'CHATROOM CORE TESTS FAILED');
process.exit(ok ? 0 : 1);
