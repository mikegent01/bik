// Local regression checks for the standalone Waluipedia Chat archive format.
// Run: node tools/tests/chatroom-state.mjs
import assert from 'node:assert/strict';
import {
  applicableMemories,
  initialState,
  mergeState,
  normaliseState,
  sourceParticipants
} from '../../chatroom-data.mjs';

const raw = {
  version: 1,
  activeChatId: 'c1',
  chats: [{
    id: 'c1', characterId: 'waluigi', title: 'A chat', createdAt: '2026-09-01T10:00:00.000Z', updatedAt: '2026-09-01T10:01:00.000Z',
    messages: [{ id: 'm1', role: 'player', body: '<b>Keep this as text</b>', createdAt: '2026-09-01T10:00:00.000Z' }]
  }],
  memories: [
    { id: 'global', text: 'A shared detail', characterId: '', createdAt: '2026-09-01T10:00:00.000Z' },
    { id: 'w-memory', text: 'Waluigi-only detail', characterId: 'waluigi', createdAt: '2026-09-01T10:01:00.000Z' }
  ],
  loreNotes: [{ id: 'l1', title: 'Boundary', body: 'Replays are not canon.', tags: ['replay'], sourceIds: ['battle_1'], createdAt: '2026-09-01T10:00:00.000Z', updatedAt: '2026-09-01T10:00:00.000Z' }]
};

const archive = normaliseState(raw);
assert.equal(archive.chats.length, 1, 'normalises a valid chat');
assert.equal(archive.chats[0].messages[0].body, '<b>Keep this as text</b>', 'does not mutate user text during storage validation');
assert.equal(applicableMemories(archive, 'waluigi').length, 2, 'includes global and character-scoped memory');
assert.equal(applicableMemories(archive, 'bowser').length, 1, 'does not leak character-scoped memory');
assert.equal(normaliseState({ activeChatId: 'missing' }).activeChatId, null, 'drops an invalid active chat id');

const updated = mergeState(archive, {
  ...initialState(),
  activeChatId: 'c2',
  chats: [{ ...raw.chats[0], title: 'Newer imported title', updatedAt: '2026-09-02T10:00:00.000Z' }, { id: 'c2', characterId: 'bowser', title: 'Second', createdAt: '2026-09-02T10:00:00.000Z', updatedAt: '2026-09-02T10:00:00.000Z', messages: [] }]
});
assert.equal(updated.chats.length, 2, 'merges non-duplicate chats');
assert.equal(updated.chats.find((chat) => chat.id === 'c1').title, 'Newer imported title', 'keeps the newest duplicate record');

const perspectives = sourceParticipants({
  belligerents: { attackers: { name: 'The Cutting Expedition', combatants: [{ name: 'Woodfellow', role: 'heavy ordnance' }] } },
  relatedArticles: ['waluigi']
}, [{ id: 'waluigi', name: 'Waluigi', title: 'Archivist' }]);
assert.deepEqual(perspectives.slice(0, 3).map((item) => item.name), ['The Cutting Expedition', 'Woodfellow', 'Waluigi'], 'builds replay perspectives from battle participants and linked records');

console.log('Waluipedia Chat state tests: PASS');
