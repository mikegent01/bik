"""WAHwire — the social feed, formerly "WAHwire".

Two stages, and the order is deliberate:

  stage 0  prune   — walk the 19 inherited posts one at a time, QC each one,
                     repair its links, retag it, mark it `canon` or `retired`.
  stage 1  author  — only once every legacy post has been through stage 0,
                     start writing new posts for events that have none.

The scheduler enforces that gate: a stage-1 task is never handed out while any
stage-0 task remains. That is the "complete clean pass first" rule expressed as
data rather than as a comment nobody reads.

Why the prune stage is not busywork: the inherited posts carry `eventId`
values — `regency_fall`, `vampire_war` — that match **no record in the
archive**. They are dead links rendered as "Related Event". Pruning replaces
that single dangling string with a typed `links` list validated against real
ids, which is what makes the feed worth linking to articles at all.
"""

from __future__ import annotations

import json
import re
import threading
from typing import Any

from ..settings import ROOT
from ..spec import SystemSpec, Task, TaskResult, ValidationError, provenance
from ..storage import atomic_write_json, read_json

STORE = ROOT / "data" / "wahwire" / "posts.json"

_WRITE_LOCK = threading.Lock()
_LINK_CACHE: dict[str, dict[str, str]] = {}
_VOICE_CACHE: dict[str, dict[str, str]] = {}


def voices() -> dict[str, dict[str, str]]:
    """Who each author actually is, straight out of data/characters.json.

    Without this the model only ever saw a bare id like `archie_miser` and had
    to guess a personality, which is why early output all sounded like the same
    narrator. Archie alone carries a 42k-character description; feeding a
    trimmed slice of the real article is the difference between a post that
    could have been written by anyone and one only that character would write.

    Authors with no article (wah_media_collective, generic_toad) simply get no
    entry and fall back to the role note in the prompt.
    """
    global _VOICE_CACHE
    if _VOICE_CACHE:
        return _VOICE_CACHE
    data = read_json(ROOT / "data" / "characters.json", default=[])
    records = data if isinstance(data, list) else data.get("characters", [])
    wanted = set(KNOWN_AUTHORS)
    out: dict[str, dict[str, str]] = {}
    for record in records:
        if not isinstance(record, dict):
            continue
        rid = record.get("id")
        if rid not in wanted:
            continue
        summary = " ".join(str(record.get("summary") or "").split())
        out[rid] = {
            "name": str(record.get("name") or rid),
            "title": str(record.get("title") or ""),
            "affiliation": str(record.get("affiliation") or ""),
            "summary": summary[:700],
        }
    _VOICE_CACHE = out
    return out

# Posts are written by in-world accounts. These are the ones the legacy feed
# already uses plus the party, all resolvable in data/characters/characters-*.js.
KNOWN_AUTHORS = [
    "lord_crimson", "general_marcus_ironhand", "colonel_vera_steelstorm",
    "alpha_bloodmaw", "wah_media_collective", "generic_toad", "toadsworth",
    "toadette", "waluigi", "bowser", "archie_miser", "markop", "hjumpik",
]


def link_targets() -> dict[str, dict[str, str]]:
    """Every id a post is allowed to link to, id -> {type, name}.

    Built from the four record files. A link to anything not in here is
    stripped in validation, which is the whole reason the dangling `eventId`
    problem cannot come back.
    """
    global _LINK_CACHE
    if _LINK_CACHE:
        return _LINK_CACHE
    targets: dict[str, dict[str, str]] = {}
    for kind, filename in (
        ("event", "events.json"),
        ("battle", "battles.json"),
        ("battle", "majorBattles.json"),
        ("trial", "trials.json"),
    ):
        data = read_json(ROOT / "data" / filename, default=[])
        if not isinstance(data, list):
            continue
        for record in data:
            if not isinstance(record, dict):
                continue
            rid = record.get("id")
            if not rid or rid in targets:
                continue
            targets[rid] = {
                "type": kind,
                "name": record.get("name") or record.get("title") or rid,
            }
    _LINK_CACHE = targets
    return targets


def _load() -> dict[str, Any]:
    return read_json(STORE, default={"version": 1, "posts": []})


def _posts() -> list[dict[str, Any]]:
    return [p for p in _load().get("posts", []) if isinstance(p, dict)]


def _unpruned() -> list[dict[str, Any]]:
    return [p for p in _posts() if p.get("status") == "legacy"]


def _uncovered_records(limit: int = 400) -> list[dict[str, Any]]:
    """Records that no post talks about yet — the stage-1 backlog."""
    covered: set[str] = set()
    for post in _posts():
        for link in post.get("links") or []:
            if isinstance(link, dict) and link.get("id"):
                covered.add(link["id"])
    out = []
    data = read_json(ROOT / "data" / "events.json", default=[])
    if isinstance(data, list):
        for record in data:
            if not isinstance(record, dict):
                continue
            rid = record.get("id")
            if rid and rid not in covered:
                out.append(record)
            if len(out) >= limit:
                break
    return out


# --------------------------------------------------------------------------
# stage 0 — prune
# --------------------------------------------------------------------------

PRUNE_SYSTEM = """You are the editor of an in-world social feed called WAHwire, inside a
tabletop campaign archive. You are given ONE inherited post and the list of records it
could legitimately cite. Your job is quality control, not rewriting for its own sake.

Return strictly valid JSON only, no commentary, no code fence:

{
  "verdict": "keep" | "retire",
  "content": "<the post text, cleaned>",
  "links": [ { "id": "<record id from the allowed list>", "type": "event|battle|trial" } ],
  "tags": ["<2-4 lowercase single-word tags>"],
  "editorNote": "<one sentence saying what you changed and why>"
}

Rules:
- "retire" ONLY if the post is incoherent, empty, or duplicates another post's content.
  A merely short or plain post is a keep. Default to keep.
- Preserve the author's voice and every fact. Fix typos, broken spacing and truncation.
  Do NOT add new events, numbers, names or outcomes. Do NOT lengthen for the sake of it.
- `links` must use ids from the allowed list ONLY. If nothing in the list genuinely
  matches the post, return an empty list — a dead link is worse than no link.
- Tags are topical: war, onyx, treaty, aftermath, regency, moonfang, propaganda.
"""


def _prune_prompt(task: Task) -> tuple[str, str]:
    post = next((p for p in _posts() if p.get("id") == task.payload["id"]), None)
    if post is None:
        raise ValidationError("post vanished")

    targets = link_targets()
    # Offer a workable shortlist rather than 212 ids: anything sharing a word
    # with the post, plus the legacy id if it happens to be real.
    words = {w.strip(".,!:;\"'").lower() for w in (post.get("content") or "").split()}
    words = {w for w in words if len(w) > 4}
    shortlist = [
        (rid, meta) for rid, meta in targets.items()
        if any(w in meta["name"].lower() or w in rid for w in words)
    ][:40]
    if not shortlist:
        shortlist = list(targets.items())[:40]

    body = {
        "id": post.get("id"),
        "author": post.get("author"),
        "timestamp": post.get("timestamp"),
        "date": post.get("date"),
        "content": post.get("content"),
        "likes": post.get("likes"),
        "danglingLegacyEventId": post.get("legacyEventId"),
    }
    prompt = (
        f"POST:\n{json.dumps(body, ensure_ascii=False, indent=2)}\n\n"
        "NOTE: `danglingLegacyEventId` points at no record that exists. Replace it with "
        "real links or with nothing.\n\n"
        "ALLOWED LINK TARGETS (id — name):\n"
        + "\n".join(f"  {rid} — {meta['name']} [{meta['type']}]" for rid, meta in shortlist)
        + "\n\nQuality-control this post."
    )
    return PRUNE_SYSTEM, prompt


def _prune_validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    verdict = str(raw.get("verdict", "")).strip().lower()
    if verdict not in ("keep", "retire"):
        raise ValidationError(f"bad verdict {verdict!r}")

    if verdict == "retire":
        return {"verdict": "retire", "editorNote": str(raw.get("editorNote", ""))[:240]}

    content = raw.get("content")
    if not isinstance(content, str) or len(content.strip()) < 20:
        raise ValidationError("kept post has no usable content")
    content = content.strip()

    original = next((p for p in _posts() if p.get("id") == task.payload["id"]), {})
    old = (original.get("content") or "").strip()
    # Guard against the model quietly inventing a new post under the guise of a
    # cleanup. A real QC edit stays close to the original length.
    if old and len(content) > max(len(old) * 1.6, len(old) + 200):
        raise ValidationError("edit ballooned the post — rejected as a rewrite")

    targets = link_targets()
    links: list[dict[str, str]] = []
    seen: set[str] = set()
    for link in raw.get("links") or []:
        if not isinstance(link, dict):
            continue
        rid = link.get("id")
        if rid in targets and rid not in seen:
            seen.add(rid)
            links.append({"id": rid, "type": targets[rid]["type"]})
    if len(links) > 4:
        links = links[:4]

    tags = [
        str(t).strip().lower()
        for t in (raw.get("tags") or [])
        if isinstance(t, str) and 2 <= len(t.strip()) <= 20
    ][:4]

    return {
        "verdict": "keep",
        "content": content,
        "links": links,
        "tags": tags,
        "editorNote": str(raw.get("editorNote", ""))[:240],
    }


def _prune_apply(task: Task, data: dict[str, Any]) -> TaskResult:
    with _WRITE_LOCK:
        store = _load()
        post = next(
            (p for p in store.get("posts", []) if p.get("id") == task.payload["id"]), None
        )
        if post is None:
            return TaskResult(task=task, ok=False, detail="post not found on write")

        if data["verdict"] == "retire":
            post["status"] = "retired"
            post["editorNote"] = data.get("editorNote", "")
            detail = "retired"
        else:
            post["content"] = data["content"]
            post["links"] = data["links"]
            post["tags"] = data["tags"]
            post["editorNote"] = data["editorNote"]
            post["status"] = "canon"
            post.pop("legacyEventId", None)
            detail = f"kept, {len(data['links'])} link(s), {len(data['tags'])} tag(s)"

        atomic_write_json(STORE, store)
    return TaskResult(
        task=task, ok=True, detail=detail, record=data,
        changed_paths=[str(STORE.relative_to(ROOT))],
    )


# --------------------------------------------------------------------------
# stage 1 — author
# --------------------------------------------------------------------------

AUTHOR_SYSTEM = """You write in-world posts for WAHwire, a social feed inside a tabletop
campaign archive. Given ONE historical record, write how somebody in that world posted
about it at the time.

Return strictly valid JSON only, no commentary, no code fence:

{
  "author": "<one id from the author list>",
  "content": "<the post, 2-4 sentences, first person, in character>",
  "likes": <integer 0-9000>,
  "tags": ["<2-4 lowercase single-word tags>"],
  "reaction": "<one of: cheer, rage, grief, smug, alarm, deadpan>"
}

Rules:
- The post reacts to the record. It never narrates it like an encyclopedia entry.
- Stay inside what the record says. No new deaths, victories, dates or names.
- Voice matters: a general posts like a general, a propagandist like a propagandist,
  a frightened civilian like a frightened civilian. Pick the author who would
  plausibly have posted, not always the most important person.
- `likes` should track how popular that opinion would be, not how important the event is.
  An unpopular truth gets few likes.
- Do NOT put hashtags in `content`. The `tags` array below is the only place
  tags belong, and they are written there WITHOUT a leading '#'. A '#' anywhere
  in `content` gets the whole post rejected.
- At most one emoji, and only if that character would use one.
- Do not repeat the record's title back as a sentence. React, don't summarise.
"""


# Authors with no article of their own still need a voice note, or the model
# invents one. These are the outlets and bit-players, described from how the
# legacy feed already uses them.
ROLE_NOTES = {
    "wah_media_collective": "A sensationalist news outlet. Writes in headline voice, all caps openers, breathless.",
    "generic_toad": "An ordinary Mushroom Kingdom civilian. Frightened, parochial, worries about rent and family.",
    "lord_crimson": "A vampire lord of the Onyx Hand. Formal, archaic, contemptuous of mortals.",
    "general_marcus_ironhand": "A Regal Empire general. Clipped military register, talks in objectives and materiel.",
    "colonel_vera_steelstorm": "An Iron Legion colonel. Cold, procedural, quotes regulations.",
    "alpha_bloodmaw": "A werewolf pack alpha. Territorial, blunt, speaks for the wild.",
    "toadsworth": "An elderly Mushroom Kingdom retainer. Fussy, loyal, prone to 'Master' and 'I say'.",
    "toadette": "A young, plucky Mushroom Kingdom toad. Earnest and informal.",
}


def _author_prompt(task: Task) -> tuple[str, str]:
    record = task.payload["record"]
    view = {
        k: (v[:1200] + " […]" if isinstance(v, str) and len(v) > 1200 else v)
        for k, v in record.items()
        if k in ("id", "name", "title", "type", "date", "era", "location",
                 "summary", "description", "result", "aftermath")
        and v not in (None, "", [], {})
    }

    # Give the model the actual people, not just their ids. A voice note per
    # author is what stops every post reading like the same narrator.
    who = voices()
    lines = []
    for author_id in KNOWN_AUTHORS:
        v = who.get(author_id)
        if v:
            bits = [b for b in (v["title"], v["affiliation"]) if b]
            head = f"  {author_id} — {v['name']}"
            if bits:
                head += f" ({'; '.join(bits)})"
            lines.append(head + (f"\n      {v['summary']}" if v["summary"] else ""))
        else:
            note = ROLE_NOTES.get(author_id, "")
            lines.append(f"  {author_id}" + (f" — {note}" if note else ""))

    # The record's own date string, verbatim. The feed shows this, so an
    # invented date would be visible on screen next to a real one.
    date_note = ""
    raw_date = record.get("date")
    if isinstance(raw_date, str) and raw_date.strip():
        date_note = (
            f"\nThis record is dated: {raw_date.strip()}\n"
            "Use that dating if you refer to when it happened. Do not invent a different date.\n"
        )

    prompt = (
        f"RECORD:\n{json.dumps(view, ensure_ascii=False, indent=2)}\n"
        f"{date_note}\n"
        f"AUTHORS — pick exactly one `author` id from this list:\n"
        + "\n".join(lines)
        + "\n\nWrite the post."
    )
    return AUTHOR_SYSTEM, prompt


def _author_validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    author = str(raw.get("author", "")).strip()
    if author not in KNOWN_AUTHORS:
        raise ValidationError(f"unknown author {author!r}")
    content = raw.get("content")
    if not isinstance(content, str) or not (40 <= len(content.strip()) <= 900):
        raise ValidationError("content missing or out of length range")
    content = " ".join(content.split())

    # Trailing hashtags are a habit the model will not fully unlearn, and
    # throwing away an otherwise good post over them wastes a whole generation
    # round-trip. Salvage instead: lift them into `tags` (which is where they
    # were always meant to go) and strip them from the prose. Only reject when
    # removing them would leave nothing worth publishing.
    salvaged: list[str] = []
    if "#" in content:
        for match in re.findall(r"#(\w{2,20})", content):
            tag = match.lower()
            if tag not in salvaged:
                salvaged.append(tag)
        content = " ".join(re.sub(r"#\w+", " ", content).split()).strip(" .,;:-—")
        if len(content) < 40:
            raise ValidationError("post is only hashtags once they are stripped")

    try:
        likes = max(0, min(9000, int(raw.get("likes", 0))))
    except (TypeError, ValueError):
        likes = 0

    reaction = str(raw.get("reaction", "")).strip().lower()
    if reaction not in ("cheer", "rage", "grief", "smug", "alarm", "deadpan"):
        reaction = "deadpan"

    tags: list[str] = []
    for candidate in list(raw.get("tags") or []) + salvaged:
        if not isinstance(candidate, str):
            continue
        tag = candidate.strip().lstrip("#").lower()
        if 2 <= len(tag) <= 20 and tag not in tags:
            tags.append(tag)
    tags = tags[:4]

    return {
        "author": author, "content": content, "likes": likes,
        "tags": tags, "reaction": reaction,
    }


def _author_apply(task: Task, data: dict[str, Any]) -> TaskResult:
    record = task.payload["record"]
    rid = record.get("id")
    post_id = f"wahwire_{rid}"

    with _WRITE_LOCK:
        store = _load()
        posts = store.setdefault("posts", [])
        if any(p.get("id") == post_id for p in posts):
            return TaskResult(task=task, ok=False, detail="post already exists")
        order = max([p.get("order") or 0 for p in posts] or [0]) + 1
        entry = {
            "id": post_id,
            "author": data["author"],
            "order": order,
            "date": None,
            "timestamp": record.get("date") or "",
            "content": data["content"],
            "likes": data["likes"],
            "links": [{"id": rid, "type": "event"}],
            "tags": data["tags"],
            "reaction": data["reaction"],
        }
        entry.update(provenance("wahwire", task.payload.get("model", "")))
        posts.append(entry)
        atomic_write_json(STORE, store)

    return TaskResult(
        task=task, ok=True, detail=f"new post by {data['author']} ({data['likes']} likes)",
        record=data, changed_paths=[str(STORE.relative_to(ROOT))],
    )


# --------------------------------------------------------------------------
# specs
# --------------------------------------------------------------------------

def _prune_tasks(count: int) -> list[Task]:
    return [
        Task(
            system_id="wahwire-prune",
            key=f"prune:{p['id']}",
            label=f"wahwire prune · {p['id']}",
            payload={"id": p["id"]},
            phase="prune",
        )
        for p in _unpruned()[:count]
    ]


def _author_tasks(count: int) -> list[Task]:
    return [
        Task(
            system_id="wahwire-author",
            key=f"author:{r.get('id')}",
            label=f"wahwire post · {r.get('name') or r.get('id')}",
            payload={"record": r},
            phase="author",
        )
        for r in _uncovered_records(count)[:count]
    ]


PRUNE_SPEC = SystemSpec(
    id="wahwire-prune",
    title="WAHwire · prune the inherited feed",
    summary="QC each of the 19 legacy posts, repair dead links, mark canon or retired.",
    stage=0,
    next_tasks=_prune_tasks,
    build_prompt=_prune_prompt,
    validate=_prune_validate,
    apply=_prune_apply,
    pending=lambda: len(_unpruned()),
)

AUTHOR_SPEC = SystemSpec(
    id="wahwire-author",
    title="WAHwire · author new posts",
    summary="Write feed reactions for records nobody has posted about.",
    stage=1,
    next_tasks=_author_tasks,
    build_prompt=_author_prompt,
    validate=_author_validate,
    apply=_author_apply,
    pending=lambda: len(_uncovered_records()),
)

SPECS = [PRUNE_SPEC, AUTHOR_SPEC]
