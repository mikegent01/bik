#!/usr/bin/env python3
"""Safe, bounded repository tools for the local agent.

No shell commands are exposed to the model. Writes require an exact one-match
patch inside the checkout and are followed by a separate validation step.
"""
from __future__ import annotations

import argparse
import difflib
import json
import os
import re
import subprocess
from pathlib import Path

PROJECT = Path(__file__).resolve().parents[2]  # Reputation-Matrix2
ROOT = PROJECT.parent                      # checkout root
MAX_READ = 12000
TEXT_SUFFIXES = {".json", ".js", ".ts", ".tsx", ".py", ".md", ".html", ".css", ".txt"}


def safe_path(value: str) -> Path:
    path = (ROOT / value).resolve() if not Path(value).is_absolute() else Path(value).resolve()
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
        raise ValueError("file is larger than the bounded read limit; use search or a focused path")
    return path.read_text(encoding="utf-8", errors="replace")[:max(1, min(limit, MAX_READ))]


def _fuzzy_line_score(term: str, line: str) -> float:
    """Score approximate whole-word matches while tolerating small typos."""
    query_tokens = re.findall(r"[a-z0-9]+", term.casefold())
    line_tokens = re.findall(r"[a-z0-9]+", line.casefold())
    if not query_tokens or not line_tokens:
        return 0.0
    scores = []
    for query_token in query_tokens:
        best = max(difflib.SequenceMatcher(None, query_token, token).ratio()
                   for token in line_tokens if token)
        # Very short words create false positives (for example, "in"), so only
        # accept them when they are exact. Longer words can absorb one typo.
        if len(query_token) <= 3 and best < 1.0:
            return 0.0
        if best < 0.72:
            return 0.0
        scores.append(best)
    return sum(scores) / len(scores)


def _catalog_matches(term: str, limit: int) -> list[tuple[float, dict[str, str]]]:
    """Search canonical metadata even when its JSON file is too large to line-scan."""
    matches = []
    for filename in ("characters.json", "events.json", "locations.json"):
        path = PROJECT / "data" / filename
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            continue
        for item in data if isinstance(data, list) else []:
            if not isinstance(item, dict):
                continue
            fields = [str(item.get(key, "")) for key in ("id", "name", "title", "location")]
            joined = " ".join(fields)
            score = 1.0 if term.casefold() in joined.casefold() else _fuzzy_line_score(term, joined)
            if score >= 0.78:
                matches.append((score, {
                    "path": path.relative_to(ROOT).as_posix(), "line": "catalog",
                    "preview": " — ".join(fields[:3])[:500], "match": "fuzzy" if score < 1 else "catalog",
                    "score": f"{score:.2f}", "entity_id": str(item.get("id", "")),
                }))
    matches.sort(key=lambda item: item[0], reverse=True)
    return matches[:limit]


def search(term: str, relative_dir: str = ".", limit: int = 40) -> list[dict[str, str]]:
    """Return exact matches, or bounded fuzzy matches when exact search is empty."""
    term = term.strip()
    if not term:
        raise ValueError("search term is required")
    base = safe_path(relative_dir)
    needle = term.casefold()
    try:
        is_project_search = base == ROOT or base == PROJECT or base == PROJECT / "data"
    except (ValueError, OSError):
        is_project_search = False
    catalog = _catalog_matches(term, limit) if is_project_search else []
    if any(item[1].get("match") == "fuzzy" for item in catalog):
        return [item[1] for item in catalog]
    results: list[dict[str, str]] = []
    fuzzy: list[tuple[float, dict[str, str]]] = []
    scanned = 0
    for root, dirs, filenames in os.walk(base):
        dirs[:] = [name for name in dirs if name not in {
            ".git", "node_modules", ".venv", "__pycache__", ".local-agent-runs",
            ".pytest_cache", "dist", "build", "coverage", "intake-inputs",
            "actors", "Foundry", "animation_frames", "textures", "timeline", "node_modules",
        }]
        for filename in filenames:
            if len(results) >= limit or scanned >= 8000:
                break
            path = Path(root) / filename
            filename_result = {"path": path.relative_to(ROOT).as_posix(), "line": "filename", "preview": filename}
            if needle in filename.casefold():
                results.append(filename_result)
                if len(results) >= limit:
                    break
            if path.suffix.lower() not in TEXT_SUFFIXES:
                continue
            try:
                if path.stat().st_size > 2_000_000:
                    continue
                scanned += 1
                lines = path.read_text(encoding="utf-8", errors="ignore").splitlines()
            except OSError:
                continue
            for line_no, line in enumerate(lines, 1):
                result = {
                    "path": path.relative_to(ROOT).as_posix(),
                    "line": str(line_no),
                    "preview": line.strip()[:500],
                }
                if needle in line.casefold():
                    results.append(result)
                    if len(results) >= limit:
                        break
        if len(results) >= limit or scanned >= 8000:
            break
    if results:
        # A fuzzy canonical entity is more useful than an incidental mention
        # of the misspelled query in documentation or generated UI text.
        if any(item[1].get("match") == "fuzzy" for item in catalog):
            return [item[1] for item in catalog]
        return results
    if catalog:
        return [item[1] for item in catalog]
    # A second, deliberately smaller pass makes approximate searches useful
    # without applying expensive edit-distance matching to generated actors.
    fuzzy_bases = []
    if base == ROOT:
        fuzzy_bases = [ROOT / name for name in ("Reputation-Matrix2/data", "Reputation-Matrix2/events", "Reputation-Matrix2/books", "Reputation-Matrix2/posts", "docs", "assets")]
    else:
        fuzzy_bases = [base]
    for fuzzy_base in fuzzy_bases:
        if not fuzzy_base.is_dir():
            continue
        for root, dirs, filenames in os.walk(fuzzy_base):
            dirs[:] = [name for name in dirs if name not in {".git", "node_modules", ".venv", "__pycache__", "dist", "build"}]
            for filename in filenames:
                if len(fuzzy) >= max(limit * 4, 20):
                    break
                path = Path(root) / filename
                name_score = _fuzzy_line_score(term, filename)
                if name_score >= 0.78:
                    fuzzy.append((name_score, {"path": path.relative_to(ROOT).as_posix(), "line": "filename", "preview": filename}))
                if path.suffix.lower() not in TEXT_SUFFIXES:
                    continue
                try:
                    if path.stat().st_size > 2_000_000:
                        continue
                    lines = path.read_text(encoding="utf-8", errors="ignore").splitlines()
                except OSError:
                    continue
                for line_no, line in enumerate(lines, 1):
                    score = _fuzzy_line_score(term, line)
                    if score >= 0.78:
                        fuzzy.append((score, {"path": path.relative_to(ROOT).as_posix(), "line": str(line_no),
                                              "preview": line.strip()[:500]}))
            if len(fuzzy) >= max(limit * 4, 20):
                break
    fuzzy.sort(key=lambda item: item[0], reverse=True)
    return [dict(item[1], match="fuzzy", score=f"{item[0]:.2f}") for item in fuzzy[:limit]]


def catalog_retrieve(source: str = "", ids: list[str] | None = None,
                     terms: list[str] | None = None, limit: int = 6) -> list[dict[str, object]]:
    """Return focused canonical records after a search resolved an entity."""
    source_map = {"character": "characters.json", "characters": "characters.json",
                  "event": "events.json", "events": "events.json",
                  "location": "locations.json", "locations": "locations.json"}
    filenames = [source_map[source.casefold()]] if source.casefold() in source_map else ["characters.json", "events.json", "locations.json"]
    wanted_ids = {str(value).strip() for value in (ids or []) if str(value).strip()}
    wanted_terms = [str(value).strip() for value in (terms or []) if str(value).strip()]
    records: list[tuple[float, dict[str, object]]] = []
    for filename in filenames:
        path = PROJECT / "data" / filename
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            continue
        for item in data if isinstance(data, list) else []:
            if not isinstance(item, dict) or not item.get("id"):
                continue
            identifier = str(item["id"])
            fields = [str(item.get(key, "")) for key in ("id", "name", "title", "location")]
            if identifier in wanted_ids:
                score = 1.0
            elif wanted_terms:
                score = max(_fuzzy_line_score(term, " ".join(fields)) for term in wanted_terms)
                if score < 0.78:
                    continue
            else:
                continue
            selected = {key: item[key] for key in ("id", "name", "title", "date", "era", "location", "status", "summary", "description", "image") if key in item}
            selected["source"] = path.relative_to(ROOT).as_posix()
            if isinstance(selected.get("description"), str):
                selected["description"] = selected["description"][:7000]
            if isinstance(selected.get("summary"), str):
                selected["summary"] = selected["summary"][:2500]
            records.append((score, selected))
    records.sort(key=lambda item: item[0], reverse=True)
    return [dict(record, confidence="high" if score >= 0.98 else "candidate", score=f"{score:.2f}")
            for score, record in records[:max(1, min(limit, 10))]]


def find_image_references(entities: list[str] | None = None, terms: list[str] | None = None,
                          limit: int = 6) -> list[dict[str, str]]:
    """Resolve local art and return close candidates instead of guessing silently."""
    queries = [str(value).strip() for value in (entities or []) + (terms or []) if str(value).strip()][:30]
    if not queries:
        return []
    records = []
    for filename in ("characters.json", "events.json", "locations.json"):
        path = PROJECT / "data" / filename
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            continue
        for item in data if isinstance(data, list) else []:
            if isinstance(item, dict) and item.get("image"):
                records.append((filename, item))
    resolved: list[dict[str, str]] = []
    seen: set[str] = set()
    for query in queries:
        q = re.sub(r"[^a-z0-9]+", " ", query.casefold()).strip()
        ranked = []
        for filename, item in records:
            fields = [str(item.get(key, "")) for key in ("id", "name", "title", "location")]
            normalized = re.sub(r"[^a-z0-9]+", " ", " ".join(fields).casefold()).strip()
            score = 1.0 if q and any(q in re.sub(r"[^a-z0-9]+", " ", field.casefold()) for field in fields) else _fuzzy_line_score(q, normalized)
            if score >= (0.45 if len(q) > 5 else 0.7):
                ranked.append((score, filename, item))
        ranked.sort(key=lambda item: item[0], reverse=True)
        for score, filename, item in ranked[:3]:
            image = str(item["image"])
            candidates = [PROJECT / image, ROOT / image, ROOT / "Reputation-Matrix2" / image]
            actual = next((candidate.resolve() for candidate in candidates if candidate.is_file()), None)
            if not actual or str(actual) in seen:
                continue
            seen.add(str(actual))
            resolved.append({"query": query, "source": filename, "id": str(item.get("id", "")),
                             "name": str(item.get("name", item.get("title", ""))),
                             "path": actual.relative_to(ROOT).as_posix(), "score": f"{score:.2f}",
                             "confidence": "high" if score >= 0.98 or score - (ranked[1][0] if len(ranked) > 1 else 0) >= 0.15 else "candidate"})
            if len(resolved) >= limit:
                break
        if len(resolved) >= limit:
            break
    return resolved


def patch(value: str, old: str, new: str) -> None:
    path = safe_path(value)
    text = path.read_text(encoding="utf-8")
    if not old or len(old) > 20000:
        raise ValueError("patch text must be non-empty and at most 20,000 characters")
    count = text.count(old)
    if count != 1:
        raise ValueError(f"patch requires exactly one match; found {count}")
    path.write_text(text.replace(old, new, 1), encoding="utf-8")


def git_read(*args: str) -> str:
    result = subprocess.run(["git", *args], cwd=ROOT, text=True, capture_output=True, timeout=15, check=False)
    if result.returncode:
        raise RuntimeError(result.stderr.strip() or f"git exited {result.returncode}")
    return result.stdout[:MAX_READ]


def status() -> str:
    return git_read("status", "--short")


def diff(paths: list[str] | None = None) -> str:
    """Return a bounded diff, validating every optional path first."""
    safe_paths = []
    for value in (paths or [])[:20]:
        path = safe_path(value)
        safe_paths.append(path.relative_to(ROOT).as_posix())
    if safe_paths:
        return git_read("diff", "--", *safe_paths)
    return git_read("diff", "--stat", "--")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)
    rd = sub.add_parser("read"); rd.add_argument("path"); rd.add_argument("--limit", type=int, default=MAX_READ)
    sr = sub.add_parser("search"); sr.add_argument("term"); sr.add_argument("--dir", default="."); sr.add_argument("--limit", type=int, default=40)
    pt = sub.add_parser("patch"); pt.add_argument("path"); pt.add_argument("--old", required=True); pt.add_argument("--new", required=True)
    st = sub.add_parser("status")
    df = sub.add_parser("diff"); df.add_argument("paths", nargs="*")
    args = parser.parse_args()
    if args.command == "read": print(read_file(args.path, args.limit), end="")
    elif args.command == "search": print(__import__("json").dumps(search(args.term, args.dir, args.limit), indent=2))
    elif args.command == "patch": patch(args.path, args.old, args.new); print(f"patched {args.path}")
    elif args.command == "status": print(status(), end="")
    elif args.command == "diff": print(diff(args.paths), end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
