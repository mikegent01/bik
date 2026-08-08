/* Waluipedia Bros Attacks — clean static module, Foundry V13+ */
const BROS_MODULE = "bros_attacks";

const BROS_DEFINITIONS = [
  {
    id: "chop_bros_attack",
    name: "Chop Bros",
    partnerA: "Hjumpik Deldkur",
    partnerB: "Toad Lee",
    description: "Hjumpik lifts Toad Lee. Toad Lee chops the growth. The pair advances through the opening.",
    steps: [
      { actor: "A", title: "Lift Toad Lee", instruction: "Move upward across the field. Do not click.", gesture: "up", icon: "⛏️" },
      { actor: "B", title: "Chop down", instruction: "Move downward across the field. Do not click.", gesture: "down", icon: "🪓" },
      { actor: "B", title: "Chop down again", instruction: "Make another downward stroke. Do not use a countdown.", gesture: "down", icon: "🪓" },
      { actor: "A", title: "Advance", instruction: "Move right across the cleared corridor. Do not click.", gesture: "right", icon: "👣" }
    ]
  },
  {
    id: "support_fire_bros_attack",
    name: "Support Fire Bros Attack",
    partnerA: "Green T",
    partnerB: "Remi",
    description: "Green T lines up the shot and calls the moment. Remi fires, then resets safely.",
    steps: [
      { actor: "A", title: "Steady the aim", instruction: "Move into the target circle. Do not click.", gesture: "aim", icon: "🎯" },
      { actor: "A", title: "Call the timing", instruction: "Move right through the timing lane. Do not click.", gesture: "right", icon: "⏱️" },
      { actor: "B", title: "Fire", instruction: "Tap once to fire after the timing call.", gesture: "tap", icon: "🔫" },
      { actor: "B", title: "Reset safely", instruction: "Move downward away from the firing line. Do not click.", gesture: "down", icon: "🛡️" }
    ]
  }
];

const energyOf = actor => Number(actor?.getFlag?.(BROS_MODULE, "energy") ?? 2);
async function spendEnergy(actors) {
  const lacking = actors.filter(a => energyOf(a) < 1);
  if (lacking.length) {
    ui.notifications.warn(`Bros Attack unavailable. ${lacking.map(a => `${a.name} has no Bros Energy`).join("; ")}.`);
    return false;
  }
  for (const actor of actors) await actor.setFlag(BROS_MODULE, "energy", energyOf(actor) - 1);
  return true;
}

class BrosAttackWindow extends foundry.applications.api.ApplicationV2 {
  static DEFAULT_OPTIONS = {
    id: "waluipedia-bros-attacks",
    classes: ["waluipedia-bros-window"],
    window: { title: "⭐ Bros Attacks", resizable: true },
    position: { width: 560, height: "auto" }
  };

  async _renderHTML() {
    const root = document.createElement("section");
    root.className = "bros-clean-root";
    root.innerHTML = this.styles() + `
      <header class="bros-clean-header"><span class="bros-clean-star">🤝</span><div><h1>Bros Attacks</h1><p>Choose a defined technique. Follow the motion. Then resolve the normal rules.</p></div></header>
      <div class="bros-clean-target" data-target>🎯 <span>Select an obstacle or target token before pressing Use.</span><button data-refresh>↻</button></div>
      <div class="bros-clean-energy">⚡ Each named partner spends 1 Bros Energy from 2. Energy returns after a short rest.</div>
      <div class="bros-clean-list">${BROS_DEFINITIONS.map((a,i)=>this.card(a,i)).join("")}</div>`;
    this.wire(root);
    return root;
  }

  _replaceHTML(result, content) { content.replaceChildren(result); }

  styles() { return `<style>
    .bros-clean-root{font-family:Signika,system-ui,sans-serif;background:#111;color:#eee;padding:14px}.bros-clean-header{display:flex;gap:12px;align-items:center;border-bottom:2px solid #e4bb36;padding-bottom:12px}.bros-clean-star{font-size:34px}.bros-clean-header h1{color:#ffd84d;margin:0;font-size:21px}.bros-clean-header p{margin:3px 0 0;color:#aaa;font-size:12px}.bros-clean-target,.bros-clean-energy{padding:10px;margin-top:12px;border-radius:7px;font-size:12px}.bros-clean-target{display:flex;gap:8px;align-items:center;border:1px solid #633333;background:#210f0f;color:#ffb0a8}.bros-clean-target.has{border-color:#397b4b;background:#102516;color:#a7efb3}.bros-clean-target span{flex:1}.bros-clean-target button{background:#292929;color:#ddd;border:1px solid #555;border-radius:4px}.bros-clean-energy{border:1px solid #806b25;background:#241d0a;color:#ffe59a}.bros-clean-list{display:grid;gap:12px;margin-top:14px}.bros-clean-card{border:1px solid #3f3f3f;border-left:4px solid #d9a52e;border-radius:8px;padding:12px;background:#191919}.bros-clean-card h2{font-size:16px;color:#ffe36b;margin:0}.bros-clean-card p{font-size:12px;color:#bbb}.bros-clean-meta{display:flex;gap:7px;flex-wrap:wrap;color:#9fe6ae;font-size:11px}.bros-clean-use{float:right;background:#247b32;color:#fff;border:1px solid #54c765;border-radius:5px;padding:6px 12px;font-weight:bold}.bros-clean-use:disabled{opacity:.45}.bros-clean-overlay{position:fixed;inset:0;z-index:100000;background:#000c;display:grid;place-items:center}.bros-clean-drill{width:min(490px,94vw);background:#181818;border:2px solid #e0b83d;border-radius:12px;padding:18px;box-shadow:0 0 35px #000}.bros-clean-drill h2{color:#ffe06a;margin:0}.bros-clean-drill .turn{color:#9fe6ae;font-weight:bold;margin:10px 0}.bros-clean-pad{height:220px;position:relative;display:grid;place-items:center;overflow:hidden;border:2px dashed #75652c;border-radius:10px;background:linear-gradient(#182235 0 63%,#243720 63%);touch-action:none;user-select:none}.bros-clean-pad.fail{background:#4a1717;border-color:#ff746d}.bros-clean-pad.good{background:#174d26;border-color:#7cff99}.bros-clean-icon{font-size:48px;animation:bros-bob .7s infinite alternate}.bros-clean-arrow{position:absolute;font-size:48px;color:#ffe06a;animation:bros-pulse .7s infinite alternate}.bros-clean-help{min-height:38px;color:#ddd;font-size:13px}.bros-clean-timer{text-align:right;color:#ffe06a;font-weight:bold;font-size:13px;margin:-5px 0 5px}.bros-clean-timer.low{color:#ff756d;animation:bros-pulse .35s infinite alternate}.bros-clean-buttons{display:flex;gap:8px;margin-top:10px}.bros-clean-buttons button{flex:1;padding:8px;border-radius:5px}.bros-clean-cancel{background:#351414;color:#ffb0b0;border:1px solid #743535}@keyframes bros-pulse{to{transform:scale(1.2);opacity:.5}}@keyframes bros-bob{to{transform:translateY(-7px)}}
  </style>`; }

  card(a,index) { return `<article class="bros-clean-card"><button class="bros-clean-use" data-use="${index}">Use</button><h2>${a.name}</h2><p>${a.description}</p><div class="bros-clean-meta"><span>👥 ${a.partnerA} + ${a.partnerB}</span><span>⚡ 1 each</span><span>↻ short rest</span></div></article>`; }

  wire(root) {
    root.querySelector("[data-refresh]").onclick=()=>this.refreshTarget(root);
    root.querySelectorAll("[data-use]").forEach(button=>button.onclick=()=>this.begin(BROS_DEFINITIONS[Number(button.dataset.use)]));
    this.refreshTarget(root);
  }

  refreshTarget(root) {
    const token=canvas?.tokens?.controlled?.[0];const bar=root.querySelector("[data-target]");
    if(token){bar.classList.add("has");bar.querySelector("span").textContent=`${token.name} selected — press Use to begin.`;}else{bar.classList.remove("has");bar.querySelector("span").textContent="Select an obstacle or target token before pressing Use.";}
  }

  begin(attack) {
    const target=canvas?.tokens?.controlled?.[0];
    if(!target){ui.notifications.warn("Select the obstacle or target token first.");return;}
    const a=game.actors.getName(attack.partnerA),b=game.actors.getName(attack.partnerB);
    if(!a||!b){ui.notifications.error(`Could not find both assigned actors: ${attack.partnerA} and ${attack.partnerB}.`);return;}
    this.motion(attack,a,b,target);
  }

  motion(attack,a,b,target) {
    const overlay=document.createElement("div");overlay.className="bros-clean-overlay";overlay.innerHTML=`<div class="bros-clean-drill"><h2>🤝 ${attack.name}</h2><div class="turn" data-turn></div><div class="bros-clean-timer" data-timer>Time: 10.0s</div><div class="bros-clean-pad" data-pad></div><div class="bros-clean-help" data-help></div><div data-progress></div><div class="bros-clean-buttons"><button class="bros-clean-cancel">Exit drill</button></div></div>`;document.body.appendChild(overlay);
    const pad=overlay.querySelector("[data-pad]"),turn=overlay.querySelector("[data-turn]"),timer=overlay.querySelector("[data-timer]"),help=overlay.querySelector("[data-help]"),progress=overlay.querySelector("[data-progress]");let mode=null,index=0,last=null,distance=0,started=0,failures=0,finished=false,timerId=null;
    const cleanup=()=>{clearInterval(timerId);overlay.remove();}; const current=()=>attack.steps[index];
    const draw=()=>{const s=current();pad.replaceChildren();const icon=document.createElement("span");icon.className="bros-clean-icon";icon.textContent=s.icon;const arrow=document.createElement("span");arrow.className="bros-clean-arrow";arrow.textContent=s.gesture==="up"?"↑":s.gesture==="down"?"↓":s.gesture==="right"?"→":s.gesture==="aim"?"◎":"✦";pad.append(icon,arrow);turn.textContent=`${mode==="solo"?"One player":s.actor==="A"?a.name:b.name} — ${s.title}`;help.textContent=s.instruction;progress.textContent=`Step ${index+1} of ${attack.steps.length} · Mistakes remaining: ${2-failures}`;started=performance.now();distance=0;last=null;pad.className="bros-clean-pad";clearInterval(timerId);timer.classList.remove("low");timer.textContent="Time: 10.0s";timerId=setInterval(()=>{const left=Math.max(0,10-(performance.now()-started)/1000);timer.textContent=`Time: ${left.toFixed(1)}s`;timer.classList.toggle("low",left<=3);if(left<=0){clearInterval(timerId);fail();}},100);};
    const fail=()=>{if(finished)return;clearInterval(timerId);failures++;pad.className="bros-clean-pad fail";if(failures>=3){turn.textContent="Drill failed";help.textContent="Three mistakes broke the rhythm. No rolls were made and no energy was spent.";setTimeout(cleanup,1300);}else{turn.textContent="Motion missed";help.textContent="Try the same step again. Movement gestures do not need a mouse button.";setTimeout(draw,800);}};
    const success=()=>{if(finished)return;clearInterval(timerId);index++;if(index>=attack.steps.length){finished=true;pad.className="bros-clean-pad good";turn.textContent="Maneuver complete";help.textContent="The drill succeeded. Spending Bros Energy and resolving the normal rules…";setTimeout(async()=>{cleanup();if(await spendEnergy([a,b]))this.resolve(attack,a,b,target);},700);}else draw();};
    const movement=(e)=>{if(!mode||finished||!last)return;const dx=e.clientX-last.x,dy=e.clientY-last.y;last={x:e.clientX,y:e.clientY};distance+=Math.hypot(dx,dy);const g=current().gesture;if(distance<55)return;if(g==="up"&&dy<0)success();else if(g==="down"&&dy>0)success();else if(g==="right"&&dx>0)success();else if(g==="aim"&&distance>65)success();};
    pad.onpointermove=movement;pad.onpointerdown=e=>{if(!mode)return;if(current().gesture==="tap"){success();return;}last={x:e.clientX,y:e.clientY};};pad.onpointerup=()=>{last=null;};pad.onpointerleave=()=>{last=null;};
    const choose=(chosen)=>{mode=chosen;overlay.querySelector(".bros-clean-buttons").insertAdjacentHTML("afterbegin",`<span style="padding:8px;color:#9fe6ae">${chosen==="team"?"Team mode — pass the turn when prompted":"One player mode"}</span>`);draw();};
    overlay.querySelector(".bros-clean-buttons").insertAdjacentHTML("afterbegin",'<button data-team>👥 Team mode</button><button data-solo>🎮 One player</button>');overlay.querySelector("[data-team]").onclick=()=>choose("team");overlay.querySelector("[data-solo]").onclick=()=>choose("solo");overlay.querySelector(".bros-clean-cancel").onclick=cleanup;
  }

  async resolve(attack,a,b,target){
    const roll=async(actor,label)=>{const r=await new Roll(`1d20 + @abilities.${actor===a?"str":"dex"}.mod`,actor.getRollData()).roll();await r.toMessage({speaker:ChatMessage.getSpeaker({actor}),flavor:`${attack.name}: ${label}`});return r.total;};
    const ra=await roll(a,"Partner A");const rb=await roll(b,"Partner B");const total=ra+rb;await ChatMessage.create({content:`<div class="bros-clean-card"><h2>🤝 ${attack.name} resolved</h2><p>${a.name} rolled ${ra}. ${b.name} rolled ${rb}. Combined result: <strong>${total}</strong>.</p><p>No automatic damage was applied; the GM applies the normal attack, movement, or clearing rules for this technique.</p></div>`});
  }
}

Hooks.once("ready",()=>{game.brosAttacks=new BrosAttackWindow();const button=document.createElement("button");button.id="waluipedia-bros-button";button.textContent="🤝 BROS";Object.assign(button.style,{position:"fixed",bottom:"14px",left:"200px",zIndex:9999,background:"#271b05",color:"#ffe06a",border:"2px solid #e0b83d",borderRadius:"7px",padding:"7px 15px",fontWeight:"bold",cursor:"pointer"});button.onclick=()=>game.brosAttacks.render(true);document.body.appendChild(button);});
Hooks.on("dnd5e.restCompleted",async(actor,data)=>{if(data?.restType==="short"||data?.restType==="sr")await actor.setFlag(BROS_MODULE,"energy",2);});
