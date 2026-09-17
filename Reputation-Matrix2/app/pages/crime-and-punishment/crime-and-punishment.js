/* Crime and Punishment — sentencing reel + consequence table.
 *
 * Ported from the standalone "Wheel of Regret" prototype in incoming/.
 * The prototype drew 109 segments as a pie chart on a 300px canvas, which is
 * 3.3 degrees per slice — unreadable, and the reason it was rebuilt. This is a
 * Mario-Party-style reel: a vertical strip that scrolls and decelerates into a
 * fixed window. It reads identically at 89 entries or 890.
 *
 * A verdict has two phases:
 *   1. SENTENCE     — what the court makes you do   (crimeAndPunishment.json)
 *   2. CONSEQUENCE  — what it costs your body       (injuries.json, d100)
 *
 * No audio. The prototype referenced ten ripped Nintendo clips; those are not
 * shipped. See the run report.
 */
(function () {
  'use strict';

  var DATA_BASE = '../../../data/';
  var ROW_H = 54;          // must match .cap-row height in the CSS
  var VISIBLE = 5;         // rows rendered above/below for the illusion of a drum

  var state = {
    sentences: [], effects: [], bands: [], injuries: [],
    coins: 0, spins: 5, spinning: false,
    sentence: null, consequence: null,
    accepted: false, buffs: {}, log: [],
    charge: 0, charging: false, chargeTimer: null,
  };

  var el = function (id) { return document.getElementById(id); };

  // ---------------------------------------------------------------- loading
  function loadJSON(name) {
    return fetch(DATA_BASE + name, { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error(name + ' HTTP ' + r.status);
      return r.json();
    });
  }

  function boot() {
    Promise.all([loadJSON('crimeAndPunishment.json'), loadJSON('injuries.json')])
      .then(function (res) {
        var cap = res[0], inj = res[1];
        state.sentences = cap.sentences || [];
        state.effects = cap.effects || [];
        state.bands = cap.severityBands || [];
        state.injuries = (inj.entries || []).filter(function (e) { return e && e.injuryType; });
        renderReel();
        renderInjuryReel();
        renderFilter();
        renderTable();
        renderShop();
        paint();
        log('Docket loaded. ' + state.sentences.length + ' sentences on the reel, ' +
            state.injuries.length + ' consequences in the table.', true);
      })
      .catch(function (e) {
        var r = el('capReelStrip');
        if (r) r.innerHTML = '<div class="cap-row"><span class="lb">Could not load the docket: ' +
          String(e.message || e) + '</span></div>';
      });
  }

  // ------------------------------------------------------------------- reel
  // The strip holds every sentence twice so a spin can travel a long way
  // without running off the end of the list.
  // Three passes, not two. The landing row is always in the SECOND pass, so
  // the third exists purely as runway: the overshoot on the very last entry
  // used to travel past the end of the strip and expose empty space under
  // the window before rocking back.
  function reelItems() {
    return state.sentences.concat(state.sentences, state.sentences);
  }

  function rowHtml(s) {
    var band = bandFor(s.severity);
    return '<div class="cap-row">' +
      '<span class="sw" style="background:' + esc(s.color || '#888') + '"></span>' +
      '<span class="lb">' + esc(s.label) + '</span>' +
      '<span class="sv">' + esc(band ? band.name : '') + ' &middot; ' + (s.severity || 0) + '</span>' +
      '</div>';
  }

  function renderReel() {
    var strip = el('capReelStrip');
    if (!strip) return;
    strip.innerHTML = reelItems().map(rowHtml).join('');
    setStripOffset(0, false);
  }

  // ------------------------------------------------------- the injury drum
  // The consequence used to appear fully formed, which made the second half
  // of the docket feel like a footnote to the first. It is the same kind of
  // decision -- a random draw off a filed table -- so it gets the same
  // mechanism. Both drums share spinDrum() below.
  function injuryRowHtml(e) {
    return '<div class="cap-row">' +
      '<span class="sw" style="background:' + esc(injuryColor(e.category)) + '"></span>' +
      '<span class="lb">' + esc(e.injuryType || '') + '</span>' +
      '<span class="sv">' + esc(e.category || '') + ' &middot; ' + (e.d100 != null ? e.d100 : '') +
      '</span></div>';
  }

  // Categories are free text in injuries.json, so match on what they mean
  // rather than trying to enumerate all sixteen.
  function injuryColor(cat) {
    var c = String(cat || '').toLowerCase();
    if (c.indexOf('death') > -1) return '#c0392b';
    if (c.indexOf('boon') > -1 || c.indexOf('surviv') > -1) return '#2ecc71';
    if (c.indexOf('severe') > -1 || c.indexOf('limb') > -1) return '#e74c3c';
    if (c.indexOf('major') > -1) return '#e67e22';
    if (c.indexOf('mental') > -1) return '#9b59b6';
    if (c.indexOf('special') > -1 || c.indexOf('flavour') > -1) return '#3498db';
    if (c.indexOf('scar') > -1) return '#d4a853';
    return '#7f8c8d';
  }

  function renderInjuryReel() {
    var strip = el('capInjStrip');
    if (!strip || !state.injuries.length) return;
    var items = state.injuries.concat(state.injuries, state.injuries);
    strip.innerHTML = items.map(injuryRowHtml).join('');
    setOffset(strip, 0, false);
  }

  // ------------------------------------------------------ shared drum core
  // One implementation, two drums. Everything that made the sentencing reel
  // feel mechanical -- the long ease-out, the ratchet, the overshoot and
  // settle -- now belongs to whichever reel is being spun.
  function setOffset(strip, px, animate, ms, easing) {
    if (!strip) return;
    strip.style.transition = animate
      ? 'transform ' + (ms || 3600) + 'ms ' + (easing || 'cubic-bezier(0,0,.58,1)')
      : 'none';
    strip.style.transform = 'translateY(' + (-px) + 'px)';
  }

  /* opts: {reel, strip, count, landIndex, height, onDone, accent} */
  function spinDrum(opts) {
    var reel = opts.reel, strip = opts.strip;
    var landIdx = opts.count + opts.landIndex;   // land in the second pass
    var h = reel ? reel.clientHeight : 270;
    var target = (landIdx * ROW_H) - (h / 2) + (ROW_H / 2);

    // Park at the top with no transition, then force the browser to COMMIT
    // that state before the animated move is written. Reading offsetHeight
    // alone flushes layout but not necessarily the transition property, so
    // the two writes could be coalesced into one style recalculation and the
    // drum would snap. Reading the computed transform is the reliable flush.
    setOffset(strip, 0, false);
    void window.getComputedStyle(strip).transform;

    // Reduced motion is honoured here, in script, rather than by an
    // !important CSS rule -- see the note in the stylesheet.
    var reduced = prefersReducedMotion();
    var dur = reduced ? 320 : 5200 + Math.floor(Math.random() * 1200);
    var mainMs = reduced ? 320 : Math.round(dur * 0.88);
    var settleMs = reduced ? 0 : 620;
    var overshoot = reduced ? 0 : ROW_H * 0.62;

    if (reel) {
      reel.classList.add('spinning');
      reel.classList.remove('landed');
      if (opts.accent) reel.style.setProperty('--cap-land', opts.accent);
    }

    var tickIds = scheduleTicks(landIdx, mainMs);
    setOffset(strip, target + overshoot, true, mainMs, 'cubic-bezier(0,0,.58,1)');

    window.setTimeout(function () {
      setOffset(strip, target, true, settleMs, 'cubic-bezier(.22,1.5,.36,1)');
      tick(1);
    }, mainMs + 10);

    window.setTimeout(function () {
      tickIds.forEach(function (id) { window.clearTimeout(id); });
      if (reel) {
        reel.classList.remove('spinning');
        reel.classList.add('landed');
        window.setTimeout(function () { reel.classList.remove('landed'); }, 900);
      }
      if (opts.onDone) opts.onDone();
    }, mainMs + settleMs + 40);
  }

  // Thin wrapper kept for the two places that only need to park the main
  // reel at the top; the drums themselves go through setOffset/spinDrum.
  function setStripOffset(px, animate, ms, easing) {
    setOffset(el('capReelStrip'), px, animate, ms, easing);
  }

  // Ratchet: a tick fires each time a new row crosses the window, rapid at
  // first and thinning out as the drum slows. Audio is optional and silent
  // failure is fine -- this is flavour, not function.
  var audioCtx = null;
  function tick(strength) {
    if (prefersReducedMotion()) return;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      audioCtx = audioCtx || new AC();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      var t = audioCtx.currentTime;
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(140 + 90 * (strength || 0), t);
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.05 * (0.4 + (strength || 0)), t + 0.004);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.055);
      osc.connect(gain); gain.connect(audioCtx.destination);
      osc.start(t); osc.stop(t + 0.06);
    } catch (e) { /* no audio, no problem */ }
  }

  function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  // Schedule ticks along the spin so the ratchet thins out as the drum slows.
  // Uses the same ease-out shape as the transition, sampled, so the clicks
  // stay roughly in step with the rows actually passing the window.
  function scheduleTicks(rows, dur) {
    if (prefersReducedMotion()) return [];
    var ids = [];
    var n = Math.min(rows, 44);
    for (var i = 1; i <= n; i++) {
      // `p` is progress through the DISTANCE, not the time. Inverting the
      // ease-out gives the moment each row actually crosses the window, so
      // the clicks stay glued to the rows instead of drifting ahead of them
      // as the drum slows.
      var p = i / n;
      var at = dur * (1 - Math.sqrt(1 - p));
      ids.push(window.setTimeout(tick.bind(null, 1 - p), at));
    }
    return ids;
  }


  function bandFor(sev) {
    for (var i = 0; i < state.bands.length; i++) {
      var b = state.bands[i];
      if (sev >= b.min && sev <= b.max) return b;
    }
    return null;
  }

  // ------------------------------------------------------------ the verdict
  function pickSentence() {
    var pool = state.sentences.slice();

    // "Tarnished Shield Fragment" — reduce the odds of a Grave/Capital result
    // by dropping most of the high-severity entries out of the pool for one
    // spin. It is a nudge, not immunity; the prototype was explicit that
    // Wario's merchandise underdelivers.
    if (state.buffs.less_severe) {
      pool = pool.filter(function (s) { return s.severity < 7 || Math.random() < 0.35; });
      delete state.buffs.less_severe;
      log('The shield fragment does something. Probably.');
    }
    if (state.buffs.remove_worst) {
      pool = pool.filter(function (s) { return s.severity < 10; });
      delete state.buffs.remove_worst;
      log('The garlic wards off the absolute worst of it.');
    }
    if (!pool.length) pool = state.sentences.slice();
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function spin() {
    if (state.spinning || state.accepted) return;
    if (state.spins <= 0) { log('No spins left. The court is not taking requests.'); return; }

    state.spinning = true;
    state.spins--;
    state.sentence = null;
    state.consequence = null;
    el('capVerdict').classList.remove('show');
    el('capConsequence').classList.remove('show');
    var iw = el('capInjWrap');
    if (iw) iw.classList.remove('show');
    paint();

    var chosen = pickSentence();

    spinDrum({
      reel: el('capReel'),
      strip: el('capReelStrip'),
      count: state.sentences.length,
      landIndex: state.sentences.indexOf(chosen),
      // Colour the window to the band being decided, so the reel itself is
      // already telling you how bad this is before the verdict card opens.
      accent: severityColor(chosen.severity),
      onDone: function () {
        state.spinning = false;
        state.sentence = chosen;
        showVerdict(chosen);
        paint();
      }
    });
  }

  // The four bands each own a colour, reused by the reel glow and the verdict
  // card so severity reads the same way in both places.
  function severityColor(sev) {
    if (sev >= 9) return '#e74c3c';
    if (sev >= 7) return '#e67e22';
    if (sev >= 4) return '#f39c12';
    return '#2ecc71';
  }

  function showVerdict(s) {
    var band = bandFor(s.severity);
    var v = el('capVerdict');
    el('capVerdictTitle').textContent = s.label;
    el('capVerdictTags').innerHTML =
      tag(s.type) + tag('severity ' + s.severity) + (band ? tag(band.name) : '');
    el('capVerdictQuote').textContent = quoteFor(s, band);
    v.classList.add('show');
    setPhase(2);
    log('Sentence: ' + s.label + ' (' + (band ? band.name : '') + ', severity ' + s.severity + ').', true);
  }

  function tag(t) { return '<span class="cap-tag">' + esc(String(t)) + '</span>'; }

  // Waluigi's commentary. Written as a court clerk who has watched this reel
  // land a thousand times and has opinions about all of them -- specific,
  // procedural, and increasingly unwilling to make jokes as the band climbs.
  // The severe bands deliberately stop being funny; that contrast is the gag.
  function quoteFor(s, band) {
    var n = band ? band.name : 'Minor';
    var lines = {
      'Minor': [
        'Waluigi has served this one. Twice. Once on purpose, to get out of a wedding.',
        'The clerk did not look up while reading this out. That is the correct amount of ceremony.',
        'You will be bored, mildly damp, and home by the weekend. Waluigi files that under acquittal.',
        'This is the sentence they hand down when the paperwork costs more than the crime.',
        'Somewhere a magistrate is very pleased with himself. Let him have it.'
      ],
      'Serious': [
        'Real hours, real labour, real chance you come back with a limp and a story.',
        'This is the band where people start asking who your lawyer was. Answer carefully.',
        'Waluigi has seen four people serve this. Three finished. The fourth opened a tavern.',
        'Survivable, but it will be on your record longer than it is on your body.',
        'The court is no longer making a point. It is extracting a cost.'
      ],
      'Grave': [
        'Waluigi would like the record to show he advised against whatever you did.',
        'They stop reading these aloud in full. You get the title and a date.',
        'Bring garlic, bring a will, and bring someone who can carry you.',
        'The court has stopped pretending this is corrective. This is removal.',
        'Waluigi knows the name of everyone who came back from this. It is a short list and he has memorised it.'
      ],
      'Capital': [
        'WAH. No joke here. Roll the consequence and hope the table is kind.',
        'The clerks do not read this part of the docket aloud. They just file it.',
        'Waluigi will write the obituary himself. Free of charge. Deeply reluctantly.',
        'There is no appeal, no bribe, and no version of this where Wario can help.',
        'Whatever you are about to roll, it is the second-worst thing happening to you today.'
      ]
    };
    var pool = lines[n] || lines['Minor'];
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // ------------------------------------------------------------ consequence
  function rollConsequence() {
    if (!state.sentence || state.consequence) return;
    var sev = state.sentence.severity || 1;

    // Severity biases the d100 upward, but never guarantees an outcome: a
    // trivial sentence can still go wrong and a grave one can still be
    // survived. Clamped to the table's real index range.
    var max = state.injuries.length;
    var roll = 1 + Math.floor(Math.random() * max);
    var bias = Math.floor((sev / 10) * max * 0.45);
    roll = Math.min(max, roll + (Math.random() < 0.65 ? bias : 0));

    var entry = state.injuries[roll - 1] || state.injuries[state.injuries.length - 1];

    // Lock the controls for the duration of the spin, exactly as the
    // sentencing reel does, then reveal the card when the drum settles.
    state.spinning = true;
    el('capConsequence').classList.remove('show');
    paint();

    var wrap = el('capInjWrap');
    if (wrap) wrap.classList.add('show');

    spinDrum({
      reel: el('capInjReel'),
      strip: el('capInjStrip'),
      count: state.injuries.length,
      landIndex: state.injuries.indexOf(entry),
      accent: injuryColor(entry.category),
      onDone: function () {
        state.spinning = false;
        state.consequence = entry;
        el('capRoll').textContent = 'd' + (entry.d100 != null ? entry.d100 : roll);
        el('capCat').textContent = entry.category || '';
        el('capInj').textContent = entry.injuryType || '';
        el('capDesc').textContent = entry.description || '';
        el('capCure').innerHTML = 'Lowest cure: <b>' + esc(entry.cure || 'unrecorded') + '</b>' +
          (entry.duration ? ' &middot; duration <b>' + esc(entry.duration) + '</b>' : '');
        el('capConsequence').classList.add('show');
        setPhase(3);
        log('Consequence: ' + (entry.category || '?') + ' — ' + (entry.injuryType || '?') + '.', true);
        paint();
      }
    });
  }

  // ------------------------------------------------------------------- taps
  function startCharge() {
    if (state.charging || state.spinning || state.accepted) return;
    state.charging = true;
    state.charge = 0;
    var started = Date.now();
    var DURATION = 3000;
    el('capTapBtn').textContent = 'TAP! TAP! TAP!';
    state.chargeTimer = window.setInterval(function () {
      var pct = Math.min(100, ((Date.now() - started) / DURATION) * 100);
      el('capChargeFill').style.width = pct + '%';
      if (pct >= 100) endCharge();
    }, 60);
  }

  function tap() {
    if (!state.charging) { startCharge(); return; }
    state.charge++;
  }

  function endCharge() {
    window.clearInterval(state.chargeTimer);
    state.charging = false;
    var mult = state.buffs.coin_boost || 1;
    var earned = Math.round(state.charge * 0.7 * mult);
    state.coins += earned;
    el('capChargeFill').style.width = '0%';
    el('capTapBtn').textContent = 'Tap to Charge';
    log('Tapped ' + state.charge + ' times. Earned ' + earned + ' Wario Coins.');
    state.charge = 0;
    paint();
  }

  // ------------------------------------------------------------------- shop
  var SHOP = [
    { id: 'remove_worst', name: "Wario's 'Lucky' Garlic", cost: 15, once: true,
      desc: 'Might ward off the absolute worst outcome. Smells awful.' },
    { id: 'less_severe', name: 'Tarnished Shield Fragment', cost: 20, once: true,
      desc: 'Slightly reduces the chance of a Grave or Capital sentence. Looks flimsy.' },
    { id: 'reroll_once', name: 'Suspiciously Weighted Die', cost: 25, once: true,
      desc: 'Demand one re-spin if you do not like the verdict.' },
    { id: 'coin_boost', name: 'Greasy Coin Magnet', cost: 40, once: false,
      desc: 'Permanently increases coins earned per tap. Shockingly effective.' },
    { id: 'buy_spin', name: 'Suspicious Energy Drink', cost: 50, once: false,
      desc: "Wario's homebrew. Grants one extra spin. Tastes like a battery." },
    { id: 'scam_investment', name: "Wario's 'Sure Thing' Tip", cost: 30, once: false,
      scam: true, desc: 'Invest your coins! Huge returns promised!' },
  ];

  function renderShop() {
    var g = el('capShopGrid');
    if (!g) return;
    g.innerHTML = SHOP.map(function (it) {
      return '<div class="cap-item">' +
        '<div class="nm' + (it.scam ? ' scam' : '') + '">' + esc(it.name) + (it.scam ? ' (?)' : '') + '</div>' +
        '<div class="ds">' + esc(it.desc) + '</div>' +
        '<div class="rw"><span class="ct">' + it.cost + ' \uD83E\uDE99</span>' +
        '<button class="cap-buy" data-buy="' + it.id + '">Buy</button></div>' +
        '</div>';
    }).join('');
    g.querySelectorAll('[data-buy]').forEach(function (b) {
      b.addEventListener('click', function () { buy(b.getAttribute('data-buy')); });
    });
  }

  function buy(id) {
    var it = SHOP.filter(function (x) { return x.id === id; })[0];
    if (!it || state.coins < it.cost || state.accepted) return;
    if (it.once && state.buffs[id]) return;
    state.coins -= it.cost;

    if (id === 'coin_boost') {
      state.buffs.coin_boost = (state.buffs.coin_boost || 1) + 0.1;
      log('Coin magnet attached. Greasy, but it works.');
    } else if (id === 'buy_spin') {
      state.spins++;
      log('Energy drink consumed. One more spin. Waluigi advises against a second.');
    } else if (id === 'scam_investment') {
      // The prototype was explicit that some shop items are scams. Kept,
      // because a Wario shop that never cheats you is not a Wario shop.
      var loss = Math.min(state.coins, 10 + Math.floor(Math.random() * 15));
      state.coins -= loss;
      log('The investment matured instantly into nothing. Lost a further ' + loss + ' coins.', true);
    } else {
      state.buffs[id] = true;
      log('Purchased: ' + it.name + '.');
    }
    paint();
  }

  // ------------------------------------------------------------------ misc
  function reroll() {
    if (!state.buffs.reroll_once || !state.sentence || state.accepted) return;
    delete state.buffs.reroll_once;
    state.spins++;
    log('Weighted die used. The court pretends not to notice.');
    spin();
  }

  function accept() {
    if (!state.sentence || state.accepted) return;
    state.accepted = true;
    log('Verdict accepted. Filed. There is no appeal in this building.', true);
    paint();
  }

  function reset() {
    state.coins = 0; state.spins = 5; state.sentence = null; state.consequence = null;
    state.accepted = false; state.buffs = {}; state.log = [];
    el('capVerdict').classList.remove('show');
    el('capConsequence').classList.remove('show');
    var iw = el('capInjWrap');
    if (iw) iw.classList.remove('show');
    setStripOffset(0, false);
    setOffset(el('capInjStrip'), 0, false);
    setPhase(1);
    renderShop();
    paint();
    log('Docket cleared.', true);
  }

  function setPhase(n) {
    [1, 2, 3].forEach(function (i) {
      var p = el('capPhase' + i);
      if (p) p.classList.toggle('on', i <= n);
    });
  }

  function log(msg, hi) {
    state.log.unshift({ msg: msg, hi: !!hi });
    var box = el('capLog');
    if (box) {
      box.innerHTML = state.log.slice(0, 60).map(function (l) {
        return '<div class="' + (l.hi ? 'hi' : '') + '">' + esc(l.msg) + '</div>';
      }).join('');
    }
  }

  function paint() {
    el('capCoins').textContent = state.coins;
    el('capSpins').textContent = state.spins;
    el('capSpinBtn').disabled = state.spinning || state.accepted || state.spins <= 0;
    el('capConsBtn').disabled = !state.sentence || !!state.consequence || state.spinning;
    el('capAcceptBtn').disabled = !state.sentence || state.accepted;
    el('capRerollBtn').disabled = !state.buffs.reroll_once || !state.sentence || state.accepted;
    el('capTapBtn').disabled = state.spinning || state.accepted;
    var g = el('capShopGrid');
    if (g) {
      g.querySelectorAll('[data-buy]').forEach(function (b) {
        var id = b.getAttribute('data-buy');
        var it = SHOP.filter(function (x) { return x.id === id; })[0];
        var owned = it.once && state.buffs[id];
        b.disabled = state.accepted || state.coins < it.cost || !!owned;
        b.textContent = owned ? 'Bought' : 'Buy';
      });
    }
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ----------------------------------------------------------- the ward
  // Death saves. Deliberately NOT a drum: the floor decides things for you,
  // the ward is the one place you act and the one place a roll can go your
  // way. Same house rules as the Injury Desk in the wiki shell, so a table
  // that learns them here already knows them there.
  var ward = { succ: 0, fail: 0, done: '', rolling: false, log: [] };

  function wardPips(n, cls) {
    var h = '';
    for (var i = 0; i < 3; i++) h += '<span class="cap-pip' + (i < n ? ' on ' + cls : '') + '"></span>';
    return h;
  }

  function wardLog(roll, note) {
    ward.log.unshift({ r: roll, note: note });
    ward.log = ward.log.slice(0, 8);
    var n = el('capWardLog');
    if (n) n.innerHTML = ward.log.map(function (l) {
      return '<div><b>' + esc(String(l.r)) + '</b> — ' + esc(l.note) + '</div>';
    }).join('');
  }

  function paintWard() {
    el('capSucc').innerHTML = wardPips(ward.succ, 'succ');
    el('capFail').innerHTML = wardPips(ward.fail, 'fail');
    var v = el('capWardVerdict');
    v.className = 'cap-verdictline' + (ward.done ? ' ' + ward.done : '');
    v.textContent = ward.done === 'stable'
      ? 'STABLE — three successes. Unconscious, no longer dying, and not walking away clean.'
      : ward.done === 'dead'
        ? 'DEAD — three failures. The house does not offer a rematch.'
        : ward.done === 'revived'
          ? 'CONSCIOUS — natural 20. Back up at 1 hit point, and something still gave.'
          : '';
    el('capSaveBtn').disabled = !!ward.done || ward.rolling;
    // Surviving is what earns a consequence roll; dying does not, because the
    // saves already answered the question.
    el('capWardCost').disabled =
      !(ward.done === 'stable' || ward.done === 'revived') || ward.rolling || !!state.consequence;
  }

  function rollDeathSave() {
    if (ward.done || ward.rolling) return;
    ward.rolling = true;
    var die = el('capD20');
    die.classList.add('rolling');
    paintWard();

    // Spin the numerals briefly so the result is not simply printed.
    var flick = window.setInterval(function () {
      die.textContent = 1 + Math.floor(Math.random() * 20);
    }, 55);

    window.setTimeout(function () {
      window.clearInterval(flick);
      var r = 1 + Math.floor(Math.random() * 20);
      die.textContent = r;
      die.classList.remove('rolling');
      tick(1);

      if (r === 20) { ward.done = 'revived'; wardLog(r, 'Natural 20. Back on your feet at 1 hit point.'); }
      else if (r === 1) { ward.fail += 2; wardLog(r, 'Natural 1. Counts as two failures.'); }
      else if (r >= 10) { ward.succ += 1; wardLog(r, 'Success.'); }
      else { ward.fail += 1; wardLog(r, 'Failure.'); }

      if (!ward.done && ward.succ >= 3) ward.done = 'stable';
      if (!ward.done && ward.fail >= 3) ward.done = 'dead';

      ward.rolling = false;
      paintWard();
    }, 820);
  }

  function resetWard() {
    ward = { succ: 0, fail: 0, done: '', rolling: false, log: [] };
    el('capD20').textContent = 'd20';
    el('capWardLog').innerHTML = '';
    paintWard();
  }

  // Survivors roll the same consequence drum the floor uses.
  function wardCost() {
    if (!(ward.done === 'stable' || ward.done === 'revived')) return;
    if (state.spinning || !state.injuries.length) return;
    showTab('floor');
    // The floor's roller needs a sentence to bias from; a ward survivor has
    // none, so roll the table flat.
    var entry = state.injuries[Math.floor(Math.random() * state.injuries.length)];
    state.spinning = true;
    el('capConsequence').classList.remove('show');
    var wrap = el('capInjWrap');
    if (wrap) wrap.classList.add('show');
    paint();
    spinDrum({
      reel: el('capInjReel'), strip: el('capInjStrip'),
      count: state.injuries.length, landIndex: state.injuries.indexOf(entry),
      accent: injuryColor(entry.category),
      onDone: function () {
        state.spinning = false;
        state.consequence = entry;
        el('capRoll').textContent = 'd' + (entry.d100 != null ? entry.d100 : '?');
        el('capCat').textContent = entry.category || '';
        el('capInj').textContent = entry.injuryType || '';
        el('capDesc').textContent = entry.description || '';
        el('capCure').innerHTML = 'Lowest cure: <b>' + esc(entry.cure || 'unrecorded') + '</b>' +
          (entry.duration ? ' &middot; duration <b>' + esc(entry.duration) + '</b>' : '');
        el('capConsequence').classList.add('show');
        log('You lived. It cost you: ' + (entry.injuryType || '?') + '.', true);
        paint(); paintWard();
      }
    });
  }

  // ----------------------------------------------------------- the table
  // The reference half of the house, moved here from the wiki's Injury Desk
  // so that everything rollable lives behind one door. The drums and this
  // table read the same state.injuries array -- there is no second copy to
  // drift out of sync.
  function tableRows() {
    var q = (el('capSearch').value || '').trim().toLowerCase();
    var cat = el('capFilter').value || '';
    return state.injuries.filter(function (e) {
      if (cat && (e.category || '') !== cat) return false;
      if (!q) return true;
      return [e.injuryType, e.description, e.cure, e.category, e.duration]
        .join(' ').toLowerCase().indexOf(q) > -1;
    });
  }

  function renderTable() {
    var rows = tableRows();
    var body = el('capTableBody');
    if (!body) return;
    // Cap the DOM at a few hundred rows; the search is the way to reach the
    // rest, and rendering 204 full descriptions at once is already plenty.
    body.innerHTML = rows.slice(0, 400).map(function (e) {
      return '<tr data-d100="' + esc(String(e.d100)) + '">' +
        '<td class="n"><span class="sw" style="background:' + esc(injuryColor(e.category)) + '"></span>' +
        esc(String(e.d100 != null ? e.d100 : '')) + '</td>' +
        '<td class="c">' + esc(e.category || '') + '</td>' +
        '<td><b>' + esc(e.injuryType || '') + '</b>' +
        (e.description ? '<div class="d">' + esc(e.description) + '</div>' : '') + '</td>' +
        '<td class="cu">' + esc(e.cure || '—') + '</td>' +
        '<td class="du">' + esc(e.duration || '—') + '</td>' +
        '</tr>';
    }).join('');
    el('capTableCount').textContent =
      rows.length === state.injuries.length
        ? state.injuries.length + ' consequences on file'
        : rows.length + ' of ' + state.injuries.length + ' shown';
  }

  function renderFilter() {
    var seen = {}, out = [];
    state.injuries.forEach(function (e) {
      var c = e.category || '';
      if (c && !seen[c]) { seen[c] = 1; out.push(c); }
    });
    out.sort();
    var sel = el('capFilter');
    sel.innerHTML = '<option value="">All categories</option>' +
      out.map(function (c) { return '<option>' + esc(c) + '</option>'; }).join('');
  }

  // Rolling from the table scrolls the winning row into view and flashes it,
  // rather than opening a card -- you are already looking at the list.
  function rollFromTable() {
    if (!state.injuries.length) return;
    var e = state.injuries[Math.floor(Math.random() * state.injuries.length)];
    el('capSearch').value = '';
    el('capFilter').value = '';
    renderTable();
    var tr = el('capTableBody').querySelector('[data-d100="' + e.d100 + '"]');
    if (tr) {
      el('capTableBody').querySelectorAll('.hit').forEach(function (n) { n.classList.remove('hit'); });
      tr.classList.add('hit');
      tr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      tick(1);
    }
    log('Table roll: d' + e.d100 + ' — ' + (e.injuryType || '?') + '.', true);
  }

  // ------------------------------------------------------------------ tabs
  var TABS = [
    ['floor', 'capTabFloor', 'capPaneFloor'],
    ['ward', 'capTabWard', 'capPaneWard'],
    ['table', 'capTabTable', 'capPaneTable']
  ];

  function showTab(which) {
    TABS.forEach(function (t) {
      var on = t[0] === which;
      el(t[2]).hidden = !on;
      el(t[1]).classList.toggle('on', on);
      el(t[1]).setAttribute('aria-selected', String(on));
    });
    if (which === 'table') location.hash = '#table';
    else if (location.hash === '#table') location.hash = '';
  }

  // ------------------------------------------------------------------ wire
  document.addEventListener('DOMContentLoaded', function () {
    el('capTabFloor').addEventListener('click', function () { showTab('floor'); });
    el('capTabWard').addEventListener('click', function () { showTab('ward'); });
    el('capTabTable').addEventListener('click', function () { showTab('table'); });
    el('capSearch').addEventListener('input', renderTable);
    el('capFilter').addEventListener('change', renderTable);
    el('capTableRoll').addEventListener('click', rollFromTable);
    // The wiki sidebar links straight to the reference table, so honour the
    // deep link on load.
    if (location.hash === '#table') showTab('table');
    el('capSaveBtn').addEventListener('click', rollDeathSave);
    el('capWardReset').addEventListener('click', resetWard);
    el('capWardCost').addEventListener('click', wardCost);
    paintWard();
    el('capSpinBtn').addEventListener('click', spin);
    el('capConsBtn').addEventListener('click', rollConsequence);
    el('capAcceptBtn').addEventListener('click', accept);
    el('capRerollBtn').addEventListener('click', reroll);
    el('capResetBtn').addEventListener('click', reset);
    el('capTapBtn').addEventListener('click', tap);
    setPhase(1);
    boot();
  });
})();
