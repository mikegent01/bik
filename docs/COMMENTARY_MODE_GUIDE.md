# Commentary Mode — "Waluigi's Cut" — Authoring & Implementation Guide

**A commentary track for the archive: the whole story, retold, with Waluigi talking over every second of it.**

> **Consolidated Guide:** This document is the single canonical source of truth for Waluigi's Cut commentary filings, superseding all previous standalone README summaries. It covers the structural contract, the time-stance separation from Analysis, the authoring rules, the schema, and the checker floors.

- **Filed exemplars:**
  - `#/commentary/promo_mario_newspaper_commentary` — a contested document (expanded 4x)
  - `#/commentary/the_belly_of_the_beast_commentary` — a full narrative session
- **Data file:** `Reputation-Matrix2/data/commentaries.json`
- **Checker:** `python3 tools/check-commentaries.py` (and `python3 tools/check-commentaries.py --strict`)

---

## Why this mode exists

People read this archive for the story. They also read it for **Waluigi being insufferable about the story**, and somewhere along the line the second thing got squeezed out.

Compare filings measured on the same scale:

| Filing | Words | "Waluigi"/1k | CAPS/1k | Shape |
|---|---:|---:|---:|---|
| `spider_grove_battle` (old, exemplar) | 1,755 | **22.8** | **36.5** | Waluigi tells the whole battle himself |
| `promo_mario_newspaper` (flat source) | 302 | 9.9 | 19.9 | Neutral retelling, opinion parked in a note |
| **Promo Mario — Waluigi's Cut** | **4,055** | **24.9** | **34.3** | Waluigi narrating and heckling continuously |
| **The Belly of the Beast — Waluigi's Cut** | **5,850** | **19.1** | **29.2** | Full session with continuous running cut |

The old Spider Grove article opens with *"THIS is the one. This is Waluigi's battle."* He is not annotating the fight from a calm distance — he is **narrating** it, and interrupting himself constantly while he does. 

Commentary mode is where the voice goes back on top of the story instead of quarantined in a footnote.

---

## Separating Commentary from Analysis: By Structure and Time Stance, Not Tone

In previous revisions, Commentary and Analysis began to sound identical because both degenerated into "first-person Waluigi complaining loudly." The table below defines the strict boundary. They are separated by **structure, stance, and evidence**, not merely tone:

| Dimension | Commentary ("Waluigi's Cut") | Analysis (Companion Reading) |
|---|---|---|
| **Time stance** | **During:** Reacts as each beat lands; does *not* know what happens next. In the moment. | **After:** Hindsight; written the next morning; knows the ending and consequences. |
| **Order** | **Chronological:** Follows the source event's sequence beat-by-beat. | **Thematic / Claim-based:** Follows claims and arguments, not chronology. |
| **Shape** | **Quote → heckle.** No thesis, no verdict. Retelling with running comedy. | **Claim → anchor → argument → verdict.** Structured forensic reading. |
| **Self-reference** | **Third-person "Waluigi", CAPS, WAH, performing.** Loud, theatrical broadcast voice. | **"I" only, no CAPS, WAH at most once per section.** Speaking quietly at a desk under a lamp. |
| **Lexicon** | **Comedy.** Slapstick, physical insults, disbelief. *No ledger words* (`filed`, `ruled`, `custody`) except as an overt gag. | **Audit register.** Technical archival vocabulary (`filed`, `ruled`, `entered`, `exhibit`, `custody`, `chain of possession`). |
| **Confession** | **Concedes about evidence:** One short drop-out acknowledging a physical fact ("Alright, the landing was technically survivable"). | **Concedes about himself and his stake:** Admits his own vulnerability, complicity, or fear. This personal stake is the engine of the argument. |
| **Cross-references** | **None.** Stays strictly quarantined inside the single source event being watched. | **Required.** Must anchor to prior archive filings, legal contracts, warrants, or historical logs. |
| **Framing conceit** | **Mandatory conceit:** Screening a tape, live blog, reading minutes aloud, reviewing cockpit black-box audio. | **Desk audit:** Physical evidence spread across the blotter under the lamp. |

---

## The Mandatory Conceit

Every commentary must establish an explicit framing conceit in its standfirst and opening section. Waluigi is not just "shouting at the reader"; he is **performing through an in-world medium**:
- **A live screening of visual footage:** Sitting at a projector, telling the operator to pause, rewind, or freeze-frame (*"Stop the tape! Rewind three seconds! Look at Wario's thumbs!"*).
- **Reading the minutes or transcript aloud:** Heckling an official transcript line-by-line in front of an audience.
- **Reviewing flight recorder / black-box audio:** Reacting to recorded cockpit telemetry and radio noise as it plays.
- **A live blog / running broadcast:** Reacting in real time to an event unfolding outside the window.

The conceit anchors the **During** stance: Waluigi cannot skip ahead to reveal what is in the basement until the footage actually enters the basement.

---

## Length: Proportional to the Source

A commentary is sized against the article it talks over. A long session gets a long cut; a short clipping does not get padded to match it.

| Source | Source words | Cut words | Ratio | Why |
|---|---:|---:|---:|---|
| `promo_mario_newspaper` | 999 | 4,055 | **4.06x** | Thin summary sitting on rich unread exhibits; needed full expansion. |
| `the_belly_of_the_beast` | 5,319 | 5,850 | **1.10x** | Already full narrative; needed the voice laid over it. |

Rules enforced by `tools/check-commentaries.py`:
- **240–950 words per section** (stable unit: one story beat plus its interruptions).
- **Whole cut >= 0.8x the source's story words.**
- **6–14 sections** matching the source beats.
- **No synthetic padding**: Never pad sections with trailing strings of repetitive words or WAHs just to hit counters; let prose conclude naturally once the narrative beat and heckles land.
- **Fidelity to canon dialogue**: All quoted character dialogue in quotation marks must match verbatim dialogue from the source transcript/event, verified by fuzzy-matching audit.

> **Pacing Tip:** On a long narrative source, do not paste narrative prose verbatim and tack jokes onto the end. **Compress the retold prose** so the action takes fewer words, then weave the heckling into every second or third sentence.

---

## The House Rules

### 1. The story must survive on its own
A reader who has never read the source event must finish the commentary knowing exactly what happened, in order. You are **retelling**, not merely annotating.

### 2. Opinions are cut in, not stacked at the end
Waluigi interrupts himself. He reacts inside the sentence or paragraph where the beat lands—roughly an interruption every second or third sentence. Never a block of jokes bolted to the end of a neutral summary.

### 3. No invented facts, ever
The jokes and insults are Waluigi's. The events, injuries, and objects are canon. Every factual event must already exist in the source record. **A funnier version of an event that did not happen is a canon corruption with a laugh track.**
Where the record is silent, say so in voice: *"The tape does not show where the hat went,"* or *"Nobody in this room has verified that."*

### 4. Quote the real words (Verbatim speech density)
Waluigi dissects what people **actually said**.
- Quote verbatim from the source event: dialogue, rhymes, curses, name-drops, and demands.
- Never put fake words in another character's mouth to set up a punchline. The comedy comes from the fact that someone *genuinely said that on the record* and Waluigi cannot believe it.
- Preserved verses, poems, and reveals must stand on the page before Waluigi tears into them.

### 5. No ledger vocabulary, no thesis, no verdict
Leave the audit register (`filed`, `ruled`, `entered`, `custody reading`) to the Analysis mode. A commentary is comedy and performance. It does not argue a central thesis and it does not render a final legal ruling.

### 6. The honest concession beat
Once per commentary, in the back half, Waluigi drops the manic performance for three or four sentences, concedes an inconvenient physical truth about the evidence (*"Alright, the landing was technically survivable"* or *"The signature is genuine"*), and immediately snaps back into high gear. This beat prevents the cut from collapsing into pure noise.

### 4. Quote the real lines — Waluigi dissects the actual words

When Waluigi ridicules, interrogates, or celebrates a line, he quotes the **exact words from the record**:

- **Anchor jokes to verbatim speech:** He jumps on the actual phrasing — the bizarre rhyme, the slip of the tongue, the exact price demanded, the dropped name.
- **Never put fake words in another character's mouth:** Do not reword or invent what someone else said to set up a joke. The comedy works only because the party or their adversary *actually said it* on the record, and Waluigi cannot believe they did.
- **Preserve verses and reveals:** When a character delivers a verse, poem, song, or pivotal reveal line, let the quote stand on the page before Waluigi tears into it. Paraphrasing a spoken verse into flat prose ruins both the drama and the commentary.

---

## Anatomy of a Filing

Filed in `Reputation-Matrix2/data/commentaries.json`:

```json
{
  "commentaries": [
    {
      "id": "<source_id>_commentary",
      "sourceArticle": "<resolves to a real event or battle id>",
      "title": "Title of the Event",
      "subtitle": "In Which Waluigi Performs The Screening",
      "filed": "2 Aethel, 1035 BF — recorded live at the screening desk",
      "timeCode": "TC:1035-09-02/COM",
      "kicker": "Waluigi's Cut · Commentary Track",
      "pullQuote": "One line, his loudest and funniest from the cut",
      "standfirst": "The premise and conceit: what he is watching and why he is yelling at it",
      "sections": [
        {
          "id": "beat-slug",
          "icon": "📽️",
          "heading": "Loud All-Caps or Direct Line Quote Heading",
          "body": "Markdown body with high quote density, third-person Waluigi heckling, and continuous story retelling."
        }
      ],
      "relatedArticles": []
    }
  ]
}
```

Routes: `#/commentary/<id>`, `#/waluigis-cut/<id>`, `#/cut/<id>`.

---

## Enforced Checker Floors

`tools/check-commentaries.py` validates the following:

```text
□ sourceArticle resolves against events or battles
□ Every section has id, icon, heading, body; no duplicate ids
□ Waluigi named >= 12.0 times per 1k words
□ Emphasis capitals >= 20.0 per 1k words
□ At least one WAH per filing
□ Every section has active Waluigi presence (max 350 words without interruption)
□ Dialogue fidelity: quoted lines fuzzy-match verbatim transcript/event text
□ High quote density: quotes the source event's lines
□ Strictly follows source event sequence
□ Free of ledger/thesis vocabulary outside of deliberate gags
□ Section word counts within 240–950 words; total words >= 0.8x source words
```

---

## When to File a Commentary

- **Ideal candidates:** High-stakes sessions, absurd disasters, contested paper, chaotic battles, and events where Waluigi has a furious personal reaction to what happened.
- **Forbidden candidates:** Solemn tragedies, executions, massacres, and permanent player deaths. Waluigi is vain and petty, not cruel.
