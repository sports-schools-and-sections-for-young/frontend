import { FC } from "react";
import styles from "./ModalContent.module.scss";
import Button from "../ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../ui/Button/types";
import CloseButton from "../ui/CloseButton/CloseButton";
import { IModalContentProps, ModalType } from "./types";

const ModalContent: FC<IModalContentProps> = (props) => {
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
  const divideSucc = title.lastIndexOf(" ");

  return (
    <div className={styles.container}>
      {(type === ModalType.DELETE || type === ModalType.EXIT) && (
        <CloseButton className={styles.closeBtn} onClick={closeModal} />
      )}
      {(type === ModalType.DELETE || type === ModalType.EXIT) && (
        <h2 className={styles.title}>
          {title.slice(0, divide)}
          <span className={styles.highlighting}>
            {title.slice(divide, title.length - 1)}
          </span>
          ?
        </h2>
      )}
      {type === ModalType.SUCCSESS || type === ModalType.FAILURE ? (
        <h2 className={styles.title}>
          {title.slice(0, divideSucc)}
          <span className={styles.highlighting}>
            {title.slice(divideSucc, title.length - 1)}
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
        {type !== ModalType.SUCCSESS && type !== ModalType.FAILURE && (
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
        )}
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
  );
};

export default ModalContent;
