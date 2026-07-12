import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./features/languageSlice.js"; 
import themeReducer from "./features/theme.js"; 

const store = configureStore({
    reducer: {
         language: languageReducer,
         theme: themeReducer,
    }
})
export default store;