import searchIndex from "../../components/search/index.js";
import { buildSearchIndex } from "../../components/search/searchUtils.js";

// кеш индексов по языку
const cache = new Map();

export async function getSearchIndex(lang) {
  if (cache.has(lang)) {
    return cache.get(lang);
  }

  const index = await buildSearchIndex(searchIndex, lang);

  cache.set(lang, index);

  return index;
}