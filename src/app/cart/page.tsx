'use client'

import { useGetMoviesQuery } from '@/redux/services/movieApi';
import styles from './page.module.css';
import classNames from "classnames";
import { MovieProps } from '../page';
import { Card } from '@/components/Card/Card';
import { useTypedSelector } from '@/redux/store';
import { selectCartModule, selectTotalAmount } from '@/redux/features/cart/selector';

export default function Cart() {
  const { data: movies, isLoading, error } = useGetMoviesQuery({});
  const cart = useTypedSelector(state => selectCartModule(state));
  const movieTickets = movies ? movies.filter((movie: MovieProps) => cart.hasOwnProperty(movie.id)) : [];
  const totalTickets = useTypedSelector(state => selectTotalAmount(state));

  if(isLoading) {
    return <p>Загрузка...</p>
  }

  if (error) {
    return <p>Ошибка при загрузке корзины</p>
  }

  return (
    <>
      {movieTickets.length > 0 ? (
        <div className={classNames(styles.cart)}>
          {movieTickets.map((movie: MovieProps) => (
            <Card key={movie.id} id={movie.id} title={movie.title} genre={movie.genre} image={movie.posterUrl} />
          ))}
          <div className={classNames(styles.total)}>
            <span>Итого билетов:</span>
            <span>{totalTickets}</span>
          </div>
        </div>
      )
      : (
        <h1>Корзина пуста</h1>
      )}
    </>
  )
}
  