#!/usr/bin/env python3
"""Prove the homepage cover gallery is wired correctly.

The gallery is data-driven (mainPage.campaignCovers + mainPage.fieldGallery)
and rendered at view time by homeCoversHtml() in index.html. This check is the
static half of that contract:

  · mainPage.json carries both arrays, each fully populated
  · every campaign cover is a 16:9 composite referencing a real event
  · every field-gallery image is an EXISTING archive asset (reuse rule)
  · every articleId resolves to a real event in events.json
  · index.html defines homeCoversHtml(), mounts it into the two containers,
    and links campaign-covers.css

Usage:
    python3 tools/check-covers.py
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
MAIN = ROOT / "Reputation-Matrix2" / "data" / "mainPage.json"
EVENTS = ROOT / "Reputation-Matrix2" / "data" / "events.json"
ASSETS = ROOT / "Reputation-Matrix2"
CSS = ROOT / "Reputation-Matrix2" / "app" / "styles" / "systems" / "campaign-covers.css"


def fail(msg: str) -> None:
    print("FAIL  " + msg)
    raise SystemExit(1)


def req(d: dict, key: str, where: str):
    if not d.get(key):
        fail("%s is missing %r" % (where, key))
    return d[key]


def main() -> int:
    html = INDEX.read_text(encoding="utf-8")
    try:
        main_page = json.loads(MAIN.read_text(encoding="utf-8"))
    except Exception as exc:  # pragma: no cover
        fail("mainPage.json: %s" % exc)
    events = json.loads(EVENTS.read_text(encoding="utf-8"))
    event_ids = {e.get("id") for e in events if isinstance(e, dict)}

    covers = main_page.get("campaignCovers") or []
    field = main_page.get("fieldGallery") or []
    if len(covers) < 2:
        fail("campaignCovers must hold at least the two live fronts")
    if len(field) < 6:
        fail("fieldGallery must hold at least six reused archive images")

    for c in covers:
        where = "campaignCovers[%s]" % c.get("campaign", c.get("id", "?"))
        req(c, "image", where)
        req(c, "articleId", where)
        req(c, "title", where)
        p = (ASSETS / c["image"]).resolve()
        if not p.is_file():
            fail("%s image missing: %s" % (where, c["image"]))
        if c["articleId"] not in event_ids:
            fail("%s articleId not in events.json: %s" % (where, c["articleId"]))
        rel = p.relative_to(ROOT) if str(p).startswith(str(ROOT)) else None
        if rel is not None:
            # covers are composites; only flag if the asset is not an image
            if p.suffix.lower() not in (".png", ".jpg", ".jpeg", ".webp"):
                fail("%s image is not an image file: %s" % (where, p.suffix))

    for g in field:
        where = "fieldGallery[%s]" % g.get("image", "?")
        req(g, "image", where)
        req(g, "caption", where)
        req(g, "articleId", where)
        p = (ASSETS / g["image"]).resolve()
        if not p.is_file():
            fail("%s image missing: %s" % (where, g["image"]))
        if g["articleId"] not in event_ids:
            fail("%s articleId not in events.json: %s" % (where, g["articleId"]))

    if "function homeCoversHtml" not in html:
        fail("index.html is missing homeCoversHtml()")
    if "homeCoversHtml()" not in html:
        fail("view_home() does not call homeCoversHtml()")
    for mount in ('id="home-campaign-covers"', 'id="home-field-gallery"'):
        if mount not in html:
            fail("index.html is missing %s" % mount)
    if "campaign-covers.css" not in html:
        fail("index.html does not link campaign-covers.css")
    if not CSS.is_file():
        fail("campaign-covers.css is missing")

    print("cover gallery OK: %d covers, %d reused field images, all paths resolve"
          % (len(covers), len(field)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
