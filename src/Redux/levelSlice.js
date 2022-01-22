import { createSlice } from "@reduxjs/toolkit";

export const levelSlice = createSlice({
  name: "levels",
  initialState: [
    "Intro",
    "Food and Drink",
    "Phrases",
    "Feelings",
    "About Me",
    "Clothing",
    "Pets",
    "Weather",
    "Phrases 2",
    "Rain etc.",
    "Numbers",
    "Family",
    "Numbers 2",
    "Food 2",
    "Colors",
    "Home",
  ],

  reducers: {
    addLevel: (state, action) => {
      const level = action.payload;
      !state.includes(level) && state.push(level);
    },

    removeLevel: (state, action) => {
      if (state.length > 1) {
        return state.filter((level) => level !== action.payload);
      } else {
        console.log ("You cannot remove every level")
        return state
      }
    },

    replaceLevels: (state, action) => {
      state = action.payload;
      return state
    }
  },
});

export const { addLevel, removeLevel, replaceLevels } = levelSlice.actions;

export default levelSlice.reducer;
