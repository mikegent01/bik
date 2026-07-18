import { Character, CharacterFaction } from './types';

export const CHARACTER_DATA_S5: Character[] = [
    {
        name: "Moone's Cousin",
        description: "A mysterious figure held captive in a cold, stone cell at the beginning of the great treasure hunt. Their identity and relation to 'Moone' (presumably Noone) are unknown, but their imprisonment serves as a prelude to MegaX's grand proclamation.",
        faction: CharacterFaction.ALLIES, // Presumed
        importance: 2,
        firstAppearanceEpisode: 92,
        lastAppearanceEpisode: 92,
    },
    {
        name: "Bones",
        description: "Liberated Toad master infiltrator who survived Aegis Command. Waking in the Planar Sanctum, he stole Fundamentals of Abjuration, read Veins of the Tapestry, fought a Canoloth, met the Toad God in the Astral Altar, and uncovered Thornbury's betrayal at Alpine Bank.",
        faction: CharacterFaction.ALLIES,
        importance: 3,
        firstAppearanceEpisode: 102,
        lastAppearanceEpisode: 102,
    },
    {
        name: "The Oracle (OC)",
        description: "46-year-old interdimensional custodian of the Corvinarus Sanctum. Reprimanded Bones for failing to kill rival Oracles, wielded a tuning fork against a Canoloth, and teleported Bones to Alpine Bank in the Regal Capital.",
        faction: CharacterFaction.NEUTRAL,
        importance: 3,
        firstAppearanceEpisode: 102,
        lastAppearanceEpisode: 102,
    },
    {
        name: "The Toad God (Mad Toad)",
        description: "Divine amphibian deity who intercepted Bones's spirit at the Astral Altar, claiming to be Archie's and Bones's best friend. Advised keeping the Oracle alive and leaving the crystal shard/manor divided.",
        faction: CharacterFaction.ALLIES,
        importance: 3,
        firstAppearanceEpisode: 102,
        lastAppearanceEpisode: 102,
    },
];
