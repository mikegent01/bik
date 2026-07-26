const icons={gold:'💰',copper:'🟤',silver:'🪙',soul_coin:'🔮',wario_coin:'🟡',wario_points:'🎟️',midland_ducat:'🦁'};
const names={gold:'Gold Piece',copper:'Copper Bit',silver:'Silver Piece',soul_coin:'Soul Coin',wario_coin:'Wario Coin',wario_points:'Wario Shop Credit',midland_ducat:'Midland Ducat'};
let walletData=null,lastMarkup='',renderQueued=false;
async function loadWallet(){try{const r=await fetch('./wallets.json',{cache:'no-cache'});walletData=await r.json();}catch(e){walletData={};}return walletData;}
function id(){const raw=localStorage.getItem('waluipediaUser')||localStorage.getItem('currentUserId')||'';const aliases={archie_miser:'archie',markop_judi:'markop',fng_remi:'remi',waluigi_miser:'waluigi'};return aliases[raw]||raw}
function render(){
 const root=document.getElementById('root');if(!root||!walletData)return;
 const uid=id(),w=walletData[uid];
 const markup=w?`<div class="bridge-wallet"><div><b>Connected operator:</b> ${w.name||uid}<small>Actual recorded inventory wallet</small></div><div class="bridge-coins">${Object.entries(w.currencies||{}).map(([k,v])=>`<span>${icons[k]||'🪙'} ${Number(v).toLocaleString()} ${names[k]||k}</span>`).join('')||'<span>No recorded currency holdings</span>'}</div><a href="battlefield.html#/profile/${encodeURIComponent(uid)}">Open full wallet & profile →</a></div>`:`<div class="bridge-warning">🔐 <b>Connect an operator to buy</b><span>Wario's Warehouse cannot use the generic XP display as a real wallet. <a href="battlefield.html#/login">Open Waluipedia Login →</a></span></div>`;
 let box=document.getElementById('playerWalletBridge');if(!box){box=document.createElement('section');box.id='playerWalletBridge';root.prepend(box)}if(markup!==lastMarkup){box.innerHTML=markup;lastMarkup=markup;}
}
function removeFakeGold(){const root=document.getElementById('root');if(!root)return;const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(n=>{if(/🪙\s*50,000\b/.test(n.nodeValue))n.nodeValue=n.nodeValue.replace(/🪙\s*50,000\b/g,'💳 Wallet linked above')})}
function schedule(){if(renderQueued)return;renderQueued=true;requestAnimationFrame(()=>{renderQueued=false;render();removeFakeGold()})}
loadWallet().then(()=>{render();new MutationObserver(schedule).observe(document.getElementById('root')||document.body,{childList:true,subtree:true});});
window.addEventListener('storage',schedule);
