const MODULE_ID = "active-time-battle";
const FLAG = `flags.${MODULE_ID}`;
const READY = 100;
const DEFAULT_TICK_MS = 1000;

let TICKER = null;
let ACTIVE_PROMPT = null;
let ACTIVE_PROMPT_KEY = null;
let LAST_RENDER_WARN = 0;

function escapeHtml(value) {
  const raw = String(value ?? "");
  const escaper = globalThis.foundry?.utils?.escapeHTML;
  if (typeof escaper === "function") return escaper(raw);
  return raw.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function usersArray() {
  const users = game.users?.contents ?? (game.users ? Array.from(game.users) : []);
  return users.filter(Boolean);
}

function isPrimaryGM() {
  if (!game.user?.isGM) return false;
  const activeGMs = usersArray().filter(u => u?.active && u?.isGM)
    .sort((a, b) => String(a.id || "").localeCompare(String(b.id || "")));
  return !activeGMs.length || activeGMs[0].id === game.user.id;
}

function asElement(html) {
  if (!html) return null;
  if (html instanceof HTMLElement) return html;
  if (Array.isArray(html) && html[0] instanceof HTMLElement) return html[0];
  if (html[0] instanceof HTMLElement) return html[0];
  return null;
}

function clamp(value, min, max) {
  const n = Number(value);
  if (!Number.isFinite(n)) return min;
  return Math.max(min, Math.min(max, n));
}

function now() {
  return Date.now();
}

function setting(key) {
  return game.settings.get(MODULE_ID, key);
}

function combatantsArray(combat) {
  return combat?.combatants?.contents ?? [];
}

function getFlag(doc, key, fallback = null) {
  return foundry.utils.getProperty(doc, `${FLAG}.${key}`) ?? fallback;
}

function flagPath(key) {
  return `${FLAG}.${key}`;
}

async function updateCombatFlags(combat, data, options = {}) {
  const update = {};
  for (const [key, value] of Object.entries(data)) update[flagPath(key)] = value;
  return combat.update(update, { diff: false, activeTimeBattle: true, ...options });
}

async function updateCombatantFlags(combatant, data, options = {}) {
  const update = {};
  for (const [key, value] of Object.entries(data)) update[flagPath(key)] = value;
  return combatant.update(update, { diff: false, activeTimeBattle: true, ...options });
}

async function updateManyCombatants(combat, updates) {
  if (!updates?.length) return null;
  return combat.updateEmbeddedDocuments("Combatant", updates, { diff: false, activeTimeBattle: true });
}

function isRunning(combat) {
  return !!getFlag(combat, "running", false);
}

function isPaused(combat) {
  return !!getFlag(combat, "paused", false);
}

function activeId(combat) {
  return getFlag(combat, "activeId", null);
}

function activeSince(combat) {
  return Number(getFlag(combat, "activeSince", 0)) || 0;
}

function sequence(combat) {
  return Number(getFlag(combat, "sequence", 0)) || 0;
}

function atbOf(combatant) {
  return clamp(getFlag(combatant, "atb", 0), 0, READY + Number(setting("overflowCap") || 0));
}

function idleStrikes(combatant) {
  return Number(getFlag(combatant, "idleStrikes", 0)) || 0;
}

function lastActedRound(combatant) {
  return Number(getFlag(combatant, "lastActedRound", 0)) || 0;
}

function isDefeated(combat, combatant) {
  return !!(combat?.settings?.skipDefeated && combatant?.isDefeated);
}

function eligibleCombatants(combat) {
  return combatantsArray(combat).filter(c => !isDefeated(combat, c));
}

function playerOwned(combatant) {
  return !!(combatant?.hasPlayerOwner || combatant?.actor?.hasPlayerOwner);
}

function userCanAct(combatant, user = game.user) {
  if (!combatant || !user) return false;
  if (user.isGM) return true;
  if (user.id === game.user?.id && combatant.actor?.isOwner) return true;
  return !!combatant.actor?.testUserPermission?.(user, "OWNER");
}

function requestingUser(data = {}) {
  const userId = data.userId;
  if (!userId) return null;
  return game.users?.get?.(userId)
    ?? usersArray().find(u => u.id === userId)
    ?? (userId === game.user?.id ? game.user : null);
}

function canRequestAction(action, combat, data = {}) {
  const user = requestingUser(data);
  if (!user || (user.active === false && user.id !== game.user?.id)) return false;
  if (user.isGM) return true;
  if (action === "activate" || action === "endTurn") {
    const id = data.combatantId || activeId(combat);
    if (action === "endTurn" && id !== activeId(combat)) return false;
    const combatant = combat?.combatants?.get?.(id);
    return userCanAct(combatant, user);
  }
  return false;
}

function combatantName(combatant) {
  return combatant?.name || combatant?.actor?.name || "Combatant";
}

function initiativeOf(combatant) {
  const n = Number(combatant?.initiative);
  return Number.isFinite(n) ? n : 0;
}

function averageInitiative(combatants) {
  const rolled = (combatants || []).filter(c => c.initiative !== null && c.initiative !== undefined);
  const list = rolled.length ? rolled : (combatants || []);
  if (!list.length) return 0;
  return list.reduce((sum, c) => sum + initiativeOf(c), 0) / list.length;
}

function speedFactor(combatant, avg) {
  const weight = Number(setting("initiativeSpeedWeight")) || 0;
  const raw = 1 + (initiativeOf(combatant) - avg) * weight;
  return clamp(raw, Number(setting("minSpeed")) || 0.5, Number(setting("maxSpeed")) || 2);
}

function openingAtb(combatant, avg) {
  const base = Number(setting("openingReadiness")) || 0;
  const weight = Number(setting("initiativeOpeningWeight")) || 0;
  return clamp(base + (initiativeOf(combatant) - avg) * weight, 0, READY - 1);
}

function readyAt(combatant) {
  return Number(getFlag(combatant, "readyAt", 0)) || 0;
}

function readyCombatants(combat) {
  return eligibleCombatants(combat)
    .filter(c => atbOf(c) >= READY && c.id !== activeId(combat))
    .sort((a, b) => {
      const overflow = atbOf(b) - atbOf(a);
      if (Math.abs(overflow) > 0.01) return overflow;
      const init = initiativeOf(b) - initiativeOf(a);
      if (init) return init;
      return (readyAt(a) || Infinity) - (readyAt(b) || Infinity)
        || combatantName(a).localeCompare(combatantName(b));
    });
}

function canAutoActivate(combatant) {
  const mode = setting("autoActivate");
  if (mode === "off") return false;
  if (mode === "npcs") return !playerOwned(combatant);
  return true;
}

function shouldTickGauges(combat) {
  return !(activeId(combat) && setting("waitMode"));
}

function fmtSeconds(seconds) {
  return `${Math.max(0, Math.ceil(seconds))}s`;
}

function pct(value) {
  return Math.round(clamp(value, 0, READY) * 10) / 10;
}

function chat(content) {
  if (!setting("announceChat")) return null;
  return ChatMessage.create({ speaker: { alias: "Active Time Battle" }, content });
}

function notifyOwners(combatant, message) {
  if (userCanAct(combatant)) ui.notifications?.info(message);
}

function socketSend(data) {
  return game.socket?.emit(`module.${MODULE_ID}`, data);
}

function request(action, combat, extra = {}) {
  const payload = { action, combatId: combat?.id, userId: game.user?.id, ...extra };
  if (isPrimaryGM()) return gmAction(action, combat, payload);
  return socketSend(payload);
}

async function gmAction(action, combat, data = {}) {
  if (!isPrimaryGM() || !combat) return null;
  if (!canRequestAction(action, combat, data)) {
    console.warn(`${MODULE_ID} rejected unauthorized ${action} request`, data);
    return null;
  }
  const user = requestingUser(data);
  const requestData = user?.isGM ? data : { ...data, force: false };
  if (action === "start") return startAtb(combat);
  if (action === "pause") return pauseAtb(combat, true);
  if (action === "resume") return pauseAtb(combat, false);
  if (action === "reset") return resetAtb(combat);
  if (action === "activate") return activateCombatant(combat, requestData.combatantId, requestData);
  if (action === "endTurn") return endActiveTurn(combat, requestData.combatantId, requestData);
  if (action === "rollMissing") return rollMissingInitiative(combat);
  return null;
}

async function initializeCombatants(combat) {
  const members = eligibleCombatants(combat);
  const avg = averageInitiative(members);
  const stamp = now();
  const updates = members.map(c => {
    const start = openingAtb(c, avg);
    return {
      _id: c.id,
      [flagPath("atb")]: start,
      [flagPath("readyAt")]: start >= READY ? stamp : null,
      [flagPath("idleStrikes")]: 0,
      [flagPath("lastActedAt")]: null,
      [flagPath("lastActedRound")]: 0,
      [flagPath("warnedAt")]: null
    };
  });
  await updateManyCombatants(combat, updates);
}

async function startAtb(combat) {
  if (!isPrimaryGM() || !combat?.started) return null;
  await initializeCombatants(combat);
  await updateCombatFlags(combat, {
    running: true,
    paused: false,
    activeId: null,
    activeSince: null,
    lastTick: now(),
    sequence: sequence(combat) + 1
  });
  await chat(`<b>Active Time Battle started.</b> Initiative now changes gauge speed; ready actors can act without waiting for the whole table.`);
  ui.combat?.render?.(true);
  return combat;
}

async function pauseAtb(combat, paused) {
  if (!isPrimaryGM()) return null;
  await updateCombatFlags(combat, { paused: !!paused, lastTick: now(), sequence: sequence(combat) + 1 });
  await chat(paused ? "ATB paused." : "ATB resumed.");
  ui.combat?.render?.(true);
  return combat;
}

async function resetAtb(combat) {
  if (!isPrimaryGM()) return null;
  await initializeCombatants(combat);
  await updateCombatFlags(combat, {
    running: false,
    paused: false,
    activeId: null,
    activeSince: null,
    lastTick: now(),
    sequence: sequence(combat) + 1
  });
  closeActivePrompt();
  await chat("ATB reset.");
  ui.combat?.render?.(true);
  return combat;
}

async function rollMissingInitiative(combat) {
  if (!isPrimaryGM() || !combat) return null;
  const formula = setting("initiativeFormula") || "1d20";
  const updates = [];
  for (const c of eligibleCombatants(combat)) {
    if (c.initiative !== null && c.initiative !== undefined) continue;
    const roll = await new Roll(formula, c.actor?.getRollData?.() ?? {}).evaluate({ async: true });
    updates.push({ _id: c.id, initiative: roll.total });
  }
  if (!updates.length) return 0;

  await combat.updateEmbeddedDocuments("Combatant", updates, { activeTimeBattle: true });

  /* If initiative was filled in after ATB already started, do not reset the
     whole fight. Seed only those just-rolled combatants up to their initiative-
     adjusted opening value while preserving any progress they already earned. */
  if (isRunning(combat)) {
    const ids = new Set(updates.map(u => u._id));
    const members = eligibleCombatants(combat);
    const avg = averageInitiative(members);
    const stamp = now();
    const gaugeUpdates = members.filter(c => ids.has(c.id)).map(c => {
      const value = Math.max(atbOf(c), openingAtb(c, avg));
      return {
        _id: c.id,
        [flagPath("atb")]: value,
        [flagPath("readyAt")]: value >= READY ? (readyAt(c) || stamp) : null
      };
    });
    await updateManyCombatants(combat, gaugeUpdates);
  }
  return updates.length;
}

async function activateCombatant(combat, combatantId, options = {}) {
  if (!isPrimaryGM() || !combat?.started) return null;
  const currentActive = activeId(combat);
  if (currentActive && currentActive !== combatantId) {
    return ui.notifications?.warn("Another combatant is already active. End that ATB turn before activating the next one.");
  }
  const c = combat.combatants?.get(combatantId);
  if (!c || isDefeated(combat, c)) return null;
  if (!options.force && atbOf(c) < READY) return ui.notifications?.warn(`${combatantName(c)} is not ready yet.`);

  const idx = combat.turns.findIndex(t => t.id === c.id);
  if (idx < 0) return null;

  const stamp = now();
  await updateCombatantFlags(c, {
    atb: Math.max(READY, atbOf(c)),
    readyAt: readyAt(c) || stamp,
    warnedAt: null
  });
  await combat.update({
    turn: idx,
    [flagPath("activeId")]: c.id,
    [flagPath("activeSince")]: stamp,
    [flagPath("running")]: true,
    [flagPath("paused")]: false,
    [flagPath("lastTick")]: stamp,
    [flagPath("sequence")]: sequence(combat) + 1
  }, { diff: false, activeTimeBattle: true });

  const seconds = Number(setting("actionSeconds")) || 90;
  await chat(`<b>${escapeHtml(combatantName(c))}</b> is active. ${seconds}s spotlight clock started.`);
  notifyOwners(c, `${combatantName(c)} is active — ${seconds}s to act.`);
  ui.combat?.render?.(true);
  return c;
}

async function advanceRoundIfComplete(combat, justActedId = null) {
  const members = eligibleCombatants(combat);
  if (!members.length) return;
  const round = Number(combat.round) || 1;
  const done = members.every(c => c.id === justActedId || lastActedRound(c) >= round);
  if (!done) return;
  await combat.update({ round: round + 1 }, { diff: false, activeTimeBattle: true });
  await chat(`<b>ATB lap ${round + 1}</b>: every active combatant has spent a turn since the last lap.`);
}

async function endActiveTurn(combat, combatantId, options = {}) {
  if (!isPrimaryGM() || !combat?.started) return null;
  const id = combatantId || activeId(combat);
  const c = combat.combatants?.get(id);
  if (!c) return null;
  const stamp = now();
  await updateCombatantFlags(c, {
    atb: 0,
    readyAt: null,
    warnedAt: null,
    lastActedAt: stamp,
    lastActedRound: Number(combat.round) || 1,
    idleStrikes: options.clearStrikes ? 0 : idleStrikes(c)
  });
  await updateCombatFlags(combat, {
    activeId: null,
    activeSince: null,
    lastTick: stamp,
    sequence: sequence(combat) + 1
  });
  closeActivePrompt();
  if (!options.silent) await chat(`<b>${escapeHtml(combatantName(c))}</b> spent their ATB turn.`);
  await advanceRoundIfComplete(combat, c.id);
  ui.combat?.render?.(true);
  return c;
}

async function timeoutActiveTurn(combat, combatant) {
  const strikes = idleStrikes(combatant) + 1;
  const mode = setting("timeoutMode");
  const guardAfter = Number(setting("strikesToGuard")) || 2;
  const shouldGuard = mode === "guard" || (mode === "escalate" && strikes >= guardAfter);
  const stamp = now();

  if (shouldGuard) {
    await updateCombatantFlags(combatant, {
      atb: 0,
      readyAt: null,
      warnedAt: null,
      idleStrikes: strikes,
      lastActedAt: stamp,
      lastActedRound: Number(combat.round) || 1
    });
    await updateCombatFlags(combat, {
      activeId: null,
      activeSince: null,
      lastTick: stamp,
      sequence: sequence(combat) + 1
    });
    closeActivePrompt();
    await chat(`<b>${escapeHtml(combatantName(combatant))}</b> timed out and takes Guard / Dodge. The table keeps moving.`);
    await advanceRoundIfComplete(combat, combatant.id);
    ui.combat?.render?.(true);
    return;
  }

  const delayTo = clamp(Number(setting("delayPercent")) || 70, 0, READY - 1);
  await updateCombatantFlags(combatant, {
    atb: delayTo,
    readyAt: null,
    warnedAt: null,
    idleStrikes: strikes
  });
  await updateCombatFlags(combat, {
    activeId: null,
    activeSince: null,
    lastTick: stamp,
    sequence: sequence(combat) + 1
  });
  closeActivePrompt();
  await chat(`<b>${escapeHtml(combatantName(combatant))}</b> timed out and delays to ${delayTo}% ATB. They will cycle back soon, but they do not stop the fight.`);
  ui.combat?.render?.(true);
}

async function tickCombat(combat) {
  if (!isPrimaryGM() || !combat?.started || !isRunning(combat) || isPaused(combat)) return;
  const stamp = now();
  const lastTick = Number(getFlag(combat, "lastTick", stamp)) || stamp;
  const dt = clamp((stamp - lastTick) / 1000, 0, 5);
  if (dt <= 0.05) return;

  const active = activeId(combat) ? combat.combatants?.get(activeId(combat)) : null;
  if (active && !isDefeated(combat, active)) {
    const elapsed = (stamp - activeSince(combat)) / 1000;
    const actionSeconds = Number(setting("actionSeconds")) || 90;
    const warningSeconds = Number(setting("warningSeconds")) || 20;
    const warned = Number(getFlag(active, "warnedAt", 0)) || 0;
    if (elapsed >= actionSeconds) return timeoutActiveTurn(combat, active);
    if (warningSeconds > 0 && elapsed >= actionSeconds - warningSeconds && !warned) {
      await updateCombatantFlags(active, { warnedAt: stamp });
      await chat(`<b>${escapeHtml(combatantName(active))}</b> has ${fmtSeconds(actionSeconds - elapsed)} left on their ATB turn.`);
    }
  } else if (activeId(combat)) {
    await updateCombatFlags(combat, { activeId: null, activeSince: null, lastTick: stamp, sequence: sequence(combat) + 1 });
    return;
  }

  const members = eligibleCombatants(combat);
  const avg = averageInitiative(members);
  const baseSeconds = Math.max(5, Number(setting("baseReadySeconds")) || 45);
  const overflowCap = Math.max(0, Number(setting("overflowCap")) || 0);
  const gainBase = READY / baseSeconds;
  const projected = new Map();
  const updates = [];

  if (shouldTickGauges(combat)) {
    for (const c of members) {
      if (active && c.id === active.id) continue;
      const old = atbOf(c);
      const speed = speedFactor(c, avg);
      const value = clamp(old + gainBase * speed * dt, 0, READY + overflowCap);
      projected.set(c.id, value);
      const crossed = old < READY && value >= READY;
      if (Math.abs(value - old) >= 0.1 || crossed) {
        updates.push({
          _id: c.id,
          [flagPath("atb")]: Math.round(value * 10) / 10,
          [flagPath("readyAt")]: crossed ? stamp : (readyAt(c) || (value >= READY ? stamp : null))
        });
      }
    }
  }

  if (updates.length) await updateManyCombatants(combat, updates);
  await updateCombatFlags(combat, { lastTick: stamp }, { render: false });

  if (activeId(combat)) return;
  const ready = eligibleCombatants(combat)
    .filter(c => (projected.get(c.id) ?? atbOf(c)) >= READY)
    .sort((a, b) => {
      const av = projected.get(a.id) ?? atbOf(a);
      const bv = projected.get(b.id) ?? atbOf(b);
      if (Math.abs(bv - av) > 0.01) return bv - av;
      const init = initiativeOf(b) - initiativeOf(a);
      if (init) return init;
      return (readyAt(a) || stamp) - (readyAt(b) || stamp)
        || combatantName(a).localeCompare(combatantName(b));
    });
  const next = ready.find(canAutoActivate);
  if (!next) return;
  const grace = Number(setting("readyGraceSeconds")) || 0;
  const rAt = readyAt(next) || stamp;
  if (stamp - rAt < grace * 1000) return;
  return activateCombatant(combat, next.id, { force: true, source: "auto" });
}

function tickActiveCombat() {
  const combat = game.combat;
  if (!combat) return;
  tickCombat(combat).catch(err => {
    console.error(`${MODULE_ID} tick failed`, err);
  });
}

function closeActivePrompt() {
  try { ACTIVE_PROMPT?.close(); } catch (err) {}
  ACTIVE_PROMPT = null;
  ACTIVE_PROMPT_KEY = null;
}

function showActivePrompt(combat) {
  if (!combat?.started || !isRunning(combat)) return;
  const c = activeId(combat) ? combat.combatants?.get(activeId(combat)) : null;
  if (!c || !userCanAct(c)) return;
  const key = `${combat.id}:${sequence(combat)}:${c.id}`;
  if (ACTIVE_PROMPT && ACTIVE_PROMPT_KEY === key) return;
  closeActivePrompt();

  const started = activeSince(combat) || now();
  const total = Number(setting("actionSeconds")) || 90;
  const elapsed = (now() - started) / 1000;
  const left = fmtSeconds(total - elapsed);
  const content = `
    <div class="atb-active-dialog">
      <p><b>${escapeHtml(combatantName(c))}</b> is active.</p>
      <p>You have about <b>${left}</b>. If you go idle, the module will delay you or put you on Guard based on world settings so the table keeps moving.</p>
    </div>`;
  ACTIVE_PROMPT = new Dialog({
    title: "Active Time Battle",
    content,
    buttons: {
      end: {
        label: game.i18n.localize("ATB.EndTurn"),
        callback: () => request("endTurn", combat, { combatantId: c.id, clearStrikes: true })
      },
      close: { label: "Close" }
    },
    close: () => {
      ACTIVE_PROMPT = null;
      ACTIVE_PROMPT_KEY = null;
    }
  }, { width: 390 });
  ACTIVE_PROMPT_KEY = key;
  ACTIVE_PROMPT.render(true);
}

function trackerStyle() {
  const style = setting("trackerStyle") || "bars";
  return ["bars", "classic", "compact"].includes(style) ? style : "bars";
}

function etaSeconds(combat, combatant, avg = null) {
  const value = atbOf(combatant);
  if (value >= READY) return 0;
  const baseSeconds = Math.max(5, Number(setting("baseReadySeconds")) || 45);
  const encounterAverage = avg ?? averageInitiative(eligibleCombatants(combat));
  const gainPerSecond = (READY / baseSeconds) * speedFactor(combatant, encounterAverage);
  if (gainPerSecond <= 0) return Infinity;
  return (READY - value) / gainPerSecond;
}

function queueCombatants(combat) {
  const all = eligibleCombatants(combat);
  const members = all.filter(c => c.id !== activeId(combat));
  const avg = averageInitiative(all);
  return members.sort((a, b) => {
    const aReady = atbOf(a) >= READY;
    const bReady = atbOf(b) >= READY;
    const readyDiff = Number(bReady) - Number(aReady);
    if (readyDiff) return readyDiff;
    if (aReady && bReady) {
      const overflow = atbOf(b) - atbOf(a);
      if (Math.abs(overflow) > 0.01) return overflow;
    } else {
      const eta = etaSeconds(combat, a, avg) - etaSeconds(combat, b, avg);
      if (Math.abs(eta) > 0.01) return eta;
      const gauge = atbOf(b) - atbOf(a);
      if (Math.abs(gauge) > 0.01) return gauge;
    }
    const init = initiativeOf(b) - initiativeOf(a);
    if (init) return init;
    return combatantName(a).localeCompare(combatantName(b));
  });
}

function renderQueueStrip(panel, combat) {
  const count = Math.max(0, Number(setting("queuePreview")) || 0);
  if (!isRunning(combat) || !count) return;
  const avg = averageInitiative(eligibleCombatants(combat));
  const strip = document.createElement("div");
  strip.className = "atb-queue";
  const rows = queueCombatants(combat).slice(0, count);
  if (!rows.length) return;
  const busy = !!activeId(combat);
  for (const c of rows) {
    const value = atbOf(c);
    const ready = value >= READY;
    const row = document.createElement(!busy && ready && userCanAct(c) ? "button" : "span");
    row.className = `atb-queue-chip${ready ? " ready" : ""}${playerOwned(c) ? " player" : " npc"}`;
    row.title = ready
      ? `${combatantName(c)} is READY`
      : `${combatantName(c)} ready in about ${fmtSeconds(etaSeconds(combat, c, avg))}`;
    if (row.tagName === "BUTTON") {
      row.type = "button";
      row.addEventListener("click", ev => {
        ev.preventDefault();
        ev.stopPropagation();
        request("activate", combat, { combatantId: c.id });
      });
    }
    const label = document.createElement("b");
    label.textContent = combatantName(c);
    const meta = document.createElement("i");
    meta.textContent = ready ? "READY" : fmtSeconds(etaSeconds(combat, c, avg));
    const bar = document.createElement("em");
    bar.style.width = `${Math.min(100, value)}%`;
    row.append(label, meta, bar);
    strip.appendChild(row);
  }
  panel.appendChild(strip);
}

function trackerSummary(combat) {
  const running = isRunning(combat);
  if (!combat?.started) return "Start combat, then start ATB.";
  if (!running) return "ATB stopped. Initiative can still be rolled before start.";
  if (isPaused(combat)) return "ATB paused.";
  const active = activeId(combat) ? combat.combatants?.get(activeId(combat)) : null;
  if (active) {
    const left = (Number(setting("actionSeconds")) || 90) - ((now() - activeSince(combat)) / 1000);
    return `${combatantName(active)} acting · ${fmtSeconds(left)} left`;
  }
  const queue = readyCombatants(combat).slice(0, 3).map(combatantName).join(", ");
  return queue ? `Ready: ${queue}` : "Gauges filling.";
}

function button(label, action, title = "") {
  const b = document.createElement("button");
  b.type = "button";
  b.dataset.atbControl = action;
  b.title = title || label;
  b.textContent = label;
  return b;
}

function renderTrackerPanel(root, combat) {
  root.querySelectorAll(".atb-panel").forEach(el => el.remove());
  const anchor = root.querySelector("header.combat-tracker-header") ?? root.querySelector(".directory-header");
  if (!anchor) return;

  const panel = document.createElement("div");
  panel.className = `atb-panel${isRunning(combat) ? " running" : " stopped"}${isPaused(combat) ? " paused" : ""}`;
  const title = document.createElement("div");
  title.className = "atb-panel-title";
  const titleText = document.createElement("b");
  titleText.textContent = "Active Time Battle";
  const summary = document.createElement("span");
  summary.textContent = trackerSummary(combat);
  title.append(titleText, summary);
  panel.appendChild(title);
  renderQueueStrip(panel, combat);
  const controls = document.createElement("div");
  controls.className = "atb-panel-controls";

  if (game.user.isGM && combat.started) {
    if (!isRunning(combat)) controls.appendChild(button(game.i18n.localize("ATB.Start"), "start"));
    else controls.appendChild(button(game.i18n.localize(isPaused(combat) ? "ATB.Resume" : "ATB.Pause"), isPaused(combat) ? "resume" : "pause"));
    controls.appendChild(button(game.i18n.localize("ATB.RollMissing"), "rollMissing"));
    controls.appendChild(button(game.i18n.localize("ATB.Reset"), "reset"));
  }

  panel.appendChild(controls);
  panel.querySelectorAll("button[data-atb-control]").forEach(btn => {
    btn.addEventListener("click", ev => {
      ev.preventDefault();
      ev.stopPropagation();
      request(btn.dataset.atbControl, combat);
    });
  });
  anchor.insertAdjacentElement("afterend", panel);
}

function renderCombatantBars(root, combat) {
  const active = activeId(combat);
  const members = eligibleCombatants(combat);
  const avg = averageInitiative(members);
  const ready = new Set(readyCombatants(combat).map(c => c.id));
  for (const li of root.querySelectorAll("li.combatant[data-combatant-id]")) {
    const c = combat.combatants?.get(li.dataset.combatantId);
    if (!c) continue;
    const value = atbOf(c);
    const speed = speedFactor(c, avg);
    const isActive = c.id === active;
    const isReady = ready.has(c.id) || value >= READY;
    li.classList.toggle("atb-active", isActive);
    li.classList.toggle("atb-ready", !isActive && isReady);
    li.classList.toggle("atb-waiting", !isActive && !isReady && value > 0);

    li.querySelectorAll(".atb-meter, [data-atb='activate'], [data-atb='end']").forEach(el => el.remove());

    const meter = document.createElement("div");
    meter.className = "atb-meter";
    meter.title = `ATB ${pct(value)}% · speed ×${speed.toFixed(2)} · initiative ${c.initiative ?? "?"}`;
    const fill = document.createElement("span");
    fill.style.width = `${Math.min(100, value)}%`;
    const label = document.createElement("b");
    label.textContent = value >= READY ? "READY" : `${Math.round(value)}%`;
    const speedPill = document.createElement("small");
    speedPill.className = "atb-speed";
    speedPill.textContent = `×${speed.toFixed(2)}`;
    meter.append(fill, label, speedPill);
    const name = li.querySelector(".token-name") ?? li;
    name.appendChild(meter);

    const controls = li.querySelector(".combatant-controls");
    if (!controls) continue;

    if (!active && !isActive && isReady && userCanAct(c)) {
      const a = document.createElement("a");
      a.dataset.atb = "activate";
      a.className = "combatant-control atb-control";
      a.title = game.i18n.localize("ATB.Activate");
      a.innerHTML = `<i class="fas fa-bolt"></i>`;
      a.addEventListener("click", ev => {
        ev.preventDefault();
        ev.stopPropagation();
        request("activate", combat, { combatantId: c.id });
      });
      controls.prepend(a);
    }

    if (isActive && userCanAct(c)) {
      const a = document.createElement("a");
      a.dataset.atb = "end";
      a.className = "combatant-control atb-control";
      a.title = game.i18n.localize("ATB.EndTurn");
      a.innerHTML = `<i class="fas fa-hourglass-end"></i>`;
      a.addEventListener("click", ev => {
        ev.preventDefault();
        ev.stopPropagation();
        request("endTurn", combat, { combatantId: c.id, clearStrikes: true });
      });
      controls.prepend(a);
    }
  }
}

function registerSettings() {
  game.settings.register(MODULE_ID, "autoStart", {
    name: "Start ATB when combat starts",
    hint: "If enabled, combat start initializes gauges and begins the ATB clock immediately.",
    scope: "world", config: true, type: Boolean, default: false
  });
  game.settings.register(MODULE_ID, "initiativeFormula", {
    name: "Fallback initiative formula",
    hint: "Used by the Roll Missing Initiative button. System initiative rolls still work.",
    scope: "world", config: true, type: String, default: "1d20"
  });
  game.settings.register(MODULE_ID, "baseReadySeconds", {
    name: "Base seconds to READY",
    hint: "How long a zero-modifier combatant takes to fill from 0 to READY.",
    scope: "world", config: true, type: Number, default: 45
  });
  game.settings.register(MODULE_ID, "initiativeSpeedWeight", {
    name: "Initiative speed weight",
    hint: "Each point above the combat average adds this much refill speed; below average subtracts it. 0.035 means +10 initiative is about ×1.35 speed.",
    scope: "world", config: true, type: Number, default: 0.035
  });
  game.settings.register(MODULE_ID, "initiativeOpeningWeight", {
    name: "Opening initiative weight",
    hint: "Each point above the combat average adds this much starting ATB when the clock starts.",
    scope: "world", config: true, type: Number, default: 2.5
  });
  game.settings.register(MODULE_ID, "openingReadiness", {
    name: "Opening readiness percent",
    hint: "Baseline ATB percent when the clock starts before initiative adjustment.",
    scope: "world", config: true, type: Number, default: 35
  });
  game.settings.register(MODULE_ID, "minSpeed", {
    name: "Minimum speed multiplier",
    scope: "world", config: true, type: Number, default: 0.55
  });
  game.settings.register(MODULE_ID, "maxSpeed", {
    name: "Maximum speed multiplier",
    scope: "world", config: true, type: Number, default: 1.9
  });
  game.settings.register(MODULE_ID, "overflowCap", {
    name: "READY overflow cap",
    hint: "Ready actors can keep gaining priority up to 100 + this value, but they cannot hoard infinite turns while idle.",
    scope: "world", config: true, type: Number, default: 60
  });
  game.settings.register(MODULE_ID, "autoActivate", {
    name: "Auto-activate ready combatants",
    hint: "All keeps the table moving fastest. NPCs only leaves players to click Activate. Off only fills gauges.",
    scope: "world", config: true, type: String,
    choices: { all: "All ready combatants", npcs: "NPCs only", off: "Off" }, default: "all"
  });
  game.settings.register(MODULE_ID, "readyGraceSeconds", {
    name: "Ready grace seconds",
    hint: "Seconds after reaching READY before auto-activation may pick that combatant.",
    scope: "world", config: true, type: Number, default: 3
  });
  game.settings.register(MODULE_ID, "actionSeconds", {
    name: "Spotlight seconds",
    hint: "How long an activated combatant has before timeout handling fires.",
    scope: "world", config: true, type: Number, default: 90
  });
  game.settings.register(MODULE_ID, "warningSeconds", {
    name: "Warning seconds",
    hint: "Warn this many seconds before an active timeout. Set 0 to disable warnings.",
    scope: "world", config: true, type: Number, default: 20
  });
  game.settings.register(MODULE_ID, "timeoutMode", {
    name: "Idle timeout result",
    hint: "Delay keeps them in the fight soon; Guard spends the turn; Escalate delays first then guards after repeated idle timeouts.",
    scope: "world", config: true, type: String,
    choices: { delay: "Delay back down the gauge", guard: "Guard / Dodge and spend the turn", escalate: "Delay, then Guard after repeated idles" }, default: "escalate"
  });
  game.settings.register(MODULE_ID, "delayPercent", {
    name: "Delay fallback percent",
    hint: "When a timeout delays instead of guards, their gauge drops to this percent.",
    scope: "world", config: true, type: Number, default: 72
  });
  game.settings.register(MODULE_ID, "strikesToGuard", {
    name: "Idle strikes before Guard",
    hint: "Only used by Escalate mode.",
    scope: "world", config: true, type: Number, default: 2
  });
  game.settings.register(MODULE_ID, "waitMode", {
    name: "Wait mode",
    hint: "If enabled, other gauges pause while someone is active. Leave disabled for true active-time pressure.",
    scope: "world", config: true, type: Boolean, default: false
  });
  game.settings.register(MODULE_ID, "trackerStyle", {
    name: "Tracker visual style",
    hint: "Bars = full ATB bars under each combatant; Classic = chunky Final Fantasy-style badge; Compact = thin low-noise bars.",
    scope: "world", config: true, type: String,
    choices: { bars: "Bars", classic: "Classic badge", compact: "Compact" }, default: "bars"
  });
  game.settings.register(MODULE_ID, "queuePreview", {
    name: "Queue preview size",
    hint: "How many upcoming or READY combatants to show in the ATB panel. Set 0 to hide the preview.",
    scope: "world", config: true, type: Number, default: 5
  });
  game.settings.register(MODULE_ID, "announceChat", {
    name: "Announce ATB events in chat",
    scope: "world", config: true, type: Boolean, default: true
  });
}

Hooks.once("init", registerSettings);

Hooks.once("ready", () => {
  const m = game.modules.get(MODULE_ID);
  if (m) m.api = {
    start: startAtb,
    pause: pauseAtb,
    reset: resetAtb,
    activate: activateCombatant,
    endTurn: endActiveTurn,
    rollMissingInitiative,
    readyCombatants,
    atbOf,
    speedFactor
  };

  game.socket?.on(`module.${MODULE_ID}`, data => {
    if (!isPrimaryGM() || !data?.action) return;
    const combat = game.combats?.get(data.combatId) || game.combat;
    return gmAction(data.action, combat, data);
  });

  if (game.user.isGM) {
    /* Every GM client owns a harmless interval, but only the current primary GM
       is allowed to tick. If the first GM disconnects, the next GM takes over
       without a reload and without double-advancing gauges. */
    TICKER = window.setInterval(tickActiveCombat, DEFAULT_TICK_MS);
  }
});

Hooks.on("combatStart", async combat => {
  if (!isPrimaryGM()) return;
  await initializeCombatants(combat);
  await updateCombatFlags(combat, {
    running: false,
    paused: false,
    activeId: null,
    activeSince: null,
    lastTick: now(),
    sequence: sequence(combat) + 1
  });
  if (setting("autoStart")) await startAtb(combat);
});

Hooks.on("deleteCombat", combat => {
  if (combat?.id === game.combat?.id) closeActivePrompt();
});

Hooks.on("updateCombat", (combat, changed) => {
  if (!combat?.started) return;
  const moduleFlags = foundry.utils.getProperty(changed, FLAG) || {};
  if ("activeId" in moduleFlags || "sequence" in moduleFlags) {
    if (!activeId(combat)) closeActivePrompt();
    else showActivePrompt(combat);
  }
});

Hooks.on("renderCombatTracker", (app, html) => {
  const root = asElement(html);
  if (!root) return;
  const combat = app.viewed ?? game.combat;
  if (!combat) return;
  root.classList.add("active-time-battle");
  root.classList.remove("atb-style-bars", "atb-style-classic", "atb-style-compact");
  root.classList.add(`atb-style-${trackerStyle()}`);
  renderTrackerPanel(root, combat);
  renderCombatantBars(root, combat);
  showActivePrompt(combat);
});

Hooks.on("preUpdateCombat", (combat, changed, options) => {
  if (options?.activeTimeBattle) return true;
  if (!combat?.started || !isRunning(combat)) return true;
  if (!("turn" in changed)) return true;

  const stamp = now();
  if (stamp - LAST_RENDER_WARN > 1200) {
    LAST_RENDER_WARN = stamp;
    ui.notifications?.warn("ATB is running: use Activate and End ATB Turn so gauges, idle strikes, and laps stay in sync.");
  }
  return false;
});

Hooks.once("shutdown", () => {
  if (TICKER) window.clearInterval(TICKER);
  TICKER = null;
});
