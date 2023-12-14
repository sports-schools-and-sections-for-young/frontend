import { useNavigate } from "react-router-dom";
import { Dispatch, FC, SetStateAction } from "react";
import styles from "./ResultNotFound.module.scss";
import Button from "../ui/Button/Button.tsx";
import notfound from "../../assets/images/search-result.png";
import { ButtonColor, ButtonTestId } from "../ui/Button/types";
import Icon from "../ui/Icon/Icon.tsx";
import { IconTypes } from "../ui/Icon/types";

interface ResultNotFoundProps {
  setStep?: Dispatch<SetStateAction<number>>;
  step?: number;
}

const ResultNotFound: FC<ResultNotFoundProps> = ({ setStep, step = 1 }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Ничего не найдено</h2>
        <h3 className={styles.subtitle}>
          Попробуйте изменить параметры запроса
        </h3>
      </div>
      <img
        className={styles.image}
        src={notfound}
        alt="Нет результатов поиска"
      />
      <Button
        testId={ButtonTestId.FORWARD}
        color={ButtonColor.PRIMARY}
        withMinWidth
        type="button"
        onClick={() => {
          navigate("/search", { state: { step: 1 } });
          if (setStep) {
            setStep(step);
          }
        }}
      >
        Изменить параметры
        <Icon type={IconTypes.RIGHT_ICON} />
      </Button>
    </div>
  );
};

export default ResultNotFound;
