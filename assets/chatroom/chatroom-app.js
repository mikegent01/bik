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
  var whatifs = [];       // the composed What-If board
  var backfills = [];     // the unwritten events everything points at
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
      archive.factions = data.factions || [];
      archive.congress = data.congress || {};
    }).catch(function (error) { console.warn('archive bundle unavailable', error); });
  }

  /** Compose the board once everything has landed. */
  function buildBoard() {
    archive.posts = posts;
    archive.userName = (state.user || {}).name;
    // Written and inherited scenarios come first: they are this reader's own.
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
    html += '<div class="sec-head"><h2>The whole cast</h2><span class="grow"></span><span class="more">' + filtered.length + ' characters</span></div>';
    if (!filtered.length) html += '<div class="emptynote">Nothing matches “' + esc(query) + '”.</div>';
    RP.groupByLetter(filtered).forEach(function (group) {
      html += '<div class="ltr-head">' + esc(group.letter) + '</div><div class="grid">' +
        group.chars.map(function (c) { return charCard(c); }).join('') + '</div>';
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
    var body = tab === 'feed' ? renderFeed()
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
      // Scenario settings: the sheets everyone walks in carrying.
      statePreset: opts.statePreset || (state.settings && state.settings.statePreset) || 'rpg',
      setup: opts.setup || {},
      states: opts.states || null,
      mechanics: opts.mechanics || (state.settings && state.settings.mechanics) || 'on',
      sequelOf: opts.sequelOf || '',
      canon: opts.canon || '',
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
        kind: 'wire', roomId: opened.id, roomTitle: opened.title,
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
      return callModel(system + (nudge || ''), [{ role: 'user', content: 'Write the opening of this scene.' }]);
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
          kind: s.kind === 'backfill' ? 'backfill' : 'whatif', roomId: opened.id, roomTitle: opened.title,
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

  /** One HP/MP bar. */
  function bar(kind, pool) {
    var pct = pool.max ? Math.round((pool.value / pool.max) * 100) : 0;
    return '<span class="pool ' + kind + (pct <= 30 ? ' low' : '') + '">' +
      '<span class="fill" style="width:' + pct + '%"></span>' +
      '<span class="num">' + kind.toUpperCase() + ' ' + pool.value + '/' + pool.max + '</span></span>';
  }

  /** Edit a sheet by hand — the model is not the only one allowed to. */
  function editSheet(id) {
    var r = room();
    var sheet = RP.sheetFor(r, id);
    if (!sheet) return;
    form('State — ' + sheet.name, [
      { k: 'hp', label: 'HP (value / max, blank for none)', value: sheet.hp ? sheet.hp.value + '/' + sheet.hp.max : '' },
      { k: 'mp', label: 'MP (value / max, blank for none)', value: sheet.mp ? sheet.mp.value + '/' + sheet.mp.max : '' },
      { k: 'flags', label: 'Conditions, comma separated', value: Object.keys(sheet.flags || {}).join(', ') },
      { k: 'items', label: 'Carrying, comma separated', value: (sheet.items || []).join(', ') },
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
      v.flags.split(',').forEach(function (f) { var k = RP.slug(f); if (k) sheet.flags[k] = true; });
      sheet.items = v.items.split(',').map(function (i) { return i.trim(); }).filter(Boolean);
      sheet.status = v.status.trim();
      r.updated = Date.now();
      save(); render();
    });
  }

  function renderChat() {
    var r = room();
    $('dash').hidden = true;
    $('chatview').hidden = false;

    var face = r.cast[0] || {};
    $('chatTop').innerHTML = avatar(face, 32) +
      '<span class="title"><b>' + esc(r.title) + '</b><span>' + esc(r.kind === 'group' ? r.cast.map(function (c) { return c.name; }).join(', ') : (face.title || '')) + '</span></span>' +
      (r.beats && r.beats.length ? '<button class="pill" id="nextBeat">⏩ Next beat (' + RP.beatProgress(r).at + '/' + RP.beatProgress(r).total + ')</button>' : '') +
      (r.kind === 'group' ? '<button class="pill" id="continueBtn">➤ Continue</button>' : '') +
      (r.mechanics === 'off' ? '' : '<button class="pill' + (showStates ? ' primary' : '') + '" id="statesBtn">🩺 States</button>') +
      '<button class="pill" id="seqBtn">📖 Sequel</button>' +
      '<button class="pill" id="panelBtn">☰ Character</button>';

    // The sheets, visible in the chat rather than buried in a menu.
    var sheetBar = $('statebar');
    if (sheetBar) {
      sheetBar.hidden = !showStates || r.mechanics === 'off';
      sheetBar.innerHTML = !showStates ? '' : Object.keys(r.states || {}).map(function (id) {
        var sheet = r.states[id];
        if (!sheet || sheet.present === false) return '';
        var who = charOf(r, id);
        return '<button class="sheet" data-sheet="' + esc(id) + '" title="Edit state">' +
          '<span class="nm">' + avatar(who, 22) + esc(sheet.name) + '</span>' +
          (sheet.hp ? bar('hp', sheet.hp) : '') + (sheet.mp ? bar('mp', sheet.mp) : '') +
          '<span class="chips">' + Object.keys(sheet.flags || {}).map(function (f) {
            return '<span class="flag">' + esc(f.replace(/_/g, ' ')) + '</span>';
          }).join('') + Object.keys(sheet.counters || {}).map(function (c) {
            return '<span class="flag num">' + esc(c.replace(/_/g, ' ')) + ' ' + sheet.counters[c] + '</span>';
          }).join('') + (sheet.items || []).map(function (i) {
            return '<span class="flag item">' + esc(i) + '</span>';
          }).join('') + (sheet.status ? '<span class="flag note">' + esc(sheet.status) + '</span>' : '') + '</span>' +
          '</button>';
      }).join('');
    }

    var html = r.messages.map(function (m, i) {
      if (m.role === 'fate') {
        return '<div class="statelog fate"><span class="roll">' + esc(m.pill || '') + '</span></div>';
      }
      if (m.role === 'state') {
        return '<div class="statelog">' + (m.lines || []).map(function (l) {
          return '<span>' + esc(l) + '</span>';
        }).join('') + '</div>';
      }
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
    var handback = (!busy && r.handback)
      ? '<div class="handback"><b>Your turn.</b> ' + esc(r.handback) + '</div>' : '';
    $('stream').innerHTML = '<div class="stream-inner">' + html + handback +
      (busy ? '<div class="turn typing"><em>…writing…</em></div>' : '') + '</div>';
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
      menuItem('cpVoice', '🔊', 'Voice', (state.settings.voice === 'on' ? 'On' : 'Default')) +
      menuItem('cpHistory', '🕘', 'History', RP.roomCountFor(state.rooms, c.id) + '') +
      menuItem('cpCustomize', '🖌', 'Customize', style.name) +
      menuItem('cpPinned', '📌', 'Pinned', String(pinned)) +
      menuItem('cpPersona', '🧑', 'Persona', RP.clip(r.persona || state.user.persona || 'Not set', 16)) +
      menuItem('cpStyle', '✨', 'Style', style.name) +
      menuItem('cpMemory', '🧠', 'Memory', mem ? String(mem.notes.length) : '0') +
      menuItem('cpReplay', '🎭', 'Replay', 'Perspective') +
      menuItem('cpScript', '⏱', 'Script', r.beats && r.beats.length ? (r.autoBeats ? 'Auto' : 'Manual') : 'None') +
      menuItem('cpDirector', '🎬', 'Director', state.settings.director === 'off' ? 'Off' : 'On · max ' + (state.settings.maxChain || RP.MAX_CHAIN)) +
      menuItem('cpFate', '🎲', 'Fate', (state.settings.fate || 'normal') === 'off' ? 'Off — you always succeed' : RP.clip(state.settings.fate, 10)) +
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
    on('statesBtn', function () { showStates = !showStates; render(); });
    on('seqBtn', function () { openSequel(room()); });
    var bar1 = $('statebar');
    if (bar1) bar1.querySelectorAll('[data-sheet]').forEach(function (b) {
      b.onclick = function () { editSheet(b.dataset.sheet); };
    });
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
    r.handback = '';
    r.messages.push(msg);
    RP.rememberTurn(state, r, msg);
    r.updated = Date.now();
    save(); render();
    generate();
  }

  /** After a group reply, the model decides what happens next: another
   *  character answers, or the scene comes back to the player. Without this a
   *  multi-bot room is just a loop of bots talking to each other; with it the
   *  chain also has a hard ceiling (settings.maxChain) so it always returns. */
  function direct(r, speaker) {
    if (r.kind !== 'group' || r.cast.length < 2 || state.settings.director === 'off') return Promise.resolve(false);
    r.maxChain = state.settings.maxChain || RP.MAX_CHAIN;
    if (RP.chainLength(r) >= r.maxChain) {
      r.handback = 'the scene has run ' + RP.chainLength(r) + ' turns without you.';
      r.next = '';
      return Promise.resolve(false);
    }
    return callModel(RP.directorPrompt(r, speaker), [{ role: 'user', content: 'Who speaks next?' }])
      .then(function (text) { return RP.parseDirector(text, r, speaker); })
      .catch(function () { return { next: 'user', reason: 'the director could not be reached' }; })
      .then(function (decision) {
        if (decision.next === 'user') {
          r.handback = decision.reason + '.';
          r.next = '';
          return false;
        }
        r.handback = '';
        r.next = decision.next;
        return true;    // keep the scene running: the next character answers
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

    var retry = opts.retryIndex !== undefined ? r.messages[opts.retryIndex] : null;
    var speaker = retry ? charOf(r, retry.charId) : RP.nextSpeaker(r);
    // Did the player just try something? Then it is not up to them whether it
    // worked. The roll happens here and is handed to the model as an order.
    var answering = !retry && RP.visible(lastVisible(r)) && lastVisible(r).role === 'user';
    var fate = answering ? RP.rollFate(state, r, {}) : null;
    var system = RP.systemFor(state, r, speaker, { fate: fate });
    var history = RP.historyFor(retry ? { kind: r.kind, cast: r.cast, messages: r.messages.slice(0, opts.retryIndex) } : r, 24);
    if (!history.length) history = [{ role: 'user', content: '(The scene opens. Begin in character.)' }];

    callModel(system, history).then(function (text) {
      // Stage directions first: the model may have wounded somebody, spent
      // power, walked a character in, or written one out. They are stripped
      // from the prose and applied to the record before anything renders.
      var staged = RP.parseDirectives(RP.stripSpeaker(text, speaker.name), r.cast.map(function (c) { return c.name; }));
      var clean = staged.clean.trim();
      var changes = r.mechanics === 'off' ? { lines: [] }
        : RP.applyDirectives(state, r, staged.directives, resolveChar);
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
      if (fate && !retry) {
        // Filed before the turn it decided, so the reader can see why the
        // scene refused them.
        r.messages.splice(r.messages.length - 1, 0, {
          id: RP.uid(), role: 'fate', at: Date.now(), fate: fate.key, pill: fate.pill,
        });
      }
      if (changes.lines.length) {
        r.messages.push({ id: RP.uid(), role: 'state', at: Date.now(), lines: changes.lines });
      }
      r.updated = Date.now();
      if (state.settings.voice === 'on' && !retry) speak(r.messages[r.messages.length - 1], r);
      if (!retry) return direct(r, speaker);
      return false;
    }).catch(function (error) {
      r.messages.push({
        id: RP.uid(), role: 'char', charId: speaker.id, error: true, at: Date.now(),
        text: 'The model did not answer: ' + error.message + '\nEndpoint: ' + replyUrl() +
          '\nStart the local model (python workflow/server.py next to LM Studio) or set another endpoint in ⚙.',
      });
      return false;
    }).then(function (chain) {
      busy = false; save(); render();
      // The next character answers on their own — one turn at a time, so the
      // reader can read it, and always stopping at the ceiling.
      if (chain && room() === r) window.setTimeout(function () { generate(); }, 400);
    });
  }

  function lastVisible(r) {
    var msgs = (r && r.messages) || [];
    for (var i = msgs.length - 1; i >= 0; i--) { if (RP.visible(msgs[i])) return msgs[i]; }
    return null;
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
        '<label>Conditions<input type="text" placeholder="wounded, hunted" value="' + esc(cur.flags || '') + '" data-k="flags"></label>' +
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
  loadCast()
    .then(function () { return Promise.all([loadScenes(), loadWire(), loadCollections()]); })
    .then(loadArchive)
    .then(function () { buildBoard(); render(); });
})();
