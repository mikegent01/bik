#!/usr/bin/env python3
"""Redistribute the stale WAHwire posts that predate the author cooldown.

Why this is a one-off script and not a generator pass
-----------------------------------------------------
72 of the 94 posts in the feed are by `waluigi` — 77% of it. They were written
before the cooldown rule existed (check `_generated.at` against commit
a6eb13e), so they are not evidence of a live bug: the rule works, it just was
not there yet. But the archive is judged on what it looks like now, and right
now the "Loudest voices" panel is one name and a rounding error.

Regenerating them would mean throwing away 72 finished posts to re-ask a model
for the same opinions. Reassigning them is cheaper and better, PROVIDED the
reassignment is grounded rather than arbitrary.

What "grounded" means here
--------------------------
A post is only moved when the archive itself says who else could have written
it: the event the post links to names its participants, and if one of those
participants has an account, that account has a real stake in the record. So
the reassignment reads the linked event, intersects its participants with the
known accounts, and picks from that.

Three things are deliberately NOT done:

  * Posts written in Waluigi's own voice are never moved. Roughly a sixth of
    them say "Waluigi" or open with "WAH!", and putting those words in
    Toadsworth's mouth would be worse than the imbalance.
  * The prose is never edited. Not one character. If a post cannot move
    without a rewrite, it does not move.
  * Likes are not touched. Waluigi's average is 1,658 against a field average
    of 1,899, so the panel is not a likes problem and adjusting them would be
    faking the numbers to fix a display.

Usage from Reputation-Matrix2/:
  python3 tools/rebalance_wahwire_authors.py --dry-run   # report only
  python3 tools/rebalance_wahwire_authors.py             # write
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
POSTS = ROOT / "data" / "wahwire" / "posts.json"
EVENTS = ROOT / "data" / "events.json"

sys.path.insert(0, str(Path(__file__).resolve().parent))
from genkit.systems import wahwire  # noqa: E402

# A post that names Waluigi, or opens in his catchphrase, is his. Moving it
# would require editing the prose, which this script does not do.
VOICE_LOCK = re.compile(r"\bwaluigi\b|\bwah!|\bwaluigi's\b", re.I)


def load_events() -> dict[str, dict]:
    data = json.loads(EVENTS.read_text(encoding="utf-8"))
    return {e["id"]: e for e in data if isinstance(e, dict) and e.get("id")}


def linked_ids(post: dict) -> list[str]:
    out = []
    for link in post.get("links") or []:
        out.append(link.get("id") if isinstance(link, dict) else link)
    if post.get("legacyEventId"):
        out.append(post["legacyEventId"])
    return [x for x in out if x]


def stakeholders(post: dict, events: dict[str, dict], known: set[str]) -> list[str]:
    """Accounts with a documented stake in the record this post is about."""
    found: list[str] = []
    for lid in linked_ids(post):
        event = events.get(lid)
        if not event:
            continue
        for person in event.get("participants") or []:
            if not isinstance(person, dict):
                continue
            pid = person.get("id")
            if pid in known and pid not in found:
                found.append(pid)
    return found


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--author", default="waluigi",
                    help="the over-represented account to thin out")
    args = ap.parse_args()

    store = json.loads(POSTS.read_text(encoding="utf-8"))
    posts = store.get("posts", [])
    events = load_events()
    known = set(wahwire.KNOWN_AUTHORS)

    order = sorted(posts, key=lambda p: p.get("order") or 0)
    counts = Counter(str(p.get("author")) for p in order)
    total = len(order)
    target = int(total * wahwire.AUTHOR_MAX_SHARE)

    print(f"{total} posts · {args.author} holds {counts[args.author]} "
          f"({counts[args.author] / total:.0%}) · cap {wahwire.AUTHOR_MAX_SHARE:.0%} "
          f"= {target} posts")

    # Move the least Waluigi-specific posts first: the ones where another
    # named participant has the clearer claim.
    movable = []
    locked = 0
    for post in order:
        if str(post.get("author")) != args.author:
            continue
        if VOICE_LOCK.search(post.get("content", "")):
            locked += 1
            continue
        movable.append(post)

    print(f"  {locked} locked to his voice (named in the prose) — never moved")
    print(f"  {len(movable)} candidates")

    need = counts[args.author] - target
    if need <= 0:
        print("already within the cap; nothing to do")
        return 0

    # Prefer whoever is quietest, so the redistribution widens the cast rather
    # than creating a second dominant voice.
    moved: list[tuple[str, str, str]] = []
    for post in movable:
        if need <= 0:
            break
        pool = [a for a in stakeholders(post, events, known) if a != args.author]
        if not pool:
            continue

        index = order.index(post)
        window = {str(p.get("author"))
                  for p in order[max(0, index - wahwire.AUTHOR_COOLDOWN):index]}
        window |= {str(p.get("author"))
                   for p in order[index + 1:index + 1 + wahwire.AUTHOR_COOLDOWN]}
        eligible = [a for a in pool if a not in window]
        if not eligible:
            continue

        pick = min(eligible, key=lambda a: counts[a])
        post["author"] = pick
        # The new author must not be replying to themselves.
        post["comments"] = [
            c for c in (post.get("comments") or [])
            if not (isinstance(c, dict) and c.get("author") == pick)
        ]
        post.setdefault("_rebalanced", {})
        post["_rebalanced"] = {
            "from": args.author,
            "reason": "named participant of the linked record",
        }
        counts[args.author] -= 1
        counts[pick] += 1
        need -= 1
        moved.append((post["id"], args.author, pick))

    print(f"\nreassigned {len(moved)}:")
    for pid, was, now in moved:
        print(f"  {was:>10} → {now:<26} {pid}")

    print("\nresulting distribution:")
    for author, n in counts.most_common():
        flag = "  <-- over cap" if n / total > wahwire.AUTHOR_MAX_SHARE else ""
        print(f"  {author:<28} {n:>3}  {n / total:>5.1%}{flag}")

    if args.dry_run:
        print("\n(dry run — nothing written)")
        return 0

    POSTS.write_text(
        json.dumps(store, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"\nwrote {POSTS.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
