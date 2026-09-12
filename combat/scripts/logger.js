/**
 * logger.js  —  Feature 20: Verbose Tactical Logging
 *
 * Centralized, structured, levelled debug logging for NPC movement diagnostics.
 *
 * Debug levels:
 *   off     — no output at all
 *   minimal — key decisions: target, route, attack, dash, budget, recovery count,
 *             final result
 *   verbose — adds: candidate cells, LOS results, breadcrumb scoring, wall/occupancy
 *             rejections, route invalidation, replanning triggers, budget calculations
 *   trace   — adds: full per-cell scoring breakdown, route penalties, persistence
 *             scoring, invalid-route memory, breadcrumb weights, recovery deltas,
 *             replanning decision reasoning, route comparison winners
 *
 * Every entry is tagged with: [NCA|LEVEL] NPC_NAME | Turn R:round A:attempt | PHASE | message
 */

import { getSetting, SETTINGS, MODULE_ID } from "./settings.js";

// ─── Level constants ─────────────────────────────────────────────────────────

export const LOG_LEVEL = Object.freeze({
  OFF:     0,
  MINIMAL: 1,
  VERBOSE: 2,
  TRACE:   3,
});

const LEVEL_LABELS = ["off", "minimal", "verbose", "trace"];

function _resolveLevel() {
  try {
    const raw = getSetting(SETTINGS.PATHFINDING_DEBUG_LEVEL) ?? "minimal";
    const idx = LEVEL_LABELS.indexOf(raw);
    return idx < 0 ? LOG_LEVEL.MINIMAL : idx;
  } catch {
    return LOG_LEVEL.MINIMAL; // before settings registered
  }
}

// ─── Public level-check helpers ──────────────────────────────────────────────

export function isMinimal() { return _resolveLevel() >= LOG_LEVEL.MINIMAL; }
export function isVerbose() { return _resolveLevel() >= LOG_LEVEL.VERBOSE; }
export function isTrace()   { return _resolveLevel() >= LOG_LEVEL.TRACE;   }

// ─── Core emit function ───────────────────────────────────────────────────────

/**
 * @param {number}  level   - Required minimum level (LOG_LEVEL.*).
 * @param {string}  npcName - Display name of the NPC.
 * @param {number}  round   - Current combat round.
 * @param {number}  attempt - Recovery attempt index (0-based, pass -1 if N/A).
 * @param {string}  phase   - Tactical phase label (e.g. "BUDGET", "PROBE", "REPLAN").
 * @param {string}  msg     - Human-readable description.
 * @param {object}  [data]  - Optional structured data to attach (printed as table or object).
 */
export function tlog(level, npcName, round, attempt, phase, msg, data) {
  if (_resolveLevel() < level) return;

  const lvlLabel  = LEVEL_LABELS[level]?.toUpperCase() ?? "?";
  const attemptStr = attempt >= 0 ? `A:${attempt + 1}` : "     ";
  const header    = `[NCA|${lvlLabel.padEnd(7)}] ${String(npcName).padEnd(20)} | R:${round} ${attemptStr} | ${String(phase).padEnd(12)} |`;

  if (data !== undefined) {
    console.groupCollapsed(`${header} ${msg}`);
    if (Array.isArray(data)) {
      console.table(data);
    } else {
      console.dir(data);
    }
    console.groupEnd();
  } else {
    console.log(`${header} ${msg}`);
  }
}

// ─── Convenience wrappers ─────────────────────────────────────────────────────

/** Minimal-level log. */
export function tmin(npcName, round, attempt, phase, msg, data) {
  tlog(LOG_LEVEL.MINIMAL, npcName, round, attempt, phase, msg, data);
}

/** Verbose-level log. */
export function tvbr(npcName, round, attempt, phase, msg, data) {
  tlog(LOG_LEVEL.VERBOSE, npcName, round, attempt, phase, msg, data);
}

/** Trace-level log. */
export function ttrc(npcName, round, attempt, phase, msg, data) {
  tlog(LOG_LEVEL.TRACE, npcName, round, attempt, phase, msg, data);
}

// ─── Specialized helpers ──────────────────────────────────────────────────────

/**
 * CRITICAL — Log every replanning event.
 * Called whenever route or direction changes.
 */
export function logReplan(npcName, round, attempt, reason, previousDest, newDest, wasNecessary) {
  if (_resolveLevel() < LOG_LEVEL.MINIMAL) return;

  const prevStr = previousDest ? `[${previousDest.row},${previousDest.col}]` : "none";
  const newStr  = newDest      ? `[${newDest.row},${newDest.col}]`           : "none";

  tlog(
    LOG_LEVEL.MINIMAL, npcName, round, attempt, "REPLAN",
    `Route changed: ${prevStr} → ${newStr} | Reason: ${reason} | Necessary: ${wasNecessary ? "YES" : "SUSPECT"}`,
    isVerbose() ? { reason, previousDest, newDest, wasNecessary } : undefined
  );
}

/**
 * CRITICAL — Log every movement budget calculation.
 */
export function logBudget(npcName, round, attempt, budgetData) {
  if (_resolveLevel() < LOG_LEVEL.MINIMAL) return;

  const { speedFt, normalFt, budgetFt, budgetCells, maxSteps, usedDash,
          spentCells, projectedCost, reservedCells } = budgetData;

  const remainingCells = Math.max(0, budgetCells - (spentCells ?? 0));

  tlog(
    LOG_LEVEL.MINIMAL, npcName, round, attempt, "BUDGET",
    `total=${budgetFt}ft (${budgetCells.toFixed(2)}c) | speed=${speedFt}ft normal=${normalFt}ft` +
    ` | spent=${(spentCells ?? 0).toFixed(2)}c projected=${(projectedCost ?? 0).toFixed(2)}c` +
    ` reserved=${(reservedCells ?? 0).toFixed(2)}c remaining=${remainingCells.toFixed(2)}c` +
    ` maxSteps=${maxSteps}${usedDash ? " [DASH]" : ""}`,
    isVerbose() ? budgetData : undefined
  );
}

/**
 * CRITICAL — Log position verification after every move attempt.
 */
export function logPositionVerify(npcName, round, attempt, intended, actual, origin, outcome) {
  if (_resolveLevel() < LOG_LEVEL.MINIMAL) return;

  const deltaR = Math.abs(actual.i - intended.row);
  const deltaC = Math.abs(actual.j - intended.col);
  const delta  = deltaR === 0 && deltaC === 0 ? "Δ0,0 ✓" : `Δ${deltaR},${deltaC} ✗`;

  tlog(
    LOG_LEVEL.MINIMAL, npcName, round, attempt, "VERIFY",
    `intended [${intended.row},${intended.col}] → actual [${actual.i},${actual.j}] ${delta} | outcome: ${outcome}`,
    isVerbose() ? { intended, actual, origin, deltaR, deltaC, outcome } : undefined
  );
}

/**
 * Log a failed destination with reason.
 */
export function logFailedDest(npcName, round, attempt, row, col, reason) {
  tvbr(npcName, round, attempt, "FAIL_DEST",
    `[${row},${col}] rejected — ${reason}`);
}

/**
 * Log the outcome of an LOS validation.
 */
export function logLOS(npcName, round, attempt, fromRow, fromCol, toRow, toCol, result, context) {
  tvbr(npcName, round, attempt, "LOS",
    `[${fromRow},${fromCol}] → [${toRow},${toCol}] = ${result ? "CLEAR" : "BLOCKED"}` +
    (context ? ` (${context})` : ""));
}

/**
 * Log breadcrumb trail scoring for a cell.
 */
export function logBreadcrumb(npcName, round, attempt, row, col, score, trailLength, ageFactor) {
  ttrc(npcName, round, attempt, "BREADCRUMB",
    `[${row},${col}] score=${score.toFixed(3)} | trailLen=${trailLength} ageFactor=${ageFactor?.toFixed(2) ?? "n/a"}`);
}

/**
 * Log a wall or occupancy cell rejection.
 */
export function logCellRejection(npcName, round, attempt, row, col, reason) {
  tvbr(npcName, round, attempt, "REJECT",
    `[${row},${col}] blocked — ${reason}`);
}

/**
 * Log the full candidate cell list with scores (trace only).
 */
export function logCandidates(npcName, round, attempt, phase, candidates) {
  if (_resolveLevel() < LOG_LEVEL.TRACE) return;
  tlog(LOG_LEVEL.TRACE, npcName, round, attempt, phase,
    `${candidates.length} candidates:`,
    candidates.map(c => ({
      cell: `[${c.row},${c.col}]`,
      score:    c.score?.toFixed(3) ?? "?",
      dist:     c.dist?.toFixed(2)  ?? "?",
      isGoal:   c.isGoal  ?? false,
      hasLOS:   c.hasLOS  ?? false,
      heading:  c.headingBonus ?? 0,
      trail:    c.trailScore  ?? 0,
      stability: c.stabilityBonus ?? 0,
      rejected: c.rejected ?? false,
      rejectReason: c.rejectReason ?? "",
    }))
  );
}

/**
 * Log per-probe scoring detail (trace only).
 */
export function logProbeScore(npcName, round, attempt, probe) {
  ttrc(npcName, round, attempt, "PROBE_SCORE",
    `[${probe.row},${probe.col}] total=${probe.total?.toFixed(3)} ` +
    `| goal=${probe.goalBonus ?? 0} LOS=${probe.losBonus ?? 0} stability=${probe.stabilityBonus ?? 0} ` +
    `lookahead=${probe.lookaheadBonus ?? 0} deadend=${probe.deadEndPenalty ?? 0} ` +
    `door=${probe.doorBonus ?? 0} heading=${probe.headingBonus ?? 0} ` +
    `trail=${probe.trailScore ?? 0} distPenalty=${probe.distPenalty?.toFixed(3) ?? 0} ` +
    `awayPenalty=${probe.awayPenalty ?? 0}`
  );
}

/**
 * Log which route won and why (trace only).
 */
export function logRouteComparison(npcName, round, attempt, winner, loser, margin) {
  ttrc(npcName, round, attempt, "ROUTE_WIN",
    `winner [${winner.row},${winner.col}](${winner.score?.toFixed(2)}) beat ` +
    `[${loser.row},${loser.col}](${loser.score?.toFixed(2)}) by ${margin?.toFixed(2)} pts`
  );
}

/**
 * Log directional persistence scoring detail (trace only).
 */
export function logHeadingScore(npcName, round, attempt, fromRow, fromCol, toRow, toCol, dot, bonus) {
  ttrc(npcName, round, attempt, "HEADING",
    `[${fromRow},${fromCol}]→[${toRow},${toCol}] dot=${dot?.toFixed(3) ?? "?"} bonus=${bonus}`);
}

/**
 * Log recovery attempt start with scoring context (verbose+).
 */
export function logRecovery(npcName, round, attempt, maxAttempts, reason, excludeCount) {
  tmin(npcName, round, attempt, "RECOVERY",
    `Attempt ${attempt + 1}/${maxAttempts} | reason: ${reason}` +
    (isVerbose() ? ` | excluded cells: ${excludeCount}` : "")
  );
}

/**
 * Log final action result at end of turn (minimal+).
 */
export function logFinalResult(npcName, round, result) {
  tmin(npcName, round, -1, "RESULT",
    `moved=${result.moved} dash=${result.usedDash} APV=${result.attackPositionValid}` +
    (result.recoveryCount != null ? ` recoveries=${result.recoveryCount}` : "")
  );
}

/**
 * Log turn intent creation/reuse (minimal for decision, verbose for details).
 */
export function logIntent(npcName, round, intent, isNew) {
  const action = isNew ? "BUILT" : "CACHED";
  tmin(npcName, round, -1, "INTENT",
    `${action}: ${intent.attackCell
      ? `attack→[${intent.attackCell.row},${intent.attackCell.col}] cost=${intent.attackCostCells?.toFixed(1)}c`
      : "pursuit-only"} | budget=${intent.budgetCells?.toFixed(1)}c maxSteps=${intent.maxSteps}` +
    (intent.usedDash ? " [DASH]" : ""),
    isVerbose() ? intent : undefined
  );
}

/**
 * Log micro-plan decisions (verbose+).
 */
export function logMicroPlan(npcName, round, action, detail) {
  tvbr(npcName, round, -1, "MICRO_PLAN", `${action}: ${detail}`);
}

/**
 * Log dash decision (minimal+).
 */
export function logDash(npcName, round, decided, reason) {
  tmin(npcName, round, -1, "DASH",
    decided ? `DASH — ${reason}` : `no dash — ${reason}`
  );
}

/**
 * Log target selection (minimal+).
 */
export function logTarget(npcName, round, targetName, distFt, attackName) {
  tmin(npcName, round, -1, "TARGET",
    `→ ${targetName} (${Math.round(distFt)}ft)` +
    (attackName ? ` | attack: ${attackName}` : "")
  );
}
