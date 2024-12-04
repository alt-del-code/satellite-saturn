import { getCollection, type ContentEntryMap } from 'astro:content';

export async function safeGetCollection<T extends keyof ContentEntryMap>(collectionName: T) {
  try {
    const collection = await getCollection(collectionName);
    return { data: collection, error: null };
  } catch (error) {
    console.error(`Error fetching collection ${collectionName}:`, error);
    return { data: [], error };
  }
}