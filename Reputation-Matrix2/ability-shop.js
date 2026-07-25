// Wario's Ability Shop — training wing bolted into shop.html.
// Same approach as crafting-market.js: pure DOM overlay, never touches the bundled React.
(() => {
  if (window.WarioAbilityShop?.version >= 1) return;
  const CART = 'warioAbilityCart';
  const OWNED = 'warioAbilityTrained';
  const RATE = { gold: 1, midland_ducat: 0.9, wario_coin: 1.2 };
  const ICON = { gold: '💰', midland_ducat: '🦁', wario_coin: '🟡' };
  const SHORT = { gold: 'Gold', midland_ducat: 'Ducats', wario_coin: 'WC' };

  let data = null, abilities = [], cart = load(CART, []), trained = load(OWNED, []);
  let ui = {}, sort = 'level_asc';

  const SORTS = [
    { value: 'level_asc',  label: '📊 Level ↑',   desc: 'Beginner first' },
    { value: 'level_desc', label: '📊 Level ↓',   desc: 'Advanced first' },
    { value: 'price_asc',  label: '💰 Cheap First', desc: 'Lowest price' },
    { value: 'price_desc', label: '💰 Pricey First', desc: 'Highest price' },
    { value: 'name_asc',   label: '📚 A → Z',     desc: 'Alphabetical' },
    { value: 'class',      label: '🎓 By Class',  desc: 'Group by class' }
  ];

  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function load(k,f){try{return JSON.parse(localStorage.getItem(k)||'null')||f;}catch{return f;}}
  function save(){try{localStorage.setItem(CART,JSON.stringify(cart));localStorage.setItem(OWNED,JSON.stringify(trained));}catch(e){}}
  function find(id){return abilities.find(a=>a.id===id);}
  function cartTotal(){return cart.reduce((s,id)=>s+(find(id)?.price||0),0);}
  function quote(gold,cur){const n=gold/RATE[cur];return `${ICON[cur]} ${Math.ceil(n).toLocaleString()} ${SHORT[cur]}`;}

  function toast(msg,type='info'){
    let t=document.getElementById('wasToast');
    if(!t){t=document.createElement('div');t.id='wasToast';document.body.appendChild(t);}
    const c={info:'#ffd700',success:'#4ade80',warn:'#f87171'}[type]||'#ffd700';
    t.style.cssText=`position:fixed;left:50%;bottom:22px;z-index:2147482700;transform:translateX(-50%);background:#2d0f42;border:2px solid ${c};color:${c};border-radius:12px;padding:10px 18px;font:bold 13px Bungee,system-ui;box-shadow:0 8px 30px #0008,0 0 20px ${c}33`;
    t.textContent=msg;clearTimeout(t._h);t.style.display='block';t._h=setTimeout(()=>t.style.display='none',1800);
  }

  async function ensureData(){
    if(data) return data;
    const res=await fetch('data/abilityShop.json',{cache:'no-cache'});
    data=await res.json();
    abilities=(data.abilities||[]).slice();
    return data;
  }

  function addToCart(id){
    const a=find(id); if(!a) return;
    if(trained.includes(id)){ toast('Already trained! No refunds, no repeats.','warn'); return; }
    if(cart.includes(id)){ toast('Already in the cart. Wario counted.','warn'); return; }
    cart.push(id); save(); renderCart(); renderCards();
    toast(`✓ ${a.name} added! WAH!`,'success');
  }
  function removeFromCart(id){ cart=cart.filter(x=>x!==id); save(); renderCart(); renderCards(); }

  function checkout(){
    if(!cart.length){ toast('Empty cart. Wario is UNIMPRESSED.','warn'); return; }
    const total=cartTotal(), n=cart.length;
    trained=[...new Set([...trained,...cart])];
    cart=[]; save(); renderCart(); renderCards();
    toast(`💰 ${n} ${n===1?'ability':'abilities'} trained for ${total.toLocaleString()}g!`,'success');
  }

  function sortRows(rows){
    const r=[...rows];
    switch(sort){
      case 'level_desc': return r.sort((a,b)=>b.level-a.level||a.name.localeCompare(b.name));
      case 'price_asc':  return r.sort((a,b)=>a.price-b.price);
      case 'price_desc': return r.sort((a,b)=>b.price-a.price);
      case 'name_asc':   return r.sort((a,b)=>a.name.localeCompare(b.name));
      case 'class':      return r.sort((a,b)=>a.className.localeCompare(b.className)||a.level-b.level);
      default:           return r.sort((a,b)=>a.level-b.level||a.name.localeCompare(b.name));
    }
  }

  function renderCards(){
    if(!ui.grid) return;
    const q=(ui.search?.value||'').toLowerCase().trim();
    const cls=ui.cls?.value||'all';
    const typ=ui.type?.value||'all';
    let rows=abilities.filter(a=>{
      if(cls!=='all'&&a.class!==cls) return false;
      if(typ!=='all'&&a.type!==typ) return false;
      if(q&&![a.name,a.description,a.className,a.typeLabel].join(' ').toLowerCase().includes(q)) return false;
      return true;
    });
    rows=sortRows(rows);
    if(ui.count) ui.count.textContent=`${rows.length} ${rows.length===1?'ability':'abilities'}`;
    ui.grid.innerHTML=rows.map(a=>{
      const owned=trained.includes(a.id), inCart=cart.includes(a.id);
      const known=(a.knownBy||[]).map(k=>{
        const tone=k.affiliation==='outsider'?'#a855f7':k.affiliation==='defector'?'#f87171':'#4ade80';
        const note=k.affiliation==='outsider'?' (not a Toad)':k.affiliation==='defector'?' (defector)':'';
        return `<span class="was-known" style="color:${tone};border-color:${tone}55">${esc(k.name)}${note}</span>`;
      }).join('');
      return `<div class="was-card" style="--was:${a.accent||'#ffd700'}">
        <div class="was-card-head">
          <span class="was-card-icon">${esc(a.icon||'✦')}</span>
          <div class="was-card-title">
            <span class="was-card-name">${esc(a.name)}</span>
            <span class="was-card-sub">${esc(a.className)} · Lv ${a.level} · ${esc(a.typeLabel)}</span>
          </div>
          ${owned?'<span class="was-owned">TRAINED</span>':''}
        </div>
        ${a.description?`<p class="was-card-desc">${esc(a.description)}</p>`:''}
        ${known?`<div class="was-known-row"><span class="was-known-label">Known by</span>${known}</div>`:''}
        <div class="was-card-foot">
          <div class="was-price">
            <span class="was-price-main">💰 ${a.price.toLocaleString()}g</span>
            <span class="was-price-alt">or ${quote(a.price,'midland_ducat')} · ${quote(a.price,'wario_coin')}</span>
          </div>
          <button class="was-buy ${owned?'is-owned':inCart?'is-in':''}" ${owned?'disabled':''} data-was-add="${esc(a.id)}">
            ${owned?'✓ Trained':inCart?'In Cart':'Train'}
          </button>
        </div>
      </div>`;
    }).join('')||'<p class="was-empty">No abilities match. Wario suggests fewer filters.</p>';
  }

  function renderCart(){
    if(!ui.cart) return;
    const rows=cart.map(id=>{
      const a=find(id); if(!a) return '';
      return `<div class="was-cart-row">
        <span class="was-cart-icon">${esc(a.icon||'✦')}</span>
        <div class="was-cart-body"><b>${esc(a.name)}</b><em>${esc(a.className)} · Lv ${a.level}</em></div>
        <span class="was-cart-price">${a.price.toLocaleString()}g</span>
        <button class="was-cart-x" data-was-del="${esc(a.id)}" aria-label="Remove">×</button>
      </div>`;
    }).join('');
    const total=cartTotal();
    ui.cart.innerHTML=`
      <div class="was-cart-head"><h3>🧾 Training Invoice</h3><span>${cart.length} item${cart.length===1?'':'s'}</span></div>
      ${rows||'<p class="was-cart-empty">Cart is empty. Wario is watching you not spend money.</p>'}
      ${cart.length?`<div class="was-cart-total">
        <div class="was-total-row"><span>Total</span><b>💰 ${total.toLocaleString()}g</b></div>
        <div class="was-total-alt">${quote(total,'midland_ducat')} · ${quote(total,'wario_coin')}</div>
        <button class="was-checkout" data-was-checkout>PAY WARIO</button>
        <button class="was-clear" data-was-clear>Clear cart</button>
      </div>`:''}
      ${trained.length?`<div class="was-trained"><span class="was-known-label">Already trained (${trained.length})</span>${
        trained.map(id=>`<span class="was-known" style="color:#4ade80;border-color:#4ade8055">${esc(find(id)?.name||id)}</span>`).join('')
      }<button class="was-reset" data-was-reset>Reset training</button></div>`:''}`;
  }

  function open(){ document.getElementById('warioAbilityShop')?.classList.add('open'); document.body.style.overflow='hidden'; renderCards(); renderCart(); }
  function close(){ document.getElementById('warioAbilityShop')?.classList.remove('open'); document.body.style.overflow=''; }

  function build(){
    if(document.getElementById('warioAbilityShop')) return;
    const classes=data.classes||{};
    const clsOpts=['all',...Object.keys(classes)];
    const typeOpts=['all',...new Set(abilities.map(a=>a.type))];
    const meta=data.meta||{};

    const toggle=document.createElement('button');
    toggle.id='warioAbilityShopToggle';
    toggle.innerHTML='<span>🎓</span><span>ABILITY SHOP</span>';
    document.body.appendChild(toggle);

    const wrap=document.createElement('div');
    wrap.id='warioAbilityShop';
    wrap.innerHTML=`<div class="was-shell">
      <div class="was-head">
        <div class="was-head-inner">
          <div class="was-logo">🎓</div>
          <div>
            <h2>WARIO'S ABILITY SHOP</h2>
            <p>${esc(meta.warioPitch||"Wario does not teach. Wario SELLS.")}</p>
          </div>
        </div>
        <button class="was-close" data-was-close aria-label="Close">×</button>
      </div>
      <div class="was-toolbar">
        <div class="was-toolbar-left">
          <input id="wasSearch" class="was-search" placeholder="🔍 Search abilities...">
          <select id="wasClass" class="was-select">
            ${clsOpts.map(c=>`<option value="${esc(c)}">${c==='all'?`🎓 All Classes (${abilities.length})`:esc(classes[c]?.name||c)+` (${abilities.filter(a=>a.class===c).length})`}</option>`).join('')}
          </select>
          <select id="wasType" class="was-select">
            ${typeOpts.map(t=>`<option value="${esc(t)}">${t==='all'?'✦ All Types':esc((data.types||{})[t]?.label||t)}</option>`).join('')}
          </select>
          <select id="wasSort" class="was-select">
            ${SORTS.map(s=>`<option value="${esc(s.value)}">${esc(s.label)} — ${esc(s.desc)}</option>`).join('')}
          </select>
        </div>
        <div class="was-toolbar-right"><span id="wasCount" class="was-count">— abilities</span></div>
      </div>
      ${meta.placeholder?`<div class="was-notice">⚠️ <b>Scaffold:</b> ${esc(meta.note||'')}</div>`:''}
      <div class="was-body">
        <div class="was-results"><div id="wasGrid" class="was-grid"></div></div>
        <aside id="wasCart" class="was-cart"></aside>
      </div>
    </div>`;
    document.body.appendChild(wrap);

    ui={search:document.getElementById('wasSearch'),cls:document.getElementById('wasClass'),
        type:document.getElementById('wasType'),sort:document.getElementById('wasSort'),
        grid:document.getElementById('wasGrid'),cart:document.getElementById('wasCart'),
        count:document.getElementById('wasCount')};

    toggle.addEventListener('click',()=>open());
    wrap.addEventListener('click',e=>{
      if(e.target.id==='warioAbilityShop'||e.target.closest('[data-was-close]')) close();
      const add=e.target.closest('[data-was-add]')?.dataset.wasAdd; if(add) addToCart(add);
      const del=e.target.closest('[data-was-del]')?.dataset.wasDel; if(del) removeFromCart(del);
      if(e.target.closest('[data-was-checkout]')) checkout();
      if(e.target.closest('[data-was-clear]')){ cart=[]; save(); renderCart(); renderCards(); }
      if(e.target.closest('[data-was-reset]')){ trained=[]; save(); renderCart(); renderCards(); toast('Training reset.','info'); }
    });
    [ui.search,ui.cls,ui.type].forEach(el=>el?.addEventListener('input',renderCards));
    ui.sort?.addEventListener('change',e=>{sort=e.target.value;renderCards();});
    document.addEventListener('keydown',e=>{ if(e.key==='Escape') close(); });
    renderCards(); renderCart();
  }

  // Deep link: shop.html#ability-shop  /  #ability-shop/<id>  (also accepts #abilities)
  function hashOpen(){
    const h=decodeURIComponent(location.hash||'');
    if(!/^#\/?(ability-shop|abilities)/.test(h)) return;
    open();
    const id=h.split('/').filter(Boolean).pop();
    if(id&&id!=='ability-shop'&&id!=='abilities'&&find(id)){
      if(ui.search){ ui.search.value=find(id).name; renderCards(); }
    }
  }
  document.addEventListener('DOMContentLoaded',async()=>{
    try{ await ensureData(); build(); hashOpen(); }
    catch(e){ console.warn('[Wario Ability Shop]',e); }
  });
  window.addEventListener('hashchange',hashOpen);
  window.WarioAbilityShop={version:1,open,close,addToCart,checkout};
})();
