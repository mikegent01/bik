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
  changes   every ``actors/changes/*.json`` whose ``appliesTo`` still covers
            the mirror's export (spoils of war, injuries) → ``apply --write``.
  check     ``foundry-bridge.py check`` on the mirror (never writes).
  build     ``build-character-sheets.py`` → data/sheets.json + the cast packet.
  combine   actors/worlds/<world>/import.json (the whole world) and
            players-import.json (the Players folder only) — the packets the
            Mass Import module fetches off the local server. Both are
            git-ignored build artefacts.
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
import json
import os
import shutil
import subprocess
import sys
import time
import traceback

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RM = os.path.join(ROOT, "Reputation-Matrix2")
ACTORS = os.path.join(RM, "actors")
WORLDS = os.path.join(ACTORS, "worlds")
CHANGES_DIR = os.path.join(ACTORS, "changes")
PLAYERS_JSON = os.path.join(ROOT, "Players.json")
DEFAULT_WORLD = "midlands"
DEFAULT_PORT = 8765
PY = sys.executable

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


def find_exports(world, downloads=None):
    """Every candidate export for `world`, newest stamp first: (path, stamp)."""
    dirs = [ROOT]
    downloads = downloads if downloads is not None else os.path.join(os.path.expanduser("~"), "Downloads")
    if downloads and os.path.isdir(downloads):
        dirs.append(downloads)
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


def step_split(world, write, downloads=None):
    # --check only looks at the committed input (the repo-root export): the
    # mirror in git must be the split of the export in git.
    exports = find_exports(world, downloads if write else "")
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


def packet_paths(world):
    base = os.path.join(WORLDS, world)
    return os.path.join(base, "import.json"), os.path.join(base, "players-import.json")


def step_combine(world, write):
    base = os.path.join(WORLDS, world)
    players = os.path.join(base, "Players")
    whole, pl = packet_paths(world)
    ok = True
    if write:
        ok = run([TOOLS["bridge"], "combine", os.path.relpath(base, ROOT), "--out", os.path.relpath(whole, ROOT), "--world", world], "combine")[0] and ok
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
        "players": base + os.path.relpath(pl, ROOT).replace(os.sep, "/"),
        "world": base + os.path.relpath(whole, ROOT).replace(os.sep, "/"),
    }


def one_pass(world, write, port, downloads=None):
    t0 = time.time()
    say(f"sheets-suite: {'pass' if write else 'check'} for world {world!r} — {time.strftime('%H:%M:%S')}")
    mirror = os.path.relpath(os.path.join(WORLDS, world), ROOT)
    ok = True
    ok = step_intake(write) and ok
    ok = step_split(world, write, downloads) and ok
    if not os.path.isdir(os.path.join(WORLDS, world)):
        say(f"  mirror   : {mirror} does not exist — export the world with the Mass Import module first")
        return False
    if write:
        ok = run([TOOLS["promote"]], "promote")[0] and ok
    ok = step_changes(world, write) and ok
    ok = run([TOOLS["bridge"], "check", mirror], "check")[0] and ok
    ok = run([TOOLS["build"]] + ([] if write else ["--check"]), "build")[0] and ok
    ok = step_combine(world, write) and ok
    ok = run([TOOLS["check_sheets"]], "verify")[0] and ok
    ok = run([TOOLS["promote"], "--check"], "verify")[0] and ok
    u = urls(world, port)
    say(f"  {'done' if ok else 'FAILED'}     : {time.time() - t0:.1f}s")
    if write:
        say(f"  sheets   : {u['sheets']}")
        say(f"  packet   : {u['players']}  (Mass import → URL: the Players folder)")
        say(f"  packet   : {u['world']}  (the whole world)")
    return ok


# ---------------------------------------------------------------------- watch

def watch_inputs(world, downloads=None):
    paths = [p for p, _ in find_exports(world, downloads)] + glob.glob(os.path.join(CHANGES_DIR, "*.json"))
    if os.path.exists(PLAYERS_JSON):
        paths.append(PLAYERS_JSON)
    out = {}
    for p in paths:
        try:
            out[p] = os.path.getmtime(p)
        except OSError:
            pass
    return out


def guarded_pass(world, port, downloads=None):
    """A pass under --watch: a crash is reported like a failed step and the
    watcher stays up for the next export."""
    try:
        return one_pass(world, True, port, downloads)
    except Exception as exc:  # noqa: BLE001 — anything; the watcher must survive
        say(f"  FAILED   : {type(exc).__name__}: {exc}")
        for line in traceback.format_exc().rstrip().splitlines()[-6:]:
            say("            " + line)
        return False


def watch(world, port, interval, downloads=None):
    seen = watch_inputs(world, downloads)
    guarded_pass(world, port, downloads)
    say(f"  watching : {len(seen)} input file(s) every {interval:g}s — Ctrl-C to stop")
    while True:
        time.sleep(interval)
        now = watch_inputs(world, downloads)
        if now != seen:
            changed = sorted(set(p for p in set(now) | set(seen) if now.get(p) != seen.get(p)))
            say("")
            say("  changed  : " + ", ".join(os.path.basename(p) for p in changed))
            # let a download finish landing before reading it
            time.sleep(1.0)
            seen = watch_inputs(world, downloads)
            guarded_pass(world, port, downloads)


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0], formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--world", default=DEFAULT_WORLD, help=f"world id (default {DEFAULT_WORLD})")
    ap.add_argument("--port", type=int, default=DEFAULT_PORT, help=f"the local site's port, for the URLs it prints (default {DEFAULT_PORT})")
    ap.add_argument("--watch", action="store_true", help="keep running; re-run the pass when an export, Players.json or a changes file changes")
    ap.add_argument("--interval", type=float, default=2.0, help="seconds between polls in --watch (default 2)")
    ap.add_argument("--check", action="store_true", help="verify only; write nothing")
    ap.add_argument("--downloads", default=None, help="folder to scan for fresh exports (default ~/Downloads; '' = none)")
    args = ap.parse_args(argv)
    utf8_streams()
    downloads = args.downloads if args.downloads is not None else None
    if args.downloads == "":
        downloads = ""
    if args.check:
        return 0 if one_pass(args.world, False, args.port, downloads) else 1
    if args.watch:
        try:
            watch(args.world, args.port, args.interval, downloads)
        except KeyboardInterrupt:
            say("\nsheets-suite: stopped")
        return 0
    return 0 if one_pass(args.world, True, args.port, downloads) else 1


if __name__ == "__main__":
    sys.exit(main())
