// This file aggregates all location-based "Request" quests.

const EXISTING_REQUESTS = {
    'request_oakhaven_pests': {
        id: 'request_oakhaven_pests',
        title: "Request: Pest Control",
        type: 'request',
        category: 'Requests',
        objective: "Martha Oakhaven of Oakhaven town needs help. Unusually large and aggressive Swoopers have been preying on her livestock. Clear out their nest in the nearby hills.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_lw_oakhaven'
    },
    'request_crossroads_reinforcements': {
        id: 'request_crossroads_reinforcements',
        title: "Request: Reinforcements Needed",
        type: 'request',
        category: 'Requests',
        objective: "The Iron Legion commander at Crossroads Keep is requesting reinforcements. A recent Rebel Clan ambush has thinned their ranks and they need able-bodied warriors to help them hold the line until a relief column arrives.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_lh_crossroads_keep'
    },
    'request_port_yale_delivery': {
        id: 'request_port_yale_delivery',
        title: "Request: A Discreet Delivery",
        type: 'request',
        category: 'Requests',
        objective: "A nervous merchant in Port Yale needs a 'sensitive' package delivered to the Crossroads Inn in Lockerwood. He's offering a high price for couriers who don't ask questions and can avoid both Regency patrols and pirate ambushes.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_ys_port_yale'
    },
    'request_toad_town_patrol': {
        id: 'request_toad_town_patrol',
        title: "Request: Join the Watch",
        type: 'request',
        category: 'Requests',
        objective: "The Toadstool Guard in Toad Town is stretched thin. They are offering a bounty to any capable adventurers willing to help them patrol the city's outer districts and clear out any Toad Gang agitators or Fawful's stray minions.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_mk_toadtown'
    },
    'request_wayfinders_escort': {
        id: 'request_wayfinders_escort',
        title: "Request: Escort a Cartographer",
        type: 'request',
        category: 'Requests',
        objective: "The Wayfinders' Guild needs an armed escort for a cartographer mapping the dangerous Ruins of Aeridor. The area is known to be haunted by elven spirits who do not take kindly to trespassers.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_yb_wayfinders_lodge'
    },
    'request_me_bree_escort': {
        id: 'request_me_bree_escort',
        title: "Request: Escort to Rivendell",
        type: 'request',
        category: 'Requests',
        objective: "Barliman Butterbur, the innkeeper of The Prancing Pony in Bree, is looking for a sturdy escort for a young Hobbit who needs to deliver a package of rare pipe-weed to Elrond in Rivendell. The road is dangerous and beset by Orcs.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_me_bree'
    },
    'request_me_erebor_gems': {
        id: 'request_me_erebor_gems',
        title: "Request: Rare Gems Needed",
        type: 'request',
        category: 'Requests',
        objective: "The master jewel-smith of Erebor is offering a king's ransom in gold for a flawless 'Star of the Mountains' gem, found only in the deepest, most dangerous caverns of the Misty Mountains, currently infested with Goblins.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_me_erebor'
    },
    'request_me_dol_amroth_bounty': {
        id: 'request_me_dol_amroth_bounty',
        title: "Request: Corsair Hunt",
        type: 'request',
        category: 'Requests',
        objective: "The Prince of Dol Amroth has placed a bounty on the heads of a notorious Corsair captain and his crew, who have been raiding the coasts of Belfalas. Proof of their defeat is required.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_me_dol_amroth'
    },
    'request_wh_averheim_bounty': {
        id: 'request_wh_averheim_bounty',
        title: "Request: Beastmen Scourge",
        type: 'request',
        category: 'Requests',
        objective: "The Elector Count of Averland, based in Averheim, has posted a bounty on a Beastman Warherd that has been terrorizing the surrounding farmlands. Proof of the Beastlord's demise is required.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_wh_averheim'
    },
    'request_wh_lustria_artifact': {
        id: 'request_wh_lustria_artifact',
        title: "Request: The Sun-Stone of Chotec",
        type: 'request',
        category: 'Requests',
        objective: "A Skink Priest at the Temple of the Eclipse is seeking brave adventurers to retrieve the 'Sun-Stone of Chotec' from a nearby, newly discovered Old One ruin, which is now infested with feral Skinks and territorial Stegadons.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        locationId: 'poi_wh_temple_of_the_eclipse'
    }
};

import { KIVOTOS_REQUESTS } from './requests-kivotos.js';
import { MIDDLE_EARTH_REQUESTS } from './requests-middle-earth.js';
import { DOUGHNUT_HOLE_REQUESTS } from './requests-doughnut-hole.js';
import { WARHAMMER_REQUESTS } from './requests-warhammer.js';
import { INTERNET_REQUESTS } from './quests-internet.js';
import { POKEMON_REQUESTS } from './requests-pokemon.js';

export const REQUESTS = {
    ...EXISTING_REQUESTS,
    ...KIVOTOS_REQUESTS,
    ...MIDDLE_EARTH_REQUESTS,
    ...DOUGHNUT_HOLE_REQUESTS,
    ...WARHAMMER_REQUESTS,
    ...INTERNET_REQUESTS,
    ...POKEMON_REQUESTS,
};