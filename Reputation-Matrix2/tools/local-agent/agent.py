#!/usr/bin/env python3
"""Local Waluipedia planner and checklist runner.

This is deliberately bounded: large requests are split into small sections,
LM Studio receives one section at a time, and every run is checkpointed outside
Git. It does not commit, push, or edit lore by itself.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path
from typing import Any

HERE = Path(__file__).resolve().parent
PROJECT = HERE.parents[1]             # Reputation-Matrix2
REPO = HERE.parents[2]                # checkout root
RUNS = PROJECT / "tools" / ".local-agent-runs"
DEFAULT_LM = os.environ.get("LM_STUDIO_URL", "http://127.0.0.1:1234/v1/chat/completions")


def clean_text(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def split_sections(text: str, max_chars: int = 6000, max_sections: int = 20) -> list[dict[str, Any]]:
    """Split on headings/paragraphs/sentences without reading any repo data."""
    text = text.strip()
    if not text:
        raise ValueError("request is empty")
    blocks = re.split(r"(?m)(?=^#{1,6}\s+)|\n\s*\n", text)
    blocks = [b.strip() for b in blocks if b.strip()]
    pieces: list[str] = []
    for block in blocks:
        if len(block) <= max_chars:
            pieces.append(block)
            continue
        sentences = re.split(r"(?<=[.!?])\s+", block)
        current = ""
        for sentence in sentences:
            if current and len(current) + len(sentence) + 1 > max_chars:
                pieces.append(current.strip())
                current = ""
            current += (" " if current else "") + sentence
        if current.strip():
            pieces.append(current.strip())
    if len(pieces) > max_sections:
        # Preserve the beginning and ending instructions; do not silently drop work.
        keep = max_sections - 1
        pieces = pieces[:keep] + ["[FINAL COMBINED SECTION]\n" + "\n\n".join(pieces[keep:])]
    return [
        {"id": f"section-{index:02d}", "title": clean_text(piece.splitlines()[0])[:100],
         "source": piece, "chars": len(piece)}
        for index, piece in enumerate(pieces, 1)
    ]


def _json_from_reply(text: str) -> dict[str, Any]:
    text = text.strip()
    if "{" in text and "}" in text:
        text = text[text.find("{"):text.rfind("}") + 1]
    value = json.loads(text)
    if not isinstance(value, dict):
        raise ValueError("LM Studio reply was not an object")
    return value


def lm_available(endpoint: str) -> bool:
    """Fail fast when LM Studio is not running; do not wait once per section."""
    models = endpoint.rsplit("/chat/completions", 1)[0] + "/models"
    try:
        with urllib.request.urlopen(models, timeout=2) as response:
            return bool(json.loads(response.read()).get("data"))
    except Exception:
        return False


def ask_lm(section: dict[str, Any], endpoint: str, model: str, timeout: int = 45) -> dict[str, Any]:
    system = (
        "You are the planning stage of a local Waluipedia agent. Convert one "
        "request section into one small executable checklist item. Do not write "
        "the article and do not invent facts. Return JSON only with keys: "
        "title, objective, micro_prompt, acceptance, repo_paths, reference_images. "
        "acceptance, repo_paths, and reference_images must be arrays. Keep the "
        "micro_prompt under 900 characters."
    )
    payload = {"messages": [{"role": "system", "content": system},
                             {"role": "user", "content": section["source"]}],
               "temperature": 0.2, "max_tokens": 700}
    if model:
        payload["model"] = model
    request = urllib.request.Request(endpoint, data=json.dumps(payload).encode(),
                                     headers={"Content-Type": "application/json"}, method="POST")
    with urllib.request.urlopen(request, timeout=timeout) as response:
        body = json.loads(response.read())
    content = body["choices"][0]["message"]["content"]
    plan = _json_from_reply(content)
    plan.setdefault("acceptance", [])
    plan.setdefault("repo_paths", [])
    plan.setdefault("reference_images", [])
    return plan


def fallback_plan(section: dict[str, Any]) -> dict[str, Any]:
    return {
        "title": section["title"],
        "objective": "Review and complete this request section without expanding scope.",
        "micro_prompt": section["source"][:900],
        "acceptance": ["Review the relevant files", "Make only the requested change", "Run a focused validation"],
        "repo_paths": [], "reference_images": [], "source_section": section["id"],
    }


def make_run(request_text: str, use_lm: bool, endpoint: str, model: str,
             max_chars: int, max_sections: int) -> Path:
    sections = split_sections(request_text, max_chars, max_sections)
    if use_lm and not lm_available(endpoint):
        print("LM Studio unavailable after 2-second probe; using deterministic planning.", flush=True)
        use_lm = False
    plans = []
    for section in sections:
        if use_lm:
            try:
                plan = ask_lm(section, endpoint, model)
            except Exception as error:  # local offline mode is normal
                plan = fallback_plan(section)
                plan["planner_note"] = f"LM Studio unavailable; deterministic fallback used: {error}"
        else:
            plan = fallback_plan(section)
        plan["source_section"] = section["id"]
        plans.append(plan)
        print(f"planned {section['id']} ({section['chars']} chars): {plan.get('title', section['title'])}", flush=True)

    base_id = time.strftime("%Y%m%d-%H%M%S")
    run_id = base_id
    run_dir = RUNS / run_id
    suffix = 1
    while run_dir.exists():
        suffix += 1
        run_id = f"{base_id}-{suffix}"
        run_dir = RUNS / run_id
    run_dir.mkdir(parents=True, exist_ok=False)
    (run_dir / "request.txt").write_text(request_text, encoding="utf-8")
    (run_dir / "plan.json").write_text(json.dumps({"run_id": run_id, "sections": sections, "plans": plans}, indent=2, ensure_ascii=False), encoding="utf-8")
    checklist = [{"id": f"task-{index:02d}", "section": plan["source_section"],
                  "title": plan.get("title", "Untitled task"), "status": "pending",
                  "micro_prompt": plan.get("micro_prompt", ""),
                  "acceptance": plan.get("acceptance", []),
                  "repo_paths": plan.get("repo_paths", []),
                  "reference_images": plan.get("reference_images", [])}
                 for index, plan in enumerate(plans, 1)]
    (run_dir / "checklist.json").write_text(json.dumps(checklist, indent=2, ensure_ascii=False), encoding="utf-8")
    (run_dir / "state.json").write_text(json.dumps({"run_id": run_id, "next": checklist[0]["id"] if checklist else None}, indent=2), encoding="utf-8")
    print(f"run {run_id} created at {run_dir}")
    return run_dir


def checklist_path(run_id: str) -> Path:
    path = RUNS / run_id / "checklist.json"
    if not path.is_file():
        raise SystemExit(f"unknown run: {run_id}")
    return path


def cmd_next(args: argparse.Namespace) -> int:
    items = json.loads(checklist_path(args.run).read_text(encoding="utf-8"))
    for item in items:
        if item["status"] == "pending":
            print(json.dumps(item, indent=2, ensure_ascii=False))
            return 0
    print("checklist complete")
    return 0


def cmd_mark(args: argparse.Namespace) -> int:
    path = checklist_path(args.run)
    items = json.loads(path.read_text(encoding="utf-8"))
    for item in items:
        if item["id"] == args.task:
            item["status"] = args.status
            item["note"] = args.note
            path.write_text(json.dumps(items, indent=2, ensure_ascii=False), encoding="utf-8")
            print(f"{args.task}: {args.status}")
            return 0
    raise SystemExit(f"unknown task: {args.task}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)
    plan = sub.add_parser("plan", help="chunk a large request and create a checklist")
    source = plan.add_mutually_exclusive_group(required=True)
    source.add_argument("--input", type=Path)
    source.add_argument("--text")
    plan.add_argument("--no-llm", action="store_true")
    plan.add_argument("--endpoint", default=DEFAULT_LM)
    plan.add_argument("--model", default=os.environ.get("LM_STUDIO_MODEL", ""))
    plan.add_argument("--max-chars", type=int, default=6000)
    plan.add_argument("--max-sections", type=int, default=20)
    plan.set_defaults(func=lambda a: (make_run(a.input.read_text(encoding="utf-8") if a.input else a.text,
                                               not a.no_llm, a.endpoint, a.model, a.max_chars, a.max_sections), 0)[1])
    nxt = sub.add_parser("next", help="show the next bounded task")
    nxt.add_argument("run"); nxt.set_defaults(func=cmd_next)
    mark = sub.add_parser("mark", help="mark one task done or blocked")
    mark.add_argument("run"); mark.add_argument("task", help="task id")
    mark.add_argument("status", choices=["pending", "in_progress", "done", "blocked"])
    mark.add_argument("--note", default="")
    mark.set_defaults(func=cmd_mark)
    args = parser.parse_args()
    return args.func(args)


if __name__ == "__main__":
    raise SystemExit(main())
