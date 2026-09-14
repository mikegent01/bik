#!/usr/bin/env python3
"""WAHwire audit — what the wire owes, and what it cannot currently show.

Advisory. `CROSS_SYSTEM_UPDATES.md` states the standing rule plainly:

    Any new filing at all -> a WAHwire post.

That rule has never been measured. This script measures it, and separates
two failures that look the same from the outside:

  1. COVERAGE   — filings with no post. The wire is under-fed.
  2. RENDERER   — the store has no reader. `data/wahwire/*.json` is fetched
                  by nothing in the runtime; the page the browser test
                  points at does not exist on disk. Posts written today go
                  into a file no reader can open.

It also checks the data's internal integrity, because the generator writes
here unattended: reaction tones must exist in `reactions.json`, every link
target must resolve to a real record, every author should have a character
page to link back to, and profiles should correspond to voices that post.

Usage, from the repository root:

    python3 tools/audit-wahwire.py
    python3 tools/audit-wahwire.py --json
    python3 tools/audit-wahwire.py --list-uncovered [--limit 40]
"""

from __future__ import annotations

import argparse
import json
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RM = ROOT / "Reputation-Matrix2"
DATA = RM / "data"
WIRE = DATA / "wahwire"

# The four record types the standing rule counts as "a filing", and the four
# the generator will write a link to — `link_targets()` in
# tools/genkit/systems/wahwire.py builds from exactly this list.
LINKABLE = [
    ("event", "events.json"),
    ("battle", "battles.json"),
    ("battle", "majorBattles.json"),
    ("trial", "trials.json"),
]

# Hand-written posts legitimately link further than the generator can: the
# Miser muster-roll post points at a character and a faction. Those are real
# article ids, so they must not be reported as dangling — but they are also
# ids the generator could never have produced, which is worth knowing.
ALSO_LINKABLE = [
    "characters.json", "locations.json", "factions.json",
    "nations.json", "races.json", "cultures.json",
]

QUALITY_MARK = "wahwire-v2"


def load(path: Path, default=None):
    if not path.exists():
        return default
    try:
        with path.open(encoding="utf-8") as fh:
            return json.load(fh)
    except (OSError, ValueError):
        return default


def link_id(link):
    return link.get("id") if isinstance(link, dict) else link


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--list-uncovered", action="store_true")
    ap.add_argument("--limit", type=int, default=30)
    args = ap.parse_args()

    store = load(WIRE / "posts.json", {}) or {}
    posts = [p for p in (store.get("posts") or []) if isinstance(p, dict)]
    reactions = set((load(WIRE / "reactions.json", {}) or {}).get("reactions") or {})
    profiles = (load(WIRE / "profiles.json", {}) or {}).get("profiles") or {}

    characters = load(DATA / "characters.json", []) or []
    char_ids = {c["id"] for c in characters if isinstance(c, dict) and c.get("id")}

    # ---- coverage --------------------------------------------------------
    linked = set()
    for post in posts:
        for link in post.get("links") or []:
            lid = link_id(link)
            if lid:
                linked.add(lid)

    coverage = {}
    uncovered: dict[str, list[str]] = {}
    valid_targets = set()
    for kind, filename in LINKABLE:
        recs = [r for r in (load(DATA / filename, []) or []) if isinstance(r, dict)]
        ids = [r["id"] for r in recs if r.get("id")]
        valid_targets |= set(ids)
        hit = [i for i in ids if i in linked]
        key = filename.replace(".json", "")
        coverage[key] = {"kind": kind, "total": len(ids), "covered": len(hit),
                         "uncovered": len(ids) - len(hit)}
        uncovered[key] = [i for i in ids if i not in linked]

    # ---- integrity -------------------------------------------------------
    authors = Counter(p.get("author") for p in posts if p.get("author"))
    commenters = Counter(c.get("author") for p in posts
                         for c in (p.get("comments") or []) if isinstance(c, dict))
    voices = set(authors) | set(commenters)

    bad_reactions = sorted({
        r for p in posts
        for r in [p.get("reaction")] + [c.get("reaction") for c in (p.get("comments") or [])
                                        if isinstance(c, dict)]
        if r and r not in reactions
    })
    # A hand-written post may link a character, location or faction. Those are
    # real articles, so resolve against every openable type before calling an
    # id dangling — otherwise the audit invents four defects that do not exist.
    other_targets = set()
    for filename in ALSO_LINKABLE:
        for rec in (load(DATA / filename, []) or []):
            if isinstance(rec, dict) and rec.get("id"):
                other_targets.add(rec["id"])
    all_targets = valid_targets | other_targets
    dangling = sorted({
        lid for p in posts for lid in (link_id(l) for l in (p.get("links") or []))
        if lid and lid not in all_targets
    })
    beyond_generator = sorted({
        lid for p in posts for lid in (link_id(l) for l in (p.get("links") or []))
        if lid and lid in other_targets and lid not in valid_targets
    })
    unpaged = sorted(v for v in voices if v not in char_ids)
    silent_profiles = sorted(p for p in profiles if p not in voices)
    unprofiled = sorted(v for v in voices if v not in profiles)
    thread_lengths = Counter(len(p.get("comments") or []) for p in posts)
    vetted = sum(1 for p in posts
                 if (p.get("_quality") or {}).get("validator") == QUALITY_MARK)

    # ---- renderer --------------------------------------------------------
    # Does anything in the shipped runtime actually read this store?
    consumers = []
    for path in list(RM.rglob("*.js")) + list(RM.rglob("*.html")) + [ROOT / "index.html"]:
        if "node_modules" in path.parts or "tools" in path.parts:
            continue
        try:
            text = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        if re.search(r"wahwire/(posts|profiles|reactions)\.json", text):
            consumers.append(str(path.relative_to(ROOT)))
    page = RM / "app" / "pages" / "wahwire" / "wahwire.html"

    report = {
        "posts": len(posts),
        "vetted": vetted,
        "status": dict(Counter(p.get("status") for p in posts)),
        "coverage": coverage,
        "authors": authors.most_common(),
        "distinct_voices": len(voices),
        "profiles": len(profiles),
        "integrity": {
            "illegal_reactions": bad_reactions,
            "dangling_links": dangling,
            "links_beyond_generator_scope": beyond_generator,
            "voices_without_character_page": unpaged,
            "profiles_that_never_post": silent_profiles,
            "voices_without_profile": unprofiled,
            "thread_lengths": dict(sorted(thread_lengths.items())),
        },
        "renderer": {
            "page_exists": page.exists(),
            "runtime_consumers": consumers,
        },
    }

    if args.json:
        print(json.dumps(report, indent=2))
        return 0

    print("WAHWIRE AUDIT")
    print("=" * 72)
    print(f"\nStore: {len(posts)} posts, {vetted} vetted as {QUALITY_MARK}, "
          f"{len(profiles)} profiles, {len(reactions)} reaction tones")
    print(f"Status: {report['status']}")

    print("\n1. COVERAGE — the standing rule is one post per filing")
    total = covered = 0
    for key, c in coverage.items():
        total += c["total"]
        covered += c["covered"]
        pct = (100.0 * c["covered"] / c["total"]) if c["total"] else 0.0
        print(f"   {key:<18}{c['covered']:>4}/{c['total']:<4} covered "
              f"({pct:5.1f}%)   {c['uncovered']} owed")
    pct = (100.0 * covered / total) if total else 0.0
    print(f"   {'TOTAL':<18}{covered:>4}/{total:<4} covered ({pct:5.1f}%)  "
          f"-> {total - covered} filings owe a post")

    print("\n2. RENDERER — can a reader see any of it?")
    print(f"   app/pages/wahwire/wahwire.html exists: {report['renderer']['page_exists']}")
    if consumers:
        for c in consumers:
            print(f"   read by: {c}")
    else:
        print("   read by: NOTHING in the shipped runtime.")
        print("   The store is write-only: the generator fills it, no page renders it.")

    print("\n3. VOICES")
    print(f"   {len(voices)} distinct voices post or comment; "
          f"{len(profiles)} profiles exist")
    for author, n in authors.most_common():
        share = 100.0 * n / len(posts) if posts else 0
        print(f"     {author:<34}{n:>3} posts ({share:4.1f}%)")
    if silent_profiles:
        print(f"   profiles that never post ({len(silent_profiles)}): "
              + ", ".join(silent_profiles))
    if unprofiled:
        print(f"   voices with no profile: {', '.join(unprofiled)}")
    if unpaged:
        print(f"   voices with no character page (cannot link back): "
              + ", ".join(unpaged))

    print("\n4. INTEGRITY")
    print(f"   illegal reaction tones: {bad_reactions or 'none'}")
    print(f"   dangling link targets:  {dangling or 'none'}")
    if beyond_generator:
        print("   links to non-filing articles (valid, hand-written only): "
              + ", ".join(beyond_generator))
    print(f"   thread lengths (comments -> posts): {report['integrity']['thread_lengths']}")

    if args.list_uncovered:
        print("\nFilings owing a post:")
        for key, ids in uncovered.items():
            if not ids:
                continue
            print(f"   {key} ({len(ids)}):")
            for rid in ids[: args.limit]:
                print(f"     · {rid}")
            if len(ids) > args.limit:
                print(f"     … and {len(ids) - args.limit} more")

    print("\nAdvisory only — this audit never fails a build.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
