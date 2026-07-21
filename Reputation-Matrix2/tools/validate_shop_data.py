#!/usr/bin/env python3
"""Validate split shop data and report/remove duplicate low-quality records.

Run after a generation pass, or use --remove-worse to rewrite only source chunks
containing duplicate records. A JSON report is always written to the ignored
shop-enrichment workspace.
"""
from __future__ import annotations

import argparse
import json
import sys
from collections import defaultdict
from difflib import SequenceMatcher
from pathlib import Path
from typing import Any

sys.path.insert(0, str(Path(__file__).resolve().parent))
from enrich_shop_items import ITEMS_DIR, WORK_DIR, run_node_export, write_chunk  # noqa: E402


def norm(value: Any) -> str:
    return "".join(character.lower() for character in str(value) if character.isalnum())


def quality(item: dict[str, Any]) -> int:
    """Keep the more complete, reviewed record; this intentionally avoids lore taste judgments."""
    return min(len(str(item.get("description", ""))), 300) + 50 * len(item.get("effects", [])) + 80 * len(item.get("effectDetails", [])) + (25 if item.get("aiReviewedAt") else 0) + (10 if item.get("priceReason") else 0)


def validate(item: dict[str, Any]) -> list[str]:
    errors: list[str] = []
    for key in ("id", "name", "description", "category", "price", "effects"):
        if key not in item or item[key] in (None, "", []): errors.append(f"missing {key}")
    if not isinstance(item.get("price"), int) or isinstance(item.get("price"), bool) or item.get("price", 0) <= 0: errors.append("invalid price")
    if not isinstance(item.get("effects"), list): errors.append("effects is not a list")
    if item.get("effectDetails") is not None and len(item.get("effectDetails", [])) != len(item.get("effects", [])): errors.append("effectDetails count differs from effects")
    return errors


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--remove-worse", action="store_true", help="Remove lower-quality duplicate records and rewrite affected source chunks")
    parser.add_argument("--similarity", type=float, default=.97, help="Description similarity threshold (0-1)")
    args = parser.parse_args()
    sources = sorted(ITEMS_DIR.glob("items_[0-9][0-9][0-9].js"))
    chunks = {source: run_node_export(source) for source in sources}
    records = [(source, item) for source, items in chunks.items() for item in items]
    invalid = [{"source": str(source), "id": item.get("id"), "errors": validate(item)} for source, item in records if validate(item)]
    groups: list[list[tuple[Path, dict[str, Any]]]] = []
    by_id: dict[str, list[tuple[Path, dict[str, Any]]]] = defaultdict(list)
    for record in records: by_id[norm(record[1].get("id"))].append(record)
    groups.extend(group for key, group in by_id.items() if key and len(group) > 1)
    # Avoid an O(n²) pass across thousands of records. Near-duplicates normally
    # share their opening prose, so compare only records in a normalized prefix bucket.
    seen = {tuple(sorted(item["id"] for _, item in group)) for group in groups}
    description_buckets: dict[str, list[tuple[Path, dict[str, Any], str]]] = defaultdict(list)
    for source, item in records:
        description = norm(item.get("description"))
        if len(description) >= 24:
            description_buckets[description[:80]].append((source, item, description))
    for bucket in description_buckets.values():
        for index, (left_source, left_item, left_description) in enumerate(bucket):
            for right_source, right_item, right_description in bucket[index + 1:]:
                if SequenceMatcher(None, left_description, right_description).ratio() >= args.similarity:
                    key = tuple(sorted((left_item["id"], right_item["id"])))
                    if key not in seen:
                        groups.append([(left_source, left_item), (right_source, right_item)]); seen.add(key)
    duplicates = []
    removals: dict[Path, set[str]] = defaultdict(set)
    for group in groups:
        winner = max(group, key=lambda record: quality(record[1]))
        losers = [record for record in group if record is not winner]
        duplicates.append({"keep": winner[1]["id"], "remove": [item["id"] for _, item in losers], "reason": "higher completeness/review score"})
        for source, item in losers: removals[source].add(item["_sourceKey"])
    if args.remove_worse:
        for source, keys in removals.items():
            write_chunk(source, [item for item in chunks[source] if item["_sourceKey"] not in keys])
    report = {"itemsChecked": len(records), "invalid": invalid, "duplicates": duplicates, "removed": sum(map(len, removals.values())) if args.remove_worse else 0}
    WORK_DIR.mkdir(parents=True, exist_ok=True)
    (WORK_DIR / "validation-report.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    print(f"Checked {len(records)} items: {len(invalid)} invalid records, {len(duplicates)} duplicate groups. Report: {WORK_DIR / 'validation-report.json'}")
    if args.remove_worse: print(f"Removed {report['removed']} lower-quality duplicates.")
    return 1 if invalid else 0

if __name__ == "__main__":
    raise SystemExit(main())
