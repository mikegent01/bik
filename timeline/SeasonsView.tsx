import React from 'react';
import Card from './Card';
import { SEASONS_DATA } from './constants';
import { Season } from './types';

const SeasonCard: React.FC<{ season: Season }> = ({ season }) => {
    const statusColor = season.status === 'Concluded' ? 'bg-red-500/30 text-red-300' : 'bg-green-500/30 text-green-300';
    return (
        <Card>
            <div className="flex justify-between items-start mb-4 gap-4">
                <h3 className="font-bold text-2xl text-white mr-4">
                    Season {season.seasonNumber}: <span className="text-slate-300">{season.title}</span>
                </h3>
                <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${statusColor}`}>
                        {season.status.toUpperCase()}
                    </span>
                    <span className="bg-slate-700 text-slate-300 text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                        {season.episodeCount} EPISODES
                    </span>
                </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed">{season.summary}</p>
        </Card>
    );
};

const SeasonsView: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Seasons</h2>
       <div className="space-y-8">
        {SEASONS_DATA.map(season => <SeasonCard key={season.seasonNumber} season={season} />)}
      </div>
    </div>
  );
};

export default SeasonsView;
