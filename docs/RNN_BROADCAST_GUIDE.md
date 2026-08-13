# Writing the Rakasha News Network

The RNN is the in-world news broadcast that reads the campaign back to itself.
It is written by the Rakasha desk — **Whisper-in-Wind**, Death Speaker of the
Spirit-Walker Clan, on anchor; **Acolyte Dan**, Runner of the Cold Roads, in the
field — and it exists because a wiki full of filings has no voice telling you
which of them mattered.

**It is a news programme. It only works when it has news.**

---

## The batching rule (this replaced the weekly rule)

> **One episode per ~10 filed events. Not one episode per event.**

The old cadence was "a broadcast every week in which applicable new events
exist." In practice that meant an episode could be triggered by a single
filing, and a single filing does not make a broadcast — it makes one story read
out slowly by two people who have nothing to follow it with. Episode 002 is the
warning: it was cut off the back of one large event plus whatever else could be
scraped together, and the seams show.

**Episode 002 must not become the model.** A single news event is not an
episode.

### What buys an episode

| Trigger | Cut an episode? |
|---|---|
| **10 or more events on the pending list** | **Yes** — this is the normal trigger |
| 6–9 pending, and several are major | Judgement call. Read the pending list end to end. If you can see six segments with distinct angles, cut it |
| Fewer than 6 pending | **No.** Let the list grow |
| 1 event, however large | **No.** Add it to the list |
| A month has passed with 4+ pending and no episode | Cut it — the desk going quiet for a season is its own problem |

The number is a threshold, not a quota. **Ten weak events do not beat six strong
ones.** The question the trigger is really asking is: *is there enough here to
make a programme that is worth watching end to end?*

---

## The pending list

`tools/rnn-scripts/pending-news-articles.json`

Every event filed goes on this list, at the moment it is filed (step 7 of the
[filing process](SESSION_FILING_PROCESS.md)). The list is the desk's inbox.

```json
{
  "_comment": "Events filed but not yet aired on RNN. At ~10, cut an episode.",
  "threshold": 10,
  "pending": [
    { "id": "the_mount_ebot_expedition", "filed": "2026-08-13", "note": "wrong mountain, one T" }
  ]
}
```

**The cycle:**

```
file an event      → append {id, filed, note} to pending[]
pending reaches 10 → write tools/rnn-scripts/epNNN.json covering them
episode built      → clear pending[] to [] and record the episode id in lastEpisode
```

Clearing the list is part of cutting the episode, not a separate chore. A
pending list that still holds aired events will trigger a second episode about
the same news.

**Cross-check before writing:** `python3 tools/build-rnn-broadcast.py --unaired`
lists every event that has never appeared in any episode's `sourceEvents`. The
pending file is the intent; `--unaired` is the ground truth. If they disagree,
`--unaired` is right.

---

## Writing the episode

`tools/rnn-scripts/epNNN.json` is hand-written. The build script times the
lines and validates the references; **it does not invent prose.**

```json
{
  "id": "rnn-003",
  "number": 3,
  "title": "…",
  "airWeek": "1040-AETHEL-W4",
  "recordedOn": "YYYY-MM-DD",
  "huntDay": "AETHEL 28, 1040 BF",
  "covering": "Aethel 18 – 27, 1040 BF",
  "anchorName": "Whisper-in-Wind",
  "anchorRole": "Death Speaker, Spirit-Walker Clan",
  "fieldName": "Acolyte Dan",
  "fieldRole": "Runner of the Cold Roads",
  "sourceEvents": ["…"],
  "ticker": ["ALL-CAPS HEADLINE", "…"],
  "segments": [
    {
      "slug": "COLD OPEN",
      "type": "titlecard",
      "title": "Rakasha News Network",
      "lines": [ { "expression": "normal", "text": "…" } ]
    }
  ]
}
```

`expression` must name a PNG in `Reputation-Matrix2/animation_frames/`. Every
`sourceEvents` id must resolve in `events.json`. The build fails loudly on both.

### Shape of a good episode

| Segment | Job | Lines |
|---|---|---:|
| **COLD OPEN** | The desk's liturgy, then the week's thesis in one sentence | 2 |
| **LEAD STORY** | The single biggest thing that happened | 5–7 |
| **3–5 middle segments** | One per remaining major event, each with its own angle | 4–5 |
| **FIELD REPORT** | Acolyte Dan, on the ground, first person, present tense | 3–4 |
| **WIND WHISPERS** | The small stuff, rumour-shaped, one line per item | 4 |
| **SIGN OFF** | Close on the thesis. One instruction to the audience | 2 |

Six to ten segments. Under six and it is a bulletin, not an episode — which is
the exact failure the batching rule exists to prevent.

### Voice

The Rakasha are not neutral observers. They are a jungle culture with their own
names for everything and no interest in the party's self-image.

- **Their nouns, not ours.** *The yellow one they call Wario.* *The green
  plumber.* *The sky-machine.* *Iron-Hides.* *Spark-Weaver.* Never "helicopter,"
  never "the Iron Legion," never a player's framing of their own character.
- **Death Speaker register.** Whisper-in-Wind reports events as things that
  happened to bodies. Plain, cold, physical, unimpressed.
- **The Hunt is the frame.** Iron rusts. Flesh rots. Maps lie. Only the Hunt
  remains.
- **No wiki vocabulary.** Nobody on this desk says "event," "filing," "XP,"
  "session," or "canon."
- **One editorial line per segment, maximum.** The desk judges; it does not
  lecture.

### One angle per segment

Each segment answers a different question. Two segments that both answer *what
happened* are one segment padded out. Angles that work: what it cost, who is
now exposed, what the audience should do about it, who is lying, what the desk
cannot verify.

---

## Build and verify

```bash
python3 tools/build-rnn-broadcast.py --unaired   # what the desk still owes
python3 tools/build-rnn-broadcast.py --check     # validate, write nothing
python3 tools/build-rnn-broadcast.py             # build + splice the READMEs
```

The build writes `Reputation-Matrix2/data/rnn-broadcasts.js` and splices the
"Last Week on the Rakasha News Network" block into `README.md` and
`Reputation-Matrix2/README.md` between the `RNN:LAST-WEEK` markers.

> **Never hand-edit `rnn-broadcasts.js` or the spliced README blocks.** Both are
> generated. Edit the episode JSON and rebuild.

```
□ Every sourceEvents id resolves
□ Every expression has a PNG in animation_frames/
□ 6+ segments, each with a distinct angle
□ Runtime is plausible (the script computes it from word counts)
□ pending-news-articles.json cleared, lastEpisode recorded
□ RNN_BROADCASTS.latest resolves to the new episode
```

Resolve the current episode by `RNN_BROADCASTS.latest`, never by
`episodes.slice(-1)[0]` — that bug shipped once already.

---

## If the format stops working

This is a real option and it should be exercised rather than worked around.

The broadcast earns its place only if the episodes are worth watching. If, with
ten pending events in front of you, you cannot write six segments with distinct
angles and a voice that sounds like the jungle rather than a summary — **stop
and say so in the run report.** Do not ship a thin episode to keep a cadence.

Alternatives worth proposing at that point:

- **Longer gaps, bigger episodes** — raise the threshold to 15 or 20.
- **A written broadsheet instead** — `app/core/rakasha-news.js` (The Blood-Echo)
  already renders one, and prose survives thin weeks better than a talking head.
- **Retire the desk in-world** and bring it back when the campaign gives it
  something to cover.

A format that has to be fed is worse than no format. Say the format is failing;
do not quietly pad it.
