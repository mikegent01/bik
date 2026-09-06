#!/usr/bin/env python3
"""Check FACTION_ASSESSMENTS stays consistent across its two copies.

The dossier assessments live twice:

  * index.html -> const FACTION_ASSESSMENTS   (what the live site reads)
  * Reputation-Matrix2/data/support/assessments.js  (imported by
    app/systems/reputation.js and the directory / XP pages)

They must agree. They are also read by the reputation engine: a line phrased as
a standing order trips the hostility ceiling and caps that faction's standing at
-20, so a copy that drifts does not merely read wrong, it scores wrong.

See docs/STORY_FORMAT_GUIDE.md section 9E.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
JS = ROOT / "Reputation-Matrix2" / "data" / "support" / "assessments.js"

# Phrases the engine treats as a standing order (mirrors the regex in
# _factionHostility). Kept here so the guide, engine and checker agree.
KILL_ORDER = re.compile(
    r"(dead or alive|price on (his|her|their) head|kill[- ]order"
    r"|must be (cleansed|purged|removed|destroyed|stopped|detained)"
    r"|we only await his capture|to be detained"
    r"|hunt(ed|ing)? (him|her|them) down)",
    re.I,
)


def load_index() -> dict:
    src = INDEX.read_text(encoding="utf-8")
    marker = "const FACTION_ASSESSMENTS = "
    i = src.index(marker)
    start = i + len(marker)
    depth = 0
    for k in range(start, len(src)):
        if src[k] == "{":
            depth += 1
        elif src[k] == "}":
            depth -= 1
            if depth == 0:
                return json.loads(src[start : k + 1])
    raise SystemExit("could not find the end of FACTION_ASSESSMENTS in index.html")


def load_js() -> dict:
    """Parse the ESM copy without executing it (template-literal values)."""
    src = JS.read_text(encoding="utf-8")
    out: dict[str, dict[str, str]] = {}
    faction = None
    for line in src.splitlines():
        m = re.match(r"\s{4}(\w+):\s*\{", line)
        if m:
            faction = m.group(1)
            out[faction] = {}
            continue
        m = re.match(r"\s{8}(\w+):\s*`(.*)`,?\s*$", line)
        if m and faction:
            out[faction][m.group(1)] = m.group(2)
    return out


def main() -> int:
    if not INDEX.exists() or not JS.exists():
        print("SKIP: assessment sources not found")
        return 0

    a, b = load_index(), load_js()
    errors: list[str] = []

    only_a = sorted(set(a) - set(b))
    only_b = sorted(set(b) - set(a))
    for f in only_a:
        errors.append(f"faction {f!r} is in index.html but not assessments.js")
    for f in only_b:
        errors.append(f"faction {f!r} is in assessments.js but not index.html")

    for f in sorted(set(a) & set(b)):
        ops_a, ops_b = a[f], b[f]
        for op in sorted(set(ops_a) - set(ops_b)):
            errors.append(f"{f}.{op} is in index.html but not assessments.js")
        for op in sorted(set(ops_b) - set(ops_a)):
            errors.append(f"{f}.{op} is in assessments.js but not index.html")
        for op in sorted(set(ops_a) & set(ops_b)):
            if ops_a[op].strip() != ops_b[op].strip():
                errors.append(
                    f"{f}.{op} text differs between the two copies\n"
                    f"      index.html     : {ops_a[op][:90]}\n"
                    f"      assessments.js : {ops_b[op][:90]}"
                )

    # Every faction should cover the same operator roster; a half-filled faction
    # silently drops operators out of the scored standings cards.
    rosters = {frozenset(v) for v in a.values() if v}
    if len(rosters) > 1:
        common = set.intersection(*(set(x) for x in rosters))
        for f, ops in sorted(a.items()):
            missing = sorted(common - set(ops))
            if missing:
                errors.append(f"{f} is missing operator(s): {', '.join(missing)}")

    kill_orders = [
        f"{f}.{op}" for f, ops in sorted(a.items()) for op, t in sorted(ops.items()) if KILL_ORDER.search(t)
    ]

    print(f"index.html: {len(a)} factions   assessments.js: {len(b)} factions")
    print(f"kill-order phrasing (caps standing at -20): {len(kill_orders)}")
    for k in kill_orders:
        print(f"  · {k}")

    if errors:
        print("\nFAIL")
        for e in errors:
            print(f"  - {e}")
        return 1
    print("\nOK: both copies agree")
    return 0


if __name__ == "__main__":
    sys.exit(main())
