

// This file contains all of Archie's personal quests.
export const ARCHIE_QUESTS = {
    'archie_god_toad_hunt': {
        id: 'archie_god_toad_hunt',
        title: "An Audience with a God",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "Months ago, Archie betrayed a powerful toad who held a single, potent Star Fragment. That toad has since used its power to shatter it into nine pieces, distribute them to his followers, and ascend to godhood. Archie must now confront the chaotic god he helped create.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "active",
        motivation: "This has escalated beyond a personal matter. The God Toad's ability to manipulate time itself, witnessed at Fawful's Gala, proves he is not just a god, but a cosmic-level threat to causality. Archie, fascinated and terrified, seeks an audience to understand the nature of this temporal power and to see if it can be controlled, stolen, or must be destroyed.",
        steps: [
            { id: 'step1', title: "Locate the God", status: 'completed', description: "Intelligence gathered during the Gala infiltration has confirmed the God Toad's current location: he is a 'guest of honor' at Fawful's occupied castle." },
            { id: 'step2', title: "Infiltrate the Madhouse", status: 'active', description: "The castle is a fortress of madness, besieged by Loyalists and defended by Fawful's bizarre minions. Archie must find a way inside to get to his true target." },
            { id: 'step3', title: "Request an Audience", status: 'locked', description: "Confront the God Toad and request an audience. Given the being's power, a direct assault is likely suicide." }
        ]
    },
    'archie_jesters_masterpiece': {
        id: 'archie_jesters_masterpiece',
        title: "The Jester's Masterpiece",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "Create an act of sublime, beautiful, and utterly pointless chaos to gain the full favor of the Servants of the Cosmic Jester.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "available",
        motivation: "Archie sees the Cosmic Jester as a kindred spirit, a being that truly understands him. He wants to create a 'masterpiece' of chaos not for profit or power, but as an act of pure artistic expression to impress his only perceived peer.",
        steps: [
            { id: 'step1', title: "The Grand Idea", status: 'active', description: "What would be the ultimate prank? The most chaotic act? Archie must decide on his masterpiece.", options: ["Option A: Replace the Mages' Guild's scrying pool with grape juice.", "Option B: Teach the Iron Legion's war hounds to sing opera.", "Option C: Steal the Emperor's left shoe."] },
            { id: 'step2', title: "Gather the 'Paints'", status: 'locked', description: "Acquire the necessary components for the chosen act of chaos. This will likely involve theft, trickery, and explosions." },
            { id: 'step3', title: "The Performance", status: 'locked', description: "Execute the plan and unveil the masterpiece to an unsuspecting world." }
        ]
    },
    'archie_ultimate_heist': {
        id: 'archie_ultimate_heist',
        title: "The Ultimate Heist",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "Pull off the most audacious heist imaginable: steal the mustache wax of Emperor Elagabalus right from his private chambers in the Imperial Palace.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "available",
        motivation: "For Archie, it's not about the wax. It's about the sheer, glorious absurdity of the act. It's performance art, a middle finger to the most powerful man in the world, and a story that will be told in every tavern for a hundred years.",
        steps: [
            { id: 'step1', title: "Case the Joint", status: 'active', description: "Infiltrate the Imperial Palace during a state dinner to scout the layout, guard patrols, and the location of the Emperor's private quarters." },
            { id: 'step2', title: "Acquire the Tools", status: 'locked', description: "Obtain a set of anti-magical lockpicks from the Freelancer Underworld and a 'silence' grenade from the Ratchet Raiders." },
            { id: 'step3', title: "The Grand Performance", status: 'locked', description: "Execute the heist, leaving behind a calling card to ensure everyone knows who was responsible for the Emperor's bad mustache day." }
        ]
    },
    'archie_iron_fists_payback': {
        id: 'archie_iron_fists_payback',
        title: "Payback's a Blast",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "The Iron Fists have a bounty on Archie's head. It's time to turn the tables and dismantle their new leadership in a way they'll never forget.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "available",
        motivation: "This isn't just about defense; it's about making a statement. Archie wants to humiliate the Iron Fists so thoroughly that no one will ever dare to put a price on his head again. He intends to make their headquarters the site of his next great art installation.",
        steps: [
            { id: 'step1', title: "Find the New Boss", status: 'active', description: "After the party's last raid, the Iron Fists have a new, more paranoid leader. Find out who they are and where they operate." },
            { id: 'step2', title: "The Perfect Firework", status: 'locked', description: "Convince the Ratchet Raiders' 'Da Boomers' faction to build a custom 'Waluigi-Brand Surprise Box'—a massive, glitter-filled firework." },
            { id: 'step3', title: "Special Delivery", status: 'locked', description: "Infiltrate the new Iron Fists headquarters and replace their main ammo crate with the 'Surprise Box' before their next big meeting." }
        ]
    },
    'archie_kamek_conundrum': {
        id: 'archie_kamek_conundrum',
        title: "The Kamek Conundrum",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "Kamek and the Koopa Troop's Magikoopa Cabal don't trust Archie. He needs to secure leverage over them to ensure they don't try to 'magically fix' him later.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "available",
        motivation: "Archie knows that Bowser's loyalty is fickle, but Kamek's is absolute—to the Koopa Kingdom. He sees Kamek as the real threat to his autonomy and wants to find some dirt to ensure the old Magikoopa stays in line.",
        steps: [
            { id: 'step1', title: "Find the Skeleton in the Robe", status: 'active', description: "Every old wizard has a secret. Delve into Koopa Troop historical archives to find records of Kamek's greatest failures or most embarrassing secrets." },
            { id: 'step2', title: "The Proof", status: 'locked', description: "It's not enough to know the secret; Archie needs proof. This involves a risky trip to a secure Koopa vault or a forgotten library." },
            { id: 'step3', title: "A Private Conversation", status: 'locked', description: "Present the evidence to Kamek not as a threat, but as an 'insurance policy' for their continued, 'fruitful' alliance." }
        ]
    },
    'archie_mages_guild_prank': {
        id: 'archie_mages_guild_prank',
        title: "An Arcane Annoyance",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "The Mages' Guild hates Archie. The feeling is mutual. He decides to play a prank on them by enchanting their library's books to sing off-key whenever a 'Conservator' opens them.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "available",
        motivation: "Pure, unadulterated spite. Archie finds the Mages' Guild's stuffiness to be an invitation for mockery, and he's more than happy to oblige.",
        steps: [
            { id: 'step1', title: "The Annoyance Aria", status: 'active', description: "Commission a particularly grating song from a tone-deaf bard in the Freelancer Underworld." },
            { id: 'step2', title: "Mass Enchantment", status: 'locked', description: "Sneak into the Mages' Guild's library and cast a wide-area, low-power enchantment scroll that links the song to the books." }
        ]
    },
    'archie_vampire_poker': {
        id: 'archie_vampire_poker',
        title: "Vampire Poker Night",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "Archie learns of a high-stakes poker game hosted by Lord Crimson of the Onyx Hand. The buy-in isn't gold, but secrets. Archie decides to crash the party.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "available",
        motivation: "Archie loves chaos and high stakes. A poker game with ancient vampires where the currency is secrets is the most exciting game he's ever heard of. He wants in.",
        steps: [
            { id: 'step1', title: "Get an Invitation", status: 'active', description: "The game is exclusive. Archie must either steal an invitation or perform a favor for a lesser vampire to get a seat at the table." },
            { id: 'step2', title: "Ante Up", status: 'locked', description: "Archie needs a valuable secret to even buy into the game. He'll have to uncover one, perhaps from Markop's past or Bowser's war plans." },
            { id: 'step3', title: "Play the Game", status: 'locked', description: "Survive a night of poker against opponents who can read minds and have centuries of bluffing experience. The goal isn't just to win, but to cause as much paranoia as possible." }
        ]
    },
    'archie_ratchet_race': {
        id: 'archie_ratchet_race',
        title: "The Great Goblin Grand Prix",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "The Ratchet Raiders are hosting their annual, highly dangerous airship race. Archie decides he not only wants to enter, he wants to win by using the most ridiculously over-powered, unstable engine imaginable.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "available",
        motivation: "It's a race with explosions. For Archie, this is the perfect combination of his two favorite hobbies.",
        steps: [
            { id: 'step1', title: "Build a 'Racer'", status: 'active', description: "Acquire a barely-functional airskiff and convince Lario to help him strap a stolen Imperial siege engine to it." },
            { id: 'step2', title: "Enter the Race", status: 'locked', description: "Pay the entry fee (a pile of high-quality scrap) and survive the qualifying heats." },
            { id: 'step3', title: "Win... or Explode Gloriously", status: 'locked', description: "Compete in the final race, where cheating isn't just allowed, it's encouraged." }
        ]
    },
    'archie_unchained_broadcast': {
        id: 'archie_unchained_broadcast',
        title: "A Message from the Underground",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "The Unchained want to broadcast a message of rebellion across the Empire, but the Imperials control the airwaves. They need Archie's expertise in chaos to hijack the main Imperial propaganda station.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "available",
        motivation: "Archie doesn't care about their message, but he adores the idea of replacing the Emperor's boring speech with revolutionary poetry or, even better, just static. It's a grand stage for his art.",
        steps: [
            { id: 'step1', title: "Find the Transmitter", status: 'active', description: "Locate the secret Imperial broadcast tower, hidden deep in the mountains." },
            { id: 'step2', title: "Create a Diversion", status: 'locked', description: "Cause a massive, unrelated explosion on the other side of the mountain to draw away the bulk of the tower's Iron Legion guards." },
            { id: 'step3', title: "Flip the Switch", status: 'locked', description: "Break into the broadcast room and rig it to transmit the Unchained's message... with a few of Archie's own chaotic modifications." }
        ]
    },
    'archie_wario_ghost': {
        id: 'archie_wario_ghost',
        title: "Ghost in the Machine",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "Wario's ghost is still rumored to be haunting the dimensional flux around the Vigilance. Archie wants to find a way to communicate with it, believing it might know the location of a legendary treasure.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "available",
        motivation: "Greed, pure and simple. But also curiosity. How does a ghost work? Can he weaponize it? These are the questions that keep Archie up at night.",
        steps: [
            { id: 'step1', title: "The Ghost Radio", status: 'active', description: "Convince Ryan to build a 'spectral transceiver' from parts of X.O.'s old equipment, a device that can theoretically communicate with ghosts." },
            { id: 'step2', title: "Tune In", status: 'locked', description: "Use the transceiver to find Wario's spectral frequency in the chaotic energies surrounding the ship." },
            { id: 'step3', title: "A Ghostly Bargain", status: 'locked', description: "Negotiate with the ghost of Wario for the location of his last, greatest treasure hoard." }
        ]
    },
    'archie_tea_leaf_revenge': {
        id: 'archie_tea_leaf_revenge',
        title: "A Dish Served Loud",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "The Tea Leaf Syndicate attempted to strong-arm the party. Archie responded by turning their meeting into a massive, explosive brawl, effectively crushing their local power base.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "completed",
        motivation: "They tried to kill him, and Archie considers that very rude. He saw their meeting as the perfect opportunity to remind them that messing with him is a bad idea, and also to test out his new sonic grenades.",
        steps: [
            { id: 'step1', title: "Attend the 'Meeting'", status: 'completed', description: "Archie and Humpik attended a meeting with the Tea Leaf Syndicate that was clearly a trap." },
            { id: 'step2', title: "Press the Panic Button", status: 'completed', description: "Sensing a double-cross, Archie pressed a panic button, summoning Toad Gang and Iron Legion forces to the fray." },
            { id: 'step3', title: "Unleash Chaos", status: 'completed', description: "In the ensuing chaos, Archie unleashed a massive fireball, killing most of the Syndicate's enforcers and crippling their organization." }
        ]
    },
    'archie_fawful_fanboy': {
        id: 'archie_fawful_fanboy',
        title: "A Meeting of Minds",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "Archie has heard tales of the mad genius Fawful and is deeply impressed. He wants to meet him, not as an enemy, but as a professional courtesy, to exchange notes on chaos and villainy.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "available",
        motivation: "Archie sees Fawful as a fellow artist. He's not interested in the castle or the politics; he's interested in Fawful's methods, his madness, and his glorious, furious monologues.",
        steps: [
            { id: 'step1', title: "The Gift Basket", status: 'active', description: "To get Fawful's attention, Archie must send a gift: a crate of high-explosives arranged in the shape of Fawful's face." },
            { id: 'step2', title: "The Invitation", status: 'locked', description: "If Fawful is impressed, he will send an invitation for a private meeting. It is probably a trap." },
            { id: 'step3', title: "A Professional Chat", status: 'locked', description: "Survive the likely trap and have a conversation with Fawful about the finer points of evil genius." }
        ]
    },
    'archie_perfect_diversion': {
        id: 'archie_perfect_diversion',
        title: "The Perfect Diversion",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "Archie needs a place where he can lie low and experiment in peace. He decides to create the ultimate diversion by fabricating evidence of a massive gold deposit in the middle of the vampire-werewolf warzone, sending every greedy faction scrambling.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "available",
        motivation: "The world is getting too interested in the Vigilance. Archie wants everyone to look the other way for a while, and he knows nothing distracts people like the promise of free gold.",
        steps: [
            { id: 'step1', title: "The Fake Map", status: 'active', description: "Commission a master forger from the Freelancer Underworld to create an ancient-looking map to the 'Lost Imperial Mint of Ravencreek'." },
            { id: 'step2', title: "Salt the Mine", status: 'locked', description: "Acquire a small amount of gold and 'plant' it in an abandoned mine in the contested territory, along with some fake historical markers." },
            { id: 'step3', title: "Leak the Intel", status: 'locked', description: "Leak the map to the most avaricious factions—Wario Land, the Ratchet Raiders, and the Crimson Fleet—and watch the chaos unfold from a safe distance." }
        ]
    },
    'archie_three_eyed_king': {
        id: 'archie_three_eyed_king',
        title: "The Three-Eyed King",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "The Toad Gang's Mushroom Skulls faction, who owe their rise to Archie's defeat of Big T, have begun to worship him as a figure of chaos. They offer him the crown of the Toad Gang. Archie is intrigued.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "available",
        motivation: "Archie has no interest in ruling, but the sheer absurdity of being the king of a mushroom-themed crime syndicate is too hilarious to pass up. He wants to see how far he can take the joke.",
        steps: [
            { id: 'step1', title: "The Coronation", status: 'active', description: "Attend the coronation ceremony in the Toad Gang's sewer headquarters." },
            { id: 'step2', title: "First Royal Decree", status: 'locked', description: "As the new king, Archie must issue his first decree.", options: ["A) Declare war on the color beige.", "B) Make juggling a mandatory skill for all gang members.", "C) Order the construction of a giant, gold-plated statue of himself."] },
            { id: 'step3', title: "Abdicate in Style", status: 'locked', description: "After a day of glorious, chaotic rule, Archie must abdicate the throne in the most dramatic and confusing way possible, leaving the Toad Gang even more disorganized than he found it." }
        ]
    },
    'archie_annoy_a_judge': {
        id: 'archie_annoy_a_judge',
        title: "Contempt of a Cosmic Court",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "The Oathbound Judges are a symbol of absolute, unwavering order. Archie finds this personally offensive. He decides to find a loophole in their ancient, cosmic law and exploit it for his own amusement.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "available",
        motivation: "To prove that no system is perfect, no law is absolute, and everything can be broken with enough creativity and a flagrant disregard for consequences.",
        steps: [
            { id: 'step1', title: "The Law Library", status: 'active', description: "Acquire a copy of the Oathbound Judges' legal code, a tome of infinite length and soul-crushing boredom." },
            { id: 'step2', title: "The Loophole", status: 'locked', description: "Find an ancient, forgotten law—for example, a law stating that all legal disputes must be postponed if a goose steals the judge's gavel." },
            { id: 'step3', title: "The Goose", status: 'locked', description: "Train a goose." }
        ]
    },
    'archie_bryan_vengeance': {
        id: 'archie_bryan_vengeance',
        title: "The Ghost of the Past",
        type: 'personal',
        category: 'Personal - Archie',
        objective: "Confront Bryan, a toad from Archie's past who believes Archie betrayed him and left him for dead in an airship explosion. Bryan, now a member of the Mushroom Skulls and empowered by the 'God Toad', is actively hunting Archie for revenge.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "active",
        motivation: "This isn't just another bounty hunter; this is personal. Bryan represents a past Archie thought was buried. Confronting him is about tying up a loose end, but also facing a direct consequence of his chaotic lifestyle, a consequence that now has divine backing and a serious grudge.",
        steps: [
            { id: 'step1', title: "The First Encounter", status: 'active', description: "Bryan is hunting you. The first step is to survive his initial, surprise attack." },
            { id: 'step2', title: "Investigate the 'God Toad'", status: 'locked', description: "Learn more about the entity that saved and empowered Bryan. Understanding the source of his new power is key to defeating him." },
            { id: 'step3', title: "The Final Showdown", status: 'locked', description: "Confront Bryan and deal with his quest for vengeance, one way or another." }
        ]
    }
};
