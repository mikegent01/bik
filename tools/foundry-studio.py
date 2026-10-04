#!/usr/bin/env python3
"""Foundry++ character editor suite — sort the art folder, name it, link it
into Foundry's Data folder, and manage the sheets' versions (stdlib only).

The mess it is for: a folder of loose files next to a few subfolders —
`bonesclean.webp`, `danm.png`, `court-mage-a.png`, a dozen hash-named
`…-removebg-preview.png` cut-outs, an mp3 or two. The studio walks you
through them one at a time (or takes a prepared answers file), asks for a
name, a kind (portrait / token / icon / bg / ai / audio), a faction and an
optional era version, files each one under `<kind>/<faction>/<slug>.<ext>`
and remembers everything in `foundry-studio.json` next to them. Then `link`
puts the whole library — and the repo's actor trees — inside Foundry's own
Data folder as symlinks (junctions / hard links / copies where Windows
refuses), so a token path is predictable and the Mass Import module can
read `npc/waluipedia/actors/...` directly.

    python3 tools/foundry-studio.py scan    <library>
    python3 tools/foundry-studio.py sort    <library> [--answers answers.json] [--auto] [--all]
    python3 tools/foundry-studio.py list    <library> [--faction F] [--kind K]
    python3 tools/foundry-studio.py edit    <library> <slug> [--name N] [--faction F] [--character ID] [--version V] [--notes TEXT]
    python3 tools/foundry-studio.py rename  <library> <slug> <new-slug>
    python3 tools/foundry-studio.py delete  <library> <slug>[/<kind>] [--forever]
    python3 tools/foundry-studio.py link    [<library>] [--data <FoundryData>] [--copy] [--dry-run]
    python3 tools/foundry-studio.py unlink  [--data <FoundryData>]
    python3 tools/foundry-studio.py versions <character-id> [--stub <version>]
    python3 tools/foundry-studio.py adopt   <library> <slug> [--as <character-id>] [--force]
    python3 tools/foundry-studio.py changes <library> --out changes.json

Windows: `py tools\\foundry-studio.py …`; the Data folder defaults to
`%LOCALAPPDATA%\\FoundryVTT\\Data`. Nothing here deletes for good unless you
say `--forever` — `delete` moves files to `_trash/` inside the library.

What it never does: edit a generated sheet by hand (`actors/cast/` is the
builder's — change the article, a BESPOKE / ERAS entry, rebuild), invent a
character, or touch Foundry's own files outside `Data/npc/waluipedia/`.
"""
from __future__ import annotations

import argparse
import difflib
import json
import os
import platform
import re
import shutil
import struct
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RM = os.path.join(ROOT, "Reputation-Matrix2")
CHARACTERS = os.path.join(RM, "data", "characters.json")
FACTIONS = os.path.join(RM, "data", "factions.json")
SHEETS = os.path.join(RM, "data", "sheets.json")
PACKET_955 = os.path.join(RM, "actors", "peachs-castle-955", "import.json")
PORTRAITS = os.path.join(RM, "portraits")
ACTORS = os.path.join(RM, "actors")
INDEX_HTML = os.path.join(ROOT, "index.html")

MANIFEST = "foundry-studio.json"
FORMAT = "foundry-studio/1"
DATA_SUB = os.path.join("npc", "waluipedia")          # inside Foundry's Data folder
LINKS_FILE = "studio-links.json"                      # what `link` created, for `unlink`
TRASH = "_trash"

KINDS = ("portraits", "tokens", "icons", "bg", "ai", "audio", "other")
KIND_ALIASES = {"portrait": "portraits", "token": "tokens", "icon": "icons", "background": "bg",
                "backgrounds": "bg", "sound": "audio", "music": "audio", "sfx": "audio"}
IMAGE_EXT = {".png", ".webp", ".jpg", ".jpeg", ".gif", ".svg", ".avif"}
AUDIO_EXT = {".mp3", ".wav", ".ogg", ".flac", ".m4a", ".opus"}
HASH_NAME = re.compile(r"^[0-9a-f]{12,}(?:[-_].*)?$|-removebg-preview$", re.I)
UNAFFILIATED = "unaffiliated"
AUTO_CONFIDENCE = 0.85     # --auto only takes a name suggestion at least this sure


# ------------------------------------------------------------------ helpers

def read_json(path):
    with open(path, encoding="utf-8") as fh:
        return json.load(fh)


def write_json(path, data):
    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as fh:
        json.dump(data, fh, indent=2, ensure_ascii=False)
        fh.write("\n")
    os.replace(tmp, path)


def slugify(name):
    s = re.sub(r"[^a-z0-9]+", "_", str(name).lower()).strip("_")
    return s or "unnamed"


def human_size(n):
    for unit in ("B", "KB", "MB", "GB"):
        if n < 1024 or unit == "GB":
            return f"{n:.0f} {unit}" if unit == "B" else f"{n:.1f} {unit}"
        n /= 1024.0
    return f"{n:.1f} GB"


def image_size(path):
    """(width, height) from the header of a PNG / GIF / JPEG / WebP, else None."""
    try:
        with open(path, "rb") as fh:
            head = fh.read(32)
            if head[:8] == b"\x89PNG\r\n\x1a\n" and head[12:16] == b"IHDR":
                return struct.unpack(">II", head[16:24])
            if head[:6] in (b"GIF87a", b"GIF89a"):
                return struct.unpack("<HH", head[6:10])
            if head[:4] == b"RIFF" and head[8:12] == b"WEBP":
                chunk = head[12:16]
                if chunk == b"VP8X":
                    w = int.from_bytes(head[24:27], "little") + 1
                    h = int.from_bytes(head[27:30], "little") + 1
                    return (w, h)
                if chunk == b"VP8L":
                    b = head[21:25]
                    bits = int.from_bytes(b, "little")
                    return ((bits & 0x3FFF) + 1, ((bits >> 14) & 0x3FFF) + 1)
                if chunk == b"VP8 ":
                    fh.seek(26)
                    b = fh.read(4)
                    return (int.from_bytes(b[0:2], "little") & 0x3FFF, int.from_bytes(b[2:4], "little") & 0x3FFF)
                return None
            if head[:2] == b"\xff\xd8":
                fh.seek(2)
                while True:
                    marker = fh.read(2)
                    if len(marker) < 2 or marker[0] != 0xFF:
                        return None
                    if marker[1] in (0xC0, 0xC1, 0xC2):
                        fh.read(3)
                        h, w = struct.unpack(">HH", fh.read(4))
                        return (w, h)
                    seg = fh.read(2)
                    if len(seg) < 2:
                        return None
                    fh.seek(struct.unpack(">H", seg)[0] - 2, 1)
    except (OSError, struct.error):
        return None
    return None


def kind_fits(kind, ext):
    """audio kinds want audio files, image kinds want images; `other` takes anything."""
    ext = ext.lower()
    if kind == "other":
        return True
    if kind == "audio":
        return ext in AUDIO_EXT
    return ext in IMAGE_EXT


def default_data_dir():
    sysname = platform.system()
    if sysname == "Windows":
        base = os.environ.get("LOCALAPPDATA") or os.path.expanduser("~\\AppData\\Local")
        return os.path.join(base, "FoundryVTT", "Data")
    if sysname == "Darwin":
        return os.path.expanduser("~/Library/Application Support/FoundryVTT/Data")
    return os.path.expanduser("~/.local/share/FoundryVTT/Data")


# --------------------------------------------------------- the archive side

class Archive:
    """What the repo knows: characters, factions, the 955 roster, the ledger."""

    def __init__(self, root=ROOT):
        self.root = root
        rm = os.path.join(root, "Reputation-Matrix2")
        self.characters = self._load(os.path.join(rm, "data", "characters.json"), [])
        if isinstance(self.characters, dict):
            self.characters = self.characters.get("characters", [])
        self.factions = self._load(os.path.join(rm, "data", "factions.json"), [])
        if isinstance(self.factions, dict):
            self.factions = self.factions.get("factions", list(self.factions.values()))
        self.sheets = self._load(os.path.join(rm, "data", "sheets.json"), {"sheets": []})
        packet = self._load(os.path.join(rm, "actors", "peachs-castle-955", "import.json"), {})
        self.roster_955 = [a.get("name") for a in (packet.get("actors") or []) if a.get("name")]
        self.ledger = self._xp_summary(os.path.join(root, "index.html"))
        ap = self._load(os.path.join(rm, "data", "abilityPoints.json"), {})
        players = ap.get("players") if isinstance(ap, dict) else None
        self.ledger_factions = {pid: p.get("faction") for pid, p in (players or {}).items() if isinstance(p, dict) and p.get("faction")}
        self.by_id = {c["id"]: c for c in self.characters if c.get("id")}
        self._names = {}
        for c in self.characters:
            if c.get("id"):
                self._names[c["id"].replace("_", " ").lower()] = c["id"]
                if c.get("name"):
                    self._names[str(c["name"]).lower()] = c["id"]
        for n in self.roster_955:
            self._names.setdefault(n.lower(), None)
        self.faction_ids = [f.get("id") for f in self.factions if f.get("id")]
        self.faction_names = {f.get("id"): f.get("name") for f in self.factions if f.get("id")}
        for fid in sorted(set(self.ledger_factions.values())):
            if fid not in self.faction_names:
                self.faction_names[fid] = fid.replace("_", " ").title()

    @staticmethod
    def _load(path, default):
        try:
            return read_json(path)
        except (OSError, ValueError):
            return default

    @staticmethod
    def _xp_summary(index_html):
        try:
            with open(index_html, encoding="utf-8") as fh:
                for line in fh:
                    if line.startswith("const XP_SUMMARY="):
                        blob = line[len("const XP_SUMMARY="):].strip().rstrip(";")
                        return json.loads(blob)
        except (OSError, ValueError):
            pass
        return {}

    def suggest(self, stem, limit=3):
        """[(label, character id or None, score)] for a file stem like `bonesclean`."""
        key = re.sub(r"(?i)-removebg-preview|[_\-\s]+", " ", stem).strip().lower()
        key = re.sub(r"\s*\(\d+\)$", "", key)
        if not key or HASH_NAME.match(stem):
            return []
        out = {}
        names = list(self._names.keys())
        for n in difflib.get_close_matches(key, names, n=limit, cutoff=0.6):
            out[n] = max(out.get(n, 0), difflib.SequenceMatcher(None, key, n).ratio())
        compact = key.replace(" ", "")
        if len(compact) >= 4:
            for n in names:
                nc = n.replace(" ", "").replace("'", "")
                if len(nc) >= 4 and (nc in compact or compact in nc):
                    out[n] = max(out.get(n, 0), 0.75 if nc != compact else 1.0)
        rows, seen = [], set()
        for n, score in sorted(out.items(), key=lambda kv: -kv[1]):
            cid = self._names.get(n)
            ident = cid or n
            if ident in seen:
                continue
            seen.add(ident)
            label = self.by_id[cid]["name"] if cid and cid in self.by_id else n.title()
            rows.append((label, cid, round(score, 2)))
            if len(rows) >= limit:
                break
        return rows

    def faction_for(self, cid):
        """The XP ledger's faction, else a faction whose name appears in the article's affiliation."""
        if not cid:
            return UNAFFILIATED
        led = self.ledger_factions.get(cid)
        if led:
            return led
        aff = str((self.by_id.get(cid) or {}).get("affiliation") or "").lower()
        if aff:
            for fid, fname in self.faction_names.items():
                parts = re.split(r"[/—–]", str(fname)) + [fid.replace("_", " ")]
                for part in parts:
                    p = re.sub(r"^the\s+", "", part.strip().lower()).replace("'", "")
                    if len(p) >= 5 and p in aff.replace("'", ""):
                        return fid
        return UNAFFILIATED

    def faction_choices(self):
        ids = list(self.faction_ids) + [f for f in sorted(set(self.ledger_factions.values())) if f not in self.faction_ids]
        return ids + [UNAFFILIATED]

    def sheet_entry(self, cid):
        for e in self.sheets.get("sheets") or []:
            if e.get("id") == cid:
                return e
        return None


# -------------------------------------------------------------- the library

class Library:
    """The art folder and its manifest."""

    def __init__(self, path):
        self.path = os.path.abspath(path)
        self.manifest_path = os.path.join(self.path, MANIFEST)
        if os.path.isfile(self.manifest_path):
            self.data = read_json(self.manifest_path)
        else:
            self.data = {"format": FORMAT, "entries": {}, "skipped": []}
        self.data.setdefault("entries", {})
        self.data.setdefault("skipped", [])

    @property
    def entries(self):
        return self.data["entries"]

    def save(self):
        self.data["format"] = FORMAT
        write_json(self.manifest_path, self.data)

    def filed(self):
        """Every relative path the manifest owns."""
        out = set()
        for e in self.entries.values():
            for rel in (e.get("files") or {}).values():
                out.add(rel.replace("\\", "/"))
        return out

    def loose(self, include_subfolders=False):
        """Files not yet in the manifest: the root of the library, or everything with --all."""
        out = []
        filed = self.filed()
        for base, dirs, files in os.walk(self.path):
            rel_base = os.path.relpath(base, self.path).replace("\\", "/")
            dirs[:] = [d for d in dirs if d != TRASH and not d.startswith(".")]
            if rel_base != "." and not include_subfolders:
                continue
            for fn in sorted(files):
                if fn == MANIFEST or fn.startswith("."):
                    continue
                rel = fn if rel_base == "." else rel_base + "/" + fn
                if rel in filed or rel in self.data["skipped"]:
                    continue
                out.append(rel)
        return out

    @staticmethod
    def kind_of(rel):
        """Best guess at the kind from the folder the file sits in and its name."""
        parts = rel.replace("\\", "/").split("/")
        head = parts[0].lower() if len(parts) > 1 else ""
        if head in KINDS:
            return head
        if head in KIND_ALIASES:
            return KIND_ALIASES[head]
        name, ext = os.path.splitext(parts[-1].lower())
        if ext in AUDIO_EXT:
            return "audio"
        if ext not in IMAGE_EXT:
            return "other"
        if "token" in name or name.endswith("-removebg-preview"):
            return "tokens"
        if "icon" in name:
            return "icons"
        if name.startswith("bg") or "background" in name or name.endswith("_bg"):
            return "bg"
        return "portraits"

    def describe(self, rel):
        full = os.path.join(self.path, rel)
        ext = os.path.splitext(rel)[1].lower()
        size = os.path.getsize(full) if os.path.isfile(full) else 0
        dims = image_size(full) if ext in IMAGE_EXT else None
        bits = [ext.lstrip(".") or "?", f"{dims[0]}×{dims[1]}" if dims else None, human_size(size)]
        return "  ".join(b for b in bits if b)

    def target(self, kind, faction, slug, version, ext):
        name = slug + ("--" + version if version else "") + ext.lower()
        return "/".join([kind, faction, name])

    def file(self, rel, *, name, kind, faction, character=None, version=None, notes=""):
        """Move one loose file into place and record it. Returns the new relative path."""
        slug = slugify(name)
        ext = os.path.splitext(rel)[1]
        new_rel = self.target(kind, faction, slug, version, ext)
        src = os.path.join(self.path, rel)
        dst = os.path.join(self.path, new_rel)
        if os.path.abspath(src) != os.path.abspath(dst):
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            n = 2
            while os.path.exists(dst):
                stem, e = os.path.splitext(new_rel)
                new_rel = f"{stem}-{n}{e}"
                dst = os.path.join(self.path, new_rel)
                n += 1
            shutil.move(src, dst)
        key = slug + ("--" + version if version else "")
        entry = self.entries.setdefault(key, {"name": name, "slug": slug, "faction": faction,
                                              "character": character, "version": version or None,
                                              "files": {}, "notes": ""})
        entry["name"] = name
        entry["faction"] = faction
        if character:
            entry["character"] = character
        if notes:
            entry["notes"] = notes
        entry["files"][kind] = new_rel
        return new_rel

    def skip(self, rel):
        if rel not in self.data["skipped"]:
            self.data["skipped"].append(rel)

    def rename(self, key, new_name):
        e = self.entries.get(key)
        if not e:
            raise SystemExit(f"no entry {key!r} in the manifest")
        slug = slugify(new_name)
        new_key = slug + ("--" + e["version"] if e.get("version") else "")
        if new_key != key and new_key in self.entries:
            raise SystemExit(f"{new_key!r} already exists")
        for kind, rel in list(e["files"].items()):
            new_rel = self.target(kind, e["faction"], slug, e.get("version"), os.path.splitext(rel)[1])
            self._move(rel, new_rel)
            e["files"][kind] = new_rel
        e["name"], e["slug"] = new_name, slug
        if new_key != key:
            self.entries[new_key] = self.entries.pop(key)
        return new_key

    def refaction(self, key, faction):
        e = self.entries.get(key)
        if not e:
            raise SystemExit(f"no entry {key!r} in the manifest")
        for kind, rel in list(e["files"].items()):
            new_rel = self.target(kind, faction, e["slug"], e.get("version"), os.path.splitext(rel)[1])
            self._move(rel, new_rel)
            e["files"][kind] = new_rel
        e["faction"] = faction

    def _move(self, rel, new_rel):
        if rel == new_rel:
            return
        src, dst = os.path.join(self.path, rel), os.path.join(self.path, new_rel)
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        if os.path.exists(dst):
            raise SystemExit(f"cannot move {rel} → {new_rel}: target exists")
        shutil.move(src, dst)
        self._prune(os.path.dirname(src))

    def _prune(self, folder):
        try:
            while os.path.abspath(folder) != self.path and not os.listdir(folder):
                os.rmdir(folder)
                folder = os.path.dirname(folder)
        except OSError:
            pass

    def delete(self, key, kind=None, forever=False):
        e = self.entries.get(key)
        if not e:
            raise SystemExit(f"no entry {key!r} in the manifest")
        kinds = [kind] if kind else list(e["files"].keys())
        gone = []
        for k in kinds:
            rel = e["files"].pop(k, None)
            if not rel:
                raise SystemExit(f"{key} has no {k} file")
            src = os.path.join(self.path, rel)
            if forever:
                if os.path.exists(src):
                    os.remove(src)
            else:
                dst = os.path.join(self.path, TRASH, rel)
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                if os.path.exists(src):
                    shutil.move(src, dst)
            self._prune(os.path.dirname(src))
            gone.append(rel)
        if not e["files"]:
            del self.entries[key]
        return gone


# ------------------------------------------------------------- the prompts

class Prompter:
    """input() with defaults; an answers file or --auto replaces the keyboard."""

    def __init__(self, answers=None, auto=False, stream=None):
        self.answers = answers or {}
        self.auto = auto
        self.stream = stream or sys.stdin
        self.current = None

    def ask(self, field, label, default="", choices=None):
        a = self.answers.get(self.current) if self.current else None
        if isinstance(a, dict) and field in a:
            return str(a[field]) if a[field] is not None else ""
        if self.auto:
            return default
        while True:
            try:
                sys.stdout.write(f"  {label} [{default}]: ")
                sys.stdout.flush()
                raw = self.stream.readline()
            except (EOFError, KeyboardInterrupt):
                return default
            if raw == "":
                return None          # stdin closed: stop rather than file everything by default
            raw = raw.strip()
            if raw == "" and default != "":
                return default
            if raw == "?" and choices:
                print("    " + ", ".join(choices))
                continue
            return raw


def run_sort(args, archive):
    lib = Library(args.library)
    answers = read_json(args.answers) if args.answers else {}
    prompter = Prompter(answers=answers, auto=args.auto)
    loose = lib.loose(include_subfolders=args.all)
    if not loose:
        print("nothing loose — every file is filed (see `list`), or in the skip list")
        return 0
    filed, skipped, stopped = 0, 0, False
    for i, rel in enumerate(loose, 1):
        prompter.current = rel
        stem = os.path.splitext(os.path.basename(rel))[0]
        print(f"\n[{i}/{len(loose)}] {rel}   ({lib.describe(rel)})")
        hints = archive.suggest(stem)
        if hints:
            print("  looks like: " + "; ".join(f"{label}{' (' + cid + ')' if cid else ''} {int(score * 100)}%"
                                               for label, cid, score in hints))
        elif HASH_NAME.search(stem):
            print("  a hash-named cut-out — no name in the file; say who it is")
        in_answers = rel in answers
        best = hints[0] if hints and hints[0][2] >= (AUTO_CONFIDENCE if args.auto else 0.6) else None
        if not in_answers and answers and not args.auto:
            print("  not in the answers file, left loose")
            continue
        if args.auto and not in_answers and not best:
            print("  auto: no confident match, left loose")
            continue
        if not in_answers and not args.auto:
            print("  Enter = accept the default · s = skip · d = delete (to _trash) · q = quit")
        hashed = bool(HASH_NAME.search(stem))
        default_name = best[0] if best else ("" if hashed else stem.replace("-", " ").replace("_", " ").title())
        name = prompter.ask("name", "name", default_name)
        if name is None:
            stopped = True
            break
        if not name.strip():
            print("  no name given, left loose")
            continue
        if name.lower() in ("s", "skip"):
            lib.skip(rel)
            skipped += 1
            continue
        if name.lower() in ("d", "delete"):
            dst = os.path.join(lib.path, TRASH, rel)
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            shutil.move(os.path.join(lib.path, rel), dst)
            print(f"  → {TRASH}/{rel}")
            skipped += 1
            continue
        if name.lower() in ("q", "quit"):
            stopped = True
            break
        cid = best[1] if best and name == best[0] else archive._names.get(name.lower())
        if in_answers and isinstance(answers[rel], dict) and answers[rel].get("character"):
            cid = answers[rel]["character"]
        ext = os.path.splitext(rel)[1]
        guess = lib.kind_of(rel)
        while True:
            kind = prompter.ask("kind", f"kind ({'/'.join(KINDS)})", guess, KINDS)
            if kind is None:
                break
            kind = KIND_ALIASES.get(kind.lower(), kind.lower())
            if kind not in KINDS:
                print(f"  unknown kind {kind!r} — one of {', '.join(KINDS)}")
            elif not kind_fits(kind, ext):
                print(f"  {ext} is not a {kind} file")
            else:
                break
            if in_answers or args.auto:
                print(f"  using {guess}")
                kind = guess
                break
        if kind is None:
            stopped = True
            break
        faction = prompter.ask("faction", "faction (? lists them)", archive.faction_for(cid), archive.faction_choices())
        if faction is None:
            stopped = True
            break
        faction = slugify(faction) if faction else UNAFFILIATED
        version = prompter.ask("version", "version (blank = now; e.g. 955-bf)", "")
        version = slugify(version).replace("_", "-") if version else None
        notes = (prompter.ask("notes", "notes", "") if in_answers else "") or ""
        new_rel = lib.file(rel, name=name, kind=kind, faction=faction, character=cid, version=version, notes=notes)
        print(f"  → {new_rel}" + (f"   (character {cid})" if cid else ""))
        filed += 1
        lib.save()
    lib.save()
    print(f"\nfiled {filed}, skipped {skipped}, {len(lib.loose(include_subfolders=args.all))} still loose"
          + (" — stopped early" if stopped else ""))
    return 0


def run_scan(args, archive):
    lib = Library(args.library)
    loose = lib.loose(include_subfolders=args.all)
    print(f"library: {lib.path}")
    print(f"filed:   {len(lib.entries)} entries, {len(lib.filed())} files")
    print(f"loose:   {len(loose)} files" + (" (root only; --all walks the subfolders)" if not args.all else ""))
    kinds = {}
    for rel in loose:
        kinds[lib.kind_of(rel)] = kinds.get(lib.kind_of(rel), 0) + 1
    if kinds:
        print("by kind: " + ", ".join(f"{k} {n}" for k, n in sorted(kinds.items())))
    for rel in loose:
        stem = os.path.splitext(os.path.basename(rel))[0]
        hints = archive.suggest(stem)
        hint = ("looks like " + ", ".join(f"{l}{' (' + c + ')' if c else ''} {int(s * 100)}%" for l, c, s in hints)) if hints \
            else ("hash-named cut-out, no name" if HASH_NAME.search(stem) else "no match in the archive")
        print(f"  {rel:48} {lib.describe(rel):26} {lib.kind_of(rel):9} {hint}")
    return 0


def run_list(args, archive):
    lib = Library(args.library)
    rows = []
    for key, e in sorted(lib.entries.items()):
        if args.faction and e.get("faction") != args.faction:
            continue
        files = {k: v for k, v in (e.get("files") or {}).items() if not args.kind or k == args.kind}
        if args.kind and not files:
            continue
        rows.append((key, e, files))
    if not rows:
        print("no entries" + (" match" if (args.faction or args.kind) else " yet — run `sort`"))
        return 0
    for key, e, files in rows:
        extra = []
        if e.get("character"):
            extra.append("character " + e["character"])
            sheet = archive.sheet_entry(e["character"])
            if sheet:
                extra.append(f"sheet {sheet.get('kind', '?').upper()} {'L' + str(sheet.get('level')) if sheet.get('kind') == 'pc' else 'CR ' + str(sheet.get('cr'))}"
                             + (f" +{len(sheet.get('versions') or [])} era" if sheet.get("versions") else ""))
        if e.get("version"):
            extra.append("version " + e["version"])
        if e.get("notes"):
            extra.append(e["notes"])
        print(f"{key:28} {e.get('name', ''):26} {e.get('faction', ''):22} " + ", ".join(f"{k}:{v}" for k, v in files.items())
              + (("   · " + " · ".join(extra)) if extra else ""))
    print(f"{len(rows)} entr{'y' if len(rows) == 1 else 'ies'}")
    return 0


def run_edit(args, archive):
    lib = Library(args.library)
    key = args.slug
    e = lib.entries.get(key)
    if not e:
        raise SystemExit(f"no entry {key!r}; `list` shows the keys")
    if args.name:
        key = lib.rename(key, args.name)
        e = lib.entries[key]
    if args.faction:
        lib.refaction(key, slugify(args.faction))
    if args.character is not None:
        if args.character and args.character not in archive.by_id:
            raise SystemExit(f"no character {args.character!r} in characters.json")
        e["character"] = args.character or None
    if args.version is not None:
        version = slugify(args.version).replace("_", "-") if args.version else None
        new_key = e["slug"] + ("--" + version if version else "")
        if new_key != key and new_key in lib.entries:
            raise SystemExit(f"{new_key!r} already exists")
        for kind, rel in list(e["files"].items()):
            new_rel = lib.target(kind, e["faction"], e["slug"], version, os.path.splitext(rel)[1])
            lib._move(rel, new_rel)
            e["files"][kind] = new_rel
        e["version"] = version
        if new_key != key:
            lib.entries[new_key] = lib.entries.pop(key)
            key = new_key
    if args.notes is not None:
        e["notes"] = args.notes
    lib.save()
    print(f"{key}: " + json.dumps(lib.entries[key], ensure_ascii=False))
    return 0


def run_rename(args, archive):
    lib = Library(args.library)
    key = lib.rename(args.slug, args.new_name)
    lib.save()
    print(f"{args.slug} → {key}: " + ", ".join(lib.entries[key]["files"].values()))
    return 0


def run_delete(args, archive):
    lib = Library(args.library)
    key, _, kind = args.slug.partition("/")
    gone = lib.delete(key, kind or None, forever=args.forever)
    lib.save()
    for rel in gone:
        print(("deleted " if args.forever else f"→ {TRASH}/") + rel)
    return 0


# ----------------------------------------------------------------- linking

def _link_dir(src, dst, copy=False, log=None):
    """Directory link: symlink → Windows junction → copy. Returns the method."""
    log = log if log is not None else []
    if os.path.lexists(dst):
        if os.path.islink(dst) or (platform.system() == "Windows" and os.path.isdir(dst) and not os.listdir(dst)):
            try:
                os.remove(dst) if os.path.islink(dst) else os.rmdir(dst)
            except OSError:
                pass
        else:
            return "exists"
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    if not copy:
        try:
            os.symlink(src, dst, target_is_directory=True)
            return "symlink"
        except (OSError, NotImplementedError) as exc:
            log.append(f"symlink refused ({exc}); trying a junction / copy")
        if platform.system() == "Windows":
            try:
                subprocess.run(["cmd", "/c", "mklink", "/J", dst, src], check=True,
                               stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                return "junction"
            except (OSError, subprocess.CalledProcessError) as exc:
                log.append(f"junction refused ({exc}); copying")
    shutil.copytree(src, dst, dirs_exist_ok=True)
    return "copy"


def _link_file(src, dst, copy=False, log=None):
    """File link: symlink → hard link → copy. Returns the method."""
    log = log if log is not None else []
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    if os.path.lexists(dst):
        os.remove(dst)
    if not copy:
        try:
            os.symlink(src, dst)
            return "symlink"
        except (OSError, NotImplementedError):
            pass
        try:
            os.link(src, dst)
            return "hardlink"
        except (OSError, NotImplementedError):
            pass
    shutil.copy2(src, dst)
    return "copy"


def run_link(args, archive):
    data = os.path.abspath(args.data or default_data_dir())
    if not os.path.isdir(data):
        raise SystemExit(f"Foundry Data folder not found: {data} (pass --data)")
    base = os.path.join(data, DATA_SUB)
    links_path = os.path.join(base, LINKS_FILE)
    created = read_json(links_path) if os.path.isfile(links_path) else {"links": []}
    done = {}
    log = []

    def record(kind, rel, method, target):
        done[rel] = {"kind": kind, "method": method, "target": target}
        line = f"  {method:8} {os.path.join(DATA_SUB, rel)}  ←  {target}"
        print(line)

    # 1. the repo's actor trees: npc/waluipedia/actors → Reputation-Matrix2/actors
    actors_src = os.path.join(archive.root, "Reputation-Matrix2", "actors")
    if os.path.isdir(actors_src) and not args.no_actors:
        dst = os.path.join(base, "actors")
        method = "dry-run" if args.dry_run else _link_dir(actors_src, dst, copy=args.copy, log=log)
        record("dir", "actors", method, actors_src)
    # 2. the art library
    if args.library:
        lib = Library(args.library)
        for key, e in sorted(lib.entries.items()):
            for kind, rel in (e.get("files") or {}).items():
                src = os.path.join(lib.path, rel)
                if not os.path.isfile(src):
                    log.append(f"missing on disk, skipped: {rel}")
                    continue
                ext = os.path.splitext(rel)[1].lower()
                if kind == "audio":
                    out_rel = os.path.join("audio", e.get("faction", UNAFFILIATED), key + ext)
                else:
                    out_rel = os.path.join("art", e.get("faction", UNAFFILIATED), key, kind.rstrip("s") + ext)
                dst = os.path.join(base, out_rel)
                method = "dry-run" if args.dry_run else _link_file(src, dst, copy=args.copy, log=log)
                record("file", out_rel.replace(os.sep, "/"), method, src)
    for line in log:
        print("  note: " + line)
    if not args.dry_run:
        keep = [l for l in created.get("links") or [] if l.get("rel") not in done]
        created = {"format": FORMAT, "data": data, "links": keep + [dict(rel=r, **v) for r, v in done.items()]}
        write_json(links_path, created)
        print(f"{len(done)} link(s) under {base}; recorded in {LINKS_FILE} (unlink removes exactly these)")
    else:
        print(f"dry run: {len(done)} link(s) would be made under {base}")
    if args.library and done:
        print("Foundry paths: npc/waluipedia/art/<faction>/<slug>/portrait.png · token.webp · icon.png · bg.jpg · ai.png")
    return 0


def run_unlink(args, archive):
    data = os.path.abspath(args.data or default_data_dir())
    base = os.path.join(data, DATA_SUB)
    links_path = os.path.join(base, LINKS_FILE)
    if not os.path.isfile(links_path):
        print(f"nothing recorded at {links_path}")
        return 0
    created = read_json(links_path)
    removed = 0
    for l in created.get("links") or []:
        p = os.path.join(base, l["rel"])
        if not os.path.lexists(p):
            continue
        if l.get("method") == "copy" and l.get("kind") == "dir":
            shutil.rmtree(p)
        elif os.path.isdir(p) and not os.path.islink(p):
            try:
                os.rmdir(p)          # a junction removes like an empty directory
            except OSError:
                shutil.rmtree(p)
        else:
            os.remove(p)
        removed += 1
    os.remove(links_path)
    for sub in ("art", "audio"):
        for b, _dirs, _files in os.walk(os.path.join(base, sub), topdown=False):
            try:
                os.rmdir(b)          # only the empty ones go
            except OSError:
                pass
    print(f"removed {removed} link(s) from {base}")
    return 0


# ---------------------------------------------------------------- versions

def run_versions(args, archive):
    cid = args.character
    e = archive.sheet_entry(cid)
    if not e:
        raise SystemExit(f"no sheet for {cid!r} in data/sheets.json (is it a character id?)")
    stat = f"PC L{e.get('level')} {' / '.join(e.get('classes') or [])}" if e.get("kind") == "pc" else f"NPC CR {e.get('cr')}"
    print(f"{e.get('name')} ({cid}) — {e.get('source')} · {stat} · ledger L{(e.get('ledger') or {}).get('level')}")
    print(f"  now        {e.get('file')}   #/sheets/{cid}")
    for v in e.get("versions") or []:
        print(f"  {v.get('version'):10} {v.get('file')}   #/sheets/{cid}/{v.get('version')}   {v.get('label')} — "
              f"L{v.get('level')} {' / '.join(v.get('classes') or [])}")
    for a in e.get("alternates") or []:
        print(f"  also       {a.get('file')}   ({a.get('source')}, {a.get('kind')})")
    if args.stub:
        print(era_stub(archive, cid, args.stub))
    return 0


def era_stub(archive, cid, version):
    """A ready-to-paste ERAS entry for tools/build-character-sheets.py."""
    e = archive.sheet_entry(cid) or {}
    led = (archive.ledger.get(cid) or {}).get("level")
    era = version.upper().replace("-BF", " BF").replace("-", " ")
    cls = (e.get("classes") or ["Fighter 1"])[0].rsplit(" ", 1)[0]
    level = min(led or 1, e.get("level") or led or 1)
    ab = e.get("abilities") or {}
    sc = tuple(ab.get(k, 10) for k in ("str", "dex", "con", "int", "wis", "cha"))
    species = e.get("species") or "Human"
    lines = [
        "",
        f"# paste into ERAS in tools/build-character-sheets.py, under \"{cid}\" (level must stay <= the ledger's {led}):",
        f"    \"{cid}\": [dict(",
        f"        version=\"{version}\", era=\"{era}\", label=\"{e.get('name', cid)} in {era}\",",
        "        when=\"One sentence placing this self in its year.\",",
        f"        level={level}, role=\"{e.get('role') or 'hero'}\", cr={max(1, min(level, e.get('cr') or level))}, align=\"Neutral\",",
        f"        sc={sc}, saves=(\"dex\", \"con\"), skills={{\"prc\": 1}}, walk=30, ac={e.get('ac') or 12},",
        f"        pc=(\"{cls}\", None, 8, \"none\", \"\", \"{species}\", \"Folk Hero\"),",
        "        weapons=[_w(\"Weapon\", \"fists\", \"<p>…</p>\", q=[\"a phrase that is in the article\"])],",
        "        features=[_f(\"Feature\", \"strike\", \"<p>…</p>\", q=[\"another phrase from the article\"])],",
        "    )],",
        "# then: python3 tools/build-character-sheets.py && python3 tools/check-sheets.py",
    ]
    return "\n".join(lines)


def run_adopt(args, archive):
    lib = Library(args.library)
    e = lib.entries.get(args.slug)
    if not e:
        raise SystemExit(f"no entry {args.slug!r}")
    cid = args.as_character or e.get("character")
    if not cid:
        raise SystemExit("no character id on this entry — pass --as <character-id>")
    if cid not in archive.by_id:
        raise SystemExit(f"no character {cid!r} in characters.json")
    rel = (e.get("files") or {}).get("portraits") or (e.get("files") or {}).get("tokens")
    if not rel:
        raise SystemExit(f"{args.slug} has no portrait or token file")
    portraits = args.portraits_dir or PORTRAITS
    ext = os.path.splitext(rel)[1].lower()
    dst = os.path.join(portraits, cid + ext)
    existing = [f for f in os.listdir(portraits) if os.path.splitext(f)[0] == cid] if os.path.isdir(portraits) else []
    if existing and not args.force:
        raise SystemExit(f"{cid} already has a portrait ({', '.join(existing)}); --force replaces it")
    os.makedirs(portraits, exist_ok=True)
    for f in existing:
        os.remove(os.path.join(portraits, f))
    shutil.copy2(os.path.join(lib.path, rel), dst)
    e["character"] = cid
    lib.save()
    print(f"portrait for {cid}: {os.path.relpath(dst, archive.root)}")
    print("next: python3 tools/build-character-sheets.py   (the generated sheet picks the portrait up)")
    return 0


def run_changes(args, archive):
    lib = Library(args.library)
    changes = []
    for key, e in sorted(lib.entries.items()):
        files = e.get("files") or {}
        if not files or "audio" in files and len(files) == 1:
            continue
        cid = e.get("character")
        actor_name = (archive.by_id.get(cid) or {}).get("name") if cid else None
        actor_name = actor_name or e.get("name")
        faction = e.get("faction", UNAFFILIATED)
        art = lambda kind: f"npc/waluipedia/art/{faction}/{key}/{kind.rstrip('s')}{os.path.splitext(files[kind])[1].lower()}"
        setf = {}
        if "portraits" in files:
            setf["img"] = art("portraits")
        token = "tokens" if "tokens" in files else ("portraits" if "portraits" in files else None)
        if token:
            setf["prototypeToken.texture.src"] = art(token)
        if not setf:
            continue
        changes.append({"match": {"name": actor_name + (f" ({e['version'].upper().replace('-BF', ' BF')})" if e.get("version") else "")},
                        "set": setf, "_studio": key})
    write_json(args.out, {"generator": "tools/foundry-studio.py changes", "changes": changes})
    print(f"{len(changes)} change(s) → {args.out}")
    print("apply: python3 tools/foundry-bridge.py apply " + args.out + " <actor dir> --write   (after `link`, so the paths exist)")
    return 0


# -------------------------------------------------------------------- main

def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--repo", default=ROOT, help=argparse.SUPPRESS)
    sub = ap.add_subparsers(dest="cmd", required=True)

    p = sub.add_parser("scan", help="inventory the loose files and what the archive thinks they are")
    p.add_argument("library")
    p.add_argument("--all", action="store_true", help="also look inside the subfolders")
    p.set_defaults(fn=run_scan)

    p = sub.add_parser("sort", help="name, kind, faction, version — file each loose file")
    p.add_argument("library")
    p.add_argument("--answers", help="JSON {file: {name, kind, faction, version, character, notes}} instead of prompts")
    p.add_argument("--auto", action="store_true", help="take every confident suggestion without asking")
    p.add_argument("--all", action="store_true", help="also file what sits in the subfolders")
    p.set_defaults(fn=run_sort)

    p = sub.add_parser("list", help="the manifest")
    p.add_argument("library")
    p.add_argument("--faction")
    p.add_argument("--kind", choices=KINDS)
    p.set_defaults(fn=run_list)

    p = sub.add_parser("edit", help="change an entry's name / faction / character / version / notes")
    p.add_argument("library")
    p.add_argument("slug")
    p.add_argument("--name")
    p.add_argument("--faction")
    p.add_argument("--character")
    p.add_argument("--version")
    p.add_argument("--notes")
    p.set_defaults(fn=run_edit)

    p = sub.add_parser("rename", help="rename an entry (its files follow)")
    p.add_argument("library")
    p.add_argument("slug")
    p.add_argument("new_name")
    p.set_defaults(fn=run_rename)

    p = sub.add_parser("delete", help="delete an entry or one of its files (to _trash unless --forever)")
    p.add_argument("library")
    p.add_argument("slug", help="<slug> or <slug>/<kind>")
    p.add_argument("--forever", action="store_true")
    p.set_defaults(fn=run_delete)

    p = sub.add_parser("link", help="link the library and the repo's actor trees into Foundry's Data folder")
    p.add_argument("library", nargs="?")
    p.add_argument("--data", help="Foundry Data folder (default: the platform's)")
    p.add_argument("--copy", action="store_true", help="copy instead of linking")
    p.add_argument("--no-actors", action="store_true", help="only the art, not Reputation-Matrix2/actors")
    p.add_argument("--dry-run", action="store_true")
    p.set_defaults(fn=run_link)

    p = sub.add_parser("unlink", help="remove exactly what link created")
    p.add_argument("--data")
    p.set_defaults(fn=run_unlink)

    p = sub.add_parser("versions", help="a character's sheets: now, the past selves, the other files")
    p.add_argument("character")
    p.add_argument("--stub", metavar="VERSION", help="print a ready-to-paste ERAS entry for a new past self")
    p.set_defaults(fn=run_versions)

    p = sub.add_parser("adopt", help="make an entry's portrait the character's portrait in the repo")
    p.add_argument("library")
    p.add_argument("slug")
    p.add_argument("--as", dest="as_character")
    p.add_argument("--force", action="store_true")
    p.add_argument("--portraits-dir", help=argparse.SUPPRESS)
    p.set_defaults(fn=run_adopt)

    p = sub.add_parser("changes", help="write a foundry-bridge `apply` file pointing actors at the linked art")
    p.add_argument("library")
    p.add_argument("--out", required=True)
    p.set_defaults(fn=run_changes)

    args = ap.parse_args(argv)
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, "reconfigure"):
            stream.reconfigure(errors="replace")      # cp1252 consoles survive the arrows
    archive = Archive(args.repo)
    return args.fn(args, archive)


if __name__ == "__main__":
    sys.exit(main())
