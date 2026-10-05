# Portrait audit — who has art, what the art shows, and what a token needs (2026-10-05)

**Asked:** some portraits are missing (Captain Syrup has none), some are
torso-only; the next step is a full-body plate for everyone so characters
can be placed in the world as tokens — the GM suggested one big grid cut into
pieces. Audit the shelf, say what is missing or torso-only, and plan the
full-body pass.

**Method.** `tools/portrait-audit.py` (new) reads every article's `image` /
`fullBody`, the file's pixel size and the sheet index, and prints the
mechanical gaps (hotlinked, missing, event scene used as a lead, party
without a plate, generated sheet on the placeholder, leads under 200 px).
Framing is a judgement, so every one of the 192 hand-filed leads was looked
at on four contact sheets and sorted into **full body / three-quarter / half
(waist up) / bust / scene / not a portrait**. That pass is recorded here; it
only needs redoing for a new plate. The 54 roster toads filed the same day
(`tools/file-roster-toads.py`) are full-body cuts by construction and are
counted separately.

## 1. The numbers

| | count | note |
|---|---|---|
| Articles | 248 | 194 hand-filed + 54 roster toads |
| Lead is a local file | 248 | every file exists; **0 hotlinks** — Captain Toadette and Captain Syrup were the two, both now on the archive's own plates (§3) |
| Full body | 71 + 54 toads | the whole figure is in frame |
| Three-quarter (cut at thigh/knee) | 5 | `hjumpik`, `high_inquisitor_vale`, `red_the_kitchen_commander`, `geek_t`, `nerd_t` |
| Half (waist up) | 77 | the common NPC framing on the shelf |
| Bust (head and shoulders) | 28 | `bowser`, `salam`, `usk`, `waluigi`, `aemenor_evenflight`, `alice`, `ana`, `asgore`, `azure_rakasha`, `big_r`, `bully_t`, `byscilla_danos`, `daniel_gamma_command`, `director_vale`, `dracule_mihawk`, `kat`, `koffin_k`, `kremlings`, `liam`, `lyranth`, `mario`, `mike`, `orangus_cornelius`, `rhak_the_lost`, `the_plant_lady`, `unknown_assassin`, `wyatt_the_white_haired_goblin`, `xo` |
| Scene, no usable figure | 8 → 7 | `alistair_marshkeeper`, `cosmic_jester`, `director_mario`, `evil_mario`, `lord_darian_marsh`, `marilyn_the_chambermaid`, `scorncrow` — six of them are event plates (`assets/images/events/…`) reused as a lead; `creek_medic` (a forest stream with no toad in it) was the eighth and is fixed (§3) |
| Not a portrait at all | 4 | `kyrn` (a stock "TRAPS" icon with a 4K/HD watermark), `gee_lady` (a pixel letter G), `pet_rock` (a few pixels), `prunsel` (a pixel moon) |
| Pixel sprites with the name burnt into the image | 28 | the Underground / Bone-Line cast (`sans`, `papyrus`, `toriel`…, the "brother" series, the font family) — legitimate style for that arc, but the baked-in label makes them poor tokens and the label is the wrong one on a renamed sheet |
| Full-body plates (`fullBody`) | 17 + 54 toads | the 13 made on 2026-09-20 + Smoking J, Usk, Captain Syrup and Speaker Rivers today |
| **Files under `portraits/` nothing points at** | **339** | `tools/portrait-audit.py --orphans` — 16 byte-identical copies of a lead under a `_v2` / `_scene` name, the rest finished plates no record uses (§3) |
| Leads under 200 px | 45 | one early batch rendered at 188×188 — fine as a tile, mush as a token or a hero image |

## 2. The party, one row each

The table places these on the map. "Token-ready" means a full-body figure on
a plain field exists in the repo today.

| character | lead framing | full-body plate | sheet | token-ready today |
|---|---|---|---|---|
| Archie Miser (`archie_miser`) | full (in scene) | `portraits/player/fullbody/archie_miser.png` | live | yes — plate |
| Bones (`bones`) | full | — | generated | yes — the lead itself is full body on a plain field |
| Bowser (`bowser`) | bust | `portraits/player/fullbody/bowser.png` | live | yes — plate |
| Dan (`dan_the_toad`) | full | — | live | yes — the lead itself (white field) |
| Eager (`eager`) | full | `…/eager.png` | live | yes — plate |
| Green T (`green_t`) | full | `…/green_t.png` | live | yes — plate |
| Hjumpik (`hjumpik`) | three-quarter | `…/hjumpik.png` | live | yes — plate |
| Markop (`markop`) | full (in scene) | `…/markop.png` | live | yes — plate |
| Mossy (`mossy`) | full | `…/mossy.png` | live | yes — plate |
| Remi (`remi_akamatsu_full_backstory`) | full (in scene) | `…/remi_akamatsu_full_backstory.png` | live | yes — plate |
| Roger (`roger`) | full | — | generated | yes — the lead itself |
| Ryan (`ryan`) | full | — | generated | yes — the lead itself |
| Salam (`salam`) | bust | `…/salam.png` | live | yes — plate |
| **Smoking J** (`smoking_j`) | half | **`…/smoking_j.png` — made today** | generated | yes — plate |
| Toad Lee (`toad_lee`) | full | `…/toad_lee.png` | live | yes — plate |
| **Usk** (`usk`) | bust | **`…/usk.png` — made today** | live | yes — plate |
| Waluigi (`waluigi`) | bust | `…/waluigi.png` | live | yes — plate |
| Wario (`wario`) | half | `…/wario.png` | live | yes — plate |

Bones, Dan, Roger and Ryan are not given a `fullBody` on purpose: their lead
*is* the full-body figure, and `fullBody` also rotates as the second frame of
the lead rotator — the same picture twice is worse than one. When a
`fullBody` is filed for them it should be a new plate, not a copy.

On the Foundry side every live Players sheet carries the GM's own art
(`player/…`, `npc/…` uploads, Wario's Motorbike included); the archive never
overwrites it. The full-body plates reach the table two ways:
the site's **Foundry token sheet** panel on each character page (open full
size → drag onto the token), and — new today — the generated sheets' token
texture, which the builder now sets to `fullBody` when the article has one
(`token_of()` in `build-character-sheets.py`; Rattles, Bowser 955 BF, Smoking
J and all 54 roster toads picked theirs up on this build).

## 3. What was done today

- **Captain Syrup** — the audit's own catch: a full-body plate of her
  (408×612, transparent field — red curls, purple bandana, pink wrap, skull
  buckle, scimitar) had sat at `portraits/captain_syrup.png` **unreferenced
  since the base commit** while the article pointed at a hotlinked
  screenshot — the "images generated and never used" failure the guidelines
  open with. It is now `portraits/player/fullbody/captain_syrup.png` +
  `fullBody` (her token), and a new lead was painted **from it** in the
  painterly-dark family (the shelf Captain Fernback and the Rogueport
  pirates sit on), half-body on her own quarterdeck:
  `portraits/captain_syrup.png`, `imageCaption` states the look, registry
  row added. (A first attempt painted without the reference came out
  purple-haired in a coat and corset — a different woman; discarded, which
  is the point of the registry.) Her generated sheet lost the mystery-man
  placeholder and carries the plate on its token.
- **Smoking J**, **Usk** — full-body plates in each one's own family (the
  frog-faced toad painterly, the blind monk anime-cel), generated from the
  lead as reference; `fullBody` + `fullBodyCaption` filed; appearance
  registry rows added to `docs/IMAGE_GUIDELINES.md`.
- **54 Liberated Toads** — the Command page roster already had a full-body
  cut for each; they are articles, sheets and tokens now
  (`tools/file-roster-toads.py`, folder *Liberated Toads* in the packet).
- **The orphan shelf.** Syrup's plate was found by `git status` when the
  new lead landed on its path, so the obvious next question was asked:
  `portrait-audit.py --orphans` scans every record, page, tool and packet
  for `portraits/…` paths and lists what nothing points at — **339 files**
  (sprite-sheet poses excluded). Among them, finished full-body plates of
  characters whose articles were showing something worse:
  - **Captain Toadette** — `portraits/captain_toadette_v2.png` (pink star
    cap, red bandana, field jacket, pick), full figure on a plain field.
    Now her lead; **the last hotlink is gone**.
  - **Creek** (`creek_medic`) — `portraits/creek_medic.png`, a Toad medic
    with clipboard and flask. Now his lead, replacing the stream.
  - **Speaker Rivers** — `portraits/speaker_rivers_sprite.png`, a chibi
    full-body sprite. Now his `fullBody` (token); the podium scene with its
    baked caption stays the lead.
  - Left alone on purpose: `bones_clean`, `dan_real`, `earl_grey_v2`,
    `ironhand_general`, `archie_miser_v2` are **different-looking** figures
    under those names (a green-shirted Bones, a fire-mage Dan, a purple
    overalls Earl Grey, a husk Ironhand, a frog Archie) — wrong look is not
    an alternate; `roger_v2`, `toad_lee_v3`, `eager_v3` are near-identical
    re-renders of plates already in use.
  - 16 are byte-identical copies of a referenced lead (`bryan_v2`,
    `ryan_v2`, `roger_scene`, `bones_scene`, `captain_syrup_v2`…) and can be
    deleted whenever someone wants a smaller checkout.
- `tools/portrait-audit.py` for the mechanical half of this report.

## 4. The plan for the full-body pass

**Order of work** (each a small PR, art referenced in the same PR):

1. *Already covered:* the party (18/18 token-ready above).
2. *Companions and recurring allies the table places:* Rattles has a plate;
   next are the NPCs who appear in fights by name — the Feyward cast
   (`mystic_morel`, `lady_aurelian` and `the_oracle` are already full-body
   leads; `color_division_black` is a half), the Raventree household, the
   Grove and Debt-Siege opponents. ~15 plates.
3. *The 28 busts and 77 halves* — only where the character is placed on a
   map. A bust is a perfectly good article lead; it is a poor token. Do not
   re-render the whole shelf.
4. *The 45 under-200-px leads* — re-render at ≥1024 **before** cutting a
   token from them; the current files cannot be upscaled honestly.
5. *The 7 scenes and 4 non-portraits* — these need a **lead**, not a token:
   `scorncrow`, `kyrn`, the four Studio-Cut Marios/marsh lords, `gee_lady`,
   `pet_rock`, `prunsel` (Creek was the ninth — done). Fix the subject
   first, and check `--orphans` before generating: the shelf may already
   hold the plate.
6. ~~Captain Toadette~~ — done from the orphan shelf (§3).

**About the 9×9 grid.** One grid image cut into pieces is exactly how the
roster toads were made (`sheet_a.png` / `sheet_b.png` → 180×197 px cuts) and
it bought consistency cheaply — but the arithmetic is the problem for tokens:
a 1024-px generation at 9×9 is **~113 px per character**, at 2048 px
**~227 px**; a Foundry token on a 100-px grid wants 400–512 px to survive
zoom, and dnd5e's sheet shows the same image at 500+. The roster cuts are
already at the floor of usable. So:

- **Party, companions, bosses: one plate per character**, 1024 px or more,
  the lead as reference (what Smoking J and Usk got today). Consistency comes
  from the reference image, not from sharing a canvas.
- **Background NPCs by the dozen** (a squad of guards, the Lillypads): a
  **3×3** sheet at 2048 px → ~680 px cells is the largest grid that still
  yields a token. `tools/liberated-toads-sprite-planner.html` already builds
  3×3 / 4×4 prompt sheets; `tools/cut-toad-sheets.py` cuts them. Keep 4×4 for
  tile art only.
- Every plate: full figure, feet in frame, plain field, no text (the pixel
  "brother" series shows what a burnt-in label costs), filed as
  `portraits/player/fullbody/<id>.png` + `fullBody` on the article, caption
  in `fullBodyCaption`. The builder puts it on the token of a generated
  sheet by itself; for a live sheet the GM drags it from the token-sheet
  panel (the archive will not overwrite the table's art).

**Rules that came out of the pass** (added to `docs/IMAGE_GUIDELINES.md`):
no event plate as a character lead; no label text inside a portrait; a
`fullBody` is a plate of its own, never a copy of the lead; leads at ≥1024
px.

## 5. Not done

- No re-render of the 45 small leads, the 8 scenes or the 4 non-portraits —
  each is a subject decision for the GM (which Mario is Director Mario?).
- Captain Toadette still hotlinked.
- The pixel-sprite cast kept as is: it is the arc's style; the note is that
  their tokens will carry the burnt-in names until someone cuts clean sprites.
- The live Players sheets keep the GM's art by rule; nothing in the module
  pushes a token texture onto a `character` sheet.
- The remaining ~320 orphans (legion, noki, pianta and prisoner extras,
  `_v2` renders of characters with no article…) are listed by
  `--orphans`, not triaged: each is either an article waiting to be written
  or a file to delete, and that is a GM call per file.

## 6. Addendum — the full-body pass, batched (same day)

**Asked:** full-body sprites one at a time is too slow — find the batch way,
make the remaining ones, keep the portraits.

**Found first:** of the 17 plates on file only Captain Syrup's and Speaker
Rivers' were actually transparent; the other 15 sat on plain cream, grey or
parchment fields, and the 54 roster toads are opaque cuts of their cohort
sheets. "Usable in game" meant every one of them, not just the missing ones.

**The batch** is `tools/make-token-plates.py` (above, §4b of the
guidelines). Nothing is written by hand per character: the prompt comes
from the captions, the reference is the existing art, the key colour is
chosen off the wardrobe, the cut and the wiring are mechanical, and a
contact sheet is the review. What that bought today, without a single new
render: 12 party plates keyed off their plain fields, Dan, Toriel, Orange T,
Healer Mistpetal, 18 roster toads from their 550 px cuts, 18 Bone-Line
pixel sprites with the burnt-in names dropped — 58 plates. Then ten renders
(the per-turn cap of the image tool here is ten): Waluigi, Wario, Salam,
Eager, Toad Lee, Usk, Rattles, John Lee, Paulo, Luigi.

**State:** 77/242 sheet characters token-ready; **the party is 18/18**.
Left: 160 renders (36 roster toads whose only art is a 180 px cut, 59
placed NPCs, the rest) — `plan --manifest` lists them in table-use order
with the prompt and the reference for each. Two ways to burn that down:
ten a turn here, or render the manifest with any generator locally and
`cut --raw-dir <folder>` + `apply` the lot in one pass.

**Rules learned:** a chroma key is keyed wherever it appears (the hole
between an arm and a body is not connected to the border; a flat cream
field is keyed only from the border so a white cap survives); 500 px
cut-outs and 450 px roster cuts are usable tokens — the floor is 400, the
target 1024; pixel art is upscaled by whole pixels, never regenerated.

**Same day, later — the loop goes local.** Asked to let the tool drive the
GM's own generator (Qwen-Image-Edit on ComfyUI) through everything left,
one at a time, until done. The repo had no ComfyUI or Qwen-Image code to
reuse (the only Qwen piece is the Qwen3-TTS bridge, `docs/QWEN_TTS_BRIDGE.md`),
so `render` is new: a urllib-only ComfyUI client (`/upload/image`,
`/prompt`, `/history`, `/view`), the stock Qwen-Image-Edit graph built in
(your own exported API-format graph with `--workflow`), reference padded
onto the key colour, QC + retry + apply per character, resumable, logged.
It is proven against a fake ComfyUI in `tools/tests/test-make-token-plates.py`
(a bust reference fails QC once and passes on the second attempt), not
against a real one — the first real run is the GM's, which is why
`--tier 2 --limit 20` + `sheet` is the advice before the long run.

**Found on the way, fixed:** the keyer's chroma distance was computed in
int16; a channel difference over 181 overflowed, so dark purples, blues,
reds and skin-against-green landed under the hard tolerance and were keyed
out — pinholes and blobs of background through 27 of the committed plates
(Waluigi's face against the green key, Eager's cap spot, John Lee's coat).
Invisible on the 160 px contact sheet, obvious on a dark map at token
scale. Now int32; `heal` gave back what was recoverable (exact where the
plate still stores the render's colour under its clear pixels; neighbour
fill for tiny patches; edge despill), and `check` now flags keyed-out
figure pixels. Four plates had been downscaled after the cut, which
blackens what sits under a cleared pixel, so their larger holes were gone
for good: Wario, Salam, Luigi and Paulo were rendered again from the
healed plates and cut with the fixed keyer. Two more keyer rules came out
of that: the key matches its own hue in shadow (generators shade the field
next to the figure to a dark magenta / green — Luigi's hose loop), and a
render that already fits 1024 is not resampled.

**Same day, later still — the right model, and a GUI.** The GM's generator
is not Qwen-Image-Edit but **Qwen-Image-2.1** running inside Comfy Desktop
(`qwen_image_2.1_int8_convrot` + `qwen3vl_8b_int8_convrot` in the shared
model library; each Desktop instance is a ComfyUI server on `127.0.0.1`,
8188 by default), and the ask was to drive it from Python directly, with
a GUI that previews, a cropping view and background removal. Read against
the ComfyUI source (Comfy-Org/ComfyUI `comfy_extras/nodes_qwen.py`,
`comfy_api/latest/_io.py`) and the three Comfy-Org 2.1 templates: the 2.1
encoder takes the prompt, the negative and up to sixteen reference images
on one node (`images.image_1` in the API JSON — the Autogrow key format),
hands the sampler an empty latent sized to the first reference, and the
4-channel VAE returns **real alpha** when the prompt asks for a transparent
PNG (the background-removal template's whole prompt is "Remove the
background, and output a PNG image"). So the "direct Python" answer is: the
graph is built in code and sent over the local HTTP that Comfy Desktop
already exposes — the int8 convrot weights only load through ComfyUI's own
loaders, there is no diffusers path, Comfy Desktop has to be open. `render`
now picks the engine from the server's nodes (2.1 first, v1 edit as the
fallback), probes 8188 / 8000 / 8189 / 8190, prepares a portrait 832×1216 reference
canvas (2.1 renders at the reference's size), addresses it as `<image1>`,
asks for the alpha, and `cut` only trims and squares a render that came
back with real alpha and a clear border — the chroma keyer is the fallback.

The GUI is `tools/token-plate-studio.py` + `token-plate-studio.html`
(button *Token plates* in `start.py`): a local page, not a Tk window — the
image work is Pillow in the Python process, the browser displays and
collects clicks, and it tests headlessly. Roster with filters | Reference /
Render (drag-crop) / Plate (checker, dark, white, key ground) | prompt,
seed, steps, resolution, model filenames read from the server; Generate,
Re-roll, Remove background (the model's own pass), Plate (auto / alpha /
magenta / green / flat, tolerance sliders, heal), Accept (= plate +
`apply`), Reject, Skip, Run queue (auto-accepts what passes QC). Proven
against the fake ComfyUI (`tools/tests/test-token-plate-studio.py`, 38
checks: connect, roster, generate → job → plate → accept, crop, forced
key, image routes with the path check, reject, remove-background, queue,
stop) and a jsdom drive of the page's buttons; not against a real GPU —
the first real render is the GM's. The honest caveats: the "Transparent
background" prompt is what the Comfy-Org template relies on, and whether
2.1 obeys it on a given character is a per-render fact the QC catches
(a render with no alpha falls back to the key colour canvas it was given);
the resolution the 1024 budget gives a 832×1216 canvas is 832×1248, so a
figure comes out ~1100 px and the plate is 1024 as before.
