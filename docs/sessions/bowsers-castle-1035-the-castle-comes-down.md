# The Castle Comes Down — Session III of the Bowser's Castle coup chain

**GM run-sheet. 18 Harvestide, 1035 BF (`TC:1035-08-18/MAT`), Bowser's Castle, the
same night as Sessions I and II.** A kit for the table, not a filing: nothing
here is canon until it has been played and written up (event **last**, per
`docs/SESSION_FILING_PROCESS.md`). The Foundry side is the packet
[`Reputation-Matrix2/actors/bowsers-castle-1035/`](../../Reputation-Matrix2/actors/bowsers-castle-1035/README.md)
(27 actors: Side A — Bowser's Line, Side B — Fawthful's Forces, The Remnant at
the Track), importable in one click from the module's packet list.

> **The shape of the night.** Bowser is at the top of a castle that is being
> taken from the top down and the inside out. The garrison is going out through
> the lava tunnel at the bottom. Between the two is every floor of his house,
> and on every floor something that used to answer to him. He fights his way
> **down**. If the house lands on him, he gets up as something larger.

---

## 0. Where the record leaves everyone

Read `events.json` `bowser_throne_room_compromise` (Session I) and
`the_assault_on_bowsers_castle` (Session II) before the table. The short
version — and the facts this session must not contradict:

| Fixed by the record | Where it stands when Session III opens |
|---|---|
| The false Bowser Jr. (the Jester's act) let Fawthful's people inside; the garrison sheet shows altered routes and removed defenders (`prop_castle_betrayal_roster`). | Mimbus knows the routes. The Jester is loose in the smoke. The prop is in play. |
| Cackletta opened the battle; later Fawthful sucked her into the vacuum apparatus on his head "like removing a dangerous guest". | **Cackletta is inside the apparatus.** She comes out when Fawthful lets her, or when the seal is popped. |
| The supplied dragon broke the outer wall, failed once at the throne-room wall ("OWW! My head!"), then burst it open; swept two red-armband traitors off the building. | The throne room is open to the sky. The dragon is on the building and speaks Draconic. |
| Bowser carried Hammer Bros Fred and Ed into a side room; between them they asked about a self-destruct switch (the record does not say who asked first); Bowser refused to blow up his own castle. | The side room is where the session opens. |
| In the lower command room the switch plate reads SELF-DESTRUCT / DO NOT USE FOR LIGHTING / THIS ONE MAY BE THE LIGHTING over two identical red toggles (`prop_castle_self_destruct_switch_label`); Bowser closed the cover without touching either and ordered the troops out through the lava tunnel. | The plate is still there. Nobody knows which toggle is which. |
| Bowser ran into a hag who had built a self-destruct switch for "a green bean" and could have sworn it was the door; he pushed past her; its function was never confirmed. The record does not say where in the castle this happened. | The hag and her switch are still in the building. |
| Bowser ordered the retreat (`prop_bowser_retreat_order`): everyone, through the lava tunnel, toward Neo Bowser City; traitors barred from the route; "do not kill them — this is taking out the trash." | The evacuation is running. It is not finished. |
| Sir Frankfurt escaped the dragon's vacuum by shell-spin and fell fifty feet "into the unknown". | He is somewhere below. The record does not say he died. |
| Hammer Bro of the line held the west passage until the ceiling shook; when Bowser shouted for him to hold he shouted back that he had held, then retreated with the Goombas. | The west passage is a place where a ceiling is becoming a floor. |
| Magikoopas moved six Koopas three floors up, teleported the wounded behind the kitchens, delivered a cart as its wheels, and flew to Neo Bowser City with the message. | Some Magikoopas are still in the castle; some are gone. The message is sent. |
| Fawthful, at the broken gate: ruler, then god; "I control the capital… I control the big Bowser Castle"; claims Peach's Castle is already his. | He believes he has won. He is on the hoverpad. |
| A remnant — nine Goombas, two Koopas, a Hammer Bro behind a door — reached Toad Town Station; Koopa Killer Killa declared himself the boss; a Fawthful drone appeared; one Goomba walked toward it. | **Not this session.** Seeded in §9; run it later, on the train. |
| Bowser went back to the breach. | Start. |

Two names to keep straight at the table: **Fawthful** (this bean, 1035 BF,
`fawthful`) is not the older **Fawful** record (`fawful`). Do not resolve
that. And this is 1035 BF — five years before the campaign's present; nobody's
present-day status (Kamek's imprisonment, anyone's death) applies here.

---

## 1. Table setup

**Bowser** is the PC (`bowser`, level 8 in the XP ledger — his live sheet, not a
packet actor). Everything else at the table comes from the packet.

**Guest sheets for other players.** If more than one player is present, hand
out Side A's named figures — they are built to be played, not just run:

- **Sir Frankfurt** (CR 3) — the knight; Shell Vault gets him out of anything,
  including the dragon's intake; he speaks Draconic, which matters in §7.
- **Fred** (CR 2) — the demolitions mind; Demolition Eye reads the hag's switch
  truthfully.
- **Ed** (CR 2) — the steady one; a reaction that stops people pressing things.
- **Loyal Magikoopa** (CR 3) — Block Transport is the evacuation's engine.

**Side B is the GM's.** Fawthful, the dragon and Cackletta are the three sheets
to have open; the rest are placed by floor in §4.

**Omega Bowser** is a 4×4 token; keep it in the sidebar, not on the map, until
§8 happens. Read §8 before play so the swap takes thirty seconds when it comes.

**Props on the table:** the garrison sheet (`prop_castle_betrayal_roster`),
the retreat order (`prop_bowser_retreat_order`), and the hag's lever box (a
card with the d6 table from the Switch Hag's sheet, face down).

**Scale.** A level-8 Bowser with two or three CR 2–3 allies handles the floors
in §6 as written. Fewer allies: halve the generic counts. More players: add a
second clockwork column in §6.5 and a second drone.

---

## 2. The castle as a descent

The record names rooms, not floors. This sheet stacks them. Keep the stack; the
numbers are the GM's and can be renumbered without touching canon.

```
 7  THE THRONE ROOM          open to the sky; Fawthful hovers here; the throne is scorched
 6  THE GALLERY + SIDE ROOM  Fred and Ed; three Wounded Defenders; the long gallery over the hall
 5  THE EASTERN STAIR        the Magikoopa's post; the kitchens behind it (wounded already moved there)
 4  THE BARRACKS FLOOR       the west passage (ceiling), the barracks, the Hammer Bro of the line
 3½ THE COMMAND ROOM + STAIRS the switch plate (two toggles, three labels); the Switch Hag and her box
 3  THE INNER GATE           two portcullises, the red armbands, the chain-puller, a hypnotised lane
 2  THE LOWER BARRACKS       the traitor's passage to the inner wall; Mimbus; the Jester's curtain
 1  THE COURTYARD            the dragon's ground; the shell wall; the lower gate on the far side
 0  THE LAVA TUNNEL          the way out, toward Neo Bowser City; the Bob-omb crew
```

Each floor is a scene (§6). Between floors: a stair, a dropped gallery, a hole
the dragon made, or a Magikoopa. The dragon can reach any floor's outer wall
from outside; it cannot fit inside until the Omega makes a hole big enough, and
then it does.

**Light and sound.** Fire in the upper floors, smoke in the middle, green light
in the lower (Cackletta's work on the inner walls has left the stone warm).
The dragon is always audible; where it is audible *from* is the GM's weather
roll (§5).

---

## 3. The evacuation clock

The evacuation is the session's score. It is not abstract: it is **twelve
Wounded Defenders** on the map (`Wounded Defender`, CR 0, speed 10), placed as
the floors open:

| Floor | Wounded | Who can move them |
|---|---|---|
| 6 Gallery | 3 | Fred and Ed carry one each; the third needs a Hauler or a Transport |
| 5 Eastern Stair | 2 | the Magikoopa (Block Transport, six at a time) |
| 4 Barracks | 3 | the Hammer Bro of the line + two Loyal Goombas (Belt Hauler) |
| 2 Lower Barracks | 2 | whoever is still standing; Mimbus's passage is the short way |
| 1 Courtyard | 2 | under the dragon; the shell wall buys the lane |

**Tick:** a Wounded Defender reaching floor 0 (the tunnel mouth) is one tick.
A Block Transport that carries wounded or stores is one tick. **Tear:** a
Wounded Defender the dragon reaches, a hypnotised soldier killed instead of
broken, a traitor killed against the order. Count ticks on a visible die.

| Ticks at the end | What it means for the write-up (the GM's call, not the record's) |
|---|---|
| 10–12 | The garrison arrives at Neo Bowser City as a garrison. Someone counts them in. |
| 6–9 | Most of them. The ones who did not make it are named in the aftermath. |
| 0–5 | A rout. Neo Bowser City receives a message and a trickle. |

The clock does not stop for the Omega. The Omega is, among other things, a
very large distraction.

---

## 4. Side B — order of battle

Where Fawthful's forces stand when Bowser leaves the side room. The GM moves
them; nothing here is scripted.

| Where | Who | Behaviour |
|---|---|---|
| 7 Throne room (air) | **Fawthful** on the hoverpad, Cackletta inside the apparatus | Watches. Monologues. Does not commit until §6.1 forces it; follows Bowser down a floor behind, through the holes. Releases Cackletta at half HP or when bored. |
| Outside, everywhere | **The supplied dragon** | Weather (§5). Attacks walls, not doors. Looks for Bowser (Legendary: *Look Around*). Dislikes the bean. |
| 6 Gallery | 2 Masked Scouts chalking doors; 3 Cackletta Imps in the rafters | Scouts mark the gallery doors and run; imps giggle and harass whoever carries wounded. |
| 5 Eastern Stair | 1 Defected Magikoopa (red trim) among the loyal ones; 4 Hypnotised Soldiers coming up | The defected one offers a Transport. Where it sends people is §6.2. |
| 4 Barracks | 6 Hypnotised Soldiers in the passage; the ceiling | The lane. Coordination, not heroics. |
| 3½ Stairs | **The Switch Hag** | Neutral. Presents the box. Leaves if told to, slowly. |
| 3 Inner Gate | 3 Red-Armband Koopas, 2 Chain-Puller Goombas, 1 Defected Magikoopa | Drop the second portcullis behind Bowser; open the inner gate for the column below. |
| 2 Lower Barracks | **Mimbus** (half HP, prone), **the Jester** behind a curtain, 4 Clockwork Soldiers holding the passage | Mimbus crawls for the passage; the clockwork hold it; the Jester hides. |
| 1 Courtyard | 4 Clockwork Soldiers, 2 Corrupted Beanbean Guards, 4 Imps, 1 Fawthful Drone; **the dragon** arrives here for §6.7 | Fawthful's own column, formed up where the shell wall was. |
| 0 Lower gate / tunnel | 2 Red-Armband Koopas trying to get in | "You cannot come." |
| Toad Town Station | the remnant, Killa, a drone | **Not tonight** (§9). |

Fawthful's forces open doors as a bonus action within 60 feet of him (*Half the
Castle Already*). This is why the column moves faster than it should.

---

## 5. The dragon as weather

Roll a d6 at the start of every scene (every floor) and whenever the table
gets loud:

| d6 | The dragon… |
|---|---|
| 1–2 | **…hits this floor.** Wall Breaker on the outer wall of the room Bowser is in: a 15-foot section goes; DC 16 Dex, 4d10, failures buried. Then its d6: on a 1–2 "OWW! My head!" (stunned a round). **A buried Bowser is the Omega trigger (§8).** |
| 3–4 | …is heard above or below — stone falling two floors away, a scream, a wing. The next scene's roll is at +1. |
| 5–6 | …is in the courtyard, playing with something. Floor 1 gets harder; this floor is quiet. |

The dragon will not attack Fawthful and will not help him unless told. It is
under contract and it has said who the target is. **Anyone who speaks Draconic
to it** (Sir Frankfurt; Bowser if the player wants to try in Common and eat the
disadvantage) gets *Supplied, Not Loyal*: DC 17 Persuasion, advantage for a
better offer than the contract. Success does not turn it. Success buys a
question instead of a bite — and the question is always some version of *why
should I not finish the job?*

---

## 6. The scenes, top to bottom

Read-aloud text is the GM's own; nothing below is a transcript quote. Quote
the record only where the record is quoted (marked ❝).

### 6.0 The side room (floor 6) — open

Fred and Ed are under Bowser's arms. The wall behind them is open. The argument
is already running: ❝You want me to blow up my own castle?❞ was the side room's
last line in Session II. Pick it up one breath later.

- Fred wants the switch found and used. Ed wants to know who built it. Bowser
  has already refused. **Let the refusal stand** unless the player reverses it
  in play — the record's line is that he *refused the uncertain self-destruct
  switch, and returned to the breach*, and changing that is a decision for
  the table, not the kit.
- Three Wounded Defenders in the gallery outside. Two Masked Scouts on the far
  door, chalking it (DC 12 Investigation to spot the glyph; smudging it costs
  an action and stops the column using that door at speed).
- First weather roll.

**Choice point:** Fred and Ed can be sent *up* — to the throne room, to watch
Fawthful — or kept *with* Bowser. Sent up, they see Cackletta's shape moving in
the apparatus's glass and come back with that information in §6.2. Kept, they
carry two of the three wounded.

### 6.1 The gallery and the guest (floor 6 → 7 air)

Fawthful does not come down. He hovers at the broken edge of the throne-room
floor above the gallery and talks: the capital, the big castle, ❝simple❞. He
is enjoying this. The point of the scene is that **Bowser cannot reach him** —
not from the gallery, not with a jump — and he knows it.

- Mustard Monologue on Bowser (DC 16 Wis, Bowser at disadvantage). If it
  lands, Bowser's next round is about the bean and nothing else, which is how
  the imps get at the wounded.
- Three Cackletta Imps drop from the rafters onto the carriers (Giggle in
  Numbers DC 10).
- Fawthful does not use Inhale here unless a Small or Medium creature comes to
  the edge. If Fred or Ed does, he tries. Shell Vault / Hop / the Magikoopa's
  Blink get them out; being swallowed is survivable (§10) and puts them in
  the dark with Cackletta, which is a scene in itself.
- **If anyone hits Fawthful hard** (a thrown hammer from the gallery, Bowser's
  fire breath up through the hole), he does not fight: he laughs, screams
  *consequences* at the dragon (Reaction) — and the dragon hits the gallery's
  outer wall. That is a forced weather 1–2. Omega trigger lives here.

Fawthful leaves the scene when Bowser does, a floor behind, always one floor
behind, always talking.

### 6.2 The eastern stair (floor 5)

The loyal Magikoopa's post. Six Koopas went up from here three floors in a
blink; the wounded went behind the kitchens. The scene is logistics under fire.

- **Two Magikoopas on the landing.** One is loyal. One has a strip of red cloth
  on the hem (DC 10 Perception before it acts). Both offer Block Transport.
  The defected one's *Reversed* Transport sends a willing loyalist "to the
  wrong floor" — the GM owes that creature an encounter: it arrives alone on
  floor 2, next to Mimbus, four rounds before anyone else does.
- **Four Hypnotised Soldiers** come up the stair in Fawthful's cadence. The
  lane: shell wall from the Loyal Koopas (two retreated Koopas = half cover,
  a low wall), Goombas at the legs. Two loyal creatures grappling or shoving
  the same soldier in one round breaks it; it rises a Loyal Koopa Troopa,
  frightened and grateful. Killing one is a tear.
- **Cackletta's Countercackle** is the risk nobody sees coming: she is inside
  the apparatus and cannot use it. Say nothing. The first Block Transport after
  she comes out (§6.7) is the one that fails.
- Two Wounded Defenders behind the kitchens. One Transport = both = two ticks,
  d6 for the wheels.

### 6.3 The west passage (floor 4)

He had held — he shouted it back when Bowser shouted for him to hold. The
Hammer Bro of the line is at the mouth of the west passage
with two Loyal Goombas and three Wounded Defenders, and the ceiling is coming
down in instalments.

- The passage is 60 feet of corridor with a ceiling that fails in 15-foot
  sections: at the end of each round roll a d6 per section still standing; on
  a 1 it falls (DC 14 Dex, 3d10, buried on a failure). The far end is the
  barracks stair down.
- **Six Hypnotised Soldiers** are in the barracks beyond, between the passage
  and the stair. Same lane, bigger.
- The Hammer Bro's *Knows When to Leave* is the scene's lesson: he will not
  stay when the passage stops being a position, and he will take the Goombas
  and the wounded with him. He will say so to the king. He said so to the
  king once already.
- **This is the natural place for the Omega** if the table wants it early: a
  weather 1–2 here means a Wall Breaker on a corridor that is already failing.
  Bowser buried under the west passage, with the Hammer Bro shouting that he
  had held — that is the picture. §8.

### 6.4 The command room and the stairs — the hag (floor 3½)

The record puts the labelled switch plate in the lower command room — two
identical red toggles under a metal cover, three labels that disagree — and
has Bowser close the cover and order the tunnel. It does not say *where* he
ran into the hag. This kit puts both on the same half-floor: the command room
opens onto the stairs between the barracks floor and the inner gate, and the
Switch Hag is sitting on her box at the top of them, in sight of the plate.
Whether her box and the plate are the same mechanism is your call; the sheet
rolls the same d6 for either.

- She is **neutral**. She attacks nobody. She has been told her duties are
  relinquished and she has not left because she wants to see whether it
  worked.
- *Who Hired You*: "a green bean" — that much is record. The rest is yours to
  improvise; a suggestion: by letter, paid in advance, with a drawing of where
  the wires should go that she did not entirely follow, and a vacuum drawn in
  the margin.
- **The box, or the plate.** Anyone can throw the lever or either toggle.
  Roll the d6 on her sheet in the open: 1–2 a door or portcullis somewhere opens or drops (pick the inner
  gate's second portcullis — it matters in §6.5); 3 a bell below; 4 nothing;
  5 the lower gate collapses (floor 1's far exit becomes rubble; the tunnel
  mouth is still reachable through the courtyard); **6 the countdown** — three
  rounds, then the floor everyone is on gives way, 6d10, buried on a failure.
  Omega trigger.
- **Fred's Demolition Eye** (DC 12 Investigation) tells him truthfully what
  the lever does *this time* — roll the d6 secretly first, then let him read
  it. **Ed's reaction** gives whoever throws it advantage on the first save.
  This is the pay-off for carrying them down six floors.
- If nobody throws it, the hag throws it herself when the dragon next hits
  the castle. She wants to know.

### 6.5 The inner gate (floor 3)

Two portcullises, a gate, and the people who opened it. Three Red-Armband
Koopas, two Chain-Puller Goombas, one Defected Magikoopa. Below, coming up
through the gate they opened: Fawthful's column (§6.6's clockwork are the
front of it).

- The Chain-Pullers look loyal (DC 13 Insight, advantage if the garrison sheet
  has been read). The first one drops the second portcullis **behind** Bowser
  the moment his last ally is through — 2d10 and restrained for anyone under
  it, and the group is cut in half. The hag's d6 = 1–2 in §6.4 may already
  have opened or dropped this portcullis; play it as rolled.
- **Bowser's order stands: do not kill the traitors.** Nonlethal to 0 and a
  red-armband surrenders and names one door and who told them to open it
  (the answer is Mimbus, every time). Killing one is a tear and a line in the
  write-up.
- The Defected Magikoopa Blinks away at half HP. It is the one who tells
  Fawthful which floor Bowser is on; Fawthful arrives at the gate one round
  later, hovering over the portcullis, delighted.
- **The column** comes through the open gate from below: 4 Clockwork
  Soldiers in step (Formation Step), 2 Masked Scouts ahead of them chalking.
  The clockwork do not retreat and do not think. Bowser's fire breath in a
  gatehouse is the right tool; the gatehouse is also where the stone is
  thinnest. Weather roll at +1.

### 6.6 The lower barracks — the traitor's passage (floor 2)

The passage from the lower barracks to the inner wall that ❝only a traitor
could have opened from inside❞. It is open. Mimbus is crawling toward it.

- **Mimbus** at half HP, prone, 30 feet from the passage mouth, with the
  garrison sheet under his arm. He is the sheet to capture. Shield Burst
  protects whoever Bowser swings at first; Quiet Operator means the table may
  not notice him until the clockwork are dealt with (DC 14 Perception at the
  start of a turn while the clockwork are loud). At 15 HP, *Exit, Quietly* —
  invisible for a round, moving. He does not leave the castle. Where he goes
  is the passage.
- **Four Clockwork Soldiers** hold the passage mouth shoulder to shoulder.
  Wind-Down gears when they drop (DC 12 Dex, 1d6).
- **The Jester** is behind the curtain at the back of the barracks. *Someone
  Else's Face* once more, if the table lets him talk: he performs the king,
  badly. Bowser has advantage on the Insight (he has been fooled once tonight).
  At half HP the Jester surrenders at length: which doors answer to Fawthful,
  where Mimbus's passage comes out (the inner wall walk, above the courtyard),
  what the missing royal seal was meant to make legitimate (Fawthful's
  "coronation" — he has drafted it).
- Two Wounded Defenders here. The passage is the short way to the inner wall
  and down to the courtyard; the stair is the long way and is on fire.

**If Mimbus is captured** the session has its prisoner, and the record's
*two faces of the operation* line gets a sequel. If he reaches the passage,
he is at Fawthful's side for the end, as the record has him.

### 6.7 The courtyard (floor 1) — the set piece

Everything arrives here. The dragon lands (if it has not already come through
a wall). Fawthful hovers over the lower gate. The column's rear — 4 Clockwork
Soldiers, 2 Corrupted Beanbean Guards, 4 Imps, a Fawthful Drone in a corner,
*Waiting* — is formed up where the shell wall was. Two Wounded Defenders are
behind the barracks door. The tunnel mouth is across the yard.

Run it in three movements:

1. **The lane.** The Loyal Koopas (as many as are left; six if the GM is kind)
   Lock and Roll a shell wall across the yard, the way they did in Session II.
   The dragon cannot melee through it at prone or Small creatures. The Belt
   Haulers go under its jaw. Every carrier that reaches the tunnel is a tick.
2. **The guest.** Fawthful is below half, or bored, or Bowser has thrown
   something at the hoverpad (a ground pound within 10 feet, DC 15 Dex, and he
   is on the ground, prone, furious, and *reachable*). **The Guest Comes Out:**
   Cackletta, full HP, acts on Fawthful's count minus 10. Her first Countercackle
   fails the next Block Transport. Her Green Folded Light ignores the shell
   wall's cover and cracks the yard. Hex of the Hall on the tunnel mouth is the
   move that makes the table hate her.
3. **The parley or the breath.** Sir Frankfurt — if he is in play, or if the
   player of a guest sheet wants to find him here (he fell fifty feet; the
   courtyard is where fifty feet ends) — speaks to the dragon in Draconic.
   DC 17 Persuasion, advantage for a better offer than the contract. On a
   success the dragon asks Bowser, through Frankfurt, *why it should not finish
   the job*. Bowser's answer is the player's. A good one holds the dragon out
   of the fight for the rest of the scene; it will not fight for him. On a
   failure: Fire Breath, 60-foot cone, 12d6 (Bowser is immune to the fire and
   not to the embarrassment), and the harness: Vacuum Intake on the lane.

The dragon's **Wall Breaker on the courtyard wall** — the inner wall, with
Mimbus's passage on top of it — is the biggest Omega trigger in the kit. When
the GM wants the castle to land on the king, this is the wall.

### 6.8 The lower gate and the tunnel (floor 0) — the end

The tunnel mouth. The Bob-omb crew. The last carriers. Two Red-Armband Koopas
at the lower gate trying to be let in: ❝You cannot come.❞ The dragon holds the
outer approach beyond the gate, exactly as the record has it.

- **Who goes last.** The Hammer Bro of the line will not go until the wounded
  are through. Fred and Ed will not go without Bowser. The Loyal Magikoopa has
  one more Transport in it if *A Small Tear* has recharged it, and it knows what
  that means.
- **Seal the Tunnel.** A Bob-omb at the mouth collapses it behind the last body
  through: ten minutes of digging or a Wall Breaker to open it again. The
  Bob-omb does not come. If a player wants to carry it instead and set it in the
  gate passage for the dragon — Volatile; fire damage sets it off — the yard is
  the place to find out whether a corridor can land on a dragon.
- **Fawthful at the broken gate**, one last time, with Mimbus beside him if
  Mimbus made it, saying what the record has him say about kings and gods. He
  does not follow into the tunnel. He has a castle to be crowned in.
- **The traitors at the gate** beg to be let through. Bowser's order says no.
  The dragon's wings said no last time. What Bowser says this time is the
  player's, and it is a line for the write-up either way.

End the session on the tunnel, the count of ticks, and the dragon's shadow on
the outer approach. Do not resolve Neo Bowser City; that is the next filing.

---

## 7. Fawthful's side, as a side

The brief asked for both sides as content. Side B is not a list of monsters; it
is an operation with a plan, and the GM should run it as one:

1. **Fawthful** wants to be *seen* winning. He positions above and behind,
   never in reach, and he narrates. His Legendary Resistances are for the two
   things that would make him look bad (a knock off the hoverpad, a Mustard
   bounced back). He releases Cackletta only when he needs her, because she is
   a dangerous guest and he knows it.
2. **The dragon** is weather with an opinion. It was sent to kill Bowser. It
   has been insulted by its employer in front of the enemy. It will take a
   better offer, and it will not take orders.
3. **Cackletta** wants out, and then wants the room. She does not coordinate
   with Fawthful once she is out; she coordinates with her imps. Soul Flight
   means she is not a kill; she is a problem for a later year.
4. **Mimbus** is the plan's memory. Capture him and the operation loses the
   routes. He knows that, which is why *Exit, Quietly* exists.
5. **The traitors** are the cheapest thing on the board and the most
   expensive to kill (the order; the tears). They open doors. They beg.
6. **Fawthful's own** — clockwork, scouts, Beanbean guards, imps — are the
   column that turns a raid into an occupation. They do not retreat because
   nobody left them the option.
7. **The Switch Hag** is on this side only because the bean paid. She is the
   joke the castle was already full of.

Fawthful's victory condition is not Bowser's death; it is **Bowser leaving by
the tunnel while Fawthful is seen on the throne**. If the table ends with that
picture, Side B won the night and the record of Session II already says so.
The session's question is what it cost him — a dragon talked out of its
contract, Mimbus in a sack, Cackletta loose, a castle with no floors.

---

## 8. Omega Bowser — the crush and the swap

> "maybe it would be cool if he's crushed and we switch to an Omega Bowser
> sheet that is big" — the brief. Here is the rule; the sheet repeats it.

**Trigger.** Bowser (the PC) would be reduced to 0 hit points by bludgeoning
damage from a collapsing floor or wall, a falling tower, or the crush of a
Huge or larger creature. In this kit that is: the dragon's **Wall Breaker**
(any floor), the west passage ceiling (§6.3), the Switch Hag's **6** (§6.4),
the gatehouse under a weather 1–2 (§6.5), the inner wall in the courtyard
(§6.7). Being buried is the condition; the damage that drops him is the
trigger. The GM *may* call the Omega. The player may refuse it (then Bowser is
unconscious under the rubble, and the garrison digs — three rounds, DC 14
Athletics — while the dragon looks for him).

**The swap (thirty seconds).** Right-click Bowser's token → *Transform* → drop
`Omega Bowser (1035 BF)` on him, keep mental scores; or swap the token for the
4×4 Omega and run the Omega sheet beside his. Omega starts at **full hit
points (247)** in the space where Bowser was buried, with his own two
Legendary Resistances and three legendary actions. The rubble heaves. The
thing that stands up does not fit in the room — *Too Big for the Castle*: every
10 feet he moves inside, the walls and floor he passes through give way (DC 16
Dex, 2d10 to Medium or smaller creatures in them). He makes his own holes.

**Ten rounds.** Omega Fist (4d8+8, reach 15, push 15 and prone, DC 20), Bite
with fire, Magma Breath (14d6, line or cone, recharge 5–6), **Castle-Shoulder
Throw** (a piece of his own castle, 8d10 in a 20-foot radius, knocks a flier
down — the hoverpad, the dragon), Roar as a legendary action (DC 17 frightened;
Fawthful at disadvantage, for once not the loudest thing in the room). CR 14:
for ten rounds he outclasses the dragon (12) and Fawthful (9) **together**.
That is the point of being crushed by your own castle.

**Coming back.** At the end of round ten, or at 0 Omega hit points: Bowser is
back in the nearest free space, prone, with **1 hit point + his Constitution
modifier for each round the Omega lasted**, and one level of exhaustion. What
Omega was holding falls free. Nothing else carries back — no healing, no
spent resources restored, no Omega damage remembered.

**What it does to the night.**

- The castle stops being a descent. Omega does not take stairs; he takes
  floors. Three rounds of Omega movement can put the party in the courtyard
  from the barracks. Do the evacuation clock the favour of letting the wounded
  ride the hole.
- The dragon stops being weather. It is now the smaller of two monsters in a
  courtyard, and its Legendary *Look Around* has found what it was looking
  for. The contract says fight. The dragon's self-interest says talk. Let
  Frankfurt's Draconic do the work if the table wants a dragon walking away.
- Fawthful loses the one thing he has, which is the view. Castle-Shoulder
  Throw knocks the hoverpad down. A Fawthful on the ground, prone, with a
  Gargantuan Bowser's shadow over him, releases Cackletta immediately and
  screams *consequences* at everyone.
- The castle does not survive ten rounds of this intact. **That is fine.**
  Session II's record already has Fawthful claiming a castle; whether what he
  is crowned in still has floors is the table's to decide and the write-up's
  to record.

**He is not a tool for the rest of the campaign.** The Omega is one night's
rule for one crush. Write the rule into the event when it happens; do not put
it on Bowser's live sheet.

---

## 9. The remnant at the track — seed only

The brief was explicit: the Goomba who went to the train gets his sideplot
**later**. Do not run Toad Town Station this session. Seed it:

- **During §6.2 or §6.8**, a Loyal Magikoopa (or a returning scout) brings
  word: a group that broke away in Session II reached Toad Town Station. The
  messenger sent to tell the king they survived the dragon did not come back.
  That is all anybody knows.
- **At the tunnel**, if a player asks where the others went: "the station, and
  there is no train." Leave it.
- **In the write-up**, note the thread open. The packet's *Remnant* folder —
  **Koopa Killer Killa** (CR 4, the boss nobody appointed, +1 to the remnant
  while no king is in sight) and **the Goomba who took his chances** (1/8, *Takes His
  Chances*, *Cheese Route*) — plus the **Fawthful Drone** (*Watcher*: the next
  patrol arrives 1d4 rounds after it sees you) is the opening encounter of that
  session when it comes: nine Goombas, two Koopas, a Hammer Bro behind a door,
  a self-appointed boss, and a machine in the next room that one Goomba has
  already walked toward.
- The articles are filed (`koopa_killer_killa`,
  `goomba_who_took_his_chances`) with their status left exactly where the
  record leaves them. The train is not written.

---

## 10. Rules cheat-sheet

| Thing | Rule |
|---|---|
| **Buried** | Restrained and prone. Escape: the creature or an ally spends an action on DC 14 Str (Athletics). A buried creature can still breathe, roar and refuse the Omega. |
| **Falling 50 ft** | 5d6 bludgeoning, prone. Sir Frankfurt: half, not prone (*Lands in His Shell*). This is how he is alive in §6.7 if the table wants him. |
| **Swallowed** (Fawthful's apparatus / the dragon's harness) | Blinded, restrained, total cover from outside, 2d6 at the start of each turn. Out: DC 16 Athletics as an action; Shell Vault; or 15 damage to the inside in one turn pops the seal (10 breaks the dragon's harness for good). Only Medium or smaller can be swallowed. Bowser cannot, whatever Fawthful says. |
| **Hypnosis** | Two or more loyal creatures grapple / shove / shell-knock the same soldier in one round, or nonlethal to 0 → the soldier is loyal from its next turn. Killing it only kills it (a tear). |
| **Traitors** | Nonlethal to 0 → surrender, one door, one name (Mimbus). Killing one is a tear and a line. |
| **Block Transport** | Six Small/Medium (or one Large, or one cart) + the Magikoopa, 300 ft to a known spot. d6 = 1 → one piece of baggage arrives as its wheels. One tick if it carried wounded/stores. Cackletta's Countercackle stops it (3/day, once she is out). |
| **Shell wall** | Two adjacent retreated Koopas: half cover behind them; a Huge creature cannot melee through them at prone/Small targets. Lock and Roll moves the line 10 ft as a reaction to an order. |
| **The switch** | d6 on the hag's sheet: 1–2 door/portcullis, 3 bell, 4 nothing, 5 lower gate 4d10 sealed, 6 three-round floor collapse 6d10 buried. Fred reads it truthfully (DC 12); Ed gives advantage on the first save. |
| **Weather** | d6 per scene: 1–2 Wall Breaker here (4d10, DC 16, buried; dragon's own d6 1–2 = stunned), 3–4 heard (+1 next), 5–6 courtyard. |
| **Omega trigger** | Bowser to 0 by crush/collapse bludgeoning → GM may call Omega (§8). |
| **Nonlethal** | Melee attacker's choice at 0 HP, as 5e. Hammers count. Fire does not. |
| **Omega's holes** | Every 10 ft of Omega movement inside: those squares are difficult terrain; DC 16 Dex, 2d10 to Medium or smaller creatures in them. Wounded can be carried through a hole as through a door. |

DCs at a glance: switch 12 · glyph 12 · chain-puller tell 13 · Mimbus
unnoticed 14 · buried escape 14 · hoverpad knock-off 15 · hag's floor 15 ·
Inhale/harness 16 · Wall Breaker 16 · Mustard 16 · dragon parley 17 · dragon
breath 18 · Omega Fist push 20.

---

## 11. After the table — filing

In the order `docs/SESSION_FILING_PROCESS.md` gives, and **the event last**:

1. **Locations.** `bowsers_castle` gets what the night did to it (floors, the
   tunnel sealed or not, the throne). No new location unless the table made one.
2. **Characters.** Status lines, in the record's tense, for: `bowser`
   (the Omega, if it happened, as one night's fact — not a sheet change),
   `fawthful`, `mimbus` (captured / escaped), `cackletta` (out / still inside /
   fled as a shade), `thejestergoomba` (caught / lost again), and the seven
   filed for this session — `sir_frankfurt`, `hammer_bro_fred`,
   `hammer_bro_ed`, `the_supplied_dragon`, `the_switch_hag`,
   `koopa_killer_killa` and `goomba_who_took_his_chances` (the last two
   **unchanged** unless the station was somehow played). Name the dead.
3. **XP.** `xpAwards[]` on the event only; the ledger stays authoritative.
   Bowser is level 8 (34,000 threshold behind him; L9 at 48,000).
4. **The event.** `the_castle_comes_down_1035_bf` or whatever the table names
   it, dated `TC:1035-08-18/MAT`, `sessionOrder` after
   `the_assault_on_bowsers_castle`, `historical: true`, with the tick count in
   the outcome and the Omega — if it happened — under its own heading with the
   rule as played. Direct quotes only from the transcript.
5. **Exhibits / investigation.** The garrison sheet and the retreat order
   already exist; the hag's letter (if recovered) and Mimbus's ledger (if
   captured) are new exhibits. The coup chain's case file gets the night.
6. **Artifacts.** `tools/build-chatroom.py`, `tools/build-character-sheets.py`,
   `tools/check-all.py`. If the Omega was played, the sheet's biography
   should cite the event id — change the generator, re-run, `--check`.

Nothing in this document is filed. It is what the table starts from.
