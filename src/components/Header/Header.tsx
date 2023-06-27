'use client'

import { FunctionComponent } from 'react';
import Image from 'next/image';
import IconBasket from '/public/assets/icons/icon-basket.svg';
import styles from './header.module.css';
import Link from 'next/link';
import classNames from 'classnames';
import { selectTotalAmount } from '@/redux/features/cart/selector';
import { useTypedSelector } from '@/redux/store';

const Basket: FunctionComponent = () => {
  const total = useTypedSelector(state => selectTotalAmount(state));

  return (
    <Link href='/cart' className={classNames(styles.basket)}>
      {total > 0 ? <span className={classNames(styles.amount)}>{total}</span> : null}
      <Image 
        src={IconBasket}
        alt="Basket Icon"
        width={32}
        height={32}
      />
    </Link>
  )
}

export const Header: FunctionComponent = () => {
  return (
    <header className={classNames(styles.header)}>
      <div className={classNames(styles.content)}>
        <Link href='/' className={classNames(styles.logo)}>Билетопоиск</Link>
        <Basket />
      </div>
    </header>  
  );
}