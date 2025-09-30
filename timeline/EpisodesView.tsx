import React from 'react';
import Card from './Card';
import { EPISODES_DATA } from './constants';
import { EpisodeSummary } from './types';

const EpisodeCard: React.FC<{ episode: EpisodeSummary }> = ({ episode }) => {
    return (
        <Card>
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-white mr-4">{episode.title}</h3>
                <span className="bg-slate-700 text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                    EPISODE {episode.episode}
                </span>
            </div>
            <p className="text-slate-400">{episode.summary}</p>
        </Card>
    );
};

const EpisodesView: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Episode Summaries</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {EPISODES_DATA.map(ep => <EpisodeCard key={ep.episode} episode={ep} />)}
      </div>
    </div>
  );
};

export default EpisodesView;
