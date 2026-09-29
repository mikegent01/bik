#!/usr/bin/env python3
"""Build the two chatroom pages from one set of sources.

Sources (hand-written):
    assets/chatroom/chatroom.shell.html   markup
    assets/chatroom/chatroom.css          skin
    assets/chatroom/chatroom-core.js      pure logic  → window.RP
    assets/chatroom/chatroom-app.js       page wiring

Outputs (generated — never hand-edit):
    chatroom.html            static build, served from the repository root by
                             start.py; reads the archive JSON directly and
                             talks to a configurable model endpoint
    workflow/roleplay.html   server build, served by workflow/server.py at
                             /roleplay; everything inlined, the API routes and
                             /rm/ portraits in use, {{MAIN_SITE}} left for the
                             server to substitute per request

Usage:
    python3 tools/build-chatroom.py            # write both pages
    python3 tools/build-chatroom.py --check    # fail if the pages are stale
"""
from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "assets" / "chatroom"

BANNER = (
    "<!-- GENERATED FILE — do not edit.\n"
    "     Source: assets/chatroom/{shell, .css, -core.js, -app.js}\n"
    "     Rebuild: python3 tools/build-chatroom.py  (verify: --check) -->\n"
)

# The static build is opened from the repository root, so every archive path is
# relative and the model endpoint has to be spelled out in full.
STATIC_CONFIG = """<script>
/* Static build: served from the repository root (python3 start.py). The cast
   and the scenes are read straight out of the archive JSON; the model is
   reached at the workflow server, or at whatever endpoint ⚙ is set to. */
window.CHATROOM_CONFIG = {
  mode: 'static',
  castUrl: 'Reputation-Matrix2/data/characters.json',
  scenesUrl: 'Reputation-Matrix2/data/events.json',
  wireUrl: 'Reputation-Matrix2/data/wahwire/posts.json',
  wireProfilesUrl: 'Reputation-Matrix2/data/wahwire/profiles.json',
  collectionsUrl: 'Reputation-Matrix2/data/collections.json',
  replyUrl: 'http://127.0.0.1:8787/api/roleplay',
  suggestUrl: 'http://127.0.0.1:8787/api/suggest-cast',
  healthUrl: 'http://127.0.0.1:8787/api/health',
  staticRoot: 'Reputation-Matrix2/',
};
</script>"""

SERVER_CONFIG = """<script>
/* Server build: workflow/server.py serves this page and every route it uses. */
window.CHATROOM_CONFIG = {
  mode: 'server',
  castUrl: '/api/characters',
  scenesUrl: '/api/scenes',
  wireUrl: '/api/wahwire',
  wireProfilesUrl: '',
  collectionsUrl: '/api/collections',
  replyUrl: '/api/roleplay',
  suggestUrl: '/api/suggest-cast',
  healthUrl: '/api/health',
  staticRoot: '',
};
</script>"""


def read(name: str) -> str:
    return (SRC / name).read_text(encoding="utf-8")


def build_static() -> str:
    shell = read("chatroom.shell.html")
    head = '<link rel="stylesheet" href="assets/chatroom/chatroom.css">'
    scripts = (
        '<script id="rp-logic" src="assets/chatroom/chatroom-core.js"></script>\n'
        '<script id="rp-app" src="assets/chatroom/chatroom-app.js"></script>'
    )
    page = (shell
            .replace("{{HEAD}}", head)
            .replace("{{CONFIG}}", STATIC_CONFIG)
            .replace("{{SCRIPTS}}", scripts)
            .replace("{{MAIN_SITE}}", "index.html"))
    return page.replace("<!doctype html>\n", "<!doctype html>\n" + BANNER, 1)


def build_server() -> str:
    shell = read("chatroom.shell.html")
    head = "<style>\n" + read("chatroom.css") + "</style>"
    scripts = (
        '<script id="rp-logic">\n' + read("chatroom-core.js") + "</script>\n"
        '<script id="rp-app">\n' + read("chatroom-app.js") + "</script>"
    )
    page = (shell
            .replace("{{HEAD}}", head)
            .replace("{{CONFIG}}", SERVER_CONFIG)
            .replace("{{SCRIPTS}}", scripts))
    # {{MAIN_SITE}} stays: workflow/server.py fills it in per request.
    return page.replace("<!doctype html>\n", "<!doctype html>\n" + BANNER, 1)


TARGETS = {
    ROOT / "chatroom.html": build_static,
    ROOT / "workflow" / "roleplay.html": build_server,
}


def main(argv: list[str]) -> int:
    check = "--check" in argv
    stale: list[str] = []
    for path, builder in TARGETS.items():
        want = builder()
        have = path.read_text(encoding="utf-8") if path.exists() else ""
        rel = path.relative_to(ROOT)
        if want == have:
            print(f"ok       {rel}")
            continue
        if check:
            stale.append(str(rel))
            print(f"STALE    {rel}")
            continue
        path.write_text(want, encoding="utf-8")
        print(f"written  {rel}  ({len(want):,} bytes)")
    if stale:
        print("\nThese pages do not match their sources. Run: python3 tools/build-chatroom.py")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
