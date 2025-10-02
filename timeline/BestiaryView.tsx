import React, { useState, useMemo } from 'react';
import Card from './Card';
import { BESTIARY_DATA } from './constants';
import { BestiaryEntry } from './types';

const BestiaryCard: React.FC<{ entry: BestiaryEntry }> = ({ entry }) => {
    const typeColor = {
        'Monster': 'bg-red-500/20 text-red-300',
        'Humanoid': 'bg-yellow-500/20 text-yellow-300',
        'Anomaly': 'bg-purple-500/20 text-purple-300',
    };

    return (
        <Card>
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-white mr-4">{entry.name}</h3>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${typeColor[entry.type]}`}>
                    {entry.type}
                </span>
            </div>
            <p className="text-slate-400 mb-4">{entry.description}</p>
            <div className="text-xs text-slate-400 border-t border-zinc-700 pt-3 mt-auto text-right">
                 <span className="bg-zinc-800 text-slate-300 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                    First Seen: Ep. {entry.firstAppearanceEpisode}
                 </span>
            </div>
        </Card>
    );
};

const FilterControls: React.FC<{
    activeFilters: string[];
    onToggle: (type: string) => void;
}> = ({ activeFilters, onToggle }) => {
    const types: BestiaryEntry['type'][] = ['Monster', 'Humanoid', 'Anomaly'];
    return (
        <div className="mb-6 p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-zinc-800">
            <h4 className="text-sm font-semibold text-slate-300 mb-3">Filter by Type</h4>
            <div className="flex flex-wrap gap-2">
                {types.map(type => {
                    const isActive = activeFilters.includes(type);
                    return (
                        <button
                            key={type}
                            onClick={() => onToggle(type)}
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                                isActive 
                                ? 'bg-lime-500 text-black' 
                                : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
                            }`}
                        >
                            {type}
                        </button>
                    );
                })}
                {activeFilters.length > 0 && (
                     <button
                        onClick={() => onToggle('__ALL__')}
                        className="px-3 py-1 text-xs font-medium rounded-full transition-colors bg-red-500/50 text-red-200 hover:bg-red-500/70"
                    >
                        Clear
                    </button>
                )}
            </div>
        </div>
    );
};

const BestiaryView: React.FC = () => {
  const [activeTypes, setActiveTypes] = useState<string[]>([]);

  const handleToggleType = (type: string) => {
    if (type === '__ALL__') {
        setActiveTypes([]);
        return;
    }
    setActiveTypes(prev => 
        prev.includes(type) 
            ? prev.filter(t => t !== type)
            : [...prev, type]
    );
  };

  const filteredEntries = useMemo(() => {
    const sorted = BESTIARY_DATA.sort((a,b) => a.firstAppearanceEpisode - b.firstAppearanceEpisode);
    if (activeTypes.length === 0) {
        return sorted;
    }
    return sorted.filter(entry => activeTypes.includes(entry.type));
  }, [activeTypes]);

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Bestiary & Enemies</h2>
      <FilterControls activeFilters={activeTypes} onToggle={handleToggleType} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredEntries.map(entry => <BestiaryCard key={entry.name} entry={entry} />)}
      </div>
    </div>
  );
};

export default BestiaryView;