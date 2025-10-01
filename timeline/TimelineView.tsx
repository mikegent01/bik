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

// New Header component for Seasons
const TimelineSeasonHeader: React.FC<{ title: string, isLast: boolean }> = ({ title, isLast }) => {
  return (
    <div className="relative pl-10">
      {!isLast && <div className="absolute left-4 top-5 h-full w-0.5 bg-slate-600"></div>}
      <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 border-2 border-sky-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2m14 0h-2m-4 0h-2" />
        </svg>
      </div>
      <h3 className="font-bold text-2xl text-sky-400 ml-2 pt-1.5">{title}</h3>
    </div>
  );
};

const TimelineView: React.FC = () => {
  // Define a union type for items in our display list
  type TimelineDisplayItem = TimelineEvent | { type: 'SEASON_HEADER'; title: string; key: string };

  const displayItems: TimelineDisplayItem[] = [];
  let currentSeason = 0;

  // Build the list of items, inserting season headers where needed
  TIMELINE_DATA.forEach((item) => {
    // Season 1 is up to episode 32, Season 2 starts at 33
    const itemSeason = item.episode <= 32 ? 1 : 2;
    if (itemSeason > currentSeason) {
      currentSeason = itemSeason;
      const seasonTitle = currentSeason === 1 
          ? "Season 1: The Castle & The Labyrinth" 
          : "Season 2: The Authority";
      displayItems.push({ type: 'SEASON_HEADER', title: seasonTitle, key: `season-${currentSeason}` });
    }
    displayItems.push(item);
  });

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">Mission Timeline</h2>
      <div className="space-y-8">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;

          // Check if the item is a season header
          if ('type' in item && item.type === 'SEASON_HEADER') {
            return <TimelineSeasonHeader key={item.key} title={item.title} isLast={isLast} />;
          }

          // Otherwise, it's a regular timeline event
          const event = item as TimelineEvent;
          return (
            <TimelineItem 
              key={event.title} 
              item={event} 
              isLast={isLast} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default TimelineView;