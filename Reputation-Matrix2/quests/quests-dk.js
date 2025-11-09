// quests/quests-dk.js

export const DK_QUESTS = {
    'dk_save_funky': {
        id: 'dk_save_funky',
        title: "The Serpent in the Surf Shack",
        type: 'personal',
        category: 'Personal - Donkey Kong',
        is_updated: true,
        objective: "King K. Rool has issued an assassination order for Funky Kong to cover up a Kremling espionage operation. Donkey Kong must race against time to protect his friend and neutralize the Kremling agent, Galypso, before she can strike.",
        assignee: "Donkey Kong",
        assigneeKey: 'donkey_kong',
        status: "active",
        motivation: "This is a profound betrayal. Funky is family. After the diplomatic disaster with Lanky, DK's leadership is already in question. Failing to protect his own Director of Intelligence from a direct assassination attempt would shatter the DK Crew's morale and his authority completely. This is not just about saving a friend; it's about saving his crew.",
        steps: [
            { id: 'step1', title: "Secure Funky Kong", status: 'active', description: "Funky is fortified in his surf shack, but a Kremling assassin is on the way. DK must get to him and reinforce his position before the assassin arrives." },
            { id: 'step2', title: "Identify the Assassin", status: 'locked', description: "Gather intelligence on the Kremling agent 'Galypso'. What are her methods? Her weaknesses? Where will she strike from?" },
            { id: 'step3', title: "Turn the Tables", status: 'locked', description: "Set a trap for Galypso and neutralize the threat to Funky Kong, sending a clear message back to King K. Rool." }
        ]
    }
};