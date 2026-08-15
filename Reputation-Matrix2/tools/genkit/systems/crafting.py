"""Crafting Forge — classify recipes into schools of magic.

`warizon-shop.js` L2444 filters recipes by school and L2425 counts them per
school. 831 of 1,038 recipes have `school: ""`, so four fifths of the Forge is
unreachable through its own filter — every potion (361), every enchanting
recipe (285) and every smithing recipe (185). Only the 207 scrolls were ever
classified.

This is classification, not invention: the recipe already says what it does,
and the eight schools already exist in `data/crafting.json`. The model picks
one and justifies it in a line.
"""

from __future__ import annotations

import difflib
import json
import threading
from typing import Any

from ..settings import ROOT
from ..spec import SystemSpec, Task, TaskResult, ValidationError, provenance
from ..storage import atomic_write_json, read_json

CRAFTING = ROOT / "data" / "crafting.json"
_WRITE_LOCK = threading.Lock()


def _load() -> dict[str, Any]:
    return read_json(CRAFTING, default={})


def _schools() -> dict[str, Any]:
    return _load().get("schools", {})


def _unclassified() -> list[dict[str, Any]]:
    return [
        r for r in _load().get("recipes", [])
        if isinstance(r, dict) and not str(r.get("school") or "").strip()
    ]


def pending() -> int:
    return len(_unclassified())


def next_tasks(count: int) -> list[Task]:
    # Interleave categories so potions do not monopolise the first 361 turns.
    pool = _unclassified()
    by_category: dict[str, list[dict[str, Any]]] = {}
    for recipe in pool:
        by_category.setdefault(recipe.get("category") or "other", []).append(recipe)

    tasks: list[Task] = []
    index = 0
    while len(tasks) < count and any(index < len(v) for v in by_category.values()):
        for category in sorted(by_category):
            if len(tasks) >= count:
                break
            bucket = by_category[category]
            if index >= len(bucket):
                continue
            recipe = bucket[index]
            tasks.append(
                Task(
                    system_id="crafting",
                    key=f"school:{recipe.get('id')}",
                    label=f"crafting school · {recipe.get('name') or recipe.get('id')}",
                    payload={"id": recipe.get("id")},
                )
            )
        index += 1
        if index > 500:
            break
    return tasks


SYSTEM_PROMPT = """You classify crafting recipes into schools of magic for a tabletop
campaign archive. The recipe already describes what it does. Read it and pick the one
school that best fits.

Return strictly valid JSON only, no commentary, no code fence:

{
  "school": "<EXACTLY one school key from the list>",
  "reason": "<one sentence, max 20 words, citing the recipe's own effect>"
}

Rules:
- Healing, buffs and material change are TRANSMUTATION. Raw damage is EVOCATION.
  Wards and resistance are ABJURATION. Summoning and teleport are CONJURATION.
  Insight, detection and scrying are DIVINATION. Mind-affecting is ENCHANTMENT.
  Undeath and life-drain are NECROMANCY. Concealment and false images are ILLUSION.
- A mundane forged sword with no magical effect is TRANSMUTATION (the smith's craft).
- Never invent a school. Never return more than one.
- The reason must quote or paraphrase the recipe's actual effect, not restate the school.
"""


def build_prompt(task: Task) -> tuple[str, str]:
    recipe = next(
        (r for r in _load().get("recipes", []) if r.get("id") == task.payload["id"]), None
    )
    if recipe is None:
        raise ValidationError("recipe vanished")

    view = {
        k: recipe.get(k)
        for k in ("id", "name", "category", "description", "effect", "rarity",
                  "spellLevel", "levelRequirement")
        if recipe.get(k) not in (None, "", [], {})
    }
    view["materials"] = [m.get("id") for m in recipe.get("materials", []) if isinstance(m, dict)]

    schools = _schools()
    listing = "\n".join(
        f"  {key} — {meta.get('description', '')}" for key, meta in schools.items()
    )
    prompt = (
        f"RECIPE:\n{json.dumps(view, ensure_ascii=False, indent=2)}\n\n"
        f"SCHOOLS:\n{listing}\n\nClassify this recipe."
    )
    return SYSTEM_PROMPT, prompt


# Answers that are *correct* in general fantasy vocabulary but are not one of
# the eight schools this archive uses. Rejecting these throws away a good
# classification over a naming difference, so fold them in instead.
SCHOOL_ALIASES = {
    "ALCHEMY": "TRANSMUTATION",
    "ALCHEMICAL": "TRANSMUTATION",
    "POTION": "TRANSMUTATION",
    "POTIONS": "TRANSMUTATION",
    "BREWING": "TRANSMUTATION",
    "CRAFTING": "TRANSMUTATION",
    "SMITHING": "TRANSMUTATION",
    "FORGING": "TRANSMUTATION",
    "TRANSFORMATION": "TRANSMUTATION",
    "HEALING": "ABJURATION",
    "RESTORATION": "ABJURATION",
    "PROTECTION": "ABJURATION",
    "WARDING": "ABJURATION",
    "DEFENSE": "ABJURATION",
    "SUMMONING": "CONJURATION",
    "TELEPORTATION": "CONJURATION",
    "DESTRUCTION": "EVOCATION",
    "ELEMENTAL": "EVOCATION",
    "FIRE": "EVOCATION",
    "DAMAGE": "EVOCATION",
    "DIVINE": "DIVINATION",
    "SCRYING": "DIVINATION",
    "PROPHECY": "DIVINATION",
    "CHARM": "ENCHANTMENT",
    "MIND": "ENCHANTMENT",
    "BUFF": "ENCHANTMENT",
    "DECEPTION": "ILLUSION",
    "STEALTH": "ILLUSION",
    "SHADOW": "ILLUSION",
    "DEATH": "NECROMANCY",
    "BLOOD": "NECROMANCY",
    "POISON": "NECROMANCY",
    "CURSE": "NECROMANCY",
}


def resolve_school(proposed: str) -> str | None:
    """Best-effort map of a model's answer onto the eight canonical schools.

    Exact, then alias, then a conservative fuzzy pass for plain misspellings
    ('TRANSMUATION'). Returns None only when nothing sensible matches.
    """
    key = "".join(ch for ch in str(proposed or "").upper() if ch.isalpha())
    if not key:
        return None
    known = _schools()
    if key in known:
        return key
    if key in SCHOOL_ALIASES:
        return SCHOOL_ALIASES[key]
    close = difflib.get_close_matches(key, list(known), n=1, cutoff=0.82)
    if close:
        return close[0]
    close = difflib.get_close_matches(key, list(SCHOOL_ALIASES), n=1, cutoff=0.88)
    if close:
        return SCHOOL_ALIASES[close[0]]
    return None


def validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    school = resolve_school(raw.get("school", ""))
    if school is None:
        raise ValidationError(
            f"unknown school {str(raw.get('school', ''))!r} — "
            f"use exactly one of: {', '.join(_schools())}"
        )
    reason = " ".join(str(raw.get("reason", "")).split())
    if len(reason.split()) > 26 or len(reason) < 10:
        raise ValidationError("reason missing or too long")
    return {"school": school, "schoolReason": reason}


def apply(task: Task, data: dict[str, Any]) -> TaskResult:
    with _WRITE_LOCK:
        store = _load()
        recipe = next(
            (r for r in store.get("recipes", []) if r.get("id") == task.payload["id"]), None
        )
        if recipe is None:
            return TaskResult(task=task, ok=False, detail="recipe not found on write")
        if str(recipe.get("school") or "").strip():
            return TaskResult(task=task, ok=False, detail="already classified")
        recipe["school"] = data["school"]
        recipe["schoolReason"] = data["schoolReason"]
        # Scoped stamp: these are existing hand-written recipes gaining a
        # classification, not generated records. The full provenance() stamp
        # would set `status` and misrepresent the recipe as machine-authored.
        stamp = provenance("crafting", task.payload.get("model", ""))["_generated"]
        stamp["fields"] = ["school", "schoolReason"]
        recipe["_generatedSchool"] = stamp
        atomic_write_json(CRAFTING, store)
    return TaskResult(
        task=task, ok=True, detail=data["school"], record=data,
        changed_paths=[str(CRAFTING.relative_to(ROOT))],
    )


SPEC = SystemSpec(
    id="crafting",
    title="Crafting Forge · school classification",
    summary="Assign a school of magic to the 831 recipes the Forge filter cannot see.",
    stage=1,
    next_tasks=next_tasks,
    build_prompt=build_prompt,
    validate=validate,
    apply=apply,
    pending=pending,
)
