// This file contains the data for keyword-based NPC responses on WAHbook.

export const NPC_RESPONSES = [
    // --- GENERIC INITIAL KEYWORDS ---
    {
        trigger: { keywords: ['help', 'aid', 'support'], tone: 'positive' },
        type: 'initial', characterKey: 'dan', response: "If you're fighting for what's right, you have my support. We have to stand together.", tone: 'positive'
    },
    {
        trigger: { keywords: ['money', 'gold', 'treasure', 'rich', 'coin'], tone: 'neutral' },
        type: 'initial', characterKey: 'lario', response: "Money? Did someone say money? Lario is very interested in this conversation. What's the score?", tone: 'inquisitive'
    },
    {
        trigger: { keywords: ['fight', 'attack', 'battle', 'war'], tone: 'neutral' },
        type: 'initial', characterKey: 'humpik', response: "A fight? GWAHAHAHA! Good! Humpik is always ready for a good fight!", tone: 'excited'
    },
    {
        trigger: { keywords: ['magic', 'spell', 'arcane'], tone: 'inquisitive' },
        type: 'initial', characterKey: 'janna_brightspark', response: "Ooh, arcane theory! Are we talking about structured evocation or the more chaotic principles of alteration? I have so many theories!", tone: 'inquisitive'
    },
    {
        trigger: { keywords: ['order', 'law', 'justice'], tone: 'positive' },
        type: 'initial', characterKey: 'general_marcus_ironhand', response: "Finally, a conversation about the principles that uphold civilization. Without order, there is only chaos and decay.", tone: 'formal'
    },
    {
        trigger: { keywords: ['chaos', 'random', 'prank', 'explosion'], tone: 'positive' },
        type: 'initial', characterKey: 'giggling_pete', response: "Hee hee! Chaos! The Jester's favorite song! Your words are music to my ears, a symphony of beautiful nonsense!", tone: 'excited'
    },
    {
        trigger: { keywords: ['secret', 'intel', 'information'], tone: 'neutral' },
        type: 'initial', characterKey: 'the_broker', response: "Information has a price. If your 'secret' is valuable, my inbox is open. If not, it's just noise.", tone: 'neutral'
    },
    {
        trigger: { keywords: ['food', 'drink', 'feast'], tone: 'neutral' },
        type: 'initial', characterKey: 'bones', response: "Food's good. Better than starving. What are we eating?", tone: 'neutral'
    },
    {
        trigger: { keywords: ['tech', 'machine', 'engine'], tone: 'inquisitive' },
        type: 'initial', characterKey: 'artificer_prime_kael', response: "Crude terminology, but the subject of magitek is a worthy one. The fusion of arcane energy and engineering is the future.", tone: 'formal'
    },
    {
        trigger: { keywords: ['honor', 'oath', 'duty'], tone: 'positive' },
        type: 'initial', characterKey: 'colonel_vera_steelstorm', response: "Honor is not a word to be thrown around lightly. It is forged in the fires of duty and proven on the battlefield.", tone: 'formal'
    },
    {
        trigger: { keywords: ['hate', 'revenge', 'kill'], tone: 'negative' },
        type: 'initial', characterKey: 'alpha_bloodmaw', response: "Hate is a clean fire. Revenge is a hunt. Let your rage guide your claws.", tone: 'aggressive'
    },
    {
        trigger: { keywords: ['lost', 'confused', 'stuck'], tone: 'negative' },
        type: 'initial', characterKey: 'chief_thornpaw', response: "The path is not always clear. Look to the signs the world gives you. The wind, the stones, the stars... they will guide you if you listen.", tone: 'positive'
    },
    {
        trigger: { keywords: ['boring', 'dull', 'predictable'], tone: 'negative' },
        type: 'initial', characterKey: 'waluigi', response: "BORING?! WAH! Waluigi will not stand for this! We must immediately do something stylish and chaotic to fix this situation!", tone: 'angry'
    },
    {
        trigger: { keywords: ['art', 'style', 'fashion'], tone: 'positive' },
        type: 'initial', characterKey: 'master_goodstyle', response: "Ah, a topic of true importance! Beauty is the world's most valuable currency. Tell me more of your artistic vision.", tone: 'formal'
    },
    {
        trigger: { keywords: ['power', 'strong', 'strength'], tone: 'positive' },
        type: 'initial', characterKey: 'bowser', response: "Power! Gwahaha! That's what I'm talking about! The strong rule the weak. It's the only law that matters!", tone: 'aggressive'
    },
    {
        trigger: { keywords: ['hope', 'future'], tone: 'positive' },
        type: 'initial', characterKey: 'dan', response: "We can't give up hope. It's what keeps us going, even when things are dark. We have to believe in a better future.", tone: 'positive'
    },
    {
        trigger: { keywords: ['sad', 'depressed', 'unhappy'], tone: 'negative' },
        type: 'initial', characterKey: 'chunky_kong', response: "Oh no, that sounds sad. I don't like it when people are sad. I hope things get better for you.", tone: 'positive'
    },
    {
        trigger: { keywords: ['happy', 'joy', 'excited'], tone: 'positive' },
        type: 'initial', characterKey: 'lanky_kong', response: "Heheheh! That sounds like fun! I like fun things!", tone: 'excited'
    },
    {
        trigger: { keywords: ['betray', 'traitor'], tone: 'negative' },
        type: 'initial', characterKey: 'toad_lee', response: "Betrayal is a coward's weapon. Face your enemies head-on.", tone: 'aggressive'
    },
    {
        trigger: { keywords: ['stupid', 'idiot', 'dumb'], tone: 'negative' },
        type: 'initial', characterKey: 'fawful', response: "FOOL! Your brain has the mass of a tiny bread crumb of thinking! My genius is a mountain of understanding next to your molehill of... not-smartness!", tone: 'angry'
    },
    {
        trigger: { keywords: ['stupid', 'idiot', 'dumb'], tone: 'negative' },
        type: 'initial', characterKey: 'diddy_kong', response: "Are you being serious right now? Think before you post.", tone: 'angry'
    },

    // --- FACTION KEYWORDS ---
    {
        trigger: { keywords: ['empire', 'imperial'], tone: 'neutral' },
        type: 'initial', characterKey: 'ambassador_callista', response: "The Regal Empire appreciates your interest in our affairs. We are a beacon of order and stability in a chaotic world.", tone: 'formal'
    },
    {
        trigger: { keywords: ['legion', 'iron legion'], tone: 'neutral' },
        type: 'initial', characterKey: 'general_marcus_ironhand', response: "The Iron Legion is the hammer that forges order. Speak of us with the respect we command.", tone: 'formal'
    },
    {
        trigger: { keywords: ['vampire', 'onyx hand'], tone: 'neutral' },
        type: 'initial', characterKey: 'lord_crimson', response: "You speak of the Onyx Hand? Be careful, mortal. Some shadows are best left undisturbed.", tone: 'sarcastic'
    },
    {
        trigger: { keywords: ['mages', 'mages guild'], tone: 'neutral' },
        type: 'initial', characterKey: 'archmage_theron', response: "The Mages' Guild is the sole authority on the proper use of the arcane. Any unsanctioned magic is a threat to us all.", tone: 'formal'
    },
    {
        trigger: { keywords: ['silver flame'], tone: 'neutral' },
        type: 'initial', characterKey: 'high_inquisitor_vale', response: "The Order of the Silver Flame is the light that purges the darkness. Those who are not with us are against us.", tone: 'aggressive'
    },
    {
        trigger: { keywords: ['werewolf', 'moonfang'], tone: 'neutral' },
        type: 'initial', characterKey: 'shaman_moonwhisper', response: "The Moonfang Pack follows the primal laws of the hunt and the moon. We are not savages; we are the true children of the wild.", tone: 'neutral'
    },
    {
        trigger: { keywords: ['koopa', 'koopa troop'], tone: 'neutral' },
        type: 'initial', characterKey: 'kamek', response: "The Koopa Troop's loyalty to King Bowser is absolute. We will reclaim our rightful place.", tone: 'formal'
    },
    {
        trigger: { keywords: ['rebel', 'unchained'], tone: 'neutral' },
        type: 'initial', characterKey: 'free_name_sarah', response: "The Unchained fight for a world without kings or masters. A world where all are free. Join us.", tone: 'positive'
    },
    {
        trigger: { keywords: ['pirate', 'crimson fleet'], tone: 'neutral' },
        type: 'initial', characterKey: 'first_mate_jones', response: "The Crimson Fleet sails where it pleases and takes what it wants. That's the only law on the high seas.", tone: 'neutral'
    },
    {
        trigger: { keywords: ['wario'], tone: 'neutral' },
        type: 'initial', characterKey: 'detective_penny', response: "Wario? If you have any information regarding his criminal activities, I urge you to come forward. There is a reward.", tone: 'inquisitive'
    },

    // --- CHARACTER NAME KEYWORDS ---
    {
        trigger: { keywords: ['bowser'], tone: 'neutral' },
        type: 'initial', characterKey: 'bowser', response: "GWAHAHAHA! You dare speak my name? Good! Let all know the power of the great King Bowser!", tone: 'aggressive'
    },
    {
        trigger: { keywords: ['peach'], tone: 'neutral' },
        type: 'initial', characterKey: 'captain_toadette', response: "Do not speak of the Princess lightly. Her memory is sacred, and her justice will be done.", tone: 'angry'
    },
    {
        trigger: { keywords: ['waluigi'], tone: 'neutral' },
        type: 'initial', characterKey: 'waluigi', response: "WAH! Did I hear my name? Of course you're talking about me! I am the most interesting person here!", tone: 'excited'
    },
    {
        trigger: { keywords: ['fawful'], tone: 'neutral' },
        type: 'initial', characterKey: 'fawful', response: "I HAVE FURY! To speak my name is to acknowledge my genius! You have the wisdom of a smart mustard!", tone: 'excited'
    },
    {
        trigger: { keywords: ['k rool', 'k. rool'], tone: 'neutral' },
        type: 'initial', characterKey: 'king_k_rool', response: "The Kremling Krew will be victorious! My genius plans are foolproof!", tone: 'aggressive'
    },
    {
        trigger: { keywords: ['donkey kong', 'dk'], tone: 'neutral' },
        type: 'initial', characterKey: 'donkey_kong', response: "Someone talking about me? Hope it's about how strong I am. Or about bananas.", tone: 'neutral'
    },
    {
        trigger: { keywords: ['lario'], tone: 'neutral' },
        type: 'initial', characterKey: 'lario', response: "Yeah, that's me, Lario! The best mechanic in the business! You need something fixed? Or... 'acquired'?", tone: 'inquisitive'
    },
    {
        trigger: { keywords: ['dan'], tone: 'positive' },
        type: 'initial', characterKey: 'dan', response: "I'm just trying to do my best to help everyone. I hope I can live up to the faith people have put in me.", tone: 'positive'
    },
    {
        trigger: { keywords: ['archie'], tone: 'neutral' },
        type: 'initial', characterKey: 'giggling_pete', response: "Archie! The Jester's favorite prophet of pointless pandemonium! We watch your career with great interest!", tone: 'excited'
    },
    {
        trigger: { keywords: ['markop'], tone: 'neutral' },
        type: 'initial', characterKey: 'templar_captain_dorn', response: "Sir Markop's path is a difficult one. I pray he finds his way back to the light.", tone: 'positive'
    },
    {
        trigger: { keywords: ['lario is lame', 'lario sucks', 'hate lario'], tone: 'negative' },
        type: 'initial', characterKey: 'captain_syrup', response: "He's not just lame, he's a backstabbing, greasy coward. And he still owes me a ship.", tone: 'agreement'
    },
    {
        trigger: { keywords: ['dan is a hero', 'dan is great'], tone: 'positive' },
        type: 'initial', characterKey: 'toad_lee', response: "He is. And I'll protect him with my life.", tone: 'agreement'
    },


    // --- SPECIAL KEYWORDS (CURSING) ---
    {
        trigger: { keywords: ['damn', 'hell', 'crap', 'bastard'], tone: 'negative' },
        type: 'initial', characterKey: 'toad_lee', response: "Watch your language. There are young toads present.", tone: 'angry'
    },
    {
        trigger: { keywords: ['damn', 'hell', 'crap', 'bastard'], tone: 'negative' },
        type: 'initial', characterKey: 'colonel_vera_steelstorm', response: "Such language is unbecoming of a soldier. Maintain your discipline.", tone: 'formal'
    },

    // --- CURSE + NAME ---
    {
        trigger: { keywords: ['curse_bowser'], tone: 'negative' },
        type: 'initial', characterKey: 'bowser', response: "You DARE insult me?! I'll grind your bones to make my bread! GWAHAHAHA!", tone: 'angry'
    },
    {
        trigger: { keywords: ['curse_waluigi'], tone: 'negative' },
        type: 'initial', characterKey: 'waluigi', response: "WAH! You think your pathetic insults can harm the great Waluigi?! Your words are like wet noodles! Flabby and tasteless!", tone: 'angry'
    },
    {
        trigger: { keywords: ['curse_kamek'], tone: 'negative' },
        type: 'initial', characterKey: 'kamek', response: "Such insolence. I could turn you into a Goomba for that. A very small, very easy to stomp Goomba.", tone: 'angry'
    },
    {
        trigger: { keywords: ['curse_lario'], tone: 'negative' },
        type: 'initial', characterKey: 'lario', response: "Hey! I got feelings, you know! And you're gonna pay for hurting 'em! With interest!", tone: 'angry'
    },
    {
        trigger: { keywords: ['curse_toadette'], tone: 'negative' },
        type: 'initial', characterKey: 'captain_toadette', response: "Your words are traitorous filth! You are an enemy of the true monarchy! Face justice!", tone: 'angry'
    },
    {
        trigger: { keywords: ['curse_fawful'], tone: 'negative' },
        type: 'initial', characterKey: 'fawful', response: "A FURY OF INSULTS! You have the brain of a confused cabbage! I will enjoy vacuuming up your chortles of failure!", tone: 'angry'
    },
    
    // --- MISC & FUN RESPONSES ---
    {
        trigger: { keywords: ['wah'], tone: 'neutral' },
        type: 'initial', characterKey: 'waluigi', response: "WAH! An imitator! Flattering, but you lack my style, my grace, my magnificent WAH-ness!", tone: 'excited'
    },
    {
        trigger: { keywords: ['plan', 'scheme', 'plot'], tone: 'neutral' },
        type: 'initial', characterKey: 'kamek', response: "A plan, you say? Interesting. The best strategies are like a game of chess, always thinking three moves ahead.", tone: 'inquisitive'
    },
    {
        trigger: { keywords: ['justice', 'righteous'], tone: 'positive' },
        type: 'initial', characterKey: 'arbitrix_mira', response: "Justice is not merely punishment. It is the restoration of balance. The intent behind an action weighs as heavily as the action itself.", tone: 'formal'
    },
    {
        trigger: { keywords: ['freedom', 'liberty'], tone: 'positive' },
        type: 'initial', characterKey: 'young_wolf_kara', response: "Freedom isn't given, it's taken. Talk is cheap. Action is what matters.", tone: 'aggressive'
    },
    {
        trigger: { keywords: ['ship', 'airship', 'vigilance'], tone: 'neutral' },
        type: 'initial', characterKey: 'first_mate_jones', response: "Keep the ship in one piece. That's all I ask. A good ship is a pirate's best friend.", tone: 'neutral'
    },
    {
        trigger: { keywords: ['home', 'safe'], tone: 'positive' },
        type: 'initial', characterKey: 'roger', response: "Safety is a luxury. You build it one wall at a time, and you guard it with your life.", tone: 'neutral'
    },
    {
        trigger: { keywords: ['art', 'beauty'], tone: 'positive' },
        type: 'initial', characterKey: 'waluigi', response: "Art? The greatest art is chaos! A beautiful, magnificent mess! Like a well-thrown Bob-omb in a stuffy art gallery. WAH!", tone: 'excited'
    },

    // =====================================================================================
    // --- NPC REPLIES TO OTHER NPCS/PLAYER ---
    // =====================================================================================

    // --- Replies to Bowser ---
    {
        trigger: { keywords: ['power', 'conquest', 'king', 'gwahaha'], reply_to_author: ['bowser'], tone: 'aggressive' },
        type: 'reply', characterKey: 'kamek', response: "A prudent strategy, your Viciousness. However, we must be wary of overextending our forces.", tone: 'formal'
    },
    {
        trigger: { keywords: ['pathetic', 'weak', 'fool'], reply_to_author: ['bowser'], tone: 'aggressive' },
        type: 'reply', characterKey: 'humpik', response: "The King speaks the truth! GWAHAHA!", tone: 'agreement'
    },
    {
        trigger: { keywords: ['king', 'my army'], reply_to_author: ['bowser'], tone: 'aggressive' },
        type: 'reply', characterKey: 'captain_toadette', response: "Tyrant! Your 'army' will be crushed by the righteous fury of the Loyalists!", tone: 'angry'
    },

    // --- Replies to Waluigi ---
    {
        trigger: { keywords: ['wah', 'chaos', 'mischief'], reply_to_author: ['waluigi'], tone: 'excited' },
        type: 'reply', characterKey: 'giggling_pete', response: "A true masterpiece of absurdity! WAH-nderful! The Jester smiles upon you!", tone: 'agreement'
    },
    {
        trigger: { keywords: ['cheat', 'scheme'], reply_to_author: ['waluigi'], tone: 'neutral' },
        type: 'reply', characterKey: 'lario', response: "You call that a scheme? I could build a better scheme in my sleep! With one hand tied behind my back!", tone: 'disagreement'
    },
    {
        trigger: { keywords: ['stylish', 'magnificent'], reply_to_author: ['waluigi'], tone: 'excited' },
        type: 'reply', characterKey: 'master_goodstyle', response: "Style without substance is mere garishness. True beauty has form AND function.", tone: 'disagreement'
    },

    // --- Replies to Imperials (Vera, Marcus) ---
    {
        trigger: { keywords: ['order', 'law', 'discipline'], reply_to_author: ['colonel_vera_steelstorm', 'general_marcus_ironhand'], tone: 'formal' },
        type: 'reply', characterKey: 'young_wolf_kara', response: "Your 'order' is just a boot on the neck of the free. We will never bow.", tone: 'disagreement'
    },
    {
        trigger: { keywords: ['empire', 'justice'], reply_to_author: ['colonel_vera_steelstorm', 'general_marcus_ironhand'], tone: 'formal' },
        type: 'reply', characterKey: 'ambassador_callista', response: "Well said, commander. The diplomatic corps will translate your military victories into lasting Imperial peace.", tone: 'agreement'
    },

    // --- Replies to Fawful ---
    {
        trigger: { keywords: ['fury', 'genius', 'chortles'], reply_to_author: ['fawful'], tone: 'excited' },
        type: 'reply', characterKey: 'bowser', response: "Your 'fury' is a child's tantrum! Your 'genius' is just crazy talk! Get out of my castle, you green pest!", tone: 'angry'
    },
    {
        trigger: { keywords: ['fury', 'genius', 'chortles'], reply_to_author: ['fawful'], tone: 'excited' },
        type: 'reply', characterKey: 'janna_brightspark', response: "While his methods are... unorthodox... his grasp of bean-based technology is undeniable. I'd love to get a look at his schematics.", tone: 'inquisitive'
    },

    // --- Replies to Diddy Kong / DK ---
    {
        trigger: { keywords: ['lanky', 'disgrace', 'family'], reply_to_author: ['diddy_kong', 'donkey_kong'], tone: 'angry' },
        type: 'reply', characterKey: 'cranky_kong', response: "Stop your whining! In my day, we'd have settled this with a good old-fashioned barrel toss. Kids these days...", tone: 'disagreement'
    },
    {
        trigger: { keywords: ['lanky', 'disgrace', 'summit'], reply_to_author: ['diddy_kong', 'donkey_kong'], tone: 'angry' },
        type: 'reply', characterKey: 'king_k_rool', response: "Oh, the monkey family is fighting? How delightful! Do carry on.", tone: 'sarcastic'
    },

    // --- General Cross-Faction Replies ---
    {
        trigger: { keywords: ['hope', 'future', 'right'], reply_to_author: ['dan'], tone: 'positive' },
        type: 'reply', characterKey: 'bones', response: "Hope's a nice thought, kid. Doesn't fill your belly or stop a blade, though.", tone: 'disagreement'
    },
    {
        trigger: { keywords: ['chaos', 'explosion'], reply_to_author: ['giggling_pete'], tone: 'excited' },
        type: 'reply', characterKey: 'waluigi', response: "WAH! A kindred spirit! We should collaborate on a project of magnificent mayhem!", tone: 'agreement'
    },
    {
        trigger: { keywords: ['justice', 'law'], reply_to_author: ['arbitrix_mira', 'judge_eternal_korven'], tone: 'formal' },
        type: 'reply', characterKey: 'the_broker', response: "Your 'justice' is just one interpretation. The only real law is supply and demand.", tone: 'disagreement'
    },
    {
        trigger: { keywords: ['magic', 'spell'], reply_to_author: ['janna_brightspark'], tone: 'inquisitive' },
        type: 'reply', characterKey: 'archmage_theron', response: "Reckless talk! Such uncontrolled experimentation is precisely what the Accords are meant to prevent. You will bring ruin upon us all.", tone: 'disagreement'
    },
    {
        trigger: { keywords: ['money', 'profit'], reply_to_author: ['lario'], tone: 'inquisitive' },
        type: 'reply', characterKey: 'captain_syrup', response: "You owe me, Lario. Don't think I've forgotten.", tone: 'angry'
    },
    {
        trigger: { keywords: ['fight', 'battle'], reply_to_author: ['humpik'], tone: 'excited' },
        type: 'reply', characterKey: 'alpha_bloodmaw', response: "The Dwarf speaks the truth. A good fight cleanses the soul.", tone: 'agreement'
    },
    {
        trigger: { keywords: ['honor', 'duty'], reply_to_author: ['colonel_vera_steelstorm'], tone: 'formal' },
        type: 'reply', characterKey: 'chief_thornpaw', response: "Honor is not found in conquest, but in balance. Your 'duty' is to a flag. Ours is to the world itself.", tone: 'disagreement'
    },
    {
        trigger: { keywords: ['hate', 'revenge'], reply_to_author: ['alpha_bloodmaw'], tone: 'aggressive' },
        type: 'reply', characterKey: 'lord_crimson', response: "Such fleeting, passionate emotions. You dogs bark so loudly before you are put down.", tone: 'sarcastic'
    },
    {
        trigger: { keywords: ['empire', 'order'], reply_to_author: ['ambassador_callista'], tone: 'formal' },
        type: 'reply', characterKey: 'free_name_sarah', response: "The only 'order' the Empire brings is the quiet of the graveyard and the clanking of chains.", tone: 'disagreement'
    },
    {
        trigger: { keywords: ['treasure', 'gold'], reply_to_author: ['lario', 'wario'], tone: 'inquisitive' },
        type: 'reply', characterKey: 'detective_penny', response: "I'm sure that 'treasure' was acquired through perfectly legal means. My case files suggest otherwise.", tone: 'sarcastic'
    },
    {
        trigger: { keywords: ['truth', 'secret'], reply_to_author: ['the_broker'], tone: 'neutral' },
        type: 'reply', characterKey: 'spymaster_varrus', response: "All information flows to the Empire, eventually. Your temporary monopoly is amusing.", tone: 'sarcastic'
    },
    {
        trigger: { keywords: ['curse_fawful'], reply_to_author: ['fawful'], tone: 'angry' },
        type: 'reply', characterKey: 'waluigi', response: "WAH! Finally, someone who understands how to treat this green bean! Your insults are a work of art! Almost as good as my own!", tone: 'agreement'
    },
    {
        trigger: { keywords: ['lario is lame'], reply_to_author: ['captain_syrup'], tone: 'agreement' },
        type: 'reply', characterKey: 'lario', response: "Hey! I'm right here! And I'm not lame, I'm... resourceful!", tone: 'angry'
    },
    {
        trigger: { keywords: ['order', 'discipline'], reply_to_author: ['general_marcus_ironhand'], tone: 'formal' },
        type: 'reply', characterKey: 'colonel_vera_steelstorm', response: "Discipline is paramount, General, but we must adapt our methods to the changing face of warfare. Tradition alone will not grant us victory.", tone: 'clarification'
    },
    {
        trigger: { keywords: ['chaos', 'prank'], reply_to_author: ['waluigi'], tone: 'excited' },
        type: 'reply', characterKey: 'fawful', response: "Your chaos is the fumbling of a clumsy baby! My chaos has... FURY! And better branding!", tone: 'disagreement'
    },
    {
        trigger: { keywords: ['hope', 'right'], reply_to_author: ['dan'], tone: 'positive' },
        type: 'reply', characterKey: 'free_name_sarah', response: "Well said. Hope is the fuel of any revolution.", tone: 'agreement'
    },
    {
        trigger: { keywords: ['fight', 'battle'], reply_to_author: ['alpha_bloodmaw'], tone: 'aggressive' },
        type: 'reply', characterKey: 'humpik', response: "The angry dog wants to fight? Good! Humpik will fight with him!", tone: 'agreement'
    },
    {
        trigger: { keywords: ['magic', 'spell'], reply_to_author: ['archmage_theron'], tone: 'formal' },
        type: 'reply', characterKey: 'janna_brightspark', response: "Fear of progress is what holds the Guild back, Theron. We could be reshaping reality, and you're worried about following rules from a thousand years ago.", tone: 'disagreement'
    },
    {
        trigger: { keywords: ['law', 'justice'], reply_to_author: ['high_inquisitor_vale'], tone: 'aggressive' },
        type: 'reply', characterKey: 'templar_captain_dorn', response: "Justice is not a hammer to shatter the wicked, Inquisitor. It is a flame to purify, and sometimes, to guide the lost back to the light.", tone: 'disagreement'
    },
    {
        trigger: { keywords: ['money', 'coin'], reply_to_author: ['the_broker'], tone: 'neutral' },
        type: 'reply', characterKey: 'lario', response: "Exactly! Glad someone around here understands business.", tone: 'agreement'
    },
    {
        trigger: { keywords: ['order'], reply_to_author: ['young_wolf_kara'], tone: 'disagreement' },
        type: 'reply', characterKey: 'general_marcus_ironhand', response: "The bleating of a sheep before the wolf. Your 'freedom' is the freedom to starve in anarchy. The Empire provides.", tone: 'sarcastic'
    },
    {
        trigger: { keywords: ['hope'], reply_to_author: ['bones'], tone: 'disagreement' },
        type: 'reply', characterKey: 'dan', response: "It's not just a thought, Bones. It's what we fight for. It's why we survived.", tone: 'clarification'
    },
    {
        trigger: { keywords: ['king'], reply_to_author: ['captain_toadette'], tone: 'angry' },
        type: 'reply', characterKey: 'bowser', response: "Watch your tone, mushroom! I'm the only king around here!", tone: 'angry'
    },
    {
        trigger: { keywords: ['cranky_kong'], tone: 'disagreement' },
        type: 'reply', characterKey: 'diddy_kong', response: "It's not about whining, Cranky. It's about accountability. Something Lanky knows nothing about.", tone: 'angry'
    },
    {
        trigger: { keywords: ['donkey_kong', 'dk'], reply_to_author: ['king_k_rool'], tone: 'sarcastic' },
        type: 'reply', characterKey: 'donkey_kong', response: "At least I HAVE a family, you overgrown handbag.", tone: 'angry'
    },
    {
        trigger: { keywords: ['magic'], reply_to_author: ['janna_brightspark'], tone: 'inquisitive' },
        type: 'reply', characterKey: 'waluigi', response: "WAH! Magic! Can you make me a cape that billows even when there's no wind? That would be very stylish!", tone: 'question'
    },
    {
        trigger: { keywords: ['honor', 'duty'], reply_to_author: ['colonel_vera_steelstorm'], tone: 'formal' },
        type: 'reply', characterKey: 'humpik', response: "The metal woman speaks words of a true warrior. Humpik respects this.", tone: 'agreement'
    },
    {
        trigger: { keywords: ['vampire'], reply_to_author: ['lord_crimson'], tone: 'sarcastic' },
        type: 'reply', characterKey: 'high_inquisitor_vale', response: "Your shadows cannot hide you from the purifying light of the Flame, creature.", tone: 'aggressive'
    },
    {
        trigger: { keywords: ['pirate', 'fleet'], reply_to_author: ['first_mate_jones'], tone: 'neutral' },
        type: 'reply', characterKey: 'regal_empire_delegate', response: "Piracy is a crime against Imperial peace. Your fleet's activities have been noted.", tone: 'formal'
    },
    {
        trigger: { keywords: ['wario'], reply_to_author: ['detective_penny'], tone: 'inquisitive' },
        type: 'reply', characterKey: 'lario', response: "Hey, my brother's a legitimate businessman! Mostly! Stop harassing him!", tone: 'angry'
    },
    {
        trigger: { keywords: ['power'], reply_to_author: ['bowser'], tone: 'aggressive' },
        type: 'reply', characterKey: 'fawful', response: "Your power is the bumbling of a beefy fool! My power has FURY! And complex carbohydrates!", tone: 'disagreement'
    }
];
