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
        description: "A group of former slaves forged in tragedy. After discovering and freeing 150 more trafficked toads, a catastrophic magical accident killed 13 of the newcomers and gravely injured their leader, Dan. Now bound by a fragile vow, they are split by distrust and grief, trying to find a path forward in a world that sees them as pawns.",
        internal_politics: {
            ruling_faction: "dan",
            sub_factions: {
                dan: {
                    name: "Dan, The Wounded Hero",
                    influence: 20,
                    status: "Weakened & Withdrawn",
                    description: "Once the group's beacon of hope, Dan is now physically and emotionally shattered. The loss of his arm and the weight of the 13 deaths have left him silent, unable to lead.",
                    opinions: {
                        toad_lee: "He's strong. He has to be. He's carrying the burden I couldn't.",
                        first_cohort_of_renewal: "They hate me. They should. It was my fault."
                    }
                },
                toad_lee: {
                    name: "Toad Lee, The Warden",
                    influence: 30,
                    status: "Enforcing Order",
                    description: "The first toad to join the party. Now the reluctant warden of X.O.'s staff, he maintains the group's fragile unity through grim determination and the threat of his axe.",
                     opinions: {
                        dan: "He's broken. I have to be the rock until he can stand again.",
                        first_cohort_of_renewal: "They're angry and scared. They need a firm hand, not kind words."
                    }
                },
                first_cohort_of_renewal: {
                    name: "The First Cohort of Renewal",
                    influence: 30,
                    status: "Restive & Vengeful",
                    description: "The 137 survivors of the cargo hold, led by the vengeful toad 'L'. They see Dan as a murderer and Toad Lee as his accomplice. They are a volatile but powerful faction within the group.",
                    opinions: {
                        dan: "He killed our brothers. He calls it an accident; we call it a betrayal.",
                        toad_lee: "He protects the killer and holds the weapon that did the deed. We do not trust him."
                    }
                },
                roger: {
                    name: "Roger, The Pragmatist",
                    influence: 15,
                    status: "Managing Logistics",
                    description: "A practical toad who sees the world for what it is. He is trying to manage the logistics of a fractured group, seeing the infighting as a waste of resources.",
                    opinions: {
                        dan: "A tragedy. But emotion doesn't fill bellies. We need a clear head.",
                        toad_lee: "Intimidation is a temporary solution. We need a sustainable system."
                    }
                },
                ryan: {
                    name: "Ryan, The Watcher",
                    influence: 5,
                    status: "Duplicitous",
                    description: "A quiet toad with a natural affinity for magic. Revealed to be a 'warden' involved in the trafficking ring, his true motives are unknown. He watches the chaos with cold, analytical detachment.",
                    opinions: {
                        dan: "A predictable emotional response to trauma. Makes him easy to manipulate.",
                        toad_lee: "He holds the artifact. An obstacle to be managed or removed."
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