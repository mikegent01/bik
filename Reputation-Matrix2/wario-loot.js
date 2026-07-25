// Wario Loot Vault
// Replaces the bundled "VAULT" screen, which only ever read the static DM ledger
// (shop-purchases.json) and therefore never showed anything the player bought.
//
// This merges:
//   * shop-purchases.json  — DM-approved acquisitions
//   * localStorage ledger  — anything bought in this browser (live, instant)
//   * data/itemLoreLinks.json — where each item actually shows up in the story,
//     linked through to the Waluipedia article / battle record.
(() => {
  if (window.WarioLoot?.__v1) return;

  const LS = 'warioLootLedger';
  const load = () => { try { return JSON.parse(localStorage.getItem(LS) || '[]'); } catch { return []; } };
  const persist = v => { try { localStorage.setItem(LS, JSON.stringify(v)); } catch (e) {} };
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  let local = load();
  let dm = [];
  let lore = {};
  let itemsById = {};
  let loaded = false;

  const RARITY = {
    junk:'#6b7280', common:'#9ca3af', uncommon:'#4ade80', rare:'#38bdf8', very_rare:'#60a5fa',
    epic:'#a855f7', legendary:'#f59e0b', mythic:'#f43f5e', unique:'#fb7185',
    forbidden:'#dc2626', cosmic:'#22d3ee', godly:'#fde047', wario_tier:'#fde047'
  };
  const colorOf = r => RARITY[String(r || 'common').toLowerCase()] || RARITY.common;

  const KIND_LABEL = {
    events: 'Event', battles: 'Battle', majorBattles: 'Battle',
    characters: 'Character', locations: 'Location', trials: 'Trial', factions: 'Faction'
  };

  async function ensure() {
    if (loaded) return;
    const j = async (u, f) => { try { const r = await fetch(u, { cache: 'no-cache' }); return r.ok ? await r.json() : f; } catch { return f; } };
    [dm, lore] = await Promise.all([ j('shop-purchases.json', []), j('data/itemLoreLinks.json', {}) ]);
    if (!Array.isArray(dm)) dm = [];
    // Item metadata comes from whatever the page already loaded, else lazily.
    itemsById = window.__warioItemsById || {};
    loaded = true;
  }

  /** Merged, de-duplicated ownership list. */
  function rows() {
    const map = new Map();
    dm.forEach(p => {
      const id = p.itemId || p.id; if (!id) return;
      map.set(id, { id, name: p.itemName || id, price: p.price || 0, qty: 1,
                    at: p.approvedAt || '', origin: 'DM-approved', player: p.playerKey || '' });
    });
    local.forEach(p => {
      const cur = map.get(p.id);
      if (cur) { cur.qty += p.qty || 1; cur.origin = 'DM-approved + bought'; }
      else map.set(p.id, { ...p, origin: 'Bought in shop' });
    });
    return [...map.values()].sort((a, b) => String(b.at).localeCompare(String(a.at)));
  }
  const count = () => rows().length;

  function record(entries) {
    const now = new Date().toISOString();
    entries.forEach(e => {
      const cur = local.find(x => x.id === e.id);
      if (cur) { cur.qty += e.qty || 1; cur.at = now; }
      else local.push({ id: e.id, name: e.name, price: e.price || 0, qty: e.qty || 1, at: now, rarity: e.rarity });
    });
    persist(local);
    document.dispatchEvent(new CustomEvent('wario-loot-changed', { detail: { count: count() } }));
    if (document.getElementById('warioLoot')?.classList.contains('open')) paint();
  }

  /* ---------------------------------------------------------------- render */
  function loreBlock(id) {
    const rec = lore[id];
    if (!rec || !rec.refs?.length) {
      return `<div class="wl-lore empty">No story appearances recorded yet. When this item shows up in a session log, it will link here automatically.</div>`;
    }
    return `<div class="wl-lore">
      <div class="wl-lore-h">Appears in the story</div>
      <div class="wl-lore-links">${rec.refs.map(r =>
        `<a class="wl-ref" href="../index.html${esc(r.route)}" title="Open in Waluipedia">
           <span class="wl-ref-k">${esc(KIND_LABEL[r.kind] || r.kind)}</span>
           <span class="wl-ref-n">${esc(r.name)}</span>
         </a>`).join('')}</div>
    </div>`;
  }

  function paint() {
    const body = document.querySelector('#warioLoot .wl-body');
    if (!body) return;
    const list = rows();
    if (!list.length) {
      body.innerHTML = `<div class="wl-empty">
        <div class="wl-empty-ic">🎒</div>
        <h3>Nothing owned yet</h3>
        <p>Buy something in the warehouse and it lands here instantly — plus every place it turns up in the campaign record.</p>
      </div>`;
      return;
    }
    const spent = list.reduce((s, r) => s + (r.price || 0) * (r.qty || 1), 0);
    const linked = list.filter(r => lore[r.id]?.refs?.length).length;
    body.innerHTML = `
      <div class="wl-stats">
        <div><b>${list.length}</b><span>items owned</span></div>
        <div><b>${spent.toLocaleString()}</b><span>gold spent</span></div>
        <div><b>${linked}</b><span>with story appearances</span></div>
        <button class="wl-mini" data-wl-clear>Clear local purchases</button>
      </div>
      <div class="wl-list">${list.map(r => {
        const meta = itemsById[r.id] || {};
        const col = colorOf(meta.rarity || r.rarity);
        return `<article class="wl-card" style="--c:${col}">
          <div class="wl-top">
            <span class="wl-ic">${esc(meta.icon || '🎁')}</span>
            <div class="wl-id">
              <h4>${esc(r.name)}</h4>
              <div class="wl-meta">
                ${meta.rarity ? `<span class="wl-rar">${esc(String(meta.rarity).replace(/_/g, ' '))}</span>` : ''}
                ${r.qty > 1 ? `<span>×${r.qty}</span>` : ''}
                <span class="wl-origin">${esc(r.origin)}</span>
                ${r.at ? `<span>${esc(String(r.at).slice(0, 10))}</span>` : ''}
              </div>
            </div>
            <div class="wl-price">${(r.price || 0).toLocaleString()}<span>g</span></div>
          </div>
          ${meta.description ? `<p class="wl-desc">${esc(String(meta.description).slice(0, 170))}${String(meta.description).length > 170 ? '…' : ''}</p>` : ''}
          ${loreBlock(r.id)}
        </article>`;
      }).join('')}</div>`;
  }

  function open() {
    ensure().then(() => {
      itemsById = window.__warioItemsById || itemsById;
      document.getElementById('warioLoot')?.classList.add('open');
      document.body.classList.add('wl-locked');
      paint();
    });
  }
  function close() {
    document.getElementById('warioLoot')?.classList.remove('open');
    document.body.classList.remove('wl-locked');
  }

  function build() {
    if (document.getElementById('warioLoot')) return;
    const el = document.createElement('div');
    el.id = 'warioLoot';
    el.innerHTML = `<div class="wl-shell">
      <header class="wl-head">
        <div><h2>🎒 Your Loot</h2><p>Everything you own, and where it shows up in the campaign.</p></div>
        <button class="wl-close" data-wl-close aria-label="Close">×</button>
      </header>
      <div class="wl-body"></div>
    </div>`;
    document.body.appendChild(el);
    el.addEventListener('click', e => {
      if (e.target.id === 'warioLoot' || e.target.closest('[data-wl-close]')) return close();
      if (e.target.closest('[data-wl-clear]')) {
        local = []; persist(local);
        document.dispatchEvent(new CustomEvent('wario-loot-changed', { detail: { count: count() } }));
        paint();
      }
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();

  // Listen for the bundled shop's own add-to-cart / purchase signal.
  window.addEventListener('wario-item-purchased', e => {
    const d = e.detail || {};
    if (d.id) record([{ id: d.id, name: d.name || d.id, price: d.price || 0, qty: d.qty || 1, rarity: d.rarity }]);
  });

  window.WarioLoot = { __v1: true, open, close, record, rows, count, ready: ensure, get lore() { return lore; } };
})();
