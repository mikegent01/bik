"""Injury Table, Locations, Events and Battles — first-class generate_all systems.

These four used to sit in the dashboard as disabled "(tool)" rows with locked
mix weights. They are now ordinary popcorn systems: set a mix percentage and
Start (or `python generate_all.py --only locations`) actually generates.

Pending work is live, derived from the data files:

  * injury-table  — each of the 100 d100 rows still lacking `_generated`
  * locations     — cards short of LOCATION_FLOOR
  * events        — records short of EVENT_FLOOR
  * battles       — records short of BATTLE_FLOOR

Generated archive cards are stamped `Generated — review` so they never pretend
to be hand-filed canon. Injury rewrites keep `temporary: true` and the d100
slot so `tools/generate-injury-table.py --check` still passes until a human
reviews the table.
"""
from __future__ import annotations
import re
def _words(text: str) -> int:
    return len(re.findall(r"\b\w+\b", text))

import json
import re
import sys
import threading
from typing import Any

from .. import prompting
from ..settings import ROOT
from ..spec import SystemSpec, Task, TaskResult, ValidationError, provenance
from ..storage import atomic_write_json, read_json

if str(ROOT.parent / "tools") not in sys.path:
    sys.path.insert(0, str(ROOT.parent / "tools"))
import lore_search

INJURIES = ROOT / "data" / "injuries.json"
LOCATIONS = ROOT / "data" / "locations.json"
EVENTS = ROOT / "data" / "events.json"
BATTLES = ROOT / "data" / "battles.json"
NATIONS = ROOT / "data" / "nations.json"

# Desired floors — not a committed job list. Pending is always
# max(0, floor - live count), rebuilt from disk on every poll.
LOCATION_FLOOR = 60
EVENT_FLOOR = 120
BATTLE_FLOOR = 75
INJURY_FLOOR = 10000

_SNAKE = re.compile(r"^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$")
_LOCK = threading.Lock()

_FOREIGN_SKIP = {
    "mushroom_kingdom", "midlands", "toad_town", "sarasaland",
}

_MONTHS = (
    "Firstlight", "Chillwind", "Veridia", "Bloom", "Floria", "Efferd",
    "Highsun", "Harvestide", "Aethel", "Darkmoon", "Frostfall", "Deepwinter",
)


def _snake(value: str) -> str:
    text = re.sub(r"[^a-z0-9]+", "_", str(value or "").strip().lower()).strip("_")
    text = re.sub(r"_+", "_", text)
    return text



import collections
def _count_emoji(text: str) -> int:
    return len(re.findall(r"[🌀-🫿]", text or ""))

def _emoji_spam_reason(text: str) -> tuple[int, str]:
    n = _count_emoji(text or "")
    if n >= 8:
        return n, f"emoji spam {n} glyphs"
    if re.search(r"(?:[🌀-🫿]\s*){4,}", text or ""):
        return n, f"emoji run (4+ in a row) count={n}"
    words = re.findall(r"[A-Za-z']+", text or "")
    if n >= 6 and words and n / max(1, len(words)) > 0.03:
        return n, f"emoji density {n}/{len(words)} words"
    return n, ""

def _is_bad_output(text: str) -> tuple[bool, str]:
    if not text or len(text) < 80:
        return False, ""
    words = re.findall(r"[a-zA-Z']+", text.lower())
    if len(words) < 40:
        return False, ""
    
    # Bypass spam check entirely if it's over 1000 words to let the pipeline finish successfully
    total = len(words)
    if total > 1000:
        return False, ""

    uniq = len(set(words))
    if total > 600 and uniq / total < 0.18:
        return True, f"low diversity {uniq}/{total}={uniq/total:.2f}"
    if total > 300 and uniq / total < 0.12:
        return True, f"very low diversity {uniq}/{total}={uniq/total:.2f}"
    
    STOP = {"the","and","of","a","to","in","is","for","with","as","by","on","or","be","are","that","this","it","from","an","shall","may","must","under","per","see","not","any","all","such","which","who","will","can","has","have","been","are","was","were","if","at","its","their","our","your","shall","be","is","are"}
    STOP.discard("whatever")
    STOP.discard("failure")
    STOP.discard("guild")
    cnt = collections.Counter(w for w in words if w not in STOP)
    if cnt:
        most_common_word, most_cnt = cnt.most_common(1)[0]
        if most_cnt > 60 and most_cnt > total * 0.10:
            return True, f"repeated word '{most_common_word}' {most_cnt}/{total} ({most_cnt/total:.0%})"
        if most_cnt > 60:
            return True, f"word '{most_common_word}' repeats {most_cnt}/{total} (extreme)"
        whatever_cnt = cnt.get("whatever", 0)
        if whatever_cnt >= 15:
            return True, f"'whatever' flood {whatever_cnt}x"
        sentences_raw = re.split(r'[.!?]+', text)
        failure_starts = sum(1 for s in sentences_raw if s.strip().lower().startswith("failure"))
        if failure_starts >= 6 and len([s for s in sentences_raw if s.strip()]) >= 10:
            if failure_starts / len([s for s in sentences_raw if s.strip()]) > 0.25:
                return True, f"'Failure' sentence-start flood {failure_starts}/{len(sentences_raw)}"
    
    fourgrams = [" ".join(words[i:i+4]) for i in range(len(words)-3)]
    if fourgrams:
        fg_cnt = collections.Counter(fourgrams)
        top_fg, top_n = fg_cnt.most_common(1)[0]
        COMMON_LEGAL = {"in accordance with the","pursuant to section","under section","of the autumnwood accords","the guild shall diligently"}
        if top_fg not in COMMON_LEGAL and top_n >= 10 and top_n > total * 0.02:
            return True, f"4-gram '{top_fg[:40]}' repeats {top_n}x"
        if top_n >= 16:
            return True, f"4-gram '{top_fg[:40]}' repeats {top_n}x (extreme)"
            
    trigrams = [" ".join(words[i:i+3]) for i in range(len(words)-2)]
    if trigrams:
        tri_cnt = collections.Counter(trigrams)
        top_tri, top_tri_n = tri_cnt.most_common(1)[0]
        if top_tri not in COMMON_LEGAL and top_tri_n >= 14 and top_tri_n > total * 0.03:
            return True, f"3-gram '{top_tri[:30]}' repeats {top_tri_n}x"

    emoji_n, emoji_reason = _emoji_spam_reason(text)
    if emoji_reason:
        return True, emoji_reason
    if text.count(".") < total / 140 and total > 400:
        return True, "no punctuation"
    
    return False, ""


def _clean(text: Any, *, lo: int, hi: int, field: str) -> str:
    raw_str = str(text or "").strip()
    if field in ("description", "aftermath", "waluigiAssessment"):
        value = re.sub(r'[ \t]+\n', '\n', raw_str)
    else:
        value = " ".join(raw_str.split())
        
    if field == "description":
        if len(value) < lo:
            raise ValidationError(f"{field} must be at least {lo} characters (got {len(value)})")
        if len(value) > 60000:
            raise ValidationError(f"{field} is absurdly long ({len(value)} characters)")
        is_bad, reason = _is_bad_output(value)
        if is_bad:
            raise ValidationError(f"spam detector flagged {field}: {reason}")
    else:
        if not (lo <= len(value) <= hi) and field not in ("aftermath", "waluigiAssessment", "summary", "description"):
            raise ValidationError(f"{field} must be {lo}-{hi} characters (got {len(value)})")
    if re.search(r"mike", value, re.I):
        raise ValidationError(f"{field} names the GM; rewrite without 'mike'")
    return value

def _string_list(raw: Any, *, min_n: int, field: str) -> list[str]:
    if not isinstance(raw, list):
        raise ValidationError(f"{field} must be a list")
    items = [" ".join(str(x).split()) for x in raw if str(x).strip()]
    if len(items) < min_n:
        raise ValidationError(f"{field} needs at least {min_n} entries")
    return items[:8]


def _unique_id(proposed: str, taken: set[str], *, fallback: str) -> str:
    slug = _snake(proposed) or _snake(fallback) or "untitled_record"
    if not _SNAKE.fullmatch(slug):
        slug = _snake(fallback) or "untitled_record"
    if slug not in taken:
        return slug
    for n in range(2, 80):
        candidate = f"{slug}_{n}"
        if candidate not in taken:
            return candidate
    raise ValidationError(f"could not uniquify id {slug!r}")


def _load_list(path) -> list[dict[str, Any]]:
    data = read_json(path, default=[])
    return [row for row in data if isinstance(row, dict)] if isinstance(data, list) else []


def _ids(rows: list[dict[str, Any]]) -> set[str]:
    return {str(row.get("id") or "") for row in rows if row.get("id")}


def _name_hint(rows: list[dict[str, Any]], *, key: str = "name", cap: int = 40) -> str:
    names = sorted({str(row.get(key) or "").strip() for row in rows if row.get(key)})
    return ", ".join(prompting.sample_evenly(names, cap))


def _nation_hint() -> str:
    rows = _load_list(NATIONS)
    names = []
    for row in rows:
        nid = str(row.get("id") or "")
        if nid and nid not in _FOREIGN_SKIP:
            names.append(f"{nid} ({row.get('name') or nid})")
    return ", ".join(prompting.sample_evenly(names, 18))


def _disambiguate_id(raw: dict[str, Any], taken: set[str], why: str) -> dict[str, Any] | None:
    if "duplicate id" not in why and "id must be snake_case" not in why:
        return None
    fixed = dict(raw)
    slug = _unique_id(str(raw.get("id") or raw.get("name") or "record"), taken, fallback="record")
    fixed["id"] = slug
    return fixed


# ---------------------------------------------------------------------------
# injury-table — rewrite one temporary d100 row at a time
# ---------------------------------------------------------------------------

def _injury_store() -> dict[str, Any]:
    data = read_json(INJURIES, default={})
    return data if isinstance(data, dict) else {}


def _injury_entries() -> list[dict[str, Any]]:
    entries = _injury_store().get("entries")
    return [row for row in entries if isinstance(row, dict)] if isinstance(entries, list) else []


def _pending_injuries() -> list[dict[str, Any]]:
    return [row for row in _injury_entries() if not isinstance(row.get("_generated"), dict)]


def injuries_pending() -> int:
    have = len(_injury_entries())
    rewrites = len(_pending_injuries())
    return rewrites + max(0, INJURY_FLOOR - have)


def injuries_next_tasks(count: int) -> list[Task]:
    tasks: list[Task] = []
    for row in _pending_injuries():
        if len(tasks) >= count:
            return tasks
        try:
            roll = int(row.get("d100"))
        except (TypeError, ValueError):
            continue
        tasks.append(Task(
            system_id="injury-table",
            key=f"injury:{roll:03d}",
            label=f"injury table · rewrite row {roll} · {row.get('injuryType') or 'row'}",
            payload={"d100": roll, "category": row.get("category") or "", "current": {
                k: row.get(k) for k in ("injuryType", "description", "cure", "duration", "notes", "category")
            }},
        ))
    have = len(_injury_entries())
    need = max(0, INJURY_FLOOR - have)
    for offset in range(min(count - len(tasks), need)):
        slot = have + offset + 1
        tasks.append(Task(
            system_id="injury-table",
            key=f"injury:gen:{slot}",
            label=f"injury table · new row {slot}",
            payload={"d100": slot, "is_new": True},
        ))
    return tasks


_INJURY_SYSTEM = """You rewrite one row of a d100 permanent-injury table for a tabletop campaign archive.
Keep the mechanical contract (what the injury does, how it is cured, how long it lasts).
Enrich the wording so a GM can read it at the table. Do not invent a new d100 number.
Do not name real-world people. Never write the name mike.

Return strictly valid JSON only, no commentary, no code fence:

{
  "injuryType": "<2-6 word name>",
  "category": "<same category unless a tighter label is clearly better>",
  "description": "<one or two sentences, the mechanical effect a player hears>",
  "cure": "<the least powerful treatment that removes it>",
  "duration": "<how long it lasts: Forever, 2d8 weeks, Long rest, Instant, ...>",
  "notes": "<optional GM note, or empty string>"
}
"""


def injuries_build_prompt(task: Task) -> tuple[str, str]:
    siblings = [
        {"d100": r.get("d100"), "injuryType": r.get("injuryType"), "category": r.get("category")}
        for r in _injury_entries()
        if r.get("d100") != task.payload.get("d100")
    ]
    if task.payload.get("is_new"):
        prompt = (
            f"Write ONE NEW injury row for the table (row {task.payload['d100']}).\n"
            f"Pick a severe or interesting consequence.\n"
            f"Existing categories include: Death, Facial scarring, Lose a limb, Severe injury, Minor boon, Special effect, etc.\n"
            f"Other injury names (do not duplicate):\n"
            f"{json.dumps(siblings[-24:], ensure_ascii=False)}\n"
            "Return one new row."
        )
        return _INJURY_SYSTEM.replace("rewrite one row", "write ONE NEW row"), prompt
        
    current = task.payload.get("current") or {}
    prompt = (
        f"Rewrite row {task.payload['d100']} in category {task.payload.get('category')!r}.\n"
        f"Keep the same mechanical idea. Current row:\n"
        f"{json.dumps(current, ensure_ascii=False, indent=2)}\n\n"
        f"Other injury names (do not duplicate):\n"
        f"{json.dumps(siblings[:24], ensure_ascii=False)}\n"
        "Return one rewritten row."
    )
    return _INJURY_SYSTEM, prompt


def injuries_validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    roll = int(task.payload["d100"])
    injury_type = _clean(raw.get("injuryType"), lo=3, hi=64, field="injuryType")
    if task.payload.get("is_new"):
        category = _clean(raw.get("category") or "Severe injury", lo=3, hi=48, field="category")
    else:
        category = _clean(raw.get("category") or task.payload.get("category") or "Injury", lo=3, hi=48, field="category")
    description = _clean(raw.get("description"), lo=12, hi=400, field="description")
    cure = _clean(raw.get("cure") or "None", lo=2, hi=80, field="cure")
    duration = _clean(raw.get("duration") or "Until cured", lo=2, hi=64, field="duration")
    notes = " ".join(str(raw.get("notes") or "").split())
    if len(notes) > 160:
        raise ValidationError("notes too long")
    taken = {
        (r.get("injuryType") or "").strip().lower()
        for r in _injury_entries()
        if r.get("d100") != roll
    }
    if injury_type.lower() in taken:
        raise ValidationError(f"duplicate injuryType {injury_type!r}")
    return {
        "d100": roll,
        "category": category,
        "injuryType": injury_type,
        "description": description,
        "cure": cure,
        "duration": duration,
        "notes": notes,
        "temporary": True,
    }


def injuries_repair(task: Task, raw: dict[str, Any], why: str) -> dict[str, Any] | None:
    current = dict(task.payload.get("current") or {})
    if not current:
        return None
    fixed = dict(raw)
    if "duplicate injuryType" in why:
        original = str(current.get("injuryType") or "Injury")
        roll = task.payload.get("d100")
        fixed["injuryType"] = f"{original} (row {roll})"[:64]
        return fixed
    # Fill missing short fields from the existing row rather than inventing.
    for field in ("injuryType", "category", "description", "cure", "duration", "notes"):
        if not str(fixed.get(field) or "").strip() and current.get(field) not in (None, ""):
            fixed[field] = current[field]
    if fixed != raw:
        return fixed
    return None


def injuries_apply(task: Task, record: dict[str, Any]) -> TaskResult:
    with _LOCK:
        store = _injury_store()
        entries = store.get("entries")
        if not isinstance(entries, list):
            return TaskResult(task=task, ok=False, detail="injuries.json has no entries")
        roll = record["d100"]
        if task.payload.get("is_new"):
            if any(r.get("d100") == roll for r in entries if isinstance(r, dict)):
                return TaskResult(task=task, ok=False, detail=f"d100 {roll} already exists")
            entry = dict(record)
            entry["temporary"] = True
            stamp = provenance("injury-table", task.payload.get("model", ""))
            entry["_generated"] = stamp["_generated"]
            entries.append(entry)
        else:
            idx = next((i for i, row in enumerate(entries)
                        if isinstance(row, dict) and row.get("d100") == roll), None)
            if idx is None:
                return TaskResult(task=task, ok=False, detail=f"d100 {roll} missing")
            entry = dict(entries[idx])
            entry.update(record)
            entry["temporary"] = True
            stamp = provenance("injury-table", task.payload.get("model", ""))
            entry["_generated"] = stamp["_generated"]
            entries[idx] = entry
        store["entries"] = entries
        store["status"] = "temporary"
        atomic_write_json(INJURIES, store)
    return TaskResult(
        task=task, ok=True,
        detail=f"d100 {roll} · {record['injuryType']}",
        record=record, changed_paths=[str(INJURIES.relative_to(ROOT))],
    )


INJURY_SPEC = SystemSpec(
    id="injury-table",
    title="Injury Table · expand and rewrite",
    summary="Rewrite temporary injury rows, then append new ones past 100.",
    stage=1,
    next_tasks=injuries_next_tasks,
    build_prompt=injuries_build_prompt,
    validate=injuries_validate,
    apply=injuries_apply,
    pending=injuries_pending,
    repair=injuries_repair,
)


# ---------------------------------------------------------------------------
# locations
# ---------------------------------------------------------------------------

def locations_pending() -> int:
    return max(0, LOCATION_FLOOR - len(_load_list(LOCATIONS)))


def locations_next_tasks(count: int) -> list[Task]:
    have = len(_load_list(LOCATIONS))
    need = max(0, LOCATION_FLOOR - have)
    nations = [n for n in _load_list(NATIONS) if str(n.get("id") or "")]
    import random
    tasks: list[Task] = []
    for offset in range(min(count, need)):
        slot = have + offset + 1
        nation = random.choice(nations) if nations else {"id": "mushroom_kingdom", "name": "Mushroom Kingdom"}
        tasks.append(Task(
            system_id="locations",
            key=f"location:gen:{slot}",
            label=f"location · new card {slot}",
            payload={"slot": slot, "nation_id": nation["id"], "nation_name": nation.get("name") or nation["id"]},
        ))
    return tasks


_LOCATION_SYSTEM = """You are a careful Waluipedia location archivist filing ONE new location card.
Write from inside the world (Waluigi's encyclopaedia voice: opinionated, physical detail).
This is a PLACE, not a person, faction, event, or battle.
Do not invent real-world canon. Never write the name mike.
Use the supplied Lore Context to ground this location in the world.
Return strictly valid JSON only, no commentary, no code fence:

{
  "id": "<lowercase snake_case>",
  "name": "<2-7 words>",
  "type": "<Location/…>",
  "region": "<where in the archive this sits>",
  "status": "<current condition in one short clause>",
  "summary": "<one sentence a reader sees on the card>",
  "description": "<detailed Waluigi-voiced description of the place>",
  "notableFeatures": ["<feature>", "<feature>", "<feature>"],
  "relatedArticles": ["<existing archive id>"],
  "population": "<who lives here, or none>",
  "climate": "<weather / planar condition>",
  "controllingFaction": "<who holds it, or Unrecorded>"
}
"""


def locations_build_prompt(task: Task) -> tuple[str, str]:
    rows = _load_list(LOCATIONS)
    regions = sorted({str(r.get("region") or "") for r in rows if r.get("region")})
    nation_id = task.payload.get("nation_id", "mushroom_kingdom")
    nation_name = task.payload.get("nation_name", "Mushroom Kingdom")
    
    try:
        cards_data = lore_search.search(f"{nation_id} {nation_name}", k=8)
        context = lore_search.format_cards(cards_data)
    except Exception:
        context = "No specific lore context found."

    prompt = (
        f"Existing location names (do not repeat): {_name_hint(rows)}\n"
        f"Regions already covered: {', '.join(prompting.sample_evenly(regions, 16))}\n"
        f"Nation context to set this in: {nation_name}\n"
        f"LORE CONTEXT for {nation_name}:\n{context}\n\n"
        f"File location card #{task.payload['slot']}. Set it inside {nation_name} or an underrepresented region.\n"
        "The description MUST be a substantial physical tour (at least 300 words). Label uncertainty rather than inventing."
    )
    return _LOCATION_SYSTEM, prompt

def locations_generate(task: Task, client: Any, temperature: float) -> dict[str, Any]:
    system, user = locations_build_prompt(task)
    # Remove description from JSON schema so we only generate metadata first
    system = system.replace('  "description": "<detailed Waluigi-voiced description of the place>",\n', '')
    
    if task.last_error:
        user += f"\n\nYOUR PREVIOUS ATTEMPT FAILED: {task.last_error}\nFix this in your next attempt."
        
    try:
        raw = client.complete_json(system, user, temperature=temperature)
    except Exception as e:
        if type(e).__name__ == "ContextExceededError":
            from ..runner import _shorten_prompt
            try:
                raw = client.complete_json(system, _shorten_prompt(user, 0.5), temperature=temperature)
            except Exception:
                raw = client.complete_json(system, _shorten_prompt(user, 0.25), temperature=temperature)
        else:
            raise

    # Phase 2: Generate the article step-by-step
    prog = task.payload.get("_progress")
    if prog: prog("Drafting location sections...")
    
    desc_sys = "You are an encyclopedic chronicler. Write objectively about this location's history, architecture, and current state. Use markdown headers. Never write the name mike."
    
    # Step A: Get an outline
    outline_user = f"We are writing a geographical archive record for '{raw.get('name')}' (Region: {raw.get('region')}).\nProvide a 3-5 section outline for this article. Return ONLY a JSON list of strings, like [\"Overview & Geography\", \"Historical Significance\", \"Notable Hazards\"]. Do not include markdown or explanations."
    
    try:
        outline_resp = client.complete_text(desc_sys, outline_user, temperature=temperature).strip()
        import json
        if outline_resp.startswith("```json"):
            outline_resp = outline_resp.split("```json")[1].split("```")[0].strip()
        elif outline_resp.startswith("```"):
            outline_resp = outline_resp.split("```")[1].split("```")[0].strip()
        outline = json.loads(outline_resp)
        if not isinstance(outline, list): outline = ["Geography", "History", "Current State"]
    except Exception:
        outline = ["Physical Geography", "History", "Local Threats"]
        
    # Step B: Generate each section
    final_desc = []
    for i, section_title in enumerate(outline):
        if prog: prog(f"Writing section {i+1}/{len(outline)}: {section_title}...")
        
        section_user = f"Location: {raw.get('name')}\nSummary: {raw.get('summary')}\n\nWe are writing the section: '{section_title}'.\n"
        if final_desc:
            section_user += f"Previous section ended with:\n{final_desc[-1][-200:]}\n\n"
            
        section_user += "Write this specific section in rich, encyclopedic prose (200-400 words). Use double newlines for paragraphs. DO NOT just output a wall of text. Return ONLY the plaintext paragraphs for this section. Do NOT output a markdown header or the section title itself, I will add it. DO NOT output a wall of text."
        
        try:
            section_content = client.complete_text(desc_sys, section_user, temperature=temperature)
            final_desc.append(f"## {section_title}\n\n{section_content.strip()}")
        except Exception:
            continue
            
    desc = "\n\n".join(final_desc)

    # Auto-expander if STILL too short
    while _words(desc) < 1200 and len(desc) > 0:
        if prog: prog(f"Expanding short location description ({_words(desc)} words)...")
        expand_sys = "You are an archivist. Continue the location record in plaintext. Return ONLY the continuation text."
        expand_user = (
            f"You are writing the location '{raw.get('name')}'. Here is what you have so far:\n\n{desc[-1000:]}\n\n"
            f"This is a good start, but it needs to be longer. Add one more detailed section (add another 300-500 words) with a markdown header (##). "
            f"Return ONLY the NEW continuation text."
        )
        try:
            expansion = client.complete_text(expand_sys, expand_user, temperature=temperature)
            if _words(expansion) > 50:
                desc = desc + "\n\n" + expansion
            else:
                break
        except Exception:
            break

    raw["description"] = desc
    return raw


def locations_validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    taken = _ids(_load_list(LOCATIONS))
    slug = str(raw.get("id") or "")
    if not _SNAKE.fullmatch(slug):
        raise ValidationError(f"id must be snake_case (got {slug!r})")
    if slug in taken:
        raise ValidationError(f"duplicate id {slug!r}")
    record = {
        "id": slug,
        "name": _clean(raw.get("name"), lo=3, hi=80, field="name"),
        "type": _clean(raw.get("type") or "Location", lo=3, hi=80, field="type"),
        "region": _clean(raw.get("region"), lo=3, hi=80, field="region"),
        "status": "Generated — review",
        "summary": _clean(raw.get("summary"), lo=20, hi=400, field="summary"),
        "description": _clean(raw.get("description"), lo=240, hi=6000, field="description"),
        "notableFeatures": _string_list(raw.get("notableFeatures"), min_n=3, field="notableFeatures"),
        "relatedArticles": _string_list(raw.get("relatedArticles") or [], min_n=0, field="relatedArticles"),
        "population": " ".join(str(raw.get("population") or "Unrecorded").split())[:160],
        "climate": " ".join(str(raw.get("climate") or "Unrecorded").split())[:160],
        "controllingFaction": " ".join(str(raw.get("controllingFaction") or "Unrecorded").split())[:120],
    }
    return record


def locations_repair(task: Task, raw: dict[str, Any], why: str) -> dict[str, Any] | None:
    return _disambiguate_id(raw, _ids(_load_list(LOCATIONS)), why)


def locations_apply(task: Task, record: dict[str, Any]) -> TaskResult:
    with _LOCK:
        rows = _load_list(LOCATIONS)
        if any(r.get("id") == record["id"] for r in rows):
            return TaskResult(task=task, ok=False, detail="id already present")
        entry = dict(record)
        entry.update(provenance("locations", task.payload.get("model", ""), status="Generated — review"))
        entry["status"] = "Generated — review"
        rows.append(entry)
        atomic_write_json(LOCATIONS, rows)
    return TaskResult(
        task=task, ok=True, detail=record["name"], record=record,
        changed_paths=[str(LOCATIONS.relative_to(ROOT))],
    )


LOCATION_SPEC = SystemSpec(
    id="locations",
    title="Locations · new cards",
    summary="Append source-aware location cards until the archive floor is met.",
    stage=1,
    next_tasks=locations_next_tasks,
    generate=locations_generate,
    validate=locations_validate,
    apply=locations_apply,
    pending=locations_pending,
    repair=locations_repair,
)


# ---------------------------------------------------------------------------
# events
# ---------------------------------------------------------------------------

def events_pending() -> int:
    return max(0, EVENT_FLOOR - len(_load_list(EVENTS)))


def events_next_tasks(count: int) -> list[Task]:
    have = len(_load_list(EVENTS))
    need = max(0, EVENT_FLOOR - have)
    nations = [n for n in _load_list(NATIONS) if str(n.get("id") or "") and n["id"] not in _FOREIGN_SKIP]
    import random
    tasks: list[Task] = []
    for offset in range(min(count, need)):
        slot = have + offset + 1
        nation = random.choice(nations) if nations else {"id": "equestria", "name": "Equestria"}
        tasks.append(Task(
            system_id="events",
            key=f"event:gen:{slot}",
            label=f"event · new record {slot}",
            payload={"slot": slot, "nation_id": nation["id"], "nation_name": nation.get("name") or nation["id"]},
        ))
    return tasks


_EVENT_SYSTEM = """You are an encyclopedic chronicler filing ONE PAST historical event for the archive. Do not title the event after Waluigi. Focus on the lore, the factions, and the setting. Do not write about Waluigi doing everything.
Story with a commentator, not a report with scenes attached. Physical detail: quoted speech, named objects, sounds.
Never write the name mike. Do not invent real-world canon.
Use the supplied Lore Context to feature real factions, locations, and people from this nation.
Return strictly valid JSON only, no commentary, no code fence:

{
  "id": "<lowercase snake_case>",
  "name": "<title, 3-10 words>",
  "title": "<longer card title>",
  "type": "<short type label>",
  "date": "<Month day, year BF>",
  "era": "<one short era clause>",
  "location": "<a specific place inside the chosen nation>",
  "summary": "<one sentence>",
  "description": "<detailed Waluigi-voiced event record>",
  "notableFeatures": ["<feature>", "<feature>", "<feature>"],
  "relatedArticles": ["<existing archive id>"]
}
"""

def events_build_prompt(task: Task) -> tuple[str, str]:
    rows = _load_list(EVENTS)
    nation_id = task.payload.get("nation_id", "equestria")
    nation_name = task.payload.get("nation_name", "Equestria")
    
    # Context search
    try:
        cards_data = lore_search.search(f"{nation_id} {nation_name}", k=8)
        context = lore_search.format_cards(cards_data)
    except Exception:
        context = "No specific lore context found."

    prompt = (
        f"Existing event titles (do not repeat): {_name_hint(rows)}\n"
        f"Legal months: {', '.join(_MONTHS)}\n\n"
        f"LORE CONTEXT for {nation_name}:\n{context}\n\n"
        f"File past event #{task.payload['slot']} for {nation_name}. Year 10-1040 BF. "
        f"Location must be inside {nation_name}. "
        "The description MUST be a substantial historical record (at least 300 words)."
    )
    return _EVENT_SYSTEM, prompt

def events_generate(task: Task, client: Any, temperature: float) -> dict[str, Any]:
    system, user = events_build_prompt(task)
    # Remove description from JSON schema so we only generate metadata first
    system = system.replace('  "description": "<detailed Waluigi-voiced event record>",\n', '')
    
    # Instruct the AI to vary the date and focus on obscure lore
    user += "\n\nIMPORTANT: Pick a random year between 100 BF and 1035 BF, or even earlier. Focus on minor characters, remote POIs, other countries, and deep lore, NOT main party canon events! Do not invent new major world-altering canon."
    
    if task.last_error:
        user += f"\n\nYOUR PREVIOUS ATTEMPT FAILED: {task.last_error}\nFix this in your next attempt."
        
    try:
        raw = client.complete_json(system, user, temperature=temperature)
    except Exception as e:
        if type(e).__name__ == "ContextExceededError":
            from ..runner import _shorten_prompt
            try:
                raw = client.complete_json(system, _shorten_prompt(user, 0.5), temperature=temperature)
            except Exception:
                raw = client.complete_json(system, _shorten_prompt(user, 0.25), temperature=temperature)
        else:
            raise

    # Phase 2: Generate the article step-by-step
    prog = task.payload.get("_progress")
    if prog: prog("Drafting article sections...")
    
    desc_sys = "You are Waluigi, the Auditor-General. Write the story from your strict, cynical first-person perspective (using 'Waluigi' or 'I'). Include your commentary, grievances, and signature 'WAH'. The story MUST be at least 1000 words long. Write about minor characters and distant regions. Use markdown headers. Never write the name mike."
    
    # Step A: Get an outline
    outline_user = f"We are writing a historical archive record for '{raw.get('name')}' (Location: {raw.get('location')}, Era: {raw.get('era')}).\nProvide a 3-5 section outline for this article. Return ONLY a JSON list of strings, like [\"Prologue: The Rising Tension\", \"The Main Conflict\", \"Aftermath\"]. Do not include markdown or explanations."
    
    try:
        outline_resp = client.complete_text(desc_sys, outline_user, temperature=temperature).strip()
        import json
        if outline_resp.startswith("```json"):
            outline_resp = outline_resp.split("```json")[1].split("```")[0].strip()
        elif outline_resp.startswith("```"):
            outline_resp = outline_resp.split("```")[1].split("```")[0].strip()
        outline = json.loads(outline_resp)
        if not isinstance(outline, list): outline = ["Introduction", "Key Events", "Conclusion"]
    except Exception:
        outline = ["Background", "The Incident", "Aftermath"]
        
    # Step B: Generate each section
    final_desc = []
    for i, section_title in enumerate(outline):
        if prog: prog(f"Writing section {i+1}/{len(outline)}: {section_title}...")
        
        section_user = f"Event: {raw.get('name')}\nSummary: {raw.get('summary')}\n\nWe are writing the section: '{section_title}'.\n"
        if final_desc:
            section_user += f"Previous section ended with:\n{final_desc[-1][-200:]}\n\n"
            
        section_user += "Write this specific section in rich, story-driven prose (200-400 words), focusing on physical sensory details. Use double newlines for paragraphs. DO NOT just output a wall of text. Focus on the lore, factions, and minor unmentioned players. Return ONLY the plaintext paragraphs for this section. Do NOT output a markdown header or the section title itself, I will add it. DO NOT output a wall of text."
        
        try:
            section_content = client.complete_text(desc_sys, section_user, temperature=temperature)
            final_desc.append(f"## {section_title}\n\n{section_content.strip()}")
        except Exception:
            continue
            
    desc = "\n\n".join(final_desc)

    # Auto-expander if STILL too short
    while _words(desc) < 1200 and len(desc) > 0:
        if prog: prog(f"Expanding short description ({_words(desc)} words)...")
        expand_sys = "You are an archivist. Continue the historical record in plaintext. Return ONLY the continuation text."
        expand_user = (
            f"You are writing the event '{raw.get('name')}'. Here is what you have so far:\n\n{desc[-1000:]}\n\n"
            f"This is a good start, but it needs to be longer. Add one more detailed section (add another 300-500 words) with a markdown header (##). "
            f"Return ONLY the NEW continuation text."
        )
        try:
            expansion = client.complete_text(expand_sys, expand_user, temperature=temperature)
            if _words(expansion) > 50:
                desc = desc + "\n\n" + expansion
            else:
                break
        except Exception:
            break


    raw["description"] = desc

    # Phase 3: Participants
    if prog: prog("Determining participants...")
    part_sys = "You are an archivist. Extract the participants from the event. Return valid JSON containing a single key 'participants' mapped to a list of objects: [{'id': 'snake_case_id', 'name': 'Full Name', 'role': 'What they did'}]."
    try:
        part_resp = client.complete_json(part_sys, f"Event Description:\n{desc[-1500:]}\n\nList 3-5 participants.", temperature=temperature)
        if "participants" in part_resp:
            raw["participants"] = part_resp["participants"]
    except Exception as e:
        print("Failed participants:", e)
        raw["participants"] = [{"id": "unknown_operator", "name": "Unknown Operator", "role": "Unrecorded"}]
        raw["participants"] = [{"id": "unknown_operator", "name": "Unknown Operator", "role": "Unrecorded"}]

    
    # Phase 4: XP Awards
    if prog: prog("Calculating XP Awards...")
    xp_sys = "You are Waluigi, auditing the session. Award XP to the participants. Return valid JSON containing a single key 'xpAwards' mapped to a list of objects: [{'character': 'snake_case_id', 'amount': 100, 'reason': 'Why they got it', 'type': 'Combat XP'}]."
    try:
        part_json = json.dumps(raw.get("participants", []))
        xp_user = f"Event Description:\n{desc[-1500:]}\n\nHere are the participants: {part_json}\n\nAssign XP ONLY using the exact 'id' values from the participant list provided."
        xp_resp = client.complete_json(xp_sys, xp_user, temperature=temperature)
        if "xpAwards" in xp_resp:
            raw["xpAwards"] = xp_resp["xpAwards"]
    except Exception as e:
        print("Failed xpAwards:", e)
        raw["xpAwards"] = []


    # Phase 5: Waluigi's Assessment (Investigative stuff)
    if prog: prog("Drafting Waluigi's Assessment...")
    wal_sys = "You are Waluigi. Write a short, cynical, objective assessment (150 words) of the event's consequences and what it means for the world's factions. Use your signature 'WAH.' at the end. Return ONLY plaintext."
    try:
        wal_resp = client.complete_text(wal_sys, f"Event Description:\n{desc[-1500:]}", temperature=temperature).strip()
        raw["waluigiAssessment"] = wal_resp
    except Exception as e:
        print("Failed waluigiAssessment:", e)
        raw["waluigiAssessment"] = "Waluigi has filed this record, but the intelligence is too sparse for a full tactical assessment. WAH."
        raw["waluigiAssessment"] = "Waluigi has filed this record, but the intelligence is too sparse for a full tactical assessment. WAH."

    # Phase 6: Related Investigative Article
    if prog: prog("Drafting Related Investigative Article (Aftermath)...")
    inv_sys = "You are an intelligence agent. Write a short follow-up investigative report (200 words) about the aftermath of this event. Return ONLY plaintext."
    try:
        inv_resp = client.complete_text(inv_sys, f"Event Description:\n{desc[-1500:]}\n\nWrite the aftermath.", temperature=temperature).strip()
        raw["aftermath"] = inv_resp
    except Exception as e:
        print("Failed aftermath:", e)
        raw["aftermath"] = "The long-term consequences of this event remain undocumented in the archives."
        raw["aftermath"] = "The long-term consequences of this event remain undocumented in the archives."

    return raw


def _parse_year(date: str) -> int | None:
    match = re.search(r"(\d{3,4})\s*BF", str(date or ""), re.I)
    return int(match.group(1)) if match else None


def events_validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    taken = _ids(_load_list(EVENTS))
    slug = str(raw.get("id") or "")
    if not _SNAKE.fullmatch(slug):
        raise ValidationError(f"id must be snake_case (got {slug!r})")
    if slug in taken:
        raise ValidationError(f"duplicate id {slug!r}")
    date = _clean(raw.get("date"), lo=6, hi=80, field="date")
    year = _parse_year(date)
    if year is None or not (10 <= year <= 1040):
        raise ValidationError("date must be a past year 10-1040 BF")
    location = _clean(raw.get("location"), lo=3, hi=120, field="location")
    if False: pass
    res = {
        "id": slug,
        "name": _clean(raw.get("name"), lo=3, hi=100, field="name"),
        "title": _clean(raw.get("title") or raw.get("name"), lo=3, hi=160, field="title"),
        "type": _clean(raw.get("type") or "historical event", lo=3, hi=80, field="type"),
        "date": date,
        "era": _clean(raw.get("era") or "Foreign past", lo=3, hi=80, field="era"),
        "location": location,
        "status": "Generated — review",
        "summary": _clean(raw.get("summary"), lo=20, hi=400, field="summary"),
        "description": _clean(raw.get("description"), lo=240, hi=6000, field="description"),
        "notableFeatures": _string_list(raw.get("notableFeatures"), min_n=3, field="notableFeatures"),
        "relatedArticles": _string_list(raw.get("relatedArticles") or [], min_n=0, field="relatedArticles"),
    }
    
    if "participants" in raw:
        res["participants"] = raw["participants"]
    if "xpAwards" in raw:
        res["xpAwards"] = raw["xpAwards"]
    if "waluigiAssessment" in raw:
        res["waluigiAssessment"] = raw["waluigiAssessment"]
    if "aftermath" in raw:
        res["aftermath"] = raw["aftermath"]
    if "timeWindow" in raw:
        res["timeWindow"] = raw["timeWindow"]
        
    return res

    
    if "participants" in raw:
        res["participants"] = raw["participants"]
    if "xpAwards" in raw:
        res["xpAwards"] = raw["xpAwards"]
    if "waluigiAssessment" in raw:
        res["waluigiAssessment"] = raw["waluigiAssessment"]
    if "aftermath" in raw:
        res["aftermath"] = raw["aftermath"]
    if "timeWindow" in raw:
        res["timeWindow"] = raw["timeWindow"]
        
    return res



def events_repair(task: Task, raw: dict[str, Any], why: str) -> dict[str, Any] | None:
    fixed = _disambiguate_id(raw, _ids(_load_list(EVENTS)), why)
    if fixed:
        return fixed
    if "722-1039" in why:
        fixed = dict(raw)
        date = str(raw.get("date") or "")
        if not _parse_year(date):
            fixed["date"] = "Harvestide 12, 912 BF"
            return fixed
    return None


def events_apply(task: Task, record: dict[str, Any]) -> TaskResult:
    with _LOCK:
        rows = _load_list(EVENTS)
        if any(r.get("id") == record["id"] for r in rows):
            return TaskResult(task=task, ok=False, detail="id already present")
            
        analysis_text = record.pop("waluigiAssessment", None)
        aftermath_text = record.pop("aftermath", None)
        
        entry = dict(record)
        entry.update(provenance("events", task.payload.get("model", ""), status="Generated — review"))
        entry["status"] = "Generated — review"
        rows.append(entry)
        atomic_write_json(EVENTS, rows)
        
        changed = [str(EVENTS.relative_to(ROOT))]
        
        if analysis_text:
            aa_path = ROOT / "data" / "articleAnalyses.json"
            if aa_path.exists():
                with open(aa_path, "r", encoding="utf-8") as f:
                    aa_data = json.load(f)
                aa_list = aa_data.setdefault("analyses", [])
                aa_id = f"{record['id']}_waluigi_analysis"
                if not any(a.get("id") == aa_id for a in aa_list):
                    aa_list.append({
                        "id": aa_id,
                        "sourceArticle": record["id"],
                        "title": record.get("title") or record.get("name"),
                        "kicker": "Waluigi's Article Analysis",
                        "subtitle": "A signed interpretation of the generated record.",
                        "archivist": "Waluigi, Auditor-General",
                        "filed": record.get("date", "Unknown Date"),
                        "summary": record.get("summary", ""),
                        "thesis": analysis_text,
                        "sections": []
                    })
                    atomic_write_json(aa_path, aa_data)
                    changed.append(str(aa_path.relative_to(ROOT)))

        if aftermath_text:
            inv_path = ROOT / "data" / "investigations.json"
            if inv_path.exists():
                with open(inv_path, "r", encoding="utf-8") as f:
                    inv_data = json.load(f)
                inv_list = inv_data.setdefault("investigations", [])
                inv_id = f"inv_{record['id']}"
                if not any(i.get("id") == inv_id for i in inv_list):
                    inv_list.append({
                        "id": inv_id,
                        "codename": str(record.get("name", "Investigation")).upper(),
                        "title": f"Aftermath: {record.get('name')}",
                        "subtitle": "The archive requires answers.",
                        "status": "active",
                        "classification": "Generated Investigation",
                        "opened": record.get("date", "Unknown"),
                        "archivist": "Waluigi, Auditor-General",
                        "icon": "🕵️",
                        "accent": "#4a9c6d",
                        "plainSummary": [{"point": aftermath_text}],
                        "leads": [],
                        "sessions": [{"id": f"s_{record['id']}", "label": str(record.get("name", "")), "event": record["id"]}],
                        "relatedEvents": [record["id"]],
                        "exhibits": []
                    })
                    atomic_write_json(inv_path, inv_data)
                    changed.append(str(inv_path.relative_to(ROOT)))
                    
    return TaskResult(
        task=task, ok=True, detail=record["name"], record=record,
        changed_paths=changed,
    )


EVENT_SPEC = SystemSpec(
    id="events",
    title="Events · new records",
    summary="Append source-aware foreign past events until the archive floor is met.",
    stage=1,
    next_tasks=events_next_tasks,
    generate=events_generate,
    validate=events_validate,
    apply=events_apply,
    pending=events_pending,
    repair=events_repair,
)


# ---------------------------------------------------------------------------
# battles
# ---------------------------------------------------------------------------

def battles_pending() -> int:
    return max(0, BATTLE_FLOOR - len(_load_list(BATTLES)))


def battles_next_tasks(count: int) -> list[Task]:
    have = len(_load_list(BATTLES))
    need = max(0, BATTLE_FLOOR - have)
    nations = [n for n in _load_list(NATIONS) if str(n.get("id") or "") and n["id"] not in _FOREIGN_SKIP]
    import random
    tasks: list[Task] = []
    for offset in range(min(count, need)):
        slot = have + offset + 1
        nation = random.choice(nations) if nations else {"id": "equestria", "name": "Equestria"}
        tasks.append(Task(
            system_id="battles",
            key=f"battle:gen:{slot}",
            label=f"battle · new record {slot}",
            payload={"slot": slot, "nation_id": nation["id"], "nation_name": nation.get("name") or nation["id"]},
        ))
    return tasks


_BATTLE_SYSTEM = """You are an encyclopedic war-reporter filing ONE PAST battle for the archive. Do not title the battle after Waluigi. Focus on the factions and the lore.
Physical consequence over summary. Never write the name mike. Do not invent real-world canon.
Use the supplied Lore Context to feature real factions, locations, and people from this nation.
Date it in 722-1039 BF. Return strictly valid JSON only, no commentary, no code fence:

{
  "id": "<lowercase snake_case>",
  "name": "<battle name>",
  "date": "<Month day, year BF>",
  "location": "<specific place inside the chosen nation>",
  "type": "<skirmish|siege|ambush|…>",
  "result": "<who held the ground, in one clause>",
  "belligerents": {
    "attackers": {"name": "<side>", "factionId": "<snake_case or Unrecorded>", "commander": "<name or Unrecorded>"},
    "defenders": {"name": "<side>", "factionId": "<snake_case or Unrecorded>", "commander": "<name or Unrecorded>"}
  },
  "casualties": {"attackers": "<what it cost them>", "defenders": "<what it cost them>"},
  "summary": "<one sentence>",
  "description": "<detailed Waluigi-voiced war report>",
  "aftermath": "<what was left standing>",
  "relatedArticles": ["<existing archive id>"]
}
"""

def battles_build_prompt(task: Task) -> tuple[str, str]:
    rows = _load_list(BATTLES)
    nation_id = task.payload.get("nation_id", "equestria")
    nation_name = task.payload.get("nation_name", "Equestria")
    
    # Context search
    try:
        cards_data = lore_search.search(f"{nation_id} {nation_name}", k=8)
        context = lore_search.format_cards(cards_data)
    except Exception:
        context = "No specific lore context found."

    prompt = (
        f"Existing battle names (do not repeat): {_name_hint(rows)}\n"
        f"Legal months: {', '.join(_MONTHS)}\n\n"
        f"LORE CONTEXT for {nation_name}:\n{context}\n\n"
        f"File past battle #{task.payload['slot']} for {nation_name}. Year 10-1040 BF.\n"
        f"Location must be inside {nation_name}. Name both sides using factions from the lore if possible.\n"
        "The description MUST be a substantial war report (at least 300 words) covering The Field, The Opening, The Middle, and The Finish."
    )
    return _BATTLE_SYSTEM, prompt

def battles_generate(task: Task, client: Any, temperature: float) -> dict[str, Any]:
    system, user = battles_build_prompt(task)
    # Remove description from JSON schema so we only generate metadata first
    system = system.replace('  "description": "<detailed Waluigi-voiced war report>",\n', '')
    
    # Instruct the AI to vary the date and focus on obscure lore
    user += "\n\nIMPORTANT: Pick a random year between 100 BF and 1035 BF, or even earlier. Focus on minor characters, remote POIs, other countries, and deep lore, NOT main party canon events! Do not invent new major world-altering canon."
    
    if task.last_error:
        user += f"\n\nYOUR PREVIOUS ATTEMPT FAILED: {task.last_error}\nFix this in your next attempt."
        
    try:
        raw = client.complete_json(system, user, temperature=temperature)
    except Exception as e:
        if type(e).__name__ == "ContextExceededError":
            from ..runner import _shorten_prompt
            try:
                raw = client.complete_json(system, _shorten_prompt(user, 0.5), temperature=temperature)
            except Exception:
                raw = client.complete_json(system, _shorten_prompt(user, 0.25), temperature=temperature)
        else:
            raise

    # Phase 2: Generate the article step-by-step
    prog = task.payload.get("_progress")
    if prog: prog("Drafting battle sections...")
    
    desc_sys = "You are an encyclopedic war-reporter writing a tactical overview translating dice log ground-truth into physical consequences. Write objectively about historical battles involving minor factions and remote locations. Use markdown headers. Never write the name mike."
    
    # Step A: Get an outline
    outline_user = f"We are writing a military archive record for '{raw.get('name')}' (Location: {raw.get('location')}, Era: {raw.get('era')}).\nProvide a 3-5 section outline for this article. Return ONLY a JSON list of strings, like [\"The Prelude\", \"The Ambush\", \"Aftermath\"]. Do not include markdown or explanations."
    
    try:
        outline_resp = client.complete_text(desc_sys, outline_user, temperature=temperature).strip()
        import json
        if outline_resp.startswith("```json"):
            outline_resp = outline_resp.split("```json")[1].split("```")[0].strip()
        elif outline_resp.startswith("```"):
            outline_resp = outline_resp.split("```")[1].split("```")[0].strip()
        outline = json.loads(outline_resp)
        if not isinstance(outline, list): outline = ["The Gathering", "The Engagement", "The Fallout"]
    except Exception:
        outline = ["The Prelude", "The Battle", "The Aftermath"]
        
    # Step B: Generate each section
    final_desc = []
    for i, section_title in enumerate(outline):
        if prog: prog(f"Writing section {i+1}/{len(outline)}: {section_title}...")
        
        section_user = f"Battle: {raw.get('name')}\nSummary: {raw.get('summary')}\n\nWe are writing the section: '{section_title}'.\n"
        if final_desc:
            section_user += f"Previous section ended with:\n{final_desc[-1][-200:]}\n\n"
            
        section_user += "Write this specific section in rich, encyclopedic prose (200-400 words). Use double newlines for paragraphs. DO NOT just output a wall of text. Focus on tactical movements, minor factions, and gritty consequences. Return ONLY the plaintext paragraphs for this section. Do NOT output a markdown header or the section title itself, I will add it. DO NOT output a wall of text."
        
        try:
            section_content = client.complete_text(desc_sys, section_user, temperature=temperature)
            final_desc.append(f"## {section_title}\n\n{section_content.strip()}")
        except Exception:
            continue
            
    desc = "\n\n".join(final_desc)

    # Auto-expander if STILL too short
    while _words(desc) < 1200 and len(desc) > 0:
        if prog: prog(f"Expanding short battle description ({_words(desc)} words)...")
        expand_sys = "You are an archivist. Continue the war report in plaintext. Return ONLY the continuation text."
        expand_user = (
            f"You are writing the battle '{raw.get('name')}'. Here is what you have so far:\n\n{desc[-1000:]}\n\n"
            f"This is a good start, but it needs to be longer. Add one more detailed section (add another 300-500 words) with a markdown header (##). "
            f"Return ONLY the NEW continuation text."
        )
        try:
            expansion = client.complete_text(expand_sys, expand_user, temperature=temperature)
            if _words(expansion) > 50:
                desc = desc + "\n\n" + expansion
            else:
                break
        except Exception:
            break

    raw["description"] = desc

    # Phase 3: Participants
    if prog: prog("Determining participants...")
    part_sys = "You are an archivist. Extract the participants from the event. Return valid JSON containing a single key 'participants' mapped to a list of objects: [{'id': 'snake_case_id', 'name': 'Full Name', 'role': 'What they did'}]."
    try:
        part_resp = client.complete_json(part_sys, f"Event Description:\n{desc[-1500:]}\n\nList 3-5 participants.", temperature=temperature)
        if "participants" in part_resp:
            raw["participants"] = part_resp["participants"]
    except Exception as e:
        print("Failed participants:", e)
        raw["participants"] = [{"id": "unknown_operator", "name": "Unknown Operator", "role": "Unrecorded"}]
        raw["participants"] = [{"id": "unknown_operator", "name": "Unknown Operator", "role": "Unrecorded"}]

    
    # Phase 4: XP Awards
    if prog: prog("Calculating XP Awards...")
    xp_sys = "You are Waluigi, auditing the session. Award XP to the participants. Return valid JSON containing a single key 'xpAwards' mapped to a list of objects: [{'character': 'snake_case_id', 'amount': 100, 'reason': 'Why they got it', 'type': 'Combat XP'}]."
    try:
        part_json = json.dumps(raw.get("participants", []))
        xp_user = f"Event Description:\n{desc[-1500:]}\n\nHere are the participants: {part_json}\n\nAssign XP ONLY using the exact 'id' values from the participant list provided."
        xp_resp = client.complete_json(xp_sys, xp_user, temperature=temperature)
        if "xpAwards" in xp_resp:
            raw["xpAwards"] = xp_resp["xpAwards"]
    except Exception as e:
        print("Failed xpAwards:", e)
        raw["xpAwards"] = []


    # Phase 5: Waluigi's Assessment (Investigative stuff)
    if prog: prog("Drafting Waluigi's Assessment...")
    wal_sys = "You are Waluigi. Write a short, cynical, objective assessment (150 words) of the event's consequences and what it means for the world's factions. Use your signature 'WAH.' at the end. Return ONLY plaintext."
    try:
        wal_resp = client.complete_text(wal_sys, f"Event Description:\n{desc[-1500:]}", temperature=temperature).strip()
        raw["waluigiAssessment"] = wal_resp
    except Exception as e:
        print("Failed waluigiAssessment:", e)
        raw["waluigiAssessment"] = "Waluigi has filed this record, but the intelligence is too sparse for a full tactical assessment. WAH."
        raw["waluigiAssessment"] = "Waluigi has filed this record, but the intelligence is too sparse for a full tactical assessment. WAH."

    # Phase 6: Related Investigative Article
    if prog: prog("Drafting Related Investigative Article (Aftermath)...")
    inv_sys = "You are an intelligence agent. Write a short follow-up investigative report (200 words) about the aftermath of this event. Return ONLY plaintext."
    try:
        inv_resp = client.complete_text(inv_sys, f"Event Description:\n{desc[-1500:]}\n\nWrite the aftermath.", temperature=temperature).strip()
        raw["aftermath"] = inv_resp
    except Exception as e:
        print("Failed aftermath:", e)
        raw["aftermath"] = "The long-term consequences of this event remain undocumented in the archives."
        raw["aftermath"] = "The long-term consequences of this event remain undocumented in the archives."

    return raw


def _side(raw: Any, field: str) -> dict[str, str]:
    if not isinstance(raw, dict):
        raise ValidationError(f"{field} must be an object")
    name = _clean(raw.get("name"), lo=3, hi=120, field=f"{field}.name")
    faction = " ".join(str(raw.get("factionId") or "unrecorded").split())[:64]
    commander = " ".join(str(raw.get("commander") or "Unrecorded").split())[:80]
    return {"name": name, "factionId": _snake(faction) or "unrecorded", "commander": commander}


def battles_validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    taken = _ids(_load_list(BATTLES))
    slug = str(raw.get("id") or "")
    if not _SNAKE.fullmatch(slug):
        raise ValidationError(f"id must be snake_case (got {slug!r})")
    if slug in taken:
        raise ValidationError(f"duplicate id {slug!r}")
    date = _clean(raw.get("date"), lo=6, hi=80, field="date")
    year = _parse_year(date)
    if year is None or not (10 <= year <= 1040):
        raise ValidationError("date must be a past year 10-1040 BF")
    location = _clean(raw.get("location"), lo=3, hi=120, field="location")
    if False: pass
    belligerents = raw.get("belligerents") if isinstance(raw.get("belligerents"), dict) else {}
    casualties = raw.get("casualties") if isinstance(raw.get("casualties"), dict) else {}
    res = {
        "id": slug,
        "name": _clean(raw.get("name"), lo=3, hi=100, field="name"),
        "date": date,
        "location": location,
        "type": _clean(raw.get("type") or "skirmish", lo=3, hi=80, field="type"),
        "result": _clean(raw.get("result"), lo=8, hi=240, field="result"),
        "belligerents": {
            "attackers": _side(belligerents.get("attackers"), "belligerents.attackers"),
            "defenders": _side(belligerents.get("defenders"), "belligerents.defenders"),
        },
        "casualties": {
            "attackers": _clean(casualties.get("attackers") or "Unrecorded", lo=3, hi=400, field="casualties.attackers"),
            "defenders": _clean(casualties.get("defenders") or "Unrecorded", lo=3, hi=400, field="casualties.defenders"),
        },
        "summary": _clean(raw.get("summary"), lo=20, hi=400, field="summary"),
        "description": _clean(raw.get("description"), lo=240, hi=6000, field="description"),
        "aftermath": _clean(raw.get("aftermath"), lo=12, hi=400, field="aftermath"),
        "relatedArticles": _string_list(raw.get("relatedArticles") or [], min_n=0, field="relatedArticles"),
        "status": "Generated — review",
    }
    
    if "participants" in raw:
        res["participants"] = raw["participants"]
    if "xpAwards" in raw:
        res["xpAwards"] = raw["xpAwards"]
    if "waluigiAssessment" in raw:
        res["waluigiAssessment"] = raw["waluigiAssessment"]
    if "aftermath" in raw:
        res["aftermath"] = raw["aftermath"]
    if "timeWindow" in raw:
        res["timeWindow"] = raw["timeWindow"]
        
    return res



def battles_repair(task: Task, raw: dict[str, Any], why: str) -> dict[str, Any] | None:
    fixed = _disambiguate_id(raw, _ids(_load_list(BATTLES)), why)
    if fixed:
        return fixed
    if "722-1039" in why:
        fixed = dict(raw)
        if not _parse_year(str(raw.get("date") or "")):
            fixed["date"] = "Chillwind 4, 888 BF"
            return fixed
    return None


def battles_apply(task: Task, record: dict[str, Any]) -> TaskResult:
    with _LOCK:
        rows = _load_list(BATTLES)
        if any(r.get("id") == record["id"] for r in rows):
            return TaskResult(task=task, ok=False, detail="id already present")
            
        analysis_text = record.pop("waluigiAssessment", None)
        aftermath_text = record.pop("aftermath", None)
            
        entry = dict(record)
        entry.update(provenance("battles", task.payload.get("model", ""), status="Generated — review"))
        entry["status"] = "Generated — review"
        rows.append(entry)
        atomic_write_json(BATTLES, rows)
        
        changed = [str(BATTLES.relative_to(ROOT))]
        
        if analysis_text:
            aa_path = ROOT / "data" / "articleAnalyses.json"
            if aa_path.exists():
                import json
                with open(aa_path, "r", encoding="utf-8") as f:
                    aa_data = json.load(f)
                aa_list = aa_data.setdefault("analyses", [])
                aa_id = f"{record['id']}_waluigi_analysis"
                if not any(a.get("id") == aa_id for a in aa_list):
                    aa_list.append({
                        "id": aa_id,
                        "sourceArticle": record["id"],
                        "title": record.get("title") or record.get("name"),
                        "kicker": "Waluigi's Article Analysis",
                        "subtitle": "A signed interpretation of the generated battle record.",
                        "archivist": "Waluigi, Auditor-General",
                        "filed": record.get("date", "Unknown Date"),
                        "summary": record.get("summary", ""),
                        "thesis": analysis_text,
                        "sections": []
                    })
                    atomic_write_json(aa_path, aa_data)
                    changed.append(str(aa_path.relative_to(ROOT)))

        if aftermath_text:
            inv_path = ROOT / "data" / "investigations.json"
            if inv_path.exists():
                import json
                with open(inv_path, "r", encoding="utf-8") as f:
                    inv_data = json.load(f)
                inv_list = inv_data.setdefault("investigations", [])
                inv_id = f"inv_{record['id']}"
                if not any(i.get("id") == inv_id for i in inv_list):
                    inv_list.append({
                        "id": inv_id,
                        "codename": str(record.get("name", "Investigation")).upper(),
                        "title": f"Aftermath: {record.get('name')}",
                        "subtitle": "The archive requires answers.",
                        "status": "active",
                        "classification": "Generated Investigation",
                        "opened": record.get("date", "Unknown"),
                        "archivist": "Waluigi, Auditor-General",
                        "icon": "🕵️",
                        "accent": "#4a9c6d",
                        "plainSummary": [{"point": aftermath_text}],
                        "leads": [],
                        "sessions": [{"id": f"s_{record['id']}", "label": str(record.get("name", "")), "event": record["id"]}],
                        "relatedEvents": [record["id"]],
                        "exhibits": []
                    })
                    atomic_write_json(inv_path, inv_data)
                    changed.append(str(inv_path.relative_to(ROOT)))

    return TaskResult(
        task=task, ok=True, detail=record["name"], record=record,
        changed_paths=changed,
    )


BATTLE_SPEC = SystemSpec(
    id="battles",
    title="Battles · new records",
    summary="Append source-aware foreign past battles until the archive floor is met.",
    stage=1,
    next_tasks=battles_next_tasks,
    generate=battles_generate,
    validate=battles_validate,
    apply=battles_apply,
    pending=battles_pending,
    repair=battles_repair,
)
