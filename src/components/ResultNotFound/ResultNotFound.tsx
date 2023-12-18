import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResultNotFound.module.scss";
import Button from "../ui/Button/Button.tsx";
import notfound from "../../assets/images/search-result.png";
import { ButtonColor, ButtonTestId } from "../ui/Button/types";
import Icon from "../ui/Icon/Icon.tsx";
import { IconColor, IconTypes } from "../ui/Icon/types";
import { ActionType, ResultNotFoundProps } from "./types/index.ts";

const ResultNotFound: FC<ResultNotFoundProps> = (props) => {
  const navigate = useNavigate();
  const { setStep, step = 1, title, subtitle, type } = props;
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
      </div>
      <img
        className={styles.image}
        src={notfound}
        alt="Нет результатов поиска"
      />
      {type === ActionType.FIND && (
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
      )}
      {type === ActionType.ADD && (
        <Button
          testId={ButtonTestId.OTHER}
          color={ButtonColor.SECONDARY}
          withMinWidth
          type="button"
          onClick={() => navigate("/addsection")}
        >
          <Icon type={IconTypes.PLUS} color={IconColor.SECONDARY} />
          Добавить секцию
        </Button>
      )}
    </div>
  );
};

export default ResultNotFound;
