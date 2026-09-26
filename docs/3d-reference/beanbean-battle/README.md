# Bowser / Fawful / Cackletta — 3D base packet

These are **single, full-body 3/4 concept plates** prepared as clean image inputs for Hunyuan 3D. They deliberately use a plain studio background, readable hands and feet, and unobscured costume/silhouette information. They are character construction bases, not in-game archive plates.

## Files

| File | Intended use | Visual state |
|---|---|---|
| [bowser-base.png](bowser-base.png) | Main Bowser mesh input | Historical / classic Bowser: orange Koopa body, cream belly, green spiked shell, black cuffs and collar. No beard, cape, current dark armour, or glowing red eyes. |
| [fawful-base.png](fawful-base.png) | Main Fawful mesh input | Assistant-era Fawful: compact green Beanish body, blue spiral goggles, dark pointed hood, red cloak, gold clasps, small wand. It intentionally excludes his later purple suit and top hat. |
| [cackletta-base.png](cackletta-base.png) | Main Cackletta mesh input | Single Cackletta witch plate: green Beanbean face, curled purple witch hat, white ruff, magenta and violet gown with gold trim, black gloves, slim wand. |
| [generic-enemies-sheet.png](generic-enemies-sheet.png) | Four quick minor-enemy silhouette bases | Clockwork Fawful foot-soldier; corrupted Beanbean guard; tiny Cackletta-style imp; masked Fawful scout. These are **generic production designs**, not named archive characters. No dragon is included. |

## Spliced enemy cutouts (transparent background)

The 2x2 sheet above has been spliced into four ready-to-use cutouts by
[`tools/splice-sheet-cutouts.py`](../../../tools/splice-sheet-cutouts.py)
(quadrant crop + Python background removal). Each is a centered, alpha-trimmed
PNG with a transparent background:

| File | Sheet quadrant | Design |
|---|---|---|
| [enemy-clockwork-fawful-soldier.png](enemy-clockwork-fawful-soldier.png) | top-left | Clockwork Fawful foot-soldier |
| [enemy-corrupted-beanbean-guard.png](enemy-corrupted-beanbean-guard.png) | top-right | Corrupted Beanbean guard |
| [enemy-cackletta-imp.png](enemy-cackletta-imp.png) | bottom-left | Tiny Cackletta-style imp |
| [enemy-masked-fawful-scout.png](enemy-masked-fawful-scout.png) | bottom-right | Masked Fawful scout |

## Archive basis / scene caution

The archive separates the requested history into two related filings:

- `the_beanbean_incident` — **The Beanbean Kingdom Crisis** (c. 1012 BF) records Cackletta as the witch seeking ancient power through Princess Peach's stolen voice and Fawful as her assistant. Mario and Luigi defeat Cackletta; Fawful escapes and retains the grudge. The filing does **not** list Bowser as a combatant.
- `the_blorbs_crisis` (1018–1019 BF) records Bowser and Fawful together. Fawful manipulates Bowser with the Vacuum Shroom and deploys his enforcer Midbus; the Dark Star creates Dark Bowser. Cackletta is historical context there: Fawful previously survived her defeat.

So this packet is deliberately a **cross-era visual reference set** for the requested Bowser / Fawful / Cackletta scene, not a claim that all three share one fully documented archive battle. The dragon is intentionally omitted because a model already exists on your side.

## Hunyuan input notes

1. Use one of the three individual PNG plates as the character image input; do not feed the generic-enemy contact sheet as a single character.
2. For the enemy sheet, use the matching pre-spliced cutout (see the table above); crop the quadrant from the sheet only if you need the original backdrop instead of the transparent version.
3. Preserve Bowser's clean-shaven muzzle and normal amber eyes. Do not borrow the current Shadow Estate armour or the discarded bearded / red-eyed variant.
4. Preserve Fawful's red assistant cloak for this period; the purple tailored suit and top hat belong to the later active version.
