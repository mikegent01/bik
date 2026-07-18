// map-data/internet/intel-corp.js

export const intelCorpPois = [
    // Intel
    {
        id: 'poi_inet_silicon_foundry',
        x: 80.0, y: 65.0,
        type: 'workshop', name: "The Silicon Foundry 7nm (Intel)",
        subRegion: 'intel_corp',
        description: "A hyper-advanced fabrication plant where the core processing units of the digital world are etched onto silicon wafers. The process is so precise it is considered a form of industrial magic.",
        factionId: 'cybernetic_collectives', intelReq: { faction: 'cybernetic_collectives', level: 50 },
        political_influence: 6, economic_value: 9, military_strength: 7, population: 2000,
        age_of_antiquity: 1, crime_rate: 2
    },
    {
        id: 'poi_inet_quantum_core',
        x: 78.0, y: 68.0,
        type: 'ley_line', name: "The Quantum Computing Core",
        subRegion: 'intel_corp',
        description: "An experimental, super-cooled facility where Intel is attempting to build a stable quantum computer. It is a place of immense, unpredictable power that warps probability in its immediate vicinity.",
        factionId: 'cybernetic_collectives', intelReq: { faction: 'cybernetic_collectives', level: 85 },
        political_influence: 5, economic_value: 7, military_strength: 8, population: 50,
        age_of_antiquity: 1, crime_rate: 1
    },
];