'use client'

import React from 'react';
import styles from './container.module.css';

export const Container = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className={styles.container}>{children}</div>
  );
}