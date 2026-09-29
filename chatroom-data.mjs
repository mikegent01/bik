/*
 * Waluipedia Chat data helpers.
 *
 * This module deliberately has no DOM or localStorage dependency so the chat
 * archive can be imported, checked, and merged without trusting a browser
 * payload. `chatroom.js` is the only module that paints UI or writes storage.
 */

export const CHATROOM_VERSION = 1;
export const CHATROOM_STORAGE_KEY = 'waluipedia.chatroom.v1';
const MAX_TEXT = 6000;
const MAX_ITEMS = 400;

const DATA_FILES = {
  characters: 'Reputation-Matrix2/data/characters.json',
  events: 'Reputation-Matrix2/data/events.json',
  battles: 'Reputation-Matrix2/data/battles.json',
  majorBattles: 'Reputation-Matrix2/data/majorBattles.json'
};

export function makeId(prefix = 'item') {
  const random = typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2, 10);
  return `${prefix}_${Date.now().toString(36)}_${random}`;
}

export function nowIso() {
  return new Date().toISOString();
}

export function initialState() {
  return {
    version: CHATROOM_VERSION,
    activeChatId: null,
    chats: [],
    memories: [],
    loreNotes: []
  };
}

function stringValue(value, limit = MAX_TEXT) {
  return typeof value === 'string' ? value.slice(0, limit) : '';
}

function stringList(value, limit = 24) {
  return Array.isArray(value)
    ? value.filter((item) => typeof item === 'string').slice(0, limit)
    : [];
}

function timestamp(value) {
  const parsed = Date.parse(value || '');
  return Number.isFinite(parsed) ? new Date(parsed).toISOString() : nowIso();
}

function normaliseMessage(value) {
  if (!value || typeof value !== 'object') return null;
  const role = ['player', 'character', 'system'].includes(value.role) ? value.role : 'system';
  const body = stringValue(value.body);
  if (!body) return null;
  return {
    id: stringValue(value.id, 120) || makeId('message'),
    role,
    body,
    createdAt: timestamp(value.createdAt),
    sourceId: stringValue(value.sourceId, 240),
    sourceType: stringValue(value.sourceType, 40),
    sourceName: stringValue(value.sourceName, 500)
  };
}

function normaliseReplay(value) {
  if (!value || typeof value !== 'object' || !value.sourceId) return null;
  return {
    sourceId: stringValue(value.sourceId, 240),
    sourceType: value.sourceType === 'battle' ? 'battle' : 'event',
    sourceName: stringValue(value.sourceName, 500),
    perspectiveId: stringValue(value.perspectiveId, 240),
    perspectiveName: stringValue(value.perspectiveName, 240)
  };
}

function normaliseChat(value) {
  if (!value || typeof value !== 'object') return null;
  const characterId = stringValue(value.characterId, 240);
  if (!characterId) return null;
  return {
    id: stringValue(value.id, 120) || makeId('chat'),
    characterId,
    title: stringValue(value.title, 500) || 'Untitled conversation',
    createdAt: timestamp(value.createdAt),
    updatedAt: timestamp(value.updatedAt),
    replay: normaliseReplay(value.replay),
    messages: (Array.isArray(value.messages) ? value.messages : [])
      .map(normaliseMessage)
      .filter(Boolean)
      .slice(-MAX_ITEMS)
  };
}

function normaliseMemory(value) {
  if (!value || typeof value !== 'object') return null;
  const text = stringValue(value.text, 1200);
  if (!text) return null;
  return {
    id: stringValue(value.id, 120) || makeId('memory'),
    text,
    characterId: stringValue(value.characterId, 240),
    sourceChatId: stringValue(value.sourceChatId, 120),
    createdAt: timestamp(value.createdAt)
  };
}

function normaliseLoreNote(value) {
  if (!value || typeof value !== 'object') return null;
  const body = stringValue(value.body, MAX_TEXT);
  if (!body) return null;
  return {
    id: stringValue(value.id, 120) || makeId('lore'),
    title: stringValue(value.title, 300) || 'Untitled lore note',
    body,
    tags: stringList(value.tags),
    sourceIds: stringList(value.sourceIds),
    createdAt: timestamp(value.createdAt),
    updatedAt: timestamp(value.updatedAt)
  };
}

/** Return a safe, bounded copy of a local or imported chat archive. */
export function normaliseState(value) {
  const state = initialState();
  if (!value || typeof value !== 'object') return state;

  const unique = (items) => {
    const seen = new Set();
    return items.filter((item) => {
      if (!item || seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    }).slice(-MAX_ITEMS);
  };

  state.chats = unique((Array.isArray(value.chats) ? value.chats : []).map(normaliseChat).filter(Boolean));
  state.memories = unique((Array.isArray(value.memories) ? value.memories : []).map(normaliseMemory).filter(Boolean));
  state.loreNotes = unique((Array.isArray(value.loreNotes) ? value.loreNotes : []).map(normaliseLoreNote).filter(Boolean));
  const active = stringValue(value.activeChatId, 120);
  state.activeChatId = state.chats.some((chat) => chat.id === active) ? active : state.chats.at(-1)?.id || null;
  return state;
}

/** Merge an imported archive without silently replacing a reader's local work. */
export function mergeState(current, imported) {
  const local = normaliseState(current);
  const incoming = normaliseState(imported);
  const byNewest = (items) => {
    const map = new Map();
    items.forEach((item) => {
      const old = map.get(item.id);
      if (!old || Date.parse(item.updatedAt || item.createdAt) >= Date.parse(old.updatedAt || old.createdAt)) map.set(item.id, item);
    });
    return [...map.values()].sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)).slice(-MAX_ITEMS);
  };
  const merged = {
    version: CHATROOM_VERSION,
    activeChatId: local.activeChatId,
    chats: byNewest([...local.chats, ...incoming.chats]),
    memories: byNewest([...local.memories, ...incoming.memories]),
    loreNotes: byNewest([...local.loreNotes, ...incoming.loreNotes])
  };
  if (!merged.chats.some((chat) => chat.id === merged.activeChatId)) {
    merged.activeChatId = incoming.activeChatId || merged.chats.at(-1)?.id || null;
  }
  return normaliseState(merged);
}

export function cleanText(value = '') {
  return String(value)
    .replace(/\[\[[^|\]]+\|([^\]]+)\]\]/g, '$1')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/<[^>]*>/g, ' ')
    .replace(/[#*_`]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function makeHandle(record) {
  const id = record?.id || record?.name || 'archive';
  return `@${String(id).toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')}`;
}

export function imagePath(record) {
  const path = typeof record?.image === 'string' ? record.image.trim() : '';
  return path && !/^(?:https?:|data:)/i.test(path) ? path : '';
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

async function fetchData(url) {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`${url}: ${response.status}`);
  const data = await response.json();
  return asArray(data);
}

/** Load canonical archive records; chat never creates a second lore registry. */
export async function loadArchiveData() {
  const pairs = await Promise.all(Object.entries(DATA_FILES).map(async ([key, url]) => {
    try {
      return [key, await fetchData(url)];
    } catch (error) {
      console.warn(`Waluipedia Chat could not load ${key}`, error);
      return [key, []];
    }
  }));
  const data = Object.fromEntries(pairs);
  const characters = data.characters.filter((item) => item?.id && item?.name);
  const events = data.events.filter((item) => item?.id && item?.name).map((item) => ({ ...item, _sourceType: 'event' }));
  const battles = [...data.battles, ...data.majorBattles]
    .filter((item) => item?.id && item?.name)
    .map((item) => ({ ...item, _sourceType: 'battle' }));
  const sources = [...events, ...battles];
  return {
    characters,
    sources,
    characterById: new Map(characters.map((item) => [item.id, item])),
    sourceById: new Map(sources.map((item) => [item.id, item]))
  };
}

export function sourceParticipants(source, characters = []) {
  const found = new Map();
  const add = (name, role = '') => {
    if (!name) return;
    const known = characters.find((character) => character.name?.trim().toLowerCase() === String(name).trim().toLowerCase()
      || character.id === name);
    const id = known?.id || String(name).toLowerCase().replace(/[^a-z0-9]+/g, '_');
    found.set(id, { id, name: known?.name || String(name), role, known: Boolean(known) });
  };
  for (const person of asArray(source?.participants)) add(person?.name || person?.id, person?.role);
  for (const side of Object.values(source?.belligerents || {})) {
    add(side?.name, side?.commander ? `Command: ${side.commander}` : 'Filed side');
    for (const person of asArray(side?.combatants)) add(person?.name, person?.role);
  }
  for (const id of asArray(source?.relatedArticles)) {
    const known = characters.find((character) => character.id === id);
    if (known) add(known.name, known.title || 'Related archive character');
  }
  return [...found.values()].slice(0, 30);
}

export function applicableMemories(state, characterId) {
  return state.memories
    .filter((memory) => !memory.characterId || memory.characterId === characterId)
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
}
