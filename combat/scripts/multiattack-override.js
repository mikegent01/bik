/**
 * multiattack-override.js
 *
 * Manual multiattack configuration for actors where the parser fails.
 *
 * Design:
 *  - GM can define attack order/count per actor as an actor flag.
 *  - Flags store item IDs (not names) for stability.
 *  - parseMultiattack() checks for a valid flag before running phases.
 *  - MultiattackOverrideApp is an ApplicationV2 dialog accessed from
 *    the actor sheet header or a right-click token menu.
 *
 * Flag schema (stored at actor.flags["5e-npc-combat-automation"].multiattack):
 *   {
 *     enabled: boolean,          // false = ignore override, use parser
 *     attacks: [                 // ordered list of item actions, one entry per slot
 *       { itemId: string, count: number }   // count = how many times this item fires
 *     ]
 *   }
 *
 * The historical flag key remains "attacks" for backward compatibility, but
 * entries may now be weapons, spells, or features. e.g. Dragon Breath × 1, Rend × 2
 * resolves to [Dragon Breath, Rend, Rend].
 */

import { MODULE_ID } from "./constants.js";
import { log, getActivities } from "./utils.js";

// ─── Flag helpers ─────────────────────────────────────────────────────────────

const FLAG_KEY = "multiattack";
const BEHAVIOR_FLAG_KEY = "behavior";

/**
 * Read the raw override flag from an actor.
 * Returns null if not set or structurally invalid.
 *
 * @param {Actor5e} actor
 * @returns {{ enabled: boolean, attacks: Array<{itemId:string,count:number}> } | null}
 */
export function getOverrideFlag(actor) {
  const flag = actor.getFlag(MODULE_ID, FLAG_KEY);
  if (!flag || typeof flag !== "object") return null;
  if (!Array.isArray(flag.attacks)) return null;
  return flag;
}

/**
 * Read actor behaviour hints used by the automation layer.
 * This is intentionally simple: subtype is a free-text tag, while
 * retreatWhenBloodied marks actors that should flee once bloodied.
 */
export function getBehaviorFlag(actor) {
  const flag = actor.getFlag(MODULE_ID, BEHAVIOR_FLAG_KEY);
  if (!flag || typeof flag !== "object") return { subtype: "", retreatWhenBloodied: false };
  return {
    subtype: String(flag.subtype ?? ""),
    retreatWhenBloodied: flag.retreatWhenBloodied === true,
  };
}

/**
 * Validate the override flag against the actor's current items.
 * Returns { valid: boolean, missingIds: string[] }.
 *
 * A flag is valid if every referenced itemId still exists on the actor.
 *
 * @param {Actor5e} actor
 * @param {{ enabled: boolean, attacks: Array<{itemId:string,count:number}> }} flag
 * @returns {{ valid: boolean, missingIds: string[] }}
 */
export function validateOverrideFlag(actor, flag) {
  const missingIds = [];
  for (const entry of flag.attacks) {
    if (!actor.items.get(entry.itemId)) {
      missingIds.push(entry.itemId);
    }
  }
  return { valid: missingIds.length === 0, missingIds };
}

/**
 * Convert a validated override flag into the same shape that parseMultiattack()
 * returns, so automation.js sees a transparent interface.
 *
 * Returns null if the flag is disabled, empty, or invalid.
 *
 * @param {Actor5e} actor
 * @returns {{ count: number, attackNames: string[], counts: Record<string,number>, replacements: [] } | null}
 */
export function resolveOverride(actor) {
  const flag = getOverrideFlag(actor);
  if (!flag || !flag.enabled) return null;
  if (!flag.attacks || flag.attacks.length === 0) return null;

  const { valid, missingIds } = validateOverrideFlag(actor, flag);
  if (!valid) {
    // Warn the GM and fall through to the parser — safer than crashing.
    const msg = `[NCA] Multiattack override for "${actor.name}" references missing item IDs: ${missingIds.join(", ")}. Falling back to parser.`;
    console.warn(msg);
    ui.notifications?.warn(game.i18n.format("NCA.MA.StaleWarn", { name: actor.name }));
    return null;
  }

  const itemIds = [];
  const actionNames = [];
  let count = 0;

  for (const entry of flag.attacks) {
    const item = actor.items.get(entry.itemId);
    if (!item) continue; // already validated, shouldn't happen
    const n = Math.max(1, entry.count ?? 1);
    count += n;
    for (let i = 0; i < n; i++) {
      itemIds.push(item.id);
      actionNames.push(item.name);
    }
  }

  if (count === 0) return null;

  log(`Multiattack override resolved for ${actor.name}: ${actionNames.join(", ")}`);

  // Keep attackNames/counts for parser compatibility, but provide itemIds so
  // automation can execute any configured item, not only attack-roll items.
  return { count, attackNames: actionNames, counts: {}, itemIds, replacements: [] };
}

// ─── ApplicationV2 config dialog ─────────────────────────────────────────────

/**
 * Open the override configuration dialog for an actor.
 * Idiomatic: called from a renderActorSheet hook or token context menu.
 *
 * @param {Actor5e} actor
 */
export function openOverrideApp(actor) {
  new MultiattackOverrideApp(actor).render(true);
}

/**
 * MultiattackOverrideApp
 *
 * An ApplicationV2 dialog that lets the GM define a manual multiattack
 * sequence for an actor. Items are presented from the actor's own inventory.
 *
 * The UI shows attack items in two columns:
 *  LEFT:  "Available attacks" — items on the actor with an attack roll
 *  RIGHT: "Configured sequence" — the ordered attack list the NPC will use
 *
 * The GM clicks an item in the left list to add one copy to the right list.
 * They can remove or reorder entries on the right via buttons.
 * A "count" spinner on each right-list entry lets them set repetition without
 * clicking multiple times.
 */
/**
 * Items on an actor that can be sequenced as multiattack steps: anything with
 * an attack, a damaging/save/utility activity, or a non-passive activation.
 * Shared by the standalone app and the consolidated NPC-sheet tab section.
 *
 * @param {Actor5e} actor
 * @returns {Item5e[]}
 */
export function getUsableItems(actor) {
  return actor.items.filter(item => {
    if (["class", "subclass", "background", "species", "container", "loot", "equipment"].includes(item.type)) return false;
    if (item.hasAttack) return true;
    const actionType = item.system?.actionType;
    if (["mwak", "rwak", "msak", "rsak"].includes(actionType)) return true;
    const activities = getActivities(item);
    if (activities.length > 0 && activities.some(a => {
      if (!a) return false;
      if (["attack", "damage", "save", "heal", "utility", "summon"].includes(a.type)) return true;
      return !!(a.activation || a.damage || a.save || a.consumption);
    })) return true;
    const activation = item.system?.activation;
    return !!(activation?.type && activation.type !== "none");
  }).sort((a, b) => a.name.localeCompare(b.name));
}

class MultiattackOverrideApp extends foundry.applications.api.ApplicationV2 {

  constructor(actor) {
    super();
    this._actor = actor;
  }

  /** @override */
  static DEFAULT_OPTIONS = {
    id:       "nca-multiattack-override",
    classes:  ["nca-override-app"],
    tag:      "div",
    window: {
      title:     "NCA.MA.WindowTitle",
      resizable: true,
    },
    position: {
      width:  560,
      height: "auto",
    },
  };

  get title() {
    return game.i18n.format("NCA.MA.TitleFor", { name: this._actor.name });
  }

  // ── Data preparation ──────────────────────────────────────────────────────

  /**
   * Return actor items that can reasonably be used as an action sequence entry.
   * This intentionally includes non-attack features such as Dragon's Breath.
   */
  _getUsableItems() {
    return getUsableItems(this._actor);
  }

  _escape(value) {
    const div = document.createElement("div");
    div.textContent = String(value ?? "");
    return div.innerHTML;
  }

  /**
   * Build <option> elements for the archetype dropdown.
   * Groups archetypes by combat role for readability.
   * The current saved subtype is pre-selected.
   *
   * @param {string} current   currently saved subtype value (may be "")
   * @returns {string}         HTML string of <option> and <optgroup> elements
   */
  _buildArchetypeOptions(current) {
    const selected = (val) => val === current ? " selected" : "";

    const groups = [
      {
        label: game.i18n.localize("NCA.MAGroup.None"),
        options: [{ value: "", label: game.i18n.localize("NCA.MAOpt.") }],
      },
      {
        label: game.i18n.localize("NCA.MAGroup.Aggressive"),
        options: [
          { value: "berserker",  label: game.i18n.localize("NCA.MAOpt.berserker") },
          { value: "brute",      label: game.i18n.localize("NCA.MAOpt.brute") },
          { value: "zealot",     label: game.i18n.localize("NCA.MAOpt.zealot") },
          { value: "fearless",   label: game.i18n.localize("NCA.MAOpt.fearless") },
        ],
      },
      {
        label: game.i18n.localize("NCA.MAGroup.Cautious"),
        options: [
          { value: "coward",     label: game.i18n.localize("NCA.MAOpt.coward") },
          { value: "cautious",   label: game.i18n.localize("NCA.MAOpt.cautious") },
          { value: "defensive",  label: game.i18n.localize("NCA.MAOpt.defensive") },
        ],
      },
      {
        label: game.i18n.localize("NCA.MAGroup.Tactical"),
        options: [
          { value: "disciplined", label: game.i18n.localize("NCA.MAOpt.disciplined") },
          { value: "tactician",   label: game.i18n.localize("NCA.MAOpt.tactician") },
          { value: "guardian",    label: game.i18n.localize("NCA.MAOpt.guardian") },
          { value: "bodyguard",   label: game.i18n.localize("NCA.MAOpt.bodyguard") },
        ],
      },
      {
        label: game.i18n.localize("NCA.MAGroup.Ranged"),
        options: [
          { value: "skirmisher", label: game.i18n.localize("NCA.MAOpt.skirmisher") },
          { value: "sniper",     label: game.i18n.localize("NCA.MAOpt.sniper") },
          { value: "artillery",  label: game.i18n.localize("NCA.MAOpt.artillery") },
        ],
      },
      {
        label: game.i18n.localize("NCA.MAGroup.Predatory"),
        options: [
          { value: "predator",          label: game.i18n.localize("NCA.MAOpt.predator") },
          { value: "hunter",            label: game.i18n.localize("NCA.MAOpt.hunter") },
          { value: "beast-instinctive", label: game.i18n.localize("NCA.MAOpt.beast-instinctive") },
        ],
      },
      {
        label: game.i18n.localize("NCA.MAGroup.Pack"),
        options: [
          { value: "pack-hunter", label: game.i18n.localize("NCA.MAOpt.pack-hunter") },
          { value: "hive-minded", label: game.i18n.localize("NCA.MAOpt.hive-minded") },
        ],
      },
      {
        label: game.i18n.localize("NCA.MAGroup.Stealth"),
        options: [
          { value: "opportunist", label: game.i18n.localize("NCA.MAOpt.opportunist") },
          { value: "assassin",    label: game.i18n.localize("NCA.MAOpt.assassin") },
          { value: "ambusher",    label: game.i18n.localize("NCA.MAOpt.ambusher") },
        ],
      },
      {
        label: game.i18n.localize("NCA.MAGroup.Special"),
        options: [
          { value: "territorial",        label: game.i18n.localize("NCA.MAOpt.territorial") },
          { value: "sadistic",           label: game.i18n.localize("NCA.MAOpt.sadistic") },
          { value: "undead-mindless",    label: game.i18n.localize("NCA.MAOpt.undead-mindless") },
          { value: "undead-disciplined", label: game.i18n.localize("NCA.MAOpt.undead-disciplined") },
        ],
      },
    ];

    return groups.map(group => {
      if (group.label.startsWith("—")) {
        return group.options
          .map(o => `<option value="${o.value}"${selected(o.value)}>${this._escape(o.label)}</option>`)
          .join("");
      }
      const opts = group.options
        .map(o => `  <option value="${o.value}"${selected(o.value)}>${this._escape(o.label)}</option>`)
        .join("\n");
      return `<optgroup label="${this._escape(group.label)}">\n${opts}\n</optgroup>`;
    }).join("\n");
  }

  /**
   * Build the current configured sequence from the stored flag.
   * Returns [ { itemId, count, name, img } ]
   */
  _getConfiguredSequence() {
    const flag = getOverrideFlag(this._actor);
    if (!flag || !flag.attacks) return [];
    return flag.attacks.map(entry => {
      const item = this._actor.items.get(entry.itemId);
      return {
        itemId: entry.itemId,
        count:  entry.count ?? 1,
        name:   item?.name ?? `(Unknown — ${entry.itemId})`,
        img:    item?.img  ?? "icons/svg/mystery-man.svg",
        missing: !item,
      };
    });
  }

  // ── Rendering ─────────────────────────────────────────────────────────────

  /** @override */
  async _prepareContext() {
    const flag       = getOverrideFlag(this._actor);
    const enabled    = flag?.enabled ?? false;
    const sequence   = this._getConfiguredSequence();
    const available  = this._getUsableItems();
    const { valid, missingIds } = flag
      ? validateOverrideFlag(this._actor, flag)
      : { valid: true, missingIds: [] };

    const behavior = getBehaviorFlag(this._actor);

    return {
      actor:      this._actor,
      enabled,
      sequence,
      available,
      valid,
      missingIds,
      totalAttacks: sequence.reduce((sum, e) => sum + (e.count ?? 1), 0),
      behavior,
    };
  }

  /** @override */
  async _renderHTML(context) {
    const { enabled, sequence, available, valid, missingIds, totalAttacks, behavior } = context;

    const missingWarning = !valid
      ? `<p class="nca-warning">⚠ Some configured items are missing from this actor (IDs: ${missingIds.join(", ")}). The parser will be used until this is fixed.</p>`
      : "";

    const availableRows = available.map(item => `
      <div class="nca-item-row" draggable="true" data-drag-source="available" data-item-id="${item.id}">
        <img src="${item.img}" alt="${item.name}" />
        <span class="nca-item-name">${item.name}</span>
        <span class="nca-item-type">${item.type}</span>
        <button type="button" class="nca-add-item" data-item-id="${item.id}" title="Add to sequence">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    `).join("") || `<p class="nca-empty">No usable actions found on this actor.</p>`;

    const sequenceRows = sequence.map((entry, idx) => `
      <div class="nca-seq-row ${entry.missing ? "nca-missing" : ""}" draggable="true" data-drag-source="sequence" data-index="${idx}">
        <img src="${entry.img}" alt="${entry.name}" />
        <span class="nca-item-name">${entry.name}${entry.missing ? " ⚠" : ""}</span>
        <input type="number" class="nca-count" data-index="${idx}"
               value="${entry.count}" min="1" max="10" aria-label="Use count" />
        <div class="nca-seq-btns">
          <button type="button" class="nca-move-up"   data-index="${idx}" title="Move up"   ${idx === 0 ? "disabled" : ""}><i class="fas fa-arrow-up"></i></button>
          <button type="button" class="nca-move-down" data-index="${idx}" title="Move down" ${idx === sequence.length - 1 ? "disabled" : ""}><i class="fas fa-arrow-down"></i></button>
          <button type="button" class="nca-remove"    data-index="${idx}" title="Remove"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    `).join("") || `<p class="nca-empty">No actions configured. Drag items from the left or click plus to add them.</p>`;

    return `
      <div class="nca-override-wrapper">

        <div class="nca-override-header">
          <label class="nca-enable-label">
            <input type="checkbox" id="nca-override-enabled" ${enabled ? "checked" : ""} />
            <strong>Use manual override</strong>
            <span class="nca-hint">(Disabling uses the parser instead)</span>
          </label>
          ${missingWarning}
        </div>

        <section class="nca-behavior-panel">
          <h3>Behavior Profile</h3>
          <div class="nca-behavior-grid">
            <label>
              <span>Archetype</span>
              <select id="nca-behavior-subtype" class="nca-archetype-select">
                ${this._buildArchetypeOptions(behavior.subtype ?? "")}
              </select>
            </label>
            <label class="nca-check-row">
              <input type="checkbox" id="nca-retreat-bloodied" ${behavior.retreatWhenBloodied ? "checked" : ""} />
              <span>Retreat when bloodied</span>
            </label>
          </div>
          <p class="nca-dnd-hint">Sets how this NPC thinks and fights. Frightened NPCs always retreat. Bloodied retreat triggers when the checkbox is set, or the archetype includes retreat behavior.</p>
        </section>

        <div class="nca-override-body">
          <div class="nca-col">
            <h3>Available Actions</h3>
            <p class="nca-dnd-hint">Drag weapons, spells, or features into the sequence, or use the plus button.</p>
            <div class="nca-item-list">${availableRows}</div>
          </div>

          <div class="nca-col">
            <h3>Action Sequence <span class="nca-total">(${totalAttacks} total)</span></h3>
            <div class="nca-seq-list" id="nca-seq-list" data-drop-zone="sequence">${sequenceRows}</div>
            <div class="nca-seq-actions">
              <button type="button" id="nca-clear-seq" title="Clear all">
                <i class="fas fa-times"></i> Clear all
              </button>
            </div>
          </div>
        </div>

        <footer class="nca-override-footer">
          <button type="button" id="nca-save" class="nca-btn-primary">
            <i class="fas fa-save"></i> Save Override
          </button>
          <button type="button" id="nca-cancel">
            <i class="fas fa-times"></i> Cancel
          </button>
        </footer>
      </div>
    `;
  }

  /** @override
   * ApplicationV2 is abstract unless both _renderHTML and _replaceHTML exist.
   * This app hand-renders a string instead of using HandlebarsApplicationMixin,
   * so we replace the inner content directly with safe DOM parsing.
   */
  _replaceHTML(result, content) {
    if (result instanceof HTMLElement) {
      content.replaceChildren(result);
      return;
    }
    if (result instanceof DocumentFragment) {
      content.replaceChildren(result);
      return;
    }
    const wrapper = document.createElement("div");
    wrapper.innerHTML = result ?? "";
    content.replaceChildren(...Array.from(wrapper.childNodes));
  }

  // ── Event wiring ──────────────────────────────────────────────────────────

  /** @override */
  _attachFrameListeners() {
    super._attachFrameListeners();
    if (this._ncaListenersAttached) return;
    this._ncaListenersAttached = true;
    this.element.addEventListener("click",  this._onClick.bind(this));
    this.element.addEventListener("change", this._onChange.bind(this));
    this.element.addEventListener("dragstart", this._onDragStart.bind(this));
    this.element.addEventListener("dragover",  this._onDragOver.bind(this));
    this.element.addEventListener("drop",      this._onDrop.bind(this));
    this.element.addEventListener("dragend",   this._onDragEnd.bind(this));
  }

  /** Delegated click handler for all interactive elements */
  async _onClick(event) {
    const btn = event.target.closest("button[data-item-id], button#nca-save, button#nca-cancel, button#nca-clear-seq, button.nca-move-up, button.nca-move-down, button.nca-remove");
    if (!btn) return;

    // Add item to sequence
    if (btn.classList.contains("nca-add-item")) {
      const itemId = btn.dataset.itemId;
      await this._addItem(itemId);
      return;
    }

    // Reorder
    if (btn.classList.contains("nca-move-up"))   { await this._moveEntry(parseInt(btn.dataset.index), -1); return; }
    if (btn.classList.contains("nca-move-down"))  { await this._moveEntry(parseInt(btn.dataset.index),  1); return; }
    if (btn.classList.contains("nca-remove"))     { await this._removeEntry(parseInt(btn.dataset.index)); return; }

    if (btn.id === "nca-clear-seq") { await this._clearSequence(); return; }
    if (btn.id === "nca-save")      { await this._save(); return; }
    if (btn.id === "nca-cancel")    { await this.close(); return; }
  }

  /** Handle count spinner changes */
  async _onChange(event) {
    if (!event.target.classList.contains("nca-count")) return;
    const idx   = parseInt(event.target.dataset.index);
    const count = Math.max(1, Math.min(10, parseInt(event.target.value) || 1));
    const seq   = this._getConfiguredSequence();
    if (seq[idx]) {
      seq[idx].count = count;
      await this._writeSequence(seq);
    }
  }

  _onDragStart(event) {
    const row = event.target.closest(".nca-item-row, .nca-seq-row");
    if (!row) return;

    const payload = row.classList.contains("nca-seq-row")
      ? { source: "sequence", index: Number(row.dataset.index) }
      : { source: "available", itemId: row.dataset.itemId };

    event.dataTransfer?.setData("text/plain", JSON.stringify(payload));
    event.dataTransfer?.setData("application/json", JSON.stringify(payload));
    if (event.dataTransfer) event.dataTransfer.effectAllowed = "copyMove";
    row.classList.add("nca-dragging");
  }

  _onDragOver(event) {
    const zone = event.target.closest(".nca-seq-list, .nca-seq-row");
    if (!zone) return;
    event.preventDefault();
    if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
    this.element.querySelector(".nca-seq-list")?.classList.add("nca-drop-active");
  }

  _onDragEnd() {
    this.element.querySelectorAll(".nca-dragging, .nca-drop-active").forEach(el => {
      el.classList.remove("nca-dragging", "nca-drop-active");
    });
  }

  async _onDrop(event) {
    const zone = event.target.closest(".nca-seq-list, .nca-seq-row");
    if (!zone) return;
    event.preventDefault();
    this._onDragEnd();

    const targetRow = event.target.closest(".nca-seq-row");
    const targetIndex = targetRow ? Number(targetRow.dataset.index) : this._getConfiguredSequence().length;
    const payload = await this._readDropPayload(event);
    if (!payload) return;

    if (payload.source === "sequence") {
      await this._moveEntryTo(Number(payload.index), targetIndex);
      return;
    }

    const itemId = await this._resolveDroppedItemId(payload);
    if (!itemId) return;
    await this._insertItem(itemId, targetIndex);
  }

  async _readDropPayload(event) {
    const raw = event.dataTransfer?.getData("application/json") || event.dataTransfer?.getData("text/plain");
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (_) {
      return null;
    }
  }

  async _resolveDroppedItemId(payload) {
    if (payload?.source === "available" && payload.itemId) return payload.itemId;

    // Foundry actor sheet item drag payloads usually include {type:"Item", uuid:"Actor...Item..."}.
    // Keep this actor-first: only accept items already embedded on the configured actor.
    if (payload?.type === "Item") {
      let item = null;
      if (payload.uuid && globalThis.fromUuid) {
        try { item = await fromUuid(payload.uuid); } catch (_) { item = null; }
      }
      if (!item && payload.id) item = this._actor.items.get(payload.id);
      if (!item && payload.itemId) item = this._actor.items.get(payload.itemId);

      const actorItem = item?.id ? this._actor.items.get(item.id) : null;
      if (actorItem) return actorItem.id;

      ui.notifications?.warn(game.i18n.localize("NCA.MA.DropWarn"));
      return null;
    }

    if (payload?.itemId && this._actor.items.get(payload.itemId)) return payload.itemId;
    return null;
  }

  // ── Sequence mutation helpers ─────────────────────────────────────────────

  async _addItem(itemId) {
    const seq = this._getConfiguredSequence();
    seq.push({ itemId, count: 1 });
    await this._writeSequence(seq);
  }

  async _insertItem(itemId, index = null) {
    const seq = this._getConfiguredSequence();
    const insertAt = Number.isFinite(index) ? Math.max(0, Math.min(seq.length, index)) : seq.length;
    seq.splice(insertAt, 0, { itemId, count: 1 });
    await this._writeSequence(seq);
  }

  async _removeEntry(idx) {
    const seq = this._getConfiguredSequence();
    seq.splice(idx, 1);
    await this._writeSequence(seq);
  }

  async _moveEntry(idx, direction) {
    const seq   = this._getConfiguredSequence();
    const other = idx + direction;
    if (other < 0 || other >= seq.length) return;
    [seq[idx], seq[other]] = [seq[other], seq[idx]];
    await this._writeSequence(seq);
  }

  async _moveEntryTo(fromIndex, targetIndex) {
    const seq = this._getConfiguredSequence();
    if (!Number.isFinite(fromIndex) || fromIndex < 0 || fromIndex >= seq.length) return;
    let insertAt = Number.isFinite(targetIndex) ? Math.max(0, Math.min(seq.length, targetIndex)) : seq.length;
    const [entry] = seq.splice(fromIndex, 1);
    if (insertAt > fromIndex) insertAt -= 1;
    seq.splice(insertAt, 0, entry);
    await this._writeSequence(seq);
  }

  async _clearSequence() {
    await this._writeSequence([]);
  }

  /**
   * Write an updated sequence back to the actor flag and re-render.
   * Preserves the current enabled state.
   */
  async _writeSequence(sequence) {
    const current = getOverrideFlag(this._actor) ?? {};
    await this._actor.setFlag(MODULE_ID, FLAG_KEY, {
      enabled: current.enabled ?? false,
      attacks: sequence.map(e => ({ itemId: e.itemId, count: e.count ?? 1 })),
    });
    this.render(); // re-render to refresh the displayed sequence
  }

  /** Collect enabled checkbox + current sequence and save to flag. */
  async _save() {
    const enabled  = this.element.querySelector("#nca-override-enabled")?.checked ?? false;
    const sequence = this._getConfiguredSequence();
    await this._actor.setFlag(MODULE_ID, FLAG_KEY, {
      enabled,
      attacks: sequence.map(e => ({ itemId: e.itemId, count: e.count ?? 1 })),
    });

    const subtypeInput = this.element.querySelector("#nca-behavior-subtype");
    const retreatInput = this.element.querySelector("#nca-retreat-bloodied");
    await this._actor.setFlag(MODULE_ID, BEHAVIOR_FLAG_KEY, {
      subtype: String(subtypeInput?.value ?? "").trim(),
      retreatWhenBloodied: !!retreatInput?.checked,
    });

    const totalAttacks = sequence.reduce((sum, e) => sum + (e.count ?? 1), 0);
    const status = enabled
      ? game.i18n.format("NCA.MA.StatusActive", { n: totalAttacks, list: sequence.map(e => e.name).join(", ") })
      : game.i18n.localize("NCA.MA.StatusDisabled");
    ui.notifications?.info(status);

    log(`Override saved for ${this._actor.name}: enabled=${enabled}, attacks=${JSON.stringify(sequence)}`);
    await this.close();
  }
}

// ─── Hook registrations ───────────────────────────────────────────────────────

/**
 * Inject an "NCA Override" button into the actor sheet header.
 * Only shown to GMs on NPC actors.
 *
 * This hook fires for every ActorSheet render, including ApplicationV2 sheets.
 * We target the header controls area and append a small config button.
 */
export function registerOverrideHooks() {
  // Multiattack configuration now lives inside the Automated NPCs sheet tab
  // (see ui.js). The old header button, ApplicationV2 header injection, and
  // token context-menu entry were removed in 0.25.0 to reduce sheet clutter.
  // The standalone MultiattackOverrideApp remains available via openOverrideApp()
  // for API/back-compat, but is no longer surfaced automatically.
}
