// map-data/internet/capitol.js

export const capitolPois = [
    // The Capitol
    {
        id: 'poi_inet_zero_palace',
        x: 50.0, y: 41.0,
        type: 'castle', name: "The Zero Theorem Palace",
        subRegion: 'capitol',
        description: "The heavily guarded, ever-shifting palace of Admin Zero. Its location is fixed, but its internal layout is said to be a logical labyrinth that rearranges itself to repel intruders.",
        factionId: 'internet_federation', intelReq: { faction: 'internet_federation', level: 95 },
        political_influence: 10, economic_value: 7, military_strength: 10, population: 300,
        age_of_antiquity: 1, crime_rate: 1
    },
    {
        id: 'poi_inet_moderator_barracks',
        x: 48.0, y: 40.0,
        type: 'barracks', name: "The Moderator Barracks",
        subRegion: 'capitol',
        description: "The barracks for Admin Zero's elite personal guard, the Moderators. They are powerful anti-hacking programs given physical form.",
        factionId: 'internet_federation', intelReq: { faction: 'internet_federation', level: 85 },
        political_influence: 5, economic_value: 3, military_strength: 9, population: 1000,
        age_of_antiquity: 1, crime_rate: 1
    },
    {
        id: 'poi_inet_panopticon_tower',
        x: 51.5, y: 40.0,
        type: 'watchtower', name: "The Panopticon Tower",
        subRegion: 'capitol',
        description: "A single, central tower from which Admin Zero can theoretically observe all activity on the indexed web. A symbol of absolute surveillance.",
        factionId: 'internet_federation', intelReq: { faction: 'internet_federation', level: 90 },
        political_influence: 8, economic_value: 4, military_strength: 8, population: 20,
        age_of_antiquity: 1, crime_rate: 1
    },
];