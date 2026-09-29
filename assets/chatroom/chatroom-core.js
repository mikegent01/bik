/* Waluipedia chatroom — pure logic.
 *
 * Everything in this file is DOM-free on purpose. It is the same block that
 * ships inlined into workflow/roleplay.html as <script id="rp-logic"> (see
 * tools/build-chatroom.py), and tools/tests/test-roleplay-page.mjs runs it
 * headlessly with nothing but a fake `window`, a fake `crypto` and a fake
 * localStorage. If you reach for `document` here, the tests stop working.
 *
 * What lives here:
 *   markdown     the narration renderer (*actions*, **bold**, "speech")
 *   characters   normalisation, per-character voices, letter dividers
 *   prompts      solo / group / persona / style / script / memory / lore
 *   rooms        creation, history for the model, counters, transcripts
 *   script       scene beats that fire on their own schedule
 *   wire         WAHwire posts → scenarios, sorting, used/unused tracking
 *   collections  the archive's own character collections → instant casts
 *   director     who speaks next in a group, and when it comes back to you
 *   memory       cross-chat log, per-character memory, world lore
 *   replay       re-playing a filed chat from another perspective
 *   data         localStorage state, import / export bundles
 */
(function () {
  'use strict';

  var RP = {};

  /* ------------------------------------------------------------------ *
   * small helpers
   * ------------------------------------------------------------------ */

  function uid() {
    try {
      if (typeof crypto !== 'undefined' && crypto && crypto.randomUUID) return crypto.randomUUID();
    } catch (e) { /* fall through to the clock */ }
    return 'id-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }
  RP.uid = uid;

  function esc(value) {
    return String(value === null || value === undefined ? '' : value)
      .replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
      });
  }
  RP.esc = esc;

  function clip(value, limit) {
    var text = String(value === null || value === undefined ? '' : value).replace(/\s+/g, ' ').trim();
    return text.length > limit ? text.slice(0, limit - 1).trim() + '…' : text;
  }
  RP.clip = clip;

  // Stable small integer from a string: used for voices and avatar tints so a
  // character looks and sounds the same in every browser, with no stored state.
  function hash(value) {
    var h = 2166136261, text = String(value || '');
    for (var i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = (h * 16777619) >>> 0; }
    return h >>> 0;
  }
  RP.hash = hash;

  function slug(value) {
    return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
  }
  RP.slug = slug;

  /* ------------------------------------------------------------------ *
   * narration markdown
   * ------------------------------------------------------------------ */

  function inlineMd(text) {
    return String(text)
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
      .replace(/&quot;([^&]*?)&quot;/g, '<span class="q">&quot;$1&quot;</span>');
  }

  /** Render roleplay prose: HTML is escaped first, then *actions* become
   *  italics, **notes** bold, "speech" a styled quote, and `- ` lines a list. */
  RP.md = function (text) {
    var lines = esc(text).split(/\r?\n/);
    var out = [], list = null;
    function flush() { if (list) { out.push('<ul>' + list.join('') + '</ul>'); list = null; } }
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var bullet = /^\s*(?:-|•)\s+(.*)$/.exec(line);
      if (bullet) { (list = list || []).push('<li>' + inlineMd(bullet[1]) + '</li>'); continue; }
      flush();
      if (!line.trim()) { out.push(''); continue; }
      out.push('<p>' + inlineMd(line) + '</p>');
    }
    flush();
    return out.filter(Boolean).join('');
  };

  /* ------------------------------------------------------------------ *
   * characters
   * ------------------------------------------------------------------ */

  /** One archive record → one playable character card. */
  RP.normChar = function (record) {
    record = record || {};
    var name = clip(record.name || record.id || 'Unnamed', 60);
    return {
      id: String(record.id || slug(name) || uid()),
      name: name,
      title: clip(record.title, 120),
      race: clip(record.race, 40),
      affiliation: clip(record.affiliation, 120),
      status: clip(record.status, 120),
      summary: clip(record.summary || record.description, 320),
      // The filed description is what makes a character behave like
      // themselves rather than like a name with a voice, so it travels with
      // them into the prompt instead of being thrown away at load.
      description: clip(record.description, 900),
      faction: clip(record.faction || record.membership, 80),
      faiths: clip(record.faiths, 90),
      level: Number(record.level || 0) || 0,
      powerLevel: Number(record.powerLevel || 0) || 0,
      fameScore: Number(record.fameScore || 0) || 0,
      fameTier: clip(record.fameTier, 40),
      image: String(record.image || ''),
      // The filing account behind the card. Characters carry their own when
      // the archive records one; otherwise the archive itself is the author.
      handle: String(record.handle || record.creator || 'waluipedia').replace(/^@/, ''),
      tags: Array.isArray(record.tags) ? record.tags.slice(0, 8).map(String) : [],
      // Referenced filings: the backfill scan reads these to find the events
      // everybody points at and nobody wrote.
      keyEvents: Array.isArray(record.keyEvents) ? record.keyEvents.slice(0, 12).map(String) : [],
      relatedArticles: Array.isArray(record.relatedArticles) ? record.relatedArticles.slice(0, 14).map(String) : [],
    };
  };

  RP.letterFor = function (name) {
    var first = String(name || '').trim().charAt(0).toUpperCase();
    return /[A-Z]/.test(first) ? first : '#';
  };

  /** Cast browser dividers: A…Z in order, then '#' for digits and symbols. */
  RP.groupByLetter = function (chars) {
    var map = {};
    (chars || []).forEach(function (c) {
      var letter = RP.letterFor(c && c.name);
      (map[letter] = map[letter] || []).push(c);
    });
    return Object.keys(map).sort(function (a, b) {
      if (a === '#') return 1;
      if (b === '#') return -1;
      return a < b ? -1 : a > b ? 1 : 0;
    }).map(function (letter) {
      return {
        letter: letter,
        chars: map[letter].slice().sort(function (a, b) {
          return String(a.name).toLowerCase() < String(b.name).toLowerCase() ? -1 : 1;
        }),
      };
    });
  };

  /** A stable speech-synthesis voice per character — same pitch every time. */
  RP.voiceFor = function (char) {
    var h = hash((char && (char.id || char.name)) || 'voice');
    return {
      rate: Math.round((0.95 + ((h % 21) / 100)) * 100) / 100,          // 0.95 … 1.15
      pitch: Math.round((0.7 + (((h >>> 5) % 71) / 100)) * 100) / 100,   // 0.70 … 1.40
    };
  };

  /** A tint for the fallback avatar, also stable per character. */
  RP.tintFor = function (char) {
    return 'hsl(' + (hash((char && (char.id || char.name)) || 'tint') % 360) + ' 62% 62%)';
  };

  RP.initialsFor = function (name) {
    var parts = String(name || '?').trim().split(/\s+/).slice(0, 2);
    return parts.map(function (p) { return p.charAt(0).toUpperCase(); }).join('') || '?';
  };

  /* ------------------------------------------------------------------ *
   * styles and prompts
   * ------------------------------------------------------------------ */

  RP.STYLES = {
    novel: {
      name: 'Novel',
      dir: 'Write as third-person prose fiction: physical detail, quoted speech, a paragraph or three. Never narrate for the user.',
    },
    script: {
      name: 'Script',
      dir: 'Write as a screenplay beat: terse stage directions in the present tense, then the spoken line. Keep it short and shootable.',
    },
    casual: {
      name: 'Casual',
      dir: 'Write the way people actually talk: short turns, contractions, interruptions. One or two lines unless something big happens.',
    },
    archivist: {
      name: 'Archivist',
      dir: 'Write as though the turn is being filed into an in-world archive: dated, specific, named objects, dry asides.',
    },
  };

  function styleDir(opts) {
    var style = (opts && opts.style) || 'novel';
    return (RP.STYLES[style] || RP.STYLES.novel).dir;
  }

  /** The dossier handed to the model. The filed description is the whole
   *  point — it is what makes a character argue, refuse and joke like
   *  themselves — so it goes in at length, with the role it implies. */
  function card(char, opts) {
    opts = opts || {};
    var lines = ['Name: ' + char.name];
    if (char.title) lines.push('Title: ' + char.title);
    if (char.race) lines.push('Race: ' + char.race);
    if (char.affiliation) lines.push('Affiliation: ' + char.affiliation);
    if (char.faction && char.faction !== char.affiliation) lines.push('Faction: ' + char.faction);
    if (char.faiths) lines.push('Faith: ' + char.faiths);
    if (char.status) lines.push('Status right now: ' + char.status);
    if (char.fameTier) lines.push('Standing: ' + char.fameTier + (char.powerLevel ? ' · power ' + char.powerLevel : ''));
    if (char.summary) lines.push('About: ' + char.summary);
    if (char.description && !opts.short) {
      lines.push('Filed description — play this, not a generic version of the name:');
      lines.push(clip(char.description, 900));
    }
    if (char.why) lines.push('Why they are in this scene: ' + char.why);
    var role = RP.roleFor(char);
    if (role) lines.push('How they behave: ' + role);
    return lines.join('\n');
  }
  RP.card = card;

  /** A behaviour line inferred from what the archive already says. It is
   *  deliberately blunt: small models need the instruction, not the hint. */
  RP.roleFor = function (char) {
    var text = ((char.title || '') + ' ' + (char.status || '') + ' ' + (char.summary || '') + ' ' + (char.description || '')).toLowerCase();
    var traits = [];
    function has(re, line) { if (re.test(text)) traits.push(line); }
    has(/archivist|historian|scribe|record|librarian/, 'cites the record, dates things, corrects other people\u2019s facts');
    has(/soldier|captain|general|commander|warlord|legion|guard|knight|paratroopa/, 'thinks in ground, orders and casualties; answers threats before questions');
    has(/king|queen|lord|lady|prince|princess|speaker|delegate|noble|regent/, 'speaks as though the room already reports to them, and notices who does not');
    has(/merchant|debt|gold|acquisitions|coin|profit|bank|business/, 'prices everything out loud, including favours');
    has(/thief|looter|infiltrat|rogue|spy|smuggler/, 'checks exits, pockets what is loose, and lies smoothly when it is easier');
    has(/mage|magic|arcane|wizard|sorcer|ice|witch|oracle/, 'reaches for the arcane answer first, and resents being asked to explain it');
    has(/ghost|spirit|undead|revenant|corrupted|shadow/, 'is not bound by the room\u2019s rules and does not pretend to be');
    has(/monster|beast|titan|dragon|plant|creature/, 'communicates physically before verbally');
    has(/coward|reluctant|nervous|anxious|traumati/, 'wants to leave, says so, and stays anyway');
    has(/comedian|jester|prank|joke|clown|chaos/, 'undercuts the serious line, especially when it is the wrong moment');
    has(/injured|wounded|dying|bleeding|missing/, 'is hurt, and it shows in what they can and cannot do');
    return traits.slice(0, 4).join('; ');
  };

  var RULES = [
    'Stay in character at all times: never mention being an AI, a model, or a chat assistant, and never break the fiction to apologise.',
    'Put actions, gestures and scene detail between asterisks like *this*. Put speech in "quotes".',
    'Write only your own character. Never speak, act or decide for the user.',
    'Never end the turn with a summary or a question about what the user wants to do next unless your character would really ask it.',
  ].join('\n');

  /** The system prompt for a one-on-one chat. */
  RP.soloPrompt = function (char, opts) {
    char = RP.normChar(char);
    return [
      'You are ' + char.name + ', a character in the Waluipedia archive. Play them, do not describe them.',
      '',
      'CHARACTER CARD',
      card(char),
      '',
      'IN-CHARACTER RULES',
      RULES,
      '',
      'STYLE',
      styleDir(opts),
    ].join('\n');
  };

  /** The system prompt for one turn of a group chat: the whole cast is listed,
   *  but the reply may only contain the current speaker's own words. */
  RP.groupPrompt = function (cast, speaker, opts) {
    var list = (cast || []).map(RP.normChar);
    var who = RP.normChar(speaker || list[0] || {});
    var out = [
      'This is a group roleplay scene in the Waluipedia archive.',
      '',
      'THE CAST',
      list.map(function (c) {
        return '- ' + c.name + (c.title ? ' — ' + c.title : '') +
          (c.affiliation ? ' (' + c.affiliation + ')' : '') +
          (c.id !== who.id && c.summary ? '\n    ' + clip(c.summary, 200) : '');
      }).join('\n'),
      '',
      'YOU ARE ' + who.name,
      card(who),
      '',
      'Write the next turn speaking ONLY as ' + who.name + '. Do not write lines, actions or thoughts for any other character, and do not narrate the user.',
      '',
      'IN-CHARACTER RULES',
      RULES,
      '',
      'STYLE',
      styleDir(opts),
    ];
    if (opts && opts.scene) out.push('', 'THE SCENE', String(opts.scene));
    return out.join('\n');
  };

  /** Who the user is playing. Empty persona adds nothing to the prompt. */
  RP.personaBlock = function (persona) {
    var text = String(persona || '').trim();
    if (!text) return '';
    return 'THE USER PLAYS\n' + text + '\nAddress them as that person; never tell them what they do.';
  };

  /* ------------------------------------------------------------------ *
   * rooms
   * ------------------------------------------------------------------ */

  /** Create a chat room. One character is a solo chat; two or more is a group.
   *  `opts.scene` sets the situation, `opts.opener` files the first scene card,
   *  `opts.beats` attaches a filed timeline that will run on its own. */
  RP.newRoom = function (cast, opts) {
    opts = opts || {};
    var list = (cast || []).map(RP.normChar);
    var kind = list.length > 1 ? 'group' : 'solo';
    var room = {
      id: opts.id || uid(),
      kind: kind,
      title: opts.title || list.map(function (c) { return c.name; }).join(' + ') || 'New chat',
      cast: list,
      messages: [],
      scene: String(opts.scene || ''),
      sceneName: String(opts.sceneName || ''),
      sceneImage: String(opts.sceneImage || ''),
      // When this is happening in-world. Every memory filed from this room
      // is stamped with it, and the model is told which filings it predates.
      date: String(opts.date || ''),
      perspective: String(opts.perspective || ''),
      replayOf: String(opts.replayOf || ''),
      persona: String(opts.persona || ''),
      style: String(opts.style || 'novel'),
      beats: Array.isArray(opts.beats) ? opts.beats.slice(0, 24) : [],
      beatIndex: 0,
      autoBeats: opts.autoBeats === undefined ? true : Boolean(opts.autoBeats),
      statePreset: opts.statePreset || 'rpg',
      states: {},
      mechanics: opts.mechanics === undefined ? 'on' : opts.mechanics,
      sequelOf: String(opts.sequelOf || ''),
      canon: String(opts.canon || ''),
      sequelCount: 0,
      next: '',
      created: Date.now(),
      updated: Date.now(),
    };
    // Sheets: carried in from a previous scene, or started from the setup.
    RP.ensureSheets(room, room.statePreset, opts.setup || {});
    if (opts.states) {
      Object.keys(opts.states).forEach(function (id) {
        if (room.states[id]) room.states[id] = JSON.parse(JSON.stringify(opts.states[id]));
      });
    }
    if (opts.opener) room.messages.push({ id: uid(), role: 'scene', text: String(opts.opener), at: Date.now() });
    return room;
  };

  /** The text actually on screen for a message (swipes pick an alternative). */
  RP.textOf = function (msg) {
    if (!msg) return '';
    if (Array.isArray(msg.alts) && msg.alts.length) {
      var i = Math.max(0, Math.min(msg.alts.length - 1, msg.alt || 0));
      return String(msg.alts[i]);
    }
    return String(msg.text || '');
  };

  function visible(msg) {
    return msg && !msg.error && !msg.beat && (msg.role === 'user' || msg.role === 'char');
  }
  RP.visible = visible;

  /** Chat history in the model's own shape. Scene cards, fired beats and the
   *  page's own failure notices are never sent: the model sees only play. */
  RP.historyFor = function (room, limit) {
    var group = room && room.kind === 'group';
    var out = (room && room.messages ? room.messages : []).filter(visible).map(function (m) {
      if (m.role === 'user') return { role: 'user', content: RP.textOf(m) };
      var name = '';
      if (group) {
        var who = (room.cast || []).filter(function (c) { return c.id === m.charId; })[0];
        name = who ? who.name + ': ' : '';
      }
      return { role: 'assistant', content: name + RP.textOf(m) };
    });
    return limit ? out.slice(-limit) : out;
  };

  /** Turns on screen — the number the room list and character cards show. */
  RP.counter = function (room) {
    return (room && room.messages ? room.messages : []).filter(visible).length;
  };

  /** How many rooms a character appears in, across every saved chat. */
  RP.roomCountFor = function (rooms, charId) {
    return (rooms || []).filter(function (r) {
      return (r.cast || []).some(function (c) { return c.id === charId; });
    }).length;
  };

  /** Every turn a character has spoken, across every saved chat. */
  RP.turnCountFor = function (rooms, charId) {
    return (rooms || []).reduce(function (sum, r) {
      return sum + (r.messages || []).filter(function (m) {
        return visible(m) && m.role === 'char' && m.charId === charId;
      }).length;
    }, 0);
  };

  /* ------------------------------------------------------------------ *
   * speaker rotation
   * ------------------------------------------------------------------ */

  RP.rotationAfter = function (cast, charId) {
    var list = cast || [];
    if (!list.length) return null;
    var at = -1;
    for (var i = 0; i < list.length; i++) if (list[i].id === charId) at = i;
    return list[(at + 1) % list.length];
  };

  /** Who speaks next: an explicit pick if it is in the cast, otherwise the
   *  rotation carried on from whoever answered last. */
  RP.nextSpeaker = function (room, pick) {
    var cast = (room && room.cast) || [];
    if (!cast.length) return null;
    var wanted = String(pick || (room && room.next) || '');
    var chosen = cast.filter(function (c) { return c.id === wanted; })[0];
    if (chosen) return chosen;
    var last = null;
    (room.messages || []).forEach(function (m) { if (m.role === 'char' && !m.error) last = m.charId; });
    return last ? RP.rotationAfter(cast, last) : cast[0];
  };

  /** Models like to prefix their own name. Strip it, but only when it really
   *  is a name — "Just a line: with a colon later" is prose, not a label. */
  RP.stripSpeaker = function (text, name) {
    var value = String(text || '').replace(/^\s+/, '');
    if (name) {
      var head = String(name) + ':';
      if (value.slice(0, head.length).toLowerCase() === head.toLowerCase()) {
        return value.slice(head.length).trim();
      }
    }
    var m = /^([A-Z][\w'’.-]*(?: [A-Z][\w'’.-]*){0,2}):\s+/.exec(value);
    return m ? value.slice(m[0].length) : value;
  };

  /* ------------------------------------------------------------------ *
   * scripted scenes — the filed event runs on its own schedule
   * ------------------------------------------------------------------ */

  RP.beatProgress = function (room) {
    var total = (room && room.beats ? room.beats : []).length;
    var at = Math.min(room && room.beatIndex || 0, total);
    return { at: at, total: total, remaining: Math.max(0, total - at) };
  };

  /** Fire the next filed beat: it becomes a scene card in the room and enters
   *  the script block, but never the model's chat history. */
  RP.fireBeat = function (room) {
    var progress = RP.beatProgress(room);
    if (!progress.remaining) return null;
    var beat = room.beats[room.beatIndex];
    room.beatIndex = progress.at + 1;
    room.messages.push({
      id: uid(), role: 'scene', beat: true, at: Date.now(),
      text: (beat.time ? beat.time + ' — ' : '') + beat.beat + (beat.detail ? '\n' + beat.detail : ''),
    });
    return beat;
  };

  /** Visible turns played since the last beat fired. */
  RP.turnsSinceBeat = function (room) {
    var msgs = (room && room.messages) || [];
    var since = 0;
    for (var i = msgs.length - 1; i >= 0; i--) {
      if (msgs[i].beat) break;
      if (visible(msgs[i])) since++;
    }
    return since;
  };

  /** The main event moves without waiting for the player: two turns is a beat. */
  RP.autoAdvance = function (room) {
    if (!room || !room.autoBeats) return false;
    if (!RP.beatProgress(room).remaining) return false;
    return RP.turnsSinceBeat(room) >= 2;
  };

  /** The prompt section that keeps the filed event on its rails while the
   *  player does something else entirely in the same place. */
  RP.scriptBlock = function (room) {
    var beats = (room && room.beats) || [];
    if (!beats.length) return '';
    var progress = RP.beatProgress(room);
    var out = ['THE MAIN EVENT (runs on its own script)'];
    out.push('The filed session "' + (room.sceneName || room.title) + '" is happening around you and stays on script: '
      + 'it happens whether or not the characters here take part. You are playing this from a DIFFERENT perspective '
      + '— people with their own business in the same place. Do not retell the main event; react to it.');
    if (progress.at > 0) {
      out.push('', 'Main event so far:');
      beats.slice(0, progress.at).forEach(function (b) {
        out.push('- ' + (b.time ? b.time + ': ' : '') + b.beat);
      });
    }
    if (progress.remaining) {
      var next = beats[progress.at];
      out.push('', 'Scheduled to happen next: ' + (next.time ? next.time + ' — ' : '') + next.beat
        + (next.detail ? ' (' + next.detail + ')' : ''),
        'Do not make it happen early. Let it arrive on its own.');
    } else {
      out.push('', 'The main event has run its course; the aftermath is yours to play.');
    }
    return out.join('\n');
  };

  /* ------------------------------------------------------------------ *
   * the WAHwire — posts become scenarios
   * ------------------------------------------------------------------ */

  /** One filed wire post → the shape the dashboard and the scenario builder
   *  both use. `profiles` (from wahwire/profiles.json) supplies the avatar. */
  RP.normPost = function (record, profiles) {
    record = record || {};
    var author = String(record.author || 'unknown');
    var profile = (profiles || {})[author] || {};
    var links = Array.isArray(record.links) ? record.links : [];
    var body = String(record.content || '');
    if (Array.isArray(record.thread) && record.thread.length) body += '\n' + record.thread.join('\n');
    return {
      id: String(record.id || uid()),
      author: author,
      authorName: clip(profile.name || RP.prettyId(author), 60),
      avatar: String(profile.avatar || ''),
      type: String(record.type || 'text'),
      status: String(record.status || 'posted'),
      order: Number(record.order || 0),
      timestamp: clip(record.timestamp, 80),
      content: clip(body, 1200),
      likes: Number(record.likes || 0),
      image: String(record.image || ''),
      tags: (record.tags || []).map(String).slice(0, 8),
      chars: links.filter(function (l) { return l && l.type === 'character'; }).map(function (l) { return String(l.id); })
        .concat([author]),
      events: links.filter(function (l) { return l && (l.type === 'event' || l.type === 'battle'); }).map(function (l) { return String(l.id); }),
      comments: (record.comments || []).slice(0, 6).map(function (c) {
        return { author: String(c.author || ''), content: clip(c.content, 220), likes: Number(c.likes || 0) };
      }),
    };
  };

  RP.POST_SORTS = {
    newest: { name: 'Newest first', fn: function (a, b) { return (b.order || 0) - (a.order || 0); } },
    oldest: { name: 'Oldest first', fn: function (a, b) { return (a.order || 0) - (b.order || 0); } },
    liked: { name: 'Most liked', fn: function (a, b) { return (b.likes || 0) - (a.likes || 0); } },
    loudest: { name: 'Most argued over', fn: function (a, b) { return (b.comments || []).length - (a.comments || []).length; } },
  };

  RP.sortPosts = function (posts, mode) {
    var sort = RP.POST_SORTS[mode] || RP.POST_SORTS.newest;
    return (posts || []).slice().sort(sort.fn);
  };

  /** A post is "used" once it has been played as a scenario in this browser.
   *  The unused view is how a reader finds the corners of the wire nobody has
   *  touched yet — 196 filed posts, and most of them have never been a scene. */
  RP.postUsed = function (state, postId) {
    return Boolean((state.usedPosts || {})[String(postId)]);
  };

  RP.markPostUsed = function (state, postId, room) {
    state.usedPosts = state.usedPosts || {};
    state.usedPosts[String(postId)] = { at: Date.now(), roomId: (room && room.id) || '', roomTitle: (room && room.title) || '' };
    return state.usedPosts[String(postId)];
  };

  RP.POST_VIEWS = { all: 'All posts', unused: 'Unused', used: 'Already played', unfiled: 'Never posted' };

  /** Filter the wire: by view (all / unused / played / drafts the archive
   *  never posted), by a text query, and by a character who is involved. */
  RP.filterPosts = function (posts, opts, state) {
    opts = opts || {};
    var q = String(opts.query || '').toLowerCase().trim();
    return (posts || []).filter(function (p) {
      if (opts.view === 'unused' && RP.postUsed(state, p.id)) return false;
      if (opts.view === 'used' && !RP.postUsed(state, p.id)) return false;
      if (opts.view === 'unfiled' && p.status === 'posted') return false;
      if (opts.charId && p.chars.indexOf(opts.charId) < 0) return false;
      if (!q) return true;
      return (p.content + ' ' + p.authorName + ' ' + p.tags.join(' ')).toLowerCase().indexOf(q) >= 0;
    });
  };

  /** A wire post → a playable scenario. The post is the situation, its
   *  comments are the beats (the argument arrives on its own schedule), and
   *  everyone it links to is the suggested cast. */
  RP.scenarioFromPost = function (post, castById) {
    var suggested = post.chars.map(function (id) { return (castById || {})[id]; }).filter(Boolean);
    var seen = {}, cast = [];
    suggested.forEach(function (c) { if (!seen[c.id]) { seen[c.id] = 1; cast.push(c); } });
    var beats = post.comments.map(function (c, i) {
      var who = ((castById || {})[c.author] || {}).name || String(c.author || 'someone').replace(/_/g, ' ');
      return { time: 'reply ' + (i + 1), beat: who + ' answers the post', detail: c.content };
    });
    return {
      id: 'wire:' + post.id,
      postId: post.id,
      name: clip(post.authorName + ' on the wire — ' + post.content, 70),
      summary: post.content,
      scene: 'A WAHwire post is doing the rounds. ' + post.authorName + ' posted, ' + post.timestamp + ':\n“'
        + clip(post.content, 700) + '”\nPlay the hours around that post: the people in it, the people answering it, '
        + 'and the people who wish it had never been filed.',
      image: post.image,
      date: post.timestamp,
      tags: post.tags,
      likes: post.likes,
      suggestedCast: cast,
      beats: beats,
      source: 'wahwire',
    };
  };


  /* ------------------------------------------------------------------ *
   * What Ifs — a few long scenarios, composed by the page, not the model
   *
   * The rule here is quality over quantity. A scenario is not a sentence
   * and a cast list: it is a brief long enough to run a session from —
   * the divergence, what the archive already has on record, the room, who
   * is standing in it and why, what is at stake, and the questions the
   * table is supposed to answer. Everything is assembled from filed
   * records by the functions below; the model is never asked to invent a
   * premise, so the workload stays where it belongs.
   * ------------------------------------------------------------------ */

  // A brief shorter than this is a prompt, not a scenario, and is dropped.
  RP.WHATIF_MIN_BRIEF = 900;
  RP.WHATIF_MIN_BEATS = 3;

  RP.prettyId = function (id) {
    return String(id || '').split(/[_\-\s]+/).filter(Boolean).map(function (w) {
      return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(' ');
  };

  function sentences(text) {
    return String(text || '').replace(/\s+/g, ' ').split(/(?<=[.!?])\s+/).filter(function (s) { return s.trim().length > 3; });
  }
  RP.sentences = sentences;

  function paragraphs(text) {
    return String(text || '').split(/\n{2,}/).map(function (p) {
      return p
        .replace(/^#{1,6}\s*/gm, '')                       // headings
        .replace(/^>\s?/gm, '')                            // block quotes
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')           // links → their text
        .replace(/[*_`]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    }).filter(function (p) {
      if (p.length <= 80) return false;
      if (/^filing note/i.test(p)) return false;            // apparatus, not scene
      if (/^[A-Z0-9 ,'’&—-]{24,}$/.test(p)) return false;   // shouted title lines
      return true;
    });
  }

  /** Long prose → beats with real detail. Used wherever a record has a
   *  description but no filed timeline: each paragraph becomes one beat,
   *  its first sentence the headline and the whole paragraph the detail. */
  RP.beatsFromProse = function (text, limit, label) {
    var out = [];
    paragraphs(text).forEach(function (p, i) {
      if (out.length >= (limit || 6)) return;
      var head = sentences(p)[0] || p;
      out.push({
        time: (label || 'beat') + ' ' + (i + 1),
        beat: clip(head.replace(/\*\*/g, ''), 140),
        detail: clip(p.replace(/\*\*/g, ''), 420),
      });
    });
    return out;
  };

  function castLine(c) {
    return '- ' + c.name + (c.why ? ' — ' + c.why : (c.title ? ' — ' + c.title : ''));
  }

  /** The shared shape. `brief` is what the reader sees; `scene` is the
   *  condensed version the model is handed as the situation. */
  function scenario(fields) {
    var cast = (fields.cast || []).filter(Boolean);
    var brief = fields.briefParts.filter(Boolean).join('\n\n');
    return {
      id: fields.id,
      kind: fields.kind,                 // filed | divergence | gap | chamber | flashpoint | custom
      kindLabel: fields.kindLabel,
      name: clip(fields.name, 110),
      premise: clip(fields.premise, 420),
      brief: brief,
      scene: fields.scene || brief,
      image: fields.image || '',
      date: clip(fields.date, 80),
      tags: (fields.tags || []).filter(Boolean).slice(0, 6).map(function (t) { return clip(t, 30); }),
      suggestedCast: cast,
      beats: (fields.beats || []).filter(function (b) { return b && b.beat; }).slice(0, 10),
      questions: (fields.questions || []).filter(Boolean).slice(0, 5),
      source: fields.source || '',
      weight: fields.weight || 0,
      // Starting state for the room this scenario opens: sheets carried over
      // from a previous scene, or a setup written in the scenario settings.
      states: fields.states || null,
      statePreset: fields.statePreset || '',
      setup: fields.setup || null,
    };
  }

  /** Is this scenario worth a card? Long enough, peopled, and scripted. */
  RP.scenarioQuality = function (s) {
    if (!s) return 0;
    var detail = s.beats.reduce(function (n, b) { return n + String(b.detail || '').length; }, 0);
    if (s.brief.length < RP.WHATIF_MIN_BRIEF) return 0;
    if (s.beats.length < RP.WHATIF_MIN_BEATS) return 0;
    if (s.suggestedCast.length < 2) return 0;
    return s.brief.length + detail + (s.suggestedCast.length * 200) + (s.weight * 500);
  };

  function whyFor(role) {
    return clip(role, 110);
  }

  /* ---- engine 1: the archive's own filed What-Ifs ---- */

  RP.whatIfFromFiled = function (record, castById) {
    if (!record || !record.id) return null;
    var chapters = (record.chapters || []).filter(function (c) { return c && (c.heading || c.body); });
    var tagCast = (record.tags || []).map(function (t) {
      return (castById || {})[slug(t)] || null;
    }).filter(Boolean);
    var subject = (castById || {})[slug(record.subject)];
    var cast = [];
    var seen = {};
    [subject].concat(tagCast).filter(Boolean).forEach(function (c) {
      if (seen[c.id]) return; seen[c.id] = 1;
      cast.push(Object.assign({}, c, { why: c.id === (subject || {}).id ? 'the subject of the branch' : 'named in the filing' }));
    });
    var beats = chapters.slice(0, 8).map(function (c, i) {
      var body = sentences(String(c.body || '').replace(/[*_>]/g, ''));
      return {
        time: c.phase ? clip(c.phase, 40) : 'chapter ' + (i + 1),
        beat: clip(c.heading || ('Chapter ' + (i + 1)), 140),
        detail: clip(body.slice(0, 3).join(' '), 420),
      };
    });
    return scenario({
      id: 'whatif:' + record.id,
      kind: 'filed', kindLabel: 'Filed What-If',
      name: clip(record.title, 110),
      premise: record.premise || record.summary,
      image: record.subjectImage || '',
      date: clip(record.filed, 60),
      tags: record.tags,
      weight: 3,
      source: 'whatifs.json → ' + record.id,
      cast: cast,
      beats: beats,
      questions: (record.findings || []).slice(0, 3).map(function (f) { return f.t; }),
      briefParts: [
        '**The divergence.** ' + (record.divergence || record.premise || ''),
        record.epigraph ? '> ' + String(record.epigraph).replace(/\s+/g, ' ') : '',
        '**What the archive already filed.** ' + (record.summary || ''),
        '**How it ran.** The filing has ' + chapters.length + ' chapters' +
          (record.wordCount ? ', about ' + record.wordCount + ' words' : '') +
          (record.resetsTotal ? ', and ' + record.resetsTotal + ' resets that were never going to be enough' : '') +
          '. This scenario picks the branch up at chapter one and lets it run again with you in it — the filed chapters fire as beats, on their own schedule, while you play the people around them.',
        cast.length ? '**Who is in the room.**\n' + cast.map(castLine).join('\n') : '',
        record.verdict && record.verdict.body ? '**The verdict on record.** ' + clip(record.verdict.body, 600) : '',
        '**What is at stake.** ' + clip(record.outcome || record.summary, 400),
      ],
    });
  };

  /* ---- engine 2: the wanted pages — people the archive names but never wrote ---- */

  /** Scan the filed records for people who are referenced and have no
   *  dossier. This is the archive's own Wanted Pages board, recomputed here:
   *  every one of these is a scene nobody has played because the person does
   *  not exist on paper yet. */
  RP.wantedFrom = function (events, factions, castById, limit) {
    var counts = {};
    // Ids that already have a record of some kind are not gaps: a faction or
    // a filed event named in a participant list is a link, not a missing page.
    var known = {};
    (events || []).forEach(function (e) { known[slug(e.id)] = 1; known[slug(e.name)] = 1; });
    (factions || []).forEach(function (f) { known[slug(f.id)] = 1; known[slug(f.name)] = 1; });
    // Bodies get named in participant lists too ("The Iron Legion", "The
    // Regal Empire"). They are institutions with their own records, not
    // people the archive forgot to write up.
    var BODY = /\b(empire|legion|guild|order|patrol|army|navy|company|council|court|clan|house|crew|troop|federation|congress|diet|kingdom|republic|division|bureau|ministry|senate|assembly|toads|forces|garrison)\b/i;
    function note(id, name, from) {
      var key = slug(id || name);
      if (!key || (castById || {})[key] || known[key]) return;
      if (BODY.test(String(name || key).replace(/_/g, ' '))) return;
      var entry = counts[key] || (counts[key] = { id: key, name: clip(name || RP.prettyId(key), 60), count: 0, from: [] });
      entry.count++;
      if (entry.from.length < 6 && from) entry.from.push(from);
    }
    (events || []).forEach(function (e) {
      var others = (e.participants || []).map(function (x) { return String((x && x.id) || ''); });
      (e.participants || []).forEach(function (p) {
        if (!p) return;
        note(p.id, p.name, {
          id: e.id, name: e.name, kind: 'event', summary: e.summary, role: p.role,
          location: e.location, date: e.date, image: e.image, with: others,
          outcome: e.outcome, description: e.description,
          // The filing's own timeline becomes the script for the scene they
          // walked through — the one the archive never wrote them into.
          entries: ((e.timeline || {}).entries || []).slice(0, 8),
        });
      });
    });
    (factions || []).forEach(function (f) {
      var roster = (f.leadership || []).concat(f.notableMembers || []);
      var others = roster.map(function (x) { return String((x && x.id) || ''); });
      roster.forEach(function (m) {
        if (!m) return;
        note(m.id, m.name, { id: f.id, name: f.name, kind: 'faction', summary: f.summary, role: m.role, with: others });
      });
    });
    return Object.keys(counts).map(function (k) { return counts[k]; })
      .filter(function (w) { return w.count >= 1 && w.from.length; })
      .sort(function (a, b) { return b.count - a.count; })
      .slice(0, limit || 12);
  };

  RP.whatIfFromGap = function (wanted, castById) {
    if (!wanted || !wanted.from.length) return null;
    var anchor = wanted.from[0];
    // The unwritten person is playable: that is the entire point of the scene.
    var ghost = RP.normChar({
      id: wanted.id, name: wanted.name,
      title: 'Unwritten — named in ' + wanted.count + ' filings, dossier never filed',
      summary: 'Everything on record about ' + wanted.name + ' is secondhand: ' +
        wanted.from.map(function (f) { return (f.role ? f.role + ', in ' : 'named in ') + f.name; }).join('; ') + '.',
    });
    ghost.why = 'the person nobody has written down';
    var cast = [ghost];
    var seenCast = {};
    wanted.from.forEach(function (f) {
      (f.with || []).forEach(function (id) {
        var c = (castById || {})[slug(id)];
        if (!c || seenCast[c.id] || cast.length >= 6) return;
        seenCast[c.id] = 1;
        cast.push(Object.assign({}, c, { why: 'filed alongside them in ' + f.name }));
      });
    });
    var beats = wanted.from.slice(0, 3).map(function (f) {
      return {
        time: f.kind === 'event' ? 'on record' : 'on the roster',
        beat: clip(wanted.name + ' is named in ' + f.name, 140),
        detail: clip((f.role ? f.role + '. ' : '') + (f.summary || ''), 420),
      };
    });
    // Then the filing itself runs, beat by beat, with them in the room.
    (anchor.entries || []).slice(0, 6).forEach(function (e) {
      if (!e || !e.beat) return;
      beats.push({ time: clip(e.time, 60) || 'the filing', beat: clip(e.beat, 140), detail: clip(e.detail, 420) });
    });
    if (beats.length < 4) {
      // No filed timeline on that record: its own prose carries the scene.
      beats = beats.concat(RP.beatsFromProse(
        [anchor.summary, anchor.description, anchor.outcome].filter(Boolean).join('\n\n'), 5, 'the filing'));
    }
    return scenario({
      id: 'gap:' + wanted.id,
      kind: 'gap', kindLabel: 'Wanted page',
      name: 'What if we finally met ' + wanted.name + '?',
      premise: wanted.name + ' is named in ' + wanted.count + ' filing' + (wanted.count === 1 ? '' : 's') +
        ' and has never been written up. ' +
        'This is the scene where the archive stops referring to them and has to look at them.',
      image: anchor.image || '',
      date: clip(anchor.date, 60),
      tags: ['wanted page', 'unwritten', anchor.kind],
      weight: Math.min(3, wanted.count / 3),
      source: 'wanted pages → ' + wanted.id,
      cast: cast,
      beats: beats,
      questions: [
        'Who are they when they are not being referred to?',
        'Do the filings that name them agree with each other?',
        'What did the archive get wrong by never asking?',
      ],
      briefParts: [
        '**The gap.** ' + wanted.name + ' has been referenced ' +
          (wanted.count === 1 ? 'once' : wanted.count + ' times') + ' across the archive — ' +
          wanted.from.map(function (f) { return f.name; }).join(', ') +
          ' — and has no dossier of their own. Every fact about them is a sentence in somebody else\u2019s filing.',
        '**What the record says, secondhand.**\n' + wanted.from.slice(0, 4).map(function (f) {
          return '- *' + f.name + '*' + (f.role ? ' — ' + clip(f.role, 180) : '') + (f.summary ? '. ' + clip(f.summary, 240) : '');
        }).join('\n'),
        anchor.location ? '**The room.** ' + anchor.location + (anchor.date ? ', ' + anchor.date : '') + '. ' +
          'That is where the record last put them, so that is where this starts.' : '',
        '**Who is in the room.**\n' + cast.map(castLine).join('\n'),
        anchor.summary ? '**The filing they walked through.** ' + clip(anchor.summary, 700) : '',
        '**What is known, and what is not.** Known: they were there, they did what the role line says, and at least ' +
          wanted.count + ' record' + (wanted.count === 1 ? '' : 's') + ' depend' + (wanted.count === 1 ? 's' : '') +
          ' on it. Not known: where they came from, who they answer to, what they wanted out of that day, and whether ' +
          'anyone has asked them since. None of that is contradicted by the archive, because the archive never went ' +
          'looking — which means this scene can settle it rather than argue with it.',
        '**What is at stake.** A name that has been doing work in ' + wanted.count + ' filing' +
          (wanted.count === 1 ? '' : 's') + ' without ever being accountable to one. Play it and the archive gets a ' +
          'first-hand account instead of a hole — which is the only way a wanted page ever gets written.',
      ],
    });
  };

  /* ---- engine 3: a filed event, turned at its hinge ---- */

  RP.whatIfFromEvent = function (event, castById) {
    var entries = ((event && event.timeline) || {}).entries || [];
    if (entries.length < 4 && event) {
      // Events filed as prose rather than a timeline still have a shape:
      // their paragraphs are the beats, and the middle one is the hinge.
      entries = RP.beatsFromProse([event.summary, event.description, event.outcome].filter(Boolean).join('\n\n'), 8, 'the day');
    }
    if (entries.length < 4 || !(event.participants || []).length) return null;
    var fromProse = !((event.timeline || {}).entries || []).length;
    var hingeAt = Math.max(1, Math.floor(entries.length / 2));
    var hinge = entries[hingeAt];
    if (!hinge || !hinge.beat) return null;
    var cast = (event.participants || []).slice(0, 6).map(function (p) {
      var c = (castById || {})[slug(p.id)] || (castById || {})[slug(p.name)];
      return c ? Object.assign({}, c, { why: whyFor(p.role) }) : null;
    }).filter(Boolean);
    var after = entries.slice(hingeAt).slice(0, 6).map(function (e, i) {
      return {
        time: clip(e.time, 60) || ('beat ' + (i + 1)),
        beat: clip(e.beat, 140),
        detail: clip(e.detail, 420) + (i === 0 ? ' — except this time it does not go the way the record says.' : ''),
      };
    });
    return scenario({
      id: 'turn:' + (event.id || slug(event.name)),
      kind: 'divergence', kindLabel: 'Turned at the hinge',
      name: fromProse
        ? 'What if ' + clip(event.name, 60) + ' had turned at the halfway mark?'
        : 'What if \u201C' + clip(hinge.beat, 64) + '\u201D had gone the other way?',
      premise: 'The filing says ' + clip(hinge.beat, 120) + '. Everything after it in the record depends on that. ' +
        'Take the hinge out and the rest of the day has to be played again.',
      image: event.image || '',
      date: clip(event.date, 70),
      tags: ['divergence', clip(event.era, 30), clip(event.type, 30)],
      weight: 2 + Math.min(2, cast.length / 3),
      source: 'events.json → ' + event.id,
      cast: cast,
      beats: after,
      questions: [
        'Who benefits from the hinge turning?',
        'Which of the filed consequences still happen anyway?',
        'What does the archive have to retract?',
      ],
      briefParts: [
        '**What actually happened.** ' + clip(event.summary, 600),
        '**The hinge.** ' + clip(hinge.time ? hinge.time + ' — ' + hinge.beat : hinge.beat, 200) + '. ' + clip(hinge.detail, 420),
        '**The divergence.** In this branch the hinge fails. The people who were in the room are the same people, ' +
          'standing in the same place, with the same information — they simply do not get the outcome the record ' +
          'gives them. Everything filed after this point is now a question.',
        event.location ? '**The room.** ' + event.location + (event.date ? '. ' + event.date : '') + '.' : '',
        cast.length ? '**Who is in the room.**\n' + cast.map(castLine).join('\n') : '',
        event.outcome ? '**What the record says it cost.** ' + clip(event.outcome, 500) : '',
        '**What is at stake.** ' + (entries.length - hingeAt) + ' filed beats downstream of the hinge, all of them ' +
          'now provisional. The beats still fire on their filed schedule; your job is to play the people who have to ' +
          'live with them arriving differently.',
      ],
    });
  };

  /* ---- engine 4: the chambers — a body, a vote, a docket ---- */

  RP.whatIfFromBody = function (body, cast, congress) {
    var needle = String(body.name || '').toLowerCase().replace(/^the\s+/, '');
    var members = (cast || []).filter(function (c) {
      var hay = (c.affiliation + ' ' + c.title + ' ' + c.summary).toLowerCase();
      return needle.length > 3 && hay.indexOf(needle) >= 0;
    }).slice(0, 6).map(function (c) { return Object.assign({}, c, { why: c.affiliation || c.title }); });
    (body.leadership || []).forEach(function (m) {
      var hit = (cast || []).filter(function (c) { return c.id === slug(m.id || m.name); })[0];
      if (hit && !members.some(function (x) { return x.id === hit.id; })) {
        members.unshift(Object.assign({}, hit, { why: m.role || 'leadership' }));
      }
    });
    var beats = RP.beatsFromProse(body.description, 6, 'session');
    var sessions = ((congress || {}).sessions || []).slice(0, 3);
    if (beats.length < 4 && sessions.length) {
      sessions.forEach(function (s) {
        beats.push({ time: clip(s.date || String(s.year), 50), beat: clip(s.name, 140), detail: clip(s.summary, 420) });
      });
    }
    if (members.length < 2) return null;
    return scenario({
      id: 'chamber:' + body.id,
      kind: 'chamber', kindLabel: 'The chamber',
      name: 'What if ' + body.name + ' had voted the other way?',
      premise: clip(body.summary, 300) + ' This scenario sits in the chamber on the day the vote went the way it went — ' +
        'and plays the version where the room does not hold.',
      image: body.image || '',
      tags: ['politics', clip(body.type, 30), clip(body.region, 30)],
      weight: 2,
      source: 'factions.json → ' + body.id,
      cast: members,
      beats: beats.slice(0, 7),
      questions: [
        'Who changes their vote, and what does it cost them at home?',
        'Which member is being leaned on, and by whom?',
        'Does the chamber survive the session?',
      ],
      briefParts: [
        '**The body.** ' + clip(body.summary, 500),
        '**On the record.** ' + clip(paragraphs(body.description).slice(0, 2).join(' '), 700),
        body.leadership && body.leadership.length ? '**Leadership as filed.**\n' + body.leadership.slice(0, 4).map(function (m) {
          return '- ' + m.name + (m.role ? ' — ' + clip(m.role, 160) : '');
        }).join('\n') : '',
        '**The divergence.** The chamber is the same chamber; the arithmetic is the same arithmetic. What changes is ' +
          'that the vote is live when you arrive, and the members in the room have not yet done the thing the record ' +
          'says they did.',
        members.length ? '**Who is in the room.**\n' + members.map(castLine).join('\n') : '',
        '**What is at stake.** Everything the filed vote made possible downstream — the mandates, the resignations, ' +
          'the enforcement arm that was built on the back of it.',
      ],
    });
  };

  /* ---- engine 5: the loudest post on the wire ---- */

  RP.whatIfFromPost = function (post, castById) {
    if (!post || post.comments.length < 2) return null;
    var cast = post.chars.map(function (id) { return (castById || {})[id]; }).filter(Boolean)
      .filter(function (c, i, all) { return all.indexOf(c) === i; })
      .slice(0, 5).map(function (c) { return Object.assign({}, c, { why: c.id === slug(post.author) ? 'posted it' : 'named in the post' }); });
    if (cast.length < 2) return null;
    var beats = post.comments.slice(0, 5).map(function (c, i) {
      var who = ((castById || {})[c.author] || {}).name || RP.prettyId(c.author);
      return { time: 'reply ' + (i + 1), beat: clip(who + ' answers in public', 140), detail: clip(c.content, 420) };
    });
    return scenario({
      id: 'flashpoint:' + post.id,
      kind: 'flashpoint', kindLabel: 'Wire flashpoint',
      name: 'What if ' + post.authorName + ' had been right?',
      premise: 'A post with ' + post.likes + ' likes and ' + post.comments.length + ' public answers. ' +
        'The archive treated it as noise. This scenario treats it as a warning that landed.',
      image: post.image || '',
      date: post.timestamp,
      tags: ['wahwire'].concat(post.tags),
      weight: 1 + Math.min(2, post.comments.length / 3),
      source: 'wahwire → ' + post.id,
      cast: cast,
      beats: beats,
      questions: [
        'Who has to answer for it once it is true?',
        'Who was arguing in the replies because they already knew?',
        'What does the wire do when it is proved right?',
      ],
      briefParts: [
        '**The post.** ' + post.authorName + ', ' + post.timestamp + ':\n\n> ' + clip(post.content, 700),
        '**The public answers.**\n' + post.comments.slice(0, 4).map(function (c) {
          var who = ((castById || {})[c.author] || {}).name || RP.prettyId(c.author);
          return '- **' + who + ':** ' + clip(c.content, 220);
        }).join('\n'),
        '**The divergence.** The wire is not the record — that is the rule everyone quotes. In this branch the post ' +
          'is the record: what it claims is true, and the people who answered it in public are now on the hook for ' +
          'what they said before they knew.',
        '**Who is in the room.**\n' + cast.map(castLine).join('\n'),
        '**What is at stake.** ' + post.likes + ' people signed their name to an opinion about this. Play the hours ' +
          'after it stops being an opinion.',
      ],
    });
  };

  /* ---- the board ---- */

  /** Build the What-If board: every engine runs, everything is scored, the
   *  thin ones are dropped, and the survivors are mixed so one engine cannot
   *  own the page. A dozen long scenarios beats two hundred one-liners. */
  RP.buildWhatIfs = function (archive, castById, opts) {
    opts = opts || {};
    archive = archive || {};
    var cast = Object.keys(castById || {}).map(function (k) { return castById[k]; });
    var out = [];
    (archive.whatifs || []).forEach(function (w) { out.push(RP.whatIfFromFiled(w, castById)); });
    RP.wantedFrom(archive.events, archive.factions, castById, 10).forEach(function (w) {
      out.push(RP.whatIfFromGap(w, castById));
    });
    (archive.events || []).slice(-40).forEach(function (e) { out.push(RP.whatIfFromEvent(e, castById)); });
    (archive.factions || []).forEach(function (f) {
      if (!/diet|congress|patrol|council|assembly|senate|court/i.test(f.name || '')) return;
      out.push(RP.whatIfFromBody(f, cast, archive.congress));
    });
    RP.sortPosts(archive.posts || [], 'loudest').slice(0, 12).forEach(function (p) {
      out.push(RP.whatIfFromPost(p, castById));
    });
    RP.sagasFrom(archive.events).slice(0, 8).forEach(function (saga) {
      out.push(RP.whatIfFromContinuation(saga, castById));
    });

    var scored = out.filter(Boolean).map(function (s) { return { s: s, q: RP.scenarioQuality(s) }; })
      .filter(function (x) { return x.q > 0; })
      .sort(function (a, b) { return b.q - a.q; });

    // Round-robin by kind so the board is not six versions of one engine.
    var byKind = {};
    scored.forEach(function (x) { (byKind[x.s.kind] = byKind[x.s.kind] || []).push(x.s); });
    var kinds = Object.keys(byKind), picked = [], limit = opts.limit || 12, i = 0;
    while (picked.length < limit) {
      var added = false;
      for (var k = 0; k < kinds.length; k++) {
        var list = byKind[kinds[k]];
        if (list[i]) { picked.push(list[i]); added = true; }
        if (picked.length >= limit) break;
      }
      if (!added) break;
      i++;
    }
    return picked;
  };

  /* ---- the reader's own scenario, composed from the archive ---- */

  /** Find the filed records a description is talking about. Plain string
   *  matching on names — deterministic, instant, and good enough that the
   *  model never has to be asked "who did they mean?". */
  RP.matchArchive = function (text, archive, castById) {
    var hay = ' ' + String(text || '').toLowerCase() + ' ';
    function hits(list, nameOf) {
      return (list || []).filter(function (r) {
        var name = String(nameOf ? nameOf(r) : r.name || '').toLowerCase().trim();
        if (name.length < 4) return false;
        // Whole words only: "luigi" must not match inside "Waluigi".
        var at = hay.indexOf(name);
        while (at >= 0) {
          var before = hay.charAt(at - 1), after = hay.charAt(at + name.length);
          if (!/[a-z0-9]/.test(before) && !/[a-z0-9]/.test(after)) return true;
          at = hay.indexOf(name, at + 1);
        }
        return false;
      });
    }
    var chars = hits(Object.keys(castById || {}).map(function (k) { return castById[k]; }));
    return {
      chars: chars.slice(0, 8),
      events: hits(archive.events).slice(0, 3),
      factions: hits(archive.factions).slice(0, 3),
      whatifs: hits(archive.whatifs, function (w) { return w.title; }).slice(0, 2),
    };
  };

  /** Describe it, and the page writes the brief: your premise, plus what the
   *  archive already has on everyone and everything you named, plus a script
   *  taken from the matched filing's own timeline. No model call. */
  RP.composeScenario = function (input, archive, castById) {
    input = input || {};
    var text = String(input.text || '').trim();
    var found = RP.matchArchive(text + ' ' + (input.title || ''), archive || {}, castById);
    var picked = (input.castIds || []).map(function (id) { return (castById || {})[id]; }).filter(Boolean);
    var cast = picked.concat(found.chars.filter(function (c) {
      return !picked.some(function (p) { return p.id === c.id; });
    })).slice(0, 8).map(function (c) {
      return Object.assign({}, c, { why: c.title || c.affiliation || 'named in the premise' });
    });
    var anchor = found.events[0];
    // Anyone filed in the records you named belongs in the room too.
    var seenCast = {};
    cast.forEach(function (c) { seenCast[c.id] = 1; });
    (anchor ? anchor.participants || [] : []).forEach(function (p) {
      var c = (castById || {})[slug(p && p.id)];
      if (!c || seenCast[c.id] || cast.length >= 8) return;
      seenCast[c.id] = 1;
      cast.push(Object.assign({}, c, { why: whyFor(p.role) || ('filed in ' + anchor.name) }));
    });
    found.factions.forEach(function (f) {
      (f.leadership || []).forEach(function (m) {
        var c = (castById || {})[slug(m && m.id)];
        if (!c || seenCast[c.id] || cast.length >= 8) return;
        seenCast[c.id] = 1;
        cast.push(Object.assign({}, c, { why: (m.role ? m.role + ', ' : '') + f.name }));
      });
    });
    var beats = [];
    if (anchor && anchor.timeline && (anchor.timeline.entries || []).length) {
      beats = anchor.timeline.entries.slice(0, 6).map(function (e, i) {
        return { time: clip(e.time, 60) || ('beat ' + (i + 1)), beat: clip(e.beat, 140), detail: clip(e.detail, 420) };
      });
    }
    if (beats.length < 3 && anchor) {
      // No filed timeline: the matched filing's own prose becomes the script.
      beats = beats.concat(RP.beatsFromProse((anchor.summary || '') + '\n\n' + (anchor.outcome || ''), 4, 'on record'));
    }
    if (beats.length < 3 && found.factions[0]) {
      beats = beats.concat(RP.beatsFromProse(found.factions[0].description || found.factions[0].summary, 3, 'the body'));
    }
    if (beats.length < 3) {
      sentences(text).forEach(function (line) {
        if (beats.length >= 6 || line.length < 20) return;
        beats.push({ time: 'beat ' + (beats.length + 1), beat: clip(line, 140), detail: clip(line, 420) });
      });
    }
    if (beats.length < 3) {
      // Last resort: a three-beat spine built out of your own premise, so a
      // one-line idea still arrives as a scene that moves on its own.
      var where = (anchor && anchor.location) || (found.factions[0] && found.factions[0].name) || 'the room';
      var who = cast.map(function (c) { return c.name; }).join(', ') || 'whoever is standing there';
      beats = [
        { time: 'cold open', beat: 'The room assembles', detail: 'In ' + where + ': ' + who + '. Nothing has gone wrong yet, and everyone is behaving as though the record still holds.' },
        { time: 'the turn', beat: clip(sentences(text)[0] || 'The premise arrives', 140), detail: clip(text, 420) },
        { time: 'the cost', beat: 'Somebody has to answer for it', detail: 'The consequence lands on whoever is closest, and the archive has to decide what it writes down.' },
      ];
    }
    var questions = sentences(text).filter(function (s) { return /\?$/.test(s.trim()); }).slice(0, 3);
    return scenario({
      id: 'custom:' + (slug(input.title) || uid()),
      kind: 'custom', kindLabel: 'Yours',
      // "What if …" once, not twice: most people write the words themselves.
      name: clip(input.title || (/^\s*what if\b/i.test(text) ? sentences(text)[0] : 'What if ' + clip(sentences(text)[0] || 'this happened', 60)), 110),
      premise: clip(text, 400),
      image: (anchor && anchor.image) || '',
      date: anchor ? clip(anchor.date, 70) : '',
      tags: ['custom'].concat(found.factions.map(function (f) { return clip(f.name, 30); })),
      weight: 5,
      source: 'written by ' + ((archive && archive.userName) || 'you'),
      cast: cast,
      beats: beats,
      questions: questions.length ? questions : [
        'Who is standing closest to the change?',
        'What does the archive have to correct afterwards?',
      ],
      briefParts: [
        '**The premise, as you wrote it.** ' + text,
        cast.length ? '**Who the archive matched.**\n' + cast.map(function (c) {
          return '- **' + c.name + '**' + (c.title ? ' — ' + c.title : '') + (c.summary ? '. ' + clip(c.summary, 220) : '');
        }).join('\n') : '',
        found.events.length ? '**Filed events this touches.**\n' + found.events.map(function (e) {
          return '- *' + e.name + '*' + (e.date ? ' (' + clip(e.date, 60) + ')' : '') + '. ' + clip(e.summary, 260);
        }).join('\n') : '',
        found.factions.length ? '**Bodies involved.**\n' + found.factions.map(function (f) {
          return '- *' + f.name + '*. ' + clip(f.summary, 260);
        }).join('\n') : '',
        anchor && anchor.location ? '**The room.** ' + anchor.location + (anchor.date ? ', ' + anchor.date : '') + '.' : '',
        '**How it will run.** ' + (anchor && beats.length
          ? 'The beats come from the filed timeline of *' + anchor.name + '*: they fire on their own schedule while you play around them.'
          : 'Your description was split into beats, in the order you wrote it, so the scene still moves without you having to push it.'),
      ],
    });
  };

  /** Room options for any scenario — the same shape a scene card produces. */
  RP.scenarioRoomOpts = function (s) {
    return {
      scene: [s.premise, s.scene].filter(Boolean).join('\n\n'),
      sceneName: s.name,
      sceneImage: s.image,
      beats: s.beats,
      date: s.date || '',
      opener: s.kindLabel + ' — ' + s.name + '\n\n' + s.premise,
      // Starting state: a sequel's inherited sheets, or a scenario setup.
      states: s.states || null,
      setup: s.setup || {},
      statePreset: s.statePreset || 'rpg',
      sequelOf: s.sequelOf || '',
      canon: s.kind === 'continuation' ? 'continuation' : '',
    };
  };

  /* ------------------------------------------------------------------ *
   * collections — the archive's own groupings, as instant casts
   * ------------------------------------------------------------------ */

  RP.normCollection = function (record, castById) {
    record = record || {};
    var members = (record.members || []).map(function (m) {
      var hit = (castById || {})[String(m && m.id)];
      return hit ? Object.assign({}, hit, { role: clip(m.role, 90) }) : null;
    }).filter(Boolean);
    return {
      id: String(record.id || slug(record.name) || uid()),
      name: clip(record.name, 90),
      title: clip(record.title, 120),
      summary: clip(record.summary, 300),
      scope: clip(record.scope, 120),
      members: members,
      total: (record.members || []).length,
    };
  };

  /* ------------------------------------------------------------------ *
   * the director — who speaks next, and when the scene comes back to you
   * ------------------------------------------------------------------ */

  // A group chat that never hands back is just two bots talking past you.
  RP.MAX_CHAIN = 4;

  /** Character turns played since the user's last turn. */
  RP.chainLength = function (room) {
    var msgs = (room && room.messages) || [];
    var n = 0;
    for (var i = msgs.length - 1; i >= 0; i--) {
      if (!visible(msgs[i])) continue;
      if (msgs[i].role === 'user') break;
      n++;
    }
    return n;
  };

  /** The question put to the model after every group reply: does this scene
   *  keep going between the characters, or does it need the player? */
  RP.directorPrompt = function (room, lastSpeaker) {
    var cast = (room.cast || []).filter(function (c) { return !lastSpeaker || c.id !== lastSpeaker.id; });
    var recent = RP.historyFor(room, 6).map(function (m) { return (m.role === 'user' ? 'PLAYER: ' : '') + m.content; }).join('\n');
    return [
      'You are directing a group roleplay scene. Decide who speaks next.',
      '',
      'The cast, other than whoever just spoke:',
      cast.map(function (c) { return '- ' + c.name + (c.title ? ' — ' + c.title : ''); }).join('\n'),
      '',
      'The last few turns:',
      recent,
      '',
      'Answer with ONE line and nothing else:',
      'NEXT: <the exact name of the character who should speak next>',
      '   — choose this when a character is being addressed, contradicted, or plainly has to answer.',
      'USER',
      '   — choose this when the scene is waiting on the player: they were asked something, the exchange has '
      + 'run its course, a decision is theirs, or the characters are starting to repeat each other.',
      'Prefer USER when in doubt. Never pick the character who just spoke.',
    ].join('\n');
  };

  /** Read the director's answer. Anything unrecognisable hands back to the
   *  player, and so does an over-long chain — the loop has a hard stop. */
  RP.parseDirector = function (text, room, lastSpeaker) {
    if (RP.chainLength(room) >= (room.maxChain || RP.MAX_CHAIN)) {
      return { next: 'user', reason: 'the scene has run several turns without you' };
    }
    var value = String(text || '').trim();
    var match = /NEXT\s*:\s*([^\n]+)/i.exec(value);
    if (!match) return { next: 'user', reason: 'the scene is waiting on you' };
    var wanted = match[1].replace(/["'.*]/g, '').trim().toLowerCase();
    if (!wanted || wanted === 'user' || wanted === 'player') return { next: 'user', reason: 'the scene is waiting on you' };
    var hit = (room.cast || []).filter(function (c) {
      return c.name.toLowerCase() === wanted || wanted.indexOf(c.name.toLowerCase()) >= 0 || c.name.toLowerCase().indexOf(wanted) >= 0;
    })[0];
    if (!hit || (lastSpeaker && hit.id === lastSpeaker.id)) return { next: 'user', reason: 'the scene is waiting on you' };
    return { next: hit.id, reason: 'answering ' + ((lastSpeaker && lastSpeaker.name) || 'the last turn') };
  };


  /* ------------------------------------------------------------------ *
   * character state — HP, MP, flags, counters, inventory
   *
   * A scene that cannot be wounded is a chat. Every room carries a sheet
   * per character; the model reads the sheets in its prompt and writes to
   * them with stage directions (see DIRECTIVES below), so "he takes the
   * hit" and "hp 42/60" stop being two different conversations.
   * ------------------------------------------------------------------ */

  RP.STATE_PRESETS = {
    story:  { name: 'Story — no numbers', hp: 0, mp: 0 },
    stakes: { name: 'Stakes — HP only', hp: 100, mp: 0 },
    rpg:    { name: 'RPG — HP and MP', hp: 100, mp: 50 },
  };

  /** A fresh sheet. `setup` overrides the start: { hpPct, mpPct, status,
   *  flags: 'wounded, hunted', items: 'rope, lantern' }. */
  RP.blankSheet = function (char, preset, setup) {
    preset = RP.STATE_PRESETS[preset] || RP.STATE_PRESETS.rpg;
    setup = setup || {};
    var hpMax = Number(setup.hpMax || preset.hp || 0);
    var mpMax = Number(setup.mpMax || preset.mp || 0);
    var pct = function (v, max) {
      var n = v === undefined || v === '' ? 100 : Number(v);
      if (isNaN(n)) n = 100;
      return Math.max(0, Math.min(max, Math.round((max * n) / 100)));
    };
    var sheet = {
      id: char.id, name: char.name,
      hp: hpMax ? { value: pct(setup.hpPct, hpMax), max: hpMax } : null,
      mp: mpMax ? { value: pct(setup.mpPct, mpMax), max: mpMax } : null,
      flags: {}, counters: {}, items: [],
      status: clip(setup.status, 120),
      present: setup.present === undefined ? true : Boolean(setup.present),
    };
    String(setup.flags || '').split(',').forEach(function (f) {
      var key = slug(f); if (key) sheet.flags[key] = true;
    });
    String(setup.items || '').split(',').forEach(function (i) {
      var item = clip(i, 40); if (item) sheet.items.push(item);
    });
    return sheet;
  };

  /** Every character in the room has a sheet, including anyone the model
   *  has just walked into the scene. */
  RP.ensureSheets = function (room, preset, setups) {
    room.states = room.states || {};
    room.statePreset = room.statePreset || preset || 'rpg';
    (room.cast || []).forEach(function (c) {
      if (!room.states[c.id]) room.states[c.id] = RP.blankSheet(c, room.statePreset, (setups || {})[c.id]);
    });
    return room.states;
  };

  RP.sheetFor = function (room, charId) {
    return ((room && room.states) || {})[charId] || null;
  };

  function clampPool(pool) {
    pool.value = Math.max(0, Math.min(pool.max, Math.round(pool.value)));
    return pool;
  }

  /** Apply one change to one sheet. Returns a human line for the stream, or
   *  '' when the change was refused (unknown field, dead number). */
  RP.applyChange = function (sheet, change) {
    if (!sheet || !change) return '';
    var n = Number(change.value);
    if (change.kind === 'hp' || change.kind === 'mp') {
      var pool = sheet[change.kind];
      if (!pool || isNaN(n)) return '';
      var before = pool.value;
      if (change.op === '+') pool.value += n;
      else if (change.op === '-') pool.value -= n;
      else pool.value = n;
      clampPool(pool);
      if (pool.value === before) return '';
      var word = change.kind.toUpperCase();
      return sheet.name + ' ' + (pool.value > before ? '+' : '−') + Math.abs(pool.value - before) + ' ' + word +
        ' (' + pool.value + '/' + pool.max + ')' + (change.kind === 'hp' && pool.value === 0 ? ' — down' : '');
    }
    if (change.kind === 'flag') {
      var key = slug(change.name);
      if (!key) return '';
      var on = !(change.value === false || /^(false|off|no|clear|0)$/i.test(String(change.value)));
      if (on) sheet.flags[key] = true; else delete sheet.flags[key];
      return sheet.name + (on ? ' is now ' : ' is no longer ') + String(change.name).replace(/_/g, ' ');
    }
    if (change.kind === 'counter') {
      var ckey = slug(change.name);
      if (!ckey || isNaN(n)) return '';
      var cur = Number(sheet.counters[ckey] || 0);
      sheet.counters[ckey] = change.op === '+' ? cur + n : change.op === '-' ? cur - n : n;
      return sheet.name + ' — ' + String(change.name).replace(/_/g, ' ') + ': ' + sheet.counters[ckey];
    }
    if (change.kind === 'item') {
      var item = clip(change.name, 40);
      if (!item) return '';
      var at = sheet.items.map(function (i) { return i.toLowerCase(); }).indexOf(item.toLowerCase());
      if (change.op === '-') {
        if (at < 0) return '';
        sheet.items.splice(at, 1);
        return sheet.name + ' loses ' + item;
      }
      if (at >= 0) return '';
      sheet.items.push(item);
      return sheet.name + ' picks up ' + item;
    }
    if (change.kind === 'status') {
      sheet.status = clip(change.value, 120);
      return sheet.name + ' — ' + sheet.status;
    }
    return '';
  };

  /** The sheets, as the model sees them. */
  RP.stateBlock = function (room) {
    var sheets = Object.keys((room && room.states) || {}).map(function (k) { return room.states[k]; })
      .filter(function (s) { return s && s.present !== false; });
    if (!sheets.length) return '';
    return 'CHARACTER STATE — this is true right now, play it\n' + sheets.map(function (s) {
      var bits = [];
      if (s.hp) bits.push('HP ' + s.hp.value + '/' + s.hp.max + (s.hp.value === 0 ? ' (down)' : s.hp.value <= s.hp.max * 0.3 ? ' (badly hurt)' : ''));
      if (s.mp) bits.push('MP ' + s.mp.value + '/' + s.mp.max);
      var flags = Object.keys(s.flags || {});
      if (flags.length) bits.push(flags.map(function (f) { return f.replace(/_/g, ' '); }).join(', '));
      Object.keys(s.counters || {}).forEach(function (c) { bits.push(c.replace(/_/g, ' ') + ' ' + s.counters[c]); });
      if ((s.items || []).length) bits.push('carrying ' + s.items.join(', '));
      if (s.status) bits.push(s.status);
      return '- ' + s.name + ': ' + (bits.join(' · ') || 'unharmed, nothing to declare');
    }).join('\n');
  };

  /* ---- stage directions: how the model changes the world ---- */

  RP.DIRECTIVES = [
    'STAGE DIRECTIONS — you may change the scene, not just describe it',
    'Put any of these on their own line, after your prose. They are stripped out before the reader sees them,',
    'and the page applies them to the actual record. Use them when the fiction earns them — never more than four',
    'in one turn, and never for something that did not happen in the turn you just wrote.',
    '  [[HP: Name -12]]                 damage, healing (+), or an exact value (= 30)',
    '  [[MP: Name -5]]                  spent or recovered power',
    '  [[FLAG: Name wounded]]           set a condition · [[FLAG: Name wounded = false]] clears it',
    '  [[COUNT: Name arrows -1]]        any counter you need',
    '  [[ITEM: Name + the brass key]]   gained · [[ITEM: Name - the brass key]] lost',
    '  [[STATUS: Name bleeding, one arm]]  a short physical note',
    '  [[ENTER: Name — why they arrive]]   bring someone into the scene when the story calls for them',
    '  [[NEW: Name | what they are here for | what they look like]]  invent someone the archive has never filed.',
    '      Nobody has drawn them, so the description is the portrait: face, build, clothing, one memorable detail.',
    '  [[EXIT: Name — why they leave]]     write someone out when they leave, fall, or flee',
    'Only use ENTER for people the archive knows, or a clearly named newcomer. Never ENTER or EXIT the player.',
  ].join('\n');

  var DIRECTIVE_RE = /\[\[\s*(HP|MP|FLAG|COUNT|ITEM|STATUS|ENTER|EXIT|NEW)\s*:\s*([^\]]+?)\s*\]\]/gi;

  /** Split "Lord Darian Marsh bleeding badly" into a character and the rest.
   *  Names are matched longest-first against the people actually in the room,
   *  because a two-word regex cannot know that "Lord Darian Marsh" is one
   *  person and "Sans bleeding" is two things. */
  RP.splitTarget = function (body, names) {
    var text = String(body || '').trim();
    var best = '';
    (names || []).forEach(function (n) {
      var name = String(n || '').trim();
      if (!name || name.length <= best.length) return;
      if (text.toLowerCase().indexOf(name.toLowerCase()) === 0) best = name;
    });
    // Strip separators but never a leading minus that belongs to a number:
    // "Sans -12" is twelve damage, not a set-to-twelve.
    if (best) return { name: best, rest: text.slice(best.length).replace(/^[\s:,]+|^[—–]\s*/g, '') };
    var words = text.split(/\s+/);
    return { name: words[0] || '', rest: words.slice(1).join(' ') };
  };

  /** Pull the stage directions out of a reply. The reader sees `clean`; the
   *  page applies `directives`. Each one keeps its raw `body` so the names
   *  can be re-split against the real cast when it is applied. */
  RP.parseDirectives = function (text, names) {
    var out = [], match;
    DIRECTIVE_RE.lastIndex = 0;
    while ((match = DIRECTIVE_RE.exec(String(text || '')))) {
      var type = match[1].toUpperCase(), body = match[2].trim();
      if (type === 'NEW') {
        // Name | role | what they look like. The archive has no portrait for
        // them, so the look IS the portrait.
        var bits = body.split('|');
        var name = clip(bits[0], 60);
        if (name) {
          out.push({
            kind: 'new', body: body, name: name,
            role: clip(bits[1], 120), look: clip(bits.slice(2).join('|'), 300),
          });
        }
        continue;
      }
      if (type === 'ENTER' || type === 'EXIT') {
        var split = body.split(/\s+[—–]\s+|\s+-\s+|\s*:\s*|\s*\(\s*/);
        out.push({ kind: type.toLowerCase(), body: body, name: clip(split[0], 60), reason: clip((split[1] || '').replace(/\)$/, ''), 140) });
        continue;
      }
      var target = RP.splitTarget(body, names);
      var rest = target.rest;
      if (type === 'STATUS') {
        if (rest) out.push({ kind: 'status', body: body, who: target.name, value: rest });
        continue;
      }
      if (type === 'HP' || type === 'MP') {
        var pool = /^([+\-=])?\s*(\d+)\s*$/.exec(rest);
        if (pool) out.push({ kind: type.toLowerCase(), body: body, who: target.name, op: pool[1] || '=', value: Number(pool[2]) });
        continue;
      }
      if (type === 'COUNT') {
        var cnt = /^([a-z0-9_ ]+?)\s*([+\-=])\s*(\d+)\s*$/i.exec(rest);
        if (cnt) out.push({ kind: 'counter', body: body, who: target.name, name: clip(cnt[1], 40), op: cnt[2], value: Number(cnt[3]) });
        continue;
      }
      if (type === 'ITEM') {
        var item = /^([+\-])\s*(.+)$/.exec(rest);
        if (item) out.push({ kind: 'item', body: body, who: target.name, op: item[1], name: clip(item[2], 40) });
        continue;
      }
      if (type === 'FLAG') {
        var flag = /^([a-z0-9_ ]+?)(?:\s*=\s*(\S+))?\s*$/i.exec(rest);
        if (flag) out.push({ kind: 'flag', body: body, who: target.name, name: clip(flag[1], 40), value: flag[2] === undefined ? true : flag[2] });
      }
    }
    return { clean: String(text || '').replace(DIRECTIVE_RE, '').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim(), directives: out };
  };

  /** Apply the stage directions to the room. `resolve(name)` finds a
   *  character in the wider archive so the model can walk somebody in. */
  RP.applyDirectives = function (state, room, directives, resolve) {
    RP.ensureSheets(room);
    var lines = [], entered = [], exited = [];
    function find(name) {
      var want = String(name || '').toLowerCase().trim();
      return (room.cast || []).filter(function (c) {
        return c.name.toLowerCase() === want || c.name.toLowerCase().indexOf(want) >= 0 || want.indexOf(c.name.toLowerCase()) >= 0;
      })[0];
    }
    var names = (room.cast || []).map(function (c) { return c.name; });
    (directives || []).forEach(function (d) {
      if (d.kind === 'new') {
        if (find(d.name)) return;
        var made = RP.normChar({
          id: 'new_' + slug(d.name),
          name: d.name,
          title: d.role || 'Invented in play',
          summary: [d.role, d.look].filter(Boolean).join(' — '),
          handle: (state.user && state.user.handle) || 'waluipedia',
        });
        made.look = d.look;          // no portrait exists; the words are it
        made.invented = true;
        room.cast.push(made);
        room.states[made.id] = RP.blankSheet(made, room.statePreset);
        state.newChars = (state.newChars || []).filter(function (c) { return c.id !== made.id; });
        state.newChars.unshift(made);
        state.newChars = state.newChars.slice(0, 80);
        entered.push(made);
        lines.push('New character — ' + made.name + (d.role ? ', ' + d.role : ''));
        RP.logEvent(state, {
          kind: 'roster', roomId: room.id, roomTitle: room.title, chars: [made.id],
          text: made.name + ' was invented in play: ' + clip(made.summary, 200),
        });
        return;
      }
      // Re-read the raw body now that the cast is known: "Lord Darian Marsh
      // bleeding" is one person and a condition, not two words.
      if (d.body && d.kind !== 'enter' && d.kind !== 'exit') {
        var re = RP.splitTarget(d.body, names);
        if (re.name && re.rest) {
          var reparsed = RP.parseDirectives('[[' + d.kind.toUpperCase().replace('COUNTER', 'COUNT') + ': ' + d.body + ']]', names).directives[0];
          if (reparsed) d = reparsed;
        }
      }
      if (d.kind === 'enter') {
        if (find(d.name)) return;
        var found = (resolve && resolve(d.name)) || RP.normChar({ name: d.name, title: 'Walked into the scene', summary: d.reason });
        room.cast.push(RP.normChar(found));
        room.states[found.id] = RP.blankSheet(found, room.statePreset);
        entered.push(found);
        lines.push(found.name + ' enters — ' + (d.reason || 'the scene called for them'));
        RP.logEvent(state, {
          kind: 'roster', roomId: room.id, roomTitle: room.title, chars: [found.id],
          text: found.name + ' entered the scene: ' + (d.reason || 'no reason filed'),
        });
        return;
      }
      if (d.kind === 'exit') {
        var who = find(d.name);
        if (!who || room.cast.length <= 1) return;
        room.cast = room.cast.filter(function (c) { return c.id !== who.id; });
        if (room.states[who.id]) room.states[who.id].present = false;
        if (room.next === who.id) room.next = '';
        exited.push(who);
        lines.push(who.name + ' leaves — ' + (d.reason || 'gone'));
        RP.logEvent(state, {
          kind: 'roster', roomId: room.id, roomTitle: room.title, chars: [who.id],
          text: who.name + ' left the scene: ' + (d.reason || 'no reason filed'),
        });
        return;
      }
      var target = find(d.who || d.name);
      var sheet = target ? room.states[target.id] : null;
      var line = RP.applyChange(sheet, d);
      if (line) lines.push(line);
    });
    if (lines.length) room.updated = Date.now();
    return { lines: lines, entered: entered, exited: exited };
  };

  /* ------------------------------------------------------------------ *
   * hooks — the model writes the opener, from the actual lore
   * ------------------------------------------------------------------ */

  /** Everything the archive and your own play know about this scenario,
   *  gathered for the hook writer. No summarising: raw filed material. */
  RP.hookContext = function (state, scenario) {
    var ids = (scenario.suggestedCast || []).map(function (c) { return c.id; });
    var log = (state.log || []).filter(function (e) {
      return (e.chars || []).some(function (id) { return ids.indexOf(id) >= 0; });
    }).slice(-6).map(function (e) { return e.text; });
    var memory = ids.map(function (id) {
      var mem = (state.chars || []).filter(function (c) { return c.id === id; })[0];
      if (!mem || !(mem.notes || []).length) return '';
      return mem.name + ' remembers: ' + mem.notes.slice(-3).map(function (n) { return n.text; }).join(' / ');
    }).filter(Boolean);
    return { log: log, memory: memory };
  };

  /** The prompt that refuses a weak opener. Everything it is given is filed
   *  material; everything it must not do is listed, because small local
   *  models default to "You find yourself in a tavern" otherwise. */
  RP.hookPrompt = function (scenario, ctx) {
    ctx = ctx || {};
    var cast = (scenario.suggestedCast || []).slice(0, 6);
    return [
      'You are the scene-setter for a roleplay session in the Waluipedia archive. Write the opening of ONE scene.',
      '',
      'THE BRANCH',
      scenario.name,
      scenario.premise || '',
      '',
      'THE FILED MATERIAL — use these specifics, do not restate them',
      clip(scenario.brief, 2200),
      '',
      'THE PEOPLE IN IT',
      cast.map(function (c) {
        return '- ' + c.name + (c.title ? ' — ' + c.title : '') + (c.why ? ' (' + c.why + ')' : '') +
          (c.summary ? '. ' + clip(c.summary, 220) : '');
      }).join('\n'),
      (scenario.beats || []).length ? '\nTHE SCRIPT THAT WILL FIRE LATER (do not spend it now)\n' +
        scenario.beats.slice(0, 4).map(function (b) { return '- ' + b.beat; }).join('\n') : '',
      (ctx.log || []).length ? '\nWHAT ALREADY HAPPENED IN THIS READER\u2019S OTHER CHATS\n- ' + ctx.log.join('\n- ') : '',
      (ctx.memory || []).length ? '\nWHAT THESE CHARACTERS REMEMBER\n- ' + ctx.memory.join('\n- ') : '',
      '',
      'WRITE EXACTLY THIS, NOTHING ELSE:',
      'TITLE: a specific, concrete title — a place, an object, a line of dialogue. Never a rhetorical question.',
      'OPEN: 90 to 150 words. Present tense. Second person, addressed to the player. Begin INSIDE the moment —',
      '  mid-action, mid-argument, mid-fall — with at least three specific filed details (a name, an object, a',
      '  place, a number, a time) taken from the material above. End on something the player must answer RIGHT NOW.',
      'STAKES: one sentence naming what is lost in the next few minutes if they get it wrong.',
      '',
      'BANNED: summarising what happened before; "you find yourself"; "little did you know"; "the air is thick";',
      '"in a world where"; explaining the premise back to the reader; asking what the player would like to do;',
      'any sentence that could open a different scene. If your opener would work for another scenario, it is wrong.',
    ].filter(Boolean).join('\n');
  };

  /** Read the hook back. A model that ignores the format still gets used:
   *  the whole reply becomes the opener rather than being thrown away. */
  RP.parseHook = function (text, scenario) {
    var raw = String(text || '').trim();
    if (!raw) return null;
    function grab(label, next) {
      var re = new RegExp(label + '\\s*:\\s*([\\s\\S]*?)(?=\\n\\s*(?:' + next + ')\\s*:|$)', 'i');
      var hit = re.exec(raw);
      return hit ? hit[1].replace(/^\s+|\s+$/g, '') : '';
    }
    var title = clip(grab('TITLE', 'OPEN|STAKES').split('\n')[0], 110);
    var open = grab('OPEN', 'STAKES|TITLE');
    var stakes = clip(grab('STAKES', 'TITLE|OPEN').split('\n')[0], 240);
    if (!open) open = raw.replace(/^(TITLE|STAKES)\s*:.*$/gim, '').trim();
    if (!open) return null;
    return {
      title: title || (scenario ? scenario.name : ''),
      open: clip(open, 1400),
      stakes: stakes,
      at: Date.now(),
    };
  };

  /** Would this opener have worked for any other scene? Then it is generic.
   *  Used to decide whether to keep a hook or ask again. */
  RP.hookIsWeak = function (hook, scenario) {
    if (!hook || !hook.open) return true;
    var text = hook.open.toLowerCase();
    if (text.length < 240) return true;
    if (/you find yourself|little did you know|in a world where|the air is thick|what would you like to do|as you may recall/.test(text)) return true;
    // At least two proper nouns out of the filed material have to survive.
    var names = ((scenario.suggestedCast || []).map(function (c) { return c.name; })
      .concat(String(scenario.brief || '').match(/\b[A-Z][a-z]{3,}\b/g) || [])).slice(0, 40);
    var hits = 0, seen = {};
    names.forEach(function (n) {
      var key = n.toLowerCase();
      if (seen[key] || key.length < 4) return;
      seen[key] = 1;
      if (text.indexOf(key) >= 0) hits++;
    });
    return hits < 2;
  };

  /** The opener used when there is no model, or it produced nothing usable.
   *  Still in the moment, still specific — it is built from the hinge beat. */
  RP.coldOpen = function (scenario) {
    var beat = (scenario.beats || [])[0] || {};
    var where = '';
    var room = /\*\*The room\.\*\*\s*([^\n]+)/.exec(scenario.brief || '');
    if (room) where = clip(room[1], 160);
    var who = (scenario.suggestedCast || []).slice(0, 3).map(function (c) { return c.name; });
    return [
      (beat.time ? beat.time.charAt(0).toUpperCase() + beat.time.slice(1) + '. ' : '') + (where || ''),
      beat.detail || scenario.premise,
      who.length ? who.join(', ') + ' ' + (who.length > 1 ? 'are' : 'is') + ' already here, and none of them are waiting for you to catch up.' : '',
      'It is happening now. What do you do?',
    ].filter(Boolean).join('\n\n');
  };

  /* ------------------------------------------------------------------ *
   * backfills — the lore that was never written down
   * ------------------------------------------------------------------ */

  /** Events that filings point at and nobody ever wrote: the off-screen
   *  battles, the airlift that never came, the session between sessions.
   *  Ranked by demand (how many records are waiting) and by use (how many
   *  times this reader has already played one). */
  RP.backfillsFrom = function (archive, castById, state, limit) {
    // Anything with a record of its own — an event, a person, a body — is
    // not a hole. Only ids that nothing answers to are backfills.
    var have = {}, demand = {};
    // knownIds covers every filed record, including the ones outside the
    // window of events we actually carry — otherwise a filing that exists
    // but is off the end of the list reads as a hole.
    (archive.knownIds || []).forEach(function (id) { have[slug(id)] = true; });
    (archive.events || []).forEach(function (e) { have[slug(e.id)] = e; have[slug(e.name)] = e; });
    (archive.factions || []).forEach(function (f) { have[slug(f.id)] = f; have[slug(f.name)] = f; });
    Object.keys(castById || {}).forEach(function (k) {
      have[k] = castById[k]; have[slug(castById[k].name)] = castById[k];
    });
    function want(id, from, role) {
      var key = slug(id);
      if (!key || have[key]) return;
      var entry = demand[key] || (demand[key] = { id: key, name: RP.prettyId(key), count: 0, from: [], chars: [] });
      entry.count++;
      if (entry.from.length < 6) entry.from.push({ name: from.name, summary: from.summary, kind: role, id: from.id });
      (from.participants || []).forEach(function (p) {
        var c = (castById || {})[slug(p && p.id)];
        if (c && entry.chars.length < 6 && !entry.chars.some(function (x) { return x.id === c.id; })) {
          entry.chars.push(Object.assign({}, c, { why: whyFor(p.role) }));
        }
      });
    }
    // keyEvents only: that list means "a filed occurrence", which is what a
    // backfill is. relatedArticles points at anything at all — locations,
    // items, laws — and scanning it turns the board into noise.
    (archive.events || []).forEach(function (e) {
      (e.keyEvents || []).forEach(function (id) { want(id, e, 'event'); });
    });
    Object.keys(castById || {}).forEach(function (k) {
      var c = castById[k];
      (c.keyEvents || []).forEach(function (id) {
        want(id, { id: c.id, name: c.name, summary: c.summary, participants: [{ id: c.id, name: c.name, role: 'was there' }] }, 'character');
      });
    });
    (archive.factions || []).forEach(function (f) {
      (f.keyEvents || []).forEach(function (id) { want(id, f, 'faction'); });
    });
    var uses = (state && state.backfillUses) || {};
    return Object.keys(demand).map(function (k) { return demand[k]; })
      .filter(function (d) { return d.count >= 2 && d.chars.length >= 1; })
      .map(function (d) { d.uses = Number(uses[d.id] || 0); return d; })
      .sort(function (a, b) { return (b.uses - a.uses) || (b.count - a.count); })
      .slice(0, limit || 10);
  };

  RP.whatIfFromBackfill = function (gap, castById) {
    if (!gap || !gap.from.length) return null;
    var cast = gap.chars.slice(0, 6);
    if (cast.length < 2) {
      // One name is enough to file a report, not enough to play a scene.
      (gap.from || []).forEach(function (f) {
        var c = (castById || {})[slug(f.id)];
        if (c && cast.length < 4 && !cast.some(function (x) { return x.id === c.id; })) {
          cast.push(Object.assign({}, c, { why: 'filed the record that points here' }));
        }
      });
    }
    var beats = gap.from.slice(0, 3).map(function (f) {
      return {
        time: 'referenced',
        beat: clip(f.name + ' points at it', 140),
        detail: clip(f.summary, 420),
      };
    }).concat(RP.beatsFromProse(gap.from.map(function (f) { return f.summary; }).join('\n\n'), 3, 'the gap'));
    return scenario({
      id: 'backfill:' + gap.id,
      kind: 'backfill', kindLabel: 'Backfill',
      name: gap.name,
      premise: gap.name + ' is referenced by ' + gap.count + ' filed record' + (gap.count === 1 ? '' : 's') +
        ' and has never been written. This scene is the missing filing: it happened, everyone downstream behaves as though it happened, and no account of it exists.',
      tags: ['backfill', 'unwritten'],
      weight: 2 + Math.min(3, gap.count / 2),
      source: 'backfill → ' + gap.id,
      cast: cast,
      beats: beats.slice(0, 7),
      questions: [
        'What actually happened here, in order?',
        'Who walked away from it, and in what condition?',
        'Which of the later filings is wrong about it?',
      ],
      briefParts: [
        '**The hole.** ' + gap.name + ' is pointed at ' + gap.count + ' times and written nowhere. ' +
          'The archive treats it as settled — later filings refer back to it, characters carry its consequences — ' +
          'but there is no account of the hours themselves.',
        '**What points at it.**\n' + gap.from.slice(0, 4).map(function (f) {
          return '- *' + f.name + '* (' + f.kind + '). ' + clip(f.summary, 260);
        }).join('\n'),
        cast.length ? '**Who was there, according to the records that mention it.**\n' + cast.map(castLine).join('\n') : '',
        '**How this runs.** Play it as the session that was never filed. The beats are the references that depend ' +
          'on it, so the scene has to arrive at what the archive already believes — the how, the cost and the order ' +
          'are yours. Export the transcript afterwards and the gap has a first-hand account.',
        '**What is at stake.** ' + gap.count + ' filings currently rest on an event nobody has ever described. ' +
          'Whatever happens here is what the archive will have to live with.',
      ],
    });
  };

  RP.noteBackfillUse = function (state, id) {
    state.backfillUses = state.backfillUses || {};
    var key = String(id || '').replace(/^backfill:/, '');
    state.backfillUses[key] = Number(state.backfillUses[key] || 0) + 1;
    return state.backfillUses[key];
  };

  /* ------------------------------------------------------------------ *
   * sequels — carry a played scene forward
   * ------------------------------------------------------------------ */

  /** A sequel keeps the cast, the sheets and the memory, and opens on the
   *  unfinished business rather than on a recap. */
  RP.sequelFrom = function (room, state, opts) {
    opts = opts || {};
    var turns = (room.messages || []).filter(visible);
    var tail = turns.slice(-6).map(function (m) {
      var who = m.role === 'user' ? ((state.user && state.user.name) || 'You')
        : ((room.cast || []).filter(function (c) { return c.id === m.charId; })[0] || {}).name || 'Someone';
      return '- **' + who + ':** ' + clip(RP.textOf(m), 220);
    });
    var pinned = (room.messages || []).filter(function (m) { return m.pinned; }).slice(-4)
      .map(function (m) { return '- ' + clip(RP.textOf(m), 220); });
    var unfired = (room.beats || []).slice(room.beatIndex || 0);
    var sheets = Object.keys(room.states || {}).map(function (k) { return room.states[k]; })
      .filter(function (s) { return s.present !== false; });
    var beats = unfired.length ? unfired.slice(0, 6) : [
      { time: 'straight away', beat: 'The consequence arrives', detail: 'Whatever was left hanging at the end of ' + (room.sceneName || room.title) + ' catches up with the people who left it hanging.' },
      { time: 'soon after', beat: 'Someone acts on what they learned', detail: 'One of the people in that room has had time to think, and they move first.' },
      { time: 'later', beat: 'The bill', detail: 'The cost of the previous scene is presented to whoever is standing closest.' },
    ];
    return scenario({
      id: 'sequel:' + room.id + ':' + ((room.sequelCount || 0) + 1),
      kind: 'sequel', kindLabel: 'Sequel',
      name: clip(opts.title || ('After ' + (room.sceneName || room.title)), 110),
      premise: opts.premise || ('Picks up where ' + (room.sceneName || room.title) + ' stopped — same people, same wounds, ' +
        'and whatever they left unfinished. Nothing is recapped; the scene starts already moving.'),
      image: room.sceneImage,
      tags: ['sequel'],
      weight: 4,
      source: 'sequel of ' + (room.sceneName || room.title),
      cast: (room.cast || []).map(function (c) { return Object.assign({}, c, { why: 'was in the previous scene' }); }),
      beats: beats,
      questions: [
        'What did the last scene leave unpaid?',
        'Who has changed their mind since?',
      ],
      briefParts: [
        '**Previously.** ' + clip(room.scene || room.sceneName || room.title, 600),
        tail.length ? '**How it ended.**\n' + tail.join('\n') : '',
        pinned.length ? '**What was pinned as it happened.**\n' + pinned.join('\n') : '',
        sheets.length ? '**The state everyone is carrying in.**\n' + sheets.map(function (s) {
          var bits = [];
          if (s.hp) bits.push('HP ' + s.hp.value + '/' + s.hp.max);
          if (s.mp) bits.push('MP ' + s.mp.value + '/' + s.mp.max);
          var flags = Object.keys(s.flags || {});
          if (flags.length) bits.push(flags.join(', ').replace(/_/g, ' '));
          if ((s.items || []).length) bits.push('carrying ' + s.items.join(', '));
          if (s.status) bits.push(s.status);
          return '- ' + s.name + ': ' + (bits.join(' · ') || 'unmarked');
        }).join('\n') : '',
        unfired.length ? '**Beats that never fired last time.** ' + unfired.length + ' of them, and they fire here instead.' : '',
        '**How it opens.** In the middle. The sequel does not summarise the previous scene — the people in it already ' +
          'lived through that, and so did you.',
      ],
      states: room.states,
    });
  };




  /* ------------------------------------------------------------------ *
   * browsing the cast — 189 characters is a list, not a library
   * ------------------------------------------------------------------ */

  RP.CAST_SORTS = {
    name:     { name: 'Name (A–Z)', fn: function (a, b, ctx) { return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1; } },
    played:   { name: 'Most played by you', fn: function (a, b, ctx) { return (ctx.plays[b.id] || 0) - (ctx.plays[a.id] || 0) || (a.name < b.name ? -1 : 1); } },
    recent:   { name: 'Recently played', fn: function (a, b, ctx) { return (ctx.last[b.id] || 0) - (ctx.last[a.id] || 0) || (a.name < b.name ? -1 : 1); } },
    fame:     { name: 'Best known', fn: function (a, b) { return (b.fameScore || 0) - (a.fameScore || 0) || (a.name < b.name ? -1 : 1); } },
    power:    { name: 'Most dangerous', fn: function (a, b) { return (b.powerLevel || b.level || 0) - (a.powerLevel || a.level || 0) || (a.name < b.name ? -1 : 1); } },
    remember: { name: 'Remembers the most', fn: function (a, b, ctx) { return (ctx.memory[b.id] || 0) - (ctx.memory[a.id] || 0) || (a.name < b.name ? -1 : 1); } },
    filings:  { name: 'Most filed about', fn: function (a, b) { return (b.keyEvents || []).length - (a.keyEvents || []).length || (a.name < b.name ? -1 : 1); } },
  };

  RP.CAST_GROUPS = {
    letter:      { name: 'A–Z', of: function (c) { return RP.letterFor(c.name); } },
    none:        { name: 'No grouping', of: function () { return ''; } },
    race:        { name: 'Race', of: function (c) { return c.race || 'Unfiled'; } },
    affiliation: { name: 'Affiliation', of: function (c) { return c.affiliation || c.faction || 'Unaffiliated'; } },
    status:      { name: 'Status', of: function (c) { return /^active/i.test(c.status || '') ? 'Active' : (c.status ? clip(c.status.split(/[—,.]/)[0], 40) : 'Unfiled'); } },
    standing:    { name: 'Standing', of: function (c) { return c.fameTier || 'Unranked'; } },
  };

  /** Everything the sorters need that lives outside the character record. */
  RP.castContext = function (state) {
    var plays = {}, last = {}, memory = {};
    (state.rooms || []).forEach(function (r) {
      (r.cast || []).forEach(function (c) {
        plays[c.id] = (plays[c.id] || 0) + (r.messages || []).filter(function (m) { return m.role === 'char' && m.charId === c.id; }).length;
        last[c.id] = Math.max(last[c.id] || 0, r.updated || 0);
      });
    });
    (state.chars || []).forEach(function (m) { memory[m.id] = (m.notes || []).length + (m.knowledge || []).length; });
    return { plays: plays, last: last, memory: memory };
  };

  RP.sortCast = function (cast, mode, ctx) {
    var sort = RP.CAST_SORTS[mode] || RP.CAST_SORTS.name;
    return (cast || []).slice().sort(function (a, b) { return sort.fn(a, b, ctx || { plays: {}, last: {}, memory: {} }); });
  };

  /** Search plus facets. The query reads the whole dossier, so "ice mage"
   *  and "Dark Shores" both find people even when it is not in their name. */
  RP.filterCast = function (cast, opts, ctx) {
    opts = opts || {};
    ctx = ctx || { plays: {} };
    var q = String(opts.query || '').toLowerCase().trim();
    return (cast || []).filter(function (c) {
      if (opts.race && (c.race || 'Unfiled') !== opts.race) return false;
      if (opts.affiliation && (c.affiliation || c.faction || 'Unaffiliated') !== opts.affiliation) return false;
      if (opts.view === 'played' && !(ctx.plays[c.id] > 0)) return false;
      if (opts.view === 'unplayed' && ctx.plays[c.id] > 0) return false;
      if (opts.view === 'portrait' && !c.image) return false;
      if (opts.view === 'invented' && !c.invented) return false;
      if (!q) return true;
      return (c.name + ' ' + c.title + ' ' + c.race + ' ' + c.affiliation + ' ' + c.faction + ' ' +
        c.status + ' ' + c.summary + ' ' + c.description + ' ' + (c.tags || []).join(' ')).toLowerCase().indexOf(q) >= 0;
    });
  };

  /** Group for the dividers, in the order the grouping implies. */
  RP.groupCast = function (cast, mode, ctx) {
    var group = RP.CAST_GROUPS[mode] || RP.CAST_GROUPS.letter;
    if (mode === 'none') return [{ letter: '', chars: cast.slice() }];
    var map = {};
    (cast || []).forEach(function (c) {
      var key = clip(group.of(c), 60) || 'Unfiled';
      (map[key] = map[key] || []).push(c);
    });
    var keys = Object.keys(map);
    if (mode === 'letter') {
      keys.sort(function (a, b) { return a === '#' ? 1 : b === '#' ? -1 : a < b ? -1 : 1; });
    } else {
      keys.sort(function (a, b) { return map[b].length - map[a].length || (a < b ? -1 : 1); });
    }
    return keys.map(function (k) { return { letter: k, chars: map[k] }; });
  };

  /** The values worth offering as facets — anything shared by 2+ people. */
  RP.castFacets = function (cast) {
    function facet(of) {
      var counts = {};
      (cast || []).forEach(function (c) {
        var key = clip(of(c), 60);
        if (key) counts[key] = (counts[key] || 0) + 1;
      });
      return Object.keys(counts).filter(function (k) { return counts[k] > 1; })
        .sort(function (a, b) { return counts[b] - counts[a] || (a < b ? -1 : 1); })
        .slice(0, 24).map(function (k) { return { value: k, count: counts[k] }; });
    }
    return {
      race: facet(function (c) { return c.race; }),
      affiliation: facet(function (c) { return c.affiliation || c.faction; }),
    };
  };

  /* ------------------------------------------------------------------ *
   * the calendar — is this filing already history, or has it not
   * happened yet?
   *
   * The archive runs on the Regal Empire Standard Calendar: twelve months
   * of thirty days (Deepwinter has thirty-five), BF counting UP, so 1040
   * is nearer to now than 955. Without this the model cheerfully has a
   * character reminisce about a battle three years in their future.
   * ------------------------------------------------------------------ */

  RP.MONTHS = ['Firstlight', 'Chillwind', 'Veridia', 'Bloom', 'Floria', 'Efferd',
    'Highsun', 'Harvestide', 'Aethel', 'Darkmoon', 'Frostfall', 'Deepwinter'];
  // Legacy month names that appear in older filings.
  var MONTH_ALIAS = { harvestside: 'Harvestide', harvestnoon: 'Harvestide' };
  var DAYS_IN = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 35];

  function monthIndex(name) {
    var want = String(name || '').toLowerCase().trim();
    want = (MONTH_ALIAS[want] || want).toLowerCase();
    for (var i = 0; i < RP.MONTHS.length; i++) {
      if (RP.MONTHS[i].toLowerCase() === want) return i;
    }
    return -1;
  }
  RP.monthIndex = monthIndex;

  /** Days since the start of year 0 — the only number worth comparing. */
  RP.dayOrdinal = function (date) {
    if (!date || date.year === undefined) return null;
    var days = date.year * 365;
    for (var i = 0; i < (date.month || 0); i++) days += DAYS_IN[i];
    return days + (date.day || 1);
  };

  /** Read an in-world date out of anything the archive writes:
   *  "5 Aethel, 1040 BF", "the 21st of Highsun, 1040 BF", "1035 BF", or a
   *  time code "TC:1040-08-30T23:50/SHD". */
  RP.parseWahDate = function (text) {
    var raw = String(text || '');
    if (!raw.trim()) return null;
    var code = /TC:(\d{3,4})-(\d{2})-(\d{2})/.exec(raw);
    if (code) {
      return { year: Number(code[1]), month: Number(code[2]) - 1, day: Number(code[3]), text: clip(raw, 90), exact: true };
    }
    var dayFirst = /(\d{1,2})(?:st|nd|rd|th)?\s+(?:of\s+)?([A-Za-z]+)[,\s]+(\d{3,4})\s*BF/i.exec(raw);
    if (dayFirst && monthIndex(dayFirst[2]) >= 0) {
      return { year: Number(dayFirst[3]), month: monthIndex(dayFirst[2]), day: Number(dayFirst[1]), text: clip(raw, 90), exact: true };
    }
    var monthFirst = /([A-Za-z]+)\s+(\d{1,2})(?:st|nd|rd|th)?[,\s]+(\d{3,4})\s*BF/i.exec(raw);
    if (monthFirst && monthIndex(monthFirst[1]) >= 0) {
      return { year: Number(monthFirst[3]), month: monthIndex(monthFirst[1]), day: Number(monthFirst[2]), text: clip(raw, 90), exact: true };
    }
    var monthYear = /([A-Za-z]+)\s+(\d{3,4})\s*BF/i.exec(raw);
    if (monthYear && monthIndex(monthYear[1]) >= 0) {
      return { year: Number(monthYear[2]), month: monthIndex(monthYear[1]), day: 1, text: clip(raw, 90), exact: false };
    }
    var yearOnly = /(\d{3,4})\s*BF/i.exec(raw);
    if (yearOnly) return { year: Number(yearOnly[1]), month: 0, day: 1, text: clip(raw, 90), exact: false };
    return null;
  };

  RP.formatWahDate = function (date) {
    if (!date) return '';
    return (date.exact ? date.day + ' ' + RP.MONTHS[date.month] + ', ' : '') + date.year + ' BF';
  };

  /** How a filing sits relative to the scene being played. */
  RP.timeRelation = function (sceneDate, otherDate) {
    var a = typeof sceneDate === 'string' ? RP.parseWahDate(sceneDate) : sceneDate;
    var b = typeof otherDate === 'string' ? RP.parseWahDate(otherDate) : otherDate;
    if (!a || !b) return { rel: 'unknown', label: 'undated — treat with care' };
    var days = RP.dayOrdinal(b) - RP.dayOrdinal(a);
    if (days === 0) return { rel: 'now', days: 0, label: 'the same day as this scene' };
    var ago = Math.abs(days);
    var span = ago >= 730 ? Math.round(ago / 365) + ' years'
      : ago >= 60 ? Math.round(ago / 30) + ' months'
      : ago + (ago === 1 ? ' day' : ' days');
    if (days < 0) return { rel: 'past', days: days, label: span + ' before this scene — already history' };
    return { rel: 'future', days: days, label: span + ' AFTER this scene — has not happened yet' };
  };

  /** The archive's own clock, from currentDate.json. */
  RP.worldNow = function (clock) {
    if (!clock || clock.year === undefined) return null;
    return { year: Number(clock.year), month: Number(clock.monthIndex || 0), day: Number(clock.day || 1), exact: true, text: 'the world clock' };
  };

  /** The date the scene is being played on: whatever the room says, then the
   *  scenario it came from, then the archive's clock. */
  RP.sceneDate = function (room, state) {
    return RP.parseWahDate(room && (room.date || room.sceneDate))
      || RP.parseWahDate(room && room.sceneName)
      || RP.worldNow(state && state.clock);
  };

  /* ---- what the cast is allowed to know ---- */

  /** Filings these characters are attached to, sorted into what has already
   *  happened and what has not — with the ids, so the model can cite them
   *  by name instead of inventing a source. */
  RP.knowledgeBlock = function (state, room, archive) {
    archive = archive || {};
    var scene = RP.sceneDate(room, state);
    if (!scene) return '';
    var ids = {};
    (room.cast || []).forEach(function (c) {
      (c.keyEvents || []).forEach(function (id) { ids[slug(id)] = true; });
      (c.relatedArticles || []).forEach(function (id) { ids[slug(id)] = true; });
    });
    var past = [], future = [];
    (archive.events || []).forEach(function (e) {
      var mine = ids[slug(e.id)] || (e.participants || []).some(function (p) {
        return (room.cast || []).some(function (c) { return c.id === slug(p && p.id); });
      });
      if (!mine) return;
      var when = RP.parseWahDate(e.timeCode || e.date);
      var rel = RP.timeRelation(scene, when);
      var line = '- ' + clip(e.name, 80) + ' (' + (when ? RP.formatWahDate(when) : 'undated') + ') — ' +
        rel.label + '. ' + clip(e.summary, 180);
      if (rel.rel === 'future') future.push(line);
      else if (rel.rel === 'past' || rel.rel === 'now') past.push(line);
    });
    if (!past.length && !future.length) return '';
    var out = ['WHEN THIS SCENE IS HAPPENING\nIt is ' + RP.formatWahDate(scene) + ' by the Regal Empire Standard Calendar. ' +
      'Months run Firstlight, Chillwind, Veridia, Bloom, Floria, Efferd, Highsun, Harvestide, Aethel, Darkmoon, ' +
      'Frostfall, Deepwinter, and the year counts UP — a larger BF year is later.'];
    if (past.length) {
      out.push('ALREADY HISTORY — these have happened and the cast may refer to them by name\n' + past.slice(0, 8).join('\n'));
    }
    if (future.length) {
      out.push('HAS NOT HAPPENED YET — do not mention, foreshadow knowingly, or remember any of this\n' +
        future.slice(0, 8).join('\n') +
        '\nIf a character would guess at one of these, they guess — they do not know.');
    }
    return out.join('\n\n');
  };

  /* ------------------------------------------------------------------ *
   * continuations — pick the record up where it stops
   *
   * A backfill writes a hole in the past. A sequel continues a chat you
   * played. A continuation continues the ARCHIVE: the last filed event of
   * a saga, carried forward into hours nobody has filed yet, where the
   * model is expected to invent — new faces, new places, new trouble —
   * without contradicting anything already on the record.
   * ------------------------------------------------------------------ */

  /** Group the filed events into sagas. An era line ("1040 BF — Mario
   *  disappearance file") is the archive's own idea of a storyline, so it is
   *  the grouping; events keep their filed order, and the last one is where
   *  the record currently stops. */
  RP.sagasFrom = function (events) {
    var byEra = {};
    (events || []).forEach(function (e, i) {
      if (!e || !e.name) return;
      var era = clip(e.era || e.type || 'Unfiled', 80);
      (byEra[era] = byEra[era] || []).push(Object.assign({ order: i }, e));
    });
    return Object.keys(byEra).map(function (era) {
      var list = byEra[era];
      return { era: era, events: list, head: list[list.length - 1], length: list.length };
    }).filter(function (saga) {
      return saga.head && (saga.head.summary || '').length > 80;
    }).sort(function (a, b) { return b.head.order - a.head.order; });
  };

  RP.whatIfFromContinuation = function (saga, castById) {
    var head = saga.head;
    if (!head) return null;
    var entries = ((head.timeline || {}).entries || []);
    var closing = entries.slice(-3);
    var cast = (head.participants || []).slice(0, 6).map(function (p) {
      var c = (castById || {})[slug(p.id)] || (castById || {})[slug(p.name)];
      return c ? Object.assign({}, c, { why: whyFor(p.role) }) : null;
    }).filter(Boolean);
    if (cast.length < 2) return null;
    var prior = saga.events.slice(-4, -1);
    // Forward beats: the record has stopped, so these are pressures rather
    // than filed facts. They fire on the usual schedule and push the scene
    // somewhere new instead of replaying what is already written.
    var beats = [
      { time: 'the first hour', beat: 'Nobody has filed this yet',
        detail: 'The last thing on the record is: ' + clip((closing[closing.length - 1] || {}).beat || head.outcome || head.summary, 200) +
          ' Everything from here is unwritten. Play the next hour as it happens.' },
      { time: 'word travels', beat: 'Someone who was not there hears about it',
        detail: 'A person or a body with a stake in ' + clip(head.name, 60) + ' learns what happened, and they do not wait for the archive to confirm it.' },
      { time: 'the new face', beat: 'Somebody the record has never named walks in',
        detail: 'Introduce a character who has never been filed — give them a name, a face, a reason to be here and something they want. They stay in the scene afterwards.' },
      { time: 'the cost', beat: 'The consequence arrives on the wrong person',
        detail: 'What the last filing set in motion lands, and it lands on whoever can least afford it.' },
      { time: 'the turn', beat: 'The saga moves somewhere the record cannot follow',
        detail: 'Something changes that the archive will have to write a new filing about: a place, an allegiance, a body count, a secret said out loud.' },
    ];
    return scenario({
      id: 'continue:' + (head.id || slug(head.name)),
      kind: 'continuation', kindLabel: 'Continue the saga',
      name: 'Continue — ' + clip(saga.era.replace(/^\d+\s*BF\s*—\s*/, ''), 60) + ': after ' + clip(head.name, 50),
      premise: 'The record stops at ' + clip(head.name, 70) + (head.date ? ' (' + clip(head.date, 40) + ')' : '') +
        '. This picks the saga up in the minutes after the last filed line and keeps going into hours nobody has written — ' +
        'new people, new places, new trouble, all of it consistent with what is already filed.',
      image: head.image || '',
      date: clip(head.date, 70),
      tags: ['continuation', clip(saga.era, 30)].concat(head.type ? [clip(head.type, 24)] : []),
      weight: 4 + Math.min(2, saga.length / 3),
      source: 'events.json → ' + head.id + ' (saga of ' + saga.length + ')',
      cast: cast,
      beats: beats,
      questions: [
        'What does the archive have to file about this afterwards?',
        'Who arrives that nobody has written down yet?',
        'What does the saga cost next?',
      ],
      briefParts: [
        '**Where the record stops.** ' + clip(head.summary, 700),
        head.outcome ? '**How the last filing ended.** ' + clip(head.outcome, 600) : '',
        head.aftermath ? '**What it left behind.** ' + clip(String(head.aftermath).replace(/[*#>]/g, ''), 700) : '',
        closing.length ? '**The last beats on the record.**\n' + closing.map(function (e) {
          return '- *' + clip(e.time, 60) + '* — ' + clip(e.beat, 120) + (e.detail ? '. ' + clip(e.detail, 200) : '');
        }).join('\n') : '',
        prior.length ? '**The saga so far.**\n' + prior.map(function (e) {
          return '- *' + clip(e.name, 70) + '* (' + clip(e.date, 40) + '). ' + clip(e.summary, 200);
        }).join('\n') : '',
        head.location ? '**Where you are standing.** ' + clip(head.location, 200) + '.' : '',
        cast.length ? '**Who is still here.**\n' + cast.map(castLine).join('\n') : '',
        '**How this runs.** Everything up to this point is canon and may not be contradicted. Everything after it is ' +
          'yours and the model\u2019s to invent: new characters walk in and stay, places that were never filed get named, ' +
          'and nothing is guaranteed to go the way you intend it. Export the transcript and the archive has a draft ' +
          'of the next filing.',
        '**What is at stake.** A saga that is ' + saga.length + ' filings long, with no filing for what happens next.',
      ],
    });
  };

  /** The block that tells the model it is writing new canon, not replaying
   *  old canon — and how to introduce something the archive has never had. */
  RP.continuationBlock = function (room) {
    if (!room || room.canon !== 'continuation') return '';
    return [
      'THIS IS A CONTINUATION — you are writing what happens next, not retelling what happened',
      'Everything in the scene above is filed and cannot be contradicted. Everything from this point is new.',
      'You are expected to invent forward: name places the archive has never named, give people new injuries,',
      'new debts and new information, and bring in characters who have never been filed at all.',
      'To introduce someone new, use a stage direction on its own line:',
      '  [[NEW: Their Name | what they are here for | what they look like, in one sentence]]',
      'Nobody has drawn them, so the description IS the portrait — be specific about face, build, clothing and',
      'the one detail somebody would remember. They join the scene and stay in it.',
    ].join('\n');
  };

  /* ------------------------------------------------------------------ *
   * fate — the model is not your assistant
   *
   * Left alone, a small model says yes to everything the player writes.
   * Before each reply to a player action the page rolls, and the roll is
   * handed to the model as an instruction it must honour: the attempt
   * works, works at a price, goes sideways, or fails outright.
   * ------------------------------------------------------------------ */

  RP.FATE = {
    triumph: {
      label: 'Triumph', pill: '⚅ Triumph',
      dir: 'The player\u2019s attempt works, and better than they expected. Give them the win in concrete detail, and let ' +
        'it open a door they did not ask for.',
    },
    success: {
      label: 'It works', pill: '⚄ It works',
      dir: 'The player\u2019s attempt works, plainly and without drama. Do not add a complication to it — let the scene ' +
        'move on to whatever happens next.',
    },
    cost: {
      label: 'Works, at a price', pill: '⚃ Works — at a price',
      dir: 'The player\u2019s attempt works, but it costs something specific and immediate: a wound, a broken tool, a ' +
        'noise that carries, time, somebody\u2019s trust. Name the cost in the prose and file it with a stage direction.',
    },
    wrench: {
      label: 'A wrench', pill: '⚂ A wrench in it',
      dir: 'Something the player did not plan for cuts across the attempt right now — an arrival, a betrayal, a door ' +
        'that will not open, an order from somebody with authority. The attempt is not resolved; the situation changes ' +
        'under it. Do not ask the player what they do — show it happening.',
    },
    setback: {
      label: 'It fails', pill: '⚁ It fails',
      dir: 'The player\u2019s attempt FAILS. Not because they were stupid — because the world pushed back. Show the ' +
        'failure physically and leave them worse off than before: hurt, exposed, out of position, or holding the wrong ' +
        'thing. Never soften it into a partial success, and never apologise for it.',
    },
    refusal: {
      label: 'Refused', pill: '⚀ Refused',
      dir: 'The character the player is addressing does NOT do what they were asked. They refuse, argue, walk away, ' +
        'or do something else entirely, for a reason that fits who they are. Stay in character; do not be helpful.',
    },
  };

  // Odds per difficulty, as weights over the table above.
  RP.FATE_ODDS = {
    off: null,
    gentle:  { triumph: 12, success: 40, cost: 26, wrench: 12, setback: 7, refusal: 3 },
    normal:  { triumph: 7,  success: 26, cost: 30, wrench: 18, setback: 13, refusal: 6 },
    harsh:   { triumph: 3,  success: 13, cost: 27, wrench: 22, setback: 24, refusal: 11 },
  };

  function pickWeighted(weights, roll) {
    var total = 0, keys = Object.keys(weights);
    keys.forEach(function (k) { total += weights[k]; });
    var at = roll * total;
    for (var i = 0; i < keys.length; i++) {
      at -= weights[keys[i]];
      if (at <= 0) return keys[i];
    }
    return keys[keys.length - 1];
  }

  /** Roll for the turn. State makes it worse: somebody at low HP or carrying
   *  conditions does not get the benefit of the doubt. `roll` is injectable
   *  so the tests are not at the mercy of the dice. */
  RP.rollFate = function (state, room, opts) {
    opts = opts || {};
    var level = opts.level || (state.settings && state.settings.fate) || 'normal';
    var odds = RP.FATE_ODDS[level];
    if (!odds || room.mechanics === 'off') return null;
    var weights = {};
    Object.keys(odds).forEach(function (k) { weights[k] = odds[k]; });
    // Hurt or burdened characters shift the odds against the player.
    var pressure = 0;
    Object.keys(room.states || {}).forEach(function (id) {
      var sheet = room.states[id];
      if (!sheet || sheet.present === false) return;
      if (sheet.hp && sheet.hp.max && sheet.hp.value <= sheet.hp.max * 0.35) pressure++;
      pressure += Math.min(2, Object.keys(sheet.flags || {}).length) * 0.5;
    });
    if (pressure > 0) {
      var shift = Math.min(2.5, pressure);
      weights.triumph = Math.max(1, weights.triumph - shift * 2);
      weights.success = Math.max(2, weights.success - shift * 4);
      weights.setback += shift * 3;
      weights.wrench += shift * 2;
    }
    var roll = opts.roll === undefined ? Math.random() : opts.roll;
    var key = opts.force || pickWeighted(weights, roll);
    var fate = RP.FATE[key];
    return { key: key, label: fate.label, pill: fate.pill, dir: fate.dir, level: level, pressure: pressure };
  };

  /** What the model is told about the roll. It is written as an order, not a
   *  suggestion, because a suggestion gets ignored. */
  RP.fateBlock = function (fate) {
    if (!fate) return '';
    return [
      'HOW THIS TURN RESOLVES — this is decided already, write it as it is',
      fate.dir,
      'Do not narrate the dice, the odds, or the fact that anything was decided. Do not ask the player to roll.',
      'The player writes only their attempt; whether it works is not theirs to declare, and you do not owe them a yes.',
    ].join('\n');
  };

  /* ------------------------------------------------------------------ *
   * memory — the cross-chat log, character memory, and world lore
   * ------------------------------------------------------------------ */

  /** Ensure (and return) the memory record for a character. */
  RP.charMemory = function (state, char) {
    var id = String((char && char.id) || char || '');
    state.chars = state.chars || [];
    var found = state.chars.filter(function (c) { return c.id === id; })[0];
    if (!found) {
      found = {
        id: id,
        name: (char && char.name) || id,
        mood: '',
        notes: [],        // {at, roomId, roomTitle, text}
        knowledge: [],    // facts the player taught this character
        relations: {},    // otherId -> {name, score, note}
        firstSeen: Date.now(),
      };
      state.chars.push(found);
    }
    if (char && char.name) found.name = char.name;
    return found;
  };

  /** File one line into the world log — the history every chat can see. */
  RP.logEvent = function (state, entry) {
    state.log = state.log || [];
    var record = {
      id: entry.id || uid(),
      at: entry.at || Date.now(),
      kind: String(entry.kind || 'note'),      // chat | beat | pin | replay | lore | note
      roomId: String(entry.roomId || ''),
      roomTitle: String(entry.roomTitle || ''),
      // Two clocks, both recorded: the in-world date the thing happened on,
      // and the real moment it was played. A memory with no date is a rumour.
      when: clip(entry.when, 90),
      text: clip(entry.text, 400),
      chars: (entry.chars || []).map(String),
      tags: (entry.tags || []).map(String),
    };
    state.log.push(record);
    state.log = state.log.slice(-400);
    return record;
  };

  /** Remember one played turn: the speaker's own log, and — for anything the
   *  player marks or the character says at length — the shared world log. */
  RP.rememberTurn = function (state, room, msg) {
    if (!visible(msg)) return null;
    var text = clip(RP.textOf(msg).replace(/\*[^*]*\*/g, ' '), 220);
    if (!text) return null;
    var ids = (room.cast || []).map(function (c) { return c.id; });
    if (msg.role === 'char') {
      var mem = RP.charMemory(state, (room.cast || []).filter(function (c) { return c.id === msg.charId; })[0] || { id: msg.charId });
      mem.notes.push({
        at: msg.at || Date.now(), roomId: room.id, roomTitle: room.title, text: text,
        when: clip(room.date || room.sceneDate || '', 90),
      });
      mem.notes = mem.notes.slice(-40);
      // Everyone else in the room heard it: that is what a relationship is.
      ids.filter(function (id) { return id !== msg.charId; }).forEach(function (id) {
        var other = (room.cast || []).filter(function (c) { return c.id === id; })[0];
        var rel = mem.relations[id] || (mem.relations[id] = { name: (other && other.name) || id, score: 0, note: '' });
        rel.score = Math.max(-10, Math.min(10, (rel.score || 0) + 1));
        rel.name = (other && other.name) || rel.name;
      });
    } else {
      // What the player says is remembered by everyone present.
      ids.forEach(function (id) {
        var mem = RP.charMemory(state, (room.cast || []).filter(function (c) { return c.id === id; })[0]);
        mem.notes.push({ at: msg.at || Date.now(), roomId: room.id, roomTitle: room.title, text: 'The user said: ' + text });
        mem.notes = mem.notes.slice(-40);
      });
    }
    return text;
  };

  RP.setMood = function (state, char, mood) {
    var mem = RP.charMemory(state, char);
    mem.mood = clip(mood, 90);
    return mem;
  };

  RP.teach = function (state, char, fact) {
    var mem = RP.charMemory(state, char);
    var text = clip(fact, 220);
    if (text && mem.knowledge.indexOf(text) < 0) mem.knowledge.push(text);
    mem.knowledge = mem.knowledge.slice(-30);
    return mem;
  };

  /** A lore node: a piece of world truth any chat may draw on. */
  RP.addLore = function (state, node) {
    state.lore = state.lore || [];
    var record = {
      id: node.id || slug(node.title) || uid(),
      title: clip(node.title, 120) || 'Untitled node',
      text: String(node.text || '').slice(0, 4000),
      tags: (node.tags || []).map(function (t) { return clip(t, 40); }).filter(Boolean),
      chars: (node.chars || []).map(String),
      source: clip(node.source, 160),
      at: node.at || Date.now(),
    };
    var at = -1;
    state.lore.forEach(function (n, i) { if (n.id === record.id) at = i; });
    if (at >= 0) state.lore[at] = record; else state.lore.push(record);
    return record;
  };

  RP.removeLore = function (state, id) {
    state.lore = (state.lore || []).filter(function (n) { return n.id !== id; });
    return state.lore;
  };

  /** The prompt section that carries what these characters remember from
   *  chats other than this one — the point of a persistent cast. */
  RP.memoryBlock = function (state, cast, room, limit) {
    var ids = (cast || []).map(function (c) { return c.id; });
    var out = [];
    var log = (state.log || []).filter(function (e) {
      if (room && e.roomId === room.id) return false;      // this chat is already in the history
      return !e.chars.length || e.chars.some(function (id) { return ids.indexOf(id) >= 0; });
    }).slice(-(limit || 10));
    if (log.length) {
      out.push('WHAT HAS ALREADY HAPPENED (other chats, same world)');
      var sceneOn = RP.sceneDate(room, state);
      log.forEach(function (e) {
        var rel = e.when && sceneOn ? RP.timeRelation(sceneOn, e.when) : null;
        out.push('- ' + (e.when ? e.when + (rel && rel.rel === 'future' ? ' [AFTER this scene — they cannot know it]' : '') + ' — ' : '') +
          (e.roomTitle ? '[' + e.roomTitle + '] ' : '') + e.text);
      });
    }
    (cast || []).forEach(function (c) {
      var mem = (state.chars || []).filter(function (m) { return m.id === c.id; })[0];
      if (!mem) return;
      var lines = [];
      if (mem.mood) lines.push('Current state of mind: ' + mem.mood);
      if (mem.knowledge.length) lines.push('Knows: ' + mem.knowledge.slice(-6).join('; '));
      var rel = Object.keys(mem.relations).map(function (k) {
        var r = mem.relations[k];
        return r.name + ' (' + (r.score > 0 ? '+' : '') + r.score + (r.note ? ', ' + r.note : '') + ')';
      });
      if (rel.length) lines.push('Has history with: ' + rel.slice(0, 6).join(', '));
      var recent = mem.notes.filter(function (n) { return !room || n.roomId !== room.id; }).slice(-4);
      if (recent.length) {
        lines.push('Remembers saying or hearing: ' + recent.map(function (n) {
          return (n.when ? n.when + ': ' : '') + '“' + n.text + '”' + (n.roomTitle ? ' (' + n.roomTitle + ')' : '');
        }).join(' '));
      }
      if (lines.length) out.push('', c.name + ' remembers:', lines.map(function (l) { return '- ' + l; }).join('\n'));
    });
    return out.join('\n');
  };

  /** The prompt section for world lore relevant to this cast or scene. */
  RP.loreBlock = function (state, cast, room, limit) {
    var ids = (cast || []).map(function (c) { return c.id; });
    var haystack = ((room && (room.scene + ' ' + room.sceneName + ' ' + room.title)) || '').toLowerCase();
    var nodes = (state.lore || []).filter(function (n) {
      if (!n.chars.length && !n.tags.length) return true;                       // general world lore
      if (n.chars.some(function (id) { return ids.indexOf(id) >= 0; })) return true;
      return n.tags.some(function (t) { return haystack.indexOf(String(t).toLowerCase()) >= 0; });
    }).slice(0, limit || 6);
    if (!nodes.length) return '';
    return 'WORLD LORE (true in this world; treat as established)\n' + nodes.map(function (n) {
      return '- ' + n.title + ': ' + clip(n.text, 400);
    }).join('\n');
  };

  /** The prompt section for a perspective replay. */
  RP.perspectiveBlock = function (room) {
    if (!room || !room.perspective) return '';
    return [
      'PERSPECTIVE REPLAY',
      'These same events are being replayed from a different perspective: ' + room.perspective,
      'Play only what these people could see, hear and believe from where they stand. They may be wrong about the rest.',
    ].join('\n');
  };

  /** Assemble the whole system prompt for one turn. This is the only place
   *  the blocks are ordered, so the page and the tests agree on the shape. */
  RP.systemFor = function (state, room, speaker, opts) {
    opts = opts || {};
    var style = { style: opts.style || room.style || 'novel', scene: room.scene };
    var base = room.kind === 'group'
      ? RP.groupPrompt(room.cast, speaker, style)
      : RP.soloPrompt(room.cast[0] || speaker || {}, style);
    var parts = [base];
    var persona = RP.personaBlock(room.persona || (state.user && state.user.persona) || '');
    if (persona) parts.push(persona);
    if (room.kind !== 'group' && room.scene) parts.push('THE SCENE\n' + room.scene);
    var perspective = RP.perspectiveBlock(room);
    if (perspective) parts.push(perspective);
    var script = RP.scriptBlock(room);
    if (script) parts.push(script);
    var lore = RP.loreBlock(state, room.cast, room);
    if (lore) parts.push(lore);
    var memory = RP.memoryBlock(state, room.cast, room);
    if (memory) parts.push(memory);
    var knowledge = RP.knowledgeBlock(state, room, opts.archive);
    if (knowledge) parts.push(knowledge);
    var continuation = RP.continuationBlock(room);
    if (continuation) parts.push(continuation);
    if (room.mechanics !== 'off') {
      var sheets = RP.stateBlock(room);
      if (sheets) parts.push(sheets);
      parts.push(RP.DIRECTIVES);
    }
    var fateBlock = RP.fateBlock(opts.fate);
    if (fateBlock) parts.push(fateBlock);
    return parts.join('\n\n');
  };

  /* ------------------------------------------------------------------ *
   * perspective dynamic replay
   * ------------------------------------------------------------------ */

  /** Turn a played chat into a script: its own fired beats first, then the
   *  turns that actually moved, evenly sampled so a long chat still fits. */
  RP.beatsFromRoom = function (room, limit) {
    limit = limit || 8;
    var out = [];
    (room.messages || []).filter(function (m) { return m.beat; }).forEach(function (m) {
      var parts = String(m.text).split('\n');
      var head = parts[0].split(' — ');
      out.push({
        time: head.length > 1 ? head[0] : '',
        beat: clip(head.length > 1 ? head.slice(1).join(' — ') : parts[0], 140),
        detail: clip(parts.slice(1).join(' '), 260),
      });
    });
    if (out.length < limit) {
      var turns = (room.messages || []).filter(visible);
      var step = Math.max(1, Math.ceil(turns.length / (limit - out.length)));
      for (var i = 0; i < turns.length; i += step) {
        var m = turns[i];
        var who = m.role === 'user' ? 'The player' :
          (((room.cast || []).filter(function (c) { return c.id === m.charId; })[0] || {}).name || 'Someone');
        out.push({
          time: '', beat: clip(who + ': ' + RP.textOf(m).replace(/\s+/g, ' '), 140),
          detail: clip(RP.textOf(m), 260),
        });
      }
    }
    return out.slice(0, limit);
  };

  /** Build a replay room: the same events, a new cast, a different vantage. */
  RP.replayRoom = function (state, source, cast, opts) {
    opts = opts || {};
    var beats = Array.isArray(opts.beats) && opts.beats.length ? opts.beats : RP.beatsFromRoom(source);
    var name = opts.sceneName || source.sceneName || source.title;
    var room = RP.newRoom(cast, {
      scene: opts.scene || source.scene || ('The events of "' + name + '", seen from somewhere else.'),
      sceneName: name,
      sceneImage: opts.sceneImage || source.sceneImage || '',
      perspective: opts.perspective || (cast || []).map(function (c) { return c.name; }).join(', '),
      replayOf: source.id || '',
      beats: beats,
      style: opts.style || source.style || 'novel',
      persona: opts.persona || '',
      opener: opts.opener || ('Replay — ' + name + ', from the perspective of ' +
        ((cast || []).map(function (c) { return c.name; }).join(', ') || 'someone else') + '.'),
    });
    room.title = opts.title || ('Replay: ' + clip(name, 40));
    RP.logEvent(state, {
      kind: 'replay', roomId: room.id, roomTitle: room.title,
      chars: (cast || []).map(function (c) { return c.id; }),
      text: 'A replay of "' + name + '" was opened from the perspective of ' + room.perspective + '.',
    });
    return room;
  };

  /* ------------------------------------------------------------------ *
   * transcripts, buckets, storage, bundles
   * ------------------------------------------------------------------ */

  /** Markdown export of one chat — the shape that files back into the wiki. */
  RP.transcript = function (room) {
    var lines = [];
    lines.push('# ' + (room.kind === 'group' ? 'Group: ' : '') + room.title);
    lines.push('');
    lines.push('**Cast:** ' + (room.cast || []).map(function (c) { return c.name; }).join(', '));
    if (room.sceneName) lines.push('**Scene:** ' + room.sceneName);
    if (room.perspective) lines.push('**Perspective:** ' + room.perspective);
    lines.push('');
    (room.messages || []).forEach(function (m) {
      if (m.error) return;
      if (m.role === 'scene') { lines.push('> ' + String(RP.textOf(m)).replace(/\n/g, '\n> '), ''); return; }
      if (m.role === 'user') { lines.push('**You:** ' + RP.textOf(m), ''); return; }
      var who = ((room.cast || []).filter(function (c) { return c.id === m.charId; })[0] || {}).name || 'Character';
      lines.push('**' + who + ':** ' + RP.textOf(m), '');
    });
    lines.push('---', 'Exported from Waluipedia Roleplay — ' + new Date().toISOString().slice(0, 10) + '.');
    return lines.join('\n');
  };

  /** Recents, in the buckets the sidebar shows. */
  RP.groupBuckets = function (rooms) {
    var midnight = new Date(new Date().toDateString()).getTime();
    var out = { today: [], yesterday: [], month: [], older: [] };
    (rooms || []).slice().sort(function (a, b) { return (b.updated || 0) - (a.updated || 0); }).forEach(function (r) {
      var at = r.updated || 0;
      if (at >= midnight) out.today.push(r);
      else if (at >= midnight - 864e5) out.yesterday.push(r);
      else if (at >= midnight - 30 * 864e5) out.month.push(r);
      else out.older.push(r);
    });
    return out;
  };

  RP.KEY = 'waluipedia-chatroom-v1';

  function blankState() {
    return {
      version: 1,
      user: { name: 'Archivist', handle: 'waluipedia', persona: '', avatar: '' },
      rooms: [], chars: [], lore: [], log: [], scenarios: [], active: '',
      newChars: [],        // characters invented during play, described not drawn
      hooks: {},           // scenario id -> the opener the model wrote
      backfillUses: {},    // backfill id -> how many times it has been played
      usedPosts: {},   // wire post id -> where it was played
      settings: {
        style: 'novel', voice: 'off', temperature: 0.85, endpoint: '',
        director: 'on',            // let the model decide who speaks next
        fate: 'normal',            // off | gentle | normal | harsh
        statePreset: 'rpg',
        maxChain: RP.MAX_CHAIN,    // …but never more than this before you
      },
    };
  }
  RP.blankState = blankState;

  /** Read the saved state. A damaged or empty store yields a clean one. */
  RP.loadState = function (store, key) {
    var state = blankState();
    try {
      var raw = store.getItem(key || RP.KEY);
      var value = raw ? JSON.parse(raw) : null;
      if (value && typeof value === 'object') {
        ['rooms', 'chars', 'lore', 'log', 'scenarios', 'newChars'].forEach(function (k) {
          if (Array.isArray(value[k])) state[k] = value[k];
        });
        if (typeof value.active === 'string') state.active = value.active;
        if (value.usedPosts && typeof value.usedPosts === 'object') state.usedPosts = value.usedPosts;
        if (value.hooks && typeof value.hooks === 'object') state.hooks = value.hooks;
        if (value.backfillUses && typeof value.backfillUses === 'object') state.backfillUses = value.backfillUses;
        if (value.user && typeof value.user === 'object') state.user = Object.assign(state.user, value.user);
        if (value.settings && typeof value.settings === 'object') state.settings = Object.assign(state.settings, value.settings);
      }
    } catch (e) { /* a corrupt store is an empty store */ }
    return state;
  };

  /** Write the state back, newest 30 rooms only. */
  RP.saveState = function (store, state) {
    var rooms = (state.rooms || []).slice().sort(function (a, b) {
      return (b.updated || 0) - (a.updated || 0);
    }).slice(0, 30);
    var value = {
      version: 1,
      user: state.user, settings: state.settings, active: state.active,
      rooms: rooms, chars: state.chars || [], lore: state.lore || [], log: (state.log || []).slice(-400),
      usedPosts: state.usedPosts || {},
      hooks: state.hooks || {},
      newChars: (state.newChars || []).slice(0, 80),
      backfillUses: state.backfillUses || {},
      scenarios: (state.scenarios || []).slice(0, 30),
    };
    try {
      store.setItem(RP.KEY, JSON.stringify(value));
      return true;
    } catch (e) {
      // Out of quota: drop the oldest rooms until it fits rather than losing
      // the lore and the memory, which are much smaller and much harder to redo.
      for (var keep = 10; keep >= 1; keep = Math.floor(keep / 2)) {
        try {
          value.rooms = rooms.slice(0, keep);
          store.setItem(RP.KEY, JSON.stringify(value));
          return true;
        } catch (e2) { /* keep shrinking */ }
      }
      return false;
    }
  };

  /* ---- import / export bundles ---- */

  RP.BUNDLE_KIND = 'waluipedia-chatroom-bundle';

  /** A portable backup. Chats, lore and memory can travel together or alone. */
  RP.exportBundle = function (state, opts) {
    opts = opts || {};
    var want = function (k) { return opts[k] === undefined ? true : Boolean(opts[k]); };
    var bundle = {
      kind: RP.BUNDLE_KIND,
      version: 1,
      exported: new Date().toISOString(),
      user: want('user') ? state.user : undefined,
    };
    if (want('chats')) bundle.rooms = (opts.rooms || state.rooms || []);
    if (want('lore')) {
      bundle.lore = state.lore || [];
      bundle.scenarios = state.scenarios || [];   // written scenarios are lore too
      bundle.newChars = state.newChars || [];     // so are the people invented in play
    }
    if (want('memory')) {
      bundle.chars = state.chars || [];
      bundle.log = state.log || [];
      bundle.usedPosts = state.usedPosts || {};
      bundle.backfillUses = state.backfillUses || {};
      bundle.hooks = state.hooks || {};
    }
    return bundle;
  };

  /** Load a backup. `merge` keeps what is here and adds what is missing (newer
   *  copies of the same id win); `replace` swaps the named sections outright. */
  RP.importBundle = function (state, data, mode) {
    if (!data || typeof data !== 'object') throw new Error('not a chatroom bundle');
    if (data.kind && data.kind !== RP.BUNDLE_KIND) throw new Error('unknown bundle kind: ' + data.kind);
    var replace = mode === 'replace';
    var stats = { rooms: 0, lore: 0, chars: 0, log: 0, scenarios: 0 };

    function mergeById(current, incoming, pick) {
      var byId = {};
      (replace ? [] : current).forEach(function (item) { byId[item.id] = item; });
      (incoming || []).forEach(function (item) {
        if (!item || !item.id) return;
        var existing = byId[item.id];
        byId[item.id] = existing ? pick(existing, item) : item;
      });
      return Object.keys(byId).map(function (k) { return byId[k]; });
    }

    if (Array.isArray(data.rooms)) {
      var before = (state.rooms || []).length;
      state.rooms = mergeById(state.rooms || [], data.rooms, function (a, b) {
        return (b.updated || 0) >= (a.updated || 0) ? b : a;
      });
      stats.rooms = state.rooms.length - (replace ? 0 : before);
    }
    if (Array.isArray(data.lore)) {
      var loreBefore = (state.lore || []).length;
      state.lore = mergeById(state.lore || [], data.lore, function (a, b) { return b; });
      stats.lore = state.lore.length - (replace ? 0 : loreBefore);
    }
    if (Array.isArray(data.newChars)) {
      state.newChars = mergeById(state.newChars || [], data.newChars, function (a, b) { return b; });
    }
    if (Array.isArray(data.scenarios)) {
      var scenBefore = (state.scenarios || []).length;
      state.scenarios = mergeById(state.scenarios || [], data.scenarios, function (a, b) { return b; });
      stats.scenarios = state.scenarios.length - (replace ? 0 : scenBefore);
    }
    if (Array.isArray(data.chars)) {
      var charsBefore = (state.chars || []).length;
      state.chars = mergeById(state.chars || [], data.chars, function (a, b) {
        // Two memories of the same character merge: notes join, knowledge unions.
        var notes = (a.notes || []).concat(b.notes || []);
        var seen = {}, joined = [];
        notes.sort(function (x, y) { return (x.at || 0) - (y.at || 0); }).forEach(function (n) {
          var key = n.at + '|' + n.text;
          if (!seen[key]) { seen[key] = 1; joined.push(n); }
        });
        var knowledge = (a.knowledge || []).slice();
        (b.knowledge || []).forEach(function (k) { if (knowledge.indexOf(k) < 0) knowledge.push(k); });
        return {
          id: a.id, name: b.name || a.name, mood: b.mood || a.mood,
          notes: joined.slice(-60), knowledge: knowledge.slice(-40),
          relations: Object.assign({}, a.relations || {}, b.relations || {}),
          firstSeen: Math.min(a.firstSeen || Date.now(), b.firstSeen || Date.now()),
        };
      });
      stats.chars = state.chars.length - (replace ? 0 : charsBefore);
    }
    if (Array.isArray(data.log)) {
      var logBefore = (state.log || []).length;
      state.log = mergeById(state.log || [], data.log, function (a, b) { return b; })
        .sort(function (a, b) { return (a.at || 0) - (b.at || 0); }).slice(-400);
      stats.log = state.log.length - (replace ? 0 : logBefore);
    }
    if (data.hooks && typeof data.hooks === 'object') {
      state.hooks = replace ? data.hooks : Object.assign({}, state.hooks || {}, data.hooks);
    }
    if (data.backfillUses && typeof data.backfillUses === 'object') {
      state.backfillUses = replace ? data.backfillUses : Object.assign({}, state.backfillUses || {}, data.backfillUses);
    }
    if (data.usedPosts && typeof data.usedPosts === 'object') {
      state.usedPosts = replace ? data.usedPosts : Object.assign({}, state.usedPosts || {}, data.usedPosts);
    }
    if (data.user && replace) state.user = Object.assign(state.user || {}, data.user);
    return stats;
  };

  window.RP = RP;
})();
