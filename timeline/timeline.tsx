import { TimelineEvent } from './types';
import { TIMELINE_DATA_EP1_10 } from './timeline.ep1-10';
import { TIMELINE_DATA_EP11_20 } from './timeline.ep11-20';
import { TIMELINE_DATA_EP21_30 } from './timeline.ep21-30';
import { TIMELINE_DATA_EP31_40 } from './timeline.ep31-40';
import { TIMELINE_DATA_S2 } from './season2Data';

const TIMELINE_DATA_S1: TimelineEvent[] = [
    ...TIMELINE_DATA_EP1_10,
    ...TIMELINE_DATA_EP11_20,
    ...TIMELINE_DATA_EP21_30,
    ...TIMELINE_DATA_EP31_40,
];

export const TIMELINE_DATA: TimelineEvent[] = [...TIMELINE_DATA_S1, ...TIMELINE_DATA_S2];
