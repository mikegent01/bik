# Waluigi Article Analyses — Authoring Guide

**A companion reading for a filed article: less retelling, more Waluigi.**

This system adds a second way forward from an event page's
**🔍 Investigate this further** panel. The case-file links lead to exhibits and
rolls. The article-analysis link leads to Waluigi's sustained reading of the
article itself: what bothered him, what he thinks the party missed, where he
was personally implicated, and which interpretation he is willing to put his
name under.

The event remains the canonical account. The analysis is an openly interested
opinion filed beside it.

---

## The distinction

| Filing | Job | Story / analysis | Dice? |
|---|---|---:|---|
| Session event | Record what happened as a physical story | about **80 / 20** | No |
| Investigation exhibit | Let the reader interrogate physical evidence | light story / heavy analysis | Yes, once |
| **Article analysis** | Let Waluigi argue with the completed event | about **20 / 80** | Core: **No**; optional research: **Yes, once** |

An article analysis does not replace `waluigiAssessment` on the event. The
assessment is the compact durable verdict. The companion analysis is where
Waluigi can stay with the contradictions, admit his preferences, pursue a
personal grievance, and explain why a small moment has continued to bother him.

It is also not another investigation exhibit. The event and the signed
argument must read the same for every reader. If an analysis offers an optional
**after-hours research desk**, its rolls live after the verdict and reveal only
a supplemental inference or an honest limit on Waluigi's claim. The dice never
rewrite the source event, gate the article, alter the verdict, or award XP and
reputation.

---

## Files and routes

| Path | Role |
|---|---|
| `Reputation-Matrix2/data/articleAnalyses.json` | Authored companion analyses |
| `index.html` | Loader, connected-panel entry, and analysis renderer |
| `#/article-analysis/<id>` | One analysis page |
| `#/article/<sourceArticle>` | The canonical event page the analysis reads |
| `docs/ARTICLE_ANALYSES.md` | This guide; canonical editorial and schema rules |

The connected panel should remain one component. When an article has a
companion analysis, it adds a **Waluigi's Article Analysis** subsection beneath
the case-file entries. The link text is the source article's own title, not a
new sensationalized headline. An article with no analysis gets no empty
subsection.

---

## Data shape

`articleAnalyses.json` is an object with an `_README` note and an `analyses[]`
array.

```jsonc
{
  "id": "hanging_tree_apple_waluigi_analysis",
  "sourceArticle": "the_hanging_tree_apple_mirror_theft_and_invited_vampire",
  "title": "The Hanging-Tree Apple, the Mirror Theft, and the Invited Vampire",
  "kicker": "Waluigi's Article Analysis",
  "subtitle": "The archivist argues with the night after the event has been filed",
  "archivist": "Waluigi, Auditor-General",
  "filed": "4 Aethel, 1040 BF — after the session filing",
  "summary": "One short statement of the analysis's thesis.",
  "thesis": "The full opening argument in Waluigi's voice.",
  "sections": [
    {
      "id": "the-apple",
      "icon": "🍏",
      "heading": "The Apple Is Not the Important Part",
      "sourceAnchor": "Boundy knew Remi's name before Remi supplied it.",
      "body": "Waluigi's sustained analysis in markdown."
    }
  ],
  "verdict": "The closing judgement and recommendation.",
  "researchDesk": {
    "title": "Waluigi's After-Hours Research Desk",
    "intro": "Why these optional checks are worth making.",
    "rolls": [
      {
        "id": "stable-check-id",
        "icon": "🎲",
        "title": "The question being tested",
        "dc": 4,
        "prompt": "The source-grounded comparison Waluigi wants to make.",
        "success": "A sharper supplemental inference.",
        "failure": "An honest limit that still gives the reader a useful note."
      }
    ]
  },
  "relatedArticles": ["boundy", "remi_akamatsu_full_backstory"]
}
```

### Field rules

| Field | Required | Rule |
|---|---|---|
| `id` | yes | Stable lowercase `snake_case`; never rename after publication |
| `sourceArticle` | yes | Must resolve to an existing record, normally in `events.json` |
| `title` | yes | Match the source article's title exactly |
| `kicker` | yes | Normally `Waluigi's Article Analysis` |
| `subtitle` | yes | State the angle without inventing a second event title |
| `archivist` | yes | The accountable speaker; normally Waluigi |
| `filed` | yes | In-world filing date or an honest relative filing note |
| `summary` | yes | Approximately 35–80 words; thesis, not plot recap |
| `thesis` | yes | Opening argument; first person is encouraged |
| `sections[]` | yes | Five to nine sections for a substantial event |
| `sections[].id` | yes | Unique within the analysis; lowercase kebab-case |
| `sections[].heading` | yes | A claim Waluigi will argue, not a plot beat |
| `sections[].sourceAnchor` | yes | One concise fact or quotation already present in the source |
| `sections[].body` | yes | The argument, in markdown; no raw HTML |
| `verdict` | yes | What Waluigi concludes and what he recommends doing next |
| `researchDesk` | no | Optional, clearly separated checks shown only after the verdict |
| `researchDesk.rolls[].id` | if used | Stable within the analysis; it is the browser save key |
| `researchDesk.rolls[].dc` | if used | Integer 2–6; plain d6 with no modifier |
| `researchDesk.rolls[].prompt` | if used | A source-grounded question, not a new fact |
| `researchDesk.rolls[].success` | if used | A sharper Waluigi inference, explicitly short of new canon |
| `researchDesk.rolls[].failure` | if used | A useful limit or competing reading, never an empty dead end |
| `relatedArticles[]` | no | Existing IDs only; use records the analysis actually discusses |

The source event owns participants, XP, outcome, reputation changes, exhibits,
and chronology. Do not duplicate those fields here.

---

## The reverse ratio: 20 / 80

The event guide aims for roughly 80% story and 20% commentary. This form
reverses that balance:

- **About 20% source material:** selected physical details, short quotations,
  and exact decisions from the event.
- **About 80% Waluigi:** interpretation, emotional response, suspicion,
  self-criticism, personal history, grudges, competing readings, and a concrete
  recommendation.

This is an aim, not a quota. Do not pad an argument to hit a number, and do not
cut a necessary source anchor because the analysis is temporarily at 77%.

The 20% exists to keep the 80% honest. Waluigi may be biased; the page may not
be unmoored. Every section names its `sourceAnchor` before Waluigi develops the
claim.

### What counts as source material

- A short exact quotation already in the event.
- A physical object: the green apple, the bent hinge, the stolen Mirror.
- A decision: nobody followed Boundy; Eager accepted the gloves; Dan opened the
  side window.
- A documented uncertainty: the locating spell may have found custody rather
  than Archie.

### What counts as analysis

- Why Waluigi keeps returning to that detail.
- Which reading he prefers and which competing reading he cannot dismiss.
- Where his annoyance is actually fear, jealousy, guilt, pride, or recognition.
- What the detail changes about another filed event or open case.
- What the party should now do differently.

---

## Voice: interested, accountable, and very opinionated

Waluigi is allowed to be more personal here than in any ordinary event aside.
He may say **I**. He may complain at length. He may admit that he likes someone,
distrusts someone, resents being ignored, was frightened, or recognized his own
bad habit in somebody else's decision.

The permission is not a license for unsupported omniscience.

1. **Opinion is signed.** Write “I think,” “I prefer,” “I resent,” or “my
   reading is” when the record cannot prove the claim.
2. **Facts remain facts.** Do not change custody, chronology, dialogue, intent,
   injuries, or outcomes established by the source article.
3. **File both readings.** If the apple could be bait or a message, state both,
   explain which Waluigi prefers, and say why.
4. **A gripe must reveal the case.** Complaining is useful when it exposes a
   repeated failure, an institutional absurdity, or Waluigi's own stake. A joke
   with no argumentative job belongs in an event aside instead.
5. **Self-implication is stronger than superiority.** “They were fools” is
   cheap. “I would have followed the wrong clue for a different reason” is a
   reading.
6. **Do not turn volume into certainty.** Capitals and `WAH` are voice, not
   evidence.

Waluigi may be unfair. The page must show the reader enough of the source to
notice that he is being unfair.

---

## Section shape

A useful section normally moves in this order:

1. **Claim heading** — what Waluigi is arguing.
2. **Source anchor** — the fact that keeps the claim attached to the event.
3. **Immediate reaction** — what Waluigi felt or objected to.
4. **Close reading** — two or more possible interpretations.
5. **Cross-file consequence** — what this changes elsewhere in the archive.
6. **Personal admission** — why Waluigi is not neutral about it.
7. **Recommendation or unresolved question** — what the analysis buys.

A section should not retell all the action between its anchor and its
conclusion. The source event is one click away and is linked in the header.

### Working length

| Unit | Working band |
|---|---:|
| Whole analysis | 2,000–4,000 words |
| Thesis | 180–350 words |
| Section | 250–550 words |
| Sections | 5–9 |
| Verdict | 180–350 words |

These are aims, not targets. Length is not bloat; duplication is. If two
sections reach the same conclusion from the same evidence, combine them.

---

## Optional after-hours research

Interactive research is an appendix to the opinion, not a second version of the
article. Put it after the verdict so every reader receives Waluigi's complete
argument before chance enters the page. Three focused checks are normally
plenty; inline dice scattered through a 3,000-word essay turn close reading into
button hunting.

Each check is a plain d6 against DC 2–6 and is recorded once in local browser
storage. A failure must be as editorially useful as a success:

- **Success** may connect two already-filed details and let Waluigi state a
  stronger inference.
- **Failure** identifies what the archive cannot prove, preserves a competing
  reading, or makes Waluigi admit where grievance outruns evidence.
- **Neither** changes chronology, custody, intent, the filed verdict, XP,
  reputation, or investigation progress.

Do not put these checks in `rolls.json` under `articles`. That registry splices
rolls into authoritative reference prose. Research-desk checks belong to the
analysis record because they are optional outcomes in Waluigi's openly biased
voice. IDs are permanent after publication: changing one discards that check's
saved result for existing readers.

---

## Presentation

An analysis page is an ordinary Waluipedia article, not a new microsite.

Use the existing detail-page vocabulary:

- `.breadcrumb`
- `.article-layout`
- `.art-kicker`, `.art-title`, `.art-subtitle`, `.metabar`
- `.article-lead-card`
- `.prose`
- `.wnote`
- `.infobox`
- `.cross-page-panel`, `.cross-page-links`
- `.rel-chip`

Do not create an `analysis.css` file or a new parallel card system. Page-specific
rules belong in the existing investigations stylesheet and must remain scoped
to `.article-analysis-layout`, `.article-analysis`, or `.analysis-research`.
The source article's existing image may be shown as the visual reference, with
a caption that clearly says it belongs to the source filing. Do not copy the
image file.

The page must provide:

- a direct **Read the canonical event** link near the title;
- a table of contents for the thesis, every section, and the verdict;
- the source anchor visibly separated from Waluigi's body text;
- an optional research desk after the verdict, never inside the core prose;
- related-article chips whose IDs resolve;
- a return link to the source event.

---

## Canon boundaries

An analysis can interpret canon. It cannot manufacture canon.

- Do not add off-screen conversations.
- Do not decide an uncertainty the event deliberately leaves open.
- Do not invent what a character “really meant.” Attribute the reading to
  Waluigi.
- Do not award XP, change reputation, or update character status from an
  analysis alone.
- Do not create exhibits unless the analysis identifies a physical document
  that actually existed in the session. If it does, file that paper against the
  source event through the normal exhibit process.
- Do not add the companion to the RNN pending list. It comments on a filed
  event; it is not a new session event.

The analysis may create a recommendation. If the recommendation becomes an
actual objective supported by evidence, promote it to a lead in the arc's one
investigation rather than creating a quest here.

---

## Authoring process

1. Read the source event from beginning to end.
2. Write a list of eight to twelve exact anchors: quotations, objects,
   decisions, and explicit uncertainties.
3. State Waluigi's one-sentence thesis.
4. Choose five to nine anchors that test different parts of the thesis.
5. Draft section headings as claims, not chronology.
6. Write the analysis around each `sourceAnchor`, filing competing readings
   and personal stakes.
7. Write the verdict last. It must contain a recommendation, not just a mood.
8. If the page benefits from play, add no more than three optional research
   checks. Write useful success and failure notes before choosing each DC.
9. Add only resolvable `relatedArticles` IDs.
10. Add the data record; do not hard-code prose in `index.html`.
11. Open both routes and read them in sequence: canonical event first,
    companion analysis second.

---

## Pre-flight

```text
□ sourceArticle resolves
□ title matches the source article exactly
□ no duplicate analysis id or duplicate sourceArticle entry
□ every section id is unique
□ every section has a sourceAnchor grounded in the event
□ approximately 20% source / 80% analysis, judged by reading rather than padding
□ Waluigi states preferences as preferences, not facts
□ no new chronology, custody, dialogue, XP, or reputation is invented
□ core thesis, sections, and verdict contain no dice or roll tokens
□ optional research checks appear only after the verdict
□ every optional check has a stable id, DC 2–6, and useful success and failure notes
□ optional outcomes remain Waluigi inference or an honest limit, never new canon
□ no raw HTML in authored prose
□ all relatedArticles IDs resolve
□ connected panel shows the analysis only on its source article
□ canonical-event and return links both work
□ JSON parses and the route renders without console errors
```

The final editorial test is simple: if the source event disappeared, the
analysis should become impossible to follow. If it still reads as a complete
account of the night, too much story has been copied into it. If it could be
attached unchanged to a different event, it is not anchored enough.
