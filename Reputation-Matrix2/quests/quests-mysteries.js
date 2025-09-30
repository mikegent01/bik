// This file contains all hidden and mystery quests for the campaign.
export const MYSTERY_QUESTS = {
    'hidden_echo_in_the_core': {
        id: 'hidden_echo_in_the_core',
        title: "The Echo in the Core",
        type: 'mystery',
        category: 'Vigilance Mysteries',
        objective: "The fusion of X.O.'s staff with the Vigilance's power core has created an unstable and unprecedented magical anomaly. Strange energy readings and whispers are being detected. Investigate the source.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "hidden",
        start_condition: "Strange energy fluctuations have been detected coming from the Engine Room.",
        steps: [
            { id: 'step1', title: "Analyze the Energy Signature", status: 'active', description: "The ship's sensors are picking up a strange, repeating energy signature from the core. It doesn't match any known magical or technological pattern. Ryan must devise a way to analyze it without destabilizing the core." },
            { id: 'step2', title: "A Glimmer of Consciousness?", status: 'locked', description: "Further investigation is required to understand the nature of the echo." },
            { id: 'step3', title: "The Ghost in the Machine", status: 'locked', description: "The source of the echo must be confronted." }
        ]
    },
    'wario_bounty_mystery': {
        id: 'wario_bounty_mystery',
        title: "The Wario Enigma",
        type: 'mystery',
        category: 'Vigilance Mysteries',
        objective: "The Regal Empire's intelligence service claims 'Mr. Wario' has placed a one-million-coin bounty on 'Mr. Wario'. This is either a clerical error, a sign of extreme self-loathing, or a complex plot. Investigate this bizarre bounty.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "active",
        start_condition: "Revealed by the Regal Empire's Crown Intelligence during the standoff.",
        steps: [
            { id: 'step1', title: "Question the Detainees", status: 'active', description: "Interrogate the captured Mr. Wario and the other prisoners to understand who placed the bounty and why." },
            { id: 'step2', title: "Contact the Underworld", status: 'locked', description: "Use underworld contacts to verify the bounty's legitimacy and trace its source." },
            { id: 'step3', title: "Uncover the Plot", status: 'locked', description: "Determine the true target and purpose of this paradoxical contract." }
        ]
    },
    'mystery_imposter_toad': {
        id: 'mystery_imposter_toad',
        title: "The Impostor Toad",
        type: 'mystery',
        category: 'Vigilance Mysteries',
        objective: "Lario has revealed that the 'Dan' traveling with the party is an imposter, while the real Dan is aboard the airship creating a massive energy beam. The party must uncover the truth behind this deception, find the real Dan, and understand the imposter's motives.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "active",
        start_condition: "Revealed by Lario after the failed prison rescue attempt.",
        steps: [
            { id: 'step1', title: "The Revelation", status: 'completed', description: "Lario confessed to helping the real Dan get aboard the airship and warned the party that the 'Dan' with them is a fake." },
            { id: 'step2', title: "Observe the Impostor", status: 'active', description: "The party must now carefully watch the toad traveling with them for any slips in his persona or clues about his true identity and purpose." },
            { id: 'step3', title: "Find the Real Dan", status: 'locked', description: "Locate the real Dan aboard the airship and understand the nature and purpose of the massive energy beam he is creating." },
            { id: 'step4', title: "Confront the Truth", status: 'locked', description: "Confront the imposter with the evidence and uncover the full extent of the deception." }
        ]
    },
    'mystery_octopus_deception': {
        id: 'mystery_octopus_deception',
        title: "The Octopus Deception",
        type: 'mystery',
        category: 'Vigilance Mysteries',
        objective: "A series of murders has occurred in the capital, with the killer using FNG as an unwitting accomplice to hide the bodies. The party must identify the killer, now known as the 'Ketchup Man', and unravel his bizarre plot before he strikes again.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "active",
        start_condition: "FNG encountered a man covered in 'ketchup' near dead bodies.",
        steps: [
            { id: 'step1', title: "The Ketchup Man", status: 'completed', description: "FNG encountered a suspicious man covered in blood, who claimed it was ketchup. FNG reported the incident to the Iron Legion." },
            { id: 'step2', title: "The Unwitting Accomplice", status: 'completed', description: "The killer tricked FNG into creating a diversion, allowing him time to hide the bodies inside a giant octopus intended to be served as a meal at a local restaurant." },
            { id: 'step3', title: "A Case of Mistaken Identity", status: 'completed', description: "The angel proprietor of the restaurant, enraged by the news of a murderer, mistakenly evaporated a worker who fit the killer's description." },
            { id: 'step4', title: "Identify the True Killer", status: 'active', description: "The real killer remains at large, having thanked FNG for the distraction. The party must now identify him and understand his motives before the Iron Legion's raid complicates matters further." }
        ]
    }
};