import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuizSection.module.scss";
import Button from "../ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../ui/Button/types";

const QuizSection: FC = () => {
  const navigation = useNavigate();
  return (
    <section className={styles.quiz}>
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
          className={styles.button}
          color={ButtonColor.PRIMARY}
          testId={ButtonTestId.OTHER}
          onClick={() => navigation("/quiz", { replace: true })}
        >
          Пройти квиз!
        </Button>
      </div>
    </section>
  );
};

export default QuizSection;
