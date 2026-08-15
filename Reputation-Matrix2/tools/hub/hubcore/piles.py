"""Turn approved shop purchases into Foundry item-pile actors.

Reads `shop-purchases.json` (the DM-approved receipt log), resolves each line
against the shop catalog, groups by `playerKey`, and writes one importable
item-pile actor per character plus a combined manifest.

Receipts whose item no longer exists in the catalog (older faction upgrades,
for example) are not dropped — a stub record is synthesized from the receipt so
the player still receives the thing they paid for.
"""
from __future__ import annotations

import json
from collections import defaultdict
from datetime import datetime, timezone
from typing import Any, Iterable

from . import dataio, foundry, llm, paths

# Ability point cost tiers (matches build_ability_points.py)
def _ap_cost(level: int) -> int:
    L = int(level or 1)
    if L <= 3:  return 1
    if L <= 7:  return 2
    if L <= 11: return 3
    return 5

# Valid ability types from generate_abilities.py (exact match)
VALID_ABILITY_TYPES = {"combat", "utility", "magic", "stealth", "social", "support", "leadership", "divine"}

def _load_real_ability_catalog():
    """Load the canonical abilityShop.json so we use real, validated abilities."""
    try:
        shop = dataio.load_json(paths.ROOT / "data" / "abilityShop.json") or {}
        return shop.get("abilities", [])
    except Exception:
        return []


def generate_ability_items(level: int = 1, count: int = 3, class_hint: str = "") -> list[dict[str, Any]]:
    """Generate real ability items (as feats) pulled from the canonical Training Wing catalog.

    This is the correct implementation:
    - Uses the real 305 abilities from abilityShop.json (not low-quality templates)
    - Respects level (with smart spread)
    - Uses correct types from VALID_ABILITY_TYPES
    - Avoids duplicates
    - Supports levels 1–30+
    """
    real_abilities = _load_real_ability_catalog()
    if not real_abilities:
        # Fallback to very basic if catalog missing
        return []

    base_level = max(1, int(level))
    items = []
    used_ids = set()
    used_names = set()

    # Score abilities by how close they are to the requested level
    def score_ability(ab):
        ab_level = int(ab.get("level", 1))
        ab_class = str(ab.get("class", "")).lower()
        score = abs(ab_level - base_level)

        # Prefer matching class hint
        if class_hint and class_hint in ab_class:
            score -= 5

        # Slight preference for higher-level abilities when player is high level
        if base_level >= 15 and ab_level >= 9:
            score -= 2

        return score

    # Sort by relevance
    scored = sorted(real_abilities, key=score_ability)

    for ab in scored:
        if len(items) >= count:
            break

        ab_id = ab.get("id")
        ab_name = ab.get("name", "")
        ab_level = int(ab.get("level", 1))
        ab_type = str(ab.get("type", "combat")).lower()

        if ab_id in used_ids or ab_name in used_names:
            continue
        if ab_type not in VALID_ABILITY_TYPES:
            continue

        # Skip abilities that are way too high or too low for the character
        if ab_level > base_level + 8 or ab_level < max(1, base_level - 6):
            continue

        ap_cost = _ap_cost(ab_level)

        record = {
            "id": f"ability_{ab_id}",
            "name": ab_name,
            "description": ab.get("description", ""),
            "category": "services",
            "price": ap_cost * 75,
            "rarity": "rare" if ab_level >= 13 else ("uncommon" if ab_level >= 5 else "common"),
            "levelRequirement": ab_level,
            "effects": [f"Costs {ap_cost} AP"],
            "type": ab_type,
            "_abilityPointCost": ap_cost,
            "_generatedFromLevel": base_level,
            "_abilityType": ab_type,
            "_sourceAbilityId": ab_id,
            "class": ab.get("class"),
        }
        items.append(record)
        used_ids.add(ab_id)
        used_names.add(ab_name)

    # If we still don't have enough, relax the level filter
    if len(items) < count:
        for ab in scored:
            if len(items) >= count:
                break
            ab_id = ab.get("id")
            if ab_id in used_ids:
                continue
            ab_type = str(ab.get("type", "combat")).lower()
            if ab_type not in VALID_ABILITY_TYPES:
                continue

            ab_level = int(ab.get("level", 1))
            ap_cost = _ap_cost(ab_level)

            record = {
                "id": f"ability_{ab_id}",
                "name": ab.get("name", ""),
                "description": ab.get("description", ""),
                "category": "services",
                "price": ap_cost * 75,
                "rarity": "rare" if ab_level >= 13 else ("uncommon" if ab_level >= 5 else "common"),
                "levelRequirement": ab_level,
                "effects": [f"Costs {ap_cost} AP"],
                "type": ab_type,
                "_abilityPointCost": ap_cost,
                "_generatedFromLevel": base_level,
                "_abilityType": ab_type,
                "_sourceAbilityId": ab_id,
                "class": ab.get("class"),
            }
            items.append(record)
            used_ids.add(ab_id)

    return items[:count]


def _stub_from_receipt(receipt: dict[str, Any]) -> dict[str, Any]:
    """Build a minimal shop record for a receipt with no catalog entry."""
    return {
        "id": receipt.get("itemId"),
        "name": receipt.get("itemName") or receipt.get("itemId") or "Unknown Purchase",
        "description": (
            f"Purchased from Wario's Warehouse on order {receipt.get('orderId', 'unknown')}. "
            "This record is reconstructed from the receipt because the item is no longer "
            "listed in the live catalog."
        ),
        "category": "faction" if receipt.get("isFaction") else "curiosities",
        "price": receipt.get("price", 0),
        "rarity": "common",
        "effects": [],
        "_missingFromCatalog": True,
    }


_STUB_ENRICH_SYSTEM = """You are a D&D 5e / Foundry item writer for a comedic-but-grounded homebrew wiki.
Given a shop receipt for an item that no longer exists in the live catalog, return ONLY a JSON object with exactly these keys:
  description: 2-4 sentences of flavorful, useful text. Describe what the item actually does (mechanical effect, bonus, or narrative power).
  rarity: one of common | uncommon | rare | veryRare | legendary
  effects: array of 1-3 short effect strings (e.g. "+2 to lockpicking checks", "Once per long rest: heal 2d6")
  usage: optional object with activation/duration/charges if relevant (else omit)
Never invent new names or contradict the receipt. Keep tone consistent with Wario's Warehouse (fun, slightly shady, high quality)."""

def enrich_stub_with_model(
    receipt: dict[str, Any],
    *,
    model: str | None = None,
    endpoint: str = llm.DEFAULT_ENDPOINT,
) -> dict[str, Any] | None:
    """Ask LM Studio to turn a stub receipt into a real item description.

    Returns None if the model is offline or the response is invalid.
    """
    payload = {
        "orderId": receipt.get("orderId"),
        "itemId": receipt.get("itemId"),
        "itemName": receipt.get("itemName"),
        "price": receipt.get("price"),
        "isFaction": receipt.get("isFaction", False),
        "playerKey": receipt.get("playerKey"),
    }
    result = llm.ask_json(
        _STUB_ENRICH_SYSTEM,
        json.dumps(payload, ensure_ascii=False),
        endpoint=endpoint,
        model=model,
        temperature=0.75,
    )
    if not result or not isinstance(result, dict):
        return None
    return {
        "description": str(result.get("description", "")).strip() or _stub_from_receipt(receipt)["description"],
        "rarity": str(result.get("rarity", "common")).strip().lower() or "common",
        "effects": [str(e).strip() for e in (result.get("effects") or []) if str(e).strip()][:3],
        "usage": result.get("usage") if isinstance(result.get("usage"), dict) else None,
        "_aiEnriched": True,
    }


def resolve_purchases(
    rows: Iterable[dict[str, Any]] | None = None,
    *,
    players: Iterable[str] | None = None,
    include_faction: bool = True,
    use_ai_for_missing: bool = False,
    model: str | None = None,
) -> dict[str, Any]:
    """Group receipts by player and attach the catalog record for each line.

    Returns {players: {key: {lines, totalGold, missing}}, unassigned, stats}.
    """
    rows = list(rows if rows is not None else dataio.purchases())
    wanted = {str(key).strip().lower() for key in players} if players else None

    grouped: dict[str, list[dict[str, Any]]] = defaultdict(list)
    unassigned: list[dict[str, Any]] = []
    missing_total = 0

    for receipt in rows:
        if not isinstance(receipt, dict):
            continue
        if receipt.get("isFaction") and not include_faction:
            continue
        key = str(receipt.get("playerKey") or "").strip()
        if not key:
            unassigned.append(receipt)
            continue
        if wanted and key.lower() not in wanted:
            continue
        record = dataio.item_by_id(str(receipt.get("itemId", "")))
        missing = record is None
        if missing:
            missing_total += 1
            stub = _stub_from_receipt(receipt)
            if use_ai_for_missing:
                enriched = enrich_stub_with_model(receipt, model=model)
                if enriched:
                    stub.update(enriched)
            record = stub
        grouped[key].append({"receipt": receipt, "item": record, "missing": missing})

    players_out: dict[str, Any] = {}
    for key, lines in sorted(grouped.items()):
        # Same item bought twice becomes quantity 2 rather than two entries.
        merged: dict[str, dict[str, Any]] = {}
        for line in lines:
            item_id = str(line["item"].get("id") or line["item"].get("name"))
            slot = merged.setdefault(item_id, {"item": line["item"], "quantity": 0,
                                               "receipts": [], "missing": line["missing"]})
            slot["quantity"] += 1
            slot["receipts"].append(line["receipt"])
        total = sum(
            float(entry["receipt"].get("price") or 0) for entry in lines
        )
        players_out[key] = {
            "playerKey": key,
            "displayName": _display_name(key),
            "lines": list(merged.values()),
            "itemCount": sum(entry["quantity"] for entry in merged.values()),
            "uniqueItems": len(merged),
            "totalGold": int(total),
            "missing": sum(1 for entry in merged.values() if entry["missing"]),
        }

    return {
        "players": players_out,
        "unassigned": unassigned,
        "stats": {
            "receipts": len(rows),
            "players": len(players_out),
            "missingFromCatalog": missing_total,
        },
    }


def _display_name(player_key: str) -> str:
    """Prefer the wallet/character display name over the raw key."""
    wallet = dataio.wallets().get(player_key)
    if isinstance(wallet, dict) and wallet.get("name"):
        return str(wallet["name"])
    person = dataio.find_character(player_key)
    if person and person.get("name"):
        return str(person["name"])
    return player_key.replace("_", " ").title()


def build_pile_actor(
    player: dict[str, Any],
    *,
    pile_name: str | None = None,
    include_abilities: bool = False,
    character_level: int = 1,
) -> dict[str, Any]:
    """Create one item-pile actor document holding everything a player bought.

    When include_abilities=True, also injects generated ability items
    (as feats) scaled to the character's level.
    """
    key = player["playerKey"]
    display = player.get("displayName") or key
    name = pile_name or f"{display} — Warehouse Delivery"

    items = []
    for index, line in enumerate(player["lines"]):
        record = dict(line["item"])
        record["_receipts"] = [
            {
                "orderId": receipt.get("orderId"),
                "approvedAt": receipt.get("approvedAt"),
                "approvedBy": receipt.get("approvedBy"),
                "price": receipt.get("price"),
            }
            for receipt in line["receipts"]
        ]
        items.append(foundry.shop_item_to_foundry(
            record,
            quantity=line["quantity"],
            sort=index,
            seed=f"{key}:{record.get('id')}:{index}",
        ))

    # Optional: generate ability items for this character
    if include_abilities:
        # Try to infer a class hint from the first item if available
        class_hint = ""
        if player.get("lines"):
            first_item = player["lines"][0].get("item", {})
            class_hint = str(first_item.get("class", "")).lower()

        ability_items = generate_ability_items(
            level=character_level,
            count=3,
            class_hint=class_hint
        )
        for idx, ab in enumerate(ability_items):
            items.append(foundry.shop_item_to_foundry(
                ab,
                sort=500 + idx,
                seed=f"{key}:ability:{idx}",
            ))

    wallet = dataio.wallets().get(key) or {}
    balances = wallet.get("currencies") or {}
    biography = foundry.html_paragraphs(
        f"Item pile generated by the Waluipedia hub for {display}.",
        f"{player['itemCount']} item(s) across {player['uniqueItems']} entries, "
        f"{player['totalGold']} gold of approved purchases.",
        "Every entry keeps its order id under flags.waluipedia.receipts.",
    )

    actor = foundry.build_actor(
        name,
        items=items,
        img=foundry.PILE_ICON,
        is_pile=True,
        biography=biography,
        currency=foundry._currency(
            gold=max(int(balances.get("gold", 0) or 0), 0),
            silver=max(int(balances.get("silver", 0) or 0), 0),
            copper=max(int(balances.get("bronze", balances.get("copper", 0)) or 0), 0),
        ),
        hp=0,
        ac=0,
        seed=f"pile:{key}",
        flags_extra={
            "waluipedia": {
                "kind": "shop-delivery-pile",
                "playerKey": key,
                "generatedAt": datetime.now(timezone.utc).isoformat(),
                "totalGold": player["totalGold"],
                "orderIds": [
                    receipt.get("orderId")
                    for line in player["lines"] for receipt in line["receipts"]
                ],
            }
        },
    )
    return actor


def build_all(
    *,
    players: Iterable[str] | None = None,
    include_faction: bool = True,
    write: bool = True,
    use_ai_for_missing: bool = False,
    model: str | None = None,
    include_abilities: bool = False,
    character_level: int = 1,
) -> dict[str, Any]:
    """Build (and optionally write) an item pile for every purchasing player.

    include_abilities/character_level are forwarded to build_pile_actor so the
    web UI's "include abilities" toggle reaches the actor builder.
    """
    resolved = resolve_purchases(
        players=players,
        include_faction=include_faction,
        use_ai_for_missing=use_ai_for_missing,
        model=model,
    )
    paths.ensure_out_dirs()

    written: list[dict[str, Any]] = []
    for key, player in resolved["players"].items():
        actor = build_pile_actor(
            player,
            include_abilities=include_abilities,
            character_level=character_level,
        )
        entry = {
            "playerKey": key,
            "displayName": player["displayName"],
            "actorName": actor["name"],
            "items": player["itemCount"],
            "uniqueItems": player["uniqueItems"],
            "totalGold": player["totalGold"],
            "missing": player["missing"],
        }
        if write:
            filename = f"fvtt-Actor-{foundry.safe_filename(key)}-pile.json"
            target = paths.PILES_DIR / filename
            dataio.write_json(target, actor)
            # Repo-relative on both keys: this manifest is committed, so an
            # absolute path here would bake one machine's home directory into
            # the repository and churn the diff on every run elsewhere.
            entry["file"] = paths.relative(target)
            entry["relativeFile"] = paths.relative(target)
        else:
            entry["actor"] = actor
        written.append(entry)

    manifest = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "stats": resolved["stats"],
        "piles": written,
        "unassignedReceipts": resolved["unassigned"],
    }
    if write:
        manifest_path = paths.PILES_DIR / "manifest.json"
        dataio.write_json(manifest_path, manifest)
        manifest["manifestFile"] = str(manifest_path)
    return manifest


def preview(
    players: Iterable[str] | None = None,
    include_faction: bool = True,
    use_ai_for_missing: bool = False,
    model: str | None = None,
) -> dict[str, Any]:
    """Summary for the GUI: who gets what, without writing any files."""
    resolved = resolve_purchases(
        players=players,
        include_faction=include_faction,
        use_ai_for_missing=use_ai_for_missing,
        model=model,
    )
    rows = []
    for key, player in resolved["players"].items():
        rows.append({
            "playerKey": key,
            "displayName": player["displayName"],
            "itemCount": player["itemCount"],
            "uniqueItems": player["uniqueItems"],
            "totalGold": player["totalGold"],
            "missing": player["missing"],
            "items": [
                {
                    "id": line["item"].get("id"),
                    "name": line["item"].get("name"),
                    "quantity": line["quantity"],
                    "price": line["item"].get("price"),
                    "rarity": line["item"].get("rarity"),
                    "category": line["item"].get("category"),
                    "missing": line["missing"],
                    "orderIds": [receipt.get("orderId") for receipt in line["receipts"]],
                }
                for line in player["lines"]
            ],
        })
    return {"stats": resolved["stats"], "players": rows,
            "unassigned": len(resolved["unassigned"])}
