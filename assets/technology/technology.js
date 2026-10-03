/* ============================================================================
   DISCOVERED TECHNOLOGY — the ledger of what the filings have seen built.

   The old research page (Reputation-Matrix2/app/pages/research/) was a
   procedural tech tree: thirteen nations, fifty invented nodes a category,
   progress read off the calendar, and a seven-phase "global cycle" nudged by
   regex matches on rumour titles. None of it could be traced to an article.

   This replaces it with a ledger. Every entry in
   Reputation-Matrix2/data/technology.json is a piece of technology a filing
   actually describes — what it is, the ground it was seen on, the article that
   saw it first and in what year — with verbatim quotes that
   tools/check-technology.py verifies against the source article.

   The country-tension board is DERIVED from that ledger rather than authored:
   each entry carries a signed pressure (−3 settles a territory, +3 arms it);
   the board multiplies it by a recency weight for the chosen year, sums per
   territory, and labels the total with the same seven-cycle vocabulary the
   old wheel used (Calm → Discovery → Tension → Conflict → Crisis). Every point
   on the board links back to the entry and the filing that put it there.

   Routes (wired in index.html's Router):
     #/technology                      the ledger
     #/technology/<entry id>           one piece of technology, with its 3D model
     #/technology/tension[/<year>]     the territory tension board, as of a year
     #/technology/territory/<key>      one territory: nation id or plane:<plane>

   Globals expected from index.html: esc, el, DATA, Router, renderSidebar,
   CUR (current archive date), repFactionMeta (optional), openId (optional).
   Three.js is loaded lazily from a CDN only when a viewer mounts; without it
   (offline, file://, jsdom) the page still renders and says so.
   ========================================================================== */
(function(){
  'use strict';

  const THREE_URL_DEFAULT = 'https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js';
  const PLANE_LABELS = { material:'The Material plane', shadow:'The Shadowfell', fey:'The Feywild', mirror:'The Mirror plane', disputed:'Disputed ground' };
  const g = ()=>window;             /* the real window: document, rAF, WebGL */
  const doc_ = ()=>g().document || null;
  /* index.html declares its helpers with top-level const/let (esc, el, Router,
     DATA, CUR…). Those live in the script scope, not on window, so they are
     reached by name through an indirect eval; the tests, which boot this file
     against a stub window, fall through to that stub. */
  const G = (name)=>{ try{ return (0, eval)(name); }catch(e){ return g()[name]; } };
  let ESC = null;
  const esc_ = s => { if(!ESC){ const f = G('esc'); ESC = (typeof f==='function') ? f : (x => String(x==null?'':x).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))); } return ESC(s); };
  const DATA_ = ()=> G('DATA') || {};
  const prettyId = s => String(s||'').replace(/_/g,' ').replace(/\b\w/g, c=>c.toUpperCase());

  /* ---------- data access ---------- */
  function doc(){
    const D = DATA_();
    return D.technology || g().TECHNOLOGY_DATA || { meta:{}, entries:[] };
  }
  function meta(){ return doc().meta || {}; }
  function entries(){ return (doc().entries || []).filter(e => e && e.id); }
  function byId(id){ return entries().find(e => e.id === id) || null; }
  function forEvent(eventId){
    if(!eventId) return [];
    return entries().filter(e => (e.firstSeen && e.firstSeen.event === eventId) || (e.sightings||[]).some(s => s.event === eventId));
  }
  function eventById(id){ return (DATA_().events||[]).find(e => e && e.id === id) || null; }
  function eventName(id){ const e = eventById(id); return e ? (e.name || e.title || id) : prettyId(id); }
  function nationById(id){ return (DATA_().nations||[]).find(n => n && n.id === id) || null; }
  function nationName(id){ const n = nationById(id); return n ? n.name : prettyId(id); }
  function locationById(id){ return (DATA_().locations||[]).find(l => l && l.id === id) || null; }
  function characterName(id){
    const c = (DATA_().characters||[]).find(x => x && x.id === id);
    return c ? (c.name || prettyId(id)) : prettyId(id);
  }
  function factionName(id){
    try{ const rfm = G('repFactionMeta'); if(typeof rfm==='function'){ const m = rfm(id); if(m && m.name) return m.name; } }catch(e){}
    const f = (DATA_().factions||[]).find(x => x && x.id === id);
    return f ? (f.name || prettyId(id)) : prettyId(id);
  }
  function kindMeta(k){ return (meta().kinds||{})[k] || { label: prettyId(k), icon:'🔧' }; }
  function tierMeta(t){ return (meta().tiers||[]).find(x => x.id === t) || { id:t, name: prettyId(t) }; }
  const TIER_ORDER = ['dawn','iron','discovery','industrial','cosmic'];
  const tierRank = t => Math.max(0, TIER_ORDER.indexOf(t));

  /* A territory key is a nation id when the ledger names one, otherwise the
     plane the thing was seen on. Shadowfell technology is Shadowfell tension. */
  function territoryKey(e){
    const t = e.territory || {};
    if(t.nation) return t.nation;
    if(t.region) return 'region:' + t.region;
    return 'plane:' + (t.plane || 'material');
  }
  function planeLabel(p){ return ((meta().planes||{})[p]) || PLANE_LABELS[p] || prettyId(p); }
  function territoryName(key){
    key = String(key);
    if(key.indexOf('plane:')===0) return planeLabel(key.slice(6));
    if(key.indexOf('region:')===0){ const r = (meta().regions||{})[key.slice(7)]; return r && r.name ? r.name : prettyId(key.slice(7)); }
    return nationName(key);
  }
  /* the short place name a tile shows: nation, else region, else plane */
  function placeName(e){ return territoryName(territoryKey(e)); }
  function currentYear(){
    const C = G('CUR'); if(C && C.year) return C.year;
    const D = DATA_().currentDate; if(D && D.year) return D.year;
    return Math.max.apply(null, entries().map(e => (e.firstSeen && e.firstSeen.year) || 0).concat([1040]));
  }

  /* ---------- tension (pure) ---------- */
  function recencyWeight(year, asOf){
    const W = meta().recencyWeights || { sameYear:1, oneYear:0.7, withinFiveYears:0.4, older:0.15 };
    if(year==null) return W.older;              /* undated: on the record, faintly */
    const d = asOf - year;
    if(d < 0) return 0;                          /* not yet filed in that year */
    if(d === 0) return W.sameYear;
    if(d === 1) return W.oneYear;
    if(d <= 5) return W.withinFiveYears;
    return W.older;
  }
  function bandFor(score){
    const bands = meta().bands || [];
    for(const b of bands){ if(b.max==null || score <= b.max) return b; }
    return bands[bands.length-1] || { id:'unknown', name:'Unbanded', color:'#888' };
  }
  function yearsOnRecord(){
    const ys = new Set(entries().map(e => e.firstSeen && e.firstSeen.year).filter(y => y!=null));
    ys.add(currentYear());
    return Array.from(ys).sort((a,b)=>a-b);
  }
  /* Sightings count too: the helicopter was seen at the Debt Siege and then
     crashed at Star Hill, and both are the same year, so each dated appearance
     contributes with its own weight. Capped per entry at the entry's own
     pressure × 1.5 so a thing seen four times does not read as four things. */
  function computeTension(opts){
    opts = opts || {};
    const asOf = opts.asOfYear || currentYear();
    const list = opts.entries || entries();
    const terr = {};
    const pairs = {};
    list.forEach(e => {
      const key = territoryKey(e);
      const T = terr[key] || (terr[key] = { key, name: territoryName(key), nation: (e.territory||{}).nation || null, region: (e.territory||{}).region || null, plane: (e.territory||{}).plane || null,
        score:0, drivers:[], entries:[], kinds:{}, highestTier:null, firstYear:null, latestYear:null });
      const y0 = e.firstSeen && e.firstSeen.year;
      const appearances = [{ event: e.firstSeen && e.firstSeen.event, year: y0 }]
        .concat((e.sightings||[]).map(s => ({ event:s.event, year:(s.year!=null?s.year:y0) })));
      const seenByThen = appearances.filter(a => a.year==null || a.year <= asOf);
      if(y0!=null && y0 > asOf) return;         /* not on the record yet */
      T.entries.push(e);
      T.kinds[e.kind] = (T.kinds[e.kind]||0) + 1;
      if(!T.highestTier || tierRank(e.tier) > tierRank(T.highestTier)) T.highestTier = e.tier;
      if(y0!=null){ T.firstYear = T.firstYear==null ? y0 : Math.min(T.firstYear, y0); T.latestYear = T.latestYear==null ? y0 : Math.max(T.latestYear, y0); }
      const p = Number(e.pressure||0);
      let contribution = 0, weight = 0;
      seenByThen.forEach(a => { const w = recencyWeight(a.year, asOf); weight += w; contribution += p * w; });
      const cap = Math.abs(p) * 1.5;
      if(Math.abs(contribution) > cap) contribution = Math.sign(contribution) * cap;
      contribution = Math.round(contribution*100)/100;
      T.score += contribution;
      T.drivers.push({ id:e.id, name:e.name, icon:e.icon, kind:e.kind, pressure:p, weight:Math.round(weight*100)/100, contribution, year:y0, event: e.firstSeen && e.firstSeen.event });
      (e.tension||[]).forEach(t => {
        if(!t || !Array.isArray(t.between) || t.between.length!==2) return;
        if(y0!=null && y0 > asOf) return;
        const w = recencyWeight(y0, asOf);
        const k = t.between.slice().sort().join('|');
        const P = pairs[k] || (pairs[k] = { a:t.between[0], b:t.between[1], weight:0, raw:0, reasons:[] });
        P.weight += Number(t.weight||0) * w; P.raw += Number(t.weight||0);
        P.reasons.push({ entry:e.id, name:e.name, why:t.why||'', weight:Number(t.weight||0), year:y0 });
      });
    });
    const territories = Object.values(terr).map(T => {
      T.score = Math.round(T.score*100)/100;
      T.band = bandFor(T.score);
      T.drivers.sort((a,b)=>Math.abs(b.contribution)-Math.abs(a.contribution) || Math.abs(b.pressure)-Math.abs(a.pressure) || String(a.name).localeCompare(String(b.name)));
      return T;
    }).sort((a,b)=>b.score-a.score);
    /* Rebirth: the one cycle the ledger cannot author. A territory whose score
       has fallen by three or more since its previous filing year is rebuilding. */
    territories.forEach(T => {
      const prevYears = yearsOnRecord().filter(y => y < asOf);
      if(!prevYears.length) return;
      const prev = prevYears[prevYears.length-1];
      const before = computeTensionForTerritory(T.key, prev, list);
      if(before!=null && before - T.score >= 3 && T.score <= 1){
        T.band = Object.assign({}, T.band, { id:'rebirth', name:'Cycle of Rebirth', color:'#8bc34a', blurb:'The pressure has drained out of the record since the last filing year; the territory is rebuilding.' });
        T.rebirthFrom = before;
      }
    });
    const pairList = Object.values(pairs).map(P => { P.weight = Math.round(P.weight*100)/100; return P; }).sort((a,b)=>b.weight-a.weight);
    const total = territories.reduce((s,T)=>s+T.score,0);
    const world = { score: Math.round(total*100)/100, band: bandFor(territories.length ? total/territories.length : 0), territories: territories.length, entries: territories.reduce((s,T)=>s+T.entries.length,0) };
    return { asOfYear: asOf, years: yearsOnRecord(), territories, pairs: pairList, world };
  }
  /* score only, used for the Rebirth look-back; no recursion into Rebirth */
  function computeTensionForTerritory(key, asOf, list){
    let score = 0, any = false;
    (list||entries()).forEach(e => {
      if(territoryKey(e)!==key) return;
      const y0 = e.firstSeen && e.firstSeen.year;
      if(y0!=null && y0 > asOf) return;
      any = true;
      const p = Number(e.pressure||0);
      const apps = [{year:y0}].concat((e.sightings||[]).map(s=>({year:(s.year!=null?s.year:y0)}))).filter(a=>a.year==null||a.year<=asOf);
      let c = 0; apps.forEach(a => { c += p * recencyWeight(a.year, asOf); });
      const cap = Math.abs(p)*1.5; if(Math.abs(c)>cap) c = Math.sign(c)*cap;
      score += c;
    });
    return any ? Math.round(score*100)/100 : null;
  }

  /* ---------- small renderers ---------- */
  const sidebar_ = (k)=>{ const f = G('renderSidebar'); if(typeof f==='function') f(k); };
  const content_ = ()=>{ const f = G('el'); return (typeof f==='function') ? f('content') : doc_().getElementById('content'); };
  const entryHash = id => '#/technology/' + encodeURIComponent(id);
  const articleHash = id => '#/article/' + encodeURIComponent(id);
  function nationLink(id){
    if(!id) return '';
    return `<a href="#/atlas/${encodeURIComponent(id)}" onclick="event.preventDefault();Router.go('#/atlas/${esc_(encodeURIComponent(id))}')">${esc_(nationName(id))}</a>`;
  }
  function articleLink(id, label){
    return `<a href="${esc_(articleHash(id))}" onclick="event.preventDefault();Router.go('${esc_(articleHash(id))}')">${esc_(label||eventName(id))}</a>`;
  }
  function chip(txt, cls){ return `<span class="pill${cls?' '+cls:''}">${txt}</span>`; }
  function bandChip(band){ return `<span class="tech-band" style="--band:${esc_(band.color||'#888')}">${esc_(band.name||'')}</span>`; }
  function gauge(score){
    /* −6 … +9 → 0 … 100%, zero in the first third so Calm reads as empty-ish */
    const pct = Math.max(0, Math.min(100, Math.round(((Number(score)||0) + 6) / 15 * 100)));
    const band = bandFor(score);
    return `<div class="tech-gauge" title="${esc_(String(score))}"><span style="width:${pct}%;background:${esc_(band.color||'#888')}"></span><i style="left:40%"></i></div>`;
  }
  function tile(e){
    const fs = e.firstSeen || {};
    const k = kindMeta(e.kind), t = tierMeta(e.tier);
    const terr = e.territory || {};
    return `<a class="techtile" href="${esc_(entryHash(e.id))}" onclick="event.preventDefault();Router.go('${esc_(entryHash(e.id))}')" style="--kind:${esc_(kindColor(e.kind))}">
      <div class="techtile-ico" aria-hidden="true">${esc_(e.icon||k.icon||'🔧')}</div>
      <div class="techtile-body">
        <div class="tt">${esc_(e.name)}</div>
        <div class="tsub">${esc_(k.label)} · ${esc_(t.name)}${fs.year?` · ${esc_(String(fs.year))} BF`:' · year unrecorded'}</div>
        <div class="tsum">${esc_(e.summary||'')}</div>
        <div class="tmeta">${chip('📍 '+esc_(placeName(e)))}${chip('📜 '+esc_(eventName(fs.event)))}${e.pressure>0?chip('pressure +'+e.pressure,'tech-p-pos'):(e.pressure<0?chip('pressure '+e.pressure,'tech-p-neg'):chip('pressure 0','tech-p-zero'))}</div>
      </div></a>`;
  }
  function kindColor(k){
    return ({ weapon:'#f44336', siege:'#ff5722', vehicle:'#e0b400', communications:'#4fc3f7', device:'#9c27b0', construct:'#8d8d99', magitek:'#b388ff', medical:'#66bb6a', infrastructure:'#26a69a' })[k] || '#8a4bff';
  }
  function crumbs(parts){
    const head = `<a onclick="Router.go('#/home')">Home</a> › <a onclick="Router.go('#/technology')">Discovered Technology</a>`;
    return `<div class="breadcrumb">${head}${parts.map(p=>' › '+p).join('')}</div>`;
  }

  /* ---------- state for the ledger filters (per page view, not persisted) ---------- */
  let FILTER = { kind:'', tier:'', territory:'', q:'' };

  /* ---------- views ---------- */
  function view_technology(arg){
    unmountViewers();
    const a = String(arg||'');
    if(!a) return renderLedger();
    const parts = a.split('/');
    if(parts[0]==='tension') return renderTension(parts[1]?parseInt(parts[1],10):null);
    if(parts[0]==='territory') return renderTerritory(decodeURIComponent(parts.slice(1).join('/')));
    const e = byId(decodeURIComponent(parts[0]));
    if(e) return renderEntry(e);
    sidebar_('technology');
    content_().innerHTML = `<div class="card"><h2>No such piece of technology</h2><p class="text-muted">Nothing on the ledger is filed as <code>${esc_(a)}</code>. <a onclick="Router.go('#/technology')">Back to the ledger.</a></p></div>`;
  }

  function renderLedger(){
    sidebar_('technology');
    const all = entries();
    const M = meta();
    const T = computeTension({});
    const kinds = Object.keys(M.kinds||{}).filter(k => all.some(e=>e.kind===k));
    const terrs = {}; all.forEach(e => { const k = territoryKey(e); terrs[k] = (terrs[k]||0)+1; });
    let list = all.slice();
    if(FILTER.kind) list = list.filter(e => e.kind===FILTER.kind);
    if(FILTER.tier) list = list.filter(e => e.tier===FILTER.tier);
    if(FILTER.territory) list = list.filter(e => territoryKey(e)===FILTER.territory);
    if(FILTER.q){ const q = FILTER.q.toLowerCase(); list = list.filter(e => [e.name,e.summary,e.record,e.status,(e.tags||[]).join(' '),eventName((e.firstSeen||{}).event)].join(' ').toLowerCase().includes(q)); }
    list.sort((a,b) => ((b.firstSeen||{}).year||0) - ((a.firstSeen||{}).year||0) || a.name.localeCompare(b.name));
    const years = all.map(e=>(e.firstSeen||{}).year).filter(y=>y!=null);
    const featured = list[0] || all[0];
    const kindBtn = (k,label,icon)=>`<button type="button" class="tech-chip${FILTER.kind===k?' is-on':''}" onclick="TECH.setFilter('kind','${esc_(k)}')">${icon?icon+' ':''}${esc_(label)}</button>`;
    const tierBtn = (t,label)=>`<button type="button" class="tech-chip${FILTER.tier===t?' is-on':''}" onclick="TECH.setFilter('tier','${esc_(t)}')">${esc_(label)}</button>`;
    const terrOpts = Object.keys(terrs).sort((a,b)=>terrs[b]-terrs[a]).map(k=>`<option value="${esc_(k)}"${FILTER.territory===k?' selected':''}>${esc_(territoryName(k))} (${terrs[k]})</option>`).join('');
    const hot = T.territories.slice(0,4).map(t=>`<a class="tech-hot" href="#/technology/territory/${esc_(encodeURIComponent(t.key))}" onclick="event.preventDefault();Router.go('#/technology/territory/${esc_(encodeURIComponent(t.key))}')"><b>${esc_(t.name)}</b>${bandChip(t.band)}${gauge(t.score)}<small>${t.entries.length} on the record · score ${esc_(String(t.score))}</small></a>`).join('');

    content_().innerHTML = `
      <div class="card animate-fade-in tech-hero">
        <div class="tech-hero-text">
          <div class="hm-sec-kick">World system · derived from the filings</div>
          <h1>🔬 Discovered Technology</h1>
          <p class="text-muted">${esc_(M.note || 'What the filings have seen built, where, and when.')}</p>
          <div class="tech-stats">
            <div><b>${all.length}</b><span>pieces on the ledger</span></div>
            <div><b>${Object.keys(terrs).length}</b><span>territories</span></div>
            <div><b>${years.length?Math.min.apply(null,years):'—'}</b><span>earliest year filed</span></div>
            <div><b>${years.length?Math.max.apply(null,years):'—'}</b><span>latest year filed</span></div>
          </div>
          <div class="tech-hero-actions">
            <button type="button" class="tech-btn" onclick="Router.go('#/technology/tension')">🌡️ Open the tension board</button>
            <button type="button" class="tech-btn tech-btn--ghost" onclick="Router.go('#/article/${esc_((featured&&featured.firstSeen&&featured.firstSeen.event)||'')}')">📜 Newest source filing</button>
          </div>
        </div>
        <div class="tech-hero-viewer">
          <div class="tech-viewer" id="tech-viewer-featured" data-entry="${esc_(featured?featured.id:'')}"><div class="tech-viewer-fallback">${featured?esc_(featured.icon||'🔧'):''}<small>loading model…</small></div></div>
          ${featured?`<div class="tech-viewer-cap"><b>${esc_(featured.name)}</b> <a onclick="Router.go('${esc_(entryHash(featured.id))}')">open ›</a></div>`:''}
        </div>
      </div>

      <div class="card">
        <div class="section-title">Where the pressure is</div>
        <div class="tech-hotgrid">${hot||'<p class="text-muted">Nothing on the record yet.</p>'}</div>
      </div>

      <div class="card">
        <div class="tech-filters">
          <div class="tech-filter-row">${kindBtn('','All kinds','')}${kinds.map(k=>kindBtn(k,kindMeta(k).label,kindMeta(k).icon)).join('')}</div>
          <div class="tech-filter-row">${tierBtn('','Every era')}${(M.tiers||[]).filter(t=>all.some(e=>e.tier===t.id)).map(t=>tierBtn(t.id,t.name)).join('')}</div>
          <div class="tech-filter-row">
            <select class="tech-select" onchange="TECH.setFilter('territory',this.value)"><option value="">Every territory</option>${terrOpts}</select>
            <input class="tech-search" type="search" placeholder="Search the ledger…" value="${esc_(FILTER.q)}" oninput="TECH.setFilter('q',this.value,true)">
            <span class="tech-count">${list.length} of ${all.length}</span>
          </div>
        </div>
        <div class="techgrid">${list.map(tile).join('')||'<p class="text-muted">No entries match those filters.</p>'}</div>
      </div>

      <div class="card tech-howto">
        <div class="section-title">How a thing gets on this ledger</div>
        <p class="text-muted">A filing describes a machine, a weapon, an instrument or a line; the filer adds an entry to <code>Reputation-Matrix2/data/technology.json</code> with the article that saw it, the year, the ground it was seen on, a verbatim quote and a pressure figure. <code>tools/check-technology.py</code> refuses quotes the article does not contain. The tension board is arithmetic on those entries, not opinion — see <code>docs/TECHNOLOGY_SYSTEM.md</code>.</p>
      </div>`;
    g().scrollTo && g().scrollTo(0,0);
    if(featured) mountViewer('tech-viewer-featured', featured, { autoRotate:true, light:true });
    const inp = doc_() && doc_().querySelector('.tech-search'); if(inp && FILTER.q){ inp.focus(); try{ inp.setSelectionRange(inp.value.length, inp.value.length); }catch(e){} }
  }

  function setFilter(k, v, typed){
    FILTER[k] = v || '';
    if(typed){ clearTimeout(setFilter._t); setFilter._t = setTimeout(()=>{ if(location.hash.replace(/^#\/?/,'').split('/')[0]==='technology') renderLedger(); }, 160); return; }
    renderLedger();
  }

  function renderEntry(e){
    sidebar_('technology');
    const fs = e.firstSeen || {};
    const k = kindMeta(e.kind), t = tierMeta(e.tier);
    const terr = e.territory || {};
    const loc = terr.location ? locationById(terr.location) : null;
    const T = computeTension({});
    const home = T.territories.find(x => x.key === territoryKey(e));
    const siblings = entries().filter(x => x.id!==e.id && (territoryKey(x)===territoryKey(e) || (x.firstSeen||{}).event===fs.event)).slice(0,6);
    const quotes = (e.quotes||[]).map(q => `<blockquote class="tech-quote">“${esc_(q.text)}”<footer>— ${articleLink(q.event)}</footer></blockquote>`).join('');
    const sightings = (e.sightings||[]).map(s => `<li>${articleLink(s.event)}${s.year?` <span class="text-muted">(${esc_(String(s.year))} BF)</span>`:''}${s.note?` — ${esc_(s.note)}`:''}</li>`).join('');
    const edges = (e.tension||[]).map(x => `<li><b>${esc_(factionName(x.between[0]))}</b> ↔ <b>${esc_(factionName(x.between[1]))}</b> <span class="pill">+${esc_(String(x.weight))}</span>${x.why?`<div class="text-muted">${esc_(x.why)}</div>`:''}</li>`).join('');
    const rows = [
      ['Kind', `${esc_(k.icon||'')} ${esc_(k.label)}`],
      ['Era', esc_(t.name)],
      ['Territory', terr.nation ? nationLink(terr.nation) : esc_(placeName(e))],
      terr.plane && terr.plane!=='material' ? ['Plane', esc_(planeLabel(terr.plane))] : null,
      ['Ground', loc ? articleLink(loc.id, loc.name) : esc_(terr.label||'')],
      ['First seen', `${articleLink(fs.event)}<br><span class="text-muted">${esc_(fs.date||'')}</span>`],
      ['Year', fs.year!=null ? `${esc_(String(fs.year))} BF` : 'Unrecorded'],
      fs.timeCode ? ['Time code', `<code>${esc_(fs.timeCode)}</code>`] : null,
      ['Confidence', esc_(fs.confidence||'filed')],
      e.origin && e.origin.faction ? ['Origin', esc_(factionName(e.origin.faction))] : null,
      e.origin && e.origin.maker ? ['Maker', esc_(e.origin.maker)] : null,
      e.origin && e.origin.holder ? ['Holder', articleLink(e.origin.holder, characterName(e.origin.holder))] : null,
      ['Pressure', `<b class="${e.pressure>0?'tech-p-pos':(e.pressure<0?'tech-p-neg':'tech-p-zero')}">${e.pressure>0?'+':''}${esc_(String(e.pressure||0))}</b> <span class="text-muted">of ±3</span>`],
      home ? ['Territory now', `${bandChip(home.band)} <span class="text-muted">score ${esc_(String(home.score))}, ${T.asOfYear} BF</span>`] : null
    ].filter(Boolean).map(([kk,v]) => `<div class="row"><span class="k">${kk}</span><span class="v">${v}</span></div>`).join('');

    content_().innerHTML = crumbs([esc_(e.name)]) + `
      <div class="article-layout tech-entry"><div>
        <div class="card animate-fade-in">
          <h1 class="art-title">${esc_(e.icon||k.icon||'🔧')} ${esc_(e.name)}</h1>
          <div class="metabar">${chip(esc_(k.label))}${chip(esc_(t.name))}${chip('📍 '+esc_(placeName(e)))}${fs.year!=null?chip(esc_(String(fs.year))+' BF'):''}<span class="status-tag status-other">${esc_(e.status||'')}</span></div>
          <div class="tech-viewer tech-viewer--large" id="tech-viewer-entry" data-entry="${esc_(e.id)}"><div class="tech-viewer-fallback">${esc_(e.icon||'🔧')}<small>loading model…</small></div></div>
          <div class="tech-viewer-help text-muted">Drag to turn it. The model is built in the browser from the recipe <code>${esc_((e.model||{}).recipe||'')}</code> — a stand-in, not a photograph.</div>
          <blockquote>${esc_(e.summary||'')}</blockquote>
          <h2>What the record says</h2>
          <div class="prose"><p>${esc_(e.record||'')}</p></div>
          ${quotes?`<h2>On the record</h2>${quotes}`:''}
          ${sightings?`<h2>Seen again</h2><ul>${sightings}</ul>`:''}
          <h2>What it does to the territory</h2>
          <p class="text-muted">Pressure <b>${e.pressure>0?'+':''}${esc_(String(e.pressure||0))}</b> on <b>${esc_(territoryName(territoryKey(e)))}</b>${home?` — the territory reads ${bandChip(home.band)} as of ${T.asOfYear} BF. <a onclick="Router.go('#/technology/territory/${esc_(encodeURIComponent(territoryKey(e)))}')">See every driver ›</a>`:''}</p>
          ${edges?`<ul class="tech-edges">${edges}</ul>`:'<p class="text-muted">No faction-to-faction strain is filed against this entry.</p>'}
          ${siblings.length?`<h2>Filed nearby</h2><div class="techgrid techgrid--tight">${siblings.map(tile).join('')}</div>`:''}
        </div>
      </div><div>
        <div class="infobox"><h4>${esc_(e.name)}</h4>${rows}</div>
        ${(e.tags||[]).length?`<div class="infobox"><h4>Tags</h4><div class="tmeta">${e.tags.map(x=>chip(esc_(x))).join('')}</div></div>`:''}
      </div></div>`;
    g().scrollTo && g().scrollTo(0,0);
    mountViewer('tech-viewer-entry', e, { autoRotate:true });
  }

  function renderTension(year){
    sidebar_('technology');
    const T = computeTension({ asOfYear: year || undefined });
    const yearBtns = T.years.map(y => `<button type="button" class="tech-chip${y===T.asOfYear?' is-on':''}" onclick="Router.go('#/technology/tension/${y}')">${y} BF</button>`).join('');
    const bands = (meta().bands||[]).map(b => `<span class="tech-band" style="--band:${esc_(b.color)}" title="${esc_(b.blurb||'')}">${esc_(b.name)}</span>`).join(' ');
    const rows = T.territories.map(t => {
      const top = t.drivers.slice(0,3).map(d => `<a onclick="Router.go('${esc_(entryHash(d.id))}')" title="${esc_(eventName(d.event))}">${esc_(d.icon||'')} ${esc_(d.name)} <b>${d.contribution>0?'+':''}${esc_(String(d.contribution))}</b></a>`).join('');
      const kinds = Object.entries(t.kinds).map(([k,n]) => `<span title="${esc_(kindMeta(k).label)}">${esc_(kindMeta(k).icon)}${n>1?`×${n}`:''}</span>`).join(' ');
      return `<div class="tech-trow" style="--band:${esc_(t.band.color||'#888')}">
        <div class="tech-trow-head"><a class="tech-trow-name" onclick="Router.go('#/technology/territory/${esc_(encodeURIComponent(t.key))}')">${esc_(t.name)}</a>${bandChip(t.band)}<span class="tech-trow-score">${t.score>0?'+':''}${esc_(String(t.score))}</span></div>
        ${gauge(t.score)}
        <div class="tech-trow-meta"><span>${t.entries.length} on the record</span><span>${kinds}</span><span>ceiling: ${esc_(tierMeta(t.highestTier).name)}</span>${t.firstYear?`<span>${t.firstYear===t.latestYear?t.firstYear:t.firstYear+'–'+t.latestYear} BF</span>`:''}${t.rebirthFrom!=null?`<span>down from ${esc_(String(t.rebirthFrom))}</span>`:''}</div>
        <div class="tech-trow-drivers">${top}</div>
      </div>`;
    }).join('');
    const pairs = T.pairs.slice(0,12).map(p => `<li class="tech-pair"><div class="tech-pair-head"><b>${esc_(factionName(p.a))}</b> ↔ <b>${esc_(factionName(p.b))}</b><span class="pill">strain ${esc_(String(p.weight))}</span></div><ul>${p.reasons.slice(0,3).map(r=>`<li><a onclick="Router.go('${esc_(entryHash(r.entry))}')">${esc_(r.name)}</a>${r.year?` <span class="text-muted">(${r.year} BF)</span>`:''} — ${esc_(r.why)}</li>`).join('')}</ul></li>`).join('');

    content_().innerHTML = crumbs(['Tension board']) + `
      <div class="card animate-fade-in">
        <div class="hm-sec-kick">Country tension · derived from the technology ledger</div>
        <h1>🌡️ Where the world is strained, as of ${T.asOfYear} BF</h1>
        <p class="text-muted">Every point here is a piece of filed technology times how recently it was seen. Weapons, siege machinery and planar hardware push a territory up the cycle; presses, pipes, lines and medicine pull it down. Nothing is authored at this level — change the ledger and the board moves. The band names are the ones the old research wheel used, so a reader who knew that page knows this one.</p>
        <div class="tech-filter-row tech-years"><span class="text-muted">As of:</span>${yearBtns}</div>
        <div class="tech-legend">${bands}</div>
        <div class="tech-world"><b>World reading:</b> ${bandChip(T.world.band)} <span class="text-muted">— ${T.world.entries} pieces across ${T.world.territories} territories; summed score ${T.world.score>0?'+':''}${esc_(String(T.world.score))}.</span></div>
      </div>
      <div class="card"><div class="section-title">Territories</div><div class="tech-tboard">${rows||'<p class="text-muted">Nothing on the record by this year.</p>'}</div></div>
      <div class="card"><div class="section-title">Who is strained with whom</div>${pairs?`<ul class="tech-pairs">${pairs}</ul>`:'<p class="text-muted">No faction-to-faction strain filed by this year.</p>'}</div>
      <div class="card tech-howto"><div class="section-title">The arithmetic</div>
        <p class="text-muted">contribution = pressure × recency weight, summed over each dated appearance and capped at 1.5 × |pressure| per entry. Recency: same year ×1.0, one year back ×0.7, within five years ×0.4, older ×0.15, undated ×0.15. Bands: Calm ≤ −1.5 · Discovery ≤ 1 · Tension ≤ 3 · Conflict ≤ 6 · Crisis above. A territory whose score has fallen by 3 or more since the previous filing year reads Rebirth.</p></div>`;
    g().scrollTo && g().scrollTo(0,0);
  }

  function renderTerritory(key){
    sidebar_('technology');
    const T = computeTension({});
    const t = T.territories.find(x => x.key === key);
    if(!t){
      content_().innerHTML = crumbs([esc_(key)]) + `<div class="card"><h2>No technology filed for ${esc_(territoryName(key))}</h2><p class="text-muted"><a onclick="Router.go('#/technology/tension')">Back to the board.</a></p></div>`;
      return;
    }
    const drivers = t.drivers.map(d => `<tr><td><a onclick="Router.go('${esc_(entryHash(d.id))}')">${esc_(d.icon||'')} ${esc_(d.name)}</a></td><td>${esc_(kindMeta(d.kind).label)}</td><td>${d.year||'—'}</td><td>${d.pressure>0?'+':''}${d.pressure}</td><td>×${d.weight}</td><td><b>${d.contribution>0?'+':''}${d.contribution}</b></td><td>${articleLink(d.event)}</td></tr>`).join('');
    const history = T.years.filter(y => y <= T.asOfYear).map(y => { const s = computeTensionForTerritory(key, y); return s==null ? '' : `<button type="button" class="tech-chip" style="--band:${esc_(bandFor(s).color)}" onclick="Router.go('#/technology/tension/${y}')" title="${esc_(bandFor(s).name)}">${y} BF: ${s>0?'+':''}${s}</button>`; }).join('');
    const nation = t.nation ? nationById(t.nation) : null;
    content_().innerHTML = crumbs([`<a onclick="Router.go('#/technology/tension')">Tension board</a>`, esc_(t.name)]) + `
      <div class="article-layout"><div>
        <div class="card animate-fade-in">
          <h1 class="art-title">${esc_(t.name)}</h1>
          <div class="metabar">${bandChip(t.band)}${chip('score '+(t.score>0?'+':'')+esc_(String(t.score)))}${chip(t.entries.length+' on the record')}${chip('ceiling: '+esc_(tierMeta(t.highestTier).name))}</div>
          ${gauge(t.score)}
          <p class="text-muted">${esc_(t.band.blurb||'')}${t.rebirthFrom!=null?` Down from ${esc_(String(t.rebirthFrom))} at the previous filing year.`:''}</p>
          <h2>Every driver, as of ${T.asOfYear} BF</h2>
          <div class="tech-table-wrap"><table class="tech-table"><thead><tr><th>Technology</th><th>Kind</th><th>Year</th><th>Pressure</th><th>Weight</th><th>Contribution</th><th>Source filing</th></tr></thead><tbody>${drivers}</tbody></table></div>
          ${history?`<h2>By year</h2><div class="tech-filter-row">${history}</div>`:''}
          <h2>On the ground</h2>
          <div class="techgrid techgrid--tight">${t.entries.map(tile).join('')}</div>
        </div>
      </div><div>
        <div class="infobox"><h4>${esc_(t.name)}</h4>
          ${nation?`<div class="row"><span class="k">Atlas</span><span class="v">${nationLink(nation.id)}</span></div>`:''}
          ${t.region&&(meta().regions||{})[t.region]&&(meta().regions||{})[t.region].blurb?`<div class="row"><span class="k">Ground</span><span class="v">${esc_((meta().regions||{})[t.region].blurb)}</span></div>`:''}
          ${t.plane?`<div class="row"><span class="k">Plane</span><span class="v">${esc_(planeLabel(t.plane))}</span></div>`:''}
          <div class="row"><span class="k">Reading</span><span class="v">${bandChip(t.band)}</span></div>
          <div class="row"><span class="k">First filing</span><span class="v">${t.firstYear?t.firstYear+' BF':'—'}</span></div>
          <div class="row"><span class="k">Latest filing</span><span class="v">${t.latestYear?t.latestYear+' BF':'—'}</span></div>
        </div>
      </div></div>`;
    g().scrollTo && g().scrollTo(0,0);
  }

  /* ---------- the apparatus tab on an event page ---------- */
  function eventPanel(eventId){
    const list = forEvent(eventId);
    if(!list.length) return '';
    const items = list.map(e => {
      const first = (e.firstSeen||{}).event === eventId;
      return `<li class="tech-evt-item"><a onclick="Router.go('${esc_(entryHash(e.id))}')"><span class="tech-evt-ico">${esc_(e.icon||'🔧')}</span><b>${esc_(e.name)}</b></a> <span class="pill">${esc_(kindMeta(e.kind).label)}</span> <span class="pill">${first?'first seen here':'seen again here'}</span><div class="text-muted">${esc_(e.summary||'')}</div></li>`;
    }).join('');
    return `<div class="tech-evt-panel"><div class="section-title">🔬 Technology on this record</div><ul>${items}</ul><p class="text-muted"><a onclick="Router.go('#/technology')">Open the Discovered Technology ledger ›</a> · <a onclick="Router.go('#/technology/tension')">tension board ›</a></p></div>`;
  }

  /* ---------- search docs for the Research Bureau ---------- */
  function searchDocs(){
    return entries().map(e => ({
      kind:'technology', id:e.id, typeKey:'technology', name:e.name, summary:e.summary||'',
      hay:[e.id, e.name, e.summary, e.record, e.status, e.kind, e.tier, (e.tags||[]).join(' '), (e.territory||{}).label, eventName((e.firstSeen||{}).event)].filter(Boolean).join(' ').toLowerCase()
    }));
  }

  /* ---------- Three.js viewer ---------- */
  const VIEWERS = [];
  let threePromise = null;
  function loadThree(){
    if(g().THREE_MODULE) return Promise.resolve(g().THREE_MODULE);
    if(threePromise) return threePromise;
    const url = g().THREE_MODULE_URL || THREE_URL_DEFAULT;
    threePromise = import(/* webpackIgnore: true */ url).then(m => { g().THREE_MODULE = m; return m; }).catch(err => { threePromise = null; throw err; });
    return threePromise;
  }
  function mountViewer(containerId, entry, opts){
    opts = opts || {};
    const host = doc_() && doc_().getElementById(containerId);
    if(!host || !entry) return null;
    const recipe = (entry.model||{}).recipe || 'radio';
    const palette = (entry.model||{}).palette || {};
    const fallback = (msg)=>{ host.innerHTML = `<div class="tech-viewer-fallback">${esc_(entry.icon||'🔧')}<small>${esc_(msg)}</small></div>`; };
    const MODELS = G('TECH_MODELS');
    if(!MODELS){ fallback('model recipes not loaded'); return null; }
    if(typeof g().WebGLRenderingContext==='undefined' && typeof g().WebGL2RenderingContext==='undefined'){ fallback('3D needs a browser with WebGL'); return null; }
    const state = { id: containerId, alive: true, renderer: null, raf: 0 };
    VIEWERS.push(state);
    loadThree().then(THREE => {
      if(!state.alive || !doc_() || !doc_().getElementById(containerId)) return;
      let renderer;
      try{ renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true }); }
      catch(err){ fallback('3D is unavailable here (no WebGL context)'); return; }
      state.renderer = renderer;
      const w = Math.max(200, host.clientWidth||320), h = Math.max(160, host.clientHeight||240);
      renderer.setPixelRatio(Math.min(2, g().devicePixelRatio||1));
      renderer.setSize(w, h);
      host.innerHTML = '';
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, w/h, 0.1, 100);
      const built = MODELS.build(THREE, recipe, palette);
      const pivot = new THREE.Group(); pivot.add(built.group); scene.add(pivot);
      const dist = built.radius * 3.1;
      camera.position.set(dist*0.8, dist*0.45, dist*0.9); camera.lookAt(0,0,0);
      scene.add(new THREE.HemisphereLight(0xffffff, 0x3a2a5c, 1.1));
      const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(3,5,4); scene.add(key);
      const rim = new THREE.DirectionalLight(0xb388ff, 0.8); rim.position.set(-4,2,-3); scene.add(rim);
      /* a soft ground disc so the thing has somewhere to stand */
      const disc = new THREE.Mesh(new THREE.CircleGeometry(built.radius*1.4, 48), new THREE.MeshStandardMaterial({ color:0x1b1430, roughness:1, metalness:0, transparent:true, opacity:0.55 }));
      disc.rotation.x = -Math.PI/2; disc.position.y = -built.radius*1.02; scene.add(disc);
      /* drag to turn, auto-rotate otherwise */
      let dragging = false, lx = 0, ly = 0, vx = 0, idle = 0;
      pivot.rotation.y = 0.6;
      const onDown = (ev)=>{ dragging = true; idle = 0; const p = ev.touches?ev.touches[0]:ev; lx = p.clientX; ly = p.clientY; };
      const onMove = (ev)=>{ if(!dragging) return; const p = ev.touches?ev.touches[0]:ev; const dx = p.clientX-lx, dy = p.clientY-ly; lx = p.clientX; ly = p.clientY; pivot.rotation.y += dx*0.01; pivot.rotation.x = Math.max(-1.2, Math.min(1.2, pivot.rotation.x + dy*0.01)); vx = dx*0.01; if(ev.cancelable && ev.touches) ev.preventDefault(); };
      const onUp = ()=>{ dragging = false; };
      renderer.domElement.addEventListener('mousedown', onDown); renderer.domElement.addEventListener('touchstart', onDown, {passive:true});
      g().addEventListener('mousemove', onMove); g().addEventListener('touchmove', onMove, {passive:false});
      g().addEventListener('mouseup', onUp); g().addEventListener('touchend', onUp);
      state.cleanup = ()=>{ g().removeEventListener('mousemove', onMove); g().removeEventListener('touchmove', onMove); g().removeEventListener('mouseup', onUp); g().removeEventListener('touchend', onUp); };
      let last = performance.now();
      const loop = (now)=>{
        if(!state.alive) return;
        const dt = Math.min(0.05, (now-last)/1000); last = now;
        if(!dragging){ idle += dt; if(opts.autoRotate!==false && idle > 0.4) pivot.rotation.y += dt*0.45; else pivot.rotation.y += vx; vx *= 0.9; }
        built.animate(dt);
        renderer.render(scene, camera);
        state.raf = g().requestAnimationFrame(loop);
      };
      state.raf = g().requestAnimationFrame(loop);
      if(typeof g().ResizeObserver==='function'){
        state.ro = new g().ResizeObserver(()=>{ const W = host.clientWidth||w, H = host.clientHeight||h; if(W&&H){ renderer.setSize(W,H); camera.aspect = W/H; camera.updateProjectionMatrix(); } });
        state.ro.observe(host);
      }
    }).catch(err => {
      if(!state.alive) return;
      fallback('3D model unavailable offline — the ledger still reads');
      try{ console.warn('[technology] three.js failed to load', err); }catch(e){}
    });
    return state;
  }
  function unmountViewers(){
    while(VIEWERS.length){
      const s = VIEWERS.pop();
      s.alive = false;
      try{ if(s.raf) g().cancelAnimationFrame(s.raf); }catch(e){}
      try{ if(s.ro) s.ro.disconnect(); }catch(e){}
      try{ if(s.cleanup) s.cleanup(); }catch(e){}
      try{ if(s.renderer){ s.renderer.dispose(); const gl = s.renderer.getContext && s.renderer.getContext(); const ext = gl && gl.getExtension && gl.getExtension('WEBGL_lose_context'); if(ext) ext.loseContext(); } }catch(e){}
    }
  }

  window.TECH = {
    /* data */ entries, byId, forEvent, territoryKey, territoryName, placeName, yearsOnRecord, currentYear,
    /* tension */ recencyWeight, bandFor, computeTension, computeTensionForTerritory,
    /* views */ view_technology, renderLedger, renderEntry, renderTension, renderTerritory, setFilter, eventPanel, searchDocs,
    /* 3d */ mountViewer, unmountViewers, loadThree,
    /* for tests */ _tile: tile, _kindColor: kindColor
  };
})();
