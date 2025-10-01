// FIX: Corrected import path for types to './types' to match the flat project structure.
import React from 'react';
import { StoryArc } from './types';
import { STORY_ARCS_DATA_S2 } from './season2Data';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mt-4">
      <h4 className="text-lg font-semibold text-slate-200 mb-2 border-b border-slate-600 pb-1">{title}</h4>
      <div className="space-y-2 text-slate-400">{children}</div>
    </div>
);

const ListItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <li>
        <strong className="text-slate-300">{title}</strong>: {children}
    </li>
);

const STORY_ARCS_DATA_S1: StoryArc[] = [
    {
        title: "Lore: The Board Meeting Hijacking",
        episodeRange: "Prologue",
        summary: (
            <div>
                An official board meeting for Mega X's birthday is hijacked by the villainous Bloodless. After threatening everyone with bombs and laying out a series of bizarre, tyrannical rules, she is comically defeated when 'break' (Grape) tricks her into drinking potent grape alcohol. 'Break' then establishes his own whimsical agenda as a defeated Bloodless makes a pathetic retreat, threatening to detonate the bombs out of spite.
                <Section title="Key Segments">
                    <ul className="list-disc list-inside text-slate-400 space-y-2">
                        <li><strong className="text-slate-300">The Hijacking:</strong> Bloodless interrupts the poorly attended meeting, reveals she has planted bombs, and hacks the presentation to declare it "Bloodless's board meeting."</li>
                        <li><strong className="text-slate-300">The Tyrannical Proclamations:</strong> Bloodless announces her bizarre rules, including a ban on fun, a demand that Mega X "grovel at my feet," an extreme physical regimen of 10,000 "swirlies," a ban on "furry potions" (except for robot girls), and a creepy request for Mega X's webcam footage.</li>
                        <li><strong className="text-slate-300">The Turning Point:</strong> Bloodless's downfall begins when she drinks "grape alcohol juice." The potent drink disorients her, allowing the host and 'break' to fight back.</li>
                        <li><strong className="text-slate-300">The New Regime:</strong> With Bloodless incapacitated, 'break' takes control and presents his own nonsensical rules, including using a "goat of mutant abilities," devouring hundreds of fruits, and mandating that all flying must be done "majestically."</li>
                        <li><strong className="text-slate-300">The Pathetic Retreat:</strong> Utterly broken, Bloodless tries to save face by claiming her failure was "all part of the plan." She storms out, complaining that no one gave her birthday presents, and threatens to set off the bombs.</li>
                    </ul>
                </Section>
            </div>
        ),
        characterDevelopments: [
            { characterName: "Bloodless", development: "Established as a comically tyrannical antagonist. Her desire for absolute control and hatred for 'fun' are revealed, but so is her arrogance and incompetence, as she is easily foiled by a simple trick." },
            { characterName: "Grape (as 'break')", development: "Demonstrates his quick-thinking and chaotic problem-solving skills. By using trickery and absurdity (the potent grape alcohol) instead of direct confrontation, he solidifies his role as an unpredictable but highly effective operative." },
        ]
    },
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
    },
    {
        title: "Lore: The Mega X Fishing Iceberg",
        episodeRange: "Universe Lore",
        summary: (
            <div>
                A deep dive into the "Mega X Fishing Iceberg" chart, revealing its "deepest, darkest secrets" with two casual, joking speakers.
                <Section title="Top Tier: Above the Water">
                    The speakers introduce the video and read the top-tier "facts" with mock seriousness. These establish the team's core identity: they are incredible fishermen with a great sense of humor, very smart, generous, and handsome. Mike is confirmed as the #1 fisherman on the channel.
                </Section>
                <Section title="Mid-Tier: Just Below the Surface">
                    The iceberg reveals more details about the team's hierarchy and skills. Kymar is the #2 angler, having caught sharks, cobia, and tuna. Grape is #3, known for his advantageous ability to fish at night. The commentary includes mock jealousy and jokes about channel subscriptions.
                </Section>
                <Section title="Deep Tier: The Dark Secrets">
                    The "facts" become much more absurd. It's revealed the team's shared goal is to acquire a "catgirl potion." Other secrets include DZ's unrequited love for Grape, Kymar's fear of heights, Domonic's creation of the "Domonicator 3000" game console, and DZ's anger issues. The speakers react with exaggerated humor and accuse a rival group called "Bloodless" of sabotage. A chaotic montage for a fictional hacking group "Bloodless" advertises a "Hacking-majigger" that can supposedly reveal anyone's secrets.
                </Section>
                <Section title="Bottom Tiers: The Abyss">
                     The final, deepest tiers contain even more surreal revelations. These include Mike's failed relationships and weight sensitivity, a comic strip called "Catgirl Adventures" created by Mike and Kymar, a short film called "Zombie vs Ninja" by Domonic and DZ, and the origin of the rivalry with Mega X. The team's headquarters is revealed to be haunted, with a broken water cooler and AC unit, and the members are paid a salary of only $8 per month. The deepest facts include Domonic's deal with the devil, Grape fighting a bear with his bare hands, and one member being the daughter of the creator of the game "Changed."
                </Section>
            </div>
        )
    },
    {
        title: "Lore: The Corporate Interview",
        episodeRange: "Universe Lore",
        summary: (
            <div>
                A satirical interview where "Inspector Sir" talks with the channel's "art director," Grape. The humor comes from absurdity, non-sequiturs, and a deep, self-referential "lore" that parodies corporate YouTube channels and fan culture.
                <Section title="Key Segments">
                    <ul className="list-disc list-inside text-slate-400 space-y-2">
                        <li><strong className="text-slate-300">Absurd Premise:</strong> The interview opens by establishing the comically exaggerated premise that "over a hundred and fifty thousand people" work on the channel.</li>
                        <li><strong className="text-slate-300">Channel Lore:</strong> The discussion dives into in-jokes, referencing a villain named "Bloodless" hacking the channel and a chaotic game master named "Dr. Mayer" who created "murder" with a chainsaw and "52 tiger girls."</li>
                        <li><strong className="text-slate-300">Pop Culture Tangents:</strong> Mocks YouTube trends by discussing collaborations with Dream (fixating on his "moldy" cereal) and BTS (leading to Grape's bizarre story about drunkenly eating the concert tickets, mistaking them for lettuce).</li>
                        <li><strong className="text-slate-300">The Bizarre Request:</strong> In a parody of strange fan requests, the host asks Grape to "draw her giving birth for one of our thumbnails" after watching a weird animation. Grape's hilariously formal refusal ("my Integrity tells me not to do it") adds to the comedy.</li>
                        <li><strong className="text-slate-300">The Art Director with No Art:</strong> The central irony of Grape's character is explored as he claims his specialty is "stick figures fighting" and makes escalating excuses for why he can't show any art, culminating in his single, un-backed-up hard drive being destroyed. This serves as the punchline for his entire character.</li>
                    </ul>
                </Section>
            </div>
        )
    },
    {
        title: "Lore: The Versus Rivalry",
        episodeRange: "Universe Lore",
        summary: (
             <div>
                A two-part series setting up a "versus" scenario between the "Mega X Fishing" channel and an opposing channel, "Mega X," represented by Joker from Persona 5. The videos serve to introduce the members of both teams.
                <Section title="Team Mega X Fishing Roster">
                    The protagonists are introduced with representative avatars and memes, including Catgirl Noone (dancing Neco-Arc), Domonic Nat (a Roblox avatar in a maid outfit), DZ The Great (a cartoon mayor), Jerome (a Bitcoin logo), Kymar (a pink Kirby-like character with a gun), Mike (Handsome Squidward), and Grape, among others. The introductions establish their personalities and roles within the team's lore.
                </Section>
                 <Section title="Team Mega X Roster (Antagonists)">
                    The rival team is introduced as the antagonists. Its members include Bloodless (a muscular woman in camo), Doctor Mayor (an anime girl whose "true form" is Walter White from Breaking Bad), Gus Fring, Mega X (Joker from Persona 5), Mordecai from Regular Show, Neko Noone (the "normal" version without cat ears, which the hosts find disgusting), and Saul Goodnyan's evil brother.
                </Section>
            </div>
        )
    },
];

export const STORY_ARCS_DATA: StoryArc[] = [...STORY_ARCS_DATA_S1, ...STORY_ARCS_DATA_S2];