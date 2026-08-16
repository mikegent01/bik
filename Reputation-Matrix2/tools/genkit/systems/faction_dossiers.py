"""Review generated faction stubs and turn real groups into full dossiers.

The reputation backfill can discover a named group before the archive has a
faction page for it.  `factions.mint()` deliberately writes a small, honest
stub in that case so the score is not lost.  A stub is not the end product,
though: this system reopens the record that caused the mint, follows its
`relatedArticles`, decides whether the label is actually a faction, and writes
an evidence-bound Waluigi dossier of roughly 500--1,000 words.

The classification pass matters.  Older runs minted people (`wario`), places
(`dragon_mountain`) and aggregate labels (`all_factions`) as factions.  Writing
500 words around those mistakes would make them look canonical. Non-factions
are removed, optionally redirected to a real faction, and their generated
reputation keys are repaired rather than displayed as institutions.
"""

from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from .. import prompting
from ..settings import ROOT
from ..spec import SystemSpec, Task, TaskResult, ValidationError
from ..storage import atomic_write_json, read_json
from . import factions, reputation

ARTICLE_FILES = {
    "event": ROOT / "data" / "events.json",
    "battle": ROOT / "data" / "battles.json",
    "majorBattle": ROOT / "data" / "majorBattles.json",
    "trial": ROOT / "data" / "trials.json",
    "character": ROOT / "data" / "characters.json",
    "location": ROOT / "data" / "locations.json",
    "faction": ROOT / "data" / "factions.json",
    "nation": ROOT / "data" / "nations.json",
    "conflict": ROOT / "data" / "conflicts.json",
}
REPUTATION_FILES = tuple(reputation.FILES.values())
PLACEHOLDER = "No dossier has been written yet"
MIN_WORDS = 500
# The project treats length bands as aims, not reasons to cut good prose.  The
# prompt asks for 1,000; the validator allows a small overrun rather than
# throwing away an otherwise sound dossier for one final paragraph.
MAX_WORDS = 1100
WORD = re.compile(r"\b[\w’'-]+\b", re.UNICODE)
HEADING = re.compile(r"(?m)^#{2,3}\s+\S")
ALLOWED_KINDS = {"person", "place", "event", "object", "generic", "duplicate", "other"}


def _container(path: Path) -> list[dict[str, Any]]:
    data = read_json(path, default=[])
    if isinstance(data, list):
        return [row for row in data if isinstance(row, dict)]
    if isinstance(data, dict):
        rows: list[dict[str, Any]] = []
        for value in data.values():
            if isinstance(value, list):
                rows.extend(row for row in value if isinstance(row, dict))
        return rows
    return []


def _store() -> dict[str, Any]:
    return read_json(factions.GENERATED, default=None) or {
        "version": 1,
        "note": "Factions discovered by tools/genkit and reviewed from their source records.",
        "factions": {},
    }


def word_count(text: Any) -> int:
    return len(WORD.findall(str(text or "")))


def needs_dossier(entry: dict[str, Any]) -> bool:
    """A generated, visible faction is pending until it has substantive prose."""
    if not isinstance(entry, dict) or entry.get("status") == "retired":
        return False
    generated = entry.get("_generated") or {}
    if generated.get("system") != "factions":
        return False
    description = str(entry.get("description") or "")
    return PLACEHOLDER in description or word_count(description) < MIN_WORDS


def pending() -> int:
    return sum(1 for row in _store().get("factions", {}).values() if needs_dossier(row))


def _norm(value: Any) -> str:
    return re.sub(r"[^a-z0-9]+", " ", str(value or "").lower()).strip()


def _catalogue() -> list[tuple[str, dict[str, Any]]]:
    return [
        (kind, record)
        for kind, path in ARTICLE_FILES.items()
        for record in _container(path)
    ]


def source_context(
    faction_id: str,
    entry: dict[str, Any],
    catalogue: list[tuple[str, dict[str, Any]]] | None = None,
) -> list[dict[str, Any]]:
    """Primary source first, then records it links and records linking back.

    This is intentionally ID-driven after the primary title match.  A generic
    text search for `all`, `general` or `wario` floods the prompt with unrelated
    prose and teaches the model to rationalise the bad label instead of review
    it.
    """
    catalogue = catalogue if catalogue is not None else _catalogue()
    source_name = (entry.get("_generated") or {}).get("sourceRecord", "")
    wanted = _norm(source_name)
    primary = [
        (kind, record) for kind, record in catalogue
        if wanted and wanted in {
            _norm(record.get("id")), _norm(record.get("name")), _norm(record.get("title"))
        }
    ]
    by_id: dict[str, tuple[str, dict[str, Any]]] = {}
    for kind, record in catalogue:
        rid = str(record.get("id") or "")
        if rid and rid not in by_id:
            by_id[rid] = (kind, record)

    selected: list[tuple[str, dict[str, Any]]] = list(primary)
    referenced: list[str] = []
    for _, record in primary:
        refs = record.get("relatedArticles") or []
        if isinstance(refs, list):
            referenced.extend(str(ref) for ref in refs)
    direct = [by_id[rid] for rid in referenced if rid in by_id]
    # An event or faction dossier usually explains the group better than six
    # individual biographies. Keep the source's order within each class, but
    # spend the bounded context on institutional records first.
    direct.sort(key=lambda pair: pair[0] == "character")
    selected.extend(direct)

    # A second filing may be the only place that explains what the newly
    # minted id means.  Include a small reverse-link sample, after explicit
    # references so direct evidence always wins the context budget.
    for kind, record in catalogue:
        refs = record.get("relatedArticles") or []
        if isinstance(refs, list) and faction_id in refs:
            selected.append((kind, record))

    out: list[dict[str, Any]] = []
    seen: set[tuple[str, str]] = set()
    for kind, record in selected:
        key = (kind, str(record.get("id") or _norm(record.get("name"))))
        if key in seen:
            continue
        seen.add(key)
        out.append({"kind": kind, "record": record})
        if len(out) >= 5:
            break
    return out


def next_tasks(count: int) -> list[Task]:
    tasks: list[Task] = []
    catalogue = _catalogue()
    for faction_id, entry in _store().get("factions", {}).items():
        if not needs_dossier(entry):
            continue
        sources = source_context(faction_id, entry, catalogue)
        tasks.append(Task(
            system_id="faction-dossiers",
            key=f"faction-dossier:{faction_id}",
            label=f"faction dossier · {entry.get('name') or faction_id}",
            payload={"id": faction_id, "entry": entry, "sources": sources},
        ))
        if len(tasks) >= count:
            break
    return tasks


SYSTEM_PROMPT = """You are Waluigi's in-world intelligence archivist. Review a
label that an automated reputation pass treated as a faction, using only the
primary record and its linked archive articles.

FIRST decide whether it is a faction. A faction is a persistent organised body
that can collectively remember deeds and change its standing: an army, house,
crew, order, guild, government, cult, or a recurring operational partnership.
A single person, place, event, species, object, vague public, outcome, UI label,
or phrase such as "all factions" is not a faction. Do not invent an
organisation around a bad label merely to satisfy the requested length.

Return strictly valid JSON only, no code fence. For a real faction:
{
  "classification": "faction",
  "name": "Proper Name",
  "title": "Short in-world subtitle",
  "type": "Organisation type",
  "region": "Evidence-based operating region or Unrecorded",
  "currentStatus": "Evidence-based current status or Unconfirmed",
  "leader": "Named leader, Collective, or Unrecorded",
  "headquarters": "Named site or Unrecorded",
  "motto": "Recorded motto or No recorded motto",
  "category": "Minor Powers",
  "power_level": 1,
  "summary": "Two evidence-based sentences",
  "description": "500-1000 words of Markdown dossier prose",
  "evidenceQuotes": ["exact 4-18 word quote", "exact quote", "exact quote"],
  "relations": {"allies": ["known_faction_id"], "enemies": ["known_faction_id"]},
  "waluigi_tip": "Two or three specific sentences of operational advice"
}

For anything else:
{
  "classification": "not_faction",
  "notFactionKind": "person|place|event|object|generic|duplicate|other",
  "reason": "Two specific sentences explaining what the source actually identifies",
  "redirectFactionId": "a supplied canonical faction id if the score clearly belongs there, otherwise blank"
}

Dossier rules:
- 500-1000 words in `description`; use at least three `##` section headings.
- `evidenceQuotes` must contain exactly three distinct, verbatim 4-18 word
  excerpts from the supplied articles. Work every quote into `description` and
  explain what it proves. Do not quote the current stub.
- Write from inside the world in Waluigi's opinionated archival voice. Name
  physical evidence, actions, quotes, places and uncertainties from the files.
- Separate confirmed facts from inference. Admit what the record does not say.
- Do not invent members, doctrine, history, motives, alliances or power.
- Waluigi is the archivist, not an omniscient narrator. Never mention players,
  a table, prompts, models, generators, a GM, or the name mike.
- `power_level` is 1-10. Keep a one-record group low unless the evidence proves otherwise.
- Relations and redirects may use only ids supplied in the prompt.
"""


def _compact_source(source: dict[str, Any], budget: int) -> dict[str, Any]:
    record = source["record"]
    fields = (
        "id", "name", "title", "type", "date", "era", "location", "region", "status",
        "summary", "description", "aftermath", "result", "outcome", "outcomeDetail",
        "belligerents", "participants", "commanders", "relatedArticles",
    )
    view = {field: record[field] for field in fields if record.get(field) not in (None, "", [], {})}
    view = prompting.fit(
        view, budget,
        priority=["id", "name", "title", "summary", "description"],
        min_field_chars=180,
    )
    return {"recordType": source["kind"], **view}


def build_prompt(task: Task) -> tuple[str, str]:
    entry = task.payload["entry"]
    sources = task.payload["sources"]
    canonical = sorted(reputation.faction_ids())
    likely_person = factions.is_person(task.payload["id"]) or factions.is_person(entry.get("name", ""))

    budget = prompting.char_budget(reserved_tokens=1500, system_prompt=SYSTEM_PROMPT)
    stub_view = {
        key: entry.get(key) for key in ("name", "description", "region", "category")
        if entry.get(key)
    }
    fixed = (
        f"CANDIDATE ID: {task.payload['id']}\n"
        f"CURRENT STUB: {json.dumps(stub_view, ensure_ascii=False)}\n"
        f"ROSTER CHECK SAYS PERSON: {'yes' if likely_person else 'no'}\n"
        f"CANONICAL REDIRECT/RELATION IDS: {', '.join(canonical)}\n"
        "SOURCE ARTICLES:\n"
    )
    person_warning = (
        "\n\nThe canonical character roster identifies this exact label as one person. "
        "It cannot pass as a faction; classify it and redirect only if the sources justify one."
        if likely_person else ""
    )
    closing = "\n\nReview the label. If it is a real faction, write the full dossier now."
    source_budget = max(700, budget - len(fixed) - len(person_warning) - len(closing))
    compact: list[dict[str, Any]] = []
    if sources:
        primary_share = min(2200, max(800, source_budget // 2))
        compact.append(_compact_source(sources[0], primary_share))
        rest = sources[1:]
        each = max(300, (source_budget - primary_share - 120) // max(1, len(rest)))
        compact.extend(_compact_source(source, each) for source in rest)
        # JSON punctuation and protected identity fields can make the sum of
        # per-record budgets run long. Drop the least important tail before
        # allowing the input to steal the reply space needed for 1,000 words.
        while len(json.dumps(compact, ensure_ascii=False, indent=2)) > source_budget and len(compact) > 1:
            compact.pop()
        if len(json.dumps(compact, ensure_ascii=False, indent=2)) > source_budget:
            compact = [_compact_source(sources[0], source_budget - 40)]
    # Validation/provenance must name only articles that were actually sent.
    task.payload["usedSources"] = sources[:len(compact)]
    user = fixed + json.dumps(compact, ensure_ascii=False, indent=2) + person_warning + closing
    return SYSTEM_PROMPT, user


def _line(value: Any, fallback: str, limit: int = 180) -> str:
    text = " ".join(str(value or "").split())
    return (text or fallback)[:limit]


def _strings(node: Any) -> list[str]:
    """Flatten source fields into the evidence corpus without stringifying keys."""
    if isinstance(node, str):
        return [node]
    if isinstance(node, dict):
        return [text for value in node.values() for text in _strings(value)]
    if isinstance(node, list):
        return [text for value in node for text in _strings(value)]
    return []


def _evidence_text(value: Any) -> str:
    """Word-exact comparison that ignores punctuation and curly quote forms."""
    return " ".join(re.findall(r"[a-z0-9]+(?:['’][a-z0-9]+)?", str(value).casefold()))


def _validate_evidence_quotes(task: Task, raw: Any, description: str) -> list[str]:
    if not isinstance(raw, list) or len(raw) != 3:
        raise ValidationError("evidenceQuotes must contain exactly three verbatim source excerpts")
    sources = task.payload.get("usedSources", task.payload["sources"])
    corpus = _evidence_text("\n".join(
        text for source in sources for text in _strings(source.get("record", {}))
    ))
    described = _evidence_text(description)
    clean: list[str] = []
    seen: set[str] = set()
    for value in raw:
        quote = " ".join(str(value or "").split()).strip('"“”')
        normal = _evidence_text(quote)
        words = normal.split()
        if not 4 <= len(words) <= 18:
            raise ValidationError("each evidence quote must be 4-18 words")
        if normal in seen:
            raise ValidationError("evidence quotes must be distinct")
        if normal not in corpus:
            raise ValidationError(f"evidence quote is not verbatim in a supplied article: {quote!r}")
        if normal not in described:
            raise ValidationError(f"description does not use evidence quote: {quote!r}")
        seen.add(normal)
        clean.append(quote)
    return clean


def validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    classification = _norm(raw.get("classification")).replace(" ", "_")
    if classification in {"not_a_faction", "non_faction", "person", "place", "generic"}:
        classification = "not_faction"
    if classification not in {"faction", "not_faction"}:
        raise ValidationError("classification must be exactly faction or not_faction")

    faction_id = task.payload["id"]
    entry = task.payload["entry"]
    canonical = set(reputation.faction_ids())
    known_person = factions.is_person(faction_id) or factions.is_person(entry.get("name", ""))

    if classification == "not_faction":
        kind = _norm(raw.get("notFactionKind")).replace(" ", "_")
        if kind not in ALLOWED_KINDS:
            raise ValidationError(f"notFactionKind must be one of {sorted(ALLOWED_KINDS)}")
        reason = _line(raw.get("reason"), "", 500)
        if word_count(reason) < 12:
            raise ValidationError("non-faction review needs two specific sentences")
        redirect = factions.slugify(raw.get("redirectFactionId", ""))
        if redirect and (redirect not in canonical or redirect == faction_id):
            raise ValidationError("redirectFactionId must be a supplied canonical faction id or blank")
        return {
            "classification": "not_faction", "notFactionKind": kind,
            "reason": reason, "redirectFactionId": redirect,
        }

    if known_person:
        raise ValidationError(
            "the character roster identifies this label as one person; classify it as not_faction"
        )

    description = str(raw.get("description") or "").strip()
    words = word_count(description)
    if words < MIN_WORDS:
        raise ValidationError(f"dossier is {words} words; write at least {MIN_WORDS}")
    if words > MAX_WORDS:
        raise ValidationError(f"dossier is {words} words; keep it near 500-1000 (maximum {MAX_WORDS})")
    if PLACEHOLDER.lower() in description.lower():
        raise ValidationError("the placeholder sentence is not a dossier")
    if len(HEADING.findall(description)) < 3:
        raise ValidationError("dossier needs at least three ## section headings")
    if "waluigi" not in description.lower():
        raise ValidationError("dossier must hold Waluigi's in-world archival voice")
    banned = re.search(r"\b(mike|game master|dungeon master|language model|prompt)\b", description, re.I)
    if banned:
        raise ValidationError(f"out-of-world term in dossier: {banned.group(0)!r}")
    evidence_quotes = _validate_evidence_quotes(task, raw.get("evidenceQuotes"), description)

    try:
        power = int(raw.get("power_level", 1))
    except (TypeError, ValueError) as error:
        raise ValidationError("power_level must be an integer 1-10") from error
    if not 1 <= power <= 10:
        raise ValidationError("power_level must be an integer 1-10")

    relations = raw.get("relations") if isinstance(raw.get("relations"), dict) else {}
    all_known = canonical | set(_store().get("factions", {}))
    clean_relations: dict[str, list[str]] = {}
    for side in ("allies", "enemies"):
        values = relations.get(side) if isinstance(relations.get(side), list) else []
        clean_relations[side] = list(dict.fromkeys(
            factions.slugify(value) for value in values
            if factions.slugify(value) in all_known and factions.slugify(value) != faction_id
        ))[:8]

    source_ids = list(dict.fromkeys(
        str(source["record"].get("id"))
        for source in task.payload.get("usedSources", task.payload["sources"])
        if source["record"].get("id")
    ))
    return {
        "classification": "faction",
        "name": _line(raw.get("name"), entry.get("name") or faction_id, 100),
        "title": _line(raw.get("title"), "An Emerging File", 140),
        "type": _line(raw.get("type"), "Organisation (classification unconfirmed)", 140),
        "region": _line(raw.get("region"), entry.get("region") or "Unrecorded", 140),
        "currentStatus": _line(raw.get("currentStatus"), "Unconfirmed", 180),
        "leader": _line(raw.get("leader"), "Unrecorded", 120),
        "headquarters": _line(raw.get("headquarters"), "Unrecorded", 140),
        "motto": _line(raw.get("motto"), "No recorded motto", 180),
        "category": _line(raw.get("category"), entry.get("category") or "Minor Powers", 100),
        "power_level": power,
        "summary": _line(raw.get("summary"), "Dossier assembled from the linked record.", 500),
        "description": description,
        "evidenceQuotes": evidence_quotes,
        "relations": clean_relations,
        "waluigi_tip": _line(raw.get("waluigi_tip"), "Waluigi recommends gathering more evidence before contact.", 600),
        "sourceArticles": source_ids,
    }


def _merge_delta(mapping: dict[str, Any], old: str, new: str) -> bool:
    if old not in mapping:
        return False
    value = mapping.pop(old)
    if new:
        current = mapping.get(new)
        try:
            replace = current is None or abs(int(value)) > abs(int(current))
        except (TypeError, ValueError):
            replace = current is None
        if replace:
            mapping[new] = value
    return True


def _rewrite_node(node: Any, old: str, new: str) -> int:
    """Repair reputation maps and explicit factionId fields in one record."""
    changed = 0
    if isinstance(node, dict):
        for key, value in list(node.items()):
            if key in {"effects", "reputationChanges"} and isinstance(value, dict):
                if key == "effects":
                    changed += int(_merge_delta(value, old, new))
                else:
                    for deltas in value.values():
                        if isinstance(deltas, dict):
                            changed += int(_merge_delta(deltas, old, new))
            if key == "factionId" and value == old:
                if new:
                    node[key] = new
                else:
                    node.pop(key)
                changed += 1
                continue
            if key not in {"effects", "reputationChanges"}:
                changed += _rewrite_node(value, old, new)
    elif isinstance(node, list):
        for value in node:
            changed += _rewrite_node(value, old, new)
    return changed


def _path_label(path: Path) -> str:
    try:
        return str(path.relative_to(ROOT))
    except ValueError:
        # Test suites and review tools intentionally rebind stores to scratch
        # paths outside the checkout. Reporting that path must not fail a write.
        return str(path)


def _stamp(system: str, model: str, sources: list[str]) -> dict[str, Any]:
    return {
        "by": "tools/genkit", "system": system, "model": model or "lm-studio",
        "at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "sourceArticles": sources,
    }


def repair(task: Task, raw: dict[str, Any], why: str) -> dict[str, Any] | None:
    """Repair classification labels, never manufacture or pad dossier prose.

    A known cast member is the one substantive case code can settle from the
    archive without guessing.  Everything else goes back to the model: short
    prose stays rejected, overlong prose is not cut, and a place is not called
    a faction (or vice versa) by a string heuristic.
    """
    faction_id = task.payload["id"]
    entry = task.payload["entry"]
    known_person = factions.is_person(faction_id) or factions.is_person(entry.get("name", ""))
    if known_person and "one person" in why:
        name = entry.get("name") or faction_id.replace("_", " ").title()
        return {
            "classification": "not_faction",
            "notFactionKind": "person",
            "reason": (
                f"The canonical character roster identifies {name} as one person, "
                "not an organisation with collective membership or standing. "
                "The source record is therefore evidence about that individual."
            ),
            "redirectFactionId": "",
        }

    classification = _norm(raw.get("classification")).replace(" ", "_")
    if classification in {"not_a_faction", "non_faction", "person", "place", "generic"}:
        classification = "not_faction"
    if classification == "not_faction" and word_count(raw.get("reason")) >= 12:
        fixed = dict(raw)
        # These are bookkeeping repairs only. "other" says the model's
        # substantive not-faction verdict survives while an unusable label
        # does not; an unsupported redirect is safer blank than guessed.
        if "notFactionKind" in why:
            fixed["notFactionKind"] = "other"
            return fixed
        if "redirectFactionId" in why:
            fixed["redirectFactionId"] = ""
            return fixed
    return None


def apply(task: Task, data: dict[str, Any]) -> TaskResult:
    faction_id = task.payload["id"]
    model = task.payload.get("model", "")
    changed_paths: list[str] = []

    # Reputation applies and faction minting have separate adapters but touch
    # these same files.  Take both locks in this fixed order so two generator
    # workers cannot overwrite each other's atomic snapshots.
    with reputation._WRITE_LOCK, factions._WRITE_LOCK:
        store = _store()
        target = store.get("factions", {}).get(faction_id)
        if not isinstance(target, dict) or not needs_dossier(target):
            return TaskResult(task=task, ok=False, detail="stub already reviewed or no longer exists")

        if data["classification"] == "faction":
            dossier = {key: value for key, value in data.items() if key != "classification"}
            sources = dossier.pop("sourceArticles")
            target.update(dossier)
            target["keyEvents"] = sources
            target["relatedArticles"] = sources
            target["status"] = "generated"
            target["_generatedDossier"] = _stamp("faction-dossiers", model, sources)
            detail = f"{word_count(target['description'])} words · {len(sources)} source article(s)"
        else:
            redirect = data["redirectFactionId"]
            reason = data["reason"]
            repaired = 0
            for path in REPUTATION_FILES:
                document = read_json(path, default=None)
                if document is None:
                    continue
                count = _rewrite_node(document, faction_id, redirect)
                if count:
                    atomic_write_json(path, document)
                    repaired += count
                    changed_paths.append(_path_label(path))
            # Generated faction relations can also point at the misfiled stub.
            for other in store.get("factions", {}).values():
                rel = other.get("relations") if isinstance(other, dict) else None
                if not isinstance(rel, dict):
                    continue
                for side in ("allies", "enemies"):
                    values = rel.get(side)
                    if not isinstance(values, list) or faction_id not in values:
                        continue
                    rel[side] = list(dict.fromkeys(
                        redirect if value == faction_id and redirect else value
                        for value in values if value != faction_id or redirect
                    ))
            # A non-faction does not belong in the faction registry at all.
            # Keeping a generated paragraph that says "this is not a faction"
            # merely replaces one bad stub with another and bloats every diff.
            # The checkpoint/run log retains the review verdict; reader-facing
            # data retains only real factions.
            store["factions"].pop(faction_id, None)
            detail = (
                f"removed misfiled {data['notFactionKind']}"
                + (f" → {redirect}" if redirect else "")
                + f" · repaired {repaired} reference(s) · {reason}"
            )

        atomic_write_json(factions.GENERATED, store)
        # `factions.resolve()` caches this document.  Keep it in step so a
        # second worker cannot resurrect the pre-review snapshot.
        factions._CACHE = store
        changed_paths.append(_path_label(factions.GENERATED))

    return TaskResult(
        task=task, ok=True, detail=detail, record=data,
        changed_paths=list(dict.fromkeys(changed_paths)),
    )


SPEC = SystemSpec(
    id="faction-dossiers",
    title="Generated factions · source-backed dossiers",
    summary=(
        "Review reputation-minted faction stubs against their source articles; "
        "write 500-1000 word dossiers or remove misfiled people/places/labels."
    ),
    # Dossiers are cleanup for reputation output, not optional decoration.
    # Finish this queue before bulk shop/WAHwire generation can fill the diff
    # with unrelated records and bury the work the operator actually requested.
    stage=0,
    next_tasks=next_tasks,
    build_prompt=build_prompt,
    validate=validate,
    apply=apply,
    pending=pending,
    repair=repair,
)
