import React from 'react';
import Card from './Card';
import { STORY_ARCS_DATA } from './constants';
import { StoryArc, CharacterDevelopment } from './types';

const CharacterDevelopmentItem: React.FC<{ item: CharacterDevelopment }> = ({ item }) => (
    <div className="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        <div>
            <span className="font-semibold text-slate-300">{item.characterName}:</span>
            <span className="text-slate-400 ml-2">{item.development}</span>
        </div>
    </div>
);

const StoryArcCard: React.FC<{ arc: StoryArc }> = ({ arc }) => {
    return (
        <Card>
            <div className="flex justify-between items-start mb-4 gap-4">
                <h3 className="font-bold text-2xl text-white mr-4">{arc.title}</h3>
                <span className="bg-slate-700 text-slate-300 text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    {arc.episodeRange}
                </span>
            </div>

            <p className="text-slate-400 mb-4">{arc.summary}</p>

            {arc.keyEvents?.length ? (
                <div className="mb-4">
                    <h4 className="text-slate-300 font-semibold mb-2">Key Events</h4>
                    <ul className="list-disc list-inside text-slate-400 space-y-1">
                        {arc.keyEvents.map((evt, idx) => <li key={idx}>{evt}</li>)}
                    </ul>
                </div>
            ) : null}

            {arc.characterDevelopments?.length ? (
                <div className="space-y-2">
                    <h4 className="text-slate-300 font-semibold">Character Development</h4>
                    <div className="space-y-2">
                        {arc.characterDevelopments.map((item, idx) => (
                            <CharacterDevelopmentItem key={idx} item={item} />
                        ))}
                    </div>
                </div>
            ) : null}
        </Card>
    );
};

const StoryArcsView: React.FC = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-8">Story Arcs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {STORY_ARCS_DATA.map(arc => <StoryArcCard key={arc.title} arc={arc} />)}
            </div>
        </div>
    );
};

export default StoryArcsView;
