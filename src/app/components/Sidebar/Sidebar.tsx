import React, { FunctionComponent, useState } from 'react';
import styles from './sidebar.module.css';
import { sfProText } from '@/app/fonts';
import classNames from 'classnames';
import { Select } from '../Select/Select';
import { Input } from '../Input/Input';

const arr = [
  'Option1',
  'Option2',
  'Option3'
]

export const Sidebar = () => {
  return (
    <div className={classNames(styles.sidebar)}>
      <p className={classNames(styles.title, sfProText.className)}>Фильтр поиска</p>
      <Input title='Название' placeholder='Введите название' />
      <Select title='Жанр' placeholder='Выберите жанр' data={arr} />
      <Select title='Кинотеатр' placeholder='Выберите кинотеатр' data={arr} />
    </div>
  )
}