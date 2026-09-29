/* Waluipedia chatroom — the page wiring.
 *
 * All of the logic this file leans on lives in chatroom-core.js (window.RP);
 * this file only turns that logic into a screen. It ships as
 * <script id="rp-app"> inside workflow/roleplay.html and as an external file
 * next to chatroom.html — the build (tools/build-chatroom.py) makes both.
 *
 * Two runtimes, one page:
 *   server mode  served by workflow/server.py — /api/characters, /api/scenes,
 *                /api/roleplay, portraits under /rm/
 *   static mode  served by start.py from the repository root — the archive
 *                JSON is read directly and the model is reached at whatever
 *                endpoint the reader configures (⚙ in the dashboard header).
 */
(function () {
  'use strict';

  var CFG = window.CHATROOM_CONFIG || {};
  var RP = window.RP;
  var $ = function (id) { return document.getElementById(id); };

  var state = RP.loadState(window.localStorage);
  var cast = [];          // every playable character
  var castById = {};
  var scenes = [];        // filed sessions offered as scene starters
  var tab = 'discover';
  var query = '';
  var busy = false;
  var online = false;

  /* ---------------------------------------------------------------- *
   * storage and small helpers
   * ---------------------------------------------------------------- */

  function save() { RP.saveState(window.localStorage, state); }
  function room() { return (state.rooms || []).filter(function (r) { return r.id === state.active; })[0] || null; }
  function esc(v) { return RP.esc(v); }

  function toast(text) {
    var node = document.createElement('div');
    node.className = 'toast';
    node.textContent = text;
    document.body.appendChild(node);
    setTimeout(function () { node.remove(); }, 2600);
  }

  function imageUrl(path) {
    if (!path) return '';
    if (/^(https?:|data:|\/)/.test(path)) return path;
    return (CFG.staticRoot || '') + path;
  }

  function avatar(char, size) {
    var cls = 'av av-' + (size || 40);
    var url = imageUrl(char && char.image);
    if (url) return '<span class="' + cls + '"><img src="' + esc(url) + '" alt="" loading="lazy"></span>';
    return '<span class="' + cls + '" style="background:' + RP.tintFor(char) + '">' + esc(RP.initialsFor(char && char.name)) + '</span>';
  }

  function userAvatar(size) {
    var u = state.user || {};
    if (u.avatar) return '<span class="av av-' + (size || 32) + '"><img src="' + esc(u.avatar) + '" alt=""></span>';
    return '<span class="av av-' + (size || 32) + '" style="background:#5b5b66">' + esc(RP.initialsFor(u.name || 'You')) + '</span>';
  }

  /** Real numbers, not decoration: how much this reader has actually played
   *  with a character. Character cards show these instead of invented counts. */
  function interactions(charId) {
    return RP.turnCountFor(state.rooms || [], charId);
  }

  /* ---------------------------------------------------------------- *
   * data loading — API first, archive JSON as the fallback
   * ---------------------------------------------------------------- */

  function getJSON(url) {
    return fetch(url, { headers: { Accept: 'application/json' } }).then(function (r) {
      if (!r.ok) throw new Error(url + ' → ' + r.status);
      return r.json();
    });
  }

  function loadCast() {
    return getJSON(CFG.castUrl).then(function (data) {
      var list = Array.isArray(data) ? data : (data.characters || []);
      cast = list.map(RP.normChar).filter(function (c) { return c.name; });
      cast.sort(function (a, b) { return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1; });
      castById = {};
      cast.forEach(function (c) { castById[c.id] = c; });
    }).catch(function (error) {
      cast = []; console.warn('cast unavailable', error);
    });
  }

  /** Static mode has no /api/scenes, so the same shape is built here from
   *  events.json: newest filings first, their filed timeline as the script. */
  function scenesFromEvents(data) {
    var records = Array.isArray(data) ? data : (data.events || []);
    var byName = {};
    cast.forEach(function (c) { byName[c.name.toLowerCase()] = c; });
    return records.filter(function (r) { return r && r.name && r.image; }).slice(-12).reverse().map(function (r) {
      var entries = (r.timeline && r.timeline.entries) || [];
      var beats = [];
      if (entries.length) {
        var step = Math.max(1, Math.floor(entries.length / 12));
        for (var i = 0; i < entries.length && beats.length < 12; i += step) {
          var e = entries[i] || {};
          var beat = RP.clip(e.beat || e.detail, 140);
          if (beat) beats.push({ time: RP.clip(e.time, 60), beat: beat, detail: RP.clip(e.detail, 260) });
        }
      }
      if (!beats.length) {
        RP.clip(r.summary, 500).split('.').forEach(function (part, i) {
          if (part.trim().length > 24 && beats.length < 5) beats.push({ time: 'beat ' + (i + 1), beat: RP.clip(part, 140), detail: '' });
        });
      }
      var suggested = (r.participants || []).map(function (p) {
        return castById[String(p && p.id)] || byName[String((p && p.name) || '').toLowerCase()];
      }).filter(Boolean).slice(0, 5);
      return {
        id: String(r.id || r.name), name: RP.clip(r.name, 70), summary: RP.clip(r.summary, 220),
        era: RP.clip(r.era, 60), date: RP.clip(r.date, 40), location: RP.clip(r.location, 60),
        image: String(r.image || ''),   // imageUrl() adds the archive prefix
        suggestedCast: suggested, beats: beats,
      };
    });
  }

  function loadScenes() {
    return getJSON(CFG.scenesUrl).then(function (data) {
      if (CFG.mode === 'static') { scenes = scenesFromEvents(data); return; }
      scenes = (data.scenes || []).map(function (s) {
        s.suggestedCast = (s.suggestedCast || []).map(function (c) { return castById[c.id] || RP.normChar(c); });
        return s;
      });
    }).catch(function (error) { scenes = []; console.warn('scenes unavailable', error); });
  }

  /* ---------------------------------------------------------------- *
   * the model
   * ---------------------------------------------------------------- */

  function replyUrl() {
    return (state.settings && state.settings.endpoint) || CFG.replyUrl;
  }

  function callModel(system, messages) {
    return fetch(replyUrl(), {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system: system, messages: messages,
        temperature: (state.settings && state.settings.temperature) || 0.85,
        max_tokens: 700,
      }),
    }).then(function (r) {
      return r.json().then(function (value) {
        if (!r.ok || value.error) throw new Error(value.error || ('the model server answered ' + r.status));
        return String(value.text || '');
      });
    });
  }

  function checkHealth() {
    if (!CFG.healthUrl) return;
    getJSON(CFG.healthUrl).then(function (data) {
      online = Boolean(data && data.lm_studio && data.lm_studio.online);
    }).catch(function () { online = false; }).then(renderStatus);
  }

  function renderStatus() {
    var node = $('status');
    if (!node) return;
    node.innerHTML = '<i class="dot' + (online ? ' online' : '') + '"></i><span>' +
      (online ? 'Local model online' : 'Model endpoint: ' + esc(RP.clip(replyUrl(), 42))) + '</span>';
  }

  /* ---------------------------------------------------------------- *
   * rail
   * ---------------------------------------------------------------- */

  var NAV = [
    { id: 'discover', ico: '◉', label: 'Discover' },
    { id: 'feed', ico: '▤', label: 'Feed' },
    { id: 'charms', ico: '✧', label: 'Charms' },
    { id: 'labs', ico: '⚗', label: 'Labs' },
  ];

  function renderRail() {
    $('nav').innerHTML = NAV.map(function (n) {
      return '<button data-tab="' + n.id + '" class="' + (tab === n.id && !room() ? 'on' : '') + '">' +
        '<span class="ico">' + n.ico + '</span>' + n.label + '</button>';
    }).join('');
    $('nav').querySelectorAll('[data-tab]').forEach(function (b) {
      b.onclick = function () { tab = b.dataset.tab; state.active = ''; save(); render(); };
    });

    var buckets = RP.groupBuckets(state.rooms || []);
    var labels = { today: 'Today', yesterday: 'Yesterday', month: 'This Month', older: 'Older' };
    var html = '';
    ['today', 'yesterday', 'month', 'older'].forEach(function (key) {
      if (!buckets[key].length) return;
      html += '<h4>' + labels[key] + '</h4>';
      html += buckets[key].map(function (r) {
        var face = r.cast && r.cast[0] ? r.cast[0] : { name: r.title };
        return '<div class="recent ' + (r.id === state.active ? 'on' : '') + '" data-room="' + esc(r.id) + '">' +
          avatar(face, 32) + '<span class="name">' + esc(r.title) + '</span>' +
          '<button class="kill" data-kill="' + esc(r.id) + '" title="Delete chat">✕</button></div>';
      }).join('');
    });
    $('recents').innerHTML = html || '<div class="emptynote">No chats yet. Pick a character to start one.</div>';
    $('recents').querySelectorAll('[data-room]').forEach(function (node) {
      node.onclick = function (e) {
        if (e.target.dataset.kill) return;
        openRoom(node.dataset.room);
      };
    });
    $('recents').querySelectorAll('[data-kill]').forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        var id = b.dataset.kill;
        var target = (state.rooms || []).filter(function (r) { return r.id === id; })[0];
        if (!target || !window.confirm('Delete "' + target.title + '"? The chat goes; its memory and lore stay.')) return;
        state.rooms = state.rooms.filter(function (r) { return r.id !== id; });
        if (state.active === id) state.active = '';
        save(); render();
      };
    });

    var u = state.user || {};
    $('account').innerHTML = userAvatar(32) + '<span class="who"><b>' + esc(u.name || 'Archivist') + '</b>' +
      '<span>@' + esc(u.handle || 'waluipedia') + '</span></span><span>⌄</span>';
  }

  /* ---------------------------------------------------------------- *
   * dashboard
   * ---------------------------------------------------------------- */

  function charCard(c, note) {
    var plays = interactions(c.id);
    return '<button class="ccard" data-char="' + esc(c.id) + '">' + avatar(c, 56) +
      '<span class="body"><b>' + esc(c.name) + '</b>' +
      '<span class="by">By @' + esc(c.handle) + '</span>' +
      '<span class="sum">' + esc(c.summary || c.title || 'No filed summary yet.') + '</span>' +
      '<span class="meta"><span>💬 ' + plays + (plays === 1 ? ' interaction' : ' interactions') + '</span>' +
      (note ? '<span>' + esc(note) + '</span>' : (c.race ? '<span>' + esc(c.race) + '</span>' : '')) +
      '</span></span></button>';
  }

  function sceneCard(s) {
    var names = (s.suggestedCast || []).map(function (c) { return c.name; }).slice(0, 2).join(', ');
    return '<button class="scard" data-scene="' + esc(s.id) + '" style="background-image:url(' + esc(imageUrl(s.image)) + ')">' +
      '<span class="shade"></span><span class="flag">' + (s.beats || []).length + ' beats</span>' +
      '<span class="label"><b>' + esc(s.name) + '</b><span class="cast">' +
      (s.suggestedCast && s.suggestedCast[0] ? avatar(s.suggestedCast[0], 24) : '') +
      esc(names || 'Select cast') + '</span></span></button>';
  }

  function renderDiscover() {
    var filtered = cast;
    if (query) {
      var q = query.toLowerCase();
      filtered = cast.filter(function (c) {
        return (c.name + ' ' + c.title + ' ' + c.summary).toLowerCase().indexOf(q) >= 0;
      });
    }
    // "For you" leads with whoever this reader actually plays, then the rest
    // of the archive — no invented popularity.
    var played = cast.filter(function (c) { return interactions(c.id) > 0; })
      .sort(function (a, b) { return interactions(b.id) - interactions(a.id); });
    var fresh = cast.filter(function (c) { return interactions(c.id) === 0; });
    var forYou = played.concat(fresh).slice(0, 14);

    var html = '';
    html += '<div class="sec-head"><h2>For you</h2><span class="more">›</span><span class="grow"></span>' +
      '<button class="pill" id="groupBtn">👥 Group chat</button>' +
      '<button class="pill" id="randomBtn">🎲 Surprise me</button></div>';
    html += '<div class="row">' + forYou.map(function (c) { return charCard(c); }).join('') + '</div>';
    html += '<div class="sec-head"><h2>Advertisement</h2><span class="grow"></span><button class="mini" id="hideAds">Hide ads</button></div>';
    html += '<div class="adslot" id="adslot">This slot is empty. The archive does not sell anything.</div>';
    html += '<div class="sec-head"><h2>Scenes</h2><span class="more">›</span><span class="grow"></span>' +
      '<span class="more">Filed sessions, played from another perspective</span></div>';
    html += scenes.length ? '<div class="row">' + scenes.map(sceneCard).join('') + '</div>'
      : '<div class="emptynote">No filed sessions loaded.</div>';
    html += '<div class="sec-head"><h2>The whole cast</h2><span class="grow"></span><span class="more">' + filtered.length + ' characters</span></div>';
    if (!filtered.length) html += '<div class="emptynote">Nothing matches “' + esc(query) + '”.</div>';
    RP.groupByLetter(filtered).forEach(function (group) {
      html += '<div class="ltr-head">' + esc(group.letter) + '</div><div class="grid">' +
        group.chars.map(function (c) { return charCard(c); }).join('') + '</div>';
    });
    return html;
  }

  function renderFeed() {
    var log = (state.log || []).slice().reverse();
    var html = '<div class="sec-head"><h2>Feed — the world log</h2><span class="grow"></span>' +
      '<button class="pill" id="logAdd">＋ File a note</button>' +
      '<button class="pill" id="logExport">⬇ Export log</button></div>' +
      '<p class="emptynote">Everything here is visible to every chat: characters are told what has already happened, even when it happened in another room.</p>';
    if (!log.length) return html + '<div class="emptynote">Nothing filed yet. Play a turn, or pin a line with “Remember”.</div>';
    html += '<div class="stack">' + log.map(function (e) {
      var who = (e.chars || []).map(function (id) { return (castById[id] || { name: id }).name; }).join(', ');
      return '<div class="item"><div class="when">' + new Date(e.at).toLocaleString() + ' · ' + esc(e.kind) +
        (e.roomTitle ? ' · ' + esc(e.roomTitle) : '') + '</div><b>' + esc(e.text) + '</b>' +
        (who ? '<div class="tags"><span class="tag">' + esc(who) + '</span></div>' : '') +
        '<div class="acts"><button class="mini danger" data-logkill="' + esc(e.id) + '">Delete</button>' +
        '<button class="mini" data-logtolore="' + esc(e.id) + '">Promote to lore</button></div></div>';
    }).join('') + '</div>';
    return html;
  }

  function renderCharms() {
    var html = '<div class="sec-head"><h2>Charms — world lore</h2><span class="grow"></span>' +
      '<button class="pill" id="loreAdd">＋ New lore node</button>' +
      '<button class="pill" id="loreExport">⬇ Export lore</button>' +
      '<button class="pill" id="loreImport">⬆ Import lore</button></div>' +
      '<p class="emptynote">Lore nodes are treated as established truth. A node with no tags and no characters is world-wide; tags match the scene, characters match the cast.</p>';
    var nodes = state.lore || [];
    if (!nodes.length) return html + '<div class="emptynote">No lore filed yet.</div>';
    html += '<div class="stack">' + nodes.map(function (n) {
      return '<div class="item"><b>' + esc(n.title) + '</b><div class="when">' + esc(n.source || 'filed by hand') + '</div>' +
        '<p>' + esc(RP.clip(n.text, 400)) + '</p><div class="tags">' +
        (n.tags || []).map(function (t) { return '<span class="tag">#' + esc(t) + '</span>'; }).join('') +
        (n.chars || []).map(function (id) { return '<span class="tag">' + esc((castById[id] || { name: id }).name) + '</span>'; }).join('') +
        '</div><div class="acts"><button class="mini" data-loreedit="' + esc(n.id) + '">Edit</button>' +
        '<button class="mini danger" data-lorekill="' + esc(n.id) + '">Delete</button></div></div>';
    }).join('') + '</div>';
    return html;
  }

  function renderLabs() {
    var html = '<div class="sec-head"><h2>Labs</h2><span class="grow"></span></div>';
    html += '<p class="emptynote">Perspective replay, memory inspection, and backups.</p>';

    html += '<div class="sec-head"><h2>Perspective dynamic replay</h2></div>' +
      '<p class="emptynote">Re-run a chat or a filed session from another vantage point: the beats stay on their script while a new cast plays the same hours from where <em>they</em> stood — the timber-cutters watching the rebels come out of the treeline, not the rebels.</p>';
    var replayable = (state.rooms || []).filter(function (r) { return RP.counter(r) > 1; })
      .concat(scenes.map(function (s) { return { id: 'scene:' + s.id, title: s.name, scene: true, beats: s.beats || [] }; }));
    html += replayable.length ? '<div class="stack">' + replayable.map(function (r) {
      return '<div class="item"><b>' + esc(r.title) + '</b><div class="when">' +
        (r.scene ? 'filed session' : RP.counter(r) + ' turns played') + ' · ' + ((r.beats || []).length || RP.beatsFromRoom(r).length) + ' beats' +
        '</div><div class="acts"><button class="mini" data-replay="' + esc(r.id) + '">Replay from another perspective</button></div></div>';
    }).join('') + '</div>' : '<div class="emptynote">Play a chat first, or load the filed sessions.</div>';

    html += '<div class="sec-head"><h2>Character memory</h2><span class="grow"></span>' +
      '<button class="pill" id="memExport">⬇ Export memory</button></div>';
    var mems = (state.chars || []).filter(function (m) { return m.notes.length || m.mood || m.knowledge.length; });
    html += mems.length ? '<div class="stack">' + mems.map(function (m) {
      var rel = Object.keys(m.relations || {}).map(function (k) { return m.relations[k].name + ' ' + (m.relations[k].score > 0 ? '+' : '') + m.relations[k].score; });
      return '<div class="item"><b>' + esc(m.name) + '</b><div class="when">' + m.notes.length + ' remembered lines' +
        (m.mood ? ' · mood: ' + esc(m.mood) : '') + '</div>' +
        (m.knowledge.length ? '<p>Knows: ' + esc(m.knowledge.slice(-4).join('; ')) + '</p>' : '') +
        (rel.length ? '<div class="tags">' + rel.map(function (r) { return '<span class="tag">' + esc(r) + '</span>'; }).join('') + '</div>' : '') +
        '<div class="acts"><button class="mini" data-memmood="' + esc(m.id) + '">Set mood</button>' +
        '<button class="mini" data-memteach="' + esc(m.id) + '">Teach a fact</button>' +
        '<button class="mini danger" data-memclear="' + esc(m.id) + '">Forget</button></div></div>';
    }).join('') + '</div>' : '<div class="emptynote">No character memory yet.</div>';

    html += '<div class="sec-head"><h2>Backups</h2></div><div class="stack"><div class="item">' +
      '<b>Export</b><p class="emptynote">Chats, lore and memory travel together or on their own, as JSON.</p>' +
      '<div class="acts"><button class="mini" id="exportAll">Everything</button>' +
      '<button class="mini" id="exportChats">Chats only</button>' +
      '<button class="mini" id="exportLore">Lore only</button>' +
      '<button class="mini" id="exportMem">Memory only</button></div></div>' +
      '<div class="item"><b>Import</b><p class="emptynote">Merging keeps what is here and adds what is missing; replacing swaps the sections in the file.</p>' +
      '<div class="acts"><button class="mini" id="importMerge">Import &amp; merge</button>' +
      '<button class="mini danger" id="importReplace">Import &amp; replace</button></div></div>' +
      '<div class="item"><b>Settings</b><p class="emptynote">Model endpoint, default style, and who you play.</p>' +
      '<div class="acts"><button class="mini" id="setEndpoint">Model endpoint</button>' +
      '<button class="mini" id="setPersona">Your persona</button>' +
      '<button class="mini" id="setAccount">Your account</button></div></div></div>';
    return html;
  }

  function renderDash() {
    $('dash').hidden = false;
    $('chatview').hidden = true;
    var body = tab === 'feed' ? renderFeed() : tab === 'charms' ? renderCharms() : tab === 'labs' ? renderLabs() : renderDiscover();
    $('dashBody').innerHTML = body;
    wireDash();
  }

  function wireDash() {
    var box = $('dashBody');
    box.querySelectorAll('[data-char]').forEach(function (b) {
      b.onclick = function () { startSolo(castById[b.dataset.char]); };
    });
    box.querySelectorAll('[data-scene]').forEach(function (b) {
      b.onclick = function () { openScene(scenes.filter(function (s) { return s.id === b.dataset.scene; })[0]); };
    });
    var on = function (id, fn) { var node = $(id); if (node) node.onclick = fn; };
    on('groupBtn', function () { castPicker({ title: 'Group chat', note: 'Pick everyone who is in the room.' }, function (picked) { startGroup(picked); }); });
    on('randomBtn', function () { if (cast.length) startSolo(cast[Math.floor(Math.random() * cast.length)]); });
    on('hideAds', function () { var slot = $('adslot'); if (slot) slot.remove(); });
    on('logAdd', function () {
      form('File a note into the world log', [{ k: 'text', label: 'What happened', type: 'area' }], {}, function (v) {
        if (!v.text.trim()) return;
        RP.logEvent(state, { kind: 'note', text: v.text, chars: [] });
        save(); render(); toast('Filed into the log.');
      });
    });
    on('logExport', function () { download('waluipedia-log.json', JSON.stringify({ kind: RP.BUNDLE_KIND, version: 1, log: state.log || [] }, null, 2)); });
    on('loreAdd', function () { loreForm(null); });
    on('loreExport', function () { download('waluipedia-lore.json', JSON.stringify(RP.exportBundle(state, { chats: false, memory: false, user: false }), null, 2)); });
    on('loreImport', function () { importFile('merge'); });
    on('memExport', function () { download('waluipedia-memory.json', JSON.stringify(RP.exportBundle(state, { chats: false, lore: false, user: false }), null, 2)); });
    on('exportAll', function () { download('waluipedia-chatroom.json', JSON.stringify(RP.exportBundle(state, {}), null, 2)); });
    on('exportChats', function () { download('waluipedia-chats.json', JSON.stringify(RP.exportBundle(state, { lore: false, memory: false }), null, 2)); });
    on('exportLore', function () { download('waluipedia-lore.json', JSON.stringify(RP.exportBundle(state, { chats: false, memory: false, user: false }), null, 2)); });
    on('exportMem', function () { download('waluipedia-memory.json', JSON.stringify(RP.exportBundle(state, { chats: false, lore: false, user: false }), null, 2)); });
    on('importMerge', function () { importFile('merge'); });
    on('importReplace', function () { importFile('replace'); });
    on('setEndpoint', settingsForm);
    on('setPersona', personaForm);
    on('setAccount', accountForm);
    box.querySelectorAll('[data-replay]').forEach(function (b) { b.onclick = function () { replayPicker(b.dataset.replay); }; });
    box.querySelectorAll('[data-loreedit]').forEach(function (b) {
      b.onclick = function () { loreForm((state.lore || []).filter(function (n) { return n.id === b.dataset.loreedit; })[0]); };
    });
    box.querySelectorAll('[data-lorekill]').forEach(function (b) {
      b.onclick = function () { RP.removeLore(state, b.dataset.lorekill); save(); render(); };
    });
    box.querySelectorAll('[data-logkill]').forEach(function (b) {
      b.onclick = function () { state.log = (state.log || []).filter(function (e) { return e.id !== b.dataset.logkill; }); save(); render(); };
    });
    box.querySelectorAll('[data-logtolore]').forEach(function (b) {
      b.onclick = function () {
        var entry = (state.log || []).filter(function (e) { return e.id === b.dataset.logtolore; })[0];
        if (!entry) return;
        RP.addLore(state, { title: RP.clip(entry.text, 60), text: entry.text, chars: entry.chars, source: 'promoted from the world log' });
        save(); tab = 'charms'; render(); toast('Filed as lore.');
      };
    });
    box.querySelectorAll('[data-memmood]').forEach(function (b) {
      b.onclick = function () {
        var mem = RP.charMemory(state, { id: b.dataset.memmood });
        form('Set ' + mem.name + '’s state of mind', [{ k: 'mood', label: 'Mood', value: mem.mood }], {}, function (v) {
          RP.setMood(state, { id: mem.id, name: mem.name }, v.mood); save(); render();
        });
      };
    });
    box.querySelectorAll('[data-memteach]').forEach(function (b) {
      b.onclick = function () {
        var mem = RP.charMemory(state, { id: b.dataset.memteach });
        form('Teach ' + mem.name + ' a fact', [{ k: 'fact', label: 'They now know that…', type: 'area' }], {}, function (v) {
          if (v.fact.trim()) { RP.teach(state, { id: mem.id, name: mem.name }, v.fact); save(); render(); }
        });
      };
    });
    box.querySelectorAll('[data-memclear]').forEach(function (b) {
      b.onclick = function () {
        if (!window.confirm('Forget everything this character remembers?')) return;
        state.chars = (state.chars || []).filter(function (m) { return m.id !== b.dataset.memclear; });
        save(); render();
      };
    });
  }

  /* ---------------------------------------------------------------- *
   * starting chats
   * ---------------------------------------------------------------- */

  function pushRoom(r) {
    state.rooms.unshift(r);
    state.active = r.id;
    RP.logEvent(state, {
      kind: 'chat', roomId: r.id, roomTitle: r.title,
      chars: r.cast.map(function (c) { return c.id; }),
      text: (r.kind === 'group' ? 'A group chat opened: ' : 'A chat opened with ') + r.cast.map(function (c) { return c.name; }).join(', ') + '.',
    });
    save(); render();
  }

  function startSolo(char) {
    if (!char) return;
    pushRoom(RP.newRoom([char], {
      style: (state.settings && state.settings.style) || 'novel',
      persona: (state.user && state.user.persona) || '',
    }));
  }

  function startGroup(picked, opts) {
    if (!picked || picked.length < 1) return;
    opts = opts || {};
    pushRoom(RP.newRoom(picked, {
      scene: opts.scene || '', sceneName: opts.sceneName || '', sceneImage: opts.sceneImage || '',
      beats: opts.beats || [], opener: opts.opener || '',
      style: (state.settings && state.settings.style) || 'novel',
      persona: (state.user && state.user.persona) || '',
    }));
  }

  function openScene(scene) {
    if (!scene) return;
    castPicker({
      title: scene.name,
      note: 'The filed session runs on its own script. Pick the people you play around it — the suggested cast is the event’s own participants.',
      preselect: (scene.suggestedCast || []).map(function (c) { return c.id; }),
    }, function (picked) {
      startGroup(picked, {
        scene: scene.summary || scene.name, sceneName: scene.name, sceneImage: scene.image,
        beats: scene.beats || [],
        opener: 'Scene — ' + scene.name + (scene.location ? ' · ' + scene.location : '') + (scene.date ? ' · ' + scene.date : ''),
      });
    });
  }

  function openRoom(id) { state.active = id; save(); render(); }

  /* ---------------------------------------------------------------- *
   * the chat view
   * ---------------------------------------------------------------- */

  function charOf(r, id) { return (r.cast || []).filter(function (c) { return c.id === id; })[0] || castById[id] || { id: id, name: 'Character' }; }

  function renderChat() {
    var r = room();
    $('dash').hidden = true;
    $('chatview').hidden = false;

    var face = r.cast[0] || {};
    $('chatTop').innerHTML = avatar(face, 32) +
      '<span class="title"><b>' + esc(r.title) + '</b><span>' + esc(r.kind === 'group' ? r.cast.map(function (c) { return c.name; }).join(', ') : (face.title || '')) + '</span></span>' +
      (r.beats && r.beats.length ? '<button class="pill" id="nextBeat">⏩ Next beat (' + RP.beatProgress(r).at + '/' + RP.beatProgress(r).total + ')</button>' : '') +
      (r.kind === 'group' ? '<button class="pill" id="continueBtn">➤ Continue</button>' : '') +
      '<button class="pill" id="panelBtn">☰ Character</button>';

    var html = r.messages.map(function (m, i) {
      if (m.role === 'scene') {
        return '<div class="scene-card' + (m.beat ? ' beat' : '') + '"><span class="kicker">' +
          (m.beat ? 'Main event · beat' : 'Scene') + '</span>' + esc(RP.textOf(m)) + '</div>';
      }
      var mine = m.role === 'user';
      var who = mine ? (state.user.name || 'You') : charOf(r, m.charId).name;
      var swipes = (m.alts && m.alts.length > 1)
        ? '<span class="swipe"><button data-swipe="-1" data-i="' + i + '">‹</button>' + ((m.alt || 0) + 1) + ' / ' + m.alts.length + '<button data-swipe="1" data-i="' + i + '">›</button></span>' : '';
      return '<article class="turn ' + (mine ? 'user' : 'char') + (m.error ? ' err' : '') + '">' +
        '<div class="who">' + (mine ? userAvatar(24) : avatar(charOf(r, m.charId), 24)) +
        '<b>' + esc(who) + '</b>' + (mine ? '' : '<span class="badge">archive</span>') +
        (mine ? '' : '<button class="speak" data-speak="' + i + '" title="Read aloud">▶</button>') + '</div>' +
        '<div class="bubble">' + RP.md(RP.textOf(m)) + '</div>' +
        (m.error ? '<div class="acts"><span>This notice stays out of the model’s context.</span></div>' :
          '<div class="acts">' + swipes +
          (mine ? '' : '<button data-retry="' + i + '" title="Another take">↻</button>') +
          '<button class="' + (m.react === 'up' ? 'on' : '') + '" data-react="up" data-i="' + i + '">👍</button>' +
          '<button class="' + (m.react === 'down' ? 'on' : '') + '" data-react="down" data-i="' + i + '">👎</button>' +
          '<button class="' + (m.pinned ? 'on' : '') + '" data-pin="' + i + '" title="Pin">📌</button>' +
          '<button data-remember="' + i + '" title="File into the world log">🧠</button>' +
          '</div>') +
        '</article>';
    }).join('');
    if (!r.messages.length) {
      html = '<div class="emptynote">Say something, or press ➤ Continue to let ' +
        esc((r.cast[0] || {}).name || 'them') + ' open the scene.</div>';
    }
    $('stream').innerHTML = '<div class="stream-inner">' + html + (busy ? '<div class="turn typing"><em>…writing…</em></div>' : '') + '</div>';
    $('stream').scrollTop = $('stream').scrollHeight;

    // group chats let you choose who answers next
    $('speakers').innerHTML = r.kind !== 'group' ? '' :
      '<span class="emptynote">Next:</span>' + r.cast.map(function (c) {
        var on = RP.nextSpeaker(r).id === c.id;
        return '<button class="sp ' + (on ? 'on' : '') + '" data-speaker="' + esc(c.id) + '">' + avatar(c, 24) + esc(c.name) + '</button>';
      }).join('');

    renderPanel();
    wireChat();
  }

  function renderPanel() {
    var r = room();
    var c = r.cast[0] || {};
    var plays = interactions(c.id);
    var style = RP.STYLES[r.style] || RP.STYLES.novel;
    var pinned = r.messages.filter(function (m) { return m.pinned; }).length;
    var mem = (state.chars || []).filter(function (m) { return m.id === c.id; })[0];
    $('charpanel').innerHTML =
      '<div class="cp-head">' + avatar(c, 72) + '<div class="body"><h3>' + esc(r.kind === 'group' ? r.title : c.name) + '</h3>' +
      '<div class="by">By @' + esc(c.handle || 'waluipedia') + '</div>' +
      '<div class="by">' + plays + (plays === 1 ? ' interaction' : ' interactions') + '</div></div></div>' +
      '<div class="cp-row"><button class="iconbtn" id="cpSettings" title="Chat settings">⚙</button>' +
      '<div class="votes"><button id="cpUp">👍</button><span>' + r.messages.filter(function (m) { return m.react === 'up'; }).length +
      '</span><button id="cpDown">👎</button></div><span class="grow"></span>' +
      '<button class="iconbtn" id="cpExport" title="Export transcript">⬇</button></div>' +
      '<div class="cp-desc">' + esc(c.title || c.summary || r.scene || 'A chat in the Waluipedia archive.') + '</div>' +
      '<div class="cp-menu">' +
      menuItem('cpNew', '✎', 'New chat', '') +
      menuItem('cpVoice', '🔊', 'Voice', (state.settings.voice === 'on' ? 'On' : 'Default')) +
      menuItem('cpHistory', '🕘', 'History', RP.roomCountFor(state.rooms, c.id) + '') +
      menuItem('cpCustomize', '🖌', 'Customize', style.name) +
      menuItem('cpPinned', '📌', 'Pinned', String(pinned)) +
      menuItem('cpPersona', '🧑', 'Persona', RP.clip(r.persona || state.user.persona || 'Not set', 16)) +
      menuItem('cpStyle', '✨', 'Style', style.name) +
      menuItem('cpMemory', '🧠', 'Memory', mem ? String(mem.notes.length) : '0') +
      menuItem('cpReplay', '🎭', 'Replay', 'Perspective') +
      menuItem('cpScript', '⏱', 'Script', r.beats && r.beats.length ? (r.autoBeats ? 'Auto' : 'Manual') : 'None') +
      '</div>' +
      '<div class="cp-note">Memory is shared across chats: what is said here is remembered in the next room. Export from Labs.</div>';
    wirePanel();
  }

  function menuItem(id, ico, label, value) {
    return '<button id="' + id + '"><span class="ico">' + ico + '</span><span class="label">' + label + '</span>' +
      (value ? '<span class="value">' + esc(value) + '</span>' : '') + '<span class="chev">›</span></button>';
  }

  function wireChat() {
    var r = room();
    var on = function (id, fn) { var node = $(id); if (node) node.onclick = fn; };
    on('panelBtn', function () { $('charpanel').classList.toggle('open'); });
    on('continueBtn', function () { generate(); });
    on('nextBeat', function () { if (RP.fireBeat(r)) { logBeat(r); save(); render(); } });

    $('speakers').querySelectorAll('[data-speaker]').forEach(function (b) {
      b.onclick = function () { r.next = b.dataset.speaker; save(); render(); };
    });
    var stream = $('stream');
    stream.querySelectorAll('[data-react]').forEach(function (b) {
      b.onclick = function () {
        var m = r.messages[+b.dataset.i];
        m.react = m.react === b.dataset.react ? '' : b.dataset.react;
        save(); render();
      };
    });
    stream.querySelectorAll('[data-pin]').forEach(function (b) {
      b.onclick = function () {
        var m = r.messages[+b.dataset.pin];
        m.pinned = !m.pinned;
        if (m.pinned) RP.logEvent(state, { kind: 'pin', roomId: r.id, roomTitle: r.title, chars: r.cast.map(function (c) { return c.id; }), text: RP.clip(RP.textOf(m), 200) });
        save(); render();
      };
    });
    stream.querySelectorAll('[data-remember]').forEach(function (b) {
      b.onclick = function () {
        var m = r.messages[+b.dataset.remember];
        RP.logEvent(state, { kind: 'note', roomId: r.id, roomTitle: r.title, chars: r.cast.map(function (c) { return c.id; }), text: RP.clip(RP.textOf(m), 300) });
        save(); toast('Filed into the world log — every chat can see it now.');
      };
    });
    stream.querySelectorAll('[data-swipe]').forEach(function (b) {
      b.onclick = function () {
        var m = r.messages[+b.dataset.i];
        var next = (m.alt || 0) + (+b.dataset.swipe);
        m.alt = Math.max(0, Math.min(m.alts.length - 1, next));
        save(); render();
      };
    });
    stream.querySelectorAll('[data-retry]').forEach(function (b) {
      b.onclick = function () { generate({ retryIndex: +b.dataset.retry }); };
    });
    stream.querySelectorAll('[data-speak]').forEach(function (b) {
      b.onclick = function () { speak(r.messages[+b.dataset.speak], r); };
    });
  }

  function wirePanel() {
    var r = room();
    var c = r.cast[0] || {};
    var on = function (id, fn) { var node = $(id); if (node) node.onclick = fn; };
    on('cpNew', function () { r.kind === 'group' ? startGroup(r.cast, { scene: r.scene, sceneName: r.sceneName, beats: r.beats }) : startSolo(c); });
    on('cpVoice', function () {
      state.settings.voice = state.settings.voice === 'on' ? 'off' : 'on';
      save(); render(); toast('Voice ' + (state.settings.voice === 'on' ? 'on — replies read aloud' : 'off'));
    });
    on('cpHistory', function () {
      var mine = (state.rooms || []).filter(function (x) { return (x.cast || []).some(function (m) { return m.id === c.id; }); });
      list('History with ' + c.name, mine.map(function (x) {
        return { label: x.title + ' · ' + RP.counter(x) + ' turns · ' + new Date(x.updated).toLocaleDateString(), value: x.id };
      }), function (id) { openRoom(id); });
    });
    on('cpCustomize', function () {
      form('Customize this chat', [
        { k: 'title', label: 'Chat title', value: r.title },
        { k: 'scene', label: 'The scene', type: 'area', value: r.scene },
        { k: 'style', label: 'Narration style', type: 'select', value: r.style, options: Object.keys(RP.STYLES).map(function (k) { return { value: k, label: RP.STYLES[k].name }; }) },
        { k: 'temperature', label: 'Temperature (0–1.5)', value: String(state.settings.temperature) },
      ], {}, function (v) {
        r.title = v.title || r.title; r.scene = v.scene; r.style = v.style;
        var t = parseFloat(v.temperature); if (!isNaN(t)) state.settings.temperature = Math.max(0, Math.min(1.5, t));
        save(); render();
      });
    });
    on('cpPinned', function () {
      var pins = r.messages.filter(function (m) { return m.pinned; });
      list('Pinned in this chat', pins.map(function (m) { return { label: RP.clip(RP.textOf(m), 90), value: m.id }; }), function () {});
    });
    on('cpPersona', personaForm);
    on('cpStyle', function () {
      list('Narration style', Object.keys(RP.STYLES).map(function (k) { return { label: RP.STYLES[k].name + ' — ' + RP.clip(RP.STYLES[k].dir, 70), value: k }; }), function (k) {
        r.style = k; state.settings.style = k; save(); render();
      });
    });
    on('cpMemory', function () {
      var mem = RP.charMemory(state, c);
      list(c.name + '’s memory', mem.notes.slice().reverse().map(function (n) {
        return { label: '[' + n.roomTitle + '] ' + RP.clip(n.text, 90), value: n.roomId };
      }), function (id) { if ((state.rooms || []).some(function (x) { return x.id === id; })) openRoom(id); });
    });
    on('cpReplay', function () { replayPicker(r.id); });
    on('cpScript', function () {
      if (!r.beats || !r.beats.length) { toast('This chat has no filed script. Start one from a Scene card.'); return; }
      r.autoBeats = !r.autoBeats; save(); render();
      toast('Beats ' + (r.autoBeats ? 'advance on their own every two turns.' : 'only advance when you press ⏩.'));
    });
    on('cpExport', function () { download(RP.slug(r.title) + '.md', RP.transcript(r)); });
    on('cpSettings', settingsForm);
    on('cpUp', function () { toast('Rate individual replies with 👍 under the message.'); });
    on('cpDown', function () { toast('Rate individual replies with 👎 under the message.'); });
  }

  /* ---------------------------------------------------------------- *
   * playing a turn
   * ---------------------------------------------------------------- */

  function logBeat(r) {
    var beat = r.beats[r.beatIndex - 1];
    if (!beat) return;
    RP.logEvent(state, {
      kind: 'beat', roomId: r.id, roomTitle: r.title, chars: r.cast.map(function (c) { return c.id; }),
      text: (r.sceneName ? r.sceneName + ' — ' : '') + (beat.time ? beat.time + ': ' : '') + beat.beat,
    });
  }

  function send() {
    var input = $('input');
    var text = input.value.trim();
    if (!text || busy) return;
    var r = room();
    input.value = '';
    input.style.height = 'auto';
    var msg = { id: RP.uid(), role: 'user', text: text, at: Date.now() };
    r.messages.push(msg);
    RP.rememberTurn(state, r, msg);
    r.updated = Date.now();
    save(); render();
    generate();
  }

  /** One reply. `retryIndex` regenerates an existing turn as a new swipe. */
  function generate(opts) {
    opts = opts || {};
    var r = room();
    if (!r || busy || !r.cast.length) return;
    busy = true; render();

    var retry = opts.retryIndex !== undefined ? r.messages[opts.retryIndex] : null;
    var speaker = retry ? charOf(r, retry.charId) : RP.nextSpeaker(r);
    var system = RP.systemFor(state, r, speaker);
    var history = RP.historyFor(retry ? { kind: r.kind, cast: r.cast, messages: r.messages.slice(0, opts.retryIndex) } : r, 24);
    if (!history.length) history = [{ role: 'user', content: '(The scene opens. Begin in character.)' }];

    callModel(system, history).then(function (text) {
      var clean = RP.stripSpeaker(text, speaker.name).trim();
      if (retry) {
        retry.alts = (retry.alts && retry.alts.length ? retry.alts : [retry.text]).concat([clean]);
        retry.alt = retry.alts.length - 1;
      } else {
        var msg = { id: RP.uid(), role: 'char', charId: speaker.id, text: clean, at: Date.now(), alts: [clean], alt: 0 };
        r.messages.push(msg);
        RP.rememberTurn(state, r, msg);
        r.next = '';
        if (r.kind === 'group') {
          var after = RP.rotationAfter(r.cast, speaker.id);
          r.next = after ? after.id : '';
        }
        if (RP.autoAdvance(r)) { RP.fireBeat(r); logBeat(r); }
      }
      r.updated = Date.now();
      if (state.settings.voice === 'on' && !retry) speak(r.messages[r.messages.length - 1], r);
    }).catch(function (error) {
      r.messages.push({
        id: RP.uid(), role: 'char', charId: speaker.id, error: true, at: Date.now(),
        text: 'The model did not answer: ' + error.message + '\nEndpoint: ' + replyUrl() +
          '\nStart the local model (python workflow/server.py next to LM Studio) or set another endpoint in ⚙.',
      });
    }).then(function () {
      busy = false; save(); render();
    });
  }

  function speak(msg, r) {
    if (!msg || !window.speechSynthesis) return;
    var u = new window.SpeechSynthesisUtterance(RP.textOf(msg).replace(/\*/g, ''));
    var voice = RP.voiceFor(charOf(r, msg.charId));
    u.rate = voice.rate; u.pitch = voice.pitch;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  /* ---------------------------------------------------------------- *
   * modals
   * ---------------------------------------------------------------- */

  function closeModal() { $('modalBack').hidden = true; $('modal').innerHTML = ''; }

  function openModal(html) {
    $('modal').innerHTML = html;
    $('modalBack').hidden = false;
  }
  $('modalBack') && ($('modalBack').onclick = function (e) { if (e.target.id === 'modalBack') closeModal(); });

  /** A tiny declarative form. fields: {k, label, type: text|area|select, value} */
  function form(title, fields, opts, done) {
    openModal('<h3>' + esc(title) + '</h3>' + (opts.note ? '<p class="sub">' + esc(opts.note) + '</p>' : '') +
      fields.map(function (f) {
        var id = 'f_' + f.k;
        if (f.type === 'area') return '<label for="' + id + '">' + esc(f.label) + '</label><textarea id="' + id + '">' + esc(f.value || '') + '</textarea>';
        if (f.type === 'select') return '<label for="' + id + '">' + esc(f.label) + '</label><select id="' + id + '">' +
          f.options.map(function (o) { return '<option value="' + esc(o.value) + '"' + (o.value === f.value ? ' selected' : '') + '>' + esc(o.label) + '</option>'; }).join('') + '</select>';
        return '<label for="' + id + '">' + esc(f.label) + '</label><input type="text" id="' + id + '" value="' + esc(f.value || '') + '">';
      }).join('') +
      '<div class="actions"><button class="pill" id="mCancel">Cancel</button><button class="pill primary" id="mOk">' + esc(opts.ok || 'Save') + '</button></div>');
    $('mCancel').onclick = closeModal;
    $('mOk').onclick = function () {
      var values = {};
      fields.forEach(function (f) { values[f.k] = $('f_' + f.k).value; });
      closeModal();
      done(values);
    };
  }

  function list(title, items, done) {
    openModal('<h3>' + esc(title) + '</h3>' + (items.length ? '<div class="stack">' + items.map(function (it, i) {
      return '<button class="item" style="text-align:left;cursor:pointer" data-pick="' + i + '">' + esc(it.label) + '</button>';
    }).join('') + '</div>' : '<p class="sub">Nothing here yet.</p>') +
      '<div class="actions"><button class="pill" id="mCancel">Close</button></div>');
    $('mCancel').onclick = closeModal;
    $('modal').querySelectorAll('[data-pick]').forEach(function (b) {
      b.onclick = function () { closeModal(); done(items[+b.dataset.pick].value); };
    });
  }

  /** The cast picker used by group chats, scenes and replays. */
  function castPicker(opts, done) {
    var picked = (opts.preselect || []).slice();
    function draw() {
      var q = ($('pickSearch') && $('pickSearch').value || '').toLowerCase();
      var shown = cast.filter(function (c) { return !q || c.name.toLowerCase().indexOf(q) >= 0; }).slice(0, 300);
      $('pickGrid').innerHTML = shown.map(function (c) {
        return '<button class="pick ' + (picked.indexOf(c.id) >= 0 ? 'on' : '') + '" data-pick="' + esc(c.id) + '">' +
          avatar(c, 24) + '<span>' + esc(c.name) + '</span></button>';
      }).join('');
      $('pickGrid').querySelectorAll('[data-pick]').forEach(function (b) {
        b.onclick = function () {
          var id = b.dataset.pick;
          var at = picked.indexOf(id);
          if (at >= 0) picked.splice(at, 1); else picked.push(id);
          draw();
        };
      });
      $('pickCount').textContent = picked.length + ' selected';
    }
    openModal('<h3>' + esc(opts.title || 'Pick a cast') + '</h3>' +
      (opts.note ? '<p class="sub">' + esc(opts.note) + '</p>' : '') +
      '<input type="text" id="pickSearch" placeholder="Search the cast">' +
      '<div class="picker" id="pickGrid"></div>' +
      '<div class="actions"><span class="sub" id="pickCount" style="margin-right:auto"></span>' +
      (opts.suggest === false ? '' : '<button class="pill" id="pickSuggest">✨ Suggest a cast</button>') +
      '<button class="pill" id="mCancel">Cancel</button>' +
      '<button class="pill primary" id="mOk">' + esc(opts.ok || 'Start') + '</button></div>');
    $('pickSearch').oninput = draw;
    $('mCancel').onclick = closeModal;
    $('mOk').onclick = function () {
      var chosen = picked.map(function (id) { return castById[id]; }).filter(Boolean);
      if (!chosen.length) { toast('Pick at least one character.'); return; }
      closeModal(); done(chosen);
    };
    if ($('pickSuggest')) {
      $('pickSuggest').onclick = function () {
        if (!CFG.suggestUrl) { toast('Cast suggestions need the workflow server.'); return; }
        $('pickSuggest').textContent = '…thinking';
        fetch(CFG.suggestUrl, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ scene: opts.title || 'a scene', count: 4, candidates: cast.map(function (c) { return { id: c.id, name: c.name }; }) }),
        }).then(function (r) { return r.json(); }).then(function (data) {
          picked = (data.ids || []).slice();
          $('pickSuggest').textContent = '✨ Suggest a cast';
          draw();
        }).catch(function () { $('pickSuggest').textContent = '✨ Suggest a cast'; toast('The model could not suggest a cast.'); });
      };
    }
    draw();
  }

  function loreForm(node) {
    form(node ? 'Edit lore node' : 'New lore node', [
      { k: 'title', label: 'Title', value: node ? node.title : '' },
      { k: 'text', label: 'What is true', type: 'area', value: node ? node.text : '' },
      { k: 'tags', label: 'Tags (comma separated — matched against the scene)', value: node ? (node.tags || []).join(', ') : '' },
      { k: 'source', label: 'Source (where this came from)', value: node ? node.source : '' },
    ], { note: 'Lore is handed to every chat whose cast or scene matches.' }, function (v) {
      if (!v.title.trim()) return;
      RP.addLore(state, {
        id: node ? node.id : '', title: v.title, text: v.text, source: v.source,
        tags: v.tags.split(',').map(function (t) { return t.trim(); }).filter(Boolean),
        chars: node ? node.chars : [],
      });
      save(); render(); toast('Lore filed.');
    });
  }

  function personaForm() {
    var r = room();
    form('Who do you play?', [
      { k: 'persona', label: 'Your persona in this world', type: 'area', value: (r && r.persona) || state.user.persona || '' },
      { k: 'all', label: 'Apply to (this chat / everywhere)', type: 'select', value: r ? 'chat' : 'all', options: [{ value: 'chat', label: 'This chat' }, { value: 'all', label: 'Every chat' }] },
    ], { note: 'The characters address this person and never speak for them.' }, function (v) {
      if (v.all === 'all' || !r) state.user.persona = v.persona;
      if (r) r.persona = v.persona;
      save(); render();
    });
  }

  function accountForm() {
    form('Your account', [
      { k: 'name', label: 'Display name', value: state.user.name || '' },
      { k: 'handle', label: 'Handle (without @)', value: state.user.handle || '' },
      { k: 'avatar', label: 'Avatar URL (optional)', value: state.user.avatar || '' },
    ], {}, function (v) {
      state.user.name = v.name || 'Archivist';
      state.user.handle = (v.handle || 'waluipedia').replace(/^@/, '');
      state.user.avatar = v.avatar;
      save(); render();
    });
  }

  function settingsForm() {
    form('Settings', [
      { k: 'endpoint', label: 'Model endpoint (POST, roleplay API)', value: state.settings.endpoint || '' },
      { k: 'style', label: 'Default narration style', type: 'select', value: state.settings.style, options: Object.keys(RP.STYLES).map(function (k) { return { value: k, label: RP.STYLES[k].name }; }) },
      { k: 'temperature', label: 'Temperature', value: String(state.settings.temperature) },
    ], { note: 'Leave the endpoint empty to use ' + CFG.replyUrl + '.' }, function (v) {
      state.settings.endpoint = v.endpoint.trim();
      state.settings.style = v.style;
      var t = parseFloat(v.temperature); if (!isNaN(t)) state.settings.temperature = Math.max(0, Math.min(1.5, t));
      save(); render(); checkHealth(); renderStatus();
    });
  }

  /** Perspective replay: pick the new vantage, then the people who hold it. */
  function replayPicker(id) {
    var source = (state.rooms || []).filter(function (r) { return r.id === id; })[0];
    if (!source && id.indexOf('scene:') === 0) {
      var scene = scenes.filter(function (s) { return 'scene:' + s.id === id; })[0];
      if (!scene) return;
      source = { id: '', title: scene.name, sceneName: scene.name, scene: scene.summary, sceneImage: scene.image, beats: scene.beats, messages: [], cast: [] };
    }
    if (!source) return;
    form('Replay “' + RP.clip(source.title, 40) + '”', [
      { k: 'perspective', label: 'Whose perspective?', type: 'area', value: '', },
    ], { note: 'The same hours, the same beats, seen from somewhere else. Then pick who is standing there.', ok: 'Pick the cast' }, function (v) {
      castPicker({ title: 'Who plays this perspective?', note: v.perspective || 'The new vantage point.', suggest: true }, function (picked) {
        var replay = RP.replayRoom(state, source, picked, {
          perspective: v.perspective || picked.map(function (c) { return c.name; }).join(', '),
        });
        state.rooms.unshift(replay);
        state.active = replay.id;
        save(); render();
        toast('Replay opened — the beats will fire on their own.');
      });
    });
  }

  /* ---------------------------------------------------------------- *
   * files
   * ---------------------------------------------------------------- */

  function download(name, text) {
    var blob = new Blob([text], { type: /\.json$/.test(name) ? 'application/json' : 'text/markdown' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function importFile(mode) {
    var input = document.createElement('input');
    input.type = 'file'; input.accept = 'application/json,.json';
    input.onchange = function () {
      var file = input.files && input.files[0];
      if (!file) return;
      file.text().then(function (text) {
        var stats = RP.importBundle(state, JSON.parse(text), mode);
        save(); render();
        toast('Imported: ' + stats.rooms + ' chats, ' + stats.lore + ' lore, ' + stats.chars + ' memories, ' + stats.log + ' log lines.');
      }).catch(function (error) { toast('Import failed: ' + error.message); });
    };
    input.click();
  }

  /* ---------------------------------------------------------------- *
   * boot
   * ---------------------------------------------------------------- */

  function render() {
    renderRail();
    if (room()) renderChat(); else renderDash();
    renderStatus();
  }

  function wireShell() {
    $('createBtn').onclick = function () {
      castPicker({ title: 'Create a chat', note: 'One character is a one-to-one chat; two or more opens a group.', suggest: false }, function (picked) {
        picked.length > 1 ? startGroup(picked) : startSolo(picked[0]);
      });
    };
    $('search').oninput = function () { query = $('search').value.trim(); tab = 'discover'; state.active = ''; renderDash(); renderRail(); };
    $('account').onclick = accountForm;
    $('settingsBtn').onclick = settingsForm;
    $('homeBtn').onclick = function () { state.active = ''; tab = 'discover'; save(); render(); };
    var input = $('input');
    $('composer').onsubmit = function (e) { e.preventDefault(); send(); };
    input.oninput = function () {
      $('send').disabled = !input.value.trim();
      input.style.height = 'auto';
      input.style.height = Math.min(150, input.scrollHeight) + 'px';
    };
    input.onkeydown = function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
    };
    $('menuBtn').onclick = function () { document.querySelector('.rail').classList.toggle('open'); };
  }

  wireShell();
  render();
  checkHealth();
  loadCast().then(loadScenes).then(render);
})();
