import styles from "./TestPage.module.scss";
import Button from "../../../components/ui/Button/Button.tsx";
import { ButtonColor, ButtonTestId } from "../../../components/ui/Button/types";
import Icon from "../../../components/ui/Icon/Icon.tsx";
import { IconColor, IconTypes } from "../../../components/ui/Icon/types";

const TestPage = () => {
  return (
    <div className={styles.testPage}>
      <Button
        color={ButtonColor.PRIMARY}
        testId={ButtonTestId.FORWARD}
        withMinWidth
      >
        Продолжить
        <Icon type={IconTypes.RIGHT_ICON} color={IconColor.SECONDARY} />
      </Button>
    </div>
  );
};

export default TestPage;
