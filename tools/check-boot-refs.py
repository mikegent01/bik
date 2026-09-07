#!/usr/bin/env python3
"""Every function boot() calls must be defined in index.html.

Regression guard for the Batch 1 prune, which deleted loadGeneratedFactions
alongside the wahwire block and left boot() throwing before Router.render().
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = (ROOT / "index.html").read_text(encoding="utf-8")

# Calls that are language keywords, browser builtins, or methods (obj.name()
# is excluded from the call regex by the lookbehind, but list stragglers here).
SKIP = {
    "if", "for", "while", "switch", "catch", "with",
    "fetch", "setTimeout", "setInterval", "clearTimeout", "clearInterval",
    "requestAnimationFrame", "parseInt", "parseFloat", "String", "Number",
    "Boolean", "Array", "Object", "JSON", "Math", "Promise", "Date",
    "RegExp", "Error", "Map", "Set", "WeakMap", "encodeURIComponent",
    "decodeURIComponent", "encodeURI", "decodeURI", "isNaN", "Number",
    "isFinite", "eval", "Function", "Symbol", "BigInt", "URL",
}

m = re.search(r"async function boot\(\)\{(.*?)\nboot\(\);", SRC, re.S)
if not m:
    print("FAIL: boot() body not found")
    sys.exit(1)
body = m.group(1)
calls = sorted(set(re.findall(r"(?<![.\w])([A-Za-z_]\w*)\s*\(", body)) - SKIP)

missing = []
for name in calls:
    defined = re.search(
        rf"(async\s+)?function {re.escape(name)}\s*\(|"
        rf"(const|let|var)\s+{re.escape(name)}\s*=|"
        rf"{re.escape(name)}\s*:\s*function\s*\(",
        SRC,
    )
    if not defined:
        missing.append(name)

if missing:
    print("FAIL: boot() calls undefined functions: " + ", ".join(missing))
    sys.exit(1)
print(f"PASS: boot() calls {len(calls)} resolved functions ({', '.join(calls)})")
