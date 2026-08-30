#!/usr/bin/env python3
"""Generate source-aware location cards without replacing hand-written locations.

New records are appended only after strict validation and are marked generated.
Use --check to audit the existing file before generating anything.
"""
from __future__ import annotations
import argparse, json, re
from datetime import datetime, timezone
from pathlib import Path
import sys
sys.path.insert(0, str(Path(__file__).resolve().parent))
from genkit.client import LMStudioClient
from genkit.storage import atomic_write_json

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "data" / "locations.json"
REQUIRED = {"id", "name", "type", "region", "status", "summary", "description", "notableFeatures", "relatedArticles"}

def load():
    data = json.loads(PATH.read_text(encoding="utf-8"))
    if not isinstance(data, list): raise ValueError("locations.json must be a list")
    return data

def validate(row, existing):
    if not isinstance(row, dict): raise ValueError("location must be an object")
    missing = REQUIRED - row.keys()
    if missing: raise ValueError("missing " + ", ".join(sorted(missing)))
    if not re.fullmatch(r"[a-z0-9]+(?:_[a-z0-9]+)*", str(row["id"])): raise ValueError("id must be snake_case")
    if row["id"] in {x.get("id") for x in existing}: raise ValueError("duplicate id")
    for key in ("name", "type", "region", "status", "summary", "description"):
        if not isinstance(row[key], str) or len(row[key].strip()) < 3: raise ValueError(key + " is too short")
    if len(row["description"]) < 240: raise ValueError("description must be at least 240 characters")
    if not isinstance(row["notableFeatures"], list) or len(row["notableFeatures"]) < 3: raise ValueError("need 3 notableFeatures")
    if not isinstance(row["relatedArticles"], list): raise ValueError("relatedArticles must be a list")
    if "_generated" not in row or row.get("status") != "Generated — review": raise ValueError("missing generated review marker")

def prompt(existing, region):
    names = ", ".join(str(x.get("name")) for x in existing[-80:])
    system = """You are a careful Waluipedia location archivist. Return exactly one JSON object and no markdown. Create a NEW source-compatible location card, not a faction, person, event, or battle. Do not invent real-world canon. It must be clearly marked as a draft for review by the caller."""
    user = f'''Current location names (do not repeat): {names}
Requested region/theme: {region or "an underrepresented region in the existing archive"}
Return these keys exactly: id (lowercase snake_case), name, type, region, status, summary, description, notableFeatures (array of 3-5 strings), relatedArticles (array of existing or plausible archive ids), population, climate, controllingFaction. Description must be 240-900 characters and use only claims grounded in the supplied archive context or clearly label uncertainty. Keep the setting's existing style.'''
    return system, user

def main():
    ap=argparse.ArgumentParser(description="Append validated generated locations")
    ap.add_argument("--check", action="store_true")
    ap.add_argument("--count", type=int, default=1)
    ap.add_argument("--region", default="")
    ap.add_argument("--endpoint", default="http://127.0.0.1:1234/v1/chat/completions")
    ap.add_argument("--model", default="")
    ap.add_argument("--temperature", type=float, default=.65)
    ap.add_argument("--dry-run", action="store_true")
    a=ap.parse_args(); rows=load()
    errors=[]
    for i,row in enumerate(rows):
        try:
            if not isinstance(row,dict): raise ValueError("not an object")
            if not REQUIRED <= row.keys(): raise ValueError("missing required fields")
        except ValueError as e: errors.append(f"row {i}: {e}")
    if a.check or errors:
        print(f"locations: {len(rows)} records; {len(errors)} validation errors")
        for e in errors: print("ERROR",e)
        if a.check: return 1 if errors else 0
    if a.count < 1 or a.count > 100: ap.error("--count must be 1..100")
    client=LMStudioClient(a.endpoint,a.model,240)
    added=[]
    for _ in range(a.count):
        raw=client.complete_json(*prompt(rows,a.region), temperature=a.temperature)
        raw.update({"status":"Generated — review", "_generated":{"by":"tools/genkit","system":"locations-new","model":a.model or "lm-studio","at":datetime.now(timezone.utc).isoformat(timespec="seconds")}})
        validate(raw,rows)
        added.append(raw); rows.append(raw)
    if not a.dry_run:
        atomic_write_json(PATH, rows)
    print(json.dumps({"added":len(added),"dryRun":a.dry_run,"locations":added},ensure_ascii=False,indent=2))
    return 0
if __name__ == "__main__": raise SystemExit(main())
