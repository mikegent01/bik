
// This file contains the detailed operational data for the Mages' Guild unique system display.

export const MAGES_GUILD_DETAILS = {
    description: "The Mages' Guild's internal politics are a constant struggle between tradition and reckless innovation. This balance of power is tracked in the Great Scrying Orb, which reflects the dominant magical philosophy and the Guild's current clandestine projects.",
    scrying_orb: {
        title: "The Conclave's Scrying Orb",
        current_focus: "Current Focus: Analyzing the Onyx Hand's recent political maneuvering in the Mushroom Kingdom. A key spellbook related to their plot has been stolen by a Loyalist soldier, creating a chaotic variable we must account for.",
        active_plot: "The Toad Town Gambit",
        plot_description: "The Conservator faction is pushing research into binding runes, while the Innovators see Archie as a subject to be studied, not caged."
    },
    influence_distribution: {
        labels: ["Arcane Research", "Magical Regulation", "Guild Defense", "Political Lobbying"],
        data: [45, 30, 15, 10]
    },
    influence_network: [
        { id: 'ley_lines', label: 'Ley Line Nexuses', description: "Control over key ley lines provides raw power for large-scale rituals." },
        { id: 'regal_courts', label: "Imperial Court Advisors", description: "Guild mages advise Imperial nobles, subtly guiding policy to favor the Guild's interests." },
        { id: 'arcane_libraries', label: 'Ancient Libraries', description: "Access to forbidden knowledge gives the Guild an edge over all magical rivals." },
        { id: 'enforcement', label: 'Aegis Magi Enforcers', description: "A military arm used to 'correct' rogue mages and protect Guild assets." }
    ]
};