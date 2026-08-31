# Image Generation Guide — building the prompt before spending the generation

**Every generation costs. Write the prompt sheet first, review it, then generate.**

This guide exists because the first pass of Mount Ebot images was generated
straight from vibes — "storm, mountain, dark fantasy" — and produced six
technically competent pictures that could have illustrated *any* story in the
archive. A blank signpost. A generic stone bridge. A helicopter with the
nonsense word `CRERA` on the tail. None of it was wrong, exactly. It was
*unspecific*, which in this archive is the same as wrong.

> **The test:** could this image be dropped into a different filing without
> anyone noticing? If yes, it is not an illustration of *this* story. Delete
> the prompt and start again.

---

## The rule that governs everything else

**The prose is the art direction.** You are not inventing a scene. The scene
already exists, in detail, in `overview` text somebody wrote carefully. Your
job is transcription, not imagination.

Before writing a single prompt, open the section and pull out every concrete
noun: materials, measurements, damage, weather, light sources, what is written
on things, what is broken, what colour the blood is. The story has already done
the work. **Mount Ebot gives you "tape across the fuel gauge," "rings like a
bin lid," "sixty-one feet," "no wider than a coin," "weathered silver,"
"1,340 FT."** Every one of those is a visual instruction. A prompt that does
not use them is a prompt written by someone who did not read the section.

---

## How many images to generate

The default is **not** one image forever. The default is: enough images that a
reader can see the major physical evidence without turning the article into a
comic strip.

| Filing size / type | Image count | Use |
|---|---:|---|
| Small data stub, short correction, technical note | 0–1 | Only if a visual object is central. Explain in the run report if a substantial-looking filing has none. |
| Short event or single-scene article | 1–2 | One lead image, plus one object/place if needed. |
| Normal session event | 2–4 | Lead image plus the clearest section beats. |
| Long narrative filing / finale / multi-location session | 4–7 | Lead image plus three to six section images. This is the usual upper working band. |
| Battle article | 2–5 | Lead battlefield image, turning point, aftermath/evidence if useful. |
| Investigation or evidence-heavy filing | 1–4 | Lead image plus key documents/specimens; props still carry the readable paper. |
| Sprite/contact sheet or roster design | 1 sheet per batch | Use a 3×3 or 4×4 sheet to establish designs, then crop/refine individual characters later. |

Rules of thumb:

```text
□ Always consider a lead image for a substantial new article.
□ Add section images only where seeing the place/object/evidence changes the read.
□ Do not illustrate every section by habit.
□ Do not stop at one image when the article has several visually distinct beats.
□ Do not create decorative filler just to hit a number.
```

A long article with only one image may be acceptable when the single image is the
whole visual thesis, but say so in the run report. A finale, battle, or
multi-location session usually deserves multiple images.

---

## The process, in order

### Step 1 — Build the prompt sheet (no generation yet)

Create a scratch file — `/tmp/<slug>-prompts.md` — with one block per planned
image. **Do not call `generate_image` during this step.** The sheet is a
deliverable in its own right: it gets reviewed, corrected, and only then spent.

Each block must contain:

| Field | What goes in it |
|---|---|
| **Slot** | `lead`, or the section number and name |
| **Source lines** | The literal sentences from the prose the image must depict. Quote them. |
| **Must appear** | The checklist of specific objects. This is what you verify against afterwards. |
| **Must NOT appear** | The generic defaults to suppress — usually people, and usually the wrong century of technology |
| **Text in image** | Either `NONE` or the exact string, letter for letter |
| **Prompt** | The final prompt text |

### Step 2 — Review the sheet against the prose

Read each "Must appear" list next to the section text. Anything in the list not
traceable to a sentence is invention — cut it. Anything vivid in the section
missing from the list — add it. This is the cheap step. Do it properly and the
expensive step usually works first time.

### Step 3 — Generate

One call per slot, `generate_image`, saving straight to the final path.

### Step 4 — **Look at every image you generated**

Non-negotiable. Call `read_file` on each one and actually look at it. The model
will confidently hand back a signpost with no sign on it. Check against the
"Must appear" list, item by item.

### Step 5 — Edit rather than reroll

`generate_image` takes an `images` array. Pass the existing file and describe
**only the change**. This preserves the composition and lighting you already
paid for and fixes the one thing that is wrong. Rerolling from scratch throws
away a good frame to fix a small defect.

### Step 6 — Compress, wire, verify

Covered in [Anatomy](#anatomy-of-a-prompt) and the checklist at the end.

---

## The text-in-image rule — **corrected**

An earlier version of this guide said "never put text in an image, generated
lettering always renders wrong." **That rule was wrong and it damaged the
Mount Ebot set.**

The truth is more specific:

- **Text the story requires is mandatory.** The Mount Ebot file is *about* a
  missing letter T. A summit plank reading `MOUNT EBOT — SUMMIT — 1,340 FT`
  is the punchline of a 6,000-word filing made visible. A memorial plank whose
  whole meaning is that one of four burned names has been rubbed grey **cannot**
  be depicted as a blank plank. Rendering those blank does not avoid a risk; it
  throws away the entire point of the picture.
- **Decorative text is forbidden.** Never let the model free-associate lettering
  — that is where `CRERA` came from. If text is not specified exactly, say
  `no text, no lettering, no signage, no watermarks` and mean it.
- **When text is required, give it letter for letter, in caps, in quotes**, and
  keep it short. Long strings degrade. State the medium too — *burned into the
  wood with a hot iron, strokes wobbling* — because "how it was made" controls
  the letterforms better than the word "text" does.
- **Then read the image and check the spelling by eye.** Especially where the
  joke is a spelling. If it comes back `EBOTT` on the plank, the image has told
  the opposite of the story and must be edited.

---

## Anatomy of a prompt

Six parts, in this order. The first and last are fixed; the middle four come
from the prose.

1. **Medium + register.** `Moody painterly digital concept art, dark fantasy
   archive plate, wide cinematic 16:9.` Keeps the set visually consistent —
   every image in the archive should look like it came from the same hand.
2. **Subject and camera.** What we are looking at and from where. *Seen from
   deep inside looking back toward the entrance* is worth more than any
   adjective.
3. **The specific objects**, with their materials and measurements, straight
   from the prose. This is the bulk of the prompt and the part that stops the
   image being generic.
4. **Light and weather**, also from the prose. Name the sources and their
   colours: *cold blue daylight from the slot, warm orange from a dropped
   lantern.*
5. **Palette.** `Desaturated slate, violet shadow, wet stone reflections.`
6. **Negatives.** `No people, no text.` (or the exact required text), then
   `Oil-painting texture, atmospheric depth, high detail.`

**On people:** default to `no people`. Faces and hands are where generators
fail hardest, and a place photographed empty reads as archival evidence, which
is the voice of this wiki. Depict the aftermath instead of the actor — the
gouge in the gravel, not the crash; the burned plank, not the mourner.

---

## Characters — never describe a known figure, pull the portrait

**If a generation includes a named character from the archive, you MUST use
that character's canonical portrait as a reference — you may not just describe
them.** There is a dedicated portraits folder at `portraits/` (mirrored under
`Reputation-Matrix2/assets/portraits/`), keyed by character id (e.g.
`green_t.png`, `remi.png`, `eager.png`, `dan.png`, `archie.png`, `markop.png`,
`wario.png`). Pass it to `generate_image` via the `images` array and instruct
the model to render *that* figure — same face, hair, cap, and clothing — in the
scene. Describing "a wizard" when `archie.png` exists yields a generic wizard
and a portrait that matches nothing else in the archive.

```text
□ If the image contains a known character → locate portraits/<id>.png first.
□ Pass it as a reference in generate_image images:[...].
□ In the prompt, say "rendered exactly from the provided reference portrait
   (same face, hair, cap, clothing)" and name the character.
□ Record which portrait each slot used in the prompt sheet.
```

If no portrait exists for a character who is essential to the scene, do not
invent one silently — flag it in the prompt sheet and the run report so a
portrait can be commissioned, rather than generating an off-model look that
pollutes canon.

---

## Worked examples — the Mount Ebot set

These are the real prompt blocks for the six shipped images, rebuilt from the
prose. Use them as the pattern.

### Slot 1 — lead — the mountain and the empty signpost

**Source lines:** *"1,340 feet of wet slate"*; caption: *"The board on the
signpost was already missing."*

**Must appear:** a signpost frame with the board genuinely gone (empty rectangle,
two bolt holes, split where it was levered off); a rutted mud track running to
the peak; a squat 1,340-ft slate mountain — a hill, not an alp; heavy rain.
**Must NOT appear:** people, vehicles, dramatic alpine scale.
**Text:** NONE — the missing board *is* the subject.

> Moody painterly digital concept art, dark fantasy archive plate, wide cinematic
> 16:9. A wet valley track of churned mud and standing puddles leading toward a
> squat, broad slate mountain about 1,340 feet high — a big ugly hill, not an
> alpine peak, streaked with rain and scree. In the left foreground a weathered
> timber signpost whose board has been torn off: an empty rectangular frame, two
> rusted bolts and two empty bolt holes, the wood split where the sign was levered
> away. Heavy grey rain, low dragging cloud, one distant amber-lit window far off
> in the valley. Desaturated slate and violet shadow, wet reflections. No people,
> no text, no lettering. Oil-painting texture, high detail.

### Slot 2 — §IV — the charter on the villa pad

**Source lines:** *"a chartered grey thing with the livery half-scrubbed off and
tape across the fuel gauge"*; *"a cracked chin-bubble"*; *"patted the charter's
flank, which rang like a bin lid"*; the loaded crates — *rations, coils of rope,
a crate of climbing iron, the oilcloth-wrapped map, six wrapped loaves.*

**Must appear:** grey helicopter, livery **half-scrubbed** (ghost of paint, not
clean); cracked chin bubble; thin dented panels; night villa pad with a lit
balcony; crates, rope coils, oilcloth bundle.
**Must NOT appear:** military markings, invented squadron text, crisp new paint.
**Text:** NONE on the airframe. *(The taped fuel gauge is cockpit-interior
detail — it is carried by the caption, not the frame.)*

> …a fat grey civilian charter helicopter on a stone villa landing pad at night,
> its livery **half scrubbed off leaving ghost patches of old paint and bare
> primer**, the chin bubble cracked in a spiderweb, thin dented panels. Wooden
> crates, coils of rope, and an oilcloth-wrapped bundle stacked by the skids. A
> lit stone balcony above… **absolutely no lettering, no numbers, no insignia
> anywhere on the aircraft.**

### Slot 3 — §IX — the cave took the aircraft in

**Source lines:** *"a black slot in the streaming stone, wide enough and no
wider"*; *"sixty-one feet"* of slide; *"the tail boom screaming along the wall
until a boulder took it off"*; *"the slow tick, tick, tick of hot metal."*

**Must appear:** the gouge in wet gravel behind the wreck; **tail boom torn
off** and lying separately by a boulder; snapped rotor; the entrance slot as a
narrow bright gash high in the wall; a dropped lantern.
**Text:** NONE.

### Slot 4 — §XIII — the bridge that had been improved

**Source lines:** *"cut stone, mortared, with a low parapet and drainage
channels"*; *"slots — clean, machined, no wider than a coin, spaced a stride
apart"* at knee and shin height; *"brass nozzles the diameter of a thumb…
their throats black with old soot"*; *"six stone plates a shade paler than the
rest of the stonework, each one set a fraction low."*

**Must appear:** all four improvements, **including the six pale sunken plates
in the deck** and the brass nozzles under the deck lip. The plates are the
mechanism of the scene; an image without them is just a bridge.
**Text:** NONE.

### Slot 5 — §XIV — four names on a plank

**Source lines:** *"A plank, a hand's width thick, weathered silver, bolted to
two iron stakes driven deep. The lettering was burned in rather than painted —
a hot iron, worked slowly, the strokes wobbling where the hand had got tired."*
The fourth name *"rubbed, repeatedly, with something soft and greasy, until the
burned grooves had filled with grey."*

**Text: REQUIRED, exactly** —
`RIP - 4 MISSING HUMANS` / `JAVIER  MIKAELA  DANIEL` / `PRINCE ALPHONSE`
— with the last line rubbed grey and half-illegible while the three names above
stay crisp. **This is the entire content of the image.** A blank plank here is a
failed image, not a safe one.

### Slot 6 — §XVII — one T

**Source lines:** *"a cairn, a view of grey rain in every direction, and a
second plank… smaller and older… nailed to a post."* The map opened on the flat
of the cairn, cartouche reading `THE OLD WORLD MAPPING COMPANY`.

**Text: REQUIRED, exactly** — `MOUNT EBOT` / `SUMMIT - 1,340 FT` /
`NO FURTHER SERVICE`. **`EBOT` has ONE T.** The joke, the title, and the cause
of the entire disaster are all that single letter. Verify it by eye after
generation; if it renders `EBOTT`, edit the image until it does not.

---

## Naming, compression, wiring

**Path:** `Reputation-Matrix2/assets/images/<type>/<slug>/<prefix>-<nn>-<subject>.jpg`
— e.g. `assets/images/events/mount-ebot/ebot-04-bridge.jpg`. Zero-padded,
numbered in order of appearance.

**Compress before committing.** Generated files are far too heavy for a static
site. This environment has **ImageMagick v6 only** — there is no `magick`,
`cwebp`, `pngquant`, or `optipng`:

```bash
convert in.png -resize 1600x1600\> -strip -interlace Plane -quality 82 out.jpg
```

Target **under ~300 KB**. Check with `ls -la`; re-run at lower quality on any
file that is over.

**Wire into the JSON** (paths relative to `Reputation-Matrix2/`):

```json
"image": "assets/images/events/mount-ebot/ebot-01-mountain.jpg",
"imageCaption": "Mount Ebot from the valley track, photographed on a later survey. One T."
```

`image` + `imageCaption` on the **record** render the lead figure
(`index.html` → `figure.article-lead-img`); the same two keys on a **section**
object render an inline figure (`figure.section-figure`, lazy-loaded). A wrong
path fails silently to a placeholder, so verify on the page.

**Captions are filings, not alt text.** State what is shown, when it was taken,
and what it proves or cost. *"The bridge"* fails. *"Machined slots at knee and
shin height, razors angled to catch a leg going forward"* passes. The caption
may carry detail the picture cannot — the taped fuel gauge, the pacing-out of
sixty-one feet — and it is the right place for the archive's dry verdict.

---

## Final checklist

- [ ] Prompt sheet written and reviewed **before** any generation
- [ ] Every "Must appear" item traceable to a sentence in the prose
- [ ] Required text specified letter for letter; decorative text suppressed
- [ ] Every generated image **actually viewed** with `read_file`
- [ ] Spelling on any in-image lettering checked by eye
- [ ] Defects fixed by **editing** the existing image, not rerolling
- [ ] All files under ~300 KB
- [ ] Paths wired into the JSON and confirmed to exist on disk
- [ ] Article loaded in a browser; every figure renders
