#!/usr/bin/env python3
"""Check for duplicate record ids and exact duplicate titles in core article stores."""
from __future__ import annotations

import json
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
# Keep this focused on event/battle surfaces, where duplicate records confuse
# chronology and home/index feeds. Character stub title duplication is legacy
# debt and not a reliable duplicate signal.
STORES = ["events.json", "battles.json", "majorBattles.json"]

errors: list[str] = []
checked = 0

for name in STORES:
    path = DATA / name
    try:
        doc = json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:  # noqa: BLE001
        errors.append(f"{name}: does not parse ({exc})")
        continue
    rows = doc if isinstance(doc, list) else doc.get(name.removesuffix('.json'), doc)
    if isinstance(rows, dict):
        rows = [v | {"id": k} for k, v in rows.items() if isinstance(v, dict) and not str(k).startswith("_")]
    if not isinstance(rows, list):
        continue
    ids = [r.get("id") for r in rows if isinstance(r, dict) and r.get("id")]
    checked += len(ids)
    for rid, count in Counter(ids).items():
        if count > 1:
            errors.append(f"{name}: duplicate id {rid!r} ×{count}")
    titles: dict[str, list[str]] = defaultdict(list)
    for r in rows:
        if not isinstance(r, dict):
            continue
        title = str(r.get("title") or r.get("name") or "").strip().lower()
        title = title.removeprefix("the ")
        if title:
            titles[title].append(str(r.get("id") or "<no id>"))
    for title, ids_for_title in titles.items():
        if len(ids_for_title) > 1:
            errors.append(f"{name}: duplicate title {title!r} -> {', '.join(ids_for_title)}")

print(f"duplicate audit: {checked} records across {len(STORES)} stores")
for e in errors:
    print("FAIL ", e)
print(f"{len(errors)} duplicate issue(s)")
raise SystemExit(1 if errors else 0)
