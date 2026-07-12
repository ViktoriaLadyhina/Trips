import { createSlice } from "@reduxjs/toolkit";

const savedTheme = localStorage.getItem("theme") || "light";

const initialState = {
  theme: savedTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;