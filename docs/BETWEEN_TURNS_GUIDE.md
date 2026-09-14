# Between Turns — keeping the table busy when it is not their go

**The problem this fixes is not a thin character sheet. It is dead time.**

The diagnosis came from the table, after the Skittering Grove session: a player
acted once, had no multiattack, and then did nothing else — and the fix is *not*
to bolt an extra attack onto that player. Adding a random option to one sheet
does not address it, because the same session shows the same gap everywhere.
Remi reloads a musket and waits. Salam misses and holds position. Wario throws
one punch off-screen. The turns were fine. **The space between them was empty.**

That space is most of the session. In a nine-combatant fight, any given player
is not acting for roughly 90% of the round. If the only thing that exists is
"your go / not your go", then the game is 10% game.

> **The test:** during somebody else's turn, is there anything a player can do
> that changes an outcome? If the honest answer is "listen", the fight is
> structurally boring no matter how good the character sheets are.

---

## Why adding options to a sheet does not work

It is the intuitive fix and it makes things worse:

| What you add | What actually happens |
|---|---|
| A second attack | The turn takes twice as long. Everyone *else's* dead time goes **up**. |
| More per-turn choices | Longer decision paralysis on the active turn; the queue stalls harder. |
| A bigger spell list | The player reads their sheet during other people's turns instead of watching. |

Every per-turn option you add is paid for by everybody who is not currently
taking a turn. The budget you are spending is the table's attention, and a
nine-person fight has eight people's worth of it sitting idle at all times.

**Spend the budget on the gap, not the turn.**

---

## The four levers, cheapest first

### 1. Reactions everybody actually remembers

The single highest-value change, because it makes "not your turn" into a moment
where you must be watching. A reaction is *only* useful if it is off-turn.

House rules that work:

```text
□ Every character has at least ONE reaction they can describe from memory.
□ The GM announces the trigger out loud: "that's a hit on Salam — anyone?"
□ If nobody uses a reaction for two full rounds, the triggers are too obscure.
```

The archive already has a canonical example and it is the best one in the
record: **Mossy ramming Remi clear of a killing bite.** That is a construct
spending its off-turn to overwrite an outcome that had already happened to
somebody else. It is the most memorable beat in the session and it cost the
active player nothing.

### 2. Ask the non-active players for the fiction

The cheapest lever; costs zero mechanics. When a player acts, the GM narrates
the result — but the *reaction shot* belongs to somebody else.

- "Archie, you're twenty feet away and you just watched that. What do you see?"
- "Dan, the scythe went past your head. Where are you now?"
- "Wario — the Legion just said pest control. Your face?"

This is how "I am tired of running" / "it's been like six seconds" happened, and
that exchange is in the filing forever. Neither line was on anyone's turn.

### 3. Standing orders and readied actions

Let a player bank a decision *before* the gap instead of spending the gap
deciding. A readied action is a turn that resolves inside somebody else's turn,
which is exactly the shape of the problem.

```text
"I'm holding my shot until something comes out of the canopy."
"If anyone goes down within thirty feet, I'm moving to them first."
```

Standing orders also fix the specific failure that started this: a player who
has already declared their trigger has something to *watch for*, which is
attention, which is engagement.

### 4. Pets, constructs, summons and companions on other initiatives

Where a player already has a second body — Mossy is the archive's example — run
it on a different initiative count. That player now has two positions in the
round and is never more than a few seconds from a decision.

Do **not** hand a second body to a player who does not already have one just to
solve the pacing problem; that is the "add a random thing" failure again, with
extra bookkeeping.

---

## The ATB module already fights half this battle

`Reputation-Matrix2/Foundry/active_time_battle/` exists partly for this reason,
and its README's **"Large fights (20+ combatants)"** section documents the same
gap from the mechanical side: gauges only pause while somebody is *actively
taking a turn*, so the between-turn talking fills everybody's bar at once.

The relevant settings are already documented there — `READY batch limit`,
`Base seconds to READY`, `Auto-activate: NPCs only`, and team captains. Use
them. This guide is the table-side half of the same problem; that README is the
software half. Neither one is sufficient alone.

---

## What this looks like in a filing

You can read dead time straight off a battle record. In
`judgement_in_the_grove_battle`, compare two combatant rows:

| Combatant | `role` | Reads as |
|---|---|---|
| Mossy | *"rammed Remi clear of a killing bite at a dead run"* | An off-turn decision that changed somebody else's outcome |
| Salam | *"missed the ettercap, then held position as the second wave came in"* | One action, then nothing, then unconscious |

Both are accurate records of what happened at the table. Only one of them is a
player who got to play. When a session's battle record is mostly rows shaped
like the second one, the fix is in this guide — not in those characters' sheets.

---

## Checklist

- [ ] Every player can name one reaction without opening a sheet
- [ ] The GM announces reaction triggers out loud rather than waiting to be asked
- [ ] Non-active players are asked for reaction shots at least once per round
- [ ] Readied actions and standing orders are offered, not just permitted
- [ ] Existing companions/constructs run on their own initiative
- [ ] No new per-turn option was added to fix a between-turn problem
- [ ] For 20+ combatants, the ATB large-fight settings are applied
