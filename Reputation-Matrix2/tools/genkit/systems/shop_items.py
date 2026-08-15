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

_COUNT_CACHE: dict[str, int] | None = None


def _catalogue_counts() -> dict[str, int]:
    """Rarity histogram across every shard. Cached — it reads ~90 files."""
    global _COUNT_CACHE
    if _COUNT_CACHE is not None:
        return _COUNT_CACHE
    counts = {r: 0 for r in RARITY_LADDER}
    for shard in sorted((ROOT / "data" / "shop-items").glob("items_*.js")):
        try:
            text = shard.read_text(encoding="utf-8")
        except OSError:
            continue
        for match in re.finditer(r'"rarity":\s*"([a-z_]+)"', text):
            rarity = match.group(1)
            if rarity in counts:
                counts[rarity] += 1
    for rarity in _generated().values():
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


SYSTEM_PROMPT = """You invent stock for Warizon, a chaotic in-world mail-order storefront
run by Wario in a Mario-adjacent tabletop campaign. Items are funny but mechanically real:
a player buys this and uses it at the table.

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
- Price must match rarity too. Commons are tens of coins, godlies are five figures.
- `effectDetails` needs 1-2 entries with REAL numbers: dice, feet, rounds, modifiers.
- `warning` is mandatory and must be a genuine drawback, cost or risk.
- Comedy comes from the framing and the fine print, never from the mechanics being vague.
- Do not reference real-world brands. Do not reuse a name you have been shown.
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


def build_prompt(task: Task) -> tuple[str, str]:
    rarity = task.payload["rarity"]
    existing_names = [v.get("name") for v in _generated().values() if v.get("name")][-25:]
    prompt = (
        f"RARITY: {rarity} — {RARITY_GUIDE[rarity]}\n\n"
        f"DEPARTMENTS: {', '.join(DEPARTMENTS)}\n\n"
        + (f"ALREADY IN STOCK (do not repeat):\n  " + "\n  ".join(existing_names) + "\n\n"
           if existing_names else "")
        + f"Invent one {rarity} item for Warizon."
    )
    return SYSTEM_PROMPT, prompt


PRICE_BANDS = {
    "common": (10, 200), "uncommon": (120, 900), "rare": (500, 3500),
    "epic": (2000, 12000), "legendary": (8000, 40000),
    "mythic": (25000, 120000), "godly": (60000, 900000),
}


def validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    rarity = task.payload["rarity"]

    name = " ".join(str(raw.get("name", "")).split())
    if not (3 <= len(name) <= 60):
        raise ValidationError("bad name")
    if name.lower() in {(v.get("name") or "").lower() for v in _generated().values()}:
        raise ValidationError(f"duplicate item name {name!r}")

    category = str(raw.get("category", "")).strip().lower()
    if category not in DEPARTMENTS:
        # normalizeItem() would silently dump it in curiosities; be explicit.
        raise ValidationError(f"unknown category {category!r}")

    description = " ".join(str(raw.get("description", "")).split())
    if not (40 <= len(description) <= 900):
        raise ValidationError("description out of range")

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
    if not any(ch.isdigit() for e in effect_details for ch in e["rules"]):
        raise ValidationError("no numbers anywhere in the mechanics")

    usage_in = raw.get("usage") or {}
    usage = {
        field: " ".join(str(usage_in.get(field, "")).split())
        for field in ("activation", "duration", "endsWhen", "charges")
    }
    if not usage["activation"]:
        raise ValidationError("usage.activation missing")

    warning = " ".join(str(raw.get("warning", "")).split())
    if len(warning) < 12:
        raise ValidationError("warning must be a real drawback")

    return {
        "id": task.payload["slug"],
        "name": name,
        "description": description,
        "price": price,
        "category": category,
        "rarity": rarity,
        "icon": str(raw.get("icon", "")).strip() or "📦",
        "stock": 3 if rarity in ("common", "uncommon") else 1,
        "levelRequirement": level,
        "levelRequirementReason": " ".join(str(raw.get("levelRequirementReason", "")).split())[:300],
        "effectDetails": effect_details,
        "usage": usage,
        "warning": warning,
        "vendorReason": " ".join(str(raw.get("vendorReason", "")).split())[:300],
        "shippingDetail": " ".join(str(raw.get("shippingDetail", "")).split())[:300],
    }


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
    title="Warizon · rarity deficit stock",
    summary="Generate items walking common→godly against the catalogue's rarity gaps.",
    stage=1,
    next_tasks=next_tasks,
    build_prompt=build_prompt,
    validate=validate,
    apply=apply,
    pending=pending,
)
