#!/usr/bin/env python3
"""Continuously build a compact world-context JSON file for shop-writing tools.

It watches the event/battle JSON files and updates a single small context file.
Run `python tools/generate_shop_context.py --watch` overnight alongside the
LM Studio pass; other generators can read the output without loading the entire
world data set into each prompt.
"""
from __future__ import annotations
import argparse
import json
import time
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "tools" / ".shop-enrichment" / "context" / "shop-world-context.json"
CANDIDATES = (ROOT / "data" / "events.json", ROOT / "data" / "battles.json", ROOT / "data" / "currentDate.json")


def compact(value: Any, limit: int = 40) -> list[dict[str, Any]]:
    records = value if isinstance(value, list) else value.get("events", value.get("battles", [])) if isinstance(value, dict) else []
    result = []
    for record in records[-limit:]:
        if isinstance(record, dict):
            result.append({key: item for key, item in record.items() if key.lower() in {"id", "name", "title", "description", "date", "status", "location", "factions", "outcome"}})
    return result


def generate() -> None:
    data: dict[str, Any] = {"generatedAt": datetime.now(timezone.utc).isoformat(), "sources": {}}
    for path in CANDIDATES:
        if not path.exists(): continue
        try:
            data["sources"][path.name] = compact(json.loads(path.read_text(encoding="utf-8")))
        except (OSError, json.JSONDecodeError) as error:
            data["sources"][path.name] = {"error": str(error)}
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    temporary = OUTPUT.with_suffix(".tmp")
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temporary.replace(OUTPUT)
    print(f"Wrote {OUTPUT} ({len(data['sources'])} sources)")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--watch", action="store_true", help="Regenerate forever")
    parser.add_argument("--interval", type=int, default=600, help="Seconds between watch updates")
    args = parser.parse_args()
    while True:
        generate()
        if not args.watch: return
        time.sleep(max(args.interval, 10))

if __name__ == "__main__": main()
