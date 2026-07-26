// This file contains faction data for various other realms and dimensions.

export const OTHER_REALMS_3 = {
    the_known_world: {
        name: "World Federation of the Known World",
        description: "An expansive realm racked by orc offensives and intricate diplomatic impasses, with strict border controls enforced by a powerful federation.",
        logo: 'faction_known_world.png',
        relations: { 
            allies: ['regal_empire', 'iron_legion'], 
            enemies: ['rebel_clans', 'middle_earth_kingdoms', 'forest_tribes']
        },
        power_level: 8,
        category: "Major Powers",
        region: "The Known World",
        leader: "lord_sigmar",
        notable_people: [
            { name: "Lord Sigmar", role: "Federation Marshal", description: "A grim and determined warlord who holds the Federation together through military might and sheer force of will against the endless Orc threat." },
            { name: "Ambassador Thorne", role: "Chief Diplomat", description: "The man responsible for navigating the Federation's complex web of alliances and trade agreements." }
        ],
        waluigi_tip: "They love their passports and borders. Just set up a 'Waluigi's Official Express Border Crossing' booth and charge a ridiculous fee. They'll be too busy with the paperwork to notice me looting the treasury! WAH!"
    },
    the_world_beyond: {
        name: "Expansionist Empire of the World Beyond",
        description: "A relentless, Roman-like empire pressing its expansion against all neighbors, its ambitious designs hampered only by a towering mountain ring.",
        logo: 'faction_world_beyond.png',
        relations: { 
            allies: ['regal_empire', 'iron_legion'], 
            enemies: ['rebel_clans', 'the_unchained', 'forest_tribes']
        },
        power_level: 9,
        category: "Major Powers",
        region: "The World Beyond",
        leader: "imperator_maximus",
        notable_people: [
            { name: "Imperator Maximus", role: "Emperor", description: "A brilliant and ruthless emperor who believes it is his manifest destiny to conquer and 'civilize' the entire world." },
            { name: "Legate Valerius", role: "Commander of the Eagle Legion", description: "The Empire's most decorated and feared general." }
        ],
        waluigi_tip: "So much marching! And shiny eagles! Just polish one of their eagle standards with super-slippery banana peel oil. The resulting slapstick will ruin their whole 'disciplined army' look! WAH!"
    },
    the_edge_outpost: {
        name: "The Edge Frontier Outpost",
        description: "A desolate, largely uninhabited region at the very edge of the Doughnut world, where water cascades into the void of space.",
        logo: 'faction_the_edge.png',
        relations: { 
            allies: ['wayfinders_guild'], 
            enemies: ['triple_moon_remnants', 'cosmic_jesters']
        },
        power_level: 2,
        category: "Underworld & Fringe",
        region: "The Edge",
        leader: "explorer_drake",
        notable_people: [
            { name: "Explorer Drake", role: "Self-Proclaimed Guardian", description: "A rugged and resourceful wanderer who charts the chaotic energies of the Edge and protects the few pioneer settlements from void-spawned creatures." },
            { name: "Old Man Hemlock", role: "Void-Gazer", description: "A hermit who claims to see visions of other worlds in the cascading waters." }
        ],
        waluigi_tip: "They're all so serious about 'the void'. Just throw a rubber chicken over the edge and shout 'It's a prophecy!'. They'll spend weeks trying to figure out what it means. WAH-HA-HA!"
    },
    equestrian_regime: {
        name: "Autocratic Regime of Equestria",
        description: "A pony ethno-state ruled by an immortal tyrant where other races are heavily marginalized or enslaved under a veneer of enforced happiness.",
        logo: 'faction_equestria.png',
        relations: { 
            allies: ['regal_empire'], 
            enemies: ['zootopia_republic', 'the_unchained', 'liberated_toads', 'rebel_clans']
        },
        power_level: 5,
        category: "Regional Powers",
        region: "Equestria",
        leader: "queen_celestia",
        notable_people: [
            { name: "Queen Celestia", role: "Immortal Sovereign", description: "The tyrannical ruler of Equestria, who maintains her power through control of the sun and a powerful secret police." },
            { name: "Commander Hurricane", role: "Captain of the Royal Guard", description: "The stern and fanatically loyal commander of Celestia's elite pegasus forces." }
        ],
        waluigi_tip: "They love their parties and songs. Just switch the sheet music for the 'Hymn to Celestia' with the lyrics to my hit single, 'Waluigi's WAHnderful Day'. A musical masterpiece of chaos!"
    },
    grand_line_republic: {
        name: "Naval Republic of the Grand Line",
        description: "A sprawling chain of islands where a powerful government navy and notorious pirate crews clash for control of the world's greatest treasures.",
        logo: 'faction_grand_line.png',
        relations: { 
            allies: ['divided_realms_republic'], 
            enemies: ['crimson_fleet', 'freelancer_underworld', 'regal_empire']
        },
        power_level: 6,
        category: "Regional Powers",
        region: "Grand Line Archipelago",
        leader: "admiral_wave",
        notable_people: [
            { name: "Admiral Wave", role: "Naval Commander", description: "The brilliant and incorruptible leader of the Republic's naval forces, dedicated to eradicating piracy." },
            { name: "Gold Roger", role: "Pirate King (Deceased)", description: "The legendary pirate whose hidden treasure, the 'One Piece', fuels the ongoing conflict." }
        ],
        waluigi_tip: "So much water! And so many self-important marines. Just tell them a rival pirate crew has a map to a treasure made of 'extra-shiny buttons'. They'll waste weeks chasing a fake treasure! WAH!"
    },
    internet_federation: {
        name: "Digital Federation of The Internet",
        description: "A realm of interconnected information and digital tribes, with a complex web-based government system overseen by an enigmatic admin.",
        logo: 'faction_internet.png',
        relations: { 
            allies: ['aurea_oligarchy'], 
            enemies: ['regal_empire', 'mages_guild']
        },
        power_level: 6,
        category: "Regional Powers",
        region: "The Internet",
        leader: "admin_zero",
        notable_people: [
            { name: "Admin Zero", role: "Overseer", description: "The mysterious and powerful administrator who maintains the core protocols of The Internet, acting as a digital god." },
            { name: "Vector", role: "Hacktivist Collective Spokes-AI", description: "The public face of a decentralized group of hacktivists fighting for information freedom." }
        ],
        waluigi_tip: "It's all just ones and zeroes! Just find the file for 'Global_Peace_Treaty.txt' and replace it with a picture of me, Waluigi! The ultimate file corruption! WAH!"
    }
};
