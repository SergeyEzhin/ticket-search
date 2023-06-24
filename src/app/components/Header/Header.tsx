import { FunctionComponent } from 'react';
import Image from 'next/image';
import IconBasket from '/public/assets/icons/icon-basket.svg';
import styles from './header.module.css';

export const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <a href='/' className={styles.header__logo}>Билетопоиск</a>
        <a href='/basket' className={styles.header__basket}>
          <Image 
            src={IconBasket}
            alt="Basket Icon"
            width={32}
            height={32}
          />
        </a>
      </div>
    </header>  
  );
}