import React from "react";
import styles from "./QuizNavBar.module.scss";
import Button from "../../ui/Button/Button.tsx";
import { ButtonColor, ButtonTestId } from "../../ui/Button/types";
import Icon from "../../ui/Icon/Icon.tsx";
import { IconTypes } from "../../ui/Icon/types";
import { NavProps } from "../types";

const QuizNavBar: React.FC<NavProps> = (props) => {
  const { stage, setPreviousStage } = props;
  function handleClose(): void {
    window.location.reload();
  }

  return (
    <div className={styles.quizNav}>
      <Button
        color={ButtonColor.SECONDARY}
        testId={ButtonTestId.OTHER}
        onClick={setPreviousStage}
      >
        <Icon type={IconTypes.LEFT_ICON} />
        Назад
      </Button>
      <div className={styles.navBar}>
        <div
          id="1"
          className={stage > -1 ? styles.navItemUnlock : styles.navItem}
        >
          <p>1</p>
        </div>
        <hr className={styles.navLine} />
        <div className={stage > 0 ? styles.navItemUnlock : styles.navItem}>
          <p>2</p>
        </div>
        <hr className={styles.navLine} />
        <div className={stage > 1 ? styles.navItemUnlock : styles.navItem}>
          <p>3</p>
        </div>
        <hr className={styles.navLine} />
        <div className={stage > 2 ? styles.navItemUnlock : styles.navItem}>
          <p>4</p>
        </div>
        <hr className={styles.navLine} />
        <div className={stage > 3 ? styles.navItemUnlock : styles.navItem}>
          <p>5</p>
        </div>
        <hr className={styles.navLine} />
        <div className={stage > 4 ? styles.navItemUnlock : styles.navItem}>
          <p>6</p>
        </div>
        <hr className={styles.navLine} />
        <div
          className={stage > 5 ? styles.resultItemUnlock : styles.resultItem}
        />
      </div>
      <button
        type="button"
        aria-label="Закрыть квиз"
        className={styles.closeButton}
        onClick={handleClose}
      />
    </div>
  );
};

export default QuizNavBar;
