import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@/redux/features/cart";
import { logger } from "@/redux/middleware/logger";
import { movieApi } from "@/redux/services/movieApi";
import { moviesReducer } from "./features/movies";
import { MovieProps } from "@/app/page";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export interface CartState {
  [id: string]: number;
}

export type MoviesState = MovieProps[];
 
export interface RootState {
  [movieApi.reducerPath]: typeof movieApi.reducer;
  cart: CartState;
  movies: MoviesState;
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    cart: cartReducer,
    movies: moviesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware, logger]),
  devTools: process.env.NODE_ENV !== "production",
});