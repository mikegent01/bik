#!/usr/bin/env python3
"""Generate DRAFT bros items and other items for a human to review and populate.

    python3 tools/generate_bros_items.py --count 3
    python3 tools/generate_bros_items.py --count 2 --kind badge
    python3 tools/generate_bros_items.py --count 4 --ai      # uses LM Studio if running

WHAT THIS IS FOR
----------------
Producing *starting points*. The generator assembles items that are mechanically
valid against the live systems - the Bros Energy economy, the shop schema, the
Foundry converter - so a human does not have to remember the rules while
drafting. It writes nothing into the live catalog.

WHAT THIS IS NOT
----------------
It is not a source of canon and it cannot become one by accident. Four hard
guardrails enforce that:

  1. OUTPUT IS QUARANTINED. Everything is written to tools/.generated/ , which
     is not imported by data/commerce/index.js and is git-ignored. Nothing the
     generator writes can reach the storefront without a person moving it.

  2. EVERY RECORD IS STAMPED. Each item carries `_unverified: true`, a
     `_generatedAt`, and a `_reviewNotice` in plain language. IDs are prefixed
     `draft_`. A verification pass (--verify) fails loudly if a `draft_` id or
     an `_unverified` record is ever found inside data/.

  3. IT CANNOT INVENT A BROS ATTACK. Techniques are read from
     data/brosAttacks.json. A generated item may only teach one that already
     exists there - the README rule is that Foundry never receives an attack
     the archive has not confirmed. Requesting anything else is refused.

  4. IT STATES NO HISTORY. Generated descriptions are deliberately written
     without dates, casualty figures, named events, or outcomes. Placeholders
     like [WHAT THIS COMMEMORATES] are left for the human to fill from a real
     source. The generator has no access to the archive's facts and does not
     pretend to.

The --ai flag routes drafting through LM Studio when it is running. The same
four guardrails apply to model output, and the model's text is additionally
scrubbed for digits-in-prose before being written.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BROS_PATH = ROOT / "data" / "brosAttacks.json"
OUT_DIR = ROOT / "tools" / ".generated"
DATA_DIR = ROOT / "data"

REVIEW_NOTICE = (
    "UNVERIFIED DRAFT. Generated automatically. Nothing here is canon. "
    "Fill every [BRACKETED] placeholder from a real source, delete this notice "
    "and the _unverified flag, rename the id off the draft_ prefix, then move "
    "the record into data/shop-items/ by hand."
)

ENERGY_RULE = (
    "Bros Energy: each named participant spends 1 from a personal maximum of 2, "
    "refreshed after a very short rest."
)

# ---------------------------------------------------------------- guardrail 3
def load_confirmed_techniques() -> dict[str, dict]:
    """The ONLY techniques a generated item may teach."""
    payload = json.loads(BROS_PATH.read_text(encoding="utf-8"))
    return {a["id"]: a for a in payload.get("attacks", []) if a.get("id")}


# ---------------------------------------------------------------- guardrail 4
_FACT_PATTERNS = (
    (re.compile(r"\b\d{1,4}\s*(?:BF|AF)\b", re.I), "a dated year"),
    (re.compile(r"\b\d{1,2}:\d{2}\b"), "a clock time"),
    (re.compile(r"\b(?:killed|dead|casualties|survivors|escaped)\b\s*:?\s*\d+", re.I), "a casualty count"),
    (re.compile(r"\b\d{2,}\b"), "a bare figure"),
)

def scrub_invented_facts(text: str) -> tuple[str, list[str]]:
    """Refuse to emit prose that asserts history. Returns (text, complaints)."""
    complaints = []
    for pattern, label in _FACT_PATTERNS:
        if pattern.search(text):
            complaints.append(label)
    return text, complaints


def stamp(record: dict) -> dict:
    """Guardrail 2: mark every record, unmissably."""
    record["_unverified"] = True
    record["_generatedAt"] = datetime.now(timezone.utc).isoformat()
    record["_reviewNotice"] = REVIEW_NOTICE
    return record


# ---------------------------------------------------------------- builders
def draft_bros_item(technique: dict, index: int) -> dict:
    """A one-shot that teaches a CONFIRMED technique, on the agreed economy."""
    tid = technique["id"]
    name = technique.get("name", tid)
    participants = ", ".join(technique.get("participants", [])) or "[WHO USED IT]"
    return stamp({
        "id": f"draft_bros_item_{tid}_{index}",
        "name": f"[NAME THIS ITEM] ({name} one-shot)",
        "description": (
            f"[DESCRIBE THE OBJECT IN ONE PARAGRAPH.] A premade single use of {name}. "
            f"Source technique recorded with participants: {participants}. "
            "[SAY WHERE THIS COPY CAME FROM - do not invent an event; cite one that exists.]"
        ),
        "category": "consumables",
        "foundryType": "consumable",
        "price": 0,
        "icon": "\U0001F4E6",
        "stock": 1,
        "rarity": "rare",
        "effects": [f"One free use of {name}", f"Teaches {name} permanently", "Spends the item, not Bros Energy"],
        "vendor": "[VENDOR ID FROM data/shop-items/vendors.js]",
        "shippedBy": "Bros Logistics",
        "levelRequirement": 2,
        "effectDetails": [
            {"title": f"One free use of {name}",
             "rules": (f"Two willing participants perform {name} at once without either spending Bros Energy. "
                       "The item is consumed. Resolve the technique as written in the archive entry.")},
            {"title": f"Teaches {name} permanently",
             "rules": (f"Both participants learn {name} and thereafter use it under the normal economy - "
                       f"{ENERGY_RULE} A second copy grants another free use, teaches nothing new, "
                       "and grants no bonus.")},
            {"title": "[RISK - copy the risk line from the archive entry]",
             "rules": "[The technique's own recorded risk. Do not soften it.]"},
        ],
        "usage": {
            "activation": "Action, by both participants together",
            "duration": "One use, then the item is spent",
            "endsWhen": "The technique resolves, successfully or otherwise.",
            "charges": "1 use. The item is consumed, not the participants' Bros Energy.",
        },
        "brosAttack": tid,
        "energyRule": ENERGY_RULE,
        "priceReason": "[WHY THIS COSTS WHAT IT COSTS]",
    })


def draft_badge(index: int) -> dict:
    """Badges are records, not stat sticks - the generator enforces that shape."""
    return stamp({
        "id": f"draft_badge_{index}",
        "name": "[NAME THIS BADGE]",
        "description": "[DESCRIBE THE PHYSICAL OBJECT.] [SAY WHO ISSUES IT AND WHO MAY WEAR IT.]",
        "category": "badges",
        "foundryType": "equipment",
        "price": 0,
        "icon": "\U0001F396\uFE0F",
        "stock": 1,
        "rarity": "uncommon",
        "effects": ["[A SOCIAL OR COSMETIC EFFECT]", "[A SECOND ONE, OPTIONAL]"],
        "vendor": "[VENDOR ID]",
        "shippedBy": "Commendations Office",
        "levelRequirement": 1,
        "effectDetails": [
            {"title": "[EFFECT NAME]",
             "rules": ("[Social, cosmetic or informational ONLY. A badge must not grant a bonus to a roll, "
                       "add a resource, or change a number on a character sheet.]")},
        ],
        "usage": {
            "activation": "Worn. No action required.",
            "duration": "Permanent while displayed",
            "endsWhen": "Removed, surrendered, or revoked by the issuing body.",
            "charges": "None. A badge is a record, not a resource.",
        },
        "marks": "[WHAT THIS COMMEMORATES - name a real recorded event, do not invent one]",
        "priceReason": "[WHY THIS COSTS WHAT IT COSTS]",
    })


# ---------------------------------------------------------------- optional AI
def ai_fill(record: dict, model: str | None) -> dict:
    """Ask LM Studio to draft prose. Guardrails still apply to whatever returns."""
    sys.path.insert(0, str(ROOT / "tools" / "hub"))
    try:
        from hubcore import llm
    except Exception:
        print("  ! hub llm module unavailable; leaving placeholders", file=sys.stderr)
        return record
    if not llm.available().get("online"):
        print("  ! LM Studio offline; leaving placeholders", file=sys.stderr)
        return record

    prompt = (
        "Draft flavour text for a fictional tabletop shop item. Return JSON with keys "
        "name, description, priceReason. Hard rules: invent NO history, NO dates, NO "
        "numbers, NO named battles or characters. Describe only the physical object and "
        "how it feels to hold. Keep the description under 60 words.\n\n"
        f"Item skeleton: {json.dumps({k: record[k] for k in ('category', 'effects')})}"
    )
    reply = llm.ask_json(prompt, model=model) if hasattr(llm, "ask_json") else None
    if not isinstance(reply, dict):
        print("  ! model returned nothing usable; leaving placeholders", file=sys.stderr)
        return record

    for key in ("name", "description", "priceReason"):
        value = reply.get(key)
        if not isinstance(value, str) or not value.strip():
            continue
        _, complaints = scrub_invented_facts(value)
        if complaints:
            print(f"  ! rejected model {key}: contains {', '.join(complaints)}", file=sys.stderr)
            continue
        record[key] = value.strip()
    return stamp(record)          # re-stamp: the model must never strip the marks


# ---------------------------------------------------------------- guardrail 1
def verify_no_drafts_in_data() -> int:
    """Fail loudly if any generated record ever reached the live data folder."""
    problems = []
    for path in DATA_DIR.rglob("*"):
        if path.is_dir() or path.suffix not in {".js", ".json"}:
            continue
        try:
            text = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        if "_unverified" in text or "draft_" in text:
            for marker in ("_unverified", "draft_"):
                if marker in text:
                    problems.append(f"{path.relative_to(ROOT)}: contains {marker!r}")
    if problems:
        print("FAIL - generated content found in live data:")
        for problem in problems:
            print("  " + problem)
        return 1
    print("OK - no draft or unverified records in data/")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--count", type=int, default=2, help="how many drafts to write")
    parser.add_argument("--kind", choices=["bros", "badge"], default="bros")
    parser.add_argument("--technique", help="only generate for this confirmed technique id")
    parser.add_argument("--ai", action="store_true", help="draft prose via LM Studio if it is running")
    parser.add_argument("--model", help="model id for --ai")
    parser.add_argument("--verify", action="store_true", help="check no drafts leaked into data/ and exit")
    args = parser.parse_args()

    if args.verify:
        return verify_no_drafts_in_data()

    techniques = load_confirmed_techniques()
    if not techniques:
        print("No confirmed techniques in data/brosAttacks.json; refusing to invent one.")
        return 1

    if args.technique and args.technique not in techniques:
        print(f"Refused: '{args.technique}' is not a confirmed technique.")
        print("Confirmed techniques are: " + ", ".join(sorted(techniques)))
        print("Add it to data/brosAttacks.json from a real session first.")
        return 1

    chosen = [args.technique] if args.technique else list(techniques)
    records = []
    for index in range(args.count):
        if args.kind == "badge":
            record = draft_badge(index + 1)
        else:
            record = draft_bros_item(techniques[chosen[index % len(chosen)]], index + 1)
        if args.ai:
            record = ai_fill(record, args.model)
        records.append(record)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    stamp_name = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    out_path = OUT_DIR / f"draft-{args.kind}-{stamp_name}.json"
    out_path.write_text(json.dumps({
        "_README": REVIEW_NOTICE,
        "_unverified": True,
        "_generatedAt": datetime.now(timezone.utc).isoformat(),
        "_confirmedTechniques": sorted(techniques),
        "items": {r["id"]: r for r in records},
    }, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print(f"Wrote {len(records)} UNVERIFIED draft(s) to {out_path.relative_to(ROOT)}")
    print("These are drafts. They are not in the shop and are not canon.")
    print("Fill the [BRACKETED] placeholders from real sources before using them.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
