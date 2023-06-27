'use client'

import Image from "next/image"
import Modal from "../Modal/Modal"
import styles from './modal-clear.module.css';
import classNames from "classnames";
import IconClear from '/public/assets/icons/icon-clear.svg';

export const ModalClear = ({ id, closeModal, clearTicketsById }: { id: string, closeModal: () => void, clearTicketsById: (id: string) => void }) => {
  return (
    <Modal onClose={closeModal}>
      <div className={classNames(styles.modalTitle)}>
        <p>Удаление билета</p>
        <button type='button' onClick={() => closeModal()}>
          <Image
            src={IconClear}
            alt='Close modal'
            width={20}
            height={20}
          />
        </button>
      </div>
      <div className={classNames(styles.modalText)}>Вы уверены, что хотите удалить билет?</div>
      <div className={classNames(styles.modalButtons)}>
        <button type="button" onClick={() => clearTicketsById(id)} className={classNames(styles.modalButtonSubmit)}>Да</button>
        <button type="button" onClick={closeModal} className={classNames(styles.modalButtonClose)}>Нет</button>
      </div>
    </Modal>
  )
}