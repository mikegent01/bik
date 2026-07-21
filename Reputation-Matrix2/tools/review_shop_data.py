#!/usr/bin/env python3
"""One command to review both item records and the vendor database."""
from __future__ import annotations
import subprocess, sys
from pathlib import Path
TOOLS = Path(__file__).resolve().parent

def run(script: str) -> int:
    return subprocess.call([sys.executable, str(TOOLS / script)], cwd=TOOLS.parent)

print('=== Wario Shop: item review ===')
item_status = run('enrich_shop_items.py')
print('\n=== Wario Shop: vendor database review ===')
vendor_status = run('enrich_vendors.py')
raise SystemExit(item_status or vendor_status)
