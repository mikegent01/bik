#!/usr/bin/env python3
"""Repair bros attack records that a generator run wrote in the wrong shape.

The bros_attacks generator had three faults that reached canon before they were
caught. This script fixes the records already on disk; the generator itself has
been corrected so new records cannot repeat them.

1. "steps" held the drill choreography instead of table narration, and in most
   records it had been str()'d, so the file contained literal Python text like
   "{'actor': 'A', 'title': 'Shield Up', ...}". Those rendered as raw dicts.
   We recover the instruction sentence from each and rewrite them as prose.

2. Drill icons were sliced to four characters, which turned emoji-less replies
   into ASCII debris ("=./=", "-AA-", "byss", ":<?x"). Each is replaced with a
   pictograph chosen from the step's gesture.

3. "type" sometimes contained a school id, and sometimes the id of a *different*
   school than the record's own, e.g. type "support_fire" on a "clearing"
   attack. Those are replaced with the school's display name.

Idempotent: running it twice changes nothing the second time.

Usage:
    python3 tools/repair_bros_attacks.py [--check]
"""
from __future__ import annotations

import argparse
import ast
import json
import re
import sys
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "data" / "brosAttacks.json"

_PICTOGRAPH = re.compile(
    "[\U0001F000-\U0001FAFF\u2190-\u21FF\u2300-\u23FF\u2460-\u24FF"
    "\u25A0-\u27BF\u2B00-\u2BFF\u3030\u303D\u3297\u3299]"
)
_GESTURE_ICON = {"tap": "👆", "up": "⬆️", "down": "⬇️", "right": "➡️", "aim": "🎯"}


def clean_icon(value: Any, gesture: str) -> str:
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


def _sentence(text: str) -> str:
    """Tidy a recovered instruction into a table-narration sentence."""
    text = " ".join(str(text or "").split())
    if not text:
        return ""
    text = text[0].upper() + text[1:]
    if text[-1] not in ".!?":
        text += "."
    return text


def repair_steps(attack: dict[str, Any]) -> tuple[list[str], bool]:
    """Turn stringified drill dicts back into plain narration sentences."""
    out: list[str] = []
    changed = False
    names = {
        "A": (attack.get("drill") or {}).get("partnerA") or "Partner A",
        "B": (attack.get("drill") or {}).get("partnerB") or "Partner B",
    }
    for entry in attack.get("steps") or []:
        parsed: Any = entry
        if isinstance(entry, str) and entry.strip().startswith("{"):
            try:
                parsed = ast.literal_eval(entry)
            except (ValueError, SyntaxError):
                parsed = entry
        if isinstance(parsed, dict):
            changed = True
            actor = str(parsed.get("actor", "")).strip().upper()
            if actor.startswith("PARTNER"):
                actor = actor[len("PARTNER"):].strip(" .:_-")
            actor = actor[:1]
            who = names.get(actor, "")
            instruction = " ".join(str(parsed.get("instruction", "")).split())
            if not instruction:
                continue
            # "Create a localized ice shield." -> "Waluigi creates a localized
            # ice shield." is beyond safe automation, so prefix the actor
            # instead of conjugating: accurate, and still reads as narration.
            out.append(_sentence(f"{who}: {instruction}" if who else instruction))
        else:
            text = " ".join(str(parsed).split())
            # Some replies degenerated to bare actor labels — steps ["A","B",
            # "A","B"] carry no narration at all. Rebuild those from the drill,
            # which is where the model actually put the choreography.
            if len(text) <= 2 and text.upper().strip(".") in ("A", "B"):
                changed = True
                continue
            out.append(_sentence(text))

    if not out:
        drill_steps = (attack.get("drill") or {}).get("steps") or []
        for step in drill_steps:
            actor = str(step.get("actor", "")).strip().upper()[:1]
            who = names.get(actor, "")
            instruction = " ".join(str(step.get("instruction", "")).split())
            if instruction:
                out.append(_sentence(f"{who}: {instruction}" if who else instruction))
        if out:
            changed = True

    return [s for s in out if s], changed


def repair(data: dict[str, Any]) -> list[str]:
    schools = data.get("schools") or {}
    notes: list[str] = []
    for attack in data.get("attacks", []):
        aid = attack.get("id", "?")

        steps, changed = repair_steps(attack)
        if steps and steps != (attack.get("steps") or []):
            attack["steps"] = steps
            notes.append(f"{aid}: rewrote {len(steps)} steps as prose")

        for step in (attack.get("drill") or {}).get("steps", []):
            before = step.get("icon", "")
            after = clean_icon(before, str(step.get("gesture", "")).lower())
            if before != after:
                step["icon"] = after
                notes.append(f"{aid}: icon {before!r} -> {after}")
            actor = str(step.get("actor", "")).strip().upper()
            if actor.startswith("PARTNER"):
                actor = actor[len("PARTNER"):].strip(" .:_-")
            actor = actor[:1]
            if actor and step.get("actor") != actor:
                notes.append(f"{aid}: actor {step['actor']!r} -> {actor!r}")
                step["actor"] = actor

        school = attack.get("school", "")
        type_slug = re.sub(r"[^a-z0-9]+", "_", str(attack.get("type", "")).lower()).strip("_")
        if not attack.get("type") or type_slug in schools:
            name = (schools.get(school) or {}).get("name", "")
            new_type = name or "Paired manoeuvre"
            if attack.get("type") != new_type:
                notes.append(f"{aid}: type {attack.get('type')!r} -> {new_type!r}")
                attack["type"] = new_type

        if attack.get("difficulty") not in ("easy", "medium", "hard"):
            notes.append(f"{aid}: difficulty {attack.get('difficulty')!r} -> 'medium'")
            attack["difficulty"] = "medium"

    return notes


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="report problems; do not write")
    args = parser.parse_args()

    data = json.loads(SOURCE.read_text(encoding="utf-8"))
    notes = repair(data)

    if not notes:
        print("bros attacks are already clean")
        return 0

    for note in notes:
        print(" ", note)

    if args.check:
        print(f"\n{len(notes)} problem(s) found — run without --check to fix")
        return 1

    SOURCE.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"\nrepaired {len(notes)} problem(s) in {SOURCE.relative_to(ROOT)}")
    print("now run: python3 tools/sync_bros_attacks.py")
    return 0


if __name__ == "__main__":
    sys.exit(main())
