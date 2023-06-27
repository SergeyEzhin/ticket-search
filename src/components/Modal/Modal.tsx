import React, { FunctionComponent, ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: FunctionComponent<ModalProps> = ({ onClose, children }) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;