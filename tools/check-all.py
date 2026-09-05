#!/usr/bin/env python3
"""Run the repo's routine verification checks in one command.

This is a wrapper, not a replacement for the individual tools. It exists so a
run report can say "check-all passed" and still show exactly which underlying
checks ran. Legacy warnings remain visible in each tool's own output; this
wrapper only fails when an underlying command exits nonzero.

Usage:
    python3 tools/check-all.py
    python3 tools/check-all.py --with-build   # also run npm build if possible
"""
from __future__ import annotations

import argparse
import os
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RM = ROOT / "Reputation-Matrix2"


def run(label: str, cmd: list[str], cwd: Path = ROOT) -> bool:
    print(f"\n=== {label} ===", flush=True)
    print("$", " ".join(cmd), flush=True)
    proc = subprocess.run(cmd, cwd=str(cwd))
    print(f"--- {label}: {'PASS' if proc.returncode == 0 else 'FAIL'} ({proc.returncode})", flush=True)
    return proc.returncode == 0


def main() -> int:
    ap = argparse.ArgumentParser(description="Run routine Waluipedia verification checks")
    ap.add_argument("--with-build", action="store_true", help="also run npm run build in Reputation-Matrix2 if npm is installed")
    args = ap.parse_args()

    py = sys.executable or "python3"
    checks: list[tuple[str, list[str], Path]] = [
        ("local paths", [py, "tools/check-local-paths.py"], ROOT),
        ("injury table", [py, "tools/generate-injury-table.py", "--check"], ROOT),
        ("duplicate records", [py, "tools/check-duplicates.py"], ROOT),
        ("references", [py, "tools/check-references.py"], ROOT),
        ("exhibits", [py, "tools/check-exhibits.py"], ROOT),
        ("investigations", [py, "tools/check-investigations.py"], ROOT),
        ("roll registry", [py, "tools/check-rolls.py"], ROOT),
        ("battles", [py, "tools/check-battles.py"], ROOT),
        ("background blurbs", [py, "tools/check-background.py"], ROOT),
        ("dossier assessments", [py, "tools/check-assessments.py"], ROOT),
        ("home feed contract", [py, "tools/check-home-feed.py"], ROOT),
        ("RNN broadcast data", [py, "tools/build-rnn-broadcast.py", "--check"], ROOT),
        ("Bros Attack sync", [py, "tools/sync_bros_attacks.py", "--check"], RM),
        ("Foundry sanitizer", [py, "tools/tests/test-sanitize-foundry-actor.py"], ROOT),
    ]

    if shutil.which("node"):
        checks.append(("Bros discovery test", ["node", "tools/tests/test_bros_discovery.mjs"], RM))
    else:
        print("\n=== Bros discovery test ===\nSKIP: node is not on PATH")

    if args.with_build:
        if shutil.which("npm"):
            checks.append(("Reputation-Matrix2 build", ["npm", "run", "build"], RM))
        else:
            print("\n=== Reputation-Matrix2 build ===\nSKIP: npm is not on PATH")

    results = [(label, run(label, cmd, cwd)) for label, cmd, cwd in checks]
    failed = [label for label, ok in results if not ok]
    print("\n=== SUMMARY ===")
    for label, ok in results:
        print(f"{'PASS' if ok else 'FAIL'}  {label}")
    if failed:
        print("\nFailed checks:", ", ".join(failed))
        return 1
    print("\nAll requested checks passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
