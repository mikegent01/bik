export enum View {
  TIMELINE = 'TIMELINE',
  STORY_ARCS = 'STORY_ARCS',
  EPISODES = 'EPISODES',
  CHARACTERS = 'CHARACTERS',
  FACTIONS = 'FACTIONS',
  LOCATIONS = 'LOCATIONS',
  WORLD_MAP = 'WORLD_MAP',
  BESTIARY = 'BESTIARY',
  ITEMS = 'ITEMS',
  GLOSSARY = 'GLOSSARY',
  SEASONS = 'SEASONS',
}

export enum CharacterFaction {
  PROTAGONISTS = 'Protagonists',
  ALLIES = 'Allies',
  ANTAGONISTS = 'Antagonists',
}

export interface Character {
  name: string;
  description: string;
  faction: CharacterFaction;
  importance: number;
  firstAppearanceEpisode: number;
  lastAppearanceEpisode: number;
}

export interface EpisodeSummary {
  episode: number;
  title: string;
  summary: string;
}

export interface TimelineEvent {
  title: string;
  description: string;
  icon: React.ReactNode;
  episode: number;
}

export interface BestiaryEntry {
  name: string;
  description: string;
  firstAppearanceEpisode: number;
  lastAppearanceEpisode: number;
  type: 'Monster' | 'Humanoid' | 'Anomaly';
}

export interface KeyItem {
  name: string;
  description: string;
  firstAppearanceEpisode: number;
  lastAppearanceEpisode: number;
}

export interface Location {
  id: string;
  name: string;
  description: string;
  firstAppearanceEpisode: number;
  lastAppearanceEpisode: number;
}

export interface GlossaryTerm {
    term: string;
    definition: string;
    category: 'Concept' | 'Faction' | 'Location Type' | 'Item';
}

export interface FactionDetail {
    name: CharacterFaction;
    description: string;
    members: string[];
}

export interface Season {
    seasonNumber: number;
    title: string;
    episodeCount: number;
    summary: string;
    status: 'Concluded' | 'Ongoing';
}

export interface CharacterDevelopment {
    characterName: string;
    development: string;
}

export interface StoryArc {
    title: string;
    episodeRange: string;
    summary: string;
    keyEvents?: string[];
    characterDevelopments?: CharacterDevelopment[];
}

export interface BackroomsLocationNode {
    id: string;
    label: string;
    x: number;
    y: number;
    episode: number;
}

export interface BackroomsConnection {
    from: string;
    to: string;
}
