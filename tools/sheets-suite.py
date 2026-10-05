#!/usr/bin/env python3
"""sheets-suite.py — the character-sheet pipeline as one process.

This is what ``start.py`` runs when "Character sheets" is ticked: everything
between "the GM exported the world" and "the sheets page is current and
Foundry has a packet to pull", stdlib only, no AI.

One pass, in order (each step is skipped when there is nothing to do):

  intake    Players.json newer than its split originals → fix-players-intake,
            split-players, rebuild-actors (the flat intake tree).
  split     a Foundry export ``<world>-all-actors.json`` (repo root, or the
            newest one in ~/Downloads, which is copied into the root) whose
            ``exportedAt`` is newer than the world mirror's manifest →
            ``foundry-bridge.py split --prune`` into actors/worlds/<world>/.
  promote   ``promote-player-sheets.py``: player characters carry character
            sheets, never NPC statblocks, and every player sheet's XP is the
            ledger's.
  spoils    ``spoils-to-changes.py``: what data/inventory.json says the party
            holds and the exported sheets lack → actors/changes/spoils-<world>.json
            (generated; the loot step of filing an event is one registry line).
  changes   every ``actors/changes/*.json`` whose ``appliesTo`` still covers
            the mirror's export (spoils of war, injuries) → ``apply --write``.
  check     ``foundry-bridge.py check`` on the mirror (never writes).
  build     ``build-character-sheets.py`` → data/sheets.json + the cast packet.
  combine   actors/worlds/<world>/import.json — ONE packet with everything:
            the world mirror, the generated cast and the era packets
            (actors/peachs-castle-955), an actor the world already has by
            name and type left out of the later sources — plus
            players-import.json (the Players folder only, for a quick
            player-sheet refresh). Both are git-ignored build artefacts.
  publish   into Foundry's own Data folder when it can be found (--foundry-data,
            WALUIPEDIA_FOUNDRY_DATA, FOUNDRY_VTT_DATA_PATH, or the OS default
            such as %LOCALAPPDATA%\FoundryVTT\Data): the packets + manifest +
            packets.json under Data/npc/waluipedia/<world>/ (the module's
            Sync button reads them from there, no URL needed), the Mass
            Import module itself under Data/modules/ (so Foundry runs the
            version in this checkout), and the repo-held portraits the sheets
            reference (foundry-bridge.py install-images). Then it asks the
            running Foundry server (Config/options.json's port, default
            30000, or --foundry-url) which module version IT serves, and says
            plainly whether the Data folder written to is the one Foundry
            uses and whether the world must be relaunched.
  verify    ``check-sheets.py`` and ``promote-player-sheets.py --check``.

Then it prints where everything is served (the site's #/sheets route and the
packet URLs to paste into Mass import → URL).

    python3 tools/sheets-suite.py                 # one pass
    python3 tools/sheets-suite.py --watch         # keep running; re-run when an export / Players.json / a changes file changes
    python3 tools/sheets-suite.py --check         # verify only — what tools/check-all.py runs; writes nothing
    python3 tools/sheets-suite.py --world midlands --port 8765

Exit status is non-zero when a step fails; in --watch mode the loop keeps
going and reports the failure on the next line.
"""
from __future__ import annotations

import argparse
import glob
import hashlib
import json
import os
import platform
import shutil
import subprocess
import sys
import time
import traceback
import urllib.error
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RM = os.path.join(ROOT, "Reputation-Matrix2")
ACTORS = os.path.join(RM, "actors")
WORLDS = os.path.join(ACTORS, "worlds")
CHANGES_DIR = os.path.join(ACTORS, "changes")
INVENTORY_JSON = os.path.join(RM, "data", "inventory.json")
PLAYERS_JSON = os.path.join(ROOT, "Players.json")
DEFAULT_WORLD = "midlands"
DEFAULT_PORT = 8765
PY = sys.executable
MODULE_ID = "waluipedia-mass-import"
MODULE_SRC = os.path.join(RM, "Foundry", "mass_import")
# Inside Foundry's Data folder: where the packets go (the module's Sync
# button looks here first) — next to the studio's npc/waluipedia/{art,actors}.
PACKET_DIR = "npc/waluipedia"
RAW_BASE = "https://raw.githubusercontent.com/mikegent01/bik/gh-pages/"

# Windows hands a *piped* stdout the ANSI code page (cp1252), which has no
# "→": under start.py the first arrow raised UnicodeEncodeError, the builder
# step was reported FAIL after it had already written everything, and the
# watcher died on its own packet line. The suite therefore speaks UTF-8 on
# its own streams, tells every child tool to do the same (PYTHONIOENCODING
# for its prints, PYTHONUTF8 for any file it opens without an encoding),
# decodes the children as UTF-8, and never dies on a character the terminal
# cannot show.
CHILD_ENV = dict(os.environ, PYTHONIOENCODING="utf-8", PYTHONUTF8="1")


def utf8_streams():
    for stream in (sys.stdout, sys.stderr):
        try:
            stream.reconfigure(encoding="utf-8", errors="replace")
        except (AttributeError, ValueError):
            pass

TOOLS = {
    "bridge": "tools/foundry-bridge.py",
    "promote": "tools/promote-player-sheets.py",
    "build": "tools/build-character-sheets.py",
    "check_sheets": "tools/check-sheets.py",
    "fix_intake": "tools/fix-players-intake.py",
    "split_players": "tools/split-players.py",
    "rebuild_actors": "tools/rebuild-actors.py",
    "organize": "tools/organize-actors.py",
    "spoils": "tools/spoils-to-changes.py",
}


def say(text=""):
    print(text, flush=True)


def read_json(path):
    with open(path, encoding="utf-8") as fh:
        return json.load(fh)


def run(argv, label, check=True):
    """Run a repo tool, stream nothing, return (ok, tail of output)."""
    proc = subprocess.run([PY] + argv, cwd=ROOT, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                          encoding="utf-8", errors="replace", env=CHILD_ENV)
    out = (proc.stdout or "").rstrip()
    tail = out.splitlines()[-1] if out else ""
    ok = proc.returncode == 0
    say(f"  {label:<9}: {'ok' if ok else 'FAIL'} — {tail}" if tail else f"  {label:<9}: {'ok' if ok else 'FAIL'}")
    if not ok and out:
        for line in out.splitlines()[-12:-1]:
            say("            " + line)
    return ok, out


# -------------------------------------------------------------------- exports

def export_world(path):
    """`midlands-all-actors.json` -> `midlands`; `midlands-all-actors (2).json` too."""
    base = os.path.basename(path)
    if "-all-actors" not in base or not base.endswith(".json"):
        return None
    return base.split("-all-actors")[0] or None


def export_stamp(path):
    """The export's exportedAt (the module writes it), else the file mtime as ISO."""
    try:
        with open(path, encoding="utf-8") as fh:
            head = fh.read(4096)
        i = head.find('"exportedAt"')
        if i >= 0:
            j = head.find('"', head.find(":", i) + 1)
            k = head.find('"', j + 1)
            if j > 0 and k > j:
                return head[j + 1:k]
    except OSError:
        pass
    return time.strftime("%Y-%m-%dT%H:%M:%S", time.gmtime(os.path.getmtime(path))) + ".000Z"


def find_exports(world, downloads=None, extra_dirs=()):
    """Every candidate export for `world`, newest stamp first: (path, stamp).
    Looks in the repo root, ~/Downloads (the Mass export button) and `extra_dirs`
    — the module's export-back folder inside Foundry's Data (1.7: the GM's
    client writes <Data>/npc/waluipedia/<world>/export/<world>-all-actors.json
    a while after the last change to any actor)."""
    dirs = [ROOT]
    downloads = downloads if downloads is not None else os.path.join(os.path.expanduser("~"), "Downloads")
    if downloads and os.path.isdir(downloads):
        dirs.append(downloads)
    for d in extra_dirs or ():
        if d and os.path.isdir(d) and d not in dirs:
            dirs.append(d)
    found = []
    for d in dirs:
        for p in glob.glob(os.path.join(d, f"{world}-all-actors*.json")):
            if export_world(p) == world:
                found.append((p, export_stamp(p)))
    return sorted(found, key=lambda t: t[1], reverse=True)


def mirror_stamp(world):
    manifest = os.path.join(WORLDS, world, "manifest.json")
    if not os.path.exists(manifest):
        return None
    try:
        return read_json(manifest).get("exportedAt")
    except (OSError, ValueError):
        return None


def export_is_newer(export_stamp_, mirror_stamp_):
    """ISO-8601 Zulu stamps compare as strings; a mirror without a manifest is always stale."""
    if not mirror_stamp_:
        return True
    return str(export_stamp_) > str(mirror_stamp_)


# ---------------------------------------------------------------------- steps

def step_intake(write):
    originals = glob.glob(os.path.join(ACTORS, "original-fvtt-Actor-*.json"))
    if not os.path.exists(PLAYERS_JSON) or not originals:
        return True
    newest = max(os.path.getmtime(p) for p in originals)
    if os.path.getmtime(PLAYERS_JSON) <= newest:
        return True
    if not write:
        say("  intake   : Players.json is newer than its split originals (run without --check to re-split)")
        return True
    ok = True
    for key, label in (("fix_intake", "intake"), ("split_players", "intake"), ("rebuild_actors", "intake")):
        ok = run([TOOLS[key]], label)[0] and ok
        if not ok:
            break
    return ok


def export_back_dir(foundry_data, world):
    """Where the module's export-back lands inside Data (None without a Data folder)."""
    if not foundry_data:
        return None
    return os.path.join(published_dir(foundry_data, world), "export")


def step_split(world, write, downloads=None, extra_dirs=()):
    # --check only looks at the committed input (the repo-root export): the
    # mirror in git must be the split of the export in git.
    exports = find_exports(world, downloads if write else "", extra_dirs if write else ())
    if not exports:
        say(f"  split    : no {world}-all-actors.json in the repo root{'' if not write else ' or Downloads'} — using the mirror as it is")
        return True
    path, stamp = exports[0]
    mirror = mirror_stamp(world)
    if not export_is_newer(stamp, mirror):
        say(f"  split    : mirror is current (export {mirror})")
        return True
    if not write:
        say(f"  split    : FAIL — {os.path.relpath(path, ROOT)} ({stamp}) is newer than the mirror ({mirror}); run tools/sheets-suite.py to split it")
        return False
    root_copy = os.path.join(ROOT, f"{world}-all-actors.json")
    if os.path.abspath(path) != os.path.abspath(root_copy):
        shutil.copyfile(path, root_copy)
        say(f"  split    : copied {path} -> {os.path.relpath(root_copy, ROOT)}")
    out_dir = os.path.join(WORLDS, world)
    return run([TOOLS["bridge"], "split", os.path.relpath(root_copy, ROOT), "--out", os.path.relpath(out_dir, ROOT), "--prune"], "split")[0]


def changes_for(world):
    """Changes files that still apply to the mirror's export, oldest first."""
    stamp = mirror_stamp(world) or ""
    out = []
    for p in sorted(glob.glob(os.path.join(CHANGES_DIR, "*.json"))):
        try:
            spec = read_json(p)
        except (OSError, ValueError):
            say(f"  changes  : {os.path.relpath(p, ROOT)} is not valid JSON — skipped")
            continue
        applies = spec.get("appliesTo") if isinstance(spec, dict) else None
        if isinstance(applies, dict):
            if applies.get("world") and applies["world"] != world:
                continue
            until = applies.get("exportedAtOrBefore")
            if until and stamp and str(stamp) > str(until):
                continue  # a later export already carries the table's version of these changes
        out.append(p)
    return out


def step_spoils(world, write):
    """The registry's holdings as a generated changes file (a check in check mode)."""
    argv = [TOOLS["spoils"], "--world", world, "--quiet"] + ([] if write else ["--check"])
    return run(argv, "spoils")[0]


def step_changes(world, write):
    files = changes_for(world)
    if not files:
        say("  changes  : none apply to this export")
        return True
    ok = True
    mirror = os.path.relpath(os.path.join(WORLDS, world), ROOT)
    for p in files:
        argv = [TOOLS["bridge"], "apply", os.path.relpath(p, ROOT), mirror] + (["--write"] if write else [])
        ok = run(argv, "changes")[0] and ok
    return ok


# --------------------------------------------------------- Foundry's Data

def looks_like_foundry_data(path):
    """Foundry's user-data `Data` folder: it holds worlds/, systems/ or modules/."""
    return bool(path) and os.path.isdir(path) and any(os.path.isdir(os.path.join(path, d)) for d in ("worlds", "systems", "modules"))


def foundry_data_candidates(home=None, sysname=None, environ=None):
    """Where Foundry keeps user data by OS (Config/options.json's dataPath first)."""
    env = os.environ if environ is None else environ
    home = home or os.path.expanduser("~")
    sysname = sysname or platform.system()
    roots = []
    if sysname == "Windows":
        roots.append(os.path.join(env.get("LOCALAPPDATA") or os.path.join(home, "AppData", "Local"), "FoundryVTT"))
    elif sysname == "Darwin":
        roots.append(os.path.join(home, "Library", "Application Support", "FoundryVTT"))
    else:
        roots += [os.path.join(home, ".local", "share", "FoundryVTT"), os.path.join(home, "foundrydata"), "/home/foundry/foundrydata"]
    out = []
    for root in roots:
        try:
            custom = read_json(os.path.join(root, "Config", "options.json")).get("dataPath")
        except (OSError, ValueError, AttributeError):
            custom = None
        if custom:
            out.append(os.path.join(os.path.expanduser(str(custom)), "Data"))
        out.append(os.path.join(root, "Data"))
    return out


def find_foundry_data(explicit=None, environ=None):
    """(path, how): --foundry-data, WALUIPEDIA_FOUNDRY_DATA, FOUNDRY_VTT_DATA_PATH
    (Foundry's own variable, the folder ABOVE Data), then the OS default.
    `how` says which; a given path that is not a Data folder is reported."""
    env = os.environ if environ is None else environ
    for how, cand in (("--foundry-data", explicit), ("WALUIPEDIA_FOUNDRY_DATA", env.get("WALUIPEDIA_FOUNDRY_DATA")),
                      ("FOUNDRY_VTT_DATA_PATH", env.get("FOUNDRY_VTT_DATA_PATH"))):
        if not cand:
            continue
        cand = os.path.expanduser(os.path.expandvars(str(cand).strip().strip('"')))
        if looks_like_foundry_data(cand):
            return cand, how
        if looks_like_foundry_data(os.path.join(cand, "Data")):
            return os.path.join(cand, "Data"), how
        return None, f"{how} = {cand} is not a Foundry Data folder (no worlds/ systems/ modules/ inside)"
    for cand in foundry_data_candidates(environ=env):
        if looks_like_foundry_data(cand):
            return cand, "found"
    return None, "not found"


def same_file(a, b):
    try:
        if os.path.getsize(a) != os.path.getsize(b):
            return False
        with open(a, "rb") as fa, open(b, "rb") as fb:
            return fa.read() == fb.read()
    except OSError:
        return False


def module_files():
    """Every file of the module as shipped in the repo: (abs path, rel path)."""
    out = []
    for cur, subdirs, files in os.walk(MODULE_SRC):
        subdirs.sort()
        for fn in sorted(files):
            full = os.path.join(cur, fn)
            out.append((full, os.path.relpath(full, MODULE_SRC).replace(os.sep, "/")))
    return out


def installed_module_version(foundry_data):
    try:
        return read_json(os.path.join(foundry_data, "modules", MODULE_ID, "module.json")).get("version")
    except (OSError, ValueError, AttributeError):
        return None


def install_module(foundry_data, write):
    """Keep <Data>/modules/waluipedia-mass-import/ identical to the repo's module.
    Returns (installed version before, repo version, changed rel paths)."""
    before = installed_module_version(foundry_data)
    repo_version = read_json(os.path.join(MODULE_SRC, "module.json")).get("version")
    dest = os.path.join(foundry_data, "modules", MODULE_ID)
    changed = []
    for src, rel in module_files():
        dst = os.path.join(dest, *rel.split("/"))
        if same_file(src, dst):
            continue
        changed.append(rel)
        if write:
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            shutil.copy2(src, dst)
    return before, repo_version, changed


def foundry_options(environ=None, home=None, sysname=None):
    """Foundry's Config/options.json (port, dataPath, ...) from the OS root, or {}."""
    env = os.environ if environ is None else environ
    home = home or os.path.expanduser("~")
    sysname = sysname or platform.system()
    if sysname == "Windows":
        roots = [os.path.join(env.get("LOCALAPPDATA") or os.path.join(home, "AppData", "Local"), "FoundryVTT")]
    elif sysname == "Darwin":
        roots = [os.path.join(home, "Library", "Application Support", "FoundryVTT")]
    else:
        roots = [os.path.join(home, ".local", "share", "FoundryVTT"), os.path.join(home, "foundrydata"), "/home/foundry/foundrydata"]
    for root in roots:
        opts = read_json_quiet(os.path.join(root, "Config", "options.json"))
        if isinstance(opts, dict):
            return opts
    return {}


def foundry_server_url(explicit=None, environ=None, options=None):
    """Where the Foundry server answers: --foundry-url, WALUIPEDIA_FOUNDRY_URL,
    else http://127.0.0.1:<port from Config/options.json, default 30000>."""
    env = os.environ if environ is None else environ
    for cand in (explicit, env.get("WALUIPEDIA_FOUNDRY_URL")):
        if cand and str(cand).strip():
            return str(cand).strip().rstrip("/")
    opts = foundry_options(environ=env) if options is None else options
    port = opts.get("port") or 30000
    return f"http://127.0.0.1:{port}"


def probe_served_module(base_url, timeout=2.0):
    """Ask the running Foundry server for modules/<id>/module.json.
    Returns (state, version): state is 'served' (version filled), 'missing'
    (server up, no such module), 'down' (nothing answers) or 'odd' (answered
    with something that is not a module manifest)."""
    url = f"{base_url}/modules/{MODULE_ID}/module.json?t={int(time.time())}"
    try:
        req = urllib.request.Request(url, headers={"Cache-Control": "no-cache", "User-Agent": "waluipedia-sheets-suite"})
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            body = resp.read()
    except urllib.error.HTTPError as exc:
        return ("missing" if exc.code == 404 else "odd"), None
    except (urllib.error.URLError, OSError, ValueError):
        return "down", None
    try:
        data = json.loads(body.decode("utf-8"))
        if isinstance(data, dict) and data.get("id") == MODULE_ID:
            return "served", data.get("version")
    except (ValueError, UnicodeDecodeError):
        pass
    return "odd", None


def served_module_verdict(state, served, repo_version, foundry_data, base_url):
    """One or two plain lines: does the Foundry server serve the module just
    installed (so only the world needs relaunching), or does it read another
    Data folder altogether?"""
    data_hint = f"Setup -> Configuration shows the User Data Path; run again with --foundry-data \"<that path>\\Data\" (start.py: the Foundry Data folder box)"
    if state == "down":
        return [f"  foundry  : no Foundry server answered at {base_url} — start Foundry (or pass --foundry-url) and the suite will say which module version it serves"]
    if state == "missing":
        return [f"  foundry  : the server at {base_url} has NO modules/{MODULE_ID} — it is not reading {foundry_data}; {data_hint}"]
    if state == "odd":
        return [f"  foundry  : {base_url} answered but not with the module's manifest (another program on that port?) — try --foundry-url"]
    if served == repo_version:
        return [f"  foundry  : the server at {base_url} serves module {served} (the copy just installed) — if the console does not say '[{MODULE_ID}] {served} ready', relaunch the world: Game Settings -> Return to Setup -> Launch World, then Ctrl+F5 (F12 -> Network -> Disable cache -> F5 in the Foundry app)"]
    return [f"  foundry  : the server at {base_url} serves module {served or '?'}, NOT the {repo_version} just written to {foundry_data} — Foundry reads a different Data folder; {data_hint}"]


def published_dir(foundry_data, world):
    return os.path.join(foundry_data, *PACKET_DIR.split("/"), world)


def packets_digest(packet_files):
    """One hash over the packets' bytes — the module syncs again only when this
    changes, not every time the suite passes."""
    h = hashlib.sha1()
    for key in sorted(packet_files):
        h.update(key.encode("utf-8"))
        try:
            with open(packet_files[key], "rb") as fh:
                h.update(fh.read())
        except OSError:
            pass
    return h.hexdigest()


def packets_info(world, port, packet_files, published_at, digest=None):
    """What <Data>/npc/waluipedia/<world>/packets.json says: stamps the module
    shows in its summary, and the other places the same packets can be found
    (the launcher, and GitHub where `everything` is manifest + cast + era
    packets the module merges itself)."""
    u = urls(world, port)
    return {
        "format": "waluipedia-packets/2",
        "world": world,
        "exportedAt": mirror_stamp(world),
        "publishedAt": published_at,
        "publishedBy": "tools/sheets-suite.py",
        "digest": digest or packets_digest(packet_files),
        "packets": {k: os.path.basename(v) for k, v in packet_files.items()},
        "launcher": {"everything": u["everything"], "players": u["players"], "sheets": u["sheets"]},
        "github": {"manifest": f"{RAW_BASE}Reputation-Matrix2/actors/worlds/{world}/manifest.json",
                   "cast": f"{RAW_BASE}Reputation-Matrix2/actors/cast/import.json",
                   "era": f"{RAW_BASE}Reputation-Matrix2/actors/peachs-castle-955/import.json"},
    }


def remove_legacy_cast_dir(foundry_data):
    """Suites before module 1.5 published a separate cast packet under
    npc/waluipedia/cast/; the cast now rides in the world's import.json. Remove
    the old dir when it holds nothing but what the suite put there."""
    legacy = os.path.join(foundry_data, *PACKET_DIR.split("/"), "cast")
    if not os.path.isdir(legacy):
        return False
    try:
        if set(os.listdir(legacy)) - {"import.json", "packets.json"}:
            return False
        shutil.rmtree(legacy)
        return True
    except OSError:
        return False


def read_json_quiet(path):
    try:
        with open(path, encoding="utf-8") as fh:
            return json.load(fh)
    except (OSError, ValueError):
        return None


def step_publish(world, write, port, foundry_data, how, install=True, images=True, foundry_url=None):
    """Put the packets where Foundry can see them without a URL — the Data
    folder — keep the Mass Import module there current, and copy the repo-held
    art the sheets reference. Nothing here touches the repo."""
    if not foundry_data:
        say(f"  publish  : Foundry Data folder {how} — Sync in Foundry falls back to the launcher URL, then GitHub"
            "  (point at it with --foundry-data or WALUIPEDIA_FOUNDRY_DATA)")
        return True
    whole, pl = packet_paths(world)
    dest = published_dir(foundry_data, world)
    packet_files = {"everything": whole, "players": pl, "manifest": os.path.join(WORLDS, world, "manifest.json")}
    present = {k: v for k, v in packet_files.items() if os.path.exists(v)}
    if not write:
        before, repo_version, changed = install_module(foundry_data, False)
        say(f"  publish  : Foundry Data {how}: {foundry_data} — would copy {', '.join(os.path.basename(v) for v in present.values()) or 'nothing'} to {os.path.relpath(dest, foundry_data)}"
            + (f"; module {before or 'absent'} -> {repo_version} ({len(changed)} file(s))" if changed else f"; module {repo_version} current"))
        return True
    ok = True
    os.makedirs(dest, exist_ok=True)
    copied = []
    for key, src in present.items():
        dst = os.path.join(dest, os.path.basename(src))
        if not same_file(src, dst):
            shutil.copy2(src, dst)
            copied.append(os.path.basename(src))
    info_path = os.path.join(dest, "packets.json")
    digest = packets_digest(present)
    previous = read_json_quiet(info_path) or {}
    # the stamp moves only when a packet's bytes do, so the module's automatic
    # Sync runs once per real change rather than once per suite pass
    stamp = previous.get("publishedAt") if previous.get("digest") == digest and previous.get("publishedAt") else time.strftime("%Y-%m-%dT%H:%M:%S%z")
    info = packets_info(world, port, present, stamp, digest)
    if info != previous:
        tmp = info_path + ".tmp"
        with open(tmp, "w", encoding="utf-8") as fh:
            json.dump(info, fh, indent=2, ensure_ascii=False)
            fh.write("\n")
        os.replace(tmp, info_path)
    rel_dest = os.path.relpath(dest, foundry_data).replace(os.sep, "/")
    if remove_legacy_cast_dir(foundry_data):
        copied.append("(removed the old cast/ packet dir)")
    say(f"  publish  : {foundry_data} ({how}) — {', '.join(copied) if copied else 'packets unchanged'} -> {rel_dest}/  (Sync reads {rel_dest}/import.json)")
    if install:
        try:
            before, repo_version, changed = install_module(foundry_data, True)
        except OSError as exc:
            say(f"  module   : could not write modules/{MODULE_ID}: {exc}")
            ok = False
        else:
            if changed:
                say(f"  module   : {MODULE_ID} {before or 'absent'} -> {repo_version} installed under modules/ ({len(changed)} file(s)) — Setup -> relaunch the world, then Ctrl+F5"
                    + ("; enable it under Game Settings -> Manage Modules" if not before else ""))
            else:
                say(f"  module   : {MODULE_ID} {repo_version} is current")
            base_url = foundry_server_url(foundry_url)
            state, served = probe_served_module(base_url)
            for line in served_module_verdict(state, served, repo_version, foundry_data, base_url):
                say(line)
    if images:
        dirs = packet_sources(world)
        ok = run([TOOLS["bridge"], "install-images"] + [os.path.relpath(d, ROOT) for d in dirs] + ["--foundry-data", foundry_data], "images", check=False)[0] and ok
    return ok


def packet_paths(world):
    base = os.path.join(WORLDS, world)
    return os.path.join(base, "import.json"), os.path.join(base, "players-import.json")


def packet_sources(world):
    """The trees one import carries, in precedence order: the world mirror,
    the generated cast, the era packets the folder scheme names."""
    dirs = [os.path.join(WORLDS, world), os.path.join(ACTORS, "cast")]
    scheme = read_json_quiet(os.path.join(ACTORS, "folders.json")) or {}
    dirs += [os.path.join(ACTORS, d) for d in (scheme.get("eras") or {})]
    return [d for d in dirs if os.path.isdir(d)]


def step_combine(world, write):
    base = os.path.join(WORLDS, world)
    players = os.path.join(base, "Players")
    whole, pl = packet_paths(world)
    ok = True
    if write:
        sources = [os.path.relpath(d, ROOT) for d in packet_sources(world)]
        ok = run([TOOLS["bridge"], "combine"] + sources + ["--out", os.path.relpath(whole, ROOT), "--world", world], "combine")[0] and ok
        if os.path.isdir(players):
            ok = run([TOOLS["bridge"], "combine", os.path.relpath(players, ROOT), "--out", os.path.relpath(pl, ROOT), "--world", world], "combine")[0] and ok
    else:
        say("  combine  : (skipped under --check; packets are build artefacts)")
    return ok


def urls(world, port):
    whole, pl = packet_paths(world)
    base = f"http://127.0.0.1:{port}/"
    return {
        "sheets": base + "#/sheets",
        "everything": base + os.path.relpath(whole, ROOT).replace(os.sep, "/"),
        "players": base + os.path.relpath(pl, ROOT).replace(os.sep, "/"),
    }


# ------------------------------------------------------------------- git sync

def git(args, check=False):
    """Run git in the repo; (returncode, output). Never raises on a non-zero exit."""
    try:
        proc = subprocess.run(["git"] + list(args), cwd=ROOT, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                              encoding="utf-8", errors="replace", env=CHILD_ENV)
    except OSError as exc:
        return 127, str(exc)
    out = (proc.stdout or "").strip()
    if check and proc.returncode:
        raise RuntimeError(out or f"git {' '.join(args)} failed")
    return proc.returncode, out


def git_state(fetch=True):
    """{branch, upstream, dirty, behind, ahead, ok, error} — the facts the sync leg needs."""
    st = {"branch": None, "upstream": None, "dirty": [], "behind": 0, "ahead": 0, "ok": False, "error": None}
    code, out = git(["rev-parse", "--abbrev-ref", "HEAD"])
    if code:
        st["error"] = out or "not a git checkout"
        return st
    st["branch"] = out
    code, out = git(["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{u}"])
    st["upstream"] = out if not code else None
    if fetch and st["upstream"]:
        code, out = git(["fetch", "-q", "origin"])
        if code:
            st["error"] = f"fetch: {out.splitlines()[-1] if out else 'failed'}"
    code, out = git(["status", "--porcelain"])
    st["dirty"] = [line for line in out.splitlines() if line.strip()] if not code else []
    if st["upstream"]:
        code, out = git(["rev-list", "--left-right", "--count", f"HEAD...{st['upstream']}"])
        if not code and out:
            ahead, behind = (out.split() + ["0", "0"])[:2]
            st["ahead"], st["behind"] = int(ahead), int(behind)
    st["ok"] = st["error"] is None
    return st


def git_sync_paths(world):
    """What the suite itself writes and may commit: the mirror, the generated cast, the site index, the root export, the generated spoils file."""
    return [os.path.relpath(p, ROOT).replace(os.sep, "/") for p in (
        os.path.join(WORLDS, world), os.path.join(ACTORS, "cast"), os.path.join(ROOT, "data", "sheets.json"),
        os.path.join(ROOT, f"{world}-all-actors.json"), os.path.join(ACTORS, "changes", f"spoils-{world}.json"))]


def git_pull(world=None):
    """Before a pass: bring the checkout up to date when that is safe.
    Returns (pulled: bool, message). Never touches a dirty tree except through
    --autostash on a rebase of our own earlier commits."""
    st = git_state(fetch=True)
    if not st["ok"]:
        return False, f"git: {st['error']}"
    if not st["upstream"]:
        return False, f"git: branch {st['branch']} tracks nothing — not pulling"
    if st["behind"] == 0:
        return False, f"git: {st['branch']} is current with {st['upstream']}" + (f" ({st['ahead']} local commit(s) to push)" if st["ahead"] else "")
    own = set(git_sync_paths(world)) if world else set()
    # porcelain rows: "XY path" — an untracked directory shows as "?? dir/"
    foreign = [d for d in st["dirty"] if not any(d[3:].startswith(p) or p.startswith(d[3:]) for p in own)]
    if foreign:
        return False, f"git: {st['behind']} commit(s) behind {st['upstream']} but the tree has {len(foreign)} uncommitted change(s) outside the suite's files — not pulling (commit or stash them)"
    if st["ahead"]:
        code, out = git(["pull", "--rebase", "--autostash", "-q", "origin", st["upstream"].split("/", 1)[1]])
        how = "rebased"
    else:
        code, out = git(["pull", "--ff-only", "-q", "origin", st["upstream"].split("/", 1)[1]])
        how = "fast-forwarded"
    if code:
        return False, f"git: pull failed — {out.splitlines()[-1] if out else 'unknown'}"
    return True, f"git: {how} {st['behind']} commit(s) from {st['upstream']} — the module / tools / sheets may have changed"


def git_commit_and_push(world, stamp=None, push=True):
    """After a write pass: commit what the suite changed under its own paths and push the current branch.
    Returns (committed: bool, pushed: bool, message)."""
    paths = [p for p in git_sync_paths(world) if os.path.exists(os.path.join(ROOT, p))]
    code, out = git(["status", "--porcelain", "--"] + paths) if paths else (0, "")
    if code:
        return False, False, f"git: {out}"
    changed = [line for line in out.splitlines() if line.strip()]
    if not changed:
        return False, False, "git: nothing of the suite's to commit"
    code, out = git(["add", "-A", "--"] + paths)
    if code:
        return False, False, f"git: add failed — {out.splitlines()[-1] if out else 'unknown'}"
    ident = []
    if git(["config", "user.name"])[0] or git(["config", "user.email"])[0]:
        ident = ["-c", "user.name=sheets-suite", "-c", "user.email=sheets-suite@users.noreply.github.com"]
    msg = f"sheets-suite: {world} mirror" + (f" from export {stamp}" if stamp else "") + f" — {len(changed)} file(s)"
    code, out = git(ident + ["commit", "-q", "-m", msg])
    if code:
        return False, False, f"git: commit failed — {out.splitlines()[-1] if out else 'unknown'}"
    if not push:
        return True, False, f"git: committed {len(changed)} file(s) ({msg!r}) — not pushing"
    st = git_state(fetch=False)
    if not st["upstream"]:
        return True, False, f"git: committed {len(changed)} file(s); branch {st['branch']} tracks nothing — not pushed"
    code, out = git(["push", "-q", "origin", f"HEAD:{st['upstream'].split('/', 1)[1]}"])
    if code:
        return True, False, f"git: committed {len(changed)} file(s); push failed — {out.splitlines()[-1] if out else 'unknown'} (the next pass retries)"
    return True, True, f"git: committed and pushed {len(changed)} file(s) to {st['upstream']}"


def one_pass(world, write, port, downloads=None, foundry=None, git_sync=False):
    """foundry: {"data": explicit path or None, "install": bool, "images": bool, "publish": bool}
    git_sync: pull (fast-forward) before, commit + push the suite's own files after."""
    f = {"data": None, "install": True, "images": True, "publish": True, **(foundry or {})}
    t0 = time.time()
    say(f"sheets-suite: {'pass' if write else 'check'} for world {world!r} — {time.strftime('%H:%M:%S')}")
    mirror = os.path.relpath(os.path.join(WORLDS, world), ROOT)
    ok = True
    if git_sync and write:
        say("  git      : " + git_pull(world)[1])
    data_dir, how = find_foundry_data(f["data"]) if f["publish"] else (None, None)
    export_dirs = [export_back_dir(data_dir, world)] if data_dir else []
    stamp_before = mirror_stamp(world)
    ok = step_intake(write) and ok
    ok = step_split(world, write, downloads, export_dirs) and ok
    if not os.path.isdir(os.path.join(WORLDS, world)):
        say(f"  mirror   : {mirror} does not exist — export the world with the Mass Import module first")
        return False
    if write:
        ok = run([TOOLS["promote"]], "promote")[0] and ok
    ok = step_spoils(world, write) and ok
    ok = step_changes(world, write) and ok
    # folders + tags the way the website organizes its cast (actors/folders.json)
    ok = run([TOOLS["organize"], "--world", world, "--quiet"] + ([] if write else ["--check"]), "organize")[0] and ok
    ok = run([TOOLS["bridge"], "check", mirror], "check")[0] and ok
    ok = run([TOOLS["build"]] + ([] if write else ["--check"]), "build")[0] and ok
    ok = step_combine(world, write) and ok
    if f["publish"]:
        ok = step_publish(world, write, port, data_dir, how, install=f["install"], images=f["images"], foundry_url=f.get("url")) and ok
    ok = run([TOOLS["check_sheets"]], "verify")[0] and ok
    ok = run([TOOLS["promote"], "--check"], "verify")[0] and ok
    if git_sync and write:
        say("  git      : " + git_commit_and_push(world, stamp=mirror_stamp(world) if mirror_stamp(world) != stamp_before else None)[2] if ok
            else "  git      : the pass failed — nothing committed")
    u = urls(world, port)
    say(f"  {'done' if ok else 'FAILED'}     : {time.time() - t0:.1f}s")
    if write:
        say(f"  sheets   : {u['sheets']}")
        say(f"  foundry  : Sync runs by itself when the world loads (or Actors sidebar -> Sync): everything, from Data, else {u['everything']}, else GitHub")
        say(f"  foundry  : the console's first module line must read '[{MODULE_ID}] <version> ready' — from 1.6 a newer install runs after a plain F5; an older world needs Return to Setup -> Launch World, then Ctrl+F5 once")
        say(f"  packet   : {u['everything']}  (everything: world + cast + eras; Mass import → URL if you ever need it by hand)")
        say(f"  packet   : {u['players']}  (the Players folder only)")
        if export_dirs:
            say(f"  back     : the module exports the world to {os.path.join(export_dirs[0], f'{world}-all-actors.json')} after changes — this pass picks it up (--watch: by itself)")
    return ok


# ---------------------------------------------------------------------- watch

def watch_inputs(world, downloads=None, extra_dirs=()):
    paths = [p for p, _ in find_exports(world, downloads, extra_dirs)] + glob.glob(os.path.join(CHANGES_DIR, "*.json"))
    paths.append(INVENTORY_JSON)  # a filed spoil is a line in the registry — that re-runs the pass too
    if os.path.exists(PLAYERS_JSON):
        paths.append(PLAYERS_JSON)
    out = {}
    for p in paths:
        try:
            out[p] = os.path.getmtime(p)
        except OSError:
            pass
    return out


def guarded_pass(world, port, downloads=None, foundry=None, git_sync=False):
    """A pass under --watch: a crash is reported like a failed step and the
    watcher stays up for the next export."""
    try:
        return one_pass(world, True, port, downloads, foundry, git_sync)
    except Exception as exc:  # noqa: BLE001 — anything; the watcher must survive
        say(f"  FAILED   : {type(exc).__name__}: {exc}")
        for line in traceback.format_exc().rstrip().splitlines()[-6:]:
            say("            " + line)
        return False


def watch(world, port, interval, downloads=None, foundry=None, git_sync=False, git_interval=300.0):
    f = foundry or {}
    data_dir = find_foundry_data(f.get("data"))[0] if f.get("publish", True) else None
    extra = [export_back_dir(data_dir, world)] if data_dir else []
    seen = watch_inputs(world, downloads, extra)
    guarded_pass(world, port, downloads, foundry, git_sync)
    say(f"  watching : {len(seen)} input file(s) every {interval:g}s" + (f"; GitHub every {git_interval:g}s" if git_sync else "") + " — Ctrl-C to stop")
    last_git = time.time()
    while True:
        time.sleep(interval)
        now = watch_inputs(world, downloads, extra)
        if now != seen:
            changed = sorted(set(p for p in set(now) | set(seen) if now.get(p) != seen.get(p)))
            say("")
            say("  changed  : " + ", ".join(os.path.basename(p) for p in changed))
            # let a download finish landing before reading it
            time.sleep(1.0)
            seen = watch_inputs(world, downloads, extra)
            guarded_pass(world, port, downloads, foundry, git_sync)
            last_git = time.time()
        elif git_sync and time.time() - last_git >= git_interval:
            # GitHub moved (a merged PR, a newer module): pull and run a pass so the module / packets follow
            last_git = time.time()
            pulled, msg = git_pull(world)
            if pulled:
                say("")
                say("  git      : " + msg)
                seen = watch_inputs(world, downloads, extra)
                guarded_pass(world, port, downloads, foundry, git_sync)


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0], formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--world", default=DEFAULT_WORLD, help=f"world id (default {DEFAULT_WORLD})")
    ap.add_argument("--port", type=int, default=DEFAULT_PORT, help=f"the local site's port, for the URLs it prints (default {DEFAULT_PORT})")
    ap.add_argument("--watch", action="store_true", help="keep running; re-run the pass when an export, Players.json, data/inventory.json or a changes file changes")
    ap.add_argument("--interval", type=float, default=2.0, help="seconds between polls in --watch (default 2)")
    ap.add_argument("--check", action="store_true", help="verify only; write nothing")
    ap.add_argument("--downloads", default=None, help="folder to scan for fresh exports (default ~/Downloads; '' = none)")
    ap.add_argument("--foundry-data", default=None, metavar="DIR",
                    help="Foundry's Data folder (default: WALUIPEDIA_FOUNDRY_DATA, FOUNDRY_VTT_DATA_PATH, then the OS default, e.g. %%LOCALAPPDATA%%\\FoundryVTT\\Data)")
    ap.add_argument("--foundry-url", default=None, metavar="URL",
                    help="the running Foundry server, asked which module version it serves (default: WALUIPEDIA_FOUNDRY_URL, else http://127.0.0.1:<port in Config/options.json or 30000>)")
    ap.add_argument("--no-publish", action="store_true", help="do not copy the packets / module / art into Foundry's Data folder")
    ap.add_argument("--no-module-install", action="store_true", help="publish the packets but leave Data/modules alone")
    ap.add_argument("--no-images", action="store_true", help="publish without copying the repo's portraits into Data")
    ap.add_argument("--git-sync", action="store_true",
                    help="two-way with GitHub: pull (fast-forward) before a pass, commit + push the suite's own files (mirror, cast, sheets.json, root export) after; under --watch also poll GitHub every --git-interval seconds")
    ap.add_argument("--git-interval", type=float, default=300.0, help="seconds between GitHub polls under --watch --git-sync (default 300)")
    args = ap.parse_args(argv)
    utf8_streams()
    downloads = args.downloads if args.downloads is not None else None
    if args.downloads == "":
        downloads = ""
    foundry = {"data": args.foundry_data, "url": args.foundry_url, "publish": not args.no_publish, "install": not args.no_module_install, "images": not args.no_images}
    if args.check:
        return 0 if one_pass(args.world, False, args.port, downloads, foundry) else 1
    if args.watch:
        try:
            watch(args.world, args.port, args.interval, downloads, foundry, args.git_sync, args.git_interval)
        except KeyboardInterrupt:
            say("\nsheets-suite: stopped")
        return 0
    return 0 if one_pass(args.world, True, args.port, downloads, foundry, args.git_sync) else 1


if __name__ == "__main__":
    sys.exit(main())
