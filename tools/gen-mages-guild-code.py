#!/usr/bin/env python3
"""Fill the Mages' Guild Codex in book order from local LM Studio.

Page 1 is the introduction. The outline is the table of contents.
Water-level fill: draft every empty §, then raise the shortest band
together (round-robin). Nobody hits 50 while another still sits at 8.
New §§ only when min(all) >= --min-clauses.

  python3 tools/gen-mages-guild-code.py --init
  python3 tools/gen-mages-guild-code.py --status
  python3 tools/gen-mages-guild-code.py --overnight
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
import signal
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from lore_search import cards_for_slot, format_cards, invalidate as lore_invalidate, parse_need_lines, refer_ccd, search as lore_lookup

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "Reputation-Matrix2" / "data" / "laws" / "mages-guild-code.json"
OUTLINE = ROOT / "Reputation-Matrix2" / "data" / "laws" / "mages-guild-code-outline.json"
PROGRESS = ROOT / "Reputation-Matrix2" / "data" / "laws" / "mages-guild-code-progress.json"
BROWSE = [
    ROOT / "Reputation-Matrix2" / "data" / "laws" / "laws-data-mystical.js",
    ROOT / "Reputation-Matrix2" / "data" / "laws" / "legal_data.js",
    ROOT / "Reputation-Matrix2" / "factions" / "midlands.js",
]

LORE = """
FILED LORE (use these names; do not invent a new Guild):
- Body: Autumnwood Accords. Hall: Autumn Wood, Midlands. Sovereign: Archmage Veyra (mediates).
- Conservators: Archmage Theron, stability, forbidden schools.
- Innovators: Janna Brightspark, restricted research with permission.
- Aegis Magi enforce the dominant faction.
- Paradox Trial: peers; seal magic or pocket-prison. Not a street duel unless scheduled.
- Quiet List: not a public catalogue. Do not recite in taverns.
- Opponents: Regal Empire, Iron Legion, Silver Flame, Cosmic Jesters. Ally: Goodstyle Artisans.
- Iron Mandate is Empire/Legion law, not this Codex. Wario Coin is not Guild tender.
- Archie Miser: Provisional Guild Pass (politics vs Mandate). Titan growth on Markop = unauthorized field use.
- Heartstone / rift: speech until surveyed. One-T cartography is a map, not a raid license.
- mike is GM, not a person bound. No Grime office.
"""

VOICE = """You are a clerk of the Mages' Guild Accords Desk writing a bound code book, not a bullet list.

Each answer is ONE topic written as 1 or 2 pages of continuous legal prose (about 350–700 words). Paragraphs. Cross-references like § 1.6. Shall/may. It should read if someone opened a statute book, not a flash-card.
If a rule is already filed, write "see § 1.6" and move on. Do not reprint § 1.1 through § 1.10 inside a later catchline.

Cross-reference rule: every page MUST contain 2–4 explicit citations to other filed sections in the form "see § X.Y" or "under § X.Y". Prefer sibling Parts but also cite foundational §§ 1.4–1.9 where the topic touches persons, seals, or construction. A page with zero § cites will be rejected.

Output format:
PAGE Title of this topic
Then paragraphs. Blank line between paragraphs. No Heading | sentence lines. No JSON. No chat.

Most pages stay generic bureaucratic law. Use ARCHIVE CARDS only when they actually fit.
Canon: Autumnwood Accords; Veyra; Conservators (Theron); Innovators (Brightspark); Paradox Trial; Quiet List; Iron Mandate is rival law; Wario Coin is not tender; mike is not a character.
If you need one fact: NEED: short query — then wait; do not stop the page early.
"""


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


CITE_RE = re.compile(r"§\s*(\d+\.\d+(?:\.\d+)?)")

def extract_cites(text: str) -> list[str]:
    return CITE_RE.findall(text or "")

def normalize_cite(c: str) -> str:
    return re.sub(r"\s+", "", c.strip())

def build_ref_index(data: dict) -> dict[str, dict]:
    """cite -> {title, part, brief} for every filed section."""
    idx: dict[str, dict] = {}
    for s in data.get("sections") or []:
        cite = str(s.get("cite") or "").strip()
        if not cite:
            continue
        idx[cite] = {"title": s.get("title") or "", "part": s.get("part") or "", "brief": s.get("brief") or "", "n": len(s.get("body") or [])}
    return idx

def enrich_references(data: dict) -> int:
    """Populate body[].refs and section .refs / .unresolved for larger-section cross-reference.
    Returns count of distinct cited targets."""
    idx = build_ref_index(data)
    seen: set[str] = set()
    for sec in data.get("sections") or []:
        sec_refs: set[str] = set()
        sec_unresolved: set[str] = set()
        for b in sec.get("body") or []:
            cites = [normalize_cite(c) for c in extract_cites(b.get("text") or "")]
            # also scan heading
            cites += [normalize_cite(c) for c in extract_cites(b.get("heading") or "")]
            uniq = []
            for c in cites:
                if c not in uniq:
                    uniq.append(c)
            b["refs"] = uniq
            for c in uniq:
                if c == sec.get("cite"):
                    continue
                if c in idx:
                    sec_refs.add(c)
                    seen.add(c)
                else:
                    sec_unresolved.add(c)
        sec["refs"] = sorted(sec_refs, key=lambda x: [int(n) for n in x.split(".")])
        if sec_unresolved:
            sec["unresolved_refs"] = sorted(sec_unresolved, key=lambda x: [int(n) for n in x.split(".")])
        elif "unresolved_refs" in sec:
            sec.pop("unresolved_refs", None)
    return len(seen)


def save(data: dict) -> None:
    enrich_references(data)
    filled = sum(1 for s in data.get("sections") or [] if (s.get("body") or []))
    data["meta"]["sectionCount"] = filled
    data["meta"]["approxPages"] = max(0, filled // 2)
    data["meta"]["edition"] = "Working compilation. Slots in book order."
    data["meta"]["crossRefTargets"] = len(build_ref_index(data))
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


def clause_n(sec: dict) -> int:
    return len(sec.get("body") or [])


def load_progress() -> dict:
    if PROGRESS.exists():
        try:
            return json.loads(PROGRESS.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            pass
    return {"last_cite": "", "water": 0, "hits": 0, "by_cite": {}}


def save_progress(prog: dict, data: dict, floor: int) -> None:
    secs = data.get("sections") or []
    ns = [clause_n(s) for s in secs]
    by = {}
    for s in secs:
        by[s.get("cite")] = {
            "n": clause_n(s),
            "part": s.get("part"),
            "title": s.get("title"),
            "status": s.get("status") or "reserved",
        }
    prog["by_cite"] = by
    prog["water"] = min(ns) if ns else 0
    prog["max_n"] = max(ns) if ns else 0
    prog["floor"] = floor
    prog["empty"] = sum(1 for n in ns if n == 0)
    prog["below"] = sum(1 for n in ns if n < floor)
    prog["at_floor"] = sum(1 for n in ns if n >= floor)
    prog["sectionCount"] = len(secs)
    tmp = PROGRESS.with_suffix(".json.tmp")
    tmp.write_text(json.dumps(prog, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    tmp.replace(PROGRESS)


def print_status(data: dict, floor: int) -> None:
    secs = data.get("sections") or []
    ns = [clause_n(s) for s in secs]
    water = min(ns) if ns else 0
    print(f"sections {len(secs)}  water {water}/{floor}  empty {sum(n==0 for n in ns)}  below {sum(n<floor for n in ns)}  at-floor {sum(n>=floor for n in ns)}")
    # cross-ref health
    with_refs = sum(1 for s in secs if (s.get("refs") or []))
    total_refs = sum(len(s.get("refs") or []) for s in secs)
    unresolved = sum(len(s.get("unresolved_refs") or []) for s in secs)
    print(f"cross-refs: {with_refs}/{len(secs)} sections cite others  total distinct links {total_refs}  unresolved {unresolved}")
    by_part = {}
    for s in secs:
        by_part.setdefault(s.get("part") or "?", []).append(clause_n(s))
    for part, vals in by_part.items():
        print(f"  {part:12} min {min(vals):3}  max {max(vals):3}  mean {sum(vals)/len(vals):5.1f}  n={len(vals)}")
    short = sorted(secs, key=lambda s: (clause_n(s), secs.index(s)))[:12]
    print("shortest:")
    for s in short:
        print(f"    § {s.get('cite'):8} {clause_n(s):3}  {s.get('title')}  refs={len(s.get('refs') or [])}")
    # show a few most-referenced targets
    from collections import Counter
    cnt = Counter()
    for s in secs:
        for r in s.get("refs") or []:
            cnt[r] += 1
    if cnt:
        print("most-cited:")
        for cite, c in cnt.most_common(8):
            title = next((x.get("title") or "" for x in secs if x.get("cite")==cite), "")
            print(f"  §{cite} x{c}  {title}")


def next_empty(data: dict) -> dict | None:
    for s in data.get("sections") or []:
        if not (s.get("body") or []):
            return s
    return None


def round_robin(cands: list[dict], last_cite: str) -> dict:
    """After last_cite in book order; wrap. Never stick on the same § twice in a row if others exist."""
    if not cands:
        raise ValueError("no candidates")
    if len(cands) == 1:
        return cands[0]
    cites = [s.get("cite") for s in cands]
    if last_cite in cites:
        i = cites.index(last_cite)
        return cands[(i + 1) % len(cands)]
    # last was some other section: take first candidate after it in the full book
    return cands[0]


def next_short_water(data: dict, floor: int, last_cite: str) -> dict | None:
    """Raise the water together. Expand whoever is at the global minimum, round-robin.
    Nobody reaches 50 while another still sits at 8."""
    secs = [s for s in (data.get("sections") or []) if clause_n(s) > 0]
    below = [s for s in secs if clause_n(s) < floor]
    if not below:
        return None
    water = min(clause_n(s) for s in below)
    band = [s for s in below if clause_n(s) == water]
    return round_robin(band, last_cite)


def next_cite_in_part(data: dict, part: str) -> str:
    majors = []
    minors = []
    for s in data.get("sections") or []:
        if s.get("part") != part:
            continue
        m = re.match(r"^(\d+)\.(\d+)$", str(s.get("cite") or ""))
        if m:
            majors.append(int(m.group(1)))
            minors.append(int(m.group(2)))
    major = max(majors) if majors else 1401
    minor = (max(minors) if minors else 0) + 1
    existing = {s.get("cite") for s in data["sections"]}
    cite = f"{major}.{minor}"
    while cite in existing:
        minor += 1
        cite = f"{major}.{minor}"
    return cite


def next_related_section(data: dict) -> dict:
    """New section only after every existing one is at the clause floor.
    Pick the Part with the fewest sections so growth stays even, and stay on-topic."""
    by = {}
    for s in data.get("sections") or []:
        by.setdefault(s.get("part") or "part_xiv", []).append(s)
    part = min(by.keys(), key=lambda k: (len(by[k]), k))
    sibs = by[part]
    titles = "; ".join(f"§ {s['cite']} {s['title']}" for s in sibs[-12:])
    cite = next_cite_in_part(data, part)
    slot = {
        "cite": cite,
        "part": part,
        "title": f"Additional Provisions §{cite}",  # placeholder — will be replaced by LLM PAGE heading
        "kind": "related",
        "status": "reserved",
        "body": [],
        "brief": (
            f"NEW section §{cite} in this same Part only. Invent a DISTINCT catchline that belongs "
            "with these siblings, not a new subject and NOT 'Related Requirements': " + titles + 
            ". First line must be: PAGE Your New Distinct Catchline (5-10 words, specific, no 'Related Requirements')"
        ),
    }
    data["sections"].append(slot)
    return slot


def next_job(data: dict, floor: int, last_cite: str = "") -> tuple[str, dict]:
    empty = next_empty(data)
    if empty:
        return "draft", empty
    short = next_short_water(data, floor, last_cite)
    if short:
        return "expand", short
    return "related", next_related_section(data)


def letter_key(i: int) -> str:
    """a..z then aa, ab… never 800."""
    letters = "abcdefghijklmnopqrstuvwxyz"
    if i < 26:
        return letters[i]
    i -= 26
    return letters[i // 26] + letters[i % 26]


def next_keys(existing: list, n: int) -> list[str]:
    used = {str(b.get("key")) for b in existing}
    out = []
    i = 0
    while len(out) < n:
        key = letter_key(i)
        i += 1
        if key not in used:
            out.append(key)
    return out


def apply_letter_keys(body: list) -> list:
    for i, b in enumerate(body):
        b["key"] = letter_key(i)
    return body


def pack_context(data: dict, current: dict) -> str:
    bits = [LORE]
    for p in BROWSE:
        if not p.exists():
            continue
        t = p.read_text(encoding="utf-8", errors="replace")
        i = t.find("mages_guild:")
        if i >= 0:
            bits.append(t[i : i + 2400])
        elif p.name == "legal_data.js":
            j = t.find("arcane:")
            bits.append(t[j : j + 900] if j >= 0 else t[:600])
    prior = []
    for s in data.get("sections") or []:
        if s.get("cite") == current.get("cite"):
            break
        if s.get("body"):
            prior.append(f"§ {s['cite']} {s['title']}")
    bits.append("ALREADY FILED: " + "; ".join(prior[-30:]))
    # expose the larger-section reference index so the model can cite correctly
    idx = build_ref_index(data)
    filed_line = "FILED CITE INDEX (use these exact cites, e.g. 'see § 1.6'): " + "; ".join(
        f"§ {c} {v['title']}" for c, v in list(idx.items())[:40]
    )
    bits.append(filed_line)
    bits.append("ARCHIVE CARDS (hover-sized; generic law is fine if none fit):\n" + cards_for_slot(current.get("title") or "", current.get("brief") or ""))
    q = f"{current.get('title') or ''} {current.get('brief') or ''} {current.get('cite') or ''}"
    bits.append(refer_ccd(q, k=6, exclude=str(current.get("cite") or "")))
    return "\n\n".join(bits)[:9000]


def fp(sec: dict) -> str:
    texts = [b.get("text") or "" for b in sec.get("body") or []]
    blob = re.sub(r"\s+", " ", ((sec.get("title") or "") + " " + " ".join(texts)).lower())
    return hashlib.sha1(blob.encode()).hexdigest()[:16]


def parse_pages(raw: str) -> list[dict]:
    """One PAGE heading then continuous prose. Also still accepts old Heading | line dumps."""
    raw = (raw or "").strip()
    raw = re.sub(r"^```(?:json)?\s*", "", raw)
    raw = re.sub(r"\s*```$", "", raw)
    pages = []
    chunks = re.split(r"(?m)^(?:PAGE|=== PAGE)\s*[:.]?\s*", raw)
    for chunk in chunks:
        chunk = chunk.strip()
        if not chunk:
            continue
        lines = chunk.splitlines()
        heading = lines[0].strip().strip("=").strip()[:80]
        text = "\n\n".join(
            p.strip() for p in re.split(r"\n\s*\n", "\n".join(lines[1:]).strip()) if p.strip()
        )
        text = re.sub(r"^NEED:.*$", "", text, flags=re.M).strip()
        if len(text) >= 280:
            pages.append({"heading": heading or "Page", "text": text})
    if pages:
        return pages
    # fallback: one long page from the whole reply
    body = re.sub(r"^NEED:.*$", "", raw, flags=re.M).strip()
    body = re.sub(r"^PAGE\s+.+", "", body).strip()
    if len(body) >= 280:
        first = body.split("\n", 1)[0][:80]
        return [{"heading": first if len(first) < 70 else "Text", "text": body}]
    # last resort: old pipe lines, join into one page if short
    bits = []
    for line in raw.splitlines():
        if "|" in line and not line.lower().startswith("need"):
            left, right = line.split("|", 1)
            if len(right.strip()) > 20:
                bits.append(right.strip())
    if len(" ".join(bits)) >= 280:
        return [{"heading": "Text", "text": " ".join(bits)}]
    return []


def parse_obj(raw: str) -> dict | None:
    pages = parse_pages(raw)
    if pages:
        return {"body": pages, "title": None}
    return None


def chat(base: str, model: str, messages: list, timeout: int) -> str:
    url = base.rstrip("/") + "/chat/completions"
    payload = json.dumps({"model": model, "temperature": 0.7, "max_tokens": 4096, "messages": messages}).encode()
    req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        data = json.loads(r.read().decode())
    return data["choices"][0]["message"]["content"]


def chat_with_search(base: str, model: str, messages: list, timeout: int) -> str:
    raw = chat(base, model, messages, timeout)
    needs = parse_need_lines(raw)
    if not needs:
        return raw
    extra = "\n".join(
        refer_ccd(q, k=5) + "\n" + format_cards(lore_lookup(q, k=4))
        for q in needs
    )
    follow = messages + [
        {"role": "assistant", "content": raw},
        {"role": "user", "content": "Cited cards (do not dump files). Write PAGE prose only. Cite § numbers; do not reprint whole rules.\n" + extra},
    ]
    return chat(base, model, follow, timeout)


def list_models(base: str) -> list[str]:
    try:
        with urllib.request.urlopen(base.rstrip("/") + "/models", timeout=10) as r:
            data = json.loads(r.read().decode())
        return [m.get("id") for m in data.get("data") or [] if m.get("id")]
    except Exception:
        return []


def empty_in_part(data: dict, part: str) -> list[dict]:
    return [s for s in (data.get("sections") or []) if s.get("part") == part and not (s.get("body") or [])]


def parse_part_blocks(raw: str) -> dict[str, list]:
    """=== 1.1 === then Heading | text  (whole Part in one reply)."""
    out: dict[str, list] = {}
    cite = None
    buf = []
    def flush():
        if cite and buf:
            body = parse_pages("\n".join(buf))
            if body:
                out[cite] = body
    for line in (raw or "").splitlines():
        m = re.match(r"^===\s*§?\s*(\d+\.\d+)\s*(?:§)?\s*===", line.strip())
        if m:
            flush()
            cite = m.group(1)
            buf = []
            continue
        buf.append(line)
    flush()
    return out


def fill_prompt(data: dict, slot: dict, mode: str, floor: int) -> str:
    have = slot.get("body") or []
    heads = ", ".join(str(b.get("heading") or "") for b in have[-12:])
    lore = pack_context(data, slot)
    relate = f"§ {slot.get('cite')} {slot.get('title')}"
    if mode == "expand":
        return f"""{lore}

Write ONE more page (350–700 words) for {relate}. One topic that belongs under this catchline and is not already covered: {heads}
CRITICAL: heading must be NEW — do not reuse any of: {heads}. Pick a distinct subtopic.
Need {max(0, floor - len(have))} more pages toward {floor}.
{slot.get('brief') or ''}
Start with: PAGE New topic title (must be distinct from existing headings)
Then continuous paragraphs. Not a list of one-sentence headings.
"""
    extra = "Front matter. Opening-code voice.\n" if (slot.get("kind") or "") == "intro" else ""
    if mode == "related":
        extra = "New catchline in this Part. First line PAGE Catchline Title then the page.\n"
    return f"""{lore}

Write 1 or 2 pages (your choice) for {relate}.
{slot.get('brief') or ''}
{extra}
Each page: PAGE Title then 350–700 words of continuous law. One topic per page. This is a book, not flash cards.
"""


def part_draft_prompt(data: dict, batch: list[dict]) -> str:
    part = batch[0].get("part")
    titles = "\n".join(f"=== {s['cite']} ===\n{s['title']}\n{s.get('brief') or ''}" for s in batch)
    return f"""{pack_context(data, batch[0])}

Draft this Part ({part}). For EACH catchline write ONLY that catchline.
Do not copy 1.1–1.10 into every block. Cite siblings: see § 1.6.
=== CITE ===
PAGE Title
continuous 1-page law (350+ words) on THAT catchline alone.

Catchlines:
{titles}
"""


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--init", action="store_true")
    ap.add_argument("--status", action="store_true")
    ap.add_argument("--base-url", default="http://127.0.0.1:1234/v1")
    ap.add_argument("--model", default="")
    ap.add_argument("--count", type=int, default=0)
    ap.add_argument("--overnight", action="store_true")
    ap.add_argument("--target", type=int, default=400)
    ap.add_argument("--sleep", type=float, default=0.4)
    ap.add_argument("--timeout", type=int, default=180)
    ap.add_argument("--min-clauses", type=int, default=6, help="pages per § before new catchlines (each page is 1–2 book pages)")
    ap.add_argument("--clear-short", action="store_true", help="wipe sentence-length bodies so they redraft as pages")
    ap.add_argument("--reindex", action="store_true", help="recompute refs/crossRefTargets and exit")
    args = ap.parse_args()

    data = load_json(OUT)
    ensure_book(data)
    save(data)
    prog = load_progress()
    save_progress(prog, data, args.min_clauses)
    if args.reindex:
        n = enrich_references(data)
        save(data)
        print(f"reindexed refs -> {n} distinct targets  crossRefTargets={data['meta'].get('crossRefTargets')}")
        # report unresolved
        unresolved = [(s["cite"], s.get("unresolved_refs")) for s in data.get("sections") or [] if s.get("unresolved_refs")]
        if unresolved:
            print("unresolved:")
            for cite, lst in unresolved[:20]:
                print(f"  §{cite} -> {', '.join(lst)}")
        return 0
    if args.clear_short:
        n = 0
        for s in data.get("sections") or []:
            body = s.get("body") or []
            if body and not any(len(b.get("text") or "") > 180 for b in body):
                s["body"] = []
                s["status"] = "reserved"
                n += 1
        save(data)
        print("cleared", n, "sentence drafts; re-run overnight for pages")
        return 0
    if args.init:
        print("reserved", len(data["sections"]), "slots · first empty", (next_empty(data) or {}).get("cite"))
        return 0
    if args.status:
        print_status(data, args.min_clauses)
        return 0

    models = list_models(args.base_url)
    model = args.model or (models[0] if models else "")
    if not model:
        print("LM Studio not reachable at", args.base_url, file=sys.stderr)
        print("Start the server, then re-run. Outline is already in the JSON.", file=sys.stderr)
        return 2
    print("model:", model, "min-clauses:", args.min_clauses, file=sys.stderr)
    print("writing", OUT, file=sys.stderr)

    def persist():
        save(data)
        save_progress(prog, data, args.min_clauses)
        lore_invalidate()
        print("saved", OUT, file=sys.stderr)

    def on_stop(_s, _f):
        persist()
        print("stopped; drafts kept", file=sys.stderr)
        raise SystemExit(0)

    signal.signal(signal.SIGINT, on_stop)
    if hasattr(signal, "SIGTERM"):
        signal.signal(signal.SIGTERM, on_stop)

    goal = args.count if args.count > 0 else args.target
    added = 0
    fails = 0

    def _uniquify_heading(base: str, have_h: set[str]) -> str:
        """Ensure heading not in have_h; append qualifier if needed."""
        h = base.strip()
        if not h:
            h = "Additional Provision"
        norm = re.sub(r"\s+", " ", h.lower())
        if norm not in have_h:
            return h
        # try numbered variants
        for suffix in [" — Continued", " — Administration", " — Oversight", " — Procedure", " — Custody", " — Review"]:
            cand = h + suffix
            if re.sub(r"\s+", " ", cand.lower()) not in have_h:
                return cand
        # fallback: append counter
        n = 2
        while True:
            cand = f"{h} ({n})"
            if re.sub(r"\s+", " ", cand.lower()) not in have_h:
                return cand
            n += 1

    def accept(slot, body, mode):
        nonlocal added, fails
        if mode == "expand":
            have_h = {re.sub(r"\s+", " ", (b.get("heading") or "").lower()) for b in slot.get("body") or []}
            # keep have_t for text dedup but only exact 200-char prefix, less false-positive
            have_t = {re.sub(r"\s+", " ", (b.get("text") or "").lower())[:200] for b in slot.get("body") or []}
            keys = next_keys(slot.get("body") or [], len(body))
            merged = []
            for i, b in enumerate(body):
                h_norm = re.sub(r"\s+", " ", (b.get("heading") or "").lower())
                t_norm = re.sub(r"\s+", " ", (b.get("text") or "").lower())[:200]
                # repair duplicate heading instead of dropping
                if h_norm in have_h:
                    b["heading"] = _uniquify_heading(b.get("heading") or "", have_h)
                    h_norm = re.sub(r"\s+", " ", (b.get("heading") or "").lower())
                # text duplicate is stricter now; only drop if both heading was original duplicate AND text dup
                # if text still dup after heading fix, try to keep it anyway with warning
                if t_norm in have_t and h_norm in have_h:
                    # true duplicate page — skip this one entry, but don't drop entire batch
                    continue
                # if text dup but heading is now unique, allow it (different subtopic, same boilerplate start)
                b["key"] = keys[i] if i < len(keys) else letter_key(clause_n(slot) + i)
                merged.append(b)
                have_h.add(h_norm)
                have_t.add(t_norm)
            if not merged:
                # auto-repair: instead of "skip thin", force-accept with repaired headings/keys
                # take the first body page, uniquify heading, and accept it anyway
                if body:
                    b = body[0]
                    b["heading"] = _uniquify_heading(b.get("heading") or slot.get("title") or "Supplemental Provision", have_h)
                    b["key"] = next_keys(slot.get("body") or [], 1)[0]
                    merged = [b]
                else:
                    return False
            slot["body"] = apply_letter_keys((slot.get("body") or []) + merged)
        else:
            slot["body"] = apply_letter_keys(body)
            # for new cites (draft/related), adopt the LLM's PAGE heading as the section title
            if body and body[0].get("heading"):
                new_title = re.sub(r"^§\s*\d+\.\d+\s*", "", str(body[0].get("heading") or "")).strip(" —;:")
                # never keep the generic placeholder
                if new_title and new_title.lower() not in ["related requirements", "additional provisions"] and len(new_title) >= 8:
                    # strip leading 'Related Requirements' if LLM still emitted it
                    cleaned = re.sub(r"^Related Requirements\s*[:\-–—;]*\s*", "", new_title, flags=re.I).strip()
                    if len(cleaned) >= 8:
                        new_title = cleaned
                    slot["title"] = new_title[:80]
                elif not slot.get("title") or slot["title"].startswith("Additional Provisions"):
                    # fallback: use heading as-is if it's at least descriptive
                    if len(new_title) >= 12 and new_title.lower() not in ["related requirements"]:
                        slot["title"] = new_title[:80]
            # also replace placeholder brief (which contains 'NEW section...Invent a catchline') with real brief
            if slot.get("brief","").startswith("NEW section"):
                # brief should be the new title or first 80 chars of body
                slot["brief"] = (slot["title"][:80] if slot.get("title") else (body[0].get("text","")[:80] if body else ""))[:80]
        slot["status"] = "filed" if clause_n(slot) >= args.min_clauses else "growing"
        slot["source"] = "lmstudio"
        slot["fp"] = fp(slot)
        persist()
        prog["last_cite"] = slot.get("cite") or ""
        prog["hits"] = int(prog.get("hits") or 0) + 1
        save_progress(prog, data, args.min_clauses)
        added += 1
        fails = 0
        print(f"{mode} § {slot['cite']} {slot['title']}  n={clause_n(slot)}  water={prog.get('water')}/{args.min_clauses}  ({added}/{goal})", file=sys.stderr)
        return True

    while added < goal:
        mode, slot = next_job(data, args.min_clauses, prog.get("last_cite") or "")
        batch = empty_in_part(data, slot.get("part")) if mode == "draft" else []
        try:
            prompt = part_draft_prompt(data, batch) if (mode == "draft" and len(batch) > 1) else fill_prompt(data, slot, mode, args.min_clauses)
            raw = chat_with_search(
                args.base_url, model,
                [{"role": "system", "content": VOICE}, {"role": "user", "content": prompt}],
                args.timeout,
            )
        except urllib.error.URLError as e:
            print("wait:", e, file=sys.stderr)
            fails += 1
            if fails > 30:
                persist()
                return 3
            time.sleep(5)
            continue
        except Exception as e:
            print("err", e, file=sys.stderr)
            fails += 1
            persist()
            time.sleep(2)
            continue
        if mode == "draft" and len(batch) > 1:
            blocks = parse_part_blocks(raw)
            if not blocks:
                obj = parse_obj(raw)
                if obj:
                    blocks = {slot["cite"]: obj["body"]}
            if not blocks:
                print("skip: unusable part", slot.get("part"), file=sys.stderr)
                fails += 1
                if fails >= 8:
                    persist()
                    return 4
                continue
            by_cite = {s["cite"]: s for s in batch}
            any_ok = False
            for cite, body in blocks.items():
                s = by_cite.get(cite)
                if s:
                    any_ok = accept(s, body, "draft") or any_ok
            if not any_ok:
                fails += 1
                continue
            time.sleep(args.sleep)
            continue
        obj = parse_obj(raw)
        if not obj:
            print("skip: unusable", slot["cite"], file=sys.stderr)
            fails += 1
            if fails >= 8:
                persist()
                return 4
            continue
        if not accept(slot, obj["body"], mode):
            # accept now auto-repairs, so this should rarely happen; if it does, advance pointer
            print("skip thin (repaired) ", slot["cite"], file=sys.stderr)
            fails += 1
            # after 3 thin skips on same cite, force-rotate so we stop burning tokens
            # bump last_cite to current slot so round_robin picks the next band member next iteration
            prog["last_cite"] = slot.get("cite") or ""
            if fails >= 3:
                # also persist progress so next restart doesn't re-hit same slot
                persist()
                # don't hard-fail, just move on
                print(f"auto-rotate from §{slot['cite']} after {fails} thin skips", file=sys.stderr)
                fails = 0
            continue
        time.sleep(args.sleep)
    persist()
    print("done", added)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())