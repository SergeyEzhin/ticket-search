import { RootState } from "@/redux/store";

export const selectMovieModule = (state: RootState) => state.movies;

export const selectMovieById = (state: RootState, id: string) => {
  const movies = selectMovieModule(state);
  const movie = movies.find(movie => movie.id === id);

  return movie;
}
