"""Lore-driven character creator.

Builds a Foundry dnd5e character actor from Waluipedia lore. Three sources feed
a build, all optional and combinable:

  * an existing character in data/characters.json (name, race, affiliation, bio)
  * one or more events in data/events.json (background hooks + starting gear)
  * a faction in data/factions.json (allegiance, equipment slant)

The ability spread and class suggestion are derived deterministically from the
lore text, so the same inputs always produce the same character. If LM Studio is
running, it is asked to enrich the flavor (biography, ideal/bond/flaw, gear
picks) and its answer is merged over the deterministic base — never replacing
the mechanical skeleton.
"""
from __future__ import annotations

import hashlib
import json
import re
from datetime import datetime, timezone
from typing import Any, Iterable

from . import dataio, foundry, llm, paths

STANDARD_ARRAY = [15, 14, 13, 12, 10, 8]

# Keyword -> class. Scanned against the character's combined lore text; the
# highest scoring class wins, defaulting to Fighter.
CLASS_KEYWORDS: dict[str, tuple[str, ...]] = {
    "Wizard": ("wizard", "magus", "arcane", "scholar", "archivist", "spellbook", "mage", "研究"),
    "Cleric": ("cleric", "priest", "temple", "faith", "divine", "blessing", "holy", "parson"),
    "Rogue": ("rogue", "thief", "assassin", "smuggler", "spy", "shadow", "black market", "burglar"),
    "Fighter": ("soldier", "legion", "captain", "sergeant", "knight", "warrior", "guard", "military", "commander"),
    "Ranger": ("ranger", "hunter", "scout", "tracker", "groundskeeper", "wilds", "forest", "explorer"),
    "Bard": ("bard", "performer", "singer", "diplomat", "merchant", "trader", "negotiat", "microphone", "storyteller"),
    "Paladin": ("paladin", "oath", "champion", "crusader", "justice", "protector"),
    "Barbarian": ("barbarian", "berserk", "raider", "brute", "rage", "warlord"),
    "Druid": ("druid", "nature", "grove", "beast", "shaman", "fungal", "mushroom"),
    "Warlock": ("warlock", "pact", "demon", "vampire", "void", "eldritch", "cursed", "broker"),
    "Sorcerer": ("sorcerer", "bloodline", "innate", "chaos", "wild magic"),
    "Monk": ("monk", "martial", "discipline", "ki", "monastery"),
    "Artificer": ("artificer", "engineer", "inventor", "tinker", "machine", "gadget", "professor"),
}

# Class -> (primary ability, secondary, saves, skills, starting kit keywords)
CLASS_PROFILE: dict[str, dict[str, Any]] = {
    "Wizard":     {"primary": "int", "secondary": "con", "saves": ("int", "wis"), "skills": ("arc", "his"), "hitDie": 6,  "gear": ("scroll", "book", "staff")},
    "Cleric":     {"primary": "wis", "secondary": "con", "saves": ("wis", "cha"), "skills": ("rel", "med"), "hitDie": 8,  "gear": ("potion", "shield", "hammer")},
    "Rogue":      {"primary": "dex", "secondary": "cha", "saves": ("dex", "int"), "skills": ("ste", "slt"), "hitDie": 8,  "gear": ("dagger", "kit", "cloak")},
    "Fighter":    {"primary": "str", "secondary": "con", "saves": ("str", "con"), "skills": ("ath", "itm"), "hitDie": 10, "gear": ("sword", "armor", "shield")},
    "Ranger":     {"primary": "dex", "secondary": "wis", "saves": ("str", "dex"), "skills": ("sur", "nat"), "hitDie": 10, "gear": ("bow", "cloak", "ration")},
    "Bard":       {"primary": "cha", "secondary": "dex", "saves": ("dex", "cha"), "skills": ("prf", "per"), "hitDie": 8,  "gear": ("microphone", "book", "dagger")},
    "Paladin":    {"primary": "str", "secondary": "cha", "saves": ("wis", "cha"), "skills": ("rel", "itm"), "hitDie": 10, "gear": ("sword", "armor", "amulet")},
    "Barbarian":  {"primary": "str", "secondary": "con", "saves": ("str", "con"), "skills": ("ath", "sur"), "hitDie": 12, "gear": ("axe", "ration", "hammer")},
    "Druid":      {"primary": "wis", "secondary": "con", "saves": ("int", "wis"), "skills": ("nat", "ani"), "hitDie": 8,  "gear": ("mushroom", "potion", "staff")},
    "Warlock":    {"primary": "cha", "secondary": "con", "saves": ("wis", "cha"), "skills": ("arc", "dec"), "hitDie": 8,  "gear": ("amulet", "scroll", "dagger")},
    "Sorcerer":   {"primary": "cha", "secondary": "con", "saves": ("con", "cha"), "skills": ("arc", "per"), "hitDie": 6,  "gear": ("ring", "potion", "scroll")},
    "Monk":       {"primary": "dex", "secondary": "wis", "saves": ("str", "dex"), "skills": ("acr", "ins"), "hitDie": 8,  "gear": ("ration", "gloves", "spear")},
    "Artificer":  {"primary": "int", "secondary": "con", "saves": ("con", "int"), "skills": ("inv", "arc"), "hitDie": 8,  "gear": ("tools", "bomb", "gadget")},
}

SIZE_HINTS = (("toad", "sml"), ("goomba", "sml"), ("halfling", "sml"), ("gnome", "sml"),
              ("dwarf", "sml"), ("koopa", "med"), ("giant", "lg"), ("dragon", "lg"))


# --------------------------------------------------------------------------- #
# lore gathering
# --------------------------------------------------------------------------- #
def gather_lore(
    *,
    character_id: str | None = None,
    event_ids: Iterable[str] = (),
    faction_id: str | None = None,
) -> dict[str, Any]:
    """Collect the lore records a build will draw on."""
    person = dataio.find_character(character_id) if character_id else None

    events: list[dict[str, Any]] = []
    wanted = [str(value) for value in event_ids if value]
    # A character's own keyEvents are pulled in automatically so "use the lore"
    # does the obvious thing without the user listing them by hand.
    if person:
        wanted.extend(str(value) for value in (person.get("keyEvents") or []))
    seen: set[str] = set()
    for identifier in wanted:
        if identifier in seen:
            continue
        seen.add(identifier)
        event = dataio.find_event(identifier)
        if event:
            events.append(event)

    faction = None
    if faction_id:
        for entry in dataio.factions():
            if str(entry.get("id", "")).lower() == str(faction_id).lower() or \
               str(entry.get("name", "")).lower() == str(faction_id).lower():
                faction = entry
                break
    if faction is None and person and person.get("affiliation"):
        affiliation = str(person["affiliation"]).lower()
        for entry in dataio.factions():
            if str(entry.get("name", "")).lower().split(" —")[0] in affiliation:
                faction = entry
                break

    race = None
    if person and person.get("race"):
        needle = str(person["race"]).lower()
        for entry in dataio.races():
            if str(entry.get("name", "")).lower().rstrip("s") in needle:
                race = entry
                break

    return {"character": person, "events": events, "faction": faction, "race": race}


def _lore_text(lore: dict[str, Any]) -> str:
    parts: list[str] = []
    person = lore.get("character")
    if person:
        parts += [str(person.get(key, "")) for key in
                  ("name", "title", "race", "status", "affiliation", "summary", "description")]
    for event in lore.get("events", []):
        parts += [str(event.get(key, "")) for key in ("name", "title", "type", "summary")]
    if lore.get("faction"):
        parts += [str(lore["faction"].get(key, "")) for key in ("name", "title", "type", "summary")]
    if lore.get("race"):
        parts.append(str(lore["race"].get("name", "")))
    return " ".join(parts).lower()


# --------------------------------------------------------------------------- #
# deterministic mechanical build
# --------------------------------------------------------------------------- #
def suggest_class(text: str) -> str:
    scores = {
        name: sum(text.count(keyword) for keyword in keywords)
        for name, keywords in CLASS_KEYWORDS.items()
    }
    best = max(scores, key=lambda name: (scores[name], name))
    return best if scores[best] else "Fighter"


def _seeded_shuffle(values: list[Any], seed: str) -> list[Any]:
    """Deterministic ordering derived from the lore seed (no global RNG state)."""
    digest = hashlib.sha256(seed.encode("utf-8")).digest()
    ordered = sorted(range(len(values)), key=lambda index: digest[index % len(digest)])
    return [values[index] for index in ordered]


def build_abilities(class_name: str, seed: str) -> dict[str, int]:
    """Assign the 5e standard array: primary and secondary first, rest seeded."""
    profile = CLASS_PROFILE.get(class_name, CLASS_PROFILE["Fighter"])
    remaining = [key for key in foundry.ABILITIES
                 if key not in (profile["primary"], profile["secondary"])]
    order = [profile["primary"], profile["secondary"], *_seeded_shuffle(remaining, seed)]
    return dict(zip(order, STANDARD_ARRAY))


def suggest_size(race_name: str) -> str:
    """Size comes from the race alone; scanning full lore text produced
    false positives (any mention of a dragon made the character Large)."""
    needle = str(race_name or "").lower()
    for keyword, size in SIZE_HINTS:
        if keyword in needle:
            return size
    return "med"


def suggest_gear(
    class_name: str,
    lore: dict[str, Any],
    limit: int = 6,
    character_level: int = 1,
) -> list[dict[str, Any]]:
    """Pick thematic starting (or appropriate) gear out of the real shop catalog.

    Evenly distributes picks across item level tiers (based on price + levelRequirement).
    Supports characters above level 20 by allowing progressively higher-tier gear.
    When tiers are balanced, falls back to round-robin + least-represented tier weighting.
    Avoids the old "only level 1 training wing" bias.
    """
    profile = CLASS_PROFILE.get(class_name, CLASS_PROFILE["Fighter"])
    keywords = list(profile["gear"])
    faction = lore.get("faction") or {}
    if faction.get("name"):
        keywords.append(str(faction["name"]).split()[0].lower())

    # Level-based price / tier scaling (roughly 5e wealth by level)
    # Level 1  ~ 100-300g     | Level 5  ~ 2k-4k
    # Level 10 ~ 10k-20k     | Level 15 ~ 50k+
    # Level 20+ allows very high-end items
    max_price = 300 + (character_level ** 2) * 35          # quadratic growth
    max_price = min(max_price, 250_000)                    # hard safety cap

    # Tier boundaries (approximate item level)
    tier_bounds = [0, 4, 8, 12, 16, 20, 999]
    tier_names = ["T1 (1-4)", "T2 (5-8)", "T3 (9-12)", "T4 (13-16)", "T5 (17-20)", "T6 (20+)"]

    catalog = dataio.shop_items()

    # Group items by keyword + tier
    tier_buckets: dict[str, dict[int, list[tuple[int, dict[str, Any]]]]] = {
        key: {i: [] for i in range(len(tier_bounds) - 1)} for key in keywords
    }

    for record in catalog.values():
        name = str(record.get("name", "")).lower()
        if not name:
            continue

        try:
            price = int(record.get("price") or 0)
            lvl_req = int(record.get("levelRequirement") or 1)
        except (TypeError, ValueError):
            continue

        if price <= 0 or price > max_price:
            continue

        # Determine tier from levelRequirement (primary) or price
        tier = 0
        for i, bound in enumerate(tier_bounds[1:], 1):
            if lvl_req < bound:
                tier = i - 1
                break
        else:
            tier = len(tier_bounds) - 2

        for keyword in keywords:
            if keyword in name:
                tier_buckets[keyword][tier].append((price, record))
                break

    # Sort each tier bucket by price (cheapest first within tier)
    for key in tier_buckets:
        for t in tier_buckets[key]:
            tier_buckets[key][t].sort(key=lambda r: (r[0], str(r[1].get("id", ""))))

    # Even distribution across tiers + keywords
    chosen: list[dict[str, Any]] = []
    seen_ids: set[str] = set()

    # First pass: round-robin across tiers (most balanced)
    tier_indices = [0] * (len(tier_bounds) - 1)
    tier_counts = [0] * (len(tier_bounds) - 1)

    for _ in range(limit * 3):  # safety loop
        if len(chosen) >= limit:
            break

        progressed = False
        for t_idx in range(len(tier_bounds) - 1):
            for keyword in keywords:
                bucket = tier_buckets.get(keyword, {}).get(t_idx, [])
                if tier_indices[t_idx] >= len(bucket):
                    continue

                record = bucket[tier_indices[t_idx]][1]
                identifier = str(record.get("id"))
                if identifier in seen_ids:
                    tier_indices[t_idx] += 1
                    continue

                seen_ids.add(identifier)
                chosen.append(record)
                tier_counts[t_idx] += 1
                tier_indices[t_idx] += 1
                progressed = True

                if len(chosen) >= limit:
                    break
            if len(chosen) >= limit:
                break

        if not progressed:
            break

    # Second pass: if still short, fill from the least-populated tiers
    # (prevents one tier from dominating when the catalog is sparse)
    if len(chosen) < limit:
        remaining = limit - len(chosen)
        # Weight toward under-represented tiers
        for t_idx in sorted(range(len(tier_counts)), key=lambda x: tier_counts[x]):
            for keyword in keywords:
                if len(chosen) >= limit:
                    break
                bucket = tier_buckets.get(keyword, {}).get(t_idx, [])
                for price, record in bucket:
                    if len(chosen) >= limit:
                        break
                    identifier = str(record.get("id"))
                    if identifier in seen_ids:
                        continue
                    seen_ids.add(identifier)
                    chosen.append(record)
                    tier_counts[t_idx] += 1

    return chosen[:limit]


def _class_item(class_name: str, level: int) -> dict[str, Any]:
    profile = CLASS_PROFILE.get(class_name, CLASS_PROFILE["Fighter"])
    return {
        "_id": foundry.new_id(f"class:{class_name}:{level}"),
        "name": class_name,
        "type": "class",
        "img": "icons/svg/upgrade.svg",
        "system": {
            "description": {"value": foundry.html_paragraphs(
                f"{class_name} levels granted by the Waluipedia hub character creator."), "chat": ""},
            "identifier": class_name.lower(),
            "levels": max(int(level), 1),
            "hitDice": f"d{profile['hitDie']}",
            "hitDiceUsed": 0,
            "advancement": [],
            "spellcasting": {"progression": "none", "ability": ""},
            "primaryAbility": {"value": [profile["primary"]], "all": True},
        },
        "effects": [], "folder": None, "sort": 0, "flags": {},
        "_stats": foundry.stats_block(), "ownership": {"default": 0},
    }


def _race_item(race_name: str, size: str) -> dict[str, Any]:
    return {
        "_id": foundry.new_id(f"race:{race_name}"),
        "name": race_name,
        "type": "race",
        "img": "icons/svg/mystery-man.svg",
        "system": {
            "description": {"value": foundry.html_paragraphs(
                f"{race_name} heritage, imported from the Waluipedia races registry."), "chat": ""},
            "identifier": re.sub(r"[^a-z0-9]+", "-", race_name.lower()).strip("-"),
            "advancement": [],
            "type": {"value": "humanoid", "subtype": "", "swarm": "", "custom": ""},
            "movement": {"walk": 30, "units": "ft", "hover": False},
            "senses": {"units": "ft", "special": ""},
        },
        "effects": [], "folder": None, "sort": 0, "flags": {},
        "_stats": foundry.stats_block(), "ownership": {"default": 0},
    }


def _background_item(name: str, description: str) -> dict[str, Any]:
    return {
        "_id": foundry.new_id(f"background:{name}"),
        "name": name,
        "type": "background",
        "img": "icons/svg/book.svg",
        "system": {
            "description": {"value": foundry.html_paragraphs(description), "chat": ""},
            "identifier": re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-"),
            "advancement": [],
        },
        "effects": [], "folder": None, "sort": 0, "flags": {},
        "_stats": foundry.stats_block(), "ownership": {"default": 0},
    }


def _event_feature(event: dict[str, Any], index: int) -> dict[str, Any]:
    """Each linked event becomes a roleplay feat so the lore rides along."""
    name = str(event.get("name") or event.get("title") or "Historical Tie")
    summary = str(event.get("summary") or "")[:600]
    detail = " · ".join(str(event.get(key)) for key in ("date", "era", "location", "type") if event.get(key))
    return {
        "_id": foundry.new_id(f"event:{event.get('id')}:{index}"),
        "name": f"Witness: {name}",
        "type": "feat",
        "img": "icons/svg/aura.svg",
        "system": {
            "description": {"value": foundry.html_paragraphs(summary, detail), "chat": ""},
            "identifier": re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")[:60],
            "type": {"value": "background", "subtype": ""},
            "requirements": "Waluipedia lore",
            "activation": {"type": "", "cost": None, "condition": ""},
            "uses": {"max": "", "spent": 0, "recovery": []},
        },
        "effects": [], "folder": None, "sort": (index + 1) * 1000,
        "flags": {"waluipedia": {"eventId": event.get("id"), "kind": "lore-tie"}},
        "_stats": foundry.stats_block(), "ownership": {"default": 0},
    }


# --------------------------------------------------------------------------- #
# LM Studio enrichment (optional)
# --------------------------------------------------------------------------- #
_SYSTEM_PROMPT = """You are a D&D 5e character writer for a comedic-but-grounded homebrew wiki.
Return ONLY a JSON object with exactly these keys:
  biography: 3-5 sentences of second-person-neutral prose grounded in the supplied lore. Name real people, factions, and events from the input.
  alignment: one standard 5e alignment string.
  ideal, bond, flaw: one sentence each, each referencing something concrete from the lore.
  appearance: one or two sentences.
  backgroundName: 2-4 words naming a background that fits this world (not a generic SRD background if the lore suggests better).
  suggestedClass: one 5e class name.
Never invent a different character name. Never contradict the supplied status or affiliation."""


def enrich_with_model(lore: dict[str, Any], base: dict[str, Any], *, model: str | None = None,
                      endpoint: str = llm.DEFAULT_ENDPOINT) -> dict[str, Any] | None:
    """Ask LM Studio to improve the flavor text. Returns None when offline."""
    person = lore.get("character") or {}
    payload = {
        "name": base["name"],
        "race": base["race"],
        "class": base["class"],
        "title": person.get("title"),
        "status": person.get("status"),
        "affiliation": person.get("affiliation"),
        "summary": str(person.get("summary", ""))[:1500],
        "faction": (lore.get("faction") or {}).get("name"),
        "events": [
            {"name": event.get("name"), "summary": str(event.get("summary", ""))[:400]}
            for event in lore.get("events", [])[:4]
        ],
    }
    return llm.ask_json(_SYSTEM_PROMPT, json.dumps(payload, ensure_ascii=False),
                        endpoint=endpoint, model=model, temperature=0.8)


# --------------------------------------------------------------------------- #
# public build
# --------------------------------------------------------------------------- #
def build_character(
    *,
    name: str | None = None,
    character_id: str | None = None,
    event_ids: Iterable[str] = (),
    faction_id: str | None = None,
    class_name: str | None = None,
    race_name: str | None = None,
    level: int = 1,
    gear_count: int = 6,
    include_gear: bool = True,
    use_model: bool = False,
    model: str | None = None,
    endpoint: str = llm.DEFAULT_ENDPOINT,
) -> dict[str, Any]:
    """Produce a Foundry character actor plus a report of what drove the build."""
    lore = gather_lore(character_id=character_id, event_ids=event_ids, faction_id=faction_id)
    person = lore.get("character") or {}

    final_name = (name or person.get("name") or "Unnamed Wanderer").strip()
    text = _lore_text(lore) or final_name.lower()
    final_class = class_name or suggest_class(text)
    final_race = race_name or str(person.get("race") or (lore.get("race") or {}).get("name") or "Human")
    final_race = re.sub(r"\s*\(.*?\)", "", final_race).strip() or "Human"
    level = max(1, min(int(level or 1), 20))

    seed = f"{final_name}|{final_class}|{final_race}"
    abilities = build_abilities(final_class, seed)
    profile = CLASS_PROFILE.get(final_class, CLASS_PROFILE["Fighter"])

    base = {"name": final_name, "race": final_race, "class": final_class}
    enrichment: dict[str, Any] | None = None
    if use_model:
        enrichment = enrich_with_model(lore, base, model=model, endpoint=endpoint)

    # Deterministic flavor, overridden by the model only where it answered.
    summary = str(person.get("summary") or "")
    biography_parts = [
        summary or f"{final_name} is a {final_race} {final_class} drawn from the Waluipedia archives.",
    ]
    if person.get("status"):
        biography_parts.append(f"Status: {person['status']}")
    if person.get("affiliation"):
        biography_parts.append(f"Affiliation: {person['affiliation']}")
    if lore.get("events"):
        biography_parts.append("Tied to: " + ", ".join(
            str(event.get("name")) for event in lore["events"][:6]))

    biography = foundry.html_paragraphs(*biography_parts)
    alignment = ""
    ideal = bond = flaw = appearance = ""
    background_name = "Waluipedia Native"

    if enrichment:
        if enrichment.get("biography"):
            biography = foundry.html_paragraphs(str(enrichment["biography"]), *biography_parts[1:])
        alignment = str(enrichment.get("alignment") or "")
        ideal = str(enrichment.get("ideal") or "")
        bond = str(enrichment.get("bond") or "")
        flaw = str(enrichment.get("flaw") or "")
        appearance = str(enrichment.get("appearance") or "")
        background_name = str(enrichment.get("backgroundName") or background_name)
        if not class_name and enrichment.get("suggestedClass") in CLASS_PROFILE:
            # Model may refine the class; recompute the spread so they agree.
            final_class = str(enrichment["suggestedClass"])
            profile = CLASS_PROFILE[final_class]
            abilities = build_abilities(final_class, seed)

    items: list[dict[str, Any]] = [
        _class_item(final_class, level),
        _race_item(final_race, suggest_size(final_race)),
        _background_item(background_name, summary[:400] or f"Origins tied to {final_race} society."),
    ]
    for index, event in enumerate(lore.get("events", [])[:6]):
        items.append(_event_feature(event, index))

    gear: list[dict[str, Any]] = []
    if include_gear and gear_count > 0:
        gear = suggest_gear(final_class, lore, limit=gear_count, character_level=level)
        for index, record in enumerate(gear):
            items.append(foundry.shop_item_to_foundry(
                record, sort=20 + index, seed=f"{final_name}:gear:{record.get('id')}"))

    hit_points = profile["hitDie"] + (abilities.get("con", 10) - 10) // 2
    hit_points += (level - 1) * (profile["hitDie"] // 2 + 1 + (abilities.get("con", 10) - 10) // 2)

    wallet = dataio.wallets().get(str(character_id or "").lower()) or {}
    balances = wallet.get("currencies") or {}

    actor = foundry.build_actor(
        final_name,
        items=items,
        img="icons/svg/mystery-man.svg",
        is_pile=False,
        biography=biography,
        abilities=abilities,
        ability_proficiencies=profile["saves"],
        skill_proficiencies=profile["skills"],
        currency=foundry._currency(
            gold=max(int(balances.get("gold", 0) or 0), 0),
            silver=max(int(balances.get("silver", 0) or 0), 0),
            copper=max(int(balances.get("bronze", 0) or 0), 0),
        ),
        hp=max(hit_points, 1),
        ac=10 + (abilities.get("dex", 10) - 10) // 2,
        alignment=alignment,
        details_extra={
            "ideal": ideal, "bond": bond, "flaw": flaw, "appearance": appearance,
            "originalClass": final_class,
            "xp": {"value": 0},
        },
        traits_extra={"size": suggest_size(final_race)},
        seed=f"character:{final_name}",
        flags_extra={
            "waluipedia": {
                "kind": "generated-character",
                "generatedAt": datetime.now(timezone.utc).isoformat(),
                "sourceCharacterId": person.get("id"),
                "eventIds": [event.get("id") for event in lore.get("events", [])],
                "factionId": (lore.get("faction") or {}).get("id"),
                "usedModel": bool(enrichment),
            }
        },
    )

    return {
        "actor": actor,
        "report": {
            "name": final_name,
            "class": final_class,
            "race": final_race,
            "level": level,
            "abilities": abilities,
            "hp": max(hit_points, 1),
            "size": suggest_size(final_race),
            "background": background_name,
            "alignment": alignment,
            "saves": list(profile["saves"]),
            "skills": list(profile["skills"]),
            "sourceCharacter": person.get("id"),
            "events": [{"id": event.get("id"), "name": event.get("name")}
                       for event in lore.get("events", [])],
            "faction": (lore.get("faction") or {}).get("name"),
            "gear": [{"id": record.get("id"), "name": record.get("name"),
                      "price": record.get("price")} for record in gear],
            "modelUsed": bool(enrichment),
            "modelRequested": bool(use_model),
        },
    }


def save_character(result: dict[str, Any]) -> str:
    paths.ensure_out_dirs()
    actor = result["actor"]
    filename = f"fvtt-Actor-{foundry.safe_filename(actor['name'].lower())}.json"
    target = paths.ACTORS_DIR / filename
    dataio.write_json(target, actor)
    return str(target)
