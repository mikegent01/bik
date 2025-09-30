// This file contains the data for various Guilds and Charters in the world.

export const GUILD_DATA = {
    'wayfinders_guild': {
        name: "#01 The Wayfinders' Guild",
        description: "An independent organization dedicated to charting the unknown regions of the world, from the deepest dungeons to the skies beyond The Edge. They sell maps and recovered artifacts to fund their expeditions.",
        leader: "High Cartographer Elara",
        sponsoring_faction: null, 
        headquarters: "The Horizon Spire, Port Anvil",
        goals: [
            "Map the entire Doughnut World.",
            "Discover and catalogue new species of flora and fauna.",
            "Uncover lost artifacts from ancient civilizations."
        ],
        ranks: [
            { title: "High Cartographer", description: "The elected leader of the Guild." },
            { title: "Master Wayfinder", description: "Leads major expeditions into uncharted territory." },
            { title: "Journeyman", description: "Experienced explorers qualified for solo missions." },
            { title: "Apprentice", description: "New members learning the arts of cartography and survival." }
        ],
        rules: [
            "The map must be true. Accuracy is sacred.",
            "Share knowledge with the Guild. Discoveries belong to all.",
            "Leave no trace but footprints. Respect the places you explore.",
            "Aid a fellow Wayfinder in need. The wilderness is foe enough."
        ],
        recruitment: "Membership is granted to those who can present a significant discovery—a previously unmapped location, a new species, or a lost artifact. The discovery is vetted by a council of Master Wayfinders. Alternatively, one can be accepted as an apprentice under the sponsorship of a Journeyman.",
        sub_guilds: []
    },
    'aegis_magi': {
        name: "#03 The Aegis Magi",
        description: "The official military arm of the Mages' Guild. They are battle-mages who serve as enforcers of the Guild's laws, protectors of its assets, and a standing army against external threats. They value discipline and the practical application of destructive and defensive magic.",
        leader: "Battle-Mage Kovar",
        sponsoring_faction: "mages_guild",
        headquarters: "The Argent Tower, Silverhaven",
        goals: [
            "Defend the Mages' Guild from all external threats.",
            "Enforce the edicts of the Archmage Sovereign.",
            "Neutralize rogue mages and contain magical anomalies."
        ],
        ranks: [
            { title: "Grand Magus", description: "The supreme commander of the Aegis, second only to the Archmage." },
            { title: "Battle-Mage", description: "Veteran officers who lead companies in the field." },
            { title: "Adept", description: "Fully-fledged battle-mages skilled in combat magic." },
            { title: "Initiate", description: "Apprentices who have chosen the martial path." }
        ],
        rules: [
            "The Guild is paramount. Defend it with your life.",
            "Control your power. An errant spell is a betrayal.",
            "Knowledge is a weapon. Wield it with precision.",
            "A rogue mage is a threat to all. Show no mercy."
        ],
        recruitment: "Mages' Guild apprentices who show an aptitude for combat magic and a disciplined temperament may be invited to join the Aegis. They undergo rigorous physical and magical training, learning to cast spells in the heat of battle without incinerating their allies.",
        sub_guilds: []
    },
    'azure_blade_bounty_hunters': {
        name: "#04 Azure Blade Bounty Hunters' Guild",
        description: "A professional guild of bounty hunters that operates across the world. They are bound by a strict code that emphasizes the fulfillment of the contract above all else. They are known for their professionalism and their distinctive blue blades.",
        leader: "The Azure Prime",
        sponsoring_faction: null,
        headquarters: "The Azure Keep (Location Varies)",
        goals: [
            "Fulfill all contracts to the letter.",
            "Uphold the Code of the Blade.",
            "Bring fugitives to justice, for the right price."
        ],
        ranks: [
            { title: "Azure Prime", description: "The anonymous, elected leader of the Guild." },
            { title: "Master Hunter", description: "A legendary bounty hunter who takes on the most dangerous contracts." },
            { title: "Blade", description: "A full, licensed member of the Guild." },
            { title: "Initiate", description: "An apprentice learning the trade of the hunt." }
        ],
        rules: [
            "The Contract is Sacred. Fulfill it or die trying.",
            "Professionalism Above All. We are not assassins.",
            "Bring them in alive, unless the contract specifies otherwise.",
            "The Guild is neutral. We serve the contract, not the client's cause."
        ],
        recruitment: "Initiates must be sponsored by a Blade and pass the three trials: The Trial of the Hunt, the Trial of the Law, and the Trial of the Heart.",
        sub_guilds: []
    }
};

export const CHARTER_DATA = {
    'gilded_gryphon': {
        name: "#02 The Gilded Gryphon Mercenary Company",
        description: "A highly disciplined and expensive mercenary company formed from the remnants of a disgraced Iron Legion cohort. They operate under a strict charter and value contracts and coin above all else. They are known for their professionalism and their heavy infantry.",
        leader: "Commander Valerius 'The Gilded'",
        sponsoring_faction: "iron_legion",
        headquarters: "The Gryphon's Roost, Midlands Border",
        goals: [
            "Secure high-value contracts from major powers.",
            "Rebuild the company's reputation and treasury.",
            "Recruit skilled warriors from any background."
        ],
        ranks: [
            { title: "Commander", description: "The supreme leader of the company." },
            { title: "Captain", description: "Leads a full wing of soldiers (approx. 100)." },
            { title: "Gryphon Knight", description: "Veteran officers, proven in battle." },
            { title: "Mercenary", description: "Rank-and-file soldiers under contract." },
            { title: "Initiate", description: "New recruits undergoing the Forge Trials." }
        ],
        rules: [
            "A contract is bond. Fulfill it to the letter.",
            "Payment is paramount. Secure it before the blood is dry.",
            "Discipline is our shield. Maintain it or be broken.",
            "Leave politics to the politicians. We serve the coin, not the crown."
        ],
        recruitment: "Recruitment is open to any skilled warrior, regardless of origin. Prospective members must survive the grueling 'Forge Trials'—a series of combat and survival tests—and then swear an unbreakable oath to the company's charter.",
        sub_guilds: []
    }
};