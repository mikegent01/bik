#!/usr/bin/env python3
"""Small chat-first local server.

The browser talks to one job API. Normal chat goes straight to the local model;
the runtime only touches repository helpers after an explicit archive request.
"""
from __future__ import annotations

import importlib.util
import json
import os
import threading
import time
import urllib.error
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.parse import parse_qs, urlparse

ROOT = Path(__file__).resolve().parents[1]
INDEX = Path(__file__).resolve().parent / "index.html"
AGENT_PATH = ROOT / "Reputation-Matrix2/tools/local-agent/agent_runtime.py"
DEFAULT_LM = os.environ.get("LM_STUDIO_URL", "http://127.0.0.1:1234/v1/chat/completions")
MAX_BODY = 2 * 1024 * 1024


def load_runtime():
    spec = importlib.util.spec_from_file_location("waluipedia_chat_first_runtime", AGENT_PATH)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"cannot load {AGENT_PATH}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


runtime = load_runtime()
JOBS: dict[str, dict[str, Any]] = {}
LOCK = threading.Lock()


def json_response(handler: BaseHTTPRequestHandler, value: Any, status: int = 200) -> None:
    data = json.dumps(value, ensure_ascii=False).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Cache-Control", "no-store")
    handler.send_header("Content-Length", str(len(data)))
    handler.end_headers()
    handler.wfile.write(data)


def probe_lm() -> dict[str, Any]:
    base = DEFAULT_LM.rsplit("/v1", 1)[0].rstrip("/")
    try:
        with urllib.request.urlopen(base + "/v1/models", timeout=2) as response:
            value = json.loads(response.read())
            models = value.get("data", []) if isinstance(value, dict) else []
            return {"online": bool(models), "models": [str(item.get("id", "")) for item in models[:20] if isinstance(item, dict)]}
    except Exception as error:
        return {"online": False, "error": str(error)}


def read_body(handler: BaseHTTPRequestHandler) -> dict[str, Any]:
    try:
        size = int(handler.headers.get("Content-Length", "0"))
    except ValueError as error:
        raise ValueError("invalid request length") from error
    if size <= 0 or size > MAX_BODY:
        raise ValueError("request body must be between 1 byte and 2 MB")
    value = json.loads(handler.rfile.read(size))
    if not isinstance(value, dict):
        raise ValueError("request body must be a JSON object")
    return value


def start_job(payload: dict[str, Any]) -> dict[str, str]:
    text = str(payload.get("text", "")).strip()
    if not text and not payload.get("run"):
        raise ValueError("message text is required")
    if len(text) > 120000:
        raise ValueError("message is too long")
    messages = payload.get("messages", [])
    if not isinstance(messages, list):
        messages = []
    messages = [item for item in messages[-12:] if isinstance(item, dict)]
    job_id = os.urandom(8).hex()
    job: dict[str, Any] = {"id": job_id, "status": "running", "events": [], "started": time.time(), "cancel": False}
    with LOCK:
        JOBS[job_id] = job

    def emit(event: dict[str, Any]) -> None:
        with LOCK:
            job["events"].append(event)
            job["events"] = job["events"][-80:]

    def worker() -> None:
        try:
            result = runtime.run_agent(
                text,
                run_id=str(payload.get("run", "")),
                endpoint=str(payload.get("endpoint", DEFAULT_LM)),
                model=str(payload.get("model", "")),
                allow_writes=False,
                max_steps=8,
                conversation=messages,
                cancel_check=lambda: bool(job.get("cancel")),
                on_event=emit,
            )
            with LOCK:
                job.update(result)
                job["status"] = "cancelled" if job.get("cancel") else str(result.get("status", "done"))
                job["finished"] = time.time()
        except Exception as error:
            with LOCK:
                job.update({"status": "error", "message": str(error), "finished": time.time()})
            emit({"kind": "error", "result": str(error)})

    threading.Thread(target=worker, name=f"chat-first-{job_id}", daemon=True).start()
    return {"job": job_id}


class Handler(BaseHTTPRequestHandler):
    server_version = "WaluipediaChatFirst/1.0"

    def log_message(self, format: str, *args: Any) -> None:
        print(f"[chat] {format % args}", flush=True)

    def do_GET(self) -> None:  # noqa: N802
        parsed = urlparse(self.path)
        if parsed.path == "/":
            data = INDEX.read_bytes()
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)
            return
        if parsed.path == "/api/health":
            json_response(self, {"lm_studio": probe_lm(), "runtime": "chat-first"})
            return
        if parsed.path == "/api/agent/status":
            job_id = parse_qs(parsed.query).get("job", [""])[0]
            with LOCK:
                value = dict(JOBS.get(job_id, {"status": "unknown", "message": "job not found"}))
            json_response(self, value)
            return
        self.send_error(404)

    def do_POST(self) -> None:  # noqa: N802
        try:
            payload = read_body(self)
            if self.path == "/api/chat":
                json_response(self, start_job(payload))
                return
            if self.path == "/api/agent/cancel":
                job_id = str(payload.get("job", ""))
                with LOCK:
                    if job_id not in JOBS:
                        raise ValueError("job not found")
                    JOBS[job_id]["cancel"] = True
                json_response(self, {"job": job_id, "status": "cancelled"})
                return
            raise ValueError("unknown endpoint")
        except Exception as error:
            json_response(self, {"error": str(error)}, 400)


def main() -> int:
    host = os.environ.get("WORKFLOW_HOST", "0.0.0.0")
    port = int(os.environ.get("WORKFLOW_PORT", "8787"))
    server = ThreadingHTTPServer((host, port), Handler)
    print(f"Waluipedia chat: http://127.0.0.1:{port}/", flush=True)
    print(f"Bound on {host}:{port} for the live preview proxy.", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
