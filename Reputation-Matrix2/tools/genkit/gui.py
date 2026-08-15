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
"""

from __future__ import annotations

import json
import threading
import webbrowser
from collections import deque
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from typing import Any

from .runner import Runner, RunnerEvent
from .settings import Settings
from .systems import all_systems


class RunState:
    """Shared, thread-safe state both GUI backends render."""

    def __init__(self) -> None:
        self.lock = threading.Lock()
        self.log: deque[dict[str, str]] = deque(maxlen=300)
        self.running = False
        self.produced = 0
        self.failed = 0
        self.runner: Runner | None = None
        self.thread: threading.Thread | None = None
        self.per_system: dict[str, dict[str, int]] = {}

    def note(self, event: RunnerEvent) -> None:
        with self.lock:
            self.log.append({"kind": event.kind, "text": event.text, "system": event.system_id})
            self.produced = event.produced or self.produced
            self.failed = event.failed or self.failed
            if event.system_id and event.kind in ("ok", "fail"):
                row = self.per_system.setdefault(event.system_id, {"ok": 0, "fail": 0})
                row["ok" if event.kind == "ok" else "fail"] += 1
            if event.kind in ("done", "error"):
                self.running = False

    def snapshot(self) -> dict[str, Any]:
        with self.lock:
            return {
                "running": self.running,
                "produced": self.produced,
                "failed": self.failed,
                "log": list(self.log)[-120:],
                "perSystem": dict(self.per_system),
                "systems": [
                    {
                        "id": s.id,
                        "title": s.title,
                        "stage": s.stage,
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
# web backend
# ---------------------------------------------------------------------------

PAGE = """<!doctype html>
<html><head><meta charset="utf-8"><title>genkit · all-systems generator</title>
<style>
 :root{--bg:#12100f;--panel:#1c1917;--line:#3a322c;--ink:#f2e9de;--muted:#a99a89;
       --gold:#e0b400;--ok:#4ade80;--bad:#f87171}
 *{box-sizing:border-box}
 body{margin:0;background:var(--bg);color:var(--ink);
      font:14px/1.5 ui-monospace,SFMono-Regular,Menlo,monospace}
 header{padding:14px 20px;border-bottom:1px solid var(--line);display:flex;
        gap:18px;align-items:center;flex-wrap:wrap;background:var(--panel)}
 h1{font-size:16px;margin:0;color:var(--gold);letter-spacing:.5px}
 .wrap{display:grid;grid-template-columns:340px 1fr;gap:0;height:calc(100vh - 59px)}
 .side{border-right:1px solid var(--line);padding:16px;overflow:auto;background:var(--panel)}
 .main{padding:16px;overflow:auto}
 label{display:block;margin:10px 0 4px;color:var(--muted);font-size:12px;
       text-transform:uppercase;letter-spacing:.6px}
 input,select{width:100%;padding:7px 9px;background:#0d0b0a;color:var(--ink);
              border:1px solid var(--line);border-radius:5px;font:inherit}
 button{padding:9px 16px;border-radius:5px;border:1px solid var(--line);
        background:var(--gold);color:#231c00;font:inherit;font-weight:700;cursor:pointer}
 button.ghost{background:transparent;color:var(--ink)}
 button:disabled{opacity:.4;cursor:not-allowed}
 table{width:100%;border-collapse:collapse;margin-bottom:18px}
 th,td{text-align:left;padding:6px 8px;border-bottom:1px solid var(--line);font-size:13px}
 th{color:var(--muted);font-weight:600;font-size:11px;text-transform:uppercase}
 .stage{display:inline-block;padding:1px 6px;border-radius:3px;font-size:11px;
        background:#332b22;color:var(--gold)}
 .log{font-size:12.5px}
 .log div{padding:2px 0;border-bottom:1px solid #241f1b}
 .ok{color:var(--ok)} .fail{color:var(--bad)} .task{color:var(--muted)}
 .stat{font-size:22px;font-weight:700}
 .stats{display:flex;gap:26px;margin-left:auto}
 .stats div span{display:block;font-size:11px;color:var(--muted);text-transform:uppercase}
</style></head><body>
<header>
  <h1>genkit · all-systems generator</h1>
  <div class="stats">
    <div><span>produced</span><b class="stat ok" id="produced">0</b></div>
    <div><span>failed</span><b class="stat fail" id="failed">0</b></div>
    <div><span>state</span><b class="stat" id="state">idle</b></div>
  </div>
</header>
<div class="wrap">
 <div class="side">
  <label>LM Studio endpoint</label>
  <input id="endpoint" value="http://127.0.0.1:1234/v1/chat/completions">
  <label>Model (blank = whatever is loaded)</label>
  <input id="model" placeholder="auto-detect">
  <label>Workers — concurrent LM Studio conversations</label>
  <input id="workers" type="number" min="1" max="8" value="2">
  <label>Stop after N records (0 = keep going)</label>
  <input id="limit" type="number" min="0" value="0">
  <label>Only these systems (comma ids, blank = all)</label>
  <input id="only" placeholder="reputation,crafting">
  <label>Temperature</label>
  <input id="temperature" type="number" step="0.05" min="0" max="2" value="0.7">
  <label><input type="checkbox" id="dry" style="width:auto"> Dry run (write nothing)</label>
  <div style="display:flex;gap:8px;margin-top:16px">
    <button id="go">Start</button>
    <button id="halt" class="ghost" disabled>Stop</button>
  </div>
 </div>
 <div class="main">
  <table id="systems"><thead><tr><th>stage</th><th>system</th><th>pending</th>
   <th>ok</th><th>fail</th></tr></thead><tbody></tbody></table>
  <div class="log" id="log"></div>
 </div>
</div>
<script>
const $=id=>document.getElementById(id);
async function poll(){
  try{
    const s=await (await fetch('/state')).json();
    $('produced').textContent=s.produced; $('failed').textContent=s.failed;
    $('state').textContent=s.running?'running':'idle';
    $('go').disabled=s.running; $('halt').disabled=!s.running;
    $('systems').tBodies[0].innerHTML=s.systems.map(x=>{
      const p=s.perSystem[x.id]||{ok:0,fail:0};
      return `<tr><td><span class="stage">${x.stage}</span></td>
        <td title="${x.summary}">${x.title}</td><td>${x.pending}</td>
        <td class="ok">${p.ok}</td><td class="fail">${p.fail}</td></tr>`;}).join('');
    $('log').innerHTML=s.log.slice().reverse().map(l=>
      `<div class="${l.kind}">${l.kind.padEnd(5)} · ${escapeHtml(l.text)}</div>`).join('');
  }catch(e){$('state').textContent='offline';}
}
function escapeHtml(t){return t.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));}
$('go').onclick=async()=>{
  await fetch('/start',{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({endpoint:$('endpoint').value,model:$('model').value,
      workers:+$('workers').value,limit:+$('limit').value,only:$('only').value,
      temperature:+$('temperature').value,dry_run:$('dry').checked})});
  poll();
};
$('halt').onclick=async()=>{await fetch('/stop',{method:'POST'});poll();};
poll(); setInterval(poll,1200);
</script></body></html>
"""


def _handler_factory(state: RunState):
    class Handler(BaseHTTPRequestHandler):
        def log_message(self, *args):  # noqa: A003 - silence per-request logging
            pass

        def _send(self, code: int, body: bytes, content_type: str) -> None:
            self.send_response(code)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def do_GET(self) -> None:  # noqa: N802
            if self.path.startswith("/state"):
                payload = json.dumps(state.snapshot()).encode("utf-8")
                self._send(200, payload, "application/json")
            else:
                self._send(200, PAGE.encode("utf-8"), "text/html; charset=utf-8")

        def do_POST(self) -> None:  # noqa: N802
            if self.path.startswith("/stop"):
                self._send(200, state.stop().encode(), "text/plain")
                return
            length = int(self.headers.get("Content-Length") or 0)
            body = json.loads(self.rfile.read(length) or b"{}")
            settings = Settings(
                endpoint=body.get("endpoint") or Settings().endpoint,
                model=body.get("model") or "",
                workers=int(body.get("workers") or 2),
                limit=int(body.get("limit") or 0),
                temperature=float(body.get("temperature") or 0.7),
                dry_run=bool(body.get("dry_run")),
                only=[s.strip() for s in (body.get("only") or "").split(",") if s.strip()],
            )
            self._send(200, state.start(settings).encode(), "text/plain")

    return Handler


def launch_web(host: str = "127.0.0.1", port: int = 8765, *, open_browser: bool = True) -> None:
    state = RunState()
    server = ThreadingHTTPServer((host, port), _handler_factory(state))
    url = f"http://{host}:{port}/"
    print(f"genkit control panel: {url}")
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

def launch_tk() -> None:
    import tkinter as tk
    from tkinter import ttk

    state = RunState()
    root = tk.Tk()
    root.title("genkit · all-systems generator")
    root.geometry("980x640")

    controls = ttk.Frame(root, padding=10)
    controls.pack(fill="x")

    fields: dict[str, tk.Variable] = {
        "endpoint": tk.StringVar(value=Settings().endpoint),
        "model": tk.StringVar(value=""),
        "workers": tk.IntVar(value=2),
        "limit": tk.IntVar(value=0),
        "only": tk.StringVar(value=""),
    }
    dry = tk.BooleanVar(value=False)

    for column, (label, key, width) in enumerate(
        [("Endpoint", "endpoint", 34), ("Model", "model", 18),
         ("Workers", "workers", 5), ("Limit", "limit", 6), ("Only", "only", 18)]
    ):
        ttk.Label(controls, text=label).grid(row=0, column=column * 2, sticky="e", padx=(8, 2))
        ttk.Entry(controls, textvariable=fields[key], width=width).grid(
            row=0, column=column * 2 + 1, sticky="w"
        )
    ttk.Checkbutton(controls, text="Dry run", variable=dry).grid(row=0, column=10, padx=8)

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
        ("pending", "pending", 90), ("ok", "ok", 70), ("fail", "fail", 70),
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
        )
        start_button.config(state="disabled" if snap["running"] else "normal")
        stop_button.config(state="normal" if snap["running"] else "disabled")
        for row in table.get_children():
            table.delete(row)
        for system in snap["systems"]:
            counts = snap["perSystem"].get(system["id"], {"ok": 0, "fail": 0})
            table.insert(
                "", "end", text=system["title"],
                values=(system["stage"], system["pending"], counts["ok"], counts["fail"]),
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
                dry_run=dry.get(),
                only=[s.strip() for s in fields["only"].get().split(",") if s.strip()],
            )
        )

    start_button.config(command=on_start)
    stop_button.config(command=state.stop)
    refresh()
    root.mainloop()


def launch(prefer_web: bool = False, **kwargs) -> None:
    """Native window when possible, browser dashboard when not."""
    if not prefer_web:
        try:
            import tkinter  # noqa: F401
        except ModuleNotFoundError:
            print("tkinter is not available — falling back to the web dashboard.")
        else:
            launch_tk()
            return
    launch_web(**kwargs)
