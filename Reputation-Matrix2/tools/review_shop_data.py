#!/usr/bin/env python3
"""One command to review both item records and the vendor database."""
from __future__ import annotations
import argparse
import subprocess
import sys
from pathlib import Path

TOOLS = Path(__file__).resolve().parent
parser = argparse.ArgumentParser(description="Review item and vendor data as one job.")
parser.add_argument("--review-mode", choices=("all", "unchecked", "stale"), default="all")
parser.add_argument("--stale-days", type=int, default=30)
parser.add_argument("--limit", type=int, default=0)
args = parser.parse_args()

def run(script: str, *extra: str) -> int:
    return subprocess.call([sys.executable, str(TOOLS / script), *extra], cwd=TOOLS.parent)

print(f'=== Wario Shop: item review ({args.review_mode}; all 84 split item chunks) ===', flush=True)
item_status = run('enrich_shop_items.py', '--review-mode', args.review_mode, '--stale-days', str(args.stale_days), '--limit', str(args.limit))
print('\n=== Wario Shop: vendor database review ===', flush=True)
vendor_status = run('enrich_vendors.py', '--limit', str(args.limit))
raise SystemExit(item_status or vendor_status)
