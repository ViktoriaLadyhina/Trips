import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./features/languageSlice.js"; 

const store = configureStore({
    reducer: {
         language: languageReducer
    }
})
export default store;