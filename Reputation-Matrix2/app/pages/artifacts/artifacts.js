import { playSound } from '../../../common.js';
import { state } from '../../../state.js';
import { getIntelForFaction } from '../../../systems/common.js';

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function hasSufficientIntel(requirement) {
    if (state.debugMode) return true;
    if (!requirement || !requirement.faction || typeof requirement.level === 'undefined') return false;
    return getIntelForFaction(requirement.faction) >= requirement.level;
}

function hasSufficientIntelForField(req) {
    if (state.debugMode) return true;
    if (!req) return false;
    if (Array.isArray(req)) return req.some(r => hasSufficientIntel(r));
    return hasSufficientIntel(req);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function animateCounter(element, target, duration = 1000) {
    const start = parseInt(element.textContent) || 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeProgress);
        element.textContent = current;
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// ============================================================================
// DATA
// ============================================================================

const ARTIFACT_DATA = {
    main_artifacts: [
        {
            id: 'star_fragment',
            name: 'The Star Fragment',
            image: 'artifacts/the_star_fragment.png',
            icon: '⭐',
            rarity: 'legendary',
            status: 'scattered',
            pieces: { collected: 0, total: 9 },
            description: "A piece of a fallen star, shattered into nine fragments by the God Toad. Each shard bestows immense, unique power upon its bearer, but also subtly corrupts them to fit a grand, unknown design.",
            lore: "When the star fell, it illuminated the night sky for seven days. The God Toad, witnessing its descent, knew such power could not remain whole.",
            abilities: ["Soul Binding", "Power Amplification", "Fate Manipulation"],
            locations: "Scattered across the Midlands, held by the Star Bearers"
        },
        {
            id: 'fire_flower',
            name: 'The Fireflower',
            image: 'artifacts/the_fireflower.png',
            icon: '🔥',
            rarity: 'legendary',
            status: 'fragmented',
            pieces: { collected: 0, total: 18 },
            description: "A legendary artifact that grants mastery over flame. It is said to be hidden in a volcanic dungeon, guarded by a fire dragon and its cult.",
            lore: "Born from the heart of the first volcano, the Fireflower's petals were scattered by the great eruption that shaped the continents.",
            abilities: ["Flame Mastery", "Political Influence", "Charisma Enhancement"],
            locations: "Petals distributed among world leaders and major factions"
        },
        {
            id: 'mushroom',
            name: 'The Mushroom of Life',
            image: 'artifacts/the_mushroom.png',
            icon: '🍄',
            rarity: 'legendary',
            status: 'hidden',
            pieces: { collected: 0, total: 1 },
            description: "A relic with the power to restore life itself. It grows in a cursed, time-distorting forest, protected by ancient guardians who test all who seek it.",
            lore: "The first life in the world sprouted from this ancient fungus. Its spores carry the essence of creation itself.",
            abilities: ["Life Restoration", "Time Distortion", "Nature Command"],
            locations: "The Cursed Forest of Eternity"
        }
    ],
    star_bearers: [
        {
            id: 'rebellion',
            name: 'Rebellion',
            title: 'The Dark Sovereign',
            element: 'darkness',
            threat_level: 10,
            status: 'hostile',
            powers: "Rebellion's true powers remain largely unknown, as few have witnessed them and survived. Ancient texts speak of his ability to devour souls and incorporate their knowledge and abilities into his own. The darkness he commands is said to be sentient, a living extension of his will that hungers for life. Witnesses claim to have seen him split into multiple shadow forms, each capable of independent action, while his true body remains hidden. The most disturbing rumors suggest he can corrupt other Star Fragment bearers, slowly turning them into his thralls while they believe they maintain their free will.",
            fragment_name: "Crown Shard",
            fragment_power: "Core Power",
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
            name: 'Charismatic',
            title: 'The Battle Master',
            element: 'fire',
            threat_level: 7,
            status: 'neutral',
            powers: "Charismatic can ignite his body in flames that do not harm him but scorch everything he touches. He can project firebolts and create walls of flame to control the battlefield. His most devastating ability is Phoenix Form, which transforms him into a fiery entity that can fly and regenerate from seemingly fatal wounds.",
            fragment_name: "Warrior Shard",
            fragment_power: "Combat Power",
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
            name: 'Beauty',
            title: 'The Toxic Enchanter',
            element: 'nature',
            threat_level: 6,
            status: 'unknown',
            powers: "Beauty can accelerate plant growth, creating deadly botanical traps and barriers within seconds. He can synthesize potent toxins from his body that cause hallucinations, paralysis, or slow death. His most insidious power is Verdant Subjugation, which allows him to implant spores in victims that slowly bring them under his control.",
            fragment_name: "Bloom Shard",
            fragment_power: "Growth Power",
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
            name: 'Refrain',
            title: 'The Tempest',
            element: 'storm',
            threat_level: 7,
            status: 'neutral',
            powers: "Refrain can summon winds powerful enough to uproot trees and deflect arrows or projectiles. He can create localized storms, complete with lightning and hail. His ultimate ability is Cyclone Manifestation, which creates a devastating tornado under his control.",
            fragment_name: "Tempest Shard",
            fragment_power: "Storm Power",
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
            name: 'Might',
            title: 'The Unstoppable',
            element: 'earth',
            threat_level: 8,
            status: 'ally',
            powers: "Might possesses superhuman strength that allows him to shatter stone with his bare hands. His body is nearly indestructible, capable of withstanding tremendous physical punishment. His signature ability is Tectonic Impact, which creates shockwaves when he strikes the ground, capable of toppling buildings and creating fissures.",
            fragment_name: "Force Shard",
            fragment_power: "Strength Power",
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
            name: 'Justice',
            title: 'The Arbiter',
            element: 'light',
            threat_level: 5,
            status: 'neutral',
            powers: "Justice can perceive lies and deception with perfect accuracy. He can create binding magical contracts that physically punish those who break them. His most feared power is Cosmic Verdict, which can restore balance by transferring fortune from the undeservingly prosperous to the unjustly suffering.",
            fragment_name: "Truth Shard",
            fragment_power: "Balance Power",
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
            name: 'Self Reflection',
            title: 'The Oracle',
            element: 'time',
            threat_level: 4,
            status: 'ally',
            powers: "Self Reflection can see possible futures branching from any present moment. He can communicate through dreams and visions over vast distances. His most valuable ability is Memory Walk, which allows him to project himself and others into past events as observers.",
            fragment_name: "Vision Shard",
            fragment_power: "Insight Power",
            fragment_desc: "The Vision Shard contains the star's aspect of perception and foresight. It appears as a clear crystal that sometimes shows swirling images of distant places or times.",
            history: "Originally a scholarly toad who documented the forgotten histories of the Midlands, Self Reflection was chosen for his contemplative nature. When he received the Vision Shard, his consciousness expanded beyond linear time. He established a small sanctuary beside the Lake of Mirrors, where the waters sometimes reflect events yet to occur. Though physically the weakest of the fragment bearers, he is perhaps the most important, as his visions guide the others toward the eventual reunification of all fragments.",
            intel_requirements: {
                details: { faction: 'mages_guild', level: 50 },
                history: { faction: 'mages_guild', level: 75 },
            }
        },
        {
            id: 'unknown',
            name: 'The Lost Bearer',
            title: 'Unknown',
            element: 'void',
            threat_level: '?',
            status: 'unknown',
            powers: "The identity and abilities of the final Star Fragment bearer are unknown. Their shard, and their destiny, remain a mystery.",
            fragment_name: "Unknown Shard",
            fragment_power: "???",
            fragment_desc: "The nature of this fragment is lost to history.",
            history: "One of the original eight fragments distributed by the God Toad has been lost to time. Whether its bearer is in hiding, dead, or simply unknown is a mystery that could have significant implications for the reunification of the star."
        }
    ],
    god_toad: {
        id: 'god_toad',
        name: 'The God Toad',
        title: 'Original Keeper',
        element: 'cosmic',
        threat_level: '∞',
        status: 'unknown',
        powers: "The God Toad exists simultaneously in multiple planes of reality, making him nearly impossible to truly comprehend, let alone defeat. Those who attempt to perceive his true form often find their minds fractured beyond repair. He can manipulate the very fabric of space and time in limited areas, creating pocket dimensions where physical laws bend to his will. There are accounts of him reversing the flow of time to undo events that displease him, though this appears to drain his power significantly. Some scholars believe he is not a single entity but a collective consciousness inhabiting a shared form, explaining his ability to maintain awareness across vast distances.",
        fragment_name: "Core Shard",
        fragment_power: "Binding Power",
        fragment_desc: "The Core Shard is unlike the others—it appears as a void rather than a physical object, a tear in reality through which the pure power of the star flows directly into its bearer. This fragment gives the God Toad his omniscience regarding the other fragments and may be the source of his apparent immortality.",
        history: "After being betrayed by his adventuring companions who sought to steal the star's power for themselves, the God Toad shattered the star into nine fragments to prevent its misuse. He kept the Core Shard for himself and distributed the others to trusted followers who would become the Toad Guardians. What few know is that he deliberately corrupted each fragment differently, ensuring that their powers would drive their bearers toward specific goals—all part of a grand design that has been unfolding for centuries. His true motivation remains unknown, but ancient texts suggest he seeks to reshape the Midlands into something 'beyond mortal comprehension.'",
        intel_requirements: {
            details: { faction: 'mages_guild', level: 85 },
            history: { faction: 'mages_guild', level: 95 },
        }
    }
};

const REGIONAL_ANALYSIS_DATA = [
    {
        name: "The Midlands",
        icon: "🏰",
        color: "#8B0000",
        progress: "0/3 Factions",
        intel_req: { faction: 'regal_empire', level: 20 },
        details: {
            politicalSystem: "Monarchy with layered feudal and supernatural influence",
            currentSituation: "A dark and war-torn land under the rule of an enigmatic king",
            leadership: "King Elagabalus (The Enigmatic King)",
            population: "719.0M",
            gdp: "$250B",
            politicalInfluence: "High"
        },
        factions: [
            { name: "Royal Guards", influence: 47, rumor: { text: "The Royal Guards channel their petal's power to maintain unwavering loyalty and superhuman vigilance.", source: "Disgruntled Diplomatic Corps Member", intel_req: { faction: 'regal_empire', level: 45 } } },
            { name: "Vampire Coven", influence: 17, rumor: { text: "The Vampire Coven uses their petal to deepen their connection to the night.", source: "Silver Flame Interrogation Transcript", intel_req: { faction: 'silver_flame', level: 50 } } },
            { name: "Werewolf Packs", influence: 13, rumor: { text: "Werewolf Packs believe their petal imbues them with primal fury.", source: "Rakasha Huntmaster's Observation", intel_req: { faction: 'rakasha_clans', level: 50 } } }
        ],
        overallRumor: { text: "King Elagabalus's enigmatic reign is sustained by the largest Fire Flower petal.", intel_req: { faction: 'regal_empire', level: 60 } }
    },
    {
        name: "Mushroom Kingdom",
        icon: "🍄",
        color: "#FF6B6B",
        progress: "0/4 Factions",
        intel_req: { faction: 'mushroom_regency', level: 20 },
        details: {
            politicalSystem: "Criminal Monarchy Crisis",
            currentSituation: "In political turmoil after Princess Peach's assassination",
            leadership: "Chancellor Toadsworth III (Prime Minister)",
            population: "685.0M",
            gdp: "$80B",
            politicalInfluence: "Medium"
        },
        factions: [
            { name: "Chancellor Toadsworth III's Influence", influence: 45, rumor: { text: "Count Toad uses his petal to weave intricate illusions.", source: "Freelancer Underworld Informant", intel_req: { faction: 'freelancer_underworld', level: 45 } } },
            { name: "Toad Army", influence: 16, rumor: { text: "The Toad Army's petal grants enhanced morale.", source: "Captured Iron Legion Scout", intel_req: { faction: 'iron_legion', level: 40 } } },
            { name: "Mushroom Guild", influence: 14, rumor: { text: "The Guild cultivates their petal for rare fungi growth.", source: "Wario Land 'Business' Proposal", intel_req: { faction: 'wario_land', level: 40 } } },
            { name: "Royal Guard Remnants", influence: 12, rumor: { text: "The fragmented Royal Guard clings to a dying petal.", source: "Peach Loyalist Sympathizer", intel_req: { faction: 'peach_loyalists', level: 50 } } }
        ],
        overallRumor: { text: "Count Toad clutches a potent Fire Flower petal to navigate the treacherous political landscape.", intel_req: { faction: 'mushroom_regency', level: 60 } }
    },
    {
        name: "Aurea",
        icon: "⚡",
        color: "#FFD700",
        progress: "0/4 Factions",
        intel_req: { faction: 'aurea_oligarchy', level: 25 },
        details: {
            politicalSystem: "Technocratic Oligarchy",
            currentSituation: "Tech and magic coexist under strict governance",
            leadership: "High Overseer Aurelia (Techno-Mage)",
            population: "546.0M",
            gdp: "$300B",
            politicalInfluence: "Very High"
        },
        factions: [
            { name: "Technocratic Elite", influence: 38, rumor: { text: "Aurelia's Elite integrate petal energy into their cybernetics.", source: "Leaked Tech Guild Schematic", intel_req: { faction: 'tech_guild', level: 50 } } },
            { name: "Tech Guild", influence: 19, rumor: { text: "The Tech Guild experiments with petals to power forbidden tech.", source: "Ratchet Raiders Salvage Log", intel_req: { faction: 'ratchet_raiders', level: 45 } } },
            { name: "Arcane Scholars", influence: 16, rumor: { text: "Scholars use their petal to unlock ancient magical knowledge.", source: "Mages' Guild Conservator Report", intel_req: { faction: 'mages_guild', level: 45 } } },
            { name: "Rebel Hackers", influence: 11, rumor: { text: "Hackers harness a corrupted petal fragment for digital attacks.", source: "Hacktivist Collective", intel_req: { faction: 'hacktivist_collectives', level: 55 } } }
        ],
        overallRumor: { text: "High Overseer Aurelia has integrated a core petal into her techno-magical systems.", intel_req: { faction: 'aurea_oligarchy', level: 70 } }
    },
    {
        name: "Middle Earth",
        icon: "⚔️",
        color: "#228B22",
        progress: "0/4 Factions",
        intel_req: { faction: 'kingdom_of_gondor', level: 20 },
        details: {
            politicalSystem: "Ancient Kingdom with Shattered Borders",
            currentSituation: "Ancient alliances are being tested",
            leadership: "King Thorin (Warrior King)",
            population: "592.0M",
            gdp: "$150B",
            politicalInfluence: "High"
        },
        factions: [
            { name: "King Thorin's Power", influence: 31, rumor: { text: "Thorin's lineage is bound to a petal granting ancestral wisdom.", source: "Dwarven Runesmith's Tale", intel_req: { faction: 'kingdoms_of_the_dwarves', level: 45 } } },
            { name: "Elven Clans", influence: 21, rumor: { text: "Elven Clans nurture their petal to preserve forest magic.", source: "Faerun Elven Emissary", intel_req: { faction: 'elves_of_lindon', level: 40 } } },
            { name: "Dwarven Holds", influence: 19, rumor: { text: "Dwarven Holds use petal heat to forge legendary weapons.", source: "Iron Legion Weapons Analysis", intel_req: { faction: 'kingdoms_of_the_dwarves', level: 40 } } },
            { name: "Human Tribes", influence: 12, rumor: { text: "Human Tribes believe their fragments offer protection.", source: "Rebel Clans' Elder", intel_req: { faction: 'kingdom_of_gondor', level: 40 } } }
        ],
        overallRumor: { text: "King Thorin wields a Fire Flower petal, a relic aiding his quest to unite the kingdoms.", intel_req: { faction: 'kingdoms_of_the_dwarves', level: 65 } }
    },
    {
        name: "Pokemon Regions",
        icon: "🎮",
        color: "#FF4444",
        progress: "0/4 Factions",
        intel_req: { faction: 'pokemon_league', level: 15 },
        details: {
            politicalSystem: "League Federation",
            currentSituation: "Trainers and Pokémon guide the realm",
            leadership: "Champion Carter (League Champion)",
            population: "370.0M",
            gdp: "$100B",
            politicalInfluence: "Medium"
        },
        factions: [
            { name: "League Authority", influence: 36, rumor: { text: "Carter's petal resonates with his Pokémon.", source: "Disqualified League Challenger", intel_req: { faction: 'trainer_guild', level: 40 } } },
            { name: "Trainer Guild", influence: 20, rumor: { text: "Elite trainers receive minute petal shards.", source: "Underworld Smuggler's Ledger", intel_req: { faction: 'freelancer_underworld', level: 35 } } },
            { name: "Pokémon Society", influence: 18, rumor: { text: "The Society studies their petal for inter-species communication.", source: "Rakasha Shaman's Correspondence", intel_req: { faction: 'rakasha_clans', level: 35 } } },
            { name: "Wildlife Conservators", influence: 10, rumor: { text: "Conservators create hidden sanctuaries with petal warmth.", source: "Zootopian Environmental Report", intel_req: { faction: 'zootopia_republic', level: 35 } } }
        ],
        overallRumor: { text: "Champion Carter possesses a petal enhancing his bond with Pokémon.", intel_req: { faction: 'pokemon_league', level: 50 } }
    },
    {
        name: "Teyvat",
        icon: "✨",
        color: "#9B59B6",
        progress: "0/5 Factions",
        intel_req: { faction: 'teyvat_hegemony', level: 25 },
        details: {
            politicalSystem: "Divine Autocracy",
            currentSituation: "The Archon War continues",
            leadership: "Archon Lumine (God of Light)",
            population: "468.0M",
            gdp: "$200B",
            politicalInfluence: "Very High"
        },
        factions: [
            { name: "Archon Lumine's Power", influence: 39, rumor: { text: "Lumine channels her petal to radiate pure light.", source: "Silver Flame Theological Study", intel_req: { faction: 'silver_flame', level: 55 } } },
            { name: "Elemental Cults", influence: 17, rumor: { text: "Cults hoard petal fragments for elemental mastery.", source: "Mages' Guild Report", intel_req: { faction: 'mages_guild', level: 45 } } },
            { name: "Divine Guard", influence: 15, rumor: { text: "The Guard receives petal-infused amulets.", source: "Oathbound Judges' Observation", intel_req: { faction: 'oathbound_judges', level: 45 } } },
            { name: "Vision Bearers", influence: 11, rumor: { text: "Chosen mortals find tiny petal slivers.", source: "The Unchained Intelligence", intel_req: { faction: 'the_unchained', level: 45 } } },
            { name: "Abyss Order", influence: 10, rumor: { text: "The Abyss seeks to corrupt petals.", source: "Onyx Hand Scrying Report", intel_req: { faction: 'onyx_hand', level: 50 } } }
        ],
        overallRumor: { text: "Archon Lumine's power is augmented by a core petal.", intel_req: { faction: 'teyvat_hegemony', level: 70 } }
    },
    {
        name: "Faerun",
        icon: "🔮",
        color: "#4169E1",
        progress: "0/4 Factions",
        intel_req: { faction: 'faerun_theocracy', level: 20 },
        details: {
            politicalSystem: "Mystical Theocracy",
            currentSituation: "Magic saturates every aspect of life",
            leadership: "High Magus Elion (Supreme Sorcerer)",
            population: "485.0M",
            gdp: "$120B",
            politicalInfluence: "High"
        },
        factions: [
            { name: "High Magus Circle", influence: 42, rumor: { text: "Elion's circle amplifies spellcasting with their petal.", source: "Aurean Techno-Mage Analysis", intel_req: { faction: 'aurea_oligarchy', level: 50 } } },
            { name: "Mage Council", influence: 16, rumor: { text: "The Council debates ethical petal use.", source: "Mages' Guild Internal Memo", intel_req: { faction: 'mages_guild', level: 40 } } },
            { name: "Warrior Clans", influence: 13, rumor: { text: "Clans embed petal shards in ancestral weapons.", source: "Koopa Troop Weaponsmith's Journal", intel_req: { faction: 'koopa_troop', level: 40 } } },
            { name: "Ancient Elven Keepers", influence: 10, rumor: { text: "Elves guard a fading petal connecting them to primal magic.", source: "Middle-Earth Elven Clan Leader", intel_req: { faction: 'elves_of_lindon', level: 45 } } }
        ],
        overallRumor: { text: "High Magus Elion channels a petal to fuel his grand spells.", intel_req: { faction: 'faerun_theocracy', level: 65 } }
    },
    {
        name: "Zootopia",
        icon: "🦊",
        color: "#2ECC71",
        progress: "0/4 Factions",
        intel_req: { faction: 'zootopia_republic', level: 15 },
        details: {
            politicalSystem: "Democratic Republic",
            currentSituation: "Progressive nation facing systemic challenges",
            leadership: "President Judy (First Rabbit President)",
            population: "378.0M",
            gdp: "$110B",
            politicalInfluence: "Medium"
        },
        factions: [
            { name: "Presidential Administration", influence: 41, rumor: { text: "President Judy uses diplomatic techniques to bridge divides.", source: "Regal Empire Diplomatic Report", intel_req: { faction: 'regal_empire', level: 40 } } },
            { name: "Animal Rights Groups", influence: 18, rumor: { text: "These groups push for landmark legislation.", source: "The Unchained Sympathizer", intel_req: { faction: 'the_unchained', level: 35 } } },
            { name: "Civic Coalition", influence: 15, rumor: { text: "The Coalition promotes interspecies cooperation.", source: "Mushroom Regency Observer", intel_req: { faction: 'mushroom_regency', level: 35 } } },
            { name: "Trade Unions", influence: 10, rumor: { text: "Unions ensure fair representation.", source: "Iron Fists Labor Report", intel_req: { faction: 'iron_fists', level: 35 } } }
        ],
        overallRumor: { text: "President Judy's presidency represents a pivotal moment in Zootopia's evolution.", intel_req: { faction: 'zootopia_republic', level: 50 } }
    },
    {
        name: "Grand Line",
        icon: "⚓",
        color: "#1ABC9C",
        progress: "0/4 Factions",
        intel_req: { faction: 'grand_line_republic', level: 20 },
        details: {
            politicalSystem: "Naval Republic",
            currentSituation: "Government and pirates clash for treasure",
            leadership: "Admiral Wave (Naval Commander)",
            population: "362.0M",
            gdp: "$110B",
            politicalInfluence: "Medium"
        },
        factions: [
            { name: "Admiral Wave's Command", influence: 37, rumor: { text: "Wave's flagship is powered by a petal.", source: "Crimson Fleet First Mate's Log", intel_req: { faction: 'crimson_fleet', level: 45 } } },
            { name: "Pirate Crews Coalition", influence: 21, rumor: { text: "Pirate Lords fight over petals revealing treasure routes.", source: "Wario's Treasure Map Fragment", intel_req: { faction: 'wario_land', level: 40 } } },
            { name: "Republic Naval Forces", influence: 19, rumor: { text: "Naval Forces use petal-infused ammunition.", source: "Iron Legion Munitions Report", intel_req: { faction: 'iron_legion', level: 40 } } },
            { name: "United Merchant Fleets", influence: 12, rumor: { text: "Merchants create illusory defenses with petals.", source: "Divided Realms Trade Captain", intel_req: { faction: 'divided_realms_republic', level: 40 } } }
        ],
        overallRumor: { text: "Admiral Wave's strategic genius is enhanced by a Fire Flower petal.", intel_req: { faction: 'grand_line_republic', level: 55 } }
    },
    {
        name: "The Edge",
        icon: "🌌",
        color: "#34495E",
        progress: "0/5 Factions",
        intel_req: { faction: 'the_edge_outpost', level: 15 },
        details: {
            politicalSystem: "Frontier Outpost",
            currentSituation: "Desolate region at the world's edge",
            leadership: "Explorer Drake (Self-Proclaimed Guardian)",
            population: "161.0M",
            gdp: "$50B",
            politicalInfluence: "Low"
        },
        factions: [
            { name: "Explorer Drake's Network", influence: 42, rumor: { text: "Drake's petal adapts to the void.", source: "Wayfinders' Guild Deep Space Probe", intel_req: { faction: 'wayfinders_guild', level: 50 } } },
            { name: "Pioneer Settlements", influence: 14, rumor: { text: "Pioneers use petal fragments for sustainable biomes.", source: "Aurean Xenobotanist's Log", intel_req: { faction: 'aurea_oligarchy', level: 35 } } },
            { name: "Outcast Communities", influence: 12, rumor: { text: "Outcasts believe their petal wards off void madness.", source: "Cosmic Jester Cultist's Scribblings", intel_req: { faction: 'cosmic_jesters', level: 40 } } },
            { name: "Scavenger Crews", influence: 11, rumor: { text: "Scavengers use petal glow to locate rare materials.", source: "Ratchet Raider Salvage Crew", intel_req: { faction: 'ratchet_raiders', level: 35 } } },
            { name: "Void Gazers", influence: 11, rumor: { text: "Void Gazers meditate with their petal for dimensional glimpses.", source: "Teyvat Astrologer's Scrying", intel_req: { faction: 'teyvat_hegemony', level: 40 } } }
        ],
        overallRumor: { text: "Drake may have found a unique petal that thrives in desolate conditions.", intel_req: { faction: 'the_edge_outpost', level: 55 } }
    }
];

const ELEMENT_COLORS = {
    darkness: '#1a0a2e',
    fire: '#ff4500',
    nature: '#228b22',
    storm: '#4a90d9',
    earth: '#8b4513',
    light: '#ffd700',
    time: '#9370db',
    void: '#2c2c2c',
    cosmic: '#ff00ff'
};

const STATUS_COLORS = {
    hostile: '#ff4444',
    neutral: '#ffaa00',
    ally: '#44ff44',
    unknown: '#888888'
};

// ============================================================================
// GLOBAL VARIABLES
// ============================================================================

let currentTab = 'overview';
let searchQuery = '';
let filterElement = 'all';
let constellationCanvas = null;
let constellationCtx = null;
let animationFrame = null;
let particles = [];
let connectionLines = [];

// ============================================================================
// DOM ELEMENTS
// ============================================================================

const modal = document.getElementById('bearer-modal');
const modalContent = document.getElementById('bearer-modal-content');
const closeModalBtn = modal?.querySelector('.modal-close');

// ============================================================================
// INITIALIZATION
// ============================================================================

function init() {
    renderPage();
    setupEventListeners();
    startAmbientAnimations();
}

function renderPage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    
    mainContent.innerHTML = `
        <div class="artifacts-page">
            ${renderHeader()}
            ${renderTabNavigation()}
            <div class="artifacts-content" id="artifacts-content">
                ${renderCurrentTab()}
            </div>
        </div>
    `;
    
    if (currentTab === 'bearers') {
        setTimeout(initConstellation, 100);
    }
}

// ============================================================================
// HEADER & STATS
// ============================================================================

function renderHeader() {
    const stats = calculateStats();
    
    return `
        <header class="artifacts-header">
            <div class="header-content">
                <div class="header-titles">
                    <h1 class="page-main-title">
                        <span class="title-icon">📜</span>
                        Artifact Registry
                    </h1>
                    <p class="header-subtitle">Cataloguing the legendary artifacts of power across all realms</p>
                </div>
                <div class="header-stats">
                    <div class="stat-orb" data-tooltip="Star Fragment pieces collected">
                        <div class="orb-icon">⭐</div>
                        <div class="orb-value"><span id="star-count">${stats.starFragments.collected}</span>/${stats.starFragments.total}</div>
                        <div class="orb-label">Star Fragments</div>
                        <div class="orb-progress" style="--progress: ${(stats.starFragments.collected / stats.starFragments.total) * 100}%"></div>
                    </div>
                    <div class="stat-orb" data-tooltip="Fire Flower petals recovered">
                        <div class="orb-icon">🔥</div>
                        <div class="orb-value"><span id="petal-count">${stats.fireFlower.collected}</span>/${stats.fireFlower.total}</div>
                        <div class="orb-label">Fire Petals</div>
                        <div class="orb-progress" style="--progress: ${(stats.fireFlower.collected / stats.fireFlower.total) * 100}%"></div>
                    </div>
                    <div class="stat-orb" data-tooltip="Regions with intel gathered">
                        <div class="orb-icon">🗺️</div>
                        <div class="orb-value"><span id="region-count">${stats.regionsInvestigated}</span>/${stats.totalRegions}</div>
                        <div class="orb-label">Regions Intel</div>
                        <div class="orb-progress" style="--progress: ${(stats.regionsInvestigated / stats.totalRegions) * 100}%"></div>
                    </div>
                    <div class="stat-orb" data-tooltip="Bearers identified">
                        <div class="orb-icon">👁️</div>
                        <div class="orb-value"><span id="bearer-count">${stats.bearersIdentified}</span>/${stats.totalBearers}</div>
                        <div class="orb-label">Bearers Known</div>
                        <div class="orb-progress" style="--progress: ${(stats.bearersIdentified / stats.totalBearers) * 100}%"></div>
                    </div>
                </div>
            </div>
            <div class="header-decoration">
                <div class="decoration-line"></div>
                <div class="decoration-gem">◆</div>
                <div class="decoration-line"></div>
            </div>
        </header>
    `;
}

function calculateStats() {
    let starCollected = 0; // Party has 1 fragment
    let starTotal = 9;
    
    let petalCollected = 0;
    let petalTotal = REGIONAL_ANALYSIS_DATA.length;
    
    let regionsInvestigated = 0;
    REGIONAL_ANALYSIS_DATA.forEach(region => {
        if (hasSufficientIntel(region.intel_req)) regionsInvestigated++;
    });
    
    let bearersIdentified = 0;
    ARTIFACT_DATA.star_bearers.forEach(bearer => {
        if (['self_reflection', 'unknown'].includes(bearer.id) || hasSufficientIntelForField(bearer.intel_requirements?.identity)) {
            bearersIdentified++;
        }
    });
    
    return {
        starFragments: { collected: starCollected, total: starTotal },
        fireFlower: { collected: petalCollected, total: petalTotal },
        regionsInvestigated,
        totalRegions: REGIONAL_ANALYSIS_DATA.length,
        bearersIdentified,
        totalBearers: ARTIFACT_DATA.star_bearers.length
    };
}

// ============================================================================
// TAB NAVIGATION
// ============================================================================

function renderTabNavigation() {
    const tabs = [
        { id: 'overview', label: 'Overview', icon: '📖' },
        { id: 'artifacts', label: 'Artifacts', icon: '💎' },
        { id: 'bearers', label: 'Star Bearers', icon: '⭐' },
        { id: 'regions', label: 'Fire Flower Intel', icon: '🔥' }
    ];
    
    return `
        <nav class="artifacts-tabs">
            ${tabs.map(tab => `
                <button class="tab-btn ${currentTab === tab.id ? 'active' : ''}" data-tab="${tab.id}">
                    <span class="tab-icon">${tab.icon}</span>
                    <span class="tab-label">${tab.label}</span>
                </button>
            `).join('')}
        </nav>
    `;
}

function renderCurrentTab() {
    switch(currentTab) {
        case 'overview': return renderOverviewTab();
        case 'artifacts': return renderArtifactsTab();
        case 'bearers': return renderBearersTab();
        case 'regions': return renderRegionsTab();
        default: return renderOverviewTab();
    }
}

// ============================================================================
// OVERVIEW TAB
// ============================================================================

function renderOverviewTab() {
    return `
        <div class="tab-panel overview-panel">
            <div class="overview-intro">
                <div class="intro-card">
                    <div class="intro-icon">📜</div>
                    <h2>The Hunt for Power</h2>
                    <p>Three legendary artifacts shape the fate of all realms. The Star Fragment, shattered into nine pieces, grants its bearers extraordinary abilities. The Fire Flower's petals are scattered among world leaders. The Mushroom of Life awaits in a cursed forest.</p>
                </div>
            </div>
            
            <div class="overview-grid">
                ${ARTIFACT_DATA.main_artifacts.map(artifact => `
                    <div class="overview-artifact-card" data-artifact="${artifact.id}">
                        <div class="artifact-card-bg" style="--accent: ${artifact.id === 'star_fragment' ? '#ffd700' : artifact.id === 'fire_flower' ? '#ff4500' : '#9370db'}"></div>
                        <div class="artifact-card-content">
                            <div class="artifact-icon-large">${artifact.icon}</div>
                            <h3>${artifact.name}</h3>
                            <div class="artifact-status">
                                <span class="status-badge ${artifact.status}">${artifact.status}</span>
                                <span class="pieces-count">${artifact.pieces.collected}/${artifact.pieces.total} Pieces</span>
                            </div>
                            <p>${artifact.description}</p>
                            <button class="view-details-btn" data-artifact="${artifact.id}">View Details</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="overview-quick-access">
                <h3><span class="section-icon">⚡</span> Quick Access</h3>
                <div class="quick-buttons">
                    <button class="quick-btn" data-tab="bearers">
                        <span class="quick-icon">👁️</span>
                        <span>View Star Bearers</span>
                    </button>
                    <button class="quick-btn" data-tab="regions">
                        <span class="quick-icon">🗺️</span>
                        <span>Regional Intel</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ============================================================================
// ARTIFACTS TAB
// ============================================================================

function renderArtifactsTab() {
    return `
        <div class="tab-panel artifacts-panel">
            <div class="artifacts-showcase">
                ${ARTIFACT_DATA.main_artifacts.map((artifact, index) => `
                    <article class="artifact-showcase-card" style="--delay: ${index * 0.1}s">
                        <div class="showcase-visual">
                            <div class="artifact-glow" style="--glow-color: ${artifact.id === 'star_fragment' ? '#ffd700' : artifact.id === 'fire_flower' ? '#ff4500' : '#9370db'}"></div>
                            <img src="${artifact.image}" alt="${artifact.name}" class="artifact-image" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${artifact.icon}</text></svg>'">
                            <div class="artifact-rarity-badge">${artifact.rarity}</div>
                        </div>
                        <div class="showcase-content">
                            <header class="showcase-header">
                                <h2>${artifact.name}</h2>
                                <div class="artifact-meta">
                                    <span class="meta-item">
                                        <span class="meta-icon">📍</span>
                                        ${artifact.locations}
                                    </span>
                                </div>
                            </header>
                            
                            <div class="showcase-progress">
                                <div class="progress-label">
                                    <span>Collection Progress</span>
                                    <span>${artifact.pieces.collected}/${artifact.pieces.total}</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${(artifact.pieces.collected / artifact.pieces.total) * 100}%"></div>
                                </div>
                            </div>
                            
                            <p class="showcase-description">${artifact.description}</p>
                            
                            <div class="showcase-lore">
                                <h4><span class="lore-icon">📖</span> Ancient Lore</h4>
                                <p class="lore-text">${artifact.lore}</p>
                            </div>
                            
                            <div class="showcase-abilities">
                                <h4><span class="ability-icon">✨</span> Known Abilities</h4>
                                <div class="ability-tags">
                                    ${artifact.abilities.map(ability => `
                                        <span class="ability-tag">${ability}</span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </article>
                `).join('')}
            </div>
        </div>
    `;
}

// ============================================================================
// STAR BEARERS TAB
// ============================================================================

function renderBearersTab() {
    return `
        <div class="tab-panel bearers-panel">
            <div class="bearers-controls">
                <div class="filter-group">
                    <label>Filter by Element:</label>
                    <select id="element-filter" class="filter-select">
                        <option value="all">All Elements</option>
                        <option value="darkness">Darkness</option>
                        <option value="fire">Fire</option>
                        <option value="nature">Nature</option>
                        <option value="storm">Storm</option>
                        <option value="earth">Earth</option>
                        <option value="light">Light</option>
                        <option value="time">Time</option>
                    </select>
                </div>
                <div class="view-toggle">
                    <button class="view-btn active" data-view="constellation">
                        <span>🌌</span> Constellation
                    </button>
                    <button class="view-btn" data-view="grid">
                        <span>📊</span> Grid
                    </button>
                </div>
            </div>
            
            <div class="bearers-view-container">
                <div class="constellation-view active" id="constellation-view">
                    <canvas id="constellation-canvas"></canvas>
                    <div class="constellation-nodes" id="constellation-nodes"></div>
                    <div class="god-toad-center" id="god-toad-node">
                        <div class="god-toad-inner" data-id="god_toad">
                            <div class="god-toad-glow"></div>
                            <img src="bearers/god_toad.png" alt="God Toad" onerror="this.parentElement.innerHTML='<span class=\\'god-toad-icon\\'>🐸</span>'">
                            <span class="god-toad-label">The God Toad</span>
                        </div>
                    </div>
                </div>
                
                <div class="grid-view" id="grid-view">
                    ${renderBearersGrid()}
                </div>
            </div>
            
            <div class="bearers-legend">
                <h4>Status Legend</h4>
                <div class="legend-items">
                    <span class="legend-item"><span class="legend-dot" style="--color: ${STATUS_COLORS.hostile}"></span> Hostile</span>
                    <span class="legend-item"><span class="legend-dot" style="--color: ${STATUS_COLORS.neutral}"></span> Neutral</span>
                    <span class="legend-item"><span class="legend-dot" style="--color: ${STATUS_COLORS.ally}"></span> Ally</span>
                    <span class="legend-item"><span class="legend-dot" style="--color: ${STATUS_COLORS.unknown}"></span> Unknown</span>
                </div>
            </div>
        </div>
    `;
}

function renderBearersGrid() {
    const allBearers = [...ARTIFACT_DATA.star_bearers];
    
    return `
        <div class="bearers-grid">
            ${allBearers.map(bearer => {
                const isAlwaysKnown = ['self_reflection', 'unknown'].includes(bearer.id);
                const identityKnown = isAlwaysKnown || hasSufficientIntelForField(bearer.intel_requirements?.identity);
                const displayName = identityKnown ? bearer.name : 'Unknown Bearer';
                const displayTitle = identityKnown ? bearer.title : '???';
                const statusColor = STATUS_COLORS[identityKnown ? bearer.status : 'unknown'];
                const elementColor = ELEMENT_COLORS[identityKnown ? bearer.element : 'void'];
                
                return `
                    <div class="bearer-grid-card ${!identityKnown ? 'classified' : ''}" 
                         data-id="${bearer.id}"
                         style="--element-color: ${elementColor}; --status-color: ${statusColor}">
                        <div class="card-element-indicator"></div>
                        <div class="card-image-container">
                            <img src="bearers/${identityKnown ? bearer.id : 'unknown_bearer'}.png" 
                                 alt="${displayName}"
                                 onerror="this.parentElement.innerHTML='<span class=\\'card-icon\\'>👤</span>'">
                            <div class="status-indicator" title="${identityKnown ? bearer.status : 'Unknown'}"></div>
                        </div>
                        <div class="card-info">
                            <h4 class="card-name">${displayName}</h4>
                            <span class="card-title">${displayTitle}</span>
                            ${identityKnown ? `
                                <div class="card-meta">
                                    <span class="threat-level">Threat: ${bearer.threat_level}</span>
                                    <span class="element-type">${bearer.element}</span>
                                </div>
                            ` : '<span class="classified-text">[CLASSIFIED]</span>'}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function initConstellation() {
    const canvas = document.getElementById('constellation-canvas');
    const container = document.getElementById('constellation-view');
    const nodesContainer = document.getElementById('constellation-nodes');
    
    if (!canvas || !container || !nodesContainer) return;
    
    constellationCanvas = canvas;
    constellationCtx = canvas.getContext('2d');
    
    resizeCanvas();
    createConstellationNodes(nodesContainer, container);
    initParticles();
    initConnectionLines();
    animateConstellation();
    
    window.addEventListener('resize', debounce(() => {
        resizeCanvas();
        createConstellationNodes(nodesContainer, container);
        initConnectionLines();
    }, 250));
}

function resizeCanvas() {
    const container = constellationCanvas.parentElement;
    constellationCanvas.width = container.clientWidth;
    constellationCanvas.height = container.clientHeight;
}

function createConstellationNodes(nodesContainer, viewContainer) {
    const bearers = ARTIFACT_DATA.star_bearers;
    const centerX = viewContainer.clientWidth / 2;
    const centerY = viewContainer.clientHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.7;
    
    nodesContainer.innerHTML = bearers.map((bearer, i) => {
        const angle = (i / bearers.length) * 2 * Math.PI - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        const isAlwaysKnown = ['self_reflection', 'unknown'].includes(bearer.id);
        const identityKnown = isAlwaysKnown || hasSufficientIntelForField(bearer.intel_requirements?.identity);
        const displayName = identityKnown ? bearer.name : '???';
        const elementColor = ELEMENT_COLORS[identityKnown ? bearer.element : 'void'];
        const statusColor = STATUS_COLORS[identityKnown ? bearer.status : 'unknown'];
        
        return `
            <div class="constellation-node ${!identityKnown ? 'unknown' : ''}" 
                 data-id="${bearer.id}"
                 data-x="${x}"
                 data-y="${y}"
                 style="left: ${x}px; top: ${y}px; --element-color: ${elementColor}; --status-color: ${statusColor}">
                <div class="node-pulse"></div>
                <div class="node-inner">
                    <img src="bearers/${identityKnown ? bearer.id : 'unknown_bearer'}.png" 
                         alt="${displayName}"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <span class="node-fallback-icon" style="display: none;">👤</span>
                </div>
                <span class="node-label">${displayName}</span>
                <div class="node-threat ${identityKnown ? '' : 'hidden'}">${bearer.threat_level}</div>
            </div>
        `;
    }).join('');
}

function initParticles() {
    particles = [];
    const count = 50;
    
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * constellationCanvas.width,
            y: Math.random() * constellationCanvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
}

function initConnectionLines() {
    connectionLines = [];
    const nodes = document.querySelectorAll('.constellation-node');
    const godToad = document.getElementById('god-toad-node');
    
    if (!godToad) return;
    
    const centerX = constellationCanvas.width / 2;
    const centerY = constellationCanvas.height / 2;
    
    nodes.forEach(node => {
        const x = parseFloat(node.dataset.x);
        const y = parseFloat(node.dataset.y);
        
        connectionLines.push({
            x1: centerX,
            y1: centerY,
            x2: x,
            y2: y,
            opacity: 0.3
        });
    });
}

function animateConstellation() {
    if (!constellationCtx) return;
    
    constellationCtx.clearRect(0, 0, constellationCanvas.width, constellationCanvas.height);
    
    // Draw connection lines
    connectionLines.forEach(line => {
        const gradient = constellationCtx.createLinearGradient(line.x1, line.y1, line.x2, line.y2);
        gradient.addColorStop(0, `rgba(138, 43, 226, ${line.opacity})`);
        gradient.addColorStop(1, `rgba(138, 43, 226, 0.1)`);
        
        constellationCtx.beginPath();
        constellationCtx.strokeStyle = gradient;
        constellationCtx.lineWidth = 1;
        constellationCtx.moveTo(line.x1, line.y1);
        constellationCtx.lineTo(line.x2, line.y2);
        constellationCtx.stroke();
    });
    
    // Draw particles
    particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0) particle.x = constellationCanvas.width;
        if (particle.x > constellationCanvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = constellationCanvas.height;
        if (particle.y > constellationCanvas.height) particle.y = 0;
        
        constellationCtx.beginPath();
        constellationCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        constellationCtx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        constellationCtx.fill();
    });
    
    animationFrame = requestAnimationFrame(animateConstellation);
}

// ============================================================================
// REGIONS TAB
// ============================================================================

function renderRegionsTab() {
    const filteredRegions = REGIONAL_ANALYSIS_DATA.filter(region => {
        if (searchQuery) {
            return region.name.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return true;
    });
    
    return `
        <div class="tab-panel regions-panel">
            <div class="regions-toolbar">
                <div class="search-box">
                    <span class="search-icon">🔍</span>
                    <input type="text" 
                           id="region-search" 
                           placeholder="Search regions..." 
                           value="${searchQuery}">
                </div>
                <div class="regions-stats">
                    <span>${filteredRegions.filter(r => hasSufficientIntel(r.intel_req)).length} of ${filteredRegions.length} regions accessible</span>
                </div>
            </div>
            
            <div class="regions-grid">
                ${filteredRegions.map((region, index) => renderRegionCard(region, index)).join('')}
            </div>
        </div>
    `;
}

function renderRegionCard(region, index) {
    const hasAccess = hasSufficientIntel(region.intel_req);
    
    if (!hasAccess) {
        return `
            <div class="region-card locked" style="--delay: ${index * 0.05}s; --accent: ${region.color}">
                <div class="region-locked-overlay">
                    <span class="lock-icon">🔒</span>
                    <span class="lock-text">Intel Required</span>
                    <span class="lock-requirement">${region.intel_req.faction} Lvl ${region.intel_req.level}</span>
                </div>
                <div class="region-card-header">
                    <span class="region-icon">${region.icon}</span>
                    <h3>${region.name}</h3>
                </div>
            </div>
        `;
    }
    
    const accessibleFactions = region.factions.filter(f => hasSufficientIntel(f.rumor.intel_req)).length;
    const totalFactions = region.factions.length;
    const overallRumorAccessible = hasSufficientIntel(region.overallRumor.intel_req);
    
    return `
        <div class="region-card" style="--delay: ${index * 0.05}s; --accent: ${region.color}">
            <div class="region-card-header" data-region="${region.name}">
                <div class="header-left">
                    <span class="region-icon">${region.icon}</span>
                    <div class="header-titles">
                        <h3>${region.name}</h3>
                        <span class="region-leadership">${region.details.leadership}</span>
                    </div>
                </div>
                <div class="header-right">
                    <div class="faction-progress">
                        <span class="progress-text">${accessibleFactions}/${totalFactions}</span>
                        <div class="mini-progress">
                            <div class="mini-fill" style="width: ${(accessibleFactions / totalFactions) * 100}%"></div>
                        </div>
                    </div>
                    <span class="expand-arrow">▼</span>
                </div>
            </div>
            
            <div class="region-card-body">
                <div class="region-quick-stats">
                    <div class="quick-stat">
                        <span class="stat-label">System</span>
                        <span class="stat-value">${region.details.politicalSystem}</span>
                    </div>
                    <div class="quick-stat">
                        <span class="stat-label">Population</span>
                        <span class="stat-value">${region.details.population}</span>
                    </div>
                    <div class="quick-stat">
                        <span class="stat-label">GDP</span>
                        <span class="stat-value">${region.details.gdp}</span>
                    </div>
                    <div class="quick-stat">
                        <span class="stat-label">Influence</span>
                        <span class="stat-value">${region.details.politicalInfluence}</span>
                    </div>
                </div>
                
                <div class="region-situation">
                    <p>${region.details.currentSituation}</p>
                </div>
                
                <div class="region-factions-section">
                    <h4><span class="section-icon">⚔️</span> Major Factions</h4>
                    <div class="factions-list">
                        ${region.factions.map(faction => renderFactionItem(faction)).join('')}
                    </div>
                </div>
                
                ${overallRumorAccessible ? `
                    <div class="region-overall-rumor">
                        <div class="rumor-header">
                            <span class="rumor-icon">🔥</span>
                            <span>Fire Flower Intel</span>
                        </div>
                        <p class="rumor-text">"${region.overallRumor.text}"</p>
                    </div>
                ` : `
                    <div class="region-overall-rumor locked">
                        <span class="lock-icon">🔒</span>
                        <span>Deeper intel required to access Fire Flower information</span>
                    </div>
                `}
            </div>
        </div>
    `;
}

function renderFactionItem(faction) {
    const hasAccess = hasSufficientIntel(faction.rumor.intel_req);
    
    return `
        <div class="faction-item ${!hasAccess ? 'classified' : ''}">
            <div class="faction-header">
                <span class="faction-name">${hasAccess ? faction.name : '[CLASSIFIED]'}</span>
                <div class="faction-influence">
                    <div class="influence-bar">
                        <div class="influence-fill" style="width: ${faction.influence}%"></div>
                    </div>
                    <span class="influence-value">${faction.influence}%</span>
                </div>
            </div>
            ${hasAccess ? `
                <div class="faction-rumor">
                    <p class="rumor-content">"${faction.rumor.text}"</p>
                    <span class="rumor-source">— ${faction.rumor.source}</span>
                </div>
            ` : `
                <div class="faction-classified">
                    <span>Requires intel from ${faction.rumor.intel_req.faction} (Lvl ${faction.rumor.intel_req.level})</span>
                </div>
            `}
        </div>
    `;
}

// ============================================================================
// MODAL SYSTEM
// ============================================================================

function showBearerModal(bearerId) {
    const allBearers = [...ARTIFACT_DATA.star_bearers, ARTIFACT_DATA.god_toad];
    const bearer = allBearers.find(b => b.id === bearerId);
    if (!bearer || !modal || !modalContent) return;

    playSound('click.mp3');
    
    const isAlwaysKnownIdentity = ['self_reflection', 'unknown', 'god_toad'].includes(bearer.id);
    const isAlwaysKnownDetails = ['self_reflection', 'unknown'].includes(bearer.id);

    const identityKnown = isAlwaysKnownIdentity || hasSufficientIntelForField(bearer.intel_requirements?.identity);
    const detailsKnown = isAlwaysKnownDetails || hasSufficientIntelForField(bearer.intel_requirements?.details);
    const historyKnown = isAlwaysKnownDetails || hasSufficientIntelForField(bearer.intel_requirements?.history);

    const elementColor = ELEMENT_COLORS[bearer.element] || '#888';
    const statusColor = STATUS_COLORS[bearer.status] || '#888';

    if (!identityKnown) {
        modalContent.innerHTML = `
            <div class="bearer-modal-classified">
                <div class="classified-icon">🔒</div>
                <h2>CLASSIFIED DOSSIER</h2>
                <p>You lack the required intelligence to view this bearer's information.</p>
                <div class="intel-requirements">
                    <span>Gather more intel to unlock this dossier</span>
                </div>
            </div>
        `;
        modal.classList.add('show');
        return;
    }

    modalContent.innerHTML = `
        <div class="bearer-modal-content" style="--element-color: ${elementColor}; --status-color: ${statusColor}">
            <div class="modal-header-section">
                <div class="modal-portrait">
                    <div class="portrait-glow"></div>
                    <img src="bearers/${bearer.id}.png" 
                         alt="${bearer.name}"
                         onerror="this.parentElement.innerHTML='<span class=\\'portrait-fallback\\'>${bearer.id === 'god_toad' ? '🐸' : '👤'}</span>'">
                    <div class="status-badge" style="background: ${statusColor}">${bearer.status}</div>
                </div>
                <div class="modal-titles">
                    <h2>${bearer.name}</h2>
                    <span class="bearer-title">${bearer.title}</span>
                    <div class="bearer-meta">
                        <span class="meta-tag element" style="background: ${elementColor}">${bearer.element}</span>
                        <span class="meta-tag threat">Threat: ${bearer.threat_level}</span>
                    </div>
                </div>
            </div>
            
            <div class="modal-body-section">
                <div class="info-section">
                    <h3><span class="section-icon">⚔️</span> Powers & Abilities</h3>
                    ${detailsKnown 
                        ? `<p>${bearer.powers}</p>` 
                        : `<p class="redacted-text">[INTEL REQUIRED - Gather more faction intelligence]</p>`
                    }
                </div>
                
                <div class="info-section fragment-section">
                    <h3><span class="section-icon">⭐</span> Star Fragment</h3>
                    <div class="fragment-card">
                        <div class="fragment-name">${bearer.fragment_name}</div>
                        <div class="fragment-power">${bearer.fragment_power}</div>
                        ${detailsKnown 
                            ? `<p class="fragment-desc">${bearer.fragment_desc}</p>` 
                            : `<p class="redacted-text">[INTEL REQUIRED]</p>`
                        }
                    </div>
                </div>
                
                <div class="info-section">
                    <h3><span class="section-icon">📖</span> History</h3>
                    ${historyKnown 
                        ? `<p>${bearer.history}</p>` 
                        : `<p class="redacted-text">[DEEP INTEL REQUIRED - Further investigation needed]</p>`
                    }
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

function showArtifactModal(artifactId) {
    const artifact = ARTIFACT_DATA.main_artifacts.find(a => a.id === artifactId);
    if (!artifact || !modal || !modalContent) return;
    
    playSound('click.mp3');
    
    const accentColor = artifact.id === 'star_fragment' ? '#ffd700' : artifact.id === 'fire_flower' ? '#ff4500' : '#9370db';
    
    modalContent.innerHTML = `
        <div class="artifact-modal-content" style="--accent-color: ${accentColor}">
            <div class="artifact-modal-header">
                <div class="artifact-modal-image">
                    <div class="image-glow"></div>
                    <img src="${artifact.image}" alt="${artifact.name}" onerror="this.parentElement.innerHTML='<span class=\\'artifact-icon-large\\'>${artifact.icon}</span>'">
                </div>
                <div class="artifact-modal-info">
                    <span class="rarity-tag">${artifact.rarity}</span>
                    <h2>${artifact.name}</h2>
                    <div class="status-row">
                        <span class="status-tag ${artifact.status}">${artifact.status}</span>
                        <span class="pieces-tag">${artifact.pieces.collected}/${artifact.pieces.total} Collected</span>
                    </div>
                </div>
            </div>
            
            <div class="artifact-modal-body">
                <div class="artifact-section">
                    <h3>Description</h3>
                    <p>${artifact.description}</p>
                </div>
                
                <div class="artifact-section lore">
                    <h3>Ancient Lore</h3>
                    <p class="lore-text">"${artifact.lore}"</p>
                </div>
                
                <div class="artifact-section">
                    <h3>Known Abilities</h3>
                    <div class="abilities-list">
                        ${artifact.abilities.map(a => `<span class="ability-chip">${a}</span>`).join('')}
                    </div>
                </div>
                
                <div class="artifact-section">
                    <h3>Known Locations</h3>
                    <p>${artifact.locations}</p>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

function hideModal() {
    if (modal) modal.classList.remove('show');
}

// ============================================================================
// AMBIENT ANIMATIONS
// ============================================================================

function startAmbientAnimations() {
    // Add floating particles to header
    const header = document.querySelector('.artifacts-header');
    if (header) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'ambient-particle';
            particle.style.cssText = `
                left: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 5}s;
                animation-duration: ${5 + Math.random() * 5}s;
            `;
            header.appendChild(particle);
        }
    }
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================

function setupEventListeners() {
    const mainContent = document.getElementById('main-content');
    
    if (mainContent) {
        mainContent.addEventListener('click', handleMainContentClick);
        mainContent.addEventListener('input', handleMainContentInput);
        mainContent.addEventListener('change', handleMainContentChange);
    }
    
    if (modal && closeModalBtn) {
        closeModalBtn.addEventListener('click', hideModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) hideModal();
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hideModal();
    });
}

function handleMainContentClick(e) {
    // Tab navigation
    const tabBtn = e.target.closest('.tab-btn');
    if (tabBtn) {
        const newTab = tabBtn.dataset.tab;
        if (newTab !== currentTab) {
            if (animationFrame) cancelAnimationFrame(animationFrame);
            currentTab = newTab;
            playSound('click.mp3');
            renderPage();
        }
        return;
    }
    
    // Quick buttons
    const quickBtn = e.target.closest('.quick-btn');
    if (quickBtn) {
        currentTab = quickBtn.dataset.tab;
        playSound('click.mp3');
        renderPage();
        return;
    }
    
    // View toggle (constellation/grid)
    const viewBtn = e.target.closest('.view-btn');
    if (viewBtn) {
        const view = viewBtn.dataset.view;
        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        viewBtn.classList.add('active');
        
        const constView = document.getElementById('constellation-view');
        const gridView = document.getElementById('grid-view');
        
        if (view === 'constellation') {
            constView?.classList.add('active');
            gridView?.classList.remove('active');
            setTimeout(initConstellation, 100);
        } else {
            constView?.classList.remove('active');
            gridView?.classList.add('active');
            if (animationFrame) cancelAnimationFrame(animationFrame);
        }
        
        playSound('click.mp3');
        return;
    }
    
    // Bearer nodes
    const bearerNode = e.target.closest('.constellation-node, .bearer-grid-card, .god-toad-inner');
    if (bearerNode) {
        const id = bearerNode.dataset.id;
        if (id) showBearerModal(id);
        return;
    }
    
    // Artifact details button
    const detailsBtn = e.target.closest('.view-details-btn');
    if (detailsBtn) {
        const artifactId = detailsBtn.dataset.artifact;
        if (artifactId) showArtifactModal(artifactId);
        return;
    }
    
    // Region card expand
    const regionHeader = e.target.closest('.region-card-header');
    if (regionHeader && !e.target.closest('.region-card.locked')) {
        const card = regionHeader.closest('.region-card');
        if (card) {
            card.classList.toggle('expanded');
            playSound('click.mp3');
        }
        return;
    }
}

function handleMainContentInput(e) {
    if (e.target.id === 'region-search') {
        searchQuery = e.target.value;
        const regionsGrid = document.querySelector('.regions-grid');
        if (regionsGrid) {
            const filteredRegions = REGIONAL_ANALYSIS_DATA.filter(region => 
                region.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            regionsGrid.innerHTML = filteredRegions.map((region, index) => 
                renderRegionCard(region, index)
            ).join('');
        }
    }
}

function handleMainContentChange(e) {
    if (e.target.id === 'element-filter') {
        filterElement = e.target.value;
        // Could add filtering logic here
        playSound('click.mp3');
    }
}

// ============================================================================
// CLEANUP
// ============================================================================

window.addEventListener('beforeunload', () => {
    if (animationFrame) cancelAnimationFrame(animationFrame);
});

// ============================================================================
// START
// ============================================================================

init();