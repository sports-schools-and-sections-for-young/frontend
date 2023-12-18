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
import { useResize } from "../../../../hooks/useResize.tsx";

const StepInitial: FC<StepProps> = ({ step, setStep }) => {
  const navigate = useNavigate();

  const { isMobileScreen } = useResize();

  return (
    <div className={styles.step}>
      <ImageCard
        size={ImageCardSize.SEARCH_IMG}
        src={SearchImage}
        alt="Дети с мячом."
        className={styles.image}
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
      {isMobileScreen && (
        <Button
          onClick={() => navigate("/")}
          className={styles.button}
          color={ButtonColor.SECONDARY}
          testId={ButtonTestId.BACK}
        >
          Вернуться назад
        </Button>
      )}
    </div>
  );
};

export default StepInitial;
