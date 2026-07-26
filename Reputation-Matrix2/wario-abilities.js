// Wario Ability Shop — training wing, integrated into the storefront.
//
// Abilities are NOT bought with gold. They're unlocked with Ability Points (AP)
// earned by levelling, so training tracks the XP ledger instead of the wallet.
// AP is auto-calculated from the levels already recorded in xp.html (via
// data/abilityPoints.json) — you never type a number in, and the shop never
// edits a character sheet. It only tells you what you can afford and prints a
// receipt for the table.
//
// The card also shows WHO holds an ability (portrait, title, class, level,
// status), whether they're the sole holder, and links to their dossier; and it
// inverts the data so you can pick a character and see everything they know.
(() => {
  if (window.WarioAbilities?.__v2) return;

  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  let data = null, pts = null, loaded = false;
  let view = 'abilities';           // 'abilities' | 'characters'
  let query = '', cls = '', type = '', sort = 'level';
  let trainee = localStorage.getItem('warioTrainee') || '';
  let affordOnly = false;

  /* Basket of abilities picked for the current trainee (not yet "spent"). */
  let basket = [];

  async function ensure() {
    if (loaded) return data;
    const grab = async (url, fallback) => {
      try { const r = await fetch(url, { cache: 'no-cache' }); return r.ok ? await r.json() : fallback; }
      catch { return fallback; }
    };
    [data, pts] = await Promise.all([
      grab('data/abilityShop.json', { abilities: [], classes: {}, types: {} }),
      grab('data/abilityPoints.json', { players: {}, costTiers: [], apByLevel: {} }),
    ]);
    loaded = true;
    return data;
  }
  const abilities = () => data?.abilities || [];
  const classes   = () => data?.classes   || {};
  const players   = () => pts?.players    || {};

  /* xp.html uses `toadlee`; abilityShop/wallets use `toad_lee`. */
  const norm = s => String(s ?? '').toLowerCase().replace(/[^a-z0-9]/g, '');

  /* AP cost mirrors tools/build_ability_points.py. Kept in sync via costTiers
     in the generated file, with the same tiers as a literal fallback. */
  function apCost(level) {
    const L = Number(level || 1);
    const tiers = pts?.costTiers?.length ? pts.costTiers
      : [{ maxLevel:3, ap:1 }, { maxLevel:7, ap:2 }, { maxLevel:11, ap:3 }, { maxLevel:99, ap:5 }];
    for (const t of tiers) if (L <= t.maxLevel) return t.ap;
    return tiers[tiers.length - 1].ap;
  }
  function tierLabel(level) {
    const L = Number(level || 1);
    const tiers = pts?.costTiers || [];
    for (const t of tiers) if (L <= t.maxLevel) return t.label || '';
    return '';
  }

  /* ---- the connected trainee, resolved against the XP ledger ------------- */
  function traineeRecord() {
    if (!trainee) return null;
    const P = players();
    if (P[trainee]) return { key: trainee, ...P[trainee] };
    const hit = Object.keys(P).find(k => norm(k) === norm(trainee));
    return hit ? { key: hit, ...P[hit] } : null;
  }

  /* Live budget = generated AP minus what's already known minus this basket. */
  function budget() {
    const t = traineeRecord();
    if (!t) return null;
    const pending = basket.reduce((s, a) => s + apCost(a.level), 0);
    return {
      ...t,
      pending,
      remaining: (t.apAvailable ?? 0) - pending,
      knownIds: new Set((t.known || []).map(k => k.id)),
    };
  }

  const STATUS_TONE = s => /critical|captured|defect/i.test(s) ? '#f87171'
    : /injur|run|separat|missing/i.test(s) ? '#fbbf24'
    : /active|safe/i.test(s) ? '#4ade80' : '#9ca3af';

  /* ---- character-first index: every holder and everything they know ---- */
  function characters() {
    const map = new Map();
    abilities().forEach(ab => (ab.knownBy || []).forEach(k => {
      if (!map.has(k.name)) map.set(k.name, { ...k, abilities: [] });
      map.get(k.name).abilities.push({ ...ab, unlocked: k.unlocked !== false });
    }));
    return [...map.values()].sort((a, b) => (b.abilities.length - a.abilities.length) || a.name.localeCompare(b.name));
  }

  function score(ab, terms) {
    if (!terms.length) return 1;
    const nm = ab.name.toLowerCase();
    const ds = String(ab.description || '').toLowerCase();
    const cn = String(ab.className || '').toLowerCase();
    const who = (ab.knownBy || []).map(k => k.name).join(' ').toLowerCase();
    let s = 0;
    for (const t of terms) {
      let h = 0;
      if (nm === t) h = 120; else if (nm.startsWith(t)) h = 80;
      else if (nm.includes(t)) h = 45;
      else if (who.includes(t)) h = 30;
      else if (cn.includes(t)) h = 18;
      else if (ds.includes(t)) h = 10;
      if (!h) return 0;
      s += h;
    }
    return s;
  }

  function filteredAbilities() {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let rows = abilities();
    if (cls)  rows = rows.filter(a => a.class === cls);
    if (type) rows = rows.filter(a => a.type === type);
    const b = budget();
    if (affordOnly && b) {
      rows = rows.filter(a => !b.knownIds.has(a.id) && a.level <= b.level && apCost(a.level) <= b.remaining);
    }
    if (terms.length) {
      rows = rows.map(a => ({ a, s: score(a, terms) })).filter(x => x.s > 0)
                 .sort((x, y) => y.s - x.s).map(x => x.a);
    } else {
      const by = {
        level:  (a, b2) => a.level - b2.level || a.name.localeCompare(b2.name),
        name:   (a, b2) => a.name.localeCompare(b2.name),
        ap:     (a, b2) => apCost(a.level) - apCost(b2.level) || a.level - b2.level,
        known:  (a, b2) => (b2.knownBy || []).length - (a.knownBy || []).length || a.name.localeCompare(b2.name),
        cls:    (a, b2) => String(a.className).localeCompare(String(b2.className)) || a.level - b2.level
      }[sort] || null;
      if (by) rows = [...rows].sort(by);
    }
    return rows;
  }

  /* ------------------------------- holder card ------------------------- */
  function holder(k, sole) {
    const tone = STATUS_TONE(k.status);
    const link = k.articleId
      ? `href="../index.html#/article/${encodeURIComponent(k.articleId)}"`
      : '';
    const Tag = k.articleId ? 'a' : 'div';
    return `<${Tag} class="wa-holder" ${link} style="--t:${tone}" ${k.articleId ? 'title="Open dossier in Waluipedia"' : ''}>
      <span class="wa-h-face">${esc(k.portrait || '🐸')}</span>
      <span class="wa-h-body">
        <span class="wa-h-top">
          <b>${esc(k.name)}</b>
          ${sole ? '<em class="wa-sole">only holder</em>' : ''}
          ${k.unlocked === false ? '<em class="wa-locked">locked</em>' : ''}
        </span>
        <span class="wa-h-sub">
          ${k.title ? esc(k.title) + ' · ' : ''}${esc(k.className || k.class || '')}${k.level ? ` · Lv ${k.level}` : ''}
        </span>
        ${k.status ? `<span class="wa-h-status">${esc(k.status)}</span>` : ''}
      </span>
    </${Tag}>`;
  }

  function abilityCard(a) {
    const sole = (a.knownBy || []).length === 1;
    const holders = (a.knownBy || []).map(k => holder(k, sole)).join('');
    const cost = apCost(a.level);
    const b = budget();

    // State against the connected trainee, if any.
    let state = '', action = '';
    if (b) {
      const inBasket = basket.some(x => x.id === a.id);
      if (b.knownIds.has(a.id)) {
        state = `<span class="wa-state known">✓ ${esc(b.name)} already knows this</span>`;
      } else if (a.level > b.level) {
        state = `<span class="wa-state gated">🔒 Needs level ${a.level} — ${esc(b.name)} is level ${b.level}</span>`;
      } else if (inBasket) {
        state = `<span class="wa-state picked">In this training plan</span>`;
        action = `<button class="wa-take drop" data-wa-drop="${esc(a.id)}">Remove</button>`;
      } else if (cost > b.remaining) {
        state = `<span class="wa-state short">Needs ${cost} AP — ${b.remaining} available</span>`;
      } else {
        action = `<button class="wa-take" data-wa-take="${esc(a.id)}">Train · ${cost} AP</button>`;
      }
    }

    return `<article class="wa-card" style="--c:${a.accent || '#8a4bff'}">
      <div class="wa-top">
        <span class="wa-ic">${esc(a.icon || '✦')}</span>
        <div class="wa-id">
          <h4>${esc(a.name)}</h4>
          <div class="wa-meta">
            <span class="wa-cls">${esc(a.className)}</span>
            <span>Lv ${a.level}</span>
            <span>${esc(a.typeLabel || a.type || '')}</span>
          </div>
        </div>
        <div class="wa-cost" title="${esc(tierLabel(a.level))} — unlocked with Ability Points, not gold">
          ${cost}<span>AP</span>
        </div>
      </div>
      ${a.description ? `<p class="wa-desc">${esc(a.description)}</p>` : ''}
      ${state || action ? `<div class="wa-actions">${state}${action}</div>` : ''}
      ${holders
        ? `<div class="wa-known"><div class="wa-known-h">Known by ${(a.knownBy || []).length === 1 ? '' : `· ${(a.knownBy || []).length} characters`}</div>${holders}</div>`
        : `<div class="wa-unknown">Nobody in the campaign has this yet — first to train it sets the precedent.</div>`}
    </article>`;
  }

  function characterCard(c) {
    const tone = STATUS_TONE(c.status);
    const total = c.abilities.length;
    const spent = c.abilities.reduce((s, a) => s + apCost(a.level), 0);
    const P = players();
    const rec = P[c.id] || P[Object.keys(P).find(k => norm(k) === norm(c.id)) || ''] || null;
    return `<article class="wa-card wa-char" style="--c:${tone}">
      <div class="wa-top">
        <span class="wa-ic big">${esc(c.portrait || '🐸')}</span>
        <div class="wa-id">
          <h4>${esc(c.name)}</h4>
          <div class="wa-meta">
            ${c.title ? `<span>${esc(c.title)}</span>` : ''}
            <span class="wa-cls">${esc(c.className || c.class || '')}</span>
            ${rec ? `<span>Lv ${rec.level}</span>` : (c.level ? `<span>Lv ${c.level}</span>` : '')}
          </div>
          ${c.status ? `<div class="wa-h-status" style="--t:${tone}">${esc(c.status)}</div>` : ''}
          ${c.affiliationLabel ? `<div class="wa-affil">${esc(c.affiliationLabel)}</div>` : ''}
        </div>
        <div class="wa-cost">${total}<span>abilities</span></div>
      </div>
      <div class="wa-charstats">
        <span>${spent} AP of training</span>
        ${rec ? `<span>${rec.apEarned} AP earned by Lv ${rec.level}</span>` : '<span class="wa-noxp">no XP record</span>'}
        ${rec && rec.apAvailable > 0 ? `<span class="wa-free">${rec.apAvailable} AP unspent</span>` : ''}
        ${rec && rec.grantedAboveLevel?.length
          ? `<span class="wa-granted" title="${esc(rec.grantedAboveLevel.map(g => g.name + ' (needs Lv' + g.requires + ')').join(', '))}">${rec.grantedAboveLevel.length} story-granted above level</span>`
          : ''}
        ${c.articleId ? `<a class="wa-dossier" href="../index.html#/article/${encodeURIComponent(c.articleId)}">Open dossier →</a>` : ''}
      </div>
      <div class="wa-ablist">
        ${c.abilities.slice().sort((a, b) => a.level - b.level).map(a =>
          `<span class="wa-ab ${a.unlocked ? '' : 'locked'}" style="--c:${a.accent || '#8a4bff'}" title="${esc(a.description || '')}">
             ${esc(a.icon || '✦')} ${esc(a.name)} <i>Lv${a.level} · ${apCost(a.level)}AP</i>
           </span>`).join('')}
      </div>
    </article>`;
  }

  /* --------------------------- the AP budget banner ---------------------- */
  function traineeOptions() {
    const P = players();
    return Object.entries(P)
      .sort(([, a], [, b]) => (b.level - a.level) || String(a.name).localeCompare(String(b.name)))
      .map(([k, v]) => `<option value="${esc(k)}" ${trainee === k ? 'selected' : ''}>${esc(v.name)} — Lv ${v.level} · ${v.apAvailable} AP free</option>`)
      .join('');
  }

  function budgetBar() {
    const b = budget();
    const picker = `<label class="wa-pick">🎓 Trainee
      <select id="waTrainee"><option value="">— pick a character —</option>${traineeOptions()}</select>
    </label>`;

    if (!b) {
      return `<div class="wa-budget empty">
        ${picker}
        <p class="wa-budget-note">Ability Points are earned by levelling up, not bought with gold.
        Pick a character and the shop reads their level straight from the XP ledger.</p>
      </div>`;
    }

    const negative = b.apAvailable < 0;
    const pct = b.apEarned > 0 ? Math.max(0, Math.min(100, (b.apSpent / b.apEarned) * 100)) : 0;
    return `<div class="wa-budget ${negative ? 'over' : ''}">
      ${picker}
      <div class="wa-budget-nums">
        <span class="wa-bn"><b>${b.level}</b><i>XP level</i></span>
        <span class="wa-bn"><b>${b.apEarned}</b><i>AP earned</i></span>
        <span class="wa-bn"><b>${b.apSpent}</b><i>AP in known abilities</i></span>
        ${b.pending ? `<span class="wa-bn pending"><b>${b.pending}</b><i>AP in this plan</i></span>` : ''}
        <span class="wa-bn ${b.remaining < 0 ? 'bad' : 'good'}"><b>${b.remaining}</b><i>AP available</i></span>
      </div>
      <div class="wa-budget-track"><div class="wa-budget-fill" style="width:${pct}%"></div></div>
      <div class="wa-budget-note">
        ${b.currentXP != null ? `${b.currentXP.toLocaleString()} / ${b.nextXP.toLocaleString()} XP → next level grants more AP. ` : ''}
        ${negative
          ? `<b>${esc(b.name)} holds more training than their level pays for.</b> That's story-granted
             (${esc((b.grantedAboveLevel || []).map(g => g.name).join(', ') || 'awarded in play')}) and is left exactly as canon records it —
             the shop reports, it doesn't overrule the table.`
          : `Auto-calculated from xp.html. Spend is advisory: the shop prints a receipt, it never edits a sheet.`}
      </div>
      ${basket.length ? receiptBlock(b) : ''}
    </div>`;
  }

  function receiptBlock(b) {
    const lines = basket.map(a =>
      `<li><span>${esc(a.icon || '✦')} ${esc(a.name)}</span><i>Lv ${a.level}</i><b>${apCost(a.level)} AP</b></li>`).join('');
    return `<div class="wa-receipt">
      <div class="wa-receipt-h">🧾 Training plan for ${esc(b.name)}</div>
      <ul class="wa-receipt-list">${lines}</ul>
      <div class="wa-receipt-total">
        <span>${basket.length} ${basket.length === 1 ? 'ability' : 'abilities'}</span>
        <b>${b.pending} AP</b>
        <span class="${b.remaining < 0 ? 'bad' : 'good'}">${b.remaining} AP left after</span>
      </div>
      <div class="wa-receipt-btns">
        <button class="wa-mini" data-wa-copy>Copy receipt</button>
        <button class="wa-mini ghost" data-wa-clearplan>Clear plan</button>
      </div>
    </div>`;
  }

  /** Plain-text receipt for pasting to the DM. No sheet is modified. */
  function receiptText() {
    const b = budget();
    if (!b) return '';
    const stamp = new Date().toISOString().slice(0, 10);
    const id = 'WAH-AP-' + Date.now().toString(36).toUpperCase();
    const rows = basket.map(a =>
      `  ${String(apCost(a.level)).padStart(2)} AP  ${a.name} (Lv ${a.level} ${a.className || ''})`.trimEnd());
    return [
      "WARIO'S WAREHOUSE — TRAINING WING",
      `Receipt ${id} · ${stamp}`,
      `Trainee: ${b.name} (${b.key}) — XP level ${b.level}`,
      '',
      'ABILITIES TRAINED',
      ...rows,
      '',
      `Total: ${b.pending} AP`,
      `AP earned at level ${b.level}: ${b.apEarned}`,
      `AP already committed: ${b.apSpent}`,
      `AP remaining after this plan: ${b.remaining}`,
      '',
      'Ability Points are earned by levelling, not purchased with gold.',
      'This receipt is a record for the table — no character sheet was modified.',
    ].join('\n');
  }

  function paint() {
    const body = document.querySelector('#warioAbil .wa-body');
    if (!body) return;
    const isA = view === 'abilities';
    const rows = isA ? filteredAbilities() : characters();
    const b = budget();
    const clsOpts = Object.entries(classes()).map(([k, v]) =>
      `<option value="${esc(k)}" ${cls === k ? 'selected' : ''}>${esc(v.name)}${v.count ? ` (${v.count})` : ''}</option>`).join('');
    const typeOpts = [...new Set(abilities().map(a => a.type))].sort().map(t =>
      `<option value="${esc(t)}" ${type === t ? 'selected' : ''}>${esc((data.types || {})[t]?.label || t)}</option>`).join('');

    body.innerHTML = `
      ${budgetBar()}
      <div class="wa-controls">
        <div class="wa-tabs">
          <button class="wa-tab ${isA ? 'active' : ''}" data-wa-view="abilities">✦ Abilities <i>${abilities().length}</i></button>
          <button class="wa-tab ${!isA ? 'active' : ''}" data-wa-view="characters">🐸 Who knows what <i>${characters().length}</i></button>
        </div>
        ${isA ? `
        <input id="waQ" class="wa-search" placeholder="Search abilities — name, effect, class, or a character's name…" value="${esc(query)}">
        <div class="wa-filters">
          <select class="wa-sel" data-wa-f="cls"><option value="">All classes</option>${clsOpts}</select>
          <select class="wa-sel" data-wa-f="type"><option value="">All types</option>${typeOpts}</select>
          <select class="wa-sel" data-wa-f="sort">
            <option value="level" ${sort==='level'?'selected':''}>Sort: Level</option>
            <option value="name"  ${sort==='name' ?'selected':''}>Sort: Name</option>
            <option value="ap"    ${sort==='ap'   ?'selected':''}>Sort: AP cost</option>
            <option value="known" ${sort==='known'?'selected':''}>Sort: Most known</option>
            <option value="cls"   ${sort==='cls'  ?'selected':''}>Sort: Class</option>
          </select>
          ${b ? `<button class="wa-sel wa-toggle ${affordOnly ? 'on' : ''}" data-wa-afford>${affordOnly ? '✓ ' : ''}Only what ${esc(b.name.split(' ')[0])} can train</button>` : ''}
          ${(query || cls || type || affordOnly) ? '<button class="wa-clear" data-wa-clear>Clear</button>' : ''}
        </div>
        <div class="wa-count">${rows.length} of ${abilities().length} abilities · ${abilities().filter(a => (a.knownBy||[]).length).length} are held by someone</div>
        ` : `<div class="wa-count">Every character with trained abilities, and exactly what they know.</div>`}
      </div>
      <div class="wa-grid">${rows.map(isA ? abilityCard : characterCard).join('') || '<p class="wa-empty">Nothing matches.</p>'}</div>`;

    const q = document.getElementById('waQ');
    if (q) q.oninput = () => {
      query = q.value;
      clearTimeout(paint._t);
      paint._t = setTimeout(() => {
        paint();
        const n = document.getElementById('waQ');
        if (n) { n.focus(); n.setSelectionRange(n.value.length, n.value.length); }
      }, 130);
    };
    const t = document.getElementById('waTrainee');
    if (t) t.onchange = () => {
      trainee = t.value;
      basket = [];
      try { localStorage.setItem('warioTrainee', trainee); } catch {}
      paint();
    };
    body.querySelectorAll('[data-wa-f]').forEach(el => {
      el.onchange = () => {
        const k = el.dataset.waF;
        if (k === 'cls') cls = el.value; else if (k === 'type') type = el.value; else sort = el.value;
        paint();
      };
    });
  }

  function open(v)  { if (v) view = v; ensure().then(() => { document.getElementById('warioAbil')?.classList.add('open'); document.body.classList.add('wa-locked'); paint(); }); }
  function close()  { document.getElementById('warioAbil')?.classList.remove('open'); document.body.classList.remove('wa-locked'); }

  function build() {
    if (document.getElementById('warioAbil')) return;
    const el = document.createElement('div');
    el.id = 'warioAbil';
    el.innerHTML = `<div class="wa-shell">
      <header class="wa-head">
        <div><h2>🎓 Ability Training</h2><p>Unlocked with Ability Points from levelling — not gold.</p></div>
        <button class="wa-close" data-wa-close aria-label="Close">×</button>
      </header>
      <div class="wa-body"></div>
    </div>`;
    document.body.appendChild(el);
    el.addEventListener('click', e => {
      if (e.target.id === 'warioAbil' || e.target.closest('[data-wa-close]')) return close();
      const v = e.target.closest('[data-wa-view]');
      if (v) { view = v.dataset.waView; paint(); return; }
      if (e.target.closest('[data-wa-clear]')) { query = ''; cls = ''; type = ''; affordOnly = false; paint(); return; }
      if (e.target.closest('[data-wa-afford]')) { affordOnly = !affordOnly; paint(); return; }

      const take = e.target.closest('[data-wa-take]');
      if (take) {
        const a = abilities().find(x => x.id === take.dataset.waTake);
        if (a && !basket.some(x => x.id === a.id)) basket.push(a);
        paint(); return;
      }
      const drop = e.target.closest('[data-wa-drop]');
      if (drop) { basket = basket.filter(x => x.id !== drop.dataset.waDrop); paint(); return; }
      if (e.target.closest('[data-wa-clearplan]')) { basket = []; paint(); return; }

      const copy = e.target.closest('[data-wa-copy]');
      if (copy) {
        const txt = receiptText();
        const done = () => { copy.textContent = 'Copied ✓'; setTimeout(() => { copy.textContent = 'Copy receipt'; }, 1400); };
        if (navigator.clipboard?.writeText) navigator.clipboard.writeText(txt).then(done).catch(done);
        else {
          const ta = document.createElement('textarea');
          ta.value = txt; document.body.appendChild(ta); ta.select();
          try { document.execCommand('copy'); } catch {}
          ta.remove(); done();
        }
        return;
      }
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();

  window.addEventListener('hashchange', () => {
    if (/^#\/?(ability|abilities|training)/.test(decodeURIComponent(location.hash || ''))) open();
  });

  window.WarioAbilities = { __v2: true, open, close, ready: ensure,
    get characters() { return characters(); },
    get points() { return pts; },
    apCost, receiptText,
    setTrainee(id) { trainee = id || ''; basket = []; paint(); } };
})();
