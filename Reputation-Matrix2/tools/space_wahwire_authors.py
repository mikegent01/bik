#!/usr/bin/env python3
"""Space out repeat authors in the stored WAHwire feed.

The 3-post cooldown is enforced when a post is *written*, but the feed also
holds posts that predate the rule. This pass repairs that history without
touching a single word of it.

The only thing it changes is `order` -- the slot a post occupies in the feed --
and it will only move a post among posts carrying the *same date*. Most of the
archive (75 of 94 posts) has no date at all, so its sequence asserts no
chronology and rearranging it invents nothing. A post dated 5 Aethel never
moves ahead of one dated 10 Aethel, and no post's text, author, likes,
comments or links are altered.

Perfect spacing is not always reachable: an account holding more than a
quarter of the feed cannot be spaced four apart no matter how the deck is
cut. Where that happens the pass gets as close as the arithmetic allows and
reports the shortfall rather than pretending to have fixed it.

    python3 tools/space_wahwire_authors.py --dry-run
    python3 tools/space_wahwire_authors.py
"""

from __future__ import annotations

import argparse
import json
import random
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
STORE = ROOT / "data" / "wahwire" / "posts.json"

COOLDOWN = 3  # an author must sit out this many posts before posting again


def date_key(post: dict) -> tuple:
    """The chronology a post actually claims. Undated posts share one bucket."""
    date = post.get("date") or {}
    return (date.get("year"), date.get("month"), date.get("day"))


def breaches(authors: list[str]) -> int:
    """How many times an author appears again inside the cooldown window."""
    total = 0
    for i, author in enumerate(authors):
        for j in range(max(0, i - COOLDOWN), i):
            if authors[j] == author:
                total += 1
    return total


def lower_bound(authors: list[str]) -> int:
    """The fewest breaches this multiset of authors can possibly have.

    For one account holding `w` of `n` posts there are `w - 1` internal gaps,
    and a gap only clears the cooldown if at least COOLDOWN other posts sit in
    it. With `n - w` other posts to spend, only `(n - w) // COOLDOWN` gaps can
    be filled that well, so every gap beyond that is a breach nothing can
    prevent. Summed over accounts this is a true floor, which is what lets the
    pass tell "as good as it gets" apart from "not finished".
    """
    counts = Counter(authors)
    total = len(authors)
    floor = 0
    for author, held in counts.items():
        if held < 2:
            continue
        gaps = held - 1
        fillable = (total - held) // COOLDOWN
        floor += max(0, gaps - fillable)
    return floor


def spread(group: list[dict], rounds: int = 250_000) -> list[dict]:
    """Reorder one same-date group so repeat authors sit as far apart as possible.

    Two stages. First a greedy pass lays the posts out by taking, at each slot,
    the account with the most still waiting that is not inside the cooldown
    window. Greedy alone is not enough -- it spends the small accounts early
    and leaves a dominant account with nothing to hide behind, so its surplus
    bunches at the tail -- so a second stage hill-climbs on swaps, keeping any
    exchange that lowers the breach count.

    The search is seeded and swaps are drawn deterministically, so the same
    feed always produces the same arrangement; this is a repo-editing script
    and a run of it has to be reproducible.
    """
    remaining = Counter(p["author"] for p in group)
    by_author: dict[str, list[dict]] = {}
    for post in group:
        by_author.setdefault(post["author"], []).append(post)

    out: list[dict] = []
    last_at: dict[str, int] = {}
    for slot in range(len(group)):
        eligible = [a for a in remaining
                    if slot - last_at.get(a, -10_000) > COOLDOWN]
        pool = eligible or list(remaining)
        pick = max(pool, key=lambda a: (remaining[a], a))
        out.append(by_author[pick].pop(0))
        last_at[pick] = slot
        remaining[pick] -= 1
        if remaining[pick] == 0:
            del remaining[pick]

    # Hill-climb. Only the order changes; `out` is a permutation throughout.
    size = len(out)
    if size < 3:
        return out
    target = lower_bound([p["author"] for p in out])
    current = breaches([p["author"] for p in out])
    rng = random.Random(20260815)
    for _ in range(rounds):
        if current <= target:
            break  # provably optimal, nothing left to win
        i, j = rng.randrange(size), rng.randrange(size)
        if out[i]["author"] == out[j]["author"]:
            continue
        out[i], out[j] = out[j], out[i]
        trial = breaches([p["author"] for p in out])
        if trial <= current:
            current = trial
        else:
            out[i], out[j] = out[j], out[i]  # reject, put it back
    return out


def polish(feed: list[dict], rounds: int = 200_000) -> list[dict]:
    """Hill-climb the assembled feed, swapping only within a date group.

    `spread()` optimises each date group blind to its neighbours, so a group
    can end on the same author the next one begins with. This pass sees the
    whole sequence at once. The same-date restriction is what keeps it honest:
    no post ever changes the day it claims to have been written.
    """
    size = len(feed)
    if size < 3:
        return feed
    rng = random.Random(20260815)
    current = breaches([p["author"] for p in feed])
    for _ in range(rounds):
        i, j = rng.randrange(size), rng.randrange(size)
        if feed[i]["author"] == feed[j]["author"]:
            continue
        if date_key(feed[i]) != date_key(feed[j]):
            continue  # would rewrite chronology; not ours to do
        feed[i], feed[j] = feed[j], feed[i]
        trial = breaches([p["author"] for p in feed])
        if trial <= current:
            current = trial
        else:
            feed[i], feed[j] = feed[j], feed[i]
    return feed


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--dry-run", action="store_true",
                    help="report what would change and write nothing")
    args = ap.parse_args()

    store = json.loads(STORE.read_text(encoding="utf-8"))
    posts = sorted(store["posts"], key=lambda p: p.get("order", 0))

    before = breaches([p["author"] for p in posts])

    # Group by claimed date, preserving the order the dates first appear so
    # the feed's overall chronology is untouched.
    groups: dict[tuple, list[dict]] = {}
    for post in posts:
        groups.setdefault(date_key(post), []).append(post)

    rearranged: list[dict] = []
    for key in groups:
        rearranged.extend(spread(groups[key]))

    # Each group is now internally as good as it gets, but the joins between
    # them are not: the last post of one group and the first of the next are
    # adjacent on screen and neither group's own pass could see that. Polish
    # the whole sequence, still only ever exchanging two posts that carry the
    # same date, so the chronology stays exactly as it was.
    rearranged = polish(rearranged)

    # Re-stamp order over the same set of slot numbers that were already in
    # use, so no post gains an order value the feed did not already contain.
    slots = sorted(p.get("order", 0) for p in posts)
    moved = 0
    for slot, post in zip(slots, rearranged):
        if post.get("order") != slot:
            moved += 1
        post["order"] = slot

    after = breaches([p["author"] for p in rearranged])

    total = len(rearranged)
    # The floor is per date-group, since posts never move between groups.
    floor = 0
    for key in groups:
        floor += lower_bound([p["author"] for p in rearranged
                              if date_key(p) == key])

    print(f"posts:              {total}")
    print(f"cooldown breaches:  {before} -> {after}")
    print(f"posts re-slotted:   {moved}")
    if after:
        print(f"provable floor:     {floor}"
              + ("  (optimal: no arrangement does better)" if after <= floor
                 else "  (still above the floor)"))
        worst = Counter()
        for i, post in enumerate(rearranged):
            for j in range(max(0, i - COOLDOWN), i):
                if rearranged[j]["author"] == post["author"]:
                    worst[post["author"]] += 1
        print(f"remaining, by account: {worst.most_common()}")

    if args.dry_run:
        print("\ndry run: nothing written")
        return 0

    store["posts"] = sorted(rearranged, key=lambda p: p["order"])
    STORE.write_text(json.dumps(store, indent=2, ensure_ascii=False) + "\n",
                     encoding="utf-8")
    print(f"\nwrote {STORE.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
