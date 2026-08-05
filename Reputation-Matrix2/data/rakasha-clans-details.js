// This file contains the detailed operational data for the Rakasha Clans' system.
// Deeply integrated with plot events and the investigation into Princess Peach's death.
 
export const RAKASHA_DETAILS = {
    description: "The Rakasha are a deeply traditional and secretive people who inhabit the wild borderlands between civilized nations. To outsiders, all members are known simply as 'Rakasha'—a practice that protects their true identities from those who would use names as weapons. Their society is built around three major clans, each following a different 'College of Thought.' Recent political upheavals, including the Supernatural Sovereignty Act, have forced them to reconsider their isolation.",
    
    clans: [
        {
            id: 'spirit_walkers',
            name: 'Spirit-Walkers',
            sigil: 'assets/icons/icon_spirit.png',
            philosophy: 'College of the Unseen',
            philosophy_desc: 'Believe that the balance of the physical and spiritual worlds is paramount. They are the shamans, healers, and keepers of ancestral knowledge who guide the clans with wisdom and foresight. The Spirit-Walkers maintain the sacred bond between the living and the dead.',
            extendedLore: 'The Spirit-Walkers trace their lineage to the first Rakasha who learned to hear the whispers of the departed. Their sacred groves contain bone chimes that have sung for centuries, each note carrying the voice of an ancestor. In times of crisis, the Spirit-Walkers perform the Rite of Seeing—a dangerous ritual that allows them to glimpse possible futures.',
            currentObjective: 'Investigating the spiritual disturbances emanating from the Mushroom Kingdom since the Iron Mandate was enacted.',
            members: [
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Chief Thornpaw', 
                    role: 'Clan Leader & High Shaman',
                    isLeader: true,
                    plotRelevant: true,
                    detail: 'Has been unusually distracted since the Fawful gala. Carries a secret that burdens him greatly.'
                },
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Elder Moon-Eye', 
                    role: 'Seer of the Three Moons',
                    detail: 'Blind since birth, yet sees more than most. Recently spoke of "pink light returning to darkness."'
                },
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Whisper-in-Wind', 
                    role: 'Death Speaker',
                    detail: 'Communes with the recently deceased. Has been attempting to contact spirits near Castle Peach.'
                },
                { 
                    public_name: 'Dan', 
                    true_name: 'Dan (student)', 
                    role: 'Acolyte',
                    detail: 'A toad who came seeking spiritual guidance. Has shown surprising aptitude for spirit-work.'
                }
            ],
            secrets: [
                {
                    intelRequired: 70,
                    content: "Chief Thornpaw was romantically involved with Princess Peach before her assassination in 955 BF. He has never spoken of this to his clan.",
                    critical: true
                },
                {
                    intelRequired: 85,
                    content: "Thornpaw knows of a secret hatch in Princess Peach's private chambers—knowledge that could be crucial to solving her murder.",
                    critical: true
                },
                {
                    intelRequired: 95,
                    content: "The Spirit-Walkers have been receiving disturbing visions: the Princess's spirit cannot find rest. Something—or someone—is preventing her from crossing over."
                }
            ]
        },
        {
            id: 'beast_riders',
            name: 'Beast-Riders',
            sigil: 'assets/icons/icon_offense.png',
            philosophy: 'College of the Claw',
            philosophy_desc: 'Hold that strength and martial prowess are the highest virtues. They are the warriors and protectors of the clans, forming deep bonds with their animal mounts and seeking glory in honorable combat. A Beast-Rider\'s mount is considered an extension of their soul.',
            extendedLore: 'The Beast-Riders emerged during the First Wars when the Rakasha needed defenders against expansion from the nascent kingdoms. They developed the sacred art of beast-bonding, a ritual that links rider and mount on a spiritual level. When one dies, the other often follows within days.',
            currentObjective: 'Preparing defensive positions in case the Iron Legion expands operations into Rakasha territory.',
            members: [
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Warchief Ironmane', 
                    role: 'Supreme Champion',
                    isLeader: true,
                    detail: 'Rides a massive scarred wyvern named Stormbreaker. Has fought the Iron Legion before and bears the scars.'
                },
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Kira Blood-Tusk', 
                    role: 'Rider Captain',
                    detail: 'Commands the Crimson Wing squadron. Fierce advocate for striking first against Legion encroachment.'
                },
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Gorok Stone-Hide', 
                    role: 'Beast Master',
                    detail: 'Oversees the breeding and training of war beasts. His armored basilisk, "Granite," is legendary.'
                },
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Swift-Fang', 
                    role: 'Scout Commander',
                    detail: 'Leads reconnaissance missions. Recently reported increased Legion aerial patrols near the border.'
                }
            ],
            secrets: [
                {
                    intelRequired: 60,
                    content: "The Beast-Riders have been secretly training additional war beasts, tripling their mounted force in preparation for conflict."
                },
                {
                    intelRequired: 80,
                    content: "Warchief Ironmane has been in covert communication with the DK Crew, exploring a potential military alliance against the Iron Legion."
                }
            ]
        },
        {
            id: 'huntmasters',
            name: 'Huntmasters',
            sigil: 'assets/icons/icon_scout.png',
            philosophy: 'College of the Wild',
            philosophy_desc: 'Value survival, pragmatism, and a deep understanding of the natural world. They are the scouts, trackers, and providers who ensure the clans endure any hardship. The Huntmasters believe that adaptation is the highest form of wisdom.',
            extendedLore: 'The Huntmasters are the most numerous of the clans, though also the most dispersed. They maintain a network of hidden caches and safe houses across the continent, making them invaluable intelligence gatherers. Their tracking abilities are renowned—it is said a Huntmaster can follow a ghost through a rainstorm.',
            currentObjective: 'Monitoring the movements of all major factions and establishing escape routes should war come to Rakasha lands.',
            members: [
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Silent-Step', 
                    role: 'Master Tracker',
                    isLeader: true,
                    detail: 'Has not spoken a word in twenty years. Communicates through hand signals and written notes.'
                },
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Asha Whisperwind', 
                    role: 'Lead Scout',
                    plotRelevant: true,
                    detail: 'Recently returned from a deep infiltration mission. Her report on Iron Legion activities was alarming.'
                },
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Red-Claw', 
                    role: 'Survival Instructor',
                    detail: 'Lost an arm to frostbite years ago. Now teaches young Rakasha to survive in any environment.'
                }
            ],
            secrets: [
                {
                    intelRequired: 55,
                    content: "The Huntmasters maintain intelligence dossiers on every major political figure in the region, including the party members."
                },
                {
                    intelRequired: 75,
                    content: "Asha Whisperwind witnessed the signing of the Supernatural Sovereignty Act and believes it was engineered by forces within the Iron Legion's upper command."
                }
            ]
        }
    ],
    
    spiritBonds: [
        {
            mortal: 'Thornpaw',
            spirit: 'Princess Peach (?)',
            type: 'death',
            strength: 'broken',
            status: 'unstable',
            description: 'A bond that should have faded 85 years ago, but something prevents it from dissolving completely.',
            intelRequired: 80
        },
        {
            mortal: 'Moon-Eye',
            spirit: 'The Three Seers',
            type: 'prophetic',
            strength: 'strong',
            status: 'active',
            description: 'An ancient connection to three legendary Rakasha oracles who died defending their people.',
            intelRequired: 40
        },
        {
            mortal: 'Ironmane',
            spirit: 'Stormbreaker (living)',
            type: 'guardian',
            strength: 'powerful',
            status: 'active',
            description: 'The bond between rider and mount is so strong that they share pain and emotion.',
            intelRequired: 30
        },
        {
            mortal: 'Whisper-in-Wind',
            spirit: 'The Waiting Dead',
            type: 'death',
            strength: 'moderate',
            status: 'active',
            description: 'A channel to those souls who have unfinished business in the mortal world.',
            intelRequired: 50
        },
        {
            mortal: 'Ryan (guest)',
            spirit: 'Unknown Ancestor',
            type: 'nature',
            strength: 'nascent',
            status: 'forming',
            description: 'During the sacred rites witnessed on Day 20, something unexpected began to form.',
            intelRequired: 60
        }
    ],
    
    ancestralMemories: [
        {
            id: 'peach_warning',
            icon: '👁',
            title: 'The Pink Dawn',
            content: 'A vision of a woman in pink, standing at a window. She speaks of danger, of betrayal from within. The vision always ends with her falling into darkness.',
            fullContent: 'The ancestral memory is fragmented but clear: Princess Peach stands at her chamber window in Castle Peach, speaking urgently to someone unseen. "They\'re coming for me," she says. "The council, the advisors—they don\'t understand what I\'ve discovered. If I fall, look for the hatch beneath the rose. The truth is hidden there." The vision shatters into pink light, and the sound of chimes fills the void.',
            partialHint: 'Fragments of a warning... a woman in pink... danger...',
            intelRequired: 65,
            plotRelevance: 'The Princess\'s Assassination (955 BF)',
            relatedEvents: ['The Princess is Dead', 'Secrets at the Gala'],
            critical: true
        },
        {
            id: 'iron_shadow',
            icon: '⚔',
            title: 'The Iron Shadow',
            content: 'A premonition of iron-clad soldiers marching through sacred groves. The bone chimes fall silent. The spirits weep.',
            fullContent: 'The memory shows a possible future: Iron Legion banners flying over burned Rakasha villages. Spirit-Walkers in chains. The great totem of the Three Clans toppled and used for firewood. But the vision shifts—a group of unlikely heroes stands against the tide. Their faces are unclear, but one has three eyes...',
            partialHint: 'A dark army... sacred places defiled...',
            intelRequired: 45,
            plotRelevance: 'The Iron Mandate & Supernatural Sovereignty Act',
            relatedEvents: ['Iron Mandate Enacted', 'The Supernatural Sovereignty Act']
        },
        {
            id: 'dragon_pact',
            icon: '🔥',
            title: 'The Old Alliance',
            content: 'Long ago, the Rakasha and the dragons spoke as equals. That alliance was broken. Now, the dragons return, but not as friends.',
            fullContent: 'In the time before the First Wars, the Rakasha and dragonkind maintained a sacred pact of mutual respect. The dragons provided wisdom and protection; the Rakasha honored them with offerings and territory. When the kingdoms rose and began slaying dragons for glory, the Rakasha were forced to choose sides. They chose survival. The dragons never forgave them. Now Fawful has allied with dragons, and the old grudge may finally be settled.',
            partialHint: 'An ancient pact... broken trust... fire returns...',
            intelRequired: 55,
            plotRelevance: 'Fawful\'s Dragon Alliance',
            relatedEvents: ['Dragon Slain', 'Chaos on the Vigilance']
        },
        {
            id: 'mirror_curse',
            icon: '🪞',
            title: 'The Shattered Reflection',
            content: 'The ancestors warn: beware the mirrors of Raventree. Something ancient and hungry lives in the glass.',
            fullContent: 'This memory surfaces unbidden whenever a Rakasha spirit-walker attempts to scry on Raventree Manor. The vision shows a grand ballroom filled with mirrors, each reflecting a different version of reality. In the center stands a figure—the Oracle—but his reflection shows something else entirely: a being of fractured light and consuming hunger. "Do not clean the mirrors," the ancestors whisper. "Let the dust hide what should not be seen."',
            partialHint: 'Mirrors... danger... an ancient warning...',
            intelRequired: 50,
            plotRelevance: 'The Haunting of Raventree Manor',
            relatedEvents: ['The Haunting of Raventree Manor', 'Green T Lost', 'The Mirror Door Breach']
        },
        {
            id: 'toad_liberation',
            icon: '🍄',
            title: 'The Small People',
            content: 'The spirits show sympathy for the toads. They were once free, like the Rakasha. They may be free again, if they find the right allies.',
            fullContent: 'The ancestral memory reveals a time before the Mushroom Kingdom when toads lived in scattered, independent communities across the land. They were gatherers, traders, and surprisingly fierce when threatened. The rise of the monarchy changed everything—protection came at the cost of freedom. The spirits see echoes of their own story in the Liberated Toads\' struggle and urge caution: freedom won through blood is often lost again.',
            partialHint: 'Small ones... once free... a parallel path...',
            intelRequired: 35,
            plotRelevance: 'The Liberated Toads Movement',
            relatedEvents: ['The Barrel Secret Revealed', 'Betrayal on the Airship']
        }
    ],
    
    traditions: [
        {
            name: "Festival of the Fallen",
            description: "A sacred night where the Rakasha honor the cycle of life and death. Bonfires are lit to guide spirits, and chimes made from the bones of honored ancestors are hung from trees to sing with the wind. It is a celebration of life's persistence, not a mourning of its end.",
            date: "Highsun 20",
            critical: true,
            witnessed: "Ryan"
        },
        {
            name: "The Naming Silence",
            description: "A week-long observance where no true names are spoken aloud. It commemorates the Great Betrayal of ages past, when enemies used stolen names to curse an entire clan.",
            date: "Highsun 25"
        },
        {
            name: "The Hunt of Three Moons",
            description: "When three moons align (a rare occurrence), all able-bodied Rakasha participate in a great hunt. The prey caught is distributed equally among all clans, reinforcing unity.",
            date: "Variable"
        }
    ],
    
    currentStatus: {
        threatLevel: 75,
        threatLabel: 'ELEVATED',
        factors: [
            {
                type: 'danger',
                icon: '⚠',
                text: 'Iron Mandate grants Legion emergency powers to target supernatural beings'
            },
            {
                type: 'danger',
                icon: '🔥',
                text: 'Supernatural Sovereignty Act criminalizes organized supernatural groups'
            },
            {
                type: 'warning',
                icon: '⚔',
                text: 'Increased Legion aerial patrols near Rakasha territory borders'
            },
            {
                type: 'neutral',
                icon: '🛡',
                text: 'Beast-Rider defensive preparations ongoing'
            },
            {
                type: 'positive',
                icon: '🤝',
                text: 'Potential DK Crew alliance under discussion'
            }
        ],
        internalTensions: [
            {
                parties: ['Beast-Riders', 'Spirit-Walkers'],
                issue: 'Disagreement on whether to strike first or wait for Legion aggression'
            },
            {
                parties: ['Chief Thornpaw', 'Elder Council'],
                issue: 'Thornpaw\'s recent distraction and secrecy causing concern'
            },
            {
                parties: ['Huntmasters', 'Both Clans'],
                issue: 'Debate over whether to abandon traditional lands or stand and fight'
            }
        ]
    },
    
    partyRelations: {
        overall: 'Cautiously Neutral',
        notes: 'Ryan\'s participation in the Festival of the Fallen has created a tentative positive connection. Chief Thornpaw\'s revelation to party allies Mistveil and Embercap suggests he may be seeking outside help with the Peach investigation.',
        individualRelations: [
            { name: 'Ryan', status: 'Friendly', reason: 'Witnessed sacred rites, showed respect' },
            { name: 'Archie Miser', status: 'Wary', reason: 'Reputation for destruction precedes him' },
            { name: 'hjumpik', status: 'Neutral', reason: 'Unknown to most Rakasha' },
            { name: 'Mistveil', status: 'Trusted Contact', reason: 'Received critical intel from Thornpaw' }
        ]
    }
};