#!/usr/bin/env python3
"""Fill the Mages' Guild Codex in book order from local LM Studio.

Page 1 is the introduction. The outline is the table of contents.
The model only drafts the next empty slot.

  python3 tools/gen-mages-guild-code.py --init
  python3 tools/gen-mages-guild-code.py --overnight
  python3 tools/gen-mages-guild-code.py --count 5
"""
from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "Reputation-Matrix2" / "data" / "laws" / "mages-guild-code.json"
OUTLINE = ROOT / "Reputation-Matrix2" / "data" / "laws" / "mages-guild-code-outline.json"
BROWSE = [
    ROOT / "Reputation-Matrix2" / "data" / "laws" / "laws-data-mystical.js",
    ROOT / "Reputation-Matrix2" / "data" / "laws" / "legal_data.js",
]

VOICE = """You are a clerk of the Mages' Guild Accords Desk drafting the C.C.D.
You fill ONE assigned slot. You do not skip ahead or rename the catchline.

House style:
(g) Distinction from Permissible Alteration.
(1) General Rule. Transfiguration used for legitimate, disclosed, and non-deceptive purposes shall not constitute a violation.
(2) Disclosure Requirement. Where transfiguration materially affects value, composition, or risk, full and accurate disclosure shall be required.
(3) Burden. The person asserting permissible use shall bear the burden of demonstrating that the alteration does not mislead or affect financial determination.
(h) Cross-References. For general financial fraud and manipulation, see § 1001.1.
(i) Historical Annotations. Originally established under C.C.D. 6125, 29 MR 771, Fri. 8, 1818 ...

If this slot is intro (§ 1.x), write opening-code prose: short title, who is bound, shall/may, other law. Not a market scheme.

Canon: Autumnwood Accords; Conservators vs Innovators; Paradox Trial; Quiet List; Iron Mandate is rival law; Wario Coin is not tender; Heartstone is speech until surveyed; mike is GM not a character; no Grime office; no invented vote tallies.

Idiosyncratic bureaucracy. Funny or boring. Trip players. JSON only. No markdown.
"""


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def save(data: dict) -> None:
    filled = sum(1 for s in data.get("sections") or [] if (s.get("body") or []))
    data["meta"]["sectionCount"] = filled
    data["meta"]["approxPages"] = max(0, filled // 2)
    data["meta"]["edition"] = "Working compilation. Slots in book order."
    tmp = OUT.with_suffix(".json.tmp")
    tmp.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    tmp.replace(OUT)


def slots() -> list[dict]:
    return list(load_json(OUTLINE).get("slots") or [])


def ensure_book(data: dict) -> None:
    data["parts"] = [
        {"id": "front", "roman": "0", "title": "Front Matter — Title, Reading, and Persons Bound", "blurb": "Start here. This is page 1."},
        {"id": "part_i", "roman": "I", "title": "Organization, Seals, and Who May Speak for the Guild", "blurb": ""},
        {"id": "part_ii", "roman": "II", "title": "Licensure, Apprentices, and Temporary Mouths", "blurb": ""},
        {"id": "part_iii", "roman": "III", "title": "Spell Classification, Schedules, and Quiet Lists", "blurb": ""},
        {"id": "part_iv", "roman": "IV", "title": "Research Permits, Pocket Dimensions, and Borrowed Hours", "blurb": ""},
        {"id": "part_v", "roman": "V", "title": "Field Use, Public Safety, and Unscheduled Weather", "blurb": ""},
        {"id": "part_vi", "roman": "VI", "title": "Contracts with Non-Casters, Familiars, and Constructs", "blurb": ""},
        {"id": "part_vii", "roman": "VII", "title": "Evidence, Memory, and What a Scry May Not Keep", "blurb": ""},
        {"id": "part_viii", "roman": "VIII", "title": "Discipline, Seals, Duels, and Pocket-Prison Procedure", "blurb": ""},
        {"id": "part_ix", "roman": "IX", "title": "Reporting, Ledgers, and the Duty to File Before Casting", "blurb": ""},
        {"id": "part_x", "roman": "X", "title": "Financial and Economic Regulations", "blurb": "How magic may touch value, composition, risk, and the ledger."},
        {"id": "part_xi", "roman": "XI", "title": "Endowments, Relics, and Gifts That Later Move", "blurb": ""},
        {"id": "part_xii", "roman": "XII", "title": "Transit Stamps, Planar Tolls, and Corridor Courtesy", "blurb": ""},
        {"id": "part_xiii", "roman": "XIII", "title": "Penalties, Fees, and the Schedule of Unpleasantness", "blurb": ""},
        {"id": "part_xiv", "roman": "XIV", "title": "Historical Annotations, Savings Clauses, and Dead Citations", "blurb": ""},
    ]
    have = {s.get("cite"): s for s in data.get("sections") or []}
    ordered = []
    for sl in slots():
        cur = have.get(sl["cite"]) or {
            "cite": sl["cite"], "part": sl["part"], "title": sl["title"],
            "kind": sl.get("kind") or "section", "brief": sl.get("brief") or "",
            "status": "reserved", "body": [],
        }
        cur["part"] = sl["part"]
        cur["title"] = sl["title"]
        cur["brief"] = sl.get("brief") or cur.get("brief") or ""
        if not cur.get("body"):
            cur["status"] = "reserved"
        ordered.append(cur)
    known = {sl["cite"] for sl in slots()}
    extra = [s for s in data.get("sections") or [] if s.get("cite") not in known]
    data["sections"] = ordered + extra


def next_empty(data: dict) -> dict | None:
    for s in data.get("sections") or []:
        if not (s.get("body") or []):
            return s
    return None


def next_forever_slot(data: dict) -> dict:
    last = (data.get("sections") or [])[-1]
    part = last.get("part") or "part_xiv"
    m = re.match(r"^(\d+)\.(\d+)$", str(last.get("cite") or "1401.3"))
    major = int(m.group(1)) if m else 1401
    minor = int(m.group(2)) + 1 if m else 4
    cite = f"{major}.{minor}"
    existing = {s.get("cite") for s in data["sections"]}
    while cite in existing:
        minor += 1
        cite = f"{major}.{minor}"
    slot = {
        "cite": cite, "part": part, "title": "Continuation; Additional Requirements",
        "kind": "forever", "status": "reserved", "body": [],
        "brief": "Continue this Part. New catchline. Do not repeat a prior title. C.F.R. voice.",
    }
    data["sections"].append(slot)
    return slot


def pack_context(data: dict, current: dict) -> str:
    bits = []
    for p in BROWSE:
        if not p.exists():
            continue
        t = p.read_text(encoding="utf-8", errors="replace")
        if p.name == "laws-data-mystical.js":
            i = t.find("mages_guild:")
            t = t[i:i + 1800] if i >= 0 else t[:800]
        elif p.name == "legal_data.js":
            i = t.find("arcane:")
            t = t[i:i + 900] if i >= 0 else t[:800]
        bits.append(t[:1800])
    prior = []
    for s in data.get("sections") or []:
        if s.get("cite") == current.get("cite"):
            break
        if s.get("body"):
            prior.append(f"§ {s['cite']} {s['title']}")
    bits.append("ALREADY FILED: " + "; ".join(prior[-40:]))
    return "\n\n".join(bits)[:7000]


def fp(sec: dict) -> str:
    texts = [b.get("text") or "" for b in sec.get("body") or []]
    blob = re.sub(r"\s+", " ", ((sec.get("title") or "") + " " + " ".join(texts)).lower())
    return hashlib.sha1(blob.encode()).hexdigest()[:16]


def parse_obj(raw: str) -> dict | None:
    raw = (raw or "").strip()
    raw = re.sub(r"^```(?:json)?\s*", "", raw)
    raw = re.sub(r"\s*```$", "", raw)
    m = re.search(r"\{.*\}", raw, re.S)
    if not m:
        return None
    try:
        o = json.loads(m.group(0))
    except json.JSONDecodeError:
        return None
    body = o.get("body")
    if not isinstance(body, list) or not body:
        return None
    clean = []
    for i, b in enumerate(body):
        if not isinstance(b, dict):
            continue
        text = str(b.get("text") or "").strip()
        if not text:
            continue
        clean.append({"key": str(b.get("key") or i + 1), "heading": str(b.get("heading") or "Clause"), "text": text})
    if len(clean) < 3:
        return None
    o["body"] = clean
    return o


def chat(base: str, model: str, messages: list, timeout: int) -> str:
    url = base.rstrip("/") + "/chat/completions"
    payload = json.dumps({"model": model, "temperature": 0.65, "max_tokens": 1400, "messages": messages}).encode()
    req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        data = json.loads(r.read().decode())
    return data["choices"][0]["message"]["content"]


def list_models(base: str) -> list[str]:
    try:
        with urllib.request.urlopen(base.rstrip("/") + "/models", timeout=10) as r:
            data = json.loads(r.read().decode())
        return [m.get("id") for m in data.get("data") or [] if m.get("id")]
    except Exception:
        return []


def fill_prompt(data: dict, slot: dict) -> str:
    return f"""Fill ONLY this slot. Keep cite and title exactly.

cite: {slot['cite']}
part: {slot['part']}
title: {slot['title']}
instruction: {slot.get('brief') or ''}
kind: {slot.get('kind') or 'section'}

Return ONLY JSON:
{{
  "cite": "{slot['cite']}",
  "part": "{slot['part']}",
  "title": "{slot['title']}",
  "body": [
    {{"key": "a", "heading": "Scope", "text": "..."}},
    {{"key": "b", "heading": "General Rule", "text": "..."}}
  ]
}}

5–9 subsections. Last item may be Cross-References or Historical Annotations.
If kind is intro, write opening-code prose, not a market scheme.

Archive scrap:
{pack_context(data, slot)}
"""


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--init", action="store_true")
    ap.add_argument("--base-url", default="http://127.0.0.1:1234/v1")
    ap.add_argument("--model", default="")
    ap.add_argument("--count", type=int, default=0)
    ap.add_argument("--overnight", action="store_true")
    ap.add_argument("--target", type=int, default=400)
    ap.add_argument("--sleep", type=float, default=0.4)
    ap.add_argument("--timeout", type=int, default=180)
    args = ap.parse_args()

    data = load_json(OUT)
    ensure_book(data)
    save(data)
    if args.init:
        print("reserved", len(data["sections"]), "slots · first empty", (next_empty(data) or {}).get("cite"))
        return 0

    models = list_models(args.base_url)
    model = args.model or (models[0] if models else "")
    if not model:
        print("LM Studio not reachable at", args.base_url, file=sys.stderr)
        print("Start the server, then re-run. Outline is already in the JSON.", file=sys.stderr)
        return 2
    print("model:", model, file=sys.stderr)

    goal = args.count if args.count > 0 else args.target
    added = 0
    fails = 0
    fps = {s.get("fp") for s in data["sections"] if s.get("fp")}
    while added < goal:
        slot = next_empty(data) or next_forever_slot(data)
        try:
            raw = chat(
                args.base_url, model,
                [{"role": "system", "content": VOICE}, {"role": "user", "content": fill_prompt(data, slot)}],
                args.timeout,
            )
        except urllib.error.URLError as e:
            print("wait:", e, file=sys.stderr)
            fails += 1
            if fails > 30:
                return 3
            time.sleep(5)
            continue
        except Exception as e:
            print("err", e, file=sys.stderr)
            fails += 1
            time.sleep(2)
            continue
        obj = parse_obj(raw)
        if not obj:
            print("skip: not json", slot["cite"], file=sys.stderr)
            fails += 1
            continue
        digest = fp({"title": slot["title"], "body": obj["body"]})
        if digest in fps:
            print("skip dup prose", slot["cite"], file=sys.stderr)
            continue
        slot["body"] = obj["body"]
        slot["status"] = "filed"
        slot["source"] = "lmstudio"
        slot["fp"] = digest
        fps.add(digest)
        save(data)
        added += 1
        fails = 0
        print(f"+ § {slot['cite']} {slot['title']}  ({added}/{goal})", file=sys.stderr)
        time.sleep(args.sleep)
    print("done", added)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
