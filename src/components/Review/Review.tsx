'use client'

import Image from 'next/image';
import styles from './review.module.css';
import classNames from 'classnames';
import IconPhoto from '/public/assets/icons/icon-photo.svg';
import { ReviewProps } from '@/app/movie/[id]/page';

export const Review = ({ review }: { review: ReviewProps }) => {
  return (
    <div className={classNames(styles.review)}>
      <div className={classNames(styles.image)}>
        <Image 
          width={32}
          height={32}
          alt='Image icon'
          src={IconPhoto}
        />
      </div>
      <div className={classNames(styles.content)}>
        <div className={classNames(styles.info)}>
          <p className={classNames(styles.name)}>{review.name}</p>
          <p className={classNames(styles.rating)}>
            Оценка:
            <span>{review.rating}</span>
          </p>
        </div>
        <p className={classNames(styles.text)}>{review.text}</p>
      </div>
    </div>
  )
}