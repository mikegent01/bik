#!/usr/bin/env python3
"""Sort the world mirror into folders the way the website organizes its cast,
and tag every actor.

    python3 tools/organize-actors.py                  # organize actors/worlds/midlands
    python3 tools/organize-actors.py --check          # read-only; exit 1 if anything would move
    python3 tools/organize-actors.py --world <id>     # another mirror
    python3 tools/organize-actors.py --force          # re-file actors the GM moved by hand, too

The rules live in Reputation-Matrix2/actors/folders.json (the scheme) — edit
that, never the actor files:

  Players                     the folders in the scheme's `keep` list are never
                              re-filed (the party's sheets stay where the GM
                              keeps them); a party *character* found elsewhere
                              is filed here
  <era> / …                   an actor with the same name and type as one in an
                              era packet the scheme's `eras` name (Peach's
                              Castle 955 BF) is that era's copy: it takes the
                              packet's folder (the court, the incursion)
  <website group>             every actor the sheet index (data/sheets.json)
                              maps to a character article: Disaster Inc.,
                              Liberated Toads, Iron Legion, Shadow Estate &
                              House Corvinarus, … — the same sections the
                              #/sheets page shows
  <website group> (by name)   statblocks whose name says where they belong
                              (Goomba (Conscript Infantry) → Koopa Troop,
                              Palace Guard → Mushroom Regency & Kingdom), from
                              the scheme's `nameRules`
  <website group> (by folder) the rest of a GM folder tree the scheme's
                              `folderRules` name (the manor adventure's
                              "Characters of the …" → Overgrown Manor)
  <website group> (GM folder) an actor already in a GM folder named like a
                              website group (the GM's own "Iron Legion") stays
  Bestiary / <Creature type>  everything else: generic statblocks by dnd5e
                              creature type (Humanoid, Fey, Undead, Plant, …);
                              a blank or custom type sits straight under Bestiary

Folders worth having: the scheme's `minimum` (2) is counted across everything
the import carries — this mirror, the generated cast (from the index) and the
era packets — and a sub-folder below it is folded into its parent (one ooze
goes straight under Bestiary), a top-level group below it into `fallback`
(Elsewhere). tools/build-character-sheets.py applies the same rule to the
cast, so the two agree on the tree.

Each actor is filed ONCE: the placement is recorded in
flags["waluipedia-sheets"].organized = {path, basis, from}. On later passes an
actor that is still where the organizer put it may be re-filed when the rules
learn more (a new article → out of the Bestiary into its group); an actor the
GM has since moved by hand stays where the GM put it (unless --force). The
previous folder is kept in `organized.from`, so nothing is lost.

Tags (flags["waluipedia-sheets"].tags — the Mass Import module shows them as
chips in the Actors sidebar) are rewritten every pass: the website group (or
Bestiary), pc/npc, the role the site knows, the creature type, and the GM
folder the actor came from (e.g. "A House Divided"). `color` is the folder's
colour, so the chips match the folder.

Files move with their actors (the mirror's directories mirror the folders)
and manifest.json is updated. Deterministic: a second run changes nothing.
"""
from __future__ import annotations

import argparse
import copy
import importlib.util
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RM = os.path.join(ROOT, "Reputation-Matrix2")
WORLDS = os.path.join(RM, "actors", "worlds")
DEFAULT_INDEX = os.path.join(RM, "data", "sheets.json")
SHEETS_FLAG = "waluipedia-sheets"
BASIS_RANK = {"keep": 7, "era": 6, "website": 5, "name-rule": 4, "folder-rule": 3, "gm-group": 2, "bestiary": 1}
CREATURE_TYPES = {"aberration", "beast", "celestial", "construct", "dragon", "elemental", "fey", "fiend", "giant",
                  "humanoid", "monstrosity", "ooze", "plant", "undead"}


def load_bridge():
    spec = importlib.util.spec_from_file_location("foundry_bridge", os.path.join(ROOT, "tools", "foundry-bridge.py"))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


BRIDGE = load_bridge()
MODULE_ID = BRIDGE.MODULE_ID


# ------------------------------------------------------------------ inputs

def load_index(path=DEFAULT_INDEX):
    """basename of a live sheet file -> {id, group, kind, role, party, source}."""
    try:
        with open(path, encoding="utf-8") as fh:
            index = json.load(fh)
    except (OSError, ValueError):
        return {}
    out = {}
    for e in index.get("sheets") or []:
        rows = [(e.get("file"), e.get("source"), e.get("kind"))]
        rows += [(a.get("file"), a.get("source"), a.get("kind")) for a in e.get("alternates") or []]
        rows += [(v.get("file"), v.get("source"), v.get("kind")) for v in e.get("versions") or []]
        for f, source, kind in rows:
            if not f or source == "generated":
                continue
            out.setdefault(os.path.basename(f), {
                "id": e.get("id"), "group": e.get("group") or "Elsewhere", "kind": kind or e.get("kind"),
                "role": e.get("role"), "party": bool(e.get("party")), "source": source or e.get("source"),
            })
    return out


def load_index_raw(path=DEFAULT_INDEX):
    try:
        with open(path, encoding="utf-8") as fh:
            return json.load(fh)
    except (OSError, ValueError):
        return {}


def era_label_folders(scheme):
    """{"955 BF": "Peach's Castle 955 BF"} — era label -> era folder."""
    return {e.get("era"): e["folder"] for e in BRIDGE.era_folders(scheme).values() if e.get("era")}


def cast_population(scheme, index_path=DEFAULT_INDEX):
    """[path] for every generated sheet and era version the website index lists —
    what tools/build-character-sheets.py puts in the cast packet (group
    folders; era versions in the era folder)."""
    by_label = era_label_folders(scheme)
    paths = []
    for e in load_index_raw(index_path).get("sheets") or []:
        if e.get("source") == "generated":
            paths.append([e.get("group") or "Elsewhere"])
        for v in e.get("versions") or []:
            folder = by_label.get(v.get("era"))
            paths.append([folder] if folder else [e.get("group") or "Elsewhere", str(v.get("era") or "era")])
    return paths


def load_eras(scheme):
    """{(name lower, type): {"path", "folder", "era", "file"}} — the era packets' actors."""
    return BRIDGE.era_actors(scheme)


def creature_type(doc):
    """dnd5e creature type as a folder name: Humanoid, Fey, … ; Other when blank."""
    det = ((doc.get("system") or {}).get("details") or {})
    t = det.get("type")
    value = (t.get("value") if isinstance(t, dict) else t) or ""
    if value == "custom":
        value = (t.get("custom") if isinstance(t, dict) else "") or ""
    value = str(value).strip().lower()
    if not value and doc.get("type") == "character":
        value = "humanoid"
    return value.capitalize() if value in CREATURE_TYPES else "Other"


def current_path(doc, rel_parts):
    flag = (doc.get("flags") or {}).get(MODULE_ID, {}).get("folderPath")
    if isinstance(flag, list):
        return [str(p) for p in flag]
    return list(rel_parts)


# ------------------------------------------------------------- the rules

def classify(doc, rel_parts, scheme, index, basename="", eras=None):
    """-> (target path, basis, facts) — facts feed the tags."""
    players = (scheme.get("players") or {}).get("folder", "Players")
    bestiary = (scheme.get("bestiary") or {}).get("folder", "Bestiary")
    groups = scheme.get("groups") or {}
    keep = set(scheme.get("keep") or [players])
    cur = current_path(doc, rel_parts)
    name = str(doc.get("name") or "")
    kind = "pc" if doc.get("type") == "character" else "npc"
    ctype = creature_type(doc)
    hit = index.get(basename) if basename else None
    facts = {"kind": kind, "type": ctype, "role": (hit or {}).get("role"), "character": (hit or {}).get("id"),
             "party": bool((hit or {}).get("party")), "group": None, "from": cur[0] if cur else None, "era": None}

    if cur and cur[0] in keep:
        facts["group"] = (hit or {}).get("group") if hit else None
        return cur, "keep", facts
    era = (eras or {}).get((name.strip().lower(), doc.get("type")))
    if era:
        facts["era"] = era.get("era")
        return list(era["path"]), "era", facts
    if hit:
        facts["group"] = hit["group"]
        if hit["party"] and kind == "pc":
            return [players], "website", facts
        return [hit["group"]], "website", facts
    lower = name.lower()
    for group, needles in (scheme.get("nameRules") or {}).items():
        if any(n.lower() in lower for n in needles):
            facts["group"] = group
            return [group], "name-rule", facts
    here = " / ".join(cur)
    for group, prefixes in (scheme.get("folderRules") or {}).items():
        if any(here.startswith(str(p)) for p in prefixes):
            facts["group"] = group
            return [group], "folder-rule", facts
    if cur and cur[0] in groups:
        facts["group"] = cur[0]
        return cur[:1], "gm-group", facts
    # a creature of a rare or blank type sits straight under Bestiary (no
    # one-creature sub-folders, no "Other" drawer)
    return ([bestiary, ctype] if ctype != "Other" else [bestiary]), "bestiary", facts


def tags_for(target, basis, facts, scheme):
    bestiary = (scheme.get("bestiary") or {}).get("folder", "Bestiary")
    tags = []
    head = facts.get("group") or (bestiary if target and target[0] == bestiary else (target[0] if target else None))
    if head:
        tags.append(head)
    tags.append(facts["kind"])
    if facts.get("role"):
        tags.append(str(facts["role"]))
    if facts["kind"] == "npc" and facts.get("type") and facts["type"] != "Other":
        tags.append(facts["type"].lower())
    if facts.get("party") and facts["kind"] == "npc":
        tags.append("party")
    if facts.get("era"):
        tags.append(str(facts["era"]))
    came_from = facts.get("from")
    if came_from and target and came_from != target[0] and came_from not in tags:
        tags.append(came_from)
    out = []
    for t in tags:
        if t and t not in out:
            out.append(t)
    return out


def color_for(target, facts, scheme):
    styles = BRIDGE.folder_styles(scheme, [target])
    key = " / ".join(target)
    style = styles.get(key) or styles.get(target[0] if target else "") or {}
    if not style.get("color") and facts.get("group"):
        style = (scheme.get("groups") or {}).get(facts["group"]) or style
    color = style.get("color")
    return color.upper() if isinstance(color, str) else None


# -------------------------------------------------------------- the pass

def plan(world_dir, scheme, index, force=False, index_path=DEFAULT_INDEX):
    """[{file, doc, path_now, target, basis, tags, color, move, reason}] for every actor file."""
    eras = load_eras(scheme)
    seeds = []
    for path, rel_parts in BRIDGE.actor_files([world_dir]):
        doc = BRIDGE.load_actor_file(path)
        if doc is None:
            continue
        target, basis, facts = classify(doc, rel_parts, scheme, index, basename=os.path.basename(path), eras=eras)
        seeds.append((path, rel_parts, doc, target, basis, facts))
    # folders worth having: count what the whole import will carry (this
    # mirror, the generated cast, the era packets) and fold the small ones
    mirror_keys = {(str(d.get("name") or "").strip().lower(), d.get("type")) for _, _, d, *_ in seeds}
    population = {f"m{i}": t for i, (_, _, _, t, _, _) in enumerate(seeds)}
    population.update({f"c{i}": p for i, p in enumerate(cast_population(scheme, index_path))})
    population.update({f"e{i}": v["path"] for i, (k, v) in enumerate(eras.items()) if k not in mirror_keys})
    folded = BRIDGE.fold_singletons(population, scheme)
    rows = []
    for i, (path, rel_parts, doc, target, basis, facts) in enumerate(seeds):
        if basis != "keep" and folded.get(f"m{i}") != target:
            facts["folded_from"] = target
            target = folded[f"m{i}"]
        now = current_path(doc, rel_parts)
        org = ((doc.get("flags") or {}).get(SHEETS_FLAG) or {}).get("organized")
        org_path = [str(p) for p in org["path"]] if isinstance(org, dict) and isinstance(org.get("path"), list) else None
        move, reason = False, ""
        if basis == "keep":
            move = False
        elif target != now:
            if org_path is None:
                move, reason = True, "first filing"
            elif org_path == now:
                move, reason = True, "rules learned more" if BASIS_RANK.get(basis, 0) >= BASIS_RANK.get(org.get("basis"), 0) else "rules changed"
            elif force:
                move, reason = True, "--force (the GM had moved it)"
            else:
                reason = "left where the GM moved it"
            if move and facts.get("folded_from"):
                reason += f" (too few for {' / '.join(facts['folded_from'])})"
        final = target if (move or basis == "keep") else now
        # the folder the actor came from, remembered across passes (the tag
        # must not change once the move has happened)
        origin = org.get("from") if isinstance(org, dict) and isinstance(org.get("from"), list) else (now if move else None)
        facts["from"] = origin[0] if origin else None
        rows.append({
            "file": path, "doc": doc, "now": now, "target": final, "basis": basis, "facts": facts,
            "tags": tags_for(final, basis, facts, scheme), "color": color_for(final, facts, scheme),
            "move": move, "reason": reason, "organized": org,
        })
    return rows


def desired_flags(row):
    doc = row["doc"]
    flags = copy.deepcopy(doc.get("flags") or {})
    flags.setdefault(MODULE_ID, {})["folderPath"] = list(row["target"])
    sheets = flags.setdefault(SHEETS_FLAG, {})
    sheets["tags"] = list(row["tags"])
    if row["color"]:
        sheets["color"] = row["color"]
    else:
        sheets.pop("color", None)
    if row["basis"] != "keep":
        if row["move"] or not isinstance(row.get("organized"), dict):
            prev = row["organized"] if isinstance(row.get("organized"), dict) else None
            if prev and isinstance(prev.get("from"), list):
                came_from = prev["from"]  # the folder the GM had it in, kept across re-filings
            else:
                came_from = row["now"] if row["move"] else (prev or {}).get("from")
            sheets["organized"] = {"path": list(row["target"]), "basis": row["basis"],
                                   "from": list(came_from) if isinstance(came_from, list) else came_from}
    return flags


def target_file(world_dir, row):
    name = os.path.basename(row["file"])
    parts = [BRIDGE.dir_name(p) for p in row["target"]]
    return os.path.join(world_dir, *parts, name) if parts else os.path.join(world_dir, name)


def apply(world_dir, rows, write):
    """-> (changed files, moved files, summary lines)."""
    changed, moved, lines = [], [], []
    for row in rows:
        doc = row["doc"]
        new_flags = desired_flags(row)
        dest = target_file(world_dir, row)
        same_flags = new_flags == (doc.get("flags") or {})
        same_place = os.path.abspath(dest) == os.path.abspath(row["file"])
        if same_flags and same_place:
            continue
        rel = os.path.relpath(row["file"], ROOT).replace(os.sep, "/")
        if not same_place:
            lines.append(f"{doc.get('name')}: {' / '.join(row['now']) or 'root'} -> {' / '.join(row['target'])}  [{row['basis']}; {row['reason']}]")
            moved.append((row["file"], dest))
        elif not same_flags:
            lines.append(f"{doc.get('name')}: tags {row['tags']}" + (f" colour {row['color']}" if row["color"] else ""))
        changed.append(rel)
        if write:
            out = copy.deepcopy(doc)
            out["flags"] = new_flags
            BRIDGE.write_text(dest, BRIDGE.render(out))
            if not same_place:
                os.remove(row["file"])
                parent = os.path.dirname(row["file"])
                while parent != world_dir and os.path.isdir(parent) and not os.listdir(parent):
                    os.rmdir(parent)
                    parent = os.path.dirname(parent)
    return changed, moved, lines


def refresh_manifest(world_dir, write):
    path = os.path.join(world_dir, "manifest.json")
    if not os.path.exists(path):
        return False
    manifest = BRIDGE.read_json(path)
    actors, folders = [], set()
    for p, rel_parts in BRIDGE.actor_files([world_dir]):
        doc = BRIDGE.load_actor_file(p)
        if doc is None:
            continue
        fpath = current_path(doc, rel_parts)
        if fpath:
            folders.add(" / ".join(fpath))
        actors.append({"name": doc.get("name"), "type": doc.get("type"), "_id": doc.get("_id"),
                       "file": os.path.relpath(p, world_dir).replace(os.sep, "/")})
    actors.sort(key=lambda r: r["file"])
    new = dict(manifest)
    new["folders"] = sorted(folders)
    new["actors"] = actors
    new["actorCount"] = len(actors)
    if new == manifest:
        return False
    if write:
        BRIDGE.write_text(path, BRIDGE.render(new))
    return True


def summary(rows):
    by = {}
    for r in rows:
        by.setdefault(" / ".join(r["target"]) or "root", []).append(r)
    return by


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0], formatter_class=argparse.RawDescriptionHelpFormatter,
                                 epilog="\n".join(__doc__.split("\n\n")[1:]))
    ap.add_argument("--world", default="midlands")
    ap.add_argument("--scheme", default=BRIDGE.DEFAULT_FOLDER_SCHEME)
    ap.add_argument("--index", default=DEFAULT_INDEX, help="data/sheets.json (file -> website group)")
    ap.add_argument("--check", action="store_true", help="write nothing; exit 1 if anything would change")
    ap.add_argument("--force", action="store_true", help="re-file actors the GM moved after the organizer filed them")
    ap.add_argument("--quiet", action="store_true")
    args = ap.parse_args(argv)

    world_dir = os.path.join(WORLDS, args.world)
    if not os.path.isdir(world_dir):
        print(f"organize: no mirror at {os.path.relpath(world_dir, ROOT)}")
        return 0
    scheme = BRIDGE.load_folder_scheme(args.scheme)
    if not scheme:
        print(f"organize: FAIL — no folder scheme at {args.scheme}", file=sys.stderr)
        return 1
    index = load_index(args.index)
    rows = plan(world_dir, scheme, index, force=args.force, index_path=args.index)
    changed, moved, lines = apply(world_dir, rows, write=not args.check)
    manifest_changed = refresh_manifest(world_dir, write=not args.check)
    if not args.quiet:
        for ln in lines:
            print("  " + ln)
    counts = {k: len(v) for k, v in sorted(summary(rows).items())}
    held = sum(1 for r in rows if r["reason"] == "left where the GM moved it")
    verb = "would change" if args.check else "changed"
    print(f"organize: {len(rows)} actors in {len(counts)} folders; {len(moved)} moved, {len(changed)} file(s) {verb}"
          + (f", {held} left where the GM moved them" if held else "")
          + (", manifest updated" if manifest_changed and not args.check else ""))
    if not args.quiet:
        print("  " + " · ".join(f"{k} {v}" for k, v in counts.items()))
    if args.check and (changed or manifest_changed):
        print("organize: FAIL — the mirror is not organized; run tools/sheets-suite.py (or tools/organize-actors.py)", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
