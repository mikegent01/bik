# Content Systems Guide

Guidelines for adding **events, battles, characters and races** to the Reputation Matrix. These are not just text records: each entry should create a usable relationship between the world, its systems and the player's choices.

The existing data is intentionally permissive, so older entries may not satisfy every recommendation. New content should follow this guide; improve older generic entries when you touch them.

## Shared standard: make data do something

Before adding an entry, answer four questions:

1. **What is the player-facing hook?** What can the player discover, choose, change or use?
2. **What system does it connect to?** Calendar, reputation, factions, quests, map, battle, relations, inventory or timeline.
3. **What changes afterward?** Record a state change, not only a description.
4. **How can it be checked?** Use stable IDs, resolvable references and a small validation script or checklist.

Prefer a small, complete entry over a large generic one. Do not invent a field unless the renderer or a documented system consumes it. When adding a new field, update the relevant loader and this guide in the same change.

### Identity and references

- Use a globally unique, stable `id`; use lowercase `snake_case` for new JSON IDs and the local convention for JS exports.
- Resolve every character, faction, race, location, quest, battle and related-article reference before shipping.
- Keep display text separate from IDs. IDs should not change just because a name, title or portrait changes.
- Use `source`, `canonStatus`, `confidence` or `notes` where an entry is historical, disputed, rumoured or non-canon. Do not present uncertainty as fact.
- Add a portrait, banner, icon or map location only when the asset exists and its path is tested.

## 1. Events

An event is a moment that changes the world, not a paragraph that describes one.

### Minimum event shape

```js
{
  id: 'unique_event_id',
  title: 'Readable title',
  description: 'What happens and why it matters.',
  date: 'YYYY-MM-DD', // or the project calendar format
  location: 'poi_or_region_id',
  participants: ['character_id'],
  factions: ['faction_id'],
  consequences: {
    reputation: [],
    relations: [],
    quests: [],
    map: [],
    timeline: []
  },
  canonStatus: 'canon'
}
```

### Event design rules

- Give the event one clear trigger, one visible scene and one consequence. If it has several independent turns, split it into linked events.
- Make the date, location and participants agree with the calendar and existing chronology.
- Include at least one player-facing result: a reputation shift, relation change, quest unlock/closure, faction change, map update, inventory effect or timeline entry.
- Distinguish `scheduled` events from events that are unlocked by a condition. Never rely on load order for timing.
- Use explicit conditions and effects rather than prose such as “this may anger the faction.”
- Events that are meant to be read as stories should follow `STORY_FORMAT_GUIDE.md`: physical scenes first, commentary second, and long analysis in structured fields.
- A rumour, report or eyewitness account should preserve its source and confidence; contradictory accounts are useful when intentional.

### Event quality checklist

```text
□ unique ID, date, location and participants are present
□ trigger / prerequisites are explicit
□ at least one consequence is machine-readable
□ all references resolve
□ the event does not silently rewrite an established date or relationship
□ replay, save/load and duplicate-trigger behaviour are defined
```

## 2. Battles

A battle is a conflict with participants, objectives, geography and an outcome—not only a list of winners and losers.

### Minimum battle shape

```js
{
  id: 'battle_id',
  name: 'Readable battle name',
  date: 'YYYY-MM-DD',
  location: 'poi_or_map_id',
  sides: [
    { id: 'faction_a', commanders: ['character_id'], units: [], objective: '...' },
    { id: 'faction_b', commanders: ['character_id'], units: [], objective: '...' }
  ],
  result: 'faction_a_victory',
  casualties: [],
  consequences: [],
  sources: [],
  canonStatus: 'canon'
}
```

### Battle design rules

- Define what each side wanted, what they knew, and what counted as success. A tactical withdrawal or rescued civilian can be a meaningful outcome.
- Ground every battle in a map location, terrain and an approach. Link map POIs or battlefield coordinates when the battle is playable or visualized.
- Record commanders and units only when they are defined elsewhere; do not create anonymous armies that have no faction, scale or capability.
- Separate tactical result from strategic result. The winner of the field may lose the campaign, legitimacy, supplies or public support.
- Track casualties and material loss with consistent units. Unknown numbers should be marked unknown, estimated or disputed.
- Give the battle a human anchor: one decision, relationship, civilian consequence or named unit that makes the outcome legible.
- Do not grant a faction capabilities just to solve the scene. Check abilities, logistics, terrain, alliances and prior damage first.
- Feed the result into the calendar, factions, map, quests, relations, timeline and posts where appropriate.

### Battle quality checklist

```text
□ date and location fit the timeline and map
□ sides, commanders, objectives and capabilities are explicit
□ tactical and strategic outcomes are both recorded
□ casualties / uncertainty are labelled consistently
□ consequences update at least one world system
□ no faction is rewarded or punished without a stated cause
```

## 3. Characters

A character should be more than a name, portrait and generic biography. Characters are system nodes: their choices should affect relations, factions, quests, events and battles.

### Minimum character shape

```js
{
  id: 'character_id',
  name: 'Display Name',
  aliases: [],
  race: 'race_id',
  faction: 'faction_id',
  role: 'role_or_title',
  traits: [],
  goals: [],
  fears: [],
  relationships: [],
  abilities: [],
  status: 'active',
  portrait: 'path/to/portrait.png',
  canonStatus: 'canon'
}
```

### Character design rules

- Give every major character a present-tense goal, a pressure or fear, a capability and a limit. A biography is not a motivation.
- Add a contradiction or competing loyalty. This creates choices and prevents characters from becoming faction labels.
- Use relationship edges with direction and reason: who feels what, how strongly, and why it can change. Avoid a flat list of friends and enemies.
- Tie abilities to the systems that consume them. If an ability affects battles, quests or reputation, document its constraints and cost.
- Define status transitions (`active`, `missing`, `dead`, `retired`, `imprisoned`, etc.) and update dependent references when status changes.
- Give important characters at least one way to appear in play: an event, quest, battle command, post, shop, map POI or article.
- Keep voice and biography consistent with the character's race, culture, faction and history, while allowing individuals to depart from stereotypes.
- Avoid “generic competent leader” entries. State what this person does differently, what they refuse to do and what mistake they are likely to repeat.

### Character quality checklist

```text
□ goal, pressure, capability and limitation are all distinct
□ race / faction / status references resolve
□ relationships include reasons, not only labels
□ abilities have limits and are used by a real system
□ the character has at least one player-facing appearance
□ portrait and name aliases do not collide with another character
```

## 4. Races and cultures

Race entries should describe a people without turning a population into a single personality. Add the race-specific guidelines in the next content pass; for now, every new race must provide a usable identity, internal variation and system hooks.

At minimum, record:

- stable ID, display name and self-designation;
- regions, diaspora or settlement patterns;
- languages, traditions and social structures;
- physical traits only where relevant to daily life or gameplay;
- strengths, vulnerabilities and environmental adaptations without making them absolute;
- internal cultures, factions, class differences and dissent;
- relations with other races and factions, including historical cause;
- hooks for characters, events, battles, laws, quests and map locations;
- sources and canon status where the entry is reconstructed or disputed.

Do not use race as a shortcut for morality, intelligence, loyalty or occupation. Put those differences in characters, factions and institutions. A race can have recurring cultural patterns while still containing disagreement, change and individual choice.

## 5. Adding a new system

If a category needs more than descriptive fields, add the smallest system that creates meaningful interaction:

1. Define the player-facing question and the state it changes.
2. Identify the authoritative data file and loader.
3. Add IDs, validation and fallback behaviour before adding UI polish.
4. Connect the system to existing calendar, faction, relation, quest, map or battle data.
5. Add one complete example and one edge case.
6. Test duplicate loads, missing references, old saves and non-canon entries.
7. Document the schema and update this guide.

Good additions are composable: an event can alter a relationship, a battle can unlock an event, a character can command a battle, and a race can shape a location without any one file becoming a monolith.

## Final pre-flight

```text
□ IDs are stable and references resolve
□ the entry has a clear player-facing hook
□ at least one system consumes the new data
□ consequences are explicit, bounded and reversible where appropriate
□ canon / rumour / hypothetical status is visible
□ no generic field was added without a loader or renderer
□ existing data was not silently invalidated
```
