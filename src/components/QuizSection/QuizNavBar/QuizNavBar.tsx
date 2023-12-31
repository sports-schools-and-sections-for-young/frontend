import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuizNavBar.module.scss";
import Button from "../../ui/Button/Button.tsx";
import { ButtonColor, ButtonTestId } from "../../ui/Button/types";
import Icon from "../../ui/Icon/Icon.tsx";
import { IconTypes } from "../../ui/Icon/types";
import { NavProps } from "../types";
import ButtonBackMobile from "../../ui/ButtonBackMobile/ButtonBackMobile.tsx";
import { useResize } from "../../../hooks/useResize.tsx";

const QuizNavBar: React.FC<NavProps> = (props) => {
  const navigate = useNavigate();
  const { isMobileScreen } = useResize();
  const { stage, setPreviousStage } = props;
  function handleClose(): void {
    navigate("/", { replace: true });
  }

  return stage < 7 ? (
    <div className={styles.quizNav}>
      {isMobileScreen ? (
        <ButtonBackMobile
          className={styles.arrowButton}
          onClick={setPreviousStage}
        />
      ) : (
        <Button
          color={ButtonColor.SECONDARY}
          testId={ButtonTestId.OTHER}
          onClick={setPreviousStage}
        >
          <Icon type={IconTypes.LEFT_ICON} />
          Назад
        </Button>
      )}
      <div className={styles.navBar}>
        <div
          id="1"
          className={stage > -1 ? styles.navItemUnlock : styles.navItem}
        >
          <p>1</p>
        </div>
        <hr
          className={
            stage > -1
              ? `${styles.navLine} ${styles.navLineUnlock}`
              : styles.navLine
          }
        />
        <div className={stage > 0 ? styles.navItemUnlock : styles.navItem}>
          <p>2</p>
        </div>
        <hr
          className={
            stage > 0
              ? `${styles.navLine} ${styles.navLineUnlock}`
              : styles.navLine
          }
        />
        <div className={stage > 1 ? styles.navItemUnlock : styles.navItem}>
          <p>3</p>
        </div>
        <hr
          className={
            stage > 1
              ? `${styles.navLine} ${styles.navLineUnlock}`
              : styles.navLine
          }
        />
        <div className={stage > 2 ? styles.navItemUnlock : styles.navItem}>
          <p>4</p>
        </div>
        <hr
          className={
            stage > 2
              ? `${styles.navLine} ${styles.navLineUnlock}`
              : styles.navLine
          }
        />
        <div className={stage > 3 ? styles.navItemUnlock : styles.navItem}>
          <p>5</p>
        </div>
        <hr
          className={
            stage > 3
              ? `${styles.navLine} ${styles.navLineUnlock}`
              : styles.navLine
          }
        />
        <div className={stage > 4 ? styles.navItemUnlock : styles.navItem}>
          <p>6</p>
        </div>
        <hr
          className={
            stage > 4
              ? `${styles.navLine} ${styles.navLineUnlock}`
              : styles.navLine
          }
        />
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
  ) : isMobileScreen ? (
    <button
      type="button"
      aria-label="Закрыть квиз"
      className={styles.closeResultButton}
      onClick={handleClose}
    />
  ) : (
    <div className={styles.quizNav}>
      <Button
        color={ButtonColor.SECONDARY}
        testId={ButtonTestId.OTHER}
        onClick={setPreviousStage}
      >
        <Icon type={IconTypes.LEFT_ICON} />
        Назад
      </Button>
      <p className={styles.resultTitle}>Подходящий вид спорта для вас</p>
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
