'use client'

import React, { FunctionComponent, useState } from 'react';
import styles from './input.module.css';
import { sfProText } from '@/fonts';
import classNames from 'classnames';

interface InputProps {
  title: string,
  placeholder: string
}

export const Input: FunctionComponent<InputProps> = ({ title, placeholder }) => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.wrapper}>
      <p className={classNames(styles.title, sfProText.className)}>{title}</p>
      <input type="text" className={classNames(styles.input)} placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)}/>
    </div>
  )
}

