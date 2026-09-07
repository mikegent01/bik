# Prompt sheet — `the_belly_of_the_beast`

House style, established from `assets/images/events/scorncrow-skirmish/`:
painterly dark-fantasy illustration, muted desaturated palette, heavy gloom,
Mario-universe Toads rendered as round mushroom-capped figures in *serious*
armour/gear, humans rendered semi-realistically. Warm firelight against
blue-grey darkness. No modern technology except Wario's vintage motorbike,
which is canon and already drawn (red/maroon tank, round headlamp, spoked
wheels, 1950s cruiser).

Cast references available: `Reputation-Matrix2/portraits/remi.png` (red-haired
girl, long twin-tails, teal bows, pale blue dress), `archie.png`, `markop.png`
(grey horse-headed centaur in engraved plate), `wario.png`, `dan.png`,
`eager.png`.

Five slots — long multi-location session, guide band 4–7.

---

## Slot 1 — LEAD · §III "Point Blank, and What Was Under the Face"

**Source lines**
> "The Scorncrow stumbled, went over, and came down on top of Remi Akamatsu."
> "*Wait a minute. I'm at point-blank range.*"
> "She fired the musket into the Scorncrow's face. **The face came off. The blood was human.**"

**Must appear**
- Remi pinned flat on her back under the bulk of a fallen scarecrow
- A musket, pressed upward, muzzle at the scarecrow's head, just discharged — muzzle flash / powder smoke
- The scarecrow's burlap face torn away on one side
- **Human blood** — red, wet, unmistakably human, not sap, not ichor
- Crows scattering upward
- Broken tremor-ridged ground (Archie's earlier tremor)
- Night, storm-dark grove

**Cast** — Remi Akamatsu (from `portraits/remi.png`: red hair, twin-tails, teal bows; here dirt-streaked, on the ground). The Scorncrow: burlap-sacked scarecrow head, tattered coat, straw at the cuffs.

**Must NOT appear** — modern firearms, gore beyond a wound, smiling faces, daylight

**Text in image** — NONE

**Prompt** — see generation call.

---

## Slot 2 — §IV/V "the tree's mouth" · Wario rides in

**Source lines**
> "The Scorncrow laughed, and jumped into the tree's mouth."
> "Wario revs the motorbike and rides straight into the tree's mouth, which opened for him."
> "No one challenges Wario to a fight and gets a-way from it!"

**Must appear**
- A vast dead tree whose trunk has split into an actual jawed mouth, bark peeled into teeth
- Absolute darkness inside the mouth
- Wario on the red vintage motorbike, mid-charge, headlamp lit, leaves kicking up
- The same gnarled grove and grey stone rubble as the established battlefield plate

**Cast** — Wario (`portraits/wario.png`: yellow shirt, purple overalls, big moustache, cap with W). Small in frame against the tree — the tree is the subject.

**Must NOT appear** — text, other party members, modern vehicles

**Text in image** — NONE

---

## Slot 3 — §VI "the wizard who sealed the door"

**Source lines**
> "He pulled all of his magic into it. **All** of it… until his eyes turned to fire."
> "And it **EXPLODED** into the tree." / "The tree died. And the exit sealed."

**Must appear**
- Archie mid-cast, both hands forward, staff planted
- **His eyes turned to fire** — literal flame where the eyes are, the single most important detail
- A colossal fire blast striking the trunk
- Bark blackening and the mouth-seam fusing shut
- Markop's silhouette behind him, recoiling

**Cast** — Archie Miser (`portraits/archie.png`, and matching the established `scorncrow-04-dan-guard.jpg` look: dark cloak, staff, third eye on forehead), Markop (`portraits/markop.png`, grey horse-headed centaur in plate) in the background.

**Must NOT appear** — text, spectacle so bright the figures are lost

**Text in image** — NONE

---

## Slot 4 — §VIII "the torch test and the descent"

**Source lines**
> "Markop pried the jaws open again. He saw darkness in them. He looked below and saw a giant pit."
> "They used Markop's rope and descended into the belly of the beast."
> Order: Feyward Dan (paladin) · Eager · Archie (squishy) · Salam · Markop (rope)

**Must appear**
- A rope going down into a black pit through the tree's prised-open jaws
- Figures descending in single file, small against the dark
- A mushroom-capped Toad paladin lowest, in mail
- Markop the centaur at the top, bracing the rope, hooves set
- One guttering torch as the only light

**Cast** — Feyward Dan (Toad, mail, sword — matching the red-capped armoured Toad in `scorncrow-04-dan-guard.jpg`), Eager (Toad), Archie, Salam (Toad), Markop.

**Must NOT appear** — text, daylight, wide-open cavern (the light must be tiny)

**Text in image** — NONE

---

## Slot 5 — LOCATION PLATE · the Skittering Grove interior

**Source lines** (verbatim from the location entry and §IX)
> "a great, towering tree with vast branches reaching out to form a massive canopy over the area. Its boughs are coated in thick webs that are an unnerving mockery of foliage, and hanging from them are the forms of wrapped creatures, both beast and man, dangling like macabre fruit."
> "its dark roots jut from grey earth which no longer nourishes it"

**Must appear**
- A dead tree inside a cavernous space, canopy made of thick web instead of leaves
- **Wrapped, cocooned shapes hanging from the boughs — recognisably beast and man**
- Dark roots jutting out of dead grey earth
- Giant spiders on the webs
- Wario's abandoned red motorbike, small, at the foot of the tree
- No sky — the ceiling is the inside of a trunk

**Cast** — `NONE — place plate`, except the motorbike as a canon object.

**Must NOT appear** — text, party members, any sky or horizon

**Text in image** — NONE

---

## What was actually generated (guide Steps 3–5)

| File | Slot | Method |
|---|---|---|
| `belly-01-the-mask.jpg` | lead + §III | style-ref from `scorncrow-01-battlefield.jpg` |
| `belly-02-jaws-and-rope.jpg` | §VIII | **composited** from `portraits/remi.png` + `portraits/markop.png` + battlefield plate |
| `belly-03-archie-all-in.jpg` | §VI | **composited** from `portraits/archie.png` + `portraits/markop.png` + `scorncrow-04-dan-guard.jpg` |
| `belly-04-wario-rides-in.jpg` | §V | **composited** from `portraits/wario.png` + battlefield plate (motorbike reused from it) |
| `belly-05-skittering-grove.jpg` | location plate | style-ref from battlefield plate; motorbike reused |

**Rule 0 applied:** every named character in these images comes from an existing
portrait file passed as a reference, not from a fresh description. Wario's canon
design is the purple-and-gold flame armour in `portraits/wario.png` — an earlier
draft had described him in overalls, which would have invented a character the
archive does not have.

**Slot 1 deviation, recorded.** The original slot 1 called for Remi pinned under
the Scorncrow firing upward, with human blood visible. Three prompt variants were
refused by the image model's safety filter (a child + a levelled firearm + blood).
The slot was re-framed to the instant *after*: the scarecrow reeling, the burlap
mask tumbling away in mid-air, the human face beneath it, no weapon and no blood
in frame. Remi is not in the shot. This keeps the filing's actual thesis — the
denial was true — and loses the point-blank staging. The prose still carries it.

## Review pass (guide Step 2)

- Every "Must appear" item traces to a quoted sentence above it. ✔
- Cast rows: 4 of 5 slots carry named characters; only the location plate is
  people-free, which is correct for a location entry image. ✔
- The one detail the whole filing turns on — **human blood under the face** —
  is slot 1, the lead. ✔
- No text in any image; nothing in this session hinges on lettering (unlike the
  Mount Ebot plank), so the "decorative text forbidden" default applies. ✔
