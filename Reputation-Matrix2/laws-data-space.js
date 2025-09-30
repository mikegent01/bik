// laws-data-space.js

export const SPACE_CODES = {
    custodians_of_causality: {
        name: "The Axiomatic Code",
        logo: "icon_focus.png",
        description: "The absolute and unchanging legal and physical code that governs the Custodians. It is based on the fundamental laws of the universe as they perceive them. Deviation is not just illegal; it is a corruption of reality itself.",
        supporters: ['oathbound_judges', 'regal_empire'],
        opponents: ['cosmic_jesters'],
        political: [
            {
                name: "The Prime Inevitability",
                icon: "🏛️",
                spectrum: [
                    { name: "Predictive Council", description: "The council makes decisions based on complex probability models." },
                    { name: "Absolute Determinism", description: "The Prime Inevitability, a central AI, dictates all actions as there is no free will, only the illusion of it." }
                ],
                current: 1, trend: 0,
                description: "Governance is not a matter of choice, but of calculation. The Prime Inevitability calculates the optimal course of action to preserve the timeline, and the Custodians execute it without question."
            }
        ],
        military: [
            {
                name: "Temporal Intervention",
                icon: "⚔️",
                spectrum: [
                    { name: "Observation Only", description: "Anomalies are observed but not acted upon unless they threaten the timeline." },
                    { name: "Pre-emptive Erasure", description: "Potential threats to causality are erased from time before they can act." }
                ],
                current: 1, trend: 0,
                description: "The Custodians operate on a principle of pre-emptive defense. Any being or event that has a high probability of causing a paradox is targeted for erasure from the timeline."
            }
        ],
        penal: [
            {
                name: "The Correction",
                icon: "⚖️",
                spectrum: [
                    { name: "Temporal Quarantine", description: "Beings who violate causality are placed in isolated time loops." },
                    { name: "Causal Deletion", description: "The offender and their actions are completely erased from all of history." }
                ],
                current: 0, trend: 1,
                description: "Punishment is not about retribution, but about fixing the damage to spacetime. Minor offenders are quarantined in time loops. Major threats are simply... un-happened."
            }
        ]
    }
};