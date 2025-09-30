
// This file contains all WAHbook posts that are directly related to an active rumor.
// It is imported by assembly-intel-data.js to be included in the main feed.

export const RUMOR_CHATTER_DATA = [
    // --- LANKY'S DISGRACE AT THE SUMMIT ---
    {
        id: 'dk_crisis_news', order: 130, characterKey: 'wah_media_collective', timestamp: '15 hours ago',
        content: `**Ape-palling Behavior! Summit Shenanigans Cause Diplomatic and Economic Crisis!**

The much-anticipated Democratic Summit ended in chaos and financial panic yesterday, not because of a political disagreement, but due to the "completely disgraceful" conduct of Lanky Kong, a representative of the DK Crew. During a photo opportunity with a high-profile president, Lanky Kong reportedly grabbed the dignitary, inflated himself to five times his normal size, and flew around the room "like the world's scariest whoopy cushion."

The incident sent the dignitary fleeing in terror and caused a severe diplomatic fallout for the DK Crew's leader, Donkey Kong. The political turmoil was matched by economic panic, as the Mushroom Kingdom's gold coin standard went into a two-hour freefall. Sources claim only a last-minute favor from Chancellor Toadsworth prevented a complete market collapse. The "Kremling Koin" is now trading at 4.5 times the value of the DK Crew's "Banana Bunch" currency.

The incident has created a deep schism within the normally tight-knit Kong family. Diddy Kong is reportedly motioning for Lanky's expulsion from the crew, a move supported by Candy Kong, once Lanky's staunchest advocate. Donkey Kong is said to be furious and has tasked his brother Chunky Kong with mediating the crisis. When reached for comment, Lanky Kong reportedly made a series of baffling jokes, indicating he does not grasp the severity of the situation.`,
        image: 'dk_crew.png', image_alt: "A formal diplomatic stage in chaos. A long-armed ape can be seen flying through the air like a deflating balloon while dignitaries flee in terror.", likes: 1240,
        comments: [ { characterKey: 'diddy_kong', text: "It's not 'shenanigans', it's a disgrace. He needs to be held accountable." }, { characterKey: 'king_k_rool', text: "A masterclass in self-destruction. My compliments to the ape. #KremlingKoin" }, { characterKey: 'lario', text: "See, this is why you need professional, goblin-made inflation devices. Amateurs." } ],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'diddy_post_1', order: 129, characterKey: 'diddy_kong', timestamp: '14 hours ago',
        content: "UNBELIEVABLE. You don't just embarrass the family, you don't just embarrass the CREW, you cause an international incident and think it's a JOKE?! We're done. I'm officially motioning for expulsion. This isn't a game.",
        likes: 489, comments: [ { characterKey: 'candy_kong', text: "I'm with you, Diddy. I've defended him for the last time. This is unacceptable." }, { characterKey: 'lanky_kong', text: "Lighten up, little buddy! It was funny! You should have seen their faces! 😂" }, { characterKey: 'cranky_kong', text: "Back in my day, we settled these things with a barrel-throwing contest. Kids these days and their 'motions'..."}, { "characterKey": "archie", "text": "C'mon, it was pretty funny." } ],
        rumorId: 'lankys_disgrace_at_summit'
    },
    // ... (other Lanky posts remain the same) ...
    {
        id: 'summit_reaction_bowser', order: 117, characterKey: 'bowser', timestamp: '1 day ago',
        content: `GWAHAHAHA! Donkey Kong can't even control his own family! How does he expect to control an island? This is what happens when you lack true, decisive leadership. Pathetic!`,
        likes: 730, comments: [ { characterKey: 'donkey_kong', text: "You want to talk about family problems? How many times have your own kids turned against you?" }, { characterKey: 'kamek', text: "Ahem, a temporary and magically-induced misunderstanding, your Viciousness." } ],
        rumorId: 'lankys_disgrace_at_summit'
    },

    // --- THE PRINCESS IS DEAD ---
    {
        id: 'peach_death_news', order: 116, characterKey: 'wah_media_collective', timestamp: 'Archival Post (45 years ago)',
        content: `**Princess Peach Assassinated: Kingdom Plunges into Generational Civil War** 

Reports from the Mushroom Kingdom confirm the tragic death of Princess Peach. The assassination, which occurred 45 years ago, was the catalyst that plunged the kingdom into the brutal, century-long civil war that continues to this day. While Bowser's historical aggression is often cited as a destabilizing factor, the true culprits and circumstances of her death remain a fiercely debated and central mystery to the ongoing conflict.`,
        image: 'falling_figures.png', image_alt: "Three figures falling through a colorful, striped sky, one a sorcerer, another cloaked in wolf fur, and a small mushroom-shaped figure. Symbolizes chaos and peril.", likes: 2430,
        comments: [ { characterKey: 'captain_toadette', text: "We will have justice for our Princess. This is not over." }, { characterKey: 'kamek', text: "A convenient narrative. Perhaps the Regency should look closer to home for the source of their 'instability'." }, { characterKey: 'bowser', text: "I was framed!" } ],
        rumorId: 'peach_death_fallout'
    },
    // ... (other Peach posts remain the same) ...

    // --- ARCHIE'S ACQUITTAL (Archie post replaced) ---
    {
        id: 'intel_archie_acquittal_waluigi', order: 82, characterKey: 'waluigi', timestamp: '3 weeks ago',
        content: `WAH! So the three-eyed freak got away with it! The vampires know style when they see it! Mages are just sore losers! It's a masterpiece of legal maneuvering! Almost as good as my own!`,
        likes: 85, comments: [], rumorId: 'archie_acquittal'
    },
    {
        id: 'intel_archie_acquittal_1', order: 81, characterKey: 'archmage_theron', timestamp: '3 weeks ago',
        content: `An absolute mockery of justice! The Onyx Hand acquits a known mage-killer. This is a clear political move to destabilize us. They will not succeed. The suspect will face the Guild's judgment, one way or another.`,
        likes: 450, comments: [], rumorId: 'archie_acquittal'
    },
    {
        id: 'intel_archie_acquittal_2', order: 80, characterKey: 'lord_crimson', timestamp: '3 weeks ago',
        content: `The Mages' Guild is in an uproar. Their predictable, rigid minds cannot comprehend a verdict that does not suit their narrative. A perfectly executed gambit. The three-eyed fool has proven to be a most amusing pawn.`,
        likes: 120, comments: [], rumorId: 'archie_acquittal'
    },
    {
        id: 'intel_archie_acquittal_3', order: 79, characterKey: 'judge_eternal_korven', timestamp: '3 weeks ago',
        content: `The Onyx Hand's 'tribunal' was a farce that spits on the very concept of law. While the Arbiters of Intent see nuance, the Truthbearers see a clear violation. The case against the suspect remains open in our dockets.`,
        likes: 310, comments: [], rumorId: 'archie_acquittal'
    },
    {
        id: 'intel_archie_acquittal_4', order: 78, characterKey: 'freelancer_spy_1', timestamp: '3 weeks ago',
        content: `Vampires letting a known anarchist go free? Obvious play. They didn't do it for 'justice', they did it to stick a thumb in the Mages' Guild's eye. Now the two magical superpowers are at each other's throats. Good for business.`,
        likes: 115, comments: [], rumorId: 'archie_acquittal'
    },
    {
        id: 'intel_archie_acquittal_5', order: 77, characterKey: 'arbitrix_mira', timestamp: '3 weeks ago',
        content: `The law is not always about punishment. It is about balance. While the accused's methods were... unorthodox... he did neutralize a significant magical threat. The Onyx Hand's verdict, while politically motivated, may have accidentally served a greater cosmic justice. The case is complex.`,
        likes: 200, comments: [], rumorId: 'archie_acquittal'
    },
    
    // --- SYRUP SCHISM (Unknown User fixed) ---
    { id: 'intel_syrup_schism_1', order: 92, characterKey: 'captain_syrup', timestamp: '4 weeks ago', content: `So the purple coward and the little grease-monkey think they can double-cross Captain Syrup? And then their 'hero' friends attack me right after setting me free? They've all made a very powerful, very vengeful enemy today.`, likes: 245, comments: [], rumorId: 'syrup_schism'},
    { id: 'intel_syrup_schism_2', order: 91, characterKey: 'grizelda_geargrind', timestamp: '4 weeks ago', content: `This is a disaster for business! The schism between Lario and Syrup has split the Raiders. Now there's infighting and disruptions to our scrap supply lines. This needs to be resolved, quickly.`, likes: 70, comments: [], rumorId: 'syrup_schism'},
    // ... (other Syrup posts)

    // --- A TRAIL OF SCRAP (Unknown User fixed) ---
    {
        id: 'intel_scrap_trail_3', order: 34, characterKey: 'artificer_prime_kael', timestamp: 'Ongoing',
        content: `The wanton destruction of advanced Imperial magitek by these hooligans is an affront to science. Each explosion is like burning a library. The loss of data is... incalculable.`,
        likes: 210, comments: [], rumorId: 'a_trail_of_scrap'
    },
    // ... (other Scrap posts)

    // --- IRON FISTS RAID (Archie post replaced) ---
    {
        id: 'intel_iron_fists_5', order: 67, characterKey: 'giggling_pete', timestamp: '5 weeks ago',
        content: `A warehouse raid that turned into a glittery explosion? Hee hee! A masterpiece of chaotic urban renewal! The Jester is pleased with the artist's work!`,
        likes: 92, comments: [], rumorId: 'iron_fists_raid'
    },
    // ... (other Iron Fists posts)

    // --- DRAGON SLAYING (Expanded) ---
    { id: 'intel_dragon_slay_1', order: 76, characterKey: 'general_marcus_ironhand', timestamp: '2 months ago', content: `Commendations to the mercenaries who dealt with the wyrm in the northern passes. A textbook execution of Hammer & Anvil tactics. Such efficiency is rare in their kind.`, likes: 180, comments: [], rumorId: 'dragon_slaying' },
    { id: 'intel_dragon_slay_2', order: 75, characterKey: 'janna_brightspark', timestamp: '2 months ago', content: `A dragon was slain? What a tragic waste of a priceless magical specimen! The research opportunities lost are incalculable!`, likes: 250, comments: [], rumorId: 'dragon_slaying' },
    { id: 'intel_dragon_slay_3', order: 74, characterKey: 'rebel_clans_scout', timestamp: '2 months ago', content: `Heard some mercs took down a dragon in the mountains. Good. One less monster for our people to worry about. Doesn't mean we trust them, though.`, likes: 90, comments: [], rumorId: 'dragon_slaying' },
    { id: 'intel_dragon_slay_4', order: 73, characterKey: 'captain_zipwire', timestamp: '2 months ago', content: `A whole dragon?! Think of the parts! The scales, the bones, the heart! I could build a rocket-powered death machine with that! What a waste!`, likes: 120, comments: [], rumorId: 'dragon_slaying' },
    { id: 'intel_dragon_slay_5', order: 72, characterKey: 'bowser', timestamp: '2 months ago', content: `My allies slew a dragon! GWAHAHA! Of course they did! Only the strongest fight alongside the great King Bowser! This is but a taste of our power!`, likes: 600, comments: [], rumorId: 'dragon_slaying' },

    // --- IRON FISTS' IMPERIAL CONTRACT? (Expanded) ---
    { id: 'intel_if_conspiracy_1', order: 66, characterKey: 'young_wolf_kara', timestamp: '3 weeks ago', content: `The Empire creates the disease so it can sell the cure. They fund criminal gangs like the Iron Fists to create chaos, then march in with their Legions to 'restore order'. Don't be fooled. They are all the same beast.`, likes: 320, comments: [], rumorId: 'iron_fists_conspiracy' },
    { id: 'intel_if_conspiracy_2', order: 65, characterKey: 'ambassador_callista', timestamp: '3 weeks ago', content: `The recent accusations that the Regal Empire would employ common criminals as deniable assets are baseless slander, propagated by terrorists and rebels. The Empire's commitment to order is absolute and unwavering.`, likes: 150, comments: [], rumorId: 'iron_fists_conspiracy' },
    { id: 'intel_if_conspiracy_3', order: 64, characterKey: 'freelancer_spy_1', timestamp: '3 weeks ago', content: `So, the Iron Fists are on the Emperor's payroll? Not surprising. Plausible deniability is a valuable commodity. And the proof... well, that's even more valuable. My inbox is open.`, likes: 110, comments: [], rumorId: 'iron_fists_conspiracy' },
    { id: 'intel_if_conspiracy_4', order: 63, characterKey: 'generic_toad', timestamp: '2 weeks ago', content: `Of course the government is secretly in league with the gangs. Why wouldn't they be? They're all crooks. Just different uniforms.`, likes: 500, comments: [], rumorId: 'iron_fists_conspiracy' },
    { id: 'intel_if_conspiracy_5', order: 62, characterKey: 'waluigi', timestamp: '2 weeks ago', content: `The Empire is secretly funding the gangs that they publicly fight? WAH! That is beautiful! So dishonest! So stylishly hypocritical! I'm taking notes! This is high-level villainy!`, likes: 95, comments: [], rumorId: 'iron_fists_conspiracy' },

    // --- SHADOW WAR ESCALATION (Expanded) ---
    { id: 'intel_shadow_war_1', order: 61, characterKey: 'alpha_bloodmaw', timestamp: 'Ongoing', content: `Another coven of leeches turned to dust! The southern forests run red with their filth. The Onyx Hand thinks they can outsmart the moon? We will show them the fury of the pack!`, likes: 280, comments: [], rumorId: 'shadow_war' },
    { id: 'intel_shadow_war_2', order: 60, characterKey: 'lord_crimson', timestamp: 'Ongoing', content: `The were-dogs are so predictable in their rage. Let them exhaust themselves on our thralls. The true war is not won in the mud and blood, but in the halls of power. Their mortal allies will abandon them soon enough.`, likes: 150, comments: [], rumorId: 'shadow_war' },
    { id: 'intel_shadow_war_3', order: 59, characterKey: 'high_inquisitor_vale', timestamp: 'Ongoing', content: `The beasts of the night tear each other apart. Good. It saves us the effort. When they are done, the Silver Flame will be there to purge the survivors.`, likes: 350, comments: [], rumorId: 'shadow_war' },
    { id: 'intel_shadow_war_4', order: 58, characterKey: 'rebel_clans_scout', timestamp: 'Ongoing', content: `My village was caught between them. The werewolves by night, the vampires by... also by night. We lost everything. Someone, please make it stop.`, likes: 600, comments: [], rumorId: 'shadow_war' },
    { id: 'intel_shadow_war_5', order: 57, characterKey: 'bowser', timestamp: 'Ongoing', content: `My new allies, the Moonfang Pack, are crushing the vampire scum! GWAHAHAHA! It's always good to have ferocious friends who hate the same people you do!`, likes: 550, comments: [], rumorId: 'shadow_war' },

    // --- DAN'S TRAINING (Markop post replaced) ---
    { id: 'intel_dan_training_1', order: 56, characterKey: 'dan', timestamp: 'Ongoing', content: `Chief Thornpaw's lessons are difficult. The magic doesn't feel like a weapon... it feels like listening. To the earth, to the wind. It's strange. But I feel... stronger.`, likes: 380, comments: [], rumorId: 'dan_training' },
    { id: 'intel_dan_training_3', order: 55, characterKey: 'chief_thornpaw', timestamp: 'Ongoing', content: `The little toad listens. The spirits of the world are speaking to him. He must now learn to understand their language.`, likes: 210, comments: [], rumorId: 'dan_training' },
    { id: 'intel_dan_training_4', order: 54, characterKey: 'captain_toad', timestamp: 'Ongoing', content: `Hearing good things about that 'Hero Toad', Dan. The Regency could use more individuals with his kind of courage. And his kind of power.`, likes: 310, comments: [], rumorId: 'dan_training' },
    { id: 'intel_dan_training_5', order: 53, characterKey: 'toad_lee', timestamp: 'Ongoing', content: `Dan is doing the shiny magic stuff. He's good. He's still my friend. I'll still protect him with my axe.`, likes: 250, comments: [], rumorId: 'dan_training' },
    { id: 'intel_dan_training_bowser', order: 52, characterKey: 'bowser', timestamp: 'Ongoing', content: `The little mushroom is learning magic? Good for him. A strong ally is a useful ally. Maybe he can teach my Magikoopas a thing or two.`, likes: 480, comments: [], rumorId: 'dan_training' },

    // --- COSMIC STATIC (Expanded) ---
    { id: 'intel_cosmic_static_1', order: 51, characterKey: 'giggling_pete', timestamp: 'Ongoing', content: `The Vigilance is broadcasting such BEAUTIFUL static! The signal is pure, delicious chaos! It tickles my funny bone! The Jester is laughing!`, likes: 99, comments: [], rumorId: 'cosmic_static' },
    { id: 'intel_cosmic_static_2', order: 50, characterKey: 'janna_brightspark', timestamp: 'Ongoing', content: `The energy signature emanating from that airship is unlike anything I've ever seen. It's not arcane, not divine... it's something beautifully chaotic. I MUST get a sample!`, likes: 280, comments: [], rumorId: 'cosmic_static' },
    { id: 'intel_cosmic_static_3', order: 49, characterKey: 'archmage_theron', timestamp: 'Ongoing', content: `This 'cosmic static' is an uncontrolled reality warp. It threatens the very fabric of our dimension. It must be contained before it unravels everything! The Aegis Magi are on high alert.`, likes: 350, comments: [], rumorId: 'cosmic_static' },
    { id: 'intel_cosmic_static_4', order: 48, characterKey: 'admin_zero', timestamp: 'Ongoing', content: `[SYSTEM ALERT] Unidentified, high-entropy data packets detected originating from physical coordinates [REDACTED]. Source signature designated: CHAOS_ANOMALY_01. Monitoring protocols initiated.`, likes: 150, comments: [], rumorId: 'cosmic_static' },
    { id: 'intel_cosmic_static_5', order: 47, characterKey: 'freelancer_spy_1', timestamp: 'Ongoing', content: `Picking up a lot of chatter about 'cosmic static' from the Vigilance. Mages are spooked, cultists are excited. Whenever something this weird happens, there's coin to be made. Taking notes.`, likes: 75, comments: [], rumorId: 'cosmic_static' },
    
    // --- PALADIN'S DILEMMA (Expanded) ---
    { id: 'intel_paladin_dilemma_1', order: 46, characterKey: 'high_inquisitor_vale', timestamp: 'Ongoing', content: `The fallen paladin continues to walk a path of heresy, consorting with criminals and monsters. The time for redemption has passed. The time for judgment is at hand.`, likes: 320, comments: [], rumorId: 'paladin_dilemma' },
    { id: 'intel_paladin_dilemma_2', order: 45, characterKey: 'templar_captain_dorn', timestamp: 'Ongoing', content: `I still believe there is hope for Sir Markop. His actions, while unorthodox, often serve the greater good. He has not fallen, but is merely walking a different path in the light.`, likes: 250, comments: [], rumorId: 'paladin_dilemma' },
    { id: 'intel_paladin_dilemma_3', order: 44, characterKey: 'judge_eternal_korven', timestamp: 'Ongoing', content: `The case of Markop Judi is a complex one. He has broken numerous Imperial laws, yet his intent often aligns with cosmic justice. His file remains open. We are watching.`, likes: 300, comments: [], rumorId: 'paladin_dilemma' },
    { id: 'intel_paladin_dilemma_4', order: 43, characterKey: 'free_name_sarah', timestamp: 'Ongoing', content: `Markop has seen the hypocrisy of the so-called 'lawful' institutions. He has abandoned his old masters and now fights for true justice. He is a symbol of liberation.`, likes: 410, comments: [], rumorId: 'paladin_dilemma' },
    { id: 'intel_paladin_dilemma_5', order: 42, characterKey: 'the_broker', timestamp: 'Ongoing', content: `The fallen paladin, Markop Judi, is a fascinating case study. His internal conflict makes him unpredictable. An unpredictable man with his power is either a great asset or a great liability. His file is getting thicker. And more valuable.`, likes: 180, comments: [], rumorId: 'paladin_dilemma' },
    
    // --- REBEL SYMPATHIES (Expanded) ---
    { id: 'intel_rebel_sympathies_1', order: 41, characterKey: 'clan_chief_redmane', timestamp: 'Ongoing', content: `These mercenaries fight the Empire, yes. But they are allied with Bowser, another king. A snake that sheds its skin is still a snake. We do not trust them.`, likes: 180, comments: [], rumorId: 'rebel_sympathies' },
    { id: 'intel_rebel_sympathies_2', order: 40, characterKey: 'young_wolf_kara', timestamp: 'Ongoing', content: `Redmane is too cautious. The crew of the Vigilance has done more damage to the Empire in a month than our clans have in a year. They are a weapon. We should be using them.`, likes: 350, comments: [], rumorId: 'rebel_sympathies' },
    { id: 'intel_rebel_sympathies_3', order: 39, characterKey: 'free_name_sarah', timestamp: 'Ongoing', content: `They are not ideologues. They are mercenaries and chaos agents. But their actions create cracks in the Empire's walls. And through those cracks, the light of freedom can shine.`, likes: 450, comments: [], rumorId: 'rebel_sympathies' },
    { id: 'intel_rebel_sympathies_4', order: 38, characterKey: 'regal_empire_delegate', timestamp: 'Ongoing', content: `The criminals aboard the Vigilance have been confirmed to be in league with seditious rebel elements. They are no longer just pirates; they are state-sponsored terrorists and will be dealt with as such.`, likes: 220, comments: [], rumorId: 'rebel_sympathies' },
    { id: 'intel_rebel_sympathies_5', order: 37, characterKey: 'bowser', timestamp: 'Ongoing', content: `These rebels think they are my friends? GWAHAHA! They are temporary tools. Their hatred of the Empire is useful. Nothing more. When I am done, they will bend the knee like everyone else!`, likes: 620, comments: [], rumorId: 'rebel_sympathies' },

    // --- CORE CRISIS (Archie post replaced) ---
    {
        id: 'intel_core_crisis_1', order: 98, characterKey: 'waluigi',
        timestamp: '4 weeks ago',
        content: `So, the big turtle's pet rock threw a wrench in my plans. Literally. An axe. Into the engine core. Magnificent! Impractical, but magnificent! 10/10 for style, 1/10 for 'not crashing'. WAH!`,
        likes: 130, comments: [], rumorId: 'core_crisis'
    },

    // --- X.O.'S DEFEAT (Archie post replaced) ---
    {
        id: 'intel_xo_defeat_1', order: 97, characterKey: 'wah_media_collective',
        timestamp: '4 weeks ago',
        content: `**VIGILANCE RECAPTURED!** Reports confirm the rogue mage X.O. has been defeated. Sources cite a three-eyed rogue, a centaur paladin, and a surprisingly heroic toad as instrumental in the takeover. The powerful airship is now in the hands of this new, unpredictable faction.`,
        likes: 850, comments: [], rumorId: 'xo_defeat'
    },
    
    // --- THE BARREL SECRET (Markop post replaced) ---
    {
        id: 'intel_barrel_secret_1', order: 71, characterKey: 'humpik',
        timestamp: '1 week ago',
        content: `The metal-men told me a secret. The little toad-friends are not in a big room. They are in barrels. Small mushrooms are the key. This is a strange and cowardly way to hide prisoners. We will get them out.`,
        likes: 310, comments: [], rumorId: 'barrel_compartment_reveal'
    }
];
