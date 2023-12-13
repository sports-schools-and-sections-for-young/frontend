import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./MainFooter.module.scss";
import Footer from "../ui/Footer/Footer";

const MainFooter: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.lightPart}>
        <div className={styles.container}>
          <p className={styles.description}>
            СпортХаб — платформа для поиска спортивных секций для детей
            от 3 до 18 лет
          </p>
          <div className={styles.feedbackContainer}>
            <h4 className={styles.title}>Обратная связь</h4>
            <p className={styles.questions}>
              Есть пожелания или вопросы по&nbsp;работе&nbsp;сервиса? Напишите
              нам
            </p>
            <Link className={styles.email} to="mailto:yourmail@domain.com">
              Почта@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </footer>
  );
};

export default MainFooter;
