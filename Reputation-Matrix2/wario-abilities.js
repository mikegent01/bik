// Wario Ability Shop — training wing, integrated into the storefront.
//
// The old "Known by: Dan" chip answered almost nothing. This shows WHO the
// holder is (portrait, title, class, level, status), WHETHER they actually have
// it unlocked, whether they're the sole holder, and links straight to their
// Waluipedia dossier. It also inverts the data: pick a character and see every
// ability they know, which is the question people actually ask at the table.
(() => {
  if (window.WarioAbilities?.__v1) return;

  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  let data = null, loaded = false;
  let view = 'abilities';           // 'abilities' | 'characters'
  let query = '', cls = '', type = '', sort = 'level';

  async function ensure() {
    if (loaded) return data;
    try {
      const r = await fetch('data/abilityShop.json', { cache: 'no-cache' });
      data = r.ok ? await r.json() : { abilities: [], classes: {}, types: {} };
    } catch { data = { abilities: [], classes: {}, types: {} }; }
    loaded = true;
    return data;
  }
  const abilities = () => data?.abilities || [];
  const classes   = () => data?.classes   || {};

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
    if (terms.length) {
      rows = rows.map(a => ({ a, s: score(a, terms) })).filter(x => x.s > 0)
                 .sort((x, y) => y.s - x.s).map(x => x.a);
    } else {
      const by = {
        level:  (a, b) => a.level - b.level || a.name.localeCompare(b.name),
        name:   (a, b) => a.name.localeCompare(b.name),
        price:  (a, b) => a.price - b.price,
        known:  (a, b) => (b.knownBy || []).length - (a.knownBy || []).length || a.name.localeCompare(b.name),
        cls:    (a, b) => String(a.className).localeCompare(String(b.className)) || a.level - b.level
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
        ${k.pool != null ? `<span class="wa-h-pool">pool ${k.pool}</span>` : ''}
      </span>
    </${Tag}>`;
  }

  function abilityCard(a) {
    const sole = (a.knownBy || []).length === 1;
    const holders = (a.knownBy || []).map(k => holder(k, sole)).join('');
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
        <div class="wa-cost">${(a.price || 0).toLocaleString()}<span>g</span></div>
      </div>
      ${a.description ? `<p class="wa-desc">${esc(a.description)}</p>` : ''}
      ${holders
        ? `<div class="wa-known"><div class="wa-known-h">Known by ${(a.knownBy || []).length === 1 ? '' : `· ${(a.knownBy || []).length} characters`}</div>${holders}</div>`
        : `<div class="wa-unknown">Nobody in the campaign has this yet — first buyer sets the precedent.</div>`}
    </article>`;
  }

  function characterCard(c) {
    const tone = STATUS_TONE(c.status);
    const total = c.abilities.length;
    const unlocked = c.abilities.filter(a => a.unlocked).length;
    const worth = c.abilities.reduce((s, a) => s + (a.price || 0), 0);
    return `<article class="wa-card wa-char" style="--c:${tone}">
      <div class="wa-top">
        <span class="wa-ic big">${esc(c.portrait || '🐸')}</span>
        <div class="wa-id">
          <h4>${esc(c.name)}</h4>
          <div class="wa-meta">
            ${c.title ? `<span>${esc(c.title)}</span>` : ''}
            <span class="wa-cls">${esc(c.className || c.class || '')}</span>
            ${c.level ? `<span>Lv ${c.level}</span>` : ''}
          </div>
          ${c.status ? `<div class="wa-h-status" style="--t:${tone}">${esc(c.status)}</div>` : ''}
          ${c.affiliationLabel ? `<div class="wa-affil">${esc(c.affiliationLabel)}</div>` : ''}
        </div>
        <div class="wa-cost">${total}<span>abilities</span></div>
      </div>
      <div class="wa-charstats">
        <span>${unlocked}/${total} unlocked</span>
        <span>${worth.toLocaleString()}g of training</span>
        ${c.articleId ? `<a class="wa-dossier" href="../index.html#/article/${encodeURIComponent(c.articleId)}">Open dossier →</a>` : ''}
      </div>
      <div class="wa-ablist">
        ${c.abilities.sort((a, b) => a.level - b.level).map(a =>
          `<span class="wa-ab ${a.unlocked ? '' : 'locked'}" style="--c:${a.accent || '#8a4bff'}" title="${esc(a.description || '')}">
             ${esc(a.icon || '✦')} ${esc(a.name)} <i>Lv${a.level}</i>
           </span>`).join('')}
      </div>
    </article>`;
  }

  function paint() {
    const body = document.querySelector('#warioAbil .wa-body');
    if (!body) return;
    const isA = view === 'abilities';
    const rows = isA ? filteredAbilities() : characters();
    const clsOpts = Object.entries(classes()).map(([k, v]) =>
      `<option value="${esc(k)}" ${cls === k ? 'selected' : ''}>${esc(v.name)} (${v.count})</option>`).join('');
    const typeOpts = [...new Set(abilities().map(a => a.type))].sort().map(t =>
      `<option value="${esc(t)}" ${type === t ? 'selected' : ''}>${esc((data.types || {})[t]?.label || t)}</option>`).join('');

    body.innerHTML = `
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
            <option value="price" ${sort==='price'?'selected':''}>Sort: Price</option>
            <option value="known" ${sort==='known'?'selected':''}>Sort: Most known</option>
            <option value="cls"   ${sort==='cls'  ?'selected':''}>Sort: Class</option>
          </select>
          ${(query || cls || type) ? '<button class="wa-clear" data-wa-clear>Clear</button>' : ''}
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
        <div><h2>🎓 Ability Training</h2><p>What Wario will teach you — and who already knows it.</p></div>
        <button class="wa-close" data-wa-close aria-label="Close">×</button>
      </header>
      <div class="wa-body"></div>
    </div>`;
    document.body.appendChild(el);
    el.addEventListener('click', e => {
      if (e.target.id === 'warioAbil' || e.target.closest('[data-wa-close]')) return close();
      const v = e.target.closest('[data-wa-view]');
      if (v) { view = v.dataset.waView; paint(); return; }
      if (e.target.closest('[data-wa-clear]')) { query = ''; cls = ''; type = ''; paint(); return; }
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();

  window.addEventListener('hashchange', () => {
    if (/^#\/?(ability|abilities)/.test(decodeURIComponent(location.hash || ''))) open();
  });

  window.WarioAbilities = { __v1: true, open, close, ready: ensure,
    get characters() { return characters(); } };
})();
