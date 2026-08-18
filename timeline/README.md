# Mission Dossier Timeline App

This directory is a bundled standalone React/Vite app for the **Mission Dossier:
The Mega X Campaign** timeline. It is not the main Waluipedia archive and it is
not part of `Reputation-Matrix2/`'s data pipeline.

The old README was the default AI Studio boilerplate. Keep this one focused on
how to run, review, and safely touch the bundled app without confusing it for
canon Waluipedia infrastructure.

---

## Status and boundaries

- **Standalone app:** source lives in `timeline/*.tsx`, `timeline/*.ts`, and
  `timeline/index.css`.
- **Separate dependency tree:** this folder has its own `package.json` and
  `package-lock.json`.
- **Separate subject matter:** the data here describes the Mega X campaign, not
  the current Waluipedia / Vigilance Terminal campaign records.
- **No shared runtime:** it does not import `Reputation-Matrix2/data/*.json`, the
  root `index.html`, WAHwire, RNN, investigations, XP, or the reputation matrix.
- **Bundled build artifact:** `buildco/` appears to be a prebuilt static export.
  Do not edit compiled files there by hand; rebuild from source if that bundle
  must change.

Treat this directory like a vendored or sidecar app. Documentation edits are
fine; behavior changes should be narrow and should not leak assumptions back
into Waluipedia's main data contracts.

---

## Run locally

Prerequisites: Node.js and npm.

```bash
cd timeline
npm install
npm run dev -- --host 0.0.0.0
```

The Vite dev server prints the local URL. In Arena/live-preview environments,
`--host 0.0.0.0` is required so the preview proxy can reach it.

Build and preview:

```bash
cd timeline
npm run build
npm run preview -- --host 0.0.0.0
```

---

## Project layout

| Path | Purpose |
|---|---|
| `index.tsx` | App entry point, view switcher, calendar view, render root |
| `types.ts` | Shared TypeScript enums and interfaces |
| `constants.ts` | Re-exports of the data modules consumed by the app |
| `Sidebar.tsx` | Main navigation between views |
| `TimelineView.tsx` | Chronological event view |
| `StoryArcsView.tsx` | Arc summaries and key beats |
| `EpisodesView.tsx` | Episode summaries and filters |
| `CharactersView.tsx` | Character directory |
| `FactionsView.tsx` | Faction directory |
| `LocationsView.tsx` | Location directory |
| `WorldMapView.tsx`, `ProvinceMap.tsx`, `facilityMap.tsx`, `outsideMap.tsx` | Map-style displays |
| `BestiaryView.tsx` | Creature/anomaly directory |
| `ItemsView.tsx` | Key item directory |
| `GlossaryView.tsx` | Glossary terms |
| `SeasonsView.tsx` | Season overview |
| `BonusLoreView.tsx`, `loreVideos.tsx` | Extra lore/video summaries |
| `timeline*.tsx`, `episodes*.tsx`, `characters*.tsx`, etc. | Static campaign data split by season/episode ranges |
| `index.css`, `tailwind.config.js`, `postcss.config.js` | Styling pipeline |
| `buildco/` | Existing built output / captured bundle; regenerate instead of hand-editing |

---

## Data model

The app's data is TypeScript/React data, not JSON. Several fields accept
`ReactNode`, so content modules can contain formatted JSX rather than plain
strings. Important types live in `types.ts`:

| Type | Used by | Required shape |
|---|---|---|
| `TimelineEvent` | timeline and calendar | title, description, icon, episode, ISO-like date, category |
| `EpisodeSummary` | episode view | episode number, title, summary, plot impact, tags |
| `Character` | character view | name, description, faction, importance, first/last appearance |
| `StoryArc` | arc view | title, episode range, JSX summary, optional key events/development |
| `Location` | location view | id, name, description, first/last appearance |
| `KeyItem` | item view | name, description, first/last appearance |
| `BestiaryEntry` | bestiary | name, description, first/last appearance, type |
| `LoreVideo` | bonus lore | title and JSX content |

When adding data, keep episode numbering consistent with the helper in
`index.tsx`:

```text
0          → Prologue
1–32       → Season 1 labels
33–72      → Season 2 labels
73–100     → Season 3 labels
101+       → Season 4 labels
```

If that season split changes, update both the helper and any prose in the views
that explains the timeline.

---

## Safe edit workflow

1. Identify the view that displays the thing you want to change.
2. Edit the corresponding data module (`characters.s4.tsx`,
   `episodes.ep91-100.tsx`, `timeline.ep101-110.tsx`, etc.).
3. Keep IDs and names stable when a view uses them as React keys or map labels.
4. Run `npm run build`.
5. Open the built app or dev server and inspect the affected view.
6. Do **not** copy Waluipedia data into this app unless the user explicitly asks
   for a one-off migration or comparison.

Because the content is static TypeScript, there is no generator to run and no
runtime data fetch to validate. TypeScript build errors are the main guardrail.

---

## Verification checklist

For a PR touching `timeline/`:

```bash
cd timeline
npm install
npm run build
```

Manual checks:

- sidebar navigation switches every view without a blank panel;
- timeline, episodes, and calendar agree on episode labels;
- calendar filters show and clear categories correctly;
- maps render nodes/paths in the expected places;
- no console errors appear in the browser;
- `buildco/` is not hand-edited compiled output unless the PR explicitly
  refreshes a static deployment artifact.

---

## What not to do

- Do not treat this app as the canonical Waluipedia chronology.
- Do not import `Reputation-Matrix2/data/` just to avoid duplicating content;
  that creates a hidden dependency between unrelated archives.
- Do not edit `buildco/assets/*.js` directly.
- Do not add API keys to `.env.local` or commit local environment files.
- Do not rename data modules casually; imports are explicit and numerous.

If this sidecar app becomes actively maintained again, promote its rules into a
proper migration plan. Until then, keep changes small, buildable, and isolated.
