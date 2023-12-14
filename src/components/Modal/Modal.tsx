import { useEffect, FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from "./Modal.module.scss";

const modalsContainer = document.querySelector("#modals") as HTMLElement;

type TModalProps = {
  closeModal: () => void;
  children: ReactNode;
};

const Modal: FC<TModalProps> = ({ closeModal, children }) => {
  useEffect(() => {
    const handleEscKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscKeydown);

    return () => {
      document.removeEventListener("keydown", handleEscKeydown);
    };
  }, [closeModal]);

  return createPortal(
    <>
      <div className={styles.modal}>{children}</div>
      <ModalOverlay onClick={closeModal} />
    </>,
    modalsContainer,
  );
};

export default Modal;
