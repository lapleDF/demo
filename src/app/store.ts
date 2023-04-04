import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { courseSlice } from "../features/courses/courseSlice";
export const store = configureStore({
  reducer: courseSlice.reducer,
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
