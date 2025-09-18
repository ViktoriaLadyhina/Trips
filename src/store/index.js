import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./features/languageSlice"; 
import regionsReducer from './features/regionsSlice'; 

const store = configureStore({
    reducer: {
         language: languageReducer,
         regions: regionsReducer,
    }
})
export default store;