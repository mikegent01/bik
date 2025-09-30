// quests/quests-remi.js
export const REMI_QUESTS = {
    'remi_noble_debt': {
        id: 'remi_noble_debt',
        title: "A Noble's Debt",
        type: 'personal',
        category: 'Personal - FNG Remi',
        objective: "You owe a significant debt to a minor noble in the Midlands Capital. You boarded the Vigilance as a mercenary, seeking enough pay to clear your name before his collectors find you.",
        assignee: "Remi",
        assigneeKey: 'remi',
        status: "active",
        motivation: "Survival and freedom from debt are the primary motivators. The collectors are known for their ruthless methods.",
        steps: [
            { id: 'step1', title: "Earn Your Keep", status: 'active', description: "Take on contracts and find valuable salvage to accumulate wealth." },
            { id: 'step2', title: "Locate the Noble", status: 'locked', description: "Find the location of the noble, Lord Harrington, within the Imperial Capital to arrange payment." },
            { id: 'step3', title: "Pay the Debt", status: 'locked', description: "Settle the debt, either through payment or... other means." }
        ]
    },
    'remi_waluigi_espionage': {
        id: 'remi_waluigi_espionage',
        title: "WAH! A Little Espionage!",
        type: 'personal',
        category: 'Personal - FNG Remi',
        objective: "Waluigi wants you to use your 'average' appearance to blend in at the next port and eavesdrop on a meeting between a stuffy Imperial noble and a shady merchant. He wants to know what they're plotting!",
        assignee: "Remi",
        assigneeKey: 'remi',
        status: "active",
        motivation: "Waluigi has taken an interest in you. Fulfilling this request will earn the favor of the ship's enigmatic, purple-clad benefactor.",
        steps: [
            { id: 'step1', title: "Identify the Target", status: 'active', description: "Waluigi has provided a vague description. Find the meeting place at the next port of call." },
            { id: 'step2', title: "Eavesdrop", status: 'locked', description: "Get close enough to the meeting to overhear their plans without being detected." },
            { id: 'step3', title: "Report to Waluigi", status: 'locked', description: "Return to the Vigilance and report your findings directly to Waluigi." }
        ]
    },
    'remi_warios_offer': {
        id: 'remi_warios_offer',
        title: "A WAH-nderful Offer",
        type: 'personal',
        category: 'Personal - FNG Remi',
        objective: "Impressed by your survival instincts after the bomb incident, Wario has offered you a place in his crew, promising a powerful, custom firearm as a signing bonus. Decide whether to accept his offer and join his greedy enterprise or refuse and make a powerful enemy.",
        assignee: "Remi",
        assigneeKey: 'remi',
        status: "available",
        motivation: "Wario sees you as a valuable, chaotic asset. Accepting could provide you with powerful gear and resources, but would align you with a notoriously treacherous figure. Refusing could paint a target on your back.",
        steps: [
            { id: 'step1', title: "Consider the Offer", status: 'active', description: "Wario has made his offer. The choice is yours.", options: ["Accept Wario's deal.", "Refuse Wario's deal.", "Try to play both sides."] }
        ]
    }
};
