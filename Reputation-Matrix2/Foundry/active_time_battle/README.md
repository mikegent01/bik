# Active Time Battle for Foundry VTT

A drop-in Foundry VTT module for combats where the table should keep moving even
when one player or NPC is not ready. It replaces the "everyone waits for the
current turn" problem with visible ATB gauges: combatants become **READY** as
real time passes, initiative changes how fast the gauge fills, and idle actors
are delayed or put on Guard so the rest of the fight continues.

Copy this folder as `FoundryVTT/Data/modules/active-time-battle/` (matching the
manifest id), restart Foundry, enable **Active Time Battle**, and open the Combat
Tracker.

---

## The table rule

Every combatant has an ATB gauge from `0` to `100`.

1. When combat starts, the module seeds gauges from initiative: everyone starts
   at the configured opening readiness, and higher initiative starts closer to
   READY.
2. While ATB is running, gauges fill in real time. Initiative above the encounter
   average fills faster; initiative below the average fills slower.
3. At `100`, a combatant is READY. The module can auto-activate ready combatants
   or let owners click **Activate**.
4. An activated combatant gets a spotlight timer. Default: `90` seconds.
5. If the timer expires, timeout policy fires:
   - **Delay**: drop the actor back to a configured ATB percent, so they cycle
     back soon but do not block the fight.
   - **Guard / Dodge**: spend the turn defensively and reset the gauge.
   - **Escalate**: delay once, then Guard after repeated idle timeouts.
6. Other gauges keep filling by default while someone acts. Enable **Wait mode**
   only if you want traditional pause-while-acting ATB.

That is the incentive structure: being attentive lets you spend your READY
window; being absent does not freeze the table, and repeated absence costs turns.

---

## Why this solves the "YouTube for 30 minutes" problem

Traditional initiative creates dead time: if five turns happen before yours, you
can check out. Team initiative helps somewhat, but a non-responsive person can
still stall the side. ATB changes the pressure:

- Everyone sees their own gauge climbing, so they know when they are close.
- High initiative matters continuously, not just in round one.
- Ready actors can act as soon as they are ready instead of waiting through a
  fixed queue.
- Inactive actors do not stop the combat. They delay or guard, depending on the
  GM's setting.
- Ready overflow caps, so a player cannot disappear for ten minutes and return
  with infinite priority banked.
- NPCs can auto-activate, which keeps GM-run opponents moving without extra
  tracker clicking.

The goal is not to punish a bathroom break. The goal is to make attention worth
something while keeping the encounter fair enough to play.

---

## Recommended settings

For a table that wants pressure without panic:

| Setting | Recommended | Why |
|---|---:|---|
| Base seconds to READY | `45` | A normal actor cycles often enough to stay engaged. |
| Opening readiness | `35` | Combat starts moving quickly after initiative. |
| Initiative speed weight | `0.035` | +10 initiative is about ×1.35 refill speed. |
| Opening initiative weight | `2.5` | High initiative starts meaningfully closer to READY. |
| Auto-activate | `All ready combatants` | The table never waits for someone to notice the button. |
| Ready grace seconds | `3` | Gives owners a breath before auto-pick. |
| Spotlight seconds | `90` | Enough to resolve a turn, short enough to prevent stalls. |
| Timeout result | `Delay, then Guard` | Forgiving once, firm after repeated idle. |
| Delay fallback percent | `72` | The actor comes back soon, but loses the immediate spotlight. |
| READY overflow cap | `60` | Waiting helps priority, but cannot stockpile infinite turns. |
| Tracker visual style | `Bars` | Most readable; switch to Classic badge if you want old-school ATB. |
| Queue preview size | `5` | Shows who is READY / almost READY at a glance. |
| Wait mode | Off | Other people keep charging while the active actor acts. |

If you have very fast automation, lower the spotlight timer to `45–60` seconds.
If your table needs more conversation per turn, keep the timer at `90–120`.

---

## Combat Tracker controls

The module adds an **Active Time Battle** panel to the Combat Tracker.

GM controls:

- **Start ATB** — initialize gauges and start the clock.
- **Pause / Resume ATB** — pause real-time filling without ending combat.
- **Roll Missing Initiative** — rolls the configured fallback formula only for
  combatants with no initiative value.
- **Reset ATB** — re-seed gauges from current initiative and stop the clock.

Per-combatant controls:

- **Lightning / Activate** — appears on READY combatants the current user can
  control.
- **Hourglass / End ATB Turn** — appears on the active combatant for the GM and
  the actor owner.

The meter tooltip shows ATB percent, speed multiplier, and initiative value.

---

## Visual styles

The setting **Tracker visual style** gives three table looks:

| Style | Use when | What it looks like |
|---|---|---|
| **Bars** | Default / easiest to read | Full-width ATB bars under each combatant with READY/percent text and speed multiplier. |
| **Classic badge** | You want an old-school ATB feel | A chunky right-side capsule, closer to classic Final Fantasy battle UI. |
| **Compact** | Large NPC fights | Thin low-noise bars plus a two-column queue preview. |

The panel also has a **queue preview**. It shows the next few READY or almost-ready
combatants with tiny progress fills and ETA labels. READY chips owned by the
viewer are clickable, so an attentive player can activate from the top of the
tracker without hunting through the list.

---

## Bug-hunt / safety notes added after the first pass

- Multiple GM clients no longer double-tick the clock. Every GM has a harmless
  interval, but only the current primary GM writes gauge updates; if that GM
  disconnects, the next active GM takes over.
- Player socket requests are re-authorized on the GM side. Non-GM users can only
  activate/end turns for combatants they own; they cannot force early activation,
  end another combatant's active turn, or use GM-only controls.
- A READY actor cannot overwrite someone else's active spotlight; the current ATB
  turn must be ended or timed out first.
- Native Foundry next-turn changes are blocked while ATB is running. Use
  **Activate** and **End ATB Turn** so gauges, idle strikes, and ATB laps stay
  correct.
- Actor/combatant names are inserted into tracker UI as text nodes and escaped
  in chat/dialog HTML.
- The combat tracker panel is built with DOM nodes instead of string-building for
  user-facing names.

---

## Foundry/system notes

- The module uses Foundry combatants and does not depend on a particular game
  system. The fallback roll formula defaults to `1d20`; change it for your
  system if needed.
- The module does not choose attacks, spend actions, or apply damage. A timeout
  posts Guard / Dodge in chat and advances the ATB state; the GM still applies
  any system-specific effect if desired.
- Foundry rounds are treated as ATB laps. When every active combatant has spent
  a turn/guarded in the current lap, the module increments the combat round.
- Defeated combatants are skipped when the encounter is configured to skip
  defeated combatants.
- GM is authoritative. Player button clicks send socket requests; the GM client
  performs gauge, turn, and round updates.

---

## Design knobs

### Initiative as speed, not just order

Initiative contributes twice:

```text
opening ATB = opening readiness + (initiative - encounter average) × opening weight
fill speed  = clamp(min, max, 1 + (initiative - encounter average) × speed weight)
```

That keeps initiative important without letting one high roller permanently own
the whole encounter.

### Idle handling

Use **Escalate** for most tables:

```text
first idle timeout     -> delayed to 72% ATB
second repeated idle   -> Guard / Dodge and gauge resets
```

A player who is briefly distracted is not destroyed. A player who leaves the
keyboard stops consuming the table's time.

### Active vs Wait mode

Default **Active mode** keeps gauges filling during turns. This is the answer to
"everyone else checked out": people are still charging while a turn resolves.
**Wait mode** pauses gauges while someone acts; it is safer for rules-heavy games
but less effective at solving dead air.
