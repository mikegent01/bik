#!/usr/bin/env python3
"""Safe, bounded repository tools for the local agent.

No shell commands are exposed to the model. Writes require an exact one-match
patch inside the checkout and are followed by a separate validation step.
"""
from __future__ import annotations

import argparse
import os
import subprocess
from pathlib import Path

PROJECT = Path(__file__).resolve().parents[2]  # Reputation-Matrix2
ROOT = PROJECT.parent                      # checkout root
MAX_READ = 12000
TEXT_SUFFIXES = {".json", ".js", ".ts", ".tsx", ".py", ".md", ".html", ".css", ".txt"}


def safe_path(value: str) -> Path:
    path = (ROOT / value).resolve() if not Path(value).is_absolute() else Path(value).resolve()
    try:
        path.relative_to(ROOT)
    except ValueError as error:
        raise ValueError("path is outside the checkout") from error
    return path


def read_file(value: str, limit: int = MAX_READ) -> str:
    path = safe_path(value)
    if not path.is_file():
        raise ValueError(f"not a file: {value}")
    if path.stat().st_size > 2_000_000:
        raise ValueError("file is larger than the bounded read limit; use search or a focused path")
    return path.read_text(encoding="utf-8", errors="replace")[:max(1, min(limit, MAX_READ))]


def search(term: str, relative_dir: str = ".", limit: int = 40) -> list[dict[str, str]]:
    """Return relevant matching lines, not just the beginning of each file.

    The search is deliberately bounded and prunes generated/vendor directories
    before walking them. This makes repository search useful to the model and
    avoids the old broad-search timeout pattern.
    """
    term = term.strip()
    if not term:
        raise ValueError("search term is required")
    base = safe_path(relative_dir)
    needle = term.casefold()
    results: list[dict[str, str]] = []
    scanned = 0
    for root, dirs, filenames in os.walk(base):
        dirs[:] = [name for name in dirs if name not in {
            ".git", "node_modules", ".venv", "__pycache__", ".local-agent-runs",
            ".pytest_cache", "dist", "build", "coverage", "intake-inputs",
        }]
        for filename in filenames:
            if len(results) >= limit or scanned >= 8000:
                break
            path = Path(root) / filename
            if path.suffix.lower() not in TEXT_SUFFIXES:
                continue
            try:
                if path.stat().st_size > 2_000_000:
                    continue
                scanned += 1
                lines = path.read_text(encoding="utf-8", errors="ignore").splitlines()
            except OSError:
                continue
            for line_no, line in enumerate(lines, 1):
                if needle in line.casefold():
                    results.append({
                        "path": path.relative_to(ROOT).as_posix(),
                        "line": str(line_no),
                        "preview": line.strip()[:500],
                    })
                    if len(results) >= limit:
                        break
        if len(results) >= limit or scanned >= 8000:
            break
    return results


def patch(value: str, old: str, new: str) -> None:
    path = safe_path(value)
    text = path.read_text(encoding="utf-8")
    if not old or len(old) > 20000:
        raise ValueError("patch text must be non-empty and at most 20,000 characters")
    count = text.count(old)
    if count != 1:
        raise ValueError(f"patch requires exactly one match; found {count}")
    path.write_text(text.replace(old, new, 1), encoding="utf-8")


def git_read(*args: str) -> str:
    result = subprocess.run(["git", *args], cwd=ROOT, text=True, capture_output=True, timeout=15, check=False)
    if result.returncode:
        raise RuntimeError(result.stderr.strip() or f"git exited {result.returncode}")
    return result.stdout[:MAX_READ]


def status() -> str:
    return git_read("status", "--short")


def diff(paths: list[str] | None = None) -> str:
    """Return a bounded diff, validating every optional path first."""
    safe_paths = []
    for value in (paths or [])[:20]:
        path = safe_path(value)
        safe_paths.append(path.relative_to(ROOT).as_posix())
    if safe_paths:
        return git_read("diff", "--", *safe_paths)
    return git_read("diff", "--stat", "--")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)
    rd = sub.add_parser("read"); rd.add_argument("path"); rd.add_argument("--limit", type=int, default=MAX_READ)
    sr = sub.add_parser("search"); sr.add_argument("term"); sr.add_argument("--dir", default="."); sr.add_argument("--limit", type=int, default=40)
    pt = sub.add_parser("patch"); pt.add_argument("path"); pt.add_argument("--old", required=True); pt.add_argument("--new", required=True)
    st = sub.add_parser("status")
    df = sub.add_parser("diff"); df.add_argument("paths", nargs="*")
    args = parser.parse_args()
    if args.command == "read": print(read_file(args.path, args.limit), end="")
    elif args.command == "search": print(__import__("json").dumps(search(args.term, args.dir, args.limit), indent=2))
    elif args.command == "patch": patch(args.path, args.old, args.new); print(f"patched {args.path}")
    elif args.command == "status": print(status(), end="")
    elif args.command == "diff": print(diff(args.paths), end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
