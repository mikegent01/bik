# Verification & Organization — keeping the archive from rotting

Two failure modes kill a wiki this size. This document is about both.

- **Breakage** — an id that resolves to nothing, a raw `<div>` printed as
  literal text, JSON that no longer parses. Cheap to prevent, expensive to find
  later.
- **Bloat** — four documents that say the same thing slightly differently, a
  file called `index-new-v2-final.html`, a generated artifact edited by hand.
  Nothing breaks; the archive just becomes impossible to reason about.

> **Bloat is not length.** A 6,000-word event is not bloat. Three overlapping
> 600-word READMEs are. **Never delete or trim story content in the name of
> this document** — bloat control applies to *duplication and cruft*, not to
> prose. If something can only be shortened by making it worse, leave it.

---

## Verification — run before you call a run finished

### 0. Run the routine wrapper

For ordinary PRs, start here so the same core checks run every time:

```bash
python3 tools/check-all.py
# optional, slower / needs npm deps:
python3 tools/check-all.py --with-build
```

The wrapper runs local path checks, reference checks, exhibits, investigations,
rolls, battles, background blurbs, RNN broadcast validation, Bros Attack sync,
and the Bros discovery test when Node is available. It does not hide legacy
warnings; it only gives one pass/fail summary after the individual tools print
their own details.

### 1. The JSON parses

```bash
cd /home/user/bik
for f in Reputation-Matrix2/data/*.json; do
  python3 -c "import json,sys;json.load(open(sys.argv[1]))" "$f" \
    || echo "BROKEN: $f"
done
```

A trailing comma in a 90-entry array takes the whole site down, and the browser
error will point at the wrong line.

### 2. Every id resolves

The single most common breakage. `participants[]`, `relatedArticles[]`,
`related[]`, `keyBattles[]`, and `xpAwards[].articleId` all point into other
files, and nothing validates them at load time.

```bash
python3 - <<'PY'
import json, glob, os
os.chdir('/home/user/bik/Reputation-Matrix2/data')
ids = set()
for f in ('characters.json','locations.json','events.json','factions.json','nations.json'):
    try:
        d = json.load(open(f))
    except Exception:
        continue
    for x in (d if isinstance(d, list) else d.get(list(d)[0], [])):
        if isinstance(x, dict) and 'id' in x:
            ids.add(x['id'])
bad = []
for f in ('events.json','locations.json','characters.json'):
    d = json.load(open(f))
    for x in (d if isinstance(d, list) else []):
        for key in ('participants','relatedArticles','related','keyBattles'):
            for ref in (x.get(key) or []):
                r = ref.get('id') if isinstance(ref, dict) else ref
                if isinstance(r, str) and r not in ids:
                    bad.append(f"{f}:{x.get('id')}.{key} -> {r}")
print('\n'.join(bad) if bad else 'all ids resolve')
print(len(bad), 'dangling')
PY
```

Some dangling refs are pre-existing. **Do not fix the whole backlog on a
filing run** — fix the ones your run introduced, and report the rest.

### 3. No raw HTML in prose

`mdToHtml()` escapes it, so a `<div>` renders as visible angle brackets.
Fifteen shipped once.

```bash
grep -n '<div\|<span\|<br' Reputation-Matrix2/data/events.json | head
```

### 4. The exhibits are sound

Props are the one data layer that renders raw HTML, so a typo there is a
visible break rather than a silent one.

```bash
python3 tools/check-exhibits.py
```

Fails on: `props.json` not parsing · a `kind` or stamp with no CSS rule · an
invented `.pd-*` class or an inline style in a `body` · an `items` / `articles`
id that resolves to nothing · a prop linked to nothing (unopenable) · a
`[[prop:…]]` marker pointing at a prop that does not exist. Warns on an
`## Addendum:` heading with no addendum slip filed against it. Standard:
[`STORY_FORMAT_GUIDE.md` §9B](STORY_FORMAT_GUIDE.md#9b-exhibits--the-documents-the-story-names).

### 5. The page actually loads

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Then check: the home feed shows the new item · `#/article/<id>` resolves ·
participant chips link to real pages · asides render as purple callouts, not
italic text with stray asterisks · no console errors.

### 6. Craft numbers (advisory)

[`AUDIT_SCRIPTS.md`](AUDIT_SCRIPTS.md). Advisory only. Re-read and decide.

---

## Organization — where things go

| Kind | Home | Rule |
|---|---|---|
| Canon events | `Reputation-Matrix2/data/events.json` | One flat array. Append; never reformat the whole file |
| What-Ifs | `Reputation-Matrix2/data/whatifs.json` | Under `doc['whatifs']` |
| Characters / locations / factions | `Reputation-Matrix2/data/*.json` | Match neighbouring entries' schema and indentation |
| Home page data | `Reputation-Matrix2/data/mainPage.json` | Written by `tools/update-index-home.py` |
| Episode scripts | `tools/rnn-scripts/epNNN.json` | Hand-written input |
| Generated JS | `Reputation-Matrix2/data/rnn-broadcasts.js` | **Output. Never hand-edit** |
| Docs | `docs/` | Indexed by the [entry README](../README.md) |
| Tools | `tools/`, `Reputation-Matrix2/tools/` | Each keeps its own README |

### Generated vs. authored

Editing a generated file is the most damaging small mistake available here: the
edit works, ships, and is silently destroyed the next time the generator runs.

| Generated | Generator |
|---|---|
| `Reputation-Matrix2/data/rnn-broadcasts.js` | `tools/build-rnn-broadcast.py` |
| The `RNN:LAST-WEEK` blocks in both READMEs | `tools/build-rnn-broadcast.py` |
| Home timeline feed in `index.html` | `tools/update-index-home.py` |
| `Reputation-Matrix2/data/mainPage.json` | `tools/update-index-home.py` |

**Edit the generator, then run it.** If the generator cannot produce what you
need, change the generator — do not patch its output.

---

## Bloat control

### The rules

1. **One canonical home per fact.** If two files must state the same thing,
   one states it and the other links. The `mike` rule lives in the entry
   README; everywhere else points there.
2. **No versioned filenames.** No `-new`, `-v2`, `-final`, `-old`, `-backup`.
   Git is the version history. A file whose name contains its own changelog is
   a file nobody will ever dare delete.
3. **Nothing is dead until it is documented as dead.** Legacy files are
   recorded in [`LEGACY_FILES.md`](LEGACY_FILES.md), not deleted on a hunch and
   not left unexplained.
4. **A new document must earn its existence.** Before creating one, ask: does
   an existing document own this topic? If yes, extend it. New files are for
   new topics, not for new moods.
5. **Index or delete.** Any doc not reachable from the entry README will be
   forgotten within a month. If it is worth keeping, link it. If it is not
   worth linking, it was not worth writing.
6. **Duplication is a bug with a due date.** When you notice two documents
   drifting, resolve it in that run: pick the canonical one, reduce the other
   to a pointer.

### The bloat check

```bash
cd /home/user/bik
# every markdown doc, by size — anything unexpected?
find . -name '*.md' -not -path './node_modules/*' -not -path './.git/*' -print0 \
  | xargs -0 wc -w | sort -n

# versioned-filename cruft
find . \( -name '*-new.*' -o -name '*-v2.*' -o -name '*-final.*' \
          -o -name '*-old.*' -o -name '*.bak' \) -not -path './.git/*'
```

*(Use `-print0 | xargs -0` — paths in this repo contain spaces.)*

### Known and accepted

| Situation | Decision |
|---|---|
| `Reputation-Matrix2/books/README.md`, `books/gemini.md` | **Deleted.** They were copies of `Reputation-Matrix2/README.md` and `Reputation-Matrix2/gemini.md` with nothing unique in them. Do not recreate them — `books/` holds book data, not process docs |
| `timeline/README.md` | Boilerplate for a bundled third-party React app. **Leave alone** |
| `wahsim/README.md`, `Reputation-Matrix2/tools/hub/README.md` | Genuine tool docs. Index them; do not rewrite them |

---

## End-of-run checklist

```
□ Every touched JSON parses
□ No dangling ids introduced by this run
□ No raw <div>/<span> in prose fields
□ No generated file hand-edited
□ Exhibits filed for the paper the prose names; python3 tools/check-exhibits.py clean
□ Home feed + SITE_UPDATES + mainPage.json updated
□ Event id appended to tools/rnn-scripts/pending-news-articles.json
□ Audit script run; output read, not just executed
□ No new document that an existing one should have owned
□ Every new doc linked from the entry README
□ Run report written (docs/RUN_REPORT_FORMAT.md)
```
