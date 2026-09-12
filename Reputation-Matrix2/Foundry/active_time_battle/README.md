# Active Time Battle for Foundry VTT

A drop-in Foundry VTT module for combats where the table should keep moving but
player turns should still feel fair. It replaces the "everyone waits for the
current turn" problem with visible ATB gauges: combatants become **READY** as
real time passes, initiative changes how fast the gauge fills, NPCs can be
called over automatically, NPC/GM turns can pause the gauge clock while the GM
resolves them, and player-owned turns run on a live five-minute decision timer
without letting the whole initiative pile up behind one slow decision.

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
4. An activated NPC/default combatant keeps the `90` second spotlight setting for
   worlds that want an NPC timeout, but **Pause ATB on NPC turns** is on by
   default: while the GM/NPC turn is active, other gauges and the NPC countdown
   are held until **End ATB Turn**.
5. A player-owned combatant gets `300` seconds — five minutes. The player's
   timer is live by default, but **Pause gauges on player turns** also holds the
   other gauges so a long player choice does not make everyone hit READY at once.
6. If a live active timer expires, timeout policy fires:
   - **Delay**: drop the actor back to a configured ATB percent, so they cycle
     back soon but do not block the fight.
   - **Guard / Dodge**: spend the turn defensively and reset the gauge.
   - **Escalate**: delay once, then Guard after repeated idle timeouts.
7. If Foundry's global game pause is on — or the GM presses **Pause ATB** — the
   entire ATB clock stops: gauges, active timers, and warnings all wait until the
   game/ATB resumes.

That is the incentive structure: NPCs do not have to race the timer while the GM
resolves them, players do have a visible decision clock, and one slow player does
not load the whole table to READY in the background. being absent does not freeze the table forever; repeated absence still costs turns through the timeout policy.

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
- NPCs can auto-activate, and their active turns pause the ATB clock by default
  while the GM resolves them.
- Player turns can auto-activate too, but the player gets a separate five-minute
  live decision timer while other gauges pause, preventing the "everyone loaded
  up at once" burst after a long decision.

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
| NPC spotlight seconds | `90` | Kept as a configurable fallback; default NPC-turn pause holds it. |
| Player decision seconds | `300` | Five minutes for a real player turn instead of a 90-second scramble. |
| Player warning seconds | `60` | Gives a fair one-minute warning before timeout handling. |
| Pause ATB on NPC turns | On | Gauges and the NPC timer wait while the GM resolves an NPC. |
| Pause gauges on player turns | On | The player timer stays live, but other gauges pause so the whole table does not load up at once. |
| Timeout result | `Delay, then Guard` | Forgiving once, firm after repeated idle. |
| Delay fallback percent | `72` | The actor comes back soon, but loses the immediate spotlight. |
| READY overflow cap | `60` | Waiting helps priority, but cannot stockpile infinite turns. |
| Tracker visual style | `Bars` | Most readable; automatically becomes Compact at 50+ combatants. |
| Queue preview size | `8` | Shows who is READY / almost READY at a glance without listing everyone. |
| Large encounter compact threshold | `50` | Forces compact tracker visuals and a +more queue summary for 50+ initiatives. |
| Native next-turn ends active NPC | On | Lets automation that calls Foundry's native next-turn finish an active NPC's ATB turn. |
| Wait mode | Off | Leave off unless you want other gauges paused while anyone acts. |

If your table needs more conversation per player turn, raise the player decision
timer above `300`; the default is intentionally generous. If you want other gauges
to keep filling during player turns, turn **Pause gauges on player turns** off. If
you want NPC turns to time out automatically, turn **Pause ATB on NPC turns** off.

---

## Combat Tracker controls

The module adds an **Active Time Battle** panel to the Combat Tracker. Active
turns use an inline countdown timer in that panel; there is no modal turn popup.

GM controls:

- **Start ATB** — initialize gauges and start the clock.
- **Pause / Resume ATB** — pause real-time filling and active timers without
  ending combat. Foundry's global pause does the same automatically.
- **Roll Missing Initiative** — rolls the configured fallback formula only for
  combatants with no initiative value.
- **Reset ATB** — re-seed gauges from current initiative and stop the clock.

Per-combatant controls:

- **Lightning / Activate** — appears on READY combatants the current user can
  control. With default auto-activation, ready turns are called over
  automatically, but the button remains a manual override.
- **Hourglass / End ATB Turn** — appears on the active combatant for the GM and
  the actor owner.

The panel's active-turn timer also has an **End ATB Turn** button for whoever can
control the active combatant. The meter tooltip shows ATB percent, speed
multiplier, and initiative value.

---

## Visual styles and large initiatives

The setting **Tracker visual style** gives three table looks:

| Style | Use when | What it looks like |
|---|---|---|
| **Bars** | Default / easiest to read | Full-width ATB bars under each combatant with READY/percent text and speed multiplier. |
| **Classic badge** | You want an old-school ATB feel | A chunky right-side capsule, closer to classic Final Fantasy battle UI. |
| **Compact** | Large NPC fights | Thin low-noise bars plus a two-column queue preview. |

The panel also has a **queue preview**. It shows the next few READY or almost-ready
combatants with tiny progress fills and ETA labels. READY chips owned by the
viewer are clickable, so an attentive player can activate from the top of the
tracker without hunting through the list. Once someone is active, the same panel
shows a live countdown bar and remaining time instead of opening a popup.

For very crowded initiatives, the module is designed around 50+ combatants:
combatant updates are batched, tick renders are coalesced instead of forcing a
full tracker rebuild per combatant, the queue preview shows only the configured
front of the line, and the panel adds a `+more in initiative` summary for the
rest. At the default threshold of `50`, the tracker automatically uses Compact
visuals even if the normal style is Bars or Classic.

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
- Native Foundry next-turn changes are blocked while ATB is running, except that
  the default NPC bridge translates a native next-turn during an active NPC into
  **End ATB Turn**. That lets automation finish NPC turns while ATB keeps gauges,
  idle strikes, and laps correct.
- Actor/combatant names are inserted into tracker UI as text nodes and escaped
  in chat HTML.
- The combat tracker panel, active timer, and queue preview are built with DOM
  nodes instead of string-building for user-facing names.
- Foundry's global game pause anchors the ATB clock so gauges and active timers
  do not jump ahead when the game is unpaused.

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
turn-skipping stays blocked for normal manual jumps, but the default
`nativeNpcTurnEndBridge` translates native next-turn during an active NPC into an
ATB end-turn. That gives automation modules a safe handoff without requiring the
private module to call ATB directly. If no external automation is installed, ATB
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

### Active vs NPC-pause vs player pressure vs Wait mode

Default **player-pressure mode** keeps the active player's timer running during
player-owned active turns, but pauses other gauges. The player still has to worry
about the five-minute clock; the rest of the initiative does not silently load to
READY while one person thinks.

Default **Pause ATB on NPC turns** changes only NPC/GM-controlled active turns.
When an NPC is active, the module holds other gauges and the NPC timer until the
GM or automation bridge ends the turn. NPCs are not the ones racing the clock.

**Foundry pause** and the module's own **Pause ATB** button are stronger than both
of those modes: they freeze gauges and active timers for everyone until resumed.

**Wait mode** is the full traditional pause for gauges: other gauges stop while
anyone acts. Player active timers still count down unless Foundry/ATB is paused.
If you want the table to keep filling gauges during player turns, turn **Pause
gauges on player turns** off.
