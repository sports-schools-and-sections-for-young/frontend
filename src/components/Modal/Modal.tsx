import { useEffect, FC } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from "./Modal.module.scss";
import Button from "../ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../ui/Button/types";
import CloseButton from "../ui/CloseButton/CloseButton";
import { IModalProps, ModalType } from "./types";

const modalsContainer = document.querySelector("#modals") as HTMLElement;

const Modal: FC<IModalProps> = (props) => {
  const {
    type = ModalType.INFO,
    title,
    description,
    closeModal,
    back,
    action,
    actionDescription,
  } = props;
  const divide = title.indexOf("хотите") + 6;
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
      <div className={styles.modal}>
        {type !== ModalType.INFO && (
          <CloseButton className={styles.closeBtn} onClick={closeModal} />
        )}
        {type !== ModalType.INFO ? (
          <h2 className={styles.title}>
            {title.slice(0, divide)}
            <span className={styles.highlighting}>
              {title.slice(divide, title.length - 1)}
            </span>
            ?
          </h2>
        ) : (
          <h2 className={styles.title}>{title}</h2>
        )}
        <p className={styles.description}>{description}</p>
        <div
          className={`${styles.buttonContainer} ${
            type === ModalType.INFO ? styles.oneButton : ""
          }`}
        >
          <Button
            color={
              type === ModalType.DELETE
                ? ButtonColor.DELETE
                : ButtonColor.PRIMARY
            }
            testId={ButtonTestId.OTHER}
            withMinWidth
            onClick={action}
          >
            {actionDescription}
          </Button>
          {type !== ModalType.INFO && (
            <Button
              color={ButtonColor.SECONDARY}
              testId={ButtonTestId.BACK}
              withMinWidth
              onClick={() => back}
            >
              Вернуться назад
            </Button>
          )}
        </div>
      </div>
      <ModalOverlay onClick={closeModal} />
    </>,
    modalsContainer,
  );
};

export default Modal;
