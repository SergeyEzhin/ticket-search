'use client'

import React, { FunctionComponent, useRef, useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import styles from './select.module.css';
import { sfProText } from '@/app/fonts';
import classNames from 'classnames';
import IconArrow from '/public/assets/icons/icon-arrow-select.svg';

interface SelectProps {
  title: string;
  placeholder: string;
  data: string[];
}

export const Select: FunctionComponent<SelectProps> = ({ title, placeholder, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Element;

      if (!selectRef.current?.contains(target) && !target.classList.contains(styles.dropdown)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
      <p className={classNames(styles.title, sfProText.className)}>{title}</p>
      <div onClick={toggleDropdown} className={classNames(styles.select, {[styles.active]: isOpen }, sfProText.className)}>
        {selectedValue || `${placeholder}`}
        <Image
          src={IconArrow}
          alt="Arrow Icon"
          width={20}
          height={20}
        />
      </div>
      {isOpen && createPortal(
        <div className={classNames(styles.dropdown, sfProText.className)} style={{
          top: dropdownPosition.top,
          left: dropdownPosition.left,
          width: dropdownPosition.width,
        }}>
          <ul>
            {data.map((el, index) => (
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