#!/usr/bin/env python3
"""Foundry VTT ⇄ repo bridge for actors (stdlib only).

The loop the table runs at the end of every session:

  1. In Foundry: Mass export (module button or macros/export-all-actors.js)
     -> <world>-all-actors.json. Commit it.
  2. split    the export into one file per actor, in directories that mirror
              the Foundry folder tree, plus a manifest.
  3. link-images  connect actors to repo art (characters.json portraits first,
              then portraits/ by name), validate icon paths; report or --write.
  4. apply    a changes file (set fields, add/remove items or effects, rename,
              move folders, delete) across the split files; report or --write.
  5. combine  the files (any directories, e.g. the split world plus
              actors/peachs-castle-955) back into ONE import payload with the
              folder tree rebuilt — the module imports it by upload, Data path
              or raw GitHub URL, updating existing actors in place.
  6. install-images  copy every repo image the actors reference into the
              Foundry Data folder (never deletes, never overwrites a newer
              file without --force).
  check       validates a directory of actor files (ids, duplicates, images).

Accepted export shapes: the module's `waluipedia-actors/1` payload, the old
macro `{ "actors": [...] }`, a bare array (Players.json), or one actor.

Folder placement travels as flags["waluipedia-mass-import"].folderPath on each
actor; `split` writes it, directories mirror it, `combine` prefers the flag and
falls back to the directory path (and `--folder` prefixes everything).

Examples (Windows: `py tools\\foundry-bridge.py ...`):

  python3 tools/foundry-bridge.py split exports/dnd-part-2-all-actors.json \\
          --out Reputation-Matrix2/actors/worlds/dnd-part-2
  python3 tools/foundry-bridge.py link-images Reputation-Matrix2/actors/worlds/dnd-part-2 --write
  python3 tools/foundry-bridge.py apply changes.json Reputation-Matrix2/actors/worlds/dnd-part-2 --write
  python3 tools/foundry-bridge.py combine Reputation-Matrix2/actors/worlds/dnd-part-2 \\
          Reputation-Matrix2/actors/peachs-castle-955 --out imports/dnd-part-2-import.json
  python3 tools/foundry-bridge.py install-images Reputation-Matrix2/actors/worlds/dnd-part-2 \\
          --foundry-data "C:\\Users\\mikeg\\AppData\\Local\\FoundryVTT\\Data"
"""
from __future__ import annotations

import argparse
import copy
import hashlib
import json
import os
import re
import shutil
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RM = os.path.join(ROOT, "Reputation-Matrix2")
MODULE_ID = "waluipedia-mass-import"
FORMAT = "waluipedia-actors/1"
FOUNDRY_ID = re.compile(r"^[A-Za-z0-9]{16}$")
PLACEHOLDERS = {"", "icons/svg/mystery-man.svg", "icons/svg/item-bag.svg", None}
# Paths Foundry itself, the game system or an installed module provide. They
# cannot be verified from the repo and must never be "fixed" away.
SERVER_ROOTS = ("icons/", "systems/", "modules/", "ui/", "cards/", "fonts/", "sounds/", "worlds/")
# Paths the repo manages: a reference under one of these that the repo does
# not have is really missing (as opposed to a GM upload we merely cannot see).
REPO_ROOTS = ("portraits/",)
IMAGE_EXTS = (".png", ".webp", ".jpg", ".jpeg", ".gif", ".svg")
SKIP_FILES = {"manifest.json", "import.json", "players-import.json", "export.json", "folders.json", "changes.json", "packets.json"}
# dnd5e's IdentifierField: anything else makes the whole embedded item invalid
IDENTIFIER_RE = re.compile(r"^[a-z0-9_-]+$", re.I)
IDENTIFIER_KEYS = ("identifier", "classIdentifier", "sourceClass")
DEFAULT_FOLDER_SCHEME = os.path.join(RM, "actors", "folders.json")

DEFAULT_PORTRAITS = os.path.join(RM, "portraits")
DEFAULT_CHARACTERS = os.path.join(RM, "data", "characters.json")
DEFAULT_IMAGE_LIB = os.path.join(RM, "tools", "item sheet examples", "image paths.txt")


# ------------------------------------------------------------------ helpers

def sid(*parts):
    """Deterministic 16-char Foundry id (same recipe as the actor builders)."""
    h = hashlib.sha256("::".join(str(p) for p in parts).encode("utf-8")).digest()
    alnum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    n = int.from_bytes(h, "big")
    out = []
    for _ in range(16):
        n, r = divmod(n, len(alnum))
        out.append(alnum[r])
    return "".join(out)


def slugify(name):
    slug = str(name).lower().replace("'", "").replace("\u2019", "")
    slug = re.sub(r"[^a-z0-9]+", "-", slug).strip("-")
    return slug or "actor"


def slug_identifier(text):
    """What dnd5e derives from a name (String#slugify strict): lower-case
    ASCII, one dash between words, apostrophes dropped, nothing else."""
    import unicodedata
    t = unicodedata.normalize("NFKD", str(text or ""))
    t = "".join(ch for ch in t if not unicodedata.combining(ch)).lower()
    t = t.replace("'", "").replace("\u2019", "")
    t = re.sub(r"[^a-z0-9_]+", "-", t)
    t = re.sub(r"-+", "-", t).strip("-")
    return t


def invalid_identifiers(doc):
    """[(item, key, value)] for every embedded item identifier dnd5e would refuse."""
    out = []
    for it in doc.get("items") or []:
        sysd = it.get("system") if isinstance(it, dict) else None
        if not isinstance(sysd, dict):
            continue
        for key in IDENTIFIER_KEYS:
            val = sysd.get(key)
            if isinstance(val, str) and val and not IDENTIFIER_RE.match(val):
                out.append((it, key, val))
    return out


def repair_identifiers(doc):
    """Slugify, in place, the identifiers dnd5e would refuse ("toad-—-eager-variant"
    from a player's own export). Returns [(item name, key, before, after)]."""
    fixes = []
    for it, key, val in invalid_identifiers(doc):
        after = slug_identifier(val) or slug_identifier(it.get("name")) or "item"
        it["system"][key] = after
        fixes.append((it.get("name") or "?", key, val, after))
    return fixes


def load_folder_scheme(path=DEFAULT_FOLDER_SCHEME):
    """actors/folders.json — folder colours / descriptions by path. {} when absent."""
    try:
        scheme = read_json(path)
    except (OSError, ValueError):
        return {}
    return scheme if isinstance(scheme, dict) else {}


def folder_styles(scheme, paths):
    """{"A / B": {"color", "description"}} for every folder chain in `paths`
    (lists of names) the scheme has a colour for: Players, Bestiary and its
    creature types, the website groups (top level or under any one parent,
    e.g. "Waluipedia Cast / Iron Legion")."""
    if not scheme:
        return {}
    players = scheme.get("players") or {}
    bestiary = scheme.get("bestiary") or {}
    groups = scheme.get("groups") or {}
    types = bestiary.get("types") or {}
    styles = {}
    for path in paths:
        for i in range(len(path or [])):
            chain = list(path[: i + 1])
            key = " / ".join(chain)
            if key in styles:
                continue
            name = chain[-1]
            style = None
            if name == players.get("folder") and len(chain) == 1:
                style = players
            elif name == bestiary.get("folder") and len(chain) == 1:
                style = bestiary
            elif len(chain) == 2 and chain[0] == bestiary.get("folder"):
                color = types.get(name.lower())
                style = {"color": color} if color else None
            elif name in groups and len(chain) <= 2 and (len(chain) == 1 or chain[0] != bestiary.get("folder")):
                style = groups[name]
            if style and (style.get("color") or style.get("description")):
                styles[key] = {"color": style.get("color"), "description": style.get("description")}
    return styles


def dir_name(folder_name):
    """A folder name that is safe on Windows and still readable."""
    cleaned = re.sub(r'[<>:"/\\|?*\x00-\x1f]+', " ", str(folder_name)).strip(" .")
    return cleaned or "_"


def read_json(path):
    with open(path, encoding="utf-8") as fh:
        return json.load(fh)


def render(doc):
    return json.dumps(doc, indent=2, ensure_ascii=False) + "\n"


def write_text(path, text):
    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as fh:
        fh.write(text)
    os.replace(tmp, path)


def get_path(obj, dotted):
    cur = obj
    for key in dotted.split("."):
        if isinstance(cur, list):
            cur = cur[int(key)]
        elif isinstance(cur, dict):
            if key not in cur:
                return None
            cur = cur[key]
        else:
            return None
    return cur


def set_path(obj, dotted, value):
    keys = dotted.split(".")
    cur = obj
    for key in keys[:-1]:
        if isinstance(cur, list):
            cur = cur[int(key)]
        else:
            if key not in cur or not isinstance(cur[key], (dict, list)):
                cur[key] = {}
            cur = cur[key]
    if isinstance(cur, list):
        cur[int(keys[-1])] = value
    else:
        cur[keys[-1]] = value


def unset_path(obj, dotted):
    keys = dotted.split(".")
    cur = obj
    for key in keys[:-1]:
        cur = cur[int(key)] if isinstance(cur, list) else cur.get(key)
        if cur is None:
            return False
    if isinstance(cur, dict) and keys[-1] in cur:
        del cur[keys[-1]]
        return True
    return False


def folder_path_of(actor, folders_by_id):
    """Folder path of an actor as a list of names.

    Returns [] for an actor that is really at the root and **None** when the
    export only has a folder id we cannot resolve (the old macro export has
    no folder names). None must stay None: stamping [] would tell the module
    to move the actor to the root on the next import.
    """
    flag = (actor.get("flags") or {}).get(MODULE_ID, {}).get("folderPath")
    if isinstance(flag, list):
        return [str(p) for p in flag]
    fid = actor.get("folder")
    if not fid:
        return []
    if fid not in folders_by_id:
        return None
    path, seen = [], set()
    while fid and fid not in seen and fid in folders_by_id:
        seen.add(fid)
        f = folders_by_id[fid]
        path.insert(0, str(f.get("name", "")))
        fid = f.get("folder") or f.get("parent")
    return path


def set_folder_flag(actor, path):
    flags = actor.setdefault("flags", {})
    scope = flags.get(MODULE_ID)
    if not isinstance(scope, dict):
        scope = {}
        flags[MODULE_ID] = scope
    scope["folderPath"] = list(path)


def normalize_payload(raw):
    """-> (meta, folders, actors) for every accepted export shape."""
    if isinstance(raw, list):
        return {}, [], raw
    if isinstance(raw, dict) and isinstance(raw.get("actors"), list):
        meta = {k: v for k, v in raw.items() if k not in ("actors", "folders")}
        return meta, list(raw.get("folders") or []), raw["actors"]
    if isinstance(raw, dict) and raw.get("name") and raw.get("type"):
        return {}, [], [raw]
    raise SystemExit("not an actor export: expected an actor, a list of actors, or {actors: [...]}")


def actor_files(dirs):
    """Yield (path, relative_dir_parts) for every actor json under the dirs."""
    for base in dirs:
        base = os.path.abspath(base)
        if os.path.isfile(base):
            yield base, ()
            continue
        for cur, subdirs, files in os.walk(base):
            subdirs.sort()
            for fn in sorted(files):
                if not fn.endswith(".json") or fn in SKIP_FILES or fn.startswith("original-"):
                    continue
                rel = os.path.relpath(cur, base)
                parts = () if rel == "." else tuple(rel.split(os.sep))
                yield os.path.join(cur, fn), parts


def load_actor_file(path):
    doc = read_json(path)
    if not (isinstance(doc, dict) and doc.get("name") and doc.get("type")):
        return None
    return doc


def actor_filename(actor):
    aid = actor.get("_id")
    stem = f"fvtt-Actor-{slugify(actor.get('name', 'actor'))}"
    return f"{stem}-{aid}.json" if aid else f"{stem}.json"


# -------------------------------------------------------------------- split

def split(export_path, out_dir, flat=False, prune=False):
    raw = read_json(export_path)
    meta, folders, actors = normalize_payload(raw)
    folders_by_id = {f.get("_id"): f for f in folders if isinstance(f, dict)}
    written, paths, unresolved, repaired = [], [], {}, []
    kept = [a for a in actors if isinstance(a, dict) and a.get("name")]
    for actor in kept:
        path = folder_path_of(actor, folders_by_id)
        doc = copy.deepcopy(actor)
        # an invalid identifier is an invisible item in Foundry: fix it in the
        # mirror so the next import puts a valid one back
        repaired.extend((actor.get("name"), *f) for f in repair_identifiers(doc))
        if path is None:
            # folder id without a name: keep the id, stamp nothing, file at the top
            unresolved[actor.get("folder")] = unresolved.get(actor.get("folder"), 0) + 1
            target_dir = out_dir
        else:
            set_folder_flag(doc, path)
            target_dir = out_dir if flat else os.path.join(out_dir, *[dir_name(p) for p in path])
        target = os.path.join(target_dir, actor_filename(doc))
        write_text(target, render(doc))
        written.append(target)
        paths.append(" / ".join(path or []))
    manifest = {
        "format": meta.get("format") or ("legacy-macro" if meta.get("exportedFrom") else "bare"),
        "exportedFrom": meta.get("exportedFrom"),
        "exportedAt": meta.get("exportedAt"),
        "system": meta.get("system"),
        "systemVersion": meta.get("systemVersion"),
        "coreVersion": meta.get("coreVersion"),
        "source": os.path.relpath(os.path.abspath(export_path), ROOT).replace(os.sep, "/"),
        "actorCount": len(written),
        "folders": sorted({p for p in paths if p}),
        "identifiersRepaired": [{"actor": a, "item": i, "key": k, "from": b, "to": t} for a, i, k, b, t in repaired],
        "unresolvedFolderIds": dict(sorted(unresolved.items())),
        "note": ("" if not unresolved else
                 f"{sum(unresolved.values())} actor(s) carry a folder id this export gives no name for; "
                 "they keep that id (the module leaves them where they are). Re-export with the "
                 "Waluipedia Mass Import module to get named folders here."),
        "actors": sorted(
            ({"name": a.get("name"), "type": a.get("type"), "_id": a.get("_id"),
              "file": os.path.relpath(w, out_dir).replace(os.sep, "/")}
             for a, w in zip(kept, written)),
            key=lambda r: r["file"]),
    }
    write_text(os.path.join(out_dir, "manifest.json"), render(manifest))
    pruned = []
    if prune:
        keep = {os.path.abspath(w) for w in written}
        for path, _ in list(actor_files([out_dir])):
            if os.path.abspath(path) not in keep:
                os.remove(path)
                pruned.append(path)
    return written, pruned, manifest


# ------------------------------------------------------------------ combine

def combine(dirs, folder_prefix=None, world=None, ignore_dirs=False, scheme=None):
    prefix = [p.strip() for p in str(folder_prefix or "").split("/") if p.strip()]
    scheme = load_folder_scheme() if scheme is None else scheme
    rows = []
    for path, rel_parts in actor_files(dirs):
        doc = load_actor_file(path)
        if doc is None:
            continue
        flag = (doc.get("flags") or {}).get(MODULE_ID, {}).get("folderPath")
        if isinstance(flag, list):
            fpath = [str(p) for p in flag]
        elif ignore_dirs or not rel_parts:
            # no flag and not inside a sub-directory: the actor's folder is
            # unknown — keep its folder id and let the module leave it alone
            fpath = None if doc.get("folder") else []
        else:
            fpath = list(rel_parts)
        if fpath is not None:
            fpath = prefix + fpath
        rows.append((fpath, doc.get("name", ""), doc.get("_id") or "", doc, path))
    rows.sort(key=lambda r: (r[0] is None, r[0] or [], r[1], r[2]))

    folders, folder_ids = [], {}
    styles = folder_styles(scheme, [r[0] for r in rows if r[0]])
    for fpath, *_ in rows:
        for i in range(len(fpath or [])):
            chain = tuple(fpath[: i + 1])
            if chain in folder_ids:
                continue
            fid = sid("folder", "/".join(chain))
            folder_ids[chain] = fid
            style = styles.get(" / ".join(chain)) or {}
            folders.append({"_id": fid, "name": chain[-1], "type": "Actor",
                            "folder": folder_ids.get(chain[:-1]), "sorting": "a",
                            "sort": 0, "color": style.get("color"), "description": style.get("description"),
                            "path": list(chain)})
    actors, seen_ids, dupes = [], {}, []
    unresolved = 0
    for fpath, name, aid, doc, path in rows:
        doc = copy.deepcopy(doc)
        if fpath is None:
            unresolved += 1  # keep doc["folder"] as exported
        else:
            set_folder_flag(doc, fpath)
            doc["folder"] = folder_ids.get(tuple(fpath))
        if aid:
            if aid in seen_ids:
                dupes.append((aid, seen_ids[aid], path))
            seen_ids[aid] = path
        actors.append(doc)
    system = next((a.get("_stats", {}).get("systemId") for a in actors if a.get("_stats", {}).get("systemId")), None)
    payload = {
        "format": FORMAT,
        "generatedBy": "tools/foundry-bridge.py combine",
        "exportedFrom": world,
        "system": system,
        "actorCount": len(actors),
        "folderCount": len(folders),
        "unresolvedFolderActors": unresolved,
        "folderStyles": styles,
        "folders": folders,
        "actors": actors,
    }
    return payload, dupes


# -------------------------------------------------------------- link-images

def repo_file_for(image_path):
    """Return the repo file a Foundry-relative image path maps to, or None."""
    if not image_path or not isinstance(image_path, str):
        return None
    if image_path.startswith(("http://", "https://", "data:")):
        return None
    rel = image_path.split("?")[0].replace("\\", "/").lstrip("/")
    for base in (RM, ROOT):
        cand = os.path.join(base, *rel.split("/"))
        if os.path.isfile(cand):
            return cand
    return None


def image_status(p, lib=frozenset()):
    """placeholder | ok (in repo) | library | server | external | missing | unknown.

    `missing` is only used for repo-managed roots (REPO_ROOTS); anything else
    the repo cannot see is `unknown` — most likely a file the GM uploaded to
    the Foundry Data folder — and is reported, never rewritten by default.
    """
    if p in PLACEHOLDERS or not isinstance(p, str):
        return "placeholder"
    if p.startswith(("http://", "https://", "data:")):
        return "external"
    if repo_file_for(p):
        return "ok"
    if p.replace("\\", "/") in lib:
        return "library"
    if p.replace("\\", "/").lstrip("/").startswith(SERVER_ROOTS):
        return "server"
    if p.replace("\\", "/").lstrip("/").startswith(REPO_ROOTS):
        return "missing"
    return "unknown"


def load_image_lib(path=DEFAULT_IMAGE_LIB):
    if not path or not os.path.exists(path):
        return set()
    with open(path, encoding="utf-8", errors="replace") as fh:
        return {ln.strip().replace("\\", "/") for ln in fh if ln.strip()}


def load_character_portraits(path=DEFAULT_CHARACTERS):
    """name (lower) and slug -> portrait path, from characters.json."""
    out = {}
    if not path or not os.path.exists(path):
        return out
    data = read_json(path)
    records = data if isinstance(data, list) else data.get("characters", data)
    items = records if isinstance(records, list) else list(records.values())
    for rec in items:
        if not isinstance(rec, dict):
            continue
        img = rec.get("image") or rec.get("portrait")
        name = rec.get("name")
        if not (img and name):
            continue
        out.setdefault(str(name).lower(), img)
        out.setdefault(slugify(name), img)
    return out


def find_portrait(name, portraits_dir=DEFAULT_PORTRAITS):
    """portraits/<slug>.<ext> by name, underscore and hyphen spellings."""
    if not portraits_dir or not os.path.isdir(portraits_dir):
        return None
    slug = slugify(name)
    for stem in (slug.replace("-", "_"), slug):
        for ext in IMAGE_EXTS:
            cand = os.path.join(portraits_dir, stem + ext)
            if os.path.isfile(cand):
                rel = os.path.relpath(cand, RM).replace(os.sep, "/")
                return rel
    return None


def link_images(dirs, write=False, portraits_dir=DEFAULT_PORTRAITS,
                characters_json=DEFAULT_CHARACTERS, image_lib=DEFAULT_IMAGE_LIB,
                replace_unknown=False):
    """Point placeholder / missing portraits at repo images (by character name).

    Fixable statuses are `placeholder` and `missing`; `unknown` paths (GM
    uploads the repo cannot see, e.g. `npc/foo.webp`) are only replaced with
    replace_unknown=True. `server` and `external` paths are never touched.
    """
    lib = load_image_lib(image_lib)
    by_name = load_character_portraits(characters_json)
    fixable = {"placeholder", "missing"} | ({"unknown"} if replace_unknown else set())
    report = []
    for path, _ in actor_files(dirs):
        doc = load_actor_file(path)
        if doc is None:
            continue
        name = doc.get("name", "")
        changed = False
        rows = []

        def status(p):
            return image_status(p, lib)

        img = doc.get("img")
        token = ((doc.get("prototypeToken") or {}).get("texture") or {}).get("src")
        suggestion = None
        if status(img) in fixable or status(token) in fixable:
            suggestion = by_name.get(str(name).lower()) or by_name.get(slugify(name)) or find_portrait(name, portraits_dir)
            if suggestion and not repo_file_for(suggestion):
                suggestion = None
        for where, current in (("img", img), ("token", token)):
            st = status(current)
            row = {"actor": name, "where": where, "path": current, "status": st, "fix": None}
            if st in fixable and suggestion:
                row["fix"] = suggestion
                if write:
                    if where == "img":
                        doc["img"] = suggestion
                    else:
                        doc.setdefault("prototypeToken", {}).setdefault("texture", {})["src"] = suggestion
                    changed = True
            rows.append(row)
        for it in doc.get("items") or []:
            if not isinstance(it, dict):
                continue
            st = status(it.get("img"))
            if st in ("missing", "unknown"):
                rows.append({"actor": name, "where": f"item:{it.get('name')}", "path": it.get("img"), "status": st, "fix": None})
        report.extend(rows)
        if changed:
            write_text(path, render(doc))
    return report


# -------------------------------------------------------------------- apply

def _match(change, doc):
    m = change.get("match") or {}
    if not m:
        return False
    if "_id" in m and doc.get("_id") != m["_id"]:
        return False
    if "name" in m and doc.get("name") != m["name"]:
        return False
    if "type" in m and doc.get("type") != m["type"]:
        return False
    if "nameContains" in m and str(m["nameContains"]).lower() not in str(doc.get("name", "")).lower():
        return False
    return True


def _resolve_item(spec, base_dir):
    """An item spec: inline item dict, or {"fromFile": "...", "item": "Name"}."""
    if "fromFile" in spec:
        src_path = spec["fromFile"]
        if not os.path.isabs(src_path):
            cand = os.path.join(base_dir, src_path)
            src_path = cand if os.path.exists(cand) else os.path.join(ROOT, src_path)
        src = read_json(src_path)
        pool = src.get("items", []) if isinstance(src, dict) and src.get("type") else (src if isinstance(src, list) else [src])
        wanted = spec.get("item")
        for it in pool:
            if isinstance(it, dict) and (wanted is None or it.get("name") == wanted or it.get("_id") == wanted):
                return copy.deepcopy(it)
        raise LookupError(f"item {wanted!r} not found in {src_path}")
    return copy.deepcopy(spec)


def apply_changes(changes_path, dirs, write=False):
    spec = read_json(changes_path)
    changes = spec.get("changes", spec) if isinstance(spec, dict) else spec
    if not isinstance(changes, list):
        raise SystemExit("apply: changes file must be a list or {\"changes\": [...]}")
    base_dir = os.path.dirname(os.path.abspath(changes_path))
    docs = []
    for path, _ in actor_files(dirs):
        doc = load_actor_file(path)
        if doc is not None:
            docs.append([path, doc, False, False])  # path, doc, changed, delete
    log = []
    for idx, change in enumerate(changes):
        targets = [row for row in docs if _match(change, row[1])]
        if not targets:
            log.append(f"change #{idx + 1}: no actor matches {change.get('match')}")
            continue
        for row in targets:
            path, doc = row[0], row[1]
            label = f"{doc.get('name')} ({os.path.relpath(path, ROOT)})"
            if change.get("delete"):
                row[3] = True
                log.append(f"{label}: DELETE")
                continue
            for dotted, value in (change.get("set") or {}).items():
                set_path(doc, dotted, value)
                log.append(f"{label}: set {dotted} = {json.dumps(value, ensure_ascii=False)}")
            for dotted in change.get("unset") or []:
                if unset_path(doc, dotted):
                    log.append(f"{label}: unset {dotted}")
            if "rename" in change:
                log.append(f"{label}: rename -> {change['rename']}")
                doc["name"] = change["rename"]
                if isinstance(doc.get("prototypeToken"), dict):
                    doc["prototypeToken"]["name"] = change["rename"]
            if "folderPath" in change:
                set_folder_flag(doc, [str(p) for p in change["folderPath"]])
                log.append(f"{label}: folderPath -> {' / '.join(change['folderPath'])}")
            for name in change.get("removeItems") or []:
                before = len(doc.get("items") or [])
                doc["items"] = [it for it in doc.get("items") or [] if it.get("name") != name and it.get("_id") != name]
                log.append(f"{label}: removeItems {name!r} ({before - len(doc['items'])} removed)")
            for n, item_spec in enumerate(change.get("addItems") or []):
                try:
                    item = _resolve_item(item_spec, base_dir)
                except (LookupError, OSError, ValueError) as exc:
                    log.append(f"{label}: ERROR addItems — {exc}")
                    continue
                if not item.get("_id"):
                    item["_id"] = sid(doc.get("_id") or doc.get("name"), "item", item.get("name"), n)
                existing = [it for it in doc.get("items") or [] if it.get("_id") == item["_id"]]
                if existing:
                    doc["items"] = [item if it.get("_id") == item["_id"] else it for it in doc["items"]]
                    log.append(f"{label}: addItems {item.get('name')!r} (replaced, same id)")
                else:
                    doc.setdefault("items", []).append(item)
                    log.append(f"{label}: addItems {item.get('name')!r}")
            for name in change.get("removeEffects") or []:
                before = len(doc.get("effects") or [])
                doc["effects"] = [ef for ef in doc.get("effects") or [] if ef.get("name") != name and ef.get("_id") != name]
                log.append(f"{label}: removeEffects {name!r} ({before - len(doc['effects'])} removed)")
            for n, effect in enumerate(change.get("addEffects") or []):
                effect = copy.deepcopy(effect)
                if not effect.get("_id"):
                    effect["_id"] = sid(doc.get("_id") or doc.get("name"), "effect", effect.get("name"), n)
                doc.setdefault("effects", []).append(effect)
                log.append(f"{label}: addEffects {effect.get('name')!r}")
            row[2] = True
    if write:
        for path, doc, changed, delete in docs:
            if delete:
                os.remove(path)
            elif changed:
                write_text(path, render(doc))
    return log


# -------------------------------------------------------------------- check

def check(dirs, image_lib=DEFAULT_IMAGE_LIB, strict_images=False):
    lib = load_image_lib(image_lib)
    errors, warnings, ids, unknown = [], [], {}, []
    count = 0
    for path, _ in actor_files(dirs):
        rel = os.path.relpath(path, ROOT).replace(os.sep, "/")
        try:
            doc = read_json(path)
        except Exception as exc:  # noqa: BLE001 - report, do not crash
            errors.append(f"{rel}: invalid JSON ({exc})")
            continue
        if not (isinstance(doc, dict) and doc.get("name") and doc.get("type")):
            warnings.append(f"{rel}: not an actor (no name/type) — skipped")
            continue
        count += 1
        aid = doc.get("_id")
        if aid is not None and not FOUNDRY_ID.match(str(aid)):
            errors.append(f"{rel}: _id {aid!r} is not 16 alphanumerics")
        if aid:
            if aid in ids:
                errors.append(f"{rel}: duplicate _id {aid} (also {ids[aid]})")
            ids[aid] = rel
        if doc.get("type") not in ("character", "npc", "vehicle", "group"):
            warnings.append(f"{rel}: unusual actor type {doc.get('type')!r}")
        flag = (doc.get("flags") or {}).get(MODULE_ID, {}).get("folderPath")
        if flag is not None and not (isinstance(flag, list) and all(isinstance(p, str) for p in flag)):
            errors.append(f"{rel}: flags.{MODULE_ID}.folderPath must be a list of strings")
        item_ids = [it.get("_id") for it in doc.get("items") or [] if isinstance(it, dict) and it.get("_id")]
        if len(item_ids) != len(set(item_ids)):
            errors.append(f"{rel}: duplicate item _id")
        for it in doc.get("items") or []:
            if isinstance(it, dict) and it.get("type") in ("race", "class", "subclass", "background") and doc.get("type") == "npc":
                warnings.append(f"{rel}: npc carries a {it['type']} item ({it.get('name')})")
        for it, key, val in invalid_identifiers(doc):
            errors.append(f"{rel}: item {it.get('name')!r} system.{key} {val!r} is not letters/digits/-/_ — dnd5e rejects the item "
                          f"(split repairs this; expected {slug_identifier(val) or slug_identifier(it.get('name'))!r})")
        images = [("img", doc.get("img")), ("token", ((doc.get("prototypeToken") or {}).get("texture") or {}).get("src"))]
        images += [(f"item:{it.get('name')}", it.get("img")) for it in doc.get("items") or [] if isinstance(it, dict)]
        unknown_here = []
        for where, p in images:
            st = image_status(p, lib)
            if st == "missing":
                (errors if strict_images else warnings).append(f"{rel}: {where} image missing from the repo: {p}")
            elif st == "unknown":
                unknown_here.append(p)
        if unknown_here:
            unknown.extend(unknown_here)
            warnings.append(f"{rel}: {len(unknown_here)} image path(s) the repo cannot see (GM uploads?) e.g. {unknown_here[0]}")
    if unknown:
        warnings.append(f"{len(set(unknown))} distinct image path(s) outside the repo, system and modules — the module's import-time image check verifies them in Foundry")
    return count, errors, warnings


# ----------------------------------------------------------- install-images

def install_images(dirs, foundry_data, dry_run=False, force=False):
    copied, skipped, missing = [], [], []
    seen = set()
    for path, _ in actor_files(dirs):
        doc = load_actor_file(path)
        if doc is None:
            continue
        paths = [doc.get("img"), ((doc.get("prototypeToken") or {}).get("texture") or {}).get("src")]
        paths += [it.get("img") for it in doc.get("items") or [] if isinstance(it, dict)]
        for p in paths:
            if not isinstance(p, str) or p in seen:
                continue
            seen.add(p)
            st = image_status(p)
            if st in ("placeholder", "server", "external", "library"):
                continue
            src = repo_file_for(p)
            if not src:
                if st == "missing":
                    missing.append(p)
                continue  # unknown = a GM upload the repo never had; nothing to copy
            dst = os.path.join(foundry_data, *p.replace("\\", "/").split("/"))
            if os.path.exists(dst) and not force and os.path.getsize(dst) == os.path.getsize(src):
                skipped.append(p)
                continue
            if not dry_run:
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                shutil.copy2(src, dst)
            copied.append(p)
    return copied, skipped, missing


# ---------------------------------------------------------------------- CLI

def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0],
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)

    p = sub.add_parser("split", help="one file per actor, directories mirror the folder tree")
    p.add_argument("export")
    p.add_argument("--out", required=True)
    p.add_argument("--flat", action="store_true", help="no folder directories")
    p.add_argument("--prune", action="store_true", help="delete actor files in --out that the export no longer has")

    p = sub.add_parser("combine", help="actor files -> one import payload (folders rebuilt)")
    p.add_argument("dirs", nargs="+")
    p.add_argument("--out", required=True)
    p.add_argument("--folder", default=None, help="prefix every folderPath, e.g. \"Imports / Session 42\"")
    p.add_argument("--world", default=None, help="exportedFrom value")
    p.add_argument("--ignore-dirs", action="store_true", help="only use the folderPath flag, never the directory path")
    p.add_argument("--check", action="store_true", help="verify --out is current; write nothing")

    p = sub.add_parser("link-images", help="connect actors to repo art; report unless --write")
    p.add_argument("dirs", nargs="+")
    p.add_argument("--write", action="store_true")
    p.add_argument("--portraits", default=DEFAULT_PORTRAITS)
    p.add_argument("--characters", default=DEFAULT_CHARACTERS)
    p.add_argument("--image-lib", default=DEFAULT_IMAGE_LIB)
    p.add_argument("--replace-unknown", action="store_true",
                   help="also replace image paths the repo cannot see (GM uploads such as npc/foo.webp)")

    p = sub.add_parser("apply", help="apply a changes.json across actor files; report unless --write")
    p.add_argument("changes")
    p.add_argument("dirs", nargs="+")
    p.add_argument("--write", action="store_true")

    p = sub.add_parser("check", help="validate actor files")
    p.add_argument("dirs", nargs="+")
    p.add_argument("--image-lib", default=DEFAULT_IMAGE_LIB)
    p.add_argument("--strict-images", action="store_true", help="unknown images are errors, not warnings")

    p = sub.add_parser("install-images", help="copy referenced repo images into the Foundry Data folder")
    p.add_argument("dirs", nargs="+")
    p.add_argument("--foundry-data", required=True)
    p.add_argument("--dry-run", action="store_true")
    p.add_argument("--force", action="store_true")

    args = ap.parse_args(argv)

    if args.cmd == "split":
        written, pruned, manifest = split(args.export, args.out, flat=args.flat, prune=args.prune)
        for w in written:
            print(f"  wrote {os.path.relpath(w, ROOT)}")
        for w in pruned:
            print(f"  pruned {os.path.relpath(w, ROOT)}")
        for r in manifest["identifiersRepaired"]:
            print(f"  repaired {r['actor']} · {r['item']} · {r['key']} {r['from']!r} -> {r['to']!r}")
        print(f"split: {len(written)} actors from {manifest['exportedFrom'] or args.export} "
              f"into {len(manifest['folders'])} folder path(s) -> {args.out}"
              + (f", {len(manifest['identifiersRepaired'])} identifier(s) repaired" if manifest["identifiersRepaired"] else ""))
        return 0

    if args.cmd == "combine":
        payload, dupes = combine(args.dirs, folder_prefix=args.folder, world=args.world, ignore_dirs=args.ignore_dirs)
        for aid, first, second in dupes:
            print(f"  WARNING duplicate _id {aid}: {os.path.relpath(first, ROOT)} and {os.path.relpath(second, ROOT)}", file=sys.stderr)
        text = render(payload)
        if args.check:
            if not os.path.exists(args.out):
                print(f"FAIL combine: {args.out} missing", file=sys.stderr)
                return 1
            with open(args.out, encoding="utf-8") as fh:
                if fh.read() != text:
                    print(f"FAIL combine: {args.out} is stale — rerun without --check", file=sys.stderr)
                    return 1
            print(f"OK combine: {args.out} current ({payload['actorCount']} actors, {payload['folderCount']} folders)")
            return 0
        write_text(args.out, text)
        print(f"combine: {payload['actorCount']} actors, {payload['folderCount']} folders"
              f" ({sum(1 for f in payload['folders'] if f.get('color'))} coloured) -> {args.out}")
        return 1 if dupes else 0

    if args.cmd == "link-images":
        report = link_images(args.dirs, write=args.write, portraits_dir=args.portraits,
                             characters_json=args.characters, image_lib=args.image_lib,
                             replace_unknown=args.replace_unknown)
        problems = [r for r in report if r["status"] in ("placeholder", "missing")]
        unknown = [r for r in report if r["status"] == "unknown"]
        for r in report:
            if r["status"] in ("ok", "server", "external") or (r["status"] == "library" and r["where"].startswith("item")):
                continue
            if r["status"] == "unknown" and not r["fix"] and r["where"].startswith("item"):
                continue
            fix = f" -> {r['fix']}" if r["fix"] else ""
            print(f"  {r['status']:<11} {r['actor']} · {r['where']} · {r['path']}{fix}")
        fixed = sum(1 for r in report if r["fix"])
        verb = "fixed" if args.write else "fixable"
        print(f"link-images: {len(report)} image refs, {len(problems)} placeholder/missing, "
              f"{len(unknown)} outside the repo (left alone{'' if args.replace_unknown else '; --replace-unknown to swap them'}), {fixed} {verb}"
              + ("" if args.write else " (dry run — add --write)"))
        return 0

    if args.cmd == "apply":
        log = apply_changes(args.changes, args.dirs, write=args.write)
        for line in log:
            print("  " + line)
        errors = [ln for ln in log if ": ERROR " in ln or ln.startswith("change #")]
        print(f"apply: {len(log)} change line(s), {len(errors)} problem(s)" + ("" if args.write else " (dry run — add --write)"))
        return 1 if errors else 0

    if args.cmd == "check":
        count, errors, warnings = check(args.dirs, image_lib=args.image_lib, strict_images=args.strict_images)
        for w in warnings:
            print("  warn  " + w)
        for e in errors:
            print("  ERROR " + e, file=sys.stderr)
        print(f"{'FAIL' if errors else 'OK'} check: {count} actors, {len(errors)} error(s), {len(warnings)} warning(s)")
        return 1 if errors else 0

    if args.cmd == "install-images":
        copied, skipped, missing = install_images(args.dirs, args.foundry_data, dry_run=args.dry_run, force=args.force)
        for p in copied:
            print(f"  {'would copy' if args.dry_run else 'copied'} {p}")
        for p in missing:
            print(f"  MISSING in repo: {p}", file=sys.stderr)
        print(f"install-images: {len(copied)} copied, {len(skipped)} already there, {len(missing)} missing"
              + (" (dry run)" if args.dry_run else ""))
        return 1 if missing else 0
    return 2


if __name__ == "__main__":
    sys.exit(main())
