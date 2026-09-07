# The Filing Desk (hub menu)

A filing is not one page any more. The same night in the Silent Grove can be
read five different ways, and until now four of them were hidden behind the
fifth. Clicking a record on the index dropped you straight into the prose, and
the analysis, the commentary, the case file and the XP ledger were only
discoverable by scrolling to a panel most readers never reached.

The filing desk fixes that. A record that has been filed more than one way opens
a **menu** first.

## The five doors

| Door | What it is | Where it comes from | Art |
|---|---|---|---|
| 📖 **Story** | The filing itself, in order, as recorded | the record's own `description` / `sections` | Waluigi reading a ledger |
| 🖋️ **Analysis** | One thesis, argued cold, signed | `data/articleAnalyses.json` → `sourceArticle` | Waluigi with a quill, unconvinced |
| 🎙️ **Commentary** | Waluigi's Cut — the whole story with him talking over it | `data/commentaries.json` → `sourceArticle` | Waluigi shouting into a broadcast mic |
| 🔍 **Investigation** | The paper behind the prose: exhibits, DCs, open leads | `data/investigations.json` via `invConnections()` | Waluigi in a noir trench coat and fedora, magnifying glass |
| ✦ **XP** | What the session actually paid, per person | `xpAwards` on the record (or a co-filed one) | Waluigi holding a glowing scoring ledger |

Art lives in `assets/hub/hub_<key>.png`. Every tile was produced by **editing
`portraits/waluigi.png`**, never by generating a fresh character — same face,
same hat emblem, same armour, different job.

## Arc vs XP

The menu ships **XP**, not Arc. Arcs are already covered: an arc is a property of
an *investigation* (`arcIds` on a case file), so an Arc tile would almost always
be a second door onto the door the 🔍 tile already opens. XP is genuinely its own
thing — it is the only view that answers "what did this session actually pay?" —
and 46 records carry `xpAwards`, so the tile lights up often enough to earn its
square.

## The two rules

1. **Never show a menu with one door.** `hubIsWorthIt(id)` counts the available
   modes and returns false below two. `openHub()` then falls through to
   `Router.go('#/article/…')`, behaving exactly like `openId()` always did. Of
   the 167 event and battle records, **61 qualify** and 106 go straight to prose.
2. **Grey the missing ones, don't hide them.** A reader who sees Commentary
   greyed out has learned something true about the archive: this filing has no
   cut recorded yet. Hiding the row teaches nothing. Unavailable tiles are
   greyscale, non-clickable, and swap the blurb for the reason
   ("No commentary track recorded for this filing.").

## Routes

| Route | Renders |
|---|---|
| `#/hub/<id>` | The menu (falls back to the article if fewer than two doors) |
| `#/desk/<id>` | Alias |
| `#/article/<id>` | The story, always, no menu — the escape hatch chip uses this |
| `#/article-analysis/<id>` | An analysis (`#/analysis/<id>` now aliases it) |
| `#/commentary/<id>` | A commentary |
| `#/investigation/<id>` | A case file |

## Code map

| Thing | Location |
|---|---|
| `hubOptions(id)` | `index.html`, after `commentariesForSource()` — returns all five descriptors with `available`, `route`, `meta`, `empty` |
| `hubIsWorthIt(id)` | same block — the ≥2 gate |
| `openHub(id)` | same block — the entry point index cards call |
| `view_hub(id)` | same block — renders the menu |
| Route | `Router.render`, `route==='hub'||route==='desk'` |
| Styles | `Reputation-Matrix2/app/styles/systems/investigations.css`, `.hub-*` block at the end |

## Multiple filings of the same kind

If a record has two analyses or three case files, the tile opens the first and
lists the rest as chips underneath it (`extra[]`). The tile stays one tile; the
menu never becomes a list of lists.

## Adding a sixth door

Add a descriptor to the array in `hubOptions()`. It needs `key`, `label`, `icon`,
`img`, `blurb`, `empty`, `available`, `route`, and optionally `meta` and
`extra[]`. The grid, the greying, the ≥2 gate and the responsive layout all key
off `available` and need no further changes. Generate its art by editing
`portraits/waluigi.png` so the desk stays one person doing five jobs.
