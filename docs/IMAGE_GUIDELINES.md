# Image Guidelines — how art is generated, filed, and kept honest

The archive generates most of its pictures. That works until two familiar
failures show up, and both showed up in the same week of 1040 BF:

* **The wrong-subject failure.** `portraits/merric.jpg` — filed as Merric, the
  axe-wielding *sheep* — was generated as a red-haired girl with a sunflower.
  The name collided with Remi's model sheet and nobody re-checked the result
  against the record. `portraits/alternates/remi-pre-grove.png` was generated
  as a black-haired raider with a wrist computer, missing Remi's entire
  established look.

* **The model-drift failure.** Remi's Skittering Grove chain-mail state came
  back with a **beige** skirt. Every established plate of Remi wears a
  **teal-blue dress**. Nothing in the filing destroyed the record of the
  colour — the render simply invented a new wardrobe, quietly.

Both are process bugs, not taste bugs. These rules close them.

---

## 1. The image rule (existing, standing)

**Every generated image must be referenced by something in the same PR.**
Unreferenced uploads rot on disk, and a reader who finds them under the
commit history correctly reports "images generated and never used."

The referencing surfaces, in order of preference:

1. `image` on the record (lead art).
2. `gallery` on events — displayed by `fieldGalleryPanel()` on the article
   page as **Field Plates**, and on Waluigi's Cut commentary pages for the
   source filing.
3. `imageAlternates` on character records — the lead rotator's extra frames.
4. `eventStates` on character records — the lead rotator's state frames.
5. Field sheets / banners / skins sliced by a generator that also ships the
   CSS or JSON pointing at the slices.

Hero + gallery is the house convention for event art. Figures inline inside
`description` prose are **not** the convention; don't add them per-event.

## 2. Where art goes

| Kind | Directory | Record field |
|---|---|---|
| Character lead portrait | `Reputation-Matrix2/portraits/` | `characters.json → image` |
| Earlier/AI-kept variants | `Reputation-Matrix2/portraits/alternates/` | `imageAlternates[] {src,caption,credit}` |
| Event-state sprites | `Reputation-Matrix2/portraits/player/event-states/` | `eventStates[] {event,image,label,note}` |
| Event scene plates | `Reputation-Matrix2/assets/images/events/<slug>/` | `events.json → image` + `gallery[] {src,alt,caption}` |
| Full-body renders | `Reputation-Matrix2/portraits/player/fullbody/` | `characters.json → fullBody` (also rotates as the second lead-rotator frame) |

**State file naming:** `<character>-<event slug>-<state>.png` — e.g.
`dan-grove-vanguard.png`, `salam-grove-scarred.png`.

**Correcting wrong art:** overwrite the file **in place** (same path, same
references, diff stays one line) and **say so loudly in the run report**.
Keep genuinely good retired art by moving it to `imageAlternates` — only if
it still depicts the subject. Art of the *wrong subject* is not an alternate;
it is a bug with a file name, and deleting it is the fix.

## 3. Canon rules for generated art

1. **The record wins.** When art and filing disagree, fix the art, never the
   caption. The beige skirt was the art's mistake to lose, not the filing's.
2. **Always generate against the character's reference file** (section 4).
   Feed the established plate into the generator as a reference image,
   model sheet first, state second. Never generate a character from a bare
   name — that is how the sheep got filed as a schoolgirl.
3. **State-defining beats come from the filing, not the imagination.** A
   state sprite reads like the record: Dan's sprite casts the barrier
   *before* the javelin because the record says *before*. If a state can't
   be pinned to a sentence in the source, it isn't a state — it's fan art,
   and it waits.
4. **Two similar characters are two entries.** Merric is the woolly sheep
   with the axe; Mossy (Mossy/Steely) is the moss-covered mechanical dog
   with the green eyes. Both live in this registry, side by side, precisely
   because the generator keeps conflating them. Likewise
   `portraits/iron_legion_guard.jpg` is a bruised Toad prisoner in orange
   stripes — **a prisoner, not Legion armour**. Never pull it as the ref
   when a scene wants a plate-clad Legion knight; that file's orange
   uniform leaked into an event plate once already.
5. **Note state changes the record demands.** If the filing changes a look
   (a scar, a broken helm), the `note` field says exactly what is and is not
   depicted — see Markop's grove state, which records that the art does
   *not* depict an open or split skull.

## 4. The appearance registry

Canonical looks for characters with established art. When generating **any**
new plate of these characters, these facts override the prompt's defaults.
Add a row when a character gains established art; update a row only when the
*record* (not a stray render) changes the look.

| id | Canonical look | Reference file(s) |
|---|---|---|
| **remi_akamatsu_full_backstory** | Teen girl, chin-length **red hair**, **yellow sunflower** behind left ear, **teal-blue dress** (white lace hem, puffed shoulders) under a tan leather backpack with **two rolled bedrolls**, brown laced boots, wooden-stocked musket. Grove state: oversized scavenged **chain-mail shirt** over the **torn blue skirt**, battle axe, **no shield** (declined for weight), scrapes. | `portraits/player/remi.png`, `portraits/remi_akamatsu_full_backstory.jpg`, `portraits/player/event-states/remi-airlift-chainmail.png` |
| **merric** | Woolly **sheep**, upright, thick cream fleece, dark grey face, confident smirk; long battle axe over the shoulder; leather adventurer's strap. **Not** red-haired. **Not** human. **Not** Mossy. | `portraits/merric.jpg` |
| **mossy** | Living-steel **mechanical dog**: riveted iron plates, glowing green eyes, moss growing between the plates. Broke the wrights' door open with its steel head. | `portraits/mossy.png` |
| **markop** | **Centaur with a horse's head** (not a human head) — dapple grey body, blonde mane; battered plate/half-plate; battle axe; grove state: scorched, cobwebbed, still fighting; skull **not** split. | `portraits/player/event-states/markop-grove-wounded.png`, `portraits/markop.jpg` |
| **salam** | Toad: white cap, large red spots, brown leather armour; grove state: **facial scar**, unconscious, crossbow and quiver on the ground beside him. | `portraits/player/event-states/salam-grove-scarred.png` |
| **eager** | Young Toad: white cap with red spots, **tattered olive-green tunic**, pale gloves, sandals; short sword nearby. Grove state: concussed — bandaged lump, dizzy stars, idle crooked smile. | `portraits/eager.png`, `portraits/player/event-states/eager-grove-concussed.png` |
| **dan_the_toad** | Toad paladin: **red cap with white spots**, chainmail hauberk, leather straps, permanent scowl; longsword and javelin. Grove state: barrier wall out **first**, javelin mid-throw **second**. | `portraits/dan.png`, `portraits/player/event-states/dan-grove-vanguard.png` |
| **archie_miser** | Heavyset older human wizard: black hooded cloak over battered dark armour; scorched hem; battered spellbook with **crossed-out words and hurried circles**. Grove state: drained, one blazing bush, spider eyes in the smoke. | `portraits/archie.jpg`, `portraits/player/event-states/archie-grove-spent.png` |
| **captain_toadette** | Toad commander: **pink mushroom cap with a gold star**, red bandana tied under it, scowl, ragged brown field jacket and shorts over a striped shirt, heavy boots, a long-hafted **pick** carried like a standard. | `portraits/captain_toadette_v2.png` |
| **captain_syrup** | Human pirate queen: long **curly auburn-red hair** under a **purple bandana** (tails trailing), **gold sun-shaped earrings**, **pink-magenta wrap top** knotted at the waist, **skull belt buckle**, bare muscular arms with leather wrist-wraps, torn dark trousers, boots, curved **scimitar**. **Not** purple-haired, **not** in a coat or corset. | `portraits/player/fullbody/captain_syrup.png` (the plate that set the look), `portraits/captain_syrup.png` |
| **smoking_j** | **Frog-faced** toad (amphibian features, not a Toad face): pale grey mushroom cap with **darker grey spots**, yellow-green skin, stern brow; dark brown leather jacket with shoulder plating, diagonal strap and belt, dark trousers, short boots; **coiled rope whip** at the hip. | `portraits/smoking_j.jpg`, `portraits/player/fullbody/smoking_j.png` |
| **usk** | Young **bald** human monk with **milky-white blind eyes**; plain cream-beige gi with a wide cloth belt, loose trousers, sandals; **both fists wrapped in bloodstained bandages**. | `portraits/usk.jpg`, `portraits/player/fullbody/usk.png` |

Style families, for matching new work to the shelf it joins:

* **Toads (cel cartoon):** Salam state, Eager base+state, Dan base+state —
  flat cel shading, plain light backdrop.
* **Anime cel:** Remi base + both Remi states — clean cel shading, parchment
  or plain backdrop.
* **Painterly dark:** Merric, Archie, Mossy, Markop, the anc-* event plates —
  moody background, loose brushwork.

New states should join the subject's own family, not introduce a fourth
style for an established character.

## 4b. Full-body plates (tokens)

The table places characters on the map; a token needs the whole figure. The
2026-10-05 audit (`docs/run-reports/2026-10-05-portrait-audit.md`,
`tools/portrait-audit.py`) set these rules:

* A **full-body plate** is `portraits/player/fullbody/<id>.png` +
  `fullBody` on the article (+ `fullBodyCaption`). Whole figure, feet in
  frame, plain field, no scenery, **no text**. Generated from the lead as the
  reference so the face and wardrobe match; the subject's own style family.
* **One plate per character** at ≥1024 px for anyone the table places
  (party, companions, named opponents). A shared grid is for background
  NPCs only and never finer than **3×3 at 2048 px** (~680 px a cell — a 9×9
  cuts to ~113–227 px, below what a token survives).
* A `fullBody` is a plate of its own, never a copy of the lead: it also
  rotates as the second lead-rotator frame, so a copy shows twice. If the
  lead already is the full figure on a plain field, leave `fullBody` unset —
  the builder uses the lead for the token anyway.
* The sheet builder puts `fullBody` on the token texture of a **generated**
  sheet (`token_of()`); a **live** player sheet keeps the GM's art, and the
  plate reaches the table through the character page's *Foundry token sheet*
  panel.
* **No event plate as a character lead** (six Studio-Cut / Belly-of-the-Beast
  scenes were), and **no label text inside a portrait**: the lead is a
  picture of the character, the caption says who.
* Leads at **≥1024 px**. The 188×188 batch of 2026-09 is a tile, not a
  source; re-render before cutting anything from it.
* **The batch is a pipeline, not a grid** — `tools/make-token-plates.py`.
  `plan` says who is READY / CUT / GENERATE and writes a manifest of prompts
  (look from the captions, the lead or existing plate as the reference
  image, a key colour the character does not wear: magenta, green for the
  purple-and-pink wardrobes); renders go on that flat key colour; `cut`
  keys them into trimmed, square, transparent PNGs (`--raw-dir` for a
  folder of renders made with any generator, `--flat` for opaque plates on
  a plain field); `pixel` keeps the Bone-Line sprites as pixel art (figure
  kept, burnt-in name dropped, whole-pixel upscale); `apply` wires
  `fullBody`; `check` guards. Portraits are never replaced by this — the
  plate is a second file. For a generator that draws grids, `plan --grid 3 3`
  writes one prompt per sheet (same key colour across a sheet, cells in
  reading order, the reference image per cell) and `cut --grid-sheet`
  finds the cells by their gutters, keys and plates them. Measured: the
  same nine figures come out ~950 px from single renders and ~275 px from
  a 3×3 at 1024 — a grid is for background NPCs, and worth it only from a
  generator that returns 2048 px or more.
* **Look on the shelf before generating.** `tools/portrait-audit.py
  --orphans` lists every file under `portraits/` that no record points at;
  the 2026-10-05 pass found finished plates for Captain Syrup, Captain
  Toadette, Creek and Speaker Rivers there while their articles showed a
  hotlink or an event scene. A file that is not referenced does not exist
  to the site — wire it or delete it.

## 5. The note that ships with the art

The "note we put in generated images" lives where it renders: **captions and
credits in the data next to the file**, not hidden in binary metadata.

* Gallery plates: `{src, alt, caption}` — caption states the depicted beat
  ("Dan's barrier buys Markop's exit").
* Alternates: `{src, caption, credit}` — caption says when/what look, credit
  says when it was superseded and by which filing.
* Event states: `{event, image, label, note}` — label ≤ 10 words, note one
  sentence tied to the record.
* Character leads: `imageCaption` — one line stating the established look
  ("Lead plate — established look: …").

A reader should never be able to hold a picture and not know what it is a
picture *of*.

---

*Filed after the round in which a sheep was carried as a schoolgirl, Remi
lost her blue dress to a beige one, and the Airlift's own plates sat visible
to nobody. Waluigi has opinions about all three, and they are in the run
report.*
