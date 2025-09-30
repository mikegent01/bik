// This file defines the focus trees for the Liberated Toads.
// This new, simplified format tracks progress day-by-day in a linear timeline.

export const TOAD_TIMELINE = [
    {
        day: 1,
        events: [
            { toadKey: 'dan', focus: "Begin Magical Training", status: "Started", description: "Dan accepts Chief Thornpaw's offer and begins his training in the Rakasha's spiritual magic.", details: "" },
            { toadKey: 'toad_lee', focus: "Establish Watch", status: "Started", description: "Toad Lee organizes the other toads into a regular watch schedule to protect their camp.", details: "" },
            { toadKey: 'eager', focus: "Scout the Area", status: "Started", description: "Eager begins scouting the immediate vicinity of the Vigilance's crash site.", details: "" },
            { toadKey: 'roger', focus: "Inventory Supplies", status: "Started", description: "Roger takes stock of all scavenged supplies, creating a detailed inventory.", details: "" },
            { toadKey: 'ryan', focus: "Study the Staff", status: "Started", description: "Ryan begins his obsessive study of X.O.'s staff, trying to comprehend its reality-bending properties.", details: "" },
            { toadKey: 'bones', focus: "Observe Orcs", status: "Started", description: "Bones watches the nearby Orc warcamp, wrestling with his feeling of a 'debt' owed to them.", details: "" }
        ]
    },
    {
        day: 6,
        events: [
            { toadKey: 'dan', focus: "Hold a Council", status: "Completed", description: "Dan holds a council, uniting the toads and solidifying his role as their leader.", details: "Influence with the toads greatly increased." },
            { toadKey: 'toad_lee', focus: "Drill Sergeancy", status: "Completed", description: "Toad Lee's basic combat drills improve the group's defensive capabilities.", details: "All toads are now better prepared for combat." },
            { toadKey: 'eager', focus: "Map the Surroundings", status: "Completed", description: "Eager completes a detailed map of the area, identifying resources and dangers.", details: "New locations and scavenging opportunities revealed." },
            { toadKey: 'roger', focus: "Establish Barter System", status: "Completed", description: "Roger's new system for rationing and trade ensures resources last longer.", details: "Resource efficiency improved." },
            { toadKey: 'ryan', focus: "Practice Cantrips", status: "Completed", description: "Ryan's control over basic magic improves, allowing him to create light and sparks.", details: "Gained minor magical utility." },
            { toadKey: 'bones', focus: "Card Games", status: "Completed", description: "Bones's card games have become a popular pastime, easing tensions and boosting morale.", details: "Group morale has improved." }
        ]
    },
    {
        day: 14,
        events: [
            { toadKey: 'dan', focus: "Seeking a Cure", status: "Completed", description: "After the disastrous incident with the staff, Dan, now missing a hand, was brought to a dark archmage. He is in critical condition, and his survival depends on the party retrieving 'magic ozoonium' from the sewers.", details: "Status is critical. Humpik has taken on the quest to save him." },
            { toadKey: 'toad_lee', focus: "Guarding the Staff", status: "Ongoing", description: "With the revelation of an imposter and the general chaos, Toad Lee has doubled down on his vow to protect the volatile staff from all threats, internal and external.", details: "" },
            { toadKey: 'eager', focus: "From the Frying Pan...", status: "Ongoing", description: "Eager was moved from the prison only to be captured by raiders and sold to a mysterious 'angel'. He is now working as a bartender, unable to escape. An extraction attempt by the party failed when the Iron Legion raided the restaurant.", details: "Status is Captive." },
            { toadKey: 'ryan', focus: "Research X.O.'s Staff", status: "In Progress", description: "Ryan continues his intense study of the staff, hoping to uncover its secrets without causing another magical incident.", details: "(8 days remaining)" },
            { toadKey: 'roger', focus: "Organize Scavenging Parties", status: "In Progress", description: "Roger is forming small, efficient teams to scavenge for supplies in the nearby ruins of the Vigilance.", details: "(4 days remaining)" },
            { toadKey: 'bones', focus: "Contemplate Orc 'Debt'", status: "In Progress", description: "Bones is trying to understand the Orcs' motives and what his 'debt' to them truly means.", details: "(6 days remaining)" }
        ]
    }
];