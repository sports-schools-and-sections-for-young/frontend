import React, { FC } from "react";
import styles from "./QuizQuestion.module.scss";
import { QuizQuestionProps } from "../types/index.ts";
import Button from "../../ui/Button/Button.tsx";
import { ButtonColor, ButtonTestId } from "../../ui/Button/types/index.ts";
import Icon from "../../ui/Icon/Icon.tsx";
import { IconTypes } from "../../ui/Icon/types/index.ts";

const QuizQuestion: FC<QuizQuestionProps> = (props) => {
  const { func, choice } = props;
  const { stage, question, options } = choice;
  const [currentValue, setCurrentValue] = React.useState(0);

  function setResults(): void {
    if (currentValue > 0) func(stage, currentValue);
  }
  React.useEffect(() => {
    setCurrentValue(0);
  }, [stage]);
  return (
    <div className={styles.container}>
      <h3 className={styles.question}>{question}</h3>
      <div className={styles.optionsContainer}>
        <ul className={styles.options}>
          {options.map((option) => {
            return (
              <li className={styles.option} key={option.category}>
                <label htmlFor="answer" className={styles.optionLabel}>
                  <input
                    type="radio"
                    name="answer"
                    className={styles.optionInput}
                    value={option.category}
                    onChange={() => setCurrentValue(option.category)}
                    checked={currentValue === option.category}
                  />
                  <span className={styles.optionSelected} />
                </label>
                <p className={styles.optionName}>{option.answer}</p>
              </li>
            );
          })}
        </ul>
        <Button
          className={styles.button}
          color={ButtonColor.PRIMARY}
          testId={ButtonTestId.FORWARD}
          onClick={() => setResults()}
        >
          Дальше
          <Icon type={IconTypes.RIGHT_ICON} />
        </Button>
      </div>
    </div>
  );
};

export default QuizQuestion;
