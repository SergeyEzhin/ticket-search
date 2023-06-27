'use client'

import React from 'react';
import styles from './sidebar.module.css';
import classNames from 'classnames';
import { Select } from '../Select/Select';
import { Input } from '../Input/Input';

export const Genres: Record<string, string> = {
  fantasy: 'Фэнтези',
  horror: 'Ужасы',
  action: 'Боевик',
  comedy: 'Комедия'
}

export const arr = [
  'Option1',
  'Option2',
  'Option3'
]

export const Sidebar = () => {
  return (
    <div className={classNames(styles.sidebar)}>
      <p className={classNames(styles.title)}>Фильтр поиска</p>
      <Input title='Название' placeholder='Введите название' />
      <Select title='Жанр' placeholder='Выберите жанр' data={arr} />
      <Select title='Кинотеатр' placeholder='Выберите кинотеатр' data={arr} />
    </div>
  )
}