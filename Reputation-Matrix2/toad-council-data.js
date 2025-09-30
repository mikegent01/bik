// toad-council-data.js

export const TOAD_COUNCIL_DATA = {
    totalVoters: 137,
    cooldownHours: 24, // Real-time hours
    storageKey: 'vigi.toadCouncilVote',
    blocs: {
        pragmatists: { size: 40, name: 'The Pragmatists (Teacher T & co.)' },
        hawks: { size: 35, name: 'The Hawks (Hardened Fighters)' },
        idealists: { size: 40, name: 'The Idealists (Younger Toads)' },
        skeptics: { size: 22, name: 'The Skeptics (Fireball Survivors)' }
    },
    proposals: {
        resources: {
            id: 'resources',
            label: 'Issue 1: Resource Priority',
            options: [
                { value: 'fortify', text: 'Fortify our position above all else.', appeal: ['pragmatists', 'hawks'] },
                { value: 'scout_food', text: 'Focus on scouting for a long-term, stable food source.', appeal: ['pragmatists', 'idealists'] },
                { value: 'get_weapons', text: 'Prioritize acquiring more weapons for every toad.', appeal: ['hawks', 'skeptics'] },
                { value: 'establish_farm', text: 'Establish a small-scale hydroponics farm on the Vigilance.', appeal: ['pragmatists', 'idealists'] },
                { value: 'medical_supplies', text: 'Invest remaining funds into better medical supplies for Creek.', appeal: ['idealists', 'skeptics'] },
            ]
        },
        staff: {
            id: 'staff',
            label: 'Issue 2: Staff of Madness Policy',
            options: [
                { value: 'train_users', text: 'Begin training a select few in the staff\'s defensive capabilities.', appeal: ['hawks'] },
                { value: 'seal_staff', text: 'Keep the staff sealed and hidden. Its power is too dangerous.', appeal: ['idealists', 'skeptics'] },
                { value: 'trade_staff', text: 'Attempt to trade the staff to a powerful group for protection.', appeal: ['pragmatists', 'skeptics'] },
                { value: 'study_staff', text: 'Allow Ryan to study the staff under strict supervision.', appeal: ['pragmatists', 'idealists'] },
                { value: 'display_staff', text: 'Display the staff as a symbol of our unity and power.', appeal: ['hawks'] },
            ]
        },
        community: {
            id: 'community',
            label: 'Issue 3: Community Policy',
            options: [
                { value: 'cleaning_rota', text: 'Establish a formal cleaning rota for the living quarters.', appeal: ['pragmatists'] },
                { value: 'training_drills', text: 'Organize mandatory weekly combat drills for all able-bodied toads.', appeal: ['hawks', 'skeptics'] },
                { value: 'storytelling_night', text: 'Set up a weekly storytelling night to boost morale.', appeal: ['idealists'] },
                { value: 'elect_mascot', text: 'Declare an official camp mascot (a particularly resilient mushroom).', appeal: ['idealists'] },
                { value: 'quiet_hours', text: 'Mandate a strict quiet-hours policy after sundown.', appeal: ['pragmatists'] }
            ]
        }
    }
};