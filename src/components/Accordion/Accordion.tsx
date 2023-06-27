'use client'

import { FunctionComponent, useState } from "react";
import styles from './accordion.module.css';
import classNames from 'classnames';

interface AccordionProps {
  title: string,
  content: string
}

export const Accordion: FunctionComponent<AccordionProps> = ({ title, content }) => {
  const [isActive, setActive] = useState(false);

  const onItemClick = () => {
    setActive(!isActive);
  };

  return (
    <div className={classNames(styles.wrapper)}>
      <div
        className={classNames(styles.title)}
        onClick={onItemClick}
      >
        {title}
      </div>
      {isActive && 
        <div className={classNames(styles.content)}>
          {content}
        </div>
      }
    </div>
  )
}