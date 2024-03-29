'use client'

import React from 'react';
import styles from './page.module.css';
import classNames from 'classnames';
import { Accordion } from '../../components/Accordion/Accordion';

const data = [
  {
    title: 'Что такое Билетопоиск?',
    content: 'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'
  },
  {
    title: 'Какой компании принадлежит Билетопоиск?',
    content: 'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'
  },
  {
    title: 'Как купить билет на Билетопоиск?',
    content: 'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'
  },
  {
    title: 'Как оставить отзыв на Билетопоиск?',
    content: 'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'
  },
]

export default function Faq() {
  return (
    <>
      <div className={classNames(styles.title)}>
        <h1>Вопросы и ответы</h1>
      </div>
      {data.map((obj, index) => {
        return (
          <Accordion key={index} title={obj.title} content={obj.content} />
        )
      })}
    </>
  )
}