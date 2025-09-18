import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const modules = import.meta.glob('../../datas/**/*.js');

// Загрузка из localStorage
const loadRegions = (lang) => {
  try {
    const serialized = localStorage.getItem(`regions_${lang}`);
    if (!serialized) return {};
    return JSON.parse(serialized);
  } catch (e) {
    console.error("Ошибка при загрузке регионов:", e);
    return {};
  }
};

// Сохранение в localStorage
const saveRegions = (lang, regions) => {
  try {
    localStorage.setItem(`regions_${lang}`, JSON.stringify(regions));
  } catch (e) {
    console.error("Ошибка при сохранении регионов:", e);
  }
};

// Асинхронная загрузка конкретного региона
export const fetchRegionData = createAsyncThunk(
  "regions/fetchRegionData",
  async ({ lang, country, region }) => {
    const path = Object.keys(modules).find(k =>
      k.endsWith(`/${lang}/${country}/${region}.js`)
    );
    if (!path) throw new Error(`Файл не найден: ${lang}/${country}/${region}.js`);

    const module = await modules[path]();
    return { lang, country, region, data: module.datas };
  }
);

const savedLang = localStorage.getItem("lang") || "ru";

const initialState = {
  regions: loadRegions(savedLang), // { germany: { nrw: {...}, bayern: {...} } }
  status: "idle",
  error: null,
};

const regionsSlice = createSlice({
  name: "regions",
  initialState,
  reducers: {
    clearRegions(state, action) {
      const lang = action.payload;
      state.regions = {};
      localStorage.removeItem(`regions_${lang}`);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegionData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRegionData.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { lang, country, region, data } = action.payload;

        if (!state.regions[country]) {
          state.regions[country] = {};
        }
        state.regions[country][region] = data;

        saveRegions(lang, state.regions);
      })
      .addCase(fetchRegionData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.error("Ошибка загрузки региона:", action.error.message);
      });
  },
});

export const { clearRegions } = regionsSlice.actions;
export default regionsSlice.reducer;