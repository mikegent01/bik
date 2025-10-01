

import React from 'react';
import { LoreVideo } from './types';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mt-6">
    <h4 className="text-xl font-semibold text-slate-200 mb-3 border-b border-slate-700 pb-2">{title}</h4>
    <div className="space-y-3 text-slate-400">{children}</div>
  </div>
);

const ListItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <li>
        <strong className="text-slate-300">{title}</strong>: {children}
    </li>
);

export const LORE_VIDEOS_DATA: LoreVideo[] = [
    {
        title: "The SCP Facility Incident",
        content: (
            <div>
                <p>A cinematic and gameplay video detailing the team's infiltration of a derelict SCP Foundation facility after their destructive encounter in the snowy city.</p>
                <Section title="Scene Breakdown">
                    <ul className="list-disc list-inside space-y-2">
                        <ListItem title="Intro Montage">The video opens with a fast-paced, cinematic montage set to music, showing quick cuts of a military truck on a surreal sky highway, a first-person shooter sequence in a snowy plaza against strange creatures, a player driving through a lush forest, and a group navigating a dark stone dungeon.</ListItem>
                        <ListItem title="The Sky Highway">Gameplay begins with the players driving the military truck along the elevated highway. The driver loses control, careening off the bridge and landing near a tunnel entrance below.</ListItem>
                        <ListItem title="Facility Infiltration">The group enters a modern, sterile white facility and quickly identifies it as a derelict SCP Foundation site. They are immediately attacked by hostile pink flamingos (SCP-1507).</ListItem>
                        <ListItem title="Containment Breach">The team fights their way through corridors and offices, discovering a flooded containment area for "SCP-148." The area is infested with giant, aggressive red spider-like creatures labeled "Surgeon Crabs" (SCP-098). The ensuing battle is intense, and one player is killed.</ListItem>
                        <ListItem title="Exploration and Escape">After clearing the room, the survivors find keycards and flashlights. They navigate the labyrinthine complex, but many doors require higher-level access. They eventually find an exit, emerging back into the snowy landscape where their adventure began, joined by a new player, "darkphan."</ListItem>
                    </ul>
                </Section>
            </div>
        )
    },
    {
        title: "Mega X Fishing Iceberg",
        content: (
            <div>
                <p>A deep dive into the "Mega X Fishing Iceberg" chart, revealing its "deepest, darkest secrets" with two casual, joking speakers.</p>
                <Section title="Scene Breakdown">
                    <ul className="list-disc list-inside space-y-2">
                        <ListItem title="0:00 - 0:24: Top Tier">
                            The video opens on the "Mega X Fishing Iceberg" chart. The speakers introduce the video and read the top-tier "facts" with mock seriousness, covering topics like the team's fishing skills, humor, intelligence, generosity, and handsomeness, establishing Mike as the #1 fisherman.
                        </ListItem>
                        <ListItem title="0:24 - 2:12: Mid-Tier">
                            Scrolling below the waterline, the speakers discuss the "facts" about Kymar being the #2 angler and Grape being #3, known for his night fishing skills. The commentary includes mock jealousy and jokes about channel subscriptions.
                        </ListItem>
                        <ListItem title="2:12 - 4:03: Deep Tier">
                            The iceberg's deep, purple-hued section reveals bizarre "facts," such as the team's desire for a "catgirl potion," DZ's secret love for Grape, Kymar's fear of heights, and Domonic's creation of a game console. The speakers react with exaggerated humor, accuse a rival group called "Bloodless" of sabotage, and confirm the catgirl potion is their shared goal.
                        </ListItem>
                        <ListItem title="4:03 - 4:27: Mock Sponsor Break">
                             A chaotic montage for a fictional hacking group "Bloodless" advertises a "Hacking-majigger" that can reveal secrets with "absolutely no risk," featuring memes, retro computers, and bizarre clips.
                        </ListItem>
                        <ListItem title="4:27 - End: Bottom Tiers">
                             Returning to the iceberg, the speakers apologize and delve into the final, deepest tiers. The "facts" become even more surreal, covering Mike's failed relationships and weight sensitivity, a "Catgirl Adventures" comic, a "Zombie vs Ninja" short film, the rivalry with Mega X, a broken water cooler, a haunted HQ, their $8/month salary, Jerome knowing "ben the dog," Domonic's deal with the devil, Grape fighting a bear with bear-shaped hands, and a member being the daughter of the creator of "Changed." The video ends as they joke about the increasingly absurd revelations.
                        </ListItem>
                    </ul>
                </Section>
            </div>
        )
    },
    {
        title: "Corporate Interview with the Art Director of Mega X Fishing",
        content: (
            <div>
                <p>A satirical interview where "Inspector Sir" talks with the channel's "art director," Grape. The humor comes from absurdity, non-sequiturs, and a deep, self-referential "lore" that parodies corporate YouTube channels and fan culture.</p>
                <Section title="Character Analysis">
                     <ul className="list-disc list-inside space-y-2">
                        <ListItem title="Inspector Sir (The Host)">The unhinged "straight man" who tries to maintain a professional tone while presenting absurd premises (like having 150,000 employees) and getting easily sidetracked.</ListItem>
                        <ListItem title="Grape (The Art Director)">The guest of honor, whose defining trait is a convenient and selective amnesia used to dodge questions and create bizarre backstories. He is an "art director" who is incredibly reluctant to discuss or show any art.</ListItem>
                        <ListItem title="Mike (The Co-host/Producer)">The wildcard third voice who adds to the chaos, fact-checks, and instigates bizarre tangents.</ListItem>
                    </ul>
                </Section>
                <Section title="Detailed Script Breakdown">
                    <p>The video follows a chaotic, improvised structure, building a fictional universe through several key segments:</p>
                     <ul className="list-disc list-inside space-y-2">
                        <li><strong className="text-slate-300">The Introduction:</strong> Establishes the absurd premise of "over a hundred and fifty thousand people working on this channel."</li>
                        <li><strong className="text-slate-300">Discussing Channel "Lore":</strong> Dives into in-jokes about a villain named "Bloodless" hacking the channel and a chaotic game master named "Dr. Mayer" creating "murder" with a chainsaw and "52 tiger girls."</li>
                        <li><strong className="text-slate-300">Pop Culture Tangents:</strong> Mocks YouTube trends by discussing collaborations with Dream (fixating on his "moldy" cereal) and BTS (leading to Grape's story about drunkenly eating the concert tickets).</li>
                        <li><strong className="text-slate-300">The Bizarre Request:</strong> After watching a strange animation, the host makes the shockingly absurd request for Grape to "draw her giving birth for one of our thumbnails," parodying bizarre fan requests. Grape's formal refusal adds to the comedy.</li>
                        <li><strong className="text-slate-300">The "Art Director" Who Can't Show Art:</strong> The central irony is explored as Grape claims his specialty is "stick figures fighting" and makes escalating excuses for why he can't show any art, culminating in his single, un-backed-up hard drive being destroyed.</li>
                        <li><strong className="text-slate-300">The Rival Channel & Conclusion:</strong> Introduces a rival "female mega X" channel, discusses Grape's mundane reasons for joining ("the building looked shiny"), and devolves into a nonsensical debate about his salary, ending with the memorable quote: "I'm great but I love grapes I love eating grapes my boys."</li>
                    </ul>
                </Section>
            </div>
        )
    },
    {
        title: "Mega X Fishing vs. Mega X (Part 1)",
        content: (
            <div>
                <p>This video sets up a "versus" scenario between the speakers' channel, "Mega X Fishing," and an opposing channel, "Mega X," represented by Joker from Persona 5. The members of the Mega X Fishing team are introduced.</p>
                <Section title="Team Mega X Fishing Roster">
                    <ul className="list-disc list-inside space-y-2">
                        <ListItem title="Catgirl Noone">Represented by a glitchy video of dancing Neco-Arc characters. The cat ears make her "100% better."</ListItem>
                        <ListItem title="Domonic Nat">Shown as a Roblox-style avatar in a maid outfit with cow-print cat ears, holding a large rifle.</ListItem>
                        <ListItem title="DZ The Great">A cartoon drawing of a man in a blue "MAYOR" suit, described as stylish and "ready to fight."</ListItem>
                        <ListItem title="Jerome">Represented by a Bitcoin-style "B" logo and a video of someone making pancakes. An "amazing member."</ListItem>
                        <ListItem title="kkkema (Kymar)">One of the narrators. His avatar is a pink, Kirby-like character with black hair and a gun.</ListItem>
                        <ListItem title="kkkema true form">Kymar's more powerful "true form," represented by an anime-style catgirl in a maid outfit. He transforms when his power level rises.</ListItem>
                        <ListItem title="Meowbahh">The "PNGTuber," represented by Madoka Kaname and a Breaking Bad clip about her height. An "interesting character."</ListItem>
                        <ListItem title="Mikegent (Mike)">The other narrator, represented by "Handsome Squidward" memes and a "cursed" cartoon drawing of himself.</ListItem>
                        <ListItem title="Ratman">The artist of Mike's cursed drawing, represented by Dabi from My Hero Academia.</ListItem>
                        <ListItem title="Saul Goodnyan">Represented by a cat sticker in a tracksuit and a 3D animation of Neco-Arc in a business suit. Described as powerful and scary.</ListItem>
                        <ListItem title="thaumaturgy (Grape)">Represented by a purple-haired anime character in a nurse/maid outfit, connected to a "murder" to be explained later.</ListItem>
                    </ul>
                </Section>
            </div>
        )
    },
    {
        title: "Mega X Fishing vs. Mega X (Part 2)",
        content: (
             <div>
                <p>Continuing the "versus" theme, this video introduces the members of the antagonistic "Mega X" team.</p>
                <Section title="Team Mega X Roster">
                    <ul className="list-disc list-inside space-y-2">
                        <ListItem title="Bloodless">The "enemy," represented by a stock photo of a muscular woman in camouflage and a muscular fish from SpongeBob.</ListItem>
                        <ListItem title="Doctor Mayor">A "neutral one," represented by an anime girl with blue hair.</ListItem>
                        <ListItem title="Doctor Mayor's True Form">His "powered up" form is Walter White from Breaking Bad in a hazmat suit with "evil horns."</ListItem>
                        <ListItem title="Gus Fring">Represented by his actor from Breaking Bad next to an anime girl from Neon Genesis Evangelion. The speakers refuse to comment.</ListItem>
                        <ListItem title="Mega X">The leader, represented by Joker from Persona 5 and a TikTok of a girl acting feral.</ListItem>
                        <ListItem title="Mordecai DND">Represented by Mordecai from Regular Show, called a "simp" for the next character.</ListItem>
                        <ListItem title="Neko Noone">The "normal" version of the character from the previous video, lacking cat ears, which the speakers find disgusting.</ListItem>
                        <ListItem title="Noone">Represented by Samara Morgan from the horror movie The Ring.</ListItem>
                        <ListItem title="Saul Goodnyan Brother">A crudely drawn, "evil version" of the character from the first video.</ListItem>
                        <ListItem title="Terumi Kun">A blocky, abstract green and red drawing that confuses the speakers.</ListItem>
                        <ListItem title="Total Lori">The "alter ego" of Mega X, represented by Walter White in a top hat. The video ends with a montage declaring Total Lori the winner over Mega X.</ListItem>
                    </ul>
                </Section>
            </div>
        )
    }
];