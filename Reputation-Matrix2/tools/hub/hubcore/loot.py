"""Session loot log: validate + append entries to data/session-loot.json.

The loot log is the live bridge between a running session and the wiki: the DM
files each gain here (hub web UI, CLI, or API), the character-sheet viewer
polls the JSON, and the post-session pile builder turns the log into a Foundry
import. `characterId` values are the ACTOR_SHEETS slugs on the site
(waluigi, dan, hjumpik, toad-lee, aurelian, azure, motorbike).

Entries look like::

    {"id": "loot-0007", "at": "2026-09-08T21:14:00Z", "session": "Shadow Estate 12",
     "eventId": "", "characterId": "waluigi", "characterName": "Waluigi",
     "item": "Obsidian Garlic Charm", "qty": 1, "source": "found",
     "note": "Pried from the pantry warden's desk."}

Writes are atomic (temp file + os.replace) so the site never reads a partial
log mid-session.
"""
from __future__ import annotations

import json
import os
import tempfile
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from . import paths

SOURCES = ("found", "bought", "reward", "crafted", "gift", "stolen")
REQUIRED = ("session", "characterId", "item")


def _now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def load(loot_path: Path | None = None) -> list[dict[str, Any]]:
    target = Path(loot_path) if loot_path else paths.LOOT_PATH
    if not target.exists():
        return []
    return json.loads(target.read_text(encoding="utf-8"))


def _next_id(entries: list[dict[str, Any]]) -> str:
    best = 0
    for entry in entries:
        raw = str((entry or {}).get("id") or "")
        if raw.startswith("loot-") and raw[5:].isdigit():
            best = max(best, int(raw[5:]))
    return "loot-%04d" % (best + 1)


def validate(raw: dict[str, Any]) -> tuple[dict[str, Any], list[str]]:
    """Clean one entry; returns (clean, errors). Empty errors means fileable."""
    src = dict(raw or {})
    errors: list[str] = []
    clean: dict[str, Any] = {}
    for key in REQUIRED:
        value = str(src.get(key) or "").strip()
        if not value:
            errors.append(f"missing required field: {key}")
        clean[key] = value
    try:
        qty = int(src.get("qty", 1))
    except (TypeError, ValueError):
        qty = 0
    if qty < 1:
        errors.append("qty must be a positive integer")
        qty = 1
    clean["qty"] = qty
    source = str(src.get("source") or "found").strip().lower()
    if source not in SOURCES:
        errors.append(f"source must be one of: {', '.join(SOURCES)}")
        source = "found"
    clean["source"] = source
    for key in ("eventId", "characterName", "note"):
        clean[key] = str(src.get(key) or "").strip()
    return clean, errors


def append(raw: dict[str, Any], loot_path: Path | None = None) -> dict[str, Any]:
    """Validate and file one entry, returning it with id + timestamp."""
    clean, errors = validate(raw)
    if errors:
        raise ValueError("; ".join(errors))
    target = Path(loot_path) if loot_path else paths.LOOT_PATH
    entries = load(target)
    entry = {"id": _next_id(entries), "at": _now_iso(), **clean}
    entries.append(entry)
    target.parent.mkdir(parents=True, exist_ok=True)
    fd, tmp = tempfile.mkstemp(dir=str(target.parent), suffix=".tmp")
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as handle:
            json.dump(entries, handle, indent=2, ensure_ascii=False)
            handle.write("\n")
        os.replace(tmp, target)
    except BaseException:
        try:
            os.unlink(tmp)
        except OSError:
            pass
        raise
    return entry
