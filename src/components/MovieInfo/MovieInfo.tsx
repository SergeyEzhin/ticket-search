'use client'

import Image from 'next/image';
import styles from './movie-info.module.css';
import classNames from 'classnames';
import { ActionsButtons } from '../ActionsButtons/ActionsButtons';
import { MovieProps } from '@/app/page';
import { Genres } from '../Sidebar/Sidebar';
import { useState } from 'react';
import { ModalClear } from '../ModalClear/ModalClear';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/redux/features/cart';

export const MovieInfo = ({ id, movie }: { id: string, movie: MovieProps}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const clearTicketsById = (id: string) => {
    dispatch(cartActions.clear(id));
    handleCloseModal();
  }

  return (
    <>
      <div className={classNames(styles.movie)}>
        <div className={classNames(styles.image)}>
          <Image 
            src={movie.posterUrl}
            width={400}
            height={500}
            alt="Movie poster"
            priority
          />
        </div>
        <div className={classNames(styles.content)}>
          <div className={classNames(styles.title)}>
            <h1>{movie.title}</h1>
            <ActionsButtons id={id} openModal={handleOpenModal} />
          </div>
          <div className={classNames(styles.info)}>
            <p className={classNames(styles.name)}>Жанр:</p>
            <p className={classNames(styles.value)}>{Genres[movie.genre]}</p>
          </div>
          <div className={classNames(styles.info)}>
            <p className={classNames(styles.name)}>Год выпуска:</p>
            <p className={classNames(styles.value)}>{movie.releaseYear}</p>
          </div>
          <div className={classNames(styles.info)}>
            <p className={classNames(styles.name)}>Рейтинг:</p>
            <p className={classNames(styles.value)}>{movie.rating}</p>
          </div>
          <div className={classNames(styles.info)}>
            <p className={classNames(styles.name)}>Режиссер:</p>
            <p className={classNames(styles.value)}>{movie.director}</p>
          </div>
          <div className={classNames(styles.description)}>
            <p className={classNames(styles.subtitle)}>Описание</p>
            <p className={classNames(styles.text)}>{movie.description}</p>
          </div>
        </div>
      </div>
      {isOpenModal &&
        <ModalClear 
          id={id} 
          closeModal={handleCloseModal} 
          clearTicketsById={clearTicketsById} 
        />
      }
    </>
  );
}