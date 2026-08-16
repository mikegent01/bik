#!/usr/bin/env python3
"""Resolve --wz-* tokens for both themes and prove the bros-yard layers differ.

jsdom does not resolve var(), so computed-style probes report every custom
property as transparent and cannot catch "this panel is invisible against its
own background". This reads the real stylesheet, builds the light and dark
token tables, and compares the actual colours the browser would paint.
"""
import re
import sys
from pathlib import Path

CSS = (Path(__file__).resolve().parents[1] / "app" / "pages" / "commerce" / "warizon-shop.css").read_text()


# Comments mention selectors too ("Toggle: ... -> html[data-wz-theme=\"dark\"]"),
# so strip them before searching or the block finder locks onto prose.
CSS = re.sub(r"/\*.*?\*/", "", CSS, flags=re.S)


def block(selector: str) -> str:
    # Must be a rule opener: the selector followed by optional space then "{".
    # Anchor at line start: searching for ".by-tech" otherwise matches the
    # descendant rule ".by-school .by-tech" that appears earlier in the file.
    m = re.search(r"(?m)^" + re.escape(selector) + r"\s*\{", CSS)
    if not m:
        return ""
    i = m.start()
    start = CSS.index("{", i)
    depth, j = 0, start
    while j < len(CSS):
        if CSS[j] == "{":
            depth += 1
        elif CSS[j] == "}":
            depth -= 1
            if depth == 0:
                break
        j += 1
    return CSS[start:j]


def tokens(text: str) -> dict:
    return {m.group(1): m.group(2).strip()
            for m in re.finditer(r"(--wz-[a-z0-9-]+)\s*:\s*([^;}]+)", text)}


LIGHT = tokens(block(":root"))
DARK = dict(LIGHT)
DARK.update(tokens(block('html[data-wz-theme="dark"]')))


def resolve(value: str, table: dict, seen=0):
    """Expand var(--x, fallback) chains the way a browser would."""
    if seen > 10:
        return value
    m = re.fullmatch(r"var\(\s*(--[a-z0-9-]+)\s*(?:,\s*(.+?)\s*)?\)", value.strip())
    if not m:
        return value.strip()
    name, fallback = m.group(1), m.group(2)
    if name in table:
        return resolve(table[name], table, seen + 1)
    if fallback:
        return resolve(fallback, table, seen + 1)
    return None  # undefined token with no fallback -> the --wz-panel bug


def prop(selector: str, name: str):
    b = block(selector)
    m = re.search(rf"(?:^|[;{{])\s*{name}\s*:\s*([^;}}]+)", b)
    return m.group(1).strip() if m else None


fails = []
print(f"{'layer':<26}{'light':<12}{'dark':<12}")
print("-" * 50)

LAYERS = [
    (".by-school", "background", 'html[data-wz-theme="dark"] .by-school'),
    (".by-tech", "background", 'html[data-wz-theme="dark"] .by-tech'),
    (".by-kit", "background", 'html[data-wz-theme="dark"] .by-kit'),
]

resolved = {}
for sel, name, dark_sel in LAYERS:
    light_v = resolve(prop(sel, name) or "", LIGHT)
    dark_raw = prop(dark_sel, name) or prop(sel, name) or ""
    dark_v = resolve(dark_raw, DARK)
    resolved[sel] = (light_v, dark_v)
    print(f"{sel:<26}{str(light_v):<12}{str(dark_v):<12}")
    for theme, v in (("light", light_v), ("dark", dark_v)):
        if v is None:
            fails.append(f"{sel} {name} resolves to nothing in {theme} "
                         f"(undefined token, no fallback) — this is the --wz-panel bug")

print()
# The three layers nest: school > tech > kit. Each must differ from its parent.
for child, parent in ((".by-tech", ".by-school"), (".by-kit", ".by-tech")):
    for idx, theme in ((0, "light"), (1, "dark")):
        c, p = resolved[child][idx], resolved[parent][idx]
        if c is not None and c == p:
            fails.append(f"{child} is invisible against {parent} in {theme} (both {c})")
        else:
            print(f"  ok {theme:<6} {child} ({c}) separates from {parent} ({p})")

# No .by-* rule anywhere may reference a token that does not resolve.
for m in re.finditer(r"(\.by-[a-z-]+[^{}]*)\{([^}]*)\}", CSS):
    sel, body = m.group(1).strip(), m.group(2)
    table = DARK if "data-wz-theme" in sel else LIGHT
    for v in re.finditer(r":\s*(var\([^;}]+\))", body):
        if resolve(v.group(1), table) is None:
            fails.append(f"{sel}: {v.group(1)} does not resolve")

print()
if fails:
    print(f"{len(fails)} FAILED")
    for f in fails:
        print("  FAIL " + f)
    sys.exit(1)
print("all bros-yard layers resolve and separate in both themes")
