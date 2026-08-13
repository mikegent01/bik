#!/usr/bin/env python3
"""Exhibit audit — run before calling a filing finished.

Checks the whole prop layer end to end:

  1. props.json parses and every prop has the required fields.
  2. Every `kind` is one the CSS actually styles; every stamp exists.
  3. Every class used in a prop `body` is defined in exhibits.css
     (catches invented class names, which render as unstyled text).
  4. Every `items[]` key resolves in INVENTORY_SYSTEM, and every
     `articles[]` id resolves in the data files.
  5. Every prop is reachable — it links to at least one item or article.
  6. Every [[prop:id]] marker in prose resolves to a real prop.
  7. Every "## Addendum:" heading in an event has an addendum prop
     wired to that event (advisory — reported, not fatal).

Usage:  python3 tools/check-exhibits.py
Exit 0 = clean, 1 = at least one error.
"""

import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "Reputation-Matrix2", "data")
CSS = os.path.join(ROOT, "Reputation-Matrix2", "app", "styles", "systems", "exhibits.css")
INDEX = os.path.join(ROOT, "index.html")

REQUIRED = ("kind", "title", "body")
errors, warnings = [], []


def err(msg):
    errors.append(msg)


def warn(msg):
    warnings.append(msg)


# ---------------------------------------------------------------- load
try:
    props_doc = json.load(open(os.path.join(DATA, "props.json"), encoding="utf-8"))
except Exception as exc:  # noqa: BLE001
    print("FATAL: props.json does not parse — %s" % exc)
    sys.exit(1)

props = props_doc.get("props", {})
css = open(CSS, encoding="utf-8").read()
index_html = open(INDEX, encoding="utf-8").read()

# kinds and stamps the stylesheet actually implements
css_kinds = set(re.findall(r"\.pd--([a-z]+)", css)) - {"torn"}
css_stamps = set(re.findall(r"\.pd-stamp--([a-z]+)", css))
css_classes = set(re.findall(r"\.(pd[a-z-]*)", css))

# every id the site can route to
article_ids = set()
for name in os.listdir(DATA):
    if not name.endswith(".json"):
        continue
    try:
        doc = json.load(open(os.path.join(DATA, name), encoding="utf-8"))
    except Exception:  # noqa: BLE001
        continue
    if isinstance(doc, list):
        article_ids.update(r["id"] for r in doc if isinstance(r, dict) and "id" in r)

# item keys live in the INVENTORY_SYSTEM literal inside index.html
inv_match = re.search(r"const INVENTORY_SYSTEM=(\{.*?\});\n", index_html, re.S)
item_keys = set()
if inv_match:
    try:
        item_keys = set(json.loads(inv_match.group(1)).get("items", {}))
    except Exception as exc:  # noqa: BLE001
        warn("could not parse INVENTORY_SYSTEM (%s) — item keys unchecked" % exc)
else:
    warn("INVENTORY_SYSTEM not found in index.html — item keys unchecked")

# ---------------------------------------------------------------- props
for pid, p in props.items():
    where = "prop %s" % pid
    for field in REQUIRED:
        if not p.get(field):
            err("%s: missing required field `%s`" % (where, field))

    kind = p.get("kind")
    if kind and kind not in css_kinds:
        err("%s: kind `%s` has no .pd--%s rule in exhibits.css "
            "(styled kinds: %s)" % (where, kind, kind, ", ".join(sorted(css_kinds))))

    for stamp in p.get("stamps", []):
        if stamp not in css_stamps:
            err("%s: stamp `%s` has no .pd-stamp--%s rule "
                "(available: %s)" % (where, stamp, stamp, ", ".join(sorted(css_stamps))))

    body = p.get("body", "")
    for cls in re.findall(r'class="([^"]+)"', body):
        for one in cls.split():
            if one.startswith("pd") and one not in css_classes:
                err("%s: body uses undefined class `%s`" % (where, one))
    if "style=" in body:
        err("%s: body uses an inline style — use the .pd-* vocabulary" % where)

    for key in p.get("items", []):
        if item_keys and key not in item_keys:
            err("%s: items[] key `%s` is not in INVENTORY_SYSTEM" % (where, key))
    for aid in p.get("articles", []):
        if aid not in article_ids:
            err("%s: articles[] id `%s` resolves to nothing" % (where, aid))

    if not p.get("items") and not p.get("articles"):
        err("%s: linked to nothing — it can never be opened" % where)

# ---------------------------------------------------------- prose markers
marker_re = re.compile(r"\[\[prop:([a-zA-Z0-9_-]+)")
linked_by_event = {}
for name in os.listdir(DATA):
    if not name.endswith(".json"):
        continue
    raw = open(os.path.join(DATA, name), encoding="utf-8").read()
    for pid in set(marker_re.findall(raw)):
        if pid not in props:
            err("%s: [[prop:%s]] marker points at a prop that does not exist"
                % (name, pid))

# ------------------------------------------------- addendum coverage
events = json.load(open(os.path.join(DATA, "events.json"), encoding="utf-8"))
addendum_props = {pid: p for pid, p in props.items() if p.get("kind") == "addendum"}
for ev in events:
    prose = " ".join(str(ev.get(f, "")) for f in ("description", "waluigiAssessment", "aftermath"))
    for sec in ev.get("sections", []) or []:
        prose += " " + str(sec.get("overview", ""))
    if not re.search(r"##+\s*Addendum", prose, re.I):
        continue
    covered = any(ev["id"] in p.get("articles", []) for p in addendum_props.values())
    if not covered:
        warn("event `%s` has an ## Addendum: heading but no addendum prop "
             "(see README step 7)" % ev["id"])

# ---------------------------------------------------------------- report
print("props: %d   styled kinds: %d   articles known: %d   item keys: %d"
      % (len(props), len(css_kinds), len(article_ids), len(item_keys)))
by_kind = {}
for p in props.values():
    by_kind[p.get("kind")] = by_kind.get(p.get("kind"), 0) + 1
print("by kind: " + ", ".join("%s=%d" % kv for kv in sorted(by_kind.items())))

for w in warnings:
    print("WARN  " + w)
for e in errors:
    print("FAIL  " + e)

print("\n%d error(s), %d warning(s)" % (len(errors), len(warnings)))
sys.exit(1 if errors else 0)
