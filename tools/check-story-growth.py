#!/usr/bin/env python3
"""Advisory self-check for living story articles.

Given a newly-filed article id, inspect the pages it points at, the pages that
point back, and the arc/investigation files that contain it. The goal is not to
make every relationship reciprocal by force; it is to build a useful review
queue so old pages grow when new canon changes their status, custody, meaning,
or reader path.

Usage:
    python3 tools/check-story-growth.py the_garden_above_the_fire
    python3 tools/check-story-growth.py --latest
    python3 tools/check-story-growth.py the_garden_above_the_fire --json
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Iterable

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"

STORE_FILES: tuple[tuple[str, str], ...] = (
    ("events.json", "event"),
    ("battles.json", "battle"),
    ("majorBattles.json", "major battle"),
    ("characters.json", "character"),
    ("locations.json", "location"),
    ("nations.json", "nation"),
    ("factions.json", "faction"),
    ("commentaries.json", "commentary"),
    ("investigations.json", "investigation"),
    ("whatifs.json", "what-if"),
    ("quests.json", "quest"),
    ("trials.json", "trial"),
    ("brosAttacks.json", "bros attack"),
    ("collections.json", "collection"),
)

ID_FIELDS = ("id", "articleId", "event", "battle", "sourceArticle", "locationId", "characterId")
LINK_FIELDS = (
    "relatedArticles",
    "relatedEvents",
    "keyEvents",
    "keyBattles",
    "articles",
    "events",
    "participants",
    "sourceArticle",
    "sessions",
)
TEXT_FIELDS = (
    "name",
    "title",
    "status",
    "summary",
    "description",
    "outcome",
    "aftermath",
    "waluigiAssessment",
    "plainSummary",
)
STALE_SOURCE = re.compile(r"\b(alive|recovered|rescued|treated|clinic|pardoned|freed|cleared|exposed|identified|dead|destroyed|captured)\b", re.I)
STALE_TARGET = re.compile(r"\b(missing|unknown|lost|unrecovered|unidentified|unnamed|captured|dead|wanted|pending|last filed|last seen)\b", re.I)


@dataclass(frozen=True)
class Meta:
    id: str
    kind: str
    file: str
    rec: dict[str, Any]


def load_json(path: Path) -> Any:
    if not path.exists():
        return None
    with path.open(encoding="utf-8") as fh:
        return json.load(fh)


def records_from_doc(doc: Any, fallback_kind: str) -> list[dict[str, Any]]:
    if isinstance(doc, list):
        return [x for x in doc if isinstance(x, dict)]
    if not isinstance(doc, dict):
        return []
    rows: list[dict[str, Any]] = []
    for key, value in doc.items():
        if key.startswith("_"):
            continue
        if isinstance(value, list):
            rows.extend(x for x in value if isinstance(x, dict))
    # Some stores may be keyed objects rather than arrays. Treat the key as id
    # only when the value looks like an article record.
    if not rows:
        for key, value in doc.items():
            if key.startswith("_") or not isinstance(value, dict):
                continue
            rec = dict(value)
            rec.setdefault("id", key)
            rows.append(rec)
    return rows


def load_all() -> tuple[dict[str, Meta], dict[str, list[Meta]], dict[str, list[dict[str, Any]]]]:
    by_id: dict[str, Meta] = {}
    duplicates: dict[str, list[Meta]] = {}
    stores: dict[str, list[dict[str, Any]]] = {}
    for filename, kind in STORE_FILES:
        doc = load_json(DATA / filename)
        rows = records_from_doc(doc, kind)
        stores[filename] = rows
        for rec in rows:
            rid = rec.get("id")
            if not isinstance(rid, str) or not rid:
                continue
            meta = Meta(rid, kind, filename, rec)
            if rid in by_id:
                duplicates.setdefault(rid, [by_id[rid]]).append(meta)
            else:
                by_id[rid] = meta
    return by_id, duplicates, stores


def collect_ids(value: Any) -> set[str]:
    out: set[str] = set()
    if isinstance(value, str):
        if value.strip():
            out.add(value.strip())
    elif isinstance(value, dict):
        for key in ID_FIELDS:
            v = value.get(key)
            if isinstance(v, str) and v.strip():
                out.add(v.strip())
        # Investigation sessions are the common nested arc shape.
        if isinstance(value.get("sessions"), list):
            for s in value["sessions"]:
                out |= collect_ids(s)
    elif isinstance(value, list):
        for item in value:
            out |= collect_ids(item)
    return out


def record_links(rec: dict[str, Any]) -> set[str]:
    out: set[str] = set()
    for field in LINK_FIELDS:
        if field in rec:
            out |= collect_ids(rec.get(field))
    return {x for x in out if x and x != rec.get("id")}


def direct_links(rec: dict[str, Any]) -> set[str]:
    out: set[str] = set()
    for field in ("relatedArticles", "relatedEvents", "keyEvents", "keyBattles", "participants", "sourceArticle"):
        if field in rec:
            out |= collect_ids(rec.get(field))
    return {x for x in out if x and x != rec.get("id")}


def participants(rec: dict[str, Any]) -> set[str]:
    return collect_ids(rec.get("participants"))


def text_blob(rec: dict[str, Any]) -> str:
    chunks: list[str] = []
    for field in TEXT_FIELDS:
        value = rec.get(field)
        if isinstance(value, list):
            chunks.append(json.dumps(value, ensure_ascii=False))
        elif value is not None:
            chunks.append(str(value))
    for section in rec.get("sections") or []:
        if isinstance(section, dict):
            chunks.append(str(section.get("overview") or section.get("body") or ""))
            chunks.append(str(section.get("waluigi_note") or ""))
    return "\n".join(chunks)


def word_count(rec: dict[str, Any]) -> int:
    return len(re.findall(r"\b\w+\b", text_blob(rec)))


def label(meta: Meta) -> str:
    return str(meta.rec.get("name") or meta.rec.get("title") or meta.id)


def norm(value: Any) -> str:
    return re.sub(r"\s+", " ", str(value or "").strip().lower())


def investigations_for(article_id: str, investigations: Iterable[dict[str, Any]]) -> list[dict[str, Any]]:
    hits = []
    for inv in investigations:
        if article_id in record_links(inv):
            hits.append(inv)
            continue
        for session in inv.get("sessions") or []:
            if isinstance(session, dict) and session.get("event") == article_id:
                hits.append(inv)
                break
    return hits


def arc_peer_ids(source: Meta, stores: dict[str, list[dict[str, Any]]], inv_hits: list[dict[str, Any]], limit: int) -> set[str]:
    peers: set[str] = set()
    for inv in inv_hits:
        peers |= collect_ids(inv.get("relatedEvents"))
        for s in inv.get("sessions") or []:
            if isinstance(s, dict):
                peers |= collect_ids(s.get("event"))
    source_era = norm(source.rec.get("era"))
    if source_era:
        src_links = direct_links(source.rec)
        scored: list[tuple[int, str]] = []
        for rec in (stores.get("events.json") or []) + (stores.get("battles.json") or []):
            rid = rec.get("id")
            if not isinstance(rid, str) or rid == source.id:
                continue
            if norm(rec.get("era")) != source_era:
                continue
            shared = len(src_links & direct_links(rec))
            # Same-era pages with no shared person/place are usually too broad
            # to edit from this filing alone.
            if shared:
                scored.append((shared, rid))
        for _, rid in sorted(scored, reverse=True)[:limit]:
            peers.add(rid)
    peers.discard(source.id)
    return peers


def useful_edit_hint(meta: Meta, source: Meta, is_participant: bool, direct: bool, arc_peer: bool) -> list[str]:
    kind = meta.kind
    hints: list[str] = []
    if kind == "character":
        if is_participant:
            hints.append("if the event changed injuries, allegiance, custody, grief, or last-seen, amend status/summary and add keyEvents")
        else:
            hints.append("only add a relatedArticles link if this character's page gains a reader path from the new event")
    elif kind == "location":
        hints.append("update status/notableFeatures/relatedArticles only if the place was changed, damaged, searched, revealed, or newly important")
    elif kind in ("event", "battle", "major battle"):
        if direct or arc_peer:
            hints.append("add a revision/addendum or reciprocal relatedArticles only if the new filing reinterprets this old scene")
        else:
            hints.append("same-arc only; do not back-link unless a reader of the old scene now needs this one")
    elif kind == "investigation":
        hints.append("arc file should gain sessions/exhibits/leads when the new article produced evidence, not merely a recap")
    elif kind in ("faction", "nation"):
        hints.append("update only if official standing, territory, law, leadership, or dossier assessment moved")
    elif kind == "commentary":
        hints.append("commentary should grow only when the source story changed enough to deserve a new cut or correction")
    else:
        hints.append("make a useful edit only if this page now answers a new reader question")
    return hints


def review_rows(article_id: str, by_id: dict[str, Meta], stores: dict[str, list[dict[str, Any]]], limit: int) -> dict[str, Any]:
    if article_id not in by_id:
        raise KeyError(article_id)
    source = by_id[article_id]
    links = direct_links(source.rec)
    source_participants = participants(source.rec)
    unresolved = sorted(x for x in links if x not in by_id)
    inv_hits = investigations_for(article_id, stores.get("investigations.json") or [])
    arc_ids = arc_peer_ids(source, stores, inv_hits, limit)
    candidates = (links | arc_ids) - {article_id}
    rows: list[dict[str, Any]] = []
    source_text = text_blob(source.rec)
    for cid in sorted(candidates):
        meta = by_id.get(cid)
        if not meta:
            continue
        target_links = record_links(meta.rec)
        shared = sorted((direct_links(meta.rec) | participants(meta.rec)) & (links | {article_id}))
        is_participant = cid in source_participants
        is_direct = cid in links
        is_arc = cid in arc_ids
        has_backlink = article_id in target_links
        notes: list[str] = []
        if is_participant:
            notes.append("participant")
        if is_direct:
            notes.append("direct link")
        if is_arc:
            notes.append("arc peer")
        if has_backlink:
            notes.append("already links back")
        else:
            notes.append("missing useful backlink/revision review")
        wc = word_count(meta.rec)
        if meta.kind in {"character", "location", "faction", "nation"} and wc < 90:
            notes.append(f"thin page ({wc} words)")
        target_text = text_blob(meta.rec)
        if STALE_SOURCE.search(source_text) and STALE_TARGET.search(target_text):
            notes.append("possible stale status/summary language")
        score = (5 if is_participant else 0) + (4 if is_direct else 0) + (2 if is_arc else 0) + len(shared) + (0 if has_backlink else 1)
        rows.append({
            "id": cid,
            "kind": meta.kind,
            "file": meta.file,
            "label": label(meta),
            "score": score,
            "shared": shared[:8],
            "notes": notes,
            "hints": useful_edit_hint(meta, source, is_participant, is_direct, is_arc),
        })
    rows.sort(key=lambda r: (-r["score"], r["kind"], r["id"]))
    return {
        "source": {"id": source.id, "kind": source.kind, "file": source.file, "label": label(source), "era": source.rec.get("era", "")},
        "unresolved": unresolved,
        "investigations": [
            {
                "id": inv.get("id"),
                "title": inv.get("title") or inv.get("codename") or inv.get("id"),
                "status": inv.get("status", ""),
                "arcIds": inv.get("arcIds") or [],
                "alreadyLinks": article_id in record_links(inv),
            }
            for inv in inv_hits
        ],
        "rows": rows,
    }


def print_report(report: dict[str, Any], max_rows: int) -> None:
    src = report["source"]
    print(f"Story growth self-check: {src['id']} — {src['label']}")
    print(f"  source: {src['kind']} in {src['file']}")
    if src.get("era"):
        print(f"  era/arc text: {src['era']}")
    if report["unresolved"]:
        print("\nUNRESOLVED direct ids (fix before filing):")
        for rid in report["unresolved"]:
            print(f"  ERROR  {rid}")
    print("\nArc / investigation files:")
    if report["investigations"]:
        for inv in report["investigations"]:
            arcs = ", ".join(inv["arcIds"]) if inv["arcIds"] else "no arcIds filed"
            link = "linked" if inv["alreadyLinks"] else "needs session/relatedEvents review"
            print(f"  - {inv['id']} — {inv['title']} ({inv['status']}; {arcs}; {link})")
    else:
        print("  - none found; if this is a real arc, start or amend an investigation file")
    print("\nReview queue (make useful edits, not link spam):")
    rows = report["rows"][:max_rows]
    if not rows:
        print("  - no connected records found")
        return
    for row in rows:
        print(f"  - {row['id']} [{row['kind']}] — {row['label']}")
        print(f"      notes: {', '.join(row['notes'])}")
        if row["shared"]:
            print(f"      shared: {', '.join(row['shared'])}")
        for hint in row["hints"]:
            print(f"      useful edit: {hint}")
    if len(report["rows"]) > max_rows:
        print(f"  ... {len(report['rows']) - max_rows} more connected records hidden by --max-rows")
    print("\nUsefulness test: edit an old page only when the new article changes what it knows, where it sends the reader, or how its arc should be understood. A naked reciprocal link is not enough.")


def main() -> int:
    ap = argparse.ArgumentParser(description="Advisory growth queue for a newly-filed story article")
    ap.add_argument("article", nargs="?", help="article id to check; defaults to latest event with --latest")
    ap.add_argument("--latest", action="store_true", help="check the last event in events.json")
    ap.add_argument("--max-rows", type=int, default=30, help="maximum review rows to print (default: 30)")
    ap.add_argument("--arc-limit", type=int, default=8, help="maximum same-era peers to include (default: 8)")
    ap.add_argument("--json", action="store_true", help="print machine-readable report")
    args = ap.parse_args()

    by_id, duplicates, stores = load_all()
    article_id = args.article
    if args.latest or not article_id:
        events = stores.get("events.json") or []
        if not events:
            print("ERROR: no events found", file=sys.stderr)
            return 2
        article_id = events[-1].get("id")
    if not isinstance(article_id, str) or not article_id:
        print("ERROR: no article id supplied", file=sys.stderr)
        return 2
    try:
        report = review_rows(article_id, by_id, stores, args.arc_limit)
    except KeyError:
        print(f"ERROR: article id {article_id!r} not found in known article stores", file=sys.stderr)
        return 2
    if duplicates and not args.json:
        # Duplicates are usually legacy; this checker is advisory, so print a
        # short heads-up without failing a growth pass.
        print(f"note: {len(duplicates)} duplicate id(s) exist in the archive; using first seen records")
    if args.json:
        print(json.dumps(report, ensure_ascii=False, indent=2))
    else:
        print_report(report, args.max_rows)
    return 1 if report["unresolved"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
