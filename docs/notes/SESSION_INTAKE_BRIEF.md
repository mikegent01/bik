# Pre-Session Intake Brief — read before the next transcript lands

**Purpose:** this page is the work done *before* the session data arrives. The
README's filing process says the event is written last and that locations,
characters and XP are settled first. That ordering only helps if somebody has
already read the archive's current state, so the moment the transcript arrives
the only open questions are about **the session**, not about the repository.

This brief answers three things:

1. **Where every campaign currently stands** — the date chain each new filing
   must attach to, and the cliffhanger it must resolve.
2. **What needs images and what does not** — the art triage, decided from
   `docs/IMAGE_GENERATION_GUIDE.md` before any generation is spent.
3. **What the intake must tell me** — the minimum facts a filing cannot be
   written without, so nothing has to be guessed and flagged later.

It also records the **standing gaps** found while reading the archive, so the
next run knows the omissions were decisions rather than oversights.

> Regenerate the state sections with the commands in
> [Verification](#verification-the-state-above-is-checkable) — they go stale as
> soon as a session is filed.

---

## 1. Where the archive stands right now

World clock (`Reputation-Matrix2/data/currentDate.json`): **Aethel 5, 1040 BF**,
Material Plane. 120 filed events, all 120 illustrated. `check-all.py` is green
on every content check.

### The four campaign fronts

The "Current fronts" strip is derived from each event's `timeCode` suffix, so
the suffix is how a filing declares its campaign. One cover per campaign,
newest filing wins.

| Suffix | Campaign | Newest filing | Its in-world date | State it left the party in |
|---|---|---|---|---|
| `SHD` | **Shadeward** | `judgement_in_the_grove` | 1 Aethel, 1040 BF, 00:20 | **Unresolved, mid-fight.** Scorncrow executed on its knees; grove surrounded by Embercap and giant spiders; Salam down and unrecovered; Markop's skull split; Remi separated in the woods with an unconscious man; Archie under Legion arrest |
| `MAT` | **Mario** | `the_tape_and_the_wario_files` | 20 Harvestide, 1035 BF | Filed. Luigi recovered alive; the courier note reads *"the star is not lost, find the garden above the fire"*; Mario still absent |
| `FEY` | **Feyward** | `feyward_i_cant_afford_not_to_care` | 2 Aethel, **922 BF (Feyward clock)** | Filed. Toad Lee and Waluigi in Colour Division custody as leverage; Hjumpik walked alone into the lady's sanctuary; the overgrowth answers to *Carnivorous* |
| `SUBJ` | Subjective | — | — | No filing carries this suffix yet |

**The Shadeward front is the live one.** It is the only campaign whose newest
filing is explicitly `Unresolved`, and five separate threads are hanging off it.
If today's session is Shadeward, it is a **direct continuation**, not a new
scene — the date chains forward from 1 Aethel 1040 BF on the Shadowfell clock.

### The three clocks — do not reconcile them

`currentDate.json` is the **Material** clock only.

- **Material (`MAT`)** — Aethel 5, 1040 BF.
- **Shadowfell (`SHD`)** — imperial reckoning but *drifting*; a month-plus has
  passed there since the planar fracture. Shadeward filings carry the drift
  forward rather than snapping to the Material date.
- **Feyward (`FEY`)** — **922 BF by its own count**, and it is a
  present-tense session played at the table now. A low year number is not a
  flashback. Never convert it to a Material date and never file it as
  *recovered* or *historical*.

### Open leads the session may resolve

Nine investigation files are active. If the session touches one of these, the
filing accretes into the **existing** file — one arc, one investigation.

| Investigation | Arc | Live leads worth watching |
|---|---|---|
| `shadeward_feyward_ruined` | Shadowfell estate / Feywild attic / Raventree | soul ring occupant, Toad Lee's missing time, Steely's core memory, the missing Oracle card, the fourth Portal Set item |
| `mario_charred_note_file` | Mario's disappearance | **find the garden above the fire**, the Luigi in green and blue, Mario's extraction route, whether the note burned before or after writing |
| `capital_intrigue_file` | Capital intrigue | documents sealed in iron, the third branch, who withdraws the Anomalies charges |
| `mushroom_civil_war_file` | Mushroom civil war | one physical article attesting the god-toad, who paid eleven months in advance |
| `toad_liberation_file` | Toad liberation | which casualty return went upward, the other eleven Sonic Grid nodes, the empty seventh seat |
| `rakasha_alliance_file` | Rakasha alliance | what both parties think the pact says, the Rogueport retrieval |

**Note:** the two most recent filings — `judgement_in_the_grove` and
`the_tape_and_the_wario_files` — are **not yet in any investigation file**. See
[standing gaps](#4-standing-gaps-found-while-reading).

---

## 2. What needs images, and what does not

Art coverage is currently **120/120 filings illustrated (100%)**. There is no
backlog. The rule that keeps it that way is *one image per new filing,
generated as part of filing it* — so today's session owes art, and the
question is only how much.

### The count, decided by filing shape

Read from `docs/IMAGE_GENERATION_GUIDE.md`. For calibration, the last four
Shadeward/Mario filings shipped **4, 4, 2 and 3** plates respectively.

| If today's session is… | Images | What they are |
|---|---:|---|
| A normal session (one or two locations, one set-piece) | **2–4** | Lead plate + the clearest section beats |
| A long or multi-location session, or a finale | **4–7** | Lead + three to six section plates |
| A battle that earns its own `battles.json` record | **2–5** | Lead battlefield, turning point, aftermath/evidence |
| A short single-scene filing (a conversation, a handover) | **1–2** | Lead, plus one object if the object is the point |
| Pure data (roster, correction, rules change, shop idea) | **0–1** | Only if a visual object is central — and say so in the run report |

### What gets an image

- **The lead plate — always.** Every substantial filing gets one; it is the
  "field plate" a reader recovers by reading, and it is what the campaign-fronts
  strip uses. A filing with no image cannot front its campaign.
- **A beat whose subject is a person doing something.** A stand-off, an
  execution, someone going down. These need the character *in frame*.
- **A physical object the plot turns on** — a document, a weapon, a wound, a
  device.
- **A new named location** the party will return to.

### What does NOT get an image

- Sections that are argument rather than scene — `waluigiAssessment`,
  `aftermath`, analysis layers.
- **Exhibits/props.** They render as styled HTML paper in a modal. Filing a
  document means writing it into `props.json`, *not* drawing a picture of it.
- Every section by habit. Three sections in one room do not need three plates.
- Decorative filler to hit a number.
- A beat already carried by an existing archive image — **reuse beats
  generating.** Check `Reputation-Matrix2/assets/images/events/…` and
  `portraits/` first and say "reused `<path>`" in the run report.

### Rules I will follow when generating

```text
□ Prompt sheet FIRST, in /tmp/<slug>-prompts.md. No generation during that step.
□ Every named character is pulled from portraits/<id>.png and passed in
  images:[] — never described from scratch.
□ NEVER pass a scene/location plate as a reference. Bases are for PEOPLE.
  (The Judgement in the Grove set broke this and produced four pictures of
  the same tree.)
□ The setting is carried in WORDS. Vary camera, distance, framing and light
  deliberately between slots.
□ Text in an image: either exactly specified letter-for-letter in caps, or
  "no text, no lettering, no signage".
□ Look at every generated image with read_file and check it against its
  "Must appear" list.
□ Fix a wrong detail by EDITING the image, not rerolling it.
□ Compress to under ~300 KB, 1600px long edge, then wire and verify the path.
```

### Portraits that do not exist yet

If one of these is central to today's session, the correct output is **commission
the portrait first**, then use it as the reference for every scene plate —
not four pictures of an empty room.

| Character | Portrait | Note |
|---|---|---|
| Markop, Remi, Archie, Salam, Eager, Dan, Green T, Waluigi, Wario, Embercap, Toad Lee, Hjumpik | ✅ present | Pass directly as references |
| Salam | ✅ `salam.png` + `salam_scarred.png` + `salam_grove_fallen.png` | **Post-injury likeness exists** — use the scarred version from this filing on |
| **Mossy** | ⚠️ `mossy_toad.png` | Exists under a non-matching id; wire by filename, don't regenerate |
| **The Scorncrow** | ❌ none | Uses a scene plate as its article image. Now dead — commission only if it appears in a flashback or the body matters |
| Any new NPC from today | ❌ | Commission if central, silhouette if incidental |

> **Deferred on purpose:** the party portrait refresh. The guide says it waits
> for the battle to resolve, because regenerating mid-fight means doing the work
> twice. **The Shadeward fight is still open.** If today's session ends it, that
> filing owns the refresh — and deletes the pending note in the same commit.

---

## 3. What I need from the intake

Send the session however is easiest — raw transcript, bullets, voice-note dump.
None of the below needs to be formatted. This is just the list of things a
filing genuinely cannot be written without, so I don't have to guess and flag.

### Must have

1. **Which campaign** — Shadeward / Mario / Feyward / something new. This sets
   the `timeCode` suffix and therefore which front the cover replaces.
2. **Where it picks up.** Especially for Shadeward: does it continue straight
   out of the grove fight, or has time passed? "Same night, ten minutes later"
   is enough. I chain the date from there — I will not copy the world clock.
3. **Who was there**, by name, including NPCs. I will run every name through the
   naming gate.
4. **What happened, in order.** Rough beats are fine — I build the numbered beat
   list from them. **Include the boring opening.** The briefing, the argument
   about who goes first, the looting: that material is where characters are most
   themselves and it is the first thing a hurried filing drops.
5. **What changed by the end.** Injuries, deaths, custody, who holds what, who
   is angry with whom, where the party physically is.

### Very helpful if you have it

6. **Quoted lines.** Even half-remembered. Quoted speech is the single biggest
   difference between a scene and a set of minutes.
7. **Named objects and numbers.** The specific weapon, the exact wound, the
   amount of money, what was written on the thing. These are also the art
   direction — the prompt sheet is built from these nouns.
8. **Any document the scene named** — an order, a bill, a letter, a warrant. If
   the prose says it exists, the reader has to be able to open it, so I file it
   as an exhibit in the issuing body's voice.
9. **Rolls that mattered** — the nat 20, the critical failure, the save someone
   blew.
10. **Whether the big fight should get its own battle record.** I can judge it
    from the beats, but you'll know whether it felt like a set-piece.

### Tell me only if you have an opinion

11. **XP.** I'll propose awards from the beats and file them **on the event as a
    preview**. I do not silently mutate the authoritative ledger — you confirm
    the numbers.
12. **Anything that must NOT be filed** — table talk, spoilers for next session,
    a name you want left unnamed.

### What I will not ask you

- Dates. I chain them from the prior filing on the right clock.
- `mike`, or any other table name. Rule zero: GM and player names never become
  characters. If a transcript hands me one I leave the character unnamed and
  refer to them by role.
- Real-world dates. Every date in every filing is a calendar date.

---

## 4. Standing gaps found while reading

Found while surveying, **deliberately not fixed in this PR** — one purpose per
PR, and this one is intake prep. Each is a candidate for its own change.

| # | Gap | Evidence | Why it matters |
|---|---|---|---|
| 1 | **The Scorncrow's character status says `Active`** | `characters.json` → `scorncrow`: *"Active — retreated into the mouth of its own tree…"* | It was executed in `judgement_in_the_grove`. The newest filing killed it and its record still says it walked away. `check-story-growth.py` flags it as needing review |
| 2 | **Two newest filings are in no investigation file** | `judgement_in_the_grove`, `the_tape_and_the_wario_files` | Step 7 of the filing process. Without a `sessions[]` row or an exhibit link, the *Investigate this further* panel never appears on either page |
| 3 | **`check-story-growth.py` finds no arc file for the grove filing** | *"Arc / investigation files: none found"* | Same root cause as #2 — the Shadeward arc file does not yet claim the session |
| 4 | **`dateSort` is encoded three different ways** | `10409010` (1 Aethel 1040), `10350820` (20 Harvestide 1035), `10351800` (18 Harvestide 1035), `9220209` (2 Aethel 922) | The guide specifies `YYYYDDHH`; the data uses at least three schemes. XP awards sort wrong across filings. Needs one convention and a checker, not a silent fourth variant |
| 5 | **7 duplicate character ids** | `check-story-growth.py`: *"7 duplicate id(s) exist in the archive; using first seen records"* | Tools resolve the first record seen; the second is unreachable |
| 6 | **Iron Legion dossier is the stalest system, 40 days** | `check-freshness.py` | The standing order makes the stalest system the next filing. The grove session ends in an Iron Legion arrest, so a Shadeward continuation would naturally service this |
| 7 | **RNN owes a backlog of 25 unaired events** | `build-rnn-broadcast.py --unaired` | The pending list tracks 2, but ground truth is 25. `--unaired` is authoritative when they disagree. Cadence is ~10 per episode, so an episode is owed — but that is its own PR |

Not defects, recorded so they are not re-investigated:

- `alliance cache` and `map lenses` fail in this sandbox only — both import
  `jsdom`, which is not installed here. Not repository breakage.
- Every other check in `check-all.py` passes.

---

## Verification — the state above is checkable

```bash
python3 tools/check-all.py                        # the full routine set
python3 tools/check-freshness.py                  # stalest system first
python3 tools/check-event-art.py                  # art coverage, broken paths
python3 tools/build-campaign-fronts.py --check    # one cover per campaign
python3 tools/build-rnn-broadcast.py --unaired    # what the news owes
python3 tools/check-story-growth.py <event_id>    # old pages needing review
```

Results at the time of writing: `check-all.py` green except the two
`jsdom` sandbox failures; art 120/120; fronts correct for all three live
campaigns; freshness stalest = Iron Legion at 40d; RNN unaired = 25.

## The order the filing will follow

Straight from `docs/SESSION_FILING_PROCESS.md`, once the data lands:

```text
1  beat list (opening included)
2  locations.json      — before any prose
3  characters.json     — naming gate on every name
4  xpAwards[]          — written out as data, before the prose
5  events.json         — NOW the prose gets written
6  props.json          — the paper the prose named + [[prop:…]] triggers
7  investigations.json — session row, exhibits, leads on the EXISTING arc file
8  mainPage.json + SITE_UPDATES + build-campaign-fronts.py --write
9  cross-system pass   — Pond Patrol, Regal Diet, WAHwire, maps, dynasties
10 RNN pending list → run report
```
