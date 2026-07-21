#!/usr/bin/env python3
"""Enrich Wario's shop with a local LM Studio model, safely and resumably.

The shop source is deliberately split into items_###.js modules.  This tool uses
Node to read those ES modules, saves one JSON work shard per source module, and
asks an OpenAI-compatible LM Studio server to improve one item at a time.  Each
accepted response is written back to its original JS module, so shop-data.js
continues to import the exact same files.

Run from Reputation-Matrix2:
  python tools/enrich_shop_items.py --dry-run --limit 3
  python tools/enrich_shop_items.py --limit 25
  python tools/enrich_shop_items.py --apply

Start LM Studio's local server first (default: http://127.0.0.1:1234/v1).
Work shards/checkpoints are intentionally ignored by git and make an overnight
run resumable. Review with --apply only after checking the generated shards.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
ITEMS_DIR = ROOT / "shop-items"
WORK_DIR = ROOT / "tools" / ".shop-enrichment"
DEFAULT_ENDPOINT = "http://127.0.0.1:1234/v1/chat/completions"

SYSTEM_PROMPT = """You are the meticulous rules editor for a whimsical D&D 5e-inspired item shop.
Return ONLY a JSON object. Do not add game-breaking power. Keep the item's existing theme, category,
rarity, vendor, and intended mechanics. Write clear, original, concise player-facing text. 5e-style
rules must use plain language and specify action, duration, range/area, save DC when relevant, and
limits/rests when relevant. Never claim this is official D&D content.

Your JSON must have exactly:
- description: string, 1-3 flavorful sentences
- effects: array of 2-4 short visible effect tags
- effectDetails: array matching effects in order, each object {"title": string, "rules": string}
- price: whole positive integer in XP
- priceReason: string, one short sentence explaining the fair-value adjustment
"""


def run_node_export(source: Path) -> list[dict[str, Any]]:
    """Import a chunk as an ES module instead of trying to parse JavaScript in Python."""
    module_url = source.resolve().as_uri()
    code = f"""
const mod = await import({json.dumps(module_url)});
const value = Object.values(mod).find(v => v && typeof v === 'object' && !Array.isArray(v));
console.log(JSON.stringify(Object.entries(value || {{}}).map(([sourceKey, item]) => ({{ ...item, _sourceKey: sourceKey }}))));
"""
    result = subprocess.run(["node", "--input-type=module", "-e", code], cwd=ROOT,
                            capture_output=True, text=True, check=True)
    return json.loads(result.stdout)


def call_lm_studio(endpoint: str, model: str | None, item: dict[str, Any], timeout: int) -> dict[str, Any]:
    payload = {
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": "Improve and balance this item:\n" + json.dumps(item, ensure_ascii=False)},
        ],
        "temperature": 0.55,
        "response_format": {"type": "json_object"},
    }
    if model:
        payload["model"] = model
    request = urllib.request.Request(endpoint, data=json.dumps(payload).encode(),
                                     headers={"Content-Type": "application/json"}, method="POST")
    with urllib.request.urlopen(request, timeout=timeout) as response:
        data = json.loads(response.read())
    content = data["choices"][0]["message"]["content"]
    if isinstance(content, str):
        return json.loads(content.removeprefix("```json").removesuffix("```").strip())
    return content


def validate(original: dict[str, Any], answer: dict[str, Any]) -> dict[str, Any]:
    required = {"description", "effects", "effectDetails", "price", "priceReason"}
    if set(answer) != required:
        raise ValueError(f"Expected exactly {sorted(required)}; got {sorted(answer)}")
    if not isinstance(answer["description"], str) or not answer["description"].strip():
        raise ValueError("description must be a non-empty string")
    if not isinstance(answer["effects"], list) or not 2 <= len(answer["effects"]) <= 4:
        raise ValueError("effects must contain 2-4 entries")
    if not isinstance(answer["effectDetails"], list) or len(answer["effectDetails"]) != len(answer["effects"]):
        raise ValueError("effectDetails must match effects")
    if not isinstance(answer["price"], int) or not 25 <= answer["price"] <= 10_000_000:
        raise ValueError("price must be a reasonable whole XP amount")
    if not all(isinstance(effect, str) and effect.strip() for effect in answer["effects"]):
        raise ValueError("every effect must be a non-empty string")
    for detail in answer["effectDetails"]:
        if not isinstance(detail, dict) or set(detail) != {"title", "rules"}:
            raise ValueError("each effect detail needs exactly title and rules")
    # Preserve identity and all fields the model was not invited to alter.
    return {**original, **answer, "priceOriginal": original.get("price"), "priceReviewedAt": datetime.now(timezone.utc).isoformat()}


def js(value: Any) -> str:
    """JSON is valid JavaScript for this data shape; preserve readable modules."""
    return json.dumps(value, ensure_ascii=False, indent=2) + ";\n"


def write_chunk(source: Path, items: list[dict[str, Any]]) -> None:
    export = re.search(r"export const (ITEMS_\d+)\s*=", source.read_text(encoding="utf-8"))
    if not export:
        raise ValueError(f"Cannot find item export in {source}")
    mapping = {
        item.get("_sourceKey", item.get("id", f"item_{index}")): {key: value for key, value in item.items() if key != "_sourceKey"}
        for index, item in enumerate(items)
    }
    # categories.js is still the shared source of category constants.
    source.write_text(
        f"// Shop items enriched by tools/enrich_shop_items.py\n"
        f"import {{ SHOP_CATEGORIES }} from './categories.js';\n\n"
        f"export const {export.group(1)} = " + js(mapping), encoding="utf-8"
    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--endpoint", default=os.getenv("LM_STUDIO_URL", DEFAULT_ENDPOINT))
    parser.add_argument("--model", default=os.getenv("LM_STUDIO_MODEL"))
    parser.add_argument("--limit", type=int, default=0, help="Maximum unfinished items (0 = all)")
    parser.add_argument("--delay", type=float, default=0.15, help="Seconds between requests")
    parser.add_argument("--timeout", type=int, default=180)
    parser.add_argument("--dry-run", action="store_true", help="Create/review JSON shards without changing JS")
    parser.add_argument("--apply", action="store_true", help="Apply already-generated JSON shard results to JS")
    parser.add_argument("--chunk", help="Only process a chunk, e.g. items_052.js")
    args = parser.parse_args()
    if args.dry_run and args.apply:
        parser.error("--dry-run and --apply cannot be used together")

    WORK_DIR.mkdir(parents=True, exist_ok=True)
    sources = [ITEMS_DIR / args.chunk] if args.chunk else sorted(ITEMS_DIR.glob("items_[0-9][0-9][0-9].js"))
    completed = 0
    for source in sources:
        if not source.exists():
            parser.error(f"No such shop chunk: {source}")
        shard_path = WORK_DIR / f"{source.stem}.json"
        shard: dict[str, Any]
        if shard_path.exists():
            shard = json.loads(shard_path.read_text(encoding="utf-8"))
        else:
            shard = {"source": str(source.relative_to(ROOT)), "items": run_node_export(source), "results": {}}
            shard_path.write_text(json.dumps(shard, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

        if args.apply:
            updated = [shard["results"].get(item.get("_sourceKey", item["id"]), item) for item in shard["items"]]
            if not shard["results"]:
                print(f"skip {source.name}: no generated results")
            else:
                write_chunk(source, updated)
                print(f"applied {len(shard['results'])} items to {source.name}")
            continue

        for item in shard["items"]:
            result_key = item.get("_sourceKey", item["id"])
            if result_key in shard["results"]:
                continue
            if args.limit and completed >= args.limit:
                print(f"limit reached; resume with the same command")
                return 0
            print(f"[{completed + 1}] {source.name}: {item['name']}", flush=True)
            if args.dry_run:
                completed += 1
                continue
            try:
                enriched = validate(item, call_lm_studio(args.endpoint, args.model, item, args.timeout))
            except (ValueError, KeyError, urllib.error.URLError, TimeoutError) as error:
                print(f"  ERROR: {error}", file=sys.stderr)
                return 2
            shard["results"][result_key] = enriched
            shard_path.write_text(json.dumps(shard, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            completed += 1
            time.sleep(args.delay)
    print("Done. Inspect tools/.shop-enrichment JSON shards, then run with --apply.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
