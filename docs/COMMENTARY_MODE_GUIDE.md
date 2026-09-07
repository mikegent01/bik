# Commentary Mode — "Waluigi's Cut"

## Why this mode exists

People read this archive for the story. They also read it for **Waluigi being
insufferable about the story**, and somewhere along the line the second thing
got squeezed out.

Compare two filings measured on the same scale:

| Filing | Words | "Waluigi"/1k | CAPS/1k | Shape |
|---|---:|---:|---:|---|
| `spider_grove_battle` (old) | 1,755 | **22.8** | **36.5** | Waluigi tells the whole battle himself |
| `promo_mario_newspaper` (new) | 302 | 9.9 | 19.9 | neutral retelling, commentary bolted on the end |

The old article opens with *"THIS is the one. This is Waluigi's battle."* He is
not annotating the fight — he is **narrating** it, and interrupting himself
constantly while he does. The newer articles report events flatly and then park
the opinions in a `waluigi_note` at the bottom. Technically the commentary is
present. Emotionally it has been quarantined.

Commentary mode is where the voice goes back on top.

---

## What this mode is NOT

| Mode | Question it answers | Tone |
|---|---|---|
| **Event article** | What happened? | Straight, canonical |
| **Article analysis** | What does one specific thing about this filing MEAN? | Calm, forensic, single thesis |
| **Investigation** | What can we prove, and what does it cost to check? | Procedural, dice |
| **Waluigi's Cut** | What happened — *and what Waluigi thinks of it, continuously* | Loud, funny, opinionated |

An analysis argues **one** point and stays sober. A commentary retells
**everything** and never shuts up. Do not build a commentary by pasting an
analysis thesis over a summary; that is the exact failure this mode exists to
correct.

---

## Length is proportional to the source

Sized against the article it talks over — see the table in
[`README-COMMENTARY-MODE.md`](README-COMMENTARY-MODE.md#length-proportional-to-the-source).
Promo Mario ran 4.06x its source (a thin summary needing expansion); the Belly
of the Beast ran 1.10x (an already-narrated session needing only the voice).

Enforced per section, because that is the stable unit: **260–900 words each,
whole cut >= 0.9x the source's story words.**

---

## The three house rules

### 1. The story must survive on its own

A reader who has never opened the source article must finish the commentary
knowing the full sequence of events. **You are retelling, not annotating.** If
removing the jokes would leave the reader confused about what happened, the
retelling is too thin.

### 2. The opinions are cut in, not stacked at the end

Waluigi interrupts himself. He reacts inside the paragraph where the thing
happens, not in a summary block afterwards. Target roughly **an interruption
every second or third sentence**.

Interruptions that work:

- reacting to a fact as it lands — *"Fell. Onto a set."*
- flagging what an absence proves — *"Peach never appears."*
- competence bragging, ideally justified — the ice-magic passages
- self-mockery and grievance — being uninvited, unthanked, un-medalled
- admitting something that costs him — see rule 3

### 3. No invented facts, ever

The jokes are Waluigi's. The events are not. Every factual claim must already
exist in the source record. **Commentary mode is a voice change, not a licence
to embellish** — a funnier version of an event that did not happen is a
canon corruption with a laugh track.

Where the record is silent, say so *in voice*: "the paper does not say," "nobody
in this building has authenticated that." Absence is often the best material.

---

## The thing that makes it land: let him be right, then make him pay for it

The Promo Mario cut works because Waluigi does the following in one section:

1. brags that his own writing made a man weep — genuine, earned, funny
2. **then concedes it proves nothing**, because a review is not corroboration

That second beat is what separates commentary from noise. He is vain, loud, and
petty, and he is also the best archivist in the building — so let him drop the
voice for three or four sentences once per filing, say the true thing plainly,
then pick the voice straight back up. Comedy without that beat is just volume.

---

## Data shape

`Reputation-Matrix2/data/commentaries.json`

```json
{
  "commentaries": [{
    "id": "<source_id>_commentary",
    "sourceArticle": "<must resolve to a real event/battle>",
    "title": "…",
    "subtitle": "…",
    "filed": "5 Aethel, 1040 BF — …",
    "timeCode": "TC:1040-09-05/MAT",
    "kicker": "Waluigi's Cut · Commentary Track",
    "pullQuote": "one line, his loudest",
    "standfirst": "what he is about to do to you",
    "sections": [
      { "id": "kebab-case", "icon": "📰", "heading": "…", "body": "markdown" }
    ],
    "relatedArticles": ["…"]
  }]
}
```

Route: `#/commentary/<id>` (aliases `#/waluigis-cut/`, `#/cut/`). The source
article surfaces it automatically in the "Investigate this further" panel.

---

## Enforced floors

`tools/check-commentaries.py` (runs inside `check-all.py`):

```text
□ sourceArticle resolves
□ every section has id / icon / heading / body, no duplicate ids
□ Waluigi named >= 18 times per 1k words
□ emphasis capitals >= 25 per 1k words
□ at least one WAH per filing
□ every section shows first-person presence
□ no stretch longer than 220 words without Waluigi in it
```

The last two are the important ones: they catch the specific failure of a
section drifting into flat retelling. Thresholds are derived from
`spider_grove_battle`, not invented.

```bash
python3 tools/check-commentaries.py           # report
python3 tools/check-commentaries.py --strict  # exit 1 (used by check-all)
```

---

## When to file one

Good candidates: contested documents, absurd sessions, anything with a strong
Waluigi opinion already trapped in a footnote, and any filing where readers
would enjoy the events more than the paperwork.

Poor candidates: solemn records where the voice would be cruel — massacres,
executions, character deaths. Waluigi is petty, not heartless. The archive gets
to be funny about a newspaper; it does not get to be funny about Order 120.
