# Active Time Battle for Foundry VTT

A drop-in Foundry VTT module for combats where the table should keep moving but
player turns should still feel fair. It replaces the "everyone waits for the
current turn" problem with visible ATB gauges: combatants become **READY** as
real time passes, initiative changes how fast the gauge fills, NPCs can be
called over automatically, and player-owned turns pause the gauge clock with a
five-minute decision window.

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
   or let owners click **Activate**. With the default settings, NPCs get called
   over automatically and player turns are also called up instead of waiting for
   a player to notice a button.
4. An activated NPC/default combatant gets a `90` second spotlight. A
   player-owned combatant gets `300` seconds — five minutes — and **Pause ATB on
   player turns** stops the other gauges while that player decides.
5. If the active timer expires, timeout policy fires:
   - **Delay**: drop the actor back to a configured ATB percent, so they cycle
     back soon but do not block the fight.
   - **Guard / Dodge**: spend the turn defensively and reset the gauge.
   - **Escalate**: delay once, then Guard after repeated idle timeouts.
6. Other gauges keep filling by default during NPC turns. Enable **Wait mode**
   only if you want traditional pause-while-anyone-acts ATB.

That is the incentive structure: NPCs keep going, the table does not wait on a
90-second player panic clock, and a player turn pauses like a Baldur-style
decision point. being absent does not freeze the table forever; repeated absence
still costs turns through the timeout policy.

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
- Player turns can auto-activate too, but with a separate five-minute decision
  timer and automatic gauge pause so the player is not punished by the NPC pace.

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
| Auto-activate | `All ready combatants` | NPCs go and player turns get called over automatically. |
| Ready grace seconds | `3` | Gives owners a breath before auto-pick. |
| NPC spotlight seconds | `90` | Keeps GM-run turns moving. |
| Player decision seconds | `300` | Five minutes for a real player turn instead of a 90-second scramble. |
| Player warning seconds | `60` | Gives a fair one-minute warning before timeout handling. |
| Pause ATB on player turns | On | Baldur-style pause: other gauges wait while a player decides. |
| Timeout result | `Delay, then Guard` | Forgiving once, firm after repeated idle. |
| Delay fallback percent | `72` | The actor comes back soon, but loses the immediate spotlight. |
| READY overflow cap | `60` | Waiting helps priority, but cannot stockpile infinite turns. |
| Tracker visual style | `Bars` | Most readable; switch to Classic badge if you want old-school ATB. |
| Queue preview size | `5` | Shows who is READY / almost READY at a glance. |
| Wait mode | Off | NPC turns keep the pressure moving; player turns already pause by default. |

If you have very fast automation, lower the NPC spotlight timer to `45–60`
seconds. If your table needs more conversation per player turn, raise the player
decision timer above `300`; the default is intentionally generous.

---

## Combat Tracker controls

The module adds an **Active Time Battle** panel to the Combat Tracker.

GM controls:

- **Start ATB** — initialize gauges and start the clock.
- **Pause / Resume ATB** — pause real-time filling without ending combat. This
  is the manual/full pause; the player-turn pause happens automatically.
- **Roll Missing Initiative** — rolls the configured fallback formula only for
  combatants with no initiative value.
- **Reset ATB** — re-seed gauges from current initiative and stop the clock.

Per-combatant controls:

- **Lightning / Activate** — appears on READY combatants the current user can
  control. With default auto-activation, ready turns are called over
  automatically, but the button remains a manual override.
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

## External automation bridge

ATB publishes a small API for private or table-local automation modules that want
to let ATB own initiative while another module resolves an NPC's actions:

- `start(combat)` / `pause(combat, paused)` / `reset(combat)`
- `activate(combat, combatantId, { force: true })`
- `endTurn(combat, combatantId, { clearStrikes: true, silent: true })`
- `isRunning(combat)` / `activeId(combat)` / `isPrimaryGM()`

The intended contract is simple: ATB calls the actor over by setting the Foundry
active combatant; an external automation module may resolve that NPC; when it is
done, it should call ATB's `endTurn()` API instead of native `nextTurn()`. Native
turn-skipping stays blocked while ATB is running so gauges, laps, idle strikes,
and player pauses remain in sync. If no external automation is installed, ATB
keeps running with its own tracker controls.

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

### Active vs player-pause vs Wait mode

Default **Active mode** keeps gauges filling during NPC/default turns. This is
the answer to "everyone else checked out": the encounter still has forward
pressure while the GM resolves monsters.

Default **Pause ATB on player turns** changes only player-owned turns. When a
player combatant is active, the module keeps counting that player's decision
timer but stops everyone else's gauges until the player ends the turn or times
out. That is the Baldur-style compromise: NPCs go, player decisions pause.

**Wait mode** is the full traditional pause: gauges stop while anyone acts. It is
safer for rules-heavy games but less effective at solving dead air.
