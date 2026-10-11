#!/usr/bin/env python3
"""Pull one record (or a filing packet) out of the giant JSON stores.

The stores are too big to Read into an agent context:

    events.json        ~4.4 MB
    characters.json    ~1.5 MB
    locations.json     ~574 KB
    battles.json       ~622 KB
    investigations.json ~794 KB

A median event is ~33 KB. The four filing stores are sharded under
`data/stores/<kind>/<world>/` — Read one shard, or this tool. Bundles
(`events.json` etc.) are generated; do not hand-edit them.

Usage:
    python3 tools/filing-context.py sizes
    python3 tools/filing-context.py index events
    python3 tools/filing-context.py search events ettercap
    python3 tools/filing-context.py get events the_way_i_started_it
    python3 tools/filing-context.py packet the_way_i_started_it
    python3 tools/filing-context.py schema events
    python3 tools/filing-context.py stub characters waluigi
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
sys.path.insert(0, str(ROOT / "tools"))
import storelib as _stores  # noqa: E402

STORES: dict[str, Path] = {
    "events": DATA / "events.json",
    "characters": DATA / "characters.json",
    "locations": DATA / "locations.json",
    "battles": DATA / "battles.json",
    "majorBattles": DATA / "majorBattles.json",
    "props": DATA / "props.json",
    "investigations": DATA / "investigations.json",
    "trials": DATA / "trials.json",
}
SHARDED = {"events", "characters", "locations", "battles"}

# Fat files an agent must never Read whole. Includes stores plus Foundry dumps.
TOO_BIG = [
    ROOT / "midlands-all-actors.json",
    ROOT / "Players.json",
    DATA / "shop-effect-details.json",
    DATA / "shop-effect-details-slim.json",
    DATA / "abilityShop.json",
    DATA / "provinceCensus.json",
    DATA / "crafting.json",
    DATA / "events.json",
    DATA / "characters.json",
    DATA / "commentaries.json",
    DATA / "investigations.json",
    DATA / "battles.json",
    DATA / "locations.json",
    ROOT / "index.html",
]

CHAR_STUB_KEYS = (
    "id", "name", "title", "race", "status", "affiliation", "summary",
)
LOC_STUB_KEYS = (
    "id", "name", "type", "region", "controllingFaction", "status",
    "summary", "plane",
)


def load(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def load_rows(store: str) -> list[dict]:
    if store in SHARDED:
        return _stores.load_kind(store)
    return rows_of(load(STORES[store]), store)


def rows_of(doc: Any, store: str) -> list[dict]:
    if isinstance(doc, list):
        return [r for r in doc if isinstance(r, dict)]
    if not isinstance(doc, dict):
        return []
    for key in (store, store.removesuffix("s"), "items", "records", "props"):
        inner = doc.get(key)
        if isinstance(inner, list):
            return [r for r in inner if isinstance(r, dict)]
        if isinstance(inner, dict):
            out = []
            for k, v in inner.items():
                if str(k).startswith("_"):
                    continue
                if isinstance(v, dict):
                    out.append(v if v.get("id") else {**v, "id": k})
            return out
    out = []
    for k, v in doc.items():
        if str(k).startswith("_") or not isinstance(v, dict):
            continue
        out.append(v if v.get("id") else {**v, "id": k})
    return out


def find(rows: list[dict], rid: str) -> dict | None:
    rid_l = rid.lower()
    for r in rows:
        if str(r.get("id") or "").lower() == rid_l:
            return r
    return None


def dump(obj: Any) -> str:
    return json.dumps(obj, ensure_ascii=False, indent=2)


def stub(record: dict, keys: tuple[str, ...]) -> dict:
    return {k: record[k] for k in keys if k in record}


def participant_ids(event: dict) -> list[str]:
    ids: list[str] = []
    raw = event.get("participants") or []
    if isinstance(raw, list):
        for p in raw:
            if isinstance(p, str):
                ids.append(p)
            elif isinstance(p, dict) and p.get("id"):
                ids.append(str(p["id"]))
    return ids


def cmd_sizes(_args: argparse.Namespace) -> int:
    print(f"{'bytes':>10}  {'~tok':>7}  file")
    print(f"{'-'*10}  {'-'*7}  {'-'*40}")
    for path in TOO_BIG:
        if not path.exists():
            continue
        n = path.stat().st_size
        print(f"{n:10}  {n // 4:7}  {path.relative_to(ROOT)}")
    print()
    print()
    print("Shards (edit these): Reputation-Matrix2/data/stores/")
    if _stores.STORES_DIR.exists():
        n = 0
        for p in sorted(_stores.STORES_DIR.rglob("*.json")):
            if p.name == "manifest.json":
                continue
            n += 1
            rel = p.relative_to(_stores.STORES_DIR)
            print(f"{p.stat().st_size:10}  {p.stat().st_size // 4:7}  stores/{rel}")
        print(f"  ({n} shard files)")
    print()
    print("Do not Read the bundles whole. Use: python3 tools/filing-context.py get|packet|index")
    print("After editing a shard: python3 tools/build-json-stores.py --build --check")
    return 0


def cmd_index(args: argparse.Namespace) -> int:
    store = args.store
    rows = load_rows(store)
    src = "data/stores/" + store if store in SHARDED else STORES[store].relative_to(ROOT)
    print(f"# {store}  n={len(rows)}  source={src}")
    print("id\tdate\tsecs\timg\ttitle")
    for r in rows:
        title = (r.get("title") or r.get("name") or "").replace("\t", " ").replace("\n", " ")
        date = str(r.get("date") or r.get("timeCode") or "")
        secs = r.get("sections")
        nsec = len(secs) if isinstance(secs, list) else 0
        img = "Y" if r.get("image") else "."
        print(f"{r.get('id','?')}\t{date}\t{nsec}\t{img}\t{title}")
    return 0


def cmd_search(args: argparse.Namespace) -> int:
    q = args.query.lower()
    rows = load_rows(args.store)
    hits = 0
    for r in rows:
        blob = " ".join(
            str(r.get(k) or "")
            for k in ("id", "name", "title", "summary", "date", "location")
        ).lower()
        if q not in blob:
            continue
        hits += 1
        title = (r.get("title") or r.get("name") or "").replace("\n", " ")
        print(f"{r.get('id')}\t{r.get('date') or ''}\t{title}")
    if hits == 0:
        print(f"(no {args.store} hit for {args.query!r})", file=sys.stderr)
        return 1
    return 0


def cmd_get(args: argparse.Namespace) -> int:
    rec = (_stores.find_record(args.store, args.id)
           if args.store in SHARDED else find(load_rows(args.store), args.id))
    if rec is None:
        print(f"{args.store}: no id {args.id!r}  (try: filing-context.py search {args.store} {args.id})",
              file=sys.stderr)
        return 1
    print(dump(rec))
    return 0


def cmd_stub(args: argparse.Namespace) -> int:
    rec = (_stores.find_record(args.store, args.id)
           if args.store in SHARDED else find(load_rows(args.store), args.id))
    if rec is None:
        print(f"{args.store}: no id {args.id!r}", file=sys.stderr)
        return 1
    keys = CHAR_STUB_KEYS if args.store == "characters" else LOC_STUB_KEYS
    if args.store not in ("characters", "locations"):
        keys = tuple(list(rec.keys())[:12])
    print(dump(stub(rec, keys)))
    return 0


def cmd_packet(args: argparse.Namespace) -> int:
    event = _stores.find_record("events", args.id)
    if event is None:
        print(f"events: no id {args.id!r}", file=sys.stderr)
        return 1

    loc_id = event.get("location")
    if isinstance(loc_id, dict):
        loc_id = loc_id.get("id")
    loc_stub = None
    if isinstance(loc_id, str) and loc_id:
        locs = load_rows("locations")
        # location field on events is often prose, not an id — try exact, then search
        loc = find(locs, loc_id)
        if loc is None:
            q = loc_id.lower()
            for r in locs:
                name = str(r.get("name") or "").lower()
                rid = str(r.get("id") or "").lower()
                if q == name or q == rid or q in name or name and name in q:
                    loc = r
                    break
        if loc is not None:
            loc_stub = stub(loc, LOC_STUB_KEYS)

    char_rows = load_rows("characters")
    people = []
    missing = []
    for pid in participant_ids(event):
        ch = find(char_rows, pid)
        if ch is None:
            missing.append(pid)
        else:
            people.append(stub(ch, CHAR_STUB_KEYS))

    packet = {
        "_warning": (
            "This is the filing packet. Do not Read events.json / "
            "characters.json / locations.json whole. Splice one object; "
            "match the file's indentation."
        ),
        "event": event,
        "location": loc_stub,
        "location_field_raw": event.get("location"),
        "participants": people,
        "participants_missing_from_characters": missing,
        "relatedArticles": event.get("relatedArticles") or [],
    }
    print(dump(packet))
    return 0


def cmd_schema(args: argparse.Namespace) -> int:
    rows = load_rows(args.store)
    if not rows:
        print(f"{args.store}: empty", file=sys.stderr)
        return 1
    sample = rows[-1]
    keys: list[str] = []
    seen: set[str] = set()
    for r in rows[-5:]:
        for k in r.keys():
            if k not in seen:
                seen.add(k)
                keys.append(k)
    skeleton = {k: [] if isinstance(sample.get(k), list) else {}
                if isinstance(sample.get(k), dict) else ""
                for k in keys}
    print(dump({
        "store": args.store,
        "n": len(rows),
        "last_id": sample.get("id"),
        "key_order_from_recent": keys,
        "empty_skeleton": skeleton,
        "note": "Copy key order from a neighbour. Match indent. Do not re-serialise the store.",
    }))
    return 0


def main() -> int:
    ap = argparse.ArgumentParser(
        description="Extract one record from the giant JSON stores so agents do not Read them whole.")
    sub = ap.add_subparsers(dest="cmd", required=True)

    sub.add_parser("sizes", help="byte sizes of files you must not Read whole")

    p_index = sub.add_parser("index", help="one-line catalog (id, date, title)")
    p_index.add_argument("store", choices=sorted(STORES))

    p_search = sub.add_parser("search", help="substring search over id/title/summary")
    p_search.add_argument("store", choices=sorted(STORES))
    p_search.add_argument("query")

    p_get = sub.add_parser("get", help="print one full record as JSON")
    p_get.add_argument("store", choices=sorted(STORES))
    p_get.add_argument("id")

    p_stub = sub.add_parser("stub", help="print a short stub (id/name/status/summary)")
    p_stub.add_argument("store", choices=sorted(STORES))
    p_stub.add_argument("id")

    p_packet = sub.add_parser("packet", help="event + location stub + participant stubs")
    p_packet.add_argument("id")

    p_schema = sub.add_parser("schema", help="key order + empty skeleton from recent records")
    p_schema.add_argument("store", choices=sorted(STORES))

    args = ap.parse_args()
    dispatch = {
        "sizes": cmd_sizes,
        "index": cmd_index,
        "search": cmd_search,
        "get": cmd_get,
        "stub": cmd_stub,
        "packet": cmd_packet,
        "schema": cmd_schema,
    }
    return dispatch[args.cmd](args)


if __name__ == "__main__":
    sys.exit(main())
