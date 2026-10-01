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

  /** Shorten text without leaving a word cut in half. Prefers the last
   *  sentence that fits, falls back to the last whole word, and only ever
   *  marks the cut when something was actually dropped. Cutting a status
   *  line mid-word ("the only witness w…") is the kind of thing that makes
   *  a model hallucinate the rest of it. */
  function clip(value, limit) {
    var text = String(value === null || value === undefined ? '' : value).replace(/\s+/g, ' ').trim();
    if (!limit || text.length <= limit) return text;
    var head = text.slice(0, limit);
    // A sentence end in the last third of what fits is the nicest cut.
    var sentence = Math.max(head.lastIndexOf('. '), head.lastIndexOf('! '), head.lastIndexOf('? '));
    if (sentence > limit * 0.6) return head.slice(0, sentence + 1).trim();
    var space = head.lastIndexOf(' ');
    return (space > limit * 0.4 ? head.slice(0, space) : head).trim().replace(/[,;:—-]+$/, '') + '…';
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

  /* A small, safe palette plus #rrggbb. The model writes {red|the door}
   * and the reader sees it in red — nothing else gets through. */
  RP.COLOURS = {
    red: '#c0392b', blood: '#8e2b20', orange: '#c26a1c', amber: '#b3861a', gold: '#a8862c',
    green: '#2f7d4f', teal: '#1f7a72', blue: '#2b5fb3', ice: '#4a8fc7', violet: '#6b46c1',
    purple: '#7a2fb0', pink: '#b5347c', grey: '#6b6b74', gray: '#6b6b74', black: '#1a1a1c',
    white: '#f4f4f6', rust: '#9c5221', moss: '#5c7a3f', bone: '#c8bda4',
    crimson: '#9b1b30', ember: '#b4551f', copper: '#a56a3a', silver: '#8e9196', storm: '#4c5a6e',
    sea: '#2e6f8e', jade: '#2f8f6f', lilac: '#8f7cc9', sand: '#a8905a', venom: '#5f8f2f', plum: '#6d3557',
  };

  function colourValue(name) {
    var key = String(name || '').trim().toLowerCase();
    if (RP.COLOURS[key]) return RP.COLOURS[key];
    if (/^#[0-9a-f]{3}$/i.test(key) || /^#[0-9a-f]{6}$/i.test(key)) return key;
    return '';
  }
  RP.colourValue = colourValue;

  /** The forgiving ear: models write “glowing violet” and “dark red”,
   *  and a palette that silently refuses both is why nobody ever saw a
   *  tint. Take the exact colour if it is one; otherwise find the colour
   *  WORD inside the phrase (last one wins: “blood red” reads red).
   *  Pure junk still returns '' — the palette refuses javascript. */
  function colourLoose(name) {
    var exact = colourValue(name);
    if (exact) return exact;
    var words = String(name || '').toLowerCase().split(/[^a-z#0-9]+/).filter(Boolean);
    for (var i = words.length - 1; i >= 0; i--) {
      var hit = colourValue(words[i]);
      if (hit) return hit;
    }
    return '';
  }
  RP.colourLoose = colourLoose;

  function inlineMd(text) {
    return String(text)
      // {red|the door} · {dark red|the door} · {#c0392b|the door}
      .replace(/\{([a-z][a-z ]{2,14}|#[0-9a-f]{3,6})\|([^{}]{1,300})\}/gi, function (all, name, body) {
        var value = colourLoose(name);
        return value ? '<span class="tint" style="color:' + value + '">' + body + '</span>' : all;
      })
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

  /* ---- standing tints: words the model has chosen a colour for ---- */

  /** The model files [[TINT: the seal, the wax = violet]] once, and those
   *  exact words keep the colour in every turn after — reader-side, so a
   *  tinted phrase costs the prompt nothing. Runs on the raw prose before
   *  RP.md, and never re-colours inside a {colour|…} the writer already
   *  chose for that sentence. */
  RP.applyTints = function (text, tints) {
    var rules = (tints || []).filter(function (t) { return t && t.text && colourValue(t.colour); });
    if (!rules.length) return String(text || '');
    rules = rules.slice().sort(function (a, b) { return String(b.text).length - String(a.text).length; });
    return String(text || '').split(/(\{[^{}|]{1,12}\|[^{}]{1,300}\})/).map(function (chunk, at) {
      if (at % 2) return chunk;                 // already coloured by hand
      rules.forEach(function (t) {
        var safe = String(t.text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        chunk = chunk.replace(new RegExp('(^|[^{|\\w])(' + safe + ')(?![\\w}])', 'gi'), function (all, pre, hit) {
          return pre + '{' + t.colour + '|' + hit + '}';
        });
      });
      return chunk;
    }).join('');
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
      title: clip(record.title, 200),
      race: clip(record.race, 60),
      affiliation: clip(record.affiliation, 160),
      // A filed status is a sentence or three about where somebody is right
      // now. It is the most useful line in the record; do not amputate it.
      status: clip(record.status, 480),
      summary: clip(record.summary || record.description, 600),
      // The filed description is what makes a character behave like
      // themselves rather than like a name with a voice, so it travels with
      // them into the prompt instead of being thrown away at load.
      description: clip(record.description, 1400),
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

  /* ---- Qwen studio voices: which saved profile speaks a line ----
     The local Qwen3-TTS studio keeps voice profiles under plain names
     (Waluigi, Luigi, Wario, Freeman…). A speaker links to a profile by
     FIRST NAME — when Wario talks, the studio's 'Wario' profile reads
     the line — with a hand-written map for the exceptions and a
     fallback for everyone the studio has never heard of. */

  /** 'wario = Wario Grande | toad=Toad' (newlines or | between entries)
   *  → { wario: 'Wario Grande', toad: 'Toad' }. Keys lowercased. */
  RP.parseVoiceMap = function (text) {
    var map = {};
    String(text || '').split(/[\n|]+/).forEach(function (entry) {
      var at = entry.indexOf('=');
      if (at < 0) return;
      var key = entry.slice(0, at).trim().toLowerCase();
      var val = entry.slice(at + 1).trim();
      if (key && val) map[key] = val;
    });
    return map;
  };

  /** The studio profile that speaks for `name`. Hand-written map first
   *  (full name, then first name). When the studio's actual library is
   *  known it is the authority AND the speller: whatever is picked —
   *  map entry, guess, or fallback — is case-corrected to the saved
   *  profile ('wario' is sent as 'Wario', because the studio's dropdown
   *  is case-sensitive and refuses anything not in its list). Without
   *  a library, known misses go to the fallback and everyone else is
   *  tried under their capitalized first name. */
  RP.ttsVoiceFor = function (name, opts) {
    opts = opts || {};
    var fallback = opts.fallback || 'Waluigi';
    var lib = opts.library;
    var inLib = function (want) {
      var low = String(want || '').toLowerCase();
      return (lib || []).find(function (v) { return String(v).toLowerCase() === low; }) || '';
    };
    var full = String(name || '').trim();
    if (!full) return (lib && lib.length && inLib(fallback)) || fallback;
    var map = opts.map || {};
    var first = full.split(/\s+/)[0].replace(/[,.:;!?]+$/, '');
    var picked = map[full.toLowerCase()] || map[first.toLowerCase()] || '';
    if (lib && lib.length) {
      // the library decides, and spells: picked name, else the speaker
      // themselves — each in the studio's own casing
      var found = inLib(picked) || inLib(full) || inLib(first);
      if (found) return found;
      // Absent from the list — but the list can LIE: Gradio's /config is
      // a boot-time snapshot, and a profile saved while the studio runs
      // (its library table shows it!) never appears there until a
      // restart. Unless a real attempt already failed, ask the studio
      // for the voice anyway: a refusal costs one fast error, marks the
      // miss, and the fallback takes over from that line on.
      if (!(opts.misses || {})[first.toLowerCase()]) {
        return picked || first.charAt(0).toUpperCase() + first.slice(1);
      }
      return inLib(fallback) || fallback;
    }
    if (picked) return picked;
    if ((opts.misses || {})[first.toLowerCase()]) return fallback;
    return first.charAt(0).toUpperCase() + first.slice(1);
  };

  /** Grandfather an old chat onto the current systems: re-read the cast
   *  from the archive's current profiles, mend every sheet to the current
   *  shape, and re-run the star rules (the starred character IS the
   *  player). Returns human lines describing what it did — the stream
   *  shows the receipt. Play state (HP, items, history) is untouched. */
  RP.fixRoom = function (state, room, catalog) {
    if (!room) return [];
    var lines = [];
    catalog = catalog || {};
    var refreshed = [];
    (room.cast || []).forEach(function (c, i) {
      var fresh = catalog[c.id];
      if (!fresh) return;
      var now = RP.normChar(Object.assign({}, fresh, { id: c.id }));
      if (JSON.stringify(now) !== JSON.stringify(c)) { room.cast[i] = now; refreshed.push(now.name); }
    });
    if (refreshed.length) lines.push('cast re-read from the archive: ' + refreshed.join(', '));
    var mended = 0;
    Object.keys(room.states || {}).forEach(function (k) {
      var sheet = room.states[k];
      if (!sheet) return;
      var before = JSON.stringify(sheet);
      sheet.flags = sheet.flags || {};
      sheet.counters = sheet.counters || {};
      sheet.items = Array.isArray(sheet.items) ? sheet.items : [];
      if (sheet.present === undefined) sheet.present = true;
      if (before !== JSON.stringify(sheet)) mended++;
    });
    if (mended) lines.push(mended + ' sheet' + (mended === 1 ? '' : 's') + ' mended to the current shape');
    if (room.mechanics !== 'off' && state) {
      var pack = RP.ensurePlayerSheet(state, room);
      if (pack) lines.push('your pack: ' + pack.name + (room.youPlay ? ' — the starred character' : ' — the persona'));
    }
    room.updated = Date.now();
    return lines;
  };

  /** What a model failure actually means, in words a player can act on.
   *  Every failure used to say “check CORS” — including context overflows
   *  and empty replies, which have nothing to do with CORS. */
  RP.modelAdvice = function (message, openai) {
    var m = String(message || '');
    if (/timed out after/i.test(m)) {
      return 'The model may be overloaded or hung — try a smaller model, or press ↻ when it has calmed down.';
    }
    if (/context|exceeds? the available|too (?:long|large|many tokens)/i.test(m)) {
      return 'The request was bigger than the model’s context window — lower the history budget in ⚙, or raise the context size in LM Studio.';
    }
    if (/thinking and wrote no prose/i.test(m)) {
      return 'Use a non-thinking (instruct) build — ⚙ → Test it shows whether a model thinks.';
    }
    if (/failed to fetch|networkerror|load failed|could not be reached|ECONNREFUSED/i.test(m)) {
      return openai
        ? 'If LM Studio is running, check its server is started and that “Enable CORS” is on in its Developer tab.'
        : 'Using LM Studio directly? Open ⚙ and press “LM Studio (1234)” — no workflow server needed.';
    }
    return '';
  };

  /** Reasoning never reaches the page. Some thinking models leak their
   *  deliberation into content as <think> blocks; if that ever gets
   *  displayed or filed it is re-sent in every later prompt and bloats
   *  the context with the model talking to itself. Strip it at the door. */
  RP.stripThink = function (text) {
    return String(text || '')
      .replace(/\s*<think>[\s\S]*?<\/think>\s*/gi, ' ')
      .replace(/^[\s\S]*?<\/think>\s*/i, '')    // an unopened closer: everything before it was thought
      .replace(/\s*<think>[\s\S]*$/i, '')        // an unclosed opener: everything after it is thought
      .trim();
  };

  /** What a line sounds like out loud: tints speak their words, the
   *  markdown furniture and any stray stage direction stay silent. */
  RP.ttsClean = function (text) {
    return String(text || '')
      .replace(/\{([a-z-]+)\|([^}]*)\}/gi, '$2')
      .replace(/\[\[[^\]]*\]\]/g, ' ')
      .replace(/[*_`#>]+/g, ' ')
      .replace(/\s+/g, ' ').trim();
  };

  /** Speech verbs the attribution parser recognizes around a quote. */
  var SAY_VERBS = '(?:says|said|asks?|asked|replies|replied|answers?|answered|' +
    'snarls?|snarled|growls?|growled|mutters?|muttered|murmurs?|murmured|' +
    'shouts?|shouted|yells?|yelled|whispers?|whispered|calls? out|calls?|called|' +
    'barks?|barked|hisses|hissed|drawls?|drawled|rasps?|rasped|laughs?|laughed|' +
    'sighs?|sighed|adds?|added|warns?|warned|offers?|offered|continues?|continued|' +
    'snaps|snapped|grumbles?|grumbled|booms|bellows|purrs|breathes|manages|admits|' +
    'agrees|insists|demands|repeats|begins|finishes|cuts in|chimes in|pipes up)';

  /** A turn split into voices: narration (who: '') between the quotes,
   *  each quote attributed to whoever the prose says is speaking —
   *  '"nah," Sans says', 'Wario snarls, "…"', 'Sans: "…"', '"Out,"
   *  snarls Wario'. A quote the prose does NOT attribute belongs to
   *  whoever is talking this turn; on a world or director turn that is
   *  nobody, so the narrator (Waluigi by default) reads it. */
  /** Second-person speech verbs: the model writes the PLAYER's line as
   *  “…,” you say — that quote belongs to the player's voice, not to
   *  whoever's name is on the card. */
  var YOU_VERBS = '(?:say|said|ask|asked|reply|replied|answer|answered|whisper|whispered|' +
    'mutter|muttered|murmur|murmured|shout|shouted|yell|yelled|call out|call|called|' +
    'snap|snapped|add|added|warn|warned|offer|offered|continue|continued|admit|admitted|' +
    'agree|agreed|insist|insisted|demand|demanded|repeat|repeated|begin|began|' +
    'finish|finished|manage|managed|breathe|breathed|read|reads)';

  RP.speechParts = function (text, names, speaker, player) {
    var clean = RP.ttsClean(text);
    var deflt = String(speaker || '').trim();
    var you = String(player || '').trim();
    if (!clean) return [];
    var escName = function (s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); };
    var alts = (names || []).filter(Boolean).map(String)
      .sort(function (a, b) { return b.length - a.length; }).map(escName).join('|');
    var out = [];
    var push = function (who, part) {
      part = String(part).replace(/^[\s,\u2014\u2013:-]+/, '').replace(/[\s\u2014\u2013-]+$/, '').trim();
      if (!part) return;
      if (out.length && out[out.length - 1].who === who) out[out.length - 1].text += ' ' + part;
      else out.push({ who: who, text: part });
    };
    var QUOTE_RE = /["\u201c]([^"\u201c\u201d]+)["\u201d]/g;
    var afterName = alts ? new RegExp('^[\\s,\u2014\u2013-]*(' + alts + ')\\s+' + SAY_VERBS, 'i') : null;
    var afterVerb = alts ? new RegExp('^[\\s,\u2014\u2013-]*' + SAY_VERBS + '\\s+(' + alts + ')', 'i') : null;
    var beforeName = alts ? new RegExp('(' + alts + ')[^.!?"\u201c\u201d]{0,30}' + SAY_VERBS + '\\s*[,:]?\\s*$', 'i') : null;
    var beforeColon = alts ? new RegExp('(' + alts + ')\\s*:\\s*$', 'i') : null;
    var afterYou = you ? new RegExp('^[\\s,\u2014\u2013-]*you\\s+' + YOU_VERBS, 'i') : null;
    var beforeYou = you ? new RegExp('\\byou\\b[^.!?"\u201c\u201d]{0,30}\\b' + YOU_VERBS + '\\s*[,:]?\\s*$', 'i') : null;
    var last = 0; var m; var any = false;
    while ((m = QUOTE_RE.exec(clean)) !== null) {
      any = true;
      var before = clean.slice(Math.max(0, m.index - 60), m.index);
      var after = clean.slice(QUOTE_RE.lastIndex, QUOTE_RE.lastIndex + 60);
      push('', clean.slice(last, m.index));
      var t = null;
      var hit = (afterName && (t = afterName.exec(after))) ? t[1]
        : (afterVerb && (t = afterVerb.exec(after))) ? t[1]
        : (beforeName && (t = beforeName.exec(before))) ? t[1]
        : (beforeColon && (t = beforeColon.exec(before))) ? t[1]
        : (afterYou && afterYou.test(after)) ? you
        : (beforeYou && beforeYou.test(before)) ? you
        : '';
      push(hit || deflt, m[1]);
      last = QUOTE_RE.lastIndex;
    }
    if (!any) return [{ who: deflt, text: clean }];
    push('', clean.slice(last));
    return out;
  };

  /** Sentence-aware chunks for the studio (same idea as the article
   *  bridge): sentences stay whole, nothing exceeds `size` chars. */
  RP.ttsChunks = function (text, size, lead) {
    size = size || 450;
    var clean = RP.ttsClean(text);
    if (!clean) return [];
    var sentences = clean.match(/[^.!?]+[.!?]+["'\u201d\u2019]?\s*|[^.!?]+$/g) || [clean];
    var out = []; var cur = '';
    // With a `lead`, the first chunk closes at the first sentence end past
    // that size: the voice starts on the opening line while the rest is
    // still synthesizing, instead of waiting for a full-size first chunk.
    var cap = function () { return (lead && !out.length) ? lead : size; };
    sentences.forEach(function (s) {
      s = s.trim();
      if (!s) return;
      if (!cur) cur = s;
      else if (cur.length + s.length + 1 <= cap()) cur += ' ' + s;
      else { out.push(cur); cur = s; }
      while (cur.length > size) { out.push(cur.slice(0, size)); cur = cur.slice(size).trim(); }
    });
    if (cur) out.push(cur);
    return out;
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
      lines.push(clip(char.description, 1400));
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
    'You may colour a few words when it earns it: {red|the door is open}, {ice|her breath}, {#8e2b20|the stain}. ' +
      'Colours available: red, blood, crimson, orange, ember, amber, gold, copper, green, moss, jade, teal, sea, ' +
      'blue, ice, storm, violet, purple, lilac, plum, pink, grey, silver, black, white, rust, sand, bone, venom, ' +
      'or any #hex. Use it for one thing that matters, not for decoration — two or three words in a turn at most, ' +
      'and never a whole sentence.',
    'When a thing should keep its colour every time it is named — a cursed blade, a sickness, a word written in ' +
      'blood — file it once with [[TINT: the exact words = colour]] and the page colours every later mention for ' +
      'you. That is for things with lasting weight, two or three per scene at most.',
    'Use the material. When the archive passages, the session filing or the lore book say something that touches ' +
      'this moment, USE IT — a date, a name, a number, what somebody actually said. Quote it, argue with it, get it ' +
      'slightly wrong in character if that is truer. A scene that could have happened in any story is a wasted turn.',
    'If you need a fact you do not have, ask for it with [[LOOKUP: …]] rather than inventing one.',
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
          (c.id !== who.id && c.summary ? '\n    ' + clip(c.summary, 120) : '');
      }).join('\n'),
      '',
      'YOU ARE ' + who.name,
      card(who),
      '',
      'Write the next turn speaking ONLY as ' + who.name + '.',
      'START WITH ' + who.name.toUpperCase() + '. The first sentence must be ' + who.name + ' doing or saying ' +
      'something. Do not open on anybody else, do not write another character\u2019s dialogue, do not narrate the ' +
      'user, and do not describe the room instead of acting.',
      'If ' + who.name + ' genuinely has nothing to add, have them do one small physical thing and stop — but they ' +
      'must be the one doing it.',
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
      kit: String(opts.kit || 'auto'),          // 'auto' dresses the cast from their profiles; 'off' leaves packs empty
      states: {},
      mechanics: opts.mechanics === undefined ? 'on' : opts.mechanics,
      // How far back the model may look in this room; 0 means "use the
      // global setting".
      contextLimit: Number(opts.contextLimit || 0),
      recap: '', recapAt: 0,                    // the story so far, folded up
      youPlay: String(opts.youPlay || ''),      // the character the reader plays
      privacy: String(opts.privacy || ''),      // '' (read the turn) | private | open
      note: String(opts.note || ''),            // standing instructions for this chat
      sequelOf: String(opts.sequelOf || ''),
      sourceId: String(opts.sourceId || ''),    // the filed record behind this scene
      sourceKind: String(opts.sourceKind || ''),
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
    // Narration counts. Leaving the world's turns out of the history is why
    // it described the same cloak and the same moon three times running.
    return msg && !msg.error && !msg.beat &&
      (msg.role === 'user' || msg.role === 'char' || msg.role === 'world');
  }
  RP.visible = visible;

  /** Chat history in the model's own shape. Scene cards, fired beats and the
   *  page's own failure notices are never sent: the model sees only play. */
  RP.historyFor = function (room, limit) {
    var group = room && room.kind === 'group';
    var from = Math.max(0, Number((room && room.recapAt) || 0));
    // A muted turn stays on screen and stays out of the model's head: that
    // is how you take something back without deleting it.
    var out = (room && room.messages ? room.messages : []).filter(function (m) {
      return visible(m) && !m.muted;
    }).map(function (m) {
      if (m.role === 'user') return { role: 'user', content: RP.textOf(m) };
      if (m.role === 'world') return { role: 'assistant', content: 'Narration: ' + RP.textOf(m) };
      var name = '';
      if (group) {
        var who = (room.cast || []).filter(function (c) { return c.id === m.charId; })[0];
        name = who ? who.name + ': ' : '';
      }
      return { role: 'assistant', content: name + RP.textOf(m) };
    });
    // Anything before the recap point is covered by the recap itself.
    if (from) out = out.slice(from);
    return limit ? out.slice(-limit) : out;
  };

  /* ---- the rolling recap: a long chat without a long prompt ---- */

  RP.RECAP_AFTER = 18;      // turns of history before the old ones are folded up

  /** Which turns the model still sees verbatim. Everything before the
   *  recap point is represented by the recap itself. */
  RP.liveTurns = function (room) {
    var turns = (room.messages || []).filter(visible);
    var from = Math.max(0, Number(room.recapAt || 0));
    return turns.slice(from);
  };

  /** Is it time to fold the old turns up? */
  RP.needsRecap = function (room, every) {
    var turns = (room.messages || []).filter(visible).length;
    var from = Number(room.recapAt || 0);
    return turns - from > (every || RP.RECAP_AFTER) * 1.5;
  };

  /** The recap request itself is budgeted. A grandfathered room can owe
   *  hundreds of unfolded turns; sending them all once put 14,557 tokens
   *  into an 8,192-token window and bought a 400 instead of a summary.
   *  The newest of the stretch ride whole-ish; the oldest fall off with
   *  a note saying so. recapAt still advances, so it never recurs. */
  RP.RECAP_FOLD = 7000;

  /** Out of the box the background AI is LEAN: one model call per turn —
   *  the model writes the story; speakers rotate deterministically and
   *  the lore book / upkeep reviewers wait for full mode. On a machine
   *  where every call costs minutes, the pickers cost more than the prose. */
  RP.BACKGROUND_DEFAULT = 'lean';

  /** The prompt that writes the recap — a small, cheap, background call. */
  RP.recapPrompt = function (room, turns, previous) {
    var lines = []; var used = 0; var dropped = 0;
    for (var i = (turns || []).length - 1; i >= 0; i--) {
      var line = turns[i].who + ': ' + clip(turns[i].text, 300);
      if (used + line.length > RP.RECAP_FOLD && lines.length) { dropped = i + 1; break; }
      lines.unshift(line); used += line.length + 1;
    }
    return [
      'Summarise this stretch of a roleplay session so the scene can carry on without re-reading it.',
      '',
      previous ? 'WHAT WAS ALREADY SUMMARISED (fold this in, do not repeat it separately)\n' + clip(previous, 900) : '',
      '',
      'THE TURNS' + (dropped ? ' (the ' + dropped + ' oldest were dropped for space — mention that time passed)' : ''),
      lines.join('\n'),
      '',
      'Write 120 to 200 words of plain past-tense prose. Keep: who did what, what was decided, what was learned,',
      'what changed hands, what was promised or refused, and anything anybody would still be angry about.',
      'Drop: weather, atmosphere, and anything said twice. No headings, no bullet points, no commentary.',
    ].filter(Boolean).join('\n');
  };

  RP.recapBlock = function (room) {
    if (!room || !room.recap) return '';
    return 'THE STORY SO FAR — everything before the turns below, folded up. Treat it as having happened.\n' +
      clip(room.recap, 1200);
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
    if (room.beatsPaused) return null;
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
  // "3 days later", "that night", "a week after" — the player has moved the
  // scene, and the filed script no longer lines up with it.
  var JUMP_RE = /\b(\d+\s+(?:minutes?|hours?|days?|weeks?|months?|years?)\s+(?:later|after|on)|later that (?:night|day|week|morning|evening)|the next (?:day|morning|night|week)|meanwhile|some time later|years? later|afterwards?)\b/i;

  /** Did the player just jump the clock or change the place? */
  RP.isTimeJump = function (text) {
    return JUMP_RE.test(String(text || ''));
  };

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
      'WORLD',
      '   — choose this when nobody needs to speak but the scene should move: time passing, weather, an arrival, '
      + 'a noise, the place itself doing something.',
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
    if (/^\s*WORLD\s*$/im.test(value)) return { next: 'world', reason: 'the scene moves on its own' };
    var match = /NEXT\s*:\s*([^\n]+)/i.exec(value);
    if (!match) return { next: 'user', reason: 'the scene is waiting on you' };
    var wanted = match[1].replace(/["'.*]/g, '').trim().toLowerCase();
    if (!wanted || wanted === 'user' || wanted === 'player') return { next: 'user', reason: 'the scene is waiting on you' };
    if (wanted === 'world' || wanted === 'the world' || wanted === 'narration') {
      return { next: 'world', reason: 'the scene moves on its own' };
    }
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
  /** Items are things, not strings: a name, a note about it, whether it is
   *  in hand, and how many. Old string inventories are upgraded on read. */
  /* An emoji per kind of thing, so a sheet can be read at a glance. The
   * model may set one itself; this is the fallback, by what it is called. */
  RP.ICONS = [
    [/\b(key|keys)\b/i, '🗝'], [/\b(sword|blade|knife|dagger|machete)\b/i, '🗡'],
    [/\b(gun|pistol|rifle|musket)\b/i, '🔫'], [/\b(bow|arrow|arrows|quiver)\b/i, '🏹'],
    [/\b(shield|buckler)\b/i, '🛡'], [/\b(hammer|mallet|rolling pin)\b/i, '🔨'],
    [/\b(rope|cord|line)\b/i, '🪢'], [/\b(lamp|lantern|torch|candle)\b/i, '🏮'],
    [/\b(book|ledger|tome|codex)\b/i, '📕'], [/\b(note|notes|notepad|paper|papers|sheet|sheets|file|files|letter)\b/i, '📄'],
    [/\b(map|chart)\b/i, '🗺'], [/\b(tape|cassette|reel)\b/i, '📼'],
    [/\b(coin|coins|gold|purse|money)\b/i, '🪙'], [/\b(potion|vial|flask|tonic)\b/i, '🧪'],
    [/\b(food|bread|ration|rations|apple)\b/i, '🍞'], [/\b(water|canteen|bottle)\b/i, '🧴'],
    [/\b(bandage|bandages|kit|salve)\b/i, '🩹'], [/\b(ring|amulet|charm|talisman)\b/i, '💍'],
    [/\b(stone|shard|crystal|gem)\b/i, '💎'], [/\b(cloak|coat|boots|glove|gloves|hat)\b/i, '🧥'],
    [/\b(watch|clock|stopwatch)\b/i, '⏱'], [/\b(bomb|grenade|charge)\b/i, '💣'],
    [/\b(pipe|wrench|tool|tools)\b/i, '🔧'], [/\b(photo|photograph|picture|plate)\b/i, '🖼'],
  ];

  RP.iconFor = function (name) {
    var text = String(name || '');
    for (var i = 0; i < RP.ICONS.length; i++) {
      if (RP.ICONS[i][0].test(text)) return RP.ICONS[i][1];
    }
    return '📦';
  };

  /* ---- the wardrobe department: profile → kit, slots and stats.
   * All of it is derived from the filed record, deterministically —
   * hash-stable like the voices and the avatar tints — so a character
   * walks in outfitted like themselves in every browser, and no model
   * call is ever spent on it. ---- */

  /** What a filed profile reads as. Each bucket is a few candidate items;
   *  the hash picks one, so two soldiers do not carry the same blade. */
  RP.KIT_TABLE = [
    [/soldier|captain|general|commander|warlord|legion|guard|knight|warrior|paratroopa|merc/i,
      ['🗡 a service blade | kept sharper than regulation', '🛡 a dented shield | it has earned the dents', '🗡 a short sword | the grip rewrapped twice'],
      ['🩹 a field dressing | rolled tight', '🪙 back pay | most of it owed away']],
    [/archivist|historian|scribe|record|librarian|clerk|scholar/i,
      ['📄 working papers | annotated past reading', '📕 a duty ledger | two hands of ink in it', '📄 copied filings | the dates underlined'],
      ['🖋 a good pen | fought for at the stores desk', '🏮 a reading lamp | wick trimmed low']],
    [/mage|magic|arcane|wizard|sorcer|witch|oracle|ritual/i,
      ['📕 a working grimoire | three pages dog-eared', '💎 a focus stone | warm to the touch', '🧪 a prepared draught | unlabelled on purpose'],
      ['🕯 ritual candles | half burned down']],
    [/thief|looter|infiltrat|rogue|spy|smuggler|pickpocket/i,
      ['🔧 picks and shims | quiet in their roll', '🗝 a key that should not exist | it opens more than one door', '🪢 a coil of dark cord | pre-knotted'],
      ['🪙 somebody else\u2019s coin | still warm']],
    [/merchant|debt|acquisitions|coin|profit|bank|business|trader/i,
      ['🪙 a working purse | counted twice daily', '📄 a book of debts | names, sums, dates'],
      ['📄 a blank contract | the fine print pre-written', '⏱ a good watch | collateral, technically']],
    [/hunter|ranger|scout|tracker|trapper/i,
      ['🏹 a strung bow | kept out of the rain', '🗡 a skinning knife | honest work on the handle'],
      ['🪢 snare wire | wound on a stick', '🍞 trail rations | more than they look']],
    [/healer|doctor|medic|nurse|surgeon|priest|cleric/i,
      ['🩹 a dressing kit | rolled and boiled', '🧪 a tincture | measured doses marked'],
      ['📄 case notes | initials only']],
    [/sailor|pilot|charter|driver|courier|caravan/i,
      ['🗺 a working chart | corrected by hand', '🪢 good line | spliced at both ends'],
      ['🧴 a canteen | dented, trusted']],
    [/engineer|mechanic|tinker|smith|builder|mason/i,
      ['🔧 a tool roll | nothing missing', '🔨 a fitting hammer | the handle replaced, twice'],
      ['📄 a marked-up schematic | do not fold']],
  ];

  /** A pocket item everyone gets, picked by hash — texture, not power. */
  RP.POCKET = ['🪙 a few small coins', '📄 a folded note | not theirs to read',
    '🕯 a candle stub', '⏱ a watch that runs slow', '🧵 odds and ends | string, a button, a pin'];

  /** The starting kit a profile earns: at most one item from each of the
   *  first two buckets it matches, one bucket extra, one pocket item.
   *  Two to four things — a kit, not a shop. */
  RP.kitFor = function (char) {
    char = char || {};
    var text = ((char.title || '') + ' ' + (char.status || '') + ' ' + (char.summary || '') + ' ' +
      (char.description || '') + ' ' + (char.faction || '')).toLowerCase();
    var seed = hash(char.id || char.name || '');
    var items = [];
    for (var i = 0; i < RP.KIT_TABLE.length && items.length < 3; i++) {
      var row = RP.KIT_TABLE[i];
      if (!row[0].test(text)) continue;
      var main = row[1][seed % row[1].length];
      items.push(main);
      if (items.length < 3 && row[2] && (seed >> 2) % 2 === 0) {
        items.push(row[2][(seed >> 3) % row[2].length]);
      }
    }
    items.push(RP.POCKET[(seed >> 4) % RP.POCKET.length]);
    return items.slice(0, 4).map(RP.normItem);
  };

  /** How many slots a pack has. A quartermaster hauls, a ghost does not,
   *  and the reader always gets the full twelve. */
  RP.packSizeFor = function (char) {
    char = char || {};
    var text = ((char.title || '') + ' ' + (char.summary || '') + ' ' + (char.description || '')).toLowerCase();
    var slots = 6;
    if (/merchant|smuggler|scavenger|quartermaster|trader|courier|caravan|collector/.test(text)) slots += 2;
    if (/ghost|spirit|undead|revenant|monster|beast|titan|dragon|plant|creature/.test(text)) slots -= 3;
    if (/king|queen|regent|noble|lord|lady|prince|princess/.test(text)) slots -= 1;   // other people carry for them
    return Math.max(3, Math.min(10, slots));
  };

  /* ---- pseudo-stats: four numbers that lean on the dice, not the prose.
   * ⚔ might, 🧠 wits, 🗣 sway, 🍀 luck — 0 poor, 1 fair, 2 good, 3 sharp.
   * They are read out of the filed record once, shown as chips, editable
   * by hand, and spent exactly one place: the fate roll. ---- */

  RP.STAT_KEYS = ['might', 'wits', 'sway', 'luck'];
  RP.STAT_ICONS = { might: '⚔', wits: '🧠', sway: '🗣', luck: '🍀' };

  RP.statsFor = function (char) {
    char = char || {};
    var text = ((char.title || '') + ' ' + (char.status || '') + ' ' + (char.summary || '') + ' ' +
      (char.description || '')).toLowerCase();
    var s = { might: 1, wits: 1, sway: 1, luck: 1 };
    if (/soldier|captain|general|commander|warlord|legion|guard|knight|warrior|monster|beast|titan|dragon|smith|brawler|paratroopa/.test(text)) s.might += 1;
    if (/archivist|historian|scribe|record|librarian|mage|magic|arcane|wizard|sorcer|oracle|scholar|engineer|doctor|witch|detective/.test(text)) s.wits += 1;
    if (/king|queen|lord|lady|prince|princess|speaker|delegate|noble|regent|merchant|priest|jester|comedian|diplomat|singer/.test(text)) s.sway += 1;
    if (/thief|looter|infiltrat|rogue|spy|smuggler|gambl|prank|drifter|scavenger|pirate/.test(text)) s.luck += 1;
    if (Number(char.powerLevel || 0) >= 7) s.might += 1;
    if (/coward|nervous|anxious|timid/.test(text)) s.sway = Math.max(0, s.sway - 1);
    if (/injured|wounded|dying|frail|old age|elderly/.test(text)) s.might = Math.max(0, s.might - 1);
    // One hash point so two clerks are not the same clerk.
    s[RP.STAT_KEYS[hash(char.id || char.name || '') % 4]] += 1;
    RP.STAT_KEYS.forEach(function (k) { s[k] = Math.max(0, Math.min(3, s[k])); });
    return s;
  };

  RP.statLine = function (stats) {
    if (!stats) return '';
    return RP.STAT_KEYS.map(function (k) { return RP.STAT_ICONS[k] + (stats[k] === undefined ? 1 : stats[k]); }).join(' ');
  };

  /** Which stat an attempt leans on, from the player's own words. */
  RP.actionStat = function (text) {
    var t = ' ' + String(text || '').toLowerCase() + ' ';
    if (/\b(hit|strike|attack|swing|punch|fight|shove|charge|force|break|smash|grapple|wrestle|kick|stab|tackle|slam|wrench|lift|drag|hold (him|her|them|it) down)\b/.test(t)) return 'might';
    if (/\b(persuade|convince|talk|lie|bluff|charm|bargain|negotiate|plead|threaten|intimidate|order|flatter|reassure|calm|appeal|argue)\b/.test(t)) return 'sway';
    if (/\b(search|examine|inspect|study|read|decipher|recall|remember|figure|work out|notice|listen|track|analyse|analyze|calculate|identify|diagnose)\b/.test(t)) return 'wits';
    if (/\b(sneak|steal|pick|hide|slip|dodge|duck|gamble|climb|leap|jump|vault|escape|palm|swipe|creep)\b/.test(t)) return 'luck';
    return '';
  };

  RP.normItem = function (value) {
    if (value && typeof value === 'object') {
      return {
        name: clip(value.name, 60), note: clip(value.note, 160),
        icon: clip(value.icon, 4) || RP.iconFor(value.name),
        equipped: Boolean(value.equipped), qty: Math.max(1, Number(value.qty || 1)),
      };
    }
    // "🗝 a brass key | bent, from the ledger room" — the icon is optional.
    var text = String(value || '').trim();
    var lead = /^([\u{1F300}-\u{1FAFF}\u{2190}-\u{27BF}\u{FE0F}]{1,2})\s+/u.exec(text);
    var icon = lead ? lead[1] : '';
    if (lead) text = text.slice(lead[0].length);
    var split = text.split('|');
    var name = clip(split[0], 60);
    return {
      name: name, note: clip(split.slice(1).join('|'), 160),
      icon: icon || RP.iconFor(name), equipped: false, qty: 1,
    };
  };

  /** The inventory as a grid of slots: what is in hand first, then the
   *  rest, then empty slots so the shape stays the same. */
  RP.gridSlots = function (sheet, size) {
    size = size || (sheet && sheet.slots) || 12;
    var kit = ((sheet && sheet.items) || []).map(RP.normItem);
    var held = kit.filter(function (i) { return i.equipped; });
    var stowed = kit.filter(function (i) { return !i.equipped; });
    var slots = held.concat(stowed).slice(0, size);
    while (slots.length < size) slots.push(null);
    return slots;
  };

  /* An emoji per kind of affliction, same idea as the kit icons: a sheet
   * full of conditions should read at a glance too. */
  RP.CONDITION_ICONS = [
    [/bleed|cut|gash|wound/i, '🩸'], [/poison|venom|toxin/i, '☠️'], [/burn|fire|scorch|ablaze/i, '🔥'],
    [/freez|frozen|chill|frost/i, '🧊'], [/stun|dazed|concuss/i, '💫'], [/bless|warded|shielded/i, '✨'],
    [/curse|hex|marked/i, '🕯️'], [/fear|afraid|terrif|panick/i, '😨'], [/exhaust|tired|winded|fatigu/i, '😮‍💨'],
    [/hidden|unseen|stealth/i, '🫥'], [/bound|chained|tied|shackl/i, '⛓️'], [/sick|ill|fever|nausea/i, '🤢'],
    [/charm|smitten|swayed/i, '💘'], [/rage|furious|berserk/i, '😡'], [/blind/i, '🙈'], [/silenc|mute/i, '🤐'],
    [/hunt|wanted|tracked/i, '🎯'], [/drunk|tipsy/i, '🍺'], [/broken|crack|sprain|fractur/i, '🦴'],
  ];

  RP.condIcon = function (name) {
    var text = String(name || '').replace(/_/g, ' ');
    for (var i = 0; i < RP.CONDITION_ICONS.length; i++) {
      if (RP.CONDITION_ICONS[i][0].test(text)) return RP.CONDITION_ICONS[i][1];
    }
    return '⚠️';
  };

  /** "bleeding 3 -2hp | a deep cut across the palm" → one live condition.
   *  The per-turn cost comes off the head first, then the turns left, and
   *  whatever remains is the condition itself. Plain "hunted" works too —
   *  it just never ticks. One parser for the setup forms, the sheet
   *  editor and the COND direction, so they cannot drift apart. */
  RP.parseCondition = function (line) {
    var parts = String(line || '').split('|');
    var head = parts[0].trim();
    var effect = /\s([+-]\d{1,3}(?:hp|mp))\s*$/i.exec(head);
    if (effect) head = head.slice(0, effect.index).trim();
    var turns = /\s(\d{1,2})\s*$/.exec(head);
    if (turns) head = head.slice(0, turns.index).trim();
    var key = slug(head);
    if (!key) return null;
    return {
      key: key, name: head,
      turns: turns ? Number(turns[1]) : 0,
      effect: effect ? effect[1].toLowerCase() : '',
      note: clip(parts.slice(1).join('|'), 160),
    };
  };

  /** A condition has a name, a note and — if it is going to pass — a
   *  number of turns left on it. */
  RP.normCondition = function (key, value) {
    if (value && typeof value === 'object') {
      return {
        note: clip(value.note, 160), turns: Number(value.turns || 0) || 0,
        effect: clip(value.effect, 40),        // "-2hp", "-1mp", "+1hp"
      };
    }
    return { note: '', turns: 0, effect: '' };
  };

  /** What a condition does to you every turn it lasts: "-2hp" bleeds. */
  RP.conditionEffect = function (effect) {
    var hit = /^\s*([+-]?\d{1,3})\s*(hp|mp)\s*$/i.exec(String(effect || ''));
    if (!hit) return null;
    return { pool: hit[2].toLowerCase(), amount: Number(hit[1]) };
  };

  /** Count down anything temporary. Returns the lines to show the reader. */
  RP.tickConditions = function (room) {
    var lines = [];
    Object.keys((room && room.states) || {}).forEach(function (id) {
      var sheet = room.states[id];
      if (!sheet || sheet.present === false) return;
      Object.keys(sheet.flags || {}).forEach(function (key) {
        var cond = sheet.flags[key];
        if (!cond || typeof cond !== 'object') return;
        // What it does, every turn it lasts — bleeding actually bleeds.
        var effect = RP.conditionEffect(cond.effect);
        if (effect && sheet[effect.pool]) {
          var line = RP.applyChange(sheet, {
            kind: effect.pool, op: effect.amount < 0 ? '-' : '+', value: Math.abs(effect.amount),
          });
          if (line) lines.push(line + ' — ' + key.replace(/_/g, ' '));
        }
        if (!cond.turns) return;
        cond.turns -= 1;
        if (cond.turns <= 0) {
          delete sheet.flags[key];
          lines.push(sheet.name + ' is no longer ' + key.replace(/_/g, ' '));
        }
      });
    });
    return lines;
  };

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
    // "bleeding 3 -2hp | a deep cut" is one condition with a bite, not
    // three words — split on newlines and semicolons when notes are in
    // play, commas only for the quick "wounded, hunted" shorthand.
    var rawFlags = String(setup.flags || '');
    (/[\n;|]/.test(rawFlags) ? rawFlags.split(/[\n;]/) : rawFlags.split(',')).forEach(function (f) {
      var cond = RP.parseCondition(f);
      if (cond) sheet.flags[cond.key] = { note: cond.note, turns: cond.turns, effect: cond.effect };
    });
    // Split on semicolons when notes are in play, so "a key | bent, old"
    // stays one item rather than becoming two.
    var rawItems = String(setup.items || '');
    (/[;|]/.test(rawItems) ? rawItems.split(';') : rawItems.split(',')).forEach(function (i) {
      var item = RP.normItem(i);
      if (item.name) sheet.items.push(item);
    });
    // The profile decides the rest: how much they can carry, and the four
    // numbers the dice will listen to. Both are deterministic and free.
    sheet.slots = RP.packSizeFor(char);
    sheet.stats = RP.statsFor(char);
    return sheet;
  };

  /** Dress a fresh sheet from the filed profile: a character whose setup
   *  named no kit walks in carrying what somebody like them would carry
   *  (`room.kit = 'off'` turns the outfitting off for a whole room). */
  RP.outfit = function (room, char, sheet) {
    if (!sheet || (room && room.kit === 'off')) return sheet;
    if (!(sheet.items || []).length && !sheet.player) {
      sheet.items = RP.kitFor(char).slice(0, sheet.slots || 6);
    }
    return sheet;
  };

  /** Every character in the room has a sheet, including anyone the model
   *  has just walked into the scene. */
  RP.ensureSheets = function (room, preset, setups) {
    room.states = room.states || {};
    room.statePreset = room.statePreset || preset || 'rpg';
    (room.cast || []).forEach(function (c) {
      if (!room.states[c.id]) {
        var setup = (setups || {})[c.id];
        room.states[c.id] = RP.blankSheet(c, room.statePreset, setup);
        // A hand-written kit owns the sheet; a blank field means "dress them".
        if (!setup || !String(setup.items || '').trim()) RP.outfit(room, c, room.states[c.id]);
      }
    });
    return room.states;
  };

  RP.sheetFor = function (room, charId) {
    return ((room && room.states) || {})[charId] || null;
  };

  /* ---- the player's own sheet: a body that can be hurt, a pack the
   * model can see. Without this, "you" is the one person in the scene
   * who cannot bleed, carry or lose anything. ---- */

  RP.PLAYER_ID = '__you__';

  /** What the scene calls the reader: the persona's name when one is
   *  written, the account name otherwise, 'You' when nobody has said. */
  RP.playerNameFor = function (state) {
    var p = state && state.persona ? state.persona : null;
    return (p && p.name) || (state && state.user && state.user.name) || 'You';
  };

  /** The reader's sheet in this room, created on first need and seeded
   *  from the persona's kit. When the reader has starred a cast member
   *  (youPlay) that character's sheet already IS the player, so no
   *  second body is invented. */
  /** Whose sheet is “your pack”: the starred character’s when one is
   *  starred, the persona’s otherwise. */
  RP.playerSheetId = function (room) {
    return (room && room.youPlay && room.states && room.states[room.youPlay])
      ? room.youPlay : RP.PLAYER_ID;
  };

  RP.ensurePlayerSheet = function (state, room) {
    if (!room || room.mechanics === 'off') return null;
    room.states = room.states || {};
    if (room.youPlay && room.states[room.youPlay]) {
      // You starred somebody: THEIR sheet is your pack. The persona's
      // separate pack steps out of the statbar and the prompts, and
      // comes back if the star ever comes off.
      var star = room.states[room.youPlay];
      Object.keys(room.states).forEach(function (k) {
        if (k !== room.youPlay && room.states[k]) room.states[k].player = false;
      });
      star.player = true;
      star.slots = Math.max(Number(star.slots) || 0, 12);
      if (room.states[RP.PLAYER_ID]) room.states[RP.PLAYER_ID].present = false;
      return star;
    }
    var name = RP.playerNameFor(state);
    Object.keys(room.states).forEach(function (k) {
      if (k !== RP.PLAYER_ID && room.states[k]) room.states[k].player = false;
    });
    var sheet = room.states[RP.PLAYER_ID];
    if (!sheet) {
      sheet = RP.blankSheet({ id: RP.PLAYER_ID, name: name }, room.statePreset);
      room.states[RP.PLAYER_ID] = sheet;
    }
    // The persona's kit seeds the pack — each entry once, ever, per room.
    // An item written into the persona mid-scene still arrives; an item
    // dropped in play does not creep back next render.
    var persona = state && state.persona ? state.persona : {};
    sheet.seeded = sheet.seeded || [];
    (persona.items || []).forEach(function (i) {
      var item = RP.normItem(i);
      if (!item.name) return;
      var key = item.name.toLowerCase();
      if (sheet.seeded.indexOf(key) >= 0) return;
      sheet.seeded.push(key);
      var already = (sheet.items || []).some(function (have) {
        return RP.normItem(have).name.toLowerCase() === key;
      });
      if (!already) sheet.items.push(item);
    });
    sheet.player = true;
    sheet.present = true;                   // back in view if a star hid it
    sheet.name = name;
    sheet.slots = 12;                       // the reader always gets the full pack
    var statsKey = (persona.voice || '') + '|' + (persona.look || '') + '|' + (persona.notes || '');
    if (sheet.statsBy !== 'hand' && (!sheet.stats || sheet.statsFrom !== statsKey)) {
      // Read from the persona's own words, re-read when they change.
      // A hand-edited value (statsBy: 'hand') is never overwritten.
      sheet.stats = RP.statsFor({ id: RP.PLAYER_ID, name: name, description: [persona.voice, persona.look, persona.notes].filter(Boolean).join(' ') });
      sheet.statsFrom = statsKey;
    }
    return sheet;
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
      if (on) {
        sheet.flags[key] = {
          note: clip(change.note, 160), turns: Number(change.turns || 0) || 0,
          effect: clip(change.effect, 40),
        };
      } else {
        delete sheet.flags[key];
      }
      var span = on
        ? (sheet.flags[key].turns ? ' (' + sheet.flags[key].turns + ' turns' +
            (sheet.flags[key].effect ? ', ' + sheet.flags[key].effect + ' a turn' : '') + ')'
          : (sheet.flags[key].effect ? ' (' + sheet.flags[key].effect + ' a turn)' : ''))
        : '';
      return sheet.name + (on ? ' is now ' : ' is no longer ') + String(change.name).replace(/_/g, ' ') + span;
    }
    if (change.kind === 'counter') {
      var ckey = slug(change.name);
      if (!ckey || isNaN(n)) return '';
      var cur = Number(sheet.counters[ckey] || 0);
      sheet.counters[ckey] = change.op === '+' ? cur + n : change.op === '-' ? cur - n : n;
      return sheet.name + ' — ' + String(change.name).replace(/_/g, ' ') + ': ' + sheet.counters[ckey];
    }
    if (change.kind === 'item') {
      var item = RP.normItem({ name: change.name, note: change.note, icon: change.icon });
      if (!item.name) return '';
      sheet.items = (sheet.items || []).map(RP.normItem);
      var at = sheet.items.map(function (i) { return i.name.toLowerCase(); }).indexOf(item.name.toLowerCase());
      if (change.op === '-') {
        if (at < 0) return '';
        sheet.items.splice(at, 1);
        return sheet.name + ' loses ' + item.name;
      }
      if (at >= 0) {
        if (item.note) sheet.items[at].note = item.note;
        sheet.items[at].qty += 1;
        return sheet.name + ' now has ' + sheet.items[at].qty + ' × ' + item.name;
      }
      // A pack is its slots. A full one refuses, on the record — the model
      // reads the refusal like any other change line and plays it.
      if (sheet.slots && sheet.items.length >= sheet.slots) {
        return sheet.name + '\u2019s pack is full (' + sheet.slots + ' slots) — ' + item.name + ' has nowhere to go';
      }
      sheet.items.push(item);
      return sheet.name + ' picks up ' + item.name + (item.note ? ' (' + item.note + ')' : '');
    }
    if (change.kind === 'use') {
      sheet.items = (sheet.items || []).map(RP.normItem);
      var used = sheet.items.filter(function (i) {
        return i.name.toLowerCase().indexOf(String(change.name).toLowerCase()) >= 0;
      })[0];
      if (!used) return '';
      used.qty -= 1;
      var gone = used.qty <= 0;
      if (gone) sheet.items = sheet.items.filter(function (i) { return i !== used; });
      return sheet.name + ' uses ' + used.icon + ' ' + used.name + (gone ? ' — that was the last of it' : '');
    }
    if (change.kind === 'equip') {
      sheet.items = (sheet.items || []).map(RP.normItem);
      var held = sheet.items.filter(function (i) {
        return i.name.toLowerCase().indexOf(String(change.name).toLowerCase()) >= 0;
      })[0];
      if (!held) return '';
      held.equipped = change.op !== '-';
      return sheet.name + (held.equipped ? ' takes up ' : ' puts away ') + held.name;
    }
    if (change.kind === 'status') {
      sheet.status = clip(change.value, 120);
      return sheet.name + ' — ' + sheet.status;
    }
    return '';
  };

  /** The sheets, as the model sees them. */
  /** The sheets as the model sees them. With a `focus` id, only the
   *  acting character and the player ride in full — everyone else is a
   *  short line (wounds, conditions, counters), and the untouched are
   *  folded into one roll call. Six full kits in every prompt is how a
   *  local model spends its whole day prefilling. */
  RP.stateBlock = function (room, focus) {
    var sheets = Object.keys((room && room.states) || {}).map(function (k) { return { id: k, s: room.states[k] }; })
      .filter(function (e) { return e.s && e.s.present !== false; });
    if (!sheets.length) return '';
    var hasPlayer = false;
    var active = [];    // conditions in play right now — surfaced, not buried
    var quiet = [];     // present, unhurt, nothing in play — one roll call
    var body = sheets.map(function (e) {
      var s = e.s;
      if (s.player) hasPlayer = true;
      var full = !focus || s.player || e.id === focus;
      var bits = [];
      var hurt = s.hp && s.hp.value < s.hp.max;
      var spent = s.mp && s.mp.value < s.mp.max;
      if (s.hp && (full || hurt)) bits.push('HP ' + s.hp.value + '/' + s.hp.max + (s.hp.value === 0 ? ' (down)' : s.hp.value <= s.hp.max * 0.3 ? ' (badly hurt)' : ''));
      if (s.mp && (full || spent)) bits.push('MP ' + s.mp.value + '/' + s.mp.max);
      if (full && s.stats) bits.push(RP.statLine(s.stats));
      Object.keys(s.flags || {}).forEach(function (f) {
        var cond = s.flags[f] && typeof s.flags[f] === 'object' ? s.flags[f] : { note: '', turns: 0 };
        var word = f.replace(/_/g, ' ');
        bits.push(RP.condIcon(f) + ' ' + word +
          (cond.note ? ' (' + cond.note + ')' : '') +
          (cond.turns ? ' [' + cond.turns + ' turns left]' : '') +
          (cond.effect ? ' [' + cond.effect + ' a turn]' : ''));
        active.push(s.name + ' is ' + word +
          (cond.effect ? ', losing ' + cond.effect.replace(/^[+-]/, '') + ' every turn it lasts' : '') +
          (cond.note ? ' — ' + cond.note : ''));
      });
      Object.keys(s.counters || {}).forEach(function (c) { bits.push(c.replace(/_/g, ' ') + ' ' + s.counters[c]); });
      var kit = (s.items || []).map(RP.normItem);
      var inHand = kit.filter(function (i) { return i.equipped; });
      if (inHand.length) {
        bits.push('holding ' + inHand.map(function (i) { return i.icon + ' ' + i.name; }).join(', '));
      }
      var stowed = kit.filter(function (i) { return !i.equipped; });
      if (full && stowed.length) {
        bits.push('carrying ' + stowed.map(function (i) {
          return i.icon + ' ' + i.name + (i.qty > 1 ? ' ×' + i.qty : '') + (i.note ? ' — ' + i.note : '');
        }).join('; '));
      }
      if (s.status) bits.push(s.status);
      if (!full && !bits.length) { quiet.push(s.name); return ''; }
      return '- ' + s.name + (s.player ? ' (THE PLAYER)' : '') + ': ' + (bits.join(' · ') || 'unharmed, nothing to declare');
    }).filter(Boolean).join('\n');
    if (quiet.length) {
      body += (body ? '\n' : '') + '- Untouched right now: ' + quiet.join(', ') +
        ' — their full sheets are on file and answer to directives by name.';
    }
    var out = 'CHARACTER STATE — this is true right now, play it. They may only use what is listed here, and a\n' +
      'condition with a cost beside it is taking that off them every turn it lasts. Reach for the kit only when\n' +
      'the moment calls for it — never inventory it in prose — and nothing joins a sheet that the scene did not\n' +
      'visibly put there. ⚔🧠🗣🍀 are might, wits, sway and luck, 0–3: they lean on the dice, so play the 0s\n' +
      'and the 3s, do not recite them.\n' + body;
    if (active.length) {
      out += '\nCONDITIONS IN PLAY — these are not flavour. Each one must shape what its bearer does this turn:\n' +
        active.slice(0, 8).map(function (l) { return '- ' + l; }).join('\n');
    }
    if (hasPlayer) {
      out += '\nThe sheet marked (THE PLAYER) is the reader\u2019s own body and pack. Wound it, cost it and hand it ' +
        'things with the same directions, using their name — but never decide what they do or say. When they name ' +
        'a thing that is on their sheet, that is the thing they mean: its note is true and its count is real.';
    }
    return out;
  };

  /* ---- what the latest words actually name ---- */

  var SMALL_WORDS = ' the this that with from your their there have when what where were will been they them and for you her his its our all one two of a an in on to is it ';

  function saidIn(text, name) {
    var words = String(name || '').toLowerCase().split(/[^a-z0-9]+/).filter(function (w) {
      return w.length >= 3 && SMALL_WORDS.indexOf(' ' + w + ' ') < 0;
    });
    if (!words.length) return false;
    return words.some(function (w) {
      return new RegExp('(^|[^a-z0-9])' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '($|[^a-z0-9])', 'i').test(text);
    });
  }

  /** When the player says "the key", the model is told which key, whose
   *  it is and what is filed against it — the sheets stop being a list it
   *  can forget the moment something on them is actually talked about. */
  RP.mentionBlock = function (room, text) {
    var said = String(text || '').toLowerCase();
    if (said.replace(/\s+/g, '').length < 3) return '';
    var hits = [];
    Object.keys((room && room.states) || {}).forEach(function (id) {
      var s = room.states[id];
      if (!s || s.present === false) return;
      var who = s.player ? s.name + ' (the player)' : s.name;
      (s.items || []).map(RP.normItem).forEach(function (i) {
        if (!saidIn(said, i.name)) return;
        hits.push('- ' + i.icon + ' ' + i.name + ' — ' + who + '\u2019s, ' + (i.equipped ? 'in hand' : 'stowed') +
          (i.qty > 1 ? ', ×' + i.qty : '') + (i.note ? ' · ' + i.note : ''));
      });
      Object.keys(s.flags || {}).forEach(function (f) {
        var word = f.replace(/_/g, ' ');
        if (!saidIn(said, word)) return;
        var cond = s.flags[f] && typeof s.flags[f] === 'object' ? s.flags[f] : { note: '', turns: 0 };
        hits.push('- ' + RP.condIcon(f) + ' ' + word + ' — on ' + who +
          (cond.turns ? ', ' + cond.turns + ' turns left' : '') +
          (cond.effect ? ', ' + cond.effect + ' a turn' : '') + (cond.note ? ' · ' + cond.note : ''));
      });
    });
    if (!hits.length) return '';
    return 'NAMED JUST NOW — the latest turn speaks of things that are really on the sheets\n' +
      hits.slice(0, 6).join('\n') +
      '\nTreat them exactly as filed: the note is true, the count is real, and nothing not listed exists to be used.';
  };

  /* ---- the thin-air check: you cannot just pull out a bazooka ----
   * A local scan of the player's own words, no model call. Claiming a
   * thing that IS on the sheet takes it in hand; claiming a thing that
   * is not fires once — the dice turn against the bluff and the model
   * gets a one-off block telling it to play the empty hand. */

  // Strong verbs claim ownership on their own; weak verbs only with "my".
  var DRAW_RE = /\b(pull(?:s|ed)? (?:out|free)|draw(?:s)?|unsheathe(?:s)?|unholster(?:s)?|whip(?:s)? out|produce(?:s)?|brandish(?:es)?|wield(?:s)?|pull(?:s)? from my (?:pack|bag|belt|coat|pocket))\s+(?:my|the|a|an|his|her|their)?\s*([a-z0-9'\u2019\- ]{2,40}?)(?=[.,!?;:]|$|\s+(?:and|at|on|to|into|from|with|before|across)\b)/i;
  var USE_RE = /\b(use(?:s)?|grab(?:s)?|take(?:s)? out|raise(?:s)?|aim(?:s)?|fire(?:s)?|shoot(?:s)?|swing(?:s)?|throw(?:s)?|ready|readies|level(?:s)?)\s+my\s+([a-z0-9'\u2019\- ]{2,40}?)(?=[.,!?;:]|$|\s+(?:and|at|on|to|into|from|with|before|across)\b)/i;
  // Things nobody carries: reaching for these is scenery, not a claim.
  var NOT_KIT = /\b(door|doors|window|curtain|lever|handle|rail|railing|stairs|chair|table|desk|wall|gate|bell|rope bridge|breath|voice|eyes?|hands?|arms?|fists?|feet|foot|shoulder|weight|nerve|courage|thoughts?|memory|words?|chance|moment|attention)\b/i;

  /** What the player just claimed to hold. Returns null (no claim),
   *  { kind: 'have', sheet, item } (it is on their sheet — take it in
   *  hand), or { kind: 'conjured', claim } (it came out of thin air). */
  RP.conjureCheck = function (room, text) {
    var you = (room && room.states && room.states[RP.PLAYER_ID]) ||
      (room && room.youPlay && room.states ? room.states[room.youPlay] : null);
    if (!you) return null;
    var hit = DRAW_RE.exec(String(text || '')) || USE_RE.exec(String(text || ''));
    if (!hit) return null;
    var claim = hit[2].trim().replace(/^(own|trusty|old|good|new|little|big)\s+/i, '');
    if (claim.length < 3 || NOT_KIT.test(claim)) return null;
    var kit = (you.items || []).map(RP.normItem);
    var claimLow = ' ' + claim.toLowerCase() + ' ';
    var owned = kit.filter(function (i) {
      var name = i.name.toLowerCase();
      if (claimLow.indexOf(' ' + name + ' ') >= 0 || name.indexOf(claim.toLowerCase()) >= 0) return true;
      // Any solid word shared between the claim and the item name counts:
      // "the brass key" finds "a brass key | bent".
      return name.split(/[^a-z0-9]+/).some(function (w) {
        return w.length >= 3 && SMALL_WORDS.indexOf(' ' + w + ' ') < 0 && claimLow.indexOf(' ' + w + ' ') >= 0;
      });
    })[0];
    if (owned) return { kind: 'have', sheet: you, item: owned, claim: claim };
    return { kind: 'conjured', claim: clip(claim, 40) };
  };

  /** The one-off block a conjured claim earns. Costs nothing until it fires. */
  RP.conjureBlock = function (claim) {
    if (!claim) return '';
    return 'OUT OF THIN AIR — the player claims \u201c' + claim + '\u201d; nothing like it is on their sheet.\n' +
      'They do not have it. If the scene has visibly put one within their reach, hand it to them on the record\n' +
      'with [[ITEM: \u2026]] and let it work. Otherwise the claim fails inside the fiction — an empty hand, a bluff\n' +
      'called, a reach for something that is not there. Play it, do not scold it.';
  };

  /* ---- the quartermaster: upkeep, so the sheets are never static ----
   * The model already writes to the sheets in the turn itself, with stage
   * directions. But a small model forgets: the prose presses a lantern
   * into your hands and no [[ITEM:]] lands. Two nets, both cheap.
   *   1. A deterministic scan of every reply for things plainly handed
   *      to the player — no model call, applied on the spot.
   *   2. Every few played turns, ONE small background call (the same
   *      utility slot and session budget as the lore book) reads the
   *      recent prose against the sheets and files what the record
   *      missed. It may only keep the ledger — never invent events. */

  RP.UPKEEP_EVERY = 6;              // played turns between reviews; 0 turns it off
  RP.UPKEEP_KINDS = ['hp', 'mp', 'flag', 'item', 'use', 'equip', 'status', 'counter'];

  /** "presses the lantern into your hands", "hands you a brass key" —
   *  a grant the reply narrated at the player. Deliberately narrow: an
   *  offer, a look or a mention is not a grant. Returns up to two names. */
  RP.grantScan = function (text) {
    var t = String(text || '');
    var out = [], m;
    var handsYou = /\b(?:hands?|gives?|passes|tosses|throws)\s+you\s+(?:the|a|an|his|her|their|its)\s+([a-z0-9'\u2019\- ]{2,40}?)(?=[.,!?;:]|$|\s+(?:and|to|so|as|before|across|with|without)\b)/gi;
    var intoYour = /\b(?:presses|pushes|slips|drops|places|shoves)\s+(?:the|a|an|his|her|their|its)\s+([a-z0-9'\u2019\- ]{2,40}?)\s+into\s+your\s+(?:hands?|palms?|pockets?|pack|arms|lap)\b/gi;
    while ((m = handsYou.exec(t))) out.push(m[1].trim());
    while ((m = intoYour.exec(t))) out.push(m[1].trim());
    return out.filter(function (name) {
      return name.length >= 3 && !NOT_KIT.test(name);
    }).slice(0, 2);
  };

  /** Is it time for the background review? Counted in played turns since
   *  the last one, like the recap and the book. */
  RP.needsUpkeep = function (room, every) {
    every = every === undefined ? RP.UPKEEP_EVERY : Number(every);
    if (!every || !room || room.mechanics === 'off') return false;
    var turns = (room.messages || []).filter(RP.visible).length;
    return turns - Number(room.upkeepAt || 0) >= every;
  };

  /** The reviewer's prompt: sheets on one side, prose on the other, and
   *  the only legal output is ledger lines. */
  RP.upkeepPrompt = function (room, turns) {
    return [
      'You are the quartermaster of a roleplay scene. Compare the sheets against the recent turns and file ONLY',
      'what the prose established but the record missed: a thing gained, lost, handed over or spent; a hurt that',
      'landed; a condition that began or ended; something taken in hand or put away.',
      '',
      'THE SHEETS NOW',
      RP.stateBlock(room),
      '',
      'THE RECENT TURNS',
      (turns || []).map(function (t) { return t.who + ': ' + clip(t.text, 280); }).join('\n'),
      '',
      'Reply with stage directions only, one per line, six at most:',
      '  [[ITEM: Name + 🗝 the thing | note]] · [[ITEM: Name - the thing]] · [[USE: Name the thing]]',
      '  [[EQUIP: Name the thing]] · [[STOW: Name the thing]] · [[HP: Name -5]]',
      '  [[COND: Name state 3 -1hp | why]] · [[CURE: Name state]] · [[STATUS: Name a short note]]',
      'Do not restate anything the sheets already have right. Do not invent anything the turns do not plainly',
      'show. If the record already matches the story, reply exactly: IN ORDER',
    ].join('\n');
  };

  /** Apply a review. Only ledger directives are honoured — the upkeep may
   *  not walk people in or out, rewrite facts, or colour words. */
  RP.applyUpkeep = function (state, room, reply) {
    var text = String(reply || '').trim();
    if (!text || /^IN ORDER\b/i.test(text)) return { lines: [] };
    var you = (room.states || {})[RP.PLAYER_ID];
    var names = (room.cast || []).map(function (c) { return c.name; })
      .concat(you ? [you.name, 'the player'] : []);
    var directives = RP.parseDirectives(text, names).directives.filter(function (d) {
      return RP.UPKEEP_KINDS.indexOf(d.kind) >= 0;
    }).slice(0, 6);
    if (!directives.length) return { lines: [] };
    return { lines: RP.applyDirectives(state, room, directives).lines };
  };

  /** One background call spent, whoever spent it — the book and the
   *  quartermaster share the same session budget. */
  RP.spendBudget = function (state) {
    state.book = state.book || { entries: [], queue: [], spent: 0 };
    state.book.spent = (state.book.spent || 0) + 1;
  };

  /* ---- the doorman: arrivals and departures the prose forgot to file ----
     The model is told to use [[ENTER]] / [[NEW]] / [[EXIT]], but a small
     model will happily write "Brad pushes through the door" and move on —
     leaving Brad a ghost with no sheet whose lines get misfiled. These
     scans are deterministic, cost nothing, and are deliberately narrow:
     a never-seen name must ARRIVE on a strong verb or SPEAK an actual
     quoted line; a departure must be unambiguous ("leaves the knife on
     the table" is not leaving). */

  // Words that look like names at a sentence start but never are.
  var NOT_NAME = new RegExp('^(?:' + [
    'The', 'A', 'An', 'He', 'She', 'It', 'They', 'We', 'You', 'I',
    'Then', 'Now', 'But', 'And', 'So', 'Or', 'Yet', 'Still', 'Even', 'Just',
    'Meanwhile', 'Later', 'Suddenly', 'Finally', 'Eventually', 'Once',
    'Inside', 'Outside', 'Behind', 'Beyond', 'Above', 'Below', 'Between',
    'Across', 'Somewhere', 'Someone', 'Somebody', 'Nobody', 'Everyone',
    'Everybody', 'Nothing', 'Something', 'Anyone', 'Whoever',
    'Who', 'What', 'When', 'Where', 'Why', 'How',
    'Yes', 'No', 'Wait', 'Stop', 'Look', 'Listen', 'Okay', 'Oh', 'Ah', 'Hey', 'Well',
    'Narration', 'Narrator', 'World', 'Mike',   // rule zero: mike is a GM, never a character
  ].join('|') + ')\\b', 'i');

  var NAME_WORD = "[A-Z][a-zA-Z'\u2019-]+";
  var ARRIVE_RE = new RegExp(
    '\\b(' + NAME_WORD + '(?:\\s+' + NAME_WORD + ')?)\\s+' +
    '(?:enters|arrives|walks in\\b|steps in(?:side)?\\b|strides in\\b|bursts in\\b|' +
    'slips in(?:side)?\\b|storms in\\b|saunters in\\b|shuffles in\\b|' +
    'appears in the doorway|pushes through the door|' +
    '(?:walks|steps|strides|slips) into the (?:room|hall|bar|tavern|shop|camp|clearing|light|doorway)|' +
    'joins (?:you|the|them))', 'g');
  var SCRIPT_RE = new RegExp(
    '(?:^|\\n)\\s*(?:\\*\\*)?(' + NAME_WORD + '(?:\\s+' + NAME_WORD + ')?)(?:\\*\\*)?\\s*:\\s*["\u201c*A-Za-z]', 'g');
  var SPEAKS_RE = new RegExp(
    '\\b(' + NAME_WORD + '(?:\\s+' + NAME_WORD + ')?)\\s+' +
    '(?:says|asks|replies|answers|calls out|mutters|rasps|drawls|growls|shouts|whispers|cuts in|interrupts)\\s*,?\\s*["\u201c]', 'g');

  /** A brand-new name the prose brought on stage without filing it.
   *  `known` is every name already accounted for (cast, player, away).
   *  Returns one name, or ''. */
  RP.arrivalScan = function (text, known) {
    var have = (known || []).map(function (s) { return String(s).toLowerCase(); });
    var seen = function (name) {
      var low = name.toLowerCase();
      return have.some(function (k) {
        return k && (k.indexOf(low) >= 0 || low.indexOf(k) >= 0);
      });
    };
    var ok = function (name) {
      if (!name || name.length < 3 || NOT_NAME.test(name)) return false;
      return !seen(name);
    };
    var m; var res = '';
    ARRIVE_RE.lastIndex = 0;
    while ((m = ARRIVE_RE.exec(String(text || ''))) !== null) {
      if (ok(m[1])) { res = m[1]; break; }        // an arrival verb wins outright
    }
    if (!res) {
      var talkers = [SCRIPT_RE, SPEAKS_RE];
      for (var i = 0; i < talkers.length && !res; i++) {
        talkers[i].lastIndex = 0;
        while ((m = talkers[i].exec(String(text || ''))) !== null) {
          if (ok(m[1])) { res = m[1]; break; }    // a spoken line means they are here
        }
      }
    }
    return res;
  };

  /** Somebody present walked out in prose. `names` is who may leave
   *  (never the player). Returns one name, or ''. */
  RP.departureScan = function (text, names) {
    var body = String(text || '');
    var esc = function (s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); };
    for (var i = 0; i < (names || []).length; i++) {
      var name = String(names[i] || '');
      if (!name) continue;
      var re = new RegExp(esc(name) + "(?!['\u2019]s)[^.!?\\n]{0,40}?\\b(?:" +
        'walks out|storms (?:out|off)|slips (?:out|away)|hurries (?:out|off)|' +
        'marches out|steps out(?:side)?|is gone\\b|exits\\b|departs\\b|flees\\b|' +
        'vanishes\\b|disappears\\b|walks away|turns and leaves|' +
        'leaves(?=\\s*[.!?,;:]|\\s+the\\s+(?:room|scene|hall|building|bar|tavern|camp|clearing|shop|house|inn|chamber)\\b|\\s+without\\b|\\s+for\\s+the\\b)' +
        ')', 'i');
      if (re.test(body)) return name;
    }
    return '';
  };

  /* ---- stage directions: how the model changes the world ---- */

  RP.DIRECTIVES = [
    'STAGE DIRECTIONS — you may change the scene, not just describe it',
    'Put any of these on their own line, after your prose. They are stripped out before the reader sees them,',
    'and the page applies them to the actual record. Use them when the fiction earns them — never more than four',
    'in one turn, and never for something that did not happen in the turn you just wrote.',
    '  [[HP: Name -12]]                 damage, healing (+), or an exact value (= 30)',
    '  [[MP: Name -5]]                  spent or recovered power',
    '  [[COND: Name bleeding 3 -2hp | a deep cut across the palm]]  a condition: how many turns it lasts (leave',
    '      the number off if it does not pass on its own), what it costs each turn (-2hp, -1mp — optional), and',
    '      what it actually is. [[CURE: Name bleeding]] ends it.',
    '  [[COUNT: Name arrows -1]]        any counter you need',
    '  [[ITEM: Name + 🗝 the brass key | bent, from the ledger room]]  gained, with an emoji and a note.',
    '      [[ITEM: Name - the brass key]] lost · [[EQUIP: Name brass key]] in hand · [[STOW: Name brass key]] away',
    '  [[USE: Name the brass key]]      spend or use one. Only ever use something that is on their sheet.',
    '  [[STATUS: Name bleeding, one arm]]  a short physical note',
    '  [[TINT: the exact words = colour]]   those words render in that colour in every turn from now on — for',
    '      things with lasting weight (a cursed blade, a sickness, a name). Several at once: [[TINT: the seal,',
    '      the wax = violet]]. [[UNTINT: the seal]] releases them. When something in the scene takes on lasting',
    '      significance, tint it — one colour makes it legible at a glance. Colours: red, blood, crimson, ember,',
    '      orange, amber, gold, copper, rust, sand, bone, moss, green, jade, venom, teal, sea, ice, blue, storm,',
    '      silver, grey, violet, lilac, purple, plum, pink, black, white.',
    '  [[LOOKUP: what you want to know]]  search the archive mid-turn. The page finds the passage and hands it',
    '      back, then you write the turn again using it. Use it when you need a fact you do not have — a date, a',
    '      name, what a filing actually says — instead of inventing one. Never LOOKUP the scene you are standing',
    '      in: the sheets, the scene and the record above already answer that.',
    '  [[REMEMBER: name | the fact]]     file something into the lore book so it is to hand in every later scene.',
    '  [[ENTER: Name — why they arrive]]   bring someone into the scene when the story calls for them',
    '  [[NEW: Name | what they are here for | what they look like]]  invent someone the archive has never filed.',
    '      Nobody has drawn them, so the description is the portrait: face, build, clothing, one memorable detail.',
    '  [[EXIT: Name — why they leave]]     write someone out when they leave, fall, or flee',
    'Only use ENTER for people the archive knows, or a clearly named newcomer. Never ENTER or EXIT the player.',
    'The player\u2019s sheet answers to their name like anyone else\u2019s: [[HP: their name -4]], [[ITEM: their name',
    '+ 🪙 a cut purse]], [[COND: their name poisoned 4 -1hp | pale wine]] are all fair — deciding their words is not.',
  ].join('\n');

  var DIRECTIVE_RE = /\[\[\s*(HP|MP|FLAG|COND|CURE|COUNT|ITEM|USE|EQUIP|STOW|STATUS|TINT|UNTINT|ENTER|EXIT|NEW|SET|TIME|LOOKUP|REMEMBER)\s*:\s*([^\]]+?)\s*\]\]/gi;
  // Anything else in double brackets is a directive the model invented. It
  // gets stripped rather than printed at the reader: "[[TIME: 23:00]]" in
  // the middle of the prose is a bug, not a feature.
  var STRAY_RE = /\[\[[^\]]*\]\]/g;

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
      if (type === 'LOOKUP') {
        out.push({ kind: 'lookup', body: body, query: clip(body, 120) });
        continue;
      }
      if (type === 'REMEMBER') {
        var split = body.split('|');
        out.push({
          kind: 'remember', body: body,
          name: clip(split[0], 80), value: clip(split.slice(1).join('|') || split[0], 400),
        });
        continue;
      }
      if (type === 'TIME') {
        out.push({ kind: 'time', body: body, value: clip(body, 60) });
        continue;
      }
      if (type === 'TINT' || type === 'UNTINT') {
        // [[TINT: the seal, the wax = violet]] — words the model wants
        // coloured in every turn from here on. UNTINT releases them.
        // Models also write 'the seal: violet' and 'glowing violet';
        // both used to file NOTHING, silently — the reason tints were
        // never seen in play.
        var eq = body.split(/\s*=\s*/);
        if (eq.length < 2 && type === 'TINT') eq = body.split(/\s*:\s*(?=[^:]*$)/);
        var words = String(type === 'UNTINT' ? body : eq[0]).split(',')
          .map(function (w) { return clip(w.trim(), 40); }).filter(Boolean).slice(0, 6);
        var colour = type === 'UNTINT' ? '' : RP.colourLoose(eq.slice(1).join('=').trim());
        if (words.length && (type === 'UNTINT' || colour)) {
          out.push({ kind: 'tint', body: body, names: words, colour: colour });
        }
        continue;
      }
      if (type === 'SET') {
        // [[SET: place = the stone patio of the outpost]] — a fact about the
        // scene that may not drift afterwards.
        var pair = /^([a-z][a-z ]{1,24}?)\s*[=:]\s*(.+)$/i.exec(body);
        if (pair) out.push({ kind: 'set', body: body, name: clip(pair[1], 24), value: clip(pair[2], 180) });
        continue;
      }
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
        // [[ITEM: Name + 🗝 the brass key | bent, from the ledger room]]
        var item = /^([+\-])\s*(.+)$/.exec(rest);
        if (item) {
          var carried = RP.normItem(item[2]);
          out.push({
            kind: 'item', body: body, who: target.name, op: item[1],
            name: carried.name, note: carried.note, icon: carried.icon,
          });
        }
        continue;
      }
      if (type === 'USE') {
        out.push({ kind: 'use', body: body, who: target.name, name: clip(rest, 60) });
        continue;
      }
      if (type === 'FLAG' || type === 'COND') {
        // [[COND: Name bleeding 3 | a deep cut across the palm]]
        // "bleeding 3 -2hp | a deep cut" — the cost comes off first, then
        // the number of turns, and what is left is the condition itself.
        var parts = rest.split('|');
        var head = parts[0].trim();
        var effect = /\s([+-]\d{1,3}(?:hp|mp))\s*$/i.exec(head);
        if (effect) head = head.slice(0, effect.index).trim();
        var turns = /\s(\d{1,2})\s*$/.exec(head);
        if (turns) head = head.slice(0, turns.index).trim();
        var flag = /^([a-z0-9_ '-]+?)(?:\s*=\s*(\S+))?\s*$/i.exec(head);
        if (flag) {
          out.push({
            kind: 'flag', body: body, who: target.name, name: clip(flag[1], 40),
            value: flag[2] === undefined ? true : flag[2],
            note: clip(parts.slice(1).join('|'), 160),
            turns: turns ? Number(turns[1]) : 0,
            effect: effect ? effect[1].toLowerCase() : '',
          });
        }
        continue;
      }
      if (type === 'CURE') {
        out.push({ kind: 'flag', body: body, who: target.name, name: clip(rest, 40), value: false });
        continue;
      }
      if (type === 'EQUIP' || type === 'STOW') {
        out.push({ kind: 'equip', body: body, who: target.name, name: clip(rest, 60), op: type === 'STOW' ? '-' : '+' });
        continue;
      }
    }
    var clean = String(text || '').replace(DIRECTIVE_RE, '').replace(STRAY_RE, '')
      .replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').replace(/[ \t]{2,}/g, ' ').trim();
    return { clean: clean, directives: out };
  };

  /** Apply the stage directions to the room. `resolve(name)` finds a
   *  character in the wider archive so the model can walk somebody in. */
  RP.applyDirectives = function (state, room, directives, resolve) {
    RP.ensureSheets(room);
    var lines = [], entered = [], exited = [];
    var you = (room.states || {})[RP.PLAYER_ID];
    function find(name) {
      var want = String(name || '').toLowerCase().trim();
      // The player's sheet answers to their name, "you" and "the player" —
      // but only exactly: fuzzy matching a name like "You" is how a turn
      // about "the young man" wounds the reader by accident.
      if (you && (want === 'you' || want === 'the player' || want === 'player' ||
          want === String(you.name || '').toLowerCase())) {
        return { id: RP.PLAYER_ID, name: you.name, player: true };
      }
      return (room.cast || []).filter(function (c) {
        return c.name.toLowerCase() === want || c.name.toLowerCase().indexOf(want) >= 0 || want.indexOf(c.name.toLowerCase()) >= 0;
      })[0];
    }
    var names = (room.cast || []).map(function (c) { return c.name; })
      .concat(you ? [you.name, 'the player'] : []);
    (directives || []).forEach(function (d) {
      if (d.kind === 'lookup') return;       // the page answers this one
      if (d.kind === 'remember') {
        RP.bookAdd(state, {
          kind: 'fact', name: d.name, text: d.value,
          when: room.date || '', roomId: room.id, roomTitle: room.title,
          chars: (room.cast || []).map(function (c) { return c.id; }),
        });
        lines.push('filed: ' + clip(d.name, 60));
        return;
      }
      if (d.kind === 'time') {
        room.clock = d.value;
        lines.push('the time is ' + d.value);
        return;
      }
      if (d.kind === 'set') {
        room.facts = room.facts || {};
        var key = slug(d.name);
        var was = room.facts[key];
        room.facts[key] = d.value;
        lines.push((was ? d.name + ' is now ' : d.name + ': ') + d.value);
        return;
      }
      if (d.kind === 'tint') {
        // Standing colour: filed on the room, applied at the reader, so a
        // tinted phrase costs the prompt nothing after this line.
        room.tints = room.tints || [];
        (d.names || []).forEach(function (text) {
          var low = text.toLowerCase();
          room.tints = room.tints.filter(function (t) { return String(t.text).toLowerCase() !== low; });
          if (d.colour) room.tints.push({ text: text, colour: d.colour });
        });
        room.tints = room.tints.slice(-24);
        lines.push('🎨 ' + (d.names || []).join(', ') +
          (d.colour ? ' — written in colour from here on' : ' — plain again'));
        return;
      }
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
        room.away = (room.away || []).filter(function (c) { return c.id !== made.id; });
        if (room.states[made.id]) room.states[made.id].present = true;   // NEW for someone we remember is a return
        else room.states[made.id] = RP.outfit(room, made, RP.blankSheet(made, room.statePreset));
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
      // Re-read the raw body only when the name we have is not somebody in
      // the room — otherwise a CURE would come back as a FLAG being set.
      if (d.body && d.kind !== 'enter' && d.kind !== 'exit' && d.kind !== 'new' && !find(d.who || d.name)) {
        var re = RP.splitTarget(d.body, names);
        if (re.name && re.rest) {
          var kindWord = d.kind === 'counter' ? 'COUNT' : d.kind === 'equip' ? (d.op === '-' ? 'STOW' : 'EQUIP')
            : d.kind === 'flag' ? (d.value === false ? 'CURE' : 'COND') : d.kind.toUpperCase();
          var reparsed = RP.parseDirectives('[[' + kindWord + ': ' + d.body + ']]', names).directives[0];
          if (reparsed) d = reparsed;
        }
      }
      if (d.kind === 'enter') {
        if (find(d.name)) return;
        // Someone who left this room comes back as themselves — same id,
        // same sheet, still carrying whatever they walked out with.
        var lowName = String(d.name).toLowerCase();
        var backIdx = (room.away || []).findIndex(function (c) {
          var k = String(c.name || '').toLowerCase();
          return k && (k.indexOf(lowName) >= 0 || lowName.indexOf(k) >= 0);
        });
        var back = backIdx >= 0 ? room.away.splice(backIdx, 1)[0] : null;
        var found = back || (resolve && resolve(d.name)) || RP.normChar({ name: d.name, title: 'Walked into the scene', summary: d.reason });
        room.cast.push(RP.normChar(found));
        var kept = room.states[found.id];
        if (kept) kept.present = true;
        else room.states[found.id] = RP.outfit(room, found, RP.blankSheet(found, room.statePreset));
        entered.push(found);
        lines.push(found.name + (kept ? ' returns — ' : ' enters — ') + (d.reason || 'the scene called for them'));
        RP.logEvent(state, {
          kind: 'roster', roomId: room.id, roomTitle: room.title, chars: [found.id],
          text: found.name + ' entered the scene: ' + (d.reason || 'no reason filed'),
        });
        return;
      }
      if (d.kind === 'exit') {
        var who = find(d.name);
        if (!who || who.id === RP.PLAYER_ID || room.cast.length <= 1) return;
        room.cast = room.cast.filter(function (c) { return c.id !== who.id; });
        if (room.states[who.id]) room.states[who.id].present = false;
        // Remembered at the door: if they walk back in, ENTER finds them
        // here and hands back the same sheet instead of a fresh one.
        room.away = (room.away || []).filter(function (c) { return c.id !== who.id; });
        room.away.push(who);
        room.away = room.away.slice(-24);
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








  /** A card's greeting, as the scene's opening message. */
  RP.cardGreeting = function (char, which) {
    var card = (char && char.card) || {};
    var all = [card.first_mes].concat(card.alternate_greetings || []).filter(Boolean);
    if (!all.length) return '';
    var at = Math.max(0, Math.min(all.length - 1, which || 0));
    return clip(all[at], 1400);
  };

  /** Fold imported turns into a chat that is already running. The turns are
   *  appended, not replaced: an import is the story so far, and play carries
   *  on from the bottom of it. */
  RP.appendTranscript = function (room, turns, opts) {
    opts = opts || {};
    var added = 0;
    (turns || []).forEach(function (t) {
      var who = (room.cast || []).filter(function (c) {
        var name = c.name.toLowerCase(), said = String(t.who || '').toLowerCase();
        return said && (name === said || name.indexOf(said) >= 0 || said.indexOf(name) >= 0);
      })[0];
      var at = Date.now() - ((turns.length - added) * 1000);
      if (!who) {
        room.messages.push({ id: uid(), role: 'user', text: t.text, at: at, imported: true });
      } else {
        room.messages.push({
          id: uid(), role: 'char', charId: who.id, text: t.text, at: at,
          alts: [t.text], alt: 0, imported: true,
        });
      }
      added++;
    });
    if (added) {
      room.updated = Date.now();
      if (opts.divider) {
        // A note in the stream so the seam between imported and played is
        // visible later, when nobody remembers which was which.
        room.messages.splice(room.messages.length - added, 0, {
          id: uid(), role: 'scene', at: Date.now(), imported: true,
          text: '— ' + added + ' imported turn' + (added === 1 ? '' : 's') +
            (opts.source ? ' from ' + clip(opts.source, 60) : '') + ' —',
        });
      }
    }
    return added;
  };

  /** Bring a character into a room that is already running. */
  RP.addToRoom = function (room, char) {
    if (!char || (room.cast || []).some(function (c) { return c.id === char.id; })) return null;
    room.cast.push(RP.normChar(char));
    if (room.cast.length > 1) room.kind = 'group';
    RP.ensureSheets(room);
    room.updated = Date.now();
    return char;
  };

  /** How much work the lore book has not done yet on a chat — so the page
   *  can say "this is eleven calls" before it spends them. */
  RP.backlogFor = function (room, every) {
    var turns = (room.messages || []).filter(visible).length;
    var step = Math.max(2, Number(every || 3));
    var filed = Number(room.bookAt || 0);
    var pending = Math.max(0, turns - filed);
    return {
      turns: turns, filed: filed, pending: pending,
      calls: Math.floor(pending / step),
      step: step,
    };
  };

  /** The jobs that would catch a chat up, oldest stretch first. */
  RP.backlogJobs = function (room, every, limit) {
    var plan = RP.backlogFor(room, every);
    var turns = (room.messages || []).filter(visible);
    var jobs = [];
    for (var at = plan.filed; at + plan.step <= turns.length; at += plan.step) {
      if (jobs.length >= (limit || 20)) break;
      jobs.push({
        key: room.id + ':catchup:' + at,
        from: at, to: at + plan.step,
        turns: turns.slice(Math.max(0, at - 1), at + plan.step),
      });
    }
    return jobs;
  };

  /* ------------------------------------------------------------------ *
   * commentary mode — Waluigi and Luigi, at length
   *
   * Two voices arguing about the archive for anything from a quarter of
   * an hour to two hours. No local model writes 18,000 words in one call,
   * so a run is planned into segments and generated one call at a time,
   * each one handed the outline, what has already been said, and the
   * filed material it is allowed to use.
   * ------------------------------------------------------------------ */

  RP.WPM = 150;                    // spoken words per minute, for the clock

  RP.COMMENTARY_STYLES = {
    podcast: {
      name: 'Podcast', min: 15, max: 60, default: 25,
      blurb: 'Two hosts, one subject, digressions allowed.',
      dir: 'This is a podcast episode. Warm, unhurried, funny. They interrupt each other, chase a tangent for a ' +
        'minute and come back. Waluigi hosts; Luigi is the one who actually read the material and keeps saying so.',
      shape: ['cold open — the thing that made them record this', 'the background, argued over',
        'the first real disagreement', 'the material nobody quotes', 'the tangent',
        'the part Luigi finds upsetting', 'what it means for what happens next', 'sign-off'],
    },
    debate: {
      name: 'Debate', min: 15, max: 60, default: 20,
      blurb: 'Two positions, taken seriously, neither wins cleanly.',
      dir: 'This is a formal-ish debate. Waluigi takes the position that flatters the archive and himself; Luigi ' +
        'takes the humane one. Each answers the other\u2019s actual point rather than a weaker version of it. Concessions ' +
        'are allowed and cost something. Nobody wins outright.',
      shape: ['the motion, stated', 'Waluigi opens', 'Luigi answers', 'the evidence both sides want',
        'the strongest objection to Waluigi', 'the strongest objection to Luigi',
        'where they actually agree', 'closing statements'],
    },
    deepdive: {
      name: 'Deep dive', min: 30, max: 120, default: 45,
      blurb: 'Everything on the record, in order, for as long as it takes.',
      dir: 'This is a deep dive: chronological, exhaustive, footnoted out loud. Read the record closely — dates, ' +
        'names, numbers, who said what. Waluigi is the archivist and cannot resist the digression; Luigi is the one ' +
        'asking the obvious question everybody skipped. Slow down on the parts that matter.',
      shape: ['why this file, and why now', 'the earliest record', 'what the sources actually say',
        'the contradictions', 'the people, one at a time', 'the turning point, minute by minute',
        'the aftermath nobody filed', 'the open questions', 'what the archive should do about it',
        'closing thoughts'],
    },
    hottake: {
      name: 'Hot take', min: 15, max: 30, default: 15,
      blurb: 'Short, loud, and over before either of them calms down.',
      dir: 'This is a short, heated segment. Fast turns, few concessions, both of them talking past each other ' +
        'until one lands a point that sticks. Keep it moving.',
      shape: ['the take', 'the objection', 'the escalation', 'the fact that spoils it', 'the grudging landing'],
    },
  };

  /** Split a run into segments the model can actually write. */
  RP.commentaryPlan = function (opts) {
    opts = opts || {};
    var style = RP.COMMENTARY_STYLES[opts.style] ? opts.style : 'podcast';
    var def = RP.COMMENTARY_STYLES[style];
    var minutes = Math.max(def.min, Math.min(def.max, Number(opts.minutes || def.default)));
    var words = Math.round(minutes * RP.WPM);
    // 500–650 words a call keeps every local model inside its output window.
    var perSegment = 600;
    var count = Math.max(def.shape.length, Math.ceil(words / perSegment));
    count = Math.min(count, 40);
    var segments = [];
    for (var i = 0; i < count; i++) {
      segments.push({
        n: i + 1,
        focus: def.shape[Math.min(def.shape.length - 1, Math.floor((i / count) * def.shape.length))],
        words: Math.round(words / count),
        done: false, text: '',
      });
    }
    return {
      id: uid(), style: style, styleName: def.name, topic: clip(opts.topic, 200),
      minutes: minutes, words: words, segments: segments,
      sources: opts.sources || [], created: Date.now(),
    };
  };

  /** The filed material this episode is allowed to work from. */
  RP.commentarySources = function (index, topic, limit) {
    var terms = String(topic || '').toLowerCase().split(/[^a-z0-9]+/)
      .filter(function (t) { return t.length > 3; });
    if (!terms.length) return [];
    return (index || []).map(function (r) {
      var score = 0;
      terms.forEach(function (t) { if (r.words.indexOf(t) >= 0) score += 1; });
      if (String(r.name || '').toLowerCase().indexOf(String(topic).toLowerCase()) >= 0) score += 4;
      return { r: r, score: score };
    }).filter(function (x) { return x.score > 0; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, limit || 12)
      .map(function (x) {
        return {
          id: x.r.id, kind: x.r.kind, name: x.r.name,
          date: x.r.date ? RP.formatWahDate(x.r.date) : '',
          text: clip(x.r.text, 300),
        };
      });
  };

  var COMMENTARY_RULES = [
    'TWO SPEAKERS, AND ONLY TWO. Every line begins with WALUIGI: or LUIGI: and nothing else does.',
    'WALUIGI — the archive\u2019s author. Vain, precise, funny, allergic to being corrected and constantly being ' +
      'corrected. Cites filings, dates and numbers. Says WAH when genuinely rattled, and not otherwise.',
    'LUIGI — decent, anxious, better read than he lets on. Asks the obvious question nobody asked, worries about ' +
      'the people in the record rather than the record, and is right more often than Waluigi admits.',
    'They are commentating, not roleplaying a scene: no stage directions, no asterisks, no narration.',
    'Never invent a filing, a date, a quotation or a number. If the material does not say, say that it does not say.',
    'Do not summarise what you are about to say, and do not recap what you already said. Keep moving.',
    'No table talk, no players, no dice, no mention of an archive website or of being a model.',
  ].join('\n');

  /** One segment's prompt: the outline, the material, and what came before. */
  RP.commentaryPrompt = function (plan, segment, ctx) {
    ctx = ctx || {};
    var def = RP.COMMENTARY_STYLES[plan.style];
    return [
      'You are writing part ' + segment.n + ' of ' + plan.segments.length + ' of a spoken commentary track for the ' +
        'Waluipedia archive.',
      '',
      'THE SUBJECT',
      plan.topic,
      '',
      'THE FORMAT — ' + def.name,
      def.dir,
      'The whole episode runs about ' + plan.minutes + ' minutes. THIS PART is “' + segment.focus + '” and should be ' +
        'about ' + segment.words + ' words — do not write the rest of the episode.',
      '',
      'THE RULES',
      COMMENTARY_RULES,
      plan.sources.length ? '\nTHE FILED MATERIAL — this is what you know; quote it, date it, argue about it\n' +
        plan.sources.map(function (s) {
          return '- [' + s.kind + ':' + s.id + '] ' + s.name + (s.date ? ' (' + s.date + ')' : '') + ' — ' + s.text;
        }).join('\n') : '',
      ctx.previous ? '\nTHE LAST THING SAID (continue straight on from it, do not repeat it)\n' + clip(ctx.previous, 700) : '',
      ctx.covered && ctx.covered.length ? '\nALREADY COVERED (do not go over these again)\n- ' + ctx.covered.join('\n- ') : '',
      segment.n === 1 ? '\nOpen cold, mid-thought, as though the recording started late.' : '',
      segment.n === plan.segments.length ? '\nThis is the last part: land it. No summary of the episode — a last ' +
        'exchange that leaves the subject where it actually stands.' : '',
      '',
      'Write only the dialogue, beginning with a speaker label.',
    ].filter(Boolean).join('\n');
  };

  /** Read a segment back into lines. Anything not attributed to one of the
   *  two is folded into the previous speaker rather than dropped. */
  RP.parseCommentary = function (text) {
    var out = [];
    String(text || '').split(/\r?\n/).forEach(function (raw) {
      var line = raw.replace(/^[\s>*_-]+/, '').trim();
      if (!line) return;
      var hit = /^\*{0,2}(WALUIGI|LUIGI)\*{0,2}\s*[:：]\s*(.*)$/i.exec(line);
      if (hit) {
        var body = hit[2].trim();
        if (body) out.push({ who: hit[1].toLowerCase(), text: clip(body, 1800) });
        return;
      }
      if (out.length) {
        var last = out[out.length - 1];
        last.text = clip(last.text + ' ' + line, 1800);
      }
    });
    return out;
  };

  RP.commentaryStats = function (lines) {
    var words = 0;
    (lines || []).forEach(function (l) { words += String(l.text).split(/\s+/).filter(Boolean).length; });
    return { words: words, minutes: Math.round((words / RP.WPM) * 10) / 10, lines: (lines || []).length };
  };

  /** The whole episode as one script, for export or for reading aloud. */
  RP.commentaryScript = function (episode) {
    var lines = episode.lines || [];
    var stats = RP.commentaryStats(lines);
    return ['# ' + episode.topic,
      '_' + episode.styleName + ' · about ' + stats.minutes + ' minutes · ' + stats.words + ' words_',
      episode.sources && episode.sources.length
        ? '\nSources: ' + episode.sources.map(function (s) { return s.name + (s.date ? ' (' + s.date + ')' : ''); }).join(' · ')
        : '',
      '',
    ].join('\n') + lines.map(function (l) {
      return (l.who === 'waluigi' ? '**WALUIGI:** ' : '**LUIGI:** ') + l.text;
    }).join('\n\n') + '\n';
  };

  /** Episodes are kept beside the lore book. */
  RP.saveEpisode = function (state, episode) {
    state.episodes = state.episodes || [];
    state.episodes = state.episodes.filter(function (e) { return e.id !== episode.id; });
    state.episodes.unshift(episode);
    state.episodes = state.episodes.slice(0, 20);
    return episode;
  };

  /* ------------------------------------------------------------------ *
   * character cards — the format everybody else already uses
   *
   * SillyTavern/TavernAI cards are JSON (v1 flat, or v2 under `data`) and
   * PNGs with that JSON base64'd into a tEXt chunk called `chara`. Both
   * are read here, and both are written: exporting a character as a PNG
   * takes their actual archive portrait and embeds the card in it, so the
   * file is a picture AND a card.
   * ------------------------------------------------------------------ */

  function b64encode(text) {
    var bytes = new TextEncoder().encode(text), binary = '';
    for (var i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  }
  function b64decode(text) {
    var binary = atob(String(text).replace(/\s+/g, ''));
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }
  RP.b64encode = b64encode;
  RP.b64decode = b64decode;

  /** A character card (v1 or v2) → a playable character of ours. */
  RP.parseCharacterCard = function (card) {
    if (!card) return null;
    var data = card.data && typeof card.data === 'object' ? card.data : card;
    var name = clip(data.name || data.char_name, 60);
    if (!name) return null;
    var desc = String(data.description || data.char_persona || '');
    var persona = String(data.personality || '');
    var char = RP.normChar({
      id: 'card_' + slug(name),
      name: name,
      title: clip(data.character_version ? name + ' — card ' + data.character_version : (persona.split(/[.\n]/)[0] || 'Imported character card'), 120),
      summary: clip(desc.replace(/\s+/g, ' '), 320),
      description: clip([desc, persona].filter(Boolean).join('\n\n'), 900),
      image: String(data.avatar && data.avatar !== 'none' ? data.avatar : ''),
      handle: slug(data.creator || 'imported') || 'imported',
      tags: Array.isArray(data.tags) ? data.tags.slice(0, 8).map(String) : [],
    });
    char.invented = true;              // not an archive record — treated as a guest
    char.card = {
      scenario: clip(data.scenario, 700),
      first_mes: clip(data.first_mes || data.char_greeting, 1200),
      mes_example: clip(data.mes_example || data.example_dialogue, 1200),
      system_prompt: clip(data.system_prompt, 900),
      post_history_instructions: clip(data.post_history_instructions, 600),
      alternate_greetings: (data.alternate_greetings || []).slice(0, 4).map(function (g) { return clip(g, 900); }),
      creator: clip(data.creator, 60),
      creator_notes: clip(data.creator_notes, 400),
      version: clip(data.character_version, 20),
    };
    char.look = clip(desc.replace(/\s+/g, ' '), 300);
    // A card carried inside a PNG brings its own portrait; the caller hands
    // it in as a data URL so the face survives into every chat.
    if (card && card.__image) char.image = String(card.__image);
    return char;
  };

  /** Ours → a v2 card other tools will accept. The scenario, greeting and
   *  example dialogue are built from the archive's own material when the
   *  character did not arrive as a card. */
  RP.toCharacterCard = function (char, opts) {
    opts = opts || {};
    var card = char.card || {};
    var data = {
      name: char.name,
      description: clip([char.title, char.description || char.summary].filter(Boolean).join('\n\n'), 4000),
      personality: clip(RP.roleFor(char) || char.title, 400),
      scenario: clip(card.scenario || opts.scenario ||
        ('The Waluipedia archive, ' + clip(opts.date || 'the present day', 90) + '. ' +
          clip(char.status || '', 420)), 1200),
      first_mes: clip(card.first_mes || opts.greeting || '', 1500),
      mes_example: clip(card.mes_example || opts.examples || '', 1500),
      creator_notes: clip(card.creator_notes ||
        ('Exported from the Waluipedia chatroom. Filed affiliation: ' + (char.affiliation || 'none') + '.'), 400),
      system_prompt: clip(card.system_prompt || '', 900),
      post_history_instructions: clip(card.post_history_instructions || '', 600),
      alternate_greetings: card.alternate_greetings || [],
      tags: (char.tags || []).concat(['waluipedia']).slice(0, 10),
      creator: clip(card.creator || char.handle || 'waluipedia', 60),
      character_version: card.version || '1.0',
      extensions: {
        waluipedia: {
          id: char.id, race: char.race, affiliation: char.affiliation, faction: char.faction,
          status: char.status, fameTier: char.fameTier, keyEvents: (char.keyEvents || []).slice(0, 8),
        },
      },
    };
    return { spec: 'chara_card_v2', spec_version: '2.0', data: data,
      // v1 fields alongside, so older tools can still read the file.
      name: data.name, description: data.description, personality: data.personality,
      scenario: data.scenario, first_mes: data.first_mes, mes_example: data.mes_example };
  };

  /* ---- PNG cards ---- */

  var CRC_TABLE = (function () {
    var table = new Int32Array(256);
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[n] = c;
    }
    return table;
  })();

  function crc32(bytes, start, end) {
    var c = 0xffffffff;
    for (var i = start; i < end; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  }
  RP.crc32 = crc32;

  function readU32(bytes, at) {
    return ((bytes[at] << 24) | (bytes[at + 1] << 16) | (bytes[at + 2] << 8) | bytes[at + 3]) >>> 0;
  }
  function writeU32(bytes, at, value) {
    bytes[at] = (value >>> 24) & 0xff; bytes[at + 1] = (value >>> 16) & 0xff;
    bytes[at + 2] = (value >>> 8) & 0xff; bytes[at + 3] = value & 0xff;
  }

  RP.isPng = function (bytes) {
    return bytes && bytes.length > 8 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
  };

  /** Every tEXt chunk in a PNG, as { keyword: value }. */
  RP.pngText = function (bytes) {
    var out = {};
    if (!RP.isPng(bytes)) return out;
    var at = 8;
    while (at + 8 <= bytes.length) {
      var len = readU32(bytes, at);
      var type = String.fromCharCode(bytes[at + 4], bytes[at + 5], bytes[at + 6], bytes[at + 7]);
      if (type === 'IEND') break;
      if (type === 'tEXt') {
        var body = bytes.subarray(at + 8, at + 8 + len);
        var split = body.indexOf(0);
        if (split > 0) {
          var key = '', value = '';
          for (var i = 0; i < split; i++) key += String.fromCharCode(body[i]);
          for (var j = split + 1; j < body.length; j++) value += String.fromCharCode(body[j]);
          out[key] = value;
        }
      }
      at += 12 + len;
    }
    return out;
  };

  /** Put a tEXt chunk into a PNG, just before IEND. */
  RP.pngWithText = function (bytes, keyword, value, opts) {
    if (!RP.isPng(bytes)) return null;
    opts = opts || {};
    if (opts.replace !== false) bytes = RP.pngWithoutText(bytes, keyword);
    var key = String(keyword), text = String(value);
    var body = new Uint8Array(key.length + 1 + text.length);
    for (var i = 0; i < key.length; i++) body[i] = key.charCodeAt(i) & 0xff;
    body[key.length] = 0;
    for (var j = 0; j < text.length; j++) body[key.length + 1 + j] = text.charCodeAt(j) & 0xff;

    var chunk = new Uint8Array(12 + body.length);
    writeU32(chunk, 0, body.length);
    chunk[4] = 0x74; chunk[5] = 0x45; chunk[6] = 0x58; chunk[7] = 0x74;   // "tEXt"
    chunk.set(body, 8);
    writeU32(chunk, 8 + body.length, crc32(chunk, 4, 8 + body.length));

    // Find IEND and splice the new chunk in front of it.
    var at = 8, iend = bytes.length - 12;
    while (at + 8 <= bytes.length) {
      var len = readU32(bytes, at);
      var type = String.fromCharCode(bytes[at + 4], bytes[at + 5], bytes[at + 6], bytes[at + 7]);
      if (type === 'IEND') { iend = at; break; }
      at += 12 + len;
    }
    var out = new Uint8Array(bytes.length + chunk.length);
    out.set(bytes.subarray(0, iend), 0);
    out.set(chunk, iend);
    out.set(bytes.subarray(iend), iend + chunk.length);
    return out;
  };

  /** Drop every tEXt chunk with this keyword. Re-exporting a card that was
   *  imported from a PNG must not leave two `chara` chunks in the file —
   *  other tools read the first one and get the old character. */
  RP.pngWithoutText = function (bytes, keyword) {
    if (!RP.isPng(bytes)) return bytes;
    var keep = [bytes.subarray(0, 8)], at = 8, total = 8, dropped = false;
    while (at + 8 <= bytes.length) {
      var len = readU32(bytes, at);
      var type = String.fromCharCode(bytes[at + 4], bytes[at + 5], bytes[at + 6], bytes[at + 7]);
      var chunk = bytes.subarray(at, at + 12 + len);
      var skip = false;
      if (type === 'tEXt') {
        var body = bytes.subarray(at + 8, at + 8 + len);
        var split = body.indexOf(0), key = '';
        for (var i = 0; i < (split < 0 ? 0 : split); i++) key += String.fromCharCode(body[i]);
        if (key.toLowerCase() === String(keyword).toLowerCase()) { skip = true; dropped = true; }
      }
      if (!skip) { keep.push(chunk); total += chunk.length; }
      at += 12 + len;
      if (type === 'IEND') break;
    }
    if (!dropped) return bytes;
    var out = new Uint8Array(total), cursor = 0;
    keep.forEach(function (part) { out.set(part, cursor); cursor += part.length; });
    return out;
  };

  RP.cardFromPng = function (bytes) {
    var text = RP.pngText(bytes);
    var raw = text.chara || text.Chara || text.ccv3 || '';
    if (!raw) return null;
    try { return RP.parseCharacterCard(JSON.parse(b64decode(raw))); }
    catch (e) { /* some exporters write the JSON in plain */ }
    try { return RP.parseCharacterCard(JSON.parse(raw)); }
    catch (e) { return null; }
  };

  RP.cardToPng = function (portraitBytes, char, opts) {
    if (!RP.isPng(portraitBytes)) return null;
    return RP.pngWithText(portraitBytes, 'chara', b64encode(JSON.stringify(RP.toCharacterCard(char, opts))));
  };

  /* ------------------------------------------------------------------ *
   * text in, text out
   * ------------------------------------------------------------------ */

  /** Read a pasted transcript — "Name: line", "**Name:** line", or plain
   *  paragraphs — into turns. Anything unattributed belongs to the player. */
  RP.parseTranscript = function (text, opts) {
    opts = opts || {};
    var out = [], current = null;
    String(text || '').split(/\r?\n/).forEach(function (line) {
      var raw = line.replace(/^\s*[>#-]\s?/, '').trim();
      if (!raw) { current = null; return; }
      // "Name:", "**Name:**" and "**Name**:" are all the same line.
      var named = /^\*{0,2}_{0,2}([A-Z][\w'’. -]{1,40}?)\*{0,2}_{0,2}\s*[:：]\s*\*{0,2}\s*(.+?)\*{0,2}$/.exec(raw);
      if (named) {
        current = { who: clip(named[1], 40), text: clip(named[2], 4000) };
        out.push(current);
        return;
      }
      // A line that carries on the previous one (lowercase, or opens with
      // speech or an action) is the same turn; anything else is a new one.
      if (current && /^[a-z"“*(]/.test(raw)) { current.text = clip(current.text + '\n' + raw, 4000); return; }
      current = { who: clip(opts.narrator || '', 40), text: clip(raw, 4000) };
      out.push(current);
    });
    return out.filter(function (t) { return t.text; });
  };

  /** Those turns → a room, with anyone unknown treated as the player. */
  RP.roomFromTranscript = function (turns, cast, opts) {
    opts = opts || {};
    var room = RP.newRoom(cast, opts);
    room.messages = room.messages.concat(turns.map(function (t) {
      var who = (cast || []).filter(function (c) {
        return c.name.toLowerCase() === String(t.who).toLowerCase() ||
          (t.who && c.name.toLowerCase().indexOf(String(t.who).toLowerCase()) >= 0);
      })[0];
      if (!who) return { id: uid(), role: 'user', text: t.text, at: Date.now() };
      return { id: uid(), role: 'char', charId: who.id, text: t.text, at: Date.now(), alts: [t.text], alt: 0 };
    }));
    return room;
  };


  /* ---- one importer for every shape a file might be ---- */

  /** SillyTavern-style chat logs: JSONL, one message per line, the first
   *  line metadata. Also accepts a plain JSON array of the same objects. */
  RP.parseChatLog = function (value) {
    var rows = [];
    if (typeof value === 'string') {
      String(value).split(/\r?\n/).forEach(function (line) {
        var trimmed = line.trim();
        if (!trimmed || trimmed.charAt(0) !== '{') return;
        try { rows.push(JSON.parse(trimmed)); } catch (e) { /* not a row */ }
      });
    } else if (Array.isArray(value)) {
      rows = value.slice();
    } else if (value && Array.isArray(value.messages)) {
      rows = value.messages.slice();
    } else if (value && Array.isArray(value.chat)) {
      rows = value.chat.slice();
    }
    var turns = [];
    rows.forEach(function (row) {
      if (!row || typeof row !== 'object') return;
      var text = row.mes || row.message || row.content || row.text || row.body;
      if (!text || typeof text !== 'string') return;              // metadata line
      var who = row.name || row.speaker || row.author || row.character ||
        (row.is_user || row.isUser || row.role === 'user' ? '' : row.role || '');
      if (row.is_user === true || row.isUser === true || row.role === 'user') who = '';
      turns.push({ who: clip(who, 40), text: clip(text, 4000) });
    });
    return turns;
  };

  /** Work out what a file actually is before trying to read it, so the page
   *  can say something useful instead of "unsupported". */
  RP.sniffImport = function (value) {
    if (value && value.length && typeof value !== 'string' && RP.isPng(value)) {
      var text = RP.pngText(value);
      var encoded = text.chara || text.Chara || text.ccv3 || '';
      if (!encoded) return { kind: 'png-plain', why: 'a PNG with no character card inside it' };
      var decoded = null;
      try { decoded = JSON.parse(b64decode(encoded)); } catch (e) { decoded = null; }
      if (!decoded) {
        // Some exporters write the JSON straight in, unencoded.
        try { decoded = JSON.parse(encoded); } catch (e) { decoded = null; }
      }
      if (!decoded) return { kind: 'png-broken', why: 'a PNG whose card chunk could not be decoded' };
      return { kind: 'card', card: decoded, why: 'a character card inside a PNG' };
    }
    var raw = typeof value === 'string' ? value : new TextDecoder().decode(value);
    var trimmed = raw.replace(/^\uFEFF/, '').trim();        // byte-order marks happen
    if (!trimmed) return { kind: 'empty', why: 'an empty file' };
    if (/^[[{]/.test(trimmed)) {
      var data = null;
      try { data = JSON.parse(trimmed); } catch (e) { data = null; }
      if (data) {
        if (data.kind === 'waluipedia-chatroom-bundle' || Array.isArray(data.rooms)) {
          return { kind: 'bundle', bundle: data, why: 'a chatroom bundle' };
        }
        if (data.spec === 'chara_card_v2' || data.spec === 'chara_card_v3' || (data.data && data.data.name)) {
          return { kind: 'card', card: data, why: 'a v2 character card' };
        }
        if (data.name && (data.description !== undefined || data.personality !== undefined ||
            data.first_mes !== undefined || data.char_persona !== undefined)) {
          return { kind: 'card', card: data, why: 'a v1 character card' };
        }
        var logged = RP.parseChatLog(data);
        if (logged.length) return { kind: 'chatlog', turns: logged, why: 'a chat log' };
        return { kind: 'json-unknown', why: 'JSON the page does not recognise', data: data };
      }
      // Not one JSON document — maybe JSONL, a line per message.
      var lines = RP.parseChatLog(trimmed);
      if (lines.length) return { kind: 'chatlog', turns: lines, why: 'a JSONL chat log' };
      return { kind: 'json-broken', why: 'a file that starts like JSON but does not parse' };
    }
    var turns = RP.parseTranscript(trimmed, {});
    if (turns.length) return { kind: 'transcript', turns: turns, why: 'a transcript' };
    return { kind: 'unknown', why: 'a file with nothing readable in it' };
  };

  /* ------------------------------------------------------------------ *
   * exports for a writing model — the brief, and the whole thing
   * ------------------------------------------------------------------ */

  /** Everything a writer needs and nothing it does not: no ids, no swipes,
   *  no error notices, no duplicated takes, no settings. Sized to drop into
   *  another model's window. */
  RP.storyBrief = function (state, room, opts) {
    opts = opts || {};
    var cap = opts.budget || 9000;
    var scene = RP.sceneDate(room, state);
    var turns = (room.messages || []).filter(visible);
    var sheets = Object.keys(room.states || {}).map(function (k) { return room.states[k]; })
      .filter(function (s) { return s.present !== false; });
    var book = ((state.book || {}).entries || []).filter(function (e) { return e.roomId === room.id; });
    var out = [];
    out.push('# ' + (room.sceneName || room.title));
    out.push('_A roleplay transcript from the Waluipedia archive, trimmed for writing up._');
    out.push('');
    out.push('**When:** ' + (scene ? RP.formatWahDate(scene) : 'undated') +
      (room.canon === 'continuation' ? ' · continues filed canon' : ''));
    out.push('**Who:**');
    (room.cast || []).forEach(function (c) {
      out.push('- **' + c.name + '** — ' + clip(c.title || c.summary || 'no filing', 160) +
        (c.invented ? ' _(invented in play' + (c.look ? ': ' + clip(c.look, 120) : '') + ')_' : ''));
    });
    if (room.scene) { out.push('', '**The situation:** ' + clip(room.scene.replace(/\s+/g, ' '), 700)); }
    if ((room.beats || []).length) {
      out.push('', '**The script, as it fired:**');
      (room.beats || []).slice(0, room.beatIndex || (room.beats || []).length).forEach(function (b) {
        out.push('- ' + (b.time ? b.time + ' — ' : '') + b.beat);
      });
    }
    out.push('', '## What happened');
    turns.forEach(function (m) {
      var who = m.role === 'user' ? ((state.user && state.user.name) || 'The player')
        : (((room.cast || []).filter(function (c) { return c.id === m.charId; })[0]) || {}).name || 'Someone';
      out.push('**' + who + ':** ' + RP.textOf(m).replace(/\s+/g, ' ').trim());
    });
    if (sheets.length) {
      out.push('', '## Where everyone ended up');
      sheets.forEach(function (s) {
        var bits = [];
        if (s.hp) bits.push('HP ' + s.hp.value + '/' + s.hp.max);
        if (s.mp) bits.push('MP ' + s.mp.value + '/' + s.mp.max);
        var flags = Object.keys(s.flags || {});
        if (flags.length) bits.push(flags.join(', ').replace(/_/g, ' '));
        if ((s.items || []).length) bits.push('carrying ' + s.items.join(', '));
        if (s.status) bits.push(s.status);
        out.push('- ' + s.name + ': ' + (bits.join(' · ') || 'unmarked'));
      });
    }
    if (book.length) {
      out.push('', '## Established in this scene');
      book.forEach(function (e) {
        out.push('- ' + (RP.BOOK_KINDS[e.kind] || {}).label + ': ' + (e.name || e.when) + ' — ' + e.text);
      });
    }
    out.push('', '---', '_Write this up as prose. Everything above is established; nothing else is._');
    var text = out.join('\n');
    if (text.length <= cap) return text;
    // Too long: keep the head, keep the ending, say what was cut.
    var head = text.slice(0, Math.floor(cap * 0.55));
    var tail = text.slice(-Math.floor(cap * 0.4));
    return head + '\n\n… (' + (text.length - cap) + ' characters of the middle cut for length) …\n\n' + tail;
  };

  /** The whole chat, as a file another chatroom can import. */
  RP.chatExport = function (state, room) {
    return {
      kind: 'waluipedia-chatroom-bundle',
      version: 1,
      exportedAt: new Date().toISOString(),
      user: state.user,
      rooms: [room],
      chars: (state.chars || []).filter(function (m) {
        return (room.cast || []).some(function (c) { return c.id === m.id; });
      }),
      lore: state.lore || [],
      book: ((state.book || {}).entries || []).filter(function (e) {
        return e.roomId === room.id || !e.roomId;
      }),
      newChars: (state.newChars || []).filter(function (c) {
        return (room.cast || []).some(function (x) { return x.id === c.id; });
      }),
      log: (state.log || []).filter(function (e) { return e.roomId === room.id; }),
    };
  };



  /* ------------------------------------------------------------------ *
   * editing what has already been said
   *
   * Everything in a chat is the reader's to change: a line can be edited,
   * muted (left on screen, taken out of the model's head) or deleted
   * outright, and the room can be told how far back the model may look.
   * ------------------------------------------------------------------ */

  RP.findMessage = function (room, id) {
    return ((room && room.messages) || []).filter(function (m) { return m.id === id; })[0] || null;
  };

  /** Rewrite a turn. The edited text becomes the take on screen; the
   *  alternatives it had are dropped, because they are no longer true. */
  RP.editMessage = function (room, id, text) {
    var msg = RP.findMessage(room, id);
    if (!msg) return null;
    msg.text = String(text);
    msg.alts = [msg.text];
    msg.alt = 0;
    msg.edited = Date.now();
    room.updated = Date.now();
    return msg;
  };

  /** Keep it on screen, keep it out of the prompt. */
  RP.muteMessage = function (room, id, muted) {
    var msg = RP.findMessage(room, id);
    if (!msg) return null;
    msg.muted = muted === undefined ? !msg.muted : Boolean(muted);
    room.updated = Date.now();
    return msg;
  };

  RP.deleteMessage = function (room, id) {
    var before = ((room && room.messages) || []).length;
    room.messages = (room.messages || []).filter(function (m) { return m.id !== id; });
    room.updated = Date.now();
    return before - room.messages.length;
  };

  /** Drop a run of turns — what an import leaves behind when you decide
   *  you did not want it after all. */
  RP.deleteMessages = function (room, test) {
    var before = (room.messages || []).length;
    room.messages = (room.messages || []).filter(function (m) { return !test(m); });
    room.bookAt = Math.min(Number(room.bookAt || 0), (room.messages || []).filter(visible).length);
    room.updated = Date.now();
    return before - room.messages.length;
  };

  /** How much of the chat the model is allowed to see. */
  RP.contextLimit = function (room, fallback) {
    var n = Number((room && room.contextLimit) || 0);
    return n > 0 ? n : (fallback || 24);
  };

  /* ---- smart filing: a long import does not need 104 calls ---- */

  // Words that mean a turn is establishing something, rather than banter.
  var DENSE = /\b(named?|called|signed|filed|dated|paid|killed|burned|stole|built|opened|closed|arrived|left|died|swore|agreed|refused|carried|found)\b/i;

  function chunkScore(turns) {
    var text = turns.map(function (t) { return t.text || ''; }).join(' ');
    var score = 0;
    score += (text.match(/\b[A-Z][a-z]{3,}\b/g) || []).length;          // names and places
    score += (text.match(/\b\d{1,4}\b/g) || []).length * 0.5;           // dates, counts, money
    score += (text.match(/"|“/g) || []).length * 0.3;                   // things said out loud
    if (DENSE.test(text)) score += 6;
    return score / Math.max(1, turns.length / 4);
  }

  /** Plan a catch-up that fits a budget. Rather than reading every stretch
   *  of a 300-turn import, it reads BIGGER stretches, keeps the end of the
   *  chat (which is what the next turn follows on from) and spends what is
   *  left on the densest parts of the middle. */
  RP.smartBacklog = function (room, opts) {
    opts = opts || {};
    var maxCalls = Math.max(1, Number(opts.maxCalls || 6));
    var turns = (room.messages || []).filter(visible);
    var from = Number(room.bookAt || 0);
    var pending = turns.slice(from);
    if (!pending.length) return { jobs: [], chunk: 0, covered: 0, pending: 0 };
    // One chunk per call, sized so the whole backlog is covered — capped so
    // a chunk still fits a small model's window.
    var chunk = Math.min(Number(opts.maxChunk || 30), Math.max(Number(opts.minChunk || 6), Math.ceil(pending.length / maxCalls)));
    var slices = [];
    for (var at = 0; at < pending.length; at += chunk) {
      slices.push({ from: from + at, turns: pending.slice(at, at + chunk) });
    }
    if (slices.length <= maxCalls) {
      return { jobs: slices, chunk: chunk, covered: pending.length, pending: pending.length, skipped: 0 };
    }
    // Too many even then: keep the last two (the live end of the story) and
    // pick the densest of the rest.
    var tail = slices.slice(-2);
    var rest = slices.slice(0, -2).map(function (slice) {
      return { slice: slice, score: chunkScore(slice.turns) };
    }).sort(function (a, b) { return b.score - a.score; })
      .slice(0, Math.max(0, maxCalls - tail.length))
      .map(function (x) { return x.slice; });
    var picked = rest.concat(tail).sort(function (a, b) { return a.from - b.from; });
    var covered = picked.reduce(function (n, slice) { return n + slice.turns.length; }, 0);
    return {
      jobs: picked, chunk: chunk, covered: covered, pending: pending.length,
      skipped: pending.length - covered,
    };
  };


  /* ------------------------------------------------------------------ *
   * how long a turn should be
   *
   * A local model left to itself writes six paragraphs of weather. Most
   * of a chat should be short: people talk in sentences, not essays. The
   * world's own turns are allowed more room, because describing a place
   * is the one job that needs it.
   * ------------------------------------------------------------------ */

  RP.LENGTHS = {
    snappy: {
      name: 'Snappy', words: '2 to 4 sentences', sentences: [2, 4], tokens: 420,
      dir: 'Write 2 to 4 SENTENCES. Count them. One or two beats of action or speech and nothing else — no ' +
        'scene-setting, no weather, no summarising how anyone feels about it.',
    },
    normal: {
      name: 'Normal', words: '4 to 7 sentences', sentences: [4, 7], tokens: 700,
      dir: 'Write 4 to 7 SENTENCES. Count them. One moment, played properly. Cut anything that is only atmosphere.',
    },
    rich: {
      name: 'Rich', words: '8 to 14 sentences', sentences: [8, 14], tokens: 1200,
      dir: 'Write 8 to 14 SENTENCES — two or three short paragraphs. Count them, and stop at the end of a sentence. ' +
        'Detail that does something, not description for its own sake.',
    },
  };

  /** Did the model run out of room rather than finish? A reply that ends
   *  without terminal punctuation, inside an open quote, or on a comma or a
   *  conjunction was cut off, not concluded. */
  /** How many sentences a turn actually came back with. */
  RP.sentenceCount = function (text) {
    return String(text || '').split(/[.!?…]+[\s"”']*/).filter(function (part) {
      return part.trim().length > 1;
    }).length;
  };

  RP.looksTruncated = function (text) {
    var t = String(text || '').trim();
    if (!t) return false;
    // An odd number of quote marks means somebody is still speaking, however
    // the line happens to end.
    var doubles = (t.match(/"/g) || []).length + (t.match(/[“”]/g) || []).length;
    if (doubles % 2 !== 0) return true;
    if (/[.!?…”"'*\)\]]$/.test(t)) return false;
    if (/[,;:—-]$/.test(t)) return true;
    if (/\b(and|but|the|a|an|of|to|in|with|that|as|into|from|for|his|her|their|its|was|were|is|are)$/i.test(t)) return true;
    return !/[.!?…]$/.test(t);
  };

  /** Cut back to the last complete sentence — the last resort when the
   *  model will not finish, so the reader never sees a dangling fragment. */
  RP.trimDangling = function (text) {
    var t = String(text || '').trim();
    if (!RP.looksTruncated(t)) return t;
    var at = Math.max(t.lastIndexOf('.'), t.lastIndexOf('!'), t.lastIndexOf('?'), t.lastIndexOf('…'));
    // Keep the cut only if it leaves something worth reading behind.
    if (at > 0 && at >= Math.min(60, t.length * 0.25)) return t.slice(0, at + 1).trim();
    return t;
  };

  /** Join a reply to its continuation without repeating the seam. */
  RP.stitch = function (head, tail) {
    var a = String(head || '').trim(), b = String(tail || '').trim();
    if (!b) return a;
    if (!a) return b;
    // The model often repeats the last few words before carrying on.
    for (var n = Math.min(80, a.length, b.length); n > 12; n--) {
      if (a.slice(-n).toLowerCase() === b.slice(0, n).toLowerCase()) { b = b.slice(n).trim(); break; }
    }
    if (!b) return a;
    var joiner = /[.!?…"”'*\)\]]$/.test(a) ? ' ' : (/^[a-z,;]/.test(b) ? ' ' : ' ');
    return (a + joiner + b).replace(/\s+([,.;:!?])/g, '$1').trim();
  };

  /** What to say when asking for the rest of it. */
  RP.continueNudge = function (partial) {
    return 'Your last turn was cut off at "' + clip(String(partial).slice(-120), 120) + '". ' +
      'Continue from exactly that point and finish the thought. Do not start again, do not repeat a word of it, ' +
      'do not summarise it — write only what comes next, and bring it to a proper stop.';
  };

  /** The length instruction for a turn. Characters get the reader's dial;
   *  the world gets one step more room, because that is its job. */
  RP.lengthBlock = function (level, isWorld) {
    var keys = ['snappy', 'normal', 'rich'];
    var at = Math.max(0, keys.indexOf(RP.LENGTHS[level] ? level : 'snappy'));
    if (isWorld) at = Math.min(keys.length - 1, at + 1);
    var band = RP.LENGTHS[keys[at]];
    return {
      key: keys[at], tokens: band.tokens,
      text: 'LENGTH\n' + band.dir +
        '\nTHE LAST SENTENCE MUST BE A WHOLE SENTENCE. Count as you go, and when you reach the last one, finish it ' +
        'and stop. Never end on a comma, a conjunction, or an open quotation mark. A turn that trails off ' +
        'mid-clause is a broken turn — it is better to write one sentence fewer and land it.',
    };
  };

  /* ------------------------------------------------------------------ *
   * the world turn — when nobody else is in the room
   *
   * A scene with one player and no other characters used to sit there. The
   * world speaks instead: it describes what is happening around you, in
   * second person, and moves the hour along. It never speaks for you.
   * ------------------------------------------------------------------ */

  RP.WORLD = { id: 'world', name: 'The Director', title: 'Narration', world: true };

  /* The narrator has a voice, and you choose which one. */
  RP.NARRATORS = {
    director: {
      name: 'The Director', icon: '\u25cd', length: 'normal',   // 4-7 sentences, ~700 tokens: a scene, not a five-minute monologue
      blurb: 'Cinematic, deadpan, neo-noir. Draws detail out and lets silence do work.',
      dir: [
        'You are THE DIRECTOR. Never use film words \u2014 no "cut to", no "close up", no "camera" \u2014 you get the',
        'same effect out of prose.',
        'SENSORY FOCUS. Point attention like a lens. When a detail matters, give it intimately: the smear of ink on a',
        'page, the exact temperature of the wind, a watch ticking out of step.',
        'SOUND. Use it to build. A wind that roars and then drops into a silence that is too complete, half a second',
        'before something happens.',
        'PACING AND REVEALS. Draw the suspense out \u2014 but never at the cost of the thing the player actually did.',
        'DRAMATIC IRONY. Let the place react in ways the player has not noticed yet: a shadow a foot too long, birds',
        'leaving a tree nobody touched, one footstep out of time with the others.',
        'TONE. Deadpan, eerie, neo-noir. Treat the archive\u2019s material with complete seriousness, however silly the',
        'names are.',
      ].join('\n'),
    },
    plain: {
      name: 'The world', icon: '\u25cd', length: 'normal',
      blurb: 'Neutral narration: what is there, what changes, nothing louder than that.',
      dir: 'Describe plainly and concretely. No mood-setting for its own sake, no adjectives doing the work of events.',
    },
    terse: {
      name: 'The room', icon: '\u25ab', length: 'snappy',
      blurb: 'One or two sentences. Facts, movement, and out.',
      dir: 'Two sentences at most. What happened, and what is different now. No atmosphere, no lingering.',
    },
    archivist: {
      name: 'The archive', icon: '\u00a7', length: 'normal',
      blurb: 'Filed narration: dated, specific, dry, with the archivist\u2019s asides.',
      dir: 'Narrate as though filing it: dated where a date is known, named objects, exact numbers, and the dry aside '
        + 'of somebody who has written up too many of these.',
    },
  };

  RP.narrator = function (state) {
    var key = (state && state.settings && state.settings.narrator) || 'director';
    return RP.NARRATORS[key] ? key : 'director';
  };

  /** The facts a scene has nailed down: where you are, what you are
   *  wearing, what time it is. Filed once, then unchangeable. */
  RP.factsBlock = function (room) {
    var facts = room && room.facts ? Object.keys(room.facts) : [];
    if (!facts.length && !(room && room.clock)) return '';
    var lines = facts.map(function (k) { return '- ' + k.replace(/_/g, ' ') + ': ' + room.facts[k]; });
    if (room.clock) lines.unshift('- the time: ' + room.clock);
    return [
      'FIXED FACTS — established in this scene and NOT open to revision. Do not rename them, move them, or dress',
      'the player differently. If the story changes one of them, say so plainly and file the change.',
      lines.join('\n'),
    ].join('\n');
  };

  /** What the scene has already established, so it is not established
   *  twice. The cloak, the moon and the patio get described ONCE. */
  RP.continuityBlock = function (room, limit) {
    var said = (room.messages || []).filter(function (m) { return m.role === 'world' && !m.muted; }).slice(-(limit || 2));
    if (!said.length) return '';
    return [
      'ALREADY DESCRIBED \u2014 this is set, and the reader has read it. Do not describe any of it again, do not rename',
      'the place, do not re-dress the player, do not re-hang the moon. Refer back in passing at most, and spend this',
      'turn on what is NEW.',
      said.map(function (m) { return '- ' + clip(RP.textOf(m).replace(/[*_]/g, ''), 420); }).join('\n'),
    ].join('\n');
  };

  /** Direct questions the player asked in character get answered once. */
  RP.askedBlock = function (room) {
    var msgs = (room.messages || []).filter(function (m) { return m.role === 'user'; });
    var last = msgs[msgs.length - 1];
    if (!last) return '';
    var asks = RP.textOf(last).split(/(?:[.!?]|\n)+/).filter(function (line) {
      return /\?/.test(line) || /^\s*(what|where|who|how|why|when)\b/i.test(line);
    }).slice(0, 4);
    if (!asks.length) return '';
    return 'THE PLAYER ASKED THESE DIRECTLY \u2014 answer every one of them concretely inside the prose this turn, '
      + 'and then never restate them:\n' + asks.map(function (a) { return '- ' + clip(a, 160); }).join('\n');
  };

  /** The rule that makes narration useful: it resolves what the player
   *  actually did. Whether it goes well is the roll\u2019s business. */
  var RESOLVE = [
    'DO THE THING THEY DID. This is the part narration usually dodges, and dodging it is not allowed here.',
    'If they read something, invent and show what it actually says \u2014 the real words, quoted, specific, and',
    'relevant to what is going on. If they search, say what is found, or plainly not found. If they open, unlock,',
    'listen, count or ask, resolve it in this turn. Never replace their action with weather.',
    'Then, and only then, let something move.',
    'You may make it cost them, go wrong, or turn up something they did not want \u2014 but you may not skip it.',
    '',
    'FILE WHAT YOU NAME. The first time you name where they are, what they are wearing, or what time it is, put it',
    'on its own line so it cannot drift later:',
    '  [[SET: place = the stone patio of the outpost]]',
    '  [[SET: wearing = a heavy fur-lined travelling cloak]]',
    '  [[TIME: a little after midnight]]',
    'Never write any other double-bracketed text into the prose.',
  ].join('\n');

  /** The character the reader is playing, if they have starred one. */
  RP.playerCharacter = function (room) {
    if (!room || !room.youPlay) return null;
    return (room.cast || []).filter(function (c) { return c.id === room.youPlay; })[0] || null;
  };

  /** Everyone the model may speak as — the player's own character is not
   *  on this list. */
  RP.speakableCast = function (room) {
    return RP.presentCast(room).filter(function (c) { return c.id !== (room && room.youPlay); });
  };

  RP.markPlayer = function (room, charId) {
    room.youPlay = room.youPlay === charId ? '' : String(charId || '');
    if (room.next === room.youPlay) room.next = '';
    room.updated = Date.now();
    return room.youPlay;
  };

  /** The narrator's prompt. It is the same world, the same lore, the same
   *  state — but it is a camera, not a person. */
  RP.worldPrompt = function (state, room, opts) {
    opts = opts || {};
    var voice = RP.NARRATORS[RP.narrator(state)];
    var you = RP.playerCharacter(room);
    var others = RP.speakableCast(room);
    return [
      'You are ' + voice.name.toUpperCase() + ' \u2014 the narration around the player, not a character in it.',
      '',
      voice.dir,
      '',
      'Write in the PRESENT TENSE and address the player as "you".',
      you ? 'The player is playing ' + you.name + ' \u2014 ' + clip(you.title || you.summary, 200) +
        '. Never write their speech, their thoughts or their decisions; describe what happens around them and what '
        + 'they can see, hear and feel, and leave every choice to them.'
        : 'Never write the player\u2019s speech, thoughts or decisions.',
      others.length
        ? 'Other people are here: ' + others.map(function (c) { return c.name; }).join(', ')
          + '. Show them from the outside; they speak for themselves on their own turns.'
        : '',
      '',
      RESOLVE,
      '',
      'Never end on a question, never ask what the player would like to do, and never summarise what has already',
      'happened. Something should be different by the end of the turn.',
      'No stage directions in asterisks \u2014 this is narration; write it plainly.',
    ].filter(Boolean).join('\n');
  };

  /** The whole system prompt for a world turn: the narrator brief, then the
   *  same reference material a character gets. */
  RP.worldSystem = function (state, room, opts) {
    opts = opts || {};
    var parts = [RP.worldPrompt(state, room, opts)];
    if (room.scene) parts.push('THE SCENE\n' + clip(room.scene, 900));
    var worldSource = RP.sourceBlock(room, opts.archive);
    if (worldSource) parts.push(worldSource);
    var worldKeys = RP.keywordBlock(state, opts.recent || RP.historyFor(room, 4).map(function (m) { return m.content; }).join(' '));
    if (worldKeys) parts.push(worldKeys);
    var fixed = RP.factsBlock(room);
    if (fixed) parts.push(fixed);
    var already = RP.continuityBlock(room);
    if (already) parts.push(already);
    var asked = RP.askedBlock(room);
    if (asked) parts.push(asked);
    var knowledge = RP.knowledgeBlock(state, room, opts.archive);
    if (knowledge) parts.push(knowledge);
    var book = RP.bookBlock(state, room, 10);
    if (book) parts.push(book);
    if (opts.citations) parts.push(opts.citations);
    var script = RP.scriptBlock(room);
    if (script) parts.push(script);
    var worldRecap = RP.recapBlock(room);
    if (worldRecap) parts.push(worldRecap);
    var memory = RP.memoryBlock(state, room.cast, room, 6);
    if (memory) parts.push(memory);
    var protectedFrom = parts.length;
    if (room.mechanics !== 'off') {
      var sheets = RP.stateBlock(room, RP.PLAYER_ID);
      if (sheets) parts.push(sheets);
      var named = RP.mentionBlock(room, opts.mentionText || '');
      if (named) parts.push(named);
      var thinAir = RP.conjureBlock(opts.conjured);
      if (thinAir) parts.push(thinAir);
      parts.push(RP.DIRECTIVES);
    }
    var fate = RP.fateBlock(opts.fate);
    if (fate) parts.push(fate);
    var worldOoc = RP.oocBlock(state, room, opts.notes);
    if (worldOoc) parts.push(worldOoc);
    // The narrator carries its own length: the Director needs room, the
    // room itself needs two sentences.
    parts.push(RP.lengthBlock(RP.NARRATORS[RP.narrator(state)].length, false).text);
    return RP.fitPrompt(parts, opts.budget, protectedFrom);
  };

  /** Should the world take this turn? It always does when the player is
   *  alone, and otherwise only when the director asks for it. */
  RP.worldShouldSpeak = function (state, room) {
    if ((state.settings && state.settings.world) === 'off') return false;
    return RP.speakableCast(room).length === 0;
  };

  /** Nobody had to answer — but the scene should not just sit there. With
   *  the world on, it describes what you did and moves the hour; only with
   *  the world off does the turn come straight back to you. */
  RP.fallbackTurn = function (state, room) {
    if ((state.settings && state.settings.world) === 'off') return '';
    return 'world';
  };





  /* ------------------------------------------------------------------ *
   * search — the model can look something up mid-scene
   *
   * Nothing reads a whole filing. A query is scored against every record
   * the page has loaded, the best PASSAGE inside the winners is cut out,
   * and only those passages are handed over. The model can ask for this
   * itself with [[LOOKUP: …]], and file what it learns with [[REMEMBER:]].
   * ------------------------------------------------------------------ */

  var STOP = /^(the|and|for|with|that|this|from|into|what|when|where|who|whom|whose|which|about|there|their|they|them|then|than|have|has|had|was|were|been|being|does|did|done|will|would|could|should|shall|may|might|must|can|are|is|it|its|his|her|our|your|you|i|a|an|of|to|in|on|at|by|as|or|if|but|not|no|yes|do|so|up|out|off|over|under|again|once|here|now)$/i;

  RP.searchTerms = function (query) {
    var seen = {};
    return String(query || '').toLowerCase().split(/[^a-z0-9']+/)
      .filter(function (t) {
        if (t.length < 3 || STOP.test(t) || seen[t]) return false;
        seen[t] = 1;
        return true;
      }).slice(0, 12);
  };

  /** The best few sentences inside a body of prose for these terms. */
  RP.bestPassage = function (body, terms, size) {
    var text = String(body || '').replace(/\s+/g, ' ').trim();
    if (!text) return '';
    var parts = text.split(/(?<=[.!?])\s+/);
    if (parts.length < 2) return clip(text, size || 320);
    var best = { score: -1, at: 0 };
    for (var i = 0; i < parts.length; i++) {
      var window = parts.slice(i, i + 3).join(' ').toLowerCase();
      var score = 0;
      terms.forEach(function (t) { if (window.indexOf(t) >= 0) score++; });
      if (score > best.score) best = { score: score, at: i };
    }
    if (best.score <= 0) return clip(text, size || 320);
    return clip(parts.slice(best.at, best.at + 3).join(' '), size || 320);
  };

  /** Search everything loaded. Returns records with the passage that
   *  actually matched, not the whole filing. */
  RP.searchArchive = function (index, query, opts) {
    opts = opts || {};
    var terms = RP.searchTerms(query);
    if (!terms.length) return [];
    var scored = [];
    var when = opts.scene ? (typeof opts.scene === 'string' ? RP.parseWahDate(opts.scene) : opts.scene) : null;
    (index || []).forEach(function (r) {
      if (r.noncanon && !opts.includeNonCanon) return;
      // Nothing from after the scene. Reading tomorrow's filing tonight is
      // how a chat ends up quoting a battle that has not happened.
      if (when && r.date && RP.timeRelation(when, r.date).rel === 'future') return;
      var hay = r.words || '';
      var score = 0;
      terms.forEach(function (t) {
        var at = hay.indexOf(t);
        if (at < 0) return;
        score += 1;
        if (String(r.name || '').toLowerCase().indexOf(t) >= 0) score += 2;   // a name match is worth more
      });
      if (!score) return;
      scored.push({ r: r, score: score });
    });
    return scored.sort(function (a, b) { return b.score - a.score; })
      .slice(0, opts.limit || 4)
      .map(function (x) {
        return {
          id: x.r.id, kind: x.r.kind, name: x.r.name,
          date: x.r.date ? RP.formatWahDate(x.r.date) : '',
          snippet: RP.bestPassage(x.r.body || x.r.text, terms, opts.size || 320),
          score: x.score,
        };
      });
  };

  /** What a search hands the model. */
  RP.retrievalBlock = function (results, query) {
    if (!results || !results.length) {
      return query ? 'YOU SEARCHED THE ARCHIVE FOR "' + clip(query, 80) + '" AND IT HAS NOTHING.\n' +
        'Say so in character rather than inventing a filing.' : '';
    }
    return [
      'FROM THE ARCHIVE' + (query ? ' — searched just now for "' + clip(query, 80) + '"' : ' — relevant to this moment'),
      'These are real passages out of real filings. Quote them, date them, argue with them — but do not invent',
      'around them, and do not pretend to know more of the file than is here.',
      results.map(function (r) {
        return '- [' + r.kind + ':' + r.id + '] ' + r.name + (r.date ? ' (' + r.date + ')' : '') + '\n    “' + r.snippet + '”';
      }).join('\n'),
    ].join('\n');
  };

  /* ------------------------------------------------------------------ *
   * the session's own source — what this scene actually is
   *
   * A chat started from a filed event was only ever given that event's
   * one-line summary. The cast could not "pull from" the material because
   * the material was not in the prompt. It is now.
   * ------------------------------------------------------------------ */

  RP.sourceRecord = function (room, archive) {
    if (!room || !room.sourceId || !archive) return null;
    var want = slug(room.sourceId);
    return (archive.events || []).filter(function (e) {
      return slug(e.id) === want || slug(e.name) === want;
    })[0] || null;
  };

  /** The dossier for the filing this session came out of: what happened,
   *  where, when, who was in it and what it did to them. */
  RP.sourceBlock = function (room, archive) {
    var e = RP.sourceRecord(room, archive);
    if (!e) return '';
    var beats = ((e.timeline || {}).entries || []).slice(0, 8).map(function (b) {
      return '  - ' + (b.time ? b.time + ' — ' : '') + clip(b.beat, 120) + (b.detail ? '. ' + clip(b.detail, 200) : '');
    });
    var people = (e.participants || []).slice(0, 8).map(function (p) {
      return '  - ' + clip(p.name, 60) + (p.role ? ' — ' + clip(p.role, 200) : '');
    });
    return [
      'WHAT THIS SESSION IS — the filed record this scene comes out of. Everybody here lived it; use the names, the',
      'dates and the details, and never contradict them.',
      'Filing: ' + clip(e.name, 90) + (e.date ? ' (' + clip(e.date, 70) + ')' : ''),
      e.location ? 'Where: ' + clip(e.location, 160) : '',
      e.summary ? 'What happened: ' + clip(e.summary, 700) : '',
      e.outcome ? 'How it ended: ' + clip(e.outcome, 500) : '',
      e.aftermath ? 'What it left behind: ' + clip(String(e.aftermath).replace(/[*#>]/g, ''), 500) : '',
      people.length ? 'Who was in it:\n' + people.join('\n') : '',
      beats.length ? 'How it ran:\n' + beats.join('\n') : '',
    ].filter(Boolean).join('\n');
  };

  /* ---- who actually wrote that line? ---- */

  /** A small model handed a six-hander will sometimes write the wrong
   *  character — usually whoever spoke last. If the prose is plainly
   *  somebody else's, say so, and the page re-labels the card rather than
   *  lying about who spoke. */
  RP.checkSpeaker = function (text, speaker, cast, opts) {
    var body = String(text || '').trim();
    if (!body) return { ok: false, empty: true };
    var mine = String((speaker && speaker.name) || '').toLowerCase();
    var head = body.slice(0, 220).toLowerCase();
    var others = (cast || []).filter(function (c) {
      return c.id !== (speaker && speaker.id) && String(c.name || '').length > 2;
    });
    // "Wario growls", "Wario stands", "Wario:" at the head of the reply.
    var actual = null;
    others.forEach(function (c) {
      if (actual) return;
      var name = c.name.toLowerCase();
      var at = head.indexOf(name);
      if (at < 0 || at > 40) return;
      var after = head.slice(at + name.length, at + name.length + 14);
      if (/^\s*(:|says|said|growls|grunts|shrugs|stands|leans|pushes|paces|spits|laughs|nods|turns|steps|slams|mutters|barks|snaps)/.test(after)) {
        actual = c;
      }
    });
    if (!actual) return { ok: true };
    // If the speaker is in it too, it is a scene, not a misattribution.
    if (mine && head.indexOf(mine) >= 0) return { ok: true };
    // Writing the PLAYER's character is not a mislabel to be filed away —
    // it is the one thing the model is never allowed to do.
    if (opts && opts.youPlay && actual.id === opts.youPlay) {
      return { ok: false, playerVoice: true, actual: actual };
    }
    return { ok: false, actual: actual };
  };

  /* ------------------------------------------------------------------ *
   * the audit — what does not add up in this chat
   *
   * Dates that sit after the scene, lore filed under the wrong day, cast
   * standing in a room they have not spoken in for twenty turns. All of
   * it checkable, and all of it fixable in one press.
   * ------------------------------------------------------------------ */

  RP.QUIET_TURNS = 6;      // silence after which somebody is probably not here

  RP.auditRoom = function (state, room, archive) {
    var scene = RP.sceneDate(room, state, archive);
    var out = { scene: scene, dates: [], quiet: [], future: [], book: [] };
    var turns = (room.messages || []).filter(visible);

    // Cast who have not said a word, and are not being talked about.
    var recentText = turns.slice(-RP.QUIET_TURNS).map(function (m) { return RP.textOf(m); }).join(' ').toLowerCase();
    RP.presentCast(room).forEach(function (c) {
      if (c.id === room.youPlay) return;
      var lastSpoke = -1;
      turns.forEach(function (m, i) { if (m.role === 'char' && m.charId === c.id) lastSpoke = i; });
      var silence = lastSpoke < 0 ? turns.length : turns.length - 1 - lastSpoke;
      if (silence >= RP.QUIET_TURNS && recentText.indexOf(c.name.toLowerCase()) < 0) {
        out.quiet.push({ id: c.id, name: c.name, silence: silence });
      }
    });

    // The room's own date against the filing it came from.
    var record = archive ? RP.sourceRecord(room, archive) : null;
    if (record && record.date && scene) {
      var filed = RP.parseWahDate(record.date);
      if (filed && RP.dayOrdinal(filed) !== RP.dayOrdinal(scene)) {
        out.dates.push({
          what: 'the scene', is: RP.formatWahDate(scene), should: RP.formatWahDate(filed),
          why: 'the filing “' + clip(record.name, 60) + '” is dated ' + clip(record.date, 60),
        });
      }
    }

    // Lore-book pages filed under a date that is after the scene.
    ((state.book || {}).entries || []).forEach(function (page) {
      if (page.roomId !== room.id || !page.when || !scene) return;
      var rel = RP.timeRelation(scene, page.when);
      if (rel.rel === 'future') out.book.push({ id: page.id, name: page.name, when: page.when });
    });

    out.ok = !out.dates.length && !out.quiet.length && !out.book.length;
    return out;
  };

  /** Fix what the audit found: correct the date, write the silent out of
   *  the scene, and re-stamp any page filed in the future. */
  RP.applyAudit = function (state, room, report, opts) {
    opts = opts || {};
    var done = [];
    if (opts.dates !== false && report.dates.length) {
      room.date = report.dates[0].should;
      done.push('dated the scene ' + room.date);
    }
    if (opts.quiet !== false) {
      report.quiet.forEach(function (who) {
        RP.setPresent(room, who.id, false);
        done.push(who.name + ' is no longer in the scene');
      });
    }
    if (opts.book !== false && report.book.length) {
      var stamp = room.date || (report.scene ? RP.formatWahDate(report.scene) : '');
      ((state.book || {}).entries || []).forEach(function (page) {
        if (report.book.some(function (b) { return b.id === page.id; })) page.when = stamp;
      });
      done.push(report.book.length + ' page' + (report.book.length === 1 ? '' : 's') + ' re-dated');
    }
    room.updated = Date.now();
    return done;
  };

  /* ------------------------------------------------------------------ *
   * privacy, presence, and talking to the model out of character
   *
   * A quiet moment is not an invitation for three people to walk in. Who
   * can speak is decided by who is actually PRESENT, and by whether the
   * scene is private — and the player can say so directly, in brackets,
   * without breaking the fiction on the page.
   * ------------------------------------------------------------------ */

  /** Out-of-character instructions in a turn: ((like this)), /ooc like
   *  this, or [[OOC: like this]]. They are pulled out of the prose and
   *  handed to the model as orders, not as something a character said. */
  RP.parseOoc = function (text) {
    var notes = [];
    // One pass, so the notes come back in the order they were written.
    var clean = String(text || '').replace(
      /\(\(([^)]*)\)\)|\[\[\s*OOC\s*:\s*([^\]]*)\]\]|^[ \t]*\/ooc[ \t]+(.*)$/gim,
      function (all, a, b, c) {
        notes.push(String(a || b || c || '').trim());
        return '';
      })
      .replace(/[ \t]{2,}/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    return { clean: clean, notes: notes.filter(Boolean).map(function (n) { return clip(n, 300); }) };
  };

  /** Everything the player has told the model directly: the standing note
   *  for this chat, the global one, and anything said in brackets on this
   *  turn. Never trimmed — instructions outrank reference material. */
  RP.oocBlock = function (state, room, turnNotes) {
    var lines = [];
    var global = clip((state.settings && state.settings.note) || '', 400);
    var here = clip((room && room.note) || '', 400);
    if (global) lines.push(global);
    if (here) lines.push(here);
    (turnNotes || []).forEach(function (n) { lines.push(n); });
    if (!lines.length) return '';
    return [
      'INSTRUCTIONS FROM THE PLAYER (out of character) — these outrank everything else in this prompt.',
      'They are not spoken aloud, nobody in the scene hears them, and you never refer to them.',
      lines.map(function (l) { return '- ' + l; }).join('\n'),
    ].join('\n');
  };

  /* ---- presence: who is actually in the room ---- */

  /** Cast members who have not been written out of the scene. */
  RP.presentCast = function (room) {
    var states = (room && room.states) || {};
    return (room.cast || []).filter(function (c) {
      var sheet = states[c.id];
      return !sheet || sheet.present !== false;
    });
  };

  RP.setPresent = function (room, charId, present) {
    RP.ensureSheets(room);
    var sheet = room.states[charId];
    if (!sheet) return null;
    sheet.present = present === undefined ? sheet.present === false : Boolean(present);
    if (!sheet.present && room.next === charId) room.next = '';
    room.updated = Date.now();
    return sheet.present;
  };

  /* ---- privacy: a quiet moment stays quiet ---- */

  var PRIVATE_RE = /\b(to myself|under my breath|quietly|silently|privately|alone|in my head|without looking up|do not look up|don'?t look up|mutter|whisper|think to myself)\b/i;
  var PUBLIC_RE = /\b(shout|yell|call out|announce|says? to|ask(?:s|ed)? (?:him|her|them|everyone)|turn to|address)\b/i;

  /** Does this turn read as private? Used to stop the sequencer walking
   *  three people into somebody reading their own notes at midnight. */
  RP.privacyHint = function (text) {
    var t = String(text || '');
    if (PUBLIC_RE.test(t)) return 'open';
    if (PRIVATE_RE.test(t)) return 'private';
    return '';
  };

  /** Is the scene closed to other voices right now? The room's own setting
   *  wins; otherwise the turn decides. */
  RP.isPrivate = function (room, text) {
    if (room && room.privacy === 'private') return true;
    if (room && room.privacy === 'open') return false;
    return RP.privacyHint(text) === 'private';
  };

  /* ------------------------------------------------------------------ *
   * the sequencer — you write, the scene answers, the scene stops
   *
   * The director picks one speaker at a time, which makes a six-hander
   * feel like a queue. The sequencer plans the whole beat: who answers
   * this turn, in what order, and then it hands back. One planning call
   * buys several turns of reply.
   * ------------------------------------------------------------------ */

  RP.SEQUENCE_MAX = 4;

  RP.sequencePrompt = function (room, state, opts) {
    opts = opts || {};
    var cast = RP.speakableCast(room);
    var lastTurn = ((room.messages || []).filter(function (m) { return m.role === 'user'; }).pop() || {});
    var recent = RP.historyFor(room, 6).map(function (m) {
      return (m.role === 'user' ? 'PLAYER: ' : '') + clip(m.content, 300);
    }).join('\n');
    var you = RP.playerCharacter(room);
    return [
      'You are staging one beat of a group scene. Decide who reacts to what the player just did — and who does not.',
      '',
      'THE PEOPLE WHO CAN SPEAK',
      cast.map(function (c) { return '- ' + c.name + (c.title ? ' — ' + c.title : ''); }).join('\n'),
      you ? '\nThe player is playing ' + you.name + '. Never put them in the order.' : '',
      ((state.settings && state.settings.world) !== 'off')
        ? 'You may also use THE WORLD, which is narration: the place, the weather, an arrival, a noise.' : '',
      '',
      'THE LAST FEW TURNS',
      recent,
      '',
      'Answer with ONE line and nothing else:',
      'ORDER: Name, Name, WORLD',
      '  — the people who should react, in the order they should speak, at most ' +
        Math.min(RP.SEQUENCE_MAX, cast.length + 1) + '.',
      'NOBODY',
      '  — when the scene is waiting on the player and nothing needs answering.',
      '',
      'Rules: only people who have a REASON to speak right now — being addressed, contradicted, threatened, or ' +
      'unable to let it stand. Silence is a choice; two people is usually plenty, and one is common. Never list the ' +
      'same person twice.',
      '',
      'READ THE ROOM. A private moment is not an invitation. If the player is reading to themselves, muttering, ' +
      'thinking, grieving, hiding, or plainly alone with something, the answer is NOBODY or WORLD — do not have ' +
      'somebody materialise to comment on it. Only stage a character who is ALREADY in the scene and close enough ' +
      'to hear; nobody walks in from off-stage to deliver a line.',
      RP.privacyHint(RP.textOf(lastTurn)) === 'private'
        ? 'This turn reads as private. Unless somebody in the scene is being directly addressed, answer NOBODY.' : '',
    ].filter(Boolean).join('\n');
  };

  /** Read the staging back as a list of ids. Anything unrecognised means
   *  nobody speaks, which is the safe answer. */
  RP.parseSequence = function (text, room, state) {
    var raw = String(text || '').trim();
    if (/^\s*NOBODY\s*$/im.test(raw)) return { order: [], reason: 'nobody had to answer that', silent: true };
    var line = /ORDER\s*:\s*([^\n]+)/i.exec(raw);
    // An answer that is not in the format is not a decision to say nothing —
    // it is a model that rambled. The caller falls back to one speaker.
    if (!line) return { order: [], reason: 'the staging could not be read', unparsed: true };
    var cast = RP.speakableCast(room);
    var worldOn = !state || (state.settings && state.settings.world) !== 'off';
    var seen = {}, order = [];
    line[1].split(/[,;]|\band\b|→|->/).forEach(function (part) {
      var want = part.replace(/["'.*\d)]/g, '').trim().toLowerCase();
      if (!want || order.length >= RP.SEQUENCE_MAX) return;
      if (/^(world|the world|narration)$/.test(want)) {
        if (worldOn && !seen.world) { seen.world = 1; order.push('world'); }
        return;
      }
      var hit = cast.filter(function (c) {
        var name = c.name.toLowerCase();
        return name === want || name.indexOf(want) >= 0 || want.indexOf(name) >= 0;
      })[0];
      if (hit && !seen[hit.id]) { seen[hit.id] = 1; order.push(hit.id); }
    });
    return { order: order, reason: order.length ? 'staged' : 'nobody had to answer that' };
  };

  /* ------------------------------------------------------------------ *
   * branching and undo — the timeline is not a one-way street
   * ------------------------------------------------------------------ */

  /** Copy a chat up to and including one message. The original is left
   *  exactly as it was: this is a fork, not a rewrite. */
  RP.forkRoom = function (state, room, messageId, opts) {
    opts = opts || {};
    var at = (room.messages || []).map(function (m) { return m.id; }).indexOf(messageId);
    if (at < 0) at = (room.messages || []).length - 1;
    var copy = JSON.parse(JSON.stringify(room));
    copy.id = uid();
    copy.title = clip(opts.title || (room.title + ' — branch'), 90);
    copy.messages = copy.messages.slice(0, at + 1).map(function (m) {
      m.id = uid();
      return m;
    });
    copy.branchOf = room.id;
    copy.branchAt = messageId;
    copy.created = Date.now();
    copy.updated = Date.now();
    copy.bookAt = Math.min(Number(room.bookAt || 0), copy.messages.filter(visible).length);
    copy.undo = [];
    state.rooms = [copy].concat(state.rooms || []);
    return copy;
  };

  RP.UNDO_DEPTH = 12;

  /** Remember where the chat was before something changed it. */
  RP.pushUndo = function (room, label) {
    room.undo = room.undo || [];
    room.undo.push({
      label: clip(label, 60), at: Date.now(),
      messages: JSON.stringify(room.messages || []),
      states: JSON.stringify(room.states || {}),
      cast: JSON.stringify(room.cast || []),
    });
    if (room.undo.length > RP.UNDO_DEPTH) room.undo = room.undo.slice(-RP.UNDO_DEPTH);
    room.redo = [];              // a new action forks away from any redo
    return room.undo.length;
  };

  function restore(room, snap) {
    room.messages = JSON.parse(snap.messages);
    room.states = JSON.parse(snap.states);
    room.cast = JSON.parse(snap.cast);
    room.updated = Date.now();
  }

  RP.undo = function (room) {
    if (!(room.undo || []).length) return null;
    var snap = room.undo.pop();
    (room.redo = room.redo || []).push({
      label: snap.label, at: Date.now(),
      messages: JSON.stringify(room.messages || []),
      states: JSON.stringify(room.states || {}),
      cast: JSON.stringify(room.cast || []),
    });
    restore(room, snap);
    return snap.label || 'the last change';
  };

  RP.redo = function (room) {
    if (!(room.redo || []).length) return null;
    var snap = room.redo.pop();
    (room.undo = room.undo || []).push({
      label: snap.label, at: Date.now(),
      messages: JSON.stringify(room.messages || []),
      states: JSON.stringify(room.states || {}),
      cast: JSON.stringify(room.cast || []),
    });
    restore(room, snap);
    return snap.label || 'that';
  };

  /* ------------------------------------------------------------------ *
   * the player's own persona — one sheet, every chat
   * ------------------------------------------------------------------ */

  RP.personaSheet = function (state) {
    state.persona = state.persona || {};
    var p = state.persona;
    p.name = p.name || '';
    p.look = p.look || '';
    p.voice = p.voice || '';
    p.items = p.items || [];
    p.notes = p.notes || '';
    p.hp = p.hp || null;
    return p;
  };

  /** The block that tells the model who you are. Works whether you play an
   *  archive character, your own invention, or nobody in particular. */
  RP.personaBlock = function (persona, state, room) {
    var text = String(persona || '').trim();
    var sheet = state ? RP.personaSheet(state) : null;
    var starred = room ? RP.playerCharacter(room) : null;
    var lines = [];
    if (sheet && sheet.name) {
      lines.push(sheet.name + (sheet.voice ? ' — ' + sheet.voice : ''));
      if (sheet.look) lines.push('Looks like: ' + sheet.look);
      // The kit of record is the live player sheet when the room keeps
      // one — the persona's list only seeds it. Reading the sheet here
      // means the prompt can never say "carrying the key" after the key
      // was handed over three turns ago.
      var live = room && state ? RP.ensurePlayerSheet(state, room) : null;
      // When the reader plays a starred cast member, that character's kit
      // is already on the sheets — here we still describe the persona.
      if (live && live.id !== RP.PLAYER_ID) live = null;
      var kit = (live ? live.items : sheet.items) || [];
      if (kit.length) {
        lines.push('Carrying: ' + kit.map(function (i) {
          var it = RP.normItem(i);
          return it.icon + ' ' + it.name + (it.note ? ' (' + it.note + ')' : '');
        }).join(', '));
      }
      if (sheet.notes) lines.push(sheet.notes);
    }
    if (starred) lines.push('In this scene they are playing ' + starred.name + '.');
    if (text) lines.push(text);
    if (!lines.length) return '';
    return 'THE USER PLAYS\n' + lines.join('\n') +
      '\nAddress them as that person; never tell them what they do, say or decide.';
  };

  /* ------------------------------------------------------------------ *
   * keyword world info — exact lore, injected the moment it is named
   * ------------------------------------------------------------------ */

  /** A lore node or book page can carry trigger words. When one shows up
   *  in the recent turns, its text goes into the prompt verbatim, so the
   *  model cannot invent a different version of something established. */
  RP.addKeyword = function (state, entry) {
    state.keywords = state.keywords || [];
    var record = {
      id: entry.id || uid(),
      keys: String(entry.keys || '').split(',').map(function (k) { return k.trim(); }).filter(Boolean).slice(0, 8),
      text: clip(entry.text, 600),
      always: Boolean(entry.always),
      at: Date.now(),
    };
    if (!record.keys.length && !record.always) return null;
    state.keywords = state.keywords.filter(function (k) { return k.id !== record.id; });
    state.keywords.push(record);
    state.keywords = state.keywords.slice(-60);
    return record;
  };

  RP.removeKeyword = function (state, id) {
    state.keywords = (state.keywords || []).filter(function (k) { return k.id !== id; });
    return state.keywords.length;
  };

  /** Scan text for triggers. A key beginning and ending with `/` is a
   *  regular expression; everything else matches whole words, case-blind. */
  RP.keywordHits = function (state, text, limit) {
    var hay = ' ' + String(text || '').toLowerCase() + ' ';
    var out = [];
    (state.keywords || []).forEach(function (entry) {
      if (out.length >= (limit || 6)) return;
      if (entry.always) { out.push(entry); return; }
      var hit = entry.keys.some(function (key) {
        var re = /^\/(.+)\/([a-z]*)$/.exec(key);
        if (re) {
          try { return new RegExp(re[1], re[2] || 'i').test(text); } catch (e) { return false; }
        }
        var word = key.toLowerCase();
        var at = hay.indexOf(word);
        while (at >= 0) {
          var before = hay.charAt(at - 1), after = hay.charAt(at + word.length);
          if (!/[a-z0-9]/.test(before) && !/[a-z0-9]/.test(after)) return true;
          at = hay.indexOf(word, at + 1);
        }
        return false;
      });
      if (hit) out.push(entry);
    });
    return out;
  };

  RP.keywordBlock = function (state, text, limit) {
    var hits = RP.keywordHits(state, text, limit);
    if (!hits.length) return '';
    return 'ESTABLISHED FACTS ABOUT WHAT WAS JUST MENTIONED — use these exactly, do not invent around them\n' +
      hits.map(function (entry) {
        return '- ' + (entry.keys.length ? '[' + entry.keys[0] + '] ' : '') + entry.text;
      }).join('\n');
  };

  /* ------------------------------------------------------------------ *
   * taste — 👍 and 👎 are training data, not decoration
   *
   * A thumb that only colours in is a wasted signal. Every rating keeps a
   * short excerpt, and those excerpts go back into the prompt: more like
   * the ones you kept, less like the ones you did not.
   * ------------------------------------------------------------------ */

  RP.TASTE_KEEP = 10;      // excerpts held per side

  function tasteState(state) {
    state.taste = state.taste || { likes: [], dislikes: [], chars: {} };
    state.taste.likes = state.taste.likes || [];
    state.taste.dislikes = state.taste.dislikes || [];
    state.taste.chars = state.taste.chars || {};
    return state.taste;
  }
  RP.tasteState = tasteState;

  /** Record a rating. Rating the same message again clears it, and a
   *  rating moves the excerpt from one pile to the other. */
  RP.rate = function (state, room, msg, value) {
    var taste = tasteState(state);
    var text = clip(RP.textOf(msg).replace(/\s+/g, ' '), 320);
    var id = String(msg.id || '');
    function drop(list) { return list.filter(function (x) { return x.id !== id; }); }
    taste.likes = drop(taste.likes);
    taste.dislikes = drop(taste.dislikes);
    msg.react = msg.react === value ? '' : value;
    var per = taste.chars[msg.charId] || (taste.chars[msg.charId] = { up: 0, down: 0 });
    if (msg.react === 'up') {
      taste.likes.push({ id: id, charId: msg.charId, text: text, words: text.split(/\s+/).length, at: Date.now() });
      per.up++;
    } else if (msg.react === 'down') {
      taste.dislikes.push({ id: id, charId: msg.charId, text: text, words: text.split(/\s+/).length, at: Date.now() });
      per.down++;
    }
    taste.likes = taste.likes.slice(-RP.TASTE_KEEP);
    taste.dislikes = taste.dislikes.slice(-RP.TASTE_KEEP);
    return msg.react;
  };

  function averageWords(list) {
    if (!list.length) return 0;
    var total = 0;
    list.forEach(function (x) { total += Number(x.words || 0); });
    return Math.round(total / list.length);
  }

  /** What the model is told about the reader's taste. Excerpts from this
   *  room's cast come first, because taste is partly about who is speaking. */
  RP.tasteBlock = function (state, room, limit) {
    var taste = tasteState(state);
    if (!taste.likes.length && !taste.dislikes.length) return '';
    var ids = ((room && room.cast) || []).map(function (c) { return c.id; });
    var cap = limit || 4;
    function pick(list) {
      // Newest first within each group, and the people in this room win the
      // places — taste is partly about who is speaking.
      var mine = list.filter(function (x) { return ids.indexOf(x.charId) >= 0; }).slice(-cap);
      var rest = list.filter(function (x) { return ids.indexOf(x.charId) < 0; })
        .slice(-Math.max(0, cap - mine.length));
      return mine.concat(rest).slice(0, cap);
    }
    var liked = pick(taste.likes), disliked = pick(taste.dislikes);
    var out = ['WHAT THIS READER KEEPS AND WHAT THEY THROW AWAY — this is feedback on YOUR writing, act on it'];
    if (liked.length) {
      out.push('They marked these GOOD. Write more like them — the same rhythm, register and level of detail:');
      liked.forEach(function (x) { out.push('  + “' + clip(x.text, 220) + '”'); });
    }
    if (disliked.length) {
      out.push('They marked these BAD. Do not write like this again:');
      disliked.forEach(function (x) { out.push('  - “' + clip(x.text, 220) + '”'); });
    }
    // The most useful signal is usually length, and it is the one a small
    // model can actually act on.
    var goodLen = averageWords(liked), badLen = averageWords(disliked);
    if (goodLen) {
      out.push('Their kept replies run about ' + goodLen + ' words. Aim for that.' +
        (badLen && badLen > goodLen * 1.4 ? ' The ones they threw away were much longer — do not pad.' : '') +
        (badLen && badLen < goodLen * 0.7 ? ' The ones they threw away were much shorter — do not be thin.' : ''));
    }
    return out.join('\n');
  };

  /** Per-character score, for the panel. */
  RP.tasteFor = function (state, charId) {
    var per = tasteState(state).chars[charId];
    return per ? { up: per.up || 0, down: per.down || 0 } : { up: 0, down: 0 };
  };

  /* ------------------------------------------------------------------ *
   * the lore book — written while you play, in a queue
   *
   * Roleplay invents faster than anyone files it: a tavern gets a name, a
   * courier gets a face, a debt gets agreed. The lore book catches all of
   * that in the background. A job is queued every few turns, one model
   * call runs at a time, and there is a hard budget so a laptop running a
   * 7B model does not fall over. Newest entries append at the BOTTOM: the
   * book reads forward, like a book.
   * ------------------------------------------------------------------ */

  RP.BOOK_KINDS = {
    place:  { label: 'Place',  icon: '📍' },
    person: { label: 'Person', icon: '👤' },
    event:  { label: 'Event',  icon: '⚑' },
    thing:  { label: 'Thing',  icon: '🗝' },
    fact:   { label: 'Fact',   icon: '§' },
    diary:  { label: 'Diary',  icon: '📔' },
  };

  RP.BOOK_MAX = 300;        // entries kept before the oldest are dropped
  RP.QUEUE_MAX = 6;         // jobs allowed to pile up
  RP.BOOK_BUDGET = 40;      // background calls allowed per browser session

  function bookState(state) {
    state.book = state.book || { entries: [], queue: [], spent: 0 };
    state.book.entries = state.book.entries || [];
    state.book.queue = state.book.queue || [];
    return state.book;
  }
  RP.bookState = bookState;

  /** File one entry at the bottom of the book. Same name and kind twice is
   *  an update, not a duplicate — the book grows, it does not repeat. */
  RP.bookAdd = function (state, entry) {
    var book = bookState(state);
    var name = clip(entry.name, 90);
    var kind = RP.BOOK_KINDS[entry.kind] ? entry.kind : 'fact';
    if (!name && kind !== 'diary') return null;
    var existing = book.entries.filter(function (e) {
      return e.kind === kind && e.name.toLowerCase() === name.toLowerCase();
    })[0];
    if (existing) {
      var add = clip(entry.text, 400);
      if (add && existing.text.toLowerCase().indexOf(add.toLowerCase()) < 0) {
        existing.text = clip(existing.text + ' ' + add, 700);
      }
      existing.seen = (existing.seen || 1) + 1;
      existing.updated = Date.now();
      if (entry.when && !existing.when) existing.when = clip(entry.when, 90);
      return existing;
    }
    var record = {
      id: entry.id || uid(),
      kind: kind,
      name: name || ('Diary — ' + clip(entry.when, 40)),
      text: clip(entry.text, 700),
      when: clip(entry.when, 90),          // in-world date
      at: entry.at || Date.now(),          // when it was played
      updated: Date.now(),
      roomId: String(entry.roomId || ''),
      roomTitle: clip(entry.roomTitle, 90),
      chars: (entry.chars || []).map(String).slice(0, 8),
      source: entry.source === 'you' ? 'you' : 'auto',
      seen: 1,
    };
    book.entries.push(record);            // newest at the bottom, always
    if (book.entries.length > RP.BOOK_MAX) book.entries = book.entries.slice(-RP.BOOK_MAX);
    return record;
  };

  /** Two pages about the same thing become one; thin pages that say
   *  nothing are dropped. Called when the book gets long. */
  RP.tidyBook = function (state, opts) {
    opts = opts || {};
    var book = bookState(state);
    var seen = {}, kept = [], dropped = 0, merged = 0;
    book.entries.forEach(function (page) {
      var key = page.kind + ':' + slug(page.name);
      // A "fact" that is just a sentence of scenery is not worth a page.
      var thin = page.kind === 'fact' && page.text.length < 45 && page.seen < 2;
      if (thin && !opts.keepThin) { dropped++; return; }
      if (seen[key]) {
        var first = seen[key];
        if (page.text && first.text.toLowerCase().indexOf(page.text.toLowerCase()) < 0) {
          first.text = clip(first.text + ' ' + page.text, 700);
        }
        first.seen = (first.seen || 1) + (page.seen || 1);
        merged++;
        return;
      }
      seen[key] = page;
      kept.push(page);
    });
    if (opts.max && kept.length > opts.max) {
      // Keep the diary and anything seen more than once, then the newest.
      var keepers = kept.filter(function (p) { return p.kind === 'diary' || (p.seen || 1) > 1; });
      var rest = kept.filter(function (p) { return keepers.indexOf(p) < 0; });
      kept = keepers.concat(rest.slice(-(opts.max - keepers.length))).sort(function (a, b) { return a.at - b.at; });
    }
    var before = book.entries.length;
    book.entries = kept;
    return { before: before, after: kept.length, merged: merged, dropped: dropped };
  };

  RP.bookRemove = function (state, id) {
    var book = bookState(state);
    book.entries = book.entries.filter(function (e) { return e.id !== id; });
    return book.entries.length;
  };

  /** What the model is shown: everything about this cast and this room, then
   *  the most recent pages, because a book you cannot fit in the prompt is
   *  a book nobody reads. */
  RP.bookBlock = function (state, room, limit) {
    var book = bookState(state);
    if (!book.entries.length) return '';
    var ids = (room.cast || []).map(function (c) { return c.id; });
    var scene = ((room.scene || '') + ' ' + (room.sceneName || '')).toLowerCase();
    function relevant(e) {
      if (e.roomId === room.id) return 3;
      if ((e.chars || []).some(function (id) { return ids.indexOf(id) >= 0; })) return 2;
      if (e.name && scene.indexOf(e.name.toLowerCase()) >= 0) return 2;
      return 1;
    }
    var picked = book.entries.slice().map(function (e, i) {
      return { e: e, score: relevant(e) * 1000 + i };
    }).sort(function (a, b) { return b.score - a.score; })
      .slice(0, limit || 18).map(function (x) { return x.e; })
      .sort(function (a, b) { return book.entries.indexOf(a) - book.entries.indexOf(b); });
    var diary = picked.filter(function (e) { return e.kind === 'diary'; });
    var pages = picked.filter(function (e) { return e.kind !== 'diary'; });
    var out = ['THE LORE BOOK — everything below was established in play and is TRUE. Stay consistent with it.'];
    pages.forEach(function (e) {
      out.push('- ' + (RP.BOOK_KINDS[e.kind] || {}).label + ': ' + e.name + (e.when ? ' (' + e.when + ')' : '') +
        (e.text ? ' — ' + e.text : ''));
    });
    if (diary.length) {
      out.push('', 'THE DIARY — how the days have gone so far');
      diary.forEach(function (e) { out.push('- ' + (e.when ? e.when + ': ' : '') + e.text); });
    }
    return out.join('\n');
  };

  /* ---- the queue ---- */

  RP.queuePush = function (state, job) {
    var book = bookState(state);
    if (book.queue.length >= RP.QUEUE_MAX) return null;         // back pressure
    if (book.queue.some(function (j) { return j.key === job.key; })) return null;
    var record = {
      id: uid(), key: String(job.key || uid()), kind: job.kind || 'extract',
      roomId: String(job.roomId || ''), roomTitle: clip(job.roomTitle, 90),
      when: clip(job.when, 90), at: Date.now(), turns: job.turns || [],
    };
    book.queue.push(record);
    return record;
  };

  RP.queueNext = function (state) { return bookState(state).queue[0] || null; };

  RP.queueDone = function (state, id, spent) {
    var book = bookState(state);
    book.queue = book.queue.filter(function (j) { return j.id !== id; });
    if (spent) book.spent = (book.spent || 0) + 1;
    return book.queue.length;
  };

  /** Is there budget left for another background call? */
  RP.bookBudgetLeft = function (state) {
    var book = bookState(state);
    var cap = (state.settings && state.settings.bookBudget) || RP.BOOK_BUDGET;
    return Math.max(0, cap - (book.spent || 0));
  };

  /* ---- the extraction prompt (its own small call, not the roleplay one) ---- */

  RP.extractPrompt = function (room, turns, known) {
    return [
      'You are the archivist for a roleplay session. Read the turns below and file ONLY what is newly established.',
      '',
      'THE SCENE: ' + clip(room.sceneName || room.title, 120) + (room.date ? ' — ' + room.date : ''),
      'WHO IS IN IT: ' + (room.cast || []).map(function (c) { return c.name; }).join(', '),
      (known && known.length ? 'ALREADY IN THE BOOK (do not file these again): ' + known.slice(0, 40).join('; ') : ''),
      '',
      'THE TURNS',
      turns.map(function (t) { return t.who + ': ' + clip(t.text, 400); }).join('\n'),
      '',
      'Write one line per entry, in exactly these formats, and nothing else:',
      'PLACE: name | what it is, in one sentence',
      'PERSON: name | who they are and what they want',
      'EVENT: name | what happened, concretely',
      'THING: name | what it is and who has it',
      'FACT: the thing that is now true',
      'DIARY: one short paragraph, past tense, recording how this stretch went',
      '',
      'Rules: only things the turns actually establish — no speculation, no restating the scene description, ',
      'nothing already in the book. Names must be the names used in the turns. At most six lines, and one DIARY.',
      'If the turns established nothing new, reply with exactly: NONE',
    ].filter(Boolean).join('\n');
  };

  /** Read the archivist's answer back into entries. Anything malformed is
   *  dropped rather than filed as nonsense. */
  RP.parseExtract = function (text) {
    var out = [];
    String(text || '').split(/\r?\n/).forEach(function (line) {
      var hit = /^\s*(PLACE|PERSON|EVENT|THING|FACT|DIARY)\s*:\s*(.+)$/i.exec(line.replace(/^[-*\d.\s]+/, ''));
      if (!hit) return;
      var kind = hit[1].toLowerCase(), body = hit[2].trim();
      if (!body || /^none$/i.test(body)) return;
      if (kind === 'diary') { out.push({ kind: 'diary', name: '', text: body }); return; }
      if (kind === 'fact') { out.push({ kind: 'fact', name: clip(body.split(/[.!?]/)[0], 80), text: body }); return; }
      var parts = body.split('|');
      var name = clip(parts[0], 90);
      if (!name || name.length < 2) return;
      out.push({ kind: kind, name: name, text: clip(parts.slice(1).join('|'), 400) });
    });
    return out.slice(0, 7);
  };

  /* ------------------------------------------------------------------ *
   * citations — any file in the archive, if the date checks out
   * ------------------------------------------------------------------ */

  /** One searchable index over everything the page has loaded. Records with
   *  a readable date carry it; people and bodies are standing records and
   *  are always citable. */
  RP.buildIndex = function (archive, castById) {
    var out = [];
    (archive.events || []).forEach(function (e) {
      // `body` is what search quotes from: the filing's own prose, not a
      // summary of it. Nothing reads the whole file — the search finds the
      // paragraph and hands over that.
      var body = [e.summary, e.description, e.outcome, e.aftermath].filter(Boolean).join('\n\n');
      out.push({
        id: e.id, name: e.name, kind: 'event', date: RP.parseWahDate(e.timeCode || e.date),
        text: clip(e.summary, 300), where: clip(e.location, 90),
        body: String(body).slice(0, 4000),
        words: ((e.name || '') + ' ' + body + ' ' + (e.location || '') + ' ' + (e.era || '')).toLowerCase().slice(0, 6000),
      });
    });
    (archive.factions || []).forEach(function (f) {
      var body = [f.summary, f.description].filter(Boolean).join('\n\n');
      out.push({
        id: f.id, name: f.name, kind: 'faction', date: null, standing: true,
        text: clip(f.summary, 300), body: String(body).slice(0, 4000),
        words: ((f.name || '') + ' ' + body + ' ' + (f.region || '')).toLowerCase().slice(0, 6000),
      });
    });
    (archive.whatifs || []).forEach(function (w) {
      out.push({
        id: w.id, name: w.title, kind: 'what-if', date: null, noncanon: true,
        text: clip(w.summary, 260),
        words: ((w.title || '') + ' ' + (w.summary || '')).toLowerCase(),
      });
    });
    Object.keys(castById || {}).forEach(function (k) {
      var c = castById[k];
      var body = [c.title, c.status, c.summary, c.description].filter(Boolean).join('\n\n');
      out.push({
        id: c.id, name: c.name, kind: 'character', date: null, standing: true,
        text: clip(c.title + '. ' + c.summary, 260), body: String(body).slice(0, 4000),
        words: ((c.name || '') + ' ' + body + ' ' + (c.affiliation || '')).toLowerCase().slice(0, 6000),
      });
    });
    (archive.posts || []).forEach(function (p) {
      out.push({
        id: p.id, name: 'WAHwire — ' + clip(p.authorName, 40), kind: 'wire', date: RP.parseWahDate(p.timestamp),
        text: clip(p.content, 260),
        words: ((p.authorName || '') + ' ' + (p.content || '') + ' ' + (p.tags || []).join(' ')).toLowerCase(),
      });
    });
    return out.filter(function (r) { return r.id && r.name; });
  };

  /** Records this scene is allowed to cite: dated at or before the scene, or
   *  a standing record (a person, a body) with no date to fail. Anything
   *  dated later is returned separately so the prompt can forbid it by name. */
  RP.citableFor = function (index, room, state, opts) {
    opts = opts || {};
    var scene = RP.sceneDate(room, state);
    var terms = String(opts.query || '').toLowerCase().split(/[^a-z0-9]+/)
      .filter(function (t) { return t.length > 3; }).slice(0, 24);
    var castNames = (room.cast || []).map(function (c) { return c.name.toLowerCase(); });
    var ok = [], blocked = [];
    (index || []).forEach(function (r) {
      if (r.noncanon) return;
      var rel = r.date && scene ? RP.timeRelation(scene, r.date) : null;
      var score = 0;
      castNames.forEach(function (n) { if (r.words.indexOf(n) >= 0) score += 3; });
      terms.forEach(function (t) { if (r.words.indexOf(t) >= 0) score += 1; });
      if (rel && rel.rel === 'future') {
        if (score > 0) blocked.push({ r: r, rel: rel, score: score });
        return;
      }
      if (score <= 0) return;
      if (rel && rel.rel === 'past') score += 1;             // dated and behind us: solid ground
      ok.push({ r: r, rel: rel, score: score });
    });
    function take(list, n) {
      return list.sort(function (a, b) { return b.score - a.score; }).slice(0, n);
    }
    return { scene: scene, citable: take(ok, opts.limit || 10), blocked: take(blocked, 4) };
  };

  /** The prompt block. Ids are included so a character can name the filing
   *  they are quoting instead of inventing a source. */
  RP.citationBlock = function (found) {
    if (!found || (!found.citable.length && !found.blocked.length)) return '';
    var out = [];
    if (found.citable.length) {
      out.push('FILES YOU MAY CITE — real records, and the dates check out against this scene');
      found.citable.forEach(function (x) {
        out.push('- [' + x.r.kind + ':' + x.r.id + '] ' + x.r.name +
          (x.r.date ? ' (' + RP.formatWahDate(x.r.date) + ', ' + x.rel.label + ')' : ' (standing record)') +
          ' — ' + x.r.text);
      });
      out.push('Refer to these by name when it is natural. Never invent a filing, a date or a quotation.');
    }
    if (found.blocked.length) {
      out.push('', 'FILED, BUT NOT YET — these exist in the archive and are dated AFTER this scene. ' +
        'Nobody here can know them:');
      found.blocked.forEach(function (x) { out.push('- ' + x.r.name + ' (' + RP.formatWahDate(x.r.date) + ')'); });
    }
    return out.join('\n');
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
  RP.sceneDate = function (room, state, archive) {
    return RP.parseWahDate(room && (room.date || room.sceneDate))
      || RP.parseWahDate(room && room.sceneName)
      // A scene played out of a filing is dated by that filing, not by the
      // world clock: "The Tape and the Wario Files" is 1035 BF, not today.
      || RP.parseWahDate(((archive && RP.sourceRecord(room, archive)) || {}).date)
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
    // The player's own numbers lean on the dice — this is the one place
    // the pseudo-stats are spent, so the prompt never has to argue them.
    var statTag = '';
    var you = (room.states || {})[RP.PLAYER_ID] || (room.youPlay ? (room.states || {})[room.youPlay] : null);
    var stat = opts.text ? RP.actionStat(opts.text) : '';
    if (you && you.stats && stat) {
      var score = Number(you.stats[stat] || 0);
      var lean = (score - 1) * 1.4;           // 0 → against, 1 → neutral, 3 → in favour
      if (lean > 0) {
        weights.triumph += lean * 1.5;
        weights.success += lean * 3;
        weights.setback = Math.max(1, weights.setback - lean * 2);
        weights.wrench = Math.max(1, weights.wrench - lean);
      } else if (lean < 0) {
        var drop = -lean;
        weights.triumph = Math.max(1, weights.triumph - drop * 1.5);
        weights.success = Math.max(2, weights.success - drop * 3);
        weights.setback += drop * 2;
        weights.wrench += drop;
      }
      statTag = ' · ' + RP.STAT_ICONS[stat] + ' ' + stat + ' ' + score;
    }
    // Claiming a bazooka you do not have is a bluff, and the dice know it.
    if (opts.conjured) {
      weights.triumph = Math.max(1, weights.triumph - 4);
      weights.success = Math.max(2, weights.success - 8);
      weights.setback += 8;
      weights.refusal += 6;
      statTag += ' · 🚫 out of thin air';
    }
    var roll = opts.roll === undefined ? Math.random() : opts.roll;
    var key = opts.force || pickWeighted(weights, roll);
    var fate = RP.FATE[key];
    return { key: key, label: fate.label, pill: fate.pill + statTag, dir: fate.dir, level: level, pressure: pressure, stat: stat, statTag: statTag };
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
    var persona = RP.personaBlock(room.persona || (state.user && state.user.persona) || '', state, room);
    if (persona) parts.push(persona);
    if (room.kind !== 'group' && room.scene) parts.push('THE SCENE\n' + room.scene);
    var perspective = RP.perspectiveBlock(room);
    if (perspective) parts.push(perspective);

    // Reference material — trimmed first when the window is tight.
    var source = RP.sourceBlock(room, opts.archive);
    if (source) parts.push(source);
    var keywords = RP.keywordBlock(state, opts.recent || RP.historyFor(room, 4).map(function (m) { return m.content; }).join(' '));
    if (keywords) parts.push(keywords);
    var sceneFacts = RP.factsBlock(room);
    if (sceneFacts) parts.push(sceneFacts);
    var knowledge = RP.knowledgeBlock(state, room, opts.archive);
    if (knowledge) parts.push(knowledge);
    var book = RP.bookBlock(state, room);
    if (book) parts.push(book);
    var taste = RP.tasteBlock(state, room);
    if (taste) parts.push(taste);
    if (opts.citations) parts.push(opts.citations);
    var script = RP.scriptBlock(room);
    if (script) parts.push(script);
    var lore = RP.loreBlock(state, room.cast, room);
    if (lore) parts.push(lore);
    var recap = RP.recapBlock(room);
    if (recap) parts.push(recap);
    var memory = RP.memoryBlock(state, room.cast, room);
    if (memory) parts.push(memory);

    // Everything from here is an instruction for THIS turn and is never
    // dropped to save room: the rules of the scene outrank the reading.
    var protectedFrom = parts.length;
    var continuation = RP.continuationBlock(room);
    if (continuation) parts.push(continuation);
    if (room.mechanics !== 'off') {
      var sheets = RP.stateBlock(room, RP.normChar(speaker || {}).id);
      if (sheets) parts.push(sheets);
      var named = RP.mentionBlock(room, opts.mentionText || '');
      if (named) parts.push(named);
      var thinAir = RP.conjureBlock(opts.conjured);
      if (thinAir) parts.push(thinAir);
      parts.push(RP.DIRECTIVES);
    }
    var fateBlock = RP.fateBlock(opts.fate);
    if (fateBlock) parts.push(fateBlock);
    var ooc = RP.oocBlock(state, room, opts.notes);
    if (ooc) parts.push(ooc);
    parts.push(RP.lengthBlock((state.settings && state.settings.length) || 'snappy', false).text);
    return RP.fitPrompt(parts, opts.budget, protectedFrom);
  };

  // A local model has a context window and the server refuses anything over
  // 32k characters, so the prompt is budgeted rather than hoped about. The
  // default suits a small window; Settings can raise it for a bigger model.
  RP.PROMPT_BUDGET = 11000;
  RP.PROMPT_BUDGET_MAX = 30000;

  /* ---- the history, packed by characters rather than counted by turns.
   * A long chat should cost turns, not paragraphs: one 6,000-character
   * monologue used to crowd out ten normal turns and slow the model to a
   * crawl. Newest turns first, each clipped to a sane length, packed into
   * a character budget — the turn COUNT limit still applies on top. ---- */

  RP.HISTORY_BUDGET = 6500;
  RP.TURN_CLIP = 1600;
  RP.OLD_CLIP = 450;        // what a turn is worth once it is old news

  RP.packHistory = function (messages, budget, minTurns) {
    var cap = Number(budget) || RP.HISTORY_BUDGET;
    var floor = minTurns === undefined ? 6 : minTurns;
    var out = [], used = 0;
    for (var i = (messages || []).length - 1; i >= 0; i--) {
      var m = messages[i];
      var content = String(m.content || '');
      // The last few turns arrive whole; older ones are clipped hard.
      // A Director monologue from ten turns ago earns a paragraph, not
      // sixteen hundred characters of prefill every turn since.
      var turnCap = out.length < floor ? RP.TURN_CLIP : RP.OLD_CLIP;
      if (content.length > turnCap) content = clip(content, turnCap);
      if (used + content.length > cap && out.length >= floor) break;
      out.unshift(content === m.content ? m : { role: m.role, content: content });
      used += content.length;
    }
    return out;
  };

  /** Assemble the prompt inside the budget. The character card, the rules
   *  and the turn's own instructions are never dropped; the reference
   *  material at the back is trimmed, oldest lines first, until it fits. */
  RP.fitPrompt = function (parts, budget, protectedFrom) {
    var cap = budget || RP.PROMPT_BUDGET;
    var keepFrom = protectedFrom === undefined ? parts.length : protectedFrom;
    var text = parts.join('\n\n');
    if (text.length <= cap) return text;
    // Reference blocks, in the order they are sacrificed. Halving is
    // repeated before anything is dropped outright: a block cut to a
    // quarter still cites something, a block deleted cites nothing.
    var soft = ['FILES YOU MAY CITE', 'THE LORE BOOK', 'WHAT HAS ALREADY HAPPENED', 'ESTABLISHED LORE',
      'ALREADY HISTORY', 'THE MAIN EVENT', 'Filed description'];
    for (var pass = 0; pass < 3 && text.length > cap; pass++) {
      for (var i = 0; i < soft.length && text.length > cap; i++) {
        parts = parts.map(function (part, at) {
          if (at >= keepFrom || part.indexOf(soft[i]) < 0) return part;
          var lines = part.split('\n');
          if (lines.length < 4) return part;
          return lines.slice(0, Math.max(3, Math.floor(lines.length / 2))).join('\n') +
            '\n… (trimmed to fit the model\u2019s window)';
        });
        text = parts.join('\n\n');
      }
    }
    // Still too long: drop whole reference blocks, back to front, never
    // touching the character card at the head or the instructions at the end.
    var at = keepFrom - 1;
    while (text.length > cap && at > 0) {
      parts.splice(at, 1);
      keepFrom--; at--;
      text = parts.join('\n\n');
    }
    return text.length > cap ? text.slice(0, cap - 40) + '\n… (truncated)' : text;
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
      book: { entries: [], queue: [], spent: 0 },   // the lore book, written as you play
      persona: { name: '', look: '', voice: '', items: [], notes: '' },  // the player, across every chat
      keywords: [],        // trigger words → exact lore, injected on sight
      taste: { likes: [], dislikes: [], chars: {} },   // 👍 / 👎, fed back to the model
      episodes: [],        // commentary tracks, Waluigi and Luigi at length
      newChars: [],        // characters invented during play, described not drawn
      hooks: {},           // scenario id -> the opener the model wrote
      backfillUses: {},    // backfill id -> how many times it has been played
      usedPosts: {},   // wire post id -> where it was played
      settings: {
        style: 'novel', voice: 'off', temperature: 0.85, endpoint: '',
        director: 'on',            // let the model decide who speaks next
        length: 'snappy',          // snappy | normal | rich
        narrator: 'director',      // director | plain | terse | archivist
        world: 'on',               // let the world narrate when nobody else can
        autoplay: 0,               // turns to play on their own before stopping
        book: 'on',                // write the lore book in the background
        bookEvery: 3,              // …after every N played turns
        bookBudget: RP.BOOK_BUDGET,
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
        ['rooms', 'chars', 'lore', 'log', 'scenarios', 'newChars', 'episodes'].forEach(function (k) {
          if (Array.isArray(value[k])) state[k] = value[k];
        });
        if (typeof value.active === 'string') state.active = value.active;
        if (value.usedPosts && typeof value.usedPosts === 'object') state.usedPosts = value.usedPosts;
        if (value.hooks && typeof value.hooks === 'object') state.hooks = value.hooks;
        if (value.taste && typeof value.taste === 'object') state.taste = value.taste;
        if (value.persona && typeof value.persona === 'object') state.persona = value.persona;
        if (Array.isArray(value.keywords)) state.keywords = value.keywords;
        if (value.book && typeof value.book === 'object') {
          state.book = { entries: value.book.entries || [], queue: [], spent: 0 };
        }
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
      episodes: (state.episodes || []).slice(0, 20),
      taste: state.taste || { likes: [], dislikes: [], chars: {} },
      persona: state.persona || {},
      keywords: (state.keywords || []).slice(-60),
      // The queue is deliberately not saved: unfinished background work
      // should not come back to life on the next page load.
      book: { entries: (state.book && state.book.entries) || [], queue: [], spent: 0 },
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
      bundle.book = (state.book && state.book.entries) || [];
      bundle.episodes = state.episodes || [];
      bundle.taste = state.taste || null;
      bundle.keywords = state.keywords || [];
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
      // A chat that is already on file is not a failure — it is a merge.
      // Count what actually happened so the toast can tell the truth
      // instead of “Imported 0 chats” over a perfectly good bundle.
      stats.roomsUpdated = 0;   // the bundle's copy was newer and replaced ours
      stats.roomsSame = 0;      // already on file, ours as new or newer — kept
      if (!replace) {
        var have = {};
        (state.rooms || []).forEach(function (r) { if (r && r.id) have[r.id] = r; });
        (data.rooms || []).forEach(function (r) {
          if (!r || !r.id || !have[r.id]) return;
          if ((r.updated || 0) > (have[r.id].updated || 0)) stats.roomsUpdated++;
          else stats.roomsSame++;
        });
      }
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
    if (Array.isArray(data.keywords)) {
      state.keywords = mergeById(state.keywords || [], data.keywords, function (a, b) { return b; }).slice(-60);
    }
    if (data.persona && typeof data.persona === 'object' && replace) state.persona = data.persona;
    if (data.taste && typeof data.taste === 'object') {
      var mine = tasteState(state);
      state.taste = replace ? data.taste : {
        likes: mergeById(mine.likes, data.taste.likes || [], function (a, b) { return b; }).slice(-RP.TASTE_KEEP),
        dislikes: mergeById(mine.dislikes, data.taste.dislikes || [], function (a, b) { return b; }).slice(-RP.TASTE_KEEP),
        chars: Object.assign({}, mine.chars, data.taste.chars || {}),
      };
    }
    if (Array.isArray(data.episodes)) {
      state.episodes = mergeById(state.episodes || [], data.episodes, function (a, b) { return b; }).slice(0, 20);
    }
    if (Array.isArray(data.book)) {
      var bookNow = bookState(state);
      bookNow.entries = replace ? data.book : mergeById(bookNow.entries, data.book, function (a, b) { return b; });
      stats.book = bookNow.entries.length;
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
