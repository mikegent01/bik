# Remaster Plan — Portraits, Records, and the Systems That Do Nothing

**Status:** in progress · **Branch:** `arena/01a0a756-bik`

This plan covers a single operator brief with eleven requests. It is written
before the work so the order is arguable, and each numbered section below ends
with the commit that closes it.

---

## 0. Ground rules carried from the README

- **Remaster, don't rewrite.** Nothing that works is deleted to make room.
- **Never describe a known character from scratch** — every portrait
  regeneration passes the operator's own reference art from
  `UpdatedMostuptodateplayer/` as the base image.
- **Never hand-edit a generated file.** Where a generator owns the output, the
  generator is edited.
- **No externally hosted art.** Temporary image hosts rot; a dead link in a
  battle record is a battle record that lies.

---

## 1. The Feyward clock is present tense

**Problem.** The archive treats the Feyward line as a flashback because its
dates read 722–922 BF while the world clock reads 1040 BF. It is not a
flashback. Feyward is **stuck** in its own year; the party is experiencing it
*now*, in session order.

**Fix.** A documented clock rule, not a date rewrite:

- `calendarMeta.json` gains a `pocketClocks` block naming the Feyward clock,
  the year it is stuck at, and the statement that filings on that clock are
  **present-tense sessions**, not history.
- `docs/DATE_FILING_GUIDE.md` gains a short section: *a pocket clock is
  present*. Tense comes from the session, not from the number.

**Commit:** `docs: the Feyward clock is present tense, not a flashback`

---

## 2 & 6. Portraits — two files per character, from the operator's own art

**Problem.** The archive has one portrait per character, sized for a web card,
and several of the main cast are drawn from art that predates the players'
current designs. Markop in particular has been rendered as a two-legged human;
he is a **centaur**.

**Fix.** Every main-cast character gets **two** files:

| File | Purpose | Shape |
|---|---|---|
| `portraits/player/fullbody/<id>.png` | Foundry VTT token/actor art | Full body, head to feet/hooves, transparent-ish plain field |
| `portraits/<id>.png` | The website portrait | The same figure, in scene, with background |

Generated from `UpdatedMostuptodateplayer/` as reference — **similar, not
identical**. Each plate puts the character in the situation their current
filings place them in (the Feyward overgrowth, the Shadow Estate corridor, the
Skittering Grove), with pose and kit drawn from the prose rather than copied
from the reference sheet.

Cast in scope: Remi, Markop, Archie, Hjumpik. **Bowser is left alone** — his
design has not changed.

**Commits:** one per character, so a bad plate can be reverted alone.

---

## 3. Externally hosted images are removed and replaced

Three live offsite links, all on temporary hosts:

| Link | Used by |
|---|---|
| `i.postimg.cc/MG5b2QSL/…` | `battles.json`, `battlefield.js` — **operator supplied the file**, no generation needed |
| `i.postimg.cc/pLtSY4J6/ageis-command.jpg` | `locations.json` — Aegis Command |
| `i.postimg.cc/9fyFgv6b/afternatg.png` | `locations.json` |

Plus two dead `i.imgur.com` icons in `shop-items/items_world_generated.js`.

**Fix.** The supplied file is committed to the repo and wired; the other two
are regenerated locally from the surrounding record's prose; the imgur icons
fall back to the local icon set. Then a checker so this cannot recur.

**Commit:** `fix: no externally hosted art in the archive`

---

## 4. Dynasties and Bloodlines earn their page

**Problem.** `DYNASTY_SYSTEM` is a large, good dataset that touches nothing.
A character record does not know what house it belongs to, and the Intel Board
scores confidence in secrets that no record reads.

**Fix (this pass).** Make the link bidirectional and visible in the data:

- `characters.json` records gain a `dynasty` field (`{ house, branch,
  memberId, standing }`) for everyone the dynasty archive already names.
- The character page renders a **House** panel: sigil, motto, seat, the
  member's position in the line, and the secrets the party's current intel
  score has actually unlocked.
- The dynasty page renders the reverse: which houses have *filed characters*,
  linked.

**Deferred and argued, not built:** the tablet. See §11.

**Commit:** `feat: dynasties reach characters.json and render on the record`

---

## 5. Conflicts and Major Battle Records

**Problem.** Both render as a flat grid of truncated cards inside the
Battlefield Layer panel — 9 conflicts and 51 battles as identical tiles with a
190-character clipped blurb and no sense of which war a battle belongs to.

**Fix.** Battles group **under their conflict**. A conflict card becomes a
front: status, belligerents, the battles filed under it with their outcome
chips, and a casualty/outcome roll-up computed from the records rather than
asserted. Unattached battles collect in an "Unassigned" block, which is a
worklist rather than an embarrassment.

**Commit:** `feat: battles file under their conflict`

---

## 7. More fronts than the Mushroom Kingdom

**Problem.** The Mushroom Kingdom and the Regal Empire carry the campaign. The
atlas already holds regions with filed lore, faction data and open threads
that no session has opened.

**Deliverable:** a written shortlist — `docs/worklists/OPEN_FRONTS.md` — of
regions the archive can already support, each with what is filed, what thread
is dangling, and the first session hook. Options, not a decision.

**Commit:** `docs: candidate fronts outside the Mushroom Kingdom`

---

## 8. The investigation system, explained like you are five

**Problem.** `docs/INVESTIGATIONS.md` opens with a migration argument and a
schema. A reader who has never seen the system does not learn what an
investigation *is*, what a DC does, or why a roll happens once.

**Fix.** The guide is re-shaped: a plain-language opening ("what this is, in
one minute"), a worked example that follows one real exhibit from paper to
analysis, then the schema — which is reference material and belongs last. The
in-app blurbs on `#/investigations` get the same treatment.

**Commit:** `docs: rewrite the investigations guide for a first-time reader`

---

## 9. Hide `+0`

Standing and reputation factor chips print every factor including the ones
contributing nothing, so a neutral faction shows four `+0` chips and a formula
of zeroes. Zero-valued factors are dropped; if every factor is zero the row
says so once in words.

**Commit:** `fix: hide zero-valued factors in standing and the matrix`

---

## 10. Faction banners

Nine faction banners exist; twenty-two factions are filed. Generate square
banner plates for the factions that have none, wire them to the faction
record, and check coverage.

**Commit:** `feat: faction banner sheets`

---

## 11. Faiths & Doctrinal Tension CSS — and the tablet idea

The `#/faiths` index has almost no styling of its own: the compatibility matrix
is a raw `<table>` with inline `rgba()` on each cell, the group blocks are
undifferentiated cards, and nothing reads as a *register*. It gets a scoped
stylesheet following `docs/CSS_STYLE_GUIDE.md` — no invented global classes,
everything under a `.faiths-*` prefix.

**The tablet (discussion, not work).** The Wahbook sidebar currently mixes
reference (articles, atlas, calendar) with *operator tools* (shop, bank, XP,
injuries, translation). Those are different jobs. A "WAHpad" — a tablet shell
with apps — would let the tools leave the sidebar without being buried:

- **For it:** the sidebar is 40+ links; tools have state (a wallet, a party, a
  roll history) that a sidebar link cannot express; an app grid is honest about
  the fact that the shop is a *thing you use*, not a page you read.
- **Against it:** a second navigation system is a second thing to maintain, and
  a modal shell breaks deep links unless every app keeps its own route.
- **The version worth building:** keep the routes exactly as they are, and add
  the tablet as a *launcher* over them. Nothing moves; the sidebar loses its
  tool section; every app is still a URL. That is reversible, which the
  alternative is not.

Filed for a later run.

**Commit:** `feat: Faiths & Doctrinal Tension gets its own stylesheet`

---

# Run log — what actually shipped

Written after the fact. Where the plan above and this section disagree, this
section is what is in the repository.

| # | Item | State | Commit |
|---|---|---|---|
| 1 | Remi portrait reattached | done | portrait commit |
| 2 | Feyward clock is the present | done | `feat: the Feyward clock is the present…` |
| 3 | Two portrait variants per character | done | portrait + heraldry commits |
| 4 | No externally hosted art | done | `fix: no externally hosted art…` |
| 5 | Dynasties surface on characters | done | `feat: a character's house reaches their own page` |
| 5c | Intel gates faction dossiers | done | `feat: intel gates the faction dossier…` |
| 5b | Wahinterface | **built as a standalone prototype** | `feat: the wahinterface, as a standalone prototype` |
| 6 | Conflicts & battle records | done | `feat: battles file under their conflict` |
| 7 | Main cast regenerated | done | portrait + heraldry commits |
| 8 | New fronts | done — both filed | `feat: two new fronts — Sarasaland and the Underground` |
| 9 | Hide `+0` | done | `fix: hide +0 in standing…` |
| 10 | Faction banner sheets | done, 1 cell withheld | `feat: faction heraldry…` |
| 11 | Faiths CSS | done | `feat: Faiths & Doctrinal Tension…` |
| 12 | Investigations rewrite | done | `docs: rewrite the investigations guide…` |

## Deviations from the plan, and why

**Item 10 was planned as one banner per generation.** It shipped as three 3x3
contact sheets sliced by `tools/slice-banner-sheet.py`. Two reasons, one
practical and one not: 26 single generations does not fit in a turn, and a
sheet drawn in one pass is *internally consistent* in a way that 26 separate
generations are not. Shared frame weight and palette discipline matter more
for a set of heraldry than any single emblem does.

Larger grids were tested and rejected. At a ~1024px canvas, 9x9 gives each
banner 113px and coherence fails long before that — emblems bleed motifs into
neighbours. 3x3 gives ~340px per cell. This is recorded in the tool's
docstring so it is not retried.

**One banner was withheld.** The Colour Division cell came back as effectively
the *Dark Side of the Moon* cover. `--skip` dropped it; that faction has no
banner until it is regenerated. Worth knowing that prism/spectrum prompts
converge there.

**Item 11 grew past CSS.** Writing the stylesheet surfaced that
`religion-data.js` carries `tension_consequences` — the mechanical effects of
each friction band — and nothing had ever rendered them. Styling a register
that withholds its own consequences is decorating a dead end, so those ship
too.

**Item 5 was planned as a `dynasty:{}` key added to `characters.json`.** It
shipped as a computed index instead. The link is derivable from id and name,
and duplicating it into 34 records would mean every future house edit needs a
matching character edit. The interesting half was never the link anyway — it
was that the 25/45/65/85 intel thresholds in the dynasty data had never once
been read against what the party had actually earned.

## Item 10, finished

Nine more sheets took the archive to **107 banners and 100/100 faction
coverage**. Two things worth keeping from that pass:

**Group sheets by setting, not by registry order.** Because nine emblems
drawn in one pass share palette and frame weight, putting the grimdark
factions on one sheet, the academies on another and so on makes each family
read as a coherent set. The Animatopia predator/prey pair was specified as
matched cells in one sheet and came back mirroring each other — that would
have been luck if generated separately.

**Prism prompts converge on album art.** The Colour Division's first attempt
was effectively the Dark Side of the Moon cover. The fix was to respecify the
emblem entirely (five brushes in a steel hexagon) *and* name prism, triangle
and rainbow-beam as explicit negatives. Describing what you don't want is not
enough on its own; the concept has to move.

The alias map for the three legacy `*_banner.png` files is **retired** — each
has a properly named replacement, so the contract is once again just "the id
is the filename".

`tools/check-banners.py` now guards the three failure modes, including the
subtle one: a banner file nobody registered is invisible, which looks exactly
like no banner at all. It also found 27 pre-existing dangling banner paths in
profile themes and scheduled posts; 13 were repointed at real art, 14 remain
genuinely art-less.

## Still open

- **14 art-less legacy banner names** (`default_banner`, `star_church`,
  `stonecarvers`, `deephold`, `iron_crown`, …). These are concepts without
  designs, reported as advisory by `check-banners.py`.
- **Advisory hotlinks** — four records still point at remote CDNs
  (`characters.json[26]`, `[59]`, `locations.json[23]`, `nations.json[20]`).
  Non-fatal; `check-external-art.py --strict` fails on them.
## This batch

**Item 8 — both fronts filed.** The Sarasaland Stabilisation and The Underground
Breach, three battles each, 57 battles across 19 fronts. Neither invents a
kingdom; both were already sitting in the data. Sarasaland is an annexation
conducted entirely on paper — the three records contain no weapons. The
Underground Breach finally files the invasion that the nations register has
described in one sentence all campaign while no conflict record existed.

**Item 5c — intel stopped being decorative.** The faction modal advertised an
intelligence percentage computed from which *fields existed* in the record. It
could not move and no party action changed it. It now reads real earned intel,
and the internal-politics dossier — blocs, their private opinions of the party,
named officers, Waluigi's leverage tip — is gated at 15/35/55/75 instead of
being free to anyone who clicked.

Scoring deliberately does not use `partyIntel()` alone: only eleven
`INTEL_RULES` exist, so that would have sealed a hundred dossiers behind rules
nobody wrote. `factionIntelScore()` derives from evidence already in the
archive, weighted so that fighting a faction teaches more than reading about
one. Across the 37 factions the data names: 6 fully open, 5 at named-officers,
6 at opinions, 6 at blocs, 14 sealed.

**Audit pass.** Prompted by the faction-icon bug — code that ran correctly and
produced the wrong thing on screen, which no check could see. Two more of the
same shape found and fixed: the investigation close-reading header's three
spans had no rules at all (rendering as one run-on line), and
`.front-tally--unknown` was the one outcome variant without a style.
`tools/check-css-coverage.py` makes the sweep permanent — 152 watched classes,
all styled.

**Item 5b — the wahinterface exists.** `wahinterface/index.html`, standalone.
Built in the order the notes argued for: the shell plus *one* app, because the
notes' own claim was that a launcher would be a theme and only a shared context
is worth having. The dock badge recomputing another app's state is the thesis
made testable. Five apps are locked icons — the roadmap shown, not faked.

## Still open

- **Items 8 and 5b are closed.** Both were awaiting a decision; the decision
  came and the work is done.
