'use client'

import Image from "next/image"
import styles from './actions-buttons.module.css';
import IconPlus from '/public/assets/icons/icon-plus.svg';
import IconMinus from '/public/assets/icons/icon-minus.svg';
import { useTypedSelector } from "@/redux/store";
import { selectProductAmount } from "@/redux/features/cart/selector";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { cartActions } from "@/redux/features/cart";

const MAX_COUNT = 30;

export const ActionsButtons = ({ id, openModal }: { id: string, openModal: () => void}) => {
  const dispatch = useDispatch();
  const amount = useTypedSelector(state => selectProductAmount(state, id));

  const handleIncrement = useCallback((id: string) => {
    dispatch(cartActions.increment(id));
  }, [dispatch]);

  const handleDecrement = useCallback((id: string) => {
    if(amount === 1) {
      openModal();
    } else {
      dispatch(cartActions.decrement(id));
    }
  }, [dispatch, amount, openModal]);

  return (
    <div className={classNames(styles.actions)}>
      <button type="button" className={classNames(styles.btn, {[styles.disabled]: amount < 1})} onClick={() => handleDecrement(id)}>
        <Image
          src={IconMinus}
          alt='Decrement count'
          width={12}
          height={12}
        />
      </button>
      <div className={classNames(styles.amount)}>{amount}</div>
      <button type="button" className={classNames(styles.btn, {[styles.disabled]: amount === MAX_COUNT})} onClick={() => handleIncrement(id)}>
        <Image
          src={IconPlus}
          alt='Increment count'
          width={12}
          height={12}
        />
      </button>
    </div>
  )
}