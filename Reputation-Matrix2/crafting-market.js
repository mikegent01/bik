// Wario Crafting Material Market — separate overlay injected into shop.html.
(() => {
  if (window.WarioCraftingMarket?.version) return;
  const STORE = 'warioCraftingMaterialBasket';
  const RECEIPTS = 'warioCraftingReceipts';
  const RATE = { gold: 1, midland_ducat: 0.9, wario_coin: 1.2 };
  const ICON = { gold: '💰', midland_ducat: '🦁', wario_coin: '🟡' };
  const NAME = { gold: 'Gold', midland_ducat: 'Midland Ducats', wario_coin: 'Wario Coins' };
  const rarityMarkup = { common: 1, uncommon: 1.2, rare: 1.65, very_rare: 2.25, legendary: 3.5 };
  const rarityColor = { common: '#94a3b8', uncommon: '#22c55e', rare: '#38bdf8', very_rare: '#a855f7', legendary: '#eab308' };
  let data = null;
  let materials = [];
  let basket = load(STORE, []);
  let receipts = load(RECEIPTS, []);
  let ui = {};

  function esc(v){return String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function load(k, fallback){ try { return JSON.parse(localStorage.getItem(k) || 'null') || fallback; } catch { return fallback; } }
  function save(){ localStorage.setItem(STORE, JSON.stringify(basket)); localStorage.setItem(RECEIPTS, JSON.stringify(receipts.slice(-25))); }
  function goldBase(m){ return Math.max(0.01, (Number(m?.cost) || 5) / 10); }
  function goldPrice(m){ return goldBase(m) * (rarityMarkup[String(m?.rarity || '').toLowerCase()] || 1.15); }
  function quote(gold, cur){ const n = gold / RATE[cur]; return `${ICON[cur]} ${n < 10 ? n.toFixed(2) : Math.ceil(n).toLocaleString()} ${NAME[cur]}`; }
  function find(id){ return materials.find(m => m.id === id); }
  function basketTotal(){ return basket.reduce((s, x) => s + (goldPrice(find(x.id)) * x.qty), 0); }
  function categoryLabel(v){ return String(v || 'material').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()); }
  function toast(msg){
    let t = document.getElementById('wcmToast');
    if (!t) { t = document.createElement('div'); t.id = 'wcmToast'; t.style.cssText = 'position:fixed;left:50%;bottom:22px;z-index:2147482600;transform:translateX(-50%);background:#2d0f42;border:1px solid #ffd700;color:#ffd700;border-radius:999px;padding:8px 14px;font:12px Bungee,system-ui;box-shadow:0 8px 30px #0008'; document.body.appendChild(t); }
    t.textContent = msg; clearTimeout(t._h); t.style.display='block'; t._h=setTimeout(()=>t.style.display='none',1600);
  }
  async function ensureData(){
    if (data) return data;
    const res = await fetch('data/crafting.json', { cache: 'no-cache' });
    data = await res.json();
    materials = (data.materials || []).slice().sort((a,b)=>String(a.name).localeCompare(String(b.name)));
    return data;
  }
  function add(id, qty=1){
    const mat = find(id); if (!mat) return;
    const row = basket.find(x => x.id === id);
    if (row) row.qty += qty; else basket.push({ id, qty });
    save(); renderBasket(); toast(`Added ${mat.name} ×${qty}`);
  }
  function change(id, delta){
    const row = basket.find(x => x.id === id); if (!row) return;
    row.qty += delta;
    if (row.qty <= 0) basket = basket.filter(x => x.id !== id);
    save(); renderBasket();
  }
  function renderCards(){
    if (!ui.grid) return;
    const q = (ui.search?.value || '').toLowerCase();
    const cat = ui.category?.value || 'all';
    const rar = ui.rarity?.value || 'all';
    const rows = materials.filter(m => {
      if (cat !== 'all' && (m.category || 'other') !== cat) return false;
      if (rar !== 'all' && (m.rarity || 'common') !== rar) return false;
      if (q && ![m.name,m.id,m.description,m.category,m.rarity].join(' ').toLowerCase().includes(q)) return false;
      return true;
    }).slice(0,180);
    ui.grid.innerHTML = rows.map(m => {
      const g = goldPrice(m);
      return `<div class="wcm-card" style="--wcm-accent:${rarityColor[String(m.rarity||'').toLowerCase()] || '#ffd700'}">
        <h3>${esc(m.icon || '🧪')} ${esc(m.name || m.id)}</h3>
        <div class="meta">${esc(categoryLabel(m.category))} · ${esc(m.rarity || 'common')} · old ${esc(m.cost ?? 5)} XP</div>
        <p>${esc(m.description || 'Crafting component from Waluipedia materials ledger.')}</p>
        <div class="wcm-price"><span>💰 ${g.toFixed(2)}g</span><span>${quote(g,'midland_ducat')}</span><span>${quote(g,'wario_coin')}</span></div>
        <button data-wcm-add="${esc(m.id)}">ADD TO BASKET — WAH!</button>
      </div>`;
    }).join('') || '<p style="color:#aaa">No materials match. Wario blames you.</p>';
  }
  function renderBasket(){
    if (!ui.basket) return;
    const total = basketTotal();
    const lines = basket.map(x => {
      const m = find(x.id) || { id:x.id, name:x.id, icon:'🧪' };
      const g = goldPrice(m) * x.qty;
      return `<div class="wcm-line"><div><b>${esc(m.icon||'🧪')} ${esc(m.name)}</b><small>${x.qty} × ${goldPrice(m).toFixed(2)}g = ${g.toFixed(2)}g</small></div><div class="qty"><button data-wcm-dec="${esc(x.id)}">−</button><span>${x.qty}</span><button data-wcm-inc="${esc(x.id)}">+</button></div></div>`;
    }).join('') || '<p style="color:rgba(255,255,255,.55);font-size:13px">Basket empty. Wario is disappointed.</p>';
    const history = receipts.slice(-6).reverse().map(r => `<details><summary>${esc(r.id)} · ${r.totalGold.toFixed(2)}g · ${r.lines.length} lines</summary><pre>${esc(r.text)}</pre></details>`).join('');
    ui.basket.innerHTML = `<h3>🛒 Crafting Basket</h3>${lines}<div class="wcm-total">Total: 💰 ${total.toFixed(2)}g<br>${quote(total,'midland_ducat')} · ${quote(total,'wario_coin')}</div><button class="wcm-checkout" ${basket.length?'':'disabled'} data-wcm-checkout>CHECKOUT MATERIALS</button><button class="wcm-checkout" style="margin-top:8px;background:#2d0f42;color:#ffd700" data-wcm-clear>CLEAR BASKET</button><div id="wcmReceiptSlot"></div>${history?`<div class="wcm-history"><h3>🧾 Receipt History</h3>${history}</div>`:''}`;
  }
  function checkout(){
    if (!basket.length) return;
    const id = 'WCM-' + new Date().toISOString().replace(/[-:TZ.]/g,'').slice(0,14);
    const lines = basket.map(x => { const m=find(x.id)||{name:x.id}; return { id:x.id, name:m.name, qty:x.qty, unitGold:goldPrice(m), lineGold:goldPrice(m)*x.qty }; });
    const totalGold = lines.reduce((s,l)=>s+l.lineGold,0);
    const text = [`WARIO CRAFTING MATERIAL RECEIPT ${id}`, `Date: ${new Date().toLocaleString()}`, '', ...lines.map(l=>`${l.qty} × ${l.name} @ ${l.unitGold.toFixed(2)}g = ${l.lineGold.toFixed(2)}g`), '', `TOTAL: ${totalGold.toFixed(2)}g`, `${quote(totalGold,'midland_ducat')}`, `${quote(totalGold,'wario_coin')}`, '', 'NO REFUNDS. CRAFT RESPONSIBLY. WAH!'].join('\n');
    receipts.push({ id, date: Date.now(), lines, totalGold, text });
    basket = [];
    save(); renderBasket();
    const slot = document.getElementById('wcmReceiptSlot'); if (slot) slot.innerHTML = `<div class="wcm-receipt">${esc(text)}</div>`;
    try { navigator.clipboard?.writeText(text); } catch {}
  }
  async function open(targetId){
    await ensureData();
    build();
    document.getElementById('warioCraftingMarket')?.classList.add('open');
    if (targetId) { ui.search.value = (find(targetId)?.name || targetId); renderCards(); }
  }
  function close(){ document.getElementById('warioCraftingMarket')?.classList.remove('open'); }
  function build(){
    if (document.getElementById('warioCraftingMarket')) { renderCards(); renderBasket(); return; }
    const cats = ['all', ...new Set(materials.map(m => m.category || 'other'))].sort();
    const rars = ['all', ...new Set(materials.map(m => m.rarity || 'common'))].sort();
    const toggle = document.createElement('button'); toggle.id = 'warioCraftingMarketToggle'; toggle.type='button'; toggle.innerHTML='⚒️ MATERIAL MARKET'; document.body.appendChild(toggle);
    const wrap = document.createElement('div'); wrap.id='warioCraftingMarket'; wrap.innerHTML = `<div class="wcm-shell"><div class="wcm-head"><div><h2>⚒️ WARIO CRAFTING MATERIAL MARKET</h2><p>Buy potion parts, scroll ink, smithing metal, enchanting dust, weird mushrooms, and other suspicious components with real money. XP is for old paperwork. Wario accepts gold-equivalent pricing here.</p></div><button class="wcm-close" data-wcm-close>×</button></div><div class="wcm-controls"><input id="wcmSearch" placeholder="Search materials, potions components, arcane dust…"><select id="wcmCategory">${cats.map(c=>`<option value="${esc(c)}">${esc(c==='all'?'All categories':categoryLabel(c))}</option>`).join('')}</select><select id="wcmRarity">${rars.map(r=>`<option value="${esc(r)}">${esc(r==='all'?'All rarities':categoryLabel(r))}</option>`).join('')}</select><button type="button" data-wcm-receipts>Receipts</button></div><div class="wcm-body"><div class="wcm-results"><div id="wcmGrid" class="wcm-grid"></div></div><aside id="wcmBasket" class="wcm-basket"></aside></div></div>`; document.body.appendChild(wrap);
    ui = { search: document.getElementById('wcmSearch'), category: document.getElementById('wcmCategory'), rarity: document.getElementById('wcmRarity'), grid: document.getElementById('wcmGrid'), basket: document.getElementById('wcmBasket') };
    toggle.addEventListener('click',()=>open());
    wrap.addEventListener('click', e => { if (e.target.id === 'warioCraftingMarket' || e.target.closest('[data-wcm-close]')) close(); const addId=e.target.closest('[data-wcm-add]')?.dataset.wcmAdd; if(addId)add(addId,1); const inc=e.target.closest('[data-wcm-inc]')?.dataset.wcmInc; if(inc)change(inc,1); const dec=e.target.closest('[data-wcm-dec]')?.dataset.wcmDec; if(dec)change(dec,-1); if(e.target.closest('[data-wcm-clear]')){basket=[];save();renderBasket();} if(e.target.closest('[data-wcm-checkout]'))checkout(); });
    [ui.search, ui.category, ui.rarity].forEach(el => el?.addEventListener('input', renderCards));
    renderCards(); renderBasket();
  }
  function hashOpen(){ const h=decodeURIComponent(location.hash||''); if(h.startsWith('#crafting-materials')) open(h.split('/')[1]||''); }
  document.addEventListener('DOMContentLoaded', async () => { try { await ensureData(); build(); hashOpen(); } catch(e){ console.warn('[Wario Crafting Market]', e); } });
  window.addEventListener('hashchange', hashOpen);
  window.WarioCraftingMarket = { version: 1, open, add, checkout };
})();
