'use client'

import { MovieInfo } from '@/components/MovieInfo/MovieInfo';
import { Review } from '@/components/Review/Review';
import { useGetMovieQuery, useGetMovieReviewsQuery } from '@/redux/services/movieApi';
import React from 'react';
import styles from './page.module.css';
import classNames from 'classnames';

export interface ReviewProps {
  id: string,
  name: string,
  text: string,
  rating: number
}

const Reviews = ({ id }: { id: string }) => {
  const { data: reviews, isLoading: isReviewsLoading, error: errorGetReviews } = useGetMovieReviewsQuery(id);

  if (isReviewsLoading) {
    return <p>Загрузка...</p>
  }

  if (errorGetReviews) {
    return <p>Ошибка при получении отзывов о фильме</p>
  }

  return (
    reviews.map((review: ReviewProps)  => (
      <Review key={review.id} review={review} />
    ))
  )
}

export default function Movie({ params }: { params: {id: string}}) {
  const id = params.id;
  const { data: movie, isLoading: isMovieLoading, error: errorGetMovie } = useGetMovieQuery(id);

  if (isMovieLoading) {
    return <p>Загрузка...</p>
  }

  if (errorGetMovie) {
    return <p>Ошибка при получении данных о фильме</p>
  }

  return (
    <>
      <MovieInfo movie={movie} id={id} />
      <div className={classNames(styles.reviews)}>
        <Reviews id={id} />
      </div>
    </>
  )
}