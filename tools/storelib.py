#!/usr/bin/env python3
"""Read/write the four filing stores as world/date shards.

Bundles (`data/events.json` etc.) stay for the static site — one fetch.
Shards under `data/stores/` are what agents edit.

World folders (two levels, not four):
  material/    Material Plane — Midlands, Mushroom Kingdom, "real world"
  feyward/     Feywild
  shadeward/   Shadowfell
  mirror/      Deep Mirror
  unsorted/    no plane, no date, or the classifier would be guessing

Events and battles: `stores/<kind>/<world>/<year>.json`, splitting a year
by month only when that year would exceed SHARD_BYTES. Characters and
locations have no calendar, so they are `stores/<kind>/<world>.json`
(and `-b`, `-c` if one world is still fat).
"""
from __future__ import annotations

import importlib.util
import json
import re
import string
from collections import defaultdict
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
STORES_DIR = DATA / "stores"
MANIFEST_PATH = STORES_DIR / "manifest.json"

KINDS = ("events", "characters", "locations", "battles")
WORLDS = ("material", "feyward", "shadeward", "mirror", "unsorted")
SHARD_BYTES = 250_000

PLANE_TO_WORLD = {
    "material": "material",
    "fey": "feyward",
    "feywild": "feyward",
    "shadow": "shadeward",
    "shadowfell": "shadeward",
    "mirror": "mirror",
}

MARKERS = {
    "shadeward": [
        "shadowfell", "shadow estate", "shadeward", "entropic",
        "mazebound", "onyx hand", "skittering grove", "scorncrow",
    ],
    "feyward": [
        "feywild", "feyward", "faerie", "faery", "fairy village",
        "dreaming tree", "satyr", "woodfellow", "overgrown manor",
        "overgrown library",
    ],
    "mirror": [
        "deep mirror", "mirror dimension", "fractured atrium",
        "planar sanctum", "corvinarus sanctum",
    ],
}

_clp_mod = None
_months: list[str] | None = None


def dumps(obj: Any) -> str:
    return json.dumps(obj, ensure_ascii=False, indent=2) + "\n"


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def bundle_path(kind: str) -> Path:
    return DATA / f"{kind}.json"


def rows_of(doc: Any, kind: str) -> list[dict]:
    if isinstance(doc, list):
        return [r for r in doc if isinstance(r, dict)]
    if isinstance(doc, dict):
        inner = doc.get(kind) or doc.get("items")
        if isinstance(inner, list):
            return [r for r in inner if isinstance(r, dict)]
    return []


def _clp():
    global _clp_mod
    if _clp_mod is None:
        p = ROOT / "tools" / "classify-location-planes.py"
        spec = importlib.util.spec_from_file_location("classify_location_planes", p)
        mod = importlib.util.module_from_spec(spec)
        assert spec.loader is not None
        spec.loader.exec_module(mod)
        _clp_mod = mod
    return _clp_mod


def month_names() -> list[str]:
    global _months
    if _months is None:
        raw = load_json(DATA / "calendarMonths.json")
        items = raw if isinstance(raw, list) else raw.get("months", [])
        names = []
        for m in items:
            n = m.get("name") if isinstance(m, dict) else m
            if n:
                names.append(str(n).lower())
        _months = names
    return _months


def year_of(record: dict) -> str:
    for k in ("timeCode", "date", "era"):
        s = str(record.get(k) or "")
        m = re.search(r"TC:(\d{3,4})", s)
        if m:
            return str(int(m.group(1)))
        m = re.search(r"(\d{3,4})\s*BF", s)
        if m:
            return str(int(m.group(1)))
    return "undated"


def month_of(record: dict) -> str:
    blob = " ".join(str(record.get(k) or "") for k in ("timeCode", "date", "era"))
    low = blob.lower()
    for name in month_names():
        if re.search(rf"\b{re.escape(name)}\b", low):
            return name
    m = re.search(r"TC:\d{3,4}-(\d{2})", str(record.get("timeCode") or ""))
    if m:
        idx = int(m.group(1)) - 1
        names = month_names()
        if 0 <= idx < len(names):
            return names[idx]
    return ""


def score_world(text: str) -> str:
    low = text.lower()
    hits: dict[str, int] = {}
    for world, words in MARKERS.items():
        n = sum(1 for w in words if w in low)
        if n:
            hits[world] = n
    if not hits:
        return "material"
    return max(hits, key=hits.get)


def world_from_plane(plane: Any) -> str:
    if not plane:
        return ""
    return PLANE_TO_WORLD.get(str(plane).strip().lower(), "")


def classify_world(kind: str, record: dict, loc_by_id: dict[str, dict],
                   loc_by_name: dict[str, str],
                   name_keys: list[tuple[str, str]]) -> str:
    if kind == "locations":
        w = world_from_plane(record.get("plane"))
        return w or "unsorted"

    if kind in ("events", "battles"):
        loc_field = record.get("location") or ""
        if isinstance(loc_field, dict):
            loc_field = loc_field.get("id") or loc_field.get("name") or ""
        lid = _clp().resolve_event_location(
            str(loc_field), set(loc_by_id), loc_by_name, name_keys)
        if lid and lid in loc_by_id:
            w = world_from_plane(loc_by_id[lid].get("plane"))
            if w:
                return w
        blob = " ".join(str(record.get(k) or "") for k in
                        ("id", "title", "name", "location", "summary", "era"))
        return score_world(blob)

    # characters
    blob = " ".join(str(record.get(k) or "") for k in
                    ("affiliation", "title", "summary", "name"))
    desc = str(record.get("description") or "")
    return score_world(blob + " " + desc[:800])


def loc_indexes(locations: list[dict]):
    by_id = {str(r["id"]): r for r in locations if r.get("id")}
    by_name = {}
    name_keys = []
    for r in locations:
        name = str(r.get("name") or "").strip()
        rid = str(r.get("id") or "")
        if name and rid:
            by_name[name.lower()] = rid
            name_keys.append((name.lower(), rid))
    name_keys.sort(key=lambda kv: -len(kv[0]))
    return by_id, by_name, name_keys


def _pack(groups: dict[str, list[dict]]) -> dict[str, list[dict]]:
    """Split any group whose JSON would exceed SHARD_BYTES into -b, -c…"""
    out: dict[str, list[dict]] = {}
    for key, recs in groups.items():
        blob = dumps(recs)
        if len(blob.encode()) <= SHARD_BYTES or len(recs) == 1:
            out[key] = recs
            continue
        chunk: list[dict] = []
        acc = 0
        part = 0
        suffix = string.ascii_lowercase
        for rec in recs:
            n = len(dumps(rec).encode())
            if chunk and acc + n > SHARD_BYTES:
                out[f"{key}-{suffix[part]}"] = chunk
                part += 1
                chunk, acc = [], 0
            chunk.append(rec)
            acc += n
        if chunk:
            label = f"{key}-{suffix[part]}" if part else key
            # if we split at least once, the last chunk also gets a letter
            if part:
                label = f"{key}-{suffix[part]}"
            out[label] = chunk
    return out


def assign_shard_keys(kind: str, records: list[dict],
                      loc_by_id, loc_by_name, name_keys) -> list[tuple[str, dict]]:
    """Return (relative shard key, record) in original order."""
    classified: list[tuple[str, str, str, dict]] = []
    world_size: dict[str, int] = defaultdict(int)
    year_size: dict[tuple[str, str], int] = defaultdict(int)
    for rec in records:
        world = classify_world(kind, rec, loc_by_id, loc_by_name, name_keys)
        n = len(dumps(rec).encode())
        world_size[world] += n
        if kind in ("events", "battles"):
            year = year_of(rec)
            month = month_of(rec)
            year_size[(world, year)] += n
            classified.append((world, year, month, rec))
        else:
            classified.append((world, "", "", rec))

    assigned: list[tuple[str, dict]] = []
    if kind in ("events", "battles"):
        for world, year, month, rec in classified:
            if world_size[world] <= SHARD_BYTES:
                key = f"{world}/all"
            elif year_size[(world, year)] > SHARD_BYTES and month:
                key = f"{world}/{year}-{month}"
            elif year_size[(world, year)] >= 80_000 and year != "undated":
                key = f"{world}/{year}"
            elif year == "undated":
                key = f"{world}/undated"
            else:
                key = f"{world}/other"
            assigned.append((key, rec))
    else:
        for world, _y, _m, rec in classified:
            assigned.append((world, rec))
    return assigned


def shard_relpath(kind: str, key: str) -> str:
    return f"{kind}/{key}.json"


def load_kind(kind: str) -> list[dict]:
    """Prefer shards via the manifest; fall back to the bundle."""
    if MANIFEST_PATH.exists():
        man = load_json(MANIFEST_PATH)
        spec = man.get(kind) or {}
        order = spec.get("order") or []
        mapping = spec.get("shards") or {}
        cache: dict[str, dict[str, dict]] = {}
        rows = []
        for rid in order:
            rel = mapping.get(rid)
            if not rel:
                continue
            if rel not in cache:
                path = STORES_DIR / rel
                recs = rows_of(load_json(path), kind) if path.exists() else []
                cache[rel] = {str(r.get("id")): r for r in recs}
            rec = cache[rel].get(rid)
            if rec is not None:
                rows.append(rec)
        if rows:
            return rows
    path = bundle_path(kind)
    if path.exists():
        return rows_of(load_json(path), kind)
    return []


def find_record(kind: str, rid: str) -> dict | None:
    rid_l = rid.lower()
    if MANIFEST_PATH.exists():
        man = load_json(MANIFEST_PATH)
        spec = man.get(kind) or {}
        mapping = spec.get("shards") or {}
        rel = mapping.get(rid) or next(
            (p for i, p in mapping.items() if i.lower() == rid_l), None)
        if rel:
            path = STORES_DIR / rel
            if path.exists():
                for r in rows_of(load_json(path), kind):
                    if str(r.get("id") or "").lower() == rid_l:
                        return r
    for r in load_kind(kind):
        if str(r.get("id") or "").lower() == rid_l:
            return r
    return None
