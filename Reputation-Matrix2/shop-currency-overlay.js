import { CURRENCIES } from './currency.js';
let selected=localStorage.getItem('shopPaymentCurrency')||'wario_points';
const rate=()=>CURRENCIES[selected]?.base_value||1;
function install(){
 const root=document.getElementById('root'); if(!root||document.getElementById('warehouseCurrencyOverlay'))return;
 const box=document.createElement('div');box.id='warehouseCurrencyOverlay';box.innerHTML=`<label>💳 Pay with <select>${Object.values(CURRENCIES).map(c=>`<option value="${c.id}" ${c.id===selected?'selected':''}>${c.icon||'🪙'} ${c.name}</option>`).join('')}</select><small>Wario Warehouse payment currency · prices recalculate from the gold standard</small></label>`;document.body.appendChild(box);box.querySelector('select').onchange=e=>{selected=e.target.value;localStorage.setItem('shopPaymentCurrency',selected);update()};update();
}
function update(){const factor=1/rate();document.querySelectorAll('#root [class*="price"],#root [class*="Price"]').forEach(n=>{const base=Number(n.dataset.basePrice)||Number((n.textContent.match(/([0-9][0-9,]*)/)||[])[1]?.replace(/,/g,''));if(!base)return;n.dataset.currencyOverlay='1';n.dataset.basePrice=base;n.textContent=`${(base*factor).toFixed(2)} ${CURRENCIES[selected]?.name||selected}`});}
new MutationObserver(()=>install()).observe(document.documentElement,{childList:true,subtree:true});window.addEventListener('load',install);setTimeout(install,500);
