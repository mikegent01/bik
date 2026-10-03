#!/usr/bin/env python3
"""Verify the Discovered Technology ledger against the filings it cites.

Reputation-Matrix2/data/technology.json is a ledger of technology the articles
actually describe. This check refuses an entry that the archive cannot back:

  - ids are unique, `tech_`-prefixed, snake_case
  - every `firstSeen.event`, sighting event and quote event exists in events.json
  - every quote is VERBATIM from its source article (markdown, links, curly
    quotes and whitespace are normalised on both sides; the words are not)
  - `firstSeen.year` matches a year that appears in the source article's date
    (or the entry says so with confidence "estimated"/"unverified")
  - territory.nation resolves in nations.json, territory.location in
    locations.json, territory.region in meta.regions, plane is a known plane
  - origin.faction and every tension edge faction resolve in factions.json or
    factionColors.json; origin.holder resolves in characters.json
  - kind / tier are declared in meta; pressure is an integer in [-3, 3]
  - model.recipe exists in assets/technology/tech-models.js
  - the index.html wiring is present (data key, route, nav, apparatus tab)

Usage:
    python3 tools/check-technology.py            # report, exit 1 on any failure
    python3 tools/check-technology.py --quiet    # only the verdict
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
PLANES = {"material", "shadow", "fey", "mirror", "disputed"}


def norm(s) -> str:
    s = str(s or "")
    s = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", s)          # markdown links -> text
    s = re.sub(r"<[^>]+>", " ", s)                            # html tags
    s = (s.replace("\u2019", "'").replace("\u2018", "'").replace("\u201c", '"').replace("\u201d", '"')
          .replace("\u2014", "-").replace("\u2013", "-").replace("\u2026", "..."))
    s = re.sub(r"[*_`#>]+", "", s)                            # emphasis / headings / quotes
    s = re.sub(r"\s+", " ", s).strip().lower()
    return s


def event_text(e: dict) -> str:
    parts = []
    for k in ("name", "title", "summary", "description", "notableFeatures", "aftermath", "outcome",
              "waluigiAssessment", "status", "imageCaption"):
        v = e.get(k)
        if isinstance(v, list):
            v = " // ".join(map(str, v))
        if v:
            parts.append(str(v))
    for s in e.get("sections") or []:
        if isinstance(s, dict):
            for k in ("heading", "title", "name", "body", "text", "overview", "waluigi_note", "content"):
                if s.get(k):
                    parts.append(str(s[k]))
    for p in e.get("participants") or []:
        if isinstance(p, dict) and p.get("role"):
            parts.append(str(p["role"]))
    return norm(" ".join(parts))


def load(name: str):
    with open(DATA / name, encoding="utf-8") as fh:
        return json.load(fh)


def main() -> int:
    quiet = "--quiet" in sys.argv
    problems: list[str] = []
    warnings: list[str] = []

    def fail(msg: str):
        problems.append(msg)

    doc = load("technology.json")
    meta = doc.get("meta") or {}
    entries = doc.get("entries") or []
    events = {e["id"]: e for e in load("events.json") if isinstance(e, dict) and e.get("id")}
    nations = {n["id"] for n in load("nations.json") if isinstance(n, dict) and n.get("id")}
    locations = {l["id"] for l in load("locations.json") if isinstance(l, dict) and l.get("id")}
    characters = {c["id"] for c in load("characters.json") if isinstance(c, dict) and c.get("id")}
    factions_raw = load("factions.json")
    faction_items = factions_raw if isinstance(factions_raw, list) else (factions_raw.get("factions") or list(factions_raw.values()))
    factions = {f["id"] for f in faction_items if isinstance(f, dict) and f.get("id")}
    try:
        factions |= set(load("factionColors.json").keys())
    except Exception:
        pass
    kinds = set((meta.get("kinds") or {}).keys())
    tiers = {t.get("id") for t in (meta.get("tiers") or [])}
    regions = set((meta.get("regions") or {}).keys())

    models_src = (ROOT / "assets" / "technology" / "tech-models.js").read_text(encoding="utf-8")
    recipes = set(re.findall(r"^\s*T\.([a-z_][a-z0-9_]*)\s*=", models_src, flags=re.M))

    if not entries:
        fail("technology.json has no entries")

    seen_ids: set[str] = set()
    event_cache: dict[str, str] = {}
    for i, e in enumerate(entries):
        eid = e.get("id") or f"<entry {i}>"
        tag = f"[{eid}]"
        if not re.fullmatch(r"tech_[a-z0-9_]+", str(e.get("id") or "")):
            fail(f"{tag} id must be snake_case with a tech_ prefix")
        if eid in seen_ids:
            fail(f"{tag} duplicate id")
        seen_ids.add(eid)
        for key in ("name", "kind", "tier", "territory", "firstSeen", "status", "summary", "record", "quotes", "model"):
            if key not in e:
                fail(f"{tag} missing field '{key}'")
        if e.get("kind") not in kinds:
            fail(f"{tag} kind '{e.get('kind')}' is not declared in meta.kinds")
        if e.get("tier") not in tiers:
            fail(f"{tag} tier '{e.get('tier')}' is not declared in meta.tiers")
        p = e.get("pressure", 0)
        if not isinstance(p, int) or p < -3 or p > 3:
            fail(f"{tag} pressure must be an integer in [-3, 3], got {p!r}")

        terr = e.get("territory") or {}
        if terr.get("nation") and terr["nation"] not in nations:
            fail(f"{tag} territory.nation '{terr['nation']}' not in nations.json")
        if terr.get("location") and terr["location"] not in locations:
            fail(f"{tag} territory.location '{terr['location']}' not in locations.json")
        if terr.get("region") and terr["region"] not in regions:
            fail(f"{tag} territory.region '{terr['region']}' not in meta.regions")
        if terr.get("plane") and terr["plane"] not in PLANES:
            fail(f"{tag} territory.plane '{terr['plane']}' unknown (one of {sorted(PLANES)})")
        if not terr.get("label"):
            fail(f"{tag} territory.label is required (the ground as the filing names it)")

        fs = e.get("firstSeen") or {}
        ev_id = fs.get("event")
        if ev_id not in events:
            fail(f"{tag} firstSeen.event '{ev_id}' not in events.json")
        else:
            ev = events[ev_id]
            yr = fs.get("year")
            conf = fs.get("confidence", "filed")
            if conf not in ("filed", "estimated", "unverified"):
                fail(f"{tag} firstSeen.confidence must be filed|estimated|unverified")
            years_in_event = set(int(y) for y in re.findall(r"\b(\d{3,4})\s*BF\b", str(ev.get("date") or "") + " " + str(ev.get("timeWindow") or "")))
            tc = str(ev.get("timeCode") or "")
            m = re.match(r"TC:(\d{3,4})-", tc)
            if m:
                years_in_event.add(int(m.group(1)))
            if yr is None:
                if conf == "filed":
                    fail(f"{tag} firstSeen.year is null but confidence is 'filed'")
            elif years_in_event and yr not in years_in_event and conf == "filed":
                fail(f"{tag} firstSeen.year {yr} is not a year on the source article's date ({sorted(years_in_event)}); mark it estimated or fix it")
            elif not years_in_event and conf == "filed":
                warnings.append(f"{tag} source article carries no year on its date; year {yr} rests on the filer")
            if fs.get("timeCode") and fs["timeCode"] != ev.get("timeCode"):
                fail(f"{tag} firstSeen.timeCode {fs['timeCode']} differs from the article's {ev.get('timeCode')}")

        for s in e.get("sightings") or []:
            if s.get("event") not in events:
                fail(f"{tag} sighting event '{s.get('event')}' not in events.json")

        quotes = e.get("quotes") or []
        if not quotes:
            fail(f"{tag} needs at least one verbatim quote from a source article")
        for q in quotes:
            qe = q.get("event")
            if qe not in events:
                fail(f"{tag} quote cites unknown event '{qe}'")
                continue
            if qe not in event_cache:
                event_cache[qe] = event_text(events[qe])
            if norm(q.get("text")) not in event_cache[qe]:
                fail(f"{tag} quote is not in '{qe}': {str(q.get('text'))[:70]!r}")

        org = e.get("origin") or {}
        if org.get("faction") and org["faction"] not in factions:
            fail(f"{tag} origin.faction '{org['faction']}' not a known faction key")
        if org.get("holder") and org["holder"] not in characters:
            fail(f"{tag} origin.holder '{org['holder']}' not in characters.json")
        for t in e.get("tension") or []:
            between = t.get("between") or []
            if len(between) != 2:
                fail(f"{tag} tension edge needs exactly two faction keys")
                continue
            for fk in between:
                if fk not in factions:
                    fail(f"{tag} tension faction '{fk}' not a known faction key")
            w = t.get("weight")
            if not isinstance(w, int) or w < 1 or w > 3:
                fail(f"{tag} tension weight must be an integer 1..3")
            if not t.get("why"):
                fail(f"{tag} tension edge needs a 'why'")

        model = e.get("model") or {}
        if model.get("recipe") not in recipes:
            fail(f"{tag} model.recipe '{model.get('recipe')}' is not defined in tech-models.js")

    # wiring in index.html
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    for needle, what in (
        ("'filing-updates','technology']", "DATA_FILES carries 'technology'"),
        ("route==='technology'", "Router handles #/technology"),
        ("label:'Discovered Technology'", "sidebar carries the Discovered Technology link"),
        ("TECH.eventPanel(item.id)", "event apparatus band carries the Technology tab"),
        ("TECH.searchDocs()", "Research Bureau indexes the ledger"),
        ('<script src="assets/technology/technology.js', "technology.js is loaded"),
        ('<script src="assets/technology/tech-models.js', "tech-models.js is loaded"),
        ('<script src="assets/technology/tech-gl.js', "tech-gl.js (the renderer) is loaded"),
        ('<link rel="stylesheet" href="assets/technology/technology.css', "technology.css is linked"),
    ):
        if needle not in html:
            fail(f"index.html wiring missing: {what}")
    gl_at = html.find('<script src="assets/technology/tech-gl.js')
    if gl_at >= 0 and gl_at > html.find('<script src="assets/technology/tech-models.js'):
        fail("index.html loads tech-models.js before tech-gl.js (the renderer must come first)")
    if "three.module.js" in html or "jsdelivr.net/npm/three" in html:
        fail("index.html still references Three.js — the viewer is self-contained (tech-gl.js)")

    if not quiet:
        for w in warnings:
            print("warn:", w)
        for p in problems:
            print("FAIL:", p)
    print(f"technology ledger: {len(entries)} entries, {sum(len(e.get('quotes') or []) for e in entries)} verified quotes, "
          f"{len(recipes)} recipes, {len(problems)} problem(s), {len(warnings)} warning(s)")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
