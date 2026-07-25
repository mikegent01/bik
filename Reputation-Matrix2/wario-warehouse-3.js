// WARIO'S WAREHOUSE 3.0
// A first-class storefront that replaces the floating corner buttons with a real
// dock + full-screen workspace. Runs as a DOM layer over the bundled React shop
// (which has no source in this repo), and absorbs the crafting market + ability
// shop into one unified interface with a single search.
//
// Fixes shipped here:
//   * one search across items / materials / abilities / vault (no more silos)
//   * category filter is derived, not required — items missing `category` in the
//     source data are classified at runtime instead of vanishing
//   * "unprepared" becomes a soft quality badge, not a filter that hides 7,702
//     of 7,722 items
//   * Your Loot reads live purchases (localStorage) merged with the DM ledger
//     (shop-purchases.json), so it updates the moment you buy something
//   * rarity-driven colour system applied consistently to every result
(() => {
  if (window.WarioWarehouse3?.__v3) return;

  /* ---------------------------------------------------------------- state */
  const LS = {
    loot:   'warioLootLedger',      // live purchases made in this browser
    cart:   'warioW3Cart',
    tab:    'warioW3Tab',
    dock:   'warioW3DockHidden'
  };
  const load = (k, f) => { try { return JSON.parse(localStorage.getItem(k) || 'null') ?? f; } catch { return f; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

  let items = [];            // shop items (7,700+)
  let materials = [];        // crafting materials
  let abilities = [];        // ability shop
  let vendors = {};
  let dmLedger = [];         // shop-purchases.json (DM-approved)
  let loot = load(LS.loot, []);
  let cart = load(LS.cart, []);
  let ready = false;
  let tab = localStorage.getItem(LS.tab) || 'all';
  let query = '';
  let filters = { rarity: '', category: '', vendor: '', quality: 'any', sort: 'relevance' };
  let ui = {};
  let renderTimer = null;

  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ------------------------------------------------------------- rarities */
  const RARITY = {
    junk:      { label: 'Junk',      color: '#6b7280', glow: 'rgba(107,114,128,.30)', rank: 0 },
    common:    { label: 'Common',    color: '#9ca3af', glow: 'rgba(156,163,175,.30)', rank: 1 },
    uncommon:  { label: 'Uncommon',  color: '#4ade80', glow: 'rgba(74,222,128,.30)',  rank: 2 },
    rare:      { label: 'Rare',      color: '#38bdf8', glow: 'rgba(56,189,248,.32)',  rank: 3 },
    very_rare: { label: 'Very Rare', color: '#60a5fa', glow: 'rgba(96,165,250,.32)',  rank: 4 },
    epic:      { label: 'Epic',      color: '#a855f7', glow: 'rgba(168,85,247,.35)',  rank: 5 },
    legendary: { label: 'Legendary', color: '#f59e0b', glow: 'rgba(245,158,11,.38)',  rank: 6 },
    mythic:    { label: 'Mythic',    color: '#f43f5e', glow: 'rgba(244,63,94,.38)',   rank: 7 },
    unique:    { label: 'Unique',    color: '#fb7185', glow: 'rgba(251,113,133,.36)', rank: 8 },
    forbidden: { label: 'Forbidden', color: '#dc2626', glow: 'rgba(220,38,38,.42)',   rank: 9 },
    cosmic:    { label: 'Cosmic',    color: '#22d3ee', glow: 'rgba(34,211,238,.38)',  rank: 10 },
    godly:     { label: 'Godly',     color: '#fde047', glow: 'rgba(253,224,71,.45)',  rank: 11 }
  };
  const rarityOf = r => RARITY[String(r || 'common').toLowerCase()] || RARITY.common;

  /* ------------------------------------------------------- category derive */
  // 1,890 source items have no `category`. Rather than hide them, classify at
  // read time from name/rarity so every item lands in a usable bucket.
  const CATEGORY = {
    equipment:   { label: 'Equipment',   icon: '⚔️' },
    consumables: { label: 'Consumables', icon: '🧪' },
    premium:     { label: 'Premium',     icon: '💎' },
    faction:     { label: 'Faction',     icon: '🏳️' },
    services:    { label: 'Services',    icon: '🛠️' },
    curiosities: { label: 'Curiosities', icon: '🔮' },
    forbidden:   { label: 'Forbidden',   icon: '☠️' },
    materials:   { label: 'Materials',   icon: '⚒️' },
    abilities:   { label: 'Abilities',   icon: '🎓' }
  };
  function deriveCategory(i) {
    if (i.category) return String(i.category).toLowerCase();
    const n = String(i.name || '').toLowerCase();
    const nm = (...w) => w.some(x => n.includes(x));
    const rar = String(i.rarity || '').toLowerCase();
    if (nm('service', 'training', 'passage', 'ferry', 'ride', 'repair', 'commission', 'contract', 'license', 'permit', 'insurance', 'escort', 'lesson', 'rental', 'safe house')) return 'services';
    if (nm('potion', 'elixir', 'tonic', 'draught', 'brew', 'candy', 'cake', 'pie', 'soup', 'stew', 'ration', 'meal', 'snack', 'tea', 'juice', 'ale', 'wine', 'bomb', 'grenade', 'flask', 'vial', 'dose', 'pill', 'antidote', 'salve')) return 'consumables';
    if (nm('key', 'banner', 'insignia', 'sigil', 'crest', 'seal', 'badge', 'emblem', 'standard', 'charter', 'writ', 'membership', 'uniform', 'flag')) return 'faction';
    if (nm('sword', 'blade', 'axe', 'hammer', 'maul', 'spear', 'lance', 'bow', 'staff', 'wand', 'rod', 'shield', 'armor', 'armour', 'helm', 'boots', 'glove', 'gauntlet', 'cloak', 'robe', 'mantle', 'ring', 'amulet', 'pendant', 'belt', 'mask', 'bracer', 'gun', 'rifle', 'pistol', 'dagger', 'knife', 'whip', 'scarf', 'tether', 'satchel', 'lantern', 'torch', 'tool', 'kit', 'rope', 'net', 'trap', 'compass', 'map')) return 'equipment';
    if (['godly', 'cosmic', 'mythic', 'unique'].includes(rar)) return 'premium';
    if (nm('forbidden', 'cursed', 'damned', 'profane')) return 'forbidden';
    return 'curiosities';
  }

  // Quality: a *badge*, never a hard filter by default.
  function qualityOf(i) {
    const hasRules = Array.isArray(i.effectDetails) && i.effectDetails.some(d => String(d?.rules || '').trim());
    const reviewed = !!String(i.aiReviewedAt || '').trim();
    if (reviewed && hasRules) return 'full';               // table-ready
    if (i.description && (i.effects || []).length && i.price > 0) return 'playable'; // usable now
    return 'stub';                                          // genuinely thin
  }
  const QUALITY = {
    full:     { label: 'Table-ready', icon: '★', color: '#4ade80', hint: 'Has reviewed mechanical rules for every effect.' },
    playable: { label: 'Playable',    icon: '◆', color: '#38bdf8', hint: 'Has description, effects and price. Rules text not written yet.' },
    stub:     { label: 'Stub',        icon: '○', color: '#9ca3af', hint: 'Missing description or effects — needs an editor pass.' }
  };

  /* ------------------------------------------------------------ data load */
  async function loadItems() {
    const bases = ['./data/shop-items/', './shop-items/'];
    const found = {};
    for (const base of bases) {
      let hit = 0, miss = 0;
      for (let n = 1; n <= 110; n++) {
        const file = `${base}items_${String(n).padStart(3, '0')}.js`;
        try {
          const res = await fetch(file, { cache: 'no-cache' });
          if (!res.ok) { if (hit && ++miss >= 6) break; continue; }
          const text = await res.text();
          if (/^\s*<!doctype|^\s*<html/i.test(text)) { if (hit && ++miss >= 6) break; continue; }
          Object.assign(found, parseItemsModule(text));
          hit++; miss = 0;
        } catch { if (hit && ++miss >= 6) break; }
      }
      if (hit) break;
    }
    return Object.values(found);
  }

  // Parse an ES module of item records without executing it.
  function parseItemsModule(text) {
    const out = {};
    try {
      const body = text.replace(/^\s*import[^\n]*\n/gm, '')
                       .replace(/export\s+const\s+(ITEMS_\w+)/, 'const $1')
                       .replace(/export\s*\{[^}]*\}\s*;?/g, '');
      const name = (text.match(/export\s+const\s+(ITEMS_\w+)/) || [])[1];
      if (!name) return out;
      // SHOP_CATEGORIES is referenced by some chunks; provide it.
      const shim = 'const SHOP_CATEGORIES={EQUIPMENT:"equipment",CONSUMABLES:"consumables",PREMIUM:"premium",FACTION:"faction",SERVICES:"services",CURIOSITIES:"curiosities",FORBIDDEN:"forbidden"};';
      // eslint-disable-next-line no-new-func
      const val = new Function(`${shim}\n${body}\nreturn ${name};`)();
      const arr = Array.isArray(val) ? val : Object.values(val || {});
      arr.forEach(it => { if (it && it.id) out[it.id] = it; });
    } catch (e) { /* skip malformed chunk */ }
    return out;
  }

  async function loadJson(url, fallback) {
    try { const r = await fetch(url, { cache: 'no-cache' }); return r.ok ? await r.json() : fallback; }
    catch { return fallback; }
  }

  async function loadVendors() {
    for (const p of ['./data/shop-items/vendors.js', './shop-items/vendors.js']) {
      try {
        const r = await fetch(p, { cache: 'no-cache' });
        if (!r.ok) continue;
        const t = await r.text();
        if (/^\s*<!doctype|^\s*<html/i.test(t)) continue;
        const name = (t.match(/export\s+const\s+(\w+)/) || [])[1];
        if (!name) continue;
        const body = t.replace(/export\s+const/, 'const').replace(/export\s*\{[^}]*\}\s*;?/g, '');
        // eslint-disable-next-line no-new-func
        return new Function(`${body}\nreturn ${name};`)() || {};
      } catch { continue; }
    }
    return window.WIKI_VENDORS || {};
  }

  async function boot() {
    const [it, craft, abil, purch, vend] = await Promise.all([
      loadItems(),
      loadJson('data/crafting.json', { materials: [] }),
      loadJson('data/abilityShop.json', { abilities: [] }),
      loadJson('shop-purchases.json', []),
      loadVendors()
    ]);
    items = it;
    materials = craft.materials || [];
    abilities = abil.abilities || [];
    dmLedger = Array.isArray(purch) ? purch : [];
    vendors = vend || {};
    ready = true;
    render();
  }

  /* ------------------------------------------------------------ the ledger */
  // Live purchases + DM-approved ledger, de-duplicated. This is what "Your Loot"
  // reads, which is why it now updates immediately after checkout.
  function lootRows() {
    const byId = new Map();
    dmLedger.forEach(p => {
      const id = p.itemId || p.id;
      if (!id) return;
      byId.set(id, { id, name: p.itemName || id, price: p.price || 0, qty: 1, at: p.approvedAt || '', source: 'DM ledger', player: p.playerKey || '' });
    });
    loot.forEach(p => {
      const cur = byId.get(p.id);
      if (cur) { cur.qty += p.qty || 1; cur.source = 'DM ledger + purchase'; }
      else byId.set(p.id, { ...p, source: 'Purchased here' });
    });
    return [...byId.values()].sort((a, b) => String(b.at).localeCompare(String(a.at)));
  }
  function recordPurchase(entries) {
    const now = new Date().toISOString();
    entries.forEach(e => {
      const cur = loot.find(x => x.id === e.id);
      if (cur) { cur.qty += e.qty || 1; cur.at = now; }
      else loot.push({ id: e.id, name: e.name, price: e.price, qty: e.qty || 1, at: now, kind: e.kind });
    });
    save(LS.loot, loot);
    document.dispatchEvent(new CustomEvent('wario-loot-changed', { detail: { count: loot.length } }));
  }

  /* --------------------------------------------------------------- search */
  // One index over every sellable thing. Scored, not just substring-filtered.
  function corpus() {
    const rows = [];
    if (tab === 'all' || tab === 'items') {
      items.forEach(i => rows.push({
        kind: 'item', id: i.id, name: i.name, desc: i.description,
        price: i.price || 0, rarity: String(i.rarity || 'common').toLowerCase(),
        category: deriveCategory(i), quality: qualityOf(i), vendor: i.vendor,
        icon: i.icon || '📦', level: i.levelRequirement || 0, raw: i
      }));
    }
    if (tab === 'all' || tab === 'materials') {
      materials.forEach(m => rows.push({
        kind: 'material', id: m.id, name: m.name, desc: m.description,
        price: Math.max(1, Math.round((Number(m.cost) || 5) / 10)),
        rarity: String(m.rarity || 'common').toLowerCase(),
        category: 'materials', quality: m.description ? 'playable' : 'stub',
        vendor: '', icon: m.icon || '🧪', level: 0, raw: m
      }));
    }
    if (tab === 'all' || tab === 'abilities') {
      abilities.forEach(a => rows.push({
        kind: 'ability', id: a.id, name: a.name, desc: a.description,
        price: a.price || 0, rarity: 'rare', category: 'abilities',
        quality: a.description ? 'full' : 'stub', vendor: a.className,
        icon: a.icon || '✦', level: a.level || 0, raw: a
      }));
    }
    return rows;
  }

  function score(row, terms) {
    if (!terms.length) return 1;
    const name = row.name.toLowerCase();
    const desc = String(row.desc || '').toLowerCase();
    const eff  = row.kind === 'item' ? (row.raw.effects || []).join(' ').toLowerCase() : '';
    let s = 0;
    for (const t of terms) {
      if (name === t) s += 120;
      else if (name.startsWith(t)) s += 70;
      else if (new RegExp(`\\b${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(name)) s += 48;
      else if (name.includes(t)) s += 30;
      else if (eff.includes(t)) s += 14;
      else if (desc.includes(t)) s += 8;
      else if (String(row.id).toLowerCase().includes(t)) s += 6;
      else return 0;                    // every term must match somewhere
    }
    s += rarityOf(row.rarity).rank * 0.6;
    if (row.quality === 'full') s += 6;
    else if (row.quality === 'stub') s -= 4;
    return s;
  }

  function results() {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let rows = corpus();
    if (filters.rarity)   rows = rows.filter(r => r.rarity === filters.rarity);
    if (filters.category) rows = rows.filter(r => r.category === filters.category);
    if (filters.vendor)   rows = rows.filter(r => r.vendor === filters.vendor);
    if (filters.quality === 'full')     rows = rows.filter(r => r.quality === 'full');
    if (filters.quality === 'playable') rows = rows.filter(r => r.quality !== 'stub');
    if (terms.length) {
      rows = rows.map(r => ({ r, s: score(r, terms) })).filter(x => x.s > 0)
                 .sort((a, b) => b.s - a.s).map(x => x.r);
    }
    const by = filters.sort;
    if (by === 'price_asc')  rows = [...rows].sort((a, b) => a.price - b.price);
    if (by === 'price_desc') rows = [...rows].sort((a, b) => b.price - a.price);
    if (by === 'name')       rows = [...rows].sort((a, b) => a.name.localeCompare(b.name));
    if (by === 'rarity')     rows = [...rows].sort((a, b) => rarityOf(b.rarity).rank - rarityOf(a.rarity).rank);
    if (by === 'quality')    rows = [...rows].sort((a, b) => ({ full: 0, playable: 1, stub: 2 }[a.quality] - { full: 0, playable: 1, stub: 2 }[b.quality]));
    if (!terms.length && by === 'relevance') {
      // No query: lead with table-ready, well-described stock, then alphabetical.
      // (Sorting purely by rarity made the first screen a solid block of gold.)
      const qRank = { full: 0, playable: 1, stub: 2 };
      rows = [...rows].sort((a, b) => qRank[a.quality] - qRank[b.quality] || a.name.localeCompare(b.name));
    }
    return rows;
  }

  /* ----------------------------------------------------------------- cart */
  const cartTotal = () => cart.reduce((s, c) => s + (c.price * (c.qty || 1)), 0);
  function addToCart(kind, id) {
    const row = corpusFind(kind, id);
    if (!row) return;
    const cur = cart.find(c => c.id === id && c.kind === kind);
    if (cur) cur.qty = (cur.qty || 1) + 1;
    else cart.push({ kind, id, name: row.name, price: row.price, qty: 1, icon: row.icon, rarity: row.rarity });
    save(LS.cart, cart); paint(); toast(`Added ${row.name}`, 'good');
  }
  function corpusFind(kind, id) {
    if (kind === 'item')     { const i = items.find(x => x.id === id); return i && { name: i.name, price: i.price || 0, icon: i.icon || '📦', rarity: String(i.rarity || 'common').toLowerCase() }; }
    if (kind === 'material') { const m = materials.find(x => x.id === id); return m && { name: m.name, price: Math.max(1, Math.round((Number(m.cost) || 5) / 10)), icon: m.icon || '🧪', rarity: String(m.rarity || 'common').toLowerCase() }; }
    if (kind === 'ability')  { const a = abilities.find(x => x.id === id); return a && { name: a.name, price: a.price || 0, icon: a.icon || '✦', rarity: 'rare' }; }
    return null;
  }
  function changeQty(kind, id, d) {
    const c = cart.find(x => x.id === id && x.kind === kind); if (!c) return;
    c.qty = (c.qty || 1) + d;
    if (c.qty <= 0) cart = cart.filter(x => !(x.id === id && x.kind === kind));
    save(LS.cart, cart); paint();
  }
  function checkout() {
    if (!cart.length) { toast('Cart is empty. Wario is unimpressed.', 'warn'); return; }
    const total = cartTotal(), n = cart.length;
    recordPurchase(cart.map(c => ({ id: c.id, name: c.name, price: c.price, qty: c.qty, kind: c.kind })));
    cart = []; save(LS.cart, cart);
    tab = 'loot'; localStorage.setItem(LS.tab, tab);
    render();
    toast(`Bought ${n} thing${n === 1 ? '' : 's'} for ${total.toLocaleString()}g — check Your Loot`, 'good');
  }

  /* ---------------------------------------------------------------- toast */
  function toast(msg, kind) {
    let t = document.getElementById('w3Toast');
    if (!t) { t = document.createElement('div'); t.id = 'w3Toast'; document.body.appendChild(t); }
    t.className = 'w3-toast ' + (kind || '');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2200);
  }

  /* --------------------------------------------------------------- render */
  function open(which) {
    if (which) { tab = which; localStorage.setItem(LS.tab, tab); }
    document.getElementById('warioW3')?.classList.add('open');
    document.body.classList.add('w3-locked');
    render();
    setTimeout(() => document.getElementById('w3Search')?.focus(), 60);
  }
  function close() {
    document.getElementById('warioW3')?.classList.remove('open');
    document.body.classList.remove('w3-locked');
  }

  const TABS = [
    ['all',       '🏬', 'Everything'],
    ['items',     '📦', 'Items'],
    ['materials', '⚒️', 'Materials'],
    ['abilities', '🎓', 'Abilities'],
    ['loot',      '🎒', 'Your Loot'],
    ['cart',      '🧾', 'Cart']
  ];

  function render() {
    const root = document.getElementById('warioW3');
    if (!root) return;
    const counts = { items: items.length, materials: materials.length, abilities: abilities.length, loot: lootRows().length, cart: cart.length };
    counts.all = counts.items + counts.materials + counts.abilities;

    root.querySelector('.w3-tabs').innerHTML = TABS.map(([k, ic, label]) =>
      `<button class="w3-tab ${tab === k ? 'active' : ''}" data-w3-tab="${k}">
         <span class="w3-tab-ic">${ic}</span><span>${label}</span>
         <span class="w3-tab-n">${(counts[k] ?? 0).toLocaleString()}</span>
       </button>`).join('');

    paint();
  }

  function paint() {
    const body = document.querySelector('#warioW3 .w3-body');
    if (!body) return;
    if (!ready) { body.innerHTML = `<div class="w3-loading"><div class="w3-spin">🧄</div><p>Wario is counting the inventory…</p></div>`; return; }
    if (tab === 'loot') return void (body.innerHTML = renderLoot());
    if (tab === 'cart') return void (body.innerHTML = renderCart());
    body.innerHTML = renderBrowse();
    wireBrowse();
  }

  function renderBrowse() {
    const rows = results();
    const shown = rows.slice(0, 240);
    const cats = [...new Set(corpus().map(r => r.category))].sort();
    const rars = [...new Set(corpus().map(r => r.rarity))].sort((a, b) => rarityOf(a).rank - rarityOf(b).rank);
    const stub = rows.filter(r => r.quality === 'stub').length;

    return `
      <div class="w3-controls">
        <div class="w3-searchwrap">
          <span class="w3-searchic">🔍</span>
          <input id="w3Search" class="w3-search" placeholder="Search ${(corpus().length).toLocaleString()} things — name, effect, description…" value="${esc(query)}">
          ${query ? `<button class="w3-clearq" data-w3-clearq>×</button>` : ''}
        </div>
        <div class="w3-filters">
          <select class="w3-sel" data-w3-filter="category">
            <option value="">All categories</option>
            ${cats.map(c => `<option value="${esc(c)}" ${filters.category === c ? 'selected' : ''}>${(CATEGORY[c]?.icon || '•')} ${esc(CATEGORY[c]?.label || c)}</option>`).join('')}
          </select>
          <select class="w3-sel" data-w3-filter="rarity">
            <option value="">All rarities</option>
            ${rars.map(r => `<option value="${esc(r)}" ${filters.rarity === r ? 'selected' : ''}>${esc(rarityOf(r).label)}</option>`).join('')}
          </select>
          <select class="w3-sel" data-w3-filter="quality">
            <option value="any"      ${filters.quality === 'any' ? 'selected' : ''}>Any quality</option>
            <option value="playable" ${filters.quality === 'playable' ? 'selected' : ''}>Playable or better</option>
            <option value="full"     ${filters.quality === 'full' ? 'selected' : ''}>Table-ready only</option>
          </select>
          <select class="w3-sel" data-w3-filter="sort">
            <option value="relevance"  ${filters.sort === 'relevance' ? 'selected' : ''}>Best match</option>
            <option value="price_asc"  ${filters.sort === 'price_asc' ? 'selected' : ''}>Price ↑</option>
            <option value="price_desc" ${filters.sort === 'price_desc' ? 'selected' : ''}>Price ↓</option>
            <option value="rarity"     ${filters.sort === 'rarity' ? 'selected' : ''}>Rarity</option>
            <option value="quality"    ${filters.sort === 'quality' ? 'selected' : ''}>Quality</option>
            <option value="name"       ${filters.sort === 'name' ? 'selected' : ''}>Name A→Z</option>
          </select>
        </div>
      </div>
      <div class="w3-resultbar">
        <span><b>${rows.length.toLocaleString()}</b> result${rows.length === 1 ? '' : 's'}${shown.length < rows.length ? ` · showing first ${shown.length}` : ''}</span>
        ${stub ? `<span class="w3-hint" title="${esc(QUALITY.stub.hint)}">${stub.toLocaleString()} stub${stub === 1 ? '' : 's'} in view — badged, not hidden</span>` : ''}
      </div>
      <div class="w3-grid">${shown.map(card).join('') || `<p class="w3-empty">Nothing matches. Wario suggests fewer filters.</p>`}</div>`;
  }

  function card(r) {
    const rar = rarityOf(r.rarity), q = QUALITY[r.quality];
    const owned = loot.some(l => l.id === r.id);
    const inCart = cart.some(c => c.id === r.id && c.kind === r.kind);
    const vend = vendors[r.vendor];
    return `<article class="w3-card" style="--rar:${rar.color};--glow:${rar.glow}">
      <div class="w3-card-top">
        <span class="w3-icon">${esc(r.icon)}</span>
        <div class="w3-card-id">
          <h4>${esc(r.name)}</h4>
          <div class="w3-card-meta">
            <span class="w3-rar">${esc(rar.label)}</span>
            <span class="w3-dot">·</span>
            <span>${esc(CATEGORY[r.category]?.label || r.category)}</span>
            ${r.level ? `<span class="w3-dot">·</span><span>Lv ${r.level}</span>` : ''}
          </div>
        </div>
        <span class="w3-q" style="color:${q.color}" title="${esc(q.hint)}">${q.icon}</span>
      </div>
      ${r.desc ? `<p class="w3-desc">${esc(String(r.desc).slice(0, 165))}${String(r.desc).length > 165 ? '…' : ''}</p>` : ''}
      <div class="w3-card-foot">
        <div class="w3-price">${r.price ? `${r.price.toLocaleString()}<span>g</span>` : '<span class="w3-free">—</span>'}</div>
        <div class="w3-actions">
          ${vend ? `<span class="w3-vend" title="${esc(vend.name || r.vendor)}">${esc(vend.icon || '🏪')}</span>` : ''}
          ${owned ? `<span class="w3-owned">OWNED</span>` : ''}
          <button class="w3-add ${inCart ? 'in' : ''}" data-w3-add="${esc(r.kind)}:${esc(r.id)}">${inCart ? 'In cart' : 'Add'}</button>
        </div>
      </div>
    </article>`;
  }

  function renderLoot() {
    const rows = lootRows();
    const spent = rows.reduce((s, r) => s + (r.price || 0) * (r.qty || 1), 0);
    if (!rows.length) return `<div class="w3-empty-state">
      <div class="w3-empty-ic">🎒</div><h3>No loot yet</h3>
      <p>Buy something and it lands here immediately — no page reload, no DM approval needed for your own purchases.</p>
      <button class="w3-cta" data-w3-tab="all">Start shopping</button></div>`;
    return `<div class="w3-lootbar">
        <div><b>${rows.length}</b> distinct item${rows.length === 1 ? '' : 's'}</div>
        <div><b>${spent.toLocaleString()}</b>g spent</div>
        <button class="w3-mini" data-w3-clearloot>Clear local purchases</button>
      </div>
      <div class="w3-grid">${rows.map(r => {
        const src = items.find(i => i.id === r.id) || abilities.find(a => a.id === r.id) || materials.find(m => m.id === r.id);
        const rar = rarityOf(src?.rarity || 'common');
        return `<article class="w3-card owned" style="--rar:${rar.color};--glow:${rar.glow}">
          <div class="w3-card-top">
            <span class="w3-icon">${esc(src?.icon || '🎁')}</span>
            <div class="w3-card-id"><h4>${esc(r.name)}</h4>
              <div class="w3-card-meta"><span class="w3-rar">${esc(rar.label)}</span>
              ${r.qty > 1 ? `<span class="w3-dot">·</span><span>×${r.qty}</span>` : ''}
              <span class="w3-dot">·</span><span>${esc(r.source)}</span></div>
            </div>
          </div>
          ${src?.description ? `<p class="w3-desc">${esc(String(src.description).slice(0, 150))}…</p>` : ''}
          <div class="w3-card-foot"><div class="w3-price">${(r.price || 0).toLocaleString()}<span>g</span></div>
            ${r.at ? `<span class="w3-when">${esc(String(r.at).slice(0, 10))}</span>` : ''}</div>
        </article>`;
      }).join('')}</div>`;
  }

  function renderCart() {
    if (!cart.length) return `<div class="w3-empty-state"><div class="w3-empty-ic">🧾</div><h3>Cart is empty</h3>
      <p>Wario is watching you not spend money.</p><button class="w3-cta" data-w3-tab="all">Browse the warehouse</button></div>`;
    return `<div class="w3-cartwrap"><div class="w3-cartlist">
      ${cart.map(c => {
        const rar = rarityOf(c.rarity);
        return `<div class="w3-cartrow" style="--rar:${rar.color}">
          <span class="w3-icon sm">${esc(c.icon)}</span>
          <div class="w3-cartid"><b>${esc(c.name)}</b><em>${esc(rarityOf(c.rarity).label)} · ${esc(c.kind)}</em></div>
          <div class="w3-qty">
            <button data-w3-qty="${esc(c.kind)}:${esc(c.id)}:-1">−</button>
            <span>${c.qty || 1}</span>
            <button data-w3-qty="${esc(c.kind)}:${esc(c.id)}:1">+</button>
          </div>
          <div class="w3-linetotal">${((c.price || 0) * (c.qty || 1)).toLocaleString()}g</div>
        </div>`;
      }).join('')}
      </div>
      <aside class="w3-checkout">
        <h3>Invoice</h3>
        <div class="w3-crow"><span>Items</span><b>${cart.reduce((s, c) => s + (c.qty || 1), 0)}</b></div>
        <div class="w3-crow total"><span>Total</span><b>${cartTotal().toLocaleString()}g</b></div>
        <button class="w3-pay" data-w3-checkout>PAY WARIO</button>
        <button class="w3-mini" data-w3-clearcart>Empty cart</button>
        <p class="w3-fineprint">Purchases post to <b>Your Loot</b> instantly. No refunds, no exceptions, no sympathy.</p>
      </aside></div>`;
  }

  function wireBrowse() {
    const s = document.getElementById('w3Search');
    if (s) {
      s.oninput = () => {
        query = s.value;
        clearTimeout(renderTimer);
        renderTimer = setTimeout(() => {
          paint();
          const n = document.getElementById('w3Search');
          if (n) { n.focus(); n.setSelectionRange(n.value.length, n.value.length); }
        }, 130);
      };
    }
    document.querySelectorAll('#warioW3 [data-w3-filter]').forEach(el => {
      el.onchange = () => { filters[el.dataset.w3Filter] = el.value; paint(); };
    });
  }

  /* ----------------------------------------------------------------- dock */
  function buildDock() {
    if (document.getElementById('warioW3Dock')) return;
    const dock = document.createElement('div');
    dock.id = 'warioW3Dock';
    dock.innerHTML = `
      <button class="w3-dockbtn brand" data-w3-open="all" title="Open Wario's Warehouse">
        <span class="w3-dockic">🏬</span>
        <span class="w3-docktxt"><b>WARIO'S WAREHOUSE</b><em>3.0 · everything in one place</em></span>
      </button>
      <button class="w3-dockbtn" data-w3-open="items"     title="Browse items"><span>📦</span><i id="w3nItems">—</i></button>
      <button class="w3-dockbtn" data-w3-open="materials" title="Crafting materials"><span>⚒️</span></button>
      <button class="w3-dockbtn" data-w3-open="abilities" title="Ability shop"><span>🎓</span></button>
      <button class="w3-dockbtn" data-w3-open="loot"      title="Your loot"><span>🎒</span><i id="w3nLoot">${lootRows().length || ''}</i></button>
      <button class="w3-dockbtn cart" data-w3-open="cart" title="Cart"><span>🧾</span><i id="w3nCart">${cart.length || ''}</i></button>
      <button class="w3-dockbtn music" data-w3-music title="Music is controlled site-wide">${window.WarioAudioBridge?.musicOn ? '🔊' : '🔇'}</button>`;
    document.body.appendChild(dock);
  }

  function buildShell() {
    if (document.getElementById('warioW3')) return;
    const el = document.createElement('div');
    el.id = 'warioW3';
    el.innerHTML = `<div class="w3-shell">
      <header class="w3-head">
        <div class="w3-brand">
          <span class="w3-logo">🏬</span>
          <div><h2>WARIO'S WAREHOUSE <span>3.0</span></h2>
          <p>One search. Everything Wario owns. Still no refunds.</p></div>
        </div>
        <div class="w3-headright">
          <button class="w3-iconbtn" data-w3-music title="Music (site-wide control)">${window.WarioAudioBridge?.musicOn ? '🔊' : '🔇'}</button>
          <button class="w3-iconbtn" data-w3-close aria-label="Close">×</button>
        </div>
      </header>
      <nav class="w3-tabs"></nav>
      <div class="w3-body"></div>
    </div>`;
    document.body.appendChild(el);

    el.addEventListener('click', e => {
      if (e.target.id === 'warioW3' || e.target.closest('[data-w3-close]')) return close();
      const t = e.target.closest('[data-w3-tab]');
      if (t) { tab = t.dataset.w3Tab; localStorage.setItem(LS.tab, tab); render(); return; }
      const add = e.target.closest('[data-w3-add]');
      if (add) { const [k, ...rest] = add.dataset.w3Add.split(':'); addToCart(k, rest.join(':')); return; }
      const q = e.target.closest('[data-w3-qty]');
      if (q) { const p = q.dataset.w3Qty.split(':'); changeQty(p[0], p.slice(1, -1).join(':'), Number(p[p.length - 1])); return; }
      if (e.target.closest('[data-w3-checkout]')) return checkout();
      if (e.target.closest('[data-w3-clearcart]')) { cart = []; save(LS.cart, cart); paint(); return; }
      if (e.target.closest('[data-w3-clearloot]')) { loot = []; save(LS.loot, loot); render(); toast('Local purchases cleared', 'warn'); return; }
      if (e.target.closest('[data-w3-clearq]')) { query = ''; paint(); return; }
      if (e.target.closest('[data-w3-music]')) return toggleMusic();
    });
  }

  function toggleMusic() {
    const on = window.WarioAudioBridge ? window.WarioAudioBridge.toggleMusic() : false;
    document.querySelectorAll('[data-w3-music]').forEach(b => b.textContent = on ? '🔊' : '🔇');
    toast(on ? 'Music on (site-wide)' : 'Music off (site-wide)', on ? 'good' : 'warn');
  }

  /* ------------------------------------------------------------------ init */
  function init() {
    buildDock(); buildShell();
    document.body.addEventListener('click', e => {
      const o = e.target.closest('[data-w3-open]');
      if (o) { e.preventDefault(); open(o.dataset.w3Open); }
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') close();
      // Ctrl/Cmd+K opens the warehouse search from anywhere.
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k' && document.getElementById('warioW3')) {
        e.preventDefault(); open(tab === 'loot' || tab === 'cart' ? 'all' : tab);
      }
    });
    document.addEventListener('wario-loot-changed', () => {
      const n = document.getElementById('w3nLoot'); if (n) n.textContent = lootRows().length || '';
    });
    // hash deep links: #warehouse, #warehouse/loot, #ability-shop, #crafting-materials
    const hash = () => {
      const h = decodeURIComponent(location.hash || '');
      if (/^#\/?(warehouse|shop3)/.test(h)) open((h.split('/')[1] || 'all'));
      else if (/^#\/?(ability-shop|abilities)/.test(h)) open('abilities');
      else if (/^#\/?crafting-materials/.test(h)) open('materials');
    };
    window.addEventListener('hashchange', hash);
    boot().then(hash);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.WarioWarehouse3 = {
    __v3: true, open, close, addToCart, checkout,
    get loot() { return lootRows(); },
    get cart() { return cart; },
    get counts() { return { items: items.length, materials: materials.length, abilities: abilities.length }; }
  };
})();
