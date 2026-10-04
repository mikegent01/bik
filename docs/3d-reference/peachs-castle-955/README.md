# Peach's Castle, 955 BF — Hunyuan 3D reference packet

Image inputs for a session set **inside Peach's Castle while Princess Peach
still reigned** — the Toadstool court of 955 BF, the year of the assassination
(`highsun_1_955_bf_the_day_of`). Everything here is a **production design** on
a plain studio backdrop for mesh generation; nothing is event-state art and
nothing claims a named archive character except the two plates that say so.

Every sheet has already been **cut and cropped** by
[`tools/splice-sheet-cutouts.py`](../../../tools/splice-sheet-cutouts.py)
(per-cell crop + U²-Net background removal → centred, alpha-trimmed,
square PNG). Feed Hunyuan one cutout (or one plate) at a time; never the sheet.

## Full-body plates (the three characters)

Each character comes as a square backdrop-kept **plate** (the form the Bowser /
Fawful / Cackletta bases used) and a transparent **cutout**. Use whichever your
Hunyuan session takes better; they are the same picture.

| Character | Plate | Cutout | Construction points to preserve |
|---|---|---|---|
| **Princess Peach** — alive, reigning | [peach-plate.png](peach-plate.png) | [peach-cutout.png](peach-cutout.png) | Golden-blonde hair with side bangs, small gold crown, classic pink gown with deeper-pink hip panels and hem, sapphire brooch, long white gloves, blue earrings, pink heels, folded pink parasol. **Not** the archive portrait's apparition (`portraits/princess_peach.jpg` is the dead Peach of Floor 3B) — no decay, no torn fabric. |
| **Toadsworth the Elder** — Royal Chamberlain | [toadsworth-elder-plate.png](toadsworth-elder-plate.png) | [toadsworth-elder-cutout.png](toadsworth-elder-cutout.png) | Built from the archive portrait `Reputation-Matrix2/portraits/toadsworth_sr.jpg`: pale beige-grey cap with cream spots, round spectacles, large white moustache, charcoal cloak with a round brooch. Added below the portrait: purple waistcoat with gold buttons, brown bow tie, white gloves, mushroom-handled cane, pocket watch. In 955 he is the Chamberlain, not yet Regent. |
| **Captain of the Palace Guard** — generic officer | [guard-captain-plate.png](guard-captain-plate.png) | [guard-captain-cutout.png](guard-captain-cutout.png) | Same livery as the guard sheets in officer grade: plumed silver kettle helm over the red-spotted cap, breastplate and pauldrons, crimson sash, sabre, sealed order. Grey moustache, stern. An unnamed role, not a filed character. |

Source plates as generated (1408 × 768, landscape): `princess-peach-base.png`,
`toadsworth-elder-base.png`, `guard-captain-base.png`.

## Toad palace guards (12 cutouts from two sheets)

One livery for the whole guard so they read as one force: white cap with red
spots under a silver kettle-helm brim ring, royal-blue tabard with gold trim, a
pink mushroom-crown crest on the chest, white gloves, brown belt, silver
pauldrons, round brown shoes. Roles differ by kit.

**Sheet A — [toad-guards-sheet-a.png](toad-guards-sheet-a.png)** (generated as
a 4 × 2 grid; the generator doubled three poses, which is useful — rank and file
look alike):

| Cutout | Kit |
|---|---|
| [guard-gate-halberd.png](guard-gate-halberd.png) | Gate guard — halberd and blue kite shield with the crest |
| [guard-door-spear-a.png](guard-door-spear-a.png) · [guard-door-spear-b.png](guard-door-spear-b.png) | Door guards — long spear held upright |
| [guard-attention-a.png](guard-attention-a.png) · [guard-attention-b.png](guard-attention-b.png) | Unarmed guards at attention / hands on hips |
| [guard-sergeant.png](guard-sergeant.png) | Sergeant — red sash, short sword at the hip |
| [guard-crossbow-a.png](guard-crossbow-a.png) · [guard-crossbow-b.png](guard-crossbow-b.png) | Wall guards — crossbow across the chest; **b** carries the bolt quiver |

**Sheet B — [toad-guards-sheet-b.png](toad-guards-sheet-b.png)** (2 × 2):

| Cutout | Kit |
|---|---|
| [guard-nightwatch-lantern.png](guard-nightwatch-lantern.png) | Night-watch — brass lantern on a pole, short sword, dark cloak |
| [guard-pike-towershield.png](guard-pike-towershield.png) | Heavy — pike and tall tower shield with the crest |
| [guard-recruit-horn.png](guard-recruit-horn.png) | Recruit — alarm horn raised, dagger, oversized tabard |
| [guard-veteran-mace.png](guard-veteran-mace.png) | Corridor veteran — flanged mace, buckler, cheek scar |

## The household (8 cutouts) — [castle-court-sheet.png](castle-court-sheet.png)

The people a night inside the palace actually meets, 4 × 2:

| Cutout | Who |
|---|---|
| [court-chambermaid.png](court-chambermaid.png) | Toad chambermaid — pink-spotted cap, black dress, white apron, ring of keys, lit candle |
| [court-cook-toque.png](court-cook-toque.png) · [court-cook-kerchief.png](court-cook-kerchief.png) | Two royal cooks — blue-spotted caps, whites, striped aprons, copper pot |
| [court-herald-trumpet.png](court-herald-trumpet.png) | Herald — blue-and-gold quartered tunic, trumpet with the pink banner |
| [court-page-scroll.png](court-page-scroll.png) | Page — same tunic, carrying scrolls |
| [court-mage-a.png](court-mage-a.png) · [court-mage-b.png](court-mage-b.png) · [court-mage-c.png](court-mage-c.png) | Three hooded Mages' Guild mages — violet robes, silver sigils, crystal staff, scroll satchel; faces in shadow |

## Archive basis / scene caution

- `highsun_1_955_bf_the_day_of` — *What Actually Happened in the Hours After
  the Murder* — puts these people in the palace chambers on Highsun 1, 955 BF:
  Luigi on guard at the Royal Suite under the Princess's direct orders, Fawful
  in the chimney with the Princess's hair as a vault key, Bowser "dragged across
  the corridor floor" by guards, Thornpaw conferring with **two hooded mages**,
  and the guard witnesses who, within the month (`first_month_incidents`),
  "were already dying". The guard sheets exist so those witnesses have faces.
- Toadsworth the Elder (`toadsworth_sr`) was Royal Chamberlain that night and
  became Acting Regent after it; his later journals are the archive's most
  disputed documents. The plate shows the Chamberlain, nothing more.
- Princess Peach (`princess_peach`) is **Deceased — assassinated** in the
  present clock (1040 BF). This plate is the living Princess of her reign and
  is only correct for sessions set before Highsun 1, 955 BF.
- `peachs_castle` in the present is Fawful's, with its twenty-nine lobbies and
  dimensional basement; a 955 session is the "cheerful pink palace" the
  location entry calls a façade. None of that architecture is in this packet.

## Not generated here (already have models or bases)

Mario, Luigi and Bowser are assumed to exist on your side; a classic Bowser base
and the assistant-era Fawful base are in
[`../beanbean-battle/`](../beanbean-battle/README.md). Thornpaw has no plate yet —
say the word if the session needs the vampire mayor.

## Reproducing the cutouts

```
python3 tools/splice-sheet-cutouts.py --sheet pc-guards-a
python3 tools/splice-sheet-cutouts.py --sheet pc-guards-b
python3 tools/splice-sheet-cutouts.py --sheet pc-court
python3 tools/splice-sheet-cutouts.py --sheet pc-peach           # also writes the square plate
python3 tools/splice-sheet-cutouts.py --sheet pc-toadsworth-elder
python3 tools/splice-sheet-cutouts.py --sheet pc-guard-captain
```

Deterministic; `--force` to overwrite, `--qa-dir /tmp/cutout-qa` for
checkerboard renders.
