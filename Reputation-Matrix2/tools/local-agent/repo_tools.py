#!/usr/bin/env python3
"""Small, bounded repository helpers used after an explicit tool decision."""
from __future__ import annotations

import json
import os
import re
import subprocess
import sys
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


_CATALOG_FILES = (
    "characters.json", "events.json", "locations.json", "factions.json",
    "nations.json", "races.json", "props.json",
)


def _catalog_files() -> list[Path]:
    return [PROJECT / "data" / name for name in _CATALOG_FILES]


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
    names = {name.removesuffix(".json"): name for name in _CATALOG_FILES}
    filename = names.get(str(source).casefold().removesuffix(".json"), str(source))
    if not filename.endswith(".json"):
        filename = filename + ".json"
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


# Any top-level data/*.json that already exists and holds a list of id-keyed
# records is a writable collection. The archive lives in git; an explicit
# request writes directly, and the list requirement is what keeps dict-shaped
# bookkeeping files (mainPage.json, currentDate.json, ...) out of scope.
COLLECTION_NOUNS: tuple[tuple[str, str], ...] = (
    (r"\braces?\b|\bspecies\b|\bfolk\b", "races.json"),
    (r"\bfactions?\b", "factions.json"),
    (r"\bnations?\b|\bcountr(?:y|ies)\b|\bpolit(?:y|ies)\b", "nations.json"),
    (r"\blocations?\b|\bplaces\b|\blandmarks?\b", "locations.json"),
    (r"\bbooks?\b|\bcodices\b|\bcodexes\b|\bpamphlets?\b|\bmanuscripts?\b", "books.json"),
    (r"\bcurrenc(?:y|ies)\b", "currencies.json"),
    (r"\bartifacts?\b|\brelics?\b", "artifacts.json"),
    (r"\bquests?\b", "quests.json"),
    (r"\btrials?\b", "trials.json"),
    (r"\binjur(?:y|ies)\b", "injuries.json"),
    (r"\bcultures?\b", "cultures.json"),
    (r"\bwhat-?ifs?\b", "whatifs.json"),
    (r"\bprops?\b|\bexhibits?\b", "props.json"),
    (r"\bcommentaries?\b", "commentaries.json"),
)


def _writable_collection(target: Path) -> bool:
    """A writable collection is an existing top-level JSON list under data/."""
    try:
        data_dir = (PROJECT / "data").resolve()
        resolved = target.resolve()
    except OSError:
        return False
    if resolved.parent != data_dir or resolved.suffix != ".json" or not resolved.is_file():
        return False
    try:
        value = json.loads(resolved.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return False
    return isinstance(value, list)


def collection_for_noun(text: str) -> tuple[str, str] | None:
    """Map a collection noun in the request ('a Noki race') to its data file."""
    lowered = str(text).casefold()
    for pattern, filename in COLLECTION_NOUNS:
        match = re.search(pattern, lowered)
        if match:
            return filename, match.group(0)
    return None


def collection_overview(path: str, sample_count: int = 2) -> dict[str, Any]:
    """Describe a collection so a record can be drafted in its own format.

    Returns the record count, the union of record keys, and the first complete
    records as format samples. The samples are what teach the model the file's
    schema and voice; nothing else in the runtime knows the shape of races.json.
    """
    target = safe_path(path)
    if not target.is_file():
        raise ValueError(f"{target.name} does not exist in the checkout")
    data = json.loads(target.read_text(encoding="utf-8"))
    if not isinstance(data, list) or not data:
        raise ValueError(f"{target.name} is not a populated JSON list")
    keys: list[str] = []
    for item in data:
        if isinstance(item, dict):
            for key in item:
                if key not in keys:
                    keys.append(key)
    samples = []
    for item in data[:max(1, min(int(sample_count), 5))]:
        if isinstance(item, dict):
            samples.append(json.loads(json.dumps(item, ensure_ascii=False)))
    return {
        "path": target.relative_to(ROOT).as_posix(),
        "count": len(data),
        "record_keys": keys,
        "samples": samples,
    }


def find_records(path: str, term: str, limit: int = 3) -> list[dict[str, Any]]:
    """Records in a collection whose id/name/title mention the term."""
    if not str(term).strip():
        return []
    target = safe_path(path)
    data = json.loads(target.read_text(encoding="utf-8"))
    needle = str(term).casefold().strip()
    matches = []
    for item in data if isinstance(data, list) else []:
        if not isinstance(item, dict):
            continue
        haystack = " ".join(str(item.get(key, "")) for key in ("id", "name", "title")).casefold()
        if needle in haystack:
            matches.append(item)
            if len(matches) >= max(1, min(int(limit), 10)):
                break
    return matches


def add_json_object(path: str, value: dict[str, Any], collection: str = "") -> str:
    """Append one uniquely identified object to a JSON list after approval."""
    target = safe_path(path)
    if not isinstance(value, dict) or not value.get("id"):
        raise ValueError("the object must be a dictionary with an id")
    if not _writable_collection(target):
        raise ValueError("writes are limited to existing JSON list collections under Reputation-Matrix2/data/")
    try:
        data = json.loads(target.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        raise ValueError(f"could not read JSON collection: {error}") from error
    if not isinstance(data, list):
        raise ValueError("target JSON collection must be a list")
    identifier = str(value["id"])
    if any(isinstance(item, dict) and str(item.get("id")) == identifier for item in data):
        raise ValueError(f"an object with id {identifier!r} already exists")
    data.append(value)
    target.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return f"added {identifier} to {target.relative_to(ROOT).as_posix()} ({len(data)} records)"


def upsert_json_object(path: str, value: dict[str, Any], collection: str = "") -> str:
    """Add one object to a JSON list, replacing any existing object with its id.

    The archive lives in git, so an explicit request writes directly and the
    replacement (not an error) is the correct behaviour for re-runs.
    """
    target = safe_path(path)
    if not isinstance(value, dict) or not value.get("id"):
        raise ValueError("the object must be a dictionary with an id")
    if not _writable_collection(target):
        raise ValueError("writes are limited to existing JSON list collections under Reputation-Matrix2/data/")
    try:
        data = json.loads(target.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        raise ValueError(f"could not read JSON collection: {error}") from error
    if not isinstance(data, list):
        raise ValueError("target JSON collection must be a list")
    identifier = str(value["id"])
    replaced = False
    for index, item in enumerate(data):
        if isinstance(item, dict) and str(item.get("id")) == identifier:
            data[index] = value
            replaced = True
            break
    if not replaced:
        data.append(value)
    target.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    action = "updated" if replaced else "added"
    return f"{action} {identifier} in {target.relative_to(ROOT).as_posix()} ({len(data)} records)"


GENERATOR_SCRIPT = "tools/generate_all.py"
_INVENTORY_CACHE: dict[str, Any] = {"at": 0.0, "value": None}


def generator_inventory(refresh: bool = False) -> list[dict[str, Any]]:
    """List the archive's generatable systems and their live pending counts."""
    import time as _time
    now = _time.time()
    cached = _INVENTORY_CACHE["value"]
    if not refresh and cached and now - _INVENTORY_CACHE["at"] < 60.0:
        return cached
    tools_dir = PROJECT / "tools"
    if str(tools_dir) not in sys.path:
        sys.path.insert(0, str(tools_dir))
    try:
        from genkit.systems import all_systems  # noqa: E402
    except Exception as error:
        raise ValueError(f"the generator registry is unavailable: {error}") from error
    systems = [
        {"id": str(system.id), "title": str(system.title), "summary": str(system.summary),
         "pending": int(system.count_pending()), "enabled": bool(system.enabled)}
        for system in all_systems()
    ]
    _INVENTORY_CACHE["at"] = now
    _INVENTORY_CACHE["value"] = systems
    return systems


def run_generator(system: str = "", limit: int = 2, dry_run: bool = False,
                  timeout: int = 300, endpoint: str = "") -> dict[str, Any]:
    """Run the archive's generator for one system. Bounded, no shell."""
    command = [sys.executable, GENERATOR_SCRIPT]
    if system:
        if not re.fullmatch(r"[a-z0-9][a-z0-9-]*", system):
            raise ValueError(f"unknown generator system {system!r}")
        command += ["--only", system]
    command += ["--limit", str(max(1, min(int(limit), 25)))]
    if dry_run:
        command.append("--dry-run")
    environment = dict(os.environ)
    if endpoint:
        environment["LM_STUDIO_URL"] = endpoint
    try:
        result = subprocess.run(
            command, cwd=str(PROJECT), capture_output=True, text=True,
            timeout=max(10, min(int(timeout), 900)), env=environment,
        )
        return {
            "command": " ".join(command),
            "returncode": result.returncode,
            "output": ((result.stdout or "") + (("\n[stderr]\n" + result.stderr) if result.stderr else ""))[:8000],
        }
    except subprocess.TimeoutExpired as error:
        return {
            "command": " ".join(command),
            "returncode": -1,
            "output": f"the generator did not finish within {int(timeout)} seconds; partial output: {str(error.output)[:2000]}",
        }


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
