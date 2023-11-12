import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./MainFooter.module.scss";

const MainFooter: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.lightPart}>
        <div className={styles.container}>
          <p className={styles.contacts}>Обратная связь</p>
          <p className={styles.questions}>
            Есть пожелания или вопросы по&nbsp;работе&nbsp;сервиса? Напишите нам
          </p>
          <Link className={styles.email} to="mailto:yourmail@domain.com">
            Почта@gmail.com
          </Link>
        </div>
      </div>
      <div className={styles.darkPart} />
    </footer>
  );
};

export default MainFooter;
