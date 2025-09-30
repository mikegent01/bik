import React from 'react';
import Card from './Card';
import { TIMELINE_DATA } from './constants';
import { TimelineEvent } from './types';

const TimelineItem: React.FC<{ item: TimelineEvent, isLast: boolean }> = ({ item, isLast }) => {
  return (
    <div className="relative pl-10">
      {!isLast && <div className="absolute left-4 top-5 h-full w-0.5 bg-slate-600"></div>}
      <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-700">
        {item.icon}
      </div>
      <Card>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-lg text-white mr-4">{item.title}</h3>
          <span className="bg-slate-700 text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
            EPISODE {item.episode}
          </span>
        </div>
        <p className="text-slate-400">{item.description}</p>
      </Card>
    </div>
  );
};

const TimelineView: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">Mission Timeline</h2>
      <div className="space-y-8">
        {TIMELINE_DATA.map((item, index) => (
          <TimelineItem 
            key={item.title} 
            item={item} 
            isLast={index === TIMELINE_DATA.length - 1} 
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineView;
