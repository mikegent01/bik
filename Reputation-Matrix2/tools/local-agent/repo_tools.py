#!/usr/bin/env python3
"""Safe, bounded repository tools for the local agent.

No shell commands are exposed to the model. Writes require an exact one-match
patch inside the checkout and are followed by a separate validation step.
"""
from __future__ import annotations

import argparse
import subprocess
from pathlib import Path

PROJECT = Path(__file__).resolve().parents[1]
ROOT = PROJECT.parent
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
    base = safe_path(relative_dir)
    results = []
    for path in base.rglob("*"):
        if len(results) >= limit or not path.is_file() or path.suffix.lower() not in TEXT_SUFFIXES:
            continue
        if ".git" in path.parts or "node_modules" in path.parts or path.stat().st_size > 2_000_000:
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        if term.lower() in text.lower():
            results.append({"path": path.relative_to(ROOT).as_posix(), "preview": text[:300]})
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


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)
    rd = sub.add_parser("read"); rd.add_argument("path"); rd.add_argument("--limit", type=int, default=MAX_READ)
    sr = sub.add_parser("search"); sr.add_argument("term"); sr.add_argument("--dir", default="."); sr.add_argument("--limit", type=int, default=40)
    pt = sub.add_parser("patch"); pt.add_argument("path"); pt.add_argument("--old", required=True); pt.add_argument("--new", required=True)
    st = sub.add_parser("status"); st.set_defaults(args=("status", "--short"))
    df = sub.add_parser("diff"); df.add_argument("paths", nargs="*")
    args = parser.parse_args()
    if args.command == "read": print(read_file(args.path, args.limit), end="")
    elif args.command == "search": print(__import__("json").dumps(search(args.term, args.dir, args.limit), indent=2))
    elif args.command == "patch": patch(args.path, args.old, args.new); print(f"patched {args.path}")
    elif args.command == "status": print(git_read(*args.args), end="")
    elif args.command == "diff": print(git_read("diff", "--", *args.paths), end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
