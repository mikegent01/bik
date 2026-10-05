/* ============================================================================
   CHARACTER SHEETS — the Foundry sheet behind every character article.

   Reputation-Matrix2/data/sheets.json (written by tools/build-character-sheets.py)
   maps each character to a dnd5e actor file: the player's live-world export,
   the PC intake, the 955 BF era packet, or a sheet the builder generated from
   the article's own words. This file renders them: a card on the character
   page, a list at #/sheets, a full stat block at #/sheets/<character id>.

   Visibility is the point of the system, so it is stated once here and
   applied everywhere: a sheet is PUBLIC when the character is a member of
   Disaster Inc. (entry.party, decided by the builder from the XP ledger's
   faction and the article's affiliation). Every other sheet is RESTRICTED and
   appears only while Settings → Developer → debug mode is on — loudly, with a
   ribbon, because debug mode is meant to be obvious.

   Routes (wired in index.html's Router):
     #/sheets                 the list (public sheets; all of them in debug)
     #/sheets/<character id>  one sheet, stat block or PC summary

   Globals expected from index.html: esc, el, DATA, Router, renderSidebar,
   debugOn, assetPath, pathPrefix, SEARCH_DOCS (all optional — the tests boot
   this file against a stub window). Note index.html already owns a global
   called SHEETS (the reading desk's field sheets); this system is CAST_SHEETS.
   ========================================================================== */
(function(){
  'use strict';

  const g = ()=>window;
  const G = (name)=>{ try{ return (0, eval)(name); }catch(e){ return g()[name]; } };
  let ESC = null;
  const esc = s => { if(!ESC){ const f = G('esc'); ESC = (typeof f==='function') ? f : (x => String(x==null?'':x).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))); } return ESC(s); };
  const DATA_ = ()=> G('DATA') || {};
  const DEBUG_KEY = 'waluipedia-debug-v1';
  const RAW_BASE = 'https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/';

  /* ---------- data ---------- */
  function doc(){ return DATA_().sheets || g().SHEETS_DATA || { meta:{}, sheets:[], skipped:[] }; }
  function meta(){ return doc().meta || {}; }
  function all(){ return (doc().sheets || []).filter(s => s && s.id); }
  function skipped(){ return doc().skipped || []; }
  function byCharacter(id){ return all().find(s => s.id === id) || null; }
  function skipReason(id){ const s = skipped().find(x => x.id === id); return s ? s.reason : null; }

  /* ---------- visibility ---------- */
  function debugOn(){
    const f = G('debugOn');
    if(typeof f === 'function'){ try{ return !!f(); }catch(e){} }
    try{ return !!(g().localStorage && g().localStorage.getItem(DEBUG_KEY) === '1'); }catch(e){ return false; }
  }
  function visible(entry){ return !!entry && (entry.party === true || debugOn()); }
  function listVisible(){ return all().filter(visible); }
  function restrictedCount(){ return all().filter(s => !s.party).length; }

  /* ---------- paths ---------- */
  function pathPrefix(){
    const p = G('pathPrefix');
    if(typeof p === 'string') return p;
    const loc = g().location || {};
    return String(loc.pathname || '').includes('/Reputation-Matrix2/') ? './' : './Reputation-Matrix2/';
  }
  function fileUrl(entry){ return pathPrefix() + entry.file; }
  function rawUrl(entry){ return RAW_BASE + entry.file; }
  /* Every sheet a character carries: the one for now first, then the built
     era versions (#/sheets/<id>/<version>), then the other real files the
     archive holds for the same person (intake next to a live export, the
     955 BF packet sheet). Each row can be rendered in place of the main one. */
  function versionsOf(e){
    const now = { key:'now', label:'Now — 1040 BF', era:'1040 BF', file:e.file, name:e.sheetName || e.name, kind:e.kind, source:e.source,
      level:e.level, classes:e.classes, cr:e.cr, hp:e.hp, ac:e.ac, evidence:e.evidence, when:'' };
    const eras = (e.versions || []).map(v => Object.assign({}, v, { key:v.version, label:v.label + ' — ' + v.era }));
    const alts = (e.alternates || []).map((a, i) => Object.assign({ era:a.source === 'era' ? '955 BF' : '', when:'', evidence:[] }, a, { key:'alt-' + (i + 1), label:(SOURCE_LABEL[a.source] || a.source) + ' — ' + a.name }));
    return [now].concat(eras, alts);
  }
  function versionOf(e, key){ return versionsOf(e).find(v => v.key === key) || null; }
  function portraitUrl(entry){
    const src = entry.portrait || '';
    if(!src) return '';
    if(/^(?:https?:|data:|icons\/)/i.test(src)) return /^icons\//.test(src) ? '' : src;
    const ap = G('assetPath');
    if(typeof ap === 'function') return ap(src);
    return pathPrefix() + src;
  }

  /* ---------- dnd5e arithmetic ---------- */
  const ABIL = ['str','dex','con','int','wis','cha'];
  const ABIL_NAME = { str:'STR', dex:'DEX', con:'CON', int:'INT', wis:'WIS', cha:'CHA' };
  const SKILLS = { acr:['Acrobatics','dex'], ani:['Animal Handling','wis'], arc:['Arcana','int'], ath:['Athletics','str'], dec:['Deception','cha'], his:['History','int'], ins:['Insight','wis'], itm:['Intimidation','cha'], inv:['Investigation','int'], med:['Medicine','wis'], nat:['Nature','int'], prc:['Perception','wis'], prf:['Performance','cha'], per:['Persuasion','cha'], rel:['Religion','int'], slt:['Sleight of Hand','dex'], ste:['Stealth','dex'], sur:['Survival','wis'] };
  const SIZE = { tiny:'Tiny', sm:'Small', med:'Medium', lg:'Large', huge:'Huge', grg:'Gargantuan' };
  const CR_XP = { 0:10, 0.125:25, 0.25:50, 0.5:100, 1:200, 2:450, 3:700, 4:1100, 5:1800, 6:2300, 7:2900, 8:3900, 9:5000, 10:5900, 11:7200, 12:8400, 13:10000, 14:11500, 15:13000, 16:15000, 17:18000, 18:20000, 19:22000, 20:25000 };
  const mod = s => Math.floor(((+s || 10) - 10) / 2);
  const fmt = n => (n >= 0 ? '+' : '') + n;
  const crLabel = cr => cr == null ? '—' : ({0.125:'1/8', 0.25:'1/4', 0.5:'1/2'}[cr] || String(cr));
  function profFor(actor, entry){
    if(actor && actor.type === 'character'){
      const lvl = pcLevel(actor) || (entry && entry.level) || 1;
      return Math.ceil(lvl / 4) + 1;
    }
    const cr = +(((actor||{}).system||{}).details||{}).cr || 0;
    return cr < 5 ? 2 : cr < 9 ? 3 : cr < 13 ? 4 : cr < 17 ? 5 : cr < 21 ? 6 : 7;
  }
  function pcLevel(actor){
    return (actor.items || []).filter(i => i.type === 'class').reduce((n, i) => n + (+(i.system||{}).levels || 0), 0);
  }
  function abilityValue(actor, k){ return +((((actor.system||{}).abilities||{})[k]||{}).value) || 10; }
  function hpOf(actor){ const hp = ((actor.system||{}).attributes||{}).hp || {}; return { max: hp.max, formula: hp.formula || '' }; }
  function acOf(actor, entry){
    const ac = ((actor.system||{}).attributes||{}).ac || {};
    if((ac.calc === 'flat' || ac.calc === 'natural') && typeof ac.flat === 'number') return { value: ac.flat, approx:false };
    return { value: entry && entry.ac != null ? entry.ac : 10 + mod(abilityValue(actor,'dex')), approx:true };
  }
  function speedOf(actor){
    const m = ((actor.system||{}).attributes||{}).movement || {};
    const parts = [];
    if(+m.walk) parts.push(m.walk + ' ft.');
    if(+m.fly) parts.push('fly ' + m.fly + ' ft.' + (m.hover ? ' (hover)' : ''));
    if(+m.swim) parts.push('swim ' + m.swim + ' ft.');
    if(+m.burrow) parts.push('burrow ' + m.burrow + ' ft.');
    if(+m.climb) parts.push('climb ' + m.climb + ' ft.');
    return parts.join(', ') || '—';
  }
  function sensesOf(actor){
    const s = ((actor.system||{}).attributes||{}).senses || {};
    const out = [];
    const r = s.ranges || s;
    ['darkvision','blindsight','tremorsense','truesight'].forEach(k => { if(+r[k]) out.push(k + ' ' + r[k] + ' ft.'); });
    const wis = abilityValue(actor,'wis');
    out.push('passive Perception ' + (10 + mod(wis) + skillBonus(actor, 'prc')));
    return out.join(', ');
  }
  function skillBonus(actor, key){
    const sk = (((actor.system||{}).skills||{})[key]) || {};
    const prof = profFor(actor);
    const v = +sk.value || 0;
    return v ? Math.floor(prof * v) : 0;
  }
  function savesLine(actor){
    const prof = profFor(actor);
    return ABIL.filter(k => +((((actor.system||{}).abilities||{})[k]||{}).proficient)).map(k => ABIL_NAME[k] + ' ' + fmt(mod(abilityValue(actor,k)) + prof)).join(', ');
  }
  function skillsLine(actor){
    const prof = profFor(actor);
    return Object.keys(SKILLS).filter(k => +((((actor.system||{}).skills||{})[k]||{}).value)).map(k => {
      const v = +(((actor.system||{}).skills||{})[k]||{}).value;
      return SKILLS[k][0] + ' ' + fmt(mod(abilityValue(actor, SKILLS[k][1])) + Math.floor(prof * v));
    }).join(', ');
  }
  function traitList(actor, key){
    const t = (((actor.system||{}).traits||{})[key]) || {};
    const vals = (t.value || []).slice();
    if(t.custom) vals.push(t.custom);
    if(key === 'dr' && (t.bypasses||[]).length) return vals.join(', ') + ' from nonmagical attacks';
    return vals.join(', ');
  }
  function languages(actor){ return traitList(actor, 'languages') || '—'; }

  /* ---------- html hygiene for stored descriptions ---------- */
  function clean(html){
    return String(html || '')
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
      .replace(/(href|src)\s*=\s*("|')\s*javascript:[^"']*\2/gi, '$1="#"')
      .replace(/@UUID\[[^\]]*\]\{([^}]*)\}/g, '$1')
      .replace(/\[\[\/?(?:r|roll)\s*([^\]]*)\]\]/g, '$1');
  }

  /* ---------- items ---------- */
  function activityOf(item, type){
    const acts = ((item.system||{}).activities) || {};
    return Object.values(acts).find(a => a && a.type === type) || null;
  }
  function attackLine(item, actor){
    const act = activityOf(item, 'attack');
    const sys = item.system || {};
    const props = sys.properties || [];
    const kind = act ? ((act.attack||{}).type||{}).value : 'melee';
    let ability = act && (act.attack||{}).ability;
    if(!ability){
      if(props.includes('fin') || kind === 'ranged') ability = mod(abilityValue(actor,'dex')) >= mod(abilityValue(actor,'str')) ? 'dex' : 'str';
      else ability = 'str';
    }
    const prof = profFor(actor);
    const bonus = parseInt((act && (act.attack||{}).bonus) || sys.attack && sys.attack.bonus || 0, 10) || 0;
    const toHit = prof + mod(abilityValue(actor, ability)) + bonus + (parseInt(sys.magicalBonus,10) || 0);
    const dmg = (sys.damage||{}).base || {};
    const parts = [];
    if(dmg.number && dmg.denomination) parts.push(dmg.number + 'd' + dmg.denomination);
    const abilMod = mod(abilityValue(actor, ability));
    const flat = (parseInt(dmg.bonus,10) || 0) + (dmg.custom && dmg.custom.enabled ? 0 : abilMod);
    if(flat) parts.push(String(Math.abs(flat)));
    const dmgText = (dmg.custom && dmg.custom.enabled && dmg.custom.formula) ? dmg.custom.formula : parts.join(flat < 0 ? ' - ' : ' + ');
    const types = (dmg.types || []).join('/');
    const rng = sys.range || {};
    let reach = '';
    if(kind === 'ranged' || (rng.value && props.includes('thr'))) reach = (kind === 'ranged' ? 'range ' : 'reach ' + (rng.reach || 5) + ' ft. or range ') + (rng.value || 30) + (rng.long ? '/' + rng.long : '') + ' ft.';
    else reach = 'reach ' + (rng.reach || 5) + ' ft.';
    const vers = (sys.damage||{}).versatile || {};
    const versText = vers.number ? ' or ' + vers.number + 'd' + vers.denomination + (abilMod ? ' + ' + abilMod : '') + ' if used with two hands' : '';
    return `<p class="cs-action"><b>${esc(item.name)}.</b> <i>${kind === 'ranged' ? 'Ranged' : 'Melee'} ${((act && (act.attack||{}).type||{}).classification === 'spell') ? 'Spell' : 'Weapon'} Attack:</i> ${fmt(toHit)} to hit, ${esc(reach)}, one target. <i>Hit:</i> ${esc(dmgText)}${types ? ' ' + esc(types) : ''} damage${esc(versText)}.</p>`;
  }
  function usesText(item){
    const u = (item.system||{}).uses || {};
    if(!u.max) return '';
    if(/\d+\s*\/\s*(?:day|short rest|long rest)|recharge/i.test(item.name || '')) return ''; // the name already says it
    const rec = (u.recovery || [])[0] || {};
    const per = rec.period === 'recharge' ? 'Recharge ' + (rec.formula || '6') : rec.period === 'sr' ? '/Short Rest' : rec.period === 'lr' ? '/Long Rest' : rec.period === 'day' ? '/Day' : '';
    return rec.period === 'recharge' ? ' (' + per + ')' : ' (' + u.max + per + ')';
  }
  function featureBlock(item){
    const d = clean(((item.system||{}).description||{}).value);
    return `<div class="cs-feature"><b>${esc(item.name)}${esc(usesText(item))}.</b> <div class="cs-feature-text">${d}</div></div>`;
  }

  /* ---------- the NPC stat block ---------- */
  function abilityTable(actor){
    return `<table class="cs-abil"><tr>${ABIL.map(k => `<th>${ABIL_NAME[k]}</th>`).join('')}</tr><tr>${ABIL.map(k => { const v = abilityValue(actor,k); return `<td><b>${v}</b> <span>(${fmt(mod(v))})</span></td>`; }).join('')}</tr></table>`;
  }
  function statBlock(actor, entry){
    const sys = actor.system || {};
    const det = sys.details || {};
    const type = det.type || {};
    const cr = det.cr;
    const hp = hpOf(actor), ac = acOf(actor, entry);
    const weapons = (actor.items||[]).filter(i => i.type === 'weapon' && activityOf(i, 'attack'));
    const multi = (actor.items||[]).filter(i => i.type === 'feat' && /^multiattack/i.test(i.name || ''));
    const feats = (actor.items||[]).filter(i => i.type === 'feat' && !multi.includes(i));
    const spells = (actor.items||[]).filter(i => i.type === 'spell');
    const rows = [
      ['Armor Class', ac.value + (ac.approx ? ' (approx.)' : '') + (sys.attributes && sys.attributes.ac && sys.attributes.ac.calc === 'natural' ? ' (natural armor)' : '')],
      ['Hit Points', (hp.max != null ? hp.max : '—') + (hp.formula ? ' (' + hp.formula + ')' : '')],
      ['Speed', speedOf(actor)],
    ];
    const lines = [];
    const sv = savesLine(actor); if(sv) lines.push(['Saving Throws', sv]);
    const sk = skillsLine(actor); if(sk) lines.push(['Skills', sk]);
    const dv = traitList(actor,'dv'); if(dv) lines.push(['Damage Vulnerabilities', dv]);
    const dr = traitList(actor,'dr'); if(dr) lines.push(['Damage Resistances', dr]);
    const di = traitList(actor,'di'); if(di) lines.push(['Damage Immunities', di]);
    const ci = traitList(actor,'ci'); if(ci) lines.push(['Condition Immunities', ci]);
    lines.push(['Senses', sensesOf(actor)]);
    lines.push(['Languages', languages(actor)]);
    if(cr != null) lines.push(['Challenge', crLabel(cr) + ' (' + (CR_XP[cr] != null ? CR_XP[cr].toLocaleString() : '—') + ' XP)']);
    lines.push(['Proficiency Bonus', fmt(profFor(actor, entry))]);
    return `<div class="cs-block">
      <div class="cs-block-head"><h2>${esc(actor.name)}</h2><p>${esc(SIZE[(sys.traits||{}).size] || 'Medium')} ${esc(type.value || 'creature')}${type.subtype ? ' (' + esc(type.subtype) + ')' : ''}, ${esc(det.alignment || 'unaligned')}</p></div>
      <div class="cs-rule"></div>
      ${rows.map(r => `<p><b>${r[0]}</b> ${esc(r[1])}</p>`).join('')}
      <div class="cs-rule"></div>
      ${abilityTable(actor)}
      <div class="cs-rule"></div>
      ${lines.map(r => `<p><b>${r[0]}</b> ${esc(r[1])}</p>`).join('')}
      <div class="cs-rule"></div>
      ${feats.length ? `<div class="cs-section">${feats.map(featureBlock).join('')}</div>` : ''}
      ${(weapons.length || multi.length) ? `<h3>Actions</h3>${multi.map(featureBlock).join('')}${weapons.map(w => attackLine(w, actor)).join('')}${weapons.map(w => { const d = clean(((w.system||{}).description||{}).value); return d ? `<div class="cs-action-note">${d}</div>` : ''; }).join('')}` : ''}
      ${spells.length ? spellsBlock(spells) : ''}
    </div>`;
  }

  /* ---------- the PC summary ---------- */
  function spellsBlock(spells){
    const byLevel = {};
    spells.forEach(s => { const l = +((s.system||{}).level) || 0; (byLevel[l] = byLevel[l] || []).push(s); });
    const levels = Object.keys(byLevel).map(Number).sort((a,b) => a-b);
    return `<h3>Spells</h3>${levels.map(l => `<p class="cs-spells"><b>${l === 0 ? 'Cantrips' : 'Level ' + l}</b> ${byLevel[l].map(s => esc(s.name)).sort().join(', ')}</p>`).join('')}`;
  }
  function pcSheet(actor, entry){
    const items = actor.items || [];
    const classes = items.filter(i => i.type === 'class');
    const subclasses = items.filter(i => i.type === 'subclass');
    const species = items.filter(i => i.type === 'race').map(i => i.name);
    const background = items.filter(i => i.type === 'background').map(i => i.name);
    const level = pcLevel(actor) || entry.level || 0;
    const hp = hpOf(actor), ac = acOf(actor, entry);
    const weapons = items.filter(i => i.type === 'weapon' && activityOf(i, 'attack') && (i.system||{}).equipped !== false);
    const feats = items.filter(i => i.type === 'feat');
    const spells = items.filter(i => i.type === 'spell');
    const gear = items.filter(i => ['equipment','consumable','tool','loot','container','backpack'].includes(i.type));
    const classLine = classes.map(c => esc(c.name) + ' ' + (+(c.system||{}).levels || 0) + (subclasses.find(s => (s.system||{}).classIdentifier === (c.system||{}).identifier) ? ' (' + esc(subclasses.find(s => (s.system||{}).classIdentifier === (c.system||{}).identifier).name) + ')' : '')).join(' / ');
    const bio = clean((((actor.system||{}).details||{}).biography||{}).value);
    return `<div class="cs-block cs-block--pc">
      <div class="cs-block-head"><h2>${esc(actor.name)}</h2><p>Level ${level} ${classLine || esc((entry.classes||[]).join(' / ')) || 'adventurer'}${species.length ? ' · ' + esc(species.join(', ')) : ''}${background.length ? ' · ' + esc(background.join(', ')) : ''}</p></div>
      <div class="cs-rule"></div>
      <p><b>Armor Class</b> ${esc(String(ac.value))}${ac.approx ? ' (approx. — equipped armour and Dexterity; the live sheet is authoritative)' : ''}</p>
      <p><b>Hit Points</b> ${hp.max != null ? esc(String(hp.max)) : '—'}</p>
      <p><b>Speed</b> ${esc(speedOf(actor))}</p>
      <div class="cs-rule"></div>
      ${abilityTable(actor)}
      <div class="cs-rule"></div>
      ${savesLine(actor) ? `<p><b>Saving Throws</b> ${esc(savesLine(actor))}</p>` : ''}
      ${skillsLine(actor) ? `<p><b>Skills</b> ${esc(skillsLine(actor))}</p>` : ''}
      <p><b>Senses</b> ${esc(sensesOf(actor))}</p>
      <p><b>Languages</b> ${esc(languages(actor))}</p>
      <p><b>Proficiency Bonus</b> ${fmt(profFor(actor, entry))}</p>
      <div class="cs-rule"></div>
      ${weapons.length ? `<h3>Attacks</h3>${weapons.map(w => attackLine(w, actor)).join('')}` : ''}
      ${feats.length ? `<h3>Features &amp; Traits <small>(${feats.length})</small></h3><details class="cs-details"><summary>Show all</summary>${feats.map(featureBlock).join('')}</details>` : ''}
      ${spells.length ? spellsBlock(spells) : ''}
      ${gear.length ? `<h3>Inventory <small>(${gear.length})</small></h3><p class="cs-gear">${gear.map(i => esc(i.name) + ((+(i.system||{}).quantity > 1) ? ' ×' + (i.system||{}).quantity : '')).join(', ')}</p>` : ''}
      ${bio ? `<h3>Biography</h3><details class="cs-details"><summary>Show</summary><div class="cs-bio">${bio}</div></details>` : ''}
    </div>`;
  }

  /* ---------- cards & badges ---------- */
  const SOURCE_LABEL = { live:'Live world', intake:'PC intake', era:'955 BF era sheet', generated:'Generated from the article' };
  function sourceBadge(e){ return `<span class="cs-badge cs-badge--${esc(e.source)}">${esc(SOURCE_LABEL[e.source] || e.source)}</span>`; }
  function kindBadge(e){ return e.kind === 'pc' ? `<span class="cs-badge cs-badge--pc">PC · L${esc(e.level != null ? e.level : '?')}</span>` : `<span class="cs-badge cs-badge--npc">NPC · CR ${esc(crLabel(e.cr))}</span>`; }
  function partyBadge(e){ return e.party ? `<span class="cs-badge cs-badge--party">Disaster Inc.</span>` : `<span class="cs-badge cs-badge--restricted">Restricted</span>`; }
  function miniStats(e){
    const a = e.abilities || {};
    return `<div class="cs-mini">
      <div><span>AC</span><b>${esc(e.ac != null ? e.ac : '—')}${e.acApprox ? '*' : ''}</b></div>
      <div><span>HP</span><b>${esc(e.hp != null ? e.hp : '—')}</b></div>
      <div><span>Speed</span><b>${esc(e.speed != null ? e.speed + ' ft' : '—')}</b></div>
      ${ABIL.map(k => `<div><span>${ABIL_NAME[k]}</span><b>${esc(a[k] != null ? a[k] : '—')}</b> <small>${a[k] != null ? fmt(mod(a[k])) : ''}</small></div>`).join('')}
    </div>`;
  }
  function card(e){
    const img = portraitUrl(e);
    return `<a class="cs-card${e.party ? '' : ' cs-card--restricted'}" href="#/sheets/${encodeURIComponent(e.id)}" onclick="event.preventDefault();Router.go('#/sheets/${esc(e.id)}')">
      <div class="cs-card-img">${img ? `<img src="${esc(img)}" alt="" loading="lazy" onerror="this.style.display='none'">` : '<span>📜</span>'}</div>
      <div class="cs-card-body">
        <b class="cs-card-name">${esc(e.name)}</b>
        <small class="cs-card-title">${esc(e.title || '')}</small>
        <div class="cs-card-badges">${kindBadge(e)} ${sourceBadge(e)}${e.party ? '' : ' ' + partyBadge(e)}</div>
        <div class="cs-card-stats"><span>AC ${esc(e.ac != null ? e.ac : '—')}</span><span>HP ${esc(e.hp != null ? e.hp : '—')}</span>${e.ledger && e.ledger.level != null ? `<span>ledger L${esc(e.ledger.level)}</span>` : ''}</div>
      </div>
    </a>`;
  }
  function debugBanner(extra){
    return `<div class="cs-debug-banner">🧪 <b>DEBUG MODE</b> — every character sheet is visible, including ${restrictedCount()} restricted NPC and enemy sheets the party has not earned. ${extra || ''}<button type="button" class="cs-btn cs-btn--ghost" onclick="Router.go('#/settings')">Settings</button></div>`;
  }
  function restrictedNotice(){
    return `<div class="cs-locked"><b>Restricted sheet.</b> Only Disaster Inc. members' sheets are public. The rest of the cast — ${restrictedCount()} sheets — show while debug mode is on (Settings → Developer).</div>`;
  }

  /* ---------- the character-page panel ---------- */
  function characterPanel(item){
    if(!item || !item.id) return '';
    const e = byCharacter(item.id);
    if(!e){
      const why = skipReason(item.id);
      if(why && debugOn()) return `<section class="cs-panel cs-panel--restricted"><div class="cs-panel-head"><h2>📜 Character sheet</h2></div><p class="cs-note">No sheet on purpose: ${esc(why)}.</p></section>`;
      return '';
    }
    if(!visible(e)) return '';
    const dbg = debugOn() && !e.party;
    const ledger = e.ledger || {};
    const how = e.source === 'generated'
      ? (e.kind === 'pc'
        ? `Hand-authored from this article by <code>tools/build-character-sheets.py</code> as a player-character sheet — level ${esc(e.level)} ${esc((e.classes || []).map(c => c.replace(/ \d+$/, '')).join(' / ') || 'adventurer')}${ledger.level != null ? ' (the XP ledger level)' : ' (no ledger entry; the authored CR ' + esc(crLabel(e.pc && e.pc.cr)) + ' stands in)'}.`
        : `Generated from this article by <code>tools/build-character-sheets.py</code>${ledger.level != null ? ` — XP ledger level ${esc(ledger.level)}, so CR ${esc(crLabel(e.cr))} (never above the ledger)` : ' — no ledger entry, archetype default'}.`)
      : `${esc(SOURCE_LABEL[e.source] || e.source)} — the Foundry actor this character actually plays with.`;
    return `<section class="cs-panel${dbg ? ' cs-panel--restricted' : ''}">
      <div class="cs-panel-head"><h2>📜 Character sheet</h2><div class="cs-card-badges">${kindBadge(e)} ${sourceBadge(e)} ${partyBadge(e)}</div></div>
      ${dbg ? `<div class="cs-debug-ribbon">🧪 DEBUG — restricted sheet. Only Disaster Inc. sheets are public; this one is visible because debug mode is on.</div>` : ''}
      ${miniStats(e)}
      <div class="cs-panel-actions">
        <button type="button" class="cs-btn" onclick="Router.go('#/sheets/${esc(e.id)}')">Open the sheet</button>
        <a class="cs-btn cs-btn--ghost" href="${esc(fileUrl(e))}" download>Foundry JSON</a>
        <button type="button" class="cs-btn cs-btn--ghost" onclick="Router.go('#/sheets')">All sheets</button>
      </div>
      <p class="cs-note">${how}${e.acApprox ? ' AC is approximate (equipped armour + Dexterity).' : ''}</p>
    </section>`;
  }

  /* ---------- views ---------- */
  let FILTER = { q:'', group:'' };
  function sidebar(k){ const f = G('renderSidebar'); if(typeof f === 'function') f(k); }
  function content(){ const f = G('el'); const node = typeof f === 'function' ? f('content') : (g().document && g().document.getElementById('content')); return node; }
  function groupsOf(list){
    const order = [];
    list.forEach(e => { if(!order.includes(e.group)) order.push(e.group); });
    order.sort((a,b) => (a === 'Disaster Inc.' ? -1 : b === 'Disaster Inc.' ? 1 : a.localeCompare(b)));
    return order;
  }
  function filtered(list){
    const q = FILTER.q.trim().toLowerCase();
    return list.filter(e => (!FILTER.group || e.group === FILTER.group) && (!q || [e.name, e.title, e.group, e.id, e.sheetName].filter(Boolean).join(' ').toLowerCase().includes(q)));
  }
  function listHtml(){
    const dbg = debugOn();
    const vis = listVisible();
    const list = filtered(vis);
    const groups = groupsOf(list);
    const m = meta();
    const counts = m.counts || {};
    return `<div class="cs-wrap">
      <div class="cs-hero">
        <div>
          <h1>📜 Character Sheets</h1>
          <p>The Foundry (dnd5e) sheet behind every character article — ${esc(counts.sheets || all().length)} in the archive: the players' live-world exports, the PC intake, the 955 BF era packet, and ${esc(counts.generated || 0)} sheets generated from the articles' own words. Every generated feature quotes the line it came from, and no generated CR exceeds the XP ledger's level.</p>
          <p class="cs-vis">${dbg ? 'Showing everyone.' : `Showing the <b>${vis.length}</b> Disaster Inc. sheets. ${restrictedCount()} more exist for the rest of the cast; they appear when debug mode is on (Settings → Developer).`}</p>
        </div>
        <div class="cs-stats">
          <div><b>${esc(vis.length)}</b><span>visible now</span></div>
          <div><b>${esc(counts.party || 0)}</b><span>Disaster Inc.</span></div>
          <div><b>${esc(counts.generated || 0)}</b><span>generated</span></div>
          <div><b>${esc(counts.existing || 0)}</b><span>real exports</span></div>
        </div>
      </div>
      ${dbg ? debugBanner() : ''}
      <div class="cs-filters">
        <input class="cs-search" type="search" placeholder="Search names, titles, groups…" value="${esc(FILTER.q)}" oninput="CAST_SHEETS.setFilter({q:this.value})">
        <div class="cs-chips">
          <button type="button" class="cs-chip${FILTER.group ? '' : ' is-on'}" onclick="CAST_SHEETS.setFilter({group:''})">All groups</button>
          ${groupsOf(vis).map(gname => `<button type="button" class="cs-chip${FILTER.group === gname ? ' is-on' : ''}" onclick="CAST_SHEETS.setFilter({group:'${esc(gname).replace(/'/g, '&#39;')}'})">${esc(gname)} <small>${vis.filter(e => e.group === gname).length}</small></button>`).join('')}
        </div>
      </div>
      ${groups.length ? groups.map(gname => `<section class="cs-group"><h2>${esc(gname)} <small>${list.filter(e => e.group === gname).length}</small></h2><div class="cs-grid">${list.filter(e => e.group === gname).map(card).join('')}</div></section>`).join('') : '<p class="cs-empty">Nothing matches.</p>'}
      <section class="cs-foot">
        <h2>Importing into Foundry</h2>
        <p>Every sheet is a plain dnd5e actor file. Open one and use <b>Foundry JSON</b> to download it, or feed the <b>Mass Import</b> module (<code>waluipedia-mass-import</code>) the raw URL shown on the sheet page. The whole generated cast is one packet: <code>Reputation-Matrix2/${esc(m.castImport || 'actors/cast/import.json')}</code>, filed straight into the website group folders (tagged <b>generated</b>); the module's Sync brings it in together with the live world and the 955 BF court.</p>
        ${dbg && skipped().length ? `<p class="cs-note"><b>Not statted on purpose:</b> ${skipped().map(s => `${esc(s.name || s.id)} — ${esc(s.reason)}`).join('; ')}.</p>` : ''}
      </section>
    </div>`;
  }
  function setFilter(patch){
    FILTER = Object.assign({}, FILTER, patch || {});
    const node = content();
    if(node) node.innerHTML = listHtml();
    const inp = node && node.querySelector && node.querySelector('.cs-search');
    if(inp && typeof inp.focus === 'function' && patch && 'q' in patch){ inp.focus(); try{ inp.setSelectionRange(inp.value.length, inp.value.length); }catch(e){} }
  }
  function versionStrip(e, v){
    const vs = versionsOf(e);
    if(vs.length < 2) return '';
    return `<nav class="cs-versions" aria-label="Versions of this sheet">${vs.map(x => `<a class="cs-version${x.key === v.key ? ' is-active' : ''}" onclick="Router.go('#/sheets/${esc(e.id)}${x.key === 'now' ? '' : '/' + esc(x.key)}')">${esc(x.label)}<small>${esc(x.kind === 'pc' ? 'PC · L' + (x.level != null ? x.level : '?') : 'NPC · CR ' + crLabel(x.cr))}</small></a>`).join('')}</nav>`;
  }
  function detailHtml(e, v){
    v = v || versionOf(e, 'now');
    const img = portraitUrl(e);
    const dbg = debugOn() && !e.party;
    const ledger = e.ledger || {};
    const ev = (v.key === 'now' ? e.evidence : v.evidence) || [];
    const art = `#/article/${encodeURIComponent(e.id)}`;
    const isEra = v.key !== 'now' && !!v.version;
    return `<div class="cs-wrap">
      ${dbg ? debugBanner('This sheet is restricted.') : ''}
      <div class="cs-detail-head">
        <div class="cs-detail-img">${img ? `<img src="${esc(img)}" alt="${esc(e.name)}" onerror="this.style.display='none'">` : '<span>📜</span>'}</div>
        <div class="cs-detail-text">
          <div class="cs-crumbs"><a onclick="Router.go('#/sheets')">Character Sheets</a> › ${esc(e.group)}</div>
          <h1>${esc(v.key === 'now' ? e.name : v.name)}</h1>
          <p class="cs-detail-title">${esc(isEra ? v.label : (e.title || ''))}</p>
          <div class="cs-card-badges">${kindBadge(v.key === 'now' ? e : v)} ${sourceBadge(v.key === 'now' ? e : v)} ${partyBadge(e)}${(v.key === 'now' ? e.bespoke : v.bespoke) ? ' <span class="cs-badge cs-badge--bespoke">Hand-authored</span>' : ''}${isEra ? ` <span class="cs-badge cs-badge--era">${esc(v.era)}</span>` : ''}</div>
          ${versionStrip(e, v)}
          ${isEra ? `<p class="cs-note cs-note--era"><b>${esc(v.era)}.</b> ${esc(v.when || '')} Level ${esc(v.level)} ${esc((v.classes || []).map(c => c.replace(/ \d+$/, '')).join(' / '))} — an era version never exceeds the ledger level${ledger.level != null ? ` (${esc(ledger.level)})` : ''}: a past self holds no more experience than the present one.</p>` : ''}
          <p class="cs-note">${ledger.level != null ? `XP ledger: level ${esc(ledger.level)}${ledger.powerLevel != null ? ', power rating ' + esc(ledger.powerLevel) : ''}. ` : 'No XP ledger entry. '}${e.source === 'generated' ? (e.kind === 'pc' ? `Hand-authored as a player-character sheet — level ${esc(e.level)} ${esc((e.classes || []).map(c => c.replace(/ \d+$/, '')).join(' / ') || 'adventurer')}, the ledger level${e.pc && e.pc.cr != null ? ` (authored CR ${esc(crLabel(e.pc.cr))}, never above it)` : ''}; a player may take this seat.` : `Generated as a ${esc(e.role || 'character')} — CR ${esc(crLabel(e.cr))}, which never exceeds the ledger level.`) : `${esc(SOURCE_LABEL[e.source] || e.source)}: <code>${esc(e.file)}</code>.`}${e.partyWhy ? ` Party: ${esc(e.partyWhy)}.` : ''}</p>
          <div class="cs-panel-actions">
            <button type="button" class="cs-btn" onclick="Router.go('${art}')">Open the article</button>
            <a class="cs-btn cs-btn--ghost" href="${esc(fileUrl(v))}" download>Download Foundry JSON</a>
            <a class="cs-btn cs-btn--ghost" href="${esc(fileUrl(v))}" target="_blank" rel="noopener">View raw</a>
          </div>
          <label class="cs-import"><span>Mass Import URL</span><input type="text" readonly value="${esc(rawUrl(v))}" onclick="this.select()"></label>
        </div>
      </div>
      <div id="cs-sheet-body" class="cs-body"><p class="cs-loading">Loading the sheet…</p></div>
      ${ev.length ? `<section class="cs-evidence"><h2>Evidence</h2><p class="cs-note">Every generated feature is tied to a line of the article. <code>tools/check-sheets.py</code> fails if a quote stops matching.</p><ul>${ev.map(x => `<li><b>${esc(x.feature)}</b> — “${esc(x.quote)}”${x.source === 'title' ? ' <small>(article header)</small>' : ''}</li>`).join('')}</ul></section>` : ''}
      ${versionsOf(e).length > 1 ? `<section class="cs-alts"><h2>Every sheet this character carries</h2><ul>${versionsOf(e).map(x => `<li>${x.key === v.key ? '<b>' : ''}${esc(x.label)}${x.key === v.key ? '</b> (shown)' : ''} — ${esc(SOURCE_LABEL[x.source] || x.source)}, ${esc(x.kind === 'pc' ? 'PC' : 'NPC')} · <a onclick="Router.go('#/sheets/${esc(e.id)}${x.key === 'now' ? '' : '/' + esc(x.key)}')">open</a> · <a href="${esc(pathPrefix() + x.file)}" download>Foundry JSON</a></li>`).join('')}</ul></section>` : ''}
    </div>`;
  }
  function mountDetail(e, v){
    v = v || versionOf(e, 'now');
    const host = g().document && g().document.getElementById('cs-sheet-body');
    if(!host) return;
    loadActor(v).then(actor => {
      host.innerHTML = actor.type === 'character' ? pcSheet(actor, v) : statBlock(actor, v);
    }).catch(err => {
      host.innerHTML = `<p class="cs-loading">The sheet file could not be loaded (${esc(err && err.message || err)}). It is in the repository at <code>Reputation-Matrix2/${esc(v.file)}</code>.</p>`;
    });
  }
  const CACHE = {};
  function loadActor(entry){
    if(CACHE[entry.file]) return CACHE[entry.file];
    const f = g().fetch;
    if(typeof f !== 'function') return Promise.reject(new Error('fetch is not available'));
    CACHE[entry.file] = f(fileUrl(entry)).then(r => { if(!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .catch(err => { delete CACHE[entry.file]; throw err; });
    return CACHE[entry.file];
  }
  function view_sheets(arg){
    sidebar('sheets');
    const node = content();
    const segs = String(arg || '').split('/');
    const id = decodeURIComponent(segs[0] || '');
    const verKey = decodeURIComponent(segs[1] || '') || 'now';
    if(!node) return;
    if(!id){ node.innerHTML = listHtml(); if(g().scrollTo) g().scrollTo(0,0); return; }
    const e = byCharacter(id);
    if(!e){
      const why = skipReason(id);
      node.innerHTML = `<div class="cs-wrap"><h1>📜 No sheet</h1><p>${why ? esc(why) + '.' : 'No character with that id has a sheet.'}</p><p><a onclick="Router.go('#/sheets')">Back to the sheets</a></p></div>`;
      return;
    }
    if(!visible(e)){
      node.innerHTML = `<div class="cs-wrap"><h1>📜 ${esc(e.name)}</h1>${restrictedNotice()}<p><a onclick="Router.go('#/sheets')">Back to the sheets</a> · <a onclick="Router.go('#/article/${esc(e.id)}')">Open the article</a></p></div>`;
      return;
    }
    const v = versionOf(e, verKey);
    if(!v){
      node.innerHTML = `<div class="cs-wrap"><h1>📜 ${esc(e.name)}</h1><p>No version <code>${esc(verKey)}</code> of this sheet. ${versionsOf(e).map(x => `<a onclick="Router.go('#/sheets/${esc(e.id)}${x.key === 'now' ? '' : '/' + esc(x.key)}')">${esc(x.label)}</a>`).join(' · ')}</p></div>`;
      return;
    }
    node.innerHTML = detailHtml(e, v);
    if(g().scrollTo) g().scrollTo(0,0);
    mountDetail(e, v);
  }

  /* ---------- search ---------- */
  function searchDocs(){
    return listVisible().map(e => ({
      kind:'sheet', id:e.id, typeKey:'sheets', name: e.name + ' — sheet', summary:(e.kind === 'pc' ? 'Level ' + e.level + ' player character' : 'CR ' + crLabel(e.cr) + ' ' + (e.type || 'NPC')) + ' · ' + (SOURCE_LABEL[e.source] || e.source),
      hay:[e.id, e.name, e.title, e.group, e.sheetName, 'sheet', 'foundry', e.kind, e.source].filter(Boolean).join(' ').toLowerCase()
    }));
  }
  function refreshSearch(){
    const docs = G('SEARCH_DOCS');
    if(!Array.isArray(docs)) return 0;
    for(let i = docs.length - 1; i >= 0; i--) if(docs[i] && docs[i].kind === 'sheet') docs.splice(i, 1);
    const fresh = searchDocs();
    fresh.forEach(d => docs.push(d));
    return fresh.length;
  }

  g().CAST_SHEETS = {
    meta, all, skipped, byCharacter, skipReason, visible, listVisible, restrictedCount, debugOn,
    fileUrl, rawUrl, portraitUrl, loadActor,
    statBlock, pcSheet, attackLine, featureBlock, clean, profFor, crLabel,
    characterPanel, card, listHtml, detailHtml, setFilter, view_sheets, searchDocs, refreshSearch, versionsOf, versionOf,
  };
})();
