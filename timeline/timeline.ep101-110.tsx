import React from 'react';
import { TimelineEvent } from './types';

const iconClass = "h-6 w-6 text-slate-300";

export const TIMELINE_DATA_EP101_110: TimelineEvent[] = [
    {
        title: "CCLII. The Researcher in the Ice",
        description: "After a multi-year time skip, the team finds Doctor Valeneria in a desolate, frozen shelter. Now a paranoid researcher, he reveals his work on ancient portals, a facility of clones, and the hostile 'Bobs' outside. The reunion ends abruptly when a team member vanishes into a broken portal, launching a new, uncertain quest.",
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