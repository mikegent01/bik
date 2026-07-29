"""Discovery of everything the hub can open or run.

Three catalogs:
  scripts  — every .py in tools/ (and tools/data), with its docstring, CLI flags
             parsed out of argparse calls, and its public functions
  data     — every JSON/JS data file, with size and a shape summary
  pages    — the site's HTML pages, so the hub can open them in the browser

Nothing is imported to build this catalog: the scripts are parsed with `ast`, so
listing tools can never trigger a side effect or a missing dependency.
"""
from __future__ import annotations

import ast
import json
from pathlib import Path
from typing import Any

from . import paths

# Scripts that open their own window or run forever; the hub warns before these.
INTERACTIVE = {"shop_studio.py", "enrich_shop_items.py", "generate_abilities.py"}
LONG_RUNNING = {"generate_shop_context.py", "enrich_shop_items.py", "generate_abilities.py"}


def _summarize_function(node: ast.FunctionDef | ast.AsyncFunctionDef) -> dict[str, Any]:
    args = [arg.arg for arg in node.args.args if arg.arg not in ("self", "cls")]
    if node.args.vararg:
        args.append("*" + node.args.vararg.arg)
    args.extend(arg.arg for arg in node.args.kwonlyargs)
    if node.args.kwarg:
        args.append("**" + node.args.kwarg.arg)
    doc = ast.get_docstring(node) or ""
    return {
        "name": node.name,
        "args": args,
        "line": node.lineno,
        "doc": doc.strip().split("\n")[0][:200],
        "isPublic": not node.name.startswith("_"),
    }


def _find_cli_flags(tree: ast.AST) -> list[dict[str, Any]]:
    """Pull `parser.add_argument(...)` flags straight out of the source."""
    flags: list[dict[str, Any]] = []
    for node in ast.walk(tree):
        if not isinstance(node, ast.Call):
            continue
        func = node.func
        if not (isinstance(func, ast.Attribute) and func.attr == "add_argument"):
            continue
        names = [arg.value for arg in node.args
                 if isinstance(arg, ast.Constant) and isinstance(arg.value, str)]
        if not names:
            continue
        entry: dict[str, Any] = {"flags": names, "help": "", "action": "", "default": None}
        for keyword in node.keywords:
            if keyword.arg in ("help", "action") and isinstance(keyword.value, ast.Constant):
                entry[keyword.arg] = keyword.value.value
            elif keyword.arg == "default" and isinstance(keyword.value, ast.Constant):
                entry["default"] = keyword.value.value
        flags.append(entry)
    return flags


def scan_script(path: Path) -> dict[str, Any]:
    """Parse one Python file into a hub entry. Never executes the file."""
    relative = path.relative_to(paths.TOOLS_DIR)
    entry: dict[str, Any] = {
        "id": str(relative).replace("\\", "/"),
        "name": path.stem.replace("_", " ").title(),
        "file": str(path),
        "relativeFile": paths.relative(path),
        "size": path.stat().st_size,
        "doc": "",
        "summary": "",
        "functions": [],
        "flags": [],
        "hasMain": False,
        "interactive": path.name in INTERACTIVE,
        "longRunning": path.name in LONG_RUNNING,
        "error": None,
    }
    try:
        source = path.read_text(encoding="utf-8")
        tree = ast.parse(source)
    except (OSError, SyntaxError) as error:
        entry["error"] = str(error)
        return entry

    doc = ast.get_docstring(tree) or ""
    entry["doc"] = doc.strip()
    entry["summary"] = doc.strip().split("\n")[0][:220] if doc else "No description available."
    entry["functions"] = [
        _summarize_function(node) for node in tree.body
        if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef))
    ]
    entry["classes"] = [node.name for node in tree.body if isinstance(node, ast.ClassDef)]
    entry["flags"] = _find_cli_flags(tree)
    entry["hasMain"] = any(
        isinstance(node, ast.If) and isinstance(node.test, ast.Compare)
        and isinstance(node.test.left, ast.Name) and node.test.left.id == "__name__"
        for node in tree.body
    )
    return entry


def scripts(include_hub: bool = False) -> list[dict[str, Any]]:
    """Every runnable Python tool, sorted by name."""
    found: list[dict[str, Any]] = []
    for path in sorted(paths.TOOLS_DIR.rglob("*.py")):
        parts = set(path.parts)
        if "__pycache__" in parts or ".hub-out" in parts:
            continue
        if not include_hub and paths.HUB_DIR in path.parents:
            continue
        found.append(scan_script(path))
    return found


def _shape(value: Any) -> str:
    if isinstance(value, list):
        if value and isinstance(value[0], dict):
            return f"list of {len(value)} objects"
        return f"list of {len(value)} values"
    if isinstance(value, dict):
        return f"object with {len(value)} keys"
    return type(value).__name__


def data_files() -> list[dict[str, Any]]:
    """JSON and JS data the hub can open, with a cheap shape summary."""
    entries: list[dict[str, Any]] = []
    seen: set[Path] = set()
    roots = [
        (paths.DATA_DIR, "data"),
        (paths.SHOP_ITEMS_DIR, "shop-items"),
        (paths.EXAMPLES_DIR, "item sheet examples"),
        (paths.ROOT, "root"),
    ]
    for root, group in roots:
        if not root.exists():
            continue
        pattern = root.glob("*") if group == "root" else root.rglob("*")
        for path in sorted(pattern):
            if not path.is_file() or path.suffix.lower() not in (".json", ".js"):
                continue
            if path in seen or ".hub-out" in path.parts:
                continue
            seen.add(path)
            entry: dict[str, Any] = {
                "id": paths.relative(path),
                "name": path.name,
                "group": group,
                "file": str(path),
                "size": path.stat().st_size,
                "kind": path.suffix.lstrip("."),
                "shape": "",
                "keys": [],
            }
            if path.suffix.lower() == ".json" and path.stat().st_size < 6_000_000:
                try:
                    value = json.loads(path.read_text(encoding="utf-8"))
                    entry["shape"] = _shape(value)
                    if isinstance(value, dict):
                        entry["keys"] = list(value)[:40]
                    elif value and isinstance(value[0], dict):
                        entry["keys"] = list(value[0])[:40]
                except (OSError, json.JSONDecodeError) as error:
                    entry["shape"] = f"unreadable: {str(error)[:80]}"
            entries.append(entry)
    return entries


def pages() -> list[dict[str, Any]]:
    """Site HTML pages, so the hub can link straight into the live wiki."""
    entries: list[dict[str, Any]] = []
    for root in (paths.ROOT, paths.SITE_ROOT):
        for path in sorted(root.glob("*.html")):
            entries.append({
                "id": paths.relative(path),
                "name": path.name,
                "file": str(path),
                "size": path.stat().st_size,
                "where": "Reputation-Matrix2" if root == paths.ROOT else "site root",
            })
    return entries


def overview() -> dict[str, Any]:
    """Everything the hub landing screen needs in one call."""
    script_entries = scripts()
    data_entries = data_files()
    return {
        "root": str(paths.ROOT),
        "counts": {
            "scripts": len(script_entries),
            "functions": sum(len(entry["functions"]) for entry in script_entries),
            "dataFiles": len(data_entries),
            "pages": len(pages()),
        },
        "scripts": script_entries,
        "data": data_entries,
        "pages": pages(),
    }
