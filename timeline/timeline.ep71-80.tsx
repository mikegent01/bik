import React from 'react';
import { TimelineEvent } from './types';

const iconClass = "h-6 w-6 text-slate-300";

export const TIMELINE_DATA_EP71_80: TimelineEvent[] = [
    {
        title: "CCVI. The Engine Room Ambush",
        description: "While exploring the lower decks of the Titanic, the team falls into a trap and is ambushed in a vast, industrial chasm by a horde of skeletons and pig-men. The fight is brutal, resulting in multiple casualties before the survivors regroup in the engine room to begin planting explosives.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.75 8.25 10.5 12.75 17.25 17.25 10.5 12.75 3.75Z" />
            </svg>
        ),
        episode: 71,
        date: "May 10, 2021",
        category: 'Combat',
    },
    {
        title: "CCVII. Escape the Sinking Ship",
        description: "As their ship floods, the team frantically searches for a lifeboat key. After a desperate underwater search through the sinking vessel, they secure the key, launch a lifeboat, and escape into the stormy sea, leaving Thunderhead behind in the chaos.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72.241c-1.12.072-2.22-.022-3.26-.296a11.942 11.942 0 0 1-3.26-.296 11.942 11.942 0 0 1-3.26.296c-1.04.072-2.14.122-3.26.296l-3.72-.242a2.122 2.122 0 0 1-1.98-2.193V10.608c0-.97.616-1.813 1.5-2.097L6.75 8.25m11.25 0-1.125-.225m-1.125-.225L15 7.5l-1.125-.225m-1.125-.225L12 6.75l-1.125.225m-1.125.225L9.75 7.5l-1.125.225m-1.125.225L6.75 8.25m-1.5 0-1.125-.225m13.5 0-1.125-.225M12 15.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
        ),
        episode: 72,
        date: "May 11, 2021",
        category: 'Climax',
    },
    {
        title: "CCVIII. The Mushroom Island",
        description: "After a medium time skip, the survivors wash ashore on a strange, hostile island dominated by a colossal mushroom. Ambushed by undead, they meet the eccentric 'Mushroom Man,' who gives them a quest, beginning a new chapter of survival.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c-4.97 0-9-4.03-9-9S7.03 3 12 3s9 4.03 9 9-4.03 9-9 9Z" />
            </svg>
        ),
        episode: 73,
        date: "June 5, 2021",
        category: 'Mission',
    },
    {
        title: "CCIX. The Sunken Map",
        description: "The team completes the Mushroom Man's quest for a disappointing reward. They then meet the mysterious 'Whispering Enchantress,' who provides a map with crucial coordinates for their next destination. In a moment of sheer absurdity, their attempt to mount the map on their raft fails, sending their helm and the map to the bottom of the sea, leaving them stranded.",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
        ),
        episode: 74,
        date: "June 6, 2021",
        category: 'Discovery',
    },
    {
        title: "CCX. The Sickness and The Shore",
        description: "After recovering from their self-inflicted raft disaster, the team begins their journey towards the coordinates given by the Enchantress. Upon reaching a snowy shore, EighthHalo falls gravely ill, complicating their search for the target location on foot.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.75 8.25 10.5 12.75 17.25 17.25 10.5 12.75 3.75Z" />
            </svg>
        ),
        episode: 75,
        date: "June 7, 2021",
        category: 'Exploration',
    },
    {
        title: "CCXI. The Russian Front",
        description: "The team's journey leads them to a Russian city under Mega X control. After assassinating a clone of Vladimir Putin and being harassed by his 'ghost,' they discover that enemy forces are concentrated around buildings marked with a large 'M', leading to a new, urgent investigation.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.321h5.365c.507 0 .713.663.321.988l-4.34 3.158a.563.563 0 0 0-.182.635l1.634 4.83a.563.563 0 0 1-.84.62l-4.106-3.182a.563.563 0 0 0-.668 0L5.43 19.34a.563.563 0 0 1-.84-.62l1.634-4.83a.563.563 0 0 0-.182-.635L2.003 9.92a.563.563 0 0 1 .321-.988h5.365a.563.563 0 0 0 .475-.321L11.48 3.5Z" />
            </svg>
        ),
        episode: 76,
        date: "June 8, 2021",
        category: 'Mission',
    },
    {
        title: "CCXII. The Presidential Battle",
        description: "At the Mega X headquarters, the team is confronted by hostile, super-powered clones of US Presidents Obama, Biden, and Trump. A chaotic boss battle ensues, involving drone strikes and massive explosions.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            </svg>
        ),
        episode: 77,
        date: "June 9, 2021",
        category: 'Combat',
    },
    {
        title: "CCXIII. The Spoils of War",
        description: "After defeating the presidents, the team discovers their loot: four functional rockets complete with launch pads and fuel. Their primary mission immediately shifts from terrestrial survival to escaping the planet.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.97 4.167a1.5 1.5 0 0 1 2.062 0l1.5 1.667a1.5 1.5 0 0 1 0 2.333l-1.5 1.667a1.5 1.5 0 0 1-2.062 0l-1.5-1.667a1.5 1.5 0 0 1 0-2.333l1.5-1.667Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75 7.5 7.5M10.5 10.5 7.5 7.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5 3.375 14.25 10.125 21l6.75-6.75-6.75-6.75Z" />
            </svg>
        ),
        episode: 77,
        date: "June 9, 2021",
        category: 'Discovery',
    },
    {
        title: "CCXIV. The Betrayal in Space",
        description: "As the team searches for space suits, Jack (EighthHalo) finds one, claims a rocket for himself, and launches into space, abandoning his companions on the ground. This act of betrayal shatters the team's new hope.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 77,
        date: "June 9, 2021",
        category: 'Betrayal',
    },
    {
        title: "CCXV. The Launchpad Catastrophe",
        description: "In the chaotic aftermath of Jack's betrayal, the team's first attempt to launch the remaining rockets ends in disaster. Spilled fuel ignites, causing a massive explosion that kills the team and destroys one of the rockets.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 0 1 0 8.488M7.756 14.25a4.5 4.5 0 0 1 0-8.488M14.25 14.25 18 18m-3.75-3.75a4.5 4.5 0 0 0-8.488 0M18 6 6 18" />
            </svg>
        ),
        episode: 78,
        date: "June 10, 2021",
        category: 'Strategy',
    },
    {
        title: "CCXVI. Lift-off to Mars",
        description: "After respawning, the team successfully launches the remaining rockets. Arguing over their destination, they abandon their original mission to find a space station and instead travel to Mars on a whim.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
        ),
        episode: 78,
        date: "June 10, 2021",
        category: 'Mission',
    },
    {
        title: "CCXVII. Martian Colonists",
        description: "The team lands on the barren, orange surface of Mars. With limited resources, they begin constructing a crude base under a glass dome, struggling with low gravity, a lack of breathable air, and their own infighting as they become the planet's first, and most chaotic, colonists.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m-3-1-3-1m-3 1 3 1 3-1M9 3l-1.5.545" />
            </svg>
        ),
        episode: 78,
        date: "June 11, 2021",
        category: 'Exploration',
    },
    {
        title: "CCXVIII. Martian Mayhem",
        description: "The team's attempts at colonization descend into farce as they build a soccer court and use a sleeping teammate as the ball. Their bizarre game is interrupted by an attack from a native 'Mars Guy' creature.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.75 8.25 10.5 12.75 17.25 17.25 10.5 12.75 3.75Z" />
            </svg>
        ),
        episode: 79,
        date: "June 12, 2021",
        category: 'Character',
    },
    {
        title: "CCXIX. Departure from Mars",
        description: "Deciding Mars is a bust, the team abandons their half-built base. After fighting off more strange creatures like a 'Dinosword' and a 'Neco,' they use their remaining rockets to launch from Mars, setting a new course for the Moon.",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            </svg>
        ),
        episode: 80,
        date: "June 13, 2021",
        category: 'Mission',
    },
    {
        title: "CCXX. Arrival on the Moon",
        description: "The team arrives at the Moon, but their landing is predictably chaotic, with multiple crash landings. They regroup with a renewed, albeit fragile, focus on their primary objective: to find Mega X's base.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
        ),
        episode: 80,
        date: "June 13, 2021",
        category: 'Exploration',
    },
];