import React, { FC } from "react";
import styles from "./QuizSection.module.scss";
import Button from "../ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../ui/Button/types";
import QuizQuestion from "./QuizQuestion/QuizQuestion";
import { quizData, quizResultData } from "../../utils/constants/quizData";
import { QuizResultProps } from "./types/index";
import QuizRezult from "./QuizResult/QuizResult";
import QuizNavBar from "./QuizNavBar/QuizNavBar";

const QuizSection: FC = () => {
  const [currentStage, setCurrentStage] = React.useState(-2);
  const [quizResult, setQuizResult] = React.useState({});
  const [quizCategory, setQuizCategory] = React.useState(-1);
  const [quizCategoryObj, setQuizCategoryObj] = React.useState<QuizResultProps>(
    {
      result: {
        category: 0,
        title: "",
        sports: "",
        textUp: "",
        textDown: "",
        src: "",
      },
    },
  );
  function setResult(stageNumber: number, value: number): void {
    setQuizResult({ ...quizResult, [stageNumber]: value });
  }

  function setCategory(): void {
    const singleArr = Object.values(quizResult).filter((i) => i === 1) || [];
    const fightArr = Object.values(quizResult).filter((i) => i === 2) || [];
    const teamArr = Object.values(quizResult).filter((i) => i === 3) || [];
    const res = [singleArr.length, fightArr.length, teamArr.length].reduce(
      (acc, item, index, arr) => {
        return arr[acc] > item ? acc : index;
      },
      -1,
    );
    setQuizCategory(res + 1);
  }

  function setPreviousStage() {
    setCurrentStage(currentStage - 1);
  }

  React.useEffect(() => {
    setCurrentStage(currentStage + 1);
  }, [quizResult]);
  React.useEffect(() => {
    setCurrentStage(-1);
  }, []);
  React.useEffect(() => {
    if (currentStage === 7) {
      setCategory();
      setCurrentStage(currentStage + 1);
    }
  }, [currentStage]);
  React.useEffect(() => {
    if (quizCategory >= 0) {
      const data = quizResultData.find(
        (item) => item.result.category === quizCategory,
      );
      if (data) setQuizCategoryObj(data);
    }
  }, [quizCategory]);
  return (
    <section className={styles.quiz}>
      {currentStage === -1 && (
        <div className={styles.quizContainer}>
          <h2 className={styles.title}>
            Не можете определиться с видом спорта? - Наш Квиз поможет!
          </h2>
          <p className={styles.description}>
            Наш квиз поможет определиться с наиболее подходящим видом спорта для
            вас. Просто ответьте на несколько вопросов о предпочтениях и
            интересах, и мы предоставим персонализированные рекомендации
          </p>
          <Button
            color={ButtonColor.PRIMARY}
            testId={ButtonTestId.OTHER}
            onClick={() => setCurrentStage(0)}
          >
            Пройти квиз!
          </Button>
        </div>
      )}
      {currentStage >= 0 && currentStage < 7 && (
        <div className={styles.fixed}>
          <QuizNavBar
            stage={currentStage}
            setPreviousStage={setPreviousStage}
          />
          <div className={styles.stageContainer}>
            <QuizQuestion func={setResult} choice={quizData[currentStage]} />
          </div>
        </div>
      )}
      {quizCategory >= 0 && (
        <div className={styles.fixed}>
          <QuizRezult result={quizCategoryObj.result} />
        </div>
      )}
    </section>
  );
};

export default QuizSection;
