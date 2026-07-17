import { WALLETS, CURRENCIES } from './currency.js';
function sync(){
 const id=localStorage.getItem('waluipediaUser')||localStorage.getItem('vigilanceTerminalUser');
 let box=document.getElementById('battlefieldWalletSync'); if(!box){box=document.createElement('div');box.id='battlefieldWalletSync';document.body.appendChild(box)}
 const w=id&&(WALLETS[id]||WALLETS[id.replace('_miser','')]);
 if(!id||!w){box.innerHTML='🔒 <b>Guest checkout</b><span>Log in through Waluipedia to load actual player holdings.</span><a href="battlefield.html#/login">Open player login →</a>';return}
 const holdings=Object.entries(w.currencies||{}).map(([k,v])=>`${CURRENCIES[k]?.icon||'🪙'} ${Number(v).toLocaleString()} ${CURRENCIES[k]?.name||k}`).join(' · ')||'Empty wallet';
 box.innerHTML=`💳 <b>${w.name||id} wallet connected</b><span>${holdings}</span><small>Read from the Battlefield wallet. Checkout will not invent XP or gold balances.</small>`;
}
window.addEventListener('storage',sync);window.addEventListener('load',sync);setInterval(sync,1000);
