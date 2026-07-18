export const DINER_POSTS = [

];
export const DINER_EVENT = {
    id: 'capital_diner',
    title: "The Capital Dinner",
    order: 0, // Makes it the newest event
    locationId: 'poi_mid_capital_district',
    description: "A clandestine dinner held in the Imperial Capital between the returned underworld financier 'Mr. Wario', the anarchist Waluigi, and the respected neutral diplomat Lady Toriel of Lockerwood. The meeting sent shockwaves through the political landscape, signaling the formation of a new, unpredictable power bloc.",
    attendees: [
        { characterKey: 'waluigi', host: true, justification: "Co-host and master of chaos." },
        { characterKey: 'wario', host: true, justification: "Co-host and returned underworld financier... or so he claims." },
        { characterKey: 'lady_toriel', justification: "Attending as a neutral diplomat representing Lockerwood's interests." }
    ],
    news_ids: ['wah_media_diner_exclusive'],
    post_ids: DINER_POSTS.filter(p => p.id !== 'wah_media_diner_exclusive').map(p => p.id)
};
