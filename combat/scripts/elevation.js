/**
 * elevation.js
 * Manages vertical (elevation) tracking and movement for NPCs that can fly,
 * swim, burrow, or otherwise operate at a non-zero elevation.
 *
 * Design principles:
 *  - Only creatures with a nonzero fly, swim, or burrow speed are processed.
 *  - Elevation is expressed in feet (matching Foundry's token.document.elevation unit).
 *  - Flying/swimming creatures target the same elevation as their target (or a
 *    tactically appropriate elevation if attacking from above).
 *  - Burrowing creatures descend to a negative elevation to represent going
 *    underground, and surface (elevation 0) when they reach a target.
 *  - Elevation changes consume movement at 1 ft of movement per 1 ft of elevation.
 *  - If the NPC cannot reach the target's elevation within its movement budget,
 *    it closes as much vertical distance as possible.
 *  - distanceBetweenTokens is patched to include elevation difference so
 *    out-of-range checks work correctly in 3D.
 *
 * Integration:
 *  - Called from automation.js _runTurn() after retreat checks, before targeting.
 *  - getElevationProfile(actor) → ElevationProfile
 *  - adjustElevationForTurn(npcToken, targetToken, moveBudgetFt) → { newElevation, budgetSpent }
 *  - distanceIncludingElevation(tokenA, tokenB) → number (ft)
 *
 * Token flags (per-token, set by the GM or other modules):
 *  flags["5e-npc-combat-automation"].preferredElevation  — number, override cruise altitude
 *  flags["5e-npc-combat-automation"].forceGrounded       — boolean, never lift off
 *
 * Elevation conventions:
 *   0          → ground level
 *   positive   → airborne / above ground
 *   negative   → underground / burrowing
 */

import { log } from "./utils.js";
import { MODULE_ID } from "./settings.js";

// ─── Elevation profile ────────────────────────────────────────────────────────

/**
 * Compute the elevation profile for an NPC actor.
 * @param {Actor5e} actor
 * @param {TokenDocument} tokenDoc
 * @returns {ElevationProfile}
 */
export function getElevationProfile(actor, tokenDoc) {
  const movement = actor?.system?.attributes?.movement ?? {};
  const flags    = tokenDoc?.flags?.[MODULE_ID] ?? {};

  const flySpeed    = Number(movement.fly    ?? 0);
  const burrowSpeed = Number(movement.burrow ?? 0);
  const swimSpeed   = Number(movement.swim   ?? 0);
  const walkSpeed   = Number(movement.walk   ?? 30);
  const hoverFlag   = movement.hover === true;

  const canFly    = flySpeed > 0;
  const canBurrow = burrowSpeed > 0;
  const canSwim   = swimSpeed > 0;
  const hover     = hoverFlag || (canFly && flySpeed > 0 && movement.hover);

  // Preferred cruise altitude:
  //   - Explicit flag overrides everything.
  //   - Flyers: 10 ft (just above melee reach) unless hovering.
  //   - Burrowers: -5 ft (one grid unit underground).
  //   - Swimmers: 0 ft (on the water surface unless the scene uses depth).
  let preferredElevation = flags.preferredElevation ?? null;
  if (preferredElevation === null) {
    if (canFly && !flags.forceGrounded) preferredElevation = 10;
    else if (canBurrow)                 preferredElevation = -5;
    else                                preferredElevation = 0;
  }

  const activeSpeed = canFly    ? flySpeed
                    : canBurrow ? burrowSpeed
                    : canSwim   ? swimSpeed
                    : walkSpeed;

  const profile = {
    canFly,
    canBurrow,
    canSwim,
    hover,
    flySpeed,
    burrowSpeed,
    swimSpeed,
    walkSpeed,
    activeSpeed,
    preferredElevation,
    forceGrounded: flags.forceGrounded === true,
    isAirborne:    canFly && !flags.forceGrounded,
    isSubterranean: canBurrow && !flags.forceGrounded,
  };

  log(
    `ElevationProfile [${actor?.name}]: ` +
    `fly=${flySpeed} burrow=${burrowSpeed} swim=${swimSpeed} ` +
    `hover=${hover} preferred=${preferredElevation} forceGrounded=${profile.forceGrounded}`
  );

  return profile;
}

// ─── Elevation distance helper ────────────────────────────────────────────────

/**
 * Calculate 3D distance between two tokens, including elevation difference.
 * Uses Euclidean distance in the horizontal plane plus elevation delta.
 *
 * Foundry's measurePath uses 2D horizontal distance only. We add the elevation
 * component so a flying creature 30 ft up and 30 ft away is 42 ft distant,
 * not 30 ft.
 *
 * @param {Token} tokenA
 * @param {Token} tokenB
 * @returns {number} distance in feet (3D)
 */
export function distanceIncludingElevation(tokenA, tokenB) {
  if (!tokenA || !tokenB) return Infinity;

  let horizontalDist;
  try {
    const a = tokenA.center ?? { x: tokenA.x, y: tokenA.y };
    const b = tokenB.center ?? { x: tokenB.x, y: tokenB.y };
    const result = canvas.grid.measurePath([a, b]);
    horizontalDist = typeof result?.distance === "number" ? result.distance : _fallbackDist(tokenA, tokenB);
  } catch {
    horizontalDist = _fallbackDist(tokenA, tokenB);
  }

  const elevA = Number(tokenA.document?.elevation ?? 0);
  const elevB = Number(tokenB.document?.elevation ?? 0);
  const elevDelta = Math.abs(elevA - elevB);

  // Pythagoras in 3D (horizontal + vertical components).
  return Math.sqrt(horizontalDist ** 2 + elevDelta ** 2);
}

function _fallbackDist(tokenA, tokenB) {
  if (!tokenA || !tokenB) return Infinity;
  const gridSize  = canvas.grid.size;
  const gridScale = canvas.grid.distance;
  const ax = tokenA.center?.x ?? tokenA.x ?? 0;
  const ay = tokenA.center?.y ?? tokenA.y ?? 0;
  const bx = tokenB.center?.x ?? tokenB.x ?? 0;
  const by = tokenB.center?.y ?? tokenB.y ?? 0;
  return (Math.hypot(ax - bx, ay - by) / gridSize) * gridScale;
}

// ─── Main elevation adjustment ────────────────────────────────────────────────

/**
 * Compute and apply the optimal elevation change for this turn.
 * Should be called BEFORE horizontal movement so the budget is correctly shared.
 *
 * @param {Token}            npcToken
 * @param {Token}            targetToken
 * @param {number}           moveBudgetFt     remaining horizontal movement budget
 * @param {ElevationProfile} profile
 * @returns {{ newElevation: number, budgetSpent: number }}
 */
export async function adjustElevationForTurn(npcToken, targetToken, moveBudgetFt, profile) {
  if (profile.forceGrounded) {
    return { newElevation: npcToken.document.elevation ?? 0, budgetSpent: 0 };
  }

  const currentElevation = Number(npcToken.document.elevation ?? 0);
  const targetElevation  = Number(targetToken?.document?.elevation ?? 0);

  let desiredElevation;

  if (profile.canFly) {
    desiredElevation = _flyingDesiredElevation(
      currentElevation,
      targetElevation,
      profile
    );
  } else if (profile.canBurrow) {
    desiredElevation = _burrowingDesiredElevation(
      currentElevation,
      targetElevation,
      profile,
      npcToken,
      targetToken
    );
  } else {
    // Swimmers default to matching the target's elevation (within reason).
    desiredElevation = Math.max(0, targetElevation);
  }

  if (desiredElevation === currentElevation) {
    return { newElevation: currentElevation, budgetSpent: 0 };
  }

  // Each foot of elevation change costs 1 ft of movement.
  const elevDelta   = Math.abs(desiredElevation - currentElevation);
  const budgetSpent = Math.min(elevDelta, moveBudgetFt);
  const direction   = desiredElevation > currentElevation ? 1 : -1;
  const newElevation = currentElevation + (budgetSpent * direction);

  log(
    `${npcToken.name}: elevation ${currentElevation} → ${newElevation} ` +
    `(desired=${desiredElevation}, spent=${budgetSpent}ft of ${moveBudgetFt}ft budget)`
  );

  if (newElevation !== currentElevation) {
    try {
      await npcToken.document.update({ elevation: newElevation });
    } catch (err) {
      log(`${npcToken.name}: elevation update failed: ${err.message}`, "warn");
    }
  }

  return { newElevation, budgetSpent };
}

// ─── Flying elevation logic ───────────────────────────────────────────────────

/**
 * Compute the ideal elevation for a flying creature.
 *
 * Strategy:
 *  - If the target is airborne (elevation > 0), match the target's elevation
 *    so melee attacks remain valid.
 *  - If the target is on the ground (elevation ≤ 0), descend to match the
 *    target's elevation so melee weapons are in range. A creature hovering at
 *    10 ft with a 5 ft reach weapon cannot hit a ground target — we must land
 *    at the target's elevation (or as close as the movement budget allows).
 *  - Hovering creatures obey the same rule; they still need to reach the target.
 *
 * NOTE: preferredElevation is the creature's *cruising* altitude when it has
 * no target. Once a target is known and the NPC intends to attack in melee,
 * the target's elevation is the goal. The movement system will apply the
 * budget limit if the NPC can't fully close the gap this turn.
 */
function _flyingDesiredElevation(currentElev, targetElev, profile) {
  // Always descend/ascend to exactly the target's elevation so that melee
  // weapons (5 ft or 10 ft reach) can connect. Foundry's range check is
  // purely 3D Euclidean, so even 10 ft of elevation gap puts a 5-ft-reach
  // weapon out of range.
  return targetElev;
}

// ─── Burrowing elevation logic ────────────────────────────────────────────────

/**
 * Compute the ideal elevation for a burrowing creature.
 *
 * Strategy:
 *  - If the target is on the ground (elevation ≤ 0) and the burrower is at a
 *    negative elevation, surface (elevation 0) to be able to attack.
 *  - If the burrower is on the surface and the target is still on the surface,
 *    check whether burrow-ambush is tactically better (descend, then re-emerge
 *    next to target). In this simple implementation, burrowers stay surfaced
 *    unless their preferred elevation is negative and they haven't engaged yet.
 *  - Burrowers never go above elevation 0.
 */
function _burrowingDesiredElevation(currentElev, targetElev, profile, npcToken, targetToken) {
  // targetToken may be null during the pre-target elevation pass. When there's
  // no target yet, stay at (or move toward) the preferred elevation so the
  // burrower is in the right layer at the start of its turn.
  if (!targetToken) {
    return profile.preferredElevation;
  }

  const horizDistFt   = _fallbackDist(npcToken, targetToken);
  const totalDistFt   = horizDistFt + Math.abs(currentElev - targetElev);
  const burrowReachFt = profile.burrowSpeed;

  if (currentElev < 0) {
    // Underground: surface (elevation 0) to attack if within reach this turn
    if (totalDistFt <= burrowReachFt) return 0;
    // Otherwise stay underground — movement.js will bypass 2D wall checks
    return currentElev;
  }

  // On the surface: only descend if preferred elevation is negative AND
  // the target is far enough that a burrow approach is worthwhile.
  if (profile.preferredElevation < 0 && horizDistFt > burrowReachFt * 0.5) {
    return profile.preferredElevation;
  }

  return 0; // stay surfaced if target is close or no burrow preference
}

/**
 * Returns true when a token is currently burrowing (at negative elevation).
 * Used by movement.js to suppress incorrect 2D wall collision tests for
 * underground movement — burrowers pass through earth, not around walls.
 *
 * @param {TokenDocument} tokenDoc
 * @returns {boolean}
 */
export function isTokenBurrowing(tokenDoc) {
  return Number(tokenDoc?.elevation ?? 0) < 0;
}

// ─── Descend-to-attack helper ────────────────────────────────────────────────

/**
 * Check if a flying NPC at a given elevation can still reach a ground target
 * with a melee weapon (range = 5 or 10 ft including elevation difference).
 *
 * @param {number} npcElevation
 * @param {number} weaponRange   5 or 10 ft
 * @returns {boolean}
 */
export function canAttackFromElevation(npcElevation, targetElevation, weaponRange) {
  const elevDiff = Math.abs(npcElevation - targetElevation);
  // A melee weapon can still reach if the elevation gap is within weapon range.
  return elevDiff <= weaponRange;
}
