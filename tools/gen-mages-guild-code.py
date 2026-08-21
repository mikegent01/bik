#!/usr/bin/env python3
"""Fill the Mages' Guild Codex from a local LM Studio server.

JSON stays raw text. This script only appends unique sections. Leave it
running overnight; it writes after every accepted section.

  # LM Studio: Start Server, OpenAI-compatible, default port 1234
  python3 tools/gen-mages-guild-code.py --overnight
  python3 tools/gen-mages-guild-code.py --count 80 --model local-model
  python3 tools/gen-mages-guild-code.py --base-url http://127.0.0.1:1234/v1

Output: Reputation-Matrix2/data/laws/mages-guild-code.json
Reader: mages-code.html
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

BROWSE = [
    ROOT / "Reputation-Matrix2" / "data" / "laws" / "laws-data-mystical.js",
    ROOT / "Reputation-Matrix2" / "data" / "laws" / "legal_data.js",
    ROOT / "Reputation-Matrix2" / "data" / "laws" / "mages-guild-code.json",
]

VOICE = """You draft Mages' Guild law in the voice of a U.S. C.F.R. title, not a novel.

House style (from a filed page):
Part X: Financial and Economic Regulations
(g) Distinction from Permissible Alteration.
(1) General Rule. Transfiguration used for legitimate, disclosed, and non-deceptive purposes shall not constitute a violation.
(2) Disclosure Requirement. Where transfiguration materially affects value, composition, or risk, full and accurate disclosure shall be required.
(3) Burden. The person asserting permissible use shall bear the burden of demonstrating that the alteration does not mislead or affect financial determination.
(h) Cross-References. For general financial fraud and manipulation, see § 1001.1. ...
(i) Historical Annotations. Originally established under C.C.D. 6125, 29 MR 771, Fri. 8, 1818 ...

Rules:
- Idiosyncratic bureaucracy. Funny or boring. Trip players who did not read it.
- Canon: Autumnwood Accords, Conservators vs Innovators, Paradox Trial, Quiet List, Iron Mandate is a rival not Guild law, Wario Coin is not Guild tender, Heartstone rumors are speech not survey, mike is GM not a character.
- Do not invent election tallies. Do not create Grime as a character. Do not dump game JSON into the code.
- Cite other sections as § NNNN.N when you cross-reference.
- One section only. Raw prose in JSON. No markdown. No commentary outside JSON.
"""

SCHEMA = """Return ONLY a JSON object:
{
  "cite": "1001.7",
  "part": "part_x",
  "title": "Catchline in Title Case",
  "body": [
    {"key": "a", "heading": "Scope", "text": "One or two sentences."},
    {"key": "b", "heading": "General Rule", "text": "..."}
  ]
}
part must be one of part_i ... part_xiv.
cite must be new. body: 5–10 subsections. Historical Annotations as last item when it fits.
"""


def load() -> dict:
    return json.loads(OUT.read_text(encoding="utf-8"))


def save(data: dict) -> None:
    data["meta"]["sectionCount"] = len(data.get("sections") or [])
    data["meta"]["approxPages"] = max(0, data["meta"]["sectionCount"] // 2)
    data["meta"]["edition"] = "Local LM Studio compilation. Working."
    tmp = OUT.with_suffix(".json.tmp")
    tmp.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    tmp.replace(OUT)


def norm(s: str) -> str:
    return re.sub(r"\s+", " ", (s or "").lower()).strip()


def fp(sec: dict) -> str:
    texts = [b.get("text") or "" for b in sec.get("body") or []]
    return hashlib.sha1(norm((sec.get("title") or "") + " " + " ".join(texts)).encode()).hexdigest()[:16]


def snippet(path: Path, limit: int = 1800) -> str:
    if not path.exists():
        return ""
    t = path.read_text(encoding="utf-8", errors="replace")
    if path.name == "laws-data-mystical.js":
        i = t.find("mages_guild:")
        if i >= 0:
            t = t[i : i + 2200]
    elif path.name == "legal_data.js":
        i = t.find("arcane:")
        t = t[i : i + 1200] if i >= 0 else t[:1200]
    elif path.name == "mages-guild-code.json":
        data = json.loads(t)
        cites = [s.get("cite") for s in data.get("sections") or []]
        titles = [s.get("title") for s in data.get("sections") or []]
        return "EXISTING CITES: " + ", ".join(cites[-80:]) + "\nEXISTING TITLES: " + "; ".join(titles[-40:])
    return t[:limit]


def pack_context() -> str:
    bits = []
    for p in BROWSE:
        s = snippet(p)
        if s:
            bits.append(f"--- {p.relative_to(ROOT)} ---\n{s}")
    return "\n\n".join(bits)[:8000]


def next_part(n: int) -> str:
    ids = [f"part_{r}" for r in "i ii iii iv v vi vii viii ix x xi xii xiii xiv".split()]
    return ids[n % len(ids)]


def suggest_cite(existing: set[str], n: int) -> str:
    bases = [102, 201, 301, 401, 501, 601, 701, 801, 901, 1001, 1015, 1101, 1201]
    b = bases[n % len(bases)]
    k = 1 + (n // len(bases))
    while f"{b}.{k}" in existing:
        k += 1
    return f"{b}.{k}"


def chat(base: str, model: str, messages: list, timeout: int) -> str:
    url = base.rstrip("/") + "/chat/completions"
    body = json.dumps({
        "model": model,
        "temperature": 0.75,
        "max_tokens": 1200,
        "messages": messages,
    }).encode()
    req = urllib.request.Request(url, data=body, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        data = json.loads(r.read().decode())
    return data["choices"][0]["message"]["content"]


def parse_obj(raw: str) -> dict | None:
    raw = raw.strip()
    raw = re.sub(r"^```(?:json)?\s*", "", raw)
    raw = re.sub(r"\s*```$", "", raw)
    m = re.search(r"\{.*\}", raw, re.S)
    if not m:
        return None
    try:
        o = json.loads(m.group(0))
    except json.JSONDecodeError:
        return None
    if not o.get("cite") or not o.get("title") or not o.get("body"):
        return None
    if not isinstance(o["body"], list):
        return None
    o["part"] = o.get("part") if str(o.get("part") or "").startswith("part_") else "part_x"
    o["source"] = "lmstudio"
    o["body"] = [
        {"key": str(b.get("key") or i + 1), "heading": str(b.get("heading") or "Clause"), "text": str(b.get("text") or "").strip()}
        for i, b in enumerate(o["body"])
        if isinstance(b, dict)
    ]
    o["fp"] = fp(o)
    return o


def list_models(base: str) -> list[str]:
    url = base.rstrip("/") + "/models"
    try:
        with urllib.request.urlopen(url, timeout=10) as r:
            data = json.loads(r.read().decode())
        return [m.get("id") for m in data.get("data") or [] if m.get("id")]
    except Exception:
        return []


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--base-url", default="http://127.0.0.1:1234/v1")
    ap.add_argument("--model", default="", help="LM Studio model id; default = first loaded")
    ap.add_argument("--count", type=int, default=0, help="stop after N new sections (0 = overnight)")
    ap.add_argument("--overnight", action="store_true", help="run until killed; target 400 sections")
    ap.add_argument("--target", type=int, default=400)
    ap.add_argument("--sleep", type=float, default=0.4)
    ap.add_argument("--timeout", type=int, default=180)
    args = ap.parse_args()

    data = load()
    sections = data.setdefault("sections", [])
    cites = {s.get("cite") for s in sections if s.get("cite")}
    fps = {s.get("fp") or fp(s) for s in sections}

    models = list_models(args.base_url)
    model = args.model or (models[0] if models else "")
    if not model:
        print("LM Studio not reachable at", args.base_url, file=sys.stderr)
        print("Start the local server in LM Studio, load a model, then re-run.", file=sys.stderr)
        return 2
    print("model:", model, "existing:", len(sections), file=sys.stderr)

    goal = args.count if args.count > 0 else (args.target if args.overnight or True else 25)
    if args.count == 0 and not args.overnight:
        goal = args.target
    added = 0
    n = 0
    fails = 0
    while added < goal:
        n += 1
        want_cite = suggest_cite(cites, len(sections) + n)
        want_part = next_part(len(sections) + n)
        user = (
            SCHEMA
            + "\nWrite the next unused section. Suggested cite "
            + want_cite
            + " part "
            + want_part
            + ".\nDo not reuse these cites: "
            + ", ".join(sorted(cites)[-60:])
            + "\n\nArchive scrap:\n"
            + pack_context()
        )
        try:
            raw = chat(
                args.base_url,
                model,
                [
                    {"role": "system", "content": VOICE},
                    {"role": "user", "content": user},
                ],
                args.timeout,
            )
        except urllib.error.URLError as e:
            print("wait, server:", e, file=sys.stderr)
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
        sec = parse_obj(raw or "")
        if not sec:
            print("skip: not json", file=sys.stderr)
            fails += 1
            continue
        if sec["cite"] in cites:
            sec["cite"] = want_cite
        if sec["cite"] in cites or sec["fp"] in fps:
            print("skip dup", sec.get("cite"), file=sys.stderr)
            continue
        cites.add(sec["cite"])
        fps.add(sec["fp"])
        sections.append(sec)
        save(data)
        added += 1
        fails = 0
        print(f"+ § {sec['cite']} {sec['title']}  ({len(sections)} total)", file=sys.stderr)
        time.sleep(args.sleep)
    print("done", added, "new ·", len(sections), "total")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
