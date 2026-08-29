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
EXPAND = ROOT / "tools" / "expand-waluipedia.py"
MIX_SYSTEMS = "wahwire-author,shop_items,reputation,faction-dossiers,crafting,abilities"


def run(label: str, command: list[str]) -> int:
    """Run one stage in the repository root and return its exit code."""
    print(f"\n=== overnight: {label} ===", flush=True)
    print("$", " ".join(command), flush=True)
    completed = subprocess.run(command, cwd=ROOT)
    print(f"--- {label}: {'PASS' if completed.returncode == 0 else 'FAIL'} ({completed.returncode})", flush=True)
    return completed.returncode


def progress(label: str, done: int, total: int) -> None:
    width = 28
    ratio = 1.0 if total <= 0 else min(1.0, done / total)
    filled = int(width * ratio)
    bar = "#" * filled + "-" * (width - filled)
    print(f"{label:<12} [{bar}] {done}/{total}", flush=True)


def main() -> int:
    parser = argparse.ArgumentParser(description="Run the archive's unattended overnight stages")
    parser.add_argument("--plan", action="store_true", help="show stages without writing or contacting an AI server")
    parser.add_argument("--skip-mages", action="store_true", help="only validate the injury table")
    parser.add_argument("--base-url", default="http://127.0.0.1:1234/v1", help="LM Studio OpenAI-compatible endpoint")
    parser.add_argument("--model", default="", help="model passed to the Mages' Guild generator")
    parser.add_argument("--target", type=int, default=400, help="maximum Codex pages for this overnight run")
    parser.add_argument("--infinite", action="store_true", help="cycle bounded mixed rounds indefinitely; safe to stop and resume")
    parser.add_argument("--parallel", "--jobs", dest="parallel", type=int, default=1, help="Codex prompt workers")
    parser.add_argument("--sleep", type=float, default=0.4, help="delay between Codex saves")
    parser.add_argument("--log", default="", help="optional Codex log path")
    parser.add_argument("--systems", default="", help="opt in to the validated all-systems generator; comma-separated ids")
    parser.add_argument("--system-limit", type=int, default=0, help="maximum successful all-systems records (0 = until its pending queue is exhausted)")
    parser.add_argument("--system-workers", type=int, default=2, help="concurrent workers for the all-systems generator (non-mixed mode)")
    parser.add_argument("--system-batch", type=int, default=6, help="records per all-systems batch in --mix; lets its popcorn scheduler rotate systems without restarting each record")
    parser.add_argument("--inventory", action="store_true", help="show pending counts for every generatable system and exit")
    parser.add_argument("--past-events", type=int, default=0, metavar="N", help="after all selected systems finish, add N sparse-nation past events via expand-waluipedia")
    parser.add_argument("--past-max-attempts", type=int, default=0, help="hard attempt ceiling for past-event expansion (0 = N + 10 retries per item)")
    parser.add_argument("--mix", action="store_true", help="run the Codex, then the six validated archive systems, instead of only the Codex")
    args = parser.parse_args()

    if args.inventory:
        return run("all-systems inventory", [PYTHON, str(ALL_SYSTEMS), "--inventory"])
    if args.mix and not args.systems:
        args.systems = MIX_SYSTEMS

    injury_check = [PYTHON, str(INJURY), "--check"]
    mages = [PYTHON, str(MAGES), "--overnight", "--target", str(args.target), "--base-url", args.base_url,
             "--parallel", str(max(1, min(8, args.parallel))), "--sleep", str(max(0, args.sleep))]
    if args.model:
        mages += ["--model", args.model]
    if args.log:
        mages += ["--log", args.log]

    # --mix is a true interleaved mode: one Codex page, then one record from
    # the validated archive systems. The old stage list intentionally remains
    # available for users who want large contiguous batches.
    if args.mix:
        systems = args.systems.split(",")
        # A mixed round is deliberately one system record at a time. Passing
        # workers=2 here caused generate_all to queue two large prompts before
        # the round could report progress, and could exhaust LM Studio KV space.
        all_base = [PYTHON, str(ALL_SYSTEMS), "--only", args.systems,
                    "--workers", "1", "--continue-on-failure",
                    "--endpoint", args.base_url.rstrip("/") + "/chat/completions"]
        if args.model:
            all_base += ["--model", args.model]
        if args.plan:
            print("planned interleaved overnight run:")
            print("  injury contract before run")
            print(f"  repeat: Codex 1 page → all-systems batches of up to {max(1, args.system_batch)} records ({args.systems})")
            if args.past_events:
                print(f"  after rounds: expand-waluipedia past events ({args.past_events})")
            print("  Codex emoji audit")
            print("  injury contract after run")
            if args.infinite:
                print("  supervisor: repeat bounded rounds until interrupted")
            return 0
        if run("injury contract before run", injury_check):
            return 1
        system_goal = args.system_limit if args.system_limit > 0 else args.target
        codex_done = system_done = 0
        round_no = 0
        while args.infinite or (codex_done < args.target and system_done < system_goal):
            round_no += 1
            codex_cmd = [*mages]
            # mages contains --overnight/--target; replace with one bounded job.
            codex_cmd = [x for x in codex_cmd if x not in ("--overnight", "--target", str(args.target))]
            codex_cmd += ["--count", "1"]
            if run(f"mix Codex {codex_done + 1}", codex_cmd):
                return 1
            codex_done += 1
            remaining = max(1, system_goal - system_done) if not args.infinite else max(1, args.system_batch)
            batch = min(max(1, args.system_batch), remaining)
            system_cmd = [*all_base, "--limit", str(batch)]
            if run(f"mix systems {system_done + 1}-{system_done + batch}", system_cmd):
                return 1
            system_done += batch
            progress("Codex", codex_done, args.target if not args.infinite else 0)
            progress("Systems", system_done, system_goal if not args.infinite else 0)
            if args.infinite and args.past_events:
                # Event creation is deliberately downstream of a reputation
                # drain, never concurrent with reputation backfill.
                reputation_cmd = [*all_base, "--only", "reputation", "--limit", "0"]
                if run(f"round {round_no}: reputation backfill", reputation_cmd):
                    return 1
                past_cmd = [PYTHON, str(EXPAND), "--past-events", "--overnight", "--target", str(args.past_events),
                            "--base-url", args.base_url, "--sleep", str(max(0, args.sleep))]
                if args.past_max_attempts:
                    past_cmd += ["--max-attempts", str(max(1, args.past_max_attempts))]
                if args.model:
                    past_cmd += ["--model", args.model]
                if run(f"round {round_no}: expand-waluipedia: sparse foreign past events", past_cmd):
                    return 1
        print(f"interleaved rounds complete: Codex {codex_done}, systems {system_done}" if not args.infinite else
              f"infinite run stopped: Codex {codex_done}, systems {system_done}")
        if args.past_events:
            past_cmd = [PYTHON, str(EXPAND), "--past-events", "--overnight", "--target", str(args.past_events),
                        "--base-url", args.base_url, "--sleep", str(max(0, args.sleep))]
            if args.past_max_attempts:
                past_cmd += ["--max-attempts", str(max(1, args.past_max_attempts))]
            if args.model:
                past_cmd += ["--model", args.model]
            if run("expand-waluipedia: sparse foreign past events", past_cmd):
                return 1
        if run("Codex emoji audit", [PYTHON, str(MAGES), "--check-emoji"]):
            return 1
        return run("injury contract after run", injury_check)

    if args.infinite and not args.mix:
        print("--infinite requires --mix so Codex, reputation, systems, and events can cycle safely", file=sys.stderr)
        return 2

    stages = [("injury contract before run", injury_check)]
    if not args.skip_mages:
        stages.append(("Mages' Guild Codex", mages))
    if args.systems:
        systems = [x.strip() for x in args.systems.split(",") if x.strip()]
        all_cmd = [PYTHON, str(ALL_SYSTEMS), "--only", ",".join(systems),
                   "--workers", str(max(1, min(8, args.system_workers))),
                   "--continue-on-failure",
                   "--endpoint", args.base_url.rstrip("/") + "/chat/completions"]
        if args.system_limit:
            all_cmd += ["--limit", str(max(1, args.system_limit))]
        if args.model:
            all_cmd += ["--model", args.model]
        stages.append(("validated all-systems: " + ", ".join(systems), all_cmd))
    if args.past_events:
        past_cmd = [PYTHON, str(EXPAND), "--past-events", "--overnight", "--target", str(args.past_events),
                    "--base-url", args.base_url, "--sleep", str(max(0, args.sleep))]
        if args.past_max_attempts:
            past_cmd += ["--max-attempts", str(max(1, args.past_max_attempts))]
        if args.model:
            past_cmd += ["--model", args.model]
        stages.append(("expand-waluipedia: sparse foreign past events", past_cmd))
    stages.append(("Codex emoji audit", [PYTHON, str(MAGES), "--check-emoji"]))
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
