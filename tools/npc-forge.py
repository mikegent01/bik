#!/usr/bin/env python3
"""NPC Forge — pick a faction, get a packet: rosters → renders → token plates → Foundry actors.

The Forge is the loop around `tools/build-forge-packets.py`. A roster
(`Reputation-Matrix2/data/forge/<packet>.json`) says who the NPCs are and what
they look like; the Forge renders each one on the local ComfyUI
(Qwen-Image-2.1, text-to-image, the house recipe on a flat magenta field),
cuts the render into a 512-px token plate, drops both into the prepared
folders (`npc-forge/<packet>/renders/`, `portraits/<packet>/`) and rebuilds
the packet's actors — ready to commit, to sync into Foundry, or to hand over.
Without a GPU it still does everything but the drawing: it drafts a roster
for any faction, writes the render jobs as a hand-off brief (prompts, seeds,
sizes, file names) for Claude or any image model, and cuts whatever renders
land in the folder.

    python3 tools/npc-forge.py                         # the page (http://127.0.0.1:8768/)
    python3 tools/npc-forge.py --list                  # rosters and their art state
    python3 tools/npc-forge.py draft <packet> --faction koopa_troop --name "Koopa Troop" --count 8
    python3 tools/npc-forge.py draft <packet> --name "X" --input rows.json   # the suite builds its own roster
    python3 tools/npc-forge.py collect <packet> --from-site [--match TEXT]   # grow it from the website's articles
    python3 tools/npc-forge.py collect <packet> --input rows.json [--tier 1] [--framing fullbody|bust|head]
    python3 tools/npc-forge.py ingest <packet> --dir FOLDER [--watch]  # auto-collect the AI's output, no drag & drop
    python3 tools/npc-forge.py prompt <packet> [ids]   # the recipe any image model asks for
    python3 tools/npc-forge.py run <packet> [--batch 8] [--steps render,cut,build]
    python3 tools/npc-forge.py cut <packet>            # cut the renders in the folder (no Comfy needed)
    python3 tools/npc-forge.py review <packet> --ids id --status accepted
    python3 tools/npc-forge.py replace <packet> --ids id [--website fullBody] [--batch 8]
    python3 tools/npc-forge.py handoff <packet>        # write npc-forge/<packet>/handoff.md + jobs.jsonl

Renders go through ComfyUI (COMFY_URL, else 127.0.0.1 ports 8188, 8000, 8189,
8190); the page can start Comfy Desktop. Pillow + numpy are needed for the cut.
"""

import argparse
import datetime as dt
import importlib.util
import json
from html import unescape
import os
import re
import shutil
import subprocess
import sys
import threading
import time
import urllib.parse
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
RM = os.path.join(ROOT, "Reputation-Matrix2")
HTML = os.path.join(HERE, "npc-forge.html")
FACTIONS = os.path.join(RM, "data", "factions.json")
FOLDER_SCHEME = os.path.join(RM, "actors", "folders.json")
PORT = 8768
SLUG = re.compile(r"[^a-z0-9]+")
_LOCAL = os.environ.get("LOCALAPPDATA") or ""
COMFY_DESKTOP_EXE = (os.path.join(_LOCAL, "Programs", "Comfy Desktop", "Comfy Desktop.exe"),
                     os.path.join(_LOCAL, "Programs", "@comfyorgcomfyui-electron", "ComfyUI.exe"),
                     os.path.join(_LOCAL, "Programs", "ComfyUI", "ComfyUI.exe"))

# Draft statblocks by tier — enough to import and fight with while the real
# numbers are written. (abilities, AC, HP, HP formula, attack dice, attacks)
TIERS = {
    "0.5": {"cr": 0.5, "abilities": [12, 12, 12, 8, 10, 8], "ac": 13, "hp": 16, "hp_formula": "3d8+3", "dmg": [1, 6], "attacks": 1},
    "1": {"cr": 1, "abilities": [14, 12, 14, 8, 10, 8], "ac": 13, "hp": 27, "hp_formula": "5d8+5", "dmg": [1, 8], "attacks": 1},
    "2": {"cr": 2, "abilities": [15, 12, 14, 8, 10, 8], "ac": 14, "hp": 39, "hp_formula": "6d8+12", "dmg": [1, 8], "attacks": 2},
    "3": {"cr": 3, "abilities": [16, 12, 15, 8, 10, 8], "ac": 14, "hp": 52, "hp_formula": "8d8+16", "dmg": [1, 10], "attacks": 2},
    "4": {"cr": 4, "abilities": [17, 12, 16, 8, 11, 9], "ac": 15, "hp": 68, "hp_formula": "8d10+24", "dmg": [2, 6], "attacks": 2},
    "5": {"cr": 5, "abilities": [18, 13, 16, 10, 12, 12], "ac": 15, "hp": 90, "hp_formula": "12d8+36", "dmg": [2, 8], "attacks": 2},
    "7": {"cr": 7, "abilities": [19, 14, 18, 12, 13, 14], "ac": 16, "hp": 120, "hp_formula": "16d8+48", "dmg": [2, 10], "attacks": 2},
}
DEFAULT_PLAN = ["0.5", "0.5", "1", "2", "2", "3", "4", "5"]      # eight draft entries: a minion pair up to a lieutenant


def _load_module(name, rel):
    spec = importlib.util.spec_from_file_location(name, os.path.join(ROOT, rel))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def slugify(text):
    return SLUG.sub("-", str(text).lower()).strip("-") or "npc"


def read_json(path, default=None):
    try:
        with open(path, encoding="utf-8") as fh:
            return json.load(fh)
    except (OSError, ValueError):
        return default


def write_json(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as fh:
        json.dump(data, fh, indent=2, ensure_ascii=False)
        fh.write("\n")
    os.replace(tmp, path)


def rel(path):
    return os.path.relpath(path, ROOT).replace(os.sep, "/")


def _normalise_path(value):
    return str(value or "").replace("\\", "/").lstrip("/")


def _safe_repo_path(path, root=ROOT):
    """Resolve a path from a JSON record without allowing it to leave root."""
    if not isinstance(path, str) or not path:
        return None
    candidate = os.path.realpath(os.path.join(root, _normalise_path(path)))
    base = os.path.realpath(root)
    try:
        if os.path.commonpath((base, candidate)) != base:
            return None
    except ValueError:
        return None
    return candidate


def _article_records(path):
    data = read_json(path, []) or []
    if isinstance(data, dict):
        data = data.get("characters") or data.get("articles") or data
    return [row for row in data if isinstance(row, dict)] if isinstance(data, list) else []


class Forge:
    def __init__(self, url=None):
        self.bfp = _load_module("bfp", "tools/build-forge-packets.py")
        self.mtp = _load_module("mtp", "tools/make-token-plates.py")
        self.url = url or None
        self.comfy = None
        self.engine = None
        self.models = dict(self.mtp.QWEN21_MODELS)
        self.choices = {}
        self.lock = threading.Lock()
        self.jobs = {}
        self.current = None
        self.stop_flag = False

    # -------------------------------------------------------------- comfy --
    def connect(self, url=None):
        self.url = url or self.url
        comfy = self.mtp.Comfy.discover(self.url)
        if not comfy.alive():
            self.comfy, self.engine = None, None
            return self.connection()
        self.comfy, self.url, self.engine = comfy, comfy.url, comfy.engine()
        if self.engine == "qwen21":
            self.choices = {"unet": comfy.choices("UNETLoader", "unet_name"), "clip": comfy.choices("CLIPLoader", "clip_name"),
                            "vae": comfy.choices("VAELoader", "vae_name")}
            for k, want in self.mtp.QWEN21_MODELS.items():
                have = self.choices.get(k) or []
                if want in have or not have:
                    self.models[k] = want
                elif self.models.get(k) not in have:
                    self.models[k] = have[0]
        return self.connection()

    def connection(self):
        return {"connected": self.comfy is not None, "url": self.url or "", "engine": self.engine,
                "can_render": self.engine == "qwen21", "models": self.models, "choices": self.choices,
                "ports": list(self.mtp.COMFY_PORTS)}

    def start_comfy(self):
        for exe in COMFY_DESKTOP_EXE:
            if exe and os.path.isfile(exe):
                try:
                    subprocess.Popen([exe], close_fds=True)
                    return {"started": True, "exe": exe}
                except OSError as exc:
                    return {"started": False, "error": str(exc)}
        return {"started": False, "error": "Comfy Desktop not found — open it by hand, launch your instance, then Connect"}

    def t2i_workflow(self, width, height, steps=None, cfg=None, resolution=None):
        """The builtin Qwen-Image-2.1 graph as text-to-image at the roster's
        canvas: no LoadImage, the encoder's image slots gone, an
        EmptyLatentImage feeding the sampler (what tools/make-token-plates.py
        does for a character without a reference)."""
        m = self.mtp
        wf = m.workflow_tune(m.BUILTIN_QWEN21, steps=steps, cfg=cfg, resolution=resolution, models=self.models, engine="qwen21",
                             cache=self.comfy.has_node("QwenImage21Cache"))
        wf["456"] = {"class_type": "EmptyLatentImage", "inputs": {"width": int(width), "height": int(height), "batch_size": 1}}
        for k in [k for k, v in wf.items() if v.get("class_type") == "LoadImage"]:
            del wf[k]
        for v in wf.values():
            if v.get("class_type") == "TextEncodeQwenImage21":
                for key in [k for k in v["inputs"] if k.startswith("images.")]:
                    del v["inputs"][key]
            if v.get("class_type") in m.SAMPLERS:
                v["inputs"]["latent_image"] = ["456", 0]
        return wf

    # ------------------------------------------------------------ rosters --
    def rosters(self):
        out = []
        for path in self.bfp.roster_paths():
            try:
                r = self.bfp.load_roster(path)
            except ValueError as exc:
                out.append({"packet": os.path.basename(path), "error": str(exc)})
                continue
            out.append(self.roster_view(r))
        return out

    def roster_view(self, r):
        actors_dir, _, _ = self.bfp.packet_paths(r)
        prefix = r.get("file_prefix") or f"fvtt-Actor-{r['packet']}-"
        review = (self.review_state(r["packet"]).get("entries") or {}) if r.get("packet") else {}
        entries = []
        for e in r.get("entries") or []:
            render, plate = self.bfp.render_file(r, e), self.bfp.plate_file(r, e)
            source_exists = False
            if e.get("source_actor"):
                try:
                    source_exists = os.path.isfile(self.bfp.source_actor_path(e))
                except (OSError, ValueError):
                    source_exists = False
            source_img = e.get("source_img")
            if source_img and not os.path.isfile(os.path.join(ROOT, *source_img.split("/"))):
                source_img = None
            entries.append({
                "id": e["id"], "name": e["name"], "folder": e.get("folder"), "tier": e.get("tier"), "role": e.get("role"),
                "cr": e.get("cr"), "type": e.get("type"), "size": e.get("size"), "seed": e.get("seed"), "look": e.get("look") or "",
                "prompt": self.bfp.prompt_for(r, e), "token_size": e.get("token_size") or 1,
                "render": rel(render) if os.path.exists(render) else None,
                "plate": rel(plate) if os.path.exists(plate) else None,
                "source_img": source_img, "source_has_img": bool(e.get("source_has_img")),
                "site": e.get("site"), "review": review.get(e["id"], {}).get("status", "pending"),
                "review_notes": review.get(e["id"], {}).get("notes", ""),
                "actor": os.path.exists(os.path.join(actors_dir, f"{prefix}{e['id']}.json")) or source_exists,
            })
        return {"packet": r["packet"], "name": r.get("name"), "title": r.get("title"), "faction": r.get("faction"), "group": r.get("group"),
                "foundry_source": r.get("foundry_source"),
                "color": r.get("color"), "subfolders": r.get("subfolders") or {}, "render_size": r.get("render_size") or [1408, 768],
                "plate_size": r.get("plate_size") or 512, "style": r.get("style"), "framing": r.get("framing"), "negative": r.get("negative"),
                "path": rel(os.path.join(self.bfp.ROSTERS, r["packet"] + ".json")),
                "renders_dir": rel(self.bfp.packet_paths(r)[2]), "portraits_dir": rel(self.bfp.packet_paths(r)[1]), "actors_dir": rel(actors_dir),
                "entries": entries,
                "counts": {"entries": len(entries), "rendered": sum(1 for e in entries if e["render"]),
                           "plates": sum(1 for e in entries if e["plate"]), "actors": sum(1 for e in entries if e["actor"])}}

    def factions(self):
        scheme = read_json(FOLDER_SCHEME, {}) or {}
        groups = scheme.get("groups") or {}
        by_faction = {v.get("faction"): g for g, v in groups.items() if isinstance(v, dict) and v.get("faction")}
        out = []
        for f in read_json(FACTIONS, []) or []:
            if not isinstance(f, dict) or not f.get("id"):
                continue
            group = by_faction.get(f["id"])
            if not group:
                words = {w for w in re.split(r"\W+", f.get("name", "").lower()) if len(w) > 3}
                for g in groups:
                    if words & {w for w in re.split(r"\W+", g.lower()) if len(w) > 3}:
                        group = g
                        break
            out.append({"id": f["id"], "name": f.get("name"), "type": f.get("type"), "status": f.get("status"), "leader": f.get("leader"),
                        "summary": f.get("summary"), "group": group, "color": (groups.get(group) or {}).get("color") if group else None})
        return {"factions": sorted(out, key=lambda x: x["name"] or ""), "groups": {g: v.get("color") for g, v in groups.items() if isinstance(v, dict)},
                "rosters": [os.path.splitext(os.path.basename(p))[0] for p in self.bfp.roster_paths()]}

    def _foundry_world(self, world=None):
        scheme = self.bfp.P955.load_folder_scheme()
        name = str(world or (scheme.get("players") or {}).get("world") or "midlands").strip()
        if not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9._-]*", name):
            raise RuntimeError(f"invalid Foundry world name: {name!r}")
        return name, scheme

    def _foundry_actor_rows(self, group=None, world=None):
        """NPC documents in the live Foundry world mirror, grouped by their
        explicit folderPath flag (falling back to the mirrored directories)."""
        world, scheme = self._foundry_world(world)
        world_dir = os.path.join(self.bfp.ACTORS_ROOT, "worlds", world)
        if not os.path.isdir(world_dir):
            return world, scheme, []
        player_folder = (scheme.get("players") or {}).get("folder") or "Players"
        rows, seen = [], set()
        for base, dirs, files in os.walk(world_dir):
            dirs.sort(key=str.casefold)
            for filename in sorted(files, key=str.casefold):
                if not filename.lower().endswith(".json"):
                    continue
                path = os.path.join(base, filename)
                doc = read_json(path)
                if not isinstance(doc, dict) or doc.get("type") != "npc":
                    continue
                actor_id = str(doc.get("_id") or "")
                if not self.bfp.FOUNDRY_ID.match(actor_id) or actor_id in seen:
                    continue
                flag = ((doc.get("flags") or {}).get(self.bfp.MODULE_ID) or {}).get("folderPath")
                rel_parts = os.path.relpath(path, world_dir).split(os.sep)[:-1]
                folder_path = [str(part) for part in flag] if isinstance(flag, list) and flag else rel_parts
                if not folder_path or folder_path[0] == player_folder:
                    continue
                if group is not None and folder_path[0] != group:
                    continue
                seen.add(actor_id)
                rows.append({"doc": doc, "path": path, "folder_path": folder_path,
                             "relative_path": os.path.relpath(path, self.bfp.ACTORS_ROOT).replace(os.sep, "/")})
        rows.sort(key=lambda row: (row["folder_path"][0].casefold(), "/".join(row["folder_path"]).casefold(),
                                   str(row["doc"].get("name") or "").casefold(), row["doc"].get("_id") or ""))
        return world, scheme, rows

    def foundry_groups(self, world=None):
        """Groups and NPC counts discovered in actors/worlds/<live world>.
        This is read-only; the UI imports a group only after an explicit click.

        Keep this world-only view stable: it is the safe source for importing a
        live Foundry folder.  ``asset_catalog`` below is deliberately broader
        and includes committed packets and website articles too.
        """
        world, _scheme, rows = self._foundry_actor_rows(world=world)
        groups = {}
        for row in rows:
            name = row["folder_path"][0]
            info = groups.setdefault(name, {"name": name, "count": 0, "folders": set()})
            info["count"] += 1
            info["folders"].add(" / ".join(row["folder_path"][1:]) or "(group root)")
        return {"world": world, "path": rel(os.path.join(self.bfp.ACTORS_ROOT, "worlds", world)),
                "groups": [{"name": name, "count": info["count"], "folders": sorted(info["folders"], key=str.casefold),
                            "packet": "foundry-" + slugify(name)}
                           for name, info in sorted(groups.items(), key=lambda item: item[0].casefold())]}

    def _article_index(self):
        """Website character records indexed by id and a conservative name key."""
        records = _article_records(os.path.join(self.bfp.RM, "data", "characters.json"))
        by_id, by_name = {}, {}
        for article in records:
            aid = article.get("id")
            if aid:
                by_id[aid] = article
            name = re.sub(r"[^a-z0-9]+", " ", str(article.get("name") or "").lower()).strip()
            if name:
                by_name.setdefault(name, article)
        return records, by_id, by_name

    def _group_for_article(self, article, scheme):
        """Map an article's affiliation to the same group names as Foundry."""
        if not article:
            return None
        groups = scheme.get("groups") or {}
        hay = " ".join(str(article.get(k) or "") for k in ("affiliation", "title", "name")).lower()
        for group, info in groups.items():
            faction = str((info or {}).get("faction") or "").lower().replace("_", " ")
            words = [w for w in re.split(r"[^a-z0-9]+", group.lower()) if len(w) > 3]
            if faction and faction in hay:
                return group
            if words and sum(w in hay for w in words) >= max(1, min(2, len(words))):
                return group
        return None

    def _repo_actor_rows(self, world=None):
        """Read every actor image source the HTML server can see.

        The live world is first, followed by committed packet/root actors. A
        repeated Foundry id is kept only once, so the catalog represents the
        actor a GM will actually edit rather than a pile of historical copies.
        """
        world, scheme, live = self._foundry_actor_rows(world=world)
        rows = list(live)
        seen = {row["doc"].get("_id") for row in rows}
        actors_root = os.path.realpath(self.bfp.ACTORS_ROOT)
        for base, dirs, files in os.walk(actors_root):
            dirs.sort(key=str.casefold)
            # World rows were already added and changes are not actor packets.
            if os.path.realpath(base).startswith(os.path.realpath(os.path.join(actors_root, "worlds"))):
                continue
            for filename in sorted(files, key=str.casefold):
                if not filename.endswith(".json") or filename in {"folders.json", "import.json"} or filename.startswith("original-"):
                    continue
                path = os.path.join(base, filename)
                doc = read_json(path)
                if not isinstance(doc, dict) or not doc.get("_id") or not doc.get("name"):
                    continue
                aid = doc.get("_id")
                if aid in seen or not self.bfp.FOUNDRY_ID.match(str(aid)):
                    continue
                flag = ((doc.get("flags") or {}).get(self.bfp.MODULE_ID) or {}).get("folderPath")
                folder_path = [str(part) for part in flag] if isinstance(flag, list) and flag else []
                rows.append({"doc": doc, "path": path,
                             "folder_path": folder_path,
                             "relative_path": os.path.relpath(path, actors_root).replace(os.sep, "/")})
                seen.add(aid)
        return world, scheme, rows

    def asset_catalog(self, world=None, group=None, match=None):
        """Return a reviewable, website-to-Foundry asset inventory.

        Unlike the old folder importer this deliberately includes actors in
        committed packets, root actors, live-world mirrors, and every
        ``characters.json`` article. It is read-only: review/replace is an
        explicit second action from the Forge page.
        """
        world, scheme, actor_rows = self._repo_actor_rows(world=world)
        articles, by_id, by_name = self._article_index()
        used_articles = set()
        assets = []
        for row in actor_rows:
            doc = row["doc"]
            flags = doc.get("flags") or {}
            sheet_flags = (flags.get(self.bfp.SHEETS_FLAG) or {})
            site_flags = (flags.get("bik") or {})
            site_id = sheet_flags.get("characterId") or site_flags.get("characterId")
            name_key = re.sub(r"[^a-z0-9]+", " ", str(doc.get("name") or "").lower()).strip()
            article = by_id.get(site_id) or by_name.get(name_key)
            if article:
                site_id = article.get("id")
                used_articles.add(site_id)
            folder_path = row.get("folder_path") or []
            group_name = folder_path[0] if folder_path else self._group_for_article(article, scheme)
            if group and group_name != group:
                continue
            if match and match.lower() not in (str(doc.get("name") or "") + " " + str(site_id or "")).lower():
                continue
            image = doc.get("img")
            token = ((doc.get("prototypeToken") or {}).get("texture") or {}).get("src")
            article_image = (article or {}).get("image")
            article_full = (article or {}).get("fullBody")
            assets.append({
                "kind": "actor", "actor_id": doc.get("_id"), "name": doc.get("name"), "type": doc.get("type"),
                "folder_path": folder_path, "group": group_name or "Unfiled", "actor_path": rel(row["path"]),
                "source": "live-world" if "/worlds/" in rel(row["path"]) else "repo",
                "site": site_id, "site_name": (article or {}).get("name"),
                "current_image": image, "current_token": token,
                "current_image_exists": bool(self._foundry_image(image)), "current_token_exists": bool(self._foundry_image(token)),
                "website_image": article_image, "website_fullbody": article_full,
                "website_image_exists": bool(_safe_repo_path(article_image, self.bfp.RM) and os.path.isfile(_safe_repo_path(article_image, self.bfp.RM))),
                "website_fullbody_exists": bool(_safe_repo_path(article_full, self.bfp.RM) and os.path.isfile(_safe_repo_path(article_full, self.bfp.RM))),
                "needs_fullbody": not bool(article_full and _safe_repo_path(article_full, self.bfp.RM) and os.path.isfile(_safe_repo_path(article_full, self.bfp.RM))),
            })
        # Articles without a Foundry actor are still useful roster candidates;
        # exposing them here makes missing art visible rather than silently
        # dropping them from the review queue.
        for article in articles:
            aid = article.get("id")
            if not aid or aid in used_articles:
                continue
            if group and self._group_for_article(article, scheme) != group:
                continue
            if match and match.lower() not in (str(article.get("name") or "") + " " + aid).lower():
                continue
            image, full = article.get("image"), article.get("fullBody")
            ip = _safe_repo_path(image, self.bfp.RM)
            fp = _safe_repo_path(full, self.bfp.RM)
            assets.append({"kind": "website", "actor_id": None, "name": article.get("name") or aid, "type": "article",
                           "folder_path": [], "group": self._group_for_article(article, scheme) or "Unfiled", "actor_path": None,
                           "source": "website", "site": aid, "site_name": article.get("name"),
                           "current_image": None, "current_token": None, "current_image_exists": False, "current_token_exists": False,
                           "website_image": image, "website_fullbody": full, "website_image_exists": bool(ip and os.path.isfile(ip)),
                           "website_fullbody_exists": bool(fp and os.path.isfile(fp)), "needs_fullbody": not bool(fp and os.path.isfile(fp))})
        assets.sort(key=lambda item: (str(item.get("group") or "").casefold(), str(item.get("name") or "").casefold()))
        groups = {}
        for item in assets:
            info = groups.setdefault(item["group"], {"name": item["group"], "count": 0, "missing": 0})
            info["count"] += 1
            info["missing"] += int(item["needs_fullbody"])
        return {"world": world, "path": rel(os.path.join(self.bfp.ACTORS_ROOT, "worlds", world)),
                "groups": sorted(groups.values(), key=lambda item: item["name"].casefold()),
                "assets": assets, "counts": {"assets": len(assets), "missing_fullbody": sum(int(a["needs_fullbody"]) for a in assets)}}

    def _foundry_image(self, image):
        """Return a repo-relative image path when a Foundry image is in this
        checkout; Foundry's built-in and external paths stay untouched."""
        if not isinstance(image, str) or not image or image.startswith(("http://", "https://", "data:")):
            return None
        image = image.replace("\\", "/").lstrip("/")
        rm_root = os.path.realpath(self.bfp.RM)
        if image.startswith("Reputation-Matrix2/"):
            candidate = os.path.join(os.path.dirname(rm_root), *image.split("/"))
        else:
            candidate = os.path.join(rm_root, *image.split("/"))
        candidate = os.path.realpath(candidate)
        try:
            if os.path.commonpath((rm_root, candidate)) != rm_root or not os.path.isfile(candidate):
                return None
        except ValueError:
            return None
        return os.path.relpath(candidate, ROOT).replace(os.sep, "/")

    def import_foundry(self, group, packet=None, world=None, source="world"):
        """Create an art-only Forge roster from an existing Foundry folder.

        ``source=world`` is the live-world-safe importer. ``source=repo`` also
        considers committed packet/root actors discovered by the asset catalog,
        which is how a roster can be bootstrapped before a fresh world export.
        In both modes the source actor is referenced, not rewritten, until an
        explicit review/replace action.
        """
        if not group:
            raise RuntimeError("choose a Foundry group folder")
        if source == "repo":
            world, scheme, rows = self._repo_actor_rows(world=world)
            articles, by_id, by_name = self._article_index()
            filtered = []
            for row in rows:
                flag = row.get("folder_path") or []
                doc = row["doc"]
                if doc.get("type") != "npc":
                    continue
                sheet = ((doc.get("flags") or {}).get(self.bfp.SHEETS_FLAG) or {})
                bik = ((doc.get("flags") or {}).get("bik") or {})
                article = by_id.get(sheet.get("characterId") or bik.get("characterId"))
                if article is None:
                    key = re.sub(r"[^a-z0-9]+", " ", str(doc.get("name") or "").lower()).strip()
                    article = by_name.get(key)
                inferred = flag[0] if flag else self._group_for_article(article, scheme)
                if inferred == group:
                    row["folder_path"] = flag or [group]
                    filtered.append(row)
            rows = filtered
        else:
            world, scheme, rows = self._foundry_actor_rows(group=group, world=world)
        if not rows:
            location = "the repository actor packets" if source == "repo" else f"actors/worlds/{world}"
            raise KeyError(f"no NPC actors found in {group!r} under {location}")
        packet = slugify(packet or ("foundry-" + slugify(group)))
        roster_path = os.path.join(self.bfp.ROSTERS, packet + ".json")
        if os.path.exists(roster_path):
            raise RuntimeError(f"data/forge/{packet}.json exists — choose another packet id")

        articles = read_json(os.path.join(self.bfp.RM, "data", "characters.json"), []) or []
        articles_by_id = {a.get("id"): a for a in articles if isinstance(a, dict) and a.get("id")}
        group_info = (scheme.get("groups") or {}).get(group) or {}
        color = group_info.get("color") or "#888888"
        faction = group_info.get("faction")
        folder_styles = {}
        for spec in (scheme.get("packets") or {}).values():
            if isinstance(spec, dict) and spec.get("folder") == group:
                folder_styles.update(spec.get("subfolders") or {})
        for spec in (scheme.get("eras") or {}).values():
            if isinstance(spec, dict) and spec.get("folder"):
                folder_styles.setdefault(spec["folder"], spec)

        entries, subfolders, used = [], {}, set()
        for index, row in enumerate(rows, 1):
            doc = row["doc"]
            foundry_id = str(doc.get("_id") or "")
            name = str(doc.get("name") or foundry_id)
            eid = slugify(name)
            if eid in used:
                eid = f"{eid}-{slugify(foundry_id[-6:])}"
            suffix = 2
            base_id = eid
            while eid in used:
                eid = f"{base_id}-{suffix}"
                suffix += 1
            used.add(eid)
            folder_parts = row["folder_path"][1:]
            folder = " / ".join(folder_parts) if folder_parts else "General"
            style = folder_styles.get(folder) or {}
            subfolders.setdefault(folder, {
                "color": style.get("color") or color,
                "description": style.get("description") or f"Existing Foundry folder under {group}.",
            })
            sysdoc = doc.get("system") or {}
            details = sysdoc.get("details") or {}
            actor_type = details.get("type") or {}
            if isinstance(actor_type, dict):
                actor_type = actor_type.get("value") or actor_type.get("custom") or "npc"
            traits = sysdoc.get("traits") or {}
            sheet_flags = ((doc.get("flags") or {}).get(self.bfp.SHEETS_FLAG) or {})
            site_id = sheet_flags.get("characterId")
            article = articles_by_id.get(site_id)
            if article:
                look = " ".join(str(article[k]) for k in ("summary", "description") if article.get(k))[:600].strip()
            else:
                biography = details.get("biography") or {}
                biography = biography.get("value", "") if isinstance(biography, dict) else biography
                look = re.sub(r"\s+", " ", unescape(re.sub(r"<[^>]*>", " ", str(biography or "")))).strip()[:600]
            if not look:
                subtype = (actor_type if isinstance(actor_type, str) else "npc")
                detail_type = details.get("type") or {}
                subtype = detail_type.get("subtype") if isinstance(detail_type, dict) else ""
                look = f"{name}, a {subtype or actor_type or 'fantasy'} creature in {group}."
            width = (doc.get("prototypeToken") or {}).get("width") or 1
            height = (doc.get("prototypeToken") or {}).get("height") or 1
            entry = {
                "id": eid, "name": name, "folder": folder, "tier": sheet_flags.get("role") or "Foundry NPC",
                "role": sheet_flags.get("role") or "Existing Foundry NPC", "cr": details.get("cr") or 0,
                "type": actor_type, "size": traits.get("size") or "med", "token_size": max(int(width), int(height)),
                "look": look, "seed": 600000 + index,
                "source_actor": row["relative_path"], "source_actor_id": foundry_id,
                "source_folder_path": list(row["folder_path"]),
                "source_img": self._foundry_image(doc.get("img")),
                "source_has_img": bool(doc.get("img") and doc.get("img") != self.bfp.PENDING_IMG),
            }
            if site_id:
                entry["site"] = site_id
            entries.append(entry)

        roster = {
            "format": self.bfp.FORMAT, "packet": packet, "name": group,
            "title": f"{group} — existing NPCs from Foundry world {world}", "faction": faction,
            "group": group, "color": color, "disposition": -1,
            "file_prefix": f"fvtt-Actor-{packet}-", "portraits": f"portraits/{packet}",
            "renders": f"npc-forge/{packet}/renders",
            "source": f"Foundry world mirror: actors/worlds/{world}/{group}",
            "foundry_source": {"world": world, "group": group},
            "style": "Clean cel-shaded cartoon character art in the style of Mario & Luigi RPG concept art, bold dark outlines, flat colours, simple shading.",
            "framing": self.bfp.FRAMINGS["fullbody"],
            "negative": "photorealistic, 3d render, blurry, cropped, cut off, multiple characters, text, watermark, signature, border, frame, ground shadow, floor, background scenery, gradient background",
            "background": "#FF00FF", "render_size": [1408, 768], "plate_size": 512,
            "subfolders": subfolders, "entries": entries,
        }
        write_json(roster_path, roster)
        self.ensure_scheme(roster)
        return self.roster_view(roster)

    def _tier_entry(self, eid, name, folder, tier, look, seed, faction=None, roster_name=None, framing=None):
        """A draft statblock at `tier` with the given look — the shape both `draft`
        (templated plan) and `collect` (website articles, input rows) file."""
        t = TIERS.get(str(tier)) or TIERS["1"]
        officer = t["cr"] >= 5
        dmg_n, dmg_d = t["dmg"]
        entry = {
            "id": eid, "name": name, "folder": folder, "tier": "officer" if officer else str(tier), "role": "draft — write me",
            "type": "humanoid", "subtype": "", "size": "med", "alignment": "Unaligned", "cr": t["cr"],
            "abilities": list(t["abilities"]), "saves": [], "skills": {}, "ac": t["ac"], "ac_words": "draft", "hp": t["hp"], "hp_formula": t["hp_formula"],
            "speed": {"walk": 30}, "senses": {}, "languages": {"value": ["common"], "custom": ""}, "di": [], "dr": [], "dv": [], "ci": [],
            "traits": [], "attacks": [{"name": "Weapon", "icon": "strike", "kind": "melee", "ability": "str", "wtype": "natural", "reach": 5,
                                        "dmg": [dmg_n, dmg_d, "slashing"], "extra": [], "props": [],
                                        "text": f"<p><em>Melee Weapon Attack:</em> reach 5 ft., one target. <em>Hit:</em> {dmg_n}d{dmg_d} + {max(0, (t['abilities'][0] - 10) // 2)} slashing damage.</p>"}],
            "actions": [],
            "multiattack": f"The creature makes {t['attacks']} attacks." if t["attacks"] > 1 else None,
            "look": look,
            "seed": seed, "plate": eid, "token_size": 1,
            "bio": [f"<p><strong>Draft.</strong> Drafted by the NPC Forge for {roster_name or name}" + (f" (faction <code>{faction}</code>)" if faction else "") +
                    "; the numbers are the tier template until someone writes the real statblock, the look is a placeholder until the render says otherwise.</p>"],
            "tags": [slugify(roster_name or name), "draft"],
        }
        if framing:
            entry["framing"] = framing
        return entry

    # ---------------------------------------------------- roster inputs --
    def site_candidates(self, match=None):
        """Website articles the roster can collect: they have prose to render and
        no forge roster claims them yet (by id or by `site`)."""
        arts = read_json(os.path.join(self.bfp.RM, "data", "characters.json"), []) or []
        taken = set()
        for r in self.rosters():
            for e in r.get("entries") or []:
                taken.add(e.get("id"))
                taken.add(e.get("site"))
        out = []
        for a in arts:
            aid = a.get("id") or ""
            if not aid or aid in taken:
                continue
            where = f"{a.get('affiliation') or ''} {a.get('title') or ''}".lower()
            if match and match.lower() not in where:
                continue
            look = " ".join(str(a[k]) for k in ("summary", "description") if a.get(k))[:600].strip()
            if not look:
                continue
            out.append({"site": aid, "name": a.get("name") or aid, "affiliation": a.get("affiliation") or "",
                        "status": a.get("status") or "", "look": look, "image": a.get("image"), "fullBody": a.get("fullBody")})
        return out

    def collect(self, packet, rows, tier="1", folder=None, framing=None):
        """Grow an existing roster from input rows — website candidates
        (`{"site": id, "name":…, "look":…}`) or hand-written ones. Ids are
        slugified; rows already in the roster are skipped, never duplicated."""
        path = os.path.join(self.bfp.ROSTERS, packet + ".json")
        r = self.bfp.load_roster(path)
        entries = r.setdefault("entries", [])
        have = {e["id"] for e in entries} | {e.get("site") for e in entries}
        subs = list((r.get("subfolders") or {}) or [None])
        added = []
        for i, row in enumerate(rows, 1):
            eid = slugify(row.get("id") or row.get("site") or row.get("name") or "")
            if not eid or eid in have:
                continue
            have.add(eid)
            e = self._tier_entry(eid, row.get("name") or eid.replace("-", " ").title(),
                                 row.get("folder") or folder or subs[0], row.get("tier") or tier,
                                 row.get("look") or "", int(row.get("seed") or 520000 + i),
                                 faction=r.get("faction"), roster_name=r.get("name"),
                                 framing=row.get("framing") or framing)
            if row.get("site"):
                e["site"] = row["site"]
                if row.get("image"):
                    e["site_image"] = row["image"]
                if row.get("fullBody"):
                    e["site_fullbody"] = row["fullBody"]
                e["bio"] = [f"<p>Collected from the website article <code>{row['site']}</code> by the NPC Forge; the look is the article's own prose.</p>"]
                e["role"] = f"site article — {row.get('status') or 'written'}"
            entries.append(e)
            added.append(eid)
        if added:
            write_json(path, r)
        return {"packet": packet, "added": added, "entries": len(entries)}

    def ingest(self, directory, packet=None, cut=True):
        """Auto-collect renders that landed in a folder — Comfy's output, the
        Downloads folder, anywhere an image model wrote files — instead of
        dragging them onto the page. Files match pending jobs by entry id
        (`<id>.png`, `<id>-<seed>.png`, `<name-slug>-*`) or by the exact render
        file name; the newest match wins and is cut straight away."""
        if not directory or not os.path.isdir(directory):
            raise FileNotFoundError(f"no such folder: {directory}")
        got = []
        for r in self.rosters():
            if r.get("error") or (packet and r["packet"] != packet):
                continue
            roster = self.bfp.find_roster(r["packet"])
            for e in roster["entries"]:
                dst = self.bfp.render_file(roster, e)
                if os.path.exists(dst):
                    continue
                slug = slugify(e["name"])
                cands = []
                for base, _dirs, files in os.walk(directory):
                    # Comfy often writes previews beside the final image; do
                    # not ingest our own rejects or a transient hidden file.
                    if os.path.basename(base).lower() in {"rejects", ".temp", "preview"}:
                        continue
                    for f in files:
                        if f.startswith(".") or not f.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
                            continue
                        stem = re.sub(r"\.(png|jpe?g|webp)$", "", f, flags=re.I)
                        # Accepted names include id.png, id-seed.png,
                        # Comfy's id_00001_.png, and a slugified display name.
                        compact = re.sub(r"[_-]\d+[_-]?$", "", stem)
                        matches = (f == os.path.basename(dst) or stem == e["id"] or
                                   stem.startswith(e["id"] + "-") or stem.startswith(e["id"] + "_") or
                                   compact == e["id"] or (slug and (stem == slug or stem.startswith(slug + "-") or stem.startswith(slug + "_"))))
                        if matches:
                            cands.append(os.path.join(base, f))
                if not cands:
                    continue
                src = max(cands, key=os.path.getmtime)
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                shutil.copyfile(src, dst)
                item = {"packet": r["packet"], "id": e["id"], "render": rel(dst), "from": rel(src)}
                if cut:
                    facts = self.cut_one(roster, e)
                    prior = (self.review_state(r["packet"]).get("entries") or {}).get(e["id"], {})
                    self.review_entry(r["packet"], e["id"], "cut", prior.get("notes", ""))
                    item.update({"plate": rel(self.bfp.plate_file(roster, e)), "border_clear": facts.get("border_clear")})
                got.append(item)
        return got

    def _review_path(self, packet):
        roster = self.bfp.find_roster(packet)
        return os.path.join(os.path.dirname(self.bfp.packet_paths(roster)[2]), "review.json")

    def review_state(self, packet):
        """Return the human review ledger without making a render accepted.

        A cut is only a technical background-removal result.  ``accepted`` is
        intentionally separate so a bad crop can never replace website or
        Foundry art just because an image happened to pass the keyer.
        """
        path = self._review_path(packet)
        data = read_json(path, {}) or {}
        return data if isinstance(data, dict) else {}

    def review_entry(self, packet, entry_id, status, notes=""):
        allowed = {"pending", "cut", "accepted", "rejected"}
        if status not in allowed:
            raise ValueError("review status must be pending, cut, accepted, or rejected")
        roster = self.bfp.find_roster(packet)
        entry = next((item for item in roster["entries"] if item["id"] == entry_id), None)
        if not entry:
            raise KeyError(entry_id)
        plate = self.bfp.plate_file(roster, entry)
        if status == "accepted" and not os.path.isfile(plate):
            raise RuntimeError("accept requires a cut transparent plate; remove the background first")
        data = self.review_state(packet)
        data.setdefault("format", "waluipedia-forge-review/1")
        data["packet"] = packet
        data.setdefault("entries", {})
        row = data["entries"].setdefault(entry_id, {})
        row.update({"status": status, "notes": str(notes or ""), "updated": dt.datetime.now(dt.timezone.utc).isoformat(),
                    "render": rel(self.bfp.render_file(roster, entry)), "plate": rel(plate) if os.path.isfile(plate) else None})
        write_json(self._review_path(packet), data)
        return row

    def _actor_paths_for_entry(self, roster, entry, site_id=None):
        """Find the packet/source actor plus all repo actor copies tied to a
        website id.  The replacement operation updates every copy so a later
        Foundry sync cannot resurrect the old portrait from a stale packet."""
        paths, seen = [], set()
        source = entry.get("source_actor")
        if source:
            try:
                path = self.bfp.source_actor_path(entry)
            except (OSError, ValueError):
                path = None
            if path:
                paths.append(path); seen.add(os.path.realpath(path))
        actors_dir, _, _ = self.bfp.packet_paths(roster)
        prefix = roster.get("file_prefix") or f"fvtt-Actor-{roster['packet']}-"
        packet_actor = os.path.join(actors_dir, f"{prefix}{entry['id']}.json")
        if os.path.isfile(packet_actor) and os.path.realpath(packet_actor) not in seen:
            paths.append(packet_actor); seen.add(os.path.realpath(packet_actor))
        if not site_id:
            return paths
        for base, dirs, files in os.walk(self.bfp.ACTORS_ROOT):
            dirs.sort(key=str.casefold)
            for filename in sorted(files, key=str.casefold):
                if not filename.endswith(".json") or filename in {"folders.json", "import.json"}:
                    continue
                path = os.path.join(base, filename)
                if os.path.realpath(path) in seen:
                    continue
                doc = read_json(path)
                if not isinstance(doc, dict):
                    continue
                flags = doc.get("flags") or {}
                sheet = flags.get(self.bfp.SHEETS_FLAG) or {}
                bik = flags.get("bik") or {}
                if sheet.get("characterId") == site_id or bik.get("characterId") == site_id:
                    paths.append(path); seen.add(os.path.realpath(path))
        return paths

    def replace_entry(self, packet, entry_id, *, website="fullBody", also_foundry=True, force=False):
        """Publish an accepted plate to the website and Foundry actor copies.

        ``website`` is ``fullBody`` (the safe default), ``image``, ``both`` or
        ``none``.  The old references are recorded in ``replacements.json`` so
        a reviewer has an audit trail; no source render is silently deleted.
        """
        if website not in {"fullBody", "image", "both", "none"}:
            raise ValueError("website must be fullBody, image, both, or none")
        roster = self.bfp.find_roster(packet)
        entry = next((item for item in roster["entries"] if item["id"] == entry_id), None)
        if not entry:
            raise KeyError(entry_id)
        plate = self.bfp.plate_file(roster, entry)
        if not os.path.isfile(plate):
            raise RuntimeError("replace requires a cut plate; remove the background first")
        state = self.review_state(packet)
        review = (state.get("entries") or {}).get(entry_id) or {}
        if not force and review.get("status") != "accepted":
            raise RuntimeError("review this image and mark it accepted before replacing website or Foundry art")
        records, by_id, by_name = self._article_index()
        site_id = entry.get("site")
        article = by_id.get(site_id) if site_id else None
        if article is None:
            key = re.sub(r"[^a-z0-9]+", " ", str(entry.get("name") or "").lower()).strip()
            article = by_name.get(key)
            site_id = article.get("id") if article else site_id
        new_ref = os.path.relpath(plate, self.bfp.RM).replace(os.sep, "/")
        backup = {"at": dt.datetime.now(dt.timezone.utc).isoformat(), "packet": packet, "entry": entry_id,
                  "site": site_id, "plate": new_ref, "website": {}, "actors": []}
        changed = []
        if article is not None and website != "none":
            for key in ({"fullBody"} if website == "fullBody" else {"image"} if website == "image" else {"fullBody", "image"}):
                backup["website"][key] = article.get(key)
                article[key] = new_ref
            write_json(os.path.join(self.bfp.RM, "data", "characters.json"), records)
            changed.append("website")
        elif website != "none" and not force:
            raise RuntimeError(f"no website article matched {site_id or entry.get('name')!r}")
        if also_foundry:
            actor_paths = self._actor_paths_for_entry(roster, entry, site_id)
            for path in actor_paths:
                doc = read_json(path)
                if not isinstance(doc, dict):
                    continue
                old = {"path": rel(path), "img": doc.get("img"),
                       "token": ((doc.get("prototypeToken") or {}).get("texture") or {}).get("src")}
                backup["actors"].append(old)
                doc["img"] = new_ref
                doc.setdefault("prototypeToken", {}).setdefault("texture", {})["src"] = new_ref
                write_json(path, doc)
                changed.append(rel(path))
        if not changed:
            raise RuntimeError("nothing to replace: no matched website article or Foundry actor")
        manifest_path = os.path.join(os.path.dirname(self.bfp.packet_paths(roster)[2]), "replacements.json")
        manifest = read_json(manifest_path, {"format": "waluipedia-forge-replacements/1", "replacements": []}) or {}
        manifest.setdefault("replacements", []).append(backup)
        write_json(manifest_path, manifest)
        review_row = state.setdefault("entries", {}).setdefault(entry_id, {})
        review_row.update({"status": "replaced", "replaced": backup["at"], "replacement": new_ref})
        write_json(self._review_path(packet), state)
        return {"packet": packet, "id": entry_id, "site": site_id, "new": new_ref, "changed": changed,
                "website": bool(article is not None and website != "none"), "foundry": len(backup["actors"]),
                "backup": rel(manifest_path)}

    def replace_batch(self, packet, ids=None, *, website="fullBody", also_foundry=True, batch=None, force=False):
        """Publish accepted plates in deterministic batches; unaccepted entries
        are reported, never skipped silently."""
        roster = self.bfp.find_roster(packet)
        wanted = [entry["id"] for entry in roster["entries"] if not ids or entry["id"] in set(ids)]
        if batch is not None and int(batch) > 0:
            wanted = wanted[:int(batch)]
        out, skipped = [], []
        for entry_id in wanted:
            try:
                out.append(self.replace_entry(packet, entry_id, website=website, also_foundry=also_foundry, force=force))
            except (RuntimeError, KeyError) as exc:
                skipped.append({"id": entry_id, "reason": str(exc)})
        return {"replaced": out, "skipped": skipped, "requested": len(wanted)}

    def draft(self, packet, name, faction=None, group=None, color=None, plan=None, subfolders=None, style=None, title=None, rows=None, framing=None):
        """A new roster with templated entries for a faction — a packet that
        imports today and gets its real numbers, names and looks written in
        the roster afterwards."""
        packet = slugify(packet)
        path = os.path.join(self.bfp.ROSTERS, packet + ".json")
        if os.path.exists(path):
            raise RuntimeError(f"data/forge/{packet}.json exists — edit it, or pick another packet id")
        facts = self.factions()
        f = next((x for x in facts["factions"] if x["id"] == faction), None) if faction else None
        group = group or (f or {}).get("group") or name
        color = color or (f or {}).get("color") or "#888888"
        subs = subfolders or {"Rank and File": {"color": color, "description": f"The {name} as the party meets them — drafted by the NPC Forge."},
                              "Officers": {"color": color, "description": f"Those who give the orders in the {name}."}}
        sub_names = list(subs)
        summary = (f or {}).get("summary") or ""
        tier_default = "1"
        entries = []
        if rows:
            # the suite's own input: names, looks, tiers, folders, framing — from a
            # file, from the website collector, from the page
            for i, row in enumerate(rows, 1):
                eid = slugify(row.get("id") or row.get("site") or row.get("name") or f"{packet}-{i}")
                officer = (TIERS.get(str(row.get("tier") or tier_default)) or TIERS["1"])["cr"] >= 5
                folder = row.get("folder") or (sub_names[-1] if officer and len(sub_names) > 1 else sub_names[0])
                e = self._tier_entry(eid, row.get("name") or eid.replace("-", " ").title(), folder,
                                     row.get("tier") or tier_default, row.get("look") or "",
                                     int(row.get("seed") or 520000 + i), faction=faction, roster_name=name,
                                     framing=row.get("framing") or framing)
                if row.get("site"):
                    e["site"] = row["site"]
                    if row.get("image"):
                        e["site_image"] = row["image"]
                    if row.get("fullBody"):
                        e["site_fullbody"] = row["fullBody"]
                    e["bio"] = [f"<p>Collected from the website article <code>{row['site']}</code> by the NPC Forge; the look is the article's own prose.</p>"]
                entries.append(e)
        for i, tier in enumerate(plan if not rows else [], 1):
            t = TIERS.get(tier) or TIERS["1"]
            officer = t["cr"] >= 5
            folder = sub_names[-1] if officer and len(sub_names) > 1 else sub_names[0]
            eid = f"draft-{i:02d}"
            look = f"A member of {name}: {summary[:160]}".strip() if summary else f"A member of {name}, in the faction's colours and gear."
            entries.append(self._tier_entry(eid, f"{name} draft {i}", folder, tier, look, 500000 + i,
                                            faction=faction, roster_name=name, framing=framing))
        roster = {
            "format": self.bfp.FORMAT, "packet": packet, "name": name, "title": title or f"{name} — drafted by the NPC Forge",
            "faction": faction, "group": group, "color": color, "disposition": -1, "file_prefix": f"fvtt-Actor-{packet}-",
            "portraits": f"portraits/{packet}", "renders": f"npc-forge/{packet}/renders",
            "source": f"data/factions.json → {faction}" if faction else "drafted by hand",
            "style": style or "Clean cel-shaded cartoon character art in the style of Mario & Luigi RPG concept art, bold dark outlines, flat colours, simple shading.",
            "framing": "Full body, whole figure visible, three-quarter view, centred, isolated on a plain flat solid magenta background (#FF00FF), no floor, no ground shadow, no text, no border.",
            "negative": "photorealistic, 3d render, blurry, cropped, cut off, multiple characters, text, watermark, signature, border, frame, ground shadow, floor, background scenery, gradient background",
            "background": "#FF00FF", "render_size": [1408, 768], "plate_size": 512,
            "subfolders": subs, "entries": entries,
        }
        write_json(path, roster)
        self.ensure_scheme(roster)
        return self.roster_view(roster)

    def ensure_scheme(self, roster):
        """actors/folders.json `packets.<packet>` with the roster's folders and
        colours — the builder refuses a packet the scheme does not file."""
        scheme = read_json(FOLDER_SCHEME, {}) or {}
        packets = scheme.setdefault("packets", {})
        entry = packets.get(roster["packet"]) or {}
        want = {"folder": roster["group"],
                "description": entry.get("description") or f"{roster['name']} (actors/{roster['packet']}, built by tools/build-forge-packets.py from the NPC Forge roster data/forge/{roster['packet']}.json).",
                "subfolders": {k: {"color": v.get("color"), "description": v.get("description", "")} for k, v in (roster.get("subfolders") or {}).items()}}
        if entry == want:
            return False
        packets[roster["packet"]] = want
        groups = scheme.setdefault("groups", {})
        bestiary_folder = (scheme.get("bestiary") or {}).get("folder")
        if roster["group"] not in groups and roster["group"] != bestiary_folder:
            groups[roster["group"]] = {"color": roster.get("color") or "#888888", "faction": roster.get("faction")}
        write_json(FOLDER_SCHEME, scheme)
        return True

    def save_entry(self, packet, entry_id, fields):
        """Edit the roster's own words for one entry (name, folder, tier,
        role, cr, type, size, look, seed, token_size …) — the Forge's page
        edits looks and names; the statblock stays a JSON edit."""
        r = self.bfp.find_roster(packet)
        path = os.path.join(self.bfp.ROSTERS, packet + ".json")
        for e in r["entries"]:
            if e["id"] == entry_id:
                for k, v in fields.items():
                    if k in ("id", "attacks", "actions", "traits", "bio"):
                        continue
                    if k == "folder" and v not in (r.get("subfolders") or {}):
                        raise RuntimeError(f"folder {v!r} is not one of the roster's sub-folders")
                    e[k] = v
                write_json(path, r)
                return self.roster_view(r)
        raise KeyError(entry_id)

    def save_roster_fields(self, packet, fields):
        r = self.bfp.find_roster(packet)
        for k in ("style", "framing", "negative", "render_size", "plate_size", "name", "title", "color"):
            if k in fields:
                r[k] = fields[k]
        write_json(os.path.join(self.bfp.ROSTERS, packet + ".json"), r)
        return self.roster_view(r)

    # ---------------------------------------------------------------- jobs --
    def _log(self, job, line):
        with self.lock:
            job["log"].append(f"{dt.datetime.now().strftime('%H:%M:%S')}  {line}")

    def _new_job(self, kind, packet):
        with self.lock:
            if self.current and self.current.get("alive"):
                raise RuntimeError("a job is running — stop it or wait")
            jid = f"{kind}-{int(time.time() * 1000)}"
            job = {"id": jid, "kind": kind, "packet": packet, "alive": True, "ok": None, "log": [], "done": 0, "total": 0, "started": time.time()}
            self.jobs[jid] = job
            self.current = job
            self.stop_flag = False
        return job

    def job(self, jid=None):
        job = self.jobs.get(jid) if jid else self.current
        return job

    def stop(self):
        self.stop_flag = True
        return {"stopping": True}

    def render_one(self, roster, entry, job, steps=None, cfg=None, resolution=None, seed=None, retries=1):
        """Queue → wait → download → cut → QC; a failed QC re-rolls the seed
        (`retries` times) and keeps the rejects beside the render."""
        rdir = self.bfp.packet_paths(roster)[2]
        os.makedirs(rdir, exist_ok=True)
        w, h = roster.get("render_size") or [1408, 768]
        wf = self.t2i_workflow(w, h, steps=steps, cfg=cfg, resolution=resolution)
        prompt = self.bfp.prompt_for(roster, entry)
        negative = entry.get("negative") or roster.get("negative") or self.mtp.NEGATIVE
        seed = int(seed if seed is not None else (entry.get("seed") or 1))
        dst = self.bfp.render_file(roster, entry)
        for attempt in range(retries + 1):
            if self.stop_flag:
                return None
            filled = self.mtp.workflow_fill(wf, prompt, "", f"npc-forge/{roster['packet']}/{entry['id']}", seed + attempt, negative=negative)
            self._log(job, f"{entry['id']}: rendering seed {seed + attempt} ({w}x{h})")
            try_path = dst if attempt == 0 else dst[:-4] + f".try{attempt}.png"
            self.comfy.run(filled, try_path, timeout=900)
            why = self.qc(try_path)
            if not why:
                if try_path != dst:
                    os.replace(try_path, dst)
                return seed + attempt
            self._log(job, f"{entry['id']}: QC failed ({'; '.join(why)})" + (" — re-rolling" if attempt < retries else ""))
            rej = os.path.join(rdir, "rejects")
            os.makedirs(rej, exist_ok=True)
            os.replace(try_path, os.path.join(rej, f"{entry['id']}.{seed + attempt}.png"))
        return None

    def qc(self, render):
        """Does the render key cleanly? (border all field, one figure, nothing left in the audit)"""
        tmp = render + ".qc.png"
        why = []
        try:
            facts = self.mtp.cut(render, tmp, key="auto")
            if facts.get("border_clear", 0) < 0.98:
                why.append(f"border not clear ({facts.get('border_clear')})")
            fw, fh = facts.get("figure") or (0, 0)
            sw, sh = facts.get("size") or (1, 1)
            if fw * fh < 0.05 * sw * sh:
                why.append(f"figure too small ({fw}x{fh} on {sw}x{sh})")
            if self.mtp.background_audit(tmp):
                why.append("field left in the plate")
        except SystemExit as exc:
            why.append(str(exc))
        except Exception as exc:  # noqa: BLE001
            why.append(f"{type(exc).__name__}: {exc}")
        finally:
            if os.path.exists(tmp):
                os.remove(tmp)
        return why

    def cut_one(self, roster, entry, job=None):
        src, dst = self.bfp.render_file(roster, entry), self.bfp.plate_file(roster, entry)
        facts = self.bfp.cut_plate(src, dst, size=int(roster.get("plate_size") or 512))
        if job:
            self._log(job, f"{entry['id']}: plate {rel(dst)} — figure {facts['figure'][0]}x{facts['figure'][1]}, border clear {facts['border_clear']}, healed {facts.get('healed', 0)} px"
                           + (f"  AUDIT {facts['audit']}" if facts.get("audit") else ""))
        return facts

    def build(self, roster, job=None):
        lib = self.bfp.P955.load_image_lib()
        scheme = self.bfp.P955.load_folder_scheme()
        expected, problems, pending = self.bfp.build_packet(roster, lib, scheme)
        if problems:
            if job:
                for p in problems:
                    self._log(job, "  " + p)
            raise RuntimeError(f"{len(problems)} roster problem(s) — the packet was not written")
        self.bfp.write_packet(roster, expected)
        actors_dir = self.bfp.packet_paths(roster)[0]
        out = os.path.join(actors_dir, "import.json")
        cmd = [sys.executable, os.path.join(HERE, "foundry-bridge.py"), "combine", rel(actors_dir), "--out", rel(out), "--world", roster["packet"]]
        res = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, encoding="utf-8", errors="replace")
        if job:
            self._log(job, f"built {len(expected)} actors in {rel(actors_dir)}" + (f" ({len(pending)} awaiting art: {', '.join(pending)})" if pending else ""))
            self._log(job, (res.stdout or res.stderr).strip().splitlines()[-1] if (res.stdout or res.stderr).strip() else "combine: done")
        if res.returncode:
            raise RuntimeError("combine failed: " + (res.stderr or res.stdout).strip()[-400:])
        return {"actors": len(expected), "pending": pending, "import": rel(out)}

    def run(self, packet, ids=None, steps=("render", "cut", "build"), only_missing=True, seed_mode="roster", sampler_steps=None, cfg=None,
            resolution=None, retries=1, record_seed=True, batch=None, offset=0):
        roster = self.bfp.find_roster(packet)
        steps = tuple(steps)
        if "render" in steps and not (self.comfy and self.engine == "qwen21"):
            self.connect()
            if not (self.comfy and self.engine == "qwen21"):
                raise RuntimeError("no Qwen-Image-2.1 ComfyUI to render on — start Comfy Desktop and Connect, or run the cut/build steps only")
        want = [e for e in roster["entries"] if not ids or e["id"] in set(ids)]
        start = max(0, int(offset or 0))
        if start:
            want = want[start:]
        if batch is not None and int(batch) > 0:
            want = want[:int(batch)]
        job = self._new_job("run", packet)
        job["total"] = len(want)
        job["steps"] = list(steps)

        def loop():
            ok = True
            try:
                import random
                for e in want:
                    if self.stop_flag:
                        self._log(job, "stopped")
                        ok = False
                        break
                    render, plate = self.bfp.render_file(roster, e), self.bfp.plate_file(roster, e)
                    try:
                        if "render" in steps and (not only_missing or not os.path.exists(render)):
                            seed = None if seed_mode == "roster" else random.randint(1, 2 ** 31 - 1)
                            used = self.render_one(roster, e, job, steps=sampler_steps, cfg=cfg, resolution=resolution, seed=seed, retries=retries)
                            if used is None:
                                self._log(job, f"{e['id']}: no usable render")
                                ok = False
                                job["done"] += 1
                                continue
                            if record_seed and used != e.get("seed"):
                                self.save_entry(packet, e["id"], {"seed": used})
                                e["seed"] = used
                            if os.path.exists(plate):
                                os.remove(plate)                       # a new render means a new plate
                        if "cut" in steps and os.path.exists(render) and (not only_missing or not os.path.exists(plate)):
                            self.cut_one(roster, e, job)
                            prior = (self.review_state(packet).get("entries") or {}).get(e["id"], {})
                            self.review_entry(packet, e["id"], "cut", prior.get("notes", ""))
                        elif "cut" in steps and not os.path.exists(render):
                            self._log(job, f"{e['id']}: no render to cut")
                    except Exception as exc:  # noqa: BLE001
                        self._log(job, f"{e['id']}: {type(exc).__name__}: {exc}")
                        ok = False
                    job["done"] += 1
                if "build" in steps and not self.stop_flag:
                    try:
                        self.build(self.bfp.find_roster(packet), job)
                    except Exception as exc:  # noqa: BLE001
                        self._log(job, f"build: {exc}")
                        ok = False
            finally:
                job["ok"] = ok
                job["alive"] = False
                self._log(job, "done" if ok else "finished with problems")
        threading.Thread(target=loop, daemon=True).start()
        return {"id": job["id"], "total": job["total"]}

    def import_render(self, packet, entry_id, data, cut=True):
        """A render made elsewhere (Claude, a Qwen GUI, a drawing) dropped on
        the page: saved as the entry's render, cut when asked."""
        roster = self.bfp.find_roster(packet)
        e = next((x for x in roster["entries"] if x["id"] == entry_id), None)
        if not e:
            raise KeyError(entry_id)
        dst = self.bfp.render_file(roster, e)
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        with open(dst, "wb") as fh:
            fh.write(data)
        out = {"render": rel(dst)}
        if cut:
            facts = self.cut_one(roster, e)
            prior = (self.review_state(packet).get("entries") or {}).get(entry_id, {})
            self.review_entry(packet, entry_id, "cut", prior.get("notes", ""))
            out.update({"plate": rel(self.bfp.plate_file(roster, e)), "audit": facts.get("audit"), "border_clear": facts.get("border_clear")})
        return out

    def handoff(self, packet, only_missing=True):
        """npc-forge/<packet>/handoff.md + jobs.jsonl — the brief for whoever
        draws: one line per entry with the prompt, the negative, the seed, the
        canvas and the exact file to write; and what to run afterwards."""
        roster = self.bfp.find_roster(packet)
        folder = os.path.dirname(self.bfp.packet_paths(roster)[2])
        os.makedirs(folder, exist_ok=True)
        jobs = [self.bfp.render_job(roster, e) for e in roster["entries"]
                if not only_missing or not os.path.exists(self.bfp.render_file(roster, e))]
        with open(os.path.join(folder, "jobs.jsonl"), "w", encoding="utf-8") as fh:
            for j in jobs:
                fh.write(json.dumps(j, ensure_ascii=False) + "\n")
        w, h = roster.get("render_size") or [1408, 768]
        lines = [f"# {roster['name']} — render hand-off", "",
                 f"Roster `{rel(os.path.join(self.bfp.ROSTERS, packet + '.json'))}`; {len(jobs)} render(s) wanted"
                 + (" (entries without a render)" if only_missing else "") + f". Written {dt.datetime.now().strftime('%Y-%m-%d %H:%M')} by tools/npc-forge.py.", "",
                 "## The recipe", "",
                 f"- Canvas {w}×{h}, one figure, flat **{roster.get('background') or '#FF00FF'}** background (the cut keys it off; a real alpha channel works too).",
                 f"- Style: {roster.get('style')}", f"- Framing: {roster.get('framing')}",
                 f"- Negative: {roster.get('negative')}", "",
                 "## The renders", "",
                 "Write each PNG to the path given; then `python3 tools/build-forge-packets.py plates " + packet + "` cuts the plates and "
                 "`python3 tools/build-forge-packets.py " + packet + "` rebuilds the actors (or press **Cut + build** on the Forge page).", ""]
        for j in jobs:
            lines += [f"### {j['name']} (`{j['id']}`)", "", f"- file: `{j['render']}` → plate `{j['plate']}` ({j['plate_size']} px)",
                      f"- seed: {j['seed']}", f"- prompt: {j['prompt']}", ""]
        with open(os.path.join(folder, "handoff.md"), "w", encoding="utf-8") as fh:
            fh.write("\n".join(lines))
        return {"handoff": rel(os.path.join(folder, "handoff.md")), "jobs": rel(os.path.join(folder, "jobs.jsonl")), "count": len(jobs)}

    def state(self):
        return {"connection": self.connection(), "rosters": self.rosters(), "foundry": self.foundry_groups(),
                "job": self.current, "root": ROOT,
                "tiers": {k: {"cr": v["cr"], "ac": v["ac"], "hp": v["hp"]} for k, v in TIERS.items()}, "default_plan": DEFAULT_PLAN}


# ------------------------------------------------------------------- http --

class Handler(BaseHTTPRequestHandler):
    forge = None

    def log_message(self, fmt, *args):
        if os.environ.get("FORGE_LOG"):
            sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))

    def _send(self, code, body, ctype="application/json; charset=utf-8"):
        data = body if isinstance(body, bytes) else json.dumps(body, ensure_ascii=False).encode("utf-8")
        try:
            self.send_response(code)
            self.send_header("Content-Type", ctype)
            self.send_header("Content-Length", str(len(data)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(data)
        except (BrokenPipeError, ConnectionResetError):
            pass

    def _file(self, rel_path):
        path = os.path.realpath(os.path.join(ROOT, rel_path))
        if not path.startswith(os.path.realpath(ROOT) + os.sep) or not os.path.isfile(path):
            return self._send(404, {"error": "not found"})
        ext = os.path.splitext(path)[1].lower()
        ctype = {".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".json": "application/json; charset=utf-8",
                 ".md": "text/markdown; charset=utf-8"}.get(ext, "application/octet-stream")
        with open(path, "rb") as fh:
            self._send(200, fh.read(), ctype)

    def do_GET(self):
        f = self.forge
        u = urllib.parse.urlsplit(self.path)
        q = dict(urllib.parse.parse_qsl(u.query))
        try:
            if u.path in ("/", "/index.html"):
                with open(HTML, "rb") as fh:
                    return self._send(200, fh.read(), "text/html; charset=utf-8")
            if u.path == "/file":
                return self._file(q.get("p", "").replace("\\", "/").lstrip("/"))
            if u.path == "/api/state":
                return self._send(200, f.state())
            if u.path == "/api/factions":
                return self._send(200, f.factions())
            if u.path == "/api/job":
                job = f.job(q.get("id") or None)
                return self._send(200 if job else 404, job or {"error": "no job"})
            if u.path == "/api/jobs":
                r = f.bfp.find_roster(q.get("packet", ""))
                return self._send(200, {"jobs": [f.bfp.render_job(r, e) for e in r["entries"]]})
            if u.path == "/api/site":
                return self._send(200, {"candidates": f.site_candidates(q.get("match") or None)})
            if u.path == "/api/assets":
                return self._send(200, f.asset_catalog(world=q.get("world") or None, group=q.get("group") or None, match=q.get("match") or None))
            if u.path == "/api/review":
                return self._send(200, f.review_state(q.get("packet", "")))
            if u.path == "/api/prompts":

                r = f.bfp.find_roster(q.get("packet", ""))
                ids = (q.get("ids") or "").split(",") if q.get("ids") else None
                return self._send(200, {"prompts": [{"id": e["id"], "name": e["name"], "prompt": f.bfp.prompt_for(r, e),
                                                     "negative": e.get("negative") or r.get("negative") or "",
                                                     "seed": e.get("seed"), "render": rel(f.bfp.render_file(r, e))}
                                                    for e in r["entries"] if not ids or e["id"] in ids]})
            return self._send(404, {"error": "no route " + u.path})
        except (KeyError, FileNotFoundError) as exc:
            return self._send(404, {"error": str(exc)})
        except Exception as exc:  # noqa: BLE001
            return self._send(500, {"error": "%s: %s" % (type(exc).__name__, exc)})

    def do_POST(self):
        f = self.forge
        n = int(self.headers.get("Content-Length") or 0)
        path = urllib.parse.urlsplit(self.path).path
        q = dict(urllib.parse.parse_qsl(urllib.parse.urlsplit(self.path).query))
        raw = self.rfile.read(n) if n else b""
        try:
            if path == "/api/upload-render":
                return self._send(200, f.import_render(q["packet"], q["id"], raw, cut=q.get("cut", "1") != "0"))
            try:
                body = json.loads(raw.decode("utf-8") or "{}")
            except ValueError:
                return self._send(400, {"error": "bad JSON"})
            if path == "/api/connect":
                return self._send(200, f.connect(body.get("url") or None))
            if path == "/api/start-comfy":
                return self._send(200, f.start_comfy())
            if path == "/api/draft":
                return self._send(200, f.draft(body["packet"], body["name"], faction=body.get("faction"), group=body.get("group"), color=body.get("color"),
                                               plan=body.get("plan"), subfolders=body.get("subfolders"), style=body.get("style"), title=body.get("title"),
                                               rows=body.get("rows"), framing=body.get("framing")))
            if path == "/api/import-foundry":
                return self._send(200, f.import_foundry(body.get("group"), packet=body.get("packet"), world=body.get("world"), source=body.get("source", "world")))
            if path == "/api/collect":
                rows = body.get("rows")
                if rows is None and body.get("fromSite") is not None:
                    rows = f.site_candidates(body.get("fromSite") or None)[: int(body.get("limit") or 8)]
                return self._send(200, f.collect(body["packet"], rows or [], tier=body.get("tier") or "1",
                                                 folder=body.get("folder"), framing=body.get("framing")))
            if path == "/api/ingest":
                return self._send(200, {"collected": f.ingest(body.get("dir") or "", packet=body.get("packet"), cut=body.get("cut", True))})
            if path == "/api/cut":
                roster = f.bfp.find_roster(body["packet"])
                entry = next((item for item in roster["entries"] if item["id"] == body["id"]), None)
                if entry is None:
                    raise KeyError(body["id"])
                if not os.path.isfile(f.bfp.render_file(roster, entry)):
                    raise RuntimeError("remove background requires a render first")
                facts = f.cut_one(roster, entry)
                old = (f.review_state(body["packet"]).get("entries") or {}).get(body["id"], {})
                f.review_entry(body["packet"], body["id"], "cut", old.get("notes", ""))
                return self._send(200, {"plate": rel(f.bfp.plate_file(roster, entry)), "audit": facts.get("audit"), "border_clear": facts.get("border_clear")})
            if path == "/api/review":

                return self._send(200, f.review_entry(body["packet"], body["id"], body["status"], body.get("notes") or ""))
            if path == "/api/replace":
                return self._send(200, f.replace_entry(body["packet"], body["id"], website=body.get("website", "fullBody"),
                                                       also_foundry=body.get("also_foundry", True), force=body.get("force", False)))
            if path == "/api/replace-batch":
                return self._send(200, f.replace_batch(body["packet"], ids=body.get("ids"), website=body.get("website", "fullBody"),
                                                        also_foundry=body.get("also_foundry", True), batch=body.get("batch"), force=body.get("force", False)))
            if path == "/api/entry":

                return self._send(200, f.save_entry(body["packet"], body["id"], body.get("fields") or {}))
            if path == "/api/roster":
                return self._send(200, f.save_roster_fields(body["packet"], body.get("fields") or {}))
            if path == "/api/run":
                return self._send(202, f.run(body["packet"], ids=body.get("ids"), steps=body.get("steps") or ("render", "cut", "build"),
                                             only_missing=body.get("only_missing", True), seed_mode=body.get("seed_mode", "roster"),
                                             sampler_steps=body.get("sampler_steps"), cfg=body.get("cfg"), resolution=body.get("resolution"),
                                             retries=int(body.get("retries", 1)), record_seed=body.get("record_seed", True),
                                             batch=body.get("batch"), offset=body.get("offset", 0)))
            if path == "/api/stop":
                return self._send(200, f.stop())
            if path == "/api/build":
                return self._send(200, f.build(f.bfp.find_roster(body["packet"])))
            if path == "/api/handoff":
                return self._send(200, f.handoff(body["packet"], only_missing=body.get("only_missing", True)))
            return self._send(404, {"error": "no route " + path})
        except (KeyError, FileNotFoundError) as exc:
            return self._send(404, {"error": str(exc)})
        except RuntimeError as exc:
            return self._send(409, {"error": str(exc)})
        except Exception as exc:  # noqa: BLE001
            return self._send(500, {"error": "%s: %s" % (type(exc).__name__, exc)})


def make_server(forge, host="127.0.0.1", port=PORT):
    Handler.forge = forge
    srv = ThreadingHTTPServer((host, port), Handler)
    srv.daemon_threads = True
    return srv


# -------------------------------------------------------------------- cli --

def watch_loop(forge, directory, packet=None, interval=6):
    """Keep collecting renders from `directory` as they land — the headless twin of
    the page's auto-collect: an image model (or Comfy, or a download) writes a file
    that matches a pending job, and it is filed and cut without anyone dragging."""
    seen = set()
    print(f"watching {directory} for renders of pending jobs (Ctrl+C stops)")
    while True:
        time.sleep(interval)
        try:
            for it in forge.ingest(directory, packet=packet):
                key = (it["packet"], it["id"])
                if key in seen:
                    continue
                seen.add(key)
                print(f"  collected {it['id']} ({it['packet']}) ← {it['from']} → {it.get('plate') or it['render']}")
        except KeyboardInterrupt:
            print(f"stopped — {len(seen)} render(s) collected")
            return
        except Exception as exc:  # noqa: BLE001 — a bad folder must not kill the watch
            print(f"  ingest: {type(exc).__name__}: {exc}")


def main(argv=None):
    ap = argparse.ArgumentParser(description="NPC Forge — faction → roster → renders → token plates → Foundry packet")
    ap.add_argument("command", nargs="?", default="serve",
                    choices=["serve", "draft", "collect", "ingest", "prompt", "run", "cut", "build", "review", "replace", "handoff"])
    ap.add_argument("packet", nargs="?")
    ap.add_argument("--list", action="store_true", help="rosters and their art state, then exit")
    ap.add_argument("--host", default="127.0.0.1")
    ap.add_argument("--port", type=int, default=PORT)
    ap.add_argument("--url", default=None, help="ComfyUI server (default: COMFY_URL, else probe 127.0.0.1 ports 8188, 8000, 8189, 8190)")
    ap.add_argument("--no-browser", action="store_true")
    ap.add_argument("--faction", default=None, help="draft: faction id from data/factions.json")
    ap.add_argument("--name", default=None, help="draft: the packet's display name")
    ap.add_argument("--group", default=None, help="draft: the Foundry group folder (default: the faction's group)")
    ap.add_argument("--count", type=int, default=None, help="draft: how many entries (default plan: %s)" % ",".join(DEFAULT_PLAN))
    ap.add_argument("--plan", default=None, help="draft: tiers, e.g. 0.5,0.5,1,2,3,5")
    ap.add_argument("--input", default=None, help="draft/collect: roster input file (a JSON list of rows: name, look, tier, folder, framing, seed, site)")
    ap.add_argument("--from-site", action="store_true", help="collect: take the rows from the website's articles (--match filters them)")
    ap.add_argument("--match", default=None, help="collect --from-site / site candidates: only articles whose affiliation/title contains this")
    ap.add_argument("--limit", type=int, default=None, help="collect --from-site: how many candidates at most")
    ap.add_argument("--tier", default=None, help="collect: default tier for rows that don't name one")
    ap.add_argument("--folder", default=None, help="collect: default subfolder for rows that don't name one")
    ap.add_argument("--framing", default=None, help="draft/collect: framing preset (fullbody, bust, head) or a sentence of your own")
    ap.add_argument("--dir", default=None, help="ingest: the folder to collect renders from (Comfy output, Downloads, …)")
    ap.add_argument("--watch", action="store_true", help="ingest: keep collecting from --dir until Ctrl+C")
    ap.add_argument("--ids", default=None, help="run/cut: only these entry ids (comma-separated)")
    ap.add_argument("--all", action="store_true", help="run/cut: redo entries that already have art")
    ap.add_argument("--steps", default="render,cut,build", help="run: which steps (render,cut,build)")
    ap.add_argument("--random-seeds", action="store_true", help="run: roll new seeds instead of the roster's (the seed used is written back)")
    ap.add_argument("--retries", type=int, default=1)
    ap.add_argument("--batch", type=int, default=None, help="run/replace: process at most this many entries in roster order")
    ap.add_argument("--offset", type=int, default=0, help="run: skip this many selected entries before the batch")
    ap.add_argument("--status", default=None, help="review: pending, cut, accepted, or rejected")
    ap.add_argument("--notes", default="", help="review: optional human note")
    ap.add_argument("--website", default="fullBody", choices=["fullBody", "image", "both", "none"], help="replace: website field to publish")
    ap.add_argument("--no-foundry", action="store_true", help="replace: do not update actor/token JSON")
    ap.add_argument("--force", action="store_true", help="replace: publish without an accepted review")
    a = ap.parse_args(argv)
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    forge = Forge(url=a.url)
    if a.list:
        for r in forge.rosters():
            if r.get("error"):
                print(f"{r['packet']}: {r['error']}")
                continue
            c = r["counts"]
            print(f"{r['packet']}: {r['name']} — {c['entries']} entries, {c['rendered']} rendered, {c['plates']} plates, {c['actors']} actors")
        return 0
    if a.command == "draft":
        if not a.packet or not a.name:
            ap.error("draft needs <packet> and --name")
        rows = None
        if a.input:
            loaded = read_json(a.input, [])
            rows = loaded if isinstance(loaded, list) else (loaded.get("rows") or loaded.get("entries") or [])
        plan = a.plan.split(",") if a.plan else (DEFAULT_PLAN[:a.count] if a.count and a.count <= len(DEFAULT_PLAN) else
                                                 (DEFAULT_PLAN + ["2"] * (a.count - len(DEFAULT_PLAN)) if a.count else None))
        r = forge.draft(a.packet, a.name, faction=a.faction, group=a.group, plan=plan, rows=rows, framing=a.framing)
        print(f"drafted data/forge/{r['packet']}.json with {r['counts']['entries']} entries under {r['group']!r}; "
              f"write the looks, then `npc-forge.py run {r['packet']}` or `handoff {r['packet']}`")
        return 0
    if a.command == "collect":
        if not a.packet:
            ap.error("collect needs <packet>")
        if a.input:
            loaded = read_json(a.input, [])
            rows = loaded if isinstance(loaded, list) else (loaded.get("rows") or loaded.get("entries") or [])
        elif a.from_site:
            rows = forge.site_candidates(a.match)[: a.limit] if a.limit else forge.site_candidates(a.match)
        else:
            ap.error("collect needs --from-site or --input FILE")
        out = forge.collect(a.packet, rows, tier=a.tier or "1", folder=a.folder, framing=a.framing)
        print(f"collect: {len(out['added'])} new entr(ies) in data/forge/{a.packet}.json ({out['entries']} total): "
              + (", ".join(out["added"]) or "nothing new — every candidate was already in the roster"))
        return 0
    if a.command == "ingest":
        if not a.dir:
            ap.error("ingest needs --dir FOLDER")
        if a.watch:
            watch_loop(forge, a.dir, packet=a.packet)
            return 0
        out = forge.ingest(a.dir, packet=a.packet)
        for it in out:
            print(f"  collected {it['id']} ({it['packet']}) ← {it['from']} → {it.get('plate') or it['render']}")
        print(f"ingest: {len(out)} render(s) collected and cut" + ("" if out else " — nothing in that folder matched a pending job"))
        return 0
    if a.command == "prompt":
        if not a.packet:
            ap.error("prompt needs <packet>")
        r = forge.bfp.find_roster(a.packet)
        ids = [s.strip() for s in a.ids.split(",")] if a.ids else None
        for e in r["entries"]:
            if ids and e["id"] not in ids:
                continue
            print(f"{e['id']}  {e['name']}")
            print(f"  prompt:   {forge.bfp.prompt_for(r, e)}")
            print(f"  negative: {e.get('negative') or r.get('negative') or ''}")
            print(f"  seed: {e.get('seed')}  canvas: {'x'.join(str(v) for v in (e.get('render_size') or r.get('render_size') or [1408, 768]))}"
                  f"  → {rel(forge.bfp.render_file(r, e))}")
        return 0
    if a.command == "review":
        if not a.packet or not a.ids or not a.status:
            ap.error("review needs <packet> --ids id[,id] --status pending|cut|accepted|rejected")
        for entry_id in (part.strip() for part in a.ids.split(",") if part.strip()):
            print(f"{entry_id}: {forge.review_entry(a.packet, entry_id, a.status, a.notes)}")
        return 0
    if a.command == "replace":
        if not a.packet:
            ap.error("replace needs <packet> [--ids id[,id]]")
        ids = [part.strip() for part in a.ids.split(",") if part.strip()] if a.ids else None
        out = forge.replace_batch(a.packet, ids=ids, website=a.website, also_foundry=not a.no_foundry, batch=a.batch, force=a.force)
        for item in out["replaced"]:
            print(f"  replaced {item['id']} → {item['new']} ({item['foundry']} Foundry actor(s))")
        for item in out["skipped"]:
            print(f"  skipped {item['id']}: {item['reason']}", file=sys.stderr)
        print(f"replace: {len(out['replaced'])} published, {len(out['skipped'])} skipped")
        return 0 if not out["skipped"] else 1
    if a.command in ("run", "cut", "build", "handoff"):
        if not a.packet:
            ap.error(f"{a.command} needs <packet>")
        if a.command == "handoff":
            out = forge.handoff(a.packet, only_missing=not a.all)
            print(f"wrote {out['handoff']} and {out['jobs']} ({out['count']} render job(s))")
            return 0
        if a.command == "build":
            out = forge.build(forge.bfp.find_roster(a.packet))
            print(f"built {out['actors']} actors → {out['import']}" + (f" ({len(out['pending'])} awaiting art)" if out["pending"] else ""))
            return 0
        steps = ("cut", "build") if a.command == "cut" else tuple(s.strip() for s in a.steps.split(",") if s.strip())
        ids = [s.strip() for s in a.ids.split(",")] if a.ids else None
        info = forge.run(a.packet, ids=ids, steps=steps, only_missing=not a.all, seed_mode="random" if a.random_seeds else "roster", retries=a.retries,
                         batch=a.batch, offset=a.offset)
        job = forge.job(info["id"])
        shown = 0
        while job["alive"]:
            time.sleep(0.5)
            while shown < len(job["log"]):
                print(job["log"][shown])
                shown += 1
        while shown < len(job["log"]):
            print(job["log"][shown])
            shown += 1
        return 0 if job["ok"] else 1
    info = forge.connect()
    srv = make_server(forge, a.host, a.port)
    where = "http://%s:%d/" % ("127.0.0.1" if a.host in ("0.0.0.0", "") else a.host, srv.server_address[1])
    print("NPC Forge at %s" % where)
    print("ComfyUI: %s" % (("%s — %s" % (info["url"], info["engine"] or "no Qwen node")) if info["connected"] else "not running (open Comfy Desktop, then press Connect — drafting, cutting and building work without it)"))
    if not a.no_browser:
        threading.Timer(0.6, lambda: webbrowser.open(where)).start()
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("\nforge closed")
    return 0


if __name__ == "__main__":
    sys.exit(main())
