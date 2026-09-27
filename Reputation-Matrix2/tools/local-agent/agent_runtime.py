#!/usr/bin/env python3
"""Bounded tool-using LM Studio agent.

Gemma chooses among an allowlisted set of local actions. The model never gets
shell access; repository writes are exact-match patches and require the GUI's
explicit allow-writes switch.
"""
from __future__ import annotations

import ast
import collections
import concurrent.futures
import json
import math
import os
import re
import statistics
import socket
import subprocess
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path
from typing import Any, Callable

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
RUNS = HERE.parents[1] / "tools" / ".local-agent-runs"
sys.path.insert(0, str(HERE))
import agent as planner  # noqa: E402
import comfy_workflow as comfy  # noqa: E402
import repo_tools  # noqa: E402

DEFAULT_ENDPOINT = os.environ.get("LM_STUDIO_URL", "http://127.0.0.1:1234/v1/chat/completions")

def _configured_timeout() -> int | None:
    """Use -1/none as an unlimited LM Studio socket timeout.

    urllib does not treat -1 as an unlimited value; passing None is the actual
    Python API for no socket deadline. Local fixed audits keep their own bounds.
    """
    raw = os.environ.get("LM_STUDIO_TIMEOUT", "-1").strip().lower()
    if raw in {"", "-1", "none", "unlimited", "infinite"}:
        return None
    try:
        value = int(raw)
    except ValueError:
        return None
    return None if value < 0 else value


LM_TIMEOUT = _configured_timeout()

TOOL_DESCRIPTIONS = {
    "repo_read": "Read one bounded text file inside the checkout. args: path, limit.",
    "repo_search": "Search a focused repository directory. In creation mode pass target_year so future events are excluded. args: term, dir, limit, target_year.",
    "parallel_read": "Read up to 12 bounded repository files concurrently. args: paths, limit.",
    "parallel_search": "Run up to 8 focused repository searches concurrently. args: queries, dir, limit.",
    "find_image_references": "Resolve local character, event, or location art by IDs or names; target_year excludes future event art. Read-only. args: entities, terms, limit, target_year.",
    "catalog_retrieve": "Read focused canonical character, event, or location records by IDs or approximate names; target_year excludes future event records. Read-only. args: source, ids, terms, limit, target_year.",
    "analyze_event_seeds": "Find short, thin, unresolved, or roleplay-friendly event records and propose cleanup actions. Read-only. args: target_year, limit.",
    "build_plot": "Build a canon-bounded plot scaffold from available event IDs or terms. Read-only and draft-only. args: ids, terms, target_year, limit.",
    "create_commentary": "Create a source-bound Waluigi commentary object for an existing event without embedding a huge object in the model action. Requires write approval and audit. args: source_id, target_year.",
    "optimize_prompt": "Structure a non-roleplay prompt without rewriting roleplay turns. args: text, mode, target_year.",
    "self_audit": "Inspect bounded agent capabilities and improvement safeguards. Read-only. args: none.",
    "repo_status": "Inspect the bounded local git status. No writes. args: none.",
    "repo_diff": "Inspect the bounded local diff, optionally for repository-relative paths. No writes. args: paths.",
    "python_analyze": "Run safe, offline Python over supplied repository text. No imports, filesystem, network, subprocess, or writes. args: files, code.",
    "repo_patch": "Replace exactly one matching text block. args: path, old, new. Requires write approval.",
    "repo_add_object": "Add one uniquely identified analysis, commentary, investigation, prop, quest, XP, character, event, or location object to an allowlisted JSON collection. Requires write approval and audit.",
    "run_audit": "Run one fixed audit: json, commentaries, timecodes, home_feed, covers, or campaign_fronts. Pass the audit as name or type.",
    "queue_image": "Queue a Qwen Image job; text-to-image may use zero references, while edit workflows need references. Prefer local character/event art. Requires write approval.",
    "finish_task": "Mark the current internal work unit complete. Read-only work can finish after evidence; patches require a passed audit. args: note.",
    "ask_user": "Stop and ask for a missing fact or approval. args: question.",
}


def _clip(value: Any, limit: int = 12000) -> str:
    text = value if isinstance(value, str) else json.dumps(value, ensure_ascii=False, indent=2)
    return text[:limit] + ("\n[… clipped …]" if len(text) > limit else "")


def _redact_conversation(conversation: list[dict[str, Any]]) -> list[dict[str, Any]]:
    """Keep room context compact without embedding base64 images in text prompts."""
    redacted = []
    for item in conversation[-12:]:
        if not isinstance(item, dict):
            continue
        entry = {"role": item.get("role", ""), "content": _clip(item.get("content", ""), 6000)}
        if item.get("images"):
            entry["attached_images"] = len(item["images"])
        redacted.append(entry)
    return redacted


def _compact_creation_items(items: Any, limit: int) -> list[dict[str, str]]:
    allowed = ("id", "name", "title", "source", "date", "era", "location", "status", "image")
    if not isinstance(items, list):
        return []
    return [{field: str(item[field])[:240] for field in allowed if item.get(field) not in (None, "")}
            for item in items[:limit] if isinstance(item, dict)]


def _attached_image_paths(images: list[dict[str, Any]] | None, run_id: str, limit: int = 3) -> list[str]:
    """Materialize validated browser attachments into ignored ComfyUI inputs."""
    paths = []
    suffixes = {"image/png": ".png", "image/jpeg": ".jpg", "image/webp": ".webp", "image/gif": ".gif"}
    target_dir = ROOT / "workflow" / "intake-inputs"
    for index, image in enumerate((images or [])[:limit]):
        if not isinstance(image, dict):
            continue
        data = str(image.get("data", ""))
        mime = str(image.get("mime", ""))
        marker = f"data:{mime};base64,"
        if mime not in suffixes or not data.startswith(marker):
            continue
        try:
            raw = __import__("base64").b64decode(data[len(marker):], validate=True)
        except Exception:
            continue
        if not raw or len(raw) > 9 * 1024 * 1024:
            continue
        target_dir.mkdir(parents=True, exist_ok=True)
        target = target_dir / f"{run_id}-attached-{index}{suffixes[mime]}"
        if not target.is_file():
            target.write_bytes(raw)
        paths.append(target.relative_to(ROOT).as_posix())
    return paths


def _creation_image_paths(creation_context: dict[str, Any] | None, limit: int = 6) -> list[str]:
    paths = []
    if not creation_context:
        return paths
    for item in (creation_context.get("characters", []) + creation_context.get("events", [])):
        if not isinstance(item, dict) or not item.get("image"):
            continue
        raw = str(item["image"])
        candidates = [raw, f"Reputation-Matrix2/{raw}"]
        for candidate in candidates:
            try:
                safe = repo_tools.safe_path(candidate)
            except ValueError:
                continue
            if safe.is_file():
                value = safe.relative_to(ROOT).as_posix()
                if value not in paths:
                    paths.append(value)
                break
        if len(paths) >= limit:
            break
    return paths


def _image_parts(images: list[dict[str, Any]] | None) -> list[dict[str, Any]]:
    """Convert bounded browser attachments to OpenAI-compatible image parts."""
    parts: list[dict[str, Any]] = []
    for image in (images or [])[:3]:
        if not isinstance(image, dict):
            continue
        data = str(image.get("data", ""))
        mime = str(image.get("mime", "image/jpeg"))
        if not data.startswith("data:image/") or len(data) > 12 * 1024 * 1024:
            continue
        if mime not in {"image/png", "image/jpeg", "image/webp", "image/gif"}:
            continue
        parts.append({"type": "image_url", "image_url": {"url": data}})
    return parts


def _user_content(text: str, images: list[dict[str, Any]] | None = None) -> str | list[dict[str, Any]]:
    parts: list[dict[str, Any]] = [{"type": "text", "text": text}]
    parts.extend(_image_parts(images))
    return parts if len(parts) > 1 else text


def _conversation_images(conversation: list[dict[str, Any]], current: list[dict[str, Any]] | None = None) -> list[dict[str, Any]]:
    images = list(current or [])
    for item in conversation[-6:]:
        if isinstance(item, dict) and isinstance(item.get("images"), list):
            images.extend(item["images"])
    return images[-3:]


def _ask(endpoint: str, model: str, system: str, user: str,
         timeout: int | None = LM_TIMEOUT,
         images: list[dict[str, Any]] | None = None) -> dict[str, Any]:
    """Request one action, retrying once when a reasoning model exhausts its output budget."""
    base_messages = [{"role": "system", "content": system},
                     {"role": "user", "content": _user_content(user, images)}]

    def request_action(messages: list[dict[str, Any]], max_tokens: int) -> dict[str, Any]:
        payload: dict[str, Any] = {"messages": messages, "temperature": 0.1, "max_tokens": max_tokens}
        if model:
            payload["model"] = model
        request = urllib.request.Request(endpoint, data=json.dumps(payload).encode(),
                                         headers={"Content-Type": "application/json"}, method="POST")
        with urllib.request.urlopen(request, timeout=timeout) as response:
            body = json.loads(response.read())
        try:
            message = body["choices"][0]["message"]
            content = message.get("content") if isinstance(message, dict) else None
        except (KeyError, IndexError, TypeError) as error:
            raise ValueError("LM Studio response did not contain an assistant message") from error
        if not isinstance(content, str) or not content.strip():
            raise ValueError("LM Studio exhausted its reasoning budget without emitting an action")
        value = planner._json_from_reply(content)
        if "action" not in value:
            raise ValueError("agent reply did not include an action")
        return value

    retry_system = system + "\nIMPORTANT: do not explain or reason. Emit exactly one compact JSON action now."
    retry_messages = [{"role": "system", "content": retry_system}, base_messages[1]]
    try:
        return request_action(base_messages, 700)
    except (ValueError, json.JSONDecodeError):
        # Gemma can spend the first budget on hidden reasoning and return an
        # empty content field. A single terse retry prevents a whole run from
        # failing while keeping the retry bounded and the reasoning private.
        return request_action(retry_messages, 700)
    except urllib.error.HTTPError as error:
        if error.code not in {400, 408, 429, 500, 502, 503, 504}:
            raise
        return request_action(retry_messages, 700)


def _complete(endpoint: str, model: str, system: str, user: str,
              timeout: int | None = LM_TIMEOUT,
              images: list[dict[str, Any]] | None = None,
              max_tokens: int = 1400) -> str:
    """Ask LM Studio for a normal multimodal chat response."""
    payload: dict[str, Any] = {
        "messages": [{"role": "system", "content": system},
                     {"role": "user", "content": _user_content(user, images)}],
        "temperature": 0.2,
        "max_tokens": max(120, min(int(max_tokens), 2000)),
    }
    if model:
        payload["model"] = model
    request = urllib.request.Request(endpoint, data=json.dumps(payload).encode(),
                                     headers={"Content-Type": "application/json"}, method="POST")
    with urllib.request.urlopen(request, timeout=timeout) as response:
        body = json.loads(response.read())
    content = body["choices"][0]["message"]["content"]
    if not isinstance(content, str) or not content.strip():
        raise ValueError("LM Studio returned an empty assistant response")
    return content.strip()


def _friendly_model_error(error: Exception) -> str:
    if isinstance(error, urllib.error.HTTPError):
        return f"LM Studio returned HTTP {error.code}; check the loaded model and its OpenAI-compatible endpoint."
    if isinstance(error, (urllib.error.URLError, ConnectionError, socket.timeout)):
        return "LM Studio could not be reached. Start the local model server or check LM_STUDIO_URL, then retry."
    if isinstance(error, json.JSONDecodeError):
        return "LM Studio returned malformed JSON. Check the model's tool-use or OpenAI-compatible response format, then retry."
    if "agent reply did not include an action" in str(error) or "without emitting an action" in str(error):
        return "The local model spent its response budget reasoning or returned no action. Waluigi retried once in compact JSON mode; retry with a shorter request or a model with reliable JSON tool-use support."
    return str(error) or "The local model failed without an error message."


def _evidence_answer(request_text: str, history: list[dict[str, str]]) -> str:
    """Finish from local evidence when the model is unavailable or repeats."""
    useful = [record for record in history if record.get("result") and record.get("action") != "system"]
    if not useful:
        return "I completed the bounded local check, but it returned no readable evidence."
    last = useful[-1].get("result", "")
    try:
        value = json.loads(last)
    except (TypeError, json.JSONDecodeError):
        value = None
    if isinstance(value, list):
        hits = []
        for item in value[:12]:
            if isinstance(item, dict) and item.get("path"):
                location = f"{item['path']}:{item.get('line', '')}".rstrip(":")
                preview = str(item.get("preview", "")).strip()
                hits.append(f"- {location}" + (f" — {preview}" if preview else ""))
        if hits:
            return f"Repository search results for {request_text.strip()}:\n\n" + "\n".join(hits)
    if isinstance(value, dict) and value.get("results"):
        return _evidence_answer(request_text, [{"result": json.dumps(value["results"], ensure_ascii=False)}])
    if "working tree clean" in last.lower():
        return "The repository status is clean; no unfinished local file changes were found."
    return f"I checked the local workspace for this request. The latest evidence was:\n\n{_clip(last, 5000)}"


def _fast_status_answer(request_text: str) -> str | None:
    lowered = request_text.casefold()
    if not any(phrase in lowered for phrase in ("repository status", "repo status", "working tree", "unfinished work")):
        return None
    status = repo_tools.status().strip()
    if not status:
        return "The repository status is clean; no unfinished local file changes were found."
    return "The local repository has these unfinished changes:\n\n" + status[:5000]


def _fast_search_answer(request_text: str) -> tuple[str, list[dict[str, str]]] | None:
    lowered = request_text.casefold()
    if not re.search(r"\b(repo|repository)\s+search\b|\bsearch\s+(the\s+)?repository\b|\bfind\s+in\s+(the\s+)?repo\b", lowered):
        return None
    match = re.search(r"\bfor\s+[\"']?(.+?)[\"']?$", request_text.strip(), re.I)
    if not match:
        match = re.search(r"(?:repository\s+search|search)\s*:\s*[\"']?(.+?)[\"']?$", request_text.strip(), re.I)
    if not match:
        return None
    term = match.group(1).strip(" \"'").rstrip(".!?").strip()
    if len(term) < 2 or term.casefold() in {"the repository", "repository"}:
        return None
    results = repo_tools.search(term, ".", 20)
    if not results:
        return (f"Repository search found no matches for {term!r}.", results)
    lines = [f"Repository search results for {term!r}:"]
    lines.extend(f"- {item['path']}:{item.get('line', '')} — {item.get('preview', '')}" for item in results)
    return "\n".join(lines), results


def _document_read_path(request_text: str, conversation: list[dict[str, Any]] | None = None) -> str | None:
    """Resolve common document-reading requests before the model can search blindly."""
    lowered = request_text.casefold()
    user_texts = [str(item.get("content", "")) for item in (conversation or [])
                  if item.get("role") == "user"]
    context = " ".join(user_texts[-4:]).casefold()
    read_intent = bool(re.search(r"\b(read|review|open|show|look\s+at)\b", lowered))
    followup_read = "dont search" in lowered or "don't search" in lowered
    if not read_intent and not followup_read:
        return None

    # Honor an explicit repository-relative path when one is supplied.
    explicit = re.search(r"(?:^|\s)((?:docs|README|Reputation-Matrix2|tools)/[^\s,;]+)", request_text)
    if explicit:
        candidate = explicit.group(1).rstrip('.!?)]"')
        try:
            if repo_tools.safe_path(candidate).is_file():
                return candidate
        except ValueError:
            pass

    # These are the archive's canonical ownership documents. Resolve them
    # directly instead of sending a natural-language filename request to the
    # fuzzy content searcher.
    if "story" in lowered and ("guideline" in lowered or "format" in lowered):
        return "docs/STORY_FORMAT_GUIDE.md"
    if "commentary" in lowered and ("guideline" in lowered or "guide" in lowered or "readme" in lowered):
        return "docs/COMMENTARY_MODE_GUIDE.md"
    if "filing" in lowered and ("readme" in lowered or "guide" in lowered or "process" in lowered):
        return "docs/SESSION_FILING_PROCESS.md"

    # A terse follow-up such as "don't search, read" refers to the preceding
    # document request, not to a request for another clarification question.
    if followup_read and "story" in context and "filing" in context:
        return "docs/SESSION_FILING_PROCESS.md"
    if followup_read and "commentary" in context:
        return "docs/COMMENTARY_MODE_GUIDE.md"
    return None


def _fast_commentary_locations(request_text: str) -> tuple[str, list[dict[str, str]]] | None:
    """Answer a location request from the canonical commentary file map."""
    lowered = request_text.casefold()
    if "commentary" not in lowered or not any(word in lowered for word in ("where", "find", "file", "locat")):
        return None
    results = repo_tools.search("commentaries.json", ".", 20)
    canonical = [
        {"path": "Reputation-Matrix2/data/commentaries.json", "role": "canonical commentary records"},
        {"path": "docs/COMMENTARY_MODE_GUIDE.md", "role": "full Waluigi's Cut house rules"},
        {"path": "docs/README-COMMENTARY-MODE.md", "role": "commentary mode README and quick start"},
        {"path": "tools/check-commentaries.py", "role": "commentary validation checker"},
    ]
    canonical = [item for item in canonical if repo_tools.safe_path(item["path"]).is_file()]
    lines = ["Commentary-related files:"]
    lines.extend(f"- {item['path']} — {item['role']}" for item in canonical)
    return "\n".join(lines), results


_WRITE_VERBS = ("edit", "change", "update", "write", "patch", "create", "add", "apply", "remove", "fix", "file", "save", "expand", "extend", "elaborate", "develop", "flesh out", "rewrite")
_ARTIFACT_WORDS = ("commentary", "investigation", "analysis", "object", "prop", "event", "character", "location", "quest", "xp", "ability")


def _request_intent(request_text: str, conversation: list[dict[str, Any]] | None = None) -> dict[str, str]:
    """Classify the requested operation without choosing a repository action."""
    lowered = request_text.casefold()
    image_markers = ("generate an image", "generating an image", "generate image", "create an image", "creating an image", "make an image", "image job", "queue image", "picture of", "illustration")
    prior_users = [str(item.get("content", "")).casefold() for item in (conversation or []) if item.get("role") == "user"]
    continuation_of_image = len(lowered.split()) <= 12 and bool(prior_users) and any(marker in prior_users[-1] for marker in image_markers)
    if any(word in lowered for word in image_markers) or continuation_of_image:
        return {"kind": "image", "artifact": "image"}
    if any(word in lowered for word in _WRITE_VERBS):
        artifact = next((word for word in _ARTIFACT_WORDS if word in lowered), "file")
        return {"kind": "write", "artifact": artifact}
    return {"kind": "read", "artifact": ""}


def _request_context_text(request_text: str, conversation: list[dict[str, Any]] | None = None) -> str:
    prior = [str(item.get("content", "")) for item in (conversation or []) if item.get("role") == "user"]
    return "\n".join([request_text, *prior[-5:]])


def _image_subject_terms(request_text: str, conversation: list[dict[str, Any]] | None = None) -> list[str]:
    """Extract a bounded image subject; do not use the whole chat as a search term."""
    text = _request_context_text(request_text, conversation)
    match = re.search(r"\b(?:of|for|depict(?:ing)?|featuring|show(?:ing)?)\s+(.+)", text, re.I)
    if not match:
        return []
    subject = re.split(r"\b(?:in the style of|using|with a|and then|please)\b", match.group(1), maxsplit=1, flags=re.I)[0].strip(" .?!")
    if len(subject) < 3:
        return []
    terms = [subject[:180]]
    terms.extend(re.findall(r"\b[A-Z][A-Za-z0-9’'_-]{2,}\b", subject)[:5])
    return list(dict.fromkeys(terms))


def _history_action_names(history: list[dict[str, str]]) -> set[str]:
    names: set[str] = set()
    for record in history:
        try:
            action = json.loads(record.get("action", "{}"))
        except (TypeError, json.JSONDecodeError):
            continue
        if action.get("action"):
            names.add(str(action["action"]))
    return names


def _has_repository_evidence(history: list[dict[str, str]]) -> bool:
    evidence_actions = {"repo_read", "repo_search", "parallel_read", "parallel_search", "catalog_retrieve"}
    for record in history:
        try:
            action = json.loads(record.get("action", "{}"))
        except (TypeError, json.JSONDecodeError):
            continue
        if action.get("action") not in evidence_actions:
            continue
        result = str(record.get("result", "")).strip()
        if result and result not in {"[]", "{}"} and not result.startswith(("FAILED:", "ERROR:")):
            return True
    return False


def _referenced_event_candidates(request_text: str, conversation: list[dict[str, Any]] | None = None) -> list[dict[str, object]]:
    """Resolve a current-turn pronoun from the most recent concrete user target."""
    lowered = request_text.casefold()
    prior_users = [str(item.get("content", "")) for item in (conversation or []) if item.get("role") == "user"]
    if any(word in lowered.split() for word in ("it", "that", "this", "the")) and prior_users:
        for previous in reversed(prior_users):
            candidates = repo_tools.resolve_event_reference(previous, limit=3)
            if candidates:
                return candidates
    return repo_tools.resolve_event_reference(_request_context_text(request_text, conversation), limit=3)


def _missing_write_target(request_text: str, conversation: list[dict[str, Any]] | None = None) -> bool:
    intent = _request_intent(request_text, conversation)
    if intent["kind"] != "write":

        return False
    context = _request_context_text(request_text, conversation)
    if re.search(r"(?:Reputation-Matrix2|docs|tools|README)[/\\][^\s,;]+", context, re.I):
        return False
    if _referenced_event_candidates(request_text, conversation):
        return False
    if any(word in context.casefold() for word in _ARTIFACT_WORDS):
        return not bool(repo_tools.resolve_event_reference(context, limit=1)) and intent["artifact"] not in {"object", "file"}
    return True


def _required_preflight_action(request_text: str, conversation: list[dict[str, Any]] | None,
                               history: list[dict[str, str]], action: dict[str, Any]) -> dict[str, Any] | None:
    """Block a write chosen before its source/schema has been checked."""
    intent = _request_intent(request_text, conversation)
    if intent["kind"] != "write" or _has_repository_evidence(history):
        return None
    if action.get("action") not in {"repo_patch", "repo_add_object", "create_commentary", "finish_task", "repo_read"}:
        return None
    context = _request_context_text(request_text, conversation)
    candidates = _referenced_event_candidates(request_text, conversation)
    if action.get("action") == "repo_read":
        path = str((action.get("args") or {}).get("path", ""))
        broad_catalog = Path(path).name.casefold() in {"events.json", "characters.json", "locations.json", "commentaries.json", "investigations.json"}
        if not broad_catalog:
            return None
    if len(candidates) == 1:
        return {"action": "catalog_retrieve", "args": {"source": "events", "ids": [candidates[0]["id"]], "limit": 1}}
    path_match = re.search(r"((?:Reputation-Matrix2|docs|tools|README)[/\\][^\s,;]+)", context, re.I)
    if path_match:
        return {"action": "repo_read", "args": {"path": path_match.group(1).rstrip(".,;"), "limit": 12000}}
    return {"action": "ask_user", "args": {"question": "Before I make a canonical change, tell me the exact target file or canonical entity and what should be added or changed. I will read and verify it first, then show the write for approval."}}


def _evidence_read_answer(request_text: str, history: list[dict[str, str]]) -> str | None:
    for record in reversed(history):
        if record.get("action") != "system":
            try:
                action = json.loads(record.get("action", "{}"))
            except (TypeError, json.JSONDecodeError):
                action = {}
            if action.get("action") == "repo_read":
                path = str((action.get("args") or {}).get("path", "the requested file"))
                return f"I read {path}.\n\n{record.get('result', '')}"
    return None


def _deterministic_answer(request_text: str, conversation: list[dict[str, str]] | None = None) -> str | None:
    """Answer fast, safe archive lookups without faking model output."""
    lowered = request_text.lower()
    conversation_text = " ".join(str(item.get("content", "")) for item in (conversation or [])).lower()
    wants_latest = any(word in lowered for word in ("latest", "most recent", "newest")) and any(
        word in lowered for word in ("session", "filing", "article", "event", "update")
    )
    wants_followup = any(phrase in lowered for phrase in ("what else happened", "what happened next", "tell me more", "anything else")) and "airlift" in conversation_text
    if not wants_latest and not wants_followup:
        return None
    try:
        main_page = json.loads((ROOT / "Reputation-Matrix2/data/mainPage.json").read_text(encoding="utf-8"))
        events = json.loads((ROOT / "Reputation-Matrix2/data/events.json").read_text(encoding="utf-8"))
        latest = main_page.get("latestUpdate") or {}
        event = next((item for item in events if item.get("id") == latest.get("id")), None)
        if not event:
            return None
        title = event.get("title") or event.get("name") or event.get("id")
        if wants_followup:
            summary = event.get("summary", "").strip()
            outcome = event.get("outcome", "").strip()
            answer = f"More from {title}:\n\n{summary}"
            if outcome and outcome != summary:
                answer += f"\n\nThe recorded outcome was: {outcome}"
            return answer
        date = event.get("date", "date not recorded")
        status = event.get("status", "")
        answer = f"The latest current filing is {title}. It is dated {date}."
        if status:
            answer += f" Status: {status}."
        return answer
    except (OSError, json.JSONDecodeError):
        return None


def _final_answer(endpoint: str, model: str, request_text: str,
                  conversation: list[dict[str, Any]], history: list[dict[str, str]],
                  images: list[dict[str, Any]] | None = None,
                  creation_context: dict[str, Any] | None = None) -> str:
    system = (
        "You are Waluigi's WAH-Desk, a local archive chatbot. Answer the user's latest "
        "message in clear plain text. Use only facts supported by the supplied "
        "conversation and tool results. For roleplay, use retrieved Waluipedia canon "
        "as continuity and clearly treat newly created scenes as fictional continuation. "
        "Do not mention hidden work units, JSON actions, or internal implementation unless the user asks. "
        "For Waluipedia articles, analysis, and commentary, use Waluigi's first-person archival POV "
        "unless the user explicitly requests another voice. For roleplay, keep replies short, snappy, "
        "and personality-led without taking the player's action. If files "
        "were changed, summarize the actual changes and validations. Be concise "
        "but answer the question directly."
    )
    if creation_context:
        system += (
            " You are also the narrator and character cast for a Waluipedia creation room. "
            "Speak as the selected characters when appropriate, preserve the selected year "
            "and campaign, never reveal events after the selected year, let the user play the selected player role, and distinguish canon "
            "facts from newly invented story events. Continue scenes rather than resetting them."
        )
    context = {
        "conversation": _redact_conversation(conversation),
        "latest_request": request_text,
        "tool_results": history[-10:],
        "creation_room": creation_context or {},
    }
    try:
        return _complete(endpoint, model, system, _clip(context, 30000), images=images,
                         max_tokens=420 if creation_context else 1400)
    except Exception as error:
        if creation_context:
            raise RuntimeError(_friendly_model_error(error)) from error
        fallback = _deterministic_answer(request_text, conversation)
        return fallback or _evidence_read_answer(request_text, history) or _evidence_answer(request_text, history)


def _write_log(run_dir: Path, record: dict[str, Any]) -> None:
    with (run_dir / "agent-log.jsonl").open("a", encoding="utf-8") as stream:
        stream.write(json.dumps(record, ensure_ascii=False) + "\n")


def _checklist(run_id: str) -> tuple[Path, list[dict[str, Any]]]:
    path = planner.checklist_path(run_id)
    return path, json.loads(path.read_text(encoding="utf-8"))


def _save_checklist(path: Path, items: list[dict[str, Any]]) -> None:
    path.write_text(json.dumps(items, indent=2, ensure_ascii=False), encoding="utf-8")


def _load_history(run_dir: Path) -> list[dict[str, str]]:
    """Recover a small amount of context when a user approves and resumes."""
    path = run_dir / "agent-log.jsonl"
    if not path.is_file():
        return []
    records: list[dict[str, str]] = []
    for line in path.read_text(encoding="utf-8", errors="replace").splitlines()[-12:]:
        try:
            record = json.loads(line)
        except json.JSONDecodeError:
            continue
        if "action" in record or "error" in record:
            records.append({
                "action": _clip(record.get("action", "system"), 1800),
                "result": _clip(record.get("result", record.get("error", "")), 5000),
            })
    return records


def _parallel_read(paths: list[str], limit: int = 12000) -> str:
    unique = list(dict.fromkeys(str(path) for path in paths if str(path)))[:12]
    def read(path: str) -> dict[str, str]:
        try:
            return {"path": path, "content": repo_tools.read_file(path, limit)}
        except Exception as error:
            return {"path": path, "error": str(error)}
    with concurrent.futures.ThreadPoolExecutor(max_workers=min(6, max(1, len(unique)))) as pool:
        results = list(pool.map(read, unique))
    return json.dumps(results, ensure_ascii=False, indent=2)[:30000]


def _parallel_search(queries: list[Any], relative_dir: str, limit: int = 20) -> str:
    normalized = []
    for query in queries[:8]:
        if isinstance(query, str):
            normalized.append({"term": query, "dir": relative_dir})
        elif isinstance(query, dict):
            normalized.append({"term": str(query.get("term", "")), "dir": str(query.get("dir", relative_dir))})
    def search(item: dict[str, str]) -> dict[str, Any]:
        try:
            return {"term": item["term"], "dir": item["dir"], "results": repo_tools.search(item["term"], item["dir"], min(int(limit), 30))}
        except Exception as error:
            return {"term": item["term"], "dir": item["dir"], "error": str(error)}
    with concurrent.futures.ThreadPoolExecutor(max_workers=min(8, max(1, len(normalized)))) as pool:
        results = list(pool.map(search, normalized))
    return json.dumps(results, ensure_ascii=False, indent=2)[:30000]


_SAFE_PYTHON_BUILTINS = {"len": len, "min": min, "max": max, "sum": sum, "sorted": sorted,
                         "enumerate": enumerate, "range": range, "list": list, "dict": dict,
                         "set": set, "tuple": tuple, "str": str, "int": int, "float": float,
                         "bool": bool, "isinstance": isinstance, "zip": zip, "any": any, "all": all}


def _python_analyze(args: dict[str, Any]) -> str:
    """Run a small data transformation without giving model code the repo or OS."""
    code = str(args.get("code", ""))
    if not code or len(code) > 5000:
        raise ValueError("python_analyze code is required and limited to 5,000 characters")
    paths = [str(value) for value in (args.get("files") or [])][:8]
    files: dict[str, str] = {}
    total_bytes = 0
    for path in paths:
        safe = repo_tools.safe_path(path)
        if not safe.is_file() or safe.stat().st_size > 2_000_000:
            raise ValueError(f"python_analyze file is missing or larger than 2 MB: {path}")
        total_bytes += safe.stat().st_size
        if total_bytes > 4_000_000:
            raise ValueError("python_analyze input is limited to 4 MB total")
        files[path] = safe.read_text(encoding="utf-8", errors="replace")
    tree = ast.parse(code, mode="exec")
    forbidden_names = {"open", "exec", "eval", "compile", "input", "__import__", "globals", "locals", "vars"}
    for node in ast.walk(tree):
        if isinstance(node, (ast.Import, ast.ImportFrom)):
            raise ValueError("python_analyze does not allow imports; json, re, math, statistics, and collections are already provided")
        if isinstance(node, ast.Name) and node.id in forbidden_names:
            raise ValueError(f"python_analyze forbids {node.id}")
        if isinstance(node, ast.Attribute) and node.attr.startswith("__"):
            raise ValueError("python_analyze forbids dunder access")
    scope = {"__builtins__": _SAFE_PYTHON_BUILTINS, "files": files, "json": json, "re": re,
             "math": math, "statistics": statistics, "collections": collections}
    local_scope: dict[str, Any] = {}
    exec(compile(tree, "<python_analyze>", "exec"), scope, local_scope)
    return json.dumps({"files": list(files), "result": local_scope.get("result")}, ensure_ascii=False, default=str)[:16000]


def _is_fast_archive_lookup(request_text: str, conversation: list[dict[str, str]] | None = None) -> bool:
    lowered = request_text.lower()
    if any(word in lowered for word in ("edit", "change", "update the", "write", "add", "remove", "fix", "create")):
        return False
    latest = any(word in lowered for word in ("latest", "most recent", "newest")) and any(
        word in lowered for word in ("session", "filing", "article", "event", "update")
    )
    previous = " ".join(str(item.get("content", "")) for item in (conversation or [])).lower()
    followup = any(phrase in lowered for phrase in ("what else happened", "what happened next", "tell me more", "anything else")) and "airlift" in previous
    return latest or followup


def _audit(name: str) -> str:
    commands = {
        "timecodes": ["tools/check-timecodes.py"],
        "home_feed": ["tools/check-home-feed.py"],
        "covers": ["tools/check-covers.py"],
        "campaign_fronts": ["tools/build-campaign-fronts.py", "--check"],
        "commentaries": ["tools/check-commentaries.py", "--strict"],
    }
    if name == "json":
        script = "import json; from pathlib import Path; [json.loads(p.read_text(encoding='utf-8')) for p in Path('Reputation-Matrix2/data').glob('*.json')]; print('data JSON parse passed')"
        command = [sys.executable, "-c", script]
    elif name in commands:
        command = [sys.executable, *commands[name]]
    else:
        raise ValueError("audit must be json, commentaries, timecodes, home_feed, covers, or campaign_fronts")
    result = subprocess.run(command, cwd=ROOT, text=True, capture_output=True, timeout=30, check=False)
    output = (result.stdout + result.stderr).strip()
    if result.returncode:
        raise RuntimeError(f"audit {name} failed ({result.returncode}): {output[-4000:]}")
    return output[-8000:]


def execute(action: dict[str, Any], *, allow_writes: bool) -> tuple[str, bool]:
    name = str(action.get("action", ""))
    args = action.get("args") or {}
    if name == "repo_read":
        path = str(args.get("path", ""))
        try:
            return repo_tools.read_file(path, int(args.get("limit", 12000))), False
        except ValueError as error:
            message = str(error)
            if "not a file:" in message:
                recovery = repo_tools.recover_missing_reference(path)
                return "FAILED: " + message + "\nRECOVERY_SEARCH:\n" + json.dumps(recovery, ensure_ascii=False, indent=2), False
            if "larger than the bounded read limit" in message or "outside the checkout" in message:
                return "FAILED: " + message + "\nNEXT: use catalog_retrieve or a focused repository record; do not retry this broad path.", False
            raise
    if name == "repo_search":
        return json.dumps(repo_tools.search(str(args.get("term", "")), str(args.get("dir", "Reputation-Matrix2/data")), min(int(args.get("limit", 30)), 50), args.get("target_year")), ensure_ascii=False, indent=2), False
    if name == "parallel_read":
        return _parallel_read([str(value) for value in (args.get("paths") or [])], min(int(args.get("limit", 12000)), 16000)), False
    if name == "parallel_search":
        return _parallel_search(args.get("queries") or [], str(args.get("dir", "Reputation-Matrix2/data")), min(int(args.get("limit", 20)), 30)), False
    if name == "find_image_references":
        return json.dumps(repo_tools.find_image_references(args.get("entities") or [], args.get("terms") or [], min(int(args.get("limit", 6)), 6), args.get("target_year")), ensure_ascii=False, indent=2), False
    if name == "catalog_retrieve":
        return json.dumps(repo_tools.catalog_retrieve(str(args.get("source", "")), args.get("ids") or [], args.get("terms") or [], min(int(args.get("limit", 6)), 6), args.get("target_year")), ensure_ascii=False, indent=2), False
    if name == "analyze_event_seeds":
        return json.dumps(repo_tools.analyze_event_seeds(args.get("target_year"), min(int(args.get("limit", 20)), 50)), ensure_ascii=False, indent=2), False
    if name == "build_plot":
        return json.dumps(repo_tools.build_plot(args.get("ids") or [], args.get("terms") or [], args.get("target_year"), min(int(args.get("limit", 4)), 8)), ensure_ascii=False, indent=2), False
    if name == "create_commentary":
        if not allow_writes:
            return "APPROVAL_REQUIRED: a source-bound commentary draft is ready; the GUI must approve the canonical commentary write.", True
        commentary = repo_tools.make_commentary_object(str(args.get("source_id", "")), args.get("target_year"))
        result = repo_tools.add_json_object("Reputation-Matrix2/data/commentaries.json", commentary, "commentaries")
        return result, True
    if name == "optimize_prompt":
        return json.dumps(repo_tools.optimize_prompt(str(args.get("text", "")), str(args.get("mode", "article")), args.get("target_year")), ensure_ascii=False, indent=2), False
    if name == "self_audit":
        return json.dumps(repo_tools.self_audit(), ensure_ascii=False, indent=2), False
    if name == "python_analyze":
        return _python_analyze(args), False
    if name == "repo_status":
        return repo_tools.status() or "working tree clean", False
    if name == "repo_diff":
        raw_paths = args.get("paths", [])
        paths = [str(raw_paths)] if isinstance(raw_paths, str) else [str(value) for value in raw_paths]
        return repo_tools.diff(paths), False
    if name == "repo_patch":
        if not allow_writes:
            return "APPROVAL_REQUIRED: patch is ready but the GUI Allow local patches switch is off.", True
        repo_tools.patch(str(args.get("path", "")), str(args.get("old", "")), str(args.get("new", "")))
        return f"patched exactly one match in {args.get('path')}", True
    if name == "repo_add_object":
        if not allow_writes:
            return "APPROVAL_REQUIRED: the canonical object draft is ready but the GUI Allow local patches switch is off.", True
        value = args.get("object")
        if not isinstance(value, dict):
            raise ValueError("repo_add_object requires an object argument")
        return repo_tools.add_json_object(str(args.get("path", "")), value, str(args.get("collection", ""))), True
    if name == "run_audit":
        audit_name = args.get("name") or args.get("type") or ""
        return _audit(str(audit_name)), False
    if name == "queue_image":
        if not allow_writes:
            return "APPROVAL_REQUIRED: image queue is ready but the GUI Allow image jobs switch is off.", True
        workflow = repo_tools.safe_path(str(args.get("workflow", "")))
        raw_refs = args.get("references", [])
        if isinstance(raw_refs, str):
            raw_refs = [raw_refs]
        refs = [repo_tools.safe_path(str(x)) for x in raw_refs if str(x)]
        if not refs:
            found = repo_tools.find_image_references(args.get("entities") or [], args.get("terms") or [], 6, args.get("target_year"))
            if found and all(item.get("confidence") == "high" for item in found):
                refs = [repo_tools.safe_path(item["path"]) for item in found]
            elif found:
                choices = "; ".join(f"{item.get('name')} ({item.get('path')})" for item in found[:4])
                return "QUESTION: I found multiple possible image references and will not guess. Choose one: " + choices, True
        nodes = comfy.load_api_workflow(workflow)
        expects_refs = any(str(node.get("class_type", "")).lower() == "loadimage" for node in nodes.values())
        if refs and not expects_refs:
            return "QUESTION: The selected text-to-image workflow cannot consume reference images. Choose an edit workflow with a LoadImage node or remove the image input.", True
        if not refs and expects_refs:
            return "QUESTION: I could not find local character or event art for this edit workflow. Provide a reference image or name the character/event to use.", True
        result = comfy.queue_from_files(workflow, refs, str(args.get("prompt", "")),
                                        str(args.get("negative", "text, watermark, logo")),
                                        base=str(args.get("comfy", comfy.DEFAULT_COMFY)),
                                        seed=args.get("seed"),
                                        filename_prefix=str(args.get("output_prefix", "waluipedia/qwen-edit")),
                                        wait=bool(args.get("wait", False)))
        return json.dumps(result, ensure_ascii=False), True
    if name == "ask_user":
        return "QUESTION: " + str(args.get("question", "missing question")), True
    if name == "finish_task":
        return "TASK_FINISH_REQUEST: " + str(args.get("note", "")), True
    raise ValueError(f"unknown agent action: {name}")


def run_agent(request_text: str, *, run_id: str = "", endpoint: str = DEFAULT_ENDPOINT,
              model: str = "", allow_writes: bool = False, max_steps: int = 30,
              conversation: list[dict[str, Any]] | None = None,
              images: list[dict[str, Any]] | None = None,
              creation_context: dict[str, Any] | None = None,
              cancel_check: Callable[[], bool] | None = None,
              on_event: Callable[[dict[str, Any]], None] | None = None) -> dict[str, Any]:
    """Run the local WAH-Desk observe -> decide -> act loop.

    The planner creates internal work units automatically. The operator only
    supplies the request; the work units and checkpoint files are implementation
    details, not a second planning UI.
    """
    emit = on_event or (lambda event: None)
    normalized_conversation: list[dict[str, Any]] = []
    for item in (conversation or [])[-12:]:
        if not isinstance(item, dict) or item.get("role") not in {"user", "assistant"}:
            continue
        normalized: dict[str, Any] = {"role": str(item["role"]), "content": _clip(str(item.get("content", "")), 6000)}
        item_images = _image_parts(item.get("images") if isinstance(item.get("images"), list) else [])
        if item_images:
            normalized["images"] = [{"mime": "image/jpeg", "data": part["image_url"]["url"]} for part in item_images]
        normalized_conversation.append(normalized)
    conversation = normalized_conversation
    images = [image for image in (images or [])[:3] if isinstance(image, dict)]
    if creation_context:
        creation_context = {
            "mode": "creation",
            "year": _clip(creation_context.get("year", ""), 80),
            "campaign": _clip(creation_context.get("campaign", ""), 160),
            "player_role": _clip(creation_context.get("player_role", "self"), 200),
            "characters": _compact_creation_items(creation_context.get("characters"), 100),
            "events": _compact_creation_items(creation_context.get("events"), 100),
            "custom_characters": _compact_creation_items(creation_context.get("custom_characters"), 50),
            "custom_events": _compact_creation_items(creation_context.get("custom_events"), 50),
            "message_count": int(creation_context.get("message_count", 0) or 0),
            "checkpoint_due": bool(creation_context.get("checkpoint_due", False)),
            "checkpoint": creation_context.get("checkpoint") if isinstance(creation_context.get("checkpoint"), dict) else {},
        }
    if cancel_check and cancel_check():
        return {"status": "cancelled", "run": run_id, "message": "The local run was cancelled before it started."}
    if not run_id and not creation_context:
        intent = _request_intent(request_text, conversation)
        if intent["kind"] == "image" and not _image_subject_terms(request_text, conversation) and not images:
            message = "What should the image depict? Give me a subject or scene, and optionally a style. I will resolve any named canon references before queueing an image job."
            emit({"kind": "plan", "items": [{"id": "image-01", "title": "Clarify the image subject", "status": "in_progress", "acceptance": ["Obtain a concrete image subject", "Do not search unrelated repository files"]}]})
            emit({"kind": "action", "step": 1, "action": {"action": "ask_user", "args": {"question": message}}})
            emit({"kind": "result", "step": 1, "result": "QUESTION: " + message})
            return {"status": "needs_input", "run": f"image-{time.strftime('%Y%m%d-%H%M%S')}", "step": 1, "message": "QUESTION: " + message}
        if _missing_write_target(request_text, conversation):
            message = "What exact file or canonical entity should I change, and what should be added or changed? I will read and verify the target before requesting write approval."
            emit({"kind": "plan", "items": [{"id": "write-01", "title": "Identify the requested write target", "status": "in_progress", "acceptance": ["Resolve an exact target", "Do not guess a file or collection"]}]})
            emit({"kind": "action", "step": 1, "action": {"action": "ask_user", "args": {"question": message}}})
            emit({"kind": "result", "step": 1, "result": "QUESTION: " + message})
            return {"status": "needs_input", "run": f"write-{time.strftime('%Y%m%d-%H%M%S')}", "step": 1, "message": "QUESTION: " + message}
    if not run_id and not creation_context:
        status_answer = _fast_status_answer(request_text)
        search_answer = _fast_search_answer(request_text)
        commentary_locations = _fast_commentary_locations(request_text)
        if status_answer or search_answer or commentary_locations:
            run_id = f"local-{time.strftime('%Y%m%d-%H%M%S')}"
            emit({"kind": "plan", "items": [{"id": "local-01", "title": "Answer from the local repository", "status": "in_progress", "acceptance": ["Use bounded local evidence", "Return the result directly"]}]})
            emit({"kind": "thinking", "step": 1, "task": "local-01", "text": "Using a direct bounded repository operation instead of a repeated model turn."})
            if status_answer:
                result = repo_tools.status() or "working tree clean"
                emit({"kind": "action", "step": 1, "action": {"action": "repo_status", "args": {}}})
                emit({"kind": "result", "step": 1, "result": result})
                answer = status_answer
            elif commentary_locations:
                answer, results = commentary_locations
                emit({"kind": "action", "step": 1, "action": {"action": "repo_search", "args": {"term": "commentaries.json", "dir": ".", "limit": 20}}})
                emit({"kind": "result", "step": 1, "result": json.dumps(results, ensure_ascii=False)})
            else:
                answer, results = search_answer
                emit({"kind": "action", "step": 1, "action": {"action": "repo_search", "args": {"term": request_text, "dir": ".", "limit": 20}}})
                emit({"kind": "result", "step": 1, "result": json.dumps(results, ensure_ascii=False)})
            emit({"kind": "task_done", "step": 1, "task": "local-01"})
            emit({"kind": "assistant", "text": answer, "source": "bounded local repository"})
            return {"status": "done", "run": run_id, "steps": 1, "answer": answer}
        document_path = _document_read_path(request_text, conversation)
        if document_path:
            run_id = f"read-{time.strftime('%Y%m%d-%H%M%S')}"
            action = {"action": "repo_read", "args": {"path": document_path, "limit": 12000}}
            emit({"kind": "plan", "items": [{"id": "read-01", "title": f"Read {document_path}", "status": "in_progress", "acceptance": ["Open the canonical document", "Use its contents for the response"]}]})
            emit({"kind": "thinking", "step": 1, "task": "read-01", "text": "Opening the canonical guide directly; no repository-wide search is needed."})
            emit({"kind": "action", "step": 1, "action": action})
            try:
                content = repo_tools.read_file(document_path, 12000)
            except Exception as error:
                result = f"FAILED: {error}"
                emit({"kind": "result", "step": 1, "result": result})
                return {"status": "error", "run": run_id, "steps": 1, "message": result}
            emit({"kind": "result", "step": 1, "result": content})
            history = [{"action": json.dumps(action, ensure_ascii=False, sort_keys=True), "result": content}]
            try:
                answer = _final_answer(endpoint, model, request_text, conversation, history, _conversation_images(conversation, images), None)
            except Exception:
                answer = _evidence_read_answer(request_text, history) or content
            emit({"kind": "task_done", "step": 1, "task": "read-01"})
            emit({"kind": "assistant", "text": answer, "source": "canonical document"})
            return {"status": "done", "run": run_id, "steps": 1, "answer": answer}
    if not run_id and not creation_context and _is_fast_archive_lookup(request_text, conversation):
        run_id = f"lookup-{time.strftime('%Y%m%d-%H%M%S')}"
        followup = "what else happened" in request_text.lower() or "what happened next" in request_text.lower() or "tell me more" in request_text.lower()
        source_path = "Reputation-Matrix2/data/events.json" if followup else "Reputation-Matrix2/data/mainPage.json"
        title = "Read the latest filing record" if followup else "Resolve the current latest filing"
        emit({"kind": "plan", "items": [{"id": "lookup-01", "title": title, "status": "in_progress", "acceptance": ["Read the canonical archive data", "Resolve the linked event", "Answer plainly"]}]})
        emit({"kind": "thinking", "step": 1, "task": "lookup-01", "text": "Using the canonical archive record instead of repeating a repository-wide search."})
        if followup:
            emit({"kind": "action", "step": 1, "action": {"action": "repo_search", "args": {"term": "the_airlift_that_never_came", "dir": "Reputation-Matrix2/data", "limit": 5}}})
            raw_source = json.dumps(repo_tools.search("the_airlift_that_never_came", "Reputation-Matrix2/data", 5), ensure_ascii=False)
        else:
            emit({"kind": "action", "step": 1, "action": {"action": "repo_read", "args": {"path": source_path, "limit": 12000}}})
            raw_source = repo_tools.read_file(source_path, 12000)
        answer = _deterministic_answer(request_text, conversation)
        if answer:
            emit({"kind": "result", "step": 1, "result": f"Read the canonical archive index ({len(raw_source)} characters) and resolved the filing."})
            emit({"kind": "task_done", "step": 1, "task": "lookup-01"})
            emit({"kind": "assistant", "text": answer, "source": "canonical archive record"})
            return {"status": "done", "run": run_id, "steps": 1, "answer": answer}
        run_id = ""
    if not run_id:
        # Short chat turns do not need a second planning-generation request. The
        # bounded deterministic checklist is faster; long multi-part requests
        # still use parallel LM planning for better decomposition.
        use_lm_planner = len(request_text) > 6000 and not creation_context
        run_dir = planner.make_run(request_text, use_lm_planner, endpoint, model, 6000, 20)
        run_id = run_dir.name
    run_dir = RUNS / run_id
    if not run_dir.is_dir():
        raise ValueError(f"unknown run: {run_id}")
    if not request_text:
        request_path = run_dir / "request.txt"
        request_text = request_path.read_text(encoding="utf-8") if request_path.is_file() else ""
    check_path, items = _checklist(run_id)
    emit({"kind": "plan", "items": [{"id": item.get("id"), "title": item.get("title"), "status": item.get("status"), "acceptance": item.get("acceptance", [])} for item in items]})
    system = (
        "You are Waluigi's WAH-Desk action controller for a local archive agent. "
        "The operator gave you one request; decide how to complete it by using the "
        "small internal work units below. Choose exactly one JSON action per turn. "
        "Never invent a file path or canon fact. In a creation room, use the selected "
        "characters, events, year, campaign, and player role as scene continuity; retrieve "
        "the relevant canonical records before narrating a new scene. Prefer canonical files and specific "
        "paths over searching the entire checkout. For an explicit request to read, review, or open "
        "a known guide, open the canonical guide path directly; do not substitute a broad search or "
        "ask for a path the archive already identifies. If a tool returns FAILED or a missing path, "
        "treat that as recoverable evidence: use its recovery candidates, search the actual "
        "repository, and do not retry the same invalid path. If a name is approximate, misspelled, "
        "canonical/relevant directories; treat fuzzy results as candidates and never claim "
        "no match when the repository returns a close result. A search result is evidence for the "
        "next step, not the answer: resolve candidates, then read the relevant source record before "
        "summarizing. Do not stop merely because repo_search or catalog_retrieve returned something. "
        "When a search returns an entity ID or fuzzy candidate, use catalog_retrieve to read its "
        "focused canon record rather than reading a huge JSON file from the beginning. For story or roleplay continuation, retrieve the relevant "
        "characters, locations, events, or front-page canon first, then write from "
        "that evidence and the saved room conversation. In a creation room, the selected "
        "year is a hard canon cutoff: pass target_year to repository searches, catalog "
        "retrieval, and image discovery, and never reveal or pull an event dated later. "
        "Use parallel_read or "
        "parallel_search when several files or terms are independently needed. For Waluipedia "
        "articles, analyses, and commentary, write in Waluigi's first-person archival POV "
        "unless the user explicitly requests another voice. For roleplay, do not optimize "
        "the player's wording: answer in short, snappy, personality-led turns and never "
        "choose the player's action. For self-improvement requests, run self_audit, inspect "
        "the relevant files, and propose exact approved patches rather than modifying the "
        "runtime implicitly. For a request to add a commentary to an existing event, resolve "
        "the event ID and use create_commentary instead of emitting a large commentary object "
        "inside the action JSON. For an image job, "
        "use find_image_references for named entities before asking; selected creation art is "
        "already available, and an attached image is automatically used by an approved edit "
        "workflow when the request has one. Ask only when candidates are ambiguous or no "
        "compatible input exists. For every canonical write—commentary, investigation, analysis, prop, "
        "event, character, location, quest, XP, or any other object—follow the same full workflow: "
        "identify the exact target, retrieve the current source and schema, draft the smallest valid "
        "change, stop for explicit approval, write only after approval, run the relevant audit, and "
        "report the changed path and validation. For expand, extend, update, or rewrite requests, preserve "
        "the existing record and use catalog_retrieve or a focused read; never read a whole oversized catalog "
        "when the target ID is known. Never turn an underspecified request into a guessed write just because "
        "one tool is available. For image requests, require a concrete subject or "
        "attached image, resolve named canon references before queueing, select a compatible workflow, "
        "request approval, queue the job, and report failures or output verification. After a patch, "
        "run an audit. Keep each action small. Return JSON exactly as "
        "{\"action\":\"name\",\"args\":{...}}.\n\n"
        "Allowed actions:\n" + "\n".join(f"- {k}: {v}" for k, v in TOOL_DESCRIPTIONS.items())
    )
    history: list[dict[str, str]] = _load_history(run_dir)
    if creation_context and not history:
        # Prefetch selected canon identifiers once per new creation turn. This
        # makes roleplay accurate even when the model tries to finish before
        # selecting a repository tool, while keeping the search bounded.
        terms = []
        for item in (creation_context.get("characters", []) + creation_context.get("events", [])):
            identifier = str(item.get("id", "")) if isinstance(item, dict) else ""
            if identifier:
                terms.append(identifier)
        for item in (creation_context.get("custom_characters", []) + creation_context.get("custom_events", [])):
            label = str(item.get("name", item.get("title", ""))) if isinstance(item, dict) else ""
            if label:
                terms.append(label)
        if terms:
            canon_ids = [str(item.get("id")) for item in (creation_context.get("characters", []) + creation_context.get("events", [])) if isinstance(item, dict) and item.get("id")]
            custom_terms = [str(item.get("name", item.get("title", ""))) for item in (creation_context.get("custom_characters", []) + creation_context.get("custom_events", [])) if isinstance(item, dict) and item.get("name", item.get("title", ""))]
            prefetch_records = repo_tools.catalog_retrieve(ids=canon_ids[:8], terms=custom_terms[:4], limit=10, target_year=creation_context.get("year", ""))
            prefetch = json.dumps(prefetch_records, ensure_ascii=False, indent=2)
            history.append({"action": "creation_prefetch", "result": _clip(prefetch, 12000)})
            emit({"kind": "action", "step": 0, "action": {"action": "catalog_retrieve", "args": {"ids": canon_ids[:8], "terms": custom_terms[:4], "limit": 10}}})
            emit({"kind": "result", "step": 0, "result": prefetch})
    last_audit = False
    requires_audit = False
    for step in range(1, max(1, min(int(max_steps), 60)) + 1):
        pending = next((item for item in items if item.get("status") in {"pending", "in_progress"}), None)
        if pending is None:
            try:
                answer = _final_answer(endpoint, model, request_text, conversation, history, _conversation_images(conversation, images), creation_context)
            except Exception as error:
                message = _friendly_model_error(error)
                emit({"kind": "error", "step": step, "result": message})
                return {"status": "error", "run": run_id, "steps": step - 1, "message": message}
            emit({"kind": "assistant", "text": answer})
            return {"status": "done", "run": run_id, "steps": step - 1, "answer": answer}
        if cancel_check and cancel_check():
            return {"status": "cancelled", "run": run_id, "steps": step - 1, "message": "The local run was cancelled."}
        pending["status"] = "in_progress"
        _save_checklist(check_path, items)
        emit({"kind": "plan_update", "items": [{"id": item.get("id"), "title": item.get("title"), "status": item.get("status"), "acceptance": item.get("acceptance", [])} for item in items]})
        context = {
            "run": run_id,
            "conversation": _redact_conversation(conversation),
            "operator_request": _clip(request_text, 12000),
            "attached_images": [{"filename": str(image.get("filename", "image")), "mime": str(image.get("mime", ""))} for image in images],
            "website_canon": "The live Waluipedia site is represented by Reputation-Matrix2/data and its app pages. Read those canonical files before inventing archive facts.",
            "creation_room": creation_context or {},
            "available_image_references": _creation_image_paths(creation_context),
            "current_internal_work_unit": pending,
            "recent_tool_results": history[-7:],
            "workflow": {
                "intent": _request_intent(request_text, conversation),
                "resolved_targets": _referenced_event_candidates(request_text, conversation)[:3],
                "completed_actions": sorted(_history_action_names(history)),
                "write_sequence": ["resolve target", "read source/schema", "draft", "explicit approval", "write", "audit"],
                "image_sequence": ["concrete subject", "resolve references", "select compatible workflow", "explicit approval", "queue", "verify/report"],
                "do_not_skip": "A search is not a resolved source; a draft is not an approved write; an image reference lookup is not an image job.",
            },
            "write_approval": allow_writes,
            "step": step,
        }
        emit({"kind": "thinking", "step": step, "task": pending["id"]})
        try:
            action = _ask(endpoint, model, system, _clip(context, 18000), images=_conversation_images(conversation, images))
            if creation_context and action.get("action") in {"repo_search", "catalog_retrieve", "find_image_references", "analyze_event_seeds", "build_plot", "create_commentary", "optimize_prompt", "queue_image"}:
                action_args = dict(action.get("args") or {})
                action_args.setdefault("target_year", creation_context.get("year", ""))
                action["args"] = action_args
            resolved_read_path = _document_read_path(request_text, conversation)
            if resolved_read_path and action.get("action") in {"repo_search", "ask_user", "finish_task"}:
                action = {"action": "repo_read", "args": {"path": resolved_read_path, "limit": 12000}}
            intent = _request_intent(request_text, conversation)
            if intent["kind"] == "image" and not images and not _history_action_names(history).intersection({"find_image_references", "queue_image"}) and not _creation_image_paths(creation_context):
                image_terms = _image_subject_terms(request_text, conversation)
                if image_terms:
                    action = {"action": "find_image_references", "args": {"terms": image_terms, "limit": 6}}
            preflight = _required_preflight_action(request_text, conversation, history, action)
            if preflight is not None:
                action = preflight
            if _request_intent(request_text, conversation)["kind"] == "write" and action.get("action") == "finish_task" and not _history_action_names(history).intersection({"repo_patch", "repo_add_object", "create_commentary"}):
                action = {"action": "ask_user", "args": {"question": "I have read the evidence but have not made the requested canonical change. Confirm the exact object or file to write, and I will prepare the approved write and audit it instead of marking the request complete."}}
            if action.get("action") == "queue_image":
                action_args = dict(action.get("args") or {})
                raw_references = action_args.get("references", [])
                has_references = bool(raw_references)
                expects_references = False
                try:
                    workflow_path = repo_tools.safe_path(str(action_args.get("workflow", "")))
                    nodes = comfy.load_api_workflow(workflow_path)
                    expects_references = any(str(node.get("class_type", "")).lower() == "loadimage" for node in nodes.values())
                except (OSError, ValueError, json.JSONDecodeError):
                    pass
                if not has_references and expects_references and allow_writes:
                    attached_refs = _attached_image_paths(images, run_id)
                    auto_refs = attached_refs or _creation_image_paths(creation_context)
                    if auto_refs:
                        action_args["references"] = auto_refs
                        action["args"] = action_args
                elif not has_references and creation_context and expects_references:
                    # Keep the selected canon assets visible in the approval
                    # action without materializing browser data before approval.
                    auto_refs = _creation_image_paths(creation_context)
                    if auto_refs:
                        action_args["references"] = auto_refs
                        action["args"] = action_args
            emit({"kind": "action", "step": step, "action": action})
            signature = json.dumps(action, ensure_ascii=False, sort_keys=True)
            repeats = sum(record.get("action") == signature for record in history[-4:])
            if repeats >= 2:
                result = "DUPLICATE_ACTION_BLOCKED: the same action was requested repeatedly; closing this work unit so the final answer can use the evidence already collected."
                _write_log(run_dir, {"at": time.time(), "step": step, "task": pending["id"], "action": action, "result": result})
                history.append({"action": signature, "result": result})
                emit({"kind": "blocked", "step": step, "result": result})
                pending["status"] = "done"
                pending["note"] = "Repeated identical tool action blocked after evidence was collected."
                _save_checklist(check_path, items)
                emit({"kind": "task_done", "step": step, "task": pending["id"]})
                emit({"kind": "plan_update", "items": [{"id": item.get("id"), "title": item.get("title"), "status": item.get("status"), "acceptance": item.get("acceptance", [])} for item in items]})
                answer = _deterministic_answer(request_text, conversation) or _evidence_answer(request_text, history)
                emit({"kind": "assistant", "text": answer, "source": "bounded local evidence"})
                return {"status": "done", "run": run_id, "steps": step, "answer": answer, "warning": "Repeated identical action was stopped."}
            result, side_effect = execute(action, allow_writes=allow_writes)
            if action.get("action") in {"repo_patch", "repo_add_object", "create_commentary", "queue_image"} and not result.startswith("APPROVAL_REQUIRED"):
                requires_audit = action.get("action") in {"repo_patch", "repo_add_object", "create_commentary"}
            if action.get("action") == "run_audit":
                last_audit = True
            record = {"at": time.time(), "step": step, "task": pending["id"], "action": action, "result": _clip(result)}
            _write_log(run_dir, record)
            history.append({"action": signature, "result": _clip(result, 6000)})
            emit({"kind": "result", "step": step, "result": result})
            read_only_request = not any(word in request_text.casefold() for word in ("edit", "change", "update", "write", "patch", "create", "add", "remove", "fix"))
            if read_only_request and not creation_context and action.get("action") == "repo_status":
                pending["status"] = "done"
                pending["note"] = "Read-only evidence was sufficient; stopped without a redundant model turn."
                _save_checklist(check_path, items)
                emit({"kind": "task_done", "step": step, "task": pending["id"]})
                emit({"kind": "plan_update", "items": [{"id": item.get("id"), "title": item.get("title"), "status": item.get("status"), "acceptance": item.get("acceptance", [])} for item in items]})
                answer = _deterministic_answer(request_text, conversation) or _evidence_answer(request_text, history)
                emit({"kind": "assistant", "text": answer, "source": "bounded local evidence"})
                return {"status": "done", "run": run_id, "steps": step, "answer": answer}
            if action.get("action") == "finish_task":
                if requires_audit and not last_audit:
                    history.append({"action": "system", "result": "Cannot finish a changed work unit before its audit."})
                    emit({"kind": "blocked", "step": step, "result": "Run an audit before finishing the changed files."})
                else:
                    pending["status"] = "done"
                    pending["note"] = str(action.get("args", {}).get("note", "Completed by agent after audit."))[:2000]
                    _save_checklist(check_path, items)
                    last_audit = False
                    requires_audit = False
                    emit({"kind": "task_done", "step": step, "task": pending["id"]})
                    emit({"kind": "plan_update", "items": [{"id": item.get("id"), "title": item.get("title"), "status": item.get("status"), "acceptance": item.get("acceptance", [])} for item in items]})
            if action.get("action") == "ask_user" or result.startswith("APPROVAL_REQUIRED") or result.startswith("QUESTION:"):
                return {"status": "approval_required" if result.startswith("APPROVAL_REQUIRED") else "needs_input", "run": run_id, "step": step, "message": result}
        except Exception as error:
            fallback = _deterministic_answer(request_text, conversation)
            if fallback:
                emit({"kind": "assistant", "text": fallback, "source": "local archive fallback"})
                return {"status": "done", "run": run_id, "steps": step - 1, "answer": fallback}
            message = _friendly_model_error(error)
            result = f"ERROR: {message}"
            history.append({"action": "system", "result": result})
            _write_log(run_dir, {"at": time.time(), "step": step, "task": pending["id"], "error": message})
            evidence = _evidence_answer(request_text, history)
            has_tool_evidence = any(record.get("action") != "system" and record.get("result") for record in history)
            emit({"kind": "error", "step": step, "result": result})
            if has_tool_evidence and not creation_context:
                # A model failure after a successful local read should still
                # return the evidence, but clearly label the missing synthesis.
                emit({"kind": "assistant", "text": evidence, "source": "bounded local evidence"})
                return {"status": "done", "run": run_id, "steps": step, "answer": evidence, "warning": message}
            return {"status": "error", "run": run_id, "step": step, "message": message}
    return {"status": "step_limit", "run": run_id, "steps": max_steps, "message": "Waluigi's WAH-Desk stopped at its bounded turn limit; its internal process remains checkpointed."}
