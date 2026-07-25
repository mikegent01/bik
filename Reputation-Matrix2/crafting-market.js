// Wario Crafting Material Market — overhauled with Wario personality! WAH!
// Lives inside shop.html without touching bundled React.
(() => {
  if (window.WarioCraftingMarket?.version >= 2) return;
  const STORE = 'warioCraftingMaterialBasket';
  const RECEIPTS = 'warioCraftingReceipts';
  const RATE = { gold: 1, midland_ducat: 0.9, wario_coin: 1.2 };
  const ICON = { gold: '💰', midland_ducat: '🦁', wario_coin: '🟡' };
  const NAME = { gold: 'Gold Piece', midland_ducat: 'Midland Ducat', wario_coin: 'Wario Coin' };
  const SHORT_NAME = { gold: 'Gold', midland_ducat: 'Ducats', wario_coin: 'WC' };
  const rarityMarkup = { common: 1, uncommon: 1.2, rare: 1.65, very_rare: 2.25, legendary: 3.5 };
  const rarityColor = { common: '#94a3b8', uncommon: '#22c55e', rare: '#38bdf8', very_rare: '#a855f7', legendary: '#eab308' };
  const rarityLabel = { common: 'COMMON', uncommon: 'UNCOMMON', rare: 'RARE', very_rare: 'VERY RARE', legendary: 'LEGENDARY' };
  const SORT_OPTIONS = [
    { value: 'name_asc', label: '📚 A → Z', desc: 'Alphabetical' },
    { value: 'name_desc', label: '📚 Z → A', desc: 'Reverse ABC' },
    { value: 'price_asc', label: '💰 Cheap First', desc: 'Lowest price' },
    { value: 'price_desc', label: '💰 pricey First', desc: 'Highest price' },
    { value: 'rarity_desc', label: '⭐ Rarity ↓', desc: 'Legendary first' },
    { value: 'rarity_asc', label: '⭐ Rarity ↑', desc: 'Common first' },
    { value: 'category', label: '📦 By Category', desc: 'Group by type' },
    { value: 'stock_desc', label: '🔥 Hot Stock', desc: 'Most popular' }
  ];
  let data = null;
  let materials = [];
  let basket = load(STORE, []);
  let receipts = load(RECEIPTS, []);
  let ui = {};
  let currentSort = 'name_asc';

  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function load(k,fallback){try{return JSON.parse(localStorage.getItem(k)||'null')||fallback;}catch{return fallback;}}
  function save(){localStorage.setItem(STORE,JSON.stringify(basket));localStorage.setItem(RECEIPTS,JSON.stringify(receipts.slice(-25)));}
  function goldBase(m){return Math.max(0.01,(Number(m?.cost)||5)/10);}
  function goldPrice(m){return goldBase(m)*(rarityMarkup[String(m?.rarity||'').toLowerCase()]||1.15);}
  function quote(gold,cur){const n=gold/RATE[cur];return{icon:ICON[cur],short:SHORT_NAME[cur],amount:n<10?n.toFixed(2):Math.ceil(n).toLocaleString()};}
  function find(id){return materials.find(m=>m.id===id);}
  function basketTotal(){return basket.reduce((s,x)=>s+(goldPrice(find(x.id))*x.qty),0);}
  function categoryLabel(v){return String(v||'material').replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase());}
  function rarityRank(r){const order=['common','uncommon','rare','very_rare','legendary'];return order.indexOf(String(r||'common').toLowerCase());}
  function toast(msg,type='info'){
    let t=document.getElementById('wcmToast');
    if(!t){t=document.createElement('div');t.id='wcmToast';document.body.appendChild(t);}
    const colors={info:'#ffd700',success:'#4ade80',warn:'#f87171'};
    t.style.cssText=`position:fixed;left:50%;bottom:22px;z-index:2147482600;transform:translateX(-50%);background:#2d0f42;border:2px solid ${colors[type]||colors.info};color:${colors[type]||colors.info};border-radius:12px;padding:10px 18px;font:bold 13px Bungee,system-ui;box-shadow:0 8px 30px #0008,0 0 20px ${colors[type]||colors.info}33`;
    t.textContent=msg;clearTimeout(t._h);t.style.display='block';t._h=setTimeout(()=>t.style.display='none',1800);
  }
  async function ensureData(){
    if(data)return data;
    const res=await fetch('data/crafting.json',{cache:'no-cache'});
    data=await res.json();
    materials=(data.materials||[]).slice();
    return data;
  }
  function add(id,qty=1){
    const mat=find(id);if(!mat)return;
    const row=basket.find(x=>x.id===id);
    if(row)row.qty+=qty;else basket.push({id,qty});
    save();renderBasket();toast(`✓ Added ${mat.name} ×${qty}! WAH!`,'success');
  }
  function change(id,delta){
    const row=basket.find(x=>x.id===id);if(!row)return;
    row.qty+=delta;
    if(row.qty<=0)basket=basket.filter(x=>x.id!==id);
    save();renderBasket();
  }
  function sortMaterials(arr){
    const sorted=[...arr];
    switch(currentSort){
      case 'name_asc': return sorted.sort((a,b)=>String(a.name).localeCompare(String(b.name)));
      case 'name_desc': return sorted.sort((a,b)=>String(b.name).localeCompare(String(a.name)));
      case 'price_asc': return sorted.sort((a,b)=>goldPrice(a)-goldPrice(b));
      case 'price_desc': return sorted.sort((a,b)=>goldPrice(b)-goldPrice(a));
      case 'rarity_desc': return sorted.sort((a,b)=>rarityRank(b.rarity)-rarityRank(a.rarity));
      case 'rarity_asc': return sorted.sort((a,b)=>rarityRank(a.rarity)-rarityRank(b.rarity));
      case 'category': return sorted.sort((a,b)=>(a.category||'').localeCompare(b.category||''));
      case 'stock_desc': return sorted.sort((a,b)=>(b.stock||50)-(a.stock||50));
      default: return sorted;
    }
  }
  function formatPrice(g){
    return `<span class="wcm-gold-price">💰 ${g.toFixed(2)}g</span>`;
  }
  function formatCurrency(g,cur){
    const q=quote(g,cur);
    return `<span class="wcm-cur-${cur}" title="${q.amount} ${q.short}">${q.icon} ${q.amount} ${q.short}</span>`;
  }
  function renderCards(){
    if(!ui.grid)return;
    const q=(ui.search?.value||'').toLowerCase();
    const cat=ui.category?.value||'all';
    const rar=ui.rarity?.value||'all';
    let rows=materials.filter(m=>{
      if(cat!=='all'&&(m.category||'other')!==cat)return false;
      if(rar!=='all'&&(m.rarity||'common')!==rar)return false;
      if(q&&![m.name,m.id,m.description,m.category,m.rarity].join(' ').toLowerCase().includes(q))return false;
      return true;
    });
    rows=sortMaterials(rows).slice(0,180);
    ui.grid.innerHTML=rows.map(m=>{
      const g=goldPrice(m);
      const r=String(m.rarity||'common').toLowerCase();
      const col=rarityColor[r]||'#ffd700';
      const gDucats=(g/RATE.midland_ducat).toFixed(1);
      const gWC=(g/RATE.wario_coin).toFixed(1);
      return `<div class="wcm-card" style="--wcm-accent:${col}">
        <div class="wcm-card-header">
          <span class="wcm-card-icon">${esc(m.icon||'🧪')}</span>
          <span class="wcm-card-name">${esc(m.name||m.id)}</span>
        </div>
        <div class="wcm-card-meta">
          <span class="wcm-rarity-tag" style="color:${col}">${rarityLabel[r]||'COMMON'}</span>
          <span class="wcm-cat-tag">${categoryLabel(m.category)}</span>
        </div>
        <p class="wcm-card-desc">${esc(m.description||'Crafting component from Waluipedia materials ledger.')}</p>
        <div class="wcm-price-block">
          <div class="wcm-primary-price">${formatPrice(g)}</div>
          <div class="wcm-conversions">
            <span>or</span>
            ${formatCurrency(g,'midland_ducat')}
            <span>/</span>
            ${formatCurrency(g,'wario_coin')}
          </div>
          <div class="wcm-xp-note">*Was ${esc(m.cost??5)} XP in old Waluipedia records</div>
        </div>
        <button class="wcm-add-btn" data-wcm-add="${esc(m.id)}">
          <span>🛒 GRAB IT!</span>
          <span class="wcm-btn-price">WAH!</span>
        </button>
      </div>`;
    }).join('')||'<div class="wcm-empty"><p>NO MATERIALS MATCH.</p><p>Wario is VERY disappointed in you.</p><button onclick="document.getElementById(\'wcmSearch\').value=\'\';document.getElementById(\'wcmSearch\').dispatchEvent(new Event(\'input\'))">🔄 CLEAR SEARCH</button></div>';
    ui.count&&(ui.count.textContent=`${rows.length} materials found`);
  }
  function renderBasket(){
    if(!ui.basket)return;
    const total=basketTotal();
    const lines=basket.map(x=>{
      const m=find(x.id)||{id:x.id,name:x.id,icon:'🧪'};
      const g=goldPrice(m)*x.qty;
      const q=quote(g,'midland_ducat');
      const q2=quote(g,'wario_coin');
      return `<div class="wcm-line">
        <div class="wcm-line-info">
          <b>${esc(m.icon||'🧪')} ${esc(m.name)}</b>
          <div class="wcm-line-calc">${x.qty} × ${goldPrice(m).toFixed(2)}g = <span class="wcm-gold-price">${g.toFixed(2)}g</span></div>
          <div class="wcm-line-alt">≈ ${q.icon}${q.amount} or ${q2.icon}${q2.amount}</div>
        </div>
        <div class="wcm-qty">
          <button data-wcm-dec="${esc(x.id)}" title="Remove one">−</button>
          <span>${x.qty}</span>
          <button data-wcm-inc="${esc(x.id)}" title="Add more">+</button>
        </div>
      </div>`;
    }).join('')||'<div class="wcm-basket-empty"><p>🧺 Basket empty!</p><p>Wario smells a potential customer...</p></div>';
    const history=receipts.slice(-6).reverse().map(r=>`<details class="wcm-receipt-details"><summary>🧾 ${esc(r.id)} — 💰${r.totalGold.toFixed(2)}g</summary><pre>${esc(r.text)}</pre></details>`).join('');
    const qTot=quote(total,'midland_ducat');
    const qTot2=quote(total,'wario_coin');
    ui.basket.innerHTML=`<div class="wcm-basket-header">
      <h3>🛒 WARIO'S BASKET</h3>
      <span class="wcm-basket-count">${basket.reduce((s,x)=>s+x.qty,0)} items</span>
    </div>
    ${lines}
    <div class="wcm-total">
      <div class="wcm-total-label">TOTAL OWED:</div>
      <div class="wcm-total-main">💰 ${total.toFixed(2)} Gold Pieces</div>
      <div class="wcm-total-alt">
        <span>≈ ${qTot.icon} ${qTot.amount} ${qTot.short}</span>
        <span>≈ ${qTot2.icon} ${qTot2.amount} ${qTot2.short}</span>
      </div>
    </div>
    <button class="wcm-checkout-btn" ${basket.length?'':'disabled'} data-wcm-checkout>
      <span>💰 CHECKOUT NOW!</span>
      <span class="wcm-co-note">NO REFUNDS! WAH!</span>
    </button>
    <button class="wcm-clear-btn" data-wcm-clear ${basket.length?'':'disabled'}>
      🗑️ TOSS BASKET
    </button>
    <div id="wcmReceiptSlot"></div>
    ${history?`<div class="wcm-history"><h4>📜 PAST RECEIPTS</h4>${history}</div>`:''}`;
  }
  function checkout(){
    if(!basket.length)return;
    const id='WCM-'+new Date().toISOString().replace(/[-:TZ.]/g,'').slice(0,14);
    const lines=basket.map(x=>{const m=find(x.id)||{name:x.id};return{id:x.id,name:m.name,qty:x.qty,unitGold:goldPrice(m),lineGold:goldPrice(m)*x.qty};});
    const totalGold=lines.reduce((s,l)=>s+l.lineGold,0);
    const gD=quote(totalGold,'midland_ducat');
    const gW=quote(totalGold,'wario_coin');
    const text=[
      '╔══════════════════════════════════════╗',
      '║  🏪 WARIO CRAFTING MATERIAL MARKET 🏪 ║',
      '╠══════════════════════════════════════╣',
      `║  Receipt: ${id.padEnd(32)}║`,
      `║  Date: ${new Date().toLocaleString().padEnd(32)}║`,
      '╠══════════════════════════════════════╣',
      ...lines.map(l=>`║  ${String(l.qty).padStart(2)} × ${l.name.substring(0,22).padEnd(22)}  ║\n║     @ ${l.unitGold.toFixed(2)}g = ${l.lineGold.toFixed(2)}g`.padEnd(42)+'║'),
      '╠══════════════════════════════════════╣',
      `║  TOTAL: 💰 ${totalGold.toFixed(2).padStart(8)}g              ║`,
      `║     ≈ ${gD.icon} ${gD.amount.toString().padStart(6)} ${gD.short.padEnd(14)}    ║`,
      `║     ≈ ${gW.icon} ${gW.amount.toString().padStart(6)} ${gW.short.padEnd(14)}    ║`,
      '╠══════════════════════════════════════╣',
      '║  💎 PAYMENT SECURED BY WARIO! 💎     ║',
      '║  NO REFUNDS. CRAFT RESPONSIBLY.      ║',
      '║            WAH! WAH! WAH!             ║',
      '╚══════════════════════════════════════╝'
    ].join('\n');
    receipts.push({id,date:Date.now(),lines,totalGold,text});
    basket=[];
    save();renderBasket();
    const slot=document.getElementById('wcmReceiptSlot');
    if(slot)slot.innerHTML=`<div class="wcm-receipt"><pre>${esc(text)}</pre><button class="wcm-copy-btn" onclick="navigator.clipboard?.writeText(\`${esc(text.replace(/`/g,'\\`'))}\`);this.textContent='✓ COPIED!';setTimeout(()=>this.textContent='📋 COPY RECEIPT',1500)">📋 COPY RECEIPT</button></div>`;
    try{navigator.clipboard?.writeText(text);}catch{}
    toast('💰 THANK YOU FOR YOUR BUSINESS! WAH!','success');
  }
  async function open(targetId){
    await ensureData();
    build();
    document.getElementById('warioCraftingMarket')?.classList.add('open');
    if(targetId){ui.search.value=(find(targetId)?.name||targetId);renderCards();}
  }
  function close(){document.getElementById('warioCraftingMarket')?.classList.remove('open');}
  function changeSort(val){
    currentSort=val;
    renderCards();
  }
  function build(){
    if(document.getElementById('warioCraftingMarket')){renderCards();renderBasket();return;}
    const cats=['all',...new Set(materials.map(m=>m.category||'other'))].sort();
    const rars=['all',...new Set(materials.map(m=>m.rarity||'common'))].sort();
    const toggle=document.createElement('button');
    toggle.id='warioCraftingMarketToggle';
    toggle.type='button';
    toggle.innerHTML='<span>⚒️</span><span>MATERIAL MARKET</span>';
    document.body.appendChild(toggle);
    const wrap=document.createElement('div');
    wrap.id='warioCraftingMarket';
    wrap.innerHTML=`<div class="wcm-shell">
      <div class="wcm-head">
        <div class="wcm-head-inner">
          <div class="wcm-logo">⚒️</div>
          <div>
            <h2>WARIO CRAFTING MATERIAL MARKET</h2>
            <p>Need components for potions, scrolls, smithing, or enchanting? Wario's got 'em! 💰 XP is SO last century. Pay in REAL gold, Wario Ducats, or Wario Coins!</p>
          </div>
        </div>
        <button class="wcm-close" data-wcm-close aria-label="Close">×</button>
      </div>
      <div class="wcm-toolbar">
        <div class="wcm-toolbar-left">
          <input id="wcmSearch" class="wcm-search" placeholder="🔍 Search materials...">
          <select id="wcmCategory" class="wcm-select">
            ${cats.map(c=>`<option value="${esc(c)}">${c==='all'?'📦 All Categories':categoryLabel(c)}</option>`).join('')}
          </select>
          <select id="wcmRarity" class="wcm-select">
            ${rars.map(r=>`<option value="${esc(r)}">${r==='all'?'⭐ All Rarities':rarityLabel[r]||categoryLabel(r)}</option>`).join('')}
          </select>
          <select id="wcmSort" class="wcm-select wcm-sort-select">
            ${SORT_OPTIONS.map(s=>`<option value="${esc(s.value)}">${esc(s.label)} — ${esc(s.desc)}</option>`).join('')}
          </select>
        </div>
        <div class="wcm-toolbar-right">
          <span id="wcmCount" class="wcm-count">— materials</span>
          <button type="button" class="wcm-toolbar-btn" data-wcm-receipts title="View receipt history">📜</button>
        </div>
      </div>
      <div class="wcm-body">
        <div class="wcm-results">
          <div id="wcmGrid" class="wcm-grid"></div>
        </div>
        <aside id="wcmBasket" class="wcm-basket"></aside>
      </div>
    </div>`;
    document.body.appendChild(wrap);
    ui={search:document.getElementById('wcmSearch'),category:document.getElementById('wcmCategory'),rarity:document.getElementById('wcmRarity'),sort:document.getElementById('wcmSort'),grid:document.getElementById('wcmGrid'),basket:document.getElementById('wcmBasket'),count:document.getElementById('wcmCount')};
    toggle.addEventListener('click',()=>open());
    wrap.addEventListener('click',e=>{
      if(e.target.id==='warioCraftingMarket'||e.target.closest('[data-wcm-close]'))close();
      const addId=e.target.closest('[data-wcm-add]')?.dataset.wcmAdd;if(addId)add(addId,1);
      const inc=e.target.closest('[data-wcm-inc]')?.dataset.wcmInc;if(inc)change(inc,1);
      const dec=e.target.closest('[data-wcm-dec]')?.dataset.wcmDec;if(dec)change(dec,-1);
      if(e.target.closest('[data-wcm-clear]')){basket=[];save();renderBasket();}
      if(e.target.closest('[data-wcm-checkout]'))checkout();
    });
    [ui.search,ui.category,ui.rarity].forEach(el=>el?.addEventListener('input',renderCards));
    ui.sort?.addEventListener('change',e=>changeSort(e.target.value));
    renderCards();renderBasket();
  }
  function hashOpen(){const h=decodeURIComponent(location.hash||'');if(h.startsWith('#crafting-materials'))open(h.split('/')[1]||'');}
  document.addEventListener('DOMContentLoaded',async()=>{try{await ensureData();build();hashOpen();}catch(e){console.warn('[Wario Crafting Market]',e);}});
  window.addEventListener('hashchange',hashOpen);
  window.WarioCraftingMarket={version:2,open,add,checkout};
})();
