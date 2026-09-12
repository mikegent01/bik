/**
 * movement.js
 * Handles NPC token movement toward a target before attacking.
 *
 * Architecture:
 *  Goal cells around the target are pre-filtered for LOS. For each candidate
 *  goal cell we run a lightweight wall-aware BFS (not full scene A*) to find
 *  the reachable cell closest to the target within the movement budget. The BFS
 *  operates only within the movement-budget radius so it is bounded and fast.
 *
 *  Key decisions:
 *  - getDirectPath is NOT used for wall-aware pathing — it is a geometry helper
 *    that returns cells along a straight line and has no knowledge of walls.
 *  - Wall collision is tested via CONFIG.Canvas.polygonBackends.move.testCollision
 *    on each BFS edge (center→center), which is the same check Foundry uses.
 *  - The BFS expands outward one cell at a time, so it naturally finds the
 *    cheapest path in grid steps. It is capped at the move budget radius.
 *  - One token.document.update fires for the final destination; Foundry animates.
 *  - Doors are opened before the move if NPC_OPEN_DOORS is enabled.
 *  - Last Known Position persists across rounds; cleared only at combat end or
 *    when the target goes hidden/invisible.
 *
 * Returns: { moved: boolean, usedDash: boolean, attackPositionValid: boolean }
 */

import { getSetting, SETTINGS } from "./settings.js";
import { log, distanceBetweenTokens, delay, isRangedItem, getItemRange, getUsableActionItems } from "./utils.js";
import { hasUsesRemaining } from "./spell-ai.js";
import { isTokenBurrowing, getElevationProfile } from "./elevation.js";
import { resolveArchetypes, mergeArchetypes } from "./archetypes.js";
import * as trace from "./ai-trace.js";
import {
  tmin, tvbr,
  logReplan, logBudget, logPositionVerify,
  logFailedDest, logLOS,
  logCellRejection, logCandidates,
  logFinalResult, logMicroPlan, logDash, logTarget,
} from "./logger.js";

// ─── Round helper ─────────────────────────────────────────────────────────────
function _round() { return game.combat?.round ?? 0; }

// ─── Movement imperfection state ──────────────────────────────────────────────
// Per-token stuck tracker: detects when a creature hasn't moved between turns.
const _stuckState      = new Map();   // tokenId → { stuckRounds, lastRow, lastCol }
// Per-token reevaluation cooldown: suppresses A* re-runs for low-INT creatures.
const _lastReevalRound = new Map();   // tokenId → round number last re-evaluated

// Stuck state persists ACROSS rounds within a combat so multi-round wall-
// pressing accumulates and eventually triggers rerouting. We only clear it
// on combatEnd. _lastReevalRound IS cleared per round because reevaluation
// cooldown is relative to the current round number.
Hooks.on("combatRound", () => {
  _lastReevalRound.clear();
  // _stuckState intentionally NOT cleared here — see note above
});

Hooks.on("deleteCombat", () => {
  _stuckState.clear();
  _lastReevalRound.clear();
});
function _getStuckState(tokenId) {
  return _stuckState.get(tokenId) ?? { stuckRounds: 0, lastRow: -1, lastCol: -1 };
}

function _updateStuckState(tokenId, row, col) {
  const s   = _getStuckState(tokenId);
  const moved = (s.lastRow !== row || s.lastCol !== col);
  _stuckState.set(tokenId, {
    stuckRounds: moved ? 0 : s.stuckRounds + 1,
    lastRow: row,
    lastCol: col,
  });
  return _stuckState.get(tokenId);
}

function _shouldReevaluatePath(tokenId, reevalInterval) {
  const current = game.combat?.round ?? 0;
  const last    = _lastReevalRound.get(tokenId) ?? -99;
  if (current - last >= reevalInterval) {
    _lastReevalRound.set(tokenId, current);
    return true;
  }
  return false;
}

// ─── Grid coordinate helpers ──────────────────────────────────────────────────

function tokenToGrid(token) {
  return canvas.grid.getOffset({ x: token.document.x, y: token.document.y });
}

function gridToPixels(row, col) {
  return canvas.grid.getTopLeftPoint({ i: row, j: col });
}

function gridCellCenter(row, col) {
  const tl   = gridToPixels(row, col);
  const half = canvas.grid.size / 2;
  return { x: tl.x + half, y: tl.y + half };
}

// ─── Bounds check ─────────────────────────────────────────────────────────────

function isInBounds(row, col) {
  const px = gridToPixels(row, col);
  return (
    px.x >= 0 && px.y >= 0 &&
    px.x < canvas.dimensions.width &&
    px.y < canvas.dimensions.height
  );
}

function tokenGridSize(token) {
  return {
    w: Math.max(1, Math.ceil(Number(token?.document?.width ?? 1))),
    h: Math.max(1, Math.ceil(Number(token?.document?.height ?? 1))),
  };
}

function footprintAt(row, col, token) {
  const { w, h } = tokenGridSize(token);
  const cells = [];
  for (let r = row; r < row + h; r++) {
    for (let c = col; c < col + w; c++) cells.push({ row: r, col: c });
  }
  return cells;
}

function tokenFootprint(token) {
  const g = tokenToGrid(token);
  return footprintAt(g.i, g.j, token);
}

function isInBoundsForToken(row, col, token) {
  return footprintAt(row, col, token).every(cell => isInBounds(cell.row, cell.col));
}

function tokenCenterAtGrid(row, col, token) {
  const tl = gridToPixels(row, col);
  const { w, h } = tokenGridSize(token);
  return {
    x: tl.x + (w * canvas.grid.size) / 2,
    y: tl.y + (h * canvas.grid.size) / 2,
  };
}

function tokenSamplePoints(row, col, token) {
  const tl = gridToPixels(row, col);
  const { w, h } = tokenGridSize(token);
  const gs = canvas.grid.size;
  const inset = Math.max(3, gs * 0.12);
  const x1 = tl.x + inset;
  const y1 = tl.y + inset;
  const x2 = tl.x + (w * gs) - inset;
  const y2 = tl.y + (h * gs) - inset;
  const center = tokenCenterAtGrid(row, col, token);
  if (w === 1 && h === 1) return [center];
  return [center, { x: x1, y: y1 }, { x: x2, y: y1 }, { x: x1, y: y2 }, { x: x2, y: y2 }];
}

function rectDistanceCells(aRow, aCol, aToken, bRow, bCol, bToken) {
  const a = { row1: aRow, col1: aCol, row2: aRow + tokenGridSize(aToken).h - 1, col2: aCol + tokenGridSize(aToken).w - 1 };
  const b = { row1: bRow, col1: bCol, row2: bRow + tokenGridSize(bToken).h - 1, col2: bCol + tokenGridSize(bToken).w - 1 };
  const dr = a.row2 < b.row1 ? b.row1 - a.row2 : b.row2 < a.row1 ? a.row1 - b.row2 : 0;
  const dc = a.col2 < b.col1 ? b.col1 - a.col2 : b.col2 < a.col1 ? a.col1 - b.col2 : 0;
  const dCost = diagonalMoveCost();
  const diag = Math.min(dr, dc);
  const straight = Math.max(dr, dc) - diag;
  return straight + (diag * (Number.isFinite(dCost) ? dCost : 2));
}

function rectsOverlap(aRow, aCol, aToken, bRow, bCol, bToken) {
  const aw = tokenGridSize(aToken).w, ah = tokenGridSize(aToken).h;
  const bw = tokenGridSize(bToken).w, bh = tokenGridSize(bToken).h;
  return !(aCol + aw - 1 < bCol || bCol + bw - 1 < aCol || aRow + ah - 1 < bRow || bRow + bh - 1 < aRow);
}

// ─── Occupancy ────────────────────────────────────────────────────────────

/**
 * Returns true if a grid cell is blocked by a live, non-passable token.
 *
 * @param {number}  row
 * @param {number}  col
 * @param {Token}   movingToken
 * @param {boolean} allowPassThroughDeadProne  When true, dead and prone tokens
 *   are treated as passable (costs extra movement, see _isPassableBodyCell).
 */
function isGridOccupied(row, col, movingToken, allowPassThroughDeadProne = false) {
  return canvas.tokens.placeables.some(t => {
    if (t.id === movingToken.id) return false;
    if (t.document?.hidden) return false;
    const pos = tokenToGrid(t);
    if (!rectsOverlap(row, col, movingToken, pos.i, pos.j, t)) return false;

    // Always passable: defeated tokens
    if (t.document?.defeated) return false;

    // Always passable: zero-HP tokens
    const hp = t.actor?.system?.attributes?.hp;
    if (hp && Number(hp.value ?? 0) <= 0) return false;

    // Conditionally passable: prone tokens
    if (allowPassThroughDeadProne && t.actor?.statuses?.has("prone")) return false;

    return true;
  });
}

/**
 * Returns true if a cell is occupied by a fallen (dead or prone) token
 * that costs extra movement to pass through.
 */
function _isPassableBodyCell(row, col, movingToken) {
  return canvas.tokens.placeables.some(t => {
    if (t.id === movingToken.id) return false;
    if (t.document?.hidden) return false;
    const pos = tokenToGrid(t);
    if (!rectsOverlap(row, col, movingToken, pos.i, pos.j, t)) return false;
    if (t.document?.defeated) return true;
    const hp = t.actor?.system?.attributes?.hp;
    if (hp && Number(hp.value ?? 0) <= 0) return true;
    if (t.actor?.statuses?.has("prone")) return true;
    return false;
  });
}

/**
 * Returns true if a cell is occupied by an allied token (same disposition),
 * used for soft congestion pressure scoring.
 */
function _isCrowdedCell(row, col, movingToken) {
  const myDisp = movingToken.document?.disposition;
  return canvas.tokens.placeables.some(t => {
    if (t.id === movingToken.id) return false;
    if (t.document?.hidden) return false;
    if (t.document?.disposition !== myDisp) return false;
    const pos = tokenToGrid(t);
    return rectsOverlap(row, col, movingToken, pos.i, pos.j, t);
  });
}

// ─── Wall collision check ─────────────────────────────────────────────────────

/**
 * Return true when the step from (r0,c0) to (r1,c1) is blocked by a wall.
 * Uses the move backend — the same check the ruler and token drag use.
 * When treatDoorsAsOpen is true, a step blocked only by a closed door
 * (move-blocked but sight-clear) is treated as passable.
 */
function isStepBlocked(r0, c0, r1, c1, treatDoorsAsOpen = false, movingToken = null) {
  // Burrowing creatures (negative elevation) move through earth — 2D wall
  // collision checks are meaningless and incorrectly block underground movement.
  if (movingToken && isTokenBurrowing(movingToken.document)) return false;

  // Spell-created barriers (Wall of Force/Stone, Forcecage) make their cells
  // impassable — burrowers excepted (handled above; Wall of Force still stops
  // them but that's an edge case we leave to the GM).
  if (getSetting(SETTINGS.AOE_THREAT_MEMORY)) {
    const barriers = _barrierCells();
    if (barriers && barriers.has(`${r1},${c1}`)) return true;
  }

  try {
    const fromPoints = movingToken ? tokenSamplePoints(r0, c0, movingToken) : [gridCellCenter(r0, c0)];
    const toPoints   = movingToken ? tokenSamplePoints(r1, c1, movingToken) : [gridCellCenter(r1, c1)];

    for (let i = 0; i < fromPoints.length; i++) {
      const src = fromPoints[i];
      const dst = toPoints[i] ?? toPoints[0];
      if (src.x === dst.x && src.y === dst.y) continue;

      const moveBlocked = CONFIG.Canvas.polygonBackends.move.testCollision(
        src, dst, { type: "move", mode: "any" }
      );
      if (!moveBlocked) continue;

      if (treatDoorsAsOpen) {
        const closedDoors = canvas.walls.placeables.filter(w =>
          w.document.door === CONST.WALL_DOOR_TYPES.DOOR &&
          w.document.ds   === CONST.WALL_DOOR_STATES.CLOSED
        );
        const doorBlocks = closedDoors.some(w => wallBlocksRay(w.document, src, dst));
        if (doorBlocks) continue;
      }

      return true;
    }

    return false;
  } catch (err) {
    log(`Wall check failed [${r0},${c0}]\u2192[${r1},${c1}]: ${err.message}`, "warn");
    return false;
  }
}

/**
 * Identify the closed door(s) responsible for a blocked step. Returns the
 * door documents that, if open, would unblock the step — or [] when the step
 * is blocked by a real (non-door) wall. Lets the executor distinguish "stop,
 * there's a wall" from "step closer and open the door."
 */
function _doorsBlockingStep(r0, c0, r1, c1, movingToken) {
  try {
    if (movingToken && isTokenBurrowing(movingToken.document)) return [];
    const blockedNow  = isStepBlocked(r0, c0, r1, c1, false, movingToken);
    if (!blockedNow) return [];
    const blockedOpen = isStepBlocked(r0, c0, r1, c1, true, movingToken);
    if (blockedOpen) return []; // a real wall blocks even with doors open

    // Door(s) are the sole cause. Find which closed doors cross the step.
    const fromPts = movingToken ? tokenSamplePoints(r0, c0, movingToken) : [gridCellCenter(r0, c0)];
    const toPts   = movingToken ? tokenSamplePoints(r1, c1, movingToken) : [gridCellCenter(r1, c1)];
    const doors = [];
    for (const w of canvas.walls.placeables) {
      const d = w.document;
      if (d.door !== CONST.WALL_DOOR_TYPES.DOOR) continue;
      if (d.ds   !== CONST.WALL_DOOR_STATES.CLOSED) continue;
      for (let i = 0; i < fromPts.length; i++) {
        if (wallBlocksRay(d, fromPts[i], toPts[i] ?? toPts[0])) { doors.push(d); break; }
      }
    }
    return doors;
  } catch { return []; }
}

/**
 * Given the NPC's current cell and a blocked target cell whose obstacle is a
 * closed door just out of reach, find an adjacent cell that (a) is passable
 * right now, (b) is unoccupied, and (c) brings the door midpoint within
 * opening reach. Returns {row,col} or null. This closes the "diagonal step
 * clips a double-door leaf one cell too early" gap that left NPCs halting
 * with movement remaining.
 */
function _approachCellForDoor(curRow, curCol, doors, movingToken) {
  if (!doors.length) return null;
  const gs = canvas.grid.size;
  const reach = _doorReachCells(movingToken);

  let best = null;
  let bestDist = Infinity;
  for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]]) {
    const nr = curRow + dr, nc = curCol + dc;
    if (nr === curRow && nc === curCol) continue;
    if (!isInBoundsForToken(nr, nc, movingToken)) continue;
    if (isStepBlocked(curRow, curCol, nr, nc, false, movingToken)) continue; // must be walkable now
    if (isGridOccupied(nr, nc, movingToken)) continue;

    const center = tokenCenterAtGrid(nr, nc, movingToken);
    // Would at least one blocking door be in reach from here?
    let minDoorDist = Infinity;
    for (const d of doors) {
      const mid = wallMidpoint(d);
      const dist = Math.hypot((center.x - mid.x) / gs, (center.y - mid.y) / gs);
      minDoorDist = Math.min(minDoorDist, dist);
    }
    if (minDoorDist > reach + 0.05) continue;
    if (minDoorDist < bestDist) { bestDist = minDoorDist; best = { row: nr, col: nc }; }
  }
  return best;
}

/**
 * Return true when there is unobstructed LOS from (r0,c0) to (r1,c1).
 * Tests center + 4 inset corners; passes if ANY ray is clear.
 */
// ─── Turn-scoped LOS memo (Task 3) ───────────────────────────────────────────
// Goal building, threat exposure, scoot and kite all re-test overlapping
// sightlines within a single turn. Wall-collision tests are the most expensive
// primitive in the module, so results are memoised per turn. Invalidated on
// any wall change (doors!) and explicitly at the start of each automated turn.

const _losCache = new Map();
const _LOS_CACHE_CAP = 5000;

export function clearLOSCache() {
  _losCache.clear();
}

/** Register wall-change invalidation. Called once from main.js ready. */
export function registerMovementCacheHooks() {
  for (const hook of ["createWall", "updateWall", "deleteWall"]) {
    Hooks.on(hook, () => _losCache.clear());
  }
}

function _losMemo(key, computeFn) {
  if (!getSetting(SETTINGS.PATHFIND_LOS_MEMO)) return computeFn();
  const hit = _losCache.get(key);
  if (hit !== undefined) return hit;
  const value = computeFn();
  if (_losCache.size >= _LOS_CACHE_CAP) _losCache.clear();
  _losCache.set(key, value);
  return value;
}

function hasLineOfSight(r0, c0, r1, c1) {
  return _losMemo(`c:${r0},${c0}|${r1},${c1}`, () => _hasLineOfSightRaw(r0, c0, r1, c1));
}

function _hasLineOfSightRaw(r0, c0, r1, c1) {
  try {
    const backend = CONFIG.Canvas.polygonBackends.sight;
    if (!backend) return true;

    const half    = canvas.grid.size / 2;
    const quarter = canvas.grid.size / 4;
    const aSrc    = gridCellCenter(r0, c0);
    const tl0     = gridToPixels(r0, c0);

    const attackerPoints = [
      aSrc,
      { x: tl0.x + quarter,       y: tl0.y + quarter },
      { x: tl0.x + half + quarter, y: tl0.y + quarter },
      { x: tl0.x + quarter,       y: tl0.y + half + quarter },
      { x: tl0.x + half + quarter, y: tl0.y + half + quarter },
    ];

    const tgtCenter = gridCellCenter(r1, c1);
    for (const src of attackerPoints) {
      if (!backend.testCollision(src, tgtCenter, { type: "sight", mode: "any" })) return true;
    }
    return false;
  } catch (err) {
    log(`LOS check failed [${r0},${c0}]→[${r1},${c1}]: ${err.message}`, "warn");
    return true;
  }
}

function hasLineOfSightToToken(attackerRow, attackerCol, attackerToken, targetToken) {
  // Key includes the target's live position+elevation so forced movement
  // mid-turn naturally misses the cache instead of returning stale results.
  const td = targetToken?.document;
  const key = `t:${attackerRow},${attackerCol}|${attackerToken?.id ?? "?"}|` +
              `${targetToken?.id ?? "?"}@${td?.x ?? 0},${td?.y ?? 0},${td?.elevation ?? 0}`;
  return _losMemo(key, () => _hasLineOfSightToTokenRaw(attackerRow, attackerCol, attackerToken, targetToken));
}

function _hasLineOfSightToTokenRaw(attackerRow, attackerCol, attackerToken, targetToken) {
  // Burrowing creatures approaching underground have no 2D LOS constraint —
  // they surface adjacent to the target. Always grant LOS for underground movers.
  if (attackerToken && isTokenBurrowing(attackerToken.document)) return true;

  try {
    const backend = CONFIG.Canvas.polygonBackends.sight;
    if (!backend) return true;

    const targetGrid = tokenToGrid(targetToken);
    const attackerPoints = tokenSamplePoints(attackerRow, attackerCol, attackerToken);
    const targetPoints = tokenSamplePoints(targetGrid.i, targetGrid.j, targetToken);

    for (const src of attackerPoints) {
      for (const dst of targetPoints) {
        if (!backend.testCollision(src, dst, { type: "sight", mode: "any" })) return true;
      }
    }
    return false;
  } catch (err) {
    log(`LOS-token check failed from [${attackerRow},${attackerCol}] to ${targetToken?.name}: ${err.message}`, "warn");
    return true;
  }
}

// ─── Grid distance helper ────────────────────────────────────────────────────

function diagonalMoveCost() {
  const diagonals = canvas.scene?.grid?.diagonals ?? canvas.grid?.diagonals;
  const D = CONST.GRID_DIAGONALS ?? {};

  switch (diagonals) {
    case D.EQUIDISTANT: return 1;          // 5/5/5 style
    case D.EXACT:       return Math.SQRT2; // Euclidean
    case D.APPROXIMATE: return 1.5;        // close to 5/10/5 average
    case D.ALTERNATING_1:
    case D.ALTERNATING_2:
      return 1.5;                          // stable planning approximation
    case D.RECTILINEAR: return 2;
    case D.ILLEGAL:     return Infinity;
    default:            return 1;          // D&D-friendly fallback
  }
}

function octile(r0, c0, r1, c1) {
  const dr = Math.abs(r0 - r1);
  const dc = Math.abs(c0 - c1);
  const diag = Math.min(dr, dc);
  const straight = Math.max(dr, dc) - diag;
  const dCost = diagonalMoveCost();
  if (!Number.isFinite(dCost)) return dr + dc;
  return straight + (diag * dCost);
}

function _clampNumber(value, min, max, fallback) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(min, Math.min(max, n));
}

function movementStepDelayMs() {
  return _clampNumber(getSetting(SETTINGS.MOVEMENT_STEP_DELAY), 0, 1000, 225);
}

function rotationForMovement(fromPx, toPx) {
  const dx = toPx.x - fromPx.x;
  const dy = toPx.y - fromPx.y;
  if (Math.abs(dx) < 0.001 && Math.abs(dy) < 0.001) return null;
  const offset = _clampNumber(getSetting(SETTINGS.ROTATION_OFFSET), 0, 360, 180);
  // Foundry's visual token facing depends on the token art. The offset setting
  // lets the GM correct backwards/sideways art without changing code.
  return ((Math.atan2(dy, dx) * 180 / Math.PI) + 90 + offset + 360) % 360;
}

async function faceTargetIfEnabled(npcToken, targetToken) {
  if (!getSetting(SETTINGS.FACE_MOVEMENT) || !getSetting(SETTINGS.FACE_TARGET)) return;
  try {
    const npcGrid = tokenToGrid(npcToken);
    const from = tokenCenterAtGrid(npcGrid.i, npcGrid.j, npcToken);
    const to = targetToken.center ?? tokenCenterAtGrid(tokenToGrid(targetToken).i, tokenToGrid(targetToken).j, targetToken);
    const rotation = rotationForMovement(from, to);
    if (rotation !== null) await npcToken.document.update({ rotation }, { animate: false });
  } catch (err) {
    log(`${npcToken.name}: Failed to face target: ${err.message}`, "warn");
  }
}

function pickCommittedPartial(reachMap, startRow, startCol, tgtRow, tgtCol, budgetCells, movingToken) {
  const startDist = octile(startRow, startCol, tgtRow, tgtCol);
  const minCost = Math.max(1, budgetCells * 0.65);
  let best = null;

  for (const [key, cost] of reachMap) {
    if (cost < minCost || cost > budgetCells + 0.001) continue;
    const [r, c] = key.split(",").map(Number);
    if (r === startRow && c === startCol) continue;
    if (isGridOccupied(r, c, movingToken)) continue;

    const dist = octile(r, c, tgtRow, tgtCol);
    if (dist >= startDist - 0.25) continue;

    // Prefer closest to target. Tie-break toward spending more movement so NPCs
    // do not take a tiny two-square shuffle when a fuller legal advance exists.
    if (!best ||
        dist < best.dist - 0.001 ||
        (Math.abs(dist - best.dist) <= 0.001 && cost > best.cost)) {
      best = { destRow: r, destCol: c, cost, reachedGoal: false, dist };
    }
  }

  return best ? { destRow: best.destRow, destCol: best.destCol, cost: best.cost, reachedGoal: false } : null;
}

// ─── Difficult terrain cost ──────────────────────────────────────────────────
//
// Returns the movement MULTIPLIER for stepping INTO cell (nr, nc).
// Difficult terrain doubles cost per 5e RAW (each cell costs 2× movement).
// Returns 1.0 if terrain support is disabled or no terrain modules are active.
//
// Supported integrations (in priority order):
//   1. Foundry v12+ native terrain layer   (canvas.terrain)
//   2. Levels Automatic Cover / Region behaviors
//   3. Terrain Layer module (legacy)
//
// Each integration is tried in order; if none is active the function returns 1.


// ─── Effective movement speed (swim / climb) ─────────────────────────────────

const _WATER_RX = /water|swim|aquatic|river|lake|ocean|sea\b/i;

/**
 * True when the token's centre sits inside a water-tagged region or tile.
 * Detection sources, all best-effort and try/caught:
 *   1. Scene Regions whose name matches the water regex and contain the point
 *   2. Tiles containing the point whose texture path or module tag matches
 */
function _isInWater(token) {
  try {
    const cx = token.center?.x ?? token.x;
    const cy = token.center?.y ?? token.y;

    // 1. Regions (Foundry V12+)
    for (const region of (canvas.regions?.placeables ?? [])) {
      try {
        if (!_WATER_RX.test(region.document?.name ?? "")) continue;
        const contains =
          region.testPoint?.({ x: cx, y: cy, elevation: token.document?.elevation ?? 0 }) ??
          region.document?.shapes?.some?.(s => s.contains?.(cx, cy));
        if (contains) return true;
      } catch { /* next region */ }
    }

    // 2. Tiles
    for (const tile of (canvas.tiles?.placeables ?? [])) {
      try {
        const doc = tile.document;
        if (!doc || doc.hidden) continue;
        const within =
          cx >= doc.x && cx <= doc.x + (doc.width ?? 0) &&
          cy >= doc.y && cy <= doc.y + (doc.height ?? 0);
        if (!within) continue;
        const tag = `${doc.texture?.src ?? ""} ${JSON.stringify(doc.flags ?? {})}`;
        if (_WATER_RX.test(tag)) return true;
      } catch { /* next tile */ }
    }
  } catch { /* never block pathfinding */ }
  return false;
}

/** True when any wall segment lies within ~1 grid cell of the token's bounds. */
function _isWallAdjacent(token) {
  try {
    const gridSize = canvas?.grid?.size ?? 100;
    const pad = gridSize;
    const b = token.bounds ?? { x: token.x, y: token.y, width: gridSize, height: gridSize };
    const rect = new PIXI.Rectangle(b.x - pad, b.y - pad, b.width + pad * 2, b.height + pad * 2);
    const hits = canvas.walls?.quadtree?.getObjects?.(rect);
    return !!hits && hits.size > 0;
  } catch { return false; }
}

/**
 * Resolve the movement budget speed for this turn, honouring swim and climb
 * speeds (ENABLE_SWIM_CLIMB_SPEED, default true).
 *
 * Rules (deliberate refinement of the naive spec):
 *  - In water with swim > 0 → swim speed (a crocodile in a river uses 30ft
 *    swim, not 20ft walk; a knight in a river keeps walk and lets the
 *    difficult-terrain cost model the slog).
 *  - Wall adjacent with climb > walk → climb speed. The "greater-than" guard
 *    matters: merely STANDING next to a wall is not climbing, so a climb
 *    speed slower than walk must never silently shrink the budget. This
 *    branch exists for spider-climbers whose climb dominates.
 *  - Otherwise → walk.
 *
 * Reuses elevation.js's speed resolution rather than re-reading
 * system.attributes.movement.
 */
/**
 * True when committing an ACTION Dash would throw away a usable action.
 *
 * An action Dash is only ever worth it if the NPC has nothing it could do from
 * where it already stands. If a ranged attack or an offensive spell can already
 * reach the target with line of sight, dashing costs the whole action and buys
 * nothing this turn. Gated by DASH_PRESERVE_ACTION (default on).
 *
 * Conservative by design: any uncertainty returns false (dash allowed), so this
 * can only ever *prevent* an obviously wasted action, never strand an NPC.
 */
function _actionDashWouldWasteAction(npcToken, targetToken) {
  try {
    if (!getSetting(SETTINGS.DASH_PRESERVE_ACTION)) return false;
    if (!npcToken?.actor || !targetToken) return false;

    const dist = distanceBetweenTokens(npcToken, targetToken);
    if (!Number.isFinite(dist)) return false;

    const npcGrid = tokenToGrid(npcToken);
    if (!hasLineOfSightToToken(npcGrid.i, npcGrid.j, npcToken, targetToken)) return false;

    for (const item of getUsableActionItems(npcToken.actor)) {
      try {
        if (!isRangedItem(item)) continue;          // melee can't reach; dash is fine
        if (!hasUsesRemaining(item)) continue;       // depleted options don't count
        const range = getItemRange(item);
        if (Number.isFinite(range) && range >= dist) return true;
      } catch { /* skip this item */ }
    }
    return false;
  } catch {
    return false;   // never block movement on a failed heuristic
  }
}

function _getEffectiveSpeed(actor, token) {
  const profile = (() => {
    try { return getElevationProfile(actor, token?.document ?? token); }
    catch { return null; }
  })();
  const walk = profile?.walkSpeed ?? Number(actor?.system?.attributes?.movement?.walk ?? 30);

  // ── Flight (bug fix) ─────────────────────────────────────────────────────
  // A flyer budgets from its FLY speed, not its walk speed. Previously this
  // resolver only knew walk/swim/climb, so an Adult Black Dragon (walk 40,
  // fly 80) budgeted 40ft, failed to reach any goal cell, and burned its ACTION
  // on a Dash to cover the shortfall — losing a full multiattack in the process.
  // Gated on the elevation feature and the actor's own forceGrounded flag.
  try {
    if (getSetting(SETTINGS.ENABLE_ELEVATION) && profile && !profile.forceGrounded) {
      const fly = Number(profile.flySpeed ?? 0);
      if (fly > walk) {
        log(`${token?.name ?? actor?.name}: flying — using fly speed ${fly}ft (walk ${walk}ft).`);
        return fly;
      }
    }
  } catch { /* fall through to ground speeds */ }

  if (!getSetting(SETTINGS.ENABLE_SWIM_CLIMB_SPEED)) return walk;
  if (!token || !profile) return walk;

  try {
    if (profile.swimSpeed > 0 && _isInWater(token)) {
      log(`${token.name}: in water — using swim speed ${profile.swimSpeed}ft (walk ${walk}ft).`);
      return profile.swimSpeed;
    }
    const climb = Number(actor?.system?.attributes?.movement?.climb ?? 0);
    if (climb > walk && _isWallAdjacent(token)) {
      log(`${token.name}: wall adjacent + climb ${climb}ft > walk ${walk}ft — using climb speed.`);
      return climb;
    }
  } catch { /* fall back to walk */ }
  return walk;
}

// ─── Flanking destination search ─────────────────────────────────────────────

/**
 * Find the best flanking cell: a melee-adjacent, LOS-valid cell positioned
 * diametrically opposite an engaged ally relative to the target's centre.
 *
 * For each allied token within 30 ft of the target, the ideal point is the
 * target centre reflected through itself away from the ally; the candidate
 * actually returned is the melee goal cell nearest that ideal point, scored
 * with an extra-distance penalty so a flank that costs the whole turn's
 * movement loses to a closer one.
 *
 * Reachability is NOT checked here — the caller intersects the result with
 * its BFS reach map (the flanking cell is just an injected goal candidate).
 *
 * @param {Token}  npcToken
 * @param {Token}  targetToken
 * @param {Token[]} allies          allied tokens (caller-filtered)
 * @param {number} moveBudgetFt     this turn's movement budget in feet
 * @param {Array<{row,col}>} [meleeGoalCells]  precomputed goal cells (else derived)
 * @returns {{row:number, col:number}|null}
 */
export function findFlankingDestination(npcToken, targetToken, allies, moveBudgetFt, meleeGoalCells = null) {
  try {
    if (!npcToken || !targetToken || !Array.isArray(allies) || allies.length === 0) return null;

    const goals = meleeGoalCells ?? getMeleeGoalCells(npcToken, targetToken);
    if (!goals.length) return null;

    const gridSize  = canvas?.grid?.size ?? 100;
    const gridScale = canvas?.grid?.distance ?? 5;
    const tCx = targetToken.center?.x ?? targetToken.x;
    const tCy = targetToken.center?.y ?? targetToken.y;

    let best = null;
    let bestScore = -Infinity;

    for (const ally of allies) {
      if (!ally || ally.id === npcToken.id) continue;
      if (distanceBetweenTokens(ally, targetToken) > 30) continue;

      // Ideal flank point: target centre reflected away from the ally.
      const aCx = ally.center?.x ?? ally.x;
      const aCy = ally.center?.y ?? ally.y;
      const fx  = tCx + (tCx - aCx);
      const fy  = tCy + (tCy - aCy);

      // Snap to the nearest melee goal cell (already adjacency+LOS valid).
      for (const g of goals) {
        const gx = g.col * gridSize + gridSize / 2;
        const gy = g.row * gridSize + gridSize / 2;
        const distToIdealPx = Math.hypot(gx - fx, gy - fy);

        // Extra travel relative to the NPC's current spot, in feet.
        const nCx = npcToken.center?.x ?? npcToken.x;
        const nCy = npcToken.center?.y ?? npcToken.y;
        const travelFt = (Math.hypot(gx - nCx, gy - nCy) / gridSize) * gridScale;
        if (Number.isFinite(moveBudgetFt) && travelFt > moveBudgetFt * 1.5) continue;

        // Score: proximity to the ideal opposite point dominates; extra
        // travel applies a mild penalty so near-equal flanks prefer cheap.
        const score = -distToIdealPx - travelFt * 2;
        if (score > bestScore) { bestScore = score; best = { row: g.row, col: g.col }; }
      }
    }
    return best;
  } catch (err) {
    log(`[Flanking] findFlankingDestination failed: ${err.message}`, "warn");
    return null;
  }
}

/**
 * Gate + compute flanking goal cells for moveTowardTarget. Returns a one-cell
 * goal array to try first, or null when flanking does not apply.
 */
function _maybeFlankingGoals(npcToken, targetToken, meleeGoalCells, moveBudgetFt) {
  try {
    if (!getSetting(SETTINGS.ENABLE_FLANKING_MOVEMENT)) return null;

    // Archetype gate: pack archetypes, or any archetype mix with a strong
    // focus-fire lean (merged focusFireBonus > 5).
    const keys = resolveArchetypes(npcToken.actor) ?? [];
    const isPack = keys.some(k => k === "pack-flanker" || k === "pack-hunter");
    const merged = isPack ? null : mergeArchetypes(keys);
    if (!isPack && !((merged?.focusFireBonus ?? 0) > 5)) return null;

    // Allies: same player-facing disposition, alive, visible, excluding SECRET.
    const npcDisp = npcToken.document?.disposition;
    if (npcDisp === CONST.TOKEN_DISPOSITIONS.SECRET) return null;
    const allies = (canvas.tokens?.placeables ?? []).filter(t =>
      t.id !== npcToken.id &&
      t.actor &&
      !t.document.hidden &&
      t.document.disposition === npcDisp &&
      (t.actor.system?.attributes?.hp?.value ?? 0) > 0
    );
    if (!allies.length) return null;

    const cell = findFlankingDestination(npcToken, targetToken, allies, moveBudgetFt, meleeGoalCells);
    return cell ? [cell] : null;
  } catch { return null; }
}

function _terrainCostAt(nr, nc, movingToken) {
  try {
    if (!getSetting(SETTINGS.DIFFICULT_TERRAIN)) return 1;

    const cellPx = gridCellCenter(nr, nc);

    // ── Integration 1: Foundry v12 native terrain ─────────────────────────
    if (canvas.terrain?.getTerrain) {
      const t = canvas.terrain.getTerrain(cellPx.x, cellPx.y);
      if (t && Number.isFinite(t.movementCost) && t.movementCost > 0) {
        return t.movementCost;
      }
    }

    // ── Integration 2: Foundry v12 Region behaviors (terrain type) ────────
    if (canvas.regions?.placeables) {
      for (const region of canvas.regions.placeables) {
        if (!region.document?.behaviors) continue;
        const behavior = [...region.document.behaviors].find(b =>
          b.type === "terrain" || b.system?.movementCost !== undefined
        );
        if (!behavior) continue;
        if (!region.document.shapes?.some?.(s => s.contains?.(cellPx.x, cellPx.y))) continue;
        const mult = Number(behavior.system?.movementCost ?? 1);
        if (mult > 1) return mult;
      }
    }

    // ── Integration 3: Terrain Layer module (legacy, pre-v12) ─────────────
    if (canvas.terrain?.regions) {
      for (const region of canvas.terrain.regions) {
        if (!region.active) continue;
        if (region.object?.bounds?.contains?.(cellPx.x, cellPx.y)) {
          const mult = Number(region.document?.flags?.["terrain-layer"]?.moveCost ?? 1);
          if (mult > 1) return mult;
        }
      }
    }
  } catch (_) { /* non-fatal — terrain integration must never block pathfinding */ }

  return 1;
}

// ─── Cover-aware path cost: threat exposure map ──────────────────────────────

/**
 * Build a cost function that returns extra cost per cell based on how many
 * hostile ranged threats currently have line-of-sight to that cell.
 *
 * Design constraints:
 *  - Additive cost, small constant per threat (0.25). Cover preference must
 *    only break ties; never override a strictly-faster open route.
 *  - Memoised per cell — LOS tests are not cheap, but cells get revisited.
 *  - Returns null when disabled OR no ranged threats — saves BFS overhead.
 *  - Threat list captured ONCE at construction; mid-pathfinding moves don't
 *    invalidate it (BFS is single-frame anyway).
 *
 * What counts as a "ranged threat":
 *  - Token disposition is hostile toward the moving token's disposition
 *  - Token actor has at least one item where isRangedItem() returns true
 *  - Token is alive (HP > 0) and not defeated
 *
 * @param {Token} movingToken
 * @returns {((row: number, col: number) => number) | null}
 */
// ─── AOE threat memory (Task 9) ──────────────────────────────────────────────
// Recently-placed measured templates leave a "danger zone" in smart NPCs'
// minds: cells inside a fresh footprint cost extra during pathfinding, so an
// INT 10+ creature routes around the cleric's Spirit Guardians lane instead
// of marching through it. No movement-as-reaction is invented — this only
// shapes the NPC's OWN next move. Zones expire after AOE_ZONE_TTL_ROUNDS or
// when the template is deleted.

const AOE_THREAT_ZONES = new Map(); // templateId → { cells:Set, round, kind, persistent }
const AOE_ZONE_TTL_ROUNDS = 2;
const AOE_ZONE_COST = 0.5;   // per containing zone, per cell (transient burst)
const AOE_ZONE_CAP  = 1.0;

// Persistent template-backed spell zones (0.21.x). Classified by name:
//   barrier → impassable cells (Wall of Force/Stone, Forcecage…)
//   hazard  → heavy avoidance cost, persists while the template exists
//             (Spirit Guardians, Cloudkill, Spike Growth, Web, Wall of Fire…)
const _BARRIER_RX = /wall of force|wall of stone|forcecage|force cage|resilient sphere|wall of (ice|thorns)/i;
const _HAZARD_RX  = /spirit guardians|cloudkill|hunger of hadar|sickening radiance|spike growth|web\b|grease|moonbeam|insect plague|wall of fire|flame|incendiary|stinking cloud|evard|black tentacles|plant growth|blade barrier|sleet storm/i;
const AOE_HAZARD_COST = 1.5;

export function clearAoeThreatZones() {
  AOE_THREAT_ZONES.clear();
}

/** Register template hooks. Called once from main.js ready. */
export function registerAoeThreatHooks() {
  Hooks.on("createMeasuredTemplate", (doc) => {
    try {
      if (!game.user.isGM) return;
      if (!getSetting(SETTINGS.AOE_THREAT_MEMORY)) return;
      if (!game.combat?.started) return;
      // The placeable's computed shape isn't ready inside the create hook —
      // defer one tick, then rasterise.
      setTimeout(() => {
        try { _recordTemplateZone(doc); }
        catch (err) { log(`[AOE-mem] Zone capture failed: ${err.message}`, "warn"); }
      }, 50);
    } catch { /* never block template placement */ }
  });

  Hooks.on("deleteMeasuredTemplate", (doc) => {
    AOE_THREAT_ZONES.delete(doc.id);
  });
}

function _recordTemplateZone(doc) {
  const gridSize = canvas.grid?.size ?? 100;
  const cells = new Set();

  const placeable = canvas.templates?.get?.(doc.id);
  const shape = placeable?.shape ?? null;

  // Bounding box in cells, padded one cell.
  const radiusPx = ((doc.distance ?? 0) / (canvas.grid?.distance ?? 5)) * gridSize;
  const minR = Math.floor((doc.y - radiusPx) / gridSize) - 1;
  const maxR = Math.ceil((doc.y + radiusPx) / gridSize) + 1;
  const minC = Math.floor((doc.x - radiusPx) / gridSize) - 1;
  const maxC = Math.ceil((doc.x + radiusPx) / gridSize) + 1;
  if (!Number.isFinite(minR) || (maxR - minR) * (maxC - minC) > 4000) return; // sanity cap

  for (let r = minR; r <= maxR; r++) {
    for (let c = minC; c <= maxC; c++) {
      const cx = c * gridSize + gridSize / 2;
      const cy = r * gridSize + gridSize / 2;
      let inside;
      if (shape?.contains) {
        inside = shape.contains(cx - doc.x, cy - doc.y); // shape is origin-relative
      } else {
        inside = Math.hypot(cx - doc.x, cy - doc.y) <= radiusPx; // circle fallback
      }
      if (inside) cells.add(`${r},${c}`);
    }
  }
  if (!cells.size) return;

  // Classify by the originating spell name (flags vary by system/version).
  const name = _templateSpellName(doc);
  let kind = "burst", persistent = false;
  if (_BARRIER_RX.test(name))      { kind = "barrier"; persistent = true; }
  else if (_HAZARD_RX.test(name))  { kind = "hazard";  persistent = true; }

  AOE_THREAT_ZONES.set(doc.id, { cells, round: _round(), kind, persistent });
  log(`[AOE-mem] Recorded ${kind} zone ${doc.id} (${cells.size} cells${persistent ? ", persistent" : ""})${name ? ` [${name}]` : ""}.`);
}

/** Best-effort spell/effect name behind a measured template. */
function _templateSpellName(doc) {
  try {
    const f = doc.flags ?? {};
    return (
      f.dnd5e?.item?.name ??
      f.dnd5e?.origin?.name ??
      f["midi-qol"]?.itemName ??
      doc.text ??              // some systems label the template
      f.world?.name ??
      ""
    ) + "";
  } catch { return ""; }
}

/** Active zones. Persistent (barrier/hazard) zones live until their template
 *  is deleted; transient burst zones expire after AOE_ZONE_TTL_ROUNDS. */
function _activeAoeZones() {
  const round = _round();
  const zones = [];
  for (const [id, zone] of AOE_THREAT_ZONES) {
    if (!zone.persistent && round - zone.round > AOE_ZONE_TTL_ROUNDS) {
      AOE_THREAT_ZONES.delete(id);
      continue;
    }
    zones.push(zone);
  }
  return zones;
}

/** Cells made impassable by barrier zones (Wall of Force/Stone). Returns a
 *  Set of "r,c" keys, or null when none — used by the BFS to block movement. */
function _barrierCells() {
  let out = null;
  for (const zone of AOE_THREAT_ZONES.values()) {
    if (zone.kind !== "barrier") continue;
    if (!out) out = new Set();
    for (const c of zone.cells) out.add(c);
  }
  return out;
}

function buildThreatExposureFn(movingToken, excludeTokenId = null) {
  // Gate: cover-aware pathing controls the ranged-threat component only;
  // AOE threat memory (below) has its own independent gate.
  let coverEnabled = false;
  try { coverEnabled = getSetting(SETTINGS.AI_COVER_AWARE_PATHING) === true; }
  catch { coverEnabled = false; }

  if (!movingToken?.actor || !canvas?.tokens) return null;

  const movingDisp = movingToken.document?.disposition ?? 0;
  const threats = [];

  for (const t of coverEnabled ? canvas.tokens.placeables : []) {
    if (!t.actor || t.id === movingToken.id) continue;
    // CRITICAL: never treat the token we're moving TOWARD as a threat. A
    // melee attacker by definition needs to end up adjacent to its target,
    // and the target's LOS necessarily covers every adjacent cell. Without
    // this exclusion, cover-aware pathing actively pushes melee NPCs away
    // from melee range — the BFS finds it cheaper to stop short of the
    // target than to enter cells where the target can "see" them. The
    // observable symptom is melee NPCs dashing then halting at 15-20ft
    // from a target they could close with, then failing the LOS check
    // because the path picked a corner instead of an engagement cell.
    if (excludeTokenId && t.id === excludeTokenId) continue;
    if (t.document.hidden) continue;
    const hp = t.actor.system?.attributes?.hp?.value ?? 0;
    if (hp <= 0) continue;
    // Disposition: simple hostility — opposite signs. Avoids importing the
    // full faction matrix; the few edge cases (neutral, secret) just mean a
    // missed cover preference, never wrong pathing.
    const tDisp = t.document?.disposition ?? 0;
    if (Math.sign(tDisp) === Math.sign(movingDisp) && tDisp !== 0) continue;
    // Has ranged weapon?
    const hasRanged = t.actor.items?.some?.(i => {
      try { return isRangedItem(i); } catch { return false; }
    });
    if (!hasRanged) continue;
    // Capture grid cell once
    const g = tokenToGrid(t);
    if (!g) continue;
    threats.push({ row: g.i, col: g.j });
  }

  // AOE threat memory (Task 9): smart creatures also avoid fresh template
  // footprints. Gated on its own setting + INT ≥ 10 (dim creatures blunder in).
  let aoeZones = [];
  try {
    if (getSetting(SETTINGS.AOE_THREAT_MEMORY)) {
      const intScore = Number(movingToken.actor?.system?.abilities?.int?.value ?? 0);
      if (intScore >= 10) aoeZones = _activeAoeZones();
    }
  } catch { /* zones off */ }

  if (threats.length === 0 && aoeZones.length === 0) return null;

  // Cover-preference tuning. Previous values (0.25 / 1.0) made BFS prefer
  // a 5-cell detour over a 4-cell direct route (cost 5 vs 8) — effectively
  // "always detour if there's any cover at all." Reduced so cover only wins
  // when the detour is at most ~1 cell. Concretely:
  //   - Single threat exposes a cell: +0.1
  //   - 4+ threats expose a cell: capped at +0.4
  //   - A 4-cell exposed path now costs 4 + 1.6 = 5.6
  //   - A 5-cell covered detour costs 5.0 → covered detour wins by 0.6
  //   - A 6-cell covered detour costs 6.0 → exposed direct wins by 0.4
  // Net: NPCs take cover when it's a 1-cell detour, otherwise charge.
  const PER_THREAT   = 0.10;
  const MAX_EXPOSURE = 0.40;
  const cache = new Map();

  return function threatExposureAt(row, col) {
    const key = `${row},${col}`;
    const cached = cache.get(key);
    if (cached !== undefined) return cached;

    let exposure = 0;

    // AOE footprints: additive avoidance cost per containing zone. Persistent
    // hazards (Spirit Guardians, Cloudkill, Wall of Fire…) cost much more than
    // a transient burst memory, so the NPC genuinely routes around them.
    if (aoeZones.length) {
      let zoneCost = 0;
      for (const zone of aoeZones) {
        if (zone.kind === "barrier") continue; // handled as impassable in BFS
        if (zone.cells.has(key)) {
          zoneCost += (zone.kind === "hazard" ? AOE_HAZARD_COST : AOE_ZONE_COST);
        }
      }
      // Hazards may exceed the burst cap; cap only the transient component.
      exposure += Math.min(zoneCost, AOE_HAZARD_COST * 3);
    }

    for (const t of threats) {
      // Trivial-reject: cells more than a long-bow range (~150ft = 30 cells)
      // away can't be threatened. Saves LOS tests on far-away cells.
      const dr = row - t.row;
      const dc = col - t.col;
      if (dr*dr + dc*dc > 900) continue;
      if (hasLineOfSight(t.row, t.col, row, col)) {
        exposure += PER_THREAT;
        if (exposure >= MAX_EXPOSURE) { exposure = MAX_EXPOSURE; break; }
      }
    }
    cache.set(key, exposure);
    return exposure;
  };
}

// ─── Wall-aware BFS within move budget ───────────────────────────────────────

/**
 * BFS from (startRow, startCol) expanding up to budgetCells steps.
 * Returns { cost, parent } where:
 *   cost   — Map<"row,col", number>  cheapest BFS cell cost in grid cells
 *   parent — Map<"row,col", "row,col"|null>  BFS predecessor for path reconstruction
 *
 * Orthogonal steps cost 1, diagonal steps cost √2 ≈ 1.41.
 * Diagonal moves that would cut through a wall corner are blocked
 * (both orthogonal neighbours must be passable).
 *
 * @param {number}  startRow
 * @param {number}  startCol
 * @param {number}  budgetCells   maximum path cost in grid cells
 * @param {Token}   movingToken
 * @param {boolean} treatDoorsAsOpen
 * @returns {{ cost: Map<string,number>, parent: Map<string,string|null> }}
 */
/**
 * Derive a smaller-budget reachability tier from a larger flood by filtering
 * the cost map. Exact for costs (Dijkstra invariant: costs ≤ tier budget are
 * identical regardless of total flood budget); parent chains of included
 * cells are always fully included since every ancestor has strictly lower
 * cost. Returns real Maps so .size/iteration semantics match reachableCells.
 */
function _filterReachTier(flood, tierBudgetCells) {
  const cost   = new Map();
  const parent = new Map();
  for (const [key, c] of flood.cost) {
    if (c <= tierBudgetCells + 0.001) {
      cost.set(key, c);
      parent.set(key, flood.parent.get(key) ?? null);
    }
  }
  return { cost, parent };
}

export function reachableCells(startRow, startCol, budgetCells, movingToken,
                        treatDoorsAsOpen = false,
                        congestionPenalty = 0,
                        allowPassThroughDeadProne = false,
                        terrainCostFn = null,
                        threatExposureFn = null) {
  const DIAG = diagonalMoveCost();
  const NEIGHBORS = [
    [-1, 0, 1],      [1,  0, 1],      [0, -1, 1],      [0,  1, 1],
    [-1,-1, DIAG],   [-1, 1, DIAG],   [1, -1, DIAG],   [1,  1, DIAG],
  ];

  // cost map: key → cheapest known cost to reach this cell
  const cost   = new Map();
  const parent = new Map();
  const startKey = `${startRow},${startCol}`;
  cost.set(startKey, 0);
  parent.set(startKey, null);

  // Use MinHeap for O(log n) pop instead of O(n log n) sort-then-shift.
  // Entries: { f: costSoFar, row, col } — same structure as findNaturalRoute.
  const heap = new MinHeap();
  heap.push({ f: 0, row: startRow, col: startCol });

  while (heap.size > 0) {
    const { f: g, row, col } = heap.pop();

    // skip if we already found a cheaper route here
    const key = `${row},${col}`;
    if (g > (cost.get(key) ?? Infinity) + 0.001) continue;

    for (const [dr, dc, stepCost] of NEIGHBORS) {
      if (!Number.isFinite(stepCost)) continue;
      const nr   = row + dr;
      const nc   = col + dc;
      const nKey = `${nr},${nc}`;

      if (!isInBoundsForToken(nr, nc, movingToken)) continue;
      if (isGridOccupied(nr, nc, movingToken, allowPassThroughDeadProne)) continue;

      // Base movement cost for this step
      let moveCost = stepCost;

      // Difficult terrain: multiply base step cost by terrain multiplier (default 2× in 5e).
      // Applied before fallen-body and congestion costs so those remain additive.
      const terrainMult = terrainCostFn ? terrainCostFn(nr, nc) : _terrainCostAt(nr, nc, movingToken);
      if (terrainMult > 1) moveCost = moveCost * terrainMult;

      // +1 grid cell cost (~5ft) for moving through a fallen creature's space
      if (allowPassThroughDeadProne && _isPassableBodyCell(nr, nc, movingToken)) {
        moveCost += 1;
      }

      // Soft congestion penalty: allied crowding costs extra but doesn't block
      if (congestionPenalty > 0 && _isCrowdedCell(nr, nc, movingToken)) {
        moveCost += congestionPenalty;
      }

      // Threat exposure: cells visible from enemy ranged threats are slightly
      // more expensive. Additive (small constant) rather than multiplicative
      // so cover preference only breaks ties — the BFS will still take open
      // ground when it's strictly faster. The callback returns 0 for safe
      // cells and a small positive number for exposed ones.
      if (threatExposureFn) {
        const exposure = threatExposureFn(nr, nc);
        if (exposure > 0) moveCost += exposure;
      }

      const ng = g + moveCost;
      if (ng > budgetCells + 0.001) continue;
      if (ng >= (cost.get(nKey) ?? Infinity)) continue;

      // Corner-cutting prevention for diagonals
      if (dr !== 0 && dc !== 0) {
        if (isStepBlocked(row, col, row + dr, col, treatDoorsAsOpen, movingToken)) continue;
        if (isStepBlocked(row, col, row, col + dc, treatDoorsAsOpen, movingToken)) continue;
      }

      if (isStepBlocked(row, col, nr, nc, treatDoorsAsOpen, movingToken)) continue;

      cost.set(nKey, ng);
      parent.set(nKey, key);
      heap.push({ f: ng, row: nr, col: nc });
    }
  }

  return { cost, parent };
}


// ─── Lightweight priority queue for natural route planning ───────────────────

class MinHeap {
  constructor() { this.items = []; }
  get size() { return this.items.length; }
  push(entry) {
    this.items.push(entry);
    this._bubbleUp(this.items.length - 1);
  }
  pop() {
    if (this.items.length === 0) return null;
    const root = this.items[0];
    const last = this.items.pop();
    if (this.items.length > 0) {
      this.items[0] = last;
      this._sinkDown(0);
    }
    return root;
  }
  _bubbleUp(index) {
    const item = this.items[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.items[parentIndex];
      if (item.f >= parent.f) break;
      this.items[parentIndex] = item;
      this.items[index] = parent;
      index = parentIndex;
    }
  }
  _sinkDown(index) {
    const length = this.items.length;
    const item = this.items[index];
    while (true) {
      const leftIndex = (index * 2) + 1;
      const rightIndex = leftIndex + 1;
      let swapIndex = null;

      if (leftIndex < length) {
        const left = this.items[leftIndex];
        if (left.f < item.f) swapIndex = leftIndex;
      }
      if (rightIndex < length) {
        const right = this.items[rightIndex];
        if ((swapIndex === null && right.f < item.f) ||
            (swapIndex !== null && right.f < this.items[swapIndex].f)) {
          swapIndex = rightIndex;
        }
      }
      if (swapIndex === null) break;
      this.items[index] = this.items[swapIndex];
      this.items[swapIndex] = item;
      index = swapIndex;
    }
  }
}

function _pathCost(path) {
  let total = 0;
  for (let i = 1; i < path.length; i++) {
    total += octile(path[i - 1].row, path[i - 1].col, path[i].row, path[i].col);
  }
  return total;
}

function _pathPointAtBudget(path, budgetCells) {
  if (!path?.length) return null;
  let spent = 0;
  let index = 0;
  for (let i = 1; i < path.length; i++) {
    const stepCost = octile(path[i - 1].row, path[i - 1].col, path[i].row, path[i].col);
    if (spent + stepCost > budgetCells + 0.05) break;
    spent += stepCost;
    index = i;
  }
  return { ...path[index], index, spentCells: spent };
}

function _pathTurnCount(path) {
  if (!path || path.length < 3) return 0;
  let turns = 0;
  let prev = null;
  for (let i = 1; i < path.length; i++) {
    const dir = {
      r: Math.sign(path[i].row - path[i - 1].row),
      c: Math.sign(path[i].col - path[i - 1].col),
    };
    if (prev && (prev.r !== dir.r || prev.c !== dir.c)) turns++;
    prev = dir;
  }
  return turns;
}

function _compressPathToWaypoints(path) {
  if (!path || path.length <= 2) return path ?? [];
  const out = [path[0]];
  let prevDir = null;

  for (let i = 1; i < path.length; i++) {
    const dir = {
      r: Math.sign(path[i].row - path[i - 1].row),
      c: Math.sign(path[i].col - path[i - 1].col),
    };

    if (prevDir && (dir.r !== prevDir.r || dir.c !== prevDir.c)) {
      out.push(path[i - 1]);
    }
    prevDir = dir;
  }

  out.push(path[path.length - 1]);
  return out;
}


function _compressPathToWaypointsForBudget(path, budgetCells) {
  if (!path || path.length <= 2) return path ?? [];

  const out = [path[0]];
  let prevDir = null;
  let spent = 0;
  let lastReachableIndex = 0;

  for (let i = 1; i < path.length; i++) {
    const stepCost = octile(path[i - 1].row, path[i - 1].col, path[i].row, path[i].col);
    if (spent + stepCost > budgetCells + 0.05) break;

    const dir = {
      r: Math.sign(path[i].row - path[i - 1].row),
      c: Math.sign(path[i].col - path[i - 1].col),
    };

    if (prevDir && (dir.r !== prevDir.r || dir.c !== prevDir.c)) {
      const turnCell = path[i - 1];
      const lastOut = out[out.length - 1];
      if (lastOut.row !== turnCell.row || lastOut.col !== turnCell.col) out.push(turnCell);
    }

    spent += stepCost;
    lastReachableIndex = i;
    prevDir = dir;
  }

  const finalCell = path[lastReachableIndex];
  const lastOut = out[out.length - 1];
  if (finalCell && (lastOut.row !== finalCell.row || lastOut.col !== finalCell.col)) out.push(finalCell);
  return out;
}

function _slicePathToDest(path, destRow, destCol) {
  const idx = path.findIndex(p => p.row === destRow && p.col === destCol);
  return idx >= 0 ? path.slice(0, idx + 1) : path;
}

function _remainingPathFromCurrent(path, token) {
  if (!path?.length) return [];
  const cur = tokenToGrid(token);
  const idx = path.findIndex(p => p.row === cur.i && p.col === cur.j);
  if (idx >= 0) return path.slice(idx);

  // If Foundry's live token position drifts off the planned route by a cell
  // after a door interaction or animation update, continue from the closest
  // future point instead of restarting the whole path and causing circles.
  let bestIdx = 0;
  let bestDist = Infinity;
  for (let i = 0; i < path.length; i++) {
    const d = octile(cur.i, cur.j, path[i].row, path[i].col);
    if (d < bestDist || (Math.abs(d - bestDist) < 0.001 && i > bestIdx)) {
      bestDist = d;
      bestIdx = i;
    }
  }

  if (bestDist <= 2.01) {
    return [
      { row: cur.i, col: cur.j },
      ...path.slice(bestIdx + (bestDist < 0.25 ? 1 : 0)),
    ];
  }

  return path;
}

// ─── Movement intent (imperfection layer) ────────────────────────────────────

/**
 * Build movement intent modifiers from the NPC's cognitive profile.
 * Called once per turn before route planning begins.
 *
 * @param {Token}  npcToken
 * @param {object} cogProfile   CognitiveProfile from buildBehaviorContext()
 * @param {object} settings     { movementImperfection, passThroughFallen }
 * @returns {MovementIntent}
 */
function buildMovementIntent(npcToken, cogProfile, settings) {
  // If the setting is disabled, return fully capable defaults
  if (!settings.movementImperfection) {
    return {
      useDirectVector:          false,
      allowReroute:             true,
      searchMultiplier:         1.0,
      congestionPenalty:        0,
      allowPassThroughDeadProne: settings.passThroughFallen,
      reevalInterval:           1,
    };
  }

  const stuck = _getStuckState(npcToken.id);

  // Direct-vector mode: skip A* and aim straight at nearest goal cell.
  // Triggered when pathSearchMultiplier is very low OR when stubborn and not
  // yet stuck long enough to try something different.
  const stubbornThreshold = Math.round((cogProfile.stubbornness ?? 0) * 4);
  const useDirectVector =
    cogProfile.pathSearchMultiplier <= 0.15 ||
    ((cogProfile.stubbornness ?? 0) >= 0.80 && stuck.stuckRounds < stubbornThreshold);

  // Reroute permission: even if cogProfile allows it, stubbornness may block it.
  const allowReroute =
    (Math.random() < (cogProfile.rerouteChance ?? 1.0)) &&
    (stuck.stuckRounds >= stubbornThreshold || (cogProfile.stubbornness ?? 0) < 0.5);

  // Congestion penalty: (1 - tolerance) * 8 grid-cell-cost added to crowded paths.
  // At tolerance 1.0 (zombie) this is 0. At 0.0 (assassin) this is 8 (~40ft detour).
  const congestionPenalty = (1.0 - (cogProfile.congestionTolerance ?? 0.5)) * 8;

  return {
    useDirectVector,
    allowReroute,
    searchMultiplier:          cogProfile.pathSearchMultiplier ?? 1.0,
    congestionPenalty,
    allowPassThroughDeadProne: settings.passThroughFallen,
    reevalInterval:            cogProfile.reevalInterval ?? 1,
  };
}

/**
 * For direct-vector creatures: pick the goal cell geometrically nearest to
 * the target without running a full A* search.
 *
 * @param {Array<{row,col}>} goalCells
 * @param {number}           tgtRow
 * @param {number}           tgtCol
 * @returns {{row,col}|null}
 */
function pickDirectVectorGoal(goalCells, tgtRow, tgtCol) {
  if (!goalCells?.length) return null;
  let best = null, bestDist = Infinity;
  for (const g of goalCells) {
    const d = octile(g.row, g.col, tgtRow, tgtCol);
    if (d < bestDist) { bestDist = d; best = g; }
  }
  return best;
}

function _goalKey(row, col) { return `${row},${col}`; }

function _routeSearchLimitCells(budgetCells, attackRangeCells, isMelee) {
  const base = Math.max(budgetCells * 5, attackRangeCells + 16, isMelee ? 32 : 24);
  return Math.min(90, base);
}

/**
 * A* route planner used only for the "natural movement" layer.
 * Unlike the bounded movement BFS, this can look past the current turn budget,
 * so an NPC will start moving toward a doorway/corner instead of face-planting
 * into the nearest wall-adjacent square.
 */
function findNaturalRoute(startRow, startCol, goalCells, tgtRow, tgtCol, maxSearchCells, movingToken, treatDoorsAsOpen = false) {
  if (!goalCells?.length) return null;

  const DIAG = diagonalMoveCost();
  const NEIGHBORS = [
    [-1, 0, 1],      [1,  0, 1],      [0, -1, 1],      [0,  1, 1],
    [-1,-1, DIAG],   [-1, 1, DIAG],   [1, -1, DIAG],   [1,  1, DIAG],
  ];

  const goalSet = new Set(goalCells.map(g => _goalKey(g.row, g.col)));
  const startKey = _goalKey(startRow, startCol);
  const gScore = new Map([[startKey, 0]]);
  const parent = new Map([[startKey, null]]);
  const open = new MinHeap();
  let explored = 0;
  let bestFallback = { key: startKey, h: Infinity, g: 0 };

  const heuristic = (r, c) => {
    // Fast target-centered heuristic. It is intentionally simple; exact goal
    // testing happens against goalSet. This keeps ranged searches from doing
    // expensive per-goal scans every node.
    return Math.max(0, octile(r, c, tgtRow, tgtCol) - 1);
  };

  open.push({ f: heuristic(startRow, startCol), g: 0, row: startRow, col: startCol });

  while (open.size > 0 && explored < 5000) {
    const current = open.pop();
    if (!current) break;

    const key = _goalKey(current.row, current.col);
    const known = gScore.get(key) ?? Infinity;
    if (current.g > known + 0.001) continue;
    if (current.g > maxSearchCells + 0.001) continue;

    explored++;

    const hNow = heuristic(current.row, current.col);
    if (key !== startKey && (
      hNow < bestFallback.h - 0.001 ||
      (Math.abs(hNow - bestFallback.h) <= 0.001 && current.g > bestFallback.g)
    )) {
      bestFallback = { key, h: hNow, g: current.g };
    }

    if (goalSet.has(key) && key !== startKey) {
      const path = reconstructPath(parent, key);
      return {
        path,
        cost: current.g,
        turns: _pathTurnCount(path),
        explored,
      };
    }

    for (const [dr, dc, stepCost] of NEIGHBORS) {
      if (!Number.isFinite(stepCost)) continue;
      const nr = current.row + dr;
      const nc = current.col + dc;
      const nKey = _goalKey(nr, nc);
      const ng = current.g + stepCost;

      if (ng > maxSearchCells + 0.001) continue;
      if (!isInBoundsForToken(nr, nc, movingToken)) continue;
      if (isGridOccupied(nr, nc, movingToken)) continue;

      if (dr !== 0 && dc !== 0) {
        if (isStepBlocked(current.row, current.col, current.row + dr, current.col, treatDoorsAsOpen, movingToken)) continue;
        if (isStepBlocked(current.row, current.col, current.row, current.col + dc, treatDoorsAsOpen, movingToken)) continue;
      }

      if (isStepBlocked(current.row, current.col, nr, nc, treatDoorsAsOpen, movingToken)) continue;

      const old = gScore.get(nKey) ?? Infinity;
      if (ng + 0.001 >= old) continue;

      gScore.set(nKey, ng);
      parent.set(nKey, key);

      // Small turn penalty gives more creature-like routes without changing
      // legal reach. It avoids jittery zig-zags when two paths are equivalent.
      const prevKey = parent.get(key);
      let turnPenalty = 0;
      if (prevKey) {
        const [pr, pc] = prevKey.split(',').map(Number);
        const lastDir = { r: Math.sign(current.row - pr), c: Math.sign(current.col - pc) };
        const nextDir = { r: Math.sign(nr - current.row), c: Math.sign(nc - current.col) };
        if (lastDir.r !== nextDir.r || lastDir.c !== nextDir.c) turnPenalty = 0.08;
      }

      open.push({
        f: ng + heuristic(nr, nc) + turnPenalty,
        g: ng,
        row: nr,
        col: nc,
      });
    }
  }

  if (bestFallback.key !== startKey) {
    const path = reconstructPath(parent, bestFallback.key);
    return {
      path,
      cost: bestFallback.g,
      turns: _pathTurnCount(path),
      explored,
      partial: true,
    };
  }

  return null;
}

// ─── Path reconstruction ───────────────────────────────────────────────────────

/**
 * Walk the BFS parent map from destKey back to start, returning the ordered
 * path as an array of { row, col } from start → dest (inclusive).
 *
 * @param {Map<string,string|null>} parent
 * @param {string} destKey   "row,col"
 * @returns {Array<{row:number,col:number}>}
 */
function reconstructPath(parent, destKey) {
  const path = [];
  let key = destKey;
  while (key !== null && key !== undefined) {
    const [r, c] = key.split(",").map(Number);
    path.unshift({ row: r, col: c });
    key = parent.get(key) ?? null;
  }
  return path;
}

// ─── Goal cell builders ───────────────────────────────────────────────────────

function getMeleeGoalCells(npcToken, targetToken) {
  const tgt = tokenToGrid(targetToken);
  const { w: nw, h: nh } = tokenGridSize(npcToken);
  const { w: tw, h: th } = tokenGridSize(targetToken);
  const candidates = [];
  const seen = new Set();

  for (let row = tgt.i - nh; row <= tgt.i + th; row++) {
    for (let col = tgt.j - nw; col <= tgt.j + tw; col++) {
      const key = `${row},${col}`;
      if (seen.has(key)) continue;
      seen.add(key);

      if (!isInBoundsForToken(row, col, npcToken)) continue;
      if (isGridOccupied(row, col, npcToken)) continue;
      if (rectsOverlap(row, col, npcToken, tgt.i, tgt.j, targetToken)) continue;
      if (rectDistanceCells(row, col, npcToken, tgt.i, tgt.j, targetToken) > 1.01) continue;

      const losOk = hasLineOfSightToToken(row, col, npcToken, targetToken);
      logLOS(npcToken.name, _round(), -1, row, col, tgt.i, tgt.j, losOk, "melee goal check");
      if (losOk) candidates.push({ row, col });
    }
  }

  if (candidates.length === 0) {
    log(`${npcToken.name}: All adjacent cells failed LOS — geometry-only fallback.`);
    for (let row = tgt.i - nh; row <= tgt.i + th; row++) {
      for (let col = tgt.j - nw; col <= tgt.j + tw; col++) {
        if (!isInBoundsForToken(row, col, npcToken)) continue;
        if (isGridOccupied(row, col, npcToken)) continue;
        if (rectsOverlap(row, col, npcToken, tgt.i, tgt.j, targetToken)) continue;
        if (rectDistanceCells(row, col, npcToken, tgt.i, tgt.j, targetToken) <= 1.01) candidates.push({ row, col });
      }
    }
  }
  return candidates;
}

/** Three-tier LOS fallback — mirrors getMeleeGoalCells. See that function for rationale. */
function getRangedGoalCells(npcToken, targetToken, rangeCells) {
  const tgt = tokenToGrid(targetToken);
  const { w: nw, h: nh } = tokenGridSize(npcToken);
  const { w: tw, h: th } = tokenGridSize(targetToken);

  const tier1 = [];
  const tier2 = [];
  const tier3 = [];

  for (let row = tgt.i - rangeCells - nh; row <= tgt.i + th + rangeCells; row++) {
    for (let col = tgt.j - rangeCells - nw; col <= tgt.j + tw + rangeCells; col++) {
      if (!isInBoundsForToken(row, col, npcToken)) continue;
      if (isGridOccupied(row, col, npcToken)) continue;
      if (rectsOverlap(row, col, npcToken, tgt.i, tgt.j, targetToken)) continue;
      if (rectDistanceCells(row, col, npcToken, tgt.i, tgt.j, targetToken) > rangeCells + 0.01) continue;

      tier3.push({ row, col });

      const pts  = tokenSamplePoints(row, col, npcToken);
      const tPts = tokenSamplePoints(tgt.i, tgt.j, targetToken);
      let anyLOS = false;
      for (const sp of pts) {
        for (const tp of tPts) {
          if (CONFIG.Canvas.polygonBackends.sight.testCollision(sp, tp, { type: "sight", mode: "any" }) === false) {
            anyLOS = true; break;
          }
        }
        if (anyLOS) break;
      }

      const losAll = hasLineOfSightToToken(row, col, npcToken, targetToken);
      logLOS(npcToken.name, _round(), -1, row, col, tgt.i, tgt.j, losAll, "ranged goal check");

      if (losAll)  { tier1.push({ row, col }); }
      else if (anyLOS) { tier2.push({ row, col }); }
    }
  }

  if (tier1.length > 0) return tier1;
  if (tier2.length > 0) {
    log(`${npcToken.name}: Relaxed LOS fallback for ranged goals (${tier2.length} cells).`);
    return tier2;
  }
  log(`${npcToken.name}: All ranged cells failed LOS — geometry-only fallback (${tier3.length} cells).`);
  return tier3;
}

// ─── Best reachable cell toward goals ────────────────────────────────────────

/**
 * Given a reachability map and a set of goal cells, return the goal cell with
 * the lowest BFS path cost. If no goal cell is directly reachable, return the
 * reachable cell that is geometrically closest to any goal (partial advance).
 *
 * @param {Map<string,number>}     reachMap   output of reachableCells()
 * @param {Array<{row,col}>}       goalCells
 * @param {number}                 startRow
 * @param {number}                 startCol
 * @param {number}                 tgtRow     target grid row (for heuristic)
 * @param {number}                 tgtCol
 * @returns {{ destRow, destCol, cost, reachedGoal: boolean } | null}
 */
const PARTIAL_THREAT_WEIGHT = 5;   // exposure 0.10 → 0.5 cells; cap 0.40 → 2 cells
const PARTIAL_LOS_BONUS     = 0.5; // cells — tie-breaker scale, never dominant

export function pickBestReachable(reachMap, goalCells, startRow, startCol, tgtRow, tgtCol, npcName, opts = null) {
  const goalSet = new Set(goalCells.map(g => `${g.row},${g.col}`));

  // 1. Prefer any goal cell that is directly reachable (cheapest cost wins)
  let bestGoal = null;
  const evalLog = [];
  for (const g of goalCells) {
    const key  = `${g.row},${g.col}`;
    const cost = reachMap.get(key);
    if (cost === undefined) {
      logFailedDest(npcName, _round(), -1, g.row, g.col, "not reachable in budget");
      evalLog.push({ cell: `[${g.row},${g.col}]`, reachable: false, cost: "∞" });
      continue;
    }
    evalLog.push({ cell: `[${g.row},${g.col}]`, reachable: true, cost: cost.toFixed(2) });
    if (!bestGoal || cost < bestGoal.cost) {
      bestGoal = { destRow: g.row, destCol: g.col, cost, reachedGoal: true };
    }
  }
  logCandidates(npcName, _round(), -1, "GOAL_EVAL", evalLog);
  if (bestGoal) return bestGoal;

  // 2. No goal reachable — advance as far as possible toward the target.
  //    Base score: octile distance to the target. Smart partial (Task 2,
  //    PATHFIND_SMART_PARTIAL): blend in threat exposure so the NPC does not
  //    end its turn one cell "closer" while standing in a killing field, then
  //    tie-break the top candidates on LOS (ranged keeps it, stranded melee
  //    breaks it).
  const smart = opts && getSetting(SETTINGS.PATHFIND_SMART_PARTIAL);
  const candidates = [];
  for (const [key] of reachMap) {
    const [r, c] = key.split(",").map(Number);
    if (r === startRow && c === startCol) continue; // skip start
    let score = octile(r, c, tgtRow, tgtCol);
    if (smart && opts.threatFn) {
      const exposure = opts.threatFn(r, c);
      if (exposure > 0) score += exposure * PARTIAL_THREAT_WEIGHT;
    }
    candidates.push({ r, c, score, cost: reachMap.get(key) });
  }
  if (!candidates.length) return null;
  candidates.sort((a, b) => a.score - b.score);

  // LOS tie-break among the cheapest few only — LOS tests are expensive even
  // memoised, and a cell 3 cells worse should never win on sightline alone.
  if (smart && opts.preferLOS && opts.npcToken && opts.targetToken) {
    const top = candidates.slice(0, 10).filter(x => x.score <= candidates[0].score + 1.0);
    for (const cand of top) {
      try {
        const los = hasLineOfSightToToken(cand.r, cand.c, opts.npcToken, opts.targetToken);
        if ((opts.preferLOS === "keep" && los) || (opts.preferLOS === "break" && !los)) {
          cand.score -= PARTIAL_LOS_BONUS;
        }
      } catch { /* skip LOS adjust for this cell */ }
    }
    top.sort((a, b) => a.score - b.score);
    const bestTop = top[0];
    if (bestTop) {
      return { destRow: bestTop.r, destCol: bestTop.c, cost: bestTop.cost, reachedGoal: false,
               partialMeta: { score: bestTop.score, losRule: opts.preferLOS } };
    }
  }

  const best = candidates[0];
  return { destRow: best.r, destCol: best.c, cost: best.cost, reachedGoal: false };
}

// ─── Door helpers ─────────────────────────────────────────────────────────────

function wallMidpoint(wallDoc) {
  const [x1, y1, x2, y2] = wallDoc.c;
  return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
}

function _point(x, y) { return { x, y }; }

function _orientation(a, b, c) {
  return ((b.y - a.y) * (c.x - b.x)) - ((b.x - a.x) * (c.y - b.y));
}

function _onSegment(a, b, c, eps = 0.001) {
  return (
    b.x <= Math.max(a.x, c.x) + eps && b.x + eps >= Math.min(a.x, c.x) &&
    b.y <= Math.max(a.y, c.y) + eps && b.y + eps >= Math.min(a.y, c.y)
  );
}

function _segmentsIntersect(a, b, c, d) {
  const eps = 0.001;
  const o1 = _orientation(a, b, c);
  const o2 = _orientation(a, b, d);
  const o3 = _orientation(c, d, a);
  const o4 = _orientation(c, d, b);

  if ((o1 > eps && o2 < -eps || o1 < -eps && o2 > eps) &&
      (o3 > eps && o4 < -eps || o3 < -eps && o4 > eps)) return true;

  // Colinear / endpoint cases matter for vertical doors exactly on a grid line.
  if (Math.abs(o1) <= eps && _onSegment(a, c, b, eps)) return true;
  if (Math.abs(o2) <= eps && _onSegment(a, d, b, eps)) return true;
  if (Math.abs(o3) <= eps && _onSegment(c, a, d, eps)) return true;
  if (Math.abs(o4) <= eps && _onSegment(c, b, d, eps)) return true;
  return false;
}

function _distPointToSegment(p, a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  if (dx === 0 && dy === 0) return Math.hypot(p.x - a.x, p.y - a.y);
  const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy)));
  const x = a.x + t * dx;
  const y = a.y + t * dy;
  return Math.hypot(p.x - x, p.y - y);
}

function _distSegmentToSegment(a, b, c, d) {
  if (_segmentsIntersect(a, b, c, d)) return 0;
  return Math.min(
    _distPointToSegment(a, c, d),
    _distPointToSegment(b, c, d),
    _distPointToSegment(c, a, b),
    _distPointToSegment(d, a, b),
  );
}

function wallBlocksRay(wallDoc, srcPx, dstPx) {
  try {
    const [x1, y1, x2, y2] = wallDoc.c;
    const a = _point(srcPx.x, srcPx.y);
    const b = _point(dstPx.x, dstPx.y);
    const c = _point(x1, y1);
    const d = _point(x2, y2);

    if (_segmentsIntersect(a, b, c, d)) return true;

    // Near-miss tolerance prevents vertical/horizontal door lines from being
    // missed when the grid center path lands a pixel beside the wall segment.
    const tolerancePx = Math.max(2, canvas.grid.size * 0.06);
    return _distSegmentToSegment(a, b, c, d) <= tolerancePx;
  } catch (_) { return false; }
}

function _doorReachCells(npcToken) {
  const w = Number(npcToken?.document?.width ?? 1);
  const h = Number(npcToken?.document?.height ?? 1);
  // Base reach of ~2.25 cells: a Medium creature standing diagonally adjacent
  // to a doorway (≈1.4 cells to the gap, up to ~2.1 to a far double-door leaf)
  // can plausibly reach out and open it. The previous 1.75 left double-door
  // leaves and diagonally-approached single doors just out of reach, which was
  // the dominant cause of NPCs halting at doorways with movement remaining.
  return Math.max(2.25, Math.max(w, h) * 0.75 + 1.25);
}

async function openBlockingDoors(npcToken, npcCenter, destCenter) {
  const blockingDoors = canvas.walls.placeables
    .filter(w =>
      w.document.door === CONST.WALL_DOOR_TYPES.DOOR &&
      w.document.ds   === CONST.WALL_DOOR_STATES.CLOSED &&
      wallBlocksRay(w.document, npcCenter, destCenter)
    )
    .map(w => w.document);

  if (blockingDoors.length === 0) return false;
  return _openDoorList(npcToken, npcCenter, blockingDoors);
}

/**
 * Open every reachable closed door within arm's reach of the NPC, regardless
 * of whether a specific step-ray crosses its leaf.
 *
 * This is the realistic-movement fix: the previous opener only considered a
 * door whose closed segment the *immediate-step* ray happened to intersect.
 * When the planned path approaches a doorway diagonally or hugs a corner, the
 * one-cell step ray frequently misses the leaf, so the blocked step caused the
 * NPC to halt with full action and movement remaining. Opening by proximity
 * (the NPC is standing right next to a door it is trying to walk through)
 * matches how a creature actually behaves: reach out, open the door, keep
 * walking.
 *
 * @param {Token}  npcToken
 * @param {{x,y}}  npcCenter       current token centre (px)
 * @param {number} [lookaheadCells=0]  extra reach in the travel direction
 * @param {{x,y}}  [headingCenter=null] cell the NPC is moving toward (px)
 * @returns {Promise<boolean>} true if at least one door was opened
 */
export async function openReachableDoors(npcToken, npcCenter, lookaheadCells = 0, headingCenter = null) {
  const gs = canvas.grid.size;
  const reachCells = _doorReachCells(npcToken) + Math.max(0, lookaheadCells);

  const nearby = [];
  for (const w of canvas.walls.placeables) {
    const d = w.document;
    if (d.door !== CONST.WALL_DOOR_TYPES.DOOR) continue;
    if (d.ds   !== CONST.WALL_DOOR_STATES.CLOSED) continue;

    const mid  = wallMidpoint(d);
    const dist = Math.hypot((npcCenter.x - mid.x) / gs, (npcCenter.y - mid.y) / gs);
    if (dist > reachCells) continue;

    // When a heading is supplied, only open doors generally ahead of the NPC
    // — never backtrack to open a door behind it. Doors essentially adjacent
    // (<1 cell) are always eligible: the NPC is right on top of them.
    if (headingCenter) {
      const travel = { x: headingCenter.x - npcCenter.x, y: headingCenter.y - npcCenter.y };
      const toDoor = { x: mid.x - npcCenter.x,           y: mid.y - npcCenter.y };
      const dot = travel.x * toDoor.x + travel.y * toDoor.y;
      if (dot < 0 && dist > 1.0) continue;
    }

    nearby.push({ door: d, dist });
  }

  if (!nearby.length) return false;
  nearby.sort((a, b) => a.dist - b.dist);
  return _openDoorList(npcToken, npcCenter, nearby.map(n => n.door));
}

/** Shared open-and-await routine, with reach + locked-door guards. */
async function _openDoorList(npcToken, npcCenter, doors) {
  let anyOpened = false;
  const gs = canvas.grid.size;
  const reachCells = _doorReachCells(npcToken);

  for (const door of doors) {
    if (door.ds === CONST.WALL_DOOR_STATES.OPEN) continue;
    if (door.ds === CONST.WALL_DOOR_STATES.LOCKED) {
      log(`${npcToken.name}: Door (id=${door.id}) is locked — cannot open.`);
      continue;
    }
    const mid  = wallMidpoint(door);
    const dist = Math.hypot((npcCenter.x - mid.x) / gs, (npcCenter.y - mid.y) / gs);
    if (dist > reachCells + 0.05) {
      log(`${npcToken.name}: Door (id=${door.id}) too far to open (${dist.toFixed(1)} cells; reach ${reachCells.toFixed(1)}c).`);
      continue;
    }
    log(`${npcToken.name}: Opening door (id=${door.id}).`);
    try {
      await door.update({ ds: CONST.WALL_DOOR_STATES.OPEN });
      await delay(150);
      anyOpened = true;
    } catch (err) {
      log(`${npcToken.name}: Failed to open door ${door.id}: ${err.message}`, "warn");
    }
  }
  return anyOpened;
}

// ─── Last-known-position memory ───────────────────────────────────────────────
// Two stores (Task 6):
//  - LAST_KNOWN_POSITIONS: per-NPC, what THIS creature personally observed.
//  - SHARED_LKP: per-target, the freshest sighting by ANY automated NPC, with
//    the observing NPC and round recorded. NPCs with INT ≥ 10 may consume
//    allies' shared entries (they communicate); dim creatures rely only on
//    their own memory. Shared entries expire after SHARED_LKP_TTL_ROUNDS.

const LAST_KNOWN_POSITIONS = new Map();
const SHARED_LKP = new Map();
const SHARED_LKP_TTL_ROUNDS = 3;

function setLastKnownPosition(npcId, targetId, row, col) {
  if (!LAST_KNOWN_POSITIONS.has(npcId)) LAST_KNOWN_POSITIONS.set(npcId, new Map());
  LAST_KNOWN_POSITIONS.get(npcId).set(targetId, { row, col });
  // Every personal observation also refreshes the shared sighting.
  SHARED_LKP.set(targetId, { row, col, round: _round(), observerId: npcId });
}

function getLastKnownPosition(npcId, targetId, npcToken = null) {
  if (!getSetting(SETTINGS.ENABLE_PURSUIT)) return null;

  const own = LAST_KNOWN_POSITIONS.get(npcId)?.get(targetId) ?? null;
  if (own) return own;

  // Ally-reported fallback: smart creatures only, fresh entries only, and
  // never the NPC's own (already missed above).
  if (!getSetting(SETTINGS.SHARED_TARGET_MEMORY)) return null;
  const shared = SHARED_LKP.get(targetId);
  if (!shared || shared.observerId === npcId) return null;
  if (_round() - shared.round > SHARED_LKP_TTL_ROUNDS) {
    SHARED_LKP.delete(targetId);
    return null;
  }
  const intScore = Number(npcToken?.actor?.system?.abilities?.int?.value ?? 0);
  if (intScore < 10) return null;

  log(`${npcToken?.name ?? npcId}: using ally-reported LKP for target ` +
      `(age ${_round() - shared.round} rounds).`);
  try {
    trace.annotate(npcToken?.actor?.id, {
      lkp: { source: "ally", ageRounds: _round() - shared.round },
    });
  } catch { /* trace off */ }
  return { row: shared.row, col: shared.col };
}

function invalidateLastKnownPosition(npcId, targetId) {
  LAST_KNOWN_POSITIONS.get(npcId)?.delete(targetId);
}

export function clearLastKnownPositions() {
  LAST_KNOWN_POSITIONS.clear();
  SHARED_LKP.clear();
}

export function expireLKPForHiddenTarget(targetId) {
  for (const [, targetMap] of LAST_KNOWN_POSITIONS) {
    targetMap.delete(targetId);
  }
  SHARED_LKP.delete(targetId);
}

// ─── Path cache ───────────────────────────────────────────────────────────────

export function clearPathCache() {
  // Nothing to clear — BFS is run fresh each turn and is bounded by budget.
  log("Path cache cleared.");
}

// ─── Path drawing ─────────────────────────────────────────────────────────────

function _drawPath(path) {
  try {
    if (!path?.length || path.length < 2) return;
    const line = new PIXI.Graphics();
    line.lineStyle(3, 0x00ff88, 0.6);

    const first = gridCellCenter(path[0].row, path[0].col);
    line.moveTo(first.x, first.y);

    for (const cell of path.slice(1)) {
      const p = gridCellCenter(cell.row, cell.col);
      line.lineTo(p.x, p.y);
    }

    canvas.controls.addChild(line);
    setTimeout(() => {
      if (line.parent) line.parent.removeChild(line);
      line.destroy();
    }, 2500);
  } catch (_) { /* cosmetic only */ }
}


// ─── Retreat movement export ────────────────────────────────────────────────

function getLivingPlayerThreatTokens(npcToken) {
  return canvas.tokens.placeables.filter(t => {
    if (!t || t.id === npcToken.id) return false;
    if (t.document?.hidden) return false;
    const actor = t.actor;
    if (!actor) return false;
    const hp = actor.system?.attributes?.hp;
    if (hp && Number(hp.value ?? 0) <= 0) return false;
    return actor.type === "character" || actor.hasPlayerOwner;
  });
}

function _threatStats(row, col, npcToken, threats) {
  if (!threats?.length) return { min: 0, avg: 0, nearest: null };
  let min = Infinity;
  let sum = 0;
  let nearest = null;
  for (const threat of threats) {
    const tg = tokenToGrid(threat);
    const d = rectDistanceCells(row, col, npcToken, tg.i, tg.j, threat);
    sum += d;
    if (d < min) {
      min = d;
      nearest = threat;
    }
  }
  return { min, avg: sum / threats.length, nearest };
}

function pickBestRetreatCell(reachMap, startRow, startCol, budgetCells, npcToken, threats) {
  const startStats = _threatStats(startRow, startCol, npcToken, threats);
  let best = null;
  let bestScore = -Infinity;
  let bestImproving = null;
  let bestImprovingScore = -Infinity;

  for (const [key, cost] of reachMap) {
    const [r, c] = key.split(",").map(Number);
    if (r === startRow && c === startCol) continue;
    if (cost > budgetCells + 0.001) continue;
    if (isGridOccupied(r, c, npcToken)) continue;

    const stats = _threatStats(r, c, npcToken, threats);
    // Primary: maximize distance from the nearest player character.
    // Secondary: maximize average distance from all player characters.
    // Tertiary: spend more of the movement pool so fleeing creatures do not shuffle.
    const score = (stats.min * 100) + (stats.avg * 10) + (cost * 0.25);

    if (score > bestScore) {
      bestScore = score;
      best = { destRow: r, destCol: c, cost, reachedGoal: false, stats };
    }

    if (stats.min > startStats.min + 0.05 && score > bestImprovingScore) {
      bestImprovingScore = score;
      bestImproving = { destRow: r, destCol: c, cost, reachedGoal: false, stats };
    }
  }

  return bestImproving ?? best;
}

async function executeRetreatPath(npcToken, path, budgetCells, canOpenDoors, round) {
  if (!path?.length || path.length < 2) {
    const pos = tokenToGrid(npcToken);
    return { movedAny: false, finalRow: pos.i, finalCol: pos.j, spentCells: 0 };
  }

  const remainingPath = _remainingPathFromCurrent(path, npcToken);
  const stepQueue = remainingPath.slice(1);
  let spentCells = 0;
  let movedAny = false;
  const visited = new Set([`${tokenToGrid(npcToken).i},${tokenToGrid(npcToken).j}`]);

  while (stepQueue.length > 0) {
    if (game.paused) {
      tmin(npcToken.name, round, -1, "RETREAT", "game paused mid-retreat");
      break;
    }

    const step = stepQueue.shift();
    const curPos = tokenToGrid(npcToken);
    if (step.row === curPos.i && step.col === curPos.j) continue;

    const stepCost = octile(curPos.i, curPos.j, step.row, step.col);
    if (spentCells + stepCost > budgetCells + 0.05) {
      tvbr(npcToken.name, round, -1, "RETREAT",
        `budget exhausted at [${step.row},${step.col}] — spent=${spentCells.toFixed(2)}c limit=${budgetCells.toFixed(2)}c`);
      break;
    }

    const fromCenter = tokenCenterAtGrid(curPos.i, curPos.j, npcToken);
    const toCenter = tokenCenterAtGrid(step.row, step.col, npcToken);

    let blocked = isStepBlocked(curPos.i, curPos.j, step.row, step.col, false, npcToken);
    if (blocked && canOpenDoors) {
      let opened = await openBlockingDoors(npcToken, fromCenter, toCenter);
      if (opened) blocked = isStepBlocked(curPos.i, curPos.j, step.row, step.col, false, npcToken);
      if (blocked) {
        opened = await openReachableDoors(npcToken, fromCenter, 0.5, toCenter);
        if (opened) blocked = isStepBlocked(curPos.i, curPos.j, step.row, step.col, false, npcToken);
      }
    }

    if (blocked) {
      tvbr(npcToken.name, round, -1, "RETREAT",
        `step [${step.row},${step.col}] wall-blocked from [${curPos.i},${curPos.j}] — stopping`);
      break;
    }

    const stepKey = `${step.row},${step.col}`;
    if (visited.has(stepKey)) {
      tvbr(npcToken.name, round, -1, "RETREAT", `loop guard stopped repeated step [${step.row},${step.col}]`);
      break;
    }

    if (isGridOccupied(step.row, step.col, npcToken)) {
      tvbr(npcToken.name, round, -1, "RETREAT", `step [${step.row},${step.col}] occupied — stopping`);
      break;
    }

    try {
      const destPx = gridToPixels(step.row, step.col);
      const stepDelay = movementStepDelayMs();
      const animateMove = stepDelay > 0;
      const updateData = { x: destPx.x, y: destPx.y };

      if (getSetting(SETTINGS.FACE_MOVEMENT)) {
        const rotation = rotationForMovement(fromCenter, toCenter);
        if (rotation !== null) updateData.rotation = rotation;
      }

      await npcToken.document.update(updateData, {
        animate: animateMove,
        animation: animateMove ? { duration: stepDelay } : undefined,
      });
      await delay(animateMove ? Math.max(25, stepDelay + 15) : 25);
    } catch (err) {
      log(`${npcToken.name}: Retreat step to [${step.row},${step.col}] failed: ${err.message}`, "warn");
      break;
    }

    spentCells += stepCost;
    movedAny = true;
    visited.add(stepKey);
    tvbr(npcToken.name, round, -1, "RETREAT", `stepped to [${step.row},${step.col}] — spent=${spentCells.toFixed(2)}c`);
  }

  const finalPos = tokenToGrid(npcToken);
  return { movedAny, finalRow: finalPos.i, finalCol: finalPos.j, spentCells };
}

/**
 * Flee from visible player characters. Used for Frightened inversion and
 * subtype/condition behavior such as cowardly bloodied NPCs.
 *
 * D&D 5e handling: if Dash is enabled, a fleeing NPC spends its action to Dash;
 * if it also has bonus-action Dash, it can Dash twice and use triple movement.
 */
export async function moveAwayFromPlayerCharacters(npcToken, options = {}) {
  if (!getSetting(SETTINGS.ENABLE_MOVEMENT)) {
    log(`${npcToken.name}: Movement disabled — retreat skipped.`);
    return { moved: false, usedDash: false, usedActionDash: false, retreated: false };
  }
  if (game.paused) {
    log("Game paused — retreat movement aborted.");
    return { moved: false, usedDash: false, usedActionDash: false, retreated: false };
  }

  const threats = getLivingPlayerThreatTokens(npcToken);
  if (threats.length === 0) {
    log(`${npcToken.name}: No player-character threats found for retreat.`);
    return { moved: false, usedDash: false, usedActionDash: false, retreated: false };
  }

  const round = _round();
  let speed = _getEffectiveSpeed(npcToken.actor, npcToken);
  // Condition modifier (e.g. Slow halves speed).
  if (options.speedMultiplier && options.speedMultiplier > 0) {
    speed = Math.max(0, speed * options.speedMultiplier);
  }
  const maxMoveSetting = getSetting(SETTINGS.MAX_MOVEMENT);
  const normalBudget = Math.min(speed, maxMoveSetting);
  const canDash = getSetting(SETTINGS.ENABLE_DASH);
  const canBonusDash = !!options.bonusActionDash;
  const moveBudget = canDash
    ? Math.min(speed * (canBonusDash ? 3 : 2), maxMoveSetting * (canBonusDash ? 3 : 2))
    : normalBudget;
  const usedDash = canDash && moveBudget > normalBudget;
  const usedActionDash = usedDash; // fleeing spends its action Dash when Dash is used
  const gridScale = canvas.grid.distance;
  const budgetCells = moveBudget / gridScale;
  const canOpenDoors = getSetting(SETTINGS.NPC_OPEN_DOORS);
  const npcGrid = tokenToGrid(npcToken);
  const startStats = _threatStats(npcGrid.i, npcGrid.j, npcToken, threats);

  if (normalBudget <= 0) {
    log(`${npcToken.name} has no movement available for retreat.`);
    return { moved: false, usedDash: false, usedActionDash: false, retreated: false };
  }

  // Cover-aware retreat: routing through ranged threats' fire lanes is
  // exactly what a fleeing NPC most wants to avoid. Same threatFn as
  // moveTowardTarget — no special-casing needed.
  const retreatThreatFn = buildThreatExposureFn(npcToken);

  const { cost: reachMap, parent } = reachableCells(
    npcGrid.i, npcGrid.j, budgetCells, npcToken, canOpenDoors,
    0, false, null, retreatThreatFn
  );
  tvbr(npcToken.name, round, -1, "RETREAT_BFS",
    `${reachMap.size} cells reachable within ${budgetCells.toFixed(2)}c retreat budget`);

  const chosen = pickBestRetreatCell(reachMap, npcGrid.i, npcGrid.j, budgetCells, npcToken, threats);
  if (!chosen) {
    log(`${npcToken.name}: No legal retreat cell found.`);
    return { moved: false, usedDash: false, usedActionDash: false, retreated: false };
  }

  logBudget(npcToken.name, round, -1, {
    speedFt: speed,
    normalFt: normalBudget,
    budgetFt: moveBudget,
    budgetCells,
    maxSteps: Math.floor(budgetCells),
    usedDash,
    spentCells: 0,
    projectedCost: chosen.cost ?? 0,
    reservedCells: 0,
  });

  logMicroPlan(npcToken.name, round, "RETREAT_DEST",
    `[${chosen.destRow},${chosen.destCol}] cost=${chosen.cost?.toFixed(2)}c ` +
    `nearestThreat=${chosen.stats?.min?.toFixed(2)}c (start ${startStats.min.toFixed(2)}c)` +
    (usedDash ? " [DASH]" : ""));

  const path = reconstructPath(parent, `${chosen.destRow},${chosen.destCol}`);
  if (getSetting(SETTINGS.DRAW_MOVEMENT_PATH)) _drawPath(path);

  const result = await executeRetreatPath(npcToken, path, budgetCells, canOpenDoors, round);
  const actual = tokenToGrid(npcToken);
  const finalStats = _threatStats(actual.i, actual.j, npcToken, threats);
  logPositionVerify(npcToken.name, round, -1,
    { row: chosen.destRow, col: chosen.destCol }, actual, npcGrid,
    actual.i === chosen.destRow && actual.j === chosen.destCol ? "success" : "partial"
  );
  tmin(npcToken.name, round, -1, "RETREAT_RESULT",
    `moved=${result.movedAny} startNearest=${startStats.min.toFixed(2)}c finalNearest=${finalStats.min.toFixed(2)}c`);

  return {
    moved: result.movedAny,
    usedDash,
    usedActionDash,
    retreated: true,
    startNearestCells: startStats.min,
    finalNearestCells: finalStats.min,
    nearestThreatName: finalStats.nearest?.name ?? startStats.nearest?.name ?? "Player Character",
  };
}

// ─── Skirmisher kite movement ─────────────────────────────────────────────────

/**
 * After attacking, a skirmisher uses remaining movement to put distance between
 * itself and any melee-range threats while staying within its weapon range.
 *
 * Priority:
 *  1. Use remaining movement (never Dash — kiting is the disengage not a charge).
 *  2. Prefer elevation changes if the creature has fly/burrow speed and the
 *     chosen ground cell keeps it cornered.
 *  3. Pick the cell that maximises distance from the nearest threat while keeping
 *     LOS to the target (so it can still attack next turn).
 *
 * @param {Token}  npcToken
 * @param {Token}  primaryTarget     The attack target this turn (maintained LOS preferred)
 * @param {number} spentMoveCells    Movement already spent this turn (in grid cells)
 * @param {number} kiteRangeFt       Preferred minimum distance from all melee threats (ft)
 * @param {object} elevationProfile  From getElevationProfile(), or null
 * @returns {{ moved: boolean, spentCells: number }}
 */
export async function moveSkirmisherKite(
  npcToken,
  primaryTarget,
  spentMoveCells,
  kiteRangeFt = 30,
  elevationProfile = null,
) {
  if (!getSetting(SETTINGS.ENABLE_MOVEMENT)) return { moved: false, spentCells: 0 };
  if (game.paused) return { moved: false, spentCells: 0 };

  const actor       = npcToken.actor;
  const gridScale   = canvas.grid.distance;
  const maxMoveSetting = getSetting(SETTINGS.MAX_MOVEMENT);

  // ── Determine which speed to use ───────────────────────────────────────────
  // Flying and burrowing skirmishers should use their special movement speed.
  let speed;
  if (elevationProfile?.canFly && !elevationProfile.forceGrounded) {
    speed = elevationProfile.flySpeed;
  } else if (elevationProfile?.canBurrow && !elevationProfile.forceGrounded) {
    speed = elevationProfile.burrowSpeed;
  } else {
    speed = Number(actor?.system?.attributes?.movement?.walk ?? 30);
  }

  const normalBudgetCells = Math.min(speed, maxMoveSetting) / gridScale;
  const remainingCells    = Math.max(0, normalBudgetCells - spentMoveCells);

  if (remainingCells < 0.5) {
    log(`${npcToken.name} [skirmisher kite]: no remaining movement (${remainingCells.toFixed(2)}c).`);
    return { moved: false, spentCells: 0 };
  }

  const round       = _round();
  const npcGrid     = tokenToGrid(npcToken);
  const canOpenDoors = getSetting(SETTINGS.NPC_OPEN_DOORS);
  const kiteRangeCells = kiteRangeFt / gridScale;

  // Gather melee-range threats (PC tokens within 10 ft)
  const threats = getLivingPlayerThreatTokens(npcToken).filter(t => {
    const tg = tokenToGrid(t);
    return rectDistanceCells(npcGrid.i, npcGrid.j, npcToken, tg.i, tg.j, t) <= 2;
  });

  if (threats.length === 0) {
    log(`${npcToken.name} [skirmisher kite]: no melee threats — no kite needed.`);
    return { moved: false, spentCells: 0 };
  }

  // BFS within remaining budget.
  // Cover-aware: kiting through cover is a signature skirmisher behaviour.
  const kiteThreatFn = buildThreatExposureFn(npcToken);
  const { cost: reachMap, parent } = reachableCells(
    npcGrid.i, npcGrid.j,
    remainingCells,
    npcToken,
    canOpenDoors,
    0,   // no congestion penalty during kite — just get away
    false,
    null,
    kiteThreatFn
  );

  const tgtGrid = primaryTarget ? tokenToGrid(primaryTarget) : null;

  // Score each reachable cell:
  //  + distance from nearest melee threat (primary — we want to increase this)
  //  - heavily penalise going OUT of weapon range of primary target
  //  + small bonus for LOS to primary target (stay threatening)
  let bestCell = null;
  let bestScore = -Infinity;

  for (const [key, cost] of reachMap) {
    if (cost < 0.1) continue; // skip start cell
    const [r, c] = key.split(",").map(Number);
    if (isGridOccupied(r, c, npcToken)) continue;

    const threatStats = _threatStats(r, c, npcToken, threats);
    if (threatStats.min <= 0) continue; // can't be on same cell as a threat

    // Only move to cells that actually increase distance from threats
    const startStats = _threatStats(npcGrid.i, npcGrid.j, npcToken, threats);
    if (threatStats.min <= startStats.min + 0.1) continue;

    // LOS to primary target — bonus for keeping a shot
    let losBonus = 0;
    if (tgtGrid && hasLineOfSightToToken(r, c, npcToken, primaryTarget)) {
      losBonus = 20;
      // Penalty if the cell puts us outside preferred kite range
      const distToTarget = rectDistanceCells(r, c, npcToken, tgtGrid.i, tgtGrid.j, primaryTarget);
      if (distToTarget > kiteRangeCells * 1.5) losBonus -= 30;
    }

    const score = (threatStats.min * 50) + (threatStats.avg * 10) + losBonus + (cost * 0.5);
    if (score > bestScore) {
      bestScore = score;
      bestCell  = { destRow: r, destCol: c, cost };
    }
  }

  if (!bestCell) {
    log(`${npcToken.name} [skirmisher kite]: no suitable kite cell found.`);
    return { moved: false, spentCells: 0 };
  }

  // For flying/burrowing skirmishers: also consider an elevation change if
  // the best ground cell still leaves them adjacent to a threat.
  if (elevationProfile && (elevationProfile.canFly || elevationProfile.canBurrow)) {
    const currentElev = Number(npcToken.document.elevation ?? 0);
    const threatStats = _threatStats(bestCell.destRow, bestCell.destCol, npcToken, threats);

    if (threatStats.min < kiteRangeCells * 0.5) {
      // Best ground cell still too close — use remaining budget for elevation change
      const elevCellsBudget = remainingCells - bestCell.cost;
      if (elevCellsBudget >= 1) {
        const elevChangeFt  = Math.floor(elevCellsBudget) * gridScale;
        const desiredElev   = elevationProfile.canFly
          ? currentElev + elevChangeFt
          : 0; // burrowers surface to escape
        log(`${npcToken.name} [skirmisher kite]: supplementing ground kite with elevation change (${currentElev}→${desiredElev}ft).`);
        try {
          await npcToken.document.update({ elevation: Math.max(0, desiredElev) });
        } catch (err) {
          log(`${npcToken.name}: kite elevation update failed: ${err.message}`, "warn");
        }
      }
    }
  }

  log(`${npcToken.name} [skirmisher kite]: retreating to [${bestCell.destRow},${bestCell.destCol}] (${(bestCell.cost * gridScale).toFixed(0)}ft remaining).`);

  const path = reconstructPath(parent, `${bestCell.destRow},${bestCell.destCol}`);
  const result = await executeRetreatPath(npcToken, path, remainingCells, canOpenDoors, round);

  return { moved: result.movedAny, spentCells: result.spentCells };
}

// ─── Main export ──────────────────────────────────────────────────────────────

/**
 * Post-action "scoot to cover" — move a high-INT ranged NPC out of LOS of the
 * threat it just attacked. Two purposes, both important:
 *
 *   1. Self-preservation. The NPC has spent its action; standing in the open
 *      where the target can see it is dumb. A wizard who casts Fire Bolt and
 *      then ducks behind a pillar is the canonical D&D tactic.
 *
 *   2. Lane-clearing. The observable symptom this addresses: a Mage repositions
 *      to its preferred range (e.g. 20ft), casts a spell, then stands there
 *      blocking the corridor through which melee allies need to reach the
 *      target. Subsequent bandit turns dash + action-dash and end up 15-20ft
 *      from the target with no LOS because their direct lane is blocked by
 *      the Mage. Moving the Mage behind cover frees the lane.
 *
 * Budget: half the NPC's walking speed. The NPC has already moved this turn,
 * and we don't have precise tracking of how much budget remains, so half-speed
 * is a conservative "reasonable amount of leftover movement" approximation.
 *
 * Caller is responsible for gating (INT threshold, archetype, etc.).
 *
 * @param {Token}  npcToken
 * @param {Token}  threatToken   the token whose LOS we want to break (usually the attack target)
 * @param {object} [options]
 * @param {boolean} [options.canOpenDoors=false]
 * @returns {Promise<{moved: boolean, finalDistanceFt: number|null, takenCover: boolean}>}
 */
export async function scootToCover(npcToken, threatToken, options = {}) {
  if (!getSetting(SETTINGS.ENABLE_MOVEMENT)) return { moved: false, finalDistanceFt: null, takenCover: false };
  // Honour the AI v1 scoot-to-cover toggle — lets GMs A/B test.
  let scootEnabled = true;
  try { scootEnabled = getSetting(SETTINGS.AI_SCOOT_TO_COVER) !== false; }
  catch { scootEnabled = true; }
  if (!scootEnabled) return { moved: false, finalDistanceFt: null, takenCover: false };
  if (game.paused) return { moved: false, finalDistanceFt: null, takenCover: false };
  if (!npcToken?.actor || !threatToken) return { moved: false, finalDistanceFt: null, takenCover: false };

  const npcGrid = tokenToGrid(npcToken);
  const threatGrid = tokenToGrid(threatToken);
  if (!npcGrid || !threatGrid) return { moved: false, finalDistanceFt: null, takenCover: false };

  // If the threat already cannot see us, we have cover — nothing to do.
  if (!hasLineOfSight(npcGrid.i, npcGrid.j, threatGrid.i, threatGrid.j)) {
    return { moved: false, finalDistanceFt: distanceBetweenTokens(npcToken, threatToken), takenCover: true };
  }

  const gridScale  = canvas.grid.distance ?? 5;
  const speedFt    = Number(npcToken.actor.system?.attributes?.movement?.walk ?? 30);
  // Half-speed budget. This is the conservative "leftover movement" estimate
  // — the NPC has already done its primary move this turn, so we don't want
  // to grant a full second move. Half-speed is a reasonable mid-point.
  const budgetCells = Math.max(1, Math.floor((speedFt / 2) / gridScale));

  const canOpenDoors = !!options.canOpenDoors;
  const round = game.combat?.round ?? -1;

  // BFS without threat-exposure modifier — we're scoring cells by LOS to the
  // SPECIFIC threat, not by general exposure.
  const { cost: reachMap, parent } = reachableCells(
    npcGrid.i, npcGrid.j, budgetCells, npcToken, canOpenDoors,
    0, false, null, null
  );

  const startKey = `${npcGrid.i},${npcGrid.j}`;
  let bestCell = null;
  let bestScore = -Infinity;

  for (const [key, cost] of reachMap) {
    if (key === startKey) continue;
    const [r, c] = key.split(',').map(Number);

    // Primary filter: cell must hide us from the threat.
    if (hasLineOfSight(r, c, threatGrid.i, threatGrid.j)) continue;

    // Score: prefer cells farther from the threat (safer) with a small
    // tiebreak penalty for path length (don't burn movement for marginal gain).
    const dr = r - threatGrid.i;
    const dc = c - threatGrid.j;
    const distFromThreat = Math.hypot(dr, dc);
    const score = distFromThreat - cost * 0.15;

    if (score > bestScore) {
      bestScore = score;
      bestCell  = { r, c, cost };
    }
  }

  if (!bestCell) {
    log(`${npcToken.name} [scoot]: no covered cell within ${budgetCells} cells. Staying put.`);
    return { moved: false, finalDistanceFt: distanceBetweenTokens(npcToken, threatToken), takenCover: false };
  }

  log(`${npcToken.name} [scoot]: moving to cover at [${bestCell.r},${bestCell.c}] (${(bestCell.cost * gridScale).toFixed(0)}ft).`);

  const path = reconstructPath(parent, `${bestCell.r},${bestCell.c}`);
  await executeRetreatPath(npcToken, path, budgetCells, canOpenDoors, round);

  const finalDist = distanceBetweenTokens(npcToken, threatToken);
  // Re-check LOS after the move — if walls didn't actually block, report so.
  const finalGrid = tokenToGrid(npcToken);
  const tookCover = finalGrid
    ? !hasLineOfSight(finalGrid.i, finalGrid.j, threatGrid.i, threatGrid.j)
    : false;

  return { moved: true, finalDistanceFt: finalDist, takenCover: tookCover };
}

export async function moveTowardTarget(npcToken, targetToken, attackRange, attacks = [], options = {}) {
  if (!getSetting(SETTINGS.ENABLE_MOVEMENT)) {
    const npcG = tokenToGrid(npcToken);
    const tgtG = tokenToGrid(targetToken);
    const losOk = hasLineOfSightToToken(npcG.i, npcG.j, npcToken, targetToken);
    if (!losOk) log(`${npcToken.name}: Movement disabled — no LOS from current position.`);
    return { moved: false, usedDash: false, usedActionDash: false, attackPositionValid: losOk };
  }

  if (game.paused) {
    log("Game paused — movement aborted.");
    return { moved: false, usedDash: false, usedActionDash: false, attackPositionValid: false };
  }

  const currentDist = distanceBetweenTokens(npcToken, targetToken);
  const round = _round();

  logTarget(npcToken.name, round, targetToken.name, currentDist, attacks[0]?.name);

  if (currentDist <= attackRange) {
    const npcGr = tokenToGrid(npcToken);
    const tgtGr = tokenToGrid(targetToken);
    const losOk = hasLineOfSightToToken(npcGr.i, npcGr.j, npcToken, targetToken);
    log(`${npcToken.name} already in range (${Math.round(currentDist)}ft). LOS: ${losOk}.`);
    if (losOk) {
      setLastKnownPosition(npcToken.id, targetToken.id, tgtGr.i, tgtGr.j);
      await faceTargetIfEnabled(npcToken, targetToken);
      return { moved: false, usedDash: false, usedActionDash: false, attackPositionValid: true };
    }
    log(`${npcToken.name}: Target is in range but attack is blocked by a wall — pathfinding to a legal LOS position.`);
  }

  // ── Movement budget ──────────────────────────────────────────────────────
  // Swim/climb aware: a crocodile in the river budgets from its swim speed.
  const speed          = _getEffectiveSpeed(npcToken.actor, npcToken) *
                         (options.movementHints?.speedMultiplier > 0 ? options.movementHints.speedMultiplier : 1);
  const maxMoveSetting = getSetting(SETTINGS.MAX_MOVEMENT);
  const normalBudget   = Math.min(speed, maxMoveSetting);
  const dashBudget     = Math.min(speed * 2, maxMoveSetting * 2);
  const doubleDashBudget = Math.min(speed * 3, maxMoveSetting * 3);
  // D&D 5e: Dash adds extra movement equal to speed. A creature with
  // bonus-action Dash may Dash once as a bonus action and still attack, or Dash
  // again as its action for a triple-move turn with no attack.
  const canDash        = getSetting(SETTINGS.ENABLE_DASH);
  const canBonusDash   = !!options.bonusActionDash;

  if (normalBudget <= 0) {
    log(`${npcToken.name} has no movement available.`);
    return { moved: false, usedDash: false, usedActionDash: false, attackPositionValid: false };
  }

  const gridScale    = canvas.grid.distance;
  const gridSize     = canvas.grid.size;
  const npcGrid      = tokenToGrid(npcToken);
  const tgtGrid      = tokenToGrid(targetToken);
  const npcCenter    = tokenCenterAtGrid(npcGrid.i, npcGrid.j, npcToken);
  const canOpenDoors = getSetting(SETTINGS.NPC_OPEN_DOORS);

  // ── Apply movement hints from spell-ai.js ────────────────────────────────
  // Spell selection runs before movement for spellcastingFocus archetypes and
  // passes hints that override how goal cells are computed.
  const hints = options.movementHints ?? {};

  // stayInPlace: self-buff / BUFF_SELF spell — don't move, just cast
  if (hints.stayInPlace) {
    log(`${npcToken.name}: movementHints.stayInPlace — skipping movement for self-buff.`);
    const losOk = hasLineOfSightToToken(npcGrid.i, npcGrid.j, npcToken, targetToken);
    return { moved: false, usedDash: false, usedActionDash: false, attackPositionValid: losOk };
  }

  // Effective attack range — overridden if spell wants to keep distance
  let effectiveAttackRange = attackRange;
  if (hints.stayAtRange != null) {
    effectiveAttackRange = hints.stayAtRange;
    log(`${npcToken.name}: movementHints.stayAtRange=${hints.stayAtRange}ft — adjusting positioning.`);
  }

  // moveTowardPoint: move toward an AOE origin rather than the target token
  let effectiveTargetGrid = tgtGrid;
  if (hints.moveTowardPoint) {
    const px = hints.moveTowardPoint;
    effectiveTargetGrid = {
      i: Math.floor(px.y / gridSize),
      j: Math.floor(px.x / gridSize),
    };
    log(`${npcToken.name}: movementHints.moveTowardPoint=(${px.x.toFixed(0)},${px.y.toFixed(0)}) → grid(${effectiveTargetGrid.i},${effectiveTargetGrid.j})`);
  }

  const isMelee = effectiveAttackRange <= 10 && !hints.dontCloseToMelee;

  // ── Build goal cells ─────────────────────────────────────────────────────
  let goalCells;
  if (isMelee && !hints.stayAtRange) {
    goalCells = getMeleeGoalCells(npcToken, targetToken);
    if (goalCells.length === 0) {
      log(`${npcToken.name}: No valid adjacent cells around target. Staying put.`);
      return { moved: false, usedDash: false, usedActionDash: false, attackPositionValid: false };
    }
  } else {
    const rangeCells = Math.ceil(effectiveAttackRange / gridScale);
    // For AOE-origin movement we need a token-shaped object pointing at the
    // AOE center, not the real target. Previously this was built with a
    // spread of the Token instance, which copies own-enumerable props only —
    // not Token prototype getters like .center, and not the document overrides
    // we wanted (the spread document inherited the real target's width/height).
    //
    // Build a minimal explicit shape with the exact fields downstream code
    // reads: document.x/y (tokenToGrid), document.width/height (tokenGridSize),
    // and a center for hasLineOfSightToToken. Treat the synthetic origin as a
    // 1×1 footprint at the AOE center.
    const syntheticTarget = hints.moveTowardPoint ? {
      document: {
        x:       effectiveTargetGrid.j * gridSize,
        y:       effectiveTargetGrid.i * gridSize,
        width:   1,
        height:  1,
        elevation: targetToken.document?.elevation ?? 0,
        hidden:    false,
        defeated:  false,
      },
      // Some helpers (hasLineOfSightToToken via tokenSamplePoints) only use
      // grid coords + size, so .center isn't strictly required — but exposing
      // it makes the object safer if other helpers are added later.
      center: {
        x: effectiveTargetGrid.j * gridSize + gridSize / 2,
        y: effectiveTargetGrid.i * gridSize + gridSize / 2,
      },
    } : targetToken;
    goalCells = getRangedGoalCells(npcToken, syntheticTarget, rangeCells);
    if (goalCells.length === 0) {
      log(`${npcToken.name}: No valid ranged goal cells. Staying put.`);
      return { moved: false, usedDash: false, usedActionDash: false, attackPositionValid: false };
    }
  }

  // ── Phase 1: BFS with normal budget ──────────────────────────────────────
  const normalBudgetCells     = normalBudget / gridScale;
  const dashBudgetCells       = dashBudget / gridScale;
  const doubleDashBudgetCells = doubleDashBudget / gridScale;
  let plannedExecutionPath    = null;

  // ── Build movement intent from cognitive profile ─────────────────────────
  // cognitiveProfile is passed in via options from automation.js.
  const cogProfile = options.cognitiveProfile ?? null;
  const intentSettings = {
    movementImperfection: getSetting(SETTINGS.MOVEMENT_IMPERFECTION) ?? true,
    passThroughFallen:    getSetting(SETTINGS.PASS_THROUGH_FALLEN)    ?? true,
  };
  const intent = cogProfile
    ? buildMovementIntent(npcToken, cogProfile, intentSettings)
    : {
        useDirectVector:           false,
        allowReroute:              true,
        searchMultiplier:          1.0,
        congestionPenalty:         0,
        allowPassThroughDeadProne: intentSettings.passThroughFallen,
        reevalInterval:            1,
      };

  // Update stuck state so reevaluation logic is accurate
  _updateStuckState(npcToken.id, npcGrid.i, npcGrid.j);
  const canReevaluate = _shouldReevaluatePath(npcToken.id, intent.reevalInterval);

  // Build threat-exposure cost function once per moveTowardTarget call.
  // Returns null when AI_COVER_AWARE_PATHING is off or there are no ranged
  // threats — in which case BFS behaviour is identical to v0.10.
  //
  // CRITICAL: exclude targetToken from the threat list. moveTowardTarget is
  // by definition "I'm going to engage this token" — its LOS to me is not a
  // threat to avoid, it's the engagement requirement. Without this exclusion,
  // melee NPCs systematically avoid melee range because every adjacent cell
  // is "exposed" to the target. See v0.12 log analysis: 8/10 turns ended
  // with attackOK=false because BFS picked corners away from the target.
  const threatFn = buildThreatExposureFn(npcToken, targetToken?.id ?? null);

  // ── Single-flood tiering (Task 1, PATHFIND_SINGLE_FLOOD) ─────────────────
  // The dash and double-dash floods are strict supersets of the normal flood:
  // Dijkstra costs/parents for cells within a smaller budget are identical
  // whether the flood stops there or continues, so one flood to the largest
  // needed budget can be FILTERED down to the smaller tiers instead of
  // re-flooding (each flood re-runs the expensive wall/occupancy probes).
  //
  // Heuristic to avoid over-flooding when the goal is close: only flood
  // straight to the max tier when no goal cell can possibly be inside the
  // requested budget (min octile > budget). Worst case is 2 floods; the old
  // path was up to 3.
  const _singleFlood = getSetting(SETTINGS.PATHFIND_SINGLE_FLOOD);
  const _maxTierCells = canDash
    ? (canBonusDash ? doubleDashBudgetCells : dashBudgetCells)
    : normalBudgetCells;
  let _maxFlood = null;
  const _floodStats = { floods: 0, filtered: 0, ms: 0 };

  const _floodTo = (budgetCells) => {
    const t0 = performance.now();
    const result = reachableCells(
      npcGrid.i, npcGrid.j, budgetCells, npcToken, canOpenDoors,
      intent.congestionPenalty, intent.allowPassThroughDeadProne,
      null, threatFn
    );
    _floodStats.floods++;
    _floodStats.ms += performance.now() - t0;
    return result;
  };

  const _getTier = (budgetCells) => {
    if (!_singleFlood) return _floodTo(budgetCells);
    if (budgetCells >= _maxTierCells - 0.001) {
      if (!_maxFlood) _maxFlood = _floodTo(_maxTierCells);
      return _maxFlood;
    }
    if (!_maxFlood) {
      // Smaller tier requested first. If every goal is provably beyond this
      // budget, skip it and flood the max tier once.
      const minGoalDist = goalCells.length
        ? Math.min(...goalCells.map(g => octile(npcGrid.i, npcGrid.j, g.row, g.col)))
        : Infinity;
      if (!(minGoalDist > budgetCells + 0.001 && canDash)) {
        return _floodTo(budgetCells); // goal may be near — cheap direct flood
      }
      _maxFlood = _floodTo(_maxTierCells);
    }
    _floodStats.filtered++;
    return _filterReachTier(_maxFlood, budgetCells);
  };

  const { cost: normalReachMap, parent: normalReachParent } = _getTier(normalBudgetCells);

  tvbr(npcToken.name, round, -1, "BFS",
    `${normalReachMap.size} cells reachable within ${normalBudgetCells.toFixed(2)}c normal budget ` +
    `[directVec=${intent.useDirectVector} reroute=${intent.allowReroute} ` +
    `congPenalty=${intent.congestionPenalty.toFixed(1)} passThrough=${intent.allowPassThroughDeadProne}]`);

  // ── Flanking preference (ENABLE_FLANKING_MOVEMENT) ───────────────────────
  // For pack/focus-fire archetypes, try the flanking cell FIRST against the
  // same reach map. The flank cell is just an injected goal candidate: if it
  // is unreachable this turn, selection falls through to the normal goal set
  // with zero behavioral change.
  // Smart-partial context (Task 2): ranged NPCs keep LOS on a stranded
  // advance (they may still act later); melee that cannot reach prefers cover.
  const _partialOpts = {
    threatFn,
    npcToken,
    targetToken,
    preferLOS: isMelee ? "break" : "keep",
  };

  let normalChosen = null;
  if (isMelee && !hints.stayAtRange) {
    const flankGoals = _maybeFlankingGoals(npcToken, targetToken, goalCells, normalBudget);
    if (flankGoals) {
      const flankChoice = pickBestReachable(normalReachMap, flankGoals,
        npcGrid.i, npcGrid.j, tgtGrid.i, tgtGrid.j, npcToken.name, _partialOpts);
      if (flankChoice?.reachedGoal) {
        normalChosen = flankChoice;
        log(`${npcToken.name}: flanking destination [${flankChoice.destRow},${flankChoice.destCol}] reachable — taking the flank.`);
      }
    }
  }
  if (!normalChosen) {
    normalChosen = pickBestReachable(normalReachMap, goalCells, npcGrid.i, npcGrid.j, tgtGrid.i, tgtGrid.j, npcToken.name, _partialOpts);
  }
  const normalReachedGoal = normalChosen?.reachedGoal ?? false;

  // ── Phase 2: evaluate Dash budgets if normal move cannot reach attack pos ─
  let usedDash       = false;
  let usedActionDash = false;
  let dashMode       = "none"; // none | bonus | action | double
  let reachMap       = normalReachMap;
  let reachParent    = normalReachParent;
  let chosen         = normalChosen;

  function chooseReachableGoal(map) {
    let best = null;
    for (const g of goalCells) {
      const key = `${g.row},${g.col}`;
      const cost = map.get(key);
      if (cost === undefined) continue;
      if (!best || cost < best.cost) best = { destRow: g.row, destCol: g.col, cost, reachedGoal: true };
    }
    return best;
  }

  function choosePartial(map) {
    return pickBestReachable(map, goalCells, npcGrid.i, npcGrid.j, tgtGrid.i, tgtGrid.j, npcToken.name, _partialOpts);
  }

  let dashReachMap = null;
  let dashReachParent = null;
  let dashChosen = null;
  let dashPartial = null;
  let doubleReachMap = null;
  let doubleReachParent = null;
  let doubleChosen = null;
  let doublePartial = null;

  if (canDash && !normalReachedGoal) {
    ({ cost: dashReachMap, parent: dashReachParent } = _getTier(dashBudgetCells));

    tvbr(npcToken.name, round, -1, "BFS",
      `${dashReachMap.size} cells reachable within ${dashBudgetCells.toFixed(2)}c dash budget`);

    dashChosen = chooseReachableGoal(dashReachMap);
    dashPartial = choosePartial(dashReachMap);

    if (canBonusDash) {
      ({ cost: doubleReachMap, parent: doubleReachParent } = _getTier(doubleDashBudgetCells));

      tvbr(npcToken.name, round, -1, "BFS",
        `${doubleReachMap.size} cells reachable within ${doubleDashBudgetCells.toFixed(2)}c double-dash budget`);

      doubleChosen = chooseReachableGoal(doubleReachMap);
      doublePartial = choosePartial(doubleReachMap);
    }

    if (canBonusDash && dashChosen) {
      usedDash = true;
      usedActionDash = false;
      dashMode = "bonus";
      reachMap = dashReachMap;
      reachParent = dashReachParent;
      chosen = dashChosen;
      log(`${npcToken.name} using bonus-action Dash (budget: ${dashBudget}ft) — attack position unlocked.`);
      logDash(npcToken.name, round, true, "bonus-action dash unlocks attack position");
    } else if (dashChosen && _actionDashWouldWasteAction(npcToken, targetToken)) {
      // The NPC could already act from where it stands (a ranged attack or spell
      // reaches the target with LOS). Spending the ACTION on a Dash to close
      // distance would forfeit that action for nothing. Fall through to the
      // normal (non-dash) move so the action survives.
      log(`${npcToken.name}: declining action Dash — it can already attack from here and would forfeit its action.`);
      logDash(npcToken.name, round, false, "action dash declined — preserves a usable action");
    } else if (dashChosen) {
      usedDash = true;
      usedActionDash = true;
      dashMode = "action";
      reachMap = dashReachMap;
      reachParent = dashReachParent;
      chosen = dashChosen;
      log(`${npcToken.name} using action Dash (budget: ${dashBudget}ft) — reaches position but spends action.`);
      logDash(npcToken.name, round, true, "action dash unlocks attack position");
    } else if (canBonusDash && doubleChosen) {
      usedDash = true;
      usedActionDash = true;
      dashMode = "double";
      reachMap = doubleReachMap;
      reachParent = doubleReachParent;
      chosen = doubleChosen;
      log(`${npcToken.name} using bonus-action Dash + action Dash (budget: ${doubleDashBudget}ft) — reaches position but spends action.`);
      logDash(npcToken.name, round, true, "double dash unlocks attack position");
    } else {
      const options = [
        { label: "normal", map: normalReachMap, parent: normalReachParent, choice: normalChosen, dash: false, actionDash: false, budget: normalBudget },
      ];
      if (dashPartial) options.push({
        label: canBonusDash ? "bonus" : "action",
        map: dashReachMap, parent: dashReachParent, choice: dashPartial,
        dash: true, actionDash: !canBonusDash, budget: dashBudget,
      });
      if (canBonusDash && doublePartial) options.push({
        label: "double", map: doubleReachMap, parent: doubleReachParent, choice: doublePartial,
        dash: true, actionDash: true, budget: doubleDashBudget,
      });

      let best = options.find(o => o.choice) ?? null;
      for (const opt of options) {
        if (!opt.choice) continue;
        const optDist = octile(opt.choice.destRow, opt.choice.destCol, tgtGrid.i, tgtGrid.j);
        const bestDist = best?.choice ? octile(best.choice.destRow, best.choice.destCol, tgtGrid.i, tgtGrid.j) : Infinity;
        if (optDist < bestDist - 0.001 ||
            (Math.abs(optDist - bestDist) <= 0.001 && (opt.choice.cost ?? 0) > (best.choice.cost ?? 0))) {
          best = opt;
        }
      }

      if (best && best.label !== "normal") {
        usedDash = best.dash;
        usedActionDash = best.actionDash;
        dashMode = best.label;
        reachMap = best.map;
        reachParent = best.parent;
        chosen = best.choice;
        log(`${npcToken.name} using ${best.label} Dash movement (budget: ${best.budget}ft) — advances closer than normal move.`);
        logDash(npcToken.name, round, true, `${best.label} dash advances closer to target`);
      } else {
        logDash(npcToken.name, round, false, "dash offers no improvement over normal move");
      }
    }
  } else if (!canDash) {
    logDash(npcToken.name, round, false, "dash disabled");
  } else {
    logDash(npcToken.name, round, false, "normal move reaches attack position");
  }

  // ── Natural route overlay ────────────────────────────────────────────────
  // The bounded BFS above is excellent for legal movement, but when a wall is
  // between NPC and target it can still choose the geometrically closest square
  // and look like the NPC is bonking its head on the wall. This layer searches
  // farther ahead, finds the route around the obstacle, then moves only as far
  // as this turn's budget allows.
  //
  // For low-INT/instinctive creatures (useDirectVector=true), we skip A* and
  // just pick the nearest-geometry goal. They won't smartly route around walls.
  // They'll press forward and stop at the wall. That's intentional.
  if (getSetting(SETTINGS.NATURAL_MOVEMENT) && (!chosen || !chosen.reachedGoal)) {
    const goalSetForRoute = new Set(goalCells.map(g => _goalKey(g.row, g.col)));
    const attackRangeCells = Math.ceil(attackRange / gridScale);
    const searchBudgetForRoute = canDash
      ? (canBonusDash ? doubleDashBudgetCells : dashBudgetCells)
      : normalBudgetCells;
    const searchLimitCells = _routeSearchLimitCells(
      searchBudgetForRoute,
      attackRangeCells,
      isMelee
    );

    let route = null;

    if (intent.useDirectVector && !intent.allowReroute && canReevaluate !== false) {
      // Direct-vector creatures: pick nearest goal cell geometrically, no A*.
      // They crowd against walls, bunch up, and fail to navigate tactically.
      const directGoal = pickDirectVectorGoal(goalCells, tgtGrid.i, tgtGrid.j);
      if (directGoal) {
        log(`${npcToken.name}: Direct-vector movement toward [${directGoal.row},${directGoal.col}] (no rerouting).`);
        tvbr(npcToken.name, round, -1, "DIRECT_VECTOR",
          `goal=[${directGoal.row},${directGoal.col}] stuck=${_getStuckState(npcToken.id).stuckRounds}`);
        // Use the BFS reachability map already computed to get as close as possible
        const directChosen = pickBestReachable(
          normalReachMap, [directGoal],
          npcGrid.i, npcGrid.j, tgtGrid.i, tgtGrid.j, npcToken.name
        );
        if (directChosen && (!chosen || directChosen.cost < (chosen.cost ?? Infinity))) {
          chosen = directChosen;
          plannedExecutionPath = null;
        }
      }
    } else if (!intent.useDirectVector || intent.allowReroute) {
      // Normal or rerouting creatures: run A* with the search cap scaled by INT.
      const cappedSearchLimit = searchLimitCells * (intent.searchMultiplier ?? 1.0);

      route = findNaturalRoute(
        npcGrid.i, npcGrid.j,
        goalCells,
        tgtGrid.i, tgtGrid.j,
        cappedSearchLimit,
        npcToken,
        canOpenDoors
      );

    if (route?.path?.length > 1) {
      const normalPoint = _pathPointAtBudget(route.path, normalBudgetCells);
      let routePoint = normalPoint;
      let routeUsesDash = false;

      const normalReachedRouteGoal = normalPoint && goalSetForRoute.has(_goalKey(normalPoint.row, normalPoint.col));

      let routeUsesActionDash = false;
      let routeDashMode = "none";
      if (canDash && !normalReachedRouteGoal) {
        const dashPoint = _pathPointAtBudget(route.path, dashBudgetCells);
        const dashReachedGoal = dashPoint && goalSetForRoute.has(_goalKey(dashPoint.row, dashPoint.col));
        if (canBonusDash && dashPoint && dashPoint.index > (normalPoint?.index ?? 0)) {
          routePoint = dashPoint;
          routeUsesDash = true;
          routeUsesActionDash = false;
          routeDashMode = "bonus";
        } else if (dashPoint && dashPoint.index > (normalPoint?.index ?? 0)) {
          routePoint = dashPoint;
          routeUsesDash = true;
          routeUsesActionDash = true;
          routeDashMode = "action";
        }

        if (canBonusDash && !dashReachedGoal) {
          const doublePoint = _pathPointAtBudget(route.path, doubleDashBudgetCells);
          if (doublePoint && doublePoint.index > (routePoint?.index ?? 0)) {
            routePoint = doublePoint;
            routeUsesDash = true;
            routeUsesActionDash = true;
            routeDashMode = "double";
          }
        }
      }

      if (routePoint && routePoint.index > 0) {
        const routeReachedGoal = goalSetForRoute.has(_goalKey(routePoint.row, routePoint.col));
        const prior = chosen ? { row: chosen.destRow, col: chosen.destCol } : null;

        chosen = {
          destRow: routePoint.row,
          destCol: routePoint.col,
          cost: routePoint.spentCells,
          reachedGoal: routeReachedGoal,
        };
        usedDash = routeUsesDash;
        usedActionDash = routeUsesActionDash;
        dashMode = routeDashMode;
        plannedExecutionPath = _slicePathToDest(route.path, routePoint.row, routePoint.col);

        logReplan(
          npcToken.name,
          round,
          -1,
          `natural route around obstacles; searched ${route.explored} cells, route cost ${route.cost.toFixed(2)}c, turns ${route.turns}`,
          prior,
          { row: chosen.destRow, col: chosen.destCol },
          true
        );
      }
    }
    } // end else (A* branch)
  }

  const budgetCells = dashMode === "double" ? doubleDashBudgetCells : (usedDash ? dashBudgetCells : normalBudgetCells);
  const moveBudget  = dashMode === "double" ? doubleDashBudget : (usedDash ? dashBudget : normalBudget);

  logBudget(npcToken.name, round, -1, {
    speedFt:       speed,
    normalFt:      normalBudget,
    budgetFt:      moveBudget,
    budgetCells:   budgetCells,
    maxSteps:      Math.floor(budgetCells),
    usedDash:      usedDash,
    spentCells:    0,
    projectedCost: 0,
    reservedCells: 0,
  });

  let usingMemory = false;

  // ── Last-known-position fallback ──────────────────────────────────────────
  if (!chosen || !chosen.reachedGoal) {
    const lkp = getLastKnownPosition(npcToken.id, targetToken.id, npcToken);

    if (lkp) {
      const alreadyThere = npcGrid.i === lkp.row && npcGrid.j === lkp.col;

      if (alreadyThere) {
        // Arrived at LKP last turn, still no LOS. Spread-search nearby cells.
        log(`${npcToken.name}: Already at LKP [${lkp.row},${lkp.col}] with no LOS — spread searching.`);
        logMicroPlan(npcToken.name, round, "LKP_ARRIVED", `at [${lkp.row},${lkp.col}] — no LOS, spread searching`);
        invalidateLastKnownPosition(npcToken.id, targetToken.id);

        const spreadRadius = Math.max(1, Math.floor(budgetCells / 2));
        const spreadCells  = [];
        for (let dr = -spreadRadius; dr <= spreadRadius; dr++) {
          for (let dc = -spreadRadius; dc <= spreadRadius; dc++) {
            const sr = lkp.row + dr;
            const sc = lkp.col + dc;
            if (!isInBoundsForToken(sr, sc, npcToken) || isGridOccupied(sr, sc, npcToken)) continue;
            const key = `${sr},${sc}`;
            if (reachMap.has(key) && hasLineOfSightToToken(sr, sc, npcToken, targetToken)) {
              spreadCells.push({ row: sr, col: sc });
            }
          }
        }
        if (spreadCells.length > 0) {
          // Pick spread cell with best LOS to target (use octile to target as proxy)
          const best = spreadCells.reduce((a, b) =>
            octile(a.row, a.col, tgtGrid.i, tgtGrid.j) <= octile(b.row, b.col, tgtGrid.i, tgtGrid.j) ? a : b
          );
          chosen = { destRow: best.row, destCol: best.col, cost: reachMap.get(`${best.row},${best.col}`), reachedGoal: true };
          plannedExecutionPath = null;
          usingMemory = true;
        } else {
          log(`${npcToken.name}: Spread search found no LOS cell. Target not locatable — ending movement.`);
          return { moved: false, usedDash: false, usedActionDash: false, attackPositionValid: false };
        }
      } else {
        // Advance toward the LKP cell.
        const lkpKey  = `${lkp.row},${lkp.col}`;
        const lkpCost = reachMap.get(lkpKey);

        if (lkpCost !== undefined) {
          // LKP reachable this turn — only use it if it's closer to the target
          // than the partial advance already found. If chosen already advances
          // toward the target better, don't let the LKP pull the NPC away.
          const lkpDist     = octile(lkp.row, lkp.col, tgtGrid.i, tgtGrid.j);
          const partialDist  = chosen ? octile(chosen.destRow, chosen.destCol, tgtGrid.i, tgtGrid.j) : Infinity;
          if (lkpDist < partialDist) {
            log(`${npcToken.name}: No direct LOS path — pursuing LKP [${lkp.row},${lkp.col}].`);
            logReplan(npcToken.name, round, -1, "LOS lost — pursuing LKP", null, lkp, true);
            chosen = { destRow: lkp.row, destCol: lkp.col, cost: lkpCost, reachedGoal: false };
            plannedExecutionPath = null;
            usingMemory = true;
          } else {
            // Partial advance is already closer — keep it. Do not label this
            // as memory movement, because the LKP did not actually control
            // the chosen destination.
            log(`${npcToken.name}: LKP [${lkp.row},${lkp.col}] is farther than partial advance — using partial.`);
            logMicroPlan(npcToken.name, round, "LKP_SKIP", `LKP octile=${lkpDist.toFixed(2)} >= partial octile=${partialDist.toFixed(2)} — keeping partial advance`);
          }
        } else if (chosen) {
          // LKP not reachable this turn — use the partial advance (chosen is already set)
          log(`${npcToken.name}: Advancing toward LKP — partial move to [${chosen.destRow},${chosen.destCol}].`);
          logMicroPlan(npcToken.name, round, "LKP_PARTIAL", `LKP [${lkp.row},${lkp.col}] unreachable — partial to [${chosen.destRow},${chosen.destCol}]`);
          usingMemory = true;
        }
      }
    }
  }

  // If no attack position is reachable, avoid tiny "confused" partial moves when
  // a fuller legal advance is available. This keeps D&D 5e spending exact while
  // nudging NPCs to commit to forward progress instead of shuffling near a wall.
  if (chosen && !chosen.reachedGoal && (chosen.cost ?? 0) < budgetCells * 0.55) {
    const committed = pickCommittedPartial(
      reachMap,
      npcGrid.i, npcGrid.j,
      tgtGrid.i, tgtGrid.j,
      budgetCells,
      npcToken
    );
    if (committed && committed.cost > (chosen.cost ?? 0) + 0.25) {
      logMicroPlan(
        npcToken.name, round,
        "PARTIAL_EXTEND",
        `[${chosen.destRow},${chosen.destCol}] ${chosen.cost?.toFixed(2)}c → [${committed.destRow},${committed.destCol}] ${committed.cost.toFixed(2)}c`
      );
      chosen = committed;
      plannedExecutionPath = null;
    }
  }

  // Pathfind observability (Task 1): one annotation per engage-move call.
  try {
    trace.annotate(npcToken.actor?.id, {
      pathfind: {
        floods:   _floodStats.floods,
        filtered: _floodStats.filtered,
        ms:       Number(_floodStats.ms.toFixed(1)),
        cells:    normalReachMap.size,
        singleFlood: _singleFlood,
      },
    });
  } catch { /* trace off */ }

  if (!chosen) {
    log(`${npcToken.name}: No reachable position found. Ending movement.`);
    return { moved: false, usedDash: false, usedActionDash: false, attackPositionValid: false };
  }

  // Don't move if the NPC is already at the chosen cell (zero-distance move).
  if (chosen.destRow === npcGrid.i && chosen.destCol === npcGrid.j) {
    log(`${npcToken.name}: Already at best reachable cell. No movement.`);
    const losOk = hasLineOfSightToToken(npcGrid.i, npcGrid.j, npcToken, targetToken);
    await faceTargetIfEnabled(npcToken, targetToken);
    return { moved: false, usedDash: false, usedActionDash, attackPositionValid: losOk };
  }

  // ── Occupancy guard ───────────────────────────────────────────────────────
  if (isGridOccupied(chosen.destRow, chosen.destCol, npcToken)) {
    log(`${npcToken.name}: Destination [${chosen.destRow},${chosen.destCol}] occupied — finding adjacent cell.`);
    logCellRejection(npcToken.name, round, -1, chosen.destRow, chosen.destCol, "occupied");
    const NEIGHBORS_8 = [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]];
    let alt     = null;
    let altDist = Infinity;
    for (const [dr, dc] of NEIGHBORS_8) {
      const r   = chosen.destRow + dr;
      const c   = chosen.destCol + dc;
      const key = `${r},${c}`;
      if (!isInBoundsForToken(r, c, npcToken) || isGridOccupied(r, c, npcToken)) continue;
      if (!reachMap.has(key)) continue;
      const d = octile(r, c, tgtGrid.i, tgtGrid.j);
      if (d < altDist) { altDist = d; alt = { destRow: r, destCol: c, cost: reachMap.get(key) }; }
    }
    if (!alt) {
      log(`${npcToken.name}: No unoccupied adjacent cell within budget. Aborting.`);
      return { moved: false, usedDash: false, usedActionDash: false, attackPositionValid: false };
    }
    log(`${npcToken.name}: Rerouting to adjacent cell [${alt.destRow},${alt.destCol}].`);
    chosen = { ...alt, reachedGoal: false };
    plannedExecutionPath = null;
  }

  logMicroPlan(npcToken.name, round,
    "DEST_CHOSEN",
    `[${chosen.destRow},${chosen.destCol}] cost=${chosen.cost?.toFixed(2)}c APV=${hasLineOfSightToToken(chosen.destRow, chosen.destCol, npcToken, targetToken)}` +
    (usingMemory ? " [MEMORY]" : "") + (usedDash ? " [DASH]" : "")
  );

  if (hasLineOfSightToToken(chosen.destRow, chosen.destCol, npcToken, targetToken)) {
    setLastKnownPosition(npcToken.id, targetToken.id, tgtGrid.i, tgtGrid.j);
  }

  // ── Step-by-step execution ────────────────────────────────────────────────
  // Walk the BFS path one cell at a time so Foundry never has to route over
  // long distances — each step is a single adjacent-cell animation that cannot
  // drift or stop short. Two legs: normal move, then dash if applicable.

  /**
   * Execute one leg of movement: walk BFS path from current position to dest,
   * one cell per update, spending at most legBudgetCells.
   * Returns { movedAny, finalRow, finalCol, spentCells }.
   */
  async function executeLeg(destRow, destCol, legBudgetCells, legParent, legLabel, explicitPath = null) {
    // Reconstruct the path from either the natural route planner or the BFS parent map.
    const rawPath = explicitPath?.length ? explicitPath : reconstructPath(legParent, `${destRow},${destCol}`);

    // Execute the raw adjacent-cell path. Natural movement now affects route
    // selection, not the actual budget spend. This keeps D&D 5e movement exact
    // and prevents smoothed waypoints from skipping/duplicating cells.
    const initialRemainingRaw = _remainingPathFromCurrent(rawPath, npcToken);
    let stepQueue = initialRemainingRaw.slice(1);

    let spentCells = 0;
    let movedAny   = false;
    const visited  = new Set([`${tokenToGrid(npcToken).i},${tokenToGrid(npcToken).j}`]);
    const doorApproachTried = new Set(); // guards against re-queue loops

    while (stepQueue.length > 0) {
      if (game.paused) {
        tmin(npcToken.name, round, -1, legLabel, "game paused mid-move");
        break;
      }

      const step = stepQueue.shift();
      const curPos = tokenToGrid(npcToken);
      if (step.row === curPos.i && step.col === curPos.j) continue;

      const stepCost = octile(curPos.i, curPos.j, step.row, step.col);
      if (spentCells + stepCost > legBudgetCells + 0.05) {
        tvbr(npcToken.name, round, -1, legLabel,
          `budget exhausted at [${step.row},${step.col}] — spent=${spentCells.toFixed(2)}c limit=${legBudgetCells.toFixed(2)}c`);
        break;
      }

      const fromCenter = tokenCenterAtGrid(curPos.i, curPos.j, npcToken);
      const toCenter   = tokenCenterAtGrid(step.row, step.col, npcToken);

      // Door order matters: a closed door is a movement collision until it is
      // opened. Two-stage open so the NPC never halts with budget remaining
      // just because the immediate-step ray missed the door leaf:
      //   1. ray opener (door directly across this step), then
      //   2. proximity opener (any reachable closed door ahead of the NPC).
      // Re-test the step after each stage.
      let blocked = isStepBlocked(curPos.i, curPos.j, step.row, step.col, false, npcToken);
      if (blocked && canOpenDoors) {
        let opened = await openBlockingDoors(npcToken, fromCenter, toCenter);
        if (opened) blocked = isStepBlocked(curPos.i, curPos.j, step.row, step.col, false, npcToken);
        if (blocked) {
          opened = await openReachableDoors(npcToken, fromCenter, 0.5, toCenter);
          if (opened) blocked = isStepBlocked(curPos.i, curPos.j, step.row, step.col, false, npcToken);
        }

        // Door-approach recovery: the obstacle is a closed door still just out
        // of reach (e.g. a double-door leaf the planned diagonal clips one cell
        // early). Step to an adjacent walkable cell that brings the door within
        // reach, open it, then resume toward the original step — instead of
        // halting with movement to spare.
        if (blocked) {
          const stepId = `${curPos.i},${curPos.j}->${step.row},${step.col}`;
          const doors = doorApproachTried.has(stepId)
            ? []
            : _doorsBlockingStep(curPos.i, curPos.j, step.row, step.col, npcToken);
          if (doors.length) {
            const approach = _approachCellForDoor(curPos.i, curPos.j, doors, npcToken);
            const approachCost = approach ? octile(curPos.i, curPos.j, approach.row, approach.col) : Infinity;
            if (approach && spentCells + approachCost <= legBudgetCells + 0.05
                && !visited.has(`${approach.row},${approach.col}`)) {
              tvbr(npcToken.name, round, -1, legLabel,
                `door out of reach — approaching via [${approach.row},${approach.col}] to open it`);
              doorApproachTried.add(stepId);
              stepQueue.unshift(step);
              stepQueue.unshift(approach);
              continue;
            }
          }
        }
      }

      if (blocked) {
        tvbr(npcToken.name, round, -1, legLabel,
          `step [${step.row},${step.col}] wall-blocked from [${curPos.i},${curPos.j}] — stopping`);
        break;
      }

      const stepKey = `${step.row},${step.col}`;
      if (visited.has(stepKey)) {
        tvbr(npcToken.name, round, -1, legLabel,
          `loop guard stopped repeated step [${step.row},${step.col}]`);
        break;
      }

      if (isGridOccupied(step.row, step.col, npcToken)) {
        tvbr(npcToken.name, round, -1, legLabel,
          `step [${step.row},${step.col}] occupied — stopping`);
        break;
      }

      try {
        const destPx = gridToPixels(step.row, step.col);
        const stepDelay = movementStepDelayMs();
        const animateMove = stepDelay > 0;
        const updateData = { x: destPx.x, y: destPx.y };

        if (getSetting(SETTINGS.FACE_MOVEMENT)) {
          const facingPoint = getSetting(SETTINGS.FACE_TARGET)
            ? (targetToken.center ?? tokenCenterAtGrid(tokenToGrid(targetToken).i, tokenToGrid(targetToken).j, targetToken))
            : toCenter;
          const rotation = rotationForMovement(fromCenter, facingPoint);
          if (rotation !== null) updateData.rotation = rotation;
        }

        await npcToken.document.update(updateData, {
          animate: animateMove,
          animation: animateMove ? { duration: stepDelay } : undefined,
        });

        // Await the animation window. This gives Foundry and token-rotation
        // helpers time to visually process each step instead of teleporting.
        await delay(animateMove ? Math.max(25, stepDelay + 15) : 25);
      } catch (err) {
        log(`${npcToken.name}: Step to [${step.row},${step.col}] failed: ${err.message}`, "warn");
        break;
      }

      spentCells += stepCost;
      movedAny    = true;
      visited.add(stepKey);
      tvbr(npcToken.name, round, -1, legLabel,
        `stepped to [${step.row},${step.col}] — spent=${spentCells.toFixed(2)}c`);
    }

    const finalPos = tokenToGrid(npcToken);
    return { movedAny, finalRow: finalPos.i, finalCol: finalPos.j, spentCells };
  }

  // ── Execute movement ──────────────────────────────────────────────────────
  // D&D 5e treats Dash as extra movement for the current turn. Execute one
  // continuous pool rather than two restartable legs so the NPC uses the full
  // legal budget without looping back over already-walked cells.

  const costFt = Math.round(chosen.cost * gridScale);
  log(
    `${npcToken.name} → grid [${chosen.destRow},${chosen.destCol}]` +
    ` (${costFt}ft)` +
    (usedDash    ? " [DASH]"   : "") +
    (usingMemory ? " [MEMORY]" : "")
  );

  if (getSetting(SETTINGS.DRAW_MOVEMENT_PATH)) {
    const previewPath = plannedExecutionPath?.length
      ? plannedExecutionPath
      : reconstructPath(reachParent, `${chosen.destRow},${chosen.destCol}`);
    _drawPath(previewPath);
  }

  const moveLabel = usedDash ? "MOVE+DASH" : "MOVE";
  const moveLeg = await executeLeg(
    chosen.destRow, chosen.destCol,
    budgetCells,
    reachParent,
    moveLabel,
    plannedExecutionPath
  );

  const totalMoved   = moveLeg.movedAny;
  const finalUseDash = usedDash;

  // ── Final verify and result ───────────────────────────────────────────────
  const actual = tokenToGrid(npcToken);
  const outcome = actual.i === chosen.destRow && actual.j === chosen.destCol ? "success" : "partial";
  logPositionVerify(npcToken.name, round, -1,
    { row: chosen.destRow, col: chosen.destCol },
    actual,
    npcGrid,
    outcome
  );

  const finalAPV = hasLineOfSightToToken(actual.i, actual.j, npcToken, targetToken);
  logLOS(npcToken.name, round, -1, actual.i, actual.j, tgtGrid.i, tgtGrid.j, finalAPV, "final APV");

  await faceTargetIfEnabled(npcToken, targetToken);

  const result = { moved: totalMoved, usedDash: finalUseDash, usedActionDash, attackPositionValid: finalAPV };
  logFinalResult(npcToken.name, round, result);
  return result;
}
