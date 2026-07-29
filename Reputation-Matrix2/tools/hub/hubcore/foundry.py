"""Builders for Foundry VTT (dnd5e) actor and item documents.

The shapes here were derived from the reference exports in
`tools/item sheet examples/` (Foundry core 14.360 / dnd5e 5.3.3):

  * fvtt-Actor-default-item-pile-*.json  -> item-pile actor skeleton + flags
  * fvtt-Actor-archie-miser-*.json       -> full character actor skeleton

Only the fields Foundry actually needs are emitted; the importer fills in the
rest of the schema on load. Everything is deterministic apart from the random
document IDs.
"""
from __future__ import annotations

import hashlib
import random
import re
import string
from datetime import datetime, timezone
from typing import Any, Iterable

CORE_VERSION = "14.360"
SYSTEM_ID = "dnd5e"
SYSTEM_VERSION = "5.3.3"
ID_ALPHABET = string.ascii_letters + string.digits

ABILITIES = ("str", "dex", "con", "int", "wis", "cha")
SKILLS = ("acr", "ani", "arc", "ath", "dec", "his", "ins", "itm", "inv",
          "med", "nat", "prc", "prf", "per", "rel", "slt", "ste", "sur")
SKILL_ABILITY = {
    "acr": "dex", "ani": "wis", "arc": "int", "ath": "str", "dec": "cha",
    "his": "int", "ins": "wis", "itm": "cha", "inv": "int", "med": "wis",
    "nat": "int", "prc": "wis", "prf": "cha", "per": "cha", "rel": "int",
    "slt": "dex", "ste": "dex", "sur": "wis",
}

# Shop category -> Foundry item type. Anything unmapped becomes loot, which is
# always safe to import.
CATEGORY_TO_TYPE = {
    "consumables": "consumable",
    "consumable": "consumable",
    "equipment": "equipment",
    "curiosities": "loot",
    "services": "loot",
    "faction": "loot",
    "forbidden": "loot",
    "premium": "loot",
}

RARITY_MAP = {
    "common": "common",
    "uncommon": "uncommon",
    "rare": "rare",
    "epic": "veryRare",
    "very rare": "veryRare",
    "legendary": "legendary",
    "artifact": "artifact",
    "mythic": "artifact",
}

# Keyword -> (item type, icon) so a "Sword of X" arrives as a weapon rather than
# a generic loot pile entry.
_TYPE_HINTS: tuple[tuple[str, str, str], ...] = (
    ("potion", "consumable", "icons/consumables/potions/bottle-round-corked-red.webp"),
    ("elixir", "consumable", "icons/consumables/potions/bottle-conical-corked-red.webp"),
    ("tonic", "consumable", "icons/consumables/potions/bottle-bulb-corked-glowing-red.webp"),
    ("draught", "consumable", "icons/consumables/potions/bottle-bulb-corked-red.webp"),
    ("ration", "consumable", "icons/consumables/food/bread-loaf-boule-rustic-brown.webp"),
    ("grenade", "consumable", "icons/weapons/thrown/bomb-fuse-black.webp"),
    ("bomb", "consumable", "icons/weapons/thrown/bomb-fuse-lit.webp"),
    ("scroll", "consumable", "icons/sundries/scrolls/scroll-runed-brown.webp"),
    ("mushroom", "consumable", "icons/consumables/mushrooms/mushroom-cap-red-white.webp"),
    ("sword", "weapon", "icons/weapons/swords/sword-guard-brass.webp"),
    ("blade", "weapon", "icons/weapons/swords/sword-broad-worn.webp"),
    ("axe", "weapon", "icons/weapons/axes/axe-broad-brown.webp"),
    ("hammer", "weapon", "icons/weapons/hammers/hammer-war-spiked.webp"),
    ("bow", "weapon", "icons/weapons/bows/bow-recurve-brown.webp"),
    ("spear", "weapon", "icons/weapons/polearms/spear-flared-worn.webp"),
    ("dagger", "weapon", "icons/weapons/daggers/dagger-straight-blue.webp"),
    ("cannon", "weapon", "icons/weapons/artillery/cannon-engraved-gold.webp"),
    ("gun", "weapon", "icons/weapons/guns/gun-blunderbuss-gold.webp"),
    ("armor", "equipment", "icons/equipment/chest/breastplate-layered-steel.webp"),
    ("shield", "equipment", "icons/equipment/shield/heater-steel-boss.webp"),
    ("cloak", "equipment", "icons/equipment/back/cloak-heavy-fur-blue.webp"),
    ("helm", "equipment", "icons/equipment/head/helm-barbute-steel.webp"),
    ("boots", "equipment", "icons/equipment/feet/boots-leather-engraved-brown.webp"),
    ("gloves", "equipment", "icons/equipment/hand/glove-leather-blue.webp"),
    ("ring", "equipment", "icons/equipment/finger/ring-band-engraved-gold.webp"),
    ("amulet", "equipment", "icons/equipment/neck/amulet-round-engraved-gold.webp"),
    ("torch", "consumable", "icons/sundries/lights/torch-brown-lit.webp"),
    ("bag", "container", "icons/containers/bags/pack-leather-brown.webp"),
    ("pouch", "container", "icons/containers/bags/pouch-simple-leather-brown.webp"),
    ("crate", "container", "icons/containers/boxes/crate-wooden-brown.webp"),
    ("tools", "tool", "icons/tools/smithing/anvil.webp"),
    ("kit", "tool", "icons/tools/hand/lockpicks-steel-grey.webp"),
    ("book", "loot", "icons/sundries/books/book-plain-orange.webp"),
    ("map", "loot", "icons/sundries/scrolls/scroll-worn-tan.webp"),
    ("keychain", "loot", "icons/sundries/misc/key-ring-brass.webp"),
)

DEFAULT_ICON = "icons/containers/bags/coinpouch-simple-leather-brown.webp"
PILE_ICON = "icons/svg/item-bag.svg"


def new_id(seed: str | None = None) -> str:
    """A 16-character Foundry document id.

    A seed makes the id stable so regenerating the same pile twice does not
    churn every id in the file (nice for diffing and re-imports).
    """
    if seed is None:
        return "".join(random.choices(ID_ALPHABET, k=16))
    digest = hashlib.sha256(seed.encode("utf-8")).digest()
    value = int.from_bytes(digest, "big")
    out = []
    for _ in range(16):
        value, index = divmod(value, len(ID_ALPHABET))
        out.append(ID_ALPHABET[index])
    return "".join(out)


def _now_ms() -> int:
    return int(datetime.now(timezone.utc).timestamp() * 1000)


def stats_block() -> dict[str, Any]:
    stamp = _now_ms()
    return {
        "compendiumSource": None,
        "duplicateSource": None,
        "coreVersion": CORE_VERSION,
        "systemId": SYSTEM_ID,
        "systemVersion": SYSTEM_VERSION,
        "createdTime": stamp,
        "modifiedTime": stamp,
        "lastModifiedBy": None,
    }


def html_paragraphs(*blocks: str) -> str:
    """Foundry descriptions are HTML; keep it to simple, safe paragraphs."""
    parts = []
    for block in blocks:
        text = str(block or "").strip()
        if not text:
            continue
        text = (text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))
        parts.append(f"<p>{text}</p>")
    return "".join(parts)


def guess_type_and_icon(item: dict[str, Any]) -> tuple[str, str]:
    """Pick a Foundry item type + icon from the shop record."""
    haystack = f"{item.get('name', '')} {item.get('description', '')[:120]}".lower()
    for keyword, item_type, icon in _TYPE_HINTS:
        if keyword in haystack:
            return item_type, icon
    category = str(item.get("category", "")).lower()
    return CATEGORY_TO_TYPE.get(category, "loot"), DEFAULT_ICON


def price_block(price: Any) -> dict[str, Any]:
    """Shop prices are gold-equivalent integers."""
    try:
        value = int(round(float(price)))
    except (TypeError, ValueError):
        value = 0
    return {"value": max(value, 0), "denomination": "gp"}


def _uses_block(item: dict[str, Any]) -> dict[str, Any]:
    """Turn the shop's free-text `usage.charges` into real uses when countable."""
    charges = str((item.get("usage") or {}).get("charges", ""))
    match = re.search(r"\b(\d{1,3})\b", charges)
    if not match:
        return {"max": "", "spent": 0, "recovery": []}
    maximum = match.group(1)
    recovery: list[dict[str, Any]] = []
    lowered = charges.lower()
    if "long rest" in lowered:
        recovery = [{"period": "lr", "type": "recoverAll", "formula": ""}]
    elif "short rest" in lowered:
        recovery = [{"period": "sr", "type": "recoverAll", "formula": ""}]
    elif "dawn" in lowered or "day" in lowered or "daily" in lowered:
        recovery = [{"period": "day", "type": "recoverAll", "formula": ""}]
    return {"max": maximum, "spent": 0, "recovery": recovery}


def shop_item_to_foundry(
    item: dict[str, Any],
    *,
    quantity: int = 1,
    container: str | None = None,
    sort: int = 0,
    seed: str | None = None,
) -> dict[str, Any]:
    """Convert one Waluipedia shop record into a Foundry dnd5e item document.

    Shop-only knowledge (effect rules text, vendor, shipping, level gate, the
    originating receipt) is preserved in the description and mirrored into
    `flags.waluipedia` so nothing is lost on the round trip.
    """
    item_type, icon = guess_type_and_icon(item)
    name = str(item.get("name") or item.get("id") or "Unknown Item").strip()
    document_id = new_id(seed or f"item:{item.get('id') or name}:{sort}")

    effects = [str(effect) for effect in (item.get("effects") or []) if effect]
    details = item.get("effectDetails") or []
    rules_html = ""
    if details:
        rows = "".join(
            f"<li><strong>{str(entry.get('title', '')).strip()}</strong>: "
            f"{str(entry.get('rules', '')).strip()}</li>"
            for entry in details if isinstance(entry, dict)
        )
        rules_html = f"<h3>Effects</h3><ul>{rows}</ul>"
    elif effects:
        rules_html = "<h3>Effects</h3><ul>" + "".join(f"<li>{e}</li>" for e in effects) + "</ul>"

    usage = item.get("usage") or {}
    usage_rows = [
        (label, str(usage.get(key, "")).strip())
        for label, key in (("Activation", "activation"), ("Duration", "duration"),
                           ("Ends when", "endsWhen"), ("Charges", "charges"))
    ]
    usage_html = ""
    if any(value for _, value in usage_rows):
        usage_html = "<h3>Usage</h3><ul>" + "".join(
            f"<li><strong>{label}</strong>: {value}</li>" for label, value in usage_rows if value
        ) + "</ul>"

    provenance = []
    if item.get("vendor"):
        provenance.append(f"Vendor: {item['vendor']}")
    if item.get("shippedBy"):
        provenance.append(f"Shipped by: {item['shippedBy']}")
    if item.get("levelRequirement"):
        provenance.append(f"Level requirement: {item['levelRequirement']}")
    provenance_html = html_paragraphs(" · ".join(provenance)) if provenance else ""

    description = (
        html_paragraphs(str(item.get("description", "")).strip())
        + rules_html + usage_html + provenance_html
    )

    system: dict[str, Any] = {
        "description": {"value": description, "chat": ""},
        "source": {"custom": "Waluipedia — Wario's Warehouse", "book": "", "page": "",
                   "license": "", "rules": "2024", "revision": 1},
        "quantity": max(int(quantity or 1), 1),
        "weight": {"value": 0, "units": "lb"},
        "price": price_block(item.get("price")),
        "rarity": RARITY_MAP.get(str(item.get("rarity", "")).lower(), ""),
        "identified": True,
        "unidentified": {"description": ""},
        "container": container,
        "properties": [],
        "identifier": re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-"),
    }

    if item_type == "consumable":
        system["type"] = {"value": "potion" if "potion" in name.lower() else "trinket", "subtype": ""}
        system["uses"] = _uses_block(item) or {"max": "1", "spent": 0, "recovery": []}
        system["destroyOnEmpty"] = True
    elif item_type == "equipment":
        system["type"] = {"value": "trinket", "baseItem": ""}
        system["armor"] = {"value": None}
        system["attunement"] = "optional" if system["rarity"] in ("rare", "veryRare", "legendary", "artifact") else ""
        system["equipped"] = False
        system["uses"] = _uses_block(item)
    elif item_type == "weapon":
        system["type"] = {"value": "simpleM", "baseItem": ""}
        system["damage"] = {"base": {"number": 1, "denomination": 6, "types": ["bludgeoning"],
                                     "custom": {"enabled": False}, "scaling": {"number": 1}, "bonus": ""}}
        system["range"] = {"value": None, "long": None, "units": "ft", "reach": 5}
        system["equipped"] = False
        system["proficient"] = None
    elif item_type == "container":
        system["type"] = {"value": "", "subtype": ""}
        system["capacity"] = {"type": "weight", "value": 30, "weightless": False}
        system.pop("container", None)
        system["container"] = container
    elif item_type == "tool":
        system["type"] = {"value": "art", "baseItem": ""}
        system["ability"] = "int"
        system["proficient"] = None
    else:
        system["type"] = {"value": "", "subtype": ""}

    return {
        "_id": document_id,
        "name": name,
        "type": item_type,
        "img": str(item.get("img") or icon),
        "system": system,
        "effects": [],
        "folder": None,
        "sort": (sort + 1) * 100000,
        "flags": {
            "core": {},
            "item-identification": {"isIdentified": True},
            # Round-trip data: enough to re-link an imported item to the site.
            "waluipedia": {
                "shopId": item.get("id"),
                "sourceKey": item.get("_sourceKey"),
                "sourceFile": item.get("_sourceFile"),
                "category": item.get("category"),
                "rarity": item.get("rarity"),
                "vendor": item.get("vendor"),
                "shippedBy": item.get("shippedBy"),
                "levelRequirement": item.get("levelRequirement"),
                "icon": item.get("icon"),
                "effects": effects,
                "effectDetails": details,
                "usage": usage or None,
                "priceGold": item.get("price"),
                "receipts": item.get("_receipts") or [],
            },
        },
        "_stats": stats_block(),
        "ownership": {"default": 0},
    }


def _abilities(values: dict[str, int] | None = None, proficient: Iterable[str] = ()) -> dict[str, Any]:
    values = values or {}
    proficient = set(proficient)
    return {
        key: {
            "value": int(values.get(key, 10)),
            "proficient": 1 if key in proficient else 0,
            "max": None,
            "bonuses": {"check": "", "save": ""},
            "check": {"roll": {"min": None, "max": None, "mode": 0}},
            "save": {"roll": {"min": None, "max": None, "mode": 0}},
        }
        for key in ABILITIES
    }


def _skills(proficient: Iterable[str] = ()) -> dict[str, Any]:
    proficient = set(proficient)
    return {
        key: {
            "value": 1 if key in proficient else 0,
            "ability": SKILL_ABILITY[key],
            "bonuses": {"check": "", "passive": ""},
            "roll": {"min": None, "max": None, "mode": 0},
        }
        for key in SKILLS
    }


def _currency(gold: int = 0, silver: int = 0, copper: int = 0) -> dict[str, int]:
    return {"pp": 0, "gp": max(int(gold), 0), "ep": 0, "sp": max(int(silver), 0), "cp": max(int(copper), 0)}


def _prototype_token(name: str, img: str, *, is_pile: bool) -> dict[str, Any]:
    return {
        "name": name,
        "displayName": 50 if is_pile else 30,
        "actorLink": True,
        "width": 1,
        "height": 1,
        "texture": {"src": img, "anchorX": 0.5, "anchorY": 0.5, "fit": "contain",
                    "scaleX": 1, "scaleY": 1, "tint": "#ffffff", "alphaThreshold": 0.75},
        "lockRotation": False,
        "rotation": 0,
        "alpha": 1,
        "disposition": 0 if is_pile else 1,
        "displayBars": 0 if is_pile else 20,
        "bar1": {"attribute": None if is_pile else "attributes.hp"},
        "bar2": {"attribute": None},
        "light": {"alpha": 1, "angle": 360, "bright": 0, "color": None, "coloration": 1,
                  "dim": 0, "attenuation": 0.5, "luminosity": 0.5, "saturation": 0,
                  "contrast": 0, "shadows": 0, "negative": False, "priority": 0,
                  "animation": {"type": None, "speed": 5, "intensity": 5, "reverse": False},
                  "darkness": {"min": 0, "max": 1}},
        "sight": {"enabled": not is_pile, "range": 0, "angle": 360, "visionMode": "basic",
                  "color": None, "attenuation": 0.1, "brightness": 0, "saturation": 0, "contrast": 0},
        "detectionModes": [],
        "occludable": {"radius": 0},
        "appendNumber": False,
        "prependAdjective": False,
        "randomImg": False,
        "depth": 0,
        "turnMarker": {"mode": 1, "animation": "", "src": "", "disposition": False},
        "movementAction": None,
        "flags": {},
        "ring": {"enabled": False, "colors": {"ring": None, "background": None},
                 "effects": 1, "subject": {"scale": 1, "texture": None}},
    }


def build_actor(
    name: str,
    *,
    items: list[dict[str, Any]],
    img: str = PILE_ICON,
    is_pile: bool = False,
    biography: str = "",
    abilities: dict[str, int] | None = None,
    ability_proficiencies: Iterable[str] = (),
    skill_proficiencies: Iterable[str] = (),
    currency: dict[str, int] | None = None,
    hp: int = 10,
    ac: int = 10,
    alignment: str = "",
    details_extra: dict[str, Any] | None = None,
    traits_extra: dict[str, Any] | None = None,
    flags_extra: dict[str, Any] | None = None,
    seed: str | None = None,
) -> dict[str, Any]:
    """Assemble a complete `character` actor ready for Foundry's JSON importer.

    `is_pile=True` adds the item-piles module flags copied from the reference
    default-item-pile export, which is what makes the actor behave as a lootable
    pile rather than a normal character.
    """
    actor_id = new_id(seed or f"actor:{name}")
    details = {
        "biography": {"value": biography, "public": ""},
        "alignment": alignment,
        "race": None,
        "background": None,
        "originalClass": "",
        "xp": {"value": 0},
        "appearance": "",
        "trait": "",
        "ideal": "",
        "bond": "",
        "flaw": "",
        "eyes": "", "height": "", "faith": "", "hair": "", "weight": "",
        "gender": "", "skin": "", "age": "",
    }
    details.update(details_extra or {})

    traits = {
        "size": "med",
        "languages": {"value": ["common"], "custom": "", "communication": {}},
        "di": {"value": [], "custom": "", "bypasses": []},
        "dr": {"value": [], "custom": "", "bypasses": []},
        "dv": {"value": [], "custom": "", "bypasses": []},
        "ci": {"value": [], "custom": ""},
        "armorProf": {"value": [], "custom": ""},
        "weaponProf": {"value": [], "custom": "", "mastery": {"value": [], "bonus": []}},
    }
    traits.update(traits_extra or {})

    flags: dict[str, Any] = {}
    if is_pile:
        flags["item-piles"] = {
            "data": {
                "enabled": True,
                "type": "pile",
                "deleteWhenEmpty": False,
                "displayOne": False,
                "showItemName": True,
                "overrideSingleItemScale": True,
                "singleItemScale": 0.75,
            },
            "version": "3.3.4",
        }
    flags.update(flags_extra or {})

    return {
        "name": name,
        "type": "character",
        "img": img,
        "system": {
            "currency": currency or _currency(),
            "abilities": _abilities(abilities, ability_proficiencies),
            "bonuses": {
                "mwak": {"attack": "", "damage": ""}, "rwak": {"attack": "", "damage": ""},
                "msak": {"attack": "", "damage": ""}, "rsak": {"attack": "", "damage": ""},
                "abilities": {"check": "", "save": "", "skill": ""},
                "spell": {"dc": ""},
            },
            "skills": _skills(skill_proficiencies),
            "tools": {},
            "spells": {f"spell{level}": {"value": 0, "override": None} for level in range(1, 10)},
            "attributes": {
                "ac": {"flat": int(ac), "calc": "flat" if is_pile else "default", "formula": ""},
                "hp": {"value": int(hp), "max": int(hp), "temp": 0, "tempmax": 0, "bonuses": {}},
                "init": {"bonus": "0", "ability": "", "roll": {"min": None, "max": None, "mode": 0}},
                "movement": {"walk": 0 if is_pile else 30, "units": "ft", "hover": False,
                             "burrow": 0, "climb": 0, "fly": 0, "swim": 0,
                             "ignoredDifficultTerrain": []},
                "senses": {"units": "ft", "special": "",
                           "ranges": {"darkvision": 0, "blindsight": 0, "tremorsense": 0, "truesight": 0}},
                "spellcasting": "",
                "death": {"success": 0, "failure": 0, "roll": {"min": None, "max": None, "mode": 0},
                          "bonuses": {"save": ""}},
                "exhaustion": 0,
                "inspiration": False,
                "attunement": {"max": 3},
                "concentration": {"ability": "", "roll": {"min": None, "max": None, "mode": 0},
                                  "bonuses": {"save": ""}, "limit": 1},
            },
            "details": details,
            "traits": traits,
            "resources": {
                "primary": {"value": None, "max": None, "sr": False, "lr": False, "label": ""},
                "secondary": {"value": None, "max": None, "sr": False, "lr": False, "label": ""},
                "tertiary": {"value": None, "max": None, "sr": False, "lr": False, "label": ""},
            },
            "bastion": {"name": "", "description": ""},
            "favorites": [],
        },
        "prototypeToken": _prototype_token(name, img, is_pile=is_pile),
        "items": items,
        "effects": [],
        "folder": None,
        "flags": flags,
        "_stats": {**stats_block(), "exportSource": {
            "worldId": "waluipedia-hub", "uuid": f"Actor.{actor_id}",
            "coreVersion": CORE_VERSION, "systemId": SYSTEM_ID, "systemVersion": SYSTEM_VERSION,
        }},
        "_id": actor_id,
        "ownership": {"default": 0},
    }


def safe_filename(name: str) -> str:
    slug = re.sub(r"[^A-Za-z0-9._-]+", "-", str(name)).strip("-.")
    return slug or "unnamed"
