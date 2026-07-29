#!/usr/bin/env python3
"""
Ability Balance Tool for Training Wing

Analyzes the current abilityShop.json distribution and generates
new abilities for under-represented levels (especially 2-20 and 21-30).

Usage:
  python tools/balance_abilities.py --analyze
  python tools/balance_abilities.py --balance --target-levels 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
  python tools/balance_abilities.py --auto-balance --max-per-level 12
"""

import json
import sys
import argparse
from pathlib import Path
from collections import defaultdict

ROOT = Path(__file__).resolve().parents[1]
SHOP_PATH = ROOT / "data" / "abilityShop.json"

VALID_TYPES = {"combat", "utility", "magic", "stealth", "social", "support", "leadership", "divine"}
AP_TIERS = ((4, 1), (8, 2), (12, 3), (99, 4))

def ap_for_level(level: int) -> int:
    lvl = max(1, int(level or 1))
    for ceiling, cost in AP_TIERS:
        if lvl <= ceiling:
            return cost
    return AP_TIERS[-1][1]

def load_shop():
    return json.loads(SHOP_PATH.read_text(encoding="utf-8"))

def save_shop(shop):
    SHOP_PATH.write_text(json.dumps(shop, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

def analyze_distribution(shop):
    abilities = shop.get("abilities", [])
    classes = list(shop.get("classes", {}).keys())
    
    print("=== ABILITY DISTRIBUTION ANALYSIS ===\n")
    
    # Overall level counts
    level_counts = defaultdict(int)
    class_level_counts = defaultdict(lambda: defaultdict(int))
    
    for a in abilities:
        lvl = int(a.get("level", 1))
        cls = a.get("class", "unknown")
        level_counts[lvl] += 1
        class_level_counts[cls][lvl] += 1
    
    print("LEVEL DISTRIBUTION (All Classes):")
    print("-" * 40)
    max_level = max(level_counts.keys()) if level_counts else 30
    
    for lvl in range(1, max_level + 1):
        count = level_counts[lvl]
        status = ""
        if count == 0:
            status = "  [MISSING]"
        elif count < 4:
            status = "  [LOW]"
        elif count > 30:
            status = "  [OVERLOADED]"
        print(f"Level {lvl:2d}: {count:3d} abilities{status}")
    
    print(f"\nTotal abilities: {len(abilities)}")
    
    print("\n\nPER-CLASS LEVEL DISTRIBUTION:")
    print("-" * 60)
    for cls in classes:
        print(f"\n{cls.upper()}:")
        for lvl in range(1, 31):
            c = class_level_counts[cls][lvl]
            if c > 0 or lvl <= 20:
                marker = " *" if c == 0 and lvl <= 20 else ""
                print(f"  Lv {lvl:2d}: {c:2d}{marker}")
    
    # Identify problem levels
    problem_levels = []
    for lvl in range(2, 31):
        if level_counts[lvl] < 5:
            problem_levels.append(lvl)
    
    print(f"\n\nRECOMMENDED GENERATION TARGETS (levels with < 5 abilities):")
    print(f"  {problem_levels}")
    
    return problem_levels, class_level_counts

def generate_missing_abilities(shop, target_levels, max_per_level=8, dry_run=False):
    """Generate new abilities for the weakest levels using the existing generator logic."""
    from generate_abilities import (
        Settings, process, notify_print, load_shop as _load, save_shop as _save
    )
    
    print(f"\n=== GENERATING MISSING ABILITIES ===")
    print(f"Target levels: {target_levels}")
    print(f"Max per level: {max_per_level}")
    
    classes = list(shop.get("classes", {}).keys())
    
    total_created = 0
    
    for lvl in target_levels:
        print(f"\n--- Level {lvl} ---")
        
        # For each class, check how many abilities exist at this level
        current_at_level = defaultdict(int)
        for a in shop.get("abilities", []):
            if int(a.get("level", 1)) == lvl:
                current_at_level[a.get("class")] += 1
        
        for cls in classes:
            needed = max_per_level - current_at_level[cls]
            if needed <= 0:
                continue
            
            print(f"  {cls}: needs {needed} abilities at level {lvl}")
            
            # Use the existing generator in create mode for this specific level
            settings = Settings(
                mode="create",
                klass=cls,
                count=needed,
                limit=needed,
                temperature=0.7
            )
            
            # We can't easily call the full process here without modifying generate_abilities.py
            # So we'll print instructions instead
            print(f"    → Run: python tools/generate_abilities.py --mode create --class {cls} --count {needed}")
        
        total_created += 1
    
    print(f"\nTotal levels processed: {len(target_levels)}")
    return total_created

def main():
    parser = argparse.ArgumentParser(description="Balance Training Wing abilities")
    parser.add_argument("--analyze", action="store_true", help="Analyze current distribution")
    parser.add_argument("--balance", action="store_true", help="Generate missing abilities")
    parser.add_argument("--target-levels", type=str, default="", help="Comma-separated list of levels to target")
    parser.add_argument("--max-per-level", type=int, default=8, help="Target number of abilities per level per class")
    parser.add_argument("--auto-balance", action="store_true", help="Automatically target levels with < 5 abilities")
    
    args = parser.parse_args()
    
    shop = load_shop()
    
    if args.analyze or not any([args.balance, args.auto_balance]):
        problem_levels, _ = analyze_distribution(shop)
        if not args.balance and not args.auto_balance:
            return
    
    if args.auto_balance:
        problem_levels, _ = analyze_distribution(shop)
        target_levels = problem_levels
    elif args.target_levels:
        target_levels = [int(x.strip()) for x in args.target_levels.split(",") if x.strip()]
    else:
        target_levels = list(range(2, 31))
    
    if args.balance or args.auto_balance:
        generate_missing_abilities(shop, target_levels, args.max_per_level)

if __name__ == "__main__":
    main()