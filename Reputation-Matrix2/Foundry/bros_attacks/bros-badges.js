// Bros badges — the recognition layer.
//
// Badges are deliberately NOT a power system. They grant nothing, cost
// nothing, and cannot be bought. They exist because the thing worth rewarding
// here is two players choosing to solve a problem together, and that behaviour
// is invisible on a character sheet unless something writes it down.
//
// Every badge is earned by an act of teamwork the system can actually observe,
// and each one is checked against the discovery ledger — no GM bookkeeping,
// no self-reporting. They fire on the brosDiscovery hook.
//
// The badge that matters most is Hard Way. Failing the same technique five
// times before landing it is, by any normal design instinct, the losing path.
// Here it is the one that gets a badge, because a table that keeps trying the
// same difficult idea is exactly the table this system is for.

const BROS_MODULE = "bros_attacks";

export const BADGES = {
  first_discovery: {
    icon: "🤝", label: "Worked It Out",
    hint: "Discover your first technique.",
    earned: ({ mine }) => mine.filter(e => e.discovered).length >= 1,
  },
  three_partners: {
    icon: "🔗", label: "Good With Anyone",
    hint: "Discover techniques with three different partners.",
    earned: ({ mine, actorId }) => {
      const partners = new Set(mine.filter(e => e.discovered)
        .map(e => e.pair.find(id => id !== actorId)));
      return partners.size >= 3;
    },
  },
  hard_way: {
    icon: "🧱", label: "The Hard Way",
    hint: "Land a technique after failing it five or more times.",
    earned: ({ mine }) => mine.some(e =>
      e.discovered && e.attempts.filter(a => a.failed).length >= 5),
  },
  same_pair_three: {
    icon: "👥", label: "Old Married Couple",
    hint: "Discover three techniques with the same partner.",
    earned: ({ mine, actorId }) => {
      const counts = {};
      for (const e of mine.filter(x => x.discovered)) {
        const other = e.pair.find(id => id !== actorId);
        counts[other] = (counts[other] ?? 0) + 1;
      }
      return Object.values(counts).some(n => n >= 3);
    },
  },
  whole_school: {
    icon: "🎓", label: "Whole School",
    hint: "Discover every technique in one school.",
    earned: ({ mine }) => {
      const defs = globalThis.BROS_ATTACKS ?? [];
      if (!defs.length) return false;
      const known = new Set(mine.filter(e => e.discovered).map(e => e.attackId));
      const schools = {};
      for (const attack of defs) {
        (schools[attack.school] = schools[attack.school] ?? []).push(attack.id);
      }
      return Object.values(schools).some(ids =>
        ids.length > 1 && ids.every(id => known.has(id)));
    },
  },
  first_to_name: {
    icon: "✍️", label: "Named It",
    hint: "Be part of the first pair in the campaign to name a technique.",
    earned: ({ mine, all }) => {
      const discovered = all.filter(e => e.discovered)
        .sort((x, y) => x.discoveredAt - y.discoveredAt);
      return discovered.length > 0 && mine.includes(discovered[0]);
    },
  },
};

/** Which badges an actor currently qualifies for. */
export function badgesFor(actorId) {
  const all = Object.values(game.settings.get(BROS_MODULE, "ledger") ?? {});
  const mine = all.filter(e => e.pair?.includes(actorId));
  const context = { actorId, mine, all };
  return Object.entries(BADGES)
    .filter(([, badge]) => { try { return badge.earned(context); } catch { return false; } })
    .map(([id, badge]) => ({ id, ...badge }));
}

/** Award anything newly qualified, announce it once, and never re-announce. */
export async function syncBadges(actorId) {
  const actor = game.actors?.get(actorId);
  if (!actor) return [];
  const held = actor.getFlag(BROS_MODULE, "badges") ?? [];
  const qualified = badgesFor(actorId);
  const fresh = qualified.filter(b => !held.includes(b.id));
  if (!fresh.length) return [];

  await actor.setFlag(BROS_MODULE, "badges", [...held, ...fresh.map(b => b.id)]);
  await ChatMessage.create({ content:
    `<div class="bros-clean-card bros-badge-card">`
    + `<h2>${fresh.map(b => b.icon).join(" ")} ${actor.name}</h2>`
    + fresh.map(b =>
        `<p><strong>${b.icon} ${b.label}</strong><br><span class="bros-badge-hint">${b.hint}</span></p>`
      ).join("")
    + `</div>` });
  return fresh;
}

Hooks.on("brosDiscovery", async ({ pair }) => {
  for (const id of pair) await syncBadges(id);
});

Hooks.on("ready", () => {
  // "on" not "once": if bros-attacks.js replaces game.brosAttacks with its
  // window during its own ready hook, this re-attaches afterwards.
  game.brosAttacks = game.brosAttacks ?? {};
  game.brosAttacks.badges = { BADGES, badgesFor, syncBadges };
});
