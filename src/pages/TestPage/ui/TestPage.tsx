import { useContext } from "react";
import { API_URL } from "../../../utils/variables.ts";
import Button, {
  ButtonColor,
  ButtonSize,
} from "../../../components/ui/Button/Button.tsx";
import styles from "./TestPage.module.scss";
import AppContext from "../../../context";

const TestPage = () => {
  const { sports, setSports } = useContext(AppContext);

  const getSports = async () => {
    const res = await fetch(`${API_URL}/sports`);
    const data = await res.json();
    setSports(data);
  };

  return (
    <div className={styles.testPage}>
      <Button
        type="button"
        size={ButtonSize.MEDIUM}
        color={ButtonColor.PRIMARY}
        onClick={getSports}
      >
        Нажми на меня
      </Button>
      <div>
        {sports.length
          ? sports.map((sport) => <div key={sport.id}>{sport.name}</div>)
          : null}
      </div>
    </div>
  );
};

export default TestPage;
