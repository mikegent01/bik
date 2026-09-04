# Backlog art — staging, not canon

Images in this directory are **AI renders kept for reference**. They are not
canon and nothing in the archive should treat them as the primary plate for a
record.

## Promotion rules

Backlog art may be *surfaced* on a record without becoming canon, using the
`imageAlternates[]` field on any article record:

```json
"image": "portraits/jack_melvus_miser.png",
"imageCaption": "Canon likeness, cropped from the pencil sheet.",
"imageAlternates": [
  { "src": "portraits/alternates/jack_melvus_miser-alt.png",
    "caption": "Alternate: painted commission of the same likeness.",
    "credit": "Non-canon study — machine-rendered from the pencil sheet." }
]
```

Frame 0 of the lead rotator is always `image`, so a reader who never touches the
control sees exactly the canon plate. Alternates sit behind an arrow control and
must carry a `credit` line saying what they are.

When promoting a file out of the backlog:

1. Move it to `Reputation-Matrix2/portraits/alternates/` (portrait studies) or
   `Reputation-Matrix2/assets/illustrations/` (scene art).
2. Reference it from `imageAlternates[]`, never from `image`, unless the owner
   has explicitly adopted it as canon.
3. Record the move in that run's report.

## `miser-family/` — promoted 3 September 2026

The canon Miser art is cropped from the artist's own pencil sheet
(`miser family.png` at the repo root, dated 27 April 2026):

- `Reputation-Matrix2/portraits/jack_melvus_miser.png`
- `Reputation-Matrix2/portraits/miser_family.png`

The two AI renders generated earlier in that run were moved to
`Reputation-Matrix2/portraits/alternates/` and are now surfaced as **alternate
frames only** on the Jack, Miser family and Vellanet Rise records:

| File | What it is | Where it appears |
|---|---|---|
| `alternates/jack_melvus_miser-alt.png` | Painted portrait of Jack in Order colours, heraldry visible | Frame 2 on `jack_melvus_miser` |
| `alternates/miser_family-alt.png` | Redrawn group shot of all five figures plus Wanda | Frame 2 on `miser_family` and `vellanet_rise` |

This directory is now empty of Miser files and kept for the next batch.
