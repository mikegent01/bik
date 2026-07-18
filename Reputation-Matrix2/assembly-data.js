// WAHbook Posts Data - Canonicalized, Cleaned, Chunked
import { CURRENT_GAME_DATE } from './calendar-data.js';

export const WAHBOOK_POSTS = [
  {
    id: 'article-protocol-six-retreat',
    characterKey: 'waluigi',
    content: `PROTOCOL SIX: RETREAT IF YOU MUST. YOUR LIFE IS IMPORTANT TOO.

The recovered Iron Legion article is now indexed as a field manual, not a rumor. Protocol One: be courteous and allow your opponent the first attack. Protocol Two: attack back! It is time to show you the true strength of an Iron Legion. The sequence is deliberate: observe, answer, survive.

The old transcription had broken punctuation and the phrase “a iron legion,” which made the search index split the article into useless fragments. Waluigi has restored the text, preserved the meaning, and filed the complete version in the Scriptorium. A retreat is not a defeat when it keeps the reader alive. WAH.`,
    date: { ...CURRENT_GAME_DATE },
    timestamp: 'Filed today',
    likes: 0,
    comments: [],
    tags: ['iron-legion', 'protocol-six', 'field-manual', 'retreat']
  }
];

export const WAHBOOK_POST_CHUNKS = [

];

export function loadEventPosts() {
  return Promise.resolve([]);
}
