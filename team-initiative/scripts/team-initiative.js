const MODULE_ID = "team-initiative";

/**
 * disposition: secret=-2, hostile=-1, neutral=0, friendly=1
 * we also treat friendly + hasPlayerOwner as "player" team (virtual disposition 2)
 */
const TEAMS_DEFAULT = ["player", "friendly", "neutral", "enemy", "secret"];
const TEAM_TIEBREAK = { player: 5, friendly: 4, neutral: 3, enemy: 2, secret: 1 };

// GM-side mutex so team order only computes once even if many initiatives update at once
const ORDER_MUTEX = new Set();

// local (per-client) dialog state so the chooser opens once per choose phase
let _chooserDialog = null;
let _chooserKey = null; // `${combatId}:${chooseSeq}`

// local (per-client) memory so renderCombatTracker doesn't reopen the chooser repeatedly
const LAST_SHOWN_SEQ = new Map(); // combatId -> last chooseSeq shown

// -------------------- helpers --------------------

function asElement(html) {
  if (!html) return null;
  if (html instanceof HTMLElement) return html;
  if (Array.isArray(html) && html[0] instanceof HTMLElement) return html[0];
  if (html[0] instanceof HTMLElement) return html[0];
  return null;
}

function combatantsArray(combat) {
  return combat?.combatants?.contents ?? [];
}

function getFlag(doc, key, fallback = null) {
  return doc?.flags?.[MODULE_ID]?.[key] ?? fallback;
}

async function updateFlags(doc, data, options = {}) {
  const update = {};
  for (const [k, v] of Object.entries(data)) update[`flags.${MODULE_ID}.${k}`] = v;
  return doc.update(update, { diff: false, teamInitiative: true, ...options });
}

async function updateCombatantFlags(combat, updates) {
  if (!updates?.length) return;
  return combat.updateEmbeddedDocuments("Combatant", updates, { diff: false });
}

function notifyChat(content) {
  return ChatMessage.create({ speaker: { alias: "Team Initiative" }, content });
}

function getDisposition(combatant) {
  const tokenDisp =
    combatant?.token?.disposition ??
    combatant?.actor?.prototypeToken?.disposition ??
    CONST.TOKEN_DISPOSITIONS.HOSTILE;

  // Friendly + player-owned => "player" team
  if (tokenDisp === CONST.TOKEN_DISPOSITIONS.FRIENDLY && combatant?.hasPlayerOwner) return 2;
  return tokenDisp;
}

function getTeamKey(combatant) {
  switch (getDisposition(combatant)) {
    case 2: return "player";
    case 1: return "friendly";
    case 0: return "neutral";
    case -1: return "enemy";
    case -2: return "secret";
    default: return "enemy";
  }
}

function hasActed(combatant) {
  return !!getFlag(combatant, "acted", false);
}

function choosePhase(combat) {
  return !!getFlag(combat, "choosePhase", false);
}

function chooseSeq(combat) {
  return Number(getFlag(combat, "chooseSeq", 0)) || 0;
}

function currentTeam(combat) {
  return getFlag(combat, "currentTeam", null);
}

function teamOrder(combat) {
  return getFlag(combat, "teamOrder", null);
}

function streak(combat) {
  return Number(getFlag(combat, "streak", 0)) || 0;
}

function relevantCombatants(combat) {
  return combatantsArray(combat).filter(c => !(combat.settings?.skipDefeated && c.isDefeated));
}

function groupByTeam(combat) {
  const groups = { player: [], friendly: [], neutral: [], enemy: [], secret: [] };
  for (const c of relevantCombatants(combat)) groups[getTeamKey(c)].push(c);
  return groups;
}

function highestInitiative(combatants) {
  let best = null;
  for (const c of combatants) {
    if (c.initiative == null) continue;
    if (best == null || c.initiative > best) best = c.initiative;
  }
  return best;
}

function unacted(combat, teamKey) {
  const groups = groupByTeam(combat);
  return (groups[teamKey] ?? []).filter(c => !hasActed(c));
}

function teamFinished(combat, teamKey) {
  return unacted(combat, teamKey).length === 0;
}

function allTeamsFinished(combat, order) {
  return (order ?? []).every(t => teamFinished(combat, t));
}

function userCanChooseFromTeam(combat, teamKey) {
  if (!combat?.started) return false;
  if (game.user.isGM) return true;

  // allow players to choose if they own any unacted actor on that team
  const choices = unacted(combat, teamKey);
  return choices.some(c => c.actor?.isOwner || c.actor?.testUserPermission?.(game.user, "OWNER"));
}

// -------------------- chooser dialog --------------------

function closeChooser() {
  try { _chooserDialog?.close(); } catch (e) {}
  _chooserDialog = null;
  _chooserKey = null;
}

function showChooser(combat, teamKey) {
  if (!combat?.started) return;
  if (!teamKey) return;
  if (!choosePhase(combat)) return;

  if (!userCanChooseFromTeam(combat, teamKey)) return;

  const seq = chooseSeq(combat);
  const key = `${combat.id}:${seq}`;

  // prevent spam re-opening
  if (_chooserDialog && _chooserKey === key) return;

  closeChooser();

  const choices = unacted(combat, teamKey);
  if (!choices.length) return;

  choices.sort((a, b) => {
    const ai = a.initiative ?? -999999;
    const bi = b.initiative ?? -999999;
    if (bi !== ai) return bi - ai;
    return (a.name ?? "").localeCompare(b.name ?? "");
  });

  const content = `
    <div class="ti-chooser">
      <p><b>${teamKey.toUpperCase()}</b> team: choose who goes next</p>
      <div class="ti-chooser-list">
        ${choices.map(c => `
          <button type="button" data-combatant-id="${c.id}">
            ${c.name} <span class="ti-muted">(Init ${c.initiative ?? "?"})</span>
          </button>
        `).join("")}
      </div>
      <p class="ti-muted" style="margin-top:8px;">Tip: you can also use the green Activate button in the tracker.</p>
    </div>
  `;

  // NOTE: Foundry v13 warns Dialog is V1; it's just a warning.
  const dlg = new Dialog({
    title: "Team Initiative",
    content,
    buttons: { close: { label: "Close" } },
    render: (html) => {
      const root = asElement(html);
      root?.querySelectorAll("button[data-combatant-id]")?.forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.dataset.combatantId;
          requestActivate(combat, id);
          closeChooser();
        });
      });
    },
    close: () => {
      _chooserDialog = null;
      _chooserKey = null;
    }
  }, { width: 380 });

  _chooserDialog = dlg;
  _chooserKey = key;
  dlg.render(true);
}

function promptTeamToChoose(combat, teamKey) {
  // show locally (and also from render hook once per chooseSeq)
  showChooser(combat, teamKey);

  // ask all clients to attempt opening (only those who can choose will actually see it)
  if (game.user.isGM) {
    game.socket.emit(`module.${MODULE_ID}`, {
      action: "prompt",
      combatId: combat.id,
      team: teamKey
    });
  }
}

// -------------------- GM actions (activate/end/roll) --------------------

function requestActivate(combat, combatantId) {
  if (game.user.isGM) return activateCombatant(combat, combatantId);
  return game.socket.emit(`module.${MODULE_ID}`, {
    action: "activate",
    combatId: combat.id,
    combatantId
  });
}

function requestEndTurn(combat) {
  if (game.user.isGM) return endTurn(combat);
  return game.socket.emit(`module.${MODULE_ID}`, { action: "endTurn", combatId: combat.id });
}

async function activateCombatant(combat, combatantId) {
  const c = combat?.combatants?.get(combatantId);
  if (!combat || !c) return;

  const ct = currentTeam(combat);
  if (!ct) return ui.notifications.warn("No team order yet. Roll initiative for everyone first.");
  if (!choosePhase(combat)) return ui.notifications.warn("End the current turn first.");

  const team = getTeamKey(c);
  if (team !== ct) return ui.notifications.warn("Not that team's turn.");
  if (hasActed(c)) return ui.notifications.warn("That combatant already acted this round.");

  const idx = combat.turns.findIndex(x => x.id === combatantId);
  if (idx < 0) return;

  closeChooser();

  // one update: set turn + leave choose phase
  await combat.update({
    turn: idx,
    [`flags.${MODULE_ID}.choosePhase`]: false
  }, { diff: false, teamInitiative: true });
}

async function endTurn(combat) {
  if (!combat) return;

  const active = combat.combatant;
  if (!active) return; // if another module somehow nulls it, just bail

  // mark acted
  await active.update({ [`flags.${MODULE_ID}.acted`]: true }, { diff: false });

  const order = teamOrder(combat) ?? [];
  const ct = currentTeam(combat);
  if (!ct || !order.length) return;

  // streak handling
  const maxConsecutive = game.settings.get(MODULE_ID, "maxConsecutive") ?? 999;
  const nextStreak = streak(combat) + 1;

  // decide whether to switch teams
  const mustSwitch = teamFinished(combat, ct) || nextStreak >= maxConsecutive;

  // compute next team (or stay)
  let nextTeam = ct;
  if (mustSwitch) {
    // reset streak on switch
    const startIndex = Math.max(0, order.indexOf(ct));
    nextTeam = null;

    for (let i = 1; i <= order.length; i++) {
      const candidate = order[(startIndex + i) % order.length];
      if (!teamFinished(combat, candidate)) {
        nextTeam = candidate;
        break;
      }
    }

    if (!nextTeam || allTeamsFinished(combat, order)) {
      await advanceRound(combat);
      return;
    }
  }

  // enter choose phase (single combat update; increments chooseSeq so dialog opens only once)
  const newSeq = chooseSeq(combat) + 1;
  await combat.update({
    [`flags.${MODULE_ID}.choosePhase`]: true,
    [`flags.${MODULE_ID}.chooseSeq`]: newSeq,
    [`flags.${MODULE_ID}.currentTeam`]: nextTeam,
    [`flags.${MODULE_ID}.streak`]: mustSwitch ? 0 : nextStreak
  }, { diff: false, teamInitiative: true });

  await notifyChat(`Now it's <b>${nextTeam.toUpperCase()}</b> team. Choose who acts.`);
  promptTeamToChoose(combat, nextTeam);
}

async function rollAllInitiative(combat) {
  if (!combat) return;
  const formula = game.settings.get(MODULE_ID, "initiativeFormula") || "1d20";

  const updates = [];
  for (const c of relevantCombatants(combat)) {
    const roll = await (new Roll(formula, c.actor?.getRollData?.() ?? {})).evaluate({ async: true });
    updates.push({ _id: c.id, initiative: roll.total });
  }
  if (updates.length) await combat.updateEmbeddedDocuments("Combatant", updates);
}

// -------------------- initiative -> team order --------------------

async function determineTeamOrder(combat) {
  const groups = groupByTeam(combat);

  const presentTeams = TEAMS_DEFAULT.filter(t => groups[t].length > 0);
  const scored = presentTeams.map(t => ({
    team: t,
    score: highestInitiative(groups[t]) ?? -999999
  }));

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return TEAM_TIEBREAK[b.team] - TEAM_TIEBREAK[a.team];
  });

  const order = scored.map(s => s.team);
  const first = order[0] ?? null;

  const newSeq = chooseSeq(combat) + 1;

  await combat.update({
    [`flags.${MODULE_ID}.teamOrder`]: order,
    [`flags.${MODULE_ID}.currentTeam`]: first,
    [`flags.${MODULE_ID}.streak`]: 0,
    [`flags.${MODULE_ID}.choosePhase`]: true,
    [`flags.${MODULE_ID}.chooseSeq`]: newSeq
  }, { diff: false, teamInitiative: true });

  closeChooser();

  if (first) {
    await notifyChat(`<b>${first.toUpperCase()}</b> team goes first. Choose who acts.`);
    promptTeamToChoose(combat, first);
  }

  return order;
}

async function maybeDetermineTeamOrder(combat) {
  if (!game.user.isGM) return;
  if (!combat?.started) return;

  // already set
  if (currentTeam(combat)) return;

  // lock (avoid multi-calls when many initiatives update at once)
  if (ORDER_MUTEX.has(combat.id)) return;

  const relevant = relevantCombatants(combat);
  const allRolled = relevant.length > 0 && relevant.every(c => c.initiative != null);
  if (!allRolled) return;

  ORDER_MUTEX.add(combat.id);
  try {
    // double-check after lock
    if (!currentTeam(combat)) await determineTeamOrder(combat);
  } finally {
    ORDER_MUTEX.delete(combat.id);
  }
}

// -------------------- round advance --------------------

async function resetActedFlags(combat) {
  const updates = combatantsArray(combat).map(c => ({
    _id: c.id,
    [`flags.${MODULE_ID}.acted`]: false
  }));
  await updateCombatantFlags(combat, updates);
}

async function clearInitiative(combat) {
  const updates = combatantsArray(combat).map(c => ({ _id: c.id, initiative: null }));
  await updateCombatantFlags(combat, updates);
}

async function advanceRound(combat) {
  if (!game.user.isGM) return;

  const next = (combat.round ?? 0) + 1;

  await resetActedFlags(combat);
  await clearInitiative(combat);

  await combat.update({
    round: next,
    [`flags.${MODULE_ID}.teamOrder`]: null,
    [`flags.${MODULE_ID}.currentTeam`]: null,
    [`flags.${MODULE_ID}.streak`]: 0,
    [`flags.${MODULE_ID}.choosePhase`]: false,
    [`flags.${MODULE_ID}.chooseSeq`]: chooseSeq(combat) + 1
  }, { diff: false, teamInitiative: true });

  closeChooser();
  await notifyChat(`<h3>Round ${next}</h3><p>Re-roll initiative for everyone.</p>`);
  ui.notifications.info("Round advanced. Re-roll initiative for everyone.");
}

// -------------------- tracker visuals --------------------

function groupTrackerDisplay(root, combat) {
  const list = root.querySelector("ol.combatants");
  if (!list) return;

  // map existing LI nodes by combatant id
  const liById = new Map();
  for (const li of list.querySelectorAll("li.combatant[data-combatant-id]")) {
    liById.set(li.dataset.combatantId, li);
  }

  const groups = groupByTeam(combat);

  // Display teams in teamOrder if known, otherwise default
  const order = teamOrder(combat);
  const displayTeams = (order?.length ? order : TEAMS_DEFAULT)
    .filter(t => (groups[t] ?? []).length > 0);

  list.replaceChildren();

  for (const t of displayTeams) {
    const members = groups[t] ?? [];
    members.sort((a, b) => {
      const ai = a.initiative ?? -999999;
      const bi = b.initiative ?? -999999;
      if (bi !== ai) return bi - ai;
      return (a.name ?? "").localeCompare(b.name ?? "");
    });

    const header = document.createElement("li");
    header.className = `ti-team-header team-${t}`;
    header.textContent = t.toUpperCase();
    if (currentTeam(combat) === t) header.classList.add("is-current");
    list.appendChild(header);

    for (const c of members) {
      const li = liById.get(c.id);
      if (li) list.appendChild(li);
    }
  }
}

function ensureChooserOncePerSeq(combat) {
  if (!combat?.started) return;
  const ct = currentTeam(combat);
  if (!ct) return;
  if (!choosePhase(combat)) return;

  const seq = chooseSeq(combat);
  const last = LAST_SHOWN_SEQ.get(combat.id) ?? -1;

  if (seq === last) return;

  // mark as shown (even if user can't choose; avoids spam attempts)
  LAST_SHOWN_SEQ.set(combat.id, seq);

  showChooser(combat, ct);
}

// -------------------- Hooks --------------------

Hooks.once("init", () => {
  game.settings.register(MODULE_ID, "initiativeFormula", {
    name: "Initiative Formula",
    hint: "Dice formula for initiative (e.g. 1d20 or 1d20+@abilities.dex.mod)",
    scope: "world",
    config: true,
    type: String,
    default: "1d20"
  });

  game.settings.register(MODULE_ID, "maxConsecutive", {
    name: "Max Consecutive Activations Per Team",
    hint: "1 = alternate every activation. 2 = switch every two. 999 = team goes until finished.",
    scope: "world",
    config: true,
    type: Number,
    default: 999
  });
});

Hooks.once("ready", () => {
  const m = game.modules.get(MODULE_ID);
  if (m) m.api = { activateCombatant, endTurn, rollAllInitiative };

  game.socket?.on(`module.${MODULE_ID}`, async (data) => {
    const combat = game.combats?.get(data.combatId);
    if (!combat) return;

    // clients: prompt to open chooser (only opens if allowed + once per chooseSeq)
    if (data.action === "prompt") {
      ensureChooserOncePerSeq(combat);
      return;
    }

    // GM executes player requests
    if (!game.user.isGM) return;

    if (data.action === "activate") return activateCombatant(combat, data.combatantId);
    if (data.action === "endTurn") return endTurn(combat);
    if (data.action === "rollAll") return rollAllInitiative(combat);
  });
});

Hooks.on("combatStart", async (combat) => {
  if (!game.user.isGM) return;

  // reset acted + flags for a clean start, but DO NOT clear initiatives (so rolling before start still works)
  await resetActedFlags(combat);
  await combat.update({
    [`flags.${MODULE_ID}.teamOrder`]: null,
    [`flags.${MODULE_ID}.currentTeam`]: null,
    [`flags.${MODULE_ID}.streak`]: 0,
    [`flags.${MODULE_ID}.choosePhase`]: false,
    [`flags.${MODULE_ID}.chooseSeq`]: (chooseSeq(combat) + 1)
  }, { diff: false, teamInitiative: true });

  closeChooser();
  await notifyChat("Combat started. Roll initiative for everyone.");

  // IMPORTANT FIX: if initiatives were rolled before combat started, compute immediately
  await maybeDetermineTeamOrder(combat);
});

Hooks.on("updateCombatant", async (combatant, changed) => {
  if (!game.user.isGM) return;
  if (!("initiative" in changed)) return;

  const combat = combatant.combat;
  if (!combat?.started) return;

  await maybeDetermineTeamOrder(combat);
});

// Close chooser when leaving choose phase (local)
Hooks.on("updateCombat", (combat, changed) => {
  if (!combat?.started) return;
  if (changed?.flags?.[MODULE_ID] && ("choosePhase" in changed.flags[MODULE_ID])) {
    const cp = getFlag(combat, "choosePhase", false);
    if (!cp) closeChooser();
  }
});

Hooks.on("renderCombatTracker", (app, html) => {
  const root = asElement(html);
  if (!root) return;

  root.classList.add("team-initiative");

  const combat = app.viewed ?? game.combat;
  if (!combat) return;

  // indicator
  root.querySelectorAll(".team-initiative-indicator").forEach(e => e.remove());

  const ct = currentTeam(combat);
  if (combat.started && ct) {
    const indicator = document.createElement("div");
    indicator.className = `team-initiative-indicator team-${ct}`;
    indicator.textContent = choosePhase(combat)
      ? `${ct.toUpperCase()} team choosing next actor`
      : `${ct.toUpperCase()} team acting`;

    const anchor = root.querySelector("header.combat-tracker-header") ?? root.querySelector(".directory-header");
    if (anchor) anchor.insertAdjacentElement("afterend", indicator);
  }

  // per-combatant buttons/classes
  for (const li of root.querySelectorAll("li.combatant[data-combatant-id]")) {
    const id = li.dataset.combatantId;
    const c = combat.combatants.get(id);
    if (!c) continue;

    const team = getTeamKey(c);
    li.classList.add(`team-${team}`);
    li.classList.toggle("has-acted", hasActed(c));

    const canActivate = combat.started && choosePhase(combat) && ct && team === ct && !hasActed(c);
    li.classList.toggle("can-activate", !!canActivate);

    const controls = li.querySelector(".combatant-controls");
    if (!controls) continue;

    controls.querySelectorAll('[data-ti="activate"], [data-ti="endturn"]').forEach(e => e.remove());

    if (canActivate) {
      const a = document.createElement("a");
      a.dataset.ti = "activate";
      a.className = "combatant-control";
      a.title = "Activate";
      a.innerHTML = `<i class="fas fa-play"></i>`;
      a.addEventListener("click", (ev) => {
        ev.stopPropagation();
        requestActivate(combat, id);
      });
      controls.prepend(a);
    }

    if (!choosePhase(combat) && combat.combatant?.id === id) {
      const a = document.createElement("a");
      a.dataset.ti = "endturn";
      a.className = "combatant-control";
      a.title = "End Turn";
      a.innerHTML = `<i class="fas fa-stop"></i>`;
      a.addEventListener("click", (ev) => {
        ev.stopPropagation();
        requestEndTurn(combat);
      });
      controls.prepend(a);
    }
  }

  // group display
  groupTrackerDisplay(root, combat);

  // open chooser once per chooseSeq (prevents spam)
  ensureChooserOncePerSeq(combat);

  // GM roll-all button
  if (game.user.isGM && combat.started) {
    const nav = root.querySelector("nav.encounter-controls");
    if (nav && !nav.querySelector('[data-ti="rollall"]')) {
      const a = document.createElement("a");
      a.dataset.ti = "rollall";
      a.className = "combat-control";
      a.title = "Roll Initiative For All";
      a.innerHTML = `<i class="fas fa-dice-d20"></i>`;
      a.addEventListener("click", (ev) => {
        ev.preventDefault();
        rollAllInitiative(combat);
      });
      nav.prepend(a);
    }
  }
});

// If someone hits Next Turn during choose phase, block skipping and just show chooser once.
let _lastWarn = 0;
Hooks.on("preUpdateCombat", (combat, changed, options) => {
  if (!combat?.started) return true;
  if (options?.teamInitiative) return true;
  if (!("turn" in changed)) return true;

  const ct = currentTeam(combat);
  if (!ct) return true; // before team order exists, don't interfere

  if (choosePhase(combat)) {
    const now = Date.now();
    if (now - _lastWarn > 1000) {
      _lastWarn = now;
      ui.notifications.warn("Choose the next actor (Activate button / chooser).");
    }
    ensureChooserOncePerSeq(combat);
    return false;
  }

  // If not in choose phase, allow normal turn changes (or let other modules handle)
  return true;
});