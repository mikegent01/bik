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
  function reelItems() {
    return state.sentences.concat(state.sentences);
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

  function setStripOffset(px, animate, ms) {
    var strip = el('capReelStrip');
    if (!strip) return;
    strip.style.transition = animate
      ? 'transform ' + (ms || 3600) + 'ms cubic-bezier(.12,.62,.16,1)'
      : 'none';
    strip.style.transform = 'translateY(' + (-px) + 'px)';
  }

  // Centre of the window sits at half the reel height; offset so row `i`
  // lands inside it.
  function offsetForIndex(i) {
    var reel = el('capReel');
    var h = reel ? reel.clientHeight : 270;
    return (i * ROW_H) - (h / 2) + (ROW_H / 2);
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
    paint();

    var chosen = pickSentence();
    var baseIdx = state.sentences.indexOf(chosen);
    // Land on the copy in the second pass of the list so the strip visibly
    // travels rather than snapping backwards.
    var landIdx = state.sentences.length + baseIdx;

    setStripOffset(0, false);
    // force reflow so the browser does not collapse the two transforms
    void el('capReelStrip').offsetHeight;

    var dur = 3200 + Math.floor(Math.random() * 900);
    setStripOffset(offsetForIndex(landIdx), true, dur);

    window.setTimeout(function () {
      state.spinning = false;
      state.sentence = chosen;
      showVerdict(chosen);
      paint();
    }, dur + 90);
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

  // Waluigi's commentary is selected from the severity band, not generated.
  function quoteFor(s, band) {
    var n = band ? band.name : 'Minor';
    var lines = {
      'Minor': [
        'That is not a punishment, that is an errand. Waluigi has done worse for free.',
        'The court has sentenced you to being mildly inconvenienced. Devastating.',
        'You will be bored. Waluigi files boredom under survivable.'
      ],
      'Serious': [
        'Real work, real hours, real chance of something going wrong. Pace yourself.',
        'Waluigi has seen people come back from this. Not all of them. Most.',
        'This is the band where the paperwork starts mattering.'
      ],
      'Grave': [
        'Waluigi would like the record to show he advised against whatever you did.',
        'People have not come back from this one. Bring garlic. Bring a will.',
        'The court has stopped pretending this is corrective.'
      ],
      'Capital': [
        'WAH. Waluigi is not writing a joke here. Roll the consequence and hope.',
        'This is the part of the docket the clerks do not read aloud.',
        'Waluigi will file the obituary himself. Free of charge. Reluctantly.'
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
    setStripOffset(0, false);
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

  // ------------------------------------------------------------------ wire
  document.addEventListener('DOMContentLoaded', function () {
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
