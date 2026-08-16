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

import difflib
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
# Thirteen accounts was itself part of the imbalance. The model picks an
# author with a stake in the record, and the people who actually turn up in
# the events mostly had no account to pick — Wario is a participant in 20
# events and Luigi in 19, and neither could post. That left Waluigi as the
# only voice present at most of what the archive records, so he got 77% of the
# feed while obeying every rotation rule.
#
# Everyone added here is a named participant in four or more events and has a
# real character page, so a post from them can link back to somebody who
# exists. Characters with no page stay out: remi, mages_guild, god_toad,
# vostolas and vaxillus all clear the event threshold but have nowhere to link.
KNOWN_AUTHORS = [
    "lord_crimson", "general_marcus_ironhand", "colonel_vera_steelstorm",
    "alpha_bloodmaw", "wah_media_collective", "generic_toad",
    # Canonical ids, as spelled in data/characters.json: the short forms
    # "toadsworth"/"toadette" match no character page, so posts under them
    # could not link back to anybody.
    "chancellor_toadsworth", "captain_toadette",
    "waluigi", "bowser", "archie_miser", "markop", "hjumpik",
    "wario", "luigi", "green_t", "eager", "mario", "bones", "salam",
    "mystic_morel", "toad_lee", "fawful", "the_oracle", "princess_peach",
    "mossy", "orangus_cornelius", "dracule_mihawk", "sans",
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


# Words models reach for instead of the two they were given. Only unambiguous
# synonyms are listed -- "revise" or "maybe" are genuinely undecided answers
# and must not be forced into a verdict here.
_VERDICT_SYNONYMS = {
    "retire": ("retire", "remove", "delete", "drop", "cut", "discard", "purge"),
    "keep": ("keep", "kept", "retain", "hold", "stay", "preserve", "publish"),
}


def _prune_repair(task: Task, raw: dict[str, Any], why: str) -> dict[str, Any] | None:
    """Map a near-miss verdict word onto the two the pass accepts.

    The model does the actual judging; when it answers "remove" instead of
    "retire" the decision has been made and only the vocabulary is off. That
    is worth repairing.

    A garbled or genuinely undecided verdict is NOT defaulted to "keep" --
    that would be the tool deciding what stays in the archive. Likewise a
    kept post with no content, or an edit that ballooned into a rewrite, are
    the model failing the task, and both still fail.
    """
    if "bad verdict" not in why:
        return None
    said = str(raw.get("verdict", "")).strip().lower()
    if not said:
        return None
    for verdict, words in _VERDICT_SYNONYMS.items():
        if any(word in said for word in words):
            fixed = dict(raw)
            fixed["verdict"] = verdict
            return fixed
    return None


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
  "content": "<the post, 1-3 short sentences, first person, in character>",
  "likes": <integer 0-9000>,
  "tags": ["<2-4 lowercase single-word tags>"],
  "reaction": "<one of the reaction ids listed below>",
  "comments": [
    {
      "author": "<a DIFFERENT id from the author list>",
      "content": "<1-2 short sentences replying to the post, in that character's voice>",
      "likes": <integer 0-4000>,
      "reaction": "<one of the reaction ids listed below>",
      "replyTo": "<omit, or the author id of the comment being answered>"
    }
  ]
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

Comments:
- Write 1 to 4 comments. A quiet, technical record may deserve one; a scandal or
  a massacre should draw an argument.
- A comment is a REPLY, not a second post. It agrees, mocks, corrects, grieves or
  picks a fight with what was actually said above it.
- Never let the original poster comment on their own post.
- Use `replyTo` to answer an earlier commenter by their author id. A short chain
  of two people arguing is better than four unrelated remarks.
- Comments get fewer likes than the post unless the comment is the better line.
- Disagreement is the point. A feed where everyone agrees is not worth reading.
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
    "chancellor_toadsworth": "An elderly Mushroom Kingdom retainer. Fussy, loyal, prone to 'Master' and 'I say'.",
    "captain_toadette": "A young, plucky Mushroom Kingdom toad. Earnest and informal.",
    # These five had no voice note, which is part of why the model kept
    # falling back to Waluigi: he was the only one of them it could hear.
    # An account the prompt cannot characterise is an account it will not pick.
    # NOTE: the third-person habit is Waluigi's and ONLY Waluigi's. It used to
    # be stated here as a bare trait and the model generalised it -- Bowser
    # started referring to himself as "Bowser". Quirks in this shared dict get
    # read as house style, so anything unique to one account has to say out
    # loud that it does not transfer. _validate_voice() enforces the rest.
    "waluigi": "Field archivist and reluctant survivor. Sardonic, aggrieved, "
               "certain he is underappreciated. Refers to himself as "
               "'Waluigi' rather than 'I' -- this is HIS verbal tic alone and "
               "must never be copied by any other account. "
               "Opens with WAH! only when genuinely provoked.",
    "bowser": "King of the Koopa Troop. Territorial and blunt, reads every "
              "event as a question of who holds the ground.",
    "archie_miser": "A hedge mage born with a third eye who trades entropy "
                    "for bread. Fatalistic, superstitious, broke.",
    "markop": "A centaur heavy, the one who gets others out alive. Weary, "
              "practical, talks about cost and who was carrying whom.",
    "hjumpik": "A dwarf with a warhammer and bad political instincts. "
               "Cheerfully blunt, often on the wrong side of history.",
    # The widened roster. Each of these is a participant in four or more
    # events, so they usually have a documented reason to be commenting.
    "wario": "A greedy entrepreneur who appraises everything, including "
             "tragedies. Loud, mercenary, occasionally and accidentally kind.",
    "luigi": "Anxious, decent, and braver than he believes. Understates what "
             "he did and worries about what comes next.",
    "green_t": "A forensics specialist. Precise and evidence-first; will not "
               "say a thing the physical record does not support.",
    "eager": "Enthusiastic to a fault and frequently in over their head. "
             "Earnest, fast-talking, first to volunteer.",
    "mario": "The reluctant hero of record. Plain-spoken, action-oriented, "
             "uncomfortable being quoted.",
    "bones": "A skeletal veteran with gallows humour. Morbid, unbothered, "
             "has seen this go wrong before.",
    "salam": "A cautious operator who reads situations before entering them. "
             "Measured and quietly sceptical of official accounts.",
    "mystic_morel": "A fungal mystic who speaks in growth, decay and omens. "
                    "Oblique, patient, unnerving.",
    "toad_lee": "A working Toad with opinions about management. Wry, "
                "class-conscious, unimpressed by titles.",
    "fawful": "Fawful. Grandiose broken syntax, gleeful malice, chortling. "
              "'I HAVE FURY' energy without overusing the phrase.",
    "the_oracle": "Speaks in prophecy and hedged certainties. Ancient, "
                  "sorrowful, never quite answers the question asked.",
    "princess_peach": "A head of state. Diplomatic, controlled, choosing every "
                      "word for the record she knows is being kept.",
    "mossy": "A heavy breacher. Short sentences, physical detail, cares about "
             "who was standing where.",
    "orangus_cornelius": "Pompous and verbose, fond of his own credentials "
                         "and of correcting other people's grammar.",
    "dracule_mihawk": "A duelist of few words. Cold, exacting, judges everyone "
                      "by their competence with a blade.",
    "sans": "Lowercase, deadpan, terrible puns hiding something heavier. "
            "Never raises his voice.",
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

    # Rotation is enforced in validation; saying so here saves a round trip.
    blocked = recent_authors()
    loud = over_quota()
    barred = set(blocked) | set(loud)
    cooldown_note = ""
    if barred:
        available = [a for a in KNOWN_AUTHORS if a not in barred] or [
            a for a in KNOWN_AUTHORS if a not in blocked
        ]
        cooldown_note = "\n"
        if blocked:
            cooldown_note += (
                f"\nON COOLDOWN — posted in the last {AUTHOR_COOLDOWN} posts, "
                f"FORBIDDEN here: {', '.join(sorted(set(blocked)))}"
            )
        if loud:
            cooldown_note += (
                f"\nOVER QUOTA — already far too much of this feed, FORBIDDEN "
                f"here: {', '.join(sorted(loud))}"
            )
        cooldown_note += (
            f"\nYou must choose one of: {', '.join(available)}\n"
            "Pick the one with the strongest reason to care about THIS record. "
            "A quiet account with a real stake beats a loud one with an opinion."
        )

    prompt = (
        f"RECORD:\n{json.dumps(view, ensure_ascii=False, indent=2)}\n"
        f"{date_note}\n"
        f"AUTHORS — pick exactly one `author` id from this list:\n"
        + "\n".join(lines)
        + cooldown_note
        + f"\n\nREACTION IDS: {', '.join(reactions())}"
        + "\nPick the one that fits. Do not default to 'deadpan'. If none of "
          "them names what this record actually provokes, invent a new one: "
          "a single lower-case English feeling word (e.g. 'vindication', "
          "'dread'). It will be added to the palette."
        + "\n\nWrite the post and its comments."
    )
    return AUTHOR_SYSTEM, prompt


# How many other posts must appear between two posts by the same account.
# Left to itself the model funnels almost everything through one loud voice
# (it was Waluigi, every time), which makes the feed read like a blog.
# Length ceilings. Social posts, not essays -- the deleted batch read
# "like reading a book". Median post there was 230 characters.
POST_MAX_CHARS = 320
COMMENT_MAX_CHARS = 240

AUTHOR_COOLDOWN = 3

# The cooldown alone is not enough, and the 94-post feed proved it: a 3-post
# window lets one account legally take every fourth post, which is a 25%
# ceiling — and against 13 accounts an even split is 7.7%. So the loudest
# voice can be three times the size of everyone else while never once
# breaking the rule.
#
# This is the second, slower constraint: no account may hold more than this
# share of the whole feed. It only bites once an account is genuinely
# over-represented, so it never interferes with a small or new feed.
AUTHOR_MAX_SHARE = 0.18
# Below this many posts the share figure is noise (one post out of five is
# 20%), so the cap stays off and the cooldown does the work alone.
SHARE_FLOOR = 20


def author_shares() -> dict[str, float]:
    """What fraction of the feed each account currently holds."""
    posts = [p for p in _posts() if p.get("author")]
    if not posts:
        return {}
    counts: dict[str, int] = {}
    for post in posts:
        author = str(post.get("author"))
        counts[author] = counts.get(author, 0) + 1
    return {a: n / len(posts) for a, n in counts.items()}


def over_quota(exclude: str = "") -> list[str]:
    """Accounts that have exceeded their share of the feed.

    Returned alongside the cooldown list so an over-represented account is
    simply not offered, rather than being offered and then rejected — a
    rejection costs a whole generation round trip.
    """
    posts = [p for p in _posts() if p.get("author")]
    if len(posts) < SHARE_FLOOR:
        return []
    return [
        author for author, share in author_shares().items()
        if share > AUTHOR_MAX_SHARE and author != exclude
    ]

# The feed's emotional palette, now open-ended.
#
# Six tones was too coarse — every ambiguous post fell into "deadpan" and the
# mix panel showed one grey bar. Eighteen is better, but a fixed list has the
# same failure mode further out: the archive keeps producing records whose
# mood is genuinely not on it, and forcing those to "deadpan" throws away the
# most interesting thing about the post.
#
# So the list is a seed, not a limit. A pass that reaches for a tone the
# palette does not have mints it (see `mint_reaction`), and both this module
# and app/pages/wahwire/wahwire.js read the result from
# data/wahwire/reactions.json — which is what keeps the two from drifting.
REACTIONS_FILE = ROOT / "data" / "wahwire" / "reactions.json"

# Fallback only, for a missing or unreadable palette file.
SEED_REACTIONS = (
    "cheer", "rage", "grief", "smug", "alarm", "deadpan",
    "mourning", "defiant", "gloating", "fear", "awe", "disgust",
    "relief", "suspicion", "resolve", "mockery", "pride", "despair",
)

# Glyphs for minted tones, cycled by hash so a new reaction gets a stable face
# without the model having to pick an emoji (it picks badly, and a broken
# surrogate pair in a JSON store is a bad trade for a nicer icon).
_MINT_GLYPHS = ("💬", "🌀", "🜂", "❖", "◈", "⟡", "✦", "◐", "⚑", "❉")
_MINT_TONES = ("#6a7b8c", "#8d6e63", "#7986cb", "#4db6ac", "#9575cd",
               "#a1887f", "#4fc3f7", "#aed581", "#ff8a65", "#90a4ae")

_REACTIONS_CACHE: dict[str, Any] | None = None
_REACTION_LOCK = threading.Lock()


def _reactions_doc() -> dict[str, Any]:
    global _REACTIONS_CACHE
    if _REACTIONS_CACHE is None:
        doc = read_json(REACTIONS_FILE, default=None)
        if not isinstance(doc, dict) or not isinstance(doc.get("reactions"), dict):
            doc = {
                "version": 1,
                "note": "Seeded from SEED_REACTIONS after a missing palette file.",
                "reactions": {
                    name: {"glyph": "·", "label": name.title(), "tone": "#78909c",
                           "origin": "canon"}
                    for name in SEED_REACTIONS
                },
            }
        _REACTIONS_CACHE = doc
    return _REACTIONS_CACHE


def reactions() -> tuple[str, ...]:
    """Every reaction id currently in the palette."""
    return tuple(_reactions_doc().get("reactions", {}))


def mint_reaction(name: str, *, model: str = "", source: str = "") -> str | None:
    """Add a new emotion to the palette, returning its id.

    Guarded rather than open: the id has to look like a single feeling word.
    Without that the palette fills up with "reaction", "mixed_emotions" and
    whole sentences, and a palette that contains everything describes nothing.
    """
    slug = re.sub(r"[^a-z]+", "_", str(name).strip().lower()).strip("_")
    if not (3 <= len(slug) <= 18) or "_" in slug:
        return None
    if slug in {"reaction", "emotion", "feeling", "mood", "none", "other",
                "mixed", "neutral", "unknown", "various"}:
        return None

    with _REACTION_LOCK:
        doc = _reactions_doc()
        palette = doc.setdefault("reactions", {})
        if slug in palette:
            return slug
        index = sum(ord(c) for c in slug)
        palette[slug] = {
            "glyph": _MINT_GLYPHS[index % len(_MINT_GLYPHS)],
            "label": slug.title(),
            "tone": _MINT_TONES[index % len(_MINT_TONES)],
            "origin": "generated",
            "by": model,
            "source": source,
        }
        atomic_write_json(REACTIONS_FILE, doc)
    return slug


def _resolve_reaction(value: Any, *, model: str = "", source: str = "") -> str:
    """Map a proposed reaction onto a palette entry, minting if it is new."""
    slug = re.sub(r"[^a-z]+", "_", str(value or "").strip().lower()).strip("_")
    if not slug:
        return "deadpan"
    palette = reactions()
    if slug in palette:
        return slug

    # An inflection of an existing tone is the same tone: "rageful" is rage,
    # "pridefull" is pride, "disgusted" is disgust. Minting these would fill
    # the palette with grammatical variants of emotions it already has, which
    # is noise dressed up as range.
    for known in palette:
        if len(known) >= 4 and (slug.startswith(known) or known.startswith(slug)):
            return known

    # A near-miss is a spelling, not a new emotion. The cutoff sits in the
    # clear gap measured against the seed palette: misspellings score 0.80+
    # ("greif"→grief, "releif"→relief) while genuinely different feelings
    # score 0.73 and below ("dread", "sorrow", "contempt"), so nothing real
    # gets swallowed by a neighbour.
    close = difflib.get_close_matches(slug, list(palette), n=1, cutoff=0.78)
    if close:
        return close[0]

    return mint_reaction(slug, model=model, source=source) or "deadpan"


# Authors claimed by tasks that are mid-flight: prompted, or answered but not
# yet written. Without this the cooldown is unenforceable with more than one
# worker — two tasks read the same on-disk tail, both see waluigi is clear,
# and both legally choose him. The store only learns about the first at write
# time, by which point the second has already been validated and accepted.
#
# Ordered so the oldest claim can be dropped once it has aged past the window.
_INFLIGHT_AUTHORS: list[str] = []
# Its own lock, deliberately not `_WRITE_LOCK`: the re-check in
# `_author_apply()` runs while the store lock is held, and reusing it here
# would deadlock the writer against itself.
_INFLIGHT_LOCK = threading.Lock()


def _claim_author(author: str) -> None:
    """Reserve an author for a post that is about to be written."""
    with _INFLIGHT_LOCK:
        _INFLIGHT_AUTHORS.append(author)
        del _INFLIGHT_AUTHORS[:-AUTHOR_COOLDOWN]


def recent_authors(limit: int = AUTHOR_COOLDOWN) -> list[str]:
    """The accounts inside the cooldown window, most recent first.

    Covers both what is on disk and what is in flight. A post that has been
    generated but not yet written still counts — otherwise the window has a
    hole exactly the width of a generation round-trip, which is where every
    duplicate Waluigi post came through.
    """
    posts = sorted(
        (p for p in _posts() if p.get("author")),
        key=lambda p: p.get("order") or 0,
    )
    window = [str(p.get("author")) for p in posts[-limit:]][::-1]
    with _INFLIGHT_LOCK:
        claimed = list(reversed(_INFLIGHT_AUTHORS))
    # In-flight claims are more recent than anything on disk by definition, so
    # they go at the front and push the oldest on-disk post out of the window.
    # Duplicates are kept rather than collapsed: the list is the last `limit`
    # posts, and silently shortening it would widen the real cooldown.
    return (claimed + window)[:limit]


# ---------------------------------------------------------------------------
# Quality validators
#
# These exist because prompt instructions did not work. DISCUSS_SYSTEM already
# said "do not restate the post" and "a thread of agreement is not a thread",
# and the model produced 94 posts of exactly that. A rule the generator can
# ignore is not a rule, so each of the three observed failures is now checked
# in code and sent back for a real retry.
# ---------------------------------------------------------------------------

# Waluigi talks about himself in the third person. Nobody else does, but the
# habit sat in a shared voice dict and the model read it as house style, so
# Bowser started announcing "Bowser does not negotiate".
_SELF_REFERENCE_EXEMPT = {"waluigi", "wah_media_collective"}


def _display_names(author: str) -> list[str]:
    """The names an account might use for itself, longest first."""
    entry = voices().get(author) or {}
    names = {str(entry.get("name") or "").strip()}
    names.add(author.replace("_", " "))
    tail = author.split("_")[-1]
    if len(tail) > 3:
        names.add(tail)
    return sorted((n for n in names if len(n) > 3), key=len, reverse=True)


def _check_third_person(author: str, text: str) -> None:
    """Reject an account narrating itself in the third person.

    Only fires on a name used as a SUBJECT ("Bowser does not negotiate"), not
    on a mention ("they came for Bowser"), which is ordinary speech. The verb
    test keeps that distinction cheap and predictable.
    """
    if author in _SELF_REFERENCE_EXEMPT:
        return
    for name in _display_names(author):
        pattern = re.compile(
            rf"\b{re.escape(name)}\b\s+(?:is|was|does|did|has|had|will|would|"
            rf"says|said|thinks|knows|wants|needs|refuses|remembers|stands|"
            rf"walks|holds|takes|gives|sees|"
            rf"\w+s)\b",
            re.IGNORECASE,
        )
        if pattern.search(text):
            raise ValidationError(
                f"{author} refers to themselves in the third person "
                f"('{name}' as the subject of a sentence). Only Waluigi does "
                f"that. Rewrite in the first person."
            )


# Synonym families. Rewording is the failure mode we are actually chasing, and
# a paraphrase can share almost no tokens with its twin -- "something weird
# happened" against "something strange occurred" has a word overlap of 0.11,
# which no lexical metric will ever flag. Folding known synonyms onto a single
# representative is what makes the comparison see through the rewrite. This is
# not a thesaurus; it is the vocabulary this feed actually reaches for.
_SYNONYMS = {
    "weird": "strange", "odd": "strange", "bizarre": "strange",
    "unusual": "strange", "peculiar": "strange", "eerie": "strange",
    "happened": "occurred", "happen": "occurred", "happens": "occurred",
    "occur": "occurred", "occurring": "occurred", "transpired": "occurred",
    "took": "occurred", "unfolded": "occurred", "went": "occurred",
    "said": "stated", "says": "stated", "told": "stated", "claims": "stated",
    "claimed": "stated", "reported": "stated", "announced": "stated",
    "noted": "stated", "remarked": "stated", "mentioned": "stated",
    "big": "large", "huge": "large", "massive": "large", "enormous": "large",
    "vast": "large", "great": "large",
    "bad": "poor", "awful": "poor", "terrible": "poor", "dreadful": "poor",
    "grim": "poor", "dire": "poor",
    "good": "fine", "great": "fine", "excellent": "fine", "superb": "fine",
    "scared": "afraid", "scare": "afraid", "frightened": "afraid",
    "frighten": "afraid", "terrified": "afraid", "fear": "afraid",
    "worried": "afraid", "anxious": "afraid", "nervous": "afraid",
    "angry": "furious", "enraged": "furious", "livid": "furious",
    "irate": "furious", "mad": "furious",
    "died": "killed", "slain": "killed", "perished": "killed",
    "fell": "killed", "lost": "killed",
    "began": "started", "commenced": "started", "initiated": "started",
    "ended": "finished", "concluded": "finished", "ceased": "finished",
    "over": "finished", "done": "finished",
    "saw": "witnessed", "watched": "witnessed", "observed": "witnessed",
    "noticed": "witnessed", "spotted": "witnessed",
    "problem": "trouble", "issue": "trouble", "difficulty": "trouble",
    "crisis": "trouble", "disaster": "trouble", "mess": "trouble",
    "attack": "assault", "strike": "assault", "raid": "assault",
    "battle": "fight", "combat": "fight", "clash": "fight",
    "skirmish": "fight", "engagement": "fight",
    "soldier": "fighter", "warrior": "fighter", "troop": "fighter",
    "leader": "ruler", "king": "ruler", "lord": "ruler", "chief": "ruler",
    "kingdom": "realm", "territory": "realm", "land": "realm",
    "night": "evening", "yesterday": "evening", "tonight": "evening",
    "quickly": "fast", "rapidly": "fast", "swiftly": "fast",
    "think": "believe", "reckon": "believe", "suppose": "believe",
    "feel": "believe", "guess": "believe",
    "important": "significant", "crucial": "significant",
    "vital": "significant", "critical": "significant", "key": "significant",
}


def _normalise(text: str) -> str:
    """Strip everything that lets a reworded restatement look different."""
    text = re.sub(r"#\w+", " ", text.lower())
    text = re.sub(r"[^a-z0-9\s]", " ", text)
    # Filler that carries no information: two comments that differ only by
    # these are the same comment.
    filler = {
        "the", "a", "an", "is", "was", "are", "were", "be", "been", "being",
        "to", "of", "in", "on", "at", "for", "with", "and", "or", "but", "so",
        "that", "this", "these", "those", "it", "its", "as", "if", "then",
        "just", "really", "very", "quite", "some", "any", "all", "not",
        "i", "we", "you", "they", "he", "she", "there", "here", "what",
        "something", "someone", "anything", "thing", "things",
        "has", "had", "have", "will", "would", "can", "could", "may",
        "last", "now", "still", "about", "from", "by", "our", "their",
    }
    words = []
    for word in text.split():
        if word in filler:
            continue
        # Look the whole word up FIRST. Stemming ahead of the fold turns
        # "scared" into "scar", which then matches nothing -- the synonym
        # table is keyed on words people actually write.
        mapped = _SYNONYMS.get(word)
        if mapped is None:
            stem = word
            if len(word) > 4 and word.endswith("ing"):
                stem = word[:-3]
            elif len(word) > 4 and word.endswith("ed"):
                stem = word[:-2]
            elif len(word) > 4 and word.endswith("s") and not word.endswith("ss"):
                stem = word[:-1]
            mapped = _SYNONYMS.get(stem, stem)
        words.append(mapped)
    return " ".join(words)


def _too_similar(text: str, others: list[str], *, cutoff: float = 0.62) -> str:
    """Return the first near-duplicate, or ''.

    The observed failure was a whole thread where every reply said "something
    weird happened" in slightly different words. Exact-match dedup passed all
    of them.

    Three measures, because paraphrase defeats any single one:
      * character ratio  -- catches light edits and reordering
      * token overlap    -- catches "same words, new sentence"
      * short containment -- catches "your sentence plus four words"
    """
    mine = _normalise(text)
    if not mine:
        return ""
    my_words = set(mine.split())
    for other in others:
        theirs = _normalise(other)
        if not theirs:
            continue
        if difflib.SequenceMatcher(None, mine, theirs).ratio() >= cutoff:
            return other
        their_words = set(theirs.split())
        if my_words and their_words:
            union = my_words | their_words
            overlap = len(my_words & their_words) / len(union)
            # Two short remarks built from the same handful of content words
            # are the same remark, however the grammar is arranged.
            if overlap >= cutoff:
                return other
            if len(union) <= 12 and overlap >= 0.5:
                return other
        short, long = sorted((mine, theirs), key=len)
        if len(short) > 24 and short in long:
            return other
        # Sentence level. Two comments can open differently and still land on
        # the same move -- the deleted batch had a thread where two replies
        # closed on "what did YOU buy for YOURSELF today, Waluigi?" and "what
        # did YOU get today, Waluigi?". Whole-comment similarity misses that
        # because the first halves genuinely differ, but the thread still
        # reads as one voice asking one question twice.
        for mine_part in _sentences(text):
            for their_part in _sentences(other):
                a, b = _normalise(mine_part), _normalise(their_part)
                if len(a.split()) < 4 or len(b.split()) < 4:
                    continue
                if difflib.SequenceMatcher(None, a, b).ratio() >= 0.70:
                    return other
                aw, bw = set(a.split()), set(b.split())
                if len(aw & bw) / len(aw | bw) >= 0.62:
                    return other
    return ""


def _sentences(text: str) -> list[str]:
    """Split on sentence enders, keeping only parts worth comparing."""
    parts = re.split(r"[.!?]+", re.sub(r"#\w+", " ", text))
    return [p.strip() for p in parts if len(p.strip()) > 12]


# Openers that announce agreement and then stop. A post may agree, but it has
# to carry something after the agreement.
_AGREEMENT_ONLY = re.compile(
    r"^\W*(?:this|that|so much this|exactly|agreed|agree|same|indeed|"
    r"truly|absolutely|precisely|well said|so true|too true|very true|"
    r"facts|real|yes|yep|yeah|word|based|amen|hear hear|no notes|"
    r"couldn't have said it better|could not have said it better|"
    r"my thoughts exactly|100%|\+1)\W*$",
    re.IGNORECASE,
)


def _check_substance(text: str, source_text: str) -> None:
    """Reject a post that adds nothing the source already said.

    Three tells, all observed in the deleted batch: pure agreement, a
    paraphrase of the source event, and a comment that borrows so much of the
    source's vocabulary it is just a summary wearing a username.
    """
    stripped = re.sub(r"#\w+", "", text).strip()
    # Clause by clause as well as whole-string: "So true, well said." is two
    # agreements stitched together and slips past an anchored match.
    clauses = [c.strip() for c in re.split(r"[,.!;]+", stripped) if c.strip()]
    if _AGREEMENT_ONLY.match(stripped) or (
        clauses and all(_AGREEMENT_ONLY.match(c) for c in clauses)
    ):
        raise ValidationError(
            "agreement with no content. Say something the post does not "
            "already say: what it means for you, what it gets wrong, or what "
            "happens next."
        )
    if not source_text:
        return
    if _too_similar(stripped, [source_text], cutoff=0.58):
        raise ValidationError(
            "this restates the source event instead of responding to it. "
            "Add information, a reaction, a consequence, or a disagreement."
        )
    mine = set(_normalise(stripped).split())
    theirs = set(_normalise(source_text).split())
    if len(mine) >= 5 and len(mine - theirs) / len(mine) < 0.34:
        raise ValidationError(
            "almost every content word here is lifted from the source event. "
            "Write what this account thinks about it, in their own words."
        )


def _author_validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    author = str(raw.get("author", "")).strip()
    if author not in KNOWN_AUTHORS:
        raise ValidationError(f"unknown author {author!r}")
    blocked = recent_authors()
    if author in blocked:
        raise ValidationError(
            f"{author} posted within the last {AUTHOR_COOLDOWN} posts — "
            f"pick a different account. On cooldown: {', '.join(sorted(set(blocked)))}"
        )
    loud = over_quota()
    if author in loud:
        share = author_shares().get(author, 0)
        raise ValidationError(
            f"{author} already writes {share:.0%} of the feed (cap is "
            f"{AUTHOR_MAX_SHARE:.0%}) — pick an account that rarely posts. "
            f"Over quota: {', '.join(sorted(loud))}"
        )
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

    # Length ceiling. These are social posts, not essays: the archivist's
    # complaint about the deleted batch was that reading the feed was "like
    # reading a book". The old batch ran to 531 characters with a median of
    # 230, so 320 keeps the typical post untouched and forces only the
    # genuinely bloated ones to be rewritten.
    if len(content) > POST_MAX_CHARS:
        raise ValidationError(
            f"post is {len(content)} characters; keep it under "
            f"{POST_MAX_CHARS}. Cut it to the one thing this character "
            f"actually wants to say. Do not summarise the event."
        )

    # The three quality gates. Each one is a failure that actually shipped in
    # the batch the archivist deleted, so each is checked rather than merely
    # requested in the prompt.
    _check_third_person(author, content)
    record = task.payload.get("record") or {}
    _check_substance(content, " ".join(str(record.get(f, "")) for f in
                                       ("summary", "description", "text", "title")))
    existing = [str(p.get("content", "")) for p in _posts()[-60:]]
    twin = _too_similar(content, existing, cutoff=0.66)
    if twin:
        raise ValidationError(
            "this post is a reworded version of one already on the feed: "
            f"\"{twin[:110]}\". Write about something the feed has not covered, "
            "or take a different position on it."
        )

    try:
        likes = max(0, min(9000, int(raw.get("likes", 0))))
    except (TypeError, ValueError):
        likes = 0

    model = str(task.payload.get("model", ""))
    reaction = _resolve_reaction(
        raw.get("reaction"), model=model,
        source=str(task.payload.get("record", {}).get("id", "")),
    )

    tags: list[str] = []
    for candidate in list(raw.get("tags") or []) + salvaged:
        if not isinstance(candidate, str):
            continue
        tag = candidate.strip().lstrip("#").lower()
        if 2 <= len(tag) <= 20 and tag not in tags:
            tags.append(tag)
    tags = tags[:4]

    # Comments are a bonus, never a reason to lose the post: anything
    # malformed is dropped individually and the post still lands.
    comments: list[dict[str, Any]] = []
    seen_comment_authors: list[str] = []
    for entry in (raw.get("comments") or [])[:6]:
        if not isinstance(entry, dict):
            continue
        c_author = str(entry.get("author", "")).strip()
        if c_author not in KNOWN_AUTHORS or c_author == author:
            continue
        c_text = entry.get("content")
        if not isinstance(c_text, str):
            continue
        c_text = " ".join(re.sub(r"#\w+", " ", c_text).split())
        if not (10 <= len(c_text) <= COMMENT_MAX_CHARS):
            continue
        try:
            c_likes = max(0, min(4000, int(entry.get("likes", 0))))
        except (TypeError, ValueError):
            c_likes = 0
        # The same three quality gates the discuss pass applies. A post can
        # arrive with its own thread attached, and that inline path is where
        # the deleted batch's worst threads came from -- four replies saying
        # one thing four ways. A bad comment is dropped rather than failing
        # the whole post: the post itself may be fine, and wahwire-discuss
        # refills thin threads later under exactly these same checks.
        try:
            _check_third_person(c_author, c_text)
            _check_substance(c_text, content)
        except ValidationError:
            continue
        if _too_similar(c_text, [c["content"] for c in comments] + [content]):
            continue

        c_reaction = _resolve_reaction(entry.get("reaction"), model=model)
        # A reply only makes sense if that person is already in the thread.
        reply_to = str(entry.get("replyTo", "")).strip()
        if reply_to not in seen_comment_authors:
            reply_to = ""
        comments.append({
            "id": f"c{len(comments) + 1}",
            "author": c_author,
            "content": c_text,
            "likes": c_likes,
            "reaction": c_reaction,
            "replyTo": reply_to,
        })
        seen_comment_authors.append(c_author)

    return {
        "author": author, "content": content, "likes": likes,
        "tags": tags, "reaction": reaction, "comments": comments,
    }


def _author_repair(task: Task, raw: dict[str, Any], why: str) -> dict[str, Any] | None:
    """Reassign a post whose author is on cooldown.

    Only the cooldown is repaired here. It is a scheduling constraint, not a
    judgement about the writing: the post itself is finished and good, and the
    model has simply reached for the loudest voice again after being told
    three times not to. Choosing a different account in code costs nothing and
    saves the record.

    A short post is a different matter — that is the model under-delivering,
    and quietly padding it would be the tool writing the archive's content.
    Those still fail.
    """
    if "cooldown" not in why and "feed" not in why:
        return None

    blocked = set(recent_authors())
    blocked.add(str(raw.get("author", "")).strip())
    blocked.update(over_quota())
    available = [a for a in KNOWN_AUTHORS if a not in blocked]
    if not available:
        # Every account is either on cooldown or over quota. The cooldown is
        # the harder rule (it is visible on screen as two posts in a row), so
        # relax the share cap rather than lose the record.
        available = [
            a for a in KNOWN_AUTHORS
            if a not in set(recent_authors()) | {str(raw.get("author", "")).strip()}
        ]
    if not available:
        return None

    fixed = dict(raw)
    # Prefer whoever has been quiet longest, so the reassignment actively
    # widens the cast instead of settling on the next name in the list.
    posts = sorted(
        (p for p in _posts() if p.get("author")),
        key=lambda p: p.get("order") or 0,
    )
    last_seen = {a: -1 for a in available}
    for index, post in enumerate(posts):
        author = str(post.get("author"))
        if author in last_seen:
            last_seen[author] = index
    fixed["author"] = min(available, key=lambda a: last_seen[a])

    # A comment by the new author would now be a reply to themselves.
    comments = fixed.get("comments")
    if isinstance(comments, list):
        fixed["comments"] = [
            c for c in comments
            if not (isinstance(c, dict) and c.get("author") == fixed["author"])
        ]
    return fixed


def _author_apply(task: Task, data: dict[str, Any]) -> TaskResult:
    record = task.payload["record"]
    rid = record.get("id")
    post_id = f"wahwire_{rid}"

    with _WRITE_LOCK:
        store = _load()
        posts = store.setdefault("posts", [])
        if any(p.get("id") == post_id for p in posts):
            return TaskResult(task=task, ok=False, detail="post already exists")

        # Re-check the cooldown at the only moment it can be checked honestly.
        # Validation ran against the window as it stood when the reply came
        # back; another worker may have written a post by this author in the
        # gap. Writing anyway is what let the same voice appear twice in a
        # row, so the post goes back to the pool for a different account
        # instead — the record still gets covered, just not by this one.
        written = sorted(
            (p for p in posts if p.get("author")),
            key=lambda p: p.get("order") or 0,
        )
        # The share cap is re-checked here for the same reason as the
        # cooldown: two workers can both pass validation before either writes.
        if len(written) >= SHARE_FLOOR:
            tally = sum(1 for p in written if p.get("author") == data["author"])
            if (tally + 1) / (len(written) + 1) > AUTHOR_MAX_SHARE:
                return TaskResult(
                    task=task, ok=False,
                    detail=f"{data['author']} is over the feed share cap",
                    retryable=True,
                    reason=(
                        f"{data['author']} already writes too much of the feed "
                        f"(cap is {AUTHOR_MAX_SHARE:.0%}) — pick an account "
                        "that rarely posts."
                    ),
                )

        window = {str(p.get("author")) for p in written[-AUTHOR_COOLDOWN:]}
        if data["author"] in window:
            return TaskResult(
                task=task, ok=False,
                detail=(
                    f"{data['author']} was claimed by another worker inside the "
                    f"{AUTHOR_COOLDOWN}-post cooldown"
                ),
                retryable=True,
                reason=(
                    f"{data['author']} posted within the last {AUTHOR_COOLDOWN} "
                    f"posts — pick a different account. On cooldown: "
                    f"{', '.join(sorted(window))}"
                ),
            )
        _claim_author(data["author"])
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
            "comments": data.get("comments") or [],
        }
        entry.update(provenance("wahwire", task.payload.get("model", "")))
        posts.append(entry)
        atomic_write_json(STORE, store)

    n_comments = len(data.get("comments") or [])
    return TaskResult(
        task=task, ok=True,
        detail=(
            f"new post by {data['author']} ({data['likes']} likes, "
            f"{n_comments} comment(s))"
        ),
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
    repair=_prune_repair,
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
    repair=_author_repair,
)

# --------------------------------------------------------------------------
# stage 2 — discuss
#
# Authoring covers a record with one voice. That is a wire, not a feed: the
# nineteen legacy posts and every newly authored one sat there with nobody
# answering them, which is the least social a social feed can be.
#
# This pass goes back to posts that already exist — including the hand-written
# legacy ones the generator never touched — and adds the argument underneath.
# It is deliberately separate from authoring rather than folded into it:
# a thread written at the same moment as its post is one author imagining a
# reaction, while a thread written later can be seeded with what the rest of
# the feed went on to say.
# --------------------------------------------------------------------------

# Threads shorter than this are candidates for more discussion.
DISCUSS_TARGET = 3
# Never grow a thread past this, however many passes run over it.
DISCUSS_CEILING = 8

DISCUSS_SYSTEM = """You write the comment thread under a post on WAHwire, an in-world social
feed inside a tabletop campaign archive.

You are given ONE existing post and the accounts available to reply with. Write the
replies that post would actually have drawn: people who were there disputing the
detail, rivals scoring points, someone who lost something staying quiet about the part
that matters. Comments may reply to each other.

RULES
- Reply only as accounts from the list. NEVER reply as the post's own author.
- 1 to 4 comments. Fewer good ones beat four filler ones.
- Each comment 10-240 characters, in that character's voice, no hashtags.
- Short is better. One reaction per comment, not a paragraph.
- Disagree where disagreement is earned. A thread of agreement is not a thread.
- Do not restate the post. Add something: a correction, a consequence, an accusation,
  a detail only that person would know.
- `replyTo` is optional and must name an account that already commented ABOVE it.
- `reaction` is one of the listed ids, or a new single lower-case feeling word if
  none of them fits.
- Invent no events. Work only from what the post and the record say.

Return ONLY JSON:
{"comments":[{"author":"<id>","content":"<text>","likes":<0-4000>,
              "reaction":"<id>","replyTo":"<id or empty>"}]}"""


def _thin_threads(limit: int = 400) -> list[dict[str, Any]]:
    """Live posts whose comment thread is thinner than the target."""
    out = []
    for post in _posts():
        if post.get("status") == "retired":
            continue
        comments = post.get("comments")
        if not isinstance(comments, list):
            comments = []
        if len(comments) < DISCUSS_TARGET:
            out.append(post)
    return out[:limit]


def _discuss_tasks(count: int) -> list[Task]:
    return [
        Task(
            system_id="wahwire-discuss",
            key=f"discuss:{p['id']}",
            label=f"wahwire thread · {p['id']}",
            payload={"id": p["id"], "post": p},
            phase="discuss",
        )
        for p in _thin_threads()[:count]
    ]


def _discuss_prompt(task: Task) -> tuple[str, str]:
    post = task.payload["post"]
    author = str(post.get("author", ""))
    who = voices()

    existing = [c for c in (post.get("comments") or []) if isinstance(c, dict)]

    # Everyone except the post's author may reply.
    lines = []
    for author_id in KNOWN_AUTHORS:
        if author_id == author:
            continue
        v = who.get(author_id)
        if v:
            bits = [b for b in (v["title"], v["affiliation"]) if b]
            head = f"  {author_id} — {v['name']}"
            if bits:
                head += f" ({'; '.join(bits)})"
            lines.append(head)
        else:
            note = ROLE_NOTES.get(author_id, "")
            lines.append(f"  {author_id}" + (f" — {note}" if note else ""))

    # The record the post is about, so replies can carry real detail rather
    # than reacting to the prose in a vacuum.
    record_note = ""
    targets = link_targets()
    for link in post.get("links") or []:
        key = link.get("id") if isinstance(link, dict) else link
        target = targets.get(str(key))
        if target:
            record_note = (
                f"\nThe post is about this record:\n"
                f"  {target.get('name', key)} — {str(target.get('summary', ''))[:600]}\n"
            )
            break

    thread_note = ""
    if existing:
        thread_note = "\nAlready in the thread (do not repeat these points):\n" + "\n".join(
            f"  {c.get('author')}: {str(c.get('content', ''))[:200]}" for c in existing
        ) + "\n"

    poster = who.get(author, {}).get("name", author)
    prompt = (
        f"POST by {author} ({poster}):\n"
        f"\"{post.get('content', '')}\"\n"
        f"{record_note}{thread_note}\n"
        f"ACCOUNTS you may reply as:\n" + "\n".join(lines)
        + f"\n\nREACTION IDS: {', '.join(reactions())}"
        + "\nIf none fits, invent one single lower-case feeling word."
        + f"\n\nWrite {DISCUSS_TARGET - len(existing)} to 4 comments."
    )
    return DISCUSS_SYSTEM, prompt


def _discuss_validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    post = task.payload["post"]
    author = str(post.get("author", ""))
    model = str(task.payload.get("model", ""))

    existing = [c for c in (post.get("comments") or []) if isinstance(c, dict)]
    room = DISCUSS_CEILING - len(existing)
    if room <= 0:
        raise ValidationError("thread already at its ceiling")

    # Anyone already in the thread can be replied to; so can the accounts
    # added by this batch, in order.
    seen_authors = [str(c.get("author")) for c in existing if c.get("author")]
    # Every comment already in the thread, plus the post itself: a reply that
    # merely rewords either one is not a reply. Exact-match dedup used to be
    # the only check here, which is how a thread shipped where all four
    # replies said "something weird happened" in different words.
    seen_text = [str(c.get("content", "")) for c in existing]
    post_text = str(post.get("content", ""))

    comments: list[dict[str, Any]] = []
    rejected: list[str] = []
    for entry in (raw.get("comments") or [])[:4]:
        if len(comments) >= room:
            break
        if not isinstance(entry, dict):
            continue
        c_author = str(entry.get("author", "")).strip()
        if c_author not in KNOWN_AUTHORS or c_author == author:
            continue
        c_text = entry.get("content")
        if not isinstance(c_text, str):
            continue
        c_text = " ".join(re.sub(r"#\w+", " ", c_text).split())
        if not (10 <= len(c_text) <= COMMENT_MAX_CHARS):
            continue

        # Quality gates, in the order that fails cheapest first.
        try:
            _check_third_person(c_author, c_text)
            _check_substance(c_text, post_text)
        except ValidationError as exc:
            rejected.append(f"{c_author}: {exc}")
            continue
        twin = _too_similar(c_text, seen_text + [post_text])
        if twin:
            rejected.append(
                f"{c_author}: reworded restatement of \"{twin[:80]}\""
            )
            continue
        try:
            c_likes = max(0, min(4000, int(entry.get("likes", 0))))
        except (TypeError, ValueError):
            c_likes = 0
        reply_to = str(entry.get("replyTo", "")).strip()
        if reply_to not in seen_authors:
            reply_to = ""
        comments.append({
            "author": c_author,
            "content": c_text,
            "likes": c_likes,
            "reaction": _resolve_reaction(entry.get("reaction"), model=model),
            "replyTo": reply_to,
        })
        seen_authors.append(c_author)
        seen_text.append(c_text)

    if not comments:
        detail = (" Rejected: " + "; ".join(rejected[:3])) if rejected else ""
        raise ValidationError(
            "no usable comments — each needs an account from the list "
            "(not the post's own author) and 10-240 characters that add "
            "something the post and the thread do not already say."
            + detail
        )
    return {"comments": comments}


def _discuss_repair(task: Task, raw: dict[str, Any], why: str) -> dict[str, Any] | None:
    """Salvage a thread whose comments are good but whose accounts are not.

    The common failure is the model inventing a plausible-sounding handle, or
    answering in the post author's own voice. Both are label problems: the
    comment text is written and usable, and only the name on it is wrong.
    Reassigning to a real account that is not the post's author keeps the
    writing and fixes the attribution.

    Comments that fail on LENGTH are left out -- too short means the model
    under-delivered, and padding them here would be the tool writing the
    archive's content. If nothing survives, the task stays rejected.
    """
    if "no usable comments" not in why:
        return None

    author = str(task.payload.get("author", "")).strip()
    post = next((p for p in _posts() if p.get("id") == task.payload.get("id")), None)
    existing = [c for c in ((post or {}).get("comments") or []) if isinstance(c, dict)]
    seen_text = [str(c.get("content", "")) for c in existing]
    post_text = str((post or {}).get("content", ""))

    # Spread reassignments over the quietest accounts rather than always
    # picking the first name in the list.
    used = [str(c.get("author")) for c in existing if c.get("author")]
    pool = sorted(
        (a for a in KNOWN_AUTHORS if a != author),
        key=lambda a: used.count(a),
    )
    if not pool:
        return None

    fixed_comments: list[dict[str, Any]] = []
    for index, entry in enumerate((raw.get("comments") or [])[:4]):
        if not isinstance(entry, dict):
            continue
        text = entry.get("content")
        if not isinstance(text, str):
            continue
        text = " ".join(re.sub(r"#\w+", " ", text).split())
        if not (10 <= len(text) <= COMMENT_MAX_CHARS):
            continue  # a length failure is the model's, not a label's
        # Repair reassigns AUTHOR LABELS. It must never launder a comment past
        # the quality gates: a reworded restatement is still one under a
        # different name, so these drop out here exactly as they do in
        # validation and the task goes back to the pool for a real retry.
        if _too_similar(text, seen_text + [post_text]):
            continue
        candidate = str(entry.get("author", "")).strip()
        if candidate not in KNOWN_AUTHORS or candidate == author:
            candidate = pool[index % len(pool)]
        try:
            _check_third_person(candidate, text)
            _check_substance(text, post_text)
        except ValidationError:
            continue
        replacement = dict(entry)
        replacement["author"] = candidate
        replacement["content"] = text
        fixed_comments.append(replacement)
        seen_text.append(text)

    if not fixed_comments:
        return None
    fixed = dict(raw)
    fixed["comments"] = fixed_comments
    return fixed


def _discuss_apply(task: Task, data: dict[str, Any]) -> TaskResult:
    post_id = task.payload["id"]
    with _WRITE_LOCK:
        store = _load()
        post = next(
            (p for p in store.get("posts", []) if p.get("id") == post_id), None
        )
        if post is None:
            return TaskResult(task=task, ok=False, detail="post not found on write")

        comments = post.get("comments")
        if not isinstance(comments, list):
            comments = []

        # Re-check against the store rather than the snapshot in the payload:
        # another worker may have threaded this same post in the meantime.
        have = {" ".join(str(c.get("content", "")).lower().split()) for c in comments
                if isinstance(c, dict)}
        added = 0
        for comment in data["comments"]:
            if len(comments) >= DISCUSS_CEILING:
                break
            if " ".join(comment["content"].lower().split()) in have:
                continue
            entry = dict(comment)
            # Ids are assigned at write time so they stay unique across passes.
            entry["id"] = f"c{len(comments) + 1}"
            entry["generated"] = True
            comments.append(entry)
            have.add(" ".join(comment["content"].lower().split()))
            added += 1

        if not added:
            return TaskResult(
                task=task, ok=False,
                detail="every comment was already in the thread",
            )

        post["comments"] = comments
        atomic_write_json(STORE, store)

    return TaskResult(
        task=task, ok=True,
        detail=f"{added} comment(s) added to {post_id} ({len(comments)} total)",
        record=data, changed_paths=[str(STORE.relative_to(ROOT))],
    )


DISCUSS_SPEC = SystemSpec(
    id="wahwire-discuss",
    title="WAHwire · thread existing posts",
    summary="Add comments and replies to posts that nobody has answered.",
    # Stage 1, not 2, even though it reads what stage 1 writes. Stages are a
    # hard gate: a stage-2 system waits for every stage-1 system to drain, and
    # stage 1 holds ~3,300 shop/ability/reputation tasks, so threading would
    # never have run at all. Sharing stage 1 lets it interleave — it threads
    # the pruned legacy posts immediately and picks up newly authored ones as
    # they land. It only depends on stage 0, which does gate it correctly:
    # no point threading a post that is about to be retired.
    stage=1,
    next_tasks=_discuss_tasks,
    build_prompt=_discuss_prompt,
    validate=_discuss_validate,
    apply=_discuss_apply,
    repair=_discuss_repair,
    pending=lambda: len(_thin_threads()),
)


# ============================================================================
# PROFILES — who each account is, and who they follow
# ============================================================================
#
# The feed shows posts; a profile shows a person. Clicking a name has to lead
# somewhere, and "somewhere" needs three things the post store does not hold:
# a bio in the account's own register, a location line, and a follow list.
#
# The follow graph is the part worth generating rather than hard-coding. Who
# reads whom is a political statement in this setting — the Iron Legion colonel
# following the werewolf alpha means something, and a random graph would say
# something false. So each account is asked who it follows and why, and the
# edges are validated against the roster.

PROFILES_FILE = ROOT / "data" / "wahwire" / "profiles.json"

_PROFILE_LOCK = threading.Lock()
_PROFILES_CACHE: dict[str, Any] | None = None


def _profiles_doc() -> dict[str, Any]:
    global _PROFILES_CACHE
    if _PROFILES_CACHE is None:
        doc = read_json(PROFILES_FILE, default=None)
        if not isinstance(doc, dict) or not isinstance(doc.get("profiles"), dict):
            doc = {
                "version": 1,
                "note": (
                    "WAHwire account profiles. `follows` is a list of account "
                    "ids; `followReasons` explains each edge in one line."
                ),
                "profiles": {},
            }
        _PROFILES_CACHE = doc
    return _PROFILES_CACHE


def profiles() -> dict[str, Any]:
    return dict(_profiles_doc().get("profiles", {}))


def _unprofiled() -> list[str]:
    """Accounts with no profile yet, in roster order."""
    have = _profiles_doc().get("profiles", {})
    return [a for a in KNOWN_AUTHORS if a not in have]


PROFILE_SYSTEM = """You write the profile page for an account on WAHwire, an in-world social
feed in a Mario-derived dark-fantasy setting.

Return ONE JSON object and nothing else:

{
  "bio": "<the account's own self-description, 60-220 characters, first person or in their register>",
  "location": "<a short place or posting-from line, 3-40 characters>",
  "joined": "<a short in-world join note, 3-40 characters>",
  "follows": [
    {"id": "<account id from the list>", "why": "<one short line, under 90 characters>"}
  ]
}

RULES
- The bio is written BY the account, not about it. Match their voice: a general
  writes like a general, a frightened civilian writes like a frightened civilian.
- Follow 2 to 5 accounts. Only ids from the ACCOUNTS list. Never follow yourself.
- Who someone follows is a political fact. An enemy may be followed to watch
  them; say so in "why". Do not make everyone follow everyone.
- No hashtags, no emoji, no markdown, no line breaks."""


def _profile_tasks(count: int) -> list[Task]:
    out: list[Task] = []
    for account in _unprofiled()[:count]:
        who = voices().get(account, {})
        out.append(Task(
            system_id="wahwire-profile",
            key=f"profile:{account}",
            label=f"profile · {who.get('name', account)}",
            payload={"account": account},
        ))
    return out


def _profile_prompt(task: Task) -> tuple[str, str]:
    account = task.payload["account"]
    who = voices()

    me = who.get(account)
    if me:
        bits = [b for b in (me["title"], me["affiliation"]) if b]
        self_note = f"{me['name']}" + (f" ({'; '.join(bits)})" if bits else "")
        if me["summary"]:
            self_note += f"\n{me['summary'][:900]}"
    else:
        self_note = ROLE_NOTES.get(account, account.replace("_", " "))

    lines = []
    for other in KNOWN_AUTHORS:
        if other == account:
            continue
        v = who.get(other)
        if v:
            bits = [b for b in (v["title"], v["affiliation"]) if b]
            lines.append(f"  {other} — {v['name']}"
                         + (f" ({'; '.join(bits)})" if bits else ""))
        else:
            note = ROLE_NOTES.get(other, "")
            lines.append(f"  {other}" + (f" — {note}" if note else ""))

    # Their own posts, so the bio matches what they actually say on the feed.
    mine = [p for p in _posts()
            if p.get("author") == account and p.get("status") != "retired"]
    post_note = ""
    if mine:
        post_note = "\nWhat this account has posted:\n" + "\n".join(
            f"  \"{str(p.get('content', ''))[:160]}\"" for p in mine[:4]
        ) + "\n"

    prompt = (
        f"ACCOUNT: {account}\n{self_note}\n{post_note}\n"
        f"ACCOUNTS they could follow:\n" + "\n".join(lines)
    )
    return PROFILE_SYSTEM, prompt


def _profile_validate(task: Task, raw: dict[str, Any]) -> dict[str, Any]:
    account = task.payload["account"]

    bio = raw.get("bio")
    if not isinstance(bio, str):
        raise ValidationError("no bio returned")
    bio = " ".join(re.sub(r"#\w+", " ", bio).split())
    if not (40 <= len(bio) <= 260):
        raise ValidationError(
            f"bio is {len(bio)} characters, needs to be between 40 and 260"
        )

    def _short(value: Any, limit: int = 40) -> str:
        text = " ".join(str(value or "").split())
        return text[:limit]

    follows: list[str] = []
    reasons: dict[str, str] = {}
    for entry in (raw.get("follows") or [])[:6]:
        if isinstance(entry, dict):
            fid = str(entry.get("id", "")).strip()
            why = _short(entry.get("why"), 90)
        else:
            fid, why = str(entry).strip(), ""
        # A follow edge pointing at nobody is worse than no edge: the profile
        # page would render a dead link. Fold near-misses, drop the rest.
        if fid not in KNOWN_AUTHORS:
            near = difflib.get_close_matches(fid, KNOWN_AUTHORS, n=1, cutoff=0.86)
            if not near:
                continue
            fid = near[0]
        if fid == account or fid in follows:
            continue
        follows.append(fid)
        if why:
            reasons[fid] = why

    if not follows:
        raise ValidationError(
            "no usable follows — needs 2 to 5 account ids from the list"
        )

    return {
        "bio": bio,
        "location": _short(raw.get("location")),
        "joined": _short(raw.get("joined")),
        "follows": follows[:5],
        "followReasons": {k: v for k, v in reasons.items() if k in follows[:5]},
    }


def _profile_apply(task: Task, data: dict[str, Any]) -> TaskResult:
    account = task.payload["account"]
    model = str(task.payload.get("model", ""))

    with _PROFILE_LOCK:
        doc = _profiles_doc()
        entry = dict(data)
        # A profile is a whole generated record, so it carries the full stamp
        # (status + _generated), same as an authored post.
        entry.update(provenance("wahwire-profile", model))
        doc.setdefault("profiles", {})[account] = entry
        atomic_write_json(PROFILES_FILE, doc)

    return TaskResult(
        task=task, ok=True,
        detail=f"profile for {account}, following {len(data['follows'])}",
        record=data, changed_paths=[str(PROFILES_FILE.relative_to(ROOT))],
    )


def _profile_repair(task: Task, raw: dict[str, Any], why: str) -> dict[str, Any] | None:
    """Salvage a profile whose follow list was the only broken part.

    A good bio thrown away because the model invented one account id is the
    exact waste this pass exists to avoid. If it named nobody real, fall back
    to the accounts this one has actually talked to on the feed.
    """
    if "no usable follows" not in why:
        return None

    account = task.payload["account"]
    fixed = dict(raw)

    # Who this account has replied to, and who has replied to it — a follow
    # graph derived from real interactions rather than invented.
    partners: list[str] = []
    for post in _posts():
        comments = [c for c in (post.get("comments") or []) if isinstance(c, dict)]
        authors = [str(post.get("author") or "")] + [
            str(c.get("author") or "") for c in comments
        ]
        if account not in authors:
            continue
        for other in authors:
            if other and other != account and other in KNOWN_AUTHORS \
                    and other not in partners:
                partners.append(other)

    if not partners:
        return None

    fixed["follows"] = [{"id": p, "why": "Answers them on the wire."}
                        for p in partners[:3]]
    return fixed


PROFILE_SPEC = SystemSpec(
    id="wahwire-profile",
    title="WAHwire · account profiles",
    summary="Write each account's bio and decide who it follows.",
    # Stage 1 for the same reason as the discussion pass: stage 2 never runs
    # while stage 1 still holds thousands of tasks. Profiles read posts but do
    # not depend on any particular post existing.
    stage=1,
    next_tasks=_profile_tasks,
    build_prompt=_profile_prompt,
    validate=_profile_validate,
    apply=_profile_apply,
    pending=lambda: len(_unprofiled()),
    repair=_profile_repair,
)

SPECS = [PRUNE_SPEC, AUTHOR_SPEC, DISCUSS_SPEC, PROFILE_SPEC]
