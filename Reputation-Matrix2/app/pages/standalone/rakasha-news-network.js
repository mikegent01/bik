/* ============================================================
   RAKASHA NEWS NETWORK — BROADCAST PLAYER
   Renders a timed, frame-composited news broadcast from
   data/rnn-broadcasts.js using the sprites in animation_frames/
   (the Rakasha anchor) and portraits/player/sprite-sheets/poses/
   (the talk-show cast).

   No video file is encoded: the "video" is a scheduled sequence of
   sprite frames, captions, lower thirds and title cards played by
   this script. That keeps the broadcast diffable, regenerable and
   tiny in the repository.

   THE NETWORK FORMAT (from EP 003): the Rakasha desk opens with a
   cold bulletin, then hands the longhouse to WALUIGI CHAT — two
   chairs, a host, a rotating guest, and callers on the shell-phone.
   Old episodes keep their single-anchor stage.

   Regenerate episode data with:  python3 tools/build-rnn-broadcast.py
   ============================================================ */
(function () {
  'use strict';

  var FRAMES = '../../../animation_frames/';
  var POSES = '../../../portraits/player/sprite-sheets/poses/';
  var SETS = {
    newsdesk: FRAMES + 'background.png',
    talkset:  FRAMES + 'talkset.png'
  };

  var el = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  };

  /* ---------------- state ---------------- */
  var S = {
    episode: null,
    cues: [],          // flattened { segIndex, lineIndex, start, end, ... }
    total: 0,
    t: 0,              // playhead, ms
    playing: false,
    speed: 1,
    cue: -1,
    seg: -1,
    set: '',           // current set id ('newsdesk' | 'talkset')
    lastTick: 0,
    raf: 0,
    typed: -1,
    spokenCue: -1,
    holdStart: -1      // wall-clock ms when we began holding a cue for speech
  };

  /* ---------------- audio desk (rnn-audio.js, optional) ---------------- */
  function A() { return window.RNNAudio && window.RNNAudio.supported ? window.RNNAudio : null; }

  /* ---------------- cast resolution ----------------
     Every episode (old and new) ships a cast map:
       { waluigi: { name, role, art: { kind:'pose', dir:'.../waluigi/', defaultPose } } }
     Legacy episodes get one synthesized from the anchor fields. */
  function castOf(ep) {
    var cast = ep.cast || {};
    if (!cast.anchor) {
      cast = Object.assign({}, cast);
      cast.anchor = {
        name: ep.anchorName || 'ANCHOR',
        role: ep.anchorRole || '',
        art: { kind: 'frames', dir: 'animation_frames/' }
      };
    }
    return cast;
  }

  function resolveSpeaker(ep, seg, line) {
    var cast = castOf(ep);
    var sid = line.speaker || (seg.type === 'field' ? 'field' : 'anchor');
    if (cast[sid]) return { id: sid, member: cast[sid] };
    if (sid === 'field') {
      return { id: 'field', member: {
        name: ep.fieldName || 'FIELD RUNNER',
        role: ep.fieldRole || '',
        art: cast.anchor.art
      } };
    }
    return { id: 'anchor', member: cast.anchor };
  }

  function spriteSrc(member, line) {
    var art = (member && member.art) || {};
    if (art.kind === 'pose') {
      var pose = (line && line.pose) || art.defaultPose || '01-idle-front';
      return '../../../' + (art.dir || '') + pose + '.png';
    }
    return FRAMES + ((line && line.expression) || 'normal') + '.png';
  }

  /* Which cast members occupy the chairs in a segment: distinct speakers
     in order of first appearance. First voice takes chair A, second B. */
  function segmentSeats(ep, seg) {
    var seen = [], byId = {};
    (seg.lines || []).forEach(function (line) {
      if (line.phone) return;                    // callers are voice-only
      var sp = resolveSpeaker(ep, seg, line);
      if (!byId[sp.id]) { byId[sp.id] = sp; seen.push(sp); }
    });
    return seen;
  }

  function profileFor(sid, line, member) {
    if (sid === 'waluigi') return 'waluigi';
    if (line.phone) return 'caller';
    if (member && member.art && member.art.kind === 'pose') return 'guest';
    if (sid === 'field') return 'field';
    return 'anchor';
  }

  /* Read a caption aloud once per cue, only while actually rolling. */
  function speakLine(c) {
    var a = A();
    if (!a || !a.isVoiceOn() || !S.playing) return;
    var idx = S.cues.indexOf(c);
    if (idx === S.spokenCue) return;
    S.spokenCue = idx;
    var sp = resolveSpeaker(S.episode, c.seg, c.line);
    a.speak(c.line.text, {
      durationMs: c.duration / S.speed,
      profile: profileFor(sp.id, c.line, sp.member)
    });
    var f = el('rnn-cb-speaking');
    if (f) f.hidden = false;
  }

  /* ---------------- build cue list ---------------- */
  function buildCues(ep) {
    var cues = [], t = 0;
    (ep.segments || []).forEach(function (seg, si) {
      (seg.lines || []).forEach(function (line, li) {
        var dur = line.duration || 4000;
        cues.push({
          segIndex: si,
          lineIndex: li,
          seg: seg,
          line: line,
          start: t,
          end: t + dur,
          duration: dur
        });
        t += dur;
      });
    });
    S.cues = cues;
    S.total = t;
  }

  function cueAt(ms) {
    for (var i = S.cues.length - 1; i >= 0; i--) {
      if (ms >= S.cues[i].start) return i;
    }
    return 0;
  }

  function fmt(ms) {
    var s = Math.max(0, Math.round(ms / 1000));
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }

  /* ---------------- static chrome ---------------- */
  function renderChrome(ep) {
    var talk = (ep.segments || []).some(function (s) { return s.set === 'talkset'; });
    document.title = 'RNN — ' + ep.title + ' | Rakasha News Network';
    el('rnn-ep-title').textContent = ep.title;
    el('rnn-ep-meta').innerHTML =
      'HUNT DAY ' + esc(ep.huntDay) + ' &nbsp;·&nbsp; COVERING ' + esc(ep.covering) +
      ' &nbsp;·&nbsp; RUNTIME ' + fmt(S.total) + (talk ? ' &nbsp;·&nbsp; LATE SLOT: WALUIGI CHAT' : '');

    el('rnn-ticker-track').innerHTML = (ep.ticker || [])
      .concat(ep.ticker || [])
      .map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('');

    // rundown
    el('rnn-rundown').innerHTML = (ep.segments || []).map(function (seg, i) {
      var first = S.cues.filter(function (c) { return c.segIndex === i; })[0];
      return '<div class="rnn-rundown-item" data-seg="' + i + '">' +
        '<span class="rnn-rundown-slug">' + esc(seg.slug) + '</span>' +
        '<span class="rnn-rundown-title">' + esc(seg.title || '') + '</span>' +
        '<span class="rnn-rundown-time">' + fmt(first ? first.start : 0) + '</span>' +
        '</div>';
    }).join('');

    // transcript — speaker name per line
    el('rnn-transcript').innerHTML = S.cues.map(function (c, i) {
      var sp = resolveSpeaker(ep, c.seg, c.line);
      var who = (c.line.phone ? '📞 ' : '') + sp.member.name;
      return '<div class="rnn-transcript-line" data-cue="' + i + '">' +
        '<b>' + esc(who) + ' · ' + esc(c.seg.slug) + ' · ' + fmt(c.start) + '</b>' +
        esc(c.line.text) + '</div>';
    }).join('');

    // sources
    el('rnn-sources').innerHTML = (ep.sourceEvents || []).map(function (id) {
      return '<li><a href="../../../../index.html#/article/' + encodeURIComponent(id) + '">' +
        esc(id.replace(/_/g, ' ')) + '</a></li>';
    }).join('');

    // progress ticks per segment
    var prog = el('rnn-progress');
    Array.prototype.slice.call(prog.querySelectorAll('.rnn-progress-tick')).forEach(function (n) { n.remove(); });
    (ep.segments || []).forEach(function (seg, i) {
      if (!i) return;
      var first = S.cues.filter(function (c) { return c.segIndex === i; })[0];
      if (!first) return;
      var tick = document.createElement('div');
      tick.className = 'rnn-progress-tick';
      tick.style.left = (first.start / S.total * 100) + '%';
      prog.appendChild(tick);
    });
  }

  /* ---------------- set switching ---------------- */
  function applySet(setId, force) {
    if (!setId) setId = 'newsdesk';
    if (setId === S.set && !force) return;
    S.set = setId;
    var showing = el('rnn-backdrop-a'), hidden = el('rnn-backdrop-b');
    if (showing.dataset.active === '0') { showing = el('rnn-backdrop-b'); hidden = el('rnn-backdrop-a'); }
    hidden.src = SETS[setId] || SETS.newsdesk;
    hidden.dataset.active = '1';
    hidden.style.opacity = '1';
    showing.dataset.active = '0';
    showing.style.opacity = '0';
    el('rnn-screen').classList.toggle('talkset', setId === 'talkset');
    if (A()) window.RNNAudio.setMood(setId === 'talkset' ? 'talk' : 'news');
  }

  /* ---------------- per-frame paint ---------------- */
  function paint(force) {
    var i = cueAt(S.t);
    var c = S.cues[i];
    if (!c) return;

    el('rnn-time').textContent = fmt(S.t) + ' / ' + fmt(S.total);
    el('rnn-progress-fill').style.width = (S.t / S.total * 100).toFixed(2) + '%';

    if (i !== S.cue || force) {
      S.cue = i;
      var seg = c.seg, line = c.line;
      var isTitle = seg.type === 'titlecard';
      var isField = seg.type === 'field';

      applySet(seg.set);

      el('rnn-titlecard').classList.toggle('show', isTitle);
      el('rnn-slug').textContent = seg.slug;
      el('rnn-headline').innerHTML = isTitle ? '' :
        esc(seg.title || '') + (seg.articleId ? '<small>Filed: ' + esc(seg.articleId.replace(/_/g, ' ')) + '</small>' : '');

      /* ---- the chairs ---- */
      var stage = el('rnn-stage');
      var seats = segmentSeats(S.episode, seg);
      var chairA = el('rnn-chairA'), chairB = el('rnn-chairB');
      var speaker = line.phone ? null : resolveSpeaker(S.episode, seg, line);

      stage.classList.toggle('duo', seats.length > 1 && !isTitle);
      chairA.hidden = isTitle || !seats[0];
      chairB.hidden = isTitle || !seats[1];

      // Re-seat whenever the segment (or its seating) changes
      if (c.segIndex !== S.seg) {
        if (seats[0]) {
          chairA.src = spriteSrc(seats[0].member, null);
          chairA.dataset.seat = seats[0].id;
          chairA.classList.remove('is-field');
        }
        if (seats[1]) {
          chairB.src = spriteSrc(seats[1].member, null);
          chairB.dataset.seat = seats[1].id;
          chairB.classList.add('enter');
          setTimeout(function () { chairB.classList.remove('enter'); }, 900);
        }
      }
      if (isField || (seats[0] && seats[0].id === 'field')) chairA.classList.add('is-field');

      // Swap the speaking chair's frame; the listener keeps its last pose
      var activeChair = null;
      if (speaker) {
        [chairA, chairB].forEach(function (ch) {
          if (ch.hidden || !ch.dataset.seat) return;
          if (ch.dataset.seat === speaker.id) {
            var src = spriteSrc(speaker.member, line);
            if (ch.getAttribute('src') !== src) ch.src = src;
            activeChair = ch;
          }
        });
      }
      chairA.classList.toggle('speaking', chairA === activeChair);
      chairB.classList.toggle('speaking', chairB === activeChair);
      chairA.classList.toggle('dim', seats.length > 1 && chairA !== activeChair);
      chairB.classList.toggle('dim', seats.length > 1 && chairB !== activeChair);

      el('rnn-stage').style.opacity = isTitle ? '0' : '1';

      /* ---- lower third + caption bar ---- */
      var who, role;
      if (line.phone) {
        who = '📞 ' + (line.callerName || 'CALLER');
        role = line.callerRole || 'on the shell-phone';
      } else {
        var sp = resolveSpeaker(S.episode, seg, line);
        who = sp.member.name;
        role = sp.member.role;
      }
      el('rnn-lower-name').textContent = who;
      el('rnn-lower-role').textContent = role;
      el('rnn-lower').style.opacity = isTitle ? '0.35' : '1';
      el('rnn-cb-name').textContent = who;
      el('rnn-cb-role').textContent = role;

      // audio: sting on segment change, then read the new line aloud
      if (c.segIndex !== S.seg) {
        S.seg = c.segIndex;
        if (A()) window.RNNAudio.sting(
          seg.slug === 'COLD OPEN' ? 'open' : seg.slug === 'SIGN OFF' ? 'signoff' : 'seg');
      }
      speakLine(c);

      // highlight rundown + transcript
      Array.prototype.slice.call(document.querySelectorAll('.rnn-rundown-item')).forEach(function (n) {
        n.classList.toggle('active', +n.dataset.seg === c.segIndex);
      });
      Array.prototype.slice.call(document.querySelectorAll('.rnn-transcript-line')).forEach(function (n) {
        n.classList.toggle('active', +n.dataset.cue === i);
      });
      S.typed = -1;
    }

    // typewriter caption
    var into = S.t - c.start;
    var revealMs = Math.min(c.duration * 0.55, c.line.text.length * 26);
    var chars = revealMs <= 0 ? c.line.text.length
      : Math.round(c.line.text.length * Math.min(1, into / revealMs));
    if (chars !== S.typed) {
      if (A() && S.playing && chars > S.typed && (chars % 3 === 0)) window.RNNAudio.blip();
      S.typed = chars;
      var shown = c.line.text.slice(0, chars);
      el('rnn-caption').innerHTML = esc(shown) +
        (chars < c.line.text.length ? '<span class="cursor">▌</span>' : '');
    }
  }

  /* ---------------- transport ---------------- */
  function tick(now) {
    if (!S.playing) return;
    var dt = (now - S.lastTick) * S.speed;
    S.lastTick = now;

    /* Voice gating: when the voice is on and still speaking a line, the
       playhead WAITS at that line's boundary instead of cancelling the
       speech mid-sentence. A safety valve releases a stuck utterance. */
    var a = A();
    var c = S.cues[cueAt(S.t)];
    if (a && a.isVoiceOn() && a.isSpeaking() && c && S.t + dt >= c.end - 1) {
      if (S.holdStart < 0) S.holdStart = now;
      var maxHold = (c.duration * 1.5) / S.speed + 4000;
      if (now - S.holdStart > maxHold) {
        a.stopSpeech();          // utterance wedged — release the show
        S.holdStart = -1;
      } else {
        S.t = Math.max(S.t, c.end - 1);
        paint(false);
        S.raf = requestAnimationFrame(tick);
        return;
      }
    } else {
      S.holdStart = -1;
    }

    S.t += dt;
    if (S.t >= S.total) { S.t = S.total; pause(); paint(true); signOff(); return; }
    paint(false);
    S.raf = requestAnimationFrame(tick);
  }

  function play() {
    if (S.t >= S.total) { S.t = 0; S.spokenCue = -1; }
    S.playing = true;
    S.holdStart = -1;
    S.lastTick = performance.now();
    el('rnn-gate').classList.add('hide');
    el('rnn-onair').classList.remove('paused');
    el('rnn-onair').innerHTML = '<span class="dot">●</span> ON AIR';
    el('rnn-play').textContent = '⏸ PAUSE';
    if (A()) {
      window.RNNAudio.start();
      // speak the line we are sitting on, since paint() may not change cue
      var c = S.cues[cueAt(S.t)];
      if (c) { S.spokenCue = -1; speakLine(c); }
    }
    S.raf = requestAnimationFrame(tick);
  }

  function pause() {
    S.playing = false;
    S.holdStart = -1;
    cancelAnimationFrame(S.raf);
    el('rnn-onair').classList.add('paused');
    el('rnn-onair').textContent = '❚❚ HELD';
    el('rnn-play').textContent = '▶ PLAY';
    if (A()) { window.RNNAudio.stop(); }
    var f = el('rnn-cb-speaking');
    if (f) f.hidden = true;
  }

  function toggle() { S.playing ? pause() : play(); }

  function seek(ms) {
    S.t = Math.max(0, Math.min(S.total - 1, ms));
    S.cue = -1;
    S.spokenCue = -1;
    S.holdStart = -1;
    if (A()) window.RNNAudio.stopSpeech();
    paint(true);
  }

  function jumpSegment(dir) {
    var cur = S.cues[cueAt(S.t)];
    var target = cur.segIndex + dir;
    if (dir < 0 && S.t - cur.start > 1200 && cur.lineIndex === 0) target = cur.segIndex;
    target = Math.max(0, Math.min((S.episode.segments || []).length - 1, target));
    var first = S.cues.filter(function (c) { return c.segIndex === target; })[0];
    seek(first ? first.start : 0);
  }

  function signOff() {
    el('rnn-onair').classList.add('paused');
    el('rnn-onair').textContent = '◼ OFF AIR';
    el('rnn-gate').classList.remove('hide');
    el('rnn-gate-label').textContent = 'REPLAY BROADCAST';
    if (A()) window.RNNAudio.stop();
    var f = el('rnn-cb-speaking');
    if (f) f.hidden = true;
  }

  /* ---------------- audio toggles ---------------- */
  function toggleMusic() {
    var a = A();
    if (!a) return;
    var on = !a.isMusicOn();
    a.setMusic(on);
    if (on && S.playing) a.start();
    var b = el('rnn-music');
    b.textContent = on ? '🥁 MUSIC ON' : '🔇 MUSIC OFF';
    b.classList.toggle('on', on);
  }

  function toggleVoice() {
    var a = A();
    if (!a || !a.ttsSupported) return;
    var on = !a.isVoiceOn();
    a.setVoice(on);
    var b = el('rnn-voice');
    b.textContent = on ? '🗣 VOICE ON' : '🗣 VOICE OFF';
    b.classList.toggle('on', on);
    if (on && S.playing) {
      S.spokenCue = -1;
      var c = S.cues[cueAt(S.t)];
      if (c) speakLine(c);
    } else {
      var f = el('rnn-cb-speaking');
      if (f) f.hidden = true;
    }
  }

  /* ---------------- wiring ---------------- */
  function wire() {
    el('rnn-play').addEventListener('click', toggle);
    el('rnn-gate').addEventListener('click', play);
    el('rnn-prev').addEventListener('click', function () { jumpSegment(-1); });
    el('rnn-next').addEventListener('click', function () { jumpSegment(1); });
    el('rnn-restart').addEventListener('click', function () { seek(0); play(); });

    el('rnn-speed').addEventListener('click', function () {
      var order = [1, 1.5, 2, 0.75];
      S.speed = order[(order.indexOf(S.speed) + 1) % order.length];
      el('rnn-speed').textContent = '⏩ ' + S.speed + '×';
      if (A()) window.RNNAudio.setSpeed(S.speed);
    });

    el('rnn-cc').addEventListener('click', function () {
      var off = el('rnn-captionbar').classList.toggle('captions-off');
      el('rnn-cc').textContent = off ? '💬 CC OFF' : '💬 CC ON';
    });

    el('rnn-music').addEventListener('click', toggleMusic);
    el('rnn-voice').addEventListener('click', toggleVoice);

    el('rnn-progress').addEventListener('click', function (e) {
      var r = this.getBoundingClientRect();
      seek((e.clientX - r.left) / r.width * S.total);
    });

    document.addEventListener('click', function (e) {
      var item = e.target.closest('.rnn-rundown-item');
      if (item) {
        var first = S.cues.filter(function (c) { return c.segIndex === +item.dataset.seg; })[0];
        if (first) { seek(first.start); if (!S.playing) play(); }
        return;
      }
      var line = e.target.closest('.rnn-transcript-line');
      if (line) {
        var c = S.cues[+line.dataset.cue];
        if (c) { seek(c.start); if (!S.playing) play(); }
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT') return;
      if (e.code === 'Space') { e.preventDefault(); toggle(); }
      else if (e.code === 'ArrowRight') jumpSegment(1);
      else if (e.code === 'ArrowLeft') jumpSegment(-1);
      else if (e.code === 'KeyM') toggleMusic();
      else if (e.code === 'KeyV') toggleVoice();
      else if (e.code === 'KeyC') el('rnn-cc').click();
    });

    // never leave speech running after the tab or page goes away
    document.addEventListener('visibilitychange', function () {
      if (document.hidden && S.playing) toggle();
    });
    window.addEventListener('pagehide', function () { if (A()) window.RNNAudio.stop(); });
    window.addEventListener('beforeunload', function () { if (A()) window.RNNAudio.stop(); });

    el('rnn-episode-select').addEventListener('change', function () {
      load(this.value);
    });
  }

  /* ---------------- boot ---------------- */
  function load(id) {
    var data = window.RNN_BROADCASTS || { episodes: [] };
    var ep = data.episodes.filter(function (e) { return e.id === id; })[0] || data.episodes[0];
    if (!ep) return;
    pause();
    S.episode = ep;
    S.set = '';
    S.holdStart = -1;
    buildCues(ep);
    renderChrome(ep);
    S.t = 0; S.cue = -1; S.seg = -1; S.spokenCue = -1;
    applySet((ep.segments || [])[0] && ep.segments[0].set, true);
    paint(true);
    el('rnn-gate-label').textContent = 'ROLL BROADCAST';
    el('rnn-gate-title').textContent = ep.title;
    el('rnn-onair').classList.add('paused');
    el('rnn-onair').textContent = '❚❚ STANDBY';
    el('rnn-gate').classList.remove('hide');
  }

  function boot() {
    var data = window.RNN_BROADCASTS;
    if (!data || !data.episodes || !data.episodes.length) {
      el('rnn-ep-title').textContent = 'NO BROADCAST ON FILE';
      el('rnn-ep-meta').textContent = 'Run tools/build-rnn-broadcast.py to cut this week\'s episode.';
      return;
    }
    el('rnn-episode-select').innerHTML = data.episodes.map(function (e) {
      return '<option value="' + esc(e.id) + '">EP ' + String(e.number).padStart(3, '0') + ' — ' + esc(e.title) + '</option>';
    }).join('');
    el('rnn-generated').textContent = data.generated || '—';

    // audio buttons reflect what this browser can actually do
    var a = A();
    var mus = el('rnn-music'), voi = el('rnn-voice');
    if (!a) {
      mus.disabled = voi.disabled = true;
      mus.textContent = '🔇 NO AUDIO';
      voi.textContent = '🗣 NO VOICE';
      mus.title = voi.title = 'This browser has no Web Audio support.';
    } else {
      mus.classList.add('on');
      if (!a.ttsSupported) {
        voi.disabled = true;
        voi.textContent = '🗣 NO VOICE';
        voi.title = 'This browser has no speech synthesis engine.';
      }
    }

    wire();
    load(data.latest || data.episodes[0].id);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
