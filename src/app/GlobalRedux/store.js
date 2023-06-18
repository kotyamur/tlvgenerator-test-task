"use client";

import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./questionsSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    user: userSlice,
  },
});