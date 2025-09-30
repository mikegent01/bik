import React from 'react';
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
            <div className="text-xs text-slate-400 border-t border-slate-700 pt-3 mt-auto text-right">
                 <span className="bg-slate-700 text-slate-300 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                    First Seen: Ep. {entry.firstAppearanceEpisode}
                 </span>
            </div>
        </Card>
    );
};

const BestiaryView: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Bestiary & Enemies</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {BESTIARY_DATA.sort((a,b) => a.firstAppearanceEpisode - b.firstAppearanceEpisode).map(entry => <BestiaryCard key={entry.name} entry={entry} />)}
      </div>
    </div>
  );
};

export default BestiaryView;
