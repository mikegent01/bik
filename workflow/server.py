#!/usr/bin/env python3
"""Prompt-driven local ArenaLLM GUI.

Run from the checkout with: python workflow/server.py
It deliberately exposes only the bounded local-agent operations, not a shell.
"""
from __future__ import annotations

import argparse
import base64
import importlib.util
import json
import mimetypes
import os
import sys
import threading
import time
import urllib.error
import uuid
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.parse import parse_qs, urlparse

ROOT = Path(__file__).resolve().parents[1]
WORKFLOW_DIR = Path(__file__).resolve().parent
INPUT_DIR = WORKFLOW_DIR / "intake-inputs"
LOCAL_AGENT = ROOT / "Reputation-Matrix2" / "tools" / "local-agent"
INDEX = WORKFLOW_DIR / "index.html"
DEFAULT_LM = os.environ.get("LM_STUDIO_URL", "http://127.0.0.1:1234/v1/chat/completions")
DEFAULT_COMFY = os.environ.get("COMFYUI_URL", "http://127.0.0.1:8188")
MAX_BODY = 32 * 1024 * 1024


def load_module(name: str, path: Path):
    spec = importlib.util.spec_from_file_location(name, path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"cannot load {path}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


agent = load_module("waluipedia_local_agent", LOCAL_AGENT / "agent.py")
comfy = load_module("waluipedia_comfy_workflow", LOCAL_AGENT / "comfy_workflow.py")
runtime = load_module("waluipedia_agent_runtime", LOCAL_AGENT / "agent_runtime.py")
AGENT_JOBS: dict[str, dict[str, Any]] = {}
AGENT_LOCK = threading.Lock()


def start_agent_job(payload: dict[str, Any]) -> dict[str, str]:
    request_text = str(payload.get("text", "")).strip()
    if len(request_text) > 120000:
        raise ValueError("agent request must be at most 120,000 characters")
    if not request_text and not payload.get("run"):
        raise ValueError("agent request text or an existing run is required")
    job_id = uuid.uuid4().hex[:12]
    job = {"id": job_id, "status": "running", "events": [], "started": time.time()}
    with AGENT_LOCK:
        AGENT_JOBS[job_id] = job

    def emit(event: dict[str, Any]) -> None:
        with AGENT_LOCK:
            job["events"].append(event)
            job["events"] = job["events"][-120:]
            job["last"] = event

    def worker() -> None:
        try:
            result = runtime.run_agent(
                request_text,
                run_id=str(payload.get("run", "")),
                endpoint=str(payload.get("endpoint", DEFAULT_LM)),
                model=str(payload.get("model", "")),
                allow_writes=bool(payload.get("allow_writes", False)),
                max_steps=max(1, min(int(payload.get("max_steps", 30)), 60)),
                conversation=payload.get("messages") if isinstance(payload.get("messages"), list) else [],
                on_event=emit,
            )
            with AGENT_LOCK:
                job.update(result)
                job["status"] = result.get("status", "done")
                job["finished"] = time.time()
        except Exception as error:
            with AGENT_LOCK:
                job.update({"status": "error", "message": str(error), "finished": time.time()})
            emit({"kind": "error", "result": str(error)})

    threading.Thread(target=worker, name=f"waluipedia-agent-{job_id}", daemon=True).start()
    return {"job": job_id}


def local_path(value: str) -> Path:
    if not value:
        raise ValueError("path is required")
    candidate = Path(value)
    if not candidate.is_absolute():
        candidate = ROOT / candidate
    candidate = candidate.resolve()
    try:
        candidate.relative_to(ROOT)
    except ValueError as error:
        raise ValueError("path must stay inside this checkout") from error
    return candidate


def json_response(handler: BaseHTTPRequestHandler, value: Any, status: int = 200) -> None:
    data = json.dumps(value, ensure_ascii=False).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Content-Length", str(len(data)))
    handler.end_headers()
    handler.wfile.write(data)


def probe(url: str, path: str) -> dict[str, Any]:
    try:
        with urllib.request.urlopen(url.rstrip("/") + path, timeout=2) as response:
            return {"online": True, "status": response.status}
    except Exception as error:
        return {"online": False, "error": str(error)}


def read_json_body(handler: BaseHTTPRequestHandler) -> dict[str, Any]:
    try:
        length = int(handler.headers.get("Content-Length", "0"))
    except ValueError as error:
        raise ValueError("invalid content length") from error
    if length <= 0 or length > MAX_BODY:
        raise ValueError(f"request body must be between 1 and {MAX_BODY} bytes")
    value = json.loads(handler.rfile.read(length))
    if not isinstance(value, dict):
        raise ValueError("request body must be a JSON object")
    return value


def upload_input(payload: dict[str, Any]) -> dict[str, str]:
    name = Path(str(payload.get("filename", ""))).name
    encoded = str(payload.get("data", ""))
    if not name or not encoded:
        raise ValueError("filename and base64 data are required")
    suffix = Path(name).suffix.lower()
    allowed = {".json", ".png", ".jpg", ".jpeg", ".webp"}
    if suffix not in allowed:
        raise ValueError("only JSON, PNG, JPG, JPEG, and WEBP uploads are accepted")
    if len(encoded) > 28 * 1024 * 1024:
        raise ValueError("upload is too large")
    try:
        raw = base64.b64decode(encoded, validate=True)
    except Exception as error:
        raise ValueError("invalid base64 upload") from error
    if len(raw) > 20 * 1024 * 1024:
        raise ValueError("decoded upload is too large")
    INPUT_DIR.mkdir(parents=True, exist_ok=True)
    target = INPUT_DIR / f"{time.strftime('%Y%m%d-%H%M%S')}-{name}"
    target.write_bytes(raw)
    return {"path": target.relative_to(ROOT).as_posix(), "filename": target.name}


def queue_image(payload: dict[str, Any]) -> dict[str, Any]:
    workflow = local_path(str(payload.get("workflow", "")))
    references = [local_path(str(value)) for value in payload.get("references", [])]
    if not workflow.is_file():
        raise ValueError(f"workflow file not found: {workflow}")
    if not references or len(references) > 6:
        raise ValueError("provide between 1 and 6 reference images")
    if any(not path.is_file() for path in references):
        raise ValueError("one or more reference images do not exist")
    prompt = str(payload.get("prompt", "")).strip()
    if not prompt or len(prompt) > 10000:
        raise ValueError("image prompt is required and must be at most 10,000 characters")
    seed = payload.get("seed")
    if seed in (None, ""):
        seed_value = None
    else:
        seed_value = int(seed)
    prefix = str(payload.get("output_prefix", "waluipedia/qwen-edit"))[:180]
    return comfy.queue_from_files(
        workflow, references, prompt,
        str(payload.get("negative", "text, watermark, logo, duplicate subject, distorted anatomy")),
        base=str(payload.get("comfy", DEFAULT_COMFY)), seed=seed_value,
        filename_prefix=prefix, wait=bool(payload.get("wait", False)),
    )


class Handler(BaseHTTPRequestHandler):
    server_version = "WaluipediaWorkflow/1.0"

    def log_message(self, format: str, *args: Any) -> None:
        print(f"[workflow] {format % args}", flush=True)

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
            json_response(self, {"lm_studio": probe(DEFAULT_LM.rsplit("/v1", 1)[0], "/v1/models"),
                                 "comfyui": probe(DEFAULT_COMFY, "/system_stats")})
            return
        if parsed.path == "/api/checklist":
            run = parse_qs(parsed.query).get("run", [""])[0]
            try:
                path = agent.checklist_path(run)
                json_response(self, {"run": run, "items": json.loads(path.read_text(encoding="utf-8"))})
            except Exception as error:
                json_response(self, {"error": str(error)}, 400)
            return
        if parsed.path == "/api/agent/status":
            job_id = parse_qs(parsed.query).get("job", [""])[0]
            with AGENT_LOCK:
                job = dict(AGENT_JOBS.get(job_id, {"status": "unknown", "message": "job not found"}))
            json_response(self, job)
            return
        self.send_error(404)

    def do_POST(self) -> None:  # noqa: N802
        try:
            payload = read_json_body(self)
            if self.path == "/api/upload":
                json_response(self, upload_input(payload)); return
            if self.path in {"/api/chat", "/api/agent/run"}:
                json_response(self, start_agent_job(payload)); return
            if self.path == "/api/plan":
                text = str(payload.get("text", "")).strip()
                if not text or len(text) > 120000:
                    raise ValueError("request text is required and must be at most 120,000 characters")
                run_dir = agent.make_run(
                    text, bool(payload.get("use_lm", True)), str(payload.get("endpoint", DEFAULT_LM)),
                    str(payload.get("model", "")), max(1000, min(int(payload.get("max_chars", 6000)), 12000)),
                    max(1, min(int(payload.get("max_sections", 20)), 20)),
                )
                checklist = json.loads((run_dir / "checklist.json").read_text(encoding="utf-8"))
                json_response(self, {"run": run_dir.name, "items": checklist}); return
            if self.path == "/api/mark":
                path = agent.checklist_path(str(payload.get("run", "")))
                items = json.loads(path.read_text(encoding="utf-8"))
                task = str(payload.get("task", ""))
                status = str(payload.get("status", ""))
                if status not in {"pending", "in_progress", "done", "blocked"}:
                    raise ValueError("invalid checklist status")
                for item in items:
                    if item.get("id") == task:
                        item["status"] = status
                        item["note"] = str(payload.get("note", ""))[:2000]
                        path.write_text(json.dumps(items, indent=2, ensure_ascii=False), encoding="utf-8")
                        json_response(self, {"items": items}); return
                raise ValueError("task not found")
            if self.path == "/api/queue-image":
                json_response(self, queue_image(payload)); return
            raise ValueError("unknown endpoint")
        except Exception as error:  # local operator gets an actionable response, not a hung request
            json_response(self, {"error": str(error)}, 400)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--host", default=os.environ.get("WORKFLOW_HOST", "0.0.0.0"))
    parser.add_argument("--port", type=int, default=int(os.environ.get("WORKFLOW_PORT", "8787")))
    parser.add_argument("--check", action="store_true", help="probe local services and exit")
    args = parser.parse_args()
    if args.check:
        print(json.dumps({"lm_studio": probe(DEFAULT_LM.rsplit("/v1", 1)[0], "/v1/models"),
                          "comfyui": probe(DEFAULT_COMFY, "/system_stats")}, indent=2))
        return 0
    INPUT_DIR.mkdir(parents=True, exist_ok=True)
    server = ThreadingHTTPServer((args.host, args.port), Handler)
    display_host = "127.0.0.1" if args.host in {"0.0.0.0", "::"} else args.host
    print(f"ArenaLLM workspace: http://{display_host}:{args.port}/", flush=True)
    if display_host != args.host:
        print(f"Bound on {args.host}:{args.port} for the live preview proxy.", flush=True)
    print("Local-only server; press Ctrl+C to stop.", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
