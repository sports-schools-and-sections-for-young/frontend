import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Quiz.module.scss";
import QuizQuestion from "./QuizQuestion/QuizQuestion";
import { quizData, quizResultData } from "../../utils/constants/quizData";
import { QuizResultProps } from "./types/index";
import QuizRezult from "./QuizResult/QuizResult";
import QuizNavBar from "./QuizNavBar/QuizNavBar";

const Quiz: FC = () => {
  const navigate = useNavigate();
  const [currentStage, setCurrentStage] = React.useState(0);
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
    if (currentStage === 0) {
      navigate("/", { replace: true });
    }
    if (currentStage === 7) {
      setQuizCategory(-1);
    }
    setCurrentStage(currentStage - 1);
  }

  React.useEffect(() => {
    setCurrentStage(currentStage + 1);
  }, [quizResult]);
  React.useEffect(() => {
    setCurrentStage(0);
  }, []);
  React.useEffect(() => {
    if (currentStage === 7) {
      setCategory();
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
      {currentStage >= 0 && currentStage < 7 && (
        <div className={styles.questionContainer}>
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
        <div className={styles.resultContainer}>
          <QuizNavBar
            stage={currentStage}
            setPreviousStage={setPreviousStage}
          />
          <QuizRezult result={quizCategoryObj.result} />
        </div>
      )}
    </section>
  );
};

export default Quiz;
