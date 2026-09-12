const MODULE_ID = "active-time-battle";
const FLAG = `flags.${MODULE_ID}`;
const READY = 100;
const DEFAULT_TICK_MS = 1000;

let TICKER = null;
let TIMER_TICKER = null;
let TRACKER_REFRESH_FRAME = null;
let TRACKER_REFRESH_COMBAT = null;
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

async function updateManyCombatants(combat, updates, options = {}) {
  if (!updates?.length) return null;
  return combat.updateEmbeddedDocuments("Combatant", updates, { diff: false, activeTimeBattle: true, ...options });
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

function turnOrderIndex(combat, combatant) {
  const idx = combat?.turns?.findIndex?.(t => t.id === combatant?.id);
  return idx >= 0 ? idx : Number.MAX_SAFE_INTEGER;
}

function readyCombatants(combat) {
  return eligibleCombatants(combat)
    .filter(c => atbOf(c) >= READY && c.id !== activeId(combat))
    .sort((a, b) => {
      const overflow = atbOf(b) - atbOf(a);
      if (Math.abs(overflow) > 0.01) return overflow;
      const init = initiativeOf(b) - initiativeOf(a);
      if (init) return init;
      const turnOrder = turnOrderIndex(combat, a) - turnOrderIndex(combat, b);
      if (turnOrder) return turnOrder;
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

function foundryPaused() {
  return !!game.paused;
}

function clockPaused(combat) {
  return isPaused(combat) || foundryPaused();
}

function pauseOnPlayerTurn(combatant) {
  return !!(combatant && playerOwned(combatant) && setting("pauseOnPlayerTurns"));
}

function pauseOnNpcTurn(combatant) {
  return !!(combatant && !playerOwned(combatant) && setting("pauseOnNpcTurns"));
}

function activeElapsed(combat) {
  return Number(getFlag(combat, "activeElapsed", 0)) || 0;
}

function activeTimerRuns(combat, active = null, options = {}) {
  if (!active) return false;
  if (!options.ignoreManualPause && isPaused(combat)) return false;
  if (!options.ignoreFoundryPause && foundryPaused()) return false;
  if (pauseOnNpcTurn(active)) return false;
  return true;
}

function currentActiveElapsed(combat, active = null, stamp = now(), options = {}) {
  const c = active || (activeId(combat) ? combat.combatants?.get(activeId(combat)) : null);
  if (!c) return 0;
  const base = activeElapsed(combat);
  const anchor = Number(getFlag(combat, "lastTick", activeSince(combat) || stamp)) || activeSince(combat) || stamp;
  if (!activeTimerRuns(combat, c, options)) return base;
  return base + Math.max(0, (stamp - anchor) / 1000);
}

function shouldTickGauges(combat, active = null) {
  if (clockPaused(combat)) return false;
  if (!activeId(combat)) return true;
  if (!active) return true;
  if (setting("waitMode")) return false;
  if (pauseOnNpcTurn(active)) return false;
  if (pauseOnPlayerTurn(active)) return false;
  return true;
}

function largeEncounterCompactAt() {
  return Math.max(0, Number(setting("largeEncounterCompactAt")) || 0);
}

function largeEncounter(combat) {
  const threshold = largeEncounterCompactAt();
  return !!(threshold && eligibleCombatants(combat).length >= threshold);
}

function turnSecondsFor(combatant) {
  const key = playerOwned(combatant) ? "playerActionSeconds" : "npcActionSeconds";
  const fallback = playerOwned(combatant) ? 300 : Number(setting("actionSeconds")) || 90;
  const floor = playerOwned(combatant) ? 30 : 5;
  return Math.max(floor, Number(setting(key)) || fallback);
}

function warningSecondsFor(combatant) {
  const key = playerOwned(combatant) ? "playerWarningSeconds" : "warningSeconds";
  const fallback = playerOwned(combatant) ? 60 : 20;
  return Math.max(0, Number(setting(key)) || fallback);
}

function fmtSeconds(seconds) {
  const total = Math.max(0, Math.ceil(seconds));
  if (total < 60) return `${total}s`;
  const minutes = Math.floor(total / 60);
  const remainder = total % 60;
  return remainder ? `${minutes}m ${remainder}s` : `${minutes}m`;
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
    activeElapsed: null,
    lastTick: now(),
    sequence: sequence(combat) + 1
  });
  await chat(`<b>Active Time Battle started.</b> Initiative now changes gauge speed; ready actors can act without waiting for the whole table.`);
  ui.combat?.render?.(true);
  return combat;
}

async function pauseAtb(combat, paused) {
  if (!isPrimaryGM()) return null;
  const stamp = now();
  const active = activeId(combat) ? combat.combatants?.get(activeId(combat)) : null;
  const data = { paused: !!paused, lastTick: stamp, sequence: sequence(combat) + 1 };
  if (active) {
    data.activeElapsed = paused
      ? currentActiveElapsed(combat, active, stamp, { ignoreManualPause: true })
      : activeElapsed(combat);
  }
  await updateCombatFlags(combat, data);
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
    activeElapsed: null,
    lastTick: now(),
    sequence: sequence(combat) + 1
  });
  refreshActiveTimers(combat);
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
    [flagPath("activeElapsed")]: 0,
    [flagPath("running")]: true,
    [flagPath("paused")]: false,
    [flagPath("lastTick")]: stamp,
    [flagPath("sequence")]: sequence(combat) + 1
  }, { diff: false, activeTimeBattle: true });

  const seconds = turnSecondsFor(c);
  const pauseText = pauseOnNpcTurn(c)
    ? " NPC turn pause is on; gauges and the NPC clock wait while the GM resolves the turn."
    : (playerOwned(c)
      ? " Player clock is live; other gauges wait unless the GM disables player-turn gauge pause."
      : " NPC clock is live because NPC turn pause is disabled.");
  await chat(`<b>${escapeHtml(combatantName(c))}</b> is active. ${fmtSeconds(seconds)} spotlight clock started.${pauseText}`);
  notifyOwners(c, `${combatantName(c)} is active — ${fmtSeconds(seconds)} to act.`);
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
  const active = activeId(combat);
  if (!active) return null;
  const id = combatantId || active;
  if (id !== active) {
    if (!options.silent) ui.notifications?.warn("That combatant is not the active ATB turn.");
    return null;
  }
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
    activeElapsed: null,
    lastTick: stamp,
    sequence: sequence(combat) + 1
  });
  refreshActiveTimers(combat);
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
      activeElapsed: null,
      lastTick: stamp,
      sequence: sequence(combat) + 1
    });
    refreshActiveTimers(combat);
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
    activeElapsed: null,
    lastTick: stamp,
    sequence: sequence(combat) + 1
  });
  refreshActiveTimers(combat);
  await chat(`<b>${escapeHtml(combatantName(combatant))}</b> timed out and delays to ${delayTo}% ATB. They will cycle back soon, but they do not stop the fight.`);
  ui.combat?.render?.(true);
}

async function tickCombat(combat) {
  if (!isPrimaryGM() || !combat?.started || !isRunning(combat)) return;
  const stamp = now();
  const lastTick = Number(getFlag(combat, "lastTick", stamp)) || stamp;
  const dt = clamp((stamp - lastTick) / 1000, 0, 5);
  if (dt <= 0.05) return;

  const active = activeId(combat) ? combat.combatants?.get(activeId(combat)) : null;
  if (clockPaused(combat)) {
    await updateCombatFlags(combat, { lastTick: stamp }, { render: false });
    scheduleTrackerRefresh(combat);
    return;
  }

  let activeElapsedNow = active ? activeElapsed(combat) : null;
  if (active && !isDefeated(combat, active)) {
    const timerRuns = activeTimerRuns(combat, active);
    activeElapsedNow += timerRuns ? dt : 0;
    const actionSeconds = turnSecondsFor(active);
    const warningSeconds = warningSecondsFor(active);
    const warned = Number(getFlag(active, "warnedAt", 0)) || 0;
    if (timerRuns && activeElapsedNow >= actionSeconds) return timeoutActiveTurn(combat, active);
    if (timerRuns && warningSeconds > 0 && activeElapsedNow >= actionSeconds - warningSeconds && !warned) {
      await updateCombatantFlags(active, { warnedAt: stamp }, { render: false });
      await chat(`<b>${escapeHtml(combatantName(active))}</b> has ${fmtSeconds(actionSeconds - activeElapsedNow)} left on their ATB turn.`);
    }
  } else if (activeId(combat)) {
    await updateCombatFlags(combat, { activeId: null, activeSince: null, activeElapsed: null, lastTick: stamp, sequence: sequence(combat) + 1 });
    scheduleTrackerRefresh(combat);
    return;
  }

  const members = eligibleCombatants(combat);
  const avg = averageInitiative(members);
  const baseSeconds = Math.max(5, Number(setting("baseReadySeconds")) || 45);
  const overflowCap = Math.max(0, Number(setting("overflowCap")) || 0);
  const gainBase = READY / baseSeconds;
  const projected = new Map();
  const updates = [];

  if (shouldTickGauges(combat, active)) {
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

  if (updates.length) await updateManyCombatants(combat, updates, { render: false });
  const combatUpdate = { lastTick: stamp };
  if (active) combatUpdate.activeElapsed = activeElapsedNow;
  else combatUpdate.activeElapsed = null;
  await updateCombatFlags(combat, combatUpdate, { render: false });
  scheduleTrackerRefresh(combat);

  if (activeId(combat)) return;
  const ready = eligibleCombatants(combat)
    .filter(c => (projected.get(c.id) ?? atbOf(c)) >= READY)
    .sort((a, b) => {
      const av = projected.get(a.id) ?? atbOf(a);
      const bv = projected.get(b.id) ?? atbOf(b);
      if (Math.abs(bv - av) > 0.01) return bv - av;
      const init = initiativeOf(b) - initiativeOf(a);
      if (init) return init;
      const turnOrder = turnOrderIndex(combat, a) - turnOrderIndex(combat, b);
      if (turnOrder) return turnOrder;
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

function activeTurnState(combat) {
  if (!combat?.started || !isRunning(combat)) return null;
  const c = activeId(combat) ? combat.combatants?.get(activeId(combat)) : null;
  if (!c) return null;
  const total = turnSecondsFor(c);
  const elapsed = currentActiveElapsed(combat, c);
  const left = Math.max(0, total - elapsed);
  const remainingPct = total > 0 ? clamp((left / total) * 100, 0, 100) : 0;
  const timerRunning = activeTimerRuns(combat, c);
  const gaugesRunning = shouldTickGauges(combat, c);
  let mode = "";
  if (foundryPaused()) mode = "Foundry pause is on: ATB gauges and active timers are stopped.";
  else if (isPaused(combat)) mode = "ATB is manually paused: gauges and active timers are stopped.";
  else if (pauseOnNpcTurn(c)) mode = "NPC/GM turn pause: gauges and the NPC timer wait until the turn ends.";
  else if (setting("waitMode")) mode = "Wait mode: other gauges wait, but the active timer is live.";
  else if (pauseOnPlayerTurn(c)) mode = "Player clock live: other gauges wait so the initiative does not pile up.";
  else if (playerOwned(c)) mode = "Player clock live: other gauges keep filling while this player decides.";
  else mode = "NPC/default clock live: other gauges keep filling.";
  return { combatant: c, total, elapsed, left, remainingPct, mode, timerRunning, gaugesRunning };
}

function renderActiveTimer(panel, combat) {
  const state = activeTurnState(combat);
  if (!state) return;
  const c = state.combatant;
  const timer = document.createElement("div");
  timer.className = `atb-active-timer${playerOwned(c) ? " player" : " npc"}${state.timerRunning ? "" : " timer-paused"}${state.gaugesRunning ? "" : " gauges-paused"}`;
  timer.dataset.combatId = combat.id;

  const row = document.createElement("div");
  row.className = "atb-active-timer-row";
  const name = document.createElement("b");
  name.dataset.atbTimerName = "";
  name.textContent = `${combatantName(c)} is active`;
  const left = document.createElement("span");
  left.dataset.atbTimerLeft = "";
  left.textContent = fmtSeconds(state.left);
  row.append(name, left);

  const bar = document.createElement("div");
  bar.className = "atb-active-countdown";
  const fill = document.createElement("span");
  fill.dataset.atbTimerBar = "";
  fill.style.width = `${state.remainingPct}%`;
  bar.appendChild(fill);

  const mode = document.createElement("small");
  mode.dataset.atbTimerMode = "";
  mode.textContent = state.mode;

  timer.append(row, bar, mode);

  if (userCanAct(c)) {
    const end = document.createElement("button");
    end.type = "button";
    end.className = "atb-active-end";
    end.textContent = game.i18n.localize("ATB.EndTurn");
    end.addEventListener("click", ev => {
      ev.preventDefault();
      ev.stopPropagation();
      request("endTurn", combat, { combatantId: c.id, clearStrikes: true });
    });
    timer.appendChild(end);
  }

  panel.appendChild(timer);
}

function refreshActiveTimers(defaultCombat = game.combat) {
  for (const timer of document.querySelectorAll(".active-time-battle .atb-active-timer")) {
    const combat = game.combats?.get?.(timer.dataset.combatId) || defaultCombat;
    const state = activeTurnState(combat);
    if (!state) {
      timer.remove();
      continue;
    }
    const c = state.combatant;
    timer.classList.toggle("player", playerOwned(c));
    timer.classList.toggle("npc", !playerOwned(c));
    timer.classList.toggle("timer-paused", !state.timerRunning);
    timer.classList.toggle("gauges-paused", !state.gaugesRunning);
    const name = timer.querySelector("[data-atb-timer-name]");
    const left = timer.querySelector("[data-atb-timer-left]");
    const bar = timer.querySelector("[data-atb-timer-bar]");
    const mode = timer.querySelector("[data-atb-timer-mode]");
    if (name) name.textContent = `${combatantName(c)} is active`;
    if (left) left.textContent = fmtSeconds(state.left);
    if (bar) bar.style.width = `${state.remainingPct}%`;
    if (mode) mode.textContent = state.mode;
  }
}

function startTimerTicker() {
  if (TIMER_TICKER) return;
  TIMER_TICKER = window.setInterval(() => refreshActiveTimers(), 500);
}

function stopTimerTicker() {
  if (TIMER_TICKER) window.clearInterval(TIMER_TICKER);
  TIMER_TICKER = null;
}

function refreshCombatTrackerDisplay(combat = game.combat) {
  if (!combat || typeof document === "undefined") return;
  for (const root of document.querySelectorAll(".active-time-battle")) {
    root.classList.remove("atb-style-bars", "atb-style-classic", "atb-style-compact");
    root.classList.add(`atb-style-${trackerStyle(combat)}`);
    root.classList.toggle("atb-large-encounter", largeEncounter(combat));
    renderTrackerPanel(root, combat);
    renderCombatantBars(root, combat);
  }
  refreshActiveTimers(combat);
}

function scheduleTrackerRefresh(combat = game.combat) {
  TRACKER_REFRESH_COMBAT = combat || TRACKER_REFRESH_COMBAT;
  if (TRACKER_REFRESH_FRAME) return;
  const raf = window.requestAnimationFrame || (fn => window.setTimeout(fn, 50));
  TRACKER_REFRESH_FRAME = raf(() => {
    TRACKER_REFRESH_FRAME = null;
    const c = TRACKER_REFRESH_COMBAT || game.combat;
    TRACKER_REFRESH_COMBAT = null;
    refreshCombatTrackerDisplay(c);
  });
}

function trackerStyle(combat = game.combat) {
  const style = setting("trackerStyle") || "bars";
  if (largeEncounter(combat)) return "compact";
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
    const turnOrder = turnOrderIndex(combat, a) - turnOrderIndex(combat, b);
    if (turnOrder) return turnOrder;
    return combatantName(a).localeCompare(combatantName(b));
  });
}

function renderQueueStrip(panel, combat) {
  const count = Math.max(0, Number(setting("queuePreview")) || 0);
  if (!isRunning(combat) || !count) return;
  const avg = averageInitiative(eligibleCombatants(combat));
  const strip = document.createElement("div");
  strip.className = "atb-queue";
  const queued = queueCombatants(combat);
  const rows = queued.slice(0, count);
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
  if (queued.length > rows.length) {
    const more = document.createElement("span");
    more.className = "atb-queue-more";
    more.textContent = `+${queued.length - rows.length} more in initiative`;
    strip.appendChild(more);
  }
  panel.appendChild(strip);
}

function trackerSummary(combat) {
  const running = isRunning(combat);
  if (!combat?.started) return "Start combat, then start ATB.";
  if (!running) return "ATB stopped. Initiative can still be rolled before start.";
  if (foundryPaused()) return "Foundry paused — ATB clock stopped.";
  if (isPaused(combat)) return "ATB paused.";
  const active = activeId(combat) ? combat.combatants?.get(activeId(combat)) : null;
  if (active) {
    const state = activeTurnState(combat);
    const gauge = state?.gaugesRunning ? "gauges moving" : "gauges paused";
    const timer = state?.timerRunning ? `${fmtSeconds(state.left)} left` : `${fmtSeconds(state?.left ?? turnSecondsFor(active))} held`;
    return `${combatantName(active)} acting · ${timer} · ${gauge}`;
  }
  const queue = readyCombatants(combat).slice(0, 3).map(combatantName).join(", ");
  const count = eligibleCombatants(combat).length;
  const large = largeEncounter(combat) ? ` · ${count} in initiative` : "";
  return queue ? `Ready: ${queue}${large}` : `Gauges filling.${large}`;
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
  const active = activeId(combat) ? combat.combatants?.get(activeId(combat)) : null;
  panel.className = `atb-panel${isRunning(combat) ? " running" : " stopped"}${clockPaused(combat) ? " paused" : ""}${foundryPaused() ? " foundry-paused" : ""}${pauseOnPlayerTurn(active) ? " player-paused" : ""}${pauseOnNpcTurn(active) ? " npc-paused" : ""}${largeEncounter(combat) ? " large" : ""}`;
  const title = document.createElement("div");
  title.className = "atb-panel-title";
  const titleText = document.createElement("b");
  titleText.textContent = "Active Time Battle";
  const summary = document.createElement("span");
  summary.textContent = trackerSummary(combat);
  title.append(titleText, summary);
  panel.appendChild(title);
  renderActiveTimer(panel, combat);
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

async function anchorFoundryPause(paused) {
  const combat = game.combat;
  if (!combat?.started || !isRunning(combat)) {
    scheduleTrackerRefresh(combat);
    return null;
  }
  if (!isPrimaryGM()) {
    scheduleTrackerRefresh(combat);
    return null;
  }
  const stamp = now();
  const active = activeId(combat) ? combat.combatants?.get(activeId(combat)) : null;
  const data = { lastTick: stamp, sequence: sequence(combat) + 1 };
  if (active) {
    data.activeElapsed = paused
      ? currentActiveElapsed(combat, active, stamp, { ignoreFoundryPause: true })
      : activeElapsed(combat);
  }
  await updateCombatFlags(combat, data, { render: false });
  scheduleTrackerRefresh(combat);
  return combat;
}

function bridgeNativeNpcTurnEnd(combat, changed = {}) {
  if (!setting("nativeNpcTurnEndBridge")) return false;
  if (!("turn" in changed)) return false;
  if (!isPrimaryGM()) return false;
  const id = activeId(combat);
  const active = id ? combat.combatants?.get(id) : null;
  if (!active || playerOwned(active)) return false;
  window.setTimeout(() => {
    if (activeId(combat) !== id) return;
    endActiveTurn(combat, id, { clearStrikes: true, silent: true, source: "nativeTurnAdvance" })
      .catch(err => console.error(`${MODULE_ID} native NPC turn bridge failed`, err));
  }, 0);
  return true;
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
    name: "Legacy/default spotlight seconds",
    hint: "Fallback used by older worlds and NPC turns if the NPC setting is unset.",
    scope: "world", config: true, type: Number, default: 90
  });
  game.settings.register(MODULE_ID, "npcActionSeconds", {
    name: "NPC spotlight seconds",
    hint: "How long a GM/NPC turn has before timeout handling fires when NPC-turn pause is disabled. With the default NPC pause, this timer is held.",
    scope: "world", config: true, type: Number, default: 90
  });
  game.settings.register(MODULE_ID, "playerActionSeconds", {
    name: "Player decision seconds",
    hint: "How long a player-owned combatant gets on their active turn. Default is 300 seconds: five minutes.",
    scope: "world", config: true, type: Number, default: 300
  });
  game.settings.register(MODULE_ID, "warningSeconds", {
    name: "NPC warning seconds",
    hint: "Warn this many seconds before an NPC/default active timeout. Set 0 to disable warnings.",
    scope: "world", config: true, type: Number, default: 20
  });
  game.settings.register(MODULE_ID, "playerWarningSeconds", {
    name: "Player warning seconds",
    hint: "Warn this many seconds before a player decision timeout. Set 0 to disable warnings.",
    scope: "world", config: true, type: Number, default: 60
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
  game.settings.register(MODULE_ID, "pauseOnPlayerTurns", {
    name: "Pause gauges on player turns",
    hint: "Default on: player-owned active turns keep the player's timer live but pause other gauges so long decisions do not load the whole initiative at once.",
    scope: "world", config: true, type: Boolean, default: true
  });
  game.settings.register(MODULE_ID, "pauseOnNpcTurns", {
    name: "Pause ATB on NPC turns",
    hint: "Default on: while an NPC/GM-controlled combatant acts, other gauges and the NPC timer wait until the GM ends the turn.",
    scope: "world", config: true, type: Boolean, default: true
  });
  game.settings.register(MODULE_ID, "nativeNpcTurnEndBridge", {
    name: "Native next-turn ends active NPC",
    hint: "Default on: if another automation advances the Foundry turn while an NPC is active, ATB translates that into End ATB Turn so automated NPCs can finish normally.",
    scope: "world", config: true, type: Boolean, default: true
  });
  game.settings.register(MODULE_ID, "waitMode", {
    name: "Wait mode",
    hint: "Full traditional pause: other gauges pause while anyone is active. Player active timers still count down unless ATB or Foundry itself is paused.",
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
    hint: "How many upcoming or READY combatants to show in the ATB panel. Large encounters show a +more count instead of flooding the tracker.",
    scope: "world", config: true, type: Number, default: 8
  });
  game.settings.register(MODULE_ID, "largeEncounterCompactAt", {
    name: "Large encounter compact threshold",
    hint: "At this many active combatants, force Compact tracker visuals and summarize overflow so 50+ person initiatives remain usable. Set 0 to disable.",
    scope: "world", config: true, type: Number, default: 50
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
    speedFactor,
    isRunning,
    activeId,
    isPrimaryGM
  };

  game.socket?.on(`module.${MODULE_ID}`, data => {
    if (!isPrimaryGM() || !data?.action) return;
    const combat = game.combats?.get(data.combatId) || game.combat;
    return gmAction(data.action, combat, data);
  });

  startTimerTicker();

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
    activeElapsed: null,
    lastTick: now(),
    sequence: sequence(combat) + 1
  });
  if (setting("autoStart")) await startAtb(combat);
});

Hooks.on("deleteCombat", () => {
  document.querySelectorAll(".active-time-battle .atb-active-timer").forEach(el => el.remove());
});

Hooks.on("pauseGame", paused => {
  anchorFoundryPause(!!paused).catch(err => console.error(`${MODULE_ID} Foundry pause anchor failed`, err));
});

Hooks.on("updateCombatant", (combatant, changed, options) => {
  if (!options?.activeTimeBattle) return;
  const moduleFlags = foundry.utils.getProperty(changed, FLAG) || {};
  if (Object.keys(moduleFlags).length) scheduleTrackerRefresh(combatant?.combat || game.combat);
});

Hooks.on("updateCombat", (combat, changed, options) => {
  if (!combat?.started) return;
  const moduleFlags = foundry.utils.getProperty(changed, FLAG) || {};
  if (options?.activeTimeBattle || ["activeId", "activeSince", "activeElapsed", "lastTick", "paused", "sequence"].some(k => k in moduleFlags)) {
    scheduleTrackerRefresh(combat);
  }
});

Hooks.on("renderCombatTracker", (app, html) => {
  const root = asElement(html);
  if (!root) return;
  const combat = app.viewed ?? game.combat;
  if (!combat) return;
  root.classList.add("active-time-battle");
  root.classList.remove("atb-style-bars", "atb-style-classic", "atb-style-compact");
  root.classList.add(`atb-style-${trackerStyle(combat)}`);
  root.classList.toggle("atb-large-encounter", largeEncounter(combat));
  renderTrackerPanel(root, combat);
  renderCombatantBars(root, combat);
  refreshActiveTimers(combat);
});

Hooks.on("preUpdateCombat", (combat, changed, options) => {
  if (options?.activeTimeBattle) return true;
  if (!combat?.started || !isRunning(combat)) return true;
  if (!("turn" in changed)) return true;
  if (bridgeNativeNpcTurnEnd(combat, changed)) return false;

  const stamp = now();
  if (stamp - LAST_RENDER_WARN > 1200) {
    LAST_RENDER_WARN = stamp;
    ui.notifications?.warn("ATB is running: use Activate and End ATB Turn so gauges, idle strikes, and laps stay in sync. Native next-turn can still end active NPCs when that bridge setting is on.");
  }
  return false;
});

Hooks.once("shutdown", () => {
  if (TICKER) window.clearInterval(TICKER);
  TICKER = null;
  stopTimerTicker();
});
