#!/usr/bin/env python3
"""Find and repair collection members that point at records which do not exist.

A collection lists `members[{id,name,role}]`. When an id resolves to nothing,
the member renders as plain text: no link, no portrait, no reputation, and it
silently drags the collection's computed stats down. The live-collections work
surfaced 61 such member rows, which reduce to 6 distinct broken ids.

Two kinds of breakage, and they need opposite treatment:

  TYPO / RENAME  - the record exists under a different id ("remi" ->
                   "remi_akamatsu_full_backstory"). Safe to repoint
                   automatically, but only on an exact-name match; a fuzzy id
                   guess is how you silently attach the wrong person to a
                   faction.

  GENUINELY MISSING - no such record was ever written (donkey_kong,
                   lanky_kong). These are not repairs, they are commissions:
                   somebody has to write the article. This tool writes them to
                   a worklist instead of inventing a stub, because an empty
                   record that exists is worse than a gap that is visible.

Deterministic, stdlib only, NO AI. It proposes and repoints; it never writes
prose.

  python3 tools/fix-unlinked-members.py --report
  python3 tools/fix-unlinked-members.py --check     # exit 1 while any remain
  python3 tools/fix-unlinked-members.py --write     # apply safe repoints only
  python3 tools/fix-unlinked-members.py --worklist  # emit the commission list
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
COLLECTIONS = DATA / "collections.json"
WORKLIST = ROOT / "docs" / "worklists" / "unlinked-collection-members.md"

RECORD_FILES = ["characters", "locations", "factions", "events", "battles",
                "nations", "races", "cultures", "collections", "trials"]


def load(name: str):
    p = DATA / f"{name}.json"
    if not p.exists():
        return []
    d = json.loads(p.read_text(encoding="utf-8"))
    items = d if isinstance(d, list) else (d.get(name) or [])
    if isinstance(items, dict):
        items = list(items.values())
    return [x for x in items if isinstance(x, dict) and x.get("id")]


def known_records() -> dict:
    """id -> (normalised name, source file)."""
    out = {}
    for f in RECORD_FILES:
        for x in load(f):
            out[x["id"]] = (norm(x.get("name") or x.get("title") or ""), f)
    return out


def norm(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", " ", str(s or "").lower()).strip()


def collections() -> tuple[list, object]:
    raw = json.loads(COLLECTIONS.read_text(encoding="utf-8"))
    lst = raw if isinstance(raw, list) else (raw.get("collections") or [])
    return lst, raw


def scan():
    known = known_records()
    by_name = {}
    for rid, (nm, _src) in known.items():
        if nm:
            by_name.setdefault(nm, []).append(rid)

    broken = {}
    lst, _raw = collections()
    for c in lst:
        for m in (c.get("members") or []):
            if not isinstance(m, dict):
                continue
            mid = m.get("id")
            if not mid or mid in known:
                continue
            rec = broken.setdefault(mid, {"in": [], "names": set(), "suggest": None})
            rec["in"].append(c.get("id"))
            if m.get("name"):
                rec["names"].add(m["name"])

    # Propose a repoint only when the member's declared NAME identifies exactly
    # one real record. Exact match first; then a first-name prefix, which
    # catches "Remi" -> "Remi Akamatsu" while still refusing anything ambiguous.
    # A fuzzy id guess is deliberately NOT used: that is how the wrong person
    # gets silently attached to a faction.
    for mid, rec in broken.items():
        for nm in rec["names"]:
            key = norm(nm)
            hits = by_name.get(key) or []
            if len(hits) == 1:
                rec["suggest"] = hits[0]
                break
            if len(key) >= 4:
                pre = sorted({rid for full, rids in by_name.items()
                              if full.startswith(key + " ") for rid in rids})
                if len(pre) == 1:
                    rec["suggest"] = pre[0]
                    break
                if pre:
                    # More than one plausible record. Refusing to guess is the
                    # point: silently attaching the wrong Remi to the core cast
                    # is worse than leaving the gap visible. Surface both.
                    rec["candidates"] = pre
    return broken


def report(broken: dict) -> None:
    if not broken:
        print("  ok   every collection member resolves to a real record")
        return
    auto = {k: v for k, v in broken.items() if v["suggest"]}
    manual = {k: v for k, v in broken.items() if not v["suggest"]}
    rows = sum(len(v["in"]) for v in broken.values())
    print(f"unlinked member ids : {len(broken)}  ({rows} member rows affected)")
    print(f"  safe to repoint   : {len(auto)}")
    print(f"  needs an article  : {len(manual)}")
    if auto:
        print("\n-- exact name match, safe to repoint --")
        for mid, v in sorted(auto.items()):
            print(f"   {mid:<24} -> {v['suggest']:<34} (as \"{sorted(v['names'])[0]}\")")
    if manual:
        print("\n-- no such record; these are commissions, not repairs --")
        for mid, v in sorted(manual.items()):
            nm = sorted(v["names"])[0] if v["names"] else "(no name given)"
            print(f"   {mid:<24} \"{nm}\"  in: {', '.join(v['in'])}")


def write_worklist(broken: dict) -> None:
    manual = {k: v for k, v in broken.items() if not v["suggest"]}
    WORKLIST.parent.mkdir(parents=True, exist_ok=True)
    lines = [
        "# Worklist — collection members with no record",
        "",
        "Generated by `tools/fix-unlinked-members.py --worklist`. Do not hand-edit;",
        "re-run the tool instead.",
        "",
        "Each row is a collection member whose `id` resolves to nothing. The member",
        "renders as dead text: no link, no portrait, no reputation. These are not",
        "typos the tool can repoint — no record with a matching name exists — so each",
        "one is a decision: **write the article, rename the member, or remove it.**",
        "",
        "A stub was deliberately NOT generated. An empty record that exists is harder",
        "to notice than a gap that is visible.",
        "",
        "| member id | name as listed | appears in | candidates found | decision |",
        "|---|---|---|---|---|",
    ]
    for mid, v in sorted(manual.items()):
        nm = sorted(v["names"])[0] if v["names"] else "—"
        cand = ", ".join(f"`{c}`" for c in v.get("candidates", [])) or "none"
        lines.append(f"| `{mid}` | {nm} | {', '.join(f'`{x}`' for x in v['in'])} | {cand} | _unresolved_ |")
    lines += [
        "",
        "## How to resolve one",
        "",
        "1. **The character is real and filed under another id** — fix the member id in",
        "   `collections.json`, then re-run `--check`.",
        "2. **The character should exist** — file a `characters.json` record following",
        "   `docs/SESSION_FILING_PROCESS.md`, then re-run `--check`.",
        "3. **The member was speculative** — remove the row from the collection.",
        "",
        f"Remaining: **{len(manual)}**",
        "",
    ]
    WORKLIST.write_text("\n".join(lines), encoding="utf-8")
    print(f"wrote {WORKLIST.relative_to(ROOT)} ({len(manual)} open items)")


def apply_repoints(broken: dict) -> int:
    auto = {k: v["suggest"] for k, v in broken.items() if v["suggest"]}
    if not auto:
        print("nothing safe to repoint")
        return 0
    raw = COLLECTIONS.read_text(encoding="utf-8")
    data = json.loads(raw)
    lst = data if isinstance(data, list) else (data.get("collections") or [])
    changed = 0
    for c in lst:
        for m in (c.get("members") or []):
            if isinstance(m, dict) and m.get("id") in auto:
                old = m["id"]
                m["id"] = auto[old]
                changed += 1
                print(f"   {c.get('id')}: {old} -> {m['id']}")
    if changed:
        COLLECTIONS.write_text(
            json.dumps(data, ensure_ascii=False, indent=2) + ("\n" if raw.endswith("\n") else ""),
            encoding="utf-8")
    print(f"repointed {changed} member row(s)")
    return changed


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--report", action="store_true")
    ap.add_argument("--check", action="store_true", help="exit 1 while any member is unlinked")
    ap.add_argument("--write", action="store_true", help="apply exact-name repoints")
    ap.add_argument("--worklist", action="store_true", help="write the commission list")
    args = ap.parse_args()

    broken = scan()

    if args.write:
        apply_repoints(broken)
        broken = scan()
    if args.worklist:
        write_worklist(broken)
    if args.check:
        report(broken)
        return 1 if broken else 0
    if args.report or not (args.write or args.worklist):
        report(broken)
    return 0


if __name__ == "__main__":
    sys.exit(main())
