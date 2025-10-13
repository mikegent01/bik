import React from 'react';
import { TimelineEvent } from './types';

const iconClass = "h-6 w-6 text-slate-300";

export const TIMELINE_DATA_EP101_110: TimelineEvent[] = [
    {
        title: "Arctic Thaw",
        description: "The video, \"Minecraft: Arctic Thaw {M Movie S4 E1}\", is the first episode of the fourth season, following the protagonists who were hurt in Canada and are revived by Dr. Valeri in an Antarctic research facility. They are brought there to recover, but soon realize something is amiss. They discover various rooms, including storage and a medical area with mysterious green liquid and potions.\n\nThe group needs to fix an antenna to establish a connection. While outside, they encounter an enemy and engage in a fight, with one of them getting killed. They also find a hidden weapon. Back inside, they discuss the strange nature of the facility and the potential for a disease to spread. The episode ends with the protagonists feeling uneasy about their situation and the true purpose of the research facility.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6-2.292m0 0V3.75m0 16.5" />
            </svg>
        ),
        episode: 101,
        date: "January 15, 2027",
        category: 'Discovery',
    },
];