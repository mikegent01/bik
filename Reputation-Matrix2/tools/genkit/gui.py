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

# Allow `python gui.py` as well as `python -m genkit.gui` / generate_all.py --web.
if __name__ == "__main__" and not __package__:
    import sys as _sys
    from pathlib import Path as _Path
    _sys.path.insert(0, str(_Path(__file__).resolve().parent.parent))
    __package__ = "genkit"

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
     "summary": "Popcorn system `injury-table` — mix % in Generate, or hand-edit in the Injury Table tab",
     "command": "python generate_all.py --only injury-table"},
    {"id": "new-events", "title": "Events",
     "summary": "Popcorn system `events` — mix % in Generate, or hand-edit in the Events tab",
     "command": "python generate_all.py --only events"},
    {"id": "new-battles", "title": "Battles",
     "summary": "Popcorn system `battles` — mix % in Generate, or hand-edit in the Battles tab",
     "command": "python generate_all.py --only battles"},
    {"id": "new-locations", "title": "Locations",
     "summary": "Popcorn system `locations` — mix % in Generate, or hand-edit in the Locations tab",
     "command": "python generate_all.py --only locations"},
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
    {"id": "mages-codex", "title": "Mages Guild Codex",
     "summary": "Draft and expand the Mages Guild Codex",
     "command": "python tools/gen-mages-guild-code.py --overnight"},
    {"id": "mages-forms", "title": "Mages Guild Forms",
     "summary": "Generate complex JSON Mages Guild forms",
     "command": "python tools/gen-mages-forms.py --overnight"},
    {"id": "bros-attacks", "title": "Bros Attacks",
     "summary": "Evidence-gated battle recordings",
     "command": "Reputation-Matrix2/tools/genkit/systems/bros_attacks.py"},
]


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
        # Unattended / overnight mode: a supervisor loop that repeats popcorn
        # cycles and recovers from an unavailable LM Studio.
        self.overnight = False
        self.overnight_thread: threading.Thread | None = None
        self.overnight_stop: str | None = None  # why the loop ended
        self.aux_processes: dict[str, subprocess.Popen] = {}

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
            # clean up dead processes
            for aid in list(self.aux_processes.keys()):
                if self.aux_processes[aid].poll() is not None:
                    del self.aux_processes[aid]
            
            return {
                "running": self.running,
                "produced": self.produced,
                "failed": self.failed,
                "retried": self.retried,
                "overnight": self.overnight,
                "overnightStop": self.overnight_stop,
                "log": list(self.log)[-120:],
                "perSystem": dict(self.per_system),
                "generators": [
                    {**g, "running": g["id"] in self.aux_processes}
                    for g in AUXILIARY_GENERATORS
                ],
                "systems": [
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

    # -- overnight supervisor -------------------------------------------------

    def start_overnight(self, settings: Settings, max_hours: float,
                        stop_at: str, restart_limit: int, cycle_limit: int) -> str:
        import datetime
        import time

        with self.lock:
            if self.overnight:
                return "already running"
            self.overnight = True
            self.overnight_stop = None

        def loop() -> None:
            import time as _time

            # Sleep in small chunks so a Stop request is honoured promptly
            # even while the supervisor is backing off during an LM Studio outage.
            def sleep_chunked(seconds: float) -> None:
                step = 1.0
                elapsed = 0.0
                while elapsed < seconds and self.overnight:
                    _time.sleep(min(step, seconds - elapsed))
                    elapsed += step

            start = _time.time()
            stop_dt = None
            if stop_at:
                try:
                    hh, mm = (int(x) for x in stop_at.split(":"))
                    now = datetime.datetime.now()
                    cand = now.replace(hour=hh, minute=mm, second=0, microsecond=0)
                    if cand <= now:
                        cand += datetime.timedelta(days=1)
                    stop_dt = cand
                except Exception:
                    stop_dt = None
            cycle = 0
            no_progress = 0
            while True:
                if not self.overnight:
                    self.overnight_stop = "manual"
                    break
                if stop_dt and datetime.datetime.now() >= stop_dt:
                    self.overnight_stop = "stop-at"
                    break
                if max_hours and (_time.time() - start) >= max_hours * 3600:
                    self.overnight_stop = "max-hours"
                    break
                cycle += 1
                cyc = Settings(
                    endpoint=settings.endpoint, model=settings.model,
                    workers=settings.workers, timeout=settings.timeout,
                    temperature=settings.temperature, limit=cycle_limit or 0,
                    only=settings.only, skip=settings.skip, weights=settings.weights,
                    dry_run=settings.dry_run, retry_failed=settings.retry_failed,
                    seed=settings.seed, pace=settings.pace,
                )
                prev = self.produced
                self.note(RunnerEvent("started", f"overnight cycle {cycle}"))
                try:
                    Runner(all_systems(), cyc, on_event=self.note).run()
                except Exception as exc:  # LM Studio down / unexpected
                    self.note(RunnerEvent("error",
                                         f"overnight cycle {cycle} error: {exc}"))
                    sleep_chunked(min(30 + cycle * 30, 600))
                    continue
                produced = self.produced - prev
                if produced == 0:
                    no_progress += 1
                    sleep_chunked(min(60 * no_progress, 900))
                else:
                    no_progress = 0
                    sleep_chunked(60)
            with self.lock:
                self.overnight = False
            self.note(RunnerEvent("done",
                                  f"overnight finished ({self.overnight_stop})"))

        self.overnight_thread = threading.Thread(target=loop, daemon=True)
        self.overnight_thread.start()
        return "started"

    def toggle_aux(self, aux_id: str) -> str:
        with self.lock:
            gen = next((g for g in AUXILIARY_GENERATORS if g["id"] == aux_id), None)
            if not gen:
                return "Unknown generator"
            if aux_id in self.aux_processes:
                proc = self.aux_processes.pop(aux_id)
                if proc.poll() is None:
                    proc.terminate()
                return f"Stopped {gen['title']}"
            else:
                proc = subprocess.Popen(gen["command"], shell=True, cwd=REPO_ROOT)
                self.aux_processes[aux_id] = proc
                return f"Started {gen['title']}"


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
                if type(exc).__name__ not in ('ConnectionAbortedError', 'BrokenPipeError', 'ConnectionResetError'):
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

            if route == "/overnight/stop":
                self._send(200, state.stop_overnight().encode(), "text/plain")
                return

            if route == "/run-aux":
                try:
                    body = json.loads(raw or b"{}")
                    aux_id = body.get("id")
                    msg = state.toggle_aux(aux_id)
                    self._send_json({"ok": True, "msg": msg})
                except Exception as e:
                    self._send_json({"ok": False, "error": str(e)}, 500)
                return

            if route == "/overnight/start":
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
                msg = state.start_overnight(
                    settings,
                    max_hours=float(body.get("maxHours") or 8.0),
                    stop_at=str(body.get("stopAt") or ""),
                    restart_limit=int(body.get("restartLimit") or 50),
                    cycle_limit=int(body.get("cycleLimit") or 0),
                )
                self._send(200, msg.encode(), "text/plain")
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


if __name__ == "__main__":
    launch(prefer_web=True)
