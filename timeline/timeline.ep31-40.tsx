import React from 'react';
// FIX: Corrected import path for types to './types' to match the flat project structure.
import { TimelineEvent } from './types';

const iconClass = "h-6 w-6 text-slate-300";

export const TIMELINE_DATA_EP31_40: TimelineEvent[] = [
    {
        title: "LXXXVIII. The Impostor's Betrayal",
        description: "In the flesh dimension, an impostor version of Jeremy shoots and kills Mike. The team is then guided by another Jeremy to a teleporter, which transports them to the sterile, watery poolrooms.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.l217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 31
    },
    {
        title: "LXXXIX. Delivery to the Troll",
        description: "The team finds a shop stall run by 'Lando,' the troll from their quest. Kymar delivers all the bizarre scavenger hunt items: Rocky Road, purified water, a Diamond Block, a crayon candle, a candy bar, and Almond Water.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l.383-1.437M7.5 14.25L5.106 5.165A2.25 2.25 0 0 0 2.868 3H2.25m5.25 9h11.218M15 15.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        ),
        episode: 31
    },
    {
        title: "XC. The Troll's Trap",
        description: "Instead of a reward, the troll traps them. The shop goes into lockdown, alarms blare, and a massive spiked plate descends from the ceiling, crushing and killing Kymar instantly.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 31
    },
    {
        title: "XCI. The Disorienting Chase",
        description: "Mike and a respawned Kymar are forced into a chaotic chase after the troll through a maze of identical corridors and flashing doors. The troll uses flashbang effects to stun them before leading them to a final teleporter, ending the episode in a flash of white light.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691v4.992" />
            </svg>
        ),
        episode: 31
    },
    {
        title: "XCII. Escape to a Warzone",
        description: "The troll's final teleporter forcibly ejects the team from the backrooms. They land back at the location of Mega X's Castle, now a ruined warzone. Stripped of all their items, they realize in the chaos that they forgot No One and left him behind.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v3.75m10.5 0v3.75m-10.5-3.75v3.75m10.5 0v3.75A2.25 2.25 0 0 1 13.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m10.5 0-3-3m-3 3 3-3m-3-3.75 3 3m-3-3-3 3" />
            </svg>
        ),
        episode: 32
    },
    {
        title: "XCIII. The Suicide Mission & The Conspiracy",
        description: "Seeking shelter, the group finds a church run by a new priest who offers them a quest to pillage a village. After accepting, they eavesdrop on the priest and a memory-wiped Jeremy, discovering the quest is a setup and Jeremy has been ordered to execute them once they've served their purpose.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6-2.292m0 0V3.75m0 16.5" />
            </svg>
        ),
        episode: 32
    },
     {
        title: "XCIV. A New Objective: Survive and Prepare",
        description: "Furious but completely unarmed, the group decides against immediate retaliation. Their new, secret objective is to play along, using the village raid as a cover to find weapons and supplies to arm themselves for the inevitable betrayal and confrontation with the priest and Jeremy.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        ),
        episode: 32
    }
];
