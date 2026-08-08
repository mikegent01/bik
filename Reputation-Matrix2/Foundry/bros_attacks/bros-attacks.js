// ============================================
// BROS ATTACKS MODULE - V2 APPLICATION (V13+)
// ============================================

const MODULE_ID = "bros-attacks";
const STATIC_ATTACKS = [
  { name: "Chop Bros", actorA: "Hjumpik Deldkur", actorB: "Toad Lee", rollA: "1d20 + @abilities.str.mod", rollALabel: "Hjumpik: Strength to lift", rollB: "1d20 + @abilities.str.mod", rollBLabel: "Toad Lee: Strength to chop", damageAFormula: null, damageBFormula: null, threshold: 10, maxCombo: 1, resourceCost: 1, description: "Clear the obstacle together. Both partners spend 1 Bros Energy. No countdown: move by shared rhythm." },
  { name: "Support Fire Bros Attack", actorA: "Green T", actorB: "Remi", rollA: "1d20 + @abilities.wis.mod", rollALabel: "Green T: timing and aim", rollB: "1d20 + @prof + @abilities.dex.mod", rollBLabel: "Remi: attack roll", damageAFormula: null, damageBFormula: "1d6 + @abilities.dex.mod", threshold: 10, maxCombo: 1, resourceCost: 1, description: "Green T steadies the shot and Remi resolves the normal firearm attack. Both partners spend 1 Bros Energy." }
];

async function brosEnergy(actor) { return Number(actor.getFlag(MODULE_ID, "energy") ?? 2); }
async function spendBrosEnergy(actors, cost=1) {
  const missing=[]; for (const actor of actors) if (await brosEnergy(actor) < cost) missing.push(`${actor.name} has ${await brosEnergy(actor)} Bros Energy`);
  if (missing.length) { ui.notifications.warn(`Bros Attack unavailable: ${missing.join("; ")}. Each partner needs ${cost} energy.`); return false; }
  for (const actor of actors) await actor.setFlag(MODULE_ID, "energy", (await brosEnergy(actor))-cost);
  return true;
}
function registerBrosRest(){
  Hooks.on("dnd5e.restCompleted", async (actor, data) => { if (data?.restType === "short" || data?.restType === "sr") await actor.setFlag(MODULE_ID, "energy", 2); });
}


const ROLL_OPTIONS = {
  "Strength Check":     { formula: "1d20 + @abilities.str.mod", label: "Strength" },
  "Dexterity Check":    { formula: "1d20 + @abilities.dex.mod", label: "Dexterity" },
  "Constitution Check": { formula: "1d20 + @abilities.con.mod", label: "Constitution" },
  "Intelligence Check": { formula: "1d20 + @abilities.int.mod", label: "Intelligence" },
  "Wisdom Check":       { formula: "1d20 + @abilities.wis.mod", label: "Wisdom" },
  "Charisma Check":     { formula: "1d20 + @abilities.cha.mod", label: "Charisma" },
  "Acrobatics":         { formula: "1d20 + @skills.acr.total",  label: "Acrobatics" },
  "Athletics":          { formula: "1d20 + @skills.ath.total",  label: "Athletics" },
  "Deception":          { formula: "1d20 + @skills.dec.total",  label: "Deception" },
  "Intimidation":       { formula: "1d20 + @skills.itm.total",  label: "Intimidation" },
  "Perception":         { formula: "1d20 + @skills.prc.total",  label: "Perception" },
  "Performance":        { formula: "1d20 + @skills.prf.total",  label: "Performance" },
  "Persuasion":         { formula: "1d20 + @skills.per.total",  label: "Persuasion" },
  "Sleight of Hand":    { formula: "1d20 + @skills.slt.total",  label: "Sleight of Hand" },
  "Stealth":            { formula: "1d20 + @skills.ste.total",  label: "Stealth" },
  "Attack Roll (STR)":  { formula: "1d20 + @prof + @abilities.str.mod", label: "Attack (STR)" },
  "Attack Roll (DEX)":  { formula: "1d20 + @prof + @abilities.dex.mod", label: "Attack (DEX)" },
};

const DAMAGE_OPTIONS = {
  "None":    { formula: null,                       label: "No Damage" },
  "1d4":     { formula: "1d4",                      label: "1d4" },
  "1d6":     { formula: "1d6",                      label: "1d6" },
  "1d8":     { formula: "1d8",                      label: "1d8" },
  "1d10":    { formula: "1d10",                     label: "1d10" },
  "1d12":    { formula: "1d12",                     label: "1d12" },
  "2d6":     { formula: "2d6",                      label: "2d6" },
  "1d6+STR": { formula: "1d6 + @abilities.str.mod", label: "1d6 + STR" },
  "1d8+STR": { formula: "1d8 + @abilities.str.mod", label: "1d8 + STR" },
  "1d6+DEX": { formula: "1d6 + @abilities.dex.mod", label: "1d6 + DEX" },
  "1d8+DEX": { formula: "1d8 + @abilities.dex.mod", label: "1d8 + DEX" },
  "2d6+STR": { formula: "2d6 + @abilities.str.mod", label: "2d6 + STR" },
  "Custom":  { formula: "custom",                   label: "Custom Formula..." },
};

/* ─────────────────────────────────────────────
   GLOBAL DROP INTERCEPT
   Foundry swallows drops on dialog content. We
   intercept at the document level while the
   create dialog is open, then route to the
   correct slot based on which zone is hovered.
───────────────────────────────────────────── */
let _dropInterceptActive = false;
let _dropCallbacks = {};   // { A: fn, B: fn }
let _hoveredSlot   = null; // "A" | "B" | null

function _startDropIntercept(callbacks) {
  _dropCallbacks = callbacks;
  _dropInterceptActive = true;
  _hoveredSlot = null;
  document.addEventListener("dragover",  _globalDragOver,  true);
  document.addEventListener("dragleave", _globalDragLeave, true);
  document.addEventListener("drop",      _globalDrop,      true);
}

function _stopDropIntercept() {
  _dropInterceptActive = false;
  _dropCallbacks = {};
  _hoveredSlot = null;
  document.removeEventListener("dragover",  _globalDragOver,  true);
  document.removeEventListener("dragleave", _globalDragLeave, true);
  document.removeEventListener("drop",      _globalDrop,      true);
}

function _globalDragOver(e) {
  if (!_dropInterceptActive) return;
  const zone = e.target?.closest?.("[data-bros-drop]");
  if (zone) {
    e.preventDefault();
    e.stopPropagation();
    const slot = zone.dataset.brosDrop;
    if (_hoveredSlot !== slot) {
      // Clear old highlight
      document.querySelectorAll("[data-bros-drop]").forEach(z => z.classList.remove("bros-drag-over"));
      _hoveredSlot = slot;
      zone.classList.add("bros-drag-over");
    }
  }
}

function _globalDragLeave(e) {
  if (!_dropInterceptActive) return;
  const zone = e.target?.closest?.("[data-bros-drop]");
  if (zone && !zone.contains(e.relatedTarget)) {
    zone.classList.remove("bros-drag-over");
    if (_hoveredSlot === zone.dataset.brosDrop) _hoveredSlot = null;
  }
}

async function _globalDrop(e) {
  if (!_dropInterceptActive) return;
  const zone = e.target?.closest?.("[data-bros-drop]");
  if (!zone) return;

  e.preventDefault();
  e.stopPropagation();
  zone.classList.remove("bros-drag-over");

  const slot = zone.dataset.brosDrop; // "A" or "B"
  const cb   = _dropCallbacks[slot];
  if (!cb) return;

  let data;
  try { data = JSON.parse(e.dataTransfer.getData("text/plain")); }
  catch { ui.notifications.warn("Could not read drop data."); return; }

  if (data.type !== "Item") {
    ui.notifications.warn("Only items can be dropped here.");
    return;
  }

  let item;
  try { item = await fromUuid(data.uuid); }
  catch { ui.notifications.error("Could not load item."); return; }

  if (!item || item.type !== "weapon") {
    ui.notifications.warn(`"${item?.name ?? "That"}" is not a weapon.`);
    return;
  }

  cb(item);
}

/* ─────────────────────────────────────────────
   INIT / READY
───────────────────────────────────────────── */
Hooks.once("init", () => {
  console.log("bros-attacks | Init");
  game.settings.register(MODULE_ID, "attacks", {
    scope: "world", config: false, type: Array, default: []
  });
});

Hooks.once("ready", () => {
  _setupSocket();
  registerBrosRest();
  game.brosAttacks = new BrosAttacksApp();

  const btn = document.createElement("button");
  btn.id = "bros-open-btn";
  btn.textContent = "⭐ BROS";
  Object.assign(btn.style, {
    position: "fixed", bottom: "14px", left: "200px", zIndex: "9999",
    background: "linear-gradient(135deg,#1a0a0a,#3a0e0e)",
    color: "gold", border: "2px solid gold", borderRadius: "8px",
    padding: "7px 16px", cursor: "pointer", fontWeight: "bold",
    fontSize: "13px", boxShadow: "0 0 12px rgba(255,215,0,0.4)",
    letterSpacing: "1px"
  });
  btn.onmouseenter = () => btn.style.boxShadow = "0 0 22px rgba(255,215,0,0.8)";
  btn.onmouseleave = () => btn.style.boxShadow = "0 0 12px rgba(255,215,0,0.4)";
  btn.onclick = () => {
    if (game.brosAttacks.rendered) game.brosAttacks.bringToFront();
    else game.brosAttacks.render(true);
  };
  document.body.appendChild(btn);
});

/* ─────────────────────────────────────────────
   SOCKET
───────────────────────────────────────────── */
let _socketResolvers = {};

function _setupSocket() {
  game.socket.on(`module.${MODULE_ID}`, async (data) => {

    // Player receives roll request
    if (data.type === "requestRoll" && data.targetUserId === game.user.id) {
      const actor = game.actors.get(data.actorId);
      if (!actor) return;
      const result = await _showPlayerRollDialog(actor, data.formula, data.rollLabel, data.comboNum);
      game.socket.emit(`module.${MODULE_ID}`, {
        type: "rollResult",
        requestId: data.requestId,
        result: result ? { total: result.total, manual: result.manual ?? false } : null,
      });
    }

    // GM receives roll result
    if (data.type === "rollResult" && game.user.isGM) {
      const res = _socketResolvers[data.requestId];
      if (res) { res(data.result); delete _socketResolvers[data.requestId]; }
    }
  });
}

/* ─────────────────────────────────────────────
   PLAYER ROLL HELPERS
───────────────────────────────────────────── */
function getActorPlayer(actor) {
  if (!actor) return null;
  return game.users.find(u =>
    !u.isGM && u.active &&
    (actor.ownership[u.id] === CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER ||
     actor.ownership.default === CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER)
  ) ?? null;
}

function isCurrentUserActorOwner(actor) {
  if (!actor) return false;
  if (game.user.isGM) return true;
  return actor.ownership[game.user.id] === CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER ||
         actor.ownership.default === CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER;
}

async function requestPlayerRoll(actor, formula, rollLabel, comboNum) {
  if (isCurrentUserActorOwner(actor)) {
    return await _showPlayerRollDialog(actor, formula, rollLabel, comboNum);
  }
  const ownerPlayer = getActorPlayer(actor);
  if (game.user.isGM && ownerPlayer) {
    return await _requestRollViaSocket(actor, formula, rollLabel, comboNum, ownerPlayer);
  }
  // Fallback auto-roll
  const roll = await new Roll(formula, actor.getRollData()).roll();
  return { total: roll.total, roll };
}

async function _showPlayerRollDialog(actor, formula, rollLabel, comboNum) {
  return new Promise((resolve) => {
    let modDisplay = "";
    try {
      const rd   = actor.getRollData();
      const test = new Roll(formula.replace("1d20", "0"), rd);
      test.evaluate({ async: false });
      modDisplay = test.total >= 0 ? `(+${test.total})` : `(${test.total})`;
    } catch { /* fine */ }

    const uid = `bprd-${Date.now()}`;

    const d = new foundry.applications.api.DialogV2({
      window: { title: `🎲 ${actor.name} — Roll Needed!`, width: 360 },
      content: `
        <div id="${uid}" style="padding:8px;font-family:Signika,sans-serif;text-align:center;">
          <div style="display:inline-block;background:linear-gradient(135deg,#7a5a00,#c9950a);
               color:#000;font-weight:bold;font-size:11px;padding:3px 12px;
               border-radius:20px;letter-spacing:1px;margin-bottom:10px;">
            ⭐ COMBO HIT ${comboNum}
          </div>
          <div style="background:#111;border:1px solid #333;border-radius:8px;padding:12px;margin-bottom:10px;">
            <div style="font-size:18px;font-weight:bold;color:gold;margin-bottom:4px;">${actor.name}</div>
            <div style="font-size:13px;color:#aaa;margin-bottom:2px;">${rollLabel} ${modDisplay}</div>
            <div style="font-size:10px;color:#555;font-family:monospace;">${formula}</div>
          </div>
          <p style="font-size:12px;color:#ccc;margin:0 0 8px;">
            Use the button to auto-roll, or enter your result manually:
          </p>
          <button id="${uid}-auto" type="button"
            style="background:linear-gradient(135deg,#0e4a0e,#1a7a1a);color:#aaff99;
                   border:1px solid #1a7a1a;border-radius:6px;padding:7px 16px;
                   font-size:12px;font-weight:bold;cursor:pointer;width:100%;margin-bottom:8px;">
            🎲 Auto-Roll For Me
          </button>
          <div id="${uid}-result" style="display:none;font-size:22px;font-weight:bold;
               color:gold;margin-bottom:8px;"></div>
          <div style="background:#0d0d0d;border:1px solid #2a2a2a;border-radius:8px;padding:10px;">
            <label style="font-size:11px;color:#888;display:block;margin-bottom:6px;">
              Enter total result (including modifiers):
            </label>
            <input id="${uid}-input" type="number" min="1" max="40" placeholder="?"
              style="width:80px;text-align:center;font-size:22px;font-weight:bold;
                     background:#1a1a1a;border:2px solid #444;border-radius:6px;
                     color:#fff;padding:6px;display:block;margin:0 auto;"/>
          </div>
        </div>`,
      buttons: [
        {
          action: "confirm", label: "Confirm Roll", icon: "fas fa-check", default: true,
          callback: () => {
            const val = parseInt(document.getElementById(`${uid}-input`)?.value);
            if (isNaN(val) || val < 1) {
              ui.notifications.warn("Enter a valid roll total first!");
              return false;
            }
            resolve({ total: val, manual: true });
          }
        },
        {
          action: "cancel", label: "Cancel Combo", icon: "fas fa-times",
          callback: () => resolve(null)
        }
      ],
    });
    d.render(true);

    setTimeout(() => {
      const autoBtn   = document.getElementById(`${uid}-auto`);
      const resultDiv = document.getElementById(`${uid}-result`);
      const input     = document.getElementById(`${uid}-input`);
      if (!autoBtn) return;

      autoBtn.addEventListener("click", async () => {
        autoBtn.disabled = true;
        autoBtn.textContent = "Rolling...";
        try {
          const roll = await new Roll(formula, actor.getRollData()).roll();
          await roll.toMessage({
            speaker: ChatMessage.getSpeaker({ actor }),
            flavor: `[BROS Combo Hit ${comboNum}] ${rollLabel}`
          });
          if (resultDiv) { resultDiv.style.display = "block"; resultDiv.textContent = `🎲 ${roll.total}`; }
          if (input) input.value = roll.total;
          autoBtn.textContent = "✅ Rolled!";
        } catch (e) {
          ui.notifications.error(`Roll failed: ${e.message}`);
          autoBtn.disabled = false;
          autoBtn.textContent = "🎲 Auto-Roll For Me";
        }
      });
    }, 150);
  });
}

async function _requestRollViaSocket(actor, formula, rollLabel, comboNum, targetPlayer) {
  return new Promise((resolve) => {
    const requestId = `${Date.now()}-${Math.random()}`;

    const timeout = setTimeout(() => {
      if (_socketResolvers[requestId]) {
        delete _socketResolvers[requestId];
        ui.notifications.warn(`${actor.name}'s player timed out — auto-rolling.`);
        new Roll(formula, actor.getRollData()).roll().then(r => resolve({ total: r.total }));
      }
    }, 300_000);

    _socketResolvers[requestId] = (result) => {
      clearTimeout(timeout);
      resolve(result ? { total: result.total, manual: result.manual } : null);
    };

    game.socket.emit(`module.${MODULE_ID}`, {
      type: "requestRoll", requestId,
      actorId: actor.id, formula, rollLabel, comboNum,
      targetUserId: targetPlayer.id,
    });

    ui.notifications.info(`⏳ Waiting for ${targetPlayer.name} to roll for ${actor.name}...`);
  });
}

/* ─────────────────────────────────────────────
   GENERAL HELPERS
───────────────────────────────────────────── */
async function applyDamageToActor(actor, amount) {
  if (!actor || amount <= 0) return { oldHP: 0, newHP: 0, oldTemp: 0, newTemp: 0 };
  const hpData = actor.system?.attributes?.hp;
  if (!hpData) { ui.notifications.warn(`No HP for ${actor.name}`); return null; }

  const currentHP = hpData.value ?? 0;
  const tempHP    = hpData.temp  ?? 0;
  let remaining   = amount;
  let newTemp     = tempHP;

  if (tempHP > 0) {
    if (remaining <= tempHP) { newTemp = tempHP - remaining; remaining = 0; }
    else { remaining -= tempHP; newTemp = 0; }
  }
  const newHP = Math.max(0, currentHP - remaining);
  await actor.update({ "system.attributes.hp.value": newHP, "system.attributes.hp.temp": newTemp });
  return { oldHP: currentHP, newHP, oldTemp: tempHP, newTemp };
}

function getTargetActor() {
  const t = game.user.targets;
  if (!t?.size) return null;
  return t.first()?.actor ?? null;
}

function parseWeaponItem(item) {
  if (!item || item.type !== "weapon") return null;
  let dmgFormula = "1d4";
  let abilityMod = "@abilities.str.mod";
  let atkBonus   = "";

  try {
    const parts = item.system?.damage?.parts;
    if (parts?.length) dmgFormula = parts[0][0] ?? "1d4";
  } catch { /* ok */ }

  try {
    const props     = item.system?.properties;
    const isFinesse = props instanceof Set ? props.has("fin") : !!props?.fin;
    const isRanged  = item.system?.actionType === "rwak";
    if (isFinesse || isRanged) abilityMod = "@abilities.dex.mod";
  } catch { /* ok */ }

  try {
    const ab = item.system?.attackBonus;
    if (ab) atkBonus = ` + ${ab}`;
  } catch { /* ok */ }

  return {
    id:         item.id,
    name:       item.name,
    img:        item.img ?? "icons/svg/sword.svg",
    dmgFormula,
    atkFormula: `1d20 + @prof + ${abilityMod}${atkBonus}`,
    actorId:    item.actor?.id   ?? null,
    actorName:  item.actor?.name ?? null,
  };
}

/* ─────────────────────────────────────────────
   MAIN APP
───────────────────────────────────────────── */
const { ApplicationV2 } = foundry.applications.api;

class BrosAttacksApp extends ApplicationV2 {

  static DEFAULT_OPTIONS = {
    id: "bros-attacks-app",
    window: { title: "⭐ BROS Attacks", resizable: true },
    position: { width: 540, height: "auto" },
    classes: ["bros-attacks-window"],
  };

  /* ── Render ─────────────────────────────── */
  async _renderHTML(context, options) {
    const attacks = STATIC_ATTACKS;
    const isGM    = game.user.isGM;
    const el      = document.createElement("div");
    el.classList.add("bros-root");
    el.innerHTML  = this._styles() + this._buildHTML(attacks, isGM);
    this._wireListeners(el);
    return el;
  }

  _replaceHTML(result, content, options) {
    content.innerHTML = "";
    content.appendChild(result);
  }

  /* ── HTML ───────────────────────────────── */
  _buildHTML(attacks, isGM) {
    return `
      <div class="ba-header">
        <span class="ba-star">⭐</span>
        <div>
          <div class="ba-title">BROS Attacks</div>
          <div class="ba-sub">Two defined techniques — select the obstacle or target token, then press Use.</div>
        </div>
        <span class="ba-static-badge">STATIC RULES</span>
      </div>

      <div class="ba-body">
        <div class="ba-target-bar" id="ba-target-bar">
          <span>🎯</span>
          <span id="ba-target-name">No target selected</span>
          <button class="ba-icon-btn" id="ba-refresh-btn" title="Refresh target">↺</button>
        </div>

        ${attacks.length === 0
          ? `<div class="ba-empty">No BROS attacks yet.<br><small>These are the two defined campaign techniques.</small></div>`
          : `<div class="ba-list">${attacks.map((a, i) => this._cardHTML(a, i, isGM)).join("")}</div>`}

        <div class="ba-status" id="ba-status" style="display:none;">
          ⚡ <span id="ba-status-text">Running...</span>
        </div>
      </div>`;
  }

  /* ── Card ───────────────────────────────── */
  _cardHTML(a, i, isGM) {
    const wA = a.weaponAName ? `🗡 ${a.weaponAName}` : (a.damageA && a.damageA !== "None" ? `💥 ${a.damageA}` : "No Damage");
    const wB = a.weaponBName ? `🗡 ${a.weaponBName}` : (a.damageB && a.damageB !== "None" ? `💥 ${a.damageB}` : "No Damage");
    return `
      <div class="ba-card" data-index="${i}">
        <div class="ba-card-glow"></div>
        <div class="ba-card-head">
          <span class="ba-card-name">${a.name ?? "Unnamed"}</span><div class="ba-card-desc">${a.description ?? "Both partners spend 1 Bros Energy."}</div>
          <span class="ba-card-btns">
            <button class="ba-use-btn" data-index="${i}">▶ Use</button>
            
          </span>
        </div>
        <div class="ba-card-cols">
          <div class="ba-col ba-col-a">
            <div class="ba-pip ba-pip-a">A</div>
            <div class="ba-col-name">${a.actorA ?? "?"}</div>
            <div class="ba-chip ba-chip-roll">🎲 ${a.rollALabel ?? "?"}</div>
            <div class="ba-chip ba-chip-dmg">${wA}</div>
          </div>
          <div class="ba-divider"><div class="ba-div-line"></div>⭐<div class="ba-div-line"></div></div>
          <div class="ba-col ba-col-b">
            <div class="ba-pip ba-pip-b">B</div>
            <div class="ba-col-name">${a.actorB ?? "?"}</div>
            <div class="ba-chip ba-chip-roll-b">🎲 ${a.rollBLabel ?? "?"}</div>
            <div class="ba-chip ba-chip-dmg">${wB}</div>
          </div>
        </div>
        <div class="ba-card-foot">
          Cost: <strong>${a.resourceCost ?? 1} Bros Energy each</strong> &nbsp;|&nbsp;
          Pool: <strong>2 each</strong> &nbsp;|&nbsp; Refresh: <strong>very short rest</strong>
        </div>
      </div>`;
  }

  /* ── Wire Main ──────────────────────────── */
  _wireListeners(el) {
    el.querySelector("#ba-create-btn")?.addEventListener("click", () => this._openCreateDialog());
    el.querySelector("#ba-refresh-btn")?.addEventListener("click", () => this._refreshTarget(el));

    el.querySelectorAll(".ba-use-btn").forEach(btn =>
      btn.addEventListener("click", () => {
        const a = STATIC_ATTACKS[parseInt(btn.dataset.index)];
        if (a) this._startMotionChallenge(a);
      })
    );

    el.querySelectorAll(".ba-del-btn").forEach(btn =>
      btn.addEventListener("click", () => this._deleteAttack(parseInt(btn.dataset.index)))
    );

    this._refreshTarget(el);
  }

  _refreshTarget(el) {
    const bar    = el.querySelector("#ba-target-bar");
    const nameEl = el.querySelector("#ba-target-name");
    if (!bar || !nameEl) return;
    const t = getTargetActor();
    if (t) {
      const hp = t.system?.attributes?.hp;
      nameEl.innerHTML = `<strong>${t.name}</strong> — HP ${hp?.value ?? "?"}/${hp?.max ?? "?"}${hp?.temp ? ` (+${hp.temp} temp)` : ""}`;
      bar.className = "ba-target-bar ba-target-has";
    } else {
      nameEl.textContent = "No target selected";
      bar.className = "ba-target-bar ba-target-none";
    }
  }

  async _deleteAttack(index) {
    const attacks = game.settings.get(MODULE_ID, "attacks") ?? [];
    const ok = await foundry.applications.api.DialogV2.confirm({
      window: { title: "Delete Attack" },
      content: `<p>Delete <strong>${attacks[index]?.name ?? "this attack"}</strong>?</p>`,
    });
    if (!ok) return;
    attacks.splice(index, 1);
    await game.settings.set(MODULE_ID, "attacks", attacks);
    this.render();
  }

  /* ─────────────────────────────────────────
     CREATE DIALOG
  ───────────────────────────────────────── */
  _openCreateDialog() {
    const actors   = game.actors.contents;
    if (!actors.length) { ui.notifications.warn("No actors found."); return; }

    const actorOpts = actors.map(a => `<option value="${a.name}">${a.name}</option>`).join("");
    const rollOpts  = Object.entries(ROLL_OPTIONS).map(([k, v]) => `<option value="${k}">${v.label}</option>`).join("");
    const dmgOpts   = Object.entries(DAMAGE_OPTIONS).map(([k, v]) => `<option value="${k}">${v.label}</option>`).join("");

    // Per-slot weapon state (mutated by drop callbacks)
    const weapons = { A: null, B: null };

    const fid = `bcf-${Date.now()}`;

    foundry.applications.api.DialogV2.prompt({
      window: { title: "New BROS Attack", width: 480 },
      content: `
        <style>
          /* ── Reset Foundry noise inside this form ── */
          #${fid} * { box-sizing: border-box; }
          #${fid} { padding: 4px 2px; }

          /* ── Sections ── */
          #${fid} .bs { margin-bottom: 10px; background: #161616; border: 1px solid #2e2e2e; border-radius: 6px; padding: 10px 12px; }
          #${fid} .bs-title { font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; padding-bottom: 5px; border-bottom: 1px solid #2e2e2e; color: #777; }
          #${fid} .bs-a .bs-title { color: #5a9fd4; border-color: #5a9fd4; }
          #${fid} .bs-b .bs-title { color: #d45a9f; border-color: #d45a9f; }

          /* ── Field rows ── */
          #${fid} .br { display: table; width: 100%; margin-bottom: 7px; }
          #${fid} .br:last-child { margin-bottom: 0; }
          #${fid} .bl { display: table-cell; width: 120px; vertical-align: middle; font-size: 11px; color: #999; font-weight: bold; padding-right: 8px; }
          #${fid} .bv { display: table-cell; vertical-align: middle; }

          /* ── Inputs ── */
          #${fid} input[type=text],
          #${fid} input[type=number],
          #${fid} select {
            width: 100%; padding: 5px 7px; font-size: 12px;
            background: #0d0d0d; border: 1px solid #3a3a3a; border-radius: 4px;
            color: #e8e8e8; appearance: none;
          }
          #${fid} input:focus,
          #${fid} select:focus { border-color: gold; outline: none; }
          #${fid} .hidden-row { display: none; }
          #${fid} .hidden-row.show { display: table; width: 100%; margin-bottom: 7px; }

          /* ── Weapon drop zone ── */
          #${fid} .wdz {
            width: 100%; padding: 8px 10px; border-radius: 5px;
            border: 2px dashed #3a3a3a; background: #0a0a0a;
            font-size: 11px; color: #555; text-align: center;
            cursor: default; min-height: 40px;
            transition: border-color 0.15s, background 0.15s;
          }
          #${fid} .wdz.bros-drag-over { border-color: gold; background: #1a1600; color: #ccc; }
          #${fid} .wdz.wdz-filled { border-color: #3a6a3a; background: #0a150a; color: #88dd88; text-align: left; }
          #${fid} .wdz .wdz-clear {
            float: right; margin-left: 8px;
            background: #3a0a0a; border: 1px solid #6a1a1a; color: #ff9999;
            border-radius: 3px; padding: 1px 6px; font-size: 10px; cursor: pointer;
          }
          #${fid} .wdz .wdz-clear:hover { background: #6a1a1a; }
          #${fid} .wdz-hint { font-size: 10px; color: #444; margin-top: 3px; }

          /* ── Hint text ── */
          #${fid} .bhint { font-size: 10px; color: #555; padding-left: 128px; margin: -4px 0 7px; }
        </style>

        <div id="${fid}">
          <!-- Info -->
          <div class="bs">
            <div class="bs-title">⭐ Attack Info</div>
            <div class="br">
              <div class="bl">Name</div>
              <div class="bv"><input type="text" name="name" placeholder="e.g. Star Slam"/></div>
            </div>
            <div class="br">
              <div class="bl">Hit Threshold</div>
              <div class="bv"><input type="number" name="threshold" value="10" min="1" max="30"/></div>
            </div>
            <div class="bhint">Both actors must roll ≥ this to continue the combo.</div>
            <div class="br">
              <div class="bl">Max Hits</div>
              <div class="bv"><input type="number" name="maxCombo" value="20" min="1" max="100"/></div>
            </div>
          </div>

          <!-- Actor A -->
          <div class="bs bs-a">
            <div class="bs-title">🔵 Actor A</div>
            <div class="br">
              <div class="bl">Actor</div>
              <div class="bv"><select name="actorA" id="${fid}-actorA">${actorOpts}</select></div>
            </div>
            <div class="br">
              <div class="bl">Hit Roll</div>
              <div class="bv"><select name="rollA">${rollOpts}</select></div>
            </div>
            <div class="br">
              <div class="bl">Damage</div>
              <div class="bv"><select name="damageA" id="${fid}-dmgA">${dmgOpts}</select></div>
            </div>
            <div class="br hidden-row" id="${fid}-customA-row">
              <div class="bl">Custom Formula</div>
              <div class="bv"><input type="text" name="customDmgA" placeholder="e.g. 2d8+3"/></div>
            </div>
            <div class="br">
              <div class="bl">Weapon Drop</div>
              <div class="bv">
                <div class="wdz" id="${fid}-wdz-A" data-bros-drop="A">
                  🗡 Drag a weapon here from your item list
                </div>
                <div class="wdz-hint">Drag from Items sidebar or character sheet inventory</div>
              </div>
            </div>
            <input type="hidden" name="wA-id"        id="${fid}-wA-id"/>
            <input type="hidden" name="wA-name"      id="${fid}-wA-name"/>
            <input type="hidden" name="wA-dmg"       id="${fid}-wA-dmg"/>
            <input type="hidden" name="wA-atk"       id="${fid}-wA-atk"/>
            <input type="hidden" name="wA-actorName" id="${fid}-wA-actorName"/>
          </div>

          <!-- Actor B -->
          <div class="bs bs-b">
            <div class="bs-title">🩷 Actor B</div>
            <div class="br">
              <div class="bl">Actor</div>
              <div class="bv"><select name="actorB" id="${fid}-actorB">${actorOpts}</select></div>
            </div>
            <div class="br">
              <div class="bl">Hit Roll</div>
              <div class="bv"><select name="rollB">${rollOpts}</select></div>
            </div>
            <div class="br">
              <div class="bl">Damage</div>
              <div class="bv"><select name="damageB" id="${fid}-dmgB">${dmgOpts}</select></div>
            </div>
            <div class="br hidden-row" id="${fid}-customB-row">
              <div class="bl">Custom Formula</div>
              <div class="bv"><input type="text" name="customDmgB" placeholder="e.g. 2d8+3"/></div>
            </div>
            <div class="br">
              <div class="bl">Weapon Drop</div>
              <div class="bv">
                <div class="wdz" id="${fid}-wdz-B" data-bros-drop="B">
                  🗡 Drag a weapon here from your item list
                </div>
                <div class="wdz-hint">Drag from Items sidebar or character sheet inventory</div>
              </div>
            </div>
            <input type="hidden" name="wB-id"        id="${fid}-wB-id"/>
            <input type="hidden" name="wB-name"      id="${fid}-wB-name"/>
            <input type="hidden" name="wB-dmg"       id="${fid}-wB-dmg"/>
            <input type="hidden" name="wB-atk"       id="${fid}-wB-atk"/>
            <input type="hidden" name="wB-actorName" id="${fid}-wB-actorName"/>
          </div>
        </div>`,

      ok: {
        label: "Create",
        icon: "fas fa-check",
        callback: async () => {
          _stopDropIntercept();

          const root = document.getElementById(fid);
          if (!root) { ui.notifications.error("Form not found."); return; }

          // Read all inputs manually — more reliable than FormDataExtended with hidden inputs
          const g  = (name) => root.querySelector(`[name="${name}"]`)?.value?.trim() ?? "";
          const gi = (id)   => document.getElementById(id)?.value?.trim() ?? "";

          const name      = g("name");
          const actorA    = g("actorA");
          const actorB    = g("actorB");
          const rollAKey  = g("rollA");
          const rollBKey  = g("rollB");
          const damageAKey = g("damageA");
          const damageBKey = g("damageB");
          const customDmgA = g("customDmgA");
          const customDmgB = g("customDmgB");
          const threshold  = parseInt(g("threshold")) || 10;
          const maxCombo   = parseInt(g("maxCombo"))  || 20;

          if (!name) { ui.notifications.warn("Enter an attack name."); return; }

          // Weapon slot A
          const wAId   = gi(`${fid}-wA-id`);
          const wAName = gi(`${fid}-wA-name`);
          const wADmg  = gi(`${fid}-wA-dmg`);
          const wAAtk  = gi(`${fid}-wA-atk`);

          // Weapon slot B
          const wBId   = gi(`${fid}-wB-id`);
          const wBName = gi(`${fid}-wB-name`);
          const wBDmg  = gi(`${fid}-wB-dmg`);
          const wBAtk  = gi(`${fid}-wB-atk`);

          // Resolve A
          let dmgAFormula = null, dmgALabel = null, weaponAName = null;
          let rollAFormula = ROLL_OPTIONS[rollAKey]?.formula ?? "1d20";
          let rollALabel   = ROLL_OPTIONS[rollAKey]?.label   ?? rollAKey;

          if (wAId && wADmg) {
            dmgAFormula  = wADmg;
            dmgALabel    = wAName;
            weaponAName  = wAName;
            rollAFormula = wAAtk || rollAFormula;
            rollALabel   = `${wAName} Atk`;
          } else if (damageAKey === "Custom") {
            dmgAFormula = customDmgA || null;
            dmgALabel   = customDmgA || null;
          } else if (damageAKey !== "None") {
            dmgAFormula = DAMAGE_OPTIONS[damageAKey]?.formula ?? null;
            dmgALabel   = DAMAGE_OPTIONS[damageAKey]?.label   ?? null;
          }

          // Resolve B
          let dmgBFormula = null, dmgBLabel = null, weaponBName = null;
          let rollBFormula = ROLL_OPTIONS[rollBKey]?.formula ?? "1d20";
          let rollBLabel   = ROLL_OPTIONS[rollBKey]?.label   ?? rollBKey;

          if (wBId && wBDmg) {
            dmgBFormula  = wBDmg;
            dmgBLabel    = wBName;
            weaponBName  = wBName;
            rollBFormula = wBAtk || rollBFormula;
            rollBLabel   = `${wBName} Atk`;
          } else if (damageBKey === "Custom") {
            dmgBFormula = customDmgB || null;
            dmgBLabel   = customDmgB || null;
          } else if (damageBKey !== "None") {
            dmgBFormula = DAMAGE_OPTIONS[damageBKey]?.formula ?? null;
            dmgBLabel   = DAMAGE_OPTIONS[damageBKey]?.label   ?? null;
          }

          const attacks = game.settings.get(MODULE_ID, "attacks") ?? [];
          attacks.push({
            name, actorA, actorB,
            rollA: rollAFormula, rollALabel,
            rollB: rollBFormula, rollBLabel,
            damageA: dmgALabel,   damageAFormula: dmgAFormula,
            damageB: dmgBLabel,   damageBFormula: dmgBFormula,
            weaponAName, weaponBName,
            threshold, maxCombo,
          });

          await game.settings.set(MODULE_ID, "attacks", attacks);
          ui.notifications.info(`✅ "${name}" created!`);
          this.render();
        }
      },
    });

    /* ── Wire form after dialog renders ── */
    setTimeout(() => {
      const root = document.getElementById(fid);
      if (!root) return;

      // Custom show toggle
      const dmgA     = root.querySelector(`#${fid}-dmgA`);
      const dmgB     = root.querySelector(`#${fid}-dmgB`);
      const customAR = root.querySelector(`#${fid}-customA-row`);
      const customBR = root.querySelector(`#${fid}-customB-row`);

      dmgA?.addEventListener("change", () =>
        customAR?.classList.toggle("show", dmgA.value === "Custom")
      );
      dmgB?.addEventListener("change", () =>
        customBR?.classList.toggle("show", dmgB.value === "Custom")
      );

      // Start global drop intercept and register callbacks per slot
      _startDropIntercept({
        A: (item) => this._applyWeaponToSlot(fid, "A", item, root),
        B: (item) => this._applyWeaponToSlot(fid, "B", item, root),
      });

    }, 180);

    // Stop intercept if dialog is closed without creating
    // We'll hook into the dialog's close via a MutationObserver on the dialog element
    setTimeout(() => {
      const dialogEl = document.querySelector(".application.dialog-v2");
      if (!dialogEl) return;
      const obs = new MutationObserver(() => {
        if (!document.getElementById(fid)) {
          _stopDropIntercept();
          obs.disconnect();
        }
      });
      obs.observe(document.body, { childList: true, subtree: false });
    }, 300);
  }

  /* ── Apply dropped weapon to a slot ─────── */
  _applyWeaponToSlot(fid, slot, item, root) {
    const w = parseWeaponItem(item);
    if (!w) return;

    // Fill hidden fields
    document.getElementById(`${fid}-w${slot}-id`).value        = w.id        ?? "";
    document.getElementById(`${fid}-w${slot}-name`).value      = w.name      ?? "";
    document.getElementById(`${fid}-w${slot}-dmg`).value       = w.dmgFormula ?? "";
    document.getElementById(`${fid}-w${slot}-atk`).value       = w.atkFormula ?? "";
    document.getElementById(`${fid}-w${slot}-actorName`).value = w.actorName  ?? "";

    // Update zone visual
    const zone = document.getElementById(`${fid}-wdz-${slot}`);
    if (zone) {
      zone.className = "wdz wdz-filled";
      zone.innerHTML = `
        <button class="wdz-clear" type="button">✕</button>
        <img src="${w.img}" style="width:18px;height:18px;vertical-align:middle;border-radius:2px;margin-right:6px;">
        <strong>${w.name}</strong>
        <span style="color:#666;font-size:10px;margin-left:6px;">${w.dmgFormula}</span>
        ${w.actorName ? `<span style="color:#555;font-size:10px;"> · ${w.actorName}</span>` : ""}
      `;
      zone.querySelector(".wdz-clear").addEventListener("click", () =>
        this._clearWeaponSlot(fid, slot)
      );
    }

    // Auto-select actor if weapon comes from one
    if (w.actorName) {
      const sel = document.getElementById(`${fid}-actor${slot}`);
      if (sel) {
        const match = Array.from(sel.options).find(o => o.value === w.actorName);
        if (match) sel.value = w.actorName;
      }
    }

    ui.notifications.info(`Weapon "${w.name}" set for slot ${slot}.`);
  }

  _clearWeaponSlot(fid, slot) {
    ["id","name","dmg","atk","actorName"].forEach(k =>
      { const el = document.getElementById(`${fid}-w${slot}-${k}`); if (el) el.value = ""; }
    );
    const zone = document.getElementById(`${fid}-wdz-${slot}`);
    if (zone) {
      zone.className = "wdz";
      zone.innerHTML = `🗡 Drag a weapon here from your item list`;
    }
  }

  /* ─────────────────────────────────────────
     MOTION CHALLENGE
     Pointer events work with mouse, touch screens, and phones.
  ───────────────────────────────────────── */
  _startMotionChallenge(attack) {
    const old=document.getElementById("bros-motion-overlay"); if(old) old.remove();
    const chop=attack.name==="Chop Bros";
    const steps=chop?[
      {who:attack.actorA,kind:"lift",title:"LIFT TOAD LEE",help:"Move your cursor upward without clicking. Hjumpik raises Toad Lee into cutting range.",icon:"⛏️",need:80},
      {who:attack.actorB,kind:"chop",title:"CHOP DOWN",help:"Move down through the vine, then back up. Do not hold the mouse button.",icon:"🪓",need:55},
      {who:attack.actorB,kind:"chop",title:"CHOP DOWN AGAIN",help:"Make a second clean vertical axe stroke. Keep the rhythm; do not use a countdown.",icon:"🪓",need:55},
      {who:attack.actorA,kind:"advance",title:"ADVANCE TOGETHER",help:"Move right across the cleared corridor. Hjumpik carries the team forward.",icon:"👣",need:90}
    ]:[
      {who:attack.actorA,kind:"aim",title:"STEADY THE AIM",help:"Move the reticle onto the target circle. Green T lines up the shot.",icon:"🎯",need:65},
      {who:attack.actorA,kind:"timing",title:"CALL THE TIMING",help:"Move right through the timing lane. Stop inside the green zone.",icon:"⏱️",need:70},
      {who:attack.actorB,kind:"fire",title:"FIRE",help:"Tap the target once. Remi takes the shot only after the call.",icon:"🔫",need:0},
      {who:attack.actorB,kind:"recover",title:"RESET SAFELY",help:"Move down and away from the firing line. Check the room before the next shot.",icon:"🛡️",need:60}
    ];
    const overlay=document.createElement("div");overlay.id="bros-motion-overlay";overlay.innerHTML=`<div class="bros-motion-window"><h2>🤝 ${attack.name}: Field Drill</h2><p class="bros-motion-help">This is the actual maneuver, not a generic button test. Team mode passes the motion to the named partner after every successful step.</p><div class="bros-motion-modes"><button data-mode="team">👥 Team mode</button><button data-mode="solo">🎮 One player</button></div><div class="bros-motion-status"></div><div class="bros-motion-scene"><div class="bros-motion-actor">${chop?"⛏️ + 🐸":"🎯 + 🔫"}</div><div class="bros-motion-pad"><span>Choose a mode</span></div></div><div class="bros-motion-instruction"></div><button class="bros-motion-cancel">Cancel</button></div>`;
    document.body.appendChild(overlay);
    const style=document.createElement("style");style.id="bros-motion-style";style.textContent=`#bros-motion-overlay{position:fixed;inset:0;z-index:100000;background:#000b;display:grid;place-items:center;font-family:Signika,system-ui,sans-serif} .bros-motion-window{width:min(480px,94vw);background:#171717;color:#eee;border:2px solid gold;border-radius:12px;padding:20px;box-shadow:0 0 35px #000}.bros-motion-window h2{color:gold;margin:0 0 8px}.bros-motion-help{color:#bbb;font-size:13px}.bros-motion-modes{display:flex;gap:10px}.bros-motion-modes button{flex:1;padding:10px;background:#35230a;color:#ffe38a;border:1px solid #b88b22;border-radius:7px;font-weight:bold;cursor:pointer}.bros-motion-status{text-align:center;color:#9fe6ae;margin:12px 0;min-height:20px;font-weight:bold}.bros-motion-scene{position:relative;height:210px;overflow:hidden;border:1px solid #584d2b;border-radius:12px;background:linear-gradient(#192337 0 64%,#25331d 64%);}.bros-motion-actor{position:absolute;left:14px;top:12px;font-size:31px;z-index:2;filter:drop-shadow(0 0 4px gold)}.bros-motion-pad{position:absolute;inset:0;display:grid;place-items:center;color:#aaa;font-size:18px;touch-action:none;user-select:none;cursor:crosshair}.bros-motion-pad.active{color:#fff}.bros-motion-pad.success{background:#155326aa}.bros-motion-pad.fail{background:#571515aa}.bros-motion-pad .motion-object{position:absolute;font-size:39px;filter:drop-shadow(0 0 7px #fff);transition:transform .15s}.motion-arrow{position:absolute;font-size:42px;color:#ffe06b;animation:motion-pulse .8s infinite alternate}.motion-target{width:78px;height:78px;border:3px dashed #ffdf63;border-radius:50%;display:grid;place-items:center;color:#ffdf63;animation:motion-spin 3s linear infinite}.motion-lane{position:absolute;right:30px;top:28px;width:80px;height:154px;border:2px solid #61e58c;border-radius:8px;background:#61e58c22}.motion-lane:after{content:'STOP';position:absolute;bottom:4px;left:18px;color:#61e58c;font-size:10px}.bros-motion-instruction{min-height:42px;padding:9px 2px;color:#ddd;font-size:13px}.bros-motion-cancel{margin-top:8px;width:100%;padding:8px;background:#321313;color:#ffb0b0;border:1px solid #773333;border-radius:6px;cursor:pointer}@keyframes motion-pulse{to{transform:scale(1.18);opacity:.55}}@keyframes motion-spin{to{transform:rotate(360deg)}}`;
    document.head.appendChild(style);
    const status=overlay.querySelector(".bros-motion-status"),pad=overlay.querySelector(".bros-motion-pad"),instruction=overlay.querySelector(".bros-motion-instruction");let mode=null,step=0,score=0,start=0,last=null,stroke=0,down=false;
    const who=()=>mode==="solo"?"One player":steps[step].who; const resetPad=()=>{pad.className="bros-motion-pad active";pad.innerHTML="";stroke=0;last=null;down=false;const st=steps[step];if(st.kind==="lift")pad.innerHTML='<span class="motion-arrow">↑</span><span class="motion-object">🐸</span>';if(st.kind==="chop")pad.innerHTML='<span class="motion-arrow">↕</span><span class="motion-object">🌿</span>';if(st.kind==="advance")pad.innerHTML='<span class="motion-arrow">→</span><span class="motion-object">👥</span>';if(st.kind==="aim")pad.innerHTML='<span class="motion-target">🎯</span>';if(st.kind==="timing")pad.innerHTML='<span class="motion-lane"></span><span class="motion-arrow">→</span>';if(st.kind==="fire")pad.innerHTML='<span class="motion-target">🎯</span><span class="motion-object">🔫</span>';if(st.kind==="recover")pad.innerHTML='<span class="motion-arrow">↓</span><span class="motion-object">🛡️</span>';};
    const prompt=()=>{if(step>=steps.length){status.textContent=`✅ Maneuver complete: ${score}/${steps.length}. Resolving the normal rules…`;pad.className="bros-motion-pad success";setTimeout(()=>{overlay.remove();style.remove();this._executeAttack(attack);},600);return;}const st=steps[step];status.textContent=`${who()} — step ${step+1} of ${steps.length}: ${st.title}`;instruction.textContent=st.help;resetPad();start=performance.now();};
    const success=()=>{if(performance.now()-start>9000){fail();return;}score++;step++;prompt();};const fail=()=>{pad.className="bros-motion-pad fail";status.textContent="❌ Motion missed. The maneuver breaks before the attack rolls.";instruction.textContent="Try again from the beginning. Move without holding the mouse button unless the instruction says tap.";setTimeout(()=>{step=0;score=0;mode=null;promptMode();},1000);};const promptMode=()=>{status.textContent="Choose Team mode or One player.";instruction.textContent="Team mode hands each step to the named partner. One player completes every step.";pad.className="bros-motion-pad";pad.innerHTML="Choose a mode";};
    pad.addEventListener("pointermove",e=>{if(!mode||!last)return;const dx=e.clientX-last.x,dy=e.clientY-last.y;last={x:e.clientX,y:e.clientY};stroke+=Math.hypot(dx,dy);const k=steps[step].kind;if(k==="lift"&&dy<-3&&stroke>=steps[step].need)success();else if(k==="chop"&&Math.abs(dy)>4&&stroke>=steps[step].need)success();else if(k==="advance"&&dx>3&&stroke>=steps[step].need)success();else if(k==="aim"&&pad.querySelector(".motion-target")&&stroke>=steps[step].need)success();else if(k==="timing"&&dx>3&&stroke>=steps[step].need)success();else if(k==="recover"&&dy>3&&stroke>=steps[step].need)success();});
    pad.addEventListener("pointerdown",e=>{if(!mode)return;down=true;last={x:e.clientX,y:e.clientY};if(steps[step].kind==="fire")success();});pad.addEventListener("pointerup",()=>{down=false;last=null;});pad.addEventListener("pointerleave",()=>{last=null;});
    overlay.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>{mode=b.dataset.mode;step=0;score=0;prompt();});overlay.querySelector(".bros-motion-cancel").onclick=()=>{overlay.remove();style.remove();};promptMode();
  }

  /* ─────────────────────────────────────────
     EXECUTE ATTACK
  ───────────────────────────────────────── */
  async _executeAttack(attack) {
    const actorA = game.actors.getName(attack.actorA);
    const actorB = game.actors.getName(attack.actorB);
    if (!actorA) { ui.notifications.error(`Actor not found: "${attack.actorA}"`); return; }
    if (!actorB) { ui.notifications.error(`Actor not found: "${attack.actorB}"`); return; }

    const target = getTargetActor();
    if (!target) { ui.notifications.error("No target! Select a token first."); return; }
    if (!target.system?.attributes?.hp) { ui.notifications.error(`No HP on "${target.name}".`); return; }

    const energyReady = await spendBrosEnergy([actorA, actorB], attack.resourceCost ?? 1);
    if (!energyReady) return;

    const aIsPlayer = !!getActorPlayer(actorA);
    const bIsPlayer = !!getActorPlayer(actorB);
    const threshold = attack.threshold ?? 10;
    const maxCombo  = attack.maxCombo  ?? 20;
    let combo = 0, totalDamage = 0;

    const root      = this.element;
    const statusBar = root?.querySelector("#ba-status");
    const statusTxt = root?.querySelector("#ba-status-text");
    const setStatus = (t) => { if (statusTxt) statusTxt.textContent = t; };
    if (statusBar) statusBar.style.display = "block";

    await ChatMessage.create({ content: this._msgOpening(attack, actorA, actorB, target, aIsPlayer, bIsPlayer) });

    while (combo < maxCombo) {
      if (target.system.attributes.hp.value <= 0) {
        await ChatMessage.create({ content: this._msgDown(target.name, combo, totalDamage) });
        break;
      }

      // ─ A: Hit ─
      setStatus(`Hit ${combo+1} — ${actorA.name}${aIsPlayer ? " (waiting for player)" : ""}`);
      const ra = await this._doRoll(actorA, attack.rollA, attack.rollALabel, combo+1, aIsPlayer);
      if (ra === null) { await ChatMessage.create({ content: this._msgCancel(actorA.name, combo) }); break; }
      if (ra < threshold) { await ChatMessage.create({ content: this._msgBreak(actorA.name, combo, ra, threshold) }); break; }

      // ─ A: Damage ─
      if (attack.damageAFormula) {
        setStatus(`Hit ${combo+1} — ${actorA.name} damage`);
        await this._doDamage(actorA, attack.damageAFormula, target, combo+1);
      }
      if (target.system.attributes.hp.value <= 0) {
        combo++;
        await ChatMessage.create({ content: this._msgDown(target.name, combo, totalDamage) });
        break;
      }

      // ─ B: Hit ─
      setStatus(`Hit ${combo+1} — ${actorB.name}${bIsPlayer ? " (waiting for player)" : ""}`);
      const rb = await this._doRoll(actorB, attack.rollB, attack.rollBLabel, combo+1, bIsPlayer);
      if (rb === null) { await ChatMessage.create({ content: this._msgCancel(actorB.name, combo) }); break; }
      if (rb < threshold) { await ChatMessage.create({ content: this._msgBreak(actorB.name, combo, rb, threshold) }); break; }

      // ─ B: Damage ─
      if (attack.damageBFormula) {
        setStatus(`Hit ${combo+1} — ${actorB.name} damage`);
        await this._doDamage(actorB, attack.damageBFormula, target, combo+1);
      }
      combo++;

      if (target.system.attributes.hp.value <= 0) {
        await ChatMessage.create({ content: this._msgDown(target.name, combo, totalDamage) });
        break;
      }

      const mile = { 3: ["🔥 3 HIT!", "#f80"], 5: ["🔥🔥 5 HIT!", "#f60"], 10: ["💥 10 HIT!!", "#f40"], 15: ["⚡ 15 HIT!!", "#f20"], 20: ["🏆 20 HIT!!!", "gold"] };
      if (mile[combo]) await ChatMessage.create({ content: this._msgMilestone(mile[combo][0], mile[combo][1]) });
    }

    if (statusBar) statusBar.style.display = "none";
    if (root) this._refreshTarget(root);
    await ChatMessage.create({ content: this._msgFinal(attack, actorA, actorB, target, combo, totalDamage, combo >= maxCombo, target.system.attributes.hp.value <= 0) });
  }

  async _doRoll(actor, formula, label, comboNum, isPlayer) {
    let total;
    if (isPlayer) {
      const res = await requestPlayerRoll(actor, formula, label ?? "Hit Roll", comboNum);
      if (res === null) return null;
      total = res.total;
      if (res.manual) {
        const color = actor === game.actors.getName(actor.name) ? "#4a90d9" : "#d94a90";
        await ChatMessage.create({
          speaker: ChatMessage.getSpeaker({ actor }),
          content: `<div style="background:#111;border:1px solid ${color};border-radius:5px;padding:8px 12px;font-size:12px;">
            <span style="color:${color};font-weight:bold;">[${label}] ${actor.name} — Hit ${comboNum}</span><br>
            <span style="color:#eee;">Manual roll: <strong style="font-size:16px;">${total}</strong></span>
          </div>`
        });
      }
    } else {
      try {
        const roll = await new Roll(formula, actor.getRollData()).roll();
        total = roll.total;
        await roll.toMessage({ speaker: ChatMessage.getSpeaker({ actor }), flavor: `[${label ?? "Hit"}] ${actor.name} — Hit ${comboNum}` });
      } catch (e) { ui.notifications.error(`Roll failed: ${e.message}`); return null; }
    }
    return total;
  }

  async _doDamage(actor, formula, target, comboNum) {
    try {
      const roll   = await new Roll(formula, actor.getRollData()).roll();
      const amt    = roll.total;
      const result = await applyDamageToActor(target, amt);
      await roll.toMessage({
        speaker: ChatMessage.getSpeaker({ actor }),
        flavor: `💥 ${actor.name} → ${target.name}: ${amt} dmg${result ? ` | HP ${result.oldHP}→${result.newHP}` : ""}`
      });
      return amt;
    } catch (e) { ui.notifications.warn(`Damage failed: ${e.message}`); return 0; }
  }

  /* ── Chat messages ──────────────────────── */
  _tag(isPlayer) {
    return isPlayer
      ? `<span style="font-size:10px;background:#0a1a0a;border:1px solid #3a6a3a;border-radius:3px;padding:1px 5px;color:#88cc88;">🎲 Player</span>`
      : `<span style="font-size:10px;background:#0a0a1a;border:1px solid #3a3a6a;border-radius:3px;padding:1px 5px;color:#8888cc;">🤖 NPC</span>`;
  }

  _msgOpening(attack, actorA, actorB, target, aP, bP) {
    const hp = target.system.attributes.hp;
    return `<div class="bros-attack-card">
      <h3>⭐ ${attack.name}</h3>
      <p style="text-align:center;margin:4px 0;">
        ${actorA.name} ${this._tag(aP)} <span style="color:gold;">+</span> ${actorB.name} ${this._tag(bP)}
      </p>
      <p style="text-align:center;color:#e74c3c;margin:4px 0;">
        🎯 ${target.name} — HP ${hp.value}/${hp.max}
      </p>
      <p style="text-align:center;color:#aaa;font-size:11px;margin:4px 0;">COMBO START!</p>
    </div>`;
  }

  _msgBreak(name, combo, rolled, threshold) {
    return `<div class="bros-attack-card">
      <p style="text-align:center;color:#e74c3c;">
        💢 <strong>${name}</strong> rolled <strong>${rolled}</strong> (needed ${threshold})<br>
        Combo broken after <strong>${combo}</strong> hit${combo !== 1 ? "s" : ""}!
      </p>
    </div>`;
  }

  _msgCancel(name, combo) {
    return `<div class="bros-attack-card">
      <p style="text-align:center;color:#e74c3c;">
        🚫 <strong>${name}</strong> cancelled — combo ended after <strong>${combo}</strong> hit${combo !== 1 ? "s" : ""}!
      </p>
    </div>`;
  }

  _msgDown(name, combo, totalDmg) {
    return `<div class="bros-attack-card">
      <div class="bros-combo-count">💀 ${name} is DOWN!</div>
      <p style="text-align:center;">
        <strong>${totalDmg}</strong> total damage · <strong>${combo}</strong> hit${combo !== 1 ? "s" : ""}
      </p>
    </div>`;
  }

  _msgMilestone(text, color) {
    return `<div class="bros-combo-count" style="color:${color};text-shadow:0 0 8px ${color};">${text}</div>`;
  }

  _msgFinal(attack, actorA, actorB, target, combo, totalDmg, hitCap, down) {
    const hp    = target.system.attributes.hp;
    const emoji = hitCap ? "🏆" : down ? "💀" : "💢";
    const label = hitCap ? "MAX COMBO!" : down ? "TARGET DOWN!" : "COMBO ENDED";
    return `<div class="bros-attack-card">
      <h3>${emoji} ${attack.name} — ${label}</h3>
      <div class="bros-combo-count">${combo} hits · ${totalDmg} dmg</div>
      <p style="text-align:center;color:#aaa;font-size:11px;">
        ${actorA.name} + ${actorB.name} → ${target.name}<br>
        Target HP: ${hp.value}/${hp.max}
      </p>
    </div>`;
  }

  /* ── App styles ─────────────────────────── */
  _styles() {
    return `<style>
      .bros-root { font-family: Signika, sans-serif; background: #0d0d0d; color: #e0e0e0; }

      /* Header */
      .ba-header { display: flex; align-items: center; gap: 10px; padding: 14px 18px;
        background: linear-gradient(135deg,#180505,#2c0808); border-bottom: 2px solid gold; }
      .ba-star { font-size: 30px; filter: drop-shadow(0 0 6px gold); flex-shrink: 0; }
      .ba-title { font-size: 17px; font-weight: bold; color: gold; letter-spacing: 2px; }
      .ba-sub   { font-size: 10px; color: #888; letter-spacing: 0.5px; }
      .ba-new-btn { margin-left: auto; padding: 6px 14px; font-size: 12px; font-weight: bold;
        background: linear-gradient(135deg,#7a5a00,#c9950a); color: #000;
        border: none; border-radius: 5px; cursor: pointer; white-space: nowrap;
        box-shadow: 0 0 8px rgba(255,215,0,0.3); }
      .ba-new-btn:hover { background: linear-gradient(135deg,#c9950a,#ffe066); }
      .ba-static-badge { margin-left:auto; color:#9fe6ae; font-size:10px; letter-spacing:1px; border:1px solid #397248; border-radius:4px; padding:4px 7px; }
      .ba-card-desc { color:#aaa; font-size:11px; font-weight:normal; margin-top:4px; max-width:360px; }

      /* Body */
      .ba-body { padding: 12px; display: flex; flex-direction: column; gap: 10px; }

      /* Target bar */
      .ba-target-bar { display: flex; align-items: center; gap: 8px; padding: 8px 12px;
        border-radius: 6px; border: 1px solid #2a2a2a; font-size: 12px; }
      .ba-target-none { border-color: #552222; background: #180a0a; color: #ff8888; }
      .ba-target-has  { border-color: #225522; background: #0a180a; color: #88ff88; }
      .ba-target-bar span:nth-child(2) { flex: 1; }
      .ba-icon-btn { background: #1a1a1a; border: 1px solid #333; color: #888;
        border-radius: 4px; padding: 2px 8px; cursor: pointer; font-size: 12px; }
      .ba-icon-btn:hover { color: gold; border-color: gold; }

      /* Empty */
      .ba-empty { text-align: center; padding: 30px; color: #444; font-size: 13px; line-height: 1.8; }

      /* List */
      .ba-list { display: flex; flex-direction: column; gap: 10px; }

      /* Card */
      .ba-card { position: relative; background: #141414; border: 1px solid #252525;
        border-radius: 8px; overflow: hidden; }
      .ba-card:hover { border-color: rgba(255,215,0,0.4); }
      .ba-card-glow { position: absolute; top: 0; left: 0; right: 0; height: 2px;
        background: linear-gradient(90deg, transparent, gold, transparent); opacity: 0; }
      .ba-card:hover .ba-card-glow { opacity: 1; }
      .ba-card-head { display: flex; align-items: center; justify-content: space-between;
        padding: 9px 12px; border-bottom: 1px solid #1e1e1e; }
      .ba-card-name { font-size: 14px; font-weight: bold; color: gold; }
      .ba-card-btns { display: flex; gap: 5px; }
      .ba-use-btn { background: linear-gradient(135deg,#0d420d,#177017); color: #aaffaa;
        border: 1px solid #177017; border-radius: 4px; padding: 4px 11px;
        font-size: 11px; font-weight: bold; cursor: pointer; }
      .ba-use-btn:hover { background: linear-gradient(135deg,#177017,#20a020); }
      .ba-del-btn { background: linear-gradient(135deg,#420d0d,#701717); color: #ffaaaa;
        border: 1px solid #701717; border-radius: 4px; padding: 4px 8px;
        font-size: 11px; cursor: pointer; }
      .ba-del-btn:hover { background: linear-gradient(135deg,#701717,#a02020); }

      /* Card columns */
      .ba-card-cols { display: flex; align-items: stretch; padding: 10px 12px; gap: 6px; }
      .ba-col { flex: 1; background: #0e0e0e; border-radius: 6px; padding: 8px; }
      .ba-col-a { border-top: 2px solid #4a90d9; }
      .ba-col-b { border-top: 2px solid #d94a90; }
      .ba-pip { display: inline-flex; width: 20px; height: 20px; border-radius: 50%;
        font-size: 11px; font-weight: bold; align-items: center; justify-content: center;
        margin-bottom: 4px; }
      .ba-pip-a { background: #4a90d9; color: #fff; }
      .ba-pip-b { background: #d94a90; color: #fff; }
      .ba-col-name { font-size: 13px; font-weight: bold; color: #ddd; margin-bottom: 4px; }
      .ba-chip { font-size: 10px; padding: 2px 7px; border-radius: 4px; margin-top: 3px;
        display: inline-block; }
      .ba-chip-roll   { background: rgba(74,144,217,0.12); color: #7ab8f5; border: 1px solid rgba(74,144,217,0.25); }
      .ba-chip-roll-b { background: rgba(217,74,144,0.12); color: #f57ab8; border: 1px solid rgba(217,74,144,0.25); }
      .ba-chip-dmg    { background: rgba(200,140,50,0.12); color: #f5b07a; border: 1px solid rgba(200,140,50,0.25); }

      /* Divider */
      .ba-divider { display: flex; flex-direction: column; align-items: center;
        justify-content: center; gap: 3px; padding: 0 4px; flex-shrink: 0; font-size: 14px; }
      .ba-div-line { width: 1px; flex: 1; min-height: 16px;
        background: linear-gradient(to bottom, transparent, gold, transparent); }

      /* Footer */
      .ba-card-foot { padding: 5px 12px; font-size: 10px; color: #555;
        background: #0a0a0a; border-top: 1px solid #1a1a1a; }

      /* Status */
      .ba-status { background: #1a1a00; border: 1px solid gold; border-radius: 6px;
        padding: 8px 14px; font-size: 12px; color: gold; }
    </style>`;
  }
}