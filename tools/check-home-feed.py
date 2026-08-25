#!/usr/bin/env python3
"""Prove the home Recent Adventures feed will show the newest filing.

The feed is built at render time from events.json (homeRecentAdventuresHtml
in index.html). This check is the static half of that contract:

  · index.html must call homeRecentAdventuresHtml(), not a pasted card list
  · mainPage.latestUpdate.id must be a real event
  · SITE_UPDATES[0].id should match that headline

Usage:
    python3 tools/check-home-feed.py
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
EVENTS = ROOT / "Reputation-Matrix2" / "data" / "events.json"
MAIN = ROOT / "Reputation-Matrix2" / "data" / "mainPage.json"


def fail(msg: str) -> None:
    print("FAIL  " + msg)
    raise SystemExit(1)


def main() -> int:
    html = INDEX.read_text(encoding="utf-8")
    events = json.loads(EVENTS.read_text(encoding="utf-8"))
    main_page = json.loads(MAIN.read_text(encoding="utf-8"))

    if "function homeRecentAdventuresHtml" not in html:
        fail("index.html is missing homeRecentAdventuresHtml()")
    if "${homeRecentAdventuresHtml()}" not in html:
        fail("view_home() does not interpolate homeRecentAdventuresHtml()")

    feed_start = html.find('<div class="campaign-timeline-feed">')
    feed_end = html.find("<!-- 5. OPERATOR TOOLKIT", feed_start)
    if feed_start < 0 or feed_end < 0:
        fail("could not find the Recent Adventures feed anchors")
    feed = html[feed_start:feed_end]
    if "charred_note_at_waluigis_door" in feed and "homeRecentAdventuresHtml()" not in feed:
        fail("feed still looks like a hand-spliced static card list")

    ids = {e.get("id") for e in events if isinstance(e, dict)}
    latest = (main_page.get("latestUpdate") or {}).get("id")
    if not latest:
        fail("mainPage.json latestUpdate.id is empty")
    if latest not in ids:
        fail(f"mainPage.latestUpdate.id {latest!r} is not in events.json")

    last = events[-1].get("id") if events else None
    m = re.search(r"let SITE_UPDATES=\[\{[^\]]*\"id\":\"([^\"]+)\"", html)
    site_first = m.group(1) if m else None
    if site_first and site_first != latest:
        print(f"WARN  SITE_UPDATES[0]={site_first!r} but latestUpdate={latest!r}")

    print(f"OK    dynamic feed wired · latestUpdate={latest} · last-appended={last} · events={len(events)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
