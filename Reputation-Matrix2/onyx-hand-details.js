// This file contains the detailed operational data for the Onyx Hand's unique system display.

export const ONYX_HAND_DETAILS = {
    description: "The Onyx Hand is not a single entity, but a cabal of distinct covens, each with its own specialty and sphere of influence. They are bound by ancient pacts and the will of the Shadow Patriarch, Lady Ebonveil. Hover over a coven's sigil to learn more.",
    patriarch: {
        name: "Lady Ebonveil",
        title: "Shadow Patriarch",
        description: "The immortal vampire elder who sits at the pinnacle of the Onyx Hand's shadowy hierarchy."
    },
    covens: [
        {
            id: "thorn",
            name: "Coven of the Gilded Thorn",
            leader: "Lord Valerius",
            specialty: "Political Intrigue & Social Manipulation",
            description: "Weaves webs of influence within the noble courts and political bodies.",
            operation: "Currently embedding agents within the Regal Empire's noble houses to influence the Imperial succession."
        },
        {
            id: "blade",
            name: "Coven of the Silent Blade",
            leader: "Matron Inessa",
            specialty: "Assassination & Coercion",
            description: "The Hand's enforcers, eliminating threats with ruthless, silent efficiency.",
            operation: "Systematically eliminating key figures within the Mages' Guild's 'Innovator' faction to maintain their rivals' internal chaos."
        },
        {
            id: "veils",
            name: "Coven of Whispering Veils",
            leader: "The Veiled One",
            specialty: "Espionage & Information Brokering",
            description: "Gathers the secrets that serve as the Hand's true currency and weapon.",
            operation: "Operating a network of spies to monitor the movements and weaknesses of the Moonfang Pack's warbands."
        },
        {
            id: "crimson",
            name: "The Crimson Veil",
            leader: "The Veil Matron",
            specialty: "Covert Operations (Mushroom Kingdom)",
            description: "A sister coven tasked with destabilizing the Mushroom Kingdom from within.",
            operation: "A sister coven tasked with destabilizing the Mushroom Kingdom's fractured political landscape for future exploitation."
        }
    ],
    shared_mechanic: {
        tab_title: "Ancestral Surge",
        cards: {
            surge: {
                title: "Shared Mechanic: Ancestral Surge",
                description: "In the eternal war between werewolf and vampire, both sides draw upon their cursed lineage to unleash powerful abilities. This shared mechanic, 'Ancestral Surge,' manifests differently for each faction, reflecting their primal or undead nature.",
                css_class: 'mechanic-card' // Generic class
            },
            blood_rite: {
                title: "Blood Rite (Onyx Hand)",
                description: "Onyx Hand vampires can perform 'Blood Rites,' enabling preternatural feats. This can manifest as shadow-stepping, mesmerism to dominate weak minds, or hardening their skin to the consistency of stone, reflecting their cold, calculated mastery of their curse.",
                css_class: 'onyx-hand-mechanic'
            }
        }
    }
};