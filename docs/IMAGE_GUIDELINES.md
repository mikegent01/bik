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
* **Hands-off with the local ComfyUI** — `render`. Comfy Desktop runs
  each ComfyUI instance as a local server (`127.0.0.1:8188` by default,
  the legacy desktop app used `8000`; the tool probes 8188, 8000, 8189,
  8190, `--url` / `COMFY_URL` pin one). `python
  tools\make-token-plates.py render` walks every sheet character still
  without a plate in table-use order: the reference is padded onto a
  canvas of its key colour (a bust sits in the top of the canvas with
  empty key colour below, so the edit has room to draw the rest), the
  instruction + reference go to the server, the result is cut, QC'd
  (clear field, clear border, nothing touching the frame, figure at least
  45 % of the frame tall), retried with a new seed when it fails, applied,
  next. A plate on disk is skipped, so the run resumes; Ctrl-C between
  characters is safe; rejected attempts stay in
  `<raw-dir>/<id>.rejected-N.png` and `render-log.json` says what happened
  to every id. Ids with no local reference (a hotlinked lead, nothing at
  all) are logged "skipped" for a hand render. Start with `--tier 2
  --limit 20` and `sheet` the result before letting it run through the
  rest.
* **The graph is built in Python, not exported.** The tool asks the
  server which Qwen edit node it has and picks the engine: **Qwen-Image-2.1**
  (`TextEncodeQwenImage21`, ComfyUI ≥ 0.37 — the int8 "convrot" files in
  Comfy Desktop's shared models folder) or, failing that, Qwen-Image-Edit
  v1 (`--model` forces one). The 2.1 graph is the Comfy-Org template
  without the UI: UNETLoader → QwenImage21Cache → KSampler (25 steps,
  cfg 1, euler/simple) with the reference wired into the encoder's
  `images.image_1`, the empty latent sized to that reference, VAEDecode →
  SaveImage. Three things follow from how 2.1 works: the prompt addresses
  the reference as `<image1>`; the output canvas is the reference canvas
  (so a standing figure gets a portrait 832×1216 one, `--resolution`
  = pixel budget, 1024 ≈ 1 MP, multiples of 32); and the model **draws its
  own alpha** — the prompt ends "Transparent background: output a PNG
  image with an alpha channel", `cut` sees real alpha with a clear border
  and only trims and squares, the chroma keyer is the fallback (`--opaque`
  asks for the key colour instead). Any other graph: export from ComfyUI
  (Dev mode → *Save (API Format)*) and pass `--workflow file.json` — the
  tool fills the sampler's positive and negative prompts (`negative_prompt`
  on a 2.1 encoder), the seed, every LoadImage and the SaveImage prefix.
  The int8 / nvfp4 weights only load through ComfyUI's own loaders, so
  Comfy Desktop has to be open; there is no diffusers path.
* **The full run** — `start.bat plates` (= `python
  tools\make-token-plates.py render --full`): every sheet character still
  without a transparent plate, every tier, hands-off. Three things differ
  from the QC-gated loop: when none of the attempts passes QC the
  least-bad one (fewest complaints, then the taller figure) is wired
  anyway, its caption and the log saying `needs eyes` and why; the eleven
  characters with no usable reference (event scenes, icons — the
  `NO_REFERENCE` set) are drawn by 2.1 from their record (name, title,
  race, the look line — `drawn from the record alone` in the caption);
  and a contact sheet of everything plated lands in
  `<raw-dir>/run-sheet.png`. If no image at all comes back for three
  characters in a row the run stops and says why (the server went away,
  or ComfyUI rejected the graph — its own message, e.g. a model filename
  that is not in its list, is printed). Review is a git job: `git status`,
  the sheet, the site's rotator; a plate that fails the eye goes back out
  with `make-token-plates.py drop --ids <id>` (file deleted — a copy in
  the raw dir — and `fullBody` unwired) and is re-rendered with `render
  --ids <id> --redo`, or made by hand. The studio has the same run as the
  *full run* tick on Run queue and a *Drop plate* button.
* **With eyes on it: the Token Plate Studio** — `python
  tools\token-plate-studio.py` (or the *Token plates* button in
  `start.py`) opens a local page at `http://127.0.0.1:8766`: the roster on
  the left (tier / to-do / plated / no-reference filters), three panes —
  Reference (the lead, or the prepared canvas the model actually sees) |
  Render (drag a rectangle to crop) | Plate (over a checkerboard, dark,
  white or the key colour) — the prompt (editable, `Default prompt` brings
  the generator's back), seed / steps / resolution / "ask for alpha", the
  diffusion / text-encoder / VAE filenames read from the server's own model
  folders, and the buttons: **Generate**, **Re-roll** (new seed),
  **Remove background** (a second pass through the model with Qwen's own
  "Remove the background, and output a PNG image"), **Plate** (cut-out
  mode auto / alpha / magenta / green / flat field, hard and soft
  tolerance sliders, heal), **Accept** (copies the preview to
  `portraits/player/fullbody/<id>.png` and runs `apply` — exactly what the
  batch does), **Reject** (kept as `<id>.rejected-N.png`), **Skip**, and
  **Run queue** (the batch in the background: auto-accepts what passes QC,
  leaves the rest in the list). `Connect` / `Start Comfy` handle Comfy
  Desktop. Every render is kept as `<raw-dir>/<id>-<seed>.png`; nothing in
  the repo changes until Accept; run the sheets suite afterwards so the
  plates reach the prototype tokens.
* **Keyer facts** (2026-10-05): the chroma distance is int32 — the int16
  version overflowed on dark purples / blues / reds and punched holes
  through 27 plates; `heal` restores those (exact where the plate still
  stores its colour under the clear pixels, neighbour fill for tiny
  patches, edge despill) and `check` names any plate that still needs it.
  The key also matches its own hue in shadow, because generators shade the
  field next to the figure to a dark magenta / green. A render that fits
  1024 is never resampled.
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
