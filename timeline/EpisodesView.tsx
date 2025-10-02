import React, { useState, useMemo } from 'react';
import Card from './Card';
import { EPISODES_DATA } from './constants';
import { EpisodeSummary, PlotImpact } from './types';

const EpisodeCard: React.FC<{ episode: EpisodeSummary }> = ({ episode }) => {
    const plotImpactColor: Record<string, string> = {
        [PlotImpact.MAJOR]: 'bg-red-500/30 text-red-300',
        [PlotImpact.MINOR]: 'bg-lime-500/30 text-lime-300',
        [PlotImpact.FILLER]: 'bg-neutral-800/80 text-neutral-400',
    };
    
    return (
        <Card>
            <div className="flex justify-between items-start mb-2 gap-2">
                <h3 className="font-semibold text-lg text-white mr-4">{episode.title}</h3>
                <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${plotImpactColor[episode.plotImpact] || ''}`}>
                        {episode.plotImpact}
                    </span>
                    <span className="bg-zinc-800 text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                        EPISODE {episode.episode}
                    </span>
                </div>
            </div>
            <p className="text-slate-400 mb-4">{episode.summary}</p>
             {episode.tags && episode.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-700">
                    {episode.tags.map(tag => (
                        <span key={tag} className="text-xs bg-zinc-800 text-slate-300 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </Card>
    );
};

const EpisodesView: React.FC = () => {
    const [activeTags, setActiveTags] = useState<string[]>([]);
    const [sort, setSort] = useState<{by: 'episode' | 'title', order: 'asc' | 'desc'}>({ by: 'episode', order: 'asc' });

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        EPISODES_DATA.forEach(ep => ep.tags?.forEach(tag => tags.add(tag)));
        return Array.from(tags).sort();
    }, []);

    const handleToggleTag = (tag: string) => {
        if (tag === '__ALL__') {
            setActiveTags([]);
            return;
        }
        setActiveTags(prev => 
            prev.includes(tag) 
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    const handleSort = (by: 'episode' | 'title') => {
        setSort(prev => ({
            by,
            order: prev.by === by && prev.order === 'asc' ? 'desc' : 'asc'
        }));
    };

    const filteredAndSortedEpisodes = useMemo(() => {
        let episodes = [...EPISODES_DATA];

        if (activeTags.length > 0) {
            episodes = episodes.filter(ep => 
                activeTags.every(tag => ep.tags?.includes(tag))
            );
        }

        episodes.sort((a, b) => {
            if (sort.by === 'episode') {
                return sort.order === 'asc' ? a.episode - b.episode : b.episode - a.episode;
            } else {
                return sort.order === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
            }
        });
        
        return episodes;

    }, [activeTags, sort]);

  return (
    <div>
        <h2 className="text-3xl font-bold text-white mb-8">Episode Summaries</h2>

        <div className="mb-6 p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 space-y-4">
            <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-3">Filter by Tags</h4>
                <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => {
                        const isActive = activeTags.includes(tag);
                        return (
                            <button
                                key={tag}
                                onClick={() => handleToggleTag(tag)}
                                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                                    isActive 
                                    ? 'bg-lime-500 text-black' 
                                    : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
                                }`}
                            >
                                {tag}
                            </button>
                        );
                    })}
                    {activeTags.length > 0 && (
                        <button
                            onClick={() => handleToggleTag('__ALL__')}
                            className="px-3 py-1 text-xs font-medium rounded-full transition-colors bg-red-500/50 text-red-200 hover:bg-red-500/70"
                        >
                            Clear Filters
                        </button>
                    )}
                </div>
            </div>
             <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-3">Sort by</h4>
                <div className="flex flex-wrap gap-2">
                    <button onClick={() => handleSort('episode')} className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${sort.by === 'episode' ? 'bg-lime-500 text-black' : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'}`}>
                        Episode {sort.by === 'episode' && (sort.order === 'asc' ? '▲' : '▼')}
                    </button>
                     <button onClick={() => handleSort('title')} className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${sort.by === 'title' ? 'bg-lime-500 text-black' : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'}`}>
                        Title {sort.by === 'title' && (sort.order === 'asc' ? '▲' : '▼')}
                    </button>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredAndSortedEpisodes.map(ep => <EpisodeCard key={ep.episode} episode={ep} />)}
        </div>
    </div>
  );
};

export default EpisodesView;