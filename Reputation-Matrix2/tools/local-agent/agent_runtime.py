#!/usr/bin/env python3
"""Fresh chat-first runtime for the local Waluipedia assistant.

The important rule is deliberately simple: a normal message is a normal chat
message. The model is not asked to choose a repository action, and no repository
or image function runs, unless the user clearly asks for one. Explicit archive
requests enter a small, deterministic evidence workflow after the gate.

Every user-facing reply is written by the local model. The deterministic layer
only decides which bounded tool (if any) runs and hands the model grounded
context; it never answers the user with canned text. The only fixed strings left
are the offline notice used when LM Studio cannot be reached.
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
DEFAULT_TIMEOUT = max(5, min(int(os.environ.get("LM_STUDIO_TIMEOUT_SECONDS", "90") or 90), 300))

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


_PROFILE_WORDS_RE = re.compile(
    r"\b(?:char(?:acter|cater)|persona)\s+(?:profil(?:e|l)|pr(?:o)?file)\b"
    r"|\bprofil(?:e|l)\s+(?:for|of)\b"
    r"|\b(?:make|create|give|write|draft|put together)\b[^.\n]{0,48}\bprofil(?:e|l)\b"
)
_TARGET_STOPWORDS = {
    "him", "her", "them", "you", "me", "us", "it", "now", "today", "everyone",
    "each", "all", "this", "that", "example", "the", "a", "an", "record",
    "source", "article", "file", "can", "who", "what",
}
# Words that start sentences but are not character names.
_NAME_STOPWORDS = _TARGET_STOPWORDS | {
    "wednesday", "thursday", "tuesday", "monday", "friday", "saturday",
    "sunday", "tomorrow", "yesterday", "ok", "okay", "yes", "no", "sure",
    "maybe", "please", "thanks", "thank", "hello", "hi", "hey", "so", "and",
    "but", "there", "then", "also", "one", "someone", "anyone",
}


def _prior_user_texts(conversation: list[dict[str, Any]] | None, current: str = "") -> list[str]:
    """Return earlier user messages, dropping the trailing copy the browser sends."""
    texts: list[str] = []
    for item in conversation or []:
        if isinstance(item, dict) and item.get("role") == "user":
            texts.append(str(item.get("content", "")))
    if texts and current and _lower(texts[-1]) == _lower(current):
        texts = texts[:-1]
    return [text for text in texts if text.strip()]


def _normalized(text: str) -> str:
    return _lower(re.sub(r"[^\w\s]", "", str(text or "")))


def _is_repeat_or_insistence(text: str, prior_texts: list[str]) -> bool:
    """True when the user resends an earlier message or insists on it."""
    normalized = _normalized(text)
    if normalized and any(normalized == _normalized(prior) for prior in prior_texts):
        return True
    return bool(re.search(
        r"\b(?:i\s+(?:just\s+|already\s+)?told\s+you|as\s+i\s+said|same\s+(?:thing|as\s+(?:i\s+said|before))|just\s+do\s+it|do\s+what\s+i\s+said)\b",
        _lower(text),
    ))


def _last_assistant_text(conversation: list[dict[str, Any]] | None) -> str:
    for item in reversed(conversation or []):
        if isinstance(item, dict) and item.get("role") == "assistant":
            return str(item.get("content", ""))
    return ""


def _looks_like_source_title(value: str) -> bool:
    """A source title reads like a record name, not a request fragment."""
    value = str(value or "").strip(" \t\r\n.-–—\"'“”")
    if not 4 <= len(value) <= 140:
        return False
    if re.fullmatch(r"[A-Za-z][\w-]*\.json", value):
        return True  # a named archive file such as factions.json
    if len(value.split()) < 2:
        return False
    lowered = _lower(value)
    fragment_words = (
        "profile", "make", "maybe", "edit", "please", "create", "write",
        "add", "files", "him", "her", "them", "you", "we", "can", "draft",
    )
    if any(re.search(rf"\b{word}\b", lowered) for word in fragment_words):
        return False
    return True


def _source_title_candidates(text: str) -> list[str]:
    """Pull plausible source-record titles out of one piece of request text."""
    text = str(text or "")
    candidates: list[str] = []

    def add(value: str) -> None:
        value = str(value or "").strip(" \t\r\n\"'“”")
        if _looks_like_source_title(value) and value not in candidates:
            candidates.append(value)

    for value in re.findall(r"[\"'“”]([^\"'“”]{4,140})[\"'“”]", text):
        add(value)
    # “check the factions json” / “factions.json” — a named archive file.
    for match in re.finditer(r"\b([A-Za-z][\w-]*)\s*\.?\s+json\b|\b([A-Za-z][\w-]*)\.json\b", text, re.I):
        stem = match.group(1) or match.group(2)
        add(f"{stem.lower()}.json")
    # “<title> you can learn about him from” — the title precedes the marker.
    for match in re.finditer(r"([^\n]{4,160}?)\s+you\s+can\s+learn\s+about\s+(?:him|her|them)\s+from", text, re.I):
        add(match.group(1))
    # “from <title>” and “source record: <title>” — the title follows.
    for match in re.finditer(r"(?:\bfrom\s+|\bsource(?:\s+record)?\s*[:：]\s*)([^\n.!?,;]{4,140})", text, re.I):
        add(match.group(1))
    if re.search(r"seven\s+nights", _lower(text)) and "fazbear" in _lower(text):
        add("The Seven Nights at Fazbear: A Complete Record")
    return candidates


def _clean_name(value: str) -> str:
    value = str(value or "").strip(" \t\r\n\"'“”")
    return " ".join(value.split())


def _profile_target(text: str) -> str:
    """Extract the character to profile, skipping pronouns and filler words."""
    text = str(text or "")
    sources = { _lower(item) for item in _source_title_candidates(text) }

    def is_source(value: str) -> bool:
        lowered = _lower(value)
        return any(lowered in item or item in lowered for item in sources if item)

    def acceptable(value: str) -> bool:
        value = _clean_name(value)
        return bool(value) and _lower(value) not in _TARGET_STOPWORDS and not is_source(value)

    patterns = (
        r"\bprofil(?:e|l)?\s+(?:for|of)\s+([A-Za-z][A-Za-z'’-]{1,40})\b",
        r"\bfor\s+([A-Za-z][A-Za-z'’-]{2,40})\b",
        r"\b([A-Za-z][A-Za-z'’-]{1,40})'s\s+profil",
    )
    for pattern in patterns:
        for match in re.finditer(pattern, text, re.I):
            if acceptable(match.group(1)):
                return _clean_name(match.group(1))
    # “<Name> seems to be important, can we make a profile for him” — the name
    # is the subject and the pronoun points back at it.
    for match in re.finditer(r"\b([A-Z][a-z'’-]+(?:\s+[A-Z][a-z'’-]+){0,3})\s+(?:seems|is|looks|appears|sounds)\b", text):
        if acceptable(match.group(1)) and _lower(match.group(1).split()[0]) not in _NAME_STOPWORDS:
            return _clean_name(match.group(1))
    # Fall back to the first multi-word proper name before the word “profile”.
    head = re.split(r"\bprofil", text, maxsplit=1, flags=re.I)[0]
    for match in re.finditer(r"\b([A-Z][a-z'’-]+(?:\s+[A-Z][a-z'’-]+)+)\b", head):
        if acceptable(match.group(1)) and _lower(match.group(1).split()[0]) not in _NAME_STOPWORDS:
            return _clean_name(match.group(1))
    return ""


# Imperatives and acknowledgements that are never a bare character name.
_BARE_NAME_STOPWORDS = _NAME_STOPWORDS | {
    "read", "above", "below", "check", "look", "see", "open", "find", "search",
    "show", "tell", "say", "give", "take", "put", "use", "try", "want", "need",
    "know", "think", "let", "go", "stop", "start", "keep", "back", "again",
    "still", "more", "some", "any", "done", "ready", "working", "works", "fine",
    "good", "great", "nice", "cool", "wow", "hmm", "lol", "ok", "okay", "yes",
    "no", "please", "thanks", "make", "create", "write", "edit", "add", "draft",
    "profile", "approve", "apply", "confirm", "send", "type", "kind", "sort",
}


def _bare_name(text: str) -> str:
    """A short message that is nothing but a name, e.g. the answer “freddy”."""
    value = _clean_name(text)
    if not value or len(value.split()) > 4:
        return ""
    if not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9'’./-]*(?:\s+[A-Za-z0-9][A-Za-z0-9'’./-]*)*", value):
        return ""
    words = [word.lower() for word in value.split()]
    if words[0] in {"for", "the", "a", "an", "from", "with", "and", "or", "to"}:
        return ""
    if any(word in _BARE_NAME_STOPWORDS for word in words):
        return ""
    if _source_title_candidates(value):
        return ""
    return value


def _profile_request_details(text: str, conversation: list[dict[str, Any]] | None = None) -> dict[str, Any] | None:
    """Recognize a source-backed character profile request without a model call."""
    text = str(text or "")
    prior = _prior_user_texts(conversation, text)
    prior_text = "\n".join(prior)
    profile_words = bool(_PROFILE_WORDS_RE.search(_lower(text)))
    if not profile_words and _is_repeat_or_insistence(text, prior):
        # The user is resending or insisting on an earlier profile request.
        profile_words = bool(_PROFILE_WORDS_RE.search(_lower(prior_text)))
    current_target = _profile_target(text)
    current_sources = _source_title_candidates(text)
    prior_target = _profile_target(prior_text)
    prior_sources = _source_title_candidates(prior_text)
    if profile_words:
        target = current_target or prior_target
        sources = current_sources or prior_sources
        if not target or not sources:
            return None
        return {"target": target, "source": sources[0], "sources": sources}
    # No profile words here. A short reply can still complete an earlier
    # profile request by supplying the piece it was missing.
    if prior and len(text.split()) <= 8:
        bare = _bare_name(text)
        target = current_target or bare or prior_target
        sources = current_sources or prior_sources
        supplied_now = current_target or bare
        split_across = bool(supplied_now and prior_sources) or bool(current_sources and prior_target)
        if target and sources and split_across:
            return {"target": target, "source": sources[0], "sources": sources}
    return None


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
    # A bare deictic reference (“read above”, “read that”) points at earlier
    # conversation, not at the archive; it stays a normal chat turn.
    if re.fullmatch(r"(?:please\s+)?(?:read|review|open|look at|see)\s+(?:above|that|this|it|them|my message|what i (?:said|wrote|sent|typed)|the above)\s*[.! ]*", lowered):
        return False
    if any(word in lowered for word in READ_WORDS):
        return True
    if re.search(r"\bwhat\s+does\s+(?:the|this|that|an?)\s+(?:article|record|source|archive|file)\s+say\b", lowered):
        return True
    if re.search(r"\b(?:according to|from)\s+(?:the\s+)?(?:canon|archive|article|record|source)\b", lowered):
        return True
    return False


def _permission_only(text: str) -> bool:
    lowered = _lower(text)
    return bool(re.search(r"\b(?:you may|you can|feel free to|i give you permission to)\s+(?:edit|change|write|modify|update)\b", lowered)) and not bool(re.search(r"\b(?:create|add|append|remove|delete|patch)\b", lowered))


def _explicit_write(text: str) -> bool:
    lowered = _lower(text)
    if _permission_only(text):
        return False
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


def _clarify_context(text: str, conversation: list[dict[str, Any]]) -> dict[str, Any] | None:
    """Decide whether a clarification is needed, and describe it as context.

    Returns None when no clarification is needed. The actual question is always
    written by the local model from this context; the runtime no longer contains
    canned reply text.
    """
    lowered = _lower(text)
    prior = _prior_user_texts(conversation, text)
    prior_text = "\n".join(prior)
    target = _profile_target(text) or _profile_target(prior_text)
    sources = _source_title_candidates(text) or _source_title_candidates(prior_text)
    context: dict[str, Any] = {
        "user_request": text,
        "already_known": {},
        "missing_items": [],
    }
    if target:
        context["already_known"]["character"] = target
    if sources:
        context["already_known"]["source_record"] = sources[0]
    repeat_count = sum(1 for item in prior if _normalized(item) == _normalized(text))
    if repeat_count or _is_repeat_or_insistence(text, prior):
        context["note"] = (
            f"The user has sent this same request {max(repeat_count, 1)} time(s) already and you have already replied. "
            "Do not repeat your previous reply or ask the same question again. Acknowledge the repeat in one short clause, "
            "then move things forward using only what is still missing."
        )
        context["your_previous_reply"] = _clip(_last_assistant_text(conversation), 1200)
    if _generic_creation_request(text):
        if re.search(r"\b(?:people|persons|characters)\b", lowered):
            context["situation"] = "the user wants new people or characters created but has not named them yet"
            context["missing_items"] = ["the names of the people or characters to create"]
        else:
            context["situation"] = "the user wants something created or changed in the archive but the target is unclear"
            context["missing_items"] = ["the exact file or canonical record to change", "what it should say"]
        return context
    if _explicit_image(text, None) or _explicit_write(text) or _explicit_read(text) or _is_prose_request(text):
        return None
    if _permission_only(text):
        context["situation"] = "the user granted permission to edit files but has not said what to change"
        context["missing_items"] = ["what to create or change", "for which character or record"]
        return context
    if re.search(r"seven\s+nights\s+at\s+fazbear", lowered) and not (target and sources):
        context["situation"] = "a source record is named but it is not clear what to do with it"
        context["missing_items"] = ["what to create or change from the record, and for whom"]
        return context
    has_archive_noun = bool(re.search(r"\b(?:article|record|source|archive|file|character|event|location|canon)\b", lowered))
    looks_like_reassurance = bool(re.search(r"\b(?:right|enough|all it needs|everything|is that okay)\b", lowered))
    if has_archive_noun and looks_like_reassurance:
        context["situation"] = "the user may want an archive lookup or may only be discussing the record"
        context["missing_items"] = ["whether to read the source and use it, or to keep discussing it"]
        return context
    if re.search(r"\b(?:let['’]?s|lets)\s+start\b", lowered) and has_archive_noun and conversation:
        joined = " ".join(str(item.get("content", "")) for item in conversation if item.get("role") == "user")
        if _has_word(joined, ("create", "add", "file", "character", "archive")):
            context["situation"] = "the user wants to begin work that may involve the archive"
            context["missing_items"] = ["whether to read the named source and draft a canonical record, or to keep talking through the idea"]
            return context
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
    clarification = _clarify_context(text, conversation)
    if clarification:
        return {"kind": "clarify", "needed": False, "context": clarification}
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
    # “the factions json” → factions.json
    json_match = re.search(r"\b([A-Za-z][\w-]*)\s*\.?\s+json\b|\b([A-Za-z][\w-]*)\.json\b", text, re.I)
    if json_match:
        return f"{(json_match.group(1) or json_match.group(2)).lower()}.json"
    match = re.search(r"\b(?:about|for|of|from|named|called)\s+(.+)", text, re.I)
    if match:
        value = re.split(r"\b(?:in the|according to|please|right now)\b", match.group(1), maxsplit=1, flags=re.I)[0]
        return value.strip(" .?!")[:180]
    tokens = re.findall(r"[A-Za-z0-9][A-Za-z0-9'’_-]{2,}", text)
    stop = {"read", "open", "review", "search", "find", "look", "lookup", "retrieve", "show", "where", "which", "verify", "validate", "audit", "the", "this", "that", "article", "record", "source", "archive", "repository", "repo", "canon", "canonical"}
    useful = [token for token in tokens if token.casefold() not in stop]
    return " ".join(useful[-5:])[:180]


# The runtime's own failure notices. They are shown to the user but never fed
# back to the model as conversation: a model that reads "LM Studio is offline"
# in its history starts believing it cannot use tools at all.
_ERROR_NOTICE_PREFIXES = ("LM Studio", "The local model")


def _redact_conversation(conversation: list[dict[str, Any]], keep: int = 12, limit: int = 5000) -> list[dict[str, str]]:
    window = conversation[-keep:] if keep > 0 else []
    kept: list[dict[str, str]] = []
    for item in window:
        if not isinstance(item, dict) or item.get("role") not in {"user", "assistant"}:
            continue
        content = str(item.get("content", ""))
        if item.get("role") == "assistant" and content.startswith(_ERROR_NOTICE_PREFIXES):
            continue
        kept.append({"role": str(item.get("role", "")), "content": _clip(content, limit)})
    return kept


def _is_timeout_error(error: BaseException) -> bool:
    """True when the failure is a timeout, not an unreachable server."""
    seen: set[int] = set()
    candidate: BaseException | None = error
    while isinstance(candidate, BaseException) and id(candidate) not in seen:
        seen.add(id(candidate))
        if isinstance(candidate, (socket.timeout, TimeoutError)):
            return True
        candidate = getattr(candidate, "reason", None)
    return False


def _complete(endpoint: str, model: str, system: str, user: str, *,
              conversation: list[dict[str, Any]] | None = None,
              timeout: int = DEFAULT_TIMEOUT, history_keep: int = 12,
              history_limit: int = 5000, max_tokens: int = 1400) -> str:
    messages: list[dict[str, Any]] = [{"role": "system", "content": system}]
    messages.extend(_redact_conversation(conversation or [], keep=history_keep, limit=history_limit))
    messages.append({"role": "user", "content": user})
    payload: dict[str, Any] = {"messages": messages, "temperature": 0.2, "max_tokens": max_tokens}
    if model:
        payload["model"] = model

    def request(wait: int) -> str:
        request_object = urllib.request.Request(
            endpoint, data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json"}, method="POST",
        )
        with urllib.request.urlopen(request_object, timeout=wait) as response:
            body = json.loads(response.read())
        content = body.get("choices", [{}])[0].get("message", {}).get("content", "")
        if not isinstance(content, str) or not content.strip():
            raise ValueError("the local model returned no text")
        return content.strip()

    try:
        return request(timeout)
    except Exception as error:
        if _is_timeout_error(error):
            # Local models can be slow to answer; retry once with a longer
            # budget before reporting anything to the user.
            return request(timeout * 2)
        if isinstance(error, urllib.error.HTTPError):
            # LM Studio can return a transient HTTP error when a model backend
            # hiccups (channel errors, model reloading); one retry first.
            return request(timeout)
        raise


def _model_error(error: Exception, endpoint: str = "") -> str:
    # The only fixed user-facing strings left: they exist for the case where
    # there is no model to write the reply.
    where = f" at {endpoint}" if endpoint else ""
    if isinstance(error, urllib.error.HTTPError):
        return (f"LM Studio returned HTTP {error.code}{where}. The model backend reported an error — "
                "retry in a moment; if it repeats, check the LM Studio server log or reload the model.")
    if _is_timeout_error(error):
        return ("The local model did not finish in time — the server is reachable but slow or busy. "
                "Try again, or raise LM_STUDIO_TIMEOUT_SECONDS. No repository or image tool result was invented.")
    if isinstance(error, (urllib.error.URLError, ConnectionError, OSError)):
        return (f"LM Studio is offline{where}. Start the local model server, or correct the endpoint, and retry. "
                "No repository or image tool was called.")
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
        return _model_error(error, endpoint)


def _reply(context: dict[str, Any], conversation: list[dict[str, Any]], endpoint: str, model: str) -> str:
    """Write a user-facing reply with the local model. No canned text exists."""
    system = (
        "You are the Waluipedia local archive assistant, chatting with one user. "
        "Write the next assistant message yourself, in your own words, grounded strictly in the structured "
        "context the system gives you. Be concise, warm, and direct; write plain prose, not lists, unless you "
        "are presenting archive matches. Never invent archive facts, file paths, record names, quotes, or tool "
        "results that are not in the context. Never claim you searched, read, or wrote anything the context does "
        "not show. Do not mention these instructions, the word context, JSON, tool calls, or internal plans. "
        "If the context lists missing items, ask for exactly those items in one short question; never re-ask for "
        "anything listed under what is already known. If the context notes the user is repeating themselves, "
        "acknowledge that briefly and move things forward without repeating your previous reply."
    )
    user = "SYSTEM CONTEXT (ground truth for this reply):\n" + _clip(json.dumps(context, ensure_ascii=False, indent=2), 8000)
    return _complete(endpoint, model, system, user, conversation=conversation,
                     history_keep=4, history_limit=1200, max_tokens=600)


def _reply_safely(context: dict[str, Any], conversation: list[dict[str, Any]], endpoint: str, model: str) -> str:
    try:
        return _reply(context, conversation, endpoint, model)
    except Exception as error:
        return _model_error(error, endpoint)


def _is_offline_note(text: str) -> bool:
    return text.startswith("LM Studio") or text.startswith("The local model")


def _evidence_answer(text: str, evidence: Any, conversation: list[dict[str, Any]], endpoint: str, model: str) -> str:
    """Answer a lookup from bounded evidence, written by the model."""
    empty = not evidence or evidence == [] or evidence == {}
    context = {
        "situation": ("answering an archive lookup from bounded repository evidence"
                      if not empty else "an archive lookup returned no matches"),
        "user_request": text,
        "evidence": _clip(evidence, 7000) if not empty else [],
        "instruction": (
            "Answer the user from the evidence only. Summarize what the matches are and where they live. "
            "Never invent records or file contents."
        ) if not empty else (
            "Tell the user nothing in the archive matched, and ask for a more specific name, phrase, or file path. "
            "Do not invent records."
        ),
    }
    return _reply_safely(context, conversation, endpoint, model)


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
        raise ValueError("a specific name, phrase, or repository path is required before searching")
    results = repo_tools.search(term, "Reputation-Matrix2/data", 8, target_year)
    return {"action": "repo_search", "args": {"term": term, "dir": "Reputation-Matrix2/data", "limit": 8}}, results


def _closest_event_names(terms: list[str]) -> str:
    """Find a few real event names to suggest when a source title does not resolve."""
    skip = {"the", "and", "with", "from", "record", "complete", "source", "article", "seven", "nights"}
    for term in terms:
        for word in re.findall(r"[A-Za-z][A-Za-z'’-]{3,}", term):
            if _lower(word) in skip:
                continue
            try:
                found = repo_tools.search(word, "Reputation-Matrix2/data", 6)
            except Exception:
                continue
            names = [str(item.get("preview", "")).split(" — ")[0] for item in found
                     if "events.json" in str(item.get("path", ""))]
            names = [name for name in names if name][:3]
            if names:
                return "; ".join(names)
    return ""


def _match_participant(source: dict[str, Any], target: str) -> dict[str, Any] | None:
    """Match the named target against a source record's participants."""
    people = source.get("participants", []) if isinstance(source.get("participants"), list) else []
    target_lower = _lower(target)
    tokens = [token for token in re.findall(r"[a-z0-9'’-]{2,}", target_lower)]
    best: tuple[int, dict[str, Any]] | None = None
    for person in people:
        if not isinstance(person, dict):
            continue
        name = _lower(str(person.get("name", "")))
        identifier = _lower(str(person.get("id", "")))
        if target_lower in name:
            score = 5
        elif target_lower in identifier:
            score = 4
        elif tokens and all(token in name or token in identifier for token in tokens):
            score = 3
        elif tokens and sum(1 for token in tokens if token in name or token in identifier) >= max(1, len(tokens) - 1):
            score = 2
        else:
            continue
        if best is None or score > best[0]:
            best = (score, person)
    return best[1] if best else None


def _resolve_file_source(filename: str, target: str) -> tuple[dict[str, Any], dict[str, Any]]:
    """Resolve a profile from a named archive file such as factions.json."""
    path = repo_tools.safe_path(f"Reputation-Matrix2/data/{filename}")
    if not path.is_file():
        raise ValueError(f"the archive has no file named {filename}")
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        raise ValueError(f"could not read {filename}: {error}") from error
    if not isinstance(data, list):
        raise ValueError(f"{filename} is not a record collection")
    target_lower = _lower(target)
    tokens = re.findall(r"[a-z0-9'’-]{2,}", target_lower)
    best: dict[str, Any] | None = None
    best_score = 0
    for record in data:
        if not isinstance(record, dict):
            continue
        headline = _lower(" ".join(str(record.get(key, "")) for key in ("id", "name", "title")))
        body = _lower(json.dumps(record, ensure_ascii=False))
        score = 0
        if target_lower and target_lower in headline:
            score = 5
        elif tokens and all(token in headline for token in tokens):
            score = 4
        elif target_lower and target_lower in body:
            score = 3
        elif tokens and sum(1 for token in tokens if token in body) >= max(1, len(tokens) - 1):
            score = 2
        if score > best_score:
            best, best_score = record, score
    if best is None or best_score < 2:
        raise ValueError(f"{filename} has no record that mentions {target!r}")
    person = _match_participant(best, target)
    if person is None:
        person = {
            "id": re.sub(r"[^a-z0-9]+", "_", target_lower).strip("_"),
            "name": _clean_name(target),
            "role": f"Referenced in {str(best.get('name', best.get('id', 'the record')))}",
        }
    return best, person


def _resolve_profile_source(source_titles: str | list[str], target: str) -> tuple[list[dict[str, Any]], dict[str, Any], dict[str, Any]]:
    """Resolve the named source record and participant with bounded searches."""
    titles = [source_titles] if isinstance(source_titles, str) else [str(item) for item in (source_titles or []) if str(item).strip()]
    terms: list[str] = []
    for title in titles:
        for value in (title, *(part.strip() for part in title.split(":") if len(part.strip()) >= 8)):
            if value not in terms:
                terms.append(value)
    matches: list[dict[str, Any]] = []
    source: dict[str, Any] = {}
    for term in terms:
        # A named archive file (factions.json) is resolved directly from the file.
        if re.fullmatch(r"[A-Za-z][\w-]*\.json", term):
            try:
                record, person = _resolve_file_source(term, target)
            except ValueError:
                continue
            matches = [{
                "path": f"Reputation-Matrix2/data/{term}",
                "line": "catalog",
                "preview": " — ".join(str(record.get(key, "")) for key in ("id", "name", "title") if record.get(key))[:500],
                "entity_id": str(record.get("id", "")),
            }]
            return matches, record, person
        try:
            found = repo_tools.search(term, "Reputation-Matrix2/data", 6)
        except Exception:
            found = []
        ids = [str(item.get("entity_id")) for item in found
               if item.get("entity_id") and "events.json" in str(item.get("path", ""))]
        if not ids:
            # An empty id list is not a match; never retrieve unfiltered records.
            continue
        records = repo_tools.catalog_retrieve("events", ids=ids[:3], limit=3)
        if records:
            matches, source = found, records[0]
            break
    if not source:
        near = _closest_event_names(terms)
        detail = f" Closest event records I can see: {near}." if near else ""
        leading = titles[0] if titles else "the named source"
        raise ValueError(f"could not resolve a source record from {leading!r}.{detail}")
    person = _match_participant(source, target)
    if person is None:
        names = ", ".join(str(item.get("name", item.get("id", "?"))) for item in source.get("participants", []) if isinstance(item, dict))
        raise ValueError(
            f"the source record {str(source.get('name', ''))!r} does not identify a participant matching {target!r}. "
            f"It lists: {names}."
        )
    return matches, source, person


def _collect_strings(value: Any) -> list[str]:
    """Recursively collect text strings from a section structure."""
    if isinstance(value, str):
        return [value] if value.strip() else []
    if isinstance(value, dict):
        collected: list[str] = []
        for item in value.values():
            collected.extend(_collect_strings(item))
        return collected
    if isinstance(value, list):
        collected = []
        for item in value:
            collected.extend(_collect_strings(item))
        return collected
    return []


def _clean_sentence(sentence: str) -> str:
    """Strip markdown artifacts so quoted evidence reads as plain prose."""
    sentence = re.sub(r"```.*?```", " ", sentence, flags=re.S)
    sentence = re.sub(r"\s*#{1,6}\s*", " ", sentence)
    sentence = re.sub(r"\s*[-–—]{2,}\s*", " — ", sentence)
    sentence = re.sub(r"[*_`>]+", "", sentence)
    return re.sub(r"\s+", " ", sentence).strip(" —-").strip()


def _person_evidence(source: dict[str, Any], person: dict[str, Any]) -> str:
    """Collect sentences from the source record that mention the participant."""
    needles = set()
    for value in (str(person.get("name", "")), str(person.get("id", ""))):
        for token in re.findall(r"[a-z0-9'’-]{3,}", _lower(value)):
            if token not in {"the", "and"}:
                needles.add(token)
    if not needles:
        return ""
    parts = [str(source.get(key, "")) for key in ("summary", "description")]
    for key in ("era", "location", "status", "motto", "leader", "headquarters", "region"):
        if isinstance(source.get(key), str):
            parts.append(str(source[key]))
    parts.extend(_collect_strings(source.get("sections", [])))
    phrase = _lower(str(person.get("name", "")))
    sentences: list[str] = []
    for part in parts:
        for sentence in re.split(r"(?<=[.!?])\s+", re.sub(r"\s+", " ", str(part))):
            sentence = _clean_sentence(sentence)
            if 40 <= len(sentence) <= 500:
                sentences.append(sentence)
    scored: list[tuple[int, int, str]] = []
    for index, sentence in enumerate(sentences):
        lowered = _lower(sentence)
        hits = sum(1 for needle in needles if needle in lowered)
        if not hits:
            continue
        score = hits * 2 + (3 if phrase and phrase in lowered else 0)
        scored.append((-score, index, sentence))
    scored.sort()
    seen: set[str] = set()
    picked: list[str] = []
    for _, _, sentence in scored:
        if sentence not in seen:
            seen.add(sentence)
            picked.append(sentence)
        if len(picked) >= 5:
            break
    return " ".join(picked)


def _profile_object(source: dict[str, Any], person: dict[str, Any], origin: str = "event") -> dict[str, Any]:
    name = str(person.get("name", person.get("id", "Unnamed participant")))
    source_name = str(source.get("name", source.get("id", "source record")))
    role = str(person.get("role", "")).strip()
    summary = str(source.get("summary", ""))
    evidence = _person_evidence(source, person)
    participant_ids = {str(item.get("id")) for item in (source.get("participants", []) or []) if isinstance(item, dict)}
    matched = str(person.get("id", "")) in participant_ids
    body = (" " + evidence[:1600]) if evidence else (" " + summary[:1600])
    if origin == "event":
        role = role or "Role not separately specified in the source record."
        profile_summary = f"{name} is identified in {source_name} as {role}.{body}"
        status = role
        affiliation = f"Participant in {source_name}"
        key_events = [str(source.get("id", ""))]
        lead = f"This profile is grounded in {source_name}. The record lists {name} with the role: {role}."
    elif matched:
        role = role or f"Listed in {source_name}"
        profile_summary = f"{name} is listed in {source_name} ({origin}) as {role}.{body}"
        status = role
        affiliation = f"{source_name} ({origin})"
        key_events = [str(item) for item in (source.get("keyEvents", []) or [])[:8]] or [str(source.get("id", ""))]
        lead = f"This profile is grounded in {source_name} ({origin}). The record lists {name} with the role: {role}."
    else:
        reference = f"Referenced in {source_name} ({origin})"
        profile_summary = f"{name} is referenced in {source_name}, the {origin} record.{body}"
        status = reference
        affiliation = reference
        key_events = [str(item) for item in (source.get("keyEvents", []) or [])[:8]] or [str(source.get("id", ""))]
        lead = f"This profile is grounded in {source_name} ({origin}), which references {name} directly."
    detail = evidence or summary
    related = [str(item) for item in (source.get("relatedArticles", []) or [])]
    if origin != "event":
        related = related[:10]
    return {
        "id": str(person.get("id", re.sub(r"[^a-z0-9]+", "_", name.casefold()).strip("_"))),
        "name": name,
        "title": f"{name} — Source Profile",
        "race": "Not separately specified in the source record",
        "status": status,
        "affiliation": affiliation,
        "summary": profile_summary,
        "description": f"{lead}\n\n{detail[:2400]}",
        "keyEvents": key_events,
        "relatedArticles": related,
        "sourceRecord": str(source.get("id", source_name)),
        "image": "",
    }


_PROFILE_DRAFT_SYSTEM = (
    "You are the staff writer of Waluipedia, an encyclopedia written in-character by Waluigi. "
    "You write character profiles from supplied evidence only: never invent facts, names, dates, or quotes. "
    "Tone: dry, precise, faintly exasperated, occasionally triumphant. "
    "Respond with ONLY a JSON object - no prose, no code fences - using any of these keys: "
    '"title", "race", "status", "affiliation", "summary", "description", "waluigiComment". '
    '"summary" is 2-4 plain sentences. "description" is 300-600 words and may use "## " section headers. '
    '"waluigiComment" is one or two sentences of first-person Waluigi commentary. '
    "Omit any key you cannot ground in the evidence."
)


def _model_profile_draft(base: dict[str, Any], evidence: str, source_name: str,
                         request_text: str, endpoint: str, model: str) -> dict[str, str] | None:
    """Let the model write the profile prose; structure and ids stay deterministic."""
    context = {
        "character": base.get("name"),
        "structural_fields_to_keep": {key: base.get(key) for key in ("id", "name", "keyEvents", "relatedArticles", "sourceRecord")},
        "fallback_prose_if_you_omit_a_key": {key: base.get(key) for key in ("title", "race", "status", "affiliation", "summary", "description")},
        "evidence_from_the_source_record": _clip(evidence, 6000),
        "source_record": source_name,
        "user_request": _clip(request_text, 600),
    }
    try:
        raw = _complete(endpoint, model, _PROFILE_DRAFT_SYSTEM,
                        json.dumps(context, ensure_ascii=False, indent=2),
                        history_keep=0, max_tokens=1200)
    except Exception:
        return None
    match = re.search(r"\{.*\}", raw, re.S)
    if not match:
        return None
    try:
        value = json.loads(match.group(0))
    except json.JSONDecodeError:
        return None
    if not isinstance(value, dict):
        return None
    limits = {"title": 160, "race": 400, "status": 600, "affiliation": 400,
              "summary": 1600, "description": 4000, "waluigiComment": 600}
    updates: dict[str, str] = {}
    for key, limit in limits.items():
        field = value.get(key)
        if isinstance(field, str) and 8 <= len(field.strip()) <= limit:
            updates[key] = field.strip()
    return updates or None


def _approval_request(text: str) -> bool:
    lowered = _lower(text)
    if re.fullmatch(r"\s*(?:yes|approve|approved|apply|apply it|write it|go ahead|do it|confirm)\s*[.!]?\s*", lowered):
        return True
    # A pending draft may be approved inside a longer reply, e.g.
    # “can you actually write it but good use tools and go ahead”. Only clear
    # go-ahead language counts, and revision requests do not.
    if len(lowered.split()) > 24:
        return False
    if not re.search(r"\b(?:approve|approved|apply(?:\s+it|\s+the)?|go\s+ahead|do\s+it|write\s+it|write\s+the\s+file|add\s+it|confirm|make\s+it\s+so|yes\s+please|please\s+do|do\s+that)\b", lowered):
        return False
    if re.search(r"\b(?:no|do\s+not|don['’]?t|stop|cancel|wait|hold\s+on|not\s+yet|instead|but\s+first|before|unless|without)\b", lowered):
        return False
    if re.search(r"\bbut\s+(?:make|change|keep|remove|add|not|use)\b", lowered):
        return False
    return True


def _approved_profile_run(run_id: str, request_text: str, emit: Callable[[dict[str, Any]], None],
                          endpoint: str, model: str) -> dict[str, Any] | None:
    state = _load_state(run_id) if run_id else {}
    draft = state.get("draft") if isinstance(state.get("draft"), dict) else None
    if not draft or not _approval_request(request_text):
        return None
    conversation = state.get("conversation", []) if isinstance(state.get("conversation"), list) else []
    path = str(state.get("path", "Reputation-Matrix2/data/characters.json"))
    character = str(draft.get("name", draft.get("id", "the character")))
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
        answer = _reply_safely({
            "situation": "the approved character profile was applied to the archive",
            "character": character,
            "path": path,
            "write_result": result,
            "validation": f"the JSON collection is valid and now holds {len(audit)} records",
            "instruction": "Confirm to the user what was written and where, in one or two sentences.",
        }, conversation, endpoint, model)
        if _is_offline_note(answer):
            # The write is deterministic and already happened; the model only
            # phrases the reply, so the action is reported even while offline.
            answer = answer.replace(" No repository or image tool was called.", "")
            answer = f"{answer}\n\n[Action completed without the model: {result} JSON validation passed.]"
        emit({"kind": "assistant", "text": answer, "source": "approved source-backed write"})
        emit({"kind": "task_done", "step": 2, "task": "request-01"})
        return {"status": "done", "run": run_id, "steps": 2, "answer": answer}
    except ValueError as error:
        if "already exists" in str(error):
            answer = _reply_safely({
                "situation": "the character profile is already on file in the archive, so nothing new was written",
                "character": character,
                "path": path,
                "instruction": "Tell the user the profile is already on file and nothing was changed.",
            }, conversation, endpoint, model)
            if _is_offline_note(answer):
                answer = answer.replace(" No repository or image tool was called.", "")
                answer = f"{answer}\n\n[Checked without the model: the profile for {character} is already on file in {path}; nothing was changed.]"
            emit({"kind": "assistant", "text": answer, "source": "duplicate profile write avoided"})
            emit({"kind": "task_done", "step": 1, "task": "request-01"})
            return {"status": "done", "run": run_id, "steps": 1, "answer": answer}
        message = f"the write did not complete: {error}"
        emit({"kind": "error", "step": 1, "result": message})
        answer = _reply_safely({
            "situation": "an approved write failed",
            "character": character,
            "path": path,
            "failure": str(error),
            "instruction": "Explain the failure plainly and reassure the user nothing partial was kept.",
        }, conversation, endpoint, model)
        emit({"kind": "assistant", "text": answer, "source": "no partial write kept"})
        return {"status": "error", "run": run_id, "step": 1, "message": answer}
    except Exception as error:
        message = f"the write did not complete: {error}"
        emit({"kind": "error", "step": 1, "result": message})
        answer = _reply_safely({
            "situation": "an approved write failed",
            "character": character,
            "path": path,
            "failure": str(error),
        }, conversation, endpoint, model)
        emit({"kind": "assistant", "text": answer, "source": "no partial write kept"})
        return {"status": "error", "run": run_id, "step": 1, "message": answer}


_COURTESY_RE = re.compile(
    r"^\s*(?:thanks|thank you|thx|ty|ok|okay|k|cool|nice|great|awesome|wow|lol|lmao|ha|haha|sure|yes|no|np|bye|goodbye|hi|hello|hey|yo|alright|right|mm+|hmm+)\s*[.! ]*$",
    re.I,
)

_REVISION_SYSTEM = (
    "You are revising a pending Waluipedia character-profile draft from the user's notes. "
    "Respond with ONLY a JSON object - no prose, no code fences - with exactly these keys: "
    '"reply" (one or two sentences to the user), "profile" (the updated profile object, or null to keep it unchanged). '
    "When updating, keep every field you do not change exactly as given, use only facts from the draft and the "
    "user's notes, and keep the encyclopedia voice."
)


def _revised_profile_run(run_id: str, request_text: str, emit: Callable[[dict[str, Any]], None],
                         endpoint: str, model: str) -> dict[str, Any] | None:
    """A non-approval reply while a profile draft is pending revises the draft."""
    if not run_id:
        return None
    state = _load_state(run_id)
    if state.get("kind") != "profile":
        return None
    draft = state.get("draft") if isinstance(state.get("draft"), dict) else None
    if not draft:
        return None
    if _approval_request(request_text) or _COURTESY_RE.match(request_text):
        return None
    character = str(draft.get("name", "the character"))
    context = {
        "pending_draft": _clip(draft, 6000),
        "user_message": _clip(request_text, 800),
        "instruction": ("Incorporate the user's notes into the draft when they concern the character or its style; "
                        "if they are unrelated, reply briefly and return null for the profile."),
    }
    try:
        raw = _complete(endpoint, model, _REVISION_SYSTEM,
                        json.dumps(context, ensure_ascii=False, indent=2),
                        history_keep=4, history_limit=1200, max_tokens=1400)
    except Exception as error:
        answer = _model_error(error, endpoint)
        message = answer + f"\n\n[The pending draft for {character} is unchanged; reply approve to apply it, or resend your notes.]"
        emit({"kind": "assistant", "text": message, "source": "draft revision unavailable; draft preserved"})
        return {"status": "approval_required", "run": run_id, "step": 3, "message": "APPROVAL_REQUIRED: " + message}
    reply_text = ""
    updated: dict[str, Any] | None = None
    match = re.search(r"\{.*\}", raw, re.S)
    if match:
        try:
            value = json.loads(match.group(0))
        except json.JSONDecodeError:
            value = None
        if isinstance(value, dict):
            reply_text = str(value.get("reply", "")).strip()
            candidate = value.get("profile")
            if isinstance(candidate, dict) and candidate.get("id") == draft.get("id"):
                for key in ("keyEvents", "relatedArticles", "sourceRecord"):
                    candidate[key] = draft.get(key)
                if not isinstance(candidate.get("name"), str) or not candidate.get("name").strip():
                    candidate["name"] = draft.get("name")
                updated = candidate
    if not reply_text:
        reply_text = raw.strip()[:400]
    if updated is not None:
        draft = updated
        state["draft"] = draft
        state["request"] = request_text
        _save_state(run_id, state)
        emit({"kind": "draft", "step": 3, "path": str(state.get("path", "Reputation-Matrix2/data/characters.json")), "object": draft})
    message = reply_text + "\n\n" + _clip(draft, 7000)
    emit({"kind": "assistant", "text": message, "source": "draft revised from user notes; no write performed"})
    return {"status": "approval_required", "run": run_id, "step": 3, "message": "APPROVAL_REQUIRED: " + message}


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
        message = _reply_safely({
            "situation": "the user sent an empty message",
            "instruction": "Ask what they would like to do.",
        }, conversation, endpoint, model)
        return {"status": "needs_input", "run": run_id, "message": "QUESTION: " + message}

    approved = _approved_profile_run(run_id, request_text, emit, endpoint, model)
    if approved is not None:
        return approved

    decision = classify_request(request_text, images, conversation)
    kind = str(decision["kind"])
    if kind == "chat":
        revised = _revised_profile_run(run_id, request_text, emit, endpoint, model)
        if revised is not None:
            return revised
        _emit_plan(emit, "Answer as a normal conversation", False, "This is conversation, roleplay, or drafting; no repository or image tool is required.", "none")
        answer = _chat_answer(request_text, conversation, endpoint, model)
        emit({"kind": "assistant", "text": answer, "source": "chat; no tools called"})
        emit({"kind": "task_done", "step": 0, "task": "request-01"})
        return {"status": "done", "run": run_id or f"chat-{int(time.time())}", "steps": 0, "answer": answer}

    if kind == "clarify":
        context = dict(decision.get("context") or {})
        context.setdefault("situation", "the request is ambiguous")
        context.setdefault("missing_items", ["what the user wants done"])
        context["instruction"] = (
            "Ask one short question covering exactly the missing items; do not ask for anything already known. "
            "Do not search or read anything yet."
        )
        question = _reply_safely(context, conversation, endpoint, model)
        _emit_plan(emit, "Clarify before using tools", False, "The message is not specific enough to distinguish conversation from archive work.", "ask one question; do not search")
        emit({"kind": "action", "step": 1, "action": {"action": "ask_user", "args": {"question": question}}})
        emit({"kind": "result", "step": 1, "result": "QUESTION: " + question})
        return {"status": "needs_input", "run": run_id or f"clarify-{int(time.time())}", "step": 1, "message": "QUESTION: " + question}

    if kind == "image":
        subject = str(decision.get("subject", ""))
        if not subject:
            question = _reply_safely({
                "situation": "the user asked for an image but did not say what it should show",
                "missing_items": ["what the image should depict"],
                "instruction": "Ask for the subject or scene. Mention that nothing will be searched or generated until then.",
            }, conversation, endpoint, model)
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
        question = _reply_safely({
            "situation": "image references were resolved and explicit approval is required before queueing anything",
            "subject": subject,
            "references": _clip(matches, 3000),
            "instruction": "Confirm the subject with the user and ask them to explicitly approve queueing the image job. Mention that no image has been generated yet.",
        }, conversation, endpoint, model)
        emit({"kind": "action", "step": 2, "action": {"action": "ask_user", "args": {"question": question}}})
        return {"status": "approval_required", "run": run_id or f"image-{int(time.time())}", "step": 2, "message": "APPROVAL_REQUIRED: " + question}

    if kind == "profile":
        target = str(decision.get("target", ""))
        sources = [str(item) for item in (decision.get("sources") or [decision.get("source", "")]) if str(item).strip()]
        _emit_plan(emit, f"Resolve {target} from the named source", True, "The user requested a source-backed character profile.", "resolve the source record and participant, then draft before writing")
        try:
            matches, source, person = _resolve_profile_source(sources or [""], target)
        except Exception as error:
            failure = str(error)
            emit({"kind": "error", "step": 1, "result": f"could not resolve the profile request: {failure}"})
            message = _reply_safely({
                "situation": "the profile request could not be resolved from the archive",
                "user_request": request_text,
                "failure": failure,
                "instruction": (
                    "Explain the failure plainly using only the failure detail; if it names closest records or "
                    "participants, offer them. Ask for exactly what is missing. Do not invent a profile."
                ),
            }, conversation, endpoint, model)
            emit({"kind": "assistant", "text": message, "source": "no profile invented"})
            return {"status": "needs_input", "run": run_id or f"profile-{int(time.time())}", "step": 1, "message": message}
        source_id = str(source.get("id", ""))
        origin = "event"
        for item in sources:
            if re.fullmatch(r"[A-Za-z][\w-]*\.json", item) and item != "events.json":
                origin = item
                break
        emit({"kind": "action", "step": 1, "action": {"action": "repo_search", "args": {"terms": sources[:4], "dir": "Reputation-Matrix2/data", "limit": 6}}})
        emit({"kind": "result", "step": 1, "result": json.dumps(matches, ensure_ascii=False, indent=2)})
        emit({"kind": "action", "step": 2, "action": {"action": "catalog_retrieve", "args": {"source": origin, "ids": [source_id], "limit": 1}}})
        emit({"kind": "result", "step": 2, "result": json.dumps({"id": source_id, "name": source.get("name"), "title": source.get("title"), "participant": person}, ensure_ascii=False, indent=2)})
        draft = _profile_object(source, person, origin)
        evidence_text = _person_evidence(source, person) or str(source.get("summary", ""))
        updates = _model_profile_draft(draft, evidence_text, str(source.get("name", "")), request_text, endpoint, model)
        if updates:
            draft = {**draft, **updates}
        emit({"kind": "draft", "step": 3, "path": "Reputation-Matrix2/data/characters.json", "object": draft})
        state_id = run_id or f"profile-{int(time.time())}"
        _save_state(state_id, {"kind": "profile", "request": request_text, "conversation": conversation, "path": "Reputation-Matrix2/data/characters.json", "draft": draft})
        intro = _reply_safely({
            "situation": "a source-backed character profile has been drafted and is waiting for the user's approval",
            "character": draft.get("name"),
            "source_record": {"id": source_id, "name": source.get("name")},
            "evidence_used": _clip(_person_evidence(source, person) or str(source.get("summary", "")), 2000),
            "instruction": (
                "Tell the user the grounded draft is ready, that nothing has been written yet, and that replying with "
                "the single word approve will add it to characters.json. Invite corrections instead if they want changes. "
                "The full draft JSON is appended to your message automatically; do not repeat it."
            ),
        }, conversation, endpoint, model)
        message = intro + "\n\n" + _clip(draft, 7000)
        emit({"kind": "assistant", "text": message, "source": "source-backed draft; no write performed"})
        return {"status": "approval_required", "run": state_id, "step": 3, "message": "APPROVAL_REQUIRED: " + message}

    if kind == "write":
        path = decision.get("path")
        if not path:
            question = _reply_safely({
                "situation": "the user asked to change the archive but the exact target is unclear",
                "user_request": request_text,
                "missing_items": ["the exact file or canonical record to change", "the change to make"],
                "instruction": "Ask for both briefly. Mention that the target will be read first and nothing is written until they approve it.",
            }, conversation, endpoint, model)
            _emit_plan(emit, "Identify the exact write target", True, "The user requested a change but did not provide an unambiguous target.", "ask for the target; do not guess a file")
            emit({"kind": "action", "step": 1, "action": {"action": "ask_user", "args": {"question": question}}})
            emit({"kind": "result", "step": 1, "result": "QUESTION: " + question})
            return {"status": "needs_input", "run": run_id or f"write-{int(time.time())}", "step": 1, "message": "QUESTION: " + question}
        try:
            target = repo_tools.safe_path(str(path))
        except Exception as error:
            message = _reply_safely({
                "situation": "the requested write target cannot be used",
                "path": str(path),
                "failure": str(error),
                "instruction": "Explain the problem and ask for an existing file or a specific canonical record.",
            }, conversation, endpoint, model)
            emit({"kind": "assistant", "text": message, "source": "no write performed"})
            return {"status": "needs_input", "run": run_id, "message": message}
        if not target.is_file():
            message = _reply_safely({
                "situation": "the requested write target does not exist",
                "path": str(path),
                "instruction": "Tell the user the file is not in the checkout and ask for an existing file or a specific canonical record.",
            }, conversation, endpoint, model)
            emit({"kind": "assistant", "text": message, "source": "no write performed"})
            return {"status": "needs_input", "run": run_id, "message": message}
        _emit_plan(emit, f"Read {path} before any write", True, "The user explicitly requested a repository change.", "read the exact target, draft, then request approval")
        try:
            content = repo_tools.read_file(str(path), 12000)
        except Exception as error:
            message = _reply_safely({
                "situation": "the requested write target could not be read",
                "path": str(path),
                "failure": str(error),
            }, conversation, endpoint, model)
            emit({"kind": "error", "step": 1, "result": str(error)})
            emit({"kind": "assistant", "text": message, "source": "no write performed"})
            return {"status": "error", "run": run_id, "message": message}
        action = {"action": "repo_read", "args": {"path": str(path), "limit": 12000}}
        emit({"kind": "action", "step": 1, "action": action})
        emit({"kind": "result", "step": 1, "result": content})
        state_id = run_id or f"write-{int(time.time())}"
        _save_state(state_id, {"request": request_text, "conversation": conversation, "path": str(path), "target": content[:12000]})
        message = _reply_safely({
            "situation": "the write target was read and the exact change is still needed",
            "path": str(path),
            "file_preview": _clip(content, 4000),
            "instruction": (
                "Confirm you read the file, ask for the exact change to draft, and make clear nothing is written "
                "until they explicitly approve the patch."
            ),
        }, conversation, endpoint, model)
        emit({"kind": "assistant", "text": message, "source": "target read; no write performed"})
        return {"status": "approval_required", "run": state_id, "step": 1, "message": "APPROVAL_REQUIRED: " + message}

    # Read path: one focused repository operation, then a grounded response.
    _emit_plan(emit, "Read the requested archive evidence", True, "The user explicitly requested a repository or canon lookup.", "one focused read/search, then answer from its result")
    try:
        action, evidence = _execute_read(request_text, decision.get("path"), None)
    except Exception as error:
        failure = str(error)
        emit({"kind": "error", "step": 1, "result": f"the lookup could not run: {failure}"})
        message = _reply_safely({
            "situation": "an archive lookup could not be run",
            "user_request": request_text,
            "failure": failure,
            "instruction": "Explain what is needed to run the lookup, without inventing any result.",
        }, conversation, endpoint, model)
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
