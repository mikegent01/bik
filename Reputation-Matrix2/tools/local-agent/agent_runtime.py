#!/usr/bin/env python3
"""Bounded tool-using LM Studio agent.

Gemma chooses among an allowlisted set of local actions. The model never gets
shell access; repository writes are exact-match patches and require the GUI's
explicit allow-writes switch.
"""
from __future__ import annotations

import json
import os
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
    "repo_search": "Search a focused directory for a term. args: term, dir, limit.",
    "repo_status": "Inspect the bounded local git status. No writes. args: none.",
    "repo_diff": "Inspect the bounded local diff, optionally for repository-relative paths. No writes. args: paths.",
    "repo_patch": "Replace exactly one matching text block. args: path, old, new. Requires write approval.",
    "run_audit": "Run one fixed audit: json, timecodes, home_feed, covers, or campaign_fronts.",
    "queue_image": "Queue a Qwen Edit job with 1-6 local reference images. Requires write approval.",
    "finish_task": "Mark the current internal work unit complete after an audit has passed. args: note.",
    "ask_user": "Stop and ask for a missing fact or approval. args: question.",
}


def _clip(value: Any, limit: int = 12000) -> str:
    text = value if isinstance(value, str) else json.dumps(value, ensure_ascii=False, indent=2)
    return text[:limit] + ("\n[… clipped …]" if len(text) > limit else "")


def _ask(endpoint: str, model: str, system: str, user: str, timeout: int = 90) -> dict[str, Any]:
    payload: dict[str, Any] = {
        "messages": [{"role": "system", "content": system}, {"role": "user", "content": user}],
        "temperature": 0.15,
        "max_tokens": 900,
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


def _complete(endpoint: str, model: str, system: str, user: str, timeout: int = 90) -> str:
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


def _deterministic_answer(request_text: str) -> str | None:
    """Answer a small set of safe archive questions without faking model output."""
    lowered = request_text.lower()
    if not any(word in lowered for word in ("latest", "most recent", "newest")):
        return None
    if not any(word in lowered for word in ("session", "filing", "article", "event", "update")):
        return None
    try:
        main_page = json.loads((ROOT / "Reputation-Matrix2/data/mainPage.json").read_text(encoding="utf-8"))
        events = json.loads((ROOT / "Reputation-Matrix2/data/events.json").read_text(encoding="utf-8"))
        latest = main_page.get("latestUpdate") or {}
        event = next((item for item in events if item.get("id") == latest.get("id")), None)
        if not event:
            return None
        title = event.get("title") or event.get("name") or event.get("id")
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
        "You are ArenaLLM, a local archive chatbot. Answer the user's latest "
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
        fallback = _deterministic_answer(request_text)
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
    system = (
        "You are ArenaLLM, the action controller for a local Waluipedia archive agent. "
        "The operator gave you one request; decide how to complete it by using the "
        "small internal work units below. Choose exactly one JSON action per turn. "
        "Never invent a file path or canon fact. Read/search before patching. After "
        "a patch, run an audit. Only finish an internal work unit after a relevant "
        "audit result is present. Keep each action small. Return JSON exactly as "
        "{\"action\":\"name\",\"args\":{...}}.\n\n"
        "Allowed actions:\n" + "\n".join(f"- {k}: {v}" for k, v in TOOL_DESCRIPTIONS.items())
    )
    history: list[dict[str, str]] = _load_history(run_dir)
    last_audit = False
    for step in range(1, max(1, min(int(max_steps), 60)) + 1):
        pending = next((item for item in items if item.get("status") in {"pending", "in_progress"}), None)
        if pending is None:
            answer = _final_answer(endpoint, model, request_text, conversation, history)
            emit({"kind": "assistant", "text": answer})
            return {"status": "done", "run": run_id, "steps": step - 1, "answer": answer}
        pending["status"] = "in_progress"
        _save_checklist(check_path, items)
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
            result, side_effect = execute(action, allow_writes=allow_writes)
            if action.get("action") == "run_audit":
                last_audit = True
            record = {"at": time.time(), "step": step, "task": pending["id"], "action": action, "result": _clip(result)}
            _write_log(run_dir, record)
            history.append({"action": json.dumps(action, ensure_ascii=False), "result": _clip(result, 6000)})
            emit({"kind": "result", "step": step, "result": result})
            if action.get("action") == "finish_task":
                if not last_audit:
                    history.append({"action": "system", "result": "Cannot finish: run a relevant audit first."})
                    emit({"kind": "blocked", "step": step, "result": "Run an audit before finishing this task."})
                else:
                    pending["status"] = "done"
                    pending["note"] = str(action.get("args", {}).get("note", "Completed by agent after audit."))[:2000]
                    _save_checklist(check_path, items)
                    last_audit = False
                    emit({"kind": "task_done", "step": step, "task": pending["id"]})
            if action.get("action") == "ask_user" or result.startswith("APPROVAL_REQUIRED") or result.startswith("QUESTION:"):
                return {"status": "approval_required" if result.startswith("APPROVAL_REQUIRED") else "needs_input", "run": run_id, "step": step, "message": result}
        except Exception as error:
            fallback = _deterministic_answer(request_text)
            if fallback:
                emit({"kind": "assistant", "text": fallback, "source": "local archive fallback"})
                return {"status": "done", "run": run_id, "steps": step - 1, "answer": fallback}
            result = f"ERROR: {error}"
            history.append({"action": "system", "result": result})
            _write_log(run_dir, {"at": time.time(), "step": step, "task": pending["id"], "error": str(error)})
            emit({"kind": "error", "step": step, "result": result})
            return {"status": "error", "run": run_id, "step": step, "message": str(error)}
    return {"status": "step_limit", "run": run_id, "steps": max_steps, "message": "ArenaLLM stopped at its bounded turn limit; its internal run state remains checkpointed."}
