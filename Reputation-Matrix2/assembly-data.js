
import { WAHBOOK_INTEL_POSTS } from './assembly-intel-data.js';
import { VIRAL_POSTS } from './assembly-viral-data.js';

export const WAHBOOK_POSTS = [
    ...VIRAL_POSTS,
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
        content: `The mortals have "voted." How quaint. They scribble on their little papers and think it changes the nature of the night. A law passed by creatures with the lifespan of a mayfly is not a law. It is a delay. A moment for them to feel important before the true powers of this world remind them of their place.`,
        likes: 1455,
        comments: [
            { characterKey: 'lady_ebonveil', text: 'Patience, my lord. Their arrogance provides us with new opportunities.' },
            { characterKey: 'alpha_bloodmaw', text: 'For once, I agree with the leech. They\'ve made this simple.' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'alpha_bloodmaw_declaration_of_war',
        order: 20439,
        characterKey: 'alpha_bloodmaw',
        timestamp: '2 minutes ago',
        content: `So the sheep have voted that the wolves have no rights. 81 of them. Good. It makes the hunt cleaner. There is no 'truce' with those who deny our existence. There is only prey.`,
        likes: 1120,
        comments: [
            { characterKey: 'chief_thornpaw', text: 'The spirits weep. The foolishness of mortals will drown this land in blood.' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'dan_act_passes',
        order: 20438,
        characterKey: 'dan',
        timestamp: '3 minutes ago',
        content: `It passed. The Supernatural Sovereignty Act is law. This was not about hatred, but about establishing a foundation for peace for all peoples. We cannot build a future on a bedrock of fear. By defining the threats that prey on the innocent, we can create a unified front to contain them. This is the first step.`,
        likes: 950,
        comments: [
            { characterKey: 'markop', text: 'A bold and dangerous move, Dan. You have drawn a line in the sand.' },
            { characterKey: 'toad_lee', text: 'You have given us a clear enemy. That is something a soldier can understand.' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'ironhand_enforces_act',
        order: 20437,
        characterKey: 'general_marcus_ironhand',
        timestamp: '5 minutes ago',
        content: `The Diet has spoken with a clear voice. The Supernatural Sovereignty Act is law. The Legion will enforce it. Our orders are to establish a hard border. There will be no truce, only containment. Order will be maintained.`,
        likes: 910,
        comments: [
            { characterKey: 'colonel_vera_steelstorm', text: 'Finally. A clear mandate.' }
        ],
        rumorId: 'supernatural_sovereignty_act'
    },
    {
        id: 'vale_holy_war',
        order: 20436,
        characterKey: 'high_inquisitor_vale',
        timestamp: '8 minutes ago',
        content: `AT LAST! The Diet finds its spine! 81 to 30! They have declared the monsters for what they are: illegal entities, abominations to be purged! This is not containment; it is a declaration of a holy war! The Silver Flame will be its vanguard!`,
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
        content: `So... Dan got the big government to pick a fight with vampires and werewolves at the same time? Is that... a good idea?`,
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
        content: `The emergency session of the Midlands Diet is underway. Delegate Dan of the Liberated Toads has proposed the "Supernatural Sovereignty Act" to address the ongoing crisis at our borders. The vote is expected to be contentious.`,
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
