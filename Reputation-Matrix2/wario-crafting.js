// Wario Crafting Index
// The crafting data (1,038 recipes / 372 materials / 8 schools) lived only in
// the wiki, so buying reagents in the shop meant leaving the shop to find out
// what they were for. This brings the index in as a first-class panel:
// potions, scrolls and smithing recipes, their materials, and — crucially —
// a direct link from each material to buying it.
(() => {
  if (window.WarioCrafting?.__v1) return;

  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  let data = null, loaded = false;
  let tab = 'recipes', query = '', school = '', cat = '';

  const RARITY = {
    junk:'#6b7280', common:'#9ca3af', uncommon:'#22c55e', rare:'#3b82f6', very_rare:'#60a5fa',
    epic:'#a855f7', legendary:'#f59e0b', mythic:'#f43f5e', unique:'#fb7185',
    forbidden:'#dc2626', cosmic:'#22d3ee', godly:'#ec4899', wario_tier:'#fbbf24'
  };
  const colorOf = r => RARITY[String(r || 'common').toLowerCase()] || RARITY.common;

  async function ensure() {
    if (loaded) return data;
    try {
      const r = await fetch('data/crafting.json', { cache: 'no-cache' });
      data = r.ok ? await r.json() : { recipes: [], materials: [], schools: {} };
    } catch { data = { recipes: [], materials: [], schools: {} }; }
    loaded = true;
    return data;
  }

  const recipes   = () => data?.recipes   || [];
  const materials = () => data?.materials || [];
  const schools   = () => data?.schools   || {};
  const matById   = id => materials().find(m => m.id === id);

  /* Scored search so "fire scroll" narrows instead of returning everything. */
  function score(row, terms) {
    if (!terms.length) return 1;
    const nm = String(row.name || '').toLowerCase();
    const ds = String(row.description || '').toLowerCase();
    const ef = String(row.effect || '').toLowerCase();
    const cat = String(row.category || row.type || '').toLowerCase();
    let s = 0;
    for (const t of terms) {
      let hit = 0;
      if (nm === t) hit = 120;
      else if (nm.startsWith(t)) hit = 80;
      else if (nm.includes(t)) hit = 45;
      else if (ef.includes(t)) hit = 20;
      else if (ds.includes(t)) hit = 12;
      else if (cat.includes(t)) hit = 8;
      if (!hit) return 0;
      s += hit;
    }
    return s;
  }

  function filtered(list) {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let rows = list;
    if (school) rows = rows.filter(r => String(r.school || '').toUpperCase() === school);
    if (cat)    rows = rows.filter(r => String(r.category || r.type || '') === cat);
    if (terms.length) {
      rows = rows.map(r => ({ r, s: score(r, terms) })).filter(x => x.s > 0)
                 .sort((a, b) => b.s - a.s).map(x => x.r);
    }
    return rows;
  }

  function recipeCard(r) {
    const sc = schools()[String(r.school || '').toUpperCase()];
    const col = sc?.color || colorOf(r.rarity);
    const mats = (r.materials || []).map(m => {
      const meta = matById(m.id);
      return `<button class="wc-mat" data-wc-buy="${esc(meta?.name || m.id)}" title="Find this material in the shop">
        <span>${esc(meta?.icon || '•')}</span>
        <span class="wc-mat-n">${esc(meta?.name || m.id)}</span>
        <span class="wc-mat-q">×${m.quantity || 1}</span>
      </button>`;
    }).join('');
    return `<article class="wc-card" style="--c:${col}">
      <div class="wc-top">
        <span class="wc-ic">${esc(r.icon || '⚗️')}</span>
        <div class="wc-id">
          <h4>${esc(r.name)}</h4>
          <div class="wc-meta">
            ${sc ? `<span class="wc-school">${esc(sc.icon || '')} ${esc(sc.name)}</span>` : ''}
            ${r.spellLevel != null ? `<span>Spell Lv ${r.spellLevel}</span>` : ''}
            ${r.levelRequirement ? `<span>Req Lv ${r.levelRequirement}</span>` : ''}
          </div>
        </div>
        <div class="wc-cost">${(r.goldCost || 0).toLocaleString()}<span>g</span></div>
      </div>
      ${r.description ? `<p class="wc-desc">${esc(r.description)}</p>` : ''}
      ${r.effect ? `<div class="wc-effect">${esc(r.effect)}</div>` : ''}
      <div class="wc-stats">
        ${r.craftTime ? `<span>⏱ ${esc(String(r.craftTime))}h</span>` : ''}
        ${r.successChance ? `<span class="${r.successChance >= 80 ? 'good' : r.successChance >= 50 ? 'mid' : 'bad'}">✓ ${r.successChance}%</span>` : ''}
        <span class="wc-type">${esc(r.category || r.type || 'recipe')}</span>
      </div>
      ${mats ? `<div class="wc-mats"><div class="wc-mats-h">Materials — click to shop</div><div class="wc-mats-l">${mats}</div></div>` : ''}
    </article>`;
  }

  function materialCard(m) {
    const col = colorOf(m.rarity);
    const usedIn = recipes().filter(r => (r.materials || []).some(x => x.id === m.id)).length;
    return `<article class="wc-card" style="--c:${col}">
      <div class="wc-top">
        <span class="wc-ic">${esc(m.icon || '🧪')}</span>
        <div class="wc-id">
          <h4>${esc(m.name)}</h4>
          <div class="wc-meta">
            <span class="wc-rar" style="color:${col}">${esc(String(m.rarity || 'common').replace(/_/g, ' '))}</span>
            <span>${esc(m.category || 'material')}</span>
            ${usedIn ? `<span>used in ${usedIn} recipe${usedIn === 1 ? '' : 's'}</span>` : ''}
          </div>
        </div>
        <div class="wc-cost">${(m.cost || 0).toLocaleString()}<span>g</span></div>
      </div>
      ${m.description ? `<p class="wc-desc">${esc(m.description)}</p>` : ''}
      ${(m.effects || []).length ? `<div class="wc-effect">${esc((m.effects || []).join(' · '))}</div>` : ''}
      <div class="wc-mats-l"><button class="wc-mat" data-wc-buy="${esc(m.name)}">🛒 Find in shop</button></div>
    </article>`;
  }

  function paint() {
    const body = document.querySelector('#warioCraft .wc-body');
    if (!body) return;
    const isR = tab === 'recipes';
    const rows = filtered(isR ? recipes() : materials());
    const shown = rows.slice(0, 150);
    const cats = [...new Set((isR ? recipes() : materials()).map(r => r.category || r.type).filter(Boolean))].sort();
    const schoolOpts = Object.entries(schools()).map(([k, v]) =>
      `<option value="${esc(k)}" ${school === k ? 'selected' : ''}>${esc(v.icon || '')} ${esc(v.name)}</option>`).join('');

    body.innerHTML = `
      <div class="wc-controls">
        <div class="wc-tabs">
          <button class="wc-tab ${isR ? 'active' : ''}" data-wc-tab="recipes">⚗️ Recipes <i>${recipes().length}</i></button>
          <button class="wc-tab ${!isR ? 'active' : ''}" data-wc-tab="materials">🪨 Materials <i>${materials().length}</i></button>
        </div>
        <input id="wcQ" class="wc-search" placeholder="Search ${isR ? 'recipes' : 'materials'} — name, effect, description…" value="${esc(query)}">
        <div class="wc-filters">
          ${isR ? `<select class="wc-sel" data-wc-f="school"><option value="">All schools</option>${schoolOpts}</select>` : ''}
          <select class="wc-sel" data-wc-f="cat">
            <option value="">All types</option>
            ${cats.map(c => `<option value="${esc(c)}" ${cat === c ? 'selected' : ''}>${esc(String(c).replace(/_/g, ' '))}</option>`).join('')}
          </select>
          ${(query || school || cat) ? `<button class="wc-clear" data-wc-clear>Clear</button>` : ''}
        </div>
        <div class="wc-count">${rows.length.toLocaleString()} result${rows.length === 1 ? '' : 's'}${shown.length < rows.length ? ` · showing ${shown.length}` : ''}</div>
      </div>
      <div class="wc-grid">${shown.map(isR ? recipeCard : materialCard).join('') || '<p class="wc-empty">Nothing matches. Try fewer words.</p>'}</div>`;

    const q = document.getElementById('wcQ');
    if (q) q.oninput = () => {
      query = q.value;
      clearTimeout(paint._t);
      paint._t = setTimeout(() => {
        paint();
        const n = document.getElementById('wcQ');
        if (n) { n.focus(); n.setSelectionRange(n.value.length, n.value.length); }
      }, 140);
    };
    body.querySelectorAll('[data-wc-f]').forEach(el => {
      el.onchange = () => { const k = el.dataset.wcF; if (k === 'school') school = el.value; else cat = el.value; paint(); };
    });
  }

  function open()  { ensure().then(() => { document.getElementById('warioCraft')?.classList.add('open'); document.body.classList.add('wc-locked'); paint(); }); }
  function close() { document.getElementById('warioCraft')?.classList.remove('open'); document.body.classList.remove('wc-locked'); }

  /** Push a material name into the shop's own search box. */
  function findInShop(name) {
    close();
    const input = document.querySelector('input.wario-search');
    if (!input) return;
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
    setter ? setter.call(input, name) : (input.value = name);
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function build() {
    if (document.getElementById('warioCraft')) return;
    const el = document.createElement('div');
    el.id = 'warioCraft';
    el.innerHTML = `<div class="wc-shell">
      <header class="wc-head">
        <div><h2>⚒️ Crafting Index</h2><p>Potions, scrolls and smithing — every recipe, every reagent, and where to buy it.</p></div>
        <button class="wc-close" data-wc-close aria-label="Close">×</button>
      </header>
      <div class="wc-body"></div>
    </div>`;
    document.body.appendChild(el);
    el.addEventListener('click', e => {
      if (e.target.id === 'warioCraft' || e.target.closest('[data-wc-close]')) return close();
      const t = e.target.closest('[data-wc-tab]');
      if (t) { tab = t.dataset.wcTab; query = ''; school = ''; cat = ''; paint(); return; }
      if (e.target.closest('[data-wc-clear]')) { query = ''; school = ''; cat = ''; paint(); return; }
      const buy = e.target.closest('[data-wc-buy]');
      if (buy) findInShop(buy.dataset.wcBuy);
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();

  window.addEventListener('hashchange', () => {
    if (/^#\/?crafting/.test(decodeURIComponent(location.hash || ''))) open();
  });

  window.WarioCrafting = { __v1: true, open, close, ready: ensure,
    get counts() { return { recipes: recipes().length, materials: materials().length }; } };
})();
