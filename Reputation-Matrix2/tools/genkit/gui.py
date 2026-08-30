"""The control panel.

Two backends, same controls, chosen automatically:

  * **tkinter** when the interpreter has it — a native window.
  * **a local web dashboard** otherwise, served from the standard library
    (`http.server`), no Flask, no npm, no install.

The fallback is not a consolation prize. Plenty of Python builds ship without
tkinter (this repo's does), and a browser page also works over SSH, which a
native window does not.

Both backends drive the same `Runner`, so the worker count is a live control
rather than a constant: the default is 2 concurrent LM Studio conversations,
and the pool has no ceiling, so 4 is a slider move.

The web dashboard also exposes a **data desk**: the four "tool" systems that
used to be view-only (Injury Table, Locations, Events, Battles) are now fully
editable. The dashboard reads and writes the underlying JSON in
`Reputation-Matrix2/data/` through `/api/<dataset>` endpoints, so the numbers,
cards and records can be changed and saved without leaving the page.
"""

from __future__ import annotations

import json
import os
import subprocess
import threading
import webbrowser
from collections import deque
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any

from .runner import Runner, RunnerEvent
from .settings import Settings
from .systems import all_systems


# --- paths ---------------------------------------------------------------
_HERE = Path(__file__).resolve()
TEMPLATE = _HERE.with_name("webui_template.html")
# gui.py -> Reputation-Matrix2/tools/genkit ; parents[2] = Reputation-Matrix2
DATA_DIR = _HERE.parents[2] / "data"
# parents[3] = the repository root (where `python .../generate_all.py` is run)
REPO_ROOT = _HERE.parents[3]

DATASETS = {
    "injuries": DATA_DIR / "injuries.json",
    "locations": DATA_DIR / "locations.json",
    "events": DATA_DIR / "events.json",
    "battles": DATA_DIR / "battles.json",
    "majorBattles": DATA_DIR / "majorBattles.json",
}

# Generators that ship a `--check` validator for a dataset.
_CHECK_CMDS = {
    "injuries": ["python3", "tools/generate-injury-table.py", "--check"],
    "locations": ["python3", "Reputation-Matrix2/tools/generate_locations.py", "--check"],
}


AUXILIARY_GENERATORS = [
    {"id": "injury-table", "title": "Injury Table",
     "summary": "Editable d100 desk — also edit live in the Injury Table tab",
     "command": "tools/generate-injury-table.py"},
    {"id": "new-events", "title": "New Events",
     "summary": "Generate source-aware foreign past events — or edit them in the Events tab",
     "command": "tools/expand-waluipedia.py --past-events"},
    {"id": "new-battles", "title": "New Battles",
     "summary": "Generate source-aware foreign past battles — or edit them in the Battles tab",
     "command": "tools/expand-waluipedia.py --past-events"},
    {"id": "new-locations", "title": "Locations",
     "summary": "Generate richer validated location cards — or edit them in the Locations tab",
     "command": "Reputation-Matrix2/tools/generate_locations.py"},
    {"id": "abilities", "title": "Training Wing Abilities",
     "summary": "Generate and validate ability-deficit records",
     "command": "Reputation-Matrix2/tools/genkit/systems/abilities.py"},
    {"id": "shop-items", "title": "Warizon Shop Stock",
     "summary": "Generate rarity-deficit shop items",
     "command": "Reputation-Matrix2/tools/genkit/systems/shop_items.py"},
    {"id": "crafting", "title": "Crafting Forge",
     "summary": "Classify and generate crafting schools",
     "command": "Reputation-Matrix2/tools/genkit/systems/crafting.py"},
    {"id": "factions", "title": "Faction Dossiers",
     "summary": "Source-backed faction discovery and dossiers",
     "command": "Reputation-Matrix2/tools/genkit/systems/faction_dossiers.py"},
    {"id": "wahwire", "title": "WAHwire",
     "summary": "Evidence-gated posts, threads, profiles, and pruning",
     "command": "Reputation-Matrix2/tools/genkit/systems/wahwire.py"},
    {"id": "bros-attacks", "title": "Bros Attacks",
     "summary": "Evidence-gated battle recordings",
     "command": "Reputation-Matrix2/tools/genkit/systems/bros_attacks.py"},
]


def _count_dataset(name: str) -> int:
    """Live record count for the snapshot cards (never raises)."""
    path = DATASETS.get(name)
    if not path:
        return 0
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return 0
    if isinstance(data, list):
        return len(data)
    if isinstance(data, dict) and isinstance(data.get("entries"), list):
        return len(data["entries"])
    return 0


class RunState:
    """Shared, thread-safe state both GUI backends render."""

    def __init__(self) -> None:
        self.lock = threading.Lock()
        self.log: deque[dict[str, str]] = deque(maxlen=300)
        self.running = False
        self.produced = 0
        self.failed = 0
        self.retried = 0
        self.runner: Runner | None = None
        self.thread: threading.Thread | None = None
        self.per_system: dict[str, dict[str, int]] = {}

    def note(self, event: RunnerEvent) -> None:
        with self.lock:
            self.log.append({"kind": event.kind, "text": event.text, "system": event.system_id})
            # `or` would swallow a real 0 and leave a stale count on screen —
            # compare against None so "no counter on this event" is the only
            # thing that keeps the previous value.
            if event.produced is not None:
                self.produced = event.produced
            if event.failed is not None:
                self.failed = event.failed
            if event.retried is not None:
                self.retried = event.retried
            if event.system_id and event.kind in ("ok", "fail", "retry"):
                row = self.per_system.setdefault(
                    event.system_id, {"ok": 0, "fail": 0, "retry": 0}
                )
                row[{"ok": "ok", "fail": "fail", "retry": "retry"}[event.kind]] += 1
            if event.kind in ("done", "error"):
                self.running = False

    def snapshot(self) -> dict[str, Any]:
        with self.lock:
            return {
                "running": self.running,
                "produced": self.produced,
                "failed": self.failed,
                "retried": self.retried,
                "log": list(self.log)[-120:],
                "perSystem": dict(self.per_system),
                "generators": AUXILIARY_GENERATORS,
                "systems": [
                    {"id": "injury-table", "title": "Injury Table · editable d100",
                     "stage": "tool", "enabled": False,
                     "pending": _count_dataset("injuries"),
                     "summary": "Edit the 100-row d100 table in the Injury Table tab, then Save"},
                    {"id": "locations-new", "title": "Locations · editable cards",
                     "stage": "tool", "enabled": False,
                     "pending": _count_dataset("locations"),
                     "summary": "Edit location cards in the Locations tab"},
                    {"id": "events-new", "title": "Events · editable records",
                     "stage": "tool", "enabled": False,
                     "pending": _count_dataset("events"),
                     "summary": "Edit event records in the Events tab"},
                    {"id": "battles-new", "title": "Battles · editable records",
                     "stage": "tool", "enabled": False,
                     "pending": _count_dataset("battles"),
                     "summary": "Edit battle records in the Battles tab"},
                ] + [
                    {
                        "id": s.id,
                        "title": s.title,
                        "stage": s.stage,
                        "enabled": s.enabled,
                        "pending": s.count_pending(),
                        "summary": s.summary,
                    }
                    for s in all_systems()
                ],
            }

    def start(self, settings: Settings) -> str:
        with self.lock:
            if self.running:
                return "already running"
            self.running = True
            self.produced = 0
            self.failed = 0
            self.retried = 0
            self.per_system.clear()
        runner = Runner(all_systems(), settings, on_event=self.note)
        self.runner = runner
        self.thread = threading.Thread(target=runner.run, daemon=True)
        self.thread.start()
        return "started"

    def stop(self) -> str:
        if self.runner:
            self.runner.stop()
        with self.lock:
            self.running = False
        return "stopping"


# ---------------------------------------------------------------------------
# data API helpers
# ---------------------------------------------------------------------------

def _atomic_write_json(path: Path, data: Any) -> None:
    """Write JSON to disk without leaving a half-written file behind."""
    tmp = path.with_name(f"{path.name}.tmp-{os.getpid()}-{threading.get_ident()}")
    tmp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    os.replace(tmp, path)


def _run_dataset_check(name: str) -> dict[str, Any]:
    """Validate a dataset via its generator, or a generic JSON sanity pass."""
    if name in _CHECK_CMDS:
        try:
            proc = subprocess.run(
                _CHECK_CMDS[name], cwd=REPO_ROOT, capture_output=True, text=True, timeout=120
            )
            return {"ok": True, "stdout": proc.stdout, "stderr": proc.stderr,
                    "exit": proc.returncode}
        except Exception as exc:  # noqa: BLE001 - report, never crash the server
            return {"ok": False, "stdout": "", "stderr": str(exc), "exit": -1}
    # Generic fallback: confirm the file is valid JSON and report its shape.
    path = DATASETS.get(name)
    if not path:
        return {"ok": False, "stdout": "", "stderr": "unknown dataset", "exit": -1}
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        return {"ok": False, "stdout": "", "stderr": f"invalid JSON: {exc}", "exit": -1}
    if isinstance(data, list):
        count = len(data)
    elif isinstance(data, dict) and isinstance(data.get("entries"), list):
        count = len(data["entries"])
    elif isinstance(data, dict):
        count = len(data)
    else:
        count = 0
    return {"ok": True, "stdout": f"{name}.json is valid JSON — {count} records/entries",
            "stderr": "", "exit": 0}


# ---------------------------------------------------------------------------
# web backend
# ---------------------------------------------------------------------------

# Minimal fallback page — keeps `render_web_page` returning a valid page with
# the exact markers the regression tests assert on, even if the rich template
# is missing for some reason.
_BASIC_PAGE = """<!doctype html>
<html><head><meta charset="utf-8"><title>genkit</title></head><body>
<label>Only</label><input id="only" value="__ONLY__" placeholder="faction-dossiers">
<label>Workers</label><input id="workers" type="number" min="1" max="8" value="__WORKERS__">
<label>Limit</label><input id="limit" type="number" min="0" value="__LIMIT__">
<label>Temp</label><input id="temperature" type="number" step="0.05" min="0" max="2" value="__TEMPERATURE__">
<label><input type="checkbox" id="dry" style="width:auto" __DRY_CHECKED__> Dry</label>
<table><thead><tr><th>stage</th><th>system</th><th>pending (live)</th><th>ok</th><th>fail</th></tr></thead><tbody></tbody></table>
</body></html>"""


def render_web_page(defaults: Settings | None = None) -> str:
    """Render the dashboard with every command-line default preserved."""
    base = defaults or Settings()
    try:
        page = TEMPLATE.read_text(encoding="utf-8")
    except OSError:
        page = _BASIC_PAGE
    return (page
            .replace("__ENDPOINT__", base.endpoint)
            .replace("__MODEL__", base.model or "")
            .replace("__WORKERS__", str(base.workers or 2))
            .replace("__LIMIT__", str(base.limit or 0))
            .replace("__ONLY__", ",".join(base.only))
            .replace("__TEMPERATURE__", str(base.temperature))
            .replace("__DRY_CHECKED__", "checked" if base.dry_run else ""))


def _handler_factory(state: RunState, defaults: Settings | None = None):
    class Handler(BaseHTTPRequestHandler):
        def log_message(self, *args):  # noqa: A003 - quiet per-request logging
            pass

        def _trace(self, exc: Exception) -> None:
            import traceback
            traceback.print_exc()

        def _send(self, code: int, body: bytes, content_type: str) -> None:
            self.send_response(code)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def _send_json(self, obj, code: int = 200) -> None:
            body = json.dumps(obj).encode("utf-8")
            self._send(code, body, "application/json")

        def _route(self) -> str:
            return self.path.split("?", 1)[0].rstrip("/") or "/"

        def do_GET(self) -> None:  # noqa: N802
            try:
                route = self._route()
                if route == "/state":
                    self._send_json(state.snapshot())
                    return
                if route.startswith("/api/"):
                    name = route[len("/api/"):]
                    path = DATASETS.get(name)
                    if not path or not path.exists():
                        self._send_json({"error": f"unknown dataset: {name}"}, 404)
                        return
                    try:
                        self._send(200, path.read_bytes(), "application/json")
                    except OSError as exc:
                        self._send_json({"error": str(exc)}, 500)
                    return
                # Default: the dashboard page.
                self._send(200, render_web_page(defaults).encode("utf-8"), "text/html; charset=utf-8")
            except Exception as exc:  # noqa: BLE001 - surface, never swallow
                self._trace(exc)
                try:
                    self._send_json({"error": f"{type(exc).__name__}: {exc}"}, 500)
                except Exception:
                    pass

        def do_POST(self) -> None:  # noqa: N802
            route = self._route()
            length = int(self.headers.get("Content-Length") or 0)
            raw = self.rfile.read(length) if length else b"{}"

            if route == "/stop":
                self._send(200, state.stop().encode(), "text/plain")
                return

            if route == "/start":
                try:
                    body = json.loads(raw or b"{}")
                except json.JSONDecodeError:
                    body = {}
                base = defaults or Settings()
                settings = Settings(
                    endpoint=body.get("endpoint") or base.endpoint,
                    model=body.get("model") or base.model or "",
                    workers=int(body.get("workers") or base.workers or 2),
                    limit=int(body.get("limit") or 0),
                    temperature=float(body.get("temperature") or base.temperature or 0.7),
                    dry_run=bool(body.get("dry_run")),
                    timeout=base.timeout,
                    only=[s.strip() for s in (body.get("only") or "").split(",") if s.strip()],
                    weights={str(k): max(0.0, float(v))
                             for k, v in (body.get("weights") or {}).items()},
                )
                self._send(200, state.start(settings).encode(), "text/plain")
                return

            if route.startswith("/api/"):
                name = route[len("/api/"):]
                if name.endswith("/check"):
                    ds = name[: -len("/check")]
                    self._send_json(_run_dataset_check(ds))
                    return
                path = DATASETS.get(name)
                if not path:
                    self._send_json({"ok": False, "error": f"unknown dataset: {name}"}, 404)
                    return
                try:
                    payload = json.loads(raw or b"{}")
                except json.JSONDecodeError as exc:
                    self._send_json({"ok": False, "error": f"invalid JSON body: {exc}"}, 400)
                    return
                if not isinstance(payload, (dict, list)):
                    self._send_json({"ok": False, "error": "body must be a JSON object or array"},
                                    400)
                    return
                _atomic_write_json(path, payload)
                self._send_json({"ok": True, "bytes": len(raw),
                                 "path": str(path.relative_to(REPO_ROOT))})
                return

            self._send_json({"error": "not found"}, 404)

    return Handler


def launch_web(host: str = "127.0.0.1", port: int = 8765, *, open_browser: bool = True,
               defaults: Settings | None = None) -> None:
    state = RunState()
    server = ThreadingHTTPServer((host, port), _handler_factory(state, defaults))
    # 0.0.0.0 is a bind address, not a browser destination. Keep the
    # dashboard local by default and open a valid loopback URL even when a
    # caller uses 0.0.0.0 for the server socket.
    browser_host = "127.0.0.1" if host in ("0.0.0.0", "::") else host
    url = f"http://{browser_host}:{port}/"
    bind_url = f"http://{host}:{port}/"
    print(f"genkit control panel: {url}")
    if browser_host != host:
        print(f"bound locally on {bind_url}; 0.0.0.0 is not a browser address")
    print("Ctrl-C to quit.")
    if open_browser:
        try:
            webbrowser.open(url)
        except Exception:  # noqa: BLE001
            pass
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nshutting down")
        state.stop()
        server.shutdown()


# ---------------------------------------------------------------------------
# tkinter backend
# ---------------------------------------------------------------------------

def launch_tk(defaults: Settings | None = None) -> None:
    import tkinter as tk
    from tkinter import ttk

    state = RunState()
    root = tk.Tk()
    root.title("genkit · all-systems generator")
    root.geometry("980x640")

    controls = ttk.Frame(root, padding=10)
    controls.pack(fill="x")

    base = defaults or Settings()
    fields: dict[str, tk.Variable] = {
        "endpoint": tk.StringVar(value=base.endpoint),
        "model": tk.StringVar(value=base.model or ""),
        "workers": tk.IntVar(value=base.workers or 2),
        "limit": tk.IntVar(value=base.limit or 0),
        "only": tk.StringVar(value=",".join(base.only)),
        "temperature": tk.DoubleVar(value=base.temperature),
    }
    dry = tk.BooleanVar(value=base.dry_run)

    for column, (label, key, width) in enumerate(
        [("Endpoint", "endpoint", 34), ("Model", "model", 18),
         ("Workers", "workers", 5), ("Limit", "limit", 6),
         ("Only", "only", 18), ("Temp", "temperature", 5)]
    ):
        ttk.Label(controls, text=label).grid(row=0, column=column * 2, sticky="e", padx=(8, 2))
        ttk.Entry(controls, textvariable=fields[key], width=width).grid(
            row=0, column=column * 2 + 1, sticky="w"
        )
    ttk.Checkbutton(controls, text="Dry run", variable=dry).grid(row=0, column=12, padx=8)

    buttons = ttk.Frame(root, padding=(10, 0))
    buttons.pack(fill="x")
    start_button = ttk.Button(buttons, text="Start")
    stop_button = ttk.Button(buttons, text="Stop", state="disabled")
    start_button.pack(side="left")
    stop_button.pack(side="left", padx=6)
    status = ttk.Label(buttons, text="idle")
    status.pack(side="right")

    table = ttk.Treeview(
        root, columns=("stage", "pending", "ok", "fail"), show="tree headings", height=7
    )
    for column, heading, width in (
        ("#0", "system", 320), ("stage", "stage", 60),
        ("pending", "pending (live)", 100), ("ok", "ok", 70), ("fail", "fail", 70),
    ):
        table.heading(column, text=heading)
        table.column(column, width=width, anchor="w" if column == "#0" else "center")
    table.pack(fill="x", padx=10, pady=8)

    log_box = tk.Text(root, height=18, bg="#12100f", fg="#f2e9de", insertbackground="#f2e9de")
    log_box.pack(fill="both", expand=True, padx=10, pady=(0, 10))

    def refresh() -> None:
        snap = state.snapshot()
        status.config(
            text=f"{'running' if snap['running'] else 'idle'} · "
                 f"produced {snap['produced']} · failed {snap['failed']}"
                 f" · retried {snap.get('retried', 0)}"
        )
        start_button.config(state="disabled" if snap["running"] else "normal")
        stop_button.config(state="normal" if snap["running"] else "disabled")
        for row in table.get_children():
            table.delete(row)
        for system in snap["systems"]:
            counts = snap["perSystem"].get(system["id"], {"ok": 0, "fail": 0})
            table.insert(
                "", "end", text=system["title"],
                values=(system["stage"] if system["enabled"] else "off",
                        system["pending"], counts["ok"], counts["fail"]),
            )
        log_box.delete("1.0", "end")
        for line in snap["log"][-60:]:
            log_box.insert("end", f"{line['kind']:5} · {line['text']}\n")
        log_box.see("end")
        root.after(1200, refresh)

    def on_start() -> None:
        state.start(
            Settings(
                endpoint=fields["endpoint"].get(),
                model=fields["model"].get(),
                workers=int(fields["workers"].get() or 2),
                limit=int(fields["limit"].get() or 0),
                temperature=float(fields["temperature"].get() or 0.7),
                dry_run=dry.get(),
                only=[s.strip() for s in fields["only"].get().split(",") if s.strip()],
            )
        )

    start_button.config(command=on_start)
    stop_button.config(command=state.stop)
    refresh()
    root.mainloop()


def launch(prefer_web: bool = False, defaults: Settings | None = None, **kwargs) -> None:
    """Native window when possible, browser dashboard when not."""
    # A non-loopback bind is an explicit request to reach the panel from
    # elsewhere, which the native window cannot satisfy.
    if kwargs.get("host") not in (None, "", "127.0.0.1", "localhost"):
        prefer_web = True
    if not prefer_web:
        try:
            import tkinter  # noqa: F401
        except ModuleNotFoundError:
            print("tkinter is not available — falling back to the web dashboard.")
        else:
            launch_tk(defaults)
            return
    launch_web(defaults=defaults, **kwargs)
