// This file defines the abilities that auxiliary party members can learn as they level up.
// Odd levels mirror the most recent even-level ability to prevent undefined lookups.

export const TOAD_ABILITIES = {
    axe: { // Toad Lee
        1: { name: "Reckless Attack", description: "Can attack with advantage, but attacks against him also have advantage until his next turn." },
        2: { name: "Reckless Attack", description: "Can attack with advantage, but attacks against him also have advantage until his next turn." },
        3: { name: "Reckless Attack", description: "Can attack with advantage, but attacks against him also have advantage until his next turn." },
        4: { name: "Cleave", description: "When reducing a creature to 0 hp, can use a bonus action to make an attack against another creature within 5ft." },
        5: { name: "Cleave", description: "When reducing a creature to 0 hp, can use a bonus action to make an attack against another creature within 5ft." },
        6: { name: "Relentless Endurance", description: "Once per long rest, when dropped to 0 hp but not killed outright, can drop to 1 hp instead." },
        7: { name: "Relentless Endurance", description: "Once per long rest, when dropped to 0 hp but not killed outright, can drop to 1 hp instead." },
        8: { name: "Brutal Critical", description: "Can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack." },
        9: { name: "Brutal Critical", description: "Can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack." },
        10: { name: "Sentinel", description: "When he hits a creature with an opportunity attack, the creature's speed becomes 0 for the rest of the turn. Creatures provoke opportunity attacks from him even if they take the Disengage action." },
        11: { name: "Sentinel", description: "When he hits a creature with an opportunity attack, the creature's speed becomes 0 for the rest of the turn. Creatures provoke opportunity attacks from him even if they take the Disengage action." },
        12: { name: "Retaliation", description: "When he takes damage from a creature that is within 5 feet of him, he can use his reaction to make a melee weapon attack against that creature." }
    },
    magic: { // Dan
        1: { name: "Divine Smite", description: "Can expend magical energy to deal extra radiant damage on a melee attack." },
        2: { name: "Divine Smite", description: "Can expend magical energy to deal extra radiant damage on a melee attack." },
        3: { name: "Divine Smite", description: "Can expend magical energy to deal extra radiant damage on a melee attack." },
        4: { name: "Cure Wounds", description: "Can touch a creature to restore a small amount of health." },
        5: { name: "Cure Wounds", description: "Can touch a creature to restore a small amount of health." },
        6: { name: "Bless", description: "Can bless up to three creatures, allowing them to add a bonus to attack rolls and saving throws." },
        7: { name: "Bless", description: "Can bless up to three creatures, allowing them to add a bonus to attack rolls and saving throws." },
        8: { name: "Aura of Protection", description: "Friendly creatures within 10 feet of him gain a bonus to all saving throws equal to his Charisma modifier." },
        9: { name: "Aura of Protection", description: "Friendly creatures within 10 feet of him gain a bonus to all saving throws equal to his Charisma modifier." },
        10: { name: "Improved Divine Smite", description: "Whenever he hits a creature with a melee weapon, the creature takes an extra 1d8 radiant damage." },
        11: { name: "Improved Divine Smite", description: "Whenever he hits a creature with a melee weapon, the creature takes an extra 1d8 radiant damage." },
        12: { name: "Mass Cure Wounds", description: "Can cast a powerful healing spell that restores health to multiple creatures in an area, cleansing them of disease and poison." }
    },
    whip: { // Eager
        1: { name: "Trip Attack", description: "Can attempt to knock a creature prone with a whip attack." },
        2: { name: "Trip Attack", description: "Can attempt to knock a creature prone with a whip attack." },
        3: { name: "Trip Attack", description: "Can attempt to knock a creature prone with a whip attack." },
        4: { name: "Cunning Action", description: "Can use a bonus action to Dash or Disengage." },
        5: { name: "Cunning Action", description: "Can use a bonus action to Dash or Disengage." },
        6: { name: "Evasion", description: "When subjected to an effect that allows a Dexterity saving throw for half damage, takes no damage on a success and half on a failure." },
        7: { name: "Evasion", description: "When subjected to an effect that allows a Dexterity saving throw for half damage, takes no damage on a success and half on a failure." },
        8: { name: "Uncanny Dodge", description: "When an attacker that he can see hits him with an attack, he can use his reaction to halve the attack's damage against him." },
        9: { name: "Uncanny Dodge", description: "When an attacker that he can see hits him with an attack, he can use his reaction to halve the attack's damage against him." },
        10: { name: "Disarming Attack", description: "When he hits a creature with a weapon attack, he can attempt to force the target to drop one item of his choice that it's holding." },
        11: { name: "Disarming Attack", description: "When he hits a creature with a weapon attack, he can attempt to force the target to drop one item of his choice that it's holding." },
        12: { name: "Reliable Talent", description: "Whenever he makes an ability check that lets him add his proficiency bonus, he can treat a d20 roll of 9 or lower as a 10." }
    },
    spellcaster: { // Ryan
        1: { name: "Magic Missile", description: "Fires three magical darts that automatically hit their targets." },
        2: { name: "Magic Missile", description: "Fires three magical darts that automatically hit their targets." },
        3: { name: "Magic Missile", description: "Fires three magical darts that automatically hit their targets." },
        4: { name: "Shield", description: "Creates a temporary barrier of magical force to block attacks." },
        5: { name: "Shield", description: "Creates a temporary barrier of magical force to block attacks." },
        6: { name: "Scorching Ray", description: "Hurls three rays of fire at one or more targets." },
        7: { name: "Scorching Ray", description: "Hurls three rays of fire at one or more targets." },
        8: { name: "Fireball", description: "A bright streak flashes from his pointing finger to a point he chooses and then blossoms with a low roar into an explosion of flame." },
        9: { name: "Fireball", description: "A bright streak flashes from his pointing finger to a point he chooses and then blossoms with a low roar into an explosion of flame." },
        10: { name: "Counterspell", description: "Can use his reaction to interrupt a creature's spell, potentially causing it to have no effect." },
        11: { name: "Counterspell", description: "Can use his reaction to interrupt a creature's spell, potentially causing it to have no effect." },
        12: { name: "Chain Lightning", description: "Creates a bolt of lightning that arcs through a primary target and then leaps to three other targets of his choice." }
    },
    Gun: { // Roger
        1: { name: "Deadeye Shot", description: "Can take a penalty to his attack roll to add a bonus to his damage roll." },
        2: { name: "Deadeye Shot", description: "Can take a penalty to his attack roll to add a bonus to his damage roll." },
        3: { name: "Deadeye Shot", description: "Can take a penalty to his attack roll to add a bonus to his damage roll." },
        4: { name: "Quick Draw", description: "Gains a bonus to initiative rolls." },
        5: { name: "Quick Draw", description: "Gains a bonus to initiative rolls." },
        6: { name: "Sharpshooter", description: "Attacks at long range don't impose disadvantage, and ranged attacks ignore half and three-quarters cover." },
        7: { name: "Sharpshooter", description: "Attacks at long range don't impose disadvantage, and ranged attacks ignore half and three-quarters cover." },
        8: { name: "Extra Attack", description: "Can attack twice, instead of once, whenever he takes the Attack action on his turn." },
        9: { name: "Extra Attack", description: "Can attack twice, instead of once, whenever he takes the Attack action on his turn." },
        10: { name: "Targeted Shot", description: "Can aim for a specific body part to try and disarm an opponent or slow their movement on a successful hit." },
        11: { name: "Targeted Shot", description: "Can aim for a specific body part to try and disarm an opponent or slow their movement on a successful hit." },
        12: { name: "Lethal Shot", description: "As an action, he can take careful aim. His next successful attack is automatically a critical hit." }
    },
    grotesque: { // Bones
        1: { name: "Rage", description: "Can enter a rage, gaining resistance to physical damage and a bonus to strength-based damage rolls." },
        2: { name: "Rage", description: "Can enter a rage, gaining resistance to physical damage and a bonus to strength-based damage rolls." },
        3: { name: "Rage", description: "Can enter a rage, gaining resistance to physical damage and a bonus to strength-based damage rolls." },
        4: { name: "Unflinching", description: "Has advantage on saving throws against being frightened." },
        5: { name: "Unflinching", description: "Has advantage on saving throws against being frightened." },
        6: { name: "Frenzy", description: "While raging, can make a single melee attack as a bonus action." },
        7: { name: "Frenzy", description: "While raging, can make a single melee attack as a bonus action." },
        8: { name: "Feral Instinct", description: "Has advantage on initiative rolls. Additionally, if surprised, he can still act normally on his first turn if he enters a Rage." },
        9: { name: "Feral Instinct", description: "Has advantage on initiative rolls. Additionally, if surprised, he can still act normally on his first turn if he enters a Rage." },
        10: { name: "Intimidating Presence", description: "Can use his action to frighten someone with his menacing presence. The target must succeed on a Wisdom saving throw or be frightened until the end of his next turn." },
        11: { name: "Intimidating Presence", description: "Can use his action to frighten someone with his menacing presence. The target must succeed on a Wisdom saving throw or be frightened until the end of his next turn." },
        12: { name: "Relentless Rage", description: "If he drops to 0 hit points while raging and doesn't die outright, he can make a difficult Constitution saving throw to drop to 1 hit point instead." }
    },
    deceit: { // The Mole
        1: { name: "Feint", description: "Can use a bonus action to gain advantage on his next attack roll against a creature this turn." },
        2: { name: "Feint", description: "Can use a bonus action to gain advantage on his next attack roll against a creature this turn." },
        3: { name: "Feint", description: "Can use a bonus action to gain advantage on his next attack roll against a creature this turn." },
        4: { name: "Betrayal", description: "If an ally is within 5ft of his target, can deal extra sneak attack damage." },
        5: { name: "Betrayal", description: "If an ally is within 5ft of his target, can deal extra sneak attack damage." },
        6: { name: "Infiltration Expertise", description: "Can create false identities for himself. He has advantage on checks to maintain his cover." },
        7: { name: "Infiltration Expertise", description: "Can create false identities for himself. He has advantage on checks to maintain his cover." },
        8: { name: "Assassinate", description: "Has advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. Any hit he scores against a surprised creature is a critical hit." },
        9: { name: "Assassinate", description: "Has advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. Any hit he scores against a surprised creature is a critical hit." },
        10: { name: "Impostor", description: "Can flawlessly mimic another person's speech, writing, and behavior after spending at least three hours observing them." },
        11: { name: "Impostor", description: "Can flawlessly mimic another person's speech, writing, and behavior after spending at least three hours observing them." },
        12: { name: "Elusive", description: "No attack roll has advantage against him as long as he isn't incapacitated." }
    }
};