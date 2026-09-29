import {
  CHATROOM_STORAGE_KEY,
  applicableMemories,
  cleanText,
  imagePath,
  initialState,
  loadArchiveData,
  makeHandle,
  makeId,
  mergeState,
  normaliseState,
  nowIso,
  sourceParticipants
} from './chatroom-data.mjs';

const $ = (selector) => document.querySelector(selector);
const els = {
  app: $('#chatroom-app'), chatList: $('#chat-list'), chatCount: $('#chat-count'), search: $('#sidebar-search'),
  empty: $('#empty-state'), emptyActions: $('#empty-actions'), conversation: $('#conversation'), head: $('#conversation-head'),
  log: $('#chat-log'), compose: $('#compose-form'), input: $('#message-input'), replayBanner: $('#replay-banner'),
  profile: $('#profile-panel'), memories: $('#memory-list'), loreCount: $('#lore-count'), toast: $('#toast-region'),
  characterDialog: $('#character-dialog'), characterSearch: $('#character-search'), characterGrid: $('#character-grid'),
  replayDialog: $('#replay-dialog'), replayForm: $('#replay-form'), sourceSearch: $('#source-search'), sourceResults: $('#source-results'),
  perspective: $('#perspective-select'), sourcePreview: $('#source-preview'), replayStatus: $('#replay-selection-status'), startReplay: $('#start-replay-button'),
  loreDialog: $('#lore-dialog'), loreForm: $('#lore-form'), loreTitle: $('#lore-title'), loreBody: $('#lore-body'), loreTags: $('#lore-tags'), loreList: $('#lore-list'),
  memoryDialog: $('#memory-dialog'), memoryForm: $('#memory-form'), memoryText: $('#memory-text'), importFile: $('#import-file')
};

let archive = { characters: [], sources: [], characterById: new Map(), sourceById: new Map() };
let state = readState();
let replaySourceId = '';
let replayPerspectiveId = '';

function readState() {
  try { return normaliseState(JSON.parse(localStorage.getItem(CHATROOM_STORAGE_KEY) || 'null')); }
  catch { return initialState(); }
}

function persist() {
  try { localStorage.setItem(CHATROOM_STORAGE_KEY, JSON.stringify(state)); }
  catch { toast('Your browser refused local storage. Export this session before leaving.', true); }
}

function toast(message, isError = false) {
  const item = document.createElement('div');
  item.className = `cr-toast${isError ? ' cr-toast--error' : ''}`;
  item.textContent = message;
  els.toast.append(item);
  window.setTimeout(() => item.remove(), 4200);
}

function text(value, limit = 360) {
  const result = cleanText(value || '');
  return result.length > limit ? `${result.slice(0, limit).trimEnd()}…` : result;
}

function stamp(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.valueOf())) return 'now';
  return new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }).format(date);
}

function avatar(record, className = '') {
  const element = document.createElement('div');
  element.className = `cr-avatar ${className}`.trim();
  element.setAttribute('aria-hidden', 'true');
  element.append(document.createTextNode((record?.name || '?').trim().slice(0, 1).toUpperCase()));
  const path = imagePath(record);
  if (path) {
    const image = new Image();
    image.alt = '';
    image.src = path;
    image.addEventListener('error', () => image.remove(), { once: true });
    element.append(image);
  }
  return element;
}

function activeChat() {
  return state.chats.find((chat) => chat.id === state.activeChatId) || null;
}

function sourceFor(chat) {
  return chat?.replay ? archive.sourceById.get(chat.replay.sourceId) || null : null;
}

function personaFor(chat) {
  if (!chat) return null;
  const replay = chat.replay;
  if (replay) {
    const known = archive.characterById.get(replay.perspectiveId)
      || archive.characters.find((character) => character.name?.toLowerCase() === replay.perspectiveName?.toLowerCase());
    if (known) return known;
    const source = sourceFor(chat);
    return {
      id: `perspective_${replay.sourceId}_${replay.perspectiveId}`,
      name: replay.perspectiveName || 'Filed perspective',
      title: 'Filed replay perspective',
      affiliation: source?.name || 'Archive filing',
      summary: `A perspective drawn from the filed record “${source?.name || replay.sourceName || 'unknown filing'}.”`,
      image: ''
    };
  }
  return archive.characterById.get(chat.characterId) || {
    id: chat.characterId, name: 'Unavailable archive character', title: 'Record unavailable', summary: 'The original character record could not be loaded.', image: ''
  };
}

function createElement(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined) node.textContent = value;
  return node;
}

function sourceRoute(source) {
  return `index.html#/${source?._sourceType === 'battle' ? 'battle' : 'article'}/${encodeURIComponent(source?.id || '')}`;
}

function isCurrentPersonaMemory(memory, persona) {
  return !memory.characterId || memory.characterId === persona?.id;
}

function renderAll({ scroll = false } = {}) {
  renderSidebar();
  renderConversation(scroll);
  renderInspector();
  renderLore();
}

function renderSidebar() {
  els.chatList.replaceChildren();
  const term = els.search.value.trim().toLowerCase();
  const chats = [...state.chats].sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)).filter((chat) => {
    const persona = personaFor(chat);
    return !term || `${chat.title} ${persona?.name || ''} ${chat.replay?.sourceName || ''}`.toLowerCase().includes(term);
  });
  els.chatCount.textContent = String(state.chats.length);
  if (!chats.length) {
    els.chatList.append(createElement('p', 'cr-character-empty', term ? 'No matching conversations.' : 'No conversations yet.'));
    return;
  }
  chats.forEach((chat) => {
    const persona = personaFor(chat);
    const button = createElement('button', `cr-chat-item${chat.id === state.activeChatId ? ' is-active' : ''}`);
    button.type = 'button';
    button.append(avatar(persona));
    const copy = createElement('span');
    copy.append(createElement('strong', '', chat.title));
    const label = chat.replay ? `Replay · ${chat.replay.perspectiveName}` : (persona?.name || 'Archive chat');
    copy.append(createElement('small', '', label));
    button.append(copy);
    button.addEventListener('click', () => { state.activeChatId = chat.id; persist(); renderAll({ scroll: true }); closeMobileMenu(); });
    els.chatList.append(button);
  });
}

function renderConversation(scroll) {
  const chat = activeChat();
  els.empty.hidden = Boolean(chat);
  els.conversation.hidden = !chat;
  if (!chat) { renderEmpty(); return; }
  const persona = personaFor(chat);
  const source = sourceFor(chat);
  els.head.replaceChildren();
  const profile = createElement('div', 'cr-conversation-profile');
  profile.append(avatar(persona));
  const copy = createElement('div');
  const heading = createElement('h1', '', persona.name);
  heading.append(createElement('span', 'cr-canonical-badge', chat.replay ? 'REPLAY' : 'ARCHIVE'));
  copy.append(heading);
  copy.append(createElement('p', '', chat.replay ? `${source?.name || chat.replay.sourceName} · ${persona.title}` : `${makeHandle(persona)} · ${persona.title || 'Canonical archive character'}`));
  profile.append(copy);
  const actions = createElement('div', 'cr-conversation-actions');
  const replay = createElement('button', 'cr-button cr-button--quiet', 'Replay a filing');
  replay.type = 'button'; replay.addEventListener('click', openReplayDialog); actions.append(replay);
  const fresh = createElement('button', 'cr-icon-button', '＋'); fresh.type = 'button'; fresh.title = 'Start a new chat'; fresh.setAttribute('aria-label', 'Start a new chat'); fresh.addEventListener('click', openCharacterDialog); actions.append(fresh);
  els.head.append(profile, actions);

  els.replayBanner.hidden = !chat.replay;
  els.replayBanner.replaceChildren();
  if (chat.replay) {
    const lead = createElement('b', '', 'Replay boundary');
    const words = createElement('span', '', `This conversation is a non-canon perspective exercise grounded in “${source?.name || chat.replay.sourceName}.” `);
    if (source) { const link = createElement('a', '', 'Open source record'); link.href = sourceRoute(source); words.append(link); }
    els.replayBanner.append(lead, words);
  }

  els.log.replaceChildren();
  chat.messages.forEach((message) => renderMessage(message, persona));
  if (!chat.messages.length) renderMessage({ role: 'system', body: 'No messages yet. This local chat has the active character profile and any saved memories available as context.', createdAt: nowIso() }, persona);
  if (scroll) requestAnimationFrame(() => { els.log.scrollTop = els.log.scrollHeight; });
}

function renderEmpty() {
  els.emptyActions.replaceChildren();
  const preferred = ['waluigi', 'hjumpik', 'markop'].map((id) => archive.characterById.get(id)).filter(Boolean);
  preferred.slice(0, 2).forEach((character) => {
    const button = createElement('button', 'cr-button cr-button--primary', `Chat with ${character.name}`);
    button.type = 'button'; button.addEventListener('click', () => createChat(character)); els.emptyActions.append(button);
  });
  const source = archive.sourceById.get('feyward_woodfellow_vs_the_treant');
  const replay = createElement('button', 'cr-button cr-button--quiet', source ? 'Replay the cutting lane' : 'Replay a filing');
  replay.type = 'button'; replay.addEventListener('click', openReplayDialog); els.emptyActions.append(replay);
}

function renderMessage(message, persona) {
  const isPlayer = message.role === 'player';
  const article = createElement('article', `cr-message cr-message--${message.role}`);
  if (!isPlayer && message.role !== 'system') article.append(avatar(persona));
  const content = createElement('div', 'cr-message-content');
  if (message.role !== 'system') {
    const meta = createElement('div', 'cr-message-meta');
    meta.append(createElement('strong', '', isPlayer ? 'You' : `${persona.name} · local lore draft`));
    const time = createElement('time', '', stamp(message.createdAt)); time.dateTime = message.createdAt || ''; meta.append(time); content.append(meta);
  }
  content.append(createElement('div', 'cr-message-body', message.body));
  const citedSource = message.sourceId ? archive.sourceById.get(message.sourceId) : null;
  if (citedSource) {
    const link = createElement('a', 'cr-source-chip', `↗ ${message.sourceName || citedSource.name}`);
    link.href = sourceRoute(citedSource); link.title = 'Open source record in Waluipedia'; content.append(link);
  }
  if (isPlayer) {
    const tools = createElement('div', 'cr-message-tools');
    const save = createElement('button', '', 'Save as memory'); save.type = 'button'; save.addEventListener('click', () => openMemoryDialog(message.body)); tools.append(save); content.append(tools);
  }
  article.append(content); els.log.append(article);
}

function renderInspector() {
  const chat = activeChat();
  const persona = personaFor(chat);
  els.profile.replaceChildren();
  els.memories.replaceChildren();
  if (!persona) {
    els.profile.append(createElement('section', 'cr-profile', 'Choose a conversation to view its archive profile and saved memories.'));
    els.memories.append(createElement('p', 'cr-memory-empty', 'Memories will appear after you choose a character.'));
    return;
  }
  const profile = createElement('section', 'cr-profile');
  const top = createElement('div', 'cr-profile-top'); top.append(avatar(persona));
  const copy = createElement('div'); copy.append(createElement('h2', '', persona.name)); copy.append(createElement('p', 'cr-profile-handle', chat?.replay ? 'Filed replay perspective' : makeHandle(persona))); top.append(copy); profile.append(top);
  profile.append(createElement('p', 'cr-profile-title', persona.title || 'Canonical archive profile'));
  profile.append(createElement('p', 'cr-profile-summary', text(persona.summary, 380) || 'No profile summary is currently filed.'));
  const status = createElement('p', 'cr-profile-status'); status.append(createElement('b', '', '● Archive context'), document.createTextNode(chat?.replay ? 'Replaying a filed perspective. Replays do not alter canon.' : 'Profile loaded from the canonical character registry.')); profile.append(status);
  const actions = createElement('div', 'cr-profile-actions');
  if (chat?.replay && sourceFor(chat)) {
    const link = createElement('a', 'cr-button cr-button--quiet', 'Open filing'); link.href = sourceRoute(sourceFor(chat)); actions.append(link);
  } else {
    const link = createElement('a', 'cr-button cr-button--quiet', 'Open profile'); link.href = `index.html#/article/${encodeURIComponent(persona.id)}`; actions.append(link);
  }
  const newChat = createElement('button', 'cr-button cr-button--quiet', 'New chat'); newChat.type = 'button'; newChat.addEventListener('click', openCharacterDialog); actions.append(newChat); profile.append(actions); els.profile.append(profile);

  const memories = applicableMemories(state, persona.id);
  if (!memories.length) els.memories.append(createElement('p', 'cr-memory-empty', 'Nothing saved yet. Save confirmed details to carry them into future chats.'));
  memories.slice(0, 8).forEach((memory) => {
    const card = createElement('article', 'cr-memory-card', memory.text);
    const remove = createElement('button', '', '×'); remove.type = 'button'; remove.title = 'Delete memory'; remove.setAttribute('aria-label', 'Delete memory');
    remove.addEventListener('click', () => { state.memories = state.memories.filter((item) => item.id !== memory.id); persist(); renderInspector(); toast('Memory removed.'); });
    const date = createElement('time', '', stamp(memory.createdAt)); card.append(remove, date); els.memories.append(card);
  });
}

function openCharacterDialog() {
  if (!archive.characters.length) return toast('Archive character records are still loading or unavailable.', true);
  els.characterSearch.value = ''; renderCharacterGrid(); els.characterDialog.showModal(); els.characterSearch.focus();
}

function renderCharacterGrid() {
  const query = els.characterSearch.value.trim().toLowerCase();
  els.characterGrid.replaceChildren();
  const characters = archive.characters.filter((character) => !query || `${character.name} ${character.title || ''} ${character.affiliation || ''}`.toLowerCase().includes(query)).slice(0, 80);
  if (!characters.length) { els.characterGrid.append(createElement('p', 'cr-character-empty', 'No canonical character record matches that search.')); return; }
  characters.forEach((character) => {
    const card = createElement('button', 'cr-character-card'); card.type = 'button'; card.append(avatar(character));
    const copy = createElement('span'); copy.append(createElement('strong', '', character.name)); copy.append(createElement('small', '', character.title || makeHandle(character))); card.append(copy);
    card.addEventListener('click', () => { els.characterDialog.close(); createChat(character); }); els.characterGrid.append(card);
  });
}

function createChat(character, replay = null) {
  const persona = replay?.perspectiveName || character.name;
  const chat = {
    id: makeId('chat'), characterId: character.id, title: replay ? `Replay · ${text(replay.sourceName, 46)}` : character.name,
    createdAt: nowIso(), updatedAt: nowIso(), replay, messages: []
  };
  const greeting = replay
    ? `Replay opened from “${replay.sourceName}” as ${persona}. The source record, its outcome, and its boundaries stay visible here. This is a non-canon exploration; save only confirmed facts to lore.`
    : `Archive context loaded for ${character.name}. This local conversation reads the canonical profile and your saved cross-chat memories. It does not edit the archive or speak for a live external account.`;
  chat.messages.push({ id: makeId('message'), role: 'system', body: greeting, createdAt: nowIso(), sourceId: replay?.sourceId || '', sourceType: replay?.sourceType || '', sourceName: replay?.sourceName || '' });
  state.chats.push(chat); state.activeChatId = chat.id; persist(); renderAll({ scroll: true }); closeMobileMenu();
}

function ensureStarterConversation() {
  if (state.chats.length || !archive.characters.length) return;
  const character = archive.characterById.get('waluigi') || archive.characters[0];
  const source = archive.sourceById.get('feyward_battalion_of_six_and_the_bait_plan');
  const createdAt = nowIso();
  const chat = {
    id: makeId('chat'),
    characterId: character.id,
    title: character.name,
    createdAt,
    updatedAt: createdAt,
    replay: null,
    messages: [
      {
        id: makeId('message'),
        role: 'system',
        body: 'Today · Local Waluipedia Chat',
        createdAt,
        sourceId: '',
        sourceType: '',
        sourceName: ''
      },
      {
        id: makeId('message'),
        role: 'character',
        body: `Archive context loaded.\n\n${text(character.summary, 510)}\n\nChoose a filing, ask for a detail, or save a fact with “remember:” so it carries into your next conversation.`,
        createdAt,
        sourceId: source?.id || '',
        sourceType: source?._sourceType || '',
        sourceName: source?.name || ''
      }
    ]
  };
  state.chats.push(chat);
  state.activeChatId = chat.id;
  persist();
}

function openReplayDialog() {
  if (!archive.sources.length) return toast('Archive events and battles are still loading or unavailable.', true);
  const preferred = archive.sourceById.get('feyward_woodfellow_vs_the_treant') || archive.sources[0];
  replaySourceId = replaySourceId && archive.sourceById.has(replaySourceId) ? replaySourceId : preferred.id;
  els.sourceSearch.value = ''; renderSourcePicker(); els.replayDialog.showModal(); els.sourceSearch.focus();
}

function renderSourcePicker() {
  const query = els.sourceSearch.value.trim().toLowerCase();
  const preferredIds = ['feyward_woodfellow_vs_the_treant', 'feyward_sixth_detachment_house_defense', 'feyward_battalion_of_six_and_the_bait_plan'];
  const priority = (source) => {
    const index = preferredIds.indexOf(source.id);
    return index === -1 ? 99 : index;
  };
  const ordered = [...archive.sources].sort((a, b) => priority(a) - priority(b) || a.name.localeCompare(b.name));
  const sources = ordered.filter((source) => !query || `${source.name} ${source.summary || ''} ${source.location || ''}`.toLowerCase().includes(query)).slice(0, 60);
  els.sourceResults.replaceChildren();
  if (!sources.length) els.sourceResults.append(createElement('p', 'cr-source-empty', 'No filed event or battle matches that search.'));
  sources.forEach((source) => {
    const button = createElement('button', `cr-source-result${source.id === replaySourceId ? ' is-selected' : ''}`); button.type = 'button';
    button.append(createElement('b', '', source.name), createElement('span', '', text(source.date || source.location || 'Filed archive record', 110)), createElement('small', '', source._sourceType === 'battle' ? 'Battle record' : 'Event filing'));
    button.addEventListener('click', () => { replaySourceId = source.id; replayPerspectiveId = ''; renderSourcePicker(); }); els.sourceResults.append(button);
  });
  const source = archive.sourceById.get(replaySourceId);
  const perspectives = sourceParticipants(source, archive.characters);
  els.perspective.replaceChildren();
  if (source && !perspectives.length) perspectives.push({ id: 'witness', name: 'Unspecified witness', role: 'No named perspective filed', known: false });
  if (!replayPerspectiveId || !perspectives.some((perspective) => perspective.id === replayPerspectiveId)) replayPerspectiveId = perspectives[0]?.id || '';
  perspectives.forEach((perspective) => {
    const option = createElement('option', '', `${perspective.name}${perspective.role ? ` — ${perspective.role}` : ''}`); option.value = perspective.id; option.selected = perspective.id === replayPerspectiveId; els.perspective.append(option);
  });
  if (source) {
    els.sourcePreview.replaceChildren(createElement('strong', '', source.name), document.createTextNode(`${text(source.summary || source.description || 'No summary filed.', 470)}${source.location ? ` Location: ${source.location}.` : ''}`));
  } else els.sourcePreview.textContent = 'Select a filing to see its archive context.';
  els.startReplay.disabled = !(source && replayPerspectiveId);
  els.replayStatus.textContent = source ? `${source._sourceType === 'battle' ? 'Battle' : 'Event'} selected · choose the lens that will carry the scene.` : 'Select a filing to continue.';
}

function openMemoryDialog(prefill = '') {
  if (!activeChat()) return toast('Open a conversation before saving a memory.', true);
  els.memoryText.value = text(prefill, 1200).replace(/^remember\s*:\s*/i, '');
  els.memoryDialog.showModal(); els.memoryText.focus();
}

function addMemory(raw) {
  const persona = personaFor(activeChat()); const value = cleanText(raw);
  if (!persona || !value) return false;
  state.memories.unshift({ id: makeId('memory'), text: value.slice(0, 1200), characterId: persona.id, sourceChatId: activeChat().id, createdAt: nowIso() });
  state.memories = state.memories.slice(0, 400); persist(); renderInspector(); return true;
}

function draftReply(chat, playerText) {
  const persona = personaFor(chat); const source = sourceFor(chat); const memories = applicableMemories(state, persona.id).slice(0, 2);
  const asked = text(playerText, 190); const remembered = memories.length ? ` Carried context: ${memories.map((memory) => memory.text).join(' · ')}` : '';
  if (source) {
    const ground = text(source.summary || source.description || source.result || 'The source has no summary.', 330);
    return {
      body: `${persona.name} · replay lens\nThe filing places this scene at ${source.location || 'the recorded location'}. ${ground}\n\nYour proposed turn is held as a non-canon option: “${asked}”${remembered}\n\nContinue by testing the option against the filed outcome, or save a separate lore note if it becomes a confirmed table decision.`,
      sourceId: source.id, sourceType: source._sourceType, sourceName: source.name
    };
  }
  const profile = text(persona.summary || persona.description || 'No profile summary is filed.', 330);
  const linked = Array.isArray(persona.keyEvents) && persona.keyEvents.length ? archive.sourceById.get(persona.keyEvents[0]) : null;
  return {
    body: `${persona.name} · archive lens\n${profile}\n\nYour message is filed as a local prompt: “${asked}”${remembered}\n\nThis desk can keep continuity through saved memories and linked filings. It will not invent a new canon outcome; mark settled material in the lore notebook.`,
    sourceId: linked?.id || '', sourceType: linked?._sourceType || '', sourceName: linked?.name || ''
  };
}

function sendMessage() {
  const raw = els.input.value.trim(); const chat = activeChat(); if (!raw || !chat) return;
  const player = { id: makeId('message'), role: 'player', body: raw, createdAt: nowIso(), sourceId: '', sourceType: '', sourceName: '' };
  chat.messages.push(player); chat.updatedAt = nowIso();
  if (chat.messages.filter((message) => message.role === 'player').length === 1 && !chat.replay) chat.title = `${personaFor(chat).name} · ${text(raw, 38)}`;
  els.input.value = ''; autoSize();
  if (/^remember\s*:/i.test(raw) && addMemory(raw)) toast('Memory saved for future chats with this perspective.');
  const draft = draftReply(chat, raw);
  window.setTimeout(() => {
    chat.messages.push({ id: makeId('message'), role: 'character', body: draft.body, createdAt: nowIso(), ...draft }); chat.updatedAt = nowIso(); persist(); renderAll({ scroll: true });
  }, 180);
  persist(); renderAll({ scroll: true });
}

function renderLore() {
  els.loreList.replaceChildren(); els.loreCount.textContent = `${state.loreNotes.length} ${state.loreNotes.length === 1 ? 'note' : 'notes'}`;
  const notes = [...state.loreNotes].sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
  if (!notes.length) { els.loreList.append(createElement('p', 'cr-memory-empty', 'No local lore notes yet. Save confirmed facts, questions, or replay outcomes here.')); return; }
  notes.forEach((note) => {
    const card = createElement('article', 'cr-lore-card'); card.append(createElement('h4', '', note.title), createElement('p', '', note.body));
    if (note.tags.length) { const tags = createElement('div', 'cr-lore-tags'); note.tags.forEach((tag) => tags.append(createElement('span', '', tag))); card.append(tags); }
    const remove = createElement('button', '', '×'); remove.type = 'button'; remove.title = 'Delete lore note'; remove.setAttribute('aria-label', `Delete ${note.title}`); remove.addEventListener('click', () => { state.loreNotes = state.loreNotes.filter((item) => item.id !== note.id); persist(); renderLore(); toast('Lore note removed.'); }); card.append(remove); els.loreList.append(card);
  });
}

function exportArchive() {
  const output = { ...state, version: 1, exportedAt: nowIso(), source: 'Waluipedia Chat local archive' };
  const blob = new Blob([JSON.stringify(output, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob); const anchor = document.createElement('a'); anchor.href = url; anchor.download = `waluipedia-chat-archive-${new Date().toISOString().slice(0, 10)}.json`; anchor.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000); toast('Chat, memory, and lore archive exported.');
}

async function importArchive(file) {
  try {
    const parsed = JSON.parse(await file.text()); const incoming = normaliseState(parsed);
    if (!incoming.chats.length && !incoming.memories.length && !incoming.loreNotes.length) throw new Error('The selected file has no readable chat, memory, or lore records.');
    if (!window.confirm(`Merge ${incoming.chats.length} chats, ${incoming.memories.length} memories, and ${incoming.loreNotes.length} lore notes into this browser? Existing records with the same id keep the newest version.`)) return;
    state = mergeState(state, incoming); persist(); renderAll({ scroll: true }); toast('Archive import merged successfully.');
  } catch (error) { toast(`Import failed: ${error.message || 'invalid JSON file'}`, true); }
}

function autoSize() { els.input.style.height = 'auto'; els.input.style.height = `${Math.min(els.input.scrollHeight, 180)}px`; }
function closeMobileMenu() { els.app.classList.remove('is-menu-open'); $('#mobile-menu-button').setAttribute('aria-expanded', 'false'); }

function wireEvents() {
  $('#new-chat-button').addEventListener('click', openCharacterDialog);
  $('#replay-button').addEventListener('click', openReplayDialog); $('#inspector-replay-button').addEventListener('click', openReplayDialog);
  $('#mobile-menu-button').addEventListener('click', () => { const open = els.app.classList.toggle('is-menu-open'); $('#mobile-menu-button').setAttribute('aria-expanded', String(open)); });
  document.addEventListener('click', (event) => { if (els.app.classList.contains('is-menu-open') && !event.target.closest('.cr-sidebar, #mobile-menu-button')) closeMobileMenu(); });
  els.search.addEventListener('input', renderSidebar); els.characterSearch.addEventListener('input', renderCharacterGrid);
  els.sourceSearch.addEventListener('input', renderSourcePicker); els.perspective.addEventListener('change', () => { replayPerspectiveId = els.perspective.value; renderSourcePicker(); });
  els.replayForm.addEventListener('submit', (event) => {
    event.preventDefault(); const source = archive.sourceById.get(replaySourceId); const perspective = sourceParticipants(source, archive.characters).find((item) => item.id === replayPerspectiveId) || { id: 'witness', name: 'Unspecified witness', role: '' };
    const known = archive.characterById.get(perspective.id) || archive.characters.find((character) => character.name?.toLowerCase() === perspective.name?.toLowerCase()) || { id: `perspective_${source.id}_${perspective.id}`, name: perspective.name };
    els.replayDialog.close(); createChat(known, { sourceId: source.id, sourceType: source._sourceType, sourceName: source.name, perspectiveId: perspective.id, perspectiveName: perspective.name });
  });
  els.compose.addEventListener('submit', (event) => { event.preventDefault(); sendMessage(); });
  els.input.addEventListener('input', autoSize); els.input.addEventListener('keydown', (event) => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); els.compose.requestSubmit(); } });
  $('#remember-button').addEventListener('click', () => openMemoryDialog(els.input.value)); $('#add-memory-button').addEventListener('click', () => openMemoryDialog());
  els.memoryForm.addEventListener('submit', (event) => { event.preventDefault(); if (addMemory(els.memoryText.value)) { els.memoryDialog.close(); toast('Memory saved for this perspective.'); } });
  document.querySelectorAll('[data-open-lore]').forEach((button) => button.addEventListener('click', () => { renderLore(); els.loreDialog.showModal(); }));
  document.querySelectorAll('[data-close-dialog]').forEach((button) => button.addEventListener('click', () => button.closest('dialog').close()));
  els.loreForm.addEventListener('submit', (event) => { event.preventDefault(); const chat = activeChat(); const tags = els.loreTags.value.split(',').map((tag) => tag.trim()).filter(Boolean).slice(0, 24); state.loreNotes.unshift({ id: makeId('lore'), title: els.loreTitle.value.trim(), body: els.loreBody.value.trim(), tags, sourceIds: [chat?.replay?.sourceId, personaFor(chat)?.id].filter(Boolean), createdAt: nowIso(), updatedAt: nowIso() }); persist(); els.loreForm.reset(); renderAll(); toast('Lore note saved locally.'); });
  $('#export-button').addEventListener('click', exportArchive); $('#top-export-button').addEventListener('click', exportArchive); $('#export-lore-button').addEventListener('click', exportArchive);
  $('#import-button').addEventListener('click', () => els.importFile.click()); els.importFile.addEventListener('change', () => { const [file] = els.importFile.files; if (file) importArchive(file); els.importFile.value = ''; });
}

async function initialise() {
  wireEvents(); renderAll();
  archive = await loadArchiveData();
  if (!archive.characters.length) toast('Archive data could not be loaded. Start this page with “python3 start.py” rather than file://.', true);
  ensureStarterConversation();
  renderAll({ scroll: true });
}

initialise();
