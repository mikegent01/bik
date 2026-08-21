#!/usr/bin/env python3
"""Generate hyperlinked Mages' Guild forms from the Codex, with strict JSON validation.

The Codex references forms (e.g. Form 400-A for §400.1 Research Permits).
This tool materializes them as structured JSON so mages-code.html can hyperlink
to the actual form instead of leaving a dead citation.

Why this won't produce invalid JSON:
- LLM is asked for JSON with an explicit schema and `response_format: json_object` where available.
- Output is parsed with json.loads; on failure we retry up to 3× with a repair prompt that shows the parser error.
- Final output is validated against a tiny schema (required keys, field types) before any write.
- Writes are atomic via .tmp → replace, never half-written.

Forms live at: Reputation-Matrix2/data/laws/mages-forms.json
Seed: if that file doesn't exist, we create Form MG-400A for §400.1 so the Codex has at least one live link to demo.

Linking: mages-code.html fetches this file and turns `Form 400-A` / `MG-400A` into
`<a class="ref form-ref" href="#form-MG-400A">` that opens a modal with the form's
fields. Also indexed into main search via index.html's loadMagesIntoSearch (patched to include forms).

Usage:
  python tools/gen-mages-forms.py --list
  python tools/gen-mages-forms.py --dry-run
  python tools/gen-mages-forms.py --generate --cite 400.1 --id MG-400A
  python tools/gen-mages-forms.py --generate --all --dry-run
  python tools/gen-mages-forms.py --generate --all  # generates missing forms for every § that should have one
"""
from __future__ import annotations
import argparse, json, re, sys, time, urllib.request, urllib.error
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(Path(__file__).resolve().parent))
from lore_search import cards_for_slot

OUT = ROOT / "Reputation-Matrix2" / "data" / "laws" / "mages-forms.json"
CODE = ROOT / "Reputation-Matrix2" / "data" / "laws" / "mages-guild-code.json"

FORM_SCHEMA_REQUIRED = {"id","cite","title","status","fields"}
FORM_STATUS = {"active","archived","proposed"}

# Which cites should have forms? From the Codex outline.
WANT_FORMS = {
    "400.1": "MG-400A",  # Research Permits — Form, fee, who signs
    "400.2": "MG-400B",  # Pocket Dimensions as Labs
    "900.1": "MG-900A",  # Duty to File Before Casting
    "900.2": "MG-900B",  # Reporting of Material Enchantments
    "600.5": "MG-600A",  # Summoned Notary
    "1201.1": "MG-1201A", # Transit Stamps
}

def load_json(path: Path, default=None):
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8"))

def save(data: dict):
    tmp = OUT.with_suffix(".json.tmp")
    tmp.write_text(json.dumps(data, indent=2, ensure_ascii=False)+"\n", encoding="utf-8")
    tmp.replace(OUT)

def ensure_seed():
    if OUT.exists():
        return
    seed = {
        "meta": {"title": "Mages' Guild Forms Registry", "note": "Hyperlinked from mages-code.html § references. Validated JSON."},
        "forms": [{
            "id": "MG-400A",
            "cite": "400.1",
            "title": "Research Permit Application — High-Density Mana & Restricted Schools",
            "status": "active",
            "fee": "5 Guild Marks (non-refundable)",
            "authority": "Accords Desk Clerk (Innovator co-sign required for Schedule B)",
            "description": "Application for research permits under §400.1. File before casting. One permit per project; pocket-lab hours count as hours for the other party per §400.2.",
            "instructions": "Complete all fields, attach fee receipt, obtain Clerk stamp. For Schedule B arts also obtain Innovator chair co-sign per §300.2. False statements are spoliation per §700.3.",
            "fields": [
                {"name":"applicant_name","label":"Applicant (licensed mage)","type":"text","required":True},
                {"name":"license_number","label":"Guild License #","type":"text","required":True},
                {"name":"project_title","label":"Project Title","type":"text","required":True},
                {"name":"schedule","label":"Schedule (A/B/C)","type":"select","options":["A - Ordinary","B - Restricted","C - Quiet List (proposed)"],"required":True},
                {"name":"pocket_lab","label":"Pocket dimension as lab? (hours count per §400.2)","type":"checkbox","required":False},
                {"name":"specimen","label":"Specimen custody declaration (§400.4)","type":"textarea","required":False},
                {"name":"fee_receipt","label":"Fee Receipt #","type":"text","required":True},
                {"name":"oath","label":"Oath: I file before casting per §900.1","type":"checkbox","required":True}
            ],
            "crossRefs": ["400.1","400.2","300.2","900.1","700.3"],
            "filed": "Autumnwood Accords Desk",
            "formUrl": "#form-MG-400A"
        }]
    }
    save(seed)
    print(f"seeded {OUT} with MG-400A")

def validate_form(f: dict, seen_ids: set) -> list[str]:
    errs=[]
    if not isinstance(f, dict):
        return ["form is not an object"]
    for k in FORM_SCHEMA_REQUIRED:
        if k not in f:
            errs.append(f"missing required key: {k}")
    if "id" in f:
        if not re.match(r"^MG-[0-9]+[A-Z]$", f["id"]):
            errs.append(f"id {f['id']!r} must match MG-400A")
        if f["id"] in seen_ids:
            errs.append(f"duplicate id {f['id']}")
    if "cite" in f and not re.match(r"^\d+\.\d+$", str(f["cite"])):
        errs.append(f"cite {f['cite']!r} must be like 400.1")
    if "status" in f and f["status"] not in FORM_STATUS:
        errs.append(f"status {f['status']!r} not in {FORM_STATUS}")
    if "fields" in f:
        if not isinstance(f["fields"], list) or not f["fields"]:
            errs.append("fields must be non-empty list")
        else:
            for i, fld in enumerate(f["fields"]):
                if not isinstance(fld, dict):
                    errs.append(f"field {i} not an object")
                    continue
                for rk in ("name","label","type"):
                    if rk not in fld:
                        errs.append(f"field {i} missing {rk}")
                if fld.get("type") not in {"text","textarea","select","checkbox","date","number"}:
                    errs.append(f"field {i} bad type {fld.get('type')!r}")
                if fld.get("type")=="select" and not fld.get("options"):
                    errs.append(f"field {i} select needs options")
    return errs

VOICE_FORM = """You are the Accords Desk forms clerk. Output STRICT JSON for ONE form.

Schema (all keys required unless noted):
{
  "id": "MG-400A",          // must match cited id, format MG-<cite without dot><letter>
  "cite": "400.1",
  "title": "Human readable title",
  "status": "active",        // active/archived/proposed
  "fee": "5 Guild Marks — ...",
  "authority": "Who stamps it",
  "description": "1 sentence what the form is for, citing the Codex section",
  "instructions": "2-3 sentences how to file it, what happens if false",
  "fields": [
    {"name":"snake_case","label":"Human Label","type":"text|textarea|select|checkbox|date|number","required":true|false, "options":["A","B"] if select}
  ],
  "crossRefs": ["400.1","900.1"] // 2-4 § cites this form bridges
}
Rules: cite only filed sections from the provided cite index. Keep fees in Guild Marks, never Wario Coin. 4-8 fields. No markdown, no commentary, JUST the JSON object.
"""

def build_context(cite: str, fid: str) -> str:
    code = load_json(CODE, {})
    sections = code.get("sections",[]) if isinstance(code, dict) else []
    rec = next((s for s in sections if s.get("cite")==cite), None)
    title = rec.get("title","") if rec else ""
    brief = rec.get("brief","") if rec else ""
    # cite index for crossRefs
    idx = ", ".join(f"§{s.get('cite')} {s.get('title')}" for s in sections[:40])
    cards = cards_for_slot(f"{fid} {title}", brief)
    return f"Form {fid} for §{cite} {title} — {brief}\nCite index (use only these): {idx}\nCards:\n{cards}"

def chat_json(base: str, model: str, prompt: str, timeout: int, retries=3) -> dict:
    last_err=""
    for attempt in range(retries):
        msg = prompt + (f"\n\nPrevious output failed JSON parse: {last_err}\nOutput ONLY the JSON object, no prose. No markdown, no code fences." if last_err else "")
        # Try with response_format first; if server returns 400 (e.g. qwen3.5-9b-roleplay doesn't support json_object), fall back without it
        for use_json_mode in [True, False]:
            payload_dict={
                "model": model,
                "temperature": 0.3,
                "max_tokens": 2048,
                "messages": [
                    {"role":"system","content": VOICE_FORM},
                    {"role":"user","content": msg}
                ]
            }
            if use_json_mode:
                payload_dict["response_format"]={"type":"json_object"}
            payload = json.dumps(payload_dict).encode()
            try:
                req = urllib.request.Request(base.rstrip("/")+"/chat/completions", data=payload, headers={"Content-Type":"application/json"})
                with urllib.request.urlopen(req, timeout=timeout) as r:
                    data=json.loads(r.read().decode())
                raw=data["choices"][0]["message"]["content"]
                # strip code fences if model wrapped it
                raw=re.sub(r"^```(?:json)?\s*", "", raw.strip())
                raw=re.sub(r"\s*```$", "", raw.strip())
                # extract JSON object if wrapped in prose
                m=re.search(r"\{.*\}", raw, flags=re.S)
                if m: raw=m.group(0)
                obj=json.loads(raw)
                return obj
            except urllib.error.HTTPError as e:
                body=""
                try: body=e.read().decode()[:300]
                except: pass
                # 400 with json_object is the known incompatibility for qwen3.5-9b-roleplay-merged-i1
                if e.code==400 and use_json_mode and "response_format" in body.lower() or "response_format" in str(e).lower() or e.code==400 and use_json_mode:
                    # retry without json mode, don't count as attempt failure
                    last_err=f"HTTP 400 with json_object (model doesn't support it), retrying without: {body[:120]}"
                    continue
                last_err=f"HTTP {e.code}: {body[:200]}"
                break
            except Exception as e:
                last_err=str(e)[:400]
                break
        time.sleep(0.8)
    raise RuntimeError(f"JSON generation failed after {retries}: {last_err}")

def list_models(base: str):
    try:
        with urllib.request.urlopen(base.rstrip("/")+ "/models", timeout=10) as r:
            return [m.get("id") for m in json.loads(r.read().decode()).get("data") or [] if m.get("id")]
    except: return []

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("--list", action="store_true", help="list forms in registry")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--generate", action="store_true", help="generate one or all missing forms")
    ap.add_argument("--all", action="store_true", help="generate all missing forms from WANT_FORMS")
    ap.add_argument("--cite", help="specific cite like 400.1")
    ap.add_argument("--id", dest="fid", help="form id like MG-400A")
    ap.add_argument("--base-url", default="http://127.0.0.1:1234/v1")
    ap.add_argument("--model", default="")
    ap.add_argument("--timeout", type=int, default=180)
    args=ap.parse_args()

    ensure_seed()
    data=load_json(OUT, {"forms":[]})
    forms=data.get("forms",[])

    if args.list:
        for f in forms:
            print(f"{f.get('id'):10} §{f.get('cite'):6} {f.get('title')[:50]} [{f.get('status')}] {len(f.get('fields',[]))} fields")
        print(f"total {len(forms)} forms in {OUT}")
        return 0

    if not args.generate:
        if args.dry_run:
            missing=[(c,f) for c,f in WANT_FORMS.items() if f not in {x.get('id') for x in forms}]
            print(f"registry: {len(forms)} forms, want {len(WANT_FORMS)} — missing {len(missing)}: {missing}")
            print("dry-run would generate:", ", ".join(f"{c}->{fid}" for c,fid in missing[:3]))
            return 0
        ap.print_help()
        return 2

    # Determine targets
    if args.all:
        targets=[(c,f) for c,f in WANT_FORMS.items() if f not in {x.get('id') for x in forms}]
        if not targets:
            print("all forms already present")
            return 0
    elif args.cite and args.fid:
        targets=[(args.cite, args.fid)]
    else:
        print("need --all or --cite + --id")
        return 2

    if args.dry_run:
        print(f"dry-run would generate {len(targets)} forms: {targets}")
        return 0

    models=list_models(args.base_url)
    model=args.model or (models[0] if models else "")
    if not model:
        print(f"LM Studio not reachable at {args.base_url}", file=sys.stderr)
        return 2
    print(f"model: {model} generating {len(targets)} forms", file=sys.stderr)

    seen={f.get("id") for f in forms}
    for cite,fid in targets:
        ctx=build_context(cite, fid)
        for attempt in range(3):
            try:
                obj=chat_json(args.base_url, model, ctx, args.timeout)
                # coerce id/cite to requested
                obj["id"]=fid
                obj["cite"]=cite
                errs=validate_form(obj, seen)
                if errs:
                    raise ValueError("schema: "+"; ".join(errs))
                forms.append(obj)
                seen.add(fid)
                data["forms"]=forms
                save(data)
                print(f"form {fid} §{cite} {obj.get('title')} — {len(obj.get('fields',[]))} fields ✓")
                break
            except Exception as e:
                print(f"retry {fid} attempt {attempt+1}: {e}", file=sys.stderr)
                if attempt==2:
                    print(f"skip {fid}: {e}", file=sys.stderr)
                time.sleep(0.5)
        time.sleep(0.4)

    return 0

if __name__=="__main__":
    raise SystemExit(main())
