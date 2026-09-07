#!/usr/bin/env python3
"""Every annotated passage must carry at least two distinct comment voices.

The Comment Log reads as a discussion, not a monologue: no article may be
annotated by a single author alone (the failure mode this guards is new
articles shipping with only Wario and Waluigi talking to each other).
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def main() -> int:
    anns = json.loads((ROOT / "Reputation-Matrix2/data/annotations.json").read_text())
    failures = []
    for a in anns:
        authors = {c.get("author") for c in (a.get("comments") or []) if c.get("author")}
        if len(authors) < 2:
            failures.append(f"{a.get('articleId')}: {len(authors)} voice(s)")
    if failures:
        print(f"FAIL: {len(failures)} annotation(s) lack a second voice:")
        for f in failures[:10]:
            print("  " + f)
        return 1
    print(f"PASS: {len(anns)} annotated passages, every one a real discussion")
    return 0


if __name__ == "__main__":
    sys.exit(main())
