#!/usr/bin/env python3
"""Injury table tiers — registry, per-table contract and the duplicate guard
(no server needed).

Loads tools/generate-injury-table.py as a module, runs its full check, then
plants duplicates in an in-memory copy of the tables and proves the guard
catches each kind: a repeated name, identical mechanic text, a near-identical
mechanic, and a planted tier that is one row short. Also checks the static
wiring: every reader names the registry, and no character reference points at
a row that is not on its table.

    python3 tools/tests/test-injury-tables.py
"""
import copy
import importlib.util
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
spec = importlib.util.spec_from_file_location("injtool", ROOT / "tools" / "generate-injury-table.py")
inj = importlib.util.module_from_spec(spec)
spec.loader.exec_module(inj)

fails, oks = [], []


def check(label, cond, extra=""):
    (oks if cond else fails).append(label + (f" — {extra}" if extra and not cond else ""))


# ---- the real registry passes, with the expected shape -------------------
reg, tables = inj.check_all()
check("registry default is the Permanent Injury Table", reg["default"] == inj.DEFAULT_TABLE)
check("three authored tables on the registry", len(tables) == 3, str(list(tables)))
check("every table has exactly 100 rows", all(len(t["entries"]) == 100 for t in tables.values()))
check("tiers inherit the default cure ladder",
      all(t["cureLadder"].get("inherits") == inj.DEFAULT_TABLE for tid, t in tables.items() if tid != inj.DEFAULT_TABLE))
check("default table keeps its own ladder", isinstance(tables[inj.DEFAULT_TABLE]["cureLadder"], list))
check("row 1 of every table is Death", all(t["entries"][0]["category"] == "Death" for t in tables.values()))
check("row 100 of every table is Survivability+", all(t["entries"][99]["category"] == "Survivability+" for t in tables.values()))
bands = [tuple((b["from"], b["to"], b["category"]) for b in t["bands"]) for t in tables.values()]
check("all tables share the band structure", len(set(bands)) == 1)
planned = reg.get("planned") or []
check("planned tiers carry no file and no rows", all("file" not in p and "entries" not in p for p in planned))
check("planned tier ids do not collide with authored ones", not {p.get("id") for p in planned} & set(tables))
check("every tier file sits under data/injury-tables/",
      all(t["file"].startswith("injury-tables/") for t in reg["tables"] if t["id"] != inj.DEFAULT_TABLE))

# ---- the guard catches what it is for ------------------------------------
def planted(mutate):
    copy_ = copy.deepcopy(tables)
    mutate(copy_)
    return inj.cross_table_guard(copy_)


def dup_name(ts):
    ts["venom_and_web_d100"]["entries"][40]["injuryType"] = tables[inj.DEFAULT_TABLE]["entries"][58]["injuryType"]  # Sprained Thumb


def dup_text(ts):
    ts["fire_and_blast_d100"]["entries"][40]["description"] = tables[inj.DEFAULT_TABLE]["entries"][58]["description"]


def near_dup(ts):
    src = tables[inj.DEFAULT_TABLE]["entries"][11]["description"]
    ts["fire_and_blast_d100"]["entries"][11]["description"] = src.replace(".", ", obviously.", 1)


check("guard flags a repeated injury name", any("duplicate injury name" in p for p in planted(dup_name)))
check("guard flags identical mechanic text", any("identical mechanic text" in p for p in planted(dup_text)))
check("guard flags a near-identical mechanic", any("near-duplicate mechanic" in p for p in planted(near_dup)))
check("guard is quiet on the real tables", not inj.cross_table_guard(tables))
check("fingerprint drops stop-words", "the" not in inj.fingerprint("the knee gives without warning until the end"))
check("injury reference ids: default keeps injury_NNN", inj.injury_ref_id(inj.DEFAULT_TABLE, 59) == "injury_059")
check("injury reference ids: tiers use their slug", inj.injury_ref_id("venom_and_web_d100", 7) == "venom_and_web_007")

# ---- character references resolve on their table --------------------------
chars = json.loads((ROOT / "Reputation-Matrix2/data/characters.json").read_text(encoding="utf-8"))
bad = []
for c in chars:
    for ref in c.get("injuries") or []:
        tid = ref.get("table") or inj.DEFAULT_TABLE
        t = tables.get(tid)
        if not t or not any(e["d100"] == ref.get("roll") for e in t["entries"]):
            bad.append((c["id"], ref))
        elif ref.get("injuryId") != inj.injury_ref_id(tid, ref["roll"]):
            bad.append((c["id"], ref.get("injuryId")))
check("every character injury reference resolves on its table", not bad, str(bad[:3]))

# ---- readers name the registry -------------------------------------------
index = (ROOT / "index.html").read_text(encoding="utf-8")
desk = (ROOT / "Reputation-Matrix2/app/pages/standalone/injury-desk.html").read_text(encoding="utf-8")
casino = (ROOT / "Reputation-Matrix2/app/pages/crime-and-punishment/crime-and-punishment.js").read_text(encoding="utf-8")
check("index.html lazy-loads the registry", "loadInjuryTiers" in index and "'injuryTables.json'" in index)
check("index.html does not put the registry on the boot path", not re.search(r"DATA_FILES\s*=\s*\[[^\]]*injuryTables", index))
check("index.html tier chips + panel resolve ref.table", "injuryTierChips" in index and "ref.table||INJURY_DEFAULT_TABLE" in index)
check("standalone desk reads the registry and honours #table=", "injuryTables.json" in desk and "#table=" in desk)
check("casino reads the registry and keeps injuries.json as the default", "loadJSON('injuryTables.json')" in casino and "loadJSON('injuries.json')" in casino)
guide = (ROOT / "docs/INJURY_TABLE_GUIDE.md").read_text(encoding="utf-8")
check("the guide documents tiers", "injuryTables.json" in guide and "duplicate" in guide.lower())

for o in oks:
    print("  ok  ", o)
for f in fails:
    print("  FAIL", f)
print(f"{len(oks)} passed, {len(fails)} failed")
sys.exit(1 if fails else 0)
