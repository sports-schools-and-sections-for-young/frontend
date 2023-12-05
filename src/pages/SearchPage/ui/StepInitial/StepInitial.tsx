import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./StepInitial.module.scss";
import ImageCard from "../../../../components/ui/ImageCard/ImageCard.tsx";
import { ImageCardSize } from "../../../../components/ui/ImageCard/types";
import SearchImage from "../../../../assets/images/search-main.png";
import Button from "../../../../components/ui/Button/Button.tsx";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";
import Icon from "../../../../components/ui/Icon/Icon.tsx";
import { IconTypes } from "../../../../components/ui/Icon/types";
import { StepProps } from "../../types";

const StepInitial: FC<StepProps> = ({ step, setStep }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.step}>
      <ImageCard
        size={ImageCardSize.SEARCH_IMG}
        src={SearchImage}
        alt="Дети с мячом."
      />
      <h1 className={styles.title}>
        Ответьте на несколько вопросов, и мы{" "}
        <span className={styles.span}>найдем спортивные занятия</span> для
        вашего ребенка
      </h1>
      <Button
        onClick={() => {
          navigate("/search", { state: { step: step + 1 } });
          setStep(step + 1);
        }}
        className={styles.button}
        color={ButtonColor.PRIMARY}
        testId={ButtonTestId.FORWARD}
      >
        Начать <Icon type={IconTypes.RIGHT_ICON} />
      </Button>
    </div>
  );
};

export default StepInitial;
