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
    python3 tools/npc-forge.py run <packet> [--only-missing] [--steps render,cut,build]
    python3 tools/npc-forge.py cut <packet>            # cut the renders in the folder (no Comfy needed)
    python3 tools/npc-forge.py handoff <packet>        # write npc-forge/<packet>/handoff.md + jobs.jsonl

Renders go through ComfyUI (COMFY_URL, else 127.0.0.1 ports 8188, 8000, 8189,
8190); the page can start Comfy Desktop. Pillow + numpy are needed for the cut.
"""

import argparse
import datetime as dt
import importlib.util
import json
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
        entries = []
        for e in r.get("entries") or []:
            render, plate = self.bfp.render_file(r, e), self.bfp.plate_file(r, e)
            entries.append({
                "id": e["id"], "name": e["name"], "folder": e.get("folder"), "tier": e.get("tier"), "role": e.get("role"),
                "cr": e.get("cr"), "type": e.get("type"), "size": e.get("size"), "seed": e.get("seed"), "look": e.get("look") or "",
                "prompt": self.bfp.prompt_for(r, e), "token_size": e.get("token_size") or 1,
                "render": rel(render) if os.path.exists(render) else None,
                "plate": rel(plate) if os.path.exists(plate) else None,
                "actor": os.path.exists(os.path.join(actors_dir, f"{prefix}{e['id']}.json")),
            })
        return {"packet": r["packet"], "name": r.get("name"), "title": r.get("title"), "faction": r.get("faction"), "group": r.get("group"),
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
                        "status": a.get("status") or "", "look": look})
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
                for f in os.listdir(directory):
                    if not f.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
                        continue
                    stem = re.sub(r"\.(png|jpe?g|webp)$", "", f, flags=re.I)
                    if f == os.path.basename(dst) or stem == e["id"] or stem.startswith(e["id"] + "-") or (slug and stem.startswith(slug + "-")):
                        cands.append(os.path.join(directory, f))
                if not cands:
                    continue
                src = max(cands, key=os.path.getmtime)
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                shutil.copyfile(src, dst)
                item = {"packet": r["packet"], "id": e["id"], "render": rel(dst), "from": rel(src)}
                if cut:
                    facts = self.cut_one(roster, e)
                    item.update({"plate": rel(self.bfp.plate_file(roster, e)), "border_clear": facts.get("border_clear")})
                got.append(item)
        return got

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
        if roster["group"] not in groups:
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
            resolution=None, retries=1, record_seed=True):
        roster = self.bfp.find_roster(packet)
        steps = tuple(steps)
        if "render" in steps and not (self.comfy and self.engine == "qwen21"):
            self.connect()
            if not (self.comfy and self.engine == "qwen21"):
                raise RuntimeError("no Qwen-Image-2.1 ComfyUI to render on — start Comfy Desktop and Connect, or run the cut/build steps only")
        want = [e for e in roster["entries"] if not ids or e["id"] in set(ids)]
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
        return {"connection": self.connection(), "rosters": self.rosters(), "job": self.current, "root": ROOT,
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
            if path == "/api/collect":
                rows = body.get("rows")
                if rows is None and body.get("fromSite") is not None:
                    rows = f.site_candidates(body.get("fromSite") or None)[: int(body.get("limit") or 8)]
                return self._send(200, f.collect(body["packet"], rows or [], tier=body.get("tier") or "1",
                                                 folder=body.get("folder"), framing=body.get("framing")))
            if path == "/api/ingest":
                return self._send(200, {"collected": f.ingest(body.get("dir") or "", packet=body.get("packet"), cut=body.get("cut", True))})
            if path == "/api/entry":
                return self._send(200, f.save_entry(body["packet"], body["id"], body.get("fields") or {}))
            if path == "/api/roster":
                return self._send(200, f.save_roster_fields(body["packet"], body.get("fields") or {}))
            if path == "/api/run":
                return self._send(202, f.run(body["packet"], ids=body.get("ids"), steps=body.get("steps") or ("render", "cut", "build"),
                                             only_missing=body.get("only_missing", True), seed_mode=body.get("seed_mode", "roster"),
                                             sampler_steps=body.get("sampler_steps"), cfg=body.get("cfg"), resolution=body.get("resolution"),
                                             retries=int(body.get("retries", 1)), record_seed=body.get("record_seed", True)))
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
                    choices=["serve", "draft", "collect", "ingest", "prompt", "run", "cut", "build", "handoff"])
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
        info = forge.run(a.packet, ids=ids, steps=steps, only_missing=not a.all, seed_mode="random" if a.random_seeds else "roster", retries=a.retries)
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
