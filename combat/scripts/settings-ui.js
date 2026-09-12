/**
 * settings-ui.js
 * Tabbed configuration application for the module's 60+ world/client settings.
 *
 * Design:
 *  - SINGLE SOURCE OF TRUTH: all metadata (name, hint, type, range, choices,
 *    default, scope) is read live from game.settings.settings — nothing is
 *    duplicated here. This file only declares WHICH TAB each key lives on.
 *  - Native panel stays clean: hideNativeSettings() flips config=false on
 *    everything routed into this app, keeping only the master toggle and the
 *    two menu buttons in Foundry's own settings list.
 *  - Robust to drift: any registered, GM-configurable setting not present in
 *    TAB_LAYOUT is auto-collected into the Debug tab's "Other" group, so a
 *    forgotten registration can never silently disappear from the UI.
 *  - Save is diff-based: only changed values are written, each via
 *    setSetting() so onChange handlers fire normally.
 *
 * Pattern follows MultiattackOverrideApp: hand-rendered ApplicationV2 with
 * _renderHTML/_replaceHTML (no Handlebars dependency).
 */

import { MODULE_ID, SETTINGS, getSetting, setSetting } from "./settings.js";
import { log } from "./utils.js";

// ─── Tab layout ───────────────────────────────────────────────────────────────
// Keys reference SETTINGS constants so a renamed key fails loudly at import
// time rather than silently dropping a control.

const TAB_LAYOUT = [
  {
    id: "general", label: "General", icon: "fas fa-cog",
    keys: [
      SETTINGS.ENABLED_BY_DEFAULT,
      SETTINGS.AUTO_END_TURN,
      SETTINGS.ACTION_DELAY,
      SETTINGS.ATTACK_DELAY,
      SETTINGS.ENABLE_CHAT_LOG,
      SETTINGS.MAX_AUTOMATED_CR,
      SETTINGS.MAX_ACTIONS_PER_TURN,
      SETTINGS.PAUSE_ON_ERROR,
      SETTINGS.LETHAL_CONFIRM,
      SETTINGS.SNAPSHOT_INCLUDE_RESOURCES,
    ],
  },
  {
    id: "combat", label: "Combat Behaviour", icon: "fas fa-swords",
    keys: [
      SETTINGS.PREFER_MULTIATTACK,
      SETTINGS.PREFER_MELEE,
      SETTINGS.PREFER_RANGED,
      SETTINGS.IGNORE_UNCONSCIOUS,
      SETTINGS.IGNORE_HIDDEN,
      SETTINGS.ENABLE_REACTIONS,
      SETTINGS.ENABLE_BONUS_ACTIONS,
      SETTINGS.ENABLE_LEGENDARY_ACTIONS,
      SETTINGS.ENABLE_LAIR_ACTIONS,
      SETTINGS.LEGENDARY_BANNER,
      SETTINGS.LEGENDARY_PAUSE,
      SETTINGS.ENABLE_OPPORTUNITY_ATTACKS,
      SETTINGS.RETARGET_ON_KILL,
      SETTINGS.ENABLE_FRIGHTENED_RETREAT,
      SETTINGS.ENABLE_BLOODIED_RETREAT,
      SETTINGS.RETREAT_SUBTYPE_KEYWORDS,
    ],
  },
  {
    id: "movement", label: "Movement", icon: "fas fa-route",
    keys: [
      SETTINGS.ENABLE_MOVEMENT,
      SETTINGS.MAX_MOVEMENT,
      SETTINGS.ENABLE_DASH,
      SETTINGS.DASH_PRESERVE_ACTION,
      SETTINGS.ENABLE_PURSUIT,
      SETTINGS.NATURAL_MOVEMENT,
      SETTINGS.MOVEMENT_IMPERFECTION,
      SETTINGS.MOVEMENT_STEP_DELAY,
      SETTINGS.FACE_MOVEMENT,
      SETTINGS.FACE_TARGET,
      SETTINGS.ROTATION_OFFSET,
      SETTINGS.NPC_OPEN_DOORS,
      SETTINGS.PASS_THROUGH_FALLEN,
      SETTINGS.DIFFICULT_TERRAIN,
      SETTINGS.KITE_REQUIRES_DISENGAGE,
      SETTINGS.ENABLE_ELEVATION,
      SETTINGS.ENABLE_FLANKING_MOVEMENT,
      SETTINGS.ENABLE_SWIM_CLIMB_SPEED,
      SETTINGS.PATHFIND_SINGLE_FLOOD,
      SETTINGS.PATHFIND_SMART_PARTIAL,
      SETTINGS.PATHFIND_LOS_MEMO,
    ],
  },
  {
    id: "spellcasting", label: "Spellcasting", icon: "fas fa-hat-wizard",
    keys: [
      SETTINGS.SPELL_ENABLED,
      SETTINGS.SPELL_FRIENDLY_FIRE,
      SETTINGS.SPELL_MIN_AOE_TARGETS,
      SETTINGS.SPELL_SLOT_CONSERVATION,
      SETTINGS.ENFORCE_ONE_LEVELLED_SPELL,
      SETTINGS.ENABLE_EFFECT_OVERRIDES,
    ],
  },
  {
    id: "dialogue", label: "Dialogue", icon: "fas fa-comment",
    keys: [
      SETTINGS.DIALOGUE_ENABLED,
      SETTINGS.DIALOGUE_SPEECH_BUBBLES,
      SETTINGS.DIALOGUE_MIRROR_CHAT,
      SETTINGS.DIALOGUE_COMBAT_ONLY,
      SETTINGS.DIALOGUE_EFFORT_NOISES,
      SETTINGS.DIALOGUE_TRANSLATE_LANGUAGES,
      SETTINGS.DIALOGUE_FREQUENCY,
      SETTINGS.DIALOGUE_JOURNAL_NAME,
      SETTINGS.DIALOGUE_BUBBLE_SCALE,
    ],
  },
  {
    id: "ai", label: "AI & Morale", icon: "fas fa-brain",
    keys: [
      SETTINGS.ENABLE_BEHAVIOR_AI,
      SETTINGS.ENABLE_AI_INFERENCE,
      SETTINGS.ENABLE_MORALE,
      SETTINGS.MORALE_VISIBLE,
      SETTINGS.MORALE_VISIBLE_AUDIENCE,
      SETTINGS.CINEMATIC_MODE,
      SETTINGS.SPOTLIGHT_CAMERA,
      SETTINGS.COMBAT_DEBRIEF,
      SETTINGS.BEHAVIOR_AI_SPELLCASTER_FOCUS,
      SETTINGS.BEHAVIOR_AI_PACK_TACTICS,
      SETTINGS.BEHAVIOR_AI_OPPORTUNISM,
      SETTINGS.DISPOSITION_TARGETING,
      SETTINGS.ENABLE_CONDITION_BEHAVIORS,
      SETTINGS.COND_SUPPRESS_TURN,
      SETTINGS.COND_FRIGHTENED_RAW,
      SETTINGS.COND_RESTRAINED,
      SETTINGS.COND_COMMAND,
      SETTINGS.COND_DOMINATION,
      SETTINGS.COND_SLOW,
      SETTINGS.COND_BLINDED,
      SETTINGS.COND_BANISHMENT,
      SETTINGS.COND_HASTE,
      SETTINGS.COND_SANCTUARY,
      SETTINGS.COND_SILENCE,
    ],
  },
  {
    id: "tactical", label: "Tactical AI", icon: "fas fa-chess-knight",
    keys: [
      SETTINGS.AI_FINISHING_BLOW_BIAS,
      SETTINGS.AI_REACHABILITY_PENALTY,
      SETTINGS.AI_COVER_AWARE_PATHING,
      SETTINGS.AI_SCOOT_TO_COVER,
      SETTINGS.TARGET_PERSISTENCE,
      SETTINGS.TARGET_GRUDGE_MEMORY,
      SETTINGS.SHARED_TARGET_MEMORY,
      SETTINGS.AOE_THREAT_MEMORY,
    ],
  },
  {
    id: "debug", label: "Debug", icon: "fas fa-bug",
    keys: [
      SETTINGS.PATHFINDING_DEBUG_LEVEL,
      SETTINGS.DRAW_MOVEMENT_PATH,
      SETTINGS.SPELL_DEBUG_SCORING,
      SETTINGS.AI_TRACE_ENABLED,
      SETTINGS.AI_TRACE_AUTO_LOG,
      SETTINGS.AI_TRACE_BUFFER_SIZE,
    ],
  },
];

/** Keys that stay visible in Foundry's NATIVE module-settings panel. */
const KEEP_NATIVE = new Set([
  SETTINGS.ENABLED_BY_DEFAULT,   // master toggle
]);

/** Keys never shown anywhere (runtime state / deprecated). */
const HIDDEN_KEYS = new Set([
  SETTINGS.AUTOMATION_ACTIVE,     // runtime toggle, driven by tracker button
  SETTINGS.ENABLE_MIDI_SPELLS,    // deprecated — superseded by SPELL_ENABLED
  SETTINGS.SPELL_OVER_ATTACK_CR,  // deprecated — superseded by archetype system
  SETTINGS.VERBOSE_LOGGING,       // legacy boolean — superseded by debug level
]);

// ─── Native panel cleanup ─────────────────────────────────────────────────────

/**
 * Flip config=false on every setting routed into the tabbed app, so Foundry's
 * native panel shows only the master toggle and the two menu buttons. Called
 * once from main.js init, after registerSettings()/registerExtendedSettings().
 *
 * Mutating the registered SettingsConfig entries post-registration is the
 * established pattern for this — it avoids touching ~80 register() calls and
 * keeps registration order-independent.
 */
export function hideNativeSettings() {
  let hidden = 0;
  for (const tab of TAB_LAYOUT) {
    for (const key of tab.keys) {
      if (KEEP_NATIVE.has(key)) continue;
      const entry = game.settings.settings.get(`${MODULE_ID}.${key}`);
      if (entry?.config) { entry.config = false; hidden++; }
    }
  }
  for (const key of HIDDEN_KEYS) {
    const entry = game.settings.settings.get(`${MODULE_ID}.${key}`);
    if (entry?.config) { entry.config = false; hidden++; }
  }
  log(`[Settings UI] ${hidden} settings routed from native panel into tabbed app.`);
}

// ─── Metadata access ──────────────────────────────────────────────────────────

function _meta(key) {
  return game.settings.settings.get(`${MODULE_ID}.${key}`) ?? null;
}

function _loc(value, fallback = "") {
  if (!value) return fallback;
  const s = String(value);
  const translated = game.i18n.localize(s);
  return translated === s && s.includes(".") && !s.includes(" ") ? fallback || s : translated;
}

/**
 * Collect any registered, configurable-by-design setting that the layout
 * forgot — surfaced in an "Other" group on the Debug tab so nothing is lost.
 */
function _orphanKeys() {
  const known = new Set(HIDDEN_KEYS);
  for (const tab of TAB_LAYOUT) for (const key of tab.keys) known.add(key);
  known.add(SETTINGS.ENABLED_BY_DEFAULT);

  const orphans = [];
  for (const [fullKey, entry] of game.settings.settings.entries()) {
    if (entry.namespace !== MODULE_ID) continue;
    const key = fullKey.slice(MODULE_ID.length + 1);
    if (known.has(key)) continue;
    // Only surface settings that were meant to be user-facing.
    if (entry.config === false && !entry._ncaRouted) continue;
    orphans.push(key);
  }
  return orphans;
}

// ─── The application ──────────────────────────────────────────────────────────

export class NCASettingsApp extends foundry.applications.api.ApplicationV2 {

  /** @override */
  static DEFAULT_OPTIONS = {
    id:      "nca-settings-app",
    classes: ["nca-settings-app"],
    tag:     "div",
    window:  {
      title:     "NCA.App.WindowTitle",
      icon:      "fas fa-robot",
      resizable: true,
    },
    position: { width: 720, height: 640 },
  };

  constructor(options = {}) {
    super(options);
    this._activeTab = "general";
    this._filter    = "";
  }

  // ── Rendering ──────────────────────────────────────────────────────────────

  /** @override */
  async _renderHTML() {
    const tabs = this._buildTabs();

    const nav = tabs.map(t => `
      <a class="nca-set-tab ${t.id === this._activeTab ? "active" : ""}" data-tab="${t.id}">
        <i class="${t.icon}"></i><span>${this._escape(t.label)}</span>
      </a>`).join("");

    const panels = tabs.map(t => `
      <section class="nca-set-panel ${t.id === this._activeTab ? "active" : ""}" data-tab="${t.id}">
        ${t.rows.map(r => this._renderRow(r)).join("") || `<p class="nca-set-empty">No settings on this tab.</p>`}
        <div class="nca-set-panel-footer">
          <button type="button" class="nca-set-reset" data-tab="${t.id}">
            <i class="fas fa-undo"></i> Reset tab to defaults
          </button>
        </div>
      </section>`).join("");

    return `
      <div class="nca-set-root">
        <div class="nca-set-toolbar">
          <i class="fas fa-search"></i>
          <input type="search" class="nca-set-filter" placeholder="Filter settings…"
                 value="${this._escape(this._filter)}" autocomplete="off">
        </div>
        <div class="nca-set-body">
          <nav class="nca-set-nav">${nav}</nav>
          <div class="nca-set-panels">${panels}</div>
        </div>
        <footer class="nca-set-footer">
          <span class="nca-set-dirty" hidden><i class="fas fa-circle"></i> Unsaved changes</span>
          <button type="button" class="nca-set-save"><i class="fas fa-save"></i> Save Changes</button>
          <button type="button" class="nca-set-cancel"><i class="fas fa-times"></i> Close</button>
        </footer>
      </div>`;
  }

  /** Assemble tab → renderable row models from live registration metadata. */
  _buildTabs() {
    const tabs = TAB_LAYOUT.map(t => ({ ...t, rows: [] }));

    for (const tab of tabs) {
      for (const key of tab.keys) {
        const row = this._rowModel(key);
        if (row) tab.rows.push(row);
      }
    }

    // Orphans → Debug tab, so layout drift is visible instead of silent.
    const debug = tabs.find(t => t.id === "debug");
    for (const key of _orphanKeys()) {
      const row = this._rowModel(key);
      if (row) debug.rows.push({ ...row, orphan: true });
    }
    return tabs;
  }

  _rowModel(key) {
    const meta = _meta(key);
    if (!meta) return null;
    let current;
    try { current = getSetting(key); } catch { return null; }

    return {
      key,
      name:    _loc(meta.name, key),
      hint:    _loc(meta.hint, ""),
      scope:   meta.scope ?? "world",
      type:    meta.type,
      range:   meta.range ?? null,
      choices: meta.choices ?? null,
      default: meta.default,
      current,
    };
  }

  _renderRow(r) {
    const scopeBadge = `<span class="nca-set-scope nca-scope-${r.scope}" title="${r.scope === "client" ? "Stored per-user" : "Stored in the world"}">${r.scope}</span>`;
    const searchText = this._escape(`${r.name} ${r.hint} ${r.key}`.toLowerCase());

    return `
      <div class="nca-set-row" data-key="${r.key}" data-search="${searchText}">
        <div class="nca-set-row-head">
          <label for="nca-set-${r.key}">${this._escape(r.name)}</label>
          ${scopeBadge}
          <div class="nca-set-control">${this._renderInput(r)}</div>
        </div>
        ${r.hint ? `<p class="nca-set-hint">${this._escape(r.hint)}</p>` : ""}
      </div>`;
  }

  _renderInput(r) {
    const id = `nca-set-${r.key}`;

    if (r.type === Boolean) {
      return `<input type="checkbox" id="${id}" data-key="${r.key}" data-dtype="Boolean" ${r.current ? "checked" : ""}>`;
    }

    if (r.choices) {
      const opts = Object.entries(r.choices).map(([v, lbl]) =>
        `<option value="${this._escape(v)}" ${String(r.current) === String(v) ? "selected" : ""}>${this._escape(_loc(lbl, String(lbl)))}</option>`
      ).join("");
      return `<select id="${id}" data-key="${r.key}" data-dtype="String">${opts}</select>`;
    }

    if (r.type === Number && r.range) {
      return `
        <input type="range" id="${id}" data-key="${r.key}" data-dtype="Number"
               min="${r.range.min}" max="${r.range.max}" step="${r.range.step ?? 1}"
               value="${Number(r.current)}">
        <output class="nca-set-range-value" for="${id}">${Number(r.current)}</output>`;
    }

    if (r.type === Number) {
      return `<input type="number" id="${id}" data-key="${r.key}" data-dtype="Number" value="${Number(r.current)}">`;
    }

    return `<input type="text" id="${id}" data-key="${r.key}" data-dtype="String" value="${this._escape(r.current ?? "")}">`;
  }

  _escape(value) {
    const div = document.createElement("div");
    div.textContent = String(value ?? "");
    return div.innerHTML;
  }

  /** @override — required alongside _renderHTML for a non-Handlebars AppV2. */
  _replaceHTML(result, content) {
    if (result instanceof HTMLElement || result instanceof DocumentFragment) {
      content.replaceChildren(result);
      return;
    }
    const wrapper = document.createElement("div");
    wrapper.innerHTML = result ?? "";
    content.replaceChildren(...Array.from(wrapper.childNodes));
  }

  // ── Event wiring ───────────────────────────────────────────────────────────

  /** @override */
  _attachFrameListeners() {
    super._attachFrameListeners();
    if (this._ncaListenersAttached) return;
    this._ncaListenersAttached = true;
    this.element.addEventListener("click",  this._onClick.bind(this));
    this.element.addEventListener("input",  this._onInput.bind(this));
    this.element.addEventListener("change", () => this._markDirty());
  }

  _onClick(event) {
    const tab = event.target.closest(".nca-set-tab");
    if (tab) {
      this._activeTab = tab.dataset.tab;
      this._switchTab(tab.dataset.tab);
      return;
    }
    if (event.target.closest(".nca-set-save"))   return void this._save();
    if (event.target.closest(".nca-set-cancel")) return void this.close();
    const reset = event.target.closest(".nca-set-reset");
    if (reset) return void this._resetTab(reset.dataset.tab);
  }

  _onInput(event) {
    const el = event.target;
    if (el.classList.contains("nca-set-filter")) {
      this._filter = el.value;
      this._applyFilter();
      return;
    }
    if (el.type === "range") {
      const out = el.parentElement?.querySelector(".nca-set-range-value");
      if (out) out.textContent = el.value;
    }
    this._markDirty();
  }

  _switchTab(tabId) {
    for (const el of this.element.querySelectorAll(".nca-set-tab")) {
      el.classList.toggle("active", el.dataset.tab === tabId);
    }
    for (const el of this.element.querySelectorAll(".nca-set-panel")) {
      el.classList.toggle("active", el.dataset.tab === tabId);
    }
  }

  /** Live search: hides non-matching rows; tabs with matches glow. */
  _applyFilter() {
    const q = this._filter.trim().toLowerCase();
    const matchesPerTab = new Map();

    for (const row of this.element.querySelectorAll(".nca-set-row")) {
      const match = !q || row.dataset.search.includes(q);
      row.classList.toggle("nca-filtered-out", !match);
      if (match && q) {
        const tab = row.closest(".nca-set-panel")?.dataset.tab;
        matchesPerTab.set(tab, (matchesPerTab.get(tab) ?? 0) + 1);
      }
    }
    for (const el of this.element.querySelectorAll(".nca-set-tab")) {
      el.classList.toggle("nca-has-matches", !!q && (matchesPerTab.get(el.dataset.tab) ?? 0) > 0);
    }
  }

  _markDirty() {
    const badge = this.element.querySelector(".nca-set-dirty");
    if (badge) badge.hidden = false;
  }

  // ── Persistence ────────────────────────────────────────────────────────────

  _readControl(el) {
    switch (el.dataset.dtype) {
      case "Boolean": return el.checked;
      case "Number": {
        const n = Number(el.value);
        return Number.isFinite(n) ? n : null;
      }
      default: return el.value;
    }
  }

  async _save() {
    let written = 0;
    const failures = [];

    for (const el of this.element.querySelectorAll("[data-key]")) {
      const key = el.dataset.key;
      if (!key || el.tagName === "BUTTON") continue;
      const next = this._readControl(el);
      if (next === null) continue;

      let current;
      try { current = getSetting(key); } catch { continue; }
      if (current === next) continue;

      try {
        await setSetting(key, next);
        written++;
      } catch (err) {
        failures.push(key);
        log(`[Settings UI] Failed to save "${key}": ${err.message}`, "warn");
      }
    }

    if (failures.length) {
      ui.notifications.error(game.i18n.format("NCA.Notify.SettingsSaveFailed", { n: failures.length }));
    } else if (written > 0) {
      ui.notifications.info(game.i18n.format("NCA.Notify.SettingsSaved", { n: written }));
    }
    const badge = this.element.querySelector(".nca-set-dirty");
    if (badge) badge.hidden = true;
    if (written > 0) this.render();
  }

  /** Restore a tab's controls to their registered defaults (UI only — Save commits). */
  _resetTab(tabId) {
    const panel = this.element.querySelector(`.nca-set-panel[data-tab="${tabId}"]`);
    if (!panel) return;
    for (const el of panel.querySelectorAll("[data-key]")) {
      const meta = _meta(el.dataset.key);
      if (!meta) continue;
      const def = meta.default;
      if (el.dataset.dtype === "Boolean") el.checked = !!def;
      else el.value = def ?? "";
      if (el.type === "range") {
        const out = el.parentElement?.querySelector(".nca-set-range-value");
        if (out) out.textContent = el.value;
      }
    }
    this._markDirty();
    ui.notifications.info(game.i18n.localize("NCA.App.ResetInfo"));
  }
}

// ─── Menu registration ────────────────────────────────────────────────────────

/**
 * Register the "Configure" menu button in Foundry's native settings panel.
 * Called from main.js init (after setting registration) to avoid a circular
 * import between settings.js and this file.
 */
export function registerSettingsMenu() {
  game.settings.registerMenu(MODULE_ID, "openSettings", {
    name:       "NCA.App.MenuLabel",
    label:      "NCA.App.MenuLabel",
    hint:       "NCA.App.MenuHint",
    icon:       "fas fa-sliders-h",
    type:       NCASettingsApp,
    restricted: true,
  });
}
