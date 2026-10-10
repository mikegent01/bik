import re

with open('index.html', encoding='utf-8') as f:
    text = f.read()

render_func = """
function renderItemReport(item){
  if(!item||!item.id) return '';
  const items=[];
  const explicit = item.itemReport || item.spoils || item.itemsGained || [];
  if(Array.isArray(explicit)){
    explicit.forEach(it=>{
      if(typeof it === 'string'){
        const inv = (typeof INVENTORY_SYSTEM !== 'undefined' && INVENTORY_SYSTEM.items && INVENTORY_SYSTEM.items[it]) || {};
        items.push({ id: it, name: inv.name||prettyId(it), type: inv.type||'Spoils', summary: inv.summary||'', icon: inv.icon||'📦', recipient: inv.carrier||'' });
      } else if(it && typeof it === 'object'){
        items.push({
          id: it.id || it.itemId || '',
          name: it.name || prettyId(it.id||''),
          type: it.type || it.rarity || 'Spoils',
          summary: it.summary || it.desc || it.description || '',
          icon: it.icon || '📦',
          recipient: it.recipient || it.carrier || it.holder || '',
          status: it.status || 'Acquired'
        });
      }
    });
  }
  if(typeof INVENTORY_SYSTEM !== 'undefined' && INVENTORY_SYSTEM.items){
    Object.entries(INVENTORY_SYSTEM.items).forEach(([k, inv])=>{
      if(inv && Array.isArray(inv.relatedArticles) && inv.relatedArticles.includes(item.id)){
        if(!items.some(x=>x.id === k)){
          items.push({
            id: k,
            name: inv.name || prettyId(k),
            type: inv.type || inv.rarity || 'Spoils',
            summary: inv.summary || inv.obtained || '',
            icon: inv.icon || '📦',
            recipient: inv.carrier || '',
            status: 'Filed in Vault'
          });
        }
      }
    });
  }
  if(!items.length) return '';
  
  const rows = items.map(it=>{
    const route = it.id ? `onclick="Router.go('#/item/${esc(it.id)}'); event.stopPropagation();"` : '';
    return `<div class="item-report-row" ${route} style="cursor:${it.id?'pointer':'default'}">
      <div class="item-report-icon">${esc(it.icon||'📦')}</div>
      <div class="item-report-details">
        <div class="item-report-title-row">
          <span class="item-report-name">${esc(it.name)}</span>
          ${it.type ? `<span class="item-report-badge">${esc(it.type)}</span>` : ''}
          ${it.recipient ? `<span class="item-report-badge recipient">Held by: ${esc(it.recipient)}</span>` : ''}
          ${it.status ? `<span class="item-report-badge status">${esc(it.status)}</span>` : ''}
        </div>
        ${it.summary ? `<div class="item-report-desc">${esc(it.summary)}</div>` : ''}
      </div>
    </div>`;
  }).join('');

  return `<div class="item-report-block" id="item-report-session">
    <div class="item-report-head">
      <h4>📦 ITEM REPORT · SPOILS & ACQUISITIONS</h4>
      <span class="item-report-kicker">${items.length} ${items.length===1?'item':'items'} logged</span>
    </div>
    <div class="item-report-list">${rows}</div>
  </div>`;
}
"""

target_old = 'function eventPeopleAndXpPanel(item){'
if target_old in text:
    text = text.replace(target_old, render_func + '\n' + target_old)
    old_awards = 'const awardsBlock=awards?`<div class="xp-session" id="xp-session"><div class="xp-session-head"><h3>Session XP</h3><span class="xp-session-kicker">snapshot · party +${partyTotal.toLocaleString()} · ${grouped.length} ${grouped.length===1?\'person\':\'people\'}</span></div><div class="award-list">${awards}</div></div>`:\'\';'
    new_awards = 'const itemReportHtml=renderItemReport(item);\n  const awardsBlock=(awards||itemReportHtml)?`<div class="xp-session" id="xp-session">${awards?`<div class="xp-session-head"><h3>Session XP</h3><span class="xp-session-kicker">snapshot · party +${partyTotal.toLocaleString()} · ${grouped.length} ${grouped.length===1?\'person\':\'people\'}</span></div><div class="award-list">${awards}</div>`:""}${itemReportHtml}</div>`:\'\';'
    if old_awards in text:
        text = text.replace(old_awards, new_awards)
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(text)
        print('Successfully updated index.html!')
    else:
        print('Could not find old_awards')
else:
    print('Could not find target_old')
