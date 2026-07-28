#!/usr/bin/env python3
"""Generate and review Training Wing abilities with a local LM Studio model.

Companion to `enrich_shop_items.py`. Same contract, same safety model:
  - resumable: every validated result is checkpointed before anything is written
  - atomic: source writes go through a temp file + retrying replace
  - validated: a model reply is rejected unless it is complete, in-range, and
    actually about the ability it was asked about

Two modes:

  review   (default) — improve the abilities already in data/abilityShop.json:
                       rewrite thin descriptions, add missing rules blocks, and
                       assign an AP cost that matches the level tier.
  create             — invent NEW abilities for a class, refusing duplicates of
                       any name/id already in the catalog.

Usage from Reputation-Matrix2/:
  python tools/generate_abilities.py --gui
  python tools/generate_abilities.py --limit 5                  # review, writes
  python tools/generate_abilities.py --review-only --limit 3    # preview only
  python tools/generate_abilities.py --mode create --class rogue --count 4
  python tools/generate_abilities.py --class wizard             # review one class

Start LM Studio's OpenAI-compatible local server first.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import stat
import sys
import threading
import time
import urllib.error
import urllib.request
from dataclasses import dataclass, field
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any, Callable

# Windows consoles default to cp1252 and choke on the emoji in ability icons.
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding="utf-8", errors="backslashreplace")
    except (AttributeError, OSError):
        pass

ROOT = Path(__file__).resolve().parents[1]
SHOP_PATH = ROOT / "data" / "abilityShop.json"
WORK_DIR = ROOT / "tools" / ".ability-generation"
CHECKPOINT_PATH = WORK_DIR / "checkpoint.json"
RESUME_PATH = WORK_DIR / "resume-state.json"
TEMPLATE_PATH = ROOT / "tools" / "ability-response-template.json"
DEFAULT_ENDPOINT = "http://127.0.0.1:1234/v1/chat/completions"

# Mirrors meta.apCostRule in data/abilityShop.json. Kept here so the validator can
# reject a model that invents its own economy.
AP_TIERS = ((4, 1), (8, 2), (12, 3), (99, 4))
VALID_TYPES = {"combat", "utility", "magic", "stealth", "social", "support", "leadership", "divine"}

SYSTEM_PROMPT = """You are the rules editor for the Training Wing of a whimsical D&D 5e-inspired
ability shop. Return ONLY a JSON object, no prose and no code fences.

VOICE: The catalog is written for players at a table. Be concrete and playable.

NAME + IDENTITY: The ability must belong to the class it is written for and must not duplicate an
existing ability name in the provided catalog list. Never prefix the name with the class.

DESCRIPTION: One tight sentence under 160 characters. Say what the ability actually does. Never write
filler such as "a powerful technique", "grants great strength", or "ask your DM".

RULES: Write table-ready 5e-inspired homebrew. The effect must state dice or a concrete numeric
benefit, a save DC formula when a save applies (for example "DC 8 + proficiency + Charisma modifier"),
which conditions are applied, and exactly what ends the effect. Every ability must carry a real
drawback, cost, or limitation. Never claim this is official D&D content.

BALANCE: Match power to level. A level 1-4 ability is a small reliable edge. Level 5-8 changes one
encounter beat. Level 9-12 is a strong per-rest play. Level 13+ may be dramatic but must still have a
hard limit. Never grant unlimited resources, permanent unconditional immunity, guaranteed critical
hits, auto-success on any roll, or an effect that removes another player's agency.

AP COST: Use exactly this tier rule and nothing else — levels 1-4 cost 1 AP, 5-8 cost 2 AP,
9-12 cost 3 AP, 13+ cost 4 AP. The apCost you return must match the level you chose."""


def ap_for_level(level: int) -> int:
    """AP cost from the level tier. Single source of truth for the validator."""
    lvl = max(1, int(level or 1))
    for ceiling, cost in AP_TIERS:
        if lvl <= ceiling:
            return cost
    return AP_TIERS[-1][1]


@dataclass
class Settings:
    endpoint: str = DEFAULT_ENDPOINT
    model: str = ""
    timeout: int = 180
    limit: int = 0
    mode: str = "review"          # review | create
    klass: str = ""               # restrict to one class id
    count: int = 3                # create mode: how many new abilities
    infinite: bool = False        # create mode: keep going until stopped
    review_only: bool = False     # checkpoint but never touch source
    review_mode: str = "unchecked"  # unchecked | stale | all
    stale_days: int = 30
    temperature: float = 0.6
    seen_names: set[str] = field(default_factory=set)


# --------------------------------------------------------------------------
# Storage helpers (same atomic-write discipline as enrich_shop_items.py)
# --------------------------------------------------------------------------

def replace_with_retry(temporary: Path, target: Path, *, attempts: int = 12) -> None:
    """Replace target with retries for Windows editors/AV/read-only files."""
    last_error: OSError | None = None
    for attempt in range(attempts):
        try:
            if temporary.exists():
                temporary.chmod(stat.S_IWRITE | stat.S_IREAD)
            if target.exists():
                target.chmod(stat.S_IWRITE | stat.S_IREAD)
            temporary.replace(target)
            return
        except PermissionError as error:
            last_error = error
            time.sleep(0.25 * (attempt + 1))
        except OSError as error:
            last_error = error
            time.sleep(0.1 * (attempt + 1))
    raise PermissionError(
        f"Could not replace {target}. Close any editor or sync tool holding the file "
        f"and make sure it is not read-only. Last error: {last_error}"
    )


def load_shop() -> dict[str, Any]:
    return json.loads(SHOP_PATH.read_text(encoding="utf-8"))


def save_shop(shop: dict[str, Any]) -> None:
    temporary = SHOP_PATH.with_suffix(".tmp")
    temporary.write_text(json.dumps(shop, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    replace_with_retry(temporary, SHOP_PATH)


def load_checkpoint() -> dict[str, Any]:
    try:
        return json.loads(CHECKPOINT_PATH.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return {}


def save_checkpoint(results: dict[str, Any]) -> None:
    WORK_DIR.mkdir(parents=True, exist_ok=True)
    temporary = CHECKPOINT_PATH.with_suffix(".tmp")
    temporary.write_text(json.dumps(results, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    replace_with_retry(temporary, CHECKPOINT_PATH)


def save_resume_state(ability_id: str, name: str, completed: int, mode: str) -> None:
    WORK_DIR.mkdir(parents=True, exist_ok=True)
    state = {"mode": mode, "lastAbilityId": ability_id, "lastAbilityName": name,
             "completedThisRun": completed, "savedAt": datetime.now(timezone.utc).isoformat()}
    temporary = RESUME_PATH.with_suffix(".tmp")
    temporary.write_text(json.dumps(state, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    replace_with_retry(temporary, RESUME_PATH)


# --------------------------------------------------------------------------
# Selection
# --------------------------------------------------------------------------

def needs_review(ability: dict[str, Any], settings: Settings) -> bool:
    """Which existing abilities this pass should spend requests on."""
    if settings.klass and ability.get("class") != settings.klass:
        return False
    if settings.review_mode == "all":
        return True
    stamp = ability.get("aiReviewedAt")
    if not stamp:
        return True
    if settings.review_mode == "unchecked":
        return False
    try:
        reviewed = datetime.fromisoformat(str(stamp).replace("Z", "+00:00"))
    except ValueError:
        return True
    return datetime.now(timezone.utc) - reviewed > timedelta(days=settings.stale_days)


def slugify(class_id: str, name: str) -> str:
    base = re.sub(r"[^a-z0-9]+", "_", str(name).lower()).strip("_")
    return f"{class_id}_{base}" if base else f"{class_id}_ability"


# Words that carry no distinguishing meaning in an ability name, plus crude stemming, so
# "Fortify Shield" / "Fortified Shield" / "Shield Bash" / "Rapid Shield Bash" collapse to
# comparable keys instead of sailing past an exact-string check.
DEDUPE_STOP = {"the", "of", "a", "an", "and", "rapid", "quick", "swift", "fast", "greater",
               "lesser", "improved", "advanced", "superior", "minor", "major", "basic",
               "strike", "surge", "burst", "blast", "technique", "maneuver", "stance",
               "art", "form", "style", "mastery", "focus"}


def _stem(word: str) -> str:
    """Crude suffix stripping. Good enough to equate fortify/fortified/fortifying."""
    for suffix in ("ing", "edly", "ies", "ied", "ed", "es", "s", "y"):
        if len(word) > 4 and word.endswith(suffix):
            return word[: -len(suffix)]
    return word


def dedupe_key(name: Any) -> str:
    """Order-insensitive normalized signature of an ability name."""
    words = re.findall(r"[a-z]+", str(name).lower())
    core = sorted({_stem(w) for w in words if w not in DEDUPE_STOP and len(w) > 2})
    return " ".join(core)


def identity_terms(name: Any) -> set[str]:
    ignored = {"the", "of", "and", "for", "with", "from", "a", "an", "to", "in", "on"}
    return {w.lower() for w in re.findall(r"[A-Za-z]{4,}", str(name)) if w.lower() not in ignored}


# --------------------------------------------------------------------------
# Model call
# --------------------------------------------------------------------------

def build_user_prompt(shop: dict[str, Any], settings: Settings,
                      ability: dict[str, Any] | None, feedback: str = "",
                      class_id: str = "") -> str:
    template = TEMPLATE_PATH.read_text(encoding="utf-8")
    classes = shop.get("classes", {})
    existing_names = sorted({str(a.get("name", "")) for a in shop.get("abilities", [])} | settings.seen_names)

    if settings.mode == "create":
        class_id = class_id or settings.klass or "fighter"
        cls = classes.get(class_id, {})
        head = (
            f"Invent ONE new ability for the {cls.get('name', class_id)} class.\n"
            f"Class profile: {json.dumps(cls, ensure_ascii=False)}\n"
            f"It must fit that class's role, hit die, and primary stat."
        )
    else:
        cls = classes.get(str(ability.get("class", "")), {})
        editable = {k: v for k, v in (ability or {}).items()
                    if k not in {"knownBy", "accent", "typeLabel", "aiReviewedAt", "className"}}
        head = (
            "Improve this existing ability. Keep its identity, class, and intent — this is an "
            "editorial and rules pass, not a replacement.\n"
            f"Ability: {json.dumps(editable, ensure_ascii=False)}\n"
            f"Class profile: {json.dumps(cls, ensure_ascii=False)}"
        )

    forbidden = ", ".join(existing_names[:120])
    tail = (
        f"\n\nNames already used (do NOT reuse or near-duplicate any): {forbidden}"
        f"\n\nFill in this exact JSON template and return JSON only:\n{template}"
    )
    if feedback:
        tail += ("\n\nRETRY FEEDBACK: the previous draft was rejected because " + feedback +
                 ". Fix exactly that and return the complete corrected JSON object.")
    return head + tail


def call_lm_studio(settings: Settings, shop: dict[str, Any],
                   ability: dict[str, Any] | None, feedback: str = "",
                   class_id: str = "") -> dict[str, Any]:
    payload: dict[str, Any] = {
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": build_user_prompt(shop, settings, ability, feedback, class_id)},
        ],
        "temperature": settings.temperature,
    }
    # Deliberately no `response_format`: several LM Studio builds reject it with HTTP 400.
    if settings.model:
        payload["model"] = settings.model

    last_error: Exception | None = None
    for attempt in range(3):
        if attempt:
            payload["messages"].append({
                "role": "user",
                "content": f"Your previous response was invalid JSON ({last_error}). "
                           "Return the same answer as strictly valid JSON only, every string escaped.",
            })
        request = urllib.request.Request(
            settings.endpoint, data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json; charset=utf-8"}, method="POST")
        try:
            with urllib.request.urlopen(request, timeout=settings.timeout) as response:
                body = json.loads(response.read())
        except urllib.error.HTTPError as error:
            detail = error.read().decode("utf-8", errors="replace").strip()
            raise RuntimeError(f"LM Studio HTTP {error.code}: {detail or error.reason}") from error
        content = body["choices"][0]["message"]["content"]
        if not isinstance(content, str):
            last_error = ValueError("LM Studio returned a non-text response")
            continue
        content = re.sub(r"^```(?:json)?\s*|\s*```$", "", content.strip(), flags=re.IGNORECASE)
        try:
            return json.loads(content)
        except json.JSONDecodeError as error:
            last_error = error
    raise ValueError(f"LM Studio returned invalid JSON after 3 attempts: {last_error}")


# --------------------------------------------------------------------------
# Validation — a bad reply must never reach the catalog
# --------------------------------------------------------------------------

REQUIRED = {"name", "icon", "description", "type", "level", "levelReason",
            "rules", "apCost", "apReason", "warioNote"}
RULE_KEYS = {"activation", "range", "duration", "uses", "effect", "drawback"}
FILLER = re.compile(r"ask (?:your|the) dm|as (?:the|its) card states|powerful (?:ability|technique)"
                    r"|mysterious|various effects|etc\.", re.IGNORECASE)
# Power claims that break a table. Rejected outright.
BANNED = re.compile(r"\b(?:unlimited|infinite)\s+(?:uses|damage|hit points|spell slots)"
                    r"|auto(?:matically)?\s+succeed|always\s+critical|guaranteed\s+critical"
                    r"|cannot\s+(?:fail|miss|be\s+hit)|permanent(?:ly)?\s+immune", re.IGNORECASE)


def validate(settings: Settings, shop: dict[str, Any],
             original: dict[str, Any] | None, answer: dict[str, Any]) -> dict[str, Any]:
    if not isinstance(answer, dict):
        raise ValueError("response was not a JSON object")
    missing = REQUIRED - set(answer)
    extra = set(answer) - REQUIRED
    if missing or extra:
        raise ValueError(f"expected exactly {sorted(REQUIRED)}; missing={sorted(missing)} extra={sorted(extra)}")

    name = str(answer["name"]).strip()
    if not 3 <= len(name) <= 48:
        raise ValueError("name must be 3-48 characters")
    if re.match(r"^\s*(?:the\s+)?(?:paladin|rogue|wizard|fighter|barbarian|spy|leader|gunslinger|militia|artisan|commoner)\b", name, re.I):
        raise ValueError("name must not be prefixed with the class")

    description = str(answer["description"]).strip()
    if not 20 <= len(description) <= 200:
        raise ValueError("description must be 20-200 characters")
    if FILLER.search(description):
        raise ValueError("description contains filler language")

    atype = str(answer["type"]).strip().lower()
    if atype not in VALID_TYPES:
        raise ValueError(f"type must be one of {sorted(VALID_TYPES)}")

    try:
        level = int(answer["level"])
    except (TypeError, ValueError) as error:
        raise ValueError("level must be a whole number") from error
    if not 1 <= level <= 20:
        raise ValueError("level must be 1-20")

    rules = answer["rules"]
    if not isinstance(rules, dict) or set(rules) != RULE_KEYS:
        raise ValueError(f"rules must be an object with exactly {sorted(RULE_KEYS)}")
    for key, value in rules.items():
        text = str(value).strip()
        if len(text) < 3:
            raise ValueError(f"rules.{key} is empty")
        if FILLER.search(text):
            raise ValueError(f"rules.{key} contains filler language")
    effect = str(rules["effect"])
    if len(effect) < 40:
        raise ValueError("rules.effect must be a complete, table-ready rule")
    if BANNED.search(effect) or BANNED.search(str(rules["drawback"])):
        raise ValueError("rules contain a banned unlimited/auto-success power claim")
    if len(str(rules["drawback"]).strip()) < 15:
        raise ValueError("rules.drawback must state a real cost or limitation")

    expected_ap = ap_for_level(level)
    try:
        ap_cost = int(answer["apCost"])
    except (TypeError, ValueError) as error:
        raise ValueError("apCost must be a whole number") from error
    if ap_cost != expected_ap:
        raise ValueError(f"apCost {ap_cost} does not match the tier rule for level {level} (expected {expected_ap})")

    # Duplicate guard. Exact-string matching was not enough: a long run produced
    # "Shield Bash", "Rapid Shield Bash", "Fortify Shield" and "Fortified Shield" in five
    # requests, because none of them are byte-identical. Compare on a normalized key
    # (stemmed, stop-worded, order-insensitive) so restatements collide too.
    lowered = name.lower()
    existing = {str(a.get("name", "")).lower() for a in shop.get("abilities", [])}
    existing_keys = {dedupe_key(a.get("name", "")) for a in shop.get("abilities", [])}
    if original is not None:
        existing.discard(str(original.get("name", "")).lower())
        existing_keys.discard(dedupe_key(original.get("name", "")))
    seen_lower = {n.lower() for n in settings.seen_names}
    seen_keys = {dedupe_key(n) for n in settings.seen_names}
    if lowered in existing or lowered in seen_lower:
        raise ValueError(f"ability name '{name}' already exists in the catalog")
    key = dedupe_key(name)
    if key and (key in existing_keys or key in seen_keys):
        raise ValueError(f"ability name '{name}' is a near-duplicate of an existing ability "
                         f"(normalizes to '{key}'); invent a mechanically different ability")

    # A review pass must stay recognisably about the same ability.
    if original is not None:
        before, after = identity_terms(original.get("name")), identity_terms(name)
        if before and after and not (before & after) and len(before) > 1:
            raise ValueError(f"renamed '{original.get('name')}' into an unrelated ability '{name}'")

    return {
        "name": name,
        "icon": str(answer["icon"]).strip()[:4] or "✨",
        "description": description,
        "type": atype,
        "level": level,
        "levelReason": str(answer["levelReason"]).strip(),
        "rules": {k: str(v).strip() for k, v in rules.items()},
        "apCost": ap_cost,
        "apReason": str(answer["apReason"]).strip(),
        "warioNote": str(answer["warioNote"]).strip(),
    }


def request_with_retries(settings: Settings, shop: dict[str, Any],
                         ability: dict[str, Any] | None,
                         class_id: str = "") -> tuple[dict[str, Any] | None, Exception | None]:
    last_error: Exception | None = None
    for _ in range(5):
        try:
            candidate = call_lm_studio(settings, shop, ability, str(last_error or ""), class_id)
            return validate(settings, shop, ability, candidate), None
        except (ValueError, KeyError, json.JSONDecodeError, urllib.error.URLError,
                TimeoutError, RuntimeError) as error:
            last_error = error
    return None, last_error


# --------------------------------------------------------------------------
# Applying results
# --------------------------------------------------------------------------

def apply_review(shop: dict[str, Any], ability_id: str, result: dict[str, Any]) -> None:
    types = shop.get("types", {})
    for ability in shop.get("abilities", []):
        if ability.get("id") != ability_id:
            continue
        ability["name"] = result["name"]
        ability["icon"] = result["icon"]
        ability["description"] = result["description"]
        ability["type"] = result["type"]
        ability["typeLabel"] = types.get(result["type"], {}).get("label", result["type"].title())
        ability["level"] = result["level"]
        ability["levelReason"] = result["levelReason"]
        ability["rules"] = result["rules"]
        ability["apCost"] = result["apCost"]
        ability["apReason"] = result["apReason"]
        ability["warioNote"] = result["warioNote"]
        ability["aiReviewedAt"] = datetime.now(timezone.utc).isoformat()
        return
    raise KeyError(f"ability {ability_id} vanished from the catalog")


def apply_create(shop: dict[str, Any], class_id: str, result: dict[str, Any]) -> str:
    classes = shop.get("classes", {})
    types = shop.get("types", {})
    cls = classes.get(class_id, {})
    ability_id = slugify(class_id, result["name"])
    taken = {a.get("id") for a in shop.get("abilities", [])}
    suffix = 2
    while ability_id in taken:
        ability_id = f"{slugify(class_id, result['name'])}_{suffix}"
        suffix += 1
    shop.setdefault("abilities", []).append({
        "id": ability_id,
        "name": result["name"],
        "icon": result["icon"],
        "level": result["level"],
        "type": result["type"],
        "typeLabel": types.get(result["type"], {}).get("label", result["type"].title()),
        "accent": types.get(result["type"], {}).get("accent", "#7a8a99"),
        "description": result["description"],
        "class": class_id,
        "className": cls.get("name", class_id.title()),
        "hitDie": cls.get("hitDie"),
        "primaryStat": cls.get("primaryStat"),
        "price": 0,                       # legacy field; AP is the real currency
        "apCost": result["apCost"],
        "apReason": result["apReason"],
        "levelReason": result["levelReason"],
        "rules": result["rules"],
        "warioNote": result["warioNote"],
        "knownBy": [],
        "exclusivity": "open",
        "generated": True,
        "aiReviewedAt": datetime.now(timezone.utc).isoformat(),
    })
    if isinstance(cls.get("count"), int):
        cls["count"] = cls["count"] + 1
    return ability_id


# --------------------------------------------------------------------------
# Driver
# --------------------------------------------------------------------------

def process(settings: Settings, notify: Callable[[str, dict[str, Any] | None], None],
            stop: threading.Event | None = None) -> int:
    shop = load_shop()
    checkpoint = load_checkpoint()
    completed = 0

    if settings.mode == "create":
        known = list(shop.get("classes", {}))
        if settings.klass:
            if settings.klass not in known:
                notify(f"Unknown class '{settings.klass}'. Known: {', '.join(sorted(known))}", None)
                return 0
            rotation = [settings.klass]           # explicit --class pins to one
        else:
            rotation = known                      # no --class: cycle through every class
        if not rotation:
            notify("No classes defined in abilityShop.json.", None)
            return 0

        target = settings.limit or settings.count          # 0/infinite -> run until stopped
        infinite = settings.infinite or target <= 0
        if infinite:
            notify(f"Infinite mode: cycling {len(rotation)} classes until stopped (Ctrl+C or Stop).", None)
        elif len(rotation) > 1:
            notify(f"Cycling {len(rotation)} classes: {', '.join(rotation)}", None)

        consecutive_failures = 0
        index = 0
        while infinite or index < target:
            if stop and stop.is_set():
                notify("Stopped.", None)
                break
            class_id = rotation[index % len(rotation)]     # round-robin so no class starves
            label = f"{index + 1}/∞" if infinite else f"{index + 1}/{target}"
            notify(f"Creating {class_id} ability {label}…", None)
            result, error = request_with_retries(settings, shop, None, class_id)
            index += 1
            if not result:
                consecutive_failures += 1
                notify(f"  failed: {error}", None)
                # A dead/unloaded LM Studio would otherwise spin forever in infinite mode.
                if consecutive_failures >= 12:
                    notify("  12 consecutive failures — stopping. Is the LM Studio server still up?", None)
                    break
                continue
            consecutive_failures = 0
            settings.seen_names.add(result["name"])
            checkpoint[f"new::{class_id}::{result['name']}"] = result
            save_checkpoint(checkpoint)
            if not settings.review_only:
                new_id = apply_create(shop, class_id, result)
                save_shop(shop)
                save_resume_state(new_id, result["name"], completed + 1, settings.mode)
            completed += 1
            notify(f"  + {result['icon']} {result['name']} ({class_id} Lv {result['level']}, {result['apCost']} AP)", result)
        return completed

    abilities = [a for a in shop.get("abilities", []) if needs_review(a, settings)]
    if settings.limit:
        abilities = abilities[: settings.limit]
    if not abilities:
        notify("Nothing to review with the current filters.", None)
        return 0

    notify(f"Reviewing {len(abilities)} abilities…", None)
    for ability in abilities:
        if stop and stop.is_set():
            notify("Stopped.", None)
            break
        notify(f"[{completed + 1}/{len(abilities)}] {ability.get('name')}", None)
        result, error = request_with_retries(settings, shop, ability)
        if not result:
            notify(f"  failed: {error}", None)
            continue
        checkpoint[str(ability.get("id"))] = result
        save_checkpoint(checkpoint)
        if not settings.review_only:
            apply_review(shop, str(ability.get("id")), result)
            save_shop(shop)
            save_resume_state(str(ability.get("id")), result["name"], completed + 1, settings.mode)
        completed += 1
        notify(f"  ✓ {result['icon']} {result['name']} — Lv {result['level']} · {result['apCost']} AP", result)
    return completed


def cli() -> int:
    parser = argparse.ArgumentParser(description="Generate/review Training Wing abilities with LM Studio.")
    parser.add_argument("--endpoint", default=os.environ.get("LM_STUDIO_URL", DEFAULT_ENDPOINT))
    parser.add_argument("--model", default=os.environ.get("LM_STUDIO_MODEL", ""))
    parser.add_argument("--timeout", type=int, default=180)
    parser.add_argument("--limit", type=int, default=0, help="stop after N successful abilities")
    parser.add_argument("--mode", choices=("review", "create"), default="review")
    parser.add_argument("--class", dest="klass", default="", help="restrict to one class id")
    parser.add_argument("--count", type=int, default=3, help="create mode: how many to invent")
    parser.add_argument("--infinite", action="store_true", help="create mode: run until you stop it (Ctrl+C), cycling every class")
    parser.add_argument("--review-only", action="store_true", help="checkpoint results without writing source")
    parser.add_argument("--review-mode", choices=("unchecked", "stale", "all"), default="unchecked")
    parser.add_argument("--stale-days", type=int, default=30)
    parser.add_argument("--temperature", type=float, default=0.6)
    parser.add_argument("--gui", action="store_true")
    args = parser.parse_args()

    if args.gui:
        launch_gui()
        return 0

    settings = Settings(endpoint=args.endpoint, model=args.model, timeout=args.timeout,
                        limit=args.limit, mode=args.mode, klass=args.klass, count=args.count,
                        infinite=args.infinite,
                        review_only=args.review_only, review_mode=args.review_mode,
                        stale_days=args.stale_days, temperature=args.temperature)
    done = process(settings, lambda line, _payload=None: print(line, flush=True))
    print(f"\nFinished. {done} abilities {'previewed' if settings.review_only else 'written'}.")
    if settings.review_only:
        print(f"Checkpoint: {CHECKPOINT_PATH}")
    return 0


# --------------------------------------------------------------------------
# Optional Tk GUI, matching shop_studio.py's look
# --------------------------------------------------------------------------

def launch_gui() -> None:
    import tkinter as tk
    from tkinter import ttk, scrolledtext

    shop = load_shop()
    classes = sorted(shop.get("classes", {}))

    root = tk.Tk()
    root.title("Ability Studio — Training Wing generator")
    root.minsize(760, 520)
    frame = ttk.Frame(root, padding=16)
    frame.pack(fill="both", expand=True)

    ttk.Label(frame, text="ABILITY STUDIO", font=("Arial", 18, "bold")).pack(anchor="w")
    ttk.Label(frame, text="Review existing Training Wing abilities or invent new ones with a local LM Studio model.",
              wraplength=700).pack(anchor="w", pady=(0, 12))

    row1 = ttk.Frame(frame); row1.pack(fill="x", pady=3)
    ttk.Label(row1, text="Endpoint", width=10).pack(side="left")
    endpoint_var = tk.StringVar(value=os.environ.get("LM_STUDIO_URL", DEFAULT_ENDPOINT))
    ttk.Entry(row1, textvariable=endpoint_var).pack(side="left", fill="x", expand=True)
    ttk.Label(row1, text="Model", width=7).pack(side="left", padx=(8, 0))
    model_var = tk.StringVar(value=os.environ.get("LM_STUDIO_MODEL", ""))
    ttk.Entry(row1, textvariable=model_var, width=22).pack(side="left")

    row2 = ttk.Frame(frame); row2.pack(fill="x", pady=3)
    ttk.Label(row2, text="Mode", width=10).pack(side="left")
    mode_var = tk.StringVar(value="review")
    ttk.Combobox(row2, textvariable=mode_var, values=["review", "create"], width=10, state="readonly").pack(side="left")
    ttk.Label(row2, text="Class").pack(side="left", padx=(10, 4))
    class_var = tk.StringVar(value="")
    ttk.Combobox(row2, textvariable=class_var, values=[""] + classes, width=14, state="readonly").pack(side="left")
    ttk.Label(row2, text="Limit / count").pack(side="left", padx=(10, 4))
    limit_var = tk.StringVar(value="3")
    ttk.Entry(row2, textvariable=limit_var, width=6).pack(side="left")
    review_only_var = tk.BooleanVar(value=False)
    ttk.Checkbutton(row2, text="Review only (no writes)", variable=review_only_var).pack(side="left", padx=12)

    log = scrolledtext.ScrolledText(frame, height=18, wrap="word")
    log.pack(fill="both", expand=True, pady=10)

    stop_event = threading.Event()

    def append(line: str, _payload: dict[str, Any] | None = None) -> None:
        log.insert("end", line + "\n"); log.see("end"); root.update_idletasks()

    def run() -> None:
        stop_event.clear()
        log.delete("1.0", "end")
        try:
            count = int(limit_var.get() or 0)
        except ValueError:
            count = 3
        settings = Settings(endpoint=endpoint_var.get().strip(), model=model_var.get().strip(),
                            mode=mode_var.get(), klass=class_var.get().strip(),
                            limit=count if mode_var.get() == "review" else 0,
                            count=count, review_only=review_only_var.get())

        def worker() -> None:
            try:
                done = process(settings, append, stop_event)
                append(f"\nFinished. {done} abilities {'previewed' if settings.review_only else 'written'}.")
            except Exception as error:                      # surface, never crash the window
                append(f"\nERROR: {error}")

        threading.Thread(target=worker, daemon=True).start()

    buttons = ttk.Frame(frame); buttons.pack(fill="x")
    ttk.Button(buttons, text="Run", command=run, width=14).pack(side="left")
    ttk.Button(buttons, text="Stop", command=stop_event.set, width=10).pack(side="left", padx=6)
    ttk.Label(buttons, text=f"Checkpoints: {WORK_DIR.relative_to(ROOT)}", foreground="#666").pack(side="left", padx=12)
    root.mainloop()


if __name__ == "__main__":
    raise SystemExit(cli())
