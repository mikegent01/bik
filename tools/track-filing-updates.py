#!/usr/bin/env python3
"""Track which filings changed, so players can see cross-filing edits.

When a session is filed it rarely touches only its own record. Older filings
get corrected, foreshadowing gets planted, a name gets fixed, an outcome gets
walked back. Until now none of that was visible: the archive silently became
a different archive and a reader who had already read a page had no way to
know it had been rewritten under them.

Git cannot answer this on its own. The generators reserialise `events.json`
wholesale, so a one-line correction and a pure reformat produce diffs of the
same shape, and "which events changed" is not recoverable from the patch.

So fingerprint the records instead. For each event we hash the fields a reader
actually sees, and keep the hashes in a ledger next to the data. A changed
hash means the prose changed; an unchanged hash means the file moved but the
record did not. The ledger records, per event:

    firstSeen   the filing pass that introduced the record
    lastChanged the filing pass that last altered its readable content
    revision    how many times the content has changed since it appeared

`--write` after a filing stamps the ledger and is what the Updated badge and
the recent-revisions feed both read. Passes are numbered rather than dated:
the archive's own in-world dates are unreliable for this (a filing can be
back-dated), and pass numbers are monotonic and honest about ordering.

Usage:
    python3 tools/track-filing-updates.py            # report drift
    python3 tools/track-filing-updates.py --write    # stamp the ledger
    python3 tools/track-filing-updates.py --check    # CI: ledger is current
"""
import argparse
import hashlib
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
LEDGER = DATA / "filing-updates.json"

# The fields a reader actually reads. Deliberately excludes bookkeeping like
# `image` paths being re-pointed or tag reordering, so the badge means "the
# text changed", not "a build touched this".
TRACKED = ("title", "name", "summary", "description", "body", "sections",
           "outcome", "status", "era", "location", "date", "timeCode",
           "revisions", "imageCaption")


def load(path):
    with path.open(encoding="utf-8") as fh:
        return json.load(fh)


def events():
    doc = load(DATA / "events.json")
    return doc["events"] if isinstance(doc, dict) else doc


def fingerprint(ev):
    payload = {k: ev.get(k) for k in TRACKED if ev.get(k) is not None}
    blob = json.dumps(payload, ensure_ascii=False, sort_keys=True)
    return hashlib.sha256(blob.encode("utf-8")).hexdigest()[:16]


def field_prints(ev):
    """Per-field hashes, so the ledger can say WHICH parts were rewritten.

    The whole-record hash answers "did this change". A reader who has already
    read the filing needs the next question answered too -- "what do I need to
    re-read" -- and re-reading 6,000 words to find one amended paragraph is
    exactly the thing the Updated badge was supposed to save them from.

    Field-level is as fine as this can honestly go: the ledger stores hashes,
    not prior text, so a sentence-level diff is not recoverable. Storing the
    old prose would mean a generated file that carries a second copy of the
    archive, which is a much larger and worse change.
    """
    out = {}
    for k in TRACKED:
        v = ev.get(k)
        if v is None:
            continue
        blob = json.dumps(v, ensure_ascii=False, sort_keys=True)
        out[k] = hashlib.sha256(blob.encode("utf-8")).hexdigest()[:8]
    return out


def changed_fields(prev_fields, now_fields):
    """Which tracked fields differ between two field-print maps."""
    if not isinstance(prev_fields, dict):
        return []
    names = set(prev_fields) | set(now_fields)
    return sorted(n for n in names if prev_fields.get(n) != now_fields.get(n))


def read_ledger():
    if not LEDGER.exists():
        return {"pass": 0, "entries": {}}
    return load(LEDGER)


def diff(ledger, evs):
    """-> (added, changed) ids against the stored fingerprints."""
    entries = ledger.get("entries") or {}
    added, changed = [], []
    for ev in evs:
        eid = ev.get("id")
        if not eid:
            continue
        fp = fingerprint(ev)
        prev = entries.get(eid)
        if prev is None:
            added.append(eid)
        elif prev.get("hash") != fp:
            changed.append(eid)
    return added, changed


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--write", action="store_true")
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()

    evs = events()
    ledger = read_ledger()
    added, changed = diff(ledger, evs)

    if args.check:
        if added or changed:
            print("filing updates: ledger is behind the data.")
            for i in added:
                print(f"  new      {i}")
            for i in changed:
                print(f"  changed  {i}")
            print("  run: python3 tools/track-filing-updates.py --write")
            return 1
        n = len(ledger.get("entries") or {})
        print(f"filing updates: ledger current, {n} filings tracked "
              f"(pass {ledger.get('pass', 0)}).")
        return 0

    if not (added or changed):
        print("filing updates: nothing changed since the last pass.")
        return 0

    print(f"{len(added)} new, {len(changed)} edited since pass "
          f"{ledger.get('pass', 0)}:")
    for i in added:
        print(f"  new      {i}")
    for i in changed:
        print(f"  changed  {i}")

    if not args.write:
        print("\nRe-run with --write to stamp the ledger.")
        return 0

    nxt = int(ledger.get("pass", 0)) + 1
    entries = dict(ledger.get("entries") or {})
    for ev in evs:
        eid = ev.get("id")
        if not eid:
            continue
        fp = fingerprint(ev)
        fields = field_prints(ev)
        prev = entries.get(eid)
        if prev is None:
            entries[eid] = {"hash": fp, "firstSeen": nxt,
                            "lastChanged": nxt, "revision": 1,
                            "fields": fields}
        elif prev["hash"] != fp:
            entries[eid] = {"hash": fp,
                            "firstSeen": prev.get("firstSeen", nxt),
                            "lastChanged": nxt,
                            "revision": int(prev.get("revision", 1)) + 1,
                            "fields": fields,
                            # What a returning reader actually needs: the names
                            # of the parts that moved in this pass.
                            "changedFields": changed_fields(
                                prev.get("fields"), fields)}
        else:
            # Unchanged, but backfill field prints for records stamped before
            # this tool tracked them, so the NEXT edit can report field names.
            if not prev.get("fields"):
                prev = dict(prev)
                prev["fields"] = fields
                entries[eid] = prev

    # Pass 1 is a baseline: every existing record enters the ledger at once.
    # That is not "120 filings were just updated", so it is flagged and the
    # renderer suppresses badges for it. Real signal starts at pass 2.
    out = {
        "_comment": ("Generated by tools/track-filing-updates.py. Do not hand-edit. "
                     "Records which filings changed in each pass so the archive can "
                     "show an Updated badge and a recent-revisions feed."),
        "pass": nxt,
        "baselinePass": 1,
        "currentPass": {"pass": nxt, "baseline": nxt == 1,
                        "added": added, "changed": changed},
        "entries": dict(sorted(entries.items())),
    }
    LEDGER.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n",
                      encoding="utf-8")
    print(f"\nwrote pass {nxt} to {LEDGER.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
