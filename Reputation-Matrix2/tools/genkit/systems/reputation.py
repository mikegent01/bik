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
from .. import prompting
from ..spec import SystemSpec, Task, TaskResult, ValidationError, provenance
from ..storage import atomic_write_json, read_json
from . import factions as factions_mod

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
                    payload={"kind": kind, "id": rid, "name": name},
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
  "reputationNotes": { "<operatorId>": "<one sentence, max 22 words>" },
  "newFactions": { }
}

Hard rules:
- Use ONLY operator ids from the list you are given. Never invent an operator.
- Prefer a faction id from the list. If the record clearly involves an organised
  group that is NOT on the list, you may name it with a new lowercase_underscore
  id AND describe it under `newFactions`, like this:

    "newFactions": {
      "<new_faction_id>": {
        "name": "<proper name>",
        "description": "<one or two sentences drawn from THIS record>",
        "region": "<where they operate, if the record says>",
        "category": "Minor Powers",
        "relations": { "allies": ["<known id>"], "enemies": ["<known id>"] }
      }
    }

  Only do this for an actual named organisation, army, house, crew or order.
  Never for a place, an object, a single person, or a vague grouping like
  "civilians" or "everyone" — those are dropped.
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

    # The operator and faction lists are fixed overhead the model cannot do
    # without, so the record has to fit in whatever is left. Sixteen of the 209
    # pending records are long enough to blow a 4096-token window on their own
    # ("The Toad God Interview" is ~7.9k), and an over-long prompt is not a
    # degraded generation -- it is an HTTP 400 and a lost record.
    operators_block = "\n".join(f"  {oid} — {desc}" for oid, desc in OPERATORS.items())
    factions_block = ", ".join(faction_ids())
    scaffold = (
        f"RECORD ({kind}):\n\n\n"
        f"OPERATOR IDS (use these exact strings):\n{operators_block}"
        f"\n\nFACTION IDS (use these exact strings):\n  {factions_block}"
        f"\n\nAssign the reputation consequences of this record."
    )
    budget = prompting.char_budget(system_prompt=SYSTEM_PROMPT) - len(scaffold)
    # Identity and outcome matter most; colour is what gets cut.
    view = prompting.fit(
        view,
        max(600, budget),
        priority=["id", "name", "title", "date", "outcome", "result",
                  "summary", "belligerents", "participants", "charges"],
    )

    prompt = (
        f"RECORD ({kind}):\n{json.dumps(view, ensure_ascii=False, indent=2)}\n\n"
        f"OPERATOR IDS (use these exact strings):\n{operators_block}"
        f"\n\nFACTION IDS (use these exact strings):\n  {factions_block}"
        f"\n\nAssign the reputation consequences of this record."
    )
    return SYSTEM_PROMPT, prompt


def validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    factions = set(faction_ids()) | factions_mod.generated_ids()
    changes = raw.get("reputationChanges")
    if not isinstance(changes, dict) or not changes:
        raise ValidationError("no reputationChanges returned")

    record_name = task.payload.get("name") or task.payload.get("id") or ""
    model = task.payload.get("model", "")

    # Faction ids are RESOLVED, not refused. A near-miss is redirected to the
    # canonical id, a genuinely new group is minted, and only labels that name
    # no group at all are dropped. Losing a whole scored record because the
    # model wrote "koopa_resistance" instead of "koopa_troop" threw away work
    # that was otherwise correct.
    resolutions: dict[str, tuple[str | None, str]] = {}

    def resolve_faction(fid: Any) -> str | None:
        key = str(fid)
        if key in resolutions:
            return resolutions[key][0]
        resolved, how = factions_mod.resolve(key, factions, record_text=record_name)
        if how == "create" and resolved:
            proposal = (raw.get("newFactions") or {}).get(key) or {}
            if not isinstance(proposal, dict):
                proposal = {}
            factions_mod.mint(
                resolved,
                name=str(proposal.get("name", "")),
                description=str(proposal.get("description", "")),
                region=str(proposal.get("region", "")),
                category=str(proposal.get("category", "")),
                relations=proposal.get("relations")
                if isinstance(proposal.get("relations"), dict) else None,
                source_record=record_name,
                model=model,
            )
            factions.add(resolved)
        resolutions[key] = (resolved, how)
        return resolved

    clean_changes: dict[str, dict[str, int]] = {}
    bad_ops: set[str] = set()
    dropped_factions: set[str] = set()
    out_of_range = 0
    for op_id, deltas in changes.items():
        if op_id not in OPERATORS:
            bad_ops.add(str(op_id)[:40])
            continue  # drop an invented operator rather than fail the record
        if not isinstance(deltas, dict):
            continue
        row: dict[str, int] = {}
        for fid, value in deltas.items():
            resolved = resolve_faction(fid)
            if not resolved:
                dropped_factions.add(str(fid)[:40])
                continue
            try:
                delta = int(value)
            except (TypeError, ValueError):
                continue
            if delta == 0 or abs(delta) > 30:
                out_of_range += 1
                continue
            # Two proposed ids can resolve onto the same canonical faction
            # (e.g. "legion" and "the_legion"); keep the larger swing rather
            # than letting whichever came last silently win.
            if resolved in row and abs(row[resolved]) >= abs(delta):
                continue
            row[resolved] = delta
        if row:
            clean_changes[op_id] = row
    if not clean_changes:
        why = []
        if bad_ops:
            why.append("unknown operators: " + ", ".join(sorted(bad_ops)[:4]))
        if dropped_factions:
            why.append("not a group: " + ", ".join(sorted(dropped_factions)[:4]))
        if out_of_range:
            why.append(f"{out_of_range} delta(s) zero or beyond ±30")
        raise ValidationError(
            "nothing scoreable — " + ("; ".join(why) if why else "empty response")
        )

    clean_effects: dict[str, int] = {}
    for fid, value in (raw.get("effects") or {}).items():
        resolved = resolve_faction(fid)
        if not resolved:
            continue
        try:
            delta = int(value)
        except (TypeError, ValueError):
            continue
        if delta and abs(delta) <= 20:
            if resolved in clean_effects and abs(clean_effects[resolved]) >= abs(delta):
                continue
            clean_effects[resolved] = delta

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

    merged = {k: v[0] for k, v in resolutions.items() if v[1] in ("alias", "fuzzy")}
    created = [v[0] for v in resolutions.values() if v[1] == "create"]

    return {
        "reputationChanges": clean_changes,
        "effects": clean_effects,
        "reputationNotes": clean_notes,
        "_merged": merged,
        "_created": created,
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
    detail = f"{ops} operator(s), {total} faction delta(s)"
    # Say so out loud: a silent merge or a silently minted faction is exactly
    # the kind of change someone needs to be able to audit later.
    merged = record_data.get("_merged") or {}
    if merged:
        detail += " · merged " + ", ".join(f"{k}→{v}" for k, v in list(merged.items())[:3])
    created = record_data.get("_created") or []
    if created:
        detail += " · NEW faction " + ", ".join(created[:3])
    return TaskResult(
        task=task,
        ok=True,
        detail=detail,
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
