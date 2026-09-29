/* Waluipedia Chatrooms — local-only rooms over canonical, read-only archive data. */
(function () {
  'use strict';

  var STORE = 'waluipedia-chatrooms-v1';
  var VERSION = 1;
  var ROOT = 'Reputation-Matrix2/';
  var $ = function (id) { return document.getElementById(id); };
  var E = {
    app: document.querySelector('.chat-app'), rooms: $('room-list'), roomSearch: $('room-search'),
    title: $('thread-title'), subtitle: $('thread-subtitle'), sourceLabel: $('thread-source-label'),
    sourceStrip: $('source-strip'), sourceText: $('source-strip-text'), sourceLink: $('source-strip-link'),
    messages: $('message-list'), scroller: $('thread-scroller'), empty: $('thread-empty'), composer: $('composer-form'),
    input: $('composer-input'), replayStage: $('replay-stage'), replayTitle: $('replay-title'), replayKicker: $('replay-kicker'),
    replayBeat: $('replay-beat'), replayAttribution: $('replay-attribution'), replayProgress: $('replay-progress'),
    replayPerspective: $('replay-perspective'), hero: $('room-hero-avatar'), inspectorTitle: $('inspector-room-title'),
    inspectorDescription: $('inspector-room-description'), cast: $('cast-list'), memories: $('memory-list'),
    sources: $('archive-source-list'), memoryCount: $('memory-count'), toast: $('toast'),
    roomDialog: $('room-dialog'), roomForm: $('room-form'), roomName: $('room-name-input'), roomSource: $('room-source-select'),
    roomPicker: $('room-cast-picker'), replayDialog: $('replay-dialog'), replaySearch: $('replay-search'), replayLibrary: $('replay-library'),
    memoryDialog: $('memory-dialog'), memoryForm: $('memory-form'), memoryText: $('memory-text-input'), memoryPicker: $('memory-cast-picker'),
    importInput: $('import-input')
  };

  var C = { people: new Map(), records: [], recordMap: new Map(), ready: false };
  var S = loadState();
  var typing = null;
  var toastTimer = 0;
  var dialogMode = 'new';
  var memoryDraft = '';

  function uid(prefix) { return prefix + '-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7); }
  function now() { return new Date().toISOString(); }
  function plain(value) { return String(value == null ? '' : value).replace(/\s+/g, ' ').trim(); }
  function firstSentence(value, max) {
    var text = plain(value); var match = text.match(/^(.{1,1000}?[.!?])(?:\s|$)/);
    text = match ? match[1] : text;
    return text.length > (max || 260) ? text.slice(0, (max || 260) - 1).trim() + '…' : text;
  }
  function labelDate(value) {
    if (!value) return 'Undated';
    if (typeof value === 'object') return 'Filed date';
    return plain(value).slice(0, 72);
  }
  function personKey(recordId, name) { return 'replay:' + recordId + ':' + plain(name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }
  function makeDefaultRoom() {
    var source = 'feyward_woodfellow_vs_the_treant';
    return {
      id: uid('room'), title: 'Cutting Lane Replay', sourceId: source, sourceKind: 'battle',
      participantIds: [personKey(source, 'Woodfellow'), personKey(source, 'Pib'), personKey(source, 'the Treant')],
      replay: { sourceId: source, beatIndex: 0, perspectiveId: personKey(source, 'Woodfellow') },
      messages: [{ id: uid('message'), type: 'system', body: 'The cutting lane is ready for replay. Choose a filed role, move through the ledger, and pin only the context you want to carry into another room.', createdAt: now() }],
      createdAt: now(), updatedAt: now(), turn: 0
    };
  }
  function defaultState() { var room = makeDefaultRoom(); return { version: VERSION, activeRoomId: room.id, rooms: [room], memories: [] }; }
  function safeMessages(items) {
    if (!Array.isArray(items)) return [];
    return items.slice(-1000).map(function (m) {
      return { id: plain(m.id) || uid('message'), type: ['user', 'archive', 'system'].indexOf(m.type) >= 0 ? m.type : 'system', speakerId: plain(m.speakerId), body: String(m.body || '').slice(0, 3000), source: String(m.source || '').slice(0, 350), createdAt: m.createdAt || now() };
    }).filter(function (m) { return m.body; });
  }
  function sanitiseState(raw) {
    if (!raw || typeof raw !== 'object' || !Array.isArray(raw.rooms)) return defaultState();
    var rooms = raw.rooms.slice(0, 100).map(function (r) {
      return { id: plain(r.id) || uid('room'), title: plain(r.title).slice(0, 80) || 'Untitled room', sourceId: plain(r.sourceId), sourceKind: plain(r.sourceKind), participantIds: Array.isArray(r.participantIds) ? r.participantIds.map(plain).filter(Boolean).slice(0, 30) : [], replay: r.replay && typeof r.replay === 'object' ? { sourceId: plain(r.replay.sourceId), beatIndex: Math.max(0, Number(r.replay.beatIndex) || 0), perspectiveId: plain(r.replay.perspectiveId) } : null, messages: safeMessages(r.messages), createdAt: r.createdAt || now(), updatedAt: r.updatedAt || now(), turn: Number(r.turn) || 0 };
    });
    if (!rooms.length) rooms = [makeDefaultRoom()];
    var roomIds = new Set(rooms.map(function (r) { return r.id; }));
    var memories = Array.isArray(raw.memories) ? raw.memories.slice(-500).map(function (m) {
      return { id: plain(m.id) || uid('memory'), text: String(m.text || '').slice(0, 700), characterIds: Array.isArray(m.characterIds) ? m.characterIds.map(plain).filter(Boolean).slice(0, 30) : [], roomId: plain(m.roomId), createdAt: m.createdAt || now() };
    }).filter(function (m) { return m.text; }) : [];
    return { version: VERSION, activeRoomId: roomIds.has(raw.activeRoomId) ? raw.activeRoomId : rooms[0].id, rooms: rooms, memories: memories };
  }
  function loadState() { try { return sanitiseState(JSON.parse(localStorage.getItem(STORE))); } catch (err) { return defaultState(); } }
  function save() { S.version = VERSION; localStorage.setItem(STORE, JSON.stringify(S)); }
  function activeRoom() { return S.rooms.find(function (room) { return room.id === S.activeRoomId; }) || S.rooms[0]; }
  function findRoom(id) { return S.rooms.find(function (room) { return room.id === id; }); }
  function notify(text) { clearTimeout(toastTimer); E.toast.textContent = text; E.toast.classList.add('is-visible'); toastTimer = setTimeout(function () { E.toast.classList.remove('is-visible'); }, 2700); }

  function fallbackCatalog() {
    return {
      characters: [
        { id: 'waluigi', name: 'Waluigi', title: 'The Great and Underappreciated', summary: 'Waluigi is the archive’s opinionated field archivist and the author of the encyclopedia.', image: 'portraits/waluigi.jpg' },
        { id: 'hjumpik', name: 'Hjumpik Deldkur', title: 'The Anvil of Disaster Inc.', summary: 'Hjumpik is the moral anchor of a party that desperately wants to sink.', image: 'portraits/hjumpik.jpg' },
        { id: 'toad_lee', name: 'Toad Lee', title: 'The Defenestrated Diplomat', summary: 'Toad Lee reads the lore, manages the crisis, and holds the line when required.', image: 'portraits/toad_lee.png' },
        { id: 'bowser', name: 'Bowser', title: 'The King Who Held the Door', summary: 'Bowser is the Koopa king and a reliable blunt-force sovereign.', image: 'portraits/bowser.jpg' }
      ],
      records: [{ id: 'feyward_woodfellow_vs_the_treant', name: 'Woodfellow vs. the Treant', date: '1 Aethel, 922 BF', kind: 'battle', summary: 'The cutting expedition fought the awakened wood in the Feyward lane.', result: 'The treant fell and the lane was cleared.', keyMoments: [{ time: 'late', who: 'Woodfellow', act: 'The strike through the split', result: 'One book driven through the bark; the champion staggers.' }], belligerents: { attackers: { name: 'The Cutting Expedition', combatants: [{ name: 'Woodfellow', role: 'heavy ordnance — hurls bound tomes like siege shot' }, { name: 'Pib', role: 'goblin staff auxiliary — keeper of the tally' }] }, defenders: { name: 'The Awakened Wood', combatants: [{ name: 'the Treant', role: 'the wood’s champion' }] } } }]
    };
  }
  function fetchJson(path) { return fetch(path, { cache: 'no-store' }).then(function (res) { if (!res.ok) throw new Error(String(res.status)); return res.json(); }); }
  function prepareCatalog(characters, eventRows, battleRows, majorRows) {
    C.people.clear(); C.recordMap.clear();
    (characters || []).forEach(function (p) { if (p && p.id && p.name) C.people.set(p.id, Object.assign({ kind: 'character' }, p)); });
    C.records = [];
    [[eventRows, 'event'], [battleRows, 'battle'], [majorRows, 'battle']].forEach(function (pair) {
      (pair[0] || []).forEach(function (record) {
        if (!record || !record.id) return;
        var decorated = Object.assign({ kind: pair[1] }, record);
        if (C.recordMap.has(decorated.id)) return;
        C.records.push(decorated); C.recordMap.set(decorated.id, decorated);
        addRecordPeople(decorated);
      });
    });
    C.records.reverse();
    C.ready = true;
  }
  function addRecordPeople(record) {
    var combatants = [];
    if (record.belligerents) {
      ['attackers', 'defenders'].forEach(function (side) {
        var team = record.belligerents[side];
        if (team && Array.isArray(team.combatants)) combatants = combatants.concat(team.combatants);
      });
    }
    if (!combatants.length && Array.isArray(record.participants)) combatants = record.participants;
    combatants.forEach(function (entry) {
      if (!entry || !entry.name) return;
      var id = entry.id && C.people.has(entry.id) ? entry.id : personKey(record.id, entry.name);
      if (!C.people.has(id)) C.people.set(id, { id: id, name: entry.name, title: entry.role || 'Filed participant', summary: entry.role || '', sourceRecordId: record.id, kind: 'replay' });
    });
  }
  function recordFor(id) { return C.recordMap.get(id); }
  function profileFor(id) { return C.people.get(id); }
  function recordCast(record) {
    if (!record) return [];
    var ids = [];
    function add(id) { if (id && C.people.has(id) && ids.indexOf(id) < 0) ids.push(id); }
    if (record.belligerents) ['attackers', 'defenders'].forEach(function (side) {
      var list = record.belligerents[side] && record.belligerents[side].combatants;
      if (Array.isArray(list)) list.forEach(function (p) { add(p.id && C.people.has(p.id) ? p.id : personKey(record.id, p.name)); });
    });
    if (Array.isArray(record.participants)) record.participants.forEach(function (p) { add(p.id && C.people.has(p.id) ? p.id : personKey(record.id, p.name)); });
    (record.relatedArticles || []).forEach(add);
    return ids.slice(0, 18);
  }
  function roomPeople(room) {
    var ids = (room.participantIds || []).filter(function (id) { return C.people.has(id); });
    if (!ids.length) ids = recordCast(recordFor(room.sourceId)).slice(0, 4);
    if (!ids.length) ids = ['waluigi', 'hjumpik', 'toad_lee'].filter(function (id) { return C.people.has(id); });
    return ids.map(profileFor).filter(Boolean);
  }
  function imageUrl(profile) {
    if (!profile || !profile.image) return '';
    return profile.image.indexOf('Reputation-Matrix2/') === 0 ? profile.image : ROOT + profile.image;
  }
  function avatar(profile, className) {
    var node = document.createElement('span'); node.className = className || 'avatar';
    var name = profile && profile.name || '?'; node.textContent = name.charAt(0).toUpperCase();
    var src = imageUrl(profile);
    if (src) { var image = new Image(); image.alt = ''; image.src = src; image.onerror = function () { image.remove(); }; node.textContent = ''; node.appendChild(image); }
    return node;
  }
  function sourceTitle(record) { return record && (record.name || record.title) || 'Unlinked local room'; }
  function sourceHref(record) { return record ? 'index.html#/' + (record.kind === 'battle' ? 'battle/' : 'article/') + encodeURIComponent(record.id) : 'index.html#/home'; }
  function ownedText(record) { return firstSentence(record && (record.summary || record.result || record.aftermath) || 'A local room without an attached filing.', 185); }

  function renderAll() { renderRooms(); renderThread(); renderInspector(); E.memoryCount.textContent = String(S.memories.length); }
  function renderRooms() {
    var query = E.roomSearch.value.toLowerCase(); E.rooms.replaceChildren();
    S.rooms.filter(function (room) { return !query || room.title.toLowerCase().indexOf(query) >= 0; }).forEach(function (room) {
      var first = roomPeople(room)[0]; var button = document.createElement('button'); button.type = 'button'; button.className = 'room-card' + (room.id === S.activeRoomId ? ' is-active' : ''); button.dataset.roomId = room.id;
      button.appendChild(avatar(first, 'room-avatar'));
      var copy = document.createElement('span'); copy.className = 'room-card-copy';
      var title = document.createElement('span'); title.className = 'room-card-title'; title.textContent = room.title;
      var meta = document.createElement('span'); meta.className = 'room-card-meta'; meta.textContent = sourceTitle(recordFor(room.sourceId));
      copy.append(title, meta); button.appendChild(copy); E.rooms.appendChild(button);
    });
  }
  function messageName(message) { if (message.type === 'user') return 'You'; if (message.type === 'system') return 'Archive desk'; return (profileFor(message.speakerId) || {}).name || 'Filed account'; }
  function renderMessage(message) {
    var li = document.createElement('li'); li.className = 'message ' + message.type;
    if (message.type === 'archive') li.appendChild(avatar(profileFor(message.speakerId), 'avatar message-avatar'));
    var content = document.createElement('div'); content.className = 'message-content';
    var meta = document.createElement('p'); meta.className = 'message-meta';
    var strong = document.createElement('strong'); strong.textContent = messageName(message); meta.appendChild(strong);
    var time = document.createElement('span'); time.textContent = formatTime(message.createdAt); meta.appendChild(time);
    var bubble = document.createElement('div'); bubble.className = 'message-bubble'; bubble.textContent = message.body;
    content.append(meta, bubble);
    if (message.source) { var source = document.createElement('p'); source.className = 'message-source'; source.textContent = 'Source: ' + message.source; content.appendChild(source); }
    if (message.type !== 'system') { var actions = document.createElement('div'); actions.className = 'message-actions'; var pin = document.createElement('button'); pin.type = 'button'; pin.className = 'pin-button'; pin.dataset.pinMessage = message.id; pin.textContent = '⌁ Save as memory'; actions.appendChild(pin); content.appendChild(actions); }
    li.appendChild(content); return li;
  }
  function formatTime(value) { try { return new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit' }).format(new Date(value)); } catch (err) { return ''; } }
  function renderTyping(room) {
    if (!typing || typing.roomId !== room.id) return null;
    var p = profileFor(typing.speakerId); var li = document.createElement('li'); li.className = 'message archive typing'; li.appendChild(avatar(p, 'avatar message-avatar'));
    var content = document.createElement('div'); content.className = 'message-content'; var meta = document.createElement('p'); meta.className = 'message-meta'; var name = document.createElement('strong'); name.textContent = p ? p.name : 'Filed account'; meta.appendChild(name);
    var bubble = document.createElement('div'); bubble.className = 'message-bubble'; bubble.innerHTML = '<i></i><i></i><i></i>'; content.append(meta, bubble); li.appendChild(content); return li;
  }
  function renderThread() {
    var room = activeRoom(); if (!room) return; var record = recordFor(room.sourceId);
    E.title.textContent = room.title; E.subtitle.textContent = record ? labelDate(record.date) : 'Local room · no filing attached'; E.sourceLabel.textContent = record ? record.kind.toUpperCase() + ' ROOM' : 'LOCAL ROOM';
    E.sourceStrip.hidden = !record; if (record) { E.sourceText.textContent = 'Anchored to ' + sourceTitle(record) + ' — ' + ownedText(record); E.sourceLink.href = sourceHref(record); }
    E.messages.replaceChildren(); (room.messages || []).forEach(function (message) { E.messages.appendChild(renderMessage(message)); }); var typingNode = renderTyping(room); if (typingNode) E.messages.appendChild(typingNode);
    E.empty.hidden = room.messages && room.messages.length > 0; renderReplay(room);
    requestAnimationFrame(function () { if (typing || room.messages.length) E.scroller.scrollTop = E.scroller.scrollHeight; });
  }
  function replayBeats(record) {
    if (!record) return [];
    if (Array.isArray(record.keyMoments) && record.keyMoments.length) return record.keyMoments.map(function (beat) { return { label: [beat.time, beat.who].filter(Boolean).join(' · '), text: [beat.act, beat.result].filter(Boolean).join(' — ') }; }).filter(function (beat) { return beat.text; });
    return [record.summary, record.result, record.aftermath, record.waluigiAssessment].filter(Boolean).map(function (text, index) { return { label: index === 0 ? 'Filed summary' : 'Filed consequence', text: firstSentence(text, 520) }; });
  }
  function renderReplay(room) {
    var replay = room.replay; var record = replay && recordFor(replay.sourceId);
    E.replayStage.hidden = !record; if (!record) return;
    var beats = replayBeats(record); if (!beats.length) { E.replayStage.hidden = true; return; }
    replay.beatIndex = Math.max(0, Math.min(beats.length - 1, Number(replay.beatIndex) || 0));
    E.replayTitle.textContent = sourceTitle(record); E.replayKicker.textContent = record.kind === 'battle' ? 'Filed battle replay · source beats only' : 'Filed event replay · source beats only';
    E.replayBeat.textContent = beats[replay.beatIndex].text; E.replayProgress.textContent = (replay.beatIndex + 1) + ' / ' + beats.length;
    var ids = []; roomPeople(room).forEach(function (p) { if (ids.indexOf(p.id) < 0) ids.push(p.id); }); recordCast(record).forEach(function (id) { if (ids.indexOf(id) < 0) ids.push(id); });
    if (!ids.length) ids = ['waluigi'].filter(function (id) { return C.people.has(id); }); if (ids.indexOf(replay.perspectiveId) < 0) replay.perspectiveId = ids[0] || '';
    E.replayPerspective.replaceChildren(); ids.forEach(function (id) { var p = profileFor(id); var opt = document.createElement('option'); opt.value = id; opt.selected = id === replay.perspectiveId; opt.textContent = p.name + (p.title ? ' — ' + p.title : ''); E.replayPerspective.appendChild(opt); });
    var view = profileFor(replay.perspectiveId); E.replayAttribution.textContent = (beats[replay.beatIndex].label || 'Filed beat') + ' · viewed through ' + (view ? view.name : 'the ledger') + '. Perspective changes focus, never the facts.';
  }
  function renderInspector() {
    var room = activeRoom(); if (!room) return; var record = recordFor(room.sourceId); var cast = roomPeople(room); var first = cast[0];
    E.hero.replaceChildren(); E.hero.appendChild(avatar(first, 'hero-avatar')); E.inspectorTitle.textContent = room.title; E.inspectorDescription.textContent = record ? ownedText(record) : 'A reader-local chat with no attached archive source.';
    E.cast.replaceChildren(); if (!cast.length) E.cast.appendChild(emptyNote('Add archive accounts to give the room a cast.')); cast.forEach(function (p) { var row = document.createElement('div'); row.className = 'cast-row'; row.appendChild(avatar(p)); var copy = document.createElement('div'); copy.className = 'cast-row-copy'; var n = document.createElement('strong'); n.textContent = p.name; var d = document.createElement('small'); d.textContent = p.title || p.summary || 'Archive account'; copy.append(n, d); row.appendChild(copy); E.cast.appendChild(row); });
    var memories = relevantMemories(room); E.memories.replaceChildren(); if (!memories.length) E.memories.appendChild(emptyNote('No shared memory yet. Pin a message or add a note.')); memories.slice(0, 8).forEach(function (memory) { var card = document.createElement('article'); card.className = 'memory-card'; var p = document.createElement('p'); p.textContent = memory.text; var footer = document.createElement('footer'); footer.textContent = memory.characterIds.map(function (id) { return (profileFor(id) || {}).name; }).filter(Boolean).join(' · ') || 'Room note'; var remove = document.createElement('button'); remove.type = 'button'; remove.className = 'remove-memory'; remove.dataset.removeMemory = memory.id; remove.title = 'Forget this memory'; remove.textContent = '×'; footer.appendChild(remove); card.append(p, footer); E.memories.appendChild(card); });
    E.sources.replaceChildren(); if (!record) { E.sources.appendChild(emptyNote('No archive record is linked.')); } else { var link = document.createElement('a'); link.className = 'archive-source-card'; link.href = sourceHref(record); var title = document.createElement('strong'); title.textContent = sourceTitle(record); var info = document.createElement('small'); info.textContent = (record.kind === 'battle' ? 'Battle filing' : 'Event filing') + ' · ' + labelDate(record.date); link.append(title, info); E.sources.appendChild(link); }
  }
  function emptyNote(text) { var p = document.createElement('p'); p.className = 'empty-note'; p.textContent = text; return p; }
  function relevantMemories(room) { var ids = roomPeople(room).map(function (p) { return p.id; }); return S.memories.filter(function (memory) { return !memory.characterIds.length || memory.characterIds.some(function (id) { return ids.indexOf(id) >= 0; }); }).sort(function (a, b) { return b.createdAt.localeCompare(a.createdAt); }); }

  function postMessage(room, message) { room.messages.push(Object.assign({ id: uid('message'), createdAt: now() }, message)); room.messages = room.messages.slice(-1000); room.updatedAt = now(); save(); }
  function chooseSpeaker(room) { var cast = roomPeople(room); if (!cast.length) return null; var p = cast[(room.turn || 0) % cast.length]; room.turn = (room.turn || 0) + 1; return p; }
  function replyFor(room, profile, userText) {
    var record = recordFor(room.sourceId); var memory = relevantMemories(room)[0]; var beatList = replayBeats(record); var beat = beatList.length ? beatList[(room.messages.length + (room.turn || 0)) % beatList.length] : null;
    var lead = profile.kind === 'replay' ? profile.name + ' is filed in this record as ' + (profile.title || 'a participant') + '.' : firstSentence(profile.summary || (profile.name + ' has a filed profile in the archive.'), 250);
    var sourceFact = beat ? 'The relevant filed beat is: ' + beat.text : record ? 'This room is anchored to: ' + firstSentence(record.summary || record.result, 260) : 'Attach an event or battle to ground the next reply.';
    var note = memory ? ' A cross-chat memory linked to this cast is preserved: “' + firstSentence(memory.text, 130) + '”' : '';
    if (/memory|remember|preserve/i.test(userText)) note = ' Use “Save as memory” on the message or the Memory button below to carry a reader-local note into every room with this account.';
    return lead + '\n\n' + sourceFact + note;
  }
  function sendMessage() {
    var text = E.input.value.trim(); if (!text) return;
    var room = activeRoom(); postMessage(room, { type: 'user', body: text }); E.input.value = ''; resizeComposer(); typing = { roomId: room.id, speakerId: (chooseSpeaker(room) || {}).id }; renderAll();
    var roomId = room.id; window.setTimeout(function () {
      var target = findRoom(roomId); var speaker = typing && typing.roomId === roomId ? profileFor(typing.speakerId) : chooseSpeaker(target);
      if (target && speaker) postMessage(target, { type: 'archive', speakerId: speaker.id, body: replyFor(target, speaker, text), source: sourceTitle(recordFor(target.sourceId)) + ' · source-grounded archive response' });
      if (typing && typing.roomId === roomId) typing = null; renderAll();
    }, 420);
  }
  function resizeComposer() { E.input.style.height = 'auto'; E.input.style.height = Math.min(E.input.scrollHeight, 140) + 'px'; }

  function fillSourceSelect() {
    E.roomSource.replaceChildren(); C.records.forEach(function (record) { var option = document.createElement('option'); option.value = record.id; option.textContent = (record.kind === 'battle' ? 'Battle · ' : 'Event · ') + sourceTitle(record); E.roomSource.appendChild(option); });
  }
  function fillPicker(host, ids, selected) {
    host.replaceChildren(); ids.forEach(function (id) { var profile = profileFor(id); if (!profile) return; var label = document.createElement('label'); label.className = 'account-choice'; var check = document.createElement('input'); check.type = 'checkbox'; check.value = id; check.checked = selected.indexOf(id) >= 0; var name = document.createElement('span'); name.textContent = profile.name; label.append(check, name); host.appendChild(label); });
  }
  function picked(host) { return Array.prototype.slice.call(host.querySelectorAll('input:checked')).map(function (box) { return box.value; }); }
  function openRoomDialog(mode) {
    dialogMode = mode || 'new'; var room = activeRoom(); var record = recordFor(room.sourceId) || C.records[0];
    $('room-dialog-title').textContent = dialogMode === 'cast' ? 'Edit the cast' : 'Set up a room'; E.roomName.parentElement.hidden = dialogMode === 'cast'; E.roomName.required = dialogMode !== 'cast';
    E.roomName.value = dialogMode === 'new-related' ? room.title + ' — follow-up' : ''; E.roomSource.value = record ? record.id : '';
    fillRoomPicker(dialogMode === 'cast' ? room.participantIds : recordCast(record).slice(0, 4)); E.roomDialog.showModal(); if (dialogMode !== 'cast') E.roomName.focus();
  }
  function fillRoomPicker(selected) { var record = recordFor(E.roomSource.value); fillPicker(E.roomPicker, recordCast(record), selected || []); }
  function submitRoom() {
    var selected = picked(E.roomPicker); var sourceId = E.roomSource.value; var record = recordFor(sourceId); if (!selected.length) { notify('Pick at least one filed account for the room.'); return; }
    if (dialogMode === 'cast') { var target = activeRoom(); target.participantIds = selected; target.sourceId = sourceId; target.sourceKind = record.kind; target.updatedAt = now(); postMessage(target, { type: 'system', body: 'The room cast and source were updated. The prior transcript remains local to this room.' }); }
    else { var name = E.roomName.value.trim(); if (!name) { E.roomName.focus(); return; } var room = { id: uid('room'), title: name.slice(0, 80), sourceId: sourceId, sourceKind: record.kind, participantIds: selected, replay: null, messages: [{ id: uid('message'), type: 'system', body: 'New reader-local room created from ' + sourceTitle(record) + '. Archive data is read-only; this transcript is yours.', createdAt: now() }], createdAt: now(), updatedAt: now(), turn: 0 }; S.rooms.unshift(room); S.activeRoomId = room.id; }
    save(); E.roomDialog.close(); renderAll(); notify(dialogMode === 'cast' ? 'Cast updated.' : 'Room created.');
  }

  function renderReplayLibrary() {
    var query = E.replaySearch.value.toLowerCase(); E.replayLibrary.replaceChildren(); var rows = C.records.filter(function (record) { return !query || (sourceTitle(record) + ' ' + record.id + ' ' + (record.summary || '')).toLowerCase().indexOf(query) >= 0; });
    rows.slice(0, 220).forEach(function (record) { var row = document.createElement('div'); row.className = 'replay-library-row'; var badge = document.createElement('span'); badge.className = 'record-type ' + record.kind; badge.textContent = record.kind.toUpperCase(); var copy = document.createElement('div'); copy.className = 'record-copy'; var title = document.createElement('strong'); title.textContent = sourceTitle(record); var details = document.createElement('small'); details.textContent = labelDate(record.date) + ' · ' + ownedText(record); copy.append(title, details); var open = document.createElement('button'); open.type = 'button'; open.className = 'soft-button'; open.dataset.replayId = record.id; open.textContent = 'Replay'; row.append(badge, copy, open); E.replayLibrary.appendChild(row); });
    if (!rows.length) E.replayLibrary.appendChild(emptyNote('No filed event or battle matches that search.'));
  }
  function launchReplay(id) {
    var record = recordFor(id); if (!record) return; var room = activeRoom(); room.sourceId = record.id; room.sourceKind = record.kind; if (!room.participantIds.length) room.participantIds = recordCast(record).slice(0, 5); var view = roomPeople(room)[0] || profileFor(recordCast(record)[0]); room.replay = { sourceId: record.id, beatIndex: 0, perspectiveId: view ? view.id : '' }; postMessage(room, { type: 'system', body: 'Replay deck loaded: ' + sourceTitle(record) + '. Move through filed beats; switch the view to focus a different role without changing the record.' }); E.replayDialog.close(); save(); renderAll(); notify('Replay loaded.'); }
  function stepReplay(change) { var room = activeRoom(); if (!room.replay) return; var beats = replayBeats(recordFor(room.replay.sourceId)); room.replay.beatIndex = Math.max(0, Math.min(beats.length - 1, room.replay.beatIndex + change)); save(); renderAll(); }

  function openMemoryDialog(prefill) { memoryDraft = prefill || ''; E.memoryText.value = memoryDraft; var room = activeRoom(); fillPicker(E.memoryPicker, roomPeople(room).map(function (p) { return p.id; }), roomPeople(room).map(function (p) { return p.id; })); E.memoryDialog.showModal(); E.memoryText.focus(); }
  function submitMemory() { var text = E.memoryText.value.trim(); if (!text) { E.memoryText.focus(); return; } var selected = picked(E.memoryPicker); S.memories.unshift({ id: uid('memory'), text: text, characterIds: selected, roomId: activeRoom().id, createdAt: now() }); save(); E.memoryDialog.close(); renderAll(); notify('Shared memory saved locally.'); }
  function pinMessage(id) { var message = activeRoom().messages.find(function (m) { return m.id === id; }); if (message) openMemoryDialog(message.body); }

  function download(filename, payload) { var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }); var url = URL.createObjectURL(blob); var link = document.createElement('a'); link.href = url; link.download = filename; document.body.appendChild(link); link.click(); link.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 0); }
  function exportAll() { download('waluipedia-chatrooms-' + new Date().toISOString().slice(0, 10) + '.json', { schema: 'waluipedia-chatrooms-export', version: VERSION, exportedAt: now(), payload: S }); notify('Chatrooms exported.'); }
  function exportRoom() { var room = activeRoom(); var related = S.memories.filter(function (m) { return m.roomId === room.id || m.characterIds.some(function (id) { return room.participantIds.indexOf(id) >= 0; }); }); download('waluipedia-chatroom-' + room.id + '.json', { schema: 'waluipedia-chatrooms-export', version: VERSION, exportedAt: now(), payload: { version: VERSION, activeRoomId: room.id, rooms: [room], memories: related } }); notify('Current room exported.'); }
  function importFile(file) { if (!file) return; var reader = new FileReader(); reader.onload = function () { try { var parsed = JSON.parse(reader.result); if (parsed.schema !== 'waluipedia-chatrooms-export' || !parsed.payload) throw new Error('not an export'); var imported = sanitiseState(parsed.payload); if (!confirm('Replace this browser’s current chatrooms with the imported archive? Export first if you need a backup.')) return; S = imported; typing = null; save(); renderAll(); notify('Chatrooms imported.'); } catch (err) { notify('That file is not a valid Chatrooms export.'); } }; reader.readAsText(file); }

  function wire() {
    E.composer.addEventListener('submit', function (event) { event.preventDefault(); sendMessage(); });
    E.input.addEventListener('input', resizeComposer); E.input.addEventListener('keydown', function (event) { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); sendMessage(); } });
    E.roomSearch.addEventListener('input', renderRooms); E.rooms.addEventListener('click', function (event) { var card = event.target.closest('[data-room-id]'); if (!card) return; S.activeRoomId = card.dataset.roomId; save(); renderAll(); E.app.classList.remove('sidebar-open'); });
    $('new-room-button').addEventListener('click', function () { openRoomDialog('new'); }); $('new-chat-from-room-button').addEventListener('click', function () { openRoomDialog('new-related'); }); $('edit-cast-button').addEventListener('click', function () { openRoomDialog('cast'); }); $('change-source-button').addEventListener('click', function () { openRoomDialog('cast'); });
    E.roomSource.addEventListener('change', function () { fillRoomPicker(recordCast(recordFor(E.roomSource.value)).slice(0, 5)); }); E.roomForm.addEventListener('submit', function (event) { event.preventDefault(); submitRoom(); });
    $('rename-room-button').addEventListener('click', function () { var room = activeRoom(); var title = prompt('Name this room', room.title); if (title && title.trim()) { room.title = title.trim().slice(0, 80); room.updatedAt = now(); save(); renderAll(); } });
    $('delete-room-button').addEventListener('click', function () { var room = activeRoom(); if (!confirm('Delete “' + room.title + '”? This only removes the local room transcript.')) return; S.rooms = S.rooms.filter(function (r) { return r.id !== room.id; }); if (!S.rooms.length) S.rooms = [makeDefaultRoom()]; S.activeRoomId = S.rooms[0].id; typing = null; save(); renderAll(); notify('Room deleted.'); });
    $('export-all-button').addEventListener('click', exportAll); $('export-room-button').addEventListener('click', exportRoom); $('mobile-menu-button').addEventListener('click', function () { E.app.classList.toggle('sidebar-open'); });
    $('composer-memory-button').addEventListener('click', function () { openMemoryDialog(E.input.value.trim()); }); $('new-memory-button').addEventListener('click', function () { openMemoryDialog(''); }); E.memoryForm.addEventListener('submit', function (event) { event.preventDefault(); submitMemory(); });
    E.messages.addEventListener('click', function (event) { var button = event.target.closest('[data-pin-message]'); if (button) pinMessage(button.dataset.pinMessage); }); E.memories.addEventListener('click', function (event) { var button = event.target.closest('[data-remove-memory]'); if (!button) return; S.memories = S.memories.filter(function (m) { return m.id !== button.dataset.removeMemory; }); save(); renderAll(); notify('Memory removed.'); });
    $('replay-back-button').addEventListener('click', function () { stepReplay(-1); }); $('replay-next-button').addEventListener('click', function () { stepReplay(1); }); $('close-replay-button').addEventListener('click', function () { activeRoom().replay = null; save(); renderAll(); }); E.replayPerspective.addEventListener('change', function () { activeRoom().replay.perspectiveId = E.replayPerspective.value; save(); renderAll(); });
    E.replaySearch.addEventListener('input', renderReplayLibrary); E.replayLibrary.addEventListener('click', function (event) { var button = event.target.closest('[data-replay-id]'); if (button) launchReplay(button.dataset.replayId); }); E.importInput.addEventListener('change', function () { importFile(E.importInput.files[0]); E.importInput.value = ''; });
    document.addEventListener('click', function (event) { var action = event.target.closest('[data-action]'); if (action) { if (action.dataset.action === 'open-replay') { renderReplayLibrary(); E.replayDialog.showModal(); } if (action.dataset.action === 'focus-memories') document.querySelector('.memories-section').scrollIntoView({ behavior: 'smooth' }); if (action.dataset.action === 'focus-chat') E.input.focus(); if (action.dataset.action === 'open-import') E.importInput.click(); } var close = event.target.closest('[data-close-dialog]'); if (close) $(close.dataset.closeDialog).close(); var promptButton = event.target.closest('[data-prompt]'); if (promptButton) { E.input.value = promptButton.dataset.prompt; resizeComposer(); E.input.focus(); } });
  }
  function boot() {
    var fallback = fallbackCatalog();
    Promise.all([fetchJson(ROOT + 'data/characters.json'), fetchJson(ROOT + 'data/events.json'), fetchJson(ROOT + 'data/battles.json'), fetchJson(ROOT + 'data/majorBattles.json')]).then(function (rows) { prepareCatalog(rows[0], rows[1], rows[2], rows[3]); }).catch(function () { prepareCatalog(fallback.characters, [], fallback.records, []); notify('Archive data could not load; using the small offline fallback.'); }).then(function () { fillSourceSelect(); wire(); renderAll(); resizeComposer(); });
  }
  boot();
}());
