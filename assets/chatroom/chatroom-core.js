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
      status: clip(record.status, 120),
      summary: clip(record.summary || record.description, 320),
      image: String(record.image || ''),
      // The filing account behind the card. Characters carry their own when
      // the archive records one; otherwise the archive itself is the author.
      handle: String(record.handle || record.creator || 'waluipedia').replace(/^@/, ''),
      tags: Array.isArray(record.tags) ? record.tags.slice(0, 8).map(String) : [],
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

  function card(char) {
    var lines = ['Name: ' + char.name];
    if (char.title) lines.push('Title: ' + char.title);
    if (char.race) lines.push('Race: ' + char.race);
    if (char.status) lines.push('Status: ' + char.status);
    if (char.summary) lines.push('About: ' + char.summary);
    return lines.join('\n');
  }
  RP.card = card;

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
      list.map(function (c) { return '- ' + c.name + (c.title ? ' — ' + c.title : ''); }).join('\n'),
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
      perspective: String(opts.perspective || ''),
      replayOf: String(opts.replayOf || ''),
      persona: String(opts.persona || ''),
      style: String(opts.style || 'novel'),
      beats: Array.isArray(opts.beats) ? opts.beats.slice(0, 24) : [],
      beatIndex: 0,
      autoBeats: opts.autoBeats === undefined ? true : Boolean(opts.autoBeats),
      next: '',
      created: Date.now(),
      updated: Date.now(),
    };
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
      mem.notes.push({ at: msg.at || Date.now(), roomId: room.id, roomTitle: room.title, text: text });
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
      log.forEach(function (e) {
        out.push('- ' + (e.roomTitle ? '[' + e.roomTitle + '] ' : '') + e.text);
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
      if (recent.length) lines.push('Remembers saying or hearing: ' + recent.map(function (n) { return '“' + n.text + '”'; }).join(' '));
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
      rooms: [], chars: [], lore: [], log: [], active: '',
      settings: { style: 'novel', voice: 'off', temperature: 0.85, endpoint: '' },
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
        ['rooms', 'chars', 'lore', 'log'].forEach(function (k) {
          if (Array.isArray(value[k])) state[k] = value[k];
        });
        if (typeof value.active === 'string') state.active = value.active;
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
    if (want('lore')) bundle.lore = state.lore || [];
    if (want('memory')) { bundle.chars = state.chars || []; bundle.log = state.log || []; }
    return bundle;
  };

  /** Load a backup. `merge` keeps what is here and adds what is missing (newer
   *  copies of the same id win); `replace` swaps the named sections outright. */
  RP.importBundle = function (state, data, mode) {
    if (!data || typeof data !== 'object') throw new Error('not a chatroom bundle');
    if (data.kind && data.kind !== RP.BUNDLE_KIND) throw new Error('unknown bundle kind: ' + data.kind);
    var replace = mode === 'replace';
    var stats = { rooms: 0, lore: 0, chars: 0, log: 0 };

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
    if (data.user && replace) state.user = Object.assign(state.user || {}, data.user);
    return stats;
  };

  window.RP = RP;
})();
