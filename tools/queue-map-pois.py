#!/usr/bin/env python3
"""Queue map POIs as Location stubs for Genkit.
Usage:
  python tools/queue-map-pois.py                      # Show regions and counts
  python tools/queue-map-pois.py mushroom_kingdom     # Queue missing POIs from that region
  python tools/queue-map-pois.py all --limit 50       # Queue up to 50 missing POIs globally
"""

import json
import subprocess
import sys
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]

# 1. Use node to dump POIs
node_script = """
import { MAP_DATA } from './Reputation-Matrix2/data/maps/map-data.js';
const allPois = [];
for (const [mapId, mapData] of Object.entries(MAP_DATA)) {
    if (mapData.pointsOfInterest) {
        for (const poi of mapData.pointsOfInterest) {
            allPois.push({ ...poi, sourceMap: mapId });
        }
    }
}
console.log(JSON.stringify(allPois));
"""

tmp_js = ROOT / "tmp_dump.mjs"
tmp_js.write_text(node_script)

try:
    result = subprocess.run(["node", "--experimental-modules", str(tmp_js)], capture_output=True, text=True, check=True)
    pois = json.loads(result.stdout)
finally:
    tmp_js.unlink(missing_ok=True)

# 2. Read locations
loc_path = ROOT / "Reputation-Matrix2" / "data" / "locations.json"
locs = json.loads(loc_path.read_text(encoding="utf-8"))

existing_ids = {l.get("id") for l in locs if l.get("id")}
existing_names = {str(l.get("name", "")).lower().strip() for l in locs}

target_map = sys.argv[1] if len(sys.argv) > 1 else None
limit = int(sys.argv[3]) if len(sys.argv) > 3 and sys.argv[2] == "--limit" else 0

if not target_map:
    print("Available maps and missing POIs:")
    counts = {}
    for poi in pois:
        name = str(poi.get("name", "")).strip()
        if not name or name.lower() in existing_names or poi.get("id") in existing_ids:
            continue
        sm = poi.get("sourceMap", "unknown")
        counts[sm] = counts.get(sm, 0) + 1
    for sm, c in sorted(counts.items(), key=lambda x: -x[1]):
        print(f"  {sm}: {c}")
    print("\nRun `python tools/queue-map-pois.py <map_id>` to queue them.")
    sys.exit(0)

new_stubs = []
for poi in pois:
    name = str(poi.get("name", "")).strip()
    if not name:
        continue
    sm = poi.get("sourceMap", "unknown")
    if target_map != "all" and sm != target_map:
        continue
        
    if name.lower() in existing_names or poi.get("id") in existing_ids:
        continue
    
    slug = re.sub(r'[^a-z0-9]+', '_', name.lower()).strip('_')
    
    if any(s.get("id") == slug for s in new_stubs):
        continue
        
    stub = {
        "id": slug,
        "name": name,
        "type": "Location",
        "region": poi.get("sourceMap", "Unknown"),
        "status": "Stub — queued for generation",
        "summary": poi.get("description", "A location on the map."),
        "description": "Short",  # triggers auto-expansion in genkit desk.py
        "notableFeatures": [],
        "relatedArticles": [],
        "controllingFaction": poi.get("factionId", "unaligned")
    }
    new_stubs.append(stub)

if not new_stubs:
    print(f"All POIs in {target_map} already have entries in locations.json!")
    sys.exit(0)

if limit and len(new_stubs) > limit:
    new_stubs = new_stubs[:limit]

print(f"Adding {len(new_stubs)} missing POIs from {target_map} as stubs to locations.json.")
locs.extend(new_stubs)
loc_path.write_text(json.dumps(locs, indent=2) + "\n", encoding="utf-8")
print("Done! Start the Locations generator in Genkit to expand them.")
