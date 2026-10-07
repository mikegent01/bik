#!/usr/bin/env python3
"""Player characters carry character sheets, never NPC statblocks — and
their XP is the ledger's.

The midlands world mirror (``Reputation-Matrix2/actors/worlds/midlands``) is
the live world exactly as the GM exported it. Three actors that players run
sat in it as dnd5e ``npc`` statblocks. This tool rewrites them as ``character``
documents **in place, under their live Foundry ids**, so the mass-import
module can swap them on the next import (same id, new type) and every link,
token and ownership grant in the world keeps pointing at the right actor.
On every run it also pins ``system.details.xp.value`` of every player sheet
in ``Players/`` to the XP ledger (``const XP_SUMMARY`` in ``index.html``), so
a session filing that awards XP reaches the sheets on the next pass.

Once a promoted actor comes back from Foundry as a ``character`` (the GM
imported the packet, the player has been editing it since), the tool leaves
the sheet alone apart from the XP pin — the world is the source of truth for
everything the ledger does not own.

Promotions (one row each in ``PROMOTIONS`` below):

  Bowser  9u5pnP0zaqw8AQQv   replace — the GM's "Bowser" duplicate of the
                              warlord statblock becomes the intake PC sheet
                              (Fighter 8); the warlord NPC stays untouched.
  Wario   dEhGeFofEfnIG24J   replace — the NPC statblock becomes the intake
                              PC sheet (Barbarian, level pinned to the ledger).
  Salam   2TkQ7lDU0DJBrx9J   convert — the thin shadowtoad statblock becomes a
                              Ranger 3 (Hunter) keeping its kit and owners.

The rows are a record of what was done, and they stay after the actor retires:
Wario and Salam are in ``players.retired`` now (2026-10-06 — not played at the
table), so the sheets they got keep their promotion flags while the organizer
files them by faction (Disaster Inc.) with everyone else. Only a promotion of
an actor still on the roster is expected under ``Players/``.

``replace`` copies a PC sheet that already exists in the repo under the live
id, keeping the live folder, ownership, art and token (the players keep
access, the GM keeps the art they uploaded), with class levels and XP pinned
to the XP ledger in ``index.html``. ``convert`` builds the character from the
statblock itself: class / subclass / species / background items are minted
with the same factories the cast packet uses, abilities follow the standard
array, hit points follow the class die, and every assumption is written to
``flags.waluipedia-sheets.promoted`` and the biography so the player can
revise it in Foundry.

Who is a player character is the party roster in
``Reputation-Matrix2/actors/folders.json`` (``players.roster``: live Foundry
id, sheet name, website id, ledger row) — never the dnd5e sheet type, since
the GM builds NPCs on character sheets too. ``LEDGER``, ``LEDGER_EXEMPT`` and
``COMPANIONS`` below are read from it.

``--check`` verifies the mirror without writing:

  * every roster character sits under ``Players/`` as a ``character`` sheet;
  * nothing else sits under ``Players/`` except the roster's companions
    (NPC-typed actors the scheme allows there — a mount, a construct);
  * each promoted actor exists under its live id as a character (a promotion
    whose actor has since retired — ``players.retired`` — keeps its record but
    files by faction like any other actor, and is not nagged about it);
  * every roster character carries the ledger XP (``LEDGER_EXEMPT`` lists any
    the roster runs off-ledger, with its ``offLedger`` reason).

A sheet whose class level disagrees with its ledger level is reported as a
warning, never an error: levelling up is a choice made inside Foundry.

Usage:
    python3 tools/promote-player-sheets.py            # write the mirror
    python3 tools/promote-player-sheets.py --check    # verify, write nothing
"""
from __future__ import annotations

import argparse
import copy
import glob
import importlib.util
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MIRROR = os.path.join(ROOT, "Reputation-Matrix2", "actors", "worlds", "midlands")
PLAYERS_DIR = os.path.join(MIRROR, "Players")
MODULE_ID = "waluipedia-mass-import"
SHEETS_FLAG = "waluipedia-sheets"
PROMOTED_ON = "2026-10-04"
PLACEHOLDER_ART = {"icons/svg/mystery-man.svg", "icons/svg/item-bag.svg", ""}


def _load_module(name, rel):
    spec = importlib.util.spec_from_file_location(name, os.path.join(ROOT, rel))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


# The cast builder owns the class-item factories, hit-point maths, class
# proficiencies and the XP ledger reader; reuse them so a promoted sheet and a
# generated one cannot drift apart.
B = _load_module("build_character_sheets", "tools/build-character-sheets.py")
P955 = B.P955

# The party roster (actors/folders.json players.roster) is the one list of
# player characters every tool reads. From it:
#   LEDGER         sheet name -> XP ledger key (XP_SUMMARY in index.html); the check fails on drift
#   LEDGER_EXEMPT  player characters the GM deliberately runs off-ledger (reported, never changed)
#   COMPANIONS     NPC-typed actors that may live in Players/ (a mount, a construct)
#   ROSTER         the rows themselves ({actor, name, character, ledger, offLedger})
ROSTER = B.ROSTER
LEDGER = {r["name"]: r["ledger"] for r in ROSTER["rows"] if r.get("ledger")}
LEDGER_EXEMPT = {r["name"]: r.get("offLedger") or "off-ledger by the roster" for r in ROSTER["rows"] if not r.get("ledger")}
COMPANIONS = {r.get("name") for r in ((B.FOLDER_SCHEME.get("players") or {}).get("companions") or []) if r.get("name")}

PROMOTIONS = [
    {
        "id": "9u5pnP0zaqw8AQQv", "name": "Bowser", "mode": "replace",
        "source": "Reputation-Matrix2/actors/fvtt-Actor-bowser-kzNSSjAedvhKTfZC.json",
        "classes": {"Fighter": 8}, "ledger": "bowser", "folderPath": ["Players"],
        "why": "the GM's duplicate of the Darkland warlord statblock stood in for the player's Bowser; "
               "the intake PC sheet (Fighter 8) takes the live id, the warlord NPC stays",
    },
    {
        "id": "dEhGeFofEfnIG24J", "name": "Wario", "mode": "replace",
        "source": "Reputation-Matrix2/actors/fvtt-Actor-wario-dEhGeFofEfnIG24J.json",
        "classes": {"Barbarian": 6}, "ledger": "wario", "folderPath": ["Players"],
        "why": "the NPC statblock the player was running becomes the intake PC sheet; "
               "Barbarian level follows the ledger (6), hit points stay as the statblock had them",
    },
    {
        "id": "2TkQ7lDU0DJBrx9J", "name": "Salam", "mode": "convert",
        # (class, subclass, hit die, caster progression, casting ability, species, background)
        "build": ("Ranger", "Hunter", 10, "half", "wis", "Toad", "Liberated Toad"),
        "level": 3, "ledger": "salam", "folderPath": ["Players"],
        "why": "the liberated Toad the players run sat in the world as a CR 1 shadowtoad statblock; "
               "no PC sheet existed anywhere, so one is built from the statblock and the record",
        "scores": {"str": 12, "dex": 15, "con": 13, "int": 10, "wis": 14, "cha": 8},
        "saves": ("str", "dex"),
        "skills": {"ste": 1, "sur": 1, "prc": 1, "ins": 1, "nat": 1},
        "languages": ["common"],
        "assumptions": [
            "Ranger (Hunter) read off the record: the liberated Toad who kept to the treeline with a crossbow, "
            "tracked for the party in the Grove and cast Cure Wounds on the stump.",
            "Standard array: DEX 15, WIS 14, CON 13, STR 12, INT 10, CHA 8 (no ability scores were ever rolled on the statblock).",
            "Saving throws STR and DEX (Ranger); skills Stealth, Survival, Perception (class) and Insight, Nature (background).",
            "Hit points 3d10 + 3 = 25 (die maxed at level 1, average after, CON every level).",
            "Spells are the player's to pick in Foundry: a half caster knows three at level 3; Cure Wounds is on record.",
            "Kit, art, token, folder and ownership kept exactly as the GM built them.",
        ],
    },
]


# ------------------------------------------------------------------ helpers

def read_json(path):
    with open(path, encoding="utf-8") as fh:
        return json.load(fh)


def write_json(path, doc):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as fh:
        json.dump(doc, fh, indent=2, ensure_ascii=False)
        fh.write("\n")
    os.replace(tmp, path)


def mirror_files():
    out = []
    for cur, subdirs, files in os.walk(MIRROR):
        subdirs.sort()
        for fn in sorted(files):
            if fn.startswith("fvtt-Actor-") and fn.endswith(".json"):
                out.append(os.path.join(cur, fn))
    return out


def find_live(aid):
    hits = [p for p in mirror_files() if p.endswith(f"-{aid}.json")]
    if len(hits) != 1:
        raise SystemExit(f"expected exactly one mirror file for id {aid}, found {len(hits)}")
    return hits[0]


def rel(path):
    return os.path.relpath(path, ROOT)


def class_levels(doc):
    return {it.get("name"): int((it.get("system") or {}).get("levels") or 0)
            for it in doc.get("items") or [] if it.get("type") == "class"}


def ledger_xp(xp, key):
    e = xp.get(key)
    if not e:
        raise SystemExit(f"XP ledger has no row {key!r}")
    return int(e["currentXP"]), int(e["level"])


def xp_value(doc):
    xp = ((doc.get("system") or {}).get("details") or {}).get("xp")
    if isinstance(xp, dict):
        return xp.get("value")
    return None


def players_folder_id():
    """The live Players folder id, read off any sibling already in the folder."""
    for p in sorted(glob.glob(os.path.join(PLAYERS_DIR, "fvtt-Actor-*.json"))):
        fid = read_json(p).get("folder")
        if fid:
            return fid
    return None


def stamp(doc, promo, extra):
    flags = doc.setdefault("flags", {})
    scope = flags.get(SHEETS_FLAG)
    if not isinstance(scope, dict):
        scope = {}
        flags[SHEETS_FLAG] = scope
    note = {"on": PROMOTED_ON, "mode": promo["mode"], "tool": "tools/promote-player-sheets.py",
            "ledger": promo["ledger"], "why": promo.get("why", "")}
    note.update(extra)
    scope["promoted"] = note
    mi = flags.get(MODULE_ID)
    if not isinstance(mi, dict):
        mi = {}
        flags[MODULE_ID] = mi
    mi["folderPath"] = list(promo["folderPath"])


# --------------------------------------------------------------- promotions

def promote_replace(live, promo, xp):
    src_path = os.path.join(ROOT, promo["source"])
    src = read_json(src_path)
    if src.get("type") != "character":
        raise SystemExit(f"{promo['source']} is not a character sheet")
    doc = copy.deepcopy(src)
    doc["_id"] = live["_id"]
    doc["name"] = promo["name"]
    doc["folder"] = players_folder_id() or live.get("folder")
    doc["ownership"] = copy.deepcopy(live.get("ownership") or {"default": 0})
    # the GM's uploaded art beats the intake placeholders
    if doc.get("img") in PLACEHOLDER_ART and live.get("img"):
        doc["img"] = live["img"]
    token = copy.deepcopy(live.get("prototypeToken") or doc.get("prototypeToken") or {})
    src_tex = ((doc.get("prototypeToken") or {}).get("texture") or {}).get("src")
    if src_tex not in PLACEHOLDER_ART and token.get("texture") is not None:
        token["texture"]["src"] = src_tex
    token["name"] = promo["name"]
    token["actorLink"] = True
    doc["prototypeToken"] = token
    doc["_stats"] = copy.deepcopy(live.get("_stats") or doc.get("_stats") or {})
    doc["flags"] = copy.deepcopy(src.get("flags") or {})
    for it in doc.get("items") or []:
        if it.get("type") == "class" and it.get("name") in promo["classes"]:
            it.setdefault("system", {})["levels"] = promo["classes"][it["name"]]
    missing = set(promo["classes"]) - set(class_levels(doc))
    if missing:
        raise SystemExit(f"{promo['name']}: source sheet has no class item for {sorted(missing)}")
    value, level = ledger_xp(xp, promo["ledger"])
    doc.setdefault("system", {}).setdefault("details", {})["xp"] = {"value": value}
    stamp(doc, promo, {"from": promo["source"], "replaced": {"type": live.get("type"), "name": live.get("name")},
                       "classes": dict(promo["classes"]), "xp": value, "ledgerLevel": level})
    return doc


def promote_convert(live, promo, xp):
    cls, sub, die, prog, cast, species, background = promo["build"]
    level = int(promo["level"])
    doc = copy.deepcopy(live)
    system = doc.setdefault("system", {})
    scores = dict(promo["scores"])
    con = (scores["con"] - 10) // 2
    hp, formula = B.pc_hit_points(level, die, con, 1.0)
    owner = "live:" + live["_id"]
    head = B.class_items(owner, promo["build"], level, "30", "humanoid")
    ids = {it["type"]: it["_id"] for it in head}
    wprof, aprof = B.CLASS_PROFS[cls]

    doc["type"] = "character"
    system["abilities"] = P955.abilities(scores, promo["saves"])
    system["skills"] = P955.skills(dict(promo["skills"]))
    system.setdefault("tools", {})
    system.setdefault("spells", {})
    system.setdefault("bonuses", {})
    system.setdefault("resources", {})
    system["favorites"] = []
    system["bastion"] = {"name": "", "description": ""}
    attrs = system.setdefault("attributes", {})
    attrs["hp"] = {"value": hp, "max": hp, "temp": None, "tempmax": 0, "bonuses": {}}
    attrs["movement"] = {"walk": "30", "units": "ft", "hover": False, "burrow": "0", "climb": "0",
                         "fly": "0", "swim": "0", "ignoredDifficultTerrain": []}
    attrs["senses"] = {"units": "ft", "ranges": {"darkvision": None}, "special": ""}
    attrs["spellcasting"] = cast
    attrs["inspiration"] = False
    attrs.setdefault("hd", {"spent": 0})
    attrs.setdefault("exhaustion", 0)
    attrs.setdefault("attunement", {"max": 3})
    for npc_only in ("price", "spell"):
        attrs.pop(npc_only, None)
    details = system.setdefault("details", {})
    for npc_only in ("cr", "habitat", "treasure", "type"):
        details.pop(npc_only, None)
    value, ledger_level = ledger_xp(xp, promo["ledger"])
    details.update({
        "race": ids["race"], "background": ids["background"], "originalClass": ids["class"],
        "xp": {"value": value},
    })
    for key in ("trait", "ideal", "bond", "flaw", "appearance", "eyes", "hair", "skin", "height", "weight",
                "age", "gender", "faith", "alignment"):
        details.setdefault(key, "")
    bio = details.get("biography") or {"value": "", "public": ""}
    note = ("<p><em>Promoted from an NPC statblock to a player character sheet on %s "
            "(Waluipedia sheets suite). %s %d (%s), %s, background %s.</em></p><ul>%s</ul>"
            % (PROMOTED_ON, cls, level, sub, species, background,
               "".join(f"<li>{B.esc(a)}</li>" for a in promo["assumptions"])))
    bio["value"] = (bio.get("value") or "") + note
    details["biography"] = bio
    traits = system.setdefault("traits", {})
    traits["languages"] = {"value": list(promo["languages"]), "custom": "", "communication": {}}
    traits["weaponProf"] = {"value": list(wprof), "custom": "", "mastery": {"value": [], "bonus": []}}
    traits["armorProf"] = {"value": list(aprof), "custom": ""}
    traits.pop("important", None)

    kit = copy.deepcopy(live.get("items") or [])
    doc["items"] = head + kit
    for i, item in enumerate(doc["items"]):
        item["sort"] = 100000 * (i + 1)
    token = doc.setdefault("prototypeToken", {})
    token["actorLink"] = True
    token["name"] = promo["name"]
    flags = doc.setdefault("flags", {})
    removed = [k for k in ("5e-npc-combat-automation",) if k in flags]
    for k in removed:
        flags.pop(k)
    stamp(doc, promo, {"from": {"type": live.get("type"), "cr": (live.get("system") or {}).get("details", {}).get("cr")},
                       "build": {"class": cls, "subclass": sub, "level": level, "hitDie": f"d{die}", "formula": formula,
                                 "species": species, "background": background},
                       "scores": scores, "saves": list(promo["saves"]), "skills": sorted(promo["skills"]),
                       "hp": hp, "xp": value, "ledgerLevel": ledger_level,
                       "removedFlags": removed, "assumptions": list(promo["assumptions"])})
    return doc


def target_path(promo):
    return os.path.join(MIRROR, *promo["folderPath"], B.BRIDGE.actor_filename({"_id": promo["id"], "name": promo["name"]}))


def run_write(xp):
    log = []
    for promo in PROMOTIONS:
        live_path = find_live(promo["id"])
        live = read_json(live_path)
        if live.get("type") == "character":
            continue  # already a character sheet (promoted earlier, or rebuilt in Foundry): the XP pin below is all it gets
        log.append(f"{promo['name']}: live sheet is type {live.get('type')!r} — promoting ({promo['mode']})")
        out_path = target_path(promo)
        doc = promote_replace(live, promo, xp) if promo["mode"] == "replace" else promote_convert(live, promo, xp)
        if os.path.abspath(live_path) != os.path.abspath(out_path):
            os.remove(live_path)
            log.append(f"{promo['name']}: moved {rel(live_path)} -> {rel(out_path)}")
        write_json(out_path, doc)
        log.append(f"{promo['name']}: {promo['mode']} -> {rel(out_path)} ({doc['type']}, "
                   f"{', '.join(f'{c} {l}' for c, l in class_levels(doc).items())}, xp {xp_value(doc)})")
    log.extend(update_manifest())
    log.extend(pin_ledger_xp(xp))
    return log


def pin_ledger_xp(xp):
    """Every player sheet in Players/ carries the ledger XP; rewrite the ones that drifted.

    The ledger row also rides on the sheet as ``flags.waluipedia-sheets.ledger``
    (xpKey, xp, level) so the Foundry module's sync summary can say "sheet
    level 6, ledger level 7 — level up" without knowing the archive."""
    log = []
    for p in sorted(glob.glob(os.path.join(PLAYERS_DIR, "fvtt-Actor-*.json"))):
        doc = read_json(p)
        key = LEDGER.get(doc.get("name"))
        if not key or doc.get("type") != "character":
            continue
        value, level = ledger_xp(xp, key)
        want_flag = {"xpKey": key, "xp": value, "level": level}
        scope = (doc.get("flags") or {}).get(SHEETS_FLAG) or {}
        if xp_value(doc) == value and scope.get("ledger") == want_flag:
            continue
        before = xp_value(doc)
        doc.setdefault("system", {}).setdefault("details", {})["xp"] = {"value": value}
        doc.setdefault("flags", {}).setdefault(SHEETS_FLAG, {})["ledger"] = want_flag
        write_json(p, doc)
        log.append(f"{doc['name']}: xp {before} -> {value} (ledger level {level})" if before != value
                   else f"{doc['name']}: ledger flag written (level {level}, {value} xp)")
    return log


def update_manifest():
    """Keep the split manifest's rows (type, file) true for the promoted actors."""
    path = os.path.join(MIRROR, "manifest.json")
    if not os.path.exists(path):
        return []
    manifest = read_json(path)
    rows = {r.get("_id"): r for r in manifest.get("actors") or [] if isinstance(r, dict)}
    changed = []
    for promo in PROMOTIONS:
        row = rows.get(promo["id"])
        if not row:
            continue
        want = {"type": "character", "file": os.path.relpath(target_path(promo), MIRROR).replace(os.sep, "/")}
        if row.get("type") != want["type"] or row.get("file") != want["file"]:
            row.update(want)
            changed.append(promo["name"])
    if changed:
        manifest["actors"] = sorted(manifest["actors"], key=lambda r: r.get("file") or "")
        write_json(path, manifest)
        return [f"manifest.json: rows updated for {', '.join(changed)}"]
    return []


# -------------------------------------------------------------------- check

def run_check(xp, placement="error"):
    """Verify the mirror. `placement` says what a roster/Players mismatch is:
    "error" (the --check run, after the organizer has filed everything) or
    "warn" (right after a write, when tools/organize-actors.py still has to
    run in the same suite pass — the sheets themselves must already be right)."""
    errors, warnings = [], []
    misplaced = errors if placement == "error" else warnings
    by_name = {}
    for p in sorted(glob.glob(os.path.join(PLAYERS_DIR, "fvtt-Actor-*.json"))):
        doc = read_json(p)
        by_name[doc.get("name")] = (p, doc)
        row = B.BRIDGE.roster_row(doc, ROSTER)
        if B.BRIDGE.is_companion(doc, ROSTER):
            continue
        if not row:
            misplaced.append(f"{rel(p)}: {doc.get('name')} ({doc.get('type')}) sits in Players/ but is not on the party roster "
                             "(Reputation-Matrix2/actors/folders.json players.roster) — a character sheet does not make a player "
                             "character; add the row (live id, website id, ledger key) or move the actor out of Players")
            continue
        if doc.get("type") != "character":
            errors.append(f"{rel(p)}: {doc.get('name')} is a {doc.get('type')} sheet in Players/ — "
                          "player characters carry character sheets (run tools/promote-player-sheets.py)")
    for row in ROSTER["rows"]:
        hits = [p for p in mirror_files() if p.endswith(f"-{row['actor']}.json")] if row.get("actor") else []
        if not hits:
            errors.append(f"roster: {row['name']} ({row.get('actor')}) is not in the world mirror — fix the roster's live id or export the world")
        elif os.path.dirname(os.path.abspath(hits[0])) != os.path.abspath(PLAYERS_DIR):
            misplaced.append(f"{rel(hits[0])}: {row['name']} is on the party roster but sits outside Players/ (tools/organize-actors.py files it there)")
    for promo in PROMOTIONS:
        hits = [p for p in mirror_files() if p.endswith(f"-{promo['id']}.json")]
        if len(hits) != 1:
            errors.append(f"{promo['name']}: expected one mirror file for id {promo['id']}, found {len(hits)}")
            continue
        doc = read_json(hits[0])
        if doc.get("type") != "character":
            errors.append(f"{rel(hits[0])}: {promo['name']} is still type {doc.get('type')!r} — run tools/promote-player-sheets.py")
            continue
        # Only a promotion of an actor still on the roster belongs under
        # Players/. A retired one (actors/folders.json players.retired — Wario,
        # Salam) keeps its promotion record but files by faction like any other
        # actor, so where the organizer put it is not a warning.
        if promo["id"] in ROSTER["ids"] and os.path.abspath(hits[0]) != os.path.abspath(target_path(promo)):
            warnings.append(f"{rel(hits[0])}: {promo['name']} sits outside {'/'.join(promo['folderPath'])}/ in the world")
        if not ((doc.get("flags") or {}).get(SHEETS_FLAG) or {}).get("promoted"):
            warnings.append(f"{rel(hits[0])}: {promo['name']} carries no flags.{SHEETS_FLAG}.promoted record (rebuilt in Foundry?)")
    for name, key in sorted(LEDGER.items()):
        if name not in by_name:
            errors.append(f"Players/ has no sheet named {name!r} (ledger {key})")
            continue
        p, doc = by_name[name]
        value, level = ledger_xp(xp, key)
        if xp_value(doc) != value:
            errors.append(f"{rel(p)}: {name} has xp {xp_value(doc)}, the ledger says {value} (level {level})")
        total = sum(class_levels(doc).values())
        if total and total < level:
            warnings.append(f"{rel(p)}: {name} is level {total} on the sheet, the ledger says {level} — "
                            "level up in Foundry (the XP is already there)")
        elif total and total > level:
            warnings.append(f"{rel(p)}: {name} is level {total} on the sheet, above the ledger's {level}")
    for name, why in LEDGER_EXEMPT.items():
        if name in by_name or any(read_json(p).get("name") == name for p in mirror_files()):
            warnings.append(f"{name}: off-ledger by design — {why}")
    return errors, warnings


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--check", action="store_true", help="verify the mirror, write nothing")
    args = ap.parse_args(argv)
    xp = B.load_xp_summary()
    if not args.check:
        for line in run_write(xp):
            print(line)
    # After a write the organizer has not run yet (it is the next suite step),
    # so who sits in Players/ is reported, not failed; --check is the verdict.
    errors, warnings = run_check(xp, placement="error" if args.check else "warn")
    for w in warnings:
        print("warning:", w)
    for e in errors:
        print("error:", e)
    if errors:
        print(f"promote-player-sheets: {len(errors)} error(s)")
        return 1
    done = [f"{p['name']} ({p['mode']})" for p in PROMOTIONS]
    print(f"promote-player-sheets: ok — {len(ROSTER['rows'])} roster characters in Players/ as character sheets, "
          f"{len(LEDGER)} at ledger XP, {len(LEDGER_EXEMPT)} off-ledger; promotions on record (already applied, nothing rewritten): {', '.join(done)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
