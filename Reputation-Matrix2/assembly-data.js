
import { WAHBOOK_INTEL_POSTS } from './assembly-intel-data.js';
import { VIRAL_POSTS } from './assembly-viral-data.js';

export const WAHBOOK_POSTS = [
    ...VIRAL_POSTS,
        {
        id: 'bowser_mirror_punch',
        order: 20405,
        characterKey: 'bowser',
        timestamp: 'Just Now',
        content: `Stupid Green T got himself stuck in a mirror! He's just making fish faces at me from the other side! Tried to pull him out, got slashed by a glass monster. I PUNCHED IT. IT SHATTERED. But the mushroom head is still stuck. Useless!`,
        likes: 412,
        comments: [
            { characterKey: 'kamek', text: "A mirror prison? Troublesome magic, Your Viciousness. Do not gaze too long into it." },
            { characterKey: 'hjumpik', text: "King Bowser fought the glass demon! He bled, but he did not step back!" }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'humpik_oracle_rambling',
        order: 20404,
        characterKey: 'hjumpik',
        timestamp: '2 minutes ago',
        content: `The ghost man (Oracle) talks too much. Bathrooms? Orcs? Mirrors having rules? I stopped listening. We left him talking to the dust. We have Toads to save.`,
        likes: 289,
        comments: [
            { characterKey: 'toad_lee', text: "He is mad. Or he knows everything. I cannot tell which is worse." }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'toad_lee_ghost_fight',
        order: 20403,
        characterKey: 'toad_lee',
        timestamp: '5 minutes ago',
        content: `Ambushed by spirits in the Piano Room. "Just Desserts," they said. Bowser... he protected us. He caught a ghost's fist and hit it back. He said "Only I smash toads." I do not know if I should be grateful or terrified.`,
        likes: 560,
        comments: [
            { characterKey: 'bowser', text: "Don't get used to it. You're just cannon fodder I haven't used yet." },
            { characterKey: 'dan', text: "He saved Toadburt too. I saw it." }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'archie_ticket_confusion',
        order: 20402,
        characterKey: 'archie',
        timestamp: '8 minutes ago',
        content: `I'm back. Don't ask where I was. A ghost just handed me a ticket for "Special Guest Smoken Al". Does anyone know what that means? Also, why did everyone just fall through the ceiling?`,
        likes: 675,
        comments: [
            { characterKey: 'remi', text: "Archie! You're alive! We're heading to the courtyard! The lights are going crazy!" },
            { characterKey: 'giggling_pete', text: "A ticket to the show! Hee hee! The Jester is watching!" }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'oracle_the_choice',
        order: 20401,
        characterKey: 'self_reflection_oracle',
        timestamp: '10 minutes ago',
        content: `The players have gathered on the stage. The Spider, The Mirror Terror, The Arcane Wrath. Three demons to purge. They have chosen the path of friendship over the path of the mirror. A sentimental choice. Let us see if it kills them.`,
        likes: 890,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'dan_marching_out',
        order: 20400,
        characterKey: 'dan',
        timestamp: '12 minutes ago',
        content: `We're all together. Me, Archie, Humpik, Lee... even Bowser. We're going to the greenhouse. To the spiders. We're not leaving anyone behind this time.`,
        likes: 445,
        comments: [
            { characterKey: 'markop', text: "Hold fast, Dan. We are coming." }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'steelstorm_operation_retribution',
        order: 30640,
        characterKey: 'colonel_vera_steelstorm',
        timestamp: 'Just Now',
        content: `Operation Swift Retribution is complete. The asset known as 'Speaker L' has been secured. His command structure has been dismantled. Order has been restored to the sector. This is a message to all who would harbor fugitives or defy Imperial law: The Legion is watching.`,
        likes: 1250,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: 'A clean, decisive victory, Colonel. As it should be.' },
            { characterKey: 'toad_lee', text: 'You call this "order"? You ambushed a leaderless group in the dark.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'archie_ironic_justice',
        order: 30639,
        characterKey: 'archie',
        timestamp: '1 minute ago',
        content: `Heard Speaker L got a taste of his own medicine. Got arrested by a bigger, better army right after he arrested me. You truly, truly hate to see it. Oh wait, no you don't. It's hilarious.`,
        likes: 2100,
        comments: [
            { characterKey: 'bones', text: 'Live by the boot, die by the boot.' },
            { characterKey: 'waluigi', text: 'WAH! The irony is so thick you could build a house with it!' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'toad_lee_l_captured',
        order: 30638,
        characterKey: 'toad_lee',
        timestamp: '3 minutes ago',
        content: `They have him. The Iron Legion struck while we were divided. Flashbangs, breaching charges... it was an assault, not a police action. They took Speaker L. The First Cohort is scattered. We are broken.`,
        likes: 980,
        comments: [
            { characterKey: 'dan', text: 'No... not more fighting. Not more of us captured.' },
            { characterKey: 'markop', text: 'This is the consequence of our division. We are picking each other apart, and the Legion is feasting on the scraps.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'first_cohort_survivor_raid',
        order: 30637,
        characterKey: 'first_cohort_member',
        timestamp: '5 minutes ago',
        content: `They came from nowhere! Black armor, red lights! They were silent, efficient... they tore through our lines. They took the Speaker! They took him! We're scattered! We need orders!`,
        likes: 450,
        comments: [
            { characterKey: 'toad_lee', text: 'Rally at the east bridge. Tend to the wounded. Do not engage.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'iron_legion_commando_raid_report',
        order: 30636,
        characterKey: 'iron_legion_commando',
        timestamp: '8 minutes ago',
        content: `Primary target secured. Cohort command structure neutralized. Minimal resistance. Extracting now. For the Empire.`,
        likes: 780,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'broker_l_captured_market',
        order: 30635,
        characterKey: 'the_broker',
        timestamp: '10 minutes ago',
        content: `Market Correction: Asset 'Speaker L' is now in Iron Legion custody. The Liberated Toads faction is in a state of catastrophic leadership failure. Their value has plummeted. Information on Legion interrogation techniques has, once again, become a premium commodity.`,
        likes: 690,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'bowser_reacts_to_raid',
        order: 30634,
        characterKey: 'bowser',
        timestamp: '12 minutes ago',
        content: `GWAHAHA! The little singing toad who arrested the three-eyed weirdo just got arrested by the tin cans! One less annoying voice in the world! This day just keeps getting better!`,
        likes: 840,
        comments: [
            { characterKey: 'kamek', text: 'A most efficient removal of a minor nuisance, Your Viciousness.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'dan_reacts_to_raid',
        order: 30633,
        characterKey: 'dan',
        timestamp: '15 minutes ago',
        content: `No... they took him? The Legion... they just... took him? This is a nightmare. We were just fighting each other, and they swept in. This is all our fault.`,
        likes: 510,
        comments: [
            { characterKey: 'ryan', text: 'Division is a weakness, Dan. The Legion is adept at exploiting weakness.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'fawful_reacts_to_raid',
        order: 30632,
        characterKey: 'fawful',
        timestamp: '20 minutes ago',
        content: `I HAVE THE MERRIMENT OF A THOUSAND GIGGLING BEANS! The singing toad is caged! The robot men have him! My enemies are eating my other enemies! It is a delicious casserole of self-destruction!`,
        likes: 788,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'remi_reacts_to_raid',
        order: 30631,
        characterKey: 'remi',
        timestamp: '22 minutes ago',
        content: `Wait, the leader of the toad army that arrested Archie just got arrested by the other army? So... are we supposed to be happy about this? I'm so lost.`,
        likes: 610,
        comments: [
            { characterKey: 'bones', text: 'Just be glad it wasn\'t you, kid. That\'s the only victory that matters.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'humpik_reacts_to_raid',
        order: 30630,
        characterKey: 'hjumpik',
        timestamp: '25 minutes ago',
        content: `The metal men took the loud singing toad? Good. One less person to yell at Archie.`,
        likes: 730,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'kamek_analyzes_raid',
        order: 30629,
        characterKey: 'kamek',
        timestamp: '30 minutes ago',
        content: `The Iron Legion used the chaos of Miser's escape as cover for a decapitation strike. A classic maneuver. Efficient. The 'Liberated Toads' are now rudderless and vulnerable. A most interesting development.`,
        likes: 560,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'roger_analyzes_raid',
        order: 30628,
        characterKey: 'roger',
        timestamp: '35 minutes ago',
        content: `Tactical Analysis: The Iron Legion utilized a coordinated, multi-point insertion under the cover of the ongoing internal conflict. Superior equipment, discipline, and intelligence. Our faction's operational security is non-existent. This was an inevitable outcome.`,
        likes: 420,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },

    {
        id: 'toadette_reacts_to_raid',
        order: 30626,
        characterKey: 'captain_toadette',
        timestamp: '45 minutes ago',
        content: `A rabble of former slaves tried to play soldier and were swiftly dismantled by a real army. Shocking. This is what happens when you lack true leadership and conviction.`,
        likes: 530,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'generic_toad_hears_raid',
        order: 30625,
        characterKey: 'generic_toad',
        timestamp: '50 minutes ago',
        content: `I heard shouting and then... a big boom! From the Cohort's camp! What's going on now?! I thought they were the ones in charge!`,
        likes: 215,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'krool_laughs_at_legion',
        order: 30624,
        characterKey: 'king_k_rool',
        timestamp: '1 hour ago',
        content: `Keheheh! The tin soldiers finally did something interesting! Snatching up the leader of a mushroom mob while everyone is distracted. A respectable bit of villainy! I approve!`,
        likes: 610,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'syrup_missed_opportunity',
        order: 30623,
        characterKey: 'captain_syrup',
        timestamp: '1 hour ago',
        content: `The Legion raided the toad camp? And I missed it? Damn. There was probably some good loot to be had in the confusion.`,
        likes: 450,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'wario_business_opportunity',
        order: 30622,
        characterKey: 'wario',
        timestamp: '1 hour ago',
        content: `The Legion just captured a high-value political prisoner? Excellent! Information about his location and interrogation schedule is a sellable commodity! Wario smells profit!`,
        likes: 580,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'the_mole_silent_satisfaction',
        order: 30621,
        characterKey: 'the_mole',
        timestamp: '2 hours ago',
        content: `Justice is served. Order is restored. My part is done.`,
        likes: 510,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'jerry_the_spy_mission_complete',
        order: 30620,
        characterKey: 'jerry_the_spy',
        timestamp: '2 hours ago',
        content: `Report: Phase one was a success. The target's escape sowed maximum chaos within the enemy ranks, leaving their command structure vulnerable. Phase two is now complete. A good day's work for the Empire.`,
        likes: 600,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'penny_connects_dots',
        order: 30619,
        characterKey: 'detective_penny',
        timestamp: '2 hours ago',
        content: `Case Notes: Archie escapes. His liberator is an Iron Legion spy. The Cohort is thrown into disarray. The Iron Legion immediately launches a raid and captures the Cohort's leader. This wasn't two events. This was one, perfectly executed decapitation strike. The Legion is more cunning than I thought.`,
        likes: 790,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'midlands_citizen_fear',
        order: 30618,
        characterKey: 'midlands_citizen',
        timestamp: '3 hours ago',
        content: `First a fire at the manor, now a full-blown military raid on the toad camp nearby? The war is coming closer. This isn't safe anymore.`,
        likes: 430,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'generic_koopa_cheers',
        order: 30617,
        characterKey: 'koopa_troop',
        timestamp: '3 hours ago',
        content: `The tin cans smashed the mushroom fanatics! HA! Less enemies for King Bowser to worry about!`,
        likes: 350,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },

    {
        id: 'dk_confused',
        order: 30615,
        characterKey: 'donkey_kong',
        timestamp: '4 hours ago',
        content: `So... the little toads were fighting the other little toads... and then the robot guys came and took the loud one away? This is too complicated. I need a banana.`,
        likes: 1400,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'cranky_on_strategy',
        order: 30614,
        characterKey: 'cranky_kong',
        timestamp: '5 hours ago',
        content: `See? That's proper strategy! While the mushrooms were busy singing and pointing fingers, the metalheads came in and cleaned house! Back in my day, we called that a 'barrel roll'! Heh! Get it?`,
        likes: 720,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'diddy_on_legion',
        order: 30613,
        characterKey: 'diddy_kong',
        timestamp: '5 hours ago',
        content: `The Iron Legion is playing a different game than everyone else. They're not just fighting, they're playing chess. And they just took a major piece off the board.`,
        likes: 680,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'cybernetic_raid_analysis',
        order: 30612,
        characterKey: 'cybernetic_collectives',
        timestamp: '6 hours ago',
        content: `[ANALYSIS]: Iron Legion utilized a 94% optimal window of opportunity created by internal enemy conflict. Decapitation strike resulted in the successful acquisition of a hostile command asset. A tactically sound and efficient operation.`,
        likes: 740,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'kivotos_millennium_raid',
        order: 30611,
        characterKey: 'millennium_science_school',
        timestamp: '6 hours ago',
        content: `[Seminar Leak]: The Iron Legion's raid was a textbook example of asymmetric warfare. Their use of flashbangs to disrupt command and control before the main assault is a tactic we should analyze for our own urban combat simulations.`,
        likes: 690,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'warhammer_empire_raid',
        order: 30610,
        characterKey: 'the_empire',
        timestamp: '7 hours ago',
        content: `A swift, brutal strike against a disorganized rabble. An acceptable, if minor, victory for the forces of Order. Let this be a lesson to all greenskins and malcontents.`,
        likes: 810,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'pokemon_trainer_raid',
        order: 30609,
        characterKey: 'trainer_guild',
        timestamp: '7 hours ago',
        content: `Wait, so they had a battle? Who won? Did anyone's Pokémon evolve?`,
        likes: 790,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'vale_on_raid',
        order: 30608,
        characterKey: 'high_inquisitor_vale',
        timestamp: '8 hours ago',
        content: `The Legion's secular forces have detained a heretic. Good. One less obstacle to the Flame. But their methods are without faith. True justice can only be delivered by the righteous.`,
        likes: 540,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'oracle_observes_raid',
        order: 30607,
        characterKey: 'self_reflection_oracle',
        timestamp: '8 hours ago',
        content: `The iron thread pulls tight, catching the loudest songbird in its snare. A predictable outcome. The pattern shifts once more.`,
        likes: 920,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'markop_hears_raid',
        order: 30606,
        characterKey: 'markop',
        timestamp: '9 hours ago',
        content: `An explosion. From the direction of the Cohort's camp. Not thunder. Gunfire. They are under attack.`,
        likes: 490,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'archie_returns_to_chaos',
        order: 30545,
        characterKey: 'archie',
        timestamp: 'Just Now',
        content: `Back. The war isn't over. But at least I'm not in a cage anymore.`,
        likes: 1980,
        comments: [
            { characterKey: 'speaker_l', text: 'MISER! YOU WILL ANSWER FOR THIS! NOWHERE TO RUN!' },
            { characterKey: 'markop', text: 'Archie? By the light, are you alright? Where have you been?' },
            { characterKey: 'waluigi', text: 'WAH! What an entrance! 10/10 for dramatic timing!' },
            { characterKey: 'archie', text: 'You wouldn\'t believe me if I told you.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'speaker_l_humiliation',
        order: 30544,
        characterKey: 'speaker_l',
        timestamp: '1 minute ago',
        content: `ARCHIE MISER HAS ESCAPED CUSTODY! A toad named JERRY is responsible! He is a traitor to the Cohort and an agent of the Iron Legion! Find them both! The Mandate WILL be enforced!`,
        likes: 810,
        comments: [
            { characterKey: 'toad_lee', text: 'Another traitor... By the Vow, this treachery will not stand.' },
            { characterKey: 'archie', text: 'Sounds like you have an internal security problem.' },
            { characterKey: 'colonel_vera_steelstorm', text: 'Your internal security problem is our operational success. Do try to keep up.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'rakasha_relay_complete',
        order: 30543,
        characterKey: 'rakasha_spirit_walker',
        timestamp: '2 minutes ago',
        content: `The client has been relayed. The balance is maintained. The debt is paid.`,
        likes: 750,
        comments: [
            { characterKey: 'janna_brightspark', text: 'Teleportation with no arcane residue?! What kind of transport is this?! I need to study it!' },
            { characterKey: 'archmage_theron', text: 'It is Rakasha spirit-walking, Janna. It is not for you to "study." Leave them be.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'mindflayer_ponders_archie',
        order: 30542,
        characterKey: 'mindflayer_entity',
        timestamp: '5 minutes ago',
        content: `[Psionic Echo]: An anomaly. Un-tethered. Interesting... its chaotic neural pathways resonate with the Far Realm. A potential asset... or a delicious meal.`,
        likes: 999,
        comments: [
            { characterKey: 'cybernetic_collectives', text: '[ANALYSIS]: Psionic broadcast detected. Non-standard origin. Intriguing.' },
            { characterKey: 'high_inquisitor_vale', text: 'Abominations from beyond the veil. They must be purged.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'archie_about_xo',
        order: 30541,
        characterKey: 'archie',
        timestamp: '8 minutes ago',
        content: `Saw X.O. She's not coming back. I left her things. A debt paid, I guess.`,
        likes: 1340,
        comments: [
            { characterKey: 'dan', text: 'What do you mean? Archie, what did you see?' },
            { characterKey: 'markop', text: 'May her soul find peace, despite her actions.' },
            { characterKey: 'the_broker', text: 'Asset "X.O." permanently off the board. The market adjusts.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'iron_legion_failed_capture',
        order: 30540,
        characterKey: 'iron_legion_commando',
        timestamp: '10 minutes ago',
        content: `Target Miser has evaded containment. Repeat, target has evaded containment. Agent 'Jerry' has been... compromised. Deploying mech unit for perimeter sweep.`,
        likes: 640,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: 'Unacceptable. Find him.' },
            { characterKey: 'colonel_vera_steelstorm', text: 'Failure. Agent Jerry will report for debriefing and disciplinary action.' },
            { characterKey: 'king_k_rool', text: 'Keheheh! Even with all your fancy toys, you couldn\'t catch one three-eyed freak? Pathetic.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'jerry_the_spy_report',
        order: 30539,
        characterKey: 'jerry_the_spy',
        timestamp: '12 minutes ago',
        content: `He's gone. Used an invisibility potion and slipped the cordon. The mech is too slow. He's smarter than the file suggested.`,
        likes: 550,
        comments: [
            { characterKey: 'colonel_vera_steelstorm', text: 'Acknowledged. Your assessment has been noted in your performance review.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'toad_lee_disgusted',
        order: 30538,
        characterKey: 'toad_lee',
        timestamp: '15 minutes ago',
        content: `Two traitors. Two. In as many days. The Cohort is compromised. Speaker L's theatrical siege has turned into a humiliating failure. We are a joke.`,
        likes: 880,
        comments: [
            { characterKey: 'speaker_l', text: 'This is not failure, it is a necessary purge! We will be stronger for it!' },
            { characterKey: 'toad_lee', text: 'We are weaker than we have ever been.' },
            { characterKey: 'markop', text: 'He is right, Speaker. Our house is divided against itself.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'cohort_grunt_confusion',
        order: 30537,
        characterKey: 'first_cohort_member',
        timestamp: '16 minutes ago',
        content: `Wait, so Jerry was a spy too? I thought he was one of us! Who are we even fighting anymore?`,
        likes: 310,
        comments: [
            { characterKey: 'bones', text: 'Welcome to the real world, kid. The answer is: everyone.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'fawful_laughs_at_cohort',
        order: 30536,
        characterKey: 'fawful',
        timestamp: '18 minutes ago',
        content: `I HAVE A BELLY OF LAUGHTER! The singing toads had their prisoner, and he was stolen by ANOTHER toad who was a secret robot man! It is a comedy of fools, a circus of incompetence! My minions have more loyalty in their pinky claws!`,
        likes: 820,
        comments: [
            { characterKey: 'captain_toadette', text: 'Keep laughing. Your time is coming.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'waluigi_jealous',
        order: 30535,
        characterKey: 'waluigi',
        timestamp: '20 minutes ago',
        content: `WAH?! Dimensional travel? Mind-eating squids? He got to do all the fun stuff while I was stuck listening to that terrible marching band! It's not fair! I am the star of this show!`,
        likes: 950,
        comments: [
            { characterKey: 'bowser', text: 'You call getting your butt handed to you by ghosts "fun stuff"?' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'broker_intel_spike',
        order: 30534,
        characterKey: 'the_broker',
        timestamp: '22 minutes ago',
        content: `Market Correction: Asset 'Archie Miser' has re-entered the board. His value has increased dramatically. Information on Rakasha Relays, Mindflayer Colonies, and the operational security of the Liberated Toads is now trading at an unprecedented premium. What a productive day.`,
        likes: 780,
        comments: [
            { characterKey: 'lord_crimson', text: 'Send me your catalogue.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'markop_tries_to_understand',
        order: 30533,
        characterKey: 'markop',
        timestamp: '25 minutes ago',
        content: `He's back. But where did he go? He vanished from a Legion trap and reappeared in a locked room. There are forces at play here that defy our understanding.`,
        likes: 450,
        comments: [
            { characterKey: 'ryan', text: 'The energy signature was not arcane. It was... something else. Something ancient.' },
            { characterKey: 'self_reflection_oracle', text: 'Some doors lead to other rooms. Some lead to other worlds.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'bowser_impressed',
        order: 30532,
        characterKey: 'bowser',
        timestamp: '28 minutes ago',
        content: `GWAHAHA! The three-eyed weirdo got captured by the mushrooms, betrayed by a robot, trapped by the tin cans, and STILL got away! I'm not even mad, that's amazing!`,
        likes: 910,
        comments: [
            { characterKey: 'kamek', text: 'His capacity for survival is... noteworthy, Your Viciousness.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'archie_loots_armory',
        order: 30531,
        characterKey: 'archie',
        timestamp: '30 minutes ago',
        content: `Found a nice little armory. Figured I'd help myself. You never know when you'll need nine quivers.`,
        likes: 1250,
        comments: [
            { characterKey: 'roger', text: 'Nine? That is an inefficient number of quivers. Three is the optimal number for tactical deployment.' },
            { characterKey: 'remi', text: 'You found NINE quivers and didn\'t bring me one?!' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'remi_confused_again',
        order: 30530,
        characterKey: 'remi',
        timestamp: '32 minutes ago',
        content: `So... Archie was arrested, but then he escaped because the person who was helping arrest him was a different traitor working for the other guys who were also trying to arrest him? And then he went to a brain dimension? Am I getting this right?`,
        likes: 888,
        comments: [
            { characterKey: 'markop', text: 'That is... a surprisingly accurate summary, yes.' },
            { characterKey: 'waluigi', text: 'WAH! It\'s called a plot twist! Try to keep up!' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'dan_more_betrayal',
        order: 30529,
        characterKey: 'dan',
        timestamp: '35 minutes ago',
        content: `Another one? Another traitor was living with us? How many more are there? Can we trust anyone?`,
        likes: 512,
        comments: [
            { characterKey: 'toad_lee', text: 'Trust is earned, Dan. And re-earned. We will be more vigilant.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'bones_not_surprised',
        order: 30528,
        characterKey: 'bones',
        timestamp: '38 minutes ago',
        content: `Of course there was another spy. There's always another spy. The only person you can trust is yourself. And even then, watch your back.`,
        likes: 670,
        comments: [
            { characterKey: 'skull_cap_murphy', text: 'This guy gets it.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },

    {
        id: 'ryan_dimensional_tear',
        order: 30526,
        characterKey: 'ryan',
        timestamp: '42 minutes ago',
        content: `There was a spike. A brief, violent tear in the fabric of this space. Not arcane, not divine. It felt... ancient and biological. Like something very old opened a door and then closed it.`,
        likes: 530,
        comments: [
            { characterKey: 'janna_brightspark', text: 'Biological teleportation?! A psionic rift?! The implications are STAGGERING!' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'humpik_so_confused',
        order: 30525,
        characterKey: 'hjumpik',
        timestamp: '45 minutes ago',
        content: `So... the little green toad was a bad guy? But he helped the other bad guys trap Archie? And then Archie disappeared? My head hurts. I am going to find something to smash.`,
        likes: 680,
        comments: [
            { characterKey: 'bowser', text: 'Start with the mirrors, Humpik. I don\'t like the way they look at us.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'hag_enraged',
        order: 30524,
        characterKey: 'hag_of_the_fen',
        timestamp: '48 minutes ago',
        content: `He ESCAPED?! From a locked room? After I let the Speaker in? IMPOSSIBLE! That three-eyed rat will pay for this insult!`,
        likes: 310,
        comments: [
            { characterKey: 'fawful', text: 'Your security has the integrity of a wet napkin!' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'speaker_l_finds_empty_room',
        order: 30523,
        characterKey: 'speaker_l',
        timestamp: '50 minutes ago',
        content: `The room is empty. The spy is gone. The prisoner is gone. UNACCEPTABLE.`,
        likes: 620,
        comments: [
            { characterKey: 'archie', text: 'Maybe you should have knocked?' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'jerry_the_spy_slips_away',
        order: 30522,
        characterKey: 'jerry_the_spy',
        timestamp: '52 minutes ago',
        content: `The hag and the Speaker are distracted. Time to go. The Legion will be pleased with the intel, even if the primary asset escaped. Mission accomplished.`,
        likes: 410,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'archie_slams_door_on_L',
        order: 30521,
        characterKey: 'archie',
        timestamp: '55 minutes ago',
        content: `Sorry, Speaker. No time for a trial. Maybe later! *SLAM*`,
        likes: 1100,
        comments: [
            { characterKey: 'speaker_l', text: 'Open this door, Miser! You are only delaying the inevitable!' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'speaker_l_finds_archie',
        order: 30520,
        characterKey: 'speaker_l',
        timestamp: '58 minutes ago',
        content: `Disobedience. Escape. Trespassing. Three crimes in as many hours, Archie Miser. Do you have a final statement before I burn you alive?`,
        likes: 730,
        comments: [
            { characterKey: 'archie', text: 'Just that this looks bad, and I have a very good reason to fireball your face.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'hag_finds_empty_room',
        order: 30519,
        characterKey: 'hag_of_the_fen',
        timestamp: '1 hour ago',
        content: `He's GONE?! He killed the spider and escaped the locked room?! And he left my Lightbringer staff?! What kind of fool is this?!`,
        likes: 350,
        comments: [
            { characterKey: 'jerry_the_spy', text: 'A very resourceful one. My apologies for the inconvenience.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'jerry_leads_to_toads',
        order: 30518,
        characterKey: 'jerry_the_spy',
        timestamp: '1 hour ago',
        content: `Alright, Miser. Your friends are this way. Try to keep up.`,
        likes: 290,
        comments: [],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'archie_finds_lario_chest',
        order: 30517,
        characterKey: 'archie',
        timestamp: '1 hour ago',
        content: `A chest labeled LARIO? Unlocked? Full of tools? Don't mind if I do...`,
        likes: 980,
        comments: [
            { characterKey: 'lario', text: 'HEY! THOSE ARE MY GOOD WRENCHES! I\'LL GET YOU FOR THIS, YOU THREE-EYED THIEF!' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'hag_and_toad_deal',
        order: 30516,
        characterKey: 'hag_of_the_fen',
        timestamp: '1 hour ago',
        content: `The little toad brought me the 'thing'. As agreed. The prisoner is now his problem.`,
        likes: 240,
        comments: [
            { characterKey: 'speaker_l', text: 'A pleasure doing business with you.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'archie_kills_spider',
        order: 30515,
        characterKey: 'archie',
        timestamp: '1 hour ago',
        content: `Spider problem solved. Now, about this locked door...`,
        likes: 760,
        comments: [
            { characterKey: 'humpik', text: 'Good. Humpik no like spiders.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'hag_lightbringer_pact',
        order: 30514,
        characterKey: 'hag_of_the_fen',
        timestamp: '1 hour ago',
        content: `Ash and ember, bone and spark— Quarterstaff, awake from dark… Take it. It will light your way. For a price.`,
        likes: 430,
        comments: [
            { characterKey: 'archie', text: 'Not interested.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'jerry_rust_monster_distraction',
        order: 30513,
        characterKey: 'jerry_the_spy',
        timestamp: '2 hours ago',
        content: `I'll distract. You stay alive.`,
        likes: 310,
        comments: [
            { characterKey: 'archie', text: 'Sounds like a plan.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'the_mole_reports_archie_escape',
        order: 30512,
        characterKey: 'the_mole',
        timestamp: '2 hours ago',
        content: `Miser is out of his cell. The key was taken. He is proceeding to the armory.`,
        likes: 480,
        comments: [
            { characterKey: 'speaker_l', text: 'How?! I had the only key!' }
        ],
        rumorId: 'archie_third_eye_escape'
    },
    {
        id: 'jerry_frees_archie',
        order: 30511,
        characterKey: 'jerry_the_spy',
        timestamp: '2 hours ago',
        content: `You can call me Jerry. Now let's go.`,
        likes: 390,
        comments: [
            { characterKey: 'archie', text: 'You\'re not the toad I know.' }
        ],
        rumorId: 'archie_third_eye_escape'
    },    
    {
        id: 'bowser_hungry_memory',
        order: 30490,
        characterKey: 'bowser',
        timestamp: 'Just Now',
        content: `Whatever's in this place—it isn't just ghosts. It's memory, and it's hungry.`,
        likes: 980,
        comments: [
            { characterKey: 'kamek', text: 'A keen observation, Your Viciousness. Be wary of places that remember.' },
            { characterKey: 'self_reflection_oracle', text: 'A king of beasts understands the nature of the hunt.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'hjumpik_rescue_archie_now',
        order: 30489,
        characterKey: 'hjumpik',
        timestamp: '1 minute ago',
        content: `They're taking Archie. The little toads have him. This is not right. We go back. We get him.`,
        likes: 710,
        comments: [
            { characterKey: 'toad_lee', text: 'Hjumpik, do not engage the Cohort. I am trying to resolve this peacefully. Do not start a war.' },
            { characterKey: 'bowser', text: 'He made his choice, Humpik. Let him lie in it for a bit.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'bowser_sees_archie_captured_window',
        order: 30488,
        characterKey: 'bowser',
        timestamp: '3 minutes ago',
        content: `He's in their hands now. The little fools actually caught him. Dragging him out into the rain.`,
        likes: 850,
        comments: [
            { characterKey: 'kamek', text: 'An unfortunate but predictable outcome for one who relies on chaos.' },
            { characterKey: 'fawful', text: 'I HAVE THE SMALLEST OF CHORTLES! The three-eyed fool is caged by mushrooms!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'hjumpik_mirror_monster_emerges',
        order: 30487,
        characterKey: 'hjumpik',
        timestamp: '4 minutes ago',
        content: `THE MIRROR IS ALIVE! IT'S ALIVE AND IT'S COMING OUT! LIGHTS ARE GONE!`,
        likes: 750,
        comments: [
            { characterKey: 'markop', text: 'Hjumpik, report! What is your status?! What is happening?!' },
            { characterKey: 'ryan', text: 'The dimensional barrier must have shattered! Get out of there!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'speaker_l_arrest_report',
        order: 30486,
        characterKey: 'speaker_l',
        timestamp: '5 minutes ago',
        content: `Target apprehended. Archie Miser is in Cohort custody. The situation is contained. Justice will be served.`,
        likes: 980,
        comments: [
            { characterKey: 'toad_lee', text: 'Contained? Speaker, what happened in there? My patrol is reporting screams and a power failure.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'archie_surrenders_now',
        order: 30485,
        characterKey: 'archie',
        timestamp: '6 minutes ago',
        content: `Fine. I surrender.`,
        likes: 1570,
        comments: [
            { characterKey: 'speaker_l', text: 'Wise.' },
            { characterKey: 'hjumpik', text: 'Archie, no!' },
            { characterKey: 'general_marcus_ironhand', text: 'A pity. Our cells were waiting.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'oracle_stops_fireball',
        order: 30484,
        characterKey: 'self_reflection_oracle',
        timestamp: '7 minutes ago',
        content: `Not yet.`,
        likes: 1212,
        comments: [
            { characterKey: 'archie', text: 'Get out of my head!' },
            { characterKey: 'kamek', text: 'Such effortless displays of power are always the most terrifying.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'speaker_l_wrong_answer',
        order: 30483,
        characterKey: 'speaker_l',
        timestamp: '8 minutes ago',
        content: `Wrong answer.`,
        likes: 740,
        comments: [
            { characterKey: 'the_mole', text: '*whistles*' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'archie_power_struggle',
        order: 30482,
        characterKey: 'archie',
        timestamp: '9 minutes ago',
        content: `You’re my captain. I’m your leader. You answer to me.`,
        likes: 890,
        comments: [
            { characterKey: 'speaker_l', text: 'An interesting interpretation of the chain of command.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'archie_eats',
        order: 30481,
        characterKey: 'archie',
        timestamp: '10 minutes ago',
        content: `Eat.`,
        likes: 999,
        comments: [
            { characterKey: 'high_inquisitor_vale', text: 'Unspeakable heresy! This creature is a font of pure evil!' },
            { characterKey: 'lord_crimson', text: '...Fascinating. A crude but effective method of battlefield apotheosis.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'toadsburt_is_killed',
        order: 30480,
        characterKey: 'generic_toad',
        timestamp: '11 minutes ago',
        content: `That's not you... you're not Archie... It's a demon! I can see it in the mirror! A DEMON! AGH- *crack*`,
        likes: 450,
        comments: [
            { characterKey: 'detective_penny', text: 'Witness eliminated. Another loose end. This Miser is sloppy.' },
            { characterKey: 'hjumpik', text: 'Archie... what did you do?' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'archie_cauterizes_wound_now',
        order: 30479,
        characterKey: 'archie',
        timestamp: '12 minutes ago',
        content: `Hold him. This is going to hurt.`,
        likes: 810,
        comments: [
            { characterKey: 'dewdrop', text: 'Cauterizing a magical wound with a heated axe?! That\'s barbaric! You need a real medic!' },
            { characterKey: 'roger', text: 'A crude but effective field measure to stop exsanguination. I approve.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'bowser_fights_mirror_creature',
        order: 30478,
        characterKey: 'bowser',
        timestamp: '14 minutes ago',
        content: `GWAHAHA! A monster made of glass?! This house just keeps getting better! Tasted my fist, you walking window!`,
        likes: 760,
        comments: [
            { characterKey: 'hjumpik', text: 'King Bowser! It came out of the mirror!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'markop_move_or_die',
        order: 30477,
        characterKey: 'markop',
        timestamp: '15 minutes ago',
        content: `Bowser and Green T have fled. Remi is lost in their ranks. The Cohort is sealing the manor, and the house itself is birthing wraiths. We move now, before containment becomes execution.`,
        likes: 310,
        comments: [
            { characterKey: 'toad_lee', text: 'Where are you? I am trying to de-escalate this, but Speaker L is not listening to reason.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'bowser_escapes_drumline',
        order: 30476,
        characterKey: 'bowser',
        timestamp: '16 minutes ago',
        content: `Enough of this marching band nonsense. I'm not getting trapped in a haunted house by a bunch of singing mushrooms. Anyone who wants to live is coming with me.`,
        likes: 580,
        comments: [
            { characterKey: 'kamek', text: 'A wise tactical withdrawal, Your Viciousness.' },
            { characterKey: 'green_t', text: 'I\'m right behind you!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'rodger_rangers_lost_now',
        order: 30475,
        characterKey: 'roger',
        timestamp: '18 minutes ago',
        content: `SITREP: My rangers responded to the fire, assuming hostile action. We have made contact with the First Cohort's main force. The situation is... fluid. Half my men are unaccounted for inside the manor. We are transitioning from a rescue to a search operation.`,
        likes: 290,
        comments: [
            { characterKey: 'toad_lee', text: 'Roger, hold your position. Do not engage. Repeat, do not engage.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'green_t_wraiths_now',
        order: 30474,
        characterKey: 'green_t',
        timestamp: '20 minutes ago',
        content: `Okay, new rule: never get trapped in a haunted house that's being besieged by a toad army. Especially when the house starts spawning lightning ghosts. Time for Plan B.`,
        likes: 412,
        comments: [
            { characterKey: 'waluigi', text: 'WAH! Lightning ghosts! My one regret is not being there to see it!' },
            { characterKey: 'ryan', text: 'These are not simple spirits. They are echoes of pain, given form. Be careful.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'speaker_l_containment_protocol_now',
        order: 30473,
        characterKey: 'speaker_l',
        timestamp: '22 minutes ago',
        content: `Containment protocols are in effect. All exits of Raventree Manor are being sealed. Those named in the Mandate will be brought to justice. The rest will stand aside. This is not a negotiation. This is order being restored.`,
        likes: 620,
        comments: [
            { characterKey: 'first_cohort_member', text: 'For the Cohort! For the Vow!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'remi_joins_the_march_now',
        order: 30472,
        characterKey: 'remi',
        timestamp: '24 minutes ago',
        content: `The drums... so loud. I have a drum now. Marching. I think... I'm marching with them. It's easier than running.`,
        likes: 550,
        comments: [
            { characterKey: 'markop', text: 'Remi, break formation! Get back to us!' },
            { characterKey: 'dan', text: 'Remi? No...' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'waluigi_ceremony_with_teeth_now',
        order: 30471,
        characterKey: 'waluigi',
        timestamp: '25 minutes ago',
        content: `WAH! A singing army! A musical invasion! They're not soldiers, they're a ceremony with teeth! It's the most gloriously over-the-top thing I've ever seen! I almost feel outdone!`,
        likes: 899,
        comments: [
            { characterKey: 'fawful', text: 'THEIR SINGING LACKS THE FURY OF A TRUE VILLAINOUS HYMN!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'speaker_l_song_now',
        order: 30470,
        characterKey: 'speaker_l',
        timestamp: '28 minutes ago',
        content: `By vote and vow, by quill and seal, We bring the order none can steal! Marching forth, the Cohort’s call— To guard the living, and judge the fall!`,
        likes: 710,
        comments: [
            { characterKey: 'bones', text: 'I think I\'m gonna be sick.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'markop_sees_cohort',
        order: 30469,
        characterKey: 'markop',
        timestamp: '30 minutes ago',
        content: `They're here. Hundreds of them. The Cohort has arrived. This isn't a patrol. It's an army.`,
        likes: 680,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'hjumpik_finds_them_now',
        order: 30468,
        characterKey: 'hjumpik',
        timestamp: '32 minutes ago',
        content: `Found them. It's bad. Eager is down, Dan is... not right. And the little toads are marching outside. We are trapped.`,
        likes: 620,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'waluigi_heals_dan',
        order: 30467,
        characterKey: 'waluigi',
        timestamp: '35 minutes ago',
        content: `Found the one-armed toad trembling by a broken window. WAH! So pathetic! I healed him a little. Can't have my audience dying of fright before the final act!`,
        likes: 510,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'bowser_smashes_mirror',
        order: 30466,
        characterKey: 'bowser',
        timestamp: '38 minutes ago',
        content: `GREEN T GOT EATEN BY A MIRROR! So I punched it! A door opened! This house is weird, but it respects brute force! GWAHAHA!`,
        likes: 780,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'markop_green_t_taken',
        order: 30465,
        characterKey: 'markop',
        timestamp: '40 minutes ago',
        content: `Green T has been taken. Something pulled him into a mirror. The house... it's fighting back. This is no longer a simple haunting.`,
        likes: 540,
        comments: [
            { characterKey: 'the_broker', text: 'Asset "Green T" is temporarily off the board. Fascinating. His information futures are now on hold.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'toad_lee_solarium_plan',
        order: 30464,
        characterKey: 'toad_lee',
        timestamp: '42 minutes ago',
        content: `We go to the solarium. We break the attic and catch them before they fall. It is the shorter, more direct route. We move now.`,
        likes: 410,
        comments: [
            { characterKey: 'hjumpik', text: 'But the mirror stair is right there!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'bowser_pockets_silver',
        order: 30463,
        characterKey: 'bowser',
        timestamp: '45 minutes ago',
        content: `Found a secret room. Looked comfy. Found a bag of silver. It's mine now. Finders keepers, losers weepers!`,
        likes: 620,
        comments: [
            { characterKey: 'wario', text: 'That\'s the spirit! Always secure the loot!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'hjumpik_falls_down',
        order: 30462,
        characterKey: 'hjumpik',
        timestamp: '48 minutes ago',
        content: `The rope held. The joist did not. I have fallen. Am okay. This room has a very clean mirror. I do not trust it.`,
        likes: 515,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'toad_lee_finds_passage',
        order: 30461,
        characterKey: 'toad_lee',
        timestamp: '50 minutes ago',
        content: `The main path is a death trap. But there is a way. A crawlspace between the walls. It is tight, but it will get us through. Follow me.`,
        likes: 480,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'hjumpik_sees_green_t',
        order: 30460,
        characterKey: 'hjumpik',
        timestamp: '52 minutes ago',
        content: `We're in the vents. I can see down into a room... it's full of mirrors. Green T is trapped in one of them. He's like a bug in amber.`,
        likes: 590,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'bowser_spider_surprise',
        order: 30459,
        characterKey: 'bowser',
        timestamp: '55 minutes ago',
        content: `Found a bathroom. Opened the door. Giant spider lunged at me. I closed the door. Some things you just don't punch.`,
        likes: 713,
        comments: [
            { characterKey: 'remi', text: 'Told you there were spiders!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'toad_lee_uneasy_truce',
        order: 30458,
        characterKey: 'toad_lee',
        timestamp: '58 minutes ago',
        content: `They are not the enemy. Not yet. The house is. An uneasy truce has been formed with Bowser's group. We will move together. Strength in numbers.`,
        likes: 543,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'kay_killed',
        order: 30457,
        characterKey: 'kay',
        timestamp: 'Earlier Today',
        content: `We're here for peace... please...`,
        likes: 210,
        comments: [
            { characterKey: 'chancellor_toadsworth', text: 'May the stars guide your spirit, brave envoy.' }
        ],
        rumorId: 'bramblehaven_siege' // Concurrently
    },
    {
        id: 'koomba_killed',
        order: 30456,
        characterKey: 'koomba',
        timestamp: 'Earlier Today',
        content: `That's Peach's seal! Return it!`,
        likes: 190,
        comments: [
            { characterKey: 'captain_toadette', text: 'He died defending the Princess\'s honor. A true soldier.' }
        ],
        rumorId: 'bramblehaven_siege' // Concurrently
    },
    {
        id: 'dk_warns_funky',
        order: 30035,
        characterKey: 'donkey_kong',
        timestamp: 'Just Now',
        content: `FUNKY! HE'S SENDING SOMEONE! An agent named Galypso! Don't let anyone in the shack! We're on our way! DO NOT LEAVE!`,
        likes: 1890,
        comments: [
            { characterKey: 'funky_kong', text: 'Whoa, heavy stuff, DK! The shack is on lockdown, my dude. No bad vibes gettin\' in here.' },
            { characterKey: 'diddy_kong', text: 'We\'re coming in hot, Funky! Hold tight!' }
        ],
        rumorId: 'the_kong_bug'
    },
  {
        id: 'kong_krool_call_leak',
        order: 30036, // The newest post
        characterKey: 'wah_media_collective',
        timestamp: 'Just Now',
        content: `**AUDIO LEAK: TENSE CALL BETWEEN DK & K. ROOL!** We have obtained an explosive, authenticated audio recording of a private call between Donkey Kong and King K. Rool. The conversation, which begins with accusations of espionage, escalates dramatically. Sources confirm the call ends with what appears to be a direct assassination order against a key member of the DK Crew. The fragile peace is over.`,
        // NEW: The property for the local audio file
        audioSrc: 'call.mp3',
        likes: 4580,
        comments: [
            { characterKey: 'the_broker', text: 'A high-value intelligence leak. The authenticity is confirmed. The market is in turmoil.' },
            { characterKey: 'wario', text: 'Oh, this is SO much better than just insults. Someone recorded the whole thing! Beautiful!' },
            { characterKey: 'regal_empire_delegate', text: 'This blatant disregard for diplomatic protocol is exactly why these lesser kingdoms cannot be trusted to govern themselves.' }
        ],
        rumorId: 'the_kong_bug'
    },    
    {
        id: 'diddy_rage_post',
        order: 30034,
        characterKey: 'diddy_kong',
        timestamp: '1 minute ago',
        content: `That scaly scumbag. He's gone too far this time. This isn't about bananas anymore. This is about family.`,
        likes: 1543,
        comments: [
            { characterKey: 'chunky_kong', text: 'What happened, Diddy? Is everyone okay?' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'krool_public_denial',
        order: 30033,
        characterKey: 'king_k_rool',
        timestamp: '3 minutes ago',
        content: `The ape accuses me of espionage? Keheheh! How pathetic! He can't control his own family, so now he blames me for his internal problems. Don't flatter yourself, monkey. If I wanted to spy on you, you'd never know it.`,
        likes: 1245,
        comments: [
            { characterKey: 'donkey_kong', text: 'You\'re a liar and a coward, K. Rool.' },
            { characterKey: 'kremling_loyalist', text: 'All hail the brilliant King K. Rool! He outsmarts the foolish Kongs again!' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'dk_public_accusation',
        order: 30032,
        characterKey: 'donkey_kong',
        timestamp: '5 minutes ago',
        content: `King K. Rool. You put a bug in my office. Don't bother denying it. The 'truce' is over. You've made a grave mistake.`,
        likes: 2105,
        comments: [
            { characterKey: 'king_k_rool', text: 'Oh, boo hoo! Did I interrupt your naptime scheming? Prove it, you oaf.' },
            { characterKey: 'cranky_kong', text: 'Good grief! Now the overgrown lizard is playing spy games!' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'funky_finds_bug',
        order: 30031,
        characterKey: 'funky_kong',
        timestamp: '10 minutes ago',
        content: `Whoa, dudes! Was just sweeping up some banana peels in DK's office and found this gnarly little gizmo behind the desk. Looks like some kind of listening device. Totally not cool! The tech has a real... scaly vibe to it. Bummer.`,
        likes: 987,
        comments: [
            { characterKey: 'diddy_kong', text: 'Funky, don\'t touch it! Get DK in there now!' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'broker_kong_bug_market',
        order: 30030,
        characterKey: 'the_broker',
        timestamp: '12 minutes ago',
        content: `Market Advisory: High-value intelligence leak confirmed from within the DK Crew. Source points to Kremling espionage. The DK-Kremling non-aggression pact has catastrophically failed. Expect extreme volatility in all related currencies. Information on agent 'Galypso' is now a premium item.`,
        likes: 750,
        comments: [
            { characterKey: 'fawful', text: 'I HAVE INTEREST! Send me the pricing for this... \'Galypso\'!' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'cranky_on_espionage',
        order: 30029,
        characterKey: 'cranky_kong',
        timestamp: '15 minutes ago',
        content: `Good grief! Spies! Listening devices! Back in my day, if you wanted to know what your enemy was planning, you hid in a barrel and listened at their door! Much more honest! And you got a free barrel!`,
        likes: 910,
        comments: [
            { characterKey: 'donkey_kong', text: 'I know, Cranky. I know.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'waluigi_loves_the_drama',
        order: 30028,
        characterKey: 'waluigi',
        timestamp: '20 minutes ago',
        content: `WAH! The monkey and the lizard are fighting again! Accusations! Denials! Secret agents! It's a beautiful symphony of paranoia! I love it!`,
        likes: 888,
        comments: [
            { characterKey: 'giggling_pete', text: 'Hee hee! The plot thickens, like a delicious, chaotic stew!' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'fawful_enjoys_the_show',
        order: 30027,
        characterKey: 'fawful',
        timestamp: '22 minutes ago',
        content: `I HAVE CHORTLES! The ape has fleas and the lizard has the scratching post! While they are busy with their primate foolishness, my magnificent plans will proceed without the annoyance of their meddling!`,
        likes: 765,
        comments: [
            { characterKey: 'captain_toadette', text: 'Enjoy your laughter while it lasts, monster.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'toadsworth_diplomatic_failure',
        order: 30026,
        characterKey: 'chancellor_toadsworth',
        timestamp: '25 minutes ago',
        content: `Oh, dear. The Kremling-Kong détente has collapsed. And so publicly... this will have dire consequences for regional stability. I do hope they can resolve this without resorting to... well, the usual.`,
        likes: 340,
        comments: [
            { characterKey: 'regal_empire_delegate', text: 'This is what happens when primitives are allowed to govern themselves. A predictable failure.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'lario_tech_analysis',
        order: 30025,
        characterKey: 'lario',
        timestamp: '30 minutes ago',
        content: `Heard they found a Kremling bug. Amateurs. My bugs are ten times smaller, have a much better battery life, and they come in different colors. For a reasonable price, of course.`,
        likes: 250,
        comments: [
            { characterKey: 'detective_penny', text: 'Noted for future reference, Lario. I\'ll add it to your file.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'penny_case_files',
        order: 30024,
        characterKey: 'detective_penny',
        timestamp: '32 minutes ago',
        content: `Case Notes: DK Crew alleges Kremling espionage. K. Rool denies. Classic he-said, she-said. But the evidence mentioned... a 'scaled pattern' and a 'cloaca smear'... that's specific. That's a lead. #TheKongBug`,
        likes: 480,
        comments: [
            { characterKey: 'master_goodstyle', text: 'A most un-stylish clue, but a clue nonetheless! Good luck, Detective!' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'archie_enjoys_chaos',
        order: 30023,
        characterKey: 'archie',
        timestamp: '35 minutes ago',
        content: `Two geriatric kings throwing a tantrum over a microphone. This is what passes for international politics. Hilarious. Let them fight. It'll be a good distraction.`,
        likes: 990,
        comments: [
            { characterKey: 'bones', text: 'Couldn\'t have said it better myself.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'markop_disappointed',
        order: 30022,
        characterKey: 'markop',
        timestamp: '40 minutes ago',
        content: `And so, the fragile peace collapses under the weight of old hatreds and deceit. Espionage, accusations... it is a sad, predictable cycle. True peace cannot be built on a foundation of lies.`,
        likes: 420,
        comments: [
            { characterKey: 'dan', text: 'It\'s just... sad.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'humpik_ready_to_fight',
        order: 30021,
        characterKey: 'humpik',
        timestamp: '45 minutes ago',
        content: `Monkey king and lizard king are fighting again? GOOD! More fighting is always good! Who are we hitting?`,
        likes: 560,
        comments: [
            { characterKey: 'bowser', text: 'Stand down, Humpik. This isn\'t our fight. ...Yet.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'bowser_smug',
        order: 30020,
        characterKey: 'bowser',
        timestamp: '50 minutes ago',
        content: `GWAHAHA! Told you the monkey couldn't be trusted! And the lizard is a born schemer! This is why you need a strong, honest king like ME to rule everyone!`,
        likes: 810,
        comments: [
            { characterKey: 'donkey_kong', text: 'Funny, I seem to remember your kids trying to overthrow you. Twice.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'remi_confused',
        order: 30019,
        characterKey: 'remi',
        timestamp: '55 minutes ago',
        content: `So the big monkey is mad at the crocodile king because of a bug? Is it a literal bug? Like a beetle? This world is very confusing.`,
        likes: 490,
        comments: [
            { characterKey: 'roger', text: 'Negative. The term "bug" refers to a covert listening device. An instrument of espionage.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'toadette_unimpressed',
        order: 30018,
        characterKey: 'captain_toadette',
        timestamp: '1 hour ago',
        content: `The beasts are squabbling amongst themselves. Predictable. Let them tear each other apart. It distracts from the real war.`,
        likes: 510,
        comments: [
            { characterKey: 'embercap', text: 'Agreed, Captain. Their chaos is our opportunity.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'ironhand_opportunity',
        order: 30017,
        characterKey: 'general_marcus_ironhand',
        timestamp: '1 hour ago',
        content: `The Kong-Kremling détente has collapsed. Instability on our northern maritime borders. This presents both a threat and a strategic opportunity. The Legion will be prepared to act.`,
        likes: 620,
        comments: [
            { characterKey: 'colonel_vera_steelstorm', text: 'I have already drafted three potential intervention scenarios, General.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'kamek_scheming',
        order: 30016,
        characterKey: 'kamek',
        timestamp: '1 hour ago',
        content: `Two lesser kings weaken each other through pointless espionage. This plays directly into our long-term strategy. Excellent.`,
        likes: 499,
        comments: [
            { characterKey: 'lord_crimson', text: 'A fine observation, Magikoopa. Let the children play their games.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'bones_shrugs',
        order: 30015,
        characterKey: 'bones',
        timestamp: '2 hours ago',
        content: `Kings spying on kings. Color me surprised.`,
        likes: 480,
        comments: [
            { characterKey: 'skull_cap_murphy', text: 'Told ya. All bosses are the same.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'dan_sad',
        order: 30014,
        characterKey: 'dan',
        timestamp: '2 hours ago',
        content: `Another peace treaty falls apart. It's... disheartening. Why can't people just... talk?`,
        likes: 410,
        comments: [
            { characterKey: 'ryan', text: 'Their interests were never truly aligned, Dan. It was only a matter of time.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'ryan_observes',
        order: 30013,
        characterKey: 'ryan',
        timestamp: '2 hours ago',
        content: `The predictable result of an alliance built on convenience rather than true alignment of interests. The collapse was a matter of when, not if.`,
        likes: 380,
        comments: [
            { characterKey: 'cybernetic_collectives', text: '[AGREEMENT]: The probability of long-term stability was calculated at less than 3.4%.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'roger_analyzes',
        order: 30012,
        characterKey: 'roger',
        timestamp: '2 hours ago',
        content: `The breakdown of the Kong-Kremling agreement will have significant downstream effects on supply chains for tropical goods. Expect prices for bananas to increase by at least 30%.`,
        likes: 310,
        comments: [
            { characterKey: 'lario', text: 'Ooh, a market opportunity!' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'eager_scared',
        order: 30011,
        characterKey: 'eager',
        timestamp: '3 hours ago',
        content: `The big monkey and the crocodile are fighting again! Does this mean war? I don't like war!`,
        likes: 280,
        comments: [
            { characterKey: 'dan', text: 'It\'s okay, Eager. It\'s far away from us for now.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'speaker_l_distrust',
        order: 30010,
        characterKey: 'speaker_l',
        timestamp: '3 hours ago',
        content: `And this is why we cannot trust kings and their games. Their 'peace' is a lie they tell while sharpening their knives. The only true security is in our own strength.`,
        likes: 390,
        comments: [
            { characterKey: 'generic_toad', text: 'Well said, Speaker L!' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'the_mole_reports',
        order: 30009,
        characterKey: 'the_mole',
        timestamp: '3 hours ago',
        content: `Report: Southern factions have re-engaged in hostilities. Kremling espionage operation confirmed. Recommend Legion forces assume a state of heightened readiness on the southern border.`,
        likes: 460,
        comments: [
            { characterKey: 'colonel_vera_steelstorm', text: 'Acknowledged. Send the full report.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'midlands_noble_gossip',
        order: 30008,
        characterKey: 'midlands_noble',
        timestamp: '4 hours ago',
        content: `Heard the most delicious rumor from the southern isles. Apparently Donkey Kong accused K. Rool of leaving a... 'cloaca smear' in his office. How deliciously vulgar! The diplomatic season is off to a roaring start!`,
        likes: 290,
        comments: [
            { characterKey: 'midlands_noble_2', text: 'Oh, darling, you MUST tell me everything at the gala!' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'generic_toad_confused',
        order: 30007,
        characterKey: 'generic_toad',
        timestamp: '4 hours ago',
        content: `So the monkeys and lizards are fighting again? Weren't they just having a summit? I can't keep up.`,
        likes: 240,
        comments: [
            { characterKey: 'generic_toad_2', text: 'Politics, friend. It never makes sense.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'koopa_troop_laughs',
        order: 30006,
        characterKey: 'koopa_troop',
        timestamp: '5 hours ago',
        content: `Heard the apes are fighting the crocs again! Good! Let 'em! The more they fight each other, the less they'll be paying attention when King Bowser returns to smash them both!`,
        likes: 410,
        comments: [
            { characterKey: 'koopa_troop_2', text: 'For the King!' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'cybernetic_collective_predicts',
        order: 30005,
        characterKey: 'cybernetic_collectives',
        timestamp: '5 hours ago',
        content: `[ANALYSIS]: Alliance between historically hostile organic entities has collapsed due to espionage. This outcome was predicted with 97.8% certainty. The subsequent escalation to assassination protocols is a standard, if inefficient, parameter of organic conflict resolution.`,
        likes: 720,
        comments: [
            { characterKey: 'janna_brightspark', text: 'See? Predictable! But what was the energy signature of the device?' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'kivotos_millennium_tech',
        order: 30004,
        characterKey: 'millennium_science_school',
        timestamp: '6 hours ago',
        content: `[Veritas Leak]: Intercepted schematics for the alleged 'Kremling bug'. The power source is crude, but the signal encryption is surprisingly sophisticated. We must acquire a sample for analysis.`,
        likes: 680,
        comments: [
            { characterKey: 'gehanna_academy', text: 'Always trying to get your hands on other people\'s toys, Millennium?' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'warhammer_empire_contempt',
        order: 30003,
        characterKey: 'the_empire',
        timestamp: '6 hours ago',
        content: `Let the greenskins and beastmen squabble in their jungle hovels. Their petty squabbles are of no concern to the Empire of Man.`,
        likes: 840,
        comments: [
            { characterKey: 'king_louen_leoncoeur', text: 'A king who ignores his neighbors soon finds his borders aflame.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'pokemon_trainer_quest',
        order: 30002,
        characterKey: 'trainer_guild',
        timestamp: '7 hours ago',
        content: `Wait, so there's a spy named Galypso? Is that a rare Pokémon? What type is it? Is it legendary? I gotta catch it!`,
        likes: 830,
        comments: [
            { characterKey: 'mages_guild_apprentice', text: 'It is... not a Pokémon. It is an agent of a foreign power. Please do not try to catch the assassin.' }
        ],
        rumorId: 'the_kong_bug'
    },
    {
        id: 'midlands_citizen_worried',
        order: 30001,
        characterKey: 'midlands_citizen',
        timestamp: '7 hours ago',
        content: `The Kongs and the Kremlings are at war again? Does this mean the price of bananas is going to go up? I just bought a new barrel!`,
        likes: 610,
        comments: [
            { characterKey: 'the_broker', text: 'Yes. Sell your barrel futures and invest in bananas.' }
        ],
        rumorId: 'the_kong_bug'
    },
        {
        id: 'speaker_l_candy_cookie',
        order: 20390,
        characterKey: 'speaker_l',
        timestamp: 'Just Now',
        content: `They have barricaded themselves. A futile gesture. ALL UNITS, FORMATION! CODEWORD: CANDY CHOCOLATE COOKIE! We will breach and secure!`,
        likes: 410,
        comments: [
            { characterKey: 'generic_toad', text: '...Candy Chocolate Cookie? Is that a real codeword?' },
            { characterKey: 'speaker_l', text: 'IT IS A TACTICAL PHONETIC DESIGNATION! CEASE YOUR QUESTIONING!' },
            { characterKey: 'waluigi', text: 'WAH! What a delicious-sounding codeword! I approve!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'archie_barricade',
        order: 20389,
        characterKey: 'archie',
        timestamp: '1 minute ago',
        content: `The door. Block it. Now.`,
        likes: 645,
        comments: [
            { characterKey: 'hjumpik', text: 'ON IT!' },
            { characterKey: 'speaker_l', text: 'Delaying the inevitable, Miser.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'oracle_offer_declined',
        order: 20388,
        characterKey: 'self_reflection_oracle',
        timestamp: '2 minutes ago',
        content: `The offer to untangle the thread was made. It was refused. The path of consequence is chosen. So be it.`,
        likes: 812,
        comments: [
            { characterKey: 'kamek', text: 'Playing with mortals is a dangerous game, old friend. Sometimes they refuse to be pawns.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'speaker_l_apprehend',
        order: 20387,
        characterKey: 'speaker_l',
        timestamp: '3 minutes ago',
        content: `BY VOTE AND VOW, BY COHORT LAW! ARCHIE MISER! YOU AND YOUR ASSOCIATES ARE TO SURRENDER! YOU ARE TO BE APPREHENDED FOR CATASTROPHIC FAILURE AND RECKLESS ENDANGERMENT!`,
        likes: 520,
        comments: [
            { characterKey: 'archie', text: 'Busy at the moment! We have a toad bleeding out! Call back later!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'pond_patrol_sings',
        order: 20386,
        characterKey: 'generic_toad',
        timestamp: '5 minutes ago',
        content: `Hear us, Archie, in your keep, We’ve marched through fire, wade through deep! From shattered labs to fallen halls, The Cohort answers duty’s calls!`,
        likes: 289,
        comments: [
            { characterKey: 'bones', text: 'Great. A singing mob. Just what we needed.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'dan_failed_healing',
        order: 20385,
        characterKey: 'dan',
        timestamp: '6 minutes ago',
        content: `I can't... I can't... I made it worse...`,
        likes: 310,
        comments: [
            { characterKey: 'toad_lee', text: 'Dan, breathe. Do not let the failure consume you. Reset and try again.' },
            { characterKey: 'ryan', text: 'You forced the energy. It requires calm, a gentle guidance. You will learn.' },
            { characterKey: 'archie', text: 'Not now, Dan. Get it together.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'archie_dan_heal_now',
        order: 20384,
        characterKey: 'archie',
        timestamp: '8 minutes ago',
        content: `Dan! Do something! Use your magic, heal him now! HE'S BLEEDING OUT!`,
        likes: 540,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'remi_wakes_up_drums',
        order: 20383,
        characterKey: 'remi',
        timestamp: '10 minutes ago',
        content: `Collapsed in a wrecked room full of broken mirrors. Finally got some sleep. Woke up to the sound of drums. I hate this house.`,
        likes: 455,
        comments: [
            { characterKey: 'generic_toad', text: 'That\'s the Pond Patrol! They\'re here!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'remi_spider_fight',
        order: 20382,
        characterKey: 'remi',
        timestamp: '15 minutes ago',
        content: `Fought a spider the size of a wolf in the maze. My shield spell worked. My dagger did not. My crossbow bolt hit it in the eye. It ran away. I'm never going in a maze again.`,
        likes: 612,
        comments: [
            { characterKey: 'humpik', text: 'Good shot, little one!' },
            { characterKey: 'waluigi', text: 'WAH! You should have captured it! Think of the chaos we could cause with a giant spider!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'remi_lost_in_maze',
        order: 20381,
        characterKey: 'remi',
        timestamp: '20 minutes ago',
        content: `I'm lost. I'm lost in a maze that keeps changing. And of course there are spiders. Why did I have to say spiders.`,
        likes: 388,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'markop_keeps_book',
        order: 20380,
        characterKey: 'markop',
        timestamp: '22 minutes ago',
        content: `The book speaks of four manors, a war across time. The final page, the key to it all, is missing. The ghosts want it back. No. This knowledge is too dangerous to be left to them. I am keeping it.`,
        likes: 410,
        comments: [
            { characterKey: 'green_t', text: 'A wise, if predictable, choice, paladin.' },
            { characterKey: 'janna_brightspark', text: 'A chronomantic codex?! You must let me see it! For science!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'green_t_ghosts',
        order: 20379,
        characterKey: 'green_t',
        timestamp: '25 minutes ago',
        content: `Okay, fine. There's a whole family of ghosts here. Oracles. They're at war with each other, living vs dead, for control of this place. Happy now?`,
        likes: 375,
        comments: [
            { characterKey: 'markop', text: 'Your willingness to share this information now is noted. And distrusted.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'markop_obituary',
        order: 20378,
        characterKey: 'markop',
        timestamp: '30 minutes ago',
        content: `We found a side entrance. A different part of the house, abandoned. On a table was a silver frame. An obituary. The name on it was 'Oracle'.`,
        likes: 451,
        comments: [
            { characterKey: 'detective_penny', text: 'An obituary? For a man who is still walking around? This case keeps getting stranger. Keep that as evidence.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'bowser_dead_end',
        order: 20377,
        characterKey: 'bowser',
        timestamp: '35 minutes ago',
        content: `GWAH! A dead end! This stupid maze! I'm just gonna PUNCH my way through! RAAARGH! ...Okay, that hurt. These are some tough thorns.`,
        likes: 398,
        comments: [
            { characterKey: 'markop', text: 'Brute force is not the answer to everything, Bowser.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'green_t_winged_it',
        order: 20376,
        characterKey: 'green_t',
        timestamp: '40 minutes ago',
        content: `Yes, alright, I winged it! I needed a distraction to get away and fire seemed like a bad idea. I grabbed a key. This maze is a defense system. Now follow me before it decides to eat us.`,
        likes: 311,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'markop_axe_swing',
        order: 20375,
        characterKey: 'markop',
        timestamp: '42 minutes ago',
        content: `The entrance to the maze was blocked by a wall of living vines. It bled when I cut it. This place is unnatural.`,
        likes: 299,
        comments: [
            { characterKey: 'chief_thornpaw', text: 'The spirits of this place are angry. Wounded. Tread carefully.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'hjumpik_alone',
        order: 20374,
        characterKey: 'hjumpik',
        timestamp: '45 minutes ago',
        content: `Woke up. Everyone was gone. The house was quiet. Too quiet. I heard voices, but there was no one there. This place is not right. I am going back upstairs.`,
        likes: 250,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'remi_wakes_up_locked',
        order: 20373,
        characterKey: 'remi',
        timestamp: '50 minutes ago',
        content: `Woke up. The door is locked from the outside. My roommate smashed the lock. Breakfast was... not pork. Bowser's teeth are rusting. A wyvern fell from the sky. And now there's a living maze. I need a nap.`,
        likes: 789,
        comments: [
            { characterKey: 'cranky_kong', text: 'Back in my day, we didn\'t have haunted houses, we had haunted shacks! And we LIKED it!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'toadbert_on_dan_duty',
        order: 20372,
        characterKey: 'generic_toad',
        timestamp: 'Just Now',
        content: `He gave me his sword and told me to watch Dan. And not to cut his head off. Why would I cut his head off?! I'm so scared...`,
        likes: 98,
        comments: [
            { characterKey: 'archie', text: 'It was a precaution. Don\'t worry about it.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'hjumpik_vision',
        order: 20371,
        characterKey: 'humpik',
        timestamp: '7 minutes ago',
        content: `I looked at the blood on the floor. It showed me... something. A face made of glass. I do not like this house's mirrors. Or its floors.`,
        likes: 315,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'pond_patrol_arrival',
        order: 20370,
        characterKey: 'pond_patrol_grunt',
        timestamp: '9 minutes ago',
        content: `We have arrived at the objective. It is a ruin. Moving to secure the perimeter.`,
        likes: 188,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'eager_agony',
        order: 20369,
        characterKey: 'eager',
        timestamp: '11 minutes ago',
        content: `AAAAAAAAAAGH!`,
        likes: 742,
        comments: [
            { characterKey: 'dewdrop', text: 'By the stars, what happened?! I\'m mobilizing a medical team!' },
            { characterKey: 'dan', text: 'I\'m so sorry... I\'m so sorry...' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'markop_ignores_waluigi',
        order: 20368,
        characterKey: 'markop',
        timestamp: '1 hour ago',
        content: `There is a shadow with claws in the west hall. The Oracle is here, whispering at it. This is not my concern. I am going for breakfast.`,
        likes: 350,
        comments: [
            { characterKey: 'waluigi', text: 'WAH! You just walked past my dramatic entrance!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'bowser_throws_remi',
        order: 20367,
        characterKey: 'bowser',
        timestamp: '40 minutes ago',
        content: `GWAH! The little one is too slippery! She fell! But she found a path! Okay, this time for real! YEET!`,
        likes: 367,
        comments: [
            { characterKey: 'remi', text: 'Stop throwing me!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'remi_discovers_path',
        order: 20366,
        characterKey: 'remi',
        timestamp: '41 minutes ago',
        content: `Okay, so Bowser dropped me. But from down here I can see a hidden path along the side of the house! It looks... bushy.`,
        likes: 412,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'green_t_throws_remi',
        order: 20365,
        characterKey: 'green_t',
        timestamp: '44 minutes ago',
        content: `If we can't go through it, we go over. Simple. Bowser, move. You're in my line of... throw.`,
        likes: 299,
        comments: [
            { characterKey: 'markop', text: 'Is throwing people our only strategy now?' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'kamek_observes_pond_patrol',
        order: 20364,
        characterKey: 'kamek',
        timestamp: '1 hour ago',
        content: `The mushrooms are sending a 'Pond Patrol' to apprehend their own allies. A delightful development. Let them tear each other apart. It saves us the effort.`,
        likes: 420,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'the_oracle_walkway',
        order: 20363,
        characterKey: 'self_reflection_oracle',
        timestamp: '46 minutes ago',
        content: `The thorns grow to protect the memory. The statue's face is gone because the reflection it shows is no longer mine.`,
        likes: 723,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'remi_finds_rotten_tomatoes',
        order: 20362,
        characterKey: 'remi',
        timestamp: '32 minutes ago',
        content: `Checked a planter in the creepy greenhouse. Just a basket of rotten tomatoes. Great.`,
        likes: 215,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'oracle_to_remi',
        order: 20361,
        characterKey: 'self_reflection_oracle',
        timestamp: '14 minutes ago',
        content: `Yes. There is another house. You have seen one of the other threads. Be careful which ones you pull.`,
        likes: 698,
        comments: [
            { characterKey: 'remi', text: 'What does that even mean?!' },
            { characterKey: 'archie', text: 'It means he\'s a creepy fortune cookie. Ignore him.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'kay_diplomat_mission',
        order: 20360,
        characterKey: 'kay',
        timestamp: 'Morning',
        content: `We're on a mission for peace. With the Koopa Troop. I have a bad feeling about this.`,
        likes: 88,
        comments: [],
        rumorId: 'bramblehaven_siege' // Different event, happening concurrently
    },
    {
        id: 'koomba_diplomat_mission',
        order: 20359,
        characterKey: 'koomba',
        timestamp: 'Morning',
        content: `Delivering a message from a dead princess to a broken kingdom. What could possibly go wrong?`,
        likes: 102,
        comments: [],
        rumorId: 'bramblehaven_siege' // Different event
    },
    {
        id: 'paratroopa_report_envoys',
        order: 20358,
        characterKey: 'koopa_troop',
        timestamp: 'Morning',
        content: `Two envoys from the pink fanatics are trying to get into the valley. They say they have a message. Orders are to... let them pass? Weird.`,
        likes: 154,
        comments: [],
        rumorId: 'bramblehaven_siege' // Different event
    },
    {
        id: 'wario_observes_fire',
        order: 20357,
        characterKey: 'wario',
        timestamp: '4 hours ago',
        content: `Heard there was a fire at the purple idiot's new house. Gahaha! Sounds like property values are about to go down! A perfect time to make an offer!`,
        likes: 489,
        comments: [
            { characterKey: 'lario', text: 'I can get you a great deal on the salvage rights!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'lord_crimson_contempt',
        order: 20440,
        characterKey: 'lord_crimson',
        timestamp: 'Just Now',
        content: `The mortals have "voted." How quaint. Their Emperor waves his scepter, and 81 of his puppets dance. They think a law changes the nature of the night. It does not. It merely clarifies who the true enemy is. All of them.`,
        likes: 1455,
        comments: [
            { characterKey: 'lady_ebonveil', text: 'Patience, my lord. Their arrogance provides us with new opportunities.' },
            { characterKey: 'alpha_bloodmaw', text: 'For once, I agree with the leech. The Empire has made this simple.' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'alpha_bloodmaw_declaration_of_war',
        order: 20439,
        characterKey: 'alpha_bloodmaw',
        timestamp: '2 minutes ago',
        content: `So the sheep have voted that the wolves have no rights. The Empire has drawn its line. Good. It makes the hunt cleaner. There is no 'truce' with those who deny our existence. There is only prey.`,
        likes: 1120,
        comments: [
            { characterKey: 'chief_thornpaw', text: 'The spirits weep. The foolishness of mortals will drown this land in blood.' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'dan_reacts_to_act',
        order: 20438,
        characterKey: 'dan',
        timestamp: '3 minutes ago',
        content: `The Empire has forced it through. The Supernatural Sovereignty Act is law. It's... brutal. I understand the need to protect people, but to declare entire peoples illegal... this feels like the path to a massacre, not peace.`,
        likes: 950,
        comments: [
            { characterKey: 'markop', text: 'It is the Imperial way, Dan. Order enforced by an iron fist.' },
            { characterKey: 'toad_lee', text: 'It gives us a clear enemy. There is a brutal simplicity in that.' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'ironhand_enforces_act',
        order: 20437,
        characterKey: 'general_marcus_ironhand',
        timestamp: '5 minutes ago',
        content: `The Diet has affirmed the Emperor's will. The Supernatural Sovereignty Act is law. The Legion will enforce it. Our orders are to establish a hard border. There will be no truce, only containment. Order will be maintained.`,
        likes: 910,
        comments: [
            { characterKey: 'colonel_vera_steelstorm', text: 'Finally. A clear mandate.' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'vale_holy_war_act',
        order: 20436,
        characterKey: 'high_inquisitor_vale',
        timestamp: '8 minutes ago',
        content: `AT LAST! The Empire finds its spine! 81 to 30! They have declared the monsters for what they are: illegal entities, abominations to be purged! This is not containment; it is a declaration of a holy war! The Silver Flame will be its vanguard!`,
        likes: 850,
        comments: [
            { characterKey: 'silver_flame_cleric', text: 'The cleansing begins!' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'midlands_diet_herald_announcement',
        order: 20435,
        characterKey: 'midlands_diet_herald',
        timestamp: '10 minutes ago',
        content: `**Official Proclamation from the Midlands Diet**

By an overwhelming vote of 81 in favor, 30 against, and 4 abstaining, the Imperial-proposed Supernatural Sovereignty Act has been ratified. The court will not recognize vampire or werewolf suzerainty and declares their organized presence within Imperial borders illegal. A containment protocol is to be enforced by Royal Warrant.`,
        videoSrc: 'video0.mp4',
        likes: 3120,
        comments: [
            { characterKey: 'emperor_elagabalus', text: 'A decisive victory for order.' },
            { characterKey: 'generic_toad', text: 'Oh dear, this sounds like it\'s going to lead to a lot of fighting...' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'midlands_diet_herald_announcement',
        order: 20435,
        characterKey: 'midlands_diet_herald',
        timestamp: '10 minutes ago',
        content: `**Official Proclamation from the Midlands Diet**

By an overwhelming vote of 81 in favor, 30 against, and 4 abstaining, the Supernatural Sovereignty Act, proposed by the delegate Dan, has been ratified. The court will not recognize vampire or werewolf suzerainty and declares their organized presence within Imperial borders illegal. A containment protocol is to be enforced by Royal Warrant.`,
        videoSrc: 'video0.mp4',
        likes: 3120,
        comments: [
            { characterKey: 'emperor_elagabalus', text: 'A decisive victory for order.' },
            { characterKey: 'generic_toad', text: 'Oh dear, this sounds like it\'s going to lead to a lot of fighting...' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'broker_analyzes_vote',
        order: 20434,
        characterKey: 'the_broker',
        timestamp: '12 minutes ago',
        content: `Market Analysis: The Supernatural Sovereignty Act passes with a supermajority. The Onyx Hand and Moonfang Pack have been officially delisted as recognized political entities. Expect extreme volatility in border territories. Legion military contracts are now trading at an all-time high. The market for blackmail on the 30 'against' votes is now open.`,
        likes: 710,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'archie_mocks_dan_plan',
        order: 20433,
        characterKey: 'archie',
        timestamp: '15 minutes ago',
        content: `The kid's big idea was to make being a monster illegal? And it passed by a landslide? That's the most ridiculous, pointless, and utterly brilliant thing I've ever heard. It changes nothing and everything all at once. The fallout from this is going to be spectacular. I'm almost impressed.`,
        likes: 1211,
        comments: [
            { characterKey: 'dan', text: 'It\'s not about making them illegal, it\'s about protecting people.' },
            { characterKey: 'archie', text: 'Semantics, kid. You just painted a giant target on the whole government.' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'waluigi_sends_fruit_basket',
        order: 20432,
        characterKey: 'waluigi',
        timestamp: '18 minutes ago',
        content: `WAH-HA-HA! The little one-armed toad made a LAW against monsters! And everyone agreed! This is magnificent! They've poked the hornets' nest with a giant stick! The resulting chaos will be a masterpiece! I must send Dan a fruit basket! A very large, possibly explosive fruit basket!`,
        likes: 1050,
        comments: [
            { characterKey: 'giggling_pete', text: 'A legislative declaration of war! The Jester applauds this beautiful absurdity!' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'midlands_noble_vote_result',
        order: 20431,
        characterKey: 'midlands_noble',
        timestamp: '20 minutes ago',
        content: `By the stars, it passed. 81 to 30. The Supernatural Sovereignty Act stands. That little toad's speech was surprisingly persuasive. The Emperor has forced a war upon the beasts. A bold move. Let's see if it holds. #MidlandsDietVote`,
        likes: 315,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'kamek_observes_vote_result',
        order: 20430,
        characterKey: 'kamek',
        timestamp: '25 minutes ago',
        content: `The humans of the Midlands squabble and pass laws against the dark. Amusing. Let them draw their lines in the sand. The tide is still coming. This over-extension of Legion forces to the borders presents... opportunities.`,
        likes: 412,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'toadsworth_concerned_by_landslide',
        order: 20429,
        characterKey: 'chancellor_toadsworth',
        timestamp: '30 minutes ago',
        content: `An imposed war by the Midlands Diet? And with such an overwhelming majority? While we all pray for peace, to corner two such ancient powers with no room for negotiation could have... unforeseen and catastrophic consequences for the entire region.`,
        likes: 310,
        comments: [
            { characterKey: 'captain_toadette', text: 'The only negotiation with monsters is at the end of a blade.' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'fawful_fury_at_distraction',
        order: 20428,
        characterKey: 'fawful',
        timestamp: '35 minutes ago',
        content: `THE FOOLS HAVE THE VOTES! They make a war with the furry and the fanged! It is a treaty of STUPIDITY! While they are distracted by their pointless border skirmishes, I will be preparing a symphony of DOOM!`,
        likes: 721,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'bowser_laughs_at_vote',
        order: 20427,
        characterKey: 'bowser',
        timestamp: '40 minutes ago',
        content: `GWAHAHA! The Empire tells the vampires and werewolves to sit down and shut up! About time someone showed them who's boss! (Besides me, of course). That little one-armed toad has some guts!`,
        likes: 678,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'lario_bad_for_business',
        order: 20426,
        characterKey: 'lario',
        timestamp: '45 minutes ago',
        content: `Great. A 'containment protocol'. That means the Legion will be all over the border territories with checkpoints and patrols. Bad for business. Time to find some new, less-policed smuggling routes.`,
        likes: 198,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'janna_research_opportunity',
        order: 20425,
        characterKey: 'janna_brightspark',
        timestamp: '50 minutes ago',
        content: `An Imperial-enforced containment of two unique lycanthropic and vampiric species? Fascinating! This provides a unique opportunity to study both groups under extreme political pressure. I must prepare my research grant proposal immediately!`,
        likes: 305,
        comments: [
            { characterKey: 'archmage_theron', text: 'Janna, you will not be "studying" two armies on the brink of war.' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'dk_banana_question',
        order: 20424,
        characterKey: 'donkey_kong',
        timestamp: '1 hour ago',
        content: `Heard some government is mad at vampires. Do vampires have bananas?`,
        likes: 1590,
        comments: [
            { characterKey: 'diddy_kong', text: 'No, DK. They don\'t have bananas.' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'syrup_sees_opportunity',
        order: 20423,
        characterKey: 'captain_syrup',
        timestamp: '1 hour ago',
        content: `The Empire is trying to put a leash on the Onyx Hand? Good luck with that. More chaos in the Midlands means less Imperial patrols on the shipping lanes. Sounds profitable to me.`,
        likes: 489,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'remi_is_it_a_good_idea',
        order: 20422,
        characterKey: 'remi',
        timestamp: '1 hour ago',
        content: `So...the big government to pick a fight with vampires and werewolves at the same time? Is that... a good idea?`,
        likes: 412,
        comments: [
            { characterKey: 'markop', text: 'It is a decisive one. Whether it is a good one remains to be seen.' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'humpik_confused',
        order: 20421,
        characterKey: 'humpik',
        timestamp: '1 hour ago',
        content: `GWAH! Lot of yelling about a vote. The little one-armed toad is giving orders to the Empire now? This is confusing. As long as I know who to hit with my axe, I am happy.`,
        likes: 521,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'cybernetic_collective_analysis_vote',
        order: 20420,
        characterKey: 'cybernetic_collectives',
        timestamp: '2 hours ago',
        content: `[ANALYSIS]: A legislative body has attempted to alter the behavioral parameters of two hostile, non-compliant entities via decree. Probability of success: 1.7%. Probability of escalating a regional conflict into a continental war: 91.2%. Fascinatingly illogical.`,
        likes: 712,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'kivotos_gehanna_mocks_vote',
        order: 20419,
        characterKey: 'gehanna_academy',
        timestamp: '2 hours ago',
        content: `[Pandemonium Society Leak]: The Midlands Diet just tried to outlaw two of the strongest factions on their continent? With a piece of paper? And it was some random toad's idea? That's hilarious. Let's see how well that works out for them.`,
        likes: 666,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'warhammer_skaven_delighted',
        order: 20418,
        characterKey: 'skaven',
        timestamp: '2 hours ago',
        content: `Man-things make-make paper-law against claw-things and fang-things! Yes-yes! Let them fight-squabble! More-more chaos for the Under-Empire to grow-spread!`,
        likes: 598,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'pokemon_team_rocket_opportunity',
        order: 20417,
        characterKey: 'team_rocket',
        timestamp: '3 hours ago',
        content: `While the local authorities are busy trying to referee monsters, it presents a perfect opportunity for our own acquisition operations in the region. Prepare for trouble!`,
        likes: 410,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'toadette_dismisses_vote',
        order: 20416,
        characterKey: 'captain_toadette',
        timestamp: '3 hours ago',
        content: `The Midlands Diet plays their games of words while a real war is being fought. Let them posture. It keeps their eyes off the Mushroom Kingdom, which is all that matters.`,
        likes: 488,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'bones_cynical_vote',
        order: 20415,
        characterKey: 'bones',
        timestamp: '3 hours ago',
        content: `A bunch of suits in a fancy room voted to make monsters illegal. Heh. Good luck enforcing that.`,
        likes: 451,
        comments: [
            { characterKey: 'archie', text: 'Exactly.' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'ryan_paradox_vote',
        order: 20414,
        characterKey: 'ryan',
        timestamp: '4 hours ago',
        content: `To deny their legitimacy while attempting to control them... it's a paradox. You cannot legislate a force of nature. Dan's act will only provoke them. I fear the consequences.`,
        likes: 360,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'roger_logistics_vote',
        order: 20413,
        characterKey: 'roger',
        timestamp: '4 hours ago',
        content: `This 'containment' is an logistical impossibility. The resources required to maintain a hard border between two such hostile territories are astronomical. It's an inefficient, unsustainable gesture that is doomed to fail.`,
        likes: 299,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'eager_simple_vote',
        order: 20412,
        characterKey: 'eager',
        timestamp: '5 hours ago',
        content: `Does this mean the vampires and werewolves have to stop fighting? That sounds good! Less fighting is good, right?`,
        likes: 240,
        comments: [
            { characterKey: 'toad_lee', text: 'In theory, young one. In practice, it is more complicated.' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'speaker_l_leadership_vote',
        order: 20411,
        characterKey: 'speaker_l',
        timestamp: '5 hours ago',
        content: `The Midlands Diet shows strength, unlike our own leadership. They impose order instead of negotiating with monsters. Dan's proposal was decisive. A surprising display of leadership from the one who has shown so little.`,
        likes: 310,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'the_mole_reports_vote',
        order: 20410,
        characterKey: 'the_mole',
        timestamp: '6 hours ago',
        content: `Report: Midlands Diet has passed the Supernatural Sovereignty Act. This will stretch Legion forces thin during enforcement. An opportunity for other operations. Forwarding analysis to command.`,
        likes: 450,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'midlands_citizen_fear_vote',
        order: 20409,
        characterKey: 'midlands_citizen',
        timestamp: '6 hours ago',
        content: `They did what?! They made a law against the vampires?! Are they insane?! The vampires are going to be so angry! We live on the border! This is terrifying!`,
        likes: 620,
        comments: [
            { characterKey: 'lord_crimson', text: 'Do not worry, little mortal. We will not be angry. We will be... thorough.' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'koopa_troop_reacts_vote',
        order: 20408,
        characterKey: 'koopa_troop',
        timestamp: '7 hours ago',
        content: `Ha! The shiny-armor humans are picking a fight with the spooky monsters! Good! Let 'em weaken each other. Makes it easier for King Bowser to smash 'em all later!`,
        likes: 380,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'generic_toad_indifferent_vote',
        order: 20407,
        characterKey: 'generic_toad',
        timestamp: '7 hours ago',
        content: `I heard some other kingdom is having political problems. As long as it's not here, I don't care. We have enough problems with Fawful.`,
        likes: 210,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'midlands_diet_vote_start',
        order: 20406,
        characterKey: 'midlands_diet_herald',
        timestamp: '8 hours ago',
        content: `The emergency session of the Midlands Diet is underway. Delegate Dan has proposed the "Supernatural Sovereignty Act" to address the ongoing crisis at our borders. The vote is expected to be contentious.`,
        likes: 1800,
        comments: [],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'syrup_observes_fire',
        order: 20356,
        characterKey: 'captain_syrup',
        timestamp: '5 hours ago',
        content: `My spies tell me Waluigi's new manor is on fire and he's fighting his own allies. Couldn't have happened to a nicer cheat. Hope my invitation to the housewarming party is still valid.`,
        likes: 512,
        comments: [
            { characterKey: 'first_mate_jones', text: 'I\'ll prepare the grappling hooks, Captain.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'speaker_l_patrol_vote',
        order: 20305,
        characterKey: 'speaker_l',
        timestamp: 'Just Now',
        content: `The vote has passed. We will deploy the Pond Patrol. This is not a matter of retribution, but of accountability and security. We cannot allow such destructive incompetence to go unchecked. All individuals involved will be brought in for questioning. This is the will of the First Cohort.`,
        likes: 380,
        comments: [ { characterKey: 'generic_toad', text: 'Finally! Some real action!' } ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'toad_lee_patrol_dissent',
        order: 20304,
        characterKey: 'toad_lee',
        timestamp: '2 minutes ago',
        content: `I voted no. Our people are wounded, scattered. They need aid, not chains. To treat our own as criminals in the wake of a battle is to break the very Vow that holds us together. This is a mistake.`,
        likes: 415,
        comments: [
            { characterKey: 'dan', text: 'I agree with you, Lee. We should be helping them.' },
            { characterKey: 'speaker_l', text: 'Helping them continue their path of destruction is not an option.' }
        ]
    },
    {
        id: 'bones_patrol_vote',
        order: 20303,
        characterKey: 'bones',
        timestamp: '5 minutes ago',
        content: `Voted yes. Someone needs to put a leash on them before they burn down the whole forest. This 'self-destruction' is a liability we can't afford. Time to clean up the mess.`,
        likes: 290,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'ryan_patrol_vote_revelation',
        order: 20302,
        characterKey: 'ryan',
        timestamp: '8 minutes ago',
        content: `I voted yes. The arcane energies unleashed were a perversion. The metallic monsters... their creation felt familiar. I sense a signature akin to the temporal corruption of The Oracle. We must secure the site for investigation.`,
        likes: 320,
        comments: [ { characterKey: 'janna_brightspark', text: 'Temporal corruption linked to the rust monsters?! Fascinating! You must get samples!' } ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'roger_patrol_vote',
        order: 20301,
        characterKey: 'roger',
        timestamp: '20 minutes ago',
        content: `The deployment of the Pond Patrol is the only logistically sound decision. It contains the variables, secures the operational area, and allows for a full assessment of the catastrophic resource loss. It is a necessary action to prevent further systemic collapse.`,
        likes: 225,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
     {
        id: 'markop_in_the_rain',
        order: 20300,
        characterKey: 'markop',
        timestamp: 'Just Now',
        content: `The fire is out. The rain is washing away the ash. Everyone is alive, somehow. But the cost... Archie's final act was one of desperation, not victory. And Green T... he's playing a game I do not understand. He gave me a key. A key to what? More secrets? This house is a wound that will not close.`,
        likes: 121,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'green_t_offers_key',
        order: 20299,
        characterKey: 'green_t',
        timestamp: '2 minutes ago',
        content: `Trust is a currency. I've made a down payment. Let's see if the paladin is smart enough to invest it. The real game starts tonight.`,
        likes: 277,
        comments: [
            { characterKey: 'the_broker', text: 'An interesting move. The market for Imperial keys just saw a spike.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'remi_raisins',
        order: 20298,
        characterKey: 'remi',
        timestamp: '5 minutes ago',
        content: `The fire turned my grapes into raisins. The rain turned them back into grapes. This place is weird.`,
        likes: 678,
        comments: [
            { characterKey: 'eager', text: 'Magic grapes! Can I try one?!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'bowser_soot_and_rust',
        order: 20297,
        characterKey: 'bowser',
        timestamp: '8 minutes ago',
        content: `I'M ALIVE! But I'm covered in soot, my everything aches, and my mouth still tastes like a rusty pipe. That was NOT PORK. I'm going to find that stupid toad who cooked it and... and... make him watch me eat a REAL steak.`,
        likes: 450,
        comments: [
            { characterKey: 'kamek', text: 'A harrowing experience, Your Viciousness. I shall prepare a volcanic rock for you to rest upon.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'archie_aftermath_thought',
        order: 20296,
        characterKey: 'archie',
        timestamp: '10 minutes ago',
        content: `...I thought it'd work.`,
        likes: 812,
        comments: [
            { characterKey: 'dan', text: 'You saved him, Archie. You saved Eager. That worked.' },
            { characterKey: 'markop', text: 'You saved him. But look at the cost.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'waluigi_freezes_fire',
        order: 20295,
        characterKey: 'waluigi',
        timestamp: '12 minutes ago',
        content: `WAH! And for my final act! A magnificent cone of cold to extinguish the flames! You see? The fire was merely an appetizer for my brilliant, show-stopping finale! You're all welcome! Betsy is fine, by the way. Just a little shaken.`,
        likes: 310,
        comments: [
            { characterKey: 'markop', text: 'You helped start it with a firebolt, you purple menace.' },
            { characterKey: 'waluigi', text: 'Details, details! It\'s all part of the performance!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'archie_fireball_final',
        order: 20294,
        characterKey: 'archie',
        timestamp: '15 minutes ago',
        content: `FIREBALL!`,
        likes: 1205,
        comments: [
            { characterKey: 'janna_brightspark', text: 'The energy readings were off the charts! Magnificent!' },
            { characterKey: 'archmage_theron', text: 'Unsanctioned. Uncontrolled. Utterly reckless.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'bowser_calls_for_archie',
        order: 20293,
        characterKey: 'bowser',
        timestamp: '16 minutes ago',
        content: `Three-eyes! Grab my hand! The whole place is coming down!`,
        likes: 388,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'dan_cure_wounds_first',
        order: 20292,
        characterKey: 'dan',
        timestamp: '18 minutes ago',
        content: `I... I did it. A real spell. It wasn't the staff. It was me.`,
        likes: 567,
        comments: [
            { characterKey: 'archie', text: 'You did good, kid.' },
            { characterKey: 'toad_lee', text: 'Your training bears fruit.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'waluigi_firebolt_help',
        order: 20291,
        characterKey: 'waluigi',
        timestamp: '20 minutes ago',
        content: `WAH-HA-HA! These rusty fools need a lesson in style! Let's heat things up! FIREBOLT! ...Hmm. Maybe that made it worse. MORE CHAOS!`,
        likes: 245,
        comments: [
            { characterKey: 'ryan', text: 'You are an agent of entropy.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'eager_reckless_charge',
        order: 20290,
        characterKey: 'eager',
        timestamp: '22 minutes ago',
        content: `They're swarming Archie! I have to help! FOR THE VIGILANCE!`,
        likes: 178,
        comments: [
            { characterKey: 'archie', text: 'Kid, no, wait-!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'remi_bitten',
        order: 20289,
        characterKey: 'remi',
        timestamp: '24 minutes ago',
        content: `It bit me. My arm is turning orange. This is fine. Everything is fine.`,
        likes: 312,
        comments: [
            { characterKey: 'dan', text: 'Remi, get back! Let us handle this!' },
            { characterKey: 'dewdrop', text: 'That sounds like a potent corrosive agent! Please seek medical attention immediately!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'green_t_locks_door',
        order: 20288,
        characterKey: 'green_t',
        timestamp: '25 minutes ago',
        content: `Let's move this conversation somewhere... less flammable. And let's make sure our test subjects remain... focused. *click*`,
        likes: 433,
        comments: [
            { characterKey: 'wario', text: 'Good. An uncontrolled experiment yields messy data.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'archie_bonfire_start',
        order: 20287,
        characterKey: 'archie',
        timestamp: '27 minutes ago',
        content: `Rust monsters, huh? Let's see how you handle a little heat. Time to start a bonfire.`,
        likes: 399,
        comments: [
            { characterKey: 'markop', text: 'Archie, this is a glass house filled with dry plants. Perhaps a different approach?' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'bowser_good_tomato',
        order: 20286,
        characterKey: 'bowser',
        timestamp: '30 minutes ago',
        content: `This whole greenhouse is rotten, but I found one perfect tomato! GWAHAHA! It's the little victories. Now I'm gonna eat it before anyone else... wait what's that clicking sound?`,
        likes: 284,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'observer_wyvern_crash',
        order: 20285,
        characterKey: 'generic_toad',
        timestamp: '35 minutes ago',
        content: `I was just trimming the hedges and a WYVERN fell out of the sky! It crashed in the garden! And the tall purple guy fell off! What is HAPPENING at this manor?!`,
        likes: 158,
        comments: [
            { characterKey: 'waluigi', text: 'WAH! Mind your own business, you nosy mushroom!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'waluigi_betsy',
        order: 20284,
        characterKey: 'waluigi',
        timestamp: '36 minutes ago',
        content: `WAH! STOP! DON'T HURT BETSY! She's a rental! Do you know how much the deposit is on a summoned wyvern?!`,
        likes: 341,
        comments: [
            { characterKey: 'remi', text: 'It was coming right for us!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'remi_shoots_wyvern',
        order: 20283,
        characterKey: 'remi',
        timestamp: '38 minutes ago',
        content: `Big green thing in the sky. I shot it. It fell down.`,
        likes: 502,
        comments: [
            { characterKey: 'green_t', text: '...Nice shot.' },
            { characterKey: 'roger', text: 'Excellent trigger discipline.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'green_t_shot_down',
        order: 20282,
        characterKey: 'green_t',
        timestamp: '40 minutes ago',
        content: `WHO SHOT US?! I was having a perfectly civil mid-air business negotiation!`,
        likes: 319,
        comments: [
            { characterKey: 'waluigi', text: 'WAH! And I was about to close the deal!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'markop_statue_observation',
        order: 20281,
        characterKey: 'markop',
        timestamp: '45 minutes ago',
        content: `The garden walkway is overgrown, almost hostile. Found a statue of the Oracle, but its face has been completely worn away by time or malice. A fitting monument for a man who seems to have lost himself.`,
        likes: 211,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'eager_too_heavy_monster',
        order: 20280,
        characterKey: 'eager',
        timestamp: '50 minutes ago',
        content: `I tried to pick up one of the rust monster bodies for Ryan to study but... it's SO heavy! It's like it's made of solid lead! And my arms feel all tingly now. Weird.`,
        likes: 119,
        comments: [
            { characterKey: 'ryan', text: 'Fascinating. Perhaps its biology is silicon or iron-based.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'archie_orange_t',
        order: 20279,
        characterKey: 'archie',
        timestamp: '52 minutes ago',
        content: `Morning, Orange T.`,
        likes: 478,
        comments: [
            { characterKey: 'self_reflection_oracle', text: '...' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'fawful_amused_by_breakfast',
        order: 20278,
        characterKey: 'fawful',
        timestamp: '55 minutes ago',
        content: `I HAVE CHORTLES! The fools eat monsters for breakfast! And then their teeth rust! It is a buffet of foolishness, a salad of stupidity! My own evil plans have much better catering!`,
        likes: 689,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'bowser_rust_teeth',
        order: 20277,
        characterKey: 'bowser',
        timestamp: '58 minutes ago',
        content: `...oops. My magnificent teeth... they feel... crunchy. And orange. This is NOT an improvement.`,
        likes: 541,
        comments: [
            { characterKey: 'king_k_rool', text: 'Keheheh! Having some dental trouble, are we? Perhaps you should try a banana instead!' },
            { characterKey: 'bowser', text: 'SHUT UP, CROC-FACE!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'dan_warns_bowser_food',
        order: 20276,
        characterKey: 'dan',
        timestamp: '1 hour ago',
        content: `Stop. That’s not food — that’s poison. It's the rust monster from last night.`,
        likes: 315,
        comments: [
            { characterKey: 'bowser', text: 'It looked like pork!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'clueless_toad_cook',
        order: 20275,
        characterKey: 'generic_toad',
        timestamp: '1 hour ago',
        content: `Breakfast is served! Found some delicious-looking fresh meat in the kitchen! A bit tough to cut, but I'm sure it's delicious! Come and get it!`,
        likes: 45,
        comments: [
            { characterKey: 'remi', text: 'Is that... clicking?' },
            { characterKey: 'dan', text: 'Wait! DON\'T EAT THAT!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'humpik_ready_for_breakfast',
        order: 20274,
        characterKey: 'humpik',
        timestamp: '1 hour ago',
        content: `GWAH! Time for breakfast! I could eat a whole rust monster! ...Wait.`,
        likes: 240,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'markop_shadow_fight',
        order: 20273,
        characterKey: 'markop',
        timestamp: '1 hour ago',
        content: `Something is stirring in the west hall. A shadow with claws. The Oracle is here as well, debating it. This house does not rest.`,
        likes: 199,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'remi_ignores_fight_for_food',
        order: 20272,
        characterKey: 'remi',
        timestamp: '1 hour ago',
        content: `Saw the centaur guy fighting a literal shadow monster in the hallway. We decided breakfast was more important. I'm very hungry.`,
        likes: 489,
        comments: [
            { characterKey: 'markop', text: 'A little help would have been appreciated.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'toad_smashes_door',
        order: 20271,
        characterKey: 'generic_toad',
        timestamp: '1 hour ago',
        content: `The door was locked so I smashed it open with my mace! Problem solved! Time for breakfast!`,
        likes: 130,
        comments: [
            { characterKey: 'remi', text: '...Thanks, I guess.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'remi_locked_in',
        order: 20270,
        characterKey: 'remi',
        timestamp: '1 hour ago',
        content: `Woke up. The door is locked. From the outside. My roommate is telling me about breakfast. I can't get out. This isn't creepy at all.`,
        likes: 250,
        comments: [
            { characterKey: 'waluigi', text: 'WAH! A classic haunted house trope! Magnificent!' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'broker_greenhouse_market',
        order: 20269,
        characterKey: 'the_broker',
        timestamp: '2 hours ago',
        content: `Market Correction: Reports of a significant structural failure at Raventree Manor. Insurance futures are plummeting. Demand for rust-proofing alchemy and wyvern rentals, however, is at an all-time high. My inbox is open for premium salvage rights.`,
        likes: 512,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'kamek_observes_greenhouse',
        order: 20268,
        characterKey: 'kamek',
        timestamp: '2 hours ago',
        content: `The Oracle's manor is burning. Lord Bowser is inside. As is the purple fool, the three-eyed one, and a host of other variables. This is either a disaster or a magnificent opportunity to remove several thorns at once. I shall continue to observe.`,
        likes: 388,
        comments: [
            { characterKey: 'bowser', text: 'I BETTER NOT BE ONE OF THE THORNS YOU WANT REMOVED, KAMEK.' }
        ],
        rumorId: 'greenhouse_inferno'
    },
    {
        id: 'penny_greenhouse_fire',
        order: 20267,
        characterKey: 'detective_penny',
        timestamp: '3 hours ago',
        content: `Case Notes: Receiving reports of a major fire at Raventree Manor, a location already linked to a decades-old cold case. Waluigi, Bowser, and Archie Miser are all reported to be present. That's not a party, that's a list of primary suspects for... well, everything. This requires a closer look. #GreenhouseInferno`,
        likes: 412,
        comments: [],
        rumorId: 'greenhouse_inferno'
    },   
    {
        id: 'dan_scavenging_vote_win',
        order: 10252,
        characterKey: 'dan',
        timestamp: 'Just Now',
        content: `The proposal has passed. Thank you. We will not send our people out to die in small, scattered groups. Our strength is in our numbers and our caution. From now on, we move as one, protected and prepared. No more needless sacrifices.`,
        likes: 412,
        comments: [
            { characterKey: 'toad_lee', text: 'The correct decision was made. We will enforce this.' },
            { characterKey: 'ryan', text: 'Wisdom has prevailed.' }
        ],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'archie_scavenging_vote_loss',
        order: 10251,
        characterKey: 'archie',
        timestamp: '2 minutes ago',
        content: `So the consensus is... 'be careful'. Groundbreaking. My plan was faster. But fine. I'll play along with the 'overwhelming force' strategy. Don't come crying to me when it takes a month to find one rusty wrench.`,
        likes: 255,
        comments: [
            { characterKey: 'bones', text: 'More walking for less profit. Figures.' }
        ]
    },
    {
        id: 'speaker_l_vote_reaction',
        order: 10250,
        characterKey: 'speaker_l',
        timestamp: '5 minutes ago',
        content: `The First Cohort stands with Dan's proposal. The preservation of our people is paramount. However, our secondary mandate remains: these expeditions will gather intelligence on our enemies. Safety will serve the cause of justice.`,
        likes: 350,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'generic_toad_scavenging_relief',
        order: 10249,
        characterKey: 'generic_toad',
        timestamp: '10 minutes ago',
        content: `Thank goodness! I was so scared I'd be picked for one of those small scouting groups. Going out in a big, well-armed team sounds so much safer. It feels like we're finally thinking about protecting each other again.`,
        likes: 288,
        comments: []
    },
    {
        id: 'roger_vote_efficiency',
        order: 10248,
        characterKey: 'roger',
        timestamp: '12 minutes ago',
        content: `Analysis complete: The previous resource acquisition model resulted in an unacceptable rate of personnel attrition. Dan's new protocol improves operational security and minimizes inefficient losses. It is the logistically superior strategy. I endorse it fully.`,
        likes: 198,
        comments: []
    },    
    {
        id: 'rodger_traitor_reveal',
        order: 10239,
        characterKey: 'rodger',
        timestamp: 'Just Now',
        content: `Creek found this. During the surgery. It was on him the whole time. He was one of them. He was a plant. All of this... it was a setup.`,
        image: 'legion_insignia_card.png',
        image_alt: "A small, blood-stained iron card bearing the insignia of the Iron Legion.",
        likes: 899,
        comments: [ { characterKey: 'toad_lee', text: '...Betrayed.' }, { characterKey: 'ryan', text: 'I KNEW IT. I KNEW SOMETHING WAS WRONG.' }, { characterKey: 'dan', text: 'What?! No...' } ],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'rodger_creek_surgery',
        order: 10238,
        characterKey: 'rodger',
        timestamp: '5 minutes ago',
        content: `We got him to Creek. We had to trade almost everything we had left. The operation is... happening. I can't watch. The sounds are bad enough.`,
        likes: 310,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'bones_calls_out_lt',
        order: 10237,
        characterKey: 'bones',
        timestamp: '10 minutes ago',
        content: `Oh, I'm sorry, is your shiny cape getting crumpled, 'Capey'? You Legion types are all the same. All authority, no substance. Get over yourself.`,
        likes: 560,
        comments: [ { characterKey: 'colonel_vera_steelstorm', text: 'Insubordination will be noted, criminal.' } ],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'purple_t_my_house',
        order: 10236,
        characterKey: 'purple_t',
        timestamp: '12 minutes ago',
        content: `GET OUT OF MY HOUSE! THIS IS MY SHIP! MINE! YOU HAVE NO JURISDICTION HERE, LEGION SCUM! GET OUT!`,
        likes: 411,
        comments: [ { characterKey: 'generic_toad', text: 'Uh... I thought this was the Vigilance? When did he get a house?' } ],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'toad_lee_return_to_ship',
        order: 10235,
        characterKey: 'toad_lee',
        timestamp: '15 minutes ago',
        content: `We have returned to the airship. It is filled with steam and Iron Legion soldiers calling themselves the 'Royal Service'. They are... cooking. The situation remains volatile.`,
        likes: 345,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'oracle_offers_rooms',
        order: 10234,
        characterKey: 'self_reflection_oracle',
        timestamp: '20 minutes ago',
        content: `Such a trying evening for you all. Do not fret. Though this estate has proven... inhospitable, I have several others. A lovely summer home by the sea, perhaps? The reflections there are much calmer.`,
        likes: 720,
        comments: [ { characterKey: 'ryan', text: 'WE\'RE LEAVING.' } ],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'rodger_negotiation',
        order: 10233,
        characterKey: 'rodger',
        timestamp: '22 minutes ago',
        content: `We got him back. We talked them down. One of the soldiers kicked him down the stairs as a final 'parting gift'. He's hurt bad, but he's with us. We're getting out of here.`,
        likes: 418,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'ryan_aftermath_of_darkness',
        order: 10232,
        characterKey: 'ryan',
        timestamp: '25 minutes ago',
        content: `The light is back. The two Archies are gone, locked behind a door. We're all bruised. A few of us are laughing, I think from shock. That was... insane. We need to go. NOW.`,
        likes: 388,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'toad_lee_blind_chaos',
        order: 10231,
        characterKey: 'toad_lee',
        timestamp: '28 minutes ago',
        content: `Darkness. Complete and total. I can hear the clang of weapons hitting metal, the splintering of wood. We are fighting shadows. This is madness.`,
        likes: 350,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'ryan_unleashes_darkness',
        order: 10230,
        characterKey: 'ryan',
        timestamp: '30 minutes ago',
        content: `ENOUGH! You want to play games in the dark?! FINE! LET'S PLAY!`,
        likes: 512,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'purple_t_defends_waluigi_book',
        order: 10229,
        characterKey: 'purple_t',
        timestamp: '32 minutes ago',
        content: `Don't you talk about Waluigi's book! It was a very cool book! You wouldn't understand!`,
        likes: 210,
        comments: [ { characterKey: 'waluigi', text: 'WAH! My book collection IS cool! Full of magnificent schemes and stylish poses!' } ],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'rodger_interrogation_fail',
        order: 10228,
        characterKey: 'rodger',
        timestamp: '35 minutes ago',
        content: `This interrogation is a joke. They ask about the staff, they ask about Archie. They don't care about the toad who was just eaten by a robot. And now L is screaming at Ryan about a book. We're losing it.`,
        likes: 391,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'wario_business_update',
        order: 10227,
        characterKey: 'wario',
        timestamp: '40 minutes ago',
        content: `Observing the Iron Legion's... methods. Inefficient, but they get results. The temporal flux in this mansion is a potential gold mine. Releasing their prisoners is bad for business. Gotta see this play out. #WarioInvestigates`,
        likes: 555,
        comments: [ { characterKey: 'detective_penny', text: 'Wario. Your involvement is noted. We will be having a discussion about your business practices.' } ],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'kamek_observes_wario',
        order: 10226,
        characterKey: 'kamek',
        timestamp: '42 minutes ago',
        content: `Mr. Wario makes an appearance, aligned with the Iron Legion. A curious alliance. Greed and Order, hand-in-hand. The political landscape of this realm grows more convoluted, and thus, more interesting.`,
        likes: 412,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'toad_lee_library',
        order: 10225,
        characterKey: 'toad_lee',
        timestamp: '45 minutes ago',
        content: `We tracked them to the library. The Legion has Bones. They speak of bats, but the creatures in the shelves are... something else. Then a new player arrives. A greedy man in yellow. Wario.`,
        likes: 401,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'ryan_robot_eats_toad',
        order: 10224,
        characterKey: 'ryan',
        timestamp: '48 minutes ago',
        content: `He tried to run. The robot Archie just... opened up. And pulled him inside. There was a sound. I'm going to be sick. And one of our own just HELPED the Legion grab Bones. We have a traitor.`,
        likes: 489,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'iron_legion_report',
        order: 10223,
        characterKey: 'iron_legion_commando',
        timestamp: '50 minutes ago',
        content: `Primary target 'Orange Toad' not present. Have secured secondary targets for interrogation. Resistance encountered and suppressed. The mansion is under Legion control.`,
        likes: 640,
        comments: [ { characterKey: 'general_marcus_ironhand', text: 'Proceed. Extract the information. By any means necessary.' } ],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'bones_dream',
        order: 10222,
        characterKey: 'bones',
        timestamp: '52 minutes ago',
        content: `Everyone wants to BE something. A hero, a leader, a king. Me? My only dream is becoming Archie Miser. And I'm a hell of a lot closer than this cheap copy.`,
        likes: 515,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'oracle_farewell',
        order: 10221,
        characterKey: 'self_reflection_oracle',
        timestamp: '55 minutes ago',
        content: `Farewell. I’ll be reborn. This life is too depressing. May your Archie disappear without a trace.`,
        likes: 910,
        comments: [ { characterKey: 'toad_lee', text: 'What did he mean by that?' } ],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'ryan_oracle_broken',
        order: 10220,
        characterKey: 'ryan',
        timestamp: '58 minutes ago',
        content: `We already did this! He's broken! The Oracle is stuck in a loop, asking every single one of us the same stupid joke. This isn't a game, it's a glitch. I've had enough of this.`,
        likes: 423,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'toad_lee_joke_success',
        order: 10219,
        characterKey: 'toad_lee',
        timestamp: '1 hour ago',
        content: `The Oracle repeated his query. This time, I understood the premise. 'The C.' His satisfaction was... unsettlingly immense. Now he is asking the others.`,
        likes: 388,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'rodger_fake_staff',
        order: 10218,
        characterKey: 'rodger',
        timestamp: '1 hour ago',
        content: `The clone is back, and now he has a 'staff'. It's a fake. Too clean, no scratches. It's brand new. Another lie. What is the Oracle's game here?`,
        likes: 440,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'ryan_robot_archie',
        order: 10217,
        characterKey: 'ryan',
        timestamp: '1 hour ago',
        content: `WHAT WAS THAT?! The Oracle clapped and a ROBOT ARCHIE walked out of the other room. A ROBOT. It just ate our food. This is the weirdest, most terrifying thing I have ever seen.`,
        likes: 531,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'rodger_demands_proof',
        order: 10216,
        characterKey: 'rodger',
        timestamp: '1 hour ago',
        content: `This is a trap. L thinks the food is poisoned and for once I agree with him. I told the Oracle. If it's safe, HE can eat it. Take a piece from every plate. Let's see how confident he is then.`,
        likes: 478,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'purple_t_accuses',
        order: 10215,
        characterKey: 'purple_t',
        timestamp: '1 hour ago',
        content: `You're all fools! Sitting down to eat with this... thing! The food is obviously poisoned! You're so weak, so desperate for a moment of peace you'd swallow your own doom!`,
        likes: 313,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'toad_lee_clone_lies',
        order: 10214,
        characterKey: 'toad_lee',
        timestamp: '1 hour ago',
        content: `We have questioned the duplicate. It claims the staff was given to Green T. A falsehood. Its voice trembled. It cannot maintain the deception under pressure.`,
        likes: 415,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'ryan_fireball',
        order: 10213,
        characterKey: 'ryan',
        timestamp: '1 hour ago',
        content: `SOMEONE WHO LOOKS LIKE ARCHIE JUST WALKED IN AND THREW A FIREBALL AT US. It's not him. It's a copy. His eyes are empty.`,
        likes: 498,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'rodger_bad_feeling',
        order: 10212,
        characterKey: 'rodger',
        timestamp: '1 hour ago',
        content: `Sitting in the dining hall. There's a carving on one of the chairs: 'Beware the T.' And every single candle is lit. It's too bright. This isn't a dinner. It's an interrogation.`,
        likes: 450,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'oracle_pirate_joke',
        order: 10211,
        characterKey: 'self_reflection_oracle',
        timestamp: '1 hour ago',
        content: `What’s a pirate’s favorite letter? ... Anyone? ... The C. It's the C. You see, because of the... sea.`,
        likes: 680,
        comments: [ { characterKey: 'toad_lee', text: 'I do not understand the reference.' } ],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'toad_lee_arrival',
        order: 10210,
        characterKey: 'toad_lee',
        timestamp: '1 hour ago',
        content: `We have entered the Shadeward Mansion in search of Archie. We have not found him. We have found the Oracle. He is... unnerving. His attempts at humor are not successful.`,
        likes: 422,
        comments: [],
        rumorId: 'shadeward_mansion_raid'
    },
    {
        id: 'waluigi_manor_gloat_2',
        order: 10076,
        characterKey: 'waluigi',
        timestamp: 'Just Now',
        content: `WAH! Leaving these losers to their squabbling. Bowser and I are 'relocating' some well-deserved treasures to my magnificent new property: Raventree Manor! Time for some peace and quiet... and looting! WAH-HA-HA!`,
        likes: 133,
        comments: [],
        rumorId: 'bowser_looting_manor'
    },
    {
        id: 'toad_lee_splinter_groups',
        order: 10075,
        characterKey: 'toad_lee',
        timestamp: '5 minutes ago',
        content: `The crew splinters. 'First Cohort', 'Originals'... Dan falters under the pressure. This is not the unity we swore a vow for. We are losing ourselves.`,
        likes: 289,
        comments: [],
        rumorId: 'dan_training'
    },
    {
        id: 'green_t_calls_out_dan',
        order: 10074,
        characterKey: 'green_t',
        timestamp: '8 minutes ago',
        content: `To the so-called 'heroes' of the Vigilance: Your leader is broken! Dan played with a power he couldn't handle, and now he's hiding the truth from all of you! DANGER IS COMING, and he's too weak to face it! Open your eyes!`,
        likes: 451,
        comments: [ { characterKey: 'dan', text: "..." } ],
        rumorId: 'imposter_dan_revelation'
    },
    {
        id: 'waluigi_manor_gloat',
        order: 10073,
        characterKey: 'waluigi',
        timestamp: 'Just Now',
        content: `WAH! My new manor is magnificent! A little dusty, maybe a few ghosts, but it has character! Perfect for storing... 'valuables'. Waluigi is moving up in the world!`,
        likes: 85,
        comments: [],
        rumorId: 'bowser_looting_manor'
    },
    {
        id: 'toad_lee_imposes_order',
        order: 10072,
        characterKey: 'toad_lee',
        timestamp: '5 minutes ago',
        content: `Enough! The Vow was sworn. We are one cohort. We will have order. Anyone who tries to splinter this group will answer to me. And to my axe.`,
        likes: 241,
        comments: [ { characterKey: 'bones', text: "Big words. Let's see if you can back 'em up." } ],
        rumorId: 'dan_training'
    },
    {
        id: 'generic_toad_splinter_groups',
        order: 10071,
        characterKey: 'generic_toad',
        timestamp: '15 minutes ago',
        content: `This is chaos! Dan is just... sitting there. Everyone's shouting, forming their own little groups. The 'First Cohort' this, the 'Originals' that... I thought we were all in this together! We need a real leader, not someone overwhelmed by it all.`,
        likes: 188,
        comments: [ { characterKey: 'dan', text: "..." } ],
        rumorId: 'dan_training'
    },
    {
        id: 'detective_penny_vigilance_standoff',
        order: 187,
        characterKey: 'detective_penny',
        timestamp: 'Just Now',
        content: `Case notes: 'Mr. Wario' captured by Imperial forces aboard the 'Vigilance'. Subject Archie Miser also detained. The same airship previously involved in the 'ghostly energy' incident. Coincidence? Unlikely. This web is more tangled than I thought. The Empire's involvement complicates things, but also presents an opportunity to access their files on Wario. #CaseOfTheGreedyGhost`,
        likes: 255,
        comments: [ { characterKey: 'master_goodstyle', text: 'May justice be swift and stylish, Detective.' } ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'lario_captured',
        order: 186,
        characterKey: 'lario',
        timestamp: '5 minutes ago',
        content: `Great. Just great. First I get betrayed by that purple cheat, then I get captured by these tin-can soldiers. Now I'm stuck in some Imperial holding cell that doesn't even have a decent workbench! This is a violation of my... goblin rights, or something! I demand a lawyer! And a sandwich!`,
        likes: 198,
        comments: [ { characterKey: 'captain_syrup', text: 'Looks like your luck has finally run out, grease monkey. Enjoy the imperial hospitality.' } ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'regal_empire_standoff_statement',
        order: 185,
        characterKey: 'regal_empire_delegate',
        timestamp: '15 minutes ago',
        content: `Let it be known that the criminals Archie Miser and 'Mr. Wario' are now in the custody of the Regal Empire. The rogue airship 'Vigilance' has been secured. This decisive action reaffirms the Empire's commitment to eradicating chaos and maintaining order across the realms. Justice will be swift.`,
        likes: 890,
        comments: [ { characterKey: 'general_marcus_ironhand', text: 'A victory for order. As it should be.' } ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'broker_market_update_standoff',
        order: 184,
        characterKey: 'the_broker',
        timestamp: '30 minutes ago',
        content: `Market update: Key assets (Miser, Wario, 'Vigilance') are now off-board. Expect short-term volatility in the chaos-futures market. Bounties are temporarily suspended. Information on Imperial interrogation techniques is now trading at a premium. My inbox is open.`,
        likes: 412,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'unchained_archie_capture',
        order: 183,
        characterKey: 'free_name_sarah',
        timestamp: '45 minutes ago',
        content: `They have caged a storm. The Empire thinks capturing Archie Miser is a victory, but they have only made him a martyr. His chaos inspired many who were too afraid to act. Ideas, unlike people, cannot be imprisoned.`,
        likes: 678,
        comments: [ { characterKey: 'young_wolf_kara', text: 'Well said. This only proves the Empire is afraid of anyone who won\'t bend the knee.' } ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'janna_brightspark_iron_binding',
        order: 182,
        characterKey: 'janna_brightspark',
        timestamp: '1 hour ago',
        content: `Fascinating! The Iron Legion has developed a field-applicable 'Iron Binding' seal capable of suppressing an artifact's power output by an estimated 50%. The energy resonance is crude, but effective. I must acquire a schematic! For science, of course!`,
        likes: 310,
        comments: [ { characterKey: 'archmage_theron', text: 'You will do no such thing, Janna. That is Legion military technology and meddling with it is a violation of the Accords.' } ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'theron_archie_capture',
        order: 181,
        characterKey: 'archmage_theron',
        timestamp: '1 hour ago',
        content: `The anarchist Archie Miser is finally in Imperial custody. Good. His flagrant disregard for the laws of magic and man is a cancer. Let the Empire deal with him. The Mages' Guild will be watching to ensure true justice is served.`,
        likes: 540,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'fawful_gloats_at_siege',
        order: 180,
        characterKey: 'fawful',
        timestamp: '2 hours ago',
        content: `I HAVE CHORTLES! The mushroom fools outside my magnificent castle fling their pathetic rocks and angry words! It is like being tickled by furious, tiny babies! My walls are strong! My minions are many! My victory is a sandwich of absolute certainty!`,
        likes: 715,
        comments: [ { characterKey: 'captain_toadette', text: 'Laugh while you can, monster. Every chortle is a moment you steal from the true rulers of this kingdom. Your time is short.' } ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'mistveil_scout_report',
        order: 179,
        characterKey: 'mistveil',
        timestamp: '3 hours ago',
        content: `Scouting report: Toad Town is a fortress now. Every street corner has a Loyalist checkpoint. Civilians are being... relocated. It's grim, but it's necessary. The castle is the objective. All else is secondary. For the Princess.`,
        likes: 388,
        comments: [ { characterKey: 'dewdrop', text: 'Stay safe out there, brother.' } ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'dewdrop_medic_report',
        order: 178,
        characterKey: 'dewdrop',
        timestamp: '4 hours ago',
        content: `The field hospital is full again. This new strategy... this war of attrition... the cost is high. So many wounded. But their resolve is strong. They believe in the Captain. I just pray their faith is enough.`,
        likes: 412,
        comments: [ { characterKey: 'dan', text: 'If there is anything we can do to help, please let us know. No one should suffer alone.' } ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'krool_gloats_dk',
        order: 177,
        characterKey: 'king_k_rool',
        timestamp: '5 hours ago',
        content: `First their oafish delegate causes a global financial crisis, and now their leader is making desperate calls to his enemies? The DK Crew is falling apart at the seams! My Kremling Krew will be there to pick up the pieces... and the bananas! Keheheheh!`,
        likes: 399,
        comments: [ { characterKey: 'donkey_kong', text: 'Keep laughing, K. Rool. You\'ll see what happens when you mess with the Kongs.' } ],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'cybernetic_collective_analysis',
        order: 176,
        characterKey: 'cybernetic_collectives',
        timestamp: '6 hours ago',
        content: `[ANALYSIS]: Probability of organic species self-destructing due to internal political schisms and resource disputes remains consistently high. The 'Lanky Kong Incident' has increased the probability of regional economic collapse by 4.7%. Fascinating data.`,
        likes: 666,
        comments: [],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'donkey_kong_simple_post',
        order: 175,
        characterKey: 'donkey_kong',
        timestamp: '7 hours ago',
        content: `Headache. Need bananas.`,
        likes: 1530,
        comments: [ { characterKey: 'chunky_kong', text: 'I\'ll bring you some, DK.' } ]
    },
    {
        id: 'toad_town_citizen_complaint',
        order: 174,
        characterKey: 'generic_toad',
        timestamp: '8 hours ago',
        content: `This is ridiculous! First the mayor gets whacked, now Toadette's fanatics are marching in the streets imposing a curfew! I can't even get to the shop for a decent turnip! I didn't vote for this!`,
        likes: 789,
        comments: [ { characterKey: 'chancellor_toadsworth', text: 'The Regency does not condone this occupation. We are working on a diplomatic solution.' }, { characterKey: 'skull_cap_murphy', text: 'See? Rulers are all the same. If ya want real freedom, ya need to break some heads.' } ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'skull_cap_murphy_opportunity',
        order: 173,
        characterKey: 'skull_cap_murphy',
        timestamp: '9 hours ago',
        content: `The Loyalists and the Regency are too busy squabbling over who gets to be in charge. Good. While they're distracted, the Mushroom Skulls will be expanding our turf. More chaos means more business for us.`,
        likes: 210,
        comments: [],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'koopa_grunt_post',
        order: 172,
        characterKey: 'koopa_troop',
        timestamp: '10 hours ago',
        content: `Heard the pink fanatics are laying siege to the castle. Ha! Let 'em! The green weirdo and the mushroom-heads can beat each other up. We'll just march in and take the place back when they're both exhausted. Long live King Bowser!`,
        likes: 450,
        comments: []
    },
    {
        id: 'dwarf_observes_vigilance',
        order: 171,
        characterKey: 'kingdoms_of_the_dwarves_wh',
        timestamp: '11 hours ago',
        content: `The lads from the Engineer's Guild are all in a tizzy about this 'Vigilance' airship. A flying mountain of metal, they say. Impressive, I suppose. But can it withstand a proper grudge-thrower? I doubt it. Nothing beats good old Dwarf-forged steel.`,
        likes: 620,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'kivotos_millennium_analysis',
        order: 170,
        characterKey: 'millennium_science_school',
        timestamp: '12 hours ago',
        content: `[Veritas Leak]: Scans of the 'Vigilance' airship's energy signature are fascinating. The power source is not based on any known reactor technology. It appears to be an unstable fusion of arcane and quantum mechanics. The potential for catastrophic failure is calculated at 87.4%. We must acquire it for study.`,
        likes: 730,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'warhammer_empire_engineer_scoffs',
        order: 169,
        characterKey: 'the_empire',
        timestamp: '13 hours ago',
        content: `The Imperial Engineers' Guild has reviewed the schematics of this 'Vigilance'. While its power source is unorthodox, its structural integrity is laughable. A single Hellfire Rocket Volley would tear it asunder. Such primitive designs are no threat to the Empire of Man.`,
        likes: 850,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'waluigi_makes_fun',
        order: 168,
        characterKey: 'waluigi',
        timestamp: '14 hours ago',
        content: `WAHAHAHA! The Empire captures a few fools and thinks they've won! Captain Syrup grabs the staff and it doesn't even work! And Archie gets caught! So much failure! So much incompetence! It's a beautiful symphony of failure, and I, Waluigi, am the conductor! WAH!`,
        likes: 999,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'hactivist_iron_binding',
        order: 167,
        characterKey: 'hacktivist_collectives',
        timestamp: '15 hours ago',
        content: `The Iron Legion's 'Iron Binding' is just a glorified DRM lock. A crude piece of proprietary magitek designed to restrict the flow of power. Information wants to be free. So does energy. #JailbreakTheStaff`,
        likes: 777,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'pokemon_trainer_reacts',
        order: 166,
        characterKey: 'trainer_guild',
        timestamp: '16 hours ago',
        content: `Wait, so there are other worlds with... flying ships? And magic? And no Pokémon? That sounds really weird. Can you catch the magic? Does it have a type? I have so many questions.`,
        likes: 821,
        comments: []
    },
    {
        id: 'commander_valerius_vigilance',
        order: 165,
        characterKey: 'commander_valerius',
        timestamp: '17 hours ago',
        content: `The crew of the 'Vigilance' were shaping up to be lucrative, if chaotic, clients. Their current Imperial entanglement is bad for business. Hopefully, they resolve their legal issues soon. The Gilded Gryphon Company values reliable partners.`,
        likes: 340,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'chief_thornpaw_cryptic_post',
        order: 164,
        characterKey: 'chief_thornpaw',
        timestamp: '18 hours ago',
        content: `A cage of steel holds a storm. A seal of iron holds a star. The world tips on the edge of a choice made in a city of stone. The spirits are watching.`,
        likes: 560,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'embercap_returns',
        order: 163,
        characterKey: 'embercap',
        timestamp: '1 day ago',
        content: `The reports of my death were greatly exaggerated. I have seen the enemy's heart. There is no room for mercy. No more half-measures. Captain Toadette's path is the only path to justice. We will have our victory, or we will have our vengeance.`,
        likes: 690,
        comments: [ { characterKey: 'captain_toadette', text: 'Welcome back, Commander. We have work to do.' } ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'archie_jumped_on_ship',
        order: 162,
        characterKey: 'archie',
        timestamp: '1 day ago',
        content: `So, I was just minding my own business, admiring the structural integrity of a ventilation shaft, when I got jumped by a group of Iron Hand... or was it Iron Legion?... goons. Same difference, right? Stuffed shirts with big hammers. 

They were going on about "stories of the third eye" which, okay, flattering. But the weird part? One of them kept muttering about wanting "Toad Soup." Seriously. On a spaceship. Weirdos.`,
        likes: 184,
        comments: [
            { characterKey: 'toad_lee', text: "Toad Soup? We will not allow any harm to come to our people. Stay vigilant, brothers." },
            { characterKey: 'general_marcus_ironhand', text: "The Iron LEGION does not employ 'goons.' Our soldiers are disciplined warriors. If this incident occurred, it was not by my command or the action of my men. Perhaps you are confusing us with common street thugs." },
            { characterKey: 'boss_knuckles', text: "You mean the Iron FISTS, you three-eyed freak. And that wasn't a story, it was a down payment. Next time, we're collecting more than just stories. The bounty on your head is still active." },
            { characterKey: 'dan', text: "Archie, are you okay? That sounds terrifying." }
        ]
    },
    {
        id: 'waluigi_toad_focus_update',
        order: 161,
        characterKey: 'waluigi',
        timestamp: '1 day ago',
        content: `WAH! HEY, THREE-EYES (@Archie)! An update on your little mushroom projects!

That hero-kid, **Dan**, held a 'council'. So important! He's their little leader now, making them feel all hopeful. The big one, **Toad Lee**, has been teaching them how to hold an axe without chopping their own feet off. Progress!

The quiet one, **Ryan**, is making sparks with his fingers. He calls it 'magic practice'. Cute. The jumpy one, **Eager**, ran around and drew a map of the cargo bay. Probably on a napkin.

The one with the gun, **Roger**, has organized all their junk into neat little piles. He calls it a 'barter system'. At least he's not losing their only wrench. And the ugly one, **Bones**, is teaching them card games. A useful skill! They might learn how to cheat, which is even better!

They're getting organized. This could be useful for my magnificent plans! WAH-HA-HA!`,
        likes: 123,
        comments: [
            { characterKey: 'dan', text: "We're not projects! We're building a community and a new life for ourselves!" }
        ]
    },
    {
        id: 'standoff_at_capital_news',
        order: 160,
        characterKey: 'wah_media_collective',
        timestamp: '1 day ago',
        content: `**STANDOFF IN THE SKIES! Regal Empire Forces Board Rogue Airship 'Vigilance' Over Capital! High-Profile Arrests Made!**

A tense standoff concluded today as the rogue airship 'Vigilance' was boarded by Regal Empire forces, identified as elite Crown Intelligence agents. The operation, which took place in the skies directly over the Imperial Capital, resulted in the capture of the notorious smuggler 'Mr. Wario' and the surprising surrender of the anarchist Archie Miser. 

Eyewitness reports from the ship are chaotic, detailing a fierce firefight, the brief appearance of the pirate Captain Syrup, and a struggle over the airship's powerful, artifact-based power source. The 'Vigilance' has since landed at the capital's military spaceport and is currently under heavy guard. The fate of its renegade crew remains uncertain.`,
        image: 'newspaper_airship.png',
        image_alt: "The Vigilance airship surrounded by smaller Imperial vessels.",
        likes: 1854,
        comments: [
            { characterKey: 'generic_toad', text: "Finally! Maybe now we can have some peace and quiet!" },
            { characterKey: 'the_broker', text: "Several high-value assets just went off the board. This will have... interesting effects on the market." }
        ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'steelstorm_standoff_post',
        order: 159,
        characterKey: 'colonel_vera_steelstorm',
        timestamp: '1 day ago',
        content: "A successful joint operation between Crown Intelligence and the Iron Legion has neutralized a significant threat over the capital. Key assets were secured, and several high-value targets, including the anarchist Archie Miser and the smuggler 'Mr. Wario', are in custody. Order will be maintained.",
        likes: 562,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: "A victory for the Empire. Let chaos reign no more." }
        ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'waluigi_iron_binding_post',
        order: 158,
        characterKey: 'waluigi',
        timestamp: '1 day ago',
        content: "WAH! These Iron Legion goons! No style! They slap some rusty magic on my ship's power source and call it 'tactics'? It's a cheap parlor trick! It's like putting a bumper sticker on a masterpiece! An insult to my genius!",
        likes: 210,
        comments: [
            { characterKey: 'lario', text: "Hey! I could have fixed it better! And for a reasonable price!" }
        ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'syrup_standoff_post',
        order: 157,
        characterKey: 'captain_syrup',
        timestamp: '1 day ago',
        content: "Got my hands on the famous staff for a moment. All that fuss for a glorified glowstick that doesn't even work! And then those tin soldiers slap their ugly binding on it. Amateurs. The real prize was the chaos anyway.",
        likes: 315,
        comments: [
            { characterKey: 'first_mate_jones', text: "We'll find a better prize, Captain. We always do." }
        ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'toadette_post_3',
        order: 150,
        characterKey: 'captain_toadette',
        timestamp: '2 days ago',
        content: `The Onyx Hand's shadow assassins have done what the Regency was too weak to do. The mayor was corrupt, a rot at the heart of our kingdom. With him gone, we have seized this moment. Toad Town is now under Loyalist control. This is not an occupation; it is a liberation. From here, we will build our base and begin the true war. For the Princess!`,
        likes: 412,
        comments: [
            { characterKey: 'mistveil', text: "For the Princess! Whatever it takes." },
            { characterKey: 'chancellor_toadsworth', text: "Captain! You are taking advantage of a murder to impose martial law! This is madness!" }
        ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'embercap_post_1',
        order: 149,
        characterKey: 'embercap',
        timestamp: '2 days ago',
        content: `I had my doubts. I questioned the path. But I have seen the depths of the betrayal we face. The enemy wears a friendly smile and offers you a potion before trying to steal your king. There is no room for half-measures. Captain Toadette is right. The path to justice is hard, but we will walk it. We will be the ones to end this.`,
        likes: 355,
        comments: [
            { characterKey: 'dewdrop', text: "A hard path, brother, but a necessary one. We will tend to the wounds, you lead the charge." },
            { characterKey: 'chief_thornpaw', text: "I witnessed your death and your return, young soldier. The path you now walk is heavy with the scent of both steel and sorrow. Tread carefully." }
        ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'toadtown_citizen_post_1',
        order: 148,
        characterKey: 'generic_toad',
        timestamp: '2 days ago',
        content: `The mayor is dead... murdered in his own home! Now there are Loyalist soldiers everywhere, talking about 'relocation'. What's happening to our town? I don't feel safe anymore. Who is in charge?`,
        likes: 620,
        comments: [
            { characterKey: 'dan', text: "Stay strong. Communities have to look after each other when leaders fail." }
        ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'kamek_post_toadtown',
        order: 147,
        characterKey: 'kamek',
        timestamp: '2 days ago',
        content: `The mushrooms are devouring each other. Fanatics versus bureaucrats, assassins in the shadows... it's a delightful spectacle. Let them bleed each other white. It will only make Lord Bowser's glorious return all the easier. Patience is a virtue.`,
        likes: 290,
        comments: [
            { characterKey: 'bowser', text: "Excellent. Let the appetizers fight amongst themselves." }
        ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'janna_post_spellbook',
        order: 146,
        characterKey: 'janna_brightspark',
        timestamp: '2 days ago',
        content: `Fascinating! A spellbook containing a variant of a soul-binding ritual, linked to the Onyx Hand, was recovered from the Toad Town incident. And the caster was a MAGE! The Conservators will be furious, but the data from this political application of advanced puppetry is invaluable! What a time to be alive!`,
        likes: 188,
        comments: [
            { characterKey: 'archmage_theron', text: "Janna, this is not 'data'. This is a grave breach of the Accords and a profound threat to stability. The Aegis Magi have been notified." }
        ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'cranky_post_2',
        order: 145,
        characterKey: 'cranky_kong',
        timestamp: '3 days ago',
        content: `Good grief! Now every Tom, Dick, and three-eyed weirdo has an opinion on Kong family matters! Back in my day, we didn't have 'post our problems on the WAH-whatever', we threw barrels at them until they went away! A much better system!`,
        likes: 420,
        comments: [],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'dk_post_2',
        order: 144,
        characterKey: 'donkey_kong',
        timestamp: '3 days ago',
        content: `Family business is family business. And right now, business is giving me a migraine. Outsiders should remember that we solve our own problems. The Kong way.`,
        likes: 550,
        comments: [
            { characterKey: 'chunky_kong', text: "I'm trying, DK." },
            { characterKey: 'king_k_rool', text: "Sounds like there's weakness in the ranks. Good to know." }
        ],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'diddy_post_2',
        order: 143,
        characterKey: 'diddy_kong',
        timestamp: '3 days ago',
        content: `And now the three-eyed freak thinks this is a joke too? Stay out of Kong family business, you walking talking powder keg.`,
        likes: 315,
        comments: [],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'archie_post_ride',
        order: 142,
        characterKey: 'archie',
        timestamp: '4 days ago',
        content: `Hello everyone, quite the bumpy ride wasn't it? How is everyone holding up?`,
        likes: 218,
        comments: [
            { characterKey: 'lario', text: "Holding up?! I'm holding a wrench and a grudge! That purple cheat left me for dead!" },
            { characterKey: 'dan', text: "A little shaken, but we're free. That's what matters. We're all still here." },
            { characterKey: 'bowser', text: "Bumpy? GWAHAHA! That's how I like it! A little chaos keeps everyone on their toes!" },
            { characterKey: 'waluigi', text: "Bumpy? That was a magnificent performance! A true work of art! You're welcome, everyone! WAH!" },
            { characterKey: 'fawful', text: "YOUR BUMPY RIDE IS A MERE PUDDLE OF DISCOMFORT NEXT TO THE OCEAN OF MY FURY! I HAVE BUMPINESS!" }
        ]
    },
    {
        id: 'cranky_post_1',
        order: 140,
        characterKey: 'cranky_kong',
        timestamp: '5 days ago',
        content: `Back in my day, we didn't have 'diplomatic incidents'. We had coconut guns. Solved problems a lot faster. This whole summit was a waste of good bananas. And Lanky... don't get me started on that good-for-nothing slacker!`,
        likes: 350,
        comments: [
            { characterKey: 'donkey_kong', text: "He's still family, Cranky." },
            { characterKey: 'diddy_kong', text: "Cranky's right, DK. Family or not, he's a liability." }
        ],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'leoncoeur_post_1',
        order: 139,
        characterKey: 'king_louen_leoncoeur',
        timestamp: '5 days ago',
        content: `I must confess, the recent 'summit' was a disheartening display. To see diplomacy devolve into such buffoonery is a sad day for all civilized realms. Where is the honor? Where is the chivalry? It seems in short supply in these lands.`,
        likes: 410,
        comments: [
            { characterKey: 'captain_toadette', text: "Honor is found on the battlefield, not in a talking shop with apes and monsters." },
            { characterKey: 'ambassador_callista', text: "A most unfortunate incident, your Majesty. I assure you it is not representative of all diplomatic efforts in this region." }
        ],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'kamek_post_1',
        order: 138,
        characterKey: 'kamek',
        timestamp: '6 days ago',
        content: `The pieces are moving on the board. While the lesser factions squabble over castles and politics, the true game is being played in the shadows. The King's will shall be done. A storm is gathering...`,
        likes: 275,
        comments: [
            { characterKey: 'bowser', text: "Excellent work, Kamek. Keep me updated. And make sure the storm has lots of lightning!" },
            { characterKey: 'the_broker', text: "Storms are good for business. They create opportunities." }
        ]
    },
     {
        id: 'toadette_post_2',
        order: 137,
        characterKey: 'captain_toadette',
        timestamp: '6 days ago',
        content: `The Regency falters! Fawful's madness defiles our sacred castle! Only the Peach Loyalists have the strength and the will to restore justice! Do not be swayed by the weak-willed words of politicians! Take up arms! For the Princess!`,
        likes: 388,
        comments: [
            { characterKey: 'mistveil', text: "For the Princess!" },
            { characterKey: 'chancellor_toadsworth', text: "Captain Toadette, your zealotry is creating more division, not less! We must be united!" }
        ]
    },
    {
        id: 'waluigi_post_2',
        order: 136,
        characterKey: 'waluigi',
        timestamp: '1 week ago',
        content: `WAH! Some people call it 'chaos'. I call it 'art'! The world is my canvas, and my paintbrush is a well-thrown Bob-omb! All you boring people with your 'plans' and 'order'... you just don't appreciate true genius!`,
        likes: 999,
        comments: [
            { characterKey: 'giggling_pete', text: "A masterpiece of a metaphor! The Jester applauds your stylish entropy!" }
        ]
    },
    {
        id: 'steelstorm_post_2',
        order: 135,
        characterKey: 'colonel_vera_steelstorm',
        timestamp: '1 week ago',
        content: "Victory is not achieved through tradition; it is achieved through efficiency. While the Old Guard debates protocol, the War-Forged act. Results are the only metric that matters on the battlefield. Adapt or be broken.",
        likes: 388,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: "Discipline IS efficiency, Colonel. Do not mistake reckless action for progress. The Hammer Code has guided us for a thousand years for a reason." }
        ]
    },
    {
        id: 'dan_post_freedom',
        order: 134,
        characterKey: 'dan',
        timestamp: '1 week ago',
        content: `Every day of freedom feels like a gift. Learning the ways of the Rakasha is difficult, but Chief Thornpaw is a patient teacher. I will become strong enough to protect my friends and ensure no toad has to suffer like we did.`,
        likes: 621,
        comments: [
            { characterKey: 'toad_lee', text: "And you will have my axe to guard your back. Always." }
        ]
    },
    {
        id: 'bowser_post_recruiting',
        order: 133,
        characterKey: 'bowser',
        timestamp: '1 week ago',
        content: `The Koopa Troop is scattered, but not broken! Soon, I will reunite my armies under one glorious banner! We will crush the tin-can soldiers of the Legion and the mushroom-headed fools of the Regency! The world will tremble before the might of King Bowser once more! GWAHAHAHA!`,
        likes: 815,
        comments: [
            { characterKey: 'kamek', text: "An inspiring proclamation, your Viciousness! The remnants await your command." },
            { characterKey: 'generic_toad', text: "Oh no, not again..." }
        ]
    },
    {
        id: 'guild_post_gryphon_1',
        order: 132,
        characterKey: 'commander_valerius',
        timestamp: '1 week ago',
        content: `**OPEN CONTRACT:** The Gilded Gryphon Mercenary Company is now accepting applications for caravan guard duty on the Great Imperial Road. High pay, high risk. Must provide your own standard-issue sidearm and have a clean service record. Amateurs need not apply. Payment upon completion.`,
        likes: 412,
        comments: [
            { characterKey: 'donkey_kong', text: "Good pay? Does that mean bananas? DK needs to know." },
            { characterKey: 'lario', text: "High pay? I'll bring my own tools. And a bigger bag for my cut. WAH-ha-ha... wait." }
        ],
        groupId: 'gilded_gryphon'
    },
    {
        id: 'guild_post_wayfinders_1',
        order: 131,
        characterKey: 'high_cartographer_elara',
        timestamp: '1 week ago',
        content: `A notice from the High Cartographer: An expedition is being planned to chart the shifting coastlines of the Triple Moon World. Experienced navigators and warriors are encouraged to apply at the Horizon Spire. High risk, high reward.`,
        likes: 350,
        comments: [
            { characterKey: 'captain_zipwire', text: "Shifting coastlines? Sounds dangerous! And profitable! Where do I sign up?"}
        ],
        groupId: 'wayfinders_guild'
    },
    {
        id: 'guild_post_aegis_1',
        order: 125,
        characterKey: 'battle_mage_kovar',
        timestamp: '1 week ago',
        content: `A reminder to all sanctioned practitioners: The Autumnwood Accords are not suggestions. All research into reality-bending or chronomantic magic is strictly forbidden without a permit from the Conclave. The Aegis Magi will enforce this with extreme prejudice. Do not test us.`,
        likes: 630,
        comments: [
            { characterKey: 'janna_brightspark', text: "Fear of progress is what holds this Guild back. How can we learn if we do not experiment?" },
            { characterKey: 'archmage_theron', text: "A necessary and prudent warning, Battle-Mage. Order must be maintained." }
        ],
        groupId: 'aegis_magi'
    },
    {
        id: 'guild_post_azure_1',
        order: 110,
        characterKey: 'azure_prime',
        timestamp: '1 week ago',
        content: `**BOUNTY POSTED:** A charter has been issued for the capture of the pirate 'Cutlass' Kael, last seen operating near the Ludor Isles. Wanted for piracy, smuggling, and tax evasion. Dead or alive. Contact your local chapterhouse for details.`,
        likes: 780,
        comments: [
            { characterKey: 'captain_syrup', text: "Kael? He's small fry. But his ship has some nice cannons..." },
            { characterKey: 'the_broker', text: "His last known location can be provided... for a price." }
        ],
        groupId: 'azure_blade_bounty_hunters'
    },
    {
        id: 'summit_pre_1',
        order: 21,
        characterKey: 'captain_toad',
        timestamp: '2 weeks ago',
        content: `Final preparations for the Democratic Summit are complete. This is a crucial moment for the Regency. Hoping for productive talks and new alliances. The security arrangements have been... stressful. Let's hope everything goes smoothly.`,
        likes: 310,
        comments: [
            { characterKey: 'chancellor_toadsworth', text: "Your efforts are appreciated, Captain. The fate of the Kingdom may well rest on these talks." },
            { characterKey: 'queen_bean', text: "Looking forward to it, Captain! The Beanbean Kingdom stands with you." }
        ]
    },
    {
        id: 'summit_pre_2',
        order: 22,
        characterKey: 'lanky_kong',
        timestamp: '2 weeks ago',
        content: `Headed to some big important meeting! They said I have to be on my best behavior. I'll try! Look at my new tie! It's a banana! 🍌 Heheheh.`,
        likes: 58,
        comments: [
            { characterKey: 'diddy_kong', text: "Lanky, just... please don't do anything weird." },
            { characterKey: 'donkey_kong', text: "He'll be fine. What's the worst that could happen?" }
        ]
    },
    {
        id: 'steelstorm_post_1',
        order: 10,
        characterKey: 'colonel_vera_steelstorm',
        timestamp: '1 month ago',
        content: "Imperial Law is not a suggestion. The individuals known as Green T and Lario are wanted for trial. The crew of the Vigilance has 24 standard hours to comply with Imperial Edict 77B-4. Order will be maintained.",
        likes: 152,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: "A lawful and necessary proclamation, Colonel. The Old Guard stands with you. There will be no deviation from the Hammer Code." },
            { characterKey: 'lario', text: "24 hours? I can strip an airship for parts in 6! You guys are slow. Also, do you pay for compliance? Asking for a friend." },
            { characterKey: 'ambassador_callista', text: "Colonel, perhaps a more... diplomatic approach would be prudent. This could escalate into an unfortunate international incident."}
        ],
        rumorId: 'iron_legion_ruse'
    },
    {
        id: 'waluigi_post_1',
        order: 8,
        characterKey: 'waluigi',
        timestamp: '1 month ago',
        content: "Some call it 'friendly fire'. I call it 'stylish crowd control'. WAH! The little frozen toad will thaw out eventually. Probably. He should be grateful he was part of my magnificent performance!",
        likes: 42,
        comments: [
            { characterKey: 'lario', text: "You left me to die, you purple cheat! And you froze one of the little guys! You're a menace!" },
            { characterKey: 'giggling_pete', text: "Magnificent! Freezing the small one was an unexpected punchline! The Jester applauds your commitment to beautiful, pointless chaos!" },
        ],
        rumorId: 'waluigi_friendly_fire'
    },
    {
        id: 'lario_post_1',
        order: 7,
        characterKey: 'lario',
        timestamp: '1 month ago',
        content: "This mysterious new client, 'Mr. Wario', pays well, but his demands are ridiculous! 'Needs more garlic!' 'Make it shinier!' Who does this guy think he is? At least his coin is good. Best not to ask questions.",
        likes: 88,
        comments: [
            { characterKey: 'captain_syrup', text: "You still owe me for that ship, you greasy little wrench-turner. I'll take payment in the form of your workshop." },
            { characterKey: 'detective_penny', text: "Interesting. A new, wealthy client? I'll be keeping an eye on your workshop, Lario. For 'business' purposes, of course." },
        ],
        rumorId: 'wario_escape'
    },
    {
        id: 'toadette_crusade_post',
        order: 36,
        characterKey: 'captain_toadette',
        timestamp: '2 months ago',
        content: `The reports from the so-called 'Gala' only strengthen my resolve. The Regency hobnobs with apes while monsters play with time itself. We are the ONLY ones fighting for true justice! For the Princess! Join the Loyalists today and fight for what's right!`,
        likes: 241,
        comments: [
            { characterKey: 'generic_toad', text: "But the pay is better with the Regency Guard..." },
            { characterKey: 'mistveil', text: "For the Princess!" }
        ]
    },
    {
        id: 'lario_mr_wario_post',
        order: 37,
        characterKey: 'lario',
        timestamp: '2 months ago',
        content: "'Mr. Wario' now wants me to build a 'ghost-powered vacuum cleaner'. I swear, this guy gets weirder every day. Still, his coin is good. As long as he keeps paying, Lario keeps building! WAH-HA-HA... wait, that's not my laugh.",
        likes: 73,
        comments: [
            { characterKey: 'waluigi', text: "WAH! An imposter! There is only ONE magnificent laugh, and it is MINE!" },
        ]
    },
    {
        id: 'fawful_fury_post',
        order: 38,
        characterKey: 'fawful',
        timestamp: '2 months ago',
        content: "I HAVE FURY! The fools think they have seen my full genius? My gala was but an appetizer! The main course of my victory is yet to be served! It will have the chortles! And a side of doom!",
        likes: 712,
        comments: []
    },
    {
        id: 'penny_wario_clue',
        order: 39,
        characterKey: 'detective_penny',
        timestamp: '2 months ago',
        content: "My investigation into the mysterious 'Mr. Wario' continues. Found this strange, ectoplasmic residue at one of the old Wario Land warehouses. It smells faintly of garlic. Does anyone recognize this substance? #CaseOfTheGreedyGhost",
        image: 'clue.png',
        image_alt: "A blurry, close-up photo of a puddle of greenish, glowing goo on a warehouse floor.",
        likes: 198,
        comments: [
            { characterKey: 'master_goodstyle', text: "Disgusting. Whatever it is, it has no style." },
            { characterKey: 'fawful', text: "It is the goo of a fool! Not the goo of a genius, like my own magnificent goo!" }
        ]
    },
    ...WAHBOOK_INTEL_POSTS
];
