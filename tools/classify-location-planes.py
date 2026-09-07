#!/usr/bin/env python3
"""Classify every location article into a planar map layer.

The cartography desk (#/maps) renders one painted sheet with a Feyward /
Shadeward layer toggle. The toggle reads the `plane` tag on each POI
('material' when the tag is absent), and this tool is what keeps those tags
honest: it reads every location article in `locations.json`, scores the
context clues in region + summary + description, and compares the verdict
against the pins filed in `map-data/*-pois.js`.

What it reports:
  1. every location's plane (material / shadow / fey / mirror) + the clue
  2. locations with no pin at all (the map still owes them)
  3. pins whose `plane` tag disagrees with their article's plane
  4. Raventree-cluster pins missing an explicit `plane` tag
  5. journey coverage: which events resolve to a pinned location, which don't,
     and which unresolved location strings recur (missing location records)

A location the clues cannot place — thin evidence, two planes contesting, or
something extraplanar like the Astral Sea — is marked for review
(`needsReview: true` + `reviewNote`) instead of being guessed. Material is
the default layer: zero planar markers means Material, stated as such.

Rule-based by default (deterministic, no network). --llm sends only the
ambiguous articles to LM Studio for a second opinion; the model can confirm
or overturn at most to medium confidence, never grant high.

Usage:
  python3 tools/classify-location-planes.py                    # full report
  python3 tools/classify-location-planes.py --check            # concise, exit 0
  python3 tools/classify-location-planes.py --check --strict   # exit 1 on gaps
  python3 tools/classify-location-planes.py --apply            # write locations.json
  python3 tools/classify-location-planes.py --apply --llm      # ...with LM Studio second opinions
  python3 tools/classify-location-planes.py --llm --dry-run --limit 3
"""
from __future__ import annotations
import argparse
import json
import re
import sys
import time
import urllib.request
import urllib.error
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LOCATIONS_P = ROOT / "Reputation-Matrix2" / "data" / "locations.json"
EVENTS_P = ROOT / "Reputation-Matrix2" / "data" / "events.json"
MAPDATA_D = ROOT / "Reputation-Matrix2" / "map-data"

PLANES = ("material", "shadow", "fey", "mirror")
PLANE_LABEL = {
    "material": "Material Plane",
    "shadow": "Shadeward (Shadowfell)",
    "fey": "Feyward (Feywild)",
    "mirror": "Deep Mirror",
}

# Markers are deliberate compounds, never bare words: bare "shadow" would
# claim Shadow Pass (Rohan, Material) and bare "overgrown" would claim the
# Rohan hillfort and rider camp. Region hits weigh heaviest — the region
# field is the archivist's own filing decision.
MARKERS = {
    "shadow": ["shadowfell", "shadow estate", "shadeward", "entropic",
               "mazebound", "onyx hand", "skittering grove", "scorncrow"],
    "fey": ["feywild", "feyward", "faerie", "faery", "fairy village",
            "dreaming tree", "satyr", "woodfellow", "overgrown manor",
            "overgrown library"],
    "mirror": ["deep mirror", "mirror dimension", "fractured atrium",
               "planar sanctum", "corvinarus sanctum", "crystalline"],
}
# Explicitly extraplanar, but outside the four mapped layers. A hit here
# with no mapped plane in the region sends the article to review rather
# than letting it default to Material. ("Ethereal" is deliberately absent:
# the archive uses it poetically — "an almost ethereal glow" — not planar.)
UNMAPPED_MARKERS = ["astral"]

FIELD_WEIGHTS = (("region", 3), ("name", 2), ("summary", 1), ("description", 1))

# Same legacy table index.html honours (LOC_PIN_SPECIALS): these POI ids
# count as pins for their articles even without an articleId field.
SPECIALS = {
    "poi_mk_castle": "peachs_castle",
    "poi_mk_toadtown": "toad_town",
    "poi_mk_bramblehaven": "bramblehaven",
    "poi_mk_fawful_lab": "fawful_fortress",
    "poi_mp_warp_pipe_junction": "warp_pipe_junction",
}

# A pin belongs to the planar cluster (and must carry an explicit plane tag)
# when its article's region files it in the Raventree orbit.
CLUSTER_REGION_RES = [
    re.compile(p) for p in
    (r"raventree", r"shadowfell", r"feywild", r"feyward", r"mirror",
     r"deep mirror", r"entropic", r"shadow estate")
]

REVIEW_PREFIX = "Planar layer unresolved:"


# --------------------------------------------------------------------------
# POI parsing (map-data files are JS; parsed structurally, not imported)
# --------------------------------------------------------------------------

def split_poi_items(text: str) -> list[str]:
    """Split every POI array of one map-data file into raw item texts.

    Two shapes exist in the wild: `pointsOfInterest: [...]` (sometimes many
    per file — earth-land has 39) and bare `export const X = [...]` POI-list
    modules (internet/*, pokemon/*, doughnut-hole/*). Non-POI arrays yield
    items without ids, which the caller skips.
    """
    starts = [m.end() for m in
              re.finditer(r"(?:pointsOfInterest\s*:\s*\[|export\s+const\s+\w+\s*=\s*\[)", text)]
    items: list[str] = []
    for start in starts:
        items.extend(_split_array(text, start))
    return items


def _split_array(text: str, start: int) -> list[str]:
    items, depth, cur, instr, quote, esc = [], 0, [], False, "", False
    i = start
    arr_depth = 1
    while i < len(text) and arr_depth > 0:
        ch = text[i]
        # JS comments carry apostrophes ("Rohan's sheet data") that must not
        # open phantom strings, and brackets that must not move the depth.
        if not instr and ch == "/" and i + 1 < len(text) and text[i + 1] == "/":
            while i < len(text) and text[i] != "\n":
                i += 1
            continue
        if not instr and ch == "/" and i + 1 < len(text) and text[i + 1] == "*":
            end = text.find("*/", i + 2)
            i = len(text) if end < 0 else end + 2
            continue
        if instr:
            if cur is not None and depth:
                cur.append(ch)
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == quote:
                instr = False
        else:
            if ch in "'\"":
                instr, quote = True, ch
                if depth:
                    cur.append(ch)
            elif ch == "{":
                depth += 1
                if depth == 1:
                    cur = ["{"]
                else:
                    cur.append(ch)
            elif ch == "}":
                cur.append(ch)
                depth -= 1
                if depth == 0:
                    items.append("".join(cur))
                    cur = []
            elif ch == "[":
                arr_depth += 1
                if depth:
                    cur.append(ch)
            elif ch == "]":
                arr_depth -= 1
                if depth:
                    cur.append(ch)
                if arr_depth == 0:
                    break
            else:
                if depth:
                    cur.append(ch)
        i += 1
    return items


def parse_poi_file(path: Path) -> list[dict]:
    try:
        text = path.read_text(encoding="utf-8")
    except OSError:
        return []
    pois = []
    for item in split_poi_items(text):
        m = re.search(r"\bid\s*:\s*['\"]([^'\"]+)['\"]", item)
        if not m:
            continue
        poi = {"id": m.group(1), "file": str(path.relative_to(ROOT))}
        for key in ("articleId", "locationId"):
            am = re.search(r"\b%s\s*:\s*(\[[^\]]*\]|['\"][^'\"]+['\"])" % key, item)
            if am:
                raw = am.group(1).strip()
                if raw.startswith("["):
                    poi[key] = re.findall(r"['\"]([^'\"]+)['\"]", raw)
                else:
                    poi[key] = [raw.strip("'\"")]
        pm = re.search(r"\bplane\s*:\s*['\"]([^'\"]+)['\"]", item)
        if pm:
            poi["plane"] = pm.group(1).strip().lower()
        xm = re.search(r"\bx\s*:\s*(-?[\d.]+)", item)
        ym = re.search(r"\by\s*:\s*(-?[\d.]+)", item)
        if xm and ym:
            poi["x"], poi["y"] = float(xm.group(1)), float(ym.group(1))
        pois.append(poi)
    return pois


def load_pois() -> list[dict]:
    pois = []
    for path in sorted(MAPDATA_D.rglob("*.js")):
        pois.extend(parse_poi_file(path))
    return pois


# --------------------------------------------------------------------------
# Rule-based plane classifier
# --------------------------------------------------------------------------

def classify(loc: dict) -> dict:
    """Region-anchored plane verdict.

    The region field is the archivist's own filing decision, so it rules:
    a region that names exactly one plane settles the article, and the prose
    only contests (never silently overturns). A region silent on planes
    means a Material-realm filing unless the prose insists loudly (>= 6
    hits). Passing mentions — the Vigilance's "vampire situation in the
    Shadowfell", the Manor's tour of its own reflections — stay below the
    bar on purpose.
    """
    fields = {k: (loc.get(k) or "") for k in ("region", "name", "summary", "description")}
    lowered = {k: v.lower() for k, v in fields.items()}

    def hits(plane: str, field: str) -> int:
        return sum(lowered[field].count(m) for m in MARKERS[plane])

    region_planes = [p for p in ("shadow", "fey", "mirror") if hits(p, "region")]
    prose = {p: hits(p, "name") * 2 + hits(p, "summary") + hits(p, "description")
             for p in ("shadow", "fey", "mirror")}

    def evidence(plane: str) -> list[str]:
        bits = []
        for field, weight in FIELD_WEIGHTS:
            for marker in MARKERS[plane]:
                n = lowered[field].count(marker)
                if n:
                    # The region rules, so it leads the audit trail.
                    bits.append(((field != "region", -(n * weight)),
                                 f"'{marker}' x{n} ({field})"))
        return [b for _, b in sorted(bits)[:2]]

    def verdict(plane, confidence, review, clue, candidates=()):
        return {"plane": plane, "confidence": confidence, "review": review,
                "candidates": list(candidates), "clue": clue[:140]}

    unmapped = sorted({m for m in UNMAPPED_MARKERS
                       if any(m in lowered[f] for f in lowered)})
    if unmapped and not region_planes:
        return verdict("material", "low", True,
                       f"extraplanar ({', '.join(unmapped)}) — outside the four mapped layers")

    if len(region_planes) >= 2:
        top = max(region_planes, key=lambda p: prose[p])
        return verdict(top, "low", True,
                       f"region claims two planes ({', '.join(region_planes)}) — confirm",
                       region_planes)

    if len(region_planes) == 1:
        plane = region_planes[0]
        total = hits(plane, "region") * 3 + prose[plane]
        # Prose loudly for another plane contradicts the filing — human call.
        rivals = {p: prose[p] for p in prose if p != plane and prose[p] >= 2 * max(total, 1)}
        if rivals:
            other = max(rivals, key=rivals.get)
            return verdict(plane, "low", True,
                           f"region says {plane} but prose insists on {other} — confirm",
                           (plane, other))
        conf = "high" if total >= 5 else ("medium" if total >= 3 else "low")
        if prose[plane] == 0:
            # Region-only evidence is a filing claim with no prose behind it —
            # trust it one step less (cf. the Undercity Grotto).
            conf = {"high": "medium", "medium": "low", "low": "low"}[conf]
        review = conf == "low"
        bits = "; ".join(evidence(plane))
        if review:
            bits += " (region claim only — confirm)"
        return verdict(plane, conf, review, bits or f"region files it {plane}",
                       (plane,) if review else ())

    # Region silent on planes: a Material-realm filing unless the prose
    # insists loudly. (No current article reaches the bar; the branch
    # exists so a future filing can.)
    top = max(prose, key=lambda p: prose[p])
    if prose[top] >= 6:
        second = max((p for p in prose if p != top), key=lambda p: prose[p])
        if prose[top] >= 2 * max(prose[second], 1):
            return verdict(top, "medium", True,
                           "; ".join(evidence(top)) + " (region silent; prose only — confirm)",
                           (top,))
        return verdict(top, "low", True,
                       f"region silent, prose split {top}/{second} — confirm",
                       (top, second))
    return verdict("material", "medium", False,
                   "no planar markers — Material by default")


# --------------------------------------------------------------------------
# LM Studio second opinions (ambiguous articles only)
# --------------------------------------------------------------------------

LLM_SYSTEM = """You are the Waluipedia filing clerk assigning a location article to a map layer.
Reply with ONE line of JSON only: {"plane": "<material|shadow|fey|mirror>", "clue": "<=20 words quoting the article>", "confidence": "<medium|low>"}.
Layers: material = the ordinary world (default); shadow = Shadeward/Shadowfell (Shadow Estate grounds, entropic, Onyx Hand); fey = Feyward/Feywild (Overgrown Manor, Dreaming Tree, revel, satyrs); mirror = Deep Mirror / Planar Sanctum (crystalline, fractured atrium).
Never invent facts. If the article gives no planar evidence, answer material with low confidence. One line of JSON, nothing else."""


def list_models(base: str) -> list[str]:
    try:
        with urllib.request.urlopen(base.rstrip("/") + "/models", timeout=10) as r:
            data = json.loads(r.read().decode())
        return [m.get("id", "") for m in data.get("data", []) if m.get("id")]
    except Exception:
        return []


def llm_classify(base: str, model: str, loc: dict, timeout: int) -> dict | None:
    article = (f"NAME: {loc.get('name', '')}\nREGION: {loc.get('region', '')}\n"
               f"SUMMARY: {loc.get('summary', '')}\n"
               f"DESCRIPTION: {(loc.get('description') or '')[:1500]}")
    payload = json.dumps({
        "model": model, "temperature": 0.2, "max_tokens": 200,
        "messages": [{"role": "system", "content": LLM_SYSTEM},
                     {"role": "user", "content": article}],
    }).encode()
    req = urllib.request.Request(base.rstrip("/") + "/chat/completions",
                                 data=payload,
                                 headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            data = json.loads(r.read().decode())
        raw = data["choices"][0]["message"]["content"]
    except Exception as e:
        print(f"  LLM call failed for {loc['id']}: {e}", file=sys.stderr)
        return None
    m = re.search(r"\{[^{}]*\}", raw or "", re.S)
    if not m:
        return None
    try:
        ans = json.loads(m.group(0))
    except json.JSONDecodeError:
        return None
    plane = str(ans.get("plane", "")).strip().lower()
    if plane not in PLANES:
        return None
    conf = str(ans.get("confidence", "low")).strip().lower()
    conf = "medium" if conf == "high" else (conf if conf in ("medium", "low") else "low")
    clue = str(ans.get("clue", "")).strip()[:120] or "LM Studio second opinion"
    return {"plane": plane, "confidence": conf, "clue": clue + " [LM Studio]"}


# --------------------------------------------------------------------------
# Event -> location resolution.
#
# MUST mirror the #/maps journey resolver in index.html rule for rule (the
# node test test-planar-map.mjs asserts they agree on every event). Six
# rules, strongest first, all exact-name operations on the closed location
# set — deliberately no fuzzy matching, so the quantum-core false positive
# cannot recur: the dangerous direction (location -> POI by name) is never
# attempted, and pins always come from filed articleId links.
# --------------------------------------------------------------------------

def _match_key(name: str) -> str:
    """Lowercase location name minus parenthetical qualifiers."""
    return re.sub(r"\s*\([^)]*\)", "", name or "").strip().lower()


def _is_word_char(ch: str) -> bool:
    return ch.isalnum() or ch == "_"


def resolve_event_location(location_field: str, by_id: set[str],
                           by_name: dict[str, str],
                           name_keys: list[tuple[str, str]] | None = None) -> str:
    loc = (location_field or "").strip()
    if not loc:
        return ""
    low = loc.lower()
    # Rules 1-4 (exact id / exact name, whole field or per token) and rule 5
    # (full name standing in the field) compete by POSITION: the earliest
    # mention wins, so "primarily Toad Town, ..., Peach's Castle" lands on
    # the primarily-listed place. Same-position ties break toward the
    # explicit token, then the longest match, then id for determinism.
    cands: list[tuple[int, int, int, str]] = []
    if loc in by_id:
        cands.append((0, 1, -len(loc), loc))
    tokens = [t.strip() for t in re.split(r"[,;/|]", loc) if t.strip()]
    for tok in tokens:
        if tok in by_id:
            cands.append((low.find(tok.lower()), 2, -len(tok), tok))
    if low in by_name:
        cands.append((0, 3, -len(loc), by_name[low]))
    for tok in tokens:
        if tok.lower() in by_name:
            cands.append((low.find(tok.lower()), 4, -len(tok),
                          by_name[tok.lower()]))
    if name_keys:
        for key, lid in name_keys:
            if len(key) < 8 and len(key.split()) < 2:
                continue
            start = 0
            while True:
                i = low.find(key, start)
                if i < 0:
                    break
                before = low[i - 1] if i > 0 else " "
                after = low[i + len(key)] if i + len(key) < len(low) else " "
                if not _is_word_char(before) and not _is_word_char(after):
                    cands.append((i, 5, -len(key), lid))
                    break
                start = i + 1
    if cands:
        cands.sort()
        return cands[0][3]
    if not name_keys:
        return ""
    # 6. a token that is a full-word prefix of a location name
    #    ("Tymnas's Cottage" -> "Tymnas's Cottage & The ... Maze").
    for tok in tokens:
        tlow = tok.lower()
        if len(tlow) < 8:
            continue
        for key, lid in name_keys:
            if key.startswith(tlow) and (len(key) == len(tlow)
                                         or not _is_word_char(key[len(tlow)])):
                return lid
    return ""


# --------------------------------------------------------------------------
# Report assembly
# --------------------------------------------------------------------------

def build_report() -> dict:
    locations = json.loads(LOCATIONS_P.read_text(encoding="utf-8"))
    events = json.loads(EVENTS_P.read_text(encoding="utf-8"))
    pois = load_pois()

    verdicts = {loc["id"]: classify(loc) for loc in locations}
    by_id = {loc["id"] for loc in locations}
    by_name = {(loc.get("name") or "").lower(): loc["id"] for loc in locations
               if loc.get("name")}
    # Longest names first so rule 5 meets the most specific name first.
    name_keys = sorted(
        ((_match_key(loc.get("name", "")), loc["id"]) for loc in locations
         if _match_key(loc.get("name", ""))),
        key=lambda t: -len(t[0]))

    # article -> pins
    pins_for: dict[str, list[dict]] = {loc["id"]: [] for loc in locations}
    dangling = []
    for poi in pois:
        ids = list(poi.get("articleId", [])) + list(poi.get("locationId", []))
        if poi["id"] in SPECIALS:
            ids.append(SPECIALS[poi["id"]])
        for aid in ids:
            if aid in pins_for:
                if all(p["id"] != poi["id"] for p in pins_for[aid]):
                    pins_for[aid].append(poi)
            else:
                dangling.append(f"{poi['file']}:{poi['id']} -> {aid}")

    missing_pins, mismatches, untagged = [], [], []
    for loc in locations:
        lid = loc["id"]
        pins = pins_for[lid]
        if not pins:
            missing_pins.append(lid)
            continue
        verdict = verdicts[lid]
        for poi in pins:
            pin_plane = poi.get("plane", "material")
            if pin_plane not in PLANES:
                mismatches.append((lid, poi["id"], pin_plane,
                                   f"not a known layer (want {verdict['plane']})"))
            elif (not verdict["review"] and verdict["confidence"] in ("high", "medium")
                    and pin_plane != verdict["plane"]):
                mismatches.append((lid, poi["id"], pin_plane,
                                   f"article says {verdict['plane']} ({verdict['confidence']})"))
            region = (loc.get("region") or "").lower()
            if ("plane" not in poi and any(rx.search(region) for rx in CLUSTER_REGION_RES)):
                untagged.append((lid, poi["id"], poi["file"]))

    # journey coverage: which events reach a pin
    resolved, unpinned, unresolved = [], [], []
    unresolved_strings: Counter[str] = Counter()
    for ev in events:
        lid = resolve_event_location(ev.get("location", ""), by_id, by_name,
                                     name_keys)
        if not lid:
            unresolved.append(ev["id"])
            key = re.sub(r"\s+", " ", (ev.get("location") or "").strip())
            key = key.split(",")[0].split("/")[0].split(";")[0].strip()
            if key:
                unresolved_strings[key[:90]] += 1
            continue
        if pins_for.get(lid):
            resolved.append(ev["id"])
        else:
            unpinned.append((ev["id"], lid))

    # missing pins ranked by how many journey events need them
    need_count: Counter[str] = Counter(lid for _, lid in unpinned)

    return {
        "locations": locations, "events": events, "verdicts": verdicts,
        "pins_for": pins_for, "dangling": sorted(set(dangling)),
        "missing_pins": missing_pins, "mismatches": mismatches,
        "untagged": untagged, "resolved": resolved, "unpinned": unpinned,
        "unresolved": unresolved, "unresolved_strings": unresolved_strings,
        "need_count": need_count,
    }


def print_report(rep: dict, verbose: bool = True) -> None:
    verdicts, locations = rep["verdicts"], rep["locations"]
    by_id = {loc["id"]: loc for loc in locations}
    counts = Counter(v["plane"] for v in verdicts.values())
    review = [lid for lid, v in verdicts.items() if v["review"]]

    print(f"locations: {len(locations)}  "
          + "  ".join(f"{p}={counts.get(p, 0)}" for p in PLANES)
          + f"  flagged for review={len(review)}")
    if verbose:
        for loc in locations:
            v = verdicts[loc["id"]]
            pins = rep["pins_for"][loc["id"]]
            pin_txt = ("no pin" if not pins
                       else f"{len(pins)} pin(s): " + ",".join(p["id"] for p in pins))
            flag = "  <-- REVIEW" if v["review"] else ""
            print(f"  {loc['id']:42s} {v['plane']:8s} {v['confidence']:6s} "
                  f"{pin_txt:52s} {v['clue']}{flag}")
    elif review:
        print("flagged for review:")
        for lid in review:
            v = verdicts[lid]
            print(f"  {lid}: guess={v['plane']} ({v['confidence']}) — {v['clue']}")

    print(f"\nmissing pins: {len(rep['missing_pins'])} location(s) with no POI")
    for lid in sorted(rep["missing_pins"],
                      key=lambda x: (-rep["need_count"].get(x, 0), x)):
        v = verdicts[lid]
        need = rep["need_count"].get(lid, 0)
        need_txt = f" (needed by {need} event(s))" if need else ""
        print(f"  {lid} [{v['plane']}]{need_txt} — {(by_id[lid].get('region') or '')[:70]}")

    print(f"\nplane mismatches (pin tag vs article): {len(rep['mismatches'])}")
    for lid, poi_id, pin_plane, why in rep["mismatches"]:
        print(f"  {poi_id} [{pin_plane}] -> {lid}: {why}")

    print(f"\ncluster pins missing an explicit plane tag: {len(rep['untagged'])}")
    for lid, poi_id, f in rep["untagged"]:
        print(f"  {poi_id} -> {lid} ({f})")

    if rep["dangling"]:
        print(f"\ndangling articleIds (no such location): {len(rep['dangling'])}")
        for d in rep["dangling"][:10]:
            print(f"  {d}")

    n_ev = len(rep["events"])
    print(f"\njourney coverage: {len(rep['resolved'])}/{n_ev} events resolve to a pinned location; "
          f"{len(rep['unpinned'])} resolve to an unpinned location; "
          f"{len(rep['unresolved'])} resolve nowhere")
    if verbose and rep["unresolved_strings"]:
        print("most-cited unresolved location strings (missing location records?):")
        for s, n in rep["unresolved_strings"].most_common(12):
            print(f"  x{n:3d}  {s[:90]}")


def apply_verdicts(rep: dict, llm_wins: dict[str, dict]) -> int:
    locations = rep["locations"]
    changed = 0
    for loc in locations:
        v = dict(rep["verdicts"][loc["id"]])
        if loc["id"] in llm_wins:
            w = llm_wins[loc["id"]]
            v["plane"], v["confidence"] = w["plane"], w["confidence"]
            v["clue"] = w["clue"]
            v["review"] = w["confidence"] == "low"
            v["candidates"] = [] if not v["review"] else [w["plane"]]
        new = {"plane": v["plane"], "planeConfidence": v["confidence"],
               "planeClue": v["clue"]}
        if v["review"]:
            cands = f" candidates: {', '.join(v['candidates'])}" if v.get("candidates") else ""
            new["needsReview"] = True
            new["reviewNote"] = f"{REVIEW_PREFIX} {v['clue']}{cands}"[:280]
        elif (loc.get("needsReview") and
                str(loc.get("reviewNote", "")).startswith(REVIEW_PREFIX)):
            # Our own earlier flag, now resolved — lift it, leave others alone.
            new["needsReview"] = False
            new["reviewNote"] = ""
        patch = {k: val for k, val in new.items() if loc.get(k) != val}
        # Drop a lifted flag entirely rather than writing needsReview:false.
        if patch.get("needsReview") is False and "reviewNote" in patch:
            loc.pop("needsReview", None)
            loc.pop("reviewNote", None)
            patch.pop("needsReview", None)
            patch.pop("reviewNote", None)
        if patch:
            loc.update(patch)
            changed += 1
    LOCATIONS_P.write_text(json.dumps(locations, indent=2, ensure_ascii=False),
                           encoding="utf-8")
    return changed


def main() -> int:
    ap = argparse.ArgumentParser(description="Classify location articles into planar map layers")
    ap.add_argument("--check", action="store_true", help="concise report, exit 0 unless --strict")
    ap.add_argument("--strict", action="store_true", help="exit 1 while gaps remain")
    ap.add_argument("--json", action="store_true", help="machine-readable report")
    ap.add_argument("--apply", action="store_true", help="write plane fields to locations.json")
    ap.add_argument("--llm", action="store_true", help="ask LM Studio about ambiguous articles")
    ap.add_argument("--base-url", default="http://127.0.0.1:1234/v1",
                    help="LM Studio OpenAI-compatible endpoint")
    ap.add_argument("--model", default="", help="model id (default: first available)")
    ap.add_argument("--timeout", type=int, default=120)
    ap.add_argument("--limit", type=int, default=0, help="max LLM calls (0 = all ambiguous)")
    ap.add_argument("--sleep", type=float, default=1.0, help="seconds between LLM calls")
    ap.add_argument("--dry-run", action="store_true", help="print LLM targets, call nothing, write nothing")
    args = ap.parse_args()

    rep = build_report()

    if args.json:
        out = {
            "verdicts": rep["verdicts"],
            "missing_pins": rep["missing_pins"],
            "mismatches": [list(m) for m in rep["mismatches"]],
            "untagged": [list(u) for u in rep["untagged"]],
            "dangling": rep["dangling"],
            "journey": {"resolved": rep["resolved"], "unpinned": [list(u) for u in rep["unpinned"]],
                        "unresolved": rep["unresolved"]},
        }
        print(json.dumps(out, indent=2))
        return 0

    targets = [lid for lid, v in rep["verdicts"].items()
               if v["review"] or v["confidence"] == "low"]
    llm_wins: dict[str, dict] = {}

    if args.llm or args.dry_run:
        print(f"LM Studio targets: {len(targets)} ambiguous article(s)")
        for lid in targets:
            print(f"  {lid}: rules say {rep['verdicts'][lid]['plane']} "
                  f"({rep['verdicts'][lid]['confidence']}) — {rep['verdicts'][lid]['clue']}")
        if args.dry_run:
            print("(dry run: no calls made)")
        else:
            model = args.model or (list_models(args.base_url)[:1] or [""])[0]
            if not model:
                print(f"LM Studio not reachable at {args.base_url}", file=sys.stderr)
                return 2
            print(f"model: {model}")
            by_id = {loc["id"]: loc for loc in rep["locations"]}
            for i, lid in enumerate(targets):
                if args.limit and i >= args.limit:
                    break
                if i:
                    time.sleep(args.sleep)
                win = llm_classify(args.base_url, model, by_id[lid], args.timeout)
                if win:
                    llm_wins[lid] = win
                    print(f"  {lid}: LLM says {win['plane']} ({win['confidence']}) — {win['clue']}")
                else:
                    print(f"  {lid}: LLM gave no usable verdict — rules stand")

    if args.apply and not args.dry_run:
        n = apply_verdicts(rep, llm_wins)
        print(f"wrote {LOCATIONS_P.name}: {n} location(s) updated")

    print_report(rep, verbose=not args.check)

    if args.strict:
        gaps = ([lid for lid, v in rep["verdicts"].items() if v["review"]]
                + [m[1] for m in rep["mismatches"]]
                + [u[1] for u in rep["untagged"]])
        if gaps:
            print(f"\nSTRICT: {len(gaps)} gap(s) remain", file=sys.stderr)
            return 1
        print("\nSTRICT: planar layers clean")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())