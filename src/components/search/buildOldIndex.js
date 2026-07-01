import { normalize } from "./normalize";

export function adaptOld(item, type) {
  const name = item.meta?.title || item.name || "";
  const description = item.meta?.description || "";
  const keywords = item.meta?.keywords || "";

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

export async function buildOldIndex(searchIndexOld) {
  const flat = [];

  async function walk(obj) {
    for (const value of Object.values(obj)) {
      if (value?.loaders) {
        const items = await value.loaders();

        items.forEach(item => {
          flat.push(adaptOld(item, value.type));
        });
      }

      if (value && typeof value === "object") {
        await walk(value);
      }
    }
  }

  await walk(searchIndexOld);

  return flat;
}