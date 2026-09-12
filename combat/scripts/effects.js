/**
 * effects.js
 * Resolves active behavioral effects on an NPC that override normal turn logic.
 *
 * Handles three categories:
 *
 *  1. CHARM  — "charmed" condition or a midi-qol effect flagged as charm-type.
 *              Charmed NPCs move toward the charming token but do NOT attack it.
 *              If the charmer is a player character, the NPC spends its full move
 *              approaching them and then ends its turn without attacking.
 *
 *  2. CONFUSION — "confusion" spell and similar non-condition behavioural spells.
 *              The spell tags a midi-qol Active Effect on the actor with:
 *                flags["5e-npc-combat-automation"].behaviorOverride = "confusion"
 *              The automation then rolls d10 per the PHB confusion table and
 *              executes that result (wander, attack random, do nothing, etc.).
 *
 *  3. MIDI_OVERRIDE — a midi-qol effect carrying an explicit override key
 *              via flags["5e-npc-combat-automation"].behaviorOverride = <key>.
 *              Supported override keys and their effects:
 *                "confusion"   → PHB d10 confusion table
 *                "hold"        → do nothing (incapacitated-like, but not the condition)
 *                "taunt"       → must attack the taunting source (stored in effect.origin)
 *                "berserk"     → attacks nearest creature regardless of disposition
 *                "pacified"    → moves but never attacks this turn
 *
 * Integration with midi-qol:
 *  midi-qol fires its own workflow hooks. This module does NOT interfere with those.
 *  It only reads AE flags set by midi-qol macros/item sheets to understand intent.
 *
 *  The recommended midi-qol setup for Confusion is:
 *    Item (Confusion spell) → Add Active Effect with:
 *      Key:   flags.5e-npc-combat-automation.behaviorOverride
 *      Mode:  Override (5)
 *      Value: confusion
 *    Transfer: checked (so the AE lands on the target actor)
 *
 *  The recommended midi-qol setup for Hold Person / Hold Monster is:
 *    The spell already sets "incapacitated" via the Paralyzed condition, which
 *    dnd5e/midi handles natively. behaviorOverride = "hold" is only needed for
 *    non-standard homebrew hold effects that don't set a condition.
 *
 * Architecture:
 *  resolveEffectOverride(actor, npcToken, combat) → EffectOverrideResult | null
 *
 *  Returns null if no override is active. Otherwise returns:
 *  {
 *    type:        string,        // "charm" | "confusion" | <override key>
 *    skipAttack:  boolean,       // true → skip the full attack sequence
 *    skipMove:    boolean,       // true → don't move at all
 *    charmSource: Token|null,    // set when type === "charm"
 *    tauntSource: Token|null,    // set when type === "taunt"
 *    forceTarget: Token|null,    // set when a specific token must be attacked
 *    chatKey:     string,        // i18n key for the chat message
 *    chatParams:  object,        // params for i18n.format
 *    rollResult:  number|null,   // d10 roll result for confusion
 *  }
 */

import { log, distanceBetweenTokens } from "./utils.js";
import { MODULE_ID }                  from "./settings.js";
import { resolveConditionBehavior }   from "./conditions.js";

// ─── Public entry point ───────────────────────────────────────────────────────

/**
 * Inspect the actor's active effects and resolve any NCA behavioral override.
 * Called at the top of _runTurn, before target selection.
 *
 * Async because the confusion branch rolls a d10 via Roll#evaluate(). Other
 * branches resolve synchronously but the function is marked async so the type
 * signature is honest about the Promise-return possibility.
 *
 * @param {Actor5e} actor
 * @param {Token}   npcToken
 * @param {Combat}  combat
 * @returns {Promise<EffectOverrideResult|null>}
 */
export async function resolveEffectOverride(actor, npcToken, combat) {
  if (!actor) return null;

  // ── 0. Rich condition/spell behaviours (conditions.js) ───────────────────
  // Handles the broad table: suppression (unconscious/petrified/stunned),
  // frightened-RAW, restrained/grappled, Command, Dominate, Slow, Blinded,
  // Compelled Duel, plus explicit conditionBehavior flags. Checked first so
  // these take precedence over the legacy charm/incapacitated fallbacks below
  // (e.g. a dominated creature must not be treated as merely charmed).
  const condResult = resolveConditionBehavior(actor, npcToken, combat);
  if (condResult) return condResult;

  // ── 1. Check midi-qol behaviorOverride flag (legacy overrides) ────────────
  const midiOverride = _readMidiBehaviorOverride(actor);
  if (midiOverride) {
    return await _resolveMidiOverride(midiOverride, actor, npcToken, combat);
  }

  // ── 2. Check native "charmed" condition ──────────────────────────────────
  const isCharmed = actor.statuses?.has("charmed") ?? _hasEffectNamed(actor, "charmed");
  if (isCharmed) {
    return _resolveCharm(actor, npcToken, combat, null);
  }

  // ── 3. Check native "incapacitated" condition (covers paralysis, stun, etc.) ─
  // dnd5e handles most of these by preventing actions on the item-use level.
  // We still short-circuit here so the NPC doesn't uselessly move.
  const isIncapacitated = actor.statuses?.has("incapacitated") ?? _hasEffectNamed(actor, "incapacitated");
  if (isIncapacitated) {
    return {
      type: "incapacitated",
      skipAttack: true,
      skipMove: true,
      charmSource: null,
      tauntSource: null,
      forceTarget: null,
      chatKey: "NCA.Chat.Incapacitated",
      chatParams: { name: actor.name },
      rollResult: null,
    };
  }

  return null;
}

// ─── Midi-qol flag reader ─────────────────────────────────────────────────────

/**
 * Read flags["5e-npc-combat-automation"].behaviorOverride from any active
 * (non-disabled, non-suppressed) effect on the actor.
 *
 * Returns the override string, or null if none found.
 * @param {Actor5e} actor
 * @returns {string|null}
 */
function _readMidiBehaviorOverride(actor) {
  if (!actor.effects) return null;
  for (const effect of actor.effects) {
    if (effect.disabled || effect.suppressed) continue;
    const override = effect.flags?.[MODULE_ID]?.behaviorOverride;
    if (override && typeof override === "string") {
      log(`${actor.name}: behaviorOverride detected → "${override}" (effect: ${effect.name ?? effect.label})`);
      return override;
    }
  }
  return null;
}

// ─── Midi override resolver ───────────────────────────────────────────────────

/**
 * Resolve a behavioral override key into an EffectOverrideResult.
 * Async because the "confusion" branch rolls a d10 — every other branch
 * resolves synchronously and the surrounding `await` is harmless on plain values.
 */
async function _resolveMidiOverride(overrideKey, actor, npcToken, combat) {
  switch (overrideKey.toLowerCase()) {

    case "confusion":
      return await _resolveConfusion(actor, npcToken, combat);

    case "hold":
      return {
        type: "hold",
        skipAttack: true,
        skipMove: true,
        charmSource: null,
        tauntSource: null,
        forceTarget: null,
        chatKey: "NCA.Chat.HeldInPlace",
        chatParams: { name: actor.name },
        rollResult: null,
      };

    case "taunt": {
      // Find the effect that carries this flag — its origin points to the taunter.
      const effect = actor.effects?.find(e =>
        !e.disabled && e.flags?.[MODULE_ID]?.behaviorOverride === "taunt"
      );
      const tauntSource = _findTokenByEffectOrigin(effect, combat);
      return {
        type: "taunt",
        skipAttack: false,   // must attack
        skipMove: false,
        charmSource: null,
        tauntSource,
        forceTarget: tauntSource,
        chatKey: "NCA.Chat.Taunted",
        chatParams: { name: actor.name, source: tauntSource?.name ?? "an unseen foe" },
        rollResult: null,
      };
    }

    case "berserk":
      return {
        type: "berserk",
        skipAttack: false,
        skipMove: false,
        charmSource: null,
        tauntSource: null,
        forceTarget: _findNearestCreature(npcToken, combat),
        chatKey: "NCA.Chat.Berserk",
        chatParams: { name: actor.name },
        rollResult: null,
      };

    case "pacified":
      return {
        type: "pacified",
        skipAttack: true,
        skipMove: false,
        charmSource: null,
        tauntSource: null,
        forceTarget: null,
        chatKey: "NCA.Chat.Pacified",
        chatParams: { name: actor.name },
        rollResult: null,
      };

    case "charm": {
      // Explicit charm override from a midi spell that doesn't set the charmed condition.
      const effect = actor.effects?.find(e =>
        !e.disabled && e.flags?.[MODULE_ID]?.behaviorOverride === "charm"
      );
      const charmer = _findTokenByEffectOrigin(effect, combat);
      return _resolveCharm(actor, npcToken, combat, charmer);
    }

    default:
      log(`${actor.name}: Unknown behaviorOverride "${overrideKey}" — ignoring.`, "warn");
      return null;
  }
}

// ─── Charm resolver ───────────────────────────────────────────────────────────

/**
 * Build the charm override result.
 * Charmed NPCs move toward their charmer but don't attack.
 * If no charmer token can be located, the NPC is simply pacified.
 *
 * @param {Actor5e}   actor
 * @param {Token}     npcToken
 * @param {Combat}    combat
 * @param {Token|null} explicitCharmer   set when coming from a midi effect origin
 * @returns {EffectOverrideResult}
 */
function _resolveCharm(actor, npcToken, combat, explicitCharmer) {
  // Try to find the charmer: explicit override → nearest PC → null.
  const charmSource = explicitCharmer ?? _findNearestPC(npcToken, combat);

  return {
    type: "charm",
    skipAttack: true,
    skipMove: false,       // will move TOWARD charmer, handled in automation.js
    charmSource,
    tauntSource: null,
    forceTarget: null,
    chatKey: charmSource
      ? "NCA.Chat.Charmed"
      : "NCA.Chat.CharmedNoSource",
    chatParams: {
      name:   actor.name,
      source: charmSource?.name ?? "an unknown charmer",
    },
    rollResult: null,
  };
}

// ─── Confusion resolver ───────────────────────────────────────────────────────

/**
 * Roll d10 on the PHB Confusion table and build the override result.
 *
 * PHB 5e Confusion effect (d10):
 *   1      → The creature uses all its movement to move in a random direction.
 *             To determine the direction, roll a d8 and assign a direction to
 *             each die face. The creature doesn't take an action this turn.
 *   2–6    → The creature doesn't move or take actions this turn.
 *   7–8    → The creature uses its action to make a melee attack against a
 *             randomly determined creature within its reach. If there is no
 *             creature within its reach, the creature does nothing this turn.
 *   9–10   → The creature can act and move normally.
 *
 * @param {Actor5e} actor
 * @param {Token}   npcToken
 * @param {Combat}  combat
 * @returns {EffectOverrideResult}
 */
async function _resolveConfusion(actor, npcToken, combat) {
  let roll;
  try {
    const r = new Roll("1d10");
    await r.evaluate();
    roll = r.total;
    // Surface the roll in chat so the GM can see what happened.
    await r.toMessage({
      flavor: game.i18n.format("NCA.Chat.ConfusionRoll", { name: actor.name }),
      speaker: ChatMessage.getSpeaker({ token: npcToken?.document }),
    });
  } catch (err) {
    log(`${actor.name}: Confusion d10 roll failed — defaulting to 5 (do nothing): ${err.message}`, "warn");
    roll = 5;
  }

  log(`${actor.name}: Confusion roll = ${roll}`);

  if (roll === 1) {
    // Random wander — no action.
    return {
      type: "confusion",
      skipAttack: true,
      skipMove: false,    // automation.js will handle random wander
      charmSource: null,
      tauntSource: null,
      forceTarget: null,
      chatKey: "NCA.Chat.ConfusionWander",
      chatParams: { name: actor.name },
      rollResult: roll,
    };
  }

  if (roll >= 2 && roll <= 6) {
    return {
      type: "confusion",
      skipAttack: true,
      skipMove: true,
      charmSource: null,
      tauntSource: null,
      forceTarget: null,
      chatKey: "NCA.Chat.ConfusionFrozen",
      chatParams: { name: actor.name },
      rollResult: roll,
    };
  }

  if (roll >= 7 && roll <= 8) {
    // Attack a random creature in reach.
    const randomTarget = _findRandomCreatureInReach(npcToken, combat);
    return {
      type: "confusion",
      skipAttack: !randomTarget,  // skip if no one in reach
      skipMove: true,
      charmSource: null,
      tauntSource: null,
      forceTarget: randomTarget,
      chatKey: randomTarget
        ? "NCA.Chat.ConfusionAttackRandom"
        : "NCA.Chat.ConfusionNoTarget",
      chatParams: {
        name:   actor.name,
        target: randomTarget?.name ?? "",
      },
      rollResult: roll,
    };
  }

  // 9–10: act normally — return null so automation continues as usual.
  log(`${actor.name}: Confusion roll ${roll} → acts normally this turn.`);
  return null;
}

// ─── Token-finding helpers ────────────────────────────────────────────────────

/**
 * Given an ActiveEffect whose origin is a UUID (e.g. "Actor.xxx.Item.yyy"),
 * try to find the token whose actor cast/applied it, by matching actor UUID
 * or by finding the item's parent actor.
 */
function _findTokenByEffectOrigin(effect, combat) {
  if (!effect?.origin) return null;

  const origin = effect.origin; // e.g. "Actor.aBcDef.Item.XyZ"
  const parts  = origin.split(".");

  // Extract the actor UUID segment: take the portion up to and including the Actor id.
  let actorUuid = null;
  const actorIdx = parts.indexOf("Actor");
  if (actorIdx !== -1 && parts[actorIdx + 1]) {
    actorUuid = `Actor.${parts[actorIdx + 1]}`;
  }

  if (!actorUuid) return null;

  // Find a combatant whose actor UUID matches.
  const combatant = combat?.combatants?.find(c => {
    const a = c.actor;
    return a && (`Actor.${a.id}` === actorUuid || a.uuid === actorUuid);
  });

  if (combatant) {
    return combatant.token?.object ?? canvas.tokens.get(combatant.tokenId) ?? null;
  }

  // Fall back to scanning all canvas tokens.
  return canvas.tokens.placeables.find(t => {
    const a = t.actor;
    return a && (`Actor.${a.id}` === actorUuid || a.uuid === actorUuid);
  }) ?? null;
}

/**
 * Find the nearest PC (player character) token currently on the canvas.
 */
function _findNearestPC(npcToken, combat) {
  let nearest     = null;
  let nearestDist = Infinity;

  for (const combatant of (combat?.combatants ?? [])) {
    const actor = combatant.actor;
    if (!actor) continue;
    if (actor.type !== "character" && !actor.hasPlayerOwner) continue;
    const token = combatant.token?.object ?? canvas.tokens.get(combatant.tokenId);
    if (!token || token.document.hidden || token.document.defeated) continue;

    const dist = distanceBetweenTokens(npcToken, token);
    if (dist < nearestDist) {
      nearestDist = dist;
      nearest     = token;
    }
  }

  // Also check non-combatant player tokens on the canvas.
  if (!nearest) {
    for (const token of canvas.tokens.placeables) {
      if (!token.actor) continue;
      if (token.actor.type !== "character" && !token.actor.hasPlayerOwner) continue;
      if (token.document.hidden) continue;
      const dist = distanceBetweenTokens(npcToken, token);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest     = token;
      }
    }
  }

  return nearest;
}

/**
 * Find the nearest creature (any token, any disposition, alive, not self).
 * Used for berserk behavior.
 */
function _findNearestCreature(npcToken, combat) {
  let nearest     = null;
  let nearestDist = Infinity;

  for (const token of canvas.tokens.placeables) {
    if (token.id === npcToken.id) continue;
    if (!token.actor) continue;
    if (token.document.hidden || token.document.defeated) continue;
    const hp = token.actor.system?.attributes?.hp?.value ?? 0;
    if (hp <= 0) continue;

    const dist = distanceBetweenTokens(npcToken, token);
    if (dist < nearestDist) {
      nearestDist = dist;
      nearest     = token;
    }
  }
  return nearest;
}

/**
 * Find a random creature within melee reach (5 ft or 10 ft with Reach).
 * Used for the Confusion 7–8 result.
 */
function _findRandomCreatureInReach(npcToken, combat) {
  const reach = _getReach(npcToken.actor);

  const inReach = canvas.tokens.placeables.filter(token => {
    if (token.id === npcToken.id) return false;
    if (!token.actor) return false;
    if (token.document.hidden || token.document.defeated) return false;
    const hp = token.actor.system?.attributes?.hp?.value ?? 0;
    if (hp <= 0) return false;
    return distanceBetweenTokens(npcToken, token) <= reach;
  });

  if (inReach.length === 0) return null;

  // Random pick.
  return inReach[Math.floor(Math.random() * inReach.length)];
}

/**
 * Get the melee reach of an actor (5 or 10 ft).
 */
function _getReach(actor) {
  if (!actor) return 5;
  const hasReach = actor.items?.some(i =>
    i.system?.properties?.has?.("reach") ||
    String(i.system?.description?.value ?? "").toLowerCase().includes("reach")
  );
  return hasReach ? 10 : 5;
}

/**
 * Check if an actor has an active effect whose name (or label) matches
 * the given string (case-insensitive). Used as fallback when actor.statuses
 * isn't available (older Foundry versions).
 */
function _hasEffectNamed(actor, name) {
  const needle = name.toLowerCase();
  return actor.effects?.some(e =>
    !e.disabled &&
    (String(e.name ?? "").toLowerCase() === needle ||
     String(e.label ?? "").toLowerCase() === needle)
  ) ?? false;
}
