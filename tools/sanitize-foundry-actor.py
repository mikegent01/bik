#!/usr/bin/env python3
"""Foundry VTT actor-export sanitizer — deterministic, offline, no AI.

Takes a Foundry `fvtt-Actor-*.json` export and repairs the structural faults
that make Plutonium imports fail and the browser console fill with 404s.

It exists because of three real, reproducible failures:

  1. "Only a single Species can be added to a Player Character."
     The actor already carries a `race` item, so importing another one is
     rejected. Same rule for `background`, and `subclass` without its `class`.

  2. "Number of returned items did not match number of input items!"
     Thrown by UtilDocuments.pCreateEmbeddedDocuments. An advancement's
     `value.added` map names item ids that are not in `items[]`, so Foundry
     is asked to create N documents and hands back fewer. Same class of
     fault: duplicate `_id`s (the second silently loses), malformed ids,
     effect `origin` pointing at another actor, and items filed into a
     container id that does not exist.

  3. 404s on `img` / `src` paths.
     Every reference is checked against a manifest of real asset paths.
     Unresolvable ones are rewritten to a safe core icon.

DESIGN RULES
  · Deterministic. Same input always produces the same output. No network,
    no model, no randomness — new ids are derived from a hash of the content.
  · Read-only by default. `--write` is required to change anything, and
    `--in-place` keeps a `.bak` unless told otherwise.
  · Never invents game content. It removes, re-points, or de-duplicates
    what is already there; it does not write stats, features, or prose.
  · Every change is reported as one line: rule, item, before -> after.

USAGE
  python3 tools/sanitize-foundry-actor.py ACTOR.json                # report only
  python3 tools/sanitize-foundry-actor.py ACTOR.json --write OUT.json
  python3 tools/sanitize-foundry-actor.py ACTOR.json --in-place
  python3 tools/sanitize-foundry-actor.py "dir/*.json" --check      # CI mode
  python3 tools/sanitize-foundry-actor.py A.json --keep-species last
  python3 tools/sanitize-foundry-actor.py A.json --manifest paths.txt

EXIT CODES
  0 = clean (or repaired successfully with --write)
  1 = problems found and not written (--check, or no --write given)
  2 = the file could not be read or is not a Foundry actor
"""

import argparse
import copy
import difflib
import glob
import hashlib
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# The manifest that ships with the repo: ~16k real Foundry asset paths.
DEFAULT_MANIFEST = os.path.join(
    ROOT, "Reputation-Matrix2", "tools", "item sheet examples", "image paths.txt"
)

# Foundry document ids are exactly 16 chars of [A-Za-z0-9].
ID_RE = re.compile(r"^[A-Za-z0-9]{16}$")
ID_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

# Only one of each of these may exist on a character.
SINGLETON_TYPES = ("race", "background")

# Fallback icons, by item type. All are core Foundry paths.
FALLBACK_ICONS = {
    "weapon": "icons/svg/sword.svg",
    "equipment": "icons/svg/shield.svg",
    "consumable": "icons/svg/item-bag.svg",
    "tool": "icons/svg/hammer.svg",
    "loot": "icons/svg/item-bag.svg",
    "container": "icons/svg/chest.svg",
    "spell": "icons/svg/book.svg",
    "feat": "icons/svg/aura.svg",
    "class": "icons/svg/upgrade.svg",
    "subclass": "icons/svg/upgrade.svg",
    "race": "icons/svg/mystery-man.svg",
    "background": "icons/svg/book.svg",
}
GENERIC_ICON = "icons/svg/item-bag.svg"
ACTOR_ICON = "icons/svg/mystery-man.svg"


class Report:
    """Collects findings. `fatal` means the import would fail."""

    def __init__(self):
        self.rows = []

    def add(self, rule, fatal, item, detail):
        self.rows.append(
            {"rule": rule, "fatal": bool(fatal), "item": item, "detail": detail}
        )

    @property
    def fatal_count(self):
        return sum(1 for r in self.rows if r["fatal"])

    def __len__(self):
        return len(self.rows)


# --------------------------------------------------------------------------
# manifest


def load_manifest(path):
    """Read the asset manifest into a set of forward-slashed paths.

    Returns an empty set if the manifest is missing — image checking is then
    skipped rather than guessed at, and the caller is told.
    """
    if not path or not os.path.isfile(path):
        return set()
    out = set()
    with open(path, encoding="utf-8", errors="replace") as fh:
        for line in fh:
            p = line.strip().replace("\\", "/").lstrip("/")
            if p:
                out.add(p)
    return out


def nearest_asset(ref, manifest, cache={}):
    """Deterministic nearest real asset path, or None.

    Foundry renames assets between versions, so most broken references are
    one typo away from a real file (`intimidation-impersonate` ->
    `intimidation-impressing`). Preferring a same-directory near-match keeps
    the art the sheet intended instead of flattening it to a generic icon.
    difflib is deterministic, so the same input always picks the same file.
    """
    key = ref
    if key in cache:
        return cache[key]
    p = ref.replace("\\", "/").lstrip("/").split("?")[0]
    base = p.rsplit("/", 1)[-1]
    folder = p.rsplit("/", 1)[0] if "/" in p else ""
    result = None
    if folder:
        siblings = [m for m in manifest if m.rsplit("/", 1)[0] == folder]
        hits = difflib.get_close_matches(base, [s.rsplit("/", 1)[-1] for s in siblings],
                                         n=5, cutoff=0.72)
        # String similarity alone will happily swap "claw-slash-orange" for
        # "cougar-roar-rush-orange": same folder, similar letters, and they
        # even share a word -- but "orange" is a colour, not the subject.
        # Foundry names assets subject-first, so require the leading token to
        # be identical. That accepts real renames
        # (intimidation-impersonate -> intimidation-impressing) and rejects
        # lookalikes (flute-pan-brown -> lute-gold-brown).
        def subject(fn):
            head = re.split(r"[^a-z0-9]+", fn.rsplit(".", 1)[0].lower())
            return head[0] if head else ""

        want = subject(base)
        for h in hits:
            if want and subject(h) == want:
                result = folder + "/" + h
                break
    cache[key] = result
    return result


def manifest_roots(manifest, cache={}):
    """Top-level directories the manifest actually indexed."""
    key = id(manifest)
    if key not in cache:
        cache[key] = {m.split("/", 1)[0] for m in manifest if "/" in m}
    return cache[key]


def image_judgeable(ref, manifest):
    """Can this reference be fairly judged against the manifest?

    The manifest is a snapshot of one Foundry install. A homebrew or module
    asset tree it never walked is missing from the manifest, not missing from
    disk. Reporting those as broken would rewrite perfectly good artwork, so
    only references under a root the manifest actually covers are judged.
    """
    p = ref.replace("\\", "/").lstrip("/").split("?")[0]
    if "/" not in p:
        return True  # a bare filename at the world root is genuinely suspect
    return p.split("/", 1)[0] in manifest_roots(manifest)


def image_known(ref, manifest):
    """Is this img/src reference resolvable against the manifest?"""
    if not ref:
        return True  # empty is handled separately
    if ref.startswith(("http://", "https://", "data:")):
        return True  # remote/inline — not ours to validate
    p = ref.replace("\\", "/").lstrip("/").split("?")[0]
    if p in manifest:
        return True
    # Core Foundry ships icons/svg/* with every install, and they are exactly
    # what this tool emits as fallbacks. Treating them as always-present keeps
    # a second pass clean even when the manifest was captured elsewhere.
    if p.startswith("icons/svg/"):
        return True
    # Manifest lines are sometimes stored without the leading root segment.
    for prefix in ("icons/", "systems/", "modules/"):
        if p.startswith(prefix) and p[len(prefix):] in manifest:
            return True
    if ("icons/" + p) in manifest:
        return True
    return False


# --------------------------------------------------------------------------
# helpers


def stable_id(*parts):
    """A deterministic 16-char Foundry-shaped id derived from content."""
    h = hashlib.sha256("::".join(str(p) for p in parts).encode("utf-8")).digest()
    n = int.from_bytes(h, "big")
    out = []
    for _ in range(16):
        n, r = divmod(n, len(ID_ALPHABET))
        out.append(ID_ALPHABET[r])
    return "".join(out)


def advancement_entries(item):
    """Yield (key, advancement_dict) for either the dict or list shape."""
    adv = (item.get("system") or {}).get("advancement")
    if isinstance(adv, dict):
        for k, v in adv.items():
            if isinstance(v, dict):
                yield k, v
    elif isinstance(adv, list):
        for i, v in enumerate(adv):
            if isinstance(v, dict):
                yield i, v


def iter_img_fields(node, path="$"):
    """Walk the document yielding (container, key, value, jsonpath) for images."""
    if isinstance(node, dict):
        for k, v in list(node.items()):
            here = "%s.%s" % (path, k)
            if k in ("img", "src") and isinstance(v, str):
                yield node, k, v, here
            else:
                yield from iter_img_fields(v, here)
    elif isinstance(node, list):
        for i, v in enumerate(node):
            yield from iter_img_fields(v, "%s[%d]" % (path, i))


def label(item):
    return "%s (%s)" % (item.get("name", "?"), item.get("type", "?"))


# --------------------------------------------------------------------------
# rules
#
# Each rule takes (actor, report, opts) and mutates `actor` in place.


def rule_item_ids(actor, report, opts):
    """Every item needs a unique, well-formed 16-char _id.

    A duplicate id is a silent data-loss bug: Foundry creates one document
    where the export named two, which is one direct cause of the
    "returned items did not match input items" error.
    """
    items = actor.get("items") or []
    seen = {}
    for idx, it in enumerate(items):
        iid = it.get("_id")
        if not iid or not isinstance(iid, str):
            new = stable_id(actor.get("name"), it.get("name"), it.get("type"), idx)
            report.add("missing-id", True, label(it), "assigned %s" % new)
            it["_id"] = new
        elif not ID_RE.match(iid):
            new = stable_id(actor.get("name"), iid, idx)
            report.add("malformed-id", True, label(it), "%s -> %s" % (iid, new))
            it["_id"] = new
        iid = it["_id"]
        if iid in seen:
            new = stable_id(actor.get("name"), iid, it.get("name"), idx, "dup")
            report.add(
                "duplicate-id", True, label(it),
                "%s collided with %s -> %s" % (iid, seen[iid], new),
            )
            it["_id"] = new
        seen[it["_id"]] = label(it)


def rule_singletons(actor, report, opts):
    """Only one race and one background may exist on a character.

    This is the "Only a single Species can be added to a Player Character"
    rejection. Which copy survives is the caller's choice: `first` (default,
    what the sheet was built with) or `last` (what was most recently added).
    """
    if actor.get("type") != "character":
        return
    items = actor.get("items") or []
    for typ in SINGLETON_TYPES:
        matches = [it for it in items if it.get("type") == typ]
        if len(matches) <= 1:
            continue
        keeper = matches[-1] if opts.keep_species == "last" else matches[0]

        def weight(it):
            """Rough measure of how much mechanical content an item carries."""
            sysd = it.get("system") or {}
            adv = sysd.get("advancement")
            n_adv = len(adv) if isinstance(adv, (dict, list)) else 0
            desc = ((sysd.get("description") or {}).get("value") or "")
            return n_adv * 100 + len(desc) + len(it.get("effects") or []) * 50

        for it in matches:
            if it is keeper:
                continue
            # Position is a crude tiebreak. If the copy being dropped is the
            # one carrying the advancements, traits and description, say so
            # loudly -- that is a judgement call the user should make, not a
            # side effect of which item happened to be listed first.
            note = ""
            if weight(it) > weight(keeper):
                note = (" — WARNING: the removed copy had more mechanical"
                        " content (advancements/traits); consider"
                        " --keep-species %s"
                        % ("last" if opts.keep_species == "first" else "first"))
            report.add(
                "duplicate-%s" % typ, True, label(it),
                "removed; kept %r%s" % (keeper.get("name"), note),
            )
            items.remove(it)


def rule_orphan_subclass(actor, report, opts):
    """A subclass with no matching class cannot be applied.

    dnd5e links them by `system.classIdentifier`. When only one class is
    present the link is unambiguous, so repair it rather than dropping a
    subclass the player actually has.
    """
    items = actor.get("items") or []
    classes = [it for it in items if it.get("type") == "class"]
    subs = [it for it in items if it.get("type") == "subclass"]
    if not subs:
        return
    idents = {
        (c.get("system") or {}).get("identifier")
        for c in classes
        if (c.get("system") or {}).get("identifier")
    }
    for sub in list(subs):
        want = (sub.get("system") or {}).get("classIdentifier")
        if want and want in idents:
            continue
        if len(classes) == 1:
            ident = (classes[0].get("system") or {}).get("identifier")
            if ident:
                sub.setdefault("system", {})["classIdentifier"] = ident
                report.add(
                    "subclass-relinked", True, label(sub),
                    "classIdentifier %r -> %r" % (want, ident),
                )
                continue
        report.add(
            "orphan-subclass", True, label(sub),
            "no class matches %r; removed" % want,
        )
        items.remove(sub)


def rule_advancement_grants(actor, report, opts):
    """Prune advancement `value.added` entries that name absent items.

    This is the direct cause of "Number of returned items did not match
    number of input items!" — the advancement promises a granted document
    that is not in the export, so the create call returns short.
    """
    items = actor.get("items") or []
    ids = {it.get("_id") for it in items}
    for it in items:
        for _key, adv in advancement_entries(it):
            value = adv.get("value")
            if not isinstance(value, dict):
                continue
            added = value.get("added")
            if not isinstance(added, dict):
                continue
            for local_id in list(added):
                if local_id not in ids:
                    src = added[local_id]
                    del added[local_id]
                    report.add(
                        "dangling-grant", True, label(it),
                        "%s dropped %s -> %r"
                        % (adv.get("type", "advancement"), local_id, src),
                    )
            if not added:
                value.pop("added", None)


def rule_effect_origins(actor, report, opts):
    """Clear effect `origin`s that point at a different actor or a missing item.

    A stale `Actor.<otherId>.Item.<x>` origin makes the effect unresolvable
    on import. Foundry re-derives the origin when the effect is created on
    the parent item, so clearing is the safe repair.
    """
    items = actor.get("items") or []
    ids = {it.get("_id") for it in items}

    def check(effects, owner):
        for eff in effects or []:
            if not isinstance(eff, dict):
                continue
            origin = eff.get("origin")
            if not origin or not isinstance(origin, str):
                continue
            if ".Item." not in origin:
                continue
            # A Compendium origin resolves from the installed pack, not from
            # this export. Leave it alone -- clearing it would strip a valid
            # link and is the sanitizer overreaching.
            if origin.startswith("Compendium."):
                continue
            target = origin.rsplit(".Item.", 1)[-1]
            # An export usually carries no top-level _id, so the actor prefix
            # cannot be compared against anything. What actually matters is
            # whether the item being pointed at travelled with this document:
            # if it did, the link re-resolves on import no matter which actor
            # id is in the string.
            if target in ids:
                continue
            actor_id = actor.get("_id")
            foreign = (
                origin.startswith("Actor.")
                and actor_id
                and ("Actor.%s." % actor_id) not in origin
            )
            if target not in ids or foreign:
                eff["origin"] = None
                report.add(
                    "stale-effect-origin", True, owner,
                    "cleared %s" % origin,
                )

    for it in items:
        check(it.get("effects"), label(it))
    check(actor.get("effects"), "actor: %s" % actor.get("name"))


def rule_containers(actor, report, opts):
    """Unfile items whose container id does not exist.

    Foundry drops the item rather than the reference, so the player loses
    inventory. Clearing the pointer puts it back in the root inventory.
    """
    items = actor.get("items") or []
    container_ids = {
        it.get("_id") for it in items if it.get("type") == "container"
    }
    for it in items:
        sysd = it.get("system")
        if not isinstance(sysd, dict):
            continue
        cid = sysd.get("container")
        if cid and cid not in container_ids:
            sysd["container"] = None
            report.add(
                "orphan-container-ref", True, label(it),
                "container %s does not exist; moved to root inventory" % cid,
            )


def rule_images(actor, report, opts):
    """Repoint img/src references that cannot resolve.

    Every unresolvable path is one console 404. Empty strings are also
    repaired, because Foundry renders them as a broken-image box.
    """
    if opts.no_images:
        return
    manifest = opts.manifest_set
    if not manifest:
        report.add(
            "manifest-missing", False, "-",
            "no asset manifest loaded; image checking skipped",
        )
        return

    # Map each item's _id to its type so fallbacks can be type-appropriate.
    type_by_img_owner = {}
    for it in actor.get("items") or []:
        type_by_img_owner[id(it)] = it.get("type")

    def fallback_for(container):
        return FALLBACK_ICONS.get(type_by_img_owner.get(id(container)), GENERIC_ICON)

    # actor portrait
    portrait = actor.get("img")
    if (isinstance(portrait, str) and portrait
            and image_judgeable(portrait, manifest)
            and not image_known(portrait, manifest)):
        near = nearest_asset(portrait, manifest)
        new = near or ACTOR_ICON
        report.add(
            "renamed-image" if near else "unresolved-image", False,
            "actor portrait", "%s -> %s" % (portrait, new),
        )
        actor["img"] = new

    for container, key, value, where in list(iter_img_fields(actor)):
        if where == "$.img":
            continue  # handled above
        # dnd5e activities legitimately ship img="" and inherit the parent
        # item's artwork at render time. Filling that in would override the
        # real icon with a generic bag.
        if not value and ".system.activities." in where:
            continue
        if not value:
            new = fallback_for(container)
            report.add("empty-image", False, where, "-> %s" % new)
            container[key] = new
            continue
        if not image_judgeable(value, manifest):
            continue
        if not image_known(value, manifest):
            near = nearest_asset(value, manifest)
            new = near or fallback_for(container)
            rule = "renamed-image" if near else "unresolved-image"
            report.add(rule, False, where, "%s -> %s" % (value, new))
            container[key] = new


def rule_ownership(actor, report, opts):
    """Strip per-user ownership keys that name users who will not exist.

    Importing into another world leaves permission entries pointing at ids
    with no user behind them. `default` is kept; the rest are noise.
    """
    own = actor.get("ownership")
    if not isinstance(own, dict):
        return
    strays = [k for k in own if k != "default"]
    if not strays and "default" in own:
        return
    for k in strays:
        report.add("stray-ownership", False, "actor", "dropped user %s" % k)
        del own[k]
    own.setdefault("default", 0)


def rule_stats_provenance(actor, report, opts):
    """Optionally clear `_stats.lastModifiedBy`, which names a foreign user id."""
    if not opts.strip_provenance:
        return
    count = 0

    def walk(node):
        nonlocal count
        if isinstance(node, dict):
            st = node.get("_stats")
            if isinstance(st, dict) and st.get("lastModifiedBy"):
                st["lastModifiedBy"] = None
                count += 1
            for v in node.values():
                walk(v)
        elif isinstance(node, list):
            for v in node:
                walk(v)

    walk(actor)
    if count:
        report.add("provenance", False, "actor", "cleared lastModifiedBy x%d" % count)


RULES = (
    rule_item_ids,
    rule_singletons,
    rule_orphan_subclass,
    rule_advancement_grants,
    rule_effect_origins,
    rule_containers,
    rule_images,
    rule_ownership,
    rule_stats_provenance,
)


# --------------------------------------------------------------------------


def sanitize(actor, opts):
    """Run every rule. Returns (repaired_copy, Report)."""
    out = copy.deepcopy(actor)
    report = Report()
    for rule in RULES:
        rule(out, report, opts)
    return out, report


def looks_like_actor(doc):
    return (
        isinstance(doc, dict)
        and "name" in doc
        and "type" in doc
        and isinstance(doc.get("items", []), list)
    )


def process(path, opts):
    """Returns exit-code contribution: 0 clean, 1 problems, 2 unreadable."""
    try:
        with open(path, encoding="utf-8") as fh:
            raw = fh.read()
        actor = json.loads(raw)
    except Exception as exc:  # noqa: BLE001
        print("FATAL  %s — cannot parse: %s" % (path, exc))
        return 2

    if not looks_like_actor(actor):
        print("FATAL  %s — not a Foundry actor export" % path)
        return 2

    repaired, report = sanitize(actor, opts)

    name = repaired.get("name", "?")
    n_items = len(repaired.get("items") or [])
    print("\n=== %s" % os.path.basename(path))
    print('    "%s" · %s · %d items' % (name, repaired.get("type"), n_items))

    if not len(report):
        print("    clean — nothing to repair")
        # Still honour an explicit --write/--in-place. Asking for an output
        # file and silently not getting one because the input happened to be
        # clean makes the tool unusable in a batch.
        if opts.write and not opts.check:
            with open(opts.write, "w", encoding="utf-8") as fh:
                fh.write(json.dumps(repaired, ensure_ascii=False, indent=2) + "\n")
            print("    written (unchanged) -> %s" % opts.write)
        return 0

    fatal = report.fatal_count
    warn = len(report) - fatal
    print("    %d import-blocking · %d cosmetic" % (fatal, warn))
    print()

    by_rule = {}
    for row in report.rows:
        by_rule.setdefault(row["rule"], []).append(row)
    for rule in sorted(by_rule, key=lambda r: (not by_rule[r][0]["fatal"], r)):
        rows = by_rule[rule]
        mark = "!!" if rows[0]["fatal"] else "  "
        print("  %s %s  (%d)" % (mark, rule, len(rows)))
        shown = rows if opts.verbose else rows[: opts.max_lines]
        for row in shown:
            print("       · %s — %s" % (row["item"], row["detail"]))
        if len(rows) > len(shown):
            print("       … %d more (use --verbose)" % (len(rows) - len(shown)))

    if opts.check:
        return 1 if fatal else 0

    dest = None
    if opts.in_place:
        dest = path
        if not opts.no_backup:
            bak = path + ".bak"
            with open(bak, "w", encoding="utf-8") as fh:
                fh.write(raw)
            print("\n    backup -> %s" % bak)
    elif opts.write:
        dest = opts.write

    if dest:
        text = json.dumps(repaired, ensure_ascii=False, indent=2) + "\n"
        with open(dest, "w", encoding="utf-8") as fh:
            fh.write(text)
        print("    written -> %s" % dest)
        return 0

    print("\n    (report only — pass --write OUT.json or --in-place to repair)")
    return 1 if fatal else 0


def main():
    ap = argparse.ArgumentParser(
        description="Repair Foundry VTT actor exports so Plutonium can import them.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__.split("USAGE")[-1],
    )
    ap.add_argument("paths", nargs="+", help="actor json file(s); globs allowed")
    ap.add_argument("--write", metavar="OUT", help="write the repaired actor here")
    ap.add_argument("--in-place", action="store_true", help="overwrite the input")
    ap.add_argument("--no-backup", action="store_true", help="skip the .bak on --in-place")
    ap.add_argument("--check", action="store_true",
                    help="CI mode: report and exit 1 if anything import-blocking")
    ap.add_argument("--keep-species", choices=("first", "last"), default="first",
                    help="which duplicate race/background survives (default: first)")
    ap.add_argument("--manifest", default=DEFAULT_MANIFEST,
                    help="asset path manifest for image validation")
    ap.add_argument("--no-images", action="store_true", help="skip image checking")
    ap.add_argument("--strip-provenance", action="store_true",
                    help="also clear _stats.lastModifiedBy user ids")
    ap.add_argument("--verbose", action="store_true", help="show every finding")
    ap.add_argument("--max-lines", type=int, default=6,
                    help="findings shown per rule without --verbose")
    opts = ap.parse_args()

    expanded = []
    for p in opts.paths:
        hits = sorted(glob.glob(p)) if any(c in p for c in "*?[") else [p]
        if not hits:
            print("FATAL  no such file: %s" % p)
            return 2
        expanded.extend(hits)

    if (opts.write or opts.in_place) and len(expanded) > 1 and opts.write:
        print("FATAL  --write takes one input; use --in-place for batches")
        return 2

    opts.manifest_set = set() if opts.no_images else load_manifest(opts.manifest)
    if opts.manifest_set:
        print("manifest: %d asset paths" % len(opts.manifest_set))
    elif not opts.no_images:
        print("manifest: NOT FOUND at %s — image checks skipped" % opts.manifest)

    worst = 0
    for path in expanded:
        worst = max(worst, process(path, opts))
    return worst


if __name__ == "__main__":
    sys.exit(main())
