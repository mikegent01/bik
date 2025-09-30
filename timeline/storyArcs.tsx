// FIX: Corrected import path for types to './types' to match the flat project structure.
import { StoryArc } from './types';

export const STORY_ARCS_DATA: StoryArc[] = [
    {
        title: "The Raid on Mega X's Castle",
        episodeRange: "Episodes 1-2",
        summary: "The season begins with a direct, action-oriented mission: infiltrate Mega X's castle for revenge. The team is cohesive, relying on brute force and their insider, Rose. The arc establishes the key players and their initial, straightforward goal before it's violently derailed.",
        characterDevelopments: [
            { characterName: "The Team", development: "Begins as a united front with a clear, shared objective. Their methods are loud and destructive, showing a preference for action over stealth." },
            { characterName: "Rose", development: "Is introduced as a key ally and insider, but her true allegiances are not yet tested." },
        ]
    },
    {
        title: "The Descent into the Labyrinth",
        episodeRange: "Episodes 3-20",
        summary: "After being trapped by Bloodless, the team's mission shifts from vengeance to pure survival. They navigate a disorienting, reality-bending prison where resources are scarce and trust is tested. This long arc sees the team separated, battered by monsters, and forced to rely on unreliable guides, fundamentally changing their understanding of the world.",
        characterDevelopments: [
            { characterName: "The Team", development: "Their unity fractures under pressure. Internal conflicts arise over resources and strategy, and members are frequently lost and separated, fostering a sense of paranoia and desperation." },
            { characterName: "Mike", development: "Takes on leadership roles in resource management (torches, water), becoming a more cautious and strategic voice in the group." },
            { characterName: "Grape", development: "Solidifies his role as a chaotic but effective melee leader, though his navigation skills prove unreliable." },
        ]
    },
    {
        title: "The Surreal Gauntlet",
        episodeRange: "Episodes 21-25",
        summary: "Following a series of brutal encounters, the reunited team is thrust into a series of increasingly bizarre and hostile environments, from a deadly circus to an endless train and a sterile shopping mall. This arc introduces the 'troll quest,' shifting their objective from escape to fulfilling a strange scavenger hunt for an unseen puppet master.",
        characterDevelopments: [
            { characterName: "The Team", development: "After being fully reunited on the train, their goal becomes less about direct escape and more about solving the puzzle of their environment. They become reactive, following clues and quests laid out for them." },
            { characterName: "Kymar", development: "Returns to the group after a traumatic separation, making him more paranoid and suspicious of his surroundings and teammates." },
        ]
    },
    {
        title: "The Betrayal of Jeremy",
        episodeRange: "Episodes 26-31",
        summary: "The introduction of the trickster Jeremy marks a new phase of deception. The team follows their untrustworthy guide through deadly passages and libraries, collecting keys while constantly questioning his motives. The arc culminates in a hellish flesh dimension and the final, violent completion of the troll's scavenger hunt, orchestrated by a series of lies and manipulations.",
        characterDevelopments: [
            { characterName: "Kymar", development: "His initial suspicion of Jeremy proves correct. He becomes more decisive and violent in his problem-solving, culminating in him using TNT to solve the final puzzle." },
            { characterName: "The Team", development: "Becomes completely beholden to external forces, first following Jeremy's deceptive guidance and then being manipulated by the skeleton troll, highlighting their loss of agency." },
        ]
    },
    {
        title: "The Escape and The Conspiracy",
        episodeRange: "Episode 32",
        summary: "The season finale sees the team betrayed by the troll, forcibly ejected from the backrooms, and stripped of all their gear. They arrive in a warzone—the ruins of their first mission—only to be ensnared in a new conspiracy by a manipulative priest. The arc ends with the team's objective completely redefined: they are no longer just survivors, but hunted pawns who must arm themselves for a new betrayal.",
        characterDevelopments: [
            { characterName: "The Team", development: "Their worldview is shattered. They learn they are 'disposable pawns' and must shift from reacting to their environment to proactively planning for a fight. Their desperation is replaced by a cold, cautious paranoia." },
            { characterName: "Jeremy", development: "His role is cemented as a key antagonist, actively conspiring with the priest to eliminate the group." },
        ]
    }
];
