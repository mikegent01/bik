// map-data/internet/wastefill.js

export const wastefillPois = [
    // Great Southern Wastefill
    {
        id: 'poi_inet_myspace_mausoleum',
        x: 35.0, y: 83.0,
        type: 'ruins', name: "The Myspace Mausoleum",
        subRegion: 'wastefill',
        description: "A vast, silent, and gaudy ruin of a once-great social network. It is haunted by the ghosts of abandoned profiles and the faint sound of auto-playing music.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 15 },
        political_influence: 1, economic_value: 2, military_strength: 1, population: 0,
        age_of_antiquity: 1, crime_rate: 10
    },
    {
        id: 'poi_inet_aol_atoll',
        x: 43.0, y: 80.0,
        type: 'ruins', name: "The AOL Atoll",
        subRegion: 'wastefill',
        description: "A walled-off, abandoned island that was once a gateway to the entire web for millions. It is now a digital ghost town, littered with outdated portals and the spectral echo of dial-up modems.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 20 },
        political_influence: 1, economic_value: 1, military_strength: 1, population: 0,
        age_of_antiquity: 1, crime_rate: 10
    },
    {
        id: 'poi_inet_floppy_fields',
        x: 55.0, y: 82.0,
        type: 'farm', name: "The Floppy Disk Fields",
        subRegion: 'wastefill',
        description: "Endless fields of discarded 1.44MB floppy disks. Their storage capacity is negligible, but scavengers sometimes find fragments of valuable, ancient data within them.",
        factionId: 'ratchet_raiders', intelReq: { faction: 'ratchet_raiders', level: 10 },
        political_influence: 1, economic_value: 3, military_strength: 1, population: 50,
        age_of_antiquity: 1, crime_rate: 10
    },
    {
        id: 'poi_inet_cd_rom_canyons',
        x: 65.0, y: 81.0,
        type: 'mountain_pass', name: "The CD-ROM Canyons",
        subRegion: 'wastefill',
        description: "Deep canyons carved through mountains of discarded optical media. The walls shimmer with rainbow light, but the sharp edges of shattered discs make traversal dangerous.",
        factionId: 'ratchet_raiders', intelReq: { faction: 'ratchet_raiders', level: 10 },
        political_influence: 1, economic_value: 3, military_strength: 2, population: 40,
        age_of_antiquity: 1, crime_rate: 10
    },
    {
        id: 'poi_inet_geocities_graveyard',
        x: 48.0, y: 78.0,
        type: 'haunted_place', name: "The GeoCities Graveyard",
        subRegion: 'wastefill',
        description: "The crumbling, animated-GIF-haunted ruins of millions of abandoned personal homepages. A digital archaeological site full of embarrassing 'under construction' gifs and forgotten memories.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 20 },
        political_influence: 1, economic_value: 2, military_strength: 1, population: 0,
        age_of_antiquity: 1, crime_rate: 10
    },
    {
        id: 'poi_inet_flash_graveyard',
        x: 60.0, y: 78.0,
        type: 'ruins', name: "The Flash Player Graveyard",
        subRegion: 'wastefill',
        description: "A silent, inert wasteland where millions of once-vibrant Flash games and animations now lie dormant and unplayable. A place of digital ghosts and lost art.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 25 },
        political_influence: 1, economic_value: 2, military_strength: 1, population: 0,
        age_of_antiquity: 1, crime_rate: 10
    },
    {
        id: 'poi_inet_vine_memorial',
        x: 30.0, y: 78.0,
        type: 'shrine', name: "The Vine Memorial Loop",
        subRegion: 'wastefill',
        description: "A shrine where a single, perfect six-second video plays on an endless loop. It is a place of pilgrimage for those who remember the short-form video platform.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 15 },
        political_influence: 2, economic_value: 1, military_strength: 1, population: 0,
        age_of_antiquity: 1, crime_rate: 10
    }
];