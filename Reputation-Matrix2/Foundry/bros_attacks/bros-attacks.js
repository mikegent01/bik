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
      { actor: "A", title: "Lift Toad Lee", instruction: "Watch the bar. Press ↑ (or click) the instant the marker is in the green zone.", gesture: "up", icon: "⛏️" },
      { actor: "B", title: "Chop down", instruction: "Watch the bar. Press ↓ (or click) the instant the marker is in the green zone.", gesture: "down", icon: "🪓" },
      { actor: "B", title: "Chop down again", instruction: "One more — press ↓ (or click) when the marker hits the green zone.", gesture: "down", icon: "🪓" },
      { actor: "A", title: "Advance", instruction: "Watch the bar. Press → (or click) the instant the marker is in the green zone.", gesture: "right", icon: "👣" }
    ]
  },
  {
    id: "support_fire_bros_attack",
    name: "Support Fire Bros Attack",
    partnerA: "Green T",
    partnerB: "Remi",
    description: "Green T lines up the shot and calls the moment. Remi fires, then resets safely.",
    steps: [
      { actor: "A", title: "Steady the aim", instruction: "Hold Space (or hold the button). Release the instant the charge meter is in the green zone.", gesture: "aim", icon: "🎯" },
      { actor: "A", title: "Call the timing", instruction: "Watch the bar. Press → (or click) the instant the marker is in the green zone.", gesture: "right", icon: "⏱️" },
      { actor: "B", title: "Fire", instruction: "Wait for GO, then press Enter (or click) immediately. Too early or too late misses.", gesture: "tap", icon: "🔫" },
      { actor: "B", title: "Reset safely", instruction: "Watch the bar. Press ↓ (or click) the instant the marker is in the green zone.", gesture: "down", icon: "🛡️" }
    ]
  }
];

// Each gesture maps to a keyboard key (or two, for WASD players) and a
// button label. Input is always a single, unambiguous down/up/click event —
// the challenge lives in the TIMING, not in trying to detect a gesture.
const GESTURE_KEYS = {
  up:    ["ArrowUp", "KeyW"],
  down:  ["ArrowDown", "KeyS"],
  right: ["ArrowRight", "KeyD"],
  aim:   ["Space"],
  tap:   ["Enter"]
};
const GESTURE_LABEL = { up: "↑", down: "↓", right: "→", aim: "🎯 Aim", tap: "🔫 Fire" };
const GESTURE_HINT  = { up: "↑ or W", down: "↓ or S", right: "→ or D", aim: "Space", tap: "Enter" };
// Keys intercepted while a drill is open, so Foundry's own hotkeys
// (arrow keys pan/move the selected token) don't fire underneath it.
const BLOCK_KEYS = new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD","Space","Enter"]);

// Baseline challenge knobs. These ARE the Easy numbers — the drill as it was
// originally tuned. Medium and Hard are derived from them by DIFFICULTIES
// below, so there is only ever one set of numbers to tune.
const CHALLENGE = {
  up:    { type: "zone",     period: 1300, zoneWidth: 20 }, // ms per full sweep, % width of hit zone
  down:  { type: "zone",     period: 1300, zoneWidth: 20 },
  right: { type: "zone",     period: 1000, zoneWidth: 16 }, // faster + narrower = harder
  aim:   { type: "charge",   maxHold: 1700, zoneStart: 55, zoneEnd: 78 }, // % of maxHold
  tap:   { type: "reaction", minDelay: 700, maxDelay: 2200, window: 480 } // ms
};

// ---- Difficulty ------------------------------------------------------
// Three tiers. The drill gets tighter as you climb, and so does the price:
// harder tiers cost more Bros Energy and pay a larger bonus on the combined
// result. Easy is the drill exactly as it shipped — deliberately gentle, so
// the tier a table already knows stays the tier they already know.
//
// `energy` is spent by EACH named participant, from a personal maximum of 2.
// Hard therefore empties the pool and cannot be repeated until a short rest,
// which is the intended ceiling rather than an accident.
const DIFFICULTIES = {
  easy: {
    label: "Easy", icon: "🟢", energy: 1, bonus: 0, seconds: 10, mistakes: 3,
    zone: 1, speed: 1, react: 1, charge: 1,
    blurb: "The drill as written. Wide zones, ten seconds, three mistakes allowed."
  },
  medium: {
    label: "Medium", icon: "🟡", energy: 1, bonus: 2, seconds: 8, mistakes: 2,
    zone: 0.65, speed: 0.80, react: 0.70, charge: 0.72,
    blurb: "Narrower zones and a faster sweep for the same energy, and the pair rolls +2."
  },
  hard: {
    label: "Hard", icon: "🔴", energy: 2, bonus: 5, seconds: 6, mistakes: 1,
    zone: 0.45, speed: 0.62, react: 0.50, charge: 0.50,
    blurb: "One mistake ends it. Costs both points of Bros Energy — once per short rest — and rolls +5."
  }
};
const DEFAULT_DIFFICULTY = "easy";

const difficultyKey = () => {
  const key = game?.settings?.get?.(BROS_MODULE, "difficulty");
  return DIFFICULTIES[key] ? key : DEFAULT_DIFFICULTY;
};
const difficultyNow = () => DIFFICULTIES[difficultyKey()];

// Derive a tier's numbers from the Easy baseline. Widths shrink, periods and
// windows shorten. Clamped so the hardest tier stays physically possible.
function scaledChallenge(gesture, diff) {
  const base = CHALLENGE[gesture];
  if (base.type === "zone") {
    return { ...base,
      period: Math.round(base.period * diff.speed),
      zoneWidth: Math.max(5, +(base.zoneWidth * diff.zone).toFixed(1)) };
  }
  if (base.type === "charge") {
    const mid = (base.zoneStart + base.zoneEnd) / 2;
    const half = ((base.zoneEnd - base.zoneStart) / 2) * diff.charge;
    return { ...base,
      maxHold: Math.round(base.maxHold * diff.speed),
      zoneStart: Math.max(2, +(mid - half).toFixed(1)),
      zoneEnd: Math.min(98, +(mid + half).toFixed(1)) };
  }
  return { ...base, window: Math.max(180, Math.round(base.window * diff.react)) };
}

const energyOf = actor => Number(actor?.getFlag?.(BROS_MODULE, "energy") ?? 2);
async function spendEnergy(actors, cost = 1) {
  const lacking = actors.filter(a => energyOf(a) < cost);
  if (lacking.length) {
    ui.notifications.warn(`Bros Attack unavailable at this difficulty (costs ${cost} each). `
      + `${lacking.map(a => `${a.name} has ${energyOf(a)}`).join("; ")}.`);
    return false;
  }
  for (const actor of actors) await actor.setFlag(BROS_MODULE, "energy", energyOf(actor) - cost);
  return true;
}

// ---- Bros items -----------------------------------------------------
// Premade one-shots bought from the shop. The site writes the technique id
// into flags.waluipedia.brosAttack when the item is exported to Foundry, so
// an imported kit can be matched back to the technique it performs.
//
// The balance rule, and the reason this is not just a discount: using a bros
// item spends THE ITEM, not Bros Energy. That is what stops a stack of kits
// becoming a stack of free attacks — each one is destroyed. Once the pair has
// learned the technique it reverts to the normal economy (1 each from 2, back
// on a short rest), so a second copy buys another free use and nothing more.
const brosItemFor = (attack, actor) => actor?.items?.find(item =>
  item?.flags?.waluipedia?.brosAttack === attack.id && (item.system?.quantity ?? 1) > 0);

const findBrosItem = (attack, actors) => {
  for (const actor of actors) {
    const item = brosItemFor(attack, actor);
    if (item) return { actor, item };
  }
  return null;
};

const hasLearned = (attack, actors) =>
  actors.every(a => (a?.getFlag?.(BROS_MODULE, "learned") ?? []).includes(attack.id));

async function consumeBrosItem(attack, found, actors) {
  const { actor, item } = found;
  const quantity = Number(item.system?.quantity ?? 1);
  if (quantity > 1) await item.update({ "system.quantity": quantity - 1 });
  else await item.delete();

  // Teaching items promote the pair to the normal economy from here on.
  let taught = false;
  if (item.flags?.waluipedia?.teachesTechnique) {
    for (const target of actors) {
      const learned = target.getFlag(BROS_MODULE, "learned") ?? [];
      if (!learned.includes(attack.id)) {
        await target.setFlag(BROS_MODULE, "learned", [...learned, attack.id]);
        taught = true;
      }
    }
  }
  await ChatMessage.create({ content:
    `<div class="bros-clean-card"><h2>📦 ${item.name} used</h2>`
    + `<p>${actor.name} spends the item to perform <strong>${attack.name}</strong>. `
    + `No Bros Energy was spent — the item is consumed instead.</p>`
    + (taught ? `<p>Both partners have now <strong>learned ${attack.name}</strong>. `
        + `From here it costs 1 Bros Energy each, from a maximum of 2, back after a short rest.</p>` : "")
    + `</div>` });
  return true;
}

// Prefer the item when one is present, because that is the whole point of
// owning it. Falls back to energy so nothing that worked before stops working.
//
// An item covers the technique at ANY difficulty: it is a premade one-shot, so
// what the pair is buying is the performance, not the rehearsal. The harder
// tiers still pay their bonus, which is why a GM may want the drill run anyway.
async function payFor(attack, actors, cost = 1) {
  const found = findBrosItem(attack, actors);
  if (found) return consumeBrosItem(attack, found, actors);
  return spendEnergy(actors, cost);
}

// ---- GM item control -------------------------------------------------
// Bros items are GM-controlled stock: the GM sets how many exist and whether
// players can see them at all. `visible` is the player-facing switch; when it
// is off the Bros window hides the item row entirely for non-GMs, so a kit the
// GM has not handed out yet does not advertise itself.
const itemsVisibleToPlayers = () =>
  game?.settings?.get?.(BROS_MODULE, "itemsVisible") ?? true;
const canSeeItems = () => game?.user?.isGM || itemsVisibleToPlayers();

// Grant or remove kits from an actor. Positive adds, negative removes. Returns
// the resulting quantity, or null if there was nothing to work with.
async function setBrosItemCount(actor, attackId, quantity) {
  const attack = BROS_DEFINITIONS.find(a => a.id === attackId);
  if (!actor || !attack) { ui.notifications?.error("Unknown actor or technique."); return null; }
  const wanted = Math.max(0, Math.floor(Number(quantity) || 0));
  const existing = actor.items?.find(i => i?.flags?.waluipedia?.brosAttack === attackId);

  if (!existing) {
    if (!wanted) return 0;
    ui.notifications?.warn(`${actor.name} has no ${attack.name} kit to set a count on. `
      + `Import one from the shop export first, then set the quantity.`);
    return null;
  }
  if (!wanted) { await existing.delete(); return 0; }
  await existing.update({ "system.quantity": wanted });
  return wanted;
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
    const diff = difficultyNow();
    root.innerHTML = this.styles() + `
      <header class="bros-clean-header"><span class="bros-clean-star">🤝</span><div><h1>Bros Attacks</h1><p>Choose a defined technique. Follow the motion. Then resolve the normal rules.</p></div></header>
      <div class="bros-clean-target" data-target>🎯 <span>Select an obstacle or target token before pressing Use.</span><button data-refresh>↻</button></div>
      ${this.difficultyBar()}
      <div class="bros-clean-energy">⚡ Each named partner spends ${diff.energy} Bros Energy from 2. Energy returns after a short rest.${canSeeItems()?" 📦 If a partner is carrying a bros item for the technique, it is spent instead and no energy is used.":""}</div>
      <div class="bros-clean-list">${BROS_DEFINITIONS.map((a,i)=>this.card(a,i)).join("")}</div>`;
    this.wire(root);
    return root;
  }

  _replaceHTML(result, content) { content.replaceChildren(result); }

  styles() { return `<style>
    .bros-clean-root{font-family:Signika,system-ui,sans-serif;background:#111;color:#eee;padding:14px}.bros-clean-header{display:flex;gap:12px;align-items:center;border-bottom:2px solid #e4bb36;padding-bottom:12px}.bros-clean-star{font-size:34px}.bros-clean-header h1{color:#ffd84d;margin:0;font-size:21px}.bros-clean-header p{margin:3px 0 0;color:#aaa;font-size:12px}.bros-clean-target,.bros-clean-energy{padding:10px;margin-top:12px;border-radius:7px;font-size:12px}.bros-clean-target{display:flex;gap:8px;align-items:center;border:1px solid #633333;background:#210f0f;color:#ffb0a8}.bros-clean-target.has{border-color:#397b4b;background:#102516;color:#a7efb3}.bros-clean-target span{flex:1}.bros-clean-target button{background:#292929;color:#ddd;border:1px solid #555;border-radius:4px}.bros-clean-energy{border:1px solid #806b25;background:#241d0a;color:#ffe59a}.bros-clean-list{display:grid;gap:12px;margin-top:14px}.bros-clean-card{border:1px solid #3f3f3f;border-left:4px solid #d9a52e;border-radius:8px;padding:12px;background:#191919}.bros-clean-card h2{font-size:16px;color:#ffe36b;margin:0}.bros-clean-card p{font-size:12px;color:#bbb}.bros-clean-meta{display:flex;gap:7px;flex-wrap:wrap;color:#9fe6ae;font-size:11px}.bros-clean-use{float:right;background:#247b32;color:#fff;border:1px solid #54c765;border-radius:5px;padding:6px 12px;font-weight:bold}.bros-clean-use:disabled{opacity:.45}.bros-clean-overlay{position:fixed;inset:0;z-index:100000;background:#000c;display:grid;place-items:center}.bros-clean-drill{width:min(490px,94vw);background:#181818;border:2px solid #e0b83d;border-radius:12px;padding:18px;box-shadow:0 0 35px #000}.bros-clean-drill h2{color:#ffe06a;margin:0}.bros-clean-drill .turn{color:#9fe6ae;font-weight:bold;margin:10px 0}.bros-clean-pad{min-height:220px;position:relative;display:grid;place-items:center;overflow:hidden;border:2px dashed #75652c;border-radius:10px;background:linear-gradient(#182235 0 63%,#243720 63%);touch-action:none;user-select:none;padding:14px 0}.bros-clean-pad.fail{background:#4a1717;border-color:#ff746d}.bros-clean-pad.good{background:#174d26;border-color:#7cff99}.bros-clean-icon-sm{font-size:30px}.bros-track-wrap{display:flex;flex-direction:column;align-items:center;gap:10px;width:100%;padding:0 16px;box-sizing:border-box}.bros-track{position:relative;width:100%;height:26px;background:#20202a;border:1px solid #444;border-radius:6px}.bros-track-zone{position:absolute;top:0;bottom:0;background:#2f6b3a;opacity:.9;border-radius:4px}.bros-track-marker{position:absolute;top:-4px;bottom:-4px;width:4px;background:#ffe06a;box-shadow:0 0 8px #ffe06a;transform:translateX(-50%)}.bros-track-meter{position:absolute;top:0;bottom:0;left:0;background:linear-gradient(90deg,#3a6b2f,#8fd94a);width:0%;border-radius:4px}.bros-reaction-cue{font-size:26px;font-weight:bold;color:#889;transition:color .12s}.bros-reaction-cue.go{color:#7cff7c;text-shadow:0 0 12px #7cff7c}.bros-clean-action{font-size:20px;font-weight:bold;background:#2a3d20;color:#d8ffb0;border:2px solid #7cc94a;border-radius:10px;padding:10px 24px;cursor:pointer;box-shadow:0 0 18px #7cc94a55}.bros-clean-action:active{transform:scale(.96)}.bros-clean-action:disabled{opacity:.4;cursor:default}.bros-clean-hint{color:#9ab;font-size:11px;letter-spacing:.03em}.bros-clean-help{min-height:38px;color:#ddd;font-size:13px}.bros-clean-timer{text-align:right;color:#ffe06a;font-weight:bold;font-size:13px;margin:-5px 0 5px}.bros-clean-timer.low{color:#ff756d;animation:bros-pulse .35s infinite alternate}.bros-clean-buttons{display:flex;gap:8px;margin-top:10px}.bros-clean-buttons button{flex:1;padding:8px;border-radius:5px}.bros-clean-cancel{background:#351414;color:#ffb0b0;border:1px solid #743535}@keyframes bros-pulse{to{transform:scale(1.2);opacity:.5}}.bros-clean-diff{margin-top:12px;padding:10px;border:1px solid #3a4a63;background:#121822;border-radius:7px}.bros-diff-row{display:flex;gap:8px}.bros-diff-btn{flex:1;padding:7px 4px;border-radius:6px;border:1px solid #4a4a4a;background:#1d1d1d;color:#ccc;font-weight:bold;font-size:12px;cursor:pointer}.bros-diff-btn:hover:not(:disabled){border-color:#e0b83d;color:#ffe06a}.bros-diff-btn.on{background:#2b2410;border-color:#e0b83d;color:#ffe06a;box-shadow:0 0 10px #e0b83d55}.bros-diff-btn:disabled{opacity:.5;cursor:default}.bros-diff-note{margin:8px 0 0;font-size:11.5px;color:#9ab;line-height:1.45}.bros-diff-tag{font-size:12px;color:#9fe6ae;font-weight:normal}
  </style>`; }

  // The tier selector. Players only get the buttons when the GM has allowed
  // it; otherwise they see which tier is in force but cannot change it.
  difficultyBar() {
    const active=difficultyKey(), diff=DIFFICULTIES[active];
    const mayChange=game.user?.isGM || (game.settings?.get?.(BROS_MODULE,"allowPlayerDifficulty") ?? false);
    const buttons=Object.entries(DIFFICULTIES).map(([key,d])=>
      `<button class="bros-diff-btn${key===active?" on":""}" data-diff="${key}"${mayChange?"":" disabled"} title="${d.blurb}">`
      + `${d.icon} ${d.label}</button>`).join("");
    return `<div class="bros-clean-diff">
      <div class="bros-diff-row">${buttons}</div>
      <p class="bros-diff-note"><strong>${diff.icon} ${diff.label}.</strong> ${diff.blurb}
      ${mayChange?"":" The GM sets the tier for this world."}</p>
    </div>`;
  }

  card(a,index) {
    // Say which cost actually applies right now. A held item is spent instead
    // of energy, so showing the energy cost in that case would be a lie.
    const diff=difficultyNow();
    const actors=[game.actors?.getName(a.partnerA),game.actors?.getName(a.partnerB)].filter(Boolean);
    // Hidden items must not leak through the cost line either, or the label
    // gives away a kit the GM is deliberately keeping out of sight.
    const found=(actors.length&&canSeeItems())?findBrosItem(a,actors):null;
    const learned=actors.length===2&&hasLearned(a,actors);
    const cost=found
      ? `<span title="Using the item spends the item, not Bros Energy">📦 ${found.item.name}${(found.item.system?.quantity??1)>1?` ×${found.item.system.quantity}`:""} — spends the item, not energy</span>`
      : `<span>⚡ ${diff.energy} each</span><span>↻ short rest</span>`;
    const bonus=diff.bonus?`<span title="Difficulty bonus to the combined result">✨ +${diff.bonus}</span>`:"";
    const badge=learned&&!found?`<span title="Learned from an item; now on the normal economy">🎓 learned</span>`:"";
    return `<article class="bros-clean-card"><button class="bros-clean-use" data-use="${index}">Use</button><h2>${a.name}</h2><p>${a.description}</p><div class="bros-clean-meta"><span>👥 ${a.partnerA} + ${a.partnerB}</span>${cost}${bonus}${badge}</div></article>`;
  }

  wire(root) {
    root.querySelector("[data-refresh]").onclick=()=>this.refreshTarget(root);
    root.querySelectorAll("[data-use]").forEach(button=>button.onclick=()=>this.begin(BROS_DEFINITIONS[Number(button.dataset.use)]));
    root.querySelectorAll("[data-diff]").forEach(button=>button.onclick=async()=>{
      await game.settings.set(BROS_MODULE,"difficulty",button.dataset.diff);
      this.render();
    });
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
    const diff=difficultyNow();
    const overlay=document.createElement("div");overlay.className="bros-clean-overlay";overlay.innerHTML=`<div class="bros-clean-drill"><h2>🤝 ${attack.name} <small class="bros-diff-tag">${diff.icon} ${diff.label}</small></h2><div class="turn" data-turn></div><div class="bros-clean-timer" data-timer>Time: ${diff.seconds.toFixed(1)}s</div><div class="bros-clean-pad" data-pad></div><div class="bros-clean-help" data-help></div><div data-progress></div><div class="bros-clean-buttons"><button class="bros-clean-cancel">Exit drill</button></div></div>`;document.body.appendChild(overlay);
    const pad=overlay.querySelector("[data-pad]"),turn=overlay.querySelector("[data-turn]"),timer=overlay.querySelector("[data-timer]"),help=overlay.querySelector("[data-help]"),progress=overlay.querySelector("[data-progress]");
    let mode=null,index=0,finished=false,failures=0,timerId=null;
    // The currently-armed input handlers for whichever mini-challenge is
    // active right now. Each setup*() function below assigns these, and
    // its returned teardown function clears them again.
    let activeDown=null, activeUp=null, stepTeardown=()=>{};

    const current=()=>attack.steps[index];

    // ---- global input plumbing --------------------------------------
    const onKeyDown=(e)=>{
      if(BLOCK_KEYS.has(e.code)){e.preventDefault();e.stopPropagation();}
      if(e.repeat)return; // ignore OS key-repeat while held
      if(mode&&!finished&&activeDown)activeDown(e.code);
    };
    const onKeyUp=(e)=>{
      if(mode&&!finished&&activeUp)activeUp(e.code);
    };
    window.addEventListener("keydown",onKeyDown,true);
    window.addEventListener("keyup",onKeyUp,true);

    const cleanup=()=>{
      clearInterval(timerId);
      stepTeardown();
      window.removeEventListener("keydown",onKeyDown,true);
      window.removeEventListener("keyup",onKeyUp,true);
      overlay.remove();
    };

    // ---- per-challenge-type setup functions --------------------------
    // Each returns a teardown() that cancels its timers/animation frames.

    function setupZone(s,cfg){
      const zoneStart=8+Math.random()*(92-cfg.zoneWidth-8);
      const zoneEnd=zoneStart+cfg.zoneWidth;
      const wrap=document.createElement("div");wrap.className="bros-track-wrap";
      const icon=document.createElement("span");icon.className="bros-clean-icon-sm";icon.textContent=s.icon;
      const track=document.createElement("div");track.className="bros-track";
      const zoneEl=document.createElement("div");zoneEl.className="bros-track-zone";zoneEl.style.left=zoneStart+"%";zoneEl.style.width=(zoneEnd-zoneStart)+"%";
      const marker=document.createElement("div");marker.className="bros-track-marker";
      track.append(zoneEl,marker);
      const btn=document.createElement("button");btn.className="bros-clean-action";btn.type="button";btn.textContent=GESTURE_LABEL[s.gesture];
      const hint=document.createElement("span");hint.className="bros-clean-hint";hint.textContent=`press ${GESTURE_HINT[s.gesture]} when the marker is in the green`;
      wrap.append(icon,track,btn,hint);
      pad.append(wrap);

      const start=performance.now();
      const posAt=(now)=>{const t=((now-start)%cfg.period)/cfg.period;return t<0.5?t*2*100:(1-t)*2*100;};
      let raf=requestAnimationFrame(function tick(now){marker.style.left=posAt(now)+"%";raf=requestAnimationFrame(tick);});

      const attempt=()=>{const pos=posAt(performance.now());if(pos>=zoneStart&&pos<=zoneEnd)success();else fail();};
      activeDown=(code)=>{if(GESTURE_KEYS[s.gesture].includes(code))attempt();};
      activeUp=null;
      btn.onclick=attempt;

      return ()=>{cancelAnimationFrame(raf);activeDown=null;activeUp=null;};
    }

    function setupCharge(s,cfg){
      const wrap=document.createElement("div");wrap.className="bros-track-wrap";
      const icon=document.createElement("span");icon.className="bros-clean-icon-sm";icon.textContent=s.icon;
      const track=document.createElement("div");track.className="bros-track";
      const zoneEl=document.createElement("div");zoneEl.className="bros-track-zone";zoneEl.style.left=cfg.zoneStart+"%";zoneEl.style.width=(cfg.zoneEnd-cfg.zoneStart)+"%";
      const meter=document.createElement("div");meter.className="bros-track-meter";
      track.append(zoneEl,meter);
      const btn=document.createElement("button");btn.className="bros-clean-action";btn.type="button";btn.textContent=GESTURE_LABEL[s.gesture];
      const hint=document.createElement("span");hint.className="bros-clean-hint";hint.textContent=`hold ${GESTURE_HINT[s.gesture]}, release in the green`;
      wrap.append(icon,track,btn,hint);
      pad.append(wrap);

      let holding=false,holdStart=0,raf=null;
      const pctNow=()=>Math.min(100,((performance.now()-holdStart)/cfg.maxHold)*100);
      const grow=()=>{
        const pct=pctNow();meter.style.width=pct+"%";
        if(pct>=100){holding=false;cancelAnimationFrame(raf);fail();return;}
        raf=requestAnimationFrame(grow);
      };
      const startHold=()=>{if(holding||finished)return;holding=true;holdStart=performance.now();meter.style.width="0%";raf=requestAnimationFrame(grow);};
      const releaseHold=()=>{
        if(!holding)return;holding=false;cancelAnimationFrame(raf);
        const pct=pctNow();
        if(pct>=cfg.zoneStart&&pct<=cfg.zoneEnd)success();else fail();
      };

      activeDown=(code)=>{if(GESTURE_KEYS[s.gesture].includes(code))startHold();};
      activeUp=(code)=>{if(GESTURE_KEYS[s.gesture].includes(code))releaseHold();};
      btn.onmousedown=startHold;btn.onmouseup=releaseHold;btn.onmouseleave=()=>{if(holding)releaseHold();};

      return ()=>{if(raf)cancelAnimationFrame(raf);activeDown=null;activeUp=null;};
    }

    function setupReaction(s,cfg){
      const wrap=document.createElement("div");wrap.className="bros-track-wrap";
      const icon=document.createElement("span");icon.className="bros-clean-icon-sm";icon.textContent=s.icon;
      const cue=document.createElement("div");cue.className="bros-reaction-cue";cue.textContent="Wait…";
      const btn=document.createElement("button");btn.className="bros-clean-action";btn.type="button";btn.textContent=GESTURE_LABEL[s.gesture];btn.disabled=true;
      const hint=document.createElement("span");hint.className="bros-clean-hint";hint.textContent=`press ${GESTURE_HINT[s.gesture]} only after GO`;
      wrap.append(icon,cue,btn,hint);
      pad.append(wrap);

      let armed=false;
      const delay=cfg.minDelay+Math.random()*(cfg.maxDelay-cfg.minDelay);
      const armTimeout=setTimeout(()=>{
        armed=true;cue.textContent="GO!";cue.classList.add("go");btn.disabled=false;
        windowTimeout=setTimeout(()=>{if(armed){armed=false;fail();}},cfg.window);
      },delay);
      let windowTimeout=null;

      const attempt=()=>{
        if(!armed){fail();return;} // pressed too early
        armed=false;clearTimeout(windowTimeout);success();
      };
      activeDown=(code)=>{if(GESTURE_KEYS[s.gesture].includes(code))attempt();};
      activeUp=null;
      btn.onclick=attempt;

      return ()=>{clearTimeout(armTimeout);clearTimeout(windowTimeout);activeDown=null;activeUp=null;};
    }

    // ---- step flow -----------------------------------------------------
    const draw=()=>{
      stepTeardown();
      const s=current();
      pad.replaceChildren();
      pad.className="bros-clean-pad";
      turn.textContent=`${mode==="solo"?"One player":s.actor==="A"?a.name:b.name} — ${s.title}`;
      help.textContent=s.instruction;
      progress.textContent=`Step ${index+1} of ${attack.steps.length} · ${diff.icon} ${diff.label} · Mistakes remaining: ${diff.mistakes-failures}`;

      const cfg=scaledChallenge(s.gesture,diff);
      if(cfg.type==="zone")stepTeardown=setupZone(s,cfg);
      else if(cfg.type==="charge")stepTeardown=setupCharge(s,cfg);
      else stepTeardown=setupReaction(s,cfg);

      clearInterval(timerId);timer.classList.remove("low");timer.textContent=`Time: ${diff.seconds.toFixed(1)}s`;
      const started=performance.now();
      const warnAt=Math.min(3,diff.seconds/2);
      timerId=setInterval(()=>{const left=Math.max(0,diff.seconds-(performance.now()-started)/1000);timer.textContent=`Time: ${left.toFixed(1)}s`;timer.classList.toggle("low",left<=warnAt);if(left<=0){clearInterval(timerId);fail();}},100);
    };

    const fail=()=>{
      if(finished)return;
      clearInterval(timerId);failures++;pad.className="bros-clean-pad fail";
      if(failures>=diff.mistakes){turn.textContent="Drill failed";help.textContent=`${diff.mistakes===1?"One mistake":`${diff.mistakes} mistakes`} broke the rhythm at ${diff.label}. No rolls were made, no energy was spent, and no item was consumed.`;stepTeardown();setTimeout(cleanup,1300);}
      else{turn.textContent="Motion missed";help.textContent="Try the same step again.";setTimeout(draw,800);}
    };

    const success=()=>{
      if(finished)return;
      clearInterval(timerId);index++;
      if(index>=attack.steps.length){
        finished=true;stepTeardown();pad.className="bros-clean-pad good";turn.textContent="Maneuver complete";help.textContent="The drill succeeded. Paying the cost and resolving the normal rules…";
        setTimeout(async()=>{cleanup();if(await payFor(attack,[a,b],diff.energy))this.resolve(attack,a,b,target,diff);},700);
      } else draw();
    };

    const choose=(chosen)=>{mode=chosen;overlay.querySelector(".bros-clean-buttons").insertAdjacentHTML("afterbegin",`<span style="padding:8px;color:#9fe6ae">${chosen==="team"?"Team mode — pass the turn when prompted":"One player mode"}</span>`);draw();};
    overlay.querySelector(".bros-clean-buttons").insertAdjacentHTML("afterbegin",'<button data-team>👥 Team mode</button><button data-solo>🎮 One player</button>');
    overlay.querySelector("[data-team]").onclick=()=>choose("team");
    overlay.querySelector("[data-solo]").onclick=()=>choose("solo");
    overlay.querySelector(".bros-clean-cancel").onclick=cleanup;
  }

  async resolve(attack,a,b,target,diff=difficultyNow()){
    const roll=async(actor,label)=>{const r=await new Roll(`1d20 + @abilities.${actor===a?"str":"dex"}.mod`,actor.getRollData()).roll();await r.toMessage({speaker:ChatMessage.getSpeaker({actor}),flavor:`${attack.name}: ${label} (${diff.label})`});return r.total;};
    const ra=await roll(a,"Partner A");const rb=await roll(b,"Partner B");
    const total=ra+rb+diff.bonus;
    await ChatMessage.create({content:`<div class="bros-clean-card"><h2>🤝 ${attack.name} resolved <small>${diff.icon} ${diff.label}</small></h2>`
      +`<p>${a.name} rolled ${ra}. ${b.name} rolled ${rb}.`
      +`${diff.bonus?` Difficulty bonus +${diff.bonus}.`:""} Combined result: <strong>${total}</strong>.</p>`
      +`<p>No automatic damage was applied; the GM applies the normal attack, movement, or clearing rules for this technique.</p></div>`});
  }
}

// Settings must exist before anything reads them, so they register on init.
Hooks.once("init",()=>{
  game.settings.register(BROS_MODULE,"difficulty",{
    name:"Bros Attack difficulty",
    hint:"How tight the motion drill is, what it costs, and what it pays. Easy is the drill as originally written.",
    scope:"world", config:true, type:String, default:DEFAULT_DIFFICULTY,
    choices:Object.fromEntries(Object.entries(DIFFICULTIES)
      .map(([k,d])=>[k,`${d.icon} ${d.label} — ${d.energy} energy each, ${d.bonus?`+${d.bonus}`:"no"} bonus`]))
  });
  game.settings.register(BROS_MODULE,"itemsVisible",{
    name:"Players can see Bros items",
    hint:"Off hides bros item rows from players in the Bros window, so kits the GM has not handed out stay out of sight. The GM always sees them.",
    scope:"world", config:true, type:Boolean, default:true,
    onChange:()=>game.brosAttacks?.rendered&&game.brosAttacks.render()
  });
  game.settings.register(BROS_MODULE,"allowPlayerDifficulty",{
    name:"Players may pick the difficulty",
    hint:"Off means only the GM chooses the tier, and players run whatever is set.",
    scope:"world", config:true, type:Boolean, default:false,
    onChange:()=>game.brosAttacks?.rendered&&game.brosAttacks.render()
  });
});

Hooks.once("ready",()=>{
  game.brosAttacks=new BrosAttackWindow();
  // Small GM API, so a GM can adjust stock from a macro without hunting
  // through sheets: game.brosAttacks.setItemCount(actor, id, n)
  game.brosAttacks.setItemCount=setBrosItemCount;
  game.brosAttacks.difficulties=DIFFICULTIES;
  const button=document.createElement("button");
  button.id="waluipedia-bros-button";button.textContent="🤝 BROS";
  Object.assign(button.style,{position:"fixed",bottom:"14px",left:"200px",zIndex:9999,background:"#271b05",color:"#ffe06a",border:"2px solid #e0b83d",borderRadius:"7px",padding:"7px 15px",fontWeight:"bold",cursor:"pointer"});
  button.onclick=()=>game.brosAttacks.render(true);
  document.body.appendChild(button);
});

Hooks.on("dnd5e.restCompleted",async(actor,data)=>{if(data?.restType==="short"||data?.restType==="sr")await actor.setFlag(BROS_MODULE,"energy",2);});