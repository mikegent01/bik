# NPC Forge — faction → roster → renders → token plates → Foundry packet

The Forge is how a faction gets *things to fight*. One JSON roster per packet
says who the NPCs are (statblock, GM notes) and what they look like (a *look*
the house recipe wraps); the Forge renders each one on the local ComfyUI,
cuts the render into a token plate, drops both in prepared folders, and
rebuilds the packet's Foundry actors. Everything it writes lives in the repo
tree, so the result is a commit: the sheets suite's Sync carries the packet
into Foundry like the era packets and the Liberated Toads, and the module's
Import dialog lists it.

```
Reputation-Matrix2/data/forge/<packet>.json          the roster (source — write this)
Reputation-Matrix2/npc-forge/<packet>/renders/<id>.png   raw renders (1408×768 on flat magenta)
Reputation-Matrix2/npc-forge/<packet>/handoff.md + jobs.jsonl   the brief for whoever draws elsewhere
Reputation-Matrix2/npc-forge/<packet>/review.json + replacements.json  human review gate and publish audit
Reputation-Matrix2/portraits/<packet>/<id>.png       cut 512-px RGBA token plates
Reputation-Matrix2/actors/<packet>/fvtt-Actor-*.json + import.json   the packet (generated — never hand-edit)
Reputation-Matrix2/actors/folders.json  packets.<packet>   where Foundry files it (group + sub-folders)
```

The first roster is **Fawful's Forces** (`fawfuls-forces`): the Fury Meter's
machines, the Bean Garrison and two lieutenants, CR 1/2–7 — see
[`actors/fawfuls-forces/README.md`](../Reputation-Matrix2/actors/fawfuls-forces/README.md).

## Running it

| | |
| --- | --- |
| `python3 tools/npc-forge.py` | the page at <http://127.0.0.1:8768/> (the control panel's **NPC Forge** button does this) |
| `python3 tools/npc-forge.py --list` | rosters and their art state |
| `python3 tools/npc-forge.py draft <packet> --faction <id> --name "…" [--plan 0.5,1,2,5]` | a new roster for a faction with templated statblocks per tier (they import today) and placeholder looks |
| `python3 tools/npc-forge.py run <packet> [--all] [--batch 8] [--random-seeds] [--steps render,cut,build]` | the loop on Comfy: render a bounded batch, cut, rebuild |
| `python3 tools/npc-forge.py cut <packet>` | cut whatever renders are in the folder and rebuild (no Comfy needed) |
| `python3 tools/npc-forge.py ingest <packet> --dir <folder> [--watch]` | recursively collect matching AI output from a folder, then cut it — no drag-and-drop |
| `python3 tools/npc-forge.py review <packet> --ids id --status accepted` | record the human review gate after background removal |
| `python3 tools/npc-forge.py replace <packet> --ids id --website fullBody [--batch 8]` | publish accepted full-body plates to `characters.json` and matching Foundry actor copies |
| `python3 tools/npc-forge.py handoff <packet>` | write `handoff.md` + `jobs.jsonl` for the entries without a render |
| `python3 tools/build-forge-packets.py [<packet>] [--check] [--list]` | the generator alone (what `check-all` runs) |
| `python3 tools/build-forge-packets.py plates <packet> [--force]` | the cut alone |
| `python3 tools/build-forge-packets.py prompts <packet>` | the render jobs as JSON lines |

**On the page:** pick a roster (or *New roster from a faction…*), choose a
batch size, tick the steps, and press **Run loop**. Each card shows the plate
(or render, or "no art yet"), the look (editable — *Save look* writes it to
the roster), the seed, and the review state. The deliberate image pipeline is:

1. **Generate or collect** a full-body candidate. Comfy output can be collected
   recursively from the configured folder (or with `ingest --watch`); the
   hand-off `jobs.jsonl` still carries prompt, negative, seed and canvas for
   another image model.
2. **Remove background** with *Remove background*. This creates a transparent
   token plate but does not publish it.
3. **Review manually** in the card viewer. *Accept review* is a separate gate;
   a new render returns the entry to `cut`.
4. **Replace website + Foundry** only after acceptance. The safe default updates
   the article's `fullBody`; the selector can also update `image`, both fields,
   or Foundry only. `replacements.json` records the previous paths and every
   actor copy changed.

*Regenerate* makes a new candidate, *Copy prompt* exposes the exact recipe,
and *Publish accepted batch* applies the selected batch size. *Build actors*
rebuilds a roster packet without publishing website art; *Hand-off brief*
writes the brief and opens it. The **Website + Foundry asset inventory** reads
all `characters.json` articles plus committed/root/live-world actor assets, so
missing full-body sprites are visible even when no Forge roster exists yet.
Select a Foundry group there to make an art roster from committed actors when a
live-world export is not available.

**Comfy:** the Forge talks to ComfyUI at `COMFY_URL`, else the first of
127.0.0.1 ports 8188, 8000, 8189, 8190 that answers (Comfy Desktop's default
is 8188; *Start Comfy* launches it on Windows). It needs the
`TextEncodeQwenImage21` node (Qwen-Image-2.1) and the three model files
`tools/make-token-plates.py` names (`QWEN21_MODELS`; the page lets the
loader pick what the server has). The render is plain text-to-image at the
roster's canvas: the builtin 2.1 graph with an `EmptyLatentImage`, steps
and cfg from the bar (defaults 25 / 1), the roster's negative. A render is
QC'd by keying it (`cut`): the border must be all field, the figure must be
there, nothing of the field may remain; a failure re-rolls the seed
(`retries`) and keeps the reject in `renders/rejects/`. The seed that
produced the accepted render is written back to the roster entry, so the
same picture can be made again.

**Without a GPU** (this sandbox, a laptop): everything but the drawing
works. Draft the roster, press *Hand-off brief* — `handoff.md` lists every
entry still without a render with its prompt, negative, seed, canvas and the
exact file to write. Hand it to Claude (who renders with its own image
tool, commits the PNGs into `npc-forge/<packet>/renders/` and runs `plates`
+ the build in the PR), or paste the prompts into any image model and drop
the results on the cards. Then **Cut + build**.

## The roster

`format: "waluipedia-forge-roster/1"`. Top level:

| key | |
| --- | --- |
| `packet` | the id; must equal the file name; becomes `actors/<packet>/`, `portraits/<packet>/`, `npc-forge/<packet>/` |
| `name`, `title`, `faction` | display name, one-line title, the `data/factions.json` id the sheets cite |
| `group`, `color`, `subfolders` | the Foundry group folder (an `actors/folders.json` group) and the sub-folders `{name: {color, description}}` — the builder holds `folders.json` `packets.<packet>` to these |
| `disposition`, `file_prefix` | token disposition (−1 hostile) and the actor file prefix (`fvtt-Actor-ff-`) |
| `style`, `framing`, `negative`, `background`, `render_size`, `plate_size` | the render recipe: prompt = `style` + entry `look` + `framing`; a flat field colour the cut keys off; canvas 1408×768; plates 512 |
| `entries[]` | the NPCs |

An entry (all of them are on the Fawful roster, which is the reference):

| key | |
| --- | --- |
| `id`, `name`, `folder`, `tier`, `role` | slug id (file, render and plate names), display name, one of the roster's sub-folders, free tier/role words |
| `type`, `subtype`, `size`, `alignment`, `cr` | dnd5e creature type/subtype, size key (`tiny sm med lg huge grg`), alignment text, CR (0.5 = 1/2) |
| `abilities[6]`, `saves[]`, `skills{}` | STR…CHA scores, proficient saves (`"dex"`), proficient skills (`{"prc": 1}`; 2 = expertise) |
| `ac`, `ac_words`, `hp`, `hp_formula`, `speed{walk,fly,climb,swim,burrow,hover}`, `senses{darkvision…}`, `languages{value,custom,telepathy}` | the top of the block |
| `di`, `dr`, `dv`, `ci` | damage immunities / resistances / vulnerabilities, condition immunities |
| `traits[]` | passive features `{name, icon, text}`; `resource: "legres"` makes Legendary Resistance |
| `attacks[]` | weapons `{name, icon, kind melee/ranged, ability, wtype, reach or range [n, l], dmg [n, d, type], extra [[n, d, type]…], props, text}` — to-hit and the ability modifier come from the sheet (CR proficiency) |
| `actions[]` | `{name, icon, activation action/bonus/reaction/legendary/special, condition, uses [n, "day"] or ["recharge", 5], cost (legendary), range, save {ability, dc, dmg [[n,d,type]…], half, template {type, size, width} or affects {count, type}}, text}` — with `save` a save activity, without one a utility activity |
| `multiattack` | the sentence (an action feat) or null |
| `resources{legact, legres}` | legendary action / resistance counts |
| `look`, `prompt`, `negative`, `seed` | what the Forge draws (`prompt` overrides the recipe), the seed |
| `plate`, `token_size` | plate file name (defaults to the id), token footprint (2 for Large) |
| `bio[]`, `tags[]` | GM-note paragraphs (HTML) and the sheet tags |

Icons are names from the shelf in `tools/build-forge-packets.py` (`I`: the
955 generator's plus `drill`, `cannon`, `hypno`, `acid`, `vine`, `mustard`
…), every path checked against the Foundry image library at build time.

## What a run leaves behind, and how it reaches Foundry

A run (or a hand-off round) leaves renders, plates, the roster with its seeds
and `actors/<packet>/` with `import.json`. Commit all of it on the PR branch;
`check-all` runs `build-forge-packets.py --check`, the packet's combine check
and `check-packet`, and `test-npc-forge.py`. On the Foundry side nothing new
is needed: `actors/folders.json` `packets.<packet>` makes the suite fold the
packet into the world's `import.json`, the module's Sync merges it from
GitHub, and the Import dialog's **Repo packet** list (`KNOWN_PACKETS`) names
the committed ones — add a line there and a macro when a packet is meant to
be pulled alone, and bump the module.

## Decisions

- **Statblocks before art.** An entry without a plate still builds, wearing
  `icons/svg/mystery-man.svg` and `waluipedia-sheets.art: "pending"`; the
  next build after the cut swaps the token in and the Sync updates the actor
  in place (ids are deterministic: packet + entry id).
- **A flat magenta field, not alpha.** Qwen-Image-2.1 can draw alpha, but a
  flat field renders more consistently across models and keys exactly with
  the plate tools (`cut` → `heal` → 512 thumbnail); a render that arrives
  with real alpha is accepted as is.
- **The roster is the source; the actors are generated.** Edit
  `data/forge/<packet>.json` (or the looks on the page), never the actor
  files; `--check` catches a stale packet. The explicit **Replace** action is
  the exception: it is an auditable asset publication and records old paths in
  `npc-forge/<packet>/replacements.json`.
- **A cut is not an acceptance.** Background removal is technical; a human
  must mark the plate `accepted` before website or Foundry references change.
  Regenerating the same entry invalidates the old review.
- **Drafts are playable.** `draft` writes tier templates (CR 1/2 … 7: AC, HP,
  one attack, multiattack from CR 2) so a new faction can be on the table
  the same evening and get its real statblocks written afterwards.
