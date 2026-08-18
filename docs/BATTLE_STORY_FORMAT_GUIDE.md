# Battle Story Format — how a battle article is written

`BATTLES_GUIDE.md` owns the **system** — the schema, the checker, the feeds.
This guide owns the **craft**: the formatted way a battle record is written
so that two writers produce recognizably the same kind of article, and a
reader can feel the fight instead of reading a ledger with jokes.

The model record is `feyward_woodfellow_vs_the_treant`.

---

## The shape — six parts, one gap, one assessment

A battle article is a war report filed by an archivist who was **probably
not there**. The parts, in order:

| Part | Job | The question it answers |
|---|---|---|
| **I — The Field** | Ground, season, why anyone is fighting here | Why does this lane exist? |
| **II — The Opening** | First contact; the engagement's tone set in one exchange | What kind of night is this? |
| **III — The Middle** | The mess: confusion, friendly fire, the battle's real character | What went wrong, and for whom? |
| **IV — The Turn** | The moment the outcome became inevitable | What decided it? |
| **V — The Finish** | The decisive blow, delivered with ceremony | How did it end? |
| **VI — The After-Fight** | Pursuit, withdrawal, the field after the whistle | What did it cost? |
| **the gap** | Whatever the record does not cover, said plainly | What don't we know? |

Not every battle needs six parts. Duels want three (Opening / Turn /
Finish). Campaign-scale engagements can take eight. **The parts are a
spine, not a form** — but a battle with no Turn and no gap-report is a
summary, not an article.

## The register

- **War-report voice, first archivist.** The author files from the tally and
  survivor fragments and *says so* in the opening italic block. Authority
  comes from the paper, and the paper is cited.
- **Mechanics become consequences.** The translation table:

| The table knows | The encyclopedia writes |
|---|---|
| a perfect strike | "one book, thrown flat and hard, went through the split" |
| a missed swing | "finding only the space where he had stepped inside it" |
| friendly fire | "no account agrees whether the shaft was turned or simply chose him" |
| a broken formation | "the keeper's mark for him is a single word, *fled*" |
| an unaffected unit | "slept where it stood, technically victorious" |

- **Waluigi's asides** (italic `*WAH!*`) carry the editorial layer — petty,
  precise, usually right. One per part, maximum. The asides are commentary;
  the counts are fact, and they never blend.
- **The gap is a finding.** Never narrate what the record does not cover —
  display the absence: "for eighteen minutes, no mark, no account, no
  survivor's memory covers the pursuit. The keeper writes that the page was
  wet."

## The must-haves

1. **A headline exchange** — one blow, early, that tells the reader the
   stakes (the treant's opening door-swing against Swifty's parry).
2. **The named dead and carried** — no casualty is a number; each is a name,
   a fate, and if the fate is unknown, the deferral is stated.
3. **The weather clause** — every large engagement has a third force that
   belongs to neither side (sleep-sand, sprites, terrain). Name it; let it
   turn.
4. **One exhibit-worthy document** — the battle's paperwork exists because
   battles generate paperwork (see §Exhibits in `BATTLES_GUIDE.md`). If the
   article names no paper, it is not finished.
5. **The assessment** — Waluigi's closer, in its own field, never buried in
   prose: what the marks say that the narrators will not.

## Pacing tells (steal deliberately)

- **Counts before adjectives.** "Nine mustered" beats "a small band."
- **One sentence per wound.** The tally rhythm is the battle's drumbeat;
  long paragraphs about pain slow it to soup.
- **The Turn gets the longest paragraph you're allowed.** It is the reason
  the article exists.
- **End on the keeper's mark.** The last line belongs to the record
  ("lane clear, wood quiet, two carried"), not the author.

## What disqualifies a battle article

- Game mechanics in-world (rolls, ACs, damage arithmetic — see
  `BATTLES_GUIDE.md` rule 2).
- A roster of nameless roles ("four warriors, three archers") with no
  names, no fates, no board.
- Narrated gaps — invented action where the record is silent.
- An assessment that agrees with the narrators. If Waluigi's closer does
  not add an interpretation the prose lacked, cut it or sharpen it.

**Audit:** `python3 tools/check-battles.py` for structure; this guide for
craft; `ARTICLE_QA.md` before shipping.
