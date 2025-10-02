import React from 'react';
import { TimelineEvent } from './types';

const iconClass = "h-6 w-6 text-slate-300";

export const TIMELINE_DATA_EP51_60: TimelineEvent[] = [
    {
        title: "CLVIII. The Golden Crown",
        description: "In their stone sanctuary, the team crafts golden gear. Thunderhead gives a golden sword to his companion, who in turn insists thunderhead wear a newly crafted golden helmet as a crown.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.108 1.204.165.397.505.71.93.78l.895.15c.542.09.94.56.94 1.11v1.093c0 .55-.398 1.02-.94 1.11l-.895.149c-.425.07-.765.383-.93.78-.164.398-.142.854.108 1.204l.527.738c.32.447.27.96-.12 1.45l-.773.773a1.125 1.125 0 0 1-1.45.12l-.737-.527c-.35-.25-.806-.272-1.204-.108-.397.165-.71.505-.78.93l-.15.895c-.09.542-.56.94-1.11.94h-1.093c-.55 0-1.02-.398-1.11-.94l-.149-.894c-.07-.424-.384-.764-.78-.93-.398-.164-.855-.142-1.205-.108l-.737.527a1.125 1.125 0 0 1-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272.806.108-1.204-.165-.397-.505.71-.93.78l-.895-.15c-.542-.09-.94-.56-.94-1.11v-1.093c0 .55.398 1.02.94 1.11l.895-.149c.425-.07.765-.383.93-.78.164-.398.142-.854-.108-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.806.272 1.204.108.397-.165.71-.505.78-.93l.15-.895Z" />
            </svg>
        ),
        episode: 51,
        date: "March 12, 2021",
        category: 'Character',
    },
    {
        title: "CLIX. The Disastrous Ambush",
        description: "Emboldened by their new gear, the team attempts to ambush a lone soldier. The plan backfires spectacularly as the soldier proves incredibly durable, turning on them and killing them instantly.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.828 12l-2.293 2.293-2.293-2.293 2.293-2.293 2.293 2.293zm-4.586 4.586L3.95 12l4.292-4.293 4.293 4.293-4.293 4.293zm11.414 0L14.536 12l4.292-4.293 4.293 4.293-4.293 4.293z" />
            </svg>
        ),
        episode: 51,
        date: "March 12, 2021",
        category: 'Combat',
    },
    {
        title: "CLX. Sanctuary Overrun",
        description: "After respawning, the team is forced to retreat into their stone room. Their sanctuary is breached by soldiers and a zombie, and they are overwhelmed in a final, bloody assault, resulting in a total party kill.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 51,
        date: "March 12, 2021",
        category: 'Climax',
    },
    {
        title: "CLXI. The Bridge Standoff",
        description: "Driving east, the team encounters a tank on a skeletal bridge. They are horrified to see their former ally, EighthHalo, manning the gun. He opens fire as they attempt to speed past.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
        ),
        episode: 52,
        date: "March 15, 2021",
        category: 'Betrayal',
    },
    {
        title: "CLXII. The Plunge & The Hunt",
        description: "The team's jeep careens off the bridge into the water. A mysterious entity, Gen_Deathrow, teleports a survivor back into the crashed vehicle under the bridge, now plunged into an unnatural night. A message declares 'The hunt for blood has begun' as monstrous 'Reaper Twins' ambush them.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-7.493-2.131 3.75 3.75 0 0 0-1.484 5.254A3.75 3.75 0 0 0 12 18Z" />
            </svg>
        ),
        episode: 52,
        date: "March 15, 2021",
        category: 'Climax',
    },
    {
        title: "CLXIII. The Scientist in the Basement",
        description: "After escaping through a dark jungle, the team finds a ruined town. Inside a concrete building, they discover a lone Mega X scientist in a basement. Realizing she doesn't know who they are, they begin a tense 'peaceful interrogation' to get information.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        ),
        episode: 52,
        date: "March 16, 2021",
        category: 'Discovery',
    },
    {
        title: "CLXIV. The Cryptic Deal",
        description: "In a flooded cave, the team makes a deal with a mysterious stranger, BenF, exchanging their comms system for intel. He provides a map and an ominous warning: 'They will be here by tomorrow with a little girl.'",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
        ),
        episode: 53,
        date: "March 18, 2021",
        category: 'Lore',
    },
    {
        title: "CLXV. Raid Difficulty 9",
        description: "Immediately after the deal, a 'Raid Difficulty 9' event is triggered. The cave is swarmed by heavily buffed enemies, overwhelming the team and forcing them to dig their way to the surface in a desperate escape.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 53,
        date: "March 18, 2021",
        category: 'Combat',
    },
    {
        title: "CLXVI. Seizing the Dreadnought",
        description: "The team emerges onto a sandy beach littered with military boats and a massive battleship. Seizing the opportunity, they board the colossal vessel, with one player taking control of a turret, ready for the next phase of their journey.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.75 8.25 10.5 12.75 17.25 17.25 10.5 12.75 3.75Z" />
            </svg>
        ),
        episode: 53,
        date: "March 19, 2021",
        category: 'Climax',
    },
    {
        title: "CLXVII. The Unwieldy Dreadnought",
        description: "The team struggles to pilot the massive battleship, quickly running out of fuel and beaching on a new shore. Grape reveals he deceived BenF with a fake comms system.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72.241c-1.12.072-2.22-.022-3.26-.296a11.942 11.942 0 0 1-3.26-.296 11.942 11.942 0 0 1-3.26.296c-1.04.072-2.14.122-3.26.296l-3.72-.242a2.122 2.122 0 0 1-1.98-2.193V10.608c0-.97.616-1.813 1.5-2.097L6.75 8.25m11.25 0-1.125-.225m-1.125-.225L15 7.5l-1.125-.225m-1.125-.225L12 6.75l-1.125.225m-1.125.225L9.75 7.5l-1.125.225m-1.125.225L6.75 8.25m-1.5 0-1.125-.225m13.5 0-1.125-.225M12 15.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
        ),
        episode: 54,
        date: "March 20, 2021",
        category: 'Mission',
    },
    {
        title: "CLXVIII. The Four Towns Plan",
        description: "After reviewing the intel about the Mayor and Doctor's arrival, the team discovers four nearby towns. They decide to split up and scout each location, creating a new strategic plan.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5M15 15l5.25 5.25" />
            </svg>
        ),
        episode: 54,
        date: "March 20, 2021",
        category: 'Strategy',
    },
    {
        title: "CLXIX. The Force Field",
        description: "While scouting, Grape re-encounters the mysterious Ben, who reveals a critical piece of lore: a planetary force field was erected by Doctor Mayor after 'the nukes,' preventing any escape to space.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6-2.292m0 0V3.75m0 16.5" />
            </svg>
        ),
        episode: 55,
        date: "March 21, 2021",
        category: 'Lore',
    },
    {
        title: "CLXX. The Blood Moon",
        description: "As the team discusses the new intel, a 'Blood Moon' rises. The world is plunged into chaos as hordes of powerful monsters spawn, forcing the players into a desperate fight for survival.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
        ),
        episode: 55,
        date: "March 21, 2021",
        category: 'World Event',
    },
    {
        title: "CLXXI. Hiding in a Hole",
        description: "Overwhelmed by the Blood Moon horde, the team is forced to dig a small hole in the ground to hide from the monsters. The episode ends with them trapped in the tiny dirt sanctuary, listening to the chaos outside.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
            </svg>
        ),
        episode: 55,
        date: "March 21, 2021",
        category: 'Exploration',
    },
    {
        title: "CLXXII. The Helicopter Warning",
        description: "While scouting The Four Towns, the team receives intel that an enemy helicopter with backup has arrived. The antagonists, 'Mayor' and 'Doctor,' announce their presence with a TNT explosion, initiating a massive ambush in a red brick courtyard.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.828 12l-2.293 2.293-2.293-2.293 2.293-2.293 2.293 2.293zm-4.586 4.586L3.95 12l4.292-4.293 4.293 4.293-4.293 4.293zm11.414 0L14.536 12l4.292-4.293 4.293 4.293-4.293 4.293z" />
            </svg>
        ),
        episode: 56,
        date: "March 22, 2021",
        category: 'Combat',
    },
    {
        title: "CLXXIII. The Battle for the Courtyard",
        description: "A chaotic battle erupts against a horde of enemies, including a powerful new foe named 'Mischief' who wields a glowing blue sword. The team is quickly overwhelmed by the superior force.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.75 8.25 10.5 12.75 17.25 17.25 10.5 12.75 3.75Z" />
            </svg>
        ),
        episode: 56,
        date: "March 22, 2021",
        category: 'Combat',
    },
    {
        title: "CLXXIV. The Failed Surrender",
        description: "In a moment of desperation, a player attempts to surrender. The enemy leader, 'Mayor,' mocks the plea and calls them a coward, ordering the assault to continue without mercy.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
        ),
        episode: 56,
        date: "March 22, 2021",
        category: 'Negotiation',
    },
    {
        title: "CLXXV. Overwhelming Defeat",
        description: "Scattered and outmatched, the team is systematically defeated. Some flee into nearby buildings while others are cut down in the street, ending the engagement in a total party kill.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 56,
        date: "March 22, 2021",
        category: 'Climax',
    },
    {
        title: "CLXXVI. Chaos on Arrival",
        description: "Mike crashes a hijacked tank into a small cave where his companions are hiding, revealing he was the source of recent explosions. This chaotic 'rescue' immediately draws enemy attention.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            </svg>
        ),
        episode: 57,
        date: "March 23, 2021",
        category: 'Character',
    },
    {
        title: "CLXXVII. The Doctor and The Mayor",
        description: "During a furious argument, a major point of confusion is clarified: the team's primary targets, 'Doctor' and 'Mayor,' are two separate individuals, not one person named 'Doctor Mayor'.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6-2.292m0 0V3.75m0 16.5" />
            </svg>
        ),
        episode: 57,
        date: "March 23, 2021",
        category: 'Lore',
    },
    {
        title: "CLXXVIII. The Girl in the Pit",
        description: "The team finds 'noone' trapped in a pit, surrounded by bizarre cardboard cutouts of Hitler. A new antagonist, 'mondad,' appears and takes credit for her capture.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
        ),
        episode: 57,
        date: "March 23, 2021",
        category: 'Discovery',
    },
    {
        title: "CLXXIX. Mondad's Revelation",
        description: "Mondad reveals a horrific plot: at Doctor Mayor's request, he performed an age regression experiment on noone as a twisted form of revenge. He threatens to kill her, initiating a tense hostage standoff.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 57,
        date: "March 23, 2021",
        category: 'Climax',
    },
    {
        title: "CLXXX. The End of Mondad",
        description: "After a tense argument over his untimely death, mondad respawns. Mike is given a powerful sword, 'Great Wave,' and kills the antagonist instantly, ending his threat for good.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.828 12l-2.293 2.293-2.293-2.293 2.293-2.293 2.293 2.293zm-4.586 4.586L3.95 12l4.292-4.293 4.293 4.293-4.293 4.293zm11.414 0L14.536 12l4.292-4.293 4.293 4.293-4.293 4.293z" />
            </svg>
        ),
        episode: 58,
        date: "March 24, 2021",
        category: 'Combat',
    },
    {
        title: "CLXXXI. The Scatter Missile Incident",
        description: "In the chaotic aftermath of the fight, Mike uses a 'scatter missile' from a tank. The explosion causes noone to vanish, leaving the team confused and arguing over her fate.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            </svg>
        ),
        episode: 58,
        date: "March 24, 2021",
        category: 'Climax',
    },
    {
        title: "CLXXXII. Jack's Return",
        description: "Jack (EighthHalo) rejoins the group, having acquired a helicopter. This provides the team with a new strategic asset for reconnaissance, though Jack's allegiance is still uncertain.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        ),
        episode: 58,
        date: "March 24, 2021",
        category: 'Character',
    },
    {
        title: "CLXXXIII. Stranded in the Dark",
        description: "The team's attempt to leave the area is cut short when their jeep gets stuck in the dark. The episode ends with them stranded, arguing, and uncertain of what to do next.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72.241c-1.12.072-2.22-.022-3.26-.296a11.942 11.942 0 0 1-3.26-.296 11.942 11.942 0 0 1-3.26.296c-1.04.072-2.14.122-3.26.296l-3.72-.242a2.122 2.122 0 0 1-1.98-2.193V10.608c0-.97.616-1.813 1.5-2.097L6.75 8.25m11.25 0-1.125-.225m-1.125-.225L15 7.5l-1.125-.225m-1.125-.225L12 6.75l-1.125.225m-1.125.225L9.75 7.5l-1.125.225m-1.125.225L6.75 8.25m-1.5 0-1.125-.225m13.5 0-1.125-.225M12 15.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
        ),
        episode: 58,
        date: "March 24, 2021",
        category: 'Exploration',
    },
    {
        title: "CLXXXIV. From a Crash to a Bigger Plane",
        description: "Surviving a fiery explosion, the team finds their biplane wedged under an overpass. They quickly abandon it for a much larger plane found nearby, but the pilot's inexperience with the complex controls creates immediate tension.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.375V6.625m0 0H6.375M12 6.625h5.625M12 6.625l3.375-3.375M12 6.625 8.625 3.25m3.375 15.125-3.375 3.375M12 18.375l3.375 3.375M8.625 21.75 12 18.375m3.375-15.125 3.375 3.375M8.625 3.25 12 6.625m-3.375 11.75 3.375-3.375m0 0h5.625m-5.625 0H6.375" />
            </svg>
        ),
        episode: 59,
        date: "March 26, 2021",
        category: 'Discovery',
    },
    {
        title: "CLXXXV. The Reaper Twins' Ambush",
        description: "As night falls, a divine warning is issued before the menacing Reaper Twins ambush the plane on the bridge. The pilot swerves, but the vehicle is struck and sent careening off the side in a chaotic crash.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            </svg>
        ),
        episode: 59,
        date: "March 26, 2021",
        category: 'Combat',
    },
    {
        title: "CLXXXVI. Survival and a Dead End",
        description: "Miraculously surviving the fall, the team fights off the Reapers and another monster horde. They escape in the damaged vehicle, driving through a jungle to another town only to find the road destroyed by a massive crater.",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.75 8.25 10.5 12.75 17.25 17.25 10.5 12.75 3.75Z" />
            </svg>
        ),
        episode: 59,
        date: "March 27, 2021",
        category: 'Exploration',
    },
    {
        title: "CLXXXVII. The Scientist in the Basement",
        description: "Forced to explore on foot, the team finds a concrete building and descends into a sterile basement. There they discover a lone Mega X scientist who, believing she's been caught by her own side, resigns herself to death.",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        ),
        episode: 59,
        date: "March 27, 2021",
        category: 'Discovery',
    },
    {
        title: "CLXXXVIII. A Strategic Alliance",
        description: "Realizing the scientist doesn't know they are fugitives, the team lowers their weapons. They decide to feign friendship, planning a 'peaceful interrogation' to manipulate her into giving them information about the main highway.",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
        ),
        episode: 59,
        date: "March 27, 2021",
        category: 'Strategy',
    },
    {
        title: "Prequel: Infiltration of the Biodome",
        description: "In a flashback to years before the main campaign, the team pilots a helicopter into a massive Mega X biodome with the mission to infiltrate the base.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.375V6.625m0 0H6.375M12 6.625h5.625M12 6.625l3.375-3.375M12 6.625 8.625 3.25m3.375 15.125-3.375 3.375M12 18.375l3.375 3.375M8.625 21.75 12 18.375m3.375-15.125 3.375 3.375M8.625 3.25 12 6.625m-3.375 11.75 3.375-3.375m0 0h5.625m-5.625 0H6.375" />
            </svg>
        ),
        episode: 60,
        date: "October 1, 2018",
        category: 'Mission',
    },
    {
        title: "Prequel: A Flawless Disguise",
        description: "The team ambushes a researcher, stealing his outfit and ID. With one member in a lab coat, another in a mask, and a third with a piece of paper on his head, their 'disguises' are complete.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        ),
        episode: 60,
        date: "October 1, 2018",
        category: 'Strategy',
    },
    {
        title: "Prequel: The Minecart Catastrophe",
        description: "The team descends into the facility via minecart. The chaotic ride results in casualties, as a 'Mechanic' and another player are bumped off the track and fall into an abyss.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            </svg>
        ),
        episode: 60,
        date: "October 1, 2018",
        category: 'Climax',
    },
    {
        title: "Prequel: The Artificial Desert",
        description: "The survivors arrive in a new biome within the dome: a vast, rainy desert. They encounter stoic guards, fall into a massive sand pit, and must dig their way out to continue their infiltration.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c-4.97 0-9-4.03-9-9S7.03 3 12 3s9 4.03 9 9-4.03 9-9 9Z" />
            </svg>
        ),
        episode: 60,
        date: "October 2, 2018",
        category: 'Exploration',
    }
];