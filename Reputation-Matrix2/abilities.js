// This file defines the abilities that auxiliary party members can learn as they level up.

export const TOAD_ABILITIES = {
    axe: { // Toad Lee
        2: { name: "Reckless Attack", description: "Can attack with advantage, but attacks against him also have advantage until his next turn." },
        4: { name: "Cleave", description: "When reducing a creature to 0 hp, can use a bonus action to make an attack against another creature within 5ft." },
        6: { name: "Relentless Endurance", description: "Once per long rest, when dropped to 0 hp but not killed outright, can drop to 1 hp instead." } // NEW
    },
    magic: { // Dan
        2: { name: "Divine Smite", description: "Can expend magical energy to deal extra radiant damage on a melee attack." },
        4: { name: "Cure Wounds", description: "Can touch a creature to restore a small amount of health." },
        6: { name: "Bless", description: "Can bless up to three creatures, allowing them to add a bonus to attack rolls and saving throws." } // NEW
    },
    whip: { // Eager
        2: { name: "Trip Attack", description: "Can attempt to knock a creature prone with a whip attack." },
        4: { name: "Cunning Action", description: "Can use a bonus action to Dash or Disengage." },
        6: { name: "Evasion", description: "When subjected to an effect that allows a Dexterity saving throw for half damage, takes no damage on a success and half on a failure." } // NEW
    },
    spellcaster: { // Ryan
        2: { name: "Magic Missile", description: "Fires three magical darts that automatically hit their targets." },
        4: { name: "Shield", description: "Creates a temporary barrier of magical force to block attacks." },
        6: { name: "Scorching Ray", description: "Hurls three rays of fire at one or more targets." } // NEW
    },
    gun: { // Roger
        2: { name: "Deadeye Shot", description: "Can take a penalty to his attack roll to add a bonus to his damage roll." },
        4: { name: "Quick Draw", description: "Gains a bonus to initiative rolls." },
        6: { name: "Sharpshooter", description: "Attacks at long range don't impose disadvantage, and ranged attacks ignore half and three-quarters cover." } // NEW
    },
    grotesque: { // Bones
        2: { name: "Rage", description: "Can enter a rage, gaining resistance to physical damage and a bonus to strength-based damage rolls." },
        4: { name: "Unflinching", description: "Has advantage on saving throws against being frightened." },
        6: { name: "Frenzy", description: "While raging, can make a single melee attack as a bonus action." } // NEW
    },
    deceit: { // The Mole
        2: { name: "Feint", description: "Can use a bonus action to gain advantage on his next attack roll against a creature this turn."},
        4: { name: "Betrayal", description: "If an ally is within 5ft of his target, can deal extra sneak attack damage."},
        6: { name: "Infiltration Expertise", description: "Can create false identities for himself. He has advantage on checks to maintain his cover." } // NEW
    }
};