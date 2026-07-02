import { buildFlatIndex } from "./buildFlatIndex,js";


// кеш индексов по языку
const cache = new Map();

export async function getSearchIndex(lang) {
  if (cache.has(lang)) return cache.get(lang);

  const index = await buildFlatIndex(lang);

  cache.set(lang, index);

  return index;
}