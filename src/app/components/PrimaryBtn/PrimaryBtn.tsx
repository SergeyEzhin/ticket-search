import classNames from "classnames";
import { FunctionComponent } from "react";
import styles from './primary-btn.module.css';
import { roboto } from "@/app/fonts";

interface PrimaryBtnProps {
  title: string
}

export const PrimaryBtn: FunctionComponent<PrimaryBtnProps> = ({ title }) => {
  return (
    <button type="button" className={classNames(styles.button, roboto.className)}>{title}</button>
  )
}