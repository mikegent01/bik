// Bros Attack discovery — the attempts ledger.
//
// A bros attack is not bought and not granted. It is found at the table, by
// two players trying something that does not work yet.
//
// THE THREE-STRIKES RULE
//   Attempt 1 fails. Attempt 2 fails. Attempt 3 lands, and the pair name it.
//
// The first two failures are not punishment and they are not random — the GM
// records WHY it failed, and that reason is shown back to the players before
// the next attempt. That is the whole design: the failures are the teaching
// material. A pair who have been told "you both moved on the same beat" twice
// will fix the timing themselves, and the third attempt succeeds because they
// worked it out, not because a counter hit three.
//
// Naming matters as much as the mechanic. When the third attempt lands, the
// players type the name. It goes into the ledger, into chat, and onto both
// character sheets. Nobody remembers unlocking "Technique #7"; everybody
// remembers the night they invented the Stairwell Trick.
//
// WHAT THIS REPLACES
//   Shop items used to carry teachesTechnique, which meant a technique could
//   be bought. That is now gone. Items still exist and still matter — a kit is
//   spent instead of Bros Energy — but only for a technique the pair already
//   knows. You cannot purchase your way past the discovery.
//
// Ledger shape, stored on the WORLD (not the actor), because a discovery
// belongs to a pair and both sheets must agree:
//   game.settings.get("bros_attacks", "ledger") = {
//     "<actorA|actorB|attackId>": {
//       pair: [idA, idB], attackId, attempts: [{ n, failed, reason, at }],
//       discovered: false, name: null, discoveredAt: null
//     }
//   }

const BROS_MODULE = "bros_attacks";
const STRIKES = 2; // failures required before a success can land

const pairKey = (a, b, attackId) => [[a, b].sort().join("|"), attackId].join("|");

const readLedger = () => {
  try { return game.settings.get(BROS_MODULE, "ledger") ?? {}; }
  catch { return {}; }
};

const writeLedger = async (ledger) =>
  game.settings.set(BROS_MODULE, "ledger", ledger);

/** Every ledger entry involving this actor, newest first. */
export function attemptsFor(actorId) {
  return Object.values(readLedger())
    .filter(entry => entry.pair?.includes(actorId))
    .sort((x, y) => (y.discoveredAt ?? 0) - (x.discoveredAt ?? 0));
}

/** Has this pair locked in this technique? */
export function pairKnows(actorA, actorB, attackId) {
  const entry = readLedger()[pairKey(actorA, actorB, attackId)];
  return Boolean(entry?.discovered);
}

/** How many logged failures stand behind the next attempt. */
export function strikesAgainst(actorA, actorB, attackId) {
  const entry = readLedger()[pairKey(actorA, actorB, attackId)];
  return (entry?.attempts ?? []).filter(a => a.failed).length;
}

/** The reason the last attempt failed, to show before the next one. */
export function lastFailure(actorA, actorB, attackId) {
  const entry = readLedger()[pairKey(actorA, actorB, attackId)];
  const failures = (entry?.attempts ?? []).filter(a => a.failed);
  return failures.length ? failures[failures.length - 1].reason : null;
}

/**
 * Record a failed attempt. The reason is mandatory and is quoted back to the
 * players next time — a failure without a reason teaches nothing, so we
 * refuse to log one.
 */
export async function logFailure(actorA, actorB, attackId, reason) {
  const clean = String(reason ?? "").trim();
  if (clean.length < 8) {
    ui.notifications?.warn(
      "Say why it failed. The reason is read back before the next attempt — "
      + "that is how the pair works out the fix.");
    return null;
  }

  const ledger = readLedger();
  const key = pairKey(actorA, actorB, attackId);
  const entry = ledger[key] ?? {
    pair: [actorA, actorB], attackId, attempts: [],
    discovered: false, name: null, discoveredAt: null,
  };
  if (entry.discovered) {
    ui.notifications?.info("They already know this one.");
    return entry;
  }

  entry.attempts.push({
    n: entry.attempts.length + 1, failed: true, reason: clean, at: Date.now(),
  });
  ledger[key] = entry;
  await writeLedger(ledger);

  const strikes = entry.attempts.filter(a => a.failed).length;
  const remaining = Math.max(0, STRIKES - strikes);
  await ChatMessage.create({ content:
    `<div class="bros-clean-card bros-attempt-failed">`
    + `<h2>✗ It doesn't work — yet</h2>`
    + `<p class="bros-attempt-reason">${foundry.utils.escapeHTML?.(clean) ?? clean}</p>`
    + (remaining
        ? `<p class="bros-attempt-note">One more honest failure and the next `
          + `attempt can land. Change something first.</p>`
        : `<p class="bros-attempt-note">Twice now. The next attempt is the one `
          + `that counts — if they have fixed what went wrong.</p>`)
    + `</div>` });
  return entry;
}

/**
 * Record the attempt that lands. Only legal once two failures are on record:
 * a technique nobody has struggled with is not a discovery.
 */
export async function logDiscovery(actorA, actorB, attackId, name) {
  const ledger = readLedger();
  const key = pairKey(actorA, actorB, attackId);
  const entry = ledger[key];
  const strikes = (entry?.attempts ?? []).filter(a => a.failed).length;

  if (strikes < STRIKES) {
    ui.notifications?.warn(
      `Not yet — ${STRIKES - strikes} more failed attempt(s) on the record. `
      + `The failures are the technique.`);
    return null;
  }
  if (entry.discovered) return entry;

  const chosen = String(name ?? "").trim();
  if (!chosen) {
    ui.notifications?.warn("The players name it. That is the reward.");
    return null;
  }

  entry.attempts.push({
    n: entry.attempts.length + 1, failed: false, reason: "", at: Date.now(),
  });
  entry.discovered = true;
  entry.name = chosen;
  entry.discoveredAt = Date.now();
  ledger[key] = entry;
  await writeLedger(ledger);

  // Both sheets learn it, so the normal energy economy takes over from here.
  for (const id of entry.pair) {
    const actor = game.actors?.get(id);
    if (!actor) continue;
    const learned = actor.getFlag(BROS_MODULE, "learned") ?? [];
    if (!learned.includes(attackId)) {
      await actor.setFlag(BROS_MODULE, "learned", [...learned, attackId]);
    }
  }

  const names = entry.pair.map(id => game.actors?.get(id)?.name ?? "?").join(" & ");
  const failures = entry.attempts.filter(a => a.failed);
  await ChatMessage.create({ content:
    `<div class="bros-clean-card bros-discovered">`
    + `<h2>🤝 ${foundry.utils.escapeHTML?.(chosen) ?? chosen}</h2>`
    + `<p><strong>${names}</strong> worked it out. It is theirs, and it is canon.</p>`
    + `<p class="bros-attempt-note">It took ${failures.length} failed attempts:</p>`
    + `<ul class="bros-attempt-history">`
    + failures.map(f => `<li>${foundry.utils.escapeHTML?.(f.reason) ?? f.reason}</li>`).join("")
    + `</ul>`
    + `<p class="bros-attempt-note">From here it costs 1 Bros Energy each, from a `
    + `maximum of 2, back after a short rest.</p>`
    + `</div>` });

  Hooks.callAll("brosDiscovery", { pair: entry.pair, attackId, name: chosen, entry });
  return entry;
}

/** Undo the most recent ledger entry for a pair — for misclicks. */
export async function undoLastAttempt(actorA, actorB, attackId) {
  const ledger = readLedger();
  const key = pairKey(actorA, actorB, attackId);
  const entry = ledger[key];
  if (!entry?.attempts?.length) return null;

  const removed = entry.attempts.pop();
  if (!removed.failed && entry.discovered) {
    entry.discovered = false; entry.name = null; entry.discoveredAt = null;
    for (const id of entry.pair) {
      const actor = game.actors?.get(id);
      if (!actor) continue;
      const learned = (actor.getFlag(BROS_MODULE, "learned") ?? [])
        .filter(x => x !== attackId);
      await actor.setFlag(BROS_MODULE, "learned", learned);
    }
  }
  if (!entry.attempts.length) delete ledger[key];
  else ledger[key] = entry;
  await writeLedger(ledger);
  return entry;
}

Hooks.once("init", () => {
  game.settings.register(BROS_MODULE, "ledger", {
    scope: "world", config: false, type: Object, default: {},
  });
});

Hooks.on("ready", () => {
  // "on" not "once": if bros-attacks.js replaces game.brosAttacks with its
  // window during its own ready hook, this re-attaches afterwards.
  game.brosAttacks = game.brosAttacks ?? {};
  game.brosAttacks.discovery = {
    logFailure, logDiscovery, undoLastAttempt,
    pairKnows, strikesAgainst, lastFailure, attemptsFor,
    ledger: readLedger,
    STRIKES,
  };
});
