// src/features/skills/skillsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSkill: null, // null means no popup is open
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    openSkill: (state, action) => {
      state.selectedSkill = action.payload; // skill object
    },
    closeSkill: (state) => {
      state.selectedSkill = null;
    },
  },
});

export const { openSkill, closeSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
