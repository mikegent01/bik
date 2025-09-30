// This file contains all the core narrative, character, and faction data for the application.
// It imports data from smaller, more manageable files.

import { CHARACTERS_1 } from './characters-1.js';
import { CHARACTERS_2 } from './characters-2.js';
import { CHARACTERS_3 } from './characters-3.js';
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
    ...CHARACTERS_1,
    ...CHARACTERS_2,
    ...CHARACTERS_3,
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
        description: "A group of former slaves freed by the party. Led by the heroic Dan, they are finding their place in a dangerous world, now allied with the 137 survivors of a trafficking operation aboard the Vigilance.",
        internal_politics: {
            ruling_faction: "dan",
            sub_factions: {
                dan: { 
                    name: "Dan, The Hero",
                    influence: 25,
                    description: "His incredible bravery has made him the de facto leader. He is recovering from grave injuries but remains a symbol of hope.",
                    current_focus: "Recovering from the loss of his arm and the trauma of the staff incident, while trying to guide the newly unified Toads."
                },
                toad_lee: { 
                    name: "Toad Lee, The First",
                    influence: 20,
                    description: "The first toad to join the party and a powerful warrior. He now bears the heavy burden of wielding X.O.'s staff, acting as the group's protector.",
                    current_focus: "Containing the staff's corrupting influence and upholding the Vow of Renewal."
                },
                eager: { 
                    name: "Eager, The Swift",
                    influence: 5,
                    description: "A nimble and quick-witted toad who prefers to keep his distance, using his whip to control the battlefield.",
                    current_focus: "Scouting safe locations for the toads to rest and gather supplies."
                },
                roger: { 
                    name: "Roger, The Pragmatist",
                    influence: 15,
                    description: "A practical toad who sees the world for what it is. He found a gun and has become a crack shot. He is co-leader of the newly integrated toads.",
                    current_focus: "Distributing the limited weapons and trying to maintain order between the two toad factions."
                },
                ryan: {
                    name: "Ryan, The Studious",
                    influence: 5,
                    description: "A quiet toad with a natural, if untrained, affinity for magic. ",
                    current_focus: "Trying to decipher a spell scroll they recovered during their escape."
                },
                bones: { 
                    name: "Bones, The Hardened",
                    influence: 5,
                    description: "A tough, grotesque toad who has seen the worst of the world and survived. He is resilient and cynical.",
                    current_focus: "Wrestling with the 'debt' he owes to the Orcs who kidnapped and then spared him."
                },
                first_cohort_of_renewal: {
                    name: "The First Cohort of Renewal (137 Toads)",
                    influence: 25,
                    description: "The 137 survivors of the cargo hold, led by the vengeful toad 'L'. Having sworn a fragile vow on the staff, they are a volatile but potentially powerful addition, demanding representation and respect.",
                    current_focus: "Integrating with the original group and mourning their 13 fallen comrades."
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