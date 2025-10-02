import React, { useState, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { View, TimelineEvent } from './types';
import './index.css';

// Import data and shared components
import { TIMELINE_DATA } from './constants';
import Card from './Card';

// Import components
import Sidebar from './Sidebar';
import TimelineView from './TimelineView';
import StoryArcsView from './StoryArcsView';
import EpisodesView from './EpisodesView';
import CharactersView from './CharactersView';
import FactionsView from './FactionsView';
import LocationsView from './LocationsView';
import WorldMapView from './WorldMapView';
import BestiaryView from './BestiaryView';
import ItemsView from './ItemsView';
import GlossaryView from './GlossaryView';
import SeasonsView from './SeasonsView';
import BonusLoreView from './BonusLoreView';

// --- Calendar View Component ---
const categoryColorMap: Record<string, string> = {
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

const CalendarEvent: React.FC<{ event: TimelineEvent }> = ({ event }) => {
  // Encapsulated logic for determining season label based on consolidated 3-season structure
  const getSeasonLabel = (episode: number): string => {
    if (episode === 0) return 'Prologue';
    if (episode >= 1 && episode <= 32) return `S1E${episode}`;
    if (episode >= 33 && episode <= 72) return `S2E${episode - 32}`;
    return `S3E${episode - 72}`;
  };

  const colorClass = categoryColorMap[event.category] || 'bg-slate-400';
  return (
    <div className="text-xs p-1 rounded bg-zinc-800/50 hover:bg-zinc-800 transition-colors mb-1 cursor-default flex items-start text-left">
      <span className={`w-2 h-2 rounded-full mr-2 mt-1 flex-shrink-0 ${colorClass}`} title={event.category}></span>
      <div>
        <span className="font-bold text-lime-400">
          {getSeasonLabel(event.episode)}:
        </span>
        <span className="ml-1 text-slate-300">{event.title}</span>
      </div>
    </div>
  );
};

const CalendarMonth: React.FC<{ year: number; month: number; eventsByDate: Map<string, TimelineEvent[]> }> = ({ year, month, eventsByDate }) => {
  const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const blanks = Array(firstDayOfMonth).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <Card className="w-full">
      <h3 className="text-2xl font-bold text-white mb-4 text-center">{monthName} {year}</h3>
      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center font-semibold text-slate-400 text-sm py-2">{day}</div>
        ))}
        {blanks.map((_, i) => <div key={`blank-${i}`} className="border border-transparent" />)}
        {days.map(day => {
          const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const dayEvents = eventsByDate.get(key) || [];
          return (
            <div key={day} className="border border-zinc-800 bg-zinc-950/50 min-h-[120px] p-1.5 rounded-md flex flex-col">
              <span className="font-semibold text-slate-300 self-start">{day}</span>
              <div className="mt-1 flex-grow">
                {dayEvents.map(event => <CalendarEvent key={event.title} event={event} />)}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

const CalendarFilterControls: React.FC<{
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
                    const colorClass = categoryColorMap[option] || 'bg-slate-400';
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


const CalendarView: React.FC = () => {
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

  const { eventsByDate, monthsWithEvents } = useMemo(() => {
    const eventsMap = new Map<string, TimelineEvent[]>();
    const monthsSet = new Set<string>();

    const filteredEvents = TIMELINE_DATA.filter(event => 
        activeCategories.length === 0 || (event.category && activeCategories.includes(event.category))
    );

    filteredEvents.forEach(event => {
      const date = new Date(event.date);
      // Adjust for potential timezone shifts by working with UTC dates
      const year = date.getUTCFullYear();
      const month = date.getUTCMonth();
      const day = date.getUTCDate();

      const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      if (!eventsMap.has(key)) {
        eventsMap.set(key, []);
      }
      eventsMap.get(key)!.push(event);
      
      monthsSet.add(`${year}-${month}`);
    });

    const sortedMonths = Array.from(monthsSet)
      .map(m => {
        const [year, month] = m.split('-').map(Number);
        return { year, month };
      })
      .sort((a, b) => a.year - b.year || a.month - b.month);

    return { eventsByDate: eventsMap, monthsWithEvents: sortedMonths };
  }, [activeCategories]);

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">Campaign Calendar</h2>
      <p className="text-slate-400 mb-8 max-w-3xl">
        A chronological overview of the campaign's key events. Filter by category to highlight specific types of moments in the story. The timeline begins in October 2020, with a significant time skip before Season 2 starts in February 2021.
      </p>
      <CalendarFilterControls 
        options={allCategories}
        activeFilters={activeCategories}
        onToggle={handleToggleCategory}
      />
      <div className="space-y-8">
        {monthsWithEvents.length > 0 ? (
          monthsWithEvents.map(({ year, month }) => (
            <CalendarMonth key={`${year}-${month}`} year={year} month={month} eventsByDate={eventsByDate} />
          ))
        ) : (
          <Card>
            <p className="text-center text-slate-400">No events found for the selected filters.</p>
          </Card>
        )}
      </div>
    </div>
  );
};


// --- Main App Component ---

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(View.TIMELINE);

  const renderActiveView = () => {
    switch (activeView) {
      case View.TIMELINE:
        return <TimelineView />;
      case View.CALENDAR:
        return <CalendarView />;
      case View.STORY_ARCS:
        return <StoryArcsView />;
      case View.EPISODES:
        return <EpisodesView />;
      case View.CHARACTERS:
        return <CharactersView />;
      case View.FACTIONS:
        return <FactionsView />;
      case View.LOCATIONS:
        return <LocationsView />;
      case View.WORLD_MAP:
        return <WorldMapView />;
      // FIX: Corrected typo from BESTIERY to BESTIARY.
      case View.BESTIARY:
        return <BestiaryView />;
      case View.ITEMS:
        return <ItemsView />;
      case View.GLOSSARY:
        return <GlossaryView />;
      case View.SEASONS:
        return <SeasonsView />;
      case View.BONUS_LORE:
        return <BonusLoreView />;
      default:
        return <TimelineView />;
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Mission Dossier: The Mega X Campaign
        </h1>
        <p className="text-lime-400 mt-2 text-lg">
          An interactive archive of a perilous campaign.
        </p>
      </header>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-screen-2xl mx-auto">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
        <main className="flex-1 min-w-0">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<React.StrictMode><App /></React.StrictMode>);