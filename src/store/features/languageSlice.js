import { createSlice } from "@reduxjs/toolkit";

const savedLang = localStorage.getItem('lang') || 'ru';

const initialState = {
  lang: savedLang,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action) {
      const lang = action.payload;
      state.lang = lang;
      localStorage.setItem('lang', lang);
    }
  }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;