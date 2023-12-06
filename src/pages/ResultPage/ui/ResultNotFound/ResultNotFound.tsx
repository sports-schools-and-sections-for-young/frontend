import { useNavigate } from "react-router-dom";
import styles from "./ResultNotFound.module.scss";
import Button from "../../../../components/ui/Button/Button.tsx";
import notfound from "../../../../assets/images/search-result.png";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types/index.ts";
import Icon from "../../../../components/ui/Icon/Icon.tsx";
import { IconTypes } from "../../../../components/ui/Icon/types/index.ts";

const ResultNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Нет подходящих результатов</h2>
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
        onClick={() => navigate("/search")}
      >
        Изменить
        <Icon type={IconTypes.RIGHT_ICON} />
      </Button>
    </div>
  );
};

export default ResultNotFound;
