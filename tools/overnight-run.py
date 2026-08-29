#!/usr/bin/env python3
"""One unattended overnight run for the archive.

The run is deliberately an orchestrator, not a second content generator:
- the Mages' Guild generator remains the owner of Codex generation;
- the injury generator remains the owner of the temporary injury table;
- this file validates the injury contract, runs the Codex overnight pass, and
  validates again so a future AI injury replacement can be added as one stage.

Examples:
  python3 tools/overnight-run.py --plan
  python3 tools/overnight-run.py --skip-mages
  python3 tools/overnight-run.py --base-url http://127.0.0.1:1234/v1 --target 400
  python3 tools/overnight-run.py --systems reputation,faction_dossiers --system-limit 40
  python3 tools/overnight-run.py --inventory
"""
from __future__ import annotations

import argparse
import signal
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PYTHON = sys.executable or "python3"
INJURY = ROOT / "tools" / "generate-injury-table.py"
MAGES = ROOT / "tools" / "gen-mages-guild-code.py"
ALL_SYSTEMS = ROOT / "Reputation-Matrix2" / "tools" / "generate_all.py"


def run(label: str, command: list[str]) -> int:
    """Run one stage in the repository root and return its exit code."""
    print(f"\n=== overnight: {label} ===", flush=True)
    print("$", " ".join(command), flush=True)
    completed = subprocess.run(command, cwd=ROOT)
    print(f"--- {label}: {'PASS' if completed.returncode == 0 else 'FAIL'} ({completed.returncode})", flush=True)
    return completed.returncode


def main() -> int:
    parser = argparse.ArgumentParser(description="Run the archive's unattended overnight stages")
    parser.add_argument("--plan", action="store_true", help="show stages without writing or contacting an AI server")
    parser.add_argument("--skip-mages", action="store_true", help="only validate the injury table")
    parser.add_argument("--base-url", default="http://127.0.0.1:1234/v1", help="LM Studio OpenAI-compatible endpoint")
    parser.add_argument("--model", default="", help="model passed to the Mages' Guild generator")
    parser.add_argument("--target", type=int, default=400, help="maximum Codex pages for this overnight run")
    parser.add_argument("--parallel", "--jobs", dest="parallel", type=int, default=1, help="Codex prompt workers")
    parser.add_argument("--sleep", type=float, default=0.4, help="delay between Codex saves")
    parser.add_argument("--log", default="", help="optional Codex log path")
    parser.add_argument("--systems", default="", help="opt in to the validated all-systems generator; comma-separated ids")
    parser.add_argument("--system-limit", type=int, default=0, help="maximum successful all-systems records (0 = until its pending queue is exhausted)")
    parser.add_argument("--system-workers", type=int, default=2, help="concurrent workers for the all-systems generator")
    parser.add_argument("--inventory", action="store_true", help="show pending counts for every generatable system and exit")
    args = parser.parse_args()

    if args.inventory:
        return run("all-systems inventory", [PYTHON, str(ALL_SYSTEMS), "--inventory"])

    injury_check = [PYTHON, str(INJURY), "--check"]
    mages = [PYTHON, str(MAGES), "--overnight", "--target", str(args.target), "--base-url", args.base_url,
             "--parallel", str(max(1, min(8, args.parallel))), "--sleep", str(max(0, args.sleep))]
    if args.model:
        mages += ["--model", args.model]
    if args.log:
        mages += ["--log", args.log]

    stages = [("injury contract before run", injury_check)]
    if not args.skip_mages:
        stages.append(("Mages' Guild Codex", mages))
    if args.systems:
        systems = [x.strip() for x in args.systems.split(",") if x.strip()]
        all_cmd = [PYTHON, str(ALL_SYSTEMS), "--only", ",".join(systems),
                   "--workers", str(max(1, min(8, args.system_workers))),
                   "--endpoint", args.base_url.rstrip("/") + "/chat/completions"]
        if args.system_limit:
            all_cmd += ["--limit", str(max(1, args.system_limit))]
        if args.model:
            all_cmd += ["--model", args.model]
        stages.append(("validated all-systems: " + ", ".join(systems), all_cmd))
    stages.append(("injury contract after run", injury_check))

    if args.plan:
        print("planned overnight stages:")
        for label, command in stages:
            print(f"  {label}: {' '.join(command)}")
        return 0

    # Let the child generator handle its own graceful save on Ctrl-C/SIGTERM.
    for label, command in stages:
        code = run(label, command)
        if code:
            print(f"overnight stopped after {label}; later stages were not run", file=sys.stderr)
            return code
    print("\novernight complete: all stages passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
