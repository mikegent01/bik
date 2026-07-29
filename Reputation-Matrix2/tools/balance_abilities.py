#!/usr/bin/env python3
"""
Ability Balance Tool for Training Wing
 
Analyzes the current abilityShop.json distribution and reports
which levels and classes need more abilities.

Usage:
  python tools/balance_abilities.py
  python tools/balance_abilities.py --max-per-level 12
  python tools/balance_abilities.py --class fighter
"""
from __future__ import annotations

import argparse
import sys
from collections import defaultdict
from pathlib import Path

# Fix Windows cp1252 console so ASCII-safe output still works cleanly.
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding="utf-8", errors="backslashreplace")
    except (AttributeError, OSError):
        pass

ROOT = Path(__file__).resolve().parents[1]
SHOP_PATH = ROOT / "data" / "abilityShop.json"


def load_shop() -> dict:
    import json
    return json.loads(SHOP_PATH.read_text(encoding="utf-8"))


def analyze_distribution(shop: dict, klass: str = "", max_per_level: int = 8) -> list[int]:
    abilities = shop.get("abilities", [])
    classes = list(shop.get("classes", {}).keys())
    if klass:
        classes = [klass] if klass in classes else []

    print("=== ABILITY DISTRIBUTION ANALYSIS ===\n")

    level_counts: dict[int, int] = defaultdict(int)
    class_level_counts: dict[str, dict[int, int]] = {
        c: defaultdict(int) for c in classes
    }

    for a in abilities:
        lvl = int(a.get("level") or 1)
        cls = a.get("class", "")
        if not klass or cls == klass:
            level_counts[lvl] += 1
        if cls in class_level_counts:
            class_level_counts[cls][lvl] += 1

    max_level = max(level_counts.keys(), default=20)

    print("LEVEL DISTRIBUTION" + (f" ({klass})" if klass else " (All Classes)") + ":")
    print("-" * 44)
    for lvl in range(1, max_level + 1):
        count = level_counts[lvl]
        if count == 0:
            status = "  [MISSING]"
        elif count < 4:
            status = "  [LOW]"
        elif count > 30:
            status = "  [OVERLOADED]"
        else:
            status = ""
        bar = "#" * min(count, 40)
        print(f"  Level {lvl:2d}: {count:3d}  {bar}{status}")

    print(f"\nTotal abilities shown: {sum(level_counts.values())}")

    if not klass:
        print("\n\nPER-CLASS LEVEL DISTRIBUTION:")
        print("-" * 60)
        for cls in classes:
            print(f"\n  {cls.upper()}:")
            for lvl in range(1, max_level + 1):
                c = class_level_counts[cls].get(lvl, 0)
                marker = " [MISSING]" if c == 0 else ""
                if c > 0 or lvl <= 20:
                    bar = "#" * min(c, 20)
                    print(f"    Lv {lvl:2d}: {c:2d}  {bar}{marker}")

    problem_levels = [lvl for lvl in range(1, max_level + 1) if level_counts[lvl] < 5]

    print(f"\n\nLEVELS WITH < 5 ABILITIES (recommended targets):")
    print(f"  {problem_levels}")

    print("\n\nSUGGESTED COMMANDS:")
    print("  # Fill all gaps across all classes (runs until stopped):")
    print("  python tools/generate_abilities.py --mode create --infinite")
    print()
    print("  # Fill gaps for one class:")
    for cls in classes[:3]:
        print(
            f"  python tools/generate_abilities.py "
            f"--mode create --class {cls} --count 20"
        )

    return problem_levels


def main() -> None:
    parser = argparse.ArgumentParser(description="Analyze Training Wing ability distribution.")
    parser.add_argument("--class", dest="klass", default="", help="Restrict to one class id")
    parser.add_argument(
        "--max-per-level", type=int, default=8, help="Target count per level (for reporting)"
    )
    args = parser.parse_args()

    shop = load_shop()
    analyze_distribution(shop, klass=args.klass, max_per_level=args.max_per_level)


if __name__ == "__main__":
    main()