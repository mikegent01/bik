"""Loaders for every data source the hub touches.

JSON files are read directly. The shop catalog lives in ES modules under
data/shop-items, so it is exported through Node exactly once and cached on disk
(the full catalog is ~7,700 items and re-importing 90 modules for every request
would make the GUI feel broken).
"""
from __future__ import annotations

import json
import os
import subprocess
import time
from pathlib import Path
from typing import Any

from . import paths

_memory: dict[str, tuple[float, Any]] = {}
CATALOG_CACHE = paths.CACHE_DIR / "shop-catalog.json"


# --------------------------------------------------------------------------- #
# plain JSON
# --------------------------------------------------------------------------- #
def load_json(path: Path, default: Any = None) -> Any:
    """Read a JSON file, caching on mtime so repeated GUI calls stay cheap."""
    path = Path(path)
    if not path.exists():
        return default
    key = str(path)
    stamp = path.stat().st_mtime
    hit = _memory.get(key)
    if hit and hit[0] == stamp:
        return hit[1]
    try:
        value = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return default
    _memory[key] = (stamp, value)
    return value


def write_json(path: Path, value: Any) -> Path:
    """Atomic pretty-printed write; used for every artifact the hub produces."""
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temporary.replace(path)
    return path


# --------------------------------------------------------------------------- #
# shop catalog (ES modules via Node)
# --------------------------------------------------------------------------- #
_EXPORT_SCRIPT = """
import { readdirSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

// items_night_special.js references STOCK_TYPES without importing it in the live
// catalog. Rather than fail the whole export, resolve unknown bare identifiers
// to their lowercased key so the 192 night items still load.
globalThis.STOCK_TYPES = new Proxy({}, { get: (_t, key) => String(key).toLowerCase() });

async function readDir(dir, tag) {
  const out = { items: {}, vendors: {}, failed: [], files: 0 };
  if (!dir || !existsSync(dir)) return out;
  const files = readdirSync(dir).filter(f => /^items_.*\\.js$/.test(f)).sort();
  out.files = files.length;
  for (const file of files) {
    try {
      const mod = await import(pathToFileURL(dir + '/' + file).href);
      const value = Object.values(mod).find(v => v && typeof v === 'object' && !Array.isArray(v));
      for (const [sourceKey, item] of Object.entries(value || {})) {
        if (item && typeof item === 'object') out.items[sourceKey] = { ...item, _sourceKey: sourceKey, _sourceFile: file, _catalog: tag };
      }
    } catch (error) { out.failed.push({ file, catalog: tag, error: String(error).slice(0, 300) }); }
  }
  try {
    const mod = await import(pathToFileURL(dir + '/vendors.js').href);
    out.vendors = Object.values(mod).find(v => v && typeof v === 'object') || {};
  } catch (error) { /* vendors are optional per catalog */ }
  return out;
}

const live = await readDir(process.env.HUB_ITEMS_DIR, 'live');
const legacy = await readDir(process.env.HUB_LEGACY_ITEMS_DIR, 'legacy');
// Live records win; legacy only fills gaps for items referenced by old receipts.
const items = { ...legacy.items, ...live.items };
const vendors = { ...legacy.vendors, ...live.vendors };
process.stdout.write(JSON.stringify({
  items, vendors,
  failed: [...live.failed, ...legacy.failed],
  files: live.files + legacy.files,
}));
"""


def export_shop_catalog(force: bool = False) -> dict[str, Any]:
    """Return {items, vendors, failed} for the split shop catalog.

    Uses a disk cache keyed on the newest mtime in data/shop-items so an edit to
    any chunk invalidates it automatically.
    """
    source_dir = paths.SHOP_ITEMS_DIR
    legacy_dir = paths.LEGACY_SHOP_ITEMS_DIR
    sources = [*source_dir.glob("*.js"), *legacy_dir.glob("*.js")]
    newest = max((path.stat().st_mtime for path in sources), default=0.0)
    if not force:
        cached = load_json(CATALOG_CACHE)
        if isinstance(cached, dict) and cached.get("_stamp") == newest:
            return cached
    paths.ensure_out_dirs()
    result = subprocess.run(
        ["node", "--input-type=module", "-e", _EXPORT_SCRIPT],
        cwd=paths.ROOT, capture_output=True, text=False,
        env={**os.environ, "HUB_ITEMS_DIR": str(source_dir), "HUB_LEGACY_ITEMS_DIR": str(legacy_dir)},
    )
    if result.returncode:
        message = result.stderr.decode("utf-8", errors="replace").strip()
        raise RuntimeError(f"Node could not export the shop catalog: {message[:500]}")
    payload = json.loads(result.stdout.decode("utf-8"))
    payload["_stamp"] = newest
    payload["_generatedAt"] = time.time()
    write_json(CATALOG_CACHE, payload)
    _memory.pop(str(CATALOG_CACHE), None)
    return payload


def shop_items() -> dict[str, dict[str, Any]]:
    return export_shop_catalog().get("items", {})


def vendors() -> dict[str, dict[str, Any]]:
    return export_shop_catalog().get("vendors", {})


def item_by_id(item_id: str) -> dict[str, Any] | None:
    """Look an item up by its `id` field, then by raw source key.

    Source keys are sometimes stored with a stray leading space (' Pauline_mic'),
    so the fallback strips whitespace and compares case-insensitively.
    """
    items = shop_items()
    wanted = str(item_id or "").strip().lower()
    if not wanted:
        return None
    for item in items.values():
        if str(item.get("id", "")).strip().lower() == wanted:
            return item
    for key, item in items.items():
        if key.strip().lower() == wanted:
            return item
    return None


# --------------------------------------------------------------------------- #
# world data
# --------------------------------------------------------------------------- #
def purchases() -> list[dict[str, Any]]:
    value = load_json(paths.PURCHASES_PATH, [])
    return value if isinstance(value, list) else []


def wallets() -> dict[str, Any]:
    value = load_json(paths.WALLETS_PATH, {})
    return {k: v for k, v in value.items() if not k.startswith("_")} if isinstance(value, dict) else {}


def characters() -> list[dict[str, Any]]:
    value = load_json(paths.CHARACTERS_PATH, [])
    return value if isinstance(value, list) else []


def events() -> list[dict[str, Any]]:
    value = load_json(paths.EVENTS_PATH, [])
    return value if isinstance(value, list) else []


def factions() -> list[dict[str, Any]]:
    value = load_json(paths.FACTIONS_PATH, [])
    return value if isinstance(value, list) else []


def races() -> list[dict[str, Any]]:
    value = load_json(paths.RACES_PATH, [])
    return value if isinstance(value, list) else []


def locations() -> list[dict[str, Any]]:
    value = load_json(paths.LOCATIONS_PATH, [])
    return value if isinstance(value, list) else []


def find_character(identifier: str) -> dict[str, Any] | None:
    """Match a character by id, then by name, then by loose slug."""
    wanted = str(identifier or "").strip().lower()
    if not wanted:
        return None
    people = characters()
    for person in people:
        if str(person.get("id", "")).lower() == wanted:
            return person
    for person in people:
        if str(person.get("name", "")).lower() == wanted:
            return person
    slug = wanted.replace("_", " ").replace("-", " ")
    for person in people:
        if slug in str(person.get("name", "")).lower():
            return person
    return None


def find_event(identifier: str) -> dict[str, Any] | None:
    wanted = str(identifier or "").strip().lower()
    for event in events():
        if str(event.get("id", "")).lower() == wanted or str(event.get("name", "")).lower() == wanted:
            return event
    return None


def player_keys() -> list[str]:
    """Every player key the hub knows about, from wallets plus purchases."""
    keys = set(wallets())
    keys.update(str(row.get("playerKey")) for row in purchases() if row.get("playerKey"))
    return sorted(k for k in keys if k and k != "None")
