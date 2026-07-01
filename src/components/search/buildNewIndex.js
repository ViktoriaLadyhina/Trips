import { normalize } from "./normalize";

export function adaptNew(item, lang, type) {
  const t = item.translations?.[lang];

  const name = t?.name || "";
  const description = t?.meta?.description || "";
  const keywords = t?.meta?.keywords || "";

  return {
    id: item.id,
    path: item.path,
    type,
    name,
    description,
    keywords,

    countryPath: item.countryPath,
    regionPath: item.regionPath,
    districtPath: item.districtPath,
    cityPath: item.cityPath,

    searchText: normalize(
      `${name} ${description} ${keywords} ${item.searchText || ""}`
    )
  };
}

export async function buildNewIndex(searchIndexNew, lang) {
  const flat = [];

  async function walk(obj) {
    for (const value of Object.values(obj)) {
      if (value?.loaders) {
        const items = await value.loaders();

        items.forEach(item => {
          flat.push(adaptNew(item, lang, value.type));
        });
      }

      if (value && typeof value === "object") {
        await walk(value);
      }
    }
  }

  await walk(searchIndexNew);

  return flat;
}