
export const grandCountryData = {
    pointsOfInterest: [
        // --- Location-article pin (map-preview pass). First surveyed pin on
        // the Grand Country sheet: the sheet existed with zero POIs, so the
        // hillfort article had nothing to point at. ---
        {
            id: 'poi_gc_eldridge_hillfort',
            x: 50.0, y: 30.0,
            type: 'fortress',
            name: "Eldridge Hillfort",
            description: "A crumbling fortress that once guarded the northern approaches to The Grand Country. Its rugged walls and watchtowers still face the roads the orcish marauders came by.",
            subRegion: 'grand_country',
            factionId: 'unaligned',
            intelReq: 20,
            political_influence: 2,
            economic_value: 2,
            military_strength: 4,
            population: 0,
            articleId: 'grand_country_eldridge_hillfort'
        }
    ],
    fogOfWar: []
};
