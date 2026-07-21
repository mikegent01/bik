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
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "tools" / ".shop-enrichment" / "context" / "shop-world-context.json"
# These are the world-state JSON sources most useful for contextual shop stock.
# Add a file with --include when a campaign introduces another relevant feed.
CANDIDATES = (
    ROOT / "data" / "events.json", ROOT / "data" / "battles.json",
    ROOT / "data" / "currentDate.json", ROOT / "data" / "calendarHolidays.json",
    ROOT / "data" / "calendarSeasons.json", ROOT / "data" / "calendarMonths.json",
    ROOT / "data" / "locations.json", ROOT / "data" / "factions.json",
    ROOT / "data" / "currencies.json", ROOT / "data" / "artifacts.json",
)


def compact(value: Any, limit: int = 40) -> list[dict[str, Any]]:
    """Keep useful world facts while preventing a huge prompt for every item."""
    if isinstance(value, list):
        records = value
    elif isinstance(value, dict):
        # Calendar files use holidays/seasons/months; other datasets commonly use
        # events/battles. A single object such as currentDate is useful as-is.
        records = next((value[key] for key in ("events", "battles", "holidays", "seasons", "months", "locations", "factions", "artifacts") if isinstance(value.get(key), list)), [value])
    else:
        records = []
    allowed = {"id", "name", "title", "description", "date", "day", "month", "year", "season", "status", "location", "factions", "outcome", "type", "icon", "currency", "value"}
    result = []
    for record in records[-limit:]:
        if isinstance(record, dict):
            result.append({key: item for key, item in record.items() if key.lower() in allowed})
        elif isinstance(record, str):
            result.append({"name": record})
    return result


def generate(extra_files: list[Path] | None = None) -> None:
    data: dict[str, Any] = {"generatedAt": datetime.now(timezone.utc).isoformat(), "sources": {}, "availableDataFiles": sorted(path.name for path in (ROOT / "data").glob("*.json"))}
    for path in (*CANDIDATES, *(extra_files or [])):
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


def generate_items(endpoint: str, model: str | None) -> None:
    """Ask LM Studio for a small, current-event item drop and make it shop-live."""
    context = OUTPUT.read_text(encoding="utf-8")
    prompt = '''Return JSON only: {"items":[...]}. Create exactly 3 original, modest D&D-inspired shop items inspired by the supplied world events/battles. Each item needs id, name, description, category (one of consumables/equipment/curiosities/services/faction/forbidden/premium), price (integer), icon, stock (integer 1-10), rarity (common/uncommon/rare/epic), effects (2-3 short strings), vendor (existing plausible id), shippedBy, levelRequirement (integer), effectDetails (matching effects: title/rules), and usage (activation/duration/endsWhen/charges). Do not repeat a prior item or make plot-breaking rewards.'''
    payload = {"messages": [{"role": "system", "content": prompt}, {"role": "user", "content": context[:8000]}], "temperature": .7}
    if model: payload["model"] = model
    request = urllib.request.Request(endpoint, data=json.dumps(payload).encode("utf-8"), headers={"Content-Type": "application/json"}, method="POST")
    with urllib.request.urlopen(request, timeout=180) as response:
        content = json.loads(response.read())["choices"][0]["message"]["content"]
    content = content.strip().removeprefix("```json").removesuffix("```").strip()
    items = json.loads(content)["items"]
    if not isinstance(items, list) or len(items) != 3: raise ValueError("LM Studio did not return exactly three items")
    mapping = {f"world_{item['id']}": item for item in items}
    target = ROOT / "shop-items" / "items_world_generated.js"
    body = "// Generated from current world context; do not hand-edit.\nimport { SHOP_CATEGORIES } from './categories.js';\n\nexport const ITEMS_WORLD_GENERATED = " + json.dumps(mapping, ensure_ascii=False, indent=2) + ";\n"
    temporary = target.with_suffix(".tmp"); temporary.write_text(body, encoding="utf-8"); temporary.replace(target)
    print(f"Generated {len(items)} new world-context shop items in {target}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--watch", action="store_true", help="Regenerate forever")
    parser.add_argument("--interval", type=int, default=600, help="Seconds between watch updates")
    parser.add_argument("--generate-items", action="store_true", help="Use LM Studio context to generate three live shop items each cycle")
    parser.add_argument("--endpoint", default="http://127.0.0.1:1234/v1/chat/completions")
    parser.add_argument("--model")
    parser.add_argument("--include", action="append", default=[], metavar="JSON_FILE", help="Additional JSON file to summarize; can be used more than once")
    args = parser.parse_args()
    extra_files = [Path(path).resolve() for path in args.include]
    while True:
        generate(extra_files)
        if args.generate_items:
            try: generate_items(args.endpoint, args.model)
            except Exception as error: print(f"World-item generation failed: {error}")
        if not args.watch: return
        time.sleep(max(args.interval, 10))

if __name__ == "__main__": main()
