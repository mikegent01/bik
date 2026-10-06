#!/usr/bin/env python3
"""The control panel start.py serves at /panel (the page that replaced the tkinter window): the Panel object
in-process on a free port, the JSON routes the page talks to (state, log, start/stop a child, remember
prefs, rebind on a port change, open, shutdown), the page itself, and the command line. The only child it
really starts is workflow/server.py, on a free port of its own. No browser needed."""
import argparse
import importlib.util
import json
import os
import socket
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PY = sys.executable
FAILS = []
PASSES = [0]


def check(cond, what, detail=""):
    if cond:
        PASSES[0] += 1
    else:
        FAILS.append(what)
        print("FAIL:", what, ("— " + str(detail)[-300:]) if detail else "")


def load(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def http(url, body=None, timeout=20):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, method="POST" if data is not None else "GET",
                                 headers={"Content-Type": "application/json"} if data else {})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            raw = r.read()
            return r.status, (json.loads(raw) if r.headers.get("Content-Type", "").startswith("application/json") else raw)
    except urllib.error.HTTPError as exc:
        raw = exc.read()
        try:
            return exc.code, json.loads(raw)
        except ValueError:
            return exc.code, raw


def free_port():
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


def wait_until(fn, timeout=15):
    t0 = time.time()
    while time.time() - t0 < timeout:
        if fn():
            return True
        time.sleep(0.2)
    return fn()


start = load("start_mod", os.path.join(ROOT, "start.py"))
src = Path(ROOT, "start.py").read_text(encoding="utf-8")
page = Path(ROOT, "tools", "control-panel.html").read_text(encoding="utf-8")

# ---- the window is gone -----------------------------------------------------------------------------
check("tkinter" not in src.replace("replaces the tkinter window", ""), "start.py no longer imports or mentions tkinter beyond the note that the panel replaced it")
check(start.PANEL_HTML.is_file() and start.PANEL_ROUTE == "/panel", "the panel page lives in tools/control-panel.html and is served at /panel")
check(all(k in page for k in ("/panel/api/", "workflow", "sheets", "tts", "hub", "plates", "forge")), "the page knows every service the panel can start")
check('name="autostart"' in page and '"autostart": True' in src, "the 'start the ticked services with start.py' tick exists on the page and defaults on")
check(all(k in page for k in ("Waluipedia Hub", "Token Plate Studio", "NPC Forge", "Character sheets", "Chatroom")), "the Open section lists the rooms and the tools")
check(start.TOOLS["hub"][1] == 8777 and start.TOOLS["forge"][1] == 8768 and start.TOOLS["plates"][1] == 8766, "the tool ports match the tools' own defaults", start.TOOLS)
check(all(start.TOOLS[k][0].is_file() for k in start.TOOLS), "every tool script the panel can launch exists", {k: str(v[0]) for k, v in start.TOOLS.items()})

# ---- --help ---------------------------------------------------------------------------------------------
helptext = subprocess.run([PY, os.path.join(ROOT, "start.py"), "--help"], cwd=ROOT, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
check(helptext.returncode == 0 and all(f in helptext.stdout for f in ("--no-gui", "--panel", "--no-browser", "--sheets", "--no-sheets", "--git-sync", "--foundry-data DIR", "--workflow", "--art-base")),
      "start.py --help lists the panel / terminal switches and the suite flags", helptext.stdout[-400:])
check("--gui" in helptext.stdout, "--gui still works as the old name for --panel")

# ---- the Panel in-process ------------------------------------------------------------------------------
tmp = tempfile.mkdtemp(prefix="wp-panel-")
prefs_path = Path(tmp, "prefs.json")
start.PREFS_PATH = prefs_path
start.load_prefs.__defaults__ = (prefs_path,)
start.save_prefs.__defaults__ = (prefs_path,)
opened = []
start.webbrowser.open = lambda url, *a, **k: opened.append(url) or True
site_port, wf_port = free_port(), free_port()
args = argparse.Namespace(port=site_port, host="127.0.0.1", route="", page="index.html", no_browser=True, no_tts=True, workflow=False,
                          workflow_port=wf_port, sheets=False, no_sheets=True, git_sync=False, art_base="", foundry_data="", panel=False,
                          no_gui=False, autostart=False)
panel = start.Panel(args)
panel.prefs["workflow_port"] = wf_port
check(panel.prefs["port"] == site_port and panel.prefs["sheets"] is False and panel.prefs["browser"] is False and panel.prefs["tts"] is False,
      "flags override the remembered ticks for this run", panel.prefs)
check(panel.prefs["autostart"] is True and panel.prefs["workflow"] is True, "…without touching the ticks the flags did not name")
panel.start_site()
base = "http://127.0.0.1:%d" % panel.port
check(panel.port == site_port and wait_until(lambda: start.port_open("127.0.0.1", site_port)), "the site server comes up on the asked port")

code, html = http(base + "/panel")
check(code == 200 and b"control panel" in html and b"/panel/api/" in html, "GET /panel serves the page")
code, html2 = http(base + "/panel/")
check(code == 200 and html2 == html, "…with or without the trailing slash")
code, idx = http(base + "/index.html")
check(code == 200 and b"<html" in idx[:200].lower(), "the archive is still served beside it")

code, st = http(base + "/panel/api/state")
check(code == 200 and set(st) >= {"root", "prefs", "prefs_path", "status", "panel"}, "GET /panel/api/state answers with prefs, status and the panel address", st)
status = st["status"]
check(set(status) >= {"site", "workflow", "sheets", "tts", "lm", "plates", "forge", "hub"}, "…covering every light on the page", sorted(status))
check(status["site"]["up"] and status["site"]["port"] == site_port and not status["workflow"]["up"] and not status["sheets"]["up"] and not status["workflow"]["managed"],
      "…site up, children down before anything is started", status)
check(status["workflow"]["url"].endswith("/chatroom.html") and status["sheets"]["url"].endswith(start.SHEETS_ROUTE), "the chat link falls back to the static page while the workflow server is down")
check(all("available" in status[k] for k in ("tts", "plates", "forge", "hub")), "tools report whether they are installed here")

code, log = http(base + "/panel/api/log?since=0")
check(code == 200 and log["seq"] >= 1 and any("site" in line for line in log["lines"]), "GET /panel/api/log?since=0 returns the log so far", log)
seq = log["seq"]
panel.say("  test   : hello from the test")
code, log2 = http(base + "/panel/api/log?since=%d" % seq)
check(log2["lines"] == ["  test   : hello from the test"] and log2["seq"] == seq + 1, "…and only the new lines after since=N", log2)
code, log3 = http(base + "/panel/api/log?since=abc")
check(code == 200 and len(log3["lines"]) == log3["seq"], "a bad since falls back to the whole log")

# start / stop the workflow server through the API
code, r = http(base + "/panel/api/start", {"service": "workflow"})
check(code == 200 and r.get("ok"), "POST start workflow launches workflow/server.py", r)
check(wait_until(lambda: start.port_open("127.0.0.1", wf_port), 30), "…and it answers on the remembered workflow port")
code, st = http(base + "/panel/api/state")
check(st["status"]["workflow"]["up"] and st["status"]["workflow"]["managed"] and st["status"]["workflow"]["url"].startswith("http://127.0.0.1:%d/" % wf_port),
      "the state shows it up, managed, and the chat link goes through it", st["status"]["workflow"])
code, r = http(base + "/panel/api/start", {"service": "workflow"})
check(code == 200 and r.get("note") == "already running", "starting it twice is a no-op", r)
code, r = http(base + "/panel/api/stop", {"service": "workflow"})
check(code == 200 and r.get("ok") and wait_until(lambda: not start.port_open("127.0.0.1", wf_port), 20), "POST stop workflow stops it", r)
code, st = http(base + "/panel/api/state")
check(not st["status"]["workflow"]["up"] and not st["status"]["workflow"]["managed"], "…and the light goes off")
code, r = http(base + "/panel/api/stop", {"service": "workflow"})
check(code == 200 and r.get("note"), "stopping what is not running just says so", r)
code, r = http(base + "/panel/api/stop", {"service": "forge"})
check(code == 200 and r.get("ok") is False and "own window" in r.get("note", ""), "tools that run in their own window are not stopped from here", r)
code, r = http(base + "/panel/api/start", {"service": "nope"})
check(code == 404 and "unknown service" in r.get("error", ""), "an unknown service is a 404", r)
code, r = http(base + "/panel/api/nothing", {})
check(code == 404, "an unknown route is a 404")
code, r = http(base + "/panel/api/open", {"url": "file:///etc/passwd"})
check(code == 400 and not opened, "open refuses anything but http(s)", r)
code, r = http(base + "/panel/api/open", {"url": "http://127.0.0.1:%d/#/sheets" % site_port})
check(code == 200 and opened == ["http://127.0.0.1:%d/#/sheets" % site_port], "…and opens an http URL in the browser", opened)

# prefs: remembered on disk; a port change rebinds the site
code, r = http(base + "/panel/api/prefs", {"open": "sheets", "tts": True, "foundry_data": "C:/Foundry/Data", "nonsense": 1})
check(code == 200 and r["ok"] and sorted(r["changed"]) == ["foundry_data", "open", "tts"] and r["rebind"] is False, "POST prefs remembers the known keys and ignores the rest", r)
saved = json.loads(prefs_path.read_text(encoding="utf-8"))
check(saved["open"] == "sheets" and saved["tts"] is True and saved["foundry_data"] == "C:/Foundry/Data" and "nonsense" not in saved, "…in the prefs file", saved)
code, st = http(base + "/panel/api/state")
check(st["status"]["site"]["home"].endswith(start.SHEETS_ROUTE), "the Home link follows the 'open' pref", st["status"]["site"])
code, r = http(base + "/panel/api/prefs", {"port": "not a number"})
check(code == 200 and r["changed"] == [], "a port that is not a number is ignored", r)
new_port = free_port()
code, r = http(base + "/panel/api/prefs", {"port": new_port})
check(code == 200 and r["rebind"] is True and r["changed"] == ["port"], "changing the port asks for a rebind", r)
check(wait_until(lambda: start.port_open("127.0.0.1", new_port), 10) and wait_until(lambda: not start.port_open("127.0.0.1", site_port), 10),
      "…and the site moves to the new port")
base = "http://127.0.0.1:%d" % new_port
code, st = http(base + "/panel/api/state")
check(code == 200 and st["status"]["site"]["port"] == new_port and panel.port == new_port, "the panel answers on the new port", st["status"]["site"])
code, log4 = http(base + "/panel/api/log?since=0")
check(any("rebinding" in line for line in log4["lines"]) and any("stopped" in line for line in log4["lines"]), "the log tells the story", log4["lines"][-6:])

# the page's JSON contract (what the script reads)
for key in ("status.site.home", "status.workflow.url", "status.sheets.url", "status.hub.url", "status.plates.url", "status.forge.url", "status.tts.url", "prefs_path"):
    node = st
    for part in key.split("."):
        node = node.get(part) if isinstance(node, dict) else None
    check(node is not None, "state has %s for the page" % key)

# shutdown
code, r = http(base + "/panel/api/shutdown", {})
check(code == 200 and r.get("ok"), "POST shutdown answers before it stops", r)
check(wait_until(lambda: panel.exit.is_set(), 10), "…then the run loop is told to exit")
panel.stop_site()
check(wait_until(lambda: not start.port_open("127.0.0.1", new_port), 10), "stop_site frees the port")
check(not panel.alive("workflow") and not panel.alive("sheets"), "no child is left behind")
saved_after = json.loads(prefs_path.read_text(encoding="utf-8"))
check(saved_after["browser"] is True and saved_after["sheets"] is True, "the flags meant for one run (--no-browser, --no-sheets) were never written to the prefs file", saved_after)

# ---- the launcher -------------------------------------------------------------------------------------
bat = Path(ROOT, "start.bat").read_bytes()
check(b"start.py" in bat and b"tkinter" not in bat and all(ord(c) < 128 for c in bat.decode("latin-1")), "start.bat is ASCII, runs start.py and knows nothing about a window")
check(b"\r\n" in bat, "…with CRLF line endings")
readme = Path(ROOT, "README.md").read_text(encoding="utf-8")
check("/panel" in readme and "control-panel.html" in readme, "the README points at the control panel")

print("%d ok, %d failed" % (PASSES[0], len(FAILS)))
sys.exit(1 if FAILS else 0)
