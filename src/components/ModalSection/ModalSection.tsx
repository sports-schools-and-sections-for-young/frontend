import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ModalSection.module.scss";
import Button from "../ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../ui/Button/types";
import sectionAddedImg from "../../assets/images/section-added.png";
import sectionEditingImg from "../../assets/images/section-edit-mobile.png";
import Modal from "../Modal/Modal";

interface ModalSectionProps {
  isEditing: boolean;
}

const ModalSection: React.FC<ModalSectionProps> = ({ isEditing }) => {
  const navigate = useNavigate();

  const closeModal = () => {};

  const imageSrc = isEditing ? sectionEditingImg : sectionAddedImg;

  return (
    <Modal closeModal={closeModal}>
      <div className={styles.modalSection}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={imageSrc} alt="Статус секции" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            {isEditing ? "Изменения " : "Поздравляем, "}
            <span className={styles.span}>
              {isEditing ? "успешно сохранены" : "секция добавлена"}
            </span>
          </h1>

          <p className={styles.subtitle}>
            Секция появится в поиске, после проверки модератором!
          </p>
          <div className={styles.buttonContainer}>
            <Button
              className={styles.button}
              color={ButtonColor.PRIMARY}
              testId={ButtonTestId.FORWARD}
              onClick={() => navigate("/profile/", { replace: true })}
            >
              Перейти в секции
            </Button>
            <Button
              className={styles.button}
              color={ButtonColor.SECONDARY}
              testId={ButtonTestId.FORWARD}
              onClick={() => navigate("/", { replace: true })}
            >
              На главную
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSection;
