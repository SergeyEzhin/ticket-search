import { createSlice } from "@reduxjs/toolkit";
// import { MovieProps } from "@/app/page";
import { MoviesState } from "@/redux/store";

const initialState: MoviesState | [] = [];

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setAllMovies: (state, { payload }) => {
      state = payload || [];
    },
    reset: () => initialState,
  },
});

export const moviesReducer = moviesSlice.reducer;
export const moviesActions = moviesSlice.actions;