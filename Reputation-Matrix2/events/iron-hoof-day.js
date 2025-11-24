export const IRON_HOOF_DAY_POSTS = [

];

export const IRON_HOOF_DAY_EVENT = {
    id: 'iron_hoof_day',
    title: "Celestia's Iron Hoof Day",
    order: -1, // Newest event
    locationId: 'poi_wh_couronne', // Placeholder, Equestria isn't on a map yet
    description: "The annual state-mandated holiday in Equestria, celebrating the absolute autocratic rule of Queen Celestia. The day is marked by grand military parades and displays of loyalty, but is viewed by outsiders and dissidents as a symbol of oppression.",
    attendees: [
        { characterKey: 'queen_celestia', host: true, justification: "Immortal Sovereign and host of the celebration." },
        { characterKey: 'regal_empire_delegate', justification: "Attending as an official observer to study Equestrian methods of social control." },
        { characterKey: 'free_name_sarah', justification: "[IN SECRET] Coordinating with the 'Freedom Trotters' dissident network to document the regime's abuses during the holiday." }
    ],
    news_ids: ['wah_media_iron_hoof'],
    post_ids: IRON_HOOF_DAY_POSTS.filter(p => p.id !== 'wah_media_iron_hoof').map(p => p.id)
};