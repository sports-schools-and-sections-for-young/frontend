import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuizResult.module.scss";
import Button from "../../ui/Button/Button.tsx";
import { ButtonColor, ButtonTestId } from "../../ui/Button/types";
import Icon from "../../ui/Icon/Icon.tsx";
import { IconTypes } from "../../ui/Icon/types";
import ImageCard from "../../ui/ImageCard/ImageCard";
import { ImageCardSize } from "../../ui/ImageCard/types";
import sportImg from "../../../assets/images/slider-image-football.png";

const QuizRezult: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.quizResult}>
      <div className={styles.infoWrapper}>
        <h3 className={styles.title}>
          Обратите внимание на{" "}
          <span className={styles.highlight}>командный спорт:</span> <br />
          футбол, баскетбол, волейбол
        </h3>
        <p className={styles.description}>
          Это отличный способ социализироваться в группе, взаимодействовать с
          другими детьми и работать в группе. Возможно, ребенок еще не до конца
          раскрылся, а командный дух ему в этом поможет.
        </p>
        <p className={styles.description}>
          Здесь он получит удовольствие от собственного участия, а с каждой
          победой научится доверять и рассчитывать на других для достижения
          целей. Командные виды спорта помогут ребенку стать увереннее в себе,
          развить выносливость и научиться оценивать свои силы.
        </p>
        <Button
          className={styles.button}
          color={ButtonColor.PRIMARY}
          testId={ButtonTestId.OTHER}
          onClick={() => navigate("/search")}
        >
          <>
            Подобрaть занятие
            <Icon type={IconTypes.RIGHT_ICON} />
          </>
        </Button>
      </div>
      <ImageCard size={ImageCardSize.SLIDER_IMG} src={sportImg} alt="футбол" />
    </div>
  );
};

export default QuizRezult;
