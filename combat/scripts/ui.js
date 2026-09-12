/**
 * ui.js
 * Combat Tracker UI controls:
 *  - Toggle button for enabling/disabling NPC automation
 *  - Active-state indicator pip on the current combatant row
 *
 * Uses Foundry v13 Application V2 patterns where relevant.
 * The combat tracker itself is rendered by core; we inject minimally via
 * the renderCombatTracker hook to avoid brittle DOM hacks.
 */

import { getSetting, setSetting, SETTINGS } from "./settings.js";
import { MODULE_ID } from "./constants.js";

const L = (key) => game.i18n.localize(key);
const F = (key, data) => game.i18n.format(key, data);
import { log } from "./utils.js";
import { ARCHETYPES } from "./archetypes.js";
import { inferAndCacheAiProfile, getCachedAiProfile } from "./ai-inference.js";
import { takeSnapshot, hasSnapshot, clearSnapshot, restoreSnapshot } from "./snapshot.js";
import { getOverrideFlag, getBehaviorFlag, getUsableItems } from "./multiattack-override.js";

// ─── Public API ───────────────────────────────────────────────────────────────

// Re-export snapshot utilities so main.js can wire them into hooks and the
// global API without importing snapshot.js directly (avoiding duplicate imports).
export { takeSnapshot, hasSnapshot, clearSnapshot, restoreSnapshot };

/**
 * Register all UI hooks. Called once during module initialisation.
 */
export function registerUIHooks() {
  // Inject toggle button whenever the combat tracker renders
  Hooks.on("renderCombatTracker", _onRenderCombatTracker);
  // Inject AI Profile tab into NPC actor sheets
  registerAiTabHooks();
}

/**
 * Returns the current automation enabled state.
 * @returns {boolean}
 */
export function isAutomationActive() {
  try {
    return getSetting(SETTINGS.AUTOMATION_ACTIVE);
  } catch {
    return false;
  }
}

/**
 * Set automation state and refresh the combat tracker.
 * @param {boolean} active
 */
export async function setAutomationActive(active) {
  await setSetting(SETTINGS.AUTOMATION_ACTIVE, active);
  log(`Automation ${active ? "enabled" : "disabled"} by GM.`);
  ui.combat?.render(false); // re-render the combat tracker to update button state
}

// ─── Hook handler ─────────────────────────────────────────────────────────────

/**
 * Inject the automation toggle button into the combat tracker header controls.
 * Also injects the "Undo NPC Block" button when a snapshot is available,
 * and the "▶ Force Automate" button on the active NPC combatant row.
 * Only shown to GMs.
 *
 * @param {CombatTracker} app   - The CombatTracker Application instance.
 * @param {jQuery}        html  - The rendered jQuery HTML.
 */
function _onRenderCombatTracker(app, html) {
  if (!game.user.isGM) return;

  const active = isAutomationActive();
  const combat = game.combat;

  const root = html instanceof jQuery ? html[0] : html;

  // ── Automation toggle button ─────────────────────────────────────────────
  const btn = document.createElement("a");
  btn.classList.add("combat-control", "nca-toggle-btn");
  if (active) btn.classList.add("active");
  btn.setAttribute("data-tooltip", game.i18n.localize("NCA.UI.ToggleButton"));
  btn.setAttribute("aria-label", game.i18n.localize("NCA.UI.ToggleButton"));
  btn.setAttribute("role", "button");
  btn.title = active
    ? game.i18n.localize("NCA.UI.AutomationEnabled")
    : game.i18n.localize("NCA.UI.AutomationDisabled");

  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-robot");
  btn.appendChild(icon);

  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    await setAutomationActive(!isAutomationActive());
  });

  // ── Undo NPC Block button ─────────────────────────────────────────────────
  // Only shown when a snapshot exists for this combat.
  let undoBtn = null;
  if (combat && hasSnapshot(combat)) {
    undoBtn = document.createElement("a");
    undoBtn.classList.add("combat-control", "nca-undo-btn");
    undoBtn.setAttribute("data-tooltip", game.i18n.localize("NCA.UI.UndoNPCBlock"));
    undoBtn.setAttribute("aria-label", game.i18n.localize("NCA.UI.UndoNPCBlock"));
    undoBtn.setAttribute("role", "button");
    undoBtn.title = game.i18n.localize("NCA.UI.UndoNPCBlock");
    undoBtn.innerHTML = `<i class="fas fa-undo"></i>`;

    undoBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      if (combat) await restoreSnapshot(combat);
    });
  }

  // Find the combat tracker header controls bar
  const headerNav = root.querySelector(".encounter-controls, nav.encounters, .combat-tracker-header");

  if (headerNav) {
    headerNav.appendChild(btn);
    if (undoBtn) headerNav.appendChild(undoBtn);
  } else {
    root?.appendChild?.(btn);
    if (undoBtn) root?.appendChild?.(undoBtn);
  }

  // ── Active-turn pip ─────────────────────────────────────────────────────
  _injectActivePip(html, active);

  // ── Force Automate button on active NPC row ──────────────────────────────
  if (combat) _injectForceAutomateButton(root, combat);
}

/**
 * Place a small animated pip next to the active combatant's name
 * to indicate their turn is being automated.
 *
 * @param {jQuery|HTMLElement} html
 * @param {boolean}            automationActive
 */
function _injectActivePip(html, automationActive) {
  if (!automationActive) return;

  const root = html instanceof jQuery ? html[0] : html;
  const activeLi = root?.querySelector?.("li.active");
  if (!activeLi) return;

  // Don't duplicate
  if (activeLi.querySelector(".nca-active-pip")) return;

  // Only pip NPC combatants
  const combatantId = activeLi.dataset?.combatantId;
  if (!combatantId) return;

  const combatant = game.combat?.combatants.get(combatantId);
  if (!combatant) return;

  // Skip player-owned tokens
  if (combatant.actor?.hasPlayerOwner) return;

  const pip = document.createElement("span");
  pip.classList.add("nca-active-pip");
  pip.title = "NPC turn being automated";

  const nameEl = activeLi.querySelector(".token-name, .combatant-name");
  if (nameEl) nameEl.appendChild(pip);
}

/**
 * Inject a "▶ Force Automate" button onto every visible NPC combatant row.
 * Clicking it runs that combatant's turn immediately, bypassing all gate
 * checks (CR limit, automation-off, enabledByDefault) while preserving safety
 * guards (0 HP, player-character block, token-on-canvas).
 *
 * The button is GM-only and NPC-only; player-character rows are skipped.
 *
 * @param {HTMLElement} root   - The combat tracker root element.
 * @param {Combat}      combat
 */
function _injectForceAutomateButton(root, combat) {
  // Lazily import the force-automate function to avoid circular imports.
  // We use a closure so the import promise is shared across rows.
  const getForceAutomate = (() => {
    let cached = null;
    return async () => {
      if (!cached) {
        const mod = await import("./automation.js");
        cached = mod.forceAutomateTurn;
      }
      return cached;
    };
  })();

  const rows = root.querySelectorAll("li.combatant");
  for (const li of rows) {
    const combatantId = li.dataset?.combatantId;
    if (!combatantId) continue;

    const combatant = combat.combatants.get(combatantId);
    if (!combatant) continue;

    // NPC-only: skip player characters and player-owned actors
    const actor = combatant.actor;
    if (!actor || actor.type === "character" || actor.hasPlayerOwner) continue;

    // Don't duplicate
    if (li.querySelector(".nca-force-btn")) continue;

    // Defeated combatants: still show button but disable it
    const defeated = combatant.defeated || (actor.system?.attributes?.hp?.value ?? 1) <= 0;

    const forceBtn = document.createElement("a");
    forceBtn.classList.add("combatant-control", "nca-force-btn");
    if (defeated) forceBtn.classList.add("nca-force-btn--defeated");
    forceBtn.setAttribute("data-tooltip", game.i18n.localize("NCA.UI.ForceAutomate"));
    forceBtn.setAttribute("aria-label", game.i18n.localize("NCA.UI.ForceAutomate"));
    forceBtn.setAttribute("role", "button");
    forceBtn.title = game.i18n.localize("NCA.UI.ForceAutomate");
    forceBtn.innerHTML = `<i class="fas fa-play-circle"></i>`;

    if (!defeated) {
      forceBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const forceAutomateTurn = await getForceAutomate();
        log(`Force Automate clicked for ${combatant.name}`);
        try {
          await forceAutomateTurn(combatant, combat);
        } catch (err) {
          console.error(`[NCA] Force automate failed for ${combatant.name}:`, err);
          ui.notifications.error(F("NCA.Notify.ForceAutomateFailed", { name: combatant.name }));
        }
      });
    }

    // Insert before the existing controls (initiative, etc.) or append
    const controls = li.querySelector(".combatant-controls");
    if (controls) {
      controls.insertBefore(forceBtn, controls.firstChild);
    } else {
      li.appendChild(forceBtn);
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// AI PROFILE TAB — NPC Actor Sheet Integration
// ═══════════════════════════════════════════════════════════════════════════════



/**
 * Register all actor-sheet hooks for the AI Profile tab.
 * Called from registerUIHooks().
 */
export function registerAiTabHooks() {
  Hooks.on("renderActorSheet", _onRenderActorSheet);
  Hooks.on("renderActorSheetV2", _onRenderActorSheet);

  // When items are added/removed (e.g. imported from a compendium), Foundry
  // re-renders the sheet but may do so before the old injected DOM is torn
  // down — causing the duplicate-guard to block re-injection on the new DOM.
  // We track a set of actor IDs that need a forced re-injection on the next
  // renderActorSheet call, bypassing the duplicate guard just once.
  Hooks.on("createItem", (item) => {
    if (item.parent?.type === "npc") _flagActorForReinjection(item.parent.id);
  });
  Hooks.on("deleteItem", (item) => {
    if (item.parent?.type === "npc") _flagActorForReinjection(item.parent.id);
  });
}

// Track actor IDs that must bypass the duplicate-injection guard once.
// Populated when items are added/removed so the tab is re-injected after
// Foundry re-renders the sheet following a compendium import.
const _reinjectionPending = new Set();

function _flagActorForReinjection(actorId) {
  _reinjectionPending.add(actorId);
}

const ARCHETYPE_GROUPS = {
  "Aggressive": ["berserker", "brute", "zealot", "fearless", "sadistic"],
  "Cautious":   ["coward", "cautious", "defensive"],
  "Tactical":   ["disciplined", "tactician", "guardian", "bodyguard"],
  "Ranged":     ["skirmisher", "sniper", "artillery"],
  "Predatory":  ["predator", "hunter", "beast-instinctive"],
  "Pack":       ["pack-hunter", "pack-flanker", "hive-minded"],
  "Stealth":    ["opportunist", "assassin", "ambusher"],
  "Special":    ["territorial", "undead-mindless", "undead-disciplined", "mob-walker", "panicked"],
};

const ARCHETYPE_LABELS = {
  "berserker":         "NCA.Archetype.berserker",
  "brute":             "NCA.Archetype.brute",
  "zealot":            "NCA.Archetype.zealot",
  "fearless":          "NCA.Archetype.fearless",
  "sadistic":          "NCA.Archetype.sadistic",
  "coward":            "NCA.Archetype.coward",
  "cautious":          "NCA.Archetype.cautious",
  "defensive":         "NCA.Archetype.defensive",
  "disciplined":       "NCA.Archetype.disciplined",
  "tactician":         "NCA.Archetype.tactician",
  "guardian":          "NCA.Archetype.guardian",
  "bodyguard":         "NCA.Archetype.bodyguard",
  "skirmisher":        "NCA.Archetype.skirmisher",
  "sniper":            "NCA.Archetype.sniper",
  "artillery":         "NCA.Archetype.artillery",
  "predator":          "NCA.Archetype.predator",
  "hunter":            "NCA.Archetype.hunter",
  "beast-instinctive": "NCA.Archetype.beast-instinctive",
  "pack-hunter":       "NCA.Archetype.pack-hunter",
  "pack-flanker":      "NCA.Archetype.pack-flanker",
  "hive-minded":       "NCA.Archetype.hive-minded",
  "opportunist":       "NCA.Archetype.opportunist",
  "assassin":          "NCA.Archetype.assassin",
  "ambusher":          "NCA.Archetype.ambusher",
  "territorial":       "NCA.Archetype.territorial",
  "undead-mindless":   "NCA.Archetype.undead-mindless",
  "undead-disciplined":"NCA.Archetype.undead-disciplined",
  "mob-walker":        "NCA.Archetype.mob-walker",
  "panicked":          "NCA.Archetype.panicked",
};

// ─── Sheet render hook ────────────────────────────────────────────────────────

async function _onRenderActorSheet(app, html, data) {
  const actor = app.actor ?? app.document;
  if (!actor || actor.type !== "npc") return;
  if (!game.user.isGM) return;
  if (!getSetting(SETTINGS.ENABLE_BEHAVIOR_AI)) return;

  const root = html instanceof jQuery ? html[0] : html;
  if (!root) return;

  // Find the sheet's tab nav (works for dnd5e v3+ ApplicationV2 and legacy sheets)
  const tabNav = root.querySelector(".tabs[data-group='primary'], .sheet-tabs, nav.tabs");
  if (!tabNav) return;

  // ── LAYOUT FIX: Find the correct tab body container ──────────────────────
  // In dnd5e V3+ (ApplicationV2), the tab body is a direct child of the
  // sheet body. The sidebar (.sheet-sidebar) is a SIBLING in a flex/grid
  // layout — not a child of tab-body.
  //
  // We must inject into the actual tab switching container, NOT the
  // sheet-body wrapper that includes the sidebar.
  //
  // Selector priority:
  //   1. .tab-body   — dnd5e V3+ ApplicationV2 (tabs live here, sidebar is sibling)
  //   2. .sheet-body — dnd5e V2 legacy (tabs are children, sidebar may be inside)
  // In case 2, we scope further to avoid injecting beside the sidebar.
  let tabBody = root.querySelector(".tab-body");
  if (!tabBody) {
    // Legacy fallback: find a flex/grid container that has .tab children
    // but is NOT the outer wrapper that contains .sheet-sidebar
    const sheetBody = root.querySelector(".sheet-body, section.sheet-body");
    if (!sheetBody) return;
    // Prefer a child div that actually contains existing .tab elements
    const innerTabContainer = sheetBody.querySelector(":scope > div:not(.sheet-sidebar)");
    tabBody = innerTabContainer ?? sheetBody;
  }

  // ── RE-INJECTION (fixes the "tab vanishes on sheet update" bug) ──────────
  // Foundry re-renders the sheet on any actor update (HP, flags, item import).
  // The previous one-time guard only re-injected after item add/remove, so an
  // ordinary update tore down our tab and never rebuilt it until reopen. We now
  // ALWAYS remove any stale injected nodes in this render's DOM and re-inject
  // fresh — idempotent, and it survives every re-render. Active state is
  // restored below from the sheet's own tab-group state.
  root.querySelector(".nca-ai-tab")?.remove();
  root.querySelector(".nca-ai-tab-nav")?.remove();
  _reinjectionPending.delete(actor.id);
  const ncaWasActive = (app.tabGroups?.[tabNav.dataset.group ?? "primary"] === "nca-ai");

  // ── Tab nav entry ────────────────────────────────────────────────────────
  const tabGroup = tabNav.dataset.group ?? "primary";
  const tabItem = document.createElement("a");
  tabItem.classList.add("item", "nca-ai-tab-nav");
  tabItem.dataset.tab = "nca-ai";
  tabItem.dataset.group = tabGroup;
  tabItem.setAttribute("data-tooltip", L("NCA.UI.SheetTab"));
  tabItem.setAttribute("aria-label", L("NCA.UI.SheetTab"));
  tabItem.title = L("NCA.UI.SheetTab");
  tabItem.innerHTML = `<i class="fas fa-robot"></i>`;
  tabNav.appendChild(tabItem);

  // ── Tab content ──────────────────────────────────────────────────────────
  const profile   = getCachedAiProfile(actor) ?? await inferAndCacheAiProfile(actor, false);
  const manualArr = actor.getFlag?.(MODULE_ID, "archetypes") ?? [];
  const isManual  = Array.isArray(manualArr) && manualArr.length > 0;

  const tabSection = document.createElement("div");
  tabSection.classList.add("tab", "nca-ai-tab");
  tabSection.dataset.tab = "nca-ai";
  tabSection.dataset.group = tabGroup;

  // ── LAYOUT FIX: Ensure tab is in normal flow, not overlapping sidebar ─────
  // Force the tab into the same flex/grid track as peer tabs.
  // The `contain: layout style` in CSS already isolates it from the
  // sidebar — this JS ensures it's positioned correctly in the DOM flow.
  tabSection.style.cssText = [
    "position: relative",       // normal flow, not absolute
    "flex: 1 1 auto",           // fill available tab body space
    "min-width: 0",             // prevent flex overflow
    "align-self: stretch",      // match sibling tab height
  ].join("; ");

  const automationActive = isAutomationActive();
  tabSection.innerHTML = _buildTabHTML(actor, profile, isManual, manualArr, automationActive);
  tabBody.appendChild(tabSection);

  // ── Wire up events ───────────────────────────────────────────────────────
  _bindTabEvents(tabSection, actor, app);

  // ── Tab activation ───────────────────────────────────────────────────────
  // Hides all sibling tabs; shows ours. Compatible with Foundry V13
  // ApplicationV2 (which uses its own Tabs API) and legacy sheets.
  const activateNcaTab = () => {
    const groupSelector = `[data-group="${tabGroup}"]`;
    root.querySelectorAll(`.tab${groupSelector}`).forEach(t => t.classList.remove("active"));
    root.querySelectorAll(`.tabs a.item${groupSelector}, .tabs .item${groupSelector}`)
        .forEach(t => t.classList.remove("active"));
    tabSection.classList.add("active");
    tabItem.classList.add("active");
    // Persist into the sheet's own tab state so a re-render keeps us active
    // (this is what lets the fix restore the tab the user was viewing).
    try {
      if (typeof app.changeTab === "function") app.changeTab("nca-ai", tabGroup, { force: true });
      else app._tabs?.find(t => t._group === tabGroup)?._activate?.("nca-ai", { triggerCallback: false });
      if (app.tabGroups) app.tabGroups[tabGroup] = "nca-ai";
    } catch (_) { /* non-critical */ }
  };

  tabItem.addEventListener("click", (e) => { e.preventDefault(); activateNcaTab(); });

  // Restore active state if the user was on our tab before this re-render.
  if (ncaWasActive) activateNcaTab();
}

// ─── HTML builder ─────────────────────────────────────────────────────────────

function _buildTabHTML(actor, profile, isManual, manualArr, automationActive) {
  const activeKeys = isManual ? manualArr : (profile?.archetypes ?? []);
  const confidence  = profile?.confidence ?? 0;
  const reasons     = profile?.reasons ?? [];

  // Automation toggle panel (replaces the combat tracker header button)
  const toggleLabel  = automationActive
    ? game.i18n?.localize?.("NCA.UI.AutomationEnabled")  ?? "NPC Automation: Enabled"
    : game.i18n?.localize?.("NCA.UI.AutomationDisabled") ?? "NPC Automation: Disabled";
  const togglePanel = `
    <div class="nca-automation-toggle-panel">
      <div class="nca-section-header"><i class="fas fa-robot"></i> ${L("NCA.UI.SectionAutomation")}</div>
      <div class="nca-toggle-row">
        <button type="button"
                class="nca-btn nca-automation-master-btn ${automationActive ? "active" : ""}"
                title="${toggleLabel}"
                data-nca-master-toggle>
          <i class="fas fa-${automationActive ? "toggle-on" : "toggle-off"}"></i>
          ${automationActive ? L("NCA.UI.AutomationOnShort") : L("NCA.UI.AutomationOffShort")}
        </button>
      </div>
    </div>
    <div class="nca-divider"></div>`;
  const confPct   = Math.round(confidence * 100);
  const confBar   = `<div class="nca-conf-track"><div class="nca-conf-bar" style="width:${confPct}%"></div></div>`;
  const confLabel = confidence >= 0.8 ? L("NCA.UI.ConfidenceHigh") : confidence >= 0.4 ? L("NCA.UI.ConfidenceMedium") : L("NCA.UI.ConfidenceLow");

  // Status banner
  const banner = isManual
    ? `<div class="nca-ai-banner nca-ai-manual"><i class="fas fa-lock"></i> ${L("NCA.UI.BannerManual")}</div>`
    : `<div class="nca-ai-banner nca-ai-inferred"><i class="fas fa-robot"></i> ${F("NCA.UI.BannerInferred", { level: confLabel, pct: confPct })} ${confBar}</div>`;

  // Explain section
  const reasonLines = reasons.map(r => `<li>${r}</li>`).join("");
  const explain = `
    <details class="nca-explain">
      <summary><i class="fas fa-lightbulb"></i> ${L("NCA.UI.ExplainSummary")}</summary>
      <ul class="nca-reason-list">${reasonLines || `<li>${L("NCA.UI.NoReasons")}</li>`}</ul>
    </details>`;

  // Archetype checkboxes
  let archetypeHTML = `<div class="nca-section-header">${L("NCA.UI.SectionArchetypes")}</div>
    <p class="nca-section-hint">${L("NCA.UI.ArchetypesHint")}</p>
    <div class="nca-archetype-grid">`;

  for (const [group, keys] of Object.entries(ARCHETYPE_GROUPS)) {
    archetypeHTML += `<div class="nca-archetype-group"><div class="nca-group-label">${L(`NCA.ArchetypeGroup.${group}`)}</div>`;
    for (const key of keys) {
      const checked = activeKeys.includes(key) ? "checked" : "";
      const label   = L(ARCHETYPE_LABELS[key] ?? key);
      archetypeHTML += `
        <label class="nca-archetype-check ${checked ? "nca-active" : ""}">
          <input type="checkbox" class="nca-archetype-cb" data-key="${key}" ${checked}>
          ${label}
        </label>`;
    }
    archetypeHTML += `</div>`;
  }
  archetypeHTML += `</div>`;

  // Active profile summary
  const activeSummary = activeKeys.length > 0
    ? `<div class="nca-active-summary"><span class="nca-label">${L("NCA.UI.ActiveLabel")}</span> ${activeKeys.map(k =>
        `<span class="nca-tag">${L(ARCHETYPE_LABELS[k] ?? k)}</span>`).join("")}</div>`
    : `<div class="nca-active-summary nca-empty">${L("NCA.UI.NoArchetypes")}</div>`;

  // Action buttons
  const buttons = `
    <div class="nca-ai-actions">
      <button type="button" class="nca-btn nca-rebuild-btn" title="${L("NCA.UI.RebuildTip")}">
        <i class="fas fa-sync"></i> ${L("NCA.UI.RebuildBtn")}
      </button>
      <button type="button" class="nca-btn nca-clear-btn" title="${L("NCA.UI.ClearTip")}">
        <i class="fas fa-eraser"></i> ${L("NCA.UI.ClearBtn")}
      </button>
    </div>`;

  // ── Per-actor combat configuration (priority target, blacklist, morale,
  //    spell overrides). All values persist as actor flags under MODULE_ID
  //    and every consumer defaults safely when a flag is absent.
  const configHTML = _buildCombatConfigHTML(actor) + _buildMultiattackHTML(actor);

  return `<div class="nca-ai-tab-inner">
    ${togglePanel}
    ${banner}
    ${activeSummary}
    ${explain}
    <div class="nca-divider"></div>
    ${archetypeHTML}
    <div class="nca-divider"></div>
    ${configHTML}
    ${buttons}
  </div>`;
}

/**
 * Build the per-actor "Combat Configuration" panel: priority target, target
 * blacklist, morale overrides, and spell-AI overrides.
 */
function _buildCombatConfigHTML(actor) {
  const esc = (v) => {
    const div = document.createElement("div");
    div.textContent = String(v ?? "");
    return div.innerHTML;
  };

  const priorityTarget = actor.getFlag?.(MODULE_ID, "priorityTargetName") ?? "";
  const blacklist      = actor.getFlag?.(MODULE_ID, "targetBlacklist") ?? "";
  const startingMorale = actor.getFlag?.(MODULE_ID, "startingMorale");
  const moraleImmune   = actor.getFlag?.(MODULE_ID, "moraleImmune") === true;
  const spellOv        = actor.getFlag?.(MODULE_ID, "spellOverrides") ?? {};
  const spellOvOn      = spellOv.enabled === true;

  const consChoices = [
    ["",          "NCA.UI.Cons.WorldDefault"],
    ["none",      "NCA.UI.Cons.None"],
    ["moderate",  "NCA.UI.Cons.Moderate"],
    ["strong",    "NCA.UI.Cons.Strong"],
  ].map(([v, lbl]) =>
    `<option value="${v}" ${String(spellOv.conservation ?? "") === v ? "selected" : ""}>${L(lbl)}</option>`
  ).join("");

  return `
    <div class="nca-section-header"><i class="fas fa-crosshairs"></i> ${L("NCA.UI.SectionCombatConfig")}</div>
    <p class="nca-section-hint">${L("NCA.UI.CombatConfigHint")}</p>

    <div class="nca-config-grid">
      <label class="nca-config-row" title="${L("NCA.UI.PriorityTip")}">
        <span>${L("NCA.UI.PriorityLabel")}</span>
        <input type="text" class="nca-cfg" data-flag="priorityTargetName" value="${esc(priorityTarget)}" placeholder="${L("NCA.UI.PhNone")}">
      </label>

      <label class="nca-config-row" title="${L("NCA.UI.BlacklistTip")}">
        <span>${L("NCA.UI.BlacklistLabel")}</span>
        <input type="text" class="nca-cfg" data-flag="targetBlacklist" value="${esc(blacklist)}" placeholder="${L("NCA.UI.PhNone")}">
      </label>

      <label class="nca-config-row" title="${L("NCA.UI.StartMoraleTip")}">
        <span>${L("NCA.UI.StartMoraleLabel")}</span>
        <input type="number" class="nca-cfg" data-flag="startingMorale" data-dtype="Number"
               min="0" max="100" step="1" value="${Number.isFinite(Number(startingMorale)) ? Number(startingMorale) : ""}" placeholder="${L("NCA.UI.PhDefault")}">
      </label>

      <label class="nca-config-row" title="${L("NCA.UI.MoraleImmuneTip")}">
        <span>${L("NCA.UI.MoraleImmuneLabel")}</span>
        <input type="checkbox" class="nca-cfg" data-flag="moraleImmune" data-dtype="Boolean" ${moraleImmune ? "checked" : ""}>
      </label>
    </div>

    <label class="nca-config-row nca-spell-ov-gate" title="${L("NCA.UI.SpellOvTip")}">
      <span><i class="fas fa-hat-wizard"></i> ${L("NCA.UI.SpellOvLabel")}</span>
      <input type="checkbox" class="nca-cfg nca-spell-ov-toggle" data-flag="spellOverrides.enabled" data-dtype="Boolean" ${spellOvOn ? "checked" : ""}>
    </label>

    <div class="nca-config-grid nca-spell-ov-body" ${spellOvOn ? "" : "style='display:none'"}>
      <label class="nca-config-row" title="${L("NCA.UI.ConsTip")}">
        <span>${L("NCA.UI.ConsLabel")}</span>
        <select class="nca-cfg" data-flag="spellOverrides.conservation">${consChoices}</select>
      </label>

      <label class="nca-config-row" title="${L("NCA.UI.MinAoeTip")}">
        <span>${L("NCA.UI.MinAoeLabel")}</span>
        <input type="number" class="nca-cfg" data-flag="spellOverrides.minAOETargets" data-dtype="Number"
               min="1" max="10" step="1" value="${Number.isFinite(Number(spellOv.minAOETargets)) ? Number(spellOv.minAOETargets) : ""}" placeholder="${L("NCA.UI.PhWorld")}">
      </label>
    </div>`;
}

// ─── Multiattack section (consolidated from the old standalone override app) ──

function _buildMultiattackHTML(actor) {
  const esc = (v) => {
    const div = document.createElement("div");
    div.textContent = String(v ?? "");
    return div.innerHTML;
  };

  const flag     = getOverrideFlag(actor);
  const enabled  = flag?.enabled ?? false;
  const attacks  = Array.isArray(flag?.attacks) ? flag.attacks : [];
  const behavior = getBehaviorFlag(actor);

  // Configured sequence rows (resolve names/icons; flag missing items).
  const seqRows = attacks.map((entry, idx) => {
    const item = actor.items.get(entry.itemId);
    const name = item?.name ?? `${L("NCA.UI.MA.Missing")} (${entry.itemId})`;
    const img  = item?.img ?? "icons/svg/mystery-man.svg";
    const missing = !item;
    return `
      <div class="nca-ma-seq-row ${missing ? "nca-ma-missing" : ""}" data-index="${idx}">
        <img src="${esc(img)}" alt="">
        <span class="nca-ma-name">${esc(name)}${missing ? " ⚠" : ""}</span>
        <input type="number" class="nca-ma-count" data-index="${idx}" value="${Number(entry.count ?? 1)}" min="1" max="10" aria-label="${L("NCA.UI.MA.CountAria")}">
        <span class="nca-ma-btns">
          <button type="button" class="nca-ma-up"     data-index="${idx}" title="${L("NCA.UI.MA.Up")}"     ${idx === 0 ? "disabled" : ""}><i class="fas fa-arrow-up"></i></button>
          <button type="button" class="nca-ma-down"   data-index="${idx}" title="${L("NCA.UI.MA.Down")}"   ${idx === attacks.length - 1 ? "disabled" : ""}><i class="fas fa-arrow-down"></i></button>
          <button type="button" class="nca-ma-remove" data-index="${idx}" title="${L("NCA.UI.MA.Remove")}"><i class="fas fa-trash"></i></button>
        </span>
      </div>`;
  }).join("") || `<p class="nca-empty">${L("NCA.UI.MA.EmptySeq")}</p>`;

  // Available items to add (exclude nothing — repeats are allowed).
  const usable = getUsableItems(actor);
  const availRows = usable.map(item => `
      <div class="nca-ma-avail-row" data-item-id="${item.id}">
        <img src="${esc(item.img)}" alt="">
        <span class="nca-ma-name">${esc(item.name)}</span>
        <button type="button" class="nca-ma-add" data-item-id="${item.id}" title="${L("NCA.UI.MA.Add")}"><i class="fas fa-plus"></i></button>
      </div>`).join("") || `<p class="nca-empty">${L("NCA.UI.MA.NoUsable")}</p>`;

  return `
    <div class="nca-divider"></div>
    <details class="nca-ma-section" ${enabled ? "open" : ""}>
      <summary class="nca-section-header"><i class="fas fa-khanda"></i> ${L("NCA.UI.MA.Section")}</summary>
      <p class="nca-section-hint">${L("NCA.UI.MA.Hint")}</p>

      <label class="nca-config-row" title="${L("NCA.UI.MA.EnableTip")}">
        <span>${L("NCA.UI.MA.EnableLabel")}</span>
        <input type="checkbox" class="nca-ma-enabled" ${enabled ? "checked" : ""}>
      </label>

      <label class="nca-config-row" title="${L("NCA.UI.MA.RetreatTip")}">
        <span>${L("NCA.UI.MA.RetreatLabel")}</span>
        <input type="checkbox" class="nca-ma-retreat" ${behavior.retreatWhenBloodied ? "checked" : ""}>
      </label>

      <div class="nca-ma-editor">
        <div class="nca-ma-col">
          <div class="nca-ma-col-head">${L("NCA.UI.MA.SequenceHead")}</div>
          <div class="nca-ma-seq">${seqRows}</div>
        </div>
        <div class="nca-ma-col">
          <div class="nca-ma-col-head">${L("NCA.UI.MA.AvailableHead")}</div>
          <div class="nca-ma-avail">${availRows}</div>
        </div>
      </div>
    </details>`;
}

// Read-modify-write the multiattack flag, then rebuild just this section.
async function _mutateOverride(actor, mutator) {
  const flag = getOverrideFlag(actor) ?? { enabled: false, attacks: [] };
  const next = { enabled: flag.enabled ?? false, attacks: [...(flag.attacks ?? [])] };
  mutator(next);
  try {
    if (!next.enabled && next.attacks.length === 0) await actor.unsetFlag(MODULE_ID, "multiattack");
    else await actor.setFlag(MODULE_ID, "multiattack", next);
  } catch (err) {
    ui.notifications.warn(F("NCA.Notify.FlagSaveFailed", { path: "multiattack", error: err.message }));
  }
}

function _refreshMultiattack(tabSection, actor, app) {
  const host = tabSection.querySelector(".nca-ma-section");
  if (!host) return;
  const wrap = document.createElement("div");
  wrap.innerHTML = _buildMultiattackHTML(actor);
  const fresh = wrap.querySelector(".nca-ma-section");
  if (fresh) {
    host.replaceWith(fresh);
    _bindMultiattackEvents(tabSection, actor, app);
  }
}

function _bindMultiattackEvents(tabSection, actor, app) {
  const refresh = () => _refreshMultiattack(tabSection, actor, app);

  tabSection.querySelector(".nca-ma-enabled")?.addEventListener("change", async (e) => {
    await _mutateOverride(actor, (f) => { f.enabled = e.target.checked; });
    refresh();
  });

  tabSection.querySelector(".nca-ma-retreat")?.addEventListener("change", async (e) => {
    const cur = getBehaviorFlag(actor);
    try {
      await actor.setFlag(MODULE_ID, "behavior", { ...cur, retreatWhenBloodied: e.target.checked });
    } catch (err) {
      ui.notifications.warn(F("NCA.Notify.FlagSaveFailed", { path: "behavior", error: err.message }));
    }
  });

  tabSection.querySelectorAll(".nca-ma-add").forEach(btn =>
    btn.addEventListener("click", async () => {
      const itemId = btn.dataset.itemId;
      await _mutateOverride(actor, (f) => { f.attacks.push({ itemId, count: 1 }); });
      refresh();
    }));

  tabSection.querySelectorAll(".nca-ma-remove").forEach(btn =>
    btn.addEventListener("click", async () => {
      const idx = Number(btn.dataset.index);
      await _mutateOverride(actor, (f) => { f.attacks.splice(idx, 1); });
      refresh();
    }));

  tabSection.querySelectorAll(".nca-ma-up").forEach(btn =>
    btn.addEventListener("click", async () => {
      const idx = Number(btn.dataset.index);
      await _mutateOverride(actor, (f) => {
        if (idx > 0) [f.attacks[idx - 1], f.attacks[idx]] = [f.attacks[idx], f.attacks[idx - 1]];
      });
      refresh();
    }));

  tabSection.querySelectorAll(".nca-ma-down").forEach(btn =>
    btn.addEventListener("click", async () => {
      const idx = Number(btn.dataset.index);
      await _mutateOverride(actor, (f) => {
        if (idx < f.attacks.length - 1) [f.attacks[idx + 1], f.attacks[idx]] = [f.attacks[idx], f.attacks[idx + 1]];
      });
      refresh();
    }));

  tabSection.querySelectorAll(".nca-ma-count").forEach(inp =>
    inp.addEventListener("change", async () => {
      const idx = Number(inp.dataset.index);
      const n = Math.max(1, Math.min(10, Number(inp.value) || 1));
      await _mutateOverride(actor, (f) => { if (f.attacks[idx]) f.attacks[idx].count = n; });
      refresh();
    }));
}

// ─── Event binding ────────────────────────────────────────────────────────────

function _bindTabEvents(tabSection, actor, app) {
  _bindMultiattackEvents(tabSection, actor, app);

  // Master automation toggle (replaces combat tracker header button)
  tabSection.querySelector("[data-nca-master-toggle]")?.addEventListener("click", async () => {
    const newState = !isAutomationActive();
    await setAutomationActive(newState);
    // Update button appearance immediately without full sheet re-render
    const btn = tabSection.querySelector("[data-nca-master-toggle]");
    if (btn) {
      btn.classList.toggle("active", newState);
      btn.querySelector("i").className = `fas fa-${newState ? "toggle-on" : "toggle-off"}`;
      const label = newState
        ? (game.i18n?.localize?.("NCA.UI.AutomationEnabled")  ?? "Automation Enabled")
        : (game.i18n?.localize?.("NCA.UI.AutomationDisabled") ?? "Automation Disabled");
      btn.childNodes[btn.childNodes.length - 1].textContent = ` ${label.replace(/^NPC Automation: /, "")}`;
      btn.title = label;
    }
  });
  tabSection.querySelectorAll(".nca-archetype-cb").forEach(cb => {
    cb.addEventListener("change", async () => {
      const checked = [...tabSection.querySelectorAll(".nca-archetype-cb:checked")].map(c => c.dataset.key);
      if (checked.length > 0) {
        await actor.setFlag(MODULE_ID, "archetypes", checked);
      } else {
        await actor.unsetFlag(MODULE_ID, "archetypes");
      }
      // Update visual state
      tabSection.querySelectorAll(".nca-archetype-check").forEach(lbl => {
        const key = lbl.querySelector(".nca-archetype-cb")?.dataset.key;
        lbl.classList.toggle("nca-active", checked.includes(key));
      });
      // Refresh active summary without full re-render
      _refreshActiveSummary(tabSection, checked);
    });
  });

  // ── Combat Configuration fields ────────────────────────────────────────
  // Each control persists to an actor flag on change. Dotted data-flag paths
  // ("spellOverrides.conservation") merge into the parent object flag so a
  // single edit never clobbers sibling values. Empty values unset the flag
  // (back-compat: absent flag = default behaviour everywhere).
  tabSection.querySelectorAll(".nca-cfg").forEach(el => {
    el.addEventListener("change", async () => {
      const path  = el.dataset.flag;
      const dtype = el.dataset.dtype ?? "String";

      let value;
      if (dtype === "Boolean")     value = el.checked;
      else if (dtype === "Number") value = el.value === "" ? null : Number(el.value);
      else                         value = el.value.trim();

      try {
        if (path.includes(".")) {
          const [parent, child] = path.split(".");
          const current = foundry.utils.deepClone(actor.getFlag(MODULE_ID, parent) ?? {});
          if (value === null || value === "" || (dtype === "Boolean" && value === false && child === "enabled")) {
            delete current[child];
            if (dtype === "Boolean") current[child] = false;
          } else {
            current[child] = value;
          }
          if (Object.keys(current).length === 0 || (Object.keys(current).length === 1 && current.enabled === false)) {
            await actor.unsetFlag(MODULE_ID, parent);
          } else {
            await actor.setFlag(MODULE_ID, parent, current);
          }
        } else if (value === null || value === "" || value === false) {
          await actor.unsetFlag(MODULE_ID, path);
        } else {
          await actor.setFlag(MODULE_ID, path, value);
        }
      } catch (err) {
        ui.notifications.warn(F("NCA.Notify.FlagSaveFailed", { path, error: err.message }));
      }

      // Spell-override gate: show/hide the dependent fields live.
      if (el.classList.contains("nca-spell-ov-toggle")) {
        const body = tabSection.querySelector(".nca-spell-ov-body");
        if (body) body.style.display = el.checked ? "" : "none";
      }
    });
  });

  // Rebuild button
  tabSection.querySelector(".nca-rebuild-btn")?.addEventListener("click", async () => {
    const profile = await inferAndCacheAiProfile(actor, true);
    ui.notifications.info(F("NCA.Notify.ProfileRebuilt", { name: actor.name, list: profile.archetypes.join(", ") }));
    app.render(false);
  });

  // Clear overrides button
  tabSection.querySelector(".nca-clear-btn")?.addEventListener("click", async () => {
    await actor.unsetFlag(MODULE_ID, "archetypes");
    const profile = await inferAndCacheAiProfile(actor, true);
    ui.notifications.info(F("NCA.Notify.OverridesCleared", { name: actor.name }));
    app.render(false);
  });
}

function _refreshActiveSummary(tabSection, activeKeys) {
  const summary = tabSection.querySelector(".nca-active-summary");
  if (!summary) return;
  if (activeKeys.length > 0) {
    summary.className = "nca-active-summary";
    summary.innerHTML = `<span class="nca-label">${L("NCA.UI.ActiveLabel")}</span> ${activeKeys.map(k =>
      `<span class="nca-tag">${L(ARCHETYPE_LABELS[k] ?? k)}</span>`).join("")}`;
  } else {
    summary.className = "nca-active-summary nca-empty";
    summary.textContent = L("NCA.UI.NoArchetypes");
  }
}
