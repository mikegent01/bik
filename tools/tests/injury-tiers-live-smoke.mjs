/**
 * Injury table tiers — live smoke: boots the real index.html Injury Desk, the
 * standalone desk and the Casino consequence drum in jsdom and proves the
 * registry (injuryTables.json) is lazy-loaded, the tier chips/select swap the
 * table, rolled cards name the tier, and a character reference that carries a
 * `table` resolves on that table.
 *
 * Requires a static server on 8765:  python3 -m http.server 8765
 * Run: node tools/tests/injury-tiers-live-smoke.mjs
 */
import { JSDOM } from 'jsdom';
const base='http://127.0.0.1:8765/';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const bp=(B)=>(win)=>{ win.scrollTo=()=>{}; win.IntersectionObserver=class{observe(){}unobserve(){}disconnect(){}}; win.ResizeObserver=class{observe(){}unobserve(){}disconnect(){}}; win.fetch=async(url,opts)=>{ const abs=new URL(String(url),B).href; const res=await globalThis.fetch(abs,opts); return {ok:res.ok,status:res.status,json:()=>res.json(),text:()=>res.text()}; }; };
const vc=new (await import('jsdom')).VirtualConsole(); vc.on('jsdomError',()=>{});
const dom=await JSDOM.fromURL(base+'index.html#/injuries', {runScripts:'dangerously', resources:'usable', pretendToBeVisual:true, virtualConsole:vc, beforeParse:bp(base+'index.html')});
await sleep(9000);
const w=dom.window; w.console.error=()=>{};
let ok=0,bad=0; const t=(n,c)=>{ if(c){ok++;console.log('ok  -',n)} else {bad++;console.log('FAIL-',n)} };
for(let i=0;i<60;i++){ await sleep(500); if(w.eval('INJURY_TIERS') && w.document.querySelector('.inj-tiers')) break; }
const doc=w.document;
t('registry lazily loaded', !!w.eval('INJURY_TIERS') && Object.keys(w.eval('INJURY_TIERS').tables).length===3);
t('tier chips rendered on the desk', doc.querySelectorAll('.inj-tiers .pill').length===3);
t('default tier active', ((doc.querySelector('.inj-tiers .pill.active')||{}).textContent||'').includes('Permanent Injury Table'));
w.selectInjuryTier('venom_and_web_d100'); await sleep(50);
t('switching tier changes the table title', doc.querySelector('h2') && doc.body.textContent.includes('Venom & Web'));
t('injuryTable() now returns the venom rows', w.injuryTable().length===100 && w.injuryTable()[99].injuryType==="The Spider's Share");
w.rollInjury(); await sleep(50);
t('rolled card names the tier', !!doc.querySelector('.inj-cat') && doc.querySelector('.inj-cat').textContent.includes('Venom & Web'));
// character panel with a tier reference
const fake={id:'zz_test',injuries:[{table:'fire_and_blast_d100',roll:100,injuryId:'fire_and_blast_100',status:'active'},{table:'permanent_injury_d100',roll:59,injuryId:'injury_059',status:'active'}]};
const html=w.injuryPanel(fake);
t('injuryPanel resolves a tier reference', html.includes('Phoenix Step') && html.includes('Fire &amp; Blast'));
t('injuryPanel still resolves the default reference', html.includes('Sprained Thumb'));
t('dan_the_toad renders his row', w.injuryPanel(w.eval('DATA').characters.find(c=>c.id==='dan_the_toad')).includes('Sprained Thumb'));
// standalone desk
const U2=base+'Reputation-Matrix2/app/pages/standalone/injury-desk.html'; const d2=await JSDOM.fromURL(U2+'#table=fire_and_blast_d100',{runScripts:'dangerously',resources:'usable',pretendToBeVisual:true,virtualConsole:vc,beforeParse:bp(U2)});
for(let i=0;i<40;i++){ await sleep(250); if(d2.window.document.querySelectorAll('#tiers button').length) break; }
const dd=d2.window.document;
t('standalone desk shows three tier buttons', dd.querySelectorAll('#tiers button').length===3);
t('standalone desk honours #table= hash', dd.querySelector('h1').textContent.includes('Fire & Blast') && dd.querySelectorAll('#rows tr').length===100);
dd.getElementById('rollBtn').click(); await sleep(20);
dd.getElementById('character').value='dan_the_toad'; dd.getElementById('character').dispatchEvent(new d2.window.Event('change'));
dd.getElementById('assignBtn').click();
t('standalone assign command carries --table', dd.getElementById('assigned').textContent.includes('--table fire_and_blast_d100') && dd.getElementById('assigned').textContent.includes('fire_and_blast_'));
// casino
const U3=base+'Reputation-Matrix2/app/pages/crime-and-punishment/crime-and-punishment.html'; const d3=await JSDOM.fromURL(U3,{runScripts:'dangerously',resources:'usable',pretendToBeVisual:true,virtualConsole:vc,beforeParse:bp(U3)});
for(let i=0;i<40;i++){ await sleep(250); if(d3.window.document.querySelectorAll('#capTier option').length) break; }
const d3d=d3.window.document;
t('casino tier picker has three options', d3d.querySelectorAll('#capTier option').length===3);
const before=d3d.querySelectorAll('#capInjStrip .cap-row').length;
d3d.getElementById('capTier').value='venom_and_web_d100'; d3d.getElementById('capTier').dispatchEvent(new d3.window.Event('change'));
for(let i=0;i<40;i++){ await sleep(250); if(d3d.body.textContent.includes('Tier: Venom & Web')) break; }
t('casino swaps the drum to the chosen tier', d3d.body.textContent.includes('Tier: Venom & Web') && d3d.querySelectorAll('#capInjStrip .cap-row').length===before && d3d.querySelector('#capInjStrip').textContent.includes("Spider's Share"));
console.log(`${ok} passed, ${bad} failed`); process.exit(bad?1:0);
