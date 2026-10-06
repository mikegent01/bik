#!/usr/bin/env python3
"""
start.py — serve the Waluipedia locally and open it in a browser.

The site is static (see README: "Open index.html and it runs"), but opening it
straight off the filesystem breaks the parts that matter most: `fetch()` calls
against `Reputation-Matrix2/data/*.json` are blocked by the browser's CORS rules
on `file://`, so events, characters, props and investigations silently fail to
load. Serving over HTTP fixes that, and this script is the one-command way to do
it.

    python3 start.py                 # the launcher window (where tkinter and a display exist)
    python3 start.py --no-gui        # the plain terminal server, as before
    python3 start.py --port 9000     # pick the port
    python3 start.py --no-browser    # just serve (headless / remote boxes)
    python3 start.py --route "#/article/the_belly_of_the_beast"
    python3 start.py --host 0.0.0.0  # expose on the network / in a container
    python3 start.py --workflow      # also run workflow/server.py (chat + model bridge)
    python3 start.py --no-sheets     # skip the character-sheet suite (tools/sheets-suite.py --watch)
    python3 start.py --foundry-data "C:/Users/me/AppData/Local/FoundryVTT/Data"   # where the suite publishes for Foundry (found automatically otherwise)

The launcher window has a tick per thing that can run — the site, the workflow
server (chat + LM Studio bridge), the character-sheet suite (the GM's Foundry
export → world mirror → player sheets at ledger XP → sheets.json + the import
packets Foundry pulls back), the Qwen3-TTS studio (off unless you tick it) —
a start/stop button, live status lights for each, and a log pane. Your ticks
are remembered in ~/.waluipedia-start.json. The "Token plates" button opens
the Token Plate Studio (tools/token-plate-studio.py), which renders full-body
token plates through Comfy Desktop's ComfyUI and wires the ones you accept.

Ctrl-C to stop (terminal mode). Nothing is built — this only serves the
repository as it already exists.
"""

from __future__ import annotations

import argparse
import contextlib
import http.server
import json
import os
import queue
import socket
import socketserver
import subprocess
import sys
import threading
import time
import webbrowser
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DEFAULT_PORT = 8765
# Files that prove we are pointed at the archive and not a random directory.
LANDMARKS = ("index.html", "Reputation-Matrix2/data/events.json")

# The read-aloud bridge speaks to a local Qwen3-TTS Enhanced Studio (Gradio,
# default http://127.0.0.1:7860 — see docs/QWEN_TTS_BRIDGE.md). On the
# archivist's machine it is started by a batch file in Downloads; if we find
# it, we start it alongside the webserver so both are up in one command.
TTS_BAT_PARTS = ("Downloads", "qw", "Run Qwen3 TTS.bat")
TTS_HOST = "127.0.0.1"
TTS_PORT = 7860
# The workflow server (workflow/server.py): the chatroom's disk saves, the
# archive routes and the bridge to LM Studio. Optional; the static site alone
# is enough to read the archive.
WORKFLOW_SCRIPT = ROOT / "workflow" / "server.py"
WORKFLOW_PORT = 8787
LM_STUDIO_PORT = 1234
# The character-sheet suite (tools/sheets-suite.py --watch): splits a fresh
# Foundry export into the world mirror, keeps player characters on character
# sheets at ledger XP, applies the spoils files, rebuilds data/sheets.json and
# the import packets, and re-runs whenever an export lands. Foundry fetches the
# packets off this server, hence the CORS header on the static handler.
SHEETS_SCRIPT = ROOT / "tools" / "sheets-suite.py"
SHEETS_ROUTE = "#/sheets"
# The Token Plate Studio (tools/token-plate-studio.py): a local page that renders
# full-body token plates through Comfy Desktop's ComfyUI and wires the accepted ones.
PLATES_SCRIPT = ROOT / "tools" / "token-plate-studio.py"
PLATES_PORT = 8766
# The launcher window remembers its ticks here.
PREFS_PATH = Path.home() / ".waluipedia-start.json"



class Handler(http.server.SimpleHTTPRequestHandler):
    """Static handler with the two behaviours the archive needs."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        # The data layer is read at view time. A cached events.json is the
        # classic "I filed it but the page still shows the old one" bug.
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Expires", "0")
        # Foundry (another origin: localhost:30000, a Forge host) fetches the
        # actor packets the sheet suite builds straight off this server.
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

    def guess_type(self, path):
        # Some minimal Python installs mis-map these, which breaks module
        # loading and the map/portrait layers with no useful error.
        forced = {
            ".js": "text/javascript",
            ".mjs": "text/javascript",
            ".json": "application/json",
            ".css": "text/css",
            ".svg": "image/svg+xml",
            ".webp": "image/webp",
        }
        ext = os.path.splitext(path)[1].lower()
        return forced.get(ext) or super().guess_type(path)

    def log_message(self, fmt, *args):
        # Default logging prints every portrait and icon. Only surface problems.
        status = str(args[1]) if len(args) > 1 else ""
        if status.startswith(("4", "5")):
            sys.stderr.write("  %s %s\n" % (status, args[0]))


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


def check_root() -> None:
    missing = [name for name in LANDMARKS if not (ROOT / name).exists()]
    if missing:
        sys.exit(
            "start.py is not sitting in the archive root.\n"
            "  expected here: %s\n"
            "  missing:       %s\n"
            "Keep start.py next to index.html." % (ROOT, ", ".join(missing))
        )


def find_port(host: str, port: int, tries: int = 20) -> int:
    """Return the first free port at or after `port`."""
    for candidate in range(port, port + tries):
        with contextlib.closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as sock:
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            try:
                sock.bind((host, candidate))
                return candidate
            except OSError:
                continue
    sys.exit("No free port in range %d-%d." % (port, port + tries - 1))


# --------------------------------------------------------------------------
# The Qwen3-TTS studio (the read-aloud voice)
# --------------------------------------------------------------------------
def tts_bat_candidates():
    """Where 'Run Qwen3 TTS.bat' might live, best guess first."""
    seen = set()
    homes = [Path.home()]
    # Windows keeps the user profile in USERPROFILE; OneDrive-redirected
    # Downloads folders are common, so cover both roots.
    for var in ("USERPROFILE", "OneDrive"):
        val = os.environ.get(var)
        if val:
            homes.append(Path(val))
    for home in homes:
        bat = home.joinpath(*TTS_BAT_PARTS)
        if str(bat).lower() not in seen:
            seen.add(str(bat).lower())
            yield bat
    # A literal relative path, for the rare cwd-is-home launch.
    bat = Path(*TTS_BAT_PARTS)
    if str(bat).lower() not in seen:
        seen.add(str(bat).lower())
        yield bat


def tts_studio_up() -> bool:
    """Is something already listening on the studio's port?"""
    with contextlib.closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as sock:
        sock.settimeout(0.4)
        return sock.connect_ex((TTS_HOST, TTS_PORT)) == 0


# --------------------------------------------------------------------------
# Tailscale: the phone-ready address (see docs/QWEN_TTS_BRIDGE.md)
# --------------------------------------------------------------------------
TS_BIN_CANDIDATES = ("tailscale", r"C:\Program Files\Tailscale\tailscale.exe")


def tailscale_ipv4():
    """This machine's Tailscale address (100.x.y.z), or None.

    The address is what a phone on the same tailnet types into its browser to
    read the archive — and what its read-aloud bridge points at for the voice.
    """
    for binpath in TS_BIN_CANDIDATES:
        try:
            r = subprocess.run([binpath, "ip", "-4"], capture_output=True,
                               text=True, timeout=2.5)
        except Exception:
            continue
        for line in (r.stdout or "").split():
            line = line.strip()
            if line.startswith("100.") and line.count(".") == 3:
                return line
    return None


def lan_ipv4():
    """The address this machine uses to reach the LAN (a UDP socket is
    never actually sent), or None."""
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        try:
            sock.connect(("10.255.255.255", 1))
            ip = sock.getsockname()[0]
        finally:
            sock.close()
        # 169.254.x is "no lease" (APIPA): nothing else reaches it either
        return ip if ip and not ip.startswith(("127.", "169.254.")) else None
    except OSError:
        return None


def art_base_for(port: int, host: str, explicit: str = "") -> str:
    """The suite's --art-base, or "" for the default: the art is copied into
    Foundry's Data folder and the packets name it by Data path. Serving the
    art by URL from this server is an opt-in ("auto" = this server's
    Tailscale address, else LAN, else loopback; or a URL) — it needs this
    window open and reachable from every Foundry client whenever Foundry is,
    which is why it is not the default."""
    explicit = (explicit or "").strip()
    if not explicit or explicit.lower() in ("copy", "none", "off"):
        return ""
    if explicit.lower() != "auto":
        return explicit
    if host in ("0.0.0.0", "::"):
        reach = tailscale_ipv4() or lan_ipv4()
        if reach:
            return "http://%s:%d/" % (reach, port)
    return "http://127.0.0.1:%d/" % port


def print_tailnet_tip(port: int, host: str) -> None:
    ts_ip = tailscale_ipv4()
    if not ts_ip:
        return
    print("  tailnet: your Tailscale address is %s" % ts_ip)
    if host in ("0.0.0.0", "::"):
        print("            phones on the tailnet can read the archive at")
        print("            http://%s:%d/" % (ts_ip, port))
    else:
        print("            re-run with --host 0.0.0.0 and phones on the tailnet")
        print("            can read the archive at http://%s:%d/" % (ts_ip, port))
    print("            read aloud from a phone: open the player bar's gear and")
    print("            point the studio at http://%s:%d" % (ts_ip, TTS_PORT))


def launch_tts_studio(say=print) -> None:
    """Start 'Run Qwen3 TTS.bat' if it exists, so the studio comes up with
    the site. Never raises, never blocks: the webserver starts regardless,
    and a missing bat just means Read aloud needs the studio started by hand.
    """
    if tts_studio_up():
        say("  qwen   : studio already up on %s:%d — not launching again"
            % (TTS_HOST, TTS_PORT))
        return
    bat = next((b for b in tts_bat_candidates() if b.is_file()), None)
    if bat is None:
        say("  qwen   : 'Run Qwen3 TTS.bat' not found (looked in Downloads/qw)")
        say("            read aloud will need the studio started by hand")
        return
    try:
        if os.name == "nt":
            # cmd /c in its own console window: the studio's logs stay
            # visible in a window this script does not own, and the webserver
            # is free to keep going.
            subprocess.Popen(
                ["cmd", "/c", bat.name],
                cwd=str(bat.parent),
                creationflags=getattr(subprocess, "CREATE_NEW_CONSOLE", 0),
                close_fds=True,
            )
        else:
            # Non-Windows box with the bat checked out: report rather than
            # pretending a batch file can run under sh.
            say("  qwen   : found %s but batch files only run on Windows" % bat)
            return
    except Exception as exc:  # a failed launch must not kill the site
        say("  qwen   : could not launch %s (%s)" % (bat, exc))
        say("            read aloud will need the studio started by hand")
        return
    say("  qwen   : launched %s" % bat)
    say("            the studio loads its model first — Read aloud works once")
    say("            it answers on http://%s:%d" % (TTS_HOST, TTS_PORT))


def launch_plate_studio(say=print) -> None:
    """Open the Token Plate Studio. If one already answers on PLATES_PORT just
    open the page; otherwise start tools/token-plate-studio.py as its own
    process (own console on Windows) — it opens the browser itself. Renders
    need Comfy Desktop running; the page says so and can launch it."""
    if port_open("127.0.0.1", PLATES_PORT):
        webbrowser.open("http://127.0.0.1:%d/" % PLATES_PORT)
        say("  plates : studio already up — opened http://127.0.0.1:%d/" % PLATES_PORT)
        return
    if not PLATES_SCRIPT.is_file():
        say("  plates : %s is missing" % PLATES_SCRIPT)
        return
    try:
        subprocess.Popen(
            [sys.executable, str(PLATES_SCRIPT)],
            cwd=str(ROOT),
            creationflags=getattr(subprocess, "CREATE_NEW_CONSOLE", 0),
            close_fds=True,
        )
    except Exception as exc:  # a failed launch must not kill the site
        say("  plates : could not launch %s (%s)" % (PLATES_SCRIPT, exc))
        return
    say("  plates : Token Plate Studio starting — it opens http://127.0.0.1:%d/ itself" % PLATES_PORT)
    say("            (renders go through Comfy Desktop; open it, or press Start Comfy on the page)")


# --------------------------------------------------------------------------
# The workflow server (chat + model bridge), as a child process
# --------------------------------------------------------------------------
def port_open(host: str, port: int, timeout: float = 0.3) -> bool:
    """Is anything answering on host:port right now?"""
    with contextlib.closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as sock:
        sock.settimeout(timeout)
        return sock.connect_ex((host, port)) == 0


def launch_workflow(port: int, host: str, lm_url: str = "", say=print):
    """Run workflow/server.py as a child, its lines going to `say`. Returns
    the Popen (or None when it is already up / cannot start)."""
    if port_open("127.0.0.1", port):
        say("  chat   : workflow server already up on %d — not launching again" % port)
        return None
    if not WORKFLOW_SCRIPT.is_file():
        say("  chat   : %s is missing — the chatroom still works from the static page" % WORKFLOW_SCRIPT)
        return None
    env = dict(os.environ)
    env["WORKFLOW_PORT"] = str(port)
    env["WORKFLOW_HOST"] = host or "127.0.0.1"
    if lm_url:
        env["LM_STUDIO_URL"] = lm_url
    env.setdefault("PYTHONUNBUFFERED", "1")
    try:
        proc = subprocess.Popen(
            [sys.executable, str(WORKFLOW_SCRIPT)], cwd=str(ROOT), env=env,
            stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, bufsize=1,
        )
    except Exception as exc:
        say("  chat   : could not start the workflow server (%s)" % exc)
        return None

    def pump():
        try:
            for line in proc.stdout:
                say("  chat   | " + line.rstrip())
        except Exception:
            pass
    threading.Thread(target=pump, daemon=True).start()
    say("  chat   : workflow server starting on http://127.0.0.1:%d/  (chatroom at /roleplay)" % port)
    return proc


def launch_sheets_suite(site_port: int, say=print, foundry_data: str = "", git_sync: bool = False, art_base: str = ""):
    """Run tools/sheets-suite.py --watch as a child, its lines going to `say`.
    `foundry_data` (blank = let the suite find it) is the Foundry Data folder
    the suite publishes packets and the module into — what the Sync button in
    Foundry reads first. `git_sync` adds --git-sync: pull before a pass,
    commit + push the mirror / sheets after, poll GitHub while idle (the
    module and the tools update themselves). `art_base` blank (the default)
    lets the suite copy portraits, tokens and item icons into Data; a URL is
    the opt-in where the packets name the art on this server instead (see
    art_base_for). Returns the Popen (or None when it cannot start)."""
    if not SHEETS_SCRIPT.is_file():
        say("  sheets : %s is missing — the sheets page still serves the committed data/sheets.json" % SHEETS_SCRIPT)
        return None
    env = dict(os.environ)
    env.setdefault("PYTHONUNBUFFERED", "1")
    # Windows gives a piped child cp1252, which cannot spell the suite's "→";
    # the child prints UTF-8 and is read as UTF-8, whatever the code page.
    env["PYTHONIOENCODING"] = "utf-8"
    env["PYTHONUTF8"] = "1"
    try:
        proc = subprocess.Popen(
            [sys.executable, str(SHEETS_SCRIPT), "--watch", "--port", str(site_port)]
            + (["--foundry-data", foundry_data] if foundry_data else []) + (["--git-sync"] if git_sync else [])
            + (["--art-base", art_base] if art_base else []), cwd=str(ROOT), env=env,
            stdout=subprocess.PIPE, stderr=subprocess.STDOUT, encoding="utf-8", errors="replace", bufsize=1,
        )
    except Exception as exc:
        say("  sheets : could not start the character-sheet suite (%s)" % exc)
        return None

    def pump():
        try:
            for line in proc.stdout:
                say("  sheets | " + line.rstrip())
        except Exception:
            pass
    threading.Thread(target=pump, daemon=True).start()
    say("  sheets : character-sheet suite watching for exports (tools/sheets-suite.py --watch%s); sheets at http://localhost:%d/%s" % (" --git-sync" if git_sync else "", site_port, SHEETS_ROUTE))
    if art_base and art_base.lower() != "copy":
        say("  art    : (opt-in) Foundry's sheets load portraits, tokens and item icons from %s — keep this window open whenever Foundry is%s"
            % (art_base, "" if "127.0.0.1" not in art_base else "; only this machine can reach that address (tick 'reachable from other machines' for players elsewhere)"))
    return proc


def stop_process(proc, say=print) -> None:
    if proc is None or proc.poll() is not None:
        return
    try:
        proc.terminate()
        try:
            proc.wait(timeout=3)
        except subprocess.TimeoutExpired:
            proc.kill()
    except Exception as exc:
        say("  chat   : could not stop the workflow server (%s)" % exc)


# --------------------------------------------------------------------------
# Remembered choices for the window
# --------------------------------------------------------------------------
PREF_DEFAULTS = {
    "site": True, "workflow": True, "sheets": True, "tts": False, "browser": True,
    "port": DEFAULT_PORT, "workflow_port": WORKFLOW_PORT, "expose": False,
    "lm_url": "", "open": "home", "route": "", "foundry_data": "", "git_sync": False, "art_base": "",
}


def load_prefs(path: Path = PREFS_PATH) -> dict:
    prefs = dict(PREF_DEFAULTS)
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
        if isinstance(data, dict):
            for key in PREF_DEFAULTS:
                if key in data and isinstance(data[key], type(PREF_DEFAULTS[key])):
                    prefs[key] = data[key]
    except Exception:
        pass
    return prefs


def save_prefs(prefs: dict, path: Path = PREFS_PATH) -> bool:
    try:
        keep = {k: prefs[k] for k in PREF_DEFAULTS if k in prefs}
        path.write_text(json.dumps(keep, indent=2), encoding="utf-8")
        return True
    except Exception:
        return False


def gui_available() -> bool:
    """tkinter importable and somewhere to draw: Windows/macOS always have a
    display; on Linux one of DISPLAY / WAYLAND_DISPLAY must be set."""
    try:
        import tkinter  # noqa: F401
    except Exception:
        return False
    if sys.platform.startswith(("win", "darwin")):
        return True
    return bool(os.environ.get("DISPLAY") or os.environ.get("WAYLAND_DISPLAY"))


def chat_url(site_port: int, workflow_port: int) -> str:
    """The chatroom: through the workflow server when it answers (disk saves,
    archive routes), the static page otherwise."""
    if port_open("127.0.0.1", workflow_port):
        return "http://127.0.0.1:%d/roleplay" % workflow_port
    return "http://localhost:%d/chatroom.html" % site_port


# --------------------------------------------------------------------------
# The launcher window
# --------------------------------------------------------------------------
def run_gui(args) -> int:
    import tkinter as tk
    from tkinter import ttk
    from tkinter.scrolledtext import ScrolledText

    prefs = load_prefs()
    # Flags on the command line win over the remembered ticks, once.
    if args.port != DEFAULT_PORT:
        prefs["port"] = args.port
    if args.host == "0.0.0.0":
        prefs["expose"] = True
    if args.no_browser:
        prefs["browser"] = False
    if args.no_tts:
        prefs["tts"] = False
    if args.workflow:
        prefs["workflow"] = True
    if args.no_sheets:
        prefs["sheets"] = False
    elif args.sheets:
        prefs["sheets"] = True
    if args.foundry_data:
        prefs["foundry_data"] = args.foundry_data
    if args.git_sync:
        prefs["git_sync"] = True
    if args.art_base:
        prefs["art_base"] = args.art_base
    if args.route:
        prefs["open"], prefs["route"] = "route", args.route
    elif args.page and args.page != "index.html":
        prefs["open"], prefs["route"] = "route", args.page

    root = tk.Tk()
    root.title("Waluipedia — start")
    root.minsize(640, 520)
    try:
        root.tk.call("tk", "scaling", 1.15)
    except Exception:
        pass
    style = ttk.Style(root)
    with contextlib.suppress(Exception):
        style.theme_use("clam" if sys.platform.startswith("linux") else style.theme_use())

    lines = queue.Queue()
    state = {"httpd": None, "thread": None, "workflow": None, "sheets": None, "running": False, "port": prefs["port"]}

    def say(text: str) -> None:
        lines.put(str(text))

    v_site = tk.BooleanVar(value=prefs["site"])
    v_workflow = tk.BooleanVar(value=prefs["workflow"])
    v_sheets = tk.BooleanVar(value=prefs["sheets"])
    v_tts = tk.BooleanVar(value=prefs["tts"])
    v_browser = tk.BooleanVar(value=prefs["browser"])
    v_expose = tk.BooleanVar(value=prefs["expose"])
    v_port = tk.StringVar(value=str(prefs["port"]))
    v_wport = tk.StringVar(value=str(prefs["workflow_port"]))
    v_lm = tk.StringVar(value=prefs["lm_url"])
    v_fd = tk.StringVar(value=prefs.get("foundry_data", ""))
    v_art = tk.StringVar(value=prefs.get("art_base", ""))
    v_git = tk.BooleanVar(value=bool(prefs.get("git_sync", False)))
    v_open = tk.StringVar(value=prefs["open"])
    v_route = tk.StringVar(value=prefs["route"])

    pad = {"padx": 10, "pady": 4}
    head = ttk.Frame(root)
    head.pack(fill="x", **pad)
    ttk.Label(head, text="Waluipedia — The Vigilance Terminal", font=("TkDefaultFont", 13, "bold")).pack(anchor="w")
    ttk.Label(head, text="serving %s" % ROOT, foreground="#666").pack(anchor="w")

    box = ttk.LabelFrame(root, text="What to run")
    box.pack(fill="x", **pad)
    row = ttk.Frame(box); row.pack(fill="x", padx=8, pady=3)
    ttk.Checkbutton(row, text="The site (static server)", variable=v_site).pack(side="left")
    ttk.Label(row, text="port").pack(side="left", padx=(16, 4))
    ttk.Entry(row, textvariable=v_port, width=7).pack(side="left")
    ttk.Checkbutton(row, text="reachable from other machines (0.0.0.0 — phones on the tailnet)", variable=v_expose).pack(side="left", padx=(16, 0))

    row = ttk.Frame(box); row.pack(fill="x", padx=8, pady=3)
    ttk.Checkbutton(row, text="Workflow server — the chatroom's disk saves, archive routes and the LM Studio bridge", variable=v_workflow).pack(side="left")
    ttk.Label(row, text="port").pack(side="left", padx=(16, 4))
    ttk.Entry(row, textvariable=v_wport, width=7).pack(side="left")

    row = ttk.Frame(box); row.pack(fill="x", padx=8, pady=3)
    ttk.Label(row, text="LM Studio address (blank = 127.0.0.1:1234)").pack(side="left", padx=(24, 4))
    ttk.Entry(row, textvariable=v_lm, width=34).pack(side="left")

    row = ttk.Frame(box); row.pack(fill="x", padx=8, pady=3)
    ttk.Checkbutton(row, text="Character sheets — split the GM's Foundry export, player sheets at ledger XP, spoils, sheets.json, import packets; re-runs when an export lands", variable=v_sheets).pack(side="left")

    row = ttk.Frame(box); row.pack(fill="x", padx=8, pady=3)
    ttk.Label(row, text="Foundry Data folder (blank = find it; the packets and the module are published there for the Sync button)").pack(side="left", padx=(24, 4))
    ttk.Entry(row, textvariable=v_fd, width=34).pack(side="left")

    row = ttk.Frame(box); row.pack(fill="x", padx=8, pady=3)
    ttk.Label(row, text="Art address (blank = copy the art into Foundry's Data folder; 'auto' or a URL = Foundry loads it from this server instead — opt-in)").pack(side="left", padx=(24, 4))
    ttk.Entry(row, textvariable=v_art, width=26).pack(side="left")

    row = ttk.Frame(box); row.pack(fill="x", padx=8, pady=3)
    ttk.Checkbutton(row, text="Two-way with GitHub — pull before a pass, commit + push the mirror and the sheets after, poll GitHub while idle (the module and the tools update themselves)", variable=v_git).pack(side="left", padx=(24, 0))

    bat = next((b for b in tts_bat_candidates() if b.is_file()), None)
    row = ttk.Frame(box); row.pack(fill="x", padx=8, pady=3)
    ttk.Checkbutton(row, text="Qwen3-TTS studio (Read aloud) — only when you want the voice; it is heavy", variable=v_tts).pack(side="left")
    ttk.Label(row, text=("found: %s" % bat) if bat else "'Run Qwen3 TTS.bat' not found in Downloads/qw", foreground="#666").pack(side="left", padx=(12, 0))

    row = ttk.Frame(box); row.pack(fill="x", padx=8, pady=3)
    ttk.Checkbutton(row, text="Open the browser on", variable=v_browser).pack(side="left")
    ttk.Radiobutton(row, text="the home page", variable=v_open, value="home").pack(side="left", padx=(10, 0))
    ttk.Radiobutton(row, text="the chatroom", variable=v_open, value="chat").pack(side="left", padx=(10, 0))
    ttk.Radiobutton(row, text="a route:", variable=v_open, value="route").pack(side="left", padx=(10, 0))
    ttk.Entry(row, textvariable=v_route, width=26).pack(side="left", padx=(4, 0))

    status = ttk.LabelFrame(root, text="Status (probed every two seconds)")
    status.pack(fill="x", **pad)
    lights = {}
    for key, label in (("site", "site"), ("workflow", "workflow server"), ("sheets", "character sheets"), ("lm", "LM Studio"), ("tts", "Qwen3-TTS")):
        cell = ttk.Frame(status); cell.pack(side="left", padx=10, pady=6)
        dot = tk.Label(cell, text="●", fg="#999", font=("TkDefaultFont", 12)); dot.pack(side="left")
        ttk.Label(cell, text=label).pack(side="left", padx=(4, 0))
        lights[key] = dot
    tail = ttk.Label(status, text="", foreground="#666"); tail.pack(side="left", padx=10)

    buttons = ttk.Frame(root)
    buttons.pack(fill="x", **pad)
    b_start = ttk.Button(buttons, text="▶ Start"); b_start.pack(side="left")
    b_stop = ttk.Button(buttons, text="■ Stop", state="disabled"); b_stop.pack(side="left", padx=(6, 0))
    ttk.Separator(buttons, orient="vertical").pack(side="left", fill="y", padx=10)
    b_site = ttk.Button(buttons, text="Open the site"); b_site.pack(side="left")
    b_chat = ttk.Button(buttons, text="Open the chatroom"); b_chat.pack(side="left", padx=(6, 0))
    b_sheets = ttk.Button(buttons, text="Open the sheets"); b_sheets.pack(side="left", padx=(6, 0))
    b_tts = ttk.Button(buttons, text="Open the TTS studio"); b_tts.pack(side="left", padx=(6, 0))
    b_plates = ttk.Button(buttons, text="Token plates"); b_plates.pack(side="left", padx=(6, 0))
    b_prefs = ttk.Button(buttons, text="Remember these ticks"); b_prefs.pack(side="right")

    log = ScrolledText(root, height=12, wrap="word", font=("TkFixedFont", 9), state="disabled")
    log.pack(fill="both", expand=True, padx=10, pady=(0, 10))

    def current_prefs() -> dict:
        def num(var, fallback):
            try:
                return int(var.get().strip())
            except Exception:
                return fallback
        return {
            "site": bool(v_site.get()), "workflow": bool(v_workflow.get()), "sheets": bool(v_sheets.get()),
            "tts": bool(v_tts.get()), "browser": bool(v_browser.get()), "expose": bool(v_expose.get()),
            "port": num(v_port, DEFAULT_PORT), "workflow_port": num(v_wport, WORKFLOW_PORT),
            "lm_url": v_lm.get().strip(), "open": v_open.get(), "route": v_route.get().strip(),
            "foundry_data": v_fd.get().strip().strip('"'), "git_sync": bool(v_git.get()),
            "art_base": v_art.get().strip().strip('"'),
        }

    def site_url(page: str = "", route: str = "") -> str:
        return "http://localhost:%d/%s%s" % (state["port"], page, route)

    def start():
        if state["running"]:
            return
        p = current_prefs()
        host = "0.0.0.0" if p["expose"] else "127.0.0.1"
        if p["site"]:
            try:
                port = find_port(host, p["port"])
            except SystemExit as exc:
                say(str(exc)); return
            state["port"] = port
            if port != p["port"]:
                say("  note   : port %d was busy, using %d" % (p["port"], port))
            try:
                httpd = Server((host, port), Handler)
            except OSError as exc:
                say("  site   : could not bind %s:%d (%s)" % (host, port, exc)); return
            state["httpd"] = httpd
            state["thread"] = threading.Thread(target=httpd.serve_forever, daemon=True)
            state["thread"].start()
            say("  site   : http://localhost:%d/  (serving %s)" % (port, ROOT))
            if host == "0.0.0.0":
                say("  note   : bound to 0.0.0.0 — reachable from other machines")
        if p["workflow"]:
            state["workflow"] = launch_workflow(p["workflow_port"], host, p["lm_url"], say)
        if p["sheets"]:
            state["sheets"] = launch_sheets_suite(state["port"], say, p.get("foundry_data", ""), bool(p.get("git_sync", False)),
                                                  art_base_for(state["port"], host, p.get("art_base", "")))
        if p["tts"]:
            launch_tts_studio(say)
        ts_ip = tailscale_ipv4()
        if ts_ip:
            say("  tailnet: %s — phones on the tailnet read the archive at http://%s:%d/%s"
                % (ts_ip, ts_ip, state["port"], "" if host == "0.0.0.0" else "  (tick “reachable from other machines” first)"))
        state["running"] = True
        b_start.configure(state="disabled"); b_stop.configure(state="normal")
        if p["browser"]:
            def open_later():
                time.sleep(0.8)
                if p["open"] == "chat":
                    for _ in range(12):           # the workflow server takes a moment to bind
                        if not p["workflow"] or port_open("127.0.0.1", p["workflow_port"]):
                            break
                        time.sleep(0.25)
                    url = chat_url(state["port"], p["workflow_port"])
                elif p["open"] == "route":
                    r = p["route"]
                    url = site_url("", r) if r.startswith("#") else site_url(r.lstrip("/"))
                else:
                    url = site_url()
                try:
                    if not webbrowser.open(url):
                        raise webbrowser.Error("no browser")
                    say("  opened : %s" % url)
                except Exception:
                    say("  (could not open a browser automatically — visit %s)" % url)
            threading.Thread(target=open_later, daemon=True).start()

    def stop():
        if state["httpd"] is not None:
            with contextlib.suppress(Exception):
                state["httpd"].shutdown()
                state["httpd"].server_close()
            state["httpd"] = None
            say("  site   : stopped")
        if state["workflow"] is not None:
            stop_process(state["workflow"], say)
            state["workflow"] = None
            say("  chat   : workflow server stopped")
        if state["sheets"] is not None:
            stop_process(state["sheets"], say)
            state["sheets"] = None
            say("  sheets : character-sheet suite stopped")
        state["running"] = False
        b_start.configure(state="normal"); b_stop.configure(state="disabled")

    def open_site():
        webbrowser.open(site_url())

    def open_chat():
        webbrowser.open(chat_url(state["port"], current_prefs()["workflow_port"]))

    def open_sheets():
        webbrowser.open(site_url("", SHEETS_ROUTE))

    def open_tts():
        webbrowser.open("http://%s:%d/" % (TTS_HOST, TTS_PORT))

    def open_plates():
        launch_plate_studio(say)

    def remember():
        ok = save_prefs(current_prefs())
        say("  prefs  : %s" % ("remembered in %s" % PREFS_PATH if ok else "could not write %s" % PREFS_PATH))

    def probe():
        p = current_prefs()
        up = {
            "site": state["httpd"] is not None or port_open("127.0.0.1", p["port"]),
            "workflow": port_open("127.0.0.1", p["workflow_port"]),
            "sheets": state["sheets"] is not None and state["sheets"].poll() is None,
            "lm": port_open("127.0.0.1", LM_STUDIO_PORT),
            "tts": port_open(TTS_HOST, TTS_PORT),
        }
        for key, dot in lights.items():
            dot.configure(fg="#1f9d55" if up[key] else "#bbb")
        tail.configure(text="" if up["lm"] else "LM Studio is not answering on :%d — start its server (and enable CORS) for the chat" % LM_STUDIO_PORT)
        root.after(2000, probe)

    def drain():
        try:
            while True:
                text = lines.get_nowait()
                log.configure(state="normal")
                log.insert("end", text + "\n")
                log.see("end")
                log.configure(state="disabled")
        except queue.Empty:
            pass
        root.after(150, drain)

    def on_close():
        stop()
        save_prefs(current_prefs())
        root.destroy()

    b_start.configure(command=start)
    b_stop.configure(command=stop)
    b_site.configure(command=open_site)
    b_chat.configure(command=open_chat)
    b_sheets.configure(command=open_sheets)
    b_tts.configure(command=open_tts)
    b_plates.configure(command=open_plates)
    b_prefs.configure(command=remember)
    root.protocol("WM_DELETE_WINDOW", on_close)

    say("Waluipedia — The Vigilance Terminal")
    say("  tick what you want running and press ▶ Start. The Qwen3-TTS studio stays off unless you tick it.")
    probe()
    drain()
    if args.autostart:
        root.after(300, start)
    root.mainloop()
    return 0



def main() -> int:
    parser = argparse.ArgumentParser(
        description="Serve the Waluipedia locally and open it in a browser.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="Ctrl-C to stop.",
    )
    parser.add_argument("--port", type=int, default=DEFAULT_PORT,
                        help="port to serve on (default %d; steps forward if busy)" % DEFAULT_PORT)
    parser.add_argument("--host", default="127.0.0.1",
                        help="interface to bind (default 127.0.0.1; use 0.0.0.0 to expose)")
    parser.add_argument("--route", default="",
                        help='hash route to open, e.g. "#/article/the_belly_of_the_beast"')
    parser.add_argument("--page", default="index.html",
                        help="page to open (default index.html)")
    parser.add_argument("--no-browser", action="store_true",
                        help="serve without opening a browser")
    parser.add_argument("--no-tts", action="store_true",
                        help="do not launch the Qwen3-TTS studio batch file "
                             "even if Downloads/qw/Run Qwen3 TTS.bat exists")
    parser.add_argument("--workflow", action="store_true",
                        help="also run workflow/server.py (the chatroom's disk saves, "
                             "archive routes and LM Studio bridge) on %d" % WORKFLOW_PORT)
    parser.add_argument("--workflow-port", type=int, default=WORKFLOW_PORT,
                        help="port for the workflow server (default %d)" % WORKFLOW_PORT)
    sheets = parser.add_mutually_exclusive_group()
    sheets.add_argument("--sheets", action="store_true",
                        help="run the character-sheet suite (tools/sheets-suite.py --watch) — "
                             "the default; the flag only overrides a remembered 'off' tick")
    sheets.add_argument("--no-sheets", action="store_true",
                        help="do not run the character-sheet suite")
    parser.add_argument("--git-sync", action="store_true",
                        help="two-way with GitHub: the sheets suite pulls before a pass, commits and pushes the "
                             "world mirror / sheets after, and polls GitHub while idle so the Mass Import module "
                             "and the tools update themselves (needs a clean checkout with push rights)")
    parser.add_argument("--art-base", default="", metavar="URL",
                        help="opt-in: the address Foundry's sheets load the archive's art from (the sheets suite's --art-base); "
                             "'auto' = this server (the Tailscale or LAN address with --host 0.0.0.0, else http://127.0.0.1:<port>/). "
                             "Default: blank — the suite copies the art into the Foundry Data folder")
    parser.add_argument("--foundry-data", default="", metavar="DIR",
                        help="your Foundry VTT Data folder (…/FoundryVTT/Data); the suite publishes the packets, "
                             "the Mass Import module and the art there so Sync in Foundry needs no URL. "
                             "Blank = the suite finds it (WALUIPEDIA_FOUNDRY_DATA, the usual AppData / "
                             "~/.local/share / Library paths)")
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument("--gui", action="store_true",
                      help="open the launcher window (the default where tkinter and a display exist)")
    mode.add_argument("--no-gui", action="store_true",
                      help="plain terminal mode: serve, print the address, Ctrl-C to stop")
    parser.add_argument("--autostart", action="store_true",
                        help="(window) press Start on open")
    args = parser.parse_args()
    with contextlib.suppress(Exception):
        # the address shows up even when piped to a log, and a glyph the
        # terminal's code page lacks (the suite's "→") becomes "?" instead of a crash
        sys.stdout.reconfigure(line_buffering=True, errors="replace")

    check_root()
    if args.gui or (not args.no_gui and gui_available()):
        if gui_available():
            return run_gui(args)
        print("  note    : no tkinter/display here — running in the terminal instead")
    port = find_port(args.host, args.port)

    display_host = "localhost" if args.host in ("0.0.0.0", "127.0.0.1", "") else args.host
    url = "http://%s:%d/%s%s" % (display_host, port, args.page, args.route)

    print("Waluipedia — The Vigilance Terminal")
    print("  serving : %s" % ROOT)
    print("  address : %s" % url)
    if args.host == "0.0.0.0":
        print("  note    : bound to 0.0.0.0 — reachable from other machines")
    if port != args.port:
        print("  note    : port %d was busy, using %d" % (args.port, port))
    workflow = None
    if args.workflow:
        workflow = launch_workflow(args.workflow_port, args.host)
    sheets_suite = None
    if not args.no_sheets:
        sheets_suite = launch_sheets_suite(port, foundry_data=args.foundry_data, git_sync=bool(args.git_sync),
                                           art_base=art_base_for(port, args.host, args.art_base))
    if not args.no_tts:
        launch_tts_studio()
    print_tailnet_tip(port, args.host)
    print("  stop    : Ctrl-C")
    print()

    if not args.no_browser:
        def open_browser():
            # Give the socket a moment so the first request is not refused.
            time.sleep(0.6)
            try:
                if not webbrowser.open(url):
                    raise webbrowser.Error("no browser")
            except Exception:
                print("  (could not open a browser automatically — "
                      "visit the address above)")
        threading.Thread(target=open_browser, daemon=True).start()

    try:
        with Server((args.host, port), Handler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
    finally:
        stop_process(workflow)
        stop_process(sheets_suite)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
