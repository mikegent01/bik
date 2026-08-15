"""Reputation impact backfill.

The matrix has a decay engine, a per-operator standings sheet and a panel that
renders both, and almost nothing to feed them: of 212 event/battle/trial
records, **3** carry `reputationChanges` and **0** carry `effects`. Everything
else falls through to `_autoDeriveDeltas`, which is why standing barely moves.

This system fills the gap and only the gap. A record that already has
`reputationChanges` is never touched — that was an explicit instruction, and
the three hand-written ones are the reference the model is shown rather than
material to be rewritten.

Shape written per record:

    "reputationChanges": { "<operatorId>": { "<factionId>": <int> } },
    "effects":           { "<factionId>": <int> },
    "reputationNotes":   { "<operatorId>": "one line, drawn from the record" }

`effects` is the record-wide echo the panel uses when no per-operator split
exists; populating it is what "knock-on effects" means here.
"""

from __future__ import annotations

import json
import threading
from pathlib import Path
from typing import Any

from ..settings import ROOT
from ..spec import SystemSpec, Task, TaskResult, ValidationError, provenance
from ..storage import atomic_write_json, read_json

# Canonical operator ids, straight from REPUTATION_OPERATORS in index.html.
OPERATORS = {
    "bowser": "Bowser, King of the Koopas",
    "archie_miser": "Archie Miser, pyromancer and confessed arsonist",
    "waluigi": "Waluigi, mastermind and chief archivist",
    "markop": "Markop, titan-scale paladin",
    "hjumpik": "Hjumpik, dwarven tactical specialist",
    "remi_akamatsu_full_backstory": "Remi Akamatsu, artificer and construct master",
    "dan": "Original Dan, fire mage veteran",
    "green_t": "Green T, vampire dinner sniper",
}

FILES = {
    "events": ROOT / "data" / "events.json",
    "battles": ROOT / "data" / "battles.json",
    "majorBattles": ROOT / "data" / "majorBattles.json",
    "trials": ROOT / "data" / "trials.json",
}

_FACTION_CACHE: list[str] = []
_WRITE_LOCK = threading.Lock()


def faction_ids() -> list[str]:
    """The 100 ids LORE_FACTIONS actually defines.

    A delta against a faction the matrix has never heard of renders as a dead
    link, so the model is given the closed list and validation enforces it.
    """
    global _FACTION_CACHE
    if _FACTION_CACHE:
        return _FACTION_CACHE
    index = ROOT.parent / "index.html"
    try:
        text = index.read_text(encoding="utf-8")
        marker = "const LORE_FACTIONS = "
        start = text.index(marker) + len(marker)
        end = text.index("\n", start)
        literal = text[start:end].rstrip().rstrip(";")
        _FACTION_CACHE = sorted(json.loads(literal).keys())
    except Exception:  # noqa: BLE001
        _FACTION_CACHE = []
    return _FACTION_CACHE


def _records(path: Path) -> list[dict[str, Any]]:
    data = read_json(path, default=[])
    if isinstance(data, list):
        return [r for r in data if isinstance(r, dict)]
    if isinstance(data, dict):
        for value in data.values():
            if isinstance(value, list):
                return [r for r in value if isinstance(r, dict)]
    return []


def _missing(kind: str) -> list[dict[str, Any]]:
    return [r for r in _records(FILES[kind]) if not r.get("reputationChanges")]


def pending() -> int:
    return sum(len(_missing(kind)) for kind in FILES)


def next_tasks(count: int) -> list[Task]:
    tasks: list[Task] = []
    # Round-robin across the four files so the backfill does not finish all of
    # events before touching a single battle.
    buckets = {kind: _missing(kind) for kind in FILES}
    index = 0
    while len(tasks) < count and any(buckets.values()):
        for kind in list(FILES):
            if len(tasks) >= count:
                break
            bucket = buckets[kind]
            if index >= len(bucket):
                continue
            record = bucket[index]
            rid = record.get("id") or f"{kind}-{index}"
            name = record.get("name") or record.get("title") or rid
            tasks.append(
                Task(
                    system_id="reputation",
                    key=f"{kind}:{rid}",
                    label=f"reputation · {kind} · {name}",
                    payload={"kind": kind, "id": rid},
                )
            )
        index += 1
        if index > 400:
            break
    return tasks


SYSTEM_PROMPT = """You assign faction reputation consequences to historical records in a
tabletop campaign archive. You are not writing fiction: you are reading a record that
already exists and stating who it made look good and who it made look bad.

Return strictly valid JSON only, no commentary, no code fence:

{
  "reputationChanges": { "<operatorId>": { "<factionId>": <integer -30..30> } },
  "effects": { "<factionId>": <integer -20..20> },
  "reputationNotes": { "<operatorId>": "<one sentence, max 22 words>" }
}

Hard rules:
- Use ONLY operator ids and faction ids from the lists you are given. Never invent one.
- Only include an operator the record actually involves. Two or three is normal; one is fine.
- Only include a faction the record actually touches. Two to four per operator.
- Deltas are integers, never zero. Mixed signs are good: the same deed usually earns
  someone's respect and someone else's grudge.
- Magnitude must match the record. A skirmish is 2-5. A massacre or a betrayal is 15-30.
- `effects` is the record-wide reputational echo, independent of who was present.
- Each note must cite something specific from the record's own text. No filler, no
  "this affected their standing", no "ask your DM".
"""


def build_prompt(task: Task) -> tuple[str, str]:
    kind = task.payload["kind"]
    rid = task.payload["id"]
    record = next(
        (r for r in _records(FILES[kind]) if (r.get("id") or "") == rid), None
    )
    if record is None:
        raise ValidationError(f"record vanished: {kind}:{rid}")

    # Send the readable fields, trimmed. The model does not need the whole blob.
    interesting = [
        "id", "name", "title", "type", "date", "era", "location", "status",
        "summary", "description", "aftermath", "result", "belligerents",
        "casualties", "charges", "outcome", "participants", "commanders",
        "relatedArticles", "notableFeatures",
    ]
    view: dict[str, Any] = {}
    for field in interesting:
        value = record.get(field)
        if value in (None, "", [], {}):
            continue
        if isinstance(value, str) and len(value) > 1800:
            value = value[:1800] + " […]"
        view[field] = value

    prompt = (
        f"RECORD ({kind}):\n{json.dumps(view, ensure_ascii=False, indent=2)}\n\n"
        f"OPERATOR IDS (use these exact strings):\n"
        + "\n".join(f"  {oid} — {desc}" for oid, desc in OPERATORS.items())
        + "\n\nFACTION IDS (use these exact strings):\n  "
        + ", ".join(faction_ids())
        + "\n\nAssign the reputation consequences of this record."
    )
    return SYSTEM_PROMPT, prompt


def validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    factions = set(faction_ids())
    changes = raw.get("reputationChanges")
    if not isinstance(changes, dict) or not changes:
        raise ValidationError("no reputationChanges returned")

    clean_changes: dict[str, dict[str, int]] = {}
    for op_id, deltas in changes.items():
        if op_id not in OPERATORS:
            continue  # silently drop an invented operator rather than fail the record
        if not isinstance(deltas, dict):
            continue
        row: dict[str, int] = {}
        for fid, value in deltas.items():
            if fid not in factions:
                continue
            try:
                delta = int(value)
            except (TypeError, ValueError):
                continue
            if delta == 0 or abs(delta) > 30:
                continue
            row[fid] = delta
        if row:
            clean_changes[op_id] = row
    if not clean_changes:
        raise ValidationError("every operator or faction id was invalid")

    clean_effects: dict[str, int] = {}
    for fid, value in (raw.get("effects") or {}).items():
        if fid not in factions:
            continue
        try:
            delta = int(value)
        except (TypeError, ValueError):
            continue
        if delta and abs(delta) <= 20:
            clean_effects[fid] = delta

    clean_notes: dict[str, str] = {}
    for op_id, note in (raw.get("reputationNotes") or {}).items():
        if op_id not in clean_changes or not isinstance(note, str):
            continue
        text = " ".join(note.split())
        if len(text.split()) > 30 or len(text) < 12:
            continue
        lowered = text.lower()
        if any(bad in lowered for bad in ("ask your dm", "various", "etc.", "mysterious")):
            continue
        clean_notes[op_id] = text

    return {
        "reputationChanges": clean_changes,
        "effects": clean_effects,
        "reputationNotes": clean_notes,
    }


def apply(task: Task, record_data: dict[str, Any]) -> TaskResult:
    kind = task.payload["kind"]
    rid = task.payload["id"]
    path = FILES[kind]

    with _WRITE_LOCK:
        data = read_json(path, default=None)
        if data is None:
            return TaskResult(task=task, ok=False, detail=f"could not read {path.name}")
        container = data if isinstance(data, list) else None
        if container is None and isinstance(data, dict):
            for value in data.values():
                if isinstance(value, list):
                    container = value
                    break
        if container is None:
            return TaskResult(task=task, ok=False, detail="unrecognised container")

        target = next((r for r in container if isinstance(r, dict) and r.get("id") == rid), None)
        if target is None:
            return TaskResult(task=task, ok=False, detail="record not found on write")
        if target.get("reputationChanges"):
            # Someone filled it while we were thinking. Gap-only means gap-only.
            return TaskResult(task=task, ok=False, detail="already had impacts — left alone")

        target["reputationChanges"] = record_data["reputationChanges"]
        added = ["reputationChanges"]
        if record_data["effects"]:
            target["effects"] = record_data["effects"]
            added.append("effects")
        if record_data["reputationNotes"]:
            target["reputationNotes"] = record_data["reputationNotes"]
            added.append("reputationNotes")

        # These are hand-written canon records being *augmented*, not records
        # this tool authored. The usual stamp sets `status`, which here already
        # holds real prose ("Class-9 Silence (Imperial Decree)") — overwriting
        # it would destroy canon to record a provenance detail. So the stamp is
        # scoped: it names exactly the fields the generator added and leaves
        # everything else untouched.
        stamp = provenance("reputation", task.payload.get("model", ""))["_generated"]
        stamp["fields"] = added
        target["_generatedReputation"] = stamp

        atomic_write_json(path, data)

    ops = len(record_data["reputationChanges"])
    total = sum(len(v) for v in record_data["reputationChanges"].values())
    return TaskResult(
        task=task,
        ok=True,
        detail=f"{ops} operator(s), {total} faction delta(s)",
        record=record_data,
        changed_paths=[str(path.relative_to(ROOT))],
    )


SPEC = SystemSpec(
    id="reputation",
    title="Reputation impact backfill",
    summary="Fill reputationChanges/effects on records that have none (gap-only).",
    stage=1,
    next_tasks=next_tasks,
    build_prompt=build_prompt,
    validate=validate,
    apply=apply,
    pending=pending,
)
