# Date Filing Guide — How to Date an Article

Every article needs an in-world date. A date is not decoration: it controls
chronology, XP sorting, reputation decay, RNN coverage, home-page recency, and
whether later filings can tell what happened before what.

Use this guide whenever supplied notes or a transcript do not give a clear date.

---

## First, tense — where does the story sit in time?

Before chaining anything, decide from the story itself which of three tenses
the filing lives in. Agents get this wrong in one direction: they see
`currentDate.json` and date everything to the present, even when the event
happened long before. **The filing date is the event's date**, not the day
someone typed it into the archive.

| Story position | How to date it |
|---|---|
| **Present** — it just happened at the table | Chain to the world clock through the prior filings ([the rule below](#the-rule)). Even here, the clock is a check, not the answer. |
| **Past** — a recovered record, backfilled arc, history page | Date it when it happened, however far that sits from `currentDate.json`. A correct date in 955 BF beats a wrong date near 1040 BF. The clock only matters so the new date does not collide with existing filings. |
| **After the present** — a later-dated log | Keep its own date and label the provenance; see [Later-dated filings](#later-dated-filings). |

The archive grows mostly by backfill. A filing does not need to sit near the
current clock to be correct — it needs to sit where its events happened.

---

## The rule

> **If the log has no date, walk backward through the prior filed events until
> you find a solid date, then move forward beat-by-beat.**

Do not leave a new article undated because the pasted log omitted the date. Do
not copy `currentDate.json` blindly. The world clock is a check, not a shortcut.

---

## Date chain procedure

1. **Read the supplied log.** Look for explicit dates, holidays, “next morning,”
   “three days later,” rest periods, travel time, and plane/realm context.
2. **Resolve every relative time clue before using the world clock.** Phrases such as
   “a week ago,” “three nights later,” “the morning after,” or “since Peach left”
   are date evidence. Count them against the referenced event or solid calendar
   anchor first. Do not replace a relative clue with `currentDate.json` merely
   because the transcript has no timestamp. For example, seven days before
   `5 Aethel, 1040 BF` is `28 Harvestide, 1040 BF` (Harvestide has 30 days).
3. **Read the referenced article before treating a name as a time anchor.** Check the
   character's status and the source event's date. A deceased character's keepsake,
   an old letter, or a memory is not evidence that the person acted recently. In
   this archive Princess Peach was assassinated on Highsun 1, 955 BF; a Peach
   handkerchief in a 1040 filing must therefore be filed as an old keepsake or as
   an explicitly unresolved temporal anomaly, never as a recent gift.
4. **Find the immediately previous event in the same arc.** Use `relatedArticles`,
   titles, participants, and prior part numbers.
3. **If that event has no solid date, keep going backward** until one event in
   the chain has a usable calendar date.
4. **Walk forward from that anchor.** Add the days/hours implied by the intervening
   events. If Part II is “next day” from Part I, date it that way. If two parts
   happen the same day, say so.
5. **Backfill vague earlier dates when you touch the chain.** If previous files
   say only “Mid-10XX BF,” replace them with the best dated chain you can defend
   so the current file is not hanging from fog.
6. **Check the world clock.** `Reputation-Matrix2/data/currentDate.json` is the
   Material Plane present. New Material filings should not accidentally date
   themselves after the current clock unless the run is intentionally advancing it.
7. **Use a qualifier when needed.** “Harvestide 29, 1040 BF — late, inferred from
   prior Ebott sequence” is better than no date and better than pretending the
   transcript printed a timestamp.

---

## What counts as a solid date?

Solid enough:

- `Harvestide 30, 1040 BF — night`
- `Aethel 4, 1040 BF`
- `17 Aethel, 1032 BF`
- `Harvestide 29, 1040 BF — Day 6 of the Mount Ebott survey`
- `Bloom 12, 922 BF (Feyward clock)`

Not solid enough for a new filing:

- `Mid-10XX BF`
- `Modern Era`
- `after the previous one`
- `current day`
- `Day 4` with no calendar anchor anywhere in the arc

Vague legacy dates can remain until their chain is touched. Once touched, repair
the local chain instead of adding another vague date.

---

## Planar and realm clocks

The archive has more than one clock.

| Clock | Use |
|---|---|
| **Material / Imperial** | Default. Check `currentDate.json`. |
| **Shadowfell drift** | Use for Shadow Estate / Tymnas-side filings when the Shadowfell has moved differently from the Material. |
| **Feyward clock** | Use `922 BF (Feyward clock)` when inside the Feyward. Do not synchronize it to Material `1040 BF`. |

If a filing compares two clocks, put the main date in the field and the other in
prose or a parenthetical. Do not “fix” the difference; the disagreement is canon.

---

## Later-dated filings

Some logs are later than the current Material clock. Do **not** drag them back
to `currentDate.json` just to make them fit the present-day site. Date the
record to its own in-world date and add a provenance phrase when needed.

Use this form:

```text
Harvestide 29, 1045 BF — Day 6 of the Mount Ebott survey
```

Rules:

```text
□ If the transcript implies a later-dated context, preserve it.
□ Backfill the whole local chain into that sequence, not only the final file.
□ Use prose or a filing note to explain why the archive has a later-dated record.
□ Do not mix later-dated events into present-day causality without prose explaining the archive status.
□ XP dateSort uses the later year if XP is attached to the later-dated event.
```

A later-dated filing can still appear in the archive. It must simply be labeled
so the reader understands that the record is recovered, previewed, or filed out
of current chronological order.

---

## Time filing codes — the machine-checkable twin

Going off vibes stopped working. Eight events are filed on `30 Harvestide,
1040 BF` with no way to tell which happened first, and until this section
existed nothing in the repository could check a date at all.

So every **new** filing carries a `timeCode` alongside its human `date`.

```text
TC:1040-08-30T23:50/SHD
   |    |  |  |     |
   |    |  |  |     clock: MAT | SHD | FEY | SUBJ
   |    |  |  in-world time, 24h, optional
   |    |  day
   |    month, 1-indexed (08 = Harvestide)
   year
```

The `date` string does not change and does not go away. It stays the readable,
in-world, Waluigi-voiced line. The code is its sortable twin, and
`tools/check-timecodes.py` makes the two agree.

### Month numbers

| # | Month | Days | # | Month | Days |
|---:|---|---:|---:|---|---:|
| 01 | Firstlight | 30 | 07 | Highsun | 30 |
| 02 | Chillwind | 30 | 08 | Harvestide | 30 |
| 03 | Veridia | 30 | 09 | Aethel | 30 |
| 04 | Bloom | 30 | 10 | Darkmoon | 30 |
| 05 | Floria | 30 | 11 | Frostfall | 30 |
| 06 | Efferd | 30 | 12 | Deepwinter | **35** |

### Clock suffixes

| Suffix | Clock |
|---|---|
| `MAT` | Material / Imperial. The default. Checked against `currentDate.json`. |
| `SHD` | Shadowfell drift. |
| `FEY` | Feyward clock. Never synchronised to Material. |
| `SUBJ` | Subjective or unverified duration — use when the record itself says the elapsed time is unknown. |

### The time is evidence, not decoration

Only stamp an hour the record can support. If the log says "later that night,"
you may order the beats; you may **not** invent a clock reading for a moment the
table never established. A code with no `T` is perfectly legal and is the right
answer whenever the hour is genuinely unknown:

```text
TC:1040-08-30/SHD
```

Do not roll a filing past midnight into the next day unless the prose says so.
Four filings of the storm night sit at 21:00, 22:40, 23:20 and 23:50 on
30 Harvestide precisely because the record never claims anyone saw midnight.

### What the checker enforces

```text
□ the code parses
□ the month exists and the day fits it (Deepwinter has 35)
□ the clock suffix is one of the four
□ the code's month/year agree with the human date string
□ MAT filings do not sit after currentDate.json unless laterDated: true
```

Run it directly, or let `tools/check-all.py` run it for you:

```bash
python3 tools/check-timecodes.py           # report
python3 tools/check-timecodes.py --strict  # exit 1 on error (used by check-all)
```

### Ordering same-day filings

This is the problem the code exists to solve. When several filings share a day,
the codes give the archive a real sequence:

```text
the_hanging_tree_apple…      TC:1040-08-30T21:00/SHD
green_t_at_the_door…         TC:1040-08-30T22:40/SHD
the_scorncrow_skirmish       TC:1040-08-30T23:20/SHD
the_belly_of_the_beast       TC:1040-08-30T23:50/SHD
```

### Backfill policy

Old filings are **not** required to have codes, and a missing code is not an
error. Add one whenever you touch a record's chain, and always add one to a new
filing.

---

## Date field format

Use readable in-world dates:

```text
Harvestide 29, 1040 BF — late night
Harvestide 29, 1040 BF — Day 6 of the Mount Ebott survey
Bloom 12, 922 BF (Feyward clock)
17 Aethel, 1032 BF
```

For XP awards, also set `dateSort` using the sortable year/day/hour convention
already described in `SESSION_FILING_PROCESS.md`. When you change an event's
visible date, check any `xpAwards[]` on the same event for matching `date` and
`dateSort` drift.

---

## Backfilling older files

When a new log belongs to a chain whose earlier files have missing or vague
`date` fields:

```text
□ Find the oldest solid anchor in that arc
□ Assign dates forward through the chain
□ Mark inferred dates honestly in the date string if needed
□ Do not redraft unrelated prose just to fix the date
□ Run reference/check-all after edits
□ Mention the backfill in the run report
```

Example pattern:

```text
Part I   → Harvestide 24, 1040 BF — Day 1
Part II  → Harvestide 25, 1040 BF — Day 2
Part III → Harvestide 26, 1040 BF — Day 3
Part IV  → Harvestide 27, 1040 BF — Day 4, transit leg
Part V   → Harvestide 27, 1040 BF — Day 4, later
Part VI  → Harvestide 27, 1040 BF — Day 4, false meadow
Part VII → Harvestide 29, 1040 BF — Day 6
Final    → Harvestide 29, 1040 BF — Day 6, after the oath
```

The exact dates must come from the actual arc, but the method is always the same:
walk backward to a solid date, then forward through the filed sequence.

---

## Do not do these

- Do not leave a new event with no `date`.
- Do not invent a real-world/table date as an in-world date.
- Do not use `currentDate.json` without checking the chain.
- Do not synchronize Feyward/Shadowfell/Material clocks by force.
- Do not update only the final part of a numbered arc if earlier touched parts
  still say “unknown” or “Mid-10XX BF.”
- Do not forget XP `dateSort` when changing XP award dates.
