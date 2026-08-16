#!/usr/bin/env python3
"""The all-systems generator.

One entry point that cycles every generatable system in the archive — Warizon
stock, WAHwire posts, Training Wing abilities, reputation impacts, source-backed
faction dossiers, Crafting Forge schools — in popcorn order: one record from a
system, then a record from a different system, never draining one before moving
on.

Uses the same method as `generate_abilities.py`: LM Studio over the local HTTP
API, resumable checkpoints, atomic writes and hard validation. A record the
validator rejects is never written.

    python3 tools/generate_all.py --inventory        # what is missing, per system
    python3 tools/generate_all.py --dry-run --limit 6
    python3 tools/generate_all.py --workers 2
    python3 tools/generate_all.py --only reputation --limit 50
    python3 tools/generate_all.py --gui              # control panel

Every generated record carries `status` and a `_generated` provenance stamp so
machine-drafted content is always distinguishable from hand-written canon.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from genkit.runner import Runner, RunnerEvent          # noqa: E402
from genkit.settings import Settings                    # noqa: E402
from genkit.storage import Checkpoint                   # noqa: E402
from genkit.systems import all_systems                  # noqa: E402

ICONS = {"ok": "✅", "fail": "❌", "skip": "⏭", "task": "→", "started": "▶",
         "done": "🏁", "error": "💥"}


def print_inventory() -> None:
    systems = all_systems()
    width = max(len(s.title) for s in systems)
    print("\nGeneratable systems — pending work\n")
    print(f"  {'stage':<6}{'system':<{width + 2}}{'pending':>9}")
    print("  " + "─" * (width + 17))
    total = 0
    for system in sorted(
        systems, key=lambda s: (not s.enabled, s.stage, -s.count_pending())
    ):
        pending = system.count_pending()
        stage = str(system.stage) if system.enabled else "off"
        if system.enabled:
            total += pending
        print(f"  {stage:<6}{system.title:<{width + 2}}{pending:>9}")
        print(f"  {'':<6}{system.summary}")
    print("  " + "─" * (width + 17))
    print(f"  {'':<6}{'TOTAL ENABLED':<{width + 2}}{total:>9}\n")
    print("  Stage 0 systems gate every higher stage: nothing at stage 1 runs")
    print("  until stage 0 is empty.\n")


def print_checkpoints(settings: Settings) -> None:
    print("\nCheckpoints\n")
    for system in all_systems():
        ok, failed = Checkpoint(settings.work_dir, system.id).counts()
        print(f"  {system.id:<18} {ok:>6} done   {failed:>4} failed")
    print(f"\n  ({settings.work_dir})\n")


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Cycle every generatable system in popcorn order.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument("--inventory", action="store_true",
                        help="print what each system has left to do, then exit")
    parser.add_argument("--checkpoints", action="store_true",
                        help="print checkpoint counts, then exit")
    parser.add_argument("--gui", action="store_true", help="open the control panel")
    parser.add_argument("--web", action="store_true",
                        help="force the browser dashboard instead of a native window")
    parser.add_argument("--port", type=int, default=8765, help="dashboard port")
    parser.add_argument("--host", default="127.0.0.1",
                        help="dashboard bind address (use 0.0.0.0 to reach it "
                             "from another machine)")

    parser.add_argument("--workers", type=int, default=2,
                        help="concurrent LM Studio conversations (default 2)")
    parser.add_argument("--limit", type=int, default=0,
                        help="stop after N successful records (0 = until exhausted)")
    parser.add_argument("--only", default="", help="comma-separated system ids")
    parser.add_argument("--skip", default="", help="comma-separated system ids to exclude")
    parser.add_argument("--dry-run", action="store_true",
                        help="call the model and validate, but write nothing")
    parser.add_argument("--endpoint", default=Settings().endpoint)
    parser.add_argument("--model", default="", help="blank = whatever LM Studio has loaded")
    parser.add_argument("--temperature", type=float, default=0.7)
    parser.add_argument("--pace", type=float, default=0.0,
                        help="seconds to wait between records")
    parser.add_argument("--seed", type=int, default=0, help="seed the popcorn order")
    parser.add_argument("--timeout", type=int, default=240)

    args = parser.parse_args(argv)

    if args.inventory:
        print_inventory()
        return 0

    settings = Settings(
        endpoint=args.endpoint,
        model=args.model,
        workers=args.workers,
        timeout=args.timeout,
        temperature=args.temperature,
        limit=args.limit,
        only=[s.strip() for s in args.only.split(",") if s.strip()],
        skip=[s.strip() for s in args.skip.split(",") if s.strip()],
        dry_run=args.dry_run,
        seed=args.seed,
        pace=args.pace,
    )

    if args.checkpoints:
        print_checkpoints(settings)
        return 0

    if args.gui or args.web:
        from genkit.gui import launch
        launch(prefer_web=args.web, host=args.host, port=args.port,
               defaults=settings)
        return 0

    def on_event(event: RunnerEvent) -> None:
        icon = ICONS.get(event.kind, "·")
        print(f"{icon} {event.text}", flush=True)

    runner = Runner(all_systems(), settings, on_event=on_event)
    try:
        runner.run()
    except KeyboardInterrupt:
        print("\ninterrupted — finishing in-flight records")
        runner.stop()
        return 130
    return 0 if runner.failed == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
