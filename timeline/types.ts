// FIX: Import ReactNode to resolve React namespace error.
import type { ReactNode } from 'react';

export enum View {
  TIMELINE = 'TIMELINE',
  STORY_ARCS = 'STORY_ARCS',
  EPISODES = 'EPISODES',
  CHARACTERS = 'CHARACTERS',
  FACTIONS = 'FACTIONS',
  LOCATIONS = 'LOCATIONS',
  WORLD_MAP = 'WORLD_MAP',
  // FIX: Corrected typo in enum value from 'BESTIERY' to 'BESTIARY'.
  BESTIARY = 'BESTIARY',
  ITEMS = 'ITEMS',
  GLOSSARY = 'GLOSSARY',
  SEASONS = 'SEASONS',
  BONUS_LORE = 'BONUS_LORE',
  CALENDAR = 'CALENDAR',
}

export enum CharacterFaction {
  PROTAGONISTS = 'Mega X Fishing Team',
  ALLIES = 'Allies',
  ANTAGONISTS = 'Antagonists',
  THE_AUTHORITY = 'The Authority',
  MEGA_X_ARMY = 'Mega X Army',
  THE_ALPONES = 'The Alpones',
  POPES_NAVY = "The Pope's Navy",
}

// ADD: Enum for plot impact classification
export enum PlotImpact {
  MAJOR = 'Major Plot',
  MINOR = 'Minor Plot',
  FILLER = 'Filler',
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
  plotImpact: PlotImpact; // ADD: Plot impact tag
  tags: string[];
}

export interface TimelineEvent {
  title: string;
  description: string;
  // FIX: Use ReactNode type directly instead of React.ReactNode.
  icon: ReactNode;
  episode: number;
  date: string;
  category: string;
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
    summary: ReactNode;
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

// FIX: Add and export the missing LoreVideo interface, which is used in loreVideos.tsx.
export interface LoreVideo {
  title: string;
  content: ReactNode;
}