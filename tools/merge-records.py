#!/usr/bin/env python3
"""Merge a duplicate record into a primary record.
Usage:
  python tools/merge-records.py <dataset> <primary_id> <duplicate_id>
Example:
  python tools/merge-records.py locations the_mushroom_capitol ruins_of_the_mushroom_capitol
"""

import json
import sys
from pathlib import Path

if len(sys.argv) < 4:
    print(__doc__)
    sys.exit(1)

dataset = sys.argv[1]
primary_id = sys.argv[2]
duplicate_id = sys.argv[3]

ROOT = Path(__file__).resolve().parents[1]
data_dir = ROOT / "Reputation-Matrix2" / "data"
json_path = data_dir / f"{dataset}.json"

if not json_path.exists():
    print(f"Error: {json_path} does not exist.")
    sys.exit(1)

records = json.loads(json_path.read_text(encoding="utf-8"))

primary = None
duplicate = None
dup_idx = -1

for i, r in enumerate(records):
    if r.get("id") == primary_id:
        primary = r
    elif r.get("id") == duplicate_id:
        duplicate = r
        dup_idx = i

if not primary:
    print(f"Error: Primary ID '{primary_id}' not found.")
    sys.exit(1)
if not duplicate:
    print(f"Error: Duplicate ID '{duplicate_id}' not found.")
    sys.exit(1)

print(f"Merging '{duplicate.get('name')}' into '{primary.get('name')}'...")

# Combine text fields safely
if duplicate.get("description"):
    primary["description"] = primary.get("description", "") + "\n\n### Additional Lore\n" + duplicate["description"]

if isinstance(primary.get("relatedArticles"), list) and isinstance(duplicate.get("relatedArticles"), list):
    primary["relatedArticles"] = list(set(primary["relatedArticles"] + duplicate["relatedArticles"]))

# Remove the duplicate
records.pop(dup_idx)

# Append redirect/merged notice to primary
if not primary.get("status"):
    primary["status"] = "Active"
primary["status"] = str(primary["status"]) + f" (Merged with {duplicate_id})"

json_path.write_text(json.dumps(records, indent=2) + "\n", encoding="utf-8")
print(f"Successfully merged. '{duplicate_id}' has been removed from {dataset}.json.")
