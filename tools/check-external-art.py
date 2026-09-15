#!/usr/bin/env python3
"""check-external-art.py — no archive art may live on someone else's server.

Why this exists
---------------
Three battle and location records pointed at `i.postimg.cc`, and two shop items
pointed at `i.imgur.com`. Those are temporary paste hosts. They expire, they
rate-limit, and they go dark without telling anyone — and when they do, a filed
battle record silently starts lying about having a plate.

The rule is simple: **if the archive shows it, the archive owns the file.**

What it checks
--------------
Every `image`, `icon`, `img`, `portrait`, `banner`, `cover`, `thumb` and
`src` value in the data stores and page scripts. Any value that is an absolute
http(s) URL on a known-ephemeral host is an ERROR. Any other absolute http(s)
URL is a WARNING — it is probably a reference-quality first-party image that
predates this rule, and it should be pulled local when the record is next
touched, but it does not fail the run.

Usage
-----
    python3 tools/check-external-art.py            # report
    python3 tools/check-external-art.py --strict   # warnings also fail
"""

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# Paste bins and temporary hosts. Art here is guaranteed to rot.
EPHEMERAL = (
    "postimg.cc", "postimages.org",
    "imgur.com", "i.imgur.com",
    "ibb.co", "imgbb.com",
    "catbox.moe", "litterbox.catbox.moe",
    "prnt.sc", "gyazo.com", "lightshot",
    "discordapp.net", "discordapp.com", "cdn.discord",
    "tinypic", "imgbox", "pasteboard.co",
    "snipboard.io", "0x0.st", "file.io",
)

# Keys whose values are rendered as images.
ART_KEYS = {
    "image", "images", "icon", "img", "portrait", "banner", "cover",
    "thumb", "thumbnail", "src", "plate", "leadImage", "tokenImg",
}

SCAN_GLOBS = [
    "Reputation-Matrix2/data/**/*.json",
    "Reputation-Matrix2/data/**/*.js",
    "Reputation-Matrix2/app/pages/**/*.js",
    "Reputation-Matrix2/shop-items/**/*.js",
    "Reputation-Matrix2/map-data/**/*.js",
    "index.html",
]

URL_IN_TEXT = re.compile(
    r'"(?:%s)"\s*:\s*"(https?://[^"]+)"' % "|".join(sorted(ART_KEYS)),
    re.IGNORECASE,
)


def is_ephemeral(url: str) -> bool:
    low = url.lower()
    return any(host in low for host in EPHEMERAL)


def walk_json(node, path, out):
    """Collect (jsonpath, url) for every art-keyed absolute URL."""
    if isinstance(node, dict):
        for key, val in node.items():
            here = f"{path}.{key}"
            if key in ART_KEYS and isinstance(val, str) and val.startswith(("http://", "https://")):
                out.append((here, val))
            else:
                walk_json(val, here, out)
    elif isinstance(node, list):
        for i, val in enumerate(node):
            walk_json(val, f"{path}[{i}]", out)


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--strict", action="store_true",
                    help="treat non-ephemeral external URLs as errors too")
    args = ap.parse_args()

    files = []
    for pattern in SCAN_GLOBS:
        files.extend(sorted(ROOT.glob(pattern)))

    errors, warnings = [], []

    for path in files:
        rel = path.relative_to(ROOT)
        try:
            text = path.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError):
            continue

        found = []
        if path.suffix == ".json":
            try:
                walk_json(json.loads(text), rel.name, found)
            except json.JSONDecodeError:
                # Not fatal here — check-references.py owns JSON validity.
                found = [("(regex)", m.group(1)) for m in URL_IN_TEXT.finditer(text)]
        else:
            found = [("(regex)", m.group(1)) for m in URL_IN_TEXT.finditer(text)]

        for where, url in found:
            entry = (str(rel), where, url)
            (errors if is_ephemeral(url) else warnings).append(entry)

    if errors:
        print(f"ERROR — {len(errors)} image(s) hosted on a temporary paste site:\n")
        for rel, where, url in errors:
            print(f"  {rel}")
            print(f"    at {where}")
            print(f"    {url}")
            print("    → download it, commit it under Reputation-Matrix2/assets/images/,")
            print("      and point the record at the local path.\n")
    else:
        print("OK — no art on temporary paste hosts.")

    if warnings:
        label = "ERROR" if args.strict else "note"
        print(f"\n{label} — {len(warnings)} image(s) hotlinked from an external site:")
        for rel, where, url in warnings:
            print(f"  {rel} · {where}\n    {url}")
        print("\n  These are not paste bins, so they are unlikely to vanish this week,")
        print("  but the archive still does not own them. Pull them local when the")
        print("  record is next edited.")

    if errors:
        return 1
    if warnings and args.strict:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
