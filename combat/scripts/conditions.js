/**
 * conditions.js
 * Condition & spell-driven behaviour mapping.
 *
 * Extends the effect-override system (effects.js) with a broad table of D&D 5e
 * conditions and behaviour-altering spells, each mapped to a set of behaviour
 * MODIFIERS that the turn pipeline honours. effects.js handles the four
 * "legacy" overrides (charm / confusion / hold / taunt-berserk-pacified); this
 * module covers everything else and is consulted by resolveEffectOverride
 * before those.
 *
 * The behaviour-modifier vocabulary (all fields optional on the result):
 *   suppressTurn        : do nothing at all (unconscious, petrified, stunned…)
 *   skipAttack          : move but never attack
 *   skipMove            : act from current cell, never path
 *   forbidApproachSource: may act/attack but must not path toward `source`
 *   preferDistance      : actively prefer cells farther from `source`
 *   forceTarget         : must target this token (Command:Approach, Compelled…)
 *   forbidTargetSource  : may not target `source` (charm-like)
 *   invertDisposition   : treat former allies as enemies (Dominate)
 *   visionLimitFt       : can only see/target within this range (Blinded/Fog)
 *   actionEconomy        : { noMultiattack, noBonusAction, noReaction, single } (Slow)
 *   commandKind          : "approach"|"flee"|"halt"|"grovel"|"drop" (Command)
 *   source               : Token|null — the controlling/feared/charming token
 *   controller           : Token|null — for Dominate
 *
 * Every mapping is individually gated by a setting under the "Conditions"
 * group and annotated to the AI trace. Precedence (first match wins): a
 * turn-suppressing condition beats everything; domination beats charm; an
 * explicit Command beats softer effects.
 */

import { MODULE_ID, SETTINGS, getSetting } from "./settings.js";
import { log } from "./utils.js";

// ─── Status / name detection helpers ──────────────────────────────────────────

function _hasStatus(actor, id) {
  try {
    if (actor.statuses?.has?.(id)) return true;
  } catch { /* fall through */ }
  return _hasEffectNamed(actor, id);
}

function _hasEffectNamed(actor, name) {
  const rx = new RegExp(name, "i");
  for (const e of (actor?.effects ?? [])) {
    if (e.disabled || e.suppressed) continue;
    if (rx.test(e.name ?? e.label ?? "")) return true;
  }
  return false;
}

/** Find an active effect whose name matches, return it (for origin lookups). */
function _findEffect(actor, rx) {
  for (const e of (actor?.effects ?? [])) {
    if (e.disabled || e.suppressed) continue;
    if (rx.test(e.name ?? e.label ?? "")) return e;
  }
  return null;
}

/** True if the NPC's token centre sits inside a measured template whose
 *  originating spell name matches `rx` (Silence, Antimagic Field). */
function _inNamedZone(npcToken, rx) {
  try {
    if (!npcToken) return false;
    const gs = canvas.grid?.size ?? 100;
    const cx = npcToken.center?.x ?? (npcToken.document.x + gs / 2);
    const cy = npcToken.center?.y ?? (npcToken.document.y + gs / 2);
    for (const tpl of (canvas.templates?.placeables ?? [])) {
      const doc = tpl.document;
      const f = doc.flags ?? {};
      const name = `${f.dnd5e?.item?.name ?? f.dnd5e?.origin?.name ?? f["midi-qol"]?.itemName ?? doc.text ?? ""}`;
      if (!rx.test(name)) continue;
      const shape = tpl.shape;
      const inside = shape?.contains
        ? shape.contains(cx - doc.x, cy - doc.y)
        : Math.hypot(cx - doc.x, cy - doc.y) <= ((doc.distance ?? 0) / (canvas.grid?.distance ?? 5)) * gs;
      if (inside) return true;
    }
  } catch { /* ignore */ }
  return false;
}

/** Resolve an effect's origin actor/token to a canvas Token, if possible. */
function _originToken(effect) {
  try {
    const origin = effect?.origin;
    if (!origin) return null;
    // origin is typically "Actor.<id>" or "Scene.<id>.Token.<id>.Actor.<id>"
    const doc = fromUuidSync(origin);
    const originActor = doc?.actor ?? doc?.parent?.actor ?? doc;
    if (!originActor) return null;
    return canvas.tokens?.placeables?.find(t => t.actor?.id === (originActor.id ?? originActor.actor?.id)) ?? null;
  } catch { return null; }
}

// ─── Read an explicit conditionBehavior flag from any effect ─────────────────
// Mirrors effects.js's behaviorOverride reader, but for the richer condition
// vocabulary. An effect may set:
//   flags["5e-npc-combat-automation"].conditionBehavior = "dominated" | "command:flee" | ...
function _readConditionFlag(actor) {
  for (const e of (actor?.effects ?? [])) {
    if (e.disabled || e.suppressed) continue;
    const v = e.flags?.[MODULE_ID]?.conditionBehavior;
    if (v && typeof v === "string") return { key: v, effect: e };
  }
  return null;
}

// ─── Main entry ───────────────────────────────────────────────────────────────

/**
 * Inspect the actor for conditions/spells this module handles and return an
 * extended EffectOverrideResult, or null if nothing applies. Called by
 * resolveEffectOverride (effects.js) before its legacy charm/incap checks.
 *
 * @param {Actor5e} actor
 * @param {Token}   npcToken
 * @param {Combat}  combat
 * @returns {object|null}
 */
export function resolveConditionBehavior(actor, npcToken, combat) {
  if (!actor) return null;
  if (!getSetting(SETTINGS.ENABLE_CONDITION_BEHAVIORS)) return null;

  const mk = (type, fields) => ({
    type,
    skipAttack: false, skipMove: false, suppressTurn: false,
    forbidApproachSource: false, preferDistance: false,
    forceTarget: null, forbidTargetSource: false,
    invertDisposition: false, visionLimitFt: null, actionEconomy: null,
    commandKind: null, source: null, controller: null,
    suppressSpells: false, suppressVerbalSpells: false, suppressMagicItems: false,
    preferLeaveZone: false, zoneRx: null,
    charmSource: null, tauntSource: null, rollResult: null,
    chatKey: null, chatParams: { name: actor.name },
    ...fields,
  });

  // ── A2. Banishment — the creature is gone; no turn at all ──────────────────
  if (getSetting(SETTINGS.COND_BANISHMENT)) {
    if (_hasStatus(actor, "banished") || _findEffect(actor, /banish/i)) {
      return _annotate(actor, mk("banished", {
        suppressTurn: true, skipAttack: true, skipMove: true,
        chatKey: "NCA.Chat.Banished",
      }));
    }
  }

  // ── A. Turn-suppressing conditions (hard no-op) ─────────────────────────────
  // Beyond the "incapacitated" umbrella effects.js already catches: sleep sets
  // unconscious (not always incapacitated), and petrified is its own status.
  if (getSetting(SETTINGS.COND_SUPPRESS_TURN)) {
    for (const [status, key] of [
      ["unconscious", "Unconscious"], ["petrified", "Petrified"],
      ["paralyzed", "Paralyzed"],     ["stunned", "Stunned"],
      ["sleeping", "Asleep"],
    ]) {
      if (_hasStatus(actor, status)) {
        return _annotate(actor, mk("suppressed", {
          suppressTurn: true, skipAttack: true, skipMove: true,
          chatKey: "NCA.Chat.Incapacitated",
          subType: status,
        }));
      }
    }
  }

  // ── Explicit GM/midi conditionBehavior flag (richest, highest priority) ─────
  const flag = _readConditionFlag(actor);
  if (flag) {
    const result = _resolveFlag(flag, actor, npcToken, combat, mk);
    if (result) return _annotate(actor, result);
  }

  // ── E. Domination — controller drives; flip disposition toward old allies ──
  if (getSetting(SETTINGS.COND_DOMINATION)) {
    const dom = _findEffect(actor, /dominate|domination|dominated/i);
    if (dom) {
      const controller = _originToken(dom);
      return _annotate(actor, mk("dominated", {
        invertDisposition: true,
        controller,
        source: controller,
        chatKey: "NCA.Chat.Dominated",
        chatParams: { name: actor.name, source: controller?.name ?? "its master" },
      }));
    }
  }

  // ── C. Command spell (one-word forced behaviour) ────────────────────────────
  if (getSetting(SETTINGS.COND_COMMAND)) {
    const cmd = _findEffect(actor, /^command\b|commanded/i);
    if (cmd) {
      const kind = _commandKind(cmd);
      const source = _originToken(cmd);
      return _annotate(actor, _commandResult(kind, source, npcToken, combat, mk));
    }
  }

  // ── B. Frightened (RAW: can't approach source, disadvantage in sight) ───────
  if (getSetting(SETTINGS.COND_FRIGHTENED_RAW) && _hasStatus(actor, "frightened")) {
    const fearEffect = _findEffect(actor, /frighten|fear|terror|dread/i);
    const source = fearEffect ? _originToken(fearEffect) : null;
    // RAW frightened only restricts WHILE the source is in sight. If we can't
    // resolve a source token, fall back to "prefer distance from nearest PC".
    return _annotate(actor, mk("frightened", {
      forbidApproachSource: true,
      preferDistance: true,
      source,
      chatKey: "NCA.Chat.Frightened",
      chatParams: { name: actor.name, source: source?.name ?? "its fear" },
    }));
  }

  // ── F. Sensory: blinded / heavily obscured ──────────────────────────────────
  if (getSetting(SETTINGS.COND_BLINDED)) {
    if (_hasStatus(actor, "blinded") || _hasStatus(actor, "blind")) {
      // A blinded creature can still attack adjacent foes it can hear/feel;
      // restrict target acquisition to melee reach + a small buffer.
      return _annotate(actor, mk("blinded", {
        visionLimitFt: 5,
        chatKey: "NCA.Chat.Blinded",
      }));
    }
  }

  // ── G. Slow (action-economy restriction, no condition status) ───────────────
  if (getSetting(SETTINGS.COND_SLOW)) {
    if (_findEffect(actor, /^slow(ed)?\b/i)) {
      return _annotate(actor, mk("slowed", {
        actionEconomy: { noMultiattack: true, noBonusAction: true, noReaction: true, single: true },
        halveSpeed: true,
        chatKey: "NCA.Chat.Slowed",
      }));
    }
  }

  // ── H. Silence / Antimagic — spellcasting suppressed in-zone ───────────────
  // These don't stop the turn; they force the NPC to fall back to weapons and,
  // ideally, to step out of the zone. Detected via an applied effect OR by the
  // NPC's token sitting inside a matching template (zone membership handled in
  // movement; here we surface the effect-driven case + a leave-zone hint).
  if (getSetting(SETTINGS.COND_SILENCE)) {
    const inSilence  = _hasStatus(actor, "silenced") || _findEffect(actor, /silence/i) || _inNamedZone(npcToken, /silence/i);
    const inAntimag  = _findEffect(actor, /antimagic|anti-magic/i) || _inNamedZone(npcToken, /antimagic|anti-magic/i);
    if (inAntimag) {
      return _annotate(actor, mk("antimagic", {
        suppressSpells: true, suppressMagicItems: true, preferLeaveZone: true,
        zoneRx: /antimagic|anti-magic/i,
        chatKey: "NCA.Chat.Antimagic",
      }));
    }
    if (inSilence) {
      return _annotate(actor, mk("silenced", {
        suppressVerbalSpells: true, preferLeaveZone: true,
        zoneRx: /silence/i,
        chatKey: "NCA.Chat.Silenced",
      }));
    }
  }

  // ── I. Haste — extra action available ───────────────────────────────────────
  if (getSetting(SETTINGS.COND_HASTE)) {
    if (_hasStatus(actor, "hasted") || _findEffect(actor, /^haste|hasted/i)) {
      return _annotate(actor, mk("hasted", {
        // Non-restrictive: hasted creatures act normally PLUS one extra action
        // (Attack/Dash/Disengage/Hide/Use-Object). We grant an extra weapon
        // attack or a Dash via the action-economy field.
        actionEconomy: { extraAction: true },
        chatKey: "NCA.Chat.Hasted",
      }));
    }
  }

  // ── C(7). Compelled Duel — must attack the duelist, disadv on others ────────
  if (getSetting(SETTINGS.COND_COMMAND)) {
    const duel = _findEffect(actor, /compelled duel|compelled/i);
    if (duel) {
      const source = _originToken(duel);
      if (source) {
        return _annotate(actor, mk("compelled", {
          forceTarget: source,
          forbidApproachSource: false,
          source,
          chatKey: "NCA.Chat.Taunted",
          chatParams: { name: actor.name, source: source.name },
        }));
      }
    }
  }

  // ── D. Restrained / grappled — speed 0, may still act ───────────────────────
  if (getSetting(SETTINGS.COND_RESTRAINED)) {
    if (_hasStatus(actor, "restrained") || _hasStatus(actor, "grappled")) {
      return _annotate(actor, mk("restrained", {
        skipMove: true,
        chatKey: "NCA.Chat.Restrained",
      }));
    }
  }

  return null;
}

// ─── Command spell resolution ─────────────────────────────────────────────────

function _commandKind(effect) {
  const text = `${effect.name ?? ""} ${effect.flags?.[MODULE_ID]?.commandKind ?? ""}`.toLowerCase();
  if (/grovel/.test(text)) return "grovel";
  if (/flee/.test(text))   return "flee";
  if (/halt/.test(text))   return "halt";
  if (/drop/.test(text))   return "drop";
  if (/approach/.test(text)) return "approach";
  return effect.flags?.[MODULE_ID]?.commandKind ?? "halt"; // safest default
}

function _commandResult(kind, source, npcToken, combat, mk) {
  switch (kind) {
    case "approach":
      return mk("command", {
        commandKind: "approach", forceTarget: source, source, skipAttack: true,
        chatKey: "NCA.Chat.CommandApproach", chatParams: { name: npcToken.actor.name, source: source?.name ?? "" },
      });
    case "flee":
      return mk("command", {
        commandKind: "flee", preferDistance: true, skipAttack: true, source,
        chatKey: "NCA.Chat.CommandFlee", chatParams: { name: npcToken.actor.name },
      });
    case "grovel":
      // Falls prone, ends turn — no move, no attack.
      return mk("command", {
        commandKind: "grovel", suppressTurn: true, skipAttack: true, skipMove: true,
        chatKey: "NCA.Chat.CommandGrovel", chatParams: { name: npcToken.actor.name },
      });
    case "drop":
      // Drops what it's holding, then nothing else mechanical we model.
      return mk("command", {
        commandKind: "drop", skipAttack: true, skipMove: true,
        chatKey: "NCA.Chat.CommandDrop", chatParams: { name: npcToken.actor.name },
      });
    case "halt":
    default:
      return mk("command", {
        commandKind: "halt", skipAttack: true, skipMove: true,
        chatKey: "NCA.Chat.CommandHalt", chatParams: { name: npcToken.actor.name },
      });
  }
}

// ─── Explicit flag resolution ─────────────────────────────────────────────────

function _resolveFlag(flag, actor, npcToken, combat, mk) {
  const raw = flag.key.toLowerCase();
  const [key, arg] = raw.split(":");
  const source = _originToken(flag.effect);

  switch (key) {
    case "dominated":
      return mk("dominated", { invertDisposition: true, controller: source, source,
        chatKey: "NCA.Chat.Dominated", chatParams: { name: actor.name, source: source?.name ?? "its master" } });
    case "command":
      return _commandResult(arg ?? "halt", source, npcToken, combat, mk);
    case "frightened":
      return mk("frightened", { forbidApproachSource: true, preferDistance: true, source,
        chatKey: "NCA.Chat.Frightened", chatParams: { name: actor.name, source: source?.name ?? "its fear" } });
    case "restrained":
      return mk("restrained", { skipMove: true, chatKey: "NCA.Chat.Restrained" });
    case "slowed":
      return mk("slowed", { actionEconomy: { noMultiattack: true, noBonusAction: true, noReaction: true, single: true },
        halveSpeed: true, chatKey: "NCA.Chat.Slowed" });
    case "blinded":
      return mk("blinded", { visionLimitFt: 5, chatKey: "NCA.Chat.Blinded" });
    case "suppress":
      return mk("suppressed", { suppressTurn: true, skipAttack: true, skipMove: true,
        chatKey: "NCA.Chat.Incapacitated" });
    default:
      return null;
  }
}

// ─── Trace ────────────────────────────────────────────────────────────────────

function _annotate(actor, result) {
  try {
    import("./ai-trace.js").then(t => t.annotate?.(actor.id, {
      condition: {
        type: result.type, subType: result.subType ?? null,
        suppressTurn: !!result.suppressTurn, skipMove: !!result.skipMove,
        skipAttack: !!result.skipAttack, invertDisposition: !!result.invertDisposition,
        forbidApproach: !!result.forbidApproachSource, visionLimitFt: result.visionLimitFt ?? null,
        command: result.commandKind ?? null,
      },
    })).catch(() => {});
  } catch { /* trace off */ }
  log(`${actor.name}: condition behaviour → ${result.type}${result.commandKind ? ":" + result.commandKind : ""}`);
  return result;
}
