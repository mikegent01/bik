# Waluigi's Cut — README

**A commentary track for the archive.** The whole story, retold, with Waluigi
talking over every second of it.

- **Filed so far:**
  - `#/commentary/promo_mario_newspaper_commentary` — a contested document
  - `#/commentary/the_belly_of_the_beast_commentary` — a full session narrative
- **Data:** `Reputation-Matrix2/data/commentaries.json`
- **Full house rules:** [`docs/COMMENTARY_MODE_GUIDE.md`](COMMENTARY_MODE_GUIDE.md)
- **Checker:** `python3 tools/check-commentaries.py` (runs inside `check-all.py`)

---

## Quick start

```bash
# 1. run the site
python3 start.py

# 2. open a commentary
#    http://localhost:8765/#/commentary/promo_mario_newspaper_commentary

# 3. after editing commentaries.json
python3 tools/check-commentaries.py --strict
```

---

## Why the mode exists

Readers come for the story. They also come for **Waluigi being insufferable
about the story** — and that second thing had quietly drained out of the newer
filings.

The problem is measurable. Same yardstick, three documents:

| Filing | Words | "Waluigi"/1k | CAPS/1k |
|---|---:|---:|---:|
| `spider_grove_battle` — old, good | 1,755 | 22.8 | 36.5 |
| `promo_mario_newspaper` — new, flat | 302 | 9.9 | 19.9 |
| **Promo Mario — Waluigi's Cut** | **4,055** | **24.9** | **34.3** |
| **The Belly of the Beast — Waluigi's Cut** | **5,850** | **19.1** | **29.2** |

The old Spider Grove article opens *"THIS is the one. This is Waluigi's
battle."* He is not annotating that fight — he is **narrating** it, and
interrupting himself the entire way down.

The newer articles report events flatly and then park the opinions in a
`waluigi_note` at the bottom. The commentary is technically present but
emotionally quarantined. Commentary mode is where the voice goes back on top of
the story instead of underneath it.

---

## How it differs from the modes next to it

| Mode | Answers | Tone | Length |
|---|---|---|---|
| Event article | What happened? | Straight, canonical | Varies |
| Article analysis | What does one thing about this filing MEAN? | Calm, forensic, one thesis | 800–1,500 |
| Investigation | What can we prove, and what does checking cost? | Procedural, dice | Varies |
| **Waluigi's Cut** | What happened — **and what Waluigi thinks, continuously** | Loud, funny, opinionated | 2,000–5,000 |

**Do not build a commentary by pasting an analysis thesis over a summary.**
That is the exact failure the mode was created to fix.

---

## Length: proportional to the source

**A commentary is sized against the article it is talking over.** A long
session gets a long cut; a short clipping does not get padded to match it.

The two filed cuts show why a single multiplier would be wrong:

| Source | Source words | Cut words | Ratio |
|---|---:|---:|---:|
| `promo_mario_newspaper` | 999 | 4,055 | **4.06x** |
| `the_belly_of_the_beast` | 5,319 | 5,850 | **1.10x** |

Promo Mario is a 302-word summary sitting on top of dense assessment and prop
material — it needs **expanding**, because most of the story was never told in
prose. The Belly of the Beast is already 4,400 words of finished narrative — it
needs the **voice laid over it**, not more plot.

So the rule is expressed where it is actually stable — **the section**:

```text
□ 260–900 words per section
□ whole cut >= 0.9x the source article's story words
□ roughly one section per source beat; 6–12 sections
```

Both are enforced by `tools/check-commentaries.py`. In practice a section lands
around 400–600 words, which is one story beat plus the interruptions it earns.

> **Watch out:** on a long narrative source the temptation is to paste beats
> verbatim, and the density checks WILL fail — that is exactly what happened
> drafting the Belly cut, which failed three silent-run errors on the first
> pass. The fix is not to add more Waluigi at the end; it is to **compress the
> retold prose** so the same events take fewer words, then interrupt them.

---

## The three rules

### 1. The story must survive on its own
A reader who has never opened the source article finishes the commentary
knowing the full sequence of events. You are **retelling**, not annotating.

### 2. Opinions are cut in, not stacked at the end
Waluigi reacts inside the paragraph where the thing happens — roughly every
second or third sentence. Never a block of jokes bolted to the bottom.

### 3. No invented facts, ever
The jokes are his. The events are not. Every factual claim must already exist
in the source record. **A funnier version of an event that did not happen is a
canon corruption with a laugh track.**

Where the record is silent, say so *in voice*: "the paper does not say,"
"nobody in this building has authenticated that." Absence is usually the best
material in the file.

---

## The beat that makes it work

Let him be right, then make him pay for it.

In the Promo Mario cut he brags that his own writing put a man on the floor of
a television studio — earned, funny, entirely in character. Then he concedes it
proves nothing, because **a review is not corroboration**.

That second beat is the difference between commentary and noise. He is vain,
loud and petty, and he is also the best archivist in the building. Once per
filing, let him drop the voice for three or four sentences, say the true thing
plainly, and pick the voice straight back up.

---

## Anatomy of a filing

```json
{
  "commentaries": [{
    "id": "<source_id>_commentary",
    "sourceArticle": "<must resolve to a real event or battle>",
    "title": "Promo Mario",
    "subtitle": "In Which Waluigi Reads A Newspaper And Believes It Before Lunch",
    "filed": "5 Aethel, 1040 BF — the morning filing, then the evening correction",
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

| Field | Notes |
|---|---|
| `id` | Convention: `<source_id>_commentary` |
| `sourceArticle` | **Must resolve.** A commentary never floats free of canon |
| `pullQuote` | Rendered large under the masthead. His loudest single line |
| `standfirst` | Sets expectations before section 01 |
| `sections[].icon` | One emoji; carries the beat of the section |
| `timeCode` | Optional, same format as [`DATE_FILING_GUIDE.md`](DATE_FILING_GUIDE.md) |

Routes: `#/commentary/<id>`, plus aliases `#/waluigis-cut/<id>` and
`#/cut/<id>`. The source article links to it automatically from the
"Investigate this further" panel — no manual wiring.

---

## Enforced floors

Thresholds are **derived from `spider_grove_battle`**, not invented, so the
target is a real article the archive already liked.

```text
□ sourceArticle resolves
□ every section has id / icon / heading / body, no duplicate ids
□ Waluigi named >= 18 times per 1k words
□ emphasis capitals >= 25 per 1k words
□ at least one WAH per filing
□ every section shows first-person presence
□ no stretch longer than 220 words without Waluigi in it
□ each section 260–900 words
□ whole cut >= 0.9x the source article's story words (proportional length)
```

The last two matter most: they catch a section sliding back into flat
retelling, which is the precise failure mode of the newer articles. The checker
was fault-tested by replacing a section with neutral prose — it fails with
`no Waluigi presence at all`.

---

## Writing one, start to finish

1. **Read everything first.** Not just `description` — also `outcome`,
   `aftermath`, `waluigiAssessment`, `revisions[]`, and every `props.json`
   entry the article references. The Promo Mario expansion doubled in length
   purely from material already in the record: the 955 BF tape, the Wario
   Show, the counterfeit Mario, Camera Three. **None of it was invented; all of
   it was simply unread.**
2. **Draft the sequence.** One section per story beat, in order. Aim for 6–12.
3. **Cut the opinions in** as you write, not afterwards.
4. **Put the honest beat somewhere in the back half.**
5. **Run the checker**, fix what it flags, and re-read for pace.
6. **Verify no invented facts** — grep your concrete nouns against the source
   records before committing.

---

## When NOT to use this mode

Good candidates: contested documents, absurd sessions, filings with a strong
opinion already trapped in a footnote, anything where the events are more fun
than the paperwork.

**Poor candidates: solemn records.** Massacres, executions, character deaths.
Waluigi is petty, not heartless. The archive gets to be funny about a
newspaper; it does not get to be funny about Order 120.
