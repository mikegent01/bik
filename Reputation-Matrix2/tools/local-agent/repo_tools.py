#!/usr/bin/env python3
"""Small, bounded repository helpers used after an explicit tool decision."""
from __future__ import annotations

import json
import os
import re
from pathlib import Path
from typing import Any

PROJECT = Path(__file__).resolve().parents[2]
ROOT = PROJECT.parent
MAX_READ = 12000
TEXT_SUFFIXES = {".json", ".js", ".ts", ".tsx", ".py", ".md", ".html", ".css", ".txt"}
SKIP_DIRS = {".git", "node_modules", "__pycache__", ".local-agent-runs", "dist", "build", "coverage", "intake-inputs"}


def safe_path(value: str) -> Path:
    candidate = Path(value)
    path = candidate.resolve() if candidate.is_absolute() else (ROOT / candidate).resolve()
    try:
        path.relative_to(ROOT)
    except ValueError as error:
        raise ValueError("path is outside the checkout") from error
    return path


def read_file(value: str, limit: int = MAX_READ) -> str:
    path = safe_path(value)
    if not path.is_file():
        raise ValueError(f"not a file: {value}")
    if path.stat().st_size > 2_000_000:
        raise ValueError("file is larger than the bounded read limit; use a focused search")
    return path.read_text(encoding="utf-8", errors="replace")[:max(1, min(int(limit), MAX_READ))]


def _parse_year(value: str | int | None) -> tuple[int, str] | None:
    match = re.search(r"\b(\d{3,4})\s*(BF|AF)?\b", str(value or ""), re.I)
    return (int(match.group(1)), (match.group(2) or "").upper()) if match else None


def record_available_at(record: dict[str, Any], target_year: str | int | None) -> bool:
    target = _parse_year(target_year)
    if not target:
        return True
    years = [(int(year), era.upper()) for year, era in re.findall(r"\b(\d{3,4})\s*(BF|AF)\b", " ".join(str(record.get(k, "")) for k in ("date", "era")), re.I)]
    if not years:
        return True
    target_number, target_era = target
    for number, era in years:
        if target_era and era != target_era:
            continue
        if era == "BF" and number < target_number:
            return False
        if era == "AF" and number > target_number:
            return False
    return True


def _catalog_files() -> list[Path]:
    return [PROJECT / "data" / name for name in ("characters.json", "events.json", "locations.json")]


def _catalog_search(term: str, limit: int, target_year: str | int | None) -> list[dict[str, str]]:
    needle = term.casefold()
    results: list[dict[str, str]] = []
    for path in _catalog_files():
        try:
            value = json.loads(path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            continue
        if not isinstance(value, list):
            continue
        for record in value:
            if not isinstance(record, dict) or not record.get("id"):
                continue
            if path.name == "events.json" and not record_available_at(record, target_year):
                continue
            haystack = " ".join(str(record.get(key, "")) for key in ("id", "name", "title", "summary", "location"))
            if needle not in haystack.casefold():
                continue
            results.append({
                "path": path.relative_to(ROOT).as_posix(),
                "line": "catalog",
                "preview": " — ".join(str(record.get(key, "")) for key in ("id", "name", "title") if record.get(key))[:500],
                "entity_id": str(record["id"]),
            })
            if len(results) >= limit:
                return results
    return results


def search(term: str, relative_dir: str = ".", limit: int = 20,
           target_year: str | int | None = None) -> list[dict[str, str]]:
    """Search one bounded directory, with canonical metadata handled first."""
    term = str(term or "").strip()
    if len(term) < 2:
        raise ValueError("search term must contain at least two characters")
    limit = max(1, min(int(limit), 20))
    base = safe_path(relative_dir)
    if base in {ROOT, PROJECT, PROJECT / "data"}:
        catalog = _catalog_search(term, limit, target_year)
        if catalog:
            return catalog
    results: list[dict[str, str]] = []
    needle = term.casefold()
    scanned = 0
    for root, dirs, files in os.walk(base):
        dirs[:] = [name for name in dirs if name not in SKIP_DIRS]
        for filename in files:
            if len(results) >= limit or scanned >= 2500:
                break
            path = Path(root) / filename
            scanned += 1
            if needle in filename.casefold():
                results.append({"path": path.relative_to(ROOT).as_posix(), "line": "filename", "preview": filename})
                continue
            if path.suffix.casefold() not in TEXT_SUFFIXES:
                continue
            try:
                if path.stat().st_size > 1_000_000:
                    continue
                for line_number, line in enumerate(path.read_text(encoding="utf-8", errors="replace").splitlines(), 1):
                    if needle in line.casefold():
                        results.append({"path": path.relative_to(ROOT).as_posix(), "line": str(line_number), "preview": line.strip()[:500]})
                        break
            except OSError:
                continue
    return results[:limit]


def catalog_retrieve(source: str = "", ids: list[str] | None = None,
                     terms: list[str] | None = None, limit: int = 6,
                     target_year: str | int | None = None) -> list[dict[str, Any]]:
    """Return focused records for callers that already resolved an entity."""
    names = {"characters": "characters.json", "events": "events.json", "locations": "locations.json"}
    filename = names.get(str(source).casefold(), str(source))
    path = safe_path(f"Reputation-Matrix2/data/{filename}") if not str(filename).startswith("Reputation-Matrix2/") else safe_path(str(filename))
    value = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(value, list):
        return []
    wanted_ids = {str(item) for item in (ids or [])}
    wanted_terms = [str(item).casefold() for item in (terms or []) if str(item).strip()]
    records = []
    for item in value:
        if not isinstance(item, dict) or (wanted_ids and str(item.get("id")) not in wanted_ids):
            continue
        if filename == "events.json" and not record_available_at(item, target_year):
            continue
        if wanted_terms and not any(term in json.dumps(item, ensure_ascii=False).casefold() for term in wanted_terms):
            continue
        records.append(item)
        if len(records) >= max(1, min(int(limit), 10)):
            break
    return records


def find_image_references(entities: list[str] | None = None, terms: list[str] | None = None,
                           limit: int = 6, target_year: str | int | None = None) -> list[dict[str, str]]:
    """Find existing image paths only; this never generates or changes an image."""
    needles = [str(item).casefold() for item in (entities or []) + (terms or []) if str(item).strip()]
    if not needles:
        return []
    matches: list[dict[str, str]] = []
    for root, dirs, files in os.walk(PROJECT / "assets"):
        dirs[:] = [name for name in dirs if name not in SKIP_DIRS]
        for filename in files:
            if Path(filename).suffix.casefold() not in {".png", ".jpg", ".jpeg", ".webp", ".gif"}:
                continue
            path = Path(root) / filename
            haystack = path.as_posix().casefold()
            if any(needle in haystack for needle in needles):
                matches.append({"path": path.relative_to(ROOT).as_posix(), "name": path.stem, "confidence": "high"})
                if len(matches) >= max(1, min(int(limit), 10)):
                    return matches
    return matches
