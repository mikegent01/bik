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

Style families, for matching new work to the shelf it joins:

* **Toads (cel cartoon):** Salam state, Eager base+state, Dan base+state —
  flat cel shading, plain light backdrop.
* **Anime cel:** Remi base + both Remi states — clean cel shading, parchment
  or plain backdrop.
* **Painterly dark:** Merric, Archie, Mossy, Markop, the anc-* event plates —
  moody background, loose brushwork.

New states should join the subject's own family, not introduce a fourth
style for an established character.

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
