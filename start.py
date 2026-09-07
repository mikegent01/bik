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
import sys
import threading
import time
import webbrowser
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DEFAULT_PORT = 8765
# Files that prove we are pointed at the archive and not a random directory.
LANDMARKS = ("index.html", "Reputation-Matrix2/data/events.json")


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
