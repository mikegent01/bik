#!/usr/bin/env python3
"""Enrich and rebalance Wario's split shop data with a local LM Studio model.

Double-click this file for a Tk GUI, or run it from Reputation-Matrix2:
  python tools/enrich_shop_items.py --gui
  python tools/enrich_shop_items.py --limit 20              # writes as it goes
  python tools/enrich_shop_items.py --review-only --limit 5 # JSON only; no source edits

The default is intentionally an in-place pass: every validated result is saved
into its JSON checkpoint AND written to its own items_###.js source chunk. This
makes overnight work crash-safe and means a completed item is live immediately.
"""
from __future__ import annotations

import argparse
import json
from concurrent.futures import FIRST_COMPLETED, ThreadPoolExecutor, wait
import os
import stat
import queue
import re
import subprocess
import sys
import threading
import time
import urllib.error
import urllib.request
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any, Callable

# Avoid Windows' cp1252 console default breaking when an item name has emoji.
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding="utf-8", errors="backslashreplace")
    except (AttributeError, OSError):
        pass

ROOT = Path(__file__).resolve().parents[1]
# The live React shop reads the split catalog under data/shop-items. The older
# root-level shop-items copy is legacy source data and is not the player-facing catalog.
ITEMS_DIR = ROOT / "data" / "shop-items"
WORK_DIR = ROOT / "tools" / ".shop-enrichment"
RESUME_PATH = WORK_DIR / "resume-state.json"
TEMPLATE_PATH = ROOT / "tools" / "shop-item-response-template.json"
DEFAULT_ENDPOINT = "http://127.0.0.1:1234/v1/chat/completions"

SYSTEM_PROMPT = """You are the meticulous rules editor for a whimsical D&D 5e-inspired item shop.
Return ONLY a JSON object. Do not add game-breaking power. Keep the item's existing name, physical
form, theme, category, rarity, vendor, and intended mechanics. This is an editorial pass, not an
excuse to replace an item with a generic fantasy trinket.

DESCRIPTION RULES: Begin from the actual item. Explicitly name the item or a distinctive word from its
title in the description, identify what it physically is, and use at least two concrete facts from its
input (material, origin/lore, vendor, existing effect, icon, or shipping flavor). A "Forgeheart Core"
must read like a forge-made core; a "Pauline's Microphone" must read like a microphone. Do not write
interchangeable phrases such as "a mysterious artifact", "a powerful item", or generic consumable
boilerplate.

RULES: Write clear, concise, table-ready 5e-inspired homebrew. Never use filler such as "use the item
exactly as its card states" or "ask the DM". Every rules entry must explain that particular effect and
specify a concrete activation, target/range, duration, what ends it, save DC when relevant, and
limits/rests when relevant. Never claim this is official D&D content.

Your JSON must have exactly:
- description: string, 2-4 flavorful sentences (roughly 90-180 words; make the item feel tangible and specific)
- effects: array of 2-4 short visible effect tags
- effectDetails: array matching effects in order, each object {"title": string, "rules": string}
- levelRequirement: whole non-negative integer, plus levelRequirementReason: string
- vendor: an existing vendor id from the input item, plus vendorReason: string
- shippedBy: a specific shipping/courier string, plus shippingDetail: string
- usage: object with activation, duration, endsWhen, and charges strings; explicitly say what stops/exhausts/destroys the item
- price: whole positive integer in gold-equivalent shop value
- priceReason: string, one short sentence explaining the fair-value adjustment

ECONOMY BALANCE: Never price a permanent income engine, infinite resource, free-all-shops effect,
corporate/national ownership transfer, unrestricted wish, or reality rewrite like ordinary gear.
Use at least a 100-year payback period for passive daily income and add a large control premium for
free commerce or ownership. Campaign-economy-breaking assets may cost billions or trillions and
must not be reduced merely to fit a normal item-price range.
"""


@dataclass
class Settings:
    endpoint: str = DEFAULT_ENDPOINT
    model: str | None = None
    limit: int = 0
    delay: float = 0.15
    timeout: int = 180
    concurrency: int = 1  # local server requests in flight; keep low for VRAM safety
    review_only: bool = False
    review_mode: str = "unchecked"  # all, unchecked, or stale
    stale_days: int = 30
    restart_review: bool = False  # ignore saved AI timestamps and truly re-check all
    chunk: str | None = None


def run_node_export(source: Path) -> list[dict[str, Any]]:
    """Read an ES module with Node; never try to parse JavaScript with regex."""
    code = f"""
const mod = await import({json.dumps(source.resolve().as_uri())});
const value = Object.values(mod).find(v => v && typeof v === 'object' && !Array.isArray(v));
console.log(JSON.stringify(Object.entries(value || {{}}).map(([sourceKey, item]) => ({{ ...item, _sourceKey: sourceKey }}))));
"""
    # Do not use text=True here. Windows defaults it to cp1252, but the shop data
    # and Node's JSON output are UTF-8 (emoji and some lore punctuation are common).
    result = subprocess.run(["node", "--input-type=module", "-e", code], cwd=ROOT,
                            capture_output=True, text=False)
    if result.returncode:
        message = result.stderr.decode("utf-8", errors="replace").strip()
        raise RuntimeError(f"Node could not read {source.name}: {message}")
    return json.loads(result.stdout.decode("utf-8"))


def load_shard(source: Path) -> tuple[Path, dict[str, Any]]:
    WORK_DIR.mkdir(parents=True, exist_ok=True)
    path = WORK_DIR / f"{source.stem}.json"
    if path.exists():
        try:
            shard = json.loads(path.read_text(encoding="utf-8"))
            expected_source = str(source.relative_to(ROOT))
            # The live catalog moved from the legacy root shop-items folder to
            # data/shop-items. Never apply a legacy checkpoint to the live data.
            if shard.get("source") != expected_source:
                path.replace(path.with_suffix(f".legacy-{int(time.time())}.json"))
                shard = {"source": expected_source, "items": run_node_export(source), "results": {}, "failures": {}}
                save_shard(path, shard)
                return path, shard
            if isinstance(shard.get("items"), list) and isinstance(shard.get("results"), dict):
                # Source may have been cleaned by the duplicate checker since the
                # checkpoint was made. Reload it so removed items cannot return.
                current_items = run_node_export(source)
                valid_keys = {item["_sourceKey"] for item in current_items}
                shard["items"] = current_items
                shard["results"] = {key: value for key, value in shard["results"].items() if key in valid_keys}
                shard.setdefault("failures", {})
                shard["failures"] = {key: value for key, value in shard["failures"].items() if key in valid_keys}
                save_shard(path, shard)
                return path, shard
        except (OSError, json.JSONDecodeError, ValueError):
            # Preserve bad evidence rather than silently discarding a night's work.
            path.replace(path.with_suffix(f".corrupt-{int(time.time())}.json"))
    shard = {"source": str(source.relative_to(ROOT)), "items": run_node_export(source), "results": {}, "failures": {}}
    save_shard(path, shard)
    return path, shard


def replace_with_retry(temporary: Path, target: Path, *, attempts: int = 12) -> None:
    """Replace target with retries/chmod for Windows editors, AV, and read-only files."""
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
        f"Could not replace {target} with {temporary}. Close any editor/browser/sync tool "
        f"holding the file and make sure it is not read-only. Last error: {last_error}"
    )


def save_shard(path: Path, shard: dict[str, Any]) -> None:
    temporary = path.with_suffix(".tmp")
    temporary.write_text(json.dumps(shard, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    replace_with_retry(temporary, path)  # atomic checkpoint on the local filesystem


def load_resume_state() -> dict[str, Any]:
    try:
        return json.loads(RESUME_PATH.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return {}


def save_resume_state(source: Path, item: dict[str, Any], completed: int) -> None:
    WORK_DIR.mkdir(parents=True, exist_ok=True)
    state = {"catalog": str(ITEMS_DIR.relative_to(ROOT)), "lastSource": str(source.relative_to(ROOT)),
             "lastItemId": item["id"], "lastItemName": item["name"], "completedThisRun": completed,
             "savedAt": datetime.now(timezone.utc).isoformat()}
    temporary = RESUME_PATH.with_suffix(".tmp")
    temporary.write_text(json.dumps(state, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    replace_with_retry(temporary, RESUME_PATH)


def context_for_item(context_path: Path, item: dict[str, Any]) -> str:
    """Give the model the relevant event/holiday/location excerpts, not a blind data dump."""
    if not context_path.exists():
        return ""
    try:
        context = json.loads(context_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return ""
    keywords = set(re.findall(r"[a-z]{4,}", f"{item.get('name', '')} {item.get('description', '')} {item.get('vendor', '')}".lower()))
    selected: dict[str, Any] = {"generatedAt": context.get("generatedAt"), "current": {}}
    for source_name, records in context.get("sources", {}).items():
        serialized = json.dumps(records, ensure_ascii=False).lower()
        # Date/holiday context is always useful; other data is included only when
        # it mentions the item, vendor, region, or faction vocabulary.
        if "calendar" in source_name.lower() or "currentdate" in source_name.lower() or any(word in serialized for word in keywords):
            selected["current"][source_name] = records
    return "\n\nRelevant world JSON context (use only when it fits this item):\n" + json.dumps(selected, ensure_ascii=False)[:7500]


def call_lm_studio(settings: Settings, item: dict[str, Any], feedback: str = "") -> dict[str, Any]:
    editable = {key: value for key, value in item.items() if key not in {"_sourceKey", "priceOriginal", "priceReviewedAt", "priceReason", "effectDetails"}}
    template = TEMPLATE_PATH.read_text(encoding="utf-8")
    context_path = WORK_DIR / "context" / "shop-world-context.json"
    world_context = context_for_item(context_path, item)
    payload: dict[str, Any] = {
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": "Improve and balance this item:\n" + json.dumps(editable, ensure_ascii=False)
             + "\n\nFill in this exact JSON template; return JSON only:\n" + template + world_context
             + ("\n\nRETRY FEEDBACK: The prior draft was rejected because " + feedback + ". Replace the failing section with concrete item-specific rules; return the complete corrected JSON object." if feedback else "")},
        ],
        "temperature": 0.55,
    }
    # Do not send OpenAI's response_format parameter. Several LM Studio server
    # versions reject it with HTTP 400 even when the loaded model can output JSON.
    if settings.model:
        payload["model"] = settings.model
    last_error: Exception | None = None
    # Local models occasionally omit a comma or fail to escape a quote. Ask for a
    # correction before giving up on the item, rather than stopping an overnight run.
    for attempt in range(3):
        if attempt:
            payload["messages"].append({"role": "user", "content": f"Your previous response was invalid JSON ({last_error}). Return the same answer again as strictly valid JSON only, with every string properly escaped."})
        request = urllib.request.Request(settings.endpoint, data=json.dumps(payload).encode("utf-8"),
                                         headers={"Content-Type": "application/json; charset=utf-8"}, method="POST")
        try:
            with urllib.request.urlopen(request, timeout=settings.timeout) as response:
                response_data = json.loads(response.read())
        except urllib.error.HTTPError as error:
            detail = error.read().decode("utf-8", errors="replace").strip()
            raise RuntimeError(f"LM Studio HTTP {error.code}: {detail or error.reason}") from error
        content = response_data["choices"][0]["message"]["content"]
        if not isinstance(content, str):
            last_error = ValueError("LM Studio returned a non-text response")
            continue
        content = re.sub(r"^```(?:json)?\s*|\s*```$", "", content.strip(), flags=re.IGNORECASE)
        try:
            return json.loads(content)
        except json.JSONDecodeError as error:
            last_error = error
    raise ValueError(f"LM Studio returned invalid JSON after 3 attempts: {last_error}")


def review_item_with_retries(settings: Settings, item: dict[str, Any]) -> tuple[dict[str, Any] | None, Exception | None]:
    """One isolated review job. Safe to run in a small thread pool."""
    last_error: Exception | None = None
    for _retry in range(1, 6):
        try:
            candidate = call_lm_studio(settings, item, str(last_error or ""))
            return validate(item, candidate), None
        except (ValueError, KeyError, json.JSONDecodeError, urllib.error.URLError, TimeoutError, RuntimeError) as error:
            last_error = error
    return None, last_error


def identity_terms(name: Any) -> set[str]:
    """Meaningful title words that keep an AI description tied to its real item."""
    ignored = {"the", "of", "and", "for", "with", "from", "a", "an", "to", "in", "on", "up", "item"}
    return {word.lower() for word in re.findall(r"[A-Za-z]{4,}", str(name)) if word.lower() not in ignored}


def validate(original: dict[str, Any], answer: dict[str, Any]) -> dict[str, Any]:
    required = {"description", "effects", "effectDetails", "levelRequirement", "levelRequirementReason", "vendor", "vendorReason", "shippedBy", "shippingDetail", "usage", "price", "priceReason"}
    if set(answer) != required:
        raise ValueError(f"Expected exactly {sorted(required)}; got {sorted(answer)}")
    if not isinstance(answer["description"], str) or not answer["description"].strip():
        raise ValueError("description must be a non-empty string")
    word_count = len(re.findall(r"\b\w+\b", answer["description"]))
    if word_count < 70:
        raise ValueError("description is too short; write 2-4 specific flavorful sentences (at least 70 words)")
    if len(answer["description"]) > 1200:
        raise ValueError("description is too long")
    title_terms = identity_terms(original.get("name"))
    description_words = set(re.findall(r"[a-z]{4,}", answer["description"].lower()))
    if title_terms and not title_terms.intersection(description_words):
        raise ValueError(f"description must reference the actual item ({original.get('name')})")
    if any(phrase in answer["description"].lower() for phrase in ("mysterious artifact", "powerful item", "ancient relic of unknown")):
        raise ValueError("description is generic instead of item-specific")
    if not isinstance(answer["effects"], list) or not 2 <= len(answer["effects"]) <= 4:
        raise ValueError("effects must contain 2-4 entries")
    if not isinstance(answer["effectDetails"], list) or len(answer["effectDetails"]) != len(answer["effects"]):
        raise ValueError("effectDetails must match effects")
    if not isinstance(answer["levelRequirement"], int) or isinstance(answer["levelRequirement"], bool) or answer["levelRequirement"] < 0:
        raise ValueError("levelRequirement must be a whole non-negative number")
    for key in ("levelRequirementReason", "vendor", "vendorReason", "shippedBy", "shippingDetail"):
        if not isinstance(answer[key], str) or not answer[key].strip():
            raise ValueError(f"{key} must be non-empty")
    if not isinstance(answer["usage"], dict) or set(answer["usage"]) != {"activation", "duration", "endsWhen", "charges"} or not all(isinstance(value, str) and value.strip() for value in answer["usage"].values()):
        raise ValueError("usage needs activation, duration, endsWhen, and charges")
    if not isinstance(answer["price"], int) or isinstance(answer["price"], bool) or not 25 <= answer["price"] <= 9_000_000_000_000_000:
        raise ValueError("price must be a positive whole gold-equivalent amount within JavaScript's safe integer range")
    if not isinstance(answer["priceReason"], str) or not answer["priceReason"].strip():
        raise ValueError("priceReason must be non-empty")
    if not all(isinstance(effect, str) and effect.strip() and len(effect) <= 160 for effect in answer["effects"]):
        raise ValueError("each effect must be a short non-empty string")
    for detail in answer["effectDetails"]:
        if not isinstance(detail, dict) or set(detail) != {"title", "rules"} or not all(isinstance(value, str) and value.strip() for value in detail.values()):
            raise ValueError("each effect detail needs non-empty title and rules")
        rules = detail["rules"].lower()
        if len(detail["rules"]) < 90 or any(phrase in rules for phrase in ("use the item exactly", "ask the dm", "as the card states")):
            raise ValueError(f"effect rules for '{detail['title']}' are too generic; replace that section with item-specific table-ready details")
    reviewed_at = datetime.now(timezone.utc).isoformat()
    return {**original, **answer, "priceOriginal": original.get("priceOriginal", original.get("price")),
            "priceReviewedAt": reviewed_at, "aiReviewedAt": reviewed_at, "aiReviewVersion": 1}


def needs_review(item: dict[str, Any], settings: Settings) -> bool:
    """Decide whether this item is eligible without deleting its review history."""
    reviewed = item.get("aiReviewedAt")
    # "all" means cover the whole catalog once. A successful item records its
    # timestamp immediately, so stopping tonight resumes tomorrow at the next
    # unchecked record instead of beginning from items_001 again.
    if settings.review_mode == "all":
        return settings.restart_review or not reviewed
    if settings.review_mode == "unchecked":
        return not reviewed
    if not reviewed:
        return True
    try:
        reviewed_date = datetime.fromisoformat(str(reviewed).replace("Z", "+00:00"))
        if reviewed_date.tzinfo is None:
            reviewed_date = reviewed_date.replace(tzinfo=timezone.utc)
        return datetime.now(timezone.utc) - reviewed_date >= timedelta(days=settings.stale_days)
    except ValueError:
        return True  # an invalid legacy timestamp should be reviewed rather than trusted


def update_live_details_catalog(item: dict[str, Any]) -> None:
    """Expose reviewed rules to the separately bundled shop.html enhancement."""
    path = ROOT / "data" / "shop-effect-details.json"
    try:
        catalog = json.loads(path.read_text(encoding="utf-8")) if path.exists() else {}
    except json.JSONDecodeError:
        catalog = {}
    record = {key: item.get(key) for key in ("id", "name", "effects", "effectDetails", "usage", "aiReviewedAt")}
    catalog[item["id"]] = record
    catalog[f"name:{item['name'].strip().lower()}"] = record
    temporary = path.with_suffix(".tmp")
    temporary.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    replace_with_retry(temporary, path)


def write_chunk(source: Path, items: list[dict[str, Any]]) -> None:
    export = re.search(r"export const (ITEMS_\d+)\s*=", source.read_text(encoding="utf-8"))
    if not export:
        raise ValueError(f"Cannot find item export in {source}")
    # _sourceKey prevents duplicate item IDs from overwriting one another.
    mapping = {
        item.get("_sourceKey", item.get("id", f"item_{index}")): {key: value for key, value in item.items() if key != "_sourceKey"}
        for index, item in enumerate(items)
    }
    content = ("// Shop items enriched by tools/enrich_shop_items.py\n"
               "import { SHOP_CATEGORIES } from './categories.js';\n\n"
               f"export const {export.group(1)} = " + json.dumps(mapping, ensure_ascii=False, indent=2) + ";\n")
    temporary = source.with_suffix(".tmp")
    temporary.write_text(content, encoding="utf-8")
    replace_with_retry(temporary, source)


def process(settings: Settings, notify: Callable[[str, dict[str, Any] | None], None], stop: threading.Event | None = None) -> int:
    sources = [ITEMS_DIR / settings.chunk] if settings.chunk else sorted(ITEMS_DIR.glob("items_[0-9][0-9][0-9].js"))
    resume = load_resume_state()
    if resume.get("catalog") == str(ITEMS_DIR.relative_to(ROOT)) and not settings.restart_review:
        notify(f"Resuming after {resume.get('lastSource', 'the last saved chunk')}: {resume.get('lastItemName', 'last saved item')}. Reviewed items are skipped.", None)
    if not sources:
        raise FileNotFoundError("No split items_###.js files found")
    # Clean exact-name/ID/near-description duplicates before the AI spends a
    # request on them. load_shard() reloads source afterwards, preventing stale
    # checkpoint records from reintroducing a removed item.
    validator = ROOT / "tools" / "validate_shop_data.py"
    if validator.exists() and not settings.review_only:
        precheck = subprocess.run([sys.executable, str(validator), "--remove-worse"], cwd=ROOT, capture_output=True, text=True, encoding="utf-8", errors="replace")
        notify("Pre-review duplicate check: " + (precheck.stdout.strip() or "completed"), None)
    notify(f"Scanning {len(sources)} split item files ({sources[0].name} through {sources[-1].name}); review mode: {settings.review_mode}.", None)
    completed = 0
    for source_number, source in enumerate(sources, start=1):
        if not source.exists():
            raise FileNotFoundError(f"No such shop chunk: {source}")
        notify(f"Opening chunk {source_number}/{len(sources)}: {source.name}", None)
        shard_path, shard = load_shard(source)
        # A prior review-only run can be made live simply by resuming normally.
        if not settings.review_only and shard["results"]:
            write_chunk(source, [shard["results"].get(record.get("_sourceKey", record["id"]), record) for record in shard["items"]])
        changed_in_chunk = False
        pending = []
        for item in shard["items"]:
            result_key = item.get("_sourceKey", item["id"])
            current_item = shard["results"].get(result_key, item)
            if needs_review(current_item, settings):
                pending.append((result_key, current_item))
        # Keep a rolling queue full: as soon as one model request finishes, submit
        # the next item instead of waiting for the other three in the old batch.
        iterator = iter(pending)
        with ThreadPoolExecutor(max_workers=max(1, settings.concurrency)) as pool:
            futures = {}
            def submit_next() -> bool:
                if settings.limit and completed + len(futures) >= settings.limit:
                    return False
                try:
                    result_key, current_item = next(iterator)
                except StopIteration:
                    return False
                notify(f"[queued] {source.name}: {current_item['name']}", None)
                futures[pool.submit(review_item_with_retries, settings, current_item)] = (result_key, current_item)
                return True
            for _ in range(max(1, settings.concurrency)):
                if not submit_next(): break
            while futures:
                if stop and stop.is_set():
                    notify("Stop requested; waiting only for active requests to finish.", None)
                done, _ = wait(futures, return_when=FIRST_COMPLETED)
                for future in done:
                    result_key, current_item = futures.pop(future)
                    try:
                        enriched, error = future.result()
                    except Exception as error:
                        enriched = None
                    if enriched is None:
                        shard["failures"][result_key] = {"at": datetime.now(timezone.utc).isoformat(), "error": str(error), "attempts": 5}
                        save_shard(shard_path, shard)
                        notify(f"ERROR on {current_item['name']}: failed after 5 targeted retries; continuing.", None)
                    else:
                        shard["failures"].pop(result_key, None)
                        shard["results"][result_key] = enriched
                        save_shard(shard_path, shard)
                        if not settings.review_only: update_live_details_catalog(enriched)
                        completed += 1
                        save_resume_state(source, enriched, completed)
                        changed_in_chunk = True
                        notify("Saved checkpoint" + (" and source data." if not settings.review_only else " (review-only; source unchanged)."), {"item": current_item, "updated": enriched})
                        if not settings.review_only:
                            updated_items = [shard["results"].get(record.get("_sourceKey", record["id"]), record) for record in shard["items"]]
                            write_chunk(source, updated_items)
                    if not (stop and stop.is_set()): submit_next()
                if settings.delay: time.sleep(settings.delay)
        if stop and stop.is_set():
            notify("Stopped after active requests completed; checkpoints were retained.", None)
            return completed
        if changed_in_chunk and not settings.review_only:
            notify(f"Finished and wrote {source.name}", None)
    # Always leave a machine-readable integrity/duplicate report after a completed pass.
    validator = ROOT / "tools" / "validate_shop_data.py"
    if validator.exists():
        validation = subprocess.run([sys.executable, str(validator), "--remove-worse"], cwd=ROOT, capture_output=True, text=True, encoding="utf-8", errors="replace")
        notify("Post-review duplicate check: " + (validation.stdout.strip() or "completed"), None)
        if validation.stderr.strip(): notify("Validator: " + validation.stderr.strip(), None)
    notify("Done. All requested items were checkpointed." + (" Source files were updated." if not settings.review_only else " Review JSON shards before writing."), None)
    return completed


def cli() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--gui", action="store_true", help="Open the desktop control panel")
    parser.add_argument("--endpoint", default=os.getenv("LM_STUDIO_URL", DEFAULT_ENDPOINT))
    parser.add_argument("--model", default=os.getenv("LM_STUDIO_MODEL"))
    parser.add_argument("--limit", type=int, default=0, help="Maximum unfinished items (0 = all)")
    parser.add_argument("--delay", type=float, default=.15)
    parser.add_argument("--concurrency", type=int, default=2, help="LM Studio requests in flight (use 1 for safest mode, 2 recommended)")
    parser.add_argument("--timeout", type=int, default=180)
    parser.add_argument("--review-only", action="store_true", help="Save JSON checkpoints but do not overwrite source modules")
    parser.add_argument("--review-mode", choices=("all", "unchecked", "stale"), default="unchecked", help="all items, never-reviewed items, or reviews older than --stale-days")
    parser.add_argument("--stale-days", type=int, default=30, help="Age threshold used by --review-mode stale")
    parser.add_argument("--restart-review", action="store_true", help="Ignore saved timestamps and deliberately review everything again")
    parser.add_argument("--chunk", help="One chunk, such as items_052.js")
    args = parser.parse_args()
    if args.gui:
        launch_gui()
        return 0
    settings = Settings(**{key: value for key, value in vars(args).items() if key != "gui"})
    return 0 if process(settings, lambda text, _: print(text, flush=True)) >= 0 else 1


class ShopEnrichmentApp:
    def __init__(self) -> None:
        import tkinter as tk
        from tkinter import ttk
        self.tk, self.ttk = tk, ttk
        self.root = tk.Tk()
        self.root.title("Wario Shop — LM Studio Enrichment")
        self.root.minsize(900, 650)
        self.events: queue.Queue[tuple[str, dict[str, Any] | None]] = queue.Queue()
        self.worker: threading.Thread | None = None
        self.stop = threading.Event()
        self.records: dict[str, dict[str, Any]] = {}
        self.endpoint = tk.StringVar(value=os.getenv("LM_STUDIO_URL", DEFAULT_ENDPOINT))
        self.model = tk.StringVar(value=os.getenv("LM_STUDIO_MODEL", ""))
        self.limit = tk.StringVar(value="0")
        self.delay = tk.StringVar(value="0.15")
        self.concurrency = tk.StringVar(value="2")
        self.chunk = tk.StringVar(value="")
        self.review_mode = tk.StringVar(value="unchecked")
        self.stale_days = tk.StringVar(value="30")
        self.review_only = tk.BooleanVar(value=False)
        self.status = tk.StringVar(value="Ready. Default mode writes each validated item directly to its source chunk.")
        self.build()
        self.root.after(100, self.poll)

    def build(self) -> None:
        ttk, tk = self.ttk, self.tk
        form = ttk.LabelFrame(self.root, text="LM Studio connection and run settings", padding=10)
        form.pack(fill="x", padx=12, pady=10)
        fields = [("Endpoint", self.endpoint), ("Model (optional)", self.model), ("Limit (0 = all)", self.limit), ("Delay seconds", self.delay), ("Only chunk (optional)", self.chunk)]
        for row, (label, variable) in enumerate(fields):
            ttk.Label(form, text=label).grid(row=row // 2, column=(row % 2) * 2, sticky="w", padx=(0, 6), pady=3)
            ttk.Entry(form, textvariable=variable, width=48 if row < 2 else 20).grid(row=row // 2, column=(row % 2) * 2 + 1, sticky="ew", padx=(0, 14), pady=3)
        ttk.Label(form, text="Parallel requests (1-2)").grid(row=3, column=0, sticky="w", padx=(0, 6), pady=(7, 3))
        ttk.Entry(form, textvariable=self.concurrency, width=10).grid(row=3, column=1, sticky="w", pady=(7, 3))
        ttk.Label(form, text="Review mode").grid(row=4, column=0, sticky="w", padx=(0, 6), pady=(7, 3))
        ttk.Combobox(form, textvariable=self.review_mode, values=("unchecked", "stale", "all"), state="readonly", width=18).grid(row=4, column=1, sticky="w", pady=(7, 3))
        ttk.Label(form, text="Stale after days").grid(row=4, column=2, sticky="w", padx=(0, 6), pady=(7, 3))
        ttk.Entry(form, textvariable=self.stale_days, width=10).grid(row=4, column=3, sticky="w", pady=(7, 3))
        ttk.Checkbutton(form, text="Review-only (keep results in JSON; do not overwrite item modules)", variable=self.review_only).grid(row=5, column=0, columnspan=4, sticky="w", pady=(7, 0))
        actions = ttk.Frame(self.root)
        actions.pack(fill="x", padx=12)
        self.start_button = ttk.Button(actions, text="Start / Resume Enrichment", command=self.start)
        self.start_button.pack(side="left")
        ttk.Button(actions, text="Stop after current request", command=self.stop.set).pack(side="left", padx=8)
        ttk.Label(actions, textvariable=self.status, wraplength=650).pack(side="left", padx=10)
        summary = ttk.LabelFrame(self.root, text="Modified price and description summary (this session)", padding=8)
        summary.pack(fill="both", expand=True, padx=12, pady=10)
        self.tree = ttk.Treeview(summary, columns=("name", "price", "description"), show="headings", height=12)
        for column, heading, width in (("name", "Item", 210), ("price", "XP price change", 145), ("description", "New description", 480)):
            self.tree.heading(column, text=heading); self.tree.column(column, width=width, anchor="w")
        self.tree.pack(fill="both", expand=True)
        self.tree.bind("<<TreeviewSelect>>", self.show_selected)
        self.details = tk.Text(self.root, height=10, wrap="word", state="disabled")
        self.details.pack(fill="x", padx=12, pady=(0, 12))

    def start(self) -> None:
        try:
            settings = Settings(endpoint=self.endpoint.get().strip(), model=self.model.get().strip() or None,
                                limit=int(self.limit.get() or 0), delay=float(self.delay.get() or 0), concurrency=int(self.concurrency.get() or 1),
                                review_only=self.review_only.get(), review_mode=self.review_mode.get(),
                                stale_days=int(self.stale_days.get() or 0), chunk=self.chunk.get().strip() or None)
            if settings.limit < 0 or settings.delay < 0 or settings.stale_days < 0 or not 1 <= settings.concurrency <= 4: raise ValueError
        except ValueError:
            self.status.set("Limit and delay must be zero or positive numbers.")
            return
        if self.worker and self.worker.is_alive():
            self.status.set("A run is already active.")
            return
        self.stop.clear(); self.start_button.configure(state="disabled")
        self.worker = threading.Thread(target=lambda: self.run_worker(settings), daemon=True)
        self.worker.start()

    def run_worker(self, settings: Settings) -> None:
        try:
            process(settings, lambda text, change: self.events.put((text, change)), self.stop)
        except Exception as error:  # GUI must surface unexpected filesystem/Node errors too.
            self.events.put((f"FATAL ERROR: {error}", None))
        finally:
            self.events.put(("__FINISHED__", None))

    def poll(self) -> None:
        try:
            while True:
                text, change = self.events.get_nowait()
                if text == "__FINISHED__":
                    self.start_button.configure(state="normal")
                    continue
                self.status.set(text)
                if change: self.add_change(change)
        except queue.Empty:
            pass
        self.root.after(100, self.poll)

    def add_change(self, change: dict[str, Any]) -> None:
        old, new = change["item"], change["updated"]
        key = f"{new.get('_sourceKey', new['id'])}-{len(self.records)}"
        self.records[key] = change
        price = f"{old.get('price', 0):,} → {new['price']:,} XP"
        description = new["description"].replace("\n", " ")[:180]
        self.tree.insert("", "end", iid=key, values=(new["name"], price, description))

    def show_selected(self, _: Any) -> None:
        selected = self.tree.selection()
        if not selected: return
        old, new = self.records[selected[0]]["item"], self.records[selected[0]]["updated"]
        text = (f"{new['name']}\n\nPRICE: {old.get('price', 0):,} XP → {new['price']:,} XP\n"
                f"WHY: {new['priceReason']}\n\nOLD DESCRIPTION:\n{old.get('description', '')}\n\nNEW DESCRIPTION:\n{new['description']}\n\n"
                + "\n\n".join(f"⚡ {detail['title']}\n{detail['rules']}" for detail in new["effectDetails"]))
        self.details.configure(state="normal"); self.details.delete("1.0", "end"); self.details.insert("1.0", text); self.details.configure(state="disabled")

    def run(self) -> None:
        self.root.mainloop()


def launch_gui() -> None:
    try:
        ShopEnrichmentApp().run()
    except ImportError as error:
        raise SystemExit(f"Tkinter is required for --gui: {error}")


if __name__ == "__main__":
    raise SystemExit(cli())
