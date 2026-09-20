#!/usr/bin/env python3
"""Merge the archive's three comment surfaces onto one store.

THE PROBLEM
-----------
The site grew three discussion systems that a reader meets as three different
things on the same article:

  1. "Discussion"        — the inline drawer, opened from a highlighted passage
  2. "FROM THE MARGINS"  — a box in the article body
  3. "WAHwire"           — the public in-world feed

(1) and (2) were never different data. Both read `annotations.json`; the
margins box simply replayed the same comments the drawer already showed, plus
routed guesses from `wahnotes.json`. (3) was a genuinely separate store of
in-world posts with replies and likes.

So the reader saw the same voices twice, in two visual languages, and a third
feed that looked like the other two but could not be reached from them.

WHAT THIS DOES
--------------
Migrates every annotation thread into `wahwire/posts.json` as a first-class
post carrying a `quote` anchor and `anchorArticle`. After this there is ONE
store. The three surfaces survive as three VIEWS of it:

  * the drawer   -> wire posts whose `quote` matches the clicked passage
  * the margins  -> wire posts about this article that are NOT passage-anchored
  * the feed     -> everything

Nothing is deleted. `annotations.json` is preserved as the authored source and
still validated by check-annotation-variety.py; this script is idempotent and
re-running it updates the mirrored posts in place rather than duplicating them.

    python3 tools/merge-discussion-systems.py           # report
    python3 tools/merge-discussion-systems.py --write
    python3 tools/merge-discussion-systems.py --check   # exit 1 if stale
"""
import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
ANN = DATA / "annotations.json"
POSTS = DATA / "wahwire" / "posts.json"

MIGRATED_PREFIX = "ann_"


def slug(text, limit=48):
    s = re.sub(r"[^a-z0-9]+", "_", str(text).lower()).strip("_")
    return s[:limit].rstrip("_")


def load(path):
    return json.loads(path.read_text(encoding="utf-8"))


def build_mirror(annotations):
    """One wire post per annotated passage, comments preserved as replies."""
    out = []
    seen = set()
    for a in annotations:
        aid = a.get("articleId")
        quote = a.get("quote")
        comments = a.get("comments") or []
        if not aid or not quote or not comments:
            continue
        pid = f"{MIGRATED_PREFIX}{slug(aid, 40)}_{slug(quote, 28)}"
        n = 2
        base = pid
        while pid in seen:          # two passages can slug identically
            pid = f"{base}_{n}"
            n += 1
        seen.add(pid)

        lead = comments[0]
        replies = []
        for i, c in enumerate(comments[1:], start=1):
            replies.append({
                "id": f"{pid}_c{i}",
                "author": c.get("authorId") or slug(c.get("author", "unknown")),
                "content": c.get("text", ""),
                "likes": int(c.get("likes") or 0),
            })
        if replies:
            top = max(replies, key=lambda r: r["likes"])
            if top["likes"] > 0:
                top["topReply"] = True

        out.append({
            "id": pid,
            "author": lead.get("authorId") or slug(lead.get("author", "unknown")),
            "type": "annotation",
            "date": None,
            "timestamp": lead.get("timestamp") or "",
            "content": lead.get("text", ""),
            "likes": int(lead.get("likes") or 0),
            "links": [{"id": aid, "type": "article"}],
            "tags": ["margins"],
            "reaction": "note",
            "comments": replies,
            "status": "posted",
            # --- what makes this a passage comment rather than a loose post ---
            "anchorArticle": aid,
            "quote": quote,
            "mirroredFrom": "annotations.json",
        })
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--write", action="store_true")
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()

    annotations = load(ANN)
    store = load(POSTS)
    posts = store["posts"]

    mirror = build_mirror(annotations)
    existing = {p["id"]: p for p in posts if str(p.get("id", "")).startswith(MIGRATED_PREFIX)}
    native = [p for p in posts if not str(p.get("id", "")).startswith(MIGRATED_PREFIX)]

    want = {p["id"]: p for p in mirror}
    added = [k for k in want if k not in existing]
    removed = [k for k in existing if k not in want]
    changed = [k for k in want if k in existing and existing[k] != want[k]]
    stale = added or removed or changed

    print(f"annotations : {len(annotations)} passages, "
          f"{sum(len(a.get('comments') or []) for a in annotations)} comments")
    print(f"wire        : {len(native)} native posts, {len(existing)} mirrored")
    print(f"mirror wants: {len(mirror)} posts  (+{len(added)} new, "
          f"-{len(removed)} stale, ~{len(changed)} changed)")

    if args.check:
        if stale:
            print("\nFAIL: the wire mirror is out of date with annotations.json")
            print("  run: python3 tools/merge-discussion-systems.py --write")
            return 1
        print("\nwire mirror is current")
        return 0

    if not args.write:
        print("\nRe-run with --write to apply.")
        return 0

    # Native posts keep their order; mirrored posts follow, sorted for a stable diff.
    store["posts"] = native + sorted(mirror, key=lambda p: p["id"])
    POSTS.write_text(json.dumps(store, ensure_ascii=False, indent=2) + "\n",
                     encoding="utf-8")
    print(f"\nwrote {len(store['posts'])} posts to {POSTS.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
