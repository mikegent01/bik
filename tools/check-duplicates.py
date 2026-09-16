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
STORES = ["events.json", "battles.json", "majorBattles.json",
          # locations.json was added after two genkit-generated records
          # ("Iron Legion Old World Embassy", "Ruins of the Mushroom
          # Capitol") shipped alongside the hand-written canon records they
          # duplicated and rendered side by side in the directory.
          "locations.json", "trials.json", "conflicts.json"]

# Records that legitimately share a display name link to each other here;
# the pair is then exempt from the title check.
ALIAS_FIELD = "aliases"

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
    aliases: dict[str, set[str]] = {}
    for r in rows:
        if not isinstance(r, dict):
            continue
        title = str(r.get("title") or r.get("name") or "").strip().lower()
        title = title.removeprefix("the ")
        if title:
            rid = str(r.get("id") or "<no id>")
            titles[title].append(rid)
            aliases[rid] = set(r.get(ALIAS_FIELD) or [])
    for title, ids_for_title in titles.items():
        if len(ids_for_title) <= 1:
            continue
        # A deliberate same-name pair (a planar reflection, say) declares the
        # other record's id in `aliases`. The link must be MUTUAL -- a
        # one-sided alias is what a merged record leaves behind, and treating
        # that as consent would re-exempt the very duplicate we just removed
        # if a generator recreated it.
        mutual = any(
            b in aliases.get(a, set()) and a in aliases.get(b, set())
            for a in ids_for_title for b in ids_for_title if a != b
        )
        if mutual:
            continue
        errors.append(f"{name}: duplicate title {title!r} -> {', '.join(ids_for_title)}")

print(f"duplicate audit: {checked} records across {len(STORES)} stores")
for e in errors:
    print("FAIL ", e)
print(f"{len(errors)} duplicate issue(s)")
raise SystemExit(1 if errors else 0)
