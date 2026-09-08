#!/usr/bin/env python3
"""Wah Notes integrity: store schema, author resolution, routing coverage,
and page/module wiring. Fails on the first problem found."""
import json
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
fails = []


def fail(msg):
    fails.append(msg)


# ---------- store ----------
try:
    w = json.loads((ROOT / "Reputation-Matrix2/data/wahnotes.json").read_text())
except Exception as e:
    print(f"FAIL: wahnotes.json unreadable: {e}")
    sys.exit(1)

DIMS = {"records", "factions", "participants", "eras", "types", "locations"}
seen_ids = set()
for r in w.get("routed", []):
    for k in ("id", "authorId", "author", "text", "showsOn"):
        if not r.get(k):
            fail(f"routed {r.get('id', '?')} missing {k}")
    if r.get("id") in seen_ids:
        fail(f"duplicate routed id {r.get('id')}")
    seen_ids.add(r.get("id"))
    so = r.get("showsOn", {})
    if set(so) - DIMS:
        fail(f"routed {r.get('id')} bad dims {set(so) - DIMS}")
    if not any(so.get(d) for d in DIMS):
        fail(f"routed {r.get('id')} matches nowhere (all dims empty)")

known_ids = set()
for f in ("events", "battles", "characters", "locations", "factions", "nations", "races"):
    try:
        d = json.loads((ROOT / f"Reputation-Matrix2/data/{f}.json").read_text())
        recs = d if isinstance(d, list) else d.get(f, [])
        known_ids.update(x.get("id") for x in recs if isinstance(x, dict) and x.get("id"))
    except FileNotFoundError:
        pass
for rid, notes in (w.get("pinned") or {}).items():
    if rid not in known_ids:
        fail(f"pinned unknown record {rid}")
    for n in notes:
        if not n.get("authorId") or not n.get("text"):
            fail(f"pinned {rid} note missing author/text")
for g in w.get("guests", []):
    if g.get("recordId") not in known_ids:
        fail(f"guest {g.get('id')} unknown record {g.get('recordId')}")
    if not g.get("title") or not g.get("body"):
        fail(f"guest {g.get('id')} missing title/body")

# ---------- authors ----------
src = (ROOT / "index.html").read_text()
comp_ids = set(re.findall(r"\{\s*id:\s*'([a-z0-9_]+)'\s*,\s*name:", src))
voices_m = re.search(r"const WAH_VOICES=\{(.*?)\};", src, re.S)
voice_ids = set(re.findall(r"(\w+):\{name:", voices_m.group(1))) if voices_m else set()
pool = Counter(r["authorId"] for r in w.get("routed", []))
if len(pool) < 20:
    fail(f"only {len(pool)} distinct routed authors, want >= 20")
top, topn = pool.most_common(1)[0]
if topn / max(1, sum(pool.values())) > 0.20:
    fail(f"author {top} dominates routing ({topn} remarks)")
for a in set(pool) | {n.get("authorId") for v in (w.get("pinned") or {}).values() for n in v} | {g.get("authorId") for g in w.get("guests", [])}:
    if a not in comp_ids and a not in voice_ids:
        fail(f"author {a} resolves to no companion or Wah voice")

# ---------- coverage sim (mirrors wahTagset matching) ----------
ev = json.loads((ROOT / "Reputation-Matrix2/data/events.json").read_text())
ba = json.loads((ROOT / "Reputation-Matrix2/data/battles.json").read_text())
evs = ev if isinstance(ev, list) else ev.get("events", [])
bas = ba if isinstance(ba, list) else ba.get("battles", [])


def match(r, rec):
    so = r["showsOn"]
    if rec["id"] in (so.get("records") or []):
        return True
    if set(so.get("factions") or []) & rec["fac"]:
        return True
    if {str(x).lower() for x in (so.get("participants") or [])} & rec["par"]:
        return True
    blob = rec["blob"]
    if any(str(t).lower() in blob for t in (so.get("eras") or []) + (so.get("types") or [])):
        return True
    return any(str(t).lower() in rec["loc"] for t in (so.get("locations") or []))


covered = 0
for r in evs + bas:
    fac = set()
    rc = r.get("reputationChanges")
    if isinstance(rc, dict):
        for v in rc.values():
            if isinstance(v, dict):
                fac.update(str(k).lower() for k in v)
    par = set()
    for p in r.get("participants") or []:
        v = p.get("id") if isinstance(p, dict) else p
        if v:
            par.add(str(v).lower())
        if isinstance(p, dict) and p.get("name"):
            par.add(p["name"].lower())
    rec = {"id": r["id"], "fac": fac, "par": par,
           "blob": f"{r.get('era') or ''} {r.get('type') or ''}".lower(),
           "loc": str(r.get("location") or "").lower()}
    if any(match(x, rec) for x in w.get("routed", [])):
        covered += 1
total = len(evs) + len(bas)
if covered / max(1, total) < 0.90:
    fail(f"routing covers {covered}/{total} events+battles, want >= 90%")

# ---------- wiring ----------
needles = ["function wahNotesFor(", "function wahNotesHtml(", "function wahLastSeen(",
           "function wahPartyTokens(", "function wahChatterByPoi(", "function view_whoami(",
           "function view_home(", "route==='who'", "route==='home-classic'",
           "t==='chatter'", "data-party-toggle", "'wahnotes'", ".wah-note{",
           ".dash-door{", ".who-card{"]
for n in needles:
    if n not in src:
        fail(f"index.html missing {n}")
# Batch 2b: dashboard calendar scoping, who grid, census lenses, newspaper.
needles2 = ['id="home-cal" class="mini-calendar"', ".who-rail{display:grid",
             "function wahCensusByPoi(", "function wahFaithName(",
             "dashDoor('📺','RNN'", "rnnPaperFrame",
             "app/pages/newspaper/newspaper.html"]
for n in needles2:
    if n not in src:
        fail(f"index.html missing {n}")
if src.count("census:wahCensusByPoi") < 2:
    fail("census not passed from both map mounts")
# Batch 2c: scored wah tiers, curated filings, dashboard micro-features.
# Batch 3: unified home (Front Page) — hero, ticker, status band, rail.
needles3 = ["function wahScoreRemark(", "function dashFilingOrder(",
             "dashDoor('📜','Events'", "function homeHeroHtml(",
             "function homeTickerHtml(", "function homeStatusBand(",
             "function homeOtdList(", "function dashDice(", "function dashNoteRead(",
             "waluipediaLastRead", "waluipediaRecents", "waluipediaSeenOps",
             "waluipediaVisits", ".hm-hero{", "red debts",
             "Surprise me", "cover-date", "function view_updates(",
             "timeline-thumb", "class=\"tkick\"", "hm-upd-row"]
for n in needles3:
    if n not in src:
        fail(f"index.html missing {n}")
mod = (ROOT / "Reputation-Matrix2/app/pages/maps/atlas-map-v2.js").read_text()
for n in ("modes.chatter", "ACTIVE_CHATTER", "data-token", "opts.party", "defaultMode",
           "modes.species", "modes.religion", "modes.culture", "modes.factions", "ACTIVE_CENSUS"):
    if n not in mod:
        fail(f"atlas-map-v2.js missing {n}")
css = (ROOT / "Reputation-Matrix2/app/pages/maps/atlas-map-v2.css").read_text()
for n in (".atlas-v2-token{", ".atlas-v2-chatter{"):
    if n not in css:
        fail(f"atlas-map-v2.css missing {n}")

if fails:
    print("FAIL wah notes:")
    for f in fails[:15]:
        print(" -", f)
    sys.exit(1)
print(f"PASS wah notes: {len(w['routed'])} routed / {len(pool)} authors / "
      f"{covered}/{total} records covered / wiring OK")
