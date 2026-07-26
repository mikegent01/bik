
export const RESEARCH_CATEGORIES = ['WEAPONS', 'MAGIC', 'TECH', 'MEDICAL', 'ECONOMIC', 'POLITICAL'];

// Slot Multipliers (Days to complete = Base Cost * Multiplier)
// Lower multiplier = Faster research
export const SLOT_MULTIPLIERS = {
    primary: 0.5, // 2x Speed
    major: 1.0,   // Normal Speed
    minor: 2.0    // 0.5x Speed
};

// Defines how much each Social Estate benefits from specific Research Categories (0-1 scale)
export const RESEARCH_TO_ESTATE_MAPPING = {
    WEAPONS: { nobility: 0.9, commoners: 0.2, slaves: 0.0 },
    MAGIC: { clergy: 1.0, nobility: 0.3, indentured: 0.1 },
    TECH: { burghers: 0.9, indentured: 0.4, nobility: 0.2 },
    MEDICAL: { clergy: 0.7, commoners: 0.5, burghers: 0.5 },
    ECONOMIC: { burghers: 1.0, nobility: 0.6, commoners: 0.2 },
    POLITICAL: { nobility: 1.0, clergy: 0.8, burghers: 0.4 }
};
