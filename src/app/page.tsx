'use client'

import { useGetMoviesQuery } from "@/redux/services/movieApi";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Card } from "@/components/Card/Card";
import styles from './page.module.css';
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { moviesActions } from "@/redux/features/movies";

export interface MovieProps {
  title: string,
  posterUrl: string,
  releaseYear: number,
  description: string,
  genre: string,
  id: string,
  rating: number,
  director: string,
  reviewIds: string[]
}

const Films = () => {
  const { data: movies, isLoading, error } = useGetMoviesQuery({});
  const dispatch = useDispatch();

  useEffect(() => { 
    if(movies) {
      dispatch(moviesActions.setAllMovies(movies));
    }
  }, [movies, dispatch]);

  return (
    <div className={classNames(styles.content)}>
      {isLoading ? 
        <p>Загрузка...</p>
      : (!movies || error) ?
        <p>Фильмы не найдены</p>
      : 
        movies.map((movie: MovieProps) => {
          return (
            <Card key={movie.id} id={movie.id} title={movie.title} genre={movie.genre} image={movie.posterUrl} />
          )
        })
      }
    </div>
  )
}

export default function Home() {
  return (
    <div className={classNames(styles.main)}>
      <Sidebar />
      <Films />
    </div>
  )
}
