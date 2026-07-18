// This file defines the custom visual themes for each character's profile page.

export const PROFILE_THEMES = {
    'default': {
        bannerImage: 'banners/default_banner.png',
        accentColor: '#58a6ff',
        backgroundColor: '#010409',
        fontColor: '#e6edf3',
        customSections: []
    },
    'wah_media_collective': {
        bannerImage: 'banners/newspaper_banner.png',
        accentColor: '#e3b341',
        backgroundColor: '#2d2a23',
        fontColor: '#f0e6d2',
        customSections: [
            {
                title: "About The Daily Paradox",
                content: "The WAH Media Collective is dedicated to bringing you the most chaotic, unfiltered, and occasionally accurate news from across the Doughnut World. We believe the truth is messy. WAH!"
            }
        ]
    },
    'colonel_vera_steelstorm': {
        bannerImage: 'banners/iron_legion_banner.png',
        accentColor: '#ADB5BD', // Iron Legion Grey
        backgroundColor: '#1a1d20',
        fontColor: '#f0f0f0',
        customSections: [
            {
                title: "The Hammer Code",
                content: "An order is not a suggestion. It is a fact. <br>A defense is a temporary measure before an attack. <br>A Legionnaire's life belongs to the Emperor. Spend it wisely.<br>Chaos is the enemy. Order is the only virtue."
            }
        ]
    },
    'fawful': {
        bannerImage: 'banners/fawful_banner.png',
        accentColor: '#32CD32', // Fawful Green
        backgroundColor: '#1a3d1a',
        fontColor: '#f0f0f0',
        customSections: [
            {
                title: "My Fury!",
                content: "My minions are fools! They cannot even polish my brain-helmet without leaving the smudges of their incompetence! I need minions with more FURY! More CHORTLES! I will build them! I will build a minion of PURE FURY who laughs at all my jokes! YES!"
            }
        ]
    },
    'dan': {
        bannerImage: 'banners/rakasha_banner.png',
        accentColor: '#D2B48C', // Rakasha Tan
        backgroundColor: '#3d352a',
        fontColor: '#f5f5dc',
        customSections: []
    },
    'waluigi': {
        bannerImage: 'banners/waluigi_banner.png',
        accentColor: '#70389c', // Waluigi Purple
        backgroundColor: '#2d1a3d',
        fontColor: '#e6e6e6',
        customSections: [
            {
                title: "Waluigi's Magnificent Life Goals! WAH!",
                content: "1. Win something. Anything. I'm not picky. <br>2. Get revenge on the Green Mustache Man for that... incident. <br>3. Perfect my devastating bob-omb ballet. <br>4. Finally get invited to the big party. <br>5. Achieve ultimate stylishness."
            }
        ]
    },
    'lario': {
        bannerImage: 'banners/ratchet_raiders_banner.png',
        accentColor: '#D2691E', // Raider Orange
        backgroundColor: '#4a321e',
        fontColor: '#f0e6d6',
        customSections: [
            {
                title: "Lario's Workshop - Services Offered!",
                content: "Need a new engine? A bigger cannon? A questionable 'Toad-powered' polishing machine? My workshop can build it all! Good prices, mostly-reliable results! No refunds. All sales final. Not responsible for explosions, accidental teleportation, or attracting pirates."
            }
        ]
    },
    'donkey_kong': {
        bannerImage: 'banners/dk_crew_banner.png',
        accentColor: '#FFE135', // DK Yellow
        backgroundColor: '#4a3a1e',
        fontColor: '#f0f0f0',
        customSections: []
    },
    'diddy_kong': {
        bannerImage: 'banners/dk_crew_banner.png',
        accentColor: '#e53935', // Diddy Red
        backgroundColor: '#4a2a2a',
        fontColor: '#f0f0f0',
        customSections: []
    },
    'lanky_kong': {
        bannerImage: 'banners/dk_crew_banner.png',
        accentColor: '#fd7e14', // Lanky Orange
        backgroundColor: '#4a321e',
        fontColor: '#f0f0f0',
        customSections: []
    },
    'candy_kong': {
        bannerImage: 'banners/dk_crew_banner.png',
        accentColor: '#FF69B4', // Candy Pink
        backgroundColor: '#4d1a3d',
        fontColor: '#f5e6f5',
        customSections: []
    },
    'chunky_kong': {
        bannerImage: 'banners/dk_crew_banner.png',
        accentColor: '#4169E1', // Chunky Blue
        backgroundColor: '#2a2d3d',
        fontColor: '#f0f0f0',
        customSections: []
    },
    'king_k_rool': {
        bannerImage: 'banners/kremling_banner.png',
        accentColor: '#808000', // Kremling Green
        backgroundColor: '#3d3d1e',
        fontColor: '#f0f0f0',
        customSections: []
    },
    'archie': {
        bannerImage: 'banners/archie_banner.png',
        accentColor: '#a371f7', // Mystic Purple
        backgroundColor: '#2d1a3d',
        fontColor: '#e6e6e6',
        customSections: []
    },
    // Adding fallbacks for other posters
    'general_marcus_ironhand': {
        bannerImage: 'banners/iron_legion_banner.png',
        accentColor: '#ADB5BD',
        backgroundColor: '#1a1d20',
        fontColor: '#f0f0f0',
        customSections: []
    },
    'kamek': {
        bannerImage: 'banners/koopa_banner.png',
        accentColor: '#4169E1', // Koopa Blue
        backgroundColor: '#2a2d3d',
        fontColor: '#f0f0f0',
        customSections: []
    },
    'giggling_pete': {
        bannerImage: 'banners/jester_banner.png',
        accentColor: '#FF69B4', // Jester Pink
        backgroundColor: '#4d1a3d',
        fontColor: '#f5e6f5',
        customSections: []
    },
    'toad_lee': {
        bannerImage: 'banners/liberated_toads_banner.png',
        accentColor: '#87CEEB', // Sky Blue
        backgroundColor: '#2a3d45',
        fontColor: '#e6f0f5',
        customSections: []
    },
    'chief_thornpaw': {
        bannerImage: 'banners/rakasha_banner.png',
        accentColor: '#D2B48C',
        backgroundColor: '#3d352a',
        fontColor: '#f5f5dc',
        customSections: []
    },
    'captain_syrup': {
        bannerImage: 'banners/crimson_fleet_banner.png',
        accentColor: '#DC143C', // Crimson
        backgroundColor: '#4d1a1a',
        fontColor: '#f5e6e6',
        customSections: []
    },
    'detective_penny': {
        bannerImage: 'banners/dci_banner.png',
        accentColor: '#8B4513', // Saddle Brown
        backgroundColor: '#3d2a1e',
        fontColor: '#f0e6d6',
        customSections: []
    },
    'captain_toad': {
        bannerImage: 'banners/mushroom_regency_banner.png',
        accentColor: '#4169E1',
        backgroundColor: '#2a2d3d',
        fontColor: '#f0f0f0',
        customSections: []
    }
};