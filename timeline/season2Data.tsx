import React from 'react';
import { 
    EpisodeSummary, 
    TimelineEvent,
    Character,
    CharacterFaction,
    Location,
    BestiaryEntry,
    KeyItem,
    StoryArc,
    PlotImpact
} from './types';

const iconClass = "h-6 w-6 text-slate-300";

// --- EPISODES S2 ---
export const EPISODES_DATA_S2: EpisodeSummary[] = [
    { episode: 33, title: "The Snowy Expedition", summary: "The team arrives in a snowy, ruined city, finds weapons in an old shop, and is immediately ambushed and captured by a new faction, 'The Authority.' A chaotic prison break attempt results in a player's death and a desperate escape.", plotImpact: PlotImpact.MAJOR, tags: ['Mission Start', 'New Location', 'Combat', 'Major Death', 'Escape'] },
    { episode: 34, title: "The Comically Large Missile", summary: "After clearing out the remaining villagers, the team uses a massive, faulty missile that obliterates the entire city—and them. In the aftermath, they discover a lone, powerful survivor from the 'Mega X Army' and investigate a nearby secret facility.", plotImpact: PlotImpact.MAJOR, tags: ['Climax', 'New Location', 'Discovery', 'New Character'] },
    { episode: 35, title: "The Ruined City", summary: "After a chaotic skirmish on the highway, the team drives into a ruined city. Their progress is halted by another explosion and the death of their driver. On foot, they witness a plane crash and are confronted by its pilot, 'Reese,' who accuses them of the attack and reveals he knows about their past.", plotImpact: PlotImpact.MAJOR, tags: ['New Location', 'New Character', 'Lore', 'Major Death'] },
    { episode: 36, title: "The Traitor's Knowledge", summary: "The team shoots down a plane and confronts its pilot, Reese, who claims to be part of the 'Alpones' PMC and knows about their past. A fragile alliance is shattered by a TNT explosion and a monster ambush, leaving the group in a tense standoff with their new, untrustworthy acquaintance.", plotImpact: PlotImpact.MAJOR, tags: ['Confrontation', 'Lore', 'Betrayal', 'Combat'] },
    { episode: 37, title: "Sayonara, Suckers!", summary: "After escaping into a mine, a joke about shooting the ceiling triggers a trap that floods the tunnels and unleashes monsters, killing two members. The survivors escape to the surface and follow a voiceless miner, only to be led into a second, deadlier ambush that results in the complete annihilation of the team.", plotImpact: PlotImpact.MAJOR, tags: ['Trap', 'Major Death', 'Combat', 'Climax', 'TPK'] },
    { episode: 38, title: "The Horde and The Hoard", summary: "After respawning, the team is immediately beset by a massive zombie horde. Thunderhead is killed and respawns in a nearby cave system. While gathering resources to recover, he discovers a massive hoard of gold, promising a significant turn in the team's fortunes if they can survive to mine it.", plotImpact: PlotImpact.MINOR, tags: ['Survival', 'Combat', 'Discovery', 'Resource'] },
    { episode: 39, title: "The Church Siege", summary: "After a chaotic escape from the zombie-infested caves, the team regroups at a derelict church, only to face a massive horde. A new ally joins their ranks as they fight to secure the rooftop, but their quest for resources leads them to another monster-filled building, ending in a desperate struggle for survival.", plotImpact: PlotImpact.MINOR, tags: ['Combat', 'Survival', 'New Character', 'Base Building'] },
    { episode: 40, title: "The Golden Crown", summary: "Inside the church, the team crafts golden gear before attempting a disastrous ambush on a lone, super-durable soldier. Forced into a desperate retreat, their sanctuary is breached by soldiers and zombies, leading to a final, overwhelming assault.", plotImpact: PlotImpact.MINOR, tags: ['Combat', 'Team Dynamics', 'Major Death'] },
    { episode: 41, title: "The Dealer's Riddle", summary: "The team crashes into a new city and is betrayed by their guide's 'friends.' They make a deal with a bizarre car salesman who, after they fulfill their end of the bargain, tricks them with a riddle and flees with the keys to their escape vehicle, only to be shot and fall into the water below.", plotImpact: PlotImpact.MINOR, tags: ['New Location', 'Betrayal', 'New Character', 'Surreal'] },
    { episode: 42, title: "The Keys, The Compass, & The Scientist", summary: "The team cleverly retrieves their escape vehicle keys and sets a new mission: find the 'Jack bean guy.' Their journey is cut short by a bridge ambush from the 'Reaper Twins,' leading to a crash. Surviving, they find a ruined town and discover a lone Mega X scientist in a basement, whom they decide to interrogate by feigning friendship.", plotImpact: PlotImpact.MAJOR, tags: ['Discovery', 'New Mission', 'Combat', 'New Character', 'Lore'] },
];

// --- TIMELINE S2 ---
export const TIMELINE_DATA_S2: TimelineEvent[] = [
    {
        title: "XCV. A New Season, A New World",
        description: "After a two-and-a-half-month timeskip, Season 2 begins. The team is driving through a snowy, post-apocalyptic city when they are beset by hostile mobs, forcing them to find weapons to survive in the hostile new world.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c-4.97 0-9-4.03-9-9S7.03 3 12 3s9 4.03 9 9-4.03 9-9 9Z" />
            </svg>
        ),
        episode: 33,
        date: "February 10, 2021",
        category: 'Mission',
    },
    {
        title: "XCVI. The Weapons Cache & The Trap",
        description: "The team finds a 'Weapons Smith' shop and equips themselves, but their discovery is short-lived. A public announcement declares 'INTRUDERS SPOTTED,' and armored guards from 'The Authority' immediately surround the building.",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 33,
        date: "February 10, 2021",
        category: 'Discovery',
    },
    {
        title: "XCVII. Capture & Imprisonment",
        description: "After a tense standoff with the guard leader, 'AdmiralStewie,' Kymar is forced to surrender. The team is captured and led to a prison where another player, 'EighthHalo,' is already being held.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
        ),
        episode: 33,
        date: "February 10, 2021",
        category: 'Character',
    },
    {
        title: "XCVIII. The Disastrous Prison Break",
        description: "The imprisoned players' escape plan immediately fails when one throws a watermelon at the guards. In the ensuing firefight, 'EighthHalo' throws a bomb, killing himself and triggering a 'RED ALERT' that plunges the prison into chaos.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-7.493-2.131 3.75 3.75 0 0 0-1.484 5.254A3.75 3.75 0 0 0 12 18Z" />
            </svg>
        ),
        episode: 33,
        date: "February 10, 2021",
        category: 'Combat',
    },
    {
        title: "XCIX. The City-Destroying Explosion",
        description: "Now free from prison, and with a casual attitude towards destruction, EighthHalo uses a 'comically large missile' to clear out remaining villagers. The faulty explosive obliterates the entire city, killing the players in the blast.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-7.493-2.131 3.75 3.75 0 0 0-1.484 5.254A3.75 3.75 0 0 0 12 18Z" />
            </svg>
        ),
        episode: 34,
        date: "February 11, 2021",
        category: 'Climax',
    },
    {
        title: "C. The Aftermath and a Lone Survivor",
        description: "The players respawn in the massive crater where the city once stood. Amidst the ruins, they spot a heavily-armored sole survivor who tanks multiple bullets, identified as a member of the 'Mega X Army'.",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        ),
        episode: 34,
        date: "February 11, 2021",
        category: 'Discovery',
    },
    {
        title: "CI. The Secret SCP Facility",
        description: "After chaotically repairing their truck, the team investigates a mysterious facility near the crater. They discover it's an SCP Foundation site and battle hostile pink flamingos (SCP-1507) and surgeon crabs (SCP-098) as they search for supplies.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21v-4.5m0 4.5h4.5m-4.5 0L9 15M3.75 3v4.5m0-4.5h4.5m-4.5 0L9 9m12 12v-4.5m0 4.5h-4.5m4.5 0L15 15m6-12v4.5m0-4.5h-4.5m4.5 0L15 9" />
            </svg>
        ),
        episode: 34,
        date: "February 12, 2021",
        category: 'Exploration',
    },
    {
        title: "CII. Ambush on the Highway",
        description: "After exploring the facility, the team is ambushed on the highway. A new ally, 'darkphan,' is immediately killed, and the group fights off a Yeti before meeting a mysterious man in a Hawaiian shirt named Reese.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.75 8.25 10.5 12.75 17.25 17.25 10.5 12.75 3.75Z" />
            </svg>
        ),
        episode: 35,
        date: "February 13, 2021",
        category: 'Combat',
    },
    {
        title: "CIII. Journey to the Ruined City",
        description: "Following a tense interrogation of Reese, the team drives through a long, dark tunnel into a ruined, overgrown city. Their truck is damaged by a playful TNT explosion, forcing them to proceed on foot.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        ),
        episode: 35,
        date: "February 13, 2021",
        category: 'Exploration',
    },
    {
        title: "CIV. The Plane Crash",
        description: "While exploring the city, the driver, Mikegent, is gravely wounded by a monster. Soon after, a fighter plane crashes nearby. The team is confronted again by Reese, who claims it was his plane and that they are responsible.",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-7.493-2.131 3.75 3.75 0 0 0-1.484 5.254A3.75 3.75 0 0 0 12 18Z" />
            </svg>
        ),
        episode: 35,
        date: "February 13, 2021",
        category: 'Climax',
    },
    {
        title: "CV. Disorientation and a Fateful Shot",
        description: "Lost in the ruined city and trying to follow a priest's vague directions, the team's confusion is interrupted when they spot a Japanese plane. In a moment of chaotic impulse, a player shoots it down with a pistol, leading to immediate regret and panic.",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-7.493-2.131 3.75 3.75 0 0 0-1.484 5.254A3.75 3.75 0 0 0 12 18Z" />
            </svg>
        ),
        episode: 36,
        date: "February 14, 2021",
        category: 'Combat',
    },
    {
        title: "CVI. Confrontation with Reese",
        description: "The pilot, Reese, emerges from the crash and confronts the group at gunpoint. He claims to be from a powerful PMC called 'the Alpones' and reveals he knows the team was rescued from a prison, offering information in exchange for his safety.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72.241c-1.12.072-2.22-.022-3.26-.296a11.942 11.942 0 0 1-3.26-.296 11.942 11.942 0 0 1-3.26.296c-1.04.072-2.14.122-3.26.296l-3.72-.242a2.122 2.122 0 0 1-1.98-2.193V10.608c0-.97.616-1.813 1.5-2.097L6.75 8.25m11.25 0-1.125-.225m-1.125-.225L15 7.5l-1.125-.225m-1.125-.225L12 6.75l-1.125.225m-1.125.225L9.75 7.5l-1.125.225m-1.125.225L6.75 8.25m-1.5 0-1.125-.225m13.5 0-1.125-.225M12 15.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
        ),
        episode: 36,
        date: "February 14, 2021",
        category: 'Lore',
    },
    {
        title: "CVII. A Fragile Alliance and a Sudden Explosion",
        description: "After a tense negotiation where Reese claims to be a doctor, a fragile alliance is formed. As they get into their truck to drive to a new town, a player drops TNT, damaging the engine and triggering a chaotic monster ambush.",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-7.493-2.131 3.75 3.75 0 0 0-1.484 5.254A3.75 3.75 0 0 0 12 18Z" />
            </svg>
        ),
        episode: 36,
        date: "February 14, 2021",
        category: 'Betrayal',
    },
    {
        title: "CVIII. Unresolved Standoff",
        description: "After fighting off the spawned creatures, including an orange stick-figure and a blue spider-like monster, the group reconvenes amidst the wreckage of their truck. The episode ends with a tense, unresolved confrontation between EighthHalo and Reese.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        episode: 36,
        date: "February 14, 2021",
        category: 'Character',
    },
    {
        title: "CIX. The Flooded Tunnel Trap",
        description: "Retreating into a mine, the team's jokes about shooting the ceiling jinx them. A loud horn blares, the tunnel floods with water, and aggressive creatures attack in the darkness, killing Kymar and Mike.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 37,
        date: "February 15, 2021",
        category: 'Betrayal',
    },
    {
        title: "CX. The Voiceless Miner",
        description: "The survivors escape to a rainy cave where they meet Aboveriar, a silent miner who communicates with signs, explaining he was forced to drink a 'voiceless' potion. He offers to lead them to a nearby village.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        ),
        episode: 37,
        date: "February 15, 2021",
        category: 'Character',
    },
    {
        title: "CXI. Total Annihilation",
        description: "The miner leads them to a bluff overlooking a black monolith. Just as they spot their truck, they are ambushed by a horde of wolves and red, spider-like 'Unka.' The miner is killed instantly, and the entire team is systematically wiped out in the ensuing firefight, ending the episode in total defeat.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.75 8.25 10.5 12.75 17.25 17.25 10.5 12.75 3.75Z" />
                 <path strokeLinecap="round" strokeLinejoin="round" d="m6.28 5.625 2.131-2.131a.563.563 0 0 1 .796 0l2.131 2.131-2.131 2.131a.563.563 0 0 1-.796 0L6.28 5.625Zm11.44 0 2.131-2.131a.563.563 0 0 1 .796 0l2.131 2.131-2.131 2.131a.563.563 0 0 1-.796 0l-2.131-2.131Zm-5.72 8.485 2.131-2.131a.563.563 0 0 1 .796 0l2.131 2.131-2.131 2.131a.563.563 0 0 1-.796 0l-2.131-2.131Zm-5.72 0 2.131-2.131a.563.563 0 0 1 .796 0l2.131 2.131-2.131 2.131a.563.563 0 0 1-.796 0L6.28 14.11Zm5.72 5.657 2.131-2.131a.563.563 0 0 1 .796 0l2.131 2.131-2.131 2.131a.563.563 0 0 1-.796 0l-2.131-2.131Z" />
            </svg>
        ),
        episode: 37,
        date: "February 15, 2021",
        category: 'Climax',
    },
    {
        title: "CXII. The Horde on the Hill",
        description: "After respawning, thunderhead arrives as reinforcements. While trying to wake a still-sleeping Kymar, they are attacked by a massive zombie horde. They are quickly overwhelmed, and thunderhead is killed again.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        episode: 38,
        date: "February 16, 2021",
        category: 'Combat',
    },
    {
        title: "CXIII. The Golden Cave",
        description: "Thunderhead respawns in a nearby cave system. While gathering basic resources, they save a friendly miner and discover a massive vein of gold ore, but realize they need an iron pickaxe to mine it.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.108 1.204.165.397.505.71.93.78l.895.15c.542.09.94.56.94 1.11v1.093c0 .55-.398 1.02-.94 1.11l-.895.149c-.425.07-.765.383-.93.78-.164.398-.142.854.108 1.204l.527.738c.32.447.27.96-.12 1.45l-.773.773a1.125 1.125 0 0 1-1.45.12l-.737-.527c-.35-.25-.806-.272-1.204-.108-.397.165-.71.505-.78.93l-.15.895c-.09.542-.56.94-1.11.94h-1.093c-.55 0-1.02-.398-1.11-.94l-.149-.894c-.07-.424-.384-.764-.78-.93-.398-.164-.855-.142-1.205.108l-.737.527a1.125 1.125 0 0 1-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272.806.108-1.204-.165-.397-.505.71-.93.78l-.895-.15c-.542-.09-.94-.56-.94-1.11v-1.093c0 .55.398 1.02.94 1.11l.895-.149c.425-.07.765-.383.93-.78.164-.398.142-.854-.108-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.806.272 1.204.108.397-.165.71-.505.78-.93l.15-.895Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        ),
        episode: 38,
        date: "February 16, 2021",
        category: 'Discovery',
    },
    {
        title: "CXIV. Trapped Below",
        description: "After being taught how to smelt iron, thunderhead crafts the necessary tools. Their progress is halted when a zombie appears in a doorway, trapping them in their small crafting room and ending the episode on a cliffhanger.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0-3-3m0 0-3-3m3 3H9" />
            </svg>
        ),
        episode: 38,
        date: "February 16, 2021",
        category: 'Exploration',
    },
    {
        title: "CXV. The Church Siege",
        description: "Escaping the golden caves, the team seeks refuge in a dilapidated church. The sanctuary is short-lived as a massive zombie horde lays siege to the building. After a brutal fight, they secure the rooftop with a new ally and defeat a skeletal boss, but another resource run ends with them trapped and swarmed by monsters.",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
        ),
        episode: 39,
        date: "February 17, 2021",
        category: 'Combat',
    },
    {
        title: "CXVI. The Failed Ambush",
        description: "Emboldened by newly crafted golden gear, the team attempts to ambush a lone soldier outside the church. The plan backfires spectacularly as the soldier proves incredibly resilient, killing them instantly. After respawning, they are forced to retreat and are ultimately overwhelmed in their sanctuary when it is breached by more soldiers and zombies.",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.828 12l-2.293 2.293-2.293-2.293 2.293-2.293 2.293 2.293zm-4.586 4.586L3.95 12l4.292-4.293 4.293 4.293-4.293 4.293zm11.414 0L14.536 12l4.292-4.293 4.293 4.293-4.293 4.293z" />
            </svg>
        ),
        episode: 40,
        date: "February 18, 2021",
        category: 'Climax',
    },
];

// --- CHARACTERS S2 ---
export const CHARACTER_DATA_S2: Character[] = [
    {
        name: "EighthHalo",
        description: "A new player character in Season 2 with a penchant for massive explosives. He sacrifices himself with a bomb during a prison break and later uses a 'comically large missile' to obliterate an entire city, showing a casual disregard for collateral damage.",
        faction: CharacterFaction.PROTAGONISTS,
        importance: 2,
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 37,
    },
    {
        name: "Reese (bestyrelse)",
        description: "A mysterious man in a red Hawaiian shirt whose plane is shot down by the team. He introduces himself as a member of a powerful PMC called 'the Alpones' and claims to be from their medical division. He possesses unsettling knowledge of the team's past, including their prison escape and their connection to Bloodless.",
        faction: CharacterFaction.THE_ALPONES,
        importance: 2,
        firstAppearanceEpisode: 35,
        lastAppearanceEpisode: 36,
    },
    {
        name: "AdmiralStewie",
        description: "A heavily armored, high-ranking guard of 'The Authority' in the snowy city. He confronts and captures the players after they are discovered in the weapons shop.",
        faction: CharacterFaction.THE_AUTHORITY,
        importance: 2,
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33,
    },
    {
        name: "Mega X Army Soldier",
        description: "A heavily-armored soldier and the sole survivor of the city's destruction. He is incredibly durable, tanking multiple bullets with ease. His presence confirms the continued existence of a 'Mega X Army,' posing a new threat.",
        faction: CharacterFaction.MEGA_X_ARMY,
        importance: 2,
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 40,
    },
    {
        name: "Aboveriar (The Miner)",
        description: "A silent, voiceless miner encountered in a cave after a disastrous tunnel flood. He communicates using signs and attempts to guide the survivors to a village, but is killed in a sudden ambush. He is later seen and killed again during the massacre at Ned's safe house.",
        faction: CharacterFaction.ALLIES,
        importance: 1,
        firstAppearanceEpisode: 37,
        lastAppearanceEpisode: 41,
    },
    {
        name: "Friendly Miner",
        description: "A friendly NPC miner found under attack in the Golden Cave system. After being saved by the team, he coexists peacefully with them as they gather resources.",
        faction: CharacterFaction.ALLIES,
        importance: 1,
        firstAppearanceEpisode: 38,
        lastAppearanceEpisode: 38,
    },
    {
        name: "El muchacho",
        description: "A new player character seen briefly in a cutscene, riding through a forest. His role in the main story is not yet clear.",
        faction: CharacterFaction.PROTAGONISTS,
        importance: 1,
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33,
    },
    {
        name: "darkphan",
        description: "A mysterious player who appears at the very end of the SCP Facility incident, joining the team after they escape the complex. He is killed shortly after in a highway ambush.",
        faction: CharacterFaction.ALLIES,
        importance: 1,
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 35,
    },
    {
        name: "Camouflaged Soldier",
        description: "A new female ally in military camouflage who joins the survivors at the church. Her origins and allegiances are unknown, but she aids them in the fight against the skeletal boss monster on the roof.",
        faction: CharacterFaction.ALLIES,
        importance: 2,
        firstAppearanceEpisode: 39,
        lastAppearanceEpisode: 39,
    },
    {
        name: "plattealle",
        description: "A guide who leads the team through the Waterfront City. After having lost his voice, he mysteriously regains it and leads the team to a supposed safe house, which turns out to be a deathtrap when his friends are slaughtered.",
        faction: CharacterFaction.ALLIES,
        importance: 1,
        firstAppearanceEpisode: 41,
        lastAppearanceEpisode: 41,
    },
    {
        name: "Ned",
        description: "A survivor in the Waterfront City and a friend of the team's guide, plattealle. He offers the team sanctuary, but he and his group are quickly slaughtered by a monstrous creature.",
        faction: CharacterFaction.ALLIES,
        importance: 1,
        firstAppearanceEpisode: 41,
        lastAppearanceEpisode: 41,
    },
    {
        name: "The Dealer (munchforobama)",
        description: "The eccentric and treacherous proprietor of a car dealership in the abandoned city. He speaks with a synthesized voice, makes bizarre deals, and ultimately betrays the team by withholding the keys to their vehicle after they completed his task.",
        faction: CharacterFaction.ANTAGONISTS,
        importance: 1,
        firstAppearanceEpisode: 41,
        lastAppearanceEpisode: 41,
    },
    {
        name: "Mega X Scientist",
        description: "A female scientist in a lab coat discovered hiding in a sterile basement in the Jungle Outpost. She works for the Mega X corporation and, believing she has been caught, seems resigned to her fate. The team attempts to befriend her to extract information.",
        faction: CharacterFaction.ANTAGONISTS,
        importance: 2,
        firstAppearanceEpisode: 42,
        lastAppearanceEpisode: 42,
    },
];

// --- LOCATIONS S2 ---
export const LOCATIONS_DATA_S2: Location[] = [
    {
        id: 'snowy_city',
        name: "Snowy Post-Apocalyptic City",
        description: "The primary setting for the start of Season 2. A ruined, snow-covered city patrolled by hostile mobs and 'The Authority.' It is completely obliterated by a massive missile in Episode 34.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 34,
    },
    {
        id: 'weapons_shop',
        name: "Weapons Smith Shop",
        description: "A derelict shop in the snowy city where the team finds a cache of guns and ammunition, triggering an alarm that leads to their capture.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33,
    },
    {
        id: 'city_prison',
        name: "The City Prison",
        description: "A fortified prison where 'The Authority' holds the players and other villagers captive. It becomes the site of a chaotic and deadly escape attempt.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33,
    },
    {
        id: 'the_crater',
        name: "The Crater",
        description: "The massive, smoking crater left behind after EighthHalo's 'comically large missile' completely destroyed the snowy city. The team respawns here and finds a lone survivor.",
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 34,
    },
    {
        id: 'secret_facility',
        name: "Secret Facility",
        description: "A mysterious, top-secret building located next to the crater. The team breaks in to find it is a derelict SCP Foundation site, containing hostile anomalies like SCP-1507 (flamingos) and SCP-098 (crabs), and a network of surveillance cameras.",
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 34,
    },
    {
        id: 'ruined_city',
        name: "Ruined Overgrown City",
        description: "A dilapidated modern city with overgrown streets and damaged buildings, located at the end of a long mountain tunnel. It becomes the site of a plane crash and a tense confrontation.",
        firstAppearanceEpisode: 35,
        lastAppearanceEpisode: 36,
    },
    {
        id: 'flooded_tunnel',
        name: "Flooded Minecart Tunnel",
        description: "A claustrophobic mine tunnel that becomes a deathtrap when a horn blares, plunging it into darkness and flooding it with water and hostile creatures.",
        firstAppearanceEpisode: 37,
        lastAppearanceEpisode: 37,
    },
    {
        id: 'miners_cave',
        name: "Miner's Escape Cave",
        description: "A small, rainy cave system that the survivors escape into from the flooded tunnel. It is here they meet the silent miner, Aboveriar.",
        firstAppearanceEpisode: 37,
        lastAppearanceEpisode: 37,
    },
    {
        id: 'monolith_bluff',
        name: "The Monolith Bluff",
        description: "A grassy bluff overlooking a large body of water from which a massive, impossibly tall black monolith rises. It serves as the site of the final, fatal ambush.",
        firstAppearanceEpisode: 37,
        lastAppearanceEpisode: 37,
    },
    {
        id: 'ambushed_village',
        name: "Ambushed Village",
        description: "A small, rustic village near the Monolith Bluff. The team is ambushed by a horde of monsters and wiped out before they can reach it.",
        firstAppearanceEpisode: 37,
        lastAppearanceEpisode: 37,
    },
    {
        id: 'golden_cave',
        name: "Golden Cave System",
        description: "A large, resource-rich cave system where the team respawns after the monolith ambush. It contains a massive, game-changing vein of gold ore, as well as friendly and hostile miners.",
        firstAppearanceEpisode: 38,
        lastAppearanceEpisode: 39,
    },
    {
        id: 'vine_covered_building',
        name: "Vine-Covered Building",
        description: "A dilapidated, vine-covered building near the church. The team discovers it is infested with a massive horde of zombies, leading to a desperate, claustrophobic fight.",
        firstAppearanceEpisode: 39,
        lastAppearanceEpisode: 39,
    },
    {
        id: 'waterfront_city',
        name: "The Waterfront City",
        description: "A large, modern city bordering the ocean, filled with hostile zombies. It contains strange pockets of civilization, like a fully functional car dealership run by an eccentric and treacherous dealer.",
        firstAppearanceEpisode: 41,
        lastAppearanceEpisode: 41,
    },
    {
        id: 'car_dealership',
        name: "The Car Dealership",
        description: "An improbably intact car dealership in the abandoned Waterfront City, run by a bizarre man who trades vehicles for violent favors and riddles.",
        firstAppearanceEpisode: 41,
        lastAppearanceEpisode: 41,
    },
    {
        id: 'jungle_outpost',
        name: "Jungle Outpost",
        description: "A ruined town surrounded by jungle, with a destroyed road. Contains a sterile concrete building with a basement where a Mega X scientist was hiding.",
        firstAppearanceEpisode: 42,
        lastAppearanceEpisode: 42,
    },
];

// --- BESTIARY S2 ---
export const BESTIARY_DATA_S2: BestiaryEntry[] = [
    {
        name: "Snowy Town Mobs",
        description: "Various hostile creatures found in the snowy city, including a pink creature and a large, yeti-like figure. They serve as environmental threats.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 36,
        type: 'Monster'
    },
    {
        name: "The Authority Guards",
        description: "Well-armed, armored soldiers who patrol the snowy city. They are highly organized and use lethal force to suppress any perceived threats or 'intruders'.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33,
        type: 'Humanoid'
    },
    {
        name: "Mega X Army Soldier",
        description: "A heavily-armored soldier who survived the complete destruction of the snowy city. He is incredibly resilient, able to withstand multiple gunshots without issue. His presence confirms a continued threat from Mega X's forces.",
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 40,
        type: 'Humanoid'
    },
    {
        name: "Hostile Pink Flamingos (SCP-1507)",
        description: "A flock of aggressive, plastic-like pink flamingos contained within the secret SCP facility. They attack on sight in large numbers.",
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 34,
        type: 'Anomaly'
    },
    {
        name: "Surgeon Crabs (SCP-098)",
        description: "Large, red spider-like creatures with razor-sharp legs, found in the flooded containment area of the SCP facility. They are highly aggressive and capable of dismembering their prey.",
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 34,
        type: 'Monster'
    },
    {
        name: "Ruined City Ambushers",
        description: "A mix of hostile creatures, including an orange stick-figure monster and a small blue spider-like monster, that swarm the team after a TNT explosion in the ruined city.",
        firstAppearanceEpisode: 36,
        lastAppearanceEpisode: 36,
        type: 'Monster'
    },
    {
        name: "Tunnel Stalkers",
        description: "Aggressive, grey, four-legged creatures that hunt in the darkness of the flooded minecart tunnel. They swarm their victims in the water.",
        firstAppearanceEpisode: 37,
        lastAppearanceEpisode: 37,
        type: 'Monster'
    },
    {
        name: "Grey Wolves",
        description: "Large, hostile wolves that ambush the team in the forests surrounding the Monolith Bluff.",
        firstAppearanceEpisode: 37,
        lastAppearanceEpisode: 37,
        type: 'Monster'
    },
    {
        name: "Unka",
        description: "Sinister, red, spider-like creatures that attack alongside the wolves in the final ambush. One is responsible for killing the voiceless miner.",
        firstAppearanceEpisode: 37,
        lastAppearanceEpisode: 40,
        type: 'Monster'
    },
    {
        name: "Zombie Horde",
        description: "A massive swarm of zombies, including larger mutated variants, that swarms the team on the hills after they respawn from the monolith ambush.",
        firstAppearanceEpisode: 38,
        lastAppearanceEpisode: 40,
        type: 'Monster'
    },
    {
        name: "Hostile Miner",
        description: "An aggressive miner found deep within the Golden Cave system who attempts to burn thunderhead alive.",
        firstAppearanceEpisode: 38,
        lastAppearanceEpisode: 38,
        type: 'Humanoid'
    },
    {
        name: "Pink Humanoid Creature",
        description: "A fast, aggressive humanoid creature encountered in the dark tunnels of the Golden Cave system. It fights alongside standard zombies, posing a significant threat in close quarters.",
        firstAppearanceEpisode: 39,
        lastAppearanceEpisode: 39,
        type: 'Humanoid',
    },
    {
        name: "Three-Headed Red Beast",
        description: "A hulking, three-headed red monster found roaming the hills near the derelict church. It is one of the formidable new surface-world threats.",
        firstAppearanceEpisode: 39,
        lastAppearanceEpisode: 39,
        type: 'Monster',
    },
    {
        name: "Green Dinosaur-like Creature",
        description: "A large, green reptilian creature encountered alongside the Three-Headed Red Beast on the surface. Its presence indicates a world now populated by monstrous fauna.",
        firstAppearanceEpisode: 39,
        lastAppearanceEpisode: 39,
        type: 'Monster',
    },
    {
        name: "Skeletal Boss Monster",
        description: "A powerful skeletal creature that confronts the team on the roof of the church. It serves as a major obstacle in their attempt to secure the location.",
        firstAppearanceEpisode: 39,
        lastAppearanceEpisode: 39,
        type: 'Monster',
    },
    {
        name: "Insane Zombie",
        description: "A super-fast, aggressive pink zombie encountered in the Waterfront City. It moves with incredible speed, posing a significant threat.",
        firstAppearanceEpisode: 41,
        lastAppearanceEpisode: 41,
        type: 'Monster'
    },
    {
        name: "Sanctuary Creature",
        description: "A monstrous, alien-like creature that ambushed the team in a supposed safe house in the Waterfront City. It is responsible for the massacre of Ned and his group of survivors.",
        firstAppearanceEpisode: 41,
        lastAppearanceEpisode: 41,
        type: 'Monster'
    },
    {
        name: "Reaper Twins",
        description: "Two menacing, hostile figures that appear at night to ambush travelers. They attacked the team on a bridge, causing their vehicle to crash.",
        firstAppearanceEpisode: 42,
        lastAppearanceEpisode: 42,
        type: 'Anomaly',
    },
];

// --- ITEMS S2 ---
export const KEY_ITEMS_DATA_S2: KeyItem[] = [
     {
        name: "Radios",
        description: "The players rediscover they have radios, allowing them to communicate over distances. However, they quickly realize that their enemies might be able to listen in on their conversations.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33
    },
    {
        name: "Watermelon (Weaponized)",
        description: "A seemingly harmless watermelon is used as an improvised projectile to instigate a prison riot, kicking off a disastrously chaotic escape attempt.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33
    },
    {
        name: "Bomb",
        description: "A powerful explosive used by EighthHalo as a last resort during the prison break. The detonation kills him and causes significant chaos, aiding the other players' escape.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33
    },
    {
        name: "Comically Large Missile",
        description: "A massive, faulty explosive used by EighthHalo. Intended to clear out a few villagers, it instead obliterates the entire city and the players in a gigantic explosion, reshaping the landscape.",
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 34
    },
    {
        name: "Facility Computer",
        description: "A computer found in the secret facility. When enabled, it provides camera access, suggesting the team is being monitored via a surveillance network.",
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 34,
    },
    {
        name: "Military Truck",
        description: "A durable, multi-personnel military truck that serves as the team's primary mode of transport in the outside world. It is frequently damaged by explosions and poor driving.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 38,
    },
    {
        name: "Crashed Fighter Plane",
        description: "A Japanese Zero fighter plane shot down by the team in the ruined city. Its pilot, Reese, survives the crash, leading to a tense confrontation.",
        firstAppearanceEpisode: 35,
        lastAppearanceEpisode: 36,
    },
    {
        name: "EighthHalo's Heart",
        description: "A pixelated, bloody heart item dropped by EighthHalo for Kymar in a strange, intimate gesture. The gift is immediately rejected as it is unusable.",
        firstAppearanceEpisode: 37,
        lastAppearanceEpisode: 37,
    },
    {
        name: "Miner's Signs",
        description: "A series of hand-held signs used by the voiceless miner, Aboveriar, to communicate with the team after they escape the flooded tunnel.",
        firstAppearanceEpisode: 37,
        lastAppearanceEpisode: 37,
    },
    {
        name: "The Golden Hoard",
        description: "A massive, game-changing vein of gold ore discovered in a deep cave system. Its immense value presents the team with a significant opportunity to fund their operations, provided they can successfully mine and secure it.",
        firstAppearanceEpisode: 38,
        lastAppearanceEpisode: 38,
    },
    {
        name: "Golden Sword",
        description: "A sword crafted from gold found in the caves. Given as a gift to Mike before the disastrous ambush attempt at the church.",
        firstAppearanceEpisode: 40,
        lastAppearanceEpisode: 40
    },
    {
        name: "The Golden Crown",
        description: "A golden helmet crafted by thunderhead at his companion's request. He wears it as a crown, embracing a regal look just before his forces are overrun.",
        firstAppearanceEpisode: 40,
        lastAppearanceEpisode: 40
    },
    {
        name: "Amphibious Car Compass",
        description: "A working compass on the dashboard of the amphibious vehicle, allowing the team to navigate the outside world after discovering it.",
        firstAppearanceEpisode: 42,
        lastAppearanceEpisode: 42,
    },
];

// --- STORY ARCS S2 ---
export const STORY_ARCS_DATA_S2: StoryArc[] = [
    {
        title: "The Snowy City & The Prison Break",
        episodeRange: "Episodes 33-34",
        summary: "Season 2 opens in a snowy city controlled by 'The Authority.' After being captured, the team makes a chaotic escape. Their mission to clear the city escalates dramatically when a massive, faulty missile is used, obliterating the entire area and leaving a massive crater. The aftermath reveals a new, powerful enemy from the 'Mega X Army,' and shifts the team's focus to a nearby secret SCP facility filled with dangerous anomalies.",
        characterDevelopments: [
            { characterName: "The Team", development: "Now battle-hardened, their first instinct is to find weapons, but they are outmaneuvered and captured, showing their vulnerability against an organized foe. Their problem-solving escalates to city-wide destruction." },
            { characterName: "EighthHalo", development: "Showcases an affinity for massive, unpredictable explosives and a casual disregard for collateral damage, first with a suicide bomb and then with a city-destroying missile." },
        ]
    },
    {
        title: "The Alpones & The Ruined City",
        episodeRange: "Episode 35-Ongoing",
        summary: "The team's journey takes them into a ruined city where they shoot down a plane and confront its pilot, Reese, a member of the powerful 'Alpones' PMC. A series of traps, ambushes, and betrayals results in the complete annihilation of the team. After respawning, they find a massive hoard of gold, but their attempt to fortify a church ends in another massacre. After another betrayal leaves them stranded, they recover their vehicle through cunning, set a new mission to find a lost character, and are immediately ambushed on a bridge by 'Reaper Twins.' The survivors find a ruined outpost and capture a Mega X scientist, setting the stage for a tense interrogation.",
        characterDevelopments: [
            { characterName: "The Team", development: "Forced into another confrontation with an unknown faction. Their paranoia increases as Reese reveals knowledge of their history, suggesting their actions are being watched. The mysterious deaths confirm they have a traitor or are being hunted by an unseen force." },
            { characterName: "Reese (bestyrelse)", development: "Introduced as a charismatic but untrustworthy figure with mysterious connections and knowledge, immediately positioning himself as a key player in the unfolding narrative." },
        ]
    }
];