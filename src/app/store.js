// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "../features/skills/skillsSlice";

export const store = configureStore({
  reducer: {
    skills: skillsReducer,
  },
});
