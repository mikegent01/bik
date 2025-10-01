
import React from 'react';
import Card from './Card';
import { LORE_VIDEOS_DATA } from './loreVideos';

const BonusLoreView: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Bonus Lore Videos</h2>
      <div className="space-y-8">
        {LORE_VIDEOS_DATA.map((video, index) => (
          <Card key={index}>
            <h3 className="font-bold text-2xl text-white mb-4">{video.title}</h3>
            <div className="prose prose-slate prose-invert max-w-none">{video.content}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BonusLoreView;
