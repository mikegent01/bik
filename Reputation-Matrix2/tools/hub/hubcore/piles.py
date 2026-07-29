"""Turn approved shop purchases into Foundry item-pile actors.

Reads `shop-purchases.json` (the DM-approved receipt log), resolves each line
against the shop catalog, groups by `playerKey`, and writes one importable
item-pile actor per character plus a combined manifest.

Receipts whose item no longer exists in the catalog (older faction upgrades,
for example) are not dropped — a stub record is synthesized from the receipt so
the player still receives the thing they paid for.
"""
from __future__ import annotations

from collections import defaultdict
from datetime import datetime, timezone
from typing import Any, Iterable

from . import dataio, foundry, paths


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


def resolve_purchases(
    rows: Iterable[dict[str, Any]] | None = None,
    *,
    players: Iterable[str] | None = None,
    include_faction: bool = True,
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
            record = _stub_from_receipt(receipt)
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


def build_pile_actor(player: dict[str, Any], *, pile_name: str | None = None) -> dict[str, Any]:
    """Create one item-pile actor document holding everything a player bought."""
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
) -> dict[str, Any]:
    """Build (and optionally write) an item pile for every purchasing player."""
    resolved = resolve_purchases(players=players, include_faction=include_faction)
    paths.ensure_out_dirs()

    written: list[dict[str, Any]] = []
    for key, player in resolved["players"].items():
        actor = build_pile_actor(player)
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
            entry["file"] = str(target)
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


def preview(players: Iterable[str] | None = None, include_faction: bool = True) -> dict[str, Any]:
    """Summary for the GUI: who gets what, without writing any files."""
    resolved = resolve_purchases(players=players, include_faction=include_faction)
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
