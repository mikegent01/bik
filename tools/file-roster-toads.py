#!/usr/bin/env python3
"""file-roster-toads.py — every Liberated Toad on the roster gets an article,
so the sheet builder gives it a sheet and the packet gives it a token.

The Liberated Toads Command page already carries a face for all 75 roster
toads (`Reputation-Matrix2/data/liberated-toads/toadslist-data.js`, cut from
the cohort sheets into `assets/images/toads/roster/`). The character sheet
pipeline only knows articles in `characters.json`, and most roster toads had
none — so no sheet, no token, no folder in Foundry. This tool files the
missing ones as MICRO-ARTICLES: one per roster line, saying exactly what the
roster says (number, bloc, weapon, cap colour, seen in the field, the
CORE_DETAIL lore where the page has it) and nothing more.

  python3 tools/file-roster-toads.py            # file what is missing, refresh what it filed before
  python3 tools/file-roster-toads.py --check    # exit 1 when a roster toad has no article (check-all)
  python3 tools/file-roster-toads.py --list     # the roster → article mapping

Rules
- A roster toad that already has an article (by name, by `aka`, or through
  ALIASES below for the four spelled differently) is left alone — never a
  duplicate, never an edit to a hand-written article.
- Generated articles carry `generatedBy: "tools/file-roster-toads.py"`,
  `microArticleFlag: true` and `needsReview: true`. Re-running refreshes only
  those; delete the `generatedBy` key on an article to take it over by hand.
- The roster plate is both `image` and `fullBody` (it is a full-body cut on a
  plain field), so the site's token-sheet panel and the Foundry token use it.
- `sheetRole` names the builder archetype straight from the bloc + weapon
  table (a follower with a crossbow is a soldier, a Student Union toad is a
  caster, the Spore 5 are monsters), so the sheet does not depend on keyword
  luck in two sentences of prose.
- Appends at the end of `characters.json`; indent 2, ensure_ascii False,
  trailing newline — the file's own round-trip.
"""
import argparse
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RM = os.path.join(ROOT, "Reputation-Matrix2")
ROSTER_JS = os.path.join(RM, "data", "liberated-toads", "toadslist-data.js")
CHARACTERS = os.path.join(RM, "data", "characters.json")
PORTRAIT_DIR = "assets/images/toads/roster"
SELF = "tools/file-roster-toads.py"

# roster id -> article id, where the roster spells a known toad differently
ALIASES = {
    "09_somkin_j": "smoking_j",            # the workbook's "Somkin J"
    "31_dewdrop": "scribe_dewdrop",
    "32_ironspore": "forgemaster_ironspore",
    "33_metpetal": "healer_mistpetal",     # the workbook's "Metpetal"
}

# bloc -> (default sheetRole, related article ids)
BLOCS = {
    "Archie's Followers": ("soldier", ["archie_miser"]),
    "Speaker L Followers": ("soldier", ["speaker_l"]),
    "Speaker River Follower": ("soldier", ["speaker_rivers"]),
    "Pond Patrol": ("soldier", ["captain_fernback"]),
    "Deputies": ("officer", ["speaker_rivers"]),
    "High Command": ("officer", ["speaker_rivers"]),
    "Overseers": ("officer", ["speaker_rivers"]),
    "Leaders": ("officer", ["speaker_rivers"]),
    "Student Union": ("caster", ["teacher_t"]),
    "Medics United": ("healer", ["healer_mistpetal", "creek_medic"]),
    "Lillypads": ("caster", []),
    "Spore 5": ("monster", []),
    "Teachers": ("scholar", ["teacher_t"]),
    "Unaffiliated": ("civilian", []),
}

# roster weapon -> (sheetRole override or None, the phrase the sheet builder reads its weapon from)
WEAPON_RULES = [
    (r"sniper", ("soldier", "a scoped sniper rifle")),
    (r"rifle", ("soldier", "a rifle")),
    (r"scoped pistol", ("soldier", "a scoped pistol")),
    (r"^gun$", ("soldier", "a gun — a pistol in the table's terms")),
    (r"heavy crossbow|crossbow", ("soldier", "a crossbow")),
    (r"sword and shield", ("soldier", "a sword and a shield")),
    (r"rock sword|sword", ("soldier", "a sword")),
    (r"two axes", ("soldier", "two axes")),
    (r"long axe|axe", ("soldier", "an axe")),
    (r"ship anchor", ("soldier", "a ship's anchor swung like a maul")),
    (r"ball and chain", ("soldier", "a ball and chain — a flail")),
    (r"winged spear|fishing spear|vine spears|spear", ("soldier", "a spear")),
    (r"rock stick", ("soldier", "a rock on a stick — a club")),
    (r"hammer", ("soldier", "a hammer")),
    (r"riot shield", ("soldier", "a riot shield and a baton")),
    (r"sling", ("soldier", "a slingshot")),
    (r"knife|knives|knifes", ("rogue", "knives")),
    (r"smoke grenade", ("rogue", "smoke grenades")),
    (r"fist|unarmed", ("soldier", "fists")),
    (r"bite", ("soldier", "a bite")),
    (r"spiky tail|fox tail", ("soldier", "a tail swung like a club")),
    (r"potion", ("healer", "potions")),
    (r"heal|aroma", ("healer", "healing")),
    (r"illusion|necromancy|transmutation|lightning|darkness|brightness|gas|overgrowth|midas|water|eye beams|spores|ink|feathers|gears|lead weapons", ("caster", None)),
    (r"spore", ("monster", None)),
    (r"pen$|calculator|baking|bug\s+jar|bug spray|bricks|megaphone", ("civilian", None)),
]


def read_roster(path=ROSTER_JS):
    src = open(path, encoding="utf-8").read()
    rows = []
    pat = re.compile(r"\{ num: (\d+), id: '([^']+)', name: \"([^\"]*)\"(?:, aka: \"([^\"]*)\")?, affiliation: \"([^\"]*)\","
                     r" weapon: \"([^\"]*)\", seen: (true|false), portrait: \{ kind: '(\w+)'(?:, file: '([^']+)')?[^}]*\},"
                     r" cap: '([^']*)', artStatus: '(\w+)'")
    for m in pat.finditer(src):
        num, rid, name, aka, aff, weapon, seen, kind, file, cap, art = m.groups()
        rows.append(dict(num=int(num), id=rid, name=name, aka=aka or "", affiliation=aff, weapon=weapon.strip(),
                         seen=(seen == "true"), file=file or f"toad_{rid}.png", cap=cap, artStatus=art))
    detail = {}
    block = src[src.find("export const CORE_DETAIL"):]
    block = block[:block.find("\n};") + 3]
    for m in re.finditer(r"'(\d+_[a-z0-9_]+)': \{\s*title: (['\"])(.*?)\2,\s*roleNote: (['\"])(.*?)\4,\s*lore: (['\"])(.*?)\6\s*\}", block, re.S):
        detail[m.group(1)] = dict(title=m.group(3), roleNote=m.group(5), lore=m.group(7))
    meta = {}
    for m in re.finditer(r"\"([^\"]+)\": \{ tier: (\d+|null), tierLabel: \"([^\"]*)\", research: \"([^\"]*)\", note: \"((?:[^\"\\]|\\.)*)\"", src):
        note = re.sub(r"\\u([0-9a-fA-F]{4})", lambda u: chr(int(u.group(1), 16)), m.group(5))
        meta[m.group(1)] = dict(tier=None if m.group(2) == "null" else int(m.group(2)), tierLabel=m.group(3),
                                research=m.group(4), note=note)
    intake = re.search(r"intakeDate: '([^']+)'", src)
    return rows, detail, meta, (intake.group(1) if intake else "")


def slug(name):
    s = re.sub(r"[^a-z0-9]+", "_", name.lower()).strip("_")
    return s or "unnamed"


def existing_article_for(row, by_name):
    if row["id"] in ALIASES:
        return ALIASES[row["id"]]
    for key in (row["name"], row["aka"]):
        if key and key.lower() in by_name:
            return by_name[key.lower()]
    return None


def weapon_rule(weapon):
    low = weapon.lower()
    for pat, out in WEAPON_RULES:
        if re.search(pat, low):
            return out
    return (None, None)


def article_for(row, detail, meta, intake):
    bloc = row["affiliation"]
    role_default, related = BLOCS.get(bloc, ("civilian", []))
    role_w, phrase = weapon_rule(row["weapon"])
    role = role_w if (role_w and bloc not in ("Spore 5",)) else role_default
    if bloc in ("Deputies", "High Command", "Overseers", "Leaders") and role_w in ("soldier", None):
        role = role_default  # a leader with a hammer is still an officer
    m = meta.get(bloc, {})
    tier = f"Tier {m['tier']} — {m['tierLabel']}" if m.get("tier") else (m.get("tierLabel") or "no tier")
    d = detail.get(row["id"], {})
    unnamed = row["name"].strip("?") == ""
    name = f"Unidentified Spore (#{row['num']})" if unnamed else row["name"]
    aid = (f"toad_unidentified_spore_{row['num']}" if unnamed else
           (slug(name) if slug(name).startswith("toad_") else f"toad_{slug(name)}"))
    spore = bloc == "Spore 5"
    race = "Spore monster (not a toad)" if spore else "Toad"
    seen_txt = "seen in the field" if row["seen"] else "listed, not yet seen in the field"
    title = d.get("title") or (f"{bloc} — {row['weapon'].lower()}" if not unnamed else "Spore 5 — unidentified")
    status = (f"Active — Liberated Toads roster #{row['num']}, {seen_txt}" if row["seen"]
              else f"Listed — Liberated Toads roster #{row['num']}, not yet seen in the field")
    what = ("one of the five spore creatures the roster keeps in the Spore 5 — not a toad, and never chosen by the appointment chain"
            if spore else f"{bloc} ({tier})")
    if unnamed:
        carries = "the roster lists neither name nor weapon"
    elif spore:
        carries = f"the roster lists its weapon as {row['weapon'].lower()}"
    elif phrase:
        carries = f"{row['name']} fights with {phrase}"
    else:
        carries = f"the roster lists {row['weapon']} for a weapon"
    summary = (f"{name} is roster entry #{row['num']} of the Liberated Toads: {what}. "
               f"{carries[0].upper() + carries[1:]}; cap colour {row['cap'].lower()}; {seen_txt}. "
               + (f"{d['roleNote'].rstrip('.')}. " if d.get("roleNote") else "")
               + "That is the whole record, and Waluigi files the whole record: a face on the roster beats a rumour in a barrel. WAH.")
    lines = [
        "## Roster record",
        "",
        f"- Number: #{row['num']}" + (f" (also written {row['aka']})" if row["aka"] else ""),
        f"- Bloc: {bloc} — {tier}" + (f". {m['note']}" if m.get("note") else ""),
        f"- Weapon: {row['weapon']}" + (f" — {phrase}" if phrase and phrase.lower() != row['weapon'].lower() else ""),
        f"- Cap: {row['cap']}",
        f"- Seen in the field: {'yes' if row['seen'] else 'not yet'}",
    ]
    if d.get("lore") or d.get("roleNote"):
        lines += ["", "## What the Command page adds", ""] + [x for x in (d.get("roleNote"), d.get("lore")) if x]
    lines += [
        "",
        "## Filing note",
        "",
        f"Micro-article generated from the Toadslist roster (`Liberated Toads work/Toadslist.xlsx`, intake {intake or 'undated'}) "
        f"by `{SELF}`, so that the toad has a page, a character sheet and a token. Nothing above goes beyond the roster line; "
        "expand it from testimony, not from here.",
    ]
    art = {
        "id": aid,
        "name": name,
        "title": title,
        "race": race,
        "type": "Character / Liberated Toads Roster",
        "status": status,
        "affiliation": f"Liberated Toads — {bloc}",
        "faction": "liberated_toads",
        "membership": bloc,
        "summary": summary,
        "description": "\n".join(lines),
        "relatedArticles": ["liberated_toads"] + [r for r in related],
        "needsReview": True,
        "microArticleFlag": True,
        "waluigiComment": "Roster micro-article — generated from the Toadslist line; expand when testimony is filed. WAH.",
        "image": f"{PORTRAIT_DIR}/{row['file']}",
        "fullBody": f"{PORTRAIT_DIR}/{row['file']}",
        "imageCaption": "Roster plate — cut from the cohort sheet; full body on a plain field, the token the table uses.",
        "sheetRole": role,
        "rosterNumber": row["num"],
        "generatedBy": SELF,
    }
    if row["aka"]:
        art["aliases"] = [row["aka"]]
    if unnamed:
        art["aliases"] = ["???"]
    return art


def plan(rows, arts):
    by_name = {}
    for a in arts:
        by_name.setdefault((a.get("name") or "").lower(), a["id"])
        for al in a.get("aliases") or []:
            by_name.setdefault(str(al).lower(), a["id"])
    out = []
    for row in rows:
        if row["artStatus"] != "filed":
            out.append((row, "no-art", None))
            continue
        ex = existing_article_for(row, by_name)
        out.append((row, "existing" if ex else "file", ex))
    return out


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--check", action="store_true", help="exit 1 when a roster toad with art has no article")
    ap.add_argument("--list", action="store_true", help="print the roster → article mapping")
    ap.add_argument("--quiet", action="store_true")
    a = ap.parse_args(argv)
    rows, detail, meta, intake = read_roster()
    arts = json.load(open(CHARACTERS, encoding="utf-8"))
    by_id = {x["id"]: x for x in arts}
    todo = plan(rows, arts)
    say = (lambda *x: None) if a.quiet else print
    if a.list:
        for row, kind, ex in todo:
            say(f"#{row['num']:>2} {row['name']:<18} {row['affiliation']:<24} {row['weapon']:<28} -> {kind}{(' ' + ex) if ex else ''}")
        return 0
    missing = [row for row, kind, ex in todo if kind == "file"]
    if a.check:
        bad = [row for row in missing if not os.path.isfile(os.path.join(RM, PORTRAIT_DIR, row["file"]))]
        if missing:
            say(f"file-roster-toads: {len(missing)} roster toad(s) without an article — run tools/file-roster-toads.py: "
                + ", ".join(r["name"] for r in missing[:8]) + (" …" if len(missing) > 8 else ""))
            return 1
        gen = [x for x in arts if x.get("generatedBy") == SELF]
        for x in gen:
            if not os.path.isfile(os.path.join(RM, x["image"])):
                say(f"file-roster-toads: {x['id']} image missing: {x['image']}")
                return 1
        say(f"file-roster-toads: ok — every roster toad with art has an article ({len(gen)} generated, "
            f"{sum(1 for _, k, _ in todo if k == 'existing') - len(gen)} hand-written)")
        return 0
    filed = refreshed = 0
    for row in missing:
        art = article_for(row, detail, meta, intake)
        if art["id"] in by_id:
            # a hand-written article with this id but another name: do not touch, do not duplicate
            say(f"file-roster-toads: {row['name']} -> id {art['id']} is taken by a hand-written article; skipped")
            continue
        arts.append(art); by_id[art["id"]] = art; filed += 1
        say(f"file-roster-toads: + {art['id']} ({row['affiliation']}, {row['weapon']}) role {art['sheetRole']}")
    # refresh what this tool generated earlier (the roster is the source; hand edits remove generatedBy first)
    for row, kind, ex in todo:
        if kind != "existing" or not ex:
            continue
        cur = by_id.get(ex)
        if cur and cur.get("generatedBy") == SELF:
            new = article_for(row, detail, meta, intake)
            new["id"] = cur["id"]
            if new != cur:
                cur.clear(); cur.update(new); refreshed += 1
    if filed or refreshed:
        tmp = CHARACTERS + ".tmp"
        with open(tmp, "w", encoding="utf-8") as fh:
            fh.write(json.dumps(arts, indent=2, ensure_ascii=False) + "\n")
        os.replace(tmp, CHARACTERS)
    say(f"file-roster-toads: {filed} filed, {refreshed} refreshed, "
        f"{sum(1 for _, k, _ in todo if k == 'existing') - sum(1 for x in arts if x.get('generatedBy') == SELF) + filed} hand-written already")
    return 0


if __name__ == "__main__":
    sys.exit(main())
