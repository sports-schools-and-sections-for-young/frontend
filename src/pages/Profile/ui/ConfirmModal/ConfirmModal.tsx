import { FC, ReactNode } from "react";
import styles from "./ConfirmModal.module.scss";
import Close from "../../../../assets/images/icons/Close.svg?react";

type TModalProps = {
  closeModal: () => void;
  children: ReactNode;
};

const ConfirmModal: FC<TModalProps> = ({ closeModal, children }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.buttonContainer}>
        <button type="button" className={styles.button} onClick={closeModal}>
          <Close />
        </button>
      </div>
      {children}
    </div>
  );
};

export default ConfirmModal;
