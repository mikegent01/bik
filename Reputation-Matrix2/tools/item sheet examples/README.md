# Character & Item JSON Guide

**How to write a `characters.json` record and how to build a Foundry VTT
actor/item-sheet JSON — the long version.**

This folder (`tools/item sheet examples/`) holds reference exports of the
**target format** for play-ready characters:

| File | What it is | Use it as… |
|---|---|---|
| `fvtt-Actor-archie-miser-hSu2jXk6IxqmByBe.json` | Full player character (PC) sheet — class, race, background, feats, spells, gear, token | The template for a **character actor** |
| `fvtt-Actor-hjumpik-deldkur-6eBoDhCt0i3e3qZ4.json` | Second full PC sheet | A second character-sheet reference |
| `fvtt-Actor-bones-level-5-infiltrator-player.json` | **Bones — level 5 player character**; 49 focused class, feature, weapon, gear, lore, and chronology documents | The reference for a fully fleshed-out PC linked to the XP ledger |
| `fvtt-Actor-default-item-pile-WF1OTqeH4049Rt9B.json` | Loot / **item pile** actor (weapons, consumables, tools, containers) | The template for a **lootable pile** |

The guide is split into three parts:

1. **[Part 1 — `characters.json`](#part-1--the-charactersjson-lore-database)** —
   the wiki's character lore database (what the site, the XP ledger, and the
   Character Creator read). One record per character, `data/characters.json`.
2. **[Part 2 — Foundry actor JSON](#part-2--foundry-vtt-actor-json-the-item-sheets)** —
   the play-ready exports in this folder: the actor envelope, the character
   sheet (`system`), and the item documents (`items[]`), field by field.
3. **[Part 3 — Recipes & validation](#part-3--recipes--validation)** —
   step-by-step "make a new PC / NPC / item pile" walkthroughs and the checks
   to run before committing.

---

# Part 1 — The `characters.json` lore database

## 1.1 What this file is

`Reputation-Matrix2/data/characters.json` is a **plain JSON array** — one
object per character — that feeds three consumers:

| Consumer | Where | What it does with the record |
|---|---|---|
| **Waluipedia wiki** | `../index.html` (article routes) | Renders the character dossier page, wiki links, family trees |
| **XP ledger** | `../xp.html` | Files "Dossier Filed — <name>" XP entries from `title`/`status`/`summary`; links article IDs to player keys |
| **Hub Character Creator** | `tools/hub/` (`creator.py`) | Builds a Foundry actor from `name`, `race`, `affiliation`, `summary`, `status`, and `keyEvents` |

There are ~129 records today. **One record per character.** Do not put
multiple characters in one object and do not put items here — items live in
the shop catalog (see [§1.7](#17-items-are-not-here--they-live-in-the-shop-catalog)).

## 1.2 The schema

```json
{
  "id": "new_character_slug",
  "name": "New Character",
  "title": "The Epithet That Sums Them Up",
  "image": "portraits/new_character.png",
  "race": "Toad (Unknown — skilled at disguise)",
  "status": "Active — <where they are right now>",
  "affiliation": "Liberated Toads / Disaster Inc.",
  "faction": "liberated_toads",
  "membership": "Field Cell — Liberated Toads",
  "summary": "One to three sentences: who they are and what is happening to them right now.",
  "description": "Long form. Markdown. ## section headers allowed. Waluigi archival voice.",
  "keyEvents": ["event_id_1", "event_id_2"],
  "relatedArticles": ["article_id_1", "article_id_2"]
}
```

### Field reference

| Field | Required | Type | Notes |
|---|---|---|---|
| `id` | ✅ | string | Lowercase `snake_case`. **Stable forever** — it is the URL key, the XP-link key, and the Character Creator's lookup key. See [§1.3](#13-id-conventions--linking-to-the-xp-ledger). |
| `name` | ✅ | string | Display name, exactly how the wiki should show it. |
| `title` | ✅* | string | The epithet line, e.g. `"The Infiltrator Who Triggered the Massacre"`. The XP ledger's "Dossier Filed" entry quotes it, so make it good. *Every existing record has one.* |
| `image` | 🟡 | string | Path to a portrait, e.g. `portraits/bones.png`. Optional for NPCs, expected for PCs. |
| `race` | 🟡 | string | Free text. The Character Creator strips parentheticals (`Toad (Unknown — …)` → `Toad`) for the Foundry race name. |
| `status` | ✅ | string | **Follow the house pattern:** `"Active — <current location / situation>"`. The XP ledger copies this into the dossier entry; the Creator puts it in the sheet biography. A vague status makes the dossier read stale. |
| `affiliation` | 🟡 | string | Human-readable allegiance string. |
| `faction` | 🟡 | string | Machine id of a faction from `data/factions.json` (e.g. `liberated_toads`). |
| `membership` | 🟡 | string | Role inside the faction, e.g. `"Hardened Survivor"`, `"Field Cell"`. |
| `summary` | ✅ | string | 1–3 sentences. Used as the wiki lede, the Creator's biography seed, and the dossier blurb. **Who are they + what is happening to them right now.** |
| `description` | 🟡 | string | The full article. Markdown with `##` sections. Follow the tone rules in `../STORY_FORMAT_GUIDE.md` (physical prose, Waluigi as auditor, ~80/20 story/analysis). |
| `keyEvents` | 🟡 | string[] | **Event/battle ids that must exist in `data/events.json` or `data/battles.json`.** The Creator auto-pulls them into `Witness:` feats; the XP ledger uses them to grant discovery XP. |
| `relatedArticles` | 🟡 | string[] | Article ids the wiki should cross-link (factions, locations, other characters). |
| `aliases` | 🟡 | string[] | Other names the wiki/ledger should recognize. |
| `familyTreeSecrets` / `familyTreeSource` | 🟡 | object/string | Only for the family-tree feature (see the `sans` record). |

### Two worked examples from the real file

**Minimal (NPC):**

```json
{
  "id": "dracule_mihawk",
  "name": "Dracule Mihawk",
  "title": "The Hawk of Blackfen Pass",
  "race": "Human (Old World)",
  "status": "Active — accompanying the Legionary Agent into Mount Ebott",
  "affiliation": "Independent / Observer of the Old World",
  "summary": "Dracule Mihawk, known as the Hawk of Blackfen Pass, is a legendary swordsman and silent observer of the Old World's many crises.",
  "description": "Mihawk is a man of few words and absolute precision. …",
  "keyEvents": ["mount_ebott_survey_mission"],
  "relatedArticles": ["iron_legion", "mount_ebott", "snowdin_town"]
}
```

**Full (PC with family-tree + faction):**

```json
{
  "id": "sans",
  "name": "Sans",
  "title": "The Bone-Line Family",
  "race": "Skeleton",
  "status": "Active — operating in Snowdin",
  "affiliation": "Monster Underground",
  "faction": "undertale_monsters",
  "membership": "Snowdin Watch / Bone-Line registry",
  "summary": "…",
  "description": "…",
  "image": "portraits/sans.png",
  "keyEvents": [],
  "relatedArticles": ["snowdin_town"],
  "familyTreeSecrets": [
    { "text": "…" }
  ],
  "familyTreeSource": "…"
}
```

## 1.3 ID conventions & linking to the XP ledger

**The single most important rule in this file:**

> The `id` you choose is the key every other system uses to find this person.
> Choose it once, choose it well, never rename it.

Rules of thumb:

- Lowercase, `snake_case`, ASCII: `toad_lee`, `green_t`, `the_oracle`.
- Prefer the short, obvious slug. If two characters share a name, disambiguate
  by role: `original_dan` vs `feyward_dan`.
- **To get an XP dossier** the id must reach a `PLAYERS` key in
  `../xp.html`. That happens one of two ways:
  1. The id **is** the player key (e.g. `bones`, `markop`), or
  2. The id is mapped by `MANUAL_CHARACTER_LINKS` at the top of `xp.html`
     (e.g. `toad_lee` → `toadlee`, `remi_akamatsu_full_backstory` → `remi`).
- **Before creating a character that should earn XP**, open `xp.html`, find
  `const MANUAL_CHARACTER_LINKS = { … }`, and check whether the id already
  resolves. If the ledger player key differs from your slug, add a line to
  `MANUAL_CHARACTER_LINKS` (or use the exact player key as the id).
- **`level` / `xp` / `currentXP` do not belong in `characters.json`.** XP is
  earned and filed in the XP ledger (`xp.html` → `PLAYERS`), never hand-stamped
  into the lore file. If you need a starting level on a sheet, that goes in the
  Foundry actor (Part 2), where the Creator derives it deterministically.

## 1.4 Writing quality — the short standards

1. **`status` must be a location + situation**, not a one-word state.
   `"Active"` alone is a stub. `"Active — resting at an Alpine Mountain Inn
   near Midgrual after escaping the Planar Sanctum"` is a dossier.
2. **`summary` answers two questions:** who are they, and what is happening to
   them *now*. It is not a biography dump — that is `description`'s job.
3. **`description` uses markdown sections** (`## Combat and Demeanor`,
   `## Assessment`) and keeps the archive voice: Waluigi as forensic auditor,
   physical prose, named consequences. See `../STORY_FORMAT_GUIDE.md` for the
   full craft standard — the same bar applies to character dossiers.
4. **Dangling references are lint failures.** Every `keyEvents` id must exist
   in `data/events.json` or `data/battles.json`; every `relatedArticles` id
   should resolve to an article route (factions, locations, battles, etc.).
   Run the validator in [§3.4](#34-validation-scripts).

## 1.5 What the Hub Character Creator reads (so write for it)

`tools/hub/hubcore/creator.py` builds a Foundry actor from your record:

- **Name / race / affiliation / summary / status** → actor name, race item,
  and the biography block (summary + `Status:` + `Affiliation:` + tied events).
- **Class** is *suggested from the text* (keyword scan over
  `CLASS_KEYWORDS` — `spy`/`shadow` → Rogue, `soldier`/`legion` → Fighter,
  `mage`/`arcane` → Wizard…). If the record's `description` never hints at a
  class, the actor gets Fighter with a generic spread.
- **Gear** is picked from the real shop catalog using class keywords (+ the
  faction name as a bonus keyword), level-scaled by price tiers, then converted
  into Foundry item documents.
- **`keyEvents`** become `Witness: <event name>` roleplay feats on the actor,
  each carrying the event's summary, date, era, location, and type.

**Practical consequence:** a character record whose `summary`/`description`
mention "shadow", "disguise", "infiltration" produces a stealth-flavored Rogue
with appropriate starting gear. Write the lore first, the mechanics follow.

## 1.6 What the XP ledger reads

Every record with a resolvable player key earns a **"Dossier Filed" XP entry**
in `xp.html`/`xp-ledger-final.html`:

- `title` → the dossier title line.
- `status` → the dossier status line.
- `summary` → the dossier blurb.

Keep those three fields crisp — they are quoted verbatim in the ledger.

## 1.7 Items are NOT here — they live in the shop catalog

`characters.json` is people only. **Items** (weapons, consumables, gear) live
in the shop catalog:

```
../../data/shop-items/items_###.js   # one ES module per chunk, e.g. ITEMS_002
../../data/shop-items/categories.js  # categories
../../data/shop-items/vendors.js     # vendors
```

A shop item record looks like:

```js
export const ITEMS_002 = {
  "a_relic_that_amplifies_your": {
    "id": "a_relic_that_amplifies_your",
    "name": "Echo Talisman",
    "description": "…",
    "price": 28000,
    "icon": "🎵",
    "stock": 2,
    "rarity": "epic",
    "effects": ["Resonant Amplification", "Echoing Aftershock"],
    "vendor": "teyvat",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 7,
    "levelRequirementReason": "…",
    "effectDetails": [
      { "title": "Resonant Amplification", "rules": "…" },
      { "title": "Echoing Aftershock", "rules": "…" }
    ]
  }
}
```

The Hub's **Character Creator** and **Item Piles** convert these shop records
into Foundry item documents automatically (`foundry.shop_item_to_foundry()`),
choosing the FVTT item type by keyword/name (`sword` → `weapon`, `potion` →
`consumable`, `book` → `loot`, …). So:

> **Do not hand-write Foundry items for shop gear.** Add the item to the shop
> catalog once and let the hub convert it. Hand-write items only for unique
> sheet-only gear (class features, homebrew one-offs) or when editing an
> exported actor directly.

---

# Part 2 — Foundry VTT actor JSON (the "item sheets")

## 2.1 What these files are

The three JSON files in this folder are **Foundry VTT `dnd5e` actor exports**
(Foundry core v14, dnd5e system 5.x). They are what the game table actually
imports. Two shapes exist:

- **Character actor** (`type: "character"`, full `system`) — a player sheet:
  abilities, attributes, skills, details, plus item documents for class, race,
  background, feats, spells, weapons, gear. (`archie`, `hjumpik`)
- **Item pile actor** (`type: "character"` + `flags["item-piles"]`) — a
  lootable pile containing only item documents. (`default-item-pile`)

## 2.2 Top-level envelope

```json
{
  "name": "Archie Miser",
  "type": "character",
  "img": "token_1.png",
  "system": { "…" },
  "prototypeToken": { "…" },
  "items": [ "…" ],
  "effects": [],
  "folder": null,
  "flags": { "…" },
  "ownership": { "default": 0 },
  "_stats": { "…" },
  "_id": "…"
}
```

| Key | Required | Notes |
|---|---|---|
| `name` | ✅ | Display name. |
| `type` | ✅ | Always `"character"` for these examples. |
| `img` | 🟡 | Actor portrait path (relative to your Foundry data, or a web path). |
| `system` | ✅ | The sheet data — see [§2.3](#23-system--the-character-sheet). |
| `prototypeToken` | 🟡 | Token defaults — see [§2.5](#25-prototypetoken). |
| `items` | ✅ | Array of item documents — see [§2.4](#24-items--the-item-documents). |
| `effects` | 🟡 | Active effects (usually `[]` on exports; add via Foundry UI). |
| `folder` | 🟡 | Folder id if the actor lives in a Foundry folder; `null` is fine. |
| `flags` | 🟡 | Module flags. **Required for piles** (`flags["item-piles"]`). Also used to stamp provenance (`flags["waluipedia"]`). |
| `ownership` | 🟡 | `{ "default": 0 }` (observer) is the standard export value. |
| `_stats` | 🟡 | Export metadata (Foundry/system versions, timestamps). See [§2.6](#26-_stats--export-metadata). |
| `_id` | 🟡 | Unique id (16-char base64-ish). The hub generates one; any unique string works. |

## 2.3 `system` — the character sheet

Exported sheets use these top-level keys (all of them; keep them all):

```
abilities  bonuses  skills  tools  spells  attributes
details    traits   resources  favorites  currency  bastion
```

### `system.abilities`

```json
"abilities": {
  "str": { "value": 13, "proficient": 0, "bonuses": { "check": "", "save": "" }, "max": null },
  "dex": { "value": 14, "proficient": 0, "bonuses": { "check": "", "save": "" }, "max": null },
  "con": { "value": 14, "proficient": 0, "bonuses": { "check": "", "save": "" }, "max": null },
  "int": { "value": 10, "proficient": 0, "bonuses": { "check": "", "save": "" }, "max": null },
  "wis": { "value": 12, "proficient": 0, "bonuses": { "check": "", "save": "" }, "max": null },
  "cha": { "value": 9,  "proficient": 0, "bonuses": { "check": "", "save": "" }, "max": null }
}
```

`proficient: 1` marks a **saving throw** proficiency (also add the save to
`flags.dnd5e`/`system.bonuses` as Foundry does on export — simplest: set
`proficient` via the Foundry UI and re-export rather than hand-editing).

### `system.attributes`

The important block (abbreviated):

```json
"attributes": {
  "ac":  { "flat": 11, "calc": "default", "formula": "" },
  "hp":  { "value": 1, "max": 42, "temp": 0, "tempmax": 0, "bonuses": {} },
  "init": { "bonus": "0", "ability": "", "roll": { "min": null, "max": null, "mode": 0 } },
  "movement": { "walk": 30, "units": "ft", "hover": false, "burrow": 0, "climb": 0, "fly": 0, "swim": 0, "ignoredDifficultTerrain": [] },
  "senses": { "units": "ft", "special": "", "ranges": { "darkvision": 0, "blindsight": 0, "tremorsense": 0, "truesight": 0 } },
  "spellcasting": "",
  "death": { "success": 0, "failure": 0, "roll": { "min": null, "max": null, "mode": 0 }, "bonuses": { "save": "" } },
  "exhaustion": 0,
  "inspiration": false,
  "attunement": { "max": 3 },
  "concentration": { "ability": "", "roll": { "min": null, "max": null, "mode": 0 }, "bonuses": { "save": "" }, "limit": 1 }
}
```

- `hp.max` is the real maximum; `hp.value` is current (often `1` after a fresh
  import if the token sheet hasn't loaded — harmless).
- `ac.flat` + `ac.calc: "default"` lets armor items compute; `"flat"` forces
  the number.

### `system.details`

```json
"details": {
  "biography": { "value": "<p>…</p>", "public": "" },
  "alignment": "",
  "race": null, "background": null, "originalClass": "",
  "xp": { "value": 0 },
  "appearance": "", "trait": "", "ideal": "", "bond": "", "flaw": "",
  "eyes": "", "height": "", "faith": "", "hair": "", "weight": "",
  "gender": "", "skin": "", "age": ""
}
```

`biography.value` is **HTML**. The hub's Creator fills it from
`characters.json` (`summary` + `Status:` + `Affiliation:` + tied events).

### `system.traits`

```json
"traits": {
  "size": "med",
  "languages": { "value": ["common"], "custom": "", "communication": {} },
  "di": { "value": [], "custom": "", "bypasses": [] },
  "dr": { "value": [], "custom": "", "bypasses": [] },
  "dv": { "value": [], "custom": "", "bypasses": [] },
  "ci": { "value": [], "custom": "" },
  "armorProf": { "value": [], "custom": "" },
  "weaponProf": { "value": [], "custom": "", "mastery": { "value": [], "bonus": [] } }
}
```

Size hint map used by the Creator: toad/goomba/halfling/gnome/dwarf → `sml`,
koopa → `med`, giant/dragon → `lg`.

### `system.skills` / `tools` / `spells` / `resources` / `currency`

```json
"skills": { "ath": { "value": 1, "ability": "str", "bonuses": { "check": "", "passive": "" } }, "…": {} },
"tools": {},
"spells": { "spell0": { "value": 0, "override": null }, "spell1": { "value": 1, "override": null }, "…spell9": {} },
"resources": {
  "primary":   { "value": null, "max": null, "sr": false, "lr": false, "label": "" },
  "secondary": { "value": null, "max": null, "sr": false, "lr": false, "label": "" },
  "tertiary":  { "value": null, "max": null, "sr": false, "lr": false, "label": "" }
},
"currency": { "pp": 0, "gp": 0, "ep": 0, "sp": 0, "cp": 0 }
```

The hub writes `currency.gp/sp/cp` from `data/wallets.json` balances.

## 2.4 `items` — the item documents

Every item document shares this envelope:

```json
{
  "_id": "Y2CXQIKuvgUXFWep",
  "name": "Bead of Force",
  "type": "consumable",
  "img": "icons/commodities/gems/pearl-purple-dark.webp",
  "system": { "…" },
  "effects": [],
  "folder": null,
  "flags": {},
  "sort": 650000,
  "ownership": { "default": 0 },
  "_stats": { "…" }
}
```

### The item types you will see in the examples

| `type` | Meaning | Example in the pile |
|---|---|---|
| `weapon` | Weapons, incl. natural weapons | Handaxe, Blowgun, Unarmed Strike |
| `equipment` | Worn/held gear, armor, wondrous items | Arrow-Catching Shield, Fire-Casting Statue, Bag of Beans |
| `consumable` | Ammo, potions, one-shot items | Arrows, Bead of Force, Manacles |
| `tool` | Toolkits | Alchemist's Supplies, Cobbler's Tools |
| `container` | Bags, packs, quivers | Bag of Holding, Pouch, Backpack |
| `loot` | Trinkets, books, coins, misc | Book of Lore, Parchment, Small Knife |
| `class` / `race` / `background` / `feat` / `spell` / `subclass` | Character-defining documents | Wizard, Human, City Watch, Fire Bolt (in the *character* actors) |

### Required fields per type (system-level)

**All types** must have at least:

```json
"system": {
  "description": { "value": "<p>flavor/rules text</p>", "chat": "" },
  "quantity": 1,
  "weight": { "value": 0, "units": "lb" },
  "price": { "value": 5, "denomination": "gp" },
  "rarity": "",
  "attunement": "",
  "identified": true,
  "unidentified": { "description": "" },
  "source": { "custom": "", "rules": "2024", "license": "CC-BY-4.0", "book": "", "revision": 1 }
}
```

**`weapon`** adds:

```json
"type": { "value": "simpleM", "baseItem": "handaxe" },
"damage": {
  "base": { "number": 1, "denomination": 6, "types": ["slashing"], "custom": { "enabled": false }, "scaling": { "number": 1 }, "bonus": "" },
  "versatile": { "number": null, "denomination": null, "bonus": "", "types": [], "custom": { "enabled": true, "formula": "" }, "scaling": { "mode": "", "number": null, "formula": "" } }
},
"range": { "value": 20, "long": 60, "units": "ft", "reach": null },
"properties": ["lgt", "thr"],
"proficient": null,
"armor": { "value": null },
"hp": { "value": null, "max": null, "dt": null, "conditions": "" },
"uses": { "max": "", "spent": 0, "recovery": [] },
"activities": { "…": {} },
"ammunition": { "…": {} }
```

Damage dice live in `damage.base.number` (count) + `damage.base.denomination`
(die size). Property codes: `lgt` light, `thr` thrown, `amm` ammunition,
`lod` loading, `fir` finesse, `hvy` heavy, `rch` reach, `two` two-handed,
`ver` versatile, `mag` magic.

**`equipment`** adds:

```json
"type": { "value": "shield", "baseItem": "" },
"armor": { "value": 2, "dex": null, "base": 2, "type": "shield" },
"proficient": null,
"strength": null,
"equipped": false,
"properties": []
```

Wondrous items / magic gear are still `equipment` — their special rules live
in `system.description.value` and `system.activities[]` (see below).

**`consumable`** adds:

```json
"type": { "value": "potion", "baseItem": "" },
"uses": { "max": "1", "spent": 0, "autoDestroy": true, "recovery": [] },
"damage": { "base": { "number": null, "denomination": 0, "types": [], "custom": { "enabled": false }, "scaling": { "number": 1 }, "bonus": "" }, "replace": false },
"activities": { "…": {} }
```

Ammo like arrows uses `quantity: 20` and `type.value: "ammo"`.

**`tool`** adds:

```json
"type": { "value": "art", "baseItem": "alchemist" },
"ability": "int",
"proficient": null,
"bonus": "",
"chatFlavor": "",
"properties": []
```

**`container`** adds:

```json
"capacity": { "type": "weight", "value": 500 },
"currency": { "pp": 0, "gp": 0, "ep": 0, "sp": 0, "cp": 0 },
"properties": []
```

**`loot`** is minimal — description, price, quantity, weight, rarity. Books,
parchment, ink, small knives all live here.

**`class` / `race` / `background` / `feat` / `spell`** (character actors):

```json
// class
"system": {
  "description": { "value": "", "chat": "" },
  "identifier": "wizard",
  "levels": 1,
  "hitDice": "d6",
  "spellcasting": { "…": {} },
  "primaryAbility": ["int"],
  "startingEquipment": { "…": {} },
  "advancement": [],
  "source": { "…": {} },
  "wealth": "…",
  "hd": { "…": {} },
  "properties": []
}
```

```json
// spell
"system": {
  "description": { "value": "", "chat": "" },
  "identifier": "fire-bolt",
  "level": 0,
  "school": "evo",
  "activation": { "type": "action", "value": 1, "condition": "", "override": false },
  "duration": { "units": "inst", "value": "", "concentration": false, "override": false },
  "range": { "value": "120", "units": "ft", "long": null },
  "target": { "value": 1, "units": "", "type": "creature", "affects": { "type": "creature", "count": "1", "choice": false, "special": "" } },
  "damage": { "parts": [], "versatile": "" },
  "materials": { "value": "", "consumed": false, "cost": 0, "supply": 0 },
  "properties": ["vocal", "somatic"],
  "prepared": false,
  "uses": { "spent": 0, "max": "", "recovery": [] },
  "ability": "",
  "method": "cantrip",
  "activities": { "…": {} }
}
```

`feat` and `background` sit between the two: description + identifier +
`prerequisites`/`requirements` (feat) or `startingEquipment` (background) +
`advancement: []`.

### `activities` (dnd5e 5.x)

Newer exports carry an `activities` map on items that act. Each activity has a
type — `attack`, `save`, `check`, `utility`, `heal`, `damage`, `summon` — and
carries its own `activation`, `consumption`, `duration`, `range`, `target`,
`damage.parts`, `uses`, `effects`. Hand-writing activities is fiddly; **the
reliable path is: create the item in Foundry (or drag from a compendium) and
export.** For hand-written items, a plain description + a simple `attack` or
`save` activity is enough to roll from the sheet.

## 2.5 `prototypeToken`

```json
"prototypeToken": {
  "name": "Archie Miser",
  "displayName": 30,
  "actorLink": true,
  "width": 1, "height": 1,
  "texture": { "src": "token_1.png", "scaleX": 1, "scaleY": 1, "offsetX": 0, "offsetY": 0, "rotation": 0 },
  "lockRotation": false,
  "rotation": 0, "alpha": 1,
  "disposition": 1,
  "displayBars": 20,
  "bar1": { "attribute": "attributes.hp" },
  "bar2": { "attribute": "" },
  "light": { "…": {} }, "sight": { "…": {} }, "detectionModes": [],
  "ring": { "enabled": false, "colors": { "ring": null, "background": null }, "effects": [] },
  "flags": {}
}
```

`actorLink: true` links the token to the actor (shared HP). `displayBars: 20`
shows the bar to everyone; `disposition: 1` is friendly/NPC-ally.

## 2.6 `_stats` — export metadata

```json
"_stats": {
  "compendiumSource": null,
  "duplicateSource": null,
  "exportSource": { "worldId": "waluipedia-hub", "uuid": "Actor.…", "coreVersion": "14.360", "systemId": "dnd5e", "systemVersion": "5.3.3" },
  "coreVersion": "14.360",
  "systemId": "dnd5e",
  "systemVersion": "5.3.3",
  "createdTime": 1782005283501,
  "modifiedTime": 1784258301147,
  "lastModifiedBy": "f9K62vO9hIl1GByi"
}
```

Keep `systemId: "dnd5e"`. Timestamps are epoch milliseconds. If you hand-copy
an example, updating `createdTime`/`modifiedTime` is polite but not required
for import.

## 2.7 `flags` — provenance & piles

- **Character actors** usually carry module flags (`midi-qol`, `dae`,
  `dnd5e`, …) from the exporting world. They are safe to keep or strip; they
  do not affect import.
- The hub stamps its generated actors with:

```json
"flags": {
  "waluipedia": {
    "kind": "generated-character",
    "generatedAt": "…",
    "sourceCharacterId": "bones",
    "eventIds": ["…"],
    "factionId": "…",
    "usedModel": false
  }
}
```

- **Item piles require the `item-piles` module flag** (this is what makes the
  actor lootable in-game):

```json
"flags": {
  "item-piles": {
    "data": {
      "enabled": true,
      "type": "pile",
      "deleteWhenEmpty": false,
      "displayOne": false,
      "showItemName": true,
      "overrideSingleItemScale": true,
      "singleItemScale": 0.75
    },
    "version": "3.3.4"
  }
}
```

A pile actor's `items[]` are the lootable contents; its `system` is the same
character shape (so it can hold currency), but it is not meant to move or
fight: hub-generated piles set `attributes.movement.walk` to `0` and
`ac.calc` to `"flat"` (the reference export shows `null` / `"default"` —
both import fine).

---

# Part 3 — Recipes & validation

## 3.1 Recipe: add a new player character

1. **Write the lore record** in `data/characters.json`
   - Pick a stable `id` (see [§1.3](#13-id-conventions--linking-to-the-xp-ledger)).
   - Fill `name`, `title`, `race`, `status` ("Active — where"), `affiliation`,
     `summary`, `description`, `keyEvents` (ids that must exist in
     `data/events.json` or `data/battles.json`), `relatedArticles`.
   - Hint at class/combat style in the text so the Creator's keyword scan
     lands right.
2. **Make sure they have an XP path** — if the character should earn XP, the id
   must resolve to a `PLAYERS` key in `xp.html` (either directly or via
   `MANUAL_CHARACTER_LINKS`).
3. **Run the Creator** — `python tools/hub/server.py` → **Create a character
   from lore** → pick the character → (optional) pick faction/events/class →
   **Create actor JSON**. Output lands in `tools/hub/.hub-out/actors/`.
4. **Review the actor** — open the JSON, check the class/race/background
   items, the gear the shop suggested, HP/AC, and the biography.
5. **Promote it** — copy the finished actor into
   `tools/item sheet examples/` as `fvtt-Actor-<name-slug>.json` (and commit),
   or import straight into Foundry.

## 3.2 Recipe: build a character sheet by hand (no hub)

1. Copy `fvtt-Actor-hjumpik-deldkur-6eBoDhCt0i3e3qZ4.json` (or archie) as a
   starting envelope.
2. Replace `name`, `img`, `prototypeToken.name`, `_stats.timestamps`, `_id`.
3. Edit `system.abilities` (six values), `system.attributes.hp/ac/movement`,
   `system.details.biography` (HTML), `system.currency`.
4. Replace `items[]`: keep one `class`, one `race`, one `background` document
   (edit `identifier`/`description`), add `feat`/`spell`/`weapon`/`equipment`
   documents following the per-type schema in [§2.4](#24-items--the-item-documents).
5. Validate JSON, import into Foundry, open the sheet and sanity-check
   calculated values (saves, skills, AC, HP).

## 3.3 Recipe: Bones as a real player character (worked reference)

`fvtt-Actor-bones-level-5-infiltrator-player.json` is intentionally a **PC**, not
an NPC. It is the concrete worked example for the Bones request and is larger
than a minimal export so that the actor remains useful as campaign source
material. It contains 49 documents and more than 1,000 formatted JSON lines.

### What the build means

- **Class:** Rogue-style Infiltrator, level 5. This is a rules translation of
  the evidence in the project—disguise, stealth, eavesdropping, scouting,
  escape, and choosing a retreat—not a claim that the lore file previously
  declared a D&D class. The `flags.bik.class` field records that interpretation.
- **Ability emphasis:** Dexterity 16, Constitution 14, Intelligence 13,
  Wisdom 12, Strength 10, Charisma 8. The build is competent at stealth and
  investigation without turning Bones into an unrealistically perfect hero.
- **Player-facing features:** Sneak Attack, Cunning Action, Uncanny Dodge,
  Evasion, Expertise, Planar Survivor, Oracle Refusal, and Field Judgment.
  The last three are campaign features and should be reviewed by the GM.
- **Equipment:** longsword, vile mace, light crossbow, wooden shield, leather
  armor, winter coat, disguise kit, thieves’ tools, the two stolen books, the
  Thornbury field journal, and the circle-repair components.
- **Chronology cards:** the actor includes event cards for the Spider Grove,
  Solarium, Vigilance, Aegis Command, Order 120, Raventree, the Planar Sanctum,
  Canoloth, Astral Altar, Alpine Bank, Arunedeal, and the Legion checkpoint.
  They are reference documents; they do **not** award XP a second time.

### Ledger and sheet authority

The actor's `system.details.xp.value` and `flags.bik.ledgerXP` are snapshots of
the authoritative `PLAYERS.bones` dossier: Level 5, 7,880 XP, 23 entries, Power
8, Fame 52. Do not edit `characters.json` to change progression and do not add
XP again because a chronology card is present. File new earned XP in the ledger
first, then regenerate or update the actor snapshot deliberately. The actor's
`flags.bik.playerCharacter: true` and `npc: false` make its intended use explicit.

### Canon choices left open on purpose

The sheet does not invent Bones's true name, ancestry, exact face, or a magical
explanation for the Toad God's intervention. It uses “Unknown / disguised
humanoid” and records those questions in the biography. A player can resolve
one of them in play without having to retcon the entire actor. Likewise, the
Canoloth miss and the decision not to attack the Legion wall remain in the
chronology: a fleshed-out player character should preserve failures and choices,
not only bonuses.

### Import checklist

1. Make a backup of the actor JSON and the world before importing.
2. Import as an Actor with type `character` in a `dnd5e` world using the same
   major system version as the examples (the export metadata says core 14.360
   and dnd5e 5.3.3).
3. Confirm the sheet is Level 5 and that HP, AC, skills, and equipment are
   visible. Foundry may recalculate derived values after import.
4. Confirm the actor is owned by the player who will play Bones. The JSON's
   ownership is intentionally neutral (`default: 0`).
5. Do not drag the chronology cards into a combat encounter as enemies. They are
   lore/feat documents attached to a player sheet.

## 3.4 Recipe: make a loot / item pile

1. Either run **Item Piles** in the hub (reads `shop-purchases.json`,
   resolves receipts against the shop catalog, writes one pile per player to
   `tools/hub/.hub-out/item-piles/`), or hand-build a pile:
2. Copy `fvtt-Actor-default-item-pile-WF1OTqeH4049Rt9B.json`.
3. Replace `name`, keep `type: "character"` and **keep the `flags["item-piles"]`
   block** — without it the actor is a normal character, not a pile.
4. Replace `items[]` with your loot (weapons/equipment/consumables/tools/
   containers/loot per [§2.4](#24-items--the-item-documents)). Set `quantity`
   on stacks; merge duplicates instead of adding a second document.
5. Set `system.currency` to the pile's coin if any; `attributes.movement.walk`
   stays `0` (or `null`, as in the reference export).
6. Import in Foundry with the **item-piles** module enabled; drop the actor on
   a scene — players can now loot it.

## 3.4 Validation scripts

Always validate before committing:

```bash
# 1. Every JSON file must parse
python -m json.tool "Reputation-Matrix2/data/characters.json" > /dev/null && echo OK
python -m json.tool "Reputation-Matrix2/tools/item sheet examples/fvtt-Actor-archie-miser-hSu2jXk6IxqmByBe.json" > /dev/null && echo OK

# 2. characters.json structural checks (duplicate ids, required fields,
#    dangling keyEvents — events.json + battles.json are both valid targets)
python - <<'EOF'
import json
people = json.load(open('Reputation-Matrix2/data/characters.json'))
known = {e['id'] for e in json.load(open('Reputation-Matrix2/data/events.json'))}
known |= {b['id'] for b in json.load(open('Reputation-Matrix2/data/battles.json'))}
ids = [p.get('id') for p in people]
assert len(ids) == len(set(ids)), 'duplicate character ids'
for p in people:
    for field in ('id', 'name', 'status'):
        assert p.get(field), f'{p.get("id")}: missing {field}'
dangling = [(p['id'], ev) for p in people for ev in p.get('keyEvents', []) if ev not in known]
if dangling:
    print(f'WARNING: {len(dangling)} keyEvents reference ids that do not exist '
          f'in events.json or battles.json (legacy debt — re-point or remove):')
    for pid, ev in dangling[:10]:
        print(f'  {pid} -> {ev}')
print(f'{len(people)} records OK — ids unique, required fields present')
EOF

> **Legacy debt note:** at the time of writing there were ~70 dangling
> `keyEvents` references (e.g. `greenhouse_survey`) that exist in neither
> `events.json` nor `battles.json`. They still render in the wiki but link to
> nothing and feed nothing to the hub — re-point them at a real record or
> remove them as you touch each character. The validator above warns, it does
> not fail on them.

# 3. FVTT actor checks (each actor parses, each item has a name/type/system)
python - <<'EOF'
import json, glob
for path in glob.glob('Reputation-Matrix2/tools/item sheet examples/fvtt-*.json'):
    a = json.load(open(path))
    assert a['type'] == 'character' and 'system' in a and 'items' in a
    for it in a['items']:
        assert it.get('name') and it.get('type') and isinstance(it.get('system'), dict), it
    print(f'{path.split("/")[-1]}: {len(a["items"])} items OK')
EOF
```

The hub's **Dashboard** (tools/hub/server.py) also flags receipts that
reference items that no longer exist, and its **data** tab opens every JSON
file for inspection.

## 3.5 Naming conventions — keep these

| Artifact | Pattern | Example |
|---|---|---|
| characters.json record id | `lower_snake_case` | `toad_lee` |
| Character actor file | `fvtt-Actor-<name-slug>.json` | `fvtt-Actor-archie-miser-hSu2jXk6IxqmByBe.json` |
| Item pile actor file | `fvtt-Actor-<name>-item-pile.json` | `fvtt-Actor-default-item-pile-WF1OTqeH4049Rt9B.json` |
| Shop item key / id | `lower_snake_case` (same string both places) | `a_relic_that_amplifies_your` |
| Event id | `lower_snake_case`, referenced from characters.json | `the_estragon_island_incident` |

## 3.6 The mental model (one paragraph)

`characters.json` is **the wiki's memory** — prose, status, and links. The
shop catalog (`../../data/shop-items/*.js`) is **the world's inventory**. The XP
ledger (`xp.html`) is **the earned-progression record**. The JSON files in
this folder are **the game-table artifacts** — Foundry exports built from all
three by the Hub (Character Creator for people, Item Piles for loot). Write
the lore and the catalog; let the tools build the sheets; hand-edit the
sheets only when you need a one-off that the tools don't produce; and keep
every file valid JSON before it ships.
