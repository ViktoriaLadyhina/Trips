import { normalize } from "./normalize";

export function searchStatic(query, flatIndex) {
  if (!query || !flatIndex?.length) return [];

  const queryWords = normalize(query)
    .split(" ")
    .filter(Boolean);

  const results = [];

  for (const item of flatIndex) {
    if (!item) continue;

    const text = item.searchText || "";
    const itemWords = text.split(" ");

    const matches = queryWords.every(qw => {
      if (!qw) return false;
      return itemWords.some(w => w.startsWith(qw));
    });

    if (!matches) continue;

    let score = 0;

    const TYPE_SCORE = {
      country: 100,
      region: 90,
      city: 80,
      district: 70,
      attraction: 50,
      event: 40,
      routes: 30
    };

    score += TYPE_SCORE[item.type] || 0;

    const name = (item.name || "").toLowerCase();
    const normalizedQuery = normalize(query);

    if (name.includes(normalizedQuery)) {
      score += 20;
    }

    for (const qw of queryWords) {
      if (itemWords.includes(qw)) {
        score += 5;
      }
    }

    results.push({
      ...item,
      score
    });
  }

  return results.sort((a, b) => b.score - a.score);
}