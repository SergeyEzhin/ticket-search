import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMovies: builder.query({ query: () => "movies" }),
    getMovie: builder.query({ query: (movieId) => `movie?movieId=${movieId}` }),
    getMovieReviews: builder.query({ query: (movieId) => `reviews?movieId=${movieId}` })
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery, useGetMovieReviewsQuery } = movieApi;