// This file contains all of Markop's personal quests.
export const MARKOP_QUESTS = {
    'markop_silver_flame_schism': {
        id: 'markop_silver_flame_schism',
        title: "The Silver Flame's Schism",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "A moderate faction within the Order of the Silver Flame, the 'Templars of the Torch', has secretly reached out to Markop. They fear High Inquisitor Vale's zealotry is corrupting the Order and want Markop's help to expose a dark secret about Vale's past.",
        assignee: "Markop",
        assigneeKey: 'markop',
        status: "available",
        motivation: "Markop, though fallen, still believes in the core tenets of his faith. He sees this as a chance to save the Order from itself, to restore the justice and compassion that Vale has abandoned, and perhaps, find a path to his own redemption.",
        steps: [
            { id: 'step1', title: "Meet the Emissary", status: 'active', description: "Meet with Templar Captain Dorn in a neutral location to receive the details of his request and evidence of Vale's potential corruption." },
            { id: 'step2', title: "The Inquisitor's Archive", status: 'locked', description: "Infiltrate a high-security Silver Flame archive to find proof of Vale's past misdeeds—a record of an innocent life he sacrificed for 'the greater good'." },
            { id: 'step3', title: "Rally the Moderates", status: 'locked', description: "Present the evidence to other high-ranking Templars to build a coalition strong enough to challenge Vale's authority within the Order." },
            { id: 'step4', title: "The Conclave of Judgment", status: 'locked', description: "Force a formal conclave to present the evidence against Vale. The outcome will either reform the Order or see Markop and his allies branded as irredeemable heretics." }
        ]
    },
    'markop_paladins_penance': {
        id: 'markop_paladins_penance',
        title: "A Paladin's Penance",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "Find a community ravaged by the ongoing wars and protect it, helping them rebuild and offering a bastion of hope amidst the chaos.",
        assignee: "Markop",
        assigneeKey: 'markop',
        status: "pending",
        pending_condition: "Pending Activation: The party must travel to a war-torn region on the ground, such as the Mushroom Kingdom heartlands or the Midlands border, and find a community that is not aligned with a major power and is in desperate need of a protector.",
        steps: [
            { id: 'step1', title: "Find a Community in Need", status: 'active', description: "Search the war-torn borderlands for a refugee camp or small village that has been forgotten by the major powers and is beset by bandits or monsters." },
            { id: 'step2', title: "Earn Their Trust", status: 'locked', description: "The people are rightly suspicious of armed strangers. Markop must prove his intentions are noble by defending them from a threat without asking for reward." },
            { id: 'step3', title: "Rebuild a Beacon", status: 'locked', description: "Help the community rebuild a key structure—a watchtower, a well, a wall—that will ensure their long-term safety and survival." },
            { id: 'step4', title: "A Test of Conviction", status: 'locked', description: "A powerful local warlord or monster, seeing the revitalized community as a prize, will launch a major attack. Markop must lead the defense and make a difficult choice to ensure their survival." }
        ]
    },
    'markop_centaurs_burden': {
        id: 'markop_centaurs_burden',
        title: "The Centaur's Burden",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "An old comrade of Markop's, now a high-ranking Justicar in the Oathbound Judges, has issued a warrant for his arrest. Markop must confront his past and decide how to deal with an old friend who is now his judge.",
        assignee: "Markop",
        assigneeKey: 'markop',
        status: "available",
        motivation: "This isn't just about escaping justice; it's about a deep personal conflict. Markop respects his old friend and the law he represents, but he cannot abandon his new companions. He must find a way to reconcile his past with his present.",
        steps: [
            { id: 'step1', title: "The Summons", status: 'active', description: "Receive the formal summons from Justicar Valerius, delivered by a magically-bound courier." },
            { id: 'step2', title: "A Secret Meeting", status: 'locked', description: "Arrange a clandestine meeting with Valerius to plead his case, arguing that his current actions serve a greater, if more chaotic, form of justice." },
            { id: 'step3', title: "Trial by Combat or by Law", status: 'locked', description: "Valerius, bound by his oath, cannot simply let Markop go. He offers a choice: a formal trial in the Citadel of Law or a trial by combat to prove his conviction." }
        ]
    },
    'markop_rakasha_trial': {
        id: 'markop_rakasha_trial',
        title: "The Rakasha's Trial",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "To deepen his bond with the Rakasha and prove his worthiness as Dan's guardian, Chief Thornpaw asks Markop to undergo the 'Trial of the Three Spirits': The Spirit of the Hunt, the Spirit of the Mountain, and the Spirit of the Heart.",
        assignee: "Markop",
        assigneeKey: 'markop',
        status: "pending",
        pending_condition: "Pending Activation: Markop must travel to the Wilderlands and formally request the trial from Chief Thornpaw. This can only be done once the party has disembarked from the Vigilance and established contact with the Rakasha clans.",
        steps: [
            { id: 'step1', title: "The Hunt", status: 'active', description: "Track and non-lethally subdue a legendary Shadow Cat, a creature known for its cunning and near-invisibility." },
            { id: 'step2', title: "The Mountain", status: 'locked', description: "Survive three days and nights alone on the highest peak of the mountains, with no food or supplies, meditating on the balance of the world." },
            { id: 'step3', title: "The Heart", status: 'locked', description: "Confront a spiritual echo of his greatest failure, summoned by the Rakasha shamans, and find a way to forgive himself." }
        ]
    },
    'markop_forging_new_oath': {
        id: 'markop_forging_new_oath',
        title: "Forging a New Oath",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "Markop's old paladin oath feels like a lie. He seeks to forge a new one, dedicated not to an order or a god, but to his companions and the ideals he has discovered on his journey. This requires a pilgrimage to a place of power.",
        assignee: "Markop",
        assigneeKey: 'markop',
        status: "available",
        motivation: "Markop needs a new code to live by, one forged from his own experiences. This is a quest for a new identity, a way to redefine his purpose in a world where his old certainties have been shattered.",
        steps: [
            { id: 'step1', title: "Seek a Sacred Place", status: 'active', description: "Find a location of spiritual or personal significance, a place where a new oath can be sworn. This could be an ancient ruin, a tranquil grove, or the site of a great personal sacrifice." },
            { id: 'step2', title: "The Words of the Oath", status: 'locked', description: "The party must help Markop define the tenets of his new oath. What does he now stand for? What are his new vows?" },
            { id: 'step3', title: "The Ritual", status: 'locked', description: "Perform a ritual at the chosen location to seal the new oath, which will likely attract spiritual guardians or old foes who wish to see him fail." }
        ]
    },
    'markop_fathers_search': {
        id: 'markop_fathers_search',
        title: "The Father's Shadow",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "Markop's father, an Imperial general named Tiberius Judi, was reportedly kidnapped by dragons during a massive explosion at Dragon Mountain. Markop must travel to the ruins of the mountain to search for clues about his father's fate and the true cause of the disaster.",
        assignee: "Markop",
        assigneeKey: 'markop',
        status: "available",
        motivation: "Markop's relationship with his father was strained by Tiberius's unwavering loyalty to the Empire. He wants to find him not just out of familial duty, but to understand the man who chose the Empire over his own family, a choice that has haunted Markop his entire life. The violent nature of his disappearance has only made this need more urgent.",
        steps: [
            { id: 'step1', title: "Investigate Dragon Mountain", status: 'active', description: "Travel to the site of the Dragon Mountain explosion and investigate the ruins for any sign of General Judi or his captors." },
            { id: 'step2', title: "Analyze the Clues", status: 'locked', description: "Analyze the evidence to determine the type of dragon involved and the direction they fled." },
            { id: 'step3', title: "Confront the Truth", status: 'locked', description: "Confront the forces responsible for the explosion and learn the truth behind the kidnapping." }
        ]
    },
    'markop_unlikely_teacher': {
        id: 'markop_unlikely_teacher',
        title: "An Unlikely Teacher",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "Markop is a warrior, not a diplomat. To better lead the Liberated Toads and navigate the world's politics, he seeks out an unusual tutor: a retired Imperial diplomat living in exile.",
        assignee: "Markop",
        assigneeKey: 'markop',
        status: "available",
        motivation: "Markop recognizes his own shortcomings. He knows that strength alone cannot protect the toads forever. He must learn the art of words and negotiation, even if it means learning from a representative of the institution he has come to despise.",
        steps: [
            { id: 'step1', title: "Find the Exile", status: 'active', description: "Locate Ambassador Callista, who was exiled after a political scandal, now living in a quiet town in the neutral territories." },
            { id: 'step2', title: "The First Lesson", status: 'locked', description: "Callista agrees to teach him, but her first lesson is a difficult one: Markop must successfully negotiate a trade deal between two feuding merchant families using only his words." }
        ]
    },
    'markop_dan_vision': {
        id: 'markop_dan_vision',
        title: "The Toad's Vision",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "Dan has a powerful, terrifying vision of a future where one of the party members betrays the others. Markop must help him interpret the vision and decide whether to act on it.",
        assignee: "Markop",
        assigneeKey: 'markop',
        status: "available",
        motivation: "Markop feels a deep responsibility for Dan's well-being, both physical and spiritual. He must guide his student through this disturbing prophecy, balancing the need for caution with the danger of letting fear and suspicion poison the party from within.",
        steps: [
            { id: 'step1', title: "Interpret the Signs", status: 'active', description: "Take Dan's vision to Chief Thornpaw or another seer to help decipher its cryptic symbols and warnings." },
            { id: 'step2', title: "A Test of Trust", status: 'locked', description: "Markop must decide how to handle the information. Does he confront the person from the vision? Does he tell the rest of the party? Or does he keep it secret and watch for signs of betrayal?" }
        ]
    },
    'markop_iron_legion_debt': {
        id: 'markop_iron_legion_debt',
        title: "A Debt of Blood",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "A soldier from the Iron Legion was killed during the party's escape from the Vigilance. Markop feels responsible and seeks to find the soldier's family to offer restitution, an act that could be seen as either honorable or treasonous.",
        assignee: "Markop",
        assigneeKey: 'markop',
        status: "available",
        motivation: "A life was lost because of his actions, and Markop's code demands that he answer for it. This is a personal quest for atonement, regardless of the political consequences.",
        steps: [
            { id: 'step1', title: "Find the Family", status: 'active', description: "Use underworld contacts to learn the identity of the fallen soldier and the location of their family in an Imperial border town." },
            { id: 'step2', title: "The Offering", status: 'locked', description: "Travel to the town in disguise and offer the family a significant payment or perform a great service for them as a way of repaying the debt." },
            { id: 'step3', title: "Escape the Legion", status: 'locked', description: "The Iron Legion will inevitably learn of his presence. Markop must escape the town before he is captured and tried for desertion and murder." }
        ]
    },
    'markop_whispering_blade': {
        id: 'markop_whispering_blade',
        title: "The Whispering Blade",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "Markop's paladin blade was lost. He hears of a legendary Centaur smith who forged blades that could 'whisper' truths to their wielder. He seeks out this smith to forge a new weapon, one suited to his new path.",
        assignee: "Markop",
        assigneeKey: 'markop',
        status: "available",
        motivation: "Markop needs a symbol for his new identity. A new blade, forged not with divine light but with wisdom and experience, represents the paladin he is trying to become.",
        steps: [
            { id: 'step1', title: "Find the Smith", status: 'active', description: "Locate the hidden forge of the ancient Centaur smith, Chiron, in the Old Forests." },
            { id: 'step2', title: "The Heart of the Blade", status: 'locked', description: "Chiron requires a 'heart' for the blade, an ingredient that reflects the wielder's soul. Markop must find something that represents his journey—perhaps a tear from a redeemed soul or a stone from a place of great sacrifice." }
        ]
    },
    'markop_ghosts_of_the_past': {
        id: 'markop_ghosts_of_the_past',
        title: "Ghosts of the Past",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "A vengeful spirit of a criminal Markop justly executed years ago has begun to haunt him, causing nightmares and weakening his resolve. He must find a way to give the spirit peace.",
        assignee: "Markop",
        assigneeKey: 'markop',
        status: "available",
        motivation: "Even a just act can have consequences. Markop seeks to confront the ghost not to destroy it, but to understand its pain and help it move on, as a way of reaffirming his commitment to justice over vengeance.",
        steps: [
            { id: 'step1', title: "The Haunting", status: 'active', description: "Consult with a shaman or priest to understand the nature of the spirit and why it is tied to Markop." },
            { id: 'step2', title: "Unfinished Business", status: 'locked', description: "Discover that the spirit cannot rest because it needs to deliver a final message to a living relative. Markop must find this person and deliver the message." }
        ]
    },
    'markop_library_of_lies': {
        id: 'markop_library_of_lies',
        title: "The Library of Lies",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "Markop learns that the Regal Empire is systematically rewriting historical records to erase its past atrocities. He decides to infiltrate the Imperial Grand Archive to recover a true account of a historical event.",
        assignee: "Markop",
        assigneeKey: 'markop',
        status: "available",
        motivation: "Truth and justice are intertwined. For Markop, allowing the Empire to falsify history is an unforgivable crime against the very concept of justice. He must preserve the truth, no matter the risk.",
        steps: [
            { id: 'step1', title: "The Key", status: 'active', description: "Find a disgraced Imperial historian who knows the location of the true, unaltered historical records within the Archive." },
            { id: 'step2', title: "The Infiltration", status: 'locked', description: "Sneak into the heavily guarded Imperial Grand Archive and navigate its labyrinthine halls." },
            { id: 'step3', title: "The Escape" , status: 'locked', description: "Escape with the 'Codex of Veracity' and deliver it to a neutral party, like the Mages' Guild, for safekeeping." }
        ]
    },
    'markop_shield_of_the_innocent': {
        id: 'markop_shield_of_the_innocent',
        title: "Shield of the Innocent",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "Markop has lost his faith, but not his purpose. He hears of a legendary, unbreakable shield said to appear only to those who wish to protect others. He seeks to prove himself worthy of it.",
        assignee: "Markop",
        assigneeKey: 'markop',
        status: "pending",
        pending_condition: "Pending Activation: The party must first research the legends of the 'Aegis of the Guardian' in a well-stocked library, such as the one in the Mages' Guild Spire or the Royal Archives, to learn of its possible whereabouts.",
        steps: [
            { id: 'step1', title: "The Legend", status: 'active', description: "Research the legend of the 'Aegis of the Guardian' and its last known location." },
            { id: 'step2', title: "The Trial", status: 'locked', description: "The Aegis is not simply found, but earned. Markop must face a trial where he must choose to protect a group of innocents over achieving a great personal victory." }
        ]
    },
    'markop_centaur_heritage': {
        id: 'markop_centaur_heritage',
        title: "A Forgotten Heritage",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "Markop was raised in the Imperial system, alienated from his own people. He decides to seek out the nomadic Centaur clans of the Great Plains to learn about the culture he never knew.",
        assignee: "Markop",
        assigneeKey: 'markop',
        status: "available",
        motivation: "In his search for a new identity, Markop realizes he has neglected an essential part of himself. He wants to understand his own heritage and perhaps find a sense of belonging he never had.",
        steps: [
            { id: 'step1', title: "Find the Clans", status: 'active', description: "The Centaur clans are reclusive. Markop must prove he is not an Imperial agent to be granted an audience." },
            { id: 'step2', title: "The Rite of Welcome", status: 'locked', description: "Participate in the Centaur traditions, learning their songs, their history, and their ways of life." }
        ]
    },
    'markop_broken_truce': {
        id: 'markop_broken_truce',
        title: "The Broken Truce",
        type: 'personal',
        category: 'Personal - Markop',
        objective: "The truce between the Koopa Remnants and the Peach Loyalists is fragile. Markop must act as a neutral mediator to stop a skirmish from escalating into a full-blown battle, preserving the alliance needed to uncover the truth of Peach's death.",
        assignee: "Markop",
        assigneeKey: 'markop',
        status: "available",
        motivation: "Markop believes finding the truth is the only path to real peace for the Mushroom Kingdom. He sees this mediation as his duty, using his newfound diplomatic skills to hold the fragile alliance together.",
        steps: [
            { id: 'step1', title: "The Flashpoint", status: 'active', description: "Race to the site of a skirmish between a Koopa patrol and a Loyalist scouting party." },
            { id: 'step2', title: "The Mediation", status: 'locked', description: "Step between the two forces and negotiate a de-escalation, appealing to both sides' desire for the truth." }
        ]
    },
    'markop_koopa_rescue_assist': {
        id: 'markop_koopa_rescue_assist',
        title: "A Brother in Arms",
        type: 'side',
        category: 'Personal - Markop',
        objective: "Humpik is planning a solo mission to rescue captured Koopa Troopas from the Peach Loyalists. While admiring his loyalty, Markop knows a solo assault is a suicide mission. He must convince Humpik to accept his help and plan a more strategic rescue.",
        assignee: "Markop",
        assigneeKey: 'markop',
        status: "pending",
        pending_condition: "Pending Activation: This quest becomes available when Humpik decides to activate his 'Dwarven Rescue Mission' quest. Markop must then speak with Humpik to convince him to accept help.",
        steps: [
            { id: 'step1', title: "Learn of Humpik's Plan", status: 'active', description: "Humpik is preparing for a solo mission. Markop must approach him to learn the details of his reckless plan." },
            { id: 'step2', title: "A Council of War", status: 'locked', description: "Convince the proud Dwarf warrior that accepting help is a sign of strength, not weakness. Plan a joint rescue mission that utilizes both of their skills." },
            { id: 'step3', title: "Execute the Plan", status: 'locked', description: "Infiltrate the Loyalist prison camp and free the captured Koopas together." }
        ]
    }
};