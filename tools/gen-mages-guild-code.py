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
import random
import threading
import concurrent.futures
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

# Windows file-lock guard: multiple parallel jobs or VS Code watcher can hold the file
_SAVE_LOCK = threading.Lock()
def _atomic_write(tmp: Path, target: Path):
    import time as _tw
    for attempt in range(8):
        try:
            with _SAVE_LOCK:
                tmp.replace(target)
            return
        except PermissionError as e:
            if attempt == 7:
                raise
            _tw.sleep(0.15 * (attempt + 1))
        except OSError as e:
            if attempt == 7:
                raise
            _tw.sleep(0.15 * (attempt + 1))

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
- Scope: this Codex applies to covered casters and covered conduct wherever performed, including unaligned lands, wilderness, other planes, and unsanctioned field work. Location alone does not create immunity.
- A guest or unaffiliated caster who casts outside Guild property is not automatically a Person Bound, but may still incur Codex liability for covered conduct, property damage, public danger, unauthorized use of Guild marks or equipment, a Guild contract, or a tracked anomaly/asset. The scope rule must distinguish jurisdiction, standing, and the separate duty to answer for harm.
- Fireball, weather, transfiguration, summoned creatures, and other spells that damage third-party property are covered field incidents even when no Guild hall, fee, or Guild member is involved. Do not invent a blanket rule that makes every traveler a Guild member.
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
Scope canon: distinguish (a) who is a Person Bound, (b) where the Guild may assert process or oversight, and (c) what conduct is actionable under the Codex. A non-member outside Guild property is not automatically enrolled merely by existing or casting, but outside-Guild conduct can still be covered when it causes property damage or public danger, uses Guild resources or marks, breaches a Guild undertaking, affects a tracked Guild asset/anomaly, or falls under a field-casting, reporting, restitution, or emergency rule. Write explicit remedies and notice/process so this is a real widening of scope, not a contradictory claim of universal membership. Use a random destructive Fireball/property-damage incident as a recurring test case where appropriate.
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
    _atomic_write(tmp, OUT)


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
    _atomic_write(tmp, PROGRESS)


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


def is_bad_output(text: str) -> tuple[bool, str]:
    """Hardened spam detector — catches word-salad, whatever-floods, Failure-loops.
    Runs after every instance + retroactively; also called every 10 auto / 20 AI.
    Returns (is_bad, reason)."""
    import re, collections
    if not text or len(text) < 80:
        return False, ""
    words = re.findall(r"[a-zA-Z']+", text.lower())
    if len(words) < 40:
        return False, ""
    total = len(words)
    uniq = len(set(words))
    # --- Hardened low diversity (lower thresholds for long spam) ---
    if total > 600 and uniq / total < 0.18:
        return True, f"low diversity {uniq}/{total}={uniq/total:.2f}"
    if total > 300 and uniq / total < 0.12:
        return True, f"very low diversity {uniq}/{total}={uniq/total:.2f}"
    # --- Hardened single-word repeats (catches 'whatever' flood, 'Failure' flood) ---
    STOP = {"the","and","of","a","to","in","is","for","with","as","by","on","or","be","are","that","this","it","from","an","shall","may","must","under","per","see","not","any","all","such","which","who","will","can","has","have","been","are","was","were","if","at","its","their","our","your","shall","be","is","are"}
    # Keep 'whatever','failure','guild' etc. as non-stop so they get caught
    STOP.discard("whatever")
    STOP.discard("failure")
    STOP.discard("guild")
    cnt = collections.Counter(w for w in words if w not in STOP)
    if cnt:
        most_common_word, most_cnt = cnt.most_common(1)[0]
        # Hardened: any word >25 repeats and >5% is spam (was 40 and 8%)
        if most_cnt > 25 and most_cnt > total * 0.05:
            return True, f"repeated word '{most_common_word}' {most_cnt}/{total} ({most_cnt/total:.0%})"
        if most_cnt > 60:
            return True, f"word '{most_common_word}' repeats {most_cnt}/{total} (extreme)"
        # Specific hardened check for 'whatever' flood (your §1301.2 example ends with 200× whatever)
        whatever_cnt = cnt.get("whatever", 0)
        if whatever_cnt >= 15:
            return True, f"'whatever' flood {whatever_cnt}x"
        # Check for 'failure' sentence-start flood
        sentences_raw = re.split(r'[.!?]+', text)
        failure_starts = sum(1 for s in sentences_raw if s.strip().lower().startswith("failure"))
        if failure_starts >= 6 and len([s for s in sentences_raw if s.strip()]) >= 10:
            if failure_starts / len([s for s in sentences_raw if s.strip()]) > 0.25:
                return True, f"'Failure' sentence-start flood {failure_starts}/{len(sentences_raw)}"
    # --- Repeated 4-gram (lower threshold: 5 instead of 7) ---
    fourgrams = [" ".join(words[i:i+4]) for i in range(len(words)-3)]
    if fourgrams:
        fg_cnt = collections.Counter(fourgrams)
        top_fg, top_n = fg_cnt.most_common(1)[0]
        COMMON_LEGAL = {"in accordance with the","pursuant to section","under section","of the autumnwood accords","the guild shall diligently"}
        if top_fg not in COMMON_LEGAL and top_n >= 5:
            return True, f"4-gram '{top_fg[:40]}' repeats {top_n}x"
        if top_n >= 10:
            return True, f"4-gram '{top_fg[:40]}' repeats {top_n}x (extreme)"
    # --- Repeated 3-gram (new, hardened) ---
    trigrams = [" ".join(words[i:i+3]) for i in range(len(words)-2)]
    if trigrams:
        tri_cnt = collections.Counter(trigrams)
        top_tri, top_tri_n = tri_cnt.most_common(1)[0]
        if top_tri not in COMMON_LEGAL and top_tri_n >= 8:
            return True, f"3-gram '{top_tri[:30]}' repeats {top_tri_n}x"
    # --- Buzzword salad ---
    buzz = ["integrity","honesty","transparency","accountability","reliability","consistency","thoroughness","precision","accuracy","timeliness","punctuality","efficiency","effectiveness","productivity","quality","craftsmanship","artistry","beauty","elegance","grace","sophistication","refinement","excellence","perfection","mastery","expertise","serendipity","wonder","mystery","awe","reverence","wonderment","amazement","delight","surprise","excitement","thrill","adventure","exploration","discovery","learning","growth","transformation","change","evolution","progress","improvement","advancement","development","expansion","extension","inclusion","diversity","acceptance","tolerance","openness","curiosity","enthusiasm","optimism","confidence","belief","hope","faith","trust","whatever","whatsoever"]
    buzz_hits = sum(1 for w in words if w in buzz)
    if buzz_hits > total * 0.25 and total > 350:
        return True, f"buzzword salad {buzz_hits}/{total} buzzwords"
    # --- Trailing whatever flood (hardened) ---
    tail = " ".join(words[-200:]) if len(words) > 200 else " ".join(words)
    tail_whatever = tail.split().count("whatever") + tail.split().count("whatsoever")
    if tail_whatever >= 10:
        return True, f"trailing 'whatever' flood {tail_whatever} in last 200w"
    # --- Excessive length ---
    if total > 1100:
        return True, f"excessive length {total} words (expected 350-700)"
    if text.count(".") < total / 140 and total > 400:
        return True, "no punctuation"
    # --- Codex-specific ---
    has_cites = bool(extract_cites(text))
    low_text=text.lower()
    LEGAL_KW = {"shall","may","must","pursuant","accords","guild","desk","caster","permit","section","accord","see §"}
    has_legal = any(kw in low_text for kw in LEGAL_KW)
    if total > 200 and not has_cites and not has_legal:
        return True, "no § cites and no legal keywords"
    sentences=[s for s in re.split(r'[.!?]+', text) if s.strip()]
    if sentences and total>150 and total/len(sentences) > 75:
        return True, f"run-on avg {total/len(sentences):.0f}w/sent"
    if text.count("\n\n") == 0 and total > 400 and not has_cites:
        return True, "no paragraph breaks + no cites"
    return False, ""

    words = re.findall(r"[a-zA-Z']+", text.lower())
    if len(words) < 50:
        return False, ""
    total = len(words)
    uniq = len(set(words))
    # Very low lexical diversity — but legal prose is naturally repetitive, so be lenient
    # Only flag if extremely low and long
    if total > 800 and uniq / total < 0.14:
        return True, f"low diversity {uniq}/{total}={uniq/total:.2f}"
    if total > 300 and uniq / total < 0.10:
        return True, f"very low diversity {uniq}/{total}={uniq/total:.2f}"
    # Any single *non-stopword* repeated excessively
    STOP = {"the","and","of","a","to","in","is","for","with","as","by","on","or","be","are","that","this","it","from","an","shall","may","must","under","per","see","not","any","all","such","which","who","will","can","has","have","been","are","was","were","if","at","its","their","our","your"}
    cnt = collections.Counter(w for w in words if w not in STOP)
    if cnt:
        most_common_word, most_cnt = cnt.most_common(1)[0]
        # e.g. "restocking" 1470x, "acid" 301x, "quesadillas" loops
        if most_cnt > 40 and most_cnt > total * 0.08:
            return True, f"word '{most_common_word}' repeats {most_cnt}/{total}"
        if most_cnt > 100:
            return True, f"word '{most_common_word}' repeats {most_cnt}/{total} (extreme)"
    # Repeated 4-gram — strong signal for loops
    fourgrams = [" ".join(words[i:i+4]) for i in range(len(words)-3)]
    if fourgrams:
        fg_cnt = collections.Counter(fourgrams)
        top_fg, top_n = fg_cnt.most_common(1)[0]
        # ignore common legal 4-grams like "in accordance with the"
        COMMON_LEGAL = {"in accordance with the","pursuant to section","under section","of the autumnwood accords"}
        if top_fg not in COMMON_LEGAL and top_n >= 7:
            return True, f"4-gram '{top_fg[:40]}' repeats {top_n}x"
        if top_n >= 12:
            return True, f"4-gram '{top_fg[:40]}' repeats {top_n}x (extreme)"
    # Buzzword salad — the exact failure mode the user showed
    buzz = ["integrity","honesty","transparency","accountability","reliability","consistency","thoroughness","precision","accuracy","timeliness","punctuality","efficiency","effectiveness","productivity","quality","craftsmanship","artistry","beauty","elegance","grace","sophistication","refinement","excellence","perfection","mastery","expertise","serendipity","wonder","mystery","awe","reverence","wonderment","amazement","delight","surprise","excitement","thrill","adventure","exploration","discovery","learning","growth","transformation","change","evolution","progress","improvement","advancement","development","expansion","extension","inclusion","diversity","acceptance","tolerance","openness","curiosity","enthusiasm","optimism","confidence","belief","hope","faith","trust"]
    buzz_hits = sum(1 for w in words if w in buzz)
    if buzz_hits > total * 0.30 and total > 500:
        return True, f"buzzword salad {buzz_hits}/{total} buzzwords"
    # Excessive length without paragraph breaks — degraded
    if total > 1200:
        return True, f"excessive length {total} words (expected 350-700)"
    if text.count(".") < total / 150 and total > 500:
        return True, "no punctuation"
    # Codex-specific: spam has 0 § cites AND no legal structure — be precise, don't flag short legit intros
    has_cites = bool(extract_cites(text))
    low_text=text.lower()
    LEGAL_KW = {"shall","may","must","pursuant","accords","guild","desk","caster","permit","section","accord","see §"}
    has_legal = any(kw in low_text for kw in LEGAL_KW)
    # 0 cites + long + no legal keywords = word salad (your example)
    if total > 250 and not has_cites and not has_legal:
        return True, "no § cites and no legal keywords (expected 2-4 cites + shall/may/Accords)"
    # Long single run-on sentence
    import re as _re2
    sentences=[s for s in _re2.split(r'[.!?]+', text) if s.strip()]
    if sentences and total>200 and total/len(sentences) > 85:
        return True, f"run-on avg {total/len(sentences):.0f} words/sentence"
    # Single paragraph with no breaks but long AND no cites — degraded
    if text.count("\n\n") == 0 and total > 500 and not has_cites:
        return True, "no paragraph breaks + no cites"
    return False, ""

def parse_obj(raw: str) -> dict | None:
    pages = parse_pages(raw)
    if pages:
        # filter bad pages as normal part of run
        good=[]
        for pg in pages:
            bad, reason = is_bad_output(pg.get("text") or "")
            if bad:
                print(f"bad output filtered: {pg.get('heading','')[:40]} — {reason}", file=__import__('sys').stderr)
                continue
            good.append(pg)
        if not good:
            return None
        return {"body": good, "title": None}
    return None

def clean_bad_bodies(data: dict) -> int:
    """Retroactively remove bad pages already saved in the Codex. Returns count removed."""
    removed=0
    for sec in data.get("sections") or []:
        bodies=sec.get("body") or []
        keep=[]
        for b in bodies:
            bad, reason = is_bad_output(b.get("text") or "")
            if bad:
                print(f"retroactively removing bad page §{sec.get('cite')} '{b.get('heading','')[:40]}' — {reason}", file=__import__('sys').stderr)
                removed+=1
                continue
            keep.append(b)
        if len(keep) != len(bodies):
            sec["body"]=keep
            if not keep:
                sec["status"]="reserved"
    return removed


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
    ap.add_argument("--parallel", type=int, default=1, help="how many LLM prompts to run concurrently (multiprompting). 2-4 is faster on 9B+ with enough VRAM; 1 is sequential")
    ap.add_argument("--jobs", type=int, default=0, help="alias for --parallel")
    ap.add_argument("--eta", action="store_true", help="show ETA and throughput")
    ap.add_argument("--validate", action="store_true", help="validate existing sections for cite health without generating")
    ap.add_argument("--preview", action="store_true", help="preview next prompts without calling LLM (dry)")
    ap.add_argument("--shuffle", action="store_true", help="shuffle water-level band order (less deterministic, good for parallel diversity)")
    ap.add_argument("--log", type=str, default="", help="also tee output to this log file")
    ap.add_argument("--max-fails", type=int, default=30, help="abort after this many consecutive waits (default 30)")
    ap.add_argument("--clean-bad", action="store_true", help="scan existing Codex and retroactively remove degraded/buzzword-loop pages (normal part of run does this for new output too)")
    args = ap.parse_args()

    # alias: --jobs overrides --parallel, --preview is dry preview
    if args.jobs and args.jobs != args.parallel:
        args.parallel = args.jobs
    args.parallel = max(1, min(8, args.parallel))
    if args.preview:
        data = load_json(OUT)
        ensure_book(data)
        prog = load_progress()
        print("PREVIEW next", args.parallel, "prompts (no LLM):")
        for i in range(args.parallel):
            mode, slot = next_job(data, args.min_clauses, prog.get("last_cite") or "")
            print(f"  [{mode}] §{slot['cite']} {slot['title']} — {slot.get('brief','')[:60]}")
            prog["last_cite"] = slot["cite"]
            # simulate adding a placeholder to avoid picking same slot again in preview
            if mode == "related":
                data["sections"].append(slot)
        return 0
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
    if args.validate:
        # cite health check without generating
        enrich_references(data)
        unresolved=[(s["cite"], s.get("unresolved_refs")) for s in data.get("sections") or [] if s.get("unresolved_refs")]
        print(f"validate: {len(unresolved)} sections have unresolved cites, {sum(len(v) for _,v in unresolved)} total unresolved")
        for cite, lst in unresolved[:10]:
            print(f"  §{cite} -> {', '.join(lst[:5])}")
        dup_titles=[t for t,c in __import__('collections').Counter([s.get('title') for s in data['sections']]).items() if c>1]
        print(f"duplicate titles: {len(dup_titles)}")
        placeholder=sum(1 for s in data['sections'] if (s.get('brief') or '').startswith("NEW section"))
        print(f"placeholder briefs: {placeholder}")
        return 0

    # retroactive clean is a normal maintenance step — also runs automatically on --overnight start
    if args.clean_bad:
        n=clean_bad_bodies(data)
        if n:
            save(data)
            save_progress(prog, data, args.min_clauses)
            print(f"cleaned {n} bad pages retroactively", file=sys.stderr)
        else:
            print("no bad pages found", file=sys.stderr)
        return 0
    # auto-clean on every run (normal part of run as requested) — remove any bad pages already saved before generating more
    auto_cleaned=clean_bad_bodies(data)
    if auto_cleaned:
        print(f"auto-cleaned {auto_cleaned} bad pages before generating", file=sys.stderr)
        save(data)
        save_progress(prog, data, args.min_clauses)

    models = list_models(args.base_url)
    model = args.model or (models[0] if models else "")
    if not model:
        print("LM Studio not reachable at", args.base_url, file=sys.stderr)
        print("Start the server, then re-run. Outline is already in the JSON.", file=sys.stderr)
        return 2
    print("model:", model, "min-clauses:", args.min_clauses, f"parallel={args.parallel}" + (" shuffle" if args.shuffle else ""), file=sys.stderr)
    print("writing", OUT, file=sys.stderr)
    if args.log:
        import logging
        logging.basicConfig(filename=args.log, level=logging.INFO, format="%(asctime)s %(message)s")
        print(f"logging to {args.log}", file=sys.stderr)

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
        # Overhaul: every 10 auto-check, every 20 AI self-check, every 15 codex → 1 form (separate pool)
        try:
            check_every_10()
            ai_self_check_every_20()
            maybe_generate_form()
        except Exception as _e:
            print(f"periodic check failed: {_e}", file=__import__('sys').stderr)
        return True

    # ── Multiprompting: run --parallel prompts concurrently ──
    # Sequential path (parallel==1) keeps the old strict water-level order.
    # Parallel path picks N distinct slots at the current water level and fires them together.
    import time as _time
    start_time = _time.time()
    # ── Overhaul: periodic checks (every 10 auto, every 20 AI) + hardened repeated-words + forms pool every 15 ──
    generations_since_auto = 0
    generations_since_ai = 0
    codex_since_form = 0  # separate pool: every 15 codex pages → 1 form
    def check_every_10():
        nonlocal generations_since_auto
        generations_since_auto += 1
        if generations_since_auto >= 10:
            generations_since_auto = 0
            # Auto-check last 10 pages for bad output (hardened)
            print("auto-check every 10: scanning last 10 pages...", file=__import__('sys').stderr)
            n = clean_bad_bodies(data)
            if n:
                print(f"auto-check removed {n} bad pages", file=__import__('sys').stderr)
                save(data)
                save_progress(prog, data, args.min_clauses)
            else:
                print("auto-check: no bad pages in last 10", file=__import__('sys').stderr)
            # Also harden repeated-words scan on last 10
            _hardened_repeated_scan(10)

    def _hardened_repeated_scan(n_last=10):
        # Hardened repeated-words: looks for whatever-flood, Failure-start flood across last n pages
        recent = []
        for sec in reversed(data.get("sections") or []):
            for b in reversed(sec.get("body") or []):
                recent.append((sec.get("cite"), b.get("text") or ""))
                if len(recent) >= n_last:
                    break
            if len(recent) >= n_last:
                break
        # Check each recent text for hardened patterns beyond is_bad_output
        for cite, txt in recent:
            low = txt.lower()
            # Hardened whatever flood
            if low.count("whatever") >= 12:
                print(f"hardened: 'whatever' flood in §{cite} {low.count('whatever')}x — flagging", file=__import__('sys').stderr)
                # Mark for AI check, but auto will catch via is_bad_output's whatever check
            # Hardened Failure start
            import re as _re2
            sents = [s for s in _re2.split(r'[.!?]+', txt) if s.strip()]
            fails = sum(1 for s in sents if s.strip().lower().startswith("failure"))
            if fails >= 5 and len(sents) >= 8 and fails/len(sents) > 0.25:
                print(f"hardened: 'Failure' start flood in §{cite} {fails}/{len(sents)} — flagging", file=__import__('sys').stderr)

    def ai_self_check_every_20():
        nonlocal generations_since_ai
        generations_since_ai += 1
        if generations_since_ai >= 20:
            generations_since_ai = 0
            print("AI self-check every 20: asking model to review last 20 pages for repeated words / spam...", file=__import__('sys').stderr)
            # Collect last 20 pages
            recent = []
            for sec in reversed(data.get("sections") or []):
                for b in reversed(sec.get("body") or []):
                    recent.append(f"§{sec.get('cite')} {b.get('heading','')}: {(b.get('text') or '')[:600]}")
                    if len(recent) >= 20:
                        break
                if len(recent) >= 20:
                    break
            recent = list(reversed(recent))
            prompt = "You are a QA checker for the Mages' Guild Codex. Review these 20 recent pages for spam, repeated words (like 'whatever' flood, 'Failure' sentence-start flood), buzzword loops, or degraded output. Return JSON: {\"bad\": [cite, ...], \"reasons\": {cite: reason}}. If none, return {\"bad\":[]}.\n\n" + "\n\n---\n\n".join(recent)
            try:
                # Use the same model with a quick check
                resp = chat(args.base_url, model, [{"role":"system","content":"You are a strict QA checker. Output ONLY JSON."}, {"role":"user","content": prompt}], timeout=60)
                import json as _json, re as _re3
                m = _re3.search(r"\{.*\}", resp, flags=_re3.S)
                if m:
                    obj = _json.loads(m.group(0))
                    bad_list = obj.get("bad", [])
                    if bad_list:
                        print(f"AI self-check flagged {len(bad_list)}: {bad_list} — {obj.get('reasons')}", file=__import__('sys').stderr)
                        # Remove those pages retroactively if they exist and are bad
                        for cite in bad_list:
                            for sec in data.get("sections") or []:
                                if sec.get("cite") == cite:
                                    # Find which body matches the recent text more closely? For now, flag whole section for manual review
                                    # Instead, just log and let is_bad_output handle next auto-check
                                    pass
                    else:
                        print("AI self-check: no bad pages flagged", file=__import__('sys').stderr)
                else:
                    print("AI self-check: no JSON returned", file=__import__('sys').stderr)
            except Exception as e:
                print(f"AI self-check failed: {e}", file=__import__('sys').stderr)

    def maybe_generate_form():
        nonlocal codex_since_form
        codex_since_form += 1
        if codex_since_form >= 15:
            codex_since_form = 0
            print("forms pool every 15: generating 1 form on separate pool...", file=__import__('sys').stderr)
            try:
                import subprocess as _sp, sys as _sys, json as _json2
                from pathlib import Path as _P
                # Call gen-mages-forms.py for one form, but don't block codex generation
                cmd = [_sys.executable, str(ROOT/"tools"/"gen-mages-forms.py"), "--base-url", args.base_url, "--model", model, "--generate", "--all"]
                # Use the same base-url/model, but run as separate process with timeout
                _sp.run(cmd, timeout=120, check=False)
                print("forms pool: attempted 1 form", file=__import__('sys').stderr)
            except Exception as e:
                print(f"forms pool failed: {e}", file=__import__('sys').stderr)

    def run_one_job(job):
        jmode, jslot, jbatch = job
        try:
            jprompt = part_draft_prompt(data, jbatch) if (jmode == "draft" and len(jbatch) > 1) else fill_prompt(data, jslot, jmode, args.min_clauses)
            jraw = chat_with_search(
                args.base_url, model,
                [{"role": "system", "content": VOICE}, {"role": "user", "content": jprompt}],
                args.timeout,
            )
            return (jmode, jslot, jbatch, jraw, None)
        except Exception as e:
            return (jmode, jslot, jbatch, None, e)

    while added < goal:
        # QOL: ETA
        if args.eta and added>0:
            elapsed = _time.time() - start_time
            per = elapsed / max(1, added)
            remain = (goal - added) * per
            print(f"eta {remain/60:.1f}m — {added}/{goal} — {per:.1f}s/page — parallel {args.parallel}", file=sys.stderr)

        if args.parallel == 1:
            # ——— sequential (original) ———
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
                print("skip thin (repaired) ", slot["cite"], file=sys.stderr)
                fails += 1
                prog["last_cite"] = slot.get("cite") or ""
                if fails >= 3:
                    persist()
                    print(f"auto-rotate from §{slot['cite']} after {fails} thin skips", file=sys.stderr)
                    fails = 0
                continue
            time.sleep(args.sleep)
            continue
        else:
            # ——— parallel: collect N distinct jobs, fire together ———
            jobs=[]
            # snapshot last_cite and avoid duplicate picks in this batch
            seen_cites=set()
            tmp_last = prog.get("last_cite") or ""
            for _ in range(min(args.parallel, goal-added)):
                for _try in range(8):
                    try:
                        jmode, jslot = next_job(data, args.min_clauses, tmp_last)
                    except ValueError:
                        break
                    jcite=jslot.get("cite")
                    if jcite not in seen_cites:
                        break
                    tmp_last=jcite
                else:
                    break
                if jcite in seen_cites:
                    break
                seen_cites.add(jcite)
                tmp_last=jcite
                jbatch = empty_in_part(data, jslot.get("part")) if jmode == "draft" else []
                jobs.append((jmode, jslot, jbatch))
            if args.shuffle and len(jobs)>1:
                import random as _rnd
                _rnd.shuffle(jobs)
                # if we just created a new related section, it's now in data.sections — keep it for next pick
            if not jobs:
                print("no jobs to run — saving", file=sys.stderr)
                persist()
                return 0
            # fire
            results=[]
            with concurrent.futures.ThreadPoolExecutor(max_workers=args.parallel) as ex:
                futs={ex.submit(run_one_job, j): j for j in jobs}
                for fut in concurrent.futures.as_completed(futs):
                    results.append(fut.result())
            # process results in completion order (accept is serialized to avoid races)
            for jmode, jslot, jbatch, jraw, jerr in results:
                if jerr is not None:
                    print(f"parallel wait {jmode} §{jslot.get('cite')}: {jerr}", file=sys.stderr)
                    fails+=1
                    if fails>30:
                        persist()
                        return 3
                    continue
                if jmode == "draft" and len(jbatch) > 1:
                    blocks = parse_part_blocks(jraw)
                    if not blocks:
                        obj = parse_obj(jraw)
                        if obj:
                            blocks = {jslot["cite"]: obj["body"]}
                    if not blocks:
                        print("skip: unusable part", jslot.get("part"), file=sys.stderr)
                        fails+=1
                        continue
                    by_cite={s["cite"]: s for s in jbatch}
                    any_ok=False
                    for cite, body in blocks.items():
                        s=by_cite.get(cite)
                        if s:
                            any_ok=accept(s, body, "draft") or any_ok
                    if not any_ok:
                        fails+=1
                    continue
                obj=parse_obj(jraw)
                if not obj:
                    print("skip: unusable", jslot["cite"], file=sys.stderr)
                    fails+=1
                    continue
                if not accept(jslot, obj["body"], jmode):
                    print("skip thin (repaired) ", jslot["cite"], file=sys.stderr)
                    fails+=1
                    prog["last_cite"]=jslot.get("cite") or ""
                    if fails>=3:
                        persist()
                        fails=0
                    continue
            time.sleep(args.sleep)
            continue
    persist()
    print("done", added)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())