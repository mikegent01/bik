#!/usr/bin/env python3
"""Bounded tool-using LM Studio agent.

Gemma chooses among an allowlisted set of local actions. The model never gets
shell access; repository writes are exact-match patches and require the GUI's
explicit allow-writes switch.
"""
from __future__ import annotations

import ast
import collections
import concurrent.futures
import json
import math
import os
import re
import statistics
import subprocess
import sys
import time
import urllib.request
from pathlib import Path
from typing import Any, Callable

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
RUNS = HERE.parents[1] / "tools" / ".local-agent-runs"
sys.path.insert(0, str(HERE))
import agent as planner  # noqa: E402
import comfy_workflow as comfy  # noqa: E402
import repo_tools  # noqa: E402

DEFAULT_ENDPOINT = os.environ.get("LM_STUDIO_URL", "http://127.0.0.1:1234/v1/chat/completions")

TOOL_DESCRIPTIONS = {
    "repo_read": "Read one bounded text file inside the checkout. args: path, limit.",
    "repo_search": "Search a focused repository directory. Prefer a specific dir and term. args: term, dir, limit.",
    "parallel_read": "Read up to 12 bounded repository files concurrently. args: paths, limit.",
    "parallel_search": "Run up to 8 focused repository searches concurrently. args: queries, dir, limit.",
    "repo_status": "Inspect the bounded local git status. No writes. args: none.",
    "repo_diff": "Inspect the bounded local diff, optionally for repository-relative paths. No writes. args: paths.",
    "python_analyze": "Run safe, offline Python over supplied repository text. No imports, filesystem, network, subprocess, or writes. args: files, code.",
    "repo_patch": "Replace exactly one matching text block. args: path, old, new. Requires write approval.",
    "run_audit": "Run one fixed audit: json, timecodes, home_feed, covers, or campaign_fronts.",
    "queue_image": "Queue a Qwen Edit job with 1-6 local reference images. Requires write approval.",
    "finish_task": "Mark the current internal work unit complete. Read-only work can finish after evidence; patches require a passed audit. args: note.",
    "ask_user": "Stop and ask for a missing fact or approval. args: question.",
}


def _clip(value: Any, limit: int = 12000) -> str:
    text = value if isinstance(value, str) else json.dumps(value, ensure_ascii=False, indent=2)
    return text[:limit] + ("\n[… clipped …]" if len(text) > limit else "")


def _ask(endpoint: str, model: str, system: str, user: str, timeout: int = 45) -> dict[str, Any]:
    payload: dict[str, Any] = {
        "messages": [{"role": "system", "content": system}, {"role": "user", "content": user}],
        "temperature": 0.15,
        "max_tokens": 500,
    }
    if model:
        payload["model"] = model
    request = urllib.request.Request(endpoint, data=json.dumps(payload).encode(),
                                     headers={"Content-Type": "application/json"}, method="POST")
    with urllib.request.urlopen(request, timeout=timeout) as response:
        body = json.loads(response.read())
    content = body["choices"][0]["message"]["content"]
    value = planner._json_from_reply(content)
    if "action" not in value:
        raise ValueError("agent reply did not include an action")
    return value


def _complete(endpoint: str, model: str, system: str, user: str, timeout: int = 45) -> str:
    """Ask LM Studio for a normal chat response rather than an action object."""
    payload: dict[str, Any] = {
        "messages": [{"role": "system", "content": system}, {"role": "user", "content": user}],
        "temperature": 0.2,
        "max_tokens": 1400,
    }
    if model:
        payload["model"] = model
    request = urllib.request.Request(endpoint, data=json.dumps(payload).encode(),
                                     headers={"Content-Type": "application/json"}, method="POST")
    with urllib.request.urlopen(request, timeout=timeout) as response:
        body = json.loads(response.read())
    content = body["choices"][0]["message"]["content"]
    if not isinstance(content, str) or not content.strip():
        raise ValueError("LM Studio returned an empty assistant response")
    return content.strip()


def _deterministic_answer(request_text: str, conversation: list[dict[str, str]] | None = None) -> str | None:
    """Answer fast, safe archive lookups without faking model output."""
    lowered = request_text.lower()
    conversation_text = " ".join(str(item.get("content", "")) for item in (conversation or [])).lower()
    wants_latest = any(word in lowered for word in ("latest", "most recent", "newest")) and any(
        word in lowered for word in ("session", "filing", "article", "event", "update")
    )
    wants_followup = any(phrase in lowered for phrase in ("what else happened", "what happened next", "tell me more", "anything else")) and "airlift" in conversation_text
    if not wants_latest and not wants_followup:
        return None
    try:
        main_page = json.loads((ROOT / "Reputation-Matrix2/data/mainPage.json").read_text(encoding="utf-8"))
        events = json.loads((ROOT / "Reputation-Matrix2/data/events.json").read_text(encoding="utf-8"))
        latest = main_page.get("latestUpdate") or {}
        event = next((item for item in events if item.get("id") == latest.get("id")), None)
        if not event:
            return None
        title = event.get("title") or event.get("name") or event.get("id")
        if wants_followup:
            summary = event.get("summary", "").strip()
            outcome = event.get("outcome", "").strip()
            answer = f"More from {title}:\n\n{summary}"
            if outcome and outcome != summary:
                answer += f"\n\nThe recorded outcome was: {outcome}"
            return answer
        date = event.get("date", "date not recorded")
        status = event.get("status", "")
        answer = f"The latest current filing is {title}. It is dated {date}."
        if status:
            answer += f" Status: {status}."
        return answer
    except (OSError, json.JSONDecodeError):
        return None


def _final_answer(endpoint: str, model: str, request_text: str,
                  conversation: list[dict[str, str]], history: list[dict[str, str]]) -> str:
    system = (
        "You are Waluigi's WAH-Desk, a local archive chatbot. Answer the user's latest "
        "message in clear plain text. Use only facts supported by the supplied "
        "conversation and tool results. Do not mention hidden work units, JSON "
        "actions, or internal implementation unless the user asks. If files "
        "were changed, summarize the actual changes and validations. Be concise "
        "but answer the question directly."
    )
    context = {
        "conversation": conversation[-12:],
        "latest_request": request_text,
        "tool_results": history[-10:],
    }
    try:
        return _complete(endpoint, model, system, _clip(context, 30000))
    except Exception:
        fallback = _deterministic_answer(request_text, conversation)
        if fallback:
            return fallback
        raise


def _write_log(run_dir: Path, record: dict[str, Any]) -> None:
    with (run_dir / "agent-log.jsonl").open("a", encoding="utf-8") as stream:
        stream.write(json.dumps(record, ensure_ascii=False) + "\n")


def _checklist(run_id: str) -> tuple[Path, list[dict[str, Any]]]:
    path = planner.checklist_path(run_id)
    return path, json.loads(path.read_text(encoding="utf-8"))


def _save_checklist(path: Path, items: list[dict[str, Any]]) -> None:
    path.write_text(json.dumps(items, indent=2, ensure_ascii=False), encoding="utf-8")


def _load_history(run_dir: Path) -> list[dict[str, str]]:
    """Recover a small amount of context when a user approves and resumes."""
    path = run_dir / "agent-log.jsonl"
    if not path.is_file():
        return []
    records: list[dict[str, str]] = []
    for line in path.read_text(encoding="utf-8", errors="replace").splitlines()[-12:]:
        try:
            record = json.loads(line)
        except json.JSONDecodeError:
            continue
        if "action" in record or "error" in record:
            records.append({
                "action": _clip(record.get("action", "system"), 1800),
                "result": _clip(record.get("result", record.get("error", "")), 5000),
            })
    return records


def _parallel_read(paths: list[str], limit: int = 12000) -> str:
    unique = list(dict.fromkeys(str(path) for path in paths if str(path)))[:12]
    def read(path: str) -> dict[str, str]:
        try:
            return {"path": path, "content": repo_tools.read_file(path, limit)}
        except Exception as error:
            return {"path": path, "error": str(error)}
    with concurrent.futures.ThreadPoolExecutor(max_workers=min(6, max(1, len(unique)))) as pool:
        results = list(pool.map(read, unique))
    return json.dumps(results, ensure_ascii=False, indent=2)[:30000]


def _parallel_search(queries: list[Any], relative_dir: str, limit: int = 20) -> str:
    normalized = []
    for query in queries[:8]:
        if isinstance(query, str):
            normalized.append({"term": query, "dir": relative_dir})
        elif isinstance(query, dict):
            normalized.append({"term": str(query.get("term", "")), "dir": str(query.get("dir", relative_dir))})
    def search(item: dict[str, str]) -> dict[str, Any]:
        try:
            return {"term": item["term"], "dir": item["dir"], "results": repo_tools.search(item["term"], item["dir"], min(int(limit), 30))}
        except Exception as error:
            return {"term": item["term"], "dir": item["dir"], "error": str(error)}
    with concurrent.futures.ThreadPoolExecutor(max_workers=min(8, max(1, len(normalized)))) as pool:
        results = list(pool.map(search, normalized))
    return json.dumps(results, ensure_ascii=False, indent=2)[:30000]


_SAFE_PYTHON_BUILTINS = {"len": len, "min": min, "max": max, "sum": sum, "sorted": sorted,
                         "enumerate": enumerate, "range": range, "list": list, "dict": dict,
                         "set": set, "tuple": tuple, "str": str, "int": int, "float": float,
                         "bool": bool, "isinstance": isinstance, "zip": zip, "any": any, "all": all}


def _python_analyze(args: dict[str, Any]) -> str:
    """Run a small data transformation without giving model code the repo or OS."""
    code = str(args.get("code", ""))
    if not code or len(code) > 5000:
        raise ValueError("python_analyze code is required and limited to 5,000 characters")
    paths = [str(value) for value in (args.get("files") or [])][:8]
    files: dict[str, str] = {}
    total_bytes = 0
    for path in paths:
        safe = repo_tools.safe_path(path)
        if not safe.is_file() or safe.stat().st_size > 2_000_000:
            raise ValueError(f"python_analyze file is missing or larger than 2 MB: {path}")
        total_bytes += safe.stat().st_size
        if total_bytes > 4_000_000:
            raise ValueError("python_analyze input is limited to 4 MB total")
        files[path] = safe.read_text(encoding="utf-8", errors="replace")
    tree = ast.parse(code, mode="exec")
    forbidden_names = {"open", "exec", "eval", "compile", "input", "__import__", "globals", "locals", "vars"}
    for node in ast.walk(tree):
        if isinstance(node, (ast.Import, ast.ImportFrom)):
            raise ValueError("python_analyze does not allow imports; json, re, math, statistics, and collections are already provided")
        if isinstance(node, ast.Name) and node.id in forbidden_names:
            raise ValueError(f"python_analyze forbids {node.id}")
        if isinstance(node, ast.Attribute) and node.attr.startswith("__"):
            raise ValueError("python_analyze forbids dunder access")
    scope = {"__builtins__": _SAFE_PYTHON_BUILTINS, "files": files, "json": json, "re": re,
             "math": math, "statistics": statistics, "collections": collections}
    local_scope: dict[str, Any] = {}
    exec(compile(tree, "<python_analyze>", "exec"), scope, local_scope)
    return json.dumps({"files": list(files), "result": local_scope.get("result")}, ensure_ascii=False, default=str)[:16000]


def _is_fast_archive_lookup(request_text: str, conversation: list[dict[str, str]] | None = None) -> bool:
    lowered = request_text.lower()
    if any(word in lowered for word in ("edit", "change", "update the", "write", "add", "remove", "fix", "create")):
        return False
    latest = any(word in lowered for word in ("latest", "most recent", "newest")) and any(
        word in lowered for word in ("session", "filing", "article", "event", "update")
    )
    previous = " ".join(str(item.get("content", "")) for item in (conversation or [])).lower()
    followup = any(phrase in lowered for phrase in ("what else happened", "what happened next", "tell me more", "anything else")) and "airlift" in previous
    return latest or followup


def _audit(name: str) -> str:
    commands = {
        "timecodes": ["tools/check-timecodes.py"],
        "home_feed": ["tools/check-home-feed.py"],
        "covers": ["tools/check-covers.py"],
        "campaign_fronts": ["tools/build-campaign-fronts.py", "--check"],
    }
    if name == "json":
        script = "import json; from pathlib import Path; [json.loads(p.read_text(encoding='utf-8')) for p in Path('Reputation-Matrix2/data').glob('*.json')]; print('data JSON parse passed')"
        command = [sys.executable, "-c", script]
    elif name in commands:
        command = [sys.executable, *commands[name]]
    else:
        raise ValueError("audit must be json, timecodes, home_feed, covers, or campaign_fronts")
    result = subprocess.run(command, cwd=ROOT, text=True, capture_output=True, timeout=30, check=False)
    output = (result.stdout + result.stderr).strip()
    if result.returncode:
        raise RuntimeError(f"audit {name} failed ({result.returncode}): {output[-4000:]}")
    return output[-8000:]


def execute(action: dict[str, Any], *, allow_writes: bool) -> tuple[str, bool]:
    name = str(action.get("action", ""))
    args = action.get("args") or {}
    if name == "repo_read":
        return repo_tools.read_file(str(args.get("path", "")), int(args.get("limit", 12000))), False
    if name == "repo_search":
        return json.dumps(repo_tools.search(str(args.get("term", "")), str(args.get("dir", "Reputation-Matrix2/data")), min(int(args.get("limit", 30)), 50)), ensure_ascii=False, indent=2), False
    if name == "parallel_read":
        return _parallel_read([str(value) for value in (args.get("paths") or [])], min(int(args.get("limit", 12000)), 16000)), False
    if name == "parallel_search":
        return _parallel_search(args.get("queries") or [], str(args.get("dir", "Reputation-Matrix2/data")), min(int(args.get("limit", 20)), 30)), False
    if name == "python_analyze":
        return _python_analyze(args), False
    if name == "repo_status":
        return repo_tools.status() or "working tree clean", False
    if name == "repo_diff":
        raw_paths = args.get("paths", [])
        paths = [str(raw_paths)] if isinstance(raw_paths, str) else [str(value) for value in raw_paths]
        return repo_tools.diff(paths), False
    if name == "repo_patch":
        if not allow_writes:
            return "APPROVAL_REQUIRED: patch is ready but the GUI Allow local patches switch is off.", True
        repo_tools.patch(str(args.get("path", "")), str(args.get("old", "")), str(args.get("new", "")))
        return f"patched exactly one match in {args.get('path')}", True
    if name == "run_audit":
        return _audit(str(args.get("name", ""))), False
    if name == "queue_image":
        if not allow_writes:
            return "APPROVAL_REQUIRED: image queue is ready but the GUI Allow image jobs switch is off.", True
        workflow = repo_tools.safe_path(str(args.get("workflow", "")))
        refs = [repo_tools.safe_path(str(x)) for x in args.get("references", [])]
        result = comfy.queue_from_files(workflow, refs, str(args.get("prompt", "")),
                                        str(args.get("negative", "text, watermark, logo")),
                                        base=str(args.get("comfy", comfy.DEFAULT_COMFY)),
                                        seed=args.get("seed"),
                                        filename_prefix=str(args.get("output_prefix", "waluipedia/qwen-edit")),
                                        wait=bool(args.get("wait", False)))
        return json.dumps(result, ensure_ascii=False), True
    if name == "ask_user":
        return "QUESTION: " + str(args.get("question", "missing question")), True
    if name == "finish_task":
        return "TASK_FINISH_REQUEST: " + str(args.get("note", "")), True
    raise ValueError(f"unknown agent action: {name}")


def run_agent(request_text: str, *, run_id: str = "", endpoint: str = DEFAULT_ENDPOINT,
              model: str = "", allow_writes: bool = False, max_steps: int = 30,
              conversation: list[dict[str, str]] | None = None,
              on_event: Callable[[dict[str, Any]], None] | None = None) -> dict[str, Any]:
    """Run the local ArenaLLM observe -> decide -> act loop.

    The planner creates internal work units automatically. The operator only
    supplies the request; the work units and checkpoint files are implementation
    details, not a second planning UI.
    """
    emit = on_event or (lambda event: None)
    conversation = [
        {"role": str(item.get("role", "")), "content": _clip(str(item.get("content", "")), 6000)}
        for item in (conversation or [])[-12:]
        if isinstance(item, dict) and item.get("role") in {"user", "assistant"}
    ]
    if not run_id and _is_fast_archive_lookup(request_text, conversation):
        run_id = f"lookup-{time.strftime('%Y%m%d-%H%M%S')}"
        followup = "what else happened" in request_text.lower() or "what happened next" in request_text.lower() or "tell me more" in request_text.lower()
        source_path = "Reputation-Matrix2/data/events.json" if followup else "Reputation-Matrix2/data/mainPage.json"
        title = "Read the latest filing record" if followup else "Resolve the current latest filing"
        emit({"kind": "plan", "items": [{"id": "lookup-01", "title": title, "status": "in_progress", "acceptance": ["Read the canonical archive data", "Resolve the linked event", "Answer plainly"]}]})
        emit({"kind": "thinking", "step": 1, "task": "lookup-01", "text": "Using the canonical archive record instead of repeating a repository-wide search."})
        if followup:
            emit({"kind": "action", "step": 1, "action": {"action": "repo_search", "args": {"term": "the_airlift_that_never_came", "dir": "Reputation-Matrix2/data", "limit": 5}}})
            raw_source = json.dumps(repo_tools.search("the_airlift_that_never_came", "Reputation-Matrix2/data", 5), ensure_ascii=False)
        else:
            emit({"kind": "action", "step": 1, "action": {"action": "repo_read", "args": {"path": source_path, "limit": 12000}}})
            raw_source = repo_tools.read_file(source_path, 12000)
        answer = _deterministic_answer(request_text, conversation)
        if answer:
            emit({"kind": "result", "step": 1, "result": f"Read the canonical archive index ({len(raw_source)} characters) and resolved the filing."})
            emit({"kind": "task_done", "step": 1, "task": "lookup-01"})
            emit({"kind": "assistant", "text": answer, "source": "canonical archive record"})
            return {"status": "done", "run": run_id, "steps": 1, "answer": answer}
        run_id = ""
    if not run_id:
        run_dir = planner.make_run(request_text, True, endpoint, model, 6000, 20)
        run_id = run_dir.name
    run_dir = RUNS / run_id
    if not run_dir.is_dir():
        raise ValueError(f"unknown run: {run_id}")
    if not request_text:
        request_path = run_dir / "request.txt"
        request_text = request_path.read_text(encoding="utf-8") if request_path.is_file() else ""
    check_path, items = _checklist(run_id)
    emit({"kind": "plan", "items": [{"id": item.get("id"), "title": item.get("title"), "status": item.get("status"), "acceptance": item.get("acceptance", [])} for item in items]})
    system = (
        "You are Waluigi's WAH-Desk action controller for a local archive agent. "
        "The operator gave you one request; decide how to complete it by using the "
        "small internal work units below. Choose exactly one JSON action per turn. "
        "Never invent a file path or canon fact. Prefer canonical files and specific "
        "paths over searching the entire checkout. For a read-only factual question, "
        "use one targeted read or parallel_read, then finish promptly; do not repeat "
        "the same search. Use parallel_read or parallel_search when several files or "
        "terms are independently needed. After a patch, run an audit. Keep each "
        "action small. Return JSON exactly as "
        "{\"action\":\"name\",\"args\":{...}}.\n\n"
        "Allowed actions:\n" + "\n".join(f"- {k}: {v}" for k, v in TOOL_DESCRIPTIONS.items())
    )
    history: list[dict[str, str]] = _load_history(run_dir)
    last_audit = False
    requires_audit = False
    for step in range(1, max(1, min(int(max_steps), 60)) + 1):
        pending = next((item for item in items if item.get("status") in {"pending", "in_progress"}), None)
        if pending is None:
            answer = _final_answer(endpoint, model, request_text, conversation, history)
            emit({"kind": "assistant", "text": answer})
            return {"status": "done", "run": run_id, "steps": step - 1, "answer": answer}
        pending["status"] = "in_progress"
        _save_checklist(check_path, items)
        emit({"kind": "plan_update", "items": [{"id": item.get("id"), "title": item.get("title"), "status": item.get("status"), "acceptance": item.get("acceptance", [])} for item in items]})
        context = {
            "run": run_id,
            "conversation": conversation,
            "operator_request": _clip(request_text, 12000),
            "current_internal_work_unit": pending,
            "recent_tool_results": history[-7:],
            "write_approval": allow_writes,
            "step": step,
        }
        emit({"kind": "thinking", "step": step, "task": pending["id"]})
        try:
            action = _ask(endpoint, model, system, _clip(context, 18000))
            emit({"kind": "action", "step": step, "action": action})
            signature = json.dumps(action, ensure_ascii=False, sort_keys=True)
            repeats = sum(record.get("action") == signature for record in history[-4:])
            if repeats >= 2:
                result = "DUPLICATE_ACTION_BLOCKED: the same action was requested repeatedly; closing this work unit so the final answer can use the evidence already collected."
                _write_log(run_dir, {"at": time.time(), "step": step, "task": pending["id"], "action": action, "result": result})
                history.append({"action": signature, "result": result})
                emit({"kind": "blocked", "step": step, "result": result})
                pending["status"] = "done"
                pending["note"] = "Repeated identical tool action blocked after evidence was collected."
                _save_checklist(check_path, items)
                emit({"kind": "task_done", "step": step, "task": pending["id"]})
                emit({"kind": "plan_update", "items": [{"id": item.get("id"), "title": item.get("title"), "status": item.get("status"), "acceptance": item.get("acceptance", [])} for item in items]})
                continue
            result, side_effect = execute(action, allow_writes=allow_writes)
            if action.get("action") in {"repo_patch", "queue_image"} and not result.startswith("APPROVAL_REQUIRED"):
                requires_audit = action.get("action") == "repo_patch"
            if action.get("action") == "run_audit":
                last_audit = True
            record = {"at": time.time(), "step": step, "task": pending["id"], "action": action, "result": _clip(result)}
            _write_log(run_dir, record)
            history.append({"action": signature, "result": _clip(result, 6000)})
            emit({"kind": "result", "step": step, "result": result})
            if action.get("action") == "finish_task":
                if requires_audit and not last_audit:
                    history.append({"action": "system", "result": "Cannot finish a changed work unit before its audit."})
                    emit({"kind": "blocked", "step": step, "result": "Run an audit before finishing the changed files."})
                else:
                    pending["status"] = "done"
                    pending["note"] = str(action.get("args", {}).get("note", "Completed by agent after audit."))[:2000]
                    _save_checklist(check_path, items)
                    last_audit = False
                    requires_audit = False
                    emit({"kind": "task_done", "step": step, "task": pending["id"]})
                    emit({"kind": "plan_update", "items": [{"id": item.get("id"), "title": item.get("title"), "status": item.get("status"), "acceptance": item.get("acceptance", [])} for item in items]})
            if action.get("action") == "ask_user" or result.startswith("APPROVAL_REQUIRED") or result.startswith("QUESTION:"):
                return {"status": "approval_required" if result.startswith("APPROVAL_REQUIRED") else "needs_input", "run": run_id, "step": step, "message": result}
        except Exception as error:
            fallback = _deterministic_answer(request_text, conversation)
            if fallback:
                emit({"kind": "assistant", "text": fallback, "source": "local archive fallback"})
                return {"status": "done", "run": run_id, "steps": step - 1, "answer": fallback}
            result = f"ERROR: {error}"
            history.append({"action": "system", "result": result})
            _write_log(run_dir, {"at": time.time(), "step": step, "task": pending["id"], "error": str(error)})
            emit({"kind": "error", "step": step, "result": result})
            return {"status": "error", "run": run_id, "step": step, "message": str(error)}
    return {"status": "step_limit", "run": run_id, "steps": max_steps, "message": "Waluigi's WAH-Desk stopped at its bounded turn limit; its internal process remains checkpointed."}
