import { FunctionComponent } from 'react';
import styles from './footer.module.css';

export const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <a href='/faq' className={styles.footer__ref}>Вопросы-ответы</a>
        <a href='/about' className={styles.footer__ref}>О нас</a>
      </div>
    </footer>  
  );
}