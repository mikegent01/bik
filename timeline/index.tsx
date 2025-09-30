
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { View } from './types';
import './index.css';

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

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(View.TIMELINE);

  const renderActiveView = () => {
    switch (activeView) {
      case View.TIMELINE:
        return <TimelineView />;
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
      default:
        return <TimelineView />;
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Mission Dossier: The Backrooms Campaign
        </h1>
        <p className="text-slate-400 mt-2 text-lg">
          An interactive archive of the events, characters, and lore.
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