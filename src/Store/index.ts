import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { authReducer } from "./authSlice"; // Создайте свой файл authSlice.ts с вашим редюсером

// Комбинируйте ваши редюсеры здесь
const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Создайте store с помощью configureStore
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

// Создайте makeStore функцию
const makeStore = () => store;

// Создайте wrapper
export const wrapper = createWrapper(makeStore);
