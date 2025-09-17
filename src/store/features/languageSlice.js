import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const modules = import.meta.glob('../../datas/**/*.js');

// Асинхронная функция для подгрузки данных
export const fetchPageData = createAsyncThunk(
  'language/fetchPageData',
  async ({ lang, page }) => {
    // ищем файл по языку и имени страницы
    const path = Object.keys(modules).find(k => k.endsWith(`/${lang}/${page}.js`));
    if (!path) throw new Error(`Модуль для ${lang}/${page} не найден`);

    const module = await modules[path]();
    return { page, data: module.datas, lang }; // возвращаем lang для использования в fulfilled
  }
);

// Загрузка стран из localStorage для конкретного языка
const loadCountries = (lang) => {
  try {
    const serialized = localStorage.getItem(`countries_${lang}`);
    if (!serialized) return [];
    return JSON.parse(serialized);
  } catch (e) {
    console.error("Ошибка при загрузке стран из localStorage:", e);
    return [];
  }
};

// Сохранение стран в localStorage для конкретного языка
const saveCountries = (lang, countries) => {
  try {
    localStorage.setItem(`countries_${lang}`, JSON.stringify(countries));
  } catch (e) {
    console.error("Ошибка при сохранении стран в localStorage:", e);
  }
};

// Загружаем сохранённый язык или ставим по умолчанию
const savedLang = localStorage.getItem('lang') || 'ru';

const initialState = {
  lang: savedLang,
  homeData: {},
  countries: loadCountries(savedLang),
  status: "idle", // idle | loading | succeeded | failed
  error: null,
  initialized: false,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.lang = action.payload;
      localStorage.setItem('lang', action.payload);
      // Загружаем страны для нового языка из localStorage
      state.countries = loadCountries(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPageData.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { page, data, lang } = action.payload;

        if (page === "Home") {
          state.homeData = data;
        } else if (page === "Country") {
          state.countries = data;
          saveCountries(lang, data); // сохраняем для того языка, который был загружен
        }
        state.initialized = true;
      })
      .addCase(fetchPageData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.error("Ошибка загрузки страницы:", action.error.message);
      });
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
