
import React from 'react';
import { TimelineEvent } from './types';

const iconClass = "h-6 w-6 text-slate-300";

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
    },
    {
        title: "CXIII. The Golden Cave",
        description: "Thunderhead respawns in a nearby cave system. While gathering basic resources, they save a friendly miner and discover a massive vein of gold ore, but realize they need an iron pickaxe to mine it.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.108 1.204.165.397.505.71.93.78l.895.15c.542.09.94.56.94 1.11v1.093c0 .55-.398 1.02-.94 1.11l-.895.149c-.425.07-.765.383-.93.78-.164.398-.142.854.108 1.204l.527.738c.32.447.27.96-.12 1.45l-.773.773a1.125 1.125 0 0 1-1.45.12l-.737-.527c-.35-.25-.806-.272-1.204-.108-.397.165-.71.505-.78.93l-.15.895c-.09.542-.56.94-1.11.94h-1.093c-.55 0-1.02-.398-1.11-.94l-.149-.894c-.07-.424-.384-.764-.78-.93-.398-.164-.855-.142-1.205.108l-.737.527a1.125 1.125 0 0 1-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.505.71-.93.78l-.895-.15c-.542-.09-.94-.56-.94-1.11v-1.093c0 .55.398 1.02.94 1.11l.895-.149c.425-.07.765-.383.93-.78.164-.398.142-.854-.108-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.806.272 1.204.108.397-.165.71-.505.78-.93l.15-.895Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        ),
        episode: 38,
        date: "February 16, 2021",
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
    },
    {
        title: "CXVII. The Ambush and the Traitor",
        description: "After regrouping in the church, the team's attempt to ambush a lone Mega X soldier backfires, leading to a larger skirmish. They find the main bridge destroyed and meet a worker, plattealle, who reveals he was forced to betray them by the 'Mega X Crew.'",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
        ),
        episode: 41,
        date: "February 19, 2021",
    },
    {
        title: "CXVIII. The Golden Bribe",
        description: "With their escape route cut off, the team strikes a deal with the reluctant traitor. They give him a valuable golden sword as payment for his help in finding another way out of the city.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
            </svg>
        ),
        episode: 41,
        date: "February 19, 2021",
    },
    {
        title: "CXIX. Betrayal on the Water",
        description: "Plattealle leads them to an amphibious boat. As they speed across the water at night, smoke billows from the engine. Seizing his chance, plattealle leaps overboard, abandoning them on the runaway vessel as it careens towards a distant, unknown city.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.75 8.25 10.5 12.75 17.25 17.25 10.5 12.75 3.75Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c-4.97 0-9-4.03-9-9S7.03 3 12 3s9 4.03 9 9-4.03 9-9 9Z" />
            </svg>
        ),
        episode: 41,
        date: "February 19, 2021",
    },
];
