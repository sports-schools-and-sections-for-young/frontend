import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuizResult.module.scss";
import Button from "../../ui/Button/Button.tsx";
import { ButtonColor, ButtonTestId } from "../../ui/Button/types";
import Icon from "../../ui/Icon/Icon.tsx";
import { IconTypes } from "../../ui/Icon/types";
import ImageCard from "../../ui/ImageCard/ImageCard";
import { ImageCardSize } from "../../ui/ImageCard/types";
import { QuizResultProps } from "../types/index.ts";
import image1 from "../../../assets/images/slider-image-swimming.png";
import image2 from "../../../assets/images/slider-image-gymnastics.png";
import image3 from "../../../assets/images/slider-image-football.png";

const QuizRezult: React.FC<QuizResultProps> = (props) => {
  const { result } = props;
  const navigate = useNavigate();
  const [resultImage, setResultImage] = React.useState("");
  React.useEffect(() => {
    if (result.category === 1) setResultImage(image1);
    if (result.category === 2) setResultImage(image2);
    if (result.category === 3) setResultImage(image3);
  }, [result.category]);

  return (
    <div className={styles.quizResult}>
      <div className={styles.infoWrapper}>
        <h3 className={styles.title}>
          Обратите внимание на{" "}
          <span className={styles.highlight}>{result.title}</span> <br />
          {result.sports}
        </h3>
        <p className={styles.description}>{result.textUp}</p>
        <p className={styles.description}>{result.textDown}</p>
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
      <ImageCard
        size={ImageCardSize.SLIDER_IMG}
        src={resultImage}
        alt={result.sports}
      />
    </div>
  );
};

export default QuizRezult;
