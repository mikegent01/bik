// This file defines the abilities that auxiliary party members can learn as they level up.

export const TOAD_ABILITIES = {
    axe: { // Toad Lee
        2: { name: "Reckless Attack", description: "Can attack with advantage, but attacks against him also have advantage until his next turn." },
        4: { name: "Cleave", description: "When reducing a creature to 0 hp, can use a bonus action to make an attack against another creature within 5ft." }
    },
    magic: { // Dan
        2: { name: "Divine Smite", description: "Can expend magical energy to deal extra radiant damage on a melee attack." },
        4: { name: "Cure Wounds", description: "Can touch a creature to restore a small amount of health." }
    },
    whip: { // Eager
        2: { name: "Trip Attack", description: "Can attempt to knock a creature prone with a whip attack." },
        4: { name: "Cunning Action", description: "Can use a bonus action to Dash or Disengage." }
    },
    spellcaster: { // Ryan
        2: { name: "Magic Missile", description: "Fires three magical darts that automatically hit their targets." },
        4: { name: "Shield", description: "Creates a temporary barrier of magical force to block attacks." }
    },
    gun: { // Roger
        2: { name: "Deadeye Shot", description: "Can take a penalty to his attack roll to add a bonus to his damage roll." },
        4: { name: "Quick Draw", description: "Gains a bonus to initiative rolls." }
    },
    grotesque: { // Bones
        2: { name: "Rage", description: "Can enter a rage, gaining resistance to physical damage and a bonus to strength-based damage rolls." },
        4: { name: "Unflinching", description: "Has advantage on saving throws against being frightened." }
    },
    deceit: { // Traitor Toad
        2: { name: "Feint", description: "Can use a bonus action to gain advantage on his next attack roll against a creature this turn."},
        4: { name: "Betrayal", description: "If an ally is within 5ft of his target, can deal extra sneak attack damage."}
    }
};