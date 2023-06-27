'use client'

import { FunctionComponent, useState } from "react";
import styles from './card.module.css';
import classNames from 'classnames';
import Image from "next/image";
import IconClear from '/public/assets/icons/icon-clear.svg';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ActionsButtons } from "../ActionsButtons/ActionsButtons";
import { useDispatch } from "react-redux";
import { cartActions } from "@/redux/features/cart";
import { Genres } from "../Sidebar/Sidebar";
import { ModalClear } from "../ModalClear/ModalClear";

export interface CardProps {
  id: string,
  title: string,
  genre: string,
  image: string,
}

export const Card: FunctionComponent<CardProps> = ({ id, title, genre, image }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const isBasketPage = pathname === '/cart';

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
      <div className={classNames(styles.card)}>
        <div className={classNames(styles.image)}>
          <Image
            src={image}
            alt='Movie poster'
            width={100}
            height={120}
            priority
          />
        </div>
        <div className={classNames(styles.content)}>
          <div className={classNames(styles.info)}>
            <Link href={`/movie/${id}`} className={classNames(styles.name)}>{title}</Link>
            <p className={classNames(styles.genre)}>{Genres[genre]}</p>
          </div>
          <div className={classNames(styles.buttons)}>
            <ActionsButtons id={id} openModal={handleOpenModal} />
            {isBasketPage &&
              <button type="button" className={classNames(styles.clear)} onClick={() => handleOpenModal()}>
                <Image 
                  src={IconClear}
                  alt='Clear all'
                  width={20}
                  height={20}
                />
              </button>
            }
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
  )
}