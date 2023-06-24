'use client'

import React, { FunctionComponent, useRef, useState, useEffect, useCallback, ChangeEvent } from 'react';
import styles from './input.module.css';
import { sfProText } from '@/app/fonts';
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
      <input type="text" className={classNames(styles.input, sfProText.className)} placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)}/>
    </div>
  )
}

