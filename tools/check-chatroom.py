#!/usr/bin/env python3
"""Static contract check for the reader-local Waluipedia Chatrooms page."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HTML = ROOT / "chatroom.html"
JS = ROOT / "Reputation-Matrix2/app/pages/chatroom/chatroom.js"
CSS = ROOT / "Reputation-Matrix2/app/pages/chatroom/chatroom.css"
BATTLES = ROOT / "Reputation-Matrix2/data/battles.json"


def need(condition: bool, label: str, problems: list[str]) -> None:
    if not condition:
        problems.append(label)


def main() -> int:
    problems: list[str] = []
    for path in (HTML, JS, CSS, BATTLES):
        need(path.is_file(), f"missing {path.relative_to(ROOT)}", problems)
    if problems:
        print("FAIL chatrooms")
        print("\n".join(f"  - {problem}" for problem in problems))
        return 1

    html = HTML.read_text(encoding="utf-8")
    script = JS.read_text(encoding="utf-8")
    css = CSS.read_text(encoding="utf-8")
    for marker in ("room-dialog", "replay-dialog", "memory-dialog", "import-input",
                   "chatroom.css", "chatroom.js", "message-list", "replay-stage"):
        need(marker in html, f"chatroom shell lacks {marker}", problems)
    for marker in ("waluipedia-chatrooms-v1", "waluipedia-chatrooms-export",
                   "localStorage", "fetchJson", "replayBeats", "relevantMemories",
                   "feyward_woodfellow_vs_the_treant"):
        need(marker in script, f"chatroom script lacks {marker}", problems)
    for marker in (".chat-app", ".chat-sidebar", ".replay-stage", "@media (max-width: 760px)"):
        need(marker in css, f"chatroom stylesheet lacks {marker}", problems)
    need("http://" not in script and "https://" not in script,
         "chatroom script must not depend on an external account or API service", problems)

    rows = json.loads(BATTLES.read_text(encoding="utf-8"))
    battle = next((row for row in rows if row.get("id") == "feyward_woodfellow_vs_the_treant"), None)
    need(battle is not None, "default cutting-lane replay battle is not filed", problems)
    if battle:
        names = []
        for side in ("attackers", "defenders"):
            names += [entry.get("name", "") for entry in battle.get("belligerents", {}).get(side, {}).get("combatants", [])]
        for name in ("Woodfellow", "Pib", "the Treant"):
            need(name in names, f"cutting-lane replay cannot resolve {name}", problems)
        need(bool(battle.get("keyMoments")), "cutting-lane replay has no filed beats", problems)

    if problems:
        print("FAIL chatrooms")
        print("\n".join(f"  - {problem}" for problem in problems))
        return 1
    print("PASS chatrooms — shell, local-state contract, source binding, and cutting-lane replay")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
