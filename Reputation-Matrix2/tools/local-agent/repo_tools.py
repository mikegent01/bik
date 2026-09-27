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


def parse_target_year(value: str | int | None) -> tuple[int, str] | None:
    """Parse a creation-room year such as ``1040 BF`` or ``1040``."""
    text = str(value or "").strip()
    match = re.search(r"\b(\d{3,4})\s*(BF|AF)?\b", text, re.I)
    if not match:
        return None
    return int(match.group(1)), (match.group(2) or "").upper()


def _record_years(record: dict[str, object]) -> tuple[list[int], str]:
    text = " ".join(str(record.get(key, "")) for key in ("date", "era"))
    matches = list(re.finditer(r"\b(\d{3,4})\s*(BF|AF)\b", text, re.I))
    if not matches:
        return [], ""
    eras = {match.group(2).upper() for match in matches}
    era = next(iter(eras)) if len(eras) == 1 else ""
    return [int(match.group(1)) for match in matches], era


def record_available_at(record: dict[str, object], target_year: str | int | None) -> bool:
    """Return false only when a dated record is confidently after the target.

    BF counts down toward the present, while AF counts up. Undated or mixed-era
    records remain available but are marked uncertain by callers rather than
    being incorrectly erased from the archive.
    """
    target = parse_target_year(target_year)
    if not target:
        return True
    target_number, target_era = target
    years, record_era = _record_years(record)
    if not years or not record_era or (target_era and record_era != target_era):
        return True
    if record_era == "BF":
        return min(years) >= target_number
    return max(years) <= target_number


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


def _token_similarity(left: str, right: str) -> float:
    if left == right:
        return 1.0
    if len(left) <= 3 or len(right) <= 3:
        return 0.0
    prefix = 0
    for a, b in zip(left, right):
        if a != b:
            break
        prefix += 1
    ratio = difflib.SequenceMatcher(None, left, right).ratio()
    # Similarity alone makes unrelated long words look like typos. Requiring
    # a shared stem keeps "blackin" -> "blackfen" while rejecting "pass"
    # matches in unrelated prose.
    return ratio if prefix / min(len(left), len(right)) >= 0.4 and ratio >= 0.72 else 0.0


def _fuzzy_line_score(term: str, line: str) -> float:
    """Score approximate whole-word matches while tolerating small typos."""
    query_tokens = re.findall(r"[a-z0-9]+", term.casefold())
    line_tokens = re.findall(r"[a-z0-9]+", line.casefold())
    if not query_tokens or not line_tokens:
        return 0.0
    scores = []
    for query_token in query_tokens:
        best = max(_token_similarity(query_token, token) for token in line_tokens if token)
        # Very short words create false positives (for example, "in"), so only
        # accept them when they are exact. Longer words can absorb one typo.
        if len(query_token) <= 3 and best < 1.0:
            return 0.0
        if best < 0.72:
            return 0.0
        scores.append(best)
    return sum(scores) / len(scores)


def _catalog_matches(term: str, limit: int, target_year: str | int | None = None) -> list[tuple[float, dict[str, str]]]:
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
            if filename == "events.json" and not record_available_at(item, target_year):
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


def search(term: str, relative_dir: str = ".", limit: int = 40,
           target_year: str | int | None = None) -> list[dict[str, str]]:
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
    catalog = _catalog_matches(term, limit, target_year) if is_project_search else []
    if any(item[1].get("match") == "fuzzy" for item in catalog):
        return [item[1] for item in catalog]
    results: list[dict[str, str]] = []
    fuzzy: list[tuple[float, dict[str, str]]] = []
    scanned = 0
    for root, dirs, filenames in os.walk(base):
        dirs[:] = [name for name in dirs if name not in {
            ".git", "node_modules", ".venv", "__pycache__", ".local-agent-runs",
            ".pytest_cache", "dist", "build", "coverage", "intake-inputs",
            "animation_frames", "textures", "timeline", "node_modules",
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
        fuzzy_bases = [ROOT / name for name in ("Reputation-Matrix2/data", "Reputation-Matrix2/events", "Reputation-Matrix2/books", "Reputation-Matrix2/posts", "Reputation-Matrix2/actors", "Reputation-Matrix2/Foundry", "docs", "assets")]
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
                query_tokens = re.findall(r"[a-z0-9]+", term.casefold())
                for line_no, line in enumerate(lines, 1):
                    folded = line.casefold()
                    if any(len(token) >= 4 and token[:3] not in folded for token in query_tokens):
                        continue
                    score = _fuzzy_line_score(term, line)
                    if score >= 0.78:
                        fuzzy.append((score, {"path": path.relative_to(ROOT).as_posix(), "line": str(line_no),
                                              "preview": line.strip()[:500]}))
            if len(fuzzy) >= max(limit * 4, 20):
                break
    fuzzy.sort(key=lambda item: item[0], reverse=True)
    return [dict(item[1], match="fuzzy", score=f"{item[0]:.2f}") for item in fuzzy[:limit]]


def recover_missing_reference(path_value: str, limit: int = 10) -> dict[str, object]:
    """Turn a missing guessed path into bounded repository candidates."""
    stem = Path(path_value).stem.replace("_", " ").replace("-", " ").strip()
    if not stem:
        return {"failed_path": path_value, "query": "", "candidates": [], "next": "ask for the missing reference"}
    catalog_candidates = [item[1] for item in _catalog_matches(stem, min(limit, 20))]
    candidates = [] if catalog_candidates else search(stem, ".", min(limit, 20))
    return {"failed_path": path_value, "query": stem,
            "candidates": candidates, "catalog_candidates": catalog_candidates,
            "next": "Use the returned entity_id with catalog_retrieve or find the actual source file; do not retry the missing path."}


def catalog_retrieve(source: str = "", ids: list[str] | None = None,
                     terms: list[str] | None = None, limit: int = 6,
                     target_year: str | int | None = None) -> list[dict[str, object]]:
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
            if filename == "events.json" and not record_available_at(item, target_year):
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
                          limit: int = 6, target_year: str | int | None = None) -> list[dict[str, str]]:
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
                if filename == "events.json" and not record_available_at(item, target_year):
                    continue
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


def analyze_event_seeds(target_year: str | int | None = None, limit: int = 20) -> dict[str, object]:
    """Find underdeveloped, unresolved, and roleplay-friendly event seeds."""
    path = PROJECT / "data" / "events.json"
    try:
        events = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        raise ValueError(f"events catalog unavailable: {error}") from error
    candidates = []
    for event in events if isinstance(events, list) else []:
        if not isinstance(event, dict) or not record_available_at(event, target_year):
            continue
        description = str(event.get("description", ""))
        summary = str(event.get("summary", ""))
        status = str(event.get("status", ""))
        lowered = status.casefold()
        reasons = []
        if len(description) < 1800:
            reasons.append("short event record")
        if len(summary) < 320:
            reasons.append("thin summary")
        if any(word in lowered for word in ("unresolved", "unverified", "active", "ongoing", "pending", "critical", "unknown")):
            reasons.append("open status")
        if not reasons:
            continue
        cleanup = []
        if len(summary) < 320:
            cleanup.append("expand_summary_without_adding_uncited_facts")
        if len(description) < 1800:
            cleanup.append("add_scene_beats_and_participant_goals")
        if any(word in lowered for word in ("unresolved", "unverified", "active", "ongoing", "pending")):
            cleanup.append("preserve_as_open_roleplay_hook")
        candidates.append({
            "id": str(event.get("id", "")), "name": str(event.get("name", event.get("title", ""))),
            "title": str(event.get("title", "")), "date": str(event.get("date", "")),
            "location": str(event.get("location", "")), "status": status,
            "description_chars": len(description), "summary_chars": len(summary),
            "roleplay_candidate": True, "reasons": reasons, "cleanup_actions": cleanup,
            "source": "Reputation-Matrix2/data/events.json",
        })
    candidates.sort(key=lambda item: (-(len(item["reasons"])), item["description_chars"]))
    return {"target_year": str(target_year or ""), "count": len(candidates), "candidates": candidates[:max(1, min(limit, 50))]}


def build_plot(ids: list[str] | None = None, terms: list[str] | None = None,
               target_year: str | int | None = None, limit: int = 4) -> dict[str, object]:
    """Build a canon-bounded plot scaffold; it does not write canon."""
    records = catalog_retrieve(ids=ids or [], terms=terms or [], limit=limit, target_year=target_year)
    if not records:
        seeds = analyze_event_seeds(target_year, limit)
        records = catalog_retrieve(ids=[str(item["id"]) for item in seeds["candidates"][:limit]],
                                   limit=limit, target_year=target_year)
    inputs = [{key: record.get(key, "") for key in ("id", "name", "title", "date", "location", "status", "summary") if record.get(key)} for record in records]
    titles = [str(item.get("title") or item.get("name") or item.get("id")) for item in inputs]
    premise = " / ".join(titles) if titles else "An unresolved Waluipedia filing"
    return {
        "target_year": str(target_year or ""), "canon_inputs": inputs,
        "plot_seed": premise,
        "beats": [
            "Opening: enter through a concrete location, immediate problem, and one canon-supported witness.",
            "Pressure: expose the unresolved question or conflict already present in the selected filing.",
            "Choice: give the player or cast a meaningful decision without resolving canon automatically.",
            "Consequence: record a draft outcome and leave one recoverable hook for the next scene.",
        ],
        "roleplay_policy": "Short, snappy turns; stay in character; preserve personality; do not narrate the player's choice; never reveal later-year canon.",
        "prompt": f"Use the canon filings {premise}. Target year: {target_year or 'open'}. Run a short roleplay scene with one immediate choice, personality-led dialogue, and no future spoilers.",
    }


def make_commentary_object(source_id: str, target_year: str | int | None = None) -> dict[str, object]:
    """Create a source-bound commentary draft from an existing event record."""
    records = catalog_retrieve(source="events", ids=[source_id], limit=1, target_year=target_year)
    if not records:
        raise ValueError("source event was not found or is outside the target-year cutoff")
    event = records[0]
    source = str(event.get("id", source_id))
    description = str(event.get("description", "")).strip()
    summary = str(event.get("summary", "")).strip()
    title = str(event.get("title") or event.get("name") or source)
    date = str(event.get("date", ""))
    year_match = re.search(r"\d{3,4}\s*(?:BF|AF)", date, re.I)
    sections = [{"id": "the-filing", "icon": "📰", "heading": "The Filing", "body": description or summary}]
    if summary and summary not in description:
        sections.append({"id": "waluigis-cut", "icon": "✎", "heading": "Waluigi's Cut", "body": f"Waluigi's reading of the filing: {summary}\n\nThe source record remains the authority; this commentary adds interpretation, not new canon. WAH."})
    return {"id": f"{source}_commentary", "sourceArticle": source, "title": title,
            "subtitle": f"Waluigi's cut on {title}", "filed": date,
            "timeCode": f"TC:{year_match.group(0) if year_match else 'undated'}/MAT",
            "kicker": "Waluigi's Cut · Commentary Track",
            "pullQuote": summary[:240] or f"The filing is {title}. Waluigi is filing it.",
            "standfirst": f"Waluigi retells and annotates {title} without changing the source record.",
            "sections": sections, "relatedArticles": [source]}


def optimize_prompt(text: str, mode: str = "article", target_year: str | int | None = None) -> dict[str, str]:
    """Turn a request into a bounded task prompt without rewriting roleplay turns."""
    original = str(text or "").strip()
    normalized_mode = str(mode or "article").casefold()
    if normalized_mode in {"roleplay", "rp", "scene"}:
        return {"mode": "roleplay", "optimized_prompt": original,
                "policy": "Do not optimize the player's roleplay wording. Reply in short, snappy, personality-led turns and never take the player's action."}
    voice = "Waluigi POV, first person, evidence-bound, with dry archival commentary" if normalized_mode in {"article", "analysis", "commentary"} else "clear, evidence-bound output"
    cutoff = f"Target year: {target_year}. Exclude later events." if target_year else "Use the request's stated chronology and do not invent dates."
    optimized = (f"Task: {original}\n\nConstraints:\n- {cutoff}\n- Voice: {voice}.\n"
                 "- Retrieve relevant repository canon before drafting.\n"
                 "- Separate sourced facts, analysis, and proposed draft material.\n"
                 "- Return the requested object or prose in the repository's existing schema.\n"
                 "- Flag ambiguity instead of silently inventing details.")
    return {"mode": normalized_mode, "optimized_prompt": optimized,
            "policy": "Prompt optimization is enabled for non-roleplay work."}


def self_audit() -> dict[str, object]:
    """Expose bounded, read-only agent capability and safety diagnostics."""
    return {"runtime": "Reputation-Matrix2/tools/local-agent/agent_runtime.py",
            "read_only_tools": ["repo_read", "repo_search", "catalog_retrieve", "find_image_references", "analyze_event_seeds", "build_plot", "optimize_prompt"],
            "approval_tools": ["repo_patch", "repo_add_object", "create_commentary", "queue_image"],
            "invariants": ["future event cutoff in creation mode", "canonical writes require approval", "roleplay is draft-only", "image inputs must resolve to attached or repository files"],
            "improvement_path": "Use repo_diff and exact repo_patch after explicit approval; run an audit before completion."}

def add_json_object(path_value: str, value: dict[str, object], collection: str = "") -> str:
    """Append one schema-shaped object to an allowlisted canonical collection."""
    allowed = {
        "Reputation-Matrix2/data/articleAnalyses.json": "analyses",
        "Reputation-Matrix2/data/commentaries.json": "commentaries",
        "Reputation-Matrix2/data/quests.json": "__root__",
        "Reputation-Matrix2/data/abilityPoints.json": "players",
        "Reputation-Matrix2/data/investigations.json": "investigations",
        "Reputation-Matrix2/data/props.json": "props",
        "Reputation-Matrix2/data/events.json": "__list__",
        "Reputation-Matrix2/data/characters.json": "__list__",
        "Reputation-Matrix2/data/locations.json": "__list__",
    }
    relative = safe_path(path_value).relative_to(ROOT).as_posix()
    if relative not in allowed:
        raise ValueError("canonical object creation is limited to known Waluipedia data collections")
    if not isinstance(value, dict) or not str(value.get("id", "")).strip():
        raise ValueError("the new object must be a JSON object with a non-empty id")
    path = ROOT / relative
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        raise ValueError(f"cannot read target JSON: {error}") from error
    destination = collection or allowed[relative]
    identifier = str(value["id"])
    if destination == "__list__":
        if not isinstance(data, list):
            raise ValueError("target is not a JSON list")
        if any(isinstance(item, dict) and str(item.get("id", "")) == identifier for item in data):
            raise ValueError(f"object id already exists: {identifier}")
        data.append(value)
    elif destination == "__root__":
        if not isinstance(data, dict):
            raise ValueError("target is not a JSON object")
        if identifier in data:
            raise ValueError(f"object id already exists: {identifier}")
        data[identifier] = value
    else:
        if not isinstance(data, dict) or not isinstance(data.get(destination), (list, dict)):
            raise ValueError(f"target collection is unavailable: {destination}")
        bucket = data[destination]
        if isinstance(bucket, list):
            if any(isinstance(item, dict) and str(item.get("id", "")) == identifier for item in bucket):
                raise ValueError(f"object id already exists: {identifier}")
            bucket.append(value)
        else:
            if identifier in bucket:
                raise ValueError(f"object id already exists: {identifier}")
            bucket[identifier] = value
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return f"added {identifier} to {relative} ({destination})"


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
