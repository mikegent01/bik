#!/usr/bin/env python3
"""
start.py — serve the Waluipedia locally and open it in a browser.

The site is static (see README: "Open index.html and it runs"), but opening it
straight off the filesystem breaks the parts that matter most: `fetch()` calls
against `Reputation-Matrix2/data/*.json` are blocked by the browser's CORS rules
on `file://`, so events, characters, props and investigations silently fail to
load. Serving over HTTP fixes that, and this script is the one-command way to do
it.

    python3 start.py                 # serve on 8765 and open the home page
    python3 start.py --port 9000     # pick the port
    python3 start.py --no-browser    # just serve (headless / remote boxes)
    python3 start.py --route "#/article/the_belly_of_the_beast"
    python3 start.py --host 0.0.0.0  # expose on the network / in a container

Ctrl-C to stop. Nothing is written to disk and nothing is built — this only
serves the repository as it already exists.
"""

from __future__ import annotations

import argparse
import contextlib
import http.server
import os
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



class Handler(http.server.SimpleHTTPRequestHandler):
    """Static handler with the two behaviours the archive needs."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        # The data layer is read at view time. A cached events.json is the
        # classic "I filed it but the page still shows the old one" bug.
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Expires", "0")
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


def launch_tts_studio() -> None:
    """Start 'Run Qwen3 TTS.bat' if it exists, so the studio comes up with
    the site. Never raises, never blocks: the webserver starts regardless,
    and a missing bat just means Read aloud needs the studio started by hand.
    """
    if tts_studio_up():
        print("  qwen   : studio already up on %s:%d — not launching again"
              % (TTS_HOST, TTS_PORT))
        return
    bat = next((b for b in tts_bat_candidates() if b.is_file()), None)
    if bat is None:
        print("  qwen   : 'Run Qwen3 TTS.bat' not found (looked in Downloads/qw)")
        print("            read aloud will need the studio started by hand")
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
            print("  qwen   : found %s but batch files only run on Windows" % bat)
            return
    except Exception as exc:  # a failed launch must not kill the site
        print("  qwen   : could not launch %s (%s)" % (bat, exc))
        print("            read aloud will need the studio started by hand")
        return
    print("  qwen   : launched %s" % bat)
    print("            the studio loads its model first — Read aloud works once")
    print("            it answers on http://%s:%d" % (TTS_HOST, TTS_PORT))



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
    args = parser.parse_args()

    check_root()
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
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
