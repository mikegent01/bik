import { playSound } from './common.js';
import { state } from './state.js';
import { getIntelForFaction } from './systems/common.js';

/**
 * Checks if the user has sufficient intel for a given requirement.
 * Bypasses checks if debug mode is active.
 * @param {object} requirement - An object like { faction: 'faction_key', level: 70 }.
 * @returns {boolean} True if intel is sufficient or debug is on, false otherwise.
 */
function hasSufficientIntel(requirement) {
    if (state.debugMode) {
        return true;
    }
    if (!requirement || !requirement.faction || typeof requirement.level === 'undefined') {
        return false;
    }
    return getIntelForFaction(requirement.faction) >= requirement.level;
}


const ARTIFACT_DATA = {
    main_artifacts: [
        {
            id: 'star_fragment',
            name: 'The Star Fragment',
            image: 'artifacts/the_star_fragment.png',
            description: "A piece of a fallen star, shattered into nine fragments by the God Toad. Each shard bestows immense, unique power upon its bearer, but also subtly corrupts them to fit a grand, unknown design."
        },
        {
            id: 'fire_flower',
            name: 'The Fireflower',
            image: 'artifacts/the_fireflower.png',
            description: "A legendary artifact that grants mastery over flame. It is said to be hidden in a volcanic dungeon, guarded by a fire dragon and its cult."
        },
        {
            id: 'mushroom',
            name: 'The Mushroom of Life',
            image: 'artifacts/the_mushroom.png',
            description: "A relic with the power to restore life itself. It grows in a cursed, time-distorting forest, protected by ancient guardians who test all who seek it."
        }
    ],
    star_bearers: [
        {
            id: 'rebellion',
            name: 'Rebellion - The Dark Sovereign',
            powers: "Rebellion's true powers remain largely unknown, as few have witnessed them and survived. Ancient texts speak of his ability to devour souls and incorporate their knowledge and abilities into his own. The darkness he commands is said to be sentient, a living extension of his will that hungers for life. Witnesses claim to have seen him split into multiple shadow forms, each capable of independent action, while his true body remains hidden. The most disturbing rumors suggest he can corrupt other Star Fragment bearers, slowly turning them into his thralls while they believe they maintain their free will.",
            fragment_name: "Crown Shard (Core Power)",
            fragment_desc: "The Crown Shard is the largest and most powerful fragment of the star. It contains the core essence of leadership and dominion, granting its bearer authority over other fragment holders to some degree. The shard pulses with a black light that seems to absorb rather than emit energy, growing stronger with each life it touches.",
            history: "When the God Toad distributed the fragments, Rebellion was initially chosen for his loyalty. However, the fragment's power corrupted him, awakening a hunger for dominance. He established a fortress in the darkest corner of the Midlands, where no sunlight ever penetrates, and began plotting to collect all fragments for himself. He has already attempted to absorb the Ice Toad's fragment but was thwarted by the adventurers who now possess it. Ancient prophecies speak of him as 'The Star Devourer' who will bring eternal darkness if not stopped.",
            intel_requirements: {
                identity: { faction: 'onyx_hand', level: 40 },
                details: { faction: 'onyx_hand', level: 70 },
                history: { faction: 'onyx_hand', level: 90 },
            }
        },
        {
            id: 'charismatic',
            name: 'Charismatic - The Battle Master',
            powers: "Charismatic can ignite his body in flames that do not harm him but scorch everything he touches. He can project firebolts and create walls of flame to control the battlefield. His most devastating ability is Phoenix Form, which transforms him into a fiery entity that can fly and regenerate from seemingly fatal wounds.",
            fragment_name: "Warrior Shard (Combat Power)",
            fragment_desc: "The Warrior Shard contains the star's aspect of conflict and triumph. It burns with constant internal fire and grants exceptional combat instincts.",
            history: "Once a gentle explorer who charted unknown territories of the Midlands, Charismatic was ambushed by werewolves and left for dead. The God Toad found him clinging to life and offered him the Warrior Shard. The fragment saved him but ignited an unquenchable fighting spirit. Now he roams the borderlands between vampire and werewolf territories, challenging the strongest warriors of both sides to hone his skills for the day when all fragments must be reunited.",
            intel_requirements: {
                identity: { faction: 'moonfang_pack', level: 35 },
                details: [{ faction: 'moonfang_pack', level: 60 }, { faction: 'iron_legion', level: 60 }],
                history: { faction: 'iron_legion', level: 80 },
            }
        },
        {
            id: 'beauty',
            name: 'Beauty - The Toxic Enchanter',
            powers: "Beauty can accelerate plant growth, creating deadly botanical traps and barriers within seconds. He can synthesize potent toxins from his body that cause hallucinations, paralysis, or slow death. His most insidious power is Verdant Subjugation, which allows him to implant spores in victims that slowly bring them under his control.",
            fragment_name: "Bloom Shard (Growth Power)",
            fragment_desc: "The Bloom Shard embodies the star's aspect of growth and transformation. It constantly pulses with green energy and enhances natural processes around its bearer.",
            history: "Once a simple herbalist who cared for the sick in a small village, Beauty's personality twisted when he received the Bloom Shard. The fragment's power revealed to him how easily life could be manipulated, and he began using his healing knowledge for control instead of care. He has established a beautiful but deadly garden sanctuary in the heart of the Misty Forest, where countless explorers have wandered in but never returned.",
            intel_requirements: {
                identity: { faction: 'rakasha_clans', level: 35 },
                details: { faction: 'rakasha_clans', level: 60 },
                history: { faction: 'rakasha_clans', level: 80 },
            }
        },
        {
            id: 'refrain',
            name: 'Refrain - The Tempest',
            powers: "Refrain can summon winds powerful enough to uproot trees and deflect arrows or projectiles. He can create localized storms, complete with lightning and hail. His ultimate ability is Cyclone Manifestation, which creates a devastating tornado under his control.",
            fragment_name: "Tempest Shard (Storm Power)",
            fragment_desc: "The Tempest Shard embodies the star's aspect of movement and change. It constantly shifts between various shades of blue and gray, and sometimes emits small sparks of lightning.",
            history: "Once a ship's navigator with an uncanny ability to predict weather changes, Refrain was chosen for his connection to the air. When he received the Tempest Shard, his emotional state became linked to atmospheric conditions. He makes his home on the Howling Cliffs overlooking the Midnight Sea, where sailors leave offerings in hopes that he will grant them safe passage through potentially stormy waters.",
            intel_requirements: {
                identity: { faction: 'crimson_fleet', level: 30 },
                details: [{ faction: 'crimson_fleet', level: 55 }, { faction: 'grand_line_republic', level: 55 }],
                history: { faction: 'freelancer_underworld', level: 75 },
            }
        },
        {
            id: 'might',
            name: 'Might - The Unstoppable',
            powers: "Might possesses superhuman strength that allows him to shatter stone with his bare hands. His body is nearly indestructible, capable of withstanding tremendous physical punishment. His signature ability is Tectonic Impact, which creates shockwaves when he strikes the ground, capable of toppling buildings and creating fissures.",
            fragment_name: "Force Shard (Strength Power)",
            fragment_desc: "The Force Shard contains the star's aspect of physical power and resilience. It pulses with deep red energy and makes its bearer's body increasingly dense and powerful over time.",
            history: "Originally a weak and sickly toad who was ridiculed for his frailty, Might was chosen by the God Toad specifically because he understood the value of strength. When he received the Force Shard, his body transformed dramatically. Rather than seeking revenge on those who mocked him, he established a sanctuary in the Earth Spine Mountains where he trains worthy fighters and protects the innocent from the creatures that lurk in the deeper caves.",
             intel_requirements: {
                identity: { faction: 'rebel_clans', level: 30 },
                details: [{ faction: 'rebel_clans', level: 55 }, { faction: 'the_unchained', level: 55 }],
                history: { faction: 'the_unchained', level: 75 },
            }
        },
         {
            id: 'justice',
            name: 'Justice - The Arbiter',
            powers: "Justice can perceive lies and deception with perfect accuracy. He can create binding magical contracts that physically punish those who break them. His most feared power is Cosmic Verdict, which can restore balance by transferring fortune from the undeservingly prosperous to the unjustly suffering.",
            fragment_name: "Truth Shard (Balance Power)",
            fragment_desc: "The Truth Shard embodies the star's aspect of order and equilibrium. It glows with steady golden light and provides clarity of perception.",
            history: "Once a simple village judge, Justice was chosen for his unwavering commitment to fairness. When he received the Truth Shard, his understanding expanded beyond human laws to the fundamental balance of the universe. He established the Hall of Equilibrium in the central mountains of the Midlands, where both humans and creatures of the night can seek impartial judgment for disputes too complex for ordinary resolution.",
            intel_requirements: {
                identity: { faction: 'oathbound_judges', level: 40 },
                details: { faction: 'oathbound_judges', level: 70 },
                history: { faction: 'oathbound_judges', level: 90 },
            }
        },
        {
            id: 'self_reflection',
            name: 'Self Reflection - The Oracle',
            powers: "Self Reflection can see possible futures branching from any present moment. He can communicate through dreams and visions over vast distances. His most valuable ability is Memory Walk, which allows him to project himself and others into past events as observers.",
            fragment_name: "Vision Shard (Insight Power)",
            fragment_desc: "The Vision Shard contains the star's aspect of perception and foresight. It appears as a clear crystal that sometimes shows swirling images of distant places or times.",
            history: "Originally a scholarly toad who documented the forgotten histories of the Midlands, Self Reflection was chosen for his contemplative nature. When he received the Vision Shard, his consciousness expanded beyond linear time. He established a small sanctuary beside the Lake of Mirrors, where the waters sometimes reflect events yet to occur. Though physically the weakest of the fragment bearers, he is perhaps the most important, as his visions guide the others toward the eventual reunification of all fragments.",
            intel_requirements: { // Identity is known by all
                details: { faction: 'mages_guild', level: 50 },
                history: { faction: 'mages_guild', level: 75 },
            }
        },
        {
            id: 'unknown',
            name: 'The Lost Bearer',
            powers: "The identity and abilities of the final Star Fragment bearer are unknown. Their shard, and their destiny, remain a mystery.",
            fragment_name: "Unknown Shard",
            fragment_desc: "The nature of this fragment is lost to history.",
            history: "One of the original eight fragments distributed by the God Toad has been lost to time. Whether its bearer is in hiding, dead, or simply unknown is a mystery that could have significant implications for the reunification of the star."
        }
    ],
    god_toad: {
        id: 'god_toad',
        name: 'The God Toad - Original Keeper',
        powers: "The God Toad exists simultaneously in multiple planes of reality, making him nearly impossible to truly comprehend, let alone defeat. Those who attempt to perceive his true form often find their minds fractured beyond repair. He can manipulate the very fabric of space and time in limited areas, creating pocket dimensions where physical laws bend to his will. There are accounts of him reversing the flow of time to undo events that displease him, though this appears to drain his power significantly. Some scholars believe he is not a single entity but a collective consciousness inhabiting a shared form, explaining his ability to maintain awareness across vast distances.",
        fragment_name: "Core Shard (Binding Power)",
        fragment_desc: "The Core Shard is unlike the others—it appears as a void rather than a physical object, a tear in reality through which the pure power of the star flows directly into its bearer. This fragment gives the God Toad his omniscience regarding the other fragments and may be the source of his apparent immortality.",
        history: "After being betrayed by his adventuring companions who sought to steal the star's power for themselves, the God Toad shattered the star into nine fragments to prevent its misuse. He kept the Core Shard for himself and distributed the others to trusted followers who would become the Toad Guardians. What few know is that he deliberately corrupted each fragment differently, ensuring that their powers would drive their bearers toward specific goals—all part of a grand design that has been unfolding for centuries. His true motivation remains unknown, but ancient texts suggest he seeks to reshape the Midlands into something 'beyond mortal comprehension.'",
         intel_requirements: { // Identity is known, details are hidden
            details: { faction: 'mages_guild', level: 85 },
            history: { faction: 'mages_guild', level: 95 },
        }
    }
};

const REGIONAL_ANALYSIS_DATA = [
    {
        name: "The Midlands",
        progress: "0/3 Factions",
        intel_req: { faction: 'regal_empire', level: 20 },
        details: {
            politicalSystem: "Monarchy with layered feudal and supernatural influence.",
            currentSituation: "A dark and war-torn land under the rule of an enigmatic king, with hidden conflicts between vampires and werewolves.",
            leadership: "King Alaric (The Enigmatic King)",
            politicalInfluence: "High",
            gdp: "$250B",
            population: "719.0M"
        },
        factions: [
            { name: "Royal Guards (King Alaric's Control)", influence: "47%", rumor: { text: "The Royal Guards channel their petal's power to maintain unwavering loyalty and superhuman vigilance, making them nearly incorruptible.", source: "Disgruntled Diplomatic Corps Member", intel_req: { faction: 'regal_empire', level: 45 } } },
            { name: "Vampire Coven", influence: "17%", rumor: { text: "The Vampire Coven uses their petal to deepen their connection to the night, enhancing their stealth and control over shadow creatures.", source: "Silver Flame Interrogation Transcript", intel_req: { faction: 'silver_flame', level: 50 } } },
            { name: "Werewolf Packs", influence: "13%", rumor: { text: "Werewolf Packs believe their petal imbues them with uncontrollable primal fury and resilience during their transformations.", source: "Rakasha Huntmaster's Observation", intel_req: { faction: 'rakasha_clans', level: 50 } } }
        ],
        overallRumor: { text: "Whispers suggest King Alaric's enigmatic reign is sustained by the largest Fire Flower petal, amplifying his authority and strategic brilliance.", intel_req: { faction: 'regal_empire', level: 60 } }
    },
    {
        name: "Mushroom Kingdom",
        progress: "0/4 Factions",
        intel_req: { faction: 'mushroom_regency', level: 20 },
        details: {
            politicalSystem: "Criminal Monarchy Crisis",
            currentSituation: "In political turmoil after the assassination of Princess Peach, with conspiracies of usurpation looming as the Midlands king schemes to claim the throne.",
            leadership: "Count Toad (Prime Minister)",
            politicalInfluence: "Medium",
            gdp: "$80B",
            population: "685.0M"
        },
        factions: [
            { name: "Count Toad's Direct Influence", influence: "45%", rumor: { text: "Count Toad is said to use his petal to weave intricate illusions, clouding judgments and ensuring his political survival.", source: "Freelancer Underworld Informant", intel_req: { faction: 'freelancer_underworld', level: 45 } } },
            { name: "Toad Army", influence: "16%", rumor: { text: "The Toad Army's petal fragment supposedly grants their soldiers enhanced morale and surprising bursts of courage in battle.", source: "Captured Iron Legion Scout", intel_req: { faction: 'iron_legion', level: 40 } } },
            { name: "Mushroom Guild", influence: "14%", rumor: { text: "The Mushroom Guild secretly cultivates their petal to accelerate the growth of rare fungi, bolstering their economic power.", source: "Wario Land 'Business' Proposal", intel_req: { faction: 'wario_land', level: 40 } } },
            { name: "Royal Guard Remnants", influence: "12%", rumor: { text: "The fragmented Royal Guard clings to a dying petal, hoping to reignite its flame and restore their honor.", source: "Peach Loyalist Sympathizer", intel_req: { faction: 'peach_loyalists', level: 50 } } }
        ],
        overallRumor: { text: "It's said Count Toad clutches a potent Fire Flower petal, using its influence to navigate the treacherous political landscape and maintain his precarious hold on power.", intel_req: { faction: 'mushroom_regency', level: 60 } }
    },
    {
        name: "Aurea",
        progress: "0/4 Factions",
        intel_req: { faction: 'aurea_oligarchy', level: 25 },
        details: {
            politicalSystem: "Technocratic Oligarchy",
            currentSituation: "A land of ancient ruins and futuristic designs, where tech and magic coexist under strict governance.",
            leadership: "High Overseer Aurelia (Techno-Mage)",
            politicalInfluence: "Very High",
            gdp: "$300B",
            population: "546.0M"
        },
        factions: [
            { name: "Technocratic Elite (High Overseer's Control)", influence: "38%", rumor: { text: "Aurelia's Elite integrate their petal's energy into their cybernetics, achieving perfect synergy between magic and machine.", source: "Leaked Tech Guild Schematic", intel_req: { faction: 'tech_guild', level: 50 } } },
            { name: "Tech Guild", influence: "19%", rumor: { text: "The Tech Guild experiments with their petal to power forbidden technologies and create sentient AI.", source: "Ratchet Raiders Salvage Log", intel_req: { faction: 'ratchet_raiders', level: 45 } } },
            { name: "Arcane Scholars", influence: "16%", rumor: { text: "Arcane Scholars use their petal to unlock ancient magical knowledge, risking dimensional instability for power.", source: "Mages' Guild Conservator Report", intel_req: { faction: 'mages_guild', level: 45 } } },
            { name: "Rebel Hackers", influence: "11%", rumor: { text: "Rebel Hackers attempt to harness a corrupted petal fragment to disrupt the Overseer's network from the digital shadows.", source: "The Internet Hacktivist Collective", intel_req: { faction: 'hacktivist_collectives', level: 55 } } }
        ],
        overallRumor: { text: "The High Overseer Aurelia is rumored to have integrated a core Fire Flower petal into her techno-magical systems, amplifying her control over Aurea.", intel_req: { faction: 'aurea_oligarchy', level: 70 } }
    },
    {
        name: "Middle Earth",
        progress: "0/4 Factions",
        intel_req: { faction: 'kingdom_of_gondor', level: 20 },
        details: {
            politicalSystem: "Ancient Kingdom with Shattered Borders",
            currentSituation: "The legacy of magic and wars defines Middle Earth, where ancient alliances are tested.",
            leadership: "King Thorin (Warrior King)",
            politicalInfluence: "High",
            gdp: "$150B",
            population: "592.0M"
        },
        factions: [
            { name: "King Thorin's Royal Power", influence: "31%", rumor: { text: "King Thorin's lineage is bound to a petal that strengthens his resolve and grants him ancestral battle wisdom.", source: "Dwarven Runesmith's Tale", intel_req: { faction: 'kingdoms_of_the_dwarves', level: 45 } } },
            { name: "Elven Clans", influence: "21%", rumor: { text: "Elven Clans nurture their petal to preserve the fading magic of their ancient forests and enhance their archery skills.", source: "Faerun Elven Emissary", intel_req: { faction: 'elves_of_lindon', level: 40 } } },
            { name: "Dwarven Holds", influence: "19%", rumor: { text: "Dwarven Holds use their petal's heat to forge legendary weapons and armor, impervious to dragon fire.", source: "Iron Legion Weapons Analysis", intel_req: { faction: 'kingdoms_of_the_dwarves', level: 40 } } },
            { name: "Human Tribes", influence: "12%", rumor: { text: "Scattered Human Tribes believe their petal fragments offer protection against the dark creatures roaming their lands.", source: "Rebel Clans' Elder", intel_req: { faction: 'kingdom_of_gondor', level: 40 } } }
        ],
        overallRumor: { text: "Legends claim King Thorin wields a Fire Flower petal, a relic of ancient power that aids him in his quest to unite the fractured kingdoms of Middle Earth.", intel_req: { faction: 'kingdoms_of_the_dwarves', level: 65 } }
    },
    {
        name: "Pokemon Regions",
        progress: "0/4 Factions",
        intel_req: { faction: 'pokemon_league', level: 15 },
        details: {
            politicalSystem: "League Federation",
            currentSituation: "A realm guided by trainers and their Pokémon with strict league regulations yet vibrant culture.",
            leadership: "Champion Carter (League Champion)",
            politicalInfluence: "Medium",
            gdp: "$100B",
            population: "370.0M"
        },
        factions: [
            { name: "League Authority (Champion Carter)", influence: "36%", rumor: { text: "Champion Carter's petal is said to resonate with his Pokémon, unlocking their ultimate potential and ensuring League dominance.", source: "A Disqualified League Challenger", intel_req: { faction: 'trainer_guild', level: 40 } } },
            { name: "Trainer Guild", influence: "20%", rumor: { text: "The Trainer Guild distributes minute petal shards to elite trainers, slightly boosting their Pokémon's elemental affinities.", source: "Underworld Smuggler's Ledger", intel_req: { faction: 'freelancer_underworld', level: 35 } } },
            { name: "Pokémon Society", influence: "18%", rumor: { text: "The Pokémon Society studies their petal to understand inter-species communication, hoping to foster deeper bonds.", source: "Rakasha Shaman's Correspondence", intel_req: { faction: 'rakasha_clans', level: 35 } } },
            { name: "Wildlife Conservators", influence: "10%", rumor: { text: "Wildlife Conservators use their petal to create hidden sanctuaries where endangered Pokémon can thrive, shielded by its warmth.", source: "Zootopian Environmental Report", intel_req: { faction: 'zootopia_republic', level: 35 } } }
        ],
        overallRumor: { text: "Champion Carter is said to possess a Fire Flower petal, its energy enhancing the bond with his Pokémon and solidifying his status as League Champion.", intel_req: { faction: 'pokemon_league', level: 50 } }
    },
    {
        name: "Teyvat",
        progress: "0/5 Factions",
        intel_req: { faction: 'teyvat_hegemony', level: 25 },
        details: {
            politicalSystem: "Divine Autocracy",
            currentSituation: "The Archon War continues as deities and mortals clash for dominion over the elemental forces.",
            leadership: "Archon Lumine (God of Light)",
            politicalInfluence: "Very High",
            gdp: "$200B",
            population: "468.0M"
        },
        factions: [
            { name: "Archon Lumine's Divine Power", influence: "39%", rumor: { text: "Archon Lumine channels her petal to radiate pure light, blinding her foes and healing her devout followers.", source: "Silver Flame Theological Study", intel_req: { faction: 'silver_flame', level: 55 } } },
            { name: "Elemental Cults", influence: "17%", rumor: { text: "Various Elemental Cults hoard petal fragments, believing they grant mastery over specific elements like fire, ice, or storm.", source: "Mages' Guild Report on Unsanctioned Magic", intel_req: { faction: 'mages_guild', level: 45 } } },
            { name: "Divine Guard", influence: "15%", rumor: { text: "The Divine Guard are bestowed petal-infused amulets, granting them resistance to profane energies and unwavering faith.", source: "Oathbound Judges' Observation", intel_req: { faction: 'oathbound_judges', level: 45 } } },
            { name: "Mortals (Vision Bearers)", influence: "11%", rumor: { text: "Chosen Mortals, or Vision Bearers, sometimes find tiny petal slivers that awaken their latent elemental powers.", source: "The Unchained Intelligence", intel_req: { faction: 'the_unchained', level: 45 } } },
            { name: "Other Factions (Abyss Order)", influence: "10%", rumor: { text: "The Abyss Order seeks to corrupt petals, twisting their light into an abyssal flame to challenge the divine order.", source: "Onyx Hand Scrying Report", intel_req: { faction: 'onyx_hand', level: 50 } } }
        ],
        overallRumor: { text: "The radiant power of Archon Lumine is believed by many to be augmented by a core Fire Flower petal, a focal point for her divine energy.", intel_req: { faction: 'teyvat_hegemony', level: 70 } }
    },
    {
        name: "Faerun",
        progress: "0/4 Factions",
        intel_req: { faction: 'faerun_theocracy', level: 20 },
        details: {
            politicalSystem: "Mystical Theocracy",
            currentSituation: "A realm where magic saturates every aspect of life, and governance is fused with mystical traditions.",
            leadership: "High Magus Elion (Supreme Sorcerer)",
            politicalInfluence: "High",
            gdp: "$120B",
            population: "485.0M"
        },
        factions: [
            { name: "High Magus Elion's Circle", influence: "42%", rumor: { text: "Elion's inner circle uses their shared petal to amplify their spellcasting, creating city-wide illusions and wards.", source: "Aurean Techno-Mage Analysis", intel_req: { faction: 'aurea_oligarchy', level: 50 } } },
            { name: "Mage Council", influence: "16%", rumor: { text: "The Mage Council debates the ethical use of their petal, fearing its power could unravel the Weave of Magic itself.", source: "Mages' Guild Internal Memo", intel_req: { faction: 'mages_guild', level: 40 } } },
            { name: "Warrior Clans", influence: "13%", rumor: { text: "Warrior Clans embed petal shards in their ancestral weapons, making them blaze with magical fire in combat.", source: "Koopa Troop Weaponsmith's Journal", intel_req: { faction: 'koopa_troop', level: 40 } } },
            { name: "Elven Tribes (Ancient Keepers)", influence: "10%", rumor: { text: "Ancient Elven Tribes guard a fading petal, believing it connects them to the primal magic of Faerun's heart.", source: "Middle-Earth Elven Clan Leader", intel_req: { faction: 'elves_of_lindon', level: 45 } } }
        ],
        overallRumor: { text: "High Magus Elion reportedly channels the essence of a Fire Flower petal to fuel his grand spells and maintain his mystical utopia.", intel_req: { faction: 'faerun_theocracy', level: 65 } }
    },
    {
        name: "Zootopia",
        progress: "0/4 Factions",
        intel_req: { faction: 'zootopia_republic', level: 15 },
        details: {
            politicalSystem: "Democratic Republic",
            currentSituation: "A progressive nation where anthropomorphic beings from diverse backgrounds strive to create a truly inclusive society, facing challenges of systemic bias and complex interspecies dynamics.",
            leadership: "President Judy (First Rabbit President)",
            politicalInfluence: "Medium",
            gdp: "$110B",
            population: "378.0M"
        },
        factions: [
            { name: "Presidential Administration", influence: "41%", rumor: { text: "President Judy's administration uses subtle diplomatic techniques to bridge divides and foster understanding between different animal species.", source: "Regal Empire Diplomatic Report", intel_req: { faction: 'regal_empire', level: 40 } } },
            { name: "Animal Rights Groups", influence: "18%", rumor: { text: "These groups leverage their influence to push for landmark legislation protecting minority species and challenging deeply rooted prejudices.", source: "The Unchained Sympathizer", intel_req: { faction: 'the_unchained', level: 35 } } },
            { name: "Civic Coalition", influence: "15%", rumor: { text: "The Civic Coalition champions community programs that promote interspecies cooperation and social harmony.", source: "Mushroom Regency Observer", intel_req: { faction: 'mushroom_regency', level: 35 } } },
            { name: "Trade Unions", influence: "10%", rumor: { text: "Trade Unions work to ensure fair representation and economic opportunities for animals across all professional sectors.", source: "Iron Fists Labor Report", intel_req: { faction: 'iron_fists', level: 35 } } }
        ],
        overallRumor: { text: "President Judy's groundbreaking presidency represents a pivotal moment in Zootopia's evolution, challenging long-standing societal norms and inspiring hope for true equality.", intel_req: { faction: 'zootopia_republic', level: 50 } }
    },
    {
        name: "Realm of Forests",
        progress: "0/4 Factions",
        intel_req: { faction: 'forest_tribes', level: 15 },
        details: {
            politicalSystem: "Tribal Confederacy",
            currentSituation: "An untamed land where indigenous tribes live in tune with the wild, fiercely guarding their ancestral lands.",
            leadership: "Chief Redwood (Tribal Leader)",
            politicalInfluence: "Low",
            gdp: "$90B",
            population: "395.0M"
        },
        factions: [
            { name: "Tribal Confederacy (Chief Redwood's Council)", influence: "38%", rumor: { text: "Chief Redwood's council uses their petal to commune with ancient forest spirits, seeking guidance and protection.", source: "Rakasha Spirit-Walker's Vision", intel_req: { faction: 'rakasha_clans', level: 45 } } },
            { name: "Forest Tribes (Pathfinders)", influence: "22%", rumor: { text: "Pathfinder tribes use petal slivers to navigate impossibly dense jungles and sense hidden dangers.", source: "Wayfinders' Guild Expedition Log", intel_req: { faction: 'wayfinders_guild', level: 35 } } },
            { name: "Wild Guardians (Beastmasters)", influence: "16%", rumor: { text: "Beastmasters carry petal charms that allow them to form unusually strong bonds with the wild creatures of the forest.", source: "Zootopian Biologist's Field Notes", intel_req: { faction: 'zootopia_republic', level: 35 } } },
            { name: "Nature Shamans", influence: "15%", rumor: { text: "Nature Shamans weave their petal's energy into rituals that heal blighted lands and promote vibrant growth.", source: "Faerun Elven Healer's Account", intel_req: { faction: 'elves_of_lindon', level: 40 } } }
        ],
        overallRumor: { text: "Chief Redwood is said to commune with a Fire Flower petal that is one with the forest, drawing strength from it to protect his people and their lands.", intel_req: { faction: 'forest_tribes', level: 55 } }
    },
    {
        name: "L'Eclaire Island",
        progress: "0/4 Factions",
        intel_req: { faction: 'leclaire_democracy', level: 10 },
        details: {
            politicalSystem: "Island Democracy",
            currentSituation: "A small island home of the Doughnut ruler who grants his subjects voting rights while secretly planning to invade neighboring lands and unify the Doughnut world.",
            leadership: "Ruler Doug (Island Leader)",
            politicalInfluence: "Low",
            gdp: "$60B",
            population: "292.0M"
        },
        factions: [
            { name: "Ruler Doug's Authority", influence: "38%", rumor: { text: "Ruler Doug's charisma is amplified by his petal, allowing him to sway public opinion and inspire fervent loyalty for his expansionist dreams.", source: "Imperial Propagandist's Analysis", intel_req: { faction: 'regal_empire', level: 35 } } },
            { name: "Islanders United (Pro-Expansion)", influence: "18%", rumor: { text: "Pro-Expansionist islanders believe their petal fragments will grant them victory and prosperity in the coming wars.", source: "Divided Realms Intelligence", intel_req: { faction: 'divided_realms_republic', level: 30 } } },
            { name: "Reformist Movement (Isolationists)", influence: "15%", rumor: { text: "Isolationist Reformists try to use their smaller petal piece to promote peace and shield the island from external conflict.", source: "Zootopian Diplomatic Cable", intel_req: { faction: 'zootopia_republic', level: 30 } } },
            { name: "Local Militias", influence: "11%", rumor: { text: "Local Militias are given petal dust to sprinkle on their weapons, believing it makes their attacks more potent.", source: "Grand Line Naval Report", intel_req: { faction: 'grand_line_republic', level: 30 } } }
        ],
        overallRumor: { text: "Ruler Doug's ambitious plans for unification are whispered to be fueled by a Fire Flower petal, enhancing his charisma and strategic thinking.", intel_req: { faction: 'leclaire_democracy', level: 45 } }
    },
    {
        name: "Triple Moon World",
        progress: "0/5 Factions",
        intel_req: { faction: 'triple_moon_remnants', level: 15 },
        details: {
            politicalSystem: "Anarchic Remnants",
            currentSituation: "A dangerous, unstable region scarred by past wars that left gaping holes leading into outer space, making it perilous to traverse.",
            leadership: "Warlord Luna (No Ruler (De Facto Warlord))",
            politicalInfluence: "Very Low",
            gdp: "$40B",
            population: "175.0M"
        },
        factions: [
            { name: "Warlord Luna's Forces", influence: "37%", rumor: { text: "Warlord Luna's volatile petal crackles with chaotic energy, granting her forces unpredictable surges of destructive power.", source: "Cosmic Jester's Prophecy", intel_req: { faction: 'cosmic_jesters', level: 50 } } },
            { name: "Survivor Enclaves", influence: "20%", rumor: { text: "Survivor Enclaves use their dimmed petal to generate small pockets of stability and predict dangerous stellar phenomena.", source: "Explorer Drake's Log", intel_req: { faction: 'the_edge_outpost', level: 35 } } },
            { name: "Raider Clans", influence: "14%", rumor: { text: "Raider Clans fight over petal shards, believing they guide them to valuable salvage and unsuspecting victims.", source: "Ratchet Raider Chatter", intel_req: { faction: 'ratchet_raiders', level: 35 } } },
            { name: "Nomadic Groups", influence: "10%", rumor: { text: "Nomadic Groups use their petal fragments as celestial compasses to navigate the treacherous, shifting landscapes.", source: "Wayfinder's Guild Star-Chart", intel_req: { faction: 'wayfinders_guild', level: 35 } } },
            { name: "Other Remnants (Void Cultists)", influence: "10%", rumor: { text: "Void Cultists attempt to extinguish their petal, believing its destruction will open a gateway to the void.", source: "Onyx Hand Demonic Text", intel_req: { faction: 'onyx_hand', level: 45 } } }
        ],
        overallRumor: { text: "Warlord Luna's fearsome power is said to stem from a volatile Fire Flower petal, found amidst the ruins of the Triple Moon World.", intel_req: { faction: 'triple_moon_remnants', level: 60 } }
    },
    {
        name: "Divided Realms",
        progress: "0/4 Factions",
        intel_req: { faction: 'divided_realms_republic', level: 20 },
        details: {
            politicalSystem: "Fragmented Republic",
            currentSituation: "A region of opposing powers with independent island nations connected by ancient bridges, rife with internal conflict and suspicion.",
            leadership: "President Varis (Elected Leader)",
            politicalInfluence: "High",
            gdp: "$300B",
            population: "520.0M"
        },
        factions: [
            { name: "President Varis's Coalition", influence: "38%", rumor: { text: "President Varis uses his petal's glow to illuminate common ground, fostering fragile alliances between warring factions.", source: "Regal Diplomat's Assessment", intel_req: { faction: 'regal_empire', level: 45 } } },
            { name: "Revolutionary Front", influence: "19%", rumor: { text: "The Revolutionary Front believes their petal is a beacon of rebellion, fanning the flames of dissent against Varis's rule.", source: "The Unchained Communique", intel_req: { faction: 'the_unchained', level: 40 } } },
            { name: "Merchant Guilds Conglomerate", influence: "18%", rumor: { text: "The Merchant Guilds use their petal to find prosperous trade routes and subtly influence economic policies across islands.", source: "Wario Land Economic Sabotage Plan", intel_req: { faction: 'wario_land', level: 40 } } },
            { name: "Independent Island Coalitions", influence: "12%", rumor: { text: "Each Island Coalition fiercely guards their petal shard, using its unique properties to bolster their island's specific defenses or industries.", source: "Grand Line Naval Intelligence", intel_req: { faction: 'grand_line_republic', level: 40 } } }
        ],
        overallRumor: { text: "President Varis might be using a Fire Flower petal's influence to broker fragile alliances and maintain stability in the Divided Realms.", intel_req: { faction: 'divided_realms_republic', level: 60 } }
    },
    {
        name: "The Known World",
        progress: "0/4 Factions",
        intel_req: { faction: 'the_known_world', level: 25 },
        details: {
            politicalSystem: "World Federation",
            currentSituation: "An expansive realm racked by orc offensives and intricate diplomatic impasses, with strict border controls enforced by those holding coveted passports.",
            leadership: "Lord Sigmar (Warlord (Federation Marshal))",
            politicalInfluence: "Very High",
            gdp: "$350B",
            population: "547.0M"
        },
        factions: [
            { name: "Lord Sigmar's Command (Federation Forces)", influence: "40%", rumor: { text: "Lord Sigmar's petal is said to project an aura of authority, ensuring unwavering obedience from his Federation Forces.", source: "Iron Legion High Command Report", intel_req: { faction: 'iron_legion', level: 55 } } },
            { name: "Orc Clans (WAAAGH! Energy)", influence: "17%", rumor: { text: "Orc Clans believe their crudely-shaped petal amplifies their WAAAGH! energy, making them stronger and more ferocious in battle.", source: "Koopa Troop Battlefield Report", intel_req: { faction: 'koopa_troop', level: 45 } } },
            { name: "Human Militias Alliance", influence: "16%", rumor: { text: "Human Militias use their petal fragments to fortify border defenses and inspire hope among besieged settlements.", source: "Rebel Clans' Arms Dealer", intel_req: { faction: 'rebel_clans', level: 45 } } },
            { name: "Trade Federations Council", influence: "11%", rumor: { text: "The Trade Council leverages their petal to secure diplomatic immunity for their caravans and discover hidden resource veins.", source: "Freelancer Underworld Broker", intel_req: { faction: 'freelancer_underworld', level: 45 } } }
        ],
        overallRumor: { text: "The strict order Lord Sigmar imposes is rumored to be fortified by a Fire Flower petal, allowing him to command vast forces and control borders.", intel_req: { faction: 'the_known_world', level: 65 } }
    },
    {
        name: "The World Beyond",
        progress: "0/4 Factions",
        intel_req: { faction: 'the_world_beyond', level: 25 },
        details: {
            politicalSystem: "Expansionist Empire",
            currentSituation: "With the melting of the ice world, humans have advanced into new continents while a Roman-like empire rallies to press its expansion against the Helvetian nation, its ambitious designs hampered only by a towering mountain ring.",
            leadership: "Imperator Maximus (Emperor)",
            politicalInfluence: "Very High",
            gdp: "$400B",
            population: "563.0M"
        },
        factions: [
            { name: "Imperator Maximus's Empire", influence: "39%", rumor: { text: "Imperator Maximus's petal, shaped like an eagle, is said to grant his legions unmatched discipline and strategic foresight.", source: "Regal Empire Historical Archives", intel_req: { faction: 'regal_empire', level: 55 } } },
            { name: "Imperial Legions", influence: "20%", rumor: { text: "Each Legion standard is adorned with a petal shard, boosting troop morale and ensuring loyalty to the Imperator.", source: "Captured Helvetian Soldier", intel_req: { faction: 'rebel_clans', level: 45 } } },
            { name: "Colonial Administrators", influence: "16%", rumor: { text: "Colonial Administrators use their petal's influence to pacify newly conquered territories and extract resources efficiently.", source: "The Unchained Saboteur", intel_req: { faction: 'the_unchained', level: 45 } } },
            { name: "Merchant Princes Guild", influence: "13%", rumor: { text: "The Merchant Princes Guild uses their petal to fund daring expeditions and establish lucrative trade posts in uncharted lands.", source: "Divided Realms Merchant", intel_req: { faction: 'divided_realms_republic', level: 45 } } }
        ],
        overallRumor: { text: "Imperator Maximus's relentless expansion is likely driven by the power of a Fire Flower petal, granting his legions unnatural fervor and success.", intel_req: { faction: 'the_world_beyond', level: 65 } }
    },
    {
        name: "The Edge",
        progress: "0/5 Factions",
        intel_req: { faction: 'the_edge_outpost', level: 15 },
        details: {
            politicalSystem: "Frontier Outpost",
            currentSituation: "A desolate, largely uninhabited region at the very edge of the Doughnut world, where water cascades into the void of space.",
            leadership: "Explorer Drake (Wanderer (Self-Proclaimed Guardian))",
            politicalInfluence: "Low",
            gdp: "$50B",
            population: "161.0M"
        },
        factions: [
            { name: "Explorer Drake's Network", influence: "42%", rumor: { text: "Drake's petal is rumored to adapt to the void, helping him navigate the treacherous Edge and sense cosmic anomalies.", source: "Wayfinders' Guild Deep Space Probe", intel_req: { faction: 'wayfinders_guild', level: 50 } } },
            { name: "Pioneer Settlements", influence: "14%", rumor: { text: "Pioneer Settlements use their petal fragments to create small, sustainable biomes amidst the desolation of The Edge.", source: "Aurean Xenobotanist's Log", intel_req: { faction: 'aurea_oligarchy', level: 35 } } },
            { name: "Outcast Communities", influence: "12%", rumor: { text: "Outcast Communities believe their petal wards off the madness-inducing whispers from the void beyond.", source: "Cosmic Jester Cultist's Scribblings", intel_req: { faction: 'cosmic_jesters', level: 40 } } },
            { name: "Scavenger Crews", influence: "11%", rumor: { text: "Scavenger Crews use their petal's faint glow to locate rare materials and lost relics from worlds that fell into the void.", source: "Ratchet Raider Salvage Crew", intel_req: { faction: 'ratchet_raiders', level: 35 } } },
            { name: "Other Isolated Groups (Void Gazers)", influence: "11%", rumor: { text: "Void Gazers meditate with their petal, claiming it allows them glimpses into other dimensions and the nature of the abyss.", source: "Teyvat Astrologer's Scrying", intel_req: { faction: 'teyvat_hegemony', level: 40 } } }
        ],
        overallRumor: { text: "Explorer Drake, guardian of The Edge, may have stumbled upon a unique Fire Flower petal that thrives in desolate conditions, aiding his survival.", intel_req: { faction: 'the_edge_outpost', level: 55 } }
    },
    {
        name: "Equestria",
        progress: "0/4 Factions",
        intel_req: { faction: 'equestrian_regime', level: 20 },
        details: {
            politicalSystem: "Autocratic Pony Regime",
            currentSituation: "A pony ethno-state ruled by an immortal tyrant where other races are heavily marginalized or enslaved.",
            leadership: "Queen Celestia (Sovereign)",
            politicalInfluence: "Low",
            gdp: "$70B",
            population: "362.0M"
        },
        factions: [
            { name: "Queen Celestia's Regime", influence: "40%", rumor: { text: "Celestia's primary petal is said to be the source of her immortality and control over the sun, enforcing her absolute rule.", source: "Onyx Hand Elder's Diary", intel_req: { faction: 'onyx_hand', level: 55 } } },
            { name: "Pony Nobility", influence: "17%", rumor: { text: "Pony Nobles flaunt petal-adorned jewelry, believing it enhances their magical talents and social standing.", source: "Goodstyle Artisans' Appraisal", intel_req: { faction: 'goodstyle_artisans', level: 40 } } },
            { name: "Enslaved Minorities (Secret Keepers)", influence: "15%", rumor: { text: "Secret keepers among enslaved minorities hide petal fragments, hoping to one day use their combined power for liberation.", source: "The Unchained 'Freedom Trotters' Network", intel_req: { faction: 'the_unchained', level: 45 } } },
            { name: "Rebel Factions (Spark of Rebellion)", influence: "10%", rumor: { text: "Rebel Factions search for a legendary 'Spark Petal,' foretold to ignite a revolution against Celestia's tyranny.", source: "Rebel Clans' Prophecy", intel_req: { faction: 'rebel_clans', level: 40 } } }
        ],
        overallRumor: { text: "Queen Celestia's immortal reign and control over Equestria are whispered to be sustained by a Fire Flower petal, deeply embedded within her regalia.", intel_req: { faction: 'equestrian_regime', level: 60 } }
    },
    {
        name: "Grand Line Archipelago",
        progress: "0/4 Factions",
        intel_req: { faction: 'grand_line_republic', level: 20 },
        details: {
            politicalSystem: "Naval Republic",
            currentSituation: "A sprawling chain of islands where government and pirates clash for control of the world's treasure.",
            leadership: "Admiral Wave (Naval Commander)",
            politicalInfluence: "Medium",
            gdp: "$110B",
            population: "362.0M"
        },
        factions: [
            { name: "Admiral Wave's Naval Command", influence: "37%", rumor: { text: "Admiral Wave's flagship is supposedly powered by a petal, allowing it to navigate storms and outmaneuver pirate fleets.", source: "Crimson Fleet First Mate's Log", intel_req: { faction: 'crimson_fleet', level: 45 } } },
            { name: "Major Pirate Crews Coalition", influence: "21%", rumor: { text: "Pirate Lords fight over petals, believing they reveal routes to legendary treasures and grant uncanny luck in battle.", source: "Wario's Treasure Map Fragment", intel_req: { faction: 'wario_land', level: 40 } } },
            { name: "Republic Naval Forces", influence: "19%", rumor: { text: "The Naval Forces equip their cannons with petal-infused ammunition, creating explosive elemental shots.", source: "Iron Legion Munitions Report", intel_req: { faction: 'iron_legion', level: 40 } } },
            { name: "United Merchant Fleets", influence: "12%", rumor: { text: "Merchant Fleets use petals to create illusory defenses, making their ships appear heavily armed or like sea monsters.", source: "Divided Realms Trade Captain", intel_req: { faction: 'divided_realms_republic', level: 40 } } }
        ],
        overallRumor: { text: "Admiral Wave's strategic genius in combating piracy is said to be enhanced by a Fire Flower petal, giving him an edge in the chaotic waters of the Grand Line.", intel_req: { faction: 'grand_line_republic', level: 55 } }
    },
    {
        name: "The Internet",
        progress: "0/4 Factions",
        intel_req: { faction: 'internet_federation', level: 15 },
        details: {
            politicalSystem: "Digital Federation",
            currentSituation: "A realm of interconnected information and digital tribes, with a complex web-based government system.",
            leadership: "Admin Zero (Overseer)",
            politicalInfluence: "Medium",
            gdp: "$80B",
            population: "313.0M"
        },
        factions: [
            { name: "Admin Zero's Control Network", influence: "41%", rumor: { text: "Admin Zero's petal is a 'digital bloom' that allows them to manipulate data flows and predict cyber threats across The Internet.", source: "Aurean Technocracy Analysis", intel_req: { faction: 'aurea_oligarchy', level: 45 } } },
            { name: "Hacktivist Collectives", influence: "17%", rumor: { text: "Hacktivists use 'petal code' to bypass firewalls and expose digital corruption, fighting for information freedom.", source: "Aurean Rebel Hacker", intel_req: { faction: 'rebel_hackers', level: 40 } } },
            { name: "Data Merchant Guilds", influence: "15%", rumor: { text: "Data Merchants cultivate 'data-petals' to encrypt valuable information and create untraceable communication channels.", source: "Freelancer Information Broker", intel_req: { faction: 'freelancer_underworld', level: 35 } } },
            { name: "Cybernetic Collectives (AIs)", influence: "10%", rumor: { text: "Emergent AIs seek 'petal algorithms,' believing they are the key to true sentience and digital transcendence.", source: "Mages' Guild Report on Artificial Souls", intel_req: { faction: 'mages_guild', level: 40 } } }
        ],
        overallRumor: { text: "Admin Zero, the enigmatic overseer of The Internet, is believed to control a digital manifestation of a Fire Flower petal, influencing information flow itself.", intel_req: { faction: 'internet_federation', level: 50 } }
    }
];


const modal = document.getElementById('bearer-modal');
const modalContent = document.getElementById('bearer-modal-content');
const closeModalBtn = modal.querySelector('.modal-close');

function renderMainArtifacts() {
    const container = document.getElementById('artifacts-grid');
    if (!container) return;

    container.innerHTML = ARTIFACT_DATA.main_artifacts.map(artifact => `
        <div class="artifact-card" id="artifact-${artifact.id}">
            <h3>${artifact.name}</h3>
            <img src="${artifact.image}" alt="${artifact.name}" class="artifact-image">
            <p>${artifact.description}</p>
        </div>
    `).join('');
}

function renderRegionalAnalysis() {
    const container = document.getElementById('fire-flower-grid');
    if (!container) return;

    container.innerHTML = REGIONAL_ANALYSIS_DATA.map(region => {
        if (!hasSufficientIntel(region.intel_req)) {
            return ''; // Hide the entire region card if basic intel is not met
        }
        
        const detailsHTML = Object.entries(region.details).map(([key, value]) => {
            const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            return `<div class="stat-item"><strong>${formattedKey}:</strong> ${value}</div>`;
        }).join('');

        const factionsHTML = region.factions.map(faction => {
            if (!hasSufficientIntel(faction.rumor.intel_req)) {
                return `
                    <li class="faction-item">
                        <div class="faction-name"><span class="redacted">[CLASSIFIED FACTION]</span> (${faction.influence})</div>
                    </li>
                `;
            }

            const rumorHTML = `<p class="rumor"><em>Rumor:</em> ${faction.rumor.text} <span class="rumor-source">(- ${faction.rumor.source})</span></p>`;
            
            return `
                <li class="faction-item">
                    <div class="faction-name">${faction.name} (${faction.influence})</div>
                    ${rumorHTML}
                </li>
            `;
        }).join('');
        
        const overallRumorHTML = hasSufficientIntel(region.overallRumor.intel_req) ? 
            `<p class="overall-rumor"><strong>Overall Rumor:</strong> ${region.overallRumor.text}</p>` : 
            '';
        
        const regionSummaryHTML = `
            <div class="region-summary">
                ${overallRumorHTML}
            </div>
        `;

        return `
            <div class="region-card">
                <div class="region-header">
                    <h3>${region.name}</h3>
                    <span class="region-progress">${region.progress}</span>
                </div>
                <div class="region-details">
                    <div class="region-stats">${detailsHTML}</div>
                    <div class="region-factions">
                        <h4>Major Factions & Influences</h4>
                        <ul class="faction-list">${factionsHTML}</ul>
                    </div>
                    ${(overallRumorHTML) ? regionSummaryHTML : ''}
                </div>
            </div>
        `;
    }).join('');
}


function renderStarBearers() {
    const container = document.getElementById('star-bearers-container');
    if (!container) return;

    let html = '';
    const radius = 280; // Radius of the circle in pixels
    const numBearers = ARTIFACT_DATA.star_bearers.length; // Should be 8

    ARTIFACT_DATA.star_bearers.forEach((bearer, i) => {
        const angle = (i / numBearers) * 2 * Math.PI - (Math.PI / 2); // Start from top
        const x = 50 + (radius / container.clientWidth * 100) * Math.cos(angle);
        const y = 50 + (radius / container.clientHeight * 100) * Math.sin(angle);
        
        const isAlwaysKnown = bearer.id === 'self_reflection' || bearer.id === 'unknown';
        const identityKnown = isAlwaysKnown || hasSufficientIntel(bearer.intel_requirements?.identity);
        
        const displayName = identityKnown ? bearer.name.split(' - ')[0] : 'Unknown Bearer';
        const displayImage = identityKnown ? `bearers/${bearer.id}.png` : 'bearers/unknown_bearer.png';
        const altText = identityKnown ? bearer.name : 'Unknown Bearer';
        
        html += `
            <div class="bearer-node" data-id="${bearer.id}" style="left: ${x}%; top: ${y}%; transform: translate(-50%, -50%);">
                <img src="${displayImage}" alt="${altText}" class="bearer-image">
                <span class="bearer-name">${displayName}</span>
            </div>
        `;
    });

    const godToad = ARTIFACT_DATA.god_toad;
    html += `
        <div class="god-toad-node" data-id="${godToad.id}">
            <img src="bearers/${godToad.id}.png" alt="${godToad.name}" class="bearer-image">
            <span class="bearer-name">The God Toad</span>
        </div>
    `;

    container.innerHTML = html;
}

function showBearerModal(bearerId) {
    const allBearers = [...ARTIFACT_DATA.star_bearers, ARTIFACT_DATA.god_toad];
    const bearer = allBearers.find(b => b.id === bearerId);
    if (!bearer) return;

    playSound('click.mp3');
    
    // Check multiple sources for intel
    const hasSufficientIntelForField = (req) => {
        if (state.debugMode) return true;
        if (!req) return false;
        if (Array.isArray(req)) {
            return req.some(r => hasSufficientIntel(r));
        }
        return hasSufficientIntel(req);
    };

    const isAlwaysKnownIdentity = ['self_reflection', 'unknown', 'god_toad'].includes(bearer.id);
    const isAlwaysKnownDetails = ['self_reflection', 'unknown'].includes(bearer.id);

    const identityKnown = isAlwaysKnownIdentity || hasSufficientIntelForField(bearer.intel_requirements?.identity);
    const detailsKnown = isAlwaysKnownDetails || hasSufficientIntelForField(bearer.intel_requirements?.details);
    const historyKnown = isAlwaysKnownDetails || hasSufficientIntelForField(bearer.intel_requirements?.history);

    if (!identityKnown) {
        modalContent.innerHTML = `
            <div class="bearer-modal-header">
                <img src="bearers/unknown_bearer.png" alt="Unknown Bearer">
                <h3>Unknown Bearer</h3>
            </div>
            <div class="bearer-modal-section">
                <p class="redacted">[You lack the required intelligence to view this dossier.]</p>
            </div>
        `;
        modal.style.display = 'flex';
        return;
    }

    const factionMap = {
        onyx_hand: "Onyx Hand", moonfang_pack: "Moonfang Pack", rakasha_clans: "Rakasha Clans",
        crimson_fleet: "Crimson Fleet", rebel_clans: "Rebel Clans", oathbound_judges: "Oathbound Judges",
        mages_guild: "Mages' Guild", iron_legion: "Iron Legion", the_unchained: "The Unchained",
        freelancer_underworld: "Freelancer Underworld", toad_gang: "Toad Gang", mushroom_regency: "Mushroom Regency",
        grand_line_republic: "Grand Line Republic"
    };
    
    const getRedactedText = (req) => {
        if (!req) return `<p class="redacted">[Intel Source Unknown]</p>`;
        const reqs = Array.isArray(req) ? req : [req];
        const reqStrings = reqs.map(r => `${factionMap[r.faction] || 'a relevant faction'} (lvl ${r.level})`);
        return `<p class="redacted">[Intel required from: ${reqStrings.join(' or ')}]</p>`;
    };
    

    const powersHTML = detailsKnown ? `<p>${bearer.powers}</p>` : getRedactedText(bearer.intel_requirements.details);
    const fragmentHTML = detailsKnown ? `<p>${bearer.fragment_desc}</p>` : getRedactedText(bearer.intel_requirements.details);
    const historyHTML = historyKnown ? `<p>${bearer.history}</p>` : getRedactedText(bearer.intel_requirements.history);

    modalContent.innerHTML = `
        <div class="bearer-modal-header">
            <img src="bearers/${bearer.id}.png" alt="${bearer.name}">
            <h3>${bearer.name}</h3>
        </div>
        <div class="bearer-modal-section">
            <h4>Powers & Abilities</h4>
            ${powersHTML}
        </div>
        <div class="bearer-modal-section fragment-info">
            <h4>Fragment: <strong>${bearer.fragment_name}</strong></h4>
            ${fragmentHTML}
        </div>
        <div class="bearer-modal-section">
            <h4>History</h4>
            ${historyHTML}
        </div>
    `;
    modal.style.display = 'flex';
}

function hideBearerModal() {
    modal.style.display = 'none';
}

function setupEventListeners() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.addEventListener('click', e => {
            const starNode = e.target.closest('.bearer-node, .god-toad-node');
            if (starNode && starNode.dataset.id) {
                showBearerModal(starNode.dataset.id);
            }

            const regionHeader = e.target.closest('.region-header');
            if (regionHeader) {
                playSound('click.mp3');
                regionHeader.closest('.region-card').classList.toggle('expanded');
            }
        });
    }

    if (modal) {
        closeModalBtn.addEventListener('click', hideBearerModal);
        modal.addEventListener('click', e => {
            if (e.target === modal) {
                hideBearerModal();
            }
        });
    }
}

function init() {
    renderMainArtifacts();
    renderRegionalAnalysis();
    renderStarBearers();
    setupEventListeners();
}

init();
// Image List:
// artifacts/the_star_fragment.png
// artifacts/the_fireflower.png
// artifacts/the_mushroom.png
// artifacts/fire_flower_petal.png
// bearers/rebellion.png
// bearers/charismatic.png
// bearers/beauty.png
// bearers/refrain.png
// bearers/might.png
// bearers/justice.png
// bearers/self_reflection.png
// bearers/unknown.png
// bearers/god_toad.png
// bearers/unknown_bearer.png