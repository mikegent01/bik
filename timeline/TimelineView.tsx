import React, { useMemo, useState } from 'react';
import Card from './Card';
import { TIMELINE_DATA } from './constants';
import { TimelineEvent } from './types';

// --- Components and Data for Filtering ---

// For timeline item borders
const borderCategoryColorMap: Record<string, string> = {
  Mission: 'border-lime-500',
  Combat: 'border-red-500',
  Exploration: 'border-emerald-500',
  Discovery: 'border-amber-500',
  Character: 'border-indigo-500',
  Betrayal: 'border-rose-600',
  Climax: 'border-fuchsia-500',
  Lore: 'border-slate-500',
  Strategy: 'border-sky-500',
  'World Event': 'border-orange-500',
  Negotiation: 'border-cyan-500',
};

// For filter control buttons
const buttonCategoryColorMap: Record<string, string> = {
  Mission: 'bg-lime-500',
  Combat: 'bg-red-500',
  Exploration: 'bg-emerald-500',
  Discovery: 'bg-amber-500',
  Character: 'bg-indigo-500',
  Betrayal: 'bg-rose-600',
  Climax: 'bg-fuchsia-500',
  Lore: 'bg-slate-500',
  Strategy: 'bg-sky-500',
  'World Event': 'bg-orange-500',
  Negotiation: 'bg-cyan-500',
};

const TimelineFilterControls: React.FC<{
    options: string[];
    activeFilters: string[];
    onToggle: (option: string) => void;
}> = ({ options, activeFilters, onToggle }) => {
    return (
        <div className="mb-6 p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-zinc-800">
            <h4 className="text-sm font-semibold text-slate-300 mb-3">Filter by Event Category</h4>
            <div className="flex flex-wrap gap-2">
                {options.map(option => {
                    const isActive = activeFilters.includes(option);
                    const colorClass = buttonCategoryColorMap[option] || 'bg-slate-400';
                    return (
                        <button
                            key={option}
                            onClick={() => onToggle(option)}
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors flex items-center gap-2 ${
                                isActive 
                                ? 'bg-lime-500 text-black' 
                                : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
                            }`}
                        >
                           <span className={`w-2 h-2 rounded-full ${colorClass}`}></span>
                           {option}
                        </button>
                    );
                })}
                {activeFilters.length > 0 && (
                     <button
                        onClick={() => onToggle('__ALL__')}
                        className="px-3 py-1 text-xs font-medium rounded-full transition-colors bg-red-500/50 text-red-200 hover:bg-red-500/70"
                    >
                        Clear Filters
                    </button>
                )}
            </div>
        </div>
    );
};


// --- Timeline Components ---

const TimelineItem: React.FC<{ item: TimelineEvent, isLast: boolean }> = ({ item, isLast }) => {
  const isSeason2 = item.episode > 32;
  const seasonEpisode = isSeason2 ? item.episode - 32 : item.episode;
  
  const borderColorClass = borderCategoryColorMap[item.category] || 'border-zinc-800';
  const cardClasses = `border-l-4 ${borderColorClass}`;

  return (
    <div className="relative pl-10">
      {!isLast && <div className="absolute left-4 top-5 h-full w-0.5 bg-zinc-700"></div>}
      <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700">
        {item.icon}
      </div>
      <Card className={cardClasses}>
        <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
          <h3 className="font-semibold text-lg text-white mr-4">{item.title}</h3>
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-slate-400 text-xs font-medium whitespace-nowrap">{item.date.toUpperCase()}</span>
            <span className="bg-zinc-800 text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
              {isSeason2 
                ? `SEASON 2 EPISODE ${seasonEpisode} | EPISODE ${item.episode}`
                : `EPISODE ${item.episode}`
              }
            </span>
          </div>
        </div>
        <p className="text-slate-400">{item.description}</p>
      </Card>
    </div>
  );
};

const TimelineSeasonHeader: React.FC<{ title: string, isLast: boolean }> = ({ title, isLast }) => {
  return (
    <div className="relative pl-10">
      {!isLast && <div className="absolute left-4 top-5 h-full w-0.5 bg-zinc-700"></div>}
      <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 border-2 border-lime-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2m14 0h-2m-4 0h-2" />
        </svg>
      </div>
      <h3 className="font-bold text-2xl text-lime-400 ml-2 pt-1.5">{title}</h3>
    </div>
  );
};

const TimelineView: React.FC = () => {
  type TimelineDisplayItem = TimelineEvent | { type: 'SEASON_HEADER'; title: string; key: string } | { type: 'NO_RESULTS'; key: string };
  
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  
  const allCategories = useMemo(() => {
      const categories = new Set<string>();
      TIMELINE_DATA.forEach(event => event.category && categories.add(event.category));
      return Array.from(categories).sort();
  }, []);

  const handleToggleCategory = (category: string) => {
      if (category === '__ALL__') {
          setActiveCategories([]);
          return;
      }
      setActiveCategories(prev => 
          prev.includes(category) 
              ? prev.filter(c => c !== category)
              : [...prev, category]
      );
  };

  const displayItems: TimelineDisplayItem[] = useMemo(() => {
    const filteredEvents = TIMELINE_DATA.filter(event => 
        activeCategories.length === 0 || (event.category && activeCategories.includes(event.category))
    );

    if (filteredEvents.length === 0 && activeCategories.length > 0) {
        return [{ type: 'NO_RESULTS', key: 'no-results' }];
    }

    const items: TimelineDisplayItem[] = [];
    let currentSeason = 0;

    filteredEvents.forEach((item) => {
        const itemSeason = item.episode <= 32 ? 1 : 2;
        if (itemSeason > currentSeason) {
          currentSeason = itemSeason;
          const seasonTitle = currentSeason === 1 
              ? "Season 1: The Castle & The Labyrinth" 
              : "Season 2: The Authority";
          items.push({ type: 'SEASON_HEADER', title: seasonTitle, key: `season-${currentSeason}` });
        }
        items.push(item);
    });
    return items;
  }, [activeCategories]);

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">Mission Timeline</h2>
      <TimelineFilterControls 
          options={allCategories}
          activeFilters={activeCategories}
          onToggle={handleToggleCategory}
      />
      <div className="space-y-8">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;

          if ('type' in item) {
            if (item.type === 'SEASON_HEADER') {
                return <TimelineSeasonHeader key={item.key} title={item.title} isLast={isLast} />;
            }
            if (item.type === 'NO_RESULTS') {
                return <Card><p className="text-center text-slate-400">No events found for the selected filters.</p></Card>;
            }
          }

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