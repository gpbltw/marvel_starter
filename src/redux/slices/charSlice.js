import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedChar: null,
  characters: [],
};

export const charSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    selectChar: (state, action) => {
      state.selectedChar = action.payload;
    },
    charList: (state, action) => {
      state.characters = [...state.characters, ...action.payload];
    },
  },
});

export const { selectChar, charList } = charSlice.actions;

export default charSlice.reducer;
