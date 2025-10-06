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
            { toadKey: 'dan', focus: "Seeking a Cure", status: "Completed", description: "Dan was healed by the archmage, but at a cost. He is physically diminished, his body shrunken and weakened. The toads are now leaderless and in chaos as he recovers.", details: "Status is Weakened, but alive." },
            { toadKey: 'toad_lee', focus: "Guarding the Staff", status: "Ongoing", description: "With the revelation of an imposter and the general chaos, Toad Lee has doubled down on his vow to protect the volatile staff from all threats, internal and external.", details: "" },
            { toadKey: 'eager', focus: "From the Frying Pan...", status: "Ongoing", description: "Eager was moved from the prison only to be captured by raiders and sold to a mysterious 'angel'. He is now working as a bartender, unable to escape. An extraction attempt by the party failed when the Iron Legion raided the restaurant.", details: "Status is Captive." },
            { toadKey: 'ryan', focus: "Research X.O.'s Staff", status: "In Progress", description: "Ryan continues his intense study of the staff, hoping to uncover its secrets without causing another magical incident.", details: "(8 days remaining)" },
            { toadKey: 'roger', focus: "Organize Scavenging Parties", status: "In Progress", description: "Roger is forming small, efficient teams to scavenge for supplies in the nearby ruins of the Vigilance.", details: "(4 days remaining)" },
            { toadKey: 'bones', focus: "Contemplate Orc 'Debt'", status: "In Progress", description: "Bones is trying to understand the Orcs' motives and what his 'debt' to them truly means.", details: "(6 days remaining)" }
        ]
    },
    {
        day: 15,
        events: [
            { toadKey: 'dan', focus: "A Leader's Silence", status: "Ongoing", description: "Physically diminished and emotionally shattered, Dan has withdrawn. The splintering of the toads into factions—the 'Originals' versus the 'First Cohort'—is a weight he cannot currently bear. He sits in silence, the mantle of leadership feeling more like a shroud.", details: "Group cohesion is critically low." },
            { toadKey: 'toad_lee', focus: "The Staff's Warden", status: "Ongoing", description: "Toad Lee has become the grim enforcer of the Vow of Renewal. He spends his days policing the factions on the Vigilance, his axe a constant reminder that their fragile unity was bought with blood. The staff's whispers are a constant companion.", details: "Maintaining order through intimidation." },
            { toadKey: 'eager', focus: "Manor Exploration", status: "Ongoing", description: "Separated from the chaos on the Vigilance, Eager is with the main party at Raventree Manor. He is focused on the immediate survival challenges of the haunted estate.", details: "Primary focus is on hold." },
            { toadKey: 'ryan', focus: "Manor Exploration", status: "On Hold", description: "Ryan's research into the staff is paused. He is now at Raventree Manor, his sharp intellect focused on the mansion's mysteries... and observing his companions.", details: "Primary focus (Research) on hold (8 days remaining)." },
            { toadKey: 'roger', focus: "Manor Exploration", status: "On Hold", description: "Logistical planning for the toads has been put on hold. Roger is applying his pragmatic mind to the immediate dangers of Raventree Manor with the main party.", details: "Primary focus (Scavenging) on hold (4 days remaining)." },
            { toadKey: 'bones', focus: "Manor Exploration", status: "On Hold", description: "Bones has traded contemplating one hostile environment for another. His focus on the Orcs is paused as he navigates the unsettling halls of Raventree Manor.", details: "Primary focus (Orc Debt) on hold (6 days remaining)." }
        ]
    }
];