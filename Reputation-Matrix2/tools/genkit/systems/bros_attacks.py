"""Bros Attacks — derive two-character techniques from what the archive records.

Why this system exists
----------------------
`data/brosAttacks.json` is the single source of truth for bros attacks and it
holds exactly two: Support Fire and Chop. Both were written by hand from real
session events. The generator ran for an hour across eight systems and added
none, because there was no bros system registered at all — the docstring in
spec.py listed "bros attacks" as in-scope but no module was ever written.

What a bros attack has to be
----------------------------
Not an invented move. The two that exist are both *recordings*: two named
characters did a specific physical thing in a specific event, and the entry
writes that down as a repeatable technique. So the task here is the same shape
as the crafting classifier — the archive already contains the material, and the
model is reading a record and naming what happened in it.

That constraint drives the whole design:

  * a task is one EVENT with two or more participants, not a blank prompt;
  * the participants offered are the ones the record actually names, and the
    validator rejects anybody else, so a technique cannot be credited to
    characters who were not there;
  * `sourceEvent` is filled from the task, not the reply, so it cannot drift;
  * every attack must land in one of the five existing schools, or propose a
    sixth with a reason.

Difficulty
----------
The user's standing instruction: tiers are easy/medium/hard and they change
cost and energy, and the two hand-written techniques are EASY. Foundry already
implements the tiers (`DIFFICULTIES` in bros-attacks.js scales zone, speed and
energy from one drill), so a generated attack does NOT carry per-tier numbers.
It declares its baseline tier and Foundry scales from there. Generated attacks
are written at `medium` unless the drill is genuinely simple, because the two
easy ones are already in place and a third identical-difficulty entry adds
nothing to the Training Yard.

Status
------
Written straight to canon as `confirmed`, per the user's instruction that
generated bros attacks may be confirmed. `sync_bros_attacks.py` must run
afterwards to propagate into the Foundry module and the schools file — the
runner does that automatically via `after_apply`.
"""

from __future__ import annotations

import ast
import json
import re
import subprocess
import threading
from typing import Any

from ..prompting import char_budget, fit
from ..settings import ROOT
from ..spec import SystemSpec, Task, TaskResult, ValidationError, provenance
from ..storage import atomic_write_json, read_json

SOURCE = ROOT / "data" / "brosAttacks.json"
EVENTS = ROOT / "data" / "events.json"
SYNC = ROOT / "tools" / "sync_bros_attacks.py"
_WRITE_LOCK = threading.Lock()

# Foundry maps each gesture to a key and a timing challenge. A drill step that
# names anything outside this set renders a button nobody can press.
GESTURES = ("tap", "up", "down", "right", "aim")
ACTORS = ("A", "B")
TIERS = ("easy", "medium", "hard")

# How many attacks are worth having. The Training Yard is a curated shelf, not
# a bulk store: past roughly two dozen the schools stop meaning anything.
TARGET_TOTAL = 24

# A drill button shows one pictograph. Anything else — ASCII faces, sliced
# words, arrows typed as punctuation — reads as corruption in the VTT.
_PICTOGRAPH = re.compile(
    "[\U0001F000-\U0001FAFF\u2190-\u21FF\u2300-\u23FF\u2460-\u24FF"
    "\u25A0-\u27BF\u2B00-\u2BFF\u3030\u303D\u3297\u3299]"
)
_GESTURE_ICON = {"tap": "👆", "up": "⬆️", "down": "⬇️", "right": "➡️", "aim": "🎯"}


def _clean_type(value: Any, school: str, known: dict[str, Any]) -> str:
    """A human-readable category that never contradicts the school.

    Models kept echoing a school id into "type" — and often the *wrong* one, so
    records shipped with type "support_fire" under school "clearing". If the
    value is a school id, or empty, use the school's display name instead.
    """
    text = " ".join(str(value or "").split())[:80]
    slug = _slug(text)
    if not text or slug in known:
        meta = known.get(school) or {}
        return str(meta.get("name") or "").strip() or "Paired manoeuvre"
    return text


def _clean_icon(value: Any, gesture: str) -> str:
    """Return a single emoji for a drill step, or a gesture-appropriate default."""
    text = str(value or "").strip()
    match = _PICTOGRAPH.search(text)
    if match:
        # Keep the whole grapheme: skin tones, variation selectors and ZWJ
        # sequences ("\U0001F3C3\u200D\u2642\uFE0F") are one glyph, not junk.
        idx = match.start()
        end = idx + 1
        while end < len(text) and (
            text[end] in "\uFE0F\uFE0E\u200D"
            or "\U0001F3FB" <= text[end] <= "\U0001F3FF"
            or (end > 0 and text[end - 1] == "\u200D")
        ):
            end += 1
        return text[idx:end]
    return _GESTURE_ICON.get(gesture, "🎮")


def _load() -> dict[str, Any]:
    return read_json(SOURCE, default={"attacks": []})


def _attacks() -> list[dict[str, Any]]:
    return [a for a in _load().get("attacks", []) if isinstance(a, dict)]


def _schools() -> dict[str, Any]:
    return _load().get("schools", {}) or {}


def _covered_events() -> set[str]:
    return {str(a.get("sourceEvent")) for a in _attacks() if a.get("sourceEvent")}


def _evidence_pairs(record: dict[str, Any]) -> list[tuple[str, str]]:
    """Participant pairs named together in one source paragraph/sentence."""
    people = [
        p for p in (record.get("participants") or [])
        if isinstance(p, dict) and p.get("id") and p.get("name")
    ]
    text = str(record.get("description") or record.get("summary") or "")
    segments = re.split(r"(?<=[.!?])\s+|\n\n+", text)
    pairs: set[tuple[str, str]] = set()
    for segment in segments:
        present = [
            p["id"] for p in people
            if re.search(rf"\b{re.escape(str(p['name']))}\b", segment, re.I)
        ]
        for index, first in enumerate(present):
            for second in present[index + 1:]:
                pairs.add(tuple(sorted((first, second))))
    return sorted(pairs)


def _candidate_events(limit: int = 400) -> list[dict[str, Any]]:
    """Events with a source-grounded participant pair and no technique yet.

    Two participants is the floor because a bros attack is by definition a
    pair manoeuvre; a solo event has nothing to record.
    """
    covered = _covered_events()
    out: list[dict[str, Any]] = []
    data = read_json(EVENTS, default=[])
    if not isinstance(data, list):
        return out
    for record in data:
        if not isinstance(record, dict):
            continue
        rid = record.get("id")
        if not rid or rid in covered:
            continue
        people = [
            p for p in (record.get("participants") or [])
            if isinstance(p, dict) and p.get("id") and p.get("name")
        ]
        if len(people) < 2 or not _evidence_pairs(record):
            continue
        out.append(record)
        if len(out) >= limit:
            break
    return out


def pending() -> int:
    return max(0, min(TARGET_TOTAL - len(_attacks()), len(_candidate_events())))


def next_tasks(count: int) -> list[Task]:
    room = max(0, TARGET_TOTAL - len(_attacks()))
    tasks: list[Task] = []
    for record in _candidate_events(count + 40):
        if len(tasks) >= min(count, room):
            break
        tasks.append(Task(
            system_id="bros_attacks",
            key=f"bros:{record['id']}",
            label=f"bros attack · {record.get('name') or record['id']}",
            payload={"event": record, "eligiblePairs": _evidence_pairs(record)},
        ))
    return tasks


SYSTEM = """You catalogue Bros Attacks for a tabletop campaign archive.

A Bros Attack is NOT an invented special move. It is a two-person physical
technique that ALREADY HAPPENED in the record you are given, written down so
another pair can repeat it. Read the event, find the moment two named
characters physically coordinated, and record THAT.

Return strictly valid JSON only, no commentary, no code fence:

{
  "name": "<Technique Name> Bros Attack",
  "subtitle": "<the two characters and what they did, one clause>",
  "partnerA": "<participant id from the list>",
  "partnerB": "<a different participant id from the list>",
  "type": "<short category, e.g. 'Ranged support fire'>",
  "school": "<one school id from the list, or a new lowercase_id>",
  "schoolReason": "<one sentence, only if you proposed a NEW school>",
  "difficulty": "medium",
  "evidenceQuote": "<exact 8-40 word source excerpt naming both partners and their coordinated action>",
  "description": "<3-5 sentences: what the pair did, in the event, and why it worked>",
  "steps": ["<plain sentence>", "<plain sentence>", "<plain sentence>", "<plain sentence>"],
  "risks": "<one or two sentences on how it goes wrong>",
  "waluigiNote": "<2-3 sentences, Waluigi's sardonic commentary, starts with WAH!>",
  "drill": {
    "promptDescription": "<one sentence describing the mini-game>",
    "steps": [
      {"actor": "A", "title": "<3-4 words>", "gesture": "tap|up|down|right|aim",
       "instruction": "<how to hit it, mentioning timing>", "icon": "<one emoji>"}
    ]
  }
}

Rules:
- partnerA and partnerB MUST be ids from the participant list, and different.
  Never credit a character who is not in that list.
- The technique must be something the event describes. `evidenceQuote` must be
  verbatim, name both partners, and describe their coordination. Do not invent
  magic, weapons, outcomes or numbers that are not in the record.
- "steps" is the table-level narration: 4 plain English sentences, each a
  complete sentence naming who does what. They are NOT the drill steps. Never
  put an object, a dict or JSON inside "steps" — strings only.
- drill.steps: exactly 4, at least one for actor A and one for actor B.
  gesture must be one of tap, up, down, right, aim. actor is exactly "A" or
  "B" — not "partnerA", not a character name.
- Every drill "icon" must be a single real emoji character. Never ASCII art,
  never a text fragment like "-AA-" or "=./=".
- Prefer an existing school. Only propose a new one if none fits, and then
  give schoolReason.
- waluigiNote is commentary, not narration: he is unimpressed and specific.
"""


def build_prompt(task: Task) -> tuple[str, str]:
    event = task.payload["event"]
    people = [
        {"id": p["id"], "name": p["name"], "role": p.get("role", "")}
        for p in (event.get("participants") or [])
        if isinstance(p, dict) and p.get("id") and p.get("name")
    ]
    schools = {
        sid: meta.get("summary", "") for sid, meta in _schools().items()
    }
    # Participants and schools are the two things the reply is validated
    # against, so they must survive trimming even when the event description
    # is 4 KB long; the description is the field that gets cut.
    view = {
        "eventId": event.get("id"),
        "eventName": event.get("name"),
        "participants": people,
        "eligiblePairs": task.payload.get("eligiblePairs") or _evidence_pairs(event),
        "schools": schools,
        "outcome": str(event.get("outcome") or ""),
        "existingTechniques": [
            {"name": a.get("name"), "school": a.get("school")} for a in _attacks()
        ],
        "eventDescription": str(
            event.get("description") or event.get("summary") or ""
        ),
    }
    body = fit(
        view,
        char_budget(system_prompt=SYSTEM),
        priority=["eventId", "eventName", "participants", "schools"],
    )
    return SYSTEM, json.dumps(body, ensure_ascii=False, indent=1)


def _slug(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "_", str(text).lower()).strip("_")


def validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    event = task.payload["event"]
    allowed = {
        p["id"]: p["name"]
        for p in (event.get("participants") or [])
        if isinstance(p, dict) and p.get("id") and p.get("name")
    }

    a = str(raw.get("partnerA", "")).strip()
    b = str(raw.get("partnerB", "")).strip()
    if a not in allowed or b not in allowed:
        raise ValidationError(
            f"partners must come from the event's participants {sorted(allowed)}"
        )
    if a == b:
        raise ValidationError("partnerA and partnerB must be different characters")
    eligible = {tuple(pair) for pair in (task.payload.get("eligiblePairs") or _evidence_pairs(event))}
    if tuple(sorted((a, b))) not in eligible:
        raise ValidationError("partners are never named together in one source beat")

    evidence_quote = " ".join(str(raw.get("evidenceQuote") or "").split()).strip('"“”')
    quote_words = re.findall(r"[a-z0-9]+(?:['’][a-z0-9]+)?", evidence_quote.casefold())
    if not 8 <= len(quote_words) <= 40:
        raise ValidationError("evidenceQuote must be 8-40 exact source words")
    corpus = " ".join(re.findall(
        r"[a-z0-9]+(?:['’][a-z0-9]+)?",
        str(event.get("description") or event.get("summary") or "").casefold(),
    ))
    quote_normal = " ".join(quote_words)
    if quote_normal not in corpus:
        raise ValidationError("evidenceQuote is not verbatim in the source event")
    for partner in (allowed[a], allowed[b]):
        if re.sub(r"[^a-z0-9]+", " ", partner.casefold()).strip() not in quote_normal:
            raise ValidationError("evidenceQuote must name both partners")

    name = " ".join(str(raw.get("name", "")).split())
    if not (6 <= len(name) <= 70):
        raise ValidationError("name must be 6-70 characters")
    existing = {str(x.get("name", "")).lower() for x in _attacks()}
    if name.lower() in existing:
        raise ValidationError(f"duplicate attack name {name!r}")

    description = " ".join(str(raw.get("description", "")).split())
    if len(description) < 120:
        raise ValidationError("description is too thin — 3-5 real sentences")

    # "steps" is table narration and must be plain prose. Models kept handing
    # back the drill choreography here — sometimes as real dicts, sometimes as
    # a dict that had already been str()'d into "{'actor': 'A', ...}". Both
    # shipped straight to canon and rendered as literal Python on the page, so
    # recover the sentence where we can and reject the rest.
    steps: list[str] = []
    for entry in (raw.get("steps") or []):
        if isinstance(entry, dict):
            text = " ".join(str(entry.get("instruction", "")).split())
        else:
            text = " ".join(str(entry).split())
            if text.startswith("{") and text.endswith("}"):
                try:
                    parsed = ast.literal_eval(text)
                except (ValueError, SyntaxError):
                    parsed = None
                if isinstance(parsed, dict):
                    text = " ".join(str(parsed.get("instruction", "")).split())
                else:
                    text = ""
        if not text:
            continue
        if text.startswith("{") or "'actor'" in text or '"actor"' in text:
            raise ValidationError(
                "steps must be plain sentences, not drill objects — put the "
                "choreography in drill.steps"
            )
        if len(text) < 12 or " " not in text:
            raise ValidationError(
                f"step {text!r} is not a sentence — each step must say who "
                "does what, in words"
            )
        steps.append(text)
    if len(steps) < 3:
        raise ValidationError("need at least 3 table steps, each a plain sentence")

    risks = " ".join(str(raw.get("risks", "")).split())
    if len(risks) < 20:
        raise ValidationError("risks must say how the technique fails")

    note = " ".join(str(raw.get("waluigiNote", "")).split())
    if len(note) < 30:
        raise ValidationError("waluigiNote must be real commentary")

    difficulty = str(raw.get("difficulty", "medium")).strip().lower()
    if difficulty not in TIERS:
        difficulty = "medium"

    # -- drill ------------------------------------------------------------
    drill_raw = raw.get("drill")
    if not isinstance(drill_raw, dict):
        raise ValidationError("drill block missing")
    dsteps: list[dict[str, Any]] = []
    for entry in (drill_raw.get("steps") or [])[:4]:
        if not isinstance(entry, dict):
            continue
        actor = str(entry.get("actor", "")).strip().upper()
        # Models write "partnerA"/"PARTNER B"/"A." as often as a bare "A".
        if actor.startswith("PARTNER"):
            actor = actor[len("PARTNER"):].strip(" .:_-")
        actor = actor[:1]
        gesture = str(entry.get("gesture", "")).strip().lower()
        title = " ".join(str(entry.get("title", "")).split())
        instruction = " ".join(str(entry.get("instruction", "")).split())
        if actor not in ACTORS or gesture not in GESTURES:
            continue
        if not (3 <= len(title) <= 40) or len(instruction) < 15:
            continue
        # icon[:4] used to slice ASCII junk ("=./=", "-AA-", "byss") straight
        # into the drill UI, where it renders as garbage next to real emoji.
        # Keep only an actual pictographic character, else fall back per
        # gesture so the button always reads as a button.
        icon = _clean_icon(entry.get("icon"), gesture)
        dsteps.append({
            "actor": actor, "title": title, "instruction": instruction,
            "gesture": gesture, "icon": icon,
        })
    if len(dsteps) != 4:
        raise ValidationError("drill needs exactly 4 usable steps")
    if not ({"A", "B"} <= {s["actor"] for s in dsteps}):
        raise ValidationError("drill must give both partners something to do")

    # -- school -----------------------------------------------------------
    known = _schools()
    proposed = _slug(raw.get("school", ""))
    school_reason = " ".join(str(raw.get("schoolReason", "")).split())
    new_school = None
    if proposed in known:
        school = proposed
    elif proposed and len(proposed) >= 4:
        if len(school_reason) < 15:
            raise ValidationError(
                f"unknown school {proposed!r} — either use an existing school "
                f"{sorted(known)} or give a schoolReason for the new one"
            )
        school = proposed
        new_school = {
            "name": " ".join(w.capitalize() for w in proposed.split("_")),
            "icon": "🤝",
            "color": "#3d6b4a",
            "summary": school_reason[:220],
            "doctrine": school_reason[:220],
            "sourceNote": f"Proposed from the record “{event.get('name')}”.",
        }
    else:
        raise ValidationError(f"unusable school {proposed!r}")

    return {
        "id": f"{_slug(name)}",
        "name": name,
        "subtitle": " ".join(str(raw.get("subtitle", "")).split())[:160],
        "status": "confirmed",
        "participants": [a, b],
        "type": _clean_type(raw.get("type"), school, known),
        "sourceEvent": event.get("id"),
        "evidenceQuote": evidence_quote,
        "description": description,
        "steps": steps[:6],
        "risks": risks,
        "waluigiNote": note,
        "relatedArticles": [event.get("id"), a, b],
        "difficulty": difficulty,
        "resource": {
            "name": "Bros Energy",
            # Tier scaling lives in Foundry's DIFFICULTIES table; the record
            # carries the baseline cost only, exactly like the two written
            # by hand.
            "cost": 1,
            "pool": "Each participating character",
            "maximum": 2,
            "refresh": "Very short rest",
        },
        "school": school,
        "_newSchool": new_school,
        "drill": {
            "partnerA": allowed[a],
            "partnerB": allowed[b],
            "promptDescription": (
                " ".join(str(drill_raw.get("promptDescription", "")).split())
                or f"{allowed[a]} sets up; {allowed[b]} finishes."
            )[:200],
            "steps": dsteps,
        },
    }


_RENAME_SHAPES = ("Variant", "Second Form", "Field Version", "Reprise", "Counter-Form")


def repair(task: Task, raw: dict[str, Any], why: str) -> dict[str, Any] | None:
    """Fix the two label-shaped rejections; leave the substantive ones alone.

    A duplicate technique name and a partner named by display name instead of
    id are both cases where the model did the reading and tripped on a string.
    A thin description or a broken drill is the model not doing the work, and
    writing those here would be inventing canon.
    """
    fixed = dict(raw)
    event = task.payload["event"]
    allowed = {
        p["id"]: p["name"]
        for p in (event.get("participants") or [])
        if isinstance(p, dict) and p.get("id") and p.get("name")
    }

    if "partners must come from" in why:
        by_name = {v.lower(): k for k, v in allowed.items()}
        changed = False
        for slot in ("partnerA", "partnerB"):
            value = str(raw.get(slot, "")).strip()
            if value in allowed:
                continue
            hit = by_name.get(value.lower()) or by_name.get(_slug(value).replace("_", " "))
            if not hit:
                hit = next(
                    (pid for pid, nm in allowed.items()
                     if _slug(nm) == _slug(value) or _slug(value) in pid),
                    None,
                )
            if hit:
                fixed[slot] = hit
                changed = True
        if changed and fixed.get("partnerA") != fixed.get("partnerB"):
            return fixed
        return None

    if "duplicate attack name" in why:
        original = " ".join(str(raw.get("name", "")).split())
        taken = {str(x.get("name", "")).lower() for x in _attacks()}
        for shape in _RENAME_SHAPES:
            candidate = f"{original} ({shape})"
            if len(candidate) <= 70 and candidate.lower() not in taken:
                fixed["name"] = candidate
                return fixed
        return None

    return None


def apply(task: Task, data: dict[str, Any]) -> TaskResult:
    new_school = data.pop("_newSchool", None)
    with _WRITE_LOCK:
        store = _load()
        attacks = store.setdefault("attacks", [])
        if any(a.get("id") == data["id"] for a in attacks):
            return TaskResult(task=task, ok=False, detail="id already present")
        if any(a.get("sourceEvent") == data["sourceEvent"] for a in attacks):
            return TaskResult(
                task=task, ok=False,
                detail="another technique already records this event",
            )

        if new_school:
            schools = store.setdefault("schools", {})
            if data["school"] not in schools:
                schools[data["school"]] = new_school

        entry = dict(data)
        # Confirmed, not "generated": the user's standing instruction is that
        # generated bros attacks go straight to canon. The `_generated` stamp
        # still records which run produced it, so provenance is not lost.
        entry.update(provenance(
            "bros_attacks", task.payload.get("model", ""), status="confirmed",
        ))
        attacks.append(entry)
        atomic_write_json(SOURCE, store)

    changed = [str(SOURCE.relative_to(ROOT))]

    # brosAttacks.json is the source of truth for two generated consumers. An
    # attack that exists only here is invisible in Foundry and in the Training
    # Yard, and `--check` in CI would start failing, so propagate immediately
    # rather than leaving the tree in a state the repo's own checker rejects.
    if SOURCE != ROOT / "data" / "brosAttacks.json":
        # The test suite rebinds SOURCE at a scratch copy. Syncing from there
        # would regenerate the real consumers from fixture data.
        return TaskResult(
            task=task, ok=True, detail=f"{data['name']} · {data['school']} (no sync)",
            record=data, changed_paths=changed,
        )

    try:
        done = subprocess.run(
            ["python3", str(SYNC)],
            capture_output=True, text=True, timeout=120, cwd=str(ROOT),
        )
        if done.returncode == 0:
            changed += [
                "Foundry/bros_attacks/bros-definitions.js",
                "data/brosAttacks.schools.json",
            ]
    except (OSError, subprocess.SubprocessError):
        pass  # the attack is written; --check will flag the stale consumers

    detail = f"{data['name']} · {data['school']} · {data['difficulty']}"
    if new_school:
        detail += " · new school"
    return TaskResult(
        task=task, ok=True, detail=detail, record=data, changed_paths=changed,
    )


# Re-enabled only as an evidence recorder. The earlier broad pass treated any
# two participants as a technique and produced narration/filler. Candidates now
# require both partners in one source beat, and validation requires a verbatim
# excerpt naming both before anything can be confirmed or synced to Foundry.
SPEC = SystemSpec(
    id="bros_attacks",
    title="Bros Attacks · evidence-gated recordings",
    summary=(
        "Record only techniques whose source excerpt names both partners in one "
        "coordinated beat; sync every accepted record to Foundry."
    ),
    enabled=True,
    stage=1,
    next_tasks=next_tasks,
    build_prompt=build_prompt,
    validate=validate,
    apply=apply,
    pending=pending,
    repair=repair,
)
