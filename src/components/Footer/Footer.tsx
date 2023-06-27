'use client'

import { FunctionComponent } from 'react';
import styles from './footer.module.css';
import Link from 'next/link';
import classNames from 'classnames';

export const Footer: FunctionComponent = () => {
  return (
    <footer className={classNames(styles.footer)}>
      <div className={classNames(styles.content)}>
        <Link href='/faq' className={classNames(styles.ref)}>Вопросы-ответы</Link>
        <Link href='/about' className={classNames(styles.ref)}>О нас</Link>
      </div>
    </footer>  
  );
}