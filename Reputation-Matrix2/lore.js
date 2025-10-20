// This file contains all the core narrative, character, and faction data for the application.
// It imports data from smaller, more manageable files.

// UPDATED: Now imports from the single, consolidated character file.
import { CHARACTERS } from './characters-1.js';
import { MIDLANDS_FACTIONS } from './factions/midlands.js';
import { MUSHROOM_KINGDOM_FACTIONS } from './factions/mushroom-kingdom.js';
import { WIDESPREAD_FACTIONS } from './factions/widespread.js';
import { WILDERLANDS_FACTIONS } from './factions/wilderlands.js';
import { MIDDLE_EARTH_FACTIONS } from './factions/middle-earth.js';
import { INTERNET_FACTIONS } from './factions/internet.js';
import { WARHAMMER_FACTIONS } from './factions/warhammer.js';
import { KIVOTOS_FACTIONS } from './factions/kivotos.js';
import { SPACE_FACTIONS } from './factions/space.js';
import { POKEMON_FACTIONS } from './factions/pokemon.js';


import { AUXILIARY_PARTY, RUMORS } from './party-and-events.js';
import { PARLIAMENT_MEMBERS } from './parliament-members.js';
import { RAKASHA_DETAILS } from './rakasha-clans-details.js';
import { REBEL_CLANS_DETAILS } from './rebel-clans-details.js';
import { FAWFUL_DETAILS } from './fawful-details.js';
import { COSMIC_JESTERS_DETAILS } from './cosmic-jesters-details.js';

export { CHARACTER_RELATIONS } from './character-relations.js';

const combinedCharacters = {
    ...CHARACTERS,
    ...PARLIAMENT_MEMBERS
};

const combinedFactions = {
    ...MIDLANDS_FACTIONS,
    ...MUSHROOM_KINGDOM_FACTIONS,
    ...WIDESPREAD_FACTIONS,
    ...WILDERLANDS_FACTIONS,
    ...MIDDLE_EARTH_FACTIONS,
    ...INTERNET_FACTIONS,
    ...WARHAMMER_FACTIONS,
    ...KIVOTOS_FACTIONS,
    ...SPACE_FACTIONS,
    ...POKEMON_FACTIONS,
};

// Modify Mushroom Kingdom factions before final export
const modifiedMushroomKingdomFactions = { ...MUSHROOM_KINGDOM_FACTIONS };
if (modifiedMushroomKingdomFactions.liberated_toads) {
    modifiedMushroomKingdomFactions.liberated_toads = {
        ...modifiedMushroomKingdomFactions.liberated_toads,
        description: "A group of former slaves forged in tragedy. After discovering and freeing 150 more trafficked toads, a catastrophic magical accident killed 13 of the newcomers and gravely injured their leader, Dan. Now bound by a fragile vow and reeling from the discovery of an Iron Legion spy in their midst, they are split by distrust and grief, trying to find a path forward in a world that sees them as pawns.",
        internal_politics: {
            // UPDATED: Dan is now the ruling faction again after the successful vote.
            ruling_faction: "dan",
            sub_factions: {
                dan: {
                    name: "Dan, The Cautious Leader",
                    influence: 35, // Increased influence
                    status: "Leading with Caution", // UPDATED
                    description: "Once shattered by tragedy, Dan has found his voice again. His successful counter-proposal for safer, more organized expeditions has re-established his leadership, this time tempered by a deep-seated caution and a fierce desire to prevent any further loss of life.",
                    opinions: {
                        toad_lee: "He stands with me. His strength gives my words weight. Together, we can protect them.",
                        speaker_l: "He agreed to my plan. There is a path to unity, if we can walk it carefully."
                    }
                },
                toad_lee: {
                    name: "Toad Lee, The Warden",
                    influence: 30,
                    status: "Enforcing The New Doctrine",
                    description: "The first toad to join the party. Now the reluctant warden of X.O.'s staff, he has fully endorsed Dan's new, cautious strategy and is focused on organizing the larger, well-armed expeditions.",
                     opinions: {
                        dan: "He has found his strength again. My axe is his to command.",
                        speaker_l: "His conditions are acceptable, so long as they do not compromise the safety of our people."
                    }
                },
                speaker_l: { // ADDED Speaker L as a key sub-faction
                    name: "Speaker L & The First Cohort",
                    influence: 25,
                    status: "Watchful & Pragmatic",
                    description: "The de facto leader of the 137 survivors. While still demanding justice for their fallen comrades, L has pragmatically aligned with Dan's cautious strategy, seeing it as the best way to preserve their numbers while gathering intelligence on their enemies.",
                    opinions: {
                        dan: "His plan is sound. It protects our people. We will support it, but we have not forgotten his past failures.",
                        toad_lee: "He is a hammer. Useful for breaking things, including dissent. We will watch him."
                    }
                },
                roger: {
                    name: "Roger, The Pragmatist",
                    influence: 15,
                    status: "Managing Logistics",
                    description: "A practical toad who sees Dan's new doctrine as the most logistically sound strategy for minimizing attrition and maximizing resource gain. He is fully focused on equipping the new expeditions.",
                    opinions: {
                        dan: "His plan is efficient. It reduces risk and preserves our most valuable asset: personnel. I support it.",
                        toad_lee: "A necessary tool for maintaining order during a difficult transition."
                    }
                },
                ryan: {
                    name: "Ryan, The Arcane Student",
                    influence: 10,
                    status: "Studious & Worried",
                    description: "A quiet, studious toad with a natural but untrained affinity for magic. He backed Dan's proposal, fearing the loss of more lives, and is focused on understanding the nature of the threats they face.",
                    opinions: {
                        dan: "He chose the path that preserves life. It was the right choice.",
                        toad_lee: "His strength is a comfort, but the staff he holds is a source of great concern."
                    }
                },
                the_mole: {
                    name: "The Mole, Legion Infiltrator",
                    influence: 0,
                    status: "Exposed & At Large",
                    description: "An Iron Legion plant who infiltrated the toads. His identity was revealed after Shadeward Mansion. The cohort has voted to capture him and a second mole, Gerick, for interrogation.",
                    opinions: {
                        dan: "A predictable emotional wreck. His weakness made my job easy.",
                        toad_lee: "All bark and no bite. His 'order' is just fear."
                    }
                }
            }
        }
    };
}
combinedFactions.liberated_toads = modifiedMushroomKingdomFactions.liberated_toads;


export const LORE_DATA = {
    characters: combinedCharacters,
    auxiliary_party: { ...AUXILIARY_PARTY, group: { name: "Group Focuses" } },
    factions: combinedFactions,
    rumors: RUMORS,
    faction_details: {
        rakasha_clans: RAKASHA_DETAILS,
        rebel_clans: REBEL_CLANS_DETAILS,
        fawfuls_furious_freaks: FAWFUL_DETAILS,
        cosmic_jesters: COSMIC_JESTERS_DETAILS
    }
};