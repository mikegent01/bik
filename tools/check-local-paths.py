"""Best-effort check for obvious local HTML/CSS/JS path mistakes.

The original version intentionally stayed tiny, but it treated every leading
slash as a filesystem root and therefore flagged valid Vite/server routes such
as `/index.tsx`, `/static/hub.js`, and `/api/...`. This keeps the check useful
for real missing files while recognizing the local app roots used in this repo.
"""
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
missing = []
VIRTUAL_PREFIXES = ("/api/",)
SERVER_STATIC_PREFIXES = ("/static/",)


def candidate_roots(path: Path) -> list[Path]:
    roots = [path.parent]
    for parent in path.parents:
        if (parent / "package.json").exists() or parent.name == "web":
            roots.append(parent)
    roots.append(root)
    # preserve order while dropping duplicates
    out = []
    seen = set()
    for item in roots:
        if item not in seen:
            out.append(item)
            seen.add(item)
    return out


def local_target_exists(path: Path, value: str) -> bool:
    if value.startswith(VIRTUAL_PREFIXES):
        return True
    if value.startswith(SERVER_STATIC_PREFIXES):
        # The hub server exposes tools/hub/web/* under /static/*.
        name = value.split("/static/", 1)[1]
        return any((base / name).exists() for base in candidate_roots(path))
    if value.startswith("/"):
        rel = value.lstrip("/")
        return any((base / rel).exists() for base in candidate_roots(path))
    return (path.parent / value).resolve().exists()


EXCLUDED_PARTS = {".git", "node_modules", "dist", "build", "coverage"}

for p in root.rglob("*"):
    if EXCLUDED_PARTS.intersection(p.parts) or p.suffix not in {".html", ".css", ".js"}:
        continue
    try:
        text = p.read_text()
    except (UnicodeDecodeError, OSError):
        continue
    for value in re.findall(r'''(?:src|href|import\(|fetch\()\s*=?\s*["'`]([^"'`?#$]+)''', text):
        if value.startswith(("http:", "https:", "data:", "mailto:", "javascript:")):
            continue
        if not value.startswith((".", "/")):
            continue
        if not local_target_exists(p, value):
            missing.append(f"{p.relative_to(root)} -> {value}")

unique = sorted(set(missing))
print("\n".join(unique))
print(f"Obvious missing local paths: {len(unique)}")
raise SystemExit(1 if unique else 0)
