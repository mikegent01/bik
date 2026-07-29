#!/usr/bin/env python3
"""Waluipedia Hub — local web GUI for every tool, data file, and generator.

Start it from anywhere:

    python tools/hub/server.py              # opens http://127.0.0.1:8777
    python tools/hub/server.py --port 9000
    python tools/hub/server.py --no-browser

The server only binds to localhost and only serves files from inside the
repository. It is a dev tool: do not expose it to a network.
"""
from __future__ import annotations

import argparse
import json
import mimetypes
import subprocess
import sys
import threading
import time
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.parse import parse_qs, unquote, urlparse

sys.path.insert(0, str(Path(__file__).resolve().parent))

from hubcore import creator, dataio, llm, paths, piles, registry  # noqa: E402

MAX_PREVIEW_BYTES = 400_000
# Guard rail: only scripts discovered under tools/ may be launched.
_running: dict[str, dict[str, Any]] = {}
_run_lock = threading.Lock()


def _json_bytes(value: Any) -> bytes:
    return json.dumps(value, ensure_ascii=False, default=str).encode("utf-8")


def _resolve_repo_path(raw: str) -> Path | None:
    """Resolve a client-supplied path, refusing anything outside the repo."""
    if not raw:
        return None
    candidate = Path(raw)
    if not candidate.is_absolute():
        candidate = paths.SITE_ROOT / candidate
    try:
        candidate = candidate.resolve()
        candidate.relative_to(paths.SITE_ROOT.resolve())
    except (ValueError, OSError):
        return None
    return candidate


class HubHandler(BaseHTTPRequestHandler):
    server_version = "WaluipediaHub/1.0"

    # ---------------------------------------------------------------- utils
    def log_message(self, fmt: str, *args: Any) -> None:      # quieter console
        if "--verbose" in sys.argv:
            super().log_message(fmt, *args)

    def _send(self, payload: bytes, content_type: str = "application/json", status: int = 200) -> None:
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(payload)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        try:
            self.wfile.write(payload)
        except (BrokenPipeError, ConnectionResetError):
            pass

    def _send_json(self, value: Any, status: int = 200) -> None:
        self._send(_json_bytes(value), "application/json", status)

    def _error(self, message: str, status: int = 400) -> None:
        self._send_json({"ok": False, "error": message}, status)

    def _body(self) -> dict[str, Any]:
        length = int(self.headers.get("Content-Length") or 0)
        if not length:
            return {}
        try:
            return json.loads(self.rfile.read(length).decode("utf-8")) or {}
        except (ValueError, UnicodeDecodeError):
            return {}

    # ------------------------------------------------------------------ GET
    def do_GET(self) -> None:                                  # noqa: N802
        parsed = urlparse(self.path)
        route = parsed.path
        query = {key: value[0] for key, value in parse_qs(parsed.query).items()}
        try:
            if route in ("/", "/index.html"):
                return self._serve_static("index.html")
            if route.startswith("/static/"):
                return self._serve_static(route[len("/static/"):])
            if route.startswith("/api/"):
                return self._api_get(route[len("/api/"):], query)
        except Exception as error:                             # noqa: BLE001
            return self._error(f"{type(error).__name__}: {error}", 500)
        self._error("Not found", 404)

    def _serve_static(self, name: str) -> None:
        target = (paths.WEB_DIR / name).resolve()
        try:
            target.relative_to(paths.WEB_DIR.resolve())
        except ValueError:
            return self._error("Forbidden", 403)
        if not target.is_file():
            return self._error("Not found", 404)
        guessed = mimetypes.guess_type(target.name)[0] or "application/octet-stream"
        self._send(target.read_bytes(), guessed)

    def _api_get(self, route: str, query: dict[str, str]) -> None:
        if route == "overview":
            data = registry.overview()
            data["llm"] = llm.available()
            data["outDir"] = str(paths.OUT_DIR)
            return self._send_json({"ok": True, "data": data})

        if route == "llm":
            return self._send_json({"ok": True, "data": llm.available()})

        if route == "script":
            target = _resolve_repo_path(query.get("file", ""))
            if not target or target.suffix != ".py" or not target.is_file():
                return self._error("Unknown script")
            source = target.read_text(encoding="utf-8", errors="replace")
            return self._send_json({"ok": True, "data": {
                **registry.scan_script(target),
                "source": source[:MAX_PREVIEW_BYTES],
                "truncated": len(source) > MAX_PREVIEW_BYTES,
            }})

        if route == "file":
            target = _resolve_repo_path(query.get("file", ""))
            if not target or not target.is_file():
                return self._error("Unknown file")
            size = target.stat().st_size
            text = target.read_text(encoding="utf-8", errors="replace")[:MAX_PREVIEW_BYTES]
            return self._send_json({"ok": True, "data": {
                "name": target.name, "path": paths.relative(target),
                "size": size, "truncated": size > MAX_PREVIEW_BYTES, "text": text,
            }})

        if route == "purchases":
            include_faction = query.get("faction", "1") != "0"
            players = [p for p in (query.get("players") or "").split(",") if p]
            use_ai = query.get("useAI", "0") == "1"
            return self._send_json({"ok": True, "data": piles.preview(
                players=players or None,
                include_faction=include_faction,
                use_ai_for_missing=use_ai,
            )})

        if route == "lore":
            return self._send_json({"ok": True, "data": {
                "characters": [
                    {"id": person.get("id"), "name": person.get("name"),
                     "race": person.get("race"), "title": person.get("title"),
                     "keyEvents": person.get("keyEvents") or []}
                    for person in dataio.characters()
                ],
                "events": [
                    {"id": event.get("id"), "name": event.get("name"),
                     "date": event.get("date"), "type": event.get("type")}
                    for event in dataio.events()
                ],
                "factions": [
                    {"id": faction.get("id"), "name": faction.get("name")}
                    for faction in dataio.factions()
                ],
                "classes": sorted(creator.CLASS_PROFILE),
                "playerKeys": dataio.player_keys(),
            }})

        if route == "outputs":
            paths.ensure_out_dirs()
            files = []
            for folder in (paths.PILES_DIR, paths.ACTORS_DIR):
                for path in sorted(folder.glob("*.json")):
                    stat = path.stat()
                    files.append({
                        "name": path.name, "path": str(path),
                        "relative": paths.relative(path),
                        "size": stat.st_size, "modified": stat.st_mtime,
                        "kind": "pile" if folder == paths.PILES_DIR else "actor",
                    })
            files.sort(key=lambda row: row["modified"], reverse=True)
            return self._send_json({"ok": True, "data": {"files": files,
                                                         "outDir": str(paths.OUT_DIR)}})

        if route == "runs":
            with _run_lock:
                return self._send_json({"ok": True, "data": {
                    "runs": [
                        {k: v for k, v in run.items() if k != "process"}
                        for run in sorted(_running.values(),
                                          key=lambda r: r["started"], reverse=True)
                    ]
                }})

        self._error("Unknown endpoint", 404)

    # ----------------------------------------------------------------- POST
    def do_POST(self) -> None:                                 # noqa: N802
        route = urlparse(self.path).path
        if not route.startswith("/api/"):
            return self._error("Not found", 404)
        route = route[len("/api/"):]
        body = self._body()
        try:
            if route == "piles/build":
                players = body.get("players") or None
                manifest = piles.build_all(
                    players=players,
                    include_faction=bool(body.get("includeFaction", True)),
                    write=True,
                    use_ai_for_missing=bool(body.get("useAIForMissing", False)),
                    model=(body.get("model") or "").strip() or None,
                )
                return self._send_json({"ok": True, "data": manifest})

            if route == "character/preview":
                result = creator.build_character(**_creator_kwargs(body))
                return self._send_json({"ok": True, "data": result["report"]})

            if route == "character/build":
                result = creator.build_character(**_creator_kwargs(body))
                target = creator.save_character(result)
                return self._send_json({"ok": True, "data": {
                    "report": result["report"],
                    "file": target,
                    "relativeFile": paths.relative(Path(target)),
                }})

            if route == "run":
                return self._run_script(body)

            if route == "refresh":
                dataio.export_shop_catalog(force=True)
                return self._send_json({"ok": True, "data": {"refreshed": True}})
        except Exception as error:                             # noqa: BLE001
            return self._error(f"{type(error).__name__}: {error}", 500)

        self._error("Unknown endpoint", 404)

    def _run_script(self, body: dict[str, Any]) -> None:
        """Run a discovered tool and capture its output.

        Only files that the registry already lists are runnable, which keeps
        this from becoming an arbitrary command endpoint.
        """
        target = _resolve_repo_path(str(body.get("file", "")))
        if not target or target.suffix != ".py" or not target.is_file():
            return self._error("Unknown script")
        allowed = {entry["file"] for entry in registry.scripts()}
        if str(target) not in allowed:
            return self._error("That script is not in the tools registry", 403)

        raw_args = body.get("args") or []
        args = [str(value) for value in raw_args if str(value).strip()]
        timeout = min(int(body.get("timeout") or 120), 900)

        started = time.time()
        try:
            completed = subprocess.run(
                [sys.executable, str(target), *args],
                cwd=paths.ROOT, capture_output=True, text=True,
                timeout=timeout, errors="replace",
            )
            payload = {
                "file": paths.relative(target),
                "args": args,
                "exitCode": completed.returncode,
                "stdout": completed.stdout[-40_000:],
                "stderr": completed.stderr[-20_000:],
                "duration": round(time.time() - started, 2),
                "timedOut": False,
            }
        except subprocess.TimeoutExpired as expired:
            payload = {
                "file": paths.relative(target),
                "args": args,
                "exitCode": None,
                "stdout": (expired.stdout or b"").decode("utf-8", "replace")[-40_000:]
                if isinstance(expired.stdout, bytes) else (expired.stdout or "")[-40_000:],
                "stderr": f"Timed out after {timeout}s. Long-running tools are better "
                          f"started in a terminal.",
                "duration": round(time.time() - started, 2),
                "timedOut": True,
            }
        self._send_json({"ok": True, "data": payload})


def _creator_kwargs(body: dict[str, Any]) -> dict[str, Any]:
    """Whitelist and coerce the character-creator options from the browser."""
    return {
        "name": (body.get("name") or "").strip() or None,
        "character_id": (body.get("characterId") or "").strip() or None,
        "event_ids": [str(value) for value in (body.get("eventIds") or []) if value],
        "faction_id": (body.get("factionId") or "").strip() or None,
        "class_name": (body.get("className") or "").strip() or None,
        "race_name": (body.get("raceName") or "").strip() or None,
        "level": int(body.get("level") or 1),
        "gear_count": int(body.get("gearCount") if body.get("gearCount") is not None else 6),
        "include_gear": bool(body.get("includeGear", True)),
        "use_model": bool(body.get("useModel", False)),
        "model": (body.get("model") or "").strip() or None,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--port", type=int, default=8777, help="Port to listen on")
    parser.add_argument("--host", default="127.0.0.1", help="Interface to bind (localhost only by default)")
    parser.add_argument("--no-browser", action="store_true", help="Do not open a browser window")
    parser.add_argument("--verbose", action="store_true", help="Log every request")
    args = parser.parse_args()

    paths.ensure_out_dirs()
    address = (args.host, args.port)
    try:
        server = ThreadingHTTPServer(address, HubHandler)
    except OSError as error:
        print(f"Could not bind {args.host}:{args.port} — {error}")
        print("Try a different port:  python tools/hub/server.py --port 8778")
        return 1

    url = f"http://{args.host}:{args.port}/"
    print("=" * 62)
    print("  WALUIPEDIA HUB")
    print(f"  {url}")
    print(f"  repo:    {paths.SITE_ROOT}")
    print(f"  output:  {paths.OUT_DIR}")
    print("  Ctrl+C to stop")
    print("=" * 62)
    if not args.no_browser:
        threading.Timer(0.6, lambda: webbrowser.open(url)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nHub stopped.")
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
