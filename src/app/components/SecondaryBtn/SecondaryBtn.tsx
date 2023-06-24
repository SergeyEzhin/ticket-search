import classNames from "classnames";
import { FunctionComponent } from "react";
import styles from './secondary-btn.module.css';
import { roboto } from "@/app/fonts";

interface SecondaryBtnProps {
  title: string
}

export const SecondaryBtn: FunctionComponent<SecondaryBtnProps> = ({ title }) => {
  return (
    <button type="button" className={classNames(styles.button, roboto.className)}>{title}</button>
  )
}