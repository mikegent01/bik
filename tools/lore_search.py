#!/usr/bin/env python3
"""Limited-scope archive search for the C.C.D. generator.

Never dumps a 10MB JSON. Each hit is a hyperlink-sized card: kind, id, title, one line.
OPEN id returns that object's short fields only.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"

# Skip shop-effect dumps and other huge non-lore files.
ALLOW = [
    ("characters", "character"),
    ("events", "event"),
    ("locations", "location"),
    ("props", "prop"),
    ("investigations", "investigation"),
    ("factions", "faction"),
    ("battles", "battle"),
    ("nations", "nation"),
]

_INDEX: list[dict] | None = None
_BY_ID: dict[str, dict] | None = None


def _blurb(obj: dict) -> str:
    for k in ("summary", "short", "blurb", "description", "status", "subtitle"):
        v = obj.get(k)
        if isinstance(v, str) and v.strip():
            return re.sub(r"\s+", " ", v).strip()[:220]
    return ""


def _title(obj: dict) -> str:
    for k in ("name", "title", "codename", "label"):
        v = obj.get(k)
        if isinstance(v, str) and v.strip():
            return v.strip()[:80]
    return str(obj.get("id") or "")[:80]


def _walk(obj, kind: str, out: list, by_id: dict) -> None:
    if isinstance(obj, list):
        for x in obj:
            _walk(x, kind, out, by_id)
        return
    if not isinstance(obj, dict):
        return
    oid = obj.get("id") or obj.get("key")
    if oid:
        rec = {
            "id": str(oid),
            "kind": kind,
            "title": _title(obj),
            "blurb": _blurb(obj),
            "hay": " ".join(
                str(obj.get(k) or "")
                for k in ("id", "name", "title", "summary", "affiliation", "status", "date")
            ).lower(),
        }
        out.append(rec)
        by_id.setdefault(str(oid), rec)
        return
    for v in obj.values():
        if isinstance(v, (list, dict)):
            _walk(v, kind, out, by_id)


def build() -> tuple[list[dict], dict[str, dict]]:
    global _INDEX, _BY_ID
    if _INDEX is not None:
        return _INDEX, _BY_ID or {}
    out: list[dict] = []
    by_id: dict[str, dict] = {}
    for fname, kind in ALLOW:
        path = DATA / f"{fname}.json"
        if not path.exists():
            continue
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            continue
        _walk(data, kind, out, by_id)
    # laws JSON catchlines
    laws = DATA / "laws" / "mages-guild-code.json"
    if laws.exists():
        try:
            code = json.loads(laws.read_text(encoding="utf-8"))
            for s in code.get("sections") or []:
                cid = str(s.get("cite") or "")
                if not cid:
                    continue
                rec = {
                    "id": "ccd:" + cid,
                    "kind": "code",
                    "title": f"§ {cid} {s.get('title') or ''}".strip(),
                    "blurb": (s.get("brief") or "")[:220],
                    "hay": f"{cid} {s.get('title') or ''} {s.get('brief') or ''}".lower(),
                }
                out.append(rec)
                by_id[rec["id"]] = rec
        except (OSError, json.JSONDecodeError):
            pass
    _INDEX, _BY_ID = out, by_id
    return out, by_id


def search(query: str, k: int = 6) -> list[dict]:
    q = re.sub(r"\s+", " ", (query or "").lower()).strip()
    if len(q) < 3:
        return []
    terms = [t for t in re.split(r"[^a-z0-9_]+", q) if len(t) > 2]
    if not terms:
        return []
    idx, _ = build()
    scored = []
    for rec in idx:
        hay = rec["hay"]
        score = 0
        for t in terms:
            if t in hay:
                score += 3 if t in rec["id"].lower() or t in rec["title"].lower() else 1
        if score:
            scored.append((score, rec))
    scored.sort(key=lambda x: (-x[0], x[1]["title"]))
    return [r for _, r in scored[:k]]


def format_cards(hits: list[dict]) -> str:
    if not hits:
        return "(no archive hits)"
    lines = []
    for h in hits:
        lines.append(f"[{h['kind']}:{h['id']}] {h['title']} — {h['blurb'] or 'no blurb'}")
    return "\n".join(lines)


def cards_for_slot(title: str, brief: str, extra: str = "") -> str:
    q = f"{title} {brief} {extra} mages guild autumnwood accords"
    return format_cards(search(q, k=6))


def parse_need_lines(raw: str) -> list[str]:
    qs = []
    for line in (raw or "").splitlines():
        m = re.match(r"^(?:NEED|SEARCH|OPEN)\s*:\s*(.+)$", line.strip(), re.I)
        if m:
            qs.append(m.group(1).strip()[:80])
    return qs[:3]


if __name__ == "__main__":
    import sys
    q = " ".join(sys.argv[1:]) or "mages guild veyra"
    build()
    print(format_cards(search(q)))
