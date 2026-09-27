#!/usr/bin/env python3
"""Fresh chat-first runtime for the local Waluipedia assistant.

The important rule is deliberately simple: a normal message is a normal chat
message. The model is not asked to choose a repository action, and no repository
or image function runs, unless the user clearly asks for one. Explicit archive
requests enter a small, deterministic evidence workflow after the gate.
"""
from __future__ import annotations

import json
import os
import re
import socket
import time
import urllib.error
import urllib.request
from pathlib import Path
from typing import Any, Callable

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
RUNS = HERE.parents[1] / "tools" / ".local-agent-runs"
DEFAULT_ENDPOINT = os.environ.get("LM_STUDIO_URL", "http://127.0.0.1:1234/v1/chat/completions")
DEFAULT_TIMEOUT = max(2, min(int(os.environ.get("LM_STUDIO_TIMEOUT_SECONDS", "30") or 30), 120))

# Import the bounded repository helpers, but never call them from the chat path.
import sys
sys.path.insert(0, str(HERE))
import repo_tools  # noqa: E402


READ_WORDS = (
    "read", "open", "review", "search", "find", "look up", "lookup",
    "retrieve", "show me", "where is", "which file", "verify", "validate",
    "audit",
)
WRITE_WORDS = (
    "edit", "change", "update", "patch", "create", "add", "save", "remove",
    "delete", "write to", "append",
)
IMAGE_WORDS = ("image", "picture", "illustration", "portrait", "artwork", "art")
CANON_WORDS = (
    "repository", "repo", "archive", "canon", "canonical", "waluipedia",
    "source record", "json", "file", "characters.json", "events.json",
    "locations.json",
)
DRAFT_WORDS = (
    "draft", "brainstorm", "roleplay", "pretend", "imagine", "invent",
    "fictional", "make up", "for my story", "for a story", "for the game",
)


def _clip(value: Any, limit: int = 9000) -> str:
    text = value if isinstance(value, str) else json.dumps(value, ensure_ascii=False, indent=2)
    return text[:limit] + ("\n[… clipped …]" if len(text) > limit else "")


def _lower(text: str) -> str:
    return re.sub(r"\s+", " ", text.casefold()).strip()


def _has_word(text: str, words: tuple[str, ...]) -> bool:
    lowered = _lower(text)
    return any(word in lowered for word in words)


def _has_explicit_path(text: str) -> str | None:
    match = re.search(r"(?:^|\s)((?:Reputation-Matrix2|docs|tools|workflow)/[^\s,;]+)", text, re.I)
    if not match:
        return None
    return match.group(1).rstrip(".,!?)]}")


def _profile_request_details(text: str, conversation: list[dict[str, Any]] | None = None) -> dict[str, str] | None:
    """Recognize a source-backed character profile request without a model call."""
    lowered = _lower(text)
    profile_words = bool(re.search(r"\b(?:char(?:acter|cater)|persona)\s+(?:profil(?:e|l)|pr(?:o)?file)\b|\bprofile\s+for\b", lowered))
    if not profile_words:
        return None
    source = ""
    source_match = re.search(r"(?:learn\s+about\s+(?:him|her|them)\s+from|from|source(?:\s+record)?[: ]+)\s*(.+?)(?:\s+you can learn|\s*$)", text, re.I)
    if source_match:
        source = source_match.group(1).strip(" .!?\\\"")
    if not source and re.search(r"seven\s+nights\s+at\s+fazbear", lowered):
        source = "The Seven Nights at Fazbear: A Complete Record"
    target = ""
    target_match = re.search(r"\bfor\s+([A-Za-z][A-Za-z'’-]{2,40})\b", text, re.I)
    if target_match and target_match.group(1).casefold() not in {"him", "her", "them"}:
        target = target_match.group(1).strip()
    if not target and conversation:
        prior = "\n".join(str(item.get("content", "")) for item in conversation if item.get("role") == "user")
        target_match = re.search(r"\bfor\s+([A-Za-z][A-Za-z'’-]{2,40})\b", prior, re.I)
        if target_match and target_match.group(1).casefold() not in {"him", "her", "them"}:
            target = target_match.group(1).strip()
    if not source and conversation:
        prior = "\n".join(str(item.get("content", "")) for item in conversation if item.get("role") == "user")
        if re.search(r"seven\s+nights\s+at\s+fazbear", prior, re.I):
            source = "The Seven Nights at Fazbear: A Complete Record"
    if not target or not source:
        return None
    return {"target": target, "source": source}


def _is_prose_request(text: str) -> bool:
    lowered = _lower(text)
    if _profile_request_details(text):
        return False
    if any(word in lowered for word in DRAFT_WORDS):
        return True
    # These are requests for prose, not a request to save a repository object.
    return bool(re.search(
        r"\b(?:write|compose|create|make)\s+(?:me\s+|us\s+|a\s+|an\s+|some\s+)?(?:short\s+|brief\s+)?(?:bio|profile|description|scene|story|dialogue|blurb|paragraph|summary|article)\b",
        lowered,
    ))


def _has_canonical_destination(text: str) -> bool:
    lowered = _lower(text)
    if _has_explicit_path(text):
        return True
    if re.search(r"\b(?:to|in|into|inside)\s+(?:the\s+)?(?:repo|repository|archive|canon|file|record|entry|json|collection)\b", lowered):
        return True
    if re.search(r"\b(?:create|edit|change|update|add|save|write)\b.*\b(?:file|json|record|entry|object|collection)\b", lowered):
        return True
    if any(word in lowered for word in ("characters.json", "events.json", "locations.json")):
        return True
    return False


def _explicit_image(text: str, images: list[dict[str, Any]] | None) -> bool:
    if images:
        return True
    lowered = _lower(text)
    return bool(re.search(r"\b(?:generate|make|create|edit|show|draw)\b.{0,32}\b(?:image|picture|illustration|portrait|artwork|art)\b", lowered))


def _explicit_read(text: str) -> bool:
    lowered = _lower(text)
    if any(word in lowered for word in READ_WORDS):
        return True
    if re.search(r"\bwhat\s+does\s+(?:the|this|that|an?)\s+(?:article|record|source|archive|file)\s+say\b", lowered):
        return True
    if re.search(r"\b(?:according to|from)\s+(?:the\s+)?(?:canon|archive|article|record|source)\b", lowered):
        return True
    return False


def _explicit_write(text: str) -> bool:
    lowered = _lower(text)
    if _profile_request_details(text):
        return True
    if _is_prose_request(text):
        return False
    if not any(word in lowered for word in WRITE_WORDS):
        return False
    # A write is canonical only when it names a destination or an archive
    # artifact. “Write a bio” remains ordinary drafting.
    return _has_canonical_destination(text) or bool(re.search(
        r"\b(?:create|add|edit|update|change)\b.*\b(?:character|event|location|commentary|investigation|object|record)\b",
        lowered,
    ))


def _generic_creation_request(text: str) -> bool:
    lowered = _lower(text)
    if not any(word in lowered for word in ("create", "add", "make", "write", "edit", "update")):
        return False
    if any(word in lowered for word in DRAFT_WORDS):
        return False
    if re.search(r"\b(?:create|add|make|write)\b.*\b(?:file|record|entry|object)\b", lowered) and not _has_explicit_path(text):
        return True
    return bool(re.search(
        r"\b(?:a|an|new|some|several|multiple|various)\s+(?:new\s+)?(?:character|person|people|event|location|file|record|entry|object)s?\b",
        lowered,
    )) or bool(re.search(r"\bpeople\b.*\b(?:need|want|should)\b.*\b(?:create|add|make|write)\b", lowered))


def _ambiguous_archive_question(text: str, conversation: list[dict[str, Any]]) -> str | None:
    lowered = _lower(text)
    if _generic_creation_request(text):
        if re.search(r"\b(?:people|persons|characters)\b", lowered):
            return "Which people or characters should I create? Give me their names first; I will read the source only after the targets are clear."
        return "What exact file or canonical entity do you want to create or change? Give me the name or path and the details to include."
    if _explicit_image(text, None) or _explicit_write(text) or _explicit_read(text) or _is_prose_request(text):
        return None
    has_archive_noun = bool(re.search(r"\b(?:article|record|source|archive|file|character|event|location|canon)\b", lowered))
    looks_like_reassurance = bool(re.search(r"\b(?:right|enough|all it needs|everything|is that okay)\b", lowered))
    if has_archive_noun and looks_like_reassurance:
        return "I’m not sure whether you want an archive lookup or a conversation. Should I read the source and use it, or are you only discussing it?"
    if re.search(r"\b(?:let['’]?s|lets)\s+start\b", lowered) and has_archive_noun and conversation:
        prior = " ".join(str(item.get("content", "")) for item in conversation if item.get("role") == "user")
        if _has_word(prior, ("create", "add", "file", "character", "archive")):
            return "Before I search: should I read the named source and draft a canonical file, or are we just talking through the idea?"
    return None


def classify_request(text: str, images: list[dict[str, Any]] | None = None,
                     conversation: list[dict[str, Any]] | None = None) -> dict[str, Any]:
    """Classify without searching, reading, or asking the language model."""
    text = str(text or "").strip()
    conversation = conversation or []
    if _explicit_image(text, images):
        subject = _image_subject(text)
        return {"kind": "image", "needed": True, "subject": subject}
    profile = _profile_request_details(text, conversation)
    if profile:
        return {"kind": "profile", "needed": True, **profile, "path": "Reputation-Matrix2/data/characters.json"}
    clarification = _ambiguous_archive_question(text, conversation)
    if clarification:
        return {"kind": "clarify", "needed": False, "question": clarification}
    if _explicit_write(text):
        return {"kind": "write", "needed": True, "path": _has_explicit_path(text)}
    if _explicit_read(text):
        return {"kind": "read", "needed": True, "path": _has_explicit_path(text)}
    # Everything else is chat, including ordinary questions, roleplay, and
    # drafting. This is the first and most important safety boundary.
    return {"kind": "chat", "needed": False}


def _image_subject(text: str) -> str:
    match = re.search(r"\b(?:of|for|depict(?:ing)?|featuring|show(?:ing)?)\s+(.+)", text, re.I)
    if not match:
        return ""
    return re.split(r"\b(?:in the style of|using|with a|please)\b", match.group(1), maxsplit=1, flags=re.I)[0].strip(" .?!")[:240]


def _extract_search_term(text: str) -> str:
    path = _has_explicit_path(text)
    if path:
        return path
    quoted = re.findall(r"[\"']([^\"']{2,180})[\"']", text)
    if quoted:
        return quoted[-1].strip()
    match = re.search(r"\b(?:about|for|of|from|named|called)\s+(.+)", text, re.I)
    if match:
        value = re.split(r"\b(?:in the|according to|please|right now)\b", match.group(1), maxsplit=1, flags=re.I)[0]
        return value.strip(" .?!")[:180]
    tokens = re.findall(r"[A-Za-z0-9][A-Za-z0-9'’_-]{2,}", text)
    stop = {"read", "open", "review", "search", "find", "look", "lookup", "retrieve", "show", "where", "which", "verify", "validate", "audit", "the", "this", "that", "article", "record", "source", "archive", "repository", "repo", "canon", "canonical"}
    useful = [token for token in tokens if token.casefold() not in stop]
    return " ".join(useful[-5:])[:180]


def _redact_conversation(conversation: list[dict[str, Any]]) -> list[dict[str, str]]:
    return [
        {"role": str(item.get("role", "")), "content": _clip(item.get("content", ""), 5000)}
        for item in conversation[-12:] if isinstance(item, dict) and item.get("role") in {"user", "assistant"}
    ]


def _complete(endpoint: str, model: str, system: str, user: str, *,
              conversation: list[dict[str, Any]] | None = None,
              timeout: int = DEFAULT_TIMEOUT) -> str:
    messages: list[dict[str, Any]] = [{"role": "system", "content": system}]
    messages.extend(_redact_conversation(conversation or []))
    messages.append({"role": "user", "content": user})
    payload: dict[str, Any] = {"messages": messages, "temperature": 0.2, "max_tokens": 1400}
    if model:
        payload["model"] = model
    request = urllib.request.Request(
        endpoint, data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"}, method="POST",
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        body = json.loads(response.read())
    content = body.get("choices", [{}])[0].get("message", {}).get("content", "")
    if not isinstance(content, str) or not content.strip():
        raise ValueError("the local model returned no text")
    return content.strip()


def _model_error(error: Exception) -> str:
    if isinstance(error, urllib.error.HTTPError):
        return f"LM Studio returned HTTP {error.code}. Load a chat model and retry."
    if isinstance(error, (urllib.error.URLError, ConnectionError, socket.timeout, TimeoutError)):
        return "LM Studio is offline. Start the local model server and retry. No repository or image tool was called."
    return f"The local model could not answer: {error}. No repository or image tool was called."


def _chat_answer(text: str, conversation: list[dict[str, Any]], endpoint: str, model: str) -> str:
    system = (
        "You are a normal, helpful chat assistant. Answer the latest user message directly. "
        "Do not invent repository facts, do not claim to have searched files, and do not output JSON, "
        "tool calls, internal plans, or fake Waluigi catchphrases. If the user asks for a draft, draft it. "
        "If the request is ambiguous, ask one concise clarifying question."
    )
    try:
        return _complete(endpoint, model, system, text, conversation=conversation)
    except Exception as error:
        return _model_error(error)


def _evidence_answer(text: str, evidence: Any, conversation: list[dict[str, Any]], endpoint: str, model: str) -> str:
    """Return grounded evidence without a second hallucination-prone model turn."""
    if isinstance(evidence, list) and evidence:
        return "I found these bounded archive matches:\n\n" + "\n".join(
            f"- {item.get('path', '')}: {item.get('preview', '')}" for item in evidence[:8] if isinstance(item, dict)
        )
    if isinstance(evidence, str) and evidence:
        return "I read the requested file. Here is the bounded content:\n\n" + evidence[:9000]
    return "I found no matching archive evidence. Give me a more specific name or path."


def _emit_plan(emit: Callable[[dict[str, Any]], None], title: str, needed: bool, reason: str, minimum: str) -> None:
    emit({"kind": "plan", "items": [{"id": "request-01", "title": title, "status": "in_progress", "acceptance": ["Understand the request", "Take only the minimum required action", "Return a grounded answer"]}]})
    emit({"kind": "tool_check", "step": 0, "needed": needed, "reason": reason, "minimum_action": minimum, "completed_actions": []})


def _save_state(run_id: str, value: dict[str, Any]) -> None:
    if not run_id:
        return
    directory = RUNS / run_id
    directory.mkdir(parents=True, exist_ok=True)
    (directory / "state.json").write_text(json.dumps(value, indent=2, ensure_ascii=False), encoding="utf-8")


def _load_state(run_id: str) -> dict[str, Any]:
    path = RUNS / run_id / "state.json"
    if not path.is_file():
        return {}
    try:
        value = json.loads(path.read_text(encoding="utf-8"))
        return value if isinstance(value, dict) else {}
    except (OSError, json.JSONDecodeError):
        return {}


def _execute_read(request_text: str, path: str | None, target_year: str | None = None) -> tuple[dict[str, Any], Any]:
    if path:
        content = repo_tools.read_file(path, 12000)
        return {"action": "repo_read", "args": {"path": path, "limit": 12000}}, content
    term = _extract_search_term(request_text)
    if len(term) < 2:
        raise ValueError("I need a specific name, phrase, or repository path before I search.")
    results = repo_tools.search(term, "Reputation-Matrix2/data", 8, target_year)
    return {"action": "repo_search", "args": {"term": term, "dir": "Reputation-Matrix2/data", "limit": 8}}, results


def _resolve_profile_source(source_title: str, target: str) -> tuple[list[dict[str, Any]], dict[str, Any], dict[str, Any]]:
    matches = repo_tools.search(source_title, "Reputation-Matrix2/data", 6)
    ids = [str(item.get("entity_id")) for item in matches if item.get("entity_id") and "events.json" in str(item.get("path", ""))]
    records = repo_tools.catalog_retrieve("events", ids=ids[:3], limit=3)
    if not records:
        raise ValueError(f"I could not resolve the source record {source_title!r}.")
    source = records[0]
    target_lower = target.casefold()
    people = source.get("participants", []) if isinstance(source.get("participants"), list) else []
    named = [person for person in people if isinstance(person, dict) and target_lower in str(person.get("name", "")).casefold()]
    identified = [person for person in people if isinstance(person, dict) and target_lower in str(person.get("id", "")).casefold()]
    candidates = named or identified
    if not candidates:
        raise ValueError(f"I found the source record, but it does not identify a participant matching {target!r}.")
    person = candidates[0]
    return matches, source, person


def _profile_object(source: dict[str, Any], person: dict[str, Any]) -> dict[str, Any]:
    name = str(person.get("name", person.get("id", "Unnamed participant")))
    source_name = str(source.get("name", source.get("id", "source record")))
    role = str(person.get("role", "Role not separately specified in the source record."))
    summary = str(source.get("summary", ""))
    return {
        "id": str(person.get("id", re.sub(r"[^a-z0-9]+", "_", name.casefold()).strip("_"))),
        "name": name,
        "title": f"{name} — Source Profile",
        "race": "Not separately specified in the source record",
        "status": role,
        "affiliation": "Fazbear franchise / source-record participant",
        "summary": f"{name} is identified in {source_name} as {role}. {summary[:1600]}",
        "description": f"This profile is grounded in {source_name}. The record lists {name} with the role: {role}.\n\n{summary[:2400]}",
        "keyEvents": [str(source.get("id", ""))],
        "relatedArticles": [str(item) for item in (source.get("relatedArticles", []) or [])[:20]],
        "sourceRecord": str(source.get("id", source_name)),
        "image": "",
    }


def _approval_request(text: str) -> bool:
    return bool(re.fullmatch(r"\s*(?:yes|approve|approved|apply|apply it|write it|go ahead|do it|confirm)\s*[.!]?\s*", text, re.I))


def _approved_profile_run(run_id: str, request_text: str, emit: Callable[[dict[str, Any]], None]) -> dict[str, Any] | None:
    state = _load_state(run_id) if run_id else {}
    draft = state.get("draft") if isinstance(state.get("draft"), dict) else None
    if not draft or not _approval_request(request_text):
        return None
    path = str(state.get("path", "Reputation-Matrix2/data/characters.json"))
    _emit_plan(emit, "Apply the approved character profile", True, "The user approved the exact grounded draft from the previous step.", "write one object, validate JSON, report the path")
    action = {"action": "repo_add_object", "args": {"path": path, "collection": "characters", "object": draft}}
    emit({"kind": "action", "step": 1, "action": action})
    try:
        result = repo_tools.add_json_object(path, draft)
        emit({"kind": "result", "step": 1, "result": result})
        audit = json.loads(repo_tools.safe_path(path).read_text(encoding="utf-8"))
        if not isinstance(audit, list):
            raise ValueError("character collection is not a JSON list")
        emit({"kind": "action", "step": 2, "action": {"action": "run_audit", "args": {"name": "json"}}})
        emit({"kind": "result", "step": 2, "result": f"JSON audit passed for {path} ({len(audit)} records)."})
        answer = f"Applied the grounded character profile for {draft.get('name', draft.get('id'))} to {path}. JSON validation passed."
        emit({"kind": "assistant", "text": answer, "source": "approved source-backed write"})
        emit({"kind": "task_done", "step": 2, "task": "request-01"})
        return {"status": "done", "run": run_id, "steps": 2, "answer": answer}
    except Exception as error:
        message = f"I did not complete the write: {error}"
        emit({"kind": "error", "step": 1, "result": message})
        return {"status": "error", "run": run_id, "step": 1, "message": message}


def run_agent(request_text: str, *, run_id: str = "", endpoint: str = DEFAULT_ENDPOINT,
              model: str = "", allow_writes: bool = False, max_steps: int = 30,
              conversation: list[dict[str, Any]] | None = None,
              images: list[dict[str, Any]] | None = None,
              creation_context: dict[str, Any] | None = None,
              cancel_check: Callable[[], bool] | None = None,
              on_event: Callable[[dict[str, Any]], None] | None = None) -> dict[str, Any]:
    """Run one request with a chat-first gate and deterministic tool routing."""
    emit = on_event or (lambda event: None)
    conversation = [item for item in (conversation or [])[-12:] if isinstance(item, dict)]
    images = [item for item in (images or [])[:3] if isinstance(item, dict)]
    if run_id and not request_text:
        saved = _load_state(run_id)
        request_text = str(saved.get("request", ""))
        if not conversation:
            conversation = saved.get("conversation", []) if isinstance(saved.get("conversation"), list) else []
    request_text = str(request_text or "").strip()
    if cancel_check and cancel_check():
        return {"status": "cancelled", "run": run_id, "message": "Cancelled before the request started."}
    if not request_text:
        return {"status": "needs_input", "run": run_id, "message": "Tell me what you want to do."}

    approved = _approved_profile_run(run_id, request_text, emit)
    if approved is not None:
        return approved

    decision = classify_request(request_text, images, conversation)
    kind = str(decision["kind"])
    if kind == "chat":
        _emit_plan(emit, "Answer as a normal conversation", False, "This is conversation, roleplay, or drafting; no repository or image tool is required.", "none")
        answer = _chat_answer(request_text, conversation, endpoint, model)
        emit({"kind": "assistant", "text": answer, "source": "chat; no tools called"})
        emit({"kind": "task_done", "step": 0, "task": "request-01"})
        return {"status": "done", "run": run_id or f"chat-{int(time.time())}", "steps": 0, "answer": answer}

    if kind == "clarify":
        question = str(decision.get("question", "What would you like me to do?"))
        _emit_plan(emit, "Clarify before using tools", False, "The message is not specific enough to distinguish conversation from archive work.", "ask one question; do not search")
        emit({"kind": "action", "step": 1, "action": {"action": "ask_user", "args": {"question": question}}})
        emit({"kind": "result", "step": 1, "result": "QUESTION: " + question})
        return {"status": "needs_input", "run": run_id or f"clarify-{int(time.time())}", "step": 1, "message": "QUESTION: " + question}

    if kind == "image":
        subject = str(decision.get("subject", ""))
        if not subject:
            question = "What should the image depict? Give me a subject or scene first. I will not search unrelated files."
            _emit_plan(emit, "Ask for the image subject", True, "An image request needs a concrete subject before any image/reference operation.", "ask for the subject; do not search")
            emit({"kind": "action", "step": 1, "action": {"action": "ask_user", "args": {"question": question}}})
            emit({"kind": "result", "step": 1, "result": "QUESTION: " + question})
            return {"status": "needs_input", "run": run_id or f"image-{int(time.time())}", "step": 1, "message": "QUESTION: " + question}
        _emit_plan(emit, "Resolve the requested image subject", True, "The user explicitly requested an image.", "resolve named references only; ask approval before queueing")
        emit({"kind": "action", "step": 1, "action": {"action": "find_image_references", "args": {"terms": [subject], "limit": 6}}})
        try:
            matches = repo_tools.find_image_references([], [subject], 6, None)
        except Exception as error:
            matches = {"error": str(error)}
        emit({"kind": "result", "step": 1, "result": json.dumps(matches, ensure_ascii=False, indent=2)})
        question = "I resolved the image subject. Confirm that I should queue an image job; no image has been generated yet."
        emit({"kind": "action", "step": 2, "action": {"action": "ask_user", "args": {"question": question}}})
        return {"status": "approval_required", "run": run_id or f"image-{int(time.time())}", "step": 2, "message": "APPROVAL_REQUIRED: " + question}

    if kind == "profile":
        target = str(decision.get("target", ""))
        source_title = str(decision.get("source", ""))
        _emit_plan(emit, f"Resolve {target} from the named source", True, "The user requested a source-backed character profile.", "resolve the source record and participant, then draft before writing")
        try:
            matches, source, person = _resolve_profile_source(source_title, target)
        except Exception as error:
            message = f"I could not safely resolve that profile request: {error}"
            emit({"kind": "error", "step": 1, "result": message})
            emit({"kind": "assistant", "text": message, "source": "no profile invented"})
            return {"status": "needs_input", "run": run_id or f"profile-{int(time.time())}", "step": 1, "message": message}
        source_id = str(source.get("id", ""))
        emit({"kind": "action", "step": 1, "action": {"action": "repo_search", "args": {"term": source_title, "dir": "Reputation-Matrix2/data", "limit": 6}}})
        emit({"kind": "result", "step": 1, "result": json.dumps(matches, ensure_ascii=False, indent=2)})
        emit({"kind": "action", "step": 2, "action": {"action": "catalog_retrieve", "args": {"source": "events", "ids": [source_id], "limit": 1}}})
        emit({"kind": "result", "step": 2, "result": json.dumps({"id": source_id, "name": source.get("name"), "title": source.get("title"), "participant": person}, ensure_ascii=False, indent=2)})
        draft = _profile_object(source, person)
        emit({"kind": "draft", "step": 3, "path": "Reputation-Matrix2/data/characters.json", "object": draft})
        state_id = run_id or f"profile-{int(time.time())}"
        _save_state(state_id, {"kind": "profile", "request": request_text, "conversation": conversation, "path": "Reputation-Matrix2/data/characters.json", "draft": draft})
        message = "I resolved the source and drafted this grounded character profile. Review it, then reply `approve` if you want it added to characters.json. No file has been changed yet.\n\n" + _clip(draft, 7000)
        emit({"kind": "assistant", "text": message, "source": "source-backed draft; no write performed"})
        return {"status": "approval_required", "run": state_id, "step": 3, "message": "APPROVAL_REQUIRED: " + message}

    if kind == "write":
        path = decision.get("path")
        if not path:
            question = "What exact file or canonical record should I change, and what should the change say? I will read it first and wait for approval before writing."
            _emit_plan(emit, "Identify the exact write target", True, "The user requested a change but did not provide an unambiguous target.", "ask for the target; do not guess a file")
            emit({"kind": "action", "step": 1, "action": {"action": "ask_user", "args": {"question": question}}})
            emit({"kind": "result", "step": 1, "result": "QUESTION: " + question})
            return {"status": "needs_input", "run": run_id or f"write-{int(time.time())}", "step": 1, "message": "QUESTION: " + question}
        try:
            target = repo_tools.safe_path(str(path))
        except Exception as error:
            return {"status": "needs_input", "run": run_id, "message": f"I cannot use that path: {error}"}
        if not target.is_file():
            return {"status": "needs_input", "run": run_id, "message": f"I could not find {path}. Give me an existing file or a specific canonical record."}
        _emit_plan(emit, f"Read {path} before any write", True, "The user explicitly requested a repository change.", "read the exact target, draft, then request approval")
        try:
            content = repo_tools.read_file(str(path), 12000)
        except Exception as error:
            return {"status": "error", "run": run_id, "message": str(error)}
        action = {"action": "repo_read", "args": {"path": str(path), "limit": 12000}}
        emit({"kind": "action", "step": 1, "action": action})
        emit({"kind": "result", "step": 1, "result": content})
        state_id = run_id or f"write-{int(time.time())}"
        _save_state(state_id, {"request": request_text, "conversation": conversation, "path": str(path), "target": content[:12000]})
        message = "I read the target. Tell me the exact change to draft, then explicitly approve the patch; I have not written anything."
        emit({"kind": "assistant", "text": message, "source": "target read; no write performed"})
        return {"status": "approval_required", "run": state_id, "step": 1, "message": "APPROVAL_REQUIRED: " + message}

    # Read path: one focused repository operation, then a grounded response.
    _emit_plan(emit, "Read the requested archive evidence", True, "The user explicitly requested a repository or canon lookup.", "one focused read/search, then answer from its result")
    try:
        action, evidence = _execute_read(request_text, decision.get("path"), None)
    except Exception as error:
        message = f"I could not complete that focused lookup: {error}"
        emit({"kind": "error", "step": 1, "result": message})
        emit({"kind": "assistant", "text": message, "source": "no answer invented"})
        return {"status": "error", "run": run_id or f"read-{int(time.time())}", "steps": 1, "message": message}
    emit({"kind": "action", "step": 1, "action": action})
    evidence_text = json.dumps(evidence, ensure_ascii=False, indent=2) if not isinstance(evidence, str) else evidence
    emit({"kind": "result", "step": 1, "result": evidence_text})
    answer = _evidence_answer(request_text, evidence, conversation, endpoint, model)
    emit({"kind": "assistant", "text": answer, "source": "bounded archive evidence"})
    emit({"kind": "task_done", "step": 1, "task": "request-01"})
    return {"status": "done", "run": run_id or f"read-{int(time.time())}", "steps": 1, "answer": answer}


__all__ = ["classify_request", "run_agent", "repo_tools"]
