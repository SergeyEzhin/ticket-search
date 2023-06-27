'use client'

import React, { FunctionComponent, useState, useEffect, useCallback, useRef, CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import styles from './select.module.css';
import classNames from 'classnames';
import IconArrow from '/public/assets/icons/icon-arrow-select.svg';
import { arr } from '../Sidebar/Sidebar';

interface SelectProps {
  title: string;
  placeholder: string;
  data: typeof arr
}

export const Select: FunctionComponent<SelectProps> = ({ title, placeholder, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectedValue, setSelectedValue] = useState('');
  // const isScrolling = useRef(false);
  // const timeoutId = useRef<NodeJS.Timeout | null>(null);
  // const dropdownPositionRef = useRef({ top: 0, left: 0, width: 0 });
  // const dropdownPositionRef = useRef<Partial<CSSProperties>>({});

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Element;

      if (!selectRef.current?.contains(target) && !target.classList.contains(styles.dropdown)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handleOutsideClick);
    // window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      // window.removeEventListener('scroll', handleScroll);
      // clearTimeout(timeoutId.current!);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);

    // if (!isOpen && selectRef.current) {
    //   const selectRect = selectRef.current.getBoundingClientRect();

    //   dropdownPositionRef.current = {
    //     top: selectRect.bottom + 4,
    //     left: selectRect.left,
    //     width: selectRect.width,
    //   };
    // }
  };

  // const handleScroll = () => {
  //   setIsOpen(false);
  // }

  // const handleScroll = () => {
  //   isScrolling.current = true;
  //   setIsOpen(false);
  //   clearTimeout(timeoutId.current!);
  //   timeoutId.current = setTimeout(() => {
  //     isScrolling.current = false;
  //   }, 300);
  // };

  const handleOptionSelect = useCallback((value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  }, []);

  const calculateDropdownPosition = () => {
    if (selectRef.current) {
      const selectRect = selectRef.current.getBoundingClientRect();

      return {
        top: selectRect.bottom + 4,
        left: selectRect.left,
        width: selectRect.width,
      };
    }
    return {};
  };

  const dropdownPosition = calculateDropdownPosition();

  return (
    <div ref={selectRef} className={classNames(styles.wrapper)}>
      <p className={classNames(styles.title)}>{title}</p>
      <div onClick={toggleDropdown} className={classNames(styles.select, {[styles.active]: isOpen })}>
        {selectedValue || `${placeholder}`}
        <Image
          src={IconArrow}
          alt="Arrow Icon"
          width={20}
          height={20}
        />
      </div>
      {isOpen && createPortal(
        <div className={classNames(styles.dropdown)} style={{
          top: dropdownPosition.top,
          left: dropdownPosition.left,
          width: dropdownPosition.width,
        }}>
          <ul>
            {data.map((el: any, index: number) => (
              <li key={index} onClick={(e) => {
                e.stopPropagation();
                handleOptionSelect(el);
              }}>{el}</li>
            ))}
          </ul>
        </div>,
        document.body
      )}
    </div>
  );
}