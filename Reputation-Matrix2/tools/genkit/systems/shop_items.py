"""Warizon — generate shop stock against the rarity deficit.

The catalogue is 7,732 items and badly shaped: **rare 3,273** against
**common 661**. The shop's own rarity ladder runs
common → uncommon → rare → epic → legendary → mythic → godly, and a storefront
whose commons are its rarest tier reads as broken. This system walks that
ladder and generates against whichever tier is furthest below its target
share, so the deficit closes in ladder order rather than by whichever tier the
model felt like writing.

Writes into `shop-items/items_world_generated.js`, which is already imported
**and** spread in `data/commerce/index.js` — so generated stock reaches the
storefront without touching the five-place category registration.
"""

from __future__ import annotations

import difflib
import json
import re
import threading
from typing import Any

from ..settings import ROOT
from ..spec import SystemSpec, Task, TaskResult, ValidationError, provenance
from ..storage import atomic_write_text

SHARD = ROOT / "shop-items" / "items_world_generated.js"
EXPORT_NAME = "ITEMS_WORLD_GENERATED"

_WRITE_LOCK = threading.Lock()
QUALITY_MARK = "shop-v2"
_PICTOGRAPH = re.compile(
    "[\U0001F000-\U0001FAFF\u2190-\u21FF\u2300-\u23FF\u2460-\u24FF"
    "\u25A0-\u27BF\u2B00-\u2BFF\u3030\u303D\u3297\u3299]"
)
OUT_OF_WORLD = re.compile(
    r"\b(player|players|game|gaming|campaign|dungeon master|game master|dm|gm|"
    r"at the table|standard of play|real[- ]world brand)\b",
    re.IGNORECASE,
)


def _is_vetted(entry: dict[str, Any]) -> bool:
    return (entry.get("_quality") or {}).get("validator") == QUALITY_MARK


def _vetted_generated() -> dict[str, Any]:
    return {key: value for key, value in _generated().items() if _is_vetted(value)}

# The ladder, in the order the user asked it to be walked.
RARITY_LADDER = ["common", "uncommon", "rare", "epic", "legendary", "mythic", "godly"]

# What a healthy catalogue looks like: plenty of commons, few godlies.
TARGET_SHARE = {
    "common": 0.26, "uncommon": 0.22, "rare": 0.20, "epic": 0.14,
    "legendary": 0.10, "mythic": 0.05, "godly": 0.03,
}

DEPARTMENTS = [
    "consumables", "equipment", "curiosities", "services",
    "faction", "forbidden", "premium",
]

# Plausible department names the model reaches for that this storefront does
# not stock under that word. Mapping beats rejecting: the item is fine, only
# the shelf label is wrong.
CATEGORY_ALIASES = {
    "gadget": "curiosities", "gadgets": "curiosities", "trinket": "curiosities",
    "trinkets": "curiosities", "artifact": "curiosities", "artifacts": "curiosities",
    "relic": "curiosities", "relics": "curiosities", "misc": "curiosities",
    "miscellaneous": "curiosities", "oddities": "curiosities", "collectible": "curiosities",
    "collectibles": "curiosities", "treasure": "curiosities", "jewelry": "curiosities",
    "weapon": "equipment", "weapons": "equipment", "armor": "equipment",
    "armour": "equipment", "gear": "equipment", "tool": "equipment",
    "tools": "equipment", "apparel": "equipment", "clothing": "equipment",
    "accessory": "equipment", "accessories": "equipment", "shield": "equipment",
    "shields": "equipment", "wand": "equipment", "wands": "equipment",
    "potion": "consumables", "potions": "consumables", "food": "consumables",
    "drink": "consumables", "drinks": "consumables", "scroll": "consumables",
    "scrolls": "consumables", "ammunition": "consumables", "ammo": "consumables",
    "supplies": "consumables", "medicine": "consumables", "elixir": "consumables",
    "elixirs": "consumables", "reagent": "consumables", "reagents": "consumables",
    "service": "services", "hire": "services", "hires": "services",
    "contract": "services", "contracts": "services", "mercenary": "services",
    "training": "services", "transport": "services", "information": "services",
    "factions": "faction", "military": "faction", "guild": "faction",
    "banned": "forbidden", "illegal": "forbidden", "contraband": "forbidden",
    "blackmarket": "forbidden", "black market": "forbidden", "cursed": "forbidden",
    "dark": "forbidden", "restricted": "forbidden",
    "luxury": "premium", "exclusive": "premium", "vip": "premium",
    "highend": "premium", "high-end": "premium", "rare goods": "premium",
}


def resolve_category(proposed: str) -> str | None:
    """Map a model's department answer onto the seven real departments."""
    key = " ".join(str(proposed or "").strip().lower().replace("_", " ").split())
    if not key:
        return None
    if key in DEPARTMENTS:
        return key
    if key in CATEGORY_ALIASES:
        return CATEGORY_ALIASES[key]
    # Singular/plural drift, e.g. "consumable".
    for dept in DEPARTMENTS:
        if key == dept.rstrip("s") or key + "s" == dept:
            return dept
    close = difflib.get_close_matches(key, DEPARTMENTS, n=1, cutoff=0.84)
    if close:
        return close[0]
    close = difflib.get_close_matches(key, list(CATEGORY_ALIASES), n=1, cutoff=0.9)
    if close:
        return CATEGORY_ALIASES[close[0]]
    return None


_COUNT_CACHE: dict[str, int] | None = None


def _catalogue_counts() -> dict[str, int]:
    """Rarity histogram across every shard. Cached — it reads ~90 files."""
    global _COUNT_CACHE
    if _COUNT_CACHE is not None:
        return _COUNT_CACHE
    counts = {r: 0 for r in RARITY_LADDER}
    # Both shard directories count. The catalogue is split across
    # `data/shop-items/` (the 92 numbered shards the storefront imports as
    # '../shop-items/…') and the top-level `shop-items/` (imported as
    # '../../shop-items/…', and where the generated shard is written).
    # Reading only one of them under-counts the archive and skews the rarity
    # ladder toward whatever the histogram cannot see.
    shards = [
        *(ROOT / "data" / "shop-items").glob("items_*.js"),
        *(ROOT / "shop-items").glob("items_*.js"),
    ]
    seen_shards: set[str] = set()
    for shard in sorted(shards):
        # The legacy generated shard is quarantined. Count only entries that
        # passed the current validator below, once, after the authored shards.
        if shard.name == SHARD.name:
            continue
        if shard.name in seen_shards:
            continue
        seen_shards.add(shard.name)
        try:
            text = shard.read_text(encoding="utf-8")
        except OSError:
            continue
        for match in re.finditer(r'"rarity":\s*"([a-z_]+)"', text):
            rarity = match.group(1)
            if rarity in counts:
                counts[rarity] += 1
    for rarity in _vetted_generated().values():
        key = rarity.get("rarity")
        if key in counts:
            counts[key] += 1
    _COUNT_CACHE = counts
    return counts


def _generated() -> dict[str, Any]:
    """Parse the generated shard's object literal back into Python."""
    try:
        text = SHARD.read_text(encoding="utf-8")
    except OSError:
        return {}
    start = text.find("{", text.find(f"export const {EXPORT_NAME}"))
    if start == -1:
        return {}
    end = text.rfind("}")
    if end <= start:
        return {}
    try:
        return json.loads(text[start:end + 1])
    except json.JSONDecodeError:
        return {}


def _deficits() -> list[tuple[str, int]]:
    """(rarity, shortfall) for tiers below target, in ladder order."""
    counts = _catalogue_counts()
    total = sum(counts.values()) or 1
    out = []
    for rarity in RARITY_LADDER:
        want = int(TARGET_SHARE[rarity] * total)
        have = counts.get(rarity, 0)
        if have < want:
            out.append((rarity, want - have))
    return out


def pending() -> int:
    return sum(shortfall for _, shortfall in _deficits())


def next_tasks(count: int) -> list[Task]:
    deficits = _deficits()
    if not deficits:
        return []
    existing = set(_generated())
    tasks: list[Task] = []
    # Ladder order: the neediest tier first, but never only one tier.
    index = 0
    while len(tasks) < count:
        progressed = False
        for rarity, shortfall in deficits:
            if len(tasks) >= count:
                break
            if index >= shortfall:
                continue
            progressed = True
            slug = f"wz_gen_{rarity}_{index:04d}"
            if slug in existing:
                continue
            tasks.append(
                Task(
                    system_id="shop_items",
                    key=f"item:{slug}",
                    label=f"shop item · {rarity}",
                    payload={"rarity": rarity, "slug": slug},
                )
            )
        index += 1
        if not progressed or index > 5000:
            break
    return tasks


SYSTEM_PROMPT = """You invent stock for Warizon, Wario's chaotic in-world
mail-order storefront. Write entirely from inside the world. Items are funny
physical merchandise with precise rules, not commentary about a game or table.

Return strictly valid JSON only, no commentary, no code fence:

{
  "name": "<2-5 words, no colon>",
  "icon": "<a single emoji>",
  "category": "<one of the listed departments>",
  "description": "<2-3 sentences: what it is, what it does, what is wrong with it>",
  "price": <integer coins>,
  "levelRequirement": <integer 1-20>,
  "levelRequirementReason": "<one sentence>",
  "effectDetails": [
    { "title": "<short effect name>", "rules": "<precise mechanics with dice or numbers>" }
  ],
  "usage": {
    "activation": "<action|bonus action|reaction|passive|1 minute ritual>",
    "duration": "<how long it lasts>",
    "endsWhen": "<what stops it>",
    "charges": "<uses and how they recharge>"
  },
  "warning": "<the catch, the fine print, or the way it goes wrong>",
  "vendorReason": "<one sentence: why Wario stocks it>",
  "shippingDetail": "<one sentence of absurd but plausible logistics>"
}

Rules:
- Power MUST match the requested rarity. A common is a small convenience; a godly item
  bends a scene. Do not write a legendary effect and label it common.
- Consumable items MUST be one-time use. They cannot have multiple charges, be rechargeable, or be unlimited.
- Price must match rarity too. Commons are tens of coins, godlies are five figures.
- `effectDetails` needs 1-2 entries with REAL numbers: dice, feet, rounds, modifiers.
- `warning` is mandatory and must be a genuine drawback, cost or risk.
- Comedy comes from the framing and the fine print, never from vague mechanics.
- `icon` is ONE Unicode pictograph, never text, shortcode, XML, markup or ASCII art.
- Consumables are expended: exactly one use, no recharge and no unlimited charges.
- Never mention players, games, campaigns, a GM/DM, a table, or real-world brands.
- Do not reuse a name you have been shown.
"""

RARITY_GUIDE = {
    "common": "a small convenience. 15-120 coins. Level 1-3. One minor, reliable effect.",
    "uncommon": "a useful edge. 150-600 coins. Level 2-6. One solid effect with a clear limit.",
    "rare": "a real tactical option. 700-2500 coins. Level 5-10.",
    "epic": "changes how an encounter is fought. 3000-9000 coins. Level 8-14.",
    "legendary": "famous in-world, named, has history. 10000-30000 coins. Level 12-18.",
    "mythic": "bends a rule of the world. 35000-90000 coins. Level 15-20. Serious cost attached.",
    "godly": "should probably not be for sale. 100000+ coins. Level 18-20. Dangerous to own.",
}


# Naming. A live run produced 253 items called "Zoofy Zeep <something>" out of
# 1,446, plus 412 carrying "Mark IV"-style suffixes. Three faults compounded:
# the prompt showed only the LAST 25 names, which by then were all one prefix,
# so the model copied the pattern it was being shown; the duplicate check was
# exact-match on the whole string, so "Zoofy Zeep Zzstorm" and "Zoofy Zeep
# Zzstorm Mark IV" both passed; and repair broke ties by bolting on another
# suffix, which laundered a duplicate into a worse name. One even reached
# "Zzbubble Mark XI Mark II" -- repair stacked on repair.

_NAME_STOPWORDS = {"of", "the", "a", "an", "and", "s"}

# Suffixes the shop uses to mean "another run of the same product". A name is
# not novel just because it carries one.
_SERIES_SUFFIX = re.compile(
    r"\s+(?:mark\s+[ivxlc]+|pattern\s+[a-z]|no\.?\s*\d+|"
    r"[ivxlc]{1,5}|\d+|second run|reissue|field model|trade grade|"
    r"export model|long pattern|short pattern|heavy fitting|light fitting)$",
    re.IGNORECASE,
)


def _name_root(name: str) -> str:
    """Strip series suffixes down to the name the shopper actually reads."""
    root = " ".join(str(name).split())
    for _ in range(4):  # "Zzbubble Mark XI Mark II" needs several passes.
        stripped = _SERIES_SUFFIX.sub("", root).strip()
        if stripped == root:
            break
        root = stripped
    return root.lower()


def _name_family(name: str) -> str:
    """The first two meaningful words -- the 'Zoofy Zeep' part."""
    words = [w for w in re.findall(r"[a-z0-9]+", _name_root(name))
             if w not in _NAME_STOPWORDS]
    return " ".join(words[:2])


def _family_counts() -> dict[str, int]:
    counts: dict[str, int] = {}
    for value in _generated().values():
        fam = _name_family(value.get("name") or "")
        if fam:
            counts[fam] = counts.get(fam, 0) + 1
    return counts


# No naming family may exceed this share of generated stock. A storefront
# where one in six items shares a prefix does not read as a catalogue.
FAMILY_MAX_SHARE = 0.04
FAMILY_FLOOR = 8


def _family_is_saturated(family: str) -> tuple[bool, int, int]:
    """Is this prefix already over-represented?"""
    if not family:
        return False, 0, 0
    counts = _family_counts()
    total = max(sum(counts.values()), 1)
    used = counts.get(family, 0)
    ceiling = max(FAMILY_FLOOR, int(total * FAMILY_MAX_SHARE))
    return used >= ceiling, used, ceiling


def _prompt_name_sample(limit: int = 30) -> list[str]:
    """A spread of existing names, one per family, most crowded first.

    Showing the tail of the catalogue is what taught the model to write
    "Zoofy Zeep" forever. Showing one example per family, crowded families
    first, tells it what is already covered instead of what to imitate.
    """
    by_family: dict[str, str] = {}
    for value in _generated().values():
        name = value.get("name")
        if not name:
            continue
        by_family.setdefault(_name_family(name), name)
    counts = _family_counts()
    families = sorted(by_family, key=lambda f: -counts.get(f, 0))
    return [by_family[f] for f in families[:limit]]


def _crowded_note() -> str:
    """Name the prefixes that are already saturated, so the model avoids them."""
    counts = _family_counts()
    total = max(sum(counts.values()), 1)
    ceiling = max(FAMILY_FLOOR, int(total * FAMILY_MAX_SHARE))
    crowded = sorted((f for f, n in counts.items() if n >= ceiling),
                     key=lambda f: -counts[f])[:12]
    if not crowded:
        return ""
    return ("FULL — these name openings are at capacity and will be REJECTED:\n  "
            + "\n  ".join(f"{f!r} ({counts[f]} items)" for f in crowded)
            + "\n\n")


def build_prompt(task: Task) -> tuple[str, str]:
    rarity = task.payload["rarity"]
    existing_names = _prompt_name_sample()
    prompt = (
        f"RARITY: {rarity} — {RARITY_GUIDE[rarity]}\n\n"
        f"DEPARTMENTS — `category` must be EXACTLY ONE of these strings, "
        f"copied verbatim, never a list and never two joined by a comma:\n"
        f"  {', '.join(DEPARTMENTS)}\n\n"
        + (f"ALREADY IN STOCK — one example per naming family. Do not reuse "
           f"any of these openings; invent a different kind of name:\n  "
           + "\n  ".join(existing_names) + "\n\n"
           if existing_names else "")
        + _crowded_note()
        + f"Invent one {rarity} item for Warizon.\n"
        + "Every entry in `effectDetails[].rules` must contain concrete numbers "
          "(dice, ranges, durations, charges). Mechanics with no numbers are rejected."
    )
    return SYSTEM_PROMPT, prompt


PRICE_BANDS = {
    "common": (10, 200), "uncommon": (120, 900), "rare": (500, 3500),
    "epic": (2000, 12000), "legendary": (8000, 40000),
    "mythic": (25000, 120000), "godly": (60000, 900000),
}


def generate(task: Task, client: Any, temperature: float) -> dict[str, Any]:
    rarity = task.payload["rarity"]
    existing_names = _prompt_name_sample()
    
    prog = task.payload.get("_progress")
    if prog: prog(f"Brainstorming names for {rarity} item...")
    
    # 1. Propose Names
    name_sys = "You are a creative copywriter for Wario's catalog. Return strictly valid JSON containing one key 'names' mapped to an array of 5 unique, wildly different item names (2-5 words)."
    name_user = (
        f"RARITY: {rarity}\n"
        f"We need to avoid overused words. Here are some name families to AVOID entirely:\n"
        f"{', '.join(existing_names[:50])}\n\n"
        "Propose 5 completely new, unique item names."
    )
    
    try:
        name_res = client.complete_json(name_sys, name_user, temperature=temperature + 0.2)
        names = name_res.get("names", [])
        if not isinstance(names, list):
            names = []
    except Exception:
        names = []
        
    # Check for duplicates manually against the root names
    chosen_name = None
    taken = {(_name_root(n.get("name", "")), _name_family(n.get("name", ""))) for n in _generated().values()}
    
    for candidate in names:
        if not isinstance(candidate, str) or len(candidate) < 3:
            continue
        root = _name_root(candidate)
        family = _name_family(candidate)
        is_taken = any(root == t[0] or (family and family == t[1]) for t in taken)
        if not is_taken:
            chosen_name = candidate
            break
            
    if not chosen_name:
        if prog: prog("No unique names found, falling back to one-shot...")
        # fallback if all 5 were duplicates
        system_prompt, user_prompt = build_prompt(task)
        if task.last_error:
            user_prompt += f"\n\nYOUR PREVIOUS ATTEMPT FAILED: {task.last_error}\nFix this."
        return client.complete_json(system_prompt, user_prompt, temperature=temperature)
        
    if prog: prog(f"Selected name: {chosen_name}")
    
    # 2. Generate Item with the chosen name
    system_prompt, user_prompt = build_prompt(task)
    user_prompt += f"\n\nCRITICAL INSTRUCTION: You MUST use exactly the name '{chosen_name}' for this item. Do not change it."
    
    if task.last_error:
        user_prompt += f"\n\nYOUR PREVIOUS ATTEMPT FAILED: {task.last_error}\nFix this in your next attempt."
        
    raw = client.complete_json(system_prompt, user_prompt, temperature=temperature)
    raw["name"] = chosen_name # force it just in case
    return raw


def validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    rarity = task.payload["rarity"]

    name = " ".join(str(raw.get("name", "")).split())
    if not (3 <= len(name) <= 60):
        raise ValidationError("bad name")
    existing = {(v.get("name") or "").lower() for v in _generated().values()}
    if name.lower() in existing:
        raise ValidationError(f"duplicate item name {name!r}")

    # Exact match is not enough. "Zoofy Zeep Zzstorm Mark IV" is not a new
    # product just because "Mark IV" makes the string unique -- strip the
    # series suffix and compare what a shopper would actually read.
    root = _name_root(name)
    if root and root in {_name_root(e) for e in existing if e}:
        raise ValidationError(
            f"duplicate item name {name!r}: {root!r} already exists and a "
            f"series suffix does not make it a different product. Invent a "
            f"different item with an unrelated name."
        )

    # And no single naming family may take over the catalogue.
    family = _name_family(name)
    saturated, used, ceiling = _family_is_saturated(family)
    if saturated:
        raise ValidationError(
            f"naming family {family!r} is full ({used} items, limit {ceiling}). "
            f"Do not open the name with {family!r}. Use an unrelated name "
            f"drawn from what the item does."
        )

    # The model sometimes answers with a list, or with two departments joined
    # by a comma ("premium, curiosities"). Both are recoverable: take the first
    # entry that is a real department rather than throwing the item away.
    raw_category = raw.get("category")
    if isinstance(raw_category, (list, tuple)):
        parts = [str(c) for c in raw_category]
    else:
        parts = str(raw_category or "").split(",")
    category = ""
    for part in parts:
        candidate = part.strip().lower()
        if candidate in DEPARTMENTS:
            category = candidate
            break
    if not category:
        # A near-miss like "gadgets" or "weapons" is a good answer in the wrong
        # vocabulary. Map it before giving up — only a genuinely unreadable
        # value should cost us the record.
        for part in parts:
            resolved = resolve_category(part)
            if resolved:
                category = resolved
                break
    if not category:
        # normalizeItem() would silently dump it in curiosities; be explicit.
        raise ValidationError(
            f"unknown category {str(raw_category)!r} — "
            f"use exactly one of: {', '.join(DEPARTMENTS)}"
        )

    description = " ".join(str(raw.get("description", "")).split())
    if not (40 <= len(description) <= 900):
        raise ValidationError("description out of range")

    icon = str(raw.get("icon", "")).strip()
    if (not icon or len(icon) > 10 or not _PICTOGRAPH.search(icon)
            or re.search(r"[A-Za-z0-9<>{}:]", icon)):
        raise ValidationError("icon must be one Unicode pictograph, never text or markup")

    try:
        price = int(raw.get("price"))
    except (TypeError, ValueError):
        raise ValidationError("price not an integer") from None
    low, high = PRICE_BANDS[rarity]
    if not low <= price <= high:
        raise ValidationError(f"price {price} outside the {rarity} band {low}-{high}")

    try:
        level = int(raw.get("levelRequirement", 1))
    except (TypeError, ValueError):
        level = 1
    level = max(1, min(20, level))

    effects_in = raw.get("effectDetails")
    if not isinstance(effects_in, list) or not effects_in:
        raise ValidationError("effectDetails missing")
    effect_details = []
    for entry in effects_in[:3]:
        if not isinstance(entry, dict):
            continue
        title = " ".join(str(entry.get("title", "")).split())
        rules = " ".join(str(entry.get("rules", "")).split())
        if title and len(rules) >= 20:
            effect_details.append({"title": title, "rules": rules})
    if not effect_details:
        raise ValidationError("no usable effectDetails")
    if any(not any(ch.isdigit() for ch in effect["rules"]) for effect in effect_details):
        raise ValidationError("every effect rule needs its own concrete number")

    usage_in = raw.get("usage") or {}
    usage = {
        field: " ".join(str(usage_in.get(field, "")).split())
        for field in ("activation", "duration", "endsWhen", "charges")
    }
    allowed_activation = {"action", "bonus action", "reaction", "passive", "1 minute ritual"}
    if usage["activation"].lower() not in allowed_activation:
        raise ValidationError(f"usage.activation must be one of {sorted(allowed_activation)}")
    charges = usage["charges"].lower()
    if category == "consumables":
        if any(word in charges for word in ("recharg", "unlimited", "per day", "rest")):
            raise ValidationError("a consumable is expended and cannot recharge or be unlimited")
        if not any(word in charges for word in ("1 use", "one use", "consumed", "expended")):
            raise ValidationError("a consumable must say it has one use and is consumed")
    elif not usage["charges"]:
        raise ValidationError("usage.charges missing")

    warning = " ".join(str(raw.get("warning", "")).split())
    if len(warning) < 12:
        raise ValidationError("warning must be a real drawback")

    text_fields = [description, warning, usage["duration"], usage["endsWhen"],
                   usage["charges"], *(e["rules"] for e in effect_details),
                   str(raw.get("levelRequirementReason", "")),
                   str(raw.get("vendorReason", "")), str(raw.get("shippingDetail", ""))]
    bad = next((OUT_OF_WORLD.search(text) for text in text_fields if OUT_OF_WORLD.search(text)), None)
    if bad:
        raise ValidationError(f"out-of-world wording is forbidden: {bad.group(0)!r}")

    forbidden_power = re.compile(
        r"\b(rewrite|rewind|erase|annihilat|alter)\b.{0,35}\b(time|timeline|reality|event)|"
        r"\bimmune to all|resistance to all|single wish\b",
        re.IGNORECASE,
    )
    if rarity not in {"mythic", "godly"} and any(forbidden_power.search(text) for text in text_fields):
        raise ValidationError(f"{rarity} item has mythic reality/time-scale mechanics")

    return {
        "id": task.payload["slug"],
        "name": name,
        "description": description,
        "price": price,
        "category": category,
        "rarity": rarity,
        "icon": icon,
        "stock": 3 if rarity in ("common", "uncommon") else 1,
        "levelRequirement": level,
        "levelRequirementReason": " ".join(str(raw.get("levelRequirementReason", "")).split())[:300],
        "effectDetails": effect_details,
        "usage": usage,
        "warning": warning,
        "vendorReason": " ".join(str(raw.get("vendorReason", "")).split())[:300],
        "shippingDetail": " ".join(str(raw.get("shippingDetail", "")).split())[:300],
    }


# Warizon stock is a shop shelf, so a disambiguator has to read like something
# a quartermaster would actually write on a label -- a mark, a batch, a pattern
# -- not "(2)". These follow the name; the model's own words stay in front.
# _RENAME_MARKS removed: see repair() below.


def repair(task: Task, raw: dict[str, Any], why: str) -> dict[str, Any] | None:
    """Duplicate names are no longer repaired in code.

    This used to append "Mark II" to break a collision. That is what produced
    412 suffixed items and names like "Zoofy Zeep Zzbubble Mark XI Mark II" --
    repair stacking on repair. Renaming in code also hid the real problem from
    the model: it kept proposing the same prefix because nothing ever told it
    to stop.

    A colliding name is now a genuine rejection. The task goes back into the
    pool and the prompt it comes back with names the saturated families
    explicitly, so the retry has the information it needs to write something
    different. Nothing else was ever repaired here.
    """
    return None


HEADER = (
    "// World-context shop items. Generated by tools/genkit (system: shop_items).\n"
    "// Imported and spread by data/commerce/index.js — edits here reach the storefront.\n"
    "import { SHOP_CATEGORIES } from './categories.js';\n\n"
    f"export const {EXPORT_NAME} = "
)


def apply(task: Task, record: dict[str, Any]) -> TaskResult:
    global _COUNT_CACHE
    with _WRITE_LOCK:
        store = _generated()
        if record["id"] in store:
            return TaskResult(task=task, ok=False, detail="id already present")
        entry = dict(record)
        entry.update(provenance("shop_items", task.payload.get("model", "")))
        entry["_quality"] = {"validator": QUALITY_MARK}
        store[record["id"]] = entry
        atomic_write_text(
            SHARD, HEADER + json.dumps(store, ensure_ascii=False, indent=2) + ";\n"
        )
        _COUNT_CACHE = None  # the histogram just moved
    return TaskResult(
        task=task, ok=True,
        detail=f"{record['name']} · {record['rarity']} · {record['price']}c",
        record=record, changed_paths=[str(SHARD.relative_to(ROOT))],
    )


SPEC = SystemSpec(
    id="shop_items",
    title="Warizon · vetted rarity-deficit stock",
    summary=(
        "Generate only v2-vetted stock; legacy generated items remain quarantined "
        "from the storefront and rarity counts."
    ),
    enabled=True,
    stage=1,
    next_tasks=next_tasks,
    generate=generate,
    validate=validate,
    apply=apply,
    pending=pending,
    repair=repair,
)
