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
  var posts = [];         // WAHwire posts, normalised
  var collections = [];   // the archive's own character collections
  var archive = { whatifs: [], events: [], factions: [], congress: {} };
  var archiveIndex = [];  // every loaded record, searchable, with its date
  var whatifs = [];       // the composed What-If board
  var backfills = [];     // the unwritten events everything points at
  var comTopic = '';
  var comStyle = 'podcast';
  var comMins = 25;
  var speaking = false;
  var bookKind = 'all';
  var logKind = 'all';
  var castSort = 'name';
  var castGroup = 'letter';
  var castRace = '';
  var castAffil = '';
  var castView = 'all';   // all | played | unplayed | portrait | invented
  var autoLeft = 0;       // turns still to play on their own
  var showStates = true;  // the sheets are visible in the chat by default
  var wireSort = 'newest';
  var wireView = 'all';   // all | unused | used | unfiled
  var tab = 'discover';
  var query = '';
  var busy = false;
  var online = false;

  /* ---------------------------------------------------------------- *
   * storage and small helpers
   * ---------------------------------------------------------------- */

  function save() {
    RP.saveState(window.localStorage, state);
    window.setTimeout(autosave, 0);      // never in the way of a render
  }
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

  /** An avatar at any size. The size is written inline as well as into a
   *  class: a size with no matching class used to leave the frame unsized,
   *  and a portrait would then render at its natural size — a full-page
   *  ellipse in the middle of the chat. Inline wins, always. */
  function avatarBox(size) {
    var px = Math.max(16, Number(size) || 40);
    return {
      cls: 'av av-' + px,
      style: 'width:' + px + 'px;height:' + px + 'px;min-width:' + px + 'px;font-size:' + Math.round(px * 0.4) + 'px;',
    };
  }

  function avatar(char, size) {
    var box = avatarBox(size);
    var url = imageUrl(char && char.image);
    if (url) {
      return '<span class="' + box.cls + '" style="' + box.style + '">' +
        '<img src="' + esc(url) + '" alt="" loading="lazy"></span>';
    }
    return '<span class="' + box.cls + '" style="' + box.style + 'background:' + RP.tintFor(char) + '">' +
      esc(RP.initialsFor(char && char.name)) + '</span>';
  }

  function userAvatar(size) {
    var u = state.user || {};
    var box = avatarBox(size || 32);
    if (u.avatar) {
      return '<span class="' + box.cls + '" style="' + box.style + '"><img src="' + esc(u.avatar) + '" alt=""></span>';
    }
    return '<span class="' + box.cls + '" style="' + box.style + 'background:#5b5b66">' +
      esc(RP.initialsFor(u.name || 'You')) + '</span>';
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

  /** The WAHwire: 196 filed posts, each one a scenario waiting to be played. */
  function loadWire() {
    return Promise.all([
      getJSON(CFG.wireUrl).catch(function () { return {}; }),
      CFG.wireProfilesUrl ? getJSON(CFG.wireProfilesUrl).catch(function () { return {}; }) : Promise.resolve({}),
    ]).then(function (both) {
      var data = both[0] || {};
      var profiles = (both[1] && (both[1].profiles || both[1])) || (data.profiles || {});
      var list = Array.isArray(data) ? data : (data.posts || []);
      posts = list.map(function (p) { return RP.normPost(p, profiles); });
    }).catch(function (error) { posts = []; console.warn('wire unavailable', error); });
  }

  /** The records the What-If board is composed from. */
  function loadArchive() {
    if (CFG.clockUrl) {
      getJSON(CFG.clockUrl).then(function (clock) { state.clock = clock; }).catch(function () { /* the scene date still works */ });
    }
    if (CFG.mode === 'static') {
      return Promise.all([
        getJSON(CFG.whatifsUrl).catch(function () { return []; }),
        getJSON(CFG.factionsUrl).catch(function () { return []; }),
        getJSON(CFG.congressUrl).catch(function () { return {}; }),
      ]).then(function (all) {
        archive.whatifs = Array.isArray(all[0]) ? all[0] : (all[0].whatifs || []);
        archive.factions = Array.isArray(all[1]) ? all[1] : (all[1].factions || []);
        archive.congress = all[2] || {};
      });
    }
    return getJSON(CFG.archiveUrl).then(function (data) {
      archive.whatifs = data.whatifs || [];
      archive.events = data.events || [];
      archive.knownIds = data.knownIds || [];
      if (data.clock) state.clock = data.clock;
      archive.factions = data.factions || [];
      archive.congress = data.congress || {};
    }).catch(function (error) { console.warn('archive bundle unavailable', error); });
  }

  /** Compose the board once everything has landed. */
  /** One searchable index over everything loaded, rebuilt when data lands. */
  function buildIndex() {
    archiveIndex = RP.buildIndex(archive, castById);
  }

  function buildBoard() {
    archive.posts = posts;
    archive.userName = (state.user || {}).name;
    // Written and inherited scenarios come first: they are this reader's own.
    buildIndex();
    whatifs = (state.scenarios || []).concat(RP.buildWhatIfs(archive, castById, { limit: 12 }));
    backfills = RP.backfillsFrom(archive, castById, state, 10)
      .map(function (gap) { return RP.whatIfFromBackfill(gap, castById); })
      .filter(function (s) { return s && RP.scenarioQuality(s) > 0; });
  }

  function loadCollections() {
    return getJSON(CFG.collectionsUrl).then(function (data) {
      var list = Array.isArray(data) ? data : (data.collections || []);
      collections = list.map(function (c) { return RP.normCollection(c, castById); })
        .filter(function (c) { return c.members.length; });
    }).catch(function (error) { collections = []; console.warn('collections unavailable', error); });
  }

  function loadScenes() {
    return getJSON(CFG.scenesUrl).then(function (data) {
      if (CFG.mode === 'static') {
        // The static build reads events.json anyway; the What-If board takes
        // its divergences and its wanted-pages scan from the same copy.
        var all = Array.isArray(data) ? data : (data.events || []);
        // Every filed id, so the backfill scan knows what already exists,
        // even for events outside the window it keeps in memory.
        archive.knownIds = all.map(function (e) { return e.id; }).concat(all.map(function (e) { return e.name; }));
        archive.events = all.slice(-60);
        scenes = scenesFromEvents(data);
        return;
      }
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

  /* ---------------------------------------------------------------- *
   * talking to a model — LM Studio directly, or the workflow server
   *
   * Two shapes of endpoint exist and the page works with both. Anything
   * that looks like an OpenAI API (`…/v1`, `…/chat/completions`) is
   * called the OpenAI way; our own server takes {system, messages}.
   * ---------------------------------------------------------------- */

  var LM_STUDIO = 'http://127.0.0.1:1234/v1';

  function isOpenAI(url) {
    return /\/v1(\/|$)|\/chat\/completions$|\/completions$/.test(String(url || ''));
  }

  /** `…/v1` → `…/v1/chat/completions`; anything already pointing at the
   *  route is left alone. */
  function chatRoute(url) {
    var base = String(url || '').replace(/\/+$/, '');
    return /\/chat\/completions$/.test(base) ? base : base + '/chat/completions';
  }

  function modelsRoute(url) {
    return String(url || '').replace(/\/+$/, '').replace(/\/chat\/completions$/, '') + '/models';
  }

  /** What to read before writing a turn: what was just said, what this
   *  scene is, and the filings this speaker is attached to. The passages
   *  come back, not the files. */
  function searchForTurn(r, speaker, recent) {
    return RP.searchArchive(archiveIndex, [
      recent,
      r.sceneName || '',
      (RP.sourceRecord(r, archive) || {}).name || '',
      ((speaker && speaker.keyEvents) || []).join(' '),
    ].join(' '), {
      limit: 3,
      // Nothing dated after the scene: the cast cannot read tomorrow.
      scene: RP.sceneDate(r, state, archive),
    });
  }

  /** The token budget for a turn, from the length dial (the narrator gets
   *  its own band). Continuations get the same again, so a long turn can
   *  actually land. */
  function tokensFor(isWorld) {
    var level = isWorld
      ? RP.NARRATORS[RP.narrator(state)].length
      : (state.settings && state.settings.length) || 'snappy';
    return RP.lengthBlock(level, false).tokens;
  }

  /** Which endpoint and model a call should use. Background work — the
   *  sequencer, the lore book, hooks — can be sent to a small fast model
   *  while the roleplay itself goes to the big one. */
  function routeFor(opts) {
    var useUtility = opts && opts.utility && state.settings && state.settings.utilityModel;
    return {
      url: (useUtility && state.settings.utilityEndpoint) || replyUrl(),
      model: useUtility ? state.settings.utilityModel : ((state.settings && state.settings.model) || 'local-model'),
    };
  }

  function samplers() {
    var s = (state.settings && state.settings.sampler) || {};
    var out = {};
    if (s.top_p !== undefined && s.top_p !== '') out.top_p = Number(s.top_p);
    if (s.top_k !== undefined && s.top_k !== '') out.top_k = Number(s.top_k);
    if (s.repeat_penalty !== undefined && s.repeat_penalty !== '') {
      out.repeat_penalty = Number(s.repeat_penalty);
      out.frequency_penalty = Math.max(0, Math.min(2, (Number(s.repeat_penalty) - 1) * 2));
    }
    if (s.min_p !== undefined && s.min_p !== '') out.min_p = Number(s.min_p);
    return out;
  }

  function callModel(system, messages, opts) {
    var route = routeFor(opts);
    var url = route.url;
    var temperature = (state.settings && state.settings.temperature) || 0.85;
    if (isOpenAI(url)) {
      // LM Studio, llama.cpp, Ollama's OpenAI shim, anything else that
      // speaks the same API. The system prompt is just the first message.
      return fetch(chatRoute(url), {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.assign({
          model: route.model,
          messages: [{ role: 'system', content: system }].concat(messages),
          temperature: temperature,
          max_tokens: (opts && opts.tokens) || RP.lengthBlock((state.settings && state.settings.length) || 'snappy').tokens,
          stream: false,
        }, samplers())),
      }).then(function (r) {
        return r.json().then(function (value) {
          if (!r.ok || value.error) {
            throw new Error((value.error && (value.error.message || value.error)) || ('the model answered ' + r.status));
          }
          var choice = (value.choices || [])[0] || {};
          return String((choice.message && choice.message.content) || choice.text || '');
        });
      });
    }
    return fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign({
        system: system, messages: messages,
        temperature: temperature,
        max_tokens: (opts && opts.tokens) || RP.lengthBlock((state.settings && state.settings.length) || 'snappy').tokens,
      }, samplers())),
    }).then(function (r) {
      return r.json().then(function (value) {
        if (!r.ok || value.error) throw new Error(value.error || ('the model server answered ' + r.status));
        return String(value.text || '');
      });
    });
  }

  /** Is anything answering? Checks whatever endpoint is configured, in its
   *  own dialect, and — when nothing is set — looks for LM Studio on its
   *  usual port before giving up, because that is what most people run. */
  function checkHealth() {
    var url = replyUrl();
    var probe = isOpenAI(url)
      ? fetch(modelsRoute(url)).then(function (r) { return r.ok ? r.json() : null; }).then(function (data) {
          if (!data) return false;
          var list = data.data || data.models || [];
          if (list.length && !(state.settings && state.settings.model)) {
            // Use whatever the studio has loaded, so nobody has to type it.
            state.settings.model = String(list[0].id || list[0].name || 'local-model');
          }
          return true;
        })
      : (CFG.healthUrl
          ? getJSON(CFG.healthUrl).then(function (data) { return Boolean(data && data.lm_studio && data.lm_studio.online); })
          : Promise.resolve(false));

    probe.catch(function () { return false; }).then(function (up) {
      online = Boolean(up);
      if (online || (state.settings && state.settings.endpoint)) { renderStatus(); return; }
      // Nothing there and nothing chosen: try LM Studio before complaining.
      return fetch(modelsRoute(LM_STUDIO)).then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) {
          if (!data) return;
          var list = data.data || data.models || [];
          state.settings.endpoint = LM_STUDIO;
          state.settings.model = String((list[0] && (list[0].id || list[0].name)) || 'local-model');
          online = true;
          save();
          toast('Found LM Studio on 127.0.0.1:1234 — using it.' +
            (state.settings.model !== 'local-model' ? ' Model: ' + state.settings.model : ''));
        }).catch(function () { /* still nothing; the status line says so */ })
        .then(renderStatus);
    });
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
    { id: 'commentary', ico: '🎙', label: 'Commentary' },
    { id: 'book', ico: '📓', label: 'Lore book' },
    { id: 'continue', ico: '⏭', label: 'Continue' },
    { id: 'whatif', ico: '❓', label: 'What If' },
    { id: 'backfills', ico: '🧱', label: 'Backfills' },
    { id: 'wire', ico: '📡', label: 'Wire' },
    { id: 'collections', ico: '🗂', label: 'Collections' },
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

  /** A card. `extra` is either a caption, or the cast context — in which
   *  case the card shows what the current sort is actually sorting on. */
  /** Real-world time, plainly. Used beside the in-world date everywhere. */
  function ago(at) {
    var secs = Math.max(1, Math.round((Date.now() - (at || 0)) / 1000));
    if (secs < 90) return 'just now';
    var mins = Math.round(secs / 60);
    if (mins < 60) return mins + ' min ago';
    var hours = Math.round(mins / 60);
    if (hours < 36) return hours + 'h ago';
    var days = Math.round(hours / 24);
    if (days < 14) return days + ' days ago';
    return new Date(at).toLocaleDateString();
  }

  function charCard(c, extra) {
    var plays = interactions(c.id);
    var note = typeof extra === 'string' ? extra : '';
    if (extra && typeof extra === 'object') {
      var mem = extra.memory[c.id] || 0;
      note = castSort === 'fame' && c.fameTier ? '★ ' + c.fameTier
        : castSort === 'power' && (c.powerLevel || c.level) ? '⚔ power ' + (c.powerLevel || c.level)
        : castSort === 'remember' ? '🧠 ' + mem + ' remembered'
        : castSort === 'filings' ? '📜 ' + (c.keyEvents || []).length + ' filings'
        : castSort === 'recent' && extra.last[c.id] ? '🕘 ' + ago(extra.last[c.id])
        : c.affiliation || c.race || '';
    }
    return '<button class="ccard" data-char="' + esc(c.id) + '">' + avatar(c, 56) +
      '<span class="body"><b>' + esc(c.name) + (c.invented ? ' <span class="tag">invented</span>' : '') + '</b>' +
      '<span class="by">By @' + esc(c.handle) + '</span>' +
      '<span class="sum">' + esc(c.summary || c.title || 'No filed summary yet.') + '</span>' +
      '<span class="meta"><span>💬 ' + plays + (plays === 1 ? ' interaction' : ' interactions') + '</span>' +
      (note ? '<span>' + esc(RP.clip(note, 40)) + '</span>' : '') +
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
    // Where the advertisement used to be: a few long What-Ifs, not a wall
    // of one-liners. (No ad slot: the archive sells nothing.)
    html += continuationSection({ limit: 4 });
    html += whatIfSection({ limit: 6 });
    html += backfillSection({ limit: 4 });
    html += collectionsSection();
    html += '<div class="sec-head"><h2>Scenes</h2><span class="more">›</span><span class="grow"></span>' +
      '<span class="more">Filed sessions, played from another perspective</span></div>';
    html += scenes.length ? '<div class="row">' + scenes.map(sceneCard).join('') + '</div>'
      : '<div class="emptynote">No filed sessions loaded.</div>';
    html += castBrowser();
    return html;
  }

  /** The cast, browsable: sort it, group it, filter it by race or
   *  affiliation, or narrow it to the people you have actually played.
   *  189 names in one alphabetical list is a phone book. */
  function castBrowser() {
    var ctx = RP.castContext(state);
    var pool = RP.filterCast(cast.concat(state.newChars || []), {
      query: query, race: castRace, affiliation: castAffil, view: castView,
    }, ctx);
    var sorted = RP.sortCast(pool, castSort, ctx);
    var facets = RP.castFacets(cast);
    var VIEWS = { all: 'Everyone', played: 'Played', unplayed: 'Never played', portrait: 'Has a portrait', invented: 'Invented in play' };

    var html = '<div class="sec-head"><h2>The whole cast</h2><span class="grow"></span>' +
      '<span class="more">' + sorted.length + ' of ' + cast.length + '</span></div>' +
      '<div class="castbar">' +
      '<select id="castSort" title="Sort">' + Object.keys(RP.CAST_SORTS).map(function (k) {
        return '<option value="' + k + '"' + (castSort === k ? ' selected' : '') + '>' + esc(RP.CAST_SORTS[k].name) + '</option>';
      }).join('') + '</select>' +
      '<select id="castGroup" title="Group by">' + Object.keys(RP.CAST_GROUPS).map(function (k) {
        return '<option value="' + k + '"' + (castGroup === k ? ' selected' : '') + '>Group: ' + esc(RP.CAST_GROUPS[k].name) + '</option>';
      }).join('') + '</select>' +
      '<select id="castRace" title="Race"><option value="">Any race</option>' + facets.race.map(function (f) {
        return '<option value="' + esc(f.value) + '"' + (castRace === f.value ? ' selected' : '') + '>' + esc(f.value) + ' (' + f.count + ')</option>';
      }).join('') + '</select>' +
      '<select id="castAffil" title="Affiliation"><option value="">Any affiliation</option>' + facets.affiliation.map(function (f) {
        return '<option value="' + esc(f.value) + '"' + (castAffil === f.value ? ' selected' : '') + '>' + esc(RP.clip(f.value, 40)) + ' (' + f.count + ')</option>';
      }).join('') + '</select>' +
      Object.keys(VIEWS).map(function (k) {
        return '<button class="chip ' + (castView === k ? 'on' : '') + '" data-castview="' + k + '">' + esc(VIEWS[k]) + '</button>';
      }).join('') +
      (castRace || castAffil || castView !== 'all' || castSort !== 'name' || castGroup !== 'letter'
        ? '<button class="chip clear" id="castReset">✕ Reset</button>' : '') +
      '</div>';

    if (!sorted.length) return html + '<div class="emptynote">Nothing matches that. Try ✕ Reset.</div>';
    RP.groupCast(sorted, castGroup, ctx).forEach(function (group) {
      if (group.letter) html += '<div class="ltr-head">' + esc(group.letter) + ' <span>' + group.chars.length + '</span></div>';
      html += '<div class="grid">' + group.chars.map(function (c) { return charCard(c, ctx); }).join('') + '</div>';
    });
    return html;
  }

  var KIND_ICON = { filed: '📕', gap: '🚧', divergence: '🔀', chamber: '🏛', flashpoint: '📡', custom: '✍️' };

  /** One What-If, as a card big enough to read: the premise in full, the
   *  cast, the beat count, and the first lines of the brief. */
  function whatIfCard(s) {
    var played = RP.postUsed(state, s.id);
    return '<article class="ifcard' + (s.image ? ' has-plate' : '') + '" data-if="' + esc(s.id) + '">' +
      (s.image ? '<div class="plate" style="background-image:url(' + esc(imageUrl(s.image)) + ')"></div>' : '') +
      '<div class="body">' +
      '<div class="kind">' + (KIND_ICON[s.kind] || '❓') + ' ' + esc(s.kindLabel) +
      (played ? '<span class="done">played</span>' : '<span class="new">unplayed</span>') +
      '<span class="grow"></span><span class="len">' + s.beats.length + ' beats · ' + Math.round(s.brief.length / 6) + ' words of brief</span></div>' +
      '<h3>' + esc((hookFor(s.id) || {}).title || s.name) + '</h3>' +
      (forging[s.id]
        ? '<p class="premise forging">…the model is writing the opener from the filed material…</p>'
        : hookFor(s.id)
          ? '<p class="premise hooked">' + esc(RP.clip(hookFor(s.id).open, 420)) + '</p>' +
            (hookFor(s.id).stakes ? '<p class="stakes">⚠ ' + esc(hookFor(s.id).stakes) + '</p>' : '')
          : '<p class="premise">' + esc(s.premise) + '</p>') +
      '<div class="faces">' + s.suggestedCast.slice(0, 6).map(function (c) { return avatar(c, 32); }).join('') +
      '<span class="who">' + esc(s.suggestedCast.slice(0, 3).map(function (c) { return c.name; }).join(', ')) +
      (s.suggestedCast.length > 3 ? ' +' + (s.suggestedCast.length - 3) : '') + '</span></div>' +
      '<div class="tags">' + s.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' +
      '<div class="acts"><button class="pill primary" data-ifplay="' + esc(s.id) + '">Play this</button>' +
      '<button class="mini" data-ifhook="' + esc(s.id) + '">' + (hookFor(s.id) ? '↻ Another opener' : '⚡ Forge the opener') + '</button>' +
      '<button class="mini" data-ifread="' + esc(s.id) + '">Read the brief</button>' +
      '<span class="src">' + esc(s.source) + '</span></div>' +
      '</div></article>';
  }

  function whatIfSection(opts) {
    opts = opts || {};
    var pool = whatifs.filter(function (s) { return s.kind !== 'continuation'; });
    var shown = pool.slice(0, opts.limit || pool.length);
    var html = '<div class="sec-head"><h2>What If</h2><span class="grow"></span>' +
      '<button class="pill primary" id="makeIf">✍️ Create a scenario</button>' +
      (opts.limit ? '<button class="pill" id="allIfs">See all ' + whatifs.length + '</button>' : '') + '</div>' +
      '<p class="emptynote">A few long branches rather than a wall of prompts. Each one is assembled by this page out of ' +
      'filed records — the archive’s own What-Ifs, its <b>🚧 wanted pages</b> (people named in filings nobody has written up), ' +
      'filed sessions turned at their hinge, the chambers (the Midlands Diet, the Congress, the Pond Patrol), and the ' +
      'loudest posts on the wire. The brief, the cast and the beats are all real; the model only ever plays the people.</p>';
    if (!shown.length) return html + '<div class="emptynote">Still composing the board from the archive…</div>';
    return html + '<div class="ifgrid">' + shown.map(whatIfCard).join('') + '</div>';
  }

  function renderWhatIfs() { return whatIfSection({}); }

  /** Most Used Backfills — the unwritten events everything points at,
   *  ranked by how often this reader has played one and by how many filings
   *  are waiting on it. */
  function backfillSection(opts) {
    opts = opts || {};
    if (!backfills.length) return '';
    var shown = backfills.slice(0, opts.limit || backfills.length);
    var played = backfills.reduce(function (n, b) { return n + (b.uses || 0); }, 0);
    return '<div class="sec-head"><h2>Most Used Backfills</h2><span class="grow"></span>' +
      (opts.limit ? '<button class="pill" id="allBackfills">See all ' + backfills.length + '</button>' : '') + '</div>' +
      '<p class="emptynote">Events the archive keeps referring to and nobody ever wrote: the off-screen battle, ' +
      'the airlift that never came, the session between two sessions. Playing one produces the missing account — ' +
      'export the transcript and the hole is filled. ' + played + ' played here so far.</p>' +
      '<div class="ifgrid">' + shown.map(whatIfCard).join('') + '</div>';
  }

  /** Continue the saga — where the filed record actually stops. */
  function continuationSection(opts) {
    opts = opts || {};
    var list = whatifs.filter(function (s) { return s.kind === 'continuation'; });
    if (!list.length) return '';
    var shown = list.slice(0, opts.limit || list.length);
    return '<div class="sec-head"><h2>Continue the story</h2><span class="grow"></span>' +
      (opts.limit && list.length > shown.length ? '<button class="pill" id="allContinue">See all ' + list.length + '</button>' : '') + '</div>' +
      '<p class="emptynote">The archive stops mid-saga. These pick it up in the minutes after the last filed line and ' +
      'keep going into hours nobody has written: new faces, new places, new trouble. Everything already filed is canon ' +
      'and cannot be contradicted; everything after it is invented in play — including characters, who are described ' +
      'rather than drawn, because nobody has painted them yet.</p>' +
      '<div class="ifgrid">' + shown.map(whatIfCard).join('') + '</div>';
  }

  function renderContinuations() {
    return continuationSection({}) ||
      '<div class="sec-head"><h2>Continue the story</h2></div><div class="emptynote">No sagas loaded yet.</div>';
  }

  function renderBackfills() {
    return backfillSection({}) ||
      '<div class="sec-head"><h2>Most Used Backfills</h2></div>' +
      '<div class="emptynote">No unwritten events found in the records that are loaded. The scan looks for ids that ' +
      'filed records point at — keyEvents and relatedArticles — with no filing of their own.</div>';
  }

  /** A wire post as a scenario card. */
  function wireCard(p) {
    var used = RP.postUsed(state, p.id);
    return '<button class="wcard" data-post="' + esc(p.id) + '">' +
      '<span class="head">' + avatar({ id: p.author, name: p.authorName, image: p.avatar }, 24) +
      '<b>' + esc(p.authorName) + '</b><span class="when">' + esc(p.timestamp || ('#' + p.order)) + '</span></span>' +
      '<span class="post">' + esc(p.content) + '</span>' +
      '<span class="foot">' + (used ? '<span class="done">played</span>' : '<span class="new">unused</span>') +
      '<span>♥ ' + p.likes + '</span>' + (p.comments.length ? '<span>💬 ' + p.comments.length + '</span>' : '') +
      (p.status !== 'posted' ? '<span class="tag">never posted</span>' : '') +
      p.tags.slice(0, 2).map(function (t) { return '<span class="tag">#' + esc(t) + '</span>'; }).join('') +
      '</span></button>';
  }

  /** The wire section: sort, the used/unused views, and the cards. `limit`
   *  makes it a row on the dashboard; without one it is the whole Wire tab. */
  function wireSection(opts) {
    opts = opts || {};
    var shown = RP.sortPosts(RP.filterPosts(posts, { view: wireView, query: opts.query || '' }, state), wireSort);
    var unused = RP.filterPosts(posts, { view: 'unused' }, state).length;
    var html = '<div class="sec-head"><h2>' + esc(opts.heading || 'The WAHwire') + '</h2>' +
      '<span class="grow"></span><div class="controls">' +
      '<select id="wireSort">' + Object.keys(RP.POST_SORTS).map(function (k) {
        return '<option value="' + k + '"' + (wireSort === k ? ' selected' : '') + '>' + esc(RP.POST_SORTS[k].name) + '</option>';
      }).join('') + '</select>' +
      Object.keys(RP.POST_VIEWS).map(function (k) {
        return '<button class="chip ' + (wireView === k ? 'on' : '') + '" data-wireview="' + k + '">' +
          esc(RP.POST_VIEWS[k]) + (k === 'unused' ? ' (' + unused + ')' : '') + '</button>';
      }).join('') + '</div></div>' +
      '<p class="emptynote">Every post on the wire can be played as a scenario: the post is the situation, the people it names are the cast, and the replies underneath arrive as beats. ' +
      unused + ' of ' + posts.length + ' have never been played here.</p>';
    if (!shown.length) return html + '<div class="emptynote">No posts match this view.</div>';
    if (opts.limit) return html + '<div class="row">' + shown.slice(0, opts.limit).map(wireCard).join('') + '</div>';
    return html + '<div class="grid">' + shown.slice(0, 120).map(wireCard).join('') + '</div>';
  }

  function collectionsSection() {
    if (!collections.length) return '';
    return '<div class="sec-head"><h2>Collections</h2><span class="more">›</span><span class="grow"></span>' +
      '<span class="more">The archive\u2019s own groupings — one click, the whole table</span></div>' +
      '<div class="row">' + collections.map(function (c) {
        return '<button class="kcard" data-collection="' + esc(c.id) + '"><b>' + esc(c.name) + '</b>' +
          '<span class="sub">' + esc(c.title || c.scope) + '</span>' +
          '<span class="faces">' + c.members.slice(0, 6).map(function (m) { return avatar(m, 32); }).join('') + '</span>' +
          '<span class="count">' + c.members.length + ' of ' + c.total + ' playable</span></button>';
      }).join('') + '</div>';
  }

  function renderWire() {
    return wireSection({ heading: 'The WAHwire — every filed post' });
  }

  function renderCollections() {
    if (!collections.length) return '<div class="emptynote">No collections loaded.</div>';
    return '<div class="sec-head"><h2>Collections</h2><span class="grow"></span><span class="more">' + collections.length + ' groupings</span></div>' +
      '<div class="stack">' + collections.map(function (c) {
        return '<div class="item"><b>' + esc(c.name) + '</b><div class="when">' + esc(c.title || '') + '</div>' +
          '<p>' + esc(c.summary) + '</p><div class="tags">' + c.members.slice(0, 12).map(function (m) {
            return '<span class="tag">' + esc(m.name) + (m.role ? ' — ' + esc(RP.clip(m.role, 40)) : '') + '</span>';
          }).join('') + '</div>' +
          '<div class="acts"><button class="mini" data-collection="' + esc(c.id) + '">Open as a group chat</button></div></div>';
      }).join('') + '</div>';
  }

  /** The lore book: what play has established, oldest page first. */
  function renderBook() {
    var book = RP.bookState(state);
    var entries = book.entries.filter(function (e) {
      if (bookKind !== 'all' && e.kind !== bookKind) return false;
      if (!query) return true;
      return (e.name + ' ' + e.text + ' ' + (e.when || '')).toLowerCase().indexOf(query.toLowerCase()) >= 0;
    });
    var counts = {};
    book.entries.forEach(function (e) { counts[e.kind] = (counts[e.kind] || 0) + 1; });
    var budget = RP.bookBudgetLeft(state);
    var html = '<div class="sec-head"><h2>📓 The lore book</h2><span class="grow"></span>' +
      '<button class="pill" id="bookNew">＋ Write a page</button>' +
      '<button class="pill" id="bookSettings">⚙ Filing</button>' +
      '<button class="pill" id="bookExport">⬇ Export</button></div>' +
      '<p class="emptynote">Written while you play. Every few turns the last stretch of the scene is queued and a ' +
      'small separate call files what is new — places, people, events, things, facts, and a diary entry for the day. ' +
      'The newest page is always at the bottom, and the whole book is handed back to the model so the world stays ' +
      'consistent with itself. One call at a time, ' + budget + ' left in this session\u2019s budget' +
      (book.queue.length ? ' · <b>' + book.queue.length + ' queued</b>' : '') +
      (booking ? ' · <b>writing now…</b>' : '') + '.</p>' +
      '<div class="castbar">' +
      ['all'].concat(Object.keys(RP.BOOK_KINDS)).map(function (k) {
        var label = k === 'all' ? 'All' : (RP.BOOK_KINDS[k].icon + ' ' + RP.BOOK_KINDS[k].label);
        var n = k === 'all' ? book.entries.length : (counts[k] || 0);
        return '<button class="chip ' + (bookKind === k ? 'on' : '') + '" data-bookkind="' + k + '">' + esc(label) + ' ' + n + '</button>';
      }).join('') + '</div>';
    if (!entries.length) {
      return html + '<div class="emptynote">Nothing filed yet. Play a few turns with filing on, or write a page by hand.</div>';
    }
    html += '<div class="bookpages">' + entries.map(function (e, i) {
      var kind = RP.BOOK_KINDS[e.kind] || RP.BOOK_KINDS.fact;
      return '<article class="page ' + esc(e.kind) + '">' +
        '<div class="ph"><span class="ico">' + kind.icon + '</span>' +
        '<b>' + esc(e.kind === 'diary' ? (e.when || 'Diary') : e.name) + '</b>' +
        '<span class="grow"></span>' +
        (e.source === 'you' ? '<span class="tag">yours</span>' : '') +
        (e.seen > 1 ? '<span class="tag">seen ' + e.seen + '×</span>' : '') +
        '<span class="num">' + (book.entries.indexOf(e) + 1) + '</span></div>' +
        '<p>' + esc(e.text) + '</p>' +
        '<div class="pf">' + (e.when ? '<span class="inworld">🕯 ' + esc(e.when) + '</span>' : '') +
        '<span>' + esc(ago(e.at)) + '</span>' + (e.roomTitle ? '<span>' + esc(e.roomTitle) + '</span>' : '') +
        '<span class="grow"></span>' +
        '<button class="mini" data-bookedit="' + esc(e.id) + '">Edit</button>' +
        '<button class="mini danger" data-bookkill="' + esc(e.id) + '">Delete</button></div>' +
        '</article>';
    }).join('') + '</div>';
    return html;
  }

  /* ---------------------------------------------------------------- *
   * saving to disk — localStorage is one cleared cache from gone
   * ---------------------------------------------------------------- */

  var lastSaveAt = 0;

  function everything() {
    return RP.exportBundle(state, { chats: true, lore: true, memory: true, user: true });
  }

  /** Write the whole state to a file beside the server, with backups. */
  function saveToDisk(name, quiet) {
    if (!CFG.saveUrl) { toast('No server to save to — use ⬇ Download a backup.'); return Promise.resolve(null); }
    return window.fetch(CFG.saveUrl, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name || 'chatroom', state: everything() }),
    }).then(function (res) { return res.json(); }).then(function (out) {
      if (out.error) throw new Error(out.error);
      lastSaveAt = Date.now();
      if (!quiet) toast('💾 Saved to ' + out.saved + ' — ' + Math.round(out.bytes / 1024) + ' KB, ' + out.rooms + ' chats.');
      renderSaveBadge();
      return out;
    }).catch(function (error) {
      if (!quiet) toast('Could not save to disk: ' + error.message + '. The workflow server has to be running.');
      return null;
    });
  }

  function restoreFromDisk() {
    if (!CFG.savesUrl) { toast('No server to read from — use ⬆ Restore from a file.'); return; }
    getJSON(CFG.savesUrl).then(function (data) {
      var saves = (data && data.saves) || [];
      if (!saves.length) { toast('Nothing saved to disk yet.'); return; }
      list('Restore from disk', saves.map(function (row) {
        return {
          label: '💾 ' + row.name + ' — ' + row.at + ' · ' + row.rooms + ' chats · ' +
            row.book + ' book pages · ' + Math.round(row.bytes / 1024) + ' KB',
          value: row.name,
        };
      }), function (name) {
        getJSON(CFG.saveUrl + '?name=' + encodeURIComponent(name)).then(function (out) {
          if (!out || !out.state) { toast('That save could not be read.'); return; }
          openModal('<h3>Restore “' + esc(name) + '”?</h3>' +
            '<p class="sub">Merging keeps what is in this browser and adds whatever the save has that is missing. ' +
            'Replacing throws away what is here and takes the file as the truth.</p>' +
            '<div class="actions"><button class="pill" id="mCancel">Cancel</button>' +
            '<button class="pill" id="mMerge">Merge</button>' +
            '<button class="pill danger" id="mOk">Replace</button></div>');
          $('mCancel').onclick = closeModal;
          $('mMerge').onclick = function () { closeModal(); applyRestore(out.state, 'merge'); };
          $('mOk').onclick = function () { closeModal(); applyRestore(out.state, 'replace'); };
        });
      });
    }).catch(function () { toast('The workflow server is not answering.'); });
  }

  function applyRestore(bundle, mode) {
    var stats = RP.importBundle(state, bundle, mode);
    save(); buildBoard(); render();
    toast('Restored ' + (stats.rooms || 0) + ' chats, ' + (stats.book || 0) + ' book pages.');
  }

  function renderSaveBadge() {
    var badge = $('saveBadge');
    if (!badge) return;
    badge.textContent = lastSaveAt ? '💾 saved ' + ago(lastSaveAt) : '';
    badge.hidden = !lastSaveAt;
  }

  /** Autosave: quiet, throttled, and off unless asked for. */
  function autosave() {
    if ((state.settings.autosave || 'off') === 'off' || !CFG.saveUrl) return;
    if (Date.now() - lastSaveAt < 60000) return;
    saveToDisk('chatroom', true);
  }

  /** What the model is actually being sent — size, blocks, and the text. */
  function promptInspector() {
    // Works from Labs as well as from inside a chat: the most recent scene
    // is the one whose prompt anybody wants to see.
    var r = room() || (state.rooms || []).slice().sort(function (a, b) { return b.updated - a.updated; })[0];
    if (!r) { toast('Play something first — the prompt is built per scene.'); return; }
    var speaker = RP.nextSpeaker(r);
    var recent = RP.historyFor(r, 4).map(function (m) { return m.content; }).join(' ');
    var found = RP.citableFor(archiveIndex, r, state, { query: recent + ' ' + (r.scene || ''), limit: 6 });
    var read = searchForTurn(r, speaker, recent);
    var system = RP.systemFor(state, r, speaker, {
      archive: archive,
      citations: [RP.citationBlock(found), read.length ? RP.retrievalBlock(read) : ''].filter(Boolean).join('\n\n'),
    });
    var blocks = system.split('\n\n').map(function (b) {
      return { head: RP.clip(b.split('\n')[0], 60), size: b.length };
    }).sort(function (a, b) { return b.size - a.size; }).slice(0, 10);
    openModal('<h3>What the model is sent</h3>' +
      '<p class="sub">' + system.length + ' characters of system prompt, budget ' + RP.PROMPT_BUDGET +
      '. Reference material is trimmed before the scene’s own instructions ever are.</p>' +
      '<div class="castbar">' + blocks.map(function (b) {
        return '<span class="chip">' + esc(b.head) + ' · ' + b.size + '</span>';
      }).join('') + '</div>' +
      '<textarea readonly rows="14" style="width:100%">' + esc(system) + '</textarea>' +
      '<div class="actions"><button class="pill" id="mCancel">Close</button>' +
      '<button class="pill" id="mCopy">⬇ Save it</button></div>');
    $('mCancel').onclick = closeModal;
    $('mCopy').onclick = function () { download('prompt.txt', system); };
  }

  /* ---------------------------------------------------------------- *
   * commentary mode — Waluigi and Luigi, generated a segment at a time
   * ---------------------------------------------------------------- */

  var episode = null;      // the run in progress
  var running = false;     // a segment call is in flight
  var stopRun = false;

  function renderCommentary() {
    var saved = state.episodes || [];
    var styles = RP.COMMENTARY_STYLES;
    var html = '<div class="sec-head"><h2>🎙 Commentary</h2><span class="grow"></span>' +
      (episode && !running && !episode.done ? '<button class="pill primary" id="comResume">▶ Carry on</button>' : '') +
      (running ? '<button class="pill danger" id="comStop">■ Stop</button>' : '') + '</div>' +
      '<p class="emptynote">Waluigi and Luigi, on whatever you point them at. The subject is pulled from the filed ' +
      'record — events, factions, the wire, your own chats and lore book — and written a segment at a time so a ' +
      'local model can actually finish it: one call in flight, the outline and the last thing said handed forward ' +
      'each time. A podcast runs 15–60 minutes; a deep dive runs 30 minutes to two hours.</p>';

    html += '<div class="castbar">' +
      '<input type="text" id="comTopic" placeholder="A subject — “The Iron Mandate”, “Wario’s accounting”, a character, a chat" value="' + esc(comTopic) + '">' +
      '<select id="comStyle">' + Object.keys(styles).map(function (k) {
        return '<option value="' + k + '"' + (comStyle === k ? ' selected' : '') + '>' + esc(styles[k].name) + ' — ' + esc(styles[k].blurb) + '</option>';
      }).join('') + '</select>' +
      '<label class="mins">minutes <input type="number" id="comMins" min="' + styles[comStyle].min + '" max="' + styles[comStyle].max +
        '" value="' + comMins + '"></label>' +
      '<button class="pill primary" id="comGo">🎬 Generate</button>' +
      '<button class="pill" id="comPick">📚 Use a filed subject</button>' +
      '</div>';

    if (episode) {
      var stats = RP.commentaryStats(episode.lines || []);
      var done = (episode.segments || []).filter(function (x) { return x.done; }).length;
      html += '<div class="epi-head"><b>' + esc(episode.topic) + '</b>' +
        '<span>' + esc(episode.styleName) + ' · target ' + episode.minutes + ' min</span>' +
        '<span class="meter"><span style="width:' + Math.round((done / episode.segments.length) * 100) + '%"></span></span>' +
        '<span>' + done + '/' + episode.segments.length + ' segments · ' + stats.words + ' words · ~' + stats.minutes + ' min' +
        (running ? ' · writing…' : '') + '</span>' +
        (episode.lines && episode.lines.length ? '<span class="grow"></span>' +
          '<button class="mini" id="comPlay">' + (speaking ? '⏸ Stop reading' : '🔊 Read it aloud') + '</button>' +
          '<button class="mini" id="comMd">⬇ Script</button>' +
          '<button class="mini" id="comTxt">⬇ Plain text</button>' : '') +
        '</div>';
      if (episode.sources && episode.sources.length) {
        html += '<div class="castbar">' + episode.sources.map(function (src) {
          return '<span class="chip">' + esc(src.kind) + ' · ' + esc(RP.clip(src.name, 40)) + (src.date ? ' · ' + esc(src.date) : '') + '</span>';
        }).join('') + '</div>';
      }
      html += '<div class="episode">' + (episode.lines || []).map(function (line, i) {
        return '<div class="say ' + esc(line.who) + '" data-say="' + i + '">' +
          '<b>' + (line.who === 'waluigi' ? 'Waluigi' : 'Luigi') + '</b><p>' + esc(line.text) + '</p></div>';
      }).join('') + (running ? '<div class="say pending"><em>…writing the next segment…</em></div>' : '') + '</div>';
    }

    if (saved.length) {
      html += '<div class="sec-head"><h2>Recorded</h2></div><div class="stack">' + saved.map(function (e) {
        var st = RP.commentaryStats(e.lines || []);
        return '<div class="item"><b>' + esc(e.topic) + '</b><div class="when">' + esc(e.styleName) + ' · ' +
          st.minutes + ' min · ' + st.words + ' words · ' + esc(ago(e.at || e.created)) + '</div>' +
          '<div class="acts"><button class="mini" data-epiopen="' + esc(e.id) + '">Open</button>' +
          '<button class="mini danger" data-epikill="' + esc(e.id) + '">Delete</button></div></div>';
      }).join('') + '</div>';
    }
    return html;
  }

  /** Generate the next unwritten segment, then the next, until the plan is
   *  finished or you stop it. One call at a time, always. */
  function runCommentary() {
    if (running || !episode) return;
    var next = (episode.segments || []).filter(function (x) { return !x.done; })[0];
    if (!next) {
      episode.done = true; RP.saveEpisode(state, episode); save(); render();
      toast('🎙 Finished — ' + RP.commentaryStats(episode.lines).minutes + ' minutes of it.');
      return;
    }
    running = true; stopRun = false; render();
    var previous = (episode.lines || []).slice(-3).map(function (l) {
      return (l.who === 'waluigi' ? 'WALUIGI: ' : 'LUIGI: ') + l.text;
    }).join('\n');
    var covered = (episode.segments || []).filter(function (x) { return x.done; }).map(function (x) { return x.focus; });
    callModel(RP.commentaryPrompt(episode, next, { previous: previous, covered: covered }),
      [{ role: 'user', content: 'Write part ' + next.n + '.' }], { tokens: 900 })
      .then(function (text) {
        var lines = RP.parseCommentary(text);
        if (!lines.length) throw new Error('the model wrote nothing usable');
        next.done = true; next.text = text;
        episode.lines = (episode.lines || []).concat(lines);
        episode.at = Date.now();
        RP.saveEpisode(state, episode);
        save();
      })
      .catch(function (error) {
        toast('The model stopped: ' + error.message + ' — press ▶ Carry on to try again.');
        stopRun = true;
        RP.saveEpisode(state, episode);
        save();
      })
      .then(function () {
        running = false;
        render();
        if (!stopRun && (episode.segments || []).some(function (x) { return !x.done; })) {
          window.setTimeout(runCommentary, 900);     // a breath between calls
        } else if (!stopRun) {
          episode.done = true; RP.saveEpisode(state, episode); save(); render();
          toast('🎙 Finished — ' + RP.commentaryStats(episode.lines).minutes + ' minutes of it.');
        }
      });
  }

  function renderFeed() {
    var KINDS = ['all', 'chat', 'beat', 'pin', 'note', 'whatif', 'backfill', 'roster', 'lore', 'replay', 'wire'];
    var log = (state.log || []).filter(function (e) {
      if (logKind !== 'all' && e.kind !== logKind) return false;
      if (!query) return true;
      return (e.text + ' ' + e.roomTitle + ' ' + (e.when || '')).toLowerCase().indexOf(query.toLowerCase()) >= 0;
    }).slice().reverse();
    var html = '<div class="sec-head"><h2>Feed — the world log</h2><span class="grow"></span>' +
      '<button class="pill" id="logAdd">＋ File a note</button>' +
      '<button class="pill" id="logExport">⬇ Export log</button></div>' +
      '<p class="emptynote">Every memory is filed twice: the in-world date it happened on, and the moment it was played. ' +
      'Characters are told what has already happened — and, when a filing sits after the scene they are in, that they ' +
      'cannot know it yet.</p>' +
      '<div class="castbar">' + KINDS.map(function (k) {
        return '<button class="chip ' + (logKind === k ? 'on' : '') + '" data-logkind="' + k + '">' + esc(k) + '</button>';
      }).join('') + '</div>';
    if (!log.length) return html + '<div class="emptynote">Nothing filed yet. Play a turn, or pin a line with “Remember”.</div>';
    html += '<div class="stack">' + log.map(function (e) {
      var who = (e.chars || []).map(function (id) { return (castById[id] || { name: id }).name; }).join(', ');
      return '<div class="item"><div class="when">' +
        (e.when ? '<b class="inworld">🕯 ' + esc(e.when) + '</b> · ' : '') +
        ago(e.at) + ' · ' + esc(e.kind) +
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
    var html = '<div class="sec-head"><h2>Labs</h2><span class="grow"></span>' +
      '<button class="pill" id="promptPeek">🔍 What the model is sent</button></div>';
    html += '<p class="emptynote">Character cards, stories in and out, perspective replay, memory inspection, and backups.</p>';

    // Cards and plain text: the formats everything else in this hobby uses.
    // Who you are, in every chat.
    var persona = RP.personaSheet(state);
    html += '<div class="sec-head"><h2>Your persona</h2><span class="grow"></span>' +
      '<button class="pill" id="personaEdit">✏️ Edit</button></div>' +
      '<p class="emptynote">One sheet, carried into every chat: who you are, what you look like, what you are ' +
      'carrying. Separate from the archive characters — ★ star one of those in a scene and you play them, but this ' +
      'is still you underneath.</p>' +
      '<div class="stack"><div class="item"><b>' + esc(persona.name || 'Not written yet') + '</b>' +
      (persona.voice ? '<div class="when">' + esc(persona.voice) + '</div>' : '') +
      (persona.look ? '<p>' + esc(persona.look) + '</p>' : '') +
      ((persona.items || []).length ? '<div class="tags">' + persona.items.map(function (i) {
        var it = RP.normItem(i);
        return '<span class="tag">' + esc(it.icon + ' ' + it.name) + '</span>';
      }).join('') + '</div>' : '') +
      (persona.notes ? '<p>' + esc(persona.notes) + '</p>' : '') + '</div></div>';

    // Keyword lore: exact facts, injected the moment they are named.
    var keys = state.keywords || [];
    html += '<div class="sec-head"><h2>Keyword lore</h2><span class="grow"></span>' +
      '<button class="pill" id="keyAdd">＋ New trigger</button></div>' +
      '<p class="emptynote">When one of these words turns up in the last few turns, its text goes into the prompt ' +
      'word for word, so the model cannot invent a different version of something you have already settled. ' +
      'A trigger wrapped in slashes is a regular expression — <code>/dark shores?/i</code>. ' +
      keys.length + ' filed.</p>' +
      (keys.length ? '<div class="stack">' + keys.slice().reverse().map(function (k) {
        return '<div class="item"><b>' + esc(k.always ? 'Always on' : k.keys.join(' · ')) + '</b><p>' + esc(k.text) + '</p>' +
          '<div class="acts"><button class="mini danger" data-keykill="' + esc(k.id) + '">Delete</button></div></div>';
      }).join('') + '</div>' : '');

    // Somewhere to put the state that is not the browser's cache.
    html += '<div class="sec-head"><h2>Keeping it</h2></div>' +
      '<p class="emptynote">Everything lives in this browser’s storage, and a cleared cache takes it with it. ' +
      '<b>Save to disk</b> writes the whole state — chats, memory, lore book, cards, episodes — as a real file ' +
      'beside the workflow server (<code>workflow/saves/</code>), keeping the last ten versions behind it. ' +
      'Autosave does the same quietly, at most once a minute. The download is the same bundle if you would rather ' +
      'keep it yourself.</p>' +
      '<div class="castbar">' +
      '<button class="pill primary" id="diskSave">💾 Save to disk</button>' +
      '<button class="pill" id="diskRestore">📂 Restore from disk</button>' +
      '<button class="pill' + ((state.settings.autosave || 'off') === 'on' ? ' primary' : '') + '" id="diskAuto">' +
        ((state.settings.autosave || 'off') === 'on' ? '⏱ Autosave is on' : '⏱ Autosave is off') + '</button>' +
      '<span class="chip" id="saveBadge" hidden></span>' +
      '</div>';

    html += '<div class="sec-head"><h2>Character cards &amp; stories</h2></div>' +
      '<p class="emptynote">Character cards are read and written in the usual format: <b>PNG</b> with the card in its ' +
      '<code>chara</code> chunk (SillyTavern, Chub, Agnai) and <b>JSON</b> v2 with the v1 fields alongside. Exporting an ' +
      'archive character writes the card into their own filed portrait, so the file is a picture and a card at once. ' +
      'Stories go in and out as plain text too.</p>' +
      '<div class="castbar">' +
      '<button class="pill" id="cardImport">📇 Import a card (.png / .json)</button>' +
      '<button class="pill" id="cardExport">📤 Export a character as a card</button>' +
      '<button class="pill" id="textImport">📥 Import a story (into a chat, or a new one)</button>' +
      '<button class="pill" id="briefExport">✍️ Story brief for a writing model</button>' +
      '</div>';

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
    var body = tab === 'feed' ? renderFeed()
      : tab === 'commentary' ? renderCommentary()
      : tab === 'book' ? renderBook()
      : tab === 'continue' ? renderContinuations()
      : tab === 'whatif' ? renderWhatIfs()
      : tab === 'backfills' ? renderBackfills()
      : tab === 'wire' ? renderWire()
      : tab === 'collections' ? renderCollections()
      : tab === 'charms' ? renderCharms()
      : tab === 'labs' ? renderLabs()
      : renderDiscover();
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
    box.querySelectorAll('[data-ifplay]').forEach(function (b) {
      b.onclick = function () { playWhatIf(b.dataset.ifplay); };
    });
    box.querySelectorAll('[data-ifhook]').forEach(function (b) {
      b.onclick = function () { forgeHook(whatIfById(b.dataset.ifhook)); };
    });
    box.querySelectorAll('[data-ifread]').forEach(function (b) {
      b.onclick = function () { readWhatIf(b.dataset.ifread); };
    });
    box.querySelectorAll('.ifcard').forEach(function (card) {
      card.onclick = function (e) {
        var d = e.target.dataset || {};
        if (!d.ifplay && !d.ifread && !d.ifhook) readWhatIf(card.dataset.if);
      };
    });
    ['castSort', 'castGroup', 'castRace', 'castAffil'].forEach(function (id) {
      if ($(id)) $(id).onchange = function () {
        if (id === 'castSort') castSort = $(id).value;
        if (id === 'castGroup') castGroup = $(id).value;
        if (id === 'castRace') castRace = $(id).value;
        if (id === 'castAffil') castAffil = $(id).value;
        renderDash();
      };
    });
    box.querySelectorAll('[data-castview]').forEach(function (b) {
      b.onclick = function () { castView = b.dataset.castview; renderDash(); };
    });
    on('castReset', function () {
      castSort = 'name'; castGroup = 'letter'; castRace = ''; castAffil = ''; castView = 'all';
      renderDash();
    });
    box.querySelectorAll('[data-bookkind]').forEach(function (b) {
      b.onclick = function () { bookKind = b.dataset.bookkind; renderDash(); };
    });
    box.querySelectorAll('[data-bookkill]').forEach(function (b) {
      b.onclick = function () { RP.bookRemove(state, b.dataset.bookkill); save(); renderDash(); };
    });
    box.querySelectorAll('[data-bookedit]').forEach(function (b) {
      b.onclick = function () {
        var entry = RP.bookState(state).entries.filter(function (e) { return e.id === b.dataset.bookedit; })[0];
        if (!entry) return;
        form('Edit page', [
          { k: 'name', label: 'Name', value: entry.name },
          { k: 'text', label: 'What it is', type: 'area', value: entry.text },
          { k: 'when', label: 'In-world date', value: entry.when || '' },
        ], {}, function (v) {
          entry.name = v.name.trim() || entry.name;
          entry.text = v.text.trim();
          entry.when = v.when.trim();
          entry.updated = Date.now();
          save(); renderDash();
        });
      };
    });
    on('bookNew', function () {
      form('Write a page', [
        { k: 'kind', label: 'What kind of page?', type: 'select', value: 'place',
          options: Object.keys(RP.BOOK_KINDS).map(function (k) {
            return { value: k, label: RP.BOOK_KINDS[k].icon + ' ' + RP.BOOK_KINDS[k].label };
          }) },
        { k: 'name', label: 'Name', value: '' },
        { k: 'text', label: 'What it is', type: 'area', value: '' },
        { k: 'when', label: 'In-world date (optional)', value: roomDate(room() || {}) || '' },
      ], { note: 'Handed to the model in every chat from now on, as established fact.' }, function (v) {
        if (!v.name.trim() && v.kind !== 'diary') { toast('Give the page a name.'); return; }
        RP.bookAdd(state, { kind: v.kind, name: v.name.trim(), text: v.text.trim(), when: v.when.trim(), source: 'you' });
        save(); renderDash(); toast('Filed.');
      });
    });
    on('bookSettings', function () {
      form('Filing', [
        { k: 'book', label: 'Write the book while I play', type: 'select', value: state.settings.book || 'on',
          options: [{ value: 'on', label: 'Yes — file in the background' }, { value: 'off', label: 'No — I will write it myself' }] },
        { k: 'bookEvery', label: 'File after every N played turns', value: String(state.settings.bookEvery || 3) },
        { k: 'bookBudget', label: 'Most background calls per session', value: String(state.settings.bookBudget || RP.BOOK_BUDGET) },
      ], { note: 'Filing is a separate, small model call that never runs at the same time as a roleplay turn, never more than one at once, and stops when the budget runs out — so a local model on a laptop is not asked to do two things at once.' }, function (v) {
        state.settings.book = v.book;
        state.settings.bookEvery = Math.max(2, Math.min(12, parseInt(v.bookEvery, 10) || 3));
        state.settings.bookBudget = Math.max(0, Math.min(400, parseInt(v.bookBudget, 10) || RP.BOOK_BUDGET));
        save(); renderDash();
      });
    });
    on('bookExport', function () {
      download('waluipedia-lorebook.json', JSON.stringify(RP.exportBundle(state, { chats: false, memory: false, user: false }), null, 2));
    });
    box.querySelectorAll('[data-logkind]').forEach(function (b) {
      b.onclick = function () { logKind = b.dataset.logkind; renderDash(); };
    });
    on('makeIf', createScenarioForm);
    on('allIfs', function () { tab = 'whatif'; render(); });
    on('allBackfills', function () { tab = 'backfills'; render(); });
    on('allContinue', function () { tab = 'continue'; render(); });
    box.querySelectorAll('[data-post]').forEach(function (b) {
      b.onclick = function () { openScenario(posts.filter(function (p) { return p.id === b.dataset.post; })[0]); };
    });
    box.querySelectorAll('[data-collection]').forEach(function (b) {
      b.onclick = function () { openCollection(collections.filter(function (c) { return c.id === b.dataset.collection; })[0]); };
    });
    box.querySelectorAll('[data-wireview]').forEach(function (b) {
      b.onclick = function () { wireView = b.dataset.wireview; renderDash(); };
    });
    if ($('wireSort')) $('wireSort').onchange = function () { wireSort = $('wireSort').value; renderDash(); };
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
    // ---- commentary ----
    if ($('comTopic')) $('comTopic').oninput = function () { comTopic = $('comTopic').value; };
    if ($('comStyle')) $('comStyle').onchange = function () {
      comStyle = $('comStyle').value;
      var def = RP.COMMENTARY_STYLES[comStyle];
      comMins = Math.max(def.min, Math.min(def.max, comMins || def.default));
      renderDash();
    };
    if ($('comMins')) $('comMins').onchange = function () { comMins = parseInt($('comMins').value, 10) || comMins; };
    on('comGo', function () {
      var topic = ($('comTopic') && $('comTopic').value || '').trim();
      if (!topic) { toast('Give them something to argue about.'); return; }
      comTopic = topic;
      episode = RP.commentaryPlan({
        style: comStyle, topic: topic, minutes: comMins,
        sources: RP.commentarySources(archiveIndex, topic, 12),
      });
      episode.at = Date.now();
      // Save the plan straight away: a run that fails halfway should still
      // leave the reader whatever was written.
      RP.saveEpisode(state, episode);
      save();
      if (!episode.sources.length) toast('Nothing filed matches that — they will argue from first principles.');
      render();
      runCommentary();
    });
    on('comResume', runCommentary);
    on('comStop', function () { stopRun = true; toast('Stopping after this segment.'); });
    on('comPick', function () {
      // The subject can be anything the archive already has, or a chat.
      var choices = (archive.events || []).slice(-24).reverse().map(function (e) {
        return { label: '📜 ' + e.name + (e.date ? ' — ' + RP.clip(e.date, 40) : ''), value: e.name };
      }).concat((state.rooms || []).slice(0, 8).map(function (r) {
        return { label: '💬 ' + r.title + ' (your chat)', value: r.sceneName || r.title };
      })).concat(((state.book || {}).entries || []).slice(-8).reverse().map(function (b) {
        return { label: '📓 ' + b.name, value: b.name };
      }));
      list('Pick a subject', choices, function (value) {
        comTopic = value;
        renderDash();
        if ($('comTopic')) $('comTopic').value = value;
      });
    });
    on('comMd', function () { download(RP.slug(episode.topic) + '.commentary.md', RP.commentaryScript(episode)); });
    on('comTxt', function () {
      download(RP.slug(episode.topic) + '.commentary.txt', (episode.lines || []).map(function (l) {
        return (l.who === 'waluigi' ? 'WALUIGI: ' : 'LUIGI: ') + l.text;
      }).join('\n\n'));
    });
    on('comPlay', function () { speaking ? stopReading() : readEpisode(episode); });
    box.querySelectorAll('[data-epiopen]').forEach(function (b) {
      b.onclick = function () {
        episode = (state.episodes || []).filter(function (e) { return e.id === b.dataset.epiopen; })[0];
        comTopic = episode.topic; comStyle = episode.style; comMins = episode.minutes;
        renderDash();
      };
    });
    box.querySelectorAll('[data-epikill]').forEach(function (b) {
      b.onclick = function () {
        state.episodes = (state.episodes || []).filter(function (e) { return e.id !== b.dataset.epikill; });
        if (episode && episode.id === b.dataset.epikill) episode = null;
        save(); renderDash();
      };
    });
    on('personaEdit', function () {
      var p = RP.personaSheet(state);
      form('Your persona', [
        { k: 'name', label: 'Name', value: p.name },
        { k: 'voice', label: 'In one line — who are you?', value: p.voice },
        { k: 'look', label: 'What do you look like?', type: 'area', value: p.look },
        { k: 'items', label: 'Carrying — "🗝 a brass key | bent", one per line. This seeds your pack in every new chat.',
          type: 'area',
          value: (p.items || []).map(RP.normItem).map(function (i) {
            return (i.icon ? i.icon + ' ' : '') + i.name + (i.note ? ' | ' + i.note : '');
          }).join('\n') },
        { k: 'notes', label: 'Anything else the cast should know', type: 'area', value: p.notes },
      ], { note: 'Handed to the model in every chat, under “THE USER PLAYS”. The kit becomes your pack — the grid on your own sheet — the first time a scene needs it.' }, function (v) {
        p.name = v.name.trim(); p.voice = v.voice.trim(); p.look = v.look.trim();
        p.items = v.items.split(/\n/).map(function (line) {
          var item = RP.normItem(line);
          return item.name ? item : null;
        }).filter(Boolean);
        p.notes = v.notes.trim();
        if (p.name && !(state.user.name || '').trim()) state.user.name = p.name;
        save(); render();
        toast('That is you now, in every chat.');
      });
    });
    on('keyAdd', function () {
      form('A trigger and its fact', [
        { k: 'keys', label: 'Trigger words, comma separated (or /a regex/i)', value: '' },
        { k: 'text', label: 'What is true about it — this goes in word for word', type: 'area', value: '' },
      ], { note: 'Keep it short and exact. Fifty words of fact beats five hundred of atmosphere.' }, function (v) {
        if (!RP.addKeyword(state, v)) { toast('It needs at least one trigger word.'); return; }
        save(); renderDash();
        toast('Filed — it will appear whenever that word does.');
      });
    });
    box.querySelectorAll('[data-keykill]').forEach(function (b) {
      b.onclick = function () { RP.removeKeyword(state, b.dataset.keykill); save(); renderDash(); };
    });
    on('diskSave', function () { saveToDisk('chatroom'); });
    on('diskRestore', restoreFromDisk);
    on('diskAuto', function () {
      state.settings.autosave = (state.settings.autosave || 'off') === 'off' ? 'on' : 'off';
      save(); renderDash();
      toast(state.settings.autosave === 'on'
        ? 'Autosave on — the whole state is written to disk at most once a minute.'
        : 'Autosave off.');
    });
    on('promptPeek', promptInspector);
    on('cardImport', importCard);
    on('cardExport', function () {
      castPicker({ title: 'Export as a character card', note: 'Pick one — the export writes their card into their own portrait.', suggest: false },
        function (chosen) { exportCard(chosen[0], true); });
    });
    on('textImport', importTranscript);
    on('briefExport', function () {
      var rooms = (state.rooms || []).slice(0, 20);
      if (!rooms.length) { toast('Play something first.'); return; }
      list('Which chat?', rooms.map(function (r) {
        return { label: r.title + ' — ' + RP.counter(r) + ' turns', value: r.id };
      }), function (id) {
        var r = rooms.filter(function (x) { return x.id === id; })[0];
        var brief = RP.storyBrief(state, r, {});
        download(RP.slug(r.title) + '.brief.md', brief);
        toast('Brief written — ' + brief.length + ' characters, fluff removed.');
      });
    });
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
      kind: 'chat', roomId: r.id, roomTitle: r.title, when: roomDate(r),
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
      beats: opts.beats || [], opener: opts.opener || '', date: opts.date || '',
      style: (state.settings && state.settings.style) || 'novel',
      persona: (state.user && state.user.persona) || '',
      // Scenario settings: the sheets everyone walks in carrying.
      statePreset: opts.statePreset || (state.settings && state.settings.statePreset) || 'rpg',
      setup: opts.setup || {},
      states: opts.states || null,
      mechanics: opts.mechanics || (state.settings && state.settings.mechanics) || 'on',
      sequelOf: opts.sequelOf || '',
      canon: opts.canon || '',
      // Which filing this scene came out of, so the cast can quote it.
      sourceId: opts.sourceId || '',
      sourceKind: opts.sourceKind || '',
    }));
    // Date it from the filing it came out of, not from today's clock.
    var opened = room();
    if (opened && !opened.date && opened.sourceId) {
      var filed = RP.sourceRecord(opened, archive);
      if (filed && filed.date) opened.date = RP.clip(filed.date, 90);
    }
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
        beats: scene.beats || [], date: scene.date || '',
        // The filing this scene came out of, so the cast can quote it.
        sourceId: scene.id || scene.name, sourceKind: 'scene',
        opener: 'Scene — ' + scene.name + (scene.location ? ' · ' + scene.location : '') + (scene.date ? ' · ' + scene.date : ''),
      });
    });
  }

  /** A wire post, played. The post is the scene, its replies are the beats,
   *  and playing it marks the post used so the "unused" view keeps shrinking. */
  function openScenario(post) {
    if (!post) return;
    var scenario = RP.scenarioFromPost(post, castById);
    castPicker({
      title: RP.clip(scenario.name, 60),
      note: 'From the WAHwire, ' + post.timestamp + '. The suggested cast is everyone the post names — add whoever else was in the room.',
      preselect: scenario.suggestedCast.map(function (c) { return c.id; }),
    }, function (picked) {
      startGroup(picked, {
        scene: scenario.scene, sceneName: scenario.name, sceneImage: scenario.image,
        beats: scenario.beats,
        opener: 'WAHwire — ' + post.authorName + ', ' + post.timestamp + ':\n“' + RP.clip(post.content, 400) + '”',
      });
      var opened = room();
      RP.markPostUsed(state, post.id, opened);
      RP.logEvent(state, {
        kind: 'wire', roomId: opened.id, roomTitle: opened.title, when: roomDate(opened),
        chars: picked.map(function (c) { return c.id; }),
        text: 'Played the wire post by ' + post.authorName + ': ' + RP.clip(post.content, 180),
        tags: post.tags,
      });
      save(); render();
    });
  }

  /** A collection, played: the archive already decided who belongs together. */
  function openCollection(collection) {
    if (!collection) return;
    castPicker({
      title: collection.name,
      note: collection.summary || collection.title,
      preselect: collection.members.slice(0, 6).map(function (c) { return c.id; }),
    }, function (picked) {
      startGroup(picked, {
        scene: collection.summary || collection.title,
        sceneName: collection.name,
        opener: 'Collection — ' + collection.name + '. ' + RP.clip(collection.title || '', 160),
      });
    });
  }

  /* ---------------------------------------------------------------- *
   * hooks — the opener is written by the model, from the real lore
   * ---------------------------------------------------------------- */

  var forging = {};   // scenario id -> true while the model is writing

  function hookFor(id) { return (state.hooks || {})[id] || null; }

  /** Ask the model for a strong, specific opener. It is given the brief, the
   *  character cards, the script and whatever these characters already did in
   *  this reader's other chats — and a list of the ways it is not allowed to
   *  start. A weak answer is rejected once and asked again. */
  function forgeHook(scenario, opts) {
    opts = opts || {};
    if (!scenario || forging[scenario.id]) return Promise.resolve(hookFor(scenario.id));
    forging[scenario.id] = true;
    render();
    var ctx = RP.hookContext(state, scenario);
    var system = RP.hookPrompt(scenario, ctx);
    function ask(nudge) {
      return callModel(system + (nudge || ''), [{ role: 'user', content: 'Write the opening of this scene.' }], { tokens: 420 });
    }
    return ask('').then(function (text) {
      var hook = RP.parseHook(text, scenario);
      if (hook && !RP.hookIsWeak(hook, scenario)) return hook;
      // One retry, told exactly what was wrong with the first answer.
      return ask('\n\nYOUR LAST ATTEMPT WAS REJECTED for being generic. Name the people, the place and the objects ' +
        'from the filed material above, in the first two sentences. Start in the middle of an action.')
        .then(function (second) { return RP.parseHook(second, scenario) || hook; });
    }).then(function (hook) {
      if (!hook) throw new Error('no hook');
      state.hooks = state.hooks || {};
      state.hooks[scenario.id] = hook;
      save();
      return hook;
    }).catch(function (error) {
      console.warn('hook forge failed', error);
      if (!opts.quiet) toast('The model did not answer — using the archive’s own cold open.');
      return null;
    }).then(function (hook) {
      forging[scenario.id] = false;
      render();
      return hook;
    });
  }

  function whatIfById(id) {
    return whatifs.concat(backfills).filter(function (s) { return s.id === id; })[0];
  }

  /** The brief, in full, before anyone commits to playing it. */
  function readWhatIf(id) {
    var s = whatIfById(id);
    if (!s) return;
    openModal('<h3>' + esc(s.name) + '</h3>' +
      '<p class="sub">' + (KIND_ICON[s.kind] || '') + ' ' + esc(s.kindLabel) + ' · ' + s.beats.length + ' beats · ' +
      esc(s.source) + (s.date ? ' · ' + esc(s.date) : '') + '</p>' +
      '<div class="brief">' + RP.md(s.brief) + '</div>' +
      (s.beats.length ? '<h4>The script</h4><div class="stack">' + s.beats.map(function (b) {
        return '<div class="item"><div class="when">' + esc(b.time) + '</div><b>' + esc(b.beat) + '</b>' +
          (b.detail ? '<p>' + esc(b.detail) + '</p>' : '') + '</div>';
      }).join('') + '</div>' : '') +
      (s.questions.length ? '<h4>Questions the table has to answer</h4><ul>' +
        s.questions.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') + '</ul>' : '') +
      '<div class="actions"><button class="pill" id="mCancel">Close</button>' +
      '<button class="pill" id="mExport">⬇ Export brief</button>' +
      '<button class="pill primary" id="mOk">Play this</button></div>');
    $('mCancel').onclick = closeModal;
    $('mExport').onclick = function () {
      download(RP.slug(s.name) + '.md', '# ' + s.name + '\n\n' + s.premise + '\n\n' + s.brief +
        '\n\n## The script\n\n' + s.beats.map(function (b) { return '- **' + b.time + ' — ' + b.beat + '** ' + b.detail; }).join('\n') +
        '\n\n_Composed by the Waluipedia chatroom from ' + s.source + '._\n');
    };
    $('mOk').onclick = function () { closeModal(); playWhatIf(id); };
  }

  /** Play one: pick the cast, set the starting state, then open on an
   *  opener the model wrote from the filed material (or the cold open). */
  function playWhatIf(id) {
    var s = whatIfById(id);
    if (!s) return;
    castPicker({
      title: (hookFor(s.id) || {}).title || s.name,
      note: RP.clip(s.premise, 220),
      preselect: s.suggestedCast.map(function (c) { return c.id; }),
      extra: s.suggestedCast.filter(function (c) { return !castById[c.id]; }),
      setup: true,
    }, function (picked, setup) {
      var start = function (hook) {
        var opts = RP.scenarioRoomOpts(s);
        opts.opener = (hook && hook.open) || RP.coldOpen(s);
        opts.sceneName = (hook && hook.title) || s.name;
        opts.setup = (setup && setup.states) || s.setup || {};
        opts.statePreset = (setup && setup.preset) || s.statePreset || 'rpg';
        opts.states = s.states || null;                 // sequels carry sheets in
        if (hook && hook.stakes) opts.scene = opts.scene + '\n\nWHAT IS AT STAKE RIGHT NOW\n' + hook.stakes;
        startGroup(picked, opts);
        var opened = room();
        RP.markPostUsed(state, s.id, opened);
        if (s.kind === 'backfill') RP.noteBackfillUse(state, s.id);
        if (s.kind === 'sequel' && s.sequelOf) {
          opened.sequelOf = s.sequelOf;
          var parent = (state.rooms || []).filter(function (x) { return x.id === s.sequelOf; })[0];
          if (parent) parent.sequelCount = (parent.sequelCount || 0) + 1;
        }
        RP.logEvent(state, {
          kind: s.kind === 'backfill' ? 'backfill' : 'whatif', roomId: opened.id, roomTitle: opened.title, when: roomDate(opened),
          chars: picked.map(function (c) { return c.id; }),
          text: 'Opened “' + opened.sceneName + '” (' + s.kindLabel + ').',
          tags: s.tags,
        });
        save(); render();
      };
      var hook = hookFor(s.id);
      if (hook) { start(hook); return; }
      toast('Writing the opener from the filed material…');
      forgeHook(s, { quiet: true }).then(start);
    });
  }

  /* ---------------------------------------------------------------- *
   * character cards — the PNG/JSON format the rest of the world uses
   * ---------------------------------------------------------------- */

  /** A PNG card is also a portrait. Shrink it so a 200 KB face does not eat
   *  the browser's storage, and hand back a data URL. */
  function shrinkImage(bytes, size) {
    return new Promise(function (done) {
      var url = URL.createObjectURL(new Blob([bytes], { type: 'image/png' }));
      var img = new window.Image();
      img.onload = function () {
        try {
          var side = Math.min(size || 256, Math.max(img.width, img.height));
          var canvas = document.createElement('canvas');
          canvas.width = side; canvas.height = side;
          var ctx = canvas.getContext('2d');
          if (!ctx) throw new Error('no canvas');
          // Square crop from the middle: portraits are shown in circles.
          var cut = Math.min(img.width, img.height);
          ctx.drawImage(img, (img.width - cut) / 2, (img.height - cut) / 2, cut, cut, 0, 0, side, side);
          done(canvas.toDataURL('image/png'));
        } catch (e) { done(''); }
        URL.revokeObjectURL(url);
      };
      img.onerror = function () { URL.revokeObjectURL(url); done(''); };
      img.src = url;
    });
  }

  /** What went wrong, in words, when a file is not what it looked like. */
  var IMPORT_TROUBLE = {
    'png-plain': 'That PNG is just a picture — there is no character card stored inside it. Export it from your ' +
      'card editor with “PNG card”, or import the .json instead.',
    'png-broken': 'That PNG has a card chunk, but it could not be decoded. The .json version of the same card will work.',
    'json-broken': 'That file starts like JSON but does not parse — something truncated it. Try re-exporting it.',
    'json-unknown': 'That is JSON, but not a character card, a chat log or a chatroom bundle.',
    empty: 'That file is empty.',
    unknown: 'There was nothing readable in that file.',
  };

  /** Every import goes through here: v1 and v2 cards, PNG cards, JSONL and
   *  JSON chat logs, chatroom bundles, and plain transcripts. The file is
   *  sniffed first so a refusal can say what the file actually looked like. */
  /** What an import actually did, in words. “Imported 0 chats” over a
   *  bundle whose chats were already on file read like a failure — it was
   *  a merge, and the toast should say so. */
  function bundleReport(stats) {
    var bits = [];
    if (stats.rooms) bits.push(stats.rooms + ' new chat' + (stats.rooms === 1 ? '' : 's'));
    if (stats.roomsUpdated) bits.push(stats.roomsUpdated + ' chat' + (stats.roomsUpdated === 1 ? '' : 's') + ' updated to the bundle\u2019s newer copy');
    if (bits.length) return 'Imported ' + bits.join(' and ') + '.';
    if (stats.roomsSame) {
      return 'Nothing new to import \u2014 ' + (stats.roomsSame === 1 ? 'that chat is' : 'those ' + stats.roomsSame + ' chats are') +
        ' already on file (your copy is as new or newer).';
    }
    return 'Imported the bundle \u2014 no chats inside it.';
  }

  function importAny(bytes, fileName, intoRoom) {
    var found = RP.sniffImport(bytes);
    if (found.kind === 'bundle') {
      var stats = RP.importBundle(state, found.bundle, 'merge');
      save(); buildBoard(); render();
      toast(bundleReport(stats));
      return;
    }
    if (found.kind === 'chatlog' || found.kind === 'transcript') {
      readTurnsInto(found.turns, fileName, intoRoom, found.why);
      return;
    }
    if (found.kind !== 'card') {
      toast(IMPORT_TROUBLE[found.kind] || ('That file looked like ' + found.why + '.'));
      return;
    }
    var art = RP.isPng(bytes) ? shrinkImage(bytes, 256) : Promise.resolve('');
    art.then(function (dataUrl) {
      var raw = found.card;
      if (dataUrl) raw.__image = dataUrl;
      var char = RP.parseCharacterCard(raw);
      if (!char) { toast('That card has no name in it, so there is nobody to import.'); return; }
      state.newChars = (state.newChars || []).filter(function (c) { return c.id !== char.id; });
      state.newChars.unshift(char);
      castById[char.id] = char;
      cast = cast.filter(function (c) { return c.id !== char.id; }).concat([char]);
      RP.logEvent(state, {
        kind: 'roster', chars: [char.id],
        text: 'Imported the character card “' + char.name + '” from ' + (fileName || 'a file') + '.',
      });
      if (char.card && char.card.scenario) {
        RP.bookAdd(state, { kind: 'fact', name: char.name + ' — card scenario', text: char.card.scenario, source: 'you' });
      }
      var open = intoRoom || room();
      if (open) {
        RP.addToRoom(open, char);
        var greeting = RP.cardGreeting(char);
        if (greeting) {
          open.messages.push({ id: RP.uid(), role: 'char', charId: char.id, text: greeting, at: Date.now(), alts: [greeting], alt: 0, imported: true });
        }
        save(); render();
        toast('📇 ' + char.name + ' walked into this chat' + (char.image ? ', portrait and all.' : '.'));
        return;
      }
      save(); render();
      toast('📇 ' + char.name + ' imported — they are in the cast now.');
    });
  }

  /** Turns from a transcript or a chat log, into a chat or a new one. */
  function readTurnsInto(turns, label, target, why) {
    if (!turns.length) { toast('Nothing readable in that.'); return; }
    if (target) {
      var added = RP.appendTranscript(target, turns, { divider: true, source: label });
      state.active = target.id;
      RP.logEvent(state, {
        kind: 'chat', roomId: target.id, roomTitle: target.title, when: roomDate(target),
        chars: (target.cast || []).map(function (c) { return c.id; }),
        text: 'Read ' + added + ' turns into this chat' + (label ? ' from ' + label : '') + '.',
      });
      save(); render();
      offerCatchUp(target);
      toast('Read in ' + added + ' turns from ' + (why || 'that file') + ' — carry on from the bottom.');
      return;
    }
    buildFromTurns(turns, label);
  }

  /** Any image → PNG bytes, through a canvas. */
  function toPngBytes(bytes, side) {
    return new Promise(function (done) {
      var url = URL.createObjectURL(new Blob([bytes]));
      var img = new window.Image();
      img.onload = function () {
        try {
          var canvas = document.createElement('canvas');
          canvas.width = Math.min(side || 512, img.width || side);
          canvas.height = Math.round(canvas.width * ((img.height || 1) / (img.width || 1)));
          canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
          var base64 = canvas.toDataURL('image/png').split(',')[1];
          var binary = atob(base64), out = new Uint8Array(binary.length);
          for (var i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i);
          done(out);
        } catch (e) { done(null); }
        URL.revokeObjectURL(url);
      };
      img.onerror = function () { URL.revokeObjectURL(url); done(null); };
      img.src = url;
    });
  }

  /** Import a card or a story from a file. */
  function importCard(intoRoom) {
    pickFile('.png,.json,.jsonl,.txt,.md,application/json,image/png,text/plain', 'bytes', function (bytes, file) {
      importAny(bytes, file && file.name, intoRoom || room());
    });
  }

  /** Export as JSON, or as their own portrait with the card inside it. */
  function exportCard(char, asPng) {
    var opts = {
      date: roomDate(room() || {}),
      greeting: (char.card && char.card.first_mes) || '',
    };
    if (!asPng) {
      download(RP.slug(char.name) + '.card.json', JSON.stringify(RP.toCharacterCard(char, opts), null, 2));
      return;
    }
    var url = imageUrl(char.image);
    if (!char.image) { toast('No portrait on file — exporting the JSON card instead.'); exportCard(char, false); return; }
    window.fetch(url).then(function (res) { return res.arrayBuffer(); }).then(function (buffer) {
      var bytes = new Uint8Array(buffer);
      // Most archive portraits are JPEGs and a character card has to be a
      // PNG, so anything that is not already one is redrawn as one.
      if (RP.isPng(bytes)) return bytes;
      return toPngBytes(bytes, 512);
    }).then(function (bytes) {
      var out = bytes && RP.cardToPng(bytes, char, opts);
      if (!out) { toast('That portrait could not be turned into a PNG. Exporting JSON instead.'); exportCard(char, false); return; }
      downloadBytes(RP.slug(char.name) + '.card.png', out, 'image/png');
      toast('📇 Card written into ' + char.name + '’s portrait — ' + Math.round(out.length / 1024) + ' KB.');
    }).catch(function () { toast('Could not read the portrait. Exporting JSON instead.'); exportCard(char, false); });
  }

  /** Paste or open a transcript. It can start a new chat, or be read into
   *  the one already open so play carries on from the bottom of it. */
  function importTranscript(opts) {
    opts = opts || {};
    var here = opts.into || null;
    form('Import a story' + (here ? ' into “' + RP.clip(here.sceneName || here.title, 30) + '”' : ''), [
      { k: 'text', label: 'Paste it here — “Name: line” per turn, or plain prose', type: 'area', value: '' },
      { k: 'title', label: here ? 'Where it came from (optional)' : 'Title (optional)', value: '' },
      { k: 'where', label: 'Where does it go?', type: 'select', value: here ? 'here' : 'new',
        options: [
          { value: 'here', label: here ? 'Into this chat — appended, and we carry on from the end' : 'Into the most recent chat' },
          { value: 'new', label: 'Into a new chat of its own' },
        ] },
    ], {
      note: 'Named speakers are matched to the cast; anything unattributed becomes your own turns. Leave the box ' +
        'empty and you will be asked for a .txt, .md or .json file instead.',
      ok: 'Read it in',
    }, function (v) {
      var target = v.where === 'here'
        ? (here || room() || (state.rooms || []).slice().sort(function (a, b) { return b.updated - a.updated; })[0])
        : null;
      if (!v.text.trim()) {
        pickFile('.txt,.md,.json,.jsonl,.png,text/plain,application/json,image/png', 'bytes', function (bytes, file) {
          importAny(bytes, v.title || (file && file.name), target);
        });
        return;
      }
      readStory(v.text, v.title, target);
    });
  }

  /** Pasted text goes through the same sniffing as a file. */
  function readStory(text, label, target) {
    importAny(String(text || ''), label, target);
  }

  function buildFromText(text, title) {
    buildFromTurns(RP.parseTranscript(text, {}), title);
  }

  function buildFromTurns(turns, title) {
    if (!turns.length) { toast('Nothing readable in that.'); return; }
    var names = {};
    turns.forEach(function (t) { if (t.who) names[t.who.toLowerCase()] = true; });
    var picked = cast.filter(function (c) {
      return names[c.name.toLowerCase()] || Object.keys(names).some(function (n) { return c.name.toLowerCase().indexOf(n) >= 0; });
    }).slice(0, 6);
    castPicker({
      title: 'Who is in this story?',
      note: turns.length + ' turns read. The cast below was matched by name — add anyone the text calls by another name.',
      preselect: picked.map(function (c) { return c.id; }),
    }, function (chosen) {
      var built = RP.roomFromTranscript(turns, chosen, {
        title: title || RP.clip(turns[0].text, 40),
        sceneName: title || 'Imported story',
        date: roomDate({}),
      });
      pushRoom(built);
      RP.logEvent(state, { kind: 'chat', roomId: built.id, roomTitle: built.title, when: roomDate(built), chars: chosen.map(function (c) { return c.id; }), text: 'Imported a story of ' + turns.length + ' turns.' });
      save(); render();
      toast('Read in ' + turns.length + ' turns. Carry on from the bottom.');
    });
  }

  /** After an import there is a backlog. Reading every stretch of a
   *  300-turn story is a hundred calls nobody wants to spend, so the
   *  default is the smart plan: bigger stretches, the live end of the chat
   *  always read, and the rest of the budget spent on the densest parts. */
  function offerCatchUp(r) {
    var plan = RP.backlogFor(r, state.settings.bookEvery);
    if ((state.settings.book || 'on') === 'off' || plan.calls < 2) return;
    catchUpDialog(r);
  }

  function catchUpDialog(r) {
    var plan = RP.backlogFor(r, state.settings.bookEvery);
    var budget = RP.bookBudgetLeft(state);
    var smartCalls = Math.max(1, Math.min(Number(state.settings.smartCalls || 6), budget || 6));
    var smart = RP.smartBacklog(r, { maxCalls: smartCalls });
    openModal('<h3>File this into the lore book?</h3>' +
      '<p class="sub">There are <b>' + plan.pending + ' unfiled turns</b> here. Reading every short stretch would be ' +
      '<b>' + plan.calls + ' calls</b> — which is silly for an import.</p>' +
      '<p class="sub"><b>The smart read</b> does it in <b>' + smart.jobs.length + '</b>: bigger stretches of ' +
      smart.chunk + ' turns, the end of the chat always read (that is what the next turn follows on from), and the ' +
      'rest of the budget spent on the parts that actually establish something — names, places, numbers, things ' +
      'said out loud. It covers <b>' + smart.covered + '</b> of ' + smart.pending + ' turns' +
      (smart.skipped ? ', skipping ' + smart.skipped + ' of small talk' : '') + '.</p>' +
      '<label for="f_calls">Calls to spend</label>' +
      '<input type="number" id="f_calls" min="1" max="60" value="' + smart.jobs.length + '">' +
      '<label for="f_budget">Session budget (' + budget + ' left of ' + (state.settings.bookBudget || RP.BOOK_BUDGET) + ')</label>' +
      '<input type="number" id="f_budget" min="0" max="400" value="' + (state.settings.bookBudget || RP.BOOK_BUDGET) + '">' +
      '<div class="actions"><button class="pill" id="mCancel">Not now</button>' +
      '<button class="pill" id="mAll">Read everything (' + plan.calls + ')</button>' +
      '<button class="pill primary" id="mOk">Smart read</button></div>');
    $('mCancel').onclick = closeModal;
    function budgetFromForm() {
      var b = parseInt($('f_budget').value, 10);
      if (!isNaN(b)) state.settings.bookBudget = Math.max(0, Math.min(400, b));
    }
    $('mOk').onclick = function () {
      budgetFromForm();
      var calls = Math.max(1, parseInt($('f_calls').value, 10) || smart.jobs.length);
      state.settings.smartCalls = calls;
      closeModal();
      catchUp(r, RP.smartBacklog(r, { maxCalls: calls }).jobs, 'smart');
    };
    $('mAll').onclick = function () {
      budgetFromForm();
      closeModal();
      catchUp(r, RP.backlogJobs(r, state.settings.bookEvery, 200), 'every stretch');
    };
  }

  /** Queue whichever plan was chosen. The worker still runs one at a time
   *  and still stops at the budget. */
  function catchUp(r, jobs, how) {
    if (!jobs || !jobs.length) { toast('Nothing to file.'); return; }
    var budget = RP.bookBudgetLeft(state);
    if (jobs.length > budget) {
      jobs = jobs.slice(0, Math.max(1, budget));
      toast('Budget allows ' + jobs.length + ' — raise it in ⚙ Filing if you want the rest.');
    }
    jobs.forEach(function (job) {
      RP.queuePush(state, {
        key: job.key || (r.id + ':catchup:' + job.from), kind: 'extract',
        roomId: r.id, roomTitle: r.title, when: roomDate(r),
        turns: job.turns.map(function (m) {
          return {
            who: m.who || (m.role === 'user' ? (state.user.name || 'You') : charOf(r, m.charId).name),
            text: m.text !== undefined && m.role === undefined ? m.text : RP.textOf(m),
          };
        }),
      });
    });
    // Everything queued counts as filed, so the live worker does not do it
    // again as the chat carries on.
    r.bookAt = (r.messages || []).filter(RP.visible).length;
    save(); render();
    toast('📓 Filing ' + jobs.length + ' stretch' + (jobs.length === 1 ? '' : 'es') + ' (' + how + ') in the background.');
    pumpBook();
  }

  /** Continue a played scene: same people, same wounds, no recap. */
  function openSequel(r) {
    if (!r) return;
    form('Sequel — after ' + RP.clip(r.sceneName || r.title, 40), [
      { k: 'title', label: 'Title (optional)', value: '' },
      { k: 'premise', label: 'What has changed since? (optional)', type: 'area', value: '' },
      { k: 'carry', label: 'Carry the state over', type: 'select', value: 'yes',
        options: [{ value: 'yes', label: 'Yes — same HP, MP, conditions and inventory' },
                  { value: 'no', label: 'No — everyone starts fresh' }] },
    ], { note: 'The sequel keeps the cast and everything they are carrying, opens in the middle rather than on a recap, and inherits any beats that never fired.', ok: 'Compose the sequel' }, function (v) {
      var sequel = RP.sequelFrom(r, state, { title: v.title, premise: v.premise });
      sequel.sequelOf = r.id;
      if (v.carry === 'no') sequel.states = null;
      state.scenarios = (state.scenarios || []);
      state.scenarios.unshift(sequel);
      state.scenarios = state.scenarios.slice(0, 30);
      save(); buildBoard();
      toast('Writing the opener…');
      forgeHook(sequel, { quiet: true }).then(function () { readWhatIf(sequel.id); });
    });
  }

  /** Describe a scenario; the page writes the brief from the archive. The
   *  model is not involved — matching names against filed records is cheap,
   *  instant, and gives a better brief than a paragraph of invention. */
  function createScenarioForm() {
    form('Create a scenario', [
      { k: 'title', label: 'Title (optional)', value: '' },
      { k: 'text', label: 'Describe it — who, where, and what changes', type: 'area', value: '' },
    ], {
      note: 'Name real people, places, bodies or filed sessions and the page will pull what the archive already has on ' +
        'them into the brief, and take the beats from the matching filing’s own timeline. Nothing is sent to the model.',
      ok: 'Compose it',
    }, function (v) {
      if (!v.text.trim()) { toast('Describe it first — a sentence or a page, either works.'); return; }
      var composed = RP.composeScenario(v, archive, castById);
      state.scenarios = (state.scenarios || []).filter(function (x) { return x.id !== composed.id; });
      state.scenarios.unshift(composed);
      state.scenarios = state.scenarios.slice(0, 30);
      RP.logEvent(state, { kind: 'whatif', text: 'Wrote a scenario: ' + composed.name, chars: composed.suggestedCast.map(function (c) { return c.id; }) });
      save(); buildBoard(); tab = 'whatif'; render();
      readWhatIf(composed.id);
    });
  }

  /** Find whoever the model just walked into the scene. Exact id, then exact
   *  name, then a contains match — and if the archive has never heard of
   *  them, the caller invents a card rather than refusing the entrance. */
  function resolveChar(name) {
    var want = String(name || '').toLowerCase().trim();
    if (!want) return null;
    if (castById[RP.slug(want)]) return castById[RP.slug(want)];
    var exact = cast.filter(function (c) { return c.name.toLowerCase() === want; })[0];
    if (exact) return exact;
    return cast.filter(function (c) {
      return c.name.toLowerCase().indexOf(want) >= 0 || want.indexOf(c.name.toLowerCase()) >= 0;
    })[0] || null;
  }

  function openRoom(id) { state.active = id; save(); render(); }

  /* ---------------------------------------------------------------- *
   * the chat view
   * ---------------------------------------------------------------- */

  function charOf(r, id) { return (r.cast || []).filter(function (c) { return c.id === id; })[0] || castById[id] || { id: id, name: 'Character' }; }

  /* ---------------------------------------------------------------- *
   * macros — one click instead of typing "I swing at him"
   * ---------------------------------------------------------------- */

  var MACROS = [
    { id: 'attack', icon: '🗡', label: 'Attack', mp: 0, text: 'I attack {target} with what I am holding.' },
    { id: 'cast', icon: '✦', label: 'Cast', mp: 5, text: 'I work the magic I know at {target}, and it costs me.' },
    { id: 'guard', icon: '🛡', label: 'Guard', mp: 0, text: 'I put myself between {target} and whatever is coming.' },
    { id: 'talk', icon: '💬', label: 'Talk down', mp: 0, text: 'I try to talk {target} out of it, fast and plainly.' },
    { id: 'sneak', icon: '🌑', label: 'Slip away', mp: 0, text: 'I take the chance to get out of sight.' },
    { id: 'look', icon: '🔍', label: 'Look closer', mp: 0, text: 'I stop and look at this properly — what have I missed?' },
  ];

  function userMacros() {
    return MACROS.concat(state.settings.macros || []);
  }

  function macroButtons(r) {
    return '<span class="macros">' + userMacros().slice(0, 7).map(function (m) {
      return '<button class="qa mac" data-macro="' + esc(m.id) + '" title="' + esc(m.text) + '">' +
        esc(m.icon) + ' ' + esc(m.label) + '</button>';
    }).join('') + '<button class="qa mac add" id="macroAdd" title="Write your own">＋</button></span>';
  }

  /** Play a macro: pick a target if the scene has one, spend what it costs,
   *  and write the attempt — the roll then decides whether it lands. */
  function runMacro(r, macro) {
    var targets = RP.speakableCast(r);
    function fire(target) {
      var sheet = RP.playerCharacter(r) ? RP.sheetFor(r, RP.playerCharacter(r).id) : null;
      if (macro.mp && sheet && sheet.mp) {
        if (sheet.mp.value < macro.mp) { toast('Not enough MP — ' + sheet.mp.value + ' left, that costs ' + macro.mp + '.'); return; }
        var line = RP.applyChange(sheet, { kind: 'mp', op: '-', value: macro.mp });
        if (line) {
          r.messages.push({ id: RP.uid(), role: 'state', at: Date.now(), lines: [line] });
        }
      }
      $('input').value = macro.text.replace('{target}', target ? target.name : 'them');
      $('composer').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    }
    if (!/\{target\}/.test(macro.text) || targets.length < 2) { fire(targets[0]); return; }
    list(macro.icon + ' ' + macro.label + ' — who?', targets.map(function (c) {
      return { label: c.name, value: c.id };
    }), function (id) { fire(targets.filter(function (c) { return c.id === id; })[0]); });
  }

  /** The roll, the state changes and any beat that fired, as one quiet
   *  strip along the bottom of the turn they belong to. */
  function metaStrip(m) {
    var bits = [];
    if (m.fate) bits.push('<span class="roll">' + esc(m.fate) + '</span>');
    (m.changes || []).forEach(function (line) { bits.push('<span>' + esc(line) + '</span>'); });
    if (m.beatFired) bits.push('<span class="beat">⏩ ' + esc(RP.clip(m.beatFired, 90)) + '</span>');
    (m.consulted || []).forEach(function (name) {
      bits.push('<span class="read" title="Read out of the archive for this turn">🔎 ' + esc(RP.clip(name, 40)) + '</span>');
    });
    if (m.edited) bits.push('<span class="quiet">edited</span>');
    return bits.length ? '<div class="metastrip">' + bits.join('') + '</div>' : '';
  }

  /** One HP/MP bar. */
  function bar(kind, pool) {
    var pct = pool.max ? Math.round((pool.value / pool.max) * 100) : 0;
    return '<span class="pool ' + kind + (pct <= 30 ? ' low' : '') + '">' +
      '<span class="fill" style="width:' + pct + '%"></span>' +
      '<span class="num">' + kind.toUpperCase() + ' ' + pool.value + '/' + pool.max + '</span></span>';
  }

  /** How many slots a sheet's grid shows: the profile decided it when the
   *  sheet was written (RP.packSizeFor), and the reader always gets 12. */
  function kitSize(r, id) {
    var sheet = RP.sheetFor(r, id);
    return (sheet && sheet.slots) || (id === RP.PLAYER_ID ? 12 : 8);
  }

  /** The kit, as a grid you can read at a glance: what is in hand is lit,
   *  everything else is stowed, and the empty slots keep the shape. On
   *  your own pack an empty slot is a button — click it to put something
   *  in rather than opening the whole sheet editor. */
  function kitGrid(r, id) {
    var sheet = RP.sheetFor(r, id);
    if (!sheet) return '';
    var isYou = id === RP.PLAYER_ID;
    return '<span class="kit' + (isYou ? ' big' : '') + '">' + RP.gridSlots(sheet, kitSize(r, id)).map(function (item, at) {
      if (!item) {
        return isYou
          ? '<button class="slot empty add" data-additem="' + esc(id) + '" title="Put something in your pack">+</button>'
          : '<span class="slot empty"></span>';
      }
      return '<button class="slot' + (item.equipped ? ' held' : '') + '" data-item="' + esc(id) + '|' + at + '" ' +
        'title="' + esc(item.name + (item.note ? ' — ' + item.note : '')) + '">' +
        '<span class="ico">' + esc(item.icon) + '</span>' +
        (item.qty > 1 ? '<span class="qty">' + item.qty + '</span>' : '') + '</button>';
    }).join('') + '</span>';
  }

  /** Edit a sheet by hand — the model is not the only one allowed to. */
  function editSheet(id) {
    var r = room();
    var sheet = RP.sheetFor(r, id);
    if (!sheet) return;
    form('State — ' + sheet.name, [
      { k: 'hp', label: 'HP (value / max, blank for none)', value: sheet.hp ? sheet.hp.value + '/' + sheet.hp.max : '' },
      { k: 'mp', label: 'MP (value / max, blank for none)', value: sheet.mp ? sheet.mp.value + '/' + sheet.mp.max : '' },
      { k: 'flags', label: 'Conditions — "bleeding 3 -2hp | a deep cut", one per line (turns, cost a turn, note)', type: 'area',
        value: Object.keys(sheet.flags || {}).map(function (f) {
          var c = sheet.flags[f] && typeof sheet.flags[f] === 'object' ? sheet.flags[f] : { note: '', turns: 0 };
          return f.replace(/_/g, ' ') + (c.turns ? ' ' + c.turns : '') + (c.effect ? ' ' + c.effect : '') + (c.note ? ' | ' + c.note : '');
        }).join('\n') },
      { k: 'items', label: 'Carrying — "a brass key | bent, from the ledger room", one per line, ✊ for in hand',
        type: 'area',
        value: (sheet.items || []).map(RP.normItem).map(function (i) {
          return (i.equipped ? '✊ ' : '') + i.name + (i.qty > 1 ? ' x' + i.qty : '') + (i.note ? ' | ' + i.note : '');
        }).join('\n') },
      { k: 'stats', label: '⚔ might · 🧠 wits · 🗣 sway · 🍀 luck — four numbers 0–3, they lean on the dice',
        value: sheet.stats ? RP.STAT_KEYS.map(function (k) { return sheet.stats[k]; }).join(' ') : '' },
      { k: 'slots', label: 'Pack slots (3–12)', value: String(sheet.slots || '') },
      { k: 'status', label: 'Physical note', value: sheet.status || '' },
    ], { note: 'The model reads this before every turn and writes to it with stage directions. Changing it here changes what the scene believes.' }, function (v) {
      function pool(text, old) {
        var hit = /^\s*(\d+)\s*\/\s*(\d+)\s*$/.exec(text);
        if (!hit) return /^\s*$/.test(text) ? null : old;
        return { value: Number(hit[1]), max: Number(hit[2]) };
      }
      sheet.hp = pool(v.hp, sheet.hp);
      sheet.mp = pool(v.mp, sheet.mp);
      sheet.flags = {};
      v.flags.split(/\n/).forEach(function (line) {
        var cond = RP.parseCondition(line);
        if (cond) sheet.flags[cond.key] = { note: cond.note, turns: cond.turns, effect: cond.effect };
      });
      sheet.items = v.items.split(/\n/).map(function (line) {
        var held = /^\s*✊\s*/.test(line);
        var parts = line.replace(/^\s*✊\s*/, '').split('|');
        var head = parts[0].trim();
        var qty = /\sx(\d{1,3})$/i.exec(head);
        if (qty) head = head.slice(0, qty.index).trim();
        if (!head) return null;
        return { name: head, note: (parts[1] || '').trim(), equipped: held, qty: qty ? Number(qty[1]) : 1 };
      }).filter(Boolean);
      var nums = v.stats.trim().split(/[\s,\/]+/).map(Number);
      if (nums.length === 4 && nums.every(function (n) { return !isNaN(n); })) {
        sheet.stats = {};
        RP.STAT_KEYS.forEach(function (k, i) { sheet.stats[k] = Math.max(0, Math.min(3, Math.round(nums[i]))); });
        sheet.statsBy = 'hand';           // a hand-set value is never re-derived
      }
      var slots = parseInt(v.slots, 10);
      if (!isNaN(slots)) sheet.slots = Math.max(3, Math.min(12, slots));
      sheet.status = v.status.trim();
      r.updated = Date.now();
      save(); render();
    });
  }

  var auditFlag = 0;

  function renderChat() {
    var r = room();
    $('dash').hidden = true;
    $('chatview').hidden = false;

    var face = r.cast[0] || {};
    var progress = RP.beatProgress(r);
    var turnCount = (r.messages || []).filter(RP.visible).length;
    // A quiet count of what does not add up, refreshed as the scene plays.
    var scan = RP.auditRoom(state, r, archive);
    auditFlag = scan.dates.length + scan.quiet.length + scan.book.length;
    var fateLevel = state.settings.fate || 'normal';
    // A heads-up display rather than a title bar: where you are, when you
    // are, how far the script has run, how dangerous the world is set to be.
    $('chatTop').innerHTML =
      '<button class="roundbtn" id="backBtn" title="Back to Discover (Esc)">‹</button>' +
      avatar(face, 34) +
      '<span class="title"><b>' + esc(r.sceneName || r.title) + '</b>' +
      '<span>' + esc(r.kind === 'group' ? r.cast.map(function (c) { return c.name; }).join(' · ') : (face.title || '')) + '</span></span>' +
      '<span class="hud">' +
        '<button class="stat" id="dateBtn" title="When is this happening, in-world?"><i>🕯</i>' + esc(RP.clip(roomDate(r) || 'undated', 24)) + '</button>' +
        (r.clock ? '<span class="stat quiet" title="The time in the scene"><i>🕰</i>' + esc(RP.clip(r.clock, 22)) + '</span>' : '') +
        (progress.total ? '<button class="stat' + (r.beatsPaused ? ' off' : '') + '" id="nextBeat" ' +
          'title="' + (r.beatsPaused ? 'The script is paused — click to fire the next beat' : 'Fire the next filed beat') + '">' +
          '<i>⏩</i>' + (r.beatsPaused ? 'paused ' : 'beat ') + progress.at + '/' + progress.total +
          '<span class="meter"><span style="width:' + Math.round((progress.at / progress.total) * 100) + '%"></span></span></button>' : '') +
        '<button class="stat fate-' + esc(fateLevel) + '" id="fateBtn" title="How hard the world pushes back"><i>🎲</i>' + esc(fateLevel) + '</button>' +
        '<span class="stat quiet" title="Turns played"><i>💬</i>' + turnCount + '</span>' +
        '<span class="stat quiet" id="bookBadge" hidden></span>' +
      '</span>' +
      '<span class="grow"></span>' +
      (r.kind === 'group' ? '<button class="pill" id="continueBtn">➤ Continue</button>' : '') +
      (r.mechanics === 'off' ? '' : '<button class="pill' + (showStates ? ' primary' : '') + '" id="statesBtn">🩺 Party</button>') +
      '<button class="pill' + (r.privacy === 'private' ? ' primary' : '') + '" id="privacyBtn" ' +
        'title="' + (r.privacy === 'private' ? 'Private: nobody else speaks until you open it again'
          : r.privacy === 'open' ? 'Open: the scene may answer even in a quiet moment'
          : 'Reading the room: quiet turns are left alone, loud ones are answered') + '">' +
        (r.privacy === 'private' ? '🔒 Alone' : r.privacy === 'open' ? '🔓 Open' : '👂 Reads the room') + '</button>' +
      '<button class="pill" id="undoBtn" title="Undo the last turn (Ctrl+Z)"' +
        ((r.undo || []).length ? '' : ' disabled') + '>↩</button>' +
      '<button class="pill" id="redoBtn" title="Redo"' + ((r.redo || []).length ? '' : ' disabled') + '>↪</button>' +
      '<button class="pill' + (auditFlag ? ' warn' : '') + '" id="sceneBtn" ' +
        'title="The scene: its date, its fixed facts, the audit, the book, a sequel">⋯' +
        (auditFlag ? ' ' + auditFlag : '') + '</button>' +
      '<button class="pill" id="panelBtn">☰</button>';

    // The sheets, visible in the chat rather than buried in a menu. The
    // reader's own pack renders first: it is the one they can actually use.
    if (r.mechanics !== 'off') RP.ensurePlayerSheet(state, r);
    var sheetBar = $('statebar');
    if (sheetBar) {
      sheetBar.hidden = !showStates || r.mechanics === 'off';
      var playerId = RP.playerSheetId(r);
      var away = Object.keys(r.states || {}).filter(function (id) {
        return id !== RP.PLAYER_ID && r.states[id] && r.states[id].present === false;
      });
      var sheetIds = (r.states && r.states[playerId] ? [playerId] : [])
        .concat(Object.keys(r.states || {}).filter(function (id) { return id !== playerId; }));
      sheetBar.innerHTML = (!showStates ? '' : sheetIds.map(function (id) {
        var sheet = r.states[id];
        if (!sheet || sheet.present === false) return '';
        var isYou = id === playerId;
        var who = charOf(r, id);
        // NOT a <button>: the slots inside are buttons, and HTML closes a
        // button the moment another one opens — the whole grid would be
        // reparented out of the card. A span with the same handler is safe.
        return '<span class="sheet' + (isYou ? ' you' : '') + '" role="button" tabindex="0" data-sheet="' + esc(id) + '" title="Edit state">' +
          (isYou ? '<span class="here" title="You — always in the scene">🧍</span>'
            : '<span class="here" data-here="' + esc(id) + '" title="' +
          (sheet.present === false ? 'Not in the scene — click to bring them back' : 'In the scene — click to write them out') +
          '">' + (sheet.present === false ? '◌' : '◉') + '</span>') +
          '<span class="nm">' + (isYou ? userAvatar(22) : avatar(who, 22)) + esc(sheet.name) + '</span>' +
          (sheet.hp ? bar('hp', sheet.hp) : '') + (sheet.mp ? bar('mp', sheet.mp) : '') +
          kitGrid(r, id) +
          '<span class="chips">' +
          (sheet.stats ? '<span class="flag stat" title="might · wits · sway · luck (0–3) — they lean on the dice when your attempt uses them">' +
            esc(RP.statLine(sheet.stats)) + '</span>' : '') +
          Object.keys(sheet.flags || {}).map(function (f) {
            var cond = sheet.flags[f] && typeof sheet.flags[f] === 'object' ? sheet.flags[f] : { note: '', turns: 0 };
            return '<span class="flag' + (cond.effect ? ' biting' : '') + '" ' +
              'title="' + esc((cond.note || f.replace(/_/g, ' ')) + (cond.effect ? ' · ' + cond.effect + ' a turn' : '')) + '">' +
              RP.condIcon(f) + ' ' + esc(f.replace(/_/g, ' ')) + (cond.turns ? ' ' + cond.turns : '') +
              (cond.effect ? ' ' + esc(cond.effect) : '') + '</span>';
          }).join('') + Object.keys(sheet.counters || {}).map(function (c) {
            return '<span class="flag num">' + esc(c.replace(/_/g, ' ')) + ' ' + sheet.counters[c] + '</span>';
          }).join('') + (sheet.status ? '<span class="flag note">' + esc(sheet.status) + '</span>' : '') + '</span>' +
          '</span>';
      }).join('')) + (showStates && away.length
        ? '<button class="sheet away" id="showAway" title="Not in the scene — click to bring somebody back">' +
          '◌ ' + away.length + ' not here</button>' : '');
    }

    var html = r.messages.map(function (m, i) {
      // Legacy rows from before the meta was folded into the turn card.
      if (m.role === 'fate') return '<div class="metaline"><span class="roll">' + esc(m.pill || '') + '</span></div>';
      if (m.role === 'state') {
        return '<div class="metaline">' + (m.lines || []).map(function (l) {
          return '<span>' + esc(l) + '</span>';
        }).join('') + '</div>';
      }
      if (m.role === 'scene') {
        return '<div class="scene-card' + (m.beat ? ' beat' : '') + '"><span class="kicker">' +
          (m.beat ? '⏩ Beat' : 'Scene') + '</span>' + esc(RP.textOf(m)) + '</div>';
      }
      if (m.role === 'world') {
        return '<article class="turn world' + (m.muted ? ' muted' : '') + '">' +
          '<div class="who"><span class="globe">' + esc(RP.NARRATORS[RP.narrator(state)].icon) + '</span>' +
          '<b>' + esc(RP.NARRATORS[RP.narrator(state)].name) + '</b>' +
          '<button class="speak" data-speak="' + i + '" title="Read aloud">▶</button></div>' +
          '<div class="bubble">' + RP.md(RP.applyTints(RP.textOf(m), r.tints)) + '</div>' +
          metaStrip(m) +
          '<div class="acts">' +
          '<button data-retry="' + i + '" title="Another take">↻</button>' +
          '<button class="' + (m.pinned ? 'on' : '') + '" data-pin="' + i + '" title="Pin">📌</button>' +
          '<button data-edit="' + esc(m.id) + '" title="Edit">✏️</button>' +
          '<button class="' + (m.muted ? 'on' : '') + '" data-mute="' + esc(m.id) + '" title="Mute">' + (m.muted ? '🙈' : '👁') + '</button>' +
          '<button data-drop="' + esc(m.id) + '" title="Delete">🗑</button>' +
          '</div></article>';
      }
      var mine = m.role === 'user';
      // If you have ★ starred somebody, your turns are theirs: the label and
      // the face should say so rather than showing your account name.
      var playing = RP.playerCharacter(r);
      var who = mine ? ((playing && playing.name) || state.user.name || 'You') : charOf(r, m.charId).name;
      var swipes = (m.alts && m.alts.length > 1)
        ? '<span class="swipe"><button data-swipe="-1" data-i="' + i + '">‹</button>' + ((m.alt || 0) + 1) + ' / ' + m.alts.length + '<button data-swipe="1" data-i="' + i + '">›</button></span>' : '';
      return '<article class="turn ' + (mine ? 'user' : 'char') + (m.error ? ' err' : '') +
        (m.muted ? ' muted' : '') + (m.imported ? ' imported' : '') + '">' +
        '<div class="who">' + (mine ? (playing ? avatar(playing, 24) : userAvatar(24)) : avatar(charOf(r, m.charId), 24)) +
        '<b>' + esc(who) + '</b>' + (mine ? '' : '<span class="badge">archive</span>') +
        (mine ? '' : '<button class="speak" data-speak="' + i + '" title="Read aloud">▶</button>') + '</div>' +
        '<div class="bubble">' + RP.md(RP.applyTints(RP.textOf(m), r.tints)) + '</div>' +
        ((m.ooc || []).length
          ? '<div class="metastrip">' + m.ooc.map(function (n) {
              return '<span class="ooc" title="Sent to the model, not spoken aloud">(( ' + esc(n) + ' ))</span>';
            }).join('') + '</div>'
          : '') +
        metaStrip(m) +
        (m.error ? '<div class="acts"><span>This notice stays out of the model’s context.</span></div>' :
          '<div class="acts">' + swipes +
          (mine ? '' : '<button data-retry="' + i + '" title="Another take">↻</button>') +
          '<button class="' + (m.react === 'up' ? 'on' : '') + '" data-react="up" data-i="' + i + '">👍</button>' +
          '<button class="' + (m.react === 'down' ? 'on' : '') + '" data-react="down" data-i="' + i + '">👎</button>' +
          '<button class="' + (m.pinned ? 'on' : '') + '" data-pin="' + i + '" title="Pin">📌</button>' +
          '<button data-remember="' + i + '" title="File into the world log">🧠</button>' +
          '<button data-edit="' + esc(m.id) + '" title="Edit this line">✏️</button>' +
          '<button class="' + (m.muted ? 'on' : '') + '" data-mute="' + esc(m.id) + '" ' +
            'title="' + (m.muted ? 'Muted — the model cannot see this' : 'Mute: keep it on screen, hide it from the model') + '">' +
            (m.muted ? '🙈' : '👁') + '</button>' +
          '<button data-drop="' + esc(m.id) + '" title="Delete this line">🗑</button>' +
          '<button data-fork="' + esc(m.id) + '" title="Branch a new chat from here">🌿</button>' +
          '</div>') +
        '</article>';
    }).join('');
    if (!r.messages.length) {
      html = '<div class="emptynote">Say something, or press ➤ Continue to let ' +
        esc((r.cast[0] || {}).name || 'them') + ' open the scene.</div>';
    }
    var handback = (!busy && r.handback)
      ? '<div class="handback"><b>Your turn.</b> ' + esc(r.handback) + '</div>' : '';
    $('stream').innerHTML = '<div class="stream-inner">' + html + handback +
      (busy ? '<div class="turn typing"><em>…writing…</em></div>' : '') + '</div>';
    $('stream').scrollTop = $('stream').scrollHeight;
    var playingNow = RP.playerCharacter(r);
    if ($('input')) {
      $('input').placeholder = playingNow
        ? 'Write as ' + playingNow.name + ' — *actions in asterisks*, "speech in quotes"'
        : 'Write your turn — *actions in asterisks*, "speech in quotes"';
    }

    // Who answers next, and the two things you always want to press.
    $('speakers').innerHTML =
      '<span class="acts">' +
        '<button class="qa" id="qaContinue" title="Let the scene move without you (n)">➤ Continue</button>' +
        (progress.total && progress.at < progress.total ? '<button class="qa" id="qaBeat">⏩ Next beat</button>' : '') +
        (r.mechanics === 'off' ? '' : '<button class="qa" id="qaRisk" title="Attempt something the world can refuse">🎲 Attempt…</button>') +
        '<button class="qa" id="qaAdd" title="Bring somebody into this scene">＋ New</button>' +
        (r.mechanics === 'off' ? '' : macroButtons(r)) +
        '<button class="qa' + (autoLeft ? ' on' : '') + '" id="qaAuto" title="Let the scene play itself for a few turns">' +
          (autoLeft ? '■ Stop (' + autoLeft + ')' : '▶ Auto') + '</button>' +
      '</span>' +
      '<span class="emptynote">Next:</span>' +
      ((state.settings.world || 'on') === 'off' ? '' :
        '<button class="sp world ' + (r.next === 'world' ? 'on' : '') + '" data-speaker="world" ' +
        'title="' + esc(RP.NARRATORS[RP.narrator(state)].blurb) + '">' +
        esc(RP.NARRATORS[RP.narrator(state)].icon) + ' ' + esc(RP.NARRATORS[RP.narrator(state)].name) + '</button>') +
      RP.presentCast(r).map(function (c) {
        var mine = r.youPlay === c.id;
        var on = !mine && r.next === c.id;
        return '<button class="sp ' + (on ? 'on' : '') + (mine ? ' mine' : '') + '" data-speaker="' + esc(c.id) + '">' +
          avatar(c, 24) + esc(c.name) +
          '<span class="star' + (mine ? ' on' : '') + '" data-star="' + esc(c.id) + '" ' +
          'title="' + (mine ? 'You play them — the model never speaks for them' : 'Mark as the character you play') + '">' +
          (mine ? '★' : '☆') + '</span></button>';
      }).join('');

    renderPanel();
    wireChat();
  }

  /** Four ways out of a chat, for four different readers. */
  function exportMenu(r, c) {
    var brief = RP.storyBrief(state, r, {});
    list('Export “' + RP.clip(r.title, 40) + '”', [
      { label: '✍️ Story brief — trimmed for a writing model (' + Math.round(brief.length / 1000) + 'k chars, no ids, no swipes, no noise)', value: 'brief' },
      { label: '📦 Full chat — JSON another chatroom can import, with memory and lore', value: 'full' },
      { label: '📄 Transcript — markdown, for filing into the wiki', value: 'md' },
      { label: '📝 Plain text — just the turns', value: 'txt' },
      { label: '📇 ' + c.name + ' as a character card', value: 'card' },
    ], function (pick) {
      if (pick === 'brief') { download(RP.slug(r.title) + '.brief.md', brief); toast('Trimmed to ' + brief.length + ' characters.'); return; }
      if (pick === 'full') { download(RP.slug(r.title) + '.chat.json', JSON.stringify(RP.chatExport(state, r), null, 2)); return; }
      if (pick === 'md') { download(RP.slug(r.title) + '.md', RP.transcript(r)); return; }
      if (pick === 'txt') {
        download(RP.slug(r.title) + '.txt', (r.messages || []).filter(RP.visible).map(function (m) {
          var who = m.role === 'user' ? (state.user.name || 'You') : charOf(r, m.charId).name;
          return who + ': ' + RP.textOf(m);
        }).join('\n\n'));
        return;
      }
      if (pick === 'card') { exportCard(c, true); }
    });
  }

  function openPanelFate() {
    form('Fate', [
      { k: 'fate', label: 'How often does the world push back?', type: 'select', value: state.settings.fate || 'normal',
        options: [
          { value: 'off', label: 'Off — whatever you write, works' },
          { value: 'gentle', label: 'Gentle — mostly you, occasionally a price' },
          { value: 'normal', label: 'Normal — costs and wrenches are common, failure happens' },
          { value: 'harsh', label: 'Harsh — the world is against you and the cast argues back' },
        ] },
    ], { note: 'Rolled before each reply to something you attempted, and handed to the model as an instruction.' },
    function (v) { state.settings.fate = v.fate; save(); render(); });
  }

  function renderPanel() {
    var r = room();
    var c = r.cast[0] || {};
    var plays = interactions(c.id);
    var style = RP.STYLES[r.style] || RP.STYLES.novel;
    var pinned = r.messages.filter(function (m) { return m.pinned; }).length;
    var mem = (state.chars || []).filter(function (m) { return m.id === c.id; })[0];
    $('charpanel').innerHTML =
      '<div class="cp-head">' + avatar(c, 72) + '<div class="body"><h3 title="' + esc(r.title) + '">' +
      esc(r.kind === 'group' ? RP.clip(r.sceneName || r.title, 60) : c.name) + '</h3>' +
      '<div class="by">By @' + esc(c.handle || 'waluipedia') + '</div>' +
      '<div class="by">' + plays + (plays === 1 ? ' interaction' : ' interactions') + '</div></div></div>' +
      '<div class="cp-row"><button class="iconbtn" id="cpSettings" title="Chat settings">⚙</button>' +
      '<div class="votes" title="Ratings steer later turns"><button id="cpUp">👍</button><span>' +
      RP.tasteFor(state, c.id).up + '</span><button id="cpDown">👎</button><span>' +
      RP.tasteFor(state, c.id).down + '</span></div><span class="grow"></span>' +
      '<button class="iconbtn" id="cpExport" title="Export transcript">⬇</button></div>' +
      '<div class="cp-desc">' +
      (c.title ? '<b>' + esc(c.title) + '</b><br>' : '') +
      esc(c.status || c.summary || r.scene || 'A chat in the Waluipedia archive.') + '</div>' +
      // People invented during play have no portrait in the archive, so the
      // description stands in for one.
      (r.cast.filter(function (x) { return x.invented; }).length
        ? '<div class="cp-desc invented"><b>Described, not drawn</b>' +
          r.cast.filter(function (x) { return x.invented; }).map(function (x) {
            return '<p><b>' + esc(x.name) + '</b>' + (x.title ? ' — ' + esc(x.title) : '') +
              (x.look ? '<br>' + esc(x.look) : '') + '</p>';
          }).join('') + '</div>'
        : '') +
      '<div class="cp-menu">' +
      menuItem('cpNew', '✎', 'New chat', '') +
      menuItem('cpVoice', '🔊', 'Voice', (state.settings.voice === 'on' ? 'Auto · Qwen' : 'Qwen · on tap')) +
      menuItem('cpHistory', '🕘', 'History', RP.roomCountFor(state.rooms, c.id) + '') +
      menuItem('cpCustomize', '🖌', 'Customize', style.name) +
      menuItem('cpPinned', '📌', 'Pinned', String(pinned)) +
      menuItem('cpPersona', '🧑', 'Persona', r.persona || state.user.persona || (RP.personaSheet(state).name || 'Not set')) +
      menuItem('cpStyle', '✨', 'Style', style.name) +
      menuItem('cpMemory', '🧠', 'Memory', mem ? String(mem.notes.length) : '0') +
      menuItem('cpReplay', '🎭', 'Replay', 'Perspective') +
      menuItem('cpScript', '⏱', 'Script', r.beats && r.beats.length ? (r.autoBeats ? 'Auto' : 'Manual') : 'None') +
      menuItem('cpDirector', '🎬', 'Director', state.settings.director === 'off' ? 'Off' : 'On · max ' + (state.settings.maxChain || RP.MAX_CHAIN)) +
      menuItem('cpNote', '📝', 'Special instructions', (r.note || state.settings.note) ? 'set' : 'none') +
      menuItem('cpTaste', '👍', 'What I like', RP.tasteState(state).likes.length + ' / ' + RP.tasteState(state).dislikes.length) +
      menuItem('cpImport', '📥', 'Import into this chat', 'story · card') +
      menuItem('cpCard', '📇', 'Character card', 'PNG · JSON') +
      menuItem('cpRename', '✏️', 'Rename chat', r.title) +
      menuItem('cpDelete', '🗑', 'Delete chat', '') +
      menuItem('cpFate', '🎲', 'Fate', (state.settings.fate || 'normal') === 'off' ? 'Off — you always succeed' : (state.settings.fate || 'normal')) +
      '</div>' +
      '<div class="cp-note">Memory is shared across chats: what is said here is remembered in the next room. Export from Labs.</div>';
    wirePanel();
  }

  /** A row in the character panel. The value is shortened by CSS, not by
   *  cutting the string, so hovering still shows the whole thing and no
   *  word is ever left half-written. */
  function menuItem(id, ico, label, value) {
    return '<button id="' + id + '"><span class="ico">' + ico + '</span><span class="label">' + label + '</span>' +
      (value ? '<span class="value" title="' + esc(value) + '">' + esc(value) + '</span>' : '') +
      '<span class="chev">›</span></button>';
  }

  function wireChat() {
    var r = room();
    var on = function (id, fn) { var node = $(id); if (node) node.onclick = fn; };
    on('privacyBtn', function () {
      r.privacy = r.privacy === 'private' ? 'open' : r.privacy === 'open' ? '' : 'private';
      save(); render();
      toast(r.privacy === 'private' ? '🔒 Private — nobody else will speak until you open it.'
        : r.privacy === 'open' ? '🔓 Open — the scene answers even when you are muttering.'
        : '👂 Reading the room — quiet turns are left alone.');
    });
    on('dateBtn', function () { openDate(r); });
    on('sceneBtn', function () {
      list('This scene', [
        { label: '🧾 Audit — the date, the cast, the book' + (auditFlag ? ' (' + auditFlag + ' to look at)' : ' (all clear)'), value: 'audit' },
        { label: '📍 Fixed facts — place, clothing, time' + (Object.keys(r.facts || {}).length ? ' (' + Object.keys(r.facts).length + ')' : ''), value: 'facts' },
        { label: '🕯 When is this happening — ' + (roomDate(r) || 'undated'), value: 'date' },
        { label: '📓 The lore book', value: 'book' },
        { label: '📖 Write the sequel', value: 'sequel' },
      ], function (pick) {
        if (pick === 'audit') { runAudit(r); return; }
        if (pick === 'facts') { openFacts(r); return; }
        if (pick === 'date') { openDate(r); return; }
        if (pick === 'book') { tab = 'book'; state.active = ''; save(); render(); return; }
        openSequel(r);
      });
    });
    function runAudit(r) {
      var report = RP.auditRoom(state, r, archive);
      openModal('<h3>🧾 Audit</h3>' +
        '<p class="sub">The scene is dated <b>' + esc(roomDate(r) || 'nothing yet') + '</b>. ' +
        'Everything below is something that does not add up.</p>' +
        (report.ok ? '<p class="sub">Nothing to report — the date matches the filing, everybody here has spoken ' +
          'recently, and no page is filed after this scene.</p>' : '') +
        (report.dates.length ? '<h4>The date</h4><div class="stack">' + report.dates.map(function (d) {
          return '<div class="item"><b>' + esc(d.what) + ' is ' + esc(d.is) + ', should be ' + esc(d.should) + '</b>' +
            '<p>' + esc(d.why) + '</p></div>';
        }).join('') + '</div>' : '') +
        (report.quiet.length ? '<h4>Not really here</h4><div class="stack">' + report.quiet.map(function (q) {
          return '<div class="item"><b>' + esc(q.name) + '</b><p>Has not spoken or been mentioned for ' +
            q.silence + ' turns. Writing them out stops them being staged.</p></div>';
        }).join('') + '</div>' : '') +
        (report.book.length ? '<h4>Filed in the future</h4><div class="stack">' + report.book.map(function (b) {
          return '<div class="item"><b>' + esc(b.name) + '</b><p>Dated ' + esc(b.when) + ', after this scene.</p></div>';
        }).join('') + '</div>' : '') +
        '<div class="actions"><button class="pill" id="mCancel">Close</button>' +
        (report.ok ? '' : '<button class="pill primary" id="mOk">Fix all of it</button>') + '</div>');
      $('mCancel').onclick = closeModal;
      if ($('mOk')) {
        $('mOk').onclick = function () {
          RP.pushUndo(r, 'the audit');
          var done = RP.applyAudit(state, r, report, {});
          closeModal(); save(); render();
          toast('🧾 ' + (done.join('; ') || 'nothing to do') + '.');
        };
      }
    }
    function openFacts(r) {
      var facts = r.facts || {};
      var keys = Object.keys(facts);
      openModal('<h3>What is fixed in this scene</h3>' +
        '<p class="sub">Where you are, what you are wearing, what time it is. Once these are filed the narrator may ' +
        'not quietly change them — no renaming the outpost into a clinic halfway through.</p>' +
        (r.clock ? '<p class="sub">🕰 <b>' + esc(r.clock) + '</b></p>' : '') +
        (keys.length ? '<div class="stack">' + keys.map(function (k) {
          return '<div class="item"><b>' + esc(k.replace(/_/g, ' ')) + '</b><p>' + esc(facts[k]) + '</p>' +
            '<div class="acts"><button class="mini danger" data-factkill="' + esc(k) + '">Forget</button></div></div>';
        }).join('') + '</div>' : '<p class="sub">Nothing filed yet — the narrator files these as it names them.</p>') +
        '<div class="actions"><button class="pill" id="mCancel">Close</button>' +
        '<button class="pill primary" id="mOk">＋ Add one</button></div>');
      $('mCancel').onclick = closeModal;
      $('mOk').onclick = function () {
        closeModal();
        form('A fixed fact', [
          { k: 'name', label: 'What kind of fact (place, wearing, weather…)', value: 'place' },
          { k: 'value', label: 'What it is', value: '' },
        ], {}, function (v) {
          if (!v.value.trim()) return;
          r.facts = r.facts || {};
          r.facts[RP.slug(v.name) || 'fact'] = v.value.trim();
          r.updated = Date.now(); save(); render();
        });
      };
      $('modal').querySelectorAll('[data-factkill]').forEach(function (b) {
        b.onclick = function () { delete r.facts[b.dataset.factkill]; closeModal(); save(); render(); };
      });
    }
    function openDate(r) {
      form('When is this happening?', [
        { k: 'date', label: 'In-world date', value: roomDate(r) },
      ], {
        note: 'Regal Empire Standard Calendar — "5 Aethel, 1040 BF". Months run Firstlight, Chillwind, Veridia, Bloom, ' +
          'Floria, Efferd, Highsun, Harvestide, Aethel, Darkmoon, Frostfall, Deepwinter, and BF counts up. ' +
          'The model is told which filings are already history and which have not happened yet, measured from this date.',
      }, function (v) { r.date = v.date.trim(); r.updated = Date.now(); save(); render(); });
    }
    on('backBtn', function () { state.active = ''; save(); render(); });
    on('fateBtn', function () { if ($('cpFate')) $('cpFate').click(); else openPanelFate(); });
    on('undoBtn', function () {
      var what = RP.undo(r);
      save(); render();
      toast(what ? 'Undid ' + what + '.' : 'Nothing to undo.');
    });
    on('redoBtn', function () {
      var what = RP.redo(r);
      save(); render();
      toast(what ? 'Redid ' + what + '.' : 'Nothing to redo.');
    });
    on('bookBtn', function () { tab = 'book'; state.active = ''; save(); render(); });
    on('qaContinue', function () { generate(); });
    on('qaBeat', function () { if ($('nextBeat')) $('nextBeat').click(); });
    $('speakers').querySelectorAll('[data-macro]').forEach(function (b) {
      b.onclick = function () {
        var macro = userMacros().filter(function (m) { return m.id === b.dataset.macro; })[0];
        if (macro) runMacro(r, macro);
      };
    });
    on('macroAdd', function () {
      form('A button of your own', [
        { k: 'icon', label: 'Icon', value: '⚑' },
        { k: 'label', label: 'Label', value: '' },
        { k: 'text', label: 'What it writes — use {target} for whoever you pick', type: 'area', value: '' },
        { k: 'mp', label: 'MP it costs (0 for none)', value: '0' },
      ], { note: 'It writes the attempt for you; the roll still decides whether it works.' }, function (v) {
        if (!v.label.trim() || !v.text.trim()) { toast('It needs a label and something to say.'); return; }
        state.settings.macros = (state.settings.macros || []).concat([{
          id: 'mac_' + RP.slug(v.label), icon: v.icon.trim() || '⚑', label: v.label.trim(),
          text: v.text.trim(), mp: parseInt(v.mp, 10) || 0,
        }]).slice(0, 6);
        save(); render();
      });
    });
    on('qaAuto', function () {
      if (autoLeft) { autoLeft = 0; render(); toast('Stopped.'); return; }
      autoLeft = Math.max(2, Number(state.settings.autoplay || 6));
      render();
      toast('Playing ' + autoLeft + ' turns on their own — press ■ to stop, or just type.');
      generate();
    });
    on('qaAdd', function () {
      list('Bring somebody in', [
        { label: '🎭 From the archive — pick who walks in', value: 'cast' },
        { label: '✨ Invent one — a name, a job, a face', value: 'new' },
        { label: '📇 From a character card (.png / .json)', value: 'card' },
        { label: '🤖 Let the model choose and write them in', value: 'ai' },
      ], function (pick) {
        if (pick === 'card') { importCard(r); return; }
        if (pick === 'cast') {
          castPicker({
            title: 'Who walks in?',
            note: 'They join this scene now, with a state sheet of their own.',
            preselect: [], suggest: false,
          }, function (chosen) {
            chosen.forEach(function (c) { RP.addToRoom(r, c); });
            RP.logEvent(state, {
              kind: 'roster', roomId: r.id, roomTitle: r.title, when: roomDate(r),
              chars: chosen.map(function (c) { return c.id; }),
              text: chosen.map(function (c) { return c.name; }).join(', ') + ' joined the scene.',
            });
            save(); render();
            toast(chosen.map(function (c) { return c.name; }).join(', ') + ' is in the scene.');
          });
          return;
        }
        if (pick === 'new') {
          form('Invent somebody', [
            { k: 'name', label: 'Name', value: '' },
            { k: 'role', label: 'What are they here for?', value: '' },
            { k: 'look', label: 'What do they look like?', type: 'area', value: '' },
          ], { note: 'Nobody has drawn them, so the description is the portrait. They are kept, and can be played again later.' },
          function (v) {
            if (!v.name.trim()) { toast('They need a name.'); return; }
            var made = RP.normChar({
              id: 'new_' + RP.slug(v.name), name: v.name.trim(),
              title: v.role.trim() || 'Invented in play',
              summary: [v.role.trim(), v.look.trim()].filter(Boolean).join(' — '),
              handle: (state.user && state.user.handle) || 'waluipedia',
            });
            made.look = v.look.trim();
            made.invented = true;
            state.newChars = (state.newChars || []).filter(function (c) { return c.id !== made.id; });
            state.newChars.unshift(made);
            castById[made.id] = made;
            cast = cast.concat([made]);
            RP.addToRoom(r, made);
            RP.logEvent(state, {
              kind: 'roster', roomId: r.id, roomTitle: r.title, when: roomDate(r), chars: [made.id],
              text: made.name + ' was invented and walked into the scene: ' + RP.clip(made.summary, 160),
            });
            save(); render();
            toast(made.name + ' is in the scene.');
          });
          return;
        }
        // Let the model do it — it has the stage direction for exactly this.
        r.messages.push({
          id: RP.uid(), role: 'scene', at: Date.now(),
          text: 'Somebody new arrives. Whoever speaks next brings them in — name them, describe them, and give them a reason to be here.',
        });
        save(); render();
        generate();
      });
    });
    on('qaRisk', function () {
      form('Attempt something', [{ k: 'text', label: 'What do you try?', type: 'area', value: '' }], {
        note: 'Written as an attempt, not an outcome — the page rolls, and the scene decides whether it works. ' +
          'Fate is set to ' + (state.settings.fate || 'normal') + '.',
        ok: 'Try it',
      }, function (v) {
        if (!v.text.trim()) return;
        $('input').value = v.text.trim();
        $('composer').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      });
    });
    on('statesBtn', function () { showStates = !showStates; render(); });
    on('seqBtn', function () { openSequel(room()); });
    var bar1 = $('statebar');
    if (bar1) bar1.querySelectorAll('[data-sheet]').forEach(function (b) {
      b.onclick = function (e) {
        if (e.target && e.target.dataset && e.target.dataset.here) return;
        editSheet(b.dataset.sheet);
      };
    });
    on('showAway', function () {
      var away = Object.keys(r.states || {}).filter(function (id) { return r.states[id].present === false; });
      list('Who comes back?', away.map(function (id) {
        return { label: r.states[id].name, value: id };
      }), function (id) {
        RP.pushUndo(r, 'bringing ' + r.states[id].name + ' back');
        RP.setPresent(r, id, true);
        save(); render();
        toast(r.states[id].name + ' is in the scene again.');
      });
    });
    if (bar1) bar1.querySelectorAll('[data-item]').forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        var parts = b.dataset.item.split('|');
        var sheet = RP.sheetFor(r, parts[0]);
        var item = RP.gridSlots(sheet, kitSize(r, parts[0]))[Number(parts[1])];
        if (!item) return;
        // Somebody to hand it to: anyone else with a sheet who is here.
        var others = Object.keys(r.states || {}).filter(function (id) {
          return id !== parts[0] && r.states[id] && r.states[id].present !== false;
        });
        list(item.icon + ' ' + item.name + (item.note ? ' — ' + item.note : ''), [
          { label: item.equipped ? '🫳 Put it away' : '✊ Take it in hand', value: 'hand' },
          { label: '🎲 Use it — writes the attempt and lets the roll decide', value: 'use' },
        ].concat(others.length ? [{ label: '🎁 Hand it to somebody', value: 'give' }] : [])
          .concat([{ label: '🗑 Drop it', value: 'drop' }]), function (pick) {
          RP.pushUndo(r, 'that change to the kit');
          if (pick === 'hand') {
            RP.applyChange(sheet, { kind: 'equip', name: item.name, op: item.equipped ? '-' : '+' });
            save(); render();
            return;
          }
          if (pick === 'drop') {
            RP.applyChange(sheet, { kind: 'item', op: '-', name: item.name });
            save(); render();
            return;
          }
          if (pick === 'give') {
            list('Who takes ' + item.name + '?', others.map(function (id) {
              return { label: r.states[id].name, value: id };
            }), function (to) {
              RP.applyChange(sheet, { kind: 'item', op: '-', name: item.name });
              RP.applyChange(r.states[to], { kind: 'item', op: '+', name: item.name, note: item.note, icon: item.icon });
              r.updated = Date.now();
              save(); render();
              toast(item.icon + ' ' + item.name + ' → ' + r.states[to].name + '. The model sees it on their sheet now.');
            });
            return;
          }
          $('input').value = 'I use ' + item.name + (item.note ? ' — ' + item.note : '') + '.';
          $('composer').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
        });
      };
    });
    if (bar1) bar1.querySelectorAll('[data-additem]').forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        var sheet = RP.sheetFor(r, b.dataset.additem);
        if (!sheet) return;
        form('Into the pack', [
          { k: 'name', label: 'What is it? An emoji up front picks its icon — "🗝 a brass key"', value: '' },
          { k: 'note', label: 'A note about it (optional)', value: '' },
        ], { note: 'It lands on the sheet, so the model knows it is there from the next turn on.' }, function (v) {
          var item = RP.normItem(v.name + (v.note.trim() ? ' | ' + v.note.trim() : ''));
          if (!item.name) { toast('It needs a name.'); return; }
          RP.pushUndo(r, 'that change to the kit');
          RP.applyChange(sheet, { kind: 'item', op: '+', name: item.name, note: item.note, icon: item.icon });
          r.updated = Date.now();
          save(); render();
          toast(item.icon + ' ' + item.name + ' — in the pack.');
        });
      };
    });
    if (bar1) bar1.querySelectorAll('[data-here]').forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        RP.pushUndo(r, 'that change to the cast');
        var here = RP.setPresent(r, b.dataset.here, undefined);
        save(); render();
        toast(here ? charOf(r, b.dataset.here).name + ' is in the scene.'
          : charOf(r, b.dataset.here).name + ' is not here — they will not speak until they are.');
      };
    });
    on('panelBtn', function () { $('charpanel').classList.toggle('open'); });
    on('continueBtn', function () { generate(); });
    on('nextBeat', function () {
      r.beatsPaused = false; if (RP.fireBeat(r)) { logBeat(r); save(); render(); } });

    $('speakers').querySelectorAll('[data-speaker]').forEach(function (b) {
      b.onclick = function (e) {
        if (e.target && e.target.dataset && e.target.dataset.star) return;   // the star is its own control
        if (b.dataset.speaker === r.youPlay) { toast('You play them — ☆ to hand them back to the model.'); return; }
        r.next = b.dataset.speaker; save(); render();
      };
    });
    $('speakers').querySelectorAll('[data-star]').forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        var now = RP.markPlayer(r, b.dataset.star);
        save(); render();
        toast(now ? 'You play ' + charOf(r, now).name + ' — the model will not speak for them, and the world narrates around you.'
          : 'Handed back to the model.');
      };
    });
    var stream = $('stream');
    stream.querySelectorAll('[data-react]').forEach(function (b) {
      b.onclick = function () {
        var m = r.messages[+b.dataset.i];
        // A thumb is feedback the model gets to read, not a colour change.
        var now = RP.rate(state, r, m, b.dataset.react);
        save(); render();
        if (now === 'up') toast('👍 Noted — later turns will lean this way.');
        if (now === 'down') toast('👎 Noted — later turns will avoid that. ↻ for another take.');
      };
    });
    stream.querySelectorAll('[data-edit]').forEach(function (b) {
      b.onclick = function () {
        var msg = RP.findMessage(r, b.dataset.edit);
        if (!msg) return;
        form('Edit this line', [{ k: 'text', label: 'What it should say', type: 'area', value: RP.textOf(msg) }], {
          note: 'Your edit replaces the line everywhere — on screen, in the model’s history, and in anything exported.',
        }, function (v) {
          if (!v.text.trim()) { toast('Empty — delete it instead if you want it gone.'); return; }
          RP.pushUndo(r, 'the edit');
          RP.editMessage(r, msg.id, v.text.trim());
          save(); render();
        });
      };
    });
    stream.querySelectorAll('[data-mute]').forEach(function (b) {
      b.onclick = function () {
        var msg = RP.muteMessage(r, b.dataset.mute);
        save(); render();
        toast(msg && msg.muted ? 'Muted — it stays on screen, out of the model’s head.' : 'Unmuted.');
      };
    });
    stream.querySelectorAll('[data-drop]').forEach(function (b) {
      b.onclick = function () {
        var msg = RP.findMessage(r, b.dataset.drop);
        if (!msg) return;
        confirmThen('Delete this line?', RP.clip(RP.textOf(msg), 160), function () {
          RP.pushUndo(r, 'that deletion');
          RP.deleteMessage(r, msg.id);
          save(); render();
        });
      };
    });
    stream.querySelectorAll('[data-fork]').forEach(function (b) {
      b.onclick = function () {
        var copy = RP.forkRoom(state, r, b.dataset.fork, {});
        state.active = copy.id;
        RP.logEvent(state, {
          kind: 'chat', roomId: copy.id, roomTitle: copy.title, when: roomDate(copy),
          chars: copy.cast.map(function (c) { return c.id; }),
          text: 'Branched from “' + RP.clip(r.title, 50) + '” at that line. The original is untouched.',
        });
        save(); render();
        toast('🌿 Branched — the original chat is still there, whole.');
      };
    });
    stream.querySelectorAll('[data-pin]').forEach(function (b) {
      b.onclick = function () {
        var m = r.messages[+b.dataset.pin];
        m.pinned = !m.pinned;
        if (m.pinned) RP.logEvent(state, { kind: 'pin', roomId: r.id, roomTitle: r.title, when: roomDate(r), chars: r.cast.map(function (c) { return c.id; }), text: RP.clip(RP.textOf(m), 200) });
        save(); render();
      };
    });
    stream.querySelectorAll('[data-remember]').forEach(function (b) {
      b.onclick = function () {
        var m = r.messages[+b.dataset.remember];
        RP.logEvent(state, { kind: 'note', roomId: r.id, roomTitle: r.title, when: roomDate(r), chars: r.cast.map(function (c) { return c.id; }), text: RP.clip(RP.textOf(m), 300) });
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
      b.onclick = function () { speak(r.messages[+b.dataset.speak], r, { fresh: true }); };
    });
  }

  function wirePanel() {
    var r = room();
    var c = r.cast[0] || {};
    var on = function (id, fn) { var node = $(id); if (node) node.onclick = fn; };
    on('cpNew', function () { r.kind === 'group' ? startGroup(r.cast, { scene: r.scene, sceneName: r.sceneName, beats: r.beats }) : startSolo(c); });
    on('cpVoice', function () {
      var cfg = ttsConfig();
      form('Voice — the Qwen studio', [
        { k: 'mode', label: 'Read replies aloud on their own?', type: 'select',
          value: state.settings.voice === 'on' ? 'on' : 'off',
          options: [{ value: 'off', label: 'Only when I press ▶ on a message' },
                    { value: 'on', label: 'Every reply, as it lands' }] },
        { k: 'fallback', label: 'Fallback voice — a saved profile in the studio; also reads narration', value: cfg.voice },
        { k: 'map', label: 'Voice map, for the exceptions — one per line: character = profile (e.g. sans = Freeman)', type: 'area', value: state.settings.ttsVoices || '' },
      ], { note: 'Every ▶ speaks through your local Qwen3-TTS studio — the same bridge as the site’s 🔊 Read aloud, using the endpoint and model from its ⚙️. A speaker is linked to a saved voice profile by first name on its own: when Wario talks, the studio’s “Wario” profile reads the line. No profile under that name? The fallback voice covers them until you save one in the Voice Studio.' }, function (v) {
        state.settings.voice = v.mode;
        state.settings.voiceDefault = v.fallback.trim();
        state.settings.ttsVoices = v.map;
        voiceMisses = {};
        libCache = { at: 0, list: null };
        save(); render();
        toast(v.mode === 'on' ? '🔊 Replies read themselves — each in their own voice.' : '🔊 Voices on tap — ▶ on any message.');
      });
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
      var scene = RP.sceneDate(r, state);
      var rel = Object.keys(mem.relations || {}).map(function (k) {
        var x = mem.relations[k];
        return '<span class="tag">' + esc(x.name) + ' ' + (x.score > 0 ? '+' : '') + x.score + '</span>';
      }).join('');
      openModal('<h3>' + esc(c.name) + '’s memory</h3>' +
        '<p class="sub">Two clocks on every line: the in-world date it happened, and when you played it.' +
        (scene ? ' This scene is ' + esc(RP.formatWahDate(scene)) + '.' : '') + '</p>' +
        (mem.mood ? '<p class="sub">Mood: <b>' + esc(mem.mood) + '</b></p>' : '') +
        (rel ? '<div class="tags">' + rel + '</div>' : '') +
        (mem.knowledge && mem.knowledge.length
          ? '<h4>Taught facts</h4><div class="stack">' + mem.knowledge.map(function (k) {
              return '<div class="item"><b>' + esc(k) + '</b></div>';
            }).join('') + '</div>' : '') +
        '<h4>Said and heard</h4>' +
        (mem.notes.length ? '<div class="stack">' + mem.notes.slice().reverse().slice(0, 40).map(function (n) {
          var when = n.when && scene ? RP.timeRelation(scene, n.when) : null;
          return '<div class="item"><div class="when">' +
            (n.when ? '<b class="inworld">🕯 ' + esc(n.when) + '</b>' +
              (when && when.rel === 'future' ? ' <span class="tag">after this scene</span>' : '') + ' · ' : '') +
            esc(ago(n.at)) + (n.roomTitle ? ' · ' + esc(n.roomTitle) : '') + '</div>' +
            '<b>' + esc(n.text) + '</b>' +
            (n.roomId ? '<div class="acts"><button class="mini" data-gochat="' + esc(n.roomId) + '">Open that chat</button></div>' : '') +
            '</div>';
        }).join('') + '</div>' : '<p class="sub">Nothing remembered yet.</p>') +
        '<div class="actions"><button class="pill" id="mCancel">Close</button>' +
        '<button class="pill" id="mTeach">＋ Teach them something</button></div>');
      $('mCancel').onclick = closeModal;
      $('mTeach').onclick = function () {
        closeModal();
        form('Teach ' + c.name, [{ k: 'fact', label: 'They now know…', type: 'area', value: '' }], {
          note: 'Handed to them in every chat from now on, as established fact.',
        }, function (v) { if (v.fact.trim()) { RP.teach(state, c, v.fact.trim()); save(); render(); toast(c.name + ' knows that now.'); } });
      };
      $('modal').querySelectorAll('[data-gochat]').forEach(function (b) {
        b.onclick = function () {
          closeModal();
          if ((state.rooms || []).some(function (x) { return x.id === b.dataset.gochat; })) openRoom(b.dataset.gochat);
        };
      });
    });
    on('cpReplay', function () { replayPicker(r.id); });
    on('cpScript', function () {
      if (!r.beats || !r.beats.length) { toast('This chat has no filed script. Start one from a Scene card.'); return; }
      r.autoBeats = !r.autoBeats; save(); render();
      toast('Beats ' + (r.autoBeats ? 'advance on their own every two turns.' : 'only advance when you press ⏩.'));
    });
    on('cpDirector', function () {
      form('Director', [
        { k: 'director', label: 'After a reply, who speaks next?', type: 'select', value: state.settings.director,
          options: [{ value: 'on', label: 'The model decides — characters answer each other, then hand back to me' },
                    { value: 'off', label: 'Always me — one reply per turn' }] },
        { k: 'maxChain', label: 'Never more than this many character turns before it comes back to me', value: String(state.settings.maxChain || RP.MAX_CHAIN) },
      ], { note: 'In a group chat the model is asked one question after every reply: does a character have to answer, or is the scene waiting on you? It hands back on its own, and always at the ceiling.' }, function (v) {
        state.settings.director = v.director;
        var n = parseInt(v.maxChain, 10);
        state.settings.maxChain = isNaN(n) ? RP.MAX_CHAIN : Math.max(1, Math.min(12, n));
        save(); render();
      });
    });
    on('cpRename', function () {
      form('Rename chat', [{ k: 'title', label: 'Title', value: r.title }], {}, function (v) {
        if (v.title.trim()) { r.title = v.title.trim(); r.updated = Date.now(); save(); render(); }
      });
    });
    on('cpDelete', function () {
      confirmThen('Delete “' + RP.clip(r.title, 40) + '”?',
        'The transcript goes; the memories and world-log lines it filed stay, because other chats depend on them.',
        function () {
          state.rooms = (state.rooms || []).filter(function (x) { return x.id !== r.id; });
          state.active = '';
          save(); render();
          toast('Chat deleted. Its memories are still in the log.');
        });
    });
    on('cpFate', function () {
      form('Fate', [
        { k: 'fate', label: 'How often does the world push back?', type: 'select', value: state.settings.fate || 'normal',
          options: [
            { value: 'off', label: 'Off — whatever you write, works' },
            { value: 'gentle', label: 'Gentle — mostly you, occasionally a price' },
            { value: 'normal', label: 'Normal — costs and wrenches are common, failure happens' },
            { value: 'harsh', label: 'Harsh — the world is against you and the cast argues back' },
          ] },
      ], { note: 'Before each reply to something you attempted, the page rolls and tells the model how it resolves: it works, it works at a price, something cuts across it, it fails, or the character simply refuses you. The model is told not to narrate the dice — and being wounded shifts the odds against you.' }, function (v) {
        state.settings.fate = v.fate; save(); render();
      });
    });
    on('cpExport', function () { exportMenu(r, c); });
    on('cpImport', function () {
      list('Import into “' + RP.clip(r.sceneName || r.title, 36) + '”', [
        { label: '📥 A story — paste it, or open a .txt / .md / .json file', value: 'story' },
        { label: '📇 A character card — .png or .json, they walk in and say their greeting', value: 'card' },
        { label: '📓 File this chat into the lore book — smart read, about ' +
          RP.smartBacklog(r, { maxCalls: state.settings.smartCalls || 6 }).jobs.length + ' calls', value: 'catchup' },
      ], function (pick) {
        if (pick === 'story') { importTranscript({ into: r }); return; }
        if (pick === 'card') { importCard(r); return; }
        catchUpDialog(r);
      });
    });
    on('cpCard', function () {
      list('Export ' + c.name + ' as a character card', [
        { label: '📇 PNG card — the portrait with the card inside it (SillyTavern, Chub, Agnai)', value: 'png' },
        { label: '📄 JSON card — v2, with v1 fields alongside', value: 'json' },
      ], function (pick) { exportCard(c, pick === 'png'); });
    });
    on('cpSettings', settingsForm);
    // The panel's thumbs rate the last thing that was said, so you can steer
    // without scrolling back to the message.
    function rateLast(value) {
      var last = null;
      (r.messages || []).forEach(function (m) { if (m.role === 'char' && !m.error) last = m; });
      if (!last) { toast('Nothing said yet to rate.'); return; }
      var now = RP.rate(state, r, last, value);
      save(); render();
      toast(now === 'up' ? '👍 Noted — later turns will lean that way.'
        : now === 'down' ? '👎 Noted — later turns will avoid that.'
        : 'Rating cleared.');
    }
    on('cpUp', function () { rateLast('up'); });
    on('cpDown', function () { rateLast('down'); });
    on('cpNote', function () {
      form('Special instructions', [
        { k: 'note', label: 'For this chat', type: 'area', value: r.note || '' },
        { k: 'global', label: 'For every chat', type: 'area', value: state.settings.note || '' },
      ], {
        note: 'Sent with every turn, above everything else, and never spoken aloud: “keep this private”, “no new ' +
          'characters”, “short replies tonight”, “Luigi is lying about the tape”. You can also put instructions ' +
          'inline in a turn with ((double brackets)) or /ooc — they are stripped out of what your character says.',
      }, function (v) {
        r.note = v.note.trim();
        state.settings.note = v.global.trim();
        r.updated = Date.now(); save(); render();
        toast('Noted — the model gets that with every turn.');
      });
    });
    on('cpTaste', function () {
      var taste = RP.tasteState(state);
      openModal('<h3>What the model has been told you like</h3>' +
        '<p class="sub">Every 👍 and 👎 keeps an excerpt, and the excerpts go into the prompt: more like the ones ' +
        'you kept, less like the ones you threw away. Length is taken from them too.</p>' +
        (taste.likes.length ? '<h4>Kept</h4><div class="stack">' + taste.likes.slice().reverse().map(function (x) {
          return '<div class="item"><b>' + esc((castById[x.charId] || { name: 'Someone' }).name) + '</b><p>' + esc(x.text) + '</p>' +
            '<div class="acts"><button class="mini" data-tasteoff="' + esc(x.id) + '">Forget this</button></div></div>';
        }).join('') + '</div>' : '') +
        (taste.dislikes.length ? '<h4>Thrown away</h4><div class="stack">' + taste.dislikes.slice().reverse().map(function (x) {
          return '<div class="item"><b>' + esc((castById[x.charId] || { name: 'Someone' }).name) + '</b><p>' + esc(x.text) + '</p>' +
            '<div class="acts"><button class="mini" data-tasteoff="' + esc(x.id) + '">Forget this</button></div></div>';
        }).join('') + '</div>' : '') +
        (!taste.likes.length && !taste.dislikes.length ? '<p class="sub">Nothing rated yet.</p>' : '') +
        '<div class="actions"><button class="pill" id="mCancel">Close</button>' +
        '<button class="pill danger" id="mClear">Forget all of it</button></div>');
      $('mCancel').onclick = closeModal;
      $('mClear').onclick = function () {
        state.taste = { likes: [], dislikes: [], chars: {} };
        closeModal(); save(); render(); toast('Forgotten.');
      };
      $('modal').querySelectorAll('[data-tasteoff]').forEach(function (b) {
        b.onclick = function () {
          var id = b.dataset.tasteoff;
          taste.likes = taste.likes.filter(function (x) { return x.id !== id; });
          taste.dislikes = taste.dislikes.filter(function (x) { return x.id !== id; });
          closeModal(); save(); render();
        };
      });
    });
  }

  /* ---------------------------------------------------------------- *
   * playing a turn
   * ---------------------------------------------------------------- */

  function logBeat(r) {
    var beat = r.beats[r.beatIndex - 1];
    if (!beat) return;
    RP.logEvent(state, {
      kind: 'beat', roomId: r.id, roomTitle: r.title, when: roomDate(r), chars: r.cast.map(function (c) { return c.id; }),
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
    // ((Anything in double brackets)) is spoken to the model, not by you.
    var spoken = RP.parseOoc(text);
    var msg = {
      id: RP.uid(), role: 'user', text: spoken.clean || text, at: Date.now(),
      ooc: spoken.notes.length ? spoken.notes : undefined,
    };
    r.lastNotes = spoken.notes;
    autoLeft = 0;                       // your turn beats the autopilot
    RP.pushUndo(r, 'your turn');
    // The thin-air check, before anything is sent: pulling out a thing you
    // HAVE takes it in hand; pulling out a bazooka you do not have turns
    // the dice against the bluff and briefs the model, once.
    if (r.mechanics !== 'off') {
      RP.ensurePlayerSheet(state, r);
      var claimed = RP.conjureCheck(r, msg.text);
      if (claimed && claimed.kind === 'have') {
        if (!claimed.item.equipped) RP.applyChange(claimed.sheet, { kind: 'equip', name: claimed.item.name, op: '+' });
        msg.changes = [claimed.item.icon + ' ' + claimed.item.name + ' — on your sheet, in hand'];
      }
      if (claimed && claimed.kind === 'conjured') {
        r.conjured = claimed.claim;
        msg.changes = ['🚫 “' + claimed.claim + '” is not on your sheet — the world will answer'];
      }
    }
    // A jump in time means the filed script no longer lines up with the
    // scene. Pause it rather than firing "beat 3" into a different night.
    if (!r.beatsPaused && RP.isTimeJump(text) && (r.beats || []).length && RP.beatProgress(r).remaining) {
      r.beatsPaused = true;
      toast('⏩ The script is paused — you moved the scene on. Press ⏩ in the header to fire the next beat by hand.');
    }
    r.queue = [];
    r.handback = '';
    r.messages.push(msg);
    RP.rememberTurn(state, r, msg);
    r.updated = Date.now();
    save(); render();
    // Stage the beat first: who answers, in what order. Then play them.
    busy = true; render();
    stageBeat(r).then(function (order) {
      busy = false;
      if (!order.length) {
        // Nobody had to answer — so the world picks it up and describes
        // what you just did. A scene should never simply stop.
        var fallback = RP.fallbackTurn(state, r);
        if (!fallback) {
          r.handback = 'nobody had to answer that.';
          save(); render();
          return;
        }
        order = [fallback];
      }
      r.queue = order.slice(1);
      r.next = order[0];
      save();
      generate();
    });
  }

  /** After a group reply, the model decides what happens next: another
   *  character answers, or the scene comes back to the player. Without this a
   *  multi-bot room is just a loop of bots talking to each other; with it the
   *  chain also has a hard ceiling (settings.maxChain) so it always returns. */
  /** After the player writes, the scene is staged: the model says who
   *  reacts and in what order, the page plays them, and then it stops.
   *  One planning call buys several turns of reply. */
  function stageBeat(r) {
    if (state.settings.director === 'off') return Promise.resolve([]);
    // A private moment gets narration at most — nobody walks in on it.
    var lastText = RP.textOf((r.messages || []).filter(function (m) { return m.role === 'user'; }).pop() || {});
    if (RP.isPrivate(r, lastText)) {
      return Promise.resolve((state.settings.world || 'on') === 'off' ? [] : ['world']);
    }
    if (RP.chainLength(r) >= (state.settings.maxChain || RP.MAX_CHAIN)) return Promise.resolve([]);
    if (RP.worldShouldSpeak(state, r)) return Promise.resolve(['world']);
    if (!RP.speakableCast(r).length) return Promise.resolve([]);
    function rotation() {
      var next = RP.nextSpeaker({ kind: 'group', cast: RP.speakableCast(r), messages: r.messages, next: r.next });
      return next ? [next.id] : [];
    }
    return callModel(RP.sequencePrompt(r, state, {}), [{ role: 'user', content: 'Who answers this?' }], { tokens: 60, utility: true })
      .then(function (text) {
        var staged = RP.parseSequence(text, r, state);
        // A model that rambled instead of answering has not decided that
        // nobody speaks — somebody still answers.
        if (!staged.order.length && !staged.silent) return rotation();
        return staged.order;
      })
      .catch(rotation);
  }

  /** The one-at-a-time question, still used when a chain is already running
   *  and we only need to know whether it keeps going. */
  function direct(r, speaker) {
    if (RP.worldShouldSpeak(state, r) && RP.chainLength(r) < (state.settings.maxChain || RP.MAX_CHAIN)) {
      r.next = 'world';
      return Promise.resolve(Boolean(autoLeft));
    }
    if (r.kind !== 'group' || RP.speakableCast(r).length < 2 || state.settings.director === 'off') return Promise.resolve(false);
    r.maxChain = state.settings.maxChain || RP.MAX_CHAIN;
    if (RP.chainLength(r) >= r.maxChain) {
      r.handback = 'the scene has run ' + RP.chainLength(r) + ' turns without you.';
      r.next = '';
      return Promise.resolve(false);
    }
    // One candidate is not a decision — skip the model call entirely.
    var others = RP.speakableCast(r).filter(function (c) { return c.id !== speaker.id; });
    if (others.length === 1) {
      r.handback = ''; r.next = others[0].id;
      return Promise.resolve(Boolean(autoLeft));
    }
    var lastMsg = (r.messages || []).slice().reverse().filter(function (m) {
      return m.role === 'char' || m.role === 'world' || m.role === 'user';
    })[0];
    var lastWasWorld = lastMsg && lastMsg.role === 'world';
    return callModel(RP.directorPrompt(r, speaker), [{ role: 'user', content: 'Who speaks next?' }], { tokens: 40, utility: true })
      .then(function (text) { return RP.parseDirector(text, r, speaker); })
      .catch(function () { return { next: 'user', reason: 'the director could not be reached' }; })
      .then(function (decision) {
        // The world never follows the world: two Director turns in a row
        // is a hundred seconds of prefill for a scene that was already
        // set. The turn comes back to the player instead.
        if (decision.next === 'world' && lastWasWorld) {
          decision = { next: 'user', reason: 'the scene is set' };
        }
        if (decision.next === 'world' && (state.settings.world || 'on') !== 'off') {
          r.handback = ''; r.next = 'world';
          return true;
        }
        if (decision.next === 'user') {
          r.handback = decision.reason + '.';
          r.next = '';
          return false;
        }
        r.handback = '';
        r.next = decision.next;
        return true;
      });
  }

  /** One reply. `retryIndex` regenerates an existing turn as a new swipe. */
  function generate(opts) {
    opts = opts || {};
    var r = room();
    if (!r || busy || !r.cast.length) return;
    busy = true;
    r.handback = '';
    render();

    // A snapshot before the turn, so ↩ takes back the reply *and* whatever
    // it did to the sheets.
    if (opts.retryIndex === undefined && !opts.searched) RP.pushUndo(r, 'that turn');
    var retry = opts.retryIndex !== undefined ? r.messages[opts.retryIndex] : null;
    // Who is up: a character, or the world itself when there is nobody else
    // in the room (or the director asked for it).
    var worldTurn = retry ? retry.role === 'world'
      : (opts.world || r.next === 'world' || RP.worldShouldSpeak(state, r));
    var speaker = retry ? (retry.role === 'world' ? RP.WORLD : charOf(r, retry.charId))
      : worldTurn ? RP.WORLD
      : (RP.speakableCast(r).filter(function (c) { return c.id === r.next; })[0] || RP.nextSpeaker({
          kind: r.kind, cast: RP.speakableCast(r).length ? RP.speakableCast(r) : r.cast,
          messages: r.messages, next: r.next,
        }));
    // Did the player just try something? Then it is not up to them whether it
    // worked. The roll happens here and is handed to the model as an order.
    var answering = !retry && RP.visible(lastVisible(r)) && lastVisible(r).role === 'user';
    // The reader's own sheet, before the roll and the prompt: the attempt's
    // wording picks the stat that leans on the dice, and a thin-air claim
    // (r.conjured, set on send) turns them against the bluff.
    if (r.mechanics !== 'off') RP.ensurePlayerSheet(state, r);
    var lastSaid = RP.textOf((r.messages || []).filter(function (m) {
      return m.role === 'user' && !m.muted;
    }).pop() || {});
    var fate = answering ? RP.rollFate(state, r, { text: lastSaid, conjured: r.conjured || '' }) : null;
    // What the cast may cite: whatever the recent turns are actually about,
    // filtered to filings whose dates have already passed in this scene.
    var recent = RP.historyFor(r, 4).map(function (m) { return m.content; }).join(' ');
    var found = RP.citableFor(archiveIndex, r, state, { query: recent + ' ' + (r.scene || ''), limit: 6 });
    var dug = searchForTurn(r, speaker, recent);
    if (opts.searched) recent = recent + ' ' + opts.searched;
    var opts2 = {
      fate: fate, archive: archive, recent: recent, notes: r.lastNotes || [],
      mentionText: lastSaid,
      conjured: r.conjured || '',
      budget: Number(state.settings.promptBudget) || 0,
      citations: [opts.searched || '', RP.citationBlock(found), dug.length ? RP.retrievalBlock(dug) : '']
        .filter(Boolean).join('\n\n'),
    };
    var system = (worldTurn ? RP.worldSystem(state, r, opts2) : RP.systemFor(state, r, speaker, opts2)) +
      (opts.nudge ? '\n\n' + opts.nudge : '');
    // The thin-air brief fires once: the turn that answers the claim has
    // seen it, and the scene moves on.
    r.conjured = '';
    // NOT `window`: a local of that name shadows the global one for the
    // whole function, and every window.setTimeout in here stops working.
    var lookBack = RP.contextLimit(r, (state.settings && state.settings.context) || 24);
    // Turn count first, then the character budget: a long chat should cost
    // turns, not paragraphs, and one monologue must not evict ten turns.
    var history = RP.packHistory(
      RP.historyFor(retry ? { kind: r.kind, cast: r.cast, messages: r.messages.slice(0, opts.retryIndex) } : r, lookBack),
      Number(state.settings.historyChars) || RP.HISTORY_BUDGET);
    if (!history.length) history = [{ role: 'user', content: '(The scene opens. Begin in character.)' }];

    /** Ask for a reply, and if the model runs out of room mid-sentence,
     *  ask it to carry on from exactly where it stopped. Two goes at most,
     *  and whatever is left is trimmed back to a full stop rather than
     *  shown as a dangling fragment. */
    function complete(sys, msgs, tries) {
      return callModel(sys, msgs, { tokens: tokensFor(worldTurn) }).then(function (text) {
        var cleaned = RP.stripSpeaker(text, speaker.name).trim();
        if (!RP.looksTruncated(cleaned) || (tries || 0) >= 3) return cleaned;
        return callModel(sys, msgs.concat([
          { role: 'assistant', content: cleaned },
          { role: 'user', content: RP.continueNudge(cleaned) },
        ]), { tokens: tokensFor(worldTurn) })
          .then(function (rest) {
            return RP.stitch(cleaned, RP.stripSpeaker(rest, speaker.name).trim());
          })
          .catch(function () { return cleaned; })
          .then(function (joined) {
            if (!RP.looksTruncated(joined) || (tries || 0) >= 2) return joined;
            // Still hanging: ask once more, for the ending only.
            return callModel(sys, msgs.concat([
              { role: 'assistant', content: joined },
              { role: 'user', content: RP.continueNudge(joined) + ' One or two sentences at most.' },
            ]), { tokens: 200 })
              .then(function (rest) { return RP.stitch(joined, RP.stripSpeaker(rest, speaker.name).trim()); })
              .catch(function () { return joined; });
          });
      });
    }

    complete(system, history, 0).then(function (text) {
      // Stage directions first: the model may have wounded somebody, spent
      // power, walked a character in, or written one out. They are stripped
      // from the prose and applied to the record before anything renders.
      var dnames = r.cast.map(function (c) { return c.name; });
      var youSheet = RP.sheetFor(r, RP.playerSheetId(r));
      if (youSheet) dnames.push(youSheet.name, 'the player');
      var staged = RP.parseDirectives(text, dnames);
      r.next = '';

      // [[LOOKUP: …]] — it asked the archive a question rather than making
      // something up. Answer it, file the answer, and let it write the turn
      // again with the passage in hand. One extra call, once per turn.
      var asked = staged.directives.filter(function (d) { return d.kind === 'lookup'; })[0];
      // A model asking the archive about ITS OWN SCENE - "current location
      // and attire" - would buy a full-price second call for facts already
      // in its prompt. That lookup is dropped on the floor.
      if (asked && /\b(current|right now|this scene|attire|wearing|location|where am|the sheets?|my (own )?(pack|items|sheet))\b/i.test(asked.query)) asked = null;
      if (asked && !retry && !opts.searched) {
        var results = RP.searchArchive(archiveIndex, asked.query, { limit: 3 });
        results.forEach(function (hit) {
          RP.bookAdd(state, {
            kind: 'fact', name: hit.name + ' — ' + RP.clip(asked.query, 40), text: hit.snippet,
            when: roomDate(r), roomId: r.id, roomTitle: r.title,
          });
        });
        r.messages.push({
          id: RP.uid(), role: 'state', at: Date.now(),
          lines: ['🔎 looked up “' + RP.clip(asked.query, 60) + '” — ' +
            (results.length ? results.length + ' passage' + (results.length === 1 ? '' : 's') + ' filed'
              : 'nothing on file')],
        });
        busy = false; save(); render();
        window.setTimeout(function () {
          generate({ searched: RP.retrievalBlock(results, asked.query) });
        }, 200);
        return false;
      }
      // Last resort: if it still trails off, cut back to a full stop rather
      // than showing the reader half a sentence.
      var clean = RP.trimDangling(staged.clean.trim());
      var changes = r.mechanics === 'off' ? { lines: [] }
        : RP.applyDirectives(state, r, staged.directives, resolveChar);
      // The prose handed the player something and no [[ITEM:]] landed?
      // Filed on the spot, no model call — the first upkeep net.
      if (r.mechanics !== 'off') {
        var pack = RP.sheetFor(r, RP.playerSheetId(r));
        if (pack) {
          RP.grantScan(clean).forEach(function (name) {
            var have = (pack.items || []).some(function (i) {
              var it = RP.normItem(i).name.toLowerCase();
              return it.indexOf(name.toLowerCase()) >= 0 || name.toLowerCase().indexOf(it) >= 0;
            });
            if (have) return;
            var line = RP.applyChange(pack, { kind: 'item', op: '+', name: name });
            if (line) changes.lines.push('🎒 ' + line + ' — filed from the prose');
          });
        }
      }
      // The doorman: a never-seen name who arrives or speaks in the prose
      // gets filed as an ENTER (a full sheet, kit and all) even when the
      // model forgot the directive; an unambiguous walk-out is an EXIT.
      if (r.mechanics !== 'off') {
        var doorNames = r.cast.map(function (c) { return c.name; })
          .concat((r.away || []).map(function (c) { return c.name; }))
          .concat([(RP.playerCharacter(r) || {}).name || '', state.user.name || '', RP.personaSheet(state).name || '']);
        var came = r.cast.length < 12 ? RP.arrivalScan(clean, doorNames) : '';
        if (came) {
          var din = RP.parseDirectives('[[ENTER: ' + came + ' — walked in from the prose]]',
            r.cast.map(function (c) { return c.name; }));
          RP.applyDirectives(state, r, din.directives, resolveChar).lines.forEach(function (l) {
            changes.lines.push('🚪 ' + l);
          });
        }
        var mayLeave = r.cast.filter(function (c) {
          return c.id !== RP.PLAYER_ID && c.id !== r.youPlay && c.name !== came;
        }).map(function (c) { return c.name; });
        var went = RP.departureScan(clean, mayLeave);
        if (went) {
          var dout = RP.parseDirectives('[[EXIT: ' + went + ' — walked out in the prose]]',
            r.cast.map(function (c) { return c.name; }));
          RP.applyDirectives(state, r, dout.directives, resolveChar).lines.forEach(function (l) {
            changes.lines.push('🚪 ' + l);
          });
        }
      }
      if (retry) {
        retry.alts = (retry.alts && retry.alts.length ? retry.alts : [retry.text]).concat([clean]);
        retry.alt = retry.alts.length - 1;
      } else {
        // Whose line is this, really? A small model handed six people will
        // write whoever spoke last — and sometimes the player themselves.
        var check = worldTurn ? { ok: true }
          : RP.checkSpeaker(clean, speaker, RP.presentCast(r), { youPlay: r.youPlay });
        if (check.playerVoice && !opts.reheard) {
          // Writing the player's character is not a mislabel to file away;
          // it is taken back and asked for again, once.
          busy = false; save(); render();
          toast('It wrote your character — asking again.');
          window.setTimeout(function () {
            generate({ reheard: true, nudge: 'Your last attempt wrote ' + check.actual.name +
              ', who is the PLAYER\u2019s character. Never write their words, thoughts or actions. Write ' +
              speaker.name + '\u2019s turn instead, and begin with ' + speaker.name + '.' });
          }, 150);
          return false;
        }
        var saidBy = (!check.ok && check.actual && !check.playerVoice) ? check.actual : speaker;
        if (saidBy !== speaker) toast('That line was ' + saidBy.name + '’s — filed under them.');
        var msg = {
          id: RP.uid(), role: worldTurn ? 'world' : 'char',
          charId: worldTurn ? '' : saidBy.id,
          misattributed: saidBy !== speaker ? speaker.name : undefined,
          text: clean, at: Date.now(), alts: [clean], alt: 0,
          // The roll and the state changes belong to the turn they happened
          // in, not to three separate cards in the stream.
          fate: fate ? fate.pill : '',
          // What the turn was written with, so you can see it working.
          consulted: dug.slice(0, 3).map(function (hit) { return hit.name; }),
          changes: changes.lines.slice(0, 6),
        };
        if (!String(clean || '').trim()) {
          // Nothing came back twice over. Say so quietly instead of filing
          // an empty card under somebody's name.
          toast(speaker.name + ' had nothing to say — press ↻, or write your turn.');
          return false;
        }
        r.messages.push(msg);
        // Narration is remembered too: it is where places get named.
        RP.rememberTurn(state, r, msg);
        if (r.kind === 'group' && !worldTurn) {
          var after = RP.rotationAfter(RP.speakableCast(r).length ? RP.speakableCast(r) : r.cast, speaker.id);
          r.next = after ? after.id : '';
        }
        // Anything temporary counts down on the turn it survives.
        var passed = r.mechanics === 'off' ? [] : RP.tickConditions(r);
        if (passed.length) msg.changes = (msg.changes || []).concat(passed);
        // A fired beat rides on the same card as the turn it interrupted.
        if (RP.autoAdvance(r)) {
          var beat = RP.fireBeat(r);
          if (beat) {
            msg.beatFired = (beat.time ? beat.time + ' — ' : '') + beat.beat;
            r.messages = r.messages.filter(function (m) { return !(m.beat && m.at >= msg.at); });
            logBeat(r);
          }
        }
      }
      r.updated = Date.now();
      if (state.settings.voice === 'on' && !retry) speak(r.messages[r.messages.length - 1], r);
      if (!retry) return direct(r, speaker);
      return false;
    }).catch(function (error) {
      r.messages.push({
        id: RP.uid(), role: 'char', charId: speaker.id, error: true, at: Date.now(),
        text: 'The model did not answer: ' + error.message + '\nEndpoint: ' + replyUrl() +
          (isOpenAI(replyUrl())
            ? '\nIf LM Studio is running, check its server is started and that “Enable CORS” is on in its Developer tab.'
            : '\nUsing LM Studio directly? Open ⚙ and press “LM Studio (1234)” — no workflow server needed.'),
      });
      return false;
    }).then(function (chain) {
      busy = false;
      if (!retry && autoLeft) autoLeft--;
      // A staged beat plays itself out before anything else is decided.
      var staged = !retry && (r.queue || []).length;
      if (staged) { r.next = r.queue.shift(); }
      save(); render();
      if (!retry) { queueBook(r); maybeRecap(r); maybeUpkeep(r); }
      if (room() !== r) { autoLeft = 0; return; }
      if (staged || chain || autoLeft) {
        window.setTimeout(function () { if (staged || autoLeft || chain) generate(); }, 450);
      } else if (!r.handback) {
        r.handback = 'your turn.';
        save(); render();
      }
    });
  }

  /** The in-world date a room is being played on: whatever the scenario
   *  filed, else the archive's own clock. Every memory is stamped with it. */
  function roomDate(r) {
    if (r && r.date) return r.date;
    var parsed = RP.sceneDate(r, state, archive);
    return parsed ? RP.formatWahDate(parsed) : '';
  }

  function lastVisible(r) {
    var msgs = (r && r.messages) || [];
    for (var i = msgs.length - 1; i >= 0; i--) { if (RP.visible(msgs[i])) return msgs[i]; }
    return null;
  }

  /* ---------------------------------------------------------------- *
   * the lore book worker — one small call at a time, on a budget
   * ---------------------------------------------------------------- */

  var booking = false;     // a background call is in flight
  var recapping = false;   // the story-so-far is being written

  /** Fold the older turns into a recap so a long chat stays cheap. Runs
   *  on the background model, once, when the history outgrows the window. */
  function maybeRecap(r) {
    if (recapping || !RP.needsRecap(r, state.settings.context || 24)) return;
    var turns = (r.messages || []).filter(RP.visible);
    var keep = Math.max(8, Math.round((state.settings.context || 24) / 2));
    var upTo = turns.length - keep;
    var fold = turns.slice(Number(r.recapAt || 0), upTo).map(function (m) {
      return {
        who: m.role === 'user' ? (RP.playerCharacter(r) || {}).name || state.user.name || 'You'
          : m.role === 'world' ? 'Narration' : charOf(r, m.charId).name,
        text: RP.textOf(m),
      };
    });
    if (fold.length < 4) return;
    recapping = true;
    callModel(RP.recapPrompt(r, fold, r.recap), [{ role: 'user', content: 'Summarise it.' }],
      { tokens: 420, utility: true })
      .then(function (text) {
        var summary = String(text || '').trim();
        if (!summary) return;
        r.recap = RP.clip(summary, 1400);
        r.recapAt = upTo;
        save(); render();
        toast('📜 Folded ' + fold.length + ' older turns into the story so far.');
      })
      .catch(function () { /* the window is a little long today; no harm */ })
      .then(function () { recapping = false; });
  }

  var upkeeping = false;   // the quartermaster is reading

  /** The second upkeep net: every few played turns, one small background
   *  call reads the recent prose against the sheets and files what the
   *  record missed. Same utility slot and session budget as the book;
   *  it may only keep the ledger, never invent events. */
  function maybeUpkeep(r) {
    var every = state.settings.upkeep === undefined ? RP.UPKEEP_EVERY : Number(state.settings.upkeep);
    if (upkeeping || busy || !every || r.mechanics === 'off') return;
    if (!RP.needsUpkeep(r, every) || !RP.bookBudgetLeft(state)) return;
    var turns = (r.messages || []).filter(RP.visible);
    var upTo = turns.length;
    var recent = turns.slice(Number(r.upkeepAt || 0)).slice(-10).map(function (m) {
      return {
        who: m.role === 'user' ? ((RP.playerCharacter(r) || {}).name || state.user.name || 'You')
          : m.role === 'world' ? 'Narration' : charOf(r, m.charId).name,
        text: RP.textOf(m),
      };
    });
    if (recent.length < 2) { r.upkeepAt = upTo; return; }
    upkeeping = true;
    RP.ensurePlayerSheet(state, r);
    callModel(RP.upkeepPrompt(r, recent), [{ role: 'user', content: 'File what the record missed.' }],
      { tokens: 220, utility: true })
      .then(function (reply) {
        r.upkeepAt = upTo;
        RP.spendBudget(state);
        var done = RP.applyUpkeep(state, r, reply);
        if (done.lines.length) {
          r.messages.push({
            id: RP.uid(), role: 'state', at: Date.now(),
            lines: done.lines.map(function (l) { return '🧾 ' + l; }),
          });
          r.updated = Date.now();
          toast('🧾 The quartermaster caught the sheets up to the story.');
        }
        save(); render();
      })
      .catch(function () { /* the next review will catch it */ })
      .then(function () { upkeeping = false; });
  }

  /** Queue the last stretch of play for filing. Called every few turns. */
  function queueBook(r) {
    if ((state.settings.book || 'on') === 'off') return;
    var turns = (r.messages || []).filter(RP.visible);
    if (turns.length < 2) return;
    var every = Math.max(2, Number(state.settings.bookEvery || 3));
    // Count from the last time this room was filed, not from a modulo —
    // a chat that skips a number should still get filed.
    if (turns.length - (r.bookAt || 0) < every) return;
    r.bookAt = turns.length;
    var slice = turns.slice(-every * 2).map(function (m) {
      return {
        who: m.role === 'user' ? (state.user.name || 'You') : charOf(r, m.charId).name,
        text: RP.textOf(m),
      };
    });
    RP.queuePush(state, {
      key: r.id + ':' + turns.length, kind: 'extract',
      // The stretch of play being filed, for the badge and the book page.
      roomId: r.id, roomTitle: r.title, when: roomDate(r), turns: slice,
    });
    pumpBook();
  }

  /** Run one queued job if the page is otherwise idle and there is budget
   *  left. Never runs beside a roleplay turn — the model is one machine. */
  function pumpBook() {
    if (booking || busy) return;
    var job = RP.queueNext(state);
    if (!job) return;
    if (!RP.bookBudgetLeft(state)) { RP.queueDone(state, job.id); render(); return; }
    var r = (state.rooms || []).filter(function (x) { return x.id === job.roomId; })[0];
    if (!r) { RP.queueDone(state, job.id); return; }
    booking = true;
    renderBookBadge();
    var known = RP.bookState(state).entries.slice(-40).map(function (e) { return e.name; });
    callModel(RP.extractPrompt(r, job.turns, known), [{ role: 'user', content: 'File what is new.' }], { tokens: 420, utility: true })
      .then(function (text) {
        var filed = 0;
        RP.parseExtract(text).forEach(function (entry) {
          var saved = RP.bookAdd(state, {
            kind: entry.kind, name: entry.name, text: entry.text,
            when: job.when, roomId: r.id, roomTitle: r.title,
            chars: (r.cast || []).map(function (c) { return c.id; }),
          });
          if (saved) filed++;
        });
        if (filed) toast('📓 The lore book grew by ' + filed + '.');
        RP.queueDone(state, job.id, true);
      })
      .catch(function () { RP.queueDone(state, job.id, true); })
      .then(function () {
        booking = false;
        save(); render();
        // Breathe between calls so a local model is never asked to do two
        // things at once on somebody's laptop.
        if (RP.queueNext(state)) window.setTimeout(pumpBook, 1500);
      });
  }

  function renderBookBadge() {
    var badge = $('bookBadge');
    if (!badge) return;
    var q = RP.bookState(state).queue.length;
    badge.textContent = booking ? '📓 writing…' : q ? '📓 ' + q + ' queued' : '';
    badge.hidden = !booking && !q;
  }

  /* ---------------------------------------------------------------- *
   * reading a commentary aloud — the local Qwen3-TTS studio if it is
   * running (one voice profile per speaker), the browser otherwise
   * ---------------------------------------------------------------- */

  var reader = { stop: false, audio: null };

  function ttsConfig() {
    var saved = {};
    try { saved = JSON.parse(window.localStorage.getItem('waluipedia-tts') || '{}'); } catch (e) { saved = {}; }
    return {
      endpoint: (saved.endpoint || 'http://127.0.0.1:7860').replace(/\/+$/, ''),
      api: saved.api || '/generate_base_17',
      lang: saved.lang || 'Auto',
      waluigi: (state.settings && state.settings.voiceWaluigi) || saved.voice || 'Waluigi',
      luigi: (state.settings && state.settings.voiceLuigi) || 'Luigi',
      // The chat's own voices: a fallback profile, and a hand-written
      // name → profile map for the exceptions. First names match on
      // their own — Wario's lines ask the studio for 'Wario'.
      voice: (state.settings && state.settings.voiceDefault) || saved.voice || 'Waluigi',
      map: RP.parseVoiceMap((state.settings && state.settings.ttsVoices) || ''),
    };
  }

  // Profiles the studio turned out not to have, this session — those
  // speakers go straight to the fallback instead of failing twice.
  var voiceMisses = {};

  /** One line through the studio — the same Gradio surface the main site's
   *  read-aloud bridge uses (docs/QWEN_TTS_BRIDGE.md). */
  function qwenSay(text, voice, cfg) {
    var payload = { data: [voice, text, cfg.lang, false, 0, 0.8, 0.95, 1.15, 2048] };
    function attempt(prefix) {
      return window.fetch(cfg.endpoint + prefix + cfg.api, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
      }).then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      }).then(function (job) {
        if (!job || !job.event_id) throw new Error('no job id');
        return window.fetch(cfg.endpoint + prefix + cfg.api + '/' + job.event_id);
      }).then(function (stream) { return stream.text(); }).then(function (body) {
        // An error the STUDIO reports (bad voice, failed synthesis) is not
        // the same story as a studio that cannot be reached — the caller
        // needs to know which one it is before blaming a voice profile.
        var studioSaid = function (message) { var e = new Error(message); e.studio = true; return e; };
        if (/event:\s*error/.test(body)) throw studioSaid('the studio reported an error');
        var done = /event:\s*complete\s*\ndata:\s*(.+)/.exec(body);
        if (!done) throw studioSaid('the studio closed the stream without finishing');
        var payloadOut = JSON.parse(done[1]);
        var audio = Array.isArray(payloadOut) ? payloadOut[1] : null;
        var path = audio && (audio.url || audio.path || audio);
        if (!path) throw studioSaid('no audio came back');
        return /^https?:/.test(path) ? path : cfg.endpoint + '/gradio_api/file=' + encodeURI(path);
      });
    }
    return attempt('/gradio_api/call').catch(function (e) {
      if (e && e.studio) throw e;
      return attempt('/call');
    });
  }

  function playUrl(url) {
    return new Promise(function (resolve) {
      var audio = new window.Audio(url);
      reader.audio = audio;
      audio.onended = resolve;
      audio.onerror = resolve;
      audio.play().catch(resolve);
    });
  }

  /** Read the whole episode, alternating voices. The next line is being
   *  synthesized while the current one plays, exactly like the main site. */
  function readEpisode(epi) {
    if (!epi || !(epi.lines || []).length) return;
    var cfg = ttsConfig();
    speaking = true; reader.stop = false; render();
    var lines = epi.lines.slice();
    var ahead = null;
    function voiceFor(line) { return line.who === 'waluigi' ? cfg.waluigi : cfg.luigi; }
    function synth(i) {
      return i < lines.length ? qwenSay(lines[i].text, voiceFor(lines[i]), cfg) : Promise.resolve(null);
    }
    function step(i) {
      if (reader.stop || i >= lines.length) { stopReading(); return; }
      var current = ahead || synth(i);
      ahead = null;
      current.then(function (url) {
        if (reader.stop) return null;
        ahead = synth(i + 1);                      // synthesize ahead of the ear
        return playUrl(url);
      }).then(function () { step(i + 1); })
        .catch(function () {
          // No studio: fall back to the browser's own voices so the button
          // still does something useful.
          browserRead(lines.slice(i));
        });
    }
    toast('🔊 Reading through the Qwen studio (' + cfg.waluigi + ' / ' + cfg.luigi + ')…');
    step(0);
  }

  function browserRead(lines) {
    if (!window.speechSynthesis) { toast('No voice available — the Qwen studio is not running.'); stopReading(); return; }
    toast('The Qwen studio is not answering — using the browser’s voices.');
    window.speechSynthesis.cancel();
    lines.forEach(function (line) {
      var u = new window.SpeechSynthesisUtterance(line.text);
      var voice = RP.voiceFor({ id: line.who, name: line.who });
      u.rate = voice.rate; u.pitch = line.who === 'waluigi' ? 0.8 : 1.25;
      window.speechSynthesis.speak(u);
    });
    speaking = true; render();
  }

  function stopReading() {
    reader.stop = true;
    if (reader.audio) { try { reader.audio.pause(); } catch (e) { /* already gone */ } }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    speaking = false;
    render();
  }

  /** What voices does the studio ACTUALLY have? Ask its own library —
   *  the same list behind the studio's Refresh Library button — so
   *  character names match saved profiles exactly instead of by guess.
   *  Best effort: any failure returns null and the guess path takes
   *  over. Cached for a minute so a chatty scene asks once. */
  var libCache = { at: 0, list: null };
  function voiceLibrary(cfg) {
    if (libCache.at && Date.now() - libCache.at < 60000) return Promise.resolve(libCache.list);
    var keep = function (list) {
      list = (list || []).filter(function (s, i) { return s && s !== 'None' && list.indexOf(s) === i; });
      libCache = { at: Date.now(), list: list.length ? list : null };
      return libCache.list;
    };
    // First stop: the app config. The voice dropdown's `choices` there are
    // EXACTLY what the API will accept — case-sensitive, 'None' included —
    // as its refusal errors prove. One GET, no job.
    return window.fetch(cfg.endpoint + '/config')
      .then(function (res) { return res.json(); })
      .then(function (conf) {
        var comps = (conf && conf.components) || [];
        var pick = function (want) {
          var names = [];
          comps.forEach(function (c) {
            var p = c && c.props;
            if (!p || !Array.isArray(p.choices) || (c.type && c.type !== 'dropdown')) return;
            if (want && !/voice|profile|speaker|character/i.test(String(p.label || ''))) return;
            p.choices.forEach(function (ch) {
              var s = Array.isArray(ch) ? ch[0] : ch;
              if (typeof s === 'string' && s.trim()) names.push(s.trim());
            });
          });
          return names;
        };
        var found = pick(true);                    // dropdowns labelled like a voice…
        if (!found.length) found = pick(false);    // …or every dropdown, if none are
        if (found.length) return keep(found);
        throw new Error('no choices in config');
      })
      .catch(function () { return libraryFromEndpoint(cfg, keep); });
  }

  /** Second stop: call the studio's own refresh-library endpoint and read
   *  the names out of whatever it returns. */
  function libraryFromEndpoint(cfg, keep) {
    return window.fetch(cfg.endpoint + '/gradio_api/info')
      .then(function (res) { return res.json(); })
      .then(function (info) {
        var eps = Object.keys((info && info.named_endpoints) || {});
        var ep = eps.filter(function (n) { return /library|voice/i.test(n) && /refresh|list|get|load/i.test(n); })[0] ||
                 eps.filter(function (n) { return /refresh_library|list_voices/i.test(n); })[0];
        if (!ep) return keep(null);
        return window.fetch(cfg.endpoint + '/gradio_api/call' + ep, {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ data: [] }),
        }).then(function (res) { return res.json(); })
          .then(function (job) {
            if (!job || !job.event_id) return keep(null);
            return window.fetch(cfg.endpoint + '/gradio_api/call' + ep + '/' + job.event_id)
              .then(function (s) { return s.text(); })
              .then(function (body) {
                var done = /event:\s*complete\s*\ndata:\s*(.+)/.exec(body);
                if (!done) return keep(null);
                var names = [];
                (function dig(v) {
                  if (Array.isArray(v)) { v.forEach(dig); return; }
                  if (!v || typeof v !== 'object') return;
                  // a dropdown update carries choices; a dataframe carries
                  // rows whose first cell is the profile name
                  if (Array.isArray(v.choices)) v.choices.forEach(function (c) {
                    var s = Array.isArray(c) ? c[0] : c;
                    if (typeof s === 'string' && s.trim()) names.push(s.trim());
                  });
                  if (Array.isArray(v.data)) v.data.forEach(function (row) {
                    if (Array.isArray(row) && typeof row[0] === 'string' && row[0].trim()) names.push(row[0].trim());
                  });
                  Object.keys(v).forEach(function (k) { if (k !== 'choices' && k !== 'data') dig(v[k]); });
                })(JSON.parse(done[1]));
                return keep(names.filter(function (s, i) { return names.indexOf(s) === i; }));
              });
          });
      })
      .catch(function () { return keep(null); });
  }

  /** A message out loud, through the local Qwen studio — every voice in
   *  it: narration in the narrator's voice, each quote in the voice of
   *  whoever the prose says is speaking. Voices come from the studio's
   *  own library when it answers; a profile it lacks goes to the
   *  fallback; no studio at all → the browser voice. A manual ▶ starts
   *  fresh — earlier misses are forgiven and retried. */
  function speak(msg, r, opts) {
    if (!msg) return;
    if (opts && opts.fresh) { voiceMisses = {}; libCache = { at: 0, list: null }; }
    var cfg = ttsConfig();
    var speaker = msg.role === 'world' ? ''
      : msg.role === 'user' ? ((RP.playerCharacter(r) || {}).name || state.user.name || '')
      : ((charOf(r, msg.charId) || {}).name || '');
    var castNames = r.cast.map(function (c) { return c.name; })
      .concat([(RP.playerCharacter(r) || {}).name || '', state.user.name || '']);
    var parts = RP.speechParts(RP.textOf(msg), castNames, speaker);
    if (!parts.length) return;
    if (reader.audio) { try { reader.audio.pause(); } catch (e) { /* already gone */ } }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    reader.stop = false;
    var mine = ++speak.turn;
    voiceLibrary(cfg).then(function (lib) {
      if (reader.stop || speak.turn !== mine) return;
      var narrator = cfg.map.narrator || cfg.map.world || cfg.voice;
      var jobs = [];
      parts.forEach(function (p) {
        var v = p.who
          ? RP.ttsVoiceFor(p.who, { map: cfg.map, fallback: cfg.voice, misses: voiceMisses, library: lib })
          : narrator;
        // A short lead chunk: the voice starts on the opening line while
        // the rest of a long turn is still synthesizing behind it.
        RP.ttsChunks(p.text, 450, jobs.length ? 0 : 170).forEach(function (c) { jobs.push({ voice: v, text: c, who: p.who }); });
      });
      if (!jobs.length) return;
      var ahead = null; var aheadAt = -1;
      var synth = function (i) {
        return i < jobs.length ? qwenSay(jobs[i].text, jobs[i].voice, cfg) : Promise.resolve(null);
      };
      var step = function (i) {
        if (reader.stop || speak.turn !== mine || i >= jobs.length) return;
        var cur = (aheadAt === i && ahead) ? ahead : synth(i);
        ahead = null; aheadAt = -1;
        cur.then(function (url) {
          if (reader.stop || speak.turn !== mine) return null;
          ahead = synth(i + 1); aheadAt = i + 1;   // synthesize ahead of the ear
          ahead.catch(function () { /* judged when its turn comes */ });
          return playUrl(url);
        }).then(function () { step(i + 1); })
          .catch(function (e) {
            if (reader.stop || speak.turn !== mine) return;
            ahead = null; aheadAt = -1;
            if (e && e.studio && jobs[i].voice !== cfg.voice) {
              // The studio answered but refused this voice: remember the
              // miss, let the fallback read this speaker's lines instead.
              voiceMisses[String(jobs[i].who).split(/\s+/)[0].toLowerCase()] = true;
              toast('The studio refused the “' + jobs[i].voice + '” voice — ' + cfg.voice +
                ' reads for ' + (jobs[i].who || 'them') + ' for now.');
              var missed = jobs[i].voice;
              jobs.forEach(function (j) { if (j.voice === missed) j.voice = cfg.voice; });
              step(i);
              return;
            }
            if (e && e.studio) { toast('The Qwen studio errored: ' + e.message); return; }
            speakBrowser(msg, r);
          });
      };
      step(0);
    });
  }
  speak.turn = 0;

  function speakBrowser(msg, r) {
    if (!window.speechSynthesis) { toast('The Qwen studio is not answering at ' + ttsConfig().endpoint + ' and this browser has no voice of its own.'); return; }
    toast('The Qwen studio is not answering at ' + ttsConfig().endpoint + ' — using the browser voice.');
    var u = new window.SpeechSynthesisUtterance(RP.ttsClean(RP.textOf(msg)));
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

  function confirmThen(title, note, done) {
    openModal('<h3>' + esc(title) + '</h3><p class="sub">' + esc(note) + '</p>' +
      '<div class="actions"><button class="pill" id="mCancel">Keep it</button>' +
      '<button class="pill danger" id="mOk">Delete</button></div>');
    $('mCancel').onclick = closeModal;
    $('mOk').onclick = function () { closeModal(); done(); };
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

  /** Scenario settings: what everyone walks in carrying. A battle can start
   *  at half health with a wounded flag already set, and the model reads
   *  exactly that before it writes the first line. */
  function stateSetup(chosen, current, done) {
    current = current || {};
    var rows = chosen.map(function (c) {
      var cur = (current.states || {})[c.id] || {};
      return '<div class="setuprow" data-setup="' + esc(c.id) + '">' + avatar(c, 28) +
        '<b>' + esc(c.name) + '</b>' +
        '<label>HP %<input type="number" min="0" max="100" value="' + (cur.hpPct === undefined ? 100 : cur.hpPct) + '" data-k="hpPct"></label>' +
        '<label>MP %<input type="number" min="0" max="100" value="' + (cur.mpPct === undefined ? 100 : cur.mpPct) + '" data-k="mpPct"></label>' +
        '<label>Conditions<input type="text" placeholder="wounded, hunted — or with a bite: bleeding 3 -2hp | a deep cut" value="' + esc(cur.flags || '') + '" data-k="flags"></label>' +
        '<label>Carrying<input type="text" placeholder="rope, lantern" value="' + esc(cur.items || '') + '" data-k="items"></label>' +
        '<label>Note<input type="text" placeholder="one arm useless" value="' + esc(cur.status || '') + '" data-k="status"></label>' +
        '</div>';
    }).join('');
    openModal('<h3>Starting state</h3><p class="sub">What everyone walks in carrying. The model reads these sheets ' +
      'before its first line and updates them as the scene goes.</p>' +
      '<label for="setupPreset">Mechanics</label><select id="setupPreset">' +
      Object.keys(RP.STATE_PRESETS).map(function (k) {
        return '<option value="' + k + '"' + ((current.preset || 'rpg') === k ? ' selected' : '') + '>' + esc(RP.STATE_PRESETS[k].name) + '</option>';
      }).join('') + '</select>' +
      '<div class="setup">' + rows + '</div>' +
      '<div class="actions"><button class="pill" id="mCancel">Back</button>' +
      '<button class="pill primary" id="mOk">Start with these</button></div>');
    $('mCancel').onclick = closeModal;
    $('mOk').onclick = function () {
      var setup = { preset: $('setupPreset').value, states: {} };
      $('modal').querySelectorAll('[data-setup]').forEach(function (rowEl) {
        var row = {};
        rowEl.querySelectorAll('[data-k]').forEach(function (input) { row[input.dataset.k] = input.value; });
        setup.states[rowEl.dataset.setup] = row;
      });
      done(setup);
    };
  }

  /** The cast picker used by group chats, scenes and replays. */
  function castPicker(opts, done) {
    var picked = (opts.preselect || []).slice();
    var pendingSetup = null;
    function draw() {
      var q = ($('pickSearch') && $('pickSearch').value || '').toLowerCase();
      var pool = (opts.extra || []).concat(cast);
      var shown = pool.filter(function (c) { return !q || c.name.toLowerCase().indexOf(q) >= 0; }).slice(0, 300);
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
      (opts.setup ? '<button class="pill" id="pickSetup">⚔ Starting state</button>' : '') +
      (opts.suggest === false ? '' : '<button class="pill" id="pickSuggest">✨ Suggest a cast</button>') +
      '<button class="pill" id="mCancel">Cancel</button>' +
      '<button class="pill primary" id="mOk">' + esc(opts.ok || 'Start') + '</button></div>');
    $('pickSearch').oninput = draw;
    $('mCancel').onclick = closeModal;
    $('mOk').onclick = function () {
      var extra = {};
      (opts.extra || []).forEach(function (c) { extra[c.id] = c; });
      var chosen = picked.map(function (id) { return castById[id] || extra[id]; }).filter(Boolean);
      if (!chosen.length) { toast('Pick at least one character.'); return; }
      closeModal(); done(chosen, pendingSetup);
    };
    if ($('pickSetup')) {
      $('pickSetup').onclick = function () {
        var extra = {};
        (opts.extra || []).forEach(function (c) { extra[c.id] = c; });
        var chosen = picked.map(function (id) { return castById[id] || extra[id]; }).filter(Boolean);
        if (!chosen.length) { toast('Pick the cast first.'); return; }
        stateSetup(chosen, pendingSetup, function (setup) {
          pendingSetup = setup;
          closeModal();
          done(chosen, setup);
        });
      };
    }
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

  /** Where the model lives. Two presets, because two things are what
   *  people actually run: LM Studio on its own, or the workflow server. */
  function settingsForm() {
    var current = replyUrl();
    var sampler = (state.settings && state.settings.sampler) || {};
    openModal('<h3>Settings</h3>' +
      '<p class="sub">Point the page at whatever is running. <b>LM Studio</b> is called directly with the OpenAI API ' +
      '(make sure its server is started, and that “Enable CORS” is on in its Developer tab). The <b>workflow ' +
      'server</b> adds the archive routes and the disk saves, and forwards to LM Studio itself.</p>' +
      '<div class="castbar">' +
      '<button class="pill' + (isOpenAI(current) ? ' primary' : '') + '" id="setLm">🖥 LM Studio (127.0.0.1:1234)</button>' +
      '<button class="pill' + (!isOpenAI(current) ? ' primary' : '') + '" id="setWf">🗄 Workflow server (127.0.0.1:8787)</button>' +
      '<button class="pill" id="setTest">🔌 Test it</button>' +
      '<span class="chip" id="setState">' + (online ? 'answering' : 'no answer yet') + '</span>' +
      '</div>' +
      '<label for="f_endpoint">Endpoint</label><input type="text" id="f_endpoint" value="' + esc(state.settings.endpoint || '') + '" placeholder="' + esc(CFG.replyUrl) + '">' +
      '<label for="f_model">Model</label>' +
      '<div class="castbar"><select id="f_modelPick"><option value="">— the models the endpoint reports —</option></select>' +
      '<button class="pill" id="setModels">↻ List models</button></div>' +
      '<input type="text" id="f_model" value="' + esc(state.settings.model || '') + '" placeholder="local-model">' +
      '<label for="f_length">How long should a reply be?</label><select id="f_length">' +
      Object.keys(RP.LENGTHS).map(function (k) {
        return '<option value="' + k + '"' + ((state.settings.length || 'snappy') === k ? ' selected' : '') + '>' +
          esc(RP.LENGTHS[k].name) + ' — ' + esc(RP.LENGTHS[k].words) + '</option>';
      }).join('') + '</select>' +
      '<label for="f_narrator">Who narrates?</label><select id="f_narrator">' +
      Object.keys(RP.NARRATORS).map(function (k) {
        return '<option value="' + k + '"' + (RP.narrator(state) === k ? ' selected' : '') + '>' +
          esc(RP.NARRATORS[k].icon + ' ' + RP.NARRATORS[k].name + ' — ' + RP.NARRATORS[k].blurb) + '</option>';
      }).join('') + '</select>' +
      '<label for="f_world">Narration turns</label><select id="f_world">' +
      [['on', 'On — when nobody else is here, the world describes the scene and moves the hour'],
       ['off', 'Off — only characters speak']].map(function (o) {
        return '<option value="' + o[0] + '"' + ((state.settings.world || 'on') === o[0] ? ' selected' : '') + '>' + esc(o[1]) + '</option>';
      }).join('') + '</select>' +
      '<label for="f_autoplay">▶ Auto plays this many turns before stopping</label>' +
      '<input type="number" id="f_autoplay" min="2" max="20" value="' + (state.settings.autoplay || 6) + '">' +
      '<label for="f_context">How many recent turns the model sees (default 24)</label>' +
      '<input type="number" id="f_context" min="4" max="240" value="' + (state.settings.context || 24) + '">' +
      '<label for="f_upkeep">🧾 Sheet upkeep — the quartermaster reviews the record every N played turns (0 = off, default ' + RP.UPKEEP_EVERY + '). One small background call; shares the book\u2019s session budget.</label>' +
      '<input type="number" id="f_upkeep" min="0" max="24" value="' + (state.settings.upkeep === undefined ? RP.UPKEEP_EVERY : state.settings.upkeep) + '">' +
      '<label for="f_historyChars">History budget, in characters — long monologues are clipped so they cannot crowd out whole turns (default ' + RP.HISTORY_BUDGET + ')</label>' +
      '<input type="number" id="f_historyChars" min="3000" max="60000" step="1000" value="' + (state.settings.historyChars || RP.HISTORY_BUDGET) + '">' +
      '<label for="f_promptBudget">System prompt budget, in characters — raise it for a model with a big context window (default ' + RP.PROMPT_BUDGET + ')</label>' +
      '<input type="number" id="f_promptBudget" min="6000" max="' + RP.PROMPT_BUDGET_MAX + '" step="1000" value="' + (state.settings.promptBudget || RP.PROMPT_BUDGET) + '">' +
      '<label for="f_style">Default narration style</label><select id="f_style">' +
      Object.keys(RP.STYLES).map(function (k) {
        return '<option value="' + k + '"' + (state.settings.style === k ? ' selected' : '') + '>' + esc(RP.STYLES[k].name) + '</option>';
      }).join('') + '</select>' +
      '<label for="f_temperature">Temperature — higher is wilder (0–1.5)</label>' +
      '<input type="text" id="f_temperature" value="' + esc(String(state.settings.temperature)) + '">' +
      '<label>Sampling — leave blank to let the model decide</label>' +
      '<div class="castbar">' +
      '<label class="mins">top_p <input type="text" id="f_top_p" value="' + esc(String(sampler.top_p === undefined ? '' : sampler.top_p)) + '" placeholder="0.9"></label>' +
      '<label class="mins">top_k <input type="text" id="f_top_k" value="' + esc(String(sampler.top_k === undefined ? '' : sampler.top_k)) + '" placeholder="40"></label>' +
      '<label class="mins">rep. penalty <input type="text" id="f_repeat_penalty" value="' + esc(String(sampler.repeat_penalty === undefined ? '' : sampler.repeat_penalty)) + '" placeholder="1.1"></label>' +
      '<label class="mins">min_p <input type="text" id="f_min_p" value="' + esc(String(sampler.min_p === undefined ? '' : sampler.min_p)) + '" placeholder="0.05"></label>' +
      '</div>' +
      '<label for="f_utilityModel">Background model — the sequencer, the lore book, hooks (blank = the same one)</label>' +
      '<input type="text" id="f_utilityModel" value="' + esc(state.settings.utilityModel || '') + '" placeholder="a small, fast model">' +
      '<input type="text" id="f_utilityEndpoint" value="' + esc(state.settings.utilityEndpoint || '') + '" placeholder="its endpoint, if it is somewhere else">' +
      '<div class="actions"><button class="pill" id="mCancel">Cancel</button>' +
      '<button class="pill primary" id="mOk">Save</button></div>');
    $('mCancel').onclick = closeModal;
    // The dialog can be closed while a request is in flight, and two probes
    // can be in flight at once (the automatic one on open, and Test it).
    // The latest one wins; a stale answer never overwrites a newer one.
    var probeSeq = 0;
    function probe() { return ++probeSeq; }
    function say(text, mine) {
      if (mine !== undefined && mine !== probeSeq) return;
      if ($('setState')) $('setState').textContent = text;
    }
    function listModels() {
      var mine = probe();
      if (!$('f_endpoint')) return;
      var url = $('f_endpoint').value.trim() || CFG.replyUrl;
      if (!isOpenAI(url)) { say('the workflow server picks the model itself', mine); return; }
      say('asking…', mine);
      fetch(modelsRoute(url)).then(function (r) { return r.ok ? r.json() : null; }).then(function (data) {
        var list = (data && (data.data || data.models)) || [];
        var pick = $('f_modelPick');
        if (!pick || mine !== probeSeq) return;
        if (!list.length) { say('no models loaded', mine); return; }
        pick.innerHTML = list.map(function (m) {
          var id = String(m.id || m.name || '');
          return '<option value="' + esc(id) + '"' + (state.settings.model === id ? ' selected' : '') + '>' + esc(id) + '</option>';
        }).join('');
        pick.onchange = function () { if ($('f_model')) $('f_model').value = pick.value; };
        if ($('f_model') && !$('f_model').value) $('f_model').value = pick.value;
        say(list.length + ' model' + (list.length === 1 ? '' : 's') + ' loaded', mine);
      }).catch(function () { say('no answer — is it running?', mine); });
    }
    $('setModels').onclick = listModels;
    listModels();
    $('setLm').onclick = function () { $('f_endpoint').value = LM_STUDIO; listModels(); };
    $('setWf').onclick = function () { $('f_endpoint').value = 'http://127.0.0.1:8787/api/roleplay'; };
    $('setTest').onclick = function () {
      var mine = probe();
      var url = $('f_endpoint').value.trim() || CFG.replyUrl;
      say('testing…', mine);
      // (Named `request`, not `probe`: a local `var probe` would shadow the
      //  probe() counter above and break the whole handler.)
      var request = isOpenAI(url)
        ? fetch(modelsRoute(url)).then(function (r) { return r.ok ? r.json() : null; })
        : fetch(url.replace(/\/api\/roleplay$/, '/api/health')).then(function (r) { return r.ok ? r.json() : null; });
      request.then(function (data) {
        if (!data) throw new Error('no answer');
        var list = (data.data || data.models || []);
        if (list.length) {
          if ($('f_model')) $('f_model').value = $('f_model').value || String(list[0].id || list[0].name || '');
          say('answering · ' + list.length + ' model' + (list.length === 1 ? '' : 's') +
            ' · ' + RP.clip(String(list[0].id || list[0].name || ''), 28), mine);
        } else {
          say(data.lm_studio && data.lm_studio.online ? 'answering · model online' : 'answering', mine);
        }
      }).catch(function () { say('no answer — is it running?', mine); });
    };
    $('mOk').onclick = function () {
      state.settings.endpoint = $('f_endpoint').value.trim();
      state.settings.model = $('f_model').value.trim();
      var ctx = parseInt($('f_context').value, 10);
      if (!isNaN(ctx)) state.settings.context = Math.max(4, Math.min(240, ctx));
      var upk = parseInt($('f_upkeep').value, 10);
      if (!isNaN(upk)) state.settings.upkeep = Math.max(0, Math.min(24, upk));
      var hist = parseInt($('f_historyChars').value, 10);
      if (!isNaN(hist)) state.settings.historyChars = Math.max(3000, Math.min(60000, hist));
      var pbud = parseInt($('f_promptBudget').value, 10);
      if (!isNaN(pbud)) state.settings.promptBudget = Math.max(6000, Math.min(RP.PROMPT_BUDGET_MAX, pbud));
      state.settings.length = $('f_length').value;
      state.settings.world = $('f_world').value;
      state.settings.narrator = $('f_narrator').value;
      var auto = parseInt($('f_autoplay').value, 10);
      if (!isNaN(auto)) state.settings.autoplay = Math.max(2, Math.min(20, auto));
      var next = {};
      ['top_p', 'top_k', 'repeat_penalty', 'min_p'].forEach(function (k) {
        var raw = ($('f_' + k).value || '').trim();
        if (raw !== '' && !isNaN(parseFloat(raw))) next[k] = parseFloat(raw);
      });
      state.settings.sampler = next;
      state.settings.utilityModel = $('f_utilityModel').value.trim();
      state.settings.utilityEndpoint = $('f_utilityEndpoint').value.trim();
      state.settings.style = $('f_style').value;
      var t = parseFloat($('f_temperature').value);
      if (!isNaN(t)) state.settings.temperature = Math.max(0, Math.min(1.5, t));
      closeModal();
      save(); render(); checkHealth();
    };
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

  /** Read a file the reader picked, as text or as bytes. */
  function pickFile(accept, as, done) {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = accept;
    input.onchange = function () {
      var file = input.files && input.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        done(as === 'bytes' ? new Uint8Array(reader.result) : String(reader.result), file);
      };
      if (as === 'bytes') reader.readAsArrayBuffer(file); else reader.readAsText(file);
    };
    input.click();
  }

  function downloadBytes(name, bytes, type) {
    var url = URL.createObjectURL(new Blob([bytes], { type: type || 'application/octet-stream' }));
    var a = document.createElement('a');
    a.href = url; a.download = name; a.click();
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
  }

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
        toast(bundleReport(stats) + (stats.lore || stats.chars || stats.log
          ? ' Plus ' + (stats.lore || 0) + ' lore, ' + (stats.chars || 0) + ' memories, ' + (stats.log || 0) + ' log lines.' : ''));
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
  /* ---------------------------------------------------------------- *
   * quality of life: the keys you already expect to work
   * ---------------------------------------------------------------- */
  window.addEventListener('keydown', function (e) {
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target || {}).tagName || '');
    if (e.key === 'Escape') {
      if (!$('modalBack').hidden) { closeModal(); return; }
      if (!$('chatview').hidden) { $('homeBtn').click(); return; }
    }
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey) && $('input') === document.activeElement) {
      e.preventDefault(); $('composer').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      return;
    }
    if (typing) return;
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && room()) {
      e.preventDefault();
      var what = e.shiftKey ? RP.redo(room()) : RP.undo(room());
      save(); render();
      toast(what ? (e.shiftKey ? 'Redid ' : 'Undid ') + what + '.' : 'Nothing to ' + (e.shiftKey ? 'redo' : 'undo') + '.');
      return;
    }
    if (e.key === '/') { e.preventDefault(); if ($('search')) $('search').focus(); return; }
    if (e.key === 'n' && !e.ctrlKey && !e.metaKey && !$('chatview').hidden) { e.preventDefault(); generate(); return; }
    if (e.key === '?' ) { e.preventDefault(); shortcutsHelp(); }
  });

  function shortcutsHelp() {
    openModal('<h3>Keyboard</h3><div class="stack">' + [
      ['Esc', 'close a dialog, or leave the chat'],
      ['Ctrl / ⌘ + Enter', 'send your turn'],
      ['/', 'jump to search'],
      ['n', 'let the next character speak'],
      ['?', 'this list'],
    ].map(function (row) {
      return '<div class="item"><b>' + row[0] + '</b><p>' + row[1] + '</p></div>';
    }).join('') + '</div><div class="actions"><button class="pill primary" id="mCancel">Close</button></div>');
    $('mCancel').onclick = closeModal;
  }

  loadCast()
    .then(function () { return Promise.all([loadScenes(), loadWire(), loadCollections()]); })
    .then(loadArchive)
    .then(function () { buildBoard(); render(); });
})();
