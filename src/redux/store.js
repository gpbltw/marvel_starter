import { configureStore } from "@reduxjs/toolkit";
import charReducer from "./slices/charSlice";
import comicsReducer from "./slices/comicsSlice";

const store = configureStore({
  reducer: {
    characters: charReducer,
    comics: comicsReducer,
  },
});

export default store;
