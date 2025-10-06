// This file contains all side quests related to Guilds & Charters.
export const GUILDS_QUESTS = {
    'guild_gryphon_contract_1': {
        id: 'guild_gryphon_contract_1',
        title: "Gilded Gryphon: The Road to Vemilia",
        type: 'side',
        category: 'Guilds & Charters',
        objective: "The Gilded Gryphon Mercenary Company has a high-priority contract to escort a magitek component shipment to the Imperial Landship Yard in Vemilia. The route is beset by Rebel Clan ambushes.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Gain a neutral or positive reputation with the Gilded Gryphon Mercenary Company.",
        steps: [
            { id: 'step1', title: "Accept the Contract", status: 'active', description: "Meet with Commander Valerius at the Gryphon's Roost to accept the contract and receive the details of the shipment and route." },
            { id: 'step2', title: "Survive the Ambush", status: 'locked', description: "Repel a coordinated ambush by the Rebel Clans in the Baldora Plains." },
            { id: 'step3', title: "Deliver the Cargo", status: 'locked', description: "Deliver the magitek component safely to the Iron Legion quartermaster at the Imperial Landship Yard in Vemilia." }
        ]
    },
    'guild_wayfinders_charting': {
        id: 'guild_wayfinders_charting',
        title: "Wayfinders' Guild: Chart the Sunken Coast",
        type: 'side',
        category: 'Guilds & Charters',
        objective: "High Cartographer Elara requires a skilled team to chart the treacherous Shipwreck Graveyard off the Yale Shores. The area is filled with dangerous reefs and haunted by the ghosts of drowned sailors.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Visit the Wayfinders' Guildhall in Port Yale.",
        steps: [
            { id: 'step1', title: "Acquire a Ghost-Warded Vessel", status: 'active', description: "Secure a ship that can navigate the Graveyard. This may involve purchasing one or getting one enchanted by the Mages' Guild." },
            { id: 'step2', title: "Map Three Key Wrecks", status: 'locked', description: "Navigate the treacherous waters and create detailed charts of three major shipwrecks in the area." },
            { id: 'step3', title: "Confront the Wailing Fleet", status: 'locked', description: "Face the spectral ghost ships that protect the Graveyard's heart and return with the completed charts." }
        ]
    },
    'guild_mages_anomaly': {
        id: 'guild_mages_anomaly',
        title: "Mages' Guild: Contain the Anomaly",
        type: 'side',
        category: 'Guilds & Charters',
        objective: "An experiment by the Innovator faction in Autumnwood has gone awry, creating an unstable reality tear. The Aegis Magi need a deniable, third-party team to enter the rift and collapse it before the Conservators find out.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Gain favor with Janna Brightspark or the Innovator faction of the Mages' Guild.",
        steps: [
            { id: 'step1', title: "Enter the Rift", status: 'active', description: "Janna Brightspark provides a runic key to enter the chaotic pocket dimension created by the failed experiment." },
            { id: 'step2', title: "Destroy the Reality Anchors", status: 'locked', description: "Find and destroy the three malfunctioning reality anchors that are keeping the rift open, while fighting off the strange creatures from the other side." },
            { id: 'step3', title: "Report to Janna", status: 'locked', description: "Return to Janna Brightspark with news of the rift's closure, earning her gratitude and a powerful magical reward." }
        ]
    },
    'charter_bounty_hunter_1': {
        id: 'charter_bounty_hunter_1',
        title: "Azure Blade: Bring in the Deserter",
        type: 'side',
        category: 'Guilds & Charters',
        objective: "The Azure Blade Bounty Hunters have a charter to bring in a high-ranking Iron Legion deserter, last seen heading towards the lawless town of Rogueport.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Visit an Azure Blade chapterhouse in a major city.",
        steps: [
            { id: 'step1', title: "Pick up the Trail", status: 'active', description: "Investigate the deserter's last known location and gather clues to track him to Rogueport." },
            { id: 'step2', title: "The Confrontation", status: 'locked', description: "Confront the deserter in a den of thieves in Rogueport. He is a skilled warrior and will not come quietly." },
            { id: 'step3', title: "Deliver the Bounty", status: 'locked', description: "Return the deserter, dead or alive, to the Azure Blade guild for payment." }
        ]
    }
};