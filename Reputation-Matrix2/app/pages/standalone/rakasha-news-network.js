/* ============================================================
   RAKASHA NEWS NETWORK — BROADCAST PLAYER
   Renders a timed, frame-composited news broadcast from
   data/rnn-broadcasts.js using the sprites in animation_frames/.

   No video file is encoded: the "video" is a scheduled sequence of
   anchor frames, captions, lower thirds and title cards played by
   this script. That keeps the broadcast diffable, regenerable and
   tiny in the repository.

   Regenerate episode data with:  python3 tools/build-rnn-broadcast.py
   ============================================================ */
(function () {
  'use strict';

  var FRAMES = '../../../animation_frames/';
  var EXPRESSIONS = ['normal', 'happy', 'sad', 'concerned', 'eyebrowraised', 'mouthslightlyopen', 'jump'];

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
    lastTick: 0,
    raf: 0,
    typed: -1
  };

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
    document.title = 'RNN — ' + ep.title + ' | Rakasha News Network';
    el('rnn-ep-title').textContent = ep.title;
    el('rnn-ep-meta').innerHTML =
      'HUNT DAY ' + esc(ep.huntDay) + ' &nbsp;·&nbsp; COVERING ' + esc(ep.covering) +
      ' &nbsp;·&nbsp; RUNTIME ' + fmt(S.total);

    el('rnn-ticker-track').innerHTML = (ep.ticker || [])
      .concat(ep.ticker || [])
      .map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('');

    // rundown
    el('rnn-rundown').innerHTML = (ep.segments || []).map(function (seg, i) {
      var first = S.cues.filter(function (c) { return c.segIndex === i; })[0];
      return '<div class="rnn-rundown-item" data-seg="' + i + '">' +
        '<span class="rnn-rundown-slug">' + esc(seg.slug) + '</span>' +
        '<span class="rnn-rundown-title">' + esc(seg.title) + '</span>' +
        '<span class="rnn-rundown-time">' + fmt(first ? first.start : 0) + '</span>' +
        '</div>';
    }).join('');

    // transcript
    el('rnn-transcript').innerHTML = S.cues.map(function (c, i) {
      var who = c.seg.type === 'field' ? (S.episode.fieldName || 'FIELD') : (S.episode.anchorName || 'ANCHOR');
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

      el('rnn-titlecard').classList.toggle('show', isTitle);
      el('rnn-slug').textContent = seg.slug;
      el('rnn-headline').innerHTML = isTitle ? '' :
        esc(seg.title) + (seg.articleId ? '<small>Filed: ' + esc(seg.articleId.replace(/_/g, ' ')) + '</small>' : '');

      var expr = EXPRESSIONS.indexOf(line.expression) >= 0 ? line.expression : 'normal';
      var anchor = el('rnn-anchor');
      if (anchor.getAttribute('data-expr') !== expr) {
        anchor.setAttribute('data-expr', expr);
        anchor.src = FRAMES + expr + '.png';
      }
      anchor.classList.toggle('is-field', isField);
      el('rnn-stage').style.opacity = isTitle ? '0' : '1';

      el('rnn-lower-name').textContent = isField ? (S.episode.fieldName || 'FIELD RUNNER') : (S.episode.anchorName || 'ANCHOR');
      el('rnn-lower-role').textContent = isField ? (S.episode.fieldRole || '') : (S.episode.anchorRole || '');
      el('rnn-lower').style.opacity = isTitle ? '0.35' : '1';

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
    S.t += dt;
    if (S.t >= S.total) { S.t = S.total; pause(); paint(true); signOff(); return; }
    paint(false);
    S.raf = requestAnimationFrame(tick);
  }

  function play() {
    if (S.t >= S.total) S.t = 0;
    S.playing = true;
    S.lastTick = performance.now();
    el('rnn-gate').classList.add('hide');
    el('rnn-onair').classList.remove('paused');
    el('rnn-onair').innerHTML = '<span class="dot">●</span> ON AIR';
    el('rnn-play').textContent = '⏸ PAUSE';
    S.raf = requestAnimationFrame(tick);
  }

  function pause() {
    S.playing = false;
    cancelAnimationFrame(S.raf);
    el('rnn-onair').classList.add('paused');
    el('rnn-onair').textContent = '❚❚ HELD';
    el('rnn-play').textContent = '▶ PLAY';
  }

  function toggle() { S.playing ? pause() : play(); }

  function seek(ms) {
    S.t = Math.max(0, Math.min(S.total - 1, ms));
    S.cue = -1;
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
    });

    el('rnn-cc').addEventListener('click', function () {
      var off = el('rnn-screen').classList.toggle('captions-off');
      el('rnn-cc').textContent = off ? '💬 CC OFF' : '💬 CC ON';
    });

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
      if (e.target.tagName === 'SELECT') return;
      if (e.code === 'Space') { e.preventDefault(); toggle(); }
      else if (e.code === 'ArrowRight') jumpSegment(1);
      else if (e.code === 'ArrowLeft') jumpSegment(-1);
    });

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
    buildCues(ep);
    renderChrome(ep);
    S.t = 0; S.cue = -1;
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
    wire();
    load(data.latest || data.episodes[0].id);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
