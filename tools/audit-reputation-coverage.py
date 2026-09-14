#!/usr/bin/env python3
"""Reputation coverage audit — which records move the matrix, and which cannot.

Advisory. This script does not fail a build; it answers one question the
archive could not previously answer without grepping four files by hand:

    Of everything a reader can open, how much of it carries reputation,
    and how much of the reputation it carries can actually be rendered?

It reports three distinct gaps, because they need three different fixes:

  1. RECORD GAP   — a record type the engine reads (events, battles,
                    majorBattles, trials) that carries no deltas at all.
                    Fix: author `reputationChanges` on the record.
  2. SURFACE GAP  — a record type the engine does NOT read (characters,
                    locations, nations, races, cultures, factions,
                    whatifs, articleAnalyses). No amount of authoring
                    helps until a renderer exists. Fix: code.
  3. RESOLUTION   — a key authored on a record that no registry can turn
                    into a name. A dangling operator or faction key is a
                    silently dropped delta, not a visible error.

Usage, from the repository root:

    python3 tools/audit-reputation-coverage.py
    python3 tools/audit-reputation-coverage.py --json
    python3 tools/audit-reputation-coverage.py --list-missing

The three registries consulted are the three the runtime actually consults:
`LORE_FACTIONS` parsed out of index.html, `data/factionsGenerated.json`
merged over it at boot by `loadGeneratedFactions()`, and `data/factions.json`.
`REPUTATION_OPERATORS` is likewise parsed from index.html rather than
duplicated here, so this audit cannot drift from the roster it is auditing.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "Reputation-Matrix2" / "data"
INDEX = ROOT / "index.html"

# Record types calculateOperatorStanding() actually sums.
SCORED = [
    ("events", "events.json"),
    ("battles", "battles.json"),
    ("majorBattles", "majorBattles.json"),
    ("trials", "trials.json"),
]

# Record types a reader can open that the engine never reads. Authoring
# reputation onto these today writes data nothing renders.
UNSURFACED = [
    ("characters", "characters.json"),
    ("locations", "locations.json"),
    ("factions", "factions.json"),
    ("nations", "nations.json"),
    ("races", "races.json"),
    ("cultures", "cultures.json"),
    ("whatifs", "whatifs.json"),
    ("articleAnalyses", "articleAnalyses.json"),
]


def load(name: str):
    path = DATA / name
    if not path.exists():
        return []
    try:
        with path.open(encoding="utf-8") as fh:
            return json.load(fh)
    except (OSError, ValueError) as exc:  # a broken file is a finding, not a crash
        print(f"  !! {name} could not be read: {exc}", file=sys.stderr)
        return []


def records(blob):
    """Every file here is a list except where a wrapper key is used."""
    if isinstance(blob, list):
        return [r for r in blob if isinstance(r, dict)]
    if isinstance(blob, dict):
        for key in ("events", "characters", "locations", "factions",
                    "whatifs", "analyses", "props", "records", "items"):
            if isinstance(blob.get(key), list):
                return [r for r in blob[key] if isinstance(r, dict)]
        return [v for v in blob.values() if isinstance(v, dict)]
    return []


def index_source() -> str:
    try:
        return INDEX.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return ""


def lore_factions(src: str) -> set[str]:
    """LORE_FACTIONS is a single JSON object literal assigned in index.html."""
    match = re.search(r"const LORE_FACTIONS = (\{.*?\});\n", src, re.S)
    if not match:
        return set()
    try:
        return set(json.loads(match.group(1)))
    except ValueError:
        # Fall back to key scraping rather than reporting zero known factions.
        return set(re.findall(r'"([a-z0-9_]+)":\s*\{', match.group(1)))


def operator_roster(src: str) -> dict[str, set[str]]:
    """Every alias the engine will resolve: id, key and xpKey per operator."""
    match = re.search(r"const REPUTATION_OPERATORS = \[(.*?)\];", src, re.S)
    roster: dict[str, set[str]] = {}
    if not match:
        return roster
    for entry in re.finditer(r"\{([^{}]*)\}", match.group(1)):
        body = entry.group(1)
        fields = dict(re.findall(r"(\w+):\s*'([^']*)'", body))
        oid = fields.get("id")
        if not oid:
            continue
        roster[oid] = {v for k, v in fields.items() if k in ("id", "key", "xpKey") and v}
    return roster


def faction_registry(src: str) -> set[str]:
    known = lore_factions(src)
    generated = load("factionsGenerated.json")
    if isinstance(generated, dict):
        known |= set(generated.get("factions") or {})
    known |= {r["id"] for r in records(load("factions.json")) if r.get("id")}
    return known


def deltas(rec: dict) -> dict:
    """Operator-keyed changes only. A flat faction map is a record-level
    `effects`-equivalent and is counted separately, exactly as
    `_recordDeltaSources()` splits them."""
    changes = rec.get("reputationChanges")
    if not isinstance(changes, dict):
        return {}
    return {k: v for k, v in changes.items() if isinstance(v, dict)}


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--json", action="store_true", help="machine-readable output")
    ap.add_argument("--list-missing", action="store_true",
                    help="print every record id carrying no reputation")
    args = ap.parse_args()

    src = index_source()
    known_factions = faction_registry(src)
    roster = operator_roster(src)
    known_ops = {alias for aliases in roster.values() for alias in aliases}

    report: dict = {"scored": {}, "unsurfaced": {}, "unresolved": {}}
    missing_ids: dict[str, list[str]] = {}

    # ---- 1. record gap ---------------------------------------------------
    used_factions: dict[str, int] = {}
    used_ops: dict[str, int] = {}
    for label, filename in SCORED:
        recs = records(load(filename))
        has_changes = [r for r in recs if deltas(r)]
        has_effects = [r for r in recs if r.get("effects")]
        bare = [r for r in recs
                if not r.get("reputationChanges") and not r.get("effects")]
        missing_ids[label] = [r.get("id", "<no id>") for r in bare]
        report["scored"][label] = {
            "total": len(recs),
            "reputationChanges": len(has_changes),
            "effects": len(has_effects),
            "both": len([r for r in recs if deltas(r) and r.get("effects")]),
            "none": len(bare),
        }
        for rec in recs:
            for op, factions in deltas(rec).items():
                used_ops[op] = used_ops.get(op, 0) + 1
                for fid in factions:
                    used_factions[fid] = used_factions.get(fid, 0) + 1

    # ---- 2. surface gap --------------------------------------------------
    for label, filename in UNSURFACED:
        recs = records(load(filename))
        report["unsurfaced"][label] = {
            "total": len(recs),
            "carrying_reputation": len([r for r in recs if deltas(r) or r.get("effects")]),
        }

    # Characters and factions have a partial surface: only the eight roster
    # operators get an operator panel, and only factions the runtime knows
    # get a party-standings panel.
    chars = records(load("characters.json"))
    char_ids = {r.get("id") for r in chars}
    report["unsurfaced"]["characters"]["with_operator_panel"] = len(char_ids & set(roster))
    # `renderArticleFactionReputation()` reads LORE_FACTIONS only, and boot
    # merges factionsGenerated.json into it. A faction filed in factions.json
    # but absent from both renders no standings panel at all — so checking
    # against factions.json itself would be circular and always pass.
    runtime_factions = lore_factions(src)
    generated = load("factionsGenerated.json")
    if isinstance(generated, dict):
        runtime_factions |= {
            fid for fid, f in (generated.get("factions") or {}).items()
            if isinstance(f, dict) and f.get("status") not in ("retired", "removed")
        }
    fac_ids = {r.get("id") for r in records(load("factions.json")) if r.get("id")}
    report["unsurfaced"]["factions"]["renderable"] = len(fac_ids & runtime_factions)
    report["unsurfaced"]["factions"]["unrenderable_ids"] = sorted(fac_ids - runtime_factions)

    # ---- 3. resolution gap ----------------------------------------------
    report["unresolved"]["factions"] = sorted(f for f in used_factions if f not in known_factions)
    report["unresolved"]["operators"] = sorted(o for o in used_ops if o not in known_ops)
    report["referenced"] = {"factions": len(used_factions), "operators": len(used_ops)}

    if args.json:
        print(json.dumps(report, indent=2))
        return 0

    print("REPUTATION COVERAGE AUDIT")
    print("=" * 72)
    print("\n1. RECORD GAP — scored types carrying no deltas at all")
    print(f"   {'type':<14}{'total':>7}{'repChanges':>12}{'effects':>9}{'both':>6}{'NONE':>6}")
    for label, _ in SCORED:
        s = report["scored"][label]
        print(f"   {label:<14}{s['total']:>7}{s['reputationChanges']:>12}"
              f"{s['effects']:>9}{s['both']:>6}{s['none']:>6}")
    total_none = sum(s["none"] for s in report["scored"].values())
    print(f"   -> {total_none} scored records move nothing.")

    print("\n2. SURFACE GAP — openable types the engine never reads")
    for label, _ in UNSURFACED:
        u = report["unsurfaced"][label]
        extra = ""
        if label == "characters":
            extra = f"  ({u['with_operator_panel']} of them get an operator panel)"
        if label == "factions":
            extra = f"  ({u['renderable']} render a party-standings panel)"
        print(f"   {label:<18}{u['total']:>5} records, "
              f"{u['carrying_reputation']} carry reputation{extra}")
    if report["unsurfaced"]["factions"]["unrenderable_ids"]:
        print("   filed factions the runtime cannot render: "
              + ", ".join(report["unsurfaced"]["factions"]["unrenderable_ids"]))

    print("\n3. RESOLUTION GAP — authored keys no registry resolves")
    print(f"   faction keys referenced: {report['referenced']['factions']}"
          f"  unresolved: {len(report['unresolved']['factions'])}")
    for fid in report["unresolved"]["factions"]:
        print(f"     · {fid}")
    print(f"   operator keys referenced: {report['referenced']['operators']}"
          f"  off-roster: {len(report['unresolved']['operators'])}")
    for oid in report["unresolved"]["operators"]:
        print(f"     · {oid}  ({used_ops[oid]} record(s))")

    if args.list_missing:
        print("\nRecords carrying no reputation:")
        for label, ids in missing_ids.items():
            if ids:
                print(f"   {label}:")
                for rid in ids:
                    print(f"     · {rid}")

    print("\nAdvisory only — this audit never fails a build.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
