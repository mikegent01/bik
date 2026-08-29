"""Multi-call authoring for faction dossiers.

A local model that reliably returns 200--350 words cannot satisfy a 500-word
record in one completion, no matter how many times the same prompt is retried.
This adapter treats one dossier as five bounded calls: a short classification
and metadata pass, then four independently validated prose sections. Four
125-word floors reach the dossier minimum without asking this model to exceed
the response size it demonstrated in the hour run. The assembled record still
goes through faction_dossiers.validate() before it can reach disk.
"""

from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path
from typing import Any

from ..settings import WORK_DIR
from ..spec import Task
from ..storage import atomic_write_json, read_json
from . import factions

SECTION_MIN_WORDS = 125
SECTION_MAX_WORDS = 250
SECTION_ATTEMPTS = 3
CLASSIFY_ATTEMPTS = 3
# These names do not contain an organisational suffix, but their source files
# establish a recurring invading force / operational partnership respectively.
PROTECTED_FACTION_IDS = {"shroob", "wario_bros"}
DRAFT_DIR = WORK_DIR / "draft-faction-dossiers"

SECTION_BRIEFS = (
    (
        "Identity and Confirmed Standing",
        "Establish what this organisation is, where it operates, and what the "
        "archive actually proves about its current status.",
    ),
    (
        "Membership and Structure",
        "Name only confirmed members, leaders, ranks, branches, or collective "
        "features. If the records do not establish a hierarchy, say so plainly.",
    ),
    (
        "Recorded Operations and Relationships",
        "Reconstruct concrete actions from the supplied records: named people, "
        "objects, places, tactics, allies, enemies, and consequences.",
    ),
    (
        "Risks, Unknowns, and Waluigi's Assessment",
        "Separate confirmed danger from inference, name what remains unknown, and "
        "close with specific operational advice in Waluigi's archival voice.",
    ),
)

CLASSIFY_SYSTEM = """You are reviewing a proposed faction label in an in-world
campaign archive. Decide whether the supplied records describe a persistent,
organised body capable of collective reputation. A person, place, event,
species, generic public, aggregate report bucket, or UI phrase is not a faction.

Do NOT write dossier prose yet. Return strictly valid JSON only.

For a faction:
{
  "classification":"faction", "name":"Proper Name", "title":"Short subtitle",
  "type":"Organisation type", "region":"Recorded region or Unrecorded",
  "currentStatus":"Recorded status or Unconfirmed", "leader":"Name or Unrecorded",
  "headquarters":"Place or Unrecorded", "motto":"Recorded motto or No recorded motto",
  "category":"Minor Powers", "power_level":1,
  "summary":"Two specific evidence-based sentences",
  "relations":{"allies":["supplied_id"],"enemies":["supplied_id"]},
  "waluigi_tip":"Two specific sentences of operational advice"
}

For anything else:
{
  "classification":"not_faction",
  "notFactionKind":"person|place|event|species|object|generic|duplicate|other",
  "reason":"Two specific sentences explaining what the source actually identifies",
  "redirectFactionId":"a supplied canonical faction id only when clearly justified, otherwise blank"
}

Never invent an organisation just to keep a reputation number."""

SECTION_SYSTEM = """You write ONE section of a faction intelligence dossier in
Waluigi's in-world archival voice. Return strictly valid JSON only:

{"heading":"Section heading without Markdown marks",
 "text":"125-250 words of finished prose",
 "evidenceQuote":"one exact 4-18 word excerpt from the supplied source articles"}

Hard rules:
- Write only this section, not the whole dossier.
- The text must be 125-250 words. Finish the section cleanly.
- Include the evidenceQuote verbatim in the text and explain what it proves.
- Use a different quote from earlier sections.
- Name concrete people, actions, objects and places from the supplied records.
- Separate fact from inference and say when the archive is silent.
- Never mention a game, table, model, prompt, player, GM, or mike.
- Do not add history, members, motives, doctrine or relationships absent from the sources."""


def _dossiers():
    # Lazy import avoids a module cycle: faction_dossiers registers this
    # generator while this module uses its context/evidence helpers.
    from . import faction_dossiers
    return faction_dossiers


def _classification(value: Any) -> str:
    return re.sub(r"[^a-z]+", "_", str(value or "").strip().lower()).strip("_")


def _base_context(task: Task) -> str:
    dossiers = _dossiers()
    _, user = dossiers.build_prompt(task)
    return user + (
        "\n\nOVERRIDE THE FINAL REQUEST ABOVE: perform only the classification and "
        "metadata pass now. Do not write description prose or evidence quotes yet."
    )


def _source_corpus(task: Task) -> str:
    dossiers = _dossiers()
    sources = task.payload.get("usedSources", task.payload.get("sources", []))
    return dossiers._evidence_text("\n".join(
        text for source in sources
        for text in dossiers._strings(source.get("record", {}))
    ))


def _evidence_candidates(task: Task, count: int = 4) -> list[str]:
    """Select exact, bounded excerpts before asking the model to write.

    Asking a local model to both FIND an exact quote and reproduce it was a
    needless failure point. Candidates are copied from high-value source fields
    and ranked so dialogue and concrete clauses beat arbitrary slices of one
    enormous summary sentence.
    """
    dossiers = _dossiers()
    sources = task.payload.get("usedSources", task.payload.get("sources", []))
    fields = (
        "summary", "description", "aftermath", "result", "outcome",
        "outcomeDetail", "notableFeatures", "tacticalNotes",
    )
    physical = {
        "door", "floor", "paper", "papers", "sword", "axe", "fire", "blood",
        "ship", "room", "tower", "manor", "coin", "book", "window", "hand",
        "bridge", "gate", "crown", "armor", "armour", "body", "wall",
    }
    ranked: list[tuple[int, int, int, str]] = []
    seen: set[str] = set()
    order = 0

    def offer(
        words: list[str], *, dialogue: bool = False, source_bonus: int = 0,
        source_index: int = 0,
    ) -> None:
        nonlocal order
        if not 4 <= len(words) <= 18:
            return
        quote = " ".join(words)
        normal = dossiers._evidence_text(quote)
        if not normal or normal in seen or re.search(r"\bmike\b", normal):
            return
        lower = [word.casefold() for word in words]
        proper = sum(word[:1].isupper() for word in words[1:])
        score = source_bonus + (10 if dialogue else 0) + min(proper, 3) * 2
        score += min(sum(word in physical for word in lower), 3) * 2
        score += 2 if 6 <= len(words) <= 14 else 0
        if lower[0] in {"and", "but", "or", "following", "which", "that"}:
            score -= 3
        if lower[-1] in {"a", "an", "the", "and", "or", "to", "of", "in", "that"}:
            return
        seen.add(normal)
        ranked.append((score, -source_index, -order, quote))
        order += 1

    for source_index, source in enumerate(sources):
        record = source.get("record", {})
        # The named source record is authoritative; linked articles add context
        # but must not drown it out with more colorful unrelated dialogue.
        source_bonus = max(0, 16 - source_index * 4)
        for field in fields:
            for raw in dossiers._strings(record.get(field)):
                # Spoken lines are usually the strongest documentary anchors.
                spoken = re.compile(
                    r'"([^"\n]{10,180})"|“([^”\n]{10,180})”|(?<!\w)\'([^\'\n]{10,180})\'(?!\w)'
                )
                for match in spoken.finditer(raw):
                    line = next(group for group in match.groups() if group is not None)
                    offer(
                        re.findall(r"[A-Za-z0-9]+(?:['’][A-Za-z0-9]+)?", line),
                        dialogue=True, source_bonus=source_bonus,
                        source_index=source_index,
                    )
                # Commas and em dashes are legitimate clause boundaries; using
                # them avoids excerpts ending halfway through a thought.
                for clause in re.split(r"(?<=[.!?;:])\s+|\s+[—–]\s+|,\s+|\n+", raw):
                    words = re.findall(r"[A-Za-z0-9]+(?:['’][A-Za-z0-9]+)?", clause)
                    if len(words) <= 18:
                        offer(words, source_bonus=source_bonus, source_index=source_index)
                    elif words:
                        # Last resort for very long analytical sentences. Keep
                        # these low-ranked behind complete clauses/dialogue.
                        for start in range(0, min(len(words) - 3, 42), 14):
                            offer(
                                words[start:start + 14], source_bonus=source_bonus,
                                source_index=source_index,
                            )

    ranked.sort(reverse=True)
    primary = [row for row in ranked if row[1] == 0]
    chosen = primary[:count] if len(primary) >= count else ranked[:count]
    return [quote for _, _, _, quote in chosen]


def _progress(task: Task, text: str) -> None:
    callback = task.payload.get("_progress")
    if callable(callback):
        callback(text)


def _draft_path(task: Task) -> Path:
    safe = re.sub(r"[^a-z0-9_-]+", "_", task.payload["id"].lower())
    return DRAFT_DIR / f"{safe}.json"


def _source_signature(task: Task) -> str:
    sources = task.payload.get("usedSources", task.payload.get("sources", []))
    payload = [
        {"kind": source.get("kind"), "record": source.get("record", {})}
        for source in sources
    ]
    return hashlib.sha256(
        json.dumps(payload, ensure_ascii=False, sort_keys=True).encode("utf-8")
    ).hexdigest()


def _load_draft(task: Task, signature: str) -> dict[str, Any]:
    draft = read_json(_draft_path(task), default={})
    if not isinstance(draft, dict) or draft.get("sourceSignature") != signature:
        return {
            "version": 1, "factionId": task.payload["id"],
            "sourceSignature": signature, "metadata": {}, "sections": [],
        }
    if not isinstance(draft.get("sections"), list):
        draft["sections"] = []
    return draft


def _save_draft(task: Task, draft: dict[str, Any]) -> None:
    atomic_write_json(_draft_path(task), draft)


def clear_draft(task: Task) -> None:
    """Remove a completed dossier's resumable working paper."""
    try:
        _draft_path(task).unlink(missing_ok=True)
    except OSError:
        pass


def _clean_section(task: Task, raw: dict[str, Any], used_quotes: set[str]) -> dict[str, str]:
    dossiers = _dossiers()
    heading = " ".join(str(raw.get("heading") or "").lstrip("# ").split())
    text = str(raw.get("text") or "").strip()
    quote = " ".join(str(raw.get("evidenceQuote") or "").split()).strip('"“”')
    words = dossiers.word_count(text)

    if not 5 <= len(heading) <= 100:
        raise ValueError("heading must be 5-100 characters")
    if words < SECTION_MIN_WORDS:
        raise ValueError(
            f"section is {words} words; write at least {SECTION_MIN_WORDS} and finish it"
        )
    if words > SECTION_MAX_WORDS:
        raise ValueError(f"section is {words} words; maximum is {SECTION_MAX_WORDS}")

    normal = dossiers._evidence_text(quote)
    quote_words = normal.split()
    if not 4 <= len(quote_words) <= 18:
        raise ValueError("evidenceQuote must be 4-18 words")
    if normal in used_quotes:
        raise ValueError("choose a different evidence quote from earlier sections")
    if normal not in _source_corpus(task):
        raise ValueError(f"evidenceQuote is not verbatim in the supplied articles: {quote!r}")
    if normal not in dossiers._evidence_text(text):
        raise ValueError("the section text must include evidenceQuote verbatim")
    if re.search(r"\b(mike|game master|dungeon master|language model|prompt|player)\b", text, re.I):
        raise ValueError("section contains out-of-world language")
    return {"heading": heading, "text": text, "evidenceQuote": quote}


def _fallback_section(raw: dict[str, Any], default_heading: str) -> dict[str, str]:
    """Return the best failed attempt so the normal final validator can retry it."""
    return {
        "heading": " ".join(
            str(raw.get("heading") or default_heading).lstrip("# ").split()
        )[:100],
        "text": str(raw.get("text") or "").strip(),
        "evidenceQuote": " ".join(
            str(raw.get("evidenceQuote") or "").split()
        ).strip('"“”'),
    }


def generate(task: Task, client: Any, temperature: float) -> dict[str, Any]:
    """Classify once, write four bounded sections, return one raw dossier."""
    dossiers = _dossiers()
    faction_id = task.payload["id"]
    entry = task.payload["entry"]

    # Apply the same high-confidence identity gate before loading a resumable
    # draft. Otherwise a previous bad run can contain faction metadata and make
    # us resume expensive prose for a person such as Funky Kong.
    obvious_kind = dossiers._obvious_non_faction_kind(task)
    if obvious_kind:
        label = entry.get("name") or faction_id.replace("_", " ").title()
        return {
            "classification": "not_faction", "notFactionKind": obvious_kind,
            "reason": (
                f"The archive identifies {label} as a {obvious_kind}, not a persistent "
                "organisation with collective standing. The reputation label must "
                "not become a faction dossier."
            ),
            "redirectFactionId": (
                "dk_crew" if obvious_kind == "person" and "kong" in faction_id
                and "dk_crew" in dossiers.reputation.faction_ids() else ""
            ),
        }

    # These verdicts come from canonical registries/string shapes and do not
    # need a model call. More importantly, they cannot be talked into becoming
    # lore by a model trying too hard to satisfy the prose request.
    if factions.is_person(faction_id) or factions.is_person(entry.get("name", "")):
        name = entry.get("name") or faction_id.replace("_", " ").title()
        return {
            "classification": "not_faction", "notFactionKind": "person",
            "reason": (
                f"The canonical character roster identifies {name} as one person, "
                "not an organisation with persistent collective standing. The "
                "reputation label was therefore filed in the wrong namespace."
            ),
            "redirectFactionId": "",
        }
    if factions.is_meta_label(faction_id):
        return {
            "classification": "not_faction", "notFactionKind": "generic",
            "reason": (
                f"{entry.get('name') or faction_id} is an aggregate report label, "
                "not a named organisation with members or continuity. It must not "
                "be expanded into invented faction lore."
            ),
            "redirectFactionId": "",
        }

    context = _base_context(task)
    signature = _source_signature(task)
    draft = _load_draft(task, signature)
    if task.last_error:
        context += (
            f"\n\nThe previous assembled dossier was rejected: {task.last_error}. "
            "Correct that problem in this new pass."
        )
    protected = (
        factions.is_group_label(faction_id)
        or factions.is_group_label(entry.get("name", ""))
        or faction_id in PROTECTED_FACTION_IDS
    )
    cached_metadata = draft.get("metadata")
    metadata = dict(cached_metadata) if isinstance(cached_metadata, dict) else {}
    kind = _classification(metadata.get("classification"))
    # A fresh process may resume metadata and completed sections. Within one
    # runner retry, reclassify so a bad metadata field can recover while valid
    # section drafts remain available.
    if kind == "faction" and not task.last_error:
        _progress(task, "resumed classification metadata from disk")
    else:
        classify_feedback = ""
        metadata = {}
        kind = ""
        for classify_attempt in range(CLASSIFY_ATTEMPTS):
            _progress(
                task,
                f"classification {classify_attempt + 1}/{CLASSIFY_ATTEMPTS}",
            )
            metadata = client.complete_json(
                CLASSIFY_SYSTEM, context + classify_feedback,
                temperature=min(temperature, 0.55),
            )
            kind = _classification(metadata.get("classification"))
            not_faction = kind in {
                "not_faction", "not_a_faction", "non_faction",
                "person", "place", "generic",
            }
            if not_faction and protected:
                classify_feedback = (
                    "\n\nYOUR LAST CLASSIFICATION WAS REJECTED. This label explicitly "
                    "names an organisational form or a source-confirmed recurring "
                    "collective. Re-read the articles and return faction metadata; "
                    "do not collapse the organisation into the event where it appeared."
                )
                continue
            if not_faction:
                clear_draft(task)
                return metadata
            break
        if kind != "faction":
            return metadata  # whole-record validation keeps protected labels pending

    metadata = dict(metadata)
    metadata["classification"] = "faction"
    metadata.pop("description", None)
    metadata.pop("evidenceQuotes", None)
    draft["metadata"] = metadata
    _save_draft(task, draft)
    metadata_view = {
        key: metadata.get(key) for key in (
            "name", "title", "type", "region", "currentStatus", "leader",
            "headquarters", "category", "summary", "relations",
        ) if metadata.get(key) not in (None, "", [], {})
    }

    sections: list[dict[str, str]] = []
    used_quotes: set[str] = set()
    assigned_quotes = _evidence_candidates(task, len(SECTION_BRIEFS))
    saved_sections = draft.get("sections") if isinstance(draft.get("sections"), list) else []
    for section_index, (default_heading, brief) in enumerate(SECTION_BRIEFS):
        feedback = ""
        best: dict[str, Any] = {}
        required_quote = (
            assigned_quotes[section_index]
            if section_index < len(assigned_quotes) else ""
        )
        if section_index < len(saved_sections):
            try:
                saved = _clean_section(task, saved_sections[section_index], used_quotes)
                if required_quote and _dossiers()._evidence_text(saved["evidenceQuote"]) != _dossiers()._evidence_text(required_quote):
                    raise ValueError("assigned source quote changed")
            except (TypeError, ValueError):
                # Keep earlier valid sections; regenerate from the first stale
                # slot and truncate anything after it.
                saved_sections = saved_sections[:section_index]
                draft["sections"] = saved_sections
                _save_draft(task, draft)
            else:
                sections.append(saved)
                used_quotes.add(dossiers._evidence_text(saved["evidenceQuote"]))
                _progress(
                    task,
                    f"resumed section {section_index + 1}/{len(SECTION_BRIEFS)} · {saved['heading']}",
                )
                continue
        for section_attempt in range(SECTION_ATTEMPTS):
            _progress(
                task,
                f"section {section_index + 1}/{len(SECTION_BRIEFS)} · "
                f"attempt {section_attempt + 1}/{SECTION_ATTEMPTS} · {default_heading}",
            )
            quote_instruction = (
                "\n\nREQUIRED EVIDENCE QUOTE — copy these words exactly into "
                f"both `evidenceQuote` and `text`: \"{required_quote}\""
                if required_quote else ""
            )
            prompt = (
                context
                + f"\n\nCONFIRMED DOSSIER METADATA:\n{json.dumps(metadata_view, ensure_ascii=False, indent=2)}"
                + f"\n\nSECTION TO WRITE: {default_heading}\n{brief}"
                + quote_instruction
                + (f"\n\nDO NOT REUSE THESE QUOTES: {json.dumps([s['evidenceQuote'] for s in sections])}" if sections else "")
                + feedback
                + "\n\nReturn only the one-section JSON object."
            )
            raw_section = client.complete_json(
                SECTION_SYSTEM, prompt, temperature=temperature
            )
            if required_quote:
                # The excerpt came from source code, not the model. Keep that
                # exact value authoritative; validation below now asks only
                # whether the prose actually used it.
                raw_section = dict(raw_section)
                raw_section["evidenceQuote"] = required_quote
            if dossiers.word_count(raw_section.get("text")) > dossiers.word_count(best.get("text")):
                best = raw_section
            try:
                clean = _clean_section(task, raw_section, used_quotes)
            except ValueError as error:
                feedback = (
                    f"\n\nYOUR LAST SECTION ATTEMPT WAS REJECTED: {error}. "
                    "Rewrite this same section from the beginning and fix that exact problem."
                )
                continue
            sections.append(clean)
            used_quotes.add(dossiers._evidence_text(clean["evidenceQuote"]))
            draft["sections"] = list(sections)
            _save_draft(task, draft)
            break
        else:
            sections.append(_fallback_section(best, default_heading))

    _progress(task, "assembling and validating four-section dossier")
    metadata["description"] = "\n\n".join(
        f"## {section['heading']}\n\n{section['text']}" for section in sections
    )
    # The public dossier contract keeps three filed excerpts. The fourth
    # section is still quote-grounded and independently checked; its quote is
    # present in the prose but need not duplicate the compact evidence list.
    metadata["evidenceQuotes"] = [
        section["evidenceQuote"] for section in sections[:3]
    ]
    return metadata
