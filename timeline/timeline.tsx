import { TimelineEvent } from './types';
import { TIMELINE_DATA_EP1_10 } from './timeline.ep1-10';
import { TIMELINE_DATA_EP11_20 } from './timeline.ep11-20';
import { TIMELINE_DATA_EP21_30 } from './timeline.ep21-30';
import { TIMELINE_DATA_EP31_40 } from './timeline.ep31-40';
import { TIMELINE_DATA_EP41_50 } from './timeline.ep41-50';
import { TIMELINE_DATA_EP51_60 } from './timeline.ep51-60';

export const TIMELINE_DATA: TimelineEvent[] = [
    ...TIMELINE_DATA_EP1_10,
    ...TIMELINE_DATA_EP11_20,
    ...TIMELINE_DATA_EP21_30,
    ...TIMELINE_DATA_EP31_40,
    ...TIMELINE_DATA_EP41_50,
    ...TIMELINE_DATA_EP51_60,
];