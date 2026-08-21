#!/usr/bin/env python3
"""Grow the Mages' Guild Codex (C.C.D.) one run at a time.

The site reader wants JSON with raw prose. This script only appends unique
sections. Re-run until the book is long. It does not call a network model;
it fills bureaucratic voice from templates so you can keep generating offline.

  python3 tools/gen-mages-guild-code.py
  python3 tools/gen-mages-guild-code.py --count 40
  python3 tools/gen-mages-guild-code.py --seed 7

Output: Reputation-Matrix2/data/laws/mages-guild-code.json
Reader: mages-code.html  (or #/mages-code once index is open)
"""
from __future__ import annotations

import argparse
import hashlib
import json
import random
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "Reputation-Matrix2" / "data" / "laws" / "mages-guild-code.json"

PARTS = [
    ("part_i", "I", "Organization, Seals, and Who May Speak for the Guild"),
    ("part_ii", "II", "Licensure, Apprentices, and Temporary Mouths"),
    ("part_iii", "III", "Spell Classification, Schedules, and Quiet Lists"),
    ("part_iv", "IV", "Research Permits, Pocket Dimensions, and Borrowed Hours"),
    ("part_v", "V", "Field Use, Public Safety, and Unscheduled Weather"),
    ("part_vi", "VI", "Contracts with Non-Casters, Familiars, and Constructs"),
    ("part_vii", "VII", "Evidence, Memory, and What a Scry May Not Keep"),
    ("part_viii", "VIII", "Discipline, Seals, Duels, and Pocket-Prison Procedure"),
    ("part_ix", "IX", "Reporting, Ledgers, and the Duty to File Before Casting"),
    ("part_x", "X", "Financial and Economic Regulations"),
    ("part_xi", "XI", "Endowments, Relics, and Gifts That Later Move"),
    ("part_xii", "XII", "Transit Stamps, Planar Tolls, and Corridor Courtesy"),
    ("part_xiii", "XIII", "Penalties, Fees, and the Schedule of Unpleasantness"),
    ("part_xiv", "XIV", "Historical Annotations, Savings Clauses, and Dead Citations"),
]

TITLES = [
    "Material Alteration of Traded Goods",
    "Permissible Transfiguration; Exceptions",
    "Illusion in the Offer and Acceptance",
    "Prohibited Spells in Financial Markets",
    "Reporting of Material Enchantments",
    "Endowments and Gifts of Magical Assets",
    "Secured Transactions in Bound Objects",
    "Collateral That Can Walk Away",
    "Layered Transfiguration Schemes",
    "Disclosure of Composition After Alteration",
    "Burden of Proof in Permissible Use",
    "Aggregation of Fragmented Conduct",
    "Valuation of Temporarily Petrified Inventory",
    "Insurance Against Unscheduled Weather",
    "Familiars as Agents; Vicarious Casting",
    "Apprentice Signatures; Ink That Recants",
    "Pocket-Dimension Storage of Negotiable Instruments",
    "Time-Stop During Settlement Windows",
    "Scrying of Closed Books; Warrant Required",
    "Memory Charm as Spoliation",
    "False Provenance of Relics",
    "Guild Stamp Forgery",
    "Unlicensed Healing Offered as Consideration",
    "Necromantic Title; Dead Transferors",
    "Construct Labor and the Minimum Ward",
    "Planar Toll Evasion",
    "Corridor Courtesy After an Explosion",
    "Quiet List Items; No Public Catalogue",
    "Temporary Mouths Speaking for Absent Masters",
    "Duel Stakes Converted to Fees",
    "Seal of Silence; Duration and Review",
    "Borrowed Hours; Interest in Time",
    "Weather Called for Agricultural Advantage",
    "Love Philtre as Undue Influence",
    "Geas as Unconscionable Term",
    "Wish Used to Rewrite a Filed Return",
    "Polymorph of Coinage",
    "Lead-to-Gold; Reporting Threshold",
    "Invisibility of Liens",
    "Clone as Duplicate Claimant",
    "Simulacrum Testimony",
    "Bag of Holding as Off-Books Vault",
    "Portable Hole Dumping in a Rival Shop",
    "Identify Spell Fees; Who Pays",
    "Curse as Warranty Disclaimer",
    "Blessing of a Competing Vendor",
    "Summoned Notary; Form Requirements",
    "Extraterritorial Casting into the Diet Chamber",
    "Iron Mandate Conflicts; Savings",
    "Wario Coin Tender; Guild Non-Recognition",
    "Tea-Leaf Collateral; Porcelain Exception",
    "Toad Whistle as Negotiable Instrument",
    "Archive Writ Fees for Restricted Copies",
    "Transit Stamp After Planar Instability",
    "Rubber-Duck Surcharge; Named Incident",
    "Garlic as Material Component; Import Levy",
    "Helicopter Charter; Magical Navigation Lights",
    "Heartstone Rumors; Speech Not Survey",
    "One-T Cartography; Correction Never Filed",
]

HEADINGS = [
    "Scope", "Definitions", "General Rule", "Exceptions", "Disclosure Requirement",
    "Burden", "Aggregation", "Safe Harbor", "Prohibited Conduct", "Reporting",
    "Penalties", "Administrative Authority", "Cross-References", "Historical Annotations",
    "Savings Clause", "Effective Date", "Transition", "Record Retention",
    "Who May Inspect", "Fees", "Appeals", "Quiet List Procedure",
]

LEADS = [
    "No person shall, in commerce or in the appearance of commerce,",
    "A caster acting for value, including value later denied,",
    "Where an alteration is capable of reversing itself after inspection,",
    "Fragmentation of conduct shall not prevent a finding of violation.",
    "The Guild Clerk may treat silence as a filing if the silence is paid for.",
    "A disclosure is not full if it is true only in a language the buyer does not speak.",
    "Time stopped for the convenience of one party is still time for the other.",
    "A familiar's nod is an agent's nod unless the familiar is on strike.",
    "Petrified inventory remains inventory. It is merely quiet.",
    "A wish that rewrites a return does not rewrite the stamp.",
    "Lead transmuted to gold remains lead for tax until the assay desk agrees.",
    "An illusion of a signature is not a signature. An illusion of a fee is still a fee.",
    "The person asserting permissible use shall bear the burden.",
    "Scrying a closed ledger without a warrant is spoliation even if nothing was taken.",
    "A geas to 'be reasonable' is not a defined term.",
    "Wario Coin is not Guild tender. Points even less so.",
    "A rumor of a Heartstone is speech. A survey is a survey. Do not file one as the other.",
    "Cartography that omits a letter T is still a map if it was sold as a map.",
    "Garlic bread on a planning table does not constitute a seal.",
    "A concussed unnamed pilot is not a Guild officer.",
]

MID = [
    "Full and accurate disclosure shall be required where value, composition, or risk is materially affected.",
    "Cross-filing with the Diet does not excuse a missing Guild stamp.",
    "Penalties accrue per sunrise in the caster's original time zone, not the pocket's.",
    "The Quiet List is not a public catalogue and shall not be recited in taverns.",
    "Appeals lie to the Accords Desk, then to a Paradox Trial, then nowhere useful.",
    "Record retention is seven years or one geological age, whichever the clerk finds funnier.",
    "A construct that can hold a quill may be served. A construct that can only hold a sword may not.",
    "Temporary mouths expire at midnight unless the master is in a bag of holding.",
    "Layered schemes shall be read as one scheme if a reasonable toad would be confused.",
    "Insurance against unscheduled weather does not cover weather the insured called.",
]

ANN = [
    "Originally established under C.C.D. {n}, {mr} MR {page}, to address early material alteration of traded goods.",
    "Amended after the rubber-duck incident to incorporate surcharges titled 'you know what you did.'",
    "Revised to address complex and layered transfiguration schemes in modern financial markets.",
    "Savings: nothing here repeals the Autumnwood Accords' ban on unsanctioned necromancy.",
    "Annotation: Wario's private tender is cited only to refuse it.",
    "Annotation: the One-T mountain filing is cartography, not a Guild license to raid.",
]


def load() -> dict:
    if not OUT.exists():
        return {"meta": {"title": "Codex of the Mages' Guild"}, "parts": [], "sections": []}
    return json.loads(OUT.read_text(encoding="utf-8"))


def save(data: dict) -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def norm(s: str) -> str:
    return re.sub(r"\s+", " ", (s or "").lower()).strip()


def fingerprint(title: str, texts: list[str]) -> str:
    h = hashlib.sha1(norm(title + " " + " ".join(texts)).encode()).hexdigest()
    return h[:16]


def next_cite(existing: set[str], rng: random.Random) -> str:
    # Prefer 100–199, 700–799, 1000–1019 ranges like the photo.
    bases = [102, 201, 301, 401, 501, 601, 701, 801, 901, 1001, 1015, 1101]
    for _ in range(400):
        b = rng.choice(bases)
        n = rng.randint(1, 40)
        c = f"{b}.{n}"
        if c not in existing:
            return c
    i = 2000
    while f"{i}.1" in existing:
        i += 1
    return f"{i}.1"


def ensure_parts(data: dict) -> None:
    have = {p.get("id") for p in data.get("parts") or []}
    if "parts" not in data:
        data["parts"] = []
    for pid, roman, title in PARTS:
        if pid not in have:
            data["parts"].append({"id": pid, "roman": roman, "title": title, "blurb": ""})
            have.add(pid)


def make_section(rng: random.Random, cites: set[str]) -> dict:
    title = rng.choice(TITLES)
    part = rng.choice(PARTS)
    cite = next_cite(cites, rng)
    keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
    n_sub = rng.randint(4, 8)
    body = []
    texts = []
    used_h = set()
    for i in range(n_sub):
        h = rng.choice(HEADINGS)
        if h in used_h:
            h = h + " (continued)"
        used_h.add(h)
        if h.startswith("Cross-Reference"):
            refs = rng.sample(sorted(cites) or ["1001.5"], k=min(3, max(1, len(cites))))
            text = "See " + "; ".join("§ " + r for r in refs) + ". For penalties, see § 102.2."
        elif h.startswith("Historical"):
            text = rng.choice(ANN).format(
                n=rng.randint(6000, 11000),
                mr=rng.randint(20, 80),
                page=rng.randint(10, 900),
            )
        else:
            text = rng.choice(LEADS) + " " + rng.choice(MID)
        key = keys[i] if i < len(keys) else str(i + 1)
        body.append({"key": key, "heading": h, "text": text})
        texts.append(text)
    return {
        "cite": cite,
        "part": part[0],
        "title": title,
        "source": "generator",
        "fp": fingerprint(title, texts),
        "body": body,
    }


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--count", type=int, default=25, help="new sections this run")
    ap.add_argument("--seed", type=int, default=None)
    args = ap.parse_args()
    rng = random.Random(args.seed)

    data = load()
    ensure_parts(data)
    sections = data.setdefault("sections", [])
    cites = {s.get("cite") for s in sections if s.get("cite")}
    fps = {s.get("fp") for s in sections if s.get("fp")}
    # also fp from body
    for s in sections:
        if not s.get("fp"):
            s["fp"] = fingerprint(s.get("title") or "", [b.get("text") or "" for b in s.get("body") or []])
            fps.add(s["fp"])

    added = 0
    attempts = 0
    while added < args.count and attempts < args.count * 20:
        attempts += 1
        sec = make_section(rng, cites)
        if sec["fp"] in fps:
            continue
        if sec["title"] in {s.get("title") for s in sections} and rng.random() < 0.7:
            # same catchline allowed only with a different cite and new prose
            pass
        cites.add(sec["cite"])
        fps.add(sec["fp"])
        sections.append(sec)
        added += 1

    sections.sort(key=lambda s: [int(x) if str(x).isdigit() else x for x in re.split(r"(\d+)", s.get("cite") or "")])
    data["meta"]["sectionCount"] = len(sections)
    data["meta"]["approxPages"] = max(1, len(sections) // 2)
    save(data)
    print(f"added {added} · total sections {len(sections)} · ~{data['meta']['approxPages']} pages · {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
