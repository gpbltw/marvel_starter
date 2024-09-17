import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comics: [],
};

export const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {
    comicsList: (state, action) => {
      state.comics = [...state.comics, ...action.payload];
    },
  },
});

export const { selectChar, comicsList } = comicsSlice.actions;

export default comicsSlice.reducer;
