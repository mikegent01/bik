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

import json
import re
from typing import Any

from ..spec import Task
from . import factions

SECTION_MIN_WORDS = 125
SECTION_MAX_WORDS = 250
SECTION_ATTEMPTS = 3
CLASSIFY_ATTEMPTS = 3
# These names do not contain an organisational suffix, but their source files
# establish a recurring invading force / operational partnership respectively.
PROTECTED_FACTION_IDS = {"shroob", "wario_bros"}

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
  "notFactionKind":"person|place|event|object|generic|duplicate|other",
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
    classify_feedback = ""
    metadata: dict[str, Any] = {}
    kind = ""
    for _ in range(CLASSIFY_ATTEMPTS):
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
            return metadata
        break
    if kind != "faction":
        return metadata  # whole-record validation keeps protected labels pending

    metadata = dict(metadata)
    metadata["classification"] = "faction"
    metadata.pop("description", None)
    metadata.pop("evidenceQuotes", None)
    metadata_view = {
        key: metadata.get(key) for key in (
            "name", "title", "type", "region", "currentStatus", "leader",
            "headquarters", "category", "summary", "relations",
        ) if metadata.get(key) not in (None, "", [], {})
    }

    sections: list[dict[str, str]] = []
    used_quotes: set[str] = set()
    for default_heading, brief in SECTION_BRIEFS:
        feedback = ""
        best: dict[str, Any] = {}
        for _ in range(SECTION_ATTEMPTS):
            prompt = (
                context
                + f"\n\nCONFIRMED DOSSIER METADATA:\n{json.dumps(metadata_view, ensure_ascii=False, indent=2)}"
                + f"\n\nSECTION TO WRITE: {default_heading}\n{brief}"
                + (f"\n\nDO NOT REUSE THESE QUOTES: {json.dumps([s['evidenceQuote'] for s in sections])}" if sections else "")
                + feedback
                + "\n\nReturn only the one-section JSON object."
            )
            raw_section = client.complete_json(
                SECTION_SYSTEM, prompt, temperature=temperature
            )
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
            break
        else:
            sections.append(_fallback_section(best, default_heading))

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
