# Run report — Promo Mario: the full account, filed as Revision 2

## Intake and purpose

The prior run filed `promo_mario_newspaper` as a deliberately short,
unverified press review built from an abridged clipping. That run explicitly
left a note: *"The account is abridged on purpose… No separate full transcript
or expanded session retelling is created."* This run reverses that decision
with the supplied long account: **the record is expanded in place** using a
new, reusable **version-history (`revisions[]`) feature**, so the original
filing stays readable and the archive does not grow a second, duplicate
article about the same occurrence.

Rule-zero applied: the transcript's `mike` label is the GM/player, not a
character. The player's lines are carried in-world by **Lord Darian Marsh of
the Dark Shores** and his steward **Alistair of the Marshkeepers**; no `mike`
appears in any prose.

## 1. Files created or edited

### Created

- `docs/run-reports/2026-09-06-promo-mario-amendment.md` — this report.
- `docs/ARTICLE_REVISIONS.md` — new feature guide: data shape, renderer,
  CSS ownership, when to amend vs re-file vs write an analysis.
- `Reputation-Matrix2/app/styles/systems/version-history.css` — the scoped
  `.vhistory` styles for the revision bar (no global rules).

### Edited — authored data

- `Reputation-Matrix2/data/events.json` — `promo_mario_newspaper` now carries
  `revisions[]` (Rev 1 = original `description`, Rev 2 = full account body,
  ~6,500 words), a new `aftermath`, an expanded `waluigiAssessment`
  (numbered findings incl. the explanation of what was missed), updated
  `status` / `summary` / `outcome`, two name-only participant rows
  (Darian, Alistair — no invented dossiers), and five additional
  `relatedArticles`. The original `description` is **unchanged**.
- `Reputation-Matrix2/data/props.json` — added four props: the recovered
  full account (`prop_promo_mario_full_account`), the Wario Inc. tablet
  (`prop_wario_inc_tablet`), the 955 BF tape (`prop_tape_955_bf`) and the
  Camera Three security footage (`prop_studio_security_footage`). All are
  `.pd-*` only, stamped `evidence`, and linked to the event. The three
  rule-6 objects the prose names now exist as readable exhibits; each is
  explicitly marked single-source and not recovered.
- `Reputation-Matrix2/data/investigations.json` — `mario_charred_note_file`
  extended: `lastFiled` bumped to the same-day amendment; one new
  `plainSummary` point; one new session row (`s_promo_mario_full_account`
  → same event id); one new thread (*The paper stopped before the story
  did*); one new exhibit `ex_promo_mario_full_account` (DC 4, four analysis
  headings, four inline insight rolls, inline-CSS visual); one new lead
  (`lead_find_hollywood_luigi`). All existing exhibits, leads and session
  rows untouched.
- `Reputation-Matrix2/data/wahwire/posts.json` — appended
  `wahwire_promo_mario_amendment` (order 18, reaction `correction`).
- `Reputation-Matrix2/data/mainPage.json` — `featuredArticle` / `latestUpdate`
  relabeled **Amended Filing · Full Account**; id unchanged.
- `tools/rnn-scripts/pending-news-articles.json` — promo entry's note updated
  to describe the revision (still one pending id; no new id added).

### Edited — reader surface / implementation

- `index.html`:
  - `view_article()` now resolves `revisions[]`, renders a
    `pickRevision()`-driven `.vhistory` version bar, and uses the active
    revision's body for headings, reading time, word count and prose;
  - `pickRevision()` added (in-session-only selection);
  - `version-history.css` linked;
  - `SITE_UPDATES` prepended with the amendment entry; the superseded
    morning promo entry was removed (same event id, duplicate feed entry).
- `README.md` — process table gains a row for `docs/ARTICLE_REVISIONS.md`.

**Generated:** none. **Deletions:** none. (`tmp_rev2_body.md` was a scratch
file used to author the body; removed before the commit.)

## 2. Event state

| Field | Value |
|---|---|
| ID | `promo_mario_newspaper` |
| Route | `#/article/promo_mario_newspaper` |
| Current reading | Revision 2 — *Amended filing — the full account* (~6,500 words, 19 parts) |
| Original | Revision 1 — the abridged press review, verbatim |
| Amendment date | 5 Aethel, 1040 BF (evening) — same-day, stated as such; no invented clock time |
| Status | Amended; Mario still missing; Luigi reported missing from the studio |
| Outcome | Portal reported failed; Luigi missing; corrupted Mario out of a TV; Wario Apparition dispersed by a flashlight; identity unresolved |

**What the amendment adds that Revision 1 lacked:** the failed portal (the
clipping's "successful return" was the tell), the 955 BF tape and funeral
footage, the question-mark cipher, Luigi's disappearance, the Doughnut World
layer argument, the **complete Wario song cycle** (corridor verses, the
*Wario's Showtime* ballad, *Greed is good*, the flashlight aria and the final
*rotten day*), the corrupted Mario challenge, and the break-room Camera Three
impostor.

**Rule-6 props:** the account names three physical objects as evidence — the
Wario Inc. tablet (black glass, purple mark; it displayed Waluigi's own
article, then a WARNING no one searched for; its unmarked button is a
flashlight), the 955 BF tape (one date on the label, then blank; funeral,
drowning, question mark), and the Camera Three feed (nothing at the
disappearance; a figure with hollow black eyes hiding behind crates). Each is
now an openable prop wired to the event with inline `[[prop:…]]` markers at
its first appearance.

## 3. Why the short filing missed all of it (in-world)

Filed in `waluigiAssessment` and the new investigation exhibit, not in the
scene prose:

1. I filed a reading of a reading — the newspaper itself was an abridged
   cut, and I treated the headline as the source.
2. I never asked what happened after the farewell; a clean ending is a bid,
   and the machine the farewell depended on never opened.
3. The 955 BF year was a clue, not the error: the account insists the
   assassination and the disappearance were one event, matching the charred
   note's own bad math against the 1039 BF fountain.
4. The longer account does **not** fix identity — one source, no publisher,
   no film, no independent witness. The "Mario from the television" is filed
   as something that wears the name.

## 4. Version-history feature (modular)

- Any record may carry `revisions[]`; `body: null` on Rev 1 falls back to the
  record's `description`, so originals are never copied.
- One event, one index entry, one RNN pending id — no duplicate article.
- Verify with the checklist in `docs/ARTICLE_REVISIONS.md`; the browser smoke
  test below covers switching revisions and prop opening.

## 5. XP and durable state

**No XP awarded this run.** No XP ledger, reputation, faction, dynasty,
inventory, map, calendar or character-status changes. No new character
records (Darian and Alistair remain name-only participants / one-source
account figures). No location record for the Hollywood studio; the account's
"1996" remains quoted provenance only.

## Verification

- `python3 -m json.tool` on all edited JSON files — pass.
- `python3 tools/check-exhibits.py` — **0 errors / 0 warnings**, props 138,
  all four new props valid, all inline markers resolve.
- `python3 tools/check-investigations.py` — **0 errors**, 4 pre-existing
  warnings (active-without-exhibits in other files; none are this file).
- `python3 tools/check-rolls.py` — pass (no `rolls.json` edits).
- `python3 tools/check-home-feed.py` — pass.
- `python3 tools/check-readability.py --event promo_mario_newspaper` — run;
  flags reviewed and closed as intentional where they match the archive's
  song/verse rhythm (blockquote song lines), not machine-gun prose.
- `python3 tools/check-all.py` — full suite, see result below.
- `node --check` on extracted inline `index.html` scripts — pass.
- `node tools/tests/test-home-feed-render.mjs` — **11/11 pass** (server :8765).
- `node tools/tests/revision-history-smoke.mjs` — **20/20 pass**: version bar,
  Rev 2 default with the full account, Wario song cycle, Rev 1 switch shows
  the original review, full-account prop opens with backlink, and all three
  rule-6 props (tablet / tape / Camera Three) open with their key beats.
- `git diff --check` — pass.

## 6. Not done / open

- **Still one source.** The amendment is a revision of an unverified account,
  not a confirmation. Mario's identity, the studio's location real or
  layered, and the Wario Apparition's nature remain unresolved.
- **Date is same-day by editorial decision.** The recovered account itself is
  undated; the amendment is dated 5 Aethel (evening) to stay within the
  world clock and the existing provisional chain.
- **No new event.** The long account is deliberately a revision of the
  existing record, not a second filing; this is the feature's whole point.
- **No article analysis.** The amendment already carries the interpretation;
  the investigation exhibit carries the source criticism. A separate 20/80
  analysis would duplicate both.
- **No battle record / XP.** The corrupted-Mario engagement and the Wario
  Apparition dispersal stay inside the event as scenes; no new PC actions to
  award.
- **No generated art.** The account's visuals are document/cipher oriented;
  the exhibit's inline-CSS visual and the existing prop art carry it.
- **RNN pending unchanged at 8/10** — the same id was amended, so no new
  pending id; no episode cut owed.
