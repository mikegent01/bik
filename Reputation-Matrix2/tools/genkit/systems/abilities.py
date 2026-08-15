"""Training Wing — fill the thin class/level cells of the ability shop.

895 abilities across 11 classes, but the distribution is lopsided: level 1
holds 271 of them and levels 2-20 average 33 each. Spy has 68 abilities where
paladin has 84. This system does not add more level-1 wizard spells — it
targets the emptiest (class, level) cells so the shop stops running dry above
level 1.

Schema mirrors the existing records exactly, including `rules`, `apCost` and
`warioNote`, because the ability shop renders all three.
"""

from __future__ import annotations

import json
import random
import threading
from typing import Any

from ..settings import ROOT
from ..spec import SystemSpec, Task, TaskResult, ValidationError, provenance
from ..storage import atomic_write_json, read_json

SHOP = ROOT / "data" / "abilityShop.json"
_WRITE_LOCK = threading.Lock()

# The shop advertises levels 1-20; the deficit lives above level 1.
TARGET_PER_CELL = 5
LEVELS = range(2, 21)


def _load() -> dict[str, Any]:
    return read_json(SHOP, default={})


def _abilities() -> list[dict[str, Any]]:
    return [a for a in _load().get("abilities", []) if isinstance(a, dict)]


def _deficit_cells() -> list[tuple[str, int, int]]:
    """(class_id, level, shortfall), emptiest first."""
    store = _load()
    classes = list(store.get("classes", {}))
    counts: dict[tuple[str, int], int] = {}
    for ability in _abilities():
        try:
            level = int(ability.get("level") or 0)
        except (TypeError, ValueError):
            continue
        counts[(ability.get("class"), level)] = counts.get((ability.get("class"), level), 0) + 1

    cells = []
    for class_id in classes:
        for level in LEVELS:
            have = counts.get((class_id, level), 0)
            if have < TARGET_PER_CELL:
                cells.append((class_id, level, TARGET_PER_CELL - have))
    cells.sort(key=lambda c: (-c[2], c[1]))
    return cells


def pending() -> int:
    return sum(shortfall for _, _, shortfall in _deficit_cells())


def next_tasks(count: int) -> list[Task]:
    cells = _deficit_cells()
    if not cells:
        return []
    existing = {a.get("id") for a in _abilities()}
    tasks: list[Task] = []
    for class_id, level, _ in cells:
        if len(tasks) >= count:
            break
        # A stable-ish key that will not collide with an existing id.
        for attempt in range(6):
            key = f"{class_id}_l{level}_gen{attempt}"
            if key not in existing:
                break
        tasks.append(
            Task(
                system_id="abilities",
                key=f"ability:{key}",
                label=f"ability · {class_id} L{level}",
                payload={"class": class_id, "level": level, "slug": key},
            )
        )
    return tasks


SYSTEM_PROMPT = """You design character abilities for a 5e-like tabletop campaign archive.
You are given a class and a level with too few abilities, plus existing abilities from
that class so you can match tone and power level.

Return strictly valid JSON only, no commentary, no code fence:

{
  "name": "<2-4 words, evocative, no colon>",
  "icon": "<a single emoji>",
  "type": "<one of the listed types>",
  "description": "<one sentence a player reads on the shop card>",
  "rules": {
    "activation": "<action|bonus action|reaction|short rest|passive>",
    "range": "<self|touch|30 feet|...>",
    "duration": "<instantaneous|1 minute|until end of turn|...>",
    "uses": "<at will|1/short rest|2/long rest|...>",
    "effect": "<the precise mechanical effect, one or two sentences, with dice>",
    "drawback": "<a real cost or limit — never 'none'>"
  },
  "levelReason": "<one sentence: why this belongs at this level>",
  "apCost": <integer 1-5>,
  "apReason": "<one sentence justifying the AP cost>",
  "warioNote": "<one greedy shopkeeper quip, in Wario's voice, max 20 words>"
}

Rules:
- Power must fit the level. A level 3 ability is not a level 17 ability.
- The effect needs real numbers (dice, feet, modifiers). No vague "improves combat".
- `drawback` must genuinely cost something: a resource, a risk, an opportunity cost.
- Do not duplicate any ability shown to you, in name or in effect.
- Stay in the class's lane. A rogue does not get divine smites.
"""


def build_prompt(task: Task) -> tuple[str, str]:
    store = _load()
    class_id = task.payload["class"]
    level = task.payload["level"]
    class_meta = store.get("classes", {}).get(class_id, {})

    peers = [a for a in _abilities() if a.get("class") == class_id]
    peers.sort(key=lambda a: abs(int(a.get("level") or 0) - level))
    sample = [
        {
            "name": a.get("name"),
            "level": a.get("level"),
            "type": a.get("type"),
            "description": a.get("description"),
            "apCost": a.get("apCost"),
        }
        for a in peers[:8]
    ]

    # Names are unique across the WHOLE shop, not per class, but the sample
    # above only shows same-class peers. That is why the model kept proposing
    # "Shadow Cloak" for spy after rogue already had it, burning a full
    # round-trip each time. Show every taken name — they are short, and a few
    # hundred of them cost far less than one rejected generation.
    taken = sorted({(a.get("name") or "").strip() for a in _abilities() if a.get("name")})

    prompt = (
        f"CLASS: {class_id} — {json.dumps(class_meta, ensure_ascii=False)}\n"
        f"TARGET LEVEL: {level}\n\n"
        f"EXISTING {class_id.upper()} ABILITIES (match tone and power, do not duplicate):\n"
        f"{json.dumps(sample, ensure_ascii=False, indent=2)}\n\n"
        f"NAMES ALREADY TAKEN ACROSS ALL CLASSES — picking any of these fails:\n"
        f"{', '.join(taken)}\n\n"
        f"ALLOWED TYPES: {', '.join(store.get('types', []))}\n\n"
        f"Design one new level {level} {class_id} ability.\n"
        f"`rules.effect` MUST contain concrete numbers (dice, distances, "
        f"durations, or a count) — an effect with no numbers is rejected.\n"
        f"`rules.drawback` must be a real cost, never 'none'."
    )
    return SYSTEM_PROMPT, prompt


def validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    store = _load()
    name = " ".join(str(raw.get("name", "")).split())
    if not (3 <= len(name) <= 48):
        raise ValidationError("bad name")
    if name.lower() in {(a.get("name") or "").lower() for a in _abilities()}:
        raise ValidationError(f"duplicate ability name {name!r}")

    ability_type = str(raw.get("type", "")).strip().lower()
    if ability_type not in store.get("types", []):
        raise ValidationError(f"unknown type {ability_type!r}")

    description = " ".join(str(raw.get("description", "")).split())
    if not (20 <= len(description) <= 400):
        raise ValidationError("description out of range")

    rules_in = raw.get("rules")
    if not isinstance(rules_in, dict):
        raise ValidationError("rules missing")
    rules: dict[str, str] = {}
    for field in ("activation", "range", "duration", "uses", "effect", "drawback"):
        value = " ".join(str(rules_in.get(field, "")).split())
        if not value:
            raise ValidationError(f"rules.{field} missing")
        rules[field] = value
    if rules["drawback"].lower().strip(" .") in ("none", "no drawback", "n/a"):
        raise ValidationError("drawback must be a real cost")
    if not any(ch.isdigit() for ch in rules["effect"]):
        raise ValidationError("effect has no numbers")

    try:
        ap_cost = int(raw.get("apCost"))
    except (TypeError, ValueError):
        raise ValidationError("apCost not an integer") from None
    if not 1 <= ap_cost <= 5:
        raise ValidationError("apCost out of range")

    class_id = task.payload["class"]
    class_meta = store.get("classes", {}).get(class_id, {})
    icon = str(raw.get("icon", "")).strip() or class_meta.get("icon", "✨")

    return {
        "id": task.payload["slug"],
        "name": name,
        "icon": icon,
        "level": task.payload["level"],
        "type": ability_type,
        "typeLabel": ability_type.capitalize(),
        "description": description,
        "class": class_id,
        "className": class_meta.get("name", class_id.capitalize()),
        "hitDie": class_meta.get("hitDie"),
        "primaryStat": class_meta.get("primaryStat"),
        "price": 100 + task.payload["level"] * 60,
        "knownBy": [],
        "exclusivity": "open",
        "levelReason": " ".join(str(raw.get("levelReason", "")).split())[:300],
        "rules": rules,
        "apCost": ap_cost,
        "apReason": " ".join(str(raw.get("apReason", "")).split())[:300],
        "warioNote": " ".join(str(raw.get("warioNote", "")).split())[:220],
    }


def apply(task: Task, record: dict[str, Any]) -> TaskResult:
    with _WRITE_LOCK:
        store = _load()
        abilities = store.setdefault("abilities", [])
        if any(a.get("id") == record["id"] for a in abilities):
            return TaskResult(task=task, ok=False, detail="id already present")
        entry = dict(record)
        entry.update(provenance("abilities", task.payload.get("model", "")))
        abilities.append(entry)
        # Keep the advertised per-class count honest.
        class_meta = store.get("classes", {}).get(record["class"])
        if isinstance(class_meta, dict) and isinstance(class_meta.get("count"), int):
            class_meta["count"] += 1
        atomic_write_json(SHOP, store)
    return TaskResult(
        task=task, ok=True,
        detail=f"{record['name']} · {record['class']} L{record['level']} · {record['apCost']} AP",
        record=record, changed_paths=[str(SHOP.relative_to(ROOT))],
    )


SPEC = SystemSpec(
    id="abilities",
    title="Training Wing · ability deficit",
    summary="Add abilities to the emptiest class/level cells above level 1.",
    stage=1,
    next_tasks=next_tasks,
    build_prompt=build_prompt,
    validate=validate,
    apply=apply,
    pending=pending,
)
